!function(n) {
    "use strict";
    function r(n, r, t) {
        return t.a = n,
        t.f = r,
        t
    }
    function b(t) {
        return r(2, t, function(r) {
            return function(n) {
                return t(r, n)
            }
        })
    }
    function E(e) {
        return r(3, e, function(t) {
            return function(r) {
                return function(n) {
                    return e(t, r, n)
                }
            }
        })
    }
    function f(a) {
        return r(4, a, function(e) {
            return function(t) {
                return function(r) {
                    return function(n) {
                        return a(e, t, r, n)
                    }
                }
            }
        })
    }
    function t(u) {
        return r(5, u, function(a) {
            return function(e) {
                return function(t) {
                    return function(r) {
                        return function(n) {
                            return u(a, e, t, r, n)
                        }
                    }
                }
            }
        })
    }
    function e(c) {
        return r(6, c, function(u) {
            return function(a) {
                return function(e) {
                    return function(t) {
                        return function(r) {
                            return function(n) {
                                return c(u, a, e, t, r, n)
                            }
                        }
                    }
                }
            }
        })
    }
    function a(i) {
        return r(7, i, function(c) {
            return function(u) {
                return function(a) {
                    return function(e) {
                        return function(t) {
                            return function(r) {
                                return function(n) {
                                    return i(c, u, a, e, t, r, n)
                                }
                            }
                        }
                    }
                }
            }
        })
    }
    function u(o) {
        return r(8, o, function(i) {
            return function(c) {
                return function(u) {
                    return function(a) {
                        return function(e) {
                            return function(t) {
                                return function(r) {
                                    return function(n) {
                                        return o(i, c, u, a, e, t, r, n)
                                    }
                                }
                            }
                        }
                    }
                }
            }
        })
    }
    function C(n, r, t) {
        return 2 === n.a ? n.f(r, t) : n(r)(t)
    }
    function D(n, r, t, e) {
        return 3 === n.a ? n.f(r, t, e) : n(r)(t)(e)
    }
    function j(n, r, t, e, a) {
        return 4 === n.a ? n.f(r, t, e, a) : n(r)(t)(e)(a)
    }
    function d(n, r, t, e, a, u) {
        return 5 === n.a ? n.f(r, t, e, a, u) : n(r)(t)(e)(a)(u)
    }
    function s(n, r, t, e, a, u, c) {
        return 6 === n.a ? n.f(r, t, e, a, u, c) : n(r)(t)(e)(a)(u)(c)
    }
    function c(n, r, t, e, a, u, c, i, o) {
        return 8 === n.a ? n.f(r, t, e, a, u, c, i, o) : n(r)(t)(e)(a)(u)(c)(i)(o)
    }
    var i = E(function(n, r, t) {
        for (var e = Array(n), a = 0; a < n; a++)
            e[a] = t(r + a);
        return e
    })
      , o = b(function(n, r) {
        for (var t = Array(n), e = 0; e < n && r.b; e++)
            t[e] = r.a,
            r = r.b;
        return t.length = e,
        {
            a: t,
            b: r
        }
    });
    function l(n) {
        throw Error("https://github.com/elm/core/blob/1.0.0/hints/" + n + ".md")
    }
    function h(n, r) {
        for (var t, e = [], a = p(n, r, 0, e); a && (t = e.pop()); a = p(t.a, t.b, 0, e))
            ;
        return a
    }
    function p(n, r, t, e) {
        if (n === r)
            return !0;
        if ("object" != typeof n || null === n || null === r)
            return "function" == typeof n && l(5),
            !1;
        if (100 < t)
            return e.push({
                a: n,
                b: r
            }),
            !0;
        for (var a in n.$ < 0 && (n = Or(n),
        r = Or(r)),
        n)
            if (!p(n[a], r[a], t + 1, e))
                return !1;
        return !0
    }
    var v = b(h);
    function $(n, r, t) {
        if ("object" != typeof n)
            return n === r ? 0 : n < r ? -1 : 1;
        if (void 0 === n.$)
            return (t = $(n.a, r.a)) || (t = $(n.b, r.b)) ? t : $(n.c, r.c);
        for (; n.b && r.b && !(t = $(n.a, r.a)); n = n.b,
        r = r.b)
            ;
        return t || (n.b ? 1 : r.b ? -1 : 0)
    }
    var g = b(function(n, r) {
        r = $(n, r);
        return r < 0 ? Dr : r ? Cr : Ar
    })
      , w = 0;
    function m(n, r) {
        var t, e = {};
        for (t in n)
            e[t] = n[t];
        for (t in r)
            e[t] = r[t];
        return e
    }
    function R(n, r) {
        if ("string" == typeof n)
            return n + r;
        if (!n.b)
            return r;
        var t = {
            $: 1,
            a: n.a,
            b: r
        };
        n = n.b;
        for (var e = t; n.b; n = n.b)
            e = e.b = {
                $: 1,
                a: n.a,
                b: r
            };
        return t
    }
    var T = {
        $: 0
    };
    function x(n, r) {
        return {
            $: 1,
            a: n,
            b: r
        }
    }
    var y = b(x);
    function N(n) {
        for (var r = T, t = n.length; t--; )
            r = {
                $: 1,
                a: n[t],
                b: r
            };
        return r
    }
    function k(n) {
        for (var r = []; n.b; n = n.b)
            r.push(n.a);
        return r
    }
    var z = E(function(n, r, t) {
        for (var e = []; r.b && t.b; r = r.b,
        t = t.b)
            e.push(C(n, r.a, t.a));
        return N(e)
    })
      , I = b(function(n, r) {
        r %= n;
        return 0 === n ? l(11) : 0 < r && n < 0 || r < 0 && 0 < n ? r + n : r
    });
    var S = Math.ceil
      , L = Math.floor
      , O = Math.round
      , A = Math.log;
    var _ = b(function(n, r) {
        return n + r
    });
    var W = E(function(n, r, t) {
        for (var e = t.length; e--; ) {
            var a = t[e]
              , u = t.charCodeAt(e);
            r = C(n, a = u >= 56320 && 57343 >= u ? t[--e] + a : a, r)
        }
        return r
    })
      , H = b(function(n, r) {
        return r.join(n)
    });
    function q(n) {
        return n + ""
    }
    var F = {
        $: 2,
        b: function(n) {
            return "number" != typeof n || (n <= -2147483647 || 2147483647 <= n || (0 | n) !== n) && (!isFinite(n) || n % 1) ? en("an INT", n) : qr(n)
        }
    }
      , B = {
        $: 2,
        b: function(n) {
            return "boolean" == typeof n ? qr(n) : en("a BOOL", n)
        }
    }
      , P = {
        $: 2,
        b: function(n) {
            return qr(n)
        }
    }
      , G = {
        $: 2,
        b: function(n) {
            return "string" == typeof n ? qr(n) : n instanceof String ? qr(n + "") : en("a STRING", n)
        }
    };
    var M = b(function(n, r) {
        return {
            $: 6,
            d: n,
            b: r
        }
    });
    var U = b(function(n, r) {
        return {
            $: 10,
            b: r,
            h: n
        }
    });
    var K = b(function(n, r) {
        return {
            $: 9,
            f: n,
            g: [r]
        }
    })
      , Y = E(function(n, r, t) {
        return {
            $: 9,
            f: n,
            g: [r, t]
        }
    })
      , V = f(function(n, r, t, e) {
        return {
            $: 9,
            f: n,
            g: [r, t, e]
        }
    })
      , J = e(function(n, r, t, e, a, u) {
        return {
            $: 9,
            f: n,
            g: [r, t, e, a, u]
        }
    })
      , Q = u(function(n, r, t, e, a, u, c, i) {
        return {
            $: 9,
            f: n,
            g: [r, t, e, a, u, c, i]
        }
    })
      , X = b(Z);
    function Z(n, r) {
        switch (n.$) {
        case 2:
            return n.b(r);
        case 5:
            return null === r ? qr(n.c) : en("null", r);
        case 3:
            return rn(r) ? nn(n.b, r, N) : en("a LIST", r);
        case 4:
            return rn(r) ? nn(n.b, r, tn) : en("an ARRAY", r);
        case 6:
            var t = n.d;
            if ("object" != typeof r || null === r || !(t in r))
                return en("an OBJECT with a field named `" + t + "`", r);
            var e = Z(n.b, r[t]);
            return vt(e) ? e : Rr(C(Wr, t, e.a));
        case 7:
            t = n.e;
            if (!rn(r))
                return en("an ARRAY", r);
            if (r.length <= t)
                return en("a LONGER array. Need index " + t + " but only see " + r.length + " entries", r);
            e = Z(n.b, r[t]);
            return vt(e) ? e : Rr(C(Hr, t, e.a));
        case 8:
            if ("object" != typeof r || null === r || rn(r))
                return en("an OBJECT", r);
            var a, u = T;
            for (a in r)
                if (r.hasOwnProperty(a)) {
                    e = Z(n.b, r[a]);
                    if (!vt(e))
                        return Rr(C(Wr, a, e.a));
                    u = {
                        $: 1,
                        a: {
                            a: a,
                            b: e.a
                        },
                        b: u
                    }
                }
            return qr(Qr(u));
        case 9:
            for (var c = n.f, i = n.g, o = 0; o < i.length; o++) {
                e = Z(i[o], r);
                if (!vt(e))
                    return e;
                c = c(e.a)
            }
            return qr(c);
        case 10:
            e = Z(n.b, r);
            return vt(e) ? Z(n.h(e.a), r) : e;
        case 11:
            for (var f = T, s = n.g; s.b; s = s.b) {
                e = Z(s.a, r);
                if (vt(e))
                    return e;
                f = {
                    $: 1,
                    a: e.a,
                    b: f
                }
            }
            return Rr(Fr(Qr(f)));
        case 1:
            return Rr(C(_r, n.a, r));
        case 0:
            return qr(n.a)
        }
    }
    function nn(n, r, t) {
        for (var e = r.length, a = Array(e), u = 0; u < e; u++) {
            var c = Z(n, r[u]);
            if (!vt(c))
                return Rr(C(Hr, u, c.a));
            a[u] = c.a
        }
        return qr(t(a))
    }
    function rn(n) {
        return Array.isArray(n) || "undefined" != typeof FileList && n instanceof FileList
    }
    function tn(r) {
        return C(pt, r.length, function(n) {
            return r[n]
        })
    }
    function en(n, r) {
        return Rr(C(_r, "Expecting " + n, r))
    }
    function an(n, r) {
        if (n === r)
            return !0;
        if (n.$ !== r.$)
            return !1;
        switch (n.$) {
        case 0:
        case 1:
            return n.a === r.a;
        case 2:
            return n.b === r.b;
        case 5:
            return n.c === r.c;
        case 3:
        case 4:
        case 8:
            return an(n.b, r.b);
        case 6:
            return n.d === r.d && an(n.b, r.b);
        case 7:
            return n.e === r.e && an(n.b, r.b);
        case 9:
            return n.f === r.f && un(n.g, r.g);
        case 10:
            return n.h === r.h && an(n.b, r.b);
        case 11:
            return un(n.g, r.g)
        }
    }
    function un(n, r) {
        var t = n.length;
        if (t !== r.length)
            return !1;
        for (var e = 0; e < t; e++)
            if (!an(n[e], r[e]))
                return !1;
        return !0
    }
    var cn = b(function(n, r) {
        return JSON.stringify(r, null, n) + ""
    });
    function on(n) {
        return n
    }
    var fn = E(function(n, r, t) {
        return t[n] = r,
        t
    });
    function sn(n) {
        return {
            $: 0,
            a: n
        }
    }
    var bn = b(function(n, r) {
        return {
            $: 3,
            b: n,
            d: r
        }
    });
    var dn = 0;
    function ln(n) {
        n = {
            $: 0,
            e: dn++,
            f: n,
            g: null,
            h: []
        };
        return wn(n),
        n
    }
    function hn(r) {
        return {
            $: 2,
            b: function(n) {
                n({
                    $: 0,
                    a: ln(r)
                })
            },
            c: null
        }
    }
    function pn(n, r) {
        n.h.push(r),
        wn(n)
    }
    var vn = b(function(r, t) {
        return {
            $: 2,
            b: function(n) {
                pn(r, t),
                n({
                    $: 0,
                    a: w
                })
            },
            c: null
        }
    });
    var $n = !1
      , gn = [];
    function wn(n) {
        if (gn.push(n),
        !$n) {
            for ($n = !0; n = gn.shift(); )
                !function(r) {
                    for (; r.f; ) {
                        var n = r.f.$;
                        if (0 === n || 1 === n) {
                            for (; r.g && r.g.$ !== n; )
                                r.g = r.g.i;
                            if (!r.g)
                                return;
                            r.f = r.g.b(r.f.a),
                            r.g = r.g.i
                        } else {
                            if (2 === n)
                                return r.f.c = r.f.b(function(n) {
                                    r.f = n,
                                    wn(r)
                                });
                            if (5 === n) {
                                if (0 === r.h.length)
                                    return;
                                r.f = r.f.b(r.h.shift())
                            } else
                                r.g = {
                                    $: 3 === n ? 0 : 1,
                                    b: r.f.b,
                                    i: r.g
                                },
                                r.f = r.f.d
                        }
                    }
                }(n);
            $n = !1
        }
    }
    function mn(n, r, t, e, a, u) {
        r = C(X, n, r ? r.flags : void 0);
        vt(r) || l(2);
        var c = {}
          , r = t(r.a)
          , i = r.a
          , o = u(f, i)
          , u = function(n, r) {
            var t, e;
            for (e in xn) {
                var a = xn[e];
                a.a && ((t = t || {})[e] = a.a(e, r)),
                n[e] = function(n, r) {
                    var e = {
                        g: r,
                        h: void 0
                    }
                      , a = n.c
                      , u = n.d
                      , c = n.e
                      , i = n.f;
                    function o(t) {
                        return C(bn, o, {
                            $: 5,
                            b: function(n) {
                                var r = n.a;
                                return 0 === n.$ ? D(u, e, r, t) : c && i ? j(a, e, r.i, r.j, t) : D(a, e, c ? r.i : r.j, t)
                            }
                        })
                    }
                    return e.h = ln(C(bn, o, n.b))
                }(a, r)
            }
            return t
        }(c, f);
        function f(n, r) {
            n = C(e, n, i);
            o(i = n.a, r),
            Nn(c, n.b, a(i))
        }
        return Nn(c, r.b, a(i)),
        u ? {
            ports: u
        } : {}
    }
    var xn = {};
    var yn = b(function(r, t) {
        return {
            $: 2,
            b: function(n) {
                r.g(t),
                n({
                    $: 0,
                    a: w
                })
            },
            c: null
        }
    })
      , kn = b(function(n, r) {
        return C(vn, n.h, {
            $: 0,
            a: r
        })
    });
    function zn(r) {
        return function(n) {
            return {
                $: 1,
                k: r,
                l: n
            }
        }
    }
    function En(n) {
        return {
            $: 2,
            m: n
        }
    }
    var jn = []
      , Tn = !1;
    function Nn(n, r, t) {
        if (jn.push({
            p: n,
            q: r,
            r: t
        }),
        !Tn) {
            Tn = !0;
            for (var e; e = jn.shift(); )
                !function(n, r, t) {
                    var e, a = {};
                    for (e in In(!0, r, a, null),
                    In(!1, t, a, null),
                    n)
                        pn(n[e], {
                            $: "fx",
                            a: a[e] || {
                                i: T,
                                j: T
                            }
                        })
                }(e.p, e.q, e.r);
            Tn = !1
        }
    }
    function In(n, r, t, e) {
        switch (r.$) {
        case 1:
            var a = r.k
              , u = function(n, r, t, e) {
                function a(n) {
                    for (var r = t; r; r = r.t)
                        n = r.s(n);
                    return n
                }
                return C(n ? xn[r].e : xn[r].f, a, e)
            }(n, a, e, r.l);
            return void (t[a] = function(n, r, t) {
                return t = t || {
                    i: T,
                    j: T
                },
                n ? t.i = {
                    $: 1,
                    a: r,
                    b: t.i
                } : t.j = {
                    $: 1,
                    a: r,
                    b: t.j
                },
                t
            }(n, u, t[a]));
        case 2:
            for (var c = r.m; c.b; c = c.b)
                In(n, c.a, t, e);
            return;
        case 3:
            return void In(n, r.o, t, {
                s: r.n,
                t: e
            })
        }
    }
    function Sn(n) {
        xn[n] && l(3)
    }
    function Ln(n, r) {
        return Sn(n),
        xn[n] = {
            e: On,
            u: r,
            a: An
        },
        zn(n)
    }
    var On = b(function(n, r) {
        return r
    });
    function An(n) {
        var t, c = [], i = xn[n].u, o = (t = 0,
        {
            $: 2,
            b: function(n) {
                var r = setTimeout(function() {
                    n({
                        $: 0,
                        a: w
                    })
                }, t);
                return function() {
                    clearTimeout(r)
                }
            },
            c: null
        });
        return xn[n].b = o,
        xn[n].c = E(function(n, r, t) {
            for (; r.b; r = r.b)
                for (var e = c, a = i(r.a), u = 0; u < e.length; u++)
                    e[u](a);
            return o
        }),
        {
            subscribe: function(n) {
                c.push(n)
            },
            unsubscribe: function(n) {
                (n = (c = c.slice()).indexOf(n)) < 0 || c.splice(n, 1)
            }
        }
    }
    var Cn, Dn = b(function(r, t) {
        return function(n) {
            return r(t(n))
        }
    });
    function Rn(n, e) {
        var a = T
          , u = xn[n].u
          , c = {
            $: 0,
            a: null
        };
        return xn[n].b = c,
        xn[n].c = E(function(n, r, t) {
            return a = r,
            c
        }),
        {
            send: function(n) {
                vt(n = C(X, u, n)) || l(4);
                for (var r = n.a, t = a; t.b; t = t.b)
                    e(t.a(r))
            }
        }
    }
    var _n = "undefined" != typeof document ? document : {};
    function Wn(n) {
        return {
            $: 0,
            a: n
        }
    }
    var Hn = b(function(u, c) {
        return b(function(n, r) {
            for (var t = [], e = 0; r.b; r = r.b) {
                var a = r.a;
                e += a.b || 0,
                t.push(a)
            }
            return e += t.length,
            {
                $: 1,
                c: c,
                d: Qn(n),
                e: t,
                f: u,
                b: e
            }
        })
    })(void 0)
      , qn = b(function(u, c) {
        return b(function(n, r) {
            for (var t = [], e = 0; r.b; r = r.b) {
                var a = r.a;
                e += a.b.b || 0,
                t.push(a)
            }
            return e += t.length,
            {
                $: 2,
                c: c,
                d: Qn(n),
                e: t,
                f: u,
                b: e
            }
        })
    })(void 0);
    var Fn = b(function(n, r) {
        return {
            $: 4,
            j: n,
            k: r,
            b: 1 + (r.b || 0)
        }
    });
    var Bn = b(function(n, r) {
        return {
            $: "a0",
            n: n,
            o: r
        }
    })
      , Pn = b(function(n, r) {
        return {
            $: "a2",
            n: n,
            o: r
        }
    })
      , Gn = b(function(n, r) {
        return {
            $: "a3",
            n: n,
            o: r
        }
    });
    function Mn(n) {
        return "script" == n ? "p" : n
    }
    function Un(n) {
        return /^\s*(javascript:|data:text\/html)/i.test(n) ? "" : n
    }
    var Kn = b(function(n, r) {
        return "a0" === r.$ ? C(Bn, r.n, function(n, r) {
            var t = yt(r);
            return {
                $: r.$,
                a: t ? D(mt, t < 3 ? Vn : Jn, xt(n), r.a) : C(wt, n, r.a)
            }
        }(n, r.o)) : r
    });
    var Yn, Vn = b(function(n, r) {
        return {
            a: n(r.a),
            b: r.b
        }
    }), Jn = b(function(n, r) {
        return {
            ab: n(r.ab),
            bn: r.bn,
            bi: r.bi
        }
    });
    function Qn(n) {
        for (var r = {}; n.b; n = n.b) {
            var t = n.a
              , e = t.$
              , a = t.n
              , u = t.o;
            "a2" !== e ? (t = r[e] || (r[e] = {}),
            "a3" === e && "class" === a ? Xn(t, a, u) : t[a] = u) : "className" === a ? Xn(r, a, u) : r[a] = u
        }
        return r
    }
    function Xn(n, r, t) {
        var e = n[r];
        n[r] = e ? e + " " + t : t
    }
    function Zn(n, r) {
        var t = n.$;
        if (5 === t)
            return Zn(n.k || (n.k = n.m()), r);
        if (0 === t)
            return _n.createTextNode(n.a);
        if (4 === t) {
            for (var e = n.k, a = n.j; 4 === e.$; )
                "object" != typeof a ? a = [a, e.j] : a.push(e.j),
                e = e.k;
            var u = {
                j: a,
                p: r
            };
            return (c = Zn(e, u)).elm_event_node_ref = u,
            c
        }
        if (3 === t)
            return nr(c = n.h(n.g), r, n.d),
            c;
        var c = n.f ? _n.createElementNS(n.f, n.c) : _n.createElement(n.c);
        Cn && "a" == n.c && c.addEventListener("click", Cn(c)),
        nr(c, r, n.d);
        for (var i = n.e, o = 0; o < i.length; o++)
            c.appendChild(Zn(1 === t ? i[o] : i[o].b, r));
        return c
    }
    function nr(n, r, t) {
        for (var e in t) {
            var a = t[e];
            "a1" === e ? function(n, r) {
                var t, e = n.style;
                for (t in r)
                    e[t] = r[t]
            }(n, a) : "a0" === e ? function(n, r, t) {
                var e, a = n.elmFs || (n.elmFs = {});
                for (e in t) {
                    var u = t[e]
                      , c = a[e];
                    if (u) {
                        if (c) {
                            if (c.q.$ === u.$) {
                                c.q = u;
                                continue
                            }
                            n.removeEventListener(e, c)
                        }
                        c = function(o, n) {
                            function f(n) {
                                var r = f.q
                                  , t = Z(r.a, n);
                                if (vt(t)) {
                                    for (var e, a = yt(r), r = t.a, u = a ? a < 3 ? r.a : r.ab : r, t = 1 == a ? r.b : 3 == a && r.bn, c = (t && n.stopPropagation(),
                                    (2 == a ? r.b : 3 == a && r.bi) && n.preventDefault(),
                                    o); e = c.j; ) {
                                        if ("function" == typeof e)
                                            u = e(u);
                                        else
                                            for (var i = e.length; i--; )
                                                u = e[i](u);
                                        c = c.p
                                    }
                                    c(u, t)
                                }
                            }
                            return f.q = n,
                            f
                        }(r, u),
                        n.addEventListener(e, c, Yn && {
                            passive: yt(u) < 2
                        }),
                        a[e] = c
                    } else
                        n.removeEventListener(e, c),
                        a[e] = void 0
                }
            }(n, r, a) : "a3" === e ? function(n, r) {
                for (var t in r) {
                    var e = r[t];
                    void 0 !== e ? n.setAttribute(t, e) : n.removeAttribute(t)
                }
            }(n, a) : "a4" === e ? function(n, r) {
                for (var t in r) {
                    var e = r[t]
                      , a = e.f
                      , e = e.o;
                    void 0 !== e ? n.setAttributeNS(a, t, e) : n.removeAttributeNS(a, t)
                }
            }(n, a) : ("value" !== e && "checked" !== e || n[e] !== a) && (n[e] = a)
        }
    }
    try {
        window.addEventListener("t", null, Object.defineProperty({}, "passive", {
            get: function() {
                Yn = !0
            }
        }))
    } catch (n) {}
    function rr(n, r) {
        var t = [];
        return er(n, r, t, 0),
        t
    }
    function tr(n, r, t, e) {
        e = {
            $: r,
            r: t,
            s: e,
            t: void 0,
            u: void 0
        };
        return n.push(e),
        e
    }
    function er(n, r, t, e) {
        if (n !== r) {
            var a = n.$
              , u = r.$;
            if (a !== u) {
                if (1 !== a || 2 !== u)
                    return void tr(t, 0, e, r);
                r = function(n) {
                    for (var r = n.e, t = r.length, e = Array(t), a = 0; a < t; a++)
                        e[a] = r[a].b;
                    return {
                        $: 1,
                        c: n.c,
                        d: n.d,
                        e: e,
                        f: n.f,
                        b: n.b
                    }
                }(r),
                u = 1
            }
            switch (u) {
            case 5:
                for (var c = n.l, i = r.l, o = c.length, f = o === i.length; f && o--; )
                    f = c[o] === i[o];
                if (f)
                    return void (r.k = n.k);
                r.k = r.m();
                var s = [];
                return er(n.k, r.k, s, 0),
                void (0 < s.length && tr(t, 1, e, s));
            case 4:
                for (var b = n.j, d = r.j, l = !1, h = n.k; 4 === h.$; )
                    l = !0,
                    "object" != typeof b ? b = [b, h.j] : b.push(h.j),
                    h = h.k;
                for (var p = r.k; 4 === p.$; )
                    l = !0,
                    "object" != typeof d ? d = [d, p.j] : d.push(p.j),
                    p = p.k;
                return l && b.length !== d.length ? void tr(t, 0, e, r) : ((l ? function(n, r) {
                    for (var t = 0; t < n.length; t++)
                        if (n[t] !== r[t])
                            return !1;
                    return !0
                }(b, d) : b === d) || tr(t, 2, e, d),
                void er(h, p, t, e + 1));
            case 0:
                return void (n.a !== r.a && tr(t, 3, e, r.a));
            case 1:
                return void ar(n, r, t, e, cr);
            case 2:
                return void ar(n, r, t, e, ir);
            case 3:
                if (n.h !== r.h)
                    return void tr(t, 0, e, r);
                s = ur(n.d, r.d);
                s && tr(t, 4, e, s);
                s = r.i(n.g, r.g);
                return void (s && tr(t, 5, e, s))
            }
        }
    }
    function ar(n, r, t, e, a) {
        var u;
        n.c === r.c && n.f === r.f ? ((u = ur(n.d, r.d)) && tr(t, 4, e, u),
        a(n, r, t, e)) : tr(t, 0, e, r)
    }
    function ur(n, r, t) {
        var e, a, u, c, i;
        for (a in n)
            "a1" !== a && "a0" !== a && "a3" !== a && "a4" !== a ? a in r ? (u = n[a]) === (c = r[a]) && "value" !== a && "checked" !== a || "a0" === t && function(n, r) {
                return n.$ == r.$ && an(n.a, r.a)
            }(u, c) || ((e = e || {})[a] = c) : (e = e || {})[a] = t ? "a1" === t ? "" : "a0" === t || "a3" === t ? void 0 : {
                f: n[a].f,
                o: void 0
            } : "string" == typeof n[a] ? "" : null : (c = ur(n[a], r[a] || {}, a)) && ((e = e || {})[a] = c);
        for (i in r)
            i in n || ((e = e || {})[i] = r[i]);
        return e
    }
    function cr(n, r, t, e) {
        var a = n.e
          , u = r.e
          , n = a.length
          , r = u.length;
        r < n ? tr(t, 6, e, {
            v: r,
            i: n - r
        }) : n < r && tr(t, 7, e, {
            v: n,
            e: u
        });
        for (var c = n < r ? n : r, i = 0; i < c; i++) {
            var o = a[i];
            er(o, u[i], t, ++e),
            e += o.b || 0
        }
    }
    function ir(n, r, t, e) {
        for (var a = [], u = {}, c = [], i = n.e, o = r.e, f = i.length, s = o.length, b = 0, d = 0, l = e; b < f && d < s; ) {
            var h = i[b]
              , p = o[d]
              , v = h.a
              , $ = p.a
              , g = h.b
              , w = p.b
              , m = void 0
              , x = void 0;
            if (v !== $) {
                var y, k, z, E, j = i[b + 1], T = o[d + 1];
                if (j && (k = j.b,
                x = $ === (y = j.a)),
                T && (E = T.b,
                m = v === (z = T.a)),
                m && x)
                    er(g, E, a, ++l),
                    fr(u, a, v, w, d, c),
                    l += g.b || 0,
                    sr(u, a, v, k, ++l),
                    l += k.b || 0,
                    b += 2,
                    d += 2;
                else if (m)
                    l++,
                    fr(u, a, $, w, d, c),
                    er(g, E, a, l),
                    l += g.b || 0,
                    b += 1,
                    d += 2;
                else if (x)
                    sr(u, a, v, g, ++l),
                    l += g.b || 0,
                    er(k, w, a, ++l),
                    l += k.b || 0,
                    b += 2,
                    d += 1;
                else {
                    if (!j || y !== z)
                        break;
                    sr(u, a, v, g, ++l),
                    fr(u, a, $, w, d, c),
                    l += g.b || 0,
                    er(k, E, a, ++l),
                    l += k.b || 0,
                    b += 2,
                    d += 2
                }
            } else
                er(g, w, a, ++l),
                l += g.b || 0,
                b++,
                d++
        }
        for (; b < f; ) {
            g = (h = i[b]).b;
            sr(u, a, h.a, g, ++l),
            l += g.b || 0,
            b++
        }
        for (; d < s; ) {
            var N = N || [];
            fr(u, a, (p = o[d]).a, p.b, void 0, N),
            d++
        }
        (0 < a.length || 0 < c.length || N) && tr(t, 8, e, {
            w: a,
            x: c,
            y: N
        })
    }
    var or = "_elmW6BL";
    function fr(n, r, t, e, a, u) {
        var c = n[t];
        if (!c)
            return u.push({
                r: a,
                A: c = {
                    c: 0,
                    z: e,
                    r: a,
                    s: void 0
                }
            }),
            void (n[t] = c);
        if (1 === c.c) {
            u.push({
                r: a,
                A: c
            }),
            c.c = 2;
            var i = [];
            return er(c.z, e, i, c.r),
            c.r = a,
            void (c.s.s = {
                w: i,
                A: c
            })
        }
        fr(n, r, t + or, e, a, u)
    }
    function sr(n, r, t, e, a) {
        var u = n[t];
        if (u) {
            if (0 === u.c) {
                u.c = 2;
                var c = [];
                return er(e, u.z, c, a),
                void tr(r, 9, a, {
                    w: c,
                    A: u
                })
            }
            sr(n, r, t + or, e, a)
        } else {
            r = tr(r, 9, a, void 0);
            n[t] = {
                c: 1,
                z: e,
                r: a,
                s: r
            }
        }
    }
    function br(n, r, t, e) {
        !function n(r, t, e, a, u, c, i) {
            var o = e[a];
            var f = o.r;
            for (; f === u; ) {
                var s, b = o.$;
                if (1 === b ? br(r, t.k, o.s, i) : 8 === b ? (o.t = r,
                o.u = i,
                0 < (s = o.s.w).length && n(r, t, s, 0, u, c, i)) : 9 === b ? (o.t = r,
                o.u = i,
                (b = o.s) && (b.A.s = r,
                0 < (s = b.w).length && n(r, t, s, 0, u, c, i))) : (o.t = r,
                o.u = i),
                !(o = e[++a]) || (f = o.r) > c)
                    return a
            }
            var d = t.$;
            if (4 === d) {
                for (var l = t.k; 4 === l.$; )
                    l = l.k;
                return n(r, l, e, a, u + 1, c, r.elm_event_node_ref)
            }
            var h = t.e;
            var p = r.childNodes;
            for (var v = 0; v < h.length; v++) {
                var $ = 1 === d ? h[v] : h[v].b
                  , g = ++u + ($.b || 0);
                if (u <= f && f <= g && (a = n(p[v], $, e, a, u, g, i),
                !(o = e[a]) || (f = o.r) > c))
                    return a;
                u = g
            }
            return a
        }(n, r, t, 0, 0, r.b, e)
    }
    function dr(n, r, t, e) {
        return 0 === t.length ? n : (br(n, r, t, e),
        lr(n, t))
    }
    function lr(n, r) {
        for (var t = 0; t < r.length; t++) {
            var e = r[t]
              , a = e.t
              , e = function(n, r) {
                switch (r.$) {
                case 0:
                    return function(n, r, t) {
                        var e = n.parentNode
                          , t = Zn(r, t);
                        t.elm_event_node_ref || (t.elm_event_node_ref = n.elm_event_node_ref);
                        e && t !== n && e.replaceChild(t, n);
                        return t
                    }(n, r.s, r.u);
                case 4:
                    return nr(n, r.u, r.s),
                    n;
                case 3:
                    return n.replaceData(0, n.length, r.s),
                    n;
                case 1:
                    return lr(n, r.s);
                case 2:
                    return n.elm_event_node_ref ? n.elm_event_node_ref.j = r.s : n.elm_event_node_ref = {
                        j: r.s,
                        p: r.u
                    },
                    n;
                case 6:
                    for (var t = r.s, e = 0; e < t.i; e++)
                        n.removeChild(n.childNodes[t.v]);
                    return n;
                case 7:
                    for (var a = (t = r.s).e, e = t.v, u = n.childNodes[e]; e < a.length; e++)
                        n.insertBefore(Zn(a[e], r.u), u);
                    return n;
                case 9:
                    if (!(t = r.s))
                        return n.parentNode.removeChild(n),
                        n;
                    var c = t.A;
                    return void 0 !== c.r && n.parentNode.removeChild(n),
                    c.s = lr(n, t.w),
                    n;
                case 8:
                    return function(n, r) {
                        var t = r.s
                          , e = function(n, r) {
                            if (n) {
                                for (var t = _n.createDocumentFragment(), e = 0; e < n.length; e++) {
                                    var a = n[e].A;
                                    t.appendChild(2 === a.c ? a.s : Zn(a.z, r.u))
                                }
                                return t
                            }
                        }(t.y, r);
                        n = lr(n, t.w);
                        for (var a = t.x, u = 0; u < a.length; u++) {
                            var c = a[u]
                              , i = c.A
                              , i = 2 === i.c ? i.s : Zn(i.z, r.u);
                            n.insertBefore(i, n.childNodes[c.r])
                        }
                        e && n.appendChild(e);
                        return n
                    }(n, r);
                case 5:
                    return r.s(n);
                default:
                    l(10)
                }
            }(a, e);
            a === n && (n = e)
        }
        return n
    }
    function hr(n) {
        if (3 === n.nodeType)
            return {
                $: 0,
                a: n.textContent
            };
        if (1 !== n.nodeType)
            return {
                $: 0,
                a: ""
            };
        for (var r = T, t = n.attributes, e = t.length; e--; )
            var a = t[e]
              , r = {
                $: 1,
                a: C(Gn, a.name, a.value),
                b: r
            };
        for (var u = n.tagName.toLowerCase(), c = T, i = n.childNodes, e = i.length; e--; )
            c = {
                $: 1,
                a: hr(i[e]),
                b: c
            };
        return D(Hn, u, r, c)
    }
    var pr = f(function(r, n, t, c) {
        return mn(n, c, r.c9, r.d0, r.dJ, function(t, n) {
            var e = r.d1
              , a = c.node
              , u = hr(a);
            return $r(n, function(n) {
                var r = e(n)
                  , n = rr(u, r);
                a = dr(a, u, n, t),
                u = r
            })
        })
    })
      , vr = "undefined" != typeof requestAnimationFrame ? requestAnimationFrame : function(n) {
        return setTimeout(n, 1e3 / 60)
    }
    ;
    function $r(t, e) {
        e(t);
        var a = 0;
        function u() {
            a = 1 === a ? 0 : (vr(u),
            e(t),
            1)
        }
        return function(n, r) {
            t = n,
            r ? (e(t),
            2 === a && (a = 1)) : (0 === a && vr(u),
            a = 2)
        }
    }
    var gr = {
        addEventListener: function() {},
        removeEventListener: function() {}
    }
      , wr = "undefined" != typeof document ? document : gr
      , mr = "undefined" != typeof window ? window : gr
      , xr = E(function(t, e, a) {
        return hn({
            $: 2,
            b: function(n) {
                function r(n) {
                    ln(a(n))
                }
                return t.addEventListener(e, r, Yn && {
                    passive: !0
                }),
                function() {
                    t.removeEventListener(e, r)
                }
            },
            c: null
        })
    })
      , yr = b(function(n, r) {
        r = Z(n, r);
        return vt(r) ? Br(r.a) : Pr
    });
    gr = b(function(t, e) {
        return {
            $: 2,
            b: function(n) {
                var r = setInterval(function() {
                    ln(e)
                }, t);
                return function() {
                    clearInterval(r)
                }
            },
            c: null
        }
    });
    function kr(n) {
        return D(Kr, b(function(n, r) {
            return r + 1
        }), 0, n)
    }
    function zr(n) {
        return 97 <= (n = Jr(n)) && n <= 122
    }
    function Er(n) {
        return (n = Jr(n)) <= 90 && 65 <= n
    }
    function jr(n) {
        return zr(n) || Er(n)
    }
    function Tr(n) {
        return n
    }
    function Nr(n) {
        return n.a
    }
    function Ir(n) {
        return D(Nt, Ot(Sr), jt(T), n)
    }
    var Sr = y
      , Lr = E(function(n, r, t) {
        for (; ; ) {
            if (-2 === t.$)
                return r;
            var e = t.d
              , a = n
              , u = D(n, t.b, t.c, D(Lr, n, r, t.e));
            n = a,
            r = u,
            t = e
        }
    })
      , Or = function(n) {
        return D(Lr, E(function(n, r, t) {
            return C(Sr, {
                a: n,
                b: r
            }, t)
        }), T, n)
    }
      , Ar = 1
      , Cr = 2
      , Dr = 0
      , Rr = function(n) {
        return {
            $: 1,
            a: n
        }
    }
      , _r = b(function(n, r) {
        return {
            $: 3,
            a: n,
            b: r
        }
    })
      , Wr = b(function(n, r) {
        return {
            $: 0,
            a: n,
            b: r
        }
    })
      , Hr = b(function(n, r) {
        return {
            $: 1,
            a: n,
            b: r
        }
    })
      , qr = function(n) {
        return {
            $: 0,
            a: n
        }
    }
      , Fr = function(n) {
        return {
            $: 2,
            a: n
        }
    }
      , Br = function(n) {
        return {
            $: 0,
            a: n
        }
    }
      , Pr = {
        $: 1
    }
      , Gr = cn
      , Mr = q
      , Ur = b(function(n, r) {
        return C(H, n, k(r))
    })
      , Kr = E(function(n, r, t) {
        for (; ; ) {
            if (!t.b)
                return r;
            var e = t.b
              , a = n
              , u = C(n, t.a, r);
            n = a,
            r = u,
            t = e
        }
    })
      , Yr = z
      , Vr = E(function(n, r, t) {
        for (; ; ) {
            if (1 <= $(n, r))
                return t;
            var e = n
              , a = r - 1
              , u = C(Sr, r, t);
            n = e,
            r = a,
            t = u
        }
    })
      , z = b(function(n, r) {
        return D(Vr, n, r, T)
    })
      , Jr = function(n) {
        var r = n.charCodeAt(0);
        return r < 55296 || 56319 < r ? r : 1024 * (r - 55296) + n.charCodeAt(1) - 56320 + 65536
    }
      , Qr = function(n) {
        return D(Kr, Sr, T, n)
    }
      , Xr = function(n) {
        var r = n.charCodeAt(0);
        return isNaN(r) ? Pr : Br(r < 55296 || 56319 < r ? {
            a: n[0],
            b: n.slice(1)
        } : {
            a: n[0] + n[1],
            b: n.slice(2)
        })
    }
      , Zr = f(function(n, r, t, e) {
        return {
            $: 0,
            a: n,
            b: r,
            c: t,
            d: e
        }
    })
      , nt = []
      , rt = S
      , tt = b(function(n, r) {
        return A(r) / A(n)
    })
      , et = rt(C(tt, 2, 32))
      , at = j(Zr, 0, et, nt, nt)
      , ut = i
      , ct = v
      , it = L
      , ot = function(n) {
        return n.length
    }
      , ft = b(function(n, r) {
        return 0 < $(n, r) ? n : r
    })
      , st = o
      , bt = b(function(n, r) {
        for (; ; ) {
            var t = C(st, 32, n)
              , e = t.b
              , t = C(Sr, {
                $: 0,
                a: t.a
            }, r);
            if (!e.b)
                return Qr(t);
            n = e,
            r = t
        }
    })
      , dt = b(function(n, r) {
        for (; ; ) {
            var t = rt(r / 32);
            if (1 === t)
                return C(st, 32, n).a;
            n = C(bt, n, T),
            r = t
        }
    })
      , lt = b(function(n, r) {
        if (r.f) {
            var t = 32 * r.f
              , e = it(C(tt, 32, t - 1))
              , n = n ? Qr(r.l) : r.l
              , n = C(dt, n, r.f);
            return j(Zr, ot(r.j) + t, C(ft, 5, e * et), n, r.j)
        }
        return j(Zr, ot(r.j), et, nt, r.j)
    })
      , ht = t(function(n, r, t, e, a) {
        for (; ; ) {
            if (r < 0)
                return C(lt, !1, {
                    l: e,
                    f: t / 32 | 0,
                    j: a
                });
            var u = {
                $: 1,
                a: D(ut, 32, r, n)
            };
            n = n,
            r = r - 32,
            t = t,
            e = C(Sr, u, e),
            a = a
        }
    })
      , pt = b(function(n, r) {
        if (0 < n) {
            var t = n % 32;
            return d(ht, r, n - t - 32, n, T, D(ut, t, n - t, r))
        }
        return at
    })
      , vt = function(n) {
        return !n.$
    }
      , $t = U
      , gt = B
      , wt = K
      , mt = Y
      , xt = function(n) {
        return {
            $: 0,
            a: n
        }
    }
      , yt = function(n) {
        switch (n.$) {
        case 0:
            return 0;
        case 1:
            return 1;
        case 2:
            return 2;
        default:
            return 3
        }
    }
      , kt = function(n) {
        return n
    }
      , zt = function(n) {
        return n.length
    }
      , Et = function(n) {
        for (; ; )
            0
    }
      , jt = sn
      , Y = jt(0)
      , Tt = f(function(n, r, t, e) {
        if (e.b) {
            var a = e.a
              , u = e.b;
            if (u.b) {
                var c = u.a
                  , i = u.b;
                if (i.b) {
                    e = i.a,
                    u = i.b;
                    if (u.b) {
                        i = u.b;
                        return C(n, a, C(n, c, C(n, e, C(n, u.a, 500 < t ? D(Kr, n, r, Qr(i)) : j(Tt, n, r, t + 1, i)))))
                    }
                    return C(n, a, C(n, c, C(n, e, r)))
                }
                return C(n, a, C(n, c, r))
            }
            return C(n, a, r)
        }
        return r
    })
      , Nt = E(function(n, r, t) {
        return j(Tt, n, r, 0, t)
    })
      , It = b(function(t, n) {
        return D(Nt, b(function(n, r) {
            return C(Sr, t(n), r)
        }), T, n)
    })
      , St = bn
      , Lt = b(function(r, n) {
        return C(St, function(n) {
            return jt(r(n))
        }, n)
    })
      , Ot = E(function(t, n, e) {
        return C(St, function(r) {
            return C(St, function(n) {
                return jt(C(t, r, n))
            }, e)
        }, n)
    })
      , At = yn
      , Ct = b(function(n, r) {
        return hn(C(St, At(n), r))
    })
      , yn = E(function(n, r, t) {
        return C(Lt, function(n) {
            return 0
        }, Ir(C(It, Ct(n), r)))
    });
    xn.Task = {
        b: Y,
        c: yn,
        d: E(function(n, r, t) {
            return jt(0)
        }),
        e: b(function(n, r) {
            return C(Lt, n, r)
        }),
        f: void 0
    };
    function Dt(n) {
        return {
            $: 4,
            a: n
        }
    }
    function Rt(n) {
        return {
            $: 0,
            a: n
        }
    }
    function _t(n) {
        return D(ce, Sr, T, n)
    }
    function Wt(r) {
        return ue(function(n) {
            return D(Yr, b(function(n, r) {
                switch (r) {
                case "correct":
                    return {
                        $: 1,
                        a: n
                    };
                case "present":
                    return {
                        $: 2,
                        a: n
                    };
                case "absent":
                    return {
                        $: 3,
                        a: n
                    };
                default:
                    return {
                        $: 0,
                        a: n
                    }
                }
            }), _t(r), n)
        })
    }
    function Ht(n) {
        return be(N([C(wt, Br, n), xt(Pr)]))
    }
    function qt(n) {
        return {
            $: 3,
            a: n
        }
    }
    var Ft, Bt = zn("Task"), Pt = b(function(n, r) {
        return Bt(C(Lt, n, r))
    }), pr = pr, Gt = M, Mt = {
        $: -2
    }, Ut = Mt, Kt = Ut, Yt = t(function(n, r, t, e, a) {
        return {
            $: -1,
            a: n,
            b: r,
            c: t,
            d: e,
            e: a
        }
    }), Vt = t(function(n, r, t, e, a) {
        if (-1 !== a.$ || a.a) {
            if (-1 !== e.$ || e.a || -1 !== e.d.$ || e.d.a)
                return d(Yt, n, r, t, e, a);
            var u = e.b
              , c = e.c
              , i = e.d
              , o = e.e;
            return d(Yt, 0, u, c, d(Yt, 1, i.b, i.c, i.d, i.e), d(Yt, 1, r, t, o, a))
        }
        var f = a.b
          , s = a.c
          , i = a.d
          , a = a.e;
        if (-1 !== e.$ || e.a)
            return d(Yt, n, f, s, d(Yt, 0, r, t, e, i), a);
        var u, c, o;
        return d(Yt, 0, r, t, d(Yt, 1, u = e.b, c = e.c, e.d, o = e.e), d(Yt, 1, f, s, i, a))
    }), Jt = g, Qt = E(function(n, r, t) {
        if (-2 === t.$)
            return d(Yt, 0, n, r, Mt, Mt);
        var e = t.a
          , a = t.b
          , u = t.c
          , c = t.d
          , i = t.e;
        switch (C(Jt, n, a)) {
        case 0:
            return d(Vt, e, a, u, D(Qt, n, r, c), i);
        case 1:
            return d(Yt, e, a, r, c, i);
        default:
            return d(Vt, e, a, u, c, D(Qt, n, r, i))
        }
    }), Xt = E(function(n, r, t) {
        t = D(Qt, n, r, t);
        if (-1 !== t.$ || t.a)
            return t;
        return d(Yt, 1, t.b, t.c, t.d, t.e)
    }), Zt = b(function(n, r) {
        return D(Xt, n, 0, r)
    }), M = b(function(n, r) {
        return {
            $: 0,
            a: n,
            b: r
        }
    }), ne = M, re = {
        $: 2,
        b: function(n) {
            n({
                $: 0,
                a: C(ne, -(new Date).getTimezoneOffset(), T)
            })
        },
        c: null
    }, te = X, ee = {
        ak: 0,
        Z: 0,
        _: 0,
        b: {
            aB: 0,
            L: 0,
            M: 0,
            N: 0,
            O: 0,
            P: 0,
            Q: 0
        },
        aa: 0
    }, ae = kt, ue = b(function(n, r) {
        return r.$ ? Pr : Br(n(r.a))
    }), ce = W, ie = E(function(n, r, t) {
        r = n(r);
        return r.$ ? t : C(Sr, r.a, t)
    }), oe = b(function(n, r) {
        return D(Nt, ie(n), T, r)
    }), fe = function(n) {
        return {
            $: 3,
            b: n
        }
    }, se = G, g = C(Gt, "boardState", fe(se)), W = function(n) {
        return {
            $: 5,
            c: n
        }
    }, be = function(n) {
        return {
            $: 11,
            g: n
        }
    }, G = C(Gt, "evaluations", fe((G = fe(se),
    be(N([W(Pr), C(wt, Br, G)]))))), de = b(function(n, r) {
        return {
            a: n,
            b: r
        }
    }), le = D(mt, de, g, G), he = C(wt, function(n) {
        switch (n) {
        case "WIN":
            return 1;
        case "FAIL":
            return 2;
        default:
            return 0
        }
    }, C(Gt, "gameStatus", se)), pe = F, ve = Ht(C(wt, ae, C(Gt, "lastCompletedTs", pe))), $e = Ht(C(wt, ae, C(Gt, "lastPlayedTs", pe))), ge = C(Gt, "solution", se), we = Q, Q = C(Gt, "guesses", c(we, a(function(n, r, t, e, a, u, c) {
        return {
            aB: c,
            L: n,
            M: r,
            N: t,
            O: e,
            P: a,
            Q: u
        }
    }), C(Gt, "1", pe), C(Gt, "2", pe), C(Gt, "3", pe), C(Gt, "4", pe), C(Gt, "5", pe), C(Gt, "6", pe), C(Gt, "fail", pe))), me = s(J, t(function(n, r, t, e, a) {
        return {
            ak: r,
            Z: e,
            _: a,
            b: n,
            aa: t
        }
    }), Q, C(Gt, "currentStreak", pe), C(Gt, "maxStreak", pe), C(Gt, "gamesPlayed", pe), C(Gt, "gamesWon", pe)), xe = j(V, E(function(n, r, t) {
        return {
            bD: r,
            bE: n,
            bS: t
        }
    }), Ht(C(Gt, "darkTheme", gt)), Ht(C(Gt, "colorBlindTheme", gt)), Ht(C(Gt, "largeKeyboard", gt))), ye = {
        a: C(It, Rt, _t("qwertyuiop")),
        b: C(It, Rt, _t("asdfghjkl⌫")),
        c: C(It, Rt, _t("zxcvbnm↵"))
    }, ke = function(n) {
        return n.a
    }, ze = b(function(n, r) {
        if (r.b) {
            var t = r.a
              , e = r.b
              , a = {
                a: n,
                b: t,
                c: h(ke(t), ke(n))
            };
            n: for (; ; ) {
                r: for (; ; ) {
                    if (!a.c)
                        return C(Sr, a.b, C(ze, n, e));
                    switch (a.b.$) {
                    case 0:
                        switch (a.a.$) {
                        case 1:
                            break n;
                        case 2:
                            break r;
                        case 3:
                            return C(Sr, {
                                $: 3,
                                a: a.a.a
                            }, C(ze, n, e));
                        default:
                            return C(Sr, {
                                $: 0,
                                a: a.b.a
                            }, C(ze, n, e))
                        }
                    case 1:
                        if (1 !== a.a.$)
                            return C(Sr, {
                                $: 1,
                                a: a.b.a
                            }, C(ze, n, e));
                        break n;
                    case 2:
                        switch (a.a.$) {
                        case 1:
                            break n;
                        case 2:
                            break r;
                        default:
                            return C(Sr, {
                                $: 2,
                                a: a.b.a
                            }, C(ze, n, e))
                        }
                    default:
                        switch (a.a.$) {
                        case 1:
                            break n;
                        case 2:
                            break r;
                        default:
                            return C(Sr, {
                                $: 3,
                                a: a.b.a
                            }, C(ze, n, e))
                        }
                    }
                }
                return C(Sr, {
                    $: 2,
                    a: a.a.a
                }, C(ze, n, e))
            }
            return C(Sr, {
                $: 1,
                a: a.a.a
            }, C(ze, n, e))
        }
        return T
    }), Ee = b(function(n, r) {
        for (; ; ) {
            var t = r.b
              , e = r.c;
            if (!n.b)
                return r;
            var a = n.a;
            n = n.b,
            r = {
                a: C(ze, a, r.a),
                b: C(ze, a, t),
                c: C(ze, a, e)
            }
        }
    }), je = C(M, 0, T), Te = b(function(n, r) {
        return r.$ ? n : r.a
    }), Ne = b(function(n, o) {
        return c(we, a(function(n, r, t, e, a, u, c) {
            var i = n.a
              , n = n.b
              , n = h(r, o) ? {
                a: C(oe, kt, D(Yr, Wt, i, n)),
                b: t
            } : {
                a: T,
                b: 0
            }
              , t = n.a
              , n = n.b;
            return {
                V: Kt,
                h: R(t, N([T])),
                az: _t(o),
                C: ae(0),
                al: je,
                aC: D(Nt, b(function(n, r) {
                    return C(Ee, n, r)
                }), ye, t),
                bc: a,
                bd: e,
                ac: 0,
                A: n,
                aN: !0,
                aO: !1,
                aP: !1,
                c: C(Te, ee, c),
                I: T,
                y: C(Te, !1, u.bD),
                s: C(Te, !1, u.bE),
                ah: C(Te, !1, u.bS),
                o: {
                    ap: 0,
                    aH: 0
                },
                d: 5
            }
        }), C(Gt, "gameState", le), C(Gt, "gameState", ge), C(Gt, "gameState", he), C(Gt, "gameState", $e), C(Gt, "gameState", ve), xe, Ht(C(Gt, "statistics", me)))
    }), Ie = f(function(n, r, t, e) {
        n = C(te, C(Ne, r, t), n);
        if (n.$)
            return {
                V: Kt,
                h: N([T]),
                az: _t(t),
                C: ae(0),
                al: je,
                aC: ye,
                bc: Pr,
                bd: Pr,
                ac: 0,
                A: 0,
                aN: !0,
                aO: !0,
                aP: !1,
                c: ee,
                I: T,
                y: !1,
                s: e,
                ah: !1,
                o: {
                    ap: 0,
                    aH: 0
                },
                d: 5
            };
        return n.a
    }), Se = b(function(n, r) {
        return {
            $: 2,
            a: n,
            b: r
        }
    }), Le = En, Oe = b(function(n, r) {
        return {
            $: 0,
            a: n,
            b: r
        }
    }), Ae = b(function(n, r) {
        return {
            b3: r,
            cd: n
        }
    }), M = jt(C(Ae, Ut, Ut)), Ce = b(function(n, r) {
        for (; ; ) {
            if (-2 === r.$)
                return Pr;
            var t = r.c
              , e = r.d
              , a = r.e;
            switch (C(Jt, n, r.b)) {
            case 0:
                n = n,
                r = e;
                continue;
            case 1:
                return Br(t);
            default:
                n = n,
                r = a;
                continue
            }
        }
    }), De = b(function(n, r) {
        var t = n.a
          , e = n.b
          , n = C(Ce, t, r);
        return D(Xt, t, 1 === n.$ ? N([e]) : C(Sr, e, n.a), r)
    }), Re = function(t) {
        return {
            $: 2,
            b: function(n) {
                var r = t.f;
                2 === r.$ && r.c && r.c(),
                t.f = null,
                n({
                    $: 0,
                    a: w
                })
            },
            c: null
        }
    }, _e = E(function(n, r, t) {
        for (; ; ) {
            if (-2 === t.$)
                return r;
            var e = t.e
              , a = n
              , u = D(n, t.b, t.c, D(_e, n, r, t.d));
            n = a,
            r = u,
            t = e
        }
    }), We = e(function(o, f, s, n, r, t) {
        t = D(_e, E(function(n, r, t) {
            for (; ; ) {
                var e = t.a
                  , a = t.b;
                if (!e.b)
                    return {
                        a: e,
                        b: D(s, n, r, a)
                    };
                var u = e.a
                  , c = u.a
                  , i = u.b
                  , u = e.b;
                if (0 <= $(c, n))
                    return 0 < $(c, n) ? {
                        a: e,
                        b: D(s, n, r, a)
                    } : {
                        a: u,
                        b: j(f, c, i, r, a)
                    };
                n = n,
                r = r,
                t = {
                    a: u,
                    b: D(o, c, i, a)
                }
            }
        }), {
            a: Or(n),
            b: t
        }, r),
        r = t.a,
        t = t.b;
        return D(Kr, b(function(n, r) {
            return D(o, n.a, n.b, r)
        }), t, r)
    }), He = kn, qe = gr, Fe = hn, Be = E(function(r, n, t) {
        if (n.b) {
            var e = n.a
              , a = n.b
              , n = Fe(C(qe, e, C(He, r, e)));
            return C(St, function(n) {
                return D(Be, r, a, D(Xt, e, n, t))
            }, n)
        }
        return jt(t)
    }), kn = E(function(r, n, t) {
        var e = t.b3
          , t = E(function(n, r, t) {
            var e = t.c;
            return {
                a: t.a,
                b: t.b,
                c: C(St, function(n) {
                    return e
                }, Re(r))
            }
        })
          , a = D(Kr, De, Ut, n)
          , e = s(We, E(function(n, r, t) {
            var e = t.b
              , a = t.c;
            return {
                a: C(Sr, n, t.a),
                b: e,
                c: a
            }
        }), f(function(n, r, t, e) {
            var a = e.c;
            return {
                a: e.a,
                b: D(Xt, n, t, e.b),
                c: a
            }
        }), t, a, e, {
            a: T,
            b: Ut,
            c: jt(0)
        })
          , u = e.a
          , c = e.b;
        return C(St, function(n) {
            return jt(C(Ae, a, n))
        }, C(St, function(n) {
            return D(Be, r, u, c)
        }, e.c))
    }), Pe = (Ft = ae,
    {
        $: 2,
        b: function(n) {
            n({
                $: 0,
                a: Ft(Date.now())
            })
        },
        c: null
    }), gr = E(function(t, n, r) {
        n = C(Ce, n, r.cd);
        if (1 === n.$)
            return jt(r);
        var e = n.a;
        return C(St, function(n) {
            return jt(r)
        }, C(St, function(r) {
            return Ir(C(It, function(n) {
                return C(At, t, n(r))
            }, e))
        }, Pe))
    }), Ge = E(function(n, r, t) {
        return n(r(t))
    });
    xn.Time = {
        b: M,
        c: kn,
        d: gr,
        e: 0,
        f: b(function(n, r) {
            return C(Oe, r.a, C(Ge, n, r.b))
        })
    };
    function Me(n) {
        return n
    }
    function Ue(n) {
        return ae(Me(n) + 2e3)
    }
    function Ke(n) {
        return {
            a: R(n.a ? "w_" : "d_", n.b),
            b: n
        }
    }
    function Ye(n) {
        return D(Kr, b(function(n, r) {
            return D(Xt, n.a, n.b, r)
        }), Ut, n)
    }
    var Ve = zn("Time")
      , Je = b(function(n, r) {
        return Ve(C(Oe, n, r))
    })
      , Qe = C(wt, function(n) {
        var r = Xr(n);
        return r.$ || "" !== r.a.b ? {
            $: 1,
            a: {
                $: 1,
                a: n
            }
        } : {
            $: 1,
            a: {
                $: 0,
                a: r.a.a
            }
        }
    }, C(Gt, "key", se))
      , Xe = (kn = se,
    Sn(gr = "makeToast"),
    xn[gr] = {
        f: Dn,
        u: kn,
        a: Rn
    },
    zn(gr))
      , Ze = E(function(n, r, t) {
        return {
            $: 0,
            a: n,
            b: r,
            c: t
        }
    })
      , na = b(function(n, r) {
        return {
            b0: r,
            cc: n
        }
    })
      , Dn = jt(C(na, T, Ut))
      , ra = b(function(n, r) {
        return {
            bH: r,
            bR: n
        }
    })
      , ta = E(function(r, t, n) {
        return C(Lt, function(n) {
            return {
                a: t,
                b: n
            }
        }, D(xr, n.a ? mr : wr, n.b, function(n) {
            return C(He, r, C(ra, t, n))
        }))
    })
      , ea = b(function(n, r) {
        return D(_e, Xt, r, n)
    })
      , kn = E(function(a, n, r) {
        var t = E(function(n, r, t) {
            var e = t.c;
            return {
                a: t.a,
                b: t.b,
                c: C(Sr, D(ta, a, n, r), e)
            }
        })
          , e = E(function(n, r, t) {
            var e = t.b
              , a = t.c;
            return {
                a: C(Sr, r, t.a),
                b: e,
                c: a
            }
        })
          , u = f(function(n, r, t, e) {
            var a = e.c;
            return {
                a: e.a,
                b: D(Xt, n, r, e.b),
                c: a
            }
        })
          , c = C(It, Ke, n)
          , r = s(We, e, u, t, r.b0, Ye(c), {
            a: T,
            b: Ut,
            c: T
        })
          , i = r.b
          , o = r.c;
        return C(St, function(n) {
            return jt(C(na, c, C(ea, i, Ye(n))))
        }, C(St, function(n) {
            return Ir(o)
        }, Ir(C(It, Re, r.a))))
    })
      , gr = E(function(n, r, t) {
        var e = r.bR
          , a = r.bH
          , r = C(oe, function(n) {
            var r = n.b
              , r = r.c;
            return h(n.a, e) ? C(yr, r, a) : Pr
        }, t.cc);
        return C(St, function(n) {
            return jt(t)
        }, Ir(C(It, At(n), r)))
    });
    xn["Browser.Events"] = {
        b: Dn,
        c: kn,
        d: gr,
        e: 0,
        f: b(function(n, r) {
            return D(Ze, r.a, r.b, C(wt, n, r.c))
        })
    };
    function aa(n) {
        return Ra(n)
    }
    function ua(r) {
        return aa(1 === Da ? r : function() {
            switch (r) {
            case "ENTER":
                return "ENTER";
            case "...":
                return "...";
            case "WOORDLE6":
                return "WORDLE6";
            case "INSTELLINGEN":
                return "SETTINGS";
            case "AAN":
                return "ON";
            case "UIT":
                return "OFF";
            case "Donker thema":
                return "Dark Theme";
            case "Hoog contrast vakjes":
                return "Color Blind Mode";
            case "Feedback: ":
                return "Feedback: ";
            case "yele op Twitter":
                return "yele on Twitter";
            case "INSTRUCTIES":
                return "INSTRUCTIONS";
            case "Je hebt gewonnen!!":
                return "You won!!";
            case "Je hebt verloren...":
                return "You lost...";
            case "Het woord was: ":
                return "The word was";
            case "Volgende WOORDLE6":
                return "Next WORDLE6";
            case "Delen":
                return "Share";
            case "STATISTIEK":
                return "STATISTICS";
            case "VERDELING":
                return "GUESS DISTRIBUTION";
            case "gespeeld":
                return "played";
            case "Win %":
                return "Win %";
            case "Huidige reeks":
                return "Current Streak";
            case "Max reeks":
                return "Max Streak";
            case "Raad het ":
                return "Try to guess the ";
            case " in 6 keer.":
                return " within 6 guesses.";
            case "Na elke gok zullen de kleuren van de vakjes aangeven hoe dichtbij je was.":
                return "After every guess the colors of the squares will tell you how close you were.";
            case "De letter ":
                return "The letter ";
            case " zit op de juiste plek in het woord.":
                return " is in the correct place.";
            case "Elke dag is er een nieuwe ":
                return "Every day there will be a new ";
            case " beschikbaar!":
                return " available.";
            case " zit in het woord maar op een andere plek.":
                return " is in the word, but at a different place.";
            case " zit helemaal niet in het woord.":
                return " is not in the word at any place.";
            case "Code is beschikbaar ":
                return "Code is available ";
            case "op GitHub":
                return "on GitHub";
            case "Onbekend woord":
                return "Unknown word";
            case "Copied to clipboard":
                return "Copied to clipboard";
            case "Can't share":
                return "Can't share";
            default:
                var n = r;
                return zt(n),
                n
            }
        }())
    }
    function ca(n) {
        if (n.b) {
            if (!n.b.b || n.b.a.b || n.b.b.b)
                return 1 + ca(n.b);
            return 1
        }
        return 0
    }
    function ia(n) {
        return n.b ? n.b.b ? C(Sr, n.a, ia(n.b)) : N([Ha(n.a)]) : N([T])
    }
    function oa(n) {
        for (; ; ) {
            if (!n.b)
                return T;
            if (!n.b.b)
                return r = n.a;
            if (!n.b.a.b && !n.b.b.b) {
                var r = n.a;
                return r
            }
            n = n.b
        }
    }
    function fa(n) {
        return !n
    }
    function sa(n) {
        return Pa(ct(n))
    }
    function ba(n) {
        return cu(n.$ ? "" : qa(C(It, ke, n.a)))
    }
    function da(n) {
        switch (n.$) {
        case 0:
            return null;
        case 1:
            return cu("correct");
        case 2:
            return cu("present");
        default:
            return cu("absent")
        }
    }
    function la(n) {
        return 5 === (n = n.d) ? Da ? "" : "-en" : (n = Mr(n),
        Da ? n : n + "-en")
    }
    function ha(n) {
        return C(Gr, 0, du(N([{
            a: "gameState" + la(n),
            b: du(N([{
                a: "boardState",
                b: C(ou, ba, C(su, n.h, 6))
            }, {
                a: "evaluations",
                b: C(ou, fu(n), C(su, n.h, 6))
            }, {
                a: "rowIndex",
                b: bu(kr(n.h) - 1)
            }, {
                a: "solution",
                b: cu(qa(n.az))
            }, {
                a: "restoringFromLocalStorage",
                b: null
            }, {
                a: "gameStatus",
                b: (e = n.A,
                cu(function() {
                    switch (e) {
                    case 0:
                        return "IN_PROGRESS";
                    case 1:
                        return "WIN";
                    default:
                        return "FAIL"
                    }
                }()))
            }, {
                a: "hardMode",
                b: iu(!1)
            }]))
        }, {
            a: "darkTheme",
            b: iu(n.s)
        }, {
            a: "colorBlindTheme",
            b: iu(n.y)
        }, {
            a: "largeKeyboard",
            b: iu(n.ah)
        }, {
            a: "statistics" + la(n),
            b: (t = hu(r = n.c),
            n = t.br,
            t = t.by,
            du(N([{
                a: "currentStreak",
                b: bu(r.ak)
            }, {
                a: "maxStreak",
                b: bu(r.aa)
            }, {
                a: "gamesPlayed",
                b: bu(r.Z)
            }, {
                a: "gamesWon",
                b: bu(r._)
            }, {
                a: "guesses",
                b: pu(r.b)
            }, {
                a: "winPercentage",
                b: bu(n)
            }, {
                a: "averageGuesses",
                b: bu(t)
            }])))
        }])));
        var r, t, e
    }
    function pa(n) {
        return 31 < n ? {
            $: 1,
            a: 1 << n - 32
        } : {
            $: 0,
            a: 1 << n
        }
    }
    function va(n) {
        var r = n.b
          , t = n.c
          , e = n.d;
        return zu(n.a) + ("-" + zu(r) + ("-" + zu(t) + ("-" + zu(e))))
    }
    function $a(n) {
        return {
            $: 1,
            a: n
        }
    }
    function ga(n) {
        return C(Cu, 4, n)
    }
    function wa(n) {
        return {
            $: 1,
            a: Iu(n)
        }
    }
    function ma(n) {
        switch (n.$) {
        case 0:
            return Pr;
        case 1:
            var r = n.a
              , t = r.b
              , e = r.c;
            return Br("mv-" + zu(r.a) + ("-" + zu(t) + ("-" + zu(e))));
        default:
            var a = n.a
              , u = a.b
              , c = a.c
              , i = n.b
              , o = i.a
              , f = i.b
              , s = i.c
              , r = n.c
              , t = r.a
              , e = r.b
              , i = r.c
              , r = n.d;
            return Br("tfrm-" + zu(a.a) + ("-" + zu(u) + ("-" + zu(c) + ("-" + zu(o) + ("-" + zu(f) + ("-" + zu(s) + ("-" + zu(t) + ("-" + zu(e) + ("-" + zu(i) + ("-" + zu(r)))))))))))
        }
    }
    function xa(n) {
        switch (n.$) {
        case 13:
            return r = n.a;
        case 12:
            var r = n.a;
            return r;
        case 0:
            return n.a;
        case 1:
            return r = n.a;
        case 2:
            return "font-size-" + Mr(n.a);
        case 3:
        case 4:
            return n.a;
        case 5:
            var t = n.a;
            return t;
        case 7:
        case 6:
            t = n.a;
            return t;
        case 8:
            t = n.a;
            return "grid-rows-" + C(Ur, "-", C(It, nc, t.dt)) + ("-cols-" + C(Ur, "-", C(It, nc, t.J)) + ("-space-x-" + nc(t.dC.a) + ("-space-y-" + nc(t.dC.b))));
        case 9:
            var e = n.a;
            return "gp grid-pos-" + Mr(e.F) + ("-" + Mr(e.cS) + ("-" + Mr(e.aH) + ("-" + Mr(e.ap))));
        case 11:
            var a = n.a
              , e = n.b
              , r = function() {
                switch (a) {
                case 0:
                    return "fs";
                case 1:
                    return "hv";
                default:
                    return "act"
                }
            }();
            return C(Ur, " ", C(It, function(n) {
                n = xa(n);
                return "" === n ? "" : n + "-" + r
            }, e));
        default:
            return C(Te, "", ma(n.a))
        }
    }
    function ya(n) {
        return C(Ur, " ", C(oe, kt, N([n.bQ ? Br("inset") : Pr, Br(uc(n.ac.a) + "px"), Br(uc(n.ac.b) + "px"), Br(uc(n.ax) + "px"), Br(uc(n.aE) + "px"), Br(cc(n.ay))])))
    }
    function ka(n) {
        return N([C(ec, ac(Du.bI) + ":focus-within", C(oe, kt, N([C(ue, function(n) {
            return C(tc, "border-color", cc(n))
        }, n.cH), C(ue, function(n) {
            return C(tc, "background-color", cc(n))
        }, n.cB), C(ue, function(n) {
            return C(tc, "box-shadow", ya({
                ax: n.ax,
                ay: n.ay,
                bQ: !1,
                ac: C(oc, Tr, C(ic, Tr, n.ac)),
                aE: n.aE
            }))
        }, n.dy), Br(C(tc, "outline", "none"))]))), C(ec, ac(Du.cz) + ":focus .focusable, " + ac(Du.cz) + ".focusable:focus, .ui-slide-bar:focus + " + ac(Du.cz) + " .focusable-thumb", C(oe, kt, N([C(ue, function(n) {
            return C(tc, "border-color", cc(n))
        }, n.cH), C(ue, function(n) {
            return C(tc, "background-color", cc(n))
        }, n.cB), C(ue, function(n) {
            return C(tc, "box-shadow", ya({
                ax: n.ax,
                ay: n.ay,
                bQ: !1,
                ac: C(oc, Tr, C(ic, Tr, n.ac)),
                aE: n.aE
            }))
        }, n.dy), Br(C(tc, "outline", "none"))])))])
    }
    function za(n) {
        return Hn(Mn(n))
    }
    function Ea(n) {
        return D(Nt, pc, T, n)
    }
    function ja(n) {
        switch (n) {
        case 0:
            return ac(Du.cx);
        case 1:
            return ac(Du.cq);
        case 2:
            return ac(Du.bw);
        case 3:
            return ac(Du.bv);
        case 4:
            return ac(Du.cr);
        default:
            return ac(Du.cs)
        }
    }
    function Ta(e) {
        return {
            $: 6,
            a: C(vc, function(n) {
                var r = e(n)
                  , t = r.a
                  , r = r.b;
                return N([C(dc, function(n) {
                    switch (n) {
                    case 0:
                        return ac(Du.cT);
                    case 1:
                        return ac(Du.a_);
                    case 2:
                        return ac(Du.a0);
                    case 3:
                        return ac(Du.aL);
                    case 4:
                        return ac(Du.a$);
                    default:
                        return ac(Du.Y)
                    }
                }(n), t), C(sc, ac(Du.cz), N([C(dc, ja(n), r)]))])
            }, hc)
        }
    }
    function Na(n) {
        return N([C(bc, ".v-" + n, N([C(lc, "font-feature-settings", '"' + n + '"')])), C(bc, ".v-" + n + "-off", N([C(lc, "font-feature-settings", '"' + n + '" 0')]))])
    }
    function Ia(n) {
        return C(Ur, "", n)
    }
    var Sa, La, Oa = zn("Browser.Events"), Aa = E(function(n, r, t) {
        return Oa(D(Ze, n, r, t))
    }), Ca = C(Aa, 0, "keydown"), Da = 1, Ra = function(n) {
        return {
            $: 2,
            a: n
        }
    }, _a = b(function(n, r) {
        var t = {
            a: r,
            b: n.s,
            c: n.y
        };
        switch (t.a.$) {
        case 0:
            return "";
        case 1:
            return t.c ? "🟧" : "🟩";
        case 2:
            return t.c ? "🟦" : "🟨";
        default:
            return t.b ? "⬛" : "⬜"
        }
    }), Wa = b(function(n, r) {
        if (r.b) {
            if (!r.b.b || r.b.a.b || r.b.b.b) {
                var t = r.a
                  , e = r.b;
                return C(Ur, "", C(It, _a(n), t)) + "\n" + C(Wa, n, e)
            }
            var t = r.a;
            return C(Ur, "", C(It, _a(n), t))
        }
        return ""
    }), Ha = function(n) {
        return n.b && n.b.b ? C(Sr, n.a, Ha(n.b)) : T
    }, qa = function(n) {
        return k(n).join("")
    }, Fa = b(function(n, r) {
        return !C(Ce, n, r).$
    }), Ba = b(function(n, r) {
        return C(Fa, n, r)
    }), Pa = b(function(n, r) {
        for (; ; ) {
            if (!r.b)
                return !1;
            var t = r.b;
            if (n(r.a))
                return !0;
            n = n,
            r = t
        }
    }), Ga = b(function(n, r) {
        return !C(Pa, C(Ge, fa, n), r)
    })(function(n) {
        return 1 === n.$
    }), Ma = b(function(n, r) {
        if (r.b) {
            var t = r.a
              , r = r.b;
            return h(t, n) ? r : C(Sr, t, C(Ma, n, r))
        }
        return T
    }), Ua = b(function(n, r) {
        var t = n.a;
        if (t.$)
            return r;
        t = t.a;
        return h(t, n.b) ? m(r, {
            p: C(Sr, {
                $: 1,
                a: t
            }, r.p),
            aq: C(Ma, t, r.aq)
        }) : m(r, {
            p: C(Sr, {
                $: 0,
                a: t
            }, r.p)
        })
    }), Ka = b(function(n, r) {
        n = n.a;
        if (n.$)
            return m(r, {
                p: C(Sr, n, r.p)
            });
        n = n.a;
        return m(r, C(sa, n, r.aq) ? {
            p: C(Sr, {
                $: 2,
                a: n
            }, r.p),
            aq: C(Ma, n, r.aq)
        } : {
            p: C(Sr, {
                $: 3,
                a: n
            }, r.p)
        })
    }), Ya = b(function(n, r) {
        n = D(Nt, Ua, {
            p: T,
            aq: r
        }, D(Yr, de, n, r)),
        r = D(Yr, de, n.p, r);
        return D(Nt, Ka, m(n, {
            p: T
        }), r)
    }), Va = b(function(n, r) {
        return C(Ya, n, r).p
    }), Ja = b(function(n, r) {
        var t;
        return r.b ? r.b.b ? C(Sr, t = r.a, C(Ja, n, r.b)) : h(kr(t = r.a), n.d) ? N([C(Va, t, n.az), T]) : N([t]) : T
    }), Qa = E(function(n, r, t) {
        for (; ; ) {
            if (n <= 0)
                return t;
            if (!r.b)
                return t;
            var e = r.a;
            n = n - 1,
            r = r.b,
            t = C(Sr, e, t)
        }
    }), Xa = b(function(n, r) {
        return Qr(D(Qa, n, r, T))
    }), Za = E(function(n, r, t) {
        if (0 < r) {
            var e = {
                a: r,
                b: t
            };
            n: for (; ; ) {
                r: for (; ; ) {
                    if (!e.b.b)
                        return t;
                    if (!e.b.b.b) {
                        if (1 === e.a)
                            break n;
                        break
                    }
                    switch (e.a) {
                    case 1:
                        break n;
                    case 2:
                        var a = e.b;
                        return N([c = a.a, a = a.b.a]);
                    case 3:
                        if (e.b.b.b.b) {
                            var u = e.b
                              , c = u.a
                              , i = u.b;
                            return N([c, a = i.a, o = i.b.a])
                        }
                        break r;
                    default:
                        if (e.b.b.b.b && e.b.b.b.b.b) {
                            var u = e.b
                              , c = u.a
                              , i = u.b
                              , a = i.a
                              , u = i.b
                              , o = u.a
                              , i = u.b
                              , u = i.a
                              , i = i.b;
                            return C(Sr, c, C(Sr, a, C(Sr, o, C(Sr, u, 1e3 < n ? C(Xa, r - 4, i) : D(Za, n + 1, r - 4, i)))))
                        }
                        break r
                    }
                }
                return t
            }
            return N([c = e.b.a])
        }
        return T
    }), nu = b(function(n, r) {
        return D(Za, 0, n, r)
    }), ru = E(function(n, r, t) {
        var e = t.b
          , a = r ? t.ak + 1 : 0
          , u = r && 0 < $(a, t.aa) ? a : t.aa
          , c = ca(n)
          , n = function() {
            var n = {
                a: c,
                b: r
            };
            if (!n.b)
                return m(e, {
                    aB: e.aB + 1
                });
            switch (n.a) {
            case 1:
                return m(e, {
                    L: e.L + 1
                });
            case 2:
                return m(e, {
                    M: e.M + 1
                });
            case 3:
                return m(e, {
                    N: e.N + 1
                });
            case 4:
                return m(e, {
                    O: e.O + 1
                });
            case 5:
                return m(e, {
                    P: e.P + 1
                });
            case 6:
                return m(e, {
                    Q: e.Q + 1
                });
            default:
                return e
            }
        }();
        return {
            ak: a,
            Z: t.Z + 1,
            _: r ? t._ + 1 : t._,
            b: n,
            aa: u
        }
    }), tu = function(n) {
        return n.toLowerCase()
    }, eu = E(function(n, r, t) {
        var e;
        return t.b ? t.b.b ? C(Sr, e = t.a, D(eu, n, r, t.b)) : h(kr(e = t.a), n.d) ? N([e]) : N([R(e, N([{
            $: 0,
            a: r
        }]))]) : N([N([{
            $: 0,
            a: r
        }])])
    }), au = b(function(n, r) {
        switch (n) {
        case "⌫":
            return m(r, {
                h: ia(r.h)
            });
        case "↵":
            var t = qa(C(It, ke, oa(r.h)));
            return C(Ba, t, r.V) ? function(n) {
                var r = C(nu, 6, C(Ja, n, n.h))
                  , t = C(Ee, oa(r), n.aC)
                  , e = Ga(oa(r))
                  , a = h(kr(oa(n.h)), n.d) && 6 === ca(r)
                  , e = (e = {
                    a: a,
                    b: e
                }).b ? {
                    a: 1,
                    b: D(ru, r, !0, n.c)
                } : e.a ? {
                    a: 2,
                    b: D(ru, r, !1, n.c)
                } : {
                    a: 0,
                    b: n.c
                };
                return m(n, {
                    h: r,
                    aC: t,
                    A: e.a,
                    c: e.b
                })
            }(r) : m(r, {
                I: C(Sr, {
                    aZ: ua("Onbekend woord"),
                    a3: Ue(r.C)
                }, r.I)
            });
        default:
            t = n;
            return jr(t) ? m(r, {
                h: D(eu, r, tu(t), r.h)
            }) : r
        }
    }), uu = b(function(n, r) {
        return r.A ? r : C(au, n, r)
    }), cu = on, iu = on, ou = b(function(n, r) {
        return D(Kr, function(t) {
            return b(function(n, r) {
                return r.push(t(n)),
                r
            })
        }(n), [], r)
    }), fu = b(function(n, r) {
        var t = {
            a: r,
            b: C(Te, 0, C(ue, kr, r))
        };
        if (t.a.$)
            return null;
        r = t.a.a;
        return h(t.b, n.d) ? C(ou, da, r) : null
    }), su = b(function(n, r) {
        r = {
            a: n,
            b: r
        };
        if (r.a.b) {
            if (r.b) {
                var t = r.a
                  , e = t.a
                  , a = t.b
                  , u = r.b;
                return C(Sr, Br(e), C(su, a, u - 1))
            }
            var t = r.a
              , e = t.a
              , a = t.b;
            return C(Sr, Br(e), C(su, a, 0))
        }
        return r.b ? C(Sr, Pr, C(su, T, (u = r.b) - 1)) : T
    }), bu = on, du = function(n) {
        return D(Kr, b(function(n, r) {
            return D(fn, n.a, n.b, r)
        }), {}, n)
    }, lu = O, hu = function(n) {
        return {
            by: lu((n.b.L + n.b.M + n.b.N + n.b.O + n.b.P + n.b.Q) / 6),
            br: lu(n._ / n.Z * 100)
        }
    }, pu = function(n) {
        return du(N([{
            a: "1",
            b: bu(n.L)
        }, {
            a: "2",
            b: bu(n.M)
        }, {
            a: "3",
            b: bu(n.N)
        }, {
            a: "4",
            b: bu(n.O)
        }, {
            a: "5",
            b: bu(n.P)
        }, {
            a: "6",
            b: bu(n.Q)
        }, {
            a: "fail",
            b: bu(n.aB)
        }]))
    }, vu = En(T), $u = Ln("save", cu), gu = Ln("share", cu), wu = b(function(t, n) {
        return D(Nt, b(function(n, r) {
            return t(n) ? C(Sr, n, r) : r
        }), T, n)
    }), Dn = b(function(r, t) {
        var e = function() {
            switch (r.$) {
            case 0:
                return C(uu, r.a, t);
            case 1:
                if (!r.a.$)
                    return C(uu, r.a.a, t);
                switch (r.a.a) {
                case "Backspace":
                    return C(uu, "⌫", t);
                case "Enter":
                    return C(uu, "↵", t);
                default:
                    return t
                }
            case 2:
                return m(t, {
                    o: {
                        ap: r.b,
                        aH: r.a
                    }
                });
            case 3:
                return function(r) {
                    return m(r, {
                        I: C(wu, function(n) {
                            return $(Me(r.C), Me(n.a3)) < 0
                        }, r.I)
                    })
                }(m(t, {
                    C: r.a
                }));
            case 4:
                return m(t, {
                    al: r.a
                });
            case 5:
                return t;
            case 6:
                return m(t, {
                    I: C(Sr, r.a, t.I)
                });
            case 7:
                return m(t, {
                    aN: !1
                });
            case 8:
                return m(t, {
                    aO: r.a
                });
            case 9:
                return m(t, {
                    aP: r.a
                });
            case 10:
                return m(t, {
                    s: r.a
                });
            case 11:
                return m(t, {
                    y: r.a
                });
            case 12:
                return m(t, {
                    ah: r.a
                });
            default:
                return t
            }
        }()
          , n = function() {
            var n = {
                a: r,
                b: t.A
            };
            n: for (; ; )
                switch (n.a.$) {
                case 0:
                    if (n.b)
                        break n;
                    return $u(ha(e));
                case 1:
                    if (n.b)
                        break n;
                    return $u(ha(e));
                case 10:
                case 11:
                    return $u(ha(e));
                case 5:
                    return gu(function(n) {
                        var r = function() {
                            switch (n.A) {
                            case 1:
                                return Mr(ca(n.h));
                            case 2:
                                return "X";
                            default:
                                return "???"
                            }
                        }()
                          , t = 5 !== (t = n.d) ? Da ? {
                            a: "Woordle" + Mr(t) + " ",
                            b: 1
                        } : {
                            a: "Wordle6 ",
                            b: 1
                        } : Da ? {
                            a: "Woordle ",
                            b: 202
                        } : {
                            a: "Wordle ",
                            b: 0
                        };
                        return t.a + (Mr(n.ac + t.b) + " ") + r + "/6\n\n" + C(Wa, n, n.h)
                    }(e));
                default:
                    break n
                }
            return vu
        }();
        return {
            a: e,
            b: n
        }
    }), mu = P, xu = E(function(n, r, t) {
        return {
            $: 4,
            a: n,
            b: r,
            c: t
        }
    }), yu = b(function(n, r) {
        return {
            $: 4,
            a: n,
            b: r
        }
    }), ku = pa(8), zu = function(n) {
        return Mr(lu(255 * n))
    }, Eu = function(n) {
        return C(yu, ku, D(xu, "bg-" + va(n), "background-color", n))
    }, ju = pa(14), Tu = function(n) {
        return C(yu, ju, D(xu, "fc-" + va(n), "color", n))
    }, Nu = b(function(n, r) {
        return C(Pn, n, cu(r))
    }), Iu = Nu("className"), Su = $a, Lu = Su(Iu("flex-grow")), Ou = b(function(n, r) {
        return {
            $: 9,
            a: n,
            b: r
        }
    }), Au = {
        $: 0
    }, Cu = b(function(n, r) {
        return 3 === r.$ ? Au : C(Ou, n, r)
    }), Du = {
        co: "a",
        a6: "atv",
        cq: "ab",
        cr: "cx",
        cs: "cy",
        ct: "acb",
        cu: "accx",
        cv: "accy",
        cw: "acr",
        bv: "al",
        bw: "ar",
        cx: "at",
        a7: "ah",
        a8: "av",
        cz: "s",
        cD: "bh",
        cE: "b",
        cG: "w7",
        cI: "bd",
        cJ: "bdt",
        aV: "bn",
        cK: "bs",
        aW: "cpe",
        cP: "cp",
        cQ: "cpx",
        cR: "cpy",
        X: "c",
        aY: "ctr",
        a_: "cb",
        a$: "ccx",
        Y: "ccy",
        aL: "cl",
        a0: "cr",
        cT: "ct",
        cU: "cptr",
        cV: "ctxt",
        c0: "fcs",
        bI: "focus-within",
        c1: "fs",
        c2: "g",
        a9: "hbh",
        ba: "hc",
        bM: "he",
        bb: "hf",
        bN: "hfp",
        c4: "hv",
        c6: "ic",
        c8: "fr",
        a2: "lbl",
        da: "iml",
        db: "imlf",
        dc: "imlp",
        dd: "implw",
        de: "it",
        df: "i",
        bU: "lnk",
        aD: "nb",
        bX: "notxt",
        dj: "ol",
        dk: "or",
        as: "oq",
        dp: "oh",
        bZ: "pg",
        b_: "p",
        dq: "ppe",
        ds: "ui",
        F: "r",
        du: "sb",
        dv: "sbx",
        dw: "sby",
        dx: "sbt",
        dz: "e",
        dA: "cap",
        dB: "sev",
        dH: "sk",
        x: "t",
        dK: "tc",
        dL: "w8",
        dM: "w2",
        dN: "w9",
        dO: "tj",
        a5: "tja",
        dP: "tl",
        dQ: "w3",
        dR: "w5",
        dS: "w4",
        dT: "tr",
        dU: "w6",
        dV: "w1",
        dW: "tun",
        cf: "ts",
        av: "clr",
        d$: "u",
        bp: "wc",
        cj: "we",
        bq: "wf",
        ck: "wfp",
        bt: "wrp"
    }, Ru = b(function(n, r) {
        return {
            $: 2,
            a: n,
            b: r
        }
    }), _u = b(function(n, r) {
        return {
            $: 1,
            a: n,
            b: r
        }
    }), Wu = {
        $: 0
    }, Hu = {
        $: 0
    }, qu = Du.cz + " " + Du.X, Fu = Du.cz + " " + Du.c2, Bu = Du.cz + " " + Du.bZ, Pu = Du.cz + " " + Du.b_, Gu = Du.cz + " " + Du.F, Mu = Du.cz + " " + Du.dz, Uu = {
        $: 0
    }, Ku = b(function(n, r) {
        switch (r.$) {
        case 0:
            return n;
        case 1:
            return R(r.a, n);
        case 2:
            return R(n, r.a);
        default:
            return R(r.a, R(n, r.b))
        }
    }), Yu = E(function(r, n, t) {
        switch (t.$) {
        case 0:
            return n;
        case 1:
            return R(C(It, function(n) {
                return {
                    a: r,
                    b: n
                }
            }, e = t.a), n);
        case 2:
            return R(n, C(It, function(n) {
                return {
                    a: r,
                    b: n
                }
            }, a = t.a));
        default:
            var e = t.a
              , a = t.b;
            return R(C(It, function(n) {
                return {
                    a: r,
                    b: n
                }
            }, e), R(n, C(It, function(n) {
                return {
                    a: r,
                    b: n
                }
            }, a)))
        }
    }), Vu = pa(41), Ju = pa(40), Qu = pa(42), Xu = pa(43), Zu = Hn("div"), nc = function(n) {
        switch (n.$) {
        case 0:
            return Mr(n.a) + "px";
        case 1:
            return "auto";
        case 2:
            return Mr(n.a) + "fr";
        case 3:
            var r = n.b;
            return "min" + (Mr(n.a) + nc(r));
        default:
            r = n.b;
            return "max" + (Mr(n.a) + nc(r))
        }
    }, rc = b(function(n, r) {
        var t = r.a
          , e = r.b
          , a = xa(n);
        return C(Ba, a, t) ? r : {
            a: C(Zt, a, t),
            b: C(Sr, n, e)
        }
    }), tc = b(function(n, r) {
        return {
            $: 0,
            a: n,
            b: r
        }
    }), ec = b(function(n, r) {
        return {
            $: 0,
            a: n,
            b: r
        }
    }), ac = function(n) {
        return "." + n
    }, uc = q, cc = function(n) {
        var r = n.b
          , t = n.c
          , e = n.d;
        return "rgba(" + Mr(lu(255 * n.a)) + ("," + Mr(lu(255 * r)) + "," + Mr(lu(255 * t)) + "," + uc(e)) + ")"
    }, ic = b(function(n, r) {
        var t = r.b;
        return {
            a: n(r.a),
            b: t
        }
    }), oc = b(function(n, r) {
        return {
            a: r.a,
            b: n(r.b)
        }
    }), fc = b(function(n, r) {
        return C(Pn, function(n) {
            return "innerHTML" == n || "formAction" == n ? "data-" + n : n
        }(n), Un(r))
    }), kn = b(function(n, r) {
        return {
            $: 2,
            a: n,
            b: r
        }
    }), sc = b(function(n, r) {
        return {
            $: 1,
            a: n,
            b: r
        }
    }), bc = b(function(n, r) {
        return {
            $: 0,
            a: n,
            b: r
        }
    }), dc = b(function(n, r) {
        return {
            $: 4,
            a: n,
            b: r
        }
    }), lc = b(function(n, r) {
        return {
            $: 0,
            a: n,
            b: r
        }
    }), gr = b(function(n, r) {
        return {
            $: 3,
            a: n,
            b: r
        }
    }), hc = N([0, 1, 2, 3, 4, 5]), pc = b(function(n, r) {
        return r.b ? D(Nt, Sr, r, n) : n
    }), vc = b(function(n, r) {
        return Ea(C(It, n, r))
    }), O = N([C(lc, "display", "flex"), C(lc, "flex-direction", "column"), C(lc, "white-space", "pre"), C(dc, ac(Du.a9), N([C(lc, "z-index", "0"), C(sc, ac(Du.cD), N([C(lc, "z-index", "-1")]))])), C(dc, ac(Du.dx), N([C(sc, ac(Du.x), N([C(dc, ac(Du.bb), N([C(lc, "flex-grow", "0")])), C(dc, ac(Du.bq), N([C(lc, "align-self", "auto !important")]))]))])), C(sc, ac(Du.ba), N([C(lc, "height", "auto")])), C(sc, ac(Du.bb), N([C(lc, "flex-grow", "100000")])), C(sc, ac(Du.bq), N([C(lc, "width", "100%")])), C(sc, ac(Du.ck), N([C(lc, "width", "100%")])), C(sc, ac(Du.bp), N([C(lc, "align-self", "flex-start")])), Ta(function(n) {
        switch (n) {
        case 0:
            return {
                a: N([C(lc, "justify-content", "flex-start")]),
                b: N([C(lc, "margin-bottom", "auto !important"), C(lc, "margin-top", "0 !important")])
            };
        case 1:
            return {
                a: N([C(lc, "justify-content", "flex-end")]),
                b: N([C(lc, "margin-top", "auto !important"), C(lc, "margin-bottom", "0 !important")])
            };
        case 2:
            return {
                a: N([C(lc, "align-items", "flex-end")]),
                b: N([C(lc, "align-self", "flex-end")])
            };
        case 3:
            return {
                a: N([C(lc, "align-items", "flex-start")]),
                b: N([C(lc, "align-self", "flex-start")])
            };
        case 4:
            return {
                a: N([C(lc, "align-items", "center")]),
                b: N([C(lc, "align-self", "center")])
            };
        default:
            return {
                a: N([C(sc, ac(Du.cz), N([C(lc, "margin-top", "auto"), C(lc, "margin-bottom", "auto")]))]),
                b: N([C(lc, "margin-top", "auto !important"), C(lc, "margin-bottom", "auto !important")])
            }
        }
    })]), P = N([0, 1, 2, 3, 4, 5]), gr = N([C(bc, "html,body", N([C(lc, "height", "100%"), C(lc, "padding", "0"), C(lc, "margin", "0")])), C(bc, R(ac(Du.cz), R(ac(Du.dz), ac(Du.c6))), N([C(lc, "display", "block"), C(dc, ac(Du.bb), N([C(sc, "img", N([C(lc, "max-height", "100%"), C(lc, "object-fit", "cover")]))])), C(dc, ac(Du.bq), N([C(sc, "img", N([C(lc, "max-width", "100%"), C(lc, "object-fit", "cover")]))]))])), C(bc, ac(Du.cz) + ":focus", N([C(lc, "outline", "none")])), C(bc, ac(Du.ds), N([C(lc, "width", "100%"), C(lc, "height", "auto"), C(lc, "min-height", "100%"), C(lc, "z-index", "0"), C(dc, R(ac(Du.cz), ac(Du.bb)), N([C(lc, "height", "100%"), C(sc, ac(Du.bb), N([C(lc, "height", "100%")]))])), C(sc, ac(Du.c8), N([C(dc, ac(Du.aD), N([C(lc, "position", "fixed"), C(lc, "z-index", "20")]))]))])), C(bc, ac(Du.aD), N([C(lc, "position", "relative"), C(lc, "border", "none"), C(lc, "display", "flex"), C(lc, "flex-direction", "row"), C(lc, "flex-basis", "auto"), C(dc, ac(Du.dz), O), {
        $: 6,
        a: C(It, function(n) {
            switch (n) {
            case 0:
                return C(dc, ac(Du.co), N([C(lc, "position", "absolute"), C(lc, "bottom", "100%"), C(lc, "left", "0"), C(lc, "width", "100%"), C(lc, "z-index", "20"), C(lc, "margin", "0 !important"), C(sc, ac(Du.bb), N([C(lc, "height", "auto")])), C(sc, ac(Du.bq), N([C(lc, "width", "100%")])), C(lc, "pointer-events", "none"), C(sc, "*", N([C(lc, "pointer-events", "auto")]))]));
            case 1:
                return C(dc, ac(Du.cE), N([C(lc, "position", "absolute"), C(lc, "bottom", "0"), C(lc, "left", "0"), C(lc, "height", "0"), C(lc, "width", "100%"), C(lc, "z-index", "20"), C(lc, "margin", "0 !important"), C(lc, "pointer-events", "none"), C(sc, "*", N([C(lc, "pointer-events", "auto")])), C(sc, ac(Du.bb), N([C(lc, "height", "auto")]))]));
            case 2:
                return C(dc, ac(Du.dk), N([C(lc, "position", "absolute"), C(lc, "left", "100%"), C(lc, "top", "0"), C(lc, "height", "100%"), C(lc, "margin", "0 !important"), C(lc, "z-index", "20"), C(lc, "pointer-events", "none"), C(sc, "*", N([C(lc, "pointer-events", "auto")]))]));
            case 3:
                return C(dc, ac(Du.dj), N([C(lc, "position", "absolute"), C(lc, "right", "100%"), C(lc, "top", "0"), C(lc, "height", "100%"), C(lc, "margin", "0 !important"), C(lc, "z-index", "20"), C(lc, "pointer-events", "none"), C(sc, "*", N([C(lc, "pointer-events", "auto")]))]));
            case 4:
                return C(dc, ac(Du.c8), N([C(lc, "position", "absolute"), C(lc, "width", "100%"), C(lc, "height", "100%"), C(lc, "left", "0"), C(lc, "top", "0"), C(lc, "margin", "0 !important"), C(lc, "pointer-events", "none"), C(sc, "*", N([C(lc, "pointer-events", "auto")]))]));
            default:
                return C(dc, ac(Du.cD), N([C(lc, "position", "absolute"), C(lc, "width", "100%"), C(lc, "height", "100%"), C(lc, "left", "0"), C(lc, "top", "0"), C(lc, "margin", "0 !important"), C(lc, "z-index", "0"), C(lc, "pointer-events", "none"), C(sc, "*", N([C(lc, "pointer-events", "auto")]))]))
            }
        }, P)
    }])), C(bc, ac(Du.cz), N([C(lc, "position", "relative"), C(lc, "border", "none"), C(lc, "flex-shrink", "0"), C(lc, "display", "flex"), C(lc, "flex-direction", "row"), C(lc, "flex-basis", "auto"), C(lc, "resize", "none"), C(lc, "font-feature-settings", "inherit"), C(lc, "box-sizing", "border-box"), C(lc, "margin", "0"), C(lc, "padding", "0"), C(lc, "border-width", "0"), C(lc, "border-style", "solid"), C(lc, "font-size", "inherit"), C(lc, "color", "inherit"), C(lc, "font-family", "inherit"), C(lc, "line-height", "1"), C(lc, "font-weight", "inherit"), C(lc, "text-decoration", "none"), C(lc, "font-style", "inherit"), C(dc, ac(Du.bt), N([C(lc, "flex-wrap", "wrap")])), C(dc, ac(Du.bX), N([C(lc, "-moz-user-select", "none"), C(lc, "-webkit-user-select", "none"), C(lc, "-ms-user-select", "none"), C(lc, "user-select", "none")])), C(dc, ac(Du.cU), N([C(lc, "cursor", "pointer")])), C(dc, ac(Du.cV), N([C(lc, "cursor", "text")])), C(dc, ac(Du.dq), N([C(lc, "pointer-events", "none !important")])), C(dc, ac(Du.aW), N([C(lc, "pointer-events", "auto !important")])), C(dc, ac(Du.av), N([C(lc, "opacity", "0")])), C(dc, ac(Du.as), N([C(lc, "opacity", "1")])), C(dc, ac(R(Du.c4, Du.av)) + ":hover", N([C(lc, "opacity", "0")])), C(dc, ac(R(Du.c4, Du.as)) + ":hover", N([C(lc, "opacity", "1")])), C(dc, ac(R(Du.c0, Du.av)) + ":focus", N([C(lc, "opacity", "0")])), C(dc, ac(R(Du.c0, Du.as)) + ":focus", N([C(lc, "opacity", "1")])), C(dc, ac(R(Du.a6, Du.av)) + ":active", N([C(lc, "opacity", "0")])), C(dc, ac(R(Du.a6, Du.as)) + ":active", N([C(lc, "opacity", "1")])), C(dc, ac(Du.cf), N([C(lc, "transition", C(Ur, ", ", C(It, function(n) {
        return n + " 160ms"
    }, N(["transform", "opacity", "filter", "background-color", "color", "font-size"]))))])), C(dc, ac(Du.du), N([C(lc, "overflow", "auto"), C(lc, "flex-shrink", "1")])), C(dc, ac(Du.dv), N([C(lc, "overflow-x", "auto"), C(dc, ac(Du.F), N([C(lc, "flex-shrink", "1")]))])), C(dc, ac(Du.dw), N([C(lc, "overflow-y", "auto"), C(dc, ac(Du.X), N([C(lc, "flex-shrink", "1")])), C(dc, ac(Du.dz), N([C(lc, "flex-shrink", "1")]))])), C(dc, ac(Du.cP), N([C(lc, "overflow", "hidden")])), C(dc, ac(Du.cQ), N([C(lc, "overflow-x", "hidden")])), C(dc, ac(Du.cR), N([C(lc, "overflow-y", "hidden")])), C(dc, ac(Du.bp), N([C(lc, "width", "auto")])), C(dc, ac(Du.aV), N([C(lc, "border-width", "0")])), C(dc, ac(Du.cI), N([C(lc, "border-style", "dashed")])), C(dc, ac(Du.cJ), N([C(lc, "border-style", "dotted")])), C(dc, ac(Du.cK), N([C(lc, "border-style", "solid")])), C(dc, ac(Du.x), N([C(lc, "white-space", "pre"), C(lc, "display", "inline-block")])), C(dc, ac(Du.de), N([C(lc, "line-height", "1.05"), C(lc, "background", "transparent"), C(lc, "text-align", "inherit")])), C(dc, ac(Du.dz), O), C(dc, ac(Du.F), N([C(lc, "display", "flex"), C(lc, "flex-direction", "row"), C(sc, ac(Du.cz), N([C(lc, "flex-basis", "0%"), C(dc, ac(Du.cj), N([C(lc, "flex-basis", "auto")])), C(dc, ac(Du.bU), N([C(lc, "flex-basis", "auto")]))])), C(sc, ac(Du.bb), N([C(lc, "align-self", "stretch !important")])), C(sc, ac(Du.bN), N([C(lc, "align-self", "stretch !important")])), C(sc, ac(Du.bq), N([C(lc, "flex-grow", "100000")])), C(sc, ac(Du.aY), N([C(lc, "flex-grow", "0"), C(lc, "flex-basis", "auto"), C(lc, "align-self", "stretch")])), C(sc, "u:first-of-type." + Du.cw, N([C(lc, "flex-grow", "1")])), C(sc, "s:first-of-type." + Du.cu, N([C(lc, "flex-grow", "1"), C(sc, ac(Du.cr), N([C(lc, "margin-left", "auto !important")]))])), C(sc, "s:last-of-type." + Du.cu, N([C(lc, "flex-grow", "1"), C(sc, ac(Du.cr), N([C(lc, "margin-right", "auto !important")]))])), C(sc, "s:only-of-type." + Du.cu, N([C(lc, "flex-grow", "1"), C(sc, ac(Du.cs), N([C(lc, "margin-top", "auto !important"), C(lc, "margin-bottom", "auto !important")]))])), C(sc, "s:last-of-type." + Du.cu + " ~ u", N([C(lc, "flex-grow", "0")])), C(sc, "u:first-of-type." + Du.cw + " ~ s." + Du.cu, N([C(lc, "flex-grow", "0")])), Ta(function(n) {
        switch (n) {
        case 0:
            return {
                a: N([C(lc, "align-items", "flex-start")]),
                b: N([C(lc, "align-self", "flex-start")])
            };
        case 1:
            return {
                a: N([C(lc, "align-items", "flex-end")]),
                b: N([C(lc, "align-self", "flex-end")])
            };
        case 2:
            return {
                a: N([C(lc, "justify-content", "flex-end")]),
                b: T
            };
        case 3:
            return {
                a: N([C(lc, "justify-content", "flex-start")]),
                b: T
            };
        case 4:
            return {
                a: N([C(lc, "justify-content", "center")]),
                b: T
            };
        default:
            return {
                a: N([C(lc, "align-items", "center")]),
                b: N([C(lc, "align-self", "center")])
            }
        }
    }), C(dc, ac(Du.dB), N([C(lc, "justify-content", "space-between")])), C(dc, ac(Du.a2), N([C(lc, "align-items", "baseline")]))])), C(dc, ac(Du.X), N([C(lc, "display", "flex"), C(lc, "flex-direction", "column"), C(sc, ac(Du.cz), N([C(lc, "flex-basis", "0px"), C(lc, "min-height", "min-content"), C(dc, ac(Du.bM), N([C(lc, "flex-basis", "auto")]))])), C(sc, ac(Du.bb), N([C(lc, "flex-grow", "100000")])), C(sc, ac(Du.bq), N([C(lc, "width", "100%")])), C(sc, ac(Du.ck), N([C(lc, "width", "100%")])), C(sc, ac(Du.bp), N([C(lc, "align-self", "flex-start")])), C(sc, "u:first-of-type." + Du.ct, N([C(lc, "flex-grow", "1")])), C(sc, "s:first-of-type." + Du.cv, N([C(lc, "flex-grow", "1"), C(sc, ac(Du.cs), N([C(lc, "margin-top", "auto !important"), C(lc, "margin-bottom", "0 !important")]))])), C(sc, "s:last-of-type." + Du.cv, N([C(lc, "flex-grow", "1"), C(sc, ac(Du.cs), N([C(lc, "margin-bottom", "auto !important"), C(lc, "margin-top", "0 !important")]))])), C(sc, "s:only-of-type." + Du.cv, N([C(lc, "flex-grow", "1"), C(sc, ac(Du.cs), N([C(lc, "margin-top", "auto !important"), C(lc, "margin-bottom", "auto !important")]))])), C(sc, "s:last-of-type." + Du.cv + " ~ u", N([C(lc, "flex-grow", "0")])), C(sc, "u:first-of-type." + Du.ct + " ~ s." + Du.cv, N([C(lc, "flex-grow", "0")])), Ta(function(n) {
        switch (n) {
        case 0:
            return {
                a: N([C(lc, "justify-content", "flex-start")]),
                b: N([C(lc, "margin-bottom", "auto")])
            };
        case 1:
            return {
                a: N([C(lc, "justify-content", "flex-end")]),
                b: N([C(lc, "margin-top", "auto")])
            };
        case 2:
            return {
                a: N([C(lc, "align-items", "flex-end")]),
                b: N([C(lc, "align-self", "flex-end")])
            };
        case 3:
            return {
                a: N([C(lc, "align-items", "flex-start")]),
                b: N([C(lc, "align-self", "flex-start")])
            };
        case 4:
            return {
                a: N([C(lc, "align-items", "center")]),
                b: N([C(lc, "align-self", "center")])
            };
        default:
            return {
                a: N([C(lc, "justify-content", "center")]),
                b: T
            }
        }
    }), C(sc, ac(Du.aY), N([C(lc, "flex-grow", "0"), C(lc, "flex-basis", "auto"), C(lc, "width", "100%"), C(lc, "align-self", "stretch !important")])), C(dc, ac(Du.dB), N([C(lc, "justify-content", "space-between")]))])), C(dc, ac(Du.c2), N([C(lc, "display", "-ms-grid"), C(sc, ".gp", N([C(sc, ac(Du.cz), N([C(lc, "width", "100%")]))])), C(gr, {
        a: "display",
        b: "grid"
    }, N([{
        a: "display",
        b: "grid"
    }])), (Sa = function(n) {
        switch (n) {
        case 0:
            return N([C(lc, "justify-content", "flex-start")]);
        case 1:
            return N([C(lc, "justify-content", "flex-end")]);
        case 2:
            return N([C(lc, "align-items", "flex-end")]);
        case 3:
            return N([C(lc, "align-items", "flex-start")]);
        case 4:
            return N([C(lc, "align-items", "center")]);
        default:
            return N([C(lc, "justify-content", "center")])
        }
    }
    ,
    {
        $: 6,
        a: C(vc, function(n) {
            return N([C(sc, ac(Du.cz), N([C(dc, ja(n), Sa(n))]))])
        }, hc)
    })])), C(dc, ac(Du.bZ), N([C(lc, "display", "block"), C(sc, ac(Du.cz + ":first-child"), N([C(lc, "margin", "0 !important")])), C(sc, ac(Du.cz + (ja(3) + ":first-child + .") + Du.cz), N([C(lc, "margin", "0 !important")])), C(sc, ac(Du.cz + (ja(2) + ":first-child + .") + Du.cz), N([C(lc, "margin", "0 !important")])), Ta(function(n) {
        switch (n) {
        case 0:
        case 1:
            return {
                a: T,
                b: T
            };
        case 2:
            return {
                a: T,
                b: N([C(lc, "float", "right"), C(dc, "::after", N([C(lc, "content", '""'), C(lc, "display", "table"), C(lc, "clear", "both")]))])
            };
        case 3:
            return {
                a: T,
                b: N([C(lc, "float", "left"), C(dc, "::after", N([C(lc, "content", '""'), C(lc, "display", "table"), C(lc, "clear", "both")]))])
            };
        default:
            return {
                a: T,
                b: T
            }
        }
    })])), C(dc, ac(Du.da), N([C(lc, "white-space", "pre-wrap !important"), C(lc, "height", "100%"), C(lc, "width", "100%"), C(lc, "background-color", "transparent")])), C(dc, ac(Du.dd), N([C(dc, ac(Du.dz), N([C(lc, "flex-basis", "auto")]))])), C(dc, ac(Du.dc), N([C(lc, "white-space", "pre-wrap !important"), C(lc, "cursor", "text"), C(sc, ac(Du.db), N([C(lc, "white-space", "pre-wrap !important"), C(lc, "color", "transparent")]))])), C(dc, ac(Du.b_), N([C(lc, "display", "block"), C(lc, "white-space", "normal"), C(lc, "overflow-wrap", "break-word"), C(dc, ac(Du.a9), N([C(lc, "z-index", "0"), C(sc, ac(Du.cD), N([C(lc, "z-index", "-1")]))])), C(kn, ac(Du.x), N([C(lc, "display", "inline"), C(lc, "white-space", "normal")])), C(kn, ac(Du.b_), N([C(lc, "display", "inline"), C(dc, "::after", N([C(lc, "content", "none")])), C(dc, "::before", N([C(lc, "content", "none")]))])), C(kn, ac(Du.dz), N([C(lc, "display", "inline"), C(lc, "white-space", "normal"), C(dc, ac(Du.cj), N([C(lc, "display", "inline-block")])), C(dc, ac(Du.c8), N([C(lc, "display", "flex")])), C(dc, ac(Du.cD), N([C(lc, "display", "flex")])), C(dc, ac(Du.co), N([C(lc, "display", "flex")])), C(dc, ac(Du.cE), N([C(lc, "display", "flex")])), C(dc, ac(Du.dk), N([C(lc, "display", "flex")])), C(dc, ac(Du.dj), N([C(lc, "display", "flex")])), C(sc, ac(Du.x), N([C(lc, "display", "inline"), C(lc, "white-space", "normal")]))])), C(sc, ac(Du.F), N([C(lc, "display", "inline")])), C(sc, ac(Du.X), N([C(lc, "display", "inline-flex")])), C(sc, ac(Du.c2), N([C(lc, "display", "inline-grid")])), Ta(function(n) {
        switch (n) {
        case 0:
        case 1:
            return {
                a: T,
                b: T
            };
        case 2:
            return {
                a: T,
                b: N([C(lc, "float", "right")])
            };
        case 3:
            return {
                a: T,
                b: N([C(lc, "float", "left")])
            };
        default:
            return {
                a: T,
                b: T
            }
        }
    })])), C(dc, ".hidden", N([C(lc, "display", "none")])), C(dc, ac(Du.dV), N([C(lc, "font-weight", "100")])), C(dc, ac(Du.dM), N([C(lc, "font-weight", "200")])), C(dc, ac(Du.dQ), N([C(lc, "font-weight", "300")])), C(dc, ac(Du.dS), N([C(lc, "font-weight", "400")])), C(dc, ac(Du.dR), N([C(lc, "font-weight", "500")])), C(dc, ac(Du.dU), N([C(lc, "font-weight", "600")])), C(dc, ac(Du.cG), N([C(lc, "font-weight", "700")])), C(dc, ac(Du.dL), N([C(lc, "font-weight", "800")])), C(dc, ac(Du.dN), N([C(lc, "font-weight", "900")])), C(dc, ac(Du.df), N([C(lc, "font-style", "italic")])), C(dc, ac(Du.dH), N([C(lc, "text-decoration", "line-through")])), C(dc, ac(Du.d$), N([C(lc, "text-decoration", "underline"), C(lc, "text-decoration-skip-ink", "auto"), C(lc, "text-decoration-skip", "ink")])), C(dc, R(ac(Du.d$), ac(Du.dH)), N([C(lc, "text-decoration", "line-through underline"), C(lc, "text-decoration-skip-ink", "auto"), C(lc, "text-decoration-skip", "ink")])), C(dc, ac(Du.dW), N([C(lc, "font-style", "normal")])), C(dc, ac(Du.dO), N([C(lc, "text-align", "justify")])), C(dc, ac(Du.a5), N([C(lc, "text-align", "justify-all")])), C(dc, ac(Du.dK), N([C(lc, "text-align", "center")])), C(dc, ac(Du.dT), N([C(lc, "text-align", "right")])), C(dc, ac(Du.dP), N([C(lc, "text-align", "left")])), C(dc, ".modal", N([C(lc, "position", "fixed"), C(lc, "left", "0"), C(lc, "top", "0"), C(lc, "width", "100%"), C(lc, "height", "100%"), C(lc, "pointer-events", "none")]))]))]), kn = Ea(N([C(It, function(n) {
        return C(bc, ".border-" + Mr(n), N([C(lc, "border-width", Mr(n) + "px")]))
    }, C(z, 0, 6)), C(It, function(n) {
        return C(bc, ".font-size-" + Mr(n), N([C(lc, "font-size", Mr(n) + "px")]))
    }, C(z, 8, 32)), C(It, function(n) {
        return C(bc, ".p-" + Mr(n), N([C(lc, "padding", Mr(n) + "px")]))
    }, C(z, 0, 24)), N([C(bc, ".v-smcp", N([C(lc, "font-variant", "small-caps")])), C(bc, ".v-smcp-off", N([C(lc, "font-variant", "normal")]))]), Na("zero"), Na("onum"), Na("liga"), Na("dlig"), Na("ordn"), Na("tnum"), Na("afrc"), Na("frac")])), z = "\n.explain {\n    border: 6px solid rgb(174, 121, 15) !important;\n}\n.explain > ." + Du.cz + " {\n    border: 4px dashed rgb(0, 151, 167) !important;\n}\n\n.ctr {\n    border: none !important;\n}\n.explain > .ctr > ." + Du.cz + " {\n    border: 4px dashed rgb(0, 151, 167) !important;\n}\n\n", z = "@media screen and (-ms-high-contrast: active), (-ms-high-contrast: none) {" + ac(Du.cz) + (ac(Du.F) + (" > " + ac(Du.cz) + (" { flex-basis: auto !important; } " + ac(Du.cz) + (ac(Du.F) + (" > " + ac(Du.cz) + (ac(Du.aY) + ' { flex-basis: auto !important; }}\ninput[type="search"],\ninput[type="search"]::-webkit-search-decoration,\ninput[type="search"]::-webkit-search-cancel-button,\ninput[type="search"]::-webkit-search-results-button,\ninput[type="search"]::-webkit-search-results-decoration {\n  -webkit-appearance:none;\n}\n\ninput[type=range] {\n  -webkit-appearance: none; \n  background: transparent;\n  position:absolute;\n  left:0;\n  top:0;\n  z-index:10;\n  width: 100%;\n  outline: dashed 1px;\n  height: 100%;\n  opacity: 0;\n}\n\ninput[type=range]::-moz-range-track {\n    background: transparent;\n    cursor: pointer;\n}\ninput[type=range]::-ms-track {\n    background: transparent;\n    cursor: pointer;\n}\ninput[type=range]::-webkit-slider-runnable-track {\n    background: transparent;\n    cursor: pointer;\n}\n\ninput[type=range]::-webkit-slider-thumb {\n    -webkit-appearance: none;\n    opacity: 0.5;\n    width: 80px;\n    height: 80px;\n    background-color: black;\n    border:none;\n    border-radius: 5px;\n}\ninput[type=range]::-moz-range-thumb {\n    opacity: 0.5;\n    width: 80px;\n    height: 80px;\n    background-color: black;\n    border:none;\n    border-radius: 5px;\n}\ninput[type=range]::-ms-thumb {\n    opacity: 0.5;\n    width: 80px;\n    height: 80px;\n    background-color: black;\n    border:none;\n    border-radius: 5px;\n}\ninput[type=range][orient=vertical]{\n    writing-mode: bt-lr; /* IE */\n    -webkit-appearance: slider-vertical;  /* WebKit */\n}\n')))))) + z, $c = b(function(n, r) {
        return {
            aX: r,
            n: T,
            af: T,
            G: n
        }
    }), gc = b(function(n, r) {
        var c = n;
        return D(Nt, b(function(n, r) {
            switch (n.$) {
            case 0:
                return m(r, {
                    af: C(Sr, {
                        a: n.a,
                        b: n.b
                    }, r.af)
                });
            case 3:
                var t = n.a;
                return m(r, {
                    n: C(Sr, {
                        aX: "\n}",
                        n: T,
                        af: n.b,
                        G: "@supports (" + t.a + ":" + t.b + ") {" + c.G
                    }, r.n)
                });
            case 5:
                t = n.b;
                return m(r, {
                    n: C(Sr, C(gc, C($c, c.G + " + " + n.a, ""), t), r.n)
                });
            case 1:
                var e = n.a
                  , a = n.b;
                return m(r, {
                    n: C(Sr, C(gc, C($c, c.G + " > " + e, ""), a), r.n)
                });
            case 2:
                e = n.a,
                a = n.b;
                return m(r, {
                    n: C(Sr, C(gc, C($c, c.G + " " + e, ""), a), r.n)
                });
            case 4:
                var u = n.b;
                return m(r, {
                    n: C(Sr, C(gc, C($c, R(c.G, n.a), ""), u), r.n)
                });
            default:
                u = n.a;
                return m(r, {
                    n: C(Sr, C(gc, C($c, c.G, ""), u), r.n)
                })
            }
        }), c, r)
    }), wc = R(z, (kn = R(gr, kn),
    La = function(n) {
        return Ia(C(It, function(n) {
            return n.a + ":" + n.b + ";"
        }, n))
    }
    ,
    Ia(C(It, mc, D(Nt, b(function(n, r) {
        var t = n.b;
        return C(Sr, C(gc, C($c, n.a, ""), t), r)
    }), T, kn)))));
    function mc(n) {
        return R(function(n) {
            return n.af.b ? n.G + ("{" + La(n.af)) + (n.aX + "}") : ""
        }(n), Ia(C(It, mc, n.n)))
    }
    function xc(n) {
        switch (n.dh) {
        case 0:
            return D(za, "div", T, N([D(za, "style", T, N([Vc(wc)]))]));
        case 1:
            return Vc("");
        default:
            return D(za, "elm-ui-static-rules", N([C(fc, "rules", cu(wc))]), T)
        }
    }
    function yc(n) {
        switch (n.$) {
        case 0:
            return "serif";
        case 1:
            return "sans-serif";
        case 2:
            return "monospace";
        case 3:
            return '"' + (r = n.a) + '"';
        case 4:
            var r = n.a;
            return '"' + r + '"';
        default:
            return '"' + (r = n.a.di) + '"'
        }
    }
    function kc(n) {
        switch (n.$) {
        case 0:
            return "smcp" === n.a;
        case 1:
            return !1;
        default:
            return "smcp" === n.a && 1 === n.b
        }
    }
    function zc(n) {
        return 5 === n.$ && C(Pa, kc, n.a.cg)
    }
    function Ec(n) {
        switch (n.$) {
        case 0:
            return '"' + n.a + '"';
        case 1:
            return '"' + n.a + '" 0';
        default:
            return '"' + n.a + ('" ' + Mr(n.b))
        }
    }
    function jc(n) {
        return 5 !== n.$ ? Pr : Br(C(Ur, ", ", C(It, Ec, n.a.cg)))
    }
    function Tc(n) {
        return n.b ? Br(D(Kr, ft, n.a, n.b)) : Pr
    }
    function Nc(n) {
        return n.b ? Br(D(Kr, Jc, n.a, n.b)) : Pr
    }
    function Ic(n) {
        function r(n) {
            return 4 !== n.$ ? Pr : Br("@import url('" + n.b + "');")
        }
        function t(n) {
            return C(Ur, "\n", C(oe, r, n.b))
        }
        function e(n) {
            var r = n.a
              , n = function(n) {
                return D(Kr, b(function(n, r) {
                    if (1 !== r.$)
                        return r;
                    if (5 !== n.$)
                        return r;
                    n = n.a.cp;
                    if (1 === n.$)
                        return r;
                    n = n.a;
                    return Br({
                        a: ii(ci(n).bK),
                        b: ii(ci(n).cN)
                    })
                }), Pr, n)
            }(n.b);
            return C(Ur, "", C(It, 1 === n.$ ? ai(r) : C(ei, r, n.a), a))
        }
        var a = C(It, Nr, n);
        return R(C(Ur, "\n", C(It, t, n)), C(Ur, "\n", C(It, e, n)))
    }
    function Sc(n) {
        return qn(Mn(n))
    }
    function Lc(n) {
        return C(Zu, N([Iu(yi)]), N([xi(n)]))
    }
    function Oc(n) {
        return C(Zu, N([Iu(ki)]), N([xi(n)]))
    }
    function Ac(n) {
        switch (n.$) {
        case 0:
            var r = Mr(n.a)
              , t = "height-px-" + r;
            return {
                a: qi,
                b: Du.bM + " " + t,
                c: N([D(Ei, t, "height", r + "px")])
            };
        case 1:
            return {
                a: C(Ni, Wi, qi),
                b: Du.ba,
                c: T
            };
        case 2:
            r = n.a;
            return 1 === r ? {
                a: C(Ni, li, qi),
                b: Du.bb,
                c: T
            } : {
                a: C(Ni, li, qi),
                b: Du.bN + (" height-fill-" + Mr(r)),
                c: N([D(Ei, Du.cz + ("." + Du.X + (" > " + ac("height-fill-" + Mr(r)))), "flex-grow", Mr(1e5 * r))])
            };
        case 3:
            var e = n.a
              , a = n.b
              , u = "min-height-" + Mr(e)
              , c = D(Ei, u, "min-height", Mr(e) + "px !important")
              , i = Ac(a)
              , o = i.a
              , f = i.b
              , e = i.c;
            return {
                a: C(Ni, di, o),
                b: u + " " + f,
                c: C(Sr, c, e)
            };
        default:
            i = n.a,
            a = n.b,
            u = "max-height-" + Mr(i),
            c = D(Ei, u, "max-height", Mr(i) + "px"),
            a = Ac(a),
            o = a.a,
            f = a.b,
            e = a.c;
            return {
                a: C(Ni, di, o),
                b: u + " " + f,
                c: C(Sr, c, e)
            }
        }
    }
    function Cc(n) {
        switch (n.$) {
        case 0:
            var r = n.a;
            return {
                a: qi,
                b: Du.cj + (" width-px-" + Mr(r)),
                c: N([D(Ei, "width-px-" + Mr(r), "width", Mr(r) + "px")])
            };
        case 1:
            return {
                a: C(Ni, Fi, qi),
                b: Du.bp,
                c: T
            };
        case 2:
            r = n.a;
            return 1 === r ? {
                a: C(Ni, wi, qi),
                b: Du.bq,
                c: T
            } : {
                a: C(Ni, wi, qi),
                b: Du.ck + (" width-fill-" + Mr(r)),
                c: N([D(Ei, Du.cz + ("." + Du.F + (" > " + ac("width-fill-" + Mr(r)))), "flex-grow", Mr(1e5 * r))])
            };
        case 3:
            var t = n.a
              , e = n.b
              , a = "min-width-" + Mr(t)
              , u = D(Ei, a, "min-width", Mr(t) + "px")
              , c = Cc(e)
              , i = c.a
              , o = c.b
              , t = c.c;
            return {
                a: C(Ni, gi, i),
                b: a + " " + o,
                c: C(Sr, u, t)
            };
        default:
            c = n.a,
            e = n.b,
            a = "max-width-" + Mr(c),
            u = D(Ei, a, "max-width", Mr(c) + "px"),
            e = Cc(e),
            i = e.a,
            o = e.b,
            t = e.c;
            return {
                a: C(Ni, gi, i),
                b: a + " " + o,
                c: C(Sr, u, t)
            }
        }
    }
    function Dc(n) {
        return 4 === n.$ && 11 === n.b.$ && !n.b.a
    }
    function Rc(n) {
        return {
            $: 8,
            a: n
        }
    }
    function _c(n) {
        return {
            $: 7,
            a: n
        }
    }
    function Wc(n) {
        var r = n.ap
          , n = C(Te, 600, Nc(N([600, .95 * n.aH])))
          , n = C(Te, 800, Nc(N([800, .95 * r, 8 * n / 5])));
        return {
            a: it(5 * n / 8),
            b: it(n)
        }
    }
    function Hc(n) {
        return n = Ro(n),
        Do({
            bx: n.bx,
            bz: .8 * n.bz,
            bL: .8 * n.bL,
            b6: .8 * n.b6
        })
    }
    function qc(n) {
        return {
            aK: (r = C(Jc, n.aH, n.ap),
            t = C(ft, n.aH, n.ap),
            r < 600 ? 0 : 1200 < t ? 1200 < t && t <= 1920 ? 2 : 3 : 1),
            bY: $(n.aH, n.ap) < 0 ? 0 : 1
        };
        var r, t
    }
    function Fc(n) {
        return qc(n.o).aK ? 50 : 10
    }
    function Bc(n) {
        return C(yu, Mo, C(Go, 2, (r = (n = D(Kr, Qo, {
            a: T,
            b: Yi
        }, r = n)).a,
        C(Sr, ji(n.b), r))));
        var r
    }
    function Pc(n) {
        return C(yu, eo, {
            $: 2,
            a: n
        })
    }
    function Gc(n) {
        return 5 === (n = n.d) ? "WOORDLE" : "WOORDLE" + Mr(n)
    }
    function Mc(n) {
        return n.y ? Sf : qo
    }
    function Uc(n) {
        return n.s ? Of : pf
    }
    function Kc(n) {
        return n.s ? Hc(Df) : Df
    }
    function Yc(n) {
        return n.y ? Gf : Mf
    }
    var Vc = Wn
      , Jc = b(function(n, r) {
        return $(n, r) < 0 ? n : r
    })
      , Qc = E(function(n, r, t) {
        var e = r.a
          , r = r.b;
        return n ? t + "\n  " + e + ": " + r + " !important;" : t + "\n  " + e + ": " + r + ";"
    })
      , Xc = f(function(n, r, t, e) {
        if (1 === r.$)
            return N([t + ("{" + D(Kr, Qc(!1), "", e)) + "\n}"]);
        switch (r.a) {
        case 1:
            switch (n.c4) {
            case 0:
                return T;
            case 2:
                return N([t + ("-hv {" + D(Kr, Qc(!0), "", e)) + "\n}"]);
            default:
                return N([t + ("-hv:hover {" + D(Kr, Qc(!1), "", e)) + "\n}"])
            }
        case 0:
            var a = D(Kr, Qc(!1), "", e);
            return N([t + "-fs:focus {" + a + "\n}", "." + Du.cz + ":focus " + t + "-fs  {" + a + "\n}", t + "-fs:focus-within {" + a + "\n}", ".ui-slide-bar:focus + " + ac(Du.cz) + " .focusable-thumb" + t + "-fs {" + a + "\n}"]);
        default:
            return N([t + ("-act:active {" + D(Kr, Qc(!1), "", e)) + "\n}"])
        }
    })
      , Zc = E(function(r, n, t) {
        switch (n.$) {
        case 0:
            return j(Xc, r, t, n.a, n.b);
        case 13:
            return j(Xc, r, t, "." + (a = n.a), N([C(tc, "box-shadow", n.b)]));
        case 12:
            return j(Xc, r, t, "." + (a = n.a), N([C(tc, "opacity", uc(C(ft, 0, C(Jc, 1, 1 - n.b))))]));
        case 2:
            var e = n.a;
            return j(Xc, r, t, ".font-size-" + Mr(e), N([C(tc, "font-size", Mr(e) + "px")]));
        case 1:
            var a = n.a
              , u = n.b
              , c = C(Ur, ", ", C(oe, jc, u))
              , i = N([C(tc, "font-family", C(Ur, ", ", C(It, yc, u))), C(tc, "font-feature-settings", c), C(tc, "font-variant", C(Pa, zc, u) ? "small-caps" : "normal")]);
            return j(Xc, r, t, "." + a, i);
        case 3:
            return j(Xc, r, t, "." + ($ = n.a), N([C(tc, n.b, z = n.c)]));
        case 4:
            return j(Xc, r, t, "." + ($ = n.a), N([C(tc, n.b, cc(n.c))]));
        case 5:
            var o = n.a
              , f = n.b
              , s = n.c
              , b = Mr(s) + "px"
              , d = Mr(f) + "px"
              , l = "." + Du.F
              , h = "." + Du.bt + l
              , p = "." + Du.bw
              , e = "." + Du.b_
              , c = "." + Du.bZ
              , v = "." + Du.bv
              , u = uc(s / 2) + "px"
              , a = uc(f / 2) + "px"
              , i = "." + Du.X
              , $ = "." + o
              , f = "." + Du.cz;
            return Ea(N([j(Xc, r, t, $ + l + " > " + f + " + " + f, N([C(tc, "margin-left", d)])), j(Xc, r, t, $ + h + " > " + f, N([C(tc, "margin", u + " " + a)])), j(Xc, r, t, $ + i + " > " + f + " + " + f, N([C(tc, "margin-top", b)])), j(Xc, r, t, $ + c + " > " + f + " + " + f, N([C(tc, "margin-top", b)])), j(Xc, r, t, $ + c + " > " + v, N([C(tc, "margin-right", d)])), j(Xc, r, t, $ + c + " > " + p, N([C(tc, "margin-left", d)])), j(Xc, r, t, R($, e), N([C(tc, "line-height", "calc(1em + " + Mr(s) + "px)")])), j(Xc, r, t, "textarea" + f + $, N([C(tc, "line-height", "calc(1em + " + Mr(s) + "px)"), C(tc, "height", "calc(100% + " + Mr(s) + "px)")])), j(Xc, r, t, $ + e + " > " + v, N([C(tc, "margin-right", d)])), j(Xc, r, t, $ + e + " > " + p, N([C(tc, "margin-left", d)])), j(Xc, r, t, $ + e + "::after", N([C(tc, "content", "''"), C(tc, "display", "block"), C(tc, "height", "0"), C(tc, "width", "0"), C(tc, "margin-top", Mr(-1 * (s / 2 | 0)) + "px")])), j(Xc, r, t, $ + e + "::before", N([C(tc, "content", "''"), C(tc, "display", "block"), C(tc, "height", "0"), C(tc, "width", "0"), C(tc, "margin-bottom", Mr(-1 * (s / 2 | 0)) + "px")]))]));
        case 7:
            var o = n.a
              , g = n.b
              , p = n.c
              , w = n.d
              , v = n.e;
            return j(Xc, r, t, $ = "." + o, N([C(tc, "padding", uc(g) + ("px " + uc(p) + ("px " + uc(w) + ("px " + uc(v)))) + "px")]));
        case 6:
            o = n.a,
            g = n.b,
            p = n.c,
            w = n.d,
            v = n.e;
            return j(Xc, r, t, $ = "." + o, N([C(tc, "border-width", Mr(g) + ("px " + Mr(p) + ("px " + Mr(w) + ("px " + Mr(v)))) + "px")]));
        case 8:
            var s = n.a
              , m = E(function(n, r, t) {
                for (; ; )
                    switch (t.$) {
                    case 0:
                        return Mr(t.a) + "px";
                    case 1:
                        var e = {
                            a: n,
                            b: r
                        };
                        if (1 === e.a.$) {
                            if (1 === e.b.$)
                                return "max-content";
                            return "minmax(max-content, " + Mr(u = e.b.a) + "px)"
                        }
                        if (1 === e.b.$) {
                            var a = e.a.a;
                            return "minmax(" + Mr(a) + "px, max-content)"
                        }
                        var a = e.a.a
                          , u = e.b.a;
                        return "minmax(" + Mr(a) + ("px, " + Mr(u)) + "px)";
                    case 2:
                        var c = t.a
                          , e = {
                            a: n,
                            b: r
                        };
                        if (1 === e.a.$) {
                            if (1 === e.b.$)
                                return Mr(c) + "fr";
                            return "minmax(max-content, " + Mr(u = e.b.a) + "px)"
                        }
                        if (1 === e.b.$) {
                            a = e.a.a;
                            return "minmax(" + Mr(a) + ("px, " + Mr(c)) + "frfr)"
                        }
                        a = e.a.a,
                        u = e.b.a;
                        return "minmax(" + Mr(a) + ("px, " + Mr(u)) + "px)";
                    case 3:
                        var i = t.a
                          , o = t.b;
                        n = Br(i),
                        r = r,
                        t = o;
                        continue;
                    default:
                        i = t.a,
                        o = t.b;
                        n = n,
                        r = Br(i),
                        t = o;
                        continue
                    }
            })
              , g = function(n) {
                return D(m, Pr, Pr, n)
            }
              , x = g(s.dC.b)
              , p = "grid-template-rows: " + C(Ur, " ", C(It, g, s.dt)) + ";"
              , w = "-ms-grid-rows: " + C(Ur, x, C(It, g, s.J)) + ";"
              , v = "-ms-grid-columns: " + C(Ur, x, C(It, g, s.J)) + ";"
              , y = "grid-row-gap:" + g(s.dC.b) + ";"
              , x = "grid-column-gap:" + g(s.dC.a) + ";"
              , g = "grid-template-columns: " + C(Ur, " ", C(It, g, s.J)) + ";";
            return N([($ = ".grid-rows-" + C(Ur, "-", C(It, nc, s.dt)) + ("-cols-" + C(Ur, "-", C(It, nc, s.J)) + ("-space-x-" + nc(s.dC.a) + ("-space-y-" + nc(s.dC.b))))) + "{" + v + w + "}", "@supports (display:grid) {" + ($ + "{" + g + p + x + y + "}") + "}"]);
        case 9:
            var x = n.a
              , y = C(Ur, " ", N(["-ms-grid-row: " + Mr(x.F) + ";", "-ms-grid-row-span: " + Mr(x.ap) + ";", "-ms-grid-column: " + Mr(x.cS) + ";", "-ms-grid-column-span: " + Mr(x.aH) + ";"]))
              , k = C(Ur, " ", N(["grid-row: " + Mr(x.F) + (" / " + Mr(x.F + x.ap)) + ";", "grid-column: " + Mr(x.cS) + (" / " + Mr(x.cS + x.aH)) + ";"]));
            return N([($ = ".grid-pos-" + Mr(x.F) + ("-" + Mr(x.cS) + ("-" + Mr(x.aH) + ("-" + Mr(x.ap))))) + "{" + y + "}", "@supports (display:grid) {" + ($ + "{" + k + "}") + "}"]);
        case 11:
            $ = n.a;
            return C(vc, function(n) {
                return D(Zc, r, n, Br($))
            }, n.b);
        default:
            var k = n.a
              , z = function(n) {
                switch (n.$) {
                case 0:
                    return Pr;
                case 1:
                    var r = n.a
                      , t = r.b
                      , e = r.c;
                    return Br("translate3d(" + uc(r.a) + ("px, " + uc(t) + ("px, " + uc(e))) + "px)");
                default:
                    var a = n.a
                      , u = a.b
                      , c = a.c
                      , i = n.b
                      , o = i.a
                      , f = i.b
                      , s = i.c
                      , r = n.c
                      , t = r.a
                      , e = r.b
                      , i = r.c
                      , r = n.d
                      , c = "translate3d(" + uc(a.a) + ("px, " + uc(u) + ("px, " + uc(c))) + "px)"
                      , s = "scale3d(" + uc(o) + (", " + uc(f) + (", " + uc(s))) + ")"
                      , r = "rotate3d(" + uc(t) + (", " + uc(e) + (", " + uc(i) + (", " + uc(r)))) + "rad)";
                    return Br(c + " " + s + " " + r)
                }
            }(k)
              , z = {
                a: $ = ma(k),
                b: z
            };
            return z.a.$ || z.b.$ ? T : j(Xc, r, t, "." + (o = z.a.a), N([C(tc, "transform", z.b.a)]))
        }
    })
      , ni = b(function(t, n) {
        return du(C(It, function(n) {
            var r = D(Zc, t, n, Pr);
            return {
                a: xa(n),
                b: C(ou, cu, r)
            }
        }, n))
    })
      , ri = b(function(n, r) {
        return n + " {" + C(Ur, "", C(It, function(n) {
            return n.a + ": " + n.b + ";"
        }, r)) + "}"
    })
      , ti = E(function(n, r, t) {
        var e = t.b;
        return N([C(ri, "." + n + "." + r + ", ." + n + " ." + r, t.a), C(ri, "." + n + "." + r + "> ." + Du.x + ", ." + n + " ." + r + " > ." + Du.x, e)])
    })
      , ei = E(function(n, r, t) {
        var e = r.a
          , r = r.b
          , n = h(n, t) ? n : t + " ." + n;
        return C(Ur, " ", R(D(ti, n, Du.dA, r), D(ti, n, Du.c1, e)))
    })
      , ai = b(function(n, r) {
        n = h(n, r) ? n : r + " ." + n;
        return C(Ur, " ", N([C(ri, "." + n + "." + Du.dA + ", ." + n + " ." + Du.dA, N([{
            a: "line-height",
            b: "1"
        }])), C(ri, "." + n + "." + Du.dA + "> ." + Du.x + ", ." + n + " ." + Du.dA + " > ." + Du.x, N([{
            a: "vertical-align",
            b: "0"
        }, {
            a: "line-height",
            b: "1"
        }]))]))
    })
      , ui = E(function(n, r, t) {
        return {
            ap: r / n,
            aE: n,
            ch: t
        }
    })
      , ci = function(n) {
        var r = N([n.cN, n.cC, n.cW, n.dg])
          , t = C(Te, n.cW, Nc(r))
          , e = C(Te, n.cC, Nc(C(wu, function(n) {
            return !h(n, t)
        }, r)))
          , a = C(Te, n.cN, Tc(r))
          , n = 1 / (a - t)
          , r = 1 - a;
        return {
            cN: D(ui, 1 / (a - e), a - e, 1 - a),
            bK: D(ui, n, a - t, r)
        }
    }
      , ii = function(n) {
        return {
            a: N([{
                a: "display",
                b: "block"
            }]),
            b: N([{
                a: "display",
                b: "inline-block"
            }, {
                a: "line-height",
                b: uc(n.ap)
            }, {
                a: "vertical-align",
                b: uc(n.ch) + "em"
            }, {
                a: "font-size",
                b: uc(n.aE) + "em"
            }])
        }
    }
      , oi = b(function(t, n) {
        var r = D(Kr, b(function(n, r) {
            return {
                a4: R(r.a4, D(Zc, t, n, Pr)),
                aS: 1 === (n = 1 !== (n = n).$ ? Pr : Br({
                    a: n.a,
                    b: n.b
                })).$ ? r.aS : C(Sr, n.a, r.aS)
            }
        }), {
            a4: T,
            aS: T
        }, n)
          , n = r.a4;
        return R(Ic(r.aS), Ia(n))
    })
      , fi = b(function(n, r) {
        switch (n.dh) {
        case 0:
        case 1:
            return D(za, "div", T, N([D(za, "style", T, N([Vc(C(oi, n, r))]))]));
        default:
            return D(za, "elm-ui-rules", N([C(fc, "rules", C(ni, n, r))]), T)
        }
    })
      , si = f(function(n, r, t, e) {
        t = C(fi, r, D(Kr, rc, {
            a: Kt,
            b: ka(r.c0)
        }, t).b);
        return n ? C(Sr, {
            a: "static-stylesheet",
            b: xc(r)
        }, C(Sr, {
            a: "dynamic-stylesheet",
            b: t
        }, e)) : C(Sr, {
            a: "dynamic-stylesheet",
            b: t
        }, e)
    })
      , bi = f(function(n, r, t, e) {
        t = C(fi, r, D(Kr, rc, {
            a: Kt,
            b: ka(r.c0)
        }, t).b);
        return n ? C(Sr, xc(r), C(Sr, t, e)) : C(Sr, t, e)
    })
      , di = pa(45)
      , li = pa(37)
      , hi = Hn("p")
      , pi = b(function(n, r) {
        var t = r.a;
        if (n.$) {
            var e = n.a;
            return h(e & r.b, e)
        }
        n = n.a;
        return h(n & t, n)
    })
      , vi = Hn("s")
      , $i = Hn("u")
      , gi = pa(44)
      , wi = pa(39)
      , mi = e(function(n, r, t, a, u, e) {
        var c = b(function(n, r) {
            if (1 === a.$) {
                var t = a.a;
                return D(Sc, n, r, function() {
                    switch (u.$) {
                    case 0:
                        return t;
                    case 2:
                        return j(si, !1, u.a, u.b, t);
                    default:
                        return j(si, !0, u.a, u.b, t)
                    }
                }())
            }
            var e = a.a;
            return C(function() {
                switch (n) {
                case "div":
                    return Zu;
                case "p":
                    return hi;
                default:
                    return za(n)
                }
            }(), r, function() {
                switch (u.$) {
                case 0:
                    return e;
                case 2:
                    return j(bi, !1, u.a, u.b, e);
                default:
                    return j(bi, !0, u.a, u.b, e)
                }
            }())
        })
          , i = function() {
            switch (r.$) {
            case 0:
                return C(c, "div", t);
            case 1:
                return C(c, r.a, t);
            default:
                return D(za, r.a, t, N([C(c, r.b, N([Iu(Du.cz + " " + Du.dz)]))]))
            }
        }();
        switch (e) {
        case 0:
            return C(pi, wi, n) && !C(pi, gi, n) ? i : C(pi, Ju, n) ? C($i, N([Iu(C(Ur, " ", N([Du.cz, Du.dz, Du.aY, Du.Y, Du.cw])))]), N([i])) : C(pi, Qu, n) ? C(vi, N([Iu(C(Ur, " ", N([Du.cz, Du.dz, Du.aY, Du.Y, Du.cu])))]), N([i])) : i;
        case 1:
            return C(pi, li, n) && !C(pi, di, n) ? i : C(pi, Xu, n) ? C(vi, N([Iu(C(Ur, " ", N([Du.cz, Du.dz, Du.aY, Du.cv])))]), N([i])) : C(pi, Vu, n) ? C($i, N([Iu(C(Ur, " ", N([Du.cz, Du.dz, Du.aY, Du.ct])))]), N([i])) : i;
        default:
            return i
        }
    })
      , xi = Vc
      , yi = Du.cz + " " + Du.x + " " + Du.bp + " " + Du.ba
      , ki = Du.cz + " " + Du.x + " " + Du.bq + " " + Du.bb
      , zi = E(function(o, n, r) {
        var t = b(function(n, r) {
            var t = n.a
              , e = n.b
              , a = r.a
              , u = r.b;
            switch (e.$) {
            case 0:
                var c = e.a;
                return h(o, 4),
                {
                    a: C(Sr, {
                        a: t,
                        b: c(o)
                    }, a),
                    b: u
                };
            case 1:
                var i = e.a;
                return h(o, 4),
                {
                    a: C(Sr, {
                        a: t,
                        b: C(i.c5, Uu, o)
                    }, a),
                    b: u.b ? R(i.dI, u) : i.dI
                };
            case 2:
                i = e.a;
                return {
                    a: C(Sr, {
                        a: t,
                        b: (h(o, 2) ? Oc : Lc)(i)
                    }, a),
                    b: u
                };
            default:
                return {
                    a: a,
                    b: u
                }
            }
        })
          , e = b(function(n, r) {
            var t = r.a
              , e = r.b;
            switch (n.$) {
            case 0:
                var a = n.a;
                return h(o, 4),
                {
                    a: C(Sr, a(o), t),
                    b: e
                };
            case 1:
                var u = n.a;
                return h(o, 4),
                {
                    a: C(Sr, C(u.c5, Uu, o), t),
                    b: e.b ? R(u.dI, e) : u.dI
                };
            case 2:
                u = n.a;
                return {
                    a: C(Sr, (h(o, 2) ? Oc : Lc)(u), t),
                    b: e
                };
            default:
                return {
                    a: t,
                    b: e
                }
            }
        });
        if (1 === n.$) {
            var a = D(Nt, t, {
                a: T,
                b: T
            }, n.a)
              , t = a.a;
            if ((a = (c = a.b).b ? R(r.dI, c) : r.dI).b) {
                var u = a;
                return {
                    $: 1,
                    a: {
                        c5: j(mi, r.ao, r.ar, r.ai, {
                            $: 1,
                            a: D(Yu, "nearby-element-pls", t, r.aj)
                        }),
                        dI: u
                    }
                }
            }
            return {
                $: 0,
                a: d(mi, r.ao, r.ar, r.ai, {
                    $: 1,
                    a: D(Yu, "nearby-element-pls", t, r.aj)
                }, Uu)
            }
        }
        var c, e = D(Nt, e, {
            a: T,
            b: T
        }, n.a), n = e.a;
        if ((a = (c = e.b).b ? R(r.dI, c) : r.dI).b) {
            u = a;
            return {
                $: 1,
                a: {
                    c5: j(mi, r.ao, r.ar, r.ai, {
                        $: 0,
                        a: C(Ku, n, r.aj)
                    }),
                    dI: u
                }
            }
        }
        return {
            $: 0,
            a: d(mi, r.ao, r.ar, r.ai, {
                $: 0,
                a: C(Ku, n, r.aj)
            }, Uu)
        }
    })
      , Ei = E(function(n, r, t) {
        return {
            $: 3,
            a: n,
            b: r,
            c: t
        }
    })
      , ji = function(n) {
        return {
            $: 10,
            a: n
        }
    }
      , Ti = b(function(n, r) {
        return {
            $: 0,
            a: n,
            b: r
        }
    })
      , Ni = b(function(n, r) {
        var t = r.a
          , r = r.b;
        return n.$ ? C(Ti, t, n.a | r) : C(Ti, n.a | t, r)
    })
      , Ii = b(function(n, r) {
        return {
            $: 3,
            a: n,
            b: r
        }
    })
      , Si = b(function(n, r) {
        return C(Zu, N([Iu(function() {
            switch (n) {
            case 0:
                return C(Ur, " ", N([Du.aD, Du.dz, Du.co]));
            case 1:
                return C(Ur, " ", N([Du.aD, Du.dz, Du.cE]));
            case 2:
                return C(Ur, " ", N([Du.aD, Du.dz, Du.dk]));
            case 3:
                return C(Ur, " ", N([Du.aD, Du.dz, Du.dj]));
            case 4:
                return C(Ur, " ", N([Du.aD, Du.dz, Du.c8]));
            default:
                return C(Ur, " ", N([Du.aD, Du.dz, Du.cD]))
            }
        }())]), N([function() {
            switch (r.$) {
            case 3:
                return Vc("");
            case 2:
                return Lc(r.a);
            case 0:
                return (0,
                r.a)(2);
            default:
                return C(r.a.c5, Uu, 2)
            }
        }()]))
    })
      , Li = E(function(n, r, t) {
        var e = C(Si, n, r);
        switch (t.$) {
        case 0:
            return 5 === n ? {
                $: 1,
                a: N([e])
            } : {
                $: 2,
                a: N([e])
            };
        case 1:
            var a = t.a;
            return 5 === n ? {
                $: 1,
                a: C(Sr, e, a)
            } : C(Ii, a, N([e]));
        case 2:
            var u = t.a;
            return 5 === n ? C(Ii, N([e]), u) : {
                $: 2,
                a: C(Sr, e, u)
            };
        default:
            a = t.a,
            u = t.b;
            return 5 === n ? C(Ii, C(Sr, e, a), u) : C(Ii, a, C(Sr, e, u))
        }
    })
      , Oi = b(function(n, r) {
        return {
            $: 2,
            a: n,
            b: r
        }
    })
      , Ai = b(function(n, r) {
        switch (r.$) {
        case 0:
            return {
                $: 1,
                a: n
            };
        case 1:
            return C(Oi, r.a, n);
        default:
            return C(Oi, r.a, r.b)
        }
    })
      , Ci = b(function(n, r) {
        return C(Gn, function(n) {
            return /^(on|formAction$)/i.test(n) ? "data-" + n : n
        }(n), Un(r))
    })
      , Di = f(function(n, r, t, e) {
        return {
            $: 2,
            a: n,
            b: r,
            c: t,
            d: e
        }
    })
      , Ri = b(function(n, r) {
        switch (n.$) {
        case 0:
            switch (r.$) {
            case 0:
                return {
                    $: 1,
                    a: {
                        a: t = r.a,
                        b: 0,
                        c: 0
                    }
                };
            case 1:
                return {
                    $: 1,
                    a: {
                        a: 0,
                        b: e = r.a,
                        c: 0
                    }
                };
            case 2:
                return {
                    $: 1,
                    a: {
                        a: 0,
                        b: 0,
                        c: a = r.a
                    }
                };
            case 3:
                return {
                    $: 1,
                    a: r.a
                };
            case 4:
                return j(Di, {
                    a: 0,
                    b: 0,
                    c: 0
                }, {
                    a: 1,
                    b: 1,
                    c: 1
                }, r.a, o = r.b);
            default:
                return j(Di, {
                    a: 0,
                    b: 0,
                    c: 0
                }, r.a, {
                    a: 0,
                    b: 0,
                    c: 1
                }, 0)
            }
        case 1:
            var t = (u = n.a).a
              , e = u.b
              , a = u.c;
            switch (r.$) {
            case 0:
                return {
                    $: 1,
                    a: {
                        a: r.a,
                        b: e,
                        c: a
                    }
                };
            case 1:
                return {
                    $: 1,
                    a: {
                        a: t,
                        b: r.a,
                        c: a
                    }
                };
            case 2:
                return {
                    $: 1,
                    a: {
                        a: t,
                        b: e,
                        c: r.a
                    }
                };
            case 3:
                return {
                    $: 1,
                    a: r.a
                };
            case 4:
                return j(Di, u, {
                    a: 1,
                    b: 1,
                    c: 1
                }, r.a, o = r.b);
            default:
                return j(Di, u, r.a, {
                    a: 0,
                    b: 0,
                    c: 1
                }, 0)
            }
        default:
            var u, t = (u = n.a).a, e = u.b, a = u.c, c = n.b, i = n.c, o = n.d;
            switch (r.$) {
            case 0:
                return j(Di, {
                    a: r.a,
                    b: e,
                    c: a
                }, c, i, o);
            case 1:
                return j(Di, {
                    a: t,
                    b: r.a,
                    c: a
                }, c, i, o);
            case 2:
                return j(Di, {
                    a: t,
                    b: e,
                    c: r.a
                }, c, i, o);
            case 3:
                return j(Di, r.a, c, i, o);
            case 4:
                return j(Di, u, c, r.a, r.b);
            default:
                return j(Di, u, r.a, i, o)
            }
        }
    })
      , _i = pa(7)
      , Wi = pa(36)
      , Hi = b(function(n, r) {
        return C(Ti, n.a | r.a, n.b | r.b)
    })
      , qi = C(Ti, 0, 0)
      , Fi = pa(38)
      , Bi = pa(27)
      , Pi = b(function(n, r) {
        if (h(n, Bi)) {
            if (3 !== r.$)
                return !1;
            switch (r.c) {
            case "0px":
            case "1px":
            case "2px":
            case "3px":
            case "4px":
            case "5px":
            case "6px":
                return !0;
            default:
                return !1
            }
        } else
            switch (r.$) {
            case 2:
                var t = r.a;
                return 8 <= t && t <= 32;
            case 7:
                var e = r.b
                  , a = r.c
                  , t = r.e;
                return h(e, r.d) && h(e, a) && h(e, t) && 0 <= e && e <= 24;
            default:
                return !1
            }
    })
      , Gi = pa(6)
      , Mi = pa(30)
      , Ui = pa(29)
      , Ki = u(function(n, r, t, e, a, u, c, i) {
        for (; ; ) {
            if (!i.b) {
                var o = ma(e);
                return 1 === o.$ ? {
                    ai: C(Sr, Iu(n), u),
                    aj: c,
                    ao: t,
                    ar: r,
                    dI: a
                } : {
                    ai: C(Sr, Iu(n + " " + o.a), u),
                    aj: c,
                    ao: t,
                    ar: r,
                    dI: C(Sr, ji(e), a)
                }
            }
            var f = i.a
              , s = i.b;
            switch (f.$) {
            case 0:
                n = v = n,
                r = $ = r,
                t = g = t,
                e = w = e,
                a = m = a,
                u = u,
                c = c,
                i = s;
                continue;
            case 3:
                var b = f.a
                  , d = f.b;
                if (C(pi, b, t)) {
                    n = v = n,
                    r = $ = r,
                    t = g = t,
                    e = w = e,
                    a = m = a,
                    u = u,
                    c = c,
                    i = s;
                    continue
                }
                n = v = d + " " + n,
                r = $ = r,
                t = g = C(Ni, b, t),
                e = w = e,
                a = m = a,
                u = u,
                c = c,
                i = s;
                continue;
            case 1:
                n = v = n,
                r = $ = r,
                t = g = t,
                e = w = e,
                a = m = a,
                u = C(Sr, f.a, u),
                c = c,
                i = s;
                continue;
            case 4:
                b = f.a,
                d = f.b;
                if (C(pi, b, t)) {
                    n = v = n,
                    r = $ = r,
                    t = g = t,
                    e = w = e,
                    a = m = a,
                    u = u,
                    c = c,
                    i = s;
                    continue
                }
                if (C(Pi, b, d)) {
                    n = v = xa(d) + " " + n,
                    r = $ = r,
                    t = g = C(Ni, b, t),
                    e = w = e,
                    a = m = a,
                    u = u,
                    c = c,
                    i = s;
                    continue
                }
                n = v = xa(d) + " " + n,
                r = $ = r,
                t = g = C(Ni, b, t),
                e = w = e,
                a = m = C(Sr, d, a),
                u = u,
                c = c,
                i = s;
                continue;
            case 10:
                var b = f.a
                  , l = f.b;
                n = v = n,
                r = $ = r,
                t = g = C(Ni, b, t),
                e = w = C(Ri, e, l),
                a = m = a,
                u = u,
                c = c,
                i = s;
                continue;
            case 7:
                var h = f.a;
                if (C(pi, Gi, t)) {
                    n = v = n,
                    r = $ = r,
                    t = g = t,
                    e = w = e,
                    a = m = a,
                    u = u,
                    c = c,
                    i = s;
                    continue
                }
                switch (h.$) {
                case 0:
                    var p = h.a
                      , v = Du.cj + (" width-px-" + Mr(p)) + " " + n
                      , $ = r
                      , g = C(Ni, Gi, t)
                      , w = e
                      , m = C(Sr, D(Ei, "width-px-" + Mr(p), "width", Mr(p) + "px"), a);
                    n = v,
                    r = $,
                    t = g,
                    e = w,
                    a = m,
                    u = u,
                    c = c,
                    i = s;
                    continue;
                case 1:
                    n = v = n + " " + Du.bp,
                    r = $ = r,
                    t = g = C(Ni, Fi, C(Ni, Gi, t)),
                    e = w = e,
                    a = m = a,
                    u = u,
                    c = c,
                    i = s;
                    continue;
                case 2:
                    if (1 === (E = h.a)) {
                        n = v = n + " " + Du.bq,
                        r = $ = r,
                        t = g = C(Ni, wi, C(Ni, Gi, t)),
                        e = w = e,
                        a = m = a,
                        u = u,
                        c = c,
                        i = s;
                        continue
                    }
                    v = n + (" " + Du.ck + (" width-fill-" + Mr(E))),
                    $ = r,
                    g = C(Ni, wi, C(Ni, Gi, t)),
                    w = e,
                    m = C(Sr, D(Ei, Du.cz + ("." + Du.F + (" > " + ac("width-fill-" + Mr(E)))), "flex-grow", Mr(1e5 * E)), a);
                    n = v,
                    r = $,
                    t = g,
                    e = w,
                    a = m,
                    u = u,
                    c = c,
                    i = s;
                    continue;
                default:
                    var x = Cc(h)
                      , y = x.a
                      , k = x.b
                      , z = x.c
                      , v = n + " " + k
                      , $ = r
                      , g = C(Hi, y, C(Ni, Gi, t))
                      , w = e
                      , m = R(z, a);
                    n = v,
                    r = $,
                    t = g,
                    e = w,
                    a = m,
                    u = u,
                    c = c,
                    i = s;
                    continue
                }
            case 8:
                var E, j = f.a;
                if (C(pi, _i, t)) {
                    n = v = n,
                    r = $ = r,
                    t = g = t,
                    e = w = e,
                    a = m = a,
                    u = u,
                    c = c,
                    i = s;
                    continue
                }
                switch (j.$) {
                case 0:
                    var T = Mr(p = j.a) + "px"
                      , N = "height-px-" + T;
                    n = v = Du.bM + " " + N + " " + n,
                    r = $ = r,
                    t = g = C(Ni, _i, t),
                    e = w = e,
                    a = m = C(Sr, D(Ei, N, "height ", T), a),
                    u = u,
                    c = c,
                    i = s;
                    continue;
                case 1:
                    n = v = Du.ba + " " + n,
                    r = $ = r,
                    t = g = C(Ni, Wi, C(Ni, _i, t)),
                    e = w = e,
                    a = m = a,
                    u = u,
                    c = c,
                    i = s;
                    continue;
                case 2:
                    if (1 === (E = j.a)) {
                        n = v = Du.bb + " " + n,
                        r = $ = r,
                        t = g = C(Ni, li, C(Ni, _i, t)),
                        e = w = e,
                        a = m = a,
                        u = u,
                        c = c,
                        i = s;
                        continue
                    }
                    v = n + (" " + Du.bN + (" height-fill-" + Mr(E))),
                    $ = r,
                    g = C(Ni, li, C(Ni, _i, t)),
                    w = e,
                    m = C(Sr, D(Ei, Du.cz + ("." + Du.X + (" > " + ac("height-fill-" + Mr(E)))), "flex-grow", Mr(1e5 * E)), a);
                    n = v,
                    r = $,
                    t = g,
                    e = w,
                    a = m,
                    u = u,
                    c = c,
                    i = s;
                    continue;
                default:
                    var T = Ac(j)
                      , y = T.a
                      , k = T.b
                      , z = T.c
                      , v = n + " " + k
                      , $ = r
                      , g = C(Hi, y, C(Ni, _i, t))
                      , w = e
                      , m = R(z, a);
                    n = v,
                    r = $,
                    t = g,
                    e = w,
                    a = m,
                    u = u,
                    c = c,
                    i = s;
                    continue
                }
            case 2:
                var I = f.a;
                switch (I.$) {
                case 0:
                    n = v = n,
                    r = $ = C(Ai, "main", r),
                    t = g = t,
                    e = w = e,
                    a = m = a,
                    u = u,
                    c = c,
                    i = s;
                    continue;
                case 1:
                    n = v = n,
                    r = $ = C(Ai, "nav", r),
                    t = g = t,
                    e = w = e,
                    a = m = a,
                    u = u,
                    c = c,
                    i = s;
                    continue;
                case 2:
                    n = v = n,
                    r = $ = C(Ai, "footer", r),
                    t = g = t,
                    e = w = e,
                    a = m = a,
                    u = u,
                    c = c,
                    i = s;
                    continue;
                case 3:
                    n = v = n,
                    r = $ = C(Ai, "aside", r),
                    t = g = t,
                    e = w = e,
                    a = m = a,
                    u = u,
                    c = c,
                    i = s;
                    continue;
                case 4:
                    var S = I.a;
                    if (1 < S) {
                        if (S < 7) {
                            n = v = n,
                            r = $ = C(Ai, "h" + Mr(S), r),
                            t = g = t,
                            e = w = e,
                            a = m = a,
                            u = u,
                            c = c,
                            i = s;
                            continue
                        }
                        n = v = n,
                        r = $ = C(Ai, "h6", r),
                        t = g = t,
                        e = w = e,
                        a = m = a,
                        u = u,
                        c = c,
                        i = s;
                        continue
                    }
                    n = v = n,
                    r = $ = C(Ai, "h1", r),
                    t = g = t,
                    e = w = e,
                    a = m = a,
                    u = u,
                    c = c,
                    i = s;
                    continue;
                case 9:
                    n = v = n,
                    r = $ = r,
                    t = g = t,
                    e = w = e,
                    a = m = a,
                    u = u,
                    c = c,
                    i = s;
                    continue;
                case 8:
                    n = v = n,
                    r = $ = r,
                    t = g = t,
                    e = w = e,
                    a = m = a,
                    u = C(Sr, C(Ci, "role", "button"), u),
                    c = c,
                    i = s;
                    continue;
                case 5:
                    n = v = n,
                    r = $ = r,
                    t = g = t,
                    e = w = e,
                    a = m = a,
                    u = C(Sr, C(Ci, "aria-label", I.a), u),
                    c = c,
                    i = s;
                    continue;
                case 6:
                    n = v = n,
                    r = $ = r,
                    t = g = t,
                    e = w = e,
                    a = m = a,
                    u = C(Sr, C(Ci, "aria-live", "polite"), u),
                    c = c,
                    i = s;
                    continue;
                default:
                    n = v = n,
                    r = $ = r,
                    t = g = t,
                    e = w = e,
                    a = m = a,
                    u = C(Sr, C(Ci, "aria-live", "assertive"), u),
                    c = c,
                    i = s;
                    continue
                }
            case 9:
                var l = f.a
                  , L = f.b
                  , z = function() {
                    switch (L.$) {
                    case 3:
                        return a;
                    case 2:
                        return a;
                    case 0:
                        return a;
                    default:
                        return R(a, L.a.dI)
                    }
                }();
                n = v = n,
                r = $ = r,
                t = g = t,
                e = w = e,
                a = m = z,
                u = u,
                c = D(Li, l, L, c),
                i = s;
                continue;
            case 6:
                var O = f.a;
                if (C(pi, Mi, t)) {
                    n = v = n,
                    r = $ = r,
                    t = g = t,
                    e = w = e,
                    a = m = a,
                    u = u,
                    c = c,
                    i = s;
                    continue
                }
                n = v = function(n) {
                    switch (n) {
                    case 0:
                        return Du.a7 + " " + Du.bv;
                    case 2:
                        return Du.a7 + " " + Du.bw;
                    default:
                        return Du.a7 + " " + Du.cr
                    }
                }(O) + " " + n,
                r = $ = r,
                t = g = function(n) {
                    switch (O) {
                    case 1:
                        return C(Ni, Qu, n);
                    case 2:
                        return C(Ni, Ju, n);
                    default:
                        return n
                    }
                }(C(Ni, Mi, t)),
                e = w = e,
                a = m = a,
                u = u,
                c = c,
                i = s;
                continue;
            default:
                var A = f.a;
                if (C(pi, Ui, t)) {
                    n = v = n,
                    r = $ = r,
                    t = g = t,
                    e = w = e,
                    a = m = a,
                    u = u,
                    c = c,
                    i = s;
                    continue
                }
                n = v = function(n) {
                    switch (n) {
                    case 0:
                        return Du.a8 + " " + Du.cx;
                    case 2:
                        return Du.a8 + " " + Du.cq;
                    default:
                        return Du.a8 + " " + Du.cs
                    }
                }(A) + " " + n,
                r = $ = r,
                t = g = function(n) {
                    switch (A) {
                    case 1:
                        return C(Ni, Xu, n);
                    case 2:
                        return C(Ni, Vu, n);
                    default:
                        return n
                    }
                }(C(Ni, Ui, t)),
                e = w = e,
                a = m = a,
                u = u,
                c = c,
                i = s;
                continue
            }
        }
    })
      , Yi = {
        $: 0
    }
      , Vi = Yi
      , Ji = f(function(n, r, t, e) {
        return D(zi, n, e, c(Ki, function(n) {
            switch (n) {
            case 0:
                return Gu;
            case 1:
                return qu;
            case 2:
                return Mu;
            case 3:
                return Fu;
            case 4:
                return Pu;
            default:
                return Bu
            }
        }(n), r, qi, Vi, T, T, Hu, Qr(t)))
    })
      , Qi = f(function(n, r, t, e) {
        return {
            $: 0,
            a: n,
            b: r,
            c: t,
            d: e
        }
    })
      , Xi = {
        cB: Pr,
        cH: Pr,
        dy: Br({
            ax: 0,
            ay: j(Qi, 155 / 255, 203 / 255, 1, 1),
            ac: {
                a: 0,
                b: 0
            },
            aE: 3
        })
    }
      , Zi = b(function(n, r) {
        switch (r.$) {
        case 0:
            return (0,
            r.a)(2);
        case 1:
            return C(r.a.c5, n(r.a.dI), 2);
        case 2:
            return Lc(r.a);
        default:
            return Lc("")
        }
    })
      , no = E(function(n, r, t) {
        var e, n = (e = n,
        {
            c0: 1 === (e = (n = D(Nt, b(function(n, r) {
                switch (n.$) {
                case 0:
                    return 1 === r.c4.$ ? m(r, {
                        c4: Br(n.a)
                    }) : r;
                case 1:
                    return 1 === r.c0.$ ? m(r, {
                        c0: Br(n.a)
                    }) : r;
                default:
                    return 1 === r.dh.$ ? m(r, {
                        dh: Br(n.a)
                    }) : r
                }
            }), {
                c0: Pr,
                c4: Pr,
                dh: Pr
            }, e)).c0).$ ? Xi : e.a,
            c4: 1 === (e = n.c4).$ ? 1 : e.a,
            dh: 1 === (n = n.dh).$ ? 0 : n.a
        }), n = (1 === n.dh ? Ru : _u)(n);
        return C(Zi, n, j(Ji, 2, Wu, r, {
            $: 0,
            a: N([t])
        }))
    })
      , ro = b(function(n, r) {
        return {
            $: 1,
            a: n,
            b: r
        }
    })
      , kn = {
        $: 1
    }
      , to = pa(5)
      , eo = pa(4)
      , ao = function(n) {
        return n.toLowerCase()
    }
      , uo = function(n) {
        return N(n.trim().split(/\s+/g))
    }
      , co = b(function(r, n) {
        return R(n, function() {
            switch (r.$) {
            case 0:
                return "serif";
            case 1:
                return "sans-serif";
            case 2:
                return "monospace";
            case 3:
                return C(Ur, "-", uo(ao(n = r.a)));
            case 4:
                var n = r.a;
                return C(Ur, "-", uo(ao(n)));
            default:
                return C(Ur, "-", uo(ao(n = r.a.di)))
            }
        }())
    })
      , io = (kn = N([{
        $: 3,
        a: "Open Sans"
    }, {
        $: 3,
        a: "Helvetica"
    }, {
        $: 3,
        a: "Verdana"
    }, kn]),
    N([C(yu, ku, D(xu, "bg-" + va(j(Qi, 1, 1, 1, 0)), "background-color", j(Qi, 1, 1, 1, 0))), C(yu, ju, D(xu, "fc-" + va(j(Qi, 0, 0, 0, 1)), "color", j(Qi, 0, 0, 0, 1))), C(yu, eo, {
        $: 2,
        a: 20
    }), C(yu, to, C(ro, D(Kr, co, "font-", kn), kn))]))
      , oo = E(function(n, r, t) {
        return D(no, n.$7, C(Sr, wa(C(Ur, " ", N([Du.ds, Du.cz, Du.dz]))), R(io, r)), t)
    })
      , fo = {
        $: 3
    }
      , so = fo
      , bo = {
        $: 7
    }
      , lo = {
        $: 5
    }
      , ho = Nu("id")
      , po = function(n) {
        return Su(ho("ezoic-pub-ad-placeholder-" + n))
    }
      , vo = {
        $: 6,
        a: 2
    }
      , $o = b(function(n, r) {
        return {
            $: 3,
            a: n,
            b: r
        }
    })
      , kn = pa(13)
      , go = C($o, kn, Du.cG)
      , wo = {
        $: 8
    }
      , mo = b(function(n, r) {
        return C(Pn, n, iu(r))
    })("disabled")
      , xo = Rc
      , yo = Bn
      , ko = b(function(n, r) {
        return C(yo, n, {
            $: 0,
            a: r
        })
    })
      , zo = C(Ge, $a, function(n) {
        return C(ko, "click", xt(n))
    })
      , Eo = function(n) {
        return {
            $: 1,
            a: n
        }
    }
      , jo = b(function(n, r) {
        return C(yo, n, {
            $: 2,
            a: r
        })
    })
      , kn = pa(21)
      , To = C($o, kn, Du.cU)
      , No = {
        $: 1
    }
      , Io = _c
      , So = b(function(n, r) {
        var e = r.ad
          , r = r.k;
        return j(Ji, 2, Wu, C(Sr, Io(No), C(Sr, xo(No), C(Sr, wa(Du.a$ + " " + Du.Y + " " + Du.dx + " " + Du.bX), C(Sr, To, C(Sr, function(n) {
            return C(Pa, Dc, n) ? Au : {
                $: 1,
                a: Iu("focusable")
            }
        }(n), C(Sr, {
            $: 2,
            a: wo
        }, C(Sr, {
            $: 1,
            a: C(Gn, "tabIndex", Mr(0))
        }, function() {
            if (1 === e.$)
                return C(Sr, {
                    $: 1,
                    a: mo(!0)
                }, n);
            var r, t = e.a;
            return C(Sr, zo(t), C(Sr, (r = function(n) {
                return h(n, "Enter") || h(n, " ") ? Br(t) : Pr
            }
            ,
            {
                $: 1,
                a: C(jo, "keydown", C(wt, function(n) {
                    return {
                        a: n,
                        b: !0
                    }
                }, C($t, function(n) {
                    n = r(n);
                    return 1 === n.$ ? Eo("No key matched") : xt(n.a)
                }, C(Gt, "key", se))))
            }), n))
        }()))))))), {
            $: 0,
            a: N([r])
        })
    })
      , kn = pa(12)
      , Lo = C($o, kn, Du.dK)
      , Oo = {
        $: 6,
        a: 1
    }
      , Ao = {
        $: 5,
        a: 1
    }
      , Co = b(function(n, r) {
        return j(Ji, 1, Wu, C(Sr, wa(Du.cT + " " + Du.aL), C(Sr, xo(No), C(Sr, Io(No), n))), {
            $: 0,
            a: r
        })
    })
      , Do = function(n) {
        return j(Qi, n.b6, n.bL, n.bz, n.bx)
    }
      , Ro = function(n) {
        return {
            bx: n.d,
            bz: n.c,
            bL: n.b,
            b6: n.a
        }
    }
      , _o = j(f(function(n, r, t, e) {
        return j(Qi, n / 255, r / 255, t / 255, e)
    }), 100, 100, 100, .3)
      , Wo = b(function(n, r) {
        return j(Ji, 2, Wu, C(Sr, Io(No), C(Sr, xo(No), n)), {
            $: 0,
            a: N([r])
        })
    })
      , Ho = {
        $: 2,
        a: 1
    }
      , kn = E(function(n, r, t) {
        return j(Qi, n / 255, r / 255, t / 255, 1)
    })
      , qo = D(kn, 60, 218, 68)
      , Fo = Su(Iu("justify-content-center"))
      , Bo = D(kn, 0, 0, 245)
      , Po = {
        $: 2
    }
      , Go = b(function(n, r) {
        return {
            $: 11,
            a: n,
            b: r
        }
    })
      , Mo = pa(32)
      , Uo = b(function(n, r) {
        return {
            $: 10,
            a: n,
            b: r
        }
    })
      , Ko = Fn
      , Yo = b(function(t, n) {
        switch (n.$) {
        case 1:
            var e = n.a;
            return {
                $: 1,
                a: {
                    c5: b(function(n, r) {
                        return C(Ko, t, C(e.c5, n, r))
                    }),
                    dI: e.dI
                }
            };
        case 0:
            var r = n.a;
            return {
                $: 0,
                a: C(Ge, Ko(t), r)
            };
        case 2:
            return Ra(n.a);
        default:
            return fo
        }
    })
      , Vo = Kn
      , Jo = b(function(n, r) {
        switch (r.$) {
        case 0:
            return Au;
        case 2:
            return {
                $: 2,
                a: r.a
            };
        case 6:
            return {
                $: 6,
                a: r.a
            };
        case 5:
            return {
                $: 5,
                a: r.a
            };
        case 7:
            return {
                $: 7,
                a: r.a
            };
        case 8:
            return {
                $: 8,
                a: r.a
            };
        case 3:
            return C($o, r.a, r.b);
        case 4:
            return C(yu, r.a, r.b);
        case 9:
            return C(Ou, r.a, C(Yo, n, r.b));
        case 1:
            return {
                $: 1,
                a: C(Vo, n, r.a)
            };
        default:
            return C(Uo, r.a, r.b)
        }
    })
      , Qo = b(function(n, r) {
        var t = r.a
          , e = r.b
          , a = C(Jo, Et, n);
        switch (a.$) {
        case 4:
            return {
                a: C(Sr, a.b, t),
                b: e
            };
        case 10:
            return {
                a: t,
                b: C(Ri, e, a.b)
            };
        default:
            return {
                a: t,
                b: e
            }
        }
    })
      , Xo = Gn("rel")
      , Zo = Nu("target")
      , nf = b(function(n, r) {
        var t = r.k;
        return j(Ji, 2, {
            $: 1,
            a: "a"
        }, C(Sr, {
            $: 1,
            a: C(Nu, "href", /^javascript:/i.test((r = r = r.T).replace(/\s/g, "")) ? "" : r)
        }, C(Sr, {
            $: 1,
            a: Xo("noopener noreferrer")
        }, C(Sr, {
            $: 1,
            a: Zo("_blank")
        }, C(Sr, Io(No), C(Sr, xo(No), C(Sr, wa(Du.a$ + " " + Du.Y + " " + Du.bU), n)))))), {
            $: 0,
            a: N([t])
        })
    })
      , rf = _
      , tf = E(function(n, r, t) {
        var e = Mr(t)
          , a = b(function(n, r) {
            return r ? C(rf, n, C(a, n, r - 1)) : e
        });
        return C(a, n, C(ft, 0, r) - zt(e))
    })
      , ef = b(function(n, r) {
        return it(n / r)
    })
      , af = I
      , uf = E(function(n, r, t) {
        for (; ; ) {
            if (!t.b)
                return r + n;
            var e = t.a
              , a = t.b;
            if ($(e.bl, r) < 0)
                return r + e.ac;
            n = n,
            r = r,
            t = a
        }
    })
      , cf = b(function(n, r) {
        var t = n.b;
        return D(uf, n.a, C(ef, Me(r), 6e4), t)
    })
      , of = b(function(n, r) {
        return C(af, 24, C(ef, C(cf, n, r), 60))
    })
      , ff = b(function(n, r) {
        return C(af, 60, C(cf, n, r))
    })
      , sf = b(function(n, r) {
        return C(af, 60, C(ef, Me(r), 1e3))
    })
      , bf = t(function(n, r, t, e, a) {
        return {
            $: 7,
            a: n,
            b: r,
            c: t,
            d: e,
            e: a
        }
    })
      , df = pa(2)
      , lf = function(n) {
        var r = n;
        return C(yu, df, d(bf, "p-" + Mr(n), r, r, r, r))
    }
      , hf = D(kn, 21, 23, 20)
      , pf = D(kn, 255, 255, 255)
      , vf = function(n) {
        return n.s ? hf : pf
    }
      , $f = {
        $: 9
    }
      , gf = E(function(n, r, t) {
        return {
            $: 5,
            a: n,
            b: r,
            c: t
        }
    })
      , wf = pa(3)
      , mf = b(function(n, r) {
        return "spacing-" + Mr(n) + ("-" + Mr(r))
    })
      , xf = function(n) {
        return C(yu, wf, D(gf, C(mf, n, n), n, n))
    }
      , yf = b(function(n, r) {
        return j(Ji, 4, Wu, C(Sr, {
            $: 2,
            a: $f
        }, C(Sr, Io(Ho), C(Sr, xf(5), n))), {
            $: 0,
            a: r
        })
    })
      , kf = function(n) {
        return {
            $: 0,
            a: n
        }
    }
      , zf = pa(17)
      , Ef = function(n) {
        return C(yu, zf, D(Ei, "br-" + Mr(n), "border-radius", Mr(n) + "px"))
    }
      , jf = b(function(n, r) {
        return j(Ji, 0, Wu, C(Sr, wa(Du.aL + " " + Du.Y), C(Sr, Io(No), C(Sr, xo(No), n))), {
            $: 0,
            a: r
        })
    })
      , I = pa(20)
      , Tf = C($o, I, Du.du)
      , Nf = C($o, wf, Du.dB)
      , If = function(n) {
        return n.toUpperCase()
    }
      , Sf = D(kn, 255, 73, 51)
      , Lf = b(function(n, r) {
        if (h(n, r)) {
            var t = n;
            return C(yu, df, d(bf, "p-" + Mr(n), t, t, t, t))
        }
        var e = r
          , t = n;
        return C(yu, df, d(bf, "p-" + Mr(n) + ("-" + Mr(r)), e, t, e, t))
    })
      , Of = D(kn, 240, 240, 240)
      , Af = t(function(n, r, t, e, a) {
        return {
            $: 6,
            a: n,
            b: r,
            c: t,
            d: e,
            e: a
        }
    })
      , Cf = function(n) {
        return C(yu, Bi, d(Af, "b-" + Mr(n), n, n, n, n))
    }
      , Df = D(kn, 100, 100, 100)
      , Rf = function(n) {
        var r = Da ? C(Co, N([xf(10)]), N(5 === n.d ? [C(yf, N([Pc(16)]), N([ua("Ook al "), C(nf, N([Tu(Bo)]), {
            k: ua("WOORDLE6"),
            T: "/woordle6"
        }), ua(" geprobeerd?")]))] : [C(yf, N([Pc(16)]), N([ua("Ook al "), C(nf, N([Tu(Bo)]), {
            k: ua("gewone WOORDLE"),
            T: "/"
        }), ua(" geprobeerd?")]))])) : C(yf, N([Pc(16)]), N([aa("Already done the regular "), C(nf, N([Tu(Bo)]), {
            k: aa("WORDLE"),
            T: "https://www.nytimes.com/games/wordle/index.html"
        }), aa(" today?")]))
          , t = Wc(n.o)
          , e = t.a
          , t = t.b;
        return C(Wo, N([Eu(_o), Oo, Ao, Io(Ho), xo(Ho)]), C(Co, N([Eu(vf(n)), Io(kf(e)), xo(kf(t)), Oo, Ao, lf(Fc(n)), Ef(10), ga(C(Wo, N([vo, lf(20)]), C(So, T, {
            k: ua("✕"),
            ad: Br(bo)
        })))]), N([C(Co, N([Oo, Ao, xf(10), Tf, xo(Ho)]), N([C(Wo, N([po("108"), Io(Ho), Lu, Fo]), so), C(Wo, N([Oo]), ua(function(n) {
            switch (n.A) {
            case 1:
                return "Je hebt gewonnen!!";
            case 2:
                return "Je hebt verloren...";
            default:
                return "Dit kan niet"
            }
        }(n))), C(Wo, N([Oo]), ua("Het woord was: ")), C(Wo, N([Oo, go, Pc(45)]), aa(qa(C(It, If, n.az)))), C(Wo, N([xo(kf(10))]), so), C(jf, N([Io(Ho), Nf]), N([C(Co, N([xf(4)]), N([C(yf, N([Oo, Lo]), N([ua("Volgende " + Gc(n))])), C(Wo, N([Oo, (t = N([Po]),
        C(yu, to, C(ro, D(Kr, co, "ff-", t), t))), Pc(28)]), aa(function(n) {
            var r = D(tf, "0", 2, 59 - C(sf, n.al, n.C))
              , t = D(tf, "0", 2, 59 - C(ff, n.al, n.C));
            return D(tf, "0", 2, 23 - C(of, n.al, n.C)) + ":" + t + ":" + r
        }(n)))])), C(So, N([Eu(qo), Bc(N([Eu(Hc(qo))])), lf(20), Ef(20)]), {
            k: ua("Delen"),
            ad: Br(lo)
        })])), C(Wo, N([xo(kf(20))]), so), function(t) {
            var e = Wc(t.o).a - 2 * Fc(t) - 25
              , a = C(Te, 1, Tc(N([t.c.b.L, t.c.b.M, t.c.b.N, t.c.b.O, t.c.b.P, t.c.b.Q])))
              , n = hu(t.c)
              , r = b(function(n, r) {
                n = (h(n, ca(t.h)) && 1 === t.A ? Mc : Kc)(t);
                return C(Wo, N([Eu(n), xo(kf(18)), Io(kf(C(ft, 20, lu(e / a * r)))), ga(C(Wo, N([vo, C(Lf, 5, 0), Tu(Uc(t))]), ua(Mr(r))))]), so)
            });
            return C(Co, N([Io(Ho), xf(10)]), N([C(Wo, N([go, Oo]), ua("STATISTIEK")), C(jf, N([Io(Ho), xf(10)]), N([C(Co, N([Oo]), N([C(Wo, N([Oo, Pc(28)]), aa(Mr(t.c.Z) + "×")), C(Wo, N([Oo, Pc(14)]), ua("gespeeld"))])), C(Co, N([Oo]), N([C(Wo, N([Oo, Pc(28)]), aa(Mr(n.br))), C(Wo, N([Oo, Pc(14)]), ua("Win %"))])), C(Co, N([Oo]), N([C(Wo, N([Oo, Pc(28)]), aa(Mr(t.c.ak))), C(Wo, N([Oo, Pc(14)]), ua("Huidige reeks"))])), C(Co, N([Oo]), N([C(Wo, N([Oo, Pc(28)]), aa(Mr(t.c.aa))), C(Wo, N([Oo, Pc(14)]), ua("Max reeks"))]))])), C(Wo, N([xo(kf(10))]), so), C(Wo, N([go, Oo]), ua("VERDELING")), C(Co, N([xf(5)]), N([C(jf, N([Pc(18), xf(5)]), N([ua("1"), C(r, 1, t.c.b.L)])), C(jf, N([Pc(18), xf(5)]), N([ua("2"), C(r, 2, t.c.b.M)])), C(jf, N([Pc(18), xf(5)]), N([ua("3"), C(r, 3, t.c.b.N)])), C(jf, N([Pc(18), xf(5)]), N([ua("4"), C(r, 4, t.c.b.O)])), C(jf, N([Pc(18), xf(5)]), N([ua("5"), C(r, 5, t.c.b.P)])), C(jf, N([Pc(18), xf(5)]), N([ua("6"), C(r, 6, t.c.b.Q)]))])), C(Wo, N([xo(kf(10))]), so), C(Wo, N([Cf(1), Io(Ho)]), so), C(Wo, N([xo(kf(10))]), so)]))
        }(n), 1 === Da ? C(yf, N([Pc(16)]), N([ua("Kan je niet wachten op de volgende " + Gc(n) + "? Probeer ook de "), C(nf, N([Tu(Bo)]), {
            k: ua("originele WORDLE"),
            T: "https://www.nytimes.com/games/wordle/index.html"
        }), ua(" (in het Engels)!")])) : so, r]))])))
    }
      , _f = {
        $: 13
    }
      , Wf = b(function(n, r) {
        return lu((r - 4 * (n.d - 1)) / n.d)
    })
      , Hf = C(E(function(n, r, t) {
        return r(n(t))
    }), function(n) {
        return N([n])
    }, qa)
      , qf = pa(28)
      , Ff = function(n) {
        return C(yu, qf, D(xu, "bc-" + va(n), "border-color", n))
    }
      , Bf = D(kn, 200, 200, 200)
      , Pf = D(kn, 0, 0, 0)
      , Gf = D(kn, 153, 182, 209)
      , Mf = D(kn, 230, 205, 23)
      , kn = pa(11)
      , Uf = C($o, kn, Du.cK)
      , Kf = b(function(r, t) {
        var n = t.$ || t.a.$ ? Uc(r) : r.s ? Of : Pf
          , e = function() {
            if (1 === t.$)
                return {
                    a: Eu(vf(r)),
                    b: Df,
                    c: so
                };
            switch (t.a.$) {
            case 0:
                var n = t.a.a;
                return {
                    a: Eu(vf(r)),
                    b: Bf,
                    c: ua(Hf(If(n)))
                };
            case 1:
                n = t.a.a;
                return {
                    a: Eu(Mc(r)),
                    b: Mc(r),
                    c: ua(Hf(If(n)))
                };
            case 2:
                n = t.a.a;
                return {
                    a: Eu(Yc(r)),
                    b: Yc(r),
                    c: ua(Hf(If(n)))
                };
            default:
                n = t.a.a;
                return {
                    a: Eu(Kc(r)),
                    b: Kc(r),
                    c: ua(Hf(If(n)))
                }
            }
        }()
          , a = e.a
          , u = e.b
          , e = e.c;
        return C(Wo, N([Io(Ho), xo(Ho), Cf(3), Uf, Ff(u), a, Tu(n)]), C(Wo, N([Oo, Ao]), e))
    })
      , Yf = b(function(n, r) {
        r = 1 === r.$ ? T : r.a;
        return C(jf, N([xf(4), Io(Ho), xo(Ho)]), C(It, Kf(n), C(su, r, n.d)))
    })
      , Vf = function(n) {
        var r = function(n) {
            return 5 === n.d ? {
                a: N([{
                    $: 1,
                    a: "W"
                }, {
                    $: 0,
                    a: "O"
                }, {
                    $: 0,
                    a: "O"
                }, {
                    $: 0,
                    a: "R"
                }, {
                    $: 0,
                    a: "D"
                }]),
                b: N([{
                    $: 0,
                    a: "P"
                }, {
                    $: 2,
                    a: "U"
                }, {
                    $: 0,
                    a: "P"
                }, {
                    $: 0,
                    a: "I"
                }, {
                    $: 0,
                    a: "L"
                }]),
                c: N([{
                    $: 0,
                    a: "T"
                }, {
                    $: 0,
                    a: "R"
                }, {
                    $: 0,
                    a: "O"
                }, {
                    $: 3,
                    a: "E"
                }, {
                    $: 0,
                    a: "P"
                }])
            } : {
                a: N([{
                    $: 1,
                    a: "W"
                }, {
                    $: 0,
                    a: "O"
                }, {
                    $: 0,
                    a: "R"
                }, {
                    $: 0,
                    a: "D"
                }, {
                    $: 0,
                    a: "L"
                }, {
                    $: 0,
                    a: "E"
                }]),
                b: N(Da ? [{
                    $: 0,
                    a: "S"
                }, {
                    $: 2,
                    a: "U"
                }, {
                    $: 0,
                    a: "R"
                }, {
                    $: 0,
                    a: "F"
                }, {
                    $: 0,
                    a: "E"
                }, {
                    $: 0,
                    a: "N"
                }] : [{
                    $: 0,
                    a: "B"
                }, {
                    $: 2,
                    a: "U"
                }, {
                    $: 0,
                    a: "R"
                }, {
                    $: 0,
                    a: "D"
                }, {
                    $: 0,
                    a: "E"
                }, {
                    $: 0,
                    a: "N"
                }]),
                c: N(Da ? [{
                    $: 0,
                    a: "C"
                }, {
                    $: 0,
                    a: "H"
                }, {
                    $: 0,
                    a: "I"
                }, {
                    $: 0,
                    a: "Q"
                }, {
                    $: 0,
                    a: "U"
                }, {
                    $: 3,
                    a: "E"
                }] : [{
                    $: 0,
                    a: "A"
                }, {
                    $: 0,
                    a: "N"
                }, {
                    $: 0,
                    a: "S"
                }, {
                    $: 0,
                    a: "W"
                }, {
                    $: 3,
                    a: "E"
                }, {
                    $: 0,
                    a: "R"
                }])
            }
        }(n)
          , t = r.a
          , e = r.b
          , a = r.c
          , u = Wc(n.o)
          , c = u.a
          , r = u.b
          , u = c - 2 * Fc(n);
        return C(Wo, N([Eu(_o), zo({
            $: 8,
            a: !1
        }), Oo, Ao, Io(Ho), xo(Ho)]), C(Co, N([Eu(vf(n)), Io(kf(c)), xo(kf(r)), Oo, Ao, lf(Fc(n)), Ef(10), zo(_f), ga(C(Wo, N([vo, lf(20)]), C(So, T, {
            k: ua("✕"),
            ad: Br({
                $: 8,
                a: !1
            })
        })))]), N([C(Co, N([Oo, Ao, xf(10), lf(10), Tf, Io(Ho), xo(Ho)]), N([C(Wo, N([go, Oo]), ua("INSTRUCTIES")), C(Wo, N([xo(kf(10))]), so), C(yf, T, N([ua("Raad het "), C(Wo, N([go]), ua(Gc(n))), ua(" in 6 keer.")])), C(yf, T, N([ua("Na elke gok zullen de kleuren van de vakjes aangeven hoe dichtbij je was.")])), C(Wo, N([xo(kf(10))]), so), C(Wo, N([Cf(1), Io(Ho)]), so), C(Wo, N([xo(kf(10))]), so), C(Wo, N([xo(kf(C(Wf, n, u))), Io(Ho)]), C(Yf, n, Br(t))), C(yf, T, N([ua("De letter "), C(Wo, N([go]), ua("W")), ua(" zit op de juiste plek in het woord.")])), C(Wo, N([xo(kf(C(Wf, n, u))), Io(Ho)]), C(Yf, n, Br(e))), C(yf, T, N([ua("De letter "), C(Wo, N([go]), ua("U")), ua(" zit in het woord maar op een andere plek.")])), C(Wo, N([xo(kf(C(Wf, n, u))), Io(Ho)]), C(Yf, n, Br(a))), C(yf, T, N([ua("De letter "), C(Wo, N([go]), ua("E")), ua(" zit helemaal niet in het woord.")])), C(Wo, N([xo(kf(10))]), so), C(Wo, N([Cf(1), Io(Ho)]), so), C(Wo, N([xo(kf(10))]), so), C(yf, T, N([ua("Elke dag is er een nieuwe "), C(Wo, N([go]), ua(Gc(n))), ua(" beschikbaar!")]))]))])))
    }
      , Jf = E(function(n, r, t) {
        t = t ? {
            a: n.y ? Sf : qo,
            b: "AAN"
        } : {
            a: Bf,
            b: "UIT"
        },
        n = t.a,
        t = t.b;
        return C(So, N([Eu(n), Bc(N([Eu(Hc(n))])), lf(10), Ef(10), Pc(18)]), {
            k: ua(t),
            ad: Br(r)
        })
    })
      , Qf = function(n) {
        var r = Da ? C(Co, N([xf(10)]), N(5 === n.d ? [C(yf, N([Pc(16)]), N([ua("Ook al "), C(nf, N([Tu(Bo)]), {
            k: ua("WOORDLE6"),
            T: "/woordle6"
        }), ua(" geprobeerd?")]))] : [C(yf, N([Pc(16)]), N([ua("Ook al "), C(nf, N([Tu(Bo)]), {
            k: ua("gewone WOORDLE"),
            T: "/"
        }), ua(" geprobeerd?")]))])) : so
          , t = Wc(n.o)
          , e = t.a
          , t = t.b;
        return C(Wo, N([Eu(_o), Oo, Ao, Io(Ho), xo(Ho)]), C(Co, N([Eu(vf(n)), Io(kf(e)), xo(kf(t)), Oo, Ao, lf(Fc(n)), Ef(10), zo(_f), ga(C(Wo, N([vo, lf(20)]), C(So, T, {
            k: ua("✕"),
            ad: Br({
                $: 9,
                a: !1
            })
        })))]), N([C(Co, N([Oo, Ao, xf(10), lf(10), Tf, Io(Ho), xo(Ho)]), N([C(Wo, N([go, Oo]), ua("INSTELLINGEN")), C(Wo, N([xo(kf(10))]), so), C(jf, N([Io(Ho), Nf]), N([C(yf, T, N([ua("Donker thema")])), D(Jf, n, {
            $: 10,
            a: !n.s
        }, n.s)])), C(Wo, N([xo(kf(10))]), so), C(Wo, N([Cf(1), Io(Ho)]), so), C(Wo, N([xo(kf(10))]), so), C(jf, N([Io(Ho), Nf]), N([C(yf, T, N([ua("Verhoogd contrast")])), D(Jf, n, {
            $: 11,
            a: !n.y
        }, n.y)])), C(Wo, N([xo(kf(10))]), so), C(Wo, N([Cf(1), Io(Ho)]), so), C(Wo, N([xo(kf(10))]), so), C(jf, N([Io(Ho), Nf]), N([C(yf, T, N([ua("Grotere toetsenbordletters")])), D(Jf, n, {
            $: 12,
            a: !n.ah
        }, n.ah)])), C(Wo, N([xo(kf(10))]), so), C(Wo, N([Cf(1), Io(Ho)]), so), C(Wo, N([xo(kf(10))]), so), C(yf, T, N([ua("Feedback: "), C(nf, N([Tu(Bo)]), {
            k: ua("yele op Twitter"),
            T: "https://twitter.com/pingiun_"
        })])), Da ? so : C(yf, T, N([aa("Based on "), C(nf, N([Tu(Bo)]), {
            k: aa("WORDLE by Josh Wardle"),
            T: "https://www.nytimes.com/games/wordle/index.html"
        })])), C(yf, T, N([ua("Code is beschikbaar "), C(nf, N([Tu(Bo)]), {
            k: ua("op GitHub"),
            T: "https://github.com/pingiun/woordle/"
        })])), r, C(Wo, N([xo(kf(10))]), so), C(yf, N([Pc(16)]), N([ua("WOORDLE is een spelletje van pingiun solutions")])), C(yf, N([Pc(16)]), N([ua("BTW Nr: NL004111081B24")]))]))])))
    }
      , Xf = {
        $: 2,
        a: 1
    }
      , Zf = function(n) {
        return n.s ? Of : Pf
    }
      , ns = b(function(n, r) {
        return {
            $: 4,
            a: n,
            b: r
        }
    })
      , rs = b(function(n, r) {
        return C(ns, n, r)
    })
      , ts = Su(Iu("space-between"))
      , es = b(function(r, n) {
        var t = n.aH
          , e = n.ap
          , a = qc(r.o).aK ? .8 : .5
          , u = function() {
            var n = {
                a: qc(r.o).aK,
                b: r.d
            };
            if (n.a)
                return 5 === n.b ? {
                    a: 300,
                    b: 360
                } : {
                    a: 400,
                    b: 480
                };
            return {
                a: 300,
                b: 360
            }
        }()
          , n = u.a
          , u = u.b
          , t = C(Te, n, Nc(N([n, .8 * t])))
          , t = C(Te, u, Nc(N([u, e * a, 6 * t / r.d])));
        return {
            a: it(t * r.d / 6),
            b: it(t)
        }
    })
      , as = function(n) {
        var r = C(es, n, n.o)
          , t = r.a
          , r = r.b;
        return C(Co, N([xf(4), Oo, Io(kf(t)), xo(kf(r)), Pc(it(r / 7.5))]), C(It, Yf(n), C(nu, 6, C(su, n.h, 6))))
    }
      , kn = {
        $: 6,
        a: 0
    }
      , us = C(So, N([kn, lf(10), Cf(2), Ef(100), Io(kf(30)), xo(kf(30)), ga(C(Wo, N([Io(kf(30)), xo(kf(30))]), C(Wo, N([Oo, Ao, Io(kf(15))]), ua("?"))))]), {
        k: so,
        ad: Br({
            $: 8,
            a: !0
        })
    })
      , cs = f(function(n, r, t, e) {
        return "pad-" + Mr(n) + ("-" + Mr(r) + ("-" + Mr(t) + ("-" + Mr(e))))
    })
      , is = C(So, N([kn, lf(10), Cf(2), Ef(100), Io(kf(30)), xo(kf(30)), ga(C(Wo, N([Io(kf(30)), xo(kf(30))]), C(Wo, N([Oo, Ao, function(n) {
        var r = n.ce
          , t = n.b9
          , e = n.bA
          , a = n.bT;
        if (h(r, t) && h(r, e) && h(r, a)) {
            n = r;
            return C(yu, df, d(bf, "p-" + Mr(r), n, n, n, n))
        }
        return C(yu, df, d(bf, j(cs, r, t, e, a), r, t, e, a))
    }({
        bA: 10,
        bT: 0,
        b9: 3,
        ce: 0
    })]), ua("..."))))]), {
        k: so,
        ad: Br({
            $: 9,
            a: !0
        })
    })
      , os = b(function(n, r) {
        return C(yu, Bi, d(Af, "b-" + Mr(n) + ("-" + Mr(r)), r, n, r, n))
    })
      , fs = function(n) {
        return C(jf, N([xo(kf(60)), lf(15), Io(Ho), (t = (r = {
            bA: 2,
            bT: 0,
            b9: 0,
            ce: 0
        }).bA,
        e = r.ce,
        a = r.bT,
        r = r.b9,
        h(e, t) && h(a, r) ? h(e, r) ? Cf(e) : C(os, a, e) : C(yu, Bi, d(Af, "b-" + Mr(e) + ("-" + Mr(r) + ("-" + Mr(t) + ("-" + Mr(a)))), e, r, t, a)))]), N([us, C(Wo, N([Ao, Oo]), ua(Gc(n))), is]));
        var r, t, e, a
    }
      , ss = b(function(r, t) {
        var n = function() {
            switch (t.$) {
            case 0:
                var n = t.a;
                return {
                    a: function(n) {
                        return n.s ? Hc(Bf) : Bf
                    }(r),
                    b: n
                };
            case 1:
                n = t.a;
                return {
                    a: Mc(r),
                    b: n
                };
            case 2:
                n = t.a;
                return {
                    a: Yc(r),
                    b: n
                };
            default:
                n = t.a;
                return {
                    a: Kc(r),
                    b: n
                }
            }
        }()
          , e = n.a
          , a = n.b
          , u = (c = {
            a: a,
            b: r.ah
        }).b ? "↵" === c.a ? {
            a: ua("ENTER"),
            b: 85,
            c: qc(r.o).aK ? 20 : 14
        } : {
            a: ua(Hf(If(c.a))),
            b: 55,
            c: qc(r.o).aK ? 30 : 22
        } : "↵" === c.a ? {
            a: ua("ENTER"),
            b: 85,
            c: 14
        } : {
            a: ua(Hf(tu(c.a))),
            b: 55,
            c: 18
        }
          , n = u.a
          , c = u.b
          , u = u.c;
        return C(So, N([Eu(e), Bc(N([Eu(Hc(e))])), Io(C(rs, c, Ho)), xo(Ho), Ef(10), Pc(u)]), {
            k: C(Wo, N([Oo, Ao]), n),
            ad: Br({
                $: 0,
                a: tu(a)
            })
        })
    })
      , bs = function(n) {
        var r = lu(C(Jc, 260, .3 * n.o.ap))
          , t = n.aC
          , e = t.a
          , a = t.b
          , t = t.c;
        return C(Co, N([Io(Ho), xo(C(rs, r, Ho)), xf(10), C(Lf, 5, 5)]), N([C(jf, N([Io(Ho), xo(Ho), xf(5), Oo]), C(It, ss(n), e)), C(jf, N([Io(Ho), xo(Ho), xf(5), Oo]), C(It, ss(n), a)), C(jf, N([Io(Ho), xo(Ho), xf(5), Oo]), C(Sr, C(Wo, N([Io(C(rs, 50, Ho))]), so), R(C(It, ss(n), t), N([C(Wo, N([Io(C(rs, 20, Ho))]), so)]))))]))
    }
      , Dn = pr({
        c9: function(n) {
            return {
                a: m(j(Ie, n.be, n.d, n.bo, n.bm), {
                    V: D(Kr, Zt, Kt, n.V),
                    ac: n.ac,
                    o: n.bs,
                    d: n.d
                }),
                b: C(Pt, Dt, re)
            }
        },
        dJ: function(r) {
            return Le(N([Ca(Qe), D(Aa, 1, "resize", C(Gt, "target", D(mt, Se, C(Gt, "innerWidth", pe), C(Gt, "innerHeight", pe)))), C(Je, 100, qt), Xe(function(n) {
                return {
                    $: 6,
                    a: {
                        aZ: ua(n),
                        a3: Ue(r.C)
                    }
                }
            })]))
        },
        d0: Dn,
        d1: function(n) {
            return D(oo, {
                $7: N([Xf])
            }, N([Eu(vf(n)), Tu(Zf(n)), ga(function(n) {
                return n.aO ? Vf(n) : so
            }(n)), ga(function(n) {
                return n.aP ? Qf(n) : so
            }(n)), ga(function(n) {
                var r = {
                    a: n.A,
                    b: n.aN
                };
                n: for (; ; ) {
                    if (!r.b) {
                        if (r.a)
                            return so;
                        break
                    }
                    switch (r.a) {
                    case 0:
                        break n;
                    case 1:
                        return Rf(n);
                    default:
                        return Rf(n)
                    }
                }
                return so
            }(n)), ga(function(r) {
                return C(Co, N([xf(20), Oo, lf(20)]), C(It, function(n) {
                    n = n.aZ;
                    return C(Wo, N([Oo, Eu(pf), Cf(2), Ff(Zf(r)), Tu(Zf(r)), Eu(vf(r)), Ef(10), lf(20)]), n)
                }, r.I))
            }(n)), Lu]), function(n) {
                return C(Co, N([Oo, Io(C(rs, 600, Ho)), xf(20), Lu, ts]), N([fs(n), as(n), C(jf, N([po("107"), Lu, Fo, Oo, Io(Ho)]), T), bs(n)]))
            }(n))
        }
    });
    Dn = {
        Main: {
            init: Dn(C($t, function(c) {
                return C($t, function(u) {
                    return C($t, function(a) {
                        return C($t, function(e) {
                            return C($t, function(t) {
                                return C($t, function(r) {
                                    return C($t, function(n) {
                                        return xt({
                                            V: n,
                                            be: r,
                                            ac: t,
                                            bm: e,
                                            bo: a,
                                            bs: u,
                                            d: c
                                        })
                                    }, C(Gt, "allWords", fe(se)))
                                }, C(Gt, "localStorage", mu))
                            }, C(Gt, "offset", pe))
                        }, C(Gt, "startDarkMode", gt))
                    }, C(Gt, "todaysWord", se))
                }, C(Gt, "windowSize", C($t, function(r) {
                    return C($t, function(n) {
                        return xt({
                            ap: n,
                            aH: r
                        })
                    }, C(Gt, "height", pe))
                }, C(Gt, "width", pe))))
            }, C(Gt, "wordSize", pe)))(0)
        }
    },
    n.Elm ? function n(r, t) {
        for (var e in t)
            e in r ? "init" == e ? l(6) : n(r[e], t[e]) : r[e] = t[e]
    }(n.Elm, Dn) : n.Elm = Dn
}(this);