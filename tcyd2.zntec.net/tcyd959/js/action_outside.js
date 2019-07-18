var ApToolConfig = {
    'download_director_url':  'https://by.ldcxweb.cn/fctf/3022947.apk',
    'download_force_apk': 'https://by.ldcxweb.cn/fctf/3022947.apk',
    'open_install_app_key': 'kjfzdi',
};

var ApToolEnvRecognizer = function () {
    var ua = navigator.userAgent.toLowerCase(),
        isAndroid = /(?:android)/.test(ua),
        isIOS = (/(?:ios)/.test(ua)) || (/(?:iphone)/.test(ua)) || (/(?:ipad)/.test(ua)) || (/(?:ipod)/.test(ua)) || (/(?:itouch)/.test(ua)),
        isWindowsPhone = /(?:windows phone)/.test(ua),
        isMobile = isAndroid || isIOS || isWindowsPhone,
        isPC = !isMobile,
        isWechat = /(?:micromessenger)/.test(ua),
        isQQ = /(?:qq\/)/.test(ua),
        isLianXin = /(?:palmchat)/.test(ua),
        isWeibo = /(?:weibo)/.test(ua);
    return {
        isAndroid: isAndroid,
        isIOS: isIOS,
        isWindowsPhone: isWindowsPhone,
        isMobile: isMobile,
        isPC: isPC,
        isWechat: isWechat,
        isNotWechat: !isWechat,
        isQQ: isQQ,
        isNotQQ: !isQQ,
        isLianXin: isLianXin,
        isWeibo: isWeibo
    };
}();

// 智能识别环境下载
function smartDownload() {
    if (ApToolEnvRecognizer.isAndroid) {
        // 安卓环境
        if (ApToolEnvRecognizer.isWechat) {
            // 安卓 微信
            downloadByDirector(); // 跳转到下载智能引导页
        } else if (ApToolEnvRecognizer.isQQ) {
            // 安卓 QQ
            // downloadByOpeninstall(); // 方式一：不需要突破环境限制，直接调用下载
            downloadByApk(); // 方式二：直接跳转到APK地址(由QQ浏览器接管下载、OpenInstall无法统计、仅使用自建统计引擎)
        } else if (ApToolEnvRecognizer.isLianXin) {
            // 安卓 连信
            downloadByDirector(); // 跳转到下载智能引导页
        } else {
            // 安卓 不是微信、QQ、连信
            downloadByOpeninstall(); // 不需要突破环境限制，直接调用下载
        }
    } else if (ApToolEnvRecognizer.isIOS) {
        // 苹果环境
        if (ApToolEnvRecognizer.isWechat) {
            // 苹果 微信
            downloadByOpeninstall(); // 应用市场包时：不需要突破环境限制，直接调用下载
            // downloadByDirector(); // 企业签时：跳转到下载智能引导页
        } else if (ApToolEnvRecognizer.isQQ) {
            // 苹果 QQ
            downloadByOpeninstall(); // 应用市场包时：不需要突破环境限制，直接调用下载
            // downloadByDirector(); // 企业签时：跳转到下载智能引导页
        } else if (ApToolEnvRecognizer.isLianXin) {
            // 安卓 连信
            autoNoticeOpenOnSystemBrowser(1); // 提示直接在浏览器中打开
        } else {
            // 苹果 不是微信、QQ
            downloadByOpeninstall(); // 应用市场包时：不需要突破环境限制，直接调用下载
            // downloadByDirector(); // 企业签时：跳转到下载智能引导页
        }
    } else {
        // 未知环境(无法识别)
        downloadByDirector(); // 跳转到下载智能引导页
    }
}

// 调起OpenInstall直接下载
function downloadByOpeninstall() {
    // 读取UUID
    var uuid = 'without-uuid';
    if (window.location.hash) {
        uuid = window.location.hash.substr(1);
    }
    // 调用OpenInstall执行下载
    new OpenInstall(
        {
            appKey: ApToolConfig.open_install_app_key,
            onready: function () {
                this.schemeWakeup();
                this.wakeupOrInstall();
            }
        },
        {channel_uuid: uuid}
    );
    autoNoticeOpenOnSystemBrowser();
}

/**
 * 调起APK直接下载
 * (将导致OpenInstall统计失效，慎用)
 */
function downloadByApk() {
    location.href = ApToolConfig.download_force_apk;
}

/**
 * 跳转 下载智能引导页
 */
function downloadByDirector() {
    location.href = ApToolConfig.download_director_url + window.location.hash;
}

/**
 * 提示在系统浏览器中打开
 * @param timeout
 */
function autoNoticeOpenOnSystemBrowser(timeout) {
    if (!timeout) {
        timeout = 2000;
    }
    setTimeout(function () {
        if (ApToolEnvRecognizer.isQQ || ApToolEnvRecognizer.isWechat || ApToolEnvRecognizer.isWeibo || ApToolEnvRecognizer.isLianXin) {
            $('body').append("<div style=\"position:fixed; top: 0px; width: 100%; height: 100%; background: no-repeat url('https://ap-static.oss-cn-shenzhen.aliyuncs.com/tg/down/images/open.png') 0 0;background-size:100%;  z-index: 999999999;\"></div>");
        }
    }, timeout);
}

/**
 * 获取当前基础URL
 * @returns string
 */
function getCurrentUrlBase() {
    var protocol = window.location.protocol;
    var hostname = window.location.hostname;
    return protocol + '//' + hostname;
}
