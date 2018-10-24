var configApi = {
    apiUrl: "http://www.newtank.cn/newtank/",
    xbbApiUrl: "http://xbbapi.data88.cn/",
    ljbApi: "http://api.lj.newtank.cn"
};

function xbbInit(e, t) {
    actService().getFetch(init.page_ad_code).then(function(n) {
        window._newtank_newtank && _newtank("ENTER", n.activityConfigInfos[0].pageInfos[0].pageName), init.object_config = n, e.xbbConfig = n, initLogic(e), t && t(n)
    })
}

function openNumber() {
    var e = getUserKey(),
        t = referrerUrl(),
        n = {
            userKey: e,
            activityId: init.activityId,
            eventType: "view",
            channelId: init.channelId,
            referer: t
        };
    actService().recordOpenNumber(n)
}

function initLogic(e) {
    var t = window.location.href;
    return init.submit_switch && "OFFLINE" === e.xbbConfig.status ? void popup.msg("该活动及渠道已下线，或者不存在!", {
        time: 5e3
    }) : 0 !== e.newtankConfig.status ? void popup.msg("该活动及渠道已下线，或者不存在!", {
        time: 5e3
    }) : t.indexOf("rep") !== -1 || e.newtankConfig.channelId || t.indexOf("duiba0807") !== -1 ? (init.activityId = e.newtankConfig.activityId, e.newtankConfig.channelId && (init.channelId = e.newtankConfig.channelId), e.newtankConfig.questionnaire && newtankParameter.question && newtankParameter.question(e.newtankConfig.questionnaire), void openNumber()) : void popup.msg("该活动及渠道已下线，或者不存在!", {
        time: 5e3
    })
}

function actInit(e, t, n) {
    var i = popup.loding();
    addBaiduStatistics(), init.requestParams = getRequestParams();
    var a = adCodeMaps[e] || {};
    "string" != typeof a && (a = a[init.requestParams.channel]), init.requestParams.adCode && (a = init.requestParams.adCode);
    var o = {
        newtankConfig: "",
        xbbConfig: ""
    };
    init.page_ad_code = a, newtankParameter.activityCode = e, newtankParameter.question = t, a && actService().getSwitch().then(function(e) {
        e && e.trigger && "ON" === e.trigger.toUpperCase() && (init.submit_switch = !0)
    }), actService().actCheckAct(e, init.requestParams.channel).then(function(e) {
        if (o.newtankConfig = e, e.questionnaire && e.questionnaire.questions && e.questionnaire.questions.length > 0) {
            var t = [];
            $.each(e.questionnaire.questions, function(e, n) {
                t.push({
                    question: n.questionContent,
                    answers: []
                })
            }), init.questions = t
        }
        a ? xbbInit(o, n) : initLogic(o), popup.close(i)
    }), window.insureRecord && insureRecord.fillForm()
}

function newActInit(e) {
    var t = popup.loding();
    addBaiduStatistics(), init.requestParams = getRequestParams(), newtankParameter.question = e.question;
    var n = adCodeMaps[e.activityCode] || {};
    if (init.page_ad_code = n, e.commonPage && (init.page_ad_code = init.requestParams.adCode), "string" != typeof init.page_ad_code || !init.page_ad_code) return void popup.msg("该活动及渠道已下线，或者不存在!", {
        time: 5e3
    });
    if (companyDetail.getInfo(), e.activityText && companyDetail.getRule(e.activityText), actService().getSwitchAndFetch(init.page_ad_code).then(function(n) {
            return window._newtank && _newtank("ENTER", n.activityConfigInfos[0].pageInfos[0].pageName), init.object_config = n, init.submit_switch ? (createQestion(n.activityConfigInfos[0].pageInfos[0].questionnaireId), openNumber(), e.callBack && e.callBack(), void popup.close(t)) : void popup.msg("该活动及渠道已下线，或者不存在!", {
                time: 5e3
            })
        }, function(e) {
            popup.msg(e.responseJSON.message, {
                time: 5e3
            })
        }), e.sdk) switch (e.sdk) {
        case "duiba":
            addDuibaSDK();
            break;
        case "bxm":
            console.log("bxm")
    }
    e.changeCompany && companyDetail.initCompany(), e.cutInput && (init.cutInput = e.cutInput), initStatisticsSDK.insertScript(), window.insureRecord && insureRecord.fillForm()
}

function initSuccessPage(e) {
    addBaiduStatistics(), e.changeCompany && companyDetail.initCompany()
}

function createQestion(e) {
    e && actService().getQuestionnaireDetailById(e).then(function(e) {
        if (e && e.questionInfoList && e.questionInfoList.length > 0) {
            var t = e.questionInfoList.map(function(e, t) {
                return {
                    questionContent: e.question,
                    answers: e.answerInfoList.map(function(e, t) {
                        return {
                            answerContent: e.answer
                        }
                    })
                }
            });
            init.questions = e.questionInfoList, newtankParameter.question && newtankParameter.question({
                questions: t
            })
        }
    })
}

function educationInit(e) {
    var t = popup.loding();
    addBaiduStatistics(), init.requestParams = getRequestParams(), actService().actCheckAct(e.activityCode, init.requestParams.channel).then(function(e) {
        if (init.activityId = e.activityId, e.channelId) init.channelId = e.channelId;
        else {
            popup.loding();
            popup.msg("该活动及渠道已下线，或者不存在!", {
                time: 5e3
            })
        }
        popup.close(t)
    })
}

function loanInit() {
    var e = popup.loding();
    addBaiduStatistics(), init.requestParams = getRequestParams();
    var t = init.requestParams.code,
        n = init.requestParams.activityCode;
    if (!t || !n) return void popup.msg("该活动及渠道已下线，或者不存在!", {
        time: 5e3
    });
    var i = {
        newtankConfig: "",
        xbbConfig: ""
    };
    init.page_ad_code = t, newtankParameter.activityCode = n, actService().getSwitch().then(function(e) {
        e && e.trigger && "ON" === e.trigger.toUpperCase() && (init.submit_switch = !0)
    }), actService().actCheckAct(n, init.requestParams.channel).then(function(t) {
        i.newtankConfig = t, xbbInit(i), popup.close(e)
    })
}
$(document).ajaxError(function(e, t, n, i) {
    if ("undefined" != t.status) switch (t.status) {
        case 401:
            console.log(401);
            break;
        case 404:
            console.log(404)
    }
}).ajaxSuccess(function(e) {}), configApi && configApi.apiUrl && (configApi.apiUrl = configApi.apiUrl.replace("http:", location.protocol)), configApi && configApi.xbbApiUrl && (configApi.xbbApiUrl = configApi.xbbApiUrl.replace("http:", location.protocol));
var init = {
        testPremiumCode: {
            pingan: "hongYunYiXing",
            taiping: "kjhdkj123cnks",
            ddh: "g5cfkd4o1m",
            ddh_shaoer: "daduhui_shaoer",
            zy_lxys: "zy_lxys",
            tk_lak: "leAnKang_premium"
        },
        page_ad_code: "",
        submit_switch: !1,
        object_config: {}
    },
    postPopup = "",
    newtankParameter = {},
    adCodeMaps = {
        btlh0913: "1c60a217",
        bxm0725: "f5100a0e",
        bxm0731: "c6fdb48e",
        bxm0828: "29d72fd5",
        bxm0906: "e2460664",
        bxm0915: "8fb7ce6b",
        bxm1011: "29bd1c99",
        bxm1026: "fc8a6cbd",
        daidaifu0913: "aa80c6a1",
        duiba0808: "e16d5993",
        duiba0825: "4b30d202",
        duiba0913: "27b14a70",
        duiba0915: "35c1de3a",
        duiba1010: "241ccace",
        duiba1009: {
            duiba_EDM: "3fc46dde",
            out_zkjc: "54f7cacd"
        },
        duiba1030: "24766bba",
        duiba1031: "80ee8226",
        dlb0807: {
            dlb: "6e5cbb74",
            whsb: "2dd6c5c8",
            whsb2: "a27b9212",
            cp: "451f70df",
            lcsb: "df4aec73",
            xlsj: "2b035b2a",
            fb2: "f0772f36"
        },
        dlb1012: "2490adfb",
        gmzx0918: "93a6648e",
        hlj0905: "3223454e",
        hlj0824: "8a5fe275",
        jkx0809: "39075282",
        ky0831: {
            xcly: "ef211c15",
            kuaiyan: "6a68a90c"
        },
        lkyx0802: "4adbeebd",
        loan0620: "7fe4041d",
        loan0801: {
            "jrttds-1": "b09beec5",
            "jrttds-2": "551824df",
            "jrttds-3": "26d6d458",
            "jrttds-10": "ca740e3c",
            "jrttds-11": "0ae0dbfa",
            "jrttds-12": "7b956a56",
            "jrttds-13": "ed217924",
            "jrttds-14": "e8291de0"
        },
        loan0802: {
            jrtt: "aaf8aedb",
            jrttds: "aaf8aedb",
            "jrttds-4": "bdc410ef",
            "jrttds-5": "38b73c99",
            "jrttds-6": "bc507300",
            "jrttds-9": "6189d112",
            "jrttds-15": "141de1d2",
            "jrttds-18": "a9cb4daf",
            "jrttds-19": "83187bc0"
        },
        loan0817: "f5d17056",
        loan0825_1: "587839d5",
        loan0929: {
            "WJW-6": "76b19156"
        },
        loan1030: "0ab0ff3c",
        lxys0925_zy: {
            "db-xxl": "f2398593"
        },
        shaoer0912: "67bc4a37",
        shouqianba0809: "cb375d8d",
        tc0925: "a5cc52ea",
        tkjf0920: {
            tkjf: "297228f9",
            "tkjf-test": "b3e91cd6"
        },
        tkjf1011: "8ce7e378",
        weiche0811: "5639790d",
        weifu0904: "e9cf1d50",
        ymt0829: "abe946a5",
        ymt0830: "f913ae25",
        yyzf0811: "de915a5d",
        zhiren0829: "6957dd65",
        zhiren0830: "2075c1ee",
        zhiren0831: "de2056f7",
        zhiren0901: {
            zhiren: "346740a2",
            "ymt-sx": "abe946a5"
        },
        zhiren0918: "a6e9b61e",
        zhiren0919: "d23121ef",
        zql0920: "583df1da",
        zsxn1016: "1205897a",
        ymt1016: "abe946a5",
        ssmc1017: "816134e6",
        loan1017: "54a0111c",
        loan1020: "95483fe3",
        loan1023: "877e39da",
        loan1024: "e59aa9f8",
        loan1031: "77dde818",
        loan1103: "cda09577",
        loan1104: "ec756a8c",
        loan1105: "487d86b6",
        loan1108: "6bc39feb",
        loan1109_dlb: "ded3595c",
        loan1113_wy: "6577973f",
        loan1114_zhiren: "678cad40",
        loan1115: "64d204ae",
        loan1121: "8b63b6c4",
        loan1127: "7b5737ce",
        loan1128: "89b8b579",
        swPay1023: "e61e09b6",
        hz1025: "3226931e",
        hz1103: "7a505034",
        zhongyi1027: "bf3e7687",
        bjtt1030: "9f168279",
        changlan1103: "1dc8c968",
        hdt1113: "13731b78",
        tc1109_tk: "ad1f85d0",
        tc1109_tp: "62621ab6",
        tc1109_zy: "e90360ca",
        tc1109_ddh: "c4abb757",
        noteMarketing: "f89e1531",
        hd1228: "632dcdff",
        loan0103: "1db1f23a",
        loan0109: "80ed2820",
        loan0116: "f063973f",
        loan0117: "80ed2820",
        loan0119: "7622e97f",
        loan0129: "9aa1c20d",
        loan0131: "852de989",
        loan0605: "7622e97f"
    };

function actService() {
    var t = function(t) {
            var i = null;
            return i = init.submit_switch ? n(t) : $.post(configApi.apiUrl + "act/subdata.do", t)
        },
        n = function(t) {
            return $.ajax({
                type: "post",
                url: configApi.xbbApiUrl + "insurance/selfInsure",
                contentType: "application/json;charset=utf-8",
                data: JSON.stringify(t)
            })
        },
        i = function(t, n) {
            return $.post(configApi.apiUrl + "act/checkAct.do", {
                activityCode: t,
                channelCode: n
            })
        },
        e = function(t) {
            return $.get(configApi.apiUrl + "act/changeKnowMore", t)
        },
        a = function(t) {
            return $.post(configApi.apiUrl + "act/eventTrack", t)
        },
        r = function(t, n) {
            return $.get(configApi.apiUrl + "shouqianba/new/order/" + t + "/policyId/" + n)
        },
        c = function(t) {
            return $.get(configApi.apiUrl + "interface/userInfo?userCode=" + t)
        },
        o = function() {
            return $.get(configApi.apiUrl + "thp/hds/activatecode")
        },
        p = function(t) {
            return $.get(configApi.apiUrl + "thp/hds/activate", t)
        },
        u = function(t) {
            return $.get(configApi.apiUrl + "act/getAwardList.do", t)
        },
        g = function(t, n) {
            if (!init.submit_switch || newtankParameter.activityCode && newtankParameter.activityCode.match("loan") || newtankParameter.activityCode && newtankParameter.activityCode.match("hd")) {
                var i = configApi.apiUrl + "act/sendCaptcha.do",
                    e = {
                        activityId: init.activityId,
                        channelId: init.channelId,
                        mobile: t,
                        _d: (new Date).getTime()
                    };
                return n && (e.captchaLenth = n), $.get(i, e)
            }
            var i = configApi.xbbApiUrl + "shortMessage/captcha/send",
                e = {
                    mobile: t,
                    adCode: init.page_ad_code
                };
            return n && (e.captchaLenth = n), $.ajax({
                type: "post",
                url: i,
                contentType: "application/json; charset=utf-8",
                data: JSON.stringify(e)
            })
        },
        f = function(t) {
            return $.post(configApi.apiUrl + "act/loan/save", t)
        },
        d = function(t, n, i) {
            return $.get(configApi.apiUrl + "act/getad/checkAct", {
                activityCode: t,
                hierarchy: n,
                channelCode: i
            })
        },
        s = function(t) {
            return $.post(configApi.apiUrl + "thp/loan/nlj", t)
        },
        l = function(t) {
            return $.post(configApi.apiUrl + "thp/loan/bxym", t)
        },
        h = function(t) {
            return $.get("https://buy.bianxianmao.com/shop/countInfo", t)
        },
        A = function(t) {
            return $.post("https://interaction.bayimob.com/openApi/deepTranslate", t)
        },
        b = function(t) {
            return $.get("https://open.adhudong.com/saveEffect.htm", t)
        },
        y = function(t) {
            return $.get(configApi.apiUrl + "act/drawTimes", {
                flag: t
            })
        },
        U = function(t) {
            return $.ajax({
                type: "POST",
                url: configApi.apiUrl + "thp/extrainfo",
                contentType: "application/json; charset=utf-8",
                data: JSON.stringify(t),
                dataType: "json"
            })
        },
        m = function(t) {
            return $.get(configApi.xbbApiUrl + "config/fetch/code/" + t)
        },
        w = function(t) {
            return $.get(configApi.xbbApiUrl + "trigger/coreRefactor/get")
        },
        C = function(t) {
            return $.post(configApi.apiUrl + "act/checkCaptcha", t)
        },
        v = function(t) {
            return $.ajax({
                type: "POST",
                url: configApi.xbbApiUrl + "shortMessage/captcha/verify",
                contentType: "application/json; charset=utf-8",
                data: JSON.stringify(t)
            })
        },
        x = function(t) {
            return $.get(configApi.apiUrl + "thp/loan/bxml/" + t)
        },
        k = function(t) {
            return $.get(configApi.apiUrl + "thp/loan/bxwm/" + t)
        },
        S = function(t) {
            return $.when(w(), m(t)).then(function(t, n) {
                var i = t[0];
                i && i.trigger && "ON" === i.trigger.toUpperCase() ? init.submit_switch = !0 : init.submit_switch = !1;
                var e = n[0];
                return e
            })
        },
        j = function(t) {
            return $.get(configApi.xbbApiUrl + "questionnaire/get/" + t)
        },
        T = function(t) {
            return $.get(configApi.apiUrl + "thp/loan/atOnce/" + t)
        },
        O = function(t) {
            return $.get(configApi.apiUrl + "thp/loan/bxwm/" + t)
        },
        N = function(t) {
            return $.get(configApi.apiUrl + "thp/loan/getbxyfUrl/" + t)
        },
        I = function(t) {
            return $.post(configApi.apiUrl + "act/keyword", t)
        },
        _ = function() {
            return $.get(configApi.xbbApiUrl + "insur/temp/checkAdAreaAndCount/adCount/120/adCode/53dde4ba", {})
        },
        D = function(t) {
            return $.get(configApi.xbbApiUrl + "insur/temp/checkAdAreaAndCount/adCount/" + t.id + "/adCode/" + t.adCode, {})
        },
        L = function(t) {
            return $.ajax({
                type: "put",
                url: configApi.ljbApi + "/uc/user/info",
                contentType: "application/json;charset=utf-8",
                data: JSON.stringify(t)
            })
        };
    return {
        actSave: t,
        actCheckAct: i,
        actKnowMore: e,
        recordOpenNumber: a,
        shouqianbaOrder: r,
        getUserInfo: c,
        getActivatecode: o,
        actHdsActivate: p,
        getAwardList: u,
        sendCaptcha: g,
        largeLoanSave: f,
        getAd: d,
        getNLJ: s,
        getBXYM: l,
        bxmAD_SDK: h,
        doumeng_SDK: A,
        hudongtui_SDK: b,
        getDrawNumber: y,
        updateUserTag: U,
        getFetch: m,
        getSwitch: w,
        checkCaptcha: C,
        checkCaptchaXbb: v,
        postBaixing: x,
        baixingNoPwdLogin: k,
        actSaveNew: n,
        getSwitchAndFetch: S,
        getQuestionnaireDetailById: j,
        postAtOnce: T,
        getBxwm: O,
        getYfBxwm: N,
        getKeyword: I,
        getCompanyFlag: _,
        checkAdAreaAndCount: D,
        ljbCallback: L
    }
}

function adminService() {
    var t = function(t, n) {
            return $.ajax({
                type: "POST",
                url: configApi.apiUrl + "thp/mlb/switch/key/" + t + "/flag/" + n,
                contentType: "application/json; charset=utf-8",
                dataType: "json"
            })
        },
        n = function() {
            return $.get(configApi.apiUrl + "thp/mlb/listChannel")
        },
        e = function(t, n) {
            return $.get(configApi.apiUrl + "thp/mlb/getData/startAt/" + t + "/endAt/" + n)
        };
    return {
        changeStatus: t,
        getDetail: n,
        getNumber: e
    }
}

function otherService() {
    var t = function(t) {
            return $.post(configApi.apiUrl + "thp/hitalk/save", t)
        },
        a = function(t) {
            return $.ajax({
                type: "POST",
                url: configApi.apiUrl + "thp/education/save",
                contentType: "application/json; charset=utf-8",
                data: JSON.stringify(t),
                dataType: "json"
            })
        },
        e = function(t) {
            return $.ajax({
                type: "POST",
                url: configApi.apiUrl + "act/chelun/redeemCode/" + t + "/batch/4",
                contentType: "application/json; charset=utf-8",
                dataType: "json"
            })
        },
        n = function(t) {
            return $.ajax({
                type: "POST",
                url: configApi.apiUrl + "act/chelun/redeemCodeUpdate/" + t + "/batch/4",
                contentType: "application/json; charset=utf-8",
                dataType: "json"
            })
        },
        i = function(t) {
            return $.ajax({
                type: "POST",
                url: configApi.apiUrl + "thp/bxgh/save",
                contentType: "application/json; charset=utf-8",
                data: JSON.stringify(t),
                dataType: "json"
            })
        },
        p = function(t) {
            return $.ajax({
                type: "POST",
                url: "https://o.qfpay.com/adv/data",
                data: t,
                dataType: "JSON"
            })
        };
    return {
        saveHiTalk: t,
        saveEducation: a,
        redeemCode: e,
        redeemCodeUpdate: n,
        bxghSave: i,
        haojinSDK: p
    }
}

function xbbService() {
    var t = function(t) {
            return $.ajax({
                type: "POST",
                url: configApi.xbbApiUrl + "activity/premiumCalculate",
                contentType: "application/json; charset=utf-8",
                data: JSON.stringify(t),
                dataType: "json"
            })
        },
        n = function(t) {
            var n = null;
            return n = init.submit_switch ? actService().actSaveNew(t) : $.ajax({
                type: "POST",
                url: configApi.xbbApiUrl + "activity/takePartIn",
                contentType: "application/json; charset=utf-8",
                data: JSON.stringify(t),
                dataType: "json"
            })
        },
        a = function(t) {
            return $.ajax({
                type: "POST",
                url: configApi.xbbApiUrl + "insurance/policy/info/update",
                contentType: "application/json; charset=utf-8",
                data: JSON.stringify(t)
            })
        },
        i = function(t) {
            return $.ajax({
                type: "GET",
                url: configApi.xbbApiUrl + "questionnaire/get/" + t,
                contentType: "application/json; charset=utf-8",
                dataType: "json"
            })
        },
        e = function(t) {
            return $.get(configApi.apiUrl + "interface/userInfo?userCode=" + t + "&type=2")
        },
        p = function(t, n) {
            return t.adCode = init.page_ad_code, n && (t.captchaLenth = n), $.ajax({
                type: "POST",
                url: configApi.xbbApiUrl + "shortMessage/captcha/send",
                contentType: "application/json; charset=utf-8",
                dataType: "json",
                data: JSON.stringify(t)
            })
        },
        r = function(t) {
            return $.ajax({
                type: "GET",
                url: configApi.xbbApiUrl + "activity/conf/check/" + t,
                contentType: "application/json; charset=utf-8",
                dataType: "json"
            })
        },
        o = function(t) {
            return $.ajax({
                url: "http://api.lj.newtank.cn/uc/user/info",
                type: "PUT",
                contentType: "application/json; charset=utf-8",
                dataType: "json",
                data: JSON.stringify(t)
            })
        },
        c = function() {
            return $.ajax({
                type: "GET",
                url: configApi.xbbApiUrl + "/insur/temp/doInurance/forward",
                contentType: "application/json; charset=utf-8"
            })
        },
        u = function(t) {
            var n = new FormData;
            return void 0 !== getRequestParams().lpCode ? (n.append("lpCode", t.landing), n.append("mobile", t.mobile), $.ajax({
                type: "POST",
                url: configApi.xbbApiUrl + "insurance/lp/splitflow",
                processData: !1,
                contentType: !1,
                data: n
            })) : (n.append("landing", t.landing), n.append("mobile", t.mobile), $.ajax({
                type: "POST",
                url: configApi.xbbApiUrl + "insur/temp/getUrl",
                processData: !1,
                contentType: !1,
                data: n
            }))
        },
        s = function(t) {
            return $.ajax({
                type: "POST",
                url: configApi.xbbApiUrl + "insur/temp/sys/log",
                contentType: "application/json",
                data: JSON.stringify(t)
            })
        },
        l = function(t) {
            return $.ajax({
                type: "POST",
                url: configApi.xbbApiUrl + "insur/thp/sdk/baidu",
                contentType: "application/json;charset=UTF-8",
                data: JSON.stringify(t)
            })
        },
        f = function(t) {
            return $.ajax({
                type: "POST",
                url: configApi.xbbApiUrl + "laiye/advertisement/save",
                contentType: "application/json",
                data: JSON.stringify(t)
            })
        },
        y = function(t) {
            return $.ajax({
                type: "POST",
                url: configApi.xbbApiUrl + "shortMessage/captcha/send/pahealth",
                contentType: "application/json;charset=UTF-8",
                data: JSON.stringify(t)
            })
        },
        d = function(t) {
            return $.ajax({
                type: "POST",
                url: configApi.xbbApiUrl + "insurance/selfInsure",
                contentType: "application/json",
                data: JSON.stringify(t)
            })
        };
    return {
        testPremium: t,
        actSave: n,
        getQuestionnaire: i,
        getUserInfo: e,
        sendCaptcha: p,
        getActivityInfo: r,
        putUcUserInfo: o,
        updateInsuranceInfo: a,
        jumpUrl: c,
        landingPage: u,
        countSdkLog: s,
        baiduOcpc: l,
        laiye: f,
        callPinganCaptcha: y,
        callPinganApi: d
    }
}

function adUrl() {
    return {
        ad_rong360: {
            name: "融360",
            url: "http://m.rong360.com/express?from=sem21&utm_source=yuanshan&utm_medium=cpc5&utm_campaign=1"
        },
        vipKid01: {
            name: "vipkid教育",
            url: "https://vipkid-bd.mikecrm.com/GOzwEYF"
        },
        zhongxinCard: {
            name: "中信信用卡",
            url: "https://creditcard.ecitic.com/m/tjbk/card_list.html?uid=TJ44488060&sid=SJDKTJBK"
        },
        jingzhengu: {
            name: "精真估",
            url: "http://qd.jingzhengu.com/xiansuo/sellcarquick-xindan.html"
        }
    }
}

function goADUrl(t, e) {
    var n = getUserKey(),
        i = {
            userKey: n,
            activityId: init && init.activityId || getQueryString("activityId"),
            eventType: "ad_click",
            adCode: t,
            channelId: init && init.channelId || getQueryString("channelId")
        };
    actService().recordOpenNumber(i).then(function() {
        window.location.href = e ? e : adUrl()[t].url
    })
}

function getQueryString(t) {
    var e = new RegExp("(^|&)" + t + "=([^&]*)(&|$)", "i"),
        n = window.location.search.substr(1).match(e);
    return null != n ? unescape(n[2]) : null
}

function sortBy(t) {
    return function(e, n) {
        var i, r;
        if ("object" == typeof e && "object" == typeof n && e && n) return i = e[t], r = n[t], i === r ? 0 : typeof i == typeof r ? i < r ? -1 : 1 : typeof i < typeof r ? -1 : 1;
        throw "error"
    }
}

function renderADList(t) {
    $.get(configApi.apiUrl + "act/getad/checkAct?channelCode=" + (t || getQueryString("channel"))).then(function(t) {
        var e = t.adList,
            n = $("<ul></ul>");
        e && e.length ? e.sort(sortBy("adOrder")) : e = [];
        for (var i = 0; i < e.length; i++) {
            var r = e[i].urls,
                c = r && r[0];
            if (r && r.length > 1) {
                var a = Math.floor(Math.random() * r.length);
                c = r[a]
            }
            n.append('<li><a href="javascript:;" onClick="goADUrl(\'' + e[i].code + "','" + c + '\')"><img src="' + e[i].iconUrl + '"><p>' + e[i].name + "</p></li>")
        }
        $("#adList").append(n)
    })
}

function goADBaidu(t) {
    bd_event(t.key, "click", t.text), setTimeout(function() {
        window.location.href = adUrl()[t.type].url
    }, 200)
}

function bd_event(t, n, e, _) {
    _hmt.push(["_trackEvent", t, n, e, _])
}

function nextCaptcha(n) {
    $("#captcha").show(), $("#captcha .sendCode").click(), $("input[name='captcha']").unbind("input propertychange");
    var a = $("input[name = 'mobile']").val(),
        e = $("input[name='captcha']");
    e.val(""), e.focus(), $("._span span:first-child").addClass("writeOn"), $("#cellphoneNumber").html(a), e.bind("input propertychange", function() {
        var a = e.val();
        if ($("._span span").removeClass("writeOn"), $("._span").find("span:eq(" + a.length + ")").addClass("writeOn"), a && a.length >= 6) {
            e.blur();
            try {
                if (null === a || void 0 === a || "" === a) throw new Error("验证码不能为空");
                if (!/^\d{6}$/.test(a)) throw new Error("验证码为6位数字")
            } catch (t) {
                return popup.msg(t.message, {
                    time: 1e3
                }), !1
            }
            n(a)
        }
    }), e.focus(function() {
        var n = e.val();
        $("._span span").removeClass("writeOn"), $("._span").find("span:eq(" + n.length + ")").addClass("writeOn")
    })
}

function v_name() {
    var e = $("input[name = 'name']").val();
    if (null === e || void 0 === e || "" === e) throw new Error("姓名不能为空");
    if (!RegexConstants.REGEX_CHINESE_2_4.test(e)) throw new Error("姓名应为2-4位中文")
}

function v_laiye_name() {
    var e = $("input[name = 'name-laiye']").val();
    if (null === e || void 0 === e || "" === e) throw new Error("姓名不能为空");
    if (!RegexConstants.REGEX_CHINESE_2_4.test(e)) throw new Error("姓名应为2-4位中文")
}

function v_id_card() {
    var e = $("input[name = 'idCard']").val();
    if (null === e || void 0 === e || "" === e) throw new Error("身份证号不能为空");
    if (!RegexConstants.REGEX_ID_CARD.test(e)) throw new Error("身份证号格式不正确");
    if (!checkIdCard(e)) throw new Error("身份证校验不正确")
}

function v_payMethod() {
    var e = $("input[name='payMethod']:checked").val();
    if (!e) throw new Error("请选择交费方式");
    return !0
}

function v_protectionPeriod() {
    var e = $("input[name='protectionPeriod']:checked").val();
    if (!e) throw new Error("请选择保险期间");
    return !0
}

function v_paymentPeriod() {
    var e = $("input[name='paymentPeriod']:checked").val();
    if (!e) throw new Error("请选择缴费期间");
    return !0
}

function v_sumInsured() {
    var e = $("select[name='sumInsured'] option:selected").val();
    if (!e) throw new Error("请选择基本保额");
    return !0
}

function v_mobile() {
    var e = $("input[name = 'mobile']").val();
    if (null === e || void 0 === e || "" === e) throw new Error("手机号不能为空");
    if (!RegexConstants.REGEX_MOBILE.test(e)) throw new Error("手机号格式不正确")
}

function v_laiye_mobile() {
    var e = $("input[name = 'mobile-laiye']").val();
    if (null === e || void 0 === e || "" === e) throw new Error("手机号不能为空");
    if (!RegexConstants.REGEX_MOBILE.test(e)) throw new Error("手机号格式不正确")
}

function v_question_Eaccurate() {
    var e = $("select[name='answerIds[0]']").val(),
        n = $("select[name='answerIds[1]']").val(),
        t = $("select[name='answerIds[2]']").val();
    if ($("select[name='answerIds[0]']").length > 0 && !e) throw new Error("请先完成问卷调查");
    if ($("select[name='answerIds[1]']").length > 0 && !n) throw new Error("请先完成问卷调查");
    if ($("select[name='answerIds[2]']").length > 0 && !t) throw new Error("请先完成问卷调查")
}

function v_question_more() {
    var e = $("input[name='answerIds[0]']:checked").val(),
        n = $("input[name='answerIds[1]']:checked").val(),
        t = $("input[name='answerIds[2]']:checked").val(),
        r = $("input[name='answerIds[3]']:checked").val();
    if ($("input[name='answerIds[0]']").length > 0 && !e) throw new Error("请先完成问卷调查");
    if ($("input[name='answerIds[1]']").length > 0 && !n) throw new Error("请先完成问卷调查");
    if ($("input[name='answerIds[2]']").length > 0 && !t) throw new Error("请先完成问卷调查");
    if ($("input[name='answerIds[3]']").length > 0 && !r) throw new Error("请先完成问卷调查")
}

function v_question() {
    var e = $("input[name='answerIds[0]']:checked").val(),
        n = $("input[name='answerIds[1]']:checked").val();
    if (!e || !n) throw new Error("请先完成问卷调查")
}

function v_question_three() {
    var e = $("input[name='answerIds[0]']:checked").val(),
        n = $("input[name='answerIds[1]']:checked").val(),
        t = $("input[name='answerIds[2]']:checked").val();
    if (!e || !n || !t) throw new Error("请先完成问卷调查")
}

function v_captcha() {
    var e = $("input[name='captcha']").val();
    if (null === e || void 0 === e || "" === e) throw new Error("验证码不能为空");
    if (!RegexConstants.REGEX_NUM_INT_6.test(e) && !RegexConstants.REGEX_NUM_INT_4.test(e)) throw new Error("验证码为6位/4位数字")
}

function v_laiye_captcha() {
    var e = $("input[name='captcha-laiye']").val();
    if (null === e || void 0 === e || "" === e) throw new Error("验证码不能为空");
    if (!RegexConstants.REGEX_NUM_INT_6.test(e) && !RegexConstants.REGEX_NUM_INT_4.test(e)) throw new Error("验证码为6位/4位数字")
}

function v_safe_instruct() {
    var e = $("input[name='safeInstruct']")[0].checked;
    if (!e) throw new Error("请确认了解相关安全说明")
}

function v_activity_rule() {
    var e = $("input[name='safeInstruct']")[0].checked;
    if (!e) throw new Error("请确认了解相关活动规则")
}

function v_birth() {
    var e = $("input[name='birth']").val();
    if (!e) throw new Error("请选择出生日期");
    if (!RegexConstants.REGEX_YYYY_MM_DD.test(e)) throw new Error("出身日期格式不正确");
    return !0
}

function v_select_birth() {
    var e = $("select[name='birth']").val();
    if (!e) throw new Error("请选择年龄");
    return !0
}

function v_baby_age() {
    var e = $("input[name='babyAge']:checked").val();
    if (!e) throw new Error("请选择宝宝年龄");
    return !0
}

function v_sex() {
    var e = $("input[name='sex']:checked").val();
    if (!e) throw new Error("请选择性别");
    return !0
}

function v_baby_sex() {
    var e = $("input[name='babySex']:checked").val();
    if (!e) throw new Error("请选择宝宝性别");
    return !0
}

function v_child_name() {
    var e = $("input[name = 'childName']").val();
    if (null === e || void 0 === e || "" === e) throw new Error("儿童姓名不能为空");
    if (!RegexConstants.REGEX_CHINESE_2_4.test(e)) throw new Error("儿童姓名应为2-4位中文")
}

function v_child_birth() {
    var e = $("input[name='childBirth']").val();
    if (!e) throw new Error("请选择儿童出生日期");
    if (!RegexConstants.REGEX_YYYY_MM_DD.test(e)) throw new Error("儿童出身日期格式不正确");
    return !0
}

function v_child_sex() {
    var e = $("input[name='childSex']:checked").val();
    if (!e) throw new Error("请选择儿童性别");
    return !0
}

function v_insurance() {
    var e = $("input[name='insuranceLevel']:checked").val();
    if (!e) throw new Error("请选择保险");
    return !0
}

function v_insurance_mobile() {
    var e = $("#insuranceLevel option:selected").val();
    if (e < 0) throw new Error("请选择保险");
    return !0
}

function checkAge_25_50() {
    var e = $("input[name='idCard']").val(),
        n = getBirth(e);
    if (n < 25 || n > 50) throw new Error("您的年龄不在25-50周岁受保范围内")
}

function v_email(e) {
    if (null === e || void 0 === e || "" === e) throw new Error("电子邮箱不能为空");
    if (!RegexConstants.REGEX_EMAIL.test(e)) throw new Error("邮箱格式不正确");
    return !0
}

function v_birth_input() {
    var e = $("input[name='birth']").val();
    if ("" === e || null === e) throw new Error("请选择出生日期")
}

function v_birth_25_50() {
    var e = $("input[name='birth']").val(),
        n = (new Date).getFullYear() - e.split("-")[0];
    if (n < 25 || n > 50) throw new Error("出生日期不能小于25岁大于50周岁")
}

function v_birth_25_55() {
    var e = $("input[name='birth']").val(),
        n = (new Date).getFullYear() - e.split("-")[0];
    if (n < 25 || n > 55) throw new Error("出生日期不能小于25岁大于55周岁")
}

function v_birth_parameter(e, n) {
    var t = $("input[name='birth']").val(),
        r = (new Date).getFullYear() - t.split("-")[0];
    if (r < e || r > n) throw new Error("出生日期不能小于" + e + "岁或大于" + n + "周岁")
}

function v_birth_0_17() {
    var e = $("input[name='birth']").val(),
        n = (new Date).getFullYear() - e.split("-")[0];
    if (n < 0 || n > 17) throw new Error("出生日期不能大于17周岁")
}

function v_babyBirth_0_13() {
    var e = $("input[name='babyBirth']").val(),
        n = (new Date).getFullYear() - e.split("-")[0];
    if (!e) throw new Error("请选择出生日期");
    if (n < 0 || n > 13) throw new Error("出生日期不能大于13周岁")
}

function contrastTime() {
    var e = $("input[name='birth']").val(),
        n = new Date(e.replace(/-/g, "/")),
        t = new Date,
        r = t.getFullYear() + "-" + (t.getMonth() + 1) + "-" + t.getDate();
    return Date.parse(r) > Date.parse(n)
}

function getBirth(e) {
    var n = new Date,
        t = n.getMonth() + 1,
        r = n.getDate(),
        a = n.getFullYear() - e.substring(6, 10) - 1;
    return (e.substring(10, 12) < t || e.substring(10, 12) == t && e.substring(12, 14) <= r) && a++, a
}

function checkIdCard(e) {
    var n = {
        11: "北京",
        12: "天津",
        13: "河北",
        14: "山西",
        15: "内蒙古",
        21: "辽宁",
        22: "吉林",
        23: "黑龙江 ",
        31: "上海",
        32: "江苏",
        33: "浙江",
        34: "安徽",
        35: "福建",
        36: "江西",
        37: "山东",
        41: "河南",
        42: "湖北 ",
        43: "湖南",
        44: "广东",
        45: "广西",
        46: "海南",
        50: "重庆",
        51: "四川",
        52: "贵州",
        53: "云南",
        54: "西藏 ",
        61: "陕西",
        62: "甘肃",
        63: "青海",
        64: "宁夏",
        65: "新疆",
        71: "台湾",
        81: "香港",
        82: "澳门",
        91: "国外 "
    };
    if (!n[e.substr(0, 2)]) return !1;
    if (18 == e.length) {
        e = e.split("");
        for (var t = [7, 9, 10, 5, 8, 4, 2, 1, 6, 3, 7, 9, 10, 5, 8, 4, 2], r = [1, 0, "x", 9, 8, 7, 6, 5, 4, 3, 2], a = 0, i = 0, o = 0, c = 0; c < 17; c++) i = e[c], o = t[c], a += i * o;
        r[a % 11];
        if (r[a % 11] != e[17]) return "x" == e[17] || "X" == e[17]
    }
    return !0
}

function getAllParameters() {
    var e = {
        name: $("input[name = 'name']").val(),
        mobile: $("input[name = 'mobile']").val(),
        sex: $("input[name='sex']:checked").val(),
        birth: $("input[name='birth']").val(),
        captcha: $("input[name='captcha']").val(),
        idCard: $("input[name = 'idCard']").val(),
        safeInstruct: $("input[name='safeInstruct']").length > 0 && $("input[name='safeInstruct']")[0].checked,
        "answerIds[0]": $("input[name='answerIds[0]']:checked").val(),
        "answerIds[1]": $("input[name='answerIds[1]']:checked").val(),
        "answerIds[2]": $("input[name='answerIds[2]']:checked").val(),
        _d: (new Date).getTime(),
        activityId: init.activityId,
        channelId: init.channelId
    };
    return init.page_ad_code && init.submit_switch && (e = getAllParametersNew(init.page_ad_code)), e
}

function getAllParametersNew(e) {
    var n = init.object_config.sign,
        t = $("input[name = 'mobile']").val(),
        r = {
            adCode: e,
            sign: md5(e + n + t),
            activityConfigNum: 0,
            mobile: t,
            sex: $("input[name='sex']:checked").val(),
            policyHolderName: $("input[name = 'name']").val(),
            policyHolderSex: ["FEMALE", "MALE"][$("input[name='sex']:checked").val()],
            policyHolderBirth: $("input[name='birth']").val(),
            policyHolderIdCard: $("input[name = 'idCard']").val(),
            captcha: $("input[name='captcha']").val(),
            cookieId: sessionStorage.cookieId
        };
    return init.questions && (r.questionnaire = $.map(init.questions, function(e, n) {
        return e.answers = [$("input[name='answerIds[" + n + "]']:checked").parent().text().trim()], e
    })), r
}

function addBaiduStatistics() {
    var e = window._hmt_key || "80b5d4d37e762744324258458e2ee0d9",
        n = document.createElement("script");
    n.type = "text/javascript", n.innerHTML = 'var _hmt = _hmt || []; (function() { var hm = document.createElement("script"); hm.src = "//hm.baidu.com/hm.js?' + e + '"; var s = document.getElementsByTagName("script")[0]; s.parentNode.insertBefore(hm, s); })(); ';
    var t = document.getElementsByTagName("script")[0];
    t.parentNode.insertBefore(n, t)
}

function getRequestParams() {
    var e = location.search,
        n = new Object({});
    if (e.indexOf("?") != -1) {
        var t = e.substr(1);
        strs = t.split("&");
        for (var r = 0; r < strs.length; r++) n[strs[r].split("=")[0]] = unescape(strs[r].split("=")[1])
    }
    return n
}

function analyzeIdCard() {
    var e = function(e) {
            return 18 == e.length ? e.substring(6, 10) + "-" + e.substring(10, 12) + "-" + e.substring(12, 14) : 15 == e.length ? "19" + e.substring(6, 8) + "-" + e.substring(8, 10) + "-" + e.substring(10, 12) : void 0
        },
        n = function(e) {
            var n = "";
            return 18 == e.length && (n = parseInt(e.substr(16, 1)) % 2 == 1), 15 == e.length && (n = parseInt(e.substr(14, 1)) % 2 == 1), n ? "1" : "0"
        };
    return {
        birth: e,
        sex: n
    }
}

function goCommonSucess(e) {
    window.location.href = window.location.origin + "/newtank/act/common/index.html?userCode=" + e.userCode
}

function goCommonError() {
    window.location.href = window.location.origin + "/newtank/act/common/failed.html"
}

function goReservation(e) {
    if (e) {
        var n = "http://newtank.cn/newtank/act/reservation/wap/index.html?userCode=" + init.userCode,
            t = "http://newtank.cn/newtank/act/reservation/index.html?userCode=" + init.userCode;
        window.location.href = "wap" === e ? n : t
    } else layer.msg("参数不正确!", {
        time: 1e3
    })
}

function layerShow(e) {
    popup.open({
        type: 1,
        content: e.content,
        style: "width:500px;background-color:#fff;padding-bottom:30px;"
    })
}

function closeAll() {
    popup.closeAll()
}

function changeKnowMore(e) {
    actService().actKnowMore(e)
}

function IsPC() {
    for (var e = navigator.userAgent, n = ["Android", "iPhone", "SymbianOS", "Windows Phone", "iPad", "iPod"], t = !0, r = 0; r < n.length; r++)
        if (e.indexOf(n[r]) > 0) {
            t = !1;
            break
        }
    return t
}

function check_more(e) {
    var n = $(e).children("input").prop("checked"),
        t = $(e).children("span"),
        r = {
            userCode: init.userCode
        };
    n ? (t.css("background-position", "right"), r.flag = !0, actService().actKnowMore(r)) : (t.css("background-position", "left"), r.flag = !1, actService().actKnowMore(r))
}

function getAwardList() {
    var e = {
        d: (new Date).getTime()
    };
    actService().getAwardList(e).then(function(e) {
        if (200 == e.statusCode) {
            var n = e.data;
            if (n && n.length > 0) {
                for (var t = "", r = 0; r < n.length; r++) t += "<li>", t += n[r].mobile, t += "<span>", t += n[r].award, t += "</span></li>";
                $("#list_ul").html(t)
            }
        } else popup.msg("获取中奖名单错误,稍后在试!", {
            time: 1e3
        })
    })
}

function referrerUrl() {
    var e = "";
    document.referrer.length > 0 && (e = document.referrer);
    try {
        0 === e.length && opener.location.href.length > 0 && (e = opener.location.href)
    } catch (n) {}
    return e
}

function goWeChat() {
    var e = getRequestParams().userCode;
    e ? window.location.href = "http://act.newtank.cn/h5/activity/guide/weixin?userCode=" + e : window.location.href = "http://act.newtank.cn/h5/activity/guide/weixin"
}

function loanUrl() {
    return {
        loan_klqian: {
            name: "快来钱",
            url: "http://www.klqian.com/pabx/view/078f9fbb61d44041982516855f0f6c76.shtml"
        },
        loan_lanlingdai: {
            name: "蓝领贷",
            url: "http://www.lanlingdai.net/lld/page/reg_txxy.html?regSource=xdyx"
        },
        loan_ppdai: {
            name: "曹操贷",
            url: "https://m.ppdai.com/act/cpa/?source=kuailaiqian&url=https://lnk0.com/QNNF5s"
        },
        loan_spdbccc: {
            name: "青春贷",
            url: "https://ecentre.spdbccc.com.cn/creditcard/netLoanYoung.htm?channel=BRWH"
        },
        loan_xianhuahua: {
            name: "先花一个亿",
            url: "http://weixin.xianhuahua.com/dev/coupon/couponappsix?from=1110"
        },
        loan_yangqianguan: {
            name: "现金借贷",
            url: "https://www.yangqianguan.com/flexible/index?act=OwbPtJ"
        },
        loan_xhqb: {
            name: "小花钱包",
            url: " https://www.xhqb.com/m/ffpp.html?appChannel=kuailq01"
        },
        loan_xiaoying: {
            name: "小赢卡贷",
            url: "https://cardloan.xiaoying.com/kadai/index?source=10000934"
        },
        loan_2345: {
            name: "2345贷款王",
            url: "https://mdaikuan.2345.com/register3?channel=hj-kuailaiqian_cpk_wlei "
        },
        loan_omsys: {
            name: "i贷",
            url: "https://www.omsys.com.cn/Pinganwl/index.php?aid=UGluZ2Fud2xfNTE5Nl84MV95ZXM="
        },
        loan_invest_ppdai: {
            name: "拍拍贷",
            url: "https://m.invest.ppdai.com/landinginfonew.html?regsourceid=hongyuejiekuanx02&role=1"
        },
        loan_rongzi: {
            name: "东方融资网",
            url: "https://m.rongzi.com/lp/daikuan1/?hmsr=xindan&utm_source=62&utm_medium=cpc&utm_term=%E4%B8%9C%E6%96%B9%E8%9E%8D%E8%B5%84%E7%BD%91&utm_content=%E8%B4%B7%E6%AC%BE&utm_campaign=BD-%E6%96%B0%E6%97%A6"
        },
        loan_91qianmi: {
            name: "钱米",
            url: "http://91qianmi.com/bmember/imgregister.xhtm?inviteCode=A694358"
        },
        loan_doraemoney: {
            name: "玖富叮",
            url: "https://cube.doraemoney.com/newCube/index.html?proId=8e74b8e0647343218c77bd365e924532"
        },
        loan_taoqian123: {
            name: "淘钱宝",
            url: "https://m.taoqian123.com/?channel_id=163"
        },
        loan_youqian: {
            name: "马上有钱联盟",
            url: "https://youqian.msxf.com/exp/80009071-2-1"
        },
        loan_yirendai: {
            name: "宜人贷",
            url: "https://bang.yirendai.com/signup.html?referrer=shxdyxgl"
        },
        loan_yixin: {
            name: "宜信普惠",
            url: "http://x.yixin.com/tongyong7?utm_source=Xindanyingxiao&utm_medium=xd-cps&utm_term=&utm_content=&utm_campaign=%E6%96%B0%E6%97%A6%E8%90%A5%E9%94%801"
        },
        loan_student: {
            name: "名校贷",
            url: "https://m.nonobank.com/mxdsite/landing/?isSchool=true&userStatus=student&am-id=2753"
        },
        loan_whiteCollar: {
            name: "名校贷_白领版",
            url: "https://m.nonobank.com/mxdsite/landing/?isSchool=true&userStatus=whiteCollar&am_id=2753"
        },
        loan_largeLoan: {
            name: "极速大额贷款",
            url: "largeLoan.html"
        }
    }
}

function goLoadUrl(e, n) {
    var t = getUserKey(),
        r = {
            userKey: t,
            activityId: init && init.activityId || getQueryString("activityId"),
            eventType: "ad_click",
            adCode: n,
            channelId: init && init.channelId || getQueryString("channelId")
        };
    actService().recordOpenNumber(r).then(function() {
        window.location.href = e
    })
}

function loanHtml(e) {
    for (var n = "", t = 0; t < e.length; t++) {
        var r = e[t].urls,
            a = r && r[0];
        if (r && r.length > 1) {
            var i = Math.floor(Math.random() * r.length);
            a = r[i]
        }
        n += "<li onclick=goLoadUrl('" + a + "','" + e[t].code + "')>", n += "<img src=" + e[t].iconUrl + ">", n += "<p>", n += "<span>" + e[t].name + "</span>", n += e[t].description, n += "<br/><i>" + e[t].number + "</i> 人已申请", n += "</p>", n += '<a href="javascript:void(0)"></a>', n += "</li>"
    }
    return n
}

function didi() {
    window.location.href = "https://dorado.xiaojukeji.com/weixinrouter.html?a=11702&m=MTUwNDAyNjE2MDA=&ts=1493191380&fc=c646057dc04861c98deaf33cc022fdaf&s=149319138024024995&t=QR&b=24100&c=24100&d=10&code=003AQgRt0ftnnb14ebQt0GypRt0AQgR0&state=123"
}

function loanProfile() {
    var e = "",
        n = new Object;
    return n = getRequestChina(), n.kw ? (e += "pl=" + n.pl, e += "&un=" + n.un, e += "&kw=" + n.kw, e += "&so=" + n.so, e += "&me=" + n.me, e += "&au=" + n.au, n = getReferrerChina(), e += "&search=" + n.word) : e
}

function getRequestChina() {
    var e = window.location.search,
        n = new Object;
    if (e.indexOf("?") != -1) {
        var t = e.substr(1);
        strs = t.split("&");
        for (var r = 0; r < strs.length; r++) {
            var a = strs[r].split("=")[0],
                i = decodeURIComponent(strs[r].split("=")[1]);
            n[a] = i
        }
    }
    return n
}

function getReferrerChina() {
    var e = document.referrer,
        n = new Object;
    if (e.indexOf("?") != -1) {
        var t = e.substr(e.indexOf("?") + 1);
        strs = t.split("&");
        for (var r = 0; r < strs.length; r++) {
            var a = strs[r].split("=")[0],
                i = decodeURIComponent(strs[r].split("=")[1]);
            n[a] = i;
            var o = ["q", "p", "k", "w", "kw", "wd", "word", "query", "search", "keyword"];
            o.forEach(function(e) {
                a === e && (n.word = i && i.length > 50 ? "无法识别" : i)
            })
        }
    }
    if (!n.word) {
        var c = insureRecord.getSource();
        c && c.keyword && (n.word = c.keyword)
    }
    return n
}

function loanMoney() {
    var e = Date.parse(new Date);
    e /= 10;
    var n = toThousands(e.toString().substring(3));
    $(".loanMoney").html(n)
}

function toThousands(e) {
    var n = [],
        t = 0;
    e = (e || 0).toString().split("");
    for (var r = e.length - 1; r >= 0; r--) t++, n.unshift(e[r]), t % 3 || 0 == r || n.unshift(",");
    return n.join("")
}

function addDuibaSDK() {
    var e = document.createElement("script");
    e.type = "text/javascript", e.src = "//yun.duiba.com.cn/h5-tuia/adverter.js";
    var n = document.getElementsByTagName("script")[0];
    n.parentNode.insertBefore(e, n)
}

function goSDK(e, n) {
    "f0fa48fd" === init.adCode || "1a7f1ac5" === init.adCode ? TuiaAdverter.init(function() {
        n()
    }, e) : n()
}

function putCallBack(e) {
    if ("2a4a584d" !== init.page_ad_code && "267b5cc8" !== init.page_ad_code) return e(), !1;
    var n = {
        openId: init.requestParams.oid,
        userInsuredStatus: {}
    };
    "2a4a584d" === init.page_ad_code && (n.userInsuredStatus.travelInsureStatus = !0), "267b5cc8" === init.page_ad_code && (n.userInsuredStatus.accountSafetyInsureStatus = !0), xbbService().putUcUserInfo(n).then(function(n) {
        e()
    })
}

