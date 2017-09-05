// Numeric

"use strict";
var numeric = typeof exports == "undefined" ? function () {} : exports;
typeof global != "undefined" && (global.numeric = numeric), numeric.version = "1.2.6", numeric.bench = function (t, n) {
        var r, i, s, o;
        typeof n == "undefined" && (n = 15), s = .5, r = new Date;
        for (;;) {
            s *= 2;
            for (o = s; o > 3; o -= 4) t(), t(), t(), t();
            while (o > 0) t(), o--;
            i = new Date;
            if (i - r > n) break
        }
        for (o = s; o > 3; o -= 4) t(), t(), t(), t();
        while (o > 0) t(), o--;
        return i = new Date, 1e3 * (3 * s - 1) / (i - r)
    }, numeric._myIndexOf = function (t) {
        var n = this.length,
            r;
        for (r = 0; r < n; ++r)
            if (this[r] === t) return r;
        return -1
    }, numeric.myIndexOf = Array.prototype.indexOf ? Array.prototype.indexOf : numeric._myIndexOf, numeric.Function = Function, numeric.precision = 4, numeric.largeArray = 50, numeric.prettyPrint = function (t) {
        function n(e) {
            if (e === 0) return "0";
            if (isNaN(e)) return "NaN";
            if (e < 0) return "-" + n(-e);
            if (isFinite(e)) {
                var t = Math.floor(Math.log(e) / Math.log(10)),
                    r = e / Math.pow(10, t),
                    i = r.toPrecision(numeric.precision);
                return parseFloat(i) === 10 && (t++, r = 1, i = r.toPrecision(numeric.precision)), parseFloat(i).toString() + "e" + t.toString()
            }
            return "Infinity"
        }

        function i(e) {
            var t;
            if (typeof e == "undefined") return r.push(Array(numeric.precision + 8).join(" ")), !1;
            if (typeof e == "string") return r.push('"' + e + '"'), !1;
            if (typeof e == "boolean") return r.push(e.toString()), !1;
            if (typeof e == "number") {
                var s = n(e),
                    o = e.toPrecision(numeric.precision),
                    u = parseFloat(e.toString()).toString(),
                    a = [s, o, u, parseFloat(o).toString(), parseFloat(u).toString()];
                for (t = 1; t < a.length; t++) a[t].length < s.length && (s = a[t]);
                return r.push(Array(numeric.precision + 8 - s.length).join(" ") + s), !1
            }
            if (e === null) return r.push("null"), !1;
            if (typeof e == "function") {
                r.push(e.toString());
                var f = !1;
                for (t in e) e.hasOwnProperty(t) && (f ? r.push(",\n") : r.push("\n{"), f = !0, r.push(t), r.push(": \n"), i(e[t]));
                return f && r.push("}\n"), !0
            }
            if (e instanceof Array) {
                if (e.length > numeric.largeArray) return r.push("...Large Array..."), !0;
                var f = !1;
                r.push("[");
                for (t = 0; t < e.length; t++) t > 0 && (r.push(","), f && r.push("\n ")), f = i(e[t]);
                return r.push("]"), !0
            }
            r.push("{");
            var f = !1;
            for (t in e) e.hasOwnProperty(t) && (f && r.push(",\n"), f = !0, r.push(t), r.push(": \n"), i(e[t]));
            return r.push("}"), !0
        }
        var r = [];
        return i(t), r.join("")
    }, numeric.parseDate = function (t) {
        function n(e) {
            if (typeof e == "string") return Date.parse(e.replace(/-/g, "/"));
            if (e instanceof Array) {
                var t = [],
                    r;
                for (r = 0; r < e.length; r++) t[r] = n(e[r]);
                return t
            }
            throw new Error("parseDate: parameter must be arrays of strings")
        }
        return n(t)
    }, numeric.parseFloat = function (t) {
        function n(e) {
            if (typeof e == "string") return parseFloat(e);
            if (e instanceof Array) {
                var t = [],
                    r;
                for (r = 0; r < e.length; r++) t[r] = n(e[r]);
                return t
            }
            throw new Error("parseFloat: parameter must be arrays of strings")
        }
        return n(t)
    }, numeric.parseCSV = function (t) {
        var n = t.split("\n"),
            r, i, s = [],
            o = /(([^'",]*)|('[^']*')|("[^"]*")),/g,
            u = /^\s*(([+-]?[0-9]+(\.[0-9]*)?(e[+-]?[0-9]+)?)|([+-]?[0-9]*(\.[0-9]+)?(e[+-]?[0-9]+)?))\s*$/,
            a = function (e) {
                return e.substr(0, e.length - 1)
            },
            f = 0;
        for (i = 0; i < n.length; i++) {
            var l = (n[i] + ",").match(o),
                c;
            if (l.length > 0) {
                s[f] = [];
                for (r = 0; r < l.length; r++) c = a(l[r]), u.test(c) ? s[f][r] = parseFloat(c) : s[f][r] = c;
                f++
            }
        }
        return s
    }, numeric.toCSV = function (t) {
        var n = numeric.dim(t),
            r, i, s, o, u, a;
        s = n[0], o = n[1], a = [];
        for (r = 0; r < s; r++) {
            u = [];
            for (i = 0; i < s; i++) u[i] = t[r][i].toString();
            a[r] = u.join(", ")
        }
        return a.join("\n") + "\n"
    }, numeric.getURL = function (t) {
        var n = new XMLHttpRequest;
        return n.open("GET", t, !1), n.send(), n
    }, numeric.imageURL = function (t) {
        function n(e) {
            var t = e.length,
                n, r, i, s, o, u, a, f, l = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=",
                c = "";
            for (n = 0; n < t; n += 3) r = e[n], i = e[n + 1], s = e[n + 2], o = r >> 2, u = ((r & 3) << 4) + (i >> 4), a = ((i & 15) << 2) + (s >> 6), f = s & 63, n + 1 >= t ? a = f = 64 : n + 2 >= t && (f = 64), c += l.charAt(o) + l.charAt(u) + l.charAt(a) + l.charAt(f);
            return c
        }

        function r(e, t, n) {
            typeof t == "undefined" && (t = 0), typeof n == "undefined" && (n = e.length);
            var r = [0, 1996959894, 3993919788, 2567524794, 124634137, 1886057615, 3915621685, 2657392035, 249268274, 2044508324, 3772115230, 2547177864, 162941995, 2125561021, 3887607047, 2428444049, 498536548, 1789927666, 4089016648, 2227061214, 450548861, 1843258603, 4107580753, 2211677639, 325883990, 1684777152, 4251122042, 2321926636, 335633487, 1661365465, 4195302755, 2366115317, 997073096, 1281953886, 3579855332, 2724688242, 1006888145, 1258607687, 3524101629, 2768942443, 901097722, 1119000684, 3686517206, 2898065728, 853044451, 1172266101, 3705015759, 2882616665, 651767980, 1373503546, 3369554304, 3218104598, 565507253, 1454621731, 3485111705, 3099436303, 671266974, 1594198024, 3322730930, 2970347812, 795835527, 1483230225, 3244367275, 3060149565, 1994146192, 31158534, 2563907772, 4023717930, 1907459465, 112637215, 2680153253, 3904427059, 2013776290, 251722036, 2517215374, 3775830040, 2137656763, 141376813, 2439277719, 3865271297, 1802195444, 476864866, 2238001368, 4066508878, 1812370925, 453092731, 2181625025, 4111451223, 1706088902, 314042704, 2344532202, 4240017532, 1658658271, 366619977, 2362670323, 4224994405, 1303535960, 984961486, 2747007092, 3569037538, 1256170817, 1037604311, 2765210733, 3554079995, 1131014506, 879679996, 2909243462, 3663771856, 1141124467, 855842277, 2852801631, 3708648649, 1342533948, 654459306, 3188396048, 3373015174, 1466479909, 544179635, 3110523913, 3462522015, 1591671054, 702138776, 2966460450, 3352799412, 1504918807, 783551873, 3082640443, 3233442989, 3988292384, 2596254646, 62317068, 1957810842, 3939845945, 2647816111, 81470997, 1943803523, 3814918930, 2489596804, 225274430, 2053790376, 3826175755, 2466906013, 167816743, 2097651377, 4027552580, 2265490386, 503444072, 1762050814, 4150417245, 2154129355, 426522225, 1852507879, 4275313526, 2312317920, 282753626, 1742555852, 4189708143, 2394877945, 397917763, 1622183637, 3604390888, 2714866558, 953729732, 1340076626, 3518719985, 2797360999, 1068828381, 1219638859, 3624741850, 2936675148, 906185462, 1090812512, 3747672003, 2825379669, 829329135, 1181335161, 3412177804, 3160834842, 628085408, 1382605366, 3423369109, 3138078467, 570562233, 1426400815, 3317316542, 2998733608, 733239954, 1555261956, 3268935591, 3050360625, 752459403, 1541320221, 2607071920, 3965973030, 1969922972, 40735498, 2617837225, 3943577151, 1913087877, 83908371, 2512341634, 3803740692, 2075208622, 213261112, 2463272603, 3855990285, 2094854071, 198958881, 2262029012, 4057260610, 1759359992, 534414190, 2176718541, 4139329115, 1873836001, 414664567, 2282248934, 4279200368, 1711684554, 285281116, 2405801727, 4167216745, 1634467795, 376229701, 2685067896, 3608007406, 1308918612, 956543938, 2808555105, 3495958263, 1231636301, 1047427035, 2932959818, 3654703836, 1088359270, 936918e3, 2847714899, 3736837829, 1202900863, 817233897, 3183342108, 3401237130, 1404277552, 615818150, 3134207493, 3453421203, 1423857449, 601450431, 3009837614, 3294710456, 1567103746, 711928724, 3020668471, 3272380065, 1510334235, 755167117],
                i = -1,
                s = 0,
                o = e.length,
                u;
            for (u = t; u < n; u++) s = (i ^ e[u]) & 255, i = i >>> 8 ^ r[s];
            return i ^ -1
        }
        var i = t[0].length,
            s = t[0][0].length,
            o, u, a, f, l, c, h, p, d, v, m, g = [137, 80, 78, 71, 13, 10, 26, 10, 0, 0, 0, 13, 73, 72, 68, 82, s >> 24 & 255, s >> 16 & 255, s >> 8 & 255, s & 255, i >> 24 & 255, i >> 16 & 255, i >> 8 & 255, i & 255, 8, 2, 0, 0, 0, -1, -2, -3, -4, -5, -6, -7, -8, 73, 68, 65, 84, 8, 29];
        m = r(g, 12, 29), g[29] = m >> 24 & 255, g[30] = m >> 16 & 255, g[31] = m >> 8 & 255, g[32] = m & 255, o = 1, u = 0;
        for (p = 0; p < i; p++) {
            p < i - 1 ? g.push(0) : g.push(1), c = 3 * s + 1 + (p === 0) & 255, h = 3 * s + 1 + (p === 0) >> 8 & 255, g.push(c), g.push(h), g.push(~c & 255), g.push(~h & 255), p === 0 && g.push(0);
            for (d = 0; d < s; d++)
                for (f = 0; f < 3; f++) c = t[f][p][d], c > 255 ? c = 255 : c < 0 ? c = 0 : c = Math.round(c), o = (o + c) % 65521, u = (u + o) % 65521, g.push(c);
            g.push(0)
        }
        return v = (u << 16) + o, g.push(v >> 24 & 255), g.push(v >> 16 & 255), g.push(v >> 8 & 255), g.push(v & 255), l = g.length - 41, g[33] = l >> 24 & 255, g[34] = l >> 16 & 255, g[35] = l >> 8 & 255, g[36] = l & 255, m = r(g, 37), g.push(m >> 24 & 255), g.push(m >> 16 & 255), g.push(m >> 8 & 255), g.push(m & 255), g.push(0), g.push(0), g.push(0), g.push(0), g.push(73), g.push(69), g.push(78), g.push(68), g.push(174), g.push(66), g.push(96), g.push(130), "data:image/png;base64," + n(g)
    }, numeric._dim = function (t) {
        var n = [];
        while (typeof t == "object") n.push(t.length), t = t[0];
        return n
    }, numeric.dim = function (t) {
        var n, r;
        if (typeof t == "object") return n = t[0], typeof n == "object" ? (r = n[0], typeof r == "object" ? numeric._dim(t) : [t.length, n.length]) : [t.length];
        return []
    }, numeric.mapreduce = function (t, n) {
        return Function("x", "accum", "_s", "_k", 'if(typeof accum === "undefined") accum = ' + n + ";\n" + 'if(typeof x === "number") { var xi = x; ' + t + "; return accum; }\n" + 'if(typeof _s === "undefined") _s = numeric.dim(x);\n' + 'if(typeof _k === "undefined") _k = 0;\n' + "var _n = _s[_k];\n" + "var i,xi;\n" + "if(_k < _s.length-1) {\n" + "    for(i=_n-1;i>=0;i--) {\n" + "        accum = arguments.callee(x[i],accum,_s,_k+1);\n" + "    }" + "    return accum;\n" + "}\n" + "for(i=_n-1;i>=1;i-=2) { \n" + "    xi = x[i];\n" + "    " + t + ";\n" + "    xi = x[i-1];\n" + "    " + t + ";\n" + "}\n" + "if(i === 0) {\n" + "    xi = x[i];\n" + "    " + t + "\n" + "}\n" + "return accum;")
    }, numeric.mapreduce2 = function (t, n) {
        return Function("x", "var n = x.length;\nvar i,xi;\n" + n + ";\n" + "for(i=n-1;i!==-1;--i) { \n" + "    xi = x[i];\n" + "    " + t + ";\n" + "}\n" + "return accum;")
    }, numeric.same = function same(e, t) {
        var n, r;
        if (e instanceof Array && t instanceof Array) {
            r = e.length;
            if (r !== t.length) return !1;
            for (n = 0; n < r; n++) {
                if (e[n] === t[n]) continue;
                if (typeof e[n] != "object") return !1;
                if (!same(e[n], t[n])) return !1
            }
            return !0
        }
        return !1
    }, numeric.rep = function (t, n, r) {
        typeof r == "undefined" && (r = 0);
        var i = t[r],
            s = Array(i),
            o;
        if (r === t.length - 1) {
            for (o = i - 2; o >= 0; o -= 2) s[o + 1] = n, s[o] = n;
            return o === -1 && (s[0] = n), s
        }
        for (o = i - 1; o >= 0; o--) s[o] = numeric.rep(t, n, r + 1);
        return s
    }, numeric.dotMMsmall = function (t, n) {
        var r, i, s, o, u, a, f, l, c, h, p, d, v, m;
        o = t.length, u = n.length, a = n[0].length, f = Array(o);
        for (r = o - 1; r >= 0; r--) {
            l = Array(a), c = t[r];
            for (s = a - 1; s >= 0; s--) {
                h = c[u - 1] * n[u - 1][s];
                for (i = u - 2; i >= 1; i -= 2) p = i - 1, h += c[i] * n[i][s] + c[p] * n[p][s];
                i === 0 && (h += c[0] * n[0][s]), l[s] = h
            }
            f[r] = l
        }
        return f
    }, numeric._getCol = function (t, n, r) {
        var i = t.length,
            s;
        for (s = i - 1; s > 0; --s) r[s] = t[s][n], --s, r[s] = t[s][n];
        s === 0 && (r[0] = t[0][n])
    }, numeric.dotMMbig = function (t, n) {
        var r = numeric._getCol,
            i = n.length,
            s = Array(i),
            o = t.length,
            u = n[0].length,
            a = new Array(o),
            f, l = numeric.dotVV,
            c, h, p, d;
        --i, --o;
        for (c = o; c !== -1; --c) a[c] = Array(u);
        --u;
        for (c = u; c !== -1; --c) {
            r(n, c, s);
            for (h = o; h !== -1; --h) d = 0, f = t[h], a[h][c] = l(f, s)
        }
        return a
    }, numeric.dotMV = function (t, n) {
        var r = t.length,
            i = n.length,
            s, o = Array(r),
            u = numeric.dotVV;
        for (s = r - 1; s >= 0; s--) o[s] = u(t[s], n);
        return o
    }, numeric.dotVM = function (t, n) {
        var r, i, s, o, u, a, f, l, c, h, p, d, v, m, g, y, b, w, E;
        o = t.length, u = n[0].length, f = Array(u);
        for (s = u - 1; s >= 0; s--) {
            h = t[o - 1] * n[o - 1][s];
            for (i = o - 2; i >= 1; i -= 2) p = i - 1, h += t[i] * n[i][s] + t[p] * n[p][s];
            i === 0 && (h += t[0] * n[0][s]), f[s] = h
        }
        return f
    }, numeric.dotVV = function (t, n) {
        var r, i = t.length,
            s, o = t[i - 1] * n[i - 1];
        for (r = i - 2; r >= 1; r -= 2) s = r - 1, o += t[r] * n[r] + t[s] * n[s];
        return r === 0 && (o += t[0] * n[0]), o
    }, numeric.dot = function (t, n) {
        var r = numeric.dim;
        switch (r(t).length * 1e3 + r(n).length) {
        case 2002:
            return n.length < 10 ? numeric.dotMMsmall(t, n) : numeric.dotMMbig(t, n);
        case 2001:
            return numeric.dotMV(t, n);
        case 1002:
            return numeric.dotVM(t, n);
        case 1001:
            return numeric.dotVV(t, n);
        case 1e3:
            return numeric.mulVS(t, n);
        case 1:
            return numeric.mulSV(t, n);
        case 0:
            return t * n;
        default:
            throw new Error("numeric.dot only works on vectors and matrices")
        }
    }, numeric.diag = function (t) {
        var n, r, i, s = t.length,
            o = Array(s),
            u;
        for (n = s - 1; n >= 0; n--) {
            u = Array(s), r = n + 2;
            for (i = s - 1; i >= r; i -= 2) u[i] = 0, u[i - 1] = 0;
            i > n && (u[i] = 0), u[n] = t[n];
            for (i = n - 1; i >= 1; i -= 2) u[i] = 0, u[i - 1] = 0;
            i === 0 && (u[0] = 0), o[n] = u
        }
        return o
    }, numeric.getDiag = function (e) {
        var t = Math.min(e.length, e[0].length),
            n, r = Array(t);
        for (n = t - 1; n >= 1; --n) r[n] = e[n][n], --n, r[n] = e[n][n];
        return n === 0 && (r[0] = e[0][0]), r
    }, numeric.identity = function (t) {
        return numeric.diag(numeric.rep([t], 1))
    }, numeric.pointwise = function (t, n, r) {
        typeof r == "undefined" && (r = "");
        var i = [],
            s, o = /\[i\]$/,
            u, a = "",
            f = !1;
        for (s = 0; s < t.length; s++) o.test(t[s]) ? (u = t[s].substring(0, t[s].length - 3), a = u) : u = t[s], u === "ret" && (f = !0), i.push(u);
        return i[t.length] = "_s", i[t.length + 1] = "_k", i[t.length + 2] = 'if(typeof _s === "undefined") _s = numeric.dim(' + a + ");\n" + 'if(typeof _k === "undefined") _k = 0;\n' + "var _n = _s[_k];\n" + "var i" + (f ? "" : ", ret = Array(_n)") + ";\n" + "if(_k < _s.length-1) {\n" + "    for(i=_n-1;i>=0;i--) ret[i] = arguments.callee(" + t.join(",") + ",_s,_k+1);\n" + "    return ret;\n" + "}\n" + r + "\n" + "for(i=_n-1;i!==-1;--i) {\n" + "    " + n + "\n" + "}\n" + "return ret;", Function.apply(null, i)
    }, numeric.pointwise2 = function (t, n, r) {
        typeof r == "undefined" && (r = "");
        var i = [],
            s, o = /\[i\]$/,
            u, a = "",
            f = !1;
        for (s = 0; s < t.length; s++) o.test(t[s]) ? (u = t[s].substring(0, t[s].length - 3), a = u) : u = t[s], u === "ret" && (f = !0), i.push(u);
        return i[t.length] = "var _n = " + a + ".length;\n" + "var i" + (f ? "" : ", ret = Array(_n)") + ";\n" + r + "\n" + "for(i=_n-1;i!==-1;--i) {\n" + n + "\n" + "}\n" + "return ret;", Function.apply(null, i)
    }, numeric._biforeach = function _biforeach(e, t, n, r, i) {
        if (r === n.length - 1) {
            i(e, t);
            return
        }
        var s, o = n[r];
        for (s = o - 1; s >= 0; s--) _biforeach(typeof e == "object" ? e[s] : e, typeof t == "object" ? t[s] : t, n, r + 1, i)
    }, numeric._biforeach2 = function _biforeach2(e, t, n, r, i) {
        if (r === n.length - 1) return i(e, t);
        var s, o = n[r],
            u = Array(o);
        for (s = o - 1; s >= 0; --s) u[s] = _biforeach2(typeof e == "object" ? e[s] : e, typeof t == "object" ? t[s] : t, n, r + 1, i);
        return u
    }, numeric._foreach = function _foreach(e, t, n, r) {
        if (n === t.length - 1) {
            r(e);
            return
        }
        var i, s = t[n];
        for (i = s - 1; i >= 0; i--) _foreach(e[i], t, n + 1, r)
    }, numeric._foreach2 = function _foreach2(e, t, n, r) {
        if (n === t.length - 1) return r(e);
        var i, s = t[n],
            o = Array(s);
        for (i = s - 1; i >= 0; i--) o[i] = _foreach2(e[i], t, n + 1, r);
        return o
    }, numeric.ops2 = {
        add: "+",
        sub: "-",
        mul: "*",
        div: "/",
        mod: "%",
        and: "&&",
        or: "||",
        eq: "===",
        neq: "!==",
        lt: "<",
        gt: ">",
        leq: "<=",
        geq: ">=",
        band: "&",
        bor: "|",
        bxor: "^",
        lshift: "<<",
        rshift: ">>",
        rrshift: ">>>"
    }, numeric.opseq = {
        addeq: "+=",
        subeq: "-=",
        muleq: "*=",
        diveq: "/=",
        modeq: "%=",
        lshifteq: "<<=",
        rshifteq: ">>=",
        rrshifteq: ">>>=",
        bandeq: "&=",
        boreq: "|=",
        bxoreq: "^="
    }, numeric.mathfuns = ["abs", "acos", "asin", "atan", "ceil", "cos", "exp", "floor", "log", "round", "sin", "sqrt", "tan", "isNaN", "isFinite"], numeric.mathfuns2 = ["atan2", "pow", "max", "min"], numeric.ops1 = {
        neg: "-",
        not: "!",
        bnot: "~",
        clone: ""
    }, numeric.mapreducers = {
        any: ["if(xi) return true;", "var accum = false;"],
        all: ["if(!xi) return false;", "var accum = true;"],
        sum: ["accum += xi;", "var accum = 0;"],
        prod: ["accum *= xi;", "var accum = 1;"],
        norm2Squared: ["accum += xi*xi;", "var accum = 0;"],
        norminf: ["accum = max(accum,abs(xi));", "var accum = 0, max = Math.max, abs = Math.abs;"],
        norm1: ["accum += abs(xi)", "var accum = 0, abs = Math.abs;"],
        sup: ["accum = max(accum,xi);", "var accum = -Infinity, max = Math.max;"],
        inf: ["accum = min(accum,xi);", "var accum = Infinity, min = Math.min;"]
    },
    function () {
        var e, t;
        for (e = 0; e < numeric.mathfuns2.length; ++e) t = numeric.mathfuns2[e], numeric.ops2[t] = t;
        for (e in numeric.ops2)
            if (numeric.ops2.hasOwnProperty(e)) {
                t = numeric.ops2[e];
                var n, r, i = "";
                numeric.myIndexOf.call(numeric.mathfuns2, e) !== -1 ? (i = "var " + t + " = Math." + t + ";\n", n = function (e, n, r) {
                    return e + " = " + t + "(" + n + "," + r + ")"
                }, r = function (e, n) {
                    return e + " = " + t + "(" + e + "," + n + ")"
                }) : (n = function (e, n, r) {
                    return e + " = " + n + " " + t + " " + r
                }, numeric.opseq.hasOwnProperty(e + "eq") ? r = function (e, n) {
                    return e + " " + t + "= " + n
                } : r = function (e, n) {
                    return e + " = " + e + " " + t + " " + n
                }), numeric[e + "VV"] = numeric.pointwise2(["x[i]", "y[i]"], n("ret[i]", "x[i]", "y[i]"), i), numeric[e + "SV"] = numeric.pointwise2(["x", "y[i]"], n("ret[i]", "x", "y[i]"), i), numeric[e + "VS"] = numeric.pointwise2(["x[i]", "y"], n("ret[i]", "x[i]", "y"), i), numeric[e] = Function("var n = arguments.length, i, x = arguments[0], y;\nvar VV = numeric." + e + "VV, VS = numeric." + e + "VS, SV = numeric." + e + "SV;\n" + "var dim = numeric.dim;\n" + "for(i=1;i!==n;++i) { \n" + "  y = arguments[i];\n" + '  if(typeof x === "object") {\n' + '      if(typeof y === "object") x = numeric._biforeach2(x,y,dim(x),0,VV);\n' + "      else x = numeric._biforeach2(x,y,dim(x),0,VS);\n" + '  } else if(typeof y === "object") x = numeric._biforeach2(x,y,dim(y),0,SV);\n' + "  else " + r("x", "y") + "\n" + "}\nreturn x;\n"), numeric[t] = numeric[e], numeric[e + "eqV"] = numeric.pointwise2(["ret[i]", "x[i]"], r("ret[i]", "x[i]"), i), numeric[e + "eqS"] = numeric.pointwise2(["ret[i]", "x"], r("ret[i]", "x"), i), numeric[e + "eq"] = Function("var n = arguments.length, i, x = arguments[0], y;\nvar V = numeric." + e + "eqV, S = numeric." + e + "eqS\n" + "var s = numeric.dim(x);\n" + "for(i=1;i!==n;++i) { \n" + "  y = arguments[i];\n" + '  if(typeof y === "object") numeric._biforeach(x,y,s,0,V);\n' + "  else numeric._biforeach(x,y,s,0,S);\n" + "}\nreturn x;\n")
            }
        for (e = 0; e < numeric.mathfuns2.length; ++e) t = numeric.mathfuns2[e], delete numeric.ops2[t];
        for (e = 0; e < numeric.mathfuns.length; ++e) t = numeric.mathfuns[e], numeric.ops1[t] = t;
        for (e in numeric.ops1) numeric.ops1.hasOwnProperty(e) && (i = "", t = numeric.ops1[e], numeric.myIndexOf.call(numeric.mathfuns, e) !== -1 && Math.hasOwnProperty(t) && (i = "var " + t + " = Math." + t + ";\n"), numeric[e + "eqV"] = numeric.pointwise2(["ret[i]"], "ret[i] = " + t + "(ret[i]);", i), numeric[e + "eq"] = Function("x", 'if(typeof x !== "object") return ' + t + "x\n" + "var i;\n" + "var V = numeric." + e + "eqV;\n" + "var s = numeric.dim(x);\n" + "numeric._foreach(x,s,0,V);\n" + "return x;\n"), numeric[e + "V"] = numeric.pointwise2(["x[i]"], "ret[i] = " + t + "(x[i]);", i), numeric[e] = Function("x", 'if(typeof x !== "object") return ' + t + "(x)\n" + "var i;\n" + "var V = numeric." + e + "V;\n" + "var s = numeric.dim(x);\n" + "return numeric._foreach2(x,s,0,V);\n"));
        for (e = 0; e < numeric.mathfuns.length; ++e) t = numeric.mathfuns[e], delete numeric.ops1[t];
        for (e in numeric.mapreducers) numeric.mapreducers.hasOwnProperty(e) && (t = numeric.mapreducers[e], numeric[e + "V"] = numeric.mapreduce2(t[0], t[1]), numeric[e] = Function("x", "s", "k", t[1] + 'if(typeof x !== "object") {' + "    xi = x;\n" + t[0] + ";\n" + "    return accum;\n" + "}" + 'if(typeof s === "undefined") s = numeric.dim(x);\n' + 'if(typeof k === "undefined") k = 0;\n' + "if(k === s.length-1) return numeric." + e + "V(x);\n" + "var xi;\n" + "var n = x.length, i;\n" + "for(i=n-1;i!==-1;--i) {\n" + "   xi = arguments.callee(x[i]);\n" + t[0] + ";\n" + "}\n" + "return accum;\n"))
    }(), numeric.truncVV = numeric.pointwise(["x[i]", "y[i]"], "ret[i] = round(x[i]/y[i])*y[i];", "var round = Math.round;"), numeric.truncVS = numeric.pointwise(["x[i]", "y"], "ret[i] = round(x[i]/y)*y;", "var round = Math.round;"), numeric.truncSV = numeric.pointwise(["x", "y[i]"], "ret[i] = round(x/y[i])*y[i];", "var round = Math.round;"), numeric.trunc = function (t, n) {
        return typeof t == "object" ? typeof n == "object" ? numeric.truncVV(t, n) : numeric.truncVS(t, n) : typeof n == "object" ? numeric.truncSV(t, n) : Math.round(t / n) * n
    }, numeric.inv = function (t) {
        var n = numeric.dim(t),
            r = Math.abs,
            i = n[0],
            s = n[1],
            o = numeric.clone(t),
            u, a, f = numeric.identity(i),
            l, c, h, p, d, t;
        for (p = 0; p < s; ++p) {
            var v = -1,
                m = -1;
            for (h = p; h !== i; ++h) d = r(o[h][p]), d > m && (v = h, m = d);
            a = o[v], o[v] = o[p], o[p] = a, c = f[v], f[v] = f[p], f[p] = c, t = a[p];
            for (d = p; d !== s; ++d) a[d] /= t;
            for (d = s - 1; d !== -1; --d) c[d] /= t;
            for (h = i - 1; h !== -1; --h)
                if (h !== p) {
                    u = o[h], l = f[h], t = u[p];
                    for (d = p + 1; d !== s; ++d) u[d] -= a[d] * t;
                    for (d = s - 1; d > 0; --d) l[d] -= c[d] * t, --d, l[d] -= c[d] * t;
                    d === 0 && (l[0] -= c[0] * t)
                }
        }
        return f
    }, numeric.det = function (t) {
        var n = numeric.dim(t);
        if (n.length !== 2 || n[0] !== n[1]) throw new Error("numeric: det() only works on square matrices");
        var r = n[0],
            i = 1,
            s, o, u, a = numeric.clone(t),
            f, l, c, h, p, d, v;
        for (o = 0; o < r - 1; o++) {
            u = o;
            for (s = o + 1; s < r; s++) Math.abs(a[s][o]) > Math.abs(a[u][o]) && (u = s);
            u !== o && (h = a[u], a[u] = a[o], a[o] = h, i *= -1), f = a[o];
            for (s = o + 1; s < r; s++) {
                l = a[s], c = l[o] / f[o];
                for (u = o + 1; u < r - 1; u += 2) p = u + 1, l[u] -= f[u] * c, l[p] -= f[p] * c;
                u !== r && (l[u] -= f[u] * c)
            }
            if (f[o] === 0) return 0;
            i *= f[o]
        }
        return i * a[o][o]
    }, numeric.transpose = function (t) {
        var n, r, i = t.length,
            s = t[0].length,
            o = Array(s),
            u, a, f;
        for (r = 0; r < s; r++) o[r] = Array(i);
        for (n = i - 1; n >= 1; n -= 2) {
            a = t[n], u = t[n - 1];
            for (r = s - 1; r >= 1; --r) f = o[r], f[n] = a[r], f[n - 1] = u[r], --r, f = o[r], f[n] = a[r], f[n - 1] = u[r];
            r === 0 && (f = o[0], f[n] = a[0], f[n - 1] = u[0])
        }
        if (n === 0) {
            u = t[0];
            for (r = s - 1; r >= 1; --r) o[r][0] = u[r], --r, o[r][0] = u[r];
            r === 0 && (o[0][0] = u[0])
        }
        return o
    }, numeric.negtranspose = function (t) {
        var n, r, i = t.length,
            s = t[0].length,
            o = Array(s),
            u, a, f;
        for (r = 0; r < s; r++) o[r] = Array(i);
        for (n = i - 1; n >= 1; n -= 2) {
            a = t[n], u = t[n - 1];
            for (r = s - 1; r >= 1; --r) f = o[r], f[n] = -a[r], f[n - 1] = -u[r], --r, f = o[r], f[n] = -a[r], f[n - 1] = -u[r];
            r === 0 && (f = o[0], f[n] = -a[0], f[n - 1] = -u[0])
        }
        if (n === 0) {
            u = t[0];
            for (r = s - 1; r >= 1; --r) o[r][0] = -u[r], --r, o[r][0] = -u[r];
            r === 0 && (o[0][0] = -u[0])
        }
        return o
    }, numeric._random = function _random(e, t) {
        var n, r = e[t],
            i = Array(r),
            s;
        if (t === e.length - 1) {
            s = Math.random;
            for (n = r - 1; n >= 1; n -= 2) i[n] = s(), i[n - 1] = s();
            return n === 0 && (i[0] = s()), i
        }
        for (n = r - 1; n >= 0; n--) i[n] = _random(e, t + 1);
        return i
    }, numeric.random = function (t) {
        return numeric._random(t, 0)
    }, numeric.norm2 = function (t) {
        return Math.sqrt(numeric.norm2Squared(t))
    }, numeric.linspace = function (t, n, r) {
        typeof r == "undefined" && (r = Math.max(Math.round(n - t) + 1, 1));
        if (r < 2) return r === 1 ? [t] : [];
        var i, s = Array(r);
        r--;
        for (i = r; i >= 0; i--) s[i] = (i * n + (r - i) * t) / r;
        return s
    }, numeric.getBlock = function (t, n, r) {
        function s(e, t) {
            var o, u = n[t],
                a = r[t] - u,
                f = Array(a);
            if (t === i.length - 1) {
                for (o = a; o >= 0; o--) f[o] = e[o + u];
                return f
            }
            for (o = a; o >= 0; o--) f[o] = s(e[o + u], t + 1);
            return f
        }
        var i = numeric.dim(t);
        return s(t, 0)
    }, numeric.setBlock = function (t, n, r, i) {
        function o(e, t, i) {
            var u, a = n[i],
                f = r[i] - a;
            if (i === s.length - 1)
                for (u = f; u >= 0; u--) e[u + a] = t[u];
            for (u = f; u >= 0; u--) o(e[u + a], t[u], i + 1)
        }
        var s = numeric.dim(t);
        return o(t, i, 0), t
    }, numeric.getRange = function (t, n, r) {
        var i = n.length,
            s = r.length,
            o, u, a = Array(i),
            f, l;
        for (o = i - 1; o !== -1; --o) {
            a[o] = Array(s), f = a[o], l = t[n[o]];
            for (u = s - 1; u !== -1; --u) f[u] = l[r[u]]
        }
        return a
    }, numeric.blockMatrix = function (t) {
        var n = numeric.dim(t);
        if (n.length < 4) return numeric.blockMatrix([t]);
        var r = n[0],
            i = n[1],
            s, o, u, a, f;
        s = 0, o = 0;
        for (u = 0; u < r; ++u) s += t[u][0].length;
        for (a = 0; a < i; ++a) o += t[0][a][0].length;
        var l = Array(s);
        for (u = 0; u < s; ++u) l[u] = Array(o);
        var c = 0,
            h, p, d, v, m;
        for (u = 0; u < r; ++u) {
            h = o;
            for (a = i - 1; a !== -1; --a) {
                f = t[u][a], h -= f[0].length;
                for (d = f.length - 1; d !== -1; --d) {
                    m = f[d], p = l[c + d];
                    for (v = m.length - 1; v !== -1; --v) p[h + v] = m[v]
                }
            }
            c += t[u][0].length
        }
        return l
    }, numeric.tensor = function (t, n) {
        if (typeof t == "number" || typeof n == "number") return numeric.mul(t, n);
        var r = numeric.dim(t),
            i = numeric.dim(n);
        if (r.length !== 1 || i.length !== 1) throw new Error("numeric: tensor product is only defined for vectors");
        var s = r[0],
            o = i[0],
            u = Array(s),
            a, f, l, c;
        for (f = s - 1; f >= 0; f--) {
            a = Array(o), c = t[f];
            for (l = o - 1; l >= 3; --l) a[l] = c * n[l], --l, a[l] = c * n[l], --l, a[l] = c * n[l], --l, a[l] = c * n[l];
            while (l >= 0) a[l] = c * n[l], --l;
            u[f] = a
        }
        return u
    }, numeric.T = function (t, n) {
        this.x = t, this.y = n
    }, numeric.t = function (t, n) {
        return new numeric.T(t, n)
    }, numeric.Tbinop = function (t, n, r, i, s) {
        var o = numeric.indexOf;
        if (typeof s != "string") {
            var u;
            s = "";
            for (u in numeric) numeric.hasOwnProperty(u) && (t.indexOf(u) >= 0 || n.indexOf(u) >= 0 || r.indexOf(u) >= 0 || i.indexOf(u) >= 0) && u.length > 1 && (s += "var " + u + " = numeric." + u + ";\n")
        }
        return Function(["y"], "var x = this;\nif(!(y instanceof numeric.T)) { y = new numeric.T(y); }\n" + s + "\n" + "if(x.y) {" + "  if(y.y) {" + "    return new numeric.T(" + i + ");\n" + "  }\n" + "  return new numeric.T(" + r + ");\n" + "}\n" + "if(y.y) {\n" + "  return new numeric.T(" + n + ");\n" + "}\n" + "return new numeric.T(" + t + ");\n")
    }, numeric.T.prototype.add = numeric.Tbinop("add(x.x,y.x)", "add(x.x,y.x),y.y", "add(x.x,y.x),x.y", "add(x.x,y.x),add(x.y,y.y)"), numeric.T.prototype.sub = numeric.Tbinop("sub(x.x,y.x)", "sub(x.x,y.x),neg(y.y)", "sub(x.x,y.x),x.y", "sub(x.x,y.x),sub(x.y,y.y)"), numeric.T.prototype.mul = numeric.Tbinop("mul(x.x,y.x)", "mul(x.x,y.x),mul(x.x,y.y)", "mul(x.x,y.x),mul(x.y,y.x)", "sub(mul(x.x,y.x),mul(x.y,y.y)),add(mul(x.x,y.y),mul(x.y,y.x))"), numeric.T.prototype.reciprocal = function () {
        var t = numeric.mul,
            n = numeric.div;
        if (this.y) {
            var r = numeric.add(t(this.x, this.x), t(this.y, this.y));
            return new numeric.T(n(this.x, r), n(numeric.neg(this.y), r))
        }
        return new T(n(1, this.x))
    }, numeric.T.prototype.div = function div(e) {
        e instanceof numeric.T || (e = new numeric.T(e));
        if (e.y) return this.mul(e.reciprocal());
        var div = numeric.div;
        return this.y ? new numeric.T(div(this.x, e.x), div(this.y, e.x)) : new numeric.T(div(this.x, e.x))
    }, numeric.T.prototype.dot = numeric.Tbinop("dot(x.x,y.x)", "dot(x.x,y.x),dot(x.x,y.y)", "dot(x.x,y.x),dot(x.y,y.x)", "sub(dot(x.x,y.x),dot(x.y,y.y)),add(dot(x.x,y.y),dot(x.y,y.x))"), numeric.T.prototype.transpose = function () {
        var t = numeric.transpose,
            n = this.x,
            r = this.y;
        return r ? new numeric.T(t(n), t(r)) : new numeric.T(t(n))
    }, numeric.T.prototype.transjugate = function () {
        var t = numeric.transpose,
            n = this.x,
            r = this.y;
        return r ? new numeric.T(t(n), numeric.negtranspose(r)) : new numeric.T(t(n))
    }, numeric.Tunop = function (t, n, r) {
        return typeof r != "string" && (r = ""), Function("var x = this;\n" + r + "\n" + "if(x.y) {" + "  " + n + ";\n" + "}\n" + t + ";\n")
    }, numeric.T.prototype.exp = numeric.Tunop("return new numeric.T(ex)", "return new numeric.T(mul(cos(x.y),ex),mul(sin(x.y),ex))", "var ex = numeric.exp(x.x), cos = numeric.cos, sin = numeric.sin, mul = numeric.mul;"), numeric.T.prototype.conj = numeric.Tunop("return new numeric.T(x.x);", "return new numeric.T(x.x,numeric.neg(x.y));"), numeric.T.prototype.neg = numeric.Tunop("return new numeric.T(neg(x.x));", "return new numeric.T(neg(x.x),neg(x.y));", "var neg = numeric.neg;"), numeric.T.prototype.sin = numeric.Tunop("return new numeric.T(numeric.sin(x.x))", "return x.exp().sub(x.neg().exp()).div(new numeric.T(0,2));"), numeric.T.prototype.cos = numeric.Tunop("return new numeric.T(numeric.cos(x.x))", "return x.exp().add(x.neg().exp()).div(2);"), numeric.T.prototype.abs = numeric.Tunop("return new numeric.T(numeric.abs(x.x));", "return new numeric.T(numeric.sqrt(numeric.add(mul(x.x,x.x),mul(x.y,x.y))));", "var mul = numeric.mul;"), numeric.T.prototype.log = numeric.Tunop("return new numeric.T(numeric.log(x.x));", "var theta = new numeric.T(numeric.atan2(x.y,x.x)), r = x.abs();\nreturn new numeric.T(numeric.log(r.x),theta.x);"), numeric.T.prototype.norm2 = numeric.Tunop("return numeric.norm2(x.x);", "var f = numeric.norm2Squared;\nreturn Math.sqrt(f(x.x)+f(x.y));"), numeric.T.prototype.inv = function () {
        var t = this;
        if (typeof t.y == "undefined") return new numeric.T(numeric.inv(t.x));
        var n = t.x.length,
            r, i, s, o = numeric.identity(n),
            u = numeric.rep([n, n], 0),
            a = numeric.clone(t.x),
            f = numeric.clone(t.y),
            l, c, h, p, d, v, m, g, r, i, s, y, b, w, E, S, x, T;
        for (r = 0; r < n; r++) {
            w = a[r][r], E = f[r][r], y = w * w + E * E, s = r;
            for (i = r + 1; i < n; i++) w = a[i][r], E = f[i][r], b = w * w + E * E, b > y && (s = i, y = b);
            s !== r && (T = a[r], a[r] = a[s], a[s] = T, T = f[r], f[r] = f[s], f[s] = T, T = o[r], o[r] = o[s], o[s] = T, T = u[r], u[r] = u[s], u[s] = T), l = a[r], c = f[r], d = o[r], v = u[r], w = l[r], E = c[r];
            for (i = r + 1; i < n; i++) S = l[i], x = c[i], l[i] = (S * w + x * E) / y, c[i] = (x * w - S * E) / y;
            for (i = 0; i < n; i++) S = d[i], x = v[i], d[i] = (S * w + x * E) / y, v[i] = (x * w - S * E) / y;
            for (i = r + 1; i < n; i++) {
                h = a[i], p = f[i], m = o[i], g = u[i], w = h[r], E = p[r];
                for (s = r + 1; s < n; s++) S = l[s], x = c[s], h[s] -= S * w - x * E, p[s] -= x * w + S * E;
                for (s = 0; s < n; s++) S = d[s], x = v[s], m[s] -= S * w - x * E, g[s] -= x * w + S * E
            }
        }
        for (r = n - 1; r > 0; r--) {
            d = o[r], v = u[r];
            for (i = r - 1; i >= 0; i--) {
                m = o[i], g = u[i], w = a[i][r], E = f[i][r];
                for (s = n - 1; s >= 0; s--) S = d[s], x = v[s], m[s] -= w * S - E * x, g[s] -= w * x + E * S
            }
        }
        return new numeric.T(o, u)
    }, numeric.T.prototype.get = function (t) {
        var n = this.x,
            r = this.y,
            i = 0,
            s, o = t.length;
        if (r) {
            while (i < o) s = t[i], n = n[s], r = r[s], i++;
            return new numeric.T(n, r)
        }
        while (i < o) s = t[i], n = n[s], i++;
        return new numeric.T(n)
    }, numeric.T.prototype.set = function (t, n) {
        var r = this.x,
            i = this.y,
            s = 0,
            o, u = t.length,
            a = n.x,
            f = n.y;
        if (u === 0) return f ? this.y = f : i && (this.y = undefined), this.x = r, this;
        if (f) {
            i || (i = numeric.rep(numeric.dim(r), 0), this.y = i);
            while (s < u - 1) o = t[s], r = r[o], i = i[o], s++;
            return o = t[s], r[o] = a, i[o] = f, this
        }
        if (i) {
            while (s < u - 1) o = t[s], r = r[o], i = i[o], s++;
            return o = t[s], r[o] = a, a instanceof Array ? i[o] = numeric.rep(numeric.dim(a), 0) : i[o] = 0, this
        }
        while (s < u - 1) o = t[s], r = r[o], s++;
        return o = t[s], r[o] = a, this
    }, numeric.T.prototype.getRows = function (t, n) {
        var r = n - t + 1,
            i, s = Array(r),
            o, u = this.x,
            a = this.y;
        for (i = t; i <= n; i++) s[i - t] = u[i];
        if (a) {
            o = Array(r);
            for (i = t; i <= n; i++) o[i - t] = a[i];
            return new numeric.T(s, o)
        }
        return new numeric.T(s)
    }, numeric.T.prototype.setRows = function (t, n, r) {
        var i, s = this.x,
            o = this.y,
            u = r.x,
            a = r.y;
        for (i = t; i <= n; i++) s[i] = u[i - t];
        if (a) {
            o || (o = numeric.rep(numeric.dim(s), 0), this.y = o);
            for (i = t; i <= n; i++) o[i] = a[i - t]
        } else if (o)
            for (i = t; i <= n; i++) o[i] = numeric.rep([u[i - t].length], 0);
        return this
    }, numeric.T.prototype.getRow = function (t) {
        var n = this.x,
            r = this.y;
        return r ? new numeric.T(n[t], r[t]) : new numeric.T(n[t])
    }, numeric.T.prototype.setRow = function (t, n) {
        var r = this.x,
            i = this.y,
            s = n.x,
            o = n.y;
        return r[t] = s, o ? (i || (i = numeric.rep(numeric.dim(r), 0), this.y = i), i[t] = o) : i && (i = numeric.rep([s.length], 0)), this
    }, numeric.T.prototype.getBlock = function (t, n) {
        var r = this.x,
            i = this.y,
            s = numeric.getBlock;
        return i ? new numeric.T(s(r, t, n), s(i, t, n)) : new numeric.T(s(r, t, n))
    }, numeric.T.prototype.setBlock = function (t, n, r) {
        r instanceof numeric.T || (r = new numeric.T(r));
        var i = this.x,
            s = this.y,
            o = numeric.setBlock,
            u = r.x,
            a = r.y;
        if (a) return s || (this.y = numeric.rep(numeric.dim(this), 0), s = this.y), o(i, t, n, u), o(s, t, n, a), this;
        o(i, t, n, u), s && o(s, t, n, numeric.rep(numeric.dim(u), 0))
    }, numeric.T.rep = function (t, n) {
        var r = numeric.T;
        n instanceof r || (n = new r(n));
        var i = n.x,
            s = n.y,
            o = numeric.rep;
        return s ? new r(o(t, i), o(t, s)) : new r(o(t, i))
    }, numeric.T.diag = function diag(e) {
        e instanceof numeric.T || (e = new numeric.T(e));
        var t = e.x,
            n = e.y,
            diag = numeric.diag;
        return n ? new numeric.T(diag(t), diag(n)) : new numeric.T(diag(t))
    }, numeric.T.eig = function () {
        if (this.y) throw new Error("eig: not implemented for complex matrices.");
        return numeric.eig(this.x)
    }, numeric.T.identity = function (t) {
        return new numeric.T(numeric.identity(t))
    }, numeric.T.prototype.getDiag = function () {
        var t = numeric,
            n = this.x,
            r = this.y;
        return r ? new t.T(t.getDiag(n), t.getDiag(r)) : new t.T(t.getDiag(n))
    }, numeric.house = function (t) {
        var n = numeric.clone(t),
            r = t[0] >= 0 ? 1 : -1,
            i = r * numeric.norm2(t);
        n[0] += i;
        var s = numeric.norm2(n);
        if (s === 0) throw new Error("eig: internal error");
        return numeric.div(n, s)
    }, numeric.toUpperHessenberg = function (t) {
        var n = numeric.dim(t);
        if (n.length !== 2 || n[0] !== n[1]) throw new Error("numeric: toUpperHessenberg() only works on square matrices");
        var r = n[0],
            i, s, o, u, a, f = numeric.clone(t),
            l, c, h, p, d = numeric.identity(r),
            v;
        for (s = 0; s < r - 2; s++) {
            u = Array(r - s - 1);
            for (i = s + 1; i < r; i++) u[i - s - 1] = f[i][s];
            if (numeric.norm2(u) > 0) {
                a = numeric.house(u), l = numeric.getBlock(f, [s + 1, s], [r - 1, r - 1]), c = numeric.tensor(a, numeric.dot(a, l));
                for (i = s + 1; i < r; i++) {
                    h = f[i], p = c[i - s - 1];
                    for (o = s; o < r; o++) h[o] -= 2 * p[o - s]
                }
                l = numeric.getBlock(f, [0, s + 1], [r - 1, r - 1]), c = numeric.tensor(numeric.dot(l, a), a);
                for (i = 0; i < r; i++) {
                    h = f[i], p = c[i];
                    for (o = s + 1; o < r; o++) h[o] -= 2 * p[o - s - 1]
                }
                l = Array(r - s - 1);
                for (i = s + 1; i < r; i++) l[i - s - 1] = d[i];
                c = numeric.tensor(a, numeric.dot(a, l));
                for (i = s + 1; i < r; i++) {
                    v = d[i], p = c[i - s - 1];
                    for (o = 0; o < r; o++) v[o] -= 2 * p[o]
                }
            }
        }
        return {
            H: f,
            Q: d
        }
    }, numeric.epsilon = 2.220446049250313e-16, numeric.QRFrancis = function (e, t) {
        typeof t == "undefined" && (t = 1e4), e = numeric.clone(e);
        var n = numeric.clone(e),
            r = numeric.dim(e),
            i = r[0],
            s, o, u, a, f, l, c, h, p, d = numeric.identity(i),
            v, m, g, y, b, w, E, S, x;
        if (i < 3) return {
            Q: d,
            B: [[0, i - 1]]
        };
        var T = numeric.epsilon;
        for (x = 0; x < t; x++) {
            for (E = 0; E < i - 1; E++)
                if (Math.abs(e[E + 1][E]) < T * (Math.abs(e[E][E]) + Math.abs(e[E + 1][E + 1]))) {
                    var N = numeric.QRFrancis(numeric.getBlock(e, [0, 0], [E, E]), t),
                        C = numeric.QRFrancis(numeric.getBlock(e, [E + 1, E + 1], [i - 1, i - 1]), t);
                    g = Array(E + 1);
                    for (w = 0; w <= E; w++) g[w] = d[w];
                    y = numeric.dot(N.Q, g);
                    for (w = 0; w <= E; w++) d[w] = y[w];
                    g = Array(i - E - 1);
                    for (w = E + 1; w < i; w++) g[w - E - 1] = d[w];
                    y = numeric.dot(C.Q, g);
                    for (w = E + 1; w < i; w++) d[w] = y[w - E - 1];
                    return {
                        Q: d,
                        B: N.B.concat(numeric.add(C.B, E + 1))
                    }
                }
            u = e[i - 2][i - 2], a = e[i - 2][i - 1], f = e[i - 1][i - 2], l = e[i - 1][i - 1], h = u + l, c = u * l - a * f, p = numeric.getBlock(e, [0, 0], [2, 2]);
            if (h * h >= 4 * c) {
                var k, L;
                k = .5 * (h + Math.sqrt(h * h - 4 * c)), L = .5 * (h - Math.sqrt(h * h - 4 * c)), p = numeric.add(numeric.sub(numeric.dot(p, p), numeric.mul(p, k + L)), numeric.diag(numeric.rep([3], k * L)))
            } else p = numeric.add(numeric.sub(numeric.dot(p, p), numeric.mul(p, h)), numeric.diag(numeric.rep([3], c)));
            s = [p[0][0], p[1][0], p[2][0]], o = numeric.house(s), g = [e[0], e[1], e[2]], y = numeric.tensor(o, numeric.dot(o, g));
            for (w = 0; w < 3; w++) {
                m = e[w], b = y[w];
                for (S = 0; S < i; S++) m[S] -= 2 * b[S]
            }
            g = numeric.getBlock(e, [0, 0], [i - 1, 2]), y = numeric.tensor(numeric.dot(g, o), o);
            for (w = 0; w < i; w++) {
                m = e[w], b = y[w];
                for (S = 0; S < 3; S++) m[S] -= 2 * b[S]
            }
            g = [d[0], d[1], d[2]], y = numeric.tensor(o, numeric.dot(o, g));
            for (w = 0; w < 3; w++) {
                v = d[w], b = y[w];
                for (S = 0; S < i; S++) v[S] -= 2 * b[S]
            }
            var A;
            for (E = 0; E < i - 2; E++) {
                for (S = E; S <= E + 1; S++)
                    if (Math.abs(e[S + 1][S]) < T * (Math.abs(e[S][S]) + Math.abs(e[S + 1][S + 1]))) {
                        var N = numeric.QRFrancis(numeric.getBlock(e, [0, 0], [S, S]), t),
                            C = numeric.QRFrancis(numeric.getBlock(e, [S + 1, S + 1], [i - 1, i - 1]), t);
                        g = Array(S + 1);
                        for (w = 0; w <= S; w++) g[w] = d[w];
                        y = numeric.dot(N.Q, g);
                        for (w = 0; w <= S; w++) d[w] = y[w];
                        g = Array(i - S - 1);
                        for (w = S + 1; w < i; w++) g[w - S - 1] = d[w];
                        y = numeric.dot(C.Q, g);
                        for (w = S + 1; w < i; w++) d[w] = y[w - S - 1];
                        return {
                            Q: d,
                            B: N.B.concat(numeric.add(C.B, S + 1))
                        }
                    }
                A = Math.min(i - 1, E + 3), s = Array(A - E);
                for (w = E + 1; w <= A; w++) s[w - E - 1] = e[w][E];
                o = numeric.house(s), g = numeric.getBlock(e, [E + 1, E], [A, i - 1]), y = numeric.tensor(o, numeric.dot(o, g));
                for (w = E + 1; w <= A; w++) {
                    m = e[w], b = y[w - E - 1];
                    for (S = E; S < i; S++) m[S] -= 2 * b[S - E]
                }
                g = numeric.getBlock(e, [0, E + 1], [i - 1, A]), y = numeric.tensor(numeric.dot(g, o), o);
                for (w = 0; w < i; w++) {
                    m = e[w], b = y[w];
                    for (S = E + 1; S <= A; S++) m[S] -= 2 * b[S - E - 1]
                }
                g = Array(A - E);
                for (w = E + 1; w <= A; w++) g[w - E - 1] = d[w];
                y = numeric.tensor(o, numeric.dot(o, g));
                for (w = E + 1; w <= A; w++) {
                    v = d[w], b = y[w - E - 1];
                    for (S = 0; S < i; S++) v[S] -= 2 * b[S]
                }
            }
        }
        throw new Error("numeric: eigenvalue iteration does not converge -- increase maxiter?")
    }, numeric.eig = function (t, n) {
        var r = numeric.toUpperHessenberg(t),
            i = numeric.QRFrancis(r.H, n),
            s = numeric.T,
            o = t.length,
            u, a, f = !1,
            l = i.B,
            c = numeric.dot(i.Q, numeric.dot(r.H, numeric.transpose(i.Q))),
            h = new s(numeric.dot(i.Q, r.Q)),
            p, d = l.length,
            v, m, g, y, b, w, E, S, x, T, N, C, k, L, A = Math.sqrt;
        for (a = 0; a < d; a++) {
            u = l[a][0];
            if (u !== l[a][1]) {
                v = u + 1, m = c[u][u], g = c[u][v], y = c[v][u], b = c[v][v];
                if (g === 0 && y === 0) continue;
                w = -m - b, E = m * b - g * y, S = w * w - 4 * E, S >= 0 ? (w < 0 ? x = -0.5 * (w - A(S)) : x = -0.5 * (w + A(S)), k = (m - x) * (m - x) + g * g, L = y * y + (b - x) * (b - x), k > L ? (k = A(k), N = (m - x) / k, C = g / k) : (L = A(L), N = y / L, C = (b - x) / L), p = new s([[C, -N], [N, C]]), h.setRows(u, v, p.dot(h.getRows(u, v)))) : (x = -0.5 * w, T = .5 * A(-S), k = (m - x) * (m - x) + g * g, L = y * y + (b - x) * (b - x), k > L ? (k = A(k + T * T), N = (m - x) / k, C = g / k, x = 0, T /= k) : (L = A(L + T * T), N = y / L, C = (b - x) / L, x = T / L, T = 0), p = new s([[C, -N], [N, C]], [[x,
T], [T, -x]]), h.setRows(u, v, p.dot(h.getRows(u, v))))
            }
        }
        var O = h.dot(t).dot(h.transjugate()),
            o = t.length,
            M = numeric.T.identity(o);
        for (v = 0; v < o; v++)
            if (v > 0)
                for (a = v - 1; a >= 0; a--) {
                    var _ = O.get([a, a]),
                        D = O.get([v, v]);
                    if (!numeric.neq(_.x, D.x) && !numeric.neq(_.y, D.y)) {
                        M.setRow(v, M.getRow(a));
                        continue
                    }
                    x = O.getRow(a).getBlock([a], [v - 1]), T = M.getRow(v).getBlock([a], [v - 1]), M.set([v, a], O.get([a, v]).neg().sub(x.dot(T)).div(_.sub(D)))
                }
            for (v = 0; v < o; v++) x = M.getRow(v), M.setRow(v, x.div(x.norm2()));
        return M = M.transpose(), M = h.transjugate().dot(M), {
            lambda: O.getDiag(),
            E: M
        }
    }, numeric.ccsSparse = function (t) {
        var n = t.length,
            r, i, s, o, u = [];
        for (s = n - 1; s !== -1; --s) {
            i = t[s];
            for (o in i) {
                o = parseInt(o);
                while (o >= u.length) u[u.length] = 0;
                i[o] !== 0 && u[o]++
            }
        }
        var r = u.length,
            a = Array(r + 1);
        a[0] = 0;
        for (s = 0; s < r; ++s) a[s + 1] = a[s] + u[s];
        var f = Array(a[r]),
            l = Array(a[r]);
        for (s = n - 1; s !== -1; --s) {
            i = t[s];
            for (o in i) i[o] !== 0 && (u[o]--, f[a[o] + u[o]] = s, l[a[o] + u[o]] = i[o])
        }
        return [a, f, l]
    }, numeric.ccsFull = function (t) {
        var n = t[0],
            r = t[1],
            i = t[2],
            s = numeric.ccsDim(t),
            o = s[0],
            u = s[1],
            a, f, l, c, h, p = numeric.rep([o, u], 0);
        for (a = 0; a < u; a++) {
            l = n[a], c = n[a + 1];
            for (f = l; f < c; ++f) p[r[f]][a] = i[f]
        }
        return p
    }, numeric.ccsTSolve = function (t, n, r, i, s) {
        function h(e) {
            var t;
            if (r[e] !== 0) return;
            r[e] = 1;
            for (t = o[e]; t < o[e + 1]; ++t) h(u[t]);
            s[c] = e, ++c
        }
        var o = t[0],
            u = t[1],
            a = t[2],
            f = o.length - 1,
            l = Math.max,
            c = 0;
        typeof i == "undefined" && (r = numeric.rep([f], 0)), typeof i == "undefined" && (i = numeric.linspace(0, r.length - 1)), typeof s == "undefined" && (s = []);
        var p, d, v, m, g, y, b, w, E;
        for (p = i.length - 1; p !== -1; --p) h(i[p]);
        s.length = c;
        for (p = s.length - 1; p !== -1; --p) r[s[p]] = 0;
        for (p = i.length - 1; p !== -1; --p) d = i[p], r[d] = n[d];
        for (p = s.length - 1; p !== -1; --p) {
            d = s[p], v = o[d], m = l(o[d + 1], v);
            for (g = v; g !== m; ++g)
                if (u[g] === d) {
                    r[d] /= a[g];
                    break
                }
            E = r[d];
            for (g = v; g !== m; ++g) y = u[g], y !== d && (r[y] -= E * a[g])
        }
        return r
    }, numeric.ccsDFS = function (t) {
        this.k = Array(t), this.k1 = Array(t), this.j = Array(t)
    }, numeric.ccsDFS.prototype.dfs = function (t, n, r, i, s, o) {
        var u = 0,
            a, f = s.length,
            l = this.k,
            c = this.k1,
            h = this.j,
            p, d;
        if (i[t] !== 0) return;
        i[t] = 1, h[0] = t, l[0] = p = n[t], c[0] = d = n[t + 1];
        for (;;)
            if (p >= d) {
                s[f] = h[u];
                if (u === 0) return;
                ++f, --u, p = l[u], d = c[u]
            } else a = o[r[p]], i[a] === 0 ? (i[a] = 1, l[u] = p, ++u, h[u] = a, p = n[a], c[u] = d = n[a + 1]) : ++p
    }, numeric.ccsLPSolve = function (t, n, r, i, s, o, u) {
        var a = t[0],
            f = t[1],
            l = t[2],
            c = a.length - 1,
            h = 0,
            p = n[0],
            d = n[1],
            v = n[2],
            m, g, y, b, w, E, S, x, T, N, C, k;
        g = p[s], y = p[s + 1], i.length = 0;
        for (m = g; m < y; ++m) u.dfs(o[d[m]], a, f, r, i, o);
        for (m = i.length - 1; m !== -1; --m) r[i[m]] = 0;
        for (m = g; m !== y; ++m) b = o[d[m]], r[b] = v[m];
        for (m = i.length - 1; m !== -1; --m) {
            b = i[m], E = a[b], S = a[b + 1];
            for (x = E; x < S; ++x)
                if (o[f[x]] === b) {
                    r[b] /= l[x];
                    break
                }
            k = r[b];
            for (x = E; x < S; ++x) T = o[f[x]], T !== b && (r[T] -= k * l[x])
        }
        return r
    }, numeric.ccsLUP1 = function (t, n) {
        var r = t[0].length - 1,
            i = [numeric.rep([r + 1], 0), [], []],
            s = [numeric.rep([r + 1], 0), [], []],
            o = i[0],
            u = i[1],
            a = i[2],
            f = s[0],
            l = s[1],
            c = s[2],
            h = numeric.rep([r], 0),
            p = numeric.rep([r], 0),
            d, v, m, g, y, b, w, E, S, x, T = numeric.ccsLPSolve,
            N = Math.max,
            C = Math.abs,
            k = numeric.linspace(0, r - 1),
            L = numeric.linspace(0, r - 1),
            A = new numeric.ccsDFS(r);
        typeof n == "undefined" && (n = 1);
        for (d = 0; d < r; ++d) {
            T(i, t, h, p, d, L, A), b = -1, w = -1;
            for (v = p.length - 1; v !== -1; --v) {
                m = p[v];
                if (m <= d) continue;
                E = C(h[m]), E > b && (w = m, b = E)
            }
            C(h[d]) < n * b && (v = k[d], b = k[w], k[d] = b, L[b] = d, k[w] = v, L[v] = w, b = h[d], h[d] = h[w], h[w] = b), b = o[d], w = f[d], S = h[d], u[b] = k[d], a[b] = 1, ++b;
            for (v = p.length - 1; v !== -1; --v) m = p[v], E = h[m], p[v] = 0, h[m] = 0, m <= d ? (l[w] = m, c[w] = E, ++w) : (u[b] = k[m], a[b] = E / S, ++b);
            o[d + 1] = b, f[d + 1] = w
        }
        for (v = u.length - 1; v !== -1; --v) u[v] = L[u[v]];
        return {
            L: i,
            U: s,
            P: k,
            Pinv: L
        }
    }, numeric.ccsDFS0 = function (t) {
        this.k = Array(t), this.k1 = Array(t), this.j = Array(t)
    }, numeric.ccsDFS0.prototype.dfs = function (t, n, r, i, s, o, u) {
        var a = 0,
            f, l = s.length,
            c = this.k,
            h = this.k1,
            p = this.j,
            d, v;
        if (i[t] !== 0) return;
        i[t] = 1, p[0] = t, c[0] = d = n[o[t]], h[0] = v = n[o[t] + 1];
        for (;;) {
            if (isNaN(d)) throw new Error("Ow!");
            if (d >= v) {
                s[l] = o[p[a]];
                if (a === 0) return;
                ++l, --a, d = c[a], v = h[a]
            } else f = r[d], i[f] === 0 ? (i[f] = 1, c[a] = d, ++a, p[a] = f, f = o[f], d = n[f], h[a] = v = n[f + 1]) : ++d
        }
    }, numeric.ccsLPSolve0 = function (t, n, r, i, s, o, u, a) {
        var f = t[0],
            l = t[1],
            c = t[2],
            h = f.length - 1,
            p = 0,
            d = n[0],
            v = n[1],
            m = n[2],
            g, y, b, w, E, S, x, T, N, C, k, L;
        y = d[s], b = d[s + 1], i.length = 0;
        for (g = y; g < b; ++g) a.dfs(v[g], f, l, r, i, o, u);
        for (g = i.length - 1; g !== -1; --g) w = i[g], r[u[w]] = 0;
        for (g = y; g !== b; ++g) w = v[g], r[w] = m[g];
        for (g = i.length - 1; g !== -1; --g) {
            w = i[g], N = u[w], S = f[w], x = f[w + 1];
            for (T = S; T < x; ++T)
                if (l[T] === N) {
                    r[N] /= c[T];
                    break
                }
            L = r[N];
            for (T = S; T < x; ++T) r[l[T]] -= L * c[T];
            r[N] = L
        }
    }, numeric.ccsLUP0 = function (t, n) {
        var r = t[0].length - 1,
            i = [numeric.rep([r + 1], 0), [], []],
            s = [numeric.rep([r + 1], 0), [], []],
            o = i[0],
            u = i[1],
            a = i[2],
            f = s[0],
            l = s[1],
            c = s[2],
            h = numeric.rep([r], 0),
            p = numeric.rep([r], 0),
            d, v, m, g, y, b, w, E, S, x, T = numeric.ccsLPSolve0,
            N = Math.max,
            C = Math.abs,
            k = numeric.linspace(0, r - 1),
            L = numeric.linspace(0, r - 1),
            A = new numeric.ccsDFS0(r);
        typeof n == "undefined" && (n = 1);
        for (d = 0; d < r; ++d) {
            T(i, t, h, p, d, L, k, A), b = -1, w = -1;
            for (v = p.length - 1; v !== -1; --v) {
                m = p[v];
                if (m <= d) continue;
                E = C(h[k[m]]), E > b && (w = m, b = E)
            }
            C(h[k[d]]) < n * b && (v = k[d], b = k[w], k[d] = b, L[b] = d, k[w] = v, L[v] = w), b = o[d], w = f[d], S = h[k[d]], u[b] = k[d], a[b] = 1, ++b;
            for (v = p.length - 1; v !== -1; --v) m = p[v], E = h[k[m]], p[v] = 0, h[k[m]] = 0, m <= d ? (l[w] = m, c[w] = E, ++w) : (u[b] = k[m], a[b] = E / S, ++b);
            o[d + 1] = b, f[d + 1] = w
        }
        for (v = u.length - 1; v !== -1; --v) u[v] = L[u[v]];
        return {
            L: i,
            U: s,
            P: k,
            Pinv: L
        }
    }, numeric.ccsLUP = numeric.ccsLUP0, numeric.ccsDim = function (t) {
        return [numeric.sup(t[1]) + 1, t[0].length - 1]
    }, numeric.ccsGetBlock = function (t, n, r) {
        var i = numeric.ccsDim(t),
            s = i[0],
            o = i[1];
        typeof n == "undefined" ? n = numeric.linspace(0, s - 1) : typeof n == "number" && (n = [n]), typeof r == "undefined" ? r = numeric.linspace(0, o - 1) : typeof r == "number" && (r = [r]);
        var u, a, f, l = n.length,
            c, h = r.length,
            p, d, v, m = numeric.rep([o], 0),
            g = [],
            y = [],
            b = [m, g, y],
            w = t[0],
            E = t[1],
            S = t[2],
            x = numeric.rep([s], 0),
            T = 0,
            N = numeric.rep([s], 0);
        for (c = 0; c < h; ++c) {
            d = r[c];
            var C = w[d],
                k = w[d + 1];
            for (u = C; u < k; ++u) p = E[u], N[p] = 1, x[p] = S[u];
            for (u = 0; u < l; ++u) v = n[u], N[v] && (g[T] = u, y[T] = x[n[u]], ++T);
            for (u = C; u < k; ++u) p = E[u], N[p] = 0;
            m[c + 1] = T
        }
        return b
    }, numeric.ccsDot = function (t, n) {
        var r = t[0],
            i = t[1],
            s = t[2],
            o = n[0],
            u = n[1],
            a = n[2],
            f = numeric.ccsDim(t),
            l = numeric.ccsDim(n),
            c = f[0],
            h = f[1],
            p = l[1],
            d = numeric.rep([c], 0),
            v = numeric.rep([c], 0),
            m = Array(c),
            g = numeric.rep([p], 0),
            y = [],
            b = [],
            w = [g, y, b],
            E, S, x, T, N, C, k, L, A, O, M;
        for (x = 0; x !== p; ++x) {
            T = o[x], N = o[x + 1], A = 0;
            for (S = T; S < N; ++S) {
                O = u[S], M = a[S], C = r[O], k = r[O + 1];
                for (E = C; E < k; ++E) L = i[E], v[L] === 0 && (m[A] = L, v[L] = 1, A += 1), d[L] = d[L] + s[E] * M
            }
            T = g[x], N = T + A, g[x + 1] = N;
            for (S = A - 1; S !== -1; --S) M = T + S, E = m[S], y[M] = E, b[M] = d[E], v[E] = 0, d[E] = 0;
            g[x + 1] = g[x] + A
        }
        return w
    }, numeric.ccsLUPSolve = function (t, n) {
        var r = t.L,
            i = t.U,
            s = t.P,
            o = n[0],
            u = !1;
        typeof o != "object" && (n = [[0, n.length], numeric.linspace(0, n.length - 1), n], o = n[0], u = !0);
        var a = n[1],
            f = n[2],
            l = r[0].length - 1,
            c = o.length - 1,
            h = numeric.rep([l], 0),
            p = Array(l),
            d = numeric.rep([l], 0),
            v = Array(l),
            m = numeric.rep([c + 1], 0),
            g = [],
            y = [],
            b = numeric.ccsTSolve,
            w, E, S, x, T, N, C = 0;
        for (w = 0; w < c; ++w) {
            T = 0, S = o[w], x = o[w + 1];
            for (E = S; E < x; ++E) N = t.Pinv[a[E]], v[T] = N, d[N] = f[E], ++T;
            v.length = T, b(r, d, h, v, p);
            for (E = v.length - 1; E !== -1; --E) d[v[E]] = 0;
            b(i, h, d, p, v);
            if (u) return d;
            for (E = p.length - 1; E !== -1; --E) h[p[E]] = 0;
            for (E = v.length - 1; E !== -1; --E) N = v[E], g[C] = N, y[C] = d[N], d[N] = 0, ++C;
            m[w + 1] = C
        }
        return [m, g, y]
    }, numeric.ccsbinop = function (t, n) {
        return typeof n == "undefined" && (n = ""), Function("X", "Y", "var Xi = X[0], Xj = X[1], Xv = X[2];\nvar Yi = Y[0], Yj = Y[1], Yv = Y[2];\nvar n = Xi.length-1,m = Math.max(numeric.sup(Xj),numeric.sup(Yj))+1;\nvar Zi = numeric.rep([n+1],0), Zj = [], Zv = [];\nvar x = numeric.rep([m],0),y = numeric.rep([m],0);\nvar xk,yk,zk;\nvar i,j,j0,j1,k,p=0;\n" + n + "for(i=0;i<n;++i) {\n" + "  j0 = Xi[i]; j1 = Xi[i+1];\n" + "  for(j=j0;j!==j1;++j) {\n" + "    k = Xj[j];\n" + "    x[k] = 1;\n" + "    Zj[p] = k;\n" + "    ++p;\n" + "  }\n" + "  j0 = Yi[i]; j1 = Yi[i+1];\n" + "  for(j=j0;j!==j1;++j) {\n" + "    k = Yj[j];\n" + "    y[k] = Yv[j];\n" + "    if(x[k] === 0) {\n" + "      Zj[p] = k;\n" + "      ++p;\n" + "    }\n" + "  }\n" + "  Zi[i+1] = p;\n" + "  j0 = Xi[i]; j1 = Xi[i+1];\n" + "  for(j=j0;j!==j1;++j) x[Xj[j]] = Xv[j];\n" + "  j0 = Zi[i]; j1 = Zi[i+1];\n" + "  for(j=j0;j!==j1;++j) {\n" + "    k = Zj[j];\n" + "    xk = x[k];\n" + "    yk = y[k];\n" + t + "\n" + "    Zv[j] = zk;\n" + "  }\n" + "  j0 = Xi[i]; j1 = Xi[i+1];\n" + "  for(j=j0;j!==j1;++j) x[Xj[j]] = 0;\n" + "  j0 = Yi[i]; j1 = Yi[i+1];\n" + "  for(j=j0;j!==j1;++j) y[Yj[j]] = 0;\n" + "}\n" + "return [Zi,Zj,Zv];")
    },
    function () {
        var k, A, B, C;
        for (k in numeric.ops2) isFinite(eval("1" + numeric.ops2[k] + "0")) ? A = "[Y[0],Y[1],numeric." + k + "(X,Y[2])]" : A = "NaN", isFinite(eval("0" + numeric.ops2[k] + "1")) ? B = "[X[0],X[1],numeric." + k + "(X[2],Y)]" : B = "NaN", isFinite(eval("1" + numeric.ops2[k] + "0")) && isFinite(eval("0" + numeric.ops2[k] + "1")) ? C = "numeric.ccs" + k + "MM(X,Y)" : C = "NaN", numeric["ccs" + k + "MM"] = numeric.ccsbinop("zk = xk " + numeric.ops2[k] + "yk;"), numeric["ccs" + k] = Function("X", "Y", 'if(typeof X === "number") return ' + A + ";\n" + 'if(typeof Y === "number") return ' + B + ";\n" + "return " + C + ";\n")
    }(), numeric.ccsScatter = function (t) {
        var n = t[0],
            r = t[1],
            i = t[2],
            s = numeric.sup(r) + 1,
            o = n.length,
            u = numeric.rep([s], 0),
            a = Array(o),
            f = Array(o),
            l = numeric.rep([s], 0),
            c;
        for (c = 0; c < o; ++c) l[r[c]]++;
        for (c = 0; c < s; ++c) u[c + 1] = u[c] + l[c];
        var h = u.slice(0),
            p, d;
        for (c = 0; c < o; ++c) d = r[c], p = h[d], a[p] = n[c], f[p] = i[c], h[d] = h[d] + 1;
        return [u, a, f]
    }, numeric.ccsGather = function (t) {
        var n = t[0],
            r = t[1],
            i = t[2],
            s = n.length - 1,
            o = r.length,
            u = Array(o),
            a = Array(o),
            f = Array(o),
            l, c, h, p, d;
        d = 0;
        for (l = 0; l < s; ++l) {
            h = n[l], p = n[l + 1];
            for (c = h; c !== p; ++c) a[d] = l, u[d] = r[c], f[d] = i[c], ++d
        }
        return [u, a, f]
    }, numeric.sdim = function dim(e, t, n) {
        typeof t == "undefined" && (t = []);
        if (typeof e != "object") return t;
        typeof n == "undefined" && (n = 0), n in t || (t[n] = 0), e.length > t[n] && (t[n] = e.length);
        var r;
        for (r in e) e.hasOwnProperty(r) && dim(e[r], t, n + 1);
        return t
    }, numeric.sclone = function clone(e, t, n) {
        typeof t == "undefined" && (t = 0), typeof n == "undefined" && (n = numeric.sdim(e).length);
        var r, i = Array(e.length);
        if (t === n - 1) {
            for (r in e) e.hasOwnProperty(r) && (i[r] = e[r]);
            return i
        }
        for (r in e) e.hasOwnProperty(r) && (i[r] = clone(e[r], t + 1, n));
        return i
    }, numeric.sdiag = function (t) {
        var n = t.length,
            r, i = Array(n),
            s, o, u;
        for (r = n - 1; r >= 1; r -= 2) s = r - 1, i[r] = [], i[r][r] = t[r], i[s] = [], i[s][s] = t[s];
        return r === 0 && (i[0] = [], i[0][0] = t[r]), i
    }, numeric.sidentity = function (t) {
        return numeric.sdiag(numeric.rep([t], 1))
    }, numeric.stranspose = function (t) {
        var n = [],
            r = t.length,
            i, s, o;
        for (i in t) {
            if (!t.hasOwnProperty(i)) continue;
            o = t[i];
            for (s in o) {
                if (!o.hasOwnProperty(s)) continue;
                typeof n[s] != "object" && (n[s] = []), n[s][i] = o[s]
            }
        }
        return n
    }, numeric.sLUP = function (t, n) {
        throw new Error("The function numeric.sLUP had a bug in it and has been removed. Please use the new numeric.ccsLUP function instead.")
    }, numeric.sdotMM = function (t, n) {
        var r = t.length,
            i = n.length,
            s = numeric.stranspose(n),
            o = s.length,
            u, a, f, l, c, h, p = Array(r),
            d;
        for (f = r - 1; f >= 0; f--) {
            d = [], u = t[f];
            for (c = o - 1; c >= 0; c--) {
                h = 0, a = s[c];
                for (l in u) {
                    if (!u.hasOwnProperty(l)) continue;
                    l in a && (h += u[l] * a[l])
                }
                h && (d[c] = h)
            }
            p[f] = d
        }
        return p
    }, numeric.sdotMV = function (t, n) {
        var r = t.length,
            i, s, o, u = Array(r),
            a;
        for (s = r - 1; s >= 0; s--) {
            i = t[s], a = 0;
            for (o in i) {
                if (!i.hasOwnProperty(o)) continue;
                n[o] && (a += i[o] * n[o])
            }
            a && (u[s] = a)
        }
        return u
    }, numeric.sdotVM = function (t, n) {
        var r, i, s, o, u = [],
            a;
        for (r in t) {
            if (!t.hasOwnProperty(r)) continue;
            s = n[r], o = t[r];
            for (i in s) {
                if (!s.hasOwnProperty(i)) continue;
                u[i] || (u[i] = 0), u[i] += o * s[i]
            }
        }
        return u
    }, numeric.sdotVV = function (t, n) {
        var r, i = 0;
        for (r in t) t[r] && n[r] && (i += t[r] * n[r]);
        return i
    }, numeric.sdot = function (t, n) {
        var r = numeric.sdim(t).length,
            i = numeric.sdim(n).length,
            s = r * 1e3 + i;
        switch (s) {
        case 0:
            return t * n;
        case 1001:
            return numeric.sdotVV(t, n);
        case 2001:
            return numeric.sdotMV(t, n);
        case 1002:
            return numeric.sdotVM(t, n);
        case 2002:
            return numeric.sdotMM(t, n);
        default:
            throw new Error("numeric.sdot not implemented for tensors of order " + r + " and " + i)
        }
    }, numeric.sscatter = function (t) {
        var n = t[0].length,
            r, i, s, o = t.length,
            u = [],
            a;
        for (i = n - 1; i >= 0; --i) {
            if (!t[o - 1][i]) continue;
            a = u;
            for (s = 0; s < o - 2; s++) r = t[s][i], a[r] || (a[r] = []), a = a[r];
            a[t[s][i]] = t[s + 1][i]
        }
        return u
    }, numeric.sgather = function gather(e, t, n) {
        typeof t == "undefined" && (t = []), typeof n == "undefined" && (n = []);
        var r, i, s;
        r = n.length;
        for (i in e)
            if (e.hasOwnProperty(i)) {
                n[r] = parseInt(i), s = e[i];
                if (typeof s == "number") {
                    if (s) {
                        if (t.length === 0)
                            for (i = r + 1; i >= 0; --i) t[i] = [];
                        for (i = r; i >= 0; --i) t[i].push(n[i]);
                        t[r + 1].push(s)
                    }
                } else gather(s, t, n)
            }
        return n.length > r && n.pop(), t
    }, numeric.cLU = function (t) {
        var n = t[0],
            r = t[1],
            i = t[2],
            s = n.length,
            o = 0,
            u, a, f, l, c, h;
        for (u = 0; u < s; u++) n[u] > o && (o = n[u]);
        o++;
        var p = Array(o),
            d = Array(o),
            v = numeric.rep([o], Infinity),
            m = numeric.rep([o], -Infinity),
            g, y, b;
        for (f = 0; f < s; f++) u = n[f], a = r[f], a < v[u] && (v[u] = a), a > m[u] && (m[u] = a);
        for (u = 0; u < o - 1; u++) m[u] > m[u + 1] && (m[u + 1] = m[u]);
        for (u = o - 1; u >= 1; u--) v[u] < v[u - 1] && (v[u - 1] = v[u]);
        var w = 0,
            E = 0;
        for (u = 0; u < o; u++) d[u] = numeric.rep([m[u] - v[u] + 1], 0), p[u] = numeric.rep([u - v[u]], 0), w += u - v[u] + 1, E += m[u] - u + 1;
        for (f = 0; f < s; f++) u = n[f], d[u][r[f] - v[u]] = i[f];
        for (u = 0; u < o - 1; u++) {
            l = u - v[u], g = d[u];
            for (a = u + 1; v[a] <= u && a < o; a++) {
                c = u - v[a], h = m[u] - u, y = d[a], b = y[c] / g[l];
                if (b) {
                    for (f = 1; f <= h; f++) y[f + c] -= b * g[f + l];
                    p[a][u - v[a]] = b
                }
            }
        }
        var g = [],
            y = [],
            S = [],
            x = [],
            T = [],
            N = [],
            s, C, k;
        s = 0, C = 0;
        for (u = 0; u < o; u++) {
            l = v[u], c = m[u], k = d[u];
            for (a = u; a <= c; a++) k[a - l] && (g[s] = u, y[s] = a, S[s] = k[a - l], s++);
            k = p[u];
            for (a = l; a < u; a++) k[a - l] && (x[C] = u, T[C] = a, N[C] = k[a - l], C++);
            x[C] = u, T[C] = u, N[C] = 1, C++
        }
        return {
            U: [g, y, S],
            L: [x, T, N]
        }
    }, numeric.cLUsolve = function (t, n) {
        var r = t.L,
            i = t.U,
            s = numeric.clone(n),
            o = r[0],
            u = r[1],
            a = r[2],
            f = i[0],
            l = i[1],
            c = i[2],
            h = f.length,
            p = o.length,
            d = s.length,
            v, m, g;
        g = 0;
        for (v = 0; v < d; v++) {
            while (u[g] < v) s[v] -= a[g] * s[u[g]], g++;
            g++
        }
        g = h - 1;
        for (v = d - 1; v >= 0; v--) {
            while (l[g] > v) s[v] -= c[g] * s[l[g]], g--;
            s[v] /= c[g], g--
        }
        return s
    }, numeric.cgrid = function (t, n) {
        typeof t == "number" && (t = [t, t]);
        var r = numeric.rep(t, -1),
            i, s, o;
        if (typeof n != "function") switch (n) {
        case "L":
            n = function (e, n) {
                return e >= t[0] / 2 || n < t[1] / 2
            };
            break;
        default:
            n = function (e, t) {
                return !0
            }
        }
        o = 0;
        for (i = 1; i < t[0] - 1; i++)
            for (s = 1; s < t[1] - 1; s++) n(i, s) && (r[i][s] = o, o++);
        return r
    }, numeric.cdelsq = function (t) {
        var n = [[-1, 0], [0, -1], [0, 1], [1, 0]],
            r = numeric.dim(t),
            i = r[0],
            s = r[1],
            o, u, a, f, l, c = [],
            h = [],
            p = [];
        for (o = 1; o < i - 1; o++)
            for (u = 1; u < s - 1; u++) {
                if (t[o][u] < 0) continue;
                for (a = 0; a < 4; a++) {
                    f = o + n[a][0], l = u + n[a][1];
                    if (t[f][l] < 0) continue;
                    c.push(t[o][u]), h.push(t[f][l]), p.push(-1)
                }
                c.push(t[o][u]), h.push(t[o][u]), p.push(4)
            }
        return [c, h, p]
    }, numeric.cdotMV = function (t, n) {
        var r, i = t[0],
            s = t[1],
            o = t[2],
            u, a = i.length,
            f;
        f = 0;
        for (u = 0; u < a; u++) i[u] > f && (f = i[u]);
        f++, r = numeric.rep([f], 0);
        for (u = 0; u < a; u++) r[i[u]] += o[u] * n[s[u]];
        return r
    }, numeric.Spline = function (t, n, r, i, s) {
        this.x = t, this.yl = n, this.yr = r, this.kl = i, this.kr = s
    }, numeric.Spline.prototype._at = function (t, n) {
        var r = this.x,
            i = this.yl,
            s = this.yr,
            o = this.kl,
            u = this.kr,
            t, a, f, l, c = numeric.add,
            h = numeric.sub,
            p = numeric.mul;
        a = h(p(o[n], r[n + 1] - r[n]), h(s[n + 1], i[n])), f = c(p(u[n + 1], r[n] - r[n + 1]), h(s[n + 1], i[n])), l = (t - r[n]) / (r[n + 1] - r[n]);
        var d = l * (1 - l);
        return c(c(c(p(1 - l, i[n]), p(l, s[n + 1])), p(a, d * (1 - l))), p(f, d * l))
    }, numeric.Spline.prototype.at = function (t) {
        if (typeof t == "number") {
            var n = this.x,
                r = n.length,
                i, s, o, u = Math.floor,
                a, f, l;
            i = 0, s = r - 1;
            while (s - i > 1) o = u((i + s) / 2), n[o] <= t ? i = o : s = o;
            return this._at(t, i)
        }
        var r = t.length,
            c, h = Array(r);
        for (c = r - 1; c !== -1; --c) h[c] = this.at(t[c]);
        return h
    }, numeric.Spline.prototype.diff = function () {
        var t = this.x,
            n = this.yl,
            r = this.yr,
            i = this.kl,
            s = this.kr,
            o = n.length,
            u, a, f, l = i,
            c = s,
            h = Array(o),
            p = Array(o),
            d = numeric.add,
            v = numeric.mul,
            m = numeric.div,
            g = numeric.sub;
        for (u = o - 1; u !== -1; --u) a = t[u + 1] - t[u], f = g(r[u + 1], n[u]), h[u] = m(d(v(f, 6), v(i[u], -4 * a), v(s[u + 1], -2 * a)), a * a), p[u + 1] = m(d(v(f, -6), v(i[u], 2 * a), v(s[u + 1], 4 * a)), a * a);
        return new numeric.Spline(t, l, c, h, p)
    }, numeric.Spline.prototype.roots = function () {
        function t(e) {
            return e * e
        }

        function n(e, t, n, r, i) {
            var s = n * 2 - (t - e),
                o = -r * 2 + (t - e),
                u = (i + 1) * .5,
                a = u * (1 - u);
            return (1 - u) * e + u * t + s * a * (1 - u) + o * a * u
        }
        var r = [],
            i = this.x,
            s = this.yl,
            o = this.yr,
            u = this.kl,
            a = this.kr;
        typeof s[0] == "number" && (s = [s], o = [o], u = [u], a = [a]);
        var f = s.length,
            l = i.length - 1,
            c, h, p, d, v, m, g, y, b, w, r = Array(f),
            E, S, x, T, N, C, k, L, A, O, M, _, D, P, H, B, j, F = Math.sqrt;
        for (c = 0; c !== f; ++c) {
            g = s[c], y = o[c], b = u[c], w = a[c], E = [];
            for (h = 0; h !== l; h++) {
                h > 0 && y[h] * g[h] < 0 && E.push(i[h]), A = i[h + 1] - i[h], O = i[h], T = g[h], N = y[h + 1], S = b[h] / A, x = w[h + 1] / A, L = t(S - x + 3 * (T - N)) + 12 * x * T, C = x + 3 * T + 2 * S - 3 * N, k = 3 * (x + S + 2 * (T - N)), L <= 0 ? (_ = C / k, _ > i[h] && _ < i[h + 1] ? M = [i[h], _, i[h + 1]] : M = [i[h], i[h + 1]]) : (_ = (C - F(L)) / k, D = (C + F(L)) / k, M = [i[h]], _ > i[h] && _ < i[h + 1] && M.push(_), D > i[h] && D < i[h + 1] && M.push(D), M.push(i[h + 1])), H = M[0], _ = this._at(H, h);
                for (p = 0; p < M.length - 1; p++) {
                    B = M[p + 1], D = this._at(B, h);
                    if (_ === 0) {
                        E.push(H), H = B, _ = D;
                        continue
                    }
                    if (D === 0 || _ * D > 0) {
                        H = B, _ = D;
                        continue
                    }
                    var I = 0;
                    for (;;) {
                        j = (_ * B - D * H) / (_ - D);
                        if (j <= H || j >= B) break;
                        P = this._at(j, h);
                        if (P * D > 0) B = j, D = P, I === -1 && (_ *= .5), I = -1;
                        else {
                            if (!(P * _ > 0)) break;
                            H = j, _ = P, I === 1 && (D *= .5), I = 1
                        }
                    }
                    E.push(j), H = M[p + 1], _ = this._at(H, h)
                }
                D === 0 && E.push(B)
            }
            r[c] = E
        }
        return typeof this.yl[0] == "number" ? r[0] : r
    }, numeric.spline = function (t, n, r, i) {
        var s = t.length,
            o = [],
            u = [],
            a = [],
            f, l = numeric.sub,
            c = numeric.mul,
            h = numeric.add;
        for (f = s - 2; f >= 0; f--) u[f] = t[f + 1] - t[f], a[f] = l(n[f + 1], n[f]);
        if (typeof r == "string" || typeof i == "string") r = i = "periodic";
        var p = [[], [], []];
        switch (typeof r) {
        case "undefined":
            o[0] = c(3 / (u[0] * u[0]), a[0]), p[0].push(0, 0), p[1].push(0, 1), p[2].push(2 / u[0], 1 / u[0]);
            break;
        case "string":
            o[0] = h(c(3 / (u[s - 2] * u[s - 2]), a[s - 2]), c(3 / (u[0] * u[0]), a[0])), p[0].push(0, 0, 0), p[1].push(s - 2, 0, 1), p[2].push(1 / u[s - 2], 2 / u[s - 2] + 2 / u[0], 1 / u[0]);
            break;
        default:
            o[0] = r, p[0].push(0), p[1].push(0), p[2].push(1)
        }
        for (f = 1; f < s - 1; f++) o[f] = h(c(3 / (u[f - 1] * u[f - 1]), a[f - 1]), c(3 / (u[f] * u[f]), a[f])), p[0].push(f, f, f), p[1].push(f - 1, f, f + 1), p[2].push(1 / u[f - 1], 2 / u[f - 1] + 2 / u[f], 1 / u[f]);
        switch (typeof i) {
        case "undefined":
            o[s - 1] = c(3 / (u[s - 2] * u[s - 2]), a[s - 2]), p[0].push(s - 1, s - 1), p[1].push(s - 2, s - 1), p[2].push(1 / u[s - 2], 2 / u[s - 2]);
            break;
        case "string":
            p[1][p[1].length - 1] = 0;
            break;
        default:
            o[s - 1] = i, p[0].push(s - 1), p[1].push(s - 1), p[2].push(1)
        }
        typeof o[0] != "number" ? o = numeric.transpose(o) : o = [o];
        var d = Array(o.length);
        if (typeof r == "string")
            for (f = d.length - 1; f !== -1; --f) d[f] = numeric.ccsLUPSolve(numeric.ccsLUP(numeric.ccsScatter(p)), o[f]), d[f][s - 1] = d[f][0];
        else
            for (f = d.length - 1; f !== -1; --f) d[f] = numeric.cLUsolve(numeric.cLU(p), o[f]);
        return typeof n[0] == "number" ? d = d[0] : d = numeric.transpose(d), new numeric.Spline(t, n, n, d, d)
    }, numeric.fftpow2 = function fftpow2(e, t) {
        var n = e.length;
        if (n === 1) return;
        var r = Math.cos,
            i = Math.sin,
            s, o, u = Array(n / 2),
            a = Array(n / 2),
            f = Array(n / 2),
            l = Array(n / 2);
        o = n / 2;
        for (s = n - 1; s !== -1; --s) --o, f[o] = e[s], l[o] = t[s], --s, u[o] = e[s], a[o] = t[s];
        fftpow2(u, a), fftpow2(f, l), o = n / 2;
        var c, h = -6.283185307179586 / n,
            p, d;
        for (s = n - 1; s !== -1; --s) --o, o === -1 && (o = n / 2 - 1), c = h * s, p = r(c), d = i(c), e[s] = u[o] + p * f[o] - d * l[o], t[s] = a[o] + p * l[o] + d * f[o]
    }, numeric._ifftpow2 = function _ifftpow2(e, t) {
        var n = e.length;
        if (n === 1) return;
        var r = Math.cos,
            i = Math.sin,
            s, o, u = Array(n / 2),
            a = Array(n / 2),
            f = Array(n / 2),
            l = Array(n / 2);
        o = n / 2;
        for (s = n - 1; s !== -1; --s) --o, f[o] = e[s], l[o] = t[s], --s, u[o] = e[s], a[o] = t[s];
        _ifftpow2(u, a), _ifftpow2(f, l), o = n / 2;
        var c, h = 6.283185307179586 / n,
            p, d;
        for (s = n - 1; s !== -1; --s) --o, o === -1 && (o = n / 2 - 1), c = h * s, p = r(c), d = i(c), e[s] = u[o] + p * f[o] - d * l[o], t[s] = a[o] + p * l[o] + d * f[o]
    }, numeric.ifftpow2 = function (t, n) {
        numeric._ifftpow2(t, n), numeric.diveq(t, t.length), numeric.diveq(n, n.length)
    }, numeric.convpow2 = function (t, n, r, i) {
        numeric.fftpow2(t, n), numeric.fftpow2(r, i);
        var s, o = t.length,
            u, a, f, l;
        for (s = o - 1; s !== -1; --s) u = t[s], f = n[s], a = r[s], l = i[s], t[s] = u * a - f * l, n[s] = u * l + f * a;
        numeric.ifftpow2(t, n)
    }, numeric.T.prototype.fft = function () {
        var t = this.x,
            n = this.y,
            r = t.length,
            i = Math.log,
            s = i(2),
            o = Math.ceil(i(2 * r - 1) / s),
            u = Math.pow(2, o),
            a = numeric.rep([u], 0),
            f = numeric.rep([u], 0),
            l = Math.cos,
            c = Math.sin,
            h, p = -3.141592653589793 / r,
            d, v = numeric.rep([u], 0),
            m = numeric.rep([u], 0),
            g = Math.floor(r / 2);
        for (h = 0; h < r; h++) v[h] = t[h];
        if (typeof n != "undefined")
            for (h = 0; h < r; h++) m[h] = n[h];
        a[0] = 1;
        for (h = 1; h <= u / 2; h++) d = p * h * h, a[h] = l(d), f[h] = c(d), a[u - h] = l(d), f[u - h] = c(d);
        var y = new numeric.T(v, m),
            b = new numeric.T(a, f);
        return y = y.mul(b), numeric.convpow2(y.x, y.y, numeric.clone(b.x), numeric.neg(b.y)), y = y.mul(b), y.x.length = r, y.y.length = r, y
    }, numeric.T.prototype.ifft = function () {
        var t = this.x,
            n = this.y,
            r = t.length,
            i = Math.log,
            s = i(2),
            o = Math.ceil(i(2 * r - 1) / s),
            u = Math.pow(2, o),
            a = numeric.rep([u], 0),
            f = numeric.rep([u], 0),
            l = Math.cos,
            c = Math.sin,
            h, p = 3.141592653589793 / r,
            d, v = numeric.rep([u], 0),
            m = numeric.rep([u], 0),
            g = Math.floor(r / 2);
        for (h = 0; h < r; h++) v[h] = t[h];
        if (typeof n != "undefined")
            for (h = 0; h < r; h++) m[h] = n[h];
        a[0] = 1;
        for (h = 1; h <= u / 2; h++) d = p * h * h, a[h] = l(d), f[h] = c(d), a[u - h] = l(d), f[u - h] = c(d);
        var y = new numeric.T(v, m),
            b = new numeric.T(a, f);
        return y = y.mul(b), numeric.convpow2(y.x, y.y, numeric.clone(b.x), numeric.neg(b.y)), y = y.mul(b), y.x.length = r, y.y.length = r, y.div(r)
    }, numeric.gradient = function (t, n) {
        var r = n.length,
            i = t(n);
        if (isNaN(i)) throw new Error("gradient: f(x) is a NaN!");
        var s = Math.max,
            o, u = numeric.clone(n),
            a, f, l = Array(r),
            c = numeric.div,
            h = numeric.sub,
            p, d, s = Math.max,
            v = .001,
            m = Math.abs,
            g = Math.min,
            y, b, w, E = 0,
            S, x, T;
        for (o = 0; o < r; o++) {
            var N = s(1e-6 * i, 1e-8);
            for (;;) {
                ++E;
                if (E > 20) throw new Error("Numerical gradient fails");
                u[o] = n[o] + N, a = t(u), u[o] = n[o] - N, f = t(u), u[o] = n[o];
                if (isNaN(a) || isNaN(f)) {
                    N /= 16;
                    continue
                }
                l[o] = (a - f) / (2 * N), y = n[o] - N, b = n[o], w = n[o] + N, S = (a - i) / N, x = (i - f) / N, T = s(m(l[o]), m(i), m(a), m(f), m(y), m(b), m(w), 1e-8), p = g(s(m(S - l[o]), m(x - l[o]), m(S - x)) / T, N / T);
                if (!(p > v)) break;
                N /= 16
            }
        }
        return l
    }, numeric.uncmin = function (t, n, r, i, s, o, u) {
        var a = numeric.gradient;
        typeof u == "undefined" && (u = {}), typeof r == "undefined" && (r = 1e-8), typeof i == "undefined" && (i = function (e) {
            return a(t, e)
        }), typeof s == "undefined" && (s = 1e3), n = numeric.clone(n);
        var f = n.length,
            l = t(n),
            c, h;
        if (isNaN(l)) throw new Error("uncmin: f(x0) is a NaN!");
        var p = Math.max,
            d = numeric.norm2;
        r = p(r, numeric.epsilon);
        var v, m, g, y = u.Hinv || numeric.identity(f),
            b = numeric.dot,
            w = numeric.inv,
            E = numeric.sub,
            S = numeric.add,
            x = numeric.tensor,
            T = numeric.div,
            N = numeric.mul,
            C = numeric.all,
            k = numeric.isFinite,
            L = numeric.neg,
            A = 0,
            O, M, _, D, P, H, B, j, F, I, q, R, U = "";
        m = i(n);
        while (A < s) {
            if (typeof o == "function" && o(A, n, l, m, y)) {
                U = "Callback returned true";
                break
            }
            if (!C(k(m))) {
                U = "Gradient has Infinity or NaN";
                break
            }
            v = L(b(y, m));
            if (!C(k(v))) {
                U = "Search direction has Infinity or NaN";
                break
            }
            I = d(v);
            if (I < r) {
                U = "Newton step smaller than tol";
                break
            }
            F = 1, h = b(m, v), _ = n;
            while (A < s) {
                if (F * I < r) break;
                M = N(v, F), _ = S(n, M), c = t(_);
                if (c - l >= .1 * F * h || isNaN(c)) {
                    F *= .5, ++A;
                    continue
                }
                break
            }
            if (F * I < r) {
                U = "Line search step size smaller than tol";
                break
            }
            if (A === s) {
                U = "maxit reached during line search";
                break
            }
            g = i(_), D = E(g, m), B = b(D, M), P = b(y, D), y = E(S(y, N((B + b(D, P)) / (B * B), x(M, M))), T(S(x(P, M), x(M, P)), B)), n = _, l = c, m = g, ++A
        }
        return {
            solution: n,
            f: l,
            gradient: m,
            invHessian: y,
            iterations: A,
            message: U
        }
    }, numeric.Dopri = function (t, n, r, i, s, o, u) {
        this.x = t, this.y = n, this.f = r, this.ymid = i, this.iterations = s, this.events = u, this.message = o
    }, numeric.Dopri.prototype._at = function (t, n) {
        function r(e) {
            return e * e
        }
        var i = this,
            s = i.x,
            o = i.y,
            u = i.f,
            a = i.ymid,
            f = s.length,
            l, c, h, p, d, v, t, m = Math.floor,
            g, y = .5,
            b = numeric.add,
            w = numeric.mul,
            E = numeric.sub,
            S, x, T;
        return l = s[n], c = s[n + 1], p = o[n], d = o[n + 1], g = c - l, h = l + y * g, v = a[n], S = E(u[n], w(p, 1 / (l - h) + 2 / (l - c))), x = E(u[n + 1], w(d, 1 / (c - h) + 2 / (c - l))), T = [r(t - c) * (t - h) / r(l - c) / (l - h), r(t - l) * r(t - c) / r(l - h) / r(c - h), r(t - l) * (t - h) / r(c - l) / (c - h), (t - l) * r(t - c) * (t - h) / r(l - c) / (l - h), (t - c) * r(t - l) * (t - h) / r(l - c) / (c - h)], b(b(b(b(w(p, T[0]), w(v, T[1])), w(d, T[2])), w(S, T[3])), w(x, T[4]))
    }, numeric.Dopri.prototype.at = function (t) {
        var n, r, i, s = Math.floor;
        if (typeof t != "number") {
            var o = t.length,
                u = Array(o);
            for (n = o - 1; n !== -1; --n) u[n] = this.at(t[n]);
            return u
        }
        var a = this.x;
        n = 0, r = a.length - 1;
        while (r - n > 1) i = s(.5 * (n + r)), a[i] <= t ? n = i : r = i;
        return this._at(t, n)
    }, numeric.dopri = function (t, n, r, i, s, o, u) {
        typeof s == "undefined" && (s = 1e-6), typeof o == "undefined" && (o = 1e3);
        var a = [t],
            f = [r],
            l = [i(t, r)],
            c, h, p, d, v, m, g = [],
            y = .2,
            b = [.075, .225],
            w = [44 / 45, -56 / 15, 32 / 9],
            E = [19372 / 6561, -25360 / 2187, 64448 / 6561, -212 / 729],
            S = [9017 / 3168, -355 / 33, 46732 / 5247, 49 / 176, -5103 / 18656],
            x = [35 / 384, 0, 500 / 1113, 125 / 192, -2187 / 6784, 11 / 84],
            T = [.10013431883002395, 0, .3918321794184259, -0.02982460176594817, .05893268337240795, -0.04497888809104361, .023904308236133973],
            N = [.2, .3, .8, 8 / 9, 1, 1],
            C = [-71 / 57600, 0, 71 / 16695, -71 / 1920, 17253 / 339200, -22 / 525, .025],
            k = 0,
            L, A, O = (n - t) / 10,
            M = 0,
            _ = numeric.add,
            D = numeric.mul,
            P, H, B = Math.max,
            j = Math.min,
            F = Math.abs,
            I = numeric.norminf,
            q = Math.pow,
            R = numeric.any,
            U = numeric.lt,
            z = numeric.and,
            W = numeric.sub,
            X, V, $, J = new numeric.Dopri(a, f, l, g, -1, "");
        typeof u == "function" && (X = u(t, r));
        while (t < n && M < o) {
            ++M, t + O > n && (O = n - t), c = i(t + N[0] * O, _(r, D(y * O, l[k]))), h = i(t + N[1] * O, _(_(r, D(b[0] * O, l[k])), D(b[1] * O, c))), p = i(t + N[2] * O, _(_(_(r, D(w[0] * O, l[k])), D(w[1] * O, c)), D(w[2] * O, h))), d = i(t + N[3] * O, _(_(_(_(r, D(E[0] * O, l[k])), D(E[1] * O, c)), D(E[2] * O, h)), D(E[3] * O, p))), v = i(t + N[4] * O, _(_(_(_(_(r, D(S[0] * O, l[k])), D(S[1] * O, c)), D(S[2] * O, h)), D(S[3] * O, p)), D(S[4] * O, d))), P = _(_(_(_(_(r, D(l[k], O * x[0])), D(h, O * x[2])), D(p, O * x[3])), D(d, O * x[4])), D(v, O * x[5])), m = i(t + O, P), L = _(_(_(_(_(D(l[k], O * C[0]), D(h, O * C[2])), D(p, O * C[3])), D(d, O * C[4])), D(v, O * C[5])), D(m, O * C[6])), typeof L == "number" ? H = F(L) : H = I(L);
            if (H > s) {
                O = .2 * O * q(s / H, .25);
                if (t + O === t) {
                    J.msg = "Step size became too small";
                    break
                }
                continue
            }
            g[k] = _(_(_(_(_(_(r, D(l[k], O * T[0])), D(h, O * T[2])), D(p, O * T[3])), D(d, O * T[4])), D(v, O * T[5])), D(m, O * T[6])), ++k, a[k] = t + O, f[k] = P, l[k] = m;
            if (typeof u == "function") {
                var K, Q = t,
                    G = t + .5 * O,
                    Y;
                V = u(G, g[k - 1]), $ = z(U(X, 0), U(0, V)), R($) || (Q = G, G = t + O, X = V, V = u(G, P), $ = z(U(X, 0), U(0, V)));
                if (R($)) {
                    var Z, et, tt, nt, rt = 0,
                        it = 1,
                        st = 1;
                    for (;;) {
                        if (typeof X == "number") Y = (st * V * Q - it * X * G) / (st * V - it * X);
                        else {
                            Y = G;
                            for (A = X.length - 1; A !== -1; --A) X[A] < 0 && V[A] > 0 && (Y = j(Y, (st * V[A] * Q - it * X[A] * G) / (st * V[A] - it * X[A])))
                        }
                        if (Y <= Q || Y >= G) break;
                        K = J._at(Y, k - 1), nt = u(Y, K), tt = z(U(X, 0), U(0, nt)), R(tt) ? (G = Y, V = nt, $ = tt, st = 1, rt === -1 ? it *= .5 : it = 1, rt = -1) : (Q = Y, X = nt, it = 1, rt === 1 ? st *= .5 : st = 1, rt = 1)
                    }
                    return P = J._at(.5 * (t + Y), k - 1), J.f[k] = i(Y, K), J.x[k] = Y, J.y[k] = K, J.ymid[k - 1] = P, J.events = $, J.iterations = M, J
                }
            }
            t += O, r = P, X = V, O = j(.8 * O * q(s / H, .25), 4 * O)
        }
        return J.iterations = M, J
    }, numeric.LU = function (e, t) {
        t = t || !1;
        var n = Math.abs,
            r, i, s, o, u, a, f, l, c, h = e.length,
            p = h - 1,
            d = new Array(h);
        t || (e = numeric.clone(e));
        for (s = 0; s < h; ++s) {
            f = s, a = e[s], c = n(a[s]);
            for (i = s + 1; i < h; ++i) o = n(e[i][s]), c < o && (c = o, f = i);
            d[s] = f, f != s && (e[s] = e[f], e[f] = a, a = e[s]), u = a[s];
            for (r = s + 1; r < h; ++r) e[r][s] /= u;
            for (r = s + 1; r < h; ++r) {
                l = e[r];
                for (i = s + 1; i < p; ++i) l[i] -= l[s] * a[i], ++i, l[i] -= l[s] * a[i];
                i === p && (l[i] -= l[s] * a[i])
            }
        }
        return {
            LU: e,
            P: d
        }
    }, numeric.LUsolve = function (t, n) {
        var r, i, s = t.LU,
            o = s.length,
            u = numeric.clone(n),
            a = t.P,
            f, l, c, h;
        for (r = o - 1; r !== -1; --r) u[r] = n[r];
        for (r = 0; r < o; ++r) {
            f = a[r], a[r] !== r && (h = u[r], u[r] = u[f], u[f] = h), l = s[r];
            for (i = 0; i < r; ++i) u[r] -= u[i] * l[i]
        }
        for (r = o - 1; r >= 0; --r) {
            l = s[r];
            for (i = r + 1; i < o; ++i) u[r] -= u[i] * l[i];
            u[r] /= l[r]
        }
        return u
    }, numeric.solve = function (t, n, r) {
        return numeric.LUsolve(numeric.LU(t, r), n)
    }, numeric.echelonize = function (t) {
        var n = numeric.dim(t),
            r = n[0],
            i = n[1],
            s = numeric.identity(r),
            o = Array(r),
            u, a, f, l, c, h, p, d, v = Math.abs,
            m = numeric.diveq;
        t = numeric.clone(t);
        for (u = 0; u < r; ++u) {
            f = 0, c = t[u], h = s[u];
            for (a = 1; a < i; ++a) v(c[f]) < v(c[a]) && (f = a);
            o[u] = f, m(h, c[f]), m(c, c[f]);
            for (a = 0; a < r; ++a)
                if (a !== u) {
                    p = t[a], d = p[f];
                    for (l = i - 1; l !== -1; --l) p[l] -= c[l] * d;
                    p = s[a];
                    for (l = r - 1; l !== -1; --l) p[l] -= h[l] * d
                }
        }
        return {
            I: s,
            A: t,
            P: o
        }
    }, numeric.__solveLP = function (t, n, r, i, s, o, u) {
        var a = numeric.sum,
            f = numeric.log,
            l = numeric.mul,
            c = numeric.sub,
            h = numeric.dot,
            p = numeric.div,
            d = numeric.add,
            v = t.length,
            m = r.length,
            g, y = !1,
            b, w = 0,
            E = 1,
            S, x, T = numeric.transpose(n),
            N = numeric.svd,
            C = numeric.transpose,
            k = numeric.leq,
            L = Math.sqrt,
            A = Math.abs,
            O = numeric.muleq,
            M = numeric.norminf,
            _ = numeric.any,
            D = Math.min,
            P = numeric.all,
            H = numeric.gt,
            B = Array(v),
            j = Array(m),
            F = numeric.rep([m], 1),
            I, q = numeric.solve,
            R = c(r, h(n, o)),
            U, z = h(t, t),
            W;
        for (U = w; U < s; ++U) {
            var X, V, $;
            for (X = m - 1; X !== -1; --X) j[X] = p(n[X], R[X]);
            var J = C(j);
            for (X = v - 1; X !== -1; --X) B[X] = a(J[X]);
            E = .25 * A(z / h(t, B));
            var K = 100 * L(z / h(B, B));
            if (!isFinite(E) || E > K) E = K;
            W = d(t, l(E, B)), I = h(J, j);
            for (X = v - 1; X !== -1; --X) I[X][X] += 1;
            $ = q(I, p(W, E), !0);
            var Q = p(R, h(n, $)),
                G = 1;
            for (X = m - 1; X !== -1; --X) Q[X] < 0 && (G = D(G, -0.999 * Q[X]));
            g = c(o, l($, G)), R = c(r, h(n, g));
            if (!P(H(R, 0))) return {
                solution: o,
                message: "",
                iterations: U
            };
            o = g;
            if (E < i) return {
                solution: g,
                message: "",
                iterations: U
            };
            if (u) {
                var Y = h(t, W),
                    Z = h(n, W);
                y = !0;
                for (X = m - 1; X !== -1; --X)
                    if (Y * Z[X] < 0) {
                        y = !1;
                        break
                    }
            } else o[v - 1] >= 0 ? y = !1 : y = !0;
            if (y) return {
                solution: g,
                message: "Unbounded",
                iterations: U
            }
        }
        return {
            solution: o,
            message: "maximum iteration count exceeded",
            iterations: U
        }
    }, numeric._solveLP = function (t, n, r, i, s) {
        var o = t.length,
            u = r.length,
            a, f = numeric.sum,
            l = numeric.log,
            c = numeric.mul,
            h = numeric.sub,
            p = numeric.dot,
            d = numeric.div,
            v = numeric.add,
            m = numeric.rep([o], 0).concat([1]),
            g = numeric.rep([u, 1], -1),
            y = numeric.blockMatrix([[n, g]]),
            b = r,
            a = numeric.rep([o], 0).concat(Math.max(0, numeric.sup(numeric.neg(r))) + 1),
            w = numeric.__solveLP(m, y, b, i, s, a, !1),
            E = numeric.clone(w.solution);
        E.length = o;
        var S = numeric.inf(h(r, p(n, E)));
        if (S < 0) return {
            solution: NaN,
            message: "Infeasible",
            iterations: w.iterations
        };
        var x = numeric.__solveLP(t, n, r, i, s - w.iterations, E, !0);
        return x.iterations += w.iterations, x
    }, numeric.solveLP = function (t, n, r, i, s, o, u) {
        typeof u == "undefined" && (u = 1e3), typeof o == "undefined" && (o = numeric.epsilon);
        if (typeof i == "undefined") return numeric._solveLP(t, n, r, o, u);
        var a = i.length,
            f = i[0].length,
            l = n.length,
            c = numeric.echelonize(i),
            h = numeric.rep([f], 0),
            p = c.P,
            d = [],
            v;
        for (v = p.length - 1; v !== -1; --v) h[p[v]] = 1;
        for (v = f - 1; v !== -1; --v) h[v] === 0 && d.push(v);
        var m = numeric.getRange,
            g = numeric.linspace(0, a - 1),
            y = numeric.linspace(0, l - 1),
            b = m(i, g, d),
            w = m(n, y, p),
            E = m(n, y, d),
            S = numeric.dot,
            x = numeric.sub,
            T = S(w, c.I),
            N = x(E, S(T, b)),
            C = x(r, S(T, s)),
            k = Array(p.length),
            L = Array(d.length);
        for (v = p.length - 1; v !== -1; --v) k[v] = t[p[v]];
        for (v = d.length - 1; v !== -1; --v) L[v] = t[d[v]];
        var A = x(L, S(k, S(c.I, b))),
            O = numeric._solveLP(A, N, C, o, u),
            M = O.solution;
        if (M !== M) return O;
        var _ = S(c.I, x(s, S(b, M))),
            D = Array(t.length);
        for (v = p.length - 1; v !== -1; --v) D[p[v]] = _[v];
        for (v = d.length - 1; v !== -1; --v) D[d[v]] = M[v];
        return {
            solution: D,
            message: O.message,
            iterations: O.iterations
        }
    }, numeric.MPStoLP = function (t) {
        function y(e) {
            throw new Error("MPStoLP: " + e + "\nLine " + s + ": " + t[s] + "\nCurrent state: " + r[n] + "\n")
        }
        t instanceof String && t.split("\n");
        var n = 0,
            r = ["Initial state", "NAME", "ROWS", "COLUMNS", "RHS", "BOUNDS", "ENDATA"],
            i = t.length,
            s, o, u, a = 0,
            f = {},
            l = [],
            c = 0,
            h = {},
            p = 0,
            d, v = [],
            m = [],
            g = [];
        for (s = 0; s < i; ++s) {
            u = t[s];
            var b = u.match(/\S*/g),
                w = [];
            for (o = 0; o < b.length; ++o) b[o] !== "" && w.push(b[o]);
            if (w.length === 0) continue;
            for (o = 0; o < r.length; ++o)
                if (u.substr(0, r[o].length) === r[o]) break;
            if (o < r.length) {
                n = o, o === 1 && (d = w[1]);
                if (o === 6) return {
                    name: d,
                    c: v,
                    A: numeric.transpose(m),
                    b: g,
                    rows: f,
                    vars: h
                };
                continue
            }
            switch (n) {
            case 0:
            case 1:
                y("Unexpected line");
            case 2:
                switch (w[0]) {
                case "N":
                    a === 0 ? a = w[1] : y("Two or more N rows");
                    break;
                case "L":
                    f[w[1]] = c, l[c] = 1, g[c] = 0, ++c;
                    break;
                case "G":
                    f[w[1]] = c, l[c] = -1, g[c] = 0, ++c;
                    break;
                case "E":
                    f[w[1]] = c, l[c] = 0, g[c] = 0, ++c;
                    break;
                default:
                    y("Parse error " + numeric.prettyPrint(w))
                }
                break;
            case 3:
                h.hasOwnProperty(w[0]) || (h[w[0]] = p, v[p] = 0, m[p] = numeric.rep([c], 0), ++p);
                var E = h[w[0]];
                for (o = 1; o < w.length; o += 2) {
                    if (w[o] === a) {
                        v[E] = parseFloat(w[o + 1]);
                        continue
                    }
                    var S = f[w[o]];
                    m[E][S] = (l[S] < 0 ? -1 : 1) * parseFloat(w[o + 1])
                }
                break;
            case 4:
                for (o = 1; o < w.length; o += 2) g[f[w[o]]] = (l[f[w[o]]] < 0 ? -1 : 1) * parseFloat(w[o + 1]);
                break;
            case 5:
                break;
            case 6:
                y("Internal error")
            }
        }
        y("Reached end of file without ENDATA")
    }, numeric.seedrandom = {
        pow: Math.pow,
        random: Math.random
    },
    function (e, t, n, r, i, s, o) {
        function u(e) {
            var t, r, i = this,
                s = e.length,
                o = 0,
                u = i.i = i.j = i.m = 0;
            i.S = [], i.c = [], s || (e = [s++]);
            while (o < n) i.S[o] = o++;
            for (o = 0; o < n; o++) t = i.S[o], u = l(u + t + e[o % s]), r = i.S[u], i.S[o] = r, i.S[u] = t;
            i.g = function (t) {
                var r = i.S,
                    s = l(i.i + 1),
                    o = r[s],
                    u = l(i.j + o),
                    a = r[u];
                r[s] = a, r[u] = o;
                var f = r[l(o + a)];
                while (--t) s = l(s + 1), o = r[s], u = l(u + o), a = r[u], r[s] = a, r[u] = o, f = f * n + r[l(o + a)];
                return i.i = s, i.j = u, f
            }, i.g(n)
        }

        function a(e, t, n, r, i) {
            n = [], i = typeof e;
            if (t && i == "object")
                for (r in e)
                    if (r.indexOf("S") < 5) try {
                        n.push(a(e[r], t - 1))
                    } catch (s) {}
                    return n.length ? n : e + (i != "string" ? "\0" : "")
        }

        function f(e, t, n, r) {
            e += "", n = 0;
            for (r = 0; r < e.length; r++) t[l(r)] = l((n ^= t[l(r)] * 19) + e.charCodeAt(r));
            e = "";
            for (r in t) e += String.fromCharCode(t[r]);
            return e
        }

        function l(e) {
            return e & n - 1
        }
        t.seedrandom = function (c, h) {
            var p = [],
                d;
            return c = f(a(h ? [c, e] : arguments.length ? c : [(new Date).getTime(), e, window], 3), p), d = new u(p), f(d.S, e), t.random = function () {
                var t = d.g(r),
                    u = o,
                    a = 0;
                while (t < i) t = (t + a) * n, u *= n, a = d.g(1);
                while (t >= s) t /= 2, u /= 2, a >>>= 1;
                return (t + a) / u
            }, c
        }, o = t.pow(n, r), i = t.pow(2, i), s = i * 2, f(t.random(), e)
    }([], numeric.seedrandom, 256, 6, 52),
    function (e) {
        function t(e) {
            if (typeof e != "object") return e;
            var n = [],
                r, i = e.length;
            for (r = 0; r < i; r++) n[r + 1] = t(e[r]);
            return n
        }

        function n(e) {
            if (typeof e != "object") return e;
            var t = [],
                r, i = e.length;
            for (r = 1; r < i; r++) t[r - 1] = n(e[r]);
            return t
        }

        function r(e, t, n) {
            var r, i, s, o, u;
            for (s = 1; s <= n; s += 1) {
                e[s][s] = 1 / e[s][s], u = -e[s][s];
                for (r = 1; r < s; r += 1) e[r][s] = u * e[r][s];
                o = s + 1;
                if (n < o) break;
                for (i = o; i <= n; i += 1) {
                    u = e[s][i], e[s][i] = 0;
                    for (r = 1; r <= s; r += 1) e[r][i] = e[r][i] + u * e[r][s]
                }
            }
        }

        function i(e, t, n, r) {
            var i, s, o, u;
            for (s = 1; s <= n; s += 1) {
                u = 0;
                for (i = 1; i < s; i += 1) u += e[i][s] * r[i];
                r[s] = (r[s] - u) / e[s][s]
            }
            for (o = 1; o <= n; o += 1) {
                s = n + 1 - o, r[s] = r[s] / e[s][s], u = -r[s];
                for (i = 1; i < s; i += 1) r[i] = r[i] + u * e[i][s]
            }
        }

        function s(e, t, n, r) {
            var i, s, o, u, a, f;
            for (s = 1; s <= n; s += 1) {
                r[1] = s, f = 0, o = s - 1;
                if (o < 1) {
                    f = e[s][s] - f;
                    if (f <= 0) break;
                    e[s][s] = Math.sqrt(f)
                } else {
                    for (u = 1; u <= o; u += 1) {
                        a = e[u][s];
                        for (i = 1; i < u; i += 1) a -= e[i][s] * e[i][u];
                        a /= e[u][u], e[u][s] = a, f += a * a
                    }
                    f = e[s][s] - f;
                    if (f <= 0) break;
                    e[s][s] = Math.sqrt(f)
                }
                r[1] = 0
            }
        }

        function o(e, t, n, o, u, a, f, l, c, h, p, d, v, m, g, y) {
            function V() {
                m[1] = m[1] + 1, E = L;
                for (b = 1; b <= h; b += 1) {
                    E += 1, P = -l[b];
                    for (w = 1; w <= o; w += 1) P += f[w][b] * u[w];
                    Math.abs(P) < U && (P = 0);
                    if (b > p) g[E] = P;
                    else {
                        g[E] = -Math.abs(P);
                        if (P > 0) {
                            for (w = 1; w <= o; w += 1) f[w][b] = -f[w][b];
                            l[b] = -l[b]
                        }
                    }
                }
                for (b = 1; b <= v; b += 1) g[L + d[b]] = 0;
                O = 0, D = 0;
                for (b = 1; b <= h; b += 1) g[L + b] < D * g[_ + b] && (O = b, D = g[L + b] / g[_ + b]);
                return O === 0 ? 999 : 0
            }

            function $() {
                for (b = 1; b <= o; b += 1) {
                    P = 0;
                    for (w = 1; w <= o; w += 1) P += e[w][b] * f[w][O];
                    g[b] = P
                }
                S = N;
                for (b = 1; b <= o; b += 1) g[S + b] = 0;
                for (w = v + 1; w <= o; w += 1)
                    for (b = 1; b <= o; b += 1) g[S + b] = g[S + b] + e[b][w] * g[w];
                q = !0;
                for (b = v; b >= 1; b -= 1) {
                    P = g[b], E = k + b * (b + 3) / 2, S = E - b;
                    for (w = b + 1; w <= v; w += 1) P -= g[E] * g[C + w], E += w;
                    P /= g[S], g[C + b] = P;
                    if (d[b] < p) break;
                    if (P < 0) break;
                    q = !1, T = b
                }
                if (!q) {
                    H = g[A + T] / g[C + T];
                    for (b = 1; b <= v; b += 1) {
                        if (d[b] < p) break;
                        if (g[C + b] < 0) break;
                        D = g[A + b] / g[C + b], D <
                            H && (H = D, T = b)
                    }
                }
                P = 0;
                for (b = N + 1; b <= N + o; b += 1) P += g[b] * g[b];
                if (Math.abs(P) <= U) {
                    if (q) return y[1] = 1, 999;
                    for (b = 1; b <= v; b += 1) g[A + b] = g[A + b] - H * g[C + b];
                    return g[A + v + 1] = g[A + v + 1] + H, 700
                }
                P = 0;
                for (b = 1; b <= o; b += 1) P += g[N + b] * f[b][O];
                B = -g[L + O] / P, R = !0, q || H < B && (B = H, R = !1);
                for (b = 1; b <= o; b += 1) u[b] = u[b] + B * g[N + b], Math.abs(u[b]) < U && (u[b] = 0);
                a[1] = a[1] + B * P * (B / 2 + g[A + v + 1]);
                for (b = 1; b <= v; b += 1) g[A + b] = g[A + b] - B * g[C + b];
                g[A + v + 1] = g[A + v + 1] + B;
                if (!R) {
                    P = -l[O];
                    for (w = 1; w <= o; w += 1) P += u[w] * f[w][O];
                    if (O > p) g[L + O] = P;
                    else {
                        g[L + O] = -Math.abs(P);
                        if (P > 0) {
                            for (w = 1; w <= o; w += 1) f[w][O] = -f[w][O];
                            l[O] = -l[O]
                        }
                    }
                    return 700
                }
                v += 1, d[v] = O, E = k + (v - 1) * v / 2 + 1;
                for (b = 1; b <= v - 1; b += 1) g[E] = g[b], E += 1;
                if (v === o) g[E] = g[o];
                else {
                    for (b = o; b >= v + 1; b -= 1) {
                        if (g[b] === 0) break;
                        j = Math.max(Math.abs(g[b - 1]), Math.abs(g[b])), F = Math.min(Math.abs(g[b - 1]), Math.abs(g[b])), g[b - 1] >= 0 ? D = Math.abs(j * Math.sqrt(1 + F * F / (j * j))) : D = -Math.abs(j * Math.sqrt(1 + F * F / (j * j))), j = g[b - 1] / D, F = g[b] / D;
                        if (j === 1) break;
                        if (j === 0) {
                            g[b - 1] = F * D;
                            for (w = 1; w <= o; w += 1) D = e[w][b - 1], e[w][b - 1] = e[w][b], e[w][b] = D
                        } else {
                            g[b - 1] = D, I = F / (1 + j);
                            for (w = 1; w <= o; w += 1) D = j * e[w][b - 1] + F * e[w][b], e[w][b] = I * (e[w][b - 1] + D) - e[w][b], e[w][b - 1] = D
                        }
                    }
                    g[E] = g[v]
                }
                return 0
            }

            function J() {
                E = k + T * (T + 1) / 2 + 1, S = E + T;
                if (g[S] === 0) return 798;
                j = Math.max(Math.abs(g[S - 1]), Math.abs(g[S])), F = Math.min(Math.abs(g[S - 1]), Math.abs(g[S])), g[S - 1] >= 0 ? D = Math.abs(j * Math.sqrt(1 + F * F / (j * j))) : D = -Math.abs(j * Math.sqrt(1 + F * F / (j * j))), j = g[S - 1] / D, F = g[S] / D;
                if (j === 1) return 798;
                if (j === 0) {
                    for (b = T + 1; b <= v; b += 1) D = g[S - 1], g[S - 1] = g[S], g[S] = D, S += b;
                    for (b = 1; b <= o; b += 1) D = e[b][T], e[b][T] = e[b][T + 1], e[b][T + 1] = D
                } else {
                    I = F / (1 + j);
                    for (b = T + 1; b <= v; b += 1) D = j * g[S - 1] + F * g[S], g[S] = I * (g[S - 1] + D) - g[S], g[S - 1] = D, S += b;
                    for (b = 1; b <= o; b += 1) D = j * e[b][T] + F * e[b][T + 1], e[b][T + 1] = I * (e[b][T] + D) - e[b][T + 1], e[b][T] = D
                }
                return 0
            }

            function K() {
                S = E - T;
                for (b = 1; b <= T; b += 1) g[S] = g[E], E += 1, S += 1;
                return g[A + T] = g[A + T + 1], d[T] = d[T + 1], T += 1, T < v ? 797 : 0
            }

            function Q() {
                return g[A + v] = g[A + v + 1], g[A + v + 1] = 0, d[v] = 0, v -= 1, m[2] = m[2] + 1, 0
            }
            var b, w, E, S, x, T, N, C, k, L, A, O, M, _, D, P, H, B, j, F, I, q, R, U, z, W, X;
            M = Math.min(o, h), E = 2 * o + M * (M + 5) / 2 + 2 * h + 1, U = 1e-60;
            do U += U, z = 1 + .1 * U, W = 1 + .2 * U; while (z <= 1 || W <= 1);
            for (b = 1; b <= o; b += 1) g[b] = t[b];
            for (b = o + 1; b <= E; b += 1) g[b] = 0;
            for (b = 1; b <= h; b += 1) d[b] = 0;
            x = [];
            if (y[1] === 0) {
                s(e, n, o, x);
                if (x[1] !== 0) {
                    y[1] = 2;
                    return
                }
                i(e, n, o, t), r(e, n, o)
            } else {
                for (w = 1; w <= o; w += 1) {
                    u[w] = 0;
                    for (b = 1; b <= w; b += 1) u[w] = u[w] + e[b][w] * t[b]
                }
                for (w = 1; w <= o; w += 1) {
                    t[w] = 0;
                    for (b = w; b <= o; b += 1) t[w] = t[w] + e[w][b] * u[b]
                }
            }
            a[1] = 0;
            for (w = 1; w <= o; w += 1) {
                u[w] = t[w], a[1] = a[1] + g[w] * u[w], g[w] = 0;
                for (b = w + 1; b <= o; b += 1) e[b][w] = 0
            }
            a[1] = -a[1] / 2, y[1] = 0, N = o, C = N + o, A = C + M, k = A + M + 1, L = k + M * (M + 1) / 2, _ = L + h;
            for (b = 1; b <= h; b += 1) {
                P = 0;
                for (w = 1; w <= o; w += 1) P += f[w][b] * f[w][b];
                g[_ + b] = Math.sqrt(P)
            }
            v = 0, m[1] = 0, m[2] = 0, X = 0;
            for (;;) {
                X = V();
                if (X === 999) return;
                for (;;) {
                    X = $();
                    if (X === 0) break;
                    if (X === 999) return;
                    if (X === 700)
                        if (T === v) Q();
                        else {
                            for (;;) {
                                J(), X = K();
                                if (X !== 797) break
                            }
                            Q()
                        }
                }
            }
        }

        function u(e, r, i, s, u, a) {
            e = t(e), r = t(r), i = t(i);
            var f, l, c, h, p, d = [],
                v = [],
                m = [],
                g = [],
                y = [],
                b;
            u = u || 0, a = a ? t(a) : [undefined, 0], s = s ? t(s) : [], l = e.length - 1, c = i[1].length - 1;
            if (!s)
                for (f = 1; f <= c; f += 1) s[f] = 0;
            for (f = 1; f <= c; f += 1) v[f] = 0;
            h = 0, p = Math.min(l, c);
            for (f = 1; f <= l; f += 1) m[f] = 0;
            d[1] = 0;
            for (f = 1; f <= 2 * l + p * (p + 5) / 2 + 2 * c + 1; f += 1) g[f] = 0;
            for (f = 1; f <= 2; f += 1) y[f] = 0;
            return o(e, r, l, l, m, d, i, s, l, c, u, v, h, y, g, a), b = "", a[1] === 1 && (b = "constraints are inconsistent, no solution!"), a[1] === 2 && (b = "matrix D in quadratic function is not positive definite!"), {
                solution: n(m),
                value: n(d),
                unconstrained_solution: n(r),
                iterations: n(y),
                iact: n(v),
                message: b
            }
        }
        e.solveQP = u
    }(numeric), numeric.svd = function (t) {
        function g(e, t) {
            return e = Math.abs(e), t = Math.abs(t), e > t ? e * Math.sqrt(1 + t * t / e / e) : t == 0 ? e : t * Math.sqrt(1 + e * e / t / t)
        }
        var n, r = numeric.epsilon,
            i = 1e-64 / r,
            s = 50,
            o = 0,
            u = 0,
            a = 0,
            f = 0,
            l = 0,
            c = numeric.clone(t),
            h = c.length,
            p = c[0].length;
        if (h < p) throw "Need more rows than columns";
        var d = new Array(p),
            v = new Array(p);
        for (u = 0; u < p; u++) d[u] = v[u] = 0;
        var m = numeric.rep([p, p], 0),
            y = 0,
            b = 0,
            w = 0,
            E = 0,
            S = 0,
            x = 0,
            T = 0;
        for (u = 0; u < p; u++) {
            d[u] = b, T = 0, l = u + 1;
            for (a = u; a < h; a++) T += c[a][u] * c[a][u];
            if (T <= i) b = 0;
            else {
                y = c[u][u], b = Math.sqrt(T), y >= 0 && (b = -b), w = y * b - T, c[u][u] = y - b;
                for (a = l; a < p; a++) {
                    T = 0;
                    for (f = u; f < h; f++) T += c[f][u] * c[f][a];
                    y = T / w;
                    for (f = u; f < h; f++) c[f][a] += y * c[f][u]
                }
            }
            v[u] = b, T = 0;
            for (a = l; a < p; a++) T += c[u][a] * c[u][a];
            if (T <= i) b = 0;
            else {
                y = c[u][u + 1], b = Math.sqrt(T), y >= 0 && (b = -b), w = y * b - T, c[u][u + 1] = y - b;
                for (a = l; a < p; a++) d[a] = c[u][a] / w;
                for (a = l; a < h; a++) {
                    T = 0;
                    for (f = l; f < p; f++) T += c[a][f] * c[u][f];
                    for (f = l; f < p; f++) c[a][f] += T * d[f]
                }
            }
            S = Math.abs(v[u]) + Math.abs(d[u]), S > E && (E = S)
        }
        for (u = p - 1; u != -1; u += -1) {
            if (b != 0) {
                w = b * c[u][u + 1];
                for (a = l; a < p; a++) m[a][u] = c[u][a] / w;
                for (a = l; a < p; a++) {
                    T = 0;
                    for (f = l; f < p; f++) T += c[u][f] * m[f][a];
                    for (f = l; f < p; f++) m[f][a] += T * m[f][u]
                }
            }
            for (a = l; a < p; a++) m[u][a] = 0, m[a][u] = 0;
            m[u][u] = 1, b = d[u], l = u
        }
        for (u = p - 1; u != -1; u += -1) {
            l = u + 1, b = v[u];
            for (a = l; a < p; a++) c[u][a] = 0;
            if (b != 0) {
                w = c[u][u] * b;
                for (a = l; a < p; a++) {
                    T = 0;
                    for (f = l; f < h; f++) T += c[f][u] * c[f][a];
                    y = T / w;
                    for (f = u; f < h; f++) c[f][a] += y * c[f][u]
                }
                for (a = u; a < h; a++) c[a][u] = c[a][u] / b
            } else
                for (a = u; a < h; a++) c[a][u] = 0;
            c[u][u] += 1
        }
        r *= E;
        for (f = p - 1; f != -1; f += -1)
            for (var N = 0; N < s; N++) {
                var C = !1;
                for (l = f; l != -1; l += -1) {
                    if (Math.abs(d[l]) <= r) {
                        C = !0;
                        break
                    }
                    if (Math.abs(v[l - 1]) <= r) break
                }
                if (!C) {
                    o = 0, T = 1;
                    var k = l - 1;
                    for (u = l; u < f + 1; u++) {
                        y = T * d[u], d[u] = o * d[u];
                        if (Math.abs(y) <= r) break;
                        b = v[u], w = g(y, b), v[u] = w, o = b / w, T = -y / w;
                        for (a = 0; a < h; a++) S = c[a][k], x = c[a][u], c[a][k] = S * o + x * T, c[a][u] = -S * T + x * o
                    }
                }
                x = v[f];
                if (l == f) {
                    if (x < 0) {
                        v[f] = -x;
                        for (a = 0; a < p; a++) m[a][f] = -m[a][f]
                    }
                    break
                }
                if (N >= s - 1) throw "Error: no convergence.";
                E = v[l], S = v[f - 1], b = d[f - 1], w = d[f], y = ((S - x) * (S + x) + (b - w) * (b + w)) / (2 * w * S), b = g(y, 1), y < 0 ? y = ((E - x) * (E + x) + w * (S / (y - b) - w)) / E : y = ((E - x) * (E + x) + w * (S / (y + b) - w)) / E, o = 1, T = 1;
                for (u = l + 1; u < f + 1; u++) {
                    b = d[u], S = v[u], w = T * b, b = o * b, x = g(y, w), d[u - 1] = x, o = y / x, T = w / x, y = E * o + b * T, b = -E * T + b * o, w = S * T, S *= o;
                    for (a = 0; a < p; a++) E = m[a][u - 1], x = m[a][u], m[a][u - 1] = E * o + x * T, m[a][u] = -E * T + x * o;
                    x = g(y, w), v[u - 1] = x, o = y / x, T = w / x, y = o * b + T * S, E = -T * b + o * S;
                    for (a = 0; a < h; a++) S = c[a][u - 1], x = c[a][u], c[a][u - 1] = S * o + x * T, c[a][u] = -S * T + x * o
                }
                d[l] = 0, d[f] = y, v[f] = E
            }
        for (u = 0; u < v.length; u++) v[u] < r && (v[u] = 0);
        for (u = 0; u < p; u++)
            for (a = u - 1; a >= 0; a--)
                if (v[a] < v[u]) {
                    o = v[a], v[a] = v[u], v[u] = o;
                    for (f = 0; f < c.length; f++) n = c[f][u], c[f][u] = c[f][a], c[f][a] = n;
                    for (f = 0; f < m.length; f++) n = m[f][u], m[f][u] = m[f][a], m[f][a] = n;
                    u = a
                }
        return {
            U: c,
            S: v,
            V: m
        }
    };

// Bezier

    stats = function(a) {
      var r = {mean: 0, variance: 0, deviation: 0}, t = a.length;
      for(var m, s = 0, l = t; l--; s += a[l]);
      for(m = r.mean = s / t, l = t, s = 0; l--; s += Math.pow(a[l] - m, 2));
      return r.deviation = Math.sqrt(r.variance = s / t), r;
    }

    // Matrices look like this:
    // q = [[1,2,3],
    //      [4,5,6],
    //      [7,3,9]];

    // M x B = C
    // M-1 x M x B = M-1 x C
    // I x B = M-1 x C

    var generate141Matrix = function(N) {
      result = [];
      for (var row = 0; row < N; row++) {
        var newRow = [];
        for (var col = 0; col < N; col++) {
          if (col == row) {
            newRow.push(4);
          } else if (Math.abs(row - col) == 1) {
            newRow.push(1);
          } else {
            newRow.push(0);
          };
        };
        result.push(newRow);
      }
      return result;
    };

    var generateConstantMatrix = function (sampledPoints) {
      // given an vector of N points, this should return N-2 ordered pairs
      result = [];
      result.push(
        numeric.sub(numeric.mul(sampledPoints[1], 6),
        sampledPoints[0])
      );
      for (i = 2; i < sampledPoints.length - 2; i++) {
        result.push( numeric.mul(sampledPoints[i], 6) );
      }
      result.push(
        numeric.sub(numeric.mul(sampledPoints[sampledPoints.length - 2], 6),
        sampledPoints[sampledPoints.length - 1])
      );
      return result;
    }

    var convertBSplineControlPointsToBezierControlPoints = function(BSplinePoints) {
      // Each Bezier curve has P0 and P3 (endpoints) == sampled points, and the
      // intermediate points P1 and P2 are 1/3 & 2/3 along the way between the BSpline
      // control points

      var beziers = [];
      for (var i = 0; i < BSplinePoints.length - 1; i++) {

        // bezier control points are:
        if (i == 0) {
          // First one is a special case
          var p0 = BSplinePoints[0];
        } else {
          var p0 = p3;
        }

        var p1 = numeric.add( numeric.mul(2/3, BSplinePoints[i]),
                              numeric.mul(1/3, BSplinePoints[i + 1])
                            );
        var p2 = numeric.add( numeric.mul(1/3, BSplinePoints[i]),
                              numeric.mul(2/3, BSplinePoints[i + 1])
                            );
        if (i == BSplinePoints.length - 2) {
          // Last one is a special case
          var p3 = BSplinePoints[BSplinePoints.length - 1];
        } else {
          var p3 = numeric.add( numeric.mul(1/6, BSplinePoints[i]),
                                numeric.mul(2/3, BSplinePoints[i + 1]),
                                numeric.mul(1/6, BSplinePoints[i + 2])
                              );
        }

        var bezierSegmentControlPoints = [p0, p1, p2, p3];
        beziers.push(bezierSegmentControlPoints);
      }
      return beziers;
    };

    var getBezierControlPoints = function(sampledPoints) {
      if (sampledPoints.length < 4) {
        // We need 4 sampled points to draw a *cubic* bezier through those points
        // These 3 cases are for shorter lengths: single point, line, quadratic
        if (sampledPoints.length === 3) {
            beziers =[sampledPoints[0], sampledPoints[1], sampledPoints[1], sampledPoints[2]];
            return [beziers]
        } else if (sampledPoints.length === 2) {
            beziers = [sampledPoints[0], sampledPoints[0], sampledPoints[1], sampledPoints[1]]
            return [beziers]
        } else if (sampledPoints.length === 1) {
            beziers = [sampledPoints[0], sampledPoints[0], sampledPoints[0], sampledPoints[0]];
            return [beziers]
        };
      }

      // Below here we have enough points to generate a cubic bezier
      var M = generate141Matrix(sampledPoints.length - 2);
      var C = generateConstantMatrix(sampledPoints);
      var B = numeric.dot(numeric.inv(M), C);

      // B-spline control points also include the endpoints of the sampled data
      // These are the B Splines3
      B.splice(0, 0, sampledPoints[0]);
      B.push(sampledPoints[sampledPoints.length - 1]);
      var beziers = convertBSplineControlPointsToBezierControlPoints(B);
      return beziers;

    }
    
// Signature JS with modifications
    
    /**!
 * SignaturePad: A jQuery plugin for assisting in the creation of an HTML5 canvas based signature pad. Records the drawn signature in JSON for later regeneration.
 * @project signature-pad
 * @author Thomas J Bradley <hey@thomasjbradley.ca>
 * @modifications <webmaster@wiline.com>
 * @link http://thomasjbradley.ca/lab/signature-pad
 * @link https://github.com/thomasjbradley/signature-pad
 * @copyright 2013 Thomas J Bradley
 * @license BSD-3-CLAUSE
 * @version 2.4.1
 */
    
! function ($) {
    function SignaturePad(selector, options) {
        function clearMouseLeaveTimeout() {
            clearTimeout(mouseLeaveTimeout), mouseLeaveTimeout = !1, mouseButtonDown = !1
        }

        function drawLine(e, newYOffset) {
            var offset, newX, newY;
            return e.preventDefault(), offset = $(e.target).offset(), clearTimeout(mouseLeaveTimeout), mouseLeaveTimeout = !1, "undefined" != typeof e.changedTouches ? (newX = Math.floor(e.changedTouches[0].pageX - offset.left), newY = Math.floor(e.changedTouches[0].pageY - offset.top)) : (newX = Math.floor(e.pageX - offset.left), newY = Math.floor(e.pageY - offset.top)), previous.x === newX && previous.y === newY ? !0 : (null === previous.x && (previous.x = newX), null === previous.y && (previous.y = newY), newYOffset && (newY += newYOffset), canvasContext.beginPath(), canvasContext.moveTo(previous.x, previous.y), canvasContext.lineTo(newX, newY), canvasContext.lineCap = settings.penCap, canvasContext.stroke(), canvasContext.closePath(), output.push({
                lx: newX,
                ly: newY,
                mx: previous.x,
                my: previous.y
            }), previous.x = newX, previous.y = newY, settings.onDraw && "function" == typeof settings.onDraw && settings.onDraw.apply(self), void 0)
        }

        function stopDrawing(e) {
            e ? drawLine(e, 1) : (touchable ? canvas.each(function () {
                this.removeEventListener("touchmove", drawLine)
            }) : canvas.unbind("mousemove.signaturepad"), output.length > 0 && settings.onDrawEnd && "function" == typeof settings.onDrawEnd && settings.onDrawEnd.apply(self)), previous.x = null, previous.y = null, settings.output && output.length > 0 && $(settings.output, context).val(JSON.stringify(output))
        }

        function drawSigLine() {
            return settings.lineWidth ? (canvasContext.beginPath(), canvasContext.lineWidth = settings.lineWidth, canvasContext.strokeStyle = settings.lineColour, canvasContext.moveTo(settings.lineMargin, settings.lineTop), canvasContext.lineTo(element.width - settings.lineMargin, settings.lineTop), canvasContext.stroke(), canvasContext.closePath(), void 0) : !1
        }

        function clearCanvas() {
            canvasContext.clearRect(0, 0, element.width, element.height), canvasContext.fillStyle = settings.bgColour, canvasContext.fillRect(0, 0, element.width, element.height), settings.displayOnly || drawSigLine(), canvasContext.lineWidth = settings.penWidth, canvasContext.strokeStyle = settings.penColour, $(settings.output, context).val(""), output = [], stopDrawing()
        }

        function onMouseMove(e, o) {
            null == previous.x ? drawLine(e, 1) : drawLine(e, o)
        }

        function startDrawing(e, touchObject) {
            touchable ? touchObject.addEventListener("touchmove", onMouseMove, !1) : canvas.bind("mousemove.signaturepad", onMouseMove), drawLine(e, 1)
        }

        function disableCanvas() {
            eventsBound = !1, canvas.each(function () {
                this.removeEventListener && (this.removeEventListener("touchend", stopDrawing), this.removeEventListener("touchcancel", stopDrawing), this.removeEventListener("touchmove", drawLine)), this.ontouchstart && (this.ontouchstart = null)
            }), $(document).unbind("mouseup.signaturepad"), canvas.unbind("mousedown.signaturepad"), canvas.unbind("mousemove.signaturepad"), canvas.unbind("mouseleave.signaturepad"), $(settings.clear, context).unbind("click.signaturepad")
        }

        function initDrawEvents(e) {
            return eventsBound ? !1 : (eventsBound = !0, $("input").blur(), "undefined" != typeof e.changedTouches && (touchable = !0), touchable ? (canvas.each(function () {
                this.addEventListener("touchend", stopDrawing, !1), this.addEventListener("touchcancel", stopDrawing, !1)
            }), canvas.unbind("mousedown.signaturepad")) : ($(document).bind("mouseup.signaturepad", function () {
                mouseButtonDown && (stopDrawing(), clearMouseLeaveTimeout())
            }), canvas.bind("mouseleave.signaturepad", function (e) {
                mouseButtonDown && stopDrawing(e), mouseButtonDown && !mouseLeaveTimeout && (mouseLeaveTimeout = setTimeout(function () {
                    stopDrawing(), clearMouseLeaveTimeout()
                }, 500))
            }), canvas.each(function () {
                this.ontouchstart = null
            })), void 0)
        }

        function drawIt() {
            $(settings.typed, context).hide(), clearCanvas(), canvas.each(function () {
                this.ontouchstart = function (e) {
                    e.preventDefault(), mouseButtonDown = !0, initDrawEvents(e), startDrawing(e, this)
                }
            }), canvas.bind("mousedown.signaturepad", function (e) {
                e.preventDefault(), mouseButtonDown = !0, initDrawEvents(e), startDrawing(e)
            }), $(settings.clear, context).bind("click.signaturepad", function (e) {
                e.preventDefault(), clearCanvas()
            }), $(settings.typeIt, context).bind("click.signaturepad", function (e) {
                e.preventDefault(), typeIt()
            }), $(settings.drawIt, context).unbind("click.signaturepad"), $(settings.drawIt, context).bind("click.signaturepad", function (e) {
                e.preventDefault()
            }), $(settings.typeIt, context).removeClass(settings.currentClass), $(settings.drawIt, context).addClass(settings.currentClass), $(settings.sig, context).addClass(settings.currentClass), $(settings.typeItDesc, context).hide(), $(settings.drawItDesc, context).show(), $(settings.clear, context).show()
        }

        function typeIt() {
            clearCanvas(), disableCanvas(), $(settings.typed, context).show(), $(settings.drawIt, context).bind("click.signaturepad", function (e) {
                e.preventDefault(), drawIt()
            }), $(settings.typeIt, context).unbind("click.signaturepad"), $(settings.typeIt, context).bind("click.signaturepad", function (e) {
                e.preventDefault()
            }), $(settings.output, context).val(""), $(settings.drawIt, context).removeClass(settings.currentClass), $(settings.typeIt, context).addClass(settings.currentClass), $(settings.sig, context).removeClass(settings.currentClass), $(settings.drawItDesc, context).hide(), $(settings.clear, context).hide(), $(settings.typeItDesc, context).show(), typeItCurrentFontSize = typeItDefaultFontSize = $(settings.typed, context).css("font-size").replace(/px/, "")
        }

        function type(val) {
            var typed = $(settings.typed, context),
                cleanedVal = val.replace(/>/g, "&gt;").replace(/</g, "&lt;").trim(),
                oldLength = typeItNumChars,
                edgeOffset = .5 * typeItCurrentFontSize;
            if (typeItNumChars = cleanedVal.length, typed.html(cleanedVal), !cleanedVal) return typed.css("font-size", typeItDefaultFontSize + "px"), void 0;
            if (typeItNumChars > oldLength && typed.outerWidth() > element.width)
                for (; typed.outerWidth() > element.width;) typeItCurrentFontSize--, typed.css("font-size", typeItCurrentFontSize + "px");
            if (oldLength > typeItNumChars && typed.outerWidth() + edgeOffset < element.width && typeItDefaultFontSize > typeItCurrentFontSize)
                for (; typed.outerWidth() + edgeOffset < element.width && typeItDefaultFontSize > typeItCurrentFontSize;) typeItCurrentFontSize++, typed.css("font-size", typeItCurrentFontSize + "px")
        }

        function onBeforeValidate(context, settings) {
            $("p." + settings.errorClass, context).remove(), context.removeClass(settings.errorClass), $("input, label", context).removeClass(settings.errorClass)
        }

        function onFormError(errors, context, settings) {
            errors.nameInvalid && (context.prepend(['<p class="', settings.errorClass, '">', settings.errorMessage, "</p>"].join("")), $(settings.name, context).focus(), $(settings.name, context).addClass(settings.errorClass), $("label[for=" + $(settings.name).attr("id") + "]", context).addClass(settings.errorClass)), errors.drawInvalid && context.prepend(['<p class="', settings.errorClass, '">', settings.errorMessageDraw, "</p>"].join(""))
        }

        function validateForm() {
            var valid = !0,
                errors = {
                    drawInvalid: !1,
                    nameInvalid: !1
                },
                onBeforeArguments = [context, settings],
                onErrorArguments = [errors, context, settings];
            return settings.onBeforeValidate && "function" == typeof settings.onBeforeValidate ? settings.onBeforeValidate.apply(self, onBeforeArguments) : onBeforeValidate.apply(self, onBeforeArguments), settings.drawOnly && output.length < 1 && (errors.drawInvalid = !0, valid = !1), "" === $(settings.name, context).val() && (errors.nameInvalid = !0, valid = !1), settings.onFormError && "function" == typeof settings.onFormError ? settings.onFormError.apply(self, onErrorArguments) : onFormError.apply(self, onErrorArguments), valid
        }

        function drawSignature(paths, context, saveOutput) {
            for (var i in paths) "object" == typeof paths[i] && (context.beginPath(), context.moveTo(paths[i].mx, paths[i].my), context.lineTo(paths[i].lx, paths[i].ly), context.lineCap = settings.penCap, context.stroke(), context.closePath(), saveOutput && output.push({
                lx: paths[i].lx,
                ly: paths[i].ly,
                mx: paths[i].mx,
                my: paths[i].my
            }))
        }

        function init() {
            parseFloat((/CPU.+OS ([0-9_]{3}).*AppleWebkit.*Mobile/i.exec(navigator.userAgent) || [0, "4_2"])[1].replace("_", ".")) < 4.1 && ($.fn.Oldoffset = $.fn.offset, $.fn.offset = function () {
                var result = $(this).Oldoffset();
                return result.top -= window.scrollY, result.left -= window.scrollX, result
            }), $(settings.typed, context).bind("selectstart.signaturepad", function (e) {
                return $(e.target).is(":input")
            }), canvas.bind("selectstart.signaturepad", function (e) {
                return $(e.target).is(":input")
            }), !element.getContext && FlashCanvas && FlashCanvas.initElement(element), element.getContext && (canvasContext = element.getContext("2d"), $(settings.sig, context).show(), settings.displayOnly || (settings.drawOnly || ($(settings.name, context).bind("keyup.signaturepad", function () {
                type($(this).val())
            }), $(settings.name, context).bind("blur.signaturepad", function () {
                type($(this).val())
            }), $(settings.drawIt, context).bind("click.signaturepad", function (e) {
                e.preventDefault(), drawIt()
            })), settings.drawOnly || "drawIt" === settings.defaultAction ? drawIt() : typeIt(), settings.validateFields && ($(selector).is("form") ? $(selector).bind("submit.signaturepad", function () {
                return validateForm()
            }) : $(selector).parents("form").bind("submit.signaturepad", function () {
                return validateForm()
            })), $(settings.sigNav, context).show()))
        }
        var self = this,
            settings = $.extend({}, $.fn.signaturePad.defaults, options),
            context = $(selector),
            canvas = $(settings.canvas, context),
            element = canvas.get(0),
            canvasContext = null,
            previous = {
                x: null,
                y: null
            },
            output = [],
            mouseLeaveTimeout = !1,
            mouseButtonDown = !1,
            touchable = !1,
            eventsBound = !1,
            typeItDefaultFontSize = 30,
            typeItCurrentFontSize = typeItDefaultFontSize,
            typeItNumChars = 0;
        $.extend(self, {
            init: function () {
                init()
            },
            updateOptions: function (options) {
                $.extend(settings, options)
            },
            regenerate: function (paths) {
                self.clearCanvas(), $(settings.typed, context).hide(), "string" == typeof paths && (paths = JSON.parse(paths)), drawSignature(paths, canvasContext, !0), settings.output && $(settings.output, context).length > 0 && $(settings.output, context).val(JSON.stringify(output))
            },
            clearCanvas: function () {
                clearCanvas()
            },
            getSignature: function () {
                return output
            },
            getSignatureString: function () {
                return JSON.stringify(output)
            },
            getSignatureImage: function () {
                var tmpCanvas = document.createElement("canvas"),
                    tmpContext = null,
                    data = null;
                return tmpCanvas.style.position = "absolute", tmpCanvas.style.top = "-999em", tmpCanvas.width = element.width, tmpCanvas.height = element.height, document.body.appendChild(tmpCanvas), !tmpCanvas.getContext && FlashCanvas && FlashCanvas.initElement(tmpCanvas), tmpContext = tmpCanvas.getContext("2d"), tmpContext.fillStyle = settings.bgColour, tmpContext.fillRect(0, 0, element.width, element.height), tmpContext.lineWidth = settings.penWidth, tmpContext.strokeStyle = settings.penColour, drawSignature(output, tmpContext), data = tmpCanvas.toDataURL.apply(tmpCanvas, arguments), document.body.removeChild(tmpCanvas), tmpCanvas = null, data
            },
            validateForm: function () {
                return validateForm()
            }
        })
    }
    $.fn.signaturePad = function (options) {
        var api = null;
        return this.each(function () {
            $.data(this, "plugin-signaturePad") ? (api = $.data(this, "plugin-signaturePad"), api.updateOptions(options)) : (api = new SignaturePad(this, options), api.init(), $.data(this, "plugin-signaturePad", api))
        }), api
    }, $.fn.signaturePad.defaults = {
        defaultAction: "typeIt",
        displayOnly: !1,
        drawOnly: !1,
        canvas: "canvas",
        sig: ".sig",
        sigNav: ".sigNav",
        bgColour: "#ffffff",
        penColour: "#145394",
        penWidth: 2,
        penCap: "round",
        lineColour: "#ccc",
        lineWidth: 2,
        lineMargin: 5,
        lineTop: 35,
        name: ".name",
        typed: ".typed",
        clear: ".clearButton",
        typeIt: ".typeIt a",
        drawIt: ".drawIt a",
        typeItDesc: ".typeItDesc",
        drawItDesc: ".drawItDesc",
        output: ".output",
        currentClass: "current",
        validateFields: !0,
        errorClass: "error",
        errorMessage: "Please enter your name",
        errorMessageDraw: "Please sign the document",
        onBeforeValidate: null,
        onFormError: null,
        onDraw: null,
        onDrawEnd: null
    }
}(jQuery);