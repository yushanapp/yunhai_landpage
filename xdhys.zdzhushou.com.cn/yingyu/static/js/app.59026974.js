(function(e){function t(t){for(var n,r,o=t[0],c=t[1],u=t[2],d=0,l=[];d<o.length;d++)r=o[d],Object.prototype.hasOwnProperty.call(i,r)&&i[r]&&l.push(i[r][0]),i[r]=0;for(n in c)Object.prototype.hasOwnProperty.call(c,n)&&(e[n]=c[n]);f&&f(t);while(l.length)l.shift()();return a.push.apply(a,u||[]),s()}function s(){for(var e,t=0;t<a.length;t++){for(var s=a[t],n=!0,r=1;r<s.length;r++){var o=s[r];0!==i[o]&&(n=!1)}n&&(a.splice(t--,1),e=c(c.s=s[0]))}return e}var n={},r={app:0},i={app:0},a=[];function o(e){return c.p+"static/js/"+({}[e]||e)+"."+{"chunk-ad9e57dc":"b7d7b5a8","chunk-ae2e7a2e":"8a9577a3","chunk-b719177c":"1a728309"}[e]+".js"}function c(t){if(n[t])return n[t].exports;var s=n[t]={i:t,l:!1,exports:{}};return e[t].call(s.exports,s,s.exports,c),s.l=!0,s.exports}c.e=function(e){var t=[],s={"chunk-ad9e57dc":1,"chunk-ae2e7a2e":1,"chunk-b719177c":1};r[e]?t.push(r[e]):0!==r[e]&&s[e]&&t.push(r[e]=new Promise((function(t,s){for(var n="static/css/"+({}[e]||e)+"."+{"chunk-ad9e57dc":"c901bc74","chunk-ae2e7a2e":"1fc5fc93","chunk-b719177c":"e6f2a8f6"}[e]+".css",i=c.p+n,a=document.getElementsByTagName("link"),o=0;o<a.length;o++){var u=a[o],d=u.getAttribute("data-href")||u.getAttribute("href");if("stylesheet"===u.rel&&(d===n||d===i))return t()}var l=document.getElementsByTagName("style");for(o=0;o<l.length;o++){u=l[o],d=u.getAttribute("data-href");if(d===n||d===i)return t()}var f=document.createElement("link");f.rel="stylesheet",f.type="text/css",f.onload=t,f.onerror=function(t){var n=t&&t.target&&t.target.src||i,a=new Error("Loading CSS chunk "+e+" failed.\n("+n+")");a.code="CSS_CHUNK_LOAD_FAILED",a.request=n,delete r[e],f.parentNode.removeChild(f),s(a)},f.href=i;var m=document.getElementsByTagName("head")[0];m.appendChild(f)})).then((function(){r[e]=0})));var n=i[e];if(0!==n)if(n)t.push(n[2]);else{var a=new Promise((function(t,s){n=i[e]=[t,s]}));t.push(n[2]=a);var u,d=document.createElement("script");d.charset="utf-8",d.timeout=120,c.nc&&d.setAttribute("nonce",c.nc),d.src=o(e);var l=new Error;u=function(t){d.onerror=d.onload=null,clearTimeout(f);var s=i[e];if(0!==s){if(s){var n=t&&("load"===t.type?"missing":t.type),r=t&&t.target&&t.target.src;l.message="Loading chunk "+e+" failed.\n("+n+": "+r+")",l.name="ChunkLoadError",l.type=n,l.request=r,s[1](l)}i[e]=void 0}};var f=setTimeout((function(){u({type:"timeout",target:d})}),12e4);d.onerror=d.onload=u,document.head.appendChild(d)}return Promise.all(t)},c.m=e,c.c=n,c.d=function(e,t,s){c.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:s})},c.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},c.t=function(e,t){if(1&t&&(e=c(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var s=Object.create(null);if(c.r(s),Object.defineProperty(s,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var n in e)c.d(s,n,function(t){return e[t]}.bind(null,n));return s},c.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return c.d(t,"a",t),t},c.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},c.p="",c.oe=function(e){throw console.error(e),e};var u=window["webpackJsonp"]=window["webpackJsonp"]||[],d=u.push.bind(u);u.push=t,u=u.slice();for(var l=0;l<u.length;l++)t(u[l]);var f=d;a.push([0,"chunk-vendors"]),s()})({0:function(e,t,s){e.exports=s("56d7")},"034f":function(e,t,s){"use strict";var n=s("85ec"),r=s.n(n);r.a},"199c":function(e,t){},"23be":function(e,t,s){"use strict";var n=s("199c"),r=s.n(n);t["default"]=r.a},"3d60":function(e,t,s){},"3dfd":function(e,t,s){"use strict";var n=s("568f"),r=s("23be"),i=(s("034f"),s("2877")),a=Object(i["a"])(r["default"],n["a"],n["b"],!1,null,null,null);t["default"]=a.exports},4339:function(e,t,s){"use strict";var n=s("f91c"),r=s.n(n);r.a},"4dfa":function(e,t,s){"use strict";var n=s("a88e"),r=s.n(n);r.a},"568f":function(e,t,s){"use strict";var n=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{attrs:{id:"app"}},[s("keep-alive",{attrs:{include:"home"}},[s("router-view")],1)],1)},r=[];s.d(t,"a",(function(){return n})),s.d(t,"b",(function(){return r}))},"56d7":function(e,t,s){"use strict";s.r(t);s("e260"),s("e6cf"),s("cca6"),s("a79d");var n=s("2b0e"),r=s("3dfd"),i=(s("d3b7"),s("8c4f")),a=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{staticClass:"page"},[s("div",{directives:[{name:"show",rawName:"v-show",value:e.modal,expression:"modal"}],staticClass:"modal",on:{click:function(t){e.modal=!1}}},[s("div",{staticClass:"formbox",on:{click:function(e){e.stopPropagation()}}},[s("div",{staticClass:"header"},[s("div",{staticClass:"title"},[e._v("优质课程安心购")]),s("div",{staticClass:"close",on:{click:function(t){e.modal=!1}}},[s("van-icon",{attrs:{name:"cross"}})],1)]),s("div",{staticClass:"desclist"},e._l(e.descDetailList,(function(t){return s("div",{staticClass:"descdetail"},[s("div",{staticClass:"detailheader"},[s("div",{staticClass:"star"},[s("van-icon",{attrs:{name:"star"}})],1),s("div",{staticClass:"title"},[e._v(e._s(t.title))])]),s("div",{staticClass:"detailbody"},[e._v(e._s(t.description))])])})),0)])]),s("van-popup",{style:{height:"60%"},attrs:{position:"bottom"},model:{value:e.showCourseList,callback:function(t){e.showCourseList=t},expression:"showCourseList"}},[s("div",{staticClass:"pop-course"},[s("div",{staticClass:"pop-course-header"},[s("div",[e._v("课程")]),s("div",{on:{click:function(t){e.showCourseList=!1}}},[e._v("X")])]),s("div",{staticClass:"course-list"},e._l(e.courseList,(function(t,n){return s("div",{key:t.courseId,class:"course-item "+(t.canUse?" grade-enabled":" grade-disabled")+(t.class?t.class:""),on:{click:function(s){return e.courseSelected(t,n)}}},[e._v(e._s(t.courseName))])})),0),s("div",{staticClass:"pop-course-btn",on:{click:e.register}},[e._v("立即报名")])])]),s("div",{ref:"courserange",staticClass:"main"},[e.courseInfo.partnerLogoUrl?s("Logo",{attrs:{logoUrl:e.courseInfo.partnerLogoUrl}}):e._e(),s("div",{staticClass:"box"},[s("img",{staticClass:"boximg",attrs:{src:e.courseInfo.headPic,alt:""}}),s("div",{staticClass:"priceanddate"},[s("div",{staticClass:"price"},[s("div",{staticClass:"timekill"},[s("div",{staticClass:"timekill-txt"},[e._v("限时秒杀")]),s("div",{staticClass:"oldprice"},[e._v(" 原价： "),s("span",{staticClass:"oldprice-price"},[e._v(e._s(e.courseInfo.originPrice))]),e._v(" 元 ")])]),s("div",{staticClass:"pricebox"},[s("div",{staticClass:"newprice"},[s("span",[e._v(e._s(e.courseInfo.trialPrice))]),s("span",{staticClass:"price-unit"},[e._v("元")])])])]),s("div",{directives:[{name:"show",rawName:"v-show",value:e.courseInfo.remindTimeInMs>0,expression:"courseInfo.remindTimeInMs>0"}],staticClass:"date"},[s("div",{staticClass:"toast"},[e._v("距优惠结束还剩：")]),s("div",{staticClass:"daojishi"},[e._v(e._s(e.leftTime))])]),s("div",{directives:[{name:"show",rawName:"v-show",value:e.courseInfo.remindTimeInMs<=0,expression:"courseInfo.remindTimeInMs<=0"}],staticClass:"date"},[s("div",{staticClass:"finish"},[e._v("报名已结束")])])])]),s("div",{staticClass:"detail"},[s("div",{staticClass:"course"},[s("div",{staticClass:"coursename"},[s("div",{directives:[{name:"show",rawName:"v-show",value:e.courseInfo.courseLabel,expression:"courseInfo.courseLabel"}],staticClass:"tag"},[e._v(e._s(e.courseInfo.courseLabel))]),s("div",{staticClass:"names"},[e._v(e._s(e.courseInfo.title))])]),s("div",{staticClass:"coursedesc"},[e._v(e._s(e.courseInfo.detail))])]),s("div",{staticClass:"services",on:{click:function(t){e.modal=!0}}},[s("div",{staticClass:"service"},[s("div",{staticClass:"icons"},[s("van-icon",{attrs:{name:"lock"}})],1),s("div",{staticClass:"word"},[e._v("优质课程安心购")])]),e._l(e.serviceList,(function(t){return s("div",{staticClass:"service"},[s("div",{staticClass:"icons"},[s("van-icon",{attrs:{name:"checked"}})],1),s("div",{staticClass:"word"},[e._v(e._s(t.name))])])})),s("div",{staticClass:"arrow"},[s("van-icon",{attrs:{name:"arrow"}})],1)],2),s("div",{class:e.rangeClass},[e._m(0),s("div",{directives:[{name:"show",rawName:"v-show",value:e.courseInfo.remindTimeInMs>0,expression:"courseInfo.remindTimeInMs>0"}]},[s("div",{staticClass:"rangelist"},e._l(e.gradeList,(function(t,n){return s("div",{class:"grade"+(t.show?" grade-enabled":" grade-disabled")+(t.class?t.class:""),on:{click:function(s){return e.gradeSelectRange(t.id,n)}}},[s("div",{staticClass:"grade-name"},[e._v(e._s(t.name))]),t.show?e._e():s("div",{staticClass:"grade-tag"},[e._v("已报满")])])})),0)])]),s("div",{directives:[{name:"show",rawName:"v-show",value:e.courseInfo.remindTimeInMs<=0,expression:"courseInfo.remindTimeInMs<=0"}],staticClass:"overSign"},[s("div",{staticClass:"range disabled"},[e._v("报名已结束")])]),e._l(e.courseInfo.courseDetailPicList,(function(e){return s("img",{staticClass:"detailimage",attrs:{src:e,alt:""}})}))],2),e.courseInfo.partnerCopyright?s("CopyRight",{attrs:{copyRight:e.courseInfo.partnerCopyright}}):e._e()],1),s("div",{staticClass:"foot"},[s("span",{staticClass:"span1"},[e._v("￥"+e._s(e.courseInfo.trialPrice))]),s("span",{staticClass:"span2"},[e._v("￥"+e._s(e.courseInfo.originPrice))]),s("div",{directives:[{name:"show",rawName:"v-show",value:e.courseInfo.remindTimeInMs>0,expression:"courseInfo.remindTimeInMs>0"}],staticClass:"btn",on:{click:e.register}},[e._v("立即报名")]),s("div",{directives:[{name:"show",rawName:"v-show",value:e.courseInfo.remindTimeInMs<=0,expression:"courseInfo.remindTimeInMs<=0"}],staticClass:"btn disabled"},[e._v("报名已结束")])])],1)},o=[function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{staticClass:"classrange"},[s("div",{staticClass:"rangetitle"},[e._v("点击选择年级")])])}],c=(s("4de4"),s("d81d"),s("0d03"),s("e25e"),s("ac1f"),s("25f0"),s("5319"),s("1276"),s("284c")),u=s("d399"),d=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{staticClass:"logo"},[s("img",{attrs:{src:e.logoUrl,alt:""}})])},l=[],f={props:{logoUrl:String}},m=f,v=(s("cb8f"),s("2877")),h=Object(v["a"])(m,d,l,!1,null,"297e6a0f",null),g=h.exports,p=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{staticClass:"copyright"},[e._v(e._s(e.copyRight))])},w=[],b={props:{copyRight:String}},_=b,C=(s("4339"),Object(v["a"])(_,p,w,!1,null,"10980862",null)),I=C.exports,y=s("7c15"),k=s("ca00"),L={name:"home",components:{Toast:u["a"],Logo:g,CopyRight:I},data:function(){return{signYear:"",rangeClass:"",courseId:"",sysInfo:{},pathObj:{},modal:!1,serviceList:[{name:"名师授课"},{name:"1对1答疑"},{name:"无限回放"}],descDetailList:[{title:"名师授课",description:"出身名校、教学经验丰富的顶尖名师在线传授高分秘诀，优质师资有保障"},{title:"1对1答疑",description:"班主任课后一对一跟踪辅导,即时答疑,全方位帮助孩子吃透每个知识点。"},{title:"无限回放",description:"在线直播课程结束后可无限次回放课程,无需担心错过直播时间表和遗漏课程内容"}],gradeList:[{id:101,name:"小班",show:!0},{id:102,name:"中班",show:!0},{id:103,name:"大班",show:!0},{id:104,name:"学前班",show:!0},{id:105,name:"一年级",show:!0},{id:106,name:"二年级",show:!1},{id:107,name:"三年级",show:!1},{id:108,name:"四年级",show:!1},{id:109,name:"五年级",show:!1},{id:110,name:"六年级",show:!0},{id:111,name:"初一",show:!0},{id:112,name:"初二",show:!0},{id:113,name:"初三",show:!0},{id:114,name:"高一",show:!0},{id:115,name:"高二",show:!0},{id:116,name:"高三",show:!0}],showCourseList:!1,courseList:[],courseInfo:{},st:"",si:""}},methods:{showToast:function(e){Object(u["a"])({message:e,duration:2e3,forbidClick:!0})},gradeSelectRange:function(e,t){if(this.gradeList[t].show){var s=Object(c["a"])(this.gradeList),n=[];s.map((function(t){return t.id==e&&t.show?(t.class=" active",n=t.courseList):t.class="",t})),this.gradeList=s,1!=n.length?(this.courseList=n,this.showCourseList=!0):this.courseId=n[0].courseId}},courseSelected:function(e,t){var s=this;if(this.courseList[t].canUse){var n=Object(c["a"])(this.courseList);n.map((function(t){return t.courseId==e.courseId&&t.canUse?(t.class=" active",s.courseId=e.courseId):t.class="",t})),this.courseList=n}},register:function(){var e=this.sysInfo;e["courseid"]=this.courseId,e["activePoint"]="signup",e["userPhone"]="",Object(y["i"])(e).then((function(e){})).catch((function(e){})),localStorage.getItem("refresh")&&localStorage.removeItem("refresh");var t=this;if(""==this.courseId)this.rangeClass="arrow_box",this.st&&clearTimeout(this.st),this.st=setTimeout((function(){t.rangeClass=""}),1e4),this.$nextTick((function(){setTimeout((function(){t.$refs.courserange.scrollTop=200}),0)}));else{localStorage.removeItem("courseId"),localStorage.setItem("courseId",this.courseId);var s=this.pathObj;s["courseid"]=this.courseId,this.$router.push({name:"pay",query:s})}},parseQuery:function(e){var t={},s=e.split("&");if(1==s.length)return t[s[0].split("=")[0]]=s[0].split("=")[1],t;for(var n in s)t[s[n].split("=")[0]]=s[n].split("=")[1];return t},getQuery:function(){var e=location.href.replace("#/","").split("?");if(e.length>1){var t=e[1];return this.parseQuery(t)}return{c:"dde"}}},beforeCreate:function(){document.title="学得慧"},mounted:function(){var e,t=this;for(var s in localStorage.clear(),e="{}"===JSON.stringify(this.$route.query)?this.getQuery():this.$route.query,this.pathObj=e,e)localStorage.setItem(s,e[s]);var n=k["a"].getSystemInfo();Object.assign(n,e),n["courseid"]=this.courseId,this.sysInfo=n;var r=JSON.stringify(n);Object(y["l"])(r).then((function(e){})).catch((function(e){}));var i=this,a=e;Object(y["a"])(a).then((function(e){if(0==e.status){document.title=e.data.title,e.data.headPic=e.data.headPicList[0],i.courseInfo=e.data;var s=i.gradeList;s.map((function(t){t.show=!1,e.data.courseGradeList.map((function(e){return t.id==e.gradeName&&(t.show=!0,t.courseList=e.courseList),t}))})),i.gradeList=s;var n=!1,r=!1,a=!1,o=!1;e.data.courseGradeList.map((function(e){return e.gradeName<105&&(n=!0),e.gradeName>=105&&e.gradeName<111&&(r=!0),e.gradeName>=111&&e.gradeName<114&&(a=!0),e.gradeName>=114&&(o=!0),e}));var c=i.gradeList;n||(c=c.filter((function(e){return e.id>104}))),r||(c=c.filter((function(e){return e.id<105||e.id>110}))),a||(c=c.filter((function(e){return e.id<111||e.id>113}))),o||(c=c.filter((function(e){return e.id<114}))),t.gradeList=c}else i.showToast("获取数据失败！")})).catch((function(e){i.showToast("获取数据失败！")})),this.si=setInterval((function(){var e=i.courseInfo.remindTimeInMs;e>1e3?i.courseInfo.remindTimeInMs=e-1e3:clearInterval(this.si)}),1e3)},beforeDestroy:function(){clearInterval(this.si)},computed:{leftTime:function(){var e=this.courseInfo.remindTimeInMs,t=parseInt(e/864e5),s=parseInt(e%864e5/36e5),n=parseInt(e%36e5/6e4),r=parseInt(e%6e4/1e3);return t.toString()+"天"+(s<10?"0"+s.toString():s.toString())+":"+(n<10?"0"+n.toString():n.toString())+":"+(r<10?"0"+r.toString():r.toString())}}},x=L,S=(s("4dfa"),Object(v["a"])(x,a,o,!1,null,"29125883",null)),j=S.exports;n["a"].use(i["a"]);var T=[{path:"/",name:"home",component:j,meta:{title:"首页入口"}},{path:"/pay",name:"pay",component:function(){return s.e("chunk-b719177c").then(s.bind(null,"76e0"))},meta:{title:"支付页面"}},{path:"/address",name:"address",component:function(){return s.e("chunk-ad9e57dc").then(s.bind(null,"5eb7"))},meta:{title:"完善地址"}},{path:"/teacherInfo",name:"teacherInfo",component:function(){return s.e("chunk-ae2e7a2e").then(s.bind(null,"2dc1"))},meta:{title:"联系老师"}}],O=new i["a"]({mode:"hash",base:"/webconvertpage/",routes:T}),P=O,N=s("b970"),M=(s("157a"),s("a7fe")),E=s.n(M),q=s("bc3a"),U=s.n(q);n["a"].use(E.a,U.a),n["a"].use(N["a"]),n["a"].config.productionTip=!1,new n["a"]({router:P,render:function(e){return e(r["default"])}}).$mount("#app")},"7c15":function(e,t,s){"use strict";s("d3b7");var n=s("bc3a"),r=s.n(n);s("4328");function i(e,t){return new Promise((function(s,n){r.a.get(e,{params:t}).then((function(e){s(e.data)})).catch((function(e){n(e.data)}))}))}function a(e,t){var s=arguments.length>2&&void 0!==arguments[2]&&arguments[2];return new Promise((function(n,i){if(s){var a="Bearer "+localStorage.getItem("token"),o={token:a};r()({method:"post",url:e,data:t,headers:o}).then((function(e){n(e.data)})).catch((function(e){i(e.data)}))}else r.a.post(e,t).then((function(e){n(e.data)})).catch((function(e){i(e.data)}))}))}r.a.defaults.baseURL="https://api.xuexiyuansu.com/",r.a.defaults.timeout=1e4,r.a.defaults.headers.post["Content-Type"]="application/json;charset=UTF-8",r.a.interceptors.response.use((function(e){return 200===e.status?Promise.resolve(e):Promise.reject(e)}),(function(e){if(e.response.status)return Promise.reject(e.response)})),s.d(t,"n",(function(){return o})),s.d(t,"g",(function(){return c})),s.d(t,"a",(function(){return u})),s.d(t,"m",(function(){return d})),s.d(t,"b",(function(){return l})),s.d(t,"c",(function(){return f})),s.d(t,"e",(function(){return m})),s.d(t,"f",(function(){return v})),s.d(t,"h",(function(){return h})),s.d(t,"d",(function(){return g})),s.d(t,"i",(function(){return p})),s.d(t,"j",(function(){return w})),s.d(t,"k",(function(){return b})),s.d(t,"l",(function(){return _}));var o=function(e){return a("mobile/customer/SmsLogin/sendMessage",e)},c=function(e){return a("mobile/customer/SmsLogin/Login",e)},u=function(e){return i("mobile/trial/index.json",e)},d=function(e){return i("mobile/trial/courseDetail.json",e)},l=function(e){return a("mobile/customer/generateOrder",e,!0)},f=function(e){return a("mobile/customer/getOrderAmount",e,!0)},m=function(e){return a("mobile/customer/getOrderStatus",e,!0)},v=function(e){return a("/pay/pay/submit",e)},h=function(e){return a("mobile/customer/order/updateAddress",e,!0)},g=function(e){return a("mobile/customer/getMyOrderDetail",e,!0)},p=function(e){return a("/mobile/log/web/active.json",e)},w=function(e){return a("/mobile/log/web/pay.json",e,!0)},b=function(e){return a("/mobile/log/web/reg.json",e)},_=function(e){return a("/mobile/log/web/visit.json",e,!0)}},"85ec":function(e,t,s){},a88e:function(e,t,s){},ca00:function(e,t,s){"use strict";s("0d03"),s("d3b7"),s("ac1f"),s("25f0"),s("466d"),s("5319");var n=function(){var e=navigator.userAgent.toLowerCase(),t=function(t){return t.test(e)},s=function(t){return null===e.match(t)?"":e.match(t).toString().replace(/[^0-9|_.]/g,"").replace(/_/g,".")},n="unknow";t(/windows|win32|win64|wow32|wow64/g)?n="windows":t(/macintosh|macintel/g)?n="macos":t(/x11/g)?n="linux":t(/android|adr/g)?n="android":t(/ios|iphone|ipad|ipod|iwatch/g)&&(n="ios");var r="unknow";"windows"===n?t(/windows nt 5.0|windows 2000/g)?r="2000":t(/windows nt 5.1|windows xp/g)?r="xp":t(/windows nt 5.2|windows 2003/g)?r="2003":t(/windows nt 6.0|windows vista/g)?r="vista":t(/windows nt 6.1|windows 7/g)?r="7":t(/windows nt 6.2|windows 8/g)?r="8":t(/windows nt 6.3|windows 8.1/g)?r="8.1":t(/windows nt 10.0|windows 10/g)&&(r="10"):"macos"===n?r=s(/os x [\d._]+/g):"android"===n?r=s(/android [\d._]+/g):"ios"===n&&(r=s(/os [\d._]+/g));var i="unknow";"windows"===n||"macos"===n||"linux"===n?i="desktop":("android"===n||"ios"===n||t(/mobile/g))&&(i="mobile");var a="unknow",o="unknow";t(/applewebkit/g)?(a="webkit",t(/edge/g)?o="edge":t(/opr/g)?o="opera":t(/chrome/g)?o="chrome":t(/safari/g)&&(o="safari")):t(/gecko/g)&&t(/firefox/g)?(a="gecko",o="firefox"):t(/presto/g)?(a="presto",o="opera"):t(/trident|compatible|msie/g)&&(a="trident",o="iexplore");var c="unknow";"webkit"===a?c=s(/applewebkit\/[\d._]+/g):"gecko"===a?c=s(/gecko\/[\d._]+/g):"presto"===a?c=s(/presto\/[\d._]+/g):"trident"===a&&(c=s(/trident\/[\d._]+/g));var u="unknow";"chrome"===o?u=s(/chrome\/[\d._]+/g):"safari"===o?u=s(/version\/[\d._]+/g):"firefox"===o?u=s(/firefox\/[\d._]+/g):"opera"===o?u=s(/opr\/[\d._]+/g):"iexplore"===o?u=s(/(msie [\d._]+)|(rv:[\d._]+)/g):"edge"===o&&(u=s(/edge\/[\d._]+/g));var d="none",l="unknow";t(/micromessenger/g)?(d="wechat",l=s(/micromessenger\/[\d._]+/g)):t(/qqbrowser/g)?(d="qq",l=s(/qqbrowser\/[\d._]+/g)):t(/ucbrowser/g)?(d="uc",l=s(/ucbrowser\/[\d._]+/g)):t(/qihu 360se/g)?d="360":t(/2345explorer/g)?(d="2345",l=s(/2345explorer\/[\d._]+/g)):t(/metasr/g)?d="sougou":t(/lbbrowser/g)?d="liebao":t(/maxthon/g)&&(d="maxthon",l=s(/maxthon\/[\d._]+/g));var f=window.screen.width||window.screen.availHeight||document.body.clientHeight,m=window.screen.height||window.screen.availWidth||document.body.clientWidth,v={screenHight:f,screenWidth:m};return Object.assign({ua:e,engine:a,engineVs:c,platform:i,supporter:o,supporterVs:u,system:n,systemVs:r,screen:v},"none"===d?{}:{shell:d,shellVs:l})};t["a"]={getSystemInfo:n}},cb8f:function(e,t,s){"use strict";var n=s("3d60"),r=s.n(n);r.a},f91c:function(e,t,s){}});