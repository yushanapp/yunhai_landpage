/**
 * Created by Administrator on 2017/8/21.
 */
;
(function(window) {
    var vendors = ['webkit', 'moz', 'ms', 'o'],
        lastTime = 0;
    for (var x = 0; x < vendors.length && !window.requestAnimationFrame; ++x) {
        window.requestAnimationFrame = window[vendors[x] + 'RequestAnimationFrame'];
        window.cancelAnimationFrame =
            window[vendors[x] + 'CancelAnimationFrame'] || window[vendors[x] + 'CancelRequestAnimationFrame'];
    }
    if (!window.requestAnimationFrame) {
        window.requestAnimationFrame = function(callback, element) {
            var currTime = new Date().getTime();
            var timeToCall = Math.max(0, 16 - (currTime - lastTime));
            var id = window.setTimeout(function() {
                    callback(currTime + timeToCall);
                },
                timeToCall);
            lastTime = currTime + timeToCall;
            return id;
        };
    }
    if (!window.cancelAnimationFrame) {
        window.cancelAnimationFrame = function(id) {
            clearTimeout(id);
        };
    }

    function NumUp(elm, opt) {
        this.elm = elm;
        this.num = Number(this.elm.getAttribute('num')) || Number(opt.num);
        this.options = {
            duration: 1500, //间隔
            prefix: "", //前缀 100000000 vs  ￥100000000
            decimal: 0, //小数点100000000 vs 100000000.00
            isfomat: false, //是否格式化,100000000 vs 1,000,000
            isUpAuto: true //动画效果
        }
        var extend = function(target, source) {
            for (var p in source) {
                if (source.hasOwnProperty(p)) {
                    target[p] = source[p];
                }
            }
            return target;
        };
        this.option = extend(this.options, opt);

        this.startTime = new Date().getTime();
        that = this;
        this.fomatNum = function(num) {
            var str = num.toFixed(this.option.decimal);
            var num1, x1, x2, reg;
            arr = str.split(".");
            x1 = arr[0];
            x2 = arr.length > 1 ? '.' + arr[1] : "";
            reg = /(\d+)(\d{3})/;
            if (this.option.isfomat) {
                while (reg.test(x1)) {
                    x1 = x1.replace(reg, '$1' + "," + "$2");
                }
            }
            if (this.option.isfomat) {
                return this.option.prefix + x1 + x2;
            } else {
                return this.option.prefix + str;
            }
        }
        this.numberUp = function() {
            if (that.option.isUpAuto) {
                (function(that) {
                    var change = function() {
                        var p = Math.min(1.0, (new Date().getTime() - that.startTime) / that.option.duration);
                        var nums = that.num * p;
                        that.elm.innerHTML = that.fomatNum(that.num * p);
                        if (p < 1.0) {
                            requestAnimationFrame(function() {
                                change();
                            });
                        } else {
                            cancelAnimationFrame(change);
                        }
                    }
                    requestAnimationFrame(function() {
                        change();
                    });
                })(that)
            } else {
                that.elm.innerHTML = that.fomatNum(that.num);
            }
        }();
    }
    var NumUpUI = (function(elm, options) {
        if (elm.length) {
            for (var i = 0; i < elm.length; i++) {
                new NumUp(elm[i], options);
            }
        } else {
            new NumUp(elm, options);
        }
    });
    if (typeof module !== 'undefined' && typeof exports === 'object' && define.cmd) {
        module.exports = NumUpUI;
    } else if (typeof define === 'function' && define.amd) {
        define(function() {
            return NumUpUI;
        });
    } else {
        window.NumUpUI = NumUpUI;
    }
})(window)