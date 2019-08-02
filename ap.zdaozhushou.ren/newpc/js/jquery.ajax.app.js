// JavaScript Document
var navyFun = 
{
    checkSelect : function (fn)
    {
        var f = eval(fn);
        for (i = 0; i < f.length; i++)
        {
            if (f.options[i].selected == true)
            {
                if (f.options[i].value == "" || f.options[i].value == "-1" || f.options[i].value == "0") {
                    return true;
                }
            }
        }
        return false;
    },
    checkRadio : function (fn)
    {
        var f = eval(fn);
        var count = - 1;
        for (i = 0; i < f.length; i++) {
            if (f[i].checked == true) {
                count = i;
                break
            }
        }
        return count;
    },
    checkEmail : function (str)
    {
        var patrn = /^[_a-zA-Z0-9\-]+(\.[_a-zA-Z0-9\-]*)*@[a-zA-Z0-9\-]+([\.][a-zA-Z0-9\-]+)+$/;
        if (!patrn.test(str)) {
            return false
        }
        else {
            return true;
        }
    },
    checkBirthday : function (str)
    {
        var patrn = /^[0-9]{4}-[0-9]{1,2}-[0-9]{1,2}$/;
        if (!patrn.test(str)) {
            return false
        }
        else {
            return true;
        }
    },
    getdatetime : function ()
    {
        var temp;
        temp = new Date().getTime().toString();
        return temp;
    },
    isnumber : function (txt)
    {
        if (txt.search("^-?\\d+$") != 0) {
            return false
        }
        else {
            return true;
        }
    },
    checkLength : function (str, min, max)
    {
        if (str.length > max || str.length < min) {
            return false
        }
        else {
            return true;
        }
    },
    checkNumbLength : function (str, min, max, isall)
    {
        var patrn = eval("/^.*[0-9]{" + min + "," + max + "}.*$/");
        var patrnall = eval("/^[0-9]{" + min + "," + max + "}$/");
        var obj;
        isall ? obj = patrnall : obj = patrn;
        if (obj.exec(str)) {
            return false
        }
        else {
            return true;
        }
    },
    StringToDate : function (DateStr)
    {
        var converted = Date.parse(DateStr);
        var myDate = new Date(converted);
        if (isNaN(myDate)) {
            var arys = DateStr.split('-');
            myDate = new Date(arys[0], --arys[1], arys[2])
        }
        return myDate;
    },
    getCookie : function (sMainName, sSubName)
    {
        var re = new RegExp((sSubName ? sMainName + "=(.*?&)*?" + sSubName + "=(.*?)(&|;)" : sMainName + "=(.*?);"), 
        "i");
        return re.test(unescape(document.cookie)) ? (sSubName ? RegExp["$2"] : RegExp["$1"]) : "";
    },
    setCookie : function (sName, sValue)
    {
        var date = new Date();
        var year = date.getFullYear() + 1;
        var newDate = new Date(year, date.getMonth(), date.getDay());
        document.cookie = sName + "=" + escape(sValue) + "; expires=" + newDate.toGMTString();
    },
    getCookie_n : function (sName)
    {
        var aCookie = document.cookie.split("; ");
        for (var i = 0; i < aCookie.length; i++) {
            var aCrumb = aCookie[i].split("=");
            if (sName == aCrumb[0]) {
                return unescape(aCrumb[1]);
            }
        }
        return "";
    },
    ImageZoom : function (Img, width, height)
    {
        var image = new Image();
        image.src = Img.src;
        if (image.width > width || image.height > height)
        {
            w = image.width / width;
            h = image.height / height;
            if (w > h) {
                Img.width = width;
                Img.height = image.height / w
            }
            else {
                Img.height = height;
                Img.width = image.width / h;
            }
        }
    },
    copyToClipboard : function (txt)
    {
        if (window.clipboardData)
        {
            window.clipboardData.clearData();
            window.clipboardData.setData("Text", txt);
            alert("复制成功！")
        }
        else if (navigator.userAgent.indexOf("Opera") !=- 1) {
            window.location = txt
        }
        else if (window.netscape)
        {
            try {
                netscape.security.PrivilegeManager.enablePrivilege("UniversalXPConnect")
            }
            catch (e) {
                alert("Is error!")
            }
            var clip = Components.classes['@mozilla.org/widget/clipboard;1'].createInstance(Components.interfaces.nsIClipboard);
            if (!clip) {
                return;
            }
            var trans = Components.classes['@mozilla.org/widget/transferable;1'].createInstance(Components.interfaces.nsITransferable);
            if (!trans) {
                return;
            }
            trans.addDataFlavor('text/unicode');
            var str = new Object();
            var len = new Object();
            var str = Components.classes["@mozilla.org/supports-string;1"].createInstance(Components.interfaces.nsISupportsString);
            var copytext = txt;
            str.data = copytext;
            trans.setTransferData("text/unicode", str, copytext.length * 2);
            var clipid = Components.interfaces.nsIClipboard;
            if (!clip) {
                return false;
            }
            clip.setData(trans, null, clipid.kGlobalClipboard);
            alert("复制成功！")
        }
    },
    isChinese : function (str)
    {
        var lst = /[u00-uFF]/;
        return!lst.test(str)
    },
    strCnlen : function (str)
    {
        var strlength = 0;
        for (i = 0; i < str.length; i++)
        {
            if (navyFun.isChinese(str.charAt(i)) == true) {
                strlength = strlength + 2;
            }
            else {
                strlength = strlength + 1;
            }
        }
        return strlength;
    },
    CtoH : function (obj)
    {
        var str = obj.value;
        var result = "";
        for (var i = 0; i < str.length; i++)
        {
            if (str.charCodeAt(i) == 12288) {
                result += String.fromCharCode(str.charCodeAt(i) - 12256);
                continue
            }
            if (str.charCodeAt(i) > 65280 && str.charCodeAt(i) < 65375) {
                result += String.fromCharCode(str.charCodeAt(i) - 65248);
            }
            else {
                result += String.fromCharCode(str.charCodeAt(i));
            }
        }
        obj.value = result;
    }
}
var jQueryApp = 
{
    setMessId : "", parameter : "", userSexId : 1, obj : new Object(), Message : {},
    qiuboDialog : function ()
    {
        $(function ()
        {
            $('#Dialog_qiubo1').dialog(
            {
                autoOpen : false, width : 646, height : 500, resizable : false, modal : true, beforeclose : resetDialgo
            });
            $('#Dialog_qiubo1_form').ajaxForm(
            {
                beforeSubmit : function ()
                {
                    beforeSubmitExec();
                    return check_qiubo();
                },
                success : showResponse, resetForm : true, url : "/save.do"
            })
        })
    },
    rePlyMessDialog : function ()
    {
        $(function ()
        {
            $('#Dialog_priMessage1').dialog(
            {
                autoOpen : false, width : 495, height : 438, resizable : false, modal : true, beforeclose : resetDialgo
            });
            $('#Dialog_priMessage1_form').ajaxForm(
            {
                beforeSubmit : function ()
                {
                    beforeSubmitExec();
                    return check_priMessage1();
                },
                success : showResponse, resetForm : true, url : "/save.do"
            })
        })
    },
    photoPowerDialog : function ()
    {
        $(function ()
        {
            $("#Dialog_photoPower").dialog(
            {
                bgiframe : true, autoOpen : false, width : 330, height : 300, resizable : false, modal : true, 
                beforeclose : resetDialgo
            });
            $('#Dialog_photoPower_form').ajaxForm(
            {
                beforeSubmit : function ()
                {
                    beforeSubmitExec();
                    return check_photoPower();
                },
                success : showResponse, resetForm : true, url : "/save.do"
            })
        })
    },
    getMessageCount : function ()
    {
        $(function ()
        {
            $.getJSON("/g/getMessageCount.do?c=" + jQueryApp.parameter, {
                t : new Date().getMinutes().toString()
            }, setPosition)
        })
    },
    getUserCount : function ()
    {
        $(function ()
        {
            $.getJSON("/g/getUserCount.do?c=" + jQueryApp.parameter, {
                t : new Date().getMinutes().toString()
            }, setPosition_userc)
        })
    },
    getLoginDialog : function ()
    {
        $(function ()
        {
            $('#Dialog_LoginWindow').dialog({
                autoOpen : false, width : 460, height : 330, resizable : false, modal : true
            });
            $('#Dialog_LoginWindow_form').ajaxForm(
            {
                beforeSubmit : function ()
                {
                    beforeSubmitExec();
                    return check_LoginWindow();
                },
                success : flashShowResponse, resetForm : true, url : "/ReglSave.do"
            })
        })
    },
    getAddFriendDialog : function ()
    {
        $(function ()
        {
            $('#Dialog_AddFriend').dialog(
            {
                autoOpen : false, width : 470, height : 290, resizable : false, modal : true, beforeclose : resetDialgo
            });
            $('#Dialog_AddFriend_form').ajaxForm(
            {
                beforeSubmit : function ()
                {
                    beforeSubmitExec()
                },
                success : showResponse, resetForm : true, url : "/save.do"
            })
        })
    },
    getPhotoAskDialog : function ()
    {
        $(function ()
        {
            $('#Dialog_PhotoAsk').dialog(
            {
                autoOpen : false, width : 330, height : 300, resizable : false, modal : true, beforeclose : resetDialgo
            });
            $('#Dialog_PhotoAsk_form').ajaxForm(
            {
                beforeSubmit : function ()
                {
                    beforeSubmitExec()
                },
                success : showResponsePhoto, resetForm : true, url : "/g/getCheckPhotoQuestion.do"
            })
        })
    },
    getReturnMessageDialog : function ()
    {
        $(function ()
        {
            $('#Dialog_returnMessage').dialog(
            {
                autoOpen : false, width : 470, height : 250, resizable : false, modal : true, beforeclose : resetDialgo, 
                show : 'slide'
            })
        })
    },
    getUserInfocontact : function ()
    {
        $(function ()
        {
            $('#Dialog_UserInfocontact').dialog({
                autoOpen : false, width : 480, height : 330, resizable : false, modal : true
            })
        })
    },
    UserComplaint : function ()
    {
        $(function ()
        {
            $('#Dialog_UserComplaint').dialog(
            {
                autoOpen : false, width : 580, height : 530, resizable : false, modal : true, beforeclose : resetDialgo
            });
            $('#Dialog_UserComplaint_form').ajaxForm(
            {
                beforeSubmit : function ()
                {
                    beforeSubmitExec();
                    return check_UserComplaint();
                },
                success : showResponse, resetForm : false, url : "/save.do"
            })
        })
    },
    getToVipforWomDialog : function ()
    {
        $(function ()
        {
            $('#Dialog_ToVipForWom').dialog({
                autoOpen : false, width : 470, height : 360, resizable : false, modal : true
            })
        })
    },
    getPayTipDialog : function ()
    {
        $(function ()
        {
            $('#Dialog_PayTip').dialog({
                autoOpen : false, width : 460, height : 300, resizable : false, modal : true
            })
        })
    },
    getFavoriteTipDialog : function ()
    {
        $(function ()
        {
            $('#Dialog_FavoriteTip').dialog({
                autoOpen : true, width : 460, height : 330, resizable : false, modal : true
            })
        })
    }
};
function resetDialgo()
{
    $('#Dialog_' + jQueryApp.setMessId + '_form').html("<img src=\"http://img1.ylike.com/Images/loading02.gif\" border=\"0\">")
}
function beforeSubmitExec()
{
    $('#Dialog_' + jQueryApp.setMessId + '_class').css("display", "block");
    setReturnMessage("<img src='http://img1.ylike.com/Images/loading01.gif' style='vertical-align:middle'>")
}
function setReturnMessage(msg)
{
    $('#return_Dialog_' + jQueryApp.setMessId + '_message').html(msg)
}
function showResponse(xml)
{
    var msgs;
    msgs = xml.split("-@>");
    if (msgs.length > 1) {
        closeDialog();
        jQueryApp.getReturnMessageDialog();
        show_msgWindow(msgs[1], msgs[0])
    }
    else
    {
        $('#return_Dialog_' + jQueryApp.setMessId + '_message').html("<span class='ui-icon ui-icon-info' style='float: left; margin-right: .3em;'></span><strong>" + xml + "</strong>");
        $('#submit_Dialog_' + jQueryApp.setMessId).attr("disabled", "false");
        setTimeoutClose()
    }
    return false
}
function showResponsenowindow(xml)
{
    var msgs;
    msgs = xml.split("-@>");
    if (msgs.length > 1) {
        jQueryApp.getReturnMessageDialog();
        show_msgWindow(msgs[1], msgs[0])
    }
}
function flashShowResponse(xml)
{
    showResponse(xml);
    jQuery.getScript("/c/js.do?action=chkuserlogin&dns=./");
    jQueryApp.parameter = ":ALL:";
    jQueryApp.getMessageCount();
    return false
}
function showResponsePhoto(xml)
{
    if (xml ==- 1)
    {
        $('#return_Dialog_' + jQueryApp.setMessId + '_message').html("<span class='ui-icon ui-icon-info' style='float: left; margin-right: .3em;'></span><strong>答案错误！</strong>")
    }
    else if (xml == 1) {
        setTimeoutClose();
        viewLargerImage(jQueryApp.obj)
    }
    return false
}
function show_qiubo_1(name, sid, mid)
{
    $.post("/g/getCheckVal.do", function (msn)
    {
        if (navyFun.isnumber(msn)) {
            show_qiubo_1_ed(name, sid, mid)
        }
        else {
            loginWindow()
        }
    })
}
function show_priMessage_1(name, sid, mid)
{
    $.post("/g/getCheckVal.do", function (msn)
    {
        if (navyFun.isnumber(msn)) {
            show_priMessage_1_ed(name, sid, mid)
        }
        else {
            loginWindow()
        }
    })
}
function show_priMessage_test(name, sid, mid)
{
    $("#DialogMains_foot").load("/g/getDialogMains.do", {
        cla1 : "PRIMESSAGEWIN", cla2 : 1
    },
    function ()
    {
        show_priMessage_1_ed(name, sid, mid)
    })
}
function show_Dialog(optname, name, sid, mid, other)
{
    $.post("/g/getCheckVal.do", function (msn)
    {
        if (navyFun.isnumber(msn)) {
            eval(optname + "_ed(name,sid,mid,other)")
        }
        else {
            loginWindow()
        }
    })
}
function show_qiubo_1_ed(name, sid, mid, other)
{
    jQueryApp.setMessId = "qiubo1";
    $('#Dialog_qiubo1').dialog('open');
    $("#Dialog_qiubo1_form").load("/c/Dialogs/QiuBo.do?rn=" + Math.random(), function ()
    {
        $("#Dialog_qiubo1_SendUserId_setid").val(sid);
        $("#Dialog_qiubo1_claid_setid").val(2);
        $("#Dialog_qiubo1_PartentId_setid").val(mid);
        $('#Dialog_qiubo1').dialog('option', 'title', '<img src="http://img1.ylike.com/Images/div/div_qb_top_xin.gif" width="17" height="17"/>&nbsp;给【' + name + '】发送骚扰秋波');
        $('#Dialog_qiubo1_class').css("display", "none");
        $('#submit_Dialog_qiubo1').removeAttr("disabled")
    });
    return false
}
function show_priMessage_1_ed(name, sid, mid, other)
{
    jQueryApp.setMessId = "priMessage1";
    $("#Dialog_priMessage1").dialog('open');
    $("#Dialog_priMessage1_form").load("/c/Dialogs/PriMessage.do?rn=" + Math.random(), function ()
    {
        $("#Dialog_priMessage1_SendUserId_setid").val(sid);
        $("#Dialog_priMessage1_claid_setid").val(1);
        $("#Dialog_priMessage1_PartentId_setid").val(mid);
        if (mid == 0)
        {
            $('#Dialog_priMessage1').dialog('option', 'title', '给【' + name + '】发送站内短信');
            $('#Dialog_priMessage1').dialog('option', 'height', '345')
        }
        else
        {
            $('#Dialog_priMessage1').dialog('option', 'title', '回复【' + name + '】的短信');
            $("#Dialog_priMessage1_message_userlitimage_id").attr({
                src : $("#message_userlitimage_" + mid).attr("src")
            });
            $("#Dialog_priMessage1_message_usernameAndlink_id").html($("#message_usernameAndlink_" + mid).html());
            $("#Dialog_priMessage1_message_userbasemess_id").html($("#message_userbasemess_" + mid).html());
            $("#Dialog_priMessage1_message_userComent_id").html($("#message_userComent_" + mid).html());
            $("#Dialog_priMessage1_message_usersendtime_id").html($("#message_usersendtime_" + mid).html())
        }
        $('#Dialog_priMessage1_class').css("display", "none");
        $('#submit_Dialog_priMessage1').removeAttr("disabled")
    });
    return false
}
function show_priMessage_2_ed(name, sid, mid, other)
{
    jQueryApp.setMessId = "priMessage1";
    $("#Dialog_priMessage1").dialog('open');
    $("#Dialog_priMessage1_form").load("/c/Dialogs/PriMessage2.do?rn=" + Math.random(), function ()
    {
        $("#Dialog_priMessage1_SendUserId_setid").val(sid);
        $("#Dialog_priMessage1_claid_setid").val(1);
        $("#Dialog_priMessage1_PartentId_setid").val(mid);
        if (mid == 0)
        {
            $('#Dialog_priMessage1').dialog('option', 'title', '给【' + name + '】发送站内短信');
            $('#Dialog_priMessage1').dialog('option', 'height', '345')
        }
        else
        {
            $('#Dialog_priMessage1').dialog('option', 'title', '回复【' + name + '】的短信');
            $("#Dialog_priMessage1_message_userlitimage_id").attr({
                src : $("#message_userlitimage_" + mid).attr("src")
            });
            $("#Dialog_priMessage1_message_usernameAndlink_id").html($("#message_usernameAndlink_" + mid).html());
            $("#Dialog_priMessage1_message_userbasemess_id").html($("#message_userbasemess_" + mid).html());
            $("#Dialog_priMessage1_message_userComent_id").html($("#message_userComent_" + mid).html());
            $("#Dialog_priMessage1_message_usersendtime_id").html($("#message_usersendtime_" + mid).html())
        }
        $('#Dialog_priMessage1_class').css("display", "none");
        $('#submit_Dialog_priMessage1').removeAttr("disabled")
    });
    return false
}
function show_addfriend_1_ed(name, sid, mid, other)
{
    jQueryApp.setMessId = "AddFriend";
    $("#Dialog_AddFriend").dialog('open');
    $("#Dialog_AddFriend_form").load("/c/Dialogs/AddFriend.do?cla=" + other + "&rn=" + Math.random(), 
    function ()
    {
        $("#Dialog_addfriend_username_id").html(name);
        $("#Dialog_addFriend_FriendId_setid").val(sid);
        $("#Dialog_addfriend_userlitimage_id").html(getUserImage($("#message_userlitimageP3_" + mid).val(), 
        $("#message_usersex_" + mid).val(), "", 50, "", "", "msg2_photo", "", "lit"));
        $('#Dialog_AddFriend_class').css("display", "none");
        $('#submit_Dialog_AddFriend').removeAttr("disabled");
        $("#Dialog_AddFriend_close").click(function ()
        {
            $("#Dialog_AddFriend").dialog('close')
        })
    });
    return false
}
function show_userInfocontact_1_ed(name, sid, mid, other)
{
    $.getJSON("/g/getUserInfoContact.do?uid=" + sid + "&rn=" + Math.random(), function (json)
    {
        jQueryApp.setMessId = "UserInfocontact";
        if (json.mark == "2")
        {
            $("#Dialog_UserInfocontact").dialog('open');
            $("#Dialog_UserInfocontact").load("/c/Dialogs/UserContact.do", function ()
            {
                json.QQ == "" ? $("#UserInfocontact_qq_id_button,#UserInfocontact_qq_id").html(" ") : $("#UserInfocontact_qq_id").html(json.QQ);
                json.Msn == "" ? $("#UserInfocontact_email_id_button,#UserInfocontact_email_id").html(" ") : $("#UserInfocontact_email_id").html(json.Msn)
            })
        }
        else {
            showResponse(json.mark)
        }
    });
    return false
}
function show_UserComplaint_ed(name, sid, mid, other)
{
    jQueryApp.setMessId = "UserComplaint";
    $("#Dialog_UserComplaint").dialog('open');
    $("#Dialog_UserComplaint_form").load("/c/Dialogs/UserComplaint.do?rn=" + Math.random(), function ()
    {
        $("#Dialog_UserComplaint_uided_setid").val(sid);
        $('#Dialog_UserComplaint_class').css("display", "none");
        $('#submit_Dialog_UserComplaint').removeAttr("disabled");
        $("#Dialog_UserComplaint_close").click(function ()
        {
            $("#Dialog_UserComplaint").dialog('close')
        })
    });
    return false
}
function show_photopower(a, b)
{
    jQueryApp.setMessId = "photoPower";
    $('#Dialog_photoPower').dialog('open');
    $("#Dialog_photoPower_form").load("/c/Dialogs/ViewPhoto.do", function ()
    {
        $("#Dialog_IsState_setid").val($("input[name$='IsState_s']", a).val());
        $("#Dialog_question_setid").val($("input[name$='question_s']", a).val());
        $("#Dialog_password_setid").val($("input[name$='password_s']", a).val());
        $("#Dialog_photoPower_id_setid").val(a.attr("alt"));
        $('#Dialog_photoPower_class').css("display", "none");
        $('#submit_Dialog_photoPower').removeAttr("disabled");
        checkQuestionText();
        $("#Dialog_IsState_setid").change(checkQuestionText)
    });
    return false
}
function show_msgWindow(msn, msgClass)
{
    $('#Dialog_returnMessage').dialog('open');
    $("#Dialog_returnMessage_form").load("/c/Dialogs/SystemMsg.do", function ()
    {
        $("#Dialog_returnMessage_content").html(msn);
        "Alert.Right.Error.".indexOf(msgClass) !=- 1 ? $("#setReturnMsgClass_icon").attr("src", "http://img1.ylike.com/Images/div/" + msgClass + ".gif") : "";
        $("#Dialog_returnMessage_close").click(function ()
        {
            $("#Dialog_returnMessage").dialog('close')
        })
    });
    return false
}
function show_PhotoAskWindow($link, id)
{
    jQueryApp.setMessId = "PhotoAsk";
    $('#Dialog_PhotoAsk').dialog('open');
    $("#Dialog_PhotoAsk_form").load("/c/Dialogs/ViewPhotoPower.do", function ()
    {
        jQueryApp.obj = $link;
        $("#Dialog_PhotoAsk_id_setid").val(id);
        $("#Dialog_question_ask_setid").html($link.siblings("input[name='question_s']").val());
        $('#Dialog_PhotoAsk_class').css("display", "none")
    });
    return false
}
function setTimeoutClose()
{
    setTimeout("closeDialog()", 3000)
}
function closeDialog()
{
    if ($('#Dialog_' + jQueryApp.setMessId).dialog("isOpen")) {
        $('#Dialog_' + jQueryApp.setMessId).dialog('close');
    }
}
function Additional_qiubo()
{
    var temp;
    if ($("#isAdditional_setid").attr("checked") == true)
    {
        temp = $("#smileId0").val() + "$@$" + $("#smileId1").val() + "$@$" + $("#smileId2").val();
        $("#Dialog_qiubo1_MessContent_setid").val(temp)
    }
}
function check_priMessage1()
{
    var tempMessContent = $("textarea[id='MessContent_setid']").val();
    if ($("input[type='radio']:checked").length == 0)
    {
        setReturnMessage("<span class='ui-icon ui-icon-info' style='float: left; margin-right: .3em;'></span><strong>请选择您的‘心情’!</strong>");
        return false
    }
    else if (tempMessContent.length <= 2)
    {
        setReturnMessage("<span class='ui-icon ui-icon-info' style='float: left; margin-right: .3em;'></span><strong>填写的内容太少，请真诚聊天!</strong>");
        return false
    }
    return true
}
function check_UserComplaint()
{
    if ($("#PClassId_Complaint").val() == "")
    {
        setReturnMessage("<span class='ui-icon ui-icon-info' style='float: left; margin-right: .3em;'></span><strong>请选择投诉类型！</strong>");
        return false
    }
    else if (navyFun.strCnlen($("#Pcontent_Complaint").val()) < 40)
    {
        setReturnMessage("<span class='ui-icon ui-icon-info' style='float: left; margin-right: .3em;'></span><strong>请详细描述您要反映的问题及情况！</strong>");
        return false
    }
    else if (navyFun.strCnlen($("#btnTest_Complaint").val()) != 4)
    {
        setReturnMessage("<span class='ui-icon ui-icon-info' style='float: left; margin-right: .3em;'></span><strong>验证码有误！</strong>");
        return false
    }
    return true
}
function check_qiubo()
{
    if ($("input[type='radio']:checked").length == 0)
    {
        setReturnMessage("<span class='ui-icon ui-icon-info' style='float: left; margin-right: .3em;'></span><strong>请选择‘魔法表情’!</strong>");
        return false
    }
    if ($("#isAdditional_setid").attr("checked") == true)
    {
        if ($("#smileId0").val() == "")
        {
            setReturnMessage("<span class='ui-icon ui-icon-info' style='float: left; margin-right: .3em;'></span><strong>请选择‘我喜欢’的选项!</strong>");
            return false
        }
        else if ($("#smileId1").val() == "")
        {
            setReturnMessage("<span class='ui-icon ui-icon-info' style='float: left; margin-right: .3em;'></span><strong>请选择‘我用什么吸引你’的选项!</strong>");
            return false
        }
        else if ($("#smileId2").val() == "")
        {
            setReturnMessage("<span class='ui-icon ui-icon-info' style='float: left; margin-right: .3em;'></span><strong>请选择‘我想对你说’的选项!</strong>");
            return false;
        }
    }
    return true
}
function check_LoginWindow()
{
    if (!navyFun.checkLength($("#User_Name_setid").val(), 4, 20))
    {
        setReturnMessage("<span class='ui-icon ui-icon-info' style='float: left; margin-right: .3em;'></span><strong>‘帐号’有误!</strong>");
        return false
    }
    else if (!navyFun.checkLength($("#User_Password_setid").val(), 6, 20))
    {
        setReturnMessage("<span class='ui-icon ui-icon-info' style='float: left; margin-right: .3em;'></span><strong>‘密码’有误!</strong>");
        return false
    }
    return true
}
function check_photoPower()
{
    if ($("#Dialog_IsState_setid").val() == 5)
    {
        if (!navyFun.checkLength($("#Dialog_question_setid").val(), 2, 16))
        {
            setReturnMessage("<span class='ui-icon ui-icon-info' style='float: left; margin-right: .3em;'></span><strong>请填写‘问题’，如‘李白是哪个朝代’!</strong>");
            return false
        }
        else if (!navyFun.checkLength($("#Dialog_password_setid").val(), 1, 16))
        {
            setReturnMessage("<span class='ui-icon ui-icon-info' style='float: left; margin-right: .3em;'></span><strong>请填写‘答案’!</strong>");
            return false;
        }
    }
    return true
}
function checkQuestionText()
{
    if ($("#Dialog_IsState_setid").val() == 5) {
        $("#photopower_setid").attr({
            style : "display: block;"
        })
    }
    else {
        $("#photopower_setid").attr({
            style : "display: none;"
        })
    }
}
function loginWindow()
{
    jQueryApp.setMessId = "LoginWindow";
    $("#Dialog_LoginWindow").dialog('open');
    $("#Dialog_LoginWindow_form").load("/c/Dialogs/UserLogin.do")
}
function updateTips(t)
{
    var tips = $("#validateTips");
    tips.text(t).effect("highlight", {}, 2000)
}
function checkRegexp(o, regexp, n)
{
    if (!(regexp.test(o.val()))) {
        return false
    }
    else {
        return true;
    }
}
function viewLargerImage($link)
{
    var src = $link.attr('alt');
    var title = $link.attr('title');
    var $modal = $('img[src$="/' + src + '"]');
    if ($modal.length) {
        $modal.dialog('open')
    }
    else
    {
        var img = $('<img alt="' + title + '" style="display:none;padding: 8px;" />').attr('src', src).appendTo('body');
        setTimeout(function ()
        {
            img.dialog({
                title : title, width : 600, modal : true, resizable : false
            });
            if (img.attr("width") < 220) {
                img.dialog('option', 'width', 280);
                img.dialog('option', 'height', 200)
            }
            else {
                img.dialog('option', 'width', img.attr("width") + 15)
            }
        }, 1)
    }
}
function setPosition(json)
{
    if (jQueryApp.parameter.indexOf("PM") !=- 1)
    {
        if (json.PriMess > 0)
        {
            $("span[id^='PersonalMessage']").parent("a").removeClass("a02");
            $("span[id^='PersonalMessage']").parent("a").toggleClass("a01")
        }
        else
        {
            $("span[id^='PersonalMessage']").parent("a").removeClass("a01");
            $("span[id^='PersonalMessage']").parent("a").toggleClass("a02");
            $("span[id^='PersonalMessage']").parent("a").removeAttr("href")
        }
        $("span[id^='PersonalMessage']").html(json.PriMess)
    }
    else {
        $("span[id^='PersonalMessage']").html(0)
    }
    if (jQueryApp.parameter.indexOf("QB") !=- 1)
    {
        if (json.QiuBo > 0)
        {
            $("span[id^='QiuBoMessage']").parent("a").removeClass("a02");
            $("span[id^='QiuBoMessage']").parent("a").toggleClass("a01")
        }
        else
        {
            $("span[id^='QiuBoMessage']").parent("a").removeClass("a01");
            $("span[id^='QiuBoMessage']").parent("a").toggleClass("a02");
            $("span[id^='QiuBoMessage']").parent("a").removeAttr("href")
        }
        $("span[id^='QiuBoMessage']").html(json.QiuBo)
    }
    else {
        $("span[id^='QiuBoMessage']").html(0)
    }
    if (jQueryApp.parameter.indexOf("SM") !=- 1)
    {
        if (json.SerMess > 0)
        {
            $("span[id^='ServerMessage']").parent("a").removeClass("a02");
            $("span[id^='ServerMessage']").parent("a").toggleClass("a01")
        }
        else
        {
            $("span[id^='ServerMessage']").parent("a").removeClass("a01");
            $("span[id^='ServerMessage']").parent("a").toggleClass("a02");
            $("span[id^='ServerMessage']").parent("a").removeAttr("href")
        }
        $("span[id^='ServerMessage']").html(json.SerMess)
    }
    else {
        $("span[id^='ServerMessage']").html(0)
    }
    if (jQueryApp.parameter.indexOf("SF") !=- 1)
    {
        if (json.SysFri > 0)
        {
            $("span[id^='SystemFriendMessage']").parent("a").removeClass("a02");
            $("span[id^='SystemFriendMessage']").parent("a").toggleClass("a01")
        }
        else
        {
            $("span[id^='SystemFriendMessage']").parent("a").removeClass("a01");
            $("span[id^='SystemFriendMessage']").parent("a").toggleClass("a02");
            $("span[id^='SystemFriendMessage']").parent("a").removeAttr("href")
        }
        $("span[id^='SystemFriendMessage']").html(json.SysFri)
    }
    else {
        $("span[id^='SystemFriendMessage']").html(0)
    }
    if (jQueryApp.parameter.indexOf("CM") !=- 1)
    {
        if (json.Comment > 0)
        {
            $("span[id^='CommentMessage']").parent("a").removeClass("a02");
            $("span[id^='CommentMessage']").parent("a").toggleClass("a01")
        }
        else
        {
            $("span[id^='CommentMessage']").parent("a").removeClass("a01");
            $("span[id^='CommentMessage']").parent("a").toggleClass("a02");
            $("span[id^='CommentMessage']").parent("a").removeAttr("href")
        }
        $("span[id^='CommentMessage']").html(json.Comment)
    }
    else {
        $("span[id^='CommentMessage']").html(0)
    }
    if (jQueryApp.parameter.indexOf("ALL") !=- 1)
    {
        if (json.AllMess > 0)
        {
            $("span[id^='CountAllMessage']").parent("a").removeClass("a02");
            $("span[id^='CountAllMessage']").parent("a").toggleClass("a01");
            $("span[id^='IconCountAllMessage']").html("<img src='http://img1.ylike.com/Images/uc/uc_bar02_new.gif' border='0'/>")
        }
        else
        {
            $("span[id^='CountAllMessage']").parent("a").removeClass("a01");
            $("span[id^='CountAllMessage']").parent("a").toggleClass("a02");
            $("span[id^='CountAllMessage']").parent("a").removeAttr("href");
            $("span[id^='IconCountAllMessage']").html("<img src='http://img1.ylike.com/Images/uc/uc_bar02.gif' border='0'/>")
        }
        $("span[id^='CountAllMessage']").html(json.AllMess)
    }
    else {
        $("span[id^='CountAllMessage']").html(0)
    }
}
function setPosition_userc(json)
{
    if (jQueryApp.parameter.indexOf("REG") !=- 1) {
        $("b[id='UserRegCount']").html(json.REGUC)
    }
    else {
        $("b[id='UserRegCount']").html(8352467)
    }
    if (jQueryApp.parameter.indexOf("ONLINE") !=- 1) {
        $("b[id='UserOnlineCount']").html(json.ONLINEUC)
    }
    else {
        $("b[id='UserOnlineCount']").html(13876)
    }
}
function getUserImage(path, sex, message, w, imgId, h, classname, isalt, imgCla)
{
    var heights, str;
    str = "";
    if (h == "") {
        heights = (w * 5) / 4
    }
    else {
        heights = h
    }
    if (path != null)
    {
        if (path.lastIndexOf(".") > -1)
        {
            str = '<img id="' + imgId + '" src="' + path + '" width="' + w + '" height="' + heights + '" border="0" alt="' + message + '" class="' + classname + '"/>'
        }
        else if (sex == "男")
        {
            str = '<img id="' + imgId + '" src="http://img1.ylike.com/Images/defaultMale' + imgCla + '.gif" width="' + w + '" height="' + heights + '" border="0" alt="' + message + '" class="' + classname + '"/>'
        }
        else
        {
            str = '<img id="' + imgId + '" src="http://img1.ylike.com/Images/defaultFemale' + imgCla + '.gif" width="' + w + '" height="' + heights + '" border="0" alt="' + message + '" class="' + classname + '"/>';
        }
    }
    else
    {
        if (sex == "男")
        {
            str = '<img id="' + imgId + '" src="http://img1.ylike.com/Images/defaultMale' + imgCla + '.gif" width="' + w + '" height="' + heights + '" border="0" alt="' + message + '" class="' + classname + '"/>'
        }
        else
        {
            str = '<img id="' + imgId + '" src="http://img1.ylike.com/Images/defaultFemale' + imgCla + '.gif" width="' + w + '" height="' + heights + '" border="0" alt="' + message + '" class="' + classname + '"/>';
        }
    }
    return str
}
function getPageList(params, filename, setcontent)
{
    $.get("http://www.ylike.com/g/get" + filename + "List.do", params, function (msn)
    {
        $("#" + setcontent + "_list").html(msn)
    })
}
function getPageListCache(params, filename, setcontent)
{
    $.get("http://www.ylike.com/g/getListForCacheV2.do", params, function (msn)
    {
        $("#" + setcontent + "_list").html(msn)
    })
}
function searchlistOnclick_area()
{
    $("#search_l_top01 a").click(function ()
    {
        param.area = $(this).text().replace("全国", "");
        param.city = "";
        $(".search_l_top01 dd").removeClass();
        $(this).parent("dd").toggleClass("search_l_top_sel");
        setPageList(1)
    })
}
function searchlistOnclick_sex()
{
    $("#search_l_top02 dl:eq(0) a").click(function ()
    {
        param.sex = $(this).attr('alt');
        $(".search_l_top02 dl:eq(0) dd").removeClass();
        $(this).parent("dd").toggleClass("search_l_top_sel");
        setPageList(1)
    })
}
function searchlistOnclick_quanzi()
{
    $("#search_l_top02 dl:eq(1) a").click(function ()
    {
        param.quanzi = $(this).attr('alt');
        $(".search_l_top02 dl:eq(1) dd").removeClass();
        $(this).parent("dd").toggleClass("search_l_top_sel");
        setPageList(1)
    })
}
function searchlistOnclick_havephoto()
{
    $("#search_l_top02 dl:eq(2) a").click(function ()
    {
        param.havephoto = $(this).attr('alt');
        $(".search_l_top02 dl:eq(2) dd").removeClass();
        $(this).parent("dd").toggleClass("search_l_top_sel");
        setPageList(1)
    })
}
function searchlistOnclick_classid()
{
    $("#searchMember_bar li[class!='search_updown'] a").click(function ()
    {
        param.classid = $(this).attr('alt');
        $("#searchMember_bar li[class!='search_updown']").removeClass();
        $("#searchMember_bar li[class!='search_updown']").toggleClass("search_unsel");
        $(this).parent("li").attr("class", "search_sel");
        setPageList(1)
    })
}
function selectArea(id)
{
    $("#search_l_top01 a").each(function ()
    {
        if ($(this).html() == id)
        {
            $(".search_l_top01 dd").removeClass();
            $(this).parent("dd").toggleClass("search_l_top_sel")
        }
    })
}
function selectSex(id)
{
    $("#search_l_top02 dl:eq(0) a").each(function ()
    {
        if ($(this).attr("alt") == id)
        {
            $(".search_l_top02 dl:eq(0) dd").removeClass();
            $(this).parent("dd").toggleClass("search_l_top_sel")
        }
    })
}
function selectQuanzi(id)
{
    $("#search_l_top02 dl:eq(1) a").each(function ()
    {
        if ($(this).attr("alt") == id)
        {
            $(".search_l_top02 dl:eq(1) dd").removeClass();
            $(this).parent("dd").toggleClass("search_l_top_sel")
        }
    })
}
function selectHavephoto(id)
{
    $("#search_l_top02 dl:eq(2) a").each(function ()
    {
        if ($(this).attr("alt") == id)
        {
            $(".search_l_top02 dl:eq(2) dd").removeClass();
            $(this).parent("dd").toggleClass("search_l_top_sel")
        }
    })
}
function recurJson(json)
{
    for (var i in json)
    {
        document.write(i + ":" + json[i] + " <br>");
        if (typeof json[i] == "object") {
            recurJson(json[i])
        }
    }
}
function show_PayTipWindow(cid)
{
    $("#Dialog_PayTip").dialog('open');
    $("#Dialog_PayTip").load("/c/Dialogs/PayTip.do?cid=" + cid)
}
function getContentList(params, filename, setcontent)
{
    $.ajax(
    {
        type : "GET", url : "/g/get" + filename + "List.do", data : params, dataType : "html", cache : false, 
        success : function (recoments)
        {
            $("#" + setcontent + "_list").html(recoments)
        }
    })
}
function AddFavorite(sURL, sTitle)
{
    sURL = encodeURI(sURL);
    try {
        window.external.addFavorite(sURL, sTitle)
    }
    catch (e)
    {
        try {
            window.sidebar.addPanel(sTitle, sURL, "")
        }
        catch (e) {
            alert("加入收藏失败，请使用Ctrl+D进行添加,或手动在浏览器里进行设置.")
        }
    }
}
