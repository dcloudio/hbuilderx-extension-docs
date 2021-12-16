function getLanguageText(lan) {
    let data = {
        "develop_product": "开发产品",
        "operations_product": "运营产品",
        "uni_statistics": "uni统计",
        "uni_publish": "uni发行",
        "developer_services": "开发者服务",
        "ask": "问答社区",
        "backstage": "开发者后台",
        "technical_doc": "技术文档",
        "uniapp_doc": "uni-app文档",
        "unicloud_doc": "uniCloud文档",
        "natives_doc": "原生开发者支持文档",
        "hx_doc": "HBuilder文档",
        "ecology": "生态服务",
        "marketplace": "插件市场",
        "oauth": "OAuth用户开放平台",
        "about": "关于我们",
        "dcloud": "DCloud官网",
        "app_case": "案例",
        "demand_for_wall": "需求墙",
        "license": "许可协议",
        "join_us": "加入我们",
        "sponsor_us": "赞助我们",
        "contact_us": "联系我们",
        "business_cooperation": "商务合作",
        "cooperation": "广告合作",
        "cert_3": "国家信息安全等级保护三级，证书编号",
        "website_records": "京公网安备：11010802035340号",
        "sponsored_unit": "发起单位",
        "html5plus": "HTML5中国产业联盟",
        "member": "成员及",
        "company_name": "即数字天堂（北京）网络技术有限公司是"

    };
    switch (lan){
        case "zh-hant":
            data["develop_product"] = "開發產品";
            data["operations_product"] = "運營產品";
            data["uni_statistics"] = "uni統計";
            data["uni_publish"] = "uni發行";
            data["developer_services"] = "開發者服務";
            data["ask"] = "問答社區";
            data["backstage"] = "開發者後臺";
            data["technical_doc"] = "技術文檔";
            data["uniapp_doc"] = "uni-app文檔";
            data["unicloud_doc"] = "uniCloud文檔";
            data["natives_doc"] = "原生開發者支持文檔";
            data["hx_doc"] = "HBuilder文檔";
            data["ecology"] = "生態服務";
            data["marketplace"] = "插件市場";
            data["oauth"] = "OAuth用戶開放平臺";
            data["about"] = "關於我們";
            data["dcloud"] = "DCloud官網";
            data["app_case"] = "案例";
            data["demand_for_wall"] = "需求牆";
            data["license"] = "許可協議";
            data["join_us"] = "加入我們";
            data["sponsor_us"] = "贊助我們";
            data["contact_us"] = "聯繫我們";
            data["business_cooperation"] = "商務合作";
            data["cooperation"] = "廣告合作";
            data["cert_3"] ="國家信息安全等級保護三級，證書編號";
            data["website_records"] = "京公網安備：11010802035340號";
            data["sponsored_unit"] = "發起單位";
            data["html5plus"] = "HTML5中國產業聯盟";
            data["member"] = "成員及";
            data["company_name"] = "即數字天堂（北京）網絡技術有限公司是";
            break;
        case "en":
            break;
        default:
            break;
    };
    return data;
};


// 通用底部导航栏
function initFootLeftNavBar(lan=undefined) {
    let {develop_product} = getLanguageText(lan);
    // 通用底部导航栏
    var footNavList = [{
        'title': develop_product,
        'content': [{
                'subTitle': 'HBuilderX',
                'url': 'https://www.dcloud.io/hbuilderx.html'
            },
            {
                'subTitle': 'uni-app',
                'url': 'https://uniapp.dcloud.net.cn/'
            },
            {
                'subTitle': 'uniCloud',
                'url': 'https://uniapp.dcloud.net.cn/uniCloud/README'
            },
            {
                'subTitle': 'uniMPsdk',
                'url': 'https://nativesupport.dcloud.net.cn/'
            },
            {
                'subTitle': '5+Runtime',
                'url': 'https://www.dcloud.io/runtime.html'
            },
            {
                'subTitle': 'wap2app',
                'url': 'https://www.dcloud.io/wap2app.html?platform=wap2app'
            },
            {
                'subTitle': 'MUI',
                'url': 'https://www.dcloud.io/mui.html'
            },
            {
                'subTitle': 'uni-id',
                'url': 'https://uniapp.dcloud.net.cn/uniCloud/uni-id'
            },
            {
                'subTitle': 'uniPay',
                'url': 'https://uniapp.dcloud.net.cn/uniCloud/unipay'
            },
            {
                'subTitle': 'uniPush',
                'url': 'https://uniapp.dcloud.net.cn/unipush'
            },
            {
                'subTitle': 'uni-verify',
                'url': 'https://uniapp.dcloud.io/univerify'
            },
            {
                'subTitle': 'sms',
                'url': 'https://uniapp.dcloud.net.cn/uniCloud/send-sms'
            },
            {
                'subTitle': 'uni-starter',
                'url': 'https://ext.dcloud.net.cn/plugin?id=5057'
            },
            {
                'subTitle': 'uni-admin',
                'url': 'https://uniapp.dcloud.net.cn/uniCloud/admin'
            },
            {
                'subTitle': 'uni-upgrade-center',
                'url': 'https://uniapp.dcloud.io/uniCloud/upgrade-center'
            },
        ]
    }]

    let htmlStringLeft = '';
    // 左侧分类
    for (var i = 0; i < footNavList.length; i++) {
        let navItemDom = document.createElement('div')
        navItemDom.className = "footNavItem"
        navItemDom.innerHTML =
            `<div class="navItemTitle">${footNavList[i].title}</div>
        <div class="navLine"></div>
        <div class="navItemDetailBox"></div>`

        for (var j = 0; j < footNavList[i].content.length; j++) {
            let aDom = document.createElement('a')
            aDom.className = "navItemDetail"
            aDom.innerText = footNavList[i].content[j].subTitle
            aDom.href = footNavList[i].content[j].url
            aDom.target = "_blank"
            navItemDom.getElementsByClassName('navItemDetailBox')[0].appendChild(aDom)
        }
        // document.querySelector("#footNavClassify").appendChild(navItemDom)
        htmlStringLeft += navItemDom.outerHTML
    }

    return htmlStringLeft
}

// 右侧
function initFootRightNavBar(lan=undefined) {
    let data = getLanguageText(lan);
    let {operations_product,uni_statistics,uni_publish,developer_services,ask,backstage,technical_doc,uniapp_doc,unicloud_doc,natives_doc,hx_doc,ecology,marketplace,oauth,about,dcloud,app_case,demand_for_wall,license,join_us,sponsor_us,contact_us,business_cooperation,cooperation} = data;
    var aboutusList = [{
            'title': operations_product,
            'content': [{
                    'subTitle': 'uni-AD',
                    'url': 'https://uniad.dcloud.net.cn/login'
                },
                {
                    'subTitle': uni_statistics,
                    'url': 'https://tongji.dcloud.net.cn/'
                },
                {
                    'subTitle': uni_publish,
                    'url': 'https://www.dcloud.io/dportal.html'
                },
                {
                    'subTitle': '',
                    'url': ''
                },
                {
                    'subTitle': '',
                    'url': ''
                },
                {
                    'subTitle': '',
                    'url': ''
                },
            ]
        },
        {
            'title': developer_services,
            'content': [{
                    'subTitle': ask,
                    'url': 'https://ask.dcloud.net.cn/explore/'
                },
                {
                    'subTitle': backstage,
                    'url': 'https://dev.dcloud.net.cn/'
                }
            ]
        },
        {
            'title': technical_doc,
            'content': [{
                    'subTitle': uniapp_doc,
                    'url': 'https://uniapp.dcloud.io/'
                },
                {
                    'subTitle': unicloud_doc,
                    'url': 'https://uniapp.dcloud.io/uniCloud/README'
                },
                {
                    'subTitle': natives_doc,
                    'url': 'https://nativesupport.dcloud.net.cn/'
                },
                {
                    'subTitle': hx_doc,
                    'url': 'https://hx.dcloud.net.cn/'
                }
            ]
        },
        {
            'title': ecology,
            'content': [{
                    'subTitle': marketplace,
                    'url': 'https://ext.dcloud.net.cn/'
                },
                {
                    'subTitle': oauth,
                    'url': 'https://open.dcloud.net.cn/pages/login/login'
                }
            ]
        },
        {
            'title': about,
            'content': [{
                    'subTitle': dcloud,
                    'url': 'https://dcloud.io/'
                },
                {
                    'subTitle': app_case,
                    'url': 'https://uniapp.dcloud.io/case'
                },
                {
                    'subTitle': demand_for_wall,
                    'url': 'https://dev.dcloud.net.cn/wish/?channel=uniapp'
                },
                {
                    'subTitle': license,
                    'url': 'https://ask.dcloud.net.cn/article/35623'
                },
                {
                    'subTitle': join_us,
                    'url': 'https://www.dcloud.io/hr/'
                },
                {
                    'subTitle': sponsor_us,
                    'url': 'https://dev.dcloud.net.cn/sponsor/'
                }
            ]
        },
        {
            'title': contact_us,
            'content': [{
                    'subTitle': business_cooperation +'：bd@dcloud.io',
                    'url': 'mailto:bd@dcloud.io'
                },
                {
                    'subTitle': cooperation +'：uniad@dcloud.io',
                    'url': 'mailto:uniad@dcloud.io'
                },
            ]
        }
    ]
    let htmlStringRight = '';
    for (var f = 0; f < aboutusList.length; f++) {
        let aboutusDom = document.createElement('div')
        aboutusDom.className = "footNavItem"
        aboutusDom.innerHTML =
            `<div class="navItemTitle">${aboutusList[f].title}</div>
      <div class="navLine"></div>
      <div class="aboutItemDetailBox"></div>`
        for (var g = 0; g < aboutusList[f].content.length; g++) {
            let aboutItemDom = document.createElement('a')
            aboutItemDom.className = "navItemDetail"
            // aboutItemDom.setAttribute('style', 'margin-bottom:15px;')
            aboutItemDom.innerText = aboutusList[f].content[g].subTitle
            aboutItemDom.href = aboutusList[f].content[g].url
            aboutItemDom.target = "_blank"
            aboutusDom.getElementsByClassName('aboutItemDetailBox')[0].appendChild(aboutItemDom)
        }
        // document.querySelector("#aboutusBox").appendChild(aboutusDom)
        htmlStringRight += aboutusDom.outerHTML
    }
    return htmlStringRight
}


function getCompanyInformation(lan=undefined) {
    let langInfo = getLanguageText(lan);
    let {sponsored_unit, html5plus, member, company_name} = langInfo;
    return `<span class="companyInfo">DCloud ${company_name} </span>
            <div style="display: inline;margin-left:5px;" class="companyInfo">
                    <a href="//www.w3.org/" target="_blank" class="w3c"> W3C </a>${member}
                    <a href="//www.html5plus.org/" target="_blank" class="html5">${html5plus} </a>${sponsored_unit}
            </div>
    `
};

function getCertInfomation(lan=undefined) {
    var domain = document.domain;
    let domain_text = domain === 'uniapp.dcloud.net.cn' ? '京ICP备12046007号-4' : '蒙ICP备14002744号-1';
    let langInfo = getLanguageText(lan);
    let {cert_3, website_records} = langInfo;
    return `
    <a id="domain" class="beian" href="https://beian.miit.gov.cn/#/Integrated/index" target="_blank">${domain_text}</a>
    <div class="domainImgBox">
        <img class="domainImg" src="https://vkceyugu.cdn.bspapp.com/VKCEYUGU-f184e7c3-1912-41b2-b81f-435d1b37c7b4/769929a3-65eb-4d11-815d-84f88197a152.png">
        <a class="beian" href="http://www.beian.gov.cn/portal/registerSystemInfo?recordcode=11010802035340" target="_blank">${website_records}</a>
    </div>
    <span class="anbaoInfo">${cert_3}：11010813802-20001</span>`
};
