!(function (e, t) {
    "object" == typeof exports && "undefined" != typeof module
        ? t(exports, require("dexie"))
        : "function" == typeof define && define.amd
            ? define(["exports", "dexie"], t)
            : ((e = "undefined" != typeof globalThis ? globalThis : e || self),
                t((e.DexieExportImport = {}), e.Dexie));
})(this, function (e, t) {
    "use strict";
    var n,
        r = (n = t) && "object" == typeof n && "default" in n ? n : { default: n };
    function i(e, t, n, r) {
        return new (n || (n = Promise))(function (i, o) {
            function a(e) {
                try {
                    s(r.next(e));
                } catch (t) {
                    o(t);
                }
            }
            function u(e) {
                try {
                    s(r.throw(e));
                } catch (t) {
                    o(t);
                }
            }
            function s(e) {
                var t;
                e.done
                    ? i(e.value)
                    : ((t = e.value) instanceof n
                        ? t
                        : new n(function (e) {
                            e(t);
                        })
                    ).then(a, u);
            }
            s((r = r.apply(e, t || [])).next());
        });
    }
    function o(e, t) {
        var n,
            r,
            i,
            o,
            a = {
                label: 0,
                sent: function () {
                    if (1 & i[0]) throw i[1];
                    return i[1];
                },
                trys: [],
                ops: [],
            };
        return (
            (o = { next: u(0), throw: u(1), return: u(2) }),
            "function" == typeof Symbol &&
            (o[Symbol.iterator] = function () {
                return this;
            }),
            o
        );
        function u(o) {
            return function (u) {
                return (function o(u) {
                    if (n) throw TypeError("Generator is already executing.");
                    for (; a;)
                        try {
                            if (
                                ((n = 1),
                                    r &&
                                    (i =
                                        2 & u[0]
                                            ? r.return
                                            : u[0]
                                                ? r.throw || ((i = r.return) && i.call(r), 0)
                                                : r.next) &&
                                    !(i = i.call(r, u[1])).done)
                            )
                                return i;
                            switch (((r = 0), i && (u = [2 & u[0], i.value]), u[0])) {
                                case 0:
                                case 1:
                                    i = u;
                                    break;
                                case 4:
                                    return a.label++, { value: u[1], done: !1 };
                                case 5:
                                    a.label++, (r = u[1]), (u = [0]);
                                    continue;
                                case 7:
                                    (u = a.ops.pop()), a.trys.pop();
                                    continue;
                                default:
                                    if (
                                        !(i = (i = a.trys).length > 0 && i[i.length - 1]) &&
                                        (6 === u[0] || 2 === u[0])
                                    ) {
                                        a = 0;
                                        continue;
                                    }
                                    if (3 === u[0] && (!i || (u[1] > i[0] && u[1] < i[3]))) {
                                        a.label = u[1];
                                        break;
                                    }
                                    if (6 === u[0] && a.label < i[1]) {
                                        (a.label = i[1]), (i = u);
                                        break;
                                    }
                                    if (i && a.label < i[2]) {
                                        (a.label = i[2]), a.ops.push(u);
                                        break;
                                    }
                                    i[2] && a.ops.pop(), a.trys.pop();
                                    continue;
                            }
                            u = t.call(e, a);
                        } catch (s) {
                            (u = [6, s]), (r = 0);
                        } finally {
                            n = i = 0;
                        }
                    if (5 & u[0]) throw u[1];
                    return { value: u[0] ? u[1] : void 0, done: !0 };
                })([o, u]);
            };
        }
    }
    function a(e, t) {
        return new Promise(function (n, r) {
            var i = new FileReader();
            (i.onabort = function (e) {
                return r(Error("file read aborted"));
            }),
                (i.onerror = function (e) {
                    return r(e.target.error);
                }),
                (i.onload = function (e) {
                    return n(e.target.result);
                }),
                "binary" === t ? i.readAsArrayBuffer(e) : i.readAsText(e);
        });
    }
    function u(e, t) {
        if ("undefined" == typeof FileReaderSync)
            throw Error(
                "FileReaderSync missing. Reading blobs synchronously requires code to run from within a web worker. Use TSON.encapsulateAsync() to do it from the main thread."
            );
        var n = new FileReaderSync();
        return "binary" === t ? n.readAsArrayBuffer(e) : n.readAsText(e);
    }
    var s =
        "undefined" != typeof globalThis
            ? globalThis
            : "undefined" != typeof window
                ? window
                : "undefined" != typeof global
                    ? global
                    : "undefined" != typeof self
                        ? self
                        : {};
    function c(e, t) {
        return e((t = { exports: {} }), t.exports), t.exports;
    }
    for (
        var f = c(function (e, t) {
            var n, r;
            (r = function () {
                function e(t) {
                    return (e =
                        "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
                            ? function (e) {
                                return typeof e;
                            }
                            : function (e) {
                                return e &&
                                    "function" == typeof Symbol &&
                                    e.constructor === Symbol &&
                                    e !== Symbol.prototype
                                    ? "symbol"
                                    : typeof e;
                            })(t);
                }
                function t(e, t, n, r, i, o, a) {
                    try {
                        var u = e[o](a),
                            s = u.value;
                    } catch (c) {
                        n(c);
                        return;
                    }
                    u.done ? t(s) : Promise.resolve(s).then(r, i);
                }
                function n(e) {
                    return function () {
                        var n = this,
                            r = arguments;
                        return new Promise(function (i, o) {
                            var a = e.apply(n, r);
                            function u(e) {
                                t(a, i, o, u, s, "next", e);
                            }
                            function s(e) {
                                t(a, i, o, u, s, "throw", e);
                            }
                            u(void 0);
                        });
                    };
                }
                function r(e, t) {
                    if (!(e instanceof t))
                        throw TypeError("Cannot call a class as a function");
                }
                function i(e, t) {
                    for (var n = 0; n < t.length; n++) {
                        var r = t[n];
                        (r.enumerable = r.enumerable || !1),
                            (r.configurable = !0),
                            ("value" in r) && (r.writable = !0),
                            Object.defineProperty(e, r.key, r);
                    }
                }
                function o(e, t, n) {
                    return (
                        (t in e)
                            ? Object.defineProperty(e, t, {
                                value: n,
                                enumerable: !0,
                                configurable: !0,
                                writable: !0,
                            })
                            : (e[t] = n),
                        e
                    );
                }
                function a(e, t) {
                    var n = Object.keys(e);
                    if (Object.getOwnPropertySymbols) {
                        var r = Object.getOwnPropertySymbols(e);
                        t &&
                            (r = r.filter(function (t) {
                                return Object.getOwnPropertyDescriptor(e, t).enumerable;
                            })),
                            n.push.apply(n, r);
                    }
                    return n;
                }
                function u(e) {
                    for (var t = 1; t < arguments.length; t++) {
                        var n = null != arguments[t] ? arguments[t] : {};
                        t % 2
                            ? a(Object(n), !0).forEach(function (t) {
                                o(e, t, n[t]);
                            })
                            : Object.getOwnPropertyDescriptors
                                ? Object.defineProperties(
                                    e,
                                    Object.getOwnPropertyDescriptors(n)
                                )
                                : a(Object(n)).forEach(function (t) {
                                    Object.defineProperty(
                                        e,
                                        t,
                                        Object.getOwnPropertyDescriptor(n, t)
                                    );
                                });
                    }
                    return e;
                }
                function s(e, t) {
                    return (
                        (function e(t) {
                            if (Array.isArray(t)) return t;
                        })(e) ||
                        (function e(t, n) {
                            if (
                                (Symbol.iterator in Object(t)) ||
                                "[object Arguments]" === Object.prototype.toString.call(t)
                            ) {
                                var r = [],
                                    i = !0,
                                    o = !1,
                                    a = void 0;
                                try {
                                    for (
                                        var u, s = t[Symbol.iterator]();
                                        !(i = (u = s.next()).done) &&
                                        (r.push(u.value), !n || r.length !== n);
                                        i = !0
                                    );
                                } catch (c) {
                                    (o = !0), (a = c);
                                } finally {
                                    try {
                                        i || null == s.return || s.return();
                                    } finally {
                                        if (o) throw a;
                                    }
                                }
                                return r;
                            }
                        })(e, t) ||
                        (function e() {
                            throw TypeError(
                                "Invalid attempt to destructure non-iterable instance"
                            );
                        })()
                    );
                }
                var c = function e(t) {
                    r(this, e), (this.p = new Promise(t));
                };
                (c.__typeson__type__ = "TypesonPromise"),
                    "undefined" != typeof Symbol &&
                    (c.prototype[Symbol.toStringTag] = "TypesonPromise"),
                    (c.prototype.then = function (e, t) {
                        var n = this;
                        return new c(function (r, i) {
                            n.p
                                .then(function (t) {
                                    r(e ? e(t) : t);
                                })
                                .catch(function (e) {
                                    return t ? t(e) : Promise.reject(e);
                                })
                                .then(r, i);
                        });
                    }),
                    (c.prototype.catch = function (e) {
                        return this.then(null, e);
                    }),
                    (c.resolve = function (e) {
                        return new c(function (t) {
                            t(e);
                        });
                    }),
                    (c.reject = function (e) {
                        return new c(function (t, n) {
                            n(e);
                        });
                    }),
                    ["all", "race"].forEach(function (e) {
                        c[e] = function (t) {
                            return new c(function (n, r) {
                                Promise[e](
                                    t.map(function (e) {
                                        return e &&
                                            e.constructor &&
                                            "TypesonPromise" === e.constructor.__typeson__type__
                                            ? e.p
                                            : e;
                                    })
                                ).then(n, r);
                            });
                        };
                    });
                var f = {}.toString,
                    l = {}.hasOwnProperty,
                    p = Object.getPrototypeOf,
                    y = l.toString;
                function h(e, t) {
                    return (
                        $(e) &&
                        "function" == typeof e.then &&
                        (!t || "function" == typeof e.catch)
                    );
                }
                function d(e) {
                    return f.call(e).slice(8, -1);
                }
                function v(t, n) {
                    if (!t || "object" !== e(t)) return !1;
                    var r = p(t);
                    if (!r) return null === n;
                    var i = l.call(r, "constructor") && r.constructor;
                    return "function" != typeof i
                        ? null === n
                        : n === i ||
                        (null !== n && y.call(i) === y.call(n)) ||
                        ("function" == typeof n &&
                            "string" == typeof i.__typeson__type__ &&
                            i.__typeson__type__ === n.__typeson__type__);
                }
                function b(e) {
                    return !!e && "Object" === d(e) && (!p(e) || v(e, Object));
                }
                function $(t) {
                    return t && "object" === e(t);
                }
                function g(e) {
                    return e.replace(/~/g, "~0").replace(/\./g, "~1");
                }
                function m(e) {
                    return e.replace(/~1/g, ".").replace(/~0/g, "~");
                }
                function w(e, t) {
                    if ("" === t) return e;
                    var n = t.indexOf(".");
                    if (n > -1) {
                        var r = e[m(t.slice(0, n))];
                        return void 0 === r ? void 0 : w(r, t.slice(n + 1));
                    }
                    return e[m(t)];
                }
                function _(e, t, n) {
                    if ("" === t) return n;
                    var r = t.indexOf(".");
                    return r > -1
                        ? _(e[m(t.slice(0, r))], t.slice(r + 1), n)
                        : ((e[m(t)] = n), e);
                }
                var O = Object.keys,
                    E = Array.isArray,
                    T = {}.hasOwnProperty,
                    A = ["type", "replaced", "iterateIn", "iterateUnsetNumeric"];
                function N(e, t) {
                    if ("" === e.keypath) return -1;
                    var n = e.keypath.match(/\./g) || 0,
                        r = t.keypath.match(/\./g) || 0;
                    return (
                        n && (n = n.length),
                        r && (r = r.length),
                        n > r
                            ? -1
                            : n < r
                                ? 1
                                : e.keypath < t.keypath
                                    ? -1
                                    : e.keypath > t.keypath
                    );
                }
                var S = (function () {
                    var t, o, a;
                    function f(e) {
                        r(this, f),
                            (this.options = e),
                            (this.plainObjectReplacers = []),
                            (this.nonplainObjectReplacers = []),
                            (this.revivers = {}),
                            (this.types = {});
                    }
                    return (
                        (t = f),
                        (o = [
                            {
                                key: "stringify",
                                value: function e(t, n, r, i) {
                                    i = u({}, this.options, {}, i, { stringification: !0 });
                                    var o = this.encapsulate(t, null, i);
                                    return E(o)
                                        ? JSON.stringify(o[0], n, r)
                                        : o.then(function (e) {
                                            return JSON.stringify(e, n, r);
                                        });
                                },
                            },
                            {
                                key: "stringifySync",
                                value: function e(t, n, r, i) {
                                    return this.stringify(
                                        t,
                                        n,
                                        r,
                                        u({ throwOnBadSyncType: !0 }, i, { sync: !0 })
                                    );
                                },
                            },
                            {
                                key: "stringifyAsync",
                                value: function e(t, n, r, i) {
                                    return this.stringify(
                                        t,
                                        n,
                                        r,
                                        u({ throwOnBadSyncType: !0 }, i, { sync: !1 })
                                    );
                                },
                            },
                            {
                                key: "parse",
                                value: function e(t, n, r) {
                                    return (
                                        (r = u({}, this.options, {}, r, { parse: !0 })),
                                        this.revive(JSON.parse(t, n), r)
                                    );
                                },
                            },
                            {
                                key: "parseSync",
                                value: function e(t, n, r) {
                                    return this.parse(
                                        t,
                                        n,
                                        u({ throwOnBadSyncType: !0 }, r, { sync: !0 })
                                    );
                                },
                            },
                            {
                                key: "parseAsync",
                                value: function e(t, n, r) {
                                    return this.parse(
                                        t,
                                        n,
                                        u({ throwOnBadSyncType: !0 }, r, { sync: !1 })
                                    );
                                },
                            },
                            {
                                key: "specialTypeNames",
                                value: function e(t, n) {
                                    var r =
                                        arguments.length > 2 && void 0 !== arguments[2]
                                            ? arguments[2]
                                            : {};
                                    return (
                                        (r.returnTypeNames = !0), this.encapsulate(t, n, r)
                                    );
                                },
                            },
                            {
                                key: "rootTypeName",
                                value: function e(t, n) {
                                    var r =
                                        arguments.length > 2 && void 0 !== arguments[2]
                                            ? arguments[2]
                                            : {};
                                    return (r.iterateNone = !0), this.encapsulate(t, n, r);
                                },
                            },
                            {
                                key: "encapsulate",
                                value: function t(r, i, o) {
                                    var a = (o = u({ sync: !0 }, this.options, {}, o)).sync,
                                        l = this,
                                        p = {},
                                        y = [],
                                        h = [],
                                        d = [],
                                        m = !("cyclic" in o) || o.cyclic,
                                        w = o.encapsulateObserver,
                                        _ = I("", r, m, i || {}, d);
                                    function N(e) {
                                        var t,
                                            n = Object.values(p);
                                        if (o.iterateNone)
                                            return n.length ? n[0] : f.getJSONType(e);
                                        if (n.length) {
                                            if (o.returnTypeNames)
                                                return (
                                                    (function e(t) {
                                                        if (Array.isArray(t)) {
                                                            for (
                                                                var n = 0, r = Array(t.length);
                                                                n < t.length;
                                                                n++
                                                            )
                                                                r[n] = t[n];
                                                            return r;
                                                        }
                                                    })((t = new Set(n))) ||
                                                    (function e(t) {
                                                        if (
                                                            (Symbol.iterator in Object(t)) ||
                                                            "[object Arguments]" ===
                                                            Object.prototype.toString.call(t)
                                                        )
                                                            return Array.from(t);
                                                    })(t) ||
                                                    (function e() {
                                                        throw TypeError(
                                                            "Invalid attempt to spread non-iterable instance"
                                                        );
                                                    })()
                                                );
                                            !e || !b(e) || T.call(e, "$types")
                                                ? (e = { $: e, $types: { $: p } })
                                                : (e.$types = p);
                                        } else
                                            $(e) &&
                                                T.call(e, "$types") &&
                                                (e = { $: e, $types: !0 });
                                        return !o.returnTypeNames && e;
                                    }
                                    function S(e, t) {
                                        return x.apply(this, arguments);
                                    }
                                    function x() {
                                        return (x = n(
                                            regeneratorRuntime.mark(function e(t, r) {
                                                var i;
                                                return regeneratorRuntime.wrap(function e(o) {
                                                    for (; ;)
                                                        switch ((o.prev = o.next)) {
                                                            case 0:
                                                                return (
                                                                    (o.next = 2),
                                                                    Promise.all(
                                                                        r.map(function (e) {
                                                                            return e[1].p;
                                                                        })
                                                                    )
                                                                );
                                                            case 2:
                                                                return (
                                                                    (i = o.sent),
                                                                    (o.next = 5),
                                                                    Promise.all(
                                                                        i.map(
                                                                            (function () {
                                                                                var e = n(
                                                                                    regeneratorRuntime.mark(
                                                                                        function e(n) {
                                                                                            var i,
                                                                                                o,
                                                                                                a,
                                                                                                u,
                                                                                                f,
                                                                                                l,
                                                                                                p,
                                                                                                y,
                                                                                                h,
                                                                                                d,
                                                                                                b,
                                                                                                $,
                                                                                                g,
                                                                                                m;
                                                                                            return regeneratorRuntime.wrap(
                                                                                                function e(w) {
                                                                                                    for (; ;)
                                                                                                        switch (
                                                                                                        (w.prev = w.next)
                                                                                                        ) {
                                                                                                            case 0:
                                                                                                                if (
                                                                                                                    ((i = []),
                                                                                                                        (u = (a = s(
                                                                                                                            (o = r.splice(
                                                                                                                                0,
                                                                                                                                1
                                                                                                                            )),
                                                                                                                            1
                                                                                                                        ))[0]),
                                                                                                                        (l = (f = s(
                                                                                                                            u,
                                                                                                                            7
                                                                                                                        ))[0]),
                                                                                                                        (p = f[2]),
                                                                                                                        (y = f[3]),
                                                                                                                        (h = f[4]),
                                                                                                                        (d = f[5]),
                                                                                                                        ($ = I(
                                                                                                                            l,
                                                                                                                            n,
                                                                                                                            p,
                                                                                                                            y,
                                                                                                                            i,
                                                                                                                            !0,
                                                                                                                            (b = f[6])
                                                                                                                        )),
                                                                                                                        (g = v($, c)),
                                                                                                                        !(l && g))
                                                                                                                ) {
                                                                                                                    w.next = 11;
                                                                                                                    break;
                                                                                                                }
                                                                                                                return (
                                                                                                                    (w.next = 8), $.p
                                                                                                                );
                                                                                                            case 8:
                                                                                                                return (
                                                                                                                    (m = w.sent),
                                                                                                                    (h[d] = m),
                                                                                                                    w.abrupt(
                                                                                                                        "return",
                                                                                                                        S(t, i)
                                                                                                                    )
                                                                                                                );
                                                                                                            case 11:
                                                                                                                return (
                                                                                                                    l
                                                                                                                        ? (h[d] = $)
                                                                                                                        : (t = g
                                                                                                                            ? $.p
                                                                                                                            : $),
                                                                                                                    w.abrupt(
                                                                                                                        "return",
                                                                                                                        S(t, i)
                                                                                                                    )
                                                                                                                );
                                                                                                            case 13:
                                                                                                            case "end":
                                                                                                                return w.stop();
                                                                                                        }
                                                                                                },
                                                                                                e
                                                                                            );
                                                                                        }
                                                                                    )
                                                                                );
                                                                                return function (t) {
                                                                                    return e.apply(this, arguments);
                                                                                };
                                                                            })()
                                                                        )
                                                                    )
                                                                );
                                                            case 5:
                                                                return o.abrupt("return", t);
                                                            case 6:
                                                            case "end":
                                                                return o.stop();
                                                        }
                                                }, e);
                                            })
                                        )).apply(this, arguments);
                                    }
                                    function k(e, t, n) {
                                        Object.assign(e, t);
                                        var r = A.map(function (t) {
                                            var n = e[t];
                                            return delete e[t], n;
                                        });
                                        n(),
                                            A.forEach(function (t, n) {
                                                e[t] = r[n];
                                            });
                                    }
                                    function I(t, n, r, i, a, u, s) {
                                        var d,
                                            $,
                                            m = {},
                                            _ = e(n),
                                            A = w
                                                ? function (e) {
                                                    var o = s || i.type || f.getJSONType(n);
                                                    w(
                                                        Object.assign(
                                                            e || m,
                                                            {
                                                                keypath: t,
                                                                value: n,
                                                                cyclic: r,
                                                                stateObj: i,
                                                                promisesData: a,
                                                                resolvingTypesonPromise: u,
                                                                awaitingTypesonPromise: v(n, c),
                                                            },
                                                            { type: o }
                                                        )
                                                    );
                                                }
                                                : null;
                                        if (
                                            ["string", "boolean", "number", "undefined"].includes(
                                                _
                                            )
                                        )
                                            return (
                                                void 0 === n ||
                                                    ("number" === _ &&
                                                        (isNaN(n) || n === -1 / 0 || n === 1 / 0))
                                                    ? (d = i.replaced
                                                        ? n
                                                        : P(t, n, i, a, !1, u, A)) !== n &&
                                                    (m = { replaced: d })
                                                    : (d = n),
                                                A && A(),
                                                d
                                            );
                                        if (null === n) return A && A(), n;
                                        if (
                                            r &&
                                            !i.iterateIn &&
                                            !i.iterateUnsetNumeric &&
                                            n &&
                                            "object" === e(n)
                                        ) {
                                            var N = y.indexOf(n);
                                            if (!(N < 0))
                                                return (
                                                    (p[t] = "#"),
                                                    A && A({ cyclicKeypath: h[N] }),
                                                    "#" + h[N]
                                                );
                                            !0 === r && (y.push(n), h.push(t));
                                        }
                                        var S = b(n),
                                            x = E(n),
                                            C =
                                                ((S || x) &&
                                                    (!l.plainObjectReplacers.length || i.replaced)) ||
                                                    i.iterateIn
                                                    ? n
                                                    : P(t, n, i, a, S || x, null, A);
                                        if (
                                            (C !== n
                                                ? ((d = C), (m = { replaced: C }))
                                                : "" === t && v(n, c)
                                                    ? (a.push([t, n, r, i, void 0, void 0, i.type]),
                                                        (d = n))
                                                    : (x && "object" !== i.iterateIn) ||
                                                        "array" === i.iterateIn
                                                        ? (m = { clone: ($ = Array(n.length)) })
                                                        : (["function", "symbol"].includes(e(n)) ||
                                                            ("toJSON" in n) ||
                                                            v(n, c) ||
                                                            v(n, Promise) ||
                                                            v(n, ArrayBuffer)) &&
                                                            !S &&
                                                            "object" !== i.iterateIn
                                                            ? (d = n)
                                                            : (($ = {}),
                                                                i.addLength && ($.length = n.length),
                                                                (m = { clone: $ })),
                                                A && A(),
                                                o.iterateNone)
                                        )
                                            return $ || d;
                                        if (!$) return d;
                                        if (i.iterateIn) {
                                            var j = function e(o) {
                                                var s = { ownKeys: T.call(n, o) };
                                                k(i, s, function () {
                                                    var e = t + (t ? "." : "") + g(o),
                                                        s = I(e, n[o], Boolean(r), i, a, u);
                                                    v(s, c)
                                                        ? a.push([e, s, Boolean(r), i, $, o, i.type])
                                                        : void 0 !== s && ($[o] = s);
                                                });
                                            };
                                            for (var B in n) j(B);
                                            A && A({ endIterateIn: !0, end: !0 });
                                        } else
                                            O(n).forEach(function (e) {
                                                var o = t + (t ? "." : "") + g(e);
                                                k(i, { ownKeys: !0 }, function () {
                                                    var t = I(o, n[e], Boolean(r), i, a, u);
                                                    v(t, c)
                                                        ? a.push([o, t, Boolean(r), i, $, e, i.type])
                                                        : void 0 !== t && ($[e] = t);
                                                });
                                            }),
                                                A && A({ endIterateOwn: !0, end: !0 });
                                        if (i.iterateUnsetNumeric) {
                                            for (
                                                var L = n.length,
                                                U = function e(o) {
                                                    if (!(o in n)) {
                                                        var s = t + (t ? "." : "") + o;
                                                        k(i, { ownKeys: !1 }, function () {
                                                            var e = I(s, void 0, Boolean(r), i, a, u);
                                                            v(e, c)
                                                                ? a.push([
                                                                    s,
                                                                    e,
                                                                    Boolean(r),
                                                                    i,
                                                                    $,
                                                                    o,
                                                                    i.type,
                                                                ])
                                                                : void 0 !== e && ($[o] = e);
                                                        });
                                                    }
                                                },
                                                R = 0;
                                                R < L;
                                                R++
                                            )
                                                U(R);
                                            A && A({ endIterateUnsetNumeric: !0, end: !0 });
                                        }
                                        return $;
                                    }
                                    function P(e, t, n, r, i, o, u) {
                                        for (
                                            var s = i
                                                ? l.plainObjectReplacers
                                                : l.nonplainObjectReplacers,
                                            c = s.length;
                                            c--;

                                        ) {
                                            var f = s[c];
                                            if (f.test(t, n)) {
                                                var y = f.type;
                                                if (l.revivers[y]) {
                                                    var h = p[e];
                                                    p[e] = h ? [y].concat(h) : y;
                                                }
                                                if (
                                                    (Object.assign(n, { type: y, replaced: !0 }),
                                                        (a || !f.replaceAsync) && !f.replace)
                                                )
                                                    return (
                                                        u && u({ typeDetected: !0 }),
                                                        I(e, t, m && "readonly", n, r, o, y)
                                                    );
                                                return (
                                                    u && u({ replacing: !0 }),
                                                    I(
                                                        e,
                                                        f[
                                                            a || !f.replaceAsync
                                                                ? "replace"
                                                                : "replaceAsync"
                                                        ](t, n),
                                                        m && "readonly",
                                                        n,
                                                        r,
                                                        o,
                                                        y
                                                    )
                                                );
                                            }
                                        }
                                        return t;
                                    }
                                    return d.length
                                        ? a && o.throwOnBadSyncType
                                            ? (function () {
                                                throw TypeError(
                                                    "Sync method requested but async result obtained"
                                                );
                                            })()
                                            : Promise.resolve(S(_, d)).then(N)
                                        : !a && o.throwOnBadSyncType
                                            ? (function () {
                                                throw TypeError(
                                                    "Async method requested but sync result obtained"
                                                );
                                            })()
                                            : o.stringification && a
                                                ? [N(_)]
                                                : a
                                                    ? N(_)
                                                    : Promise.resolve(N(_));
                                },
                            },
                            {
                                key: "encapsulateSync",
                                value: function e(t, n, r) {
                                    return this.encapsulate(
                                        t,
                                        n,
                                        u({ throwOnBadSyncType: !0 }, r, { sync: !0 })
                                    );
                                },
                            },
                            {
                                key: "encapsulateAsync",
                                value: function e(t, n, r) {
                                    return this.encapsulate(
                                        t,
                                        n,
                                        u({ throwOnBadSyncType: !0 }, r, { sync: !1 })
                                    );
                                },
                            },
                            {
                                key: "revive",
                                value: function e(t, n) {
                                    var r,
                                        i = t && t.$types;
                                    if (!i) return t;
                                    if (!0 === i) return t.$;
                                    var o = (n = u({ sync: !0 }, this.options, {}, n)).sync,
                                        a = [],
                                        f = {},
                                        l = !0;
                                    i.$ && b(i.$) && ((t = t.$), (i = i.$), (l = !1));
                                    var p = this;
                                    function y(e, t) {
                                        var n = s(p.revivers[e] || [], 1)[0];
                                        if (!n) throw Error("Unregistered type: " + e);
                                        return !o || ("revive" in n)
                                            ? n[
                                                o && n.revive
                                                    ? "revive"
                                                    : !o && n.reviveAsync
                                                        ? "reviveAsync"
                                                        : "revive"
                                            ](t, f)
                                            : t;
                                    }
                                    var d = [];
                                    function $(e) {
                                        return v(e, x) ? void 0 : e;
                                    }
                                    var m = (function e() {
                                        var n = [];
                                        if (
                                            (Object.entries(i).forEach(function (e) {
                                                var t = s(e, 2),
                                                    r = t[0],
                                                    o = t[1];
                                                "#" !== o &&
                                                    [].concat(o).forEach(function (e) {
                                                        s(p.revivers[e] || [null, {}], 2)[1].plain &&
                                                            (n.push({ keypath: r, type: e }),
                                                                delete i[r]);
                                                    });
                                            }),
                                                n.length)
                                        )
                                            return n.sort(N).reduce(function e(n, r) {
                                                var i = r.keypath,
                                                    o = r.type;
                                                if (h(n))
                                                    return n.then(function (t) {
                                                        return e(t, { keypath: i, type: o });
                                                    });
                                                var a = w(t, i);
                                                if (((a = y(o, a)), v(a, c)))
                                                    return a.then(function (e) {
                                                        var n = _(t, i, e);
                                                        n === e && (t = n);
                                                    });
                                                var u = _(t, i, a);
                                                u === a && (t = u);
                                            }, void 0);
                                    })();
                                    return (
                                        v(m, c)
                                            ? (r = m.then(function () {
                                                return t;
                                            }))
                                            : ((r = (function e(t, n, r, o, u) {
                                                if (!l || "$types" !== t) {
                                                    var f = i[t],
                                                        p = E(n);
                                                    if (p || b(n)) {
                                                        var h = p ? Array(n.length) : {};
                                                        for (
                                                            O(n).forEach(function (i) {
                                                                var o = e(
                                                                    t + (t ? "." : "") + g(i),
                                                                    n[i],
                                                                    r || h,
                                                                    h,
                                                                    i
                                                                ),
                                                                    a = function e(t) {
                                                                        return (
                                                                            v(t, x)
                                                                                ? (h[i] = void 0)
                                                                                : void 0 !== t && (h[i] = t),
                                                                            t
                                                                        );
                                                                    };
                                                                v(o, c)
                                                                    ? d.push(
                                                                        o.then(function (e) {
                                                                            return a(e);
                                                                        })
                                                                    )
                                                                    : a(o);
                                                            }),
                                                            n = h;
                                                            a.length;

                                                        ) {
                                                            var $ = s(a[0], 4),
                                                                m = $[0],
                                                                _ = $[1],
                                                                T = $[2],
                                                                A = $[3],
                                                                N = w(m, _);
                                                            if (void 0 !== N) T[A] = N;
                                                            else break;
                                                            a.splice(0, 1);
                                                        }
                                                    }
                                                    if (!f) return n;
                                                    if ("#" === f) {
                                                        var S = w(r, n.slice(1));
                                                        return (
                                                            void 0 === S &&
                                                            a.push([r, n.slice(1), void 0, void 0]),
                                                            S
                                                        );
                                                    }
                                                    return [].concat(f).reduce(function e(t, n) {
                                                        return v(t, c)
                                                            ? t.then(function (t) {
                                                                return e(t, n);
                                                            })
                                                            : y(n, t);
                                                    }, n);
                                                }
                                            })("", t, null)),
                                                d.length &&
                                                (r = c
                                                    .resolve(r)
                                                    .then(function (e) {
                                                        return c.all([e].concat(d));
                                                    })
                                                    .then(function (e) {
                                                        return s(e, 1)[0];
                                                    }))),
                                        h(r)
                                            ? o && n.throwOnBadSyncType
                                                ? (function () {
                                                    throw TypeError(
                                                        "Sync method requested but async result obtained"
                                                    );
                                                })()
                                                : v(r, c)
                                                    ? r.p.then($)
                                                    : r
                                            : !o && n.throwOnBadSyncType
                                                ? (function () {
                                                    throw TypeError(
                                                        "Async method requested but sync result obtained"
                                                    );
                                                })()
                                                : o
                                                    ? $(r)
                                                    : Promise.resolve($(r))
                                    );
                                },
                            },
                            {
                                key: "reviveSync",
                                value: function e(t, n) {
                                    return this.revive(
                                        t,
                                        u({ throwOnBadSyncType: !0 }, n, { sync: !0 })
                                    );
                                },
                            },
                            {
                                key: "reviveAsync",
                                value: function e(t, n) {
                                    return this.revive(
                                        t,
                                        u({ throwOnBadSyncType: !0 }, n, { sync: !1 })
                                    );
                                },
                            },
                            {
                                key: "register",
                                value: function e(t, n) {
                                    return (
                                        (n = n || {}),
                                        [].concat(t).forEach(function e(t) {
                                            var r = this;
                                            if (E(t))
                                                return t.map(function (t) {
                                                    return e.call(r, t);
                                                });
                                            t &&
                                                O(t).forEach(function (e) {
                                                    if ("#" === e)
                                                        throw TypeError(
                                                            "# cannot be used as a type name as it is reserved for cyclic objects"
                                                        );
                                                    if (f.JSON_TYPES.includes(e))
                                                        throw TypeError(
                                                            "Plain JSON object types are reserved as type names"
                                                        );
                                                    var r = t[e],
                                                        i =
                                                            r && r.testPlainObjects
                                                                ? this.plainObjectReplacers
                                                                : this.nonplainObjectReplacers,
                                                        o = i.filter(function (t) {
                                                            return t.type === e;
                                                        });
                                                    if (
                                                        (o.length &&
                                                            (i.splice(i.indexOf(o[0]), 1),
                                                                delete this.revivers[e],
                                                                delete this.types[e]),
                                                            "function" == typeof r)
                                                    ) {
                                                        var a = r;
                                                        r = {
                                                            test: function e(t) {
                                                                return t && t.constructor === a;
                                                            },
                                                            replace: function e(t) {
                                                                return u({}, t);
                                                            },
                                                            revive: function e(t) {
                                                                return Object.assign(
                                                                    Object.create(a.prototype),
                                                                    t
                                                                );
                                                            },
                                                        };
                                                    } else if (E(r)) {
                                                        var c,
                                                            l = r,
                                                            p = s(l, 3),
                                                            y = p[0];
                                                        r = { test: y, replace: p[1], revive: p[2] };
                                                    }
                                                    if (r && r.test) {
                                                        var h = { type: e, test: r.test.bind(r) };
                                                        r.replace && (h.replace = r.replace.bind(r)),
                                                            r.replaceAsync &&
                                                            (h.replaceAsync = r.replaceAsync.bind(r));
                                                        var d =
                                                            "number" == typeof n.fallback
                                                                ? n.fallback
                                                                : n.fallback
                                                                    ? 0
                                                                    : 1 / 0;
                                                        if (
                                                            (r.testPlainObjects
                                                                ? this.plainObjectReplacers.splice(d, 0, h)
                                                                : this.nonplainObjectReplacers.splice(
                                                                    d,
                                                                    0,
                                                                    h
                                                                ),
                                                                r.revive || r.reviveAsync)
                                                        ) {
                                                            var v = {};
                                                            r.revive && (v.revive = r.revive.bind(r)),
                                                                r.reviveAsync &&
                                                                (v.reviveAsync = r.reviveAsync.bind(r)),
                                                                (this.revivers[e] = [
                                                                    v,
                                                                    { plain: r.testPlainObjects },
                                                                ]);
                                                        }
                                                        this.types[e] = r;
                                                    }
                                                }, this);
                                        }, this),
                                        this
                                    );
                                },
                            },
                        ]),
                        i(t.prototype, o),
                        a && i(t, a),
                        f
                    );
                })(),
                    x = function e() {
                        r(this, e);
                    };
                return (
                    (x.__typeson__type__ = "TypesonUndefined"),
                    (S.Undefined = x),
                    (S.Promise = c),
                    (S.isThenable = h),
                    (S.toStringTag = d),
                    (S.hasConstructorOf = v),
                    (S.isObject = $),
                    (S.isPlainObject = b),
                    (S.isUserObject = function e(t) {
                        if (!t || "Object" !== d(t)) return !1;
                        var n = p(t);
                        return !n || v(t, Object) || e(n);
                    }),
                    (S.escapeKeyPathComponent = g),
                    (S.unescapeKeyPathComponent = m),
                    (S.getByKeyPath = w),
                    (S.getJSONType = function t(n) {
                        return null === n ? "null" : Array.isArray(n) ? "array" : e(n);
                    }),
                    (S.JSON_TYPES = [
                        "null",
                        "boolean",
                        "number",
                        "string",
                        "array",
                        "object",
                    ]),
                    S
                );
            }),
                (e.exports = r());
        }),
        l = c(function (e, t) {
            var n, r;
            (r = function () {
                function e(t) {
                    return (e =
                        "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
                            ? function (e) {
                                return typeof e;
                            }
                            : function (e) {
                                return e &&
                                    "function" == typeof Symbol &&
                                    e.constructor === Symbol &&
                                    e !== Symbol.prototype
                                    ? "symbol"
                                    : typeof e;
                            })(t);
                }
                function t(e, t) {
                    for (var n = 0; n < t.length; n++) {
                        var r = t[n];
                        (r.enumerable = r.enumerable || !1),
                            (r.configurable = !0),
                            ("value" in r) && (r.writable = !0),
                            Object.defineProperty(e, r.key, r);
                    }
                }
                function n(e, t, n) {
                    return (
                        (t in e)
                            ? Object.defineProperty(e, t, {
                                value: n,
                                enumerable: !0,
                                configurable: !0,
                                writable: !0,
                            })
                            : (e[t] = n),
                        e
                    );
                }
                function r(e, t) {
                    var n = Object.keys(e);
                    if (Object.getOwnPropertySymbols) {
                        var r = Object.getOwnPropertySymbols(e);
                        t &&
                            (r = r.filter(function (t) {
                                return Object.getOwnPropertyDescriptor(e, t).enumerable;
                            })),
                            n.push.apply(n, r);
                    }
                    return n;
                }
                function i(e) {
                    return (
                        (function e(t) {
                            if (Array.isArray(t)) return o(t);
                        })(e) ||
                        (function e(t) {
                            if (
                                "undefined" != typeof Symbol &&
                                (Symbol.iterator in Object(t))
                            )
                                return Array.from(t);
                        })(e) ||
                        (function e(t, n) {
                            if (t) {
                                if ("string" == typeof t) return o(t, n);
                                var r = Object.prototype.toString.call(t).slice(8, -1);
                                if (
                                    ("Object" === r &&
                                        t.constructor &&
                                        (r = t.constructor.name),
                                        "Map" === r || "Set" === r)
                                )
                                    return Array.from(t);
                                if (
                                    "Arguments" === r ||
                                    /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)
                                )
                                    return o(t, n);
                            }
                        })(e) ||
                        (function e() {
                            throw TypeError(
                                "Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."
                            );
                        })()
                    );
                }
                function o(e, t) {
                    (null == t || t > e.length) && (t = e.length);
                    for (var n = 0, r = Array(t); n < t; n++) r[n] = e[n];
                    return r;
                }
                function a(e) {
                    return (a =
                        "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
                            ? function e(t) {
                                return typeof t;
                            }
                            : function e(t) {
                                return t &&
                                    "function" == typeof Symbol &&
                                    t.constructor === Symbol &&
                                    t !== Symbol.prototype
                                    ? "symbol"
                                    : typeof t;
                            })(e);
                }
                function u(e, t) {
                    if (!(e instanceof t))
                        throw TypeError("Cannot call a class as a function");
                }
                function c(e, t) {
                    for (var n = 0; n < t.length; n++) {
                        var r = t[n];
                        (r.enumerable = r.enumerable || !1),
                            (r.configurable = !0),
                            ("value" in r) && (r.writable = !0),
                            Object.defineProperty(e, r.key, r);
                    }
                }
                function f(e, t, n) {
                    return (
                        (t in e)
                            ? Object.defineProperty(e, t, {
                                value: n,
                                enumerable: !0,
                                configurable: !0,
                                writable: !0,
                            })
                            : (e[t] = n),
                        e
                    );
                }
                function l(e, t) {
                    var n = Object.keys(e);
                    if (Object.getOwnPropertySymbols) {
                        var r = Object.getOwnPropertySymbols(e);
                        t &&
                            (r = r.filter(function (t) {
                                return Object.getOwnPropertyDescriptor(e, t).enumerable;
                            })),
                            n.push.apply(n, r);
                    }
                    return n;
                }
                function p(e) {
                    for (var t = 1; t < arguments.length; t++) {
                        var n = null != arguments[t] ? arguments[t] : {};
                        t % 2
                            ? l(Object(n), !0).forEach(function (t) {
                                f(e, t, n[t]);
                            })
                            : Object.getOwnPropertyDescriptors
                                ? Object.defineProperties(
                                    e,
                                    Object.getOwnPropertyDescriptors(n)
                                )
                                : l(Object(n)).forEach(function (t) {
                                    Object.defineProperty(
                                        e,
                                        t,
                                        Object.getOwnPropertyDescriptor(n, t)
                                    );
                                });
                    }
                    return e;
                }
                function y(e, t) {
                    return (
                        (function e(t) {
                            if (Array.isArray(t)) return t;
                        })(e) ||
                        (function e(t, n) {
                            if (
                                "undefined" != typeof Symbol &&
                                (Symbol.iterator in Object(t))
                            ) {
                                var r = [],
                                    i = !0,
                                    o = !1,
                                    a = void 0;
                                try {
                                    for (
                                        var u, s = t[Symbol.iterator]();
                                        !(i = (u = s.next()).done) &&
                                        (r.push(u.value), !n || r.length !== n);
                                        i = !0
                                    );
                                } catch (c) {
                                    (o = !0), (a = c);
                                } finally {
                                    try {
                                        i || null == s.return || s.return();
                                    } finally {
                                        if (o) throw a;
                                    }
                                }
                                return r;
                            }
                        })(e, t) ||
                        h(e, t) ||
                        (function e() {
                            throw TypeError(
                                "Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."
                            );
                        })()
                    );
                }
                function h(e, t) {
                    if (e) {
                        if ("string" == typeof e) return d(e, t);
                        var n = Object.prototype.toString.call(e).slice(8, -1);
                        return (
                            "Object" === n && e.constructor && (n = e.constructor.name),
                            "Map" === n || "Set" === n
                                ? Array.from(e)
                                : "Arguments" === n ||
                                    /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)
                                    ? d(e, t)
                                    : void 0
                        );
                    }
                }
                function d(e, t) {
                    (null == t || t > e.length) && (t = e.length);
                    for (var n = 0, r = Array(t); n < t; n++) r[n] = e[n];
                    return r;
                }
                var v = function e(t) {
                    u(this, e), (this.p = new Promise(t));
                };
                (v.__typeson__type__ = "TypesonPromise"),
                    "undefined" != typeof Symbol &&
                    (v.prototype[Symbol.toStringTag] = "TypesonPromise"),
                    (v.prototype.then = function (e, t) {
                        var n = this;
                        return new v(function (r, i) {
                            n.p
                                .then(function (t) {
                                    r(e ? e(t) : t);
                                })
                                .catch(function (e) {
                                    return t ? t(e) : Promise.reject(e);
                                })
                                .then(r, i);
                        });
                    }),
                    (v.prototype.catch = function (e) {
                        return this.then(null, e);
                    }),
                    (v.resolve = function (e) {
                        return new v(function (t) {
                            t(e);
                        });
                    }),
                    (v.reject = function (e) {
                        return new v(function (t, n) {
                            n(e);
                        });
                    }),
                    ["all", "race"].forEach(function (e) {
                        v[e] = function (t) {
                            return new v(function (n, r) {
                                Promise[e](
                                    t.map(function (e) {
                                        return e &&
                                            e.constructor &&
                                            "TypesonPromise" === e.constructor.__typeson__type__
                                            ? e.p
                                            : e;
                                    })
                                ).then(n, r);
                            });
                        };
                    });
                var b = {}.toString,
                    $ = {}.hasOwnProperty,
                    g = Object.getPrototypeOf,
                    m = $.toString;
                function w(e, t) {
                    return (
                        T(e) &&
                        "function" == typeof e.then &&
                        (!t || "function" == typeof e.catch)
                    );
                }
                function _(e) {
                    return b.call(e).slice(8, -1);
                }
                function O(e, t) {
                    if (!e || "object" !== a(e)) return !1;
                    var n = g(e);
                    if (!n) return null === t;
                    var r = $.call(n, "constructor") && n.constructor;
                    return "function" != typeof r
                        ? null === t
                        : t === r ||
                        (null !== t && m.call(r) === m.call(t)) ||
                        ("function" == typeof t &&
                            "string" == typeof r.__typeson__type__ &&
                            r.__typeson__type__ === t.__typeson__type__);
                }
                function E(e) {
                    return !(!e || "Object" !== _(e)) && (!g(e) || O(e, Object));
                }
                function T(e) {
                    return e && "object" === a(e);
                }
                function A(e) {
                    return e.replace(/~/g, "~0").replace(/\./g, "~1");
                }
                function N(e) {
                    return e.replace(/~1/g, ".").replace(/~0/g, "~");
                }
                function S(e, t) {
                    if ("" === t) return e;
                    var n = t.indexOf(".");
                    if (n > -1) {
                        var r = e[N(t.slice(0, n))];
                        return void 0 === r ? void 0 : S(r, t.slice(n + 1));
                    }
                    return e[N(t)];
                }
                function x(e, t, n) {
                    if ("" === t) return n;
                    var r = t.indexOf(".");
                    return r > -1
                        ? x(e[N(t.slice(0, r))], t.slice(r + 1), n)
                        : ((e[N(t)] = n), e);
                }
                function k(e, t, n) {
                    return n
                        ? t
                            ? t(e)
                            : e
                        : ((e && e.then) || (e = Promise.resolve(e)), t ? e.then(t) : e);
                }
                var I = Object.keys,
                    P = Array.isArray,
                    C = {}.hasOwnProperty,
                    j = ["type", "replaced", "iterateIn", "iterateUnsetNumeric"];
                function B(e) {
                    return function () {
                        for (var t = [], n = 0; n < arguments.length; n++)
                            t[n] = arguments[n];
                        try {
                            return Promise.resolve(e.apply(this, t));
                        } catch (r) {
                            return Promise.reject(r);
                        }
                    };
                }
                function L(e, t) {
                    if ("" === e.keypath) return -1;
                    var n = e.keypath.match(/\./g) || 0,
                        r = t.keypath.match(/\./g) || 0;
                    return (
                        n && (n = n.length),
                        r && (r = r.length),
                        n > r
                            ? -1
                            : n < r
                                ? 1
                                : e.keypath < t.keypath
                                    ? -1
                                    : e.keypath > t.keypath
                    );
                }
                var U = (function () {
                    var e, t, n;
                    function r(e) {
                        u(this, r),
                            (this.options = e),
                            (this.plainObjectReplacers = []),
                            (this.nonplainObjectReplacers = []),
                            (this.revivers = {}),
                            (this.types = {});
                    }
                    return (
                        (e = r),
                        (t = [
                            {
                                key: "stringify",
                                value: function e(t, n, r, i) {
                                    i = p(
                                        p(p({}, this.options), i),
                                        {},
                                        { stringification: !0 }
                                    );
                                    var o = this.encapsulate(t, null, i);
                                    return P(o)
                                        ? JSON.stringify(o[0], n, r)
                                        : o.then(function (e) {
                                            return JSON.stringify(e, n, r);
                                        });
                                },
                            },
                            {
                                key: "stringifySync",
                                value: function e(t, n, r, i) {
                                    return this.stringify(
                                        t,
                                        n,
                                        r,
                                        p(p({ throwOnBadSyncType: !0 }, i), {}, { sync: !0 })
                                    );
                                },
                            },
                            {
                                key: "stringifyAsync",
                                value: function e(t, n, r, i) {
                                    return this.stringify(
                                        t,
                                        n,
                                        r,
                                        p(p({ throwOnBadSyncType: !0 }, i), {}, { sync: !1 })
                                    );
                                },
                            },
                            {
                                key: "parse",
                                value: function e(t, n, r) {
                                    return (
                                        (r = p(p(p({}, this.options), r), {}, { parse: !0 })),
                                        this.revive(JSON.parse(t, n), r)
                                    );
                                },
                            },
                            {
                                key: "parseSync",
                                value: function e(t, n, r) {
                                    return this.parse(
                                        t,
                                        n,
                                        p(p({ throwOnBadSyncType: !0 }, r), {}, { sync: !0 })
                                    );
                                },
                            },
                            {
                                key: "parseAsync",
                                value: function e(t, n, r) {
                                    return this.parse(
                                        t,
                                        n,
                                        p(p({ throwOnBadSyncType: !0 }, r), {}, { sync: !1 })
                                    );
                                },
                            },
                            {
                                key: "specialTypeNames",
                                value: function e(t, n) {
                                    var r =
                                        arguments.length > 2 && void 0 !== arguments[2]
                                            ? arguments[2]
                                            : {};
                                    return (
                                        (r.returnTypeNames = !0), this.encapsulate(t, n, r)
                                    );
                                },
                            },
                            {
                                key: "rootTypeName",
                                value: function e(t, n) {
                                    var r =
                                        arguments.length > 2 && void 0 !== arguments[2]
                                            ? arguments[2]
                                            : {};
                                    return (r.iterateNone = !0), this.encapsulate(t, n, r);
                                },
                            },
                            {
                                key: "encapsulate",
                                value: function e(t, n, i) {
                                    var o = B(function (e, t) {
                                        return k(
                                            Promise.all(
                                                t.map(function (e) {
                                                    return e[1].p;
                                                })
                                            ),
                                            function (n) {
                                                return k(
                                                    Promise.all(
                                                        n.map(
                                                            B(function (n) {
                                                                var r,
                                                                    i,
                                                                    a,
                                                                    u = !1,
                                                                    s = [],
                                                                    c = y(t.splice(0, 1), 1),
                                                                    f = y(c[0], 7),
                                                                    l = f[0],
                                                                    p = f[2],
                                                                    h = f[3],
                                                                    d = f[4],
                                                                    b = f[5],
                                                                    $ = N(l, n, p, h, s, !0, f[6]),
                                                                    g = O($, v);
                                                                return (
                                                                    (r = function () {
                                                                        if (l && g)
                                                                            return k($.p, function (t) {
                                                                                return (
                                                                                    (d[b] = t), (u = !0), o(e, s)
                                                                                );
                                                                            });
                                                                    }),
                                                                    (i = function (t) {
                                                                        return u
                                                                            ? t
                                                                            : (l
                                                                                ? (d[b] = $)
                                                                                : (e = g ? $.p : $),
                                                                                o(e, s));
                                                                    }),
                                                                    (a = r()) && a.then ? a.then(i) : i(a)
                                                                );
                                                            })
                                                        )
                                                    ),
                                                    function () {
                                                        return e;
                                                    }
                                                );
                                            }
                                        );
                                    }),
                                        u = (i = p(p({ sync: !0 }, this.options), i)).sync,
                                        s = this,
                                        c = {},
                                        f = [],
                                        l = [],
                                        b = [],
                                        $ = !("cyclic" in i) || i.cyclic,
                                        g = i.encapsulateObserver,
                                        m = N("", t, $, n || {}, b);
                                    function w(e) {
                                        var t,
                                            n = Object.values(c);
                                        if (i.iterateNone)
                                            return n.length ? n[0] : r.getJSONType(e);
                                        if (n.length) {
                                            if (i.returnTypeNames)
                                                return (
                                                    (function e(t) {
                                                        if (Array.isArray(t)) return d(t);
                                                    })((t = new Set(n))) ||
                                                    (function e(t) {
                                                        if (
                                                            "undefined" != typeof Symbol &&
                                                            (Symbol.iterator in Object(t))
                                                        )
                                                            return Array.from(t);
                                                    })(t) ||
                                                    h(t) ||
                                                    (function e() {
                                                        throw TypeError(
                                                            "Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."
                                                        );
                                                    })()
                                                );
                                            e && E(e) && !C.call(e, "$types")
                                                ? (e.$types = c)
                                                : (e = { $: e, $types: { $: c } });
                                        } else
                                            T(e) &&
                                                C.call(e, "$types") &&
                                                (e = { $: e, $types: !0 });
                                        return !i.returnTypeNames && e;
                                    }
                                    function _(e, t, n) {
                                        Object.assign(e, t);
                                        var r = j.map(function (t) {
                                            var n = e[t];
                                            return delete e[t], n;
                                        });
                                        n(),
                                            j.forEach(function (t, n) {
                                                e[t] = r[n];
                                            });
                                    }
                                    function N(e, t, n, o, u, p, y) {
                                        var h,
                                            d = {},
                                            b = a(t),
                                            $ = g
                                                ? function (i) {
                                                    var a = y || o.type || r.getJSONType(t);
                                                    g(
                                                        Object.assign(
                                                            i || d,
                                                            {
                                                                keypath: e,
                                                                value: t,
                                                                cyclic: n,
                                                                stateObj: o,
                                                                promisesData: u,
                                                                resolvingTypesonPromise: p,
                                                                awaitingTypesonPromise: O(t, v),
                                                            },
                                                            { type: a }
                                                        )
                                                    );
                                                }
                                                : null;
                                        if (
                                            ["string", "boolean", "number", "undefined"].includes(
                                                b
                                            )
                                        )
                                            return (
                                                void 0 === t ||
                                                    Number.isNaN(t) ||
                                                    t === Number.NEGATIVE_INFINITY ||
                                                    t === Number.POSITIVE_INFINITY
                                                    ? (h = o.replaced
                                                        ? t
                                                        : S(e, t, o, u, !1, p, $)) !== t &&
                                                    (d = { replaced: h })
                                                    : (h = t),
                                                $ && $(),
                                                h
                                            );
                                        if (null === t) return $ && $(), t;
                                        if (
                                            n &&
                                            !o.iterateIn &&
                                            !o.iterateUnsetNumeric &&
                                            t &&
                                            "object" === a(t)
                                        ) {
                                            var m = f.indexOf(t);
                                            if (!(m < 0))
                                                return (
                                                    (c[e] = "#"),
                                                    $ && $({ cyclicKeypath: l[m] }),
                                                    "#" + l[m]
                                                );
                                            !0 === n && (f.push(t), l.push(e));
                                        }
                                        var w,
                                            T = E(t),
                                            x = P(t),
                                            k =
                                                ((T || x) &&
                                                    (!s.plainObjectReplacers.length || o.replaced)) ||
                                                    o.iterateIn
                                                    ? t
                                                    : S(e, t, o, u, T || x, null, $);
                                        if (
                                            (k !== t
                                                ? ((h = k), (d = { replaced: k }))
                                                : "" === e && O(t, v)
                                                    ? (u.push([e, t, n, o, void 0, void 0, o.type]),
                                                        (h = t))
                                                    : (x && "object" !== o.iterateIn) ||
                                                        "array" === o.iterateIn
                                                        ? (d = { clone: (w = Array(t.length)) })
                                                        : (["function", "symbol"].includes(a(t)) ||
                                                            ("toJSON" in t) ||
                                                            O(t, v) ||
                                                            O(t, Promise) ||
                                                            O(t, ArrayBuffer)) &&
                                                            !T &&
                                                            "object" !== o.iterateIn
                                                            ? (h = t)
                                                            : ((w = {}),
                                                                o.addLength && (w.length = t.length),
                                                                (d = { clone: w })),
                                                $ && $(),
                                                i.iterateNone)
                                        )
                                            return w || h;
                                        if (!w) return h;
                                        if (o.iterateIn) {
                                            var j = function r(i) {
                                                var a = { ownKeys: C.call(t, i) };
                                                _(o, a, function () {
                                                    var r = e + (e ? "." : "") + A(i),
                                                        a = N(r, t[i], Boolean(n), o, u, p);
                                                    O(a, v)
                                                        ? u.push([r, a, Boolean(n), o, w, i, o.type])
                                                        : void 0 !== a && (w[i] = a);
                                                });
                                            };
                                            for (var B in t) j(B);
                                            $ && $({ endIterateIn: !0, end: !0 });
                                        } else
                                            I(t).forEach(function (r) {
                                                var i = e + (e ? "." : "") + A(r);
                                                _(o, { ownKeys: !0 }, function () {
                                                    var e = N(i, t[r], Boolean(n), o, u, p);
                                                    O(e, v)
                                                        ? u.push([i, e, Boolean(n), o, w, r, o.type])
                                                        : void 0 !== e && (w[r] = e);
                                                });
                                            }),
                                                $ && $({ endIterateOwn: !0, end: !0 });
                                        if (o.iterateUnsetNumeric) {
                                            for (
                                                var L = t.length,
                                                U = function r(i) {
                                                    if (!(i in t)) {
                                                        var a = e + (e ? "." : "") + i;
                                                        _(o, { ownKeys: !1 }, function () {
                                                            var e = N(a, void 0, Boolean(n), o, u, p);
                                                            O(e, v)
                                                                ? u.push([
                                                                    a,
                                                                    e,
                                                                    Boolean(n),
                                                                    o,
                                                                    w,
                                                                    i,
                                                                    o.type,
                                                                ])
                                                                : void 0 !== e && (w[i] = e);
                                                        });
                                                    }
                                                },
                                                R = 0;
                                                R < L;
                                                R++
                                            )
                                                U(R);
                                            $ && $({ endIterateUnsetNumeric: !0, end: !0 });
                                        }
                                        return w;
                                    }
                                    function S(e, t, n, r, i, o, a) {
                                        for (
                                            var f = i
                                                ? s.plainObjectReplacers
                                                : s.nonplainObjectReplacers,
                                            l = f.length;
                                            l--;

                                        ) {
                                            var p = f[l];
                                            if (p.test(t, n)) {
                                                var y = p.type;
                                                if (s.revivers[y]) {
                                                    var h = c[e];
                                                    c[e] = h ? [y].concat(h) : y;
                                                }
                                                return (
                                                    Object.assign(n, { type: y, replaced: !0 }),
                                                    (!u && p.replaceAsync) || p.replace
                                                        ? (a && a({ replacing: !0 }),
                                                            N(
                                                                e,
                                                                p[
                                                                    u || !p.replaceAsync
                                                                        ? "replace"
                                                                        : "replaceAsync"
                                                                ](t, n),
                                                                $ && "readonly",
                                                                n,
                                                                r,
                                                                o,
                                                                y
                                                            ))
                                                        : (a && a({ typeDetected: !0 }),
                                                            N(e, t, $ && "readonly", n, r, o, y))
                                                );
                                            }
                                        }
                                        return t;
                                    }
                                    return b.length
                                        ? u && i.throwOnBadSyncType
                                            ? (function () {
                                                throw TypeError(
                                                    "Sync method requested but async result obtained"
                                                );
                                            })()
                                            : Promise.resolve(o(m, b)).then(w)
                                        : !u && i.throwOnBadSyncType
                                            ? (function () {
                                                throw TypeError(
                                                    "Async method requested but sync result obtained"
                                                );
                                            })()
                                            : i.stringification && u
                                                ? [w(m)]
                                                : u
                                                    ? w(m)
                                                    : Promise.resolve(w(m));
                                },
                            },
                            {
                                key: "encapsulateSync",
                                value: function e(t, n, r) {
                                    return this.encapsulate(
                                        t,
                                        n,
                                        p(p({ throwOnBadSyncType: !0 }, r), {}, { sync: !0 })
                                    );
                                },
                            },
                            {
                                key: "encapsulateAsync",
                                value: function e(t, n, r) {
                                    return this.encapsulate(
                                        t,
                                        n,
                                        p(p({ throwOnBadSyncType: !0 }, r), {}, { sync: !1 })
                                    );
                                },
                            },
                            {
                                key: "revive",
                                value: function e(t, n) {
                                    var r = t && t.$types;
                                    if (!r) return t;
                                    if (!0 === r) return t.$;
                                    var i = (n = p(p({ sync: !0 }, this.options), n)).sync,
                                        o = [],
                                        a = {},
                                        u = !0;
                                    r.$ && E(r.$) && ((t = t.$), (r = r.$), (u = !1));
                                    var s = this;
                                    function c(e, t) {
                                        var n = y(s.revivers[e] || [], 1)[0];
                                        if (!n) throw Error("Unregistered type: " + e);
                                        return !i || ("revive" in n)
                                            ? n[
                                                i && n.revive
                                                    ? "revive"
                                                    : !i && n.reviveAsync
                                                        ? "reviveAsync"
                                                        : "revive"
                                            ](t, a)
                                            : t;
                                    }
                                    var f = [];
                                    function l(e) {
                                        return O(e, R) ? void 0 : e;
                                    }
                                    var h,
                                        d = (function e() {
                                            var n = [];
                                            if (
                                                (Object.entries(r).forEach(function (e) {
                                                    var t = y(e, 2),
                                                        i = t[0],
                                                        o = t[1];
                                                    "#" !== o &&
                                                        [].concat(o).forEach(function (e) {
                                                            y(s.revivers[e] || [null, {}], 2)[1].plain &&
                                                                (n.push({ keypath: i, type: e }),
                                                                    delete r[i]);
                                                        });
                                                }),
                                                    n.length)
                                            )
                                                return n.sort(L).reduce(function e(n, r) {
                                                    var i = r.keypath,
                                                        o = r.type;
                                                    if (w(n))
                                                        return n.then(function (t) {
                                                            return e(t, { keypath: i, type: o });
                                                        });
                                                    var a = S(t, i);
                                                    if (O((a = c(o, a)), v))
                                                        return a.then(function (e) {
                                                            var n = x(t, i, e);
                                                            n === e && (t = n);
                                                        });
                                                    var u = x(t, i, a);
                                                    u === a && (t = u);
                                                }, void 0);
                                        })();
                                    return (
                                        O(d, v)
                                            ? (h = d.then(function () {
                                                return t;
                                            }))
                                            : ((h = (function e(t, n, i, a, s) {
                                                if (!u || "$types" !== t) {
                                                    var l = r[t],
                                                        p = P(n);
                                                    if (p || E(n)) {
                                                        var h = p ? Array(n.length) : {};
                                                        for (
                                                            I(n).forEach(function (r) {
                                                                var o = e(
                                                                    t + (t ? "." : "") + A(r),
                                                                    n[r],
                                                                    i || h,
                                                                    h,
                                                                    r
                                                                ),
                                                                    a = function e(t) {
                                                                        return (
                                                                            O(t, R)
                                                                                ? (h[r] = void 0)
                                                                                : void 0 !== t && (h[r] = t),
                                                                            t
                                                                        );
                                                                    };
                                                                O(o, v)
                                                                    ? f.push(
                                                                        o.then(function (e) {
                                                                            return a(e);
                                                                        })
                                                                    )
                                                                    : a(o);
                                                            }),
                                                            n = h;
                                                            o.length;

                                                        ) {
                                                            var d = y(o[0], 4),
                                                                b = d[0],
                                                                $ = d[1],
                                                                g = d[2],
                                                                m = d[3],
                                                                w = S(b, $);
                                                            if (void 0 === w) break;
                                                            (g[m] = w), o.splice(0, 1);
                                                        }
                                                    }
                                                    if (!l) return n;
                                                    if ("#" === l) {
                                                        var _ = S(i, n.slice(1));
                                                        return (
                                                            void 0 === _ &&
                                                            o.push([i, n.slice(1), void 0, void 0]),
                                                            _
                                                        );
                                                    }
                                                    return [].concat(l).reduce(function e(t, n) {
                                                        return O(t, v)
                                                            ? t.then(function (t) {
                                                                return e(t, n);
                                                            })
                                                            : c(n, t);
                                                    }, n);
                                                }
                                            })("", t, null)),
                                                f.length &&
                                                (h = v
                                                    .resolve(h)
                                                    .then(function (e) {
                                                        return v.all([e].concat(f));
                                                    })
                                                    .then(function (e) {
                                                        return y(e, 1)[0];
                                                    }))),
                                        w(h)
                                            ? i && n.throwOnBadSyncType
                                                ? (function () {
                                                    throw TypeError(
                                                        "Sync method requested but async result obtained"
                                                    );
                                                })()
                                                : O(h, v)
                                                    ? h.p.then(l)
                                                    : h
                                            : !i && n.throwOnBadSyncType
                                                ? (function () {
                                                    throw TypeError(
                                                        "Async method requested but sync result obtained"
                                                    );
                                                })()
                                                : i
                                                    ? l(h)
                                                    : Promise.resolve(l(h))
                                    );
                                },
                            },
                            {
                                key: "reviveSync",
                                value: function e(t, n) {
                                    return this.revive(
                                        t,
                                        p(p({ throwOnBadSyncType: !0 }, n), {}, { sync: !0 })
                                    );
                                },
                            },
                            {
                                key: "reviveAsync",
                                value: function e(t, n) {
                                    return this.revive(
                                        t,
                                        p(p({ throwOnBadSyncType: !0 }, n), {}, { sync: !1 })
                                    );
                                },
                            },
                            {
                                key: "register",
                                value: function e(t, n) {
                                    return (
                                        (n = n || {}),
                                        [].concat(t).forEach(function e(t) {
                                            var i = this;
                                            if (P(t))
                                                return t.map(function (t) {
                                                    return e.call(i, t);
                                                });
                                            t &&
                                                I(t).forEach(function (e) {
                                                    if ("#" === e)
                                                        throw TypeError(
                                                            "# cannot be used as a type name as it is reserved for cyclic objects"
                                                        );
                                                    if (r.JSON_TYPES.includes(e))
                                                        throw TypeError(
                                                            "Plain JSON object types are reserved as type names"
                                                        );
                                                    var i = t[e],
                                                        o =
                                                            i && i.testPlainObjects
                                                                ? this.plainObjectReplacers
                                                                : this.nonplainObjectReplacers,
                                                        a = o.filter(function (t) {
                                                            return t.type === e;
                                                        });
                                                    if (
                                                        (a.length &&
                                                            (o.splice(o.indexOf(a[0]), 1),
                                                                delete this.revivers[e],
                                                                delete this.types[e]),
                                                            "function" == typeof i)
                                                    ) {
                                                        var u = i;
                                                        i = {
                                                            test: function e(t) {
                                                                return t && t.constructor === u;
                                                            },
                                                            replace: function e(t) {
                                                                return p({}, t);
                                                            },
                                                            revive: function e(t) {
                                                                return Object.assign(
                                                                    Object.create(u.prototype),
                                                                    t
                                                                );
                                                            },
                                                        };
                                                    } else if (P(i)) {
                                                        var s = y(i, 3);
                                                        i = { test: s[0], replace: s[1], revive: s[2] };
                                                    }
                                                    if (i && i.test) {
                                                        var c = { type: e, test: i.test.bind(i) };
                                                        i.replace && (c.replace = i.replace.bind(i)),
                                                            i.replaceAsync &&
                                                            (c.replaceAsync = i.replaceAsync.bind(i));
                                                        var f =
                                                            "number" == typeof n.fallback
                                                                ? n.fallback
                                                                : n.fallback
                                                                    ? 0
                                                                    : Number.POSITIVE_INFINITY;
                                                        if (
                                                            (i.testPlainObjects
                                                                ? this.plainObjectReplacers.splice(f, 0, c)
                                                                : this.nonplainObjectReplacers.splice(
                                                                    f,
                                                                    0,
                                                                    c
                                                                ),
                                                                i.revive || i.reviveAsync)
                                                        ) {
                                                            var l = {};
                                                            i.revive && (l.revive = i.revive.bind(i)),
                                                                i.reviveAsync &&
                                                                (l.reviveAsync = i.reviveAsync.bind(i)),
                                                                (this.revivers[e] = [
                                                                    l,
                                                                    { plain: i.testPlainObjects },
                                                                ]);
                                                        }
                                                        this.types[e] = i;
                                                    }
                                                }, this);
                                        }, this),
                                        this
                                    );
                                },
                            },
                        ]),
                        c(e.prototype, t),
                        n && c(e, n),
                        r
                    );
                })(),
                    R = function e() {
                        u(this, e);
                    };
                (R.__typeson__type__ = "TypesonUndefined"),
                    (U.Undefined = R),
                    (U.Promise = v),
                    (U.isThenable = w),
                    (U.toStringTag = _),
                    (U.hasConstructorOf = O),
                    (U.isObject = T),
                    (U.isPlainObject = E),
                    (U.isUserObject = function e(t) {
                        if (!t || "Object" !== _(t)) return !1;
                        var n = g(t);
                        return !n || O(t, Object) || e(n);
                    }),
                    (U.escapeKeyPathComponent = A),
                    (U.unescapeKeyPathComponent = N),
                    (U.getByKeyPath = S),
                    (U.getJSONType = function e(t) {
                        return null === t ? "null" : Array.isArray(t) ? "array" : a(t);
                    }),
                    (U.JSON_TYPES = [
                        "null",
                        "boolean",
                        "number",
                        "string",
                        "array",
                        "object",
                    ]);
                for (
                    var F = [
                        {
                            arrayNonindexKeys: {
                                testPlainObjects: !0,
                                test: function e(t, n) {
                                    return (
                                        !!Array.isArray(t) &&
                                        (Object.keys(t).some(function (e) {
                                            return String(Number.parseInt(e)) !== e;
                                        }) && ((n.iterateIn = "object"), (n.addLength = !0)),
                                            !0)
                                    );
                                },
                                replace: function e(t, n) {
                                    return (n.iterateUnsetNumeric = !0), t;
                                },
                                revive: function e(t) {
                                    if (Array.isArray(t)) return t;
                                    var n = [];
                                    return (
                                        Object.keys(t).forEach(function (e) {
                                            var r = t[e];
                                            n[e] = r;
                                        }),
                                        n
                                    );
                                },
                            },
                        },
                        {
                            sparseUndefined: {
                                test: function e(t, n) {
                                    return void 0 === t && !1 === n.ownKeys;
                                },
                                replace: function e(t) {
                                    return 0;
                                },
                                revive: function e(t) { },
                            },
                        },
                    ],
                    D =
                        "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/",
                    K = new Uint8Array(256),
                    V = 0;
                    V < D.length;
                    V++
                )
                    K[D.charCodeAt(V)] = V;
                var M = function e(t, n, r) {
                    null == r && (r = t.byteLength);
                    for (
                        var i = new Uint8Array(t, n || 0, r),
                        o = i.length,
                        a = "",
                        u = 0;
                        u < o;
                        u += 3
                    )
                        (a += D[i[u] >> 2]),
                            (a += D[((3 & i[u]) << 4) | (i[u + 1] >> 4)]),
                            (a += D[((15 & i[u + 1]) << 2) | (i[u + 2] >> 6)]),
                            (a += D[63 & i[u + 2]]);
                    return (
                        o % 3 == 2
                            ? (a = a.slice(0, -1) + "=")
                            : o % 3 == 1 && (a = a.slice(0, -2) + "=="),
                        a
                    );
                },
                    G = function e(t) {
                        var n,
                            r,
                            i,
                            o,
                            a = t.length,
                            u = 0.75 * t.length,
                            s = 0;
                        "=" === t[t.length - 1] && (u--, "=" === t[t.length - 2] && u--);
                        for (
                            var c = new ArrayBuffer(u), f = new Uint8Array(c), l = 0;
                            l < a;
                            l += 4
                        )
                            (n = K[t.charCodeAt(l)]),
                                (r = K[t.charCodeAt(l + 1)]),
                                (i = K[t.charCodeAt(l + 2)]),
                                (o = K[t.charCodeAt(l + 3)]),
                                (f[s++] = (n << 2) | (r >> 4)),
                                (f[s++] = ((15 & r) << 4) | (i >> 2)),
                                (f[s++] = ((3 & i) << 6) | (63 & o));
                        return c;
                    },
                    Y = "undefined" == typeof self ? s : self,
                    J = {};
                function q(e) {
                    for (var t = new Uint8Array(e.length), n = 0; n < e.length; n++)
                        t[n] = e.charCodeAt(n);
                    return t.buffer;
                }
                [
                    "Int8Array",
                    "Uint8Array",
                    "Uint8ClampedArray",
                    "Int16Array",
                    "Uint16Array",
                    "Int32Array",
                    "Uint32Array",
                    "Float32Array",
                    "Float64Array",
                ].forEach(function (e) {
                    var t = e,
                        n = Y[t];
                    n &&
                        (J[e.toLowerCase()] = {
                            test: function e(n) {
                                return U.toStringTag(n) === t;
                            },
                            replace: function e(t, n) {
                                var r = t.buffer,
                                    i = t.byteOffset,
                                    o = t.length;
                                n.buffers || (n.buffers = []);
                                var a = n.buffers.indexOf(r);
                                return a > -1
                                    ? { index: a, byteOffset: i, length: o }
                                    : (n.buffers.push(r),
                                        { encoded: M(r), byteOffset: i, length: o });
                            },
                            revive: function e(t, r) {
                                r.buffers || (r.buffers = []);
                                var i,
                                    o = t.byteOffset,
                                    a = t.length,
                                    u = t.encoded,
                                    s = t.index;
                                return (
                                    ("index" in t)
                                        ? (i = r.buffers[s])
                                        : ((i = G(u)), r.buffers.push(i)),
                                    new n(i, o, a)
                                );
                            },
                        });
                });
                var z = {
                    file: {
                        test: function e(t) {
                            return "File" === U.toStringTag(t);
                        },
                        replace: function e(t) {
                            var n = new XMLHttpRequest();
                            if (
                                (n.overrideMimeType("text/plain; charset=x-user-defined"),
                                    n.open("GET", URL.createObjectURL(t), !1),
                                    n.send(),
                                    200 !== n.status && 0 !== n.status)
                            )
                                throw Error("Bad File access: " + n.status);
                            return {
                                type: t.type,
                                stringContents: n.responseText,
                                name: t.name,
                                lastModified: t.lastModified,
                            };
                        },
                        revive: function e(t) {
                            var n = t.name,
                                r = t.type,
                                i = t.stringContents,
                                o = t.lastModified;
                            return new File([q(i)], n, { type: r, lastModified: o });
                        },
                        replaceAsync: function e(t) {
                            return new U.Promise(function (e, n) {
                                var r = new FileReader();
                                r.addEventListener("load", function () {
                                    e({
                                        type: t.type,
                                        stringContents: r.result,
                                        name: t.name,
                                        lastModified: t.lastModified,
                                    });
                                }),
                                    r.addEventListener("error", function () {
                                        n(r.error);
                                    }),
                                    r.readAsBinaryString(t);
                            });
                        },
                    },
                };
                return [
                    {
                        userObject: {
                            test: function e(t, n) {
                                return U.isUserObject(t);
                            },
                            replace: function e(t) {
                                return (function e(t) {
                                    for (var i = 1; i < arguments.length; i++) {
                                        var o = null != arguments[i] ? arguments[i] : {};
                                        i % 2
                                            ? r(Object(o), !0).forEach(function (e) {
                                                n(t, e, o[e]);
                                            })
                                            : Object.getOwnPropertyDescriptors
                                                ? Object.defineProperties(
                                                    t,
                                                    Object.getOwnPropertyDescriptors(o)
                                                )
                                                : r(Object(o)).forEach(function (e) {
                                                    Object.defineProperty(
                                                        t,
                                                        e,
                                                        Object.getOwnPropertyDescriptor(o, e)
                                                    );
                                                });
                                    }
                                    return t;
                                })({}, t);
                            },
                            revive: function e(t) {
                                return t;
                            },
                        },
                    },
                    {
                        undef: {
                            test: function e(t, n) {
                                return void 0 === t && (n.ownKeys || !("ownKeys" in n));
                            },
                            replace: function e(t) {
                                return 0;
                            },
                            revive: function e(t) {
                                return new U.Undefined();
                            },
                        },
                    },
                    F,
                    {
                        StringObject: {
                            test: function t(n) {
                                return "String" === U.toStringTag(n) && "object" === e(n);
                            },
                            replace: function e(t) {
                                return String(t);
                            },
                            revive: function e(t) {
                                return new String(t);
                            },
                        },
                        BooleanObject: {
                            test: function t(n) {
                                return "Boolean" === U.toStringTag(n) && "object" === e(n);
                            },
                            replace: function e(t) {
                                return Boolean(t);
                            },
                            revive: function e(t) {
                                return new Boolean(t);
                            },
                        },
                        NumberObject: {
                            test: function t(n) {
                                return "Number" === U.toStringTag(n) && "object" === e(n);
                            },
                            replace: function e(t) {
                                return Number(t);
                            },
                            revive: function e(t) {
                                return new Number(t);
                            },
                        },
                    },
                    [
                        {
                            nan: {
                                test: function e(t) {
                                    return Number.isNaN(t);
                                },
                                replace: function e(t) {
                                    return "NaN";
                                },
                                revive: function e(t) {
                                    return Number.NaN;
                                },
                            },
                        },
                        {
                            infinity: {
                                test: function e(t) {
                                    return t === Number.POSITIVE_INFINITY;
                                },
                                replace: function e(t) {
                                    return "Infinity";
                                },
                                revive: function e(t) {
                                    return Number.POSITIVE_INFINITY;
                                },
                            },
                        },
                        {
                            negativeInfinity: {
                                test: function e(t) {
                                    return t === Number.NEGATIVE_INFINITY;
                                },
                                replace: function e(t) {
                                    return "-Infinity";
                                },
                                revive: function e(t) {
                                    return Number.NEGATIVE_INFINITY;
                                },
                            },
                        },
                    ],
                    {
                        date: {
                            test: function e(t) {
                                return "Date" === U.toStringTag(t);
                            },
                            replace: function e(t) {
                                var n = t.getTime();
                                return Number.isNaN(n) ? "NaN" : n;
                            },
                            revive: function e(t) {
                                return new Date("NaN" === t ? Number.NaN : t);
                            },
                        },
                    },
                    {
                        regexp: {
                            test: function e(t) {
                                return "RegExp" === U.toStringTag(t);
                            },
                            replace: function e(t) {
                                return {
                                    source: t.source,
                                    flags:
                                        (t.global ? "g" : "") +
                                        (t.ignoreCase ? "i" : "") +
                                        (t.multiline ? "m" : "") +
                                        (t.sticky ? "y" : "") +
                                        (t.unicode ? "u" : ""),
                                };
                            },
                            revive: function e(t) {
                                var n;
                                return RegExp(t.source, t.flags);
                            },
                        },
                    },
                    {
                        imagedata: {
                            test: function e(t) {
                                return "ImageData" === U.toStringTag(t);
                            },
                            replace: function e(t) {
                                return { array: i(t.data), width: t.width, height: t.height };
                            },
                            revive: function e(t) {
                                return new ImageData(
                                    new Uint8ClampedArray(t.array),
                                    t.width,
                                    t.height
                                );
                            },
                        },
                    },
                    {
                        imagebitmap: {
                            test: function e(t) {
                                return (
                                    "ImageBitmap" === U.toStringTag(t) ||
                                    (t && t.dataset && "ImageBitmap" === t.dataset.toStringTag)
                                );
                            },
                            replace: function e(t) {
                                var n = document.createElement("canvas");
                                return n.getContext("2d").drawImage(t, 0, 0), n.toDataURL();
                            },
                            revive: function e(t) {
                                var n = document.createElement("canvas"),
                                    r = n.getContext("2d"),
                                    i = document.createElement("img");
                                return (
                                    i.addEventListener("load", function () {
                                        r.drawImage(i, 0, 0);
                                    }),
                                    (i.src = t),
                                    n
                                );
                            },
                            reviveAsync: function e(t) {
                                var n = document.createElement("canvas"),
                                    r = n.getContext("2d"),
                                    i = document.createElement("img");
                                return (
                                    i.addEventListener("load", function () {
                                        r.drawImage(i, 0, 0);
                                    }),
                                    (i.src = t),
                                    createImageBitmap(n)
                                );
                            },
                        },
                    },
                    z,
                    {
                        file: z.file,
                        filelist: {
                            test: function e(t) {
                                return "FileList" === U.toStringTag(t);
                            },
                            replace: function e(t) {
                                for (var n = [], r = 0; r < t.length; r++) n[r] = t.item(r);
                                return n;
                            },
                            revive: function e(n) {
                                return new ((function () {
                                    var e, n, r;
                                    function i() {
                                        (function e(t, n) {
                                            if (!(t instanceof n))
                                                throw TypeError("Cannot call a class as a function");
                                        })(this, i),
                                            (this._files = arguments[0]),
                                            (this.length = this._files.length);
                                    }
                                    return (
                                        (e = i),
                                        (n = [
                                            {
                                                key: "item",
                                                value: function e(t) {
                                                    return this._files[t];
                                                },
                                            },
                                            {
                                                key: Symbol.toStringTag,
                                                get: function e() {
                                                    return "FileList";
                                                },
                                            },
                                        ]),
                                        t(e.prototype, n),
                                        r && t(e, r),
                                        i
                                    );
                                })())(n);
                            },
                        },
                    },
                    {
                        blob: {
                            test: function e(t) {
                                return "Blob" === U.toStringTag(t);
                            },
                            replace: function e(t) {
                                var n = new XMLHttpRequest();
                                if (
                                    (n.overrideMimeType("text/plain; charset=x-user-defined"),
                                        n.open("GET", URL.createObjectURL(t), !1),
                                        n.send(),
                                        200 !== n.status && 0 !== n.status)
                                )
                                    throw Error("Bad Blob access: " + n.status);
                                return { type: t.type, stringContents: n.responseText };
                            },
                            revive: function e(t) {
                                var n = t.type,
                                    r = t.stringContents;
                                return new Blob([q(r)], { type: n });
                            },
                            replaceAsync: function e(t) {
                                return new U.Promise(function (e, n) {
                                    var r = new FileReader();
                                    r.addEventListener("load", function () {
                                        e({ type: t.type, stringContents: r.result });
                                    }),
                                        r.addEventListener("error", function () {
                                            n(r.error);
                                        }),
                                        r.readAsBinaryString(t);
                                });
                            },
                        },
                    },
                ].concat(
                    "function" == typeof Map
                        ? {
                            map: {
                                test: function e(t) {
                                    return "Map" === U.toStringTag(t);
                                },
                                replace: function e(t) {
                                    return i(t.entries());
                                },
                                revive: function e(t) {
                                    return new Map(t);
                                },
                            },
                        }
                        : [],
                    "function" == typeof Set
                        ? {
                            set: {
                                test: function e(t) {
                                    return "Set" === U.toStringTag(t);
                                },
                                replace: function e(t) {
                                    return i(t.values());
                                },
                                revive: function e(t) {
                                    return new Set(t);
                                },
                            },
                        }
                        : [],
                    "function" == typeof ArrayBuffer
                        ? {
                            arraybuffer: {
                                test: function e(t) {
                                    return "ArrayBuffer" === U.toStringTag(t);
                                },
                                replace: function e(t, n) {
                                    n.buffers || (n.buffers = []);
                                    var r = n.buffers.indexOf(t);
                                    return r > -1 ? { index: r } : (n.buffers.push(t), M(t));
                                },
                                revive: function t(n, r) {
                                    if ((r.buffers || (r.buffers = []), "object" === e(n)))
                                        return r.buffers[n.index];
                                    var i = G(n);
                                    return r.buffers.push(i), i;
                                },
                            },
                        }
                        : [],
                    "function" == typeof Uint8Array ? J : [],
                    "function" == typeof DataView
                        ? {
                            dataview: {
                                test: function e(t) {
                                    return "DataView" === U.toStringTag(t);
                                },
                                replace: function e(t, n) {
                                    var r = t.buffer,
                                        i = t.byteOffset,
                                        o = t.byteLength;
                                    n.buffers || (n.buffers = []);
                                    var a = n.buffers.indexOf(r);
                                    return a > -1
                                        ? { index: a, byteOffset: i, byteLength: o }
                                        : (n.buffers.push(r),
                                            { encoded: M(r), byteOffset: i, byteLength: o });
                                },
                                revive: function e(t, n) {
                                    n.buffers || (n.buffers = []);
                                    var r,
                                        i = t.byteOffset,
                                        o = t.byteLength,
                                        a = t.encoded,
                                        u = t.index;
                                    return (
                                        ("index" in t)
                                            ? (r = n.buffers[u])
                                            : ((r = G(a)), n.buffers.push(r)),
                                        new DataView(r, i, o)
                                    );
                                },
                            },
                        }
                        : [],
                    "undefined" != typeof Intl
                        ? {
                            IntlCollator: {
                                test: function e(t) {
                                    return U.hasConstructorOf(t, Intl.Collator);
                                },
                                replace: function e(t) {
                                    return t.resolvedOptions();
                                },
                                revive: function e(t) {
                                    return new Intl.Collator(t.locale, t);
                                },
                            },
                            IntlDateTimeFormat: {
                                test: function e(t) {
                                    return U.hasConstructorOf(t, Intl.DateTimeFormat);
                                },
                                replace: function e(t) {
                                    return t.resolvedOptions();
                                },
                                revive: function e(t) {
                                    return new Intl.DateTimeFormat(t.locale, t);
                                },
                            },
                            IntlNumberFormat: {
                                test: function e(t) {
                                    return U.hasConstructorOf(t, Intl.NumberFormat);
                                },
                                replace: function e(t) {
                                    return t.resolvedOptions();
                                },
                                revive: function e(t) {
                                    return new Intl.NumberFormat(t.locale, t);
                                },
                            },
                        }
                        : [],
                    "undefined" != typeof crypto
                        ? {
                            cryptokey: {
                                test: function e(t) {
                                    return "CryptoKey" === U.toStringTag(t) && t.extractable;
                                },
                                replaceAsync: function e(t) {
                                    return new U.Promise(function (e, n) {
                                        crypto.subtle
                                            .exportKey("jwk", t)
                                            .catch(function (e) {
                                                n(e);
                                            })
                                            .then(function (n) {
                                                e({
                                                    jwk: n,
                                                    algorithm: t.algorithm,
                                                    usages: t.usages,
                                                });
                                            });
                                    });
                                },
                                revive: function e(t) {
                                    var n = t.jwk,
                                        r = t.algorithm,
                                        i = t.usages;
                                    return crypto.subtle.importKey("jwk", n, r, !0, i);
                                },
                            },
                        }
                        : [],
                    "undefined" != typeof BigInt
                        ? [
                            {
                                bigint: {
                                    test: function e(t) {
                                        return "bigint" == typeof t;
                                    },
                                    replace: function e(t) {
                                        return String(t);
                                    },
                                    revive: function e(t) {
                                        return BigInt(t);
                                    },
                                },
                            },
                            {
                                bigintObject: {
                                    test: function t(n) {
                                        return (
                                            "object" === e(n) && U.hasConstructorOf(n, BigInt)
                                        );
                                    },
                                    replace: function e(t) {
                                        return String(t);
                                    },
                                    revive: function e(t) {
                                        return Object(BigInt(t));
                                    },
                                },
                            },
                        ]
                        : []
                );
            }),
                (e.exports = r());
        }),
        p = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/",
        y = new Uint8Array(256),
        h = 0;
        h < p.length;
        h++
    )
        y[p.codePointAt(h)] = h;
    var d = function e(t, n, r) {
        null == r && (r = t.byteLength);
        for (
            var i = new Uint8Array(t, n || 0, r), o = i.length, a = "", u = 0;
            u < o;
            u += 3
        )
            (a += p[i[u] >> 2]),
                (a += p[((3 & i[u]) << 4) | (i[u + 1] >> 4)]),
                (a += p[((15 & i[u + 1]) << 2) | (i[u + 2] >> 6)]),
                (a += p[63 & i[u + 2]]);
        return (
            o % 3 == 2
                ? (a = a.slice(0, -1) + "=")
                : o % 3 == 1 && (a = a.slice(0, -2) + "=="),
            a
        );
    },
        v = function e(t) {
            var n,
                r,
                i,
                o,
                a = t.length,
                u = 0.75 * t.length,
                s = 0;
            "=" === t[t.length - 1] && (u--, "=" === t[t.length - 2] && u--);
            for (
                var c = new ArrayBuffer(u), f = new Uint8Array(c), l = 0;
                l < a;
                l += 4
            )
                (n = y[t.codePointAt(l)]),
                    (r = y[t.codePointAt(l + 1)]),
                    (i = y[t.codePointAt(l + 2)]),
                    (o = y[t.codePointAt(l + 3)]),
                    (f[s++] = (n << 2) | (r >> 4)),
                    (f[s++] = ((15 & r) << 4) | (i >> 2)),
                    (f[s++] = ((3 & i) << 6) | (63 & o));
            return c;
        },
        b = "undefined" == typeof self ? global : self,
        $ = {};
    [
        "Int8Array",
        "Uint8Array",
        "Uint8ClampedArray",
        "Int16Array",
        "Uint16Array",
        "Int32Array",
        "Uint32Array",
        "Float32Array",
        "Float64Array",
    ].forEach(function (e) {
        var t = e,
            n = b[t];
        n &&
            ($[e.toLowerCase() + "2"] = {
                test: function (e) {
                    return f.toStringTag(e) === t;
                },
                replace: function (e) {
                    var t,
                        n = e.buffer;
                    return { buffer: n, byteOffset: e.byteOffset, length: e.length };
                },
                revive: function (e) {
                    var t = e.buffer,
                        r = e.byteOffset,
                        i = e.length;
                    return new n(t, r, i);
                },
            });
    });
    var g = new f().register(l),
        m = "FileReaderSync" in self,
        w = [],
        _ = 0;
    function O(e, t) {
        return i(this, void 0, void 0, function () {
            var n, a, u, s, c, f;
            function l() {
                return i(this, void 0, void 0, function () {
                    var i, l, p, y, h, d, v, b, $;
                    return o(this, function (m) {
                        switch (m.label) {
                            case 0:
                                return [
                                    4,
                                    Promise.all(
                                        e.tables.map(function (e) {
                                            return e.count();
                                        })
                                    ),
                                ];
                            case 1:
                                (i = m.sent()).forEach(function (e, t) {
                                    return (a[t].rowCount = e);
                                }),
                                    (f.totalRows = i.reduce(function (e, t) {
                                        return e + t;
                                    })),
                                    (p = (l = JSON.stringify(
                                        s,
                                        void 0,
                                        u ? 2 : void 0
                                    )).lastIndexOf("]")),
                                    (y = l.substring(0, p)),
                                    n.push(y),
                                    (h = t.filter),
                                    (d = function (i) {
                                        var a, s, l, p, y, d, v, b, $, m, w, _;
                                        return o(this, function (O) {
                                            switch (O.label) {
                                                case 0:
                                                    (l = !!(s = (a = e.table(i)).schema.primKey).keyPath),
                                                        (p = t.numRowsPerChunk || 2e3),
                                                        (d = JSON.stringify(
                                                            (y = l
                                                                ? { tableName: a.name, inbound: !0, rows: [] }
                                                                : { tableName: a.name, inbound: !1, rows: [] }),
                                                            void 0,
                                                            u ? 2 : void 0
                                                        )),
                                                        u && (d = d.split("\n").join("\n    ")),
                                                        (v = d.lastIndexOf("]")),
                                                        n.push(d.substring(0, v)),
                                                        (b = null),
                                                        ($ = 0),
                                                        (m = !0),
                                                        (w = function () {
                                                            var e, t, y, d, v, w, _, O;
                                                            return o(this, function (o) {
                                                                switch (o.label) {
                                                                    case 0:
                                                                        return (
                                                                            c &&
                                                                            r.default.ignoreTransaction(
                                                                                function () {
                                                                                    return c(f);
                                                                                }
                                                                            ),
                                                                            [
                                                                                4,
                                                                                (e =
                                                                                    null == b
                                                                                        ? a.limit(p)
                                                                                        : a
                                                                                            .where(":id")
                                                                                            .above(b)
                                                                                            .limit(p)).toArray(),
                                                                            ]
                                                                        );
                                                                    case 1:
                                                                        if (0 === (t = o.sent()).length)
                                                                            return [2, "break"];
                                                                        if (
                                                                            (null != b &&
                                                                                $ > 0 &&
                                                                                (n.push(","), u && n.push("\n      ")),
                                                                                (m = t.length === p),
                                                                                !l)
                                                                        )
                                                                            return [3, 4];
                                                                        if (
                                                                            ((d = (y = h
                                                                                ? t.filter(function (e) {
                                                                                    return h(i, e);
                                                                                })
                                                                                : t).map(function (e) {
                                                                                    return g.encapsulate(e);
                                                                                })),
                                                                                !g.mustFinalize())
                                                                        )
                                                                            return [3, 3];
                                                                        return [
                                                                            4,
                                                                            r.default.waitFor(g.finalize(d)),
                                                                        ];
                                                                    case 2:
                                                                        o.sent(), (o.label = 3);
                                                                    case 3:
                                                                        return (
                                                                            (v = JSON.stringify(
                                                                                d,
                                                                                void 0,
                                                                                u ? 2 : void 0
                                                                            )),
                                                                            u && (v = v.split("\n").join("\n      ")),
                                                                            n.push(
                                                                                new Blob([v.substring(1, v.length - 1)])
                                                                            ),
                                                                            ($ = y.length),
                                                                            (b =
                                                                                t.length > 0
                                                                                    ? r.default.getByKeyPath(
                                                                                        t[t.length - 1],
                                                                                        s.keyPath
                                                                                    )
                                                                                    : null),
                                                                            [3, 8]
                                                                        );
                                                                    case 4:
                                                                        return [4, e.primaryKeys()];
                                                                    case 5:
                                                                        if (
                                                                            ((_ = (w = o.sent()).map(function (e, n) {
                                                                                return [e, t[n]];
                                                                            })),
                                                                                h &&
                                                                                (_ = _.filter(function (e) {
                                                                                    var t = e[0];
                                                                                    return h(i, e[1], t);
                                                                                })),
                                                                                (O = _.map(function (e) {
                                                                                    return g.encapsulate(e);
                                                                                })),
                                                                                !g.mustFinalize())
                                                                        )
                                                                            return [3, 7];
                                                                        return [
                                                                            4,
                                                                            r.default.waitFor(g.finalize(O)),
                                                                        ];
                                                                    case 6:
                                                                        o.sent(), (o.label = 7);
                                                                    case 7:
                                                                        (v = JSON.stringify(
                                                                            O,
                                                                            void 0,
                                                                            u ? 2 : void 0
                                                                        )),
                                                                            u && (v = v.split("\n").join("\n      ")),
                                                                            n.push(
                                                                                new Blob([v.substring(1, v.length - 1)])
                                                                            ),
                                                                            ($ = _.length),
                                                                            (b =
                                                                                w.length > 0 ? w[w.length - 1] : null),
                                                                            (o.label = 8);
                                                                    case 8:
                                                                        return (f.completedRows += t.length), [2];
                                                                }
                                                            });
                                                        }),
                                                        (O.label = 1);
                                                case 1:
                                                    if (!m) return [3, 3];
                                                    return [5, w()];
                                                case 2:
                                                    if ("break" === (_ = O.sent())) return [3, 3];
                                                    return [3, 1];
                                                case 3:
                                                    return (
                                                        n.push(d.substr(v)),
                                                        (f.completedTables += 1),
                                                        f.completedTables < f.totalTables && n.push(","),
                                                        [2]
                                                    );
                                            }
                                        });
                                    }),
                                    (v = 0),
                                    (b = a),
                                    (m.label = 2);
                            case 2:
                                if (!(v < b.length)) return [3, 5];
                                return [5, d(($ = b[v].name))];
                            case 3:
                                m.sent(), (m.label = 4);
                            case 4:
                                return v++, [3, 2];
                            case 5:
                                return (
                                    n.push(l.substr(p)),
                                    (f.done = !0),
                                    c &&
                                    r.default.ignoreTransaction(function () {
                                        return c(f);
                                    }),
                                    [2]
                                );
                        }
                    });
                });
            }
            return o(this, function (i) {
                switch (i.label) {
                    case 0:
                        (t = t || {}),
                            (n = []),
                            (a = e.tables.map(function (e) {
                                var t;
                                return {
                                    name: e.name,
                                    schema: [(t = e).schema.primKey]
                                        .concat(t.schema.indexes)
                                        .map(function (e) {
                                            return e.src;
                                        })
                                        .join(","),
                                    rowCount: 0,
                                };
                            })),
                            (u = t.prettyJson),
                            (s = {
                                formatName: "dexie",
                                formatVersion: 1,
                                data: {
                                    databaseName: e.name,
                                    databaseVersion: e.verno,
                                    tables: a,
                                    data: [],
                                },
                            }),
                            (c = t.progressCallback),
                            (f = {
                                done: !1,
                                completedRows: 0,
                                completedTables: 0,
                                totalRows: NaN,
                                totalTables: e.tables.length,
                            }),
                            (i.label = 1);
                    case 1:
                        if ((i.trys.push([1, , 6, 7]), !t.noTransaction)) return [3, 3];
                        return [4, l()];
                    case 2:
                        return i.sent(), [3, 5];
                    case 3:
                        return [4, e.transaction("r", e.tables, l)];
                    case 4:
                        i.sent(), (i.label = 5);
                    case 5:
                        return [3, 7];
                    case 6:
                        return g.finalize(), [7];
                    case 7:
                        return (
                            c &&
                            r.default.ignoreTransaction(function () {
                                return c(f);
                            }),
                            [2, new Blob(n, { type: "text/json" })]
                        );
                }
            });
        });
    }
    g.register([
        {
            arraybuffer: {
                test: function (e) {
                    return "ArrayBuffer" === f.toStringTag(e);
                },
                replace: function (e) {
                    return d(e, 0, e.byteLength);
                },
                revive: function (e) {
                    return v(e);
                },
            },
        },
        $,
        {
            blob2: {
                test: function (e) {
                    return "Blob" === f.toStringTag(e);
                },
                replace: function (e) {
                    if (e.isClosed) throw Error("The Blob is closed");
                    if (m) {
                        var t = u(e, "binary"),
                            n = d(t, 0, t.byteLength);
                        return { type: e.type, data: n };
                    }
                    w.push(e);
                    var r = { type: e.type, data: { start: _, end: _ + e.size } };
                    return (_ += e.size), r;
                },
                finalize: function (e, t) {
                    e.data = d(t, 0, t.byteLength);
                },
                revive: function (e) {
                    var t = e.type,
                        n = e.data;
                    return new Blob([v(n)], { type: t });
                },
            },
        },
    ]),
        (g.mustFinalize = function () {
            return w.length > 0;
        }),
        (g.finalize = function (e) {
            return i(void 0, void 0, void 0, function () {
                var t, n, i, u, s, c, f, l, p, y;
                return o(this, function (o) {
                    switch (o.label) {
                        case 0:
                            return [4, a(new Blob(w), "binary")];
                        case 1:
                            if (((t = o.sent()), e)) {
                                for (n = 0, i = e; n < i.length; n++)
                                    if ((u = i[n]).$types)
                                        for (f in ((c = (s = u.$types).$) && (s = s.$), s))
                                            (l = s[f]),
                                                (p = g.types[l]) &&
                                                p.finalize &&
                                                ((y = r.default.getByKeyPath(u, c ? "$." + f : f)),
                                                    p.finalize(y, t.slice(y.start, y.end)));
                            }
                            return (w = []), [2];
                    }
                });
            });
        });
    var E = { Stream: function () { } },
        T = c(function (e, t) {
            !(function (e) {
                var t = "object" == typeof process && process.env ? process.env : self;
                (e.parser = function (e) {
                    return new f(e);
                }),
                    (e.CParser = f),
                    (e.CStream = p),
                    (e.createStream = function e(t) {
                        return new p(t);
                    }),
                    (e.MAX_BUFFER_LENGTH = 10485760),
                    (e.DEBUG = "debug" === t.CDEBUG),
                    (e.INFO = "debug" === t.CDEBUG || "info" === t.CDEBUG),
                    (e.EVENTS = [
                        "value",
                        "string",
                        "key",
                        "openobject",
                        "closeobject",
                        "openarray",
                        "closearray",
                        "error",
                        "end",
                        "ready",
                    ]);
                var n,
                    r = { textNode: void 0, numberNode: "" },
                    i = e.EVENTS.filter(function (e) {
                        return "error" !== e && "end" !== e;
                    }),
                    o = 0;
                for (var a in ((e.STATE = {
                    BEGIN: o++,
                    VALUE: o++,
                    OPEN_OBJECT: o++,
                    CLOSE_OBJECT: o++,
                    OPEN_ARRAY: o++,
                    CLOSE_ARRAY: o++,
                    TEXT_ESCAPE: o++,
                    STRING: o++,
                    BACKSLASH: o++,
                    END: o++,
                    OPEN_KEY: o++,
                    CLOSE_KEY: o++,
                    TRUE: o++,
                    TRUE2: o++,
                    TRUE3: o++,
                    FALSE: o++,
                    FALSE2: o++,
                    FALSE3: o++,
                    FALSE4: o++,
                    NULL: o++,
                    NULL2: o++,
                    NULL3: o++,
                    NUMBER_DECIMAL_POINT: o++,
                    NUMBER_DIGIT: o++,
                }),
                    e.STATE))
                    e.STATE[e.STATE[a]] = a;
                o = e.STATE;
                let u = {
                    tab: 9,
                    lineFeed: 10,
                    carriageReturn: 13,
                    space: 32,
                    doubleQuote: 34,
                    plus: 43,
                    comma: 44,
                    minus: 45,
                    period: 46,
                    _0: 48,
                    _9: 57,
                    colon: 58,
                    E: 69,
                    openBracket: 91,
                    backslash: 92,
                    closeBracket: 93,
                    a: 97,
                    b: 98,
                    e: 101,
                    f: 102,
                    l: 108,
                    n: 110,
                    r: 114,
                    s: 115,
                    t: 116,
                    u: 117,
                    openBrace: 123,
                    closeBrace: 125,
                };
                function s(e) {
                    for (var t in r) e[t] = r[t];
                }
                Object.create ||
                    (Object.create = function (e) {
                        function t() {
                            this.__proto__ = e;
                        }
                        return (t.prototype = e), new t();
                    }),
                    Object.getPrototypeOf ||
                    (Object.getPrototypeOf = function (e) {
                        return e.__proto__;
                    }),
                    Object.keys ||
                    (Object.keys = function (e) {
                        var t = [];
                        for (var n in e) e.hasOwnProperty(n) && t.push(n);
                        return t;
                    });
                var c = /[\\"\n]/g;
                function f(t) {
                    if (!(this instanceof f)) return new f(t);
                    var n = this;
                    s(n),
                        (n.bufferCheckPosition = e.MAX_BUFFER_LENGTH),
                        (n.q = n.c = n.p = ""),
                        (n.opt = t || {}),
                        (n.closed = n.closedRoot = n.sawRoot = !1),
                        (n.tag = n.error = null),
                        (n.state = o.BEGIN),
                        (n.stack = []),
                        (n.position = n.column = 0),
                        (n.line = 1),
                        (n.slashed = !1),
                        (n.unicodeI = 0),
                        (n.unicodeS = null),
                        (n.depth = 0),
                        y(n, "onready");
                }
                f.prototype = {
                    end: function () {
                        $(this);
                    },
                    write: function t(n) {
                        var i = this;
                        if (this.error) throw this.error;
                        if (i.closed)
                            return b(
                                i,
                                "Cannot write after close. Assign an onready handler."
                            );
                        if (null === n) return $(i);
                        var a = 0,
                            s = n.charCodeAt(0),
                            f = i.p;
                        for (
                            e.DEBUG && console.log("write -> [" + n + "]");
                            s &&
                            ((f = s),
                                (i.c = s = n.charCodeAt(a++)),
                                f !== s ? (i.p = f) : (f = i.p),
                                s);

                        )
                            switch (
                            (e.DEBUG && console.log(a, s, e.STATE[i.state]),
                                i.position++,
                                s === u.lineFeed ? (i.line++, (i.column = 0)) : i.column++,
                                i.state)
                            ) {
                                case o.BEGIN:
                                    s === u.openBrace
                                        ? (i.state = o.OPEN_OBJECT)
                                        : s === u.openBracket
                                            ? (i.state = o.OPEN_ARRAY)
                                            : g(s) || b(i, "Non-whitespace before {[.");
                                    continue;
                                case o.OPEN_KEY:
                                case o.OPEN_OBJECT:
                                    if (g(s)) continue;
                                    if (i.state === o.OPEN_KEY) i.stack.push(o.CLOSE_KEY);
                                    else {
                                        if (s === u.closeBrace) {
                                            y(i, "onopenobject"),
                                                this.depth++,
                                                y(i, "oncloseobject"),
                                                this.depth--,
                                                (i.state = i.stack.pop() || o.VALUE);
                                            continue;
                                        }
                                        i.stack.push(o.CLOSE_OBJECT);
                                    }
                                    s === u.doubleQuote
                                        ? (i.state = o.STRING)
                                        : b(i, 'Malformed object key should start with "');
                                    continue;
                                case o.CLOSE_KEY:
                                case o.CLOSE_OBJECT:
                                    if (g(s)) continue;
                                    i.state,
                                        o.CLOSE_KEY,
                                        s === u.colon
                                            ? (i.state === o.CLOSE_OBJECT
                                                ? (i.stack.push(o.CLOSE_OBJECT),
                                                    d(i, "onopenobject"),
                                                    this.depth++)
                                                : d(i, "onkey"),
                                                (i.state = o.VALUE))
                                            : s === u.closeBrace
                                                ? (h(i, "oncloseobject"),
                                                    this.depth--,
                                                    (i.state = i.stack.pop() || o.VALUE))
                                                : s === u.comma
                                                    ? (i.state === o.CLOSE_OBJECT &&
                                                        i.stack.push(o.CLOSE_OBJECT),
                                                        d(i),
                                                        (i.state = o.OPEN_KEY))
                                                    : b(i, "Bad object");
                                    continue;
                                case o.OPEN_ARRAY:
                                case o.VALUE:
                                    if (g(s)) continue;
                                    if (i.state === o.OPEN_ARRAY) {
                                        if (
                                            (y(i, "onopenarray"),
                                                this.depth++,
                                                (i.state = o.VALUE),
                                                s === u.closeBracket)
                                        ) {
                                            y(i, "onclosearray"),
                                                this.depth--,
                                                (i.state = i.stack.pop() || o.VALUE);
                                            continue;
                                        }
                                        i.stack.push(o.CLOSE_ARRAY);
                                    }
                                    s === u.doubleQuote
                                        ? (i.state = o.STRING)
                                        : s === u.openBrace
                                            ? (i.state = o.OPEN_OBJECT)
                                            : s === u.openBracket
                                                ? (i.state = o.OPEN_ARRAY)
                                                : s === u.t
                                                    ? (i.state = o.TRUE)
                                                    : s === u.f
                                                        ? (i.state = o.FALSE)
                                                        : s === u.n
                                                            ? (i.state = o.NULL)
                                                            : s === u.minus
                                                                ? (i.numberNode += "-")
                                                                : u._0 <= s && s <= u._9
                                                                    ? ((i.numberNode += String.fromCharCode(s)),
                                                                        (i.state = o.NUMBER_DIGIT))
                                                                    : b(i, "Bad value");
                                    continue;
                                case o.CLOSE_ARRAY:
                                    if (s === u.comma)
                                        i.stack.push(o.CLOSE_ARRAY),
                                            d(i, "onvalue"),
                                            (i.state = o.VALUE);
                                    else if (s === u.closeBracket)
                                        h(i, "onclosearray"),
                                            this.depth--,
                                            (i.state = i.stack.pop() || o.VALUE);
                                    else {
                                        if (g(s)) continue;
                                        b(i, "Bad array");
                                    }
                                    continue;
                                case o.STRING:
                                    void 0 === i.textNode && (i.textNode = "");
                                    var l = a - 1,
                                        p = i.slashed,
                                        m = i.unicodeI;
                                    STRING_BIGLOOP: for (; ;) {
                                        for (
                                            e.DEBUG && console.log(a, s, e.STATE[i.state], p);
                                            m > 0;

                                        )
                                            if (
                                                ((i.unicodeS += String.fromCharCode(s)),
                                                    (s = n.charCodeAt(a++)),
                                                    i.position++,
                                                    4 === m
                                                        ? ((i.textNode += String.fromCharCode(
                                                            parseInt(i.unicodeS, 16)
                                                        )),
                                                            (m = 0),
                                                            (l = a - 1))
                                                        : m++,
                                                    !s)
                                            )
                                                break STRING_BIGLOOP;
                                        if (s === u.doubleQuote && !p) {
                                            (i.state = i.stack.pop() || o.VALUE),
                                                (i.textNode += n.substring(l, a - 1)),
                                                (i.position += a - 1 - l);
                                            break;
                                        }
                                        if (
                                            s === u.backslash &&
                                            !p &&
                                            ((p = !0),
                                                (i.textNode += n.substring(l, a - 1)),
                                                (i.position += a - 1 - l),
                                                (s = n.charCodeAt(a++)),
                                                i.position++,
                                                !s)
                                        )
                                            break;
                                        if (p) {
                                            if (
                                                ((p = !1),
                                                    s === u.n
                                                        ? (i.textNode += "\n")
                                                        : s === u.r
                                                            ? (i.textNode += "\r")
                                                            : s === u.t
                                                                ? (i.textNode += "	")
                                                                : s === u.f
                                                                    ? (i.textNode += "\f")
                                                                    : s === u.b
                                                                        ? (i.textNode += "\b")
                                                                        : s === u.u
                                                                            ? ((m = 1), (i.unicodeS = ""))
                                                                            : (i.textNode += String.fromCharCode(s)),
                                                    (s = n.charCodeAt(a++)),
                                                    i.position++,
                                                    (l = a - 1),
                                                    s)
                                            )
                                                continue;
                                            break;
                                        }
                                        c.lastIndex = a;
                                        var w = c.exec(n);
                                        if (null === w) {
                                            (a = n.length + 1),
                                                (i.textNode += n.substring(l, a - 1)),
                                                (i.position += a - 1 - l);
                                            break;
                                        }
                                        if (((a = w.index + 1), !(s = n.charCodeAt(w.index)))) {
                                            (i.textNode += n.substring(l, a - 1)),
                                                (i.position += a - 1 - l);
                                            break;
                                        }
                                    }
                                    (i.slashed = p), (i.unicodeI = m);
                                    continue;
                                case o.TRUE:
                                    s === u.r
                                        ? (i.state = o.TRUE2)
                                        : b(i, "Invalid true started with t" + s);
                                    continue;
                                case o.TRUE2:
                                    s === u.u
                                        ? (i.state = o.TRUE3)
                                        : b(i, "Invalid true started with tr" + s);
                                    continue;
                                case o.TRUE3:
                                    s === u.e
                                        ? (y(i, "onvalue", !0),
                                            (i.state = i.stack.pop() || o.VALUE))
                                        : b(i, "Invalid true started with tru" + s);
                                    continue;
                                case o.FALSE:
                                    s === u.a
                                        ? (i.state = o.FALSE2)
                                        : b(i, "Invalid false started with f" + s);
                                    continue;
                                case o.FALSE2:
                                    s === u.l
                                        ? (i.state = o.FALSE3)
                                        : b(i, "Invalid false started with fa" + s);
                                    continue;
                                case o.FALSE3:
                                    s === u.s
                                        ? (i.state = o.FALSE4)
                                        : b(i, "Invalid false started with fal" + s);
                                    continue;
                                case o.FALSE4:
                                    s === u.e
                                        ? (y(i, "onvalue", !1),
                                            (i.state = i.stack.pop() || o.VALUE))
                                        : b(i, "Invalid false started with fals" + s);
                                    continue;
                                case o.NULL:
                                    s === u.u
                                        ? (i.state = o.NULL2)
                                        : b(i, "Invalid null started with n" + s);
                                    continue;
                                case o.NULL2:
                                    s === u.l
                                        ? (i.state = o.NULL3)
                                        : b(i, "Invalid null started with nu" + s);
                                    continue;
                                case o.NULL3:
                                    s === u.l
                                        ? (y(i, "onvalue", null),
                                            (i.state = i.stack.pop() || o.VALUE))
                                        : b(i, "Invalid null started with nul" + s);
                                    continue;
                                case o.NUMBER_DECIMAL_POINT:
                                    s === u.period
                                        ? ((i.numberNode += "."), (i.state = o.NUMBER_DIGIT))
                                        : b(i, "Leading zero not followed by .");
                                    continue;
                                case o.NUMBER_DIGIT:
                                    u._0 <= s && s <= u._9
                                        ? (i.numberNode += String.fromCharCode(s))
                                        : s === u.period
                                            ? (-1 !== i.numberNode.indexOf(".") &&
                                                b(i, "Invalid number has two dots"),
                                                (i.numberNode += "."))
                                            : s === u.e || s === u.E
                                                ? ((-1 !== i.numberNode.indexOf("e") ||
                                                    -1 !== i.numberNode.indexOf("E")) &&
                                                    b(i, "Invalid number has two exponential"),
                                                    (i.numberNode += "e"))
                                                : s === u.plus || s === u.minus
                                                    ? (f === u.e ||
                                                        f === u.E ||
                                                        b(i, "Invalid symbol in number"),
                                                        (i.numberNode += String.fromCharCode(s)))
                                                    : (v(i), a--, (i.state = i.stack.pop() || o.VALUE));
                                    continue;
                                default:
                                    b(i, "Unknown state: " + i.state);
                            }
                        return (
                            i.position >= i.bufferCheckPosition &&
                            (function t(n) {
                                var i = Math.max(e.MAX_BUFFER_LENGTH, 10),
                                    o = 0;
                                for (var a in r) {
                                    var u = void 0 === n[a] ? 0 : n[a].length;
                                    u > i &&
                                        ("text" === a
                                            ? closeText(n)
                                            : b(n, "Max buffer length exceeded: " + a)),
                                        (o = Math.max(o, u));
                                }
                                n.bufferCheckPosition = e.MAX_BUFFER_LENGTH - o + n.position;
                            })(i),
                            i
                        );
                    },
                    resume: function () {
                        return (this.error = null), this;
                    },
                    close: function () {
                        return this.write(null);
                    },
                };
                try {
                    n = E.Stream;
                } catch (l) {
                    n = function () { };
                }
                function p(e) {
                    if (!(this instanceof p)) return new p(e);
                    (this._parser = new f(e)),
                        (this.writable = !0),
                        (this.readable = !0),
                        (this.bytes_remaining = 0),
                        (this.bytes_in_sequence = 0),
                        (this.temp_buffs = {
                            2: new Buffer(2),
                            3: new Buffer(3),
                            4: new Buffer(4),
                        }),
                        (this.string = "");
                    var t = this;
                    n.apply(t),
                        (this._parser.onend = function () {
                            t.emit("end");
                        }),
                        (this._parser.onerror = function (e) {
                            t.emit("error", e), (t._parser.error = null);
                        }),
                        i.forEach(function (e) {
                            Object.defineProperty(t, "on" + e, {
                                get: function () {
                                    return t._parser["on" + e];
                                },
                                set: function (n) {
                                    if (!n)
                                        return (
                                            t.removeAllListeners(e), (t._parser["on" + e] = n), n
                                        );
                                    t.on(e, n);
                                },
                                enumerable: !0,
                                configurable: !1,
                            });
                        });
                }
                function y(t, n, r) {
                    e.INFO && console.log("-- emit", n, r), t[n] && t[n](r);
                }
                function h(e, t, n) {
                    d(e), y(e, t, n);
                }
                function d(e, t) {
                    var n, r;
                    (e.textNode =
                        ((n = e.opt),
                            (r = e.textNode),
                            void 0 === r ||
                            (n.trim && (r = r.trim()),
                                n.normalize && (r = r.replace(/\s+/g, " "))),
                            r)),
                        void 0 !== e.textNode && y(e, t || "onvalue", e.textNode),
                        (e.textNode = void 0);
                }
                function v(e) {
                    e.numberNode && y(e, "onvalue", parseFloat(e.numberNode)),
                        (e.numberNode = "");
                }
                function b(e, t) {
                    return (
                        d(e),
                        (t +=
                            "\nLine: " + e.line + "\nColumn: " + e.column + "\nChar: " + e.c),
                        (t = Error(t)),
                        (e.error = t),
                        y(e, "onerror", t),
                        e
                    );
                }
                function $(e) {
                    return (
                        (e.state !== o.VALUE || 0 !== e.depth) && b(e, "Unexpected end"),
                        d(e),
                        (e.c = ""),
                        (e.closed = !0),
                        y(e, "onend"),
                        f.call(e, e.opt),
                        e
                    );
                }
                function g(e) {
                    return (
                        e === u.carriageReturn ||
                        e === u.lineFeed ||
                        e === u.space ||
                        e === u.tab
                    );
                }
                (p.prototype = Object.create(n.prototype, {
                    constructor: { value: p },
                })),
                    (p.prototype.write = function (e) {
                        e = new Buffer(e);
                        for (var t = 0; t < e.length; t++) {
                            var n = e[t];
                            if (this.bytes_remaining > 0) {
                                for (var r = 0; r < this.bytes_remaining; r++)
                                    this.temp_buffs[this.bytes_in_sequence][
                                        this.bytes_in_sequence - this.bytes_remaining + r
                                    ] = e[r];
                                (this.string =
                                    this.temp_buffs[this.bytes_in_sequence].toString()),
                                    (this.bytes_in_sequence = this.bytes_remaining = 0),
                                    (t = t + r - 1),
                                    this._parser.write(this.string),
                                    this.emit("data", this.string);
                                continue;
                            }
                            if (0 === this.bytes_remaining && n >= 128) {
                                if (
                                    (n >= 194 && n <= 223 && (this.bytes_in_sequence = 2),
                                        n >= 224 && n <= 239 && (this.bytes_in_sequence = 3),
                                        n >= 240 && n <= 244 && (this.bytes_in_sequence = 4),
                                        this.bytes_in_sequence + t > e.length)
                                ) {
                                    for (var i = 0; i <= e.length - 1 - t; i++)
                                        this.temp_buffs[this.bytes_in_sequence][i] = e[t + i];
                                    return (
                                        (this.bytes_remaining =
                                            t + this.bytes_in_sequence - e.length),
                                        !0
                                    );
                                }
                                (this.string = e
                                    .slice(t, t + this.bytes_in_sequence)
                                    .toString()),
                                    (t = t + this.bytes_in_sequence - 1),
                                    this._parser.write(this.string),
                                    this.emit("data", this.string);
                                continue;
                            }
                            for (var o = t; o < e.length && !(e[o] >= 128); o++);
                            (this.string = e.slice(t, o).toString()),
                                this._parser.write(this.string),
                                this.emit("data", this.string),
                                (t = o - 1);
                        }
                    }),
                    (p.prototype.end = function (e) {
                        return (
                            e && e.length && this._parser.write(e.toString()),
                            this._parser.end(),
                            !0
                        );
                    }),
                    (p.prototype.on = function (e, t) {
                        var r = this;
                        return (
                            r._parser["on" + e] ||
                            -1 === i.indexOf(e) ||
                            (r._parser["on" + e] = function () {
                                var t =
                                    1 === arguments.length
                                        ? [arguments[0]]
                                        : Array.apply(null, arguments);
                                t.splice(0, 0, e), r.emit.apply(r, t);
                            }),
                            n.prototype.on.call(r, e, t)
                        );
                    }),
                    (p.prototype.destroy = function () {
                        s(this._parser), this.emit("close");
                    });
            })(t);
        });
    function A(e) {
        var t,
            n,
            r,
            s,
            c,
            f,
            l,
            p,
            y,
            h = 0,
            d =
                ((t = !0),
                    (c = T.parser()),
                    (f = 0),
                    (l = []),
                    (p = !1),
                    (y = !1),
                    (c.onopenobject = function (e) {
                        var i = {};
                        (i.incomplete = !0),
                            n || (n = i),
                            r && (l.push([s, r, y]), t && (y ? r.push(i) : (r[s] = i))),
                            (r = i),
                            (s = e),
                            (y = !1),
                            ++f;
                    }),
                    (c.onkey = function (e) {
                        return (s = e);
                    }),
                    (c.onvalue = function (e) {
                        return y ? r.push(e) : (r[s] = e);
                    }),
                    (c.oncloseobject = function () {
                        var e;
                        if ((delete r.incomplete, (s = null), 0 == --f)) p = !0;
                        else {
                            var n = r;
                            (s = (e = l.pop())[0]),
                                (r = e[1]),
                                (y = e[2]),
                                t || (y ? r.push(n) : (r[s] = n));
                        }
                    }),
                    (c.onopenarray = function () {
                        var e = [];
                        (e.incomplete = !0),
                            n || (n = e),
                            r && (l.push([s, r, y]), t && (y ? r.push(e) : (r[s] = e))),
                            (r = e),
                            (y = !0),
                            (s = null),
                            ++f;
                    }),
                    (c.onclosearray = function () {
                        var e;
                        if ((delete r.incomplete, (s = null), 0 == --f)) p = !0;
                        else {
                            var n = r;
                            (s = (e = l.pop())[0]),
                                (r = e[1]),
                                (y = e[2]),
                                t || (y ? r.push(n) : (r[s] = n));
                        }
                    }),
                {
                    write: function (e) {
                        return c.write(e), n;
                    },
                    done: function () {
                        return p;
                    },
                }),
            v = {
                pullAsync: function (t) {
                    return i(this, void 0, void 0, function () {
                        var n, r, i;
                        return o(this, function (o) {
                            switch (o.label) {
                                case 0:
                                    return (n = e.slice(h, h + t)), (h += t), [4, a(n, "text")];
                                case 1:
                                    return (
                                        (r = o.sent()),
                                        (i = d.write(r)),
                                        (v.result = i || {}),
                                        [2, i]
                                    );
                            }
                        });
                    });
                },
                pullSync: function (t) {
                    var n = e.slice(h, h + t);
                    h += t;
                    var r = u(n, "text"),
                        i = d.write(r);
                    return (v.result = i || {}), i;
                },
                done: function () {
                    return d.done();
                },
                eof: function () {
                    return h >= e.size;
                },
                result: {},
            };
        return v;
    }
    function N(e, t) {
        return i(this, void 0, void 0, function () {
            var n, i, a, u;
            return o(this, function (o) {
                switch (o.label) {
                    case 0:
                        return [4, x(e, (n = (t = t || {}).chunkSizeBytes || 1048576))];
                    case 1:
                        return (
                            (a = (i = o.sent()).result.data),
                            (u = new r.default(a.databaseName))
                                .version(a.databaseVersion)
                                .stores(
                                    (function e(t) {
                                        for (var n = {}, r = 0, i = t.tables; r < i.length; r++) {
                                            var o = i[r];
                                            n[o.name] = o.schema;
                                        }
                                        return n;
                                    })(a)
                                ),
                            [4, S(u, i, t)]
                        );
                    case 2:
                        return o.sent(), [2, u];
                }
            });
        });
    }
    function S(e, t, n) {
        return i(this, void 0, void 0, function () {
            var a, u, s, c, f, l, p, y, h, d;
            function v() {
                return i(this, void 0, void 0, function () {
                    var t, i, s, y, h;
                    return o(this, function (d) {
                        switch (d.label) {
                            case 0:
                                (t = function (t) {
                                    var i, a, u, s, c, y, h, d, v, b, $, m;
                                    return o(this, function (o) {
                                        switch (o.label) {
                                            case 0:
                                                if (!t.rows) return [2, "break"];
                                                if (!t.rows.incomplete && 0 === t.rows.length)
                                                    return [2, "continue"];
                                                if (
                                                    (l &&
                                                        r.default.ignoreTransaction(function () {
                                                            return l(p);
                                                        }),
                                                        (i = t.tableName),
                                                        (a = e.table(i)),
                                                        (u = f.tables.filter(function (e) {
                                                            return e.name === i;
                                                        })[0].schema),
                                                        !a)
                                                ) {
                                                    if (n.acceptMissingTables) return [2, "continue"];
                                                    throw Error(
                                                        "Exported table ".concat(
                                                            t.tableName,
                                                            " is missing in installed database"
                                                        )
                                                    );
                                                }
                                                if (
                                                    !n.acceptChangedPrimaryKey &&
                                                    u.split(",")[0] != a.schema.primKey.src
                                                )
                                                    throw Error(
                                                        "Primary key differs for table ".concat(
                                                            t.tableName,
                                                            ". "
                                                        )
                                                    );
                                                for (
                                                    y = 0, s = t.rows, c = [];
                                                    y < s.length && !(h = s[y]).incomplete;
                                                    y++
                                                )
                                                    c.push(g.revive(h));
                                                if (
                                                    ((v = (d = n.filter)
                                                        ? t.inbound
                                                            ? c.filter(function (e) {
                                                                return d(i, e);
                                                            })
                                                            : c.filter(function (e) {
                                                                var t = e[0];
                                                                return d(i, e[1], t);
                                                            })
                                                        : c),
                                                        ($ = (b = t.inbound
                                                            ? [void 0, v]
                                                            : [
                                                                v.map(function (e) {
                                                                    return e[0];
                                                                }),
                                                                c.map(function (e) {
                                                                    return e[1];
                                                                }),
                                                            ])[0]),
                                                        (m = b[1]),
                                                        !n.overwriteValues)
                                                )
                                                    return [3, 2];
                                                return [4, a.bulkPut(m, $)];
                                            case 1:
                                                return o.sent(), [3, 4];
                                            case 2:
                                                return [4, a.bulkAdd(m, $)];
                                            case 3:
                                                o.sent(), (o.label = 4);
                                            case 4:
                                                return (
                                                    (p.completedRows += c.length),
                                                    c.incomplete || (p.completedTables += 1),
                                                    s.splice(0, c.length),
                                                    [2]
                                                );
                                        }
                                    });
                                }),
                                    (i = 0),
                                    (s = f.data),
                                    (d.label = 1);
                            case 1:
                                if (!(i < s.length)) return [3, 4];
                                return [5, t((y = s[i]))];
                            case 2:
                                if ("break" === (h = d.sent())) return [3, 4];
                                d.label = 3;
                            case 3:
                                return i++, [3, 1];
                            case 4:
                                for (
                                    ;
                                    f.data.length > 0 &&
                                    f.data[0].rows &&
                                    !f.data[0].rows.incomplete;

                                )
                                    f.data.splice(0, 1);
                                if (!(!u.done() && !u.eof())) return [3, 8];
                                if (!c) return [3, 5];
                                return u.pullSync(a), [3, 7];
                            case 5:
                                return [4, r.default.waitFor(u.pullAsync(a))];
                            case 6:
                                d.sent(), (d.label = 7);
                            case 7:
                                return [3, 9];
                            case 8:
                                return [3, 10];
                            case 9:
                                return [3, 0];
                            case 10:
                                return [2];
                        }
                    });
                });
            }
            return o(this, function (i) {
                switch (i.label) {
                    case 0:
                        return [4, x(t, (a = (n = n || {}).chunkSizeBytes || 1048576))];
                    case 1:
                        if (
                            ((s = (u = i.sent()).result),
                                (c = "FileReaderSync" in self),
                                (f = s.data),
                                !n.acceptNameDiff && e.name !== f.databaseName)
                        )
                            throw Error(
                                "Name differs. Current database name is "
                                    .concat(e.name, " but export is ")
                                    .concat(f.databaseName)
                            );
                        if (!n.acceptVersionDiff && e.verno !== f.databaseVersion)
                            throw Error(
                                "Database version differs. Current database is in version "
                                    .concat(e.verno, " but export is ")
                                    .concat(f.databaseVersion)
                            );
                        if (
                            ((l = n.progressCallback),
                                (p = {
                                    done: !1,
                                    completedRows: 0,
                                    completedTables: 0,
                                    totalRows: f.tables.reduce(function (e, t) {
                                        return e + t.rowCount;
                                    }, 0),
                                    totalTables: f.tables.length,
                                }),
                                l &&
                                r.default.ignoreTransaction(function () {
                                    return l(p);
                                }),
                                !n.clearTablesBeforeImport)
                        )
                            return [3, 5];
                        (y = 0), (h = e.tables), (i.label = 2);
                    case 2:
                        if (!(y < h.length)) return [3, 5];
                        return [4, (d = h[y]).clear()];
                    case 3:
                        i.sent(), (i.label = 4);
                    case 4:
                        return y++, [3, 2];
                    case 5:
                        if (!n.noTransaction) return [3, 7];
                        return [4, v()];
                    case 6:
                        return i.sent(), [3, 9];
                    case 7:
                        return [4, e.transaction("rw", e.tables, v)];
                    case 8:
                        i.sent(), (i.label = 9);
                    case 9:
                        return (
                            (p.done = !0),
                            l &&
                            r.default.ignoreTransaction(function () {
                                return l(p);
                            }),
                            [2]
                        );
                }
            });
        });
    }
    function x(e, t) {
        return i(this, void 0, void 0, function () {
            var n, r;
            return o(this, function (i) {
                switch (i.label) {
                    case 0:
                        (n = "slice" in e ? A(e) : e), (i.label = 1);
                    case 1:
                        if (n.eof()) return [3, 3];
                        return [4, n.pullAsync(t)];
                    case 2:
                        if ((i.sent(), n.result.data && n.result.data.data)) return [3, 3];
                        return [3, 1];
                    case 3:
                        if (!(r = n.result) || "dexie" != r.formatName)
                            throw Error("Given file is not a dexie export");
                        if (r.formatVersion > 1)
                            throw Error(
                                "Format version ".concat(r.formatVersion, " not supported")
                            );
                        if (!r.data) throw Error("No data in export file");
                        if (!r.data.databaseName)
                            throw Error("Missing databaseName in export file");
                        if (!r.data.databaseVersion)
                            throw Error("Missing databaseVersion in export file");
                        if (!r.data.tables) throw Error("Missing tables in export file");
                        return [2, n];
                }
            });
        });
    }
    (r.default.prototype.export = function (e) {
        return O(this, e);
    }),
        (r.default.prototype.import = function (e, t) {
            return S(this, e, t);
        }),
        (r.default.import = function (e, t) {
            return N(e, t);
        });
    var k = function () {
        throw Error(
            "This addon extends Dexie.prototype globally and does not have be included in Dexie constructor's addons options."
        );
    };
    (e.default = k),
        (e.exportDB = O),
        (e.importDB = N),
        (e.importInto = S),
        (e.peakImportFile = function e(t) {
            return i(this, void 0, void 0, function () {
                var e;
                return o(this, function (n) {
                    switch (n.label) {
                        case 0:
                            (e = A(t)), (n.label = 1);
                        case 1:
                            if (e.eof()) return [3, 3];
                            return [4, e.pullAsync(5120)];
                        case 2:
                            if ((n.sent(), e.result.data && e.result.data.data))
                                return delete e.result.data.data, [3, 3];
                            return [3, 1];
                        case 3:
                            return [2, e.result];
                    }
                });
            });
        }),
        Object.defineProperty(e, "__esModule", { value: !0 });
});
