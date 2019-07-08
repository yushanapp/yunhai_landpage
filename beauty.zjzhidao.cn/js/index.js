/*! homepage - v3.0.4 - 2017-07-06
* http://www.xueba100.com/
* Copyright (c) 2017 zhengwenmao; Licensed  */
!function(a, b, c) {
    "use strict";
    var d = {
        $el: a("#sections"),
        init: function() {
            var c = navigator.userAgent;
            this.page = 1, this.isIphone = c.match(/iPhone/i), this.isAndroid = c.match(/Android/i), this.isIpad = c.match(/iPad/i), this.isWechat = c.match(/MicroMessenger/i), this.isMSIE = "ActiveXObject" in window && "clipboardData" in window, this.isEdge = "MSGestureEvent" in window && "chrome" in window && null == window.chrome.loadTimes, this.isMobile = this.isIphone || this.isAndroid || this.isIpad, this.config = b.globalConfig;
            var d = this.getParam("fr");
            d && (this.config.android.from = d);
            try {
                wa("create", "web.official.index", {
                    from: this.config.android.from
                }), wa("set", "from", this.config.android.from)
            } catch (e) {}
            this.setBottomImg(), this.fullpage(), window.addEventListener ? (a("#sky").remove(), a("#canvasSlider").removeClass("animated slideToRight infinite"), this.webkitStars()) : (a("#starCanvas").remove(), a("#sky").css("display", "block")), this.isEdge && a("#arrow").removeClass("animated infinite fadeInDown")
        },
        webkitStars: function() {
            function b() {
            }
            function c() {
            }
            function d() {
               
            }
            function e() {
                c();
                var a = f.isMobile ? 10 : 30;
                history.pushState ? void 0 != document.msHidden && (a = f.isMobile ? 10 : 30) : a = f.isMobile ? 10 : 30, Object.keys(i).length > a && (k.density = 0);
           
                for (var b in i)
                    i[b].draw();
                requestAnimationFrame(e)
            }
            var f = this,
                i = {},
                j = 0,
                l = function() {
                    return Math.random()
                };
            b(), window.addEventListener("resize", b), d.prototype.draw = function() {
                this.x += this.vx, this.y = g.height - k.height + k.r - Math.sqrt(k.r * k.r - (this.x - g.width / 2) * (this.x - g.width / 2)) - this.offsety, 1 == this.alphaAction ? this.alpha < this.maxAlpha ? this.alpha += .005 : this.alphaAction = -1 : this.alpha > .2 ? this.alpha -= .002 : this.alphaAction = 1, this.x + 2 * this.particleSize >= k.rightWall && (this.x = this.x - k.rightWall), h.strokeStyle = "rgba(255, 255, 255, " + this.alpha + ")", h.beginPath(), h.lineWidth = 2, h.moveTo(this.x, this.y), h.lineTo(this.x + 8, this.y), h.stroke(), h.beginPath(), h.moveTo(this.x + 4, this.y - 4), h.lineTo(this.x + 4, this.y + 4), h.stroke(), h.fill()
            }, window.requestAnimationFrame || (window.requestAnimationFrame = function(a) {
                setTimeout(a, 17)
            }), e()
        },
        initEvents: function() {
            this.initDownloadLink(), this.initLinkEvents(), this.isMobile ? (this.setMobileDownloadBtn(), this.initMobileBtnEvents()) : this.initBtnEvents()
        },
        wa: function(a, b) {
            try {
                wa("send", ["section", this.page, a, b].join("."))
            } catch (c) {}
        },
        initDownloadLink: function() {
          
        },
        initLinkEvents: function() {
            var b = this,
                c = "mousedown";
            this.isMobile && (c = "touchstart"), a("#arrow").on(c, function() {
                b.$el.fullpage.moveSectionDown(), b.wa("click", "arrow")
            })
        },
        initBtnEvents: function() {
            var b = this,
                c = a("#mask"),
                d = c.data("qrcode");
            c.find(".content").prepend('<img src="' + d + '">'), a(".dl-links").on("click", ".btnQr", function(c) {
                var d = a(this),
                    e = d.data("link");
                c.preventDefault(), c.stopPropagation(), a("#mask").removeClass("dn").find('[data-link="' + e + '"]').removeClass("dn"), b.wa("showMask", e)
            }), a("#mask").on("click", ".close", function(c) {
                c.preventDefault(), c.stopPropagation(), a("#mask").addClass("dn"), a(this).closest(".content").find(".mask-download a").addClass("dn"), b.wa("hideMask", "close")
            }).on("mousedown", ".mask-download a", function(c) {
                var d = a(this),
                    e = d.data("link");
                b.wa("click", e)
            })
        },
        initMobileBtnEvents: function() {
            var b = this;
            a(".dl-links").on("touchstart", ".btnQr", function(c) {
                var d = a(this),
                    e = d.data("link");
                b.wa("click", e)
            }), a(document).on("touchmove", function(a) {
                a.preventDefault()
            })
        },
        setMobileDownloadBtn: function() {
            var b = a(".dl-links");
           // this.isAndroid ? b.find(".ios").remove() : b.find(".android").remove()
        },
        setBottomImg: function() {
            var b = this;
            this.$bottom = a("#bottom-wrap");
            var c = "";
            this.isMobile ? (c = b.orientation(), c || (c = a("#bottom-wrap").data("mobile")), a(window).on("orientationchange", function() {
                b.orientation()
            })) : c = this.$bottom.data("pc"), this.$bottom.append('<img id="bottom-image" src="' + c + '" width="100%">')
        },
        orientation: function() {
            if (void 0 != window.orientation) {
                var b = "";
                return 90 == window.orientation || -90 == window.orientation ? (b = a("#bottom-wrap").data("pc"), a("#bottom-image").attr("src", b)) : (b = a("#bottom-wrap").data("mobile"), a("#bottom-image").attr("src", b)), b
            }
        },
        fullpage: function() {
            var b = this;
            this.$el.fullpage({
                navigation: !0,
                navigationTooltips: ["", "", "", "", ""],
                scrollingSpeed: 500,
                touchSensitivity: 1,
                anchors: ["section-1", "section-2", "section-3", "section-4", "section-5"],
                afterRender: function() {
                    setTimeout(function() {
                        b.initEvents()
                    }, 10)
                },
                onLeave: function(c, d, e) {
                    b.page = d;
                    var f = a("#bottom-wrap").find("img");
                    b.isMSIE || (1 != d ? f.hasClass("blur") || f.addClass("blur") : f.removeClass("blur")), 5 == d ? (a("#footer").removeClass("hidden hidden-xl"), a("#arrow").addClass("dn")) : (a("#footer").addClass("hidden"), a("#arrow").removeClass("dn")), 2 != d && 3 != d && 4 != d || a("#footer").addClass("hidden-xl").removeClass("hidden"), b.wa("scroll", e)
                }
            }), a("#sections").css("visibility", "visible")
        },
        getParam: function(a) {
            var b = new RegExp("(\\?|#|&)" + a + "=([^&#]*)(&|#|$)"),
                c = location.href.match(b);
            return c ? c[2] : ""
        }
    };
    d.init()
}(jQuery, window, document);