function goCreditCard(e) {
    if ("zhongxin" === e) return window.location.href = "https://creditcard.ecitic.com/m/tjbk/card_list.html?uid=TJ44488060&sid=SJDKTJBK", !1
}
var RegexConstants = {
    REGEX_MOBILE: /^1[3-9][0-9]\d{8}$/,
    REGEX_ID_CARD: /^[1-9]\d{5}[1-9]\d{3}((0\d)|(1[0-2]))(([0|1|2]\d)|3[0-1])\d{3}([0-9]|X|x)$/,
    REGEX_CHINESE: /^([\u4E00-\uFA29])*$/,
    REGEX_CHINESE_2_4: /^([\u4E00-\uFA29]){2,4}$/,
    REGEX_YYYY_MM_DD: /^[0-9]{4}-(((0[13578]|(10|12))-(0[1-9]|[1-2][0-9]|3[0-1]))|(02-(0[1-9]|[1-2][0-9]))|((0[469]|11)-(0[1-9]|[1-2][0-9]|30)))$/,
    REGEX_EMAIL: /^[a-zA-Z0-9_-]+@[a-zA-Z0-9_-]+(\.[a-zA-Z0-9_-]+)+$/,
    REGEX_NUM_INT_6: /^\d{6}$/,
    REGEX_NUM_INT_4: /^\d{4}$/
};
var companyDetail = {
    ihoyo: {
        company: "上海虹跃互联网科技有限公司",
        abbreviation: "虹跃",
        title: "虹跃互联网",
        mobile: "021-58921833",
        workTime: "工作日9:30至17:30",
        copyright: "客服热线：021-58921833 工作时间：工作日9:30至17:30"
    },
    newtank: {
        company: "上海新旦营销管理股份有限公司",
        abbreviation: "新旦",
        title: "新旦营销",
        mobile: "400-960-9190",
        workTime: "工作日9:30至17:30",
        copyright: "客服热线：400-960-9190 工作时间：工作日9:30至17:30"
    },
    getInfo: function() {
        var t = "<p>本人授权保险公司，除法律另有规定之外，将本人提供给保险公司的信息、享受保险公司服务产生的信息（包括本〔单证〕签署之前提供和产生的信息）以及保险公司根据本条约定查询、收集的信息，用于保险公司及其因服务必要委托的合作伙伴为本人提供服务、推荐产品、开展市场调查与信息数据分析。</p><p>本人授权保险公司，除法律另有规定之外，基于为本人提供更优质服务和产品的目的，向保险公司因服务必要开展合作的伙伴提供、查询、收集本人的信息。为确保本人信息的安全，保险公司及其合作伙伴对上述信息负有保密义务，并采取各种措施保证信息安全。</p><p>本条款自本〔单证〕签署时生效，具有独立法律效力 , 不受合同成立与否及效力状态变化的影响。</p>";
        $(".initInfo").html(t)
    },
    getRule: function(t) {
        var n = "<tr><td style='width:15px;'>1.</td><td>投保对象：本保险身故受益人为法定受益人。本保险的保险对象要求身体健康、能正常工作或正常生活的自然人</td> </tr><tr><td>2.</td><td>保险期限：以被保险人收到短信通知上的保险起止日期为准。对保险日期之外所发生的保障事故保险公司不负责给付保险责任 </td></tr><tr><td>3.</td><td>使用条款：详情内容请登录保险公司官网网站查询</td></tr><tr><td>4.</td><td>告知义务：依我国《保险法》的规定，投保人、被保险人应如实告知，否则保险人有权依法解除保险合同，并对于保险合同解除前发生的保险事故不负任何责任。<br/>投保人、被保险人在投保时，应对投保书内各项内容如实详细的说明或填写清楚。否则，保险人有权依法解除保险合同。 </td></tr><tr><td>5.</td><td>保险判定流程：根据用户所填写的资料后台自动匹配最适合用户的保险为期进行投保 </td> </tr><tr><td>6. </td><td>保险提供商：相关保险由<i class='insuranceListName'></i>提供，之后会有可能收到保险代理人回访电话。</td> </tr><tr><td>7. </td><td>保险凭证：险公司对保险仅提供电子保单；赠送保险每人只能投保一份，重复或投保多分无效。</td> </tr><tr><td>8. </td><td>如对本活动有疑问及建议请拨打【<i class='companyMobile'></i>】进行咨询（咨询时间:<i class='workTime'></i>）； <br/>如对赠险内容及理赔有疑问请拨打相关保险公司客服电话进行咨询 </td> </tr><tr><td>9.</td><td>成功领取赠险的用户可参与" + t + ";</td></tr>";
        $(".initRule").html(n)
    },
    initCompany: function() {
        var t = this.getCompany();
        $(".companyMobile").html(t.mobile), $(".companyCopyright").html(t.copyright), $(".workTime").html(t.workTime), $(".companyTitle").html(t.title), $(".company").html(t.company), $(".companyAbbreviation").html(t.abbreviation)
    },
    getCompany: function() {
        var t = window.location.href;
        return t.indexOf("act.ihoyo.cn") !== -1 ? this.ihoyo : t.indexOf("wap.newtank.cn") !== -1 ? this.newtank : this.newtank
    },
    pageInsuranceLogo: function(t) {
        var n = {
                tp: "taiping.png",
                tk: "taikang.png",
                zy: "zhongying.png",
                pa: "pingan.png",
                hx: "huaxia.png",
                yg: "yangguang.png"
            },
            i = n[t];
        $(".pageInsuranceLogo").attr("src", "https://newtank-production.oss-cn-shanghai.aliyuncs.com/act/image/logo/" + i)
    }
};
! function(e) {
    var a = {
        state: {
            captcha: null,
            config: {
                bottom: "0",
                captchaAble: !1,
                insureDetail: !0,
                dateAble: !0,
                submitStyle: !0,
                taskCallback: paseQuestionnaireTwo,
                submitCallback: null,
                taskCheck: !0,
                taskTest: !0,
                searchFlag: !0,
                amountFlag: !0,
                successUrl: "success.html",
                failUrl: "fail.html",
                errorImageUrl: "https://newtank-production.oss-cn-shanghai.aliyuncs.com/act%2Fimages%2Ftaikang0907%2Fpopup_front%402x.png"
            }
        },
        init: function(e) {
            var t = a;
            for (var n in e) t.state.config[n] = e[n];
            var s = t.state.config;
            newActInit({
                question: s.taskCallback,
                commonPage: !0,
                callBack: function() {
                    if (s.insureDetail) {
                        var e = init.object_config.activityConfigInfos[0].insuranceConfigs;
                        insuranceDetail.initInsurance(e)
                    }
                    controlForm()
                }
            }), s.dateAble && initMobiscroll_date(25, 50), $("[name=mobile]").on("change", t.form.mobileChange), $(".male,.female").on("click", t.form.sexChange), $(".word").on("click", t.form.agreeClick), $(".rightnow").on("click", t.form.submit), $(".fixed-bx>.img").on("click", t.form.task), window.onscroll = t.form.submitScroll, t.form.submitScroll()
        },
        form: {
            task: function() {
                var e = a,
                    t = e.state.config,
                    n = !String($(".fixed-bx").attr("class")).match("abs-bx");
                n ? $("html,body").animate({
                    scrollTop: document.querySelector(".form-bx").offsetTop
                }) : e.form.check(!0) && (t.captchaAble ? nextCaptcha(function(a) {
                    e.state.captcha = a, $("#captcha").hide(), $(".question-bx").show()
                }) : $(".question-bx").show())
            },
            check: function(e) {
                var t = a,
                    n = t.state.config,
                    s = !0;
                try {
                    if ($("[name=name]").length > 0 && v_name(), $("[name=sex]").length > 0 && v_sex(), $("[name=birth]").length > 0 && v_birth(), $("[name=birth]").length > 0 && v_birth_parameter(25, 50), $("[name=idCard]").length > 0 && v_id_card(), $("[name=mobile]").length > 0 && v_mobile(), $("[name=captcha]").length > 0 && v_captcha(), v_safe_instruct(), n.taskCheck && !e) {
                        var i = $("input[name='answerIds[0]']:checked").val(),
                            r = $("input[name='answerIds[1]']:checked").val(),
                            c = $("input[name='answerIds[2]']:checked").val();
                        if ($("input[name='answerIds[0]']").length > 0 && !i) throw new Error("请先完成问卷调查");
                        if ($("input[name='answerIds[1]']").length > 0 && !r) throw new Error("请先完成问卷调查");
                        if ($("input[name='answerIds[2]']").length > 0 && !c) throw new Error("请先完成问卷调查");
                        if ($("input[name='answerIds[3]']").length > 0 && !o) throw new Error("请先完成问卷调查")
                    }
                    if (n.taskTest && !e) {
                        var o = $("input[name='answerIds[100]']:checked").val();
                        if (!o) throw new Error("请先完成问卷调查")
                    }
                } catch (l) {
                    popup.msg(l && l.message, {
                        time: 1e3
                    }), s = !1
                }
                return s
            },
            submit: function() {
                var e = a,
                    t = e.state.config,
                    n = getAllParameters();
                if (e.form.check()) {
                    if (t.captchaAble && (n.captcha = e.state.captcha), t.taskTest) {
                        var s = $("input[name='answerIds[100]']:checked").val();
                        n.premiumInfo = {
                            sumInsured: 100 * s * 1e4,
                            paymentType: "ANNUAL"
                        }
                    }
                    if (t.searchFlag) {
                        if (n.tag = {
                                searchWord: getReferrerChina().word,
                                keyWord: getRequestChina().kw
                            }, t.amountFlag) {
                            var i = $("select[name='sumInsured'] option:selected").val();
                            n.tag.amount = 1e4 * i
                        }
                    } else if (t.amountFlag) {
                        var i = $("select[name='sumInsured'] option:selected").val();
                        n.tag = {
                            amount: 1e4 * i
                        }
                    }
                    var r = popup.loding();
                    sessionStorage && (sessionStorage.ylUser = JSON.stringify(n)), xbbService().actSave(n).then(function(e) {
                        sessionStorage && (sessionStorage.ylInfo = JSON.stringify(e)), formInfo.getInfo();
                        var a = e.status.toUpperCase();
                        "SUCCEEDED" === a ? initStatisticsSDK.callbackFn(function() {
                            "function" == typeof t.submitCallback ? t.submitCallback(e.policyCode, function() {
                                prodXuTouJump(e, t.failUrl, t.successUrl)
                            }) : prodXuTouJump(e, t.failUrl, t.successUrl)
                        }) : prodXuTouJump(e, t.failUrl, t.successUrl), popup.close(r)
                    }, function(e) {
                        landingJump({
                            landing: getQueryString("ch_mark") ? getQueryString("ch_mark") : getQueryString("lpCode"),
                            mobile: n.mobile
                        }, e, t.errorImageUrl, !1)
                    })
                }
            },
            submitScroll: function() {
                var e = a,
                    t = e.state.config;
                if ($(".fixed-bx").length > 0) {
                    var n = $(".fixed-bx").height() + 12,
                        s = $(".blank-bx").offset().top,
                        i = $(window).height() + $(window).scrollTop(),
                        r = s + n,
                        c = r + $(window).height();
                    i >= r && i <= c ? ($(".blank-bx").height("60px"), $(".fixed-bx").addClass("abs-bx").css({
                        top: s,
                        bottom: "0"
                    }), t.submitStyle && ($("#ddhb-bx .fixed-bx .img").css("margin", "0 38px"), $("#ddhb-bx .fixed-bx .img .subTbn").css("border-radius", "50px"))) : ($(".blank-bx").height(n), $(".fixed-bx").removeClass("abs-bx").css({
                        top: "auto",
                        bottom: t.bottom
                    }), t.submitStyle && ($("#ddhb-bx .fixed-bx .img").css("margin", "0"), $("#ddhb-bx .fixed-bx .img .subTbn").css("border-radius", "0")))
                }
            },
            agreeClick: function(e) {
                var a = String($(e.currentTarget).attr("class")).match("word");
                if (a) {
                    var t = $(e.currentTarget).attr("class").match("checked");
                    t ? ($(".word").removeClass("checked"), $("[name=safeInstruct]")[0].checked = "") : ($(".word").addClass("checked"), $("[name=safeInstruct]")[0].checked = "checked")
                }
            },
            mobileChange: function() {
                v_mobile(), $(".word").addClass("checked"), $("[name=safeInstruct]")[0].checked = "checked", $(".captcha").show(), setTimeout(scrollAdBtn, 100)
            },
            sexChange: function(e) {
                var a = $(e.currentTarget).attr("class"),
                    t = $("[name=sex]");
                "male" === a ? ($(".female").removeClass("active"), $(".male").addClass("active"), t.eq(0)[0].checked = !0) : "female" === a && ($(".male").removeClass("active"), $(".female").addClass("active"), t.eq(1)[0].checked = !0)
            }
        }
    };
    e.initController = a.init
}(window);

function getUserKey() {
    var e;
    return "" !== getCookie("newtank_key") ? getCookie("newtank_key") : (e = uuid(), setCookie("newtank_key", e), e)
}

function getCookie(e) {
    for (var t = document.cookie, o = t.split("; "), n = 0; n < o.length; n++) {
        var r = o[n].split("=");
        if (r[0] == e) return r[1]
    }
    return ""
}

function uuid() {
    for (var e = [], t = "0123456789abcdef", o = 0; o < 36; o++) e[o] = t.substr(Math.floor(16 * Math.random()), 1);
    e[14] = "4", e[19] = t.substr(3 & e[19] | 8, 1), e[8] = e[13] = e[18] = e[23] = "-";
    var n = e.join("");
    return n
}

function setCookie(e, t) {
    var o = 30,
        n = new Date;
    n.setTime(n.getTime() + 24 * o * 60 * 60 * 1e3), document.cookie = e + "=" + escape(t) + " ;expires=" + n.toGMTString() + " ;path=/"
}
var insuranceDetail = {
        pingan_cxtx: {
            code: "pingan",
            company: "中国平安",
            insuranceName: "中国平安畅行天下升级版",
            age: "25-50周岁",
            validTime: "180天",
            generalize: "飞机/轨道交通/商业运营汽车",
            highestMoney: "100万元",
            phone: "95511",
            detail: [{
                duty: "航空(飞机)意外伤害身故、残疾保障",
                money: "100万元"
            }, {
                duty: "火车、地铁、轻轨意外伤害身故、残疾保障",
                money: "50万元"
            }, {
                duty: "轮船意外伤害身故、残疾保障",
                money: "50万元"
            }, {
                duty: "商业运营汽车意外和出租车意外伤害身故、残疾保障",
                money: "10万元"
            }, {
                duty: "飞机、火车、地铁、轻轨、轮船、商业运营汽车、出租车意外伤害医疗保障",
                money: "2万元"
            }, {
                duty: "行李物品和旅行证件损失保障",
                money: "500元"
            }]
        },
        pingan_jrcx: {
            code: "pingan",
            company: "中国平安",
            insuranceName: "平安假日出行",
            age: "25-50周岁",
            validTime: "1年中的法定节假日",
            generalize: "民航客机/列车、轮船/汽车",
            highestMoney: "98万元",
            phone: "95511",
            detail: [{
                duty: "交通意外伤害(民航客机)",
                money: "98万元"
            }, {
                duty: "交通意外伤害(列车、轮船)",
                money: "1万元"
            }, {
                duty: "交通意外伤害(汽车)",
                money: "1万元"
            }]
        },
        pingan_wyeh: {
            code: "pingan",
            company: "中国平安",
            insuranceName: "网银E护",
            age: "25-50周岁",
            validTime: "30天",
            generalize: "个人银行卡/网络帐户资金损失保障（不含第三方支付帐户）飞机意外伤害身故和残疾",
            highestMoney: "1万元",
            phone: "95511"
        },
        taikang_tdb: {
            code: "taikang",
            company: "泰康人寿",
            insuranceName: "铁定保",
            age: "25-50周岁",
            validTime: "1年",
            generalize: "高铁（只包含G/C/D车次）意外保障",
            highestMoney: "50万元",
            phone: "95522"
        },
        taikang_lxwy: {
            code: "taikang",
            company: "泰康人寿",
            insuranceName: "乐行无忧",
            age: "25-50周岁",
            validTime: "90天",
            generalize: "飞机/火车、地铁、轻轨、轮船/商业运营汽车",
            highestMoney: "20万元",
            phone: "95522",
            detail: [{
                duty: "飞机意外保障",
                money: "20万"
            }, {
                duty: "火车、地铁、轻轨、轮船意外保障",
                money: "10万"
            }, {
                duty: "市内公共汽/电车、长途公共汽车、旅行社客车、机场公共汽车及出租车意外保障",
                money: "5万元"
            }]
        },
        taikang_fcb: {
            code: "taikang",
            company: "泰康人寿",
            insuranceName: "飞常保",
            age: "25-50周岁",
            validTime: "1年",
            generalize: "国内及国际航班意外保障",
            highestMoney: "100万",
            phone: "95522"
        },
        huaxia_ggjt: {
            code: "huaxia",
            company: "华夏保险",
            insuranceName: "华夏自由行公共交通意外伤害保险",
            age: "25-50周岁",
            validTime: "3个月",
            generalize: "飞机/公共汽车/出租车意外/地铁/火车/轻轨/轮船",
            highestMoney: "20万元",
            phone: "95300",
            detail: [{
                duty: "飞机意外保障",
                money: "20万"
            }, {
                duty: "公共汽车、出租车意外保障",
                money: "3万"
            }, {
                duty: "地铁、火车、轻轨、轮船意外保障",
                money: "5万"
            }]
        },
        huaxia_maodian_shaoer: {
            code: "huaxia",
            company: "华夏保险",
            insuranceName: "华夏少儿公交通意外保障",
            age: "0-13周岁",
            validTime: "3个月",
            generalize: "飞机/公共汽车/出租车意外/地铁/火车/轻轨/轮船",
            highestMoney: "20万元",
            phone: "95300",
            detail: [{
                duty: "飞机",
                money: "20万"
            }, {
                duty: "地铁、火车、轻轨、轮船意外保障",
                money: "5万"
            }, {
                duty: "公共汽车、出租车",
                money: "3万"
            }]
        },
        zhongying_daikuan: {
            code: "zhongying",
            company: "中英人寿",
            insuranceName: "交通意外伤害保险",
            age: "25-50周岁",
            validTime: "90天",
            generalize: "飞机/轨道交通/汽车/非营运汽车",
            highestMoney: "20万元",
            phone: "95545",
            detail: [{
                duty: "乘飞机意外保障",
                money: "20万"
            }, {
                duty: "乘轨道交通意外保障",
                money: "20万"
            }, {
                duty: "乘坐商业运营汽车意外保障",
                money: "20万"
            }, {
                duty: "乘坐非营运汽车意外保障",
                money: "20万"
            }]
        },
        zhongying_changgui: {
            code: "zhongying",
            company: "中英人寿",
            insuranceName: "交通意外伤害保险C款",
            age: "25-50周岁",
            validTime: "90天",
            generalize: "飞机/轨道交通/汽车/非营运汽车",
            highestMoney: "10万元",
            phone: "95545",
            detail: [{
                duty: "乘飞机意外保障",
                money: "10万"
            }, {
                duty: "乘轨道交通意外保障",
                money: "10万"
            }, {
                duty: "乘坐商业运营汽车意外保障",
                money: "10万"
            }, {
                duty: "乘坐非营运汽车意外保障",
                money: "10万"
            }]
        },
        taiping_tpwy: {
            code: "taiping",
            company: "太平人寿",
            insuranceName: "太平无忧意外伤害保险",
            age: "22-48周岁",
            validTime: "90天",
            generalize: "客运机动车/客运列车或客运轮船/飞机",
            highestMoney: "8万元",
            phone: "95589",
            detail: [{
                duty: "客运机动车意外保障",
                money: "1万元"
            }, {
                duty: "客运列车或客运轮船意外保障",
                money: "1万元"
            }, {
                duty: "飞机意外保障",
                money: "8万元"
            }]
        },
        zhongyi_lab: {
            code: "zhongyi",
            company: "中意人寿",
            insuranceName: "乐安保意外伤害险",
            age: "25-50周岁",
            validTime: "90天",
            generalize: "驾驶或乘坐一般道路交通工具",
            highestMoney: "10万元",
            phone: "400-888-9888",
            detail: [{
                duty: "驾驶或乘坐一般道路交通工具意外身故保障",
                money: "10万元"
            }, {
                duty: "驾驶或乘坐一般道路交通工具意外伤残保障",
                money: "5000元"
            }]
        },
        zhongyi_elt: {
            code: "zhongyi",
            company: "中意人寿",
            insuranceName: "中意e路通意外伤害保险",
            age: "23-48周岁",
            validTime: "30天",
            generalize: "驾驶或乘坐一般道路交通工具",
            highestMoney: "10万元",
            phone: "400-888-9888",
            region: "投保地区：陕西、江苏、河南、黑龙江",
            detail: [{
                duty: "被保险人以乘客身份乘坐汽车、班车、列车、轮船、民航班机等公共交通工具时遭受的意外伤害事故保障",
                money: "10万元"
            }, {
                duty: "被保险人在公共场所搭乘载客升降机或手扶电梯时遭受的意外伤害事故保障",
                money: "10万元"
            }]
        },
        beidafangzheng_lxat: {
            code: "beidafangzheng",
            company: "北大方正人寿",
            insuranceName: "乐享安途交通意外伤害保险",
            age: "25-50周岁",
            validTime: "60天",
            generalize: "飞机/火车/地铁/轻轨/轮船/公共汽车、电车、旅行社客车、机场公共汽车、出租车",
            highestMoney: "10万元",
            phone: "400-820-5882"
        },
        bdfz_lxat_a: {
            code: "beidafangzheng",
            company: "北大方正人寿",
            insuranceName: "安途交通意外伤害保险(A套餐)",
            age: "20-50周岁",
            validTime: "60天",
            generalize: "民航班机/客运列车、轮船、地铁、轻轨/客运汽车",
            highestMoney: "50万/20万/10万(最高可保50万)",
            phone: "400-820-5882",
            detail: [{
                duty: "民航班机",
                money: "50万元"
            }, {
                duty: "客运列车、轮船、地铁、轻轨",
                money: "20万元"
            }, {
                duty: "客运汽车",
                money: "10万元"
            }]
        },
        daduhui_jtzh: {
            code: "daduhui",
            company: "大都会保险",
            insuranceName: "交通综合意外保险产品计划",
            age: "25-50周岁",
            validTime: "30天",
            generalize: "水陆公共交通意外身故/航空意外身故/自驾（驾驶+乘坐）",
            highestMoney: "100万元",
            phone: "400-818-8168",
            detail: [{
                duty: "水陆公共交通意外身故+意外伤残",
                money: "10万元+1万元"
            }, {
                duty: "航空意外身故+意外伤残",
                money: "100万元+10万元"
            }, {
                duty: "自驾（驾驶+乘坐）意外身故+意外伤残",
                money: "10万元+1万元"
            }]
        },
        zsxn_xlb: {
            code: "zsxn",
            company: "招商信诺",
            insuranceName: "行路宝公共交通意外伤害保险",
            age: "25-50周岁",
            validTime: "90天",
            generalize: "陆路公共交通/水路公共交通/民用航空",
            highestMoney: "20万元",
            phone: "400-820-5882",
            detail: [{
                duty: "陆路公共交通意外身故或全残保障",
                money: "5万元"
            }, {
                duty: "水路公共交通意外身故或全残保障",
                money: "5万元"
            }, {
                duty: "民用航空意外身故或全残保障",
                money: "20万元"
            }]
        },
        yangguang_cxwy: {
            code: "yangguang",
            company: "阳光人寿",
            insuranceName: "出行无忧意外伤害保险2013款",
            age: "20-55周岁",
            validTime: "1个月",
            generalize: "飞机意外/轮船意外/轨道意外/汽车意外",
            highestMoney: "10万元",
            phone: "95510",
            region: "投保地区：陕西、江苏、河南、黑龙江",
            detail: [{
                duty: "飞机意外",
                money: "10万元"
            }, {
                duty: "轮船意外",
                money: "2万元"
            }, {
                duty: "轨道意外",
                money: "2万元"
            }, {
                duty: "汽车意外",
                money: "2万元"
            }]
        },
        bnrs_asb: {
            code: "bainian",
            company: "百年人寿",
            insuranceName: "百年人寿安顺宝意外险",
            generalize: "百年人寿安顺宝意外险",
            age: "25-55周岁",
            validTime: "1个月",
            highestMoney: "5万元"
        },
        matchingInsurance: function(e) {
            var n = "";
            return e.indexOf("asb_yiwai") !== -1 && (n = this.bnrs_asb), "yanshi_pingan_hy_wycx" !== e && "yanshi_pingan_hy_wycx" !== e && "yanshi_pingan_anchor_wycx" !== e && "yanshi_pingan_hy_wycx1" !== e && "yanshi_pingan_xd_wycx" !== e && "caixun_payw" !== e && "pingan_xqb_cxtx" !== e || (n = this.pingan_cxtx), e.indexOf("pingan_jrcx") !== -1 && (n = this.pingan_jrcx), "zhongying_yiwai_c" === e && (n = this.zhongying_changgui), "virtual_zyloan" !== e && "virtual_zyedm" !== e && "v_zy_lxys" !== e && "v_yz_zy_ywx" !== e || (n = this.zhongying_daikuan), "taikang_tdb" === e && (n = this.taikang_tdb), "tk_lxwy" !== e && "hn_sxk" !== e || (n = this.taikang_lxwy), "huaxia_yiwai" !== e && "md_huaxia_yiwai" !== e || (n = this.huaxia_ggjt), "huaxia_maodian_shaoer" !== e && "huaxia_yiwai_shaoer" !== e || (n = this.huaxia_maodian_shaoer), "zhongyi_lab" === e && (n = this.zhongyi_lab), "zhongyi_elt" === e && (n = this.zhongyi_elt), "bdfz_lxat" === e && (n = this.beidafangzheng_lxat), "bdfz_lxat_a" === e && (n = this.bdfz_lxat_a), "ddh_jtzhyw_a" !== e && "cbddh_cb" !== e && "caixun_jtzhyw" !== e || (n = this.daduhui_jtzh), "taiping_caixun" !== e && "taiping_yiwai2" !== e && "taiping_yiwai" !== e && "taiping_bwxwy" !== e && "ceshibaoxian-taiping" !== e || (n = this.taiping_tpwy), "yanshi_pingan_hy_wyeh" !== e && "yanshi_pingan_xd_wyeh" !== e || (n = this.pingan_wyeh), "bangling_yangguang" !== e && "yangguang_wycx" !== e || (n = this.yangguang_cxwy), n
        },
        initInsurance: function(e) {
            var n = "",
                a = "",
                i = "",
                t = "",
                o = this,
                y = [],
                c = [];
            $.each(e, function(e, n) {
                var a = n.insurance.interfaceCode,
                    i = o.matchingInsurance(a);
                if (i) {
                    var t = !1,
                        h = !1;
                    $.each(y, function(e, n) {
                        n.name === i.insuranceName && (t = !0)
                    }), $.each(c, function(e, n) {
                        n.name === i.company && (h = !0)
                    }), t || y.push({
                        name: i.insuranceName,
                        code: a,
                        insure: i
                    }), h || c.push({
                        name: i.company,
                        code: a,
                        insure: i
                    })
                }
            }), $.each(y, function(t, y) {
                var c = y.insure,
                    h = y.code;
                0 === t ? (n += '<p alt="' + h + '" id="tab_true">' + c.company + "</p>", a = o.getInsuranceHtml(c)) : n += '<p alt="' + h + '">' + c.company + "</p>", e.length - 1 === t ? i += c.company : (i += c.company, i += "、")
            }), $.each(c, function(e, n) {
                var a = n.insure,
                    i = a.code;
                t += '<li><img src="https://newtank-production.oss-cn-shanghai.aliyuncs.com/act/image/logo/' + i + '.png"></li>', init.cutInput && "泰康人寿" === a.company && o.cutInputHTML()
            }), $(".tab_li").html(n), $(".insranceDetail .detail").html(a), $(".insuranceListName").html(i), $(".companyImg").html(t), o.initInsuranceFun(), o.initSexFun()
        },
        initInsuranceFun: function() {
            var e = this;
            $(".tab_li p").click(function() {
                $(".tab_li p").removeAttr("id"), $(this).attr("id", "tab_true");
                var n = $(this).attr("alt"),
                    a = e.matchingInsurance(n),
                    i = e.getInsuranceHtml(a);
                $(".insranceDetail .detail").html(i)
            })
        },
        initSexFun: function() {
            $(".sex label").click(function() {
                $(".sex label").removeClass("label_true"), $(this).addClass("label_true")
            })
        },
        getInsuranceHtml: function(e) {
            var n = "";
            return n += "<table>", n += '<tr><td colspan="3"><p>适用年龄: ' + e.age + "<span>保障期限: " + e.validTime + "</span></p></td></tr>", n += "<tr><th>保障名称</th><th>保障责任</th><th>最高保额</th></tr>", e.detail ? $.each(e.detail, function(a, i) {
                n += "<tr>", 0 === a && (n += '<td rowspan="' + e.detail.length + '">' + e.insuranceName + "</td>"), n += "<td>" + i.duty + "</td><td>" + i.money + "</td>", n += "</tr>"
            }) : n += "<tr><td>" + e.insuranceName + "</td><td>" + e.generalize + "</td><td>" + e.highestMoney + "</td></tr>", n += "</table>"
        },
        cutInputHTML: function() {
            init.isCutStatus = !0, $(".isSexBirth").hide(), $(".isIdCard").show()
        },
        calculateQuestionHTML: function(e) {
            var n = [{
                    tit: "4、您期望的保障金额是？",
                    select: [{
                        value: "10",
                        text: "10万"
                    }, {
                        value: "20",
                        text: "20万"
                    }, {
                        value: "30",
                        text: "30万"
                    }, {
                        value: "50",
                        text: "50万"
                    }]
                }, {
                    tit: "5、您更倾向的缴费方式为？",
                    select: [{
                        value: "ANNUAL",
                        text: "年交"
                    }]
                }],
                a = "",
                i = !1;
            $.each(e, function(e, n) {
                if (null !== n.premiumInsurance) return i = !0, init.isCalculateProduct = !0, !1
            }), i && ($.each(n, function(e, n) {
                a += '<li class="ques_tit">' + n.tit + "</li>", a += '<li class="ques_select ques_type_one">', $.each(n.select, function(n, i) {
                    a += e + 4 === 5 ? '<span><label class="ques_select_label select_label">' : '<span><label class="ques_select_label">', a += '<input type="radio" name="answerIds[' + (e + 4) + ']" value="' + i.value + '">' + i.text, a += "</label></span>"
                }), a += "</li>"
            }), $("#calculateQuestion").html(a))
        }
    },
    calculateInsuranceDetail = {
        taiping: {
            productName: "百万行无忧",
            needSex: !0,
            testPremiumCode: init.testPremiumCode.taiping,
            selectMoney: [{
                v: "10",
                h: "10万"
            }, {
                v: "20",
                h: "20万"
            }, {
                v: "30",
                h: "30万"
            }, {
                v: "50",
                h: "50万"
            }, {
                v: "100",
                h: "100万"
            }],
            selectType: [{
                v: "MONTHLY",
                h: "月交"
            }, {
                v: "ANNUAL",
                h: "年交"
            }],
            detail: [{
                project: "公共交通工具意外身故",
                explain: "公共交通工具意外身故,最高赔付100万元"
            }, {
                project: "私家车驾乘意外身故",
                explain: "驾驶私家车意外身故,最高赔付100万元"
            }, {
                project: "自然灾害意外身故",
                explain: "因8种自然灾害意外身故最高赔付100万元"
            }, {
                project: "一般意外身故",
                explain: "一般意外身故最高赔付10万元"
            }, {
                project: "法定节假日意外身故",
                explain: "额外赔付基本保额10万元"
            }, {
                project: "意外伤残",
                explain: "因意外导致的伤残按照伤残等级赔付,最高赔付10万元"
            }, {
                project: "其他身故",
                explain: "因意外之外原因身故赔付110%所交保费"
            }, {
                project: "满期保险金",
                explain: "合同期满,给付110%所交保费"
            }]
        },
        daduhui: {
            productName: "都来保",
            needSex: !1,
            testPremiumCode: init.testPremiumCode.ddh,
            selectMoney: [{
                v: "10",
                h: "10万"
            }, {
                v: "20",
                h: "20万"
            }, {
                v: "30",
                h: "30万"
            }, {
                v: "50",
                h: "50万"
            }, {
                v: "100",
                h: "100万"
            }],
            selectType: [{
                v: "MONTHLY",
                h: "月交"
            }, {
                v: "ANNUAL",
                h: "年交"
            }],
            detail: [{
                project: "意外身故",
                explain: "1倍保额"
            }, {
                project: "意外残疾",
                explain: "保额×残疾比例+100%已交保费与现金价值中较大者"
            }, {
                project: "公交/自驾意外",
                explain: "2倍保额"
            }, {
                project: "航空意外",
                explain: "5倍保额"
            }, {
                project: "意外住院医疗",
                explain: "每次2%保额，可给付3次"
            }, {
                project: "意外关爱金",
                explain: "若因意外遭遇不测，每月2%保额，连续给付36个月"
            }, {
                project: "满期金",
                explain: "110%已交保费"
            }, {
                project: "身故金",
                explain: "18岁前：已交保费与现金价值较大者； 18岁及后：140%已交保费"
            }]
        },
        zhongying: {
            productName: "乐享一生",
            needSex: !0,
            testPremiumCode: init.testPremiumCode.zy_lxys,
            selectMoney: [{
                v: "10",
                h: "10万"
            }, {
                v: "20",
                h: "20万"
            }, {
                v: "30",
                h: "30万"
            }, {
                v: "50",
                h: "50万"
            }],
            selectType: [{
                v: "1",
                h: "一次性交清"
            }, {
                v: "5",
                h: "5年"
            }, {
                v: "10",
                h: "10年"
            }, {
                v: "15",
                h: "15年"
            }, {
                v: "20",
                h: "20年"
            }],
            detail: [{
                project: "重大疾病（81种）保险金",
                explain: "200万元（<i>100%</i>基本保险金额）"
            }, {
                project: "轻症疾病（29种）保险金",
                explain: "4万元（<i>20%</i>基本保险金额）"
            }, {
                project: "恶性肿瘤关爱保险金",
                explain: "10万元（<i>50%</i>基本保险金额）"
            }, {
                project: "身故/全残保险金",
                explain: "＜18周岁：给付已缴保险费 <br/>≧18周岁：20万元（<i>100%</i>基本保险金额）"
            }]
        },
        pingan: {
            productName: "鸿运随行超值意外保障计划 ",
            needSex: !1,
            testPremiumCode: init.testPremiumCode.pingan,
            selectMoney: [{
                v: "10",
                h: "10万"
            }, {
                v: "20",
                h: "20万"
            }, {
                v: "30",
                h: "30万"
            }, {
                v: "50",
                h: "50万"
            }, {
                v: "100",
                h: "100万"
            }],
            selectType: [{
                v: "MONTHLY",
                h: "月交"
            }, {
                v: "ANNUAL",
                h: "年交"
            }],
            detail: [{
                project: "保障期限",
                explain: "20年"
            }, {
                project: "期满生存金",
                explain: "118%返还所交保费"
            }, {
                project: "身故金",
                explain: "118%／150%返还所交保费"
            }, {
                project: "一般意外伤残或身故",
                explain: "30万元"
            }, {
                project: "自驾车意外伤残或身故",
                explain: "60万元"
            }, {
                project: "公共交通意外伤残或身故",
                explain: "60万元"
            }, {
                project: "意外伤害住院",
                explain: "<i class='premium_hospital_day'>200</i>元／天+意外医疗保额1.5万元(每年)"
            }]
        },
        matchingCalculate: function(e) {
            var n = "";
            return e.indexOf("中英") !== -1 && (n = this.zhongying), e.indexOf("平安") !== -1 && (n = this.pingan), e.indexOf("都来保") === -1 && e.indexOf("大都会") === -1 || (n = this.daduhui), e.indexOf("太平") !== -1 && (n = this.taiping), n
        }
    };

function jrtt_sdk_init(t) {
    init.sdkId = t,
        function(n) {
            n._tt_config = !0;
            var o = document.createElement("script");
            o.type = "text/javascript", o.async = !0, o.src = document.location.protocol + "//s3.pstatp.com/bytecom/resource/track_log/src/toutiao-track-log.js", o.onerror = function() {
                var n = new XMLHttpRequest,
                    e = window.encodeURIComponent(window.location.href),
                    r = o.src,
                    c = "//ad.toutiao.com/link_monitor/cdn_failed?web_url=" + e + "&js_url=" + r + "&convert_id=" + t;
                n.open("GET", c, !0), n.send(null)
            };
            var e = document.getElementsByTagName("script")[0];
            e.parentNode.insertBefore(o, e)
        }(window)
}

function jrtt_sdk_event() {
    return {
        form: function() {
            _taq.push({
                convert_id: init.sdkId,
                event_type: "form"
            })
        },
        button: function() {
            _taq.push({
                convert_id: init.sdkId,
                event_type: "button"
            })
        }
    }
}

function jw_load_js(t) {
    var p = ["http://m.vpadn.com/dsp/vpadn-segment.js?id=45_3505&t=2", "http://c-dsp.vpadn.com/conversion/45_33/?t=s", "http://m.vpadn.com/dsp/vpadn-segment.js?id=45_3506&t=2", "http://c-dsp.vpadn.com/conversion/45_34/?t=s", "http://m.vpadn.com/dsp/vpadn-segment.js?id=45_3507&t=2", "http://c-dsp.vpadn.com/conversion/45_37/?t=s", "http://m.vpadn.com/dsp/vpadn-segment.js?id=45_3569&t=2", "http://c-dsp.vpadn.com/conversion/45_38/?t=s", "http://m.vpadn.com/dsp/vpadn-segment.js?id=45_3570&t=2", "http://c-dsp.vpadn.com/conversion/45_39/?t=s"],
        n = document.getElementsByTagName("body")[0],
        d = document.createElement("script");
    d.type = "text/javascript", d.src = p[t], n.appendChild(d)
}

function paseQuestionnaire(e) {
    if (!(null === e || e.questions.length < 2)) {
        for (var s = "", n = 0; n < e.questions.length; n++) {
            s = s + "<li class='ques_tit'>" + (n + 1) + "、" + e.questions[n].questionContent + "</li> <li class='ques_select'>";
            for (var l = 0; l < e.questions[n].answers.length; l++) s = s + "<span><label><input type='radio' name='answerIds[" + n + "]' value='" + e.questions[n].answers[l].id + "'> " + e.questions[n].answers[l].answerContent + "</label></span>";
            s += "</li>"
        }
        $("#question_ul").html(s)
    }
}

function paseQuestionnaireTwo(e) {
    if (!(null === e || e.questions.length < 2)) {
        for (var s = "", n = 0; n < e.questions.length; n++) {
            s = s + "<li class='ques_tit'>" + (n + 1) + "、" + e.questions[n].questionContent + "</li> <li class='ques_select ques_type_one'>";
            for (var l = 0; l < e.questions[n].answers.length; l++) s = s + "<label class='ques_select_label'><input type='radio' name='answerIds[" + n + "]' value='" + e.questions[n].answers[l].id + "' alt='" + e.questions[n].answers[l].answerContent + "'> " + e.questions[n].answers[l].answerContent + "</label>";
            s += "</li>"
        }
        $("#question_ul").html(s), $(".ques_type_one label").on("click", function() {
            $(this).closest("li").find("label").removeClass("select_label"), $(this).addClass("select_label")
        })
    }
}

function paseQuestionnaireThree(e) {
    if (!(null === e || e.questions.length < 2)) {
        for (var s = "", n = 0; n < e.questions.length; n++) {
            s = s + "<li class='ques_tit'>" + (n + 1) + "、" + e.questions[n].questionContent + "</li> <li class='ques_select'>";
            for (var l = 0; l < e.questions[n].answers.length; l++) s = s + "<span><label class='ques_select_label' onclick='test(this)'><i></i><input type='radio' name='answerIds[" + n + "]' value='" + e.questions[n].answers[l].id + "'> " + e.questions[n].answers[l].answerContent + "</label></span>";
            s += "</li>"
        }
        $("#question_ul").html(s)
    }
}

function paseQuestionnaireXBB(e) {
    if (null !== e) {
        for (var s = "", n = 0; n < e.length; n++) {
            s = s + "<li class='ques_tit'>" + (n + 1) + "、" + e[n].question + "</li> <li class='ques_select ques_type_one'>";
            for (var l = 0; l < e[n].answerInfoList.length; l++) s = s + "<label class='ques_select_label'><input type='radio' name='answerIds[" + n + "]' value='" + e[n].answerInfoList[l].id + "'> " + e[n].answerInfoList[l].answer + "</label>";
            s += "</li>"
        }
        $("#question_ul").html(s), $(".ques_type_one label").on("click", function() {
            $(this).closest("li").find("label").removeClass("select_label"), $(this).addClass("select_label")
        })
    }
}

function paseQuestionnaire300(e) {
    console.log(e);
    var e = e.questions;
    if (null !== e) {
        for (var s = "", n = 0; n < e.length; n++) {
            s += "<li class='question_tit'>" + (n + 1) + "、" + e[n].questionContent + "</li> <li class='question_select'>", console.log(e[n].answers);
            for (var l = 0; l < e[n].answers.length; l++) s += "<label><input type='radio' name='answerIds[" + n + "]' value='" + e[n].answers[l].answerContent + "'> " + e[n].answers[l].answerContent + "</label>";
            s += "</li>"
        }
        $("#question_ul").html(s), $(".question_select label").on("click", function() {
            $(this).closest("li").find("label").removeClass("label_true"), $(this).addClass("label_true")
        })
    }
}

function paseQuestionnairEaccurate(e) {
    var e = e.questions;
    if (null !== e) {
        for (var s = "", n = 0; n < e.length; n++) {
            s = s + '<div class="ques-title" style="text-align:left;margin-top: 16px;">' + e[n].questionContent + "</div>";
            var s = s + '<div class="line"> <div style="display:none;"> <label> </label> <input type="radio" name="answerIds[' + n + ']" />  </div> <select id="ques" class="ques-wrap" name="answerIds[' + n + ']" style="margin-left:16px;width:80%;">';
            s += '<option value="" disabled selected style="display:none;">请选择适合的选项</option>';
            for (var l = 0; l < e[n].answers.length; l++) s = s + '<option value="' + e[n].answers[l].answerContent + '">' + e[n].answers[l].answerContent + "</option>";
            s += "</select></div>"
        }
        $("#question_wrap").html(s), $(".ques-wrap").css("color", "#ccc"), $(".ques-wrap option").css("color", "#000"), $(".ques-wrap").change(function() {
            var e = $(this).val();
            $(this).siblings().find("label").text(e).siblings().attr("checked", !0), e == $(this).find("option:first").val() ? $(this).css("color", "#ccc") : $(this).css("color", "#000")
        })
    }
}

function paseQuestionnairEaccurateTwo(e) {
    console.log(e);
    var e = e.questions;
    if (null !== e) {
        for (var s = "", n = 0; n < e.length; n++) {
            s += "<li class='ques_tit'>" + (n + 1) + "、" + e[n].questionContent + "</li> <li class='ques_select'>", console.log(e[n].answers);
            for (var l = 0; l < e[n].answers.length; l++) s += "<label class='select_false'><input type='radio' name='answerIds[" + n + "]' value='" + e[n].answers[l].answerContent + "'> " + e[n].answers[l].answerContent + "</label>";
            s += "</li>"
        }
        $("#question_ul").html(s), $(".ques_select label").on("click", function() {
            $(this).closest("li").find("label").removeClass("select_true"), $(this).addClass("select_true")
        })
    }
}! function(e) {
    var a = {
        sourceName: "activitySource",
        setSource: function(e) {
            var a = this.collectForm(),
                r = this.collectUrl(),
                t = this.collectKeyword(),
                o = {
                    formData: a,
                    urlParam: r,
                    keyword: t,
                    config: e
                };
            sessionStorage.setItem(this.sourceName, JSON.stringify(o))
        },
        getSource: function() {
            var e = sessionStorage[this.sourceName] ? JSON.parse(sessionStorage[this.sourceName]) : null;
            return e
        },
        jumpResult: function(e, a, r, t) {
            var o = e.adForwardInfo,
                n = e.status.toUpperCase(),
                s = r || "success.html?status=" + n;
            if (sessionStorage.zxCode && (s = r || "success.html?adCode=" + sessionStorage.zxCode + "&status=" + n), t || this.setSource(o), "FAILED" === n)
                if (o && o.failUrl) {
                    var i = o.failUrl.replace("&amp;", "&");
                    s = i
                } else a && (s = a);
            this.goonSubmit(e, a, r) || ("string" == typeof s ? location.href = s : "function" == typeof s && s())
        },
        goonSubmit: function(e, a, r) {
            var t = this.getSource(),
                o = getQueryString("goon"),
                n = e && e.adForwardInfo && e.adForwardInfo.adCode,
                s = !!(t && o && n);
            if (s) {
                sessionStorage && (sessionStorage.isGoon = 1);
                var i = function(e) {
                    var o = t.formData,
                        s = {
                            safeInstruct: !0,
                            adCode: n,
                            sign: md5(n + e + o.mobile),
                            mobile: o.mobile,
                            sex: o.sex,
                            policyHolderName: o.name,
                            policyHolderSex: ["FEMALE", "MALE"][o.sex],
                            policyHolderBirth: o.birth,
                            policyHolderIdCard: o.idCard,
                            questionnaire: o.questionnaire,
                            premiumInfo: o.premiumInfo
                        },
                        i = r.match("http") ? r : "../zxFolder/newsuccess.html",
                        c = a;
                    actService().actSaveNew(s).then(function(e) {
                        sessionStorage && (sessionStorage.ylInfo = JSON.stringify(e)), sessionStorage.policyCode = e.policyCode, saveKeywordToOa(e.policyCode, function() {
                            initStatisticsSDK.callbackFn(function() {
                                location.href = i, popup.close(postLayer)
                            })
                        })
                    }, function() {
                        location.href = c, popup.close(postLayer)
                    })
                };
                actService().getFetch(n).then(function(e) {
                    var a = e.sign;
                    a && i(a)
                })
            }
            return s
        },
        jumpProduct: function(e) {
            try {
                var a = JSON.parse(sessionStorage[this.sourceName]),
                    r = a && a.config && a.config.insuranceUrl,
                    t = (r || e) + (a && a.urlParam);
                location.href = t
            } catch (o) {
                e && (location.href = e), !e && popup.msg("未配置产品地址", {
                    time: 1e3
                })
            }
        },
        collectForm: function() {
            var e = [],
                a = {};
            init.questions && (e = $.map(init.questions, function(e, a) {
                return e.answers = [$("input[name='answerIds[" + a + "]']:checked").parent().text().trim()], e
            }));
            var r = $("input[name='answerIds[100]']:checked").val();
            return r && (a = {
                sumInsured: 100 * r * 1e4,
                paymentType: "ANNUAL"
            }), {
                name: $("[name=name]").val(),
                sex: $("[name=sex]:checked").val(),
                birth: $("[name=birth]").val(),
                mobile: $("[name=mobile]").val(),
                idCard: $("[name=idCard]").val(),
                questionnaire: e,
                premiumInfo: a
            }
        },
        collectUrl: function() {
            var e = location.search.substr(1),
                a = [/[&]*adCode=[^?&]*/, /[&]*channelCode=[^?&]*/, /[&]*stats_sdk=[^?&]*/];
            return a.map(function(a) {
                e = e.replace(a, "")
            }), e
        },
        collectKeyword: function() {
            var e = document.referrer,
                a = {};
            if (e.indexOf("?") != -1) {
                var r = e.substr(e.indexOf("?") + 1);
                strs = r.split("&");
                for (var t = 0; t < strs.length; t++) {
                    var o = strs[t].split("=")[0],
                        n = decodeURIComponent(strs[t].split("=")[1]);
                    a[o] = n;
                    var s = ["q", "p", "k", "w", "kw", "wd", "word", "query", "search", "keyword"];
                    s.forEach(function(e) {
                        o === e && (a.word = n && n.length > 30 ? "无法识别" : n)
                    })
                }
            }
            return a.word || ""
        },
        fillForm: function() {
            var e = {};
            try {
                e = JSON.parse(sessionStorage[this.sourceName])
            } catch (a) {
                return null
            }
            var r = e.formData;
            $("[name=name]").val(r.name), $("[name=mobile]").val(r.mobile), $("[name=mobile]").val() && $(".captcha").show();
            var t = !!r.idCard,
                o = function(e) {
                    return e.slice(14, 17) % 2 ? 1 : 0
                },
                n = function(e) {
                    return e.substring(6, 10) + "-" + e.substring(10, 12) + "-" + e.substring(12, 14)
                };
            t ? ($("[name=idCard]").val(r.idCard), 1 == o(r.idCard) ? ($(".male").addClass("active"), $("[name=sex]").eq(0).length > 0 && ($("[name=sex]").eq(0)[0].checked = !0)) : ($(".female").addClass("active"), $("[name=sex]").eq(0).length > 0 && ($("[name=sex]").eq(1)[0].checked = !0)), $("[name=birth]").val(n(r.idCard))) : (1 == r.sex ? ($(".male").addClass("active"), $("[name=sex]").eq(0).length > 0 && ($("[name=sex]").eq(0)[0].checked = !0)) : ($(".female").addClass("active"), $("[name=sex]").eq(1).length > 0 && ($("[name=sex]").eq(1)[0].checked = !0)), $("[name=birth]").val(r.birth))
        }
    };
    e.insureRecord = a
}(window);

function getCaptcha(t, c) {
    _t = $(t), _customCss = c, _css_color = _t.css("color"), _css_backgroundColor = _t.css("background-color"), _onclick = _t.attr("onclick"), mobile = $("input[name='mobile']").val(), _t.removeAttr("onclick"), times = 60;
    try {
        v_mobile()
    } catch (o) {
        return popup.msg(o.message), void _t.attr("onclick", _onclick)
    }
    actService().sendCaptcha(mobile).then(function(t) {
        init.submit_switch ? (console.log("send"), popup.msg("验证码已发送"), change_btn_captcha_text_timer = setInterval(function() {
            change_btn_captcha_text()
        }, 1e3)) : 200 === t.statusCode ? (popup.msg("验证码已发送"), change_btn_captcha_text_timer = setInterval(function() {
            change_btn_captcha_text()
        }, 1e3)) : (_t.text("获取验证码").attr("onclick", _onclick).css({
            color: _css_color,
            "background-color": _css_backgroundColor
        }), popup.msg(t.message))
    }).fail(function(t) {
        _t.text("获取验证码").attr("onclick", _onclick).css({
            color: _css_color,
            "background-color": _css_backgroundColor
        }), popup.msg(t.message)
    })
}

function sendXBBCaptcha(t, c, o) {
    _t = $(t), _customCss = c, _css_color = _t.css("color"), _css_backgroundColor = _t.css("background-color"), _onclick = _t.attr("onclick"), mobile = $("input[name='mobile']").val(), _t.removeAttr("onclick"), times = 60;
    try {
        v_mobile()
    } catch (e) {
        return popup.msg(e.message), void _t.attr("onclick", _onclick)
    }
    if (void 0 === $(t).attr("signname") || "" === $(t).attr("signname") || null === $(t).attr("signname")) var n = {
        mobile: mobile
    };
    else var n = {
        mobile: mobile,
        signName: $(t).attr("signname")
    };
    xbbService().sendCaptcha(n, o), popup.msg("验证码已发送"), change_btn_captcha_text_timer = setInterval(function() {
        change_btn_captcha_text()
    }, 1e3)
}

function sendXBBCaptchaLaiye(t, c, o) {
    _t = $(t), _customCss = c, _css_color = _t.css("color"), _css_backgroundColor = _t.css("background-color"), _onclick = _t.attr("onclick"), mobile = $("input[name='mobile-laiye']").val(), _t.removeAttr("onclick"), times = 60;
    try {
        v_laiye_mobile()
    } catch (e) {
        return popup.msg(e.message), void _t.attr("onclick", _onclick)
    }
    if (void 0 === $(t).attr("signname") || "" === $(t).attr("signname") || null === $(t).attr("signname")) var n = {
        mobile: mobile
    };
    else var n = {
        mobile: mobile,
        signName: $(t).attr("signname")
    };
    xbbService().sendCaptcha(n, o), popup.msg("验证码已发送"), change_btn_captcha_text_timer = setInterval(function() {
        change_btn_captcha_text()
    }, 1e3)
}

function sendPinganCaptcha(t, c, o) {
    _t = $(t), _customCss = c, _css_color = _t.css("color"), _css_backgroundColor = _t.css("background-color"), _onclick = _t.attr("onclick"), mobile = $("input[name='mobile']").val(), _t.removeAttr("onclick"), times = 60;
    try {
        v_mobile()
    } catch (e) {
        return popup.msg(e.message), void _t.attr("onclick", _onclick)
    }
    var n = {
        mobile: mobile,
        content: sessionStorage.cookieId
    };
    xbbService().callPinganCaptcha(n), popup.msg("验证码已发送"), change_btn_captcha_text_timer = setInterval(function() {
        change_btn_captcha_text()
    }, 1e3)
}

function change_btn_captcha_text() {
    times--, times > 0 ? _t.text(times + "秒再获取").removeAttr("onclick").css(_customCss) : (clearInterval(change_btn_captcha_text_timer), _t.text("获取验证码").attr("onclick", _onclick).css({
        color: _css_color,
        "background-color": _css_backgroundColor
    }))
}
var change_btn_captcha_text_timer = null,
    times = 60,
    _t, _onclick, _css_color, _css_backgroundColor, _customCss;
! function(e) {
    var t = {
        state: {
            config: {
                actType: "zx",
                questionsList: {
                    questions: [{
                        id: 0,
                        questionContent: "您希望为谁配置保障？",
                        answers: [{
                            id: 0,
                            answerContent: "自己"
                        }, {
                            id: 1,
                            answerContent: "父母"
                        }, {
                            id: 2,
                            answerContent: "子女"
                        }, {
                            id: 3,
                            answerContent: "配偶"
                        }]
                    }, {
                        id: 1,
                        questionContent: "这款产品您希望了解哪方面内容？",
                        answers: [{
                            id: 0,
                            answerContent: "价格"
                        }, {
                            id: 1,
                            answerContent: "保障内容"
                        }, {
                            id: 2,
                            answerContent: "产品优势"
                        }, {
                            id: 3,
                            answerContent: "品牌"
                        }]
                    }]
                },
                callTime: {
                    am: "上午 08:00 - 12:00",
                    pm: "下午 13:00 - 18:00"
                },
                fontColor: "#CF000D",
                borderColor: "#FF6600",
                bgColor: "#fff",
                iconImg: "https://newtank-production.oss-cn-shanghai.aliyuncs.com/act/images/taikang0905/success@2x.png",
                banneriImg: "https://newtank-production.oss-cn-shanghai.aliyuncs.com/act/images/funde0524/pic_success@2x.png",
                copyWriting: $('<div class="textWriting">华夏人寿授权服务机构<span class="fontMark">【宜安保】</span>的客户经理将尽快与您联系，为您提供专业的产品咨询与保险规划服务。</div><div class="textWriting">请您留意宜安保 <span class="fontMark">021-68619697(6)</span> 的来电，保持手机畅通，祝您生活愉快！</div>'),
                footerFont: "电话销售和线下销售的保险产品，都受保监会监管，可放心投保",
                sloganTit: "已为您预约专属顾问",
                quesAppendAble: !0
            }
        },
        init: function(e) {
            console.log(e);
            var o = t;
            for (var n in e) o.state.config[n] = e[n];
            var s = o.state.config;
            if (addBaiduStatistics(), "zx" === s.actType) {
                console.log("赠险");
                var a = "",
                    i = "",
                    r = "",
                    l = "",
                    c = "";
                if (a = sessionStorage && sessionStorage.ylUser, i = sessionStorage && sessionStorage.ylInfo, a) {
                    a = JSON.parse(a);
                    JSON.parse(sessionStorage.ylUser);
                    $("#orderName").html(a.policyHolderName.substr(0, 1) + "*"), $("#orderPhone").html(a.mobile.substr(0, 3) + "****" + a.mobile.substr(8, 3)), $("#orderSex").html(a.policyHolderIdCard ? resolveIdCard.getSex(a.policyHolderIdCard) : "1" === a.sex ? "男" : "女"), $("#orderBirth").html(a.policyHolderIdCard ? resolveIdCard.getBirth(a.policyHolderIdCard) : a.policyHolderBirth)
                }
                if (i) {
                    i = JSON.parse(i);
                    var d = i.detailMessage[i.detailMessage.length - 1],
                        u = (d.productName, d.companyName),
                        m = d.productCode,
                        g = "";
                    l = insuranceDetail.matchingInsurance(m), r = calculateInsuranceDetail.matchingCalculate(u), c = r.testPremiumCode, l.detail ? $.each(l.detail, function(e, t) {
                        g += "<tr><td>" + t.duty + "</td>", g += "<td>" + t.money + "</td>", g += "</tr>"
                    }) : g += "<tr><td>" + l.generalize + "</td><td>" + l.highestMoney + "</td></tr>", $(".insuranceDetail").append(g), $("#insureTitle").html(l.insuranceName), $("#insureTime1").html(l.age), $("#insureTime2").html(l.validTime), $("#companyName").html(d.companyName), $("#companyAbout").attr("src", "https://newtank-production.oss-cn-shanghai.aliyuncs.com/act/image/logo/" + l.code + "_jieshao.png"), $("#companyIcon").attr("src", "https://newtank-production.oss-cn-shanghai.aliyuncs.com/act/image/logo/" + l.code + ".png")
                }
                landingJump({
                    landing: getQueryString("ch_mark") ? getQueryString("ch_mark") : getQueryString("lpCode"),
                    mobile: a.mobile
                }, null, "https://newtank-production.oss-cn-shanghai.aliyuncs.com/act%2Fimages%2Ftaikang0907%2Fpopup_result%402x.png", !0), $("td").css("border-color", s.borderColor), $("th").css({
                    "border-color": s.borderColor,
                    "background-color": s.bgColor
                }), $(".age").css("border-color", s.borderColor)
            } else console.log("精准"), $(".copyWriting").append(s.copyWriting), $(".sloganTit").text(s.sloganTit), $(".footerFont").text(s.footerFont), $(".bannerImg").attr("src", s.banneriImg), $(".am").html(s.callTime.am), $(".pm").html(s.callTime.pm), $(".am").click(o.form.onTimeChange), $(".pm").click(o.form.onTimeChange), $(".callTimeBtn").click(o.form.subCallTime), $(".subQuesBtn").click(o.form.formSubQuetion), o.form.createQuestionLists(s.questionsList);
            $(".resetColor").css({
                color: s.fontColor,
                "border-color": s.borderColor
            }), $("#iconImg img").attr("src", s.iconImg)
        },
        form: {
            onTimeChange: function(e) {
                var t = $(e.currentTarget),
                    o = t.attr("class"),
                    n = o.match("am") ? 1 : 0,
                    s = $("[name=time]");
                1 === n ? ($(".pm").removeClass("active"), $(".am").addClass("active"), s.eq(0)[0].checked = !0) : 0 === n && ($(".am").removeClass("active"), $(".pm").addClass("active"), s.eq(1)[0].checked = !0)
            },
            subCallTime: function() {
                var e = {};
                e.tag = {
                    callTime: $(".active").text()
                };
                var t = JSON.parse(sessionStorage.ylInfo);
                e.policyCode = t.policyCode, xbbService().updateInsuranceInfo(e).then(function(e) {
                    console.log(e), $(".callTime-box").hide(), $(".question-box").show()
                }, function(e) {
                    console.log(e), $(".callTime-box").hide(), $(".question-box").show()
                })
            },
            formSubQuetion: function() {
                var e = t,
                    o = e.state.config,
                    n = $("input[name='answerIds[0]']:checked").val(),
                    s = $("input[name='answerIds[1]']:checked").val(),
                    a = $.trim($(".ques-tit1").text()),
                    i = $.trim($(".ques-tit2").text());
                try {
                    if (!n || !s) throw new Error("请先完成问卷调查")
                } catch (r) {
                    return popup.msg(r.message, {
                        time: 1e3
                    }), !1
                }
                var l = {};
                l.questionnaire = [{
                    question: a,
                    answers: [n]
                }, {
                    question: i,
                    answers: [s]
                }];
                var c = JSON.parse(sessionStorage.ylInfo);
                l.policyCode = c.policyCode, l.appendable = o.quesAppendAble, console.log(l), xbbService().updateInsuranceInfo(l).then(function(e) {
                    console.log(e), $(".question-box").hide()
                }, function(e) {
                    console.log(e), $(".question-box").hide()
                })
            },
            createQuestionLists: function(e) {
                if (null !== e) {
                    for (var t = "", o = 0; o < e.questions.length; o++) {
                        t = t + "<li class='tit ques-tit" + (o + 1) + "'>" + (o + 1) + "、" + e.questions[o].questionContent + "</li> <li class='select'>";
                        for (var n = 0; n < e.questions[o].answers.length; n++) t = t + "<label class='select_false'><input type='radio' name='answerIds[" + o + "]' value='" + e.questions[o].answers[n].answerContent + "' alt='" + e.questions[o].answers[n].id + "'> " + e.questions[o].answers[n].answerContent + "</label>";
                        t += "</li>"
                    }
                    $("#question_ul").prepend(t), $(".select label").click(function() {
                        $(this).closest("li").find("label").removeClass("select_true"), $(this).addClass("select_true")
                    })
                }
            }
        }
    };
    e.initSuccess = t.init
}(window);

function saveKeywordToOa(e, t) {
    var a = loanProfile(),
        i = {
            uId: e,
            type: "INSURE",
            keyword: a,
            channelCode: init.requestParams.channelCode ? init.requestParams.channelCode : ""
        };
    actService().getKeyword(i).then(function(e) {
        t()
    }, function() {
        t()
    })
}

function changeFormCss(e, t, a) {
    $(".lines .line input").focus(function() {
        $(this).closest(".line").css("border-color", e).find(".label").css("color", e)
    }), $(".lines .line input").blur(function() {
        $(this).closest(".line").css("border-color", a).find(".label").css("color", t)
    }), $(".lines .line select").focus(function() {
        $(this).closest(".line").css("border-color", e).find(".label").css("color", e)
    }), $(".lines .line select").blur(function() {
        $(this).closest(".line").css("border-color", a).find(".label").css("color", t)
    })
}

function changeLaiyeFormCss(e, t, a) {
    $(".lines .line input").focus(function() {
        $(this).closest(".line").find(".label").css("color", e).siblings(".input").css("border-color", e)
    }), $(".lines .line input").blur(function() {
        $(this).closest(".line").find(".label").css("color", t).siblings(".input").css("border-color", a)
    }), $(".lines .line select").focus(function() {
        $(this).closest(".line").find(".label").css("color", e).siblings(".input").css("border-color", e)
    }), $(".lines .line select").blur(function() {
        $(this).closest(".line").find(".label").css("color", t).siblings(".input").css("border-color", a)
    })
}

function createSelectOptions(e, t) {
    var a, i = $("#birth-box").attr("placeholder"),
        n = new Date,
        s = n.getFullYear(),
        r = parseInt(n.getMonth() + 1) >= 10 ? n.getMonth() + 1 : "0" + (n.getMonth() + 1),
        o = parseInt(n.getDate()) < 10 ? "0" + n.getDate() : n.getDate();
    a = "-" + r + "-" + o;
    var c = '<option value="" disabled selected style="display:none;">' + i + "</option>";
    $("#birth-box").append(c);
    for (var l = e; l <= t; l++) {
        var d = '<option value="' + (s - l) + a + '">' + l + "</option>";
        $("#birth-box").append(d), $("#birth-box").css("color", "#ccc"), $("option").css("color", "#000"), $("#birth-box").change(function() {
            var e = $(this).val();
            e == $(this).find("option:first").val() ? $(this).css("color", "#ccc") : $(this).css("color", "#000")
        })
    }
}

function initMobiscroll_date(e, t, a) {
    var i = a || "#birth",
        n = $(i).attr("defaultshowdate"),
        s = (new Date).getFullYear(),
        r = new Date,
        o = r.getMonth(),
        c = r.getDate(),
        l = s - t,
        d = s - e,
        u = {};
    if (u.date = {
            preset: "date"
        }, u.datetime = {
            preset: "datetime"
        }, u.time = {
            preset: "time"
        }, u["default"] = {
            minDate: new Date(l, o, c + 1),
            maxDate: new Date(d, o, c),
            theme: "android-ics light",
            display: "modal",
            mode: "scroller",
            dateFormat: "yyyy-mm-dd",
            lang: "zh"
        }, n) {
        var p = n.split(",");
        u["default"].newParam = "defaultShowDate", u["default"].defaultShowDate = new Date(p[0], p[1], p[2])
    } else console.log(n);
    $(i).mobiscroll($.extend(u.date, u["default"]))
}

function resetSelects() {
    $("select").css("color", "#ccc"), $("option").css("color", "#000"), $("select").change(function() {
        var e = $(this).val();
        e == $(this).find("option:first").val() ? $(this).css("color", "#ccc") : $(this).css("color", "#000")
    })
}

function initZhuge() {
    ! function() {
        window.zhuge = window.zhuge || [], window.zhuge.methods = "_init identify track getDid getSid getKey setSuperProperty setUserProperties setPlatform".split(" "), window.zhuge.factory = function(e) {
            return function() {
                var t = Array.prototype.slice.call(arguments);
                return t.unshift(e), window.zhuge.push(t), window.zhuge
            }
        };
        for (var e = 0; e < window.zhuge.methods.length; e++) {
            var t = window.zhuge.methods[e];
            window.zhuge[t] = window.zhuge.factory(t)
        }
        window.zhuge.load = function(e, t) {
            if (!document.getElementById("zhuge-js")) {
                var a = document.createElement("script"),
                    i = new Date,
                    n = i.getFullYear().toString() + i.getMonth().toString() + i.getDate().toString();
                a.type = "text/javascript", a.id = "zhuge-js", a.async = !0, a.src = ("http:" == location.protocol ? "http://sdk.zhugeio.com/zhuge.min.js?v=" : "https://zgsdk.zhugeio.com/zhuge.min.js?v=") + n, a.onerror = function() {
                    window.zhuge.identify = window.zhuge.track = function(e, t, a) {
                        a && "[object Function]" === Object.prototype.toString.call(a) ? a() : "[object Function]" === Object.prototype.toString.call(t) && t()
                    }
                };
                var s = document.getElementsByTagName("script")[0];
                s.parentNode.insertBefore(a, s), window.zhuge._init(e, t)
            }
        }, window.zhuge.load("2f5d65005aae4c1099e45cf913fc217e", {
            superProperty: {
                "应用名称": "新旦科技"
            },
            visualizer: !0
        })
    }()
}

function controlForm() {
    null === init.object_config.adConfigFilter.vCaptcha && $("input[name=captcha]").closest(".line").remove(), null === init.object_config.adConfigFilter.vIdCard ? $("input[name=idCard]").closest(".line").remove() : ($(".sex").siblings(".name").removeClass("name"), $(".sex").remove(), $("input[name=birth]").closest(".line").remove())
}

function show_ad() {
    "no" === getRequestParams().show_ad && ($(".activity-bx").hide(), $("#ddhb-bx .form-bx").css({
        top: "0"
    }), $("#scrollWrap").css({
        top: "-15px"
    }))
}

function hideClassHideDiv() {
    "hide" === getRequestParams().hide && $(".hide-dom").hide()
}

function landingJump(e, t, a, i) {
    var n = (t && t.responseJSON || {}).message,
        s = ($('<div class="jump-bx layer-bx"><div class="bg"></div><div class="bd"><div class="title">抱歉，您的手机号已参加过活动</div><div class="desc">我们为您推荐一款符合您投保条件的重疾保障</div><div class="status">正在为您跳转…</div></div></div>'), function() {
            $(".popup_loading").remove(), $(".question-bx").hide()
        });
    !t || n && (n.match("该手机号半年内已参与过活动") || n.match("该手机号已经参与活动")) ? (popup.msg(n, {
        time: 1e3
    }), s()) : (popup.msg(n, {
        time: 1e3
    }), s())
}

function getCurTime(e, t) {
    var a = new Date,
        i = a.getFullYear(),
        n = a.getMonth() + 1,
        s = a.getDate(),
        r = a.getHours(),
        o = a.getMinutes(),
        c = a.getSeconds();
    n >= 1 && n <= 9 && (n = "0" + n), s >= 0 && s <= 9 && (s = "0" + s), r >= 0 && r <= 9 && (r = "0" + r), o >= 0 && o <= 9 && (o = "0" + o), c >= 0 && c <= 9 && (c = "0" + c);
    var l;
    return l = e ? i + e + n + e + s : i + "-" + n + "-" + s, t && (l = l + " " + r + ":" + o + ":" + c), l
}

function createBaiduPostData(e) {
    var t;
    t = void 0 === init.requestParams.baidu_uid || "" === init.requestParams.baidu_uid ? "" : init.requestParams.baidu_uid;
    var a = {
        uid: t,
        clickTime: baiduTimestamp,
        adCode: init.requestParams.adCode,
        policyCode: e
    };
    return a
}

function callBaiduApi(e, t) {
    if (void 0 === init.requestParams.baidu_uid || "" === init.requestParams.baidu_uid) t && t();
    else {
        var a = createBaiduPostData(e);
        try {
            xbbService().baiduOcpc(a).then(function(e) {
                200 === e.status && t && t()
            }, function() {
                t && t()
            })
        } catch (i) {
            t && t()
        }
    }
}

function callLaiyeApi(e) {
    var t = getQueryString("adCode"),
        a = {
            adCode: t,
            policyHolderName: $("input[name='name-laiye']").val(),
            mobile: $("input[name='mobile-laiye']").val(),
            captcha: $("input[name='captcha-laiye']").val(),
            sign: md5(t + $("input[name='name-laiye']").val() + $("input[name='mobile-laiye']").val())
        };
    xbbService().laiye(a).then(function(t) {
        console.log(t), t.status === !0 ? (wulai = new WuLai({
            autoOpen: !1,
            fullScreen: !1
        }), wulai.open({
            userId: t.uid
        }), wulai.setServiceName("吾来IM"), e && e()) : popup.msg(t.message, {
            time: 1e3
        })
    }, function(t) {
        console.log(t), popup.msg(t.status, {
            time: 1e3
        }), e && e()
    })
}

function jumpCommonResult(e, t, a) {
    var i = "lpCode",
        n = getQueryString(i),
        s = "ch_mark=" + getQueryString("ch_mark"),
        r = t.match(/\?/) ? "&" : "?",
        o = e.match(/\?/) ? "&" : "?";
    n ? insureRecord.jumpResult(a, t + o + i + "=" + n, e + r + i + "=" + n) : insureRecord.jumpResult(a, t + o + s, e + r + s)
}

function getLandingPageDate() {
    var e = insureRecord.collectUrl(),
        t = [/[&]*ch_mark=[^?&]*/, /[&]*mobile=[^?&]*/, /[&]*lpCode=[^?&]*/];
    t.map(function(t) {
        e = e.replace(t, "")
    });
    var a, i = insureRecord.collectKeyword();
    return a = void 0 !== getRequestParams().lpCode ? {
        landing: getRequestParams().lpCode,
        mobile: JSON.parse(sessionStorage.ylUser).mobile
    } : {
        landing: getRequestParams().ch_mark,
        mobile: JSON.parse(sessionStorage.ylUser).mobile
    }, {
        postDate: a,
        urlParam: e,
        keyword: i
    }
}

function prodXuTouJump(e, t, a, i) {
    var n = getLandingPageDate(),
        s = getQueryString("lpCode"),
        r = getQueryString("ch_mark"),
        o = "lpCode=" + s,
        c = "ch_mark=" + r,
        l = t.match(/\?/) ? "&" : "?",
        d = a.match(/\?/) ? "&" : "?",
        u = insureRecord.getSource(),
        p = !!getQueryString("open_tc") || u && u.urlParam && u.urlParam.match("open_tc=1");
    s && !p ? xbbService().landingPage(n.postDate).then(function(n) {
        200 === n.status ? insureRecord.jumpResult(e, n.url, n.url, i) : insureRecord.jumpResult(e, t + d + o, a + l + o, i)
    }) : r && !p ? xbbService().landingPage(n.postDate).then(function(n) {
        200 === n.status ? insureRecord.jumpResult(e, n.url, n.url, i) : insureRecord.jumpResult(e, t + d + c, a + l + c, i)
    }) : insureRecord.jumpResult(e, t, a, i)
}

function generateUUID() {
    var e = (new Date).getTime(),
        t = "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, function(t) {
            var a = (e + 16 * Math.random()) % 16 | 0;
            return e = Math.floor(e / 16), ("x" == t ? a : 3 & a | 8).toString(16)
        });
    return sessionStorage.cookieId ? void console.log("do nothing!") : sessionStorage.cookieId = t
}

function unsubscribe() {
    var e = JSON.parse(sessionStorage.ylInfo);
    if (e && e.policyCode) return $.ajax({
        type: "GET",
        url: configApi.xbbApiUrl + "insurance/unsubscribe/" + e.policyCode,
        contentType: "application/json; charset=utf-8"
    })
}

function getPinganPostData() {
    var e = init.object_config.sign,
        t = $("input[name = 'mobile']").val(),
        a = {
            adCode: init.page_ad_code,
            sign: md5(init.page_ad_code + e + t),
            activityConfigNum: 0,
            mobile: t,
            sex: $("input[name='sex']:checked").val(),
            policyHolderName: $("input[name = 'name']").val(),
            policyHolderSex: ["FEMALE", "MALE"][$("input[name='sex']:checked").val()],
            policyHolderBirth: $("input[name='birth']").val(),
            policyHolderIdCard: $("input[name = 'idCard']").val(),
            extraLabels: {
                paCaptcha: $("input[name='captcha']").val(),
                sessionId: sessionStorage.cookieId
            }
        };
    return init.questions && (a.questionnaire = $.map(init.questions, function(e, t) {
        return e.answers = [$("input[name='answerIds[" + t + "]']:checked").parent().text().trim()], e
    })), a
}
var resolveIdCard = {
        getSex: function(e) {
            return e.slice(14, 17) % 2 ? "男" : "女"
        },
        getBirth: function(e) {
            return e.substring(6, 10) + "-" + e.substring(10, 12) + "-" + e.substring(12, 14)
        }
    },
    scrollAdBtn = function() {
        if (0 !== $(".fixed-bx").length) {
            var e = document.querySelector(".fixed-bx").clientHeight + 12;
            $(".blank-bx").height(e);
            var t = document.querySelector(".form-bx").offsetTop + document.querySelector(".form-bx").clientHeight - e - 36,
                a = document.documentElement.clientHeight + (document.documentElement.scrollTop || document.body.scrollTop);
            a >= t + e && a <= t + document.documentElement.clientHeight + e ? ($(".fixed-bx").addClass("abs-bx").css({
                top: t,
                bottom: "auto"
            }), $("#ddhb-bx .fixed-bx .img").css("margin", "0 38px"), $("#ddhb-bx .fixed-bx .img .subTbn").css("border-radius", "50px")) : ($(".fixed-bx").removeClass("abs-bx").css({
                top: "auto",
                bottom: "0"
            }), $("#ddhb-bx .fixed-bx .img").css("margin", "0"), $("#ddhb-bx .fixed-bx .img .subTbn").css("border-radius", "0"))
        }
    },
    prizeDraw = {
        surplusNumber: {
            num: "3"
        },
        rotateFunc: function() {
            var e = [{
                name: "388元英语教程",
                img: "https://newtank-production.oss-cn-shanghai.aliyuncs.com/act/image/aiqiyi/2.png",
                icon: "https://newtank-production.oss-cn-shanghai.aliyuncs.com/act/image/aiqiyi/ad_2.png",
                url: "https://cn.mikecrm.com/j99x70F"
            }, {
                name: "平安信用卡",
                img: "https://newtank-production.oss-cn-shanghai.aliyuncs.com/act/image/worldcup0608/bg/pingan.png",
                icon: "https://newtank-production.oss-cn-shanghai.aliyuncs.com/act/image/worldcup0608/bg/pingan-mini.png",
                url: "https://bank-static.pingan.com.cn/ca/pc/index.html#/First?channel=WX&onlineSQFlag=N&sign=23e48866-8eee-43e5-ae3f-8d20cc33d8a031d26eedbe4a73b4a4bf746560501742&ccp=1a3a30a8a9&versionNo=R10310&scc=900000516&isDisplayRecommend=N&isDisplaySales=N"
            }, {
                name: "20万贷款额度",
                img: "https://newtank-production.oss-cn-shanghai.aliyuncs.com/act/image/aiqiyi/1.png",
                icon: "https://newtank-production.oss-cn-shanghai.aliyuncs.com/act/image/aiqiyi/ad_1.png",
                url: "http://wap.newtank.cn/newtank/loan/loan1024/index.html?channel=visa"
            }, {
                name: "拉卡拉pos机",
                img: "https://newtank-production.oss-cn-shanghai.aliyuncs.com/act/images/ddhb0621/banner.png",
                icon: "https://newtank-production.oss-cn-shanghai.aliyuncs.com/act/images/ddhb0709/POS%E6%9C%BA.png",
                url: "https://m.kaolazhengxin.com:8449/cts/kaolavue/module/newLandingPage.html?channel=700098"
            }];
            if (rotate = ["120", "180", "240", "280"], math = Math.floor(4 * Math.random()), this.surplusNumber.num <= 0) return void popup.msg("抽奖机会已用完~", {
                time: 1e3
            });
            this.surplusNumber.num = this.surplusNumber.num - 1, $.cookie("drawList_number", JSON.stringify(this.surplusNumber.num), {
                expires: 7
            }), $(".tit span").html(this.surplusNumber.num), $(".turnBtn").stopRotate();
            var t = this;
            $(".turnBtn").rotate({
                angle: 0,
                duration: 5e3,
                animateTo: parseInt(rotate[math]) + 1800,
                callback: function() {
                    $("#turn").removeClass("next_rotate"), $(".turn").addClass("pre_rotate"), setTimeout(function() {
                        $("#turn").attr("src", e[math].img).addClass("pre_rotate_180"), $("#goPrize").attr("href", e[math].url), $(".turnBtn").hide(), $(".again").show(), t.drawListPush(e[math])
                    }, 250)
                }
            })
        },
        drawListPush: function(e) {
            var t = $.cookie("pptv_drawList");
            t = t ? JSON.parse(t) : [], t.push(e), $.cookie("pptv_drawList", JSON.stringify(t), {
                expires: 7
            }), $(".prizeList").show().children("div").append("<a href='" + e.url + "'><img src='" + e.icon + "'></a>")
        },
        drawClick: function() {
            $(".turnBtn").attr("onclick", ""), this.rotateFunc()
        },
        again: function() {
            $(".turn").removeClass("pre_rotate"), $("#turn").addClass("next_rotate");
            var e = this;
            setTimeout(function() {
                $("#turn").attr("src", "https://newtank-production.oss-cn-shanghai.aliyuncs.com/act/image/aiqiyi/turn.png").removeClass("pre_rotate_180"), $(".again").hide(), setTimeout(function() {
                    $(".turnBtn").show(), e.rotateFunc()
                }, 250)
            }, 250)
        }
    },
    winPrizeLists = {
        createData: {
            areaArr: ["吉林", "辽宁", "江苏", "山东", "北京", "上海", "天津", "重庆", "广西", "澳门", "西藏", "安徽", "河南", "河北", "湖北", "湖南", "江西", "台湾", "陕西", "山西", "四川", "青海", "海南", "广东", "贵州", "浙江", "福建", "甘肃", "云南", "香港", "新疆", "宁夏"],
            phoneArr: ["130", "159", "176", "189", "136", "131", "184", "150", "177", "182", "137", "132", "152", "139", "183", "157", "133", "151", "173", "187", "181", "153", "178", "188", "138", "135", "158", "180"],
            surnameArr: ["赵", "钱", "孙", "李", "周", "吴", "郑", "王", "冯", "陈", "褚", "卫", "蒋", "沈", "韩", "杨", "朱", "秦", "尤", "许", "何", "吕", "施", "张"]
        },
        prize_one: function(e, t) {
            function a() {
                o.scrollTop >= d.offsetHeight ? o.scrollTop = 0 : o.scrollTop++
            }
            for (var i = t ? t : "", n = e ? e : ["获得价值388元VIPKID", "获得100M流量", "获得价值500元话费"], s = 0; s <= 20; s++) {
                var r = Math.floor(Math.random() * this.createData.phoneArr.length),
                    e = n[Math.floor(Math.random() * n.length)],
                    o = i + this.createData.areaArr[Math.floor(Math.random() * this.createData.areaArr.length)],
                    c = parseInt(Math.floor(8999 * Math.random() + 1e3), 10),
                    l = this.createData.phoneArr[r] + "****" + c;
                $("#scrollOne").append("<li class='flex'><div class='area'>" + o + "</div><div class='phone'>" + l + "</div><div class='flex1 textCenter'>" + e + "</div></li>")
            }
            var o = document.getElementById("scrollWrap"),
                d = document.getElementById("scrollOne"),
                u = document.getElementById("scrollTwo");
            u.innerHTML = d.innerHTML, setInterval(a, 50)
        },
        prize_two: function(e, t) {
            for (var a = t ? t : "", i = e ? e : ["获得价值388元VIPKID", "获得100M流量", "获得价值500元话费"], n = [], s = 0; s <= 20; s++) {
                var r = Math.floor(Math.random() * this.createData.phoneArr.length),
                    e = i[Math.floor(Math.random() * i.length)],
                    o = a + this.createData.areaArr[Math.floor(Math.random() * this.createData.areaArr.length)],
                    c = parseInt(Math.floor(8999 * Math.random() + 1e3), 10),
                    l = this.createData.phoneArr[r] + "****" + c,
                    d = {
                        area: o,
                        phone: l,
                        prize: e
                    };
                n.push(d)
            }
            var u = [];
            n.forEach(function(e) {
                var t = '<li><div class="area">' + e.area + '</div><div class="phone">' + e.phone + '</div><div class="prize">' + e.prize + "</div></li>";
                u.push(t)
            }), $("#prizeList").html(u);
            var p = $(".body-box").length > 0,
                m = function() {
                    p ? $("#prizeList li:lt(2)").animate({
                        marginTop: "-32px"
                    }, "narmal", "linear", function() {
                        $("#prizeList li:gt(2)").css("marginTop", "0"), $("#prizeList").append($("#prizeList li:lt(2)"))
                    }) : $("#prizeList li").eq(0).animate({
                        marginTop: "-32px"
                    }, "narmal", "linear", function() {
                        $("#prizeList li:last-child").css("marginTop", "0"), $("#prizeList").append($("#prizeList li").eq(0))
                    })
                };
            setInterval(m, 1500)
        },
        prize_three: function(e, t) {
            for (var a = t ? t : "", i = e ? e : ["成功测算", "成功测算", "成功测算"], n = [], s = 0; s <= 20; s++) {
                var r = Math.floor(Math.random() * this.createData.phoneArr.length),
                    e = i[Math.floor(Math.random() * i.length)],
                    o = a + this.createData.surnameArr[Math.floor(Math.random() * this.createData.surnameArr.length)] + "**",
                    c = parseInt(Math.floor(8999 * Math.random() + 1e3), 10),
                    l = this.createData.phoneArr[r] + "****" + c,
                    d = {
                        surname: o,
                        phone: l,
                        prize: e
                    };
                n.push(d)
            }
            var u = [];
            n.forEach(function(e) {
                var t = '<li><div class="surname">' + e.surname + '</div><div class="phone">' + e.phone + '</div><div class="prize">' + e.prize + "</div></li>";
                u.push(t)
            }), $("#prizeList").html(u);
            var p = $(".body-box").length > 0,
                m = function() {
                    p ? $("#prizeList li:lt(2)").animate({
                        marginTop: "-32px"
                    }, "narmal", "linear", function() {
                        $("#prizeList li:gt(2)").css("marginTop", "0"), $("#prizeList").append($("#prizeList li:lt(2)"))
                    }) : $("#prizeList li").eq(0).animate({
                        marginTop: "-32px"
                    }, "narmal", "linear", function() {
                        $("#prizeList li:last-child").css("marginTop", "0"), $("#prizeList").append($("#prizeList li").eq(0))
                    })
                };
            setInterval(m, 2e3)
        }
    },
    adClick = {
        indexClick: function() {
            $(".ad").each(function(e, t) {
                $(this).click(function() {
                    var e = $(this).attr("ad");
                    e = e + "_" + init.page_ad_code, _hmt.push(["_trackEvent", init.page_ad_code, "click", e])
                })
            })
        },
        successClick: function() {
            addBaiduStatistics(), $(".ad").each(function(e, t) {
                $(this).click(function() {
                    var e = $(this).attr("ad");
                    e = e + "_" + sessionStorage.adCode, _hmt.push(["_trackEvent", sessionStorage.adCode, "click", e])
                })
            })
        }
    },
    initStatisticsSDK = {
        src: {
            xghd: " //static.qianmaiapp.com/iad/eventcollect/squirrel.min.js",
            duiba: "//yun.tuisnake.com/h5-mami/log.js",
            ABtest: "https://sdk.appadhoc.com/ab.plus.js",
            niceTui: "http://nicetui.cn/public/log.js",
            huiliang: "https://h5mob.rayjump.com/staticPub/mobile/common/js/other/statistics.js",
            doumeng: "http://interaction.bayimob.com/static/hdggstatistics.js",
            hudong: "https://static.adhudong.com/display/public/conversion/conversion.min.js"
        },
        insertScript: function(e, t) {
            var a = document.createElement("script"),
                i = document.createElement("script"),
                n = document.getElementsByTagName("head")[0],
                s = init.requestParams.stats_sdk;
            switch (s) {
                case "hudong":
                    a.src = this.src.hudong, n.appendChild(a);
                    break;
                case "doumeng":
                    a.type = "text/javascript", a.src = this.src.doumeng, n.appendChild(a);
                    break;
                case "xghd":
                    a.type = "text/javascript", a.src = this.src.xghd, a.onload = a.onreadystatechange = function() {
                        a.readyState && "loaded" !== a.readyState && "complete" !== a.readyState || (a.onload = a.onreadystatechange = null, _sql = new Squirrel)
                    }, n.appendChild(a);
                    break;
                case "duiba":
                    a.type = "text/javascript", a.src = this.src.duiba, a.id = "send_log", n.appendChild(a);
                    break;
                case "ABtest":
                    a.src = this.src.ABtest, n.appendChild(a), a.onload = a.onreadystatechange = function() {
                        if ((!a.readyState || "loaded" === a.readyState || "complete" === a.readyState) && t && e) {
                            if ("test" === t) var s = "adhoc('init', {appKey:'" + e + "'});";
                            else var s = "adhoc('init',{appKey:'" + e + "',stopUrlParams: true});";
                            try {
                                i.appendChild(document.createTextNode(s))
                            } catch (r) {
                                i.text = s
                            }
                            n.appendChild(i)
                        }
                    };
                    break;
                case "niceTui":
                    a.type = "text/javascript", a.src = this.src.niceTui, a.id = "send_log", n.appendChild(a);
                    break;
                case "huiliang":
                    a.src = this.src.huiliang, n.appendChild(a);
                    break;
                case "gdt":
                    ! function(e, t, a, i, n, s, r) {
                        e.gdt || (n = e.gdt = function() {
                            n.tk ? n.tk.apply(n, arguments) : n.queue.push(arguments)
                        }, n.queue = [], s = t.createElement(a), s.async = !0, s.src = i, r = t.getElementsByTagName(a)[0], r.parentNode.insertBefore(s, r))
                    }(window, document, "script", "//qzonestyle.gtimg.cn/qzone/biz/gdt/dmp/user-action/gdtevent.min.js"), gdt("init", "1107043194"), gdt("track", "PAGE_VIEW");
                    break;
                case "ocpc":
                    var r = "window._agl = [];(function () {_agl.push(['production', '_f7L2XwGXjyszb4d1e2oxPybgD']);(function () {var agl = document.createElement('script');agl.type = 'text/javascript';agl.async = true;agl.src = 'https://fxgate.baidu.com/angelia/fcagl.js';var s = document.getElementsByTagName('script')[0];s.parentNode.insertBefore(agl, s);})();})();";
                    a.appendChild(document.createTextNode(r)), n.appendChild(a);
                    break;
                case "jrtt":
                    ! function(e) {
                        e._tt_config = !0;
                        var t = document.createElement("script");
                        t.type = "text/javascript", t.async = !0, t.src = document.location.protocol + "//s1.pstatp.com/bytecom/resource/track_log/src/toutiao-track-log.js", t.onerror = function() {
                            var e = new XMLHttpRequest,
                                a = window.encodeURIComponent(window.location.href),
                                i = t.src,
                                n = "//ad.toutiao.com/link_monitor/cdn_failed?web_url=" + a + "&js_url=" + i + "&convert_id=1609026910620711";
                            e.open("GET", n, !0), e.send(null)
                        };
                        var a = document.getElementsByTagName("script")[0];
                        a.parentNode.insertBefore(t, a)
                    }(window)
            }
        },
        callbackFn: function(e, t) {
            function a(t) {
                if (void 0 === i || "" === i) e();
                else {
                    var a;
                    a = void 0 === sessionStorage.ylInfo || "" === sessionStorage.ylInfo ? "" : JSON.parse(sessionStorage.ylInfo).policyCode;
                    var n = {
                        adCode: init.requestParams.adCode,
                        sdkCode: init.requestParams.stats_sdk,
                        policyCode: a,
                        sdkStatus: t
                    };
                    xbbService().countSdkLog(n)
                }
            }
            if (t) return void e();
            var i = init.requestParams.stats_sdk;
            switch (i) {
                case "hudong":
                    if (init.requestParams.utm_click) {
                        var n = getCurTime("-", "have"),
                            s = {
                                ad_click: init.requestParams.utm_click,
                                type: 4,
                                timestamp: n,
                                uid: "0",
                                price: "",
                                dev_id: ""
                            };
                        actService().hudongtui_SDK(s).then(function(t) {
                            try {
                                200 === t.code || "200" === t.code ? (a("互动推200成功" + JSON.stringify(t) + "postDate" + JSON.stringify(s)), e && e()) : (a("互动推200失败" + JSON.stringify(t) + "postDate" + JSON.stringify(s)), e && e())
                            } catch (i) {
                                e && e()
                            }
                        }, function(t) {
                            a("互动推失败" + JSON.stringify(t) + "postDate" + JSON.stringify(s)), e && e()
                        })
                    } else e();
                    break;
                case "xghd":
                    _sql.report("transfer", {}, function(t) {
                        sessionStorage.xghd_result = JSON.stringify(t);
                        try {
                            a("小果互动" + JSON.stringify(t)), e()
                        } catch (i) {
                            e()
                        }
                    }, function(t) {
                        sessionStorage.xghd_code = JSON.stringify(t);
                        try {
                            a("小果互动" + JSON.stringify(t)), e()
                        } catch (i) {
                            e()
                        }
                    });
                    break;
                case "duiba":
                    try {
                        a("兑吧"), countLog.init(e)
                    } catch (r) {
                        e()
                    }
                    break;
                case "niceTui":
                    try {
                        a("nice推"), countLog.init(e)
                    } catch (r) {
                        e()
                    }
                    break;
                case "huiliang":
                    try {
                        __uploadStatisticsEvent("transfer"), a("汇量"), e()
                    } catch (r) {
                        e()
                    }
                    break;
                case "ocpc":
                    try {
                        window._agl && window._agl.push(["track", ["success", {
                            t: 3
                        }]]), a("百度ocpc"), e()
                    } catch (r) {
                        e()
                    }
                    break;
                case "jrtt":
                    try {
                        _taq.push({
                            convert_id: "1609026910620711",
                            event_type: "form"
                        }), a("今日头条ocpc"), e()
                    } catch (r) {
                        e()
                    }
                    break;
                case "bxm":
                    if (init.requestParams.bxm_id) {
                        var s = {
                            bxm_id: init.requestParams.bxm_id,
                            status: "1",
                            modeltype: "7"
                        };
                        actService().bxmAD_SDK(s).then(function(t) {
                            try {
                                a("变现猫" + JSON.stringify(t) + "postDate" + JSON.stringify(s)), e && e()
                            } catch (i) {
                                e && e()
                            }
                        }, function() {
                            a("变现猫" + JSON.stringify(res) + "postDate" + JSON.stringify(s)), e && e()
                        })
                    } else e && e();
                    break;
                case "doumeng":
                    var o = "a7f592cef8b130a6967a90617db5681b",
                        c = init.requestParams.dkey,
                        l = "1",
                        d = "1fdf65506afbef77";
                    if (init.requestParams.dkey) {
                        _ai_analysis(["trackEvent", "button", "click", "submit"]);
                        var s = {
                            accountId: o,
                            dkey: c,
                            status: l,
                            encryptCode: md5(o + c + l + d)
                        };
                        actService().doumeng_SDK(s).then(function(t) {
                            try {
                                0 === t.code || "0" === t.code ? (a("豆盟成功" + JSON.stringify(t) + "postDate" + JSON.stringify(s)), e && e()) : (a("豆盟失败" + JSON.stringify(t) + "postDate" + JSON.stringify(s)), e && e())
                            } catch (i) {
                                e && e()
                            }
                        }, function() {
                            a("豆盟失败" + JSON.stringify(res) + "postDate" + JSON.stringify(s)), e && e()
                        })
                    } else e && e();
                    break;
                default:
                    e && e()
            }
        }
    },
    formInfo = {
        getInfo: function() {
            sessionStorage.formMap = JSON.stringify({
                name: $("[name=name]").val(),
                sex: $(".sex .active").text(),
                birth: $("[name=birth]").val(),
                mobile: $("[name=mobile]").val(),
                idCard: $("[name=idCard]").val()
            })
        },
        setInfo: function() {
            var e = sessionStorage.formMap;
            if (e && e.match("{")) {
                e = JSON.parse(sessionStorage.formMap), $("[name=name]").val(e.name), $("[name=mobile]").val(e.mobile), $("[name=mobile]").val() && $(".captcha").show();
                var t = !!e.idCard,
                    a = function(e) {
                        return e.slice(14, 17) % 2 ? "男" : "女"
                    },
                    i = function(e) {
                        return e.substring(6, 10) + "-" + e.substring(10, 12) + "-" + e.substring(12, 14)
                    };
                t ? $("[name=idCard]").length > 0 ? $("[name=idCard]").val(e.idCard) : ("男" === a(e.idCard) ? ($(".male").addClass("active"), $("[name=sex]").eq(0)[0].checked = !0) : ($(".female").addClass("active"), $("[name=sex]").eq(1)[0].checked = !0), $("[name=birth]").val(i(e.idCard))) : ("男" === e.sex ? ($(".male").addClass("active"), $("[name=sex]").eq(0)[0].checked = !0) : ($(".female").addClass("active"), $("[name=sex]").eq(1)[0].checked = !0), $("[name=birth]").val(e.birth))
            }
        }
    };
initZhuge();
var urlRequest = new Object;
urlRequest = getRequestChina(), urlRequest.url = location.href.split("?")[0], urlRequest.all_url = location.href, zhuge.track("页面访问", urlRequest), show_ad(), hideClassHideDiv();
var baiduTimestamp = Math.round((new Date).getTime() / 1e3).toString();
generateUUID();

function weixinShare(e, n, i) {
    $.ajax({
        url: n + "/wx/jsconfig?url=" + encodeURIComponent(window.location.href) + (i ? i : ""),
        type: "GET",
        dataType: "json",
        success: function(e) {
            wx.config({
                appId: e.appId,
                timestamp: e.timestamp,
                nonceStr: e.nonceStr,
                signature: e.signature,
                jsApiList: ["onMenuShareTimeline", "onMenuShareAppMessage", "hideMenuItems"]
            })
        },
        error: null
    }), wx.ready(function() {
        wx.onMenuShareTimeline(e), wx.onMenuShareAppMessage(e)
    })
}