import tn, { createContext as he, useSyncExternalStore as rn, useCallback as w, useMemo as pe, useEffect as X, useContext as me, useState as V } from "react";
var ue = { exports: {} }, re = {};
var Qe;
function Fn() {
  if (Qe) return re;
  Qe = 1;
  var n = tn, r = /* @__PURE__ */ Symbol.for("react.element"), s = /* @__PURE__ */ Symbol.for("react.fragment"), i = Object.prototype.hasOwnProperty, m = n.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner, E = { key: !0, ref: !0, __self: !0, __source: !0 };
  function l(b, h, _) {
    var a, c = {}, d = null, y = null;
    _ !== void 0 && (d = "" + _), h.key !== void 0 && (d = "" + h.key), h.ref !== void 0 && (y = h.ref);
    for (a in h) i.call(h, a) && !E.hasOwnProperty(a) && (c[a] = h[a]);
    if (b && b.defaultProps) for (a in h = b.defaultProps, h) c[a] === void 0 && (c[a] = h[a]);
    return { $$typeof: r, type: b, key: d, ref: y, props: c, _owner: m.current };
  }
  return re.Fragment = s, re.jsx = l, re.jsxs = l, re;
}
var oe = {};
var en;
function An() {
  return en || (en = 1, process.env.NODE_ENV !== "production" && (function() {
    var n = tn, r = /* @__PURE__ */ Symbol.for("react.element"), s = /* @__PURE__ */ Symbol.for("react.portal"), i = /* @__PURE__ */ Symbol.for("react.fragment"), m = /* @__PURE__ */ Symbol.for("react.strict_mode"), E = /* @__PURE__ */ Symbol.for("react.profiler"), l = /* @__PURE__ */ Symbol.for("react.provider"), b = /* @__PURE__ */ Symbol.for("react.context"), h = /* @__PURE__ */ Symbol.for("react.forward_ref"), _ = /* @__PURE__ */ Symbol.for("react.suspense"), a = /* @__PURE__ */ Symbol.for("react.suspense_list"), c = /* @__PURE__ */ Symbol.for("react.memo"), d = /* @__PURE__ */ Symbol.for("react.lazy"), y = /* @__PURE__ */ Symbol.for("react.offscreen"), R = Symbol.iterator, x = "@@iterator";
    function k(e) {
      if (e === null || typeof e != "object")
        return null;
      var t = R && e[R] || e[x];
      return typeof t == "function" ? t : null;
    }
    var v = n.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
    function u(e) {
      {
        for (var t = arguments.length, o = new Array(t > 1 ? t - 1 : 0), f = 1; f < t; f++)
          o[f - 1] = arguments[f];
        L("error", e, o);
      }
    }
    function L(e, t, o) {
      {
        var f = v.ReactDebugCurrentFrame, S = f.getStackAddendum();
        S !== "" && (t += "%s", o = o.concat([S]));
        var P = o.map(function(C) {
          return String(C);
        });
        P.unshift("Warning: " + t), Function.prototype.apply.call(console[e], console, P);
      }
    }
    var $ = !1, H = !1, q = !1, Q = !1, ae = !1, ee;
    ee = /* @__PURE__ */ Symbol.for("react.module.reference");
    function O(e) {
      return !!(typeof e == "string" || typeof e == "function" || e === i || e === E || ae || e === m || e === _ || e === a || Q || e === y || $ || H || q || typeof e == "object" && e !== null && (e.$$typeof === d || e.$$typeof === c || e.$$typeof === l || e.$$typeof === b || e.$$typeof === h || // This needs to include all possible module reference object
      // types supported by any Flight configuration anywhere since
      // we don't know which Flight build this will end up being used
      // with.
      e.$$typeof === ee || e.getModuleId !== void 0));
    }
    function T(e, t, o) {
      var f = e.displayName;
      if (f)
        return f;
      var S = t.displayName || t.name || "";
      return S !== "" ? o + "(" + S + ")" : o;
    }
    function N(e) {
      return e.displayName || "Context";
    }
    function F(e) {
      if (e == null)
        return null;
      if (typeof e.tag == "number" && u("Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."), typeof e == "function")
        return e.displayName || e.name || null;
      if (typeof e == "string")
        return e;
      switch (e) {
        case i:
          return "Fragment";
        case s:
          return "Portal";
        case E:
          return "Profiler";
        case m:
          return "StrictMode";
        case _:
          return "Suspense";
        case a:
          return "SuspenseList";
      }
      if (typeof e == "object")
        switch (e.$$typeof) {
          case b:
            var t = e;
            return N(t) + ".Consumer";
          case l:
            var o = e;
            return N(o._context) + ".Provider";
          case h:
            return T(e, e.render, "ForwardRef");
          case c:
            var f = e.displayName || null;
            return f !== null ? f : F(e.type) || "Memo";
          case d: {
            var S = e, P = S._payload, C = S._init;
            try {
              return F(C(P));
            } catch {
              return null;
            }
          }
        }
      return null;
    }
    var Y = Object.assign, ne = 0, Te, Oe, De, Le, Me, We, $e;
    function Fe() {
    }
    Fe.__reactDisabledLog = !0;
    function dn() {
      {
        if (ne === 0) {
          Te = console.log, Oe = console.info, De = console.warn, Le = console.error, Me = console.group, We = console.groupCollapsed, $e = console.groupEnd;
          var e = {
            configurable: !0,
            enumerable: !0,
            value: Fe,
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
    function un() {
      {
        if (ne--, ne === 0) {
          var e = {
            configurable: !0,
            enumerable: !0,
            writable: !0
          };
          Object.defineProperties(console, {
            log: Y({}, e, {
              value: Te
            }),
            info: Y({}, e, {
              value: Oe
            }),
            warn: Y({}, e, {
              value: De
            }),
            error: Y({}, e, {
              value: Le
            }),
            group: Y({}, e, {
              value: Me
            }),
            groupCollapsed: Y({}, e, {
              value: We
            }),
            groupEnd: Y({}, e, {
              value: $e
            })
          });
        }
        ne < 0 && u("disabledDepth fell below zero. This is a bug in React. Please file an issue.");
      }
    }
    var ge = v.ReactCurrentDispatcher, Ce;
    function ie(e, t, o) {
      {
        if (Ce === void 0)
          try {
            throw Error();
          } catch (S) {
            var f = S.stack.trim().match(/\n( *(at )?)/);
            Ce = f && f[1] || "";
          }
        return `
` + Ce + e;
      }
    }
    var Re = !1, ce;
    {
      var fn = typeof WeakMap == "function" ? WeakMap : Map;
      ce = new fn();
    }
    function Ae(e, t) {
      if (!e || Re)
        return "";
      {
        var o = ce.get(e);
        if (o !== void 0)
          return o;
      }
      var f;
      Re = !0;
      var S = Error.prepareStackTrace;
      Error.prepareStackTrace = void 0;
      var P;
      P = ge.current, ge.current = null, dn();
      try {
        if (t) {
          var C = function() {
            throw Error();
          };
          if (Object.defineProperty(C.prototype, "props", {
            set: function() {
              throw Error();
            }
          }), typeof Reflect == "object" && Reflect.construct) {
            try {
              Reflect.construct(C, []);
            } catch (G) {
              f = G;
            }
            Reflect.construct(e, [], C);
          } else {
            try {
              C.call();
            } catch (G) {
              f = G;
            }
            e.call(C.prototype);
          }
        } else {
          try {
            throw Error();
          } catch (G) {
            f = G;
          }
          e();
        }
      } catch (G) {
        if (G && f && typeof G.stack == "string") {
          for (var g = G.stack.split(`
`), A = f.stack.split(`
`), D = g.length - 1, M = A.length - 1; D >= 1 && M >= 0 && g[D] !== A[M]; )
            M--;
          for (; D >= 1 && M >= 0; D--, M--)
            if (g[D] !== A[M]) {
              if (D !== 1 || M !== 1)
                do
                  if (D--, M--, M < 0 || g[D] !== A[M]) {
                    var J = `
` + g[D].replace(" at new ", " at ");
                    return e.displayName && J.includes("<anonymous>") && (J = J.replace("<anonymous>", e.displayName)), typeof e == "function" && ce.set(e, J), J;
                  }
                while (D >= 1 && M >= 0);
              break;
            }
        }
      } finally {
        Re = !1, ge.current = P, un(), Error.prepareStackTrace = S;
      }
      var K = e ? e.displayName || e.name : "", B = K ? ie(K) : "";
      return typeof e == "function" && ce.set(e, B), B;
    }
    function vn(e, t, o) {
      return Ae(e, !1);
    }
    function yn(e) {
      var t = e.prototype;
      return !!(t && t.isReactComponent);
    }
    function le(e, t, o) {
      if (e == null)
        return "";
      if (typeof e == "function")
        return Ae(e, yn(e));
      if (typeof e == "string")
        return ie(e);
      switch (e) {
        case _:
          return ie("Suspense");
        case a:
          return ie("SuspenseList");
      }
      if (typeof e == "object")
        switch (e.$$typeof) {
          case h:
            return vn(e.render);
          case c:
            return le(e.type, t, o);
          case d: {
            var f = e, S = f._payload, P = f._init;
            try {
              return le(P(S), t, o);
            } catch {
            }
          }
        }
      return "";
    }
    var te = Object.prototype.hasOwnProperty, Ie = {}, Ge = v.ReactDebugCurrentFrame;
    function de(e) {
      if (e) {
        var t = e._owner, o = le(e.type, e._source, t ? t.type : null);
        Ge.setExtraStackFrame(o);
      } else
        Ge.setExtraStackFrame(null);
    }
    function bn(e, t, o, f, S) {
      {
        var P = Function.call.bind(te);
        for (var C in e)
          if (P(e, C)) {
            var g = void 0;
            try {
              if (typeof e[C] != "function") {
                var A = Error((f || "React class") + ": " + o + " type `" + C + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof e[C] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.");
                throw A.name = "Invariant Violation", A;
              }
              g = e[C](t, C, f, o, null, "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED");
            } catch (D) {
              g = D;
            }
            g && !(g instanceof Error) && (de(S), u("%s: type specification of %s `%s` is invalid; the type checker function must return `null` or an `Error` but returned a %s. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).", f || "React class", o, C, typeof g), de(null)), g instanceof Error && !(g.message in Ie) && (Ie[g.message] = !0, de(S), u("Failed %s type: %s", o, g.message), de(null));
          }
      }
    }
    var hn = Array.isArray;
    function Ee(e) {
      return hn(e);
    }
    function pn(e) {
      {
        var t = typeof Symbol == "function" && Symbol.toStringTag, o = t && e[Symbol.toStringTag] || e.constructor.name || "Object";
        return o;
      }
    }
    function mn(e) {
      try {
        return Ne(e), !1;
      } catch {
        return !0;
      }
    }
    function Ne(e) {
      return "" + e;
    }
    function Ye(e) {
      if (mn(e))
        return u("The provided key is an unsupported type %s. This value must be coerced to a string before before using it here.", pn(e)), Ne(e);
    }
    var Je = v.ReactCurrentOwner, gn = {
      key: !0,
      ref: !0,
      __self: !0,
      __source: !0
    }, Ue, Ve;
    function Cn(e) {
      if (te.call(e, "ref")) {
        var t = Object.getOwnPropertyDescriptor(e, "ref").get;
        if (t && t.isReactWarning)
          return !1;
      }
      return e.ref !== void 0;
    }
    function Rn(e) {
      if (te.call(e, "key")) {
        var t = Object.getOwnPropertyDescriptor(e, "key").get;
        if (t && t.isReactWarning)
          return !1;
      }
      return e.key !== void 0;
    }
    function En(e, t) {
      typeof e.ref == "string" && Je.current;
    }
    function wn(e, t) {
      {
        var o = function() {
          Ue || (Ue = !0, u("%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", t));
        };
        o.isReactWarning = !0, Object.defineProperty(e, "key", {
          get: o,
          configurable: !0
        });
      }
    }
    function Sn(e, t) {
      {
        var o = function() {
          Ve || (Ve = !0, u("%s: `ref` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", t));
        };
        o.isReactWarning = !0, Object.defineProperty(e, "ref", {
          get: o,
          configurable: !0
        });
      }
    }
    var xn = function(e, t, o, f, S, P, C) {
      var g = {
        // This tag allows us to uniquely identify this as a React Element
        $$typeof: r,
        // Built-in properties that belong on the element
        type: e,
        key: t,
        ref: o,
        props: C,
        // Record the component responsible for creating this element.
        _owner: P
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
        value: f
      }), Object.defineProperty(g, "_source", {
        configurable: !1,
        enumerable: !1,
        writable: !1,
        value: S
      }), Object.freeze && (Object.freeze(g.props), Object.freeze(g)), g;
    };
    function Pn(e, t, o, f, S) {
      {
        var P, C = {}, g = null, A = null;
        o !== void 0 && (Ye(o), g = "" + o), Rn(t) && (Ye(t.key), g = "" + t.key), Cn(t) && (A = t.ref, En(t, S));
        for (P in t)
          te.call(t, P) && !gn.hasOwnProperty(P) && (C[P] = t[P]);
        if (e && e.defaultProps) {
          var D = e.defaultProps;
          for (P in D)
            C[P] === void 0 && (C[P] = D[P]);
        }
        if (g || A) {
          var M = typeof e == "function" ? e.displayName || e.name || "Unknown" : e;
          g && wn(C, M), A && Sn(C, M);
        }
        return xn(e, g, A, S, f, Je.current, C);
      }
    }
    var we = v.ReactCurrentOwner, He = v.ReactDebugCurrentFrame;
    function z(e) {
      if (e) {
        var t = e._owner, o = le(e.type, e._source, t ? t.type : null);
        He.setExtraStackFrame(o);
      } else
        He.setExtraStackFrame(null);
    }
    var Se;
    Se = !1;
    function xe(e) {
      return typeof e == "object" && e !== null && e.$$typeof === r;
    }
    function qe() {
      {
        if (we.current) {
          var e = F(we.current.type);
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
    var Be = {};
    function _n(e) {
      {
        var t = qe();
        if (!t) {
          var o = typeof e == "string" ? e : e.displayName || e.name;
          o && (t = `

Check the top-level render call using <` + o + ">.");
        }
        return t;
      }
    }
    function ze(e, t) {
      {
        if (!e._store || e._store.validated || e.key != null)
          return;
        e._store.validated = !0;
        var o = _n(t);
        if (Be[o])
          return;
        Be[o] = !0;
        var f = "";
        e && e._owner && e._owner !== we.current && (f = " It was passed a child from " + F(e._owner.type) + "."), z(e), u('Each child in a list should have a unique "key" prop.%s%s See https://reactjs.org/link/warning-keys for more information.', o, f), z(null);
      }
    }
    function Ke(e, t) {
      {
        if (typeof e != "object")
          return;
        if (Ee(e))
          for (var o = 0; o < e.length; o++) {
            var f = e[o];
            xe(f) && ze(f, t);
          }
        else if (xe(e))
          e._store && (e._store.validated = !0);
        else if (e) {
          var S = k(e);
          if (typeof S == "function" && S !== e.entries)
            for (var P = S.call(e), C; !(C = P.next()).done; )
              xe(C.value) && ze(C.value, t);
        }
      }
    }
    function kn(e) {
      {
        var t = e.type;
        if (t == null || typeof t == "string")
          return;
        var o;
        if (typeof t == "function")
          o = t.propTypes;
        else if (typeof t == "object" && (t.$$typeof === h || // Note: Memo only checks outer props here.
        // Inner props are checked in the reconciler.
        t.$$typeof === c))
          o = t.propTypes;
        else
          return;
        if (o) {
          var f = F(t);
          bn(o, e.props, "prop", f, e);
        } else if (t.PropTypes !== void 0 && !Se) {
          Se = !0;
          var S = F(t);
          u("Component %s declared `PropTypes` instead of `propTypes`. Did you misspell the property assignment?", S || "Unknown");
        }
        typeof t.getDefaultProps == "function" && !t.getDefaultProps.isReactClassApproved && u("getDefaultProps is only used on classic React.createClass definitions. Use a static property named `defaultProps` instead.");
      }
    }
    function Tn(e) {
      {
        for (var t = Object.keys(e.props), o = 0; o < t.length; o++) {
          var f = t[o];
          if (f !== "children" && f !== "key") {
            z(e), u("Invalid prop `%s` supplied to `React.Fragment`. React.Fragment can only have `key` and `children` props.", f), z(null);
            break;
          }
        }
        e.ref !== null && (z(e), u("Invalid attribute `ref` supplied to `React.Fragment`."), z(null));
      }
    }
    var Xe = {};
    function Ze(e, t, o, f, S, P) {
      {
        var C = O(e);
        if (!C) {
          var g = "";
          (e === void 0 || typeof e == "object" && e !== null && Object.keys(e).length === 0) && (g += " You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports.");
          var A = jn();
          A ? g += A : g += qe();
          var D;
          e === null ? D = "null" : Ee(e) ? D = "array" : e !== void 0 && e.$$typeof === r ? (D = "<" + (F(e.type) || "Unknown") + " />", g = " Did you accidentally export a JSX literal instead of a component?") : D = typeof e, u("React.jsx: type is invalid -- expected a string (for built-in components) or a class/function (for composite components) but got: %s.%s", D, g);
        }
        var M = Pn(e, t, o, S, P);
        if (M == null)
          return M;
        if (C) {
          var J = t.children;
          if (J !== void 0)
            if (f)
              if (Ee(J)) {
                for (var K = 0; K < J.length; K++)
                  Ke(J[K], e);
                Object.freeze && Object.freeze(J);
              } else
                u("React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead.");
            else
              Ke(J, e);
        }
        if (te.call(t, "key")) {
          var B = F(e), G = Object.keys(t).filter(function($n) {
            return $n !== "key";
          }), Pe = G.length > 0 ? "{key: someKey, " + G.join(": ..., ") + ": ...}" : "{key: someKey}";
          if (!Xe[B + Pe]) {
            var Wn = G.length > 0 ? "{" + G.join(": ..., ") + ": ...}" : "{}";
            u(`A props object containing a "key" prop is being spread into JSX:
  let props = %s;
  <%s {...props} />
React keys must be passed directly to JSX without using spread:
  let props = %s;
  <%s key={someKey} {...props} />`, Pe, B, Wn, B), Xe[B + Pe] = !0;
          }
        }
        return e === i ? Tn(M) : kn(M), M;
      }
    }
    function On(e, t, o) {
      return Ze(e, t, o, !0);
    }
    function Dn(e, t, o) {
      return Ze(e, t, o, !1);
    }
    var Ln = Dn, Mn = On;
    oe.Fragment = i, oe.jsx = Ln, oe.jsxs = Mn;
  })()), oe;
}
var nn;
function In() {
  return nn || (nn = 1, process.env.NODE_ENV === "production" ? ue.exports = Fn() : ue.exports = An()), ue.exports;
}
var p = In();
let I;
const fe = /* @__PURE__ */ new Set(), ve = /* @__PURE__ */ new Set(), W = {
  getState() {
    let n;
    switch (I?.readyState) {
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
    const s = this.getState();
    I && s === "connected" ? I.send(JSON.stringify({ name: n, body: r })) : console.warn(`Cannot send '${n}' while in '${s}' state`);
  },
  connect(n) {
    if (this.getState() === "disconnected") {
      const r = () => {
        console.log("notify for open"), this.notify();
      }, s = (E) => {
        const l = JSON.parse(E.data.toString());
        fe.size > 0 ? fe.forEach((b) => b(l)) : console.warn(
          "No callback to handle WebSocket message",
          l
        );
      }, i = () => {
        I && (I.onopen = null, I.onmessage = null, I.onclose = null, I.onerror = null), console.log("notify for close"), this.notify();
      }, m = () => {
        console.error("WebSocket error");
      };
      I = new WebSocket(`ws://${n}/`, []), this.notify(), I.onopen = r, I.onmessage = s, I.onclose = i, I.onerror = m;
    } else
      console.error(`Cannot connect while in '${this.getState()}' state`);
  },
  disconnect() {
    I && this.getState() === "connected" && (I.close(3e3, "Disconnected by user"), this.notify());
  },
  addMessageListener(n) {
    fe.add(n);
  },
  removeMessageListener(n) {
    fe.delete(n);
  }
}, on = he({
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
  const s = rn(
    W.subscribe,
    W.getState
  ), i = w(() => {
    const a = W.getState();
    let c;
    switch (a) {
      case "connected": {
        c = Promise.resolve();
        break;
      }
      case "disconnected": {
        c = new Promise((d, y) => {
          const R = () => {
            const x = W.getState();
            x === "connected" ? (W.unsubscribe(R), d()) : x === "disconnected" && (W.unsubscribe(R), y());
          };
          W.subscribe(R), W.connect(n);
        });
        break;
      }
      case "connecting": {
        c = new Promise((d, y) => {
          const R = () => {
            const x = W.getState();
            x === "connected" ? (W.unsubscribe(R), d()) : x === "disconnected" && (W.unsubscribe(R), y());
          };
          W.subscribe(R);
        });
        break;
      }
      default: {
        c = Promise.reject(
          new Error(`Cannot connect while in '${a}' state`)
        );
        break;
      }
    }
    return c;
  }, [n]), m = w(() => {
    W.disconnect();
  }, []), E = w((a) => {
    W.addMessageListener(a);
  }, []), l = w((a) => {
    W.removeMessageListener(a);
  }, []), b = w((a, c) => {
    W.send(a, c);
  }, []), h = w(
    (a, c, d) => new Promise((y) => {
      const R = ({
        name: x,
        body: k
      }) => {
        x === d && (W.removeMessageListener(R), y(k));
      };
      W.addMessageListener(R), W.send(a, c);
    }),
    []
  ), _ = pe(
    () => ({
      state: s,
      connect: i,
      disconnect: m,
      subscribe: E,
      unsubscribe: l,
      send: b,
      sendWithReply: h
    }),
    [
      s,
      i,
      m,
      E,
      l,
      b,
      h
    ]
  );
  return X(() => () => {
    W.disconnect();
  }, [n]), /* @__PURE__ */ p.jsx(on.Provider, { value: _, children: r });
}, Z = () => {
  const n = me(on);
  if (!n)
    throw new Error("useWebSocket must be used within a WebSocketProvider");
  return n;
}, Kn = () => {
  const { state: n, connect: r, disconnect: s } = Z();
  let i;
  return n === "connected" ? i = /* @__PURE__ */ p.jsxs("div", { children: [
    "Connected to multiplayer server",
    " ",
    /* @__PURE__ */ p.jsx("button", { onClick: () => s(), children: "Disconnect" })
  ] }) : n === "connecting" ? i = /* @__PURE__ */ p.jsx("div", { children: "Connecting to multiplayer server..." }) : n === "disconnected" && (i = /* @__PURE__ */ p.jsxs("div", { children: [
    "Not connected to multiplayer server",
    " ",
    /* @__PURE__ */ p.jsx("button", { onClick: () => r(), children: "Connect" })
  ] })), i;
};
function se(...n) {
  throw new Error(...n);
}
var je;
(function(n) {
  n[n.Open = 0] = "Open", n[n.Locked = 1] = "Locked", n[n.Complete = 2] = "Complete", n[n.Closed = 3] = "Closed";
})(je || (je = {}));
const Gn = async (n, r = 1e4) => {
  let i = 0;
  return new Promise((m, E) => {
    const l = () => {
      i += 250, n() ? m(n()) : i < r ? window.setTimeout(l, 250) : E();
    };
    l();
  });
};
let j = {};
const ye = /* @__PURE__ */ new Set(), be = /* @__PURE__ */ new Set(), U = {
  getConnections() {
    return j;
  },
  find(n) {
    return j[n];
  },
  subscribe(n) {
    return be.add(n), () => {
      be.delete(n);
    };
  },
  notify() {
    be.forEach((n) => n());
  },
  sendTo(n, r) {
    const s = j[n];
    s && s.dc?.send(JSON.stringify(r));
  },
  sendToAll(n) {
    Object.entries(j).forEach(
      ([r, s]) => s.dc?.send(JSON.stringify(n))
    );
  },
  setMessageCallback(n) {
    ye.add(n);
  },
  removeMessageCallback(n) {
    ye.delete(n);
  },
  addConnection(n, r, s) {
    j = {
      ...j,
      [n]: { ...j[n], pc: r, dc: s, status: "connecting" }
    }, s && this.listenToDataChannel(n, s), this.notify();
  },
  setDataChannel(n, r) {
    j = {
      ...j,
      [n]: { ...j[n], dc: r }
    }, this.listenToDataChannel(n, r), this.notify();
  },
  listenToDataChannel(n, r) {
    j[n] && this.stopListeningToDataChannel(j[n]);
    const s = (l) => {
      console.debug("dc.open", l), j = {
        ...j,
        [n]: { ...j[n], status: "connected" }
      }, this.notify();
    }, i = (l) => {
      console.debug("dc.close", l), j = {
        ...j,
        [n]: { ...j[n], status: "disconnected" }
      }, this.notify();
    }, m = (l) => {
      console.debug("Received peer message", l.data);
      const b = JSON.parse(l.data.toString());
      ye.size > 0 ? ye.forEach((h) => h(n, b)) : console.warn("No callback to handle DataChannel message");
    }, E = (l) => {
      console.error(l);
    };
    r.addEventListener("open", s), r.addEventListener("close", i), r.addEventListener("message", m), r.addEventListener("error", E), j = {
      ...j,
      [n]: {
        ...j[n],
        eventHandlers: {
          onOpen: s,
          onClose: i,
          onMessage: m,
          onError: E
        }
      }
    };
  },
  stopListeningToDataChannel(n) {
    n?.dc && n?.eventHandlers && (n.dc.removeEventListener(
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
    if (n) {
      if (j[n]) {
        const r = j[n];
        this.stopListeningToDataChannel(r), r.dc?.close(), r.pc?.close(), delete j[n];
      }
    } else
      Object.entries(j).forEach(([r, s]) => {
        this.stopListeningToDataChannel(s), s.dc?.close(), s.pc?.close();
      }), j = {};
    be.forEach((r) => r());
  }
}, sn = he({
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
}), Xn = ({
  children: n
}) => {
  const r = rn(
    U.subscribe,
    U.getConnections
  ), s = w(
    async (a, c = "default") => {
      const d = new RTCPeerConnection(), y = d.createDataChannel(c, {
        protocol: "default"
      });
      console.debug("Creating RTC offer");
      const R = await d.createOffer({
        offerToReceiveAudio: !1,
        offerToReceiveVideo: !1
      });
      await d.setLocalDescription(R);
      const x = [], k = (v) => {
        v.candidate && x.push(v.candidate);
      };
      return d.addEventListener("icecandidate", k), await Gn(() => d.iceGatheringState === "complete"), d.removeEventListener("icecandidate", k), console.debug(`Setup connection for peer ${a}`), U.addConnection(a, d, y), console.debug("Completed offer", R, x), { offer: R, candidates: x };
    },
    []
  ), i = w(
    async (a, c) => {
      console.assert(
        c && "type" in c && c.type === "answer",
        "Invalid RTCSessionDescription for reply"
      );
      const d = U.find(a) ?? se(`Failed to get connection for peer ${a}`);
      return console.debug("Received reply", c), d.pc.setRemoteDescription(
        c
      );
    },
    []
  ), m = w(
    async (a, c) => {
      console.assert(
        a && "type" in a && a.type === "offer",
        "Invalid RTCSessionDescription for answer"
      );
      const d = new RTCPeerConnection();
      console.debug("Setup connection for host"), U.addConnection("host", d), d.addEventListener(
        "datachannel",
        (R) => {
          console.debug("pc.onDataChannel"), U.setDataChannel("host", R.channel);
        },
        { once: !0 }
      ), console.debug("Received offer", a, c), await d.setRemoteDescription(a), console.debug("Creating RTC answer");
      const y = await d.createAnswer();
      return await d.setLocalDescription(y), c && c.length > 0 && await Promise.allSettled(
        c.map(
          (R) => d.addIceCandidate(R)
        )
      ), console.debug("Completed answer", y), y;
    },
    []
  ), E = w((a, c, d) => {
    const y = {
      name: a,
      body: c
    };
    d ? U.sendTo(d, y) : U.sendToAll(y);
  }, []), l = w((a) => {
    U.setMessageCallback(a);
  }, []), b = w((a) => {
    U.removeMessageCallback(a);
  }, []), h = w((a) => {
    U.removeConnection(a);
  }, []), _ = pe(
    () => ({
      connections: r,
      offer: s,
      reply: i,
      answer: m,
      send: E,
      subscribe: l,
      unsubscribe: b,
      close: h
    }),
    [r, s, i, m, E, l, b, h]
  );
  return /* @__PURE__ */ p.jsx(sn.Provider, { value: _, children: n });
}, _e = () => {
  const n = me(sn);
  if (!n)
    throw new Error(
      "usePeerConnection must be used within a PeerConnectionContext"
    );
  return n;
}, Nn = ({
  remotePlayerId: n
}) => {
  const { player: r } = ke(), { connections: s } = _e();
  let i;
  if (r && r.id !== n)
    if (r.host)
      if (n)
        i = s[n];
      else {
        const m = Object.keys(s);
        m.length === 1 && (i = s[m[0]]);
      }
    else
      i = s.host;
  return i?.status;
}, Yn = ({ player: n }) => {
  const { send: r } = Z(), s = w(() => {
    r("player-change-ready-state", {
      id: n?.id,
      ready: !n?.ready
    });
  }, [r, n]);
  return /* @__PURE__ */ p.jsx(
    "input",
    {
      type: "checkbox",
      title: "Toggle ready",
      "aria-label": n.ready ? "Set ready" : "Set not ready",
      checked: n.ready,
      onChange: s
    }
  );
}, Jn = ({ player: n }) => n.ready ? "Ready" : "Not Ready", Un = ({
  localPlayer: n,
  player: r
}) => /* @__PURE__ */ p.jsxs(
  "div",
  {
    style: {
      display: "flex",
      flexDirection: "row",
      alignItems: "center"
    },
    children: [
      /* @__PURE__ */ p.jsxs("div", { style: { flexGrow: 1, textAlign: "left" }, children: [
        n?.id === r.id ? "*" : " ",
        r.name
      ] }),
      /* @__PURE__ */ p.jsx("div", { style: { paddingRight: 10 }, children: /* @__PURE__ */ p.jsx(Nn, { remotePlayerId: r.id }) }),
      /* @__PURE__ */ p.jsx("div", { children: n?.id === r.id ? /* @__PURE__ */ p.jsx(Yn, { player: r }) : /* @__PURE__ */ p.jsx(Jn, { player: r }) })
    ]
  },
  r.id
), Vn = ({
  localPlayerId: n,
  room: r,
  onJoinGame: s,
  onLeaveRoom: i
}) => {
  const { subscribe: m, unsubscribe: E, send: l } = Z(), [b, h] = V(r), { offer: _, reply: a, answer: c, close: d } = _e(), y = b?.players.find((v) => v.id === n) ?? se("Failed to find local player in Lobby Room"), R = b?.players && y?.host && b.players.length >= (b.options.minPlayers ?? 2) && b.players.every((v) => v.ready), x = w(() => {
    y?.host && l("player-start-game", {
      // FIXME should not be required
      id: y?.id
    });
  }, [l, y]), k = w(() => {
    l("player-leave-room", void 0), i();
  }, [l, i]);
  return X(() => {
    const ae = {
      "room-player-connected": async (O) => {
        if (console.debug(`Player joined room ${O.id}`), h((T) => ({
          ...T,
          players: [...T.players, O]
        })), y?.host) {
          const { offer: T, candidates: N } = await _(
            O.id
          );
          l("player-connect-to-peer", {
            peer: O.id,
            offer: T,
            candidates: N
          });
        }
      },
      "room-player-disconnected": (O) => {
        console.debug(`Player disconnected ${O.id}`), d(O.id), h((T) => ({
          ...T,
          players: T.players.filter(
            (N) => N.id !== O.id
          )
        }));
      },
      "room-player-ready-change": (O) => {
        h((T) => {
          const N = T.players.find(
            (Y) => Y.id === O.id
          );
          let F;
          if (N) {
            const Y = T.players.indexOf(N);
            F = { ...T, players: [...T.players] }, F.players[Y] = {
              ...F.players[Y],
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
        const F = await c(
          T,
          N
        );
        l("player-connect-to-host", {
          answer: F
        });
      },
      "room-player-rtc-answer": async ({
        id: O,
        sessionDescription: T
      }) => {
        console.debug(`Connect to peer reply (${O})`), await a(O, T);
      },
      "room-start-game": ({
        //@ts-expect-error ignore unused
        room: O,
        game: T
      }) => s(T),
      "room-closed": () => k()
    }, ee = ({
      name: O,
      body: T
    }) => {
      Object.keys(ae).includes(O) && ae[O](T);
    };
    return m(ee), () => {
      E(ee);
    };
  }, [
    y?.host,
    _,
    c,
    a,
    d,
    l,
    m,
    E,
    s,
    k
  ]), /* @__PURE__ */ p.jsxs("div", { children: [
    /* @__PURE__ */ p.jsxs("div", { children: [
      "Room ",
      b.name
    ] }),
    /* @__PURE__ */ p.jsx("div", { style: { minWidth: 400 }, children: b.players.map((v) => /* @__PURE__ */ p.jsx(
      Un,
      {
        localPlayer: y,
        player: v
      },
      v.id
    )) }),
    /* @__PURE__ */ p.jsxs("div", { children: [
      /* @__PURE__ */ p.jsx("button", { onClick: k, children: "Leave" }),
      y?.host && /* @__PURE__ */ p.jsx(
        "button",
        {
          disabled: !R,
          onClick: x,
          children: "Start"
        }
      )
    ] })
  ] });
}, Hn = ({
  room: n,
  onJoin: r
}) => {
  const s = n.state === je.Open && n.players.length < n.options.maxPlayers;
  return /* @__PURE__ */ p.jsxs(
    "div",
    {
      style: {
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        gap: 12
      },
      children: [
        /* @__PURE__ */ p.jsx("div", { style: { flexGrow: 1, textAlign: "left" }, children: n.name }),
        /* @__PURE__ */ p.jsxs("div", { children: [
          "Players: ",
          n.players.length
        ] }),
        /* @__PURE__ */ p.jsx("div", { children: /* @__PURE__ */ p.jsx("button", { onClick: () => r(n), disabled: !s, children: "Join" }) })
      ]
    }
  );
}, qn = ({
  onJoinRoom: n,
  onLeaveLobby: r
}) => {
  const { send: s, sendWithReply: i, subscribe: m, unsubscribe: E } = Z(), [l, b] = V([]), h = w(
    async (c = "MyGame", d = { maxPlayers: 4 }) => {
      const x = i(
        "player-host-game",
        {
          name: c,
          options: d,
          sessionDescription: void 0,
          iceCandidates: [],
          autoReady: !0
        },
        "player-host-game-reply"
      );
      return x.then((k) => {
        const v = k && "id" in k ? k : se("Failed to receive room from reply");
        n(v, !0);
      }), x;
    },
    [i, n]
  ), _ = w(
    async (c) => {
      const d = i(
        "player-join-room",
        {
          room: c.id,
          autoReady: !0
        },
        "player-join-room-reply"
      );
      return d.then((y) => {
        const R = y && "id" in y ? y : se("Failed to receive room from reply");
        n(R, !1);
      }), d;
    },
    [i, n]
  ), a = w(() => {
    s("player-leave-lobby", void 0), r();
  }, [s, r]);
  return X(() => {
    const x = {
      "lobby-player-connected": (v) => {
        console.debug(`Player ${v.name} connected to lobby`);
      },
      "lobby-player-disconnected": (v) => {
        console.debug(`Player ${v.name} disconnected from lobby`);
      },
      "lobby-room-created": (v) => {
        console.debug(`Room created ${v.id}`), b((u) => {
          let L = u;
          return u.find(($) => $.id === v.id) || (L = [...u, v]), L;
        });
      },
      "lobby-room-deleted": (v) => {
        console.debug(`Room deleted ${v.id}`), b((u) => u.filter((L) => L.id !== v.id));
      }
    };
    i(
      "player-list-players",
      { name },
      "player-list-players-reply"
      //@ts-expect-error player data is unused
    ).then((v) => {
    }), i(
      "player-list-rooms",
      { name },
      "player-list-rooms-reply"
    ).then((v) => {
      v && "rooms" in v && (console.log("Got rooms: ", v.rooms), b(v.rooms));
    });
    const k = ({
      name: v,
      body: u
    }) => {
      Object.keys(x).includes(v) && x[v](u);
    };
    return m(k), () => {
      E(k);
    };
  }, [i, m, E]), /* @__PURE__ */ p.jsxs("div", { children: [
    /* @__PURE__ */ p.jsxs(
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
          l.map((c) => /* @__PURE__ */ p.jsx(
            Hn,
            {
              room: c,
              onJoin: _
            },
            c.id
          )),
          l.length === 0 && /* @__PURE__ */ p.jsx("div", { children: "No games" })
        ]
      }
    ),
    /* @__PURE__ */ p.jsxs("div", { children: [
      /* @__PURE__ */ p.jsx("button", { onClick: () => h(), children: "Host" }),
      /* @__PURE__ */ p.jsx("button", { onClick: a, children: "Leave" })
    ] })
  ] });
}, Zn = () => {
  const { state: n } = Z(), {
    player: r,
    room: s,
    joinRoom: i,
    joinGame: m,
    leaveRoom: E,
    leaveLobby: l
  } = ke();
  console.debug("Lobby.render", status, s), X(() => {
    n === "disconnected" && l();
  }, [n, l]);
  let b;
  return s ? b = /* @__PURE__ */ p.jsx(
    Vn,
    {
      localPlayerId: r.id,
      room: s,
      onJoinGame: m,
      onLeaveRoom: E
    }
  ) : b = /* @__PURE__ */ p.jsx(qn, { onJoinRoom: i, onLeaveLobby: l }), b;
};
class an {
  id;
  name;
  ready;
  host;
  constructor(r, s) {
    this.id = r, this.name = s, this.ready = !1, this.host = !1;
  }
}
class Qn extends an {
}
class et extends an {
}
const cn = he({
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
}), nt = ({ children: n }) => {
  const { connect: r, sendWithReply: s } = Z(), [i, m] = V("main-menu"), [E, l] = V(), [b, h] = V(), [_, a] = V(), c = w(async () => {
    await r();
    const u = `BrowserPlayer${Math.floor(Math.random() * 100 + 1)}`, L = await s(
      "player-join-lobby",
      { name: u },
      "player-join-lobby-reply"
    ), $ = L && "id" in L ? L : se("Failed to receive player from reply");
    console.debug(`Player ${$.id}`), l($), m("lobby"), h(void 0), a(void 0);
  }, [s, r]), d = w(() => {
    m("main-menu"), h(void 0), a(void 0);
  }, []), y = w((u, L) => {
    h(u), a(void 0), l(($) => $ ? { ...$, host: L } : void 0);
  }, []), R = w(() => {
    m("lobby"), h(void 0), a(void 0);
  }, []), x = w((u) => {
    m("in-game"), h(void 0), a(u);
  }, []), k = w(() => {
    m("main-menu"), h(void 0), a(void 0);
  }, []), v = pe(
    () => ({
      state: i,
      player: E,
      room: b,
      game: _,
      setPlayer: l,
      joinLobby: c,
      leaveLobby: d,
      joinRoom: y,
      leaveRoom: R,
      joinGame: x,
      leaveGame: k
    }),
    [
      i,
      E,
      b,
      _,
      l,
      c,
      d,
      y,
      R,
      x,
      k
    ]
  );
  return /* @__PURE__ */ p.jsx(cn.Provider, { value: v, children: n });
}, ke = () => {
  const n = me(cn);
  if (!n)
    throw new Error(
      "useManager must be used within a ManagerContextProvider"
    );
  return n;
}, ln = he({
  state: "setup",
  name: "Unnamed",
  setup: () => {
  },
  ready: () => {
  },
  finish: () => {
  }
}), tt = ({ children: n }) => {
  const { player: r } = ke(), { connections: s, send: i, subscribe: m, unsubscribe: E } = _e(), [l, b] = V("setup"), [h] = V("Unnamed"), [_, a] = V(
    Object.keys(s).map((u) => ({
      id: u,
      state: "joining"
    }))
  ), c = w(
    (u) => {
      i("player-state-update", { state: u });
    },
    [i]
  ), d = w(
    (u) => {
      r?.host && (b(u), i("game-state-update", { state: u }));
    },
    [r, i]
  ), y = w(
    (u, L) => {
      const $ = _.find((q) => q.id === u)?.state;
      console.log(
        "Player",
        u,
        "state changed",
        $,
        "=>",
        L
      );
      const H = _.findIndex((q) => q.id === u);
      H !== -1 && a((q) => {
        const Q = [...q];
        return Q[H] = {
          id: u,
          state: L
        }, Q;
      });
    },
    [_]
  );
  X(() => {
    const u = (L, $) => {
      if (r?.host) {
        if ($.name === "player-state-update") {
          const H = $.body.state;
          y(L, H), H === "initializing" && (console.log("Send initial state to joined player"), i("game-update", {}, L));
        }
      } else
        $.name === "game-state-update" && b($.body.state);
    };
    return m(u), () => {
      E(u);
    };
  }, [r, m, E, y, i]), X(() => {
    r?.host && l === "setup" && _.every((u) => u.state === "ready") && (console.log("All players are now ready"), d("playing"));
  }, [r, l, _, d]);
  const R = w(() => {
    r?.host || c("initializing");
  }, [r, c]), x = w(() => {
    c("ready");
  }, [c]), k = w(() => {
    d("finished");
  }, [d]), v = pe(
    () => ({
      state: l,
      name: h,
      setup: R,
      ready: x,
      // pause,
      // unpause,
      finish: k
    }),
    [l, h, R, x, k]
  );
  return /* @__PURE__ */ p.jsx(ln.Provider, { value: v, children: n });
}, rt = () => {
  const n = me(ln);
  if (!n)
    throw new Error("useGame must be used within a GameContextProvider");
  return n;
};
export {
  ln as GameContext,
  tt as GameProvider,
  Zn as Lobby,
  Vn as LobbyRoom,
  Qn as LocalPlayer,
  cn as ManagerContext,
  nt as ManagerProvider,
  Xn as PeerConnectionProvider,
  Nn as PeerConnectionStatus,
  et as RemotePlayer,
  Kn as WebSocketConnectionState,
  zn as WebSocketProvider,
  rt as useGame,
  ke as useManager,
  _e as usePeerConnection,
  Z as useWebSocket
};
