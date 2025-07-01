let baseURL = "https://download1.dcloud.net.cn/hbuilderx";
let timestamp = new Date().getTime();
var lan = navigator.systemLanguage || navigator.language;
lan = lan.substr(0, 2) == 'zh' ? 'zh' : 'en';
if (lan != 'zh') {
    baseURL = "https://download.dcloud.io/hbuilderx";
};
let AlphaCfgFile = baseURL + '/alpha.json' + `?t=${timestamp}`;
let ReleaseCfgFile = baseURL + "/release.json" + `?t=${timestamp}`;

async function getCfgData(url) {
    return $.ajax({
        url: url,
        dataType: "json"
    }).then(function(data) {
        return data;
    }).catch(function(jqXHR, textStatus, errorThrown) {
        console.error("Fetch error:", errorThrown);
        return undefined;
    });
};

function parseCfgData(data, hx_type = "") {
    if (data == undefined) {
        return {
            version: '',
            linux_url: ''
        };
    };
    let version = data.displayVersion;
    let linux_url;
    for (let s of data.files) {
        if (s.code.includes('linux_full_x64')) {
            s.path = s.path.replace('download1.dcloud.net.cn', 'qiniu-ecdn.dcloud.net.cn');
            linux_url = s.path;
            break;
        };
    };
    if (hx_type == "alpha" && linux_url) {
        let _x = `<a download href="${linux_url}" target="_blank">${version} alpha 下载地址</a>`;
        document.getElementById("hx_alpha_download").innerHTML = _x;
    };
    if (hx_type == "release" && linux_url) {
        let _x = `<a download href="${linux_url}" target="_blank">v${version} 正式版 下载地址</a>`;
        document.getElementById("hx_release_download").innerHTML = _x;
    };
};

var current_url = window.location.href;
if (current_url.includes('/Tutorial/install/linux-cli')) {
    (async () => {
        const data = await getCfgData(AlphaCfgFile);
        parseCfgData(data, 'alpha');
    })();
    (async () => {
        const data = await getCfgData(ReleaseCfgFile);
        parseCfgData(data, 'release');
    })();
};
