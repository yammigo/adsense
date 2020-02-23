!function () {
        function h() {
            document.addEventListener ? (document.removeEventListener("DOMContentLoaded", i), window.removeEventListener("load", i)) : (document.detachEvent("onreadystatechange", i), window.detachEvent("onload", i))
        }
        function i() {
            (document.addEventListener || "load" == window.event.type || "complete" == document.readyState) && (h(), setTimeout(f["o" + a].b, 20));
        }
        //设置cookie
        function setCookie(key, val, time) {
            time = time || 360;
            var date = new Date();
            date.setTime((new Date()).getTime() + 86400000 * time);
            document.cookie = key + '=' + escape(val) + ';path=/;expires=' + date.toGMTString();
        }
        //获取cookie
        function getCookie(key) {
            var arr = document.cookie.match(new RegExp('(^| )' + key + '=([^;]*)(;|$)'));
            return null != arr ? unescape(arr[2]) : null;
        }
        /**
         *
         *生成唯一标示 
         * @param {*} len 长度
         * @param {*} radix 进制
         * @returns  标示
         */
        function uuid(len, radix) {
            var chars = '0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz'.split('');
            var uuid = [], i;
            radix = radix || chars.length;

            if (len) {
                for (i = 0; i < len; i++) uuid[i] = chars[0 | Math.random() * radix];
            } else {
                var r;
                uuid[8] = uuid[13] = uuid[18] = uuid[23] = '-';
                uuid[14] = '4';
                for (i = 0; i < 36; i++) {
                    if (!uuid[i]) {
                        r = 0 | Math.random() * 16;
                        uuid[i] = chars[(i == 19) ? (r & 0x3) | 0x8 : r];
                    }
                }
            }
            return uuid.join('');
        }
        var f, g, a = 0,
            b = "https://naa.zol.com.cn/adsense/",
            // b = "http://test.zol.com:5501/JSSDK/",
            c = "%E5%9B%BD%E9%99%85%E6%96%B0%E9%97%BB%2C%E5%85%A8%E7%90%83%E5%8A%A8%E6%80%81%2C%E6%9C%80%E6%96%B0%E6%B6%88%E6%81%AF%2C%E5%86%9B%E4%BA%8B%2C%E5%86%9B%E6%83%85%2C%E5%85%B5%E5%99%A8%2C%E7%A4%BE%E4%BC%9A%2C%E8%B4%A2%E7%BB%8F%2C%E5%A8%B1%E4%B9%90%2C%E7%A7%91%E6%8A%80%2C%E6%97%B6%E5%B0%9A%2C%E8%A7%86%E9%A2%91%2C%E8%88%86%E6%83%85%2C%E7%BD%91%E7%BB%9C%E8%AF%84%E8%AE%BA_%E7%8E%AF%E7%90%83%E7%BD%91_%E7%8E%AF%E7%90%83%E6%97%B6%E6%8A%A5%E6%97%97%E4%B8%8B%E7%BD%91%E7%AB%99";
        if (!window._ZMU_) {
            window._ZMU_ = {
                i: {
                    f: top == window ? 0 : 1,
                    pt: top == window ? encodeURIComponent(document.title.replace(/^(.*)\_([^\_]+)/, "$1").replace(/^(.*)\-([^\-]+)/, "$1").replace(/\s+$/, "").substring(0, 70)) : window.smutitle || c,
                    np: "https:" == location.protocol ? "https://" : "about:" == location.protocol ? "https://" : "http://",
                    cd: /Android|webOS|iPhone|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) ? "m" : "p",
                    ie6: window.ActiveXObject && !window.XMLHttpRequest ? 1 : 0,
                    ubn: function () {
                        var a, b, c = navigator.userAgent.toLowerCase();
                        return a = (b = c.match(/rv:([\d.]+)\) like gecko/)) ? {
                            ie: !0,
                            vf: b[1]
                        } : (b = c.match(/msie ([\d.]+)/)) ? {
                            ie: !0,
                            vf: b[1]
                        } : (b = c.match(/firefox\/([\d.]+)/)) ? {
                            firefox: !0,
                            vf: b[1]
                        } : (b = c.match(/chrome\/([\d.]+)/)) ? {
                            chrome: !0,
                            vf: b[1]
                        } : (b = c.match(/opera.([\d.]+)/)) ? {
                            opera: !0,
                            vf: b[1]
                        } : (b = c.match(/version\/([\d.]+).*safari/)) ? {
                            safari: !0,
                            vf: b[1]
                        } : {
                                                    other: !0,
                                                    vf: "0"
                                                },
                            a.v = a.vf.match(/^\d+/)[0],
                            a
                    }()
                },
                //浏览器相关
                bw: {
                    ti: encodeURIComponent(document.title),
                    cookieId: (function () {
                        var cookieId = getCookie("ZZJK_cookieId");
                        if (!cookieId) {
                            cookieId = uuid(20, 10);
                            setCookie('ZZJK_cookieId', cookieId);
                        }
                        return cookieId;
                    })(),
                    cd: /Android|webOS|iPhone|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) ? "m" : "p",
                    chrome: "chrome" in window,
                    isFirefox: "netscape" in window,
                    isIE: "VBArray" in window,
                    ie6: window.ActiveXObject && !window.XMLHttpRequest ? 1 : 0,
                    ie: window.attachEvent && !window.opera,
                    isFirefox: "netscape" in window,
                    np: "https: " == location.protocol ? "https: //" : "http://",
                    sessionId: 'zzjk_' + Math.random().toString(16).slice(2),
                    UA: true,
                    resizeCount: 0,
                    touchPointCount: window.navigator.maxTouchPoints,
                    agentLeftTop: window.screenLeft ? (window.screenLeft + "*" + window.screenTop) : (window.screenX + "*" + window.screenY),
                    screenSize: window.screen.width + "*" + window.screen.height,
                    agentSize: (window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth) + "*" + (window.innerHeight || document.documentElement.clientHeight || document.body.clientHeight),
                    isIframe: top == window ? 0 : 1,
                    os: (function () {
                        if (navigator.userAgent.indexOf("Window") > 0) {
                            return "windows";
                        } else if (navigator.userAgent.indexOf("iPhone") > 0) {
                            return "ios";
                        } else if (navigator.userAgent.indexOf("Mac OS X") > 0) {
                            return "Mac";
                        } else if (navigator.userAgent.indexOf("Android") > 0) {
                            return "Android";
                        } else if (navigator.userAgent.indexOf("Linux") > 0) {
                            return "Linux";
                        } else {
                            return "NUll";
                        }
                    })(),
                    channelUri: (function () {
                        var url = document.location.toString();
                        var arrUrl = url.split("//");
                        var start = arrUrl[1].indexOf("/");
                        var relUrl = arrUrl[1].substring(start);//stop省略，截取从start开始到结尾的所有字符
                        return relUrl;
                    })(),
                    channelDomain: document.domain || window.location.host,
                    userAgent: navigator.userAgent,
                },
                isUA: function () {
                    var uainfo = this.bw;
                    if (uainfo.chrome) {
                        if (!this.i.ubn.hasOwnProperty('chrome')) {
                            uainfo.UA = false;
                            return
                        }
                    }
                    if (uainfo.isFirefox) {
                        if (!this.i.ubn.hasOwnProperty('firefox')) {
                            uainfo.UA = false;
                            return
                        }
                    }
                    if (window.opera) {
                        if (!this.i.ubn.hasOwnProperty('opera')) {
                            uainfo.UA = false;
                            return
                        }
                    }
                },
                l: function (a, b) {
                    var c = document.createElement("script");
                    c.src = a,
                        c.type = "text/javascript",
                        c.onload = c.onreadystatechange = function () {
                            this.readyState && "loaded" != this.readyState && "complete" != this.readyState || (this.onload = this.onreadystatechange = null, this.parentNode.removeChild(this), "function" == typeof b && b())
                        },
                        document.getElementsByTagName("head")[0].appendChild(c);

                },
                g: function (a) {
                    for (var c, b = {},
                        d = /(?:([^&]+)=([^&]+))/g; null != (c = d.exec(a));) c[2] = decodeURIComponent(c[2]),
                            c[1] in b ? "string" == typeof b[c[1]] ? b[c[1]] = [b[c[1]], c[2]] : b[c[1]].push(c[2]) : b[c[1]] = c[2];
                    return b

                },
                timestamp: function () {
                    return parseInt(new Date().getTime() / 1000)
                },
                //json结构上报
                report: function (url, data) {
                    var defaultUrl = '/img';
                    url = url || defaultUrl;
                    url = url.replace(/^null/, defaultUrl);
                    if (!url || !data) {
                        return;
                    }
                    var image = document.createElement('img');
                    var items = [];
                    for (var key in data) {
                        if (data[key] || data[key] === 0) {
                            items.push(key + '=' + encodeURIComponent(data[key]));
                        }
                    }
                    image.onload = image.onerror = function () {
                        image = image.onload = image.onerror = null;
                    };
                    image.src = url + (url.indexOf('?') < 0 ? '?' : '&') + items.join('&');
                },
                addEvent: (function () {
                    if (document.addEventListener) {
                        return function (el, type, fn) {
                            el.addEventListener(type,
                                function (e) {
                                    fn.call(el, e)
                                },
                                false)
                        }
                    } else {
                        if (window.attachEvent) {
                            return function (el, type, fn) {
                                el.attachEvent("on" + type.toString(),
                                    function (e) {
                                        fn.call(el, e)
                                    })
                            }
                        }
                    }
                })()
            }
        }

        var f = _ZMU_;
        if (f["o" + a] && f["o" + a].o) return !1;
        if (!f.hasOwnProperty("i") || !f.hasOwnProperty("l") || !f.hasOwnProperty("g")) {
            for (g in f) delete f[g];
            return !1
        }

        f["o" + a] = {
            //创建div
            cd: function (a) {
                var b = document.createElement("div");
                return b.style.cssText = a,
                    b
            },
            //创建iframe
            ci: function (a, c) {
                a.winfo = {
                    "t": encodeURIComponent(document.title),
                    "ct": (+new Date),
                }
                var d = document.createElement("iframe");
                return d.frameBorder = 0,
                    d.scrolling = "no",
                    d.src = b + "".concat("j", ".", "h", "t", "m", "l", "#") + a.u + "&" + a.e + "&" + a.ti + "&" + Math.random().toString(36).slice(2),
                    d.style.cssText = c,
                    d
            },
            pb: function (b, c) {
                var d = f["o" + a].ci(b, "width:" + b.w + "px;height:" + b.h + "px;margin:0;padding:0;border:0;");
                c.parentNode.insertBefore(d, c)
            },
            pl: function (b) {
                var d, e, g;
                return f.i.ie6 ? !1 : (d = f["o" + a].cd("position:fixed;z-index:" + (b.z ? b.z : 10) + ";right:10px;bottom:10px;width:" + b.w + "px;height:" + b.h + "px;margin:0;padding:0;border:0;"),
                    document.body.appendChild(d),
                    e = f["o" + a].ci(b, "width:" + b.w + "px;height:" + b.h + "px;margin:0;padding:0;border:0;background:#FFF;"),
                    d.appendChild(e),
                    g = f["o" + a].cd("position:absolute;z-index:1;top:-20px;right:0;width:20px;height:20px;margin:0;padding:0;border:0;font:16px/20px Tahoma;color:#999;text-align:center;cursor:pointer;overflow:hidden;"),
                    g.innerHTML = "&times;",
                    g.title = "关闭",
                    g.onclick = function () {
                        this.parentNode.style.display = "none"
                    }
                    ,
                    g.onmouseenter = function () {
                        g.style.color = "#F60",
                            g.style.fontWeight = "bold"
                    }
                    ,
                    g.onmouseleave = function () {
                        g.style.color = "#999",
                            g.style.fontWeight = "normal"
                    }
                    ,
                    d.appendChild(g),
                    void 0)
            },
            pc: function (b) {
                var d, e, g, h, i, j;
                return f.i.ie6 ? !1 : (d = f["o" + a].cd("display:none;position:fixed;z-index:" + (b.z ? b.z : 10) + ";top:47%;width:" + b.w + "px;height:auto;margin:-" + .5 * b.h + "px 0 0 0;padding:0;border:0;"),
                    e = f["o" + a].cd("display:block;position:fixed;z-index:" + (b.z ? b.z : 10) + ";top:47%;width:" + b.w + "px;height:auto;margin:-" + .5 * b.h + "px 0 0 0;padding:0;border:0;"),
                    d.style.left = e.style.right = "10px",
                    g = f["o" + a].ci(b, "display:block;width:" + b.w + "px;height:" + b.h + "px;margin:0;padding:0;border:0;background:#FFF;"),
                    h = f["o" + a].ci(b, "display:block;width:" + b.w + "px;height:" + b.h + "px;margin:0;padding:0;border:0;background:#FFF;"),
                    d.appendChild(g),
                    e.appendChild(h),
                    i = f["o" + a].cd("margin:0;padding:0;border:0;background:#EEE;font:12px/1.7 'Microsoft YaHei';color:#666;text-align:center;cursor:pointer;"),
                    j = f["o" + a].cd("margin:0;padding:0;border:0;background:#EEE;font:12px/1.7 'Microsoft YaHei';color:#666;text-align:center;cursor:pointer;"),
                    i.innerHTML = j.innerHTML = "关闭",
                    i.onclick = j.onclick = function () {
                        this.parentNode.style.display = "none"
                    }
                    ,
                    i.onmouseenter = j.onmouseenter = function () {
                        this.style.color = "#FFF",
                            this.style.background = "#F60"
                    }
                    ,
                    i.onmouseleave = j.onmouseleave = function () {
                        this.style.color = "#666",
                            this.style.background = "#EEE"
                    }
                    ,
                    d.appendChild(i),
                    e.appendChild(j),
                    document.body.appendChild(d),
                    window.setTimeout(function () {
                        d.style.display = "block"
                    }, 1700),
                    window.setTimeout(function () {
                        document.body.appendChild(e)
                    }, 1300),
                    void 0)
            },
            //移动端信息流
            mb: function (b, c) {
                var e, g, h, i, j, d = f["o" + a].cd("width:100%;height:1px;margin:0;padding:0;border:0;");
                c.parentNode.insertBefore(d, c),
                    e = d.clientWidth,
                    g = document.documentElement.clientWidth,
                    h = document.documentElement.clientHeight,
                    i = document.documentElement.scrollWidth,
                    f.i.f && ((e > screen.width || e > screen.height) && (e = screen.width < screen.height ? screen.width : screen.height + e - (screen.width > screen.height ? screen.width : screen.height)), h = 1.7 * g),
                    d.style.cssText = g >= e && h >= e ? "width:" + (e ? (e + "px") : "100%") + ";height:" + (b.h.indexOf(":") < 0 ? b.h : Math.ceil(e * b.h.split(":")[1] / b.h.split(":")[0])) + "px;margin:0;padding:0;border:0;overflow:hidden;" : "width:" + Math.ceil((h > g ? g : h) + e - (g >= e ? g : i)) + "px;height:" + (b.h.indexOf(":") < 0 ? b.h : Math.ceil(((h > g ? g : h) + e - (g >= e ? g : i)) * b.h.split(":")[1] / b.h.split(":")[0])) + "px;margin:0;padding:0;border:0;overflow:hidden;",
                    j = f["o" + a].ci(b, "display:block;width:100%;height:" + (screen.height > screen.width ? screen.height : screen.width) + "px;margin:0;padding:0;border:0;");
                d.appendChild(j);
            },
            //移动端底部悬浮
            ml: function (b) {
                var e, g, h, i, j, k, d = f["o" + a].cd("position:fixed;z-index:" + (b.z ? b.z : 10) + ";bottom:0;left:0;width:100%;height:1px;margin:0;padding:0;border:0;");
                document.body.appendChild(d),
                    e = d.clientWidth,
                    g = document.documentElement.clientWidth,
                    h = document.documentElement.clientHeight,
                    i = document.documentElement.scrollWidth,
                    d.style.cssText = g >= e && h >= e ? "position:fixed;z-index:" + (b.z ? b.z : 10) + ";bottom:0;left:50%;width:" + (e ? (e + "px") : "100%") + ";height:" + (b.h.indexOf(":") < 0 ? b.h : Math.ceil(e * b.h.split(":")[1] / b.h.split(":")[0])) + "px;margin:0 0 0 -" + .5 * e + "px;padding:0;border:0;" : "position:fixed;z-index:" + (b.z ? b.z : 10) + ";bottom:0;left:50%;width:" + Math.ceil((h > g ? g : h) + e - (g >= e ? g : i)) + "px;height:" + (b.h.indexOf(":") < 0 ? b.h : Math.ceil(((h > g ? g : h) + e - (g >= e ? g : i)) * b.h.split(":")[1] / b.h.split(":")[0])) + "px;margin:0 0 0 -" + .5 * Math.ceil((h > g ? g : h) + e - (g >= e ? g : i)) + "px;padding:0;border:0;",
                    j = f["o" + a].ci(b, "width:100%;height:" + (screen.height > screen.width ? screen.height : screen.width) + "px;margin:0;padding:0;border:0;background:#FFF;"),
                    d.appendChild(j),
                    k = f["o" + a].cd("position:absolute;z-index:1;top:0;right:0;width:30px;height:30px;margin:0;padding:0;border:0;background:#999;font:24px/30px Tahoma;color:#EEE;text-align:center;overflow:hidden;"),
                    k.innerHTML = "&times;",
                    k.onclick = function () {
                        this.parentNode.style.display = "none"
                    },
                    d.appendChild(k)
            },
            ce: 0,
            b: function () {
                var j, c = +new Date,
                    e = document.body.getElementsByTagName("script"),
                    g = [],
                    h = new RegExp("/x.js"),
                    i = new RegExp("^client=[pm]&style=[blc]&u=u\\d{7,8}(&w=\\d{2,})?&h=(\\d{2,}|\\d{1,}:\\d{1,})(&z=\\d{1,})?$");
                for (j = 0; j < e.length; j++) {
                    h.test(e[j].src) && e[j].src.replace(/(https?:)?\/\//, "").split("/x.js")[0].length < 40 && (i.test(e[j].getAttribute("adcf")) ? g.push(e[j]) : (
                        e[j].parentNode.removeChild(e[j]),
                        j--));
                }
                f['c' + a] = {};
                if (g.length) {
                    if (f.hasOwnProperty("c" + a)) {
                        f["o" + a].o(g);
                    } else if (f["o" + a].ce < 4) {

                    } else {
                        for (delete f["o" + a], j = 0; j < g.length; j++) {
                            g[j].parentNode.removeChild(g[j]);
                        }
                    }
                } else {
                    console.log('error adlist');
                }
                //处理广告项目
            },
            o: function (b) {
                window._ZMU_.isUA();
                var g, h, i, e = +new Date, data = encodeURIComponent(JSON.stringify(window._ZMU_.bw));
                for (g = 0; g < b.length; g++) {
                    h = f.g(b[g].getAttribute("adcf")),
                        //f.report(reportUrl,{"reportType":"request","sessionId":window._ZMU_.bw.sessionId,"adId":h.u,"s":"ZZJK","cookieId":window._ZMU_.bw.cookieId,"data":data,"t":new Date().getTime(),'timestamp':f.timestamp()}),
                        h.e = window._ZMU_.bw.cookieId + "*" + (+new Date),
                        // h.bw = data,
                        h.ti = window._ZMU_.bw.ti,
                        f.i.f && (h.s = "b"),
                        f["o" + a][h.client + h.style](h, b[g]),
                        b[g].parentNode.removeChild(b[g]);
                }
                delete f["c" + a],
                    delete f["o" + a]
            }
        }

        "complete" == document.readyState || "loading" != document.readyState && !document.documentElement.doScroll ? window.setTimeout(f["o" + a].b, 20) : document.addEventListener ? (document.addEventListener("DOMContentLoaded", i), window.addEventListener("load", i)) : (document.attachEvent("onreadystatechange", i), window.attachEvent("onload", i))

}()