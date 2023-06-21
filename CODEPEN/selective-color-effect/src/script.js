"use strict";

!function() {
    function e() {
        const e = window.getComputedStyle(t, null);
        let n = parseFloat(e.width), i = -180 * (parseFloat(e.height) / 2 / n / 2) / 2;
        i *= 2, window.innerWidth > window.innerHeight && (i = -i - 90), document.documentElement.style.setProperty("--val", i + "deg");
    }
    var t = document.querySelector("h1");
    e(), window.addEventListener("resize", function() {
        e();
    });
}(), function() {
    function e(e, t, n) {
        const i = Math.max(e, t, n), o = i - Math.min(e, t, n), d = i ? o / i : 0, r = [ e, t, n, e, t ], a = r.indexOf(i);
        return d ? ((r[a + 1] - r[a + 2]) / o + 2 * a + 6) % 6 * 60 : 0;
    }
    const t = document.querySelectorAll("section img"), n = document.querySelectorAll("section canvas");
    for (let i = 0; i < t.length; i += 1) {
        const o = n[i].getContext("2d");
        let d = t[i].src;
        const r = new Image();
        r.crossOrigin = "anonymous", r.index = i;
        const a = () => {
            var t, i, d;
            n[r.index].width = r.width, n[r.index].height = r.height, o.drawImage(r, 0, 0, r.width, r.height), 
            i = (t = o.getImageData(0, 0, r.width, r.height)).data;
            let a = 350, c = 360, l = 0, h = 20;
            0 == r.index && (a = 250, c = 300, l = 0, h = 0), 1 == r.index && (a = -1, c = 55, 
            l = 0, h = 0), 2 == r.index && (a = 200, c = 361, l = 0, h = 0), 3 == r.index && (a = 340, 
            c = 361, l = -1, h = 5);
            let s = 0, w = 1, u = 0, g = 1;
            0 == r.index && (u = .2, g = .5), 2 == r.index && (s = .43, w = .625), 3 == r.index && (s = .53, 
            w = .63, u = .43, g = .55);
            let m = !1;
            0 == s && 1 == w || (m = !0);
            let x = !1;
            0 == u && 1 == g || (x = !0);
            let f = i.length;
            for (d = 0; d < f; d += 4) {
                if (m && (d < f * s || d > f * w)) {
                    i[d + 3] = 0;
                    continue;
                }
                if (x && (d % (4 * r.width) < 4 * r.width * u || d % (4 * r.width) > 4 * r.width * g)) {
                    i[d + 3] = 0;
                    continue;
                }
                let t = e(i[d], i[d + 1], i[d + 2]);
                t > a && t < c || t > l && t < h || (i[d + 3] = 0);
            }
            o.putImageData(t, 0, 0);
        };
        r.onerror = (() => {}), r.onload = (() => {
            a();
        }), d = new URL(d);
        let c = 640, l = (d = new URL(d)).searchParams;
        l.get("w") && l.get("w") == c ? l.set("w", c - 40) : l.set("w", c), r.src = d;
    }
}();