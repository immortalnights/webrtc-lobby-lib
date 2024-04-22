import We, { createContext as vr, useSyncExternalStore as br, useCallback as I, useMemo as pr, useEffect as gr, useContext as hr } from "react";
var oe = { exports: {} }, Y = {};
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var xe;
function yr() {
  if (xe)
    return Y;
  xe = 1;
  var a = We, E = Symbol.for("react.element"), m = Symbol.for("react.fragment"), g = Object.prototype.hasOwnProperty, k = a.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner, O = { key: !0, ref: !0, __self: !0, __source: !0 };
  function w(S, b, W) {
    var u, v = {}, R = null, T = null;
    W !== void 0 && (R = "" + W), b.key !== void 0 && (R = "" + b.key), b.ref !== void 0 && (T = b.ref);
    for (u in b)
      g.call(b, u) && !O.hasOwnProperty(u) && (v[u] = b[u]);
    if (S && S.defaultProps)
      for (u in b = S.defaultProps, b)
        v[u] === void 0 && (v[u] = b[u]);
    return { $$typeof: E, type: S, key: R, ref: T, props: v, _owner: k.current };
  }
  return Y.Fragment = m, Y.jsx = w, Y.jsxs = w, Y;
}
var V = {};
/**
 * @license React
 * react-jsx-runtime.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var je;
function Er() {
  return je || (je = 1, process.env.NODE_ENV !== "production" && function() {
    var a = We, E = Symbol.for("react.element"), m = Symbol.for("react.portal"), g = Symbol.for("react.fragment"), k = Symbol.for("react.strict_mode"), O = Symbol.for("react.profiler"), w = Symbol.for("react.provider"), S = Symbol.for("react.context"), b = Symbol.for("react.forward_ref"), W = Symbol.for("react.suspense"), u = Symbol.for("react.suspense_list"), v = Symbol.for("react.memo"), R = Symbol.for("react.lazy"), T = Symbol.for("react.offscreen"), _ = Symbol.iterator, P = "@@iterator";
    function H(e) {
      if (e === null || typeof e != "object")
        return null;
      var r = _ && e[_] || e[P];
      return typeof r == "function" ? r : null;
    }
    var F = a.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
    function h(e) {
      {
        for (var r = arguments.length, t = new Array(r > 1 ? r - 1 : 0), n = 1; n < r; n++)
          t[n - 1] = arguments[n];
        Fe("error", e, t);
      }
    }
    function Fe(e, r, t) {
      {
        var n = F.ReactDebugCurrentFrame, s = n.getStackAddendum();
        s !== "" && (r += "%s", t = t.concat([s]));
        var c = t.map(function(i) {
          return String(i);
        });
        c.unshift("Warning: " + r), Function.prototype.apply.call(console[e], console, c);
      }
    }
    var Ae = !1, $e = !1, Ie = !1, Me = !1, Le = !1, ie;
    ie = Symbol.for("react.module.reference");
    function Ne(e) {
      return !!(typeof e == "string" || typeof e == "function" || e === g || e === O || Le || e === k || e === W || e === u || Me || e === T || Ae || $e || Ie || typeof e == "object" && e !== null && (e.$$typeof === R || e.$$typeof === v || e.$$typeof === w || e.$$typeof === S || e.$$typeof === b || // This needs to include all possible module reference object
      // types supported by any Flight configuration anywhere since
      // we don't know which Flight build this will end up being used
      // with.
      e.$$typeof === ie || e.getModuleId !== void 0));
    }
    function Ye(e, r, t) {
      var n = e.displayName;
      if (n)
        return n;
      var s = r.displayName || r.name || "";
      return s !== "" ? t + "(" + s + ")" : t;
    }
    function se(e) {
      return e.displayName || "Context";
    }
    function x(e) {
      if (e == null)
        return null;
      if (typeof e.tag == "number" && h("Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."), typeof e == "function")
        return e.displayName || e.name || null;
      if (typeof e == "string")
        return e;
      switch (e) {
        case g:
          return "Fragment";
        case m:
          return "Portal";
        case O:
          return "Profiler";
        case k:
          return "StrictMode";
        case W:
          return "Suspense";
        case u:
          return "SuspenseList";
      }
      if (typeof e == "object")
        switch (e.$$typeof) {
          case S:
            var r = e;
            return se(r) + ".Consumer";
          case w:
            var t = e;
            return se(t._context) + ".Provider";
          case b:
            return Ye(e, e.render, "ForwardRef");
          case v:
            var n = e.displayName || null;
            return n !== null ? n : x(e.type) || "Memo";
          case R: {
            var s = e, c = s._payload, i = s._init;
            try {
              return x(i(c));
            } catch {
              return null;
            }
          }
        }
      return null;
    }
    var D = Object.assign, L = 0, ce, ue, le, fe, de, ve, be;
    function pe() {
    }
    pe.__reactDisabledLog = !0;
    function Ve() {
      {
        if (L === 0) {
          ce = console.log, ue = console.info, le = console.warn, fe = console.error, de = console.group, ve = console.groupCollapsed, be = console.groupEnd;
          var e = {
            configurable: !0,
            enumerable: !0,
            value: pe,
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
        L++;
      }
    }
    function Ue() {
      {
        if (L--, L === 0) {
          var e = {
            configurable: !0,
            enumerable: !0,
            writable: !0
          };
          Object.defineProperties(console, {
            log: D({}, e, {
              value: ce
            }),
            info: D({}, e, {
              value: ue
            }),
            warn: D({}, e, {
              value: le
            }),
            error: D({}, e, {
              value: fe
            }),
            group: D({}, e, {
              value: de
            }),
            groupCollapsed: D({}, e, {
              value: ve
            }),
            groupEnd: D({}, e, {
              value: be
            })
          });
        }
        L < 0 && h("disabledDepth fell below zero. This is a bug in React. Please file an issue.");
      }
    }
    var X = F.ReactCurrentDispatcher, Z;
    function U(e, r, t) {
      {
        if (Z === void 0)
          try {
            throw Error();
          } catch (s) {
            var n = s.stack.trim().match(/\n( *(at )?)/);
            Z = n && n[1] || "";
          }
        return `
` + Z + e;
      }
    }
    var Q = !1, B;
    {
      var Be = typeof WeakMap == "function" ? WeakMap : Map;
      B = new Be();
    }
    function ge(e, r) {
      if (!e || Q)
        return "";
      {
        var t = B.get(e);
        if (t !== void 0)
          return t;
      }
      var n;
      Q = !0;
      var s = Error.prepareStackTrace;
      Error.prepareStackTrace = void 0;
      var c;
      c = X.current, X.current = null, Ve();
      try {
        if (r) {
          var i = function() {
            throw Error();
          };
          if (Object.defineProperty(i.prototype, "props", {
            set: function() {
              throw Error();
            }
          }), typeof Reflect == "object" && Reflect.construct) {
            try {
              Reflect.construct(i, []);
            } catch (j) {
              n = j;
            }
            Reflect.construct(e, [], i);
          } else {
            try {
              i.call();
            } catch (j) {
              n = j;
            }
            e.call(i.prototype);
          }
        } else {
          try {
            throw Error();
          } catch (j) {
            n = j;
          }
          e();
        }
      } catch (j) {
        if (j && n && typeof j.stack == "string") {
          for (var o = j.stack.split(`
`), y = n.stack.split(`
`), l = o.length - 1, f = y.length - 1; l >= 1 && f >= 0 && o[l] !== y[f]; )
            f--;
          for (; l >= 1 && f >= 0; l--, f--)
            if (o[l] !== y[f]) {
              if (l !== 1 || f !== 1)
                do
                  if (l--, f--, f < 0 || o[l] !== y[f]) {
                    var C = `
` + o[l].replace(" at new ", " at ");
                    return e.displayName && C.includes("<anonymous>") && (C = C.replace("<anonymous>", e.displayName)), typeof e == "function" && B.set(e, C), C;
                  }
                while (l >= 1 && f >= 0);
              break;
            }
        }
      } finally {
        Q = !1, X.current = c, Ue(), Error.prepareStackTrace = s;
      }
      var $ = e ? e.displayName || e.name : "", Pe = $ ? U($) : "";
      return typeof e == "function" && B.set(e, Pe), Pe;
    }
    function Je(e, r, t) {
      return ge(e, !1);
    }
    function qe(e) {
      var r = e.prototype;
      return !!(r && r.isReactComponent);
    }
    function J(e, r, t) {
      if (e == null)
        return "";
      if (typeof e == "function")
        return ge(e, qe(e));
      if (typeof e == "string")
        return U(e);
      switch (e) {
        case W:
          return U("Suspense");
        case u:
          return U("SuspenseList");
      }
      if (typeof e == "object")
        switch (e.$$typeof) {
          case b:
            return Je(e.render);
          case v:
            return J(e.type, r, t);
          case R: {
            var n = e, s = n._payload, c = n._init;
            try {
              return J(c(s), r, t);
            } catch {
            }
          }
        }
      return "";
    }
    var q = Object.prototype.hasOwnProperty, he = {}, ye = F.ReactDebugCurrentFrame;
    function G(e) {
      if (e) {
        var r = e._owner, t = J(e.type, e._source, r ? r.type : null);
        ye.setExtraStackFrame(t);
      } else
        ye.setExtraStackFrame(null);
    }
    function Ge(e, r, t, n, s) {
      {
        var c = Function.call.bind(q);
        for (var i in e)
          if (c(e, i)) {
            var o = void 0;
            try {
              if (typeof e[i] != "function") {
                var y = Error((n || "React class") + ": " + t + " type `" + i + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof e[i] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.");
                throw y.name = "Invariant Violation", y;
              }
              o = e[i](r, i, n, t, null, "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED");
            } catch (l) {
              o = l;
            }
            o && !(o instanceof Error) && (G(s), h("%s: type specification of %s `%s` is invalid; the type checker function must return `null` or an `Error` but returned a %s. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).", n || "React class", t, i, typeof o), G(null)), o instanceof Error && !(o.message in he) && (he[o.message] = !0, G(s), h("Failed %s type: %s", t, o.message), G(null));
          }
      }
    }
    var ze = Array.isArray;
    function ee(e) {
      return ze(e);
    }
    function Ke(e) {
      {
        var r = typeof Symbol == "function" && Symbol.toStringTag, t = r && e[Symbol.toStringTag] || e.constructor.name || "Object";
        return t;
      }
    }
    function He(e) {
      try {
        return Ee(e), !1;
      } catch {
        return !0;
      }
    }
    function Ee(e) {
      return "" + e;
    }
    function me(e) {
      if (He(e))
        return h("The provided key is an unsupported type %s. This value must be coerced to a string before before using it here.", Ke(e)), Ee(e);
    }
    var N = F.ReactCurrentOwner, Xe = {
      key: !0,
      ref: !0,
      __self: !0,
      __source: !0
    }, Re, _e, re;
    re = {};
    function Ze(e) {
      if (q.call(e, "ref")) {
        var r = Object.getOwnPropertyDescriptor(e, "ref").get;
        if (r && r.isReactWarning)
          return !1;
      }
      return e.ref !== void 0;
    }
    function Qe(e) {
      if (q.call(e, "key")) {
        var r = Object.getOwnPropertyDescriptor(e, "key").get;
        if (r && r.isReactWarning)
          return !1;
      }
      return e.key !== void 0;
    }
    function er(e, r) {
      if (typeof e.ref == "string" && N.current && r && N.current.stateNode !== r) {
        var t = x(N.current.type);
        re[t] || (h('Component "%s" contains the string ref "%s". Support for string refs will be removed in a future major release. This case cannot be automatically converted to an arrow function. We ask you to manually fix this case by using useRef() or createRef() instead. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-string-ref', x(N.current.type), e.ref), re[t] = !0);
      }
    }
    function rr(e, r) {
      {
        var t = function() {
          Re || (Re = !0, h("%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", r));
        };
        t.isReactWarning = !0, Object.defineProperty(e, "key", {
          get: t,
          configurable: !0
        });
      }
    }
    function tr(e, r) {
      {
        var t = function() {
          _e || (_e = !0, h("%s: `ref` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", r));
        };
        t.isReactWarning = !0, Object.defineProperty(e, "ref", {
          get: t,
          configurable: !0
        });
      }
    }
    var nr = function(e, r, t, n, s, c, i) {
      var o = {
        // This tag allows us to uniquely identify this as a React Element
        $$typeof: E,
        // Built-in properties that belong on the element
        type: e,
        key: r,
        ref: t,
        props: i,
        // Record the component responsible for creating this element.
        _owner: c
      };
      return o._store = {}, Object.defineProperty(o._store, "validated", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: !1
      }), Object.defineProperty(o, "_self", {
        configurable: !1,
        enumerable: !1,
        writable: !1,
        value: n
      }), Object.defineProperty(o, "_source", {
        configurable: !1,
        enumerable: !1,
        writable: !1,
        value: s
      }), Object.freeze && (Object.freeze(o.props), Object.freeze(o)), o;
    };
    function ar(e, r, t, n, s) {
      {
        var c, i = {}, o = null, y = null;
        t !== void 0 && (me(t), o = "" + t), Qe(r) && (me(r.key), o = "" + r.key), Ze(r) && (y = r.ref, er(r, s));
        for (c in r)
          q.call(r, c) && !Xe.hasOwnProperty(c) && (i[c] = r[c]);
        if (e && e.defaultProps) {
          var l = e.defaultProps;
          for (c in l)
            i[c] === void 0 && (i[c] = l[c]);
        }
        if (o || y) {
          var f = typeof e == "function" ? e.displayName || e.name || "Unknown" : e;
          o && rr(i, f), y && tr(i, f);
        }
        return nr(e, o, y, s, n, N.current, i);
      }
    }
    var te = F.ReactCurrentOwner, Se = F.ReactDebugCurrentFrame;
    function A(e) {
      if (e) {
        var r = e._owner, t = J(e.type, e._source, r ? r.type : null);
        Se.setExtraStackFrame(t);
      } else
        Se.setExtraStackFrame(null);
    }
    var ne;
    ne = !1;
    function ae(e) {
      return typeof e == "object" && e !== null && e.$$typeof === E;
    }
    function Ce() {
      {
        if (te.current) {
          var e = x(te.current.type);
          if (e)
            return `

Check the render method of \`` + e + "`.";
        }
        return "";
      }
    }
    function or(e) {
      return "";
    }
    var we = {};
    function ir(e) {
      {
        var r = Ce();
        if (!r) {
          var t = typeof e == "string" ? e : e.displayName || e.name;
          t && (r = `

Check the top-level render call using <` + t + ">.");
        }
        return r;
      }
    }
    function Te(e, r) {
      {
        if (!e._store || e._store.validated || e.key != null)
          return;
        e._store.validated = !0;
        var t = ir(r);
        if (we[t])
          return;
        we[t] = !0;
        var n = "";
        e && e._owner && e._owner !== te.current && (n = " It was passed a child from " + x(e._owner.type) + "."), A(e), h('Each child in a list should have a unique "key" prop.%s%s See https://reactjs.org/link/warning-keys for more information.', t, n), A(null);
      }
    }
    function ke(e, r) {
      {
        if (typeof e != "object")
          return;
        if (ee(e))
          for (var t = 0; t < e.length; t++) {
            var n = e[t];
            ae(n) && Te(n, r);
          }
        else if (ae(e))
          e._store && (e._store.validated = !0);
        else if (e) {
          var s = H(e);
          if (typeof s == "function" && s !== e.entries)
            for (var c = s.call(e), i; !(i = c.next()).done; )
              ae(i.value) && Te(i.value, r);
        }
      }
    }
    function sr(e) {
      {
        var r = e.type;
        if (r == null || typeof r == "string")
          return;
        var t;
        if (typeof r == "function")
          t = r.propTypes;
        else if (typeof r == "object" && (r.$$typeof === b || // Note: Memo only checks outer props here.
        // Inner props are checked in the reconciler.
        r.$$typeof === v))
          t = r.propTypes;
        else
          return;
        if (t) {
          var n = x(r);
          Ge(t, e.props, "prop", n, e);
        } else if (r.PropTypes !== void 0 && !ne) {
          ne = !0;
          var s = x(r);
          h("Component %s declared `PropTypes` instead of `propTypes`. Did you misspell the property assignment?", s || "Unknown");
        }
        typeof r.getDefaultProps == "function" && !r.getDefaultProps.isReactClassApproved && h("getDefaultProps is only used on classic React.createClass definitions. Use a static property named `defaultProps` instead.");
      }
    }
    function cr(e) {
      {
        for (var r = Object.keys(e.props), t = 0; t < r.length; t++) {
          var n = r[t];
          if (n !== "children" && n !== "key") {
            A(e), h("Invalid prop `%s` supplied to `React.Fragment`. React.Fragment can only have `key` and `children` props.", n), A(null);
            break;
          }
        }
        e.ref !== null && (A(e), h("Invalid attribute `ref` supplied to `React.Fragment`."), A(null));
      }
    }
    function Oe(e, r, t, n, s, c) {
      {
        var i = Ne(e);
        if (!i) {
          var o = "";
          (e === void 0 || typeof e == "object" && e !== null && Object.keys(e).length === 0) && (o += " You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports.");
          var y = or();
          y ? o += y : o += Ce();
          var l;
          e === null ? l = "null" : ee(e) ? l = "array" : e !== void 0 && e.$$typeof === E ? (l = "<" + (x(e.type) || "Unknown") + " />", o = " Did you accidentally export a JSX literal instead of a component?") : l = typeof e, h("React.jsx: type is invalid -- expected a string (for built-in components) or a class/function (for composite components) but got: %s.%s", l, o);
        }
        var f = ar(e, r, t, s, c);
        if (f == null)
          return f;
        if (i) {
          var C = r.children;
          if (C !== void 0)
            if (n)
              if (ee(C)) {
                for (var $ = 0; $ < C.length; $++)
                  ke(C[$], e);
                Object.freeze && Object.freeze(C);
              } else
                h("React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead.");
            else
              ke(C, e);
        }
        return e === g ? cr(f) : sr(f), f;
      }
    }
    function ur(e, r, t) {
      return Oe(e, r, t, !0);
    }
    function lr(e, r, t) {
      return Oe(e, r, t, !1);
    }
    var fr = lr, dr = ur;
    V.Fragment = g, V.jsx = fr, V.jsxs = dr;
  }()), V;
}
process.env.NODE_ENV === "production" ? oe.exports = yr() : oe.exports = Er();
var M = oe.exports;
let p;
const z = /* @__PURE__ */ new Set(), K = /* @__PURE__ */ new Set(), d = {
  getState() {
    let a;
    switch (p == null ? void 0 : p.readyState) {
      case WebSocket.CLOSED: {
        a = "disconnected";
        break;
      }
      case WebSocket.OPEN: {
        a = "connected";
        break;
      }
      case WebSocket.CONNECTING: {
        a = "connecting";
        break;
      }
      case WebSocket.CLOSING: {
        a = "disconnecting";
        break;
      }
      default: {
        a = "disconnected";
        break;
      }
    }
    return a;
  },
  subscribe(a) {
    return K.add(a), () => {
      K.delete(a);
    };
  },
  unsubscribe(a) {
    K.delete(a);
  },
  notify() {
    K.forEach((a) => a());
  },
  send(a, E) {
    const m = this.getState();
    p && m === "connected" ? p.send(JSON.stringify({ name: a, body: E })) : console.warn(`Cannot send '${a}' while in '${m}' state`);
  },
  connect(a) {
    if (this.getState() === "disconnected") {
      const E = () => {
        console.log("notify for open"), this.notify();
      }, m = (O) => {
        const w = JSON.parse(O.data.toString());
        z.size > 0 ? z.forEach((S) => S(w)) : console.warn(
          "No callback to handle WebSocket message",
          w
        );
      }, g = () => {
        p && (p.onopen = null, p.onmessage = null, p.onclose = null, p.onerror = null), console.log("notify for close"), this.notify();
      }, k = () => {
        console.error("WebSocket error");
      };
      p = new WebSocket(`ws://${a}/`, []), this.notify(), p.onopen = E, p.onmessage = m, p.onclose = g, p.onerror = k;
    } else
      console.error(`Cannot connect while in '${this.getState()}' state`);
  },
  disconnect() {
    p && this.getState() === "connected" && (p.close(3e3, "Disconnected by user"), this.notify());
  },
  addMessageListener(a) {
    z.add(a);
  },
  removeMessageListener(a) {
    z.delete(a);
  }
}, De = vr({
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
}), _r = ({
  address: a = "127.0.0.1:9001",
  children: E
}) => {
  const m = br(
    d.subscribe,
    d.getState
  ), g = I(() => {
    const u = d.getState();
    let v;
    switch (u) {
      case "connected": {
        v = Promise.resolve();
        break;
      }
      case "disconnected": {
        v = new Promise((R, T) => {
          const _ = () => {
            const P = d.getState();
            P === "connected" ? (d.unsubscribe(_), R()) : P === "disconnected" && (d.unsubscribe(_), T());
          };
          d.subscribe(_), d.connect(a);
        });
        break;
      }
      case "connecting": {
        v = new Promise((R, T) => {
          const _ = () => {
            const P = d.getState();
            P === "connected" ? (d.unsubscribe(_), R()) : P === "disconnected" && (d.unsubscribe(_), T());
          };
          d.subscribe(_);
        });
        break;
      }
      default: {
        v = Promise.reject(
          new Error(`Cannot connect while in '${u}' state`)
        );
        break;
      }
    }
    return v;
  }, [a]), k = I(() => {
    d.disconnect();
  }, []), O = I((u) => {
    d.addMessageListener(u);
  }, []), w = I((u) => {
    d.removeMessageListener(u);
  }, []), S = I((u, v) => {
    d.send(u, v);
  }, []), b = I(
    (u, v, R) => new Promise((T) => {
      const _ = ({
        name: P,
        body: H
      }) => {
        P === R && (d.removeMessageListener(_), T(H));
      };
      d.addMessageListener(_), d.send(u, v);
    }),
    []
  ), W = pr(
    () => ({
      state: m,
      connect: g,
      disconnect: k,
      subscribe: O,
      unsubscribe: w,
      send: S,
      sendWithReply: b
    }),
    [
      m,
      g,
      k,
      O,
      w,
      S,
      b
    ]
  );
  return gr(() => () => {
    d.disconnect();
  }, [a]), /* @__PURE__ */ M.jsx(De.Provider, { value: W, children: E });
}, mr = () => {
  const a = hr(De);
  if (!a)
    throw new Error("useWebSocket must be used within a WebSocketProvider");
  return a;
}, Sr = () => {
  const { state: a, connect: E, disconnect: m } = mr();
  let g;
  return a === "connected" ? g = /* @__PURE__ */ M.jsxs("div", { children: [
    "Connected to multiplayer server",
    " ",
    /* @__PURE__ */ M.jsx("button", { onClick: () => m(), children: "Disconnect" })
  ] }) : a === "connecting" ? g = /* @__PURE__ */ M.jsx("div", { children: "Connecting to multiplayer server..." }) : a === "disconnected" && (g = /* @__PURE__ */ M.jsxs("div", { children: [
    "Not connected to multiplayer server",
    " ",
    /* @__PURE__ */ M.jsx("button", { onClick: () => E(), children: "Connect" })
  ] })), g;
};
export {
  Sr as WebSocketConnectionState,
  _r as WebSocketProvider,
  mr as useWebSocket
};
