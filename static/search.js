(function () {
    var INDEXS = {};
    var helper;

    var isMobile = document.body.clientWidth <= 600;

    function escapeHtml(string) {
        var entityMap = {
            '&': '&amp;',
            '<': '&lt;',
            '>': '&gt;',
            '"': '&quot;',
            '\'': '&#39;',
            '/': '&#x2F;'
        };

        return String(string).replace(/[&<>"'/]/g, function (s) {
            return entityMap[s];
        })
    }

    function getAllPaths(router) {
        var paths = [];

        helper.dom.findAll('a:not([data-nosearch])').forEach(function (node) {
            var href = node.href;
            var originHref = node.getAttribute('href');
            var path = router.parse(href).path;

            if (
                path &&
                paths.indexOf(path) === -1 &&
                !Docsify.util.isAbsolutePath(originHref)
            ) {
                paths.push(path);
            }
        });

        return paths
    }

    function saveData(maxAge) {
        localStorage.setItem('docsify.search.locale', getCookie('user_set_language'))
        localStorage.setItem('docsify.search.expires', Date.now() + maxAge);
        localStorage.setItem('docsify.search.index', JSON.stringify(INDEXS));
    }

    /**
     * created by xxxxxx
     * 处理解析的结果是table的情况
     * 将table的内容直接序列化添加到body内
     * 用于解决无法搜索表格中内容的问题
     */
    function _serializeTable(table) {
        var text = '';
        // 只处理cells，header目前看来没必要处理。
        if (!!table.cells && !!table.cells.length) {
            for (var i = 0, ilen = table.cells.length; i < ilen; i++) {
                var cells = table.cells[i];
                for (var j = 0, jlen = cells.length; j < jlen; j++) {
                    if (!!cells[j].trim()) {
                        text += cells[j] + ' ';
                    }
                }
            }
        }
        return text;
    }

    const docMetaReg = /^<!--+\s*\n\/\/\/\s+meta\s*\n(.*)\n\s*-->/s

    function isMeta(html) {
        return docMetaReg.test(html)
    }

    function parseMeta(html) {
        var metaMatch = html.match(docMetaReg)
        if (!metaMatch || !metaMatch[1]) {
            return
        }
        var result = {}
        metaMatch[1].split('\n').forEach(row => {
            row = row.trim()
            row = row.split(':')
            if (row.length === 2) {
                result[row[0].trim()] = row[1].trim()
            }
        })
        return result
    }

    function genIndex(path, content, router, depth) {
        content = content.replace(/^\s*$/g, '') || '';
        // fixed by hxy 处理页面顶部无标题时，内容无法被搜索到的情况。
        if (!content.match(/^#/)) {
            var title = 'uni-app';
            var matchResult = path.match(/\/([^\/]+)/i);
            if (matchResult && matchResult[1]) {
                title = matchResult[1]
            }
            content = '# ' + title + '\n' + content;
        }

        var tokens = window.marked.lexer(content);
        var slugify = window.Docsify.slugify;
        var index = {};
        var slug;
        // fixed by zgh 处理单独四级标题语意不清晰
        var fixf = null;
        var fixl = 4; // 需要添加前缀的标题级别
        var fixspan = 3; // 被作为前缀添加的标题级别

        tokens.forEach(function (token, tokenIndex) {
            // modified by wangyaqi 搜索结果不限制标题层级
            if (token.type === 'heading') {
                if (token.depth < fixspan) fixf = null;
                if (token.depth === fixspan) fixf = token.text;

                // created by xxxxxx 处理标题别名
                var matchSlug = token.text.match(/@([A-Za-z0-9\-]+)/);
                var slugText = '';
                if (matchSlug) {
                    slugText = matchSlug[1];
                    token.text = token.text.replace(matchSlug[0], '');
                } else {
                    slugText = token.text;
                }
                slug = router.toURL(path, {
                    id: slugify(slugText)
                });
                index[slug] = {
                    slug: slug,
                    title: token.text,
                    body: '',
                    keyword: []
                };

                var metaToken = tokens[tokenIndex + 1]
                if (metaToken && metaToken.type === 'html' && isMeta(metaToken.text)) {
                    var meta = parseMeta(metaToken.text)
                    if (meta && meta.keyword) {
                        index[slug].keyword = meta.keyword.split(',').map(item => item.trim())
                    }
                }

                if (token.depth === fixl && fixf) {
                    index[slug].title = fixf + '#' + index[slug].title;
                }
            } else {
                if (!slug) {
                    return
                }
                if (!index[slug]) {
                    index[slug] = {
                        slug: slug,
                        title: '',
                        body: ''
                    };
                } else if (index[slug].body) {
                    if (token.type === 'table') {
                        index[slug].body += '\n' + (_serializeTable(token));
                    } else {
                        index[slug].body += '\n' + (token.text || '');
                    }
                } else {
                    if (token.type === 'table') {
                        index[slug].body = _serializeTable(token);
                    } else {
                        index[slug].body = token.text;
                    }
                }
            }
        });
        slugify.clear();
        return index
    }

    /**
     * created by xxxxxx
     * handle body&title
     */
    function _handlePost(post) {
        var title = post.title || '';
        var body = post.body || '';
        // title 去除掉方法后面的括号及里面的内容
        title = title.replace(/\(.*\)/, '');
        // body 部分去除换行和空格
        body = body.replace(/\n\s+/g, '');
        return {
            title: _replaceMark(title),
            body: _replaceMark(body),
            slug: post.slug,
            keyword: post.keyword
        }
    };

    // 移除部分.md的标记
    function _replaceMark(str) {
        // 		var reg = new RegExp( // fixed by hulin 删除-匹配规则
        // 			'[#*\-]',
        // 			'gi'
        // 		);
        var reg = new RegExp(
            '[*\]',
            'gi'
        );
        return str.replace(reg, '');
    }

    /**
     * @param {String} query
     * @returns {Array}
     */
    var TiTlePriority = 10
    var BaseKeywordPriority = 2
    var ContentPriority = 1
    function search(query) {
        var matchingResults = [];
        var data = [];
        Object.keys(INDEXS).forEach(function (key) {
            data = data.concat(Object.keys(INDEXS[key]).map(function (page) {
                return INDEXS[key][page];
            }));
        });
        var keyword = query;
        // query = query.trim();
        // 		var keywords = query.split(/[\s\-，\\/]+/); //fixed by hulin 输入什么搜什么
        // 		if (keywords.length !== 1) {
        // 			keywords = [].concat(query, keywords);
        // 		}
        var loop = function (i) {
            var post = _handlePost(data[i]);
            var isMatch = false;
            var resultStr = '';
            var postTitle = post.title && post.title.trim();
            var postKeyword = post.keyword || [];
            var postContent = post.body && post.body.trim();
            var postUrl = post.slug || '';
            if (postTitle && postContent) {
                // From https://github.com/sindresorhus/escape-string-regexp
                var regEx = new RegExp(
                    keyword.replace('-', '\-').replace(/[|\\{}()[\]^$+*?.]/g, '\\$&'),
                    'gi'
                );
                var indexTitle = -1;
                var indexContent = -1;

                isTitle = postTitle && postTitle.match(regEx);
                var matchedKeyword = postKeyword.filter(function (item) {
                    return query.toLowerCase().indexOf(item.toLowerCase()) > -1
                });
                isKeyword = matchedKeyword.length > 0
                isContent = postContent && postContent.match(regEx);

                var matchPriority = 0
                switch (true) {
                    case isTitle:
                        matchPriority = TiTlePriority
                        break;
                    case isKeyword:
                        matchPriority = BaseKeywordPriority + matchedKeyword.length
                        break;
                    case isContent:
                        matchPriority = ContentPriority
                        break;
                    default:
                        break;
                }

                if (!isTitle && !isKeyword && !isContent) {
                    isMatch = false;
                } else {
                    isMatch = true;
                    var indexContent = 0;
                    // postContent = postContent.replace(docMetaReg, '');
                    postContent = postContent.replace(/<!--(.*?)-->/s, '')

                    if (isContent) {
                        indexContent = postContent.indexOf(keyword)
                    }
                    var start = 0;
                    var end = 0;
                    // fixed by xxxxxx
                    // PC端结果加长
                    var limit = isMobile ? 70 : 500;

                    start = indexContent < 11 ? 0 : indexContent - 10;
                    end = start === 0 ? limit : indexContent + keyword.length + limit;

                    if (end > postContent.length) {
                        end = postContent.length;
                    }

                    var matchContent =
                        '...' +
                        escapeHtml(postContent.substring(start, end))
                            .replace(regEx, ("<em class=\"search-keyword\">" + keyword + "</em>")) +
                        '...';

                    resultStr += matchContent;


                    // title 也高亮处理下
                    postTitle = escapeHtml(postTitle).replace(regEx, ("<em class=\"search-keyword\">" + keyword + "</em>"))
                }

                if (isMatch) {
                    var matchingPost = {
                        title: postTitle,
                        content: resultStr,
                        url: postUrl,
                        type: matchPriority
                    };
                    // TODO 调整不同情况的优先级
                    if (postTitle.indexOf("<em class=") === 0) { //如果title第一个就是keyword，则应该加在前面
                        matchingPost.type = 1000
                    }
                    matchingResults.push(matchingPost)
                }
            }
        };

        for (var i = 0; i < data.length; i++) loop(i);

        matchingResults.sort((a, b) => {
            return b.type - a.type
        })

        return matchingResults
    }

    function init$1(config, vm) {
        helper = Docsify;

        var isAuto = config.paths === 'auto';
        var indexLocale = localStorage.getItem('docsify.search.locale')
        var siteLocale = getCookie('user_set_language')
        var isExpired = localStorage.getItem('docsify.search.expires') < Date.now();
        INDEXS = JSON.parse(localStorage.getItem('docsify.search.index'));

        if (isExpired || indexLocale !== siteLocale) {
            INDEXS = {};
        } else if (!isAuto) {
            initSearch(config, vm)
            return
        }

        var paths = isAuto ? getAllPaths(vm.router) : config.paths;
        var len = paths.length;
        var count = 0;

        function loaded() {
            if (count === len) {
                saveData(config.maxAge);
                initSearch(config, vm)
            }
        }

        paths.forEach(function (path) {
            if (INDEXS[path]) {
                count++
                loaded()
                return
            }
            helper
                .get(vm.router.getFile(path), false, vm.config.requestHeaders)
                .then(function (result) {
                    INDEXS[path] = genIndex(path, result, vm.router, config.depth);
                    count++
                    loaded()
                }, function (err) {
                    console.error(err)
                    count++
                    loaded()
                })
        });
    }

    var NO_DATA_TEXT = '';

    function style() {
        var code =
            "\n.sidebar {\n  padding-top: 0;\n}\n\n.search {\n  margin-bottom: 20px;\n  padding: 6px;\n  border-bottom: 1px solid #eee;\n}\n\n.search .input-wrap {\n  display: flex;\n  align-items: center;\n}\n\n.search .results-panel {\n  display: none;\n}\n\n.search .results-panel.show {\n  display: block;\n}\n\n.search input {\n  outline: none;\n  border: none;\n  width: 100%;\n  padding: 0 7px;\n  line-height: 36px;\n  font-size: 14px;\n}\n\n.search input::-webkit-search-decoration,\n.search input::-webkit-search-cancel-button,\n.search input {\n  -webkit-appearance: none;\n  -moz-appearance: none;\n  appearance: none;\n}\n.search .clear-button {\n  width: 36px;\n  text-align: right;\n  display: none;\n}\n\n.search .clear-button.show {\n  display: block;\n}\n\n.search .clear-button svg {\n  transform: scale(.5);\n}\n\n.search h2 {\n  font-size: 17px;\n  margin: 10px 0;\n}\n\n.search a {\n  text-decoration: none;\n  color: inherit;\n}\n\n.search .matching-post {\n  border-bottom: 1px solid #eee;\n}\n\n.search .matching-post:last-child {\n  border-bottom: 0;\n}\n\n.search p {\n  font-size: 14px;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  display: -webkit-box;\n  -webkit-line-clamp: 2;\n  -webkit-box-orient: vertical;\n}\n\n.search p.empty {\n  text-align: center;\n}";

        Docsify.dom.style(code);
    }

    /**
     * fixed by xxxxxx
     * PC端搜索插入在导航条中，移动端保持不变。
     */
    function tpl(opts, defaultValue) {
        if (defaultValue === void 0) defaultValue = '';

        var html =
            "<div class=\"input-wrap\">\n      <input type=\"search\" value=\"" + defaultValue +
            "\" placeholder=\"Search\">\n      <div class=\"clear-button\">\n        <svg width=\"26\" height=\"24\">\n          <circle cx=\"12\" cy=\"12\" r=\"11\" fill=\"#ccc\" />\n          <path stroke=\"white\" stroke-width=\"2\" d=\"M8.25,8.25,15.75,15.75\" />\n          <path stroke=\"white\" stroke-width=\"2\"d=\"M8.25,15.75,15.75,8.25\" />\n        </svg>\n      </div>\n    </div>\n    <div class=\"results-panel\"></div>\n    </div>";
        var searchElem = Docsify.dom.create('div', html);
        var aside = Docsify.dom.find('aside');
        var navbar = Docsify.dom.find('.app-nav');

        Docsify.dom.toggleClass(searchElem, 'search');

        if (isMobile) {
            Docsify.dom.toggleClass(searchElem, 'mobile');
        }

        if (isMobile) {
            Docsify.dom.before(aside, searchElem);
        } else {
            Docsify.dom.toggleClass(searchElem, 'nav-search');
            Docsify.dom.before(navbar, searchElem);
        }
    }

    /**
     * created by xxxxxx
     * 需要处理一下从ask搜索出来的 HTML 串s
     */
    function _handleHTMLString(dataString, keyword) {
        var keywordReg = new RegExp(
            keyword.replace(/[|\\{}()[\]^$+*?.]/g, '\\$&'),
            'gi'
        );
        var tagStartReg = new RegExp(
            '&lt;span style=\'font-weight:bold;color:red\'&gt;',
            'g'
        );
        var tagEndReg = new RegExp(
            '&lt;/span&gt;',
            'g'
        );

        return dataString
            .replace(tagStartReg, '')
            .replace(tagEndReg, '')
            .replace(keywordReg, ("<em class=\"search-keyword\">" + keyword + "</em>"));
    };

    function _renderPost(post, value) {
        var html = '';
        var tagName = '规范';

        if (!!value) {
            post.title = _handleHTMLString(post.title, value);
            post.content = _handleHTMLString(post.content, value);
        }

        html += '<div class="matching-post">\n';
        // 1，问题；2，文章；默认是规范。
        switch (post.type) {
            case 'questions':
                tagName = '问题';
                break;
            case 'articles':
                tagName = '文章';
                break;
            default:
                break;
        }
        html += '<a href="' + (post.url) + '" target="_blank"><div class="post-wrapper">';
        if (!!value) {
            var commentText = post.type === 'questions' ? '回复' : '评论';
            html += '<p class="aw-text"><span class="post-tag">' + tagName + '</span></p>';
        } else {
            html += '<p class="aw-text"><span class="post-tag">' + tagName + '</span></p>';
        }

        html += '\n<h2>' + (post.title) + '</h2></div>';

        if (!!value) {
            html += '<p>' + post.comment_count + '个' + commentText + '<span class="aw-text-space">-</span>' + post.view_count + '次浏览</p>';
        }

        html += '\n<p>' + (post.content) + '</p>\n</a>\n</div>';

        return html;
    }

    /**
     * created by xxxxxx
     * render ext result
     */
    function _renderExt(ext, keyword) {
        var html = '';
        html += '<div class="matching-post">\n';

        html += '<a href="' + (ext.url) + '" target="_blank"><div class="post-wrapper">';
        //  post-tag-plugin
        html += '<p class="aw-text"><span class="post-tag">插件</span></p>';

        html += '\n<h2>' + (ext.name) + '</h2></div>';

        html += '<p>' + ext.total_download + '次下载</p>';

        html += '\n<p>' + (ext.description) + '</p>\n</a>\n</div>';

        return html;
    }

    /**
     * fixed by xxxxxx
     * 手机和PC需要区别处理：
     * 手机上保持原有逻辑，PC上将结果展示在中间的内容区域。
     * 搜索优先级：
     * uni-app 文档 => 插件市场 => ask
     */
    function doSearch(value, vm) {
        var $search = Docsify.dom.find('div.search');
        var $panel = isMobile ? Docsify.dom.find($search, '.results-panel') : document.getElementById('search-results');
        var $searchResultListPanel = isMobile ? $panel : document.getElementById('search-results-list');
        var $searchLinkPanel = document.getElementById('search-result-aside-link');
        var $clearBtn = Docsify.dom.find($search, '.clear-button');

        var $main = document.getElementById('main');

        if (!value) {
            $clearBtn.classList.remove('show');
            $panel.classList.remove('show');
            $searchResultListPanel.innerHTML = '';
            if (!isMobile && $main) {
                $main.classList.remove('hide');
            }
            vm.config.searchPlugin.searching = false;
            return;
        }
        var matchs = search(value);
        var html = '';
        matchs.forEach(function (post) {
            html += _renderPost(post);
        });

        $panel.classList.add('show');
        $clearBtn.classList.add('show');
        // fixed by xxxxxx 文档中搜索无结果，不显示提示，因为还有联网查询。
        // $panel.innerHTML = html || ("<p class=\"empty\">" + NO_DATA_TEXT + "</p>");
        $searchResultListPanel.innerHTML = html || ("<p class=\"empty\"></p>");
        !isMobile && $main.classList.add('hide');

        if ($searchLinkPanel) {
            // TODO 跳转对应搜索结果页面
            var searchTarget = [{
                text: '前往DCloud社区搜索',
                href: 'https://ask.dcloud.net.cn/'
            }, {
                text: '前往uni-app文档搜索',
                href: 'https://uniapp.dcloud.net.cn/?s=' + value
            }, {
                text: '前往原生开发文档搜索',
                href: 'https://nativesupport.dcloud.net.cn/'
            }]

            var searchTargetHtml = searchTarget.map(function (item) {
                return '<a href="' + item.href + '" target="_blank">' + item.text + '</a>'
            }).join('<br/>')
            $searchLinkPanel.innerHTML = searchTargetHtml
        }

        $searchResultListPanel.innerHTML = html || ("<p class=\"empty\"></p>");
        !isMobile && $main.classList.add('hide');
        vm.config.searchPlugin.searching = true;
    }

    /**
     * created by xxxxxx
     * 清除搜索结果
     */
    function clearSearch(vm) {
        var $search = Docsify.dom.find('div.search');
        var $input = Docsify.dom.find($search, 'input');
        var $panel = isMobile ? Docsify.dom.find($search, '.results-panel') : document.getElementById(
            'search-results');
        var $clearBtn = Docsify.dom.find($search, '.clear-button');
        var $main = document.getElementById('main');

        $input.value = '';
        $clearBtn.classList.remove('show');
        $panel.classList.remove('show');
        $panel.innerHTML = '';
        if (!isMobile && $main) {
            $main.classList.remove('hide');
        }
        vm.config.searchPlugin.searching = false;
    }

    function bindEvents(vm) {
        var $search = Docsify.dom.find('div.search');
        var $input = Docsify.dom.find($search, 'input');
        var $inputWrap = Docsify.dom.find($search, '.input-wrap');

        var timeId;
        // Prevent to Fold sidebar
        Docsify.dom.on(
            $search,
            'click',
            function (e) {
                return e.target.tagName !== 'A' && e.stopPropagation();
            }
        );
        Docsify.dom.on($input, 'input', function (e) {
            clearTimeout(timeId);
            // fixed by xxxxxx
            // 出发间隔太短了，加长一些。100 -> 1000
            timeId = setTimeout(function (_) {
                return doSearch(e.target.value.trim(), vm);
            }, 1000);
        });
        Docsify.dom.on($inputWrap, 'click', function (e) {
            // Click input outside
            if (e.target.tagName !== 'INPUT') {
                $input.value = '';
                doSearch('', vm);
            }
        });
    }

    function updatePlaceholder(text, path) {
        var $input = Docsify.dom.getNode('.search input[type="search"]');
        if (!$input) {
            return
        }
        if (typeof text === 'string') {
            $input.placeholder = text;
        } else {
            var match = Object.keys(text).filter(function (key) {
                return path.indexOf(key) > -1;
            })[0];
            $input.placeholder = text[match];
        }
    }

    function updateNoData(text, path) {
        if (typeof text === 'string') {
            NO_DATA_TEXT = text;
        } else {
            var match = Object.keys(text).filter(function (key) {
                return path.indexOf(key) > -1;
            })[0];
            NO_DATA_TEXT = text[match];
        }
    }

    function initSearch(opts, vm) {
        var keywords = vm.router.parse().query.s;

        // fixed by xxxxxx 将css抽离成单独的文件
        // style();

        tpl(opts, keywords);
        /**
         * fixed by xxxxxx
         * 初始化事件和搜索方法，均传入Docsify实例对象。
         */
        bindEvents(vm);
        keywords && setTimeout(function (_) {
            return doSearch(keywords, vm);
        }, 500);
    }

    function update(opts, vm) {
        updatePlaceholder(opts.placeholder, vm.route.path);
        updateNoData(opts.noData, vm.route.path);
    }

    var CONFIG = {
        placeholder: 'Type to search',
        noData: 'No Results!',
        paths: 'auto',
        depth: 2,
        maxAge: 86400000 // 1 day
    };

    /**
     * fixed by xxxxxx
     * 将初始化的内容独立出来
     */
    var getConfig = function (vm, config) {
        var util = Docsify.util;
        var opts = vm.config.search || CONFIG;

        if (Array.isArray(opts)) {
            config.paths = opts;
        } else if (typeof opts === 'object') {
            config.paths = Array.isArray(opts.paths) ? opts.paths : 'auto';
            config.maxAge = util.isPrimitive(opts.maxAge) ? opts.maxAge : config.maxAge;
            config.placeholder = opts.placeholder || config.placeholder;
            config.noData = opts.noData || config.noData;
            config.depth = opts.depth || config.depth;
        }
        return config;
    };

    var install = function (hook, vm) {
        var config = getConfig(vm, CONFIG);
        var isAuto = config.paths === 'auto';

        hook.ready(function (_) {
            // init(config, vm);
            !isAuto && init$1(config, vm);
        });
        hook.doneEach(function (_) {
            update(config, vm);
            isAuto && init$1(config, vm);
        });
    };

    // fixed by xxxxxx
    // $docsify.plugins = [].concat(install, $docsify.plugins);
    /**
     * created by xxxxxx
     * 特殊处理下搜索插件
     */
    $docsify.searchPlugin = {
        install: install,
        clear: clearSearch,
        searching: false,
        init: function () { }
    };
}());
