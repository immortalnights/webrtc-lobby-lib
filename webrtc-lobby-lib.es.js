var Mn = Object.defineProperty;
var Wn = (n, r, a) => r in n ? Mn(n, r, { enumerable: !0, configurable: !0, writable: !0, value: a }) : n[r] = a;
var re = (n, r, a) => (Wn(n, typeof r != "symbol" ? r + "" : r, a), a);
import nn, { createContext as ye, useSyncExternalStore as tn, useCallback as w, useMemo as pe, useEffect as X, useContext as me, useState as H } from "react";
var Pe = { exports: {} }, oe = {};
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Qe;
function $n() {
  if (Qe)
    return oe;
  Qe = 1;
  var n = nn, r = Symbol.for("react.element"), a = Symbol.for("react.fragment"), s = Object.prototype.hasOwnProperty, y = n.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner, C = { key: !0, ref: !0, __self: !0, __source: !0 };
  function c(b, p, _) {
    var i, l = {}, u = null, d = null;
    _ !== void 0 && (u = "" + _), p.key !== void 0 && (u = "" + p.key), p.ref !== void 0 && (d = p.ref);
    for (i in p)
      s.call(p, i) && !C.hasOwnProperty(i) && (l[i] = p[i]);
    if (b && b.defaultProps)
      for (i in p = b.defaultProps, p)
        l[i] === void 0 && (l[i] = p[i]);
    return { $$typeof: r, type: b, key: u, ref: d, props: l, _owner: y.current };
  }
  return oe.Fragment = a, oe.jsx = c, oe.jsxs = c, oe;
}
var se = {};
/**
 * @license React
 * react-jsx-runtime.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var en;
function Fn() {
  return en || (en = 1, process.env.NODE_ENV !== "production" && function() {
    var n = nn, r = Symbol.for("react.element"), a = Symbol.for("react.portal"), s = Symbol.for("react.fragment"), y = Symbol.for("react.strict_mode"), C = Symbol.for("react.profiler"), c = Symbol.for("react.provider"), b = Symbol.for("react.context"), p = Symbol.for("react.forward_ref"), _ = Symbol.for("react.suspense"), i = Symbol.for("react.suspense_list"), l = Symbol.for("react.memo"), u = Symbol.for("react.lazy"), d = Symbol.for("react.offscreen"), E = Symbol.iterator, x = "@@iterator";
    function k(e) {
      if (e === null || typeof e != "object")
        return null;
      var t = E && e[E] || e[x];
      return typeof t == "function" ? t : null;
    }
    var h = n.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
    function f(e) {
      {
        for (var t = arguments.length, o = new Array(t > 1 ? t - 1 : 0), v = 1; v < t; v++)
          o[v - 1] = arguments[v];
        L("error", e, o);
      }
    }
    function L(e, t, o) {
      {
        var v = h.ReactDebugCurrentFrame, S = v.getStackAddendum();
        S !== "" && (t += "%s", o = o.concat([S]));
        var j = o.map(function(R) {
          return String(R);
        });
        j.unshift("Warning: " + t), Function.prototype.apply.call(console[e], console, j);
      }
    }
    var $ = !1, J = !1, Q = !1, B = !1, z = !1, ee;
    ee = Symbol.for("react.module.reference");
    function O(e) {
      return !!(typeof e == "string" || typeof e == "function" || e === s || e === C || z || e === y || e === _ || e === i || B || e === d || $ || J || Q || typeof e == "object" && e !== null && (e.$$typeof === u || e.$$typeof === l || e.$$typeof === c || e.$$typeof === b || e.$$typeof === p || // This needs to include all possible module reference object
      // types supported by any Flight configuration anywhere since
      // we don't know which Flight build this will end up being used
      // with.
      e.$$typeof === ee || e.getModuleId !== void 0));
    }
    function T(e, t, o) {
      var v = e.displayName;
      if (v)
        return v;
      var S = t.displayName || t.name || "";
      return S !== "" ? o + "(" + S + ")" : o;
    }
    function N(e) {
      return e.displayName || "Context";
    }
    function F(e) {
      if (e == null)
        return null;
      if (typeof e.tag == "number" && f("Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."), typeof e == "function")
        return e.displayName || e.name || null;
      if (typeof e == "string")
        return e;
      switch (e) {
        case s:
          return "Fragment";
        case a:
          return "Portal";
        case C:
          return "Profiler";
        case y:
          return "StrictMode";
        case _:
          return "Suspense";
        case i:
          return "SuspenseList";
      }
      if (typeof e == "object")
        switch (e.$$typeof) {
          case b:
            var t = e;
            return N(t) + ".Consumer";
          case c:
            var o = e;
            return N(o._context) + ".Provider";
          case p:
            return T(e, e.render, "ForwardRef");
          case l:
            var v = e.displayName || null;
            return v !== null ? v : F(e.type) || "Memo";
          case u: {
            var S = e, j = S._payload, R = S._init;
            try {
              return F(R(j));
            } catch {
              return null;
            }
          }
        }
      return null;
    }
    var G = Object.assign, ne = 0, Oe, De, Le, Me, We, $e, Fe;
    function Ae() {
    }
    Ae.__reactDisabledLog = !0;
    function ln() {
      {
        if (ne === 0) {
          Oe = console.log, De = console.info, Le = console.warn, Me = console.error, We = console.group, $e = console.groupCollapsed, Fe = console.groupEnd;
          var e = {
            configurable: !0,
            enumerable: !0,
            value: Ae,
            writable: !0
          };
          Object.defineProperties(console, {
            info: e,
            log: e,
            warn: e,
            error: e,
            group: e,
            groupCollapsed: e,
            groupEnd: e
          });
        }
        ne++;
      }
    }
    function dn() {
      {
        if (ne--, ne === 0) {
          var e = {
            configurable: !0,
            enumerable: !0,
            writable: !0
          };
          Object.defineProperties(console, {
            log: G({}, e, {
              value: Oe
            }),
            info: G({}, e, {
              value: De
            }),
            warn: G({}, e, {
              value: Le
            }),
            error: G({}, e, {
              value: Me
            }),
            group: G({}, e, {
              value: We
            }),
            groupCollapsed: G({}, e, {
              value: $e
            }),
            groupEnd: G({}, e, {
              value: Fe
            })
          });
        }
        ne < 0 && f("disabledDepth fell below zero. This is a bug in React. Please file an issue.");
      }
    }
    var ge = h.ReactCurrentDispatcher, Ce;
    function ie(e, t, o) {
      {
        if (Ce === void 0)
          try {
            throw Error();
          } catch (S) {
            var v = S.stack.trim().match(/\n( *(at )?)/);
            Ce = v && v[1] || "";
          }
        return `
` + Ce + e;
      }
    }
    var Re = !1, ce;
    {
      var un = typeof WeakMap == "function" ? WeakMap : Map;
      ce = new un();
    }
    function Ie(e, t) {
      if (!e || Re)
        return "";
      {
        var o = ce.get(e);
        if (o !== void 0)
          return o;
      }
      var v;
      Re = !0;
      var S = Error.prepareStackTrace;
      Error.prepareStackTrace = void 0;
      var j;
      j = ge.current, ge.current = null, ln();
      try {
        if (t) {
          var R = function() {
            throw Error();
          };
          if (Object.defineProperty(R.prototype, "props", {
            set: function() {
              throw Error();
            }
          }), typeof Reflect == "object" && Reflect.construct) {
            try {
              Reflect.construct(R, []);
            } catch (V) {
              v = V;
            }
            Reflect.construct(e, [], R);
          } else {
            try {
              R.call();
            } catch (V) {
              v = V;
            }
            e.call(R.prototype);
          }
        } else {
          try {
            throw Error();
          } catch (V) {
            v = V;
          }
          e();
        }
      } catch (V) {
        if (V && v && typeof V.stack == "string") {
          for (var g = V.stack.split(`
`), I = v.stack.split(`
`), D = g.length - 1, M = I.length - 1; D >= 1 && M >= 0 && g[D] !== I[M]; )
            M--;
          for (; D >= 1 && M >= 0; D--, M--)
            if (g[D] !== I[M]) {
              if (D !== 1 || M !== 1)
                do
                  if (D--, M--, M < 0 || g[D] !== I[M]) {
                    var Y = `
` + g[D].replace(" at new ", " at ");
                    return e.displayName && Y.includes("<anonymous>") && (Y = Y.replace("<anonymous>", e.displayName)), typeof e == "function" && ce.set(e, Y), Y;
                  }
                while (D >= 1 && M >= 0);
              break;
            }
        }
      } finally {
        Re = !1, ge.current = j, dn(), Error.prepareStackTrace = S;
      }
      var K = e ? e.displayName || e.name : "", Ze = K ? ie(K) : "";
      return typeof e == "function" && ce.set(e, Ze), Ze;
    }
    function fn(e, t, o) {
      return Ie(e, !1);
    }
    function vn(e) {
      var t = e.prototype;
      return !!(t && t.isReactComponent);
    }
    function le(e, t, o) {
      if (e == null)
        return "";
      if (typeof e == "function")
        return Ie(e, vn(e));
      if (typeof e == "string")
        return ie(e);
      switch (e) {
        case _:
          return ie("Suspense");
        case i:
          return ie("SuspenseList");
      }
      if (typeof e == "object")
        switch (e.$$typeof) {
          case p:
            return fn(e.render);
          case l:
            return le(e.type, t, o);
          case u: {
            var v = e, S = v._payload, j = v._init;
            try {
              return le(j(S), t, o);
            } catch {
            }
          }
        }
      return "";
    }
    var de = Object.prototype.hasOwnProperty, Ne = {}, Ge = h.ReactDebugCurrentFrame;
    function ue(e) {
      if (e) {
        var t = e._owner, o = le(e.type, e._source, t ? t.type : null);
        Ge.setExtraStackFrame(o);
      } else
        Ge.setExtraStackFrame(null);
    }
    function bn(e, t, o, v, S) {
      {
        var j = Function.call.bind(de);
        for (var R in e)
          if (j(e, R)) {
            var g = void 0;
            try {
              if (typeof e[R] != "function") {
                var I = Error((v || "React class") + ": " + o + " type `" + R + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof e[R] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.");
                throw I.name = "Invariant Violation", I;
              }
              g = e[R](t, R, v, o, null, "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED");
            } catch (D) {
              g = D;
            }
            g && !(g instanceof Error) && (ue(S), f("%s: type specification of %s `%s` is invalid; the type checker function must return `null` or an `Error` but returned a %s. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).", v || "React class", o, R, typeof g), ue(null)), g instanceof Error && !(g.message in Ne) && (Ne[g.message] = !0, ue(S), f("Failed %s type: %s", o, g.message), ue(null));
          }
      }
    }
    var hn = Array.isArray;
    function Ee(e) {
      return hn(e);
    }
    function yn(e) {
      {
        var t = typeof Symbol == "function" && Symbol.toStringTag, o = t && e[Symbol.toStringTag] || e.constructor.name || "Object";
        return o;
      }
    }
    function pn(e) {
      try {
        return Ye(e), !1;
      } catch {
        return !0;
      }
    }
    function Ye(e) {
      return "" + e;
    }
    function Ue(e) {
      if (pn(e))
        return f("The provided key is an unsupported type %s. This value must be coerced to a string before before using it here.", yn(e)), Ye(e);
    }
    var te = h.ReactCurrentOwner, mn = {
      key: !0,
      ref: !0,
      __self: !0,
      __source: !0
    }, Ve, He, we;
    we = {};
    function gn(e) {
      if (de.call(e, "ref")) {
        var t = Object.getOwnPropertyDescriptor(e, "ref").get;
        if (t && t.isReactWarning)
          return !1;
      }
      return e.ref !== void 0;
    }
    function Cn(e) {
      if (de.call(e, "key")) {
        var t = Object.getOwnPropertyDescriptor(e, "key").get;
        if (t && t.isReactWarning)
          return !1;
      }
      return e.key !== void 0;
    }
    function Rn(e, t) {
      if (typeof e.ref == "string" && te.current && t && te.current.stateNode !== t) {
        var o = F(te.current.type);
        we[o] || (f('Component "%s" contains the string ref "%s". Support for string refs will be removed in a future major release. This case cannot be automatically converted to an arrow function. We ask you to manually fix this case by using useRef() or createRef() instead. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-string-ref', F(te.current.type), e.ref), we[o] = !0);
      }
    }
    function En(e, t) {
      {
        var o = function() {
          Ve || (Ve = !0, f("%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", t));
        };
        o.isReactWarning = !0, Object.defineProperty(e, "key", {
          get: o,
          configurable: !0
        });
      }
    }
    function wn(e, t) {
      {
        var o = function() {
          He || (He = !0, f("%s: `ref` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", t));
        };
        o.isReactWarning = !0, Object.defineProperty(e, "ref", {
          get: o,
          configurable: !0
        });
      }
    }
    var Sn = function(e, t, o, v, S, j, R) {
      var g = {
        // This tag allows us to uniquely identify this as a React Element
        $$typeof: r,
        // Built-in properties that belong on the element
        type: e,
        key: t,
        ref: o,
        props: R,
        // Record the component responsible for creating this element.
        _owner: j
      };
      return g._store = {}, Object.defineProperty(g._store, "validated", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: !1
      }), Object.defineProperty(g, "_self", {
        configurable: !1,
        enumerable: !1,
        writable: !1,
        value: v
      }), Object.defineProperty(g, "_source", {
        configurable: !1,
        enumerable: !1,
        writable: !1,
        value: S
      }), Object.freeze && (Object.freeze(g.props), Object.freeze(g)), g;
    };
    function xn(e, t, o, v, S) {
      {
        var j, R = {}, g = null, I = null;
        o !== void 0 && (Ue(o), g = "" + o), Cn(t) && (Ue(t.key), g = "" + t.key), gn(t) && (I = t.ref, Rn(t, S));
        for (j in t)
          de.call(t, j) && !mn.hasOwnProperty(j) && (R[j] = t[j]);
        if (e && e.defaultProps) {
          var D = e.defaultProps;
          for (j in D)
            R[j] === void 0 && (R[j] = D[j]);
        }
        if (g || I) {
          var M = typeof e == "function" ? e.displayName || e.name || "Unknown" : e;
          g && En(R, M), I && wn(R, M);
        }
        return Sn(e, g, I, S, v, te.current, R);
      }
    }
    var Se = h.ReactCurrentOwner, Je = h.ReactDebugCurrentFrame;
    function q(e) {
      if (e) {
        var t = e._owner, o = le(e.type, e._source, t ? t.type : null);
        Je.setExtraStackFrame(o);
      } else
        Je.setExtraStackFrame(null);
    }
    var xe;
    xe = !1;
    function je(e) {
      return typeof e == "object" && e !== null && e.$$typeof === r;
    }
    function Be() {
      {
        if (Se.current) {
          var e = F(Se.current.type);
          if (e)
            return `

Check the render method of \`` + e + "`.";
        }
        return "";
      }
    }
    function jn(e) {
      return "";
    }
    var ze = {};
    function Pn(e) {
      {
        var t = Be();
        if (!t) {
          var o = typeof e == "string" ? e : e.displayName || e.name;
          o && (t = `

Check the top-level render call using <` + o + ">.");
        }
        return t;
      }
    }
    function qe(e, t) {
      {
        if (!e._store || e._store.validated || e.key != null)
          return;
        e._store.validated = !0;
        var o = Pn(t);
        if (ze[o])
          return;
        ze[o] = !0;
        var v = "";
        e && e._owner && e._owner !== Se.current && (v = " It was passed a child from " + F(e._owner.type) + "."), q(e), f('Each child in a list should have a unique "key" prop.%s%s See https://reactjs.org/link/warning-keys for more information.', o, v), q(null);
      }
    }
    function Ke(e, t) {
      {
        if (typeof e != "object")
          return;
        if (Ee(e))
          for (var o = 0; o < e.length; o++) {
            var v = e[o];
            je(v) && qe(v, t);
          }
        else if (je(e))
          e._store && (e._store.validated = !0);
        else if (e) {
          var S = k(e);
          if (typeof S == "function" && S !== e.entries)
            for (var j = S.call(e), R; !(R = j.next()).done; )
              je(R.value) && qe(R.value, t);
        }
      }
    }
    function _n(e) {
      {
        var t = e.type;
        if (t == null || typeof t == "string")
          return;
        var o;
        if (typeof t == "function")
          o = t.propTypes;
        else if (typeof t == "object" && (t.$$typeof === p || // Note: Memo only checks outer props here.
        // Inner props are checked in the reconciler.
        t.$$typeof === l))
          o = t.propTypes;
        else
          return;
        if (o) {
          var v = F(t);
          bn(o, e.props, "prop", v, e);
        } else if (t.PropTypes !== void 0 && !xe) {
          xe = !0;
          var S = F(t);
          f("Component %s declared `PropTypes` instead of `propTypes`. Did you misspell the property assignment?", S || "Unknown");
        }
        typeof t.getDefaultProps == "function" && !t.getDefaultProps.isReactClassApproved && f("getDefaultProps is only used on classic React.createClass definitions. Use a static property named `defaultProps` instead.");
      }
    }
    function kn(e) {
      {
        for (var t = Object.keys(e.props), o = 0; o < t.length; o++) {
          var v = t[o];
          if (v !== "children" && v !== "key") {
            q(e), f("Invalid prop `%s` supplied to `React.Fragment`. React.Fragment can only have `key` and `children` props.", v), q(null);
            break;
          }
        }
        e.ref !== null && (q(e), f("Invalid attribute `ref` supplied to `React.Fragment`."), q(null));
      }
    }
    function Xe(e, t, o, v, S, j) {
      {
        var R = O(e);
        if (!R) {
          var g = "";
          (e === void 0 || typeof e == "object" && e !== null && Object.keys(e).length === 0) && (g += " You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports.");
          var I = jn();
          I ? g += I : g += Be();
          var D;
          e === null ? D = "null" : Ee(e) ? D = "array" : e !== void 0 && e.$$typeof === r ? (D = "<" + (F(e.type) || "Unknown") + " />", g = " Did you accidentally export a JSX literal instead of a component?") : D = typeof e, f("React.jsx: type is invalid -- expected a string (for built-in components) or a class/function (for composite components) but got: %s.%s", D, g);
        }
        var M = xn(e, t, o, S, j);
        if (M == null)
          return M;
        if (R) {
          var Y = t.children;
          if (Y !== void 0)
            if (v)
              if (Ee(Y)) {
                for (var K = 0; K < Y.length; K++)
                  Ke(Y[K], e);
                Object.freeze && Object.freeze(Y);
              } else
                f("React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead.");
            else
              Ke(Y, e);
        }
        return e === s ? kn(M) : _n(M), M;
      }
    }
    function Tn(e, t, o) {
      return Xe(e, t, o, !0);
    }
    function On(e, t, o) {
      return Xe(e, t, o, !1);
    }
    var Dn = On, Ln = Tn;
    se.Fragment = s, se.jsx = Dn, se.jsxs = Ln;
  }()), se;
}
process.env.NODE_ENV === "production" ? Pe.exports = $n() : Pe.exports = Fn();
var m = Pe.exports;
let A;
const fe = /* @__PURE__ */ new Set(), ve = /* @__PURE__ */ new Set(), W = {
  getState() {
    let n;
    switch (A == null ? void 0 : A.readyState) {
      case WebSocket.CLOSED: {
        n = "disconnected";
        break;
      }
      case WebSocket.OPEN: {
        n = "connected";
        break;
      }
      case WebSocket.CONNECTING: {
        n = "connecting";
        break;
      }
      case WebSocket.CLOSING: {
        n = "disconnecting";
        break;
      }
      default: {
        n = "disconnected";
        break;
      }
    }
    return n;
  },
  subscribe(n) {
    return ve.add(n), () => {
      ve.delete(n);
    };
  },
  unsubscribe(n) {
    ve.delete(n);
  },
  notify() {
    ve.forEach((n) => n());
  },
  send(n, r) {
    const a = this.getState();
    A && a === "connected" ? A.send(JSON.stringify({ name: n, body: r })) : console.warn(`Cannot send '${n}' while in '${a}' state`);
  },
  connect(n) {
    if (this.getState() === "disconnected") {
      const r = () => {
        console.log("notify for open"), this.notify();
      }, a = (C) => {
        const c = JSON.parse(C.data.toString());
        fe.size > 0 ? fe.forEach((b) => b(c)) : console.warn(
          "No callback to handle WebSocket message",
          c
        );
      }, s = () => {
        A && (A.onopen = null, A.onmessage = null, A.onclose = null, A.onerror = null), console.log("notify for close"), this.notify();
      }, y = () => {
        console.error("WebSocket error");
      };
      A = new WebSocket(`ws://${n}/`, []), this.notify(), A.onopen = r, A.onmessage = a, A.onclose = s, A.onerror = y;
    } else
      console.error(`Cannot connect while in '${this.getState()}' state`);
  },
  disconnect() {
    A && this.getState() === "connected" && (A.close(3e3, "Disconnected by user"), this.notify());
  },
  addMessageListener(n) {
    fe.add(n);
  },
  removeMessageListener(n) {
    fe.delete(n);
  }
}, rn = ye({
  state: "disconnected",
  connect: () => {
    throw new Error("Missing WebSocket Context Provider");
  },
  subscribe: () => {
  },
  unsubscribe: () => {
  },
  disconnect: () => {
  },
  send: () => {
  },
  sendWithReply: () => {
    throw new Error("Missing WebSocket Context Provider");
  }
}), zn = ({
  address: n = "127.0.0.1:9001",
  children: r
}) => {
  const a = tn(
    W.subscribe,
    W.getState
  ), s = w(() => {
    const i = W.getState();
    let l;
    switch (i) {
      case "connected": {
        l = Promise.resolve();
        break;
      }
      case "disconnected": {
        l = new Promise((u, d) => {
          const E = () => {
            const x = W.getState();
            x === "connected" ? (W.unsubscribe(E), u()) : x === "disconnected" && (W.unsubscribe(E), d());
          };
          W.subscribe(E), W.connect(n);
        });
        break;
      }
      case "connecting": {
        l = new Promise((u, d) => {
          const E = () => {
            const x = W.getState();
            x === "connected" ? (W.unsubscribe(E), u()) : x === "disconnected" && (W.unsubscribe(E), d());
          };
          W.subscribe(E);
        });
        break;
      }
      default: {
        l = Promise.reject(
          new Error(`Cannot connect while in '${i}' state`)
        );
        break;
      }
    }
    return l;
  }, [n]), y = w(() => {
    W.disconnect();
  }, []), C = w((i) => {
    W.addMessageListener(i);
  }, []), c = w((i) => {
    W.removeMessageListener(i);
  }, []), b = w((i, l) => {
    W.send(i, l);
  }, []), p = w(
    (i, l, u) => new Promise((d) => {
      const E = ({
        name: x,
        body: k
      }) => {
        x === u && (W.removeMessageListener(E), d(k));
      };
      W.addMessageListener(E), W.send(i, l);
    }),
    []
  ), _ = pe(
    () => ({
      state: a,
      connect: s,
      disconnect: y,
      subscribe: C,
      unsubscribe: c,
      send: b,
      sendWithReply: p
    }),
    [
      a,
      s,
      y,
      C,
      c,
      b,
      p
    ]
  );
  return X(() => () => {
    W.disconnect();
  }, [n]), /* @__PURE__ */ m.jsx(rn.Provider, { value: _, children: r });
}, Z = () => {
  const n = me(rn);
  if (!n)
    throw new Error("useWebSocket must be used within a WebSocketProvider");
  return n;
}, qn = () => {
  const { state: n, connect: r, disconnect: a } = Z();
  let s;
  return n === "connected" ? s = /* @__PURE__ */ m.jsxs("div", { children: [
    "Connected to multiplayer server",
    " ",
    /* @__PURE__ */ m.jsx("button", { onClick: () => a(), children: "Disconnect" })
  ] }) : n === "connecting" ? s = /* @__PURE__ */ m.jsx("div", { children: "Connecting to multiplayer server..." }) : n === "disconnected" && (s = /* @__PURE__ */ m.jsxs("div", { children: [
    "Not connected to multiplayer server",
    " ",
    /* @__PURE__ */ m.jsx("button", { onClick: () => r(), children: "Connect" })
  ] })), s;
};
function ae(...n) {
  throw new Error(...n);
}
var _e;
(function(n) {
  n[n.Open = 0] = "Open", n[n.Locked = 1] = "Locked", n[n.Complete = 2] = "Complete", n[n.Closed = 3] = "Closed";
})(_e || (_e = {}));
const An = async (n, r = 1e4) => {
  let s = 0;
  return new Promise((y, C) => {
    const c = () => {
      s += 250, n() ? y(n()) : s < r ? window.setTimeout(c, 250) : C();
    };
    c();
  });
};
let P = {};
const be = /* @__PURE__ */ new Set(), he = /* @__PURE__ */ new Set(), U = {
  getConnections() {
    return P;
  },
  find(n) {
    return P[n];
  },
  subscribe(n) {
    return he.add(n), () => {
      he.delete(n);
    };
  },
  notify() {
    he.forEach((n) => n());
  },
  sendTo(n, r) {
    var s;
    const a = P[n];
    a && ((s = a.dc) == null || s.send(JSON.stringify(r)));
  },
  sendToAll(n) {
    Object.entries(P).forEach(
      ([r, a]) => {
        var s;
        return (s = a.dc) == null ? void 0 : s.send(JSON.stringify(n));
      }
    );
  },
  setMessageCallback(n) {
    be.add(n);
  },
  removeMessageCallback(n) {
    be.delete(n);
  },
  addConnection(n, r, a) {
    P = {
      ...P,
      [n]: { ...P[n], pc: r, dc: a, status: "connecting" }
    }, a && this.listenToDataChannel(n, a), this.notify();
  },
  setDataChannel(n, r) {
    P = {
      ...P,
      [n]: { ...P[n], dc: r }
    }, this.listenToDataChannel(n, r), this.notify();
  },
  listenToDataChannel(n, r) {
    P[n] && this.stopListeningToDataChannel(P[n]);
    const a = (c) => {
      console.debug("dc.open", c), P = {
        ...P,
        [n]: { ...P[n], status: "connected" }
      }, this.notify();
    }, s = (c) => {
      console.debug("dc.close", c), P = {
        ...P,
        [n]: { ...P[n], status: "disconnected" }
      }, this.notify();
    }, y = (c) => {
      console.debug("Received peer message", c.data);
      const b = JSON.parse(c.data.toString());
      be.size > 0 ? be.forEach((p) => p(n, b)) : console.warn("No callback to handle DataChannel message");
    }, C = (c) => {
      console.error(c);
    };
    r.addEventListener("open", a), r.addEventListener("close", s), r.addEventListener("message", y), r.addEventListener("error", C), P = {
      ...P,
      [n]: {
        ...P[n],
        eventHandlers: {
          onOpen: a,
          onClose: s,
          onMessage: y,
          onError: C
        }
      }
    };
  },
  stopListeningToDataChannel(n) {
    n != null && n.dc && (n != null && n.eventHandlers) && (n.dc.removeEventListener(
      "open",
      n.eventHandlers.onOpen
    ), n.dc.removeEventListener(
      "close",
      n.eventHandlers.onClose
    ), n.dc.removeEventListener(
      "message",
      n.eventHandlers.onMessage
    ), n.dc.removeEventListener(
      "error",
      n.eventHandlers.onError
    ), n.eventHandlers = void 0);
  },
  removeConnection(n) {
    var r, a;
    if (n) {
      if (P[n]) {
        const s = P[n];
        this.stopListeningToDataChannel(s), (r = s.dc) == null || r.close(), (a = s.pc) == null || a.close(), delete P[n];
      }
    } else
      Object.entries(P).forEach(([s, y]) => {
        var C, c;
        this.stopListeningToDataChannel(y), (C = y.dc) == null || C.close(), (c = y.pc) == null || c.close();
      }), P = {};
    he.forEach((s) => s());
  }
}, on = ye({
  connections: {},
  offer: () => Promise.reject(
    new Error("Missing Peer Connection Context Provider")
  ),
  reply: () => Promise.reject(
    new Error("Missing Peer Connection Context Provider")
  ),
  answer: () => Promise.reject(
    new Error("Missing Peer Connection Context Provider")
  ),
  send: () => console.error(""),
  subscribe: () => console.error(""),
  unsubscribe: () => console.error(""),
  close: () => console.error("")
}), Kn = ({
  children: n
}) => {
  const r = tn(
    U.subscribe,
    U.getConnections
  ), a = w(
    async (i, l = "default") => {
      const u = new RTCPeerConnection(), d = u.createDataChannel(l, {
        protocol: "default"
      });
      console.debug("Creating RTC offer");
      const E = await u.createOffer({
        offerToReceiveAudio: !1,
        offerToReceiveVideo: !1
      });
      await u.setLocalDescription(E);
      const x = [], k = (h) => {
        h.candidate && x.push(h.candidate);
      };
      return u.addEventListener("icecandidate", k), await An(() => u.iceGatheringState === "complete"), u.removeEventListener("icecandidate", k), console.debug(`Setup connection for peer ${i}`), U.addConnection(i, u, d), console.debug("Completed offer", E, x), { offer: E, candidates: x };
    },
    []
  ), s = w(
    async (i, l) => {
      console.assert(
        l && "type" in l && l.type === "answer",
        "Invalid RTCSessionDescription for reply"
      );
      const u = U.find(i) ?? ae(`Failed to get connection for peer ${i}`);
      return console.debug("Received reply", l), u.pc.setRemoteDescription(
        l
      );
    },
    []
  ), y = w(
    async (i, l) => {
      console.assert(
        i && "type" in i && i.type === "offer",
        "Invalid RTCSessionDescription for answer"
      );
      const u = new RTCPeerConnection();
      console.debug("Setup connection for host"), U.addConnection("host", u), u.addEventListener(
        "datachannel",
        (E) => {
          console.debug("pc.onDataChannel"), U.setDataChannel("host", E.channel);
        },
        { once: !0 }
      ), console.debug("Received offer", i, l), await u.setRemoteDescription(i), console.debug("Creating RTC answer");
      const d = await u.createAnswer();
      return await u.setLocalDescription(d), l && l.length > 0 && await Promise.allSettled(
        l.map(
          (E) => u.addIceCandidate(E)
        )
      ), console.debug("Completed answer", d), d;
    },
    []
  ), C = w((i, l, u) => {
    const d = {
      name: i,
      body: l
    };
    u ? U.sendTo(u, d) : U.sendToAll(d);
  }, []), c = w((i) => {
    U.setMessageCallback(i);
  }, []), b = w((i) => {
    U.removeMessageCallback(i);
  }, []), p = w((i) => {
    U.removeConnection(i);
  }, []), _ = pe(
    () => ({
      connections: r,
      offer: a,
      reply: s,
      answer: y,
      send: C,
      subscribe: c,
      unsubscribe: b,
      close: p
    }),
    [r, a, s, y, C, c, b, p]
  );
  return /* @__PURE__ */ m.jsx(on.Provider, { value: _, children: n });
}, ke = () => {
  const n = me(on);
  if (!n)
    throw new Error(
      "usePeerConnection must be used within a PeerConnectionContext"
    );
  return n;
}, In = ({
  remotePlayerId: n
}) => {
  const { player: r } = Te(), { connections: a } = ke();
  let s;
  if (r && r.id !== n)
    if (r.host)
      if (n)
        s = a[n];
      else {
        const y = Object.keys(a);
        y.length === 1 && (s = a[y[0]]);
      }
    else
      s = a.host;
  return s == null ? void 0 : s.status;
}, Nn = ({ player: n }) => {
  const { send: r } = Z(), a = w(() => {
    r("player-change-ready-state", {
      id: n == null ? void 0 : n.id,
      ready: !(n != null && n.ready)
    });
  }, [r, n]);
  return /* @__PURE__ */ m.jsx(
    "input",
    {
      type: "checkbox",
      title: "Toggle ready",
      "aria-label": n.ready ? "Set ready" : "Set not ready",
      checked: n.ready,
      onChange: a
    }
  );
}, Gn = ({ player: n }) => n.ready ? "Ready" : "Not Ready", Yn = ({
  localPlayer: n,
  player: r
}) => /* @__PURE__ */ m.jsxs(
  "div",
  {
    style: {
      display: "flex",
      flexDirection: "row",
      alignItems: "center"
    },
    children: [
      /* @__PURE__ */ m.jsxs("div", { style: { flexGrow: 1, textAlign: "left" }, children: [
        (n == null ? void 0 : n.id) === r.id ? "*" : " ",
        r.name
      ] }),
      /* @__PURE__ */ m.jsx("div", { style: { paddingRight: 10 }, children: /* @__PURE__ */ m.jsx(In, { remotePlayerId: r.id }) }),
      /* @__PURE__ */ m.jsx("div", { children: (n == null ? void 0 : n.id) === r.id ? /* @__PURE__ */ m.jsx(Nn, { player: r }) : /* @__PURE__ */ m.jsx(Gn, { player: r }) })
    ]
  },
  r.id
), Un = ({
  localPlayerId: n,
  room: r,
  onJoinGame: a,
  onLeaveRoom: s
}) => {
  const { subscribe: y, unsubscribe: C, send: c } = Z(), [b, p] = H(r), { offer: _, reply: i, answer: l, close: u } = ke(), d = (b == null ? void 0 : b.players.find((h) => h.id === n)) ?? ae("Failed to find local player in Lobby Room"), E = (b == null ? void 0 : b.players) && (d == null ? void 0 : d.host) && b.players.length >= (b.options.minPlayers ?? 2) && b.players.every((h) => h.ready), x = w(() => {
    d != null && d.host && c("player-start-game", {
      // FIXME should not be required
      id: d == null ? void 0 : d.id
    });
  }, [c, d]), k = w(() => {
    c("player-leave-room", void 0), s();
  }, [c, s]);
  return X(() => {
    const z = {
      "room-player-connected": async (O) => {
        if (console.debug(`Player joined room ${O.id}`), p((T) => ({
          ...T,
          players: [...T.players, O]
        })), d != null && d.host) {
          const { offer: T, candidates: N } = await _(
            O.id
          );
          c("player-connect-to-peer", {
            peer: O.id,
            offer: T,
            candidates: N
          });
        }
      },
      "room-player-disconnected": (O) => {
        console.debug(`Player disconnected ${O.id}`), u(O.id), p((T) => ({
          ...T,
          players: T.players.filter(
            (N) => N.id !== O.id
          )
        }));
      },
      "room-player-ready-change": (O) => {
        p((T) => {
          const N = T.players.find(
            (G) => G.id === O.id
          );
          let F;
          if (N) {
            const G = T.players.indexOf(N);
            F = { ...T, players: [...T.players] }, F.players[G] = {
              ...F.players[G],
              ready: O.ready
            };
          } else
            F = T;
          return F;
        });
      },
      "room-player-rtc-host-offer": async ({
        id: O,
        sessionDescription: T,
        candidates: N
      }) => {
        console.debug(`Connect to host (${O})`);
        const F = await l(
          T,
          N
        );
        c("player-connect-to-host", {
          answer: F
        });
      },
      "room-player-rtc-answer": async ({
        id: O,
        sessionDescription: T
      }) => {
        console.debug(`Connect to peer reply (${O})`), await i(O, T);
      },
      "room-start-game": ({
        //@ts-expect-error ignore unused
        room: O,
        game: T
      }) => a(T),
      "room-closed": () => k()
    }, ee = ({
      name: O,
      body: T
    }) => {
      Object.keys(z).includes(O) && z[O](T);
    };
    return y(ee), () => {
      C(ee);
    };
  }, [
    d == null ? void 0 : d.host,
    _,
    l,
    i,
    u,
    c,
    y,
    C,
    a,
    k
  ]), /* @__PURE__ */ m.jsxs("div", { children: [
    /* @__PURE__ */ m.jsxs("div", { children: [
      "Room ",
      b.name
    ] }),
    /* @__PURE__ */ m.jsx("div", { style: { minWidth: 400 }, children: b.players.map((h) => /* @__PURE__ */ m.jsx(
      Yn,
      {
        localPlayer: d,
        player: h
      },
      h.id
    )) }),
    /* @__PURE__ */ m.jsxs("div", { children: [
      /* @__PURE__ */ m.jsx("button", { onClick: k, children: "Leave" }),
      (d == null ? void 0 : d.host) && /* @__PURE__ */ m.jsx(
        "button",
        {
          disabled: !E,
          onClick: x,
          children: "Start"
        }
      )
    ] })
  ] });
}, Vn = ({
  room: n,
  onJoin: r
}) => {
  const a = n.state === _e.Open && n.players.length < n.options.maxPlayers;
  return /* @__PURE__ */ m.jsxs(
    "div",
    {
      style: {
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        gap: 12
      },
      children: [
        /* @__PURE__ */ m.jsx("div", { style: { flexGrow: 1, textAlign: "left" }, children: n.name }),
        /* @__PURE__ */ m.jsxs("div", { children: [
          "Players: ",
          n.players.length
        ] }),
        /* @__PURE__ */ m.jsx("div", { children: /* @__PURE__ */ m.jsx("button", { onClick: () => r(n), disabled: !a, children: "Join" }) })
      ]
    }
  );
}, Hn = ({
  onJoinRoom: n,
  onLeaveLobby: r
}) => {
  const { send: a, sendWithReply: s, subscribe: y, unsubscribe: C } = Z(), [c, b] = H([]), p = w(
    async (l = "MyGame", u = { maxPlayers: 4 }) => {
      const x = s(
        "player-host-game",
        {
          name: l,
          options: u,
          sessionDescription: void 0,
          iceCandidates: [],
          autoReady: !0
        },
        "player-host-game-reply"
      );
      return x.then((k) => {
        const h = k && "id" in k ? k : ae("Failed to receive room from reply");
        n(h, !0);
      }), x;
    },
    [s, n]
  ), _ = w(
    async (l) => {
      const u = s(
        "player-join-room",
        {
          room: l.id,
          autoReady: !0
        },
        "player-join-room-reply"
      );
      return u.then((d) => {
        const E = d && "id" in d ? d : ae("Failed to receive room from reply");
        n(E, !1);
      }), u;
    },
    [s, n]
  ), i = w(() => {
    a("player-leave-lobby", void 0), r();
  }, [a, r]);
  return X(() => {
    const x = {
      "lobby-player-connected": (h) => {
        console.debug(`Player ${h.name} connected to lobby`);
      },
      "lobby-player-disconnected": (h) => {
        console.debug(`Player ${h.name} disconnected from lobby`);
      },
      "lobby-room-created": (h) => {
        console.debug(`Room created ${h.id}`), b((f) => {
          let L = f;
          return f.find(($) => $.id === h.id) || (L = [...f, h]), L;
        });
      },
      "lobby-room-deleted": (h) => {
        console.debug(`Room deleted ${h.id}`), b((f) => f.filter((L) => L.id !== h.id));
      }
    };
    s(
      "player-list-players",
      { name },
      "player-list-players-reply"
      //@ts-expect-error player data is unused
    ).then((h) => {
    }), s(
      "player-list-rooms",
      { name },
      "player-list-rooms-reply"
    ).then((h) => {
      h && "rooms" in h && (console.log("Got rooms: ", h.rooms), b(h.rooms));
    });
    const k = ({
      name: h,
      body: f
    }) => {
      Object.keys(x).includes(h) && x[h](f);
    };
    return y(k), () => {
      C(k);
    };
  }, [s, y, C]), /* @__PURE__ */ m.jsxs("div", { children: [
    /* @__PURE__ */ m.jsxs(
      "div",
      {
        style: {
          minWidth: 400,
          minHeight: 200,
          borderWidth: 1,
          borderStyle: "solid none",
          borderColor: "lightgray"
        },
        children: [
          c.map((l) => /* @__PURE__ */ m.jsx(
            Vn,
            {
              room: l,
              onJoin: _
            },
            l.id
          )),
          c.length === 0 && /* @__PURE__ */ m.jsx("div", { children: "No games" })
        ]
      }
    ),
    /* @__PURE__ */ m.jsxs("div", { children: [
      /* @__PURE__ */ m.jsx("button", { onClick: () => p(), children: "Host" }),
      /* @__PURE__ */ m.jsx("button", { onClick: i, children: "Leave" })
    ] })
  ] });
}, Xn = () => {
  const { state: n } = Z(), {
    player: r,
    room: a,
    joinRoom: s,
    joinGame: y,
    leaveRoom: C,
    leaveLobby: c
  } = Te();
  console.debug("Lobby.render", status, a), X(() => {
    n === "disconnected" && c();
  }, [n, c]);
  let b;
  return a ? b = /* @__PURE__ */ m.jsx(
    Un,
    {
      localPlayerId: r.id,
      room: a,
      onJoinGame: y,
      onLeaveRoom: C
    }
  ) : b = /* @__PURE__ */ m.jsx(Hn, { onJoinRoom: s, onLeaveLobby: c }), b;
};
class sn {
  constructor(r, a) {
    re(this, "id");
    re(this, "name");
    re(this, "ready");
    re(this, "host");
    this.id = r, this.name = a, this.ready = !1, this.host = !1;
  }
}
class Zn extends sn {
}
class Qn extends sn {
}
const an = ye({
  state: "main-menu",
  player: void 0,
  room: void 0,
  game: void 0,
  setPlayer: () => {
  },
  joinLobby: () => {
  },
  leaveLobby: () => {
  },
  joinRoom: () => {
  },
  leaveRoom: () => {
  },
  joinGame: () => {
  },
  leaveGame: () => {
  }
}), et = ({ children: n }) => {
  const { connect: r, sendWithReply: a } = Z(), [s, y] = H("main-menu"), [C, c] = H(), [b, p] = H(), [_, i] = H(), l = w(async () => {
    await r();
    const f = `BrowserPlayer${Math.floor(Math.random() * 100 + 1)}`, L = await a(
      "player-join-lobby",
      { name: f },
      "player-join-lobby-reply"
    ), $ = L && "id" in L ? L : ae("Failed to receive player from reply");
    console.debug(`Player ${$.id}`), c($), y("lobby"), p(void 0), i(void 0);
  }, [a, r]), u = w(() => {
    y("main-menu"), p(void 0), i(void 0);
  }, []), d = w((f, L) => {
    p(f), i(void 0), c(($) => $ ? { ...$, host: L } : void 0);
  }, []), E = w(() => {
    y("lobby"), p(void 0), i(void 0);
  }, []), x = w((f) => {
    y("in-game"), p(void 0), i(f);
  }, []), k = w(() => {
    y("main-menu"), p(void 0), i(void 0);
  }, []), h = pe(
    () => ({
      state: s,
      player: C,
      room: b,
      game: _,
      setPlayer: c,
      joinLobby: l,
      leaveLobby: u,
      joinRoom: d,
      leaveRoom: E,
      joinGame: x,
      leaveGame: k
    }),
    [
      s,
      C,
      b,
      _,
      c,
      l,
      u,
      d,
      E,
      x,
      k
    ]
  );
  return /* @__PURE__ */ m.jsx(an.Provider, { value: h, children: n });
}, Te = () => {
  const n = me(an);
  if (!n)
    throw new Error(
      "useManager must be used within a ManagerContextProvider"
    );
  return n;
}, cn = ye({
  state: "setup",
  name: "Unnamed",
  setup: () => {
  },
  ready: () => {
  },
  finish: () => {
  }
}), nt = ({ children: n }) => {
  const { player: r } = Te(), { connections: a, send: s, subscribe: y, unsubscribe: C } = ke(), [c, b] = H("setup"), [p] = H("Unnamed"), [_, i] = H(
    Object.keys(a).map((f) => ({
      id: f,
      state: "joining"
    }))
  ), l = w(
    (f) => {
      s("player-state-update", { state: f });
    },
    [s]
  ), u = w(
    (f) => {
      r != null && r.host && (b(f), s("game-state-update", { state: f }));
    },
    [r, s]
  ), d = w(
    (f, L) => {
      var Q;
      const $ = (Q = _.find((B) => B.id === f)) == null ? void 0 : Q.state;
      console.log(
        "Player",
        f,
        "state changed",
        $,
        "=>",
        L
      );
      const J = _.findIndex((B) => B.id === f);
      J !== -1 && i((B) => {
        const z = [...B];
        return z[J] = {
          id: f,
          state: L
        }, z;
      });
    },
    [_]
  );
  X(() => {
    const f = (L, $) => {
      if (r != null && r.host) {
        if ($.name === "player-state-update") {
          const J = $.body.state;
          d(L, J), J === "initializing" && (console.log("Send initial state to joined player"), s("game-update", {}, L));
        }
      } else
        $.name === "game-state-update" && b($.body.state);
    };
    return y(f), () => {
      C(f);
    };
  }, [r, y, C, d, s]), X(() => {
    r != null && r.host && c === "setup" && _.every((f) => f.state === "ready") && (console.log("All players are now ready"), u("playing"));
  }, [r, c, _, u]);
  const E = w(() => {
    r != null && r.host || l("initializing");
  }, [r, l]), x = w(() => {
    l("ready");
  }, [l]), k = w(() => {
    u("finished");
  }, [u]), h = pe(
    () => ({
      state: c,
      name: p,
      setup: E,
      ready: x,
      // pause,
      // unpause,
      finish: k
    }),
    [c, p, E, x, k]
  );
  return /* @__PURE__ */ m.jsx(cn.Provider, { value: h, children: n });
}, tt = () => {
  const n = me(cn);
  if (!n)
    throw new Error("useGame must be used within a GameContextProvider");
  return n;
};
export {
  cn as GameContext,
  nt as GameProvider,
  Xn as Lobby,
  Un as LobbyRoom,
  Zn as LocalPlayer,
  an as ManagerContext,
  et as ManagerProvider,
  Kn as PeerConnectionProvider,
  In as PeerConnectionStatus,
  Qn as RemotePlayer,
  qn as WebSocketConnectionState,
  zn as WebSocketProvider,
  tt as useGame,
  Te as useManager,
  ke as usePeerConnection,
  Z as useWebSocket
};
