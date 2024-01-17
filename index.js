function op(e) {
  return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default") ? e.default : e;
}
var vc = { exports: {} }, Uo = {}, yc = { exports: {} }, V = {};
/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var xi = Symbol.for("react.element"), sp = Symbol.for("react.portal"), ap = Symbol.for("react.fragment"), lp = Symbol.for("react.strict_mode"), up = Symbol.for("react.profiler"), cp = Symbol.for("react.provider"), dp = Symbol.for("react.context"), fp = Symbol.for("react.forward_ref"), pp = Symbol.for("react.suspense"), hp = Symbol.for("react.memo"), mp = Symbol.for("react.lazy"), Ql = Symbol.iterator;
function vp(e) {
  return e === null || typeof e != "object" ? null : (e = Ql && e[Ql] || e["@@iterator"], typeof e == "function" ? e : null);
}
var gc = { isMounted: function() {
  return !1;
}, enqueueForceUpdate: function() {
}, enqueueReplaceState: function() {
}, enqueueSetState: function() {
} }, wc = Object.assign, _c = {};
function yr(e, t, n) {
  this.props = e, this.context = t, this.refs = _c, this.updater = n || gc;
}
yr.prototype.isReactComponent = {};
yr.prototype.setState = function(e, t) {
  if (typeof e != "object" && typeof e != "function" && e != null)
    throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");
  this.updater.enqueueSetState(this, e, t, "setState");
};
yr.prototype.forceUpdate = function(e) {
  this.updater.enqueueForceUpdate(this, e, "forceUpdate");
};
function kc() {
}
kc.prototype = yr.prototype;
function Qa(e, t, n) {
  this.props = e, this.context = t, this.refs = _c, this.updater = n || gc;
}
var Ga = Qa.prototype = new kc();
Ga.constructor = Qa;
wc(Ga, yr.prototype);
Ga.isPureReactComponent = !0;
var Gl = Array.isArray, Sc = Object.prototype.hasOwnProperty, Ka = { current: null }, xc = { key: !0, ref: !0, __self: !0, __source: !0 };
function Ec(e, t, n) {
  var r, i = {}, o = null, s = null;
  if (t != null)
    for (r in t.ref !== void 0 && (s = t.ref), t.key !== void 0 && (o = "" + t.key), t)
      Sc.call(t, r) && !xc.hasOwnProperty(r) && (i[r] = t[r]);
  var a = arguments.length - 2;
  if (a === 1)
    i.children = n;
  else if (1 < a) {
    for (var l = Array(a), u = 0; u < a; u++)
      l[u] = arguments[u + 2];
    i.children = l;
  }
  if (e && e.defaultProps)
    for (r in a = e.defaultProps, a)
      i[r] === void 0 && (i[r] = a[r]);
  return { $$typeof: xi, type: e, key: o, ref: s, props: i, _owner: Ka.current };
}
function yp(e, t) {
  return { $$typeof: xi, type: e.type, key: t, ref: e.ref, props: e.props, _owner: e._owner };
}
function Xa(e) {
  return typeof e == "object" && e !== null && e.$$typeof === xi;
}
function gp(e) {
  var t = { "=": "=0", ":": "=2" };
  return "$" + e.replace(/[=:]/g, function(n) {
    return t[n];
  });
}
var Kl = /\/+/g;
function ds(e, t) {
  return typeof e == "object" && e !== null && e.key != null ? gp("" + e.key) : t.toString(36);
}
function Gi(e, t, n, r, i) {
  var o = typeof e;
  (o === "undefined" || o === "boolean") && (e = null);
  var s = !1;
  if (e === null)
    s = !0;
  else
    switch (o) {
      case "string":
      case "number":
        s = !0;
        break;
      case "object":
        switch (e.$$typeof) {
          case xi:
          case sp:
            s = !0;
        }
    }
  if (s)
    return s = e, i = i(s), e = r === "" ? "." + ds(s, 0) : r, Gl(i) ? (n = "", e != null && (n = e.replace(Kl, "$&/") + "/"), Gi(i, t, n, "", function(u) {
      return u;
    })) : i != null && (Xa(i) && (i = yp(i, n + (!i.key || s && s.key === i.key ? "" : ("" + i.key).replace(Kl, "$&/") + "/") + e)), t.push(i)), 1;
  if (s = 0, r = r === "" ? "." : r + ":", Gl(e))
    for (var a = 0; a < e.length; a++) {
      o = e[a];
      var l = r + ds(o, a);
      s += Gi(o, t, n, l, i);
    }
  else if (l = vp(e), typeof l == "function")
    for (e = l.call(e), a = 0; !(o = e.next()).done; )
      o = o.value, l = r + ds(o, a++), s += Gi(o, t, n, l, i);
  else if (o === "object")
    throw t = String(e), Error("Objects are not valid as a React child (found: " + (t === "[object Object]" ? "object with keys {" + Object.keys(e).join(", ") + "}" : t) + "). If you meant to render a collection of children, use an array instead.");
  return s;
}
function Pi(e, t, n) {
  if (e == null)
    return e;
  var r = [], i = 0;
  return Gi(e, r, "", "", function(o) {
    return t.call(n, o, i++);
  }), r;
}
function wp(e) {
  if (e._status === -1) {
    var t = e._result;
    t = t(), t.then(function(n) {
      (e._status === 0 || e._status === -1) && (e._status = 1, e._result = n);
    }, function(n) {
      (e._status === 0 || e._status === -1) && (e._status = 2, e._result = n);
    }), e._status === -1 && (e._status = 0, e._result = t);
  }
  if (e._status === 1)
    return e._result.default;
  throw e._result;
}
var Le = { current: null }, Ki = { transition: null }, _p = { ReactCurrentDispatcher: Le, ReactCurrentBatchConfig: Ki, ReactCurrentOwner: Ka };
V.Children = { map: Pi, forEach: function(e, t, n) {
  Pi(e, function() {
    t.apply(this, arguments);
  }, n);
}, count: function(e) {
  var t = 0;
  return Pi(e, function() {
    t++;
  }), t;
}, toArray: function(e) {
  return Pi(e, function(t) {
    return t;
  }) || [];
}, only: function(e) {
  if (!Xa(e))
    throw Error("React.Children.only expected to receive a single React element child.");
  return e;
} };
V.Component = yr;
V.Fragment = ap;
V.Profiler = up;
V.PureComponent = Qa;
V.StrictMode = lp;
V.Suspense = pp;
V.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = _p;
V.cloneElement = function(e, t, n) {
  if (e == null)
    throw Error("React.cloneElement(...): The argument must be a React element, but you passed " + e + ".");
  var r = wc({}, e.props), i = e.key, o = e.ref, s = e._owner;
  if (t != null) {
    if (t.ref !== void 0 && (o = t.ref, s = Ka.current), t.key !== void 0 && (i = "" + t.key), e.type && e.type.defaultProps)
      var a = e.type.defaultProps;
    for (l in t)
      Sc.call(t, l) && !xc.hasOwnProperty(l) && (r[l] = t[l] === void 0 && a !== void 0 ? a[l] : t[l]);
  }
  var l = arguments.length - 2;
  if (l === 1)
    r.children = n;
  else if (1 < l) {
    a = Array(l);
    for (var u = 0; u < l; u++)
      a[u] = arguments[u + 2];
    r.children = a;
  }
  return { $$typeof: xi, type: e.type, key: i, ref: o, props: r, _owner: s };
};
V.createContext = function(e) {
  return e = { $$typeof: dp, _currentValue: e, _currentValue2: e, _threadCount: 0, Provider: null, Consumer: null, _defaultValue: null, _globalName: null }, e.Provider = { $$typeof: cp, _context: e }, e.Consumer = e;
};
V.createElement = Ec;
V.createFactory = function(e) {
  var t = Ec.bind(null, e);
  return t.type = e, t;
};
V.createRef = function() {
  return { current: null };
};
V.forwardRef = function(e) {
  return { $$typeof: fp, render: e };
};
V.isValidElement = Xa;
V.lazy = function(e) {
  return { $$typeof: mp, _payload: { _status: -1, _result: e }, _init: wp };
};
V.memo = function(e, t) {
  return { $$typeof: hp, type: e, compare: t === void 0 ? null : t };
};
V.startTransition = function(e) {
  var t = Ki.transition;
  Ki.transition = {};
  try {
    e();
  } finally {
    Ki.transition = t;
  }
};
V.unstable_act = function() {
  throw Error("act(...) is not supported in production builds of React.");
};
V.useCallback = function(e, t) {
  return Le.current.useCallback(e, t);
};
V.useContext = function(e) {
  return Le.current.useContext(e);
};
V.useDebugValue = function() {
};
V.useDeferredValue = function(e) {
  return Le.current.useDeferredValue(e);
};
V.useEffect = function(e, t) {
  return Le.current.useEffect(e, t);
};
V.useId = function() {
  return Le.current.useId();
};
V.useImperativeHandle = function(e, t, n) {
  return Le.current.useImperativeHandle(e, t, n);
};
V.useInsertionEffect = function(e, t) {
  return Le.current.useInsertionEffect(e, t);
};
V.useLayoutEffect = function(e, t) {
  return Le.current.useLayoutEffect(e, t);
};
V.useMemo = function(e, t) {
  return Le.current.useMemo(e, t);
};
V.useReducer = function(e, t, n) {
  return Le.current.useReducer(e, t, n);
};
V.useRef = function(e) {
  return Le.current.useRef(e);
};
V.useState = function(e) {
  return Le.current.useState(e);
};
V.useSyncExternalStore = function(e, t, n) {
  return Le.current.useSyncExternalStore(e, t, n);
};
V.useTransition = function() {
  return Le.current.useTransition();
};
V.version = "18.2.0";
yc.exports = V;
var ue = yc.exports;
const Zo = /* @__PURE__ */ op(ue);
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var kp = ue, Sp = Symbol.for("react.element"), xp = Symbol.for("react.fragment"), Ep = Object.prototype.hasOwnProperty, Cp = kp.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner, Tp = { key: !0, ref: !0, __self: !0, __source: !0 };
function Cc(e, t, n) {
  var r, i = {}, o = null, s = null;
  n !== void 0 && (o = "" + n), t.key !== void 0 && (o = "" + t.key), t.ref !== void 0 && (s = t.ref);
  for (r in t)
    Ep.call(t, r) && !Tp.hasOwnProperty(r) && (i[r] = t[r]);
  if (e && e.defaultProps)
    for (r in t = e.defaultProps, t)
      i[r] === void 0 && (i[r] = t[r]);
  return { $$typeof: Sp, type: e, key: o, ref: s, props: i, _owner: Cp.current };
}
Uo.Fragment = xp;
Uo.jsx = Cc;
Uo.jsxs = Cc;
vc.exports = Uo;
var Z = vc.exports, Tc = { exports: {} }, Be = {}, Nc = { exports: {} }, Oc = {};
/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
(function(e) {
  function t(T, M) {
    var z = T.length;
    T.push(M);
    e:
      for (; 0 < z; ) {
        var Q = z - 1 >>> 1, K = T[Q];
        if (0 < i(K, M))
          T[Q] = M, T[z] = K, z = Q;
        else
          break e;
      }
  }
  function n(T) {
    return T.length === 0 ? null : T[0];
  }
  function r(T) {
    if (T.length === 0)
      return null;
    var M = T[0], z = T.pop();
    if (z !== M) {
      T[0] = z;
      e:
        for (var Q = 0, K = T.length, xt = K >>> 1; Q < xt; ) {
          var dt = 2 * (Q + 1) - 1, Wt = T[dt], ft = dt + 1, mn = T[ft];
          if (0 > i(Wt, z))
            ft < K && 0 > i(mn, Wt) ? (T[Q] = mn, T[ft] = z, Q = ft) : (T[Q] = Wt, T[dt] = z, Q = dt);
          else if (ft < K && 0 > i(mn, z))
            T[Q] = mn, T[ft] = z, Q = ft;
          else
            break e;
        }
    }
    return M;
  }
  function i(T, M) {
    var z = T.sortIndex - M.sortIndex;
    return z !== 0 ? z : T.id - M.id;
  }
  if (typeof performance == "object" && typeof performance.now == "function") {
    var o = performance;
    e.unstable_now = function() {
      return o.now();
    };
  } else {
    var s = Date, a = s.now();
    e.unstable_now = function() {
      return s.now() - a;
    };
  }
  var l = [], u = [], p = 1, h = null, m = 3, y = !1, w = !1, k = !1, F = typeof setTimeout == "function" ? setTimeout : null, d = typeof clearTimeout == "function" ? clearTimeout : null, c = typeof setImmediate < "u" ? setImmediate : null;
  typeof navigator < "u" && navigator.scheduling !== void 0 && navigator.scheduling.isInputPending !== void 0 && navigator.scheduling.isInputPending.bind(navigator.scheduling);
  function f(T) {
    for (var M = n(u); M !== null; ) {
      if (M.callback === null)
        r(u);
      else if (M.startTime <= T)
        r(u), M.sortIndex = M.expirationTime, t(l, M);
      else
        break;
      M = n(u);
    }
  }
  function v(T) {
    if (k = !1, f(T), !w)
      if (n(l) !== null)
        w = !0, zn(x);
      else {
        var M = n(u);
        M !== null && An(v, M.startTime - T);
      }
  }
  function x(T, M) {
    w = !1, k && (k = !1, d(E), E = -1), y = !0;
    var z = m;
    try {
      for (f(M), h = n(l); h !== null && (!(h.expirationTime > M) || T && !pe()); ) {
        var Q = h.callback;
        if (typeof Q == "function") {
          h.callback = null, m = h.priorityLevel;
          var K = Q(h.expirationTime <= M);
          M = e.unstable_now(), typeof K == "function" ? h.callback = K : h === n(l) && r(l), f(M);
        } else
          r(l);
        h = n(l);
      }
      if (h !== null)
        var xt = !0;
      else {
        var dt = n(u);
        dt !== null && An(v, dt.startTime - M), xt = !1;
      }
      return xt;
    } finally {
      h = null, m = z, y = !1;
    }
  }
  var S = !1, C = null, E = -1, Y = 5, D = -1;
  function pe() {
    return !(e.unstable_now() - D < Y);
  }
  function ct() {
    if (C !== null) {
      var T = e.unstable_now();
      D = T;
      var M = !0;
      try {
        M = C(!0, T);
      } finally {
        M ? Ve() : (S = !1, C = null);
      }
    } else
      S = !1;
  }
  var Ve;
  if (typeof c == "function")
    Ve = function() {
      c(ct);
    };
  else if (typeof MessageChannel < "u") {
    var he = new MessageChannel(), ls = he.port2;
    he.port1.onmessage = ct, Ve = function() {
      ls.postMessage(null);
    };
  } else
    Ve = function() {
      F(ct, 0);
    };
  function zn(T) {
    C = T, S || (S = !0, Ve());
  }
  function An(T, M) {
    E = F(function() {
      T(e.unstable_now());
    }, M);
  }
  e.unstable_IdlePriority = 5, e.unstable_ImmediatePriority = 1, e.unstable_LowPriority = 4, e.unstable_NormalPriority = 3, e.unstable_Profiling = null, e.unstable_UserBlockingPriority = 2, e.unstable_cancelCallback = function(T) {
    T.callback = null;
  }, e.unstable_continueExecution = function() {
    w || y || (w = !0, zn(x));
  }, e.unstable_forceFrameRate = function(T) {
    0 > T || 125 < T ? console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported") : Y = 0 < T ? Math.floor(1e3 / T) : 5;
  }, e.unstable_getCurrentPriorityLevel = function() {
    return m;
  }, e.unstable_getFirstCallbackNode = function() {
    return n(l);
  }, e.unstable_next = function(T) {
    switch (m) {
      case 1:
      case 2:
      case 3:
        var M = 3;
        break;
      default:
        M = m;
    }
    var z = m;
    m = M;
    try {
      return T();
    } finally {
      m = z;
    }
  }, e.unstable_pauseExecution = function() {
  }, e.unstable_requestPaint = function() {
  }, e.unstable_runWithPriority = function(T, M) {
    switch (T) {
      case 1:
      case 2:
      case 3:
      case 4:
      case 5:
        break;
      default:
        T = 3;
    }
    var z = m;
    m = T;
    try {
      return M();
    } finally {
      m = z;
    }
  }, e.unstable_scheduleCallback = function(T, M, z) {
    var Q = e.unstable_now();
    switch (typeof z == "object" && z !== null ? (z = z.delay, z = typeof z == "number" && 0 < z ? Q + z : Q) : z = Q, T) {
      case 1:
        var K = -1;
        break;
      case 2:
        K = 250;
        break;
      case 5:
        K = 1073741823;
        break;
      case 4:
        K = 1e4;
        break;
      default:
        K = 5e3;
    }
    return K = z + K, T = { id: p++, callback: M, priorityLevel: T, startTime: z, expirationTime: K, sortIndex: -1 }, z > Q ? (T.sortIndex = z, t(u, T), n(l) === null && T === n(u) && (k ? (d(E), E = -1) : k = !0, An(v, z - Q))) : (T.sortIndex = K, t(l, T), w || y || (w = !0, zn(x))), T;
  }, e.unstable_shouldYield = pe, e.unstable_wrapCallback = function(T) {
    var M = m;
    return function() {
      var z = m;
      m = M;
      try {
        return T.apply(this, arguments);
      } finally {
        m = z;
      }
    };
  };
})(Oc);
Nc.exports = Oc;
var Np = Nc.exports;
/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Pc = ue, Ze = Np;
function g(e) {
  for (var t = "https://reactjs.org/docs/error-decoder.html?invariant=" + e, n = 1; n < arguments.length; n++)
    t += "&args[]=" + encodeURIComponent(arguments[n]);
  return "Minified React error #" + e + "; visit " + t + " for the full message or use the non-minified dev environment for full errors and additional helpful warnings.";
}
var Rc = /* @__PURE__ */ new Set(), Hr = {};
function In(e, t) {
  ar(e, t), ar(e + "Capture", t);
}
function ar(e, t) {
  for (Hr[e] = t, e = 0; e < t.length; e++)
    Rc.add(t[e]);
}
var It = !(typeof window > "u" || typeof window.document > "u" || typeof window.document.createElement > "u"), Ys = Object.prototype.hasOwnProperty, Op = /^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/, Xl = {}, ql = {};
function Pp(e) {
  return Ys.call(ql, e) ? !0 : Ys.call(Xl, e) ? !1 : Op.test(e) ? ql[e] = !0 : (Xl[e] = !0, !1);
}
function Rp(e, t, n, r) {
  if (n !== null && n.type === 0)
    return !1;
  switch (typeof t) {
    case "function":
    case "symbol":
      return !0;
    case "boolean":
      return r ? !1 : n !== null ? !n.acceptsBooleans : (e = e.toLowerCase().slice(0, 5), e !== "data-" && e !== "aria-");
    default:
      return !1;
  }
}
function Lp(e, t, n, r) {
  if (t === null || typeof t > "u" || Rp(e, t, n, r))
    return !0;
  if (r)
    return !1;
  if (n !== null)
    switch (n.type) {
      case 3:
        return !t;
      case 4:
        return t === !1;
      case 5:
        return isNaN(t);
      case 6:
        return isNaN(t) || 1 > t;
    }
  return !1;
}
function De(e, t, n, r, i, o, s) {
  this.acceptsBooleans = t === 2 || t === 3 || t === 4, this.attributeName = r, this.attributeNamespace = i, this.mustUseProperty = n, this.propertyName = e, this.type = t, this.sanitizeURL = o, this.removeEmptyString = s;
}
var _e = {};
"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e) {
  _e[e] = new De(e, 0, !1, e, null, !1, !1);
});
[["acceptCharset", "accept-charset"], ["className", "class"], ["htmlFor", "for"], ["httpEquiv", "http-equiv"]].forEach(function(e) {
  var t = e[0];
  _e[t] = new De(t, 1, !1, e[1], null, !1, !1);
});
["contentEditable", "draggable", "spellCheck", "value"].forEach(function(e) {
  _e[e] = new De(e, 2, !1, e.toLowerCase(), null, !1, !1);
});
["autoReverse", "externalResourcesRequired", "focusable", "preserveAlpha"].forEach(function(e) {
  _e[e] = new De(e, 2, !1, e, null, !1, !1);
});
"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e) {
  _e[e] = new De(e, 3, !1, e.toLowerCase(), null, !1, !1);
});
["checked", "multiple", "muted", "selected"].forEach(function(e) {
  _e[e] = new De(e, 3, !0, e, null, !1, !1);
});
["capture", "download"].forEach(function(e) {
  _e[e] = new De(e, 4, !1, e, null, !1, !1);
});
["cols", "rows", "size", "span"].forEach(function(e) {
  _e[e] = new De(e, 6, !1, e, null, !1, !1);
});
["rowSpan", "start"].forEach(function(e) {
  _e[e] = new De(e, 5, !1, e.toLowerCase(), null, !1, !1);
});
var qa = /[\-:]([a-z])/g;
function Ja(e) {
  return e[1].toUpperCase();
}
"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e) {
  var t = e.replace(
    qa,
    Ja
  );
  _e[t] = new De(t, 1, !1, e, null, !1, !1);
});
"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e) {
  var t = e.replace(qa, Ja);
  _e[t] = new De(t, 1, !1, e, "http://www.w3.org/1999/xlink", !1, !1);
});
["xml:base", "xml:lang", "xml:space"].forEach(function(e) {
  var t = e.replace(qa, Ja);
  _e[t] = new De(t, 1, !1, e, "http://www.w3.org/XML/1998/namespace", !1, !1);
});
["tabIndex", "crossOrigin"].forEach(function(e) {
  _e[e] = new De(e, 1, !1, e.toLowerCase(), null, !1, !1);
});
_e.xlinkHref = new De("xlinkHref", 1, !1, "xlink:href", "http://www.w3.org/1999/xlink", !0, !1);
["src", "href", "action", "formAction"].forEach(function(e) {
  _e[e] = new De(e, 1, !1, e.toLowerCase(), null, !0, !0);
});
function ba(e, t, n, r) {
  var i = _e.hasOwnProperty(t) ? _e[t] : null;
  (i !== null ? i.type !== 0 : r || !(2 < t.length) || t[0] !== "o" && t[0] !== "O" || t[1] !== "n" && t[1] !== "N") && (Lp(t, n, i, r) && (n = null), r || i === null ? Pp(t) && (n === null ? e.removeAttribute(t) : e.setAttribute(t, "" + n)) : i.mustUseProperty ? e[i.propertyName] = n === null ? i.type === 3 ? !1 : "" : n : (t = i.attributeName, r = i.attributeNamespace, n === null ? e.removeAttribute(t) : (i = i.type, n = i === 3 || i === 4 && n === !0 ? "" : "" + n, r ? e.setAttributeNS(r, t, n) : e.setAttribute(t, n))));
}
var Vt = Pc.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED, Ri = Symbol.for("react.element"), Un = Symbol.for("react.portal"), Zn = Symbol.for("react.fragment"), el = Symbol.for("react.strict_mode"), Qs = Symbol.for("react.profiler"), Lc = Symbol.for("react.provider"), Dc = Symbol.for("react.context"), tl = Symbol.for("react.forward_ref"), Gs = Symbol.for("react.suspense"), Ks = Symbol.for("react.suspense_list"), nl = Symbol.for("react.memo"), Zt = Symbol.for("react.lazy"), Mc = Symbol.for("react.offscreen"), Jl = Symbol.iterator;
function kr(e) {
  return e === null || typeof e != "object" ? null : (e = Jl && e[Jl] || e["@@iterator"], typeof e == "function" ? e : null);
}
var oe = Object.assign, fs;
function Dr(e) {
  if (fs === void 0)
    try {
      throw Error();
    } catch (n) {
      var t = n.stack.trim().match(/\n( *(at )?)/);
      fs = t && t[1] || "";
    }
  return `
` + fs + e;
}
var ps = !1;
function hs(e, t) {
  if (!e || ps)
    return "";
  ps = !0;
  var n = Error.prepareStackTrace;
  Error.prepareStackTrace = void 0;
  try {
    if (t)
      if (t = function() {
        throw Error();
      }, Object.defineProperty(t.prototype, "props", { set: function() {
        throw Error();
      } }), typeof Reflect == "object" && Reflect.construct) {
        try {
          Reflect.construct(t, []);
        } catch (u) {
          var r = u;
        }
        Reflect.construct(e, [], t);
      } else {
        try {
          t.call();
        } catch (u) {
          r = u;
        }
        e.call(t.prototype);
      }
    else {
      try {
        throw Error();
      } catch (u) {
        r = u;
      }
      e();
    }
  } catch (u) {
    if (u && r && typeof u.stack == "string") {
      for (var i = u.stack.split(`
`), o = r.stack.split(`
`), s = i.length - 1, a = o.length - 1; 1 <= s && 0 <= a && i[s] !== o[a]; )
        a--;
      for (; 1 <= s && 0 <= a; s--, a--)
        if (i[s] !== o[a]) {
          if (s !== 1 || a !== 1)
            do
              if (s--, a--, 0 > a || i[s] !== o[a]) {
                var l = `
` + i[s].replace(" at new ", " at ");
                return e.displayName && l.includes("<anonymous>") && (l = l.replace("<anonymous>", e.displayName)), l;
              }
            while (1 <= s && 0 <= a);
          break;
        }
    }
  } finally {
    ps = !1, Error.prepareStackTrace = n;
  }
  return (e = e ? e.displayName || e.name : "") ? Dr(e) : "";
}
function Dp(e) {
  switch (e.tag) {
    case 5:
      return Dr(e.type);
    case 16:
      return Dr("Lazy");
    case 13:
      return Dr("Suspense");
    case 19:
      return Dr("SuspenseList");
    case 0:
    case 2:
    case 15:
      return e = hs(e.type, !1), e;
    case 11:
      return e = hs(e.type.render, !1), e;
    case 1:
      return e = hs(e.type, !0), e;
    default:
      return "";
  }
}
function Xs(e) {
  if (e == null)
    return null;
  if (typeof e == "function")
    return e.displayName || e.name || null;
  if (typeof e == "string")
    return e;
  switch (e) {
    case Zn:
      return "Fragment";
    case Un:
      return "Portal";
    case Qs:
      return "Profiler";
    case el:
      return "StrictMode";
    case Gs:
      return "Suspense";
    case Ks:
      return "SuspenseList";
  }
  if (typeof e == "object")
    switch (e.$$typeof) {
      case Dc:
        return (e.displayName || "Context") + ".Consumer";
      case Lc:
        return (e._context.displayName || "Context") + ".Provider";
      case tl:
        var t = e.render;
        return e = e.displayName, e || (e = t.displayName || t.name || "", e = e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef"), e;
      case nl:
        return t = e.displayName || null, t !== null ? t : Xs(e.type) || "Memo";
      case Zt:
        t = e._payload, e = e._init;
        try {
          return Xs(e(t));
        } catch {
        }
    }
  return null;
}
function Mp(e) {
  var t = e.type;
  switch (e.tag) {
    case 24:
      return "Cache";
    case 9:
      return (t.displayName || "Context") + ".Consumer";
    case 10:
      return (t._context.displayName || "Context") + ".Provider";
    case 18:
      return "DehydratedFragment";
    case 11:
      return e = t.render, e = e.displayName || e.name || "", t.displayName || (e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef");
    case 7:
      return "Fragment";
    case 5:
      return t;
    case 4:
      return "Portal";
    case 3:
      return "Root";
    case 6:
      return "Text";
    case 16:
      return Xs(t);
    case 8:
      return t === el ? "StrictMode" : "Mode";
    case 22:
      return "Offscreen";
    case 12:
      return "Profiler";
    case 21:
      return "Scope";
    case 13:
      return "Suspense";
    case 19:
      return "SuspenseList";
    case 25:
      return "TracingMarker";
    case 1:
    case 0:
    case 17:
    case 2:
    case 14:
    case 15:
      if (typeof t == "function")
        return t.displayName || t.name || null;
      if (typeof t == "string")
        return t;
  }
  return null;
}
function sn(e) {
  switch (typeof e) {
    case "boolean":
    case "number":
    case "string":
    case "undefined":
      return e;
    case "object":
      return e;
    default:
      return "";
  }
}
function Ic(e) {
  var t = e.type;
  return (e = e.nodeName) && e.toLowerCase() === "input" && (t === "checkbox" || t === "radio");
}
function Ip(e) {
  var t = Ic(e) ? "checked" : "value", n = Object.getOwnPropertyDescriptor(e.constructor.prototype, t), r = "" + e[t];
  if (!e.hasOwnProperty(t) && typeof n < "u" && typeof n.get == "function" && typeof n.set == "function") {
    var i = n.get, o = n.set;
    return Object.defineProperty(e, t, { configurable: !0, get: function() {
      return i.call(this);
    }, set: function(s) {
      r = "" + s, o.call(this, s);
    } }), Object.defineProperty(e, t, { enumerable: n.enumerable }), { getValue: function() {
      return r;
    }, setValue: function(s) {
      r = "" + s;
    }, stopTracking: function() {
      e._valueTracker = null, delete e[t];
    } };
  }
}
function Li(e) {
  e._valueTracker || (e._valueTracker = Ip(e));
}
function jc(e) {
  if (!e)
    return !1;
  var t = e._valueTracker;
  if (!t)
    return !0;
  var n = t.getValue(), r = "";
  return e && (r = Ic(e) ? e.checked ? "true" : "false" : e.value), e = r, e !== n ? (t.setValue(e), !0) : !1;
}
function ao(e) {
  if (e = e || (typeof document < "u" ? document : void 0), typeof e > "u")
    return null;
  try {
    return e.activeElement || e.body;
  } catch {
    return e.body;
  }
}
function qs(e, t) {
  var n = t.checked;
  return oe({}, t, { defaultChecked: void 0, defaultValue: void 0, value: void 0, checked: n ?? e._wrapperState.initialChecked });
}
function bl(e, t) {
  var n = t.defaultValue == null ? "" : t.defaultValue, r = t.checked != null ? t.checked : t.defaultChecked;
  n = sn(t.value != null ? t.value : n), e._wrapperState = { initialChecked: r, initialValue: n, controlled: t.type === "checkbox" || t.type === "radio" ? t.checked != null : t.value != null };
}
function zc(e, t) {
  t = t.checked, t != null && ba(e, "checked", t, !1);
}
function Js(e, t) {
  zc(e, t);
  var n = sn(t.value), r = t.type;
  if (n != null)
    r === "number" ? (n === 0 && e.value === "" || e.value != n) && (e.value = "" + n) : e.value !== "" + n && (e.value = "" + n);
  else if (r === "submit" || r === "reset") {
    e.removeAttribute("value");
    return;
  }
  t.hasOwnProperty("value") ? bs(e, t.type, n) : t.hasOwnProperty("defaultValue") && bs(e, t.type, sn(t.defaultValue)), t.checked == null && t.defaultChecked != null && (e.defaultChecked = !!t.defaultChecked);
}
function eu(e, t, n) {
  if (t.hasOwnProperty("value") || t.hasOwnProperty("defaultValue")) {
    var r = t.type;
    if (!(r !== "submit" && r !== "reset" || t.value !== void 0 && t.value !== null))
      return;
    t = "" + e._wrapperState.initialValue, n || t === e.value || (e.value = t), e.defaultValue = t;
  }
  n = e.name, n !== "" && (e.name = ""), e.defaultChecked = !!e._wrapperState.initialChecked, n !== "" && (e.name = n);
}
function bs(e, t, n) {
  (t !== "number" || ao(e.ownerDocument) !== e) && (n == null ? e.defaultValue = "" + e._wrapperState.initialValue : e.defaultValue !== "" + n && (e.defaultValue = "" + n));
}
var Mr = Array.isArray;
function er(e, t, n, r) {
  if (e = e.options, t) {
    t = {};
    for (var i = 0; i < n.length; i++)
      t["$" + n[i]] = !0;
    for (n = 0; n < e.length; n++)
      i = t.hasOwnProperty("$" + e[n].value), e[n].selected !== i && (e[n].selected = i), i && r && (e[n].defaultSelected = !0);
  } else {
    for (n = "" + sn(n), t = null, i = 0; i < e.length; i++) {
      if (e[i].value === n) {
        e[i].selected = !0, r && (e[i].defaultSelected = !0);
        return;
      }
      t !== null || e[i].disabled || (t = e[i]);
    }
    t !== null && (t.selected = !0);
  }
}
function ea(e, t) {
  if (t.dangerouslySetInnerHTML != null)
    throw Error(g(91));
  return oe({}, t, { value: void 0, defaultValue: void 0, children: "" + e._wrapperState.initialValue });
}
function tu(e, t) {
  var n = t.value;
  if (n == null) {
    if (n = t.children, t = t.defaultValue, n != null) {
      if (t != null)
        throw Error(g(92));
      if (Mr(n)) {
        if (1 < n.length)
          throw Error(g(93));
        n = n[0];
      }
      t = n;
    }
    t == null && (t = ""), n = t;
  }
  e._wrapperState = { initialValue: sn(n) };
}
function Ac(e, t) {
  var n = sn(t.value), r = sn(t.defaultValue);
  n != null && (n = "" + n, n !== e.value && (e.value = n), t.defaultValue == null && e.defaultValue !== n && (e.defaultValue = n)), r != null && (e.defaultValue = "" + r);
}
function nu(e) {
  var t = e.textContent;
  t === e._wrapperState.initialValue && t !== "" && t !== null && (e.value = t);
}
function Fc(e) {
  switch (e) {
    case "svg":
      return "http://www.w3.org/2000/svg";
    case "math":
      return "http://www.w3.org/1998/Math/MathML";
    default:
      return "http://www.w3.org/1999/xhtml";
  }
}
function ta(e, t) {
  return e == null || e === "http://www.w3.org/1999/xhtml" ? Fc(t) : e === "http://www.w3.org/2000/svg" && t === "foreignObject" ? "http://www.w3.org/1999/xhtml" : e;
}
var Di, Vc = function(e) {
  return typeof MSApp < "u" && MSApp.execUnsafeLocalFunction ? function(t, n, r, i) {
    MSApp.execUnsafeLocalFunction(function() {
      return e(t, n, r, i);
    });
  } : e;
}(function(e, t) {
  if (e.namespaceURI !== "http://www.w3.org/2000/svg" || "innerHTML" in e)
    e.innerHTML = t;
  else {
    for (Di = Di || document.createElement("div"), Di.innerHTML = "<svg>" + t.valueOf().toString() + "</svg>", t = Di.firstChild; e.firstChild; )
      e.removeChild(e.firstChild);
    for (; t.firstChild; )
      e.appendChild(t.firstChild);
  }
});
function Yr(e, t) {
  if (t) {
    var n = e.firstChild;
    if (n && n === e.lastChild && n.nodeType === 3) {
      n.nodeValue = t;
      return;
    }
  }
  e.textContent = t;
}
var zr = {
  animationIterationCount: !0,
  aspectRatio: !0,
  borderImageOutset: !0,
  borderImageSlice: !0,
  borderImageWidth: !0,
  boxFlex: !0,
  boxFlexGroup: !0,
  boxOrdinalGroup: !0,
  columnCount: !0,
  columns: !0,
  flex: !0,
  flexGrow: !0,
  flexPositive: !0,
  flexShrink: !0,
  flexNegative: !0,
  flexOrder: !0,
  gridArea: !0,
  gridRow: !0,
  gridRowEnd: !0,
  gridRowSpan: !0,
  gridRowStart: !0,
  gridColumn: !0,
  gridColumnEnd: !0,
  gridColumnSpan: !0,
  gridColumnStart: !0,
  fontWeight: !0,
  lineClamp: !0,
  lineHeight: !0,
  opacity: !0,
  order: !0,
  orphans: !0,
  tabSize: !0,
  widows: !0,
  zIndex: !0,
  zoom: !0,
  fillOpacity: !0,
  floodOpacity: !0,
  stopOpacity: !0,
  strokeDasharray: !0,
  strokeDashoffset: !0,
  strokeMiterlimit: !0,
  strokeOpacity: !0,
  strokeWidth: !0
}, jp = ["Webkit", "ms", "Moz", "O"];
Object.keys(zr).forEach(function(e) {
  jp.forEach(function(t) {
    t = t + e.charAt(0).toUpperCase() + e.substring(1), zr[t] = zr[e];
  });
});
function Wc(e, t, n) {
  return t == null || typeof t == "boolean" || t === "" ? "" : n || typeof t != "number" || t === 0 || zr.hasOwnProperty(e) && zr[e] ? ("" + t).trim() : t + "px";
}
function $c(e, t) {
  e = e.style;
  for (var n in t)
    if (t.hasOwnProperty(n)) {
      var r = n.indexOf("--") === 0, i = Wc(n, t[n], r);
      n === "float" && (n = "cssFloat"), r ? e.setProperty(n, i) : e[n] = i;
    }
}
var zp = oe({ menuitem: !0 }, { area: !0, base: !0, br: !0, col: !0, embed: !0, hr: !0, img: !0, input: !0, keygen: !0, link: !0, meta: !0, param: !0, source: !0, track: !0, wbr: !0 });
function na(e, t) {
  if (t) {
    if (zp[e] && (t.children != null || t.dangerouslySetInnerHTML != null))
      throw Error(g(137, e));
    if (t.dangerouslySetInnerHTML != null) {
      if (t.children != null)
        throw Error(g(60));
      if (typeof t.dangerouslySetInnerHTML != "object" || !("__html" in t.dangerouslySetInnerHTML))
        throw Error(g(61));
    }
    if (t.style != null && typeof t.style != "object")
      throw Error(g(62));
  }
}
function ra(e, t) {
  if (e.indexOf("-") === -1)
    return typeof t.is == "string";
  switch (e) {
    case "annotation-xml":
    case "color-profile":
    case "font-face":
    case "font-face-src":
    case "font-face-uri":
    case "font-face-format":
    case "font-face-name":
    case "missing-glyph":
      return !1;
    default:
      return !0;
  }
}
var ia = null;
function rl(e) {
  return e = e.target || e.srcElement || window, e.correspondingUseElement && (e = e.correspondingUseElement), e.nodeType === 3 ? e.parentNode : e;
}
var oa = null, tr = null, nr = null;
function ru(e) {
  if (e = Ti(e)) {
    if (typeof oa != "function")
      throw Error(g(280));
    var t = e.stateNode;
    t && (t = Go(t), oa(e.stateNode, e.type, t));
  }
}
function Uc(e) {
  tr ? nr ? nr.push(e) : nr = [e] : tr = e;
}
function Zc() {
  if (tr) {
    var e = tr, t = nr;
    if (nr = tr = null, ru(e), t)
      for (e = 0; e < t.length; e++)
        ru(t[e]);
  }
}
function Bc(e, t) {
  return e(t);
}
function Hc() {
}
var ms = !1;
function Yc(e, t, n) {
  if (ms)
    return e(t, n);
  ms = !0;
  try {
    return Bc(e, t, n);
  } finally {
    ms = !1, (tr !== null || nr !== null) && (Hc(), Zc());
  }
}
function Qr(e, t) {
  var n = e.stateNode;
  if (n === null)
    return null;
  var r = Go(n);
  if (r === null)
    return null;
  n = r[t];
  e:
    switch (t) {
      case "onClick":
      case "onClickCapture":
      case "onDoubleClick":
      case "onDoubleClickCapture":
      case "onMouseDown":
      case "onMouseDownCapture":
      case "onMouseMove":
      case "onMouseMoveCapture":
      case "onMouseUp":
      case "onMouseUpCapture":
      case "onMouseEnter":
        (r = !r.disabled) || (e = e.type, r = !(e === "button" || e === "input" || e === "select" || e === "textarea")), e = !r;
        break e;
      default:
        e = !1;
    }
  if (e)
    return null;
  if (n && typeof n != "function")
    throw Error(g(231, t, typeof n));
  return n;
}
var sa = !1;
if (It)
  try {
    var Sr = {};
    Object.defineProperty(Sr, "passive", { get: function() {
      sa = !0;
    } }), window.addEventListener("test", Sr, Sr), window.removeEventListener("test", Sr, Sr);
  } catch {
    sa = !1;
  }
function Ap(e, t, n, r, i, o, s, a, l) {
  var u = Array.prototype.slice.call(arguments, 3);
  try {
    t.apply(n, u);
  } catch (p) {
    this.onError(p);
  }
}
var Ar = !1, lo = null, uo = !1, aa = null, Fp = { onError: function(e) {
  Ar = !0, lo = e;
} };
function Vp(e, t, n, r, i, o, s, a, l) {
  Ar = !1, lo = null, Ap.apply(Fp, arguments);
}
function Wp(e, t, n, r, i, o, s, a, l) {
  if (Vp.apply(this, arguments), Ar) {
    if (Ar) {
      var u = lo;
      Ar = !1, lo = null;
    } else
      throw Error(g(198));
    uo || (uo = !0, aa = u);
  }
}
function jn(e) {
  var t = e, n = e;
  if (e.alternate)
    for (; t.return; )
      t = t.return;
  else {
    e = t;
    do
      t = e, t.flags & 4098 && (n = t.return), e = t.return;
    while (e);
  }
  return t.tag === 3 ? n : null;
}
function Qc(e) {
  if (e.tag === 13) {
    var t = e.memoizedState;
    if (t === null && (e = e.alternate, e !== null && (t = e.memoizedState)), t !== null)
      return t.dehydrated;
  }
  return null;
}
function iu(e) {
  if (jn(e) !== e)
    throw Error(g(188));
}
function $p(e) {
  var t = e.alternate;
  if (!t) {
    if (t = jn(e), t === null)
      throw Error(g(188));
    return t !== e ? null : e;
  }
  for (var n = e, r = t; ; ) {
    var i = n.return;
    if (i === null)
      break;
    var o = i.alternate;
    if (o === null) {
      if (r = i.return, r !== null) {
        n = r;
        continue;
      }
      break;
    }
    if (i.child === o.child) {
      for (o = i.child; o; ) {
        if (o === n)
          return iu(i), e;
        if (o === r)
          return iu(i), t;
        o = o.sibling;
      }
      throw Error(g(188));
    }
    if (n.return !== r.return)
      n = i, r = o;
    else {
      for (var s = !1, a = i.child; a; ) {
        if (a === n) {
          s = !0, n = i, r = o;
          break;
        }
        if (a === r) {
          s = !0, r = i, n = o;
          break;
        }
        a = a.sibling;
      }
      if (!s) {
        for (a = o.child; a; ) {
          if (a === n) {
            s = !0, n = o, r = i;
            break;
          }
          if (a === r) {
            s = !0, r = o, n = i;
            break;
          }
          a = a.sibling;
        }
        if (!s)
          throw Error(g(189));
      }
    }
    if (n.alternate !== r)
      throw Error(g(190));
  }
  if (n.tag !== 3)
    throw Error(g(188));
  return n.stateNode.current === n ? e : t;
}
function Gc(e) {
  return e = $p(e), e !== null ? Kc(e) : null;
}
function Kc(e) {
  if (e.tag === 5 || e.tag === 6)
    return e;
  for (e = e.child; e !== null; ) {
    var t = Kc(e);
    if (t !== null)
      return t;
    e = e.sibling;
  }
  return null;
}
var Xc = Ze.unstable_scheduleCallback, ou = Ze.unstable_cancelCallback, Up = Ze.unstable_shouldYield, Zp = Ze.unstable_requestPaint, le = Ze.unstable_now, Bp = Ze.unstable_getCurrentPriorityLevel, il = Ze.unstable_ImmediatePriority, qc = Ze.unstable_UserBlockingPriority, co = Ze.unstable_NormalPriority, Hp = Ze.unstable_LowPriority, Jc = Ze.unstable_IdlePriority, Bo = null, gt = null;
function Yp(e) {
  if (gt && typeof gt.onCommitFiberRoot == "function")
    try {
      gt.onCommitFiberRoot(Bo, e, void 0, (e.current.flags & 128) === 128);
    } catch {
    }
}
var it = Math.clz32 ? Math.clz32 : Kp, Qp = Math.log, Gp = Math.LN2;
function Kp(e) {
  return e >>>= 0, e === 0 ? 32 : 31 - (Qp(e) / Gp | 0) | 0;
}
var Mi = 64, Ii = 4194304;
function Ir(e) {
  switch (e & -e) {
    case 1:
      return 1;
    case 2:
      return 2;
    case 4:
      return 4;
    case 8:
      return 8;
    case 16:
      return 16;
    case 32:
      return 32;
    case 64:
    case 128:
    case 256:
    case 512:
    case 1024:
    case 2048:
    case 4096:
    case 8192:
    case 16384:
    case 32768:
    case 65536:
    case 131072:
    case 262144:
    case 524288:
    case 1048576:
    case 2097152:
      return e & 4194240;
    case 4194304:
    case 8388608:
    case 16777216:
    case 33554432:
    case 67108864:
      return e & 130023424;
    case 134217728:
      return 134217728;
    case 268435456:
      return 268435456;
    case 536870912:
      return 536870912;
    case 1073741824:
      return 1073741824;
    default:
      return e;
  }
}
function fo(e, t) {
  var n = e.pendingLanes;
  if (n === 0)
    return 0;
  var r = 0, i = e.suspendedLanes, o = e.pingedLanes, s = n & 268435455;
  if (s !== 0) {
    var a = s & ~i;
    a !== 0 ? r = Ir(a) : (o &= s, o !== 0 && (r = Ir(o)));
  } else
    s = n & ~i, s !== 0 ? r = Ir(s) : o !== 0 && (r = Ir(o));
  if (r === 0)
    return 0;
  if (t !== 0 && t !== r && !(t & i) && (i = r & -r, o = t & -t, i >= o || i === 16 && (o & 4194240) !== 0))
    return t;
  if (r & 4 && (r |= n & 16), t = e.entangledLanes, t !== 0)
    for (e = e.entanglements, t &= r; 0 < t; )
      n = 31 - it(t), i = 1 << n, r |= e[n], t &= ~i;
  return r;
}
function Xp(e, t) {
  switch (e) {
    case 1:
    case 2:
    case 4:
      return t + 250;
    case 8:
    case 16:
    case 32:
    case 64:
    case 128:
    case 256:
    case 512:
    case 1024:
    case 2048:
    case 4096:
    case 8192:
    case 16384:
    case 32768:
    case 65536:
    case 131072:
    case 262144:
    case 524288:
    case 1048576:
    case 2097152:
      return t + 5e3;
    case 4194304:
    case 8388608:
    case 16777216:
    case 33554432:
    case 67108864:
      return -1;
    case 134217728:
    case 268435456:
    case 536870912:
    case 1073741824:
      return -1;
    default:
      return -1;
  }
}
function qp(e, t) {
  for (var n = e.suspendedLanes, r = e.pingedLanes, i = e.expirationTimes, o = e.pendingLanes; 0 < o; ) {
    var s = 31 - it(o), a = 1 << s, l = i[s];
    l === -1 ? (!(a & n) || a & r) && (i[s] = Xp(a, t)) : l <= t && (e.expiredLanes |= a), o &= ~a;
  }
}
function la(e) {
  return e = e.pendingLanes & -1073741825, e !== 0 ? e : e & 1073741824 ? 1073741824 : 0;
}
function bc() {
  var e = Mi;
  return Mi <<= 1, !(Mi & 4194240) && (Mi = 64), e;
}
function vs(e) {
  for (var t = [], n = 0; 31 > n; n++)
    t.push(e);
  return t;
}
function Ei(e, t, n) {
  e.pendingLanes |= t, t !== 536870912 && (e.suspendedLanes = 0, e.pingedLanes = 0), e = e.eventTimes, t = 31 - it(t), e[t] = n;
}
function Jp(e, t) {
  var n = e.pendingLanes & ~t;
  e.pendingLanes = t, e.suspendedLanes = 0, e.pingedLanes = 0, e.expiredLanes &= t, e.mutableReadLanes &= t, e.entangledLanes &= t, t = e.entanglements;
  var r = e.eventTimes;
  for (e = e.expirationTimes; 0 < n; ) {
    var i = 31 - it(n), o = 1 << i;
    t[i] = 0, r[i] = -1, e[i] = -1, n &= ~o;
  }
}
function ol(e, t) {
  var n = e.entangledLanes |= t;
  for (e = e.entanglements; n; ) {
    var r = 31 - it(n), i = 1 << r;
    i & t | e[r] & t && (e[r] |= t), n &= ~i;
  }
}
var H = 0;
function ed(e) {
  return e &= -e, 1 < e ? 4 < e ? e & 268435455 ? 16 : 536870912 : 4 : 1;
}
var td, sl, nd, rd, id, ua = !1, ji = [], qt = null, Jt = null, bt = null, Gr = /* @__PURE__ */ new Map(), Kr = /* @__PURE__ */ new Map(), Ht = [], bp = "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");
function su(e, t) {
  switch (e) {
    case "focusin":
    case "focusout":
      qt = null;
      break;
    case "dragenter":
    case "dragleave":
      Jt = null;
      break;
    case "mouseover":
    case "mouseout":
      bt = null;
      break;
    case "pointerover":
    case "pointerout":
      Gr.delete(t.pointerId);
      break;
    case "gotpointercapture":
    case "lostpointercapture":
      Kr.delete(t.pointerId);
  }
}
function xr(e, t, n, r, i, o) {
  return e === null || e.nativeEvent !== o ? (e = { blockedOn: t, domEventName: n, eventSystemFlags: r, nativeEvent: o, targetContainers: [i] }, t !== null && (t = Ti(t), t !== null && sl(t)), e) : (e.eventSystemFlags |= r, t = e.targetContainers, i !== null && t.indexOf(i) === -1 && t.push(i), e);
}
function eh(e, t, n, r, i) {
  switch (t) {
    case "focusin":
      return qt = xr(qt, e, t, n, r, i), !0;
    case "dragenter":
      return Jt = xr(Jt, e, t, n, r, i), !0;
    case "mouseover":
      return bt = xr(bt, e, t, n, r, i), !0;
    case "pointerover":
      var o = i.pointerId;
      return Gr.set(o, xr(Gr.get(o) || null, e, t, n, r, i)), !0;
    case "gotpointercapture":
      return o = i.pointerId, Kr.set(o, xr(Kr.get(o) || null, e, t, n, r, i)), !0;
  }
  return !1;
}
function od(e) {
  var t = wn(e.target);
  if (t !== null) {
    var n = jn(t);
    if (n !== null) {
      if (t = n.tag, t === 13) {
        if (t = Qc(n), t !== null) {
          e.blockedOn = t, id(e.priority, function() {
            nd(n);
          });
          return;
        }
      } else if (t === 3 && n.stateNode.current.memoizedState.isDehydrated) {
        e.blockedOn = n.tag === 3 ? n.stateNode.containerInfo : null;
        return;
      }
    }
  }
  e.blockedOn = null;
}
function Xi(e) {
  if (e.blockedOn !== null)
    return !1;
  for (var t = e.targetContainers; 0 < t.length; ) {
    var n = ca(e.domEventName, e.eventSystemFlags, t[0], e.nativeEvent);
    if (n === null) {
      n = e.nativeEvent;
      var r = new n.constructor(n.type, n);
      ia = r, n.target.dispatchEvent(r), ia = null;
    } else
      return t = Ti(n), t !== null && sl(t), e.blockedOn = n, !1;
    t.shift();
  }
  return !0;
}
function au(e, t, n) {
  Xi(e) && n.delete(t);
}
function th() {
  ua = !1, qt !== null && Xi(qt) && (qt = null), Jt !== null && Xi(Jt) && (Jt = null), bt !== null && Xi(bt) && (bt = null), Gr.forEach(au), Kr.forEach(au);
}
function Er(e, t) {
  e.blockedOn === t && (e.blockedOn = null, ua || (ua = !0, Ze.unstable_scheduleCallback(Ze.unstable_NormalPriority, th)));
}
function Xr(e) {
  function t(i) {
    return Er(i, e);
  }
  if (0 < ji.length) {
    Er(ji[0], e);
    for (var n = 1; n < ji.length; n++) {
      var r = ji[n];
      r.blockedOn === e && (r.blockedOn = null);
    }
  }
  for (qt !== null && Er(qt, e), Jt !== null && Er(Jt, e), bt !== null && Er(bt, e), Gr.forEach(t), Kr.forEach(t), n = 0; n < Ht.length; n++)
    r = Ht[n], r.blockedOn === e && (r.blockedOn = null);
  for (; 0 < Ht.length && (n = Ht[0], n.blockedOn === null); )
    od(n), n.blockedOn === null && Ht.shift();
}
var rr = Vt.ReactCurrentBatchConfig, po = !0;
function nh(e, t, n, r) {
  var i = H, o = rr.transition;
  rr.transition = null;
  try {
    H = 1, al(e, t, n, r);
  } finally {
    H = i, rr.transition = o;
  }
}
function rh(e, t, n, r) {
  var i = H, o = rr.transition;
  rr.transition = null;
  try {
    H = 4, al(e, t, n, r);
  } finally {
    H = i, rr.transition = o;
  }
}
function al(e, t, n, r) {
  if (po) {
    var i = ca(e, t, n, r);
    if (i === null)
      Ts(e, t, r, ho, n), su(e, r);
    else if (eh(i, e, t, n, r))
      r.stopPropagation();
    else if (su(e, r), t & 4 && -1 < bp.indexOf(e)) {
      for (; i !== null; ) {
        var o = Ti(i);
        if (o !== null && td(o), o = ca(e, t, n, r), o === null && Ts(e, t, r, ho, n), o === i)
          break;
        i = o;
      }
      i !== null && r.stopPropagation();
    } else
      Ts(e, t, r, null, n);
  }
}
var ho = null;
function ca(e, t, n, r) {
  if (ho = null, e = rl(r), e = wn(e), e !== null)
    if (t = jn(e), t === null)
      e = null;
    else if (n = t.tag, n === 13) {
      if (e = Qc(t), e !== null)
        return e;
      e = null;
    } else if (n === 3) {
      if (t.stateNode.current.memoizedState.isDehydrated)
        return t.tag === 3 ? t.stateNode.containerInfo : null;
      e = null;
    } else
      t !== e && (e = null);
  return ho = e, null;
}
function sd(e) {
  switch (e) {
    case "cancel":
    case "click":
    case "close":
    case "contextmenu":
    case "copy":
    case "cut":
    case "auxclick":
    case "dblclick":
    case "dragend":
    case "dragstart":
    case "drop":
    case "focusin":
    case "focusout":
    case "input":
    case "invalid":
    case "keydown":
    case "keypress":
    case "keyup":
    case "mousedown":
    case "mouseup":
    case "paste":
    case "pause":
    case "play":
    case "pointercancel":
    case "pointerdown":
    case "pointerup":
    case "ratechange":
    case "reset":
    case "resize":
    case "seeked":
    case "submit":
    case "touchcancel":
    case "touchend":
    case "touchstart":
    case "volumechange":
    case "change":
    case "selectionchange":
    case "textInput":
    case "compositionstart":
    case "compositionend":
    case "compositionupdate":
    case "beforeblur":
    case "afterblur":
    case "beforeinput":
    case "blur":
    case "fullscreenchange":
    case "focus":
    case "hashchange":
    case "popstate":
    case "select":
    case "selectstart":
      return 1;
    case "drag":
    case "dragenter":
    case "dragexit":
    case "dragleave":
    case "dragover":
    case "mousemove":
    case "mouseout":
    case "mouseover":
    case "pointermove":
    case "pointerout":
    case "pointerover":
    case "scroll":
    case "toggle":
    case "touchmove":
    case "wheel":
    case "mouseenter":
    case "mouseleave":
    case "pointerenter":
    case "pointerleave":
      return 4;
    case "message":
      switch (Bp()) {
        case il:
          return 1;
        case qc:
          return 4;
        case co:
        case Hp:
          return 16;
        case Jc:
          return 536870912;
        default:
          return 16;
      }
    default:
      return 16;
  }
}
var Gt = null, ll = null, qi = null;
function ad() {
  if (qi)
    return qi;
  var e, t = ll, n = t.length, r, i = "value" in Gt ? Gt.value : Gt.textContent, o = i.length;
  for (e = 0; e < n && t[e] === i[e]; e++)
    ;
  var s = n - e;
  for (r = 1; r <= s && t[n - r] === i[o - r]; r++)
    ;
  return qi = i.slice(e, 1 < r ? 1 - r : void 0);
}
function Ji(e) {
  var t = e.keyCode;
  return "charCode" in e ? (e = e.charCode, e === 0 && t === 13 && (e = 13)) : e = t, e === 10 && (e = 13), 32 <= e || e === 13 ? e : 0;
}
function zi() {
  return !0;
}
function lu() {
  return !1;
}
function He(e) {
  function t(n, r, i, o, s) {
    this._reactName = n, this._targetInst = i, this.type = r, this.nativeEvent = o, this.target = s, this.currentTarget = null;
    for (var a in e)
      e.hasOwnProperty(a) && (n = e[a], this[a] = n ? n(o) : o[a]);
    return this.isDefaultPrevented = (o.defaultPrevented != null ? o.defaultPrevented : o.returnValue === !1) ? zi : lu, this.isPropagationStopped = lu, this;
  }
  return oe(t.prototype, { preventDefault: function() {
    this.defaultPrevented = !0;
    var n = this.nativeEvent;
    n && (n.preventDefault ? n.preventDefault() : typeof n.returnValue != "unknown" && (n.returnValue = !1), this.isDefaultPrevented = zi);
  }, stopPropagation: function() {
    var n = this.nativeEvent;
    n && (n.stopPropagation ? n.stopPropagation() : typeof n.cancelBubble != "unknown" && (n.cancelBubble = !0), this.isPropagationStopped = zi);
  }, persist: function() {
  }, isPersistent: zi }), t;
}
var gr = { eventPhase: 0, bubbles: 0, cancelable: 0, timeStamp: function(e) {
  return e.timeStamp || Date.now();
}, defaultPrevented: 0, isTrusted: 0 }, ul = He(gr), Ci = oe({}, gr, { view: 0, detail: 0 }), ih = He(Ci), ys, gs, Cr, Ho = oe({}, Ci, { screenX: 0, screenY: 0, clientX: 0, clientY: 0, pageX: 0, pageY: 0, ctrlKey: 0, shiftKey: 0, altKey: 0, metaKey: 0, getModifierState: cl, button: 0, buttons: 0, relatedTarget: function(e) {
  return e.relatedTarget === void 0 ? e.fromElement === e.srcElement ? e.toElement : e.fromElement : e.relatedTarget;
}, movementX: function(e) {
  return "movementX" in e ? e.movementX : (e !== Cr && (Cr && e.type === "mousemove" ? (ys = e.screenX - Cr.screenX, gs = e.screenY - Cr.screenY) : gs = ys = 0, Cr = e), ys);
}, movementY: function(e) {
  return "movementY" in e ? e.movementY : gs;
} }), uu = He(Ho), oh = oe({}, Ho, { dataTransfer: 0 }), sh = He(oh), ah = oe({}, Ci, { relatedTarget: 0 }), ws = He(ah), lh = oe({}, gr, { animationName: 0, elapsedTime: 0, pseudoElement: 0 }), uh = He(lh), ch = oe({}, gr, { clipboardData: function(e) {
  return "clipboardData" in e ? e.clipboardData : window.clipboardData;
} }), dh = He(ch), fh = oe({}, gr, { data: 0 }), cu = He(fh), ph = {
  Esc: "Escape",
  Spacebar: " ",
  Left: "ArrowLeft",
  Up: "ArrowUp",
  Right: "ArrowRight",
  Down: "ArrowDown",
  Del: "Delete",
  Win: "OS",
  Menu: "ContextMenu",
  Apps: "ContextMenu",
  Scroll: "ScrollLock",
  MozPrintableKey: "Unidentified"
}, hh = {
  8: "Backspace",
  9: "Tab",
  12: "Clear",
  13: "Enter",
  16: "Shift",
  17: "Control",
  18: "Alt",
  19: "Pause",
  20: "CapsLock",
  27: "Escape",
  32: " ",
  33: "PageUp",
  34: "PageDown",
  35: "End",
  36: "Home",
  37: "ArrowLeft",
  38: "ArrowUp",
  39: "ArrowRight",
  40: "ArrowDown",
  45: "Insert",
  46: "Delete",
  112: "F1",
  113: "F2",
  114: "F3",
  115: "F4",
  116: "F5",
  117: "F6",
  118: "F7",
  119: "F8",
  120: "F9",
  121: "F10",
  122: "F11",
  123: "F12",
  144: "NumLock",
  145: "ScrollLock",
  224: "Meta"
}, mh = { Alt: "altKey", Control: "ctrlKey", Meta: "metaKey", Shift: "shiftKey" };
function vh(e) {
  var t = this.nativeEvent;
  return t.getModifierState ? t.getModifierState(e) : (e = mh[e]) ? !!t[e] : !1;
}
function cl() {
  return vh;
}
var yh = oe({}, Ci, { key: function(e) {
  if (e.key) {
    var t = ph[e.key] || e.key;
    if (t !== "Unidentified")
      return t;
  }
  return e.type === "keypress" ? (e = Ji(e), e === 13 ? "Enter" : String.fromCharCode(e)) : e.type === "keydown" || e.type === "keyup" ? hh[e.keyCode] || "Unidentified" : "";
}, code: 0, location: 0, ctrlKey: 0, shiftKey: 0, altKey: 0, metaKey: 0, repeat: 0, locale: 0, getModifierState: cl, charCode: function(e) {
  return e.type === "keypress" ? Ji(e) : 0;
}, keyCode: function(e) {
  return e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0;
}, which: function(e) {
  return e.type === "keypress" ? Ji(e) : e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0;
} }), gh = He(yh), wh = oe({}, Ho, { pointerId: 0, width: 0, height: 0, pressure: 0, tangentialPressure: 0, tiltX: 0, tiltY: 0, twist: 0, pointerType: 0, isPrimary: 0 }), du = He(wh), _h = oe({}, Ci, { touches: 0, targetTouches: 0, changedTouches: 0, altKey: 0, metaKey: 0, ctrlKey: 0, shiftKey: 0, getModifierState: cl }), kh = He(_h), Sh = oe({}, gr, { propertyName: 0, elapsedTime: 0, pseudoElement: 0 }), xh = He(Sh), Eh = oe({}, Ho, {
  deltaX: function(e) {
    return "deltaX" in e ? e.deltaX : "wheelDeltaX" in e ? -e.wheelDeltaX : 0;
  },
  deltaY: function(e) {
    return "deltaY" in e ? e.deltaY : "wheelDeltaY" in e ? -e.wheelDeltaY : "wheelDelta" in e ? -e.wheelDelta : 0;
  },
  deltaZ: 0,
  deltaMode: 0
}), Ch = He(Eh), Th = [9, 13, 27, 32], dl = It && "CompositionEvent" in window, Fr = null;
It && "documentMode" in document && (Fr = document.documentMode);
var Nh = It && "TextEvent" in window && !Fr, ld = It && (!dl || Fr && 8 < Fr && 11 >= Fr), fu = " ", pu = !1;
function ud(e, t) {
  switch (e) {
    case "keyup":
      return Th.indexOf(t.keyCode) !== -1;
    case "keydown":
      return t.keyCode !== 229;
    case "keypress":
    case "mousedown":
    case "focusout":
      return !0;
    default:
      return !1;
  }
}
function cd(e) {
  return e = e.detail, typeof e == "object" && "data" in e ? e.data : null;
}
var Bn = !1;
function Oh(e, t) {
  switch (e) {
    case "compositionend":
      return cd(t);
    case "keypress":
      return t.which !== 32 ? null : (pu = !0, fu);
    case "textInput":
      return e = t.data, e === fu && pu ? null : e;
    default:
      return null;
  }
}
function Ph(e, t) {
  if (Bn)
    return e === "compositionend" || !dl && ud(e, t) ? (e = ad(), qi = ll = Gt = null, Bn = !1, e) : null;
  switch (e) {
    case "paste":
      return null;
    case "keypress":
      if (!(t.ctrlKey || t.altKey || t.metaKey) || t.ctrlKey && t.altKey) {
        if (t.char && 1 < t.char.length)
          return t.char;
        if (t.which)
          return String.fromCharCode(t.which);
      }
      return null;
    case "compositionend":
      return ld && t.locale !== "ko" ? null : t.data;
    default:
      return null;
  }
}
var Rh = { color: !0, date: !0, datetime: !0, "datetime-local": !0, email: !0, month: !0, number: !0, password: !0, range: !0, search: !0, tel: !0, text: !0, time: !0, url: !0, week: !0 };
function hu(e) {
  var t = e && e.nodeName && e.nodeName.toLowerCase();
  return t === "input" ? !!Rh[e.type] : t === "textarea";
}
function dd(e, t, n, r) {
  Uc(r), t = mo(t, "onChange"), 0 < t.length && (n = new ul("onChange", "change", null, n, r), e.push({ event: n, listeners: t }));
}
var Vr = null, qr = null;
function Lh(e) {
  Sd(e, 0);
}
function Yo(e) {
  var t = Qn(e);
  if (jc(t))
    return e;
}
function Dh(e, t) {
  if (e === "change")
    return t;
}
var fd = !1;
if (It) {
  var _s;
  if (It) {
    var ks = "oninput" in document;
    if (!ks) {
      var mu = document.createElement("div");
      mu.setAttribute("oninput", "return;"), ks = typeof mu.oninput == "function";
    }
    _s = ks;
  } else
    _s = !1;
  fd = _s && (!document.documentMode || 9 < document.documentMode);
}
function vu() {
  Vr && (Vr.detachEvent("onpropertychange", pd), qr = Vr = null);
}
function pd(e) {
  if (e.propertyName === "value" && Yo(qr)) {
    var t = [];
    dd(t, qr, e, rl(e)), Yc(Lh, t);
  }
}
function Mh(e, t, n) {
  e === "focusin" ? (vu(), Vr = t, qr = n, Vr.attachEvent("onpropertychange", pd)) : e === "focusout" && vu();
}
function Ih(e) {
  if (e === "selectionchange" || e === "keyup" || e === "keydown")
    return Yo(qr);
}
function jh(e, t) {
  if (e === "click")
    return Yo(t);
}
function zh(e, t) {
  if (e === "input" || e === "change")
    return Yo(t);
}
function Ah(e, t) {
  return e === t && (e !== 0 || 1 / e === 1 / t) || e !== e && t !== t;
}
var lt = typeof Object.is == "function" ? Object.is : Ah;
function Jr(e, t) {
  if (lt(e, t))
    return !0;
  if (typeof e != "object" || e === null || typeof t != "object" || t === null)
    return !1;
  var n = Object.keys(e), r = Object.keys(t);
  if (n.length !== r.length)
    return !1;
  for (r = 0; r < n.length; r++) {
    var i = n[r];
    if (!Ys.call(t, i) || !lt(e[i], t[i]))
      return !1;
  }
  return !0;
}
function yu(e) {
  for (; e && e.firstChild; )
    e = e.firstChild;
  return e;
}
function gu(e, t) {
  var n = yu(e);
  e = 0;
  for (var r; n; ) {
    if (n.nodeType === 3) {
      if (r = e + n.textContent.length, e <= t && r >= t)
        return { node: n, offset: t - e };
      e = r;
    }
    e: {
      for (; n; ) {
        if (n.nextSibling) {
          n = n.nextSibling;
          break e;
        }
        n = n.parentNode;
      }
      n = void 0;
    }
    n = yu(n);
  }
}
function hd(e, t) {
  return e && t ? e === t ? !0 : e && e.nodeType === 3 ? !1 : t && t.nodeType === 3 ? hd(e, t.parentNode) : "contains" in e ? e.contains(t) : e.compareDocumentPosition ? !!(e.compareDocumentPosition(t) & 16) : !1 : !1;
}
function md() {
  for (var e = window, t = ao(); t instanceof e.HTMLIFrameElement; ) {
    try {
      var n = typeof t.contentWindow.location.href == "string";
    } catch {
      n = !1;
    }
    if (n)
      e = t.contentWindow;
    else
      break;
    t = ao(e.document);
  }
  return t;
}
function fl(e) {
  var t = e && e.nodeName && e.nodeName.toLowerCase();
  return t && (t === "input" && (e.type === "text" || e.type === "search" || e.type === "tel" || e.type === "url" || e.type === "password") || t === "textarea" || e.contentEditable === "true");
}
function Fh(e) {
  var t = md(), n = e.focusedElem, r = e.selectionRange;
  if (t !== n && n && n.ownerDocument && hd(n.ownerDocument.documentElement, n)) {
    if (r !== null && fl(n)) {
      if (t = r.start, e = r.end, e === void 0 && (e = t), "selectionStart" in n)
        n.selectionStart = t, n.selectionEnd = Math.min(e, n.value.length);
      else if (e = (t = n.ownerDocument || document) && t.defaultView || window, e.getSelection) {
        e = e.getSelection();
        var i = n.textContent.length, o = Math.min(r.start, i);
        r = r.end === void 0 ? o : Math.min(r.end, i), !e.extend && o > r && (i = r, r = o, o = i), i = gu(n, o);
        var s = gu(
          n,
          r
        );
        i && s && (e.rangeCount !== 1 || e.anchorNode !== i.node || e.anchorOffset !== i.offset || e.focusNode !== s.node || e.focusOffset !== s.offset) && (t = t.createRange(), t.setStart(i.node, i.offset), e.removeAllRanges(), o > r ? (e.addRange(t), e.extend(s.node, s.offset)) : (t.setEnd(s.node, s.offset), e.addRange(t)));
      }
    }
    for (t = [], e = n; e = e.parentNode; )
      e.nodeType === 1 && t.push({ element: e, left: e.scrollLeft, top: e.scrollTop });
    for (typeof n.focus == "function" && n.focus(), n = 0; n < t.length; n++)
      e = t[n], e.element.scrollLeft = e.left, e.element.scrollTop = e.top;
  }
}
var Vh = It && "documentMode" in document && 11 >= document.documentMode, Hn = null, da = null, Wr = null, fa = !1;
function wu(e, t, n) {
  var r = n.window === n ? n.document : n.nodeType === 9 ? n : n.ownerDocument;
  fa || Hn == null || Hn !== ao(r) || (r = Hn, "selectionStart" in r && fl(r) ? r = { start: r.selectionStart, end: r.selectionEnd } : (r = (r.ownerDocument && r.ownerDocument.defaultView || window).getSelection(), r = { anchorNode: r.anchorNode, anchorOffset: r.anchorOffset, focusNode: r.focusNode, focusOffset: r.focusOffset }), Wr && Jr(Wr, r) || (Wr = r, r = mo(da, "onSelect"), 0 < r.length && (t = new ul("onSelect", "select", null, t, n), e.push({ event: t, listeners: r }), t.target = Hn)));
}
function Ai(e, t) {
  var n = {};
  return n[e.toLowerCase()] = t.toLowerCase(), n["Webkit" + e] = "webkit" + t, n["Moz" + e] = "moz" + t, n;
}
var Yn = { animationend: Ai("Animation", "AnimationEnd"), animationiteration: Ai("Animation", "AnimationIteration"), animationstart: Ai("Animation", "AnimationStart"), transitionend: Ai("Transition", "TransitionEnd") }, Ss = {}, vd = {};
It && (vd = document.createElement("div").style, "AnimationEvent" in window || (delete Yn.animationend.animation, delete Yn.animationiteration.animation, delete Yn.animationstart.animation), "TransitionEvent" in window || delete Yn.transitionend.transition);
function Qo(e) {
  if (Ss[e])
    return Ss[e];
  if (!Yn[e])
    return e;
  var t = Yn[e], n;
  for (n in t)
    if (t.hasOwnProperty(n) && n in vd)
      return Ss[e] = t[n];
  return e;
}
var yd = Qo("animationend"), gd = Qo("animationiteration"), wd = Qo("animationstart"), _d = Qo("transitionend"), kd = /* @__PURE__ */ new Map(), _u = "abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");
function fn(e, t) {
  kd.set(e, t), In(t, [e]);
}
for (var xs = 0; xs < _u.length; xs++) {
  var Es = _u[xs], Wh = Es.toLowerCase(), $h = Es[0].toUpperCase() + Es.slice(1);
  fn(Wh, "on" + $h);
}
fn(yd, "onAnimationEnd");
fn(gd, "onAnimationIteration");
fn(wd, "onAnimationStart");
fn("dblclick", "onDoubleClick");
fn("focusin", "onFocus");
fn("focusout", "onBlur");
fn(_d, "onTransitionEnd");
ar("onMouseEnter", ["mouseout", "mouseover"]);
ar("onMouseLeave", ["mouseout", "mouseover"]);
ar("onPointerEnter", ["pointerout", "pointerover"]);
ar("onPointerLeave", ["pointerout", "pointerover"]);
In("onChange", "change click focusin focusout input keydown keyup selectionchange".split(" "));
In("onSelect", "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));
In("onBeforeInput", ["compositionend", "keypress", "textInput", "paste"]);
In("onCompositionEnd", "compositionend focusout keydown keypress keyup mousedown".split(" "));
In("onCompositionStart", "compositionstart focusout keydown keypress keyup mousedown".split(" "));
In("onCompositionUpdate", "compositionupdate focusout keydown keypress keyup mousedown".split(" "));
var jr = "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "), Uh = new Set("cancel close invalid load scroll toggle".split(" ").concat(jr));
function ku(e, t, n) {
  var r = e.type || "unknown-event";
  e.currentTarget = n, Wp(r, t, void 0, e), e.currentTarget = null;
}
function Sd(e, t) {
  t = (t & 4) !== 0;
  for (var n = 0; n < e.length; n++) {
    var r = e[n], i = r.event;
    r = r.listeners;
    e: {
      var o = void 0;
      if (t)
        for (var s = r.length - 1; 0 <= s; s--) {
          var a = r[s], l = a.instance, u = a.currentTarget;
          if (a = a.listener, l !== o && i.isPropagationStopped())
            break e;
          ku(i, a, u), o = l;
        }
      else
        for (s = 0; s < r.length; s++) {
          if (a = r[s], l = a.instance, u = a.currentTarget, a = a.listener, l !== o && i.isPropagationStopped())
            break e;
          ku(i, a, u), o = l;
        }
    }
  }
  if (uo)
    throw e = aa, uo = !1, aa = null, e;
}
function J(e, t) {
  var n = t[ya];
  n === void 0 && (n = t[ya] = /* @__PURE__ */ new Set());
  var r = e + "__bubble";
  n.has(r) || (xd(t, e, 2, !1), n.add(r));
}
function Cs(e, t, n) {
  var r = 0;
  t && (r |= 4), xd(n, e, r, t);
}
var Fi = "_reactListening" + Math.random().toString(36).slice(2);
function br(e) {
  if (!e[Fi]) {
    e[Fi] = !0, Rc.forEach(function(n) {
      n !== "selectionchange" && (Uh.has(n) || Cs(n, !1, e), Cs(n, !0, e));
    });
    var t = e.nodeType === 9 ? e : e.ownerDocument;
    t === null || t[Fi] || (t[Fi] = !0, Cs("selectionchange", !1, t));
  }
}
function xd(e, t, n, r) {
  switch (sd(t)) {
    case 1:
      var i = nh;
      break;
    case 4:
      i = rh;
      break;
    default:
      i = al;
  }
  n = i.bind(null, t, n, e), i = void 0, !sa || t !== "touchstart" && t !== "touchmove" && t !== "wheel" || (i = !0), r ? i !== void 0 ? e.addEventListener(t, n, { capture: !0, passive: i }) : e.addEventListener(t, n, !0) : i !== void 0 ? e.addEventListener(t, n, { passive: i }) : e.addEventListener(t, n, !1);
}
function Ts(e, t, n, r, i) {
  var o = r;
  if (!(t & 1) && !(t & 2) && r !== null)
    e:
      for (; ; ) {
        if (r === null)
          return;
        var s = r.tag;
        if (s === 3 || s === 4) {
          var a = r.stateNode.containerInfo;
          if (a === i || a.nodeType === 8 && a.parentNode === i)
            break;
          if (s === 4)
            for (s = r.return; s !== null; ) {
              var l = s.tag;
              if ((l === 3 || l === 4) && (l = s.stateNode.containerInfo, l === i || l.nodeType === 8 && l.parentNode === i))
                return;
              s = s.return;
            }
          for (; a !== null; ) {
            if (s = wn(a), s === null)
              return;
            if (l = s.tag, l === 5 || l === 6) {
              r = o = s;
              continue e;
            }
            a = a.parentNode;
          }
        }
        r = r.return;
      }
  Yc(function() {
    var u = o, p = rl(n), h = [];
    e: {
      var m = kd.get(e);
      if (m !== void 0) {
        var y = ul, w = e;
        switch (e) {
          case "keypress":
            if (Ji(n) === 0)
              break e;
          case "keydown":
          case "keyup":
            y = gh;
            break;
          case "focusin":
            w = "focus", y = ws;
            break;
          case "focusout":
            w = "blur", y = ws;
            break;
          case "beforeblur":
          case "afterblur":
            y = ws;
            break;
          case "click":
            if (n.button === 2)
              break e;
          case "auxclick":
          case "dblclick":
          case "mousedown":
          case "mousemove":
          case "mouseup":
          case "mouseout":
          case "mouseover":
          case "contextmenu":
            y = uu;
            break;
          case "drag":
          case "dragend":
          case "dragenter":
          case "dragexit":
          case "dragleave":
          case "dragover":
          case "dragstart":
          case "drop":
            y = sh;
            break;
          case "touchcancel":
          case "touchend":
          case "touchmove":
          case "touchstart":
            y = kh;
            break;
          case yd:
          case gd:
          case wd:
            y = uh;
            break;
          case _d:
            y = xh;
            break;
          case "scroll":
            y = ih;
            break;
          case "wheel":
            y = Ch;
            break;
          case "copy":
          case "cut":
          case "paste":
            y = dh;
            break;
          case "gotpointercapture":
          case "lostpointercapture":
          case "pointercancel":
          case "pointerdown":
          case "pointermove":
          case "pointerout":
          case "pointerover":
          case "pointerup":
            y = du;
        }
        var k = (t & 4) !== 0, F = !k && e === "scroll", d = k ? m !== null ? m + "Capture" : null : m;
        k = [];
        for (var c = u, f; c !== null; ) {
          f = c;
          var v = f.stateNode;
          if (f.tag === 5 && v !== null && (f = v, d !== null && (v = Qr(c, d), v != null && k.push(ei(c, v, f)))), F)
            break;
          c = c.return;
        }
        0 < k.length && (m = new y(m, w, null, n, p), h.push({ event: m, listeners: k }));
      }
    }
    if (!(t & 7)) {
      e: {
        if (m = e === "mouseover" || e === "pointerover", y = e === "mouseout" || e === "pointerout", m && n !== ia && (w = n.relatedTarget || n.fromElement) && (wn(w) || w[jt]))
          break e;
        if ((y || m) && (m = p.window === p ? p : (m = p.ownerDocument) ? m.defaultView || m.parentWindow : window, y ? (w = n.relatedTarget || n.toElement, y = u, w = w ? wn(w) : null, w !== null && (F = jn(w), w !== F || w.tag !== 5 && w.tag !== 6) && (w = null)) : (y = null, w = u), y !== w)) {
          if (k = uu, v = "onMouseLeave", d = "onMouseEnter", c = "mouse", (e === "pointerout" || e === "pointerover") && (k = du, v = "onPointerLeave", d = "onPointerEnter", c = "pointer"), F = y == null ? m : Qn(y), f = w == null ? m : Qn(w), m = new k(v, c + "leave", y, n, p), m.target = F, m.relatedTarget = f, v = null, wn(p) === u && (k = new k(d, c + "enter", w, n, p), k.target = f, k.relatedTarget = F, v = k), F = v, y && w)
            t: {
              for (k = y, d = w, c = 0, f = k; f; f = Vn(f))
                c++;
              for (f = 0, v = d; v; v = Vn(v))
                f++;
              for (; 0 < c - f; )
                k = Vn(k), c--;
              for (; 0 < f - c; )
                d = Vn(d), f--;
              for (; c--; ) {
                if (k === d || d !== null && k === d.alternate)
                  break t;
                k = Vn(k), d = Vn(d);
              }
              k = null;
            }
          else
            k = null;
          y !== null && Su(h, m, y, k, !1), w !== null && F !== null && Su(h, F, w, k, !0);
        }
      }
      e: {
        if (m = u ? Qn(u) : window, y = m.nodeName && m.nodeName.toLowerCase(), y === "select" || y === "input" && m.type === "file")
          var x = Dh;
        else if (hu(m))
          if (fd)
            x = zh;
          else {
            x = Ih;
            var S = Mh;
          }
        else
          (y = m.nodeName) && y.toLowerCase() === "input" && (m.type === "checkbox" || m.type === "radio") && (x = jh);
        if (x && (x = x(e, u))) {
          dd(h, x, n, p);
          break e;
        }
        S && S(e, m, u), e === "focusout" && (S = m._wrapperState) && S.controlled && m.type === "number" && bs(m, "number", m.value);
      }
      switch (S = u ? Qn(u) : window, e) {
        case "focusin":
          (hu(S) || S.contentEditable === "true") && (Hn = S, da = u, Wr = null);
          break;
        case "focusout":
          Wr = da = Hn = null;
          break;
        case "mousedown":
          fa = !0;
          break;
        case "contextmenu":
        case "mouseup":
        case "dragend":
          fa = !1, wu(h, n, p);
          break;
        case "selectionchange":
          if (Vh)
            break;
        case "keydown":
        case "keyup":
          wu(h, n, p);
      }
      var C;
      if (dl)
        e: {
          switch (e) {
            case "compositionstart":
              var E = "onCompositionStart";
              break e;
            case "compositionend":
              E = "onCompositionEnd";
              break e;
            case "compositionupdate":
              E = "onCompositionUpdate";
              break e;
          }
          E = void 0;
        }
      else
        Bn ? ud(e, n) && (E = "onCompositionEnd") : e === "keydown" && n.keyCode === 229 && (E = "onCompositionStart");
      E && (ld && n.locale !== "ko" && (Bn || E !== "onCompositionStart" ? E === "onCompositionEnd" && Bn && (C = ad()) : (Gt = p, ll = "value" in Gt ? Gt.value : Gt.textContent, Bn = !0)), S = mo(u, E), 0 < S.length && (E = new cu(E, e, null, n, p), h.push({ event: E, listeners: S }), C ? E.data = C : (C = cd(n), C !== null && (E.data = C)))), (C = Nh ? Oh(e, n) : Ph(e, n)) && (u = mo(u, "onBeforeInput"), 0 < u.length && (p = new cu("onBeforeInput", "beforeinput", null, n, p), h.push({ event: p, listeners: u }), p.data = C));
    }
    Sd(h, t);
  });
}
function ei(e, t, n) {
  return { instance: e, listener: t, currentTarget: n };
}
function mo(e, t) {
  for (var n = t + "Capture", r = []; e !== null; ) {
    var i = e, o = i.stateNode;
    i.tag === 5 && o !== null && (i = o, o = Qr(e, n), o != null && r.unshift(ei(e, o, i)), o = Qr(e, t), o != null && r.push(ei(e, o, i))), e = e.return;
  }
  return r;
}
function Vn(e) {
  if (e === null)
    return null;
  do
    e = e.return;
  while (e && e.tag !== 5);
  return e || null;
}
function Su(e, t, n, r, i) {
  for (var o = t._reactName, s = []; n !== null && n !== r; ) {
    var a = n, l = a.alternate, u = a.stateNode;
    if (l !== null && l === r)
      break;
    a.tag === 5 && u !== null && (a = u, i ? (l = Qr(n, o), l != null && s.unshift(ei(n, l, a))) : i || (l = Qr(n, o), l != null && s.push(ei(n, l, a)))), n = n.return;
  }
  s.length !== 0 && e.push({ event: t, listeners: s });
}
var Zh = /\r\n?/g, Bh = /\u0000|\uFFFD/g;
function xu(e) {
  return (typeof e == "string" ? e : "" + e).replace(Zh, `
`).replace(Bh, "");
}
function Vi(e, t, n) {
  if (t = xu(t), xu(e) !== t && n)
    throw Error(g(425));
}
function vo() {
}
var pa = null, ha = null;
function ma(e, t) {
  return e === "textarea" || e === "noscript" || typeof t.children == "string" || typeof t.children == "number" || typeof t.dangerouslySetInnerHTML == "object" && t.dangerouslySetInnerHTML !== null && t.dangerouslySetInnerHTML.__html != null;
}
var va = typeof setTimeout == "function" ? setTimeout : void 0, Hh = typeof clearTimeout == "function" ? clearTimeout : void 0, Eu = typeof Promise == "function" ? Promise : void 0, Yh = typeof queueMicrotask == "function" ? queueMicrotask : typeof Eu < "u" ? function(e) {
  return Eu.resolve(null).then(e).catch(Qh);
} : va;
function Qh(e) {
  setTimeout(function() {
    throw e;
  });
}
function Ns(e, t) {
  var n = t, r = 0;
  do {
    var i = n.nextSibling;
    if (e.removeChild(n), i && i.nodeType === 8)
      if (n = i.data, n === "/$") {
        if (r === 0) {
          e.removeChild(i), Xr(t);
          return;
        }
        r--;
      } else
        n !== "$" && n !== "$?" && n !== "$!" || r++;
    n = i;
  } while (n);
  Xr(t);
}
function en(e) {
  for (; e != null; e = e.nextSibling) {
    var t = e.nodeType;
    if (t === 1 || t === 3)
      break;
    if (t === 8) {
      if (t = e.data, t === "$" || t === "$!" || t === "$?")
        break;
      if (t === "/$")
        return null;
    }
  }
  return e;
}
function Cu(e) {
  e = e.previousSibling;
  for (var t = 0; e; ) {
    if (e.nodeType === 8) {
      var n = e.data;
      if (n === "$" || n === "$!" || n === "$?") {
        if (t === 0)
          return e;
        t--;
      } else
        n === "/$" && t++;
    }
    e = e.previousSibling;
  }
  return null;
}
var wr = Math.random().toString(36).slice(2), vt = "__reactFiber$" + wr, ti = "__reactProps$" + wr, jt = "__reactContainer$" + wr, ya = "__reactEvents$" + wr, Gh = "__reactListeners$" + wr, Kh = "__reactHandles$" + wr;
function wn(e) {
  var t = e[vt];
  if (t)
    return t;
  for (var n = e.parentNode; n; ) {
    if (t = n[jt] || n[vt]) {
      if (n = t.alternate, t.child !== null || n !== null && n.child !== null)
        for (e = Cu(e); e !== null; ) {
          if (n = e[vt])
            return n;
          e = Cu(e);
        }
      return t;
    }
    e = n, n = e.parentNode;
  }
  return null;
}
function Ti(e) {
  return e = e[vt] || e[jt], !e || e.tag !== 5 && e.tag !== 6 && e.tag !== 13 && e.tag !== 3 ? null : e;
}
function Qn(e) {
  if (e.tag === 5 || e.tag === 6)
    return e.stateNode;
  throw Error(g(33));
}
function Go(e) {
  return e[ti] || null;
}
var ga = [], Gn = -1;
function pn(e) {
  return { current: e };
}
function b(e) {
  0 > Gn || (e.current = ga[Gn], ga[Gn] = null, Gn--);
}
function G(e, t) {
  Gn++, ga[Gn] = e.current, e.current = t;
}
var an = {}, Ce = pn(an), ze = pn(!1), Cn = an;
function lr(e, t) {
  var n = e.type.contextTypes;
  if (!n)
    return an;
  var r = e.stateNode;
  if (r && r.__reactInternalMemoizedUnmaskedChildContext === t)
    return r.__reactInternalMemoizedMaskedChildContext;
  var i = {}, o;
  for (o in n)
    i[o] = t[o];
  return r && (e = e.stateNode, e.__reactInternalMemoizedUnmaskedChildContext = t, e.__reactInternalMemoizedMaskedChildContext = i), i;
}
function Ae(e) {
  return e = e.childContextTypes, e != null;
}
function yo() {
  b(ze), b(Ce);
}
function Tu(e, t, n) {
  if (Ce.current !== an)
    throw Error(g(168));
  G(Ce, t), G(ze, n);
}
function Ed(e, t, n) {
  var r = e.stateNode;
  if (t = t.childContextTypes, typeof r.getChildContext != "function")
    return n;
  r = r.getChildContext();
  for (var i in r)
    if (!(i in t))
      throw Error(g(108, Mp(e) || "Unknown", i));
  return oe({}, n, r);
}
function go(e) {
  return e = (e = e.stateNode) && e.__reactInternalMemoizedMergedChildContext || an, Cn = Ce.current, G(Ce, e), G(ze, ze.current), !0;
}
function Nu(e, t, n) {
  var r = e.stateNode;
  if (!r)
    throw Error(g(169));
  n ? (e = Ed(e, t, Cn), r.__reactInternalMemoizedMergedChildContext = e, b(ze), b(Ce), G(Ce, e)) : b(ze), G(ze, n);
}
var Nt = null, Ko = !1, Os = !1;
function Cd(e) {
  Nt === null ? Nt = [e] : Nt.push(e);
}
function Xh(e) {
  Ko = !0, Cd(e);
}
function hn() {
  if (!Os && Nt !== null) {
    Os = !0;
    var e = 0, t = H;
    try {
      var n = Nt;
      for (H = 1; e < n.length; e++) {
        var r = n[e];
        do
          r = r(!0);
        while (r !== null);
      }
      Nt = null, Ko = !1;
    } catch (i) {
      throw Nt !== null && (Nt = Nt.slice(e + 1)), Xc(il, hn), i;
    } finally {
      H = t, Os = !1;
    }
  }
  return null;
}
var Kn = [], Xn = 0, wo = null, _o = 0, Qe = [], Ge = 0, Tn = null, Pt = 1, Rt = "";
function vn(e, t) {
  Kn[Xn++] = _o, Kn[Xn++] = wo, wo = e, _o = t;
}
function Td(e, t, n) {
  Qe[Ge++] = Pt, Qe[Ge++] = Rt, Qe[Ge++] = Tn, Tn = e;
  var r = Pt;
  e = Rt;
  var i = 32 - it(r) - 1;
  r &= ~(1 << i), n += 1;
  var o = 32 - it(t) + i;
  if (30 < o) {
    var s = i - i % 5;
    o = (r & (1 << s) - 1).toString(32), r >>= s, i -= s, Pt = 1 << 32 - it(t) + i | n << i | r, Rt = o + e;
  } else
    Pt = 1 << o | n << i | r, Rt = e;
}
function pl(e) {
  e.return !== null && (vn(e, 1), Td(e, 1, 0));
}
function hl(e) {
  for (; e === wo; )
    wo = Kn[--Xn], Kn[Xn] = null, _o = Kn[--Xn], Kn[Xn] = null;
  for (; e === Tn; )
    Tn = Qe[--Ge], Qe[Ge] = null, Rt = Qe[--Ge], Qe[Ge] = null, Pt = Qe[--Ge], Qe[Ge] = null;
}
var Ue = null, $e = null, ee = !1, nt = null;
function Nd(e, t) {
  var n = Ke(5, null, null, 0);
  n.elementType = "DELETED", n.stateNode = t, n.return = e, t = e.deletions, t === null ? (e.deletions = [n], e.flags |= 16) : t.push(n);
}
function Ou(e, t) {
  switch (e.tag) {
    case 5:
      var n = e.type;
      return t = t.nodeType !== 1 || n.toLowerCase() !== t.nodeName.toLowerCase() ? null : t, t !== null ? (e.stateNode = t, Ue = e, $e = en(t.firstChild), !0) : !1;
    case 6:
      return t = e.pendingProps === "" || t.nodeType !== 3 ? null : t, t !== null ? (e.stateNode = t, Ue = e, $e = null, !0) : !1;
    case 13:
      return t = t.nodeType !== 8 ? null : t, t !== null ? (n = Tn !== null ? { id: Pt, overflow: Rt } : null, e.memoizedState = { dehydrated: t, treeContext: n, retryLane: 1073741824 }, n = Ke(18, null, null, 0), n.stateNode = t, n.return = e, e.child = n, Ue = e, $e = null, !0) : !1;
    default:
      return !1;
  }
}
function wa(e) {
  return (e.mode & 1) !== 0 && (e.flags & 128) === 0;
}
function _a(e) {
  if (ee) {
    var t = $e;
    if (t) {
      var n = t;
      if (!Ou(e, t)) {
        if (wa(e))
          throw Error(g(418));
        t = en(n.nextSibling);
        var r = Ue;
        t && Ou(e, t) ? Nd(r, n) : (e.flags = e.flags & -4097 | 2, ee = !1, Ue = e);
      }
    } else {
      if (wa(e))
        throw Error(g(418));
      e.flags = e.flags & -4097 | 2, ee = !1, Ue = e;
    }
  }
}
function Pu(e) {
  for (e = e.return; e !== null && e.tag !== 5 && e.tag !== 3 && e.tag !== 13; )
    e = e.return;
  Ue = e;
}
function Wi(e) {
  if (e !== Ue)
    return !1;
  if (!ee)
    return Pu(e), ee = !0, !1;
  var t;
  if ((t = e.tag !== 3) && !(t = e.tag !== 5) && (t = e.type, t = t !== "head" && t !== "body" && !ma(e.type, e.memoizedProps)), t && (t = $e)) {
    if (wa(e))
      throw Od(), Error(g(418));
    for (; t; )
      Nd(e, t), t = en(t.nextSibling);
  }
  if (Pu(e), e.tag === 13) {
    if (e = e.memoizedState, e = e !== null ? e.dehydrated : null, !e)
      throw Error(g(317));
    e: {
      for (e = e.nextSibling, t = 0; e; ) {
        if (e.nodeType === 8) {
          var n = e.data;
          if (n === "/$") {
            if (t === 0) {
              $e = en(e.nextSibling);
              break e;
            }
            t--;
          } else
            n !== "$" && n !== "$!" && n !== "$?" || t++;
        }
        e = e.nextSibling;
      }
      $e = null;
    }
  } else
    $e = Ue ? en(e.stateNode.nextSibling) : null;
  return !0;
}
function Od() {
  for (var e = $e; e; )
    e = en(e.nextSibling);
}
function ur() {
  $e = Ue = null, ee = !1;
}
function ml(e) {
  nt === null ? nt = [e] : nt.push(e);
}
var qh = Vt.ReactCurrentBatchConfig;
function et(e, t) {
  if (e && e.defaultProps) {
    t = oe({}, t), e = e.defaultProps;
    for (var n in e)
      t[n] === void 0 && (t[n] = e[n]);
    return t;
  }
  return t;
}
var ko = pn(null), So = null, qn = null, vl = null;
function yl() {
  vl = qn = So = null;
}
function gl(e) {
  var t = ko.current;
  b(ko), e._currentValue = t;
}
function ka(e, t, n) {
  for (; e !== null; ) {
    var r = e.alternate;
    if ((e.childLanes & t) !== t ? (e.childLanes |= t, r !== null && (r.childLanes |= t)) : r !== null && (r.childLanes & t) !== t && (r.childLanes |= t), e === n)
      break;
    e = e.return;
  }
}
function ir(e, t) {
  So = e, vl = qn = null, e = e.dependencies, e !== null && e.firstContext !== null && (e.lanes & t && (je = !0), e.firstContext = null);
}
function qe(e) {
  var t = e._currentValue;
  if (vl !== e)
    if (e = { context: e, memoizedValue: t, next: null }, qn === null) {
      if (So === null)
        throw Error(g(308));
      qn = e, So.dependencies = { lanes: 0, firstContext: e };
    } else
      qn = qn.next = e;
  return t;
}
var _n = null;
function wl(e) {
  _n === null ? _n = [e] : _n.push(e);
}
function Pd(e, t, n, r) {
  var i = t.interleaved;
  return i === null ? (n.next = n, wl(t)) : (n.next = i.next, i.next = n), t.interleaved = n, zt(e, r);
}
function zt(e, t) {
  e.lanes |= t;
  var n = e.alternate;
  for (n !== null && (n.lanes |= t), n = e, e = e.return; e !== null; )
    e.childLanes |= t, n = e.alternate, n !== null && (n.childLanes |= t), n = e, e = e.return;
  return n.tag === 3 ? n.stateNode : null;
}
var Bt = !1;
function _l(e) {
  e.updateQueue = { baseState: e.memoizedState, firstBaseUpdate: null, lastBaseUpdate: null, shared: { pending: null, interleaved: null, lanes: 0 }, effects: null };
}
function Rd(e, t) {
  e = e.updateQueue, t.updateQueue === e && (t.updateQueue = { baseState: e.baseState, firstBaseUpdate: e.firstBaseUpdate, lastBaseUpdate: e.lastBaseUpdate, shared: e.shared, effects: e.effects });
}
function Dt(e, t) {
  return { eventTime: e, lane: t, tag: 0, payload: null, callback: null, next: null };
}
function tn(e, t, n) {
  var r = e.updateQueue;
  if (r === null)
    return null;
  if (r = r.shared, W & 2) {
    var i = r.pending;
    return i === null ? t.next = t : (t.next = i.next, i.next = t), r.pending = t, zt(e, n);
  }
  return i = r.interleaved, i === null ? (t.next = t, wl(r)) : (t.next = i.next, i.next = t), r.interleaved = t, zt(e, n);
}
function bi(e, t, n) {
  if (t = t.updateQueue, t !== null && (t = t.shared, (n & 4194240) !== 0)) {
    var r = t.lanes;
    r &= e.pendingLanes, n |= r, t.lanes = n, ol(e, n);
  }
}
function Ru(e, t) {
  var n = e.updateQueue, r = e.alternate;
  if (r !== null && (r = r.updateQueue, n === r)) {
    var i = null, o = null;
    if (n = n.firstBaseUpdate, n !== null) {
      do {
        var s = { eventTime: n.eventTime, lane: n.lane, tag: n.tag, payload: n.payload, callback: n.callback, next: null };
        o === null ? i = o = s : o = o.next = s, n = n.next;
      } while (n !== null);
      o === null ? i = o = t : o = o.next = t;
    } else
      i = o = t;
    n = { baseState: r.baseState, firstBaseUpdate: i, lastBaseUpdate: o, shared: r.shared, effects: r.effects }, e.updateQueue = n;
    return;
  }
  e = n.lastBaseUpdate, e === null ? n.firstBaseUpdate = t : e.next = t, n.lastBaseUpdate = t;
}
function xo(e, t, n, r) {
  var i = e.updateQueue;
  Bt = !1;
  var o = i.firstBaseUpdate, s = i.lastBaseUpdate, a = i.shared.pending;
  if (a !== null) {
    i.shared.pending = null;
    var l = a, u = l.next;
    l.next = null, s === null ? o = u : s.next = u, s = l;
    var p = e.alternate;
    p !== null && (p = p.updateQueue, a = p.lastBaseUpdate, a !== s && (a === null ? p.firstBaseUpdate = u : a.next = u, p.lastBaseUpdate = l));
  }
  if (o !== null) {
    var h = i.baseState;
    s = 0, p = u = l = null, a = o;
    do {
      var m = a.lane, y = a.eventTime;
      if ((r & m) === m) {
        p !== null && (p = p.next = {
          eventTime: y,
          lane: 0,
          tag: a.tag,
          payload: a.payload,
          callback: a.callback,
          next: null
        });
        e: {
          var w = e, k = a;
          switch (m = t, y = n, k.tag) {
            case 1:
              if (w = k.payload, typeof w == "function") {
                h = w.call(y, h, m);
                break e;
              }
              h = w;
              break e;
            case 3:
              w.flags = w.flags & -65537 | 128;
            case 0:
              if (w = k.payload, m = typeof w == "function" ? w.call(y, h, m) : w, m == null)
                break e;
              h = oe({}, h, m);
              break e;
            case 2:
              Bt = !0;
          }
        }
        a.callback !== null && a.lane !== 0 && (e.flags |= 64, m = i.effects, m === null ? i.effects = [a] : m.push(a));
      } else
        y = { eventTime: y, lane: m, tag: a.tag, payload: a.payload, callback: a.callback, next: null }, p === null ? (u = p = y, l = h) : p = p.next = y, s |= m;
      if (a = a.next, a === null) {
        if (a = i.shared.pending, a === null)
          break;
        m = a, a = m.next, m.next = null, i.lastBaseUpdate = m, i.shared.pending = null;
      }
    } while (!0);
    if (p === null && (l = h), i.baseState = l, i.firstBaseUpdate = u, i.lastBaseUpdate = p, t = i.shared.interleaved, t !== null) {
      i = t;
      do
        s |= i.lane, i = i.next;
      while (i !== t);
    } else
      o === null && (i.shared.lanes = 0);
    On |= s, e.lanes = s, e.memoizedState = h;
  }
}
function Lu(e, t, n) {
  if (e = t.effects, t.effects = null, e !== null)
    for (t = 0; t < e.length; t++) {
      var r = e[t], i = r.callback;
      if (i !== null) {
        if (r.callback = null, r = n, typeof i != "function")
          throw Error(g(191, i));
        i.call(r);
      }
    }
}
var Ld = new Pc.Component().refs;
function Sa(e, t, n, r) {
  t = e.memoizedState, n = n(r, t), n = n == null ? t : oe({}, t, n), e.memoizedState = n, e.lanes === 0 && (e.updateQueue.baseState = n);
}
var Xo = { isMounted: function(e) {
  return (e = e._reactInternals) ? jn(e) === e : !1;
}, enqueueSetState: function(e, t, n) {
  e = e._reactInternals;
  var r = Pe(), i = rn(e), o = Dt(r, i);
  o.payload = t, n != null && (o.callback = n), t = tn(e, o, i), t !== null && (ot(t, e, i, r), bi(t, e, i));
}, enqueueReplaceState: function(e, t, n) {
  e = e._reactInternals;
  var r = Pe(), i = rn(e), o = Dt(r, i);
  o.tag = 1, o.payload = t, n != null && (o.callback = n), t = tn(e, o, i), t !== null && (ot(t, e, i, r), bi(t, e, i));
}, enqueueForceUpdate: function(e, t) {
  e = e._reactInternals;
  var n = Pe(), r = rn(e), i = Dt(n, r);
  i.tag = 2, t != null && (i.callback = t), t = tn(e, i, r), t !== null && (ot(t, e, r, n), bi(t, e, r));
} };
function Du(e, t, n, r, i, o, s) {
  return e = e.stateNode, typeof e.shouldComponentUpdate == "function" ? e.shouldComponentUpdate(r, o, s) : t.prototype && t.prototype.isPureReactComponent ? !Jr(n, r) || !Jr(i, o) : !0;
}
function Dd(e, t, n) {
  var r = !1, i = an, o = t.contextType;
  return typeof o == "object" && o !== null ? o = qe(o) : (i = Ae(t) ? Cn : Ce.current, r = t.contextTypes, o = (r = r != null) ? lr(e, i) : an), t = new t(n, o), e.memoizedState = t.state !== null && t.state !== void 0 ? t.state : null, t.updater = Xo, e.stateNode = t, t._reactInternals = e, r && (e = e.stateNode, e.__reactInternalMemoizedUnmaskedChildContext = i, e.__reactInternalMemoizedMaskedChildContext = o), t;
}
function Mu(e, t, n, r) {
  e = t.state, typeof t.componentWillReceiveProps == "function" && t.componentWillReceiveProps(n, r), typeof t.UNSAFE_componentWillReceiveProps == "function" && t.UNSAFE_componentWillReceiveProps(n, r), t.state !== e && Xo.enqueueReplaceState(t, t.state, null);
}
function xa(e, t, n, r) {
  var i = e.stateNode;
  i.props = n, i.state = e.memoizedState, i.refs = Ld, _l(e);
  var o = t.contextType;
  typeof o == "object" && o !== null ? i.context = qe(o) : (o = Ae(t) ? Cn : Ce.current, i.context = lr(e, o)), i.state = e.memoizedState, o = t.getDerivedStateFromProps, typeof o == "function" && (Sa(e, t, o, n), i.state = e.memoizedState), typeof t.getDerivedStateFromProps == "function" || typeof i.getSnapshotBeforeUpdate == "function" || typeof i.UNSAFE_componentWillMount != "function" && typeof i.componentWillMount != "function" || (t = i.state, typeof i.componentWillMount == "function" && i.componentWillMount(), typeof i.UNSAFE_componentWillMount == "function" && i.UNSAFE_componentWillMount(), t !== i.state && Xo.enqueueReplaceState(i, i.state, null), xo(e, n, i, r), i.state = e.memoizedState), typeof i.componentDidMount == "function" && (e.flags |= 4194308);
}
function Tr(e, t, n) {
  if (e = n.ref, e !== null && typeof e != "function" && typeof e != "object") {
    if (n._owner) {
      if (n = n._owner, n) {
        if (n.tag !== 1)
          throw Error(g(309));
        var r = n.stateNode;
      }
      if (!r)
        throw Error(g(147, e));
      var i = r, o = "" + e;
      return t !== null && t.ref !== null && typeof t.ref == "function" && t.ref._stringRef === o ? t.ref : (t = function(s) {
        var a = i.refs;
        a === Ld && (a = i.refs = {}), s === null ? delete a[o] : a[o] = s;
      }, t._stringRef = o, t);
    }
    if (typeof e != "string")
      throw Error(g(284));
    if (!n._owner)
      throw Error(g(290, e));
  }
  return e;
}
function $i(e, t) {
  throw e = Object.prototype.toString.call(t), Error(g(31, e === "[object Object]" ? "object with keys {" + Object.keys(t).join(", ") + "}" : e));
}
function Iu(e) {
  var t = e._init;
  return t(e._payload);
}
function Md(e) {
  function t(d, c) {
    if (e) {
      var f = d.deletions;
      f === null ? (d.deletions = [c], d.flags |= 16) : f.push(c);
    }
  }
  function n(d, c) {
    if (!e)
      return null;
    for (; c !== null; )
      t(d, c), c = c.sibling;
    return null;
  }
  function r(d, c) {
    for (d = /* @__PURE__ */ new Map(); c !== null; )
      c.key !== null ? d.set(c.key, c) : d.set(c.index, c), c = c.sibling;
    return d;
  }
  function i(d, c) {
    return d = on(d, c), d.index = 0, d.sibling = null, d;
  }
  function o(d, c, f) {
    return d.index = f, e ? (f = d.alternate, f !== null ? (f = f.index, f < c ? (d.flags |= 2, c) : f) : (d.flags |= 2, c)) : (d.flags |= 1048576, c);
  }
  function s(d) {
    return e && d.alternate === null && (d.flags |= 2), d;
  }
  function a(d, c, f, v) {
    return c === null || c.tag !== 6 ? (c = js(f, d.mode, v), c.return = d, c) : (c = i(c, f), c.return = d, c);
  }
  function l(d, c, f, v) {
    var x = f.type;
    return x === Zn ? p(d, c, f.props.children, v, f.key) : c !== null && (c.elementType === x || typeof x == "object" && x !== null && x.$$typeof === Zt && Iu(x) === c.type) ? (v = i(c, f.props), v.ref = Tr(d, c, f), v.return = d, v) : (v = oo(f.type, f.key, f.props, null, d.mode, v), v.ref = Tr(d, c, f), v.return = d, v);
  }
  function u(d, c, f, v) {
    return c === null || c.tag !== 4 || c.stateNode.containerInfo !== f.containerInfo || c.stateNode.implementation !== f.implementation ? (c = zs(f, d.mode, v), c.return = d, c) : (c = i(c, f.children || []), c.return = d, c);
  }
  function p(d, c, f, v, x) {
    return c === null || c.tag !== 7 ? (c = xn(f, d.mode, v, x), c.return = d, c) : (c = i(c, f), c.return = d, c);
  }
  function h(d, c, f) {
    if (typeof c == "string" && c !== "" || typeof c == "number")
      return c = js("" + c, d.mode, f), c.return = d, c;
    if (typeof c == "object" && c !== null) {
      switch (c.$$typeof) {
        case Ri:
          return f = oo(c.type, c.key, c.props, null, d.mode, f), f.ref = Tr(d, null, c), f.return = d, f;
        case Un:
          return c = zs(c, d.mode, f), c.return = d, c;
        case Zt:
          var v = c._init;
          return h(d, v(c._payload), f);
      }
      if (Mr(c) || kr(c))
        return c = xn(c, d.mode, f, null), c.return = d, c;
      $i(d, c);
    }
    return null;
  }
  function m(d, c, f, v) {
    var x = c !== null ? c.key : null;
    if (typeof f == "string" && f !== "" || typeof f == "number")
      return x !== null ? null : a(d, c, "" + f, v);
    if (typeof f == "object" && f !== null) {
      switch (f.$$typeof) {
        case Ri:
          return f.key === x ? l(d, c, f, v) : null;
        case Un:
          return f.key === x ? u(d, c, f, v) : null;
        case Zt:
          return x = f._init, m(
            d,
            c,
            x(f._payload),
            v
          );
      }
      if (Mr(f) || kr(f))
        return x !== null ? null : p(d, c, f, v, null);
      $i(d, f);
    }
    return null;
  }
  function y(d, c, f, v, x) {
    if (typeof v == "string" && v !== "" || typeof v == "number")
      return d = d.get(f) || null, a(c, d, "" + v, x);
    if (typeof v == "object" && v !== null) {
      switch (v.$$typeof) {
        case Ri:
          return d = d.get(v.key === null ? f : v.key) || null, l(c, d, v, x);
        case Un:
          return d = d.get(v.key === null ? f : v.key) || null, u(c, d, v, x);
        case Zt:
          var S = v._init;
          return y(d, c, f, S(v._payload), x);
      }
      if (Mr(v) || kr(v))
        return d = d.get(f) || null, p(c, d, v, x, null);
      $i(c, v);
    }
    return null;
  }
  function w(d, c, f, v) {
    for (var x = null, S = null, C = c, E = c = 0, Y = null; C !== null && E < f.length; E++) {
      C.index > E ? (Y = C, C = null) : Y = C.sibling;
      var D = m(d, C, f[E], v);
      if (D === null) {
        C === null && (C = Y);
        break;
      }
      e && C && D.alternate === null && t(d, C), c = o(D, c, E), S === null ? x = D : S.sibling = D, S = D, C = Y;
    }
    if (E === f.length)
      return n(d, C), ee && vn(d, E), x;
    if (C === null) {
      for (; E < f.length; E++)
        C = h(d, f[E], v), C !== null && (c = o(C, c, E), S === null ? x = C : S.sibling = C, S = C);
      return ee && vn(d, E), x;
    }
    for (C = r(d, C); E < f.length; E++)
      Y = y(C, d, E, f[E], v), Y !== null && (e && Y.alternate !== null && C.delete(Y.key === null ? E : Y.key), c = o(Y, c, E), S === null ? x = Y : S.sibling = Y, S = Y);
    return e && C.forEach(function(pe) {
      return t(d, pe);
    }), ee && vn(d, E), x;
  }
  function k(d, c, f, v) {
    var x = kr(f);
    if (typeof x != "function")
      throw Error(g(150));
    if (f = x.call(f), f == null)
      throw Error(g(151));
    for (var S = x = null, C = c, E = c = 0, Y = null, D = f.next(); C !== null && !D.done; E++, D = f.next()) {
      C.index > E ? (Y = C, C = null) : Y = C.sibling;
      var pe = m(d, C, D.value, v);
      if (pe === null) {
        C === null && (C = Y);
        break;
      }
      e && C && pe.alternate === null && t(d, C), c = o(pe, c, E), S === null ? x = pe : S.sibling = pe, S = pe, C = Y;
    }
    if (D.done)
      return n(
        d,
        C
      ), ee && vn(d, E), x;
    if (C === null) {
      for (; !D.done; E++, D = f.next())
        D = h(d, D.value, v), D !== null && (c = o(D, c, E), S === null ? x = D : S.sibling = D, S = D);
      return ee && vn(d, E), x;
    }
    for (C = r(d, C); !D.done; E++, D = f.next())
      D = y(C, d, E, D.value, v), D !== null && (e && D.alternate !== null && C.delete(D.key === null ? E : D.key), c = o(D, c, E), S === null ? x = D : S.sibling = D, S = D);
    return e && C.forEach(function(ct) {
      return t(d, ct);
    }), ee && vn(d, E), x;
  }
  function F(d, c, f, v) {
    if (typeof f == "object" && f !== null && f.type === Zn && f.key === null && (f = f.props.children), typeof f == "object" && f !== null) {
      switch (f.$$typeof) {
        case Ri:
          e: {
            for (var x = f.key, S = c; S !== null; ) {
              if (S.key === x) {
                if (x = f.type, x === Zn) {
                  if (S.tag === 7) {
                    n(d, S.sibling), c = i(S, f.props.children), c.return = d, d = c;
                    break e;
                  }
                } else if (S.elementType === x || typeof x == "object" && x !== null && x.$$typeof === Zt && Iu(x) === S.type) {
                  n(d, S.sibling), c = i(S, f.props), c.ref = Tr(d, S, f), c.return = d, d = c;
                  break e;
                }
                n(d, S);
                break;
              } else
                t(d, S);
              S = S.sibling;
            }
            f.type === Zn ? (c = xn(f.props.children, d.mode, v, f.key), c.return = d, d = c) : (v = oo(f.type, f.key, f.props, null, d.mode, v), v.ref = Tr(d, c, f), v.return = d, d = v);
          }
          return s(d);
        case Un:
          e: {
            for (S = f.key; c !== null; ) {
              if (c.key === S)
                if (c.tag === 4 && c.stateNode.containerInfo === f.containerInfo && c.stateNode.implementation === f.implementation) {
                  n(d, c.sibling), c = i(c, f.children || []), c.return = d, d = c;
                  break e;
                } else {
                  n(d, c);
                  break;
                }
              else
                t(d, c);
              c = c.sibling;
            }
            c = zs(f, d.mode, v), c.return = d, d = c;
          }
          return s(d);
        case Zt:
          return S = f._init, F(d, c, S(f._payload), v);
      }
      if (Mr(f))
        return w(d, c, f, v);
      if (kr(f))
        return k(d, c, f, v);
      $i(d, f);
    }
    return typeof f == "string" && f !== "" || typeof f == "number" ? (f = "" + f, c !== null && c.tag === 6 ? (n(d, c.sibling), c = i(c, f), c.return = d, d = c) : (n(d, c), c = js(f, d.mode, v), c.return = d, d = c), s(d)) : n(d, c);
  }
  return F;
}
var cr = Md(!0), Id = Md(!1), Ni = {}, wt = pn(Ni), ni = pn(Ni), ri = pn(Ni);
function kn(e) {
  if (e === Ni)
    throw Error(g(174));
  return e;
}
function kl(e, t) {
  switch (G(ri, t), G(ni, e), G(wt, Ni), e = t.nodeType, e) {
    case 9:
    case 11:
      t = (t = t.documentElement) ? t.namespaceURI : ta(null, "");
      break;
    default:
      e = e === 8 ? t.parentNode : t, t = e.namespaceURI || null, e = e.tagName, t = ta(t, e);
  }
  b(wt), G(wt, t);
}
function dr() {
  b(wt), b(ni), b(ri);
}
function jd(e) {
  kn(ri.current);
  var t = kn(wt.current), n = ta(t, e.type);
  t !== n && (G(ni, e), G(wt, n));
}
function Sl(e) {
  ni.current === e && (b(wt), b(ni));
}
var re = pn(0);
function Eo(e) {
  for (var t = e; t !== null; ) {
    if (t.tag === 13) {
      var n = t.memoizedState;
      if (n !== null && (n = n.dehydrated, n === null || n.data === "$?" || n.data === "$!"))
        return t;
    } else if (t.tag === 19 && t.memoizedProps.revealOrder !== void 0) {
      if (t.flags & 128)
        return t;
    } else if (t.child !== null) {
      t.child.return = t, t = t.child;
      continue;
    }
    if (t === e)
      break;
    for (; t.sibling === null; ) {
      if (t.return === null || t.return === e)
        return null;
      t = t.return;
    }
    t.sibling.return = t.return, t = t.sibling;
  }
  return null;
}
var Ps = [];
function xl() {
  for (var e = 0; e < Ps.length; e++)
    Ps[e]._workInProgressVersionPrimary = null;
  Ps.length = 0;
}
var eo = Vt.ReactCurrentDispatcher, Rs = Vt.ReactCurrentBatchConfig, Nn = 0, ie = null, de = null, me = null, Co = !1, $r = !1, ii = 0, Jh = 0;
function Se() {
  throw Error(g(321));
}
function El(e, t) {
  if (t === null)
    return !1;
  for (var n = 0; n < t.length && n < e.length; n++)
    if (!lt(e[n], t[n]))
      return !1;
  return !0;
}
function Cl(e, t, n, r, i, o) {
  if (Nn = o, ie = t, t.memoizedState = null, t.updateQueue = null, t.lanes = 0, eo.current = e === null || e.memoizedState === null ? nm : rm, e = n(r, i), $r) {
    o = 0;
    do {
      if ($r = !1, ii = 0, 25 <= o)
        throw Error(g(301));
      o += 1, me = de = null, t.updateQueue = null, eo.current = im, e = n(r, i);
    } while ($r);
  }
  if (eo.current = To, t = de !== null && de.next !== null, Nn = 0, me = de = ie = null, Co = !1, t)
    throw Error(g(300));
  return e;
}
function Tl() {
  var e = ii !== 0;
  return ii = 0, e;
}
function mt() {
  var e = { memoizedState: null, baseState: null, baseQueue: null, queue: null, next: null };
  return me === null ? ie.memoizedState = me = e : me = me.next = e, me;
}
function Je() {
  if (de === null) {
    var e = ie.alternate;
    e = e !== null ? e.memoizedState : null;
  } else
    e = de.next;
  var t = me === null ? ie.memoizedState : me.next;
  if (t !== null)
    me = t, de = e;
  else {
    if (e === null)
      throw Error(g(310));
    de = e, e = { memoizedState: de.memoizedState, baseState: de.baseState, baseQueue: de.baseQueue, queue: de.queue, next: null }, me === null ? ie.memoizedState = me = e : me = me.next = e;
  }
  return me;
}
function oi(e, t) {
  return typeof t == "function" ? t(e) : t;
}
function Ls(e) {
  var t = Je(), n = t.queue;
  if (n === null)
    throw Error(g(311));
  n.lastRenderedReducer = e;
  var r = de, i = r.baseQueue, o = n.pending;
  if (o !== null) {
    if (i !== null) {
      var s = i.next;
      i.next = o.next, o.next = s;
    }
    r.baseQueue = i = o, n.pending = null;
  }
  if (i !== null) {
    o = i.next, r = r.baseState;
    var a = s = null, l = null, u = o;
    do {
      var p = u.lane;
      if ((Nn & p) === p)
        l !== null && (l = l.next = { lane: 0, action: u.action, hasEagerState: u.hasEagerState, eagerState: u.eagerState, next: null }), r = u.hasEagerState ? u.eagerState : e(r, u.action);
      else {
        var h = {
          lane: p,
          action: u.action,
          hasEagerState: u.hasEagerState,
          eagerState: u.eagerState,
          next: null
        };
        l === null ? (a = l = h, s = r) : l = l.next = h, ie.lanes |= p, On |= p;
      }
      u = u.next;
    } while (u !== null && u !== o);
    l === null ? s = r : l.next = a, lt(r, t.memoizedState) || (je = !0), t.memoizedState = r, t.baseState = s, t.baseQueue = l, n.lastRenderedState = r;
  }
  if (e = n.interleaved, e !== null) {
    i = e;
    do
      o = i.lane, ie.lanes |= o, On |= o, i = i.next;
    while (i !== e);
  } else
    i === null && (n.lanes = 0);
  return [t.memoizedState, n.dispatch];
}
function Ds(e) {
  var t = Je(), n = t.queue;
  if (n === null)
    throw Error(g(311));
  n.lastRenderedReducer = e;
  var r = n.dispatch, i = n.pending, o = t.memoizedState;
  if (i !== null) {
    n.pending = null;
    var s = i = i.next;
    do
      o = e(o, s.action), s = s.next;
    while (s !== i);
    lt(o, t.memoizedState) || (je = !0), t.memoizedState = o, t.baseQueue === null && (t.baseState = o), n.lastRenderedState = o;
  }
  return [o, r];
}
function zd() {
}
function Ad(e, t) {
  var n = ie, r = Je(), i = t(), o = !lt(r.memoizedState, i);
  if (o && (r.memoizedState = i, je = !0), r = r.queue, Nl(Wd.bind(null, n, r, e), [e]), r.getSnapshot !== t || o || me !== null && me.memoizedState.tag & 1) {
    if (n.flags |= 2048, si(9, Vd.bind(null, n, r, i, t), void 0, null), ve === null)
      throw Error(g(349));
    Nn & 30 || Fd(n, t, i);
  }
  return i;
}
function Fd(e, t, n) {
  e.flags |= 16384, e = { getSnapshot: t, value: n }, t = ie.updateQueue, t === null ? (t = { lastEffect: null, stores: null }, ie.updateQueue = t, t.stores = [e]) : (n = t.stores, n === null ? t.stores = [e] : n.push(e));
}
function Vd(e, t, n, r) {
  t.value = n, t.getSnapshot = r, $d(t) && Ud(e);
}
function Wd(e, t, n) {
  return n(function() {
    $d(t) && Ud(e);
  });
}
function $d(e) {
  var t = e.getSnapshot;
  e = e.value;
  try {
    var n = t();
    return !lt(e, n);
  } catch {
    return !0;
  }
}
function Ud(e) {
  var t = zt(e, 1);
  t !== null && ot(t, e, 1, -1);
}
function ju(e) {
  var t = mt();
  return typeof e == "function" && (e = e()), t.memoizedState = t.baseState = e, e = { pending: null, interleaved: null, lanes: 0, dispatch: null, lastRenderedReducer: oi, lastRenderedState: e }, t.queue = e, e = e.dispatch = tm.bind(null, ie, e), [t.memoizedState, e];
}
function si(e, t, n, r) {
  return e = { tag: e, create: t, destroy: n, deps: r, next: null }, t = ie.updateQueue, t === null ? (t = { lastEffect: null, stores: null }, ie.updateQueue = t, t.lastEffect = e.next = e) : (n = t.lastEffect, n === null ? t.lastEffect = e.next = e : (r = n.next, n.next = e, e.next = r, t.lastEffect = e)), e;
}
function Zd() {
  return Je().memoizedState;
}
function to(e, t, n, r) {
  var i = mt();
  ie.flags |= e, i.memoizedState = si(1 | t, n, void 0, r === void 0 ? null : r);
}
function qo(e, t, n, r) {
  var i = Je();
  r = r === void 0 ? null : r;
  var o = void 0;
  if (de !== null) {
    var s = de.memoizedState;
    if (o = s.destroy, r !== null && El(r, s.deps)) {
      i.memoizedState = si(t, n, o, r);
      return;
    }
  }
  ie.flags |= e, i.memoizedState = si(1 | t, n, o, r);
}
function zu(e, t) {
  return to(8390656, 8, e, t);
}
function Nl(e, t) {
  return qo(2048, 8, e, t);
}
function Bd(e, t) {
  return qo(4, 2, e, t);
}
function Hd(e, t) {
  return qo(4, 4, e, t);
}
function Yd(e, t) {
  if (typeof t == "function")
    return e = e(), t(e), function() {
      t(null);
    };
  if (t != null)
    return e = e(), t.current = e, function() {
      t.current = null;
    };
}
function Qd(e, t, n) {
  return n = n != null ? n.concat([e]) : null, qo(4, 4, Yd.bind(null, t, e), n);
}
function Ol() {
}
function Gd(e, t) {
  var n = Je();
  t = t === void 0 ? null : t;
  var r = n.memoizedState;
  return r !== null && t !== null && El(t, r[1]) ? r[0] : (n.memoizedState = [e, t], e);
}
function Kd(e, t) {
  var n = Je();
  t = t === void 0 ? null : t;
  var r = n.memoizedState;
  return r !== null && t !== null && El(t, r[1]) ? r[0] : (e = e(), n.memoizedState = [e, t], e);
}
function Xd(e, t, n) {
  return Nn & 21 ? (lt(n, t) || (n = bc(), ie.lanes |= n, On |= n, e.baseState = !0), t) : (e.baseState && (e.baseState = !1, je = !0), e.memoizedState = n);
}
function bh(e, t) {
  var n = H;
  H = n !== 0 && 4 > n ? n : 4, e(!0);
  var r = Rs.transition;
  Rs.transition = {};
  try {
    e(!1), t();
  } finally {
    H = n, Rs.transition = r;
  }
}
function qd() {
  return Je().memoizedState;
}
function em(e, t, n) {
  var r = rn(e);
  if (n = { lane: r, action: n, hasEagerState: !1, eagerState: null, next: null }, Jd(e))
    bd(t, n);
  else if (n = Pd(e, t, n, r), n !== null) {
    var i = Pe();
    ot(n, e, r, i), ef(n, t, r);
  }
}
function tm(e, t, n) {
  var r = rn(e), i = { lane: r, action: n, hasEagerState: !1, eagerState: null, next: null };
  if (Jd(e))
    bd(t, i);
  else {
    var o = e.alternate;
    if (e.lanes === 0 && (o === null || o.lanes === 0) && (o = t.lastRenderedReducer, o !== null))
      try {
        var s = t.lastRenderedState, a = o(s, n);
        if (i.hasEagerState = !0, i.eagerState = a, lt(a, s)) {
          var l = t.interleaved;
          l === null ? (i.next = i, wl(t)) : (i.next = l.next, l.next = i), t.interleaved = i;
          return;
        }
      } catch {
      } finally {
      }
    n = Pd(e, t, i, r), n !== null && (i = Pe(), ot(n, e, r, i), ef(n, t, r));
  }
}
function Jd(e) {
  var t = e.alternate;
  return e === ie || t !== null && t === ie;
}
function bd(e, t) {
  $r = Co = !0;
  var n = e.pending;
  n === null ? t.next = t : (t.next = n.next, n.next = t), e.pending = t;
}
function ef(e, t, n) {
  if (n & 4194240) {
    var r = t.lanes;
    r &= e.pendingLanes, n |= r, t.lanes = n, ol(e, n);
  }
}
var To = { readContext: qe, useCallback: Se, useContext: Se, useEffect: Se, useImperativeHandle: Se, useInsertionEffect: Se, useLayoutEffect: Se, useMemo: Se, useReducer: Se, useRef: Se, useState: Se, useDebugValue: Se, useDeferredValue: Se, useTransition: Se, useMutableSource: Se, useSyncExternalStore: Se, useId: Se, unstable_isNewReconciler: !1 }, nm = { readContext: qe, useCallback: function(e, t) {
  return mt().memoizedState = [e, t === void 0 ? null : t], e;
}, useContext: qe, useEffect: zu, useImperativeHandle: function(e, t, n) {
  return n = n != null ? n.concat([e]) : null, to(
    4194308,
    4,
    Yd.bind(null, t, e),
    n
  );
}, useLayoutEffect: function(e, t) {
  return to(4194308, 4, e, t);
}, useInsertionEffect: function(e, t) {
  return to(4, 2, e, t);
}, useMemo: function(e, t) {
  var n = mt();
  return t = t === void 0 ? null : t, e = e(), n.memoizedState = [e, t], e;
}, useReducer: function(e, t, n) {
  var r = mt();
  return t = n !== void 0 ? n(t) : t, r.memoizedState = r.baseState = t, e = { pending: null, interleaved: null, lanes: 0, dispatch: null, lastRenderedReducer: e, lastRenderedState: t }, r.queue = e, e = e.dispatch = em.bind(null, ie, e), [r.memoizedState, e];
}, useRef: function(e) {
  var t = mt();
  return e = { current: e }, t.memoizedState = e;
}, useState: ju, useDebugValue: Ol, useDeferredValue: function(e) {
  return mt().memoizedState = e;
}, useTransition: function() {
  var e = ju(!1), t = e[0];
  return e = bh.bind(null, e[1]), mt().memoizedState = e, [t, e];
}, useMutableSource: function() {
}, useSyncExternalStore: function(e, t, n) {
  var r = ie, i = mt();
  if (ee) {
    if (n === void 0)
      throw Error(g(407));
    n = n();
  } else {
    if (n = t(), ve === null)
      throw Error(g(349));
    Nn & 30 || Fd(r, t, n);
  }
  i.memoizedState = n;
  var o = { value: n, getSnapshot: t };
  return i.queue = o, zu(Wd.bind(
    null,
    r,
    o,
    e
  ), [e]), r.flags |= 2048, si(9, Vd.bind(null, r, o, n, t), void 0, null), n;
}, useId: function() {
  var e = mt(), t = ve.identifierPrefix;
  if (ee) {
    var n = Rt, r = Pt;
    n = (r & ~(1 << 32 - it(r) - 1)).toString(32) + n, t = ":" + t + "R" + n, n = ii++, 0 < n && (t += "H" + n.toString(32)), t += ":";
  } else
    n = Jh++, t = ":" + t + "r" + n.toString(32) + ":";
  return e.memoizedState = t;
}, unstable_isNewReconciler: !1 }, rm = {
  readContext: qe,
  useCallback: Gd,
  useContext: qe,
  useEffect: Nl,
  useImperativeHandle: Qd,
  useInsertionEffect: Bd,
  useLayoutEffect: Hd,
  useMemo: Kd,
  useReducer: Ls,
  useRef: Zd,
  useState: function() {
    return Ls(oi);
  },
  useDebugValue: Ol,
  useDeferredValue: function(e) {
    var t = Je();
    return Xd(t, de.memoizedState, e);
  },
  useTransition: function() {
    var e = Ls(oi)[0], t = Je().memoizedState;
    return [e, t];
  },
  useMutableSource: zd,
  useSyncExternalStore: Ad,
  useId: qd,
  unstable_isNewReconciler: !1
}, im = { readContext: qe, useCallback: Gd, useContext: qe, useEffect: Nl, useImperativeHandle: Qd, useInsertionEffect: Bd, useLayoutEffect: Hd, useMemo: Kd, useReducer: Ds, useRef: Zd, useState: function() {
  return Ds(oi);
}, useDebugValue: Ol, useDeferredValue: function(e) {
  var t = Je();
  return de === null ? t.memoizedState = e : Xd(t, de.memoizedState, e);
}, useTransition: function() {
  var e = Ds(oi)[0], t = Je().memoizedState;
  return [e, t];
}, useMutableSource: zd, useSyncExternalStore: Ad, useId: qd, unstable_isNewReconciler: !1 };
function fr(e, t) {
  try {
    var n = "", r = t;
    do
      n += Dp(r), r = r.return;
    while (r);
    var i = n;
  } catch (o) {
    i = `
Error generating stack: ` + o.message + `
` + o.stack;
  }
  return { value: e, source: t, stack: i, digest: null };
}
function Ms(e, t, n) {
  return { value: e, source: null, stack: n ?? null, digest: t ?? null };
}
function Ea(e, t) {
  try {
    console.error(t.value);
  } catch (n) {
    setTimeout(function() {
      throw n;
    });
  }
}
var om = typeof WeakMap == "function" ? WeakMap : Map;
function tf(e, t, n) {
  n = Dt(-1, n), n.tag = 3, n.payload = { element: null };
  var r = t.value;
  return n.callback = function() {
    Oo || (Oo = !0, Ia = r), Ea(e, t);
  }, n;
}
function nf(e, t, n) {
  n = Dt(-1, n), n.tag = 3;
  var r = e.type.getDerivedStateFromError;
  if (typeof r == "function") {
    var i = t.value;
    n.payload = function() {
      return r(i);
    }, n.callback = function() {
      Ea(e, t);
    };
  }
  var o = e.stateNode;
  return o !== null && typeof o.componentDidCatch == "function" && (n.callback = function() {
    Ea(e, t), typeof r != "function" && (nn === null ? nn = /* @__PURE__ */ new Set([this]) : nn.add(this));
    var s = t.stack;
    this.componentDidCatch(t.value, { componentStack: s !== null ? s : "" });
  }), n;
}
function Au(e, t, n) {
  var r = e.pingCache;
  if (r === null) {
    r = e.pingCache = new om();
    var i = /* @__PURE__ */ new Set();
    r.set(t, i);
  } else
    i = r.get(t), i === void 0 && (i = /* @__PURE__ */ new Set(), r.set(t, i));
  i.has(n) || (i.add(n), e = wm.bind(null, e, t, n), t.then(e, e));
}
function Fu(e) {
  do {
    var t;
    if ((t = e.tag === 13) && (t = e.memoizedState, t = t !== null ? t.dehydrated !== null : !0), t)
      return e;
    e = e.return;
  } while (e !== null);
  return null;
}
function Vu(e, t, n, r, i) {
  return e.mode & 1 ? (e.flags |= 65536, e.lanes = i, e) : (e === t ? e.flags |= 65536 : (e.flags |= 128, n.flags |= 131072, n.flags &= -52805, n.tag === 1 && (n.alternate === null ? n.tag = 17 : (t = Dt(-1, 1), t.tag = 2, tn(n, t, 1))), n.lanes |= 1), e);
}
var sm = Vt.ReactCurrentOwner, je = !1;
function Oe(e, t, n, r) {
  t.child = e === null ? Id(t, null, n, r) : cr(t, e.child, n, r);
}
function Wu(e, t, n, r, i) {
  n = n.render;
  var o = t.ref;
  return ir(t, i), r = Cl(e, t, n, r, o, i), n = Tl(), e !== null && !je ? (t.updateQueue = e.updateQueue, t.flags &= -2053, e.lanes &= ~i, At(e, t, i)) : (ee && n && pl(t), t.flags |= 1, Oe(e, t, r, i), t.child);
}
function $u(e, t, n, r, i) {
  if (e === null) {
    var o = n.type;
    return typeof o == "function" && !zl(o) && o.defaultProps === void 0 && n.compare === null && n.defaultProps === void 0 ? (t.tag = 15, t.type = o, rf(e, t, o, r, i)) : (e = oo(n.type, null, r, t, t.mode, i), e.ref = t.ref, e.return = t, t.child = e);
  }
  if (o = e.child, !(e.lanes & i)) {
    var s = o.memoizedProps;
    if (n = n.compare, n = n !== null ? n : Jr, n(s, r) && e.ref === t.ref)
      return At(e, t, i);
  }
  return t.flags |= 1, e = on(o, r), e.ref = t.ref, e.return = t, t.child = e;
}
function rf(e, t, n, r, i) {
  if (e !== null) {
    var o = e.memoizedProps;
    if (Jr(o, r) && e.ref === t.ref)
      if (je = !1, t.pendingProps = r = o, (e.lanes & i) !== 0)
        e.flags & 131072 && (je = !0);
      else
        return t.lanes = e.lanes, At(e, t, i);
  }
  return Ca(e, t, n, r, i);
}
function of(e, t, n) {
  var r = t.pendingProps, i = r.children, o = e !== null ? e.memoizedState : null;
  if (r.mode === "hidden")
    if (!(t.mode & 1))
      t.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }, G(bn, We), We |= n;
    else {
      if (!(n & 1073741824))
        return e = o !== null ? o.baseLanes | n : n, t.lanes = t.childLanes = 1073741824, t.memoizedState = { baseLanes: e, cachePool: null, transitions: null }, t.updateQueue = null, G(bn, We), We |= e, null;
      t.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }, r = o !== null ? o.baseLanes : n, G(bn, We), We |= r;
    }
  else
    o !== null ? (r = o.baseLanes | n, t.memoizedState = null) : r = n, G(bn, We), We |= r;
  return Oe(e, t, i, n), t.child;
}
function sf(e, t) {
  var n = t.ref;
  (e === null && n !== null || e !== null && e.ref !== n) && (t.flags |= 512, t.flags |= 2097152);
}
function Ca(e, t, n, r, i) {
  var o = Ae(n) ? Cn : Ce.current;
  return o = lr(t, o), ir(t, i), n = Cl(e, t, n, r, o, i), r = Tl(), e !== null && !je ? (t.updateQueue = e.updateQueue, t.flags &= -2053, e.lanes &= ~i, At(e, t, i)) : (ee && r && pl(t), t.flags |= 1, Oe(e, t, n, i), t.child);
}
function Uu(e, t, n, r, i) {
  if (Ae(n)) {
    var o = !0;
    go(t);
  } else
    o = !1;
  if (ir(t, i), t.stateNode === null)
    no(e, t), Dd(t, n, r), xa(t, n, r, i), r = !0;
  else if (e === null) {
    var s = t.stateNode, a = t.memoizedProps;
    s.props = a;
    var l = s.context, u = n.contextType;
    typeof u == "object" && u !== null ? u = qe(u) : (u = Ae(n) ? Cn : Ce.current, u = lr(t, u));
    var p = n.getDerivedStateFromProps, h = typeof p == "function" || typeof s.getSnapshotBeforeUpdate == "function";
    h || typeof s.UNSAFE_componentWillReceiveProps != "function" && typeof s.componentWillReceiveProps != "function" || (a !== r || l !== u) && Mu(t, s, r, u), Bt = !1;
    var m = t.memoizedState;
    s.state = m, xo(t, r, s, i), l = t.memoizedState, a !== r || m !== l || ze.current || Bt ? (typeof p == "function" && (Sa(t, n, p, r), l = t.memoizedState), (a = Bt || Du(t, n, a, r, m, l, u)) ? (h || typeof s.UNSAFE_componentWillMount != "function" && typeof s.componentWillMount != "function" || (typeof s.componentWillMount == "function" && s.componentWillMount(), typeof s.UNSAFE_componentWillMount == "function" && s.UNSAFE_componentWillMount()), typeof s.componentDidMount == "function" && (t.flags |= 4194308)) : (typeof s.componentDidMount == "function" && (t.flags |= 4194308), t.memoizedProps = r, t.memoizedState = l), s.props = r, s.state = l, s.context = u, r = a) : (typeof s.componentDidMount == "function" && (t.flags |= 4194308), r = !1);
  } else {
    s = t.stateNode, Rd(e, t), a = t.memoizedProps, u = t.type === t.elementType ? a : et(t.type, a), s.props = u, h = t.pendingProps, m = s.context, l = n.contextType, typeof l == "object" && l !== null ? l = qe(l) : (l = Ae(n) ? Cn : Ce.current, l = lr(t, l));
    var y = n.getDerivedStateFromProps;
    (p = typeof y == "function" || typeof s.getSnapshotBeforeUpdate == "function") || typeof s.UNSAFE_componentWillReceiveProps != "function" && typeof s.componentWillReceiveProps != "function" || (a !== h || m !== l) && Mu(t, s, r, l), Bt = !1, m = t.memoizedState, s.state = m, xo(t, r, s, i);
    var w = t.memoizedState;
    a !== h || m !== w || ze.current || Bt ? (typeof y == "function" && (Sa(t, n, y, r), w = t.memoizedState), (u = Bt || Du(t, n, u, r, m, w, l) || !1) ? (p || typeof s.UNSAFE_componentWillUpdate != "function" && typeof s.componentWillUpdate != "function" || (typeof s.componentWillUpdate == "function" && s.componentWillUpdate(r, w, l), typeof s.UNSAFE_componentWillUpdate == "function" && s.UNSAFE_componentWillUpdate(r, w, l)), typeof s.componentDidUpdate == "function" && (t.flags |= 4), typeof s.getSnapshotBeforeUpdate == "function" && (t.flags |= 1024)) : (typeof s.componentDidUpdate != "function" || a === e.memoizedProps && m === e.memoizedState || (t.flags |= 4), typeof s.getSnapshotBeforeUpdate != "function" || a === e.memoizedProps && m === e.memoizedState || (t.flags |= 1024), t.memoizedProps = r, t.memoizedState = w), s.props = r, s.state = w, s.context = l, r = u) : (typeof s.componentDidUpdate != "function" || a === e.memoizedProps && m === e.memoizedState || (t.flags |= 4), typeof s.getSnapshotBeforeUpdate != "function" || a === e.memoizedProps && m === e.memoizedState || (t.flags |= 1024), r = !1);
  }
  return Ta(e, t, n, r, o, i);
}
function Ta(e, t, n, r, i, o) {
  sf(e, t);
  var s = (t.flags & 128) !== 0;
  if (!r && !s)
    return i && Nu(t, n, !1), At(e, t, o);
  r = t.stateNode, sm.current = t;
  var a = s && typeof n.getDerivedStateFromError != "function" ? null : r.render();
  return t.flags |= 1, e !== null && s ? (t.child = cr(t, e.child, null, o), t.child = cr(t, null, a, o)) : Oe(e, t, a, o), t.memoizedState = r.state, i && Nu(t, n, !0), t.child;
}
function af(e) {
  var t = e.stateNode;
  t.pendingContext ? Tu(e, t.pendingContext, t.pendingContext !== t.context) : t.context && Tu(e, t.context, !1), kl(e, t.containerInfo);
}
function Zu(e, t, n, r, i) {
  return ur(), ml(i), t.flags |= 256, Oe(e, t, n, r), t.child;
}
var Na = { dehydrated: null, treeContext: null, retryLane: 0 };
function Oa(e) {
  return { baseLanes: e, cachePool: null, transitions: null };
}
function lf(e, t, n) {
  var r = t.pendingProps, i = re.current, o = !1, s = (t.flags & 128) !== 0, a;
  if ((a = s) || (a = e !== null && e.memoizedState === null ? !1 : (i & 2) !== 0), a ? (o = !0, t.flags &= -129) : (e === null || e.memoizedState !== null) && (i |= 1), G(re, i & 1), e === null)
    return _a(t), e = t.memoizedState, e !== null && (e = e.dehydrated, e !== null) ? (t.mode & 1 ? e.data === "$!" ? t.lanes = 8 : t.lanes = 1073741824 : t.lanes = 1, null) : (s = r.children, e = r.fallback, o ? (r = t.mode, o = t.child, s = { mode: "hidden", children: s }, !(r & 1) && o !== null ? (o.childLanes = 0, o.pendingProps = s) : o = es(s, r, 0, null), e = xn(e, r, n, null), o.return = t, e.return = t, o.sibling = e, t.child = o, t.child.memoizedState = Oa(n), t.memoizedState = Na, e) : Pl(t, s));
  if (i = e.memoizedState, i !== null && (a = i.dehydrated, a !== null))
    return am(e, t, s, r, a, i, n);
  if (o) {
    o = r.fallback, s = t.mode, i = e.child, a = i.sibling;
    var l = { mode: "hidden", children: r.children };
    return !(s & 1) && t.child !== i ? (r = t.child, r.childLanes = 0, r.pendingProps = l, t.deletions = null) : (r = on(i, l), r.subtreeFlags = i.subtreeFlags & 14680064), a !== null ? o = on(a, o) : (o = xn(o, s, n, null), o.flags |= 2), o.return = t, r.return = t, r.sibling = o, t.child = r, r = o, o = t.child, s = e.child.memoizedState, s = s === null ? Oa(n) : { baseLanes: s.baseLanes | n, cachePool: null, transitions: s.transitions }, o.memoizedState = s, o.childLanes = e.childLanes & ~n, t.memoizedState = Na, r;
  }
  return o = e.child, e = o.sibling, r = on(o, { mode: "visible", children: r.children }), !(t.mode & 1) && (r.lanes = n), r.return = t, r.sibling = null, e !== null && (n = t.deletions, n === null ? (t.deletions = [e], t.flags |= 16) : n.push(e)), t.child = r, t.memoizedState = null, r;
}
function Pl(e, t) {
  return t = es({ mode: "visible", children: t }, e.mode, 0, null), t.return = e, e.child = t;
}
function Ui(e, t, n, r) {
  return r !== null && ml(r), cr(t, e.child, null, n), e = Pl(t, t.pendingProps.children), e.flags |= 2, t.memoizedState = null, e;
}
function am(e, t, n, r, i, o, s) {
  if (n)
    return t.flags & 256 ? (t.flags &= -257, r = Ms(Error(g(422))), Ui(e, t, s, r)) : t.memoizedState !== null ? (t.child = e.child, t.flags |= 128, null) : (o = r.fallback, i = t.mode, r = es({ mode: "visible", children: r.children }, i, 0, null), o = xn(o, i, s, null), o.flags |= 2, r.return = t, o.return = t, r.sibling = o, t.child = r, t.mode & 1 && cr(t, e.child, null, s), t.child.memoizedState = Oa(s), t.memoizedState = Na, o);
  if (!(t.mode & 1))
    return Ui(e, t, s, null);
  if (i.data === "$!") {
    if (r = i.nextSibling && i.nextSibling.dataset, r)
      var a = r.dgst;
    return r = a, o = Error(g(419)), r = Ms(o, r, void 0), Ui(e, t, s, r);
  }
  if (a = (s & e.childLanes) !== 0, je || a) {
    if (r = ve, r !== null) {
      switch (s & -s) {
        case 4:
          i = 2;
          break;
        case 16:
          i = 8;
          break;
        case 64:
        case 128:
        case 256:
        case 512:
        case 1024:
        case 2048:
        case 4096:
        case 8192:
        case 16384:
        case 32768:
        case 65536:
        case 131072:
        case 262144:
        case 524288:
        case 1048576:
        case 2097152:
        case 4194304:
        case 8388608:
        case 16777216:
        case 33554432:
        case 67108864:
          i = 32;
          break;
        case 536870912:
          i = 268435456;
          break;
        default:
          i = 0;
      }
      i = i & (r.suspendedLanes | s) ? 0 : i, i !== 0 && i !== o.retryLane && (o.retryLane = i, zt(e, i), ot(r, e, i, -1));
    }
    return jl(), r = Ms(Error(g(421))), Ui(e, t, s, r);
  }
  return i.data === "$?" ? (t.flags |= 128, t.child = e.child, t = _m.bind(null, e), i._reactRetry = t, null) : (e = o.treeContext, $e = en(i.nextSibling), Ue = t, ee = !0, nt = null, e !== null && (Qe[Ge++] = Pt, Qe[Ge++] = Rt, Qe[Ge++] = Tn, Pt = e.id, Rt = e.overflow, Tn = t), t = Pl(t, r.children), t.flags |= 4096, t);
}
function Bu(e, t, n) {
  e.lanes |= t;
  var r = e.alternate;
  r !== null && (r.lanes |= t), ka(e.return, t, n);
}
function Is(e, t, n, r, i) {
  var o = e.memoizedState;
  o === null ? e.memoizedState = { isBackwards: t, rendering: null, renderingStartTime: 0, last: r, tail: n, tailMode: i } : (o.isBackwards = t, o.rendering = null, o.renderingStartTime = 0, o.last = r, o.tail = n, o.tailMode = i);
}
function uf(e, t, n) {
  var r = t.pendingProps, i = r.revealOrder, o = r.tail;
  if (Oe(e, t, r.children, n), r = re.current, r & 2)
    r = r & 1 | 2, t.flags |= 128;
  else {
    if (e !== null && e.flags & 128)
      e:
        for (e = t.child; e !== null; ) {
          if (e.tag === 13)
            e.memoizedState !== null && Bu(e, n, t);
          else if (e.tag === 19)
            Bu(e, n, t);
          else if (e.child !== null) {
            e.child.return = e, e = e.child;
            continue;
          }
          if (e === t)
            break e;
          for (; e.sibling === null; ) {
            if (e.return === null || e.return === t)
              break e;
            e = e.return;
          }
          e.sibling.return = e.return, e = e.sibling;
        }
    r &= 1;
  }
  if (G(re, r), !(t.mode & 1))
    t.memoizedState = null;
  else
    switch (i) {
      case "forwards":
        for (n = t.child, i = null; n !== null; )
          e = n.alternate, e !== null && Eo(e) === null && (i = n), n = n.sibling;
        n = i, n === null ? (i = t.child, t.child = null) : (i = n.sibling, n.sibling = null), Is(t, !1, i, n, o);
        break;
      case "backwards":
        for (n = null, i = t.child, t.child = null; i !== null; ) {
          if (e = i.alternate, e !== null && Eo(e) === null) {
            t.child = i;
            break;
          }
          e = i.sibling, i.sibling = n, n = i, i = e;
        }
        Is(t, !0, n, null, o);
        break;
      case "together":
        Is(t, !1, null, null, void 0);
        break;
      default:
        t.memoizedState = null;
    }
  return t.child;
}
function no(e, t) {
  !(t.mode & 1) && e !== null && (e.alternate = null, t.alternate = null, t.flags |= 2);
}
function At(e, t, n) {
  if (e !== null && (t.dependencies = e.dependencies), On |= t.lanes, !(n & t.childLanes))
    return null;
  if (e !== null && t.child !== e.child)
    throw Error(g(153));
  if (t.child !== null) {
    for (e = t.child, n = on(e, e.pendingProps), t.child = n, n.return = t; e.sibling !== null; )
      e = e.sibling, n = n.sibling = on(e, e.pendingProps), n.return = t;
    n.sibling = null;
  }
  return t.child;
}
function lm(e, t, n) {
  switch (t.tag) {
    case 3:
      af(t), ur();
      break;
    case 5:
      jd(t);
      break;
    case 1:
      Ae(t.type) && go(t);
      break;
    case 4:
      kl(t, t.stateNode.containerInfo);
      break;
    case 10:
      var r = t.type._context, i = t.memoizedProps.value;
      G(ko, r._currentValue), r._currentValue = i;
      break;
    case 13:
      if (r = t.memoizedState, r !== null)
        return r.dehydrated !== null ? (G(re, re.current & 1), t.flags |= 128, null) : n & t.child.childLanes ? lf(e, t, n) : (G(re, re.current & 1), e = At(e, t, n), e !== null ? e.sibling : null);
      G(re, re.current & 1);
      break;
    case 19:
      if (r = (n & t.childLanes) !== 0, e.flags & 128) {
        if (r)
          return uf(e, t, n);
        t.flags |= 128;
      }
      if (i = t.memoizedState, i !== null && (i.rendering = null, i.tail = null, i.lastEffect = null), G(re, re.current), r)
        break;
      return null;
    case 22:
    case 23:
      return t.lanes = 0, of(e, t, n);
  }
  return At(e, t, n);
}
var cf, Pa, df, ff;
cf = function(e, t) {
  for (var n = t.child; n !== null; ) {
    if (n.tag === 5 || n.tag === 6)
      e.appendChild(n.stateNode);
    else if (n.tag !== 4 && n.child !== null) {
      n.child.return = n, n = n.child;
      continue;
    }
    if (n === t)
      break;
    for (; n.sibling === null; ) {
      if (n.return === null || n.return === t)
        return;
      n = n.return;
    }
    n.sibling.return = n.return, n = n.sibling;
  }
};
Pa = function() {
};
df = function(e, t, n, r) {
  var i = e.memoizedProps;
  if (i !== r) {
    e = t.stateNode, kn(wt.current);
    var o = null;
    switch (n) {
      case "input":
        i = qs(e, i), r = qs(e, r), o = [];
        break;
      case "select":
        i = oe({}, i, { value: void 0 }), r = oe({}, r, { value: void 0 }), o = [];
        break;
      case "textarea":
        i = ea(e, i), r = ea(e, r), o = [];
        break;
      default:
        typeof i.onClick != "function" && typeof r.onClick == "function" && (e.onclick = vo);
    }
    na(n, r);
    var s;
    n = null;
    for (u in i)
      if (!r.hasOwnProperty(u) && i.hasOwnProperty(u) && i[u] != null)
        if (u === "style") {
          var a = i[u];
          for (s in a)
            a.hasOwnProperty(s) && (n || (n = {}), n[s] = "");
        } else
          u !== "dangerouslySetInnerHTML" && u !== "children" && u !== "suppressContentEditableWarning" && u !== "suppressHydrationWarning" && u !== "autoFocus" && (Hr.hasOwnProperty(u) ? o || (o = []) : (o = o || []).push(u, null));
    for (u in r) {
      var l = r[u];
      if (a = i != null ? i[u] : void 0, r.hasOwnProperty(u) && l !== a && (l != null || a != null))
        if (u === "style")
          if (a) {
            for (s in a)
              !a.hasOwnProperty(s) || l && l.hasOwnProperty(s) || (n || (n = {}), n[s] = "");
            for (s in l)
              l.hasOwnProperty(s) && a[s] !== l[s] && (n || (n = {}), n[s] = l[s]);
          } else
            n || (o || (o = []), o.push(
              u,
              n
            )), n = l;
        else
          u === "dangerouslySetInnerHTML" ? (l = l ? l.__html : void 0, a = a ? a.__html : void 0, l != null && a !== l && (o = o || []).push(u, l)) : u === "children" ? typeof l != "string" && typeof l != "number" || (o = o || []).push(u, "" + l) : u !== "suppressContentEditableWarning" && u !== "suppressHydrationWarning" && (Hr.hasOwnProperty(u) ? (l != null && u === "onScroll" && J("scroll", e), o || a === l || (o = [])) : (o = o || []).push(u, l));
    }
    n && (o = o || []).push("style", n);
    var u = o;
    (t.updateQueue = u) && (t.flags |= 4);
  }
};
ff = function(e, t, n, r) {
  n !== r && (t.flags |= 4);
};
function Nr(e, t) {
  if (!ee)
    switch (e.tailMode) {
      case "hidden":
        t = e.tail;
        for (var n = null; t !== null; )
          t.alternate !== null && (n = t), t = t.sibling;
        n === null ? e.tail = null : n.sibling = null;
        break;
      case "collapsed":
        n = e.tail;
        for (var r = null; n !== null; )
          n.alternate !== null && (r = n), n = n.sibling;
        r === null ? t || e.tail === null ? e.tail = null : e.tail.sibling = null : r.sibling = null;
    }
}
function xe(e) {
  var t = e.alternate !== null && e.alternate.child === e.child, n = 0, r = 0;
  if (t)
    for (var i = e.child; i !== null; )
      n |= i.lanes | i.childLanes, r |= i.subtreeFlags & 14680064, r |= i.flags & 14680064, i.return = e, i = i.sibling;
  else
    for (i = e.child; i !== null; )
      n |= i.lanes | i.childLanes, r |= i.subtreeFlags, r |= i.flags, i.return = e, i = i.sibling;
  return e.subtreeFlags |= r, e.childLanes = n, t;
}
function um(e, t, n) {
  var r = t.pendingProps;
  switch (hl(t), t.tag) {
    case 2:
    case 16:
    case 15:
    case 0:
    case 11:
    case 7:
    case 8:
    case 12:
    case 9:
    case 14:
      return xe(t), null;
    case 1:
      return Ae(t.type) && yo(), xe(t), null;
    case 3:
      return r = t.stateNode, dr(), b(ze), b(Ce), xl(), r.pendingContext && (r.context = r.pendingContext, r.pendingContext = null), (e === null || e.child === null) && (Wi(t) ? t.flags |= 4 : e === null || e.memoizedState.isDehydrated && !(t.flags & 256) || (t.flags |= 1024, nt !== null && (Aa(nt), nt = null))), Pa(e, t), xe(t), null;
    case 5:
      Sl(t);
      var i = kn(ri.current);
      if (n = t.type, e !== null && t.stateNode != null)
        df(e, t, n, r, i), e.ref !== t.ref && (t.flags |= 512, t.flags |= 2097152);
      else {
        if (!r) {
          if (t.stateNode === null)
            throw Error(g(166));
          return xe(t), null;
        }
        if (e = kn(wt.current), Wi(t)) {
          r = t.stateNode, n = t.type;
          var o = t.memoizedProps;
          switch (r[vt] = t, r[ti] = o, e = (t.mode & 1) !== 0, n) {
            case "dialog":
              J("cancel", r), J("close", r);
              break;
            case "iframe":
            case "object":
            case "embed":
              J("load", r);
              break;
            case "video":
            case "audio":
              for (i = 0; i < jr.length; i++)
                J(jr[i], r);
              break;
            case "source":
              J("error", r);
              break;
            case "img":
            case "image":
            case "link":
              J(
                "error",
                r
              ), J("load", r);
              break;
            case "details":
              J("toggle", r);
              break;
            case "input":
              bl(r, o), J("invalid", r);
              break;
            case "select":
              r._wrapperState = { wasMultiple: !!o.multiple }, J("invalid", r);
              break;
            case "textarea":
              tu(r, o), J("invalid", r);
          }
          na(n, o), i = null;
          for (var s in o)
            if (o.hasOwnProperty(s)) {
              var a = o[s];
              s === "children" ? typeof a == "string" ? r.textContent !== a && (o.suppressHydrationWarning !== !0 && Vi(r.textContent, a, e), i = ["children", a]) : typeof a == "number" && r.textContent !== "" + a && (o.suppressHydrationWarning !== !0 && Vi(
                r.textContent,
                a,
                e
              ), i = ["children", "" + a]) : Hr.hasOwnProperty(s) && a != null && s === "onScroll" && J("scroll", r);
            }
          switch (n) {
            case "input":
              Li(r), eu(r, o, !0);
              break;
            case "textarea":
              Li(r), nu(r);
              break;
            case "select":
            case "option":
              break;
            default:
              typeof o.onClick == "function" && (r.onclick = vo);
          }
          r = i, t.updateQueue = r, r !== null && (t.flags |= 4);
        } else {
          s = i.nodeType === 9 ? i : i.ownerDocument, e === "http://www.w3.org/1999/xhtml" && (e = Fc(n)), e === "http://www.w3.org/1999/xhtml" ? n === "script" ? (e = s.createElement("div"), e.innerHTML = "<script><\/script>", e = e.removeChild(e.firstChild)) : typeof r.is == "string" ? e = s.createElement(n, { is: r.is }) : (e = s.createElement(n), n === "select" && (s = e, r.multiple ? s.multiple = !0 : r.size && (s.size = r.size))) : e = s.createElementNS(e, n), e[vt] = t, e[ti] = r, cf(e, t, !1, !1), t.stateNode = e;
          e: {
            switch (s = ra(n, r), n) {
              case "dialog":
                J("cancel", e), J("close", e), i = r;
                break;
              case "iframe":
              case "object":
              case "embed":
                J("load", e), i = r;
                break;
              case "video":
              case "audio":
                for (i = 0; i < jr.length; i++)
                  J(jr[i], e);
                i = r;
                break;
              case "source":
                J("error", e), i = r;
                break;
              case "img":
              case "image":
              case "link":
                J(
                  "error",
                  e
                ), J("load", e), i = r;
                break;
              case "details":
                J("toggle", e), i = r;
                break;
              case "input":
                bl(e, r), i = qs(e, r), J("invalid", e);
                break;
              case "option":
                i = r;
                break;
              case "select":
                e._wrapperState = { wasMultiple: !!r.multiple }, i = oe({}, r, { value: void 0 }), J("invalid", e);
                break;
              case "textarea":
                tu(e, r), i = ea(e, r), J("invalid", e);
                break;
              default:
                i = r;
            }
            na(n, i), a = i;
            for (o in a)
              if (a.hasOwnProperty(o)) {
                var l = a[o];
                o === "style" ? $c(e, l) : o === "dangerouslySetInnerHTML" ? (l = l ? l.__html : void 0, l != null && Vc(e, l)) : o === "children" ? typeof l == "string" ? (n !== "textarea" || l !== "") && Yr(e, l) : typeof l == "number" && Yr(e, "" + l) : o !== "suppressContentEditableWarning" && o !== "suppressHydrationWarning" && o !== "autoFocus" && (Hr.hasOwnProperty(o) ? l != null && o === "onScroll" && J("scroll", e) : l != null && ba(e, o, l, s));
              }
            switch (n) {
              case "input":
                Li(e), eu(e, r, !1);
                break;
              case "textarea":
                Li(e), nu(e);
                break;
              case "option":
                r.value != null && e.setAttribute("value", "" + sn(r.value));
                break;
              case "select":
                e.multiple = !!r.multiple, o = r.value, o != null ? er(e, !!r.multiple, o, !1) : r.defaultValue != null && er(
                  e,
                  !!r.multiple,
                  r.defaultValue,
                  !0
                );
                break;
              default:
                typeof i.onClick == "function" && (e.onclick = vo);
            }
            switch (n) {
              case "button":
              case "input":
              case "select":
              case "textarea":
                r = !!r.autoFocus;
                break e;
              case "img":
                r = !0;
                break e;
              default:
                r = !1;
            }
          }
          r && (t.flags |= 4);
        }
        t.ref !== null && (t.flags |= 512, t.flags |= 2097152);
      }
      return xe(t), null;
    case 6:
      if (e && t.stateNode != null)
        ff(e, t, e.memoizedProps, r);
      else {
        if (typeof r != "string" && t.stateNode === null)
          throw Error(g(166));
        if (n = kn(ri.current), kn(wt.current), Wi(t)) {
          if (r = t.stateNode, n = t.memoizedProps, r[vt] = t, (o = r.nodeValue !== n) && (e = Ue, e !== null))
            switch (e.tag) {
              case 3:
                Vi(r.nodeValue, n, (e.mode & 1) !== 0);
                break;
              case 5:
                e.memoizedProps.suppressHydrationWarning !== !0 && Vi(r.nodeValue, n, (e.mode & 1) !== 0);
            }
          o && (t.flags |= 4);
        } else
          r = (n.nodeType === 9 ? n : n.ownerDocument).createTextNode(r), r[vt] = t, t.stateNode = r;
      }
      return xe(t), null;
    case 13:
      if (b(re), r = t.memoizedState, e === null || e.memoizedState !== null && e.memoizedState.dehydrated !== null) {
        if (ee && $e !== null && t.mode & 1 && !(t.flags & 128))
          Od(), ur(), t.flags |= 98560, o = !1;
        else if (o = Wi(t), r !== null && r.dehydrated !== null) {
          if (e === null) {
            if (!o)
              throw Error(g(318));
            if (o = t.memoizedState, o = o !== null ? o.dehydrated : null, !o)
              throw Error(g(317));
            o[vt] = t;
          } else
            ur(), !(t.flags & 128) && (t.memoizedState = null), t.flags |= 4;
          xe(t), o = !1;
        } else
          nt !== null && (Aa(nt), nt = null), o = !0;
        if (!o)
          return t.flags & 65536 ? t : null;
      }
      return t.flags & 128 ? (t.lanes = n, t) : (r = r !== null, r !== (e !== null && e.memoizedState !== null) && r && (t.child.flags |= 8192, t.mode & 1 && (e === null || re.current & 1 ? fe === 0 && (fe = 3) : jl())), t.updateQueue !== null && (t.flags |= 4), xe(t), null);
    case 4:
      return dr(), Pa(e, t), e === null && br(t.stateNode.containerInfo), xe(t), null;
    case 10:
      return gl(t.type._context), xe(t), null;
    case 17:
      return Ae(t.type) && yo(), xe(t), null;
    case 19:
      if (b(re), o = t.memoizedState, o === null)
        return xe(t), null;
      if (r = (t.flags & 128) !== 0, s = o.rendering, s === null)
        if (r)
          Nr(o, !1);
        else {
          if (fe !== 0 || e !== null && e.flags & 128)
            for (e = t.child; e !== null; ) {
              if (s = Eo(e), s !== null) {
                for (t.flags |= 128, Nr(o, !1), r = s.updateQueue, r !== null && (t.updateQueue = r, t.flags |= 4), t.subtreeFlags = 0, r = n, n = t.child; n !== null; )
                  o = n, e = r, o.flags &= 14680066, s = o.alternate, s === null ? (o.childLanes = 0, o.lanes = e, o.child = null, o.subtreeFlags = 0, o.memoizedProps = null, o.memoizedState = null, o.updateQueue = null, o.dependencies = null, o.stateNode = null) : (o.childLanes = s.childLanes, o.lanes = s.lanes, o.child = s.child, o.subtreeFlags = 0, o.deletions = null, o.memoizedProps = s.memoizedProps, o.memoizedState = s.memoizedState, o.updateQueue = s.updateQueue, o.type = s.type, e = s.dependencies, o.dependencies = e === null ? null : { lanes: e.lanes, firstContext: e.firstContext }), n = n.sibling;
                return G(re, re.current & 1 | 2), t.child;
              }
              e = e.sibling;
            }
          o.tail !== null && le() > pr && (t.flags |= 128, r = !0, Nr(o, !1), t.lanes = 4194304);
        }
      else {
        if (!r)
          if (e = Eo(s), e !== null) {
            if (t.flags |= 128, r = !0, n = e.updateQueue, n !== null && (t.updateQueue = n, t.flags |= 4), Nr(o, !0), o.tail === null && o.tailMode === "hidden" && !s.alternate && !ee)
              return xe(t), null;
          } else
            2 * le() - o.renderingStartTime > pr && n !== 1073741824 && (t.flags |= 128, r = !0, Nr(o, !1), t.lanes = 4194304);
        o.isBackwards ? (s.sibling = t.child, t.child = s) : (n = o.last, n !== null ? n.sibling = s : t.child = s, o.last = s);
      }
      return o.tail !== null ? (t = o.tail, o.rendering = t, o.tail = t.sibling, o.renderingStartTime = le(), t.sibling = null, n = re.current, G(re, r ? n & 1 | 2 : n & 1), t) : (xe(t), null);
    case 22:
    case 23:
      return Il(), r = t.memoizedState !== null, e !== null && e.memoizedState !== null !== r && (t.flags |= 8192), r && t.mode & 1 ? We & 1073741824 && (xe(t), t.subtreeFlags & 6 && (t.flags |= 8192)) : xe(t), null;
    case 24:
      return null;
    case 25:
      return null;
  }
  throw Error(g(156, t.tag));
}
function cm(e, t) {
  switch (hl(t), t.tag) {
    case 1:
      return Ae(t.type) && yo(), e = t.flags, e & 65536 ? (t.flags = e & -65537 | 128, t) : null;
    case 3:
      return dr(), b(ze), b(Ce), xl(), e = t.flags, e & 65536 && !(e & 128) ? (t.flags = e & -65537 | 128, t) : null;
    case 5:
      return Sl(t), null;
    case 13:
      if (b(re), e = t.memoizedState, e !== null && e.dehydrated !== null) {
        if (t.alternate === null)
          throw Error(g(340));
        ur();
      }
      return e = t.flags, e & 65536 ? (t.flags = e & -65537 | 128, t) : null;
    case 19:
      return b(re), null;
    case 4:
      return dr(), null;
    case 10:
      return gl(t.type._context), null;
    case 22:
    case 23:
      return Il(), null;
    case 24:
      return null;
    default:
      return null;
  }
}
var Zi = !1, Ee = !1, dm = typeof WeakSet == "function" ? WeakSet : Set, P = null;
function Jn(e, t) {
  var n = e.ref;
  if (n !== null)
    if (typeof n == "function")
      try {
        n(null);
      } catch (r) {
        se(e, t, r);
      }
    else
      n.current = null;
}
function Ra(e, t, n) {
  try {
    n();
  } catch (r) {
    se(e, t, r);
  }
}
var Hu = !1;
function fm(e, t) {
  if (pa = po, e = md(), fl(e)) {
    if ("selectionStart" in e)
      var n = { start: e.selectionStart, end: e.selectionEnd };
    else
      e: {
        n = (n = e.ownerDocument) && n.defaultView || window;
        var r = n.getSelection && n.getSelection();
        if (r && r.rangeCount !== 0) {
          n = r.anchorNode;
          var i = r.anchorOffset, o = r.focusNode;
          r = r.focusOffset;
          try {
            n.nodeType, o.nodeType;
          } catch {
            n = null;
            break e;
          }
          var s = 0, a = -1, l = -1, u = 0, p = 0, h = e, m = null;
          t:
            for (; ; ) {
              for (var y; h !== n || i !== 0 && h.nodeType !== 3 || (a = s + i), h !== o || r !== 0 && h.nodeType !== 3 || (l = s + r), h.nodeType === 3 && (s += h.nodeValue.length), (y = h.firstChild) !== null; )
                m = h, h = y;
              for (; ; ) {
                if (h === e)
                  break t;
                if (m === n && ++u === i && (a = s), m === o && ++p === r && (l = s), (y = h.nextSibling) !== null)
                  break;
                h = m, m = h.parentNode;
              }
              h = y;
            }
          n = a === -1 || l === -1 ? null : { start: a, end: l };
        } else
          n = null;
      }
    n = n || { start: 0, end: 0 };
  } else
    n = null;
  for (ha = { focusedElem: e, selectionRange: n }, po = !1, P = t; P !== null; )
    if (t = P, e = t.child, (t.subtreeFlags & 1028) !== 0 && e !== null)
      e.return = t, P = e;
    else
      for (; P !== null; ) {
        t = P;
        try {
          var w = t.alternate;
          if (t.flags & 1024)
            switch (t.tag) {
              case 0:
              case 11:
              case 15:
                break;
              case 1:
                if (w !== null) {
                  var k = w.memoizedProps, F = w.memoizedState, d = t.stateNode, c = d.getSnapshotBeforeUpdate(t.elementType === t.type ? k : et(t.type, k), F);
                  d.__reactInternalSnapshotBeforeUpdate = c;
                }
                break;
              case 3:
                var f = t.stateNode.containerInfo;
                f.nodeType === 1 ? f.textContent = "" : f.nodeType === 9 && f.documentElement && f.removeChild(f.documentElement);
                break;
              case 5:
              case 6:
              case 4:
              case 17:
                break;
              default:
                throw Error(g(163));
            }
        } catch (v) {
          se(t, t.return, v);
        }
        if (e = t.sibling, e !== null) {
          e.return = t.return, P = e;
          break;
        }
        P = t.return;
      }
  return w = Hu, Hu = !1, w;
}
function Ur(e, t, n) {
  var r = t.updateQueue;
  if (r = r !== null ? r.lastEffect : null, r !== null) {
    var i = r = r.next;
    do {
      if ((i.tag & e) === e) {
        var o = i.destroy;
        i.destroy = void 0, o !== void 0 && Ra(t, n, o);
      }
      i = i.next;
    } while (i !== r);
  }
}
function Jo(e, t) {
  if (t = t.updateQueue, t = t !== null ? t.lastEffect : null, t !== null) {
    var n = t = t.next;
    do {
      if ((n.tag & e) === e) {
        var r = n.create;
        n.destroy = r();
      }
      n = n.next;
    } while (n !== t);
  }
}
function La(e) {
  var t = e.ref;
  if (t !== null) {
    var n = e.stateNode;
    switch (e.tag) {
      case 5:
        e = n;
        break;
      default:
        e = n;
    }
    typeof t == "function" ? t(e) : t.current = e;
  }
}
function pf(e) {
  var t = e.alternate;
  t !== null && (e.alternate = null, pf(t)), e.child = null, e.deletions = null, e.sibling = null, e.tag === 5 && (t = e.stateNode, t !== null && (delete t[vt], delete t[ti], delete t[ya], delete t[Gh], delete t[Kh])), e.stateNode = null, e.return = null, e.dependencies = null, e.memoizedProps = null, e.memoizedState = null, e.pendingProps = null, e.stateNode = null, e.updateQueue = null;
}
function hf(e) {
  return e.tag === 5 || e.tag === 3 || e.tag === 4;
}
function Yu(e) {
  e:
    for (; ; ) {
      for (; e.sibling === null; ) {
        if (e.return === null || hf(e.return))
          return null;
        e = e.return;
      }
      for (e.sibling.return = e.return, e = e.sibling; e.tag !== 5 && e.tag !== 6 && e.tag !== 18; ) {
        if (e.flags & 2 || e.child === null || e.tag === 4)
          continue e;
        e.child.return = e, e = e.child;
      }
      if (!(e.flags & 2))
        return e.stateNode;
    }
}
function Da(e, t, n) {
  var r = e.tag;
  if (r === 5 || r === 6)
    e = e.stateNode, t ? n.nodeType === 8 ? n.parentNode.insertBefore(e, t) : n.insertBefore(e, t) : (n.nodeType === 8 ? (t = n.parentNode, t.insertBefore(e, n)) : (t = n, t.appendChild(e)), n = n._reactRootContainer, n != null || t.onclick !== null || (t.onclick = vo));
  else if (r !== 4 && (e = e.child, e !== null))
    for (Da(e, t, n), e = e.sibling; e !== null; )
      Da(e, t, n), e = e.sibling;
}
function Ma(e, t, n) {
  var r = e.tag;
  if (r === 5 || r === 6)
    e = e.stateNode, t ? n.insertBefore(e, t) : n.appendChild(e);
  else if (r !== 4 && (e = e.child, e !== null))
    for (Ma(e, t, n), e = e.sibling; e !== null; )
      Ma(e, t, n), e = e.sibling;
}
var ge = null, tt = !1;
function $t(e, t, n) {
  for (n = n.child; n !== null; )
    mf(e, t, n), n = n.sibling;
}
function mf(e, t, n) {
  if (gt && typeof gt.onCommitFiberUnmount == "function")
    try {
      gt.onCommitFiberUnmount(Bo, n);
    } catch {
    }
  switch (n.tag) {
    case 5:
      Ee || Jn(n, t);
    case 6:
      var r = ge, i = tt;
      ge = null, $t(e, t, n), ge = r, tt = i, ge !== null && (tt ? (e = ge, n = n.stateNode, e.nodeType === 8 ? e.parentNode.removeChild(n) : e.removeChild(n)) : ge.removeChild(n.stateNode));
      break;
    case 18:
      ge !== null && (tt ? (e = ge, n = n.stateNode, e.nodeType === 8 ? Ns(e.parentNode, n) : e.nodeType === 1 && Ns(e, n), Xr(e)) : Ns(ge, n.stateNode));
      break;
    case 4:
      r = ge, i = tt, ge = n.stateNode.containerInfo, tt = !0, $t(e, t, n), ge = r, tt = i;
      break;
    case 0:
    case 11:
    case 14:
    case 15:
      if (!Ee && (r = n.updateQueue, r !== null && (r = r.lastEffect, r !== null))) {
        i = r = r.next;
        do {
          var o = i, s = o.destroy;
          o = o.tag, s !== void 0 && (o & 2 || o & 4) && Ra(n, t, s), i = i.next;
        } while (i !== r);
      }
      $t(e, t, n);
      break;
    case 1:
      if (!Ee && (Jn(n, t), r = n.stateNode, typeof r.componentWillUnmount == "function"))
        try {
          r.props = n.memoizedProps, r.state = n.memoizedState, r.componentWillUnmount();
        } catch (a) {
          se(n, t, a);
        }
      $t(e, t, n);
      break;
    case 21:
      $t(e, t, n);
      break;
    case 22:
      n.mode & 1 ? (Ee = (r = Ee) || n.memoizedState !== null, $t(e, t, n), Ee = r) : $t(e, t, n);
      break;
    default:
      $t(e, t, n);
  }
}
function Qu(e) {
  var t = e.updateQueue;
  if (t !== null) {
    e.updateQueue = null;
    var n = e.stateNode;
    n === null && (n = e.stateNode = new dm()), t.forEach(function(r) {
      var i = km.bind(null, e, r);
      n.has(r) || (n.add(r), r.then(i, i));
    });
  }
}
function be(e, t) {
  var n = t.deletions;
  if (n !== null)
    for (var r = 0; r < n.length; r++) {
      var i = n[r];
      try {
        var o = e, s = t, a = s;
        e:
          for (; a !== null; ) {
            switch (a.tag) {
              case 5:
                ge = a.stateNode, tt = !1;
                break e;
              case 3:
                ge = a.stateNode.containerInfo, tt = !0;
                break e;
              case 4:
                ge = a.stateNode.containerInfo, tt = !0;
                break e;
            }
            a = a.return;
          }
        if (ge === null)
          throw Error(g(160));
        mf(o, s, i), ge = null, tt = !1;
        var l = i.alternate;
        l !== null && (l.return = null), i.return = null;
      } catch (u) {
        se(i, t, u);
      }
    }
  if (t.subtreeFlags & 12854)
    for (t = t.child; t !== null; )
      vf(t, e), t = t.sibling;
}
function vf(e, t) {
  var n = e.alternate, r = e.flags;
  switch (e.tag) {
    case 0:
    case 11:
    case 14:
    case 15:
      if (be(t, e), ht(e), r & 4) {
        try {
          Ur(3, e, e.return), Jo(3, e);
        } catch (k) {
          se(e, e.return, k);
        }
        try {
          Ur(5, e, e.return);
        } catch (k) {
          se(e, e.return, k);
        }
      }
      break;
    case 1:
      be(t, e), ht(e), r & 512 && n !== null && Jn(n, n.return);
      break;
    case 5:
      if (be(t, e), ht(e), r & 512 && n !== null && Jn(n, n.return), e.flags & 32) {
        var i = e.stateNode;
        try {
          Yr(i, "");
        } catch (k) {
          se(e, e.return, k);
        }
      }
      if (r & 4 && (i = e.stateNode, i != null)) {
        var o = e.memoizedProps, s = n !== null ? n.memoizedProps : o, a = e.type, l = e.updateQueue;
        if (e.updateQueue = null, l !== null)
          try {
            a === "input" && o.type === "radio" && o.name != null && zc(i, o), ra(a, s);
            var u = ra(a, o);
            for (s = 0; s < l.length; s += 2) {
              var p = l[s], h = l[s + 1];
              p === "style" ? $c(i, h) : p === "dangerouslySetInnerHTML" ? Vc(i, h) : p === "children" ? Yr(i, h) : ba(i, p, h, u);
            }
            switch (a) {
              case "input":
                Js(i, o);
                break;
              case "textarea":
                Ac(i, o);
                break;
              case "select":
                var m = i._wrapperState.wasMultiple;
                i._wrapperState.wasMultiple = !!o.multiple;
                var y = o.value;
                y != null ? er(i, !!o.multiple, y, !1) : m !== !!o.multiple && (o.defaultValue != null ? er(
                  i,
                  !!o.multiple,
                  o.defaultValue,
                  !0
                ) : er(i, !!o.multiple, o.multiple ? [] : "", !1));
            }
            i[ti] = o;
          } catch (k) {
            se(e, e.return, k);
          }
      }
      break;
    case 6:
      if (be(t, e), ht(e), r & 4) {
        if (e.stateNode === null)
          throw Error(g(162));
        i = e.stateNode, o = e.memoizedProps;
        try {
          i.nodeValue = o;
        } catch (k) {
          se(e, e.return, k);
        }
      }
      break;
    case 3:
      if (be(t, e), ht(e), r & 4 && n !== null && n.memoizedState.isDehydrated)
        try {
          Xr(t.containerInfo);
        } catch (k) {
          se(e, e.return, k);
        }
      break;
    case 4:
      be(t, e), ht(e);
      break;
    case 13:
      be(t, e), ht(e), i = e.child, i.flags & 8192 && (o = i.memoizedState !== null, i.stateNode.isHidden = o, !o || i.alternate !== null && i.alternate.memoizedState !== null || (Dl = le())), r & 4 && Qu(e);
      break;
    case 22:
      if (p = n !== null && n.memoizedState !== null, e.mode & 1 ? (Ee = (u = Ee) || p, be(t, e), Ee = u) : be(t, e), ht(e), r & 8192) {
        if (u = e.memoizedState !== null, (e.stateNode.isHidden = u) && !p && e.mode & 1)
          for (P = e, p = e.child; p !== null; ) {
            for (h = P = p; P !== null; ) {
              switch (m = P, y = m.child, m.tag) {
                case 0:
                case 11:
                case 14:
                case 15:
                  Ur(4, m, m.return);
                  break;
                case 1:
                  Jn(m, m.return);
                  var w = m.stateNode;
                  if (typeof w.componentWillUnmount == "function") {
                    r = m, n = m.return;
                    try {
                      t = r, w.props = t.memoizedProps, w.state = t.memoizedState, w.componentWillUnmount();
                    } catch (k) {
                      se(r, n, k);
                    }
                  }
                  break;
                case 5:
                  Jn(m, m.return);
                  break;
                case 22:
                  if (m.memoizedState !== null) {
                    Ku(h);
                    continue;
                  }
              }
              y !== null ? (y.return = m, P = y) : Ku(h);
            }
            p = p.sibling;
          }
        e:
          for (p = null, h = e; ; ) {
            if (h.tag === 5) {
              if (p === null) {
                p = h;
                try {
                  i = h.stateNode, u ? (o = i.style, typeof o.setProperty == "function" ? o.setProperty("display", "none", "important") : o.display = "none") : (a = h.stateNode, l = h.memoizedProps.style, s = l != null && l.hasOwnProperty("display") ? l.display : null, a.style.display = Wc("display", s));
                } catch (k) {
                  se(e, e.return, k);
                }
              }
            } else if (h.tag === 6) {
              if (p === null)
                try {
                  h.stateNode.nodeValue = u ? "" : h.memoizedProps;
                } catch (k) {
                  se(e, e.return, k);
                }
            } else if ((h.tag !== 22 && h.tag !== 23 || h.memoizedState === null || h === e) && h.child !== null) {
              h.child.return = h, h = h.child;
              continue;
            }
            if (h === e)
              break e;
            for (; h.sibling === null; ) {
              if (h.return === null || h.return === e)
                break e;
              p === h && (p = null), h = h.return;
            }
            p === h && (p = null), h.sibling.return = h.return, h = h.sibling;
          }
      }
      break;
    case 19:
      be(t, e), ht(e), r & 4 && Qu(e);
      break;
    case 21:
      break;
    default:
      be(
        t,
        e
      ), ht(e);
  }
}
function ht(e) {
  var t = e.flags;
  if (t & 2) {
    try {
      e: {
        for (var n = e.return; n !== null; ) {
          if (hf(n)) {
            var r = n;
            break e;
          }
          n = n.return;
        }
        throw Error(g(160));
      }
      switch (r.tag) {
        case 5:
          var i = r.stateNode;
          r.flags & 32 && (Yr(i, ""), r.flags &= -33);
          var o = Yu(e);
          Ma(e, o, i);
          break;
        case 3:
        case 4:
          var s = r.stateNode.containerInfo, a = Yu(e);
          Da(e, a, s);
          break;
        default:
          throw Error(g(161));
      }
    } catch (l) {
      se(e, e.return, l);
    }
    e.flags &= -3;
  }
  t & 4096 && (e.flags &= -4097);
}
function pm(e, t, n) {
  P = e, yf(e);
}
function yf(e, t, n) {
  for (var r = (e.mode & 1) !== 0; P !== null; ) {
    var i = P, o = i.child;
    if (i.tag === 22 && r) {
      var s = i.memoizedState !== null || Zi;
      if (!s) {
        var a = i.alternate, l = a !== null && a.memoizedState !== null || Ee;
        a = Zi;
        var u = Ee;
        if (Zi = s, (Ee = l) && !u)
          for (P = i; P !== null; )
            s = P, l = s.child, s.tag === 22 && s.memoizedState !== null ? Xu(i) : l !== null ? (l.return = s, P = l) : Xu(i);
        for (; o !== null; )
          P = o, yf(o), o = o.sibling;
        P = i, Zi = a, Ee = u;
      }
      Gu(e);
    } else
      i.subtreeFlags & 8772 && o !== null ? (o.return = i, P = o) : Gu(e);
  }
}
function Gu(e) {
  for (; P !== null; ) {
    var t = P;
    if (t.flags & 8772) {
      var n = t.alternate;
      try {
        if (t.flags & 8772)
          switch (t.tag) {
            case 0:
            case 11:
            case 15:
              Ee || Jo(5, t);
              break;
            case 1:
              var r = t.stateNode;
              if (t.flags & 4 && !Ee)
                if (n === null)
                  r.componentDidMount();
                else {
                  var i = t.elementType === t.type ? n.memoizedProps : et(t.type, n.memoizedProps);
                  r.componentDidUpdate(i, n.memoizedState, r.__reactInternalSnapshotBeforeUpdate);
                }
              var o = t.updateQueue;
              o !== null && Lu(t, o, r);
              break;
            case 3:
              var s = t.updateQueue;
              if (s !== null) {
                if (n = null, t.child !== null)
                  switch (t.child.tag) {
                    case 5:
                      n = t.child.stateNode;
                      break;
                    case 1:
                      n = t.child.stateNode;
                  }
                Lu(t, s, n);
              }
              break;
            case 5:
              var a = t.stateNode;
              if (n === null && t.flags & 4) {
                n = a;
                var l = t.memoizedProps;
                switch (t.type) {
                  case "button":
                  case "input":
                  case "select":
                  case "textarea":
                    l.autoFocus && n.focus();
                    break;
                  case "img":
                    l.src && (n.src = l.src);
                }
              }
              break;
            case 6:
              break;
            case 4:
              break;
            case 12:
              break;
            case 13:
              if (t.memoizedState === null) {
                var u = t.alternate;
                if (u !== null) {
                  var p = u.memoizedState;
                  if (p !== null) {
                    var h = p.dehydrated;
                    h !== null && Xr(h);
                  }
                }
              }
              break;
            case 19:
            case 17:
            case 21:
            case 22:
            case 23:
            case 25:
              break;
            default:
              throw Error(g(163));
          }
        Ee || t.flags & 512 && La(t);
      } catch (m) {
        se(t, t.return, m);
      }
    }
    if (t === e) {
      P = null;
      break;
    }
    if (n = t.sibling, n !== null) {
      n.return = t.return, P = n;
      break;
    }
    P = t.return;
  }
}
function Ku(e) {
  for (; P !== null; ) {
    var t = P;
    if (t === e) {
      P = null;
      break;
    }
    var n = t.sibling;
    if (n !== null) {
      n.return = t.return, P = n;
      break;
    }
    P = t.return;
  }
}
function Xu(e) {
  for (; P !== null; ) {
    var t = P;
    try {
      switch (t.tag) {
        case 0:
        case 11:
        case 15:
          var n = t.return;
          try {
            Jo(4, t);
          } catch (l) {
            se(t, n, l);
          }
          break;
        case 1:
          var r = t.stateNode;
          if (typeof r.componentDidMount == "function") {
            var i = t.return;
            try {
              r.componentDidMount();
            } catch (l) {
              se(t, i, l);
            }
          }
          var o = t.return;
          try {
            La(t);
          } catch (l) {
            se(t, o, l);
          }
          break;
        case 5:
          var s = t.return;
          try {
            La(t);
          } catch (l) {
            se(t, s, l);
          }
      }
    } catch (l) {
      se(t, t.return, l);
    }
    if (t === e) {
      P = null;
      break;
    }
    var a = t.sibling;
    if (a !== null) {
      a.return = t.return, P = a;
      break;
    }
    P = t.return;
  }
}
var hm = Math.ceil, No = Vt.ReactCurrentDispatcher, Rl = Vt.ReactCurrentOwner, Xe = Vt.ReactCurrentBatchConfig, W = 0, ve = null, ce = null, we = 0, We = 0, bn = pn(0), fe = 0, ai = null, On = 0, bo = 0, Ll = 0, Zr = null, Me = null, Dl = 0, pr = 1 / 0, Tt = null, Oo = !1, Ia = null, nn = null, Bi = !1, Kt = null, Po = 0, Br = 0, ja = null, ro = -1, io = 0;
function Pe() {
  return W & 6 ? le() : ro !== -1 ? ro : ro = le();
}
function rn(e) {
  return e.mode & 1 ? W & 2 && we !== 0 ? we & -we : qh.transition !== null ? (io === 0 && (io = bc()), io) : (e = H, e !== 0 || (e = window.event, e = e === void 0 ? 16 : sd(e.type)), e) : 1;
}
function ot(e, t, n, r) {
  if (50 < Br)
    throw Br = 0, ja = null, Error(g(185));
  Ei(e, n, r), (!(W & 2) || e !== ve) && (e === ve && (!(W & 2) && (bo |= n), fe === 4 && Yt(e, we)), Fe(e, r), n === 1 && W === 0 && !(t.mode & 1) && (pr = le() + 500, Ko && hn()));
}
function Fe(e, t) {
  var n = e.callbackNode;
  qp(e, t);
  var r = fo(e, e === ve ? we : 0);
  if (r === 0)
    n !== null && ou(n), e.callbackNode = null, e.callbackPriority = 0;
  else if (t = r & -r, e.callbackPriority !== t) {
    if (n != null && ou(n), t === 1)
      e.tag === 0 ? Xh(qu.bind(null, e)) : Cd(qu.bind(null, e)), Yh(function() {
        !(W & 6) && hn();
      }), n = null;
    else {
      switch (ed(r)) {
        case 1:
          n = il;
          break;
        case 4:
          n = qc;
          break;
        case 16:
          n = co;
          break;
        case 536870912:
          n = Jc;
          break;
        default:
          n = co;
      }
      n = Cf(n, gf.bind(null, e));
    }
    e.callbackPriority = t, e.callbackNode = n;
  }
}
function gf(e, t) {
  if (ro = -1, io = 0, W & 6)
    throw Error(g(327));
  var n = e.callbackNode;
  if (or() && e.callbackNode !== n)
    return null;
  var r = fo(e, e === ve ? we : 0);
  if (r === 0)
    return null;
  if (r & 30 || r & e.expiredLanes || t)
    t = Ro(e, r);
  else {
    t = r;
    var i = W;
    W |= 2;
    var o = _f();
    (ve !== e || we !== t) && (Tt = null, pr = le() + 500, Sn(e, t));
    do
      try {
        ym();
        break;
      } catch (a) {
        wf(e, a);
      }
    while (!0);
    yl(), No.current = o, W = i, ce !== null ? t = 0 : (ve = null, we = 0, t = fe);
  }
  if (t !== 0) {
    if (t === 2 && (i = la(e), i !== 0 && (r = i, t = za(e, i))), t === 1)
      throw n = ai, Sn(e, 0), Yt(e, r), Fe(e, le()), n;
    if (t === 6)
      Yt(e, r);
    else {
      if (i = e.current.alternate, !(r & 30) && !mm(i) && (t = Ro(e, r), t === 2 && (o = la(e), o !== 0 && (r = o, t = za(e, o))), t === 1))
        throw n = ai, Sn(e, 0), Yt(e, r), Fe(e, le()), n;
      switch (e.finishedWork = i, e.finishedLanes = r, t) {
        case 0:
        case 1:
          throw Error(g(345));
        case 2:
          yn(e, Me, Tt);
          break;
        case 3:
          if (Yt(e, r), (r & 130023424) === r && (t = Dl + 500 - le(), 10 < t)) {
            if (fo(e, 0) !== 0)
              break;
            if (i = e.suspendedLanes, (i & r) !== r) {
              Pe(), e.pingedLanes |= e.suspendedLanes & i;
              break;
            }
            e.timeoutHandle = va(yn.bind(null, e, Me, Tt), t);
            break;
          }
          yn(e, Me, Tt);
          break;
        case 4:
          if (Yt(e, r), (r & 4194240) === r)
            break;
          for (t = e.eventTimes, i = -1; 0 < r; ) {
            var s = 31 - it(r);
            o = 1 << s, s = t[s], s > i && (i = s), r &= ~o;
          }
          if (r = i, r = le() - r, r = (120 > r ? 120 : 480 > r ? 480 : 1080 > r ? 1080 : 1920 > r ? 1920 : 3e3 > r ? 3e3 : 4320 > r ? 4320 : 1960 * hm(r / 1960)) - r, 10 < r) {
            e.timeoutHandle = va(yn.bind(null, e, Me, Tt), r);
            break;
          }
          yn(e, Me, Tt);
          break;
        case 5:
          yn(e, Me, Tt);
          break;
        default:
          throw Error(g(329));
      }
    }
  }
  return Fe(e, le()), e.callbackNode === n ? gf.bind(null, e) : null;
}
function za(e, t) {
  var n = Zr;
  return e.current.memoizedState.isDehydrated && (Sn(e, t).flags |= 256), e = Ro(e, t), e !== 2 && (t = Me, Me = n, t !== null && Aa(t)), e;
}
function Aa(e) {
  Me === null ? Me = e : Me.push.apply(Me, e);
}
function mm(e) {
  for (var t = e; ; ) {
    if (t.flags & 16384) {
      var n = t.updateQueue;
      if (n !== null && (n = n.stores, n !== null))
        for (var r = 0; r < n.length; r++) {
          var i = n[r], o = i.getSnapshot;
          i = i.value;
          try {
            if (!lt(o(), i))
              return !1;
          } catch {
            return !1;
          }
        }
    }
    if (n = t.child, t.subtreeFlags & 16384 && n !== null)
      n.return = t, t = n;
    else {
      if (t === e)
        break;
      for (; t.sibling === null; ) {
        if (t.return === null || t.return === e)
          return !0;
        t = t.return;
      }
      t.sibling.return = t.return, t = t.sibling;
    }
  }
  return !0;
}
function Yt(e, t) {
  for (t &= ~Ll, t &= ~bo, e.suspendedLanes |= t, e.pingedLanes &= ~t, e = e.expirationTimes; 0 < t; ) {
    var n = 31 - it(t), r = 1 << n;
    e[n] = -1, t &= ~r;
  }
}
function qu(e) {
  if (W & 6)
    throw Error(g(327));
  or();
  var t = fo(e, 0);
  if (!(t & 1))
    return Fe(e, le()), null;
  var n = Ro(e, t);
  if (e.tag !== 0 && n === 2) {
    var r = la(e);
    r !== 0 && (t = r, n = za(e, r));
  }
  if (n === 1)
    throw n = ai, Sn(e, 0), Yt(e, t), Fe(e, le()), n;
  if (n === 6)
    throw Error(g(345));
  return e.finishedWork = e.current.alternate, e.finishedLanes = t, yn(e, Me, Tt), Fe(e, le()), null;
}
function Ml(e, t) {
  var n = W;
  W |= 1;
  try {
    return e(t);
  } finally {
    W = n, W === 0 && (pr = le() + 500, Ko && hn());
  }
}
function Pn(e) {
  Kt !== null && Kt.tag === 0 && !(W & 6) && or();
  var t = W;
  W |= 1;
  var n = Xe.transition, r = H;
  try {
    if (Xe.transition = null, H = 1, e)
      return e();
  } finally {
    H = r, Xe.transition = n, W = t, !(W & 6) && hn();
  }
}
function Il() {
  We = bn.current, b(bn);
}
function Sn(e, t) {
  e.finishedWork = null, e.finishedLanes = 0;
  var n = e.timeoutHandle;
  if (n !== -1 && (e.timeoutHandle = -1, Hh(n)), ce !== null)
    for (n = ce.return; n !== null; ) {
      var r = n;
      switch (hl(r), r.tag) {
        case 1:
          r = r.type.childContextTypes, r != null && yo();
          break;
        case 3:
          dr(), b(ze), b(Ce), xl();
          break;
        case 5:
          Sl(r);
          break;
        case 4:
          dr();
          break;
        case 13:
          b(re);
          break;
        case 19:
          b(re);
          break;
        case 10:
          gl(r.type._context);
          break;
        case 22:
        case 23:
          Il();
      }
      n = n.return;
    }
  if (ve = e, ce = e = on(e.current, null), we = We = t, fe = 0, ai = null, Ll = bo = On = 0, Me = Zr = null, _n !== null) {
    for (t = 0; t < _n.length; t++)
      if (n = _n[t], r = n.interleaved, r !== null) {
        n.interleaved = null;
        var i = r.next, o = n.pending;
        if (o !== null) {
          var s = o.next;
          o.next = i, r.next = s;
        }
        n.pending = r;
      }
    _n = null;
  }
  return e;
}
function wf(e, t) {
  do {
    var n = ce;
    try {
      if (yl(), eo.current = To, Co) {
        for (var r = ie.memoizedState; r !== null; ) {
          var i = r.queue;
          i !== null && (i.pending = null), r = r.next;
        }
        Co = !1;
      }
      if (Nn = 0, me = de = ie = null, $r = !1, ii = 0, Rl.current = null, n === null || n.return === null) {
        fe = 1, ai = t, ce = null;
        break;
      }
      e: {
        var o = e, s = n.return, a = n, l = t;
        if (t = we, a.flags |= 32768, l !== null && typeof l == "object" && typeof l.then == "function") {
          var u = l, p = a, h = p.tag;
          if (!(p.mode & 1) && (h === 0 || h === 11 || h === 15)) {
            var m = p.alternate;
            m ? (p.updateQueue = m.updateQueue, p.memoizedState = m.memoizedState, p.lanes = m.lanes) : (p.updateQueue = null, p.memoizedState = null);
          }
          var y = Fu(s);
          if (y !== null) {
            y.flags &= -257, Vu(y, s, a, o, t), y.mode & 1 && Au(o, u, t), t = y, l = u;
            var w = t.updateQueue;
            if (w === null) {
              var k = /* @__PURE__ */ new Set();
              k.add(l), t.updateQueue = k;
            } else
              w.add(l);
            break e;
          } else {
            if (!(t & 1)) {
              Au(o, u, t), jl();
              break e;
            }
            l = Error(g(426));
          }
        } else if (ee && a.mode & 1) {
          var F = Fu(s);
          if (F !== null) {
            !(F.flags & 65536) && (F.flags |= 256), Vu(F, s, a, o, t), ml(fr(l, a));
            break e;
          }
        }
        o = l = fr(l, a), fe !== 4 && (fe = 2), Zr === null ? Zr = [o] : Zr.push(o), o = s;
        do {
          switch (o.tag) {
            case 3:
              o.flags |= 65536, t &= -t, o.lanes |= t;
              var d = tf(o, l, t);
              Ru(o, d);
              break e;
            case 1:
              a = l;
              var c = o.type, f = o.stateNode;
              if (!(o.flags & 128) && (typeof c.getDerivedStateFromError == "function" || f !== null && typeof f.componentDidCatch == "function" && (nn === null || !nn.has(f)))) {
                o.flags |= 65536, t &= -t, o.lanes |= t;
                var v = nf(o, a, t);
                Ru(o, v);
                break e;
              }
          }
          o = o.return;
        } while (o !== null);
      }
      Sf(n);
    } catch (x) {
      t = x, ce === n && n !== null && (ce = n = n.return);
      continue;
    }
    break;
  } while (!0);
}
function _f() {
  var e = No.current;
  return No.current = To, e === null ? To : e;
}
function jl() {
  (fe === 0 || fe === 3 || fe === 2) && (fe = 4), ve === null || !(On & 268435455) && !(bo & 268435455) || Yt(ve, we);
}
function Ro(e, t) {
  var n = W;
  W |= 2;
  var r = _f();
  (ve !== e || we !== t) && (Tt = null, Sn(e, t));
  do
    try {
      vm();
      break;
    } catch (i) {
      wf(e, i);
    }
  while (!0);
  if (yl(), W = n, No.current = r, ce !== null)
    throw Error(g(261));
  return ve = null, we = 0, fe;
}
function vm() {
  for (; ce !== null; )
    kf(ce);
}
function ym() {
  for (; ce !== null && !Up(); )
    kf(ce);
}
function kf(e) {
  var t = Ef(e.alternate, e, We);
  e.memoizedProps = e.pendingProps, t === null ? Sf(e) : ce = t, Rl.current = null;
}
function Sf(e) {
  var t = e;
  do {
    var n = t.alternate;
    if (e = t.return, t.flags & 32768) {
      if (n = cm(n, t), n !== null) {
        n.flags &= 32767, ce = n;
        return;
      }
      if (e !== null)
        e.flags |= 32768, e.subtreeFlags = 0, e.deletions = null;
      else {
        fe = 6, ce = null;
        return;
      }
    } else if (n = um(n, t, We), n !== null) {
      ce = n;
      return;
    }
    if (t = t.sibling, t !== null) {
      ce = t;
      return;
    }
    ce = t = e;
  } while (t !== null);
  fe === 0 && (fe = 5);
}
function yn(e, t, n) {
  var r = H, i = Xe.transition;
  try {
    Xe.transition = null, H = 1, gm(e, t, n, r);
  } finally {
    Xe.transition = i, H = r;
  }
  return null;
}
function gm(e, t, n, r) {
  do
    or();
  while (Kt !== null);
  if (W & 6)
    throw Error(g(327));
  n = e.finishedWork;
  var i = e.finishedLanes;
  if (n === null)
    return null;
  if (e.finishedWork = null, e.finishedLanes = 0, n === e.current)
    throw Error(g(177));
  e.callbackNode = null, e.callbackPriority = 0;
  var o = n.lanes | n.childLanes;
  if (Jp(e, o), e === ve && (ce = ve = null, we = 0), !(n.subtreeFlags & 2064) && !(n.flags & 2064) || Bi || (Bi = !0, Cf(co, function() {
    return or(), null;
  })), o = (n.flags & 15990) !== 0, n.subtreeFlags & 15990 || o) {
    o = Xe.transition, Xe.transition = null;
    var s = H;
    H = 1;
    var a = W;
    W |= 4, Rl.current = null, fm(e, n), vf(n, e), Fh(ha), po = !!pa, ha = pa = null, e.current = n, pm(n), Zp(), W = a, H = s, Xe.transition = o;
  } else
    e.current = n;
  if (Bi && (Bi = !1, Kt = e, Po = i), o = e.pendingLanes, o === 0 && (nn = null), Yp(n.stateNode), Fe(e, le()), t !== null)
    for (r = e.onRecoverableError, n = 0; n < t.length; n++)
      i = t[n], r(i.value, { componentStack: i.stack, digest: i.digest });
  if (Oo)
    throw Oo = !1, e = Ia, Ia = null, e;
  return Po & 1 && e.tag !== 0 && or(), o = e.pendingLanes, o & 1 ? e === ja ? Br++ : (Br = 0, ja = e) : Br = 0, hn(), null;
}
function or() {
  if (Kt !== null) {
    var e = ed(Po), t = Xe.transition, n = H;
    try {
      if (Xe.transition = null, H = 16 > e ? 16 : e, Kt === null)
        var r = !1;
      else {
        if (e = Kt, Kt = null, Po = 0, W & 6)
          throw Error(g(331));
        var i = W;
        for (W |= 4, P = e.current; P !== null; ) {
          var o = P, s = o.child;
          if (P.flags & 16) {
            var a = o.deletions;
            if (a !== null) {
              for (var l = 0; l < a.length; l++) {
                var u = a[l];
                for (P = u; P !== null; ) {
                  var p = P;
                  switch (p.tag) {
                    case 0:
                    case 11:
                    case 15:
                      Ur(8, p, o);
                  }
                  var h = p.child;
                  if (h !== null)
                    h.return = p, P = h;
                  else
                    for (; P !== null; ) {
                      p = P;
                      var m = p.sibling, y = p.return;
                      if (pf(p), p === u) {
                        P = null;
                        break;
                      }
                      if (m !== null) {
                        m.return = y, P = m;
                        break;
                      }
                      P = y;
                    }
                }
              }
              var w = o.alternate;
              if (w !== null) {
                var k = w.child;
                if (k !== null) {
                  w.child = null;
                  do {
                    var F = k.sibling;
                    k.sibling = null, k = F;
                  } while (k !== null);
                }
              }
              P = o;
            }
          }
          if (o.subtreeFlags & 2064 && s !== null)
            s.return = o, P = s;
          else
            e:
              for (; P !== null; ) {
                if (o = P, o.flags & 2048)
                  switch (o.tag) {
                    case 0:
                    case 11:
                    case 15:
                      Ur(9, o, o.return);
                  }
                var d = o.sibling;
                if (d !== null) {
                  d.return = o.return, P = d;
                  break e;
                }
                P = o.return;
              }
        }
        var c = e.current;
        for (P = c; P !== null; ) {
          s = P;
          var f = s.child;
          if (s.subtreeFlags & 2064 && f !== null)
            f.return = s, P = f;
          else
            e:
              for (s = c; P !== null; ) {
                if (a = P, a.flags & 2048)
                  try {
                    switch (a.tag) {
                      case 0:
                      case 11:
                      case 15:
                        Jo(9, a);
                    }
                  } catch (x) {
                    se(a, a.return, x);
                  }
                if (a === s) {
                  P = null;
                  break e;
                }
                var v = a.sibling;
                if (v !== null) {
                  v.return = a.return, P = v;
                  break e;
                }
                P = a.return;
              }
        }
        if (W = i, hn(), gt && typeof gt.onPostCommitFiberRoot == "function")
          try {
            gt.onPostCommitFiberRoot(Bo, e);
          } catch {
          }
        r = !0;
      }
      return r;
    } finally {
      H = n, Xe.transition = t;
    }
  }
  return !1;
}
function Ju(e, t, n) {
  t = fr(n, t), t = tf(e, t, 1), e = tn(e, t, 1), t = Pe(), e !== null && (Ei(e, 1, t), Fe(e, t));
}
function se(e, t, n) {
  if (e.tag === 3)
    Ju(e, e, n);
  else
    for (; t !== null; ) {
      if (t.tag === 3) {
        Ju(t, e, n);
        break;
      } else if (t.tag === 1) {
        var r = t.stateNode;
        if (typeof t.type.getDerivedStateFromError == "function" || typeof r.componentDidCatch == "function" && (nn === null || !nn.has(r))) {
          e = fr(n, e), e = nf(t, e, 1), t = tn(t, e, 1), e = Pe(), t !== null && (Ei(t, 1, e), Fe(t, e));
          break;
        }
      }
      t = t.return;
    }
}
function wm(e, t, n) {
  var r = e.pingCache;
  r !== null && r.delete(t), t = Pe(), e.pingedLanes |= e.suspendedLanes & n, ve === e && (we & n) === n && (fe === 4 || fe === 3 && (we & 130023424) === we && 500 > le() - Dl ? Sn(e, 0) : Ll |= n), Fe(e, t);
}
function xf(e, t) {
  t === 0 && (e.mode & 1 ? (t = Ii, Ii <<= 1, !(Ii & 130023424) && (Ii = 4194304)) : t = 1);
  var n = Pe();
  e = zt(e, t), e !== null && (Ei(e, t, n), Fe(e, n));
}
function _m(e) {
  var t = e.memoizedState, n = 0;
  t !== null && (n = t.retryLane), xf(e, n);
}
function km(e, t) {
  var n = 0;
  switch (e.tag) {
    case 13:
      var r = e.stateNode, i = e.memoizedState;
      i !== null && (n = i.retryLane);
      break;
    case 19:
      r = e.stateNode;
      break;
    default:
      throw Error(g(314));
  }
  r !== null && r.delete(t), xf(e, n);
}
var Ef;
Ef = function(e, t, n) {
  if (e !== null)
    if (e.memoizedProps !== t.pendingProps || ze.current)
      je = !0;
    else {
      if (!(e.lanes & n) && !(t.flags & 128))
        return je = !1, lm(e, t, n);
      je = !!(e.flags & 131072);
    }
  else
    je = !1, ee && t.flags & 1048576 && Td(t, _o, t.index);
  switch (t.lanes = 0, t.tag) {
    case 2:
      var r = t.type;
      no(e, t), e = t.pendingProps;
      var i = lr(t, Ce.current);
      ir(t, n), i = Cl(null, t, r, e, i, n);
      var o = Tl();
      return t.flags |= 1, typeof i == "object" && i !== null && typeof i.render == "function" && i.$$typeof === void 0 ? (t.tag = 1, t.memoizedState = null, t.updateQueue = null, Ae(r) ? (o = !0, go(t)) : o = !1, t.memoizedState = i.state !== null && i.state !== void 0 ? i.state : null, _l(t), i.updater = Xo, t.stateNode = i, i._reactInternals = t, xa(t, r, e, n), t = Ta(null, t, r, !0, o, n)) : (t.tag = 0, ee && o && pl(t), Oe(null, t, i, n), t = t.child), t;
    case 16:
      r = t.elementType;
      e: {
        switch (no(e, t), e = t.pendingProps, i = r._init, r = i(r._payload), t.type = r, i = t.tag = xm(r), e = et(r, e), i) {
          case 0:
            t = Ca(null, t, r, e, n);
            break e;
          case 1:
            t = Uu(null, t, r, e, n);
            break e;
          case 11:
            t = Wu(null, t, r, e, n);
            break e;
          case 14:
            t = $u(null, t, r, et(r.type, e), n);
            break e;
        }
        throw Error(g(
          306,
          r,
          ""
        ));
      }
      return t;
    case 0:
      return r = t.type, i = t.pendingProps, i = t.elementType === r ? i : et(r, i), Ca(e, t, r, i, n);
    case 1:
      return r = t.type, i = t.pendingProps, i = t.elementType === r ? i : et(r, i), Uu(e, t, r, i, n);
    case 3:
      e: {
        if (af(t), e === null)
          throw Error(g(387));
        r = t.pendingProps, o = t.memoizedState, i = o.element, Rd(e, t), xo(t, r, null, n);
        var s = t.memoizedState;
        if (r = s.element, o.isDehydrated)
          if (o = { element: r, isDehydrated: !1, cache: s.cache, pendingSuspenseBoundaries: s.pendingSuspenseBoundaries, transitions: s.transitions }, t.updateQueue.baseState = o, t.memoizedState = o, t.flags & 256) {
            i = fr(Error(g(423)), t), t = Zu(e, t, r, n, i);
            break e;
          } else if (r !== i) {
            i = fr(Error(g(424)), t), t = Zu(e, t, r, n, i);
            break e;
          } else
            for ($e = en(t.stateNode.containerInfo.firstChild), Ue = t, ee = !0, nt = null, n = Id(t, null, r, n), t.child = n; n; )
              n.flags = n.flags & -3 | 4096, n = n.sibling;
        else {
          if (ur(), r === i) {
            t = At(e, t, n);
            break e;
          }
          Oe(e, t, r, n);
        }
        t = t.child;
      }
      return t;
    case 5:
      return jd(t), e === null && _a(t), r = t.type, i = t.pendingProps, o = e !== null ? e.memoizedProps : null, s = i.children, ma(r, i) ? s = null : o !== null && ma(r, o) && (t.flags |= 32), sf(e, t), Oe(e, t, s, n), t.child;
    case 6:
      return e === null && _a(t), null;
    case 13:
      return lf(e, t, n);
    case 4:
      return kl(t, t.stateNode.containerInfo), r = t.pendingProps, e === null ? t.child = cr(t, null, r, n) : Oe(e, t, r, n), t.child;
    case 11:
      return r = t.type, i = t.pendingProps, i = t.elementType === r ? i : et(r, i), Wu(e, t, r, i, n);
    case 7:
      return Oe(e, t, t.pendingProps, n), t.child;
    case 8:
      return Oe(e, t, t.pendingProps.children, n), t.child;
    case 12:
      return Oe(e, t, t.pendingProps.children, n), t.child;
    case 10:
      e: {
        if (r = t.type._context, i = t.pendingProps, o = t.memoizedProps, s = i.value, G(ko, r._currentValue), r._currentValue = s, o !== null)
          if (lt(o.value, s)) {
            if (o.children === i.children && !ze.current) {
              t = At(e, t, n);
              break e;
            }
          } else
            for (o = t.child, o !== null && (o.return = t); o !== null; ) {
              var a = o.dependencies;
              if (a !== null) {
                s = o.child;
                for (var l = a.firstContext; l !== null; ) {
                  if (l.context === r) {
                    if (o.tag === 1) {
                      l = Dt(-1, n & -n), l.tag = 2;
                      var u = o.updateQueue;
                      if (u !== null) {
                        u = u.shared;
                        var p = u.pending;
                        p === null ? l.next = l : (l.next = p.next, p.next = l), u.pending = l;
                      }
                    }
                    o.lanes |= n, l = o.alternate, l !== null && (l.lanes |= n), ka(
                      o.return,
                      n,
                      t
                    ), a.lanes |= n;
                    break;
                  }
                  l = l.next;
                }
              } else if (o.tag === 10)
                s = o.type === t.type ? null : o.child;
              else if (o.tag === 18) {
                if (s = o.return, s === null)
                  throw Error(g(341));
                s.lanes |= n, a = s.alternate, a !== null && (a.lanes |= n), ka(s, n, t), s = o.sibling;
              } else
                s = o.child;
              if (s !== null)
                s.return = o;
              else
                for (s = o; s !== null; ) {
                  if (s === t) {
                    s = null;
                    break;
                  }
                  if (o = s.sibling, o !== null) {
                    o.return = s.return, s = o;
                    break;
                  }
                  s = s.return;
                }
              o = s;
            }
        Oe(e, t, i.children, n), t = t.child;
      }
      return t;
    case 9:
      return i = t.type, r = t.pendingProps.children, ir(t, n), i = qe(i), r = r(i), t.flags |= 1, Oe(e, t, r, n), t.child;
    case 14:
      return r = t.type, i = et(r, t.pendingProps), i = et(r.type, i), $u(e, t, r, i, n);
    case 15:
      return rf(e, t, t.type, t.pendingProps, n);
    case 17:
      return r = t.type, i = t.pendingProps, i = t.elementType === r ? i : et(r, i), no(e, t), t.tag = 1, Ae(r) ? (e = !0, go(t)) : e = !1, ir(t, n), Dd(t, r, i), xa(t, r, i, n), Ta(null, t, r, !0, e, n);
    case 19:
      return uf(e, t, n);
    case 22:
      return of(e, t, n);
  }
  throw Error(g(156, t.tag));
};
function Cf(e, t) {
  return Xc(e, t);
}
function Sm(e, t, n, r) {
  this.tag = e, this.key = n, this.sibling = this.child = this.return = this.stateNode = this.type = this.elementType = null, this.index = 0, this.ref = null, this.pendingProps = t, this.dependencies = this.memoizedState = this.updateQueue = this.memoizedProps = null, this.mode = r, this.subtreeFlags = this.flags = 0, this.deletions = null, this.childLanes = this.lanes = 0, this.alternate = null;
}
function Ke(e, t, n, r) {
  return new Sm(e, t, n, r);
}
function zl(e) {
  return e = e.prototype, !(!e || !e.isReactComponent);
}
function xm(e) {
  if (typeof e == "function")
    return zl(e) ? 1 : 0;
  if (e != null) {
    if (e = e.$$typeof, e === tl)
      return 11;
    if (e === nl)
      return 14;
  }
  return 2;
}
function on(e, t) {
  var n = e.alternate;
  return n === null ? (n = Ke(e.tag, t, e.key, e.mode), n.elementType = e.elementType, n.type = e.type, n.stateNode = e.stateNode, n.alternate = e, e.alternate = n) : (n.pendingProps = t, n.type = e.type, n.flags = 0, n.subtreeFlags = 0, n.deletions = null), n.flags = e.flags & 14680064, n.childLanes = e.childLanes, n.lanes = e.lanes, n.child = e.child, n.memoizedProps = e.memoizedProps, n.memoizedState = e.memoizedState, n.updateQueue = e.updateQueue, t = e.dependencies, n.dependencies = t === null ? null : { lanes: t.lanes, firstContext: t.firstContext }, n.sibling = e.sibling, n.index = e.index, n.ref = e.ref, n;
}
function oo(e, t, n, r, i, o) {
  var s = 2;
  if (r = e, typeof e == "function")
    zl(e) && (s = 1);
  else if (typeof e == "string")
    s = 5;
  else
    e:
      switch (e) {
        case Zn:
          return xn(n.children, i, o, t);
        case el:
          s = 8, i |= 8;
          break;
        case Qs:
          return e = Ke(12, n, t, i | 2), e.elementType = Qs, e.lanes = o, e;
        case Gs:
          return e = Ke(13, n, t, i), e.elementType = Gs, e.lanes = o, e;
        case Ks:
          return e = Ke(19, n, t, i), e.elementType = Ks, e.lanes = o, e;
        case Mc:
          return es(n, i, o, t);
        default:
          if (typeof e == "object" && e !== null)
            switch (e.$$typeof) {
              case Lc:
                s = 10;
                break e;
              case Dc:
                s = 9;
                break e;
              case tl:
                s = 11;
                break e;
              case nl:
                s = 14;
                break e;
              case Zt:
                s = 16, r = null;
                break e;
            }
          throw Error(g(130, e == null ? e : typeof e, ""));
      }
  return t = Ke(s, n, t, i), t.elementType = e, t.type = r, t.lanes = o, t;
}
function xn(e, t, n, r) {
  return e = Ke(7, e, r, t), e.lanes = n, e;
}
function es(e, t, n, r) {
  return e = Ke(22, e, r, t), e.elementType = Mc, e.lanes = n, e.stateNode = { isHidden: !1 }, e;
}
function js(e, t, n) {
  return e = Ke(6, e, null, t), e.lanes = n, e;
}
function zs(e, t, n) {
  return t = Ke(4, e.children !== null ? e.children : [], e.key, t), t.lanes = n, t.stateNode = { containerInfo: e.containerInfo, pendingChildren: null, implementation: e.implementation }, t;
}
function Em(e, t, n, r, i) {
  this.tag = t, this.containerInfo = e, this.finishedWork = this.pingCache = this.current = this.pendingChildren = null, this.timeoutHandle = -1, this.callbackNode = this.pendingContext = this.context = null, this.callbackPriority = 0, this.eventTimes = vs(0), this.expirationTimes = vs(-1), this.entangledLanes = this.finishedLanes = this.mutableReadLanes = this.expiredLanes = this.pingedLanes = this.suspendedLanes = this.pendingLanes = 0, this.entanglements = vs(0), this.identifierPrefix = r, this.onRecoverableError = i, this.mutableSourceEagerHydrationData = null;
}
function Al(e, t, n, r, i, o, s, a, l) {
  return e = new Em(e, t, n, a, l), t === 1 ? (t = 1, o === !0 && (t |= 8)) : t = 0, o = Ke(3, null, null, t), e.current = o, o.stateNode = e, o.memoizedState = { element: r, isDehydrated: n, cache: null, transitions: null, pendingSuspenseBoundaries: null }, _l(o), e;
}
function Cm(e, t, n) {
  var r = 3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
  return { $$typeof: Un, key: r == null ? null : "" + r, children: e, containerInfo: t, implementation: n };
}
function Tf(e) {
  if (!e)
    return an;
  e = e._reactInternals;
  e: {
    if (jn(e) !== e || e.tag !== 1)
      throw Error(g(170));
    var t = e;
    do {
      switch (t.tag) {
        case 3:
          t = t.stateNode.context;
          break e;
        case 1:
          if (Ae(t.type)) {
            t = t.stateNode.__reactInternalMemoizedMergedChildContext;
            break e;
          }
      }
      t = t.return;
    } while (t !== null);
    throw Error(g(171));
  }
  if (e.tag === 1) {
    var n = e.type;
    if (Ae(n))
      return Ed(e, n, t);
  }
  return t;
}
function Nf(e, t, n, r, i, o, s, a, l) {
  return e = Al(n, r, !0, e, i, o, s, a, l), e.context = Tf(null), n = e.current, r = Pe(), i = rn(n), o = Dt(r, i), o.callback = t ?? null, tn(n, o, i), e.current.lanes = i, Ei(e, i, r), Fe(e, r), e;
}
function ts(e, t, n, r) {
  var i = t.current, o = Pe(), s = rn(i);
  return n = Tf(n), t.context === null ? t.context = n : t.pendingContext = n, t = Dt(o, s), t.payload = { element: e }, r = r === void 0 ? null : r, r !== null && (t.callback = r), e = tn(i, t, s), e !== null && (ot(e, i, s, o), bi(e, i, s)), s;
}
function Lo(e) {
  if (e = e.current, !e.child)
    return null;
  switch (e.child.tag) {
    case 5:
      return e.child.stateNode;
    default:
      return e.child.stateNode;
  }
}
function bu(e, t) {
  if (e = e.memoizedState, e !== null && e.dehydrated !== null) {
    var n = e.retryLane;
    e.retryLane = n !== 0 && n < t ? n : t;
  }
}
function Fl(e, t) {
  bu(e, t), (e = e.alternate) && bu(e, t);
}
function Tm() {
  return null;
}
var Of = typeof reportError == "function" ? reportError : function(e) {
  console.error(e);
};
function Vl(e) {
  this._internalRoot = e;
}
ns.prototype.render = Vl.prototype.render = function(e) {
  var t = this._internalRoot;
  if (t === null)
    throw Error(g(409));
  ts(e, t, null, null);
};
ns.prototype.unmount = Vl.prototype.unmount = function() {
  var e = this._internalRoot;
  if (e !== null) {
    this._internalRoot = null;
    var t = e.containerInfo;
    Pn(function() {
      ts(null, e, null, null);
    }), t[jt] = null;
  }
};
function ns(e) {
  this._internalRoot = e;
}
ns.prototype.unstable_scheduleHydration = function(e) {
  if (e) {
    var t = rd();
    e = { blockedOn: null, target: e, priority: t };
    for (var n = 0; n < Ht.length && t !== 0 && t < Ht[n].priority; n++)
      ;
    Ht.splice(n, 0, e), n === 0 && od(e);
  }
};
function Wl(e) {
  return !(!e || e.nodeType !== 1 && e.nodeType !== 9 && e.nodeType !== 11);
}
function rs(e) {
  return !(!e || e.nodeType !== 1 && e.nodeType !== 9 && e.nodeType !== 11 && (e.nodeType !== 8 || e.nodeValue !== " react-mount-point-unstable "));
}
function ec() {
}
function Nm(e, t, n, r, i) {
  if (i) {
    if (typeof r == "function") {
      var o = r;
      r = function() {
        var u = Lo(s);
        o.call(u);
      };
    }
    var s = Nf(t, r, e, 0, null, !1, !1, "", ec);
    return e._reactRootContainer = s, e[jt] = s.current, br(e.nodeType === 8 ? e.parentNode : e), Pn(), s;
  }
  for (; i = e.lastChild; )
    e.removeChild(i);
  if (typeof r == "function") {
    var a = r;
    r = function() {
      var u = Lo(l);
      a.call(u);
    };
  }
  var l = Al(e, 0, !1, null, null, !1, !1, "", ec);
  return e._reactRootContainer = l, e[jt] = l.current, br(e.nodeType === 8 ? e.parentNode : e), Pn(function() {
    ts(t, l, n, r);
  }), l;
}
function is(e, t, n, r, i) {
  var o = n._reactRootContainer;
  if (o) {
    var s = o;
    if (typeof i == "function") {
      var a = i;
      i = function() {
        var l = Lo(s);
        a.call(l);
      };
    }
    ts(t, s, e, i);
  } else
    s = Nm(n, t, e, i, r);
  return Lo(s);
}
td = function(e) {
  switch (e.tag) {
    case 3:
      var t = e.stateNode;
      if (t.current.memoizedState.isDehydrated) {
        var n = Ir(t.pendingLanes);
        n !== 0 && (ol(t, n | 1), Fe(t, le()), !(W & 6) && (pr = le() + 500, hn()));
      }
      break;
    case 13:
      Pn(function() {
        var r = zt(e, 1);
        if (r !== null) {
          var i = Pe();
          ot(r, e, 1, i);
        }
      }), Fl(e, 1);
  }
};
sl = function(e) {
  if (e.tag === 13) {
    var t = zt(e, 134217728);
    if (t !== null) {
      var n = Pe();
      ot(t, e, 134217728, n);
    }
    Fl(e, 134217728);
  }
};
nd = function(e) {
  if (e.tag === 13) {
    var t = rn(e), n = zt(e, t);
    if (n !== null) {
      var r = Pe();
      ot(n, e, t, r);
    }
    Fl(e, t);
  }
};
rd = function() {
  return H;
};
id = function(e, t) {
  var n = H;
  try {
    return H = e, t();
  } finally {
    H = n;
  }
};
oa = function(e, t, n) {
  switch (t) {
    case "input":
      if (Js(e, n), t = n.name, n.type === "radio" && t != null) {
        for (n = e; n.parentNode; )
          n = n.parentNode;
        for (n = n.querySelectorAll("input[name=" + JSON.stringify("" + t) + '][type="radio"]'), t = 0; t < n.length; t++) {
          var r = n[t];
          if (r !== e && r.form === e.form) {
            var i = Go(r);
            if (!i)
              throw Error(g(90));
            jc(r), Js(r, i);
          }
        }
      }
      break;
    case "textarea":
      Ac(e, n);
      break;
    case "select":
      t = n.value, t != null && er(e, !!n.multiple, t, !1);
  }
};
Bc = Ml;
Hc = Pn;
var Om = { usingClientEntryPoint: !1, Events: [Ti, Qn, Go, Uc, Zc, Ml] }, Or = { findFiberByHostInstance: wn, bundleType: 0, version: "18.2.0", rendererPackageName: "react-dom" }, Pm = { bundleType: Or.bundleType, version: Or.version, rendererPackageName: Or.rendererPackageName, rendererConfig: Or.rendererConfig, overrideHookState: null, overrideHookStateDeletePath: null, overrideHookStateRenamePath: null, overrideProps: null, overridePropsDeletePath: null, overridePropsRenamePath: null, setErrorHandler: null, setSuspenseHandler: null, scheduleUpdate: null, currentDispatcherRef: Vt.ReactCurrentDispatcher, findHostInstanceByFiber: function(e) {
  return e = Gc(e), e === null ? null : e.stateNode;
}, findFiberByHostInstance: Or.findFiberByHostInstance || Tm, findHostInstancesForRefresh: null, scheduleRefresh: null, scheduleRoot: null, setRefreshHandler: null, getCurrentFiber: null, reconcilerVersion: "18.2.0-next-9e3b772b8-20220608" };
if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u") {
  var Hi = __REACT_DEVTOOLS_GLOBAL_HOOK__;
  if (!Hi.isDisabled && Hi.supportsFiber)
    try {
      Bo = Hi.inject(Pm), gt = Hi;
    } catch {
    }
}
Be.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = Om;
Be.createPortal = function(e, t) {
  var n = 2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
  if (!Wl(t))
    throw Error(g(200));
  return Cm(e, t, null, n);
};
Be.createRoot = function(e, t) {
  if (!Wl(e))
    throw Error(g(299));
  var n = !1, r = "", i = Of;
  return t != null && (t.unstable_strictMode === !0 && (n = !0), t.identifierPrefix !== void 0 && (r = t.identifierPrefix), t.onRecoverableError !== void 0 && (i = t.onRecoverableError)), t = Al(e, 1, !1, null, null, n, !1, r, i), e[jt] = t.current, br(e.nodeType === 8 ? e.parentNode : e), new Vl(t);
};
Be.findDOMNode = function(e) {
  if (e == null)
    return null;
  if (e.nodeType === 1)
    return e;
  var t = e._reactInternals;
  if (t === void 0)
    throw typeof e.render == "function" ? Error(g(188)) : (e = Object.keys(e).join(","), Error(g(268, e)));
  return e = Gc(t), e = e === null ? null : e.stateNode, e;
};
Be.flushSync = function(e) {
  return Pn(e);
};
Be.hydrate = function(e, t, n) {
  if (!rs(t))
    throw Error(g(200));
  return is(null, e, t, !0, n);
};
Be.hydrateRoot = function(e, t, n) {
  if (!Wl(e))
    throw Error(g(405));
  var r = n != null && n.hydratedSources || null, i = !1, o = "", s = Of;
  if (n != null && (n.unstable_strictMode === !0 && (i = !0), n.identifierPrefix !== void 0 && (o = n.identifierPrefix), n.onRecoverableError !== void 0 && (s = n.onRecoverableError)), t = Nf(t, null, e, 1, n ?? null, i, !1, o, s), e[jt] = t.current, br(e), r)
    for (e = 0; e < r.length; e++)
      n = r[e], i = n._getVersion, i = i(n._source), t.mutableSourceEagerHydrationData == null ? t.mutableSourceEagerHydrationData = [n, i] : t.mutableSourceEagerHydrationData.push(
        n,
        i
      );
  return new ns(t);
};
Be.render = function(e, t, n) {
  if (!rs(t))
    throw Error(g(200));
  return is(null, e, t, !1, n);
};
Be.unmountComponentAtNode = function(e) {
  if (!rs(e))
    throw Error(g(40));
  return e._reactRootContainer ? (Pn(function() {
    is(null, null, e, !1, function() {
      e._reactRootContainer = null, e[jt] = null;
    });
  }), !0) : !1;
};
Be.unstable_batchedUpdates = Ml;
Be.unstable_renderSubtreeIntoContainer = function(e, t, n, r) {
  if (!rs(n))
    throw Error(g(200));
  if (e == null || e._reactInternals === void 0)
    throw Error(g(38));
  return is(e, t, n, !1, r);
};
Be.version = "18.2.0-next-9e3b772b8-20220608";
function Pf() {
  if (!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" || typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function"))
    try {
      __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(Pf);
    } catch (e) {
      console.error(e);
    }
}
Pf(), Tc.exports = Be;
var Rm = Tc.exports, Rf, tc = Rm;
Rf = tc.createRoot, tc.hydrateRoot;
var Lf = { exports: {} }, Df = {};
/**
 * @license React
 * use-sync-external-store-shim.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var hr = ue;
function Lm(e, t) {
  return e === t && (e !== 0 || 1 / e === 1 / t) || e !== e && t !== t;
}
var Dm = typeof Object.is == "function" ? Object.is : Lm, Mm = hr.useState, Im = hr.useEffect, jm = hr.useLayoutEffect, zm = hr.useDebugValue;
function Am(e, t) {
  var n = t(), r = Mm({ inst: { value: n, getSnapshot: t } }), i = r[0].inst, o = r[1];
  return jm(function() {
    i.value = n, i.getSnapshot = t, As(i) && o({ inst: i });
  }, [e, n, t]), Im(function() {
    return As(i) && o({ inst: i }), e(function() {
      As(i) && o({ inst: i });
    });
  }, [e]), zm(n), n;
}
function As(e) {
  var t = e.getSnapshot;
  e = e.value;
  try {
    var n = t();
    return !Dm(e, n);
  } catch {
    return !0;
  }
}
function Fm(e, t) {
  return t();
}
var Vm = typeof window > "u" || typeof window.document > "u" || typeof window.document.createElement > "u" ? Fm : Am;
Df.useSyncExternalStore = hr.useSyncExternalStore !== void 0 ? hr.useSyncExternalStore : Vm;
Lf.exports = Df;
var Wm = Lf.exports;
const Xt = () => {
}, Ie = (
  /*#__NOINLINE__*/
  Xt()
), Fs = Object, $ = (e) => e === Ie, Lt = (e) => typeof e == "function", ln = (e, t) => ({
  ...e,
  ...t
}), $m = (e) => Lt(e.then), Yi = /* @__PURE__ */ new WeakMap();
let Um = 0;
const li = (e) => {
  const t = typeof e, n = e && e.constructor, r = n == Date;
  let i, o;
  if (Fs(e) === e && !r && n != RegExp) {
    if (i = Yi.get(e), i)
      return i;
    if (i = ++Um + "~", Yi.set(e, i), n == Array) {
      for (i = "@", o = 0; o < e.length; o++)
        i += li(e[o]) + ",";
      Yi.set(e, i);
    }
    if (n == Fs) {
      i = "#";
      const s = Fs.keys(e).sort();
      for (; !$(o = s.pop()); )
        $(e[o]) || (i += o + ":" + li(e[o]) + ",");
      Yi.set(e, i);
    }
  } else
    i = r ? e.toJSON() : t == "symbol" ? e.toString() : t == "string" ? JSON.stringify(e) : "" + e;
  return i;
}, Ot = /* @__PURE__ */ new WeakMap(), Vs = {}, Qi = {}, $l = "undefined", os = typeof window != $l, Fa = typeof document != $l, Zm = () => os && typeof window.requestAnimationFrame != $l, Mf = (e, t) => {
  const n = Ot.get(e);
  return [
    // Getter
    () => !$(t) && e.get(t) || Vs,
    // Setter
    (r) => {
      if (!$(t)) {
        const i = e.get(t);
        t in Qi || (Qi[t] = i), n[5](t, ln(i, r), i || Vs);
      }
    },
    // Subscriber
    n[6],
    // Get server cache snapshot
    () => !$(t) && t in Qi ? Qi[t] : !$(t) && e.get(t) || Vs
  ];
};
let Va = !0;
const Bm = () => Va, [Wa, $a] = os && window.addEventListener ? [
  window.addEventListener.bind(window),
  window.removeEventListener.bind(window)
] : [
  Xt,
  Xt
], Hm = () => {
  const e = Fa && document.visibilityState;
  return $(e) || e !== "hidden";
}, Ym = (e) => (Fa && document.addEventListener("visibilitychange", e), Wa("focus", e), () => {
  Fa && document.removeEventListener("visibilitychange", e), $a("focus", e);
}), Qm = (e) => {
  const t = () => {
    Va = !0, e();
  }, n = () => {
    Va = !1;
  };
  return Wa("online", t), Wa("offline", n), () => {
    $a("online", t), $a("offline", n);
  };
}, Gm = {
  isOnline: Bm,
  isVisible: Hm
}, Km = {
  initFocus: Ym,
  initReconnect: Qm
}, nc = !Zo.useId, ui = !os || "Deno" in window, Xm = (e) => Zm() ? window.requestAnimationFrame(e) : setTimeout(e, 1), Ws = ui ? ue.useEffect : ue.useLayoutEffect, $s = typeof navigator < "u" && navigator.connection, rc = !ui && $s && ([
  "slow-2g",
  "2g"
].includes($s.effectiveType) || $s.saveData), Ul = (e) => {
  if (Lt(e))
    try {
      e = e();
    } catch {
      e = "";
    }
  const t = e;
  return e = typeof e == "string" ? e : (Array.isArray(e) ? e.length : e) ? li(e) : "", [
    e,
    t
  ];
};
let qm = 0;
const Ua = () => ++qm, If = 0, jf = 1, zf = 2, Jm = 3;
var Pr = {
  __proto__: null,
  ERROR_REVALIDATE_EVENT: Jm,
  FOCUS_EVENT: If,
  MUTATE_EVENT: zf,
  RECONNECT_EVENT: jf
};
async function Af(...e) {
  const [t, n, r, i] = e, o = ln({
    populateCache: !0,
    throwOnError: !0
  }, typeof i == "boolean" ? {
    revalidate: i
  } : i || {});
  let s = o.populateCache;
  const a = o.rollbackOnError;
  let l = o.optimisticData;
  const u = o.revalidate !== !1, p = (y) => typeof a == "function" ? a(y) : a !== !1, h = o.throwOnError;
  if (Lt(n)) {
    const y = n, w = [], k = t.keys();
    for (const F of k)
      // Skip the special useSWRInfinite and useSWRSubscription keys.
      !/^\$(inf|sub)\$/.test(F) && y(t.get(F)._k) && w.push(F);
    return Promise.all(w.map(m));
  }
  return m(n);
  async function m(y) {
    const [w] = Ul(y);
    if (!w)
      return;
    const [k, F] = Mf(t, w), [d, c, f, v] = Ot.get(t), x = () => {
      const he = d[w];
      return u && (delete f[w], delete v[w], he && he[0]) ? he[0](zf).then(() => k().data) : k().data;
    };
    if (e.length < 3)
      return x();
    let S = r, C;
    const E = Ua();
    c[w] = [
      E,
      0
    ];
    const Y = !$(l), D = k(), pe = D.data, ct = D._c, Ve = $(ct) ? pe : ct;
    if (Y && (l = Lt(l) ? l(Ve, pe) : l, F({
      data: l,
      _c: Ve
    })), Lt(S))
      try {
        S = S(Ve);
      } catch (he) {
        C = he;
      }
    if (S && $m(S))
      if (S = await S.catch((he) => {
        C = he;
      }), E !== c[w][0]) {
        if (C)
          throw C;
        return S;
      } else
        C && Y && p(C) && (s = !0, F({
          data: Ve,
          _c: Ie
        }));
    if (s && !C)
      if (Lt(s)) {
        const he = s(S, Ve);
        F({
          data: he,
          error: Ie,
          _c: Ie
        });
      } else
        F({
          data: S,
          error: Ie,
          _c: Ie
        });
    if (c[w][1] = Ua(), Promise.resolve(x()).then(() => {
      F({
        _c: Ie
      });
    }), C) {
      if (h)
        throw C;
      return;
    }
    return S;
  }
}
const ic = (e, t) => {
  for (const n in e)
    e[n][0] && e[n][0](t);
}, bm = (e, t) => {
  if (!Ot.has(e)) {
    const n = ln(Km, t), r = {}, i = Af.bind(Ie, e);
    let o = Xt;
    const s = {}, a = (p, h) => {
      const m = s[p] || [];
      return s[p] = m, m.push(h), () => m.splice(m.indexOf(h), 1);
    }, l = (p, h, m) => {
      e.set(p, h);
      const y = s[p];
      if (y)
        for (const w of y)
          w(h, m);
    }, u = () => {
      if (!Ot.has(e) && (Ot.set(e, [
        r,
        {},
        {},
        {},
        i,
        l,
        a
      ]), !ui)) {
        const p = n.initFocus(setTimeout.bind(Ie, ic.bind(Ie, r, If))), h = n.initReconnect(setTimeout.bind(Ie, ic.bind(Ie, r, jf)));
        o = () => {
          p && p(), h && h(), Ot.delete(e);
        };
      }
    };
    return u(), [
      e,
      i,
      u,
      o
    ];
  }
  return [
    e,
    Ot.get(e)[4]
  ];
}, e0 = (e, t, n, r, i) => {
  const o = n.errorRetryCount, s = i.retryCount, a = ~~((Math.random() + 0.5) * (1 << (s < 8 ? s : 8))) * n.errorRetryInterval;
  !$(o) && s > o || setTimeout(r, a, i);
}, t0 = (e, t) => li(e) == li(t), [Ff, n0] = bm(/* @__PURE__ */ new Map()), r0 = ln(
  {
    // events
    onLoadingSlow: Xt,
    onSuccess: Xt,
    onError: Xt,
    onErrorRetry: e0,
    onDiscarded: Xt,
    // switches
    revalidateOnFocus: !0,
    revalidateOnReconnect: !0,
    revalidateIfStale: !0,
    shouldRetryOnError: !0,
    // timeouts
    errorRetryInterval: rc ? 1e4 : 5e3,
    focusThrottleInterval: 5 * 1e3,
    dedupingInterval: 2 * 1e3,
    loadingTimeout: rc ? 5e3 : 3e3,
    // providers
    compare: t0,
    isPaused: () => !1,
    cache: Ff,
    mutate: n0,
    fallback: {}
  },
  // use web preset by default
  Gm
), i0 = (e, t) => {
  const n = ln(e, t);
  if (t) {
    const { use: r, fallback: i } = e, { use: o, fallback: s } = t;
    r && o && (n.use = r.concat(o)), i && s && (n.fallback = ln(i, s));
  }
  return n;
}, o0 = ue.createContext({}), s0 = "$inf$", Vf = os && window.__SWR_DEVTOOLS_USE__, a0 = Vf ? window.__SWR_DEVTOOLS_USE__ : [], l0 = () => {
  Vf && (window.__SWR_DEVTOOLS_REACT__ = Zo);
}, u0 = (e) => Lt(e[1]) ? [
  e[0],
  e[1],
  e[2] || {}
] : [
  e[0],
  null,
  (e[1] === null ? e[2] : e[1]) || {}
], c0 = () => ln(r0, ue.useContext(o0)), d0 = (e) => (t, n, r) => e(t, n && ((...o) => {
  const [s] = Ul(t), [, , , a] = Ot.get(Ff);
  if (s.startsWith(s0))
    return n(...o);
  const l = a[s];
  return $(l) ? n(...o) : (delete a[s], l);
}), r), f0 = a0.concat(d0), p0 = (e) => function(...n) {
  const r = c0(), [i, o, s] = u0(n), a = i0(r, s);
  let l = e;
  const { use: u } = a, p = (u || []).concat(f0);
  for (let h = p.length; h--; )
    l = p[h](l);
  return l(i, o || a.fetcher || null, a);
}, h0 = (e, t, n) => {
  const r = t[e] || (t[e] = []);
  return r.push(n), () => {
    const i = r.indexOf(n);
    i >= 0 && (r[i] = r[r.length - 1], r.pop());
  };
};
l0();
const oc = Zo.use || ((e) => {
  if (e.status === "pending")
    throw e;
  if (e.status === "fulfilled")
    return e.value;
  throw e.status === "rejected" ? e.reason : (e.status = "pending", e.then((t) => {
    e.status = "fulfilled", e.value = t;
  }, (t) => {
    e.status = "rejected", e.reason = t;
  }), e);
}), Us = {
  dedupe: !0
}, m0 = (e, t, n) => {
  const { cache: r, compare: i, suspense: o, fallbackData: s, revalidateOnMount: a, revalidateIfStale: l, refreshInterval: u, refreshWhenHidden: p, refreshWhenOffline: h, keepPreviousData: m } = n, [y, w, k, F] = Ot.get(r), [d, c] = Ul(e), f = ue.useRef(!1), v = ue.useRef(!1), x = ue.useRef(d), S = ue.useRef(t), C = ue.useRef(n), E = () => C.current, Y = () => E().isVisible() && E().isOnline(), [D, pe, ct, Ve] = Mf(r, d), he = ue.useRef({}).current, ls = $(s) ? n.fallback[d] : s, zn = (X, q) => {
    for (const ke in he) {
      const ae = ke;
      if (ae === "data") {
        if (!i(X[ae], q[ae]) && (!$(X[ae]) || !i(Wt, q[ae])))
          return !1;
      } else if (q[ae] !== X[ae])
        return !1;
    }
    return !0;
  }, An = ue.useMemo(() => {
    const X = !d || !t ? !1 : $(a) ? E().isPaused() || o ? !1 : $(l) ? !0 : l : a, q = (Ne) => {
      const Et = ln(Ne);
      return delete Et._k, X ? {
        isValidating: !0,
        isLoading: !0,
        ...Et
      } : Et;
    }, ke = D(), ae = Ve(), pt = q(ke), Fn = ke === ae ? pt : q(ae);
    let ye = pt;
    return [
      () => {
        const Ne = q(D());
        return zn(Ne, ye) ? (ye.data = Ne.data, ye.isLoading = Ne.isLoading, ye.isValidating = Ne.isValidating, ye.error = Ne.error, ye) : (ye = Ne, Ne);
      },
      () => Fn
    ];
  }, [
    r,
    d
  ]), T = Wm.useSyncExternalStore(ue.useCallback(
    (X) => ct(d, (q, ke) => {
      zn(ke, q) || X();
    }),
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [
      r,
      d
    ]
  ), An[0], An[1]), M = !f.current, z = y[d] && y[d].length > 0, Q = T.data, K = $(Q) ? ls : Q, xt = T.error, dt = ue.useRef(K), Wt = m ? $(Q) ? dt.current : Q : K, ft = z && !$(xt) ? !1 : M && !$(a) ? a : E().isPaused() ? !1 : o ? $(K) ? !1 : l : $(K) || l, mn = !!(d && t && M && ft), np = $(T.isValidating) ? mn : T.isValidating, rp = $(T.isLoading) ? mn : T.isLoading, _r = ue.useCallback(
    async (X) => {
      const q = S.current;
      if (!d || !q || v.current || E().isPaused())
        return !1;
      let ke, ae, pt = !0;
      const Fn = X || {}, ye = !k[d] || !Fn.dedupe, Ne = () => nc ? !v.current && d === x.current && f.current : d === x.current, Et = {
        isValidating: !1,
        isLoading: !1
      }, Bl = () => {
        pe(Et);
      }, Hl = () => {
        const Ye = k[d];
        Ye && Ye[1] === ae && delete k[d];
      }, Yl = {
        isValidating: !0
      };
      $(D().data) && (Yl.isLoading = !0);
      try {
        if (ye && (pe(Yl), n.loadingTimeout && $(D().data) && setTimeout(() => {
          pt && Ne() && E().onLoadingSlow(d, n);
        }, n.loadingTimeout), k[d] = [
          q(c),
          Ua()
        ]), [ke, ae] = k[d], ke = await ke, ye && setTimeout(Hl, n.dedupingInterval), !k[d] || k[d][1] !== ae)
          return ye && Ne() && E().onDiscarded(d), !1;
        Et.error = Ie;
        const Ye = w[d];
        if (!$(Ye) && // case 1
        (ae <= Ye[0] || // case 2
        ae <= Ye[1] || // case 3
        Ye[1] === 0))
          return Bl(), ye && Ne() && E().onDiscarded(d), !1;
        const Ct = D().data;
        Et.data = i(Ct, ke) ? Ct : ke, ye && Ne() && E().onSuccess(ke, d, n);
      } catch (Ye) {
        Hl();
        const Ct = E(), { shouldRetryOnError: us } = Ct;
        Ct.isPaused() || (Et.error = Ye, ye && Ne() && (Ct.onError(Ye, d, Ct), (us === !0 || Lt(us) && us(Ye)) && Y() && Ct.onErrorRetry(Ye, d, Ct, (ip) => {
          const cs = y[d];
          cs && cs[0] && cs[0](Pr.ERROR_REVALIDATE_EVENT, ip);
        }, {
          retryCount: (Fn.retryCount || 0) + 1,
          dedupe: !0
        })));
      }
      return pt = !1, Bl(), !0;
    },
    // `setState` is immutable, and `eventsCallback`, `fnArg`, and
    // `keyValidating` are depending on `key`, so we can exclude them from
    // the deps array.
    //
    // FIXME:
    // `fn` and `config` might be changed during the lifecycle,
    // but they might be changed every render like this.
    // `useSWR('key', () => fetch('/api/'), { suspense: true })`
    // So we omit the values from the deps array
    // even though it might cause unexpected behaviors.
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [
      d,
      r
    ]
  ), Zl = ue.useCallback(
    // Use callback to make sure `keyRef.current` returns latest result every time
    (...X) => Af(r, x.current, ...X),
    // eslint-disable-next-line react-hooks/exhaustive-deps
    []
  );
  if (Ws(() => {
    S.current = t, C.current = n, $(Q) || (dt.current = Q);
  }), Ws(() => {
    if (!d)
      return;
    const X = _r.bind(Ie, Us);
    let q = 0;
    const ae = h0(d, y, (pt, Fn = {}) => {
      if (pt == Pr.FOCUS_EVENT) {
        const ye = Date.now();
        E().revalidateOnFocus && ye > q && Y() && (q = ye + E().focusThrottleInterval, X());
      } else if (pt == Pr.RECONNECT_EVENT)
        E().revalidateOnReconnect && Y() && X();
      else {
        if (pt == Pr.MUTATE_EVENT)
          return _r();
        if (pt == Pr.ERROR_REVALIDATE_EVENT)
          return _r(Fn);
      }
    });
    return v.current = !1, x.current = d, f.current = !0, pe({
      _k: c
    }), ft && ($(K) || ui ? X() : Xm(X)), () => {
      v.current = !0, ae();
    };
  }, [
    d
  ]), Ws(() => {
    let X;
    function q() {
      const ae = Lt(u) ? u(D().data) : u;
      ae && X !== -1 && (X = setTimeout(ke, ae));
    }
    function ke() {
      !D().error && (p || E().isVisible()) && (h || E().isOnline()) ? _r(Us).then(q) : q();
    }
    return q(), () => {
      X && (clearTimeout(X), X = -1);
    };
  }, [
    u,
    p,
    h,
    d
  ]), ue.useDebugValue(Wt), o && $(K) && d) {
    if (!nc && ui)
      throw new Error("Fallback data is required when using suspense in SSR.");
    S.current = t, C.current = n, v.current = !1;
    const X = F[d];
    if (!$(X)) {
      const q = Zl(X);
      oc(q);
    }
    if ($(xt)) {
      const q = _r(Us);
      $(Wt) || (q.status = "fulfilled", q.value = !0), oc(q);
    } else
      throw xt;
  }
  return {
    mutate: Zl,
    get data() {
      return he.data = !0, Wt;
    },
    get error() {
      return he.error = !0, xt;
    },
    get isValidating() {
      return he.isValidating = !0, np;
    },
    get isLoading() {
      return he.isLoading = !0, rp;
    }
  };
}, v0 = p0(m0);
var U;
(function(e) {
  e.assertEqual = (i) => i;
  function t(i) {
  }
  e.assertIs = t;
  function n(i) {
    throw new Error();
  }
  e.assertNever = n, e.arrayToEnum = (i) => {
    const o = {};
    for (const s of i)
      o[s] = s;
    return o;
  }, e.getValidEnumValues = (i) => {
    const o = e.objectKeys(i).filter((a) => typeof i[i[a]] != "number"), s = {};
    for (const a of o)
      s[a] = i[a];
    return e.objectValues(s);
  }, e.objectValues = (i) => e.objectKeys(i).map(function(o) {
    return i[o];
  }), e.objectKeys = typeof Object.keys == "function" ? (i) => Object.keys(i) : (i) => {
    const o = [];
    for (const s in i)
      Object.prototype.hasOwnProperty.call(i, s) && o.push(s);
    return o;
  }, e.find = (i, o) => {
    for (const s of i)
      if (o(s))
        return s;
  }, e.isInteger = typeof Number.isInteger == "function" ? (i) => Number.isInteger(i) : (i) => typeof i == "number" && isFinite(i) && Math.floor(i) === i;
  function r(i, o = " | ") {
    return i.map((s) => typeof s == "string" ? `'${s}'` : s).join(o);
  }
  e.joinValues = r, e.jsonStringifyReplacer = (i, o) => typeof o == "bigint" ? o.toString() : o;
})(U || (U = {}));
var Za;
(function(e) {
  e.mergeShapes = (t, n) => ({
    ...t,
    ...n
    // second overwrites first
  });
})(Za || (Za = {}));
const N = U.arrayToEnum([
  "string",
  "nan",
  "number",
  "integer",
  "float",
  "boolean",
  "date",
  "bigint",
  "symbol",
  "function",
  "undefined",
  "null",
  "array",
  "object",
  "unknown",
  "promise",
  "void",
  "never",
  "map",
  "set"
]), Qt = (e) => {
  switch (typeof e) {
    case "undefined":
      return N.undefined;
    case "string":
      return N.string;
    case "number":
      return isNaN(e) ? N.nan : N.number;
    case "boolean":
      return N.boolean;
    case "function":
      return N.function;
    case "bigint":
      return N.bigint;
    case "symbol":
      return N.symbol;
    case "object":
      return Array.isArray(e) ? N.array : e === null ? N.null : e.then && typeof e.then == "function" && e.catch && typeof e.catch == "function" ? N.promise : typeof Map < "u" && e instanceof Map ? N.map : typeof Set < "u" && e instanceof Set ? N.set : typeof Date < "u" && e instanceof Date ? N.date : N.object;
    default:
      return N.unknown;
  }
}, _ = U.arrayToEnum([
  "invalid_type",
  "invalid_literal",
  "custom",
  "invalid_union",
  "invalid_union_discriminator",
  "invalid_enum_value",
  "unrecognized_keys",
  "invalid_arguments",
  "invalid_return_type",
  "invalid_date",
  "invalid_string",
  "too_small",
  "too_big",
  "invalid_intersection_types",
  "not_multiple_of",
  "not_finite"
]), y0 = (e) => JSON.stringify(e, null, 2).replace(/"([^"]+)":/g, "$1:");
class st extends Error {
  constructor(t) {
    super(), this.issues = [], this.addIssue = (r) => {
      this.issues = [...this.issues, r];
    }, this.addIssues = (r = []) => {
      this.issues = [...this.issues, ...r];
    };
    const n = new.target.prototype;
    Object.setPrototypeOf ? Object.setPrototypeOf(this, n) : this.__proto__ = n, this.name = "ZodError", this.issues = t;
  }
  get errors() {
    return this.issues;
  }
  format(t) {
    const n = t || function(o) {
      return o.message;
    }, r = { _errors: [] }, i = (o) => {
      for (const s of o.issues)
        if (s.code === "invalid_union")
          s.unionErrors.map(i);
        else if (s.code === "invalid_return_type")
          i(s.returnTypeError);
        else if (s.code === "invalid_arguments")
          i(s.argumentsError);
        else if (s.path.length === 0)
          r._errors.push(n(s));
        else {
          let a = r, l = 0;
          for (; l < s.path.length; ) {
            const u = s.path[l];
            l === s.path.length - 1 ? (a[u] = a[u] || { _errors: [] }, a[u]._errors.push(n(s))) : a[u] = a[u] || { _errors: [] }, a = a[u], l++;
          }
        }
    };
    return i(this), r;
  }
  toString() {
    return this.message;
  }
  get message() {
    return JSON.stringify(this.issues, U.jsonStringifyReplacer, 2);
  }
  get isEmpty() {
    return this.issues.length === 0;
  }
  flatten(t = (n) => n.message) {
    const n = {}, r = [];
    for (const i of this.issues)
      i.path.length > 0 ? (n[i.path[0]] = n[i.path[0]] || [], n[i.path[0]].push(t(i))) : r.push(t(i));
    return { formErrors: r, fieldErrors: n };
  }
  get formErrors() {
    return this.flatten();
  }
}
st.create = (e) => new st(e);
const ci = (e, t) => {
  let n;
  switch (e.code) {
    case _.invalid_type:
      e.received === N.undefined ? n = "Required" : n = `Expected ${e.expected}, received ${e.received}`;
      break;
    case _.invalid_literal:
      n = `Invalid literal value, expected ${JSON.stringify(e.expected, U.jsonStringifyReplacer)}`;
      break;
    case _.unrecognized_keys:
      n = `Unrecognized key(s) in object: ${U.joinValues(e.keys, ", ")}`;
      break;
    case _.invalid_union:
      n = "Invalid input";
      break;
    case _.invalid_union_discriminator:
      n = `Invalid discriminator value. Expected ${U.joinValues(e.options)}`;
      break;
    case _.invalid_enum_value:
      n = `Invalid enum value. Expected ${U.joinValues(e.options)}, received '${e.received}'`;
      break;
    case _.invalid_arguments:
      n = "Invalid function arguments";
      break;
    case _.invalid_return_type:
      n = "Invalid function return type";
      break;
    case _.invalid_date:
      n = "Invalid date";
      break;
    case _.invalid_string:
      typeof e.validation == "object" ? "includes" in e.validation ? (n = `Invalid input: must include "${e.validation.includes}"`, typeof e.validation.position == "number" && (n = `${n} at one or more positions greater than or equal to ${e.validation.position}`)) : "startsWith" in e.validation ? n = `Invalid input: must start with "${e.validation.startsWith}"` : "endsWith" in e.validation ? n = `Invalid input: must end with "${e.validation.endsWith}"` : U.assertNever(e.validation) : e.validation !== "regex" ? n = `Invalid ${e.validation}` : n = "Invalid";
      break;
    case _.too_small:
      e.type === "array" ? n = `Array must contain ${e.exact ? "exactly" : e.inclusive ? "at least" : "more than"} ${e.minimum} element(s)` : e.type === "string" ? n = `String must contain ${e.exact ? "exactly" : e.inclusive ? "at least" : "over"} ${e.minimum} character(s)` : e.type === "number" ? n = `Number must be ${e.exact ? "exactly equal to " : e.inclusive ? "greater than or equal to " : "greater than "}${e.minimum}` : e.type === "date" ? n = `Date must be ${e.exact ? "exactly equal to " : e.inclusive ? "greater than or equal to " : "greater than "}${new Date(Number(e.minimum))}` : n = "Invalid input";
      break;
    case _.too_big:
      e.type === "array" ? n = `Array must contain ${e.exact ? "exactly" : e.inclusive ? "at most" : "less than"} ${e.maximum} element(s)` : e.type === "string" ? n = `String must contain ${e.exact ? "exactly" : e.inclusive ? "at most" : "under"} ${e.maximum} character(s)` : e.type === "number" ? n = `Number must be ${e.exact ? "exactly" : e.inclusive ? "less than or equal to" : "less than"} ${e.maximum}` : e.type === "bigint" ? n = `BigInt must be ${e.exact ? "exactly" : e.inclusive ? "less than or equal to" : "less than"} ${e.maximum}` : e.type === "date" ? n = `Date must be ${e.exact ? "exactly" : e.inclusive ? "smaller than or equal to" : "smaller than"} ${new Date(Number(e.maximum))}` : n = "Invalid input";
      break;
    case _.custom:
      n = "Invalid input";
      break;
    case _.invalid_intersection_types:
      n = "Intersection results could not be merged";
      break;
    case _.not_multiple_of:
      n = `Number must be a multiple of ${e.multipleOf}`;
      break;
    case _.not_finite:
      n = "Number must be finite";
      break;
    default:
      n = t.defaultError, U.assertNever(e);
  }
  return { message: n };
};
let Wf = ci;
function g0(e) {
  Wf = e;
}
function Do() {
  return Wf;
}
const Mo = (e) => {
  const { data: t, path: n, errorMaps: r, issueData: i } = e, o = [...n, ...i.path || []], s = {
    ...i,
    path: o
  };
  let a = "";
  const l = r.filter((u) => !!u).slice().reverse();
  for (const u of l)
    a = u(s, { data: t, defaultError: a }).message;
  return {
    ...i,
    path: o,
    message: i.message || a
  };
}, w0 = [];
function O(e, t) {
  const n = Mo({
    issueData: t,
    data: e.data,
    path: e.path,
    errorMaps: [
      e.common.contextualErrorMap,
      e.schemaErrorMap,
      Do(),
      ci
      // then global default map
    ].filter((r) => !!r)
  });
  e.common.issues.push(n);
}
class Te {
  constructor() {
    this.value = "valid";
  }
  dirty() {
    this.value === "valid" && (this.value = "dirty");
  }
  abort() {
    this.value !== "aborted" && (this.value = "aborted");
  }
  static mergeArray(t, n) {
    const r = [];
    for (const i of n) {
      if (i.status === "aborted")
        return I;
      i.status === "dirty" && t.dirty(), r.push(i.value);
    }
    return { status: t.value, value: r };
  }
  static async mergeObjectAsync(t, n) {
    const r = [];
    for (const i of n)
      r.push({
        key: await i.key,
        value: await i.value
      });
    return Te.mergeObjectSync(t, r);
  }
  static mergeObjectSync(t, n) {
    const r = {};
    for (const i of n) {
      const { key: o, value: s } = i;
      if (o.status === "aborted" || s.status === "aborted")
        return I;
      o.status === "dirty" && t.dirty(), s.status === "dirty" && t.dirty(), o.value !== "__proto__" && (typeof s.value < "u" || i.alwaysSet) && (r[o.value] = s.value);
    }
    return { status: t.value, value: r };
  }
}
const I = Object.freeze({
  status: "aborted"
}), $f = (e) => ({ status: "dirty", value: e }), Re = (e) => ({ status: "valid", value: e }), Ba = (e) => e.status === "aborted", Ha = (e) => e.status === "dirty", di = (e) => e.status === "valid", Io = (e) => typeof Promise < "u" && e instanceof Promise;
var R;
(function(e) {
  e.errToObj = (t) => typeof t == "string" ? { message: t } : t || {}, e.toString = (t) => typeof t == "string" ? t : t == null ? void 0 : t.message;
})(R || (R = {}));
class _t {
  constructor(t, n, r, i) {
    this._cachedPath = [], this.parent = t, this.data = n, this._path = r, this._key = i;
  }
  get path() {
    return this._cachedPath.length || (this._key instanceof Array ? this._cachedPath.push(...this._path, ...this._key) : this._cachedPath.push(...this._path, this._key)), this._cachedPath;
  }
}
const sc = (e, t) => {
  if (di(t))
    return { success: !0, data: t.value };
  if (!e.common.issues.length)
    throw new Error("Validation failed but no issues detected.");
  return {
    success: !1,
    get error() {
      if (this._error)
        return this._error;
      const n = new st(e.common.issues);
      return this._error = n, this._error;
    }
  };
};
function j(e) {
  if (!e)
    return {};
  const { errorMap: t, invalid_type_error: n, required_error: r, description: i } = e;
  if (t && (n || r))
    throw new Error(`Can't use "invalid_type_error" or "required_error" in conjunction with custom error map.`);
  return t ? { errorMap: t, description: i } : { errorMap: (s, a) => s.code !== "invalid_type" ? { message: a.defaultError } : typeof a.data > "u" ? { message: r ?? a.defaultError } : { message: n ?? a.defaultError }, description: i };
}
class A {
  constructor(t) {
    this.spa = this.safeParseAsync, this._def = t, this.parse = this.parse.bind(this), this.safeParse = this.safeParse.bind(this), this.parseAsync = this.parseAsync.bind(this), this.safeParseAsync = this.safeParseAsync.bind(this), this.spa = this.spa.bind(this), this.refine = this.refine.bind(this), this.refinement = this.refinement.bind(this), this.superRefine = this.superRefine.bind(this), this.optional = this.optional.bind(this), this.nullable = this.nullable.bind(this), this.nullish = this.nullish.bind(this), this.array = this.array.bind(this), this.promise = this.promise.bind(this), this.or = this.or.bind(this), this.and = this.and.bind(this), this.transform = this.transform.bind(this), this.brand = this.brand.bind(this), this.default = this.default.bind(this), this.catch = this.catch.bind(this), this.describe = this.describe.bind(this), this.pipe = this.pipe.bind(this), this.readonly = this.readonly.bind(this), this.isNullable = this.isNullable.bind(this), this.isOptional = this.isOptional.bind(this);
  }
  get description() {
    return this._def.description;
  }
  _getType(t) {
    return Qt(t.data);
  }
  _getOrReturnCtx(t, n) {
    return n || {
      common: t.parent.common,
      data: t.data,
      parsedType: Qt(t.data),
      schemaErrorMap: this._def.errorMap,
      path: t.path,
      parent: t.parent
    };
  }
  _processInputParams(t) {
    return {
      status: new Te(),
      ctx: {
        common: t.parent.common,
        data: t.data,
        parsedType: Qt(t.data),
        schemaErrorMap: this._def.errorMap,
        path: t.path,
        parent: t.parent
      }
    };
  }
  _parseSync(t) {
    const n = this._parse(t);
    if (Io(n))
      throw new Error("Synchronous parse encountered promise.");
    return n;
  }
  _parseAsync(t) {
    const n = this._parse(t);
    return Promise.resolve(n);
  }
  parse(t, n) {
    const r = this.safeParse(t, n);
    if (r.success)
      return r.data;
    throw r.error;
  }
  safeParse(t, n) {
    var r;
    const i = {
      common: {
        issues: [],
        async: (r = n == null ? void 0 : n.async) !== null && r !== void 0 ? r : !1,
        contextualErrorMap: n == null ? void 0 : n.errorMap
      },
      path: (n == null ? void 0 : n.path) || [],
      schemaErrorMap: this._def.errorMap,
      parent: null,
      data: t,
      parsedType: Qt(t)
    }, o = this._parseSync({ data: t, path: i.path, parent: i });
    return sc(i, o);
  }
  async parseAsync(t, n) {
    const r = await this.safeParseAsync(t, n);
    if (r.success)
      return r.data;
    throw r.error;
  }
  async safeParseAsync(t, n) {
    const r = {
      common: {
        issues: [],
        contextualErrorMap: n == null ? void 0 : n.errorMap,
        async: !0
      },
      path: (n == null ? void 0 : n.path) || [],
      schemaErrorMap: this._def.errorMap,
      parent: null,
      data: t,
      parsedType: Qt(t)
    }, i = this._parse({ data: t, path: r.path, parent: r }), o = await (Io(i) ? i : Promise.resolve(i));
    return sc(r, o);
  }
  refine(t, n) {
    const r = (i) => typeof n == "string" || typeof n > "u" ? { message: n } : typeof n == "function" ? n(i) : n;
    return this._refinement((i, o) => {
      const s = t(i), a = () => o.addIssue({
        code: _.custom,
        ...r(i)
      });
      return typeof Promise < "u" && s instanceof Promise ? s.then((l) => l ? !0 : (a(), !1)) : s ? !0 : (a(), !1);
    });
  }
  refinement(t, n) {
    return this._refinement((r, i) => t(r) ? !0 : (i.addIssue(typeof n == "function" ? n(r, i) : n), !1));
  }
  _refinement(t) {
    return new ut({
      schema: this,
      typeName: L.ZodEffects,
      effect: { type: "refinement", refinement: t }
    });
  }
  superRefine(t) {
    return this._refinement(t);
  }
  optional() {
    return Mt.create(this, this._def);
  }
  nullable() {
    return Dn.create(this, this._def);
  }
  nullish() {
    return this.nullable().optional();
  }
  array() {
    return at.create(this, this._def);
  }
  promise() {
    return vr.create(this, this._def);
  }
  or(t) {
    return mi.create([this, t], this._def);
  }
  and(t) {
    return vi.create(this, t, this._def);
  }
  transform(t) {
    return new ut({
      ...j(this._def),
      schema: this,
      typeName: L.ZodEffects,
      effect: { type: "transform", transform: t }
    });
  }
  default(t) {
    const n = typeof t == "function" ? t : () => t;
    return new ki({
      ...j(this._def),
      innerType: this,
      defaultValue: n,
      typeName: L.ZodDefault
    });
  }
  brand() {
    return new Zf({
      typeName: L.ZodBranded,
      type: this,
      ...j(this._def)
    });
  }
  catch(t) {
    const n = typeof t == "function" ? t : () => t;
    return new Fo({
      ...j(this._def),
      innerType: this,
      catchValue: n,
      typeName: L.ZodCatch
    });
  }
  describe(t) {
    const n = this.constructor;
    return new n({
      ...this._def,
      description: t
    });
  }
  pipe(t) {
    return Oi.create(this, t);
  }
  readonly() {
    return Wo.create(this);
  }
  isOptional() {
    return this.safeParse(void 0).success;
  }
  isNullable() {
    return this.safeParse(null).success;
  }
}
const _0 = /^c[^\s-]{8,}$/i, k0 = /^[a-z][a-z0-9]*$/, S0 = /^[0-9A-HJKMNP-TV-Z]{26}$/, x0 = /^[0-9a-fA-F]{8}\b-[0-9a-fA-F]{4}\b-[0-9a-fA-F]{4}\b-[0-9a-fA-F]{4}\b-[0-9a-fA-F]{12}$/i, E0 = /^(?!\.)(?!.*\.\.)([A-Z0-9_+-\.]*)[A-Z0-9_+-]@([A-Z0-9][A-Z0-9\-]*\.)+[A-Z]{2,}$/i, C0 = "^(\\p{Extended_Pictographic}|\\p{Emoji_Component})+$";
let Zs;
const T0 = /^(((25[0-5])|(2[0-4][0-9])|(1[0-9]{2})|([0-9]{1,2}))\.){3}((25[0-5])|(2[0-4][0-9])|(1[0-9]{2})|([0-9]{1,2}))$/, N0 = /^(([a-f0-9]{1,4}:){7}|::([a-f0-9]{1,4}:){0,6}|([a-f0-9]{1,4}:){1}:([a-f0-9]{1,4}:){0,5}|([a-f0-9]{1,4}:){2}:([a-f0-9]{1,4}:){0,4}|([a-f0-9]{1,4}:){3}:([a-f0-9]{1,4}:){0,3}|([a-f0-9]{1,4}:){4}:([a-f0-9]{1,4}:){0,2}|([a-f0-9]{1,4}:){5}:([a-f0-9]{1,4}:){0,1})([a-f0-9]{1,4}|(((25[0-5])|(2[0-4][0-9])|(1[0-9]{2})|([0-9]{1,2}))\.){3}((25[0-5])|(2[0-4][0-9])|(1[0-9]{2})|([0-9]{1,2})))$/, O0 = (e) => e.precision ? e.offset ? new RegExp(`^\\d{4}-\\d{2}-\\d{2}T\\d{2}:\\d{2}:\\d{2}\\.\\d{${e.precision}}(([+-]\\d{2}(:?\\d{2})?)|Z)$`) : new RegExp(`^\\d{4}-\\d{2}-\\d{2}T\\d{2}:\\d{2}:\\d{2}\\.\\d{${e.precision}}Z$`) : e.precision === 0 ? e.offset ? new RegExp("^\\d{4}-\\d{2}-\\d{2}T\\d{2}:\\d{2}:\\d{2}(([+-]\\d{2}(:?\\d{2})?)|Z)$") : new RegExp("^\\d{4}-\\d{2}-\\d{2}T\\d{2}:\\d{2}:\\d{2}Z$") : e.offset ? new RegExp("^\\d{4}-\\d{2}-\\d{2}T\\d{2}:\\d{2}:\\d{2}(\\.\\d+)?(([+-]\\d{2}(:?\\d{2})?)|Z)$") : new RegExp("^\\d{4}-\\d{2}-\\d{2}T\\d{2}:\\d{2}:\\d{2}(\\.\\d+)?Z$");
function P0(e, t) {
  return !!((t === "v4" || !t) && T0.test(e) || (t === "v6" || !t) && N0.test(e));
}
class rt extends A {
  _parse(t) {
    if (this._def.coerce && (t.data = String(t.data)), this._getType(t) !== N.string) {
      const o = this._getOrReturnCtx(t);
      return O(
        o,
        {
          code: _.invalid_type,
          expected: N.string,
          received: o.parsedType
        }
        //
      ), I;
    }
    const r = new Te();
    let i;
    for (const o of this._def.checks)
      if (o.kind === "min")
        t.data.length < o.value && (i = this._getOrReturnCtx(t, i), O(i, {
          code: _.too_small,
          minimum: o.value,
          type: "string",
          inclusive: !0,
          exact: !1,
          message: o.message
        }), r.dirty());
      else if (o.kind === "max")
        t.data.length > o.value && (i = this._getOrReturnCtx(t, i), O(i, {
          code: _.too_big,
          maximum: o.value,
          type: "string",
          inclusive: !0,
          exact: !1,
          message: o.message
        }), r.dirty());
      else if (o.kind === "length") {
        const s = t.data.length > o.value, a = t.data.length < o.value;
        (s || a) && (i = this._getOrReturnCtx(t, i), s ? O(i, {
          code: _.too_big,
          maximum: o.value,
          type: "string",
          inclusive: !0,
          exact: !0,
          message: o.message
        }) : a && O(i, {
          code: _.too_small,
          minimum: o.value,
          type: "string",
          inclusive: !0,
          exact: !0,
          message: o.message
        }), r.dirty());
      } else if (o.kind === "email")
        E0.test(t.data) || (i = this._getOrReturnCtx(t, i), O(i, {
          validation: "email",
          code: _.invalid_string,
          message: o.message
        }), r.dirty());
      else if (o.kind === "emoji")
        Zs || (Zs = new RegExp(C0, "u")), Zs.test(t.data) || (i = this._getOrReturnCtx(t, i), O(i, {
          validation: "emoji",
          code: _.invalid_string,
          message: o.message
        }), r.dirty());
      else if (o.kind === "uuid")
        x0.test(t.data) || (i = this._getOrReturnCtx(t, i), O(i, {
          validation: "uuid",
          code: _.invalid_string,
          message: o.message
        }), r.dirty());
      else if (o.kind === "cuid")
        _0.test(t.data) || (i = this._getOrReturnCtx(t, i), O(i, {
          validation: "cuid",
          code: _.invalid_string,
          message: o.message
        }), r.dirty());
      else if (o.kind === "cuid2")
        k0.test(t.data) || (i = this._getOrReturnCtx(t, i), O(i, {
          validation: "cuid2",
          code: _.invalid_string,
          message: o.message
        }), r.dirty());
      else if (o.kind === "ulid")
        S0.test(t.data) || (i = this._getOrReturnCtx(t, i), O(i, {
          validation: "ulid",
          code: _.invalid_string,
          message: o.message
        }), r.dirty());
      else if (o.kind === "url")
        try {
          new URL(t.data);
        } catch {
          i = this._getOrReturnCtx(t, i), O(i, {
            validation: "url",
            code: _.invalid_string,
            message: o.message
          }), r.dirty();
        }
      else
        o.kind === "regex" ? (o.regex.lastIndex = 0, o.regex.test(t.data) || (i = this._getOrReturnCtx(t, i), O(i, {
          validation: "regex",
          code: _.invalid_string,
          message: o.message
        }), r.dirty())) : o.kind === "trim" ? t.data = t.data.trim() : o.kind === "includes" ? t.data.includes(o.value, o.position) || (i = this._getOrReturnCtx(t, i), O(i, {
          code: _.invalid_string,
          validation: { includes: o.value, position: o.position },
          message: o.message
        }), r.dirty()) : o.kind === "toLowerCase" ? t.data = t.data.toLowerCase() : o.kind === "toUpperCase" ? t.data = t.data.toUpperCase() : o.kind === "startsWith" ? t.data.startsWith(o.value) || (i = this._getOrReturnCtx(t, i), O(i, {
          code: _.invalid_string,
          validation: { startsWith: o.value },
          message: o.message
        }), r.dirty()) : o.kind === "endsWith" ? t.data.endsWith(o.value) || (i = this._getOrReturnCtx(t, i), O(i, {
          code: _.invalid_string,
          validation: { endsWith: o.value },
          message: o.message
        }), r.dirty()) : o.kind === "datetime" ? O0(o).test(t.data) || (i = this._getOrReturnCtx(t, i), O(i, {
          code: _.invalid_string,
          validation: "datetime",
          message: o.message
        }), r.dirty()) : o.kind === "ip" ? P0(t.data, o.version) || (i = this._getOrReturnCtx(t, i), O(i, {
          validation: "ip",
          code: _.invalid_string,
          message: o.message
        }), r.dirty()) : U.assertNever(o);
    return { status: r.value, value: t.data };
  }
  _regex(t, n, r) {
    return this.refinement((i) => t.test(i), {
      validation: n,
      code: _.invalid_string,
      ...R.errToObj(r)
    });
  }
  _addCheck(t) {
    return new rt({
      ...this._def,
      checks: [...this._def.checks, t]
    });
  }
  email(t) {
    return this._addCheck({ kind: "email", ...R.errToObj(t) });
  }
  url(t) {
    return this._addCheck({ kind: "url", ...R.errToObj(t) });
  }
  emoji(t) {
    return this._addCheck({ kind: "emoji", ...R.errToObj(t) });
  }
  uuid(t) {
    return this._addCheck({ kind: "uuid", ...R.errToObj(t) });
  }
  cuid(t) {
    return this._addCheck({ kind: "cuid", ...R.errToObj(t) });
  }
  cuid2(t) {
    return this._addCheck({ kind: "cuid2", ...R.errToObj(t) });
  }
  ulid(t) {
    return this._addCheck({ kind: "ulid", ...R.errToObj(t) });
  }
  ip(t) {
    return this._addCheck({ kind: "ip", ...R.errToObj(t) });
  }
  datetime(t) {
    var n;
    return typeof t == "string" ? this._addCheck({
      kind: "datetime",
      precision: null,
      offset: !1,
      message: t
    }) : this._addCheck({
      kind: "datetime",
      precision: typeof (t == null ? void 0 : t.precision) > "u" ? null : t == null ? void 0 : t.precision,
      offset: (n = t == null ? void 0 : t.offset) !== null && n !== void 0 ? n : !1,
      ...R.errToObj(t == null ? void 0 : t.message)
    });
  }
  regex(t, n) {
    return this._addCheck({
      kind: "regex",
      regex: t,
      ...R.errToObj(n)
    });
  }
  includes(t, n) {
    return this._addCheck({
      kind: "includes",
      value: t,
      position: n == null ? void 0 : n.position,
      ...R.errToObj(n == null ? void 0 : n.message)
    });
  }
  startsWith(t, n) {
    return this._addCheck({
      kind: "startsWith",
      value: t,
      ...R.errToObj(n)
    });
  }
  endsWith(t, n) {
    return this._addCheck({
      kind: "endsWith",
      value: t,
      ...R.errToObj(n)
    });
  }
  min(t, n) {
    return this._addCheck({
      kind: "min",
      value: t,
      ...R.errToObj(n)
    });
  }
  max(t, n) {
    return this._addCheck({
      kind: "max",
      value: t,
      ...R.errToObj(n)
    });
  }
  length(t, n) {
    return this._addCheck({
      kind: "length",
      value: t,
      ...R.errToObj(n)
    });
  }
  /**
   * @deprecated Use z.string().min(1) instead.
   * @see {@link ZodString.min}
   */
  nonempty(t) {
    return this.min(1, R.errToObj(t));
  }
  trim() {
    return new rt({
      ...this._def,
      checks: [...this._def.checks, { kind: "trim" }]
    });
  }
  toLowerCase() {
    return new rt({
      ...this._def,
      checks: [...this._def.checks, { kind: "toLowerCase" }]
    });
  }
  toUpperCase() {
    return new rt({
      ...this._def,
      checks: [...this._def.checks, { kind: "toUpperCase" }]
    });
  }
  get isDatetime() {
    return !!this._def.checks.find((t) => t.kind === "datetime");
  }
  get isEmail() {
    return !!this._def.checks.find((t) => t.kind === "email");
  }
  get isURL() {
    return !!this._def.checks.find((t) => t.kind === "url");
  }
  get isEmoji() {
    return !!this._def.checks.find((t) => t.kind === "emoji");
  }
  get isUUID() {
    return !!this._def.checks.find((t) => t.kind === "uuid");
  }
  get isCUID() {
    return !!this._def.checks.find((t) => t.kind === "cuid");
  }
  get isCUID2() {
    return !!this._def.checks.find((t) => t.kind === "cuid2");
  }
  get isULID() {
    return !!this._def.checks.find((t) => t.kind === "ulid");
  }
  get isIP() {
    return !!this._def.checks.find((t) => t.kind === "ip");
  }
  get minLength() {
    let t = null;
    for (const n of this._def.checks)
      n.kind === "min" && (t === null || n.value > t) && (t = n.value);
    return t;
  }
  get maxLength() {
    let t = null;
    for (const n of this._def.checks)
      n.kind === "max" && (t === null || n.value < t) && (t = n.value);
    return t;
  }
}
rt.create = (e) => {
  var t;
  return new rt({
    checks: [],
    typeName: L.ZodString,
    coerce: (t = e == null ? void 0 : e.coerce) !== null && t !== void 0 ? t : !1,
    ...j(e)
  });
};
function R0(e, t) {
  const n = (e.toString().split(".")[1] || "").length, r = (t.toString().split(".")[1] || "").length, i = n > r ? n : r, o = parseInt(e.toFixed(i).replace(".", "")), s = parseInt(t.toFixed(i).replace(".", ""));
  return o % s / Math.pow(10, i);
}
class un extends A {
  constructor() {
    super(...arguments), this.min = this.gte, this.max = this.lte, this.step = this.multipleOf;
  }
  _parse(t) {
    if (this._def.coerce && (t.data = Number(t.data)), this._getType(t) !== N.number) {
      const o = this._getOrReturnCtx(t);
      return O(o, {
        code: _.invalid_type,
        expected: N.number,
        received: o.parsedType
      }), I;
    }
    let r;
    const i = new Te();
    for (const o of this._def.checks)
      o.kind === "int" ? U.isInteger(t.data) || (r = this._getOrReturnCtx(t, r), O(r, {
        code: _.invalid_type,
        expected: "integer",
        received: "float",
        message: o.message
      }), i.dirty()) : o.kind === "min" ? (o.inclusive ? t.data < o.value : t.data <= o.value) && (r = this._getOrReturnCtx(t, r), O(r, {
        code: _.too_small,
        minimum: o.value,
        type: "number",
        inclusive: o.inclusive,
        exact: !1,
        message: o.message
      }), i.dirty()) : o.kind === "max" ? (o.inclusive ? t.data > o.value : t.data >= o.value) && (r = this._getOrReturnCtx(t, r), O(r, {
        code: _.too_big,
        maximum: o.value,
        type: "number",
        inclusive: o.inclusive,
        exact: !1,
        message: o.message
      }), i.dirty()) : o.kind === "multipleOf" ? R0(t.data, o.value) !== 0 && (r = this._getOrReturnCtx(t, r), O(r, {
        code: _.not_multiple_of,
        multipleOf: o.value,
        message: o.message
      }), i.dirty()) : o.kind === "finite" ? Number.isFinite(t.data) || (r = this._getOrReturnCtx(t, r), O(r, {
        code: _.not_finite,
        message: o.message
      }), i.dirty()) : U.assertNever(o);
    return { status: i.value, value: t.data };
  }
  gte(t, n) {
    return this.setLimit("min", t, !0, R.toString(n));
  }
  gt(t, n) {
    return this.setLimit("min", t, !1, R.toString(n));
  }
  lte(t, n) {
    return this.setLimit("max", t, !0, R.toString(n));
  }
  lt(t, n) {
    return this.setLimit("max", t, !1, R.toString(n));
  }
  setLimit(t, n, r, i) {
    return new un({
      ...this._def,
      checks: [
        ...this._def.checks,
        {
          kind: t,
          value: n,
          inclusive: r,
          message: R.toString(i)
        }
      ]
    });
  }
  _addCheck(t) {
    return new un({
      ...this._def,
      checks: [...this._def.checks, t]
    });
  }
  int(t) {
    return this._addCheck({
      kind: "int",
      message: R.toString(t)
    });
  }
  positive(t) {
    return this._addCheck({
      kind: "min",
      value: 0,
      inclusive: !1,
      message: R.toString(t)
    });
  }
  negative(t) {
    return this._addCheck({
      kind: "max",
      value: 0,
      inclusive: !1,
      message: R.toString(t)
    });
  }
  nonpositive(t) {
    return this._addCheck({
      kind: "max",
      value: 0,
      inclusive: !0,
      message: R.toString(t)
    });
  }
  nonnegative(t) {
    return this._addCheck({
      kind: "min",
      value: 0,
      inclusive: !0,
      message: R.toString(t)
    });
  }
  multipleOf(t, n) {
    return this._addCheck({
      kind: "multipleOf",
      value: t,
      message: R.toString(n)
    });
  }
  finite(t) {
    return this._addCheck({
      kind: "finite",
      message: R.toString(t)
    });
  }
  safe(t) {
    return this._addCheck({
      kind: "min",
      inclusive: !0,
      value: Number.MIN_SAFE_INTEGER,
      message: R.toString(t)
    })._addCheck({
      kind: "max",
      inclusive: !0,
      value: Number.MAX_SAFE_INTEGER,
      message: R.toString(t)
    });
  }
  get minValue() {
    let t = null;
    for (const n of this._def.checks)
      n.kind === "min" && (t === null || n.value > t) && (t = n.value);
    return t;
  }
  get maxValue() {
    let t = null;
    for (const n of this._def.checks)
      n.kind === "max" && (t === null || n.value < t) && (t = n.value);
    return t;
  }
  get isInt() {
    return !!this._def.checks.find((t) => t.kind === "int" || t.kind === "multipleOf" && U.isInteger(t.value));
  }
  get isFinite() {
    let t = null, n = null;
    for (const r of this._def.checks) {
      if (r.kind === "finite" || r.kind === "int" || r.kind === "multipleOf")
        return !0;
      r.kind === "min" ? (n === null || r.value > n) && (n = r.value) : r.kind === "max" && (t === null || r.value < t) && (t = r.value);
    }
    return Number.isFinite(n) && Number.isFinite(t);
  }
}
un.create = (e) => new un({
  checks: [],
  typeName: L.ZodNumber,
  coerce: (e == null ? void 0 : e.coerce) || !1,
  ...j(e)
});
class cn extends A {
  constructor() {
    super(...arguments), this.min = this.gte, this.max = this.lte;
  }
  _parse(t) {
    if (this._def.coerce && (t.data = BigInt(t.data)), this._getType(t) !== N.bigint) {
      const o = this._getOrReturnCtx(t);
      return O(o, {
        code: _.invalid_type,
        expected: N.bigint,
        received: o.parsedType
      }), I;
    }
    let r;
    const i = new Te();
    for (const o of this._def.checks)
      o.kind === "min" ? (o.inclusive ? t.data < o.value : t.data <= o.value) && (r = this._getOrReturnCtx(t, r), O(r, {
        code: _.too_small,
        type: "bigint",
        minimum: o.value,
        inclusive: o.inclusive,
        message: o.message
      }), i.dirty()) : o.kind === "max" ? (o.inclusive ? t.data > o.value : t.data >= o.value) && (r = this._getOrReturnCtx(t, r), O(r, {
        code: _.too_big,
        type: "bigint",
        maximum: o.value,
        inclusive: o.inclusive,
        message: o.message
      }), i.dirty()) : o.kind === "multipleOf" ? t.data % o.value !== BigInt(0) && (r = this._getOrReturnCtx(t, r), O(r, {
        code: _.not_multiple_of,
        multipleOf: o.value,
        message: o.message
      }), i.dirty()) : U.assertNever(o);
    return { status: i.value, value: t.data };
  }
  gte(t, n) {
    return this.setLimit("min", t, !0, R.toString(n));
  }
  gt(t, n) {
    return this.setLimit("min", t, !1, R.toString(n));
  }
  lte(t, n) {
    return this.setLimit("max", t, !0, R.toString(n));
  }
  lt(t, n) {
    return this.setLimit("max", t, !1, R.toString(n));
  }
  setLimit(t, n, r, i) {
    return new cn({
      ...this._def,
      checks: [
        ...this._def.checks,
        {
          kind: t,
          value: n,
          inclusive: r,
          message: R.toString(i)
        }
      ]
    });
  }
  _addCheck(t) {
    return new cn({
      ...this._def,
      checks: [...this._def.checks, t]
    });
  }
  positive(t) {
    return this._addCheck({
      kind: "min",
      value: BigInt(0),
      inclusive: !1,
      message: R.toString(t)
    });
  }
  negative(t) {
    return this._addCheck({
      kind: "max",
      value: BigInt(0),
      inclusive: !1,
      message: R.toString(t)
    });
  }
  nonpositive(t) {
    return this._addCheck({
      kind: "max",
      value: BigInt(0),
      inclusive: !0,
      message: R.toString(t)
    });
  }
  nonnegative(t) {
    return this._addCheck({
      kind: "min",
      value: BigInt(0),
      inclusive: !0,
      message: R.toString(t)
    });
  }
  multipleOf(t, n) {
    return this._addCheck({
      kind: "multipleOf",
      value: t,
      message: R.toString(n)
    });
  }
  get minValue() {
    let t = null;
    for (const n of this._def.checks)
      n.kind === "min" && (t === null || n.value > t) && (t = n.value);
    return t;
  }
  get maxValue() {
    let t = null;
    for (const n of this._def.checks)
      n.kind === "max" && (t === null || n.value < t) && (t = n.value);
    return t;
  }
}
cn.create = (e) => {
  var t;
  return new cn({
    checks: [],
    typeName: L.ZodBigInt,
    coerce: (t = e == null ? void 0 : e.coerce) !== null && t !== void 0 ? t : !1,
    ...j(e)
  });
};
class fi extends A {
  _parse(t) {
    if (this._def.coerce && (t.data = !!t.data), this._getType(t) !== N.boolean) {
      const r = this._getOrReturnCtx(t);
      return O(r, {
        code: _.invalid_type,
        expected: N.boolean,
        received: r.parsedType
      }), I;
    }
    return Re(t.data);
  }
}
fi.create = (e) => new fi({
  typeName: L.ZodBoolean,
  coerce: (e == null ? void 0 : e.coerce) || !1,
  ...j(e)
});
class Rn extends A {
  _parse(t) {
    if (this._def.coerce && (t.data = new Date(t.data)), this._getType(t) !== N.date) {
      const o = this._getOrReturnCtx(t);
      return O(o, {
        code: _.invalid_type,
        expected: N.date,
        received: o.parsedType
      }), I;
    }
    if (isNaN(t.data.getTime())) {
      const o = this._getOrReturnCtx(t);
      return O(o, {
        code: _.invalid_date
      }), I;
    }
    const r = new Te();
    let i;
    for (const o of this._def.checks)
      o.kind === "min" ? t.data.getTime() < o.value && (i = this._getOrReturnCtx(t, i), O(i, {
        code: _.too_small,
        message: o.message,
        inclusive: !0,
        exact: !1,
        minimum: o.value,
        type: "date"
      }), r.dirty()) : o.kind === "max" ? t.data.getTime() > o.value && (i = this._getOrReturnCtx(t, i), O(i, {
        code: _.too_big,
        message: o.message,
        inclusive: !0,
        exact: !1,
        maximum: o.value,
        type: "date"
      }), r.dirty()) : U.assertNever(o);
    return {
      status: r.value,
      value: new Date(t.data.getTime())
    };
  }
  _addCheck(t) {
    return new Rn({
      ...this._def,
      checks: [...this._def.checks, t]
    });
  }
  min(t, n) {
    return this._addCheck({
      kind: "min",
      value: t.getTime(),
      message: R.toString(n)
    });
  }
  max(t, n) {
    return this._addCheck({
      kind: "max",
      value: t.getTime(),
      message: R.toString(n)
    });
  }
  get minDate() {
    let t = null;
    for (const n of this._def.checks)
      n.kind === "min" && (t === null || n.value > t) && (t = n.value);
    return t != null ? new Date(t) : null;
  }
  get maxDate() {
    let t = null;
    for (const n of this._def.checks)
      n.kind === "max" && (t === null || n.value < t) && (t = n.value);
    return t != null ? new Date(t) : null;
  }
}
Rn.create = (e) => new Rn({
  checks: [],
  coerce: (e == null ? void 0 : e.coerce) || !1,
  typeName: L.ZodDate,
  ...j(e)
});
class jo extends A {
  _parse(t) {
    if (this._getType(t) !== N.symbol) {
      const r = this._getOrReturnCtx(t);
      return O(r, {
        code: _.invalid_type,
        expected: N.symbol,
        received: r.parsedType
      }), I;
    }
    return Re(t.data);
  }
}
jo.create = (e) => new jo({
  typeName: L.ZodSymbol,
  ...j(e)
});
class pi extends A {
  _parse(t) {
    if (this._getType(t) !== N.undefined) {
      const r = this._getOrReturnCtx(t);
      return O(r, {
        code: _.invalid_type,
        expected: N.undefined,
        received: r.parsedType
      }), I;
    }
    return Re(t.data);
  }
}
pi.create = (e) => new pi({
  typeName: L.ZodUndefined,
  ...j(e)
});
class hi extends A {
  _parse(t) {
    if (this._getType(t) !== N.null) {
      const r = this._getOrReturnCtx(t);
      return O(r, {
        code: _.invalid_type,
        expected: N.null,
        received: r.parsedType
      }), I;
    }
    return Re(t.data);
  }
}
hi.create = (e) => new hi({
  typeName: L.ZodNull,
  ...j(e)
});
class mr extends A {
  constructor() {
    super(...arguments), this._any = !0;
  }
  _parse(t) {
    return Re(t.data);
  }
}
mr.create = (e) => new mr({
  typeName: L.ZodAny,
  ...j(e)
});
class En extends A {
  constructor() {
    super(...arguments), this._unknown = !0;
  }
  _parse(t) {
    return Re(t.data);
  }
}
En.create = (e) => new En({
  typeName: L.ZodUnknown,
  ...j(e)
});
class Ft extends A {
  _parse(t) {
    const n = this._getOrReturnCtx(t);
    return O(n, {
      code: _.invalid_type,
      expected: N.never,
      received: n.parsedType
    }), I;
  }
}
Ft.create = (e) => new Ft({
  typeName: L.ZodNever,
  ...j(e)
});
class zo extends A {
  _parse(t) {
    if (this._getType(t) !== N.undefined) {
      const r = this._getOrReturnCtx(t);
      return O(r, {
        code: _.invalid_type,
        expected: N.void,
        received: r.parsedType
      }), I;
    }
    return Re(t.data);
  }
}
zo.create = (e) => new zo({
  typeName: L.ZodVoid,
  ...j(e)
});
class at extends A {
  _parse(t) {
    const { ctx: n, status: r } = this._processInputParams(t), i = this._def;
    if (n.parsedType !== N.array)
      return O(n, {
        code: _.invalid_type,
        expected: N.array,
        received: n.parsedType
      }), I;
    if (i.exactLength !== null) {
      const s = n.data.length > i.exactLength.value, a = n.data.length < i.exactLength.value;
      (s || a) && (O(n, {
        code: s ? _.too_big : _.too_small,
        minimum: a ? i.exactLength.value : void 0,
        maximum: s ? i.exactLength.value : void 0,
        type: "array",
        inclusive: !0,
        exact: !0,
        message: i.exactLength.message
      }), r.dirty());
    }
    if (i.minLength !== null && n.data.length < i.minLength.value && (O(n, {
      code: _.too_small,
      minimum: i.minLength.value,
      type: "array",
      inclusive: !0,
      exact: !1,
      message: i.minLength.message
    }), r.dirty()), i.maxLength !== null && n.data.length > i.maxLength.value && (O(n, {
      code: _.too_big,
      maximum: i.maxLength.value,
      type: "array",
      inclusive: !0,
      exact: !1,
      message: i.maxLength.message
    }), r.dirty()), n.common.async)
      return Promise.all([...n.data].map((s, a) => i.type._parseAsync(new _t(n, s, n.path, a)))).then((s) => Te.mergeArray(r, s));
    const o = [...n.data].map((s, a) => i.type._parseSync(new _t(n, s, n.path, a)));
    return Te.mergeArray(r, o);
  }
  get element() {
    return this._def.type;
  }
  min(t, n) {
    return new at({
      ...this._def,
      minLength: { value: t, message: R.toString(n) }
    });
  }
  max(t, n) {
    return new at({
      ...this._def,
      maxLength: { value: t, message: R.toString(n) }
    });
  }
  length(t, n) {
    return new at({
      ...this._def,
      exactLength: { value: t, message: R.toString(n) }
    });
  }
  nonempty(t) {
    return this.min(1, t);
  }
}
at.create = (e, t) => new at({
  type: e,
  minLength: null,
  maxLength: null,
  exactLength: null,
  typeName: L.ZodArray,
  ...j(t)
});
function $n(e) {
  if (e instanceof te) {
    const t = {};
    for (const n in e.shape) {
      const r = e.shape[n];
      t[n] = Mt.create($n(r));
    }
    return new te({
      ...e._def,
      shape: () => t
    });
  } else
    return e instanceof at ? new at({
      ...e._def,
      type: $n(e.element)
    }) : e instanceof Mt ? Mt.create($n(e.unwrap())) : e instanceof Dn ? Dn.create($n(e.unwrap())) : e instanceof kt ? kt.create(e.items.map((t) => $n(t))) : e;
}
class te extends A {
  constructor() {
    super(...arguments), this._cached = null, this.nonstrict = this.passthrough, this.augment = this.extend;
  }
  _getCached() {
    if (this._cached !== null)
      return this._cached;
    const t = this._def.shape(), n = U.objectKeys(t);
    return this._cached = { shape: t, keys: n };
  }
  _parse(t) {
    if (this._getType(t) !== N.object) {
      const u = this._getOrReturnCtx(t);
      return O(u, {
        code: _.invalid_type,
        expected: N.object,
        received: u.parsedType
      }), I;
    }
    const { status: r, ctx: i } = this._processInputParams(t), { shape: o, keys: s } = this._getCached(), a = [];
    if (!(this._def.catchall instanceof Ft && this._def.unknownKeys === "strip"))
      for (const u in i.data)
        s.includes(u) || a.push(u);
    const l = [];
    for (const u of s) {
      const p = o[u], h = i.data[u];
      l.push({
        key: { status: "valid", value: u },
        value: p._parse(new _t(i, h, i.path, u)),
        alwaysSet: u in i.data
      });
    }
    if (this._def.catchall instanceof Ft) {
      const u = this._def.unknownKeys;
      if (u === "passthrough")
        for (const p of a)
          l.push({
            key: { status: "valid", value: p },
            value: { status: "valid", value: i.data[p] }
          });
      else if (u === "strict")
        a.length > 0 && (O(i, {
          code: _.unrecognized_keys,
          keys: a
        }), r.dirty());
      else if (u !== "strip")
        throw new Error("Internal ZodObject error: invalid unknownKeys value.");
    } else {
      const u = this._def.catchall;
      for (const p of a) {
        const h = i.data[p];
        l.push({
          key: { status: "valid", value: p },
          value: u._parse(
            new _t(i, h, i.path, p)
            //, ctx.child(key), value, getParsedType(value)
          ),
          alwaysSet: p in i.data
        });
      }
    }
    return i.common.async ? Promise.resolve().then(async () => {
      const u = [];
      for (const p of l) {
        const h = await p.key;
        u.push({
          key: h,
          value: await p.value,
          alwaysSet: p.alwaysSet
        });
      }
      return u;
    }).then((u) => Te.mergeObjectSync(r, u)) : Te.mergeObjectSync(r, l);
  }
  get shape() {
    return this._def.shape();
  }
  strict(t) {
    return R.errToObj, new te({
      ...this._def,
      unknownKeys: "strict",
      ...t !== void 0 ? {
        errorMap: (n, r) => {
          var i, o, s, a;
          const l = (s = (o = (i = this._def).errorMap) === null || o === void 0 ? void 0 : o.call(i, n, r).message) !== null && s !== void 0 ? s : r.defaultError;
          return n.code === "unrecognized_keys" ? {
            message: (a = R.errToObj(t).message) !== null && a !== void 0 ? a : l
          } : {
            message: l
          };
        }
      } : {}
    });
  }
  strip() {
    return new te({
      ...this._def,
      unknownKeys: "strip"
    });
  }
  passthrough() {
    return new te({
      ...this._def,
      unknownKeys: "passthrough"
    });
  }
  // const AugmentFactory =
  //   <Def extends ZodObjectDef>(def: Def) =>
  //   <Augmentation extends ZodRawShape>(
  //     augmentation: Augmentation
  //   ): ZodObject<
  //     extendShape<ReturnType<Def["shape"]>, Augmentation>,
  //     Def["unknownKeys"],
  //     Def["catchall"]
  //   > => {
  //     return new ZodObject({
  //       ...def,
  //       shape: () => ({
  //         ...def.shape(),
  //         ...augmentation,
  //       }),
  //     }) as any;
  //   };
  extend(t) {
    return new te({
      ...this._def,
      shape: () => ({
        ...this._def.shape(),
        ...t
      })
    });
  }
  /**
   * Prior to zod@1.0.12 there was a bug in the
   * inferred type of merged objects. Please
   * upgrade if you are experiencing issues.
   */
  merge(t) {
    return new te({
      unknownKeys: t._def.unknownKeys,
      catchall: t._def.catchall,
      shape: () => ({
        ...this._def.shape(),
        ...t._def.shape()
      }),
      typeName: L.ZodObject
    });
  }
  // merge<
  //   Incoming extends AnyZodObject,
  //   Augmentation extends Incoming["shape"],
  //   NewOutput extends {
  //     [k in keyof Augmentation | keyof Output]: k extends keyof Augmentation
  //       ? Augmentation[k]["_output"]
  //       : k extends keyof Output
  //       ? Output[k]
  //       : never;
  //   },
  //   NewInput extends {
  //     [k in keyof Augmentation | keyof Input]: k extends keyof Augmentation
  //       ? Augmentation[k]["_input"]
  //       : k extends keyof Input
  //       ? Input[k]
  //       : never;
  //   }
  // >(
  //   merging: Incoming
  // ): ZodObject<
  //   extendShape<T, ReturnType<Incoming["_def"]["shape"]>>,
  //   Incoming["_def"]["unknownKeys"],
  //   Incoming["_def"]["catchall"],
  //   NewOutput,
  //   NewInput
  // > {
  //   const merged: any = new ZodObject({
  //     unknownKeys: merging._def.unknownKeys,
  //     catchall: merging._def.catchall,
  //     shape: () =>
  //       objectUtil.mergeShapes(this._def.shape(), merging._def.shape()),
  //     typeName: ZodFirstPartyTypeKind.ZodObject,
  //   }) as any;
  //   return merged;
  // }
  setKey(t, n) {
    return this.augment({ [t]: n });
  }
  // merge<Incoming extends AnyZodObject>(
  //   merging: Incoming
  // ): //ZodObject<T & Incoming["_shape"], UnknownKeys, Catchall> = (merging) => {
  // ZodObject<
  //   extendShape<T, ReturnType<Incoming["_def"]["shape"]>>,
  //   Incoming["_def"]["unknownKeys"],
  //   Incoming["_def"]["catchall"]
  // > {
  //   // const mergedShape = objectUtil.mergeShapes(
  //   //   this._def.shape(),
  //   //   merging._def.shape()
  //   // );
  //   const merged: any = new ZodObject({
  //     unknownKeys: merging._def.unknownKeys,
  //     catchall: merging._def.catchall,
  //     shape: () =>
  //       objectUtil.mergeShapes(this._def.shape(), merging._def.shape()),
  //     typeName: ZodFirstPartyTypeKind.ZodObject,
  //   }) as any;
  //   return merged;
  // }
  catchall(t) {
    return new te({
      ...this._def,
      catchall: t
    });
  }
  pick(t) {
    const n = {};
    return U.objectKeys(t).forEach((r) => {
      t[r] && this.shape[r] && (n[r] = this.shape[r]);
    }), new te({
      ...this._def,
      shape: () => n
    });
  }
  omit(t) {
    const n = {};
    return U.objectKeys(this.shape).forEach((r) => {
      t[r] || (n[r] = this.shape[r]);
    }), new te({
      ...this._def,
      shape: () => n
    });
  }
  /**
   * @deprecated
   */
  deepPartial() {
    return $n(this);
  }
  partial(t) {
    const n = {};
    return U.objectKeys(this.shape).forEach((r) => {
      const i = this.shape[r];
      t && !t[r] ? n[r] = i : n[r] = i.optional();
    }), new te({
      ...this._def,
      shape: () => n
    });
  }
  required(t) {
    const n = {};
    return U.objectKeys(this.shape).forEach((r) => {
      if (t && !t[r])
        n[r] = this.shape[r];
      else {
        let o = this.shape[r];
        for (; o instanceof Mt; )
          o = o._def.innerType;
        n[r] = o;
      }
    }), new te({
      ...this._def,
      shape: () => n
    });
  }
  keyof() {
    return Uf(U.objectKeys(this.shape));
  }
}
te.create = (e, t) => new te({
  shape: () => e,
  unknownKeys: "strip",
  catchall: Ft.create(),
  typeName: L.ZodObject,
  ...j(t)
});
te.strictCreate = (e, t) => new te({
  shape: () => e,
  unknownKeys: "strict",
  catchall: Ft.create(),
  typeName: L.ZodObject,
  ...j(t)
});
te.lazycreate = (e, t) => new te({
  shape: e,
  unknownKeys: "strip",
  catchall: Ft.create(),
  typeName: L.ZodObject,
  ...j(t)
});
class mi extends A {
  _parse(t) {
    const { ctx: n } = this._processInputParams(t), r = this._def.options;
    function i(o) {
      for (const a of o)
        if (a.result.status === "valid")
          return a.result;
      for (const a of o)
        if (a.result.status === "dirty")
          return n.common.issues.push(...a.ctx.common.issues), a.result;
      const s = o.map((a) => new st(a.ctx.common.issues));
      return O(n, {
        code: _.invalid_union,
        unionErrors: s
      }), I;
    }
    if (n.common.async)
      return Promise.all(r.map(async (o) => {
        const s = {
          ...n,
          common: {
            ...n.common,
            issues: []
          },
          parent: null
        };
        return {
          result: await o._parseAsync({
            data: n.data,
            path: n.path,
            parent: s
          }),
          ctx: s
        };
      })).then(i);
    {
      let o;
      const s = [];
      for (const l of r) {
        const u = {
          ...n,
          common: {
            ...n.common,
            issues: []
          },
          parent: null
        }, p = l._parseSync({
          data: n.data,
          path: n.path,
          parent: u
        });
        if (p.status === "valid")
          return p;
        p.status === "dirty" && !o && (o = { result: p, ctx: u }), u.common.issues.length && s.push(u.common.issues);
      }
      if (o)
        return n.common.issues.push(...o.ctx.common.issues), o.result;
      const a = s.map((l) => new st(l));
      return O(n, {
        code: _.invalid_union,
        unionErrors: a
      }), I;
    }
  }
  get options() {
    return this._def.options;
  }
}
mi.create = (e, t) => new mi({
  options: e,
  typeName: L.ZodUnion,
  ...j(t)
});
const so = (e) => e instanceof gi ? so(e.schema) : e instanceof ut ? so(e.innerType()) : e instanceof wi ? [e.value] : e instanceof dn ? e.options : e instanceof _i ? Object.keys(e.enum) : e instanceof ki ? so(e._def.innerType) : e instanceof pi ? [void 0] : e instanceof hi ? [null] : null;
class ss extends A {
  _parse(t) {
    const { ctx: n } = this._processInputParams(t);
    if (n.parsedType !== N.object)
      return O(n, {
        code: _.invalid_type,
        expected: N.object,
        received: n.parsedType
      }), I;
    const r = this.discriminator, i = n.data[r], o = this.optionsMap.get(i);
    return o ? n.common.async ? o._parseAsync({
      data: n.data,
      path: n.path,
      parent: n
    }) : o._parseSync({
      data: n.data,
      path: n.path,
      parent: n
    }) : (O(n, {
      code: _.invalid_union_discriminator,
      options: Array.from(this.optionsMap.keys()),
      path: [r]
    }), I);
  }
  get discriminator() {
    return this._def.discriminator;
  }
  get options() {
    return this._def.options;
  }
  get optionsMap() {
    return this._def.optionsMap;
  }
  /**
   * The constructor of the discriminated union schema. Its behaviour is very similar to that of the normal z.union() constructor.
   * However, it only allows a union of objects, all of which need to share a discriminator property. This property must
   * have a different value for each object in the union.
   * @param discriminator the name of the discriminator property
   * @param types an array of object schemas
   * @param params
   */
  static create(t, n, r) {
    const i = /* @__PURE__ */ new Map();
    for (const o of n) {
      const s = so(o.shape[t]);
      if (!s)
        throw new Error(`A discriminator value for key \`${t}\` could not be extracted from all schema options`);
      for (const a of s) {
        if (i.has(a))
          throw new Error(`Discriminator property ${String(t)} has duplicate value ${String(a)}`);
        i.set(a, o);
      }
    }
    return new ss({
      typeName: L.ZodDiscriminatedUnion,
      discriminator: t,
      options: n,
      optionsMap: i,
      ...j(r)
    });
  }
}
function Ya(e, t) {
  const n = Qt(e), r = Qt(t);
  if (e === t)
    return { valid: !0, data: e };
  if (n === N.object && r === N.object) {
    const i = U.objectKeys(t), o = U.objectKeys(e).filter((a) => i.indexOf(a) !== -1), s = { ...e, ...t };
    for (const a of o) {
      const l = Ya(e[a], t[a]);
      if (!l.valid)
        return { valid: !1 };
      s[a] = l.data;
    }
    return { valid: !0, data: s };
  } else if (n === N.array && r === N.array) {
    if (e.length !== t.length)
      return { valid: !1 };
    const i = [];
    for (let o = 0; o < e.length; o++) {
      const s = e[o], a = t[o], l = Ya(s, a);
      if (!l.valid)
        return { valid: !1 };
      i.push(l.data);
    }
    return { valid: !0, data: i };
  } else
    return n === N.date && r === N.date && +e == +t ? { valid: !0, data: e } : { valid: !1 };
}
class vi extends A {
  _parse(t) {
    const { status: n, ctx: r } = this._processInputParams(t), i = (o, s) => {
      if (Ba(o) || Ba(s))
        return I;
      const a = Ya(o.value, s.value);
      return a.valid ? ((Ha(o) || Ha(s)) && n.dirty(), { status: n.value, value: a.data }) : (O(r, {
        code: _.invalid_intersection_types
      }), I);
    };
    return r.common.async ? Promise.all([
      this._def.left._parseAsync({
        data: r.data,
        path: r.path,
        parent: r
      }),
      this._def.right._parseAsync({
        data: r.data,
        path: r.path,
        parent: r
      })
    ]).then(([o, s]) => i(o, s)) : i(this._def.left._parseSync({
      data: r.data,
      path: r.path,
      parent: r
    }), this._def.right._parseSync({
      data: r.data,
      path: r.path,
      parent: r
    }));
  }
}
vi.create = (e, t, n) => new vi({
  left: e,
  right: t,
  typeName: L.ZodIntersection,
  ...j(n)
});
class kt extends A {
  _parse(t) {
    const { status: n, ctx: r } = this._processInputParams(t);
    if (r.parsedType !== N.array)
      return O(r, {
        code: _.invalid_type,
        expected: N.array,
        received: r.parsedType
      }), I;
    if (r.data.length < this._def.items.length)
      return O(r, {
        code: _.too_small,
        minimum: this._def.items.length,
        inclusive: !0,
        exact: !1,
        type: "array"
      }), I;
    !this._def.rest && r.data.length > this._def.items.length && (O(r, {
      code: _.too_big,
      maximum: this._def.items.length,
      inclusive: !0,
      exact: !1,
      type: "array"
    }), n.dirty());
    const o = [...r.data].map((s, a) => {
      const l = this._def.items[a] || this._def.rest;
      return l ? l._parse(new _t(r, s, r.path, a)) : null;
    }).filter((s) => !!s);
    return r.common.async ? Promise.all(o).then((s) => Te.mergeArray(n, s)) : Te.mergeArray(n, o);
  }
  get items() {
    return this._def.items;
  }
  rest(t) {
    return new kt({
      ...this._def,
      rest: t
    });
  }
}
kt.create = (e, t) => {
  if (!Array.isArray(e))
    throw new Error("You must pass an array of schemas to z.tuple([ ... ])");
  return new kt({
    items: e,
    typeName: L.ZodTuple,
    rest: null,
    ...j(t)
  });
};
class yi extends A {
  get keySchema() {
    return this._def.keyType;
  }
  get valueSchema() {
    return this._def.valueType;
  }
  _parse(t) {
    const { status: n, ctx: r } = this._processInputParams(t);
    if (r.parsedType !== N.object)
      return O(r, {
        code: _.invalid_type,
        expected: N.object,
        received: r.parsedType
      }), I;
    const i = [], o = this._def.keyType, s = this._def.valueType;
    for (const a in r.data)
      i.push({
        key: o._parse(new _t(r, a, r.path, a)),
        value: s._parse(new _t(r, r.data[a], r.path, a))
      });
    return r.common.async ? Te.mergeObjectAsync(n, i) : Te.mergeObjectSync(n, i);
  }
  get element() {
    return this._def.valueType;
  }
  static create(t, n, r) {
    return n instanceof A ? new yi({
      keyType: t,
      valueType: n,
      typeName: L.ZodRecord,
      ...j(r)
    }) : new yi({
      keyType: rt.create(),
      valueType: t,
      typeName: L.ZodRecord,
      ...j(n)
    });
  }
}
class Ao extends A {
  get keySchema() {
    return this._def.keyType;
  }
  get valueSchema() {
    return this._def.valueType;
  }
  _parse(t) {
    const { status: n, ctx: r } = this._processInputParams(t);
    if (r.parsedType !== N.map)
      return O(r, {
        code: _.invalid_type,
        expected: N.map,
        received: r.parsedType
      }), I;
    const i = this._def.keyType, o = this._def.valueType, s = [...r.data.entries()].map(([a, l], u) => ({
      key: i._parse(new _t(r, a, r.path, [u, "key"])),
      value: o._parse(new _t(r, l, r.path, [u, "value"]))
    }));
    if (r.common.async) {
      const a = /* @__PURE__ */ new Map();
      return Promise.resolve().then(async () => {
        for (const l of s) {
          const u = await l.key, p = await l.value;
          if (u.status === "aborted" || p.status === "aborted")
            return I;
          (u.status === "dirty" || p.status === "dirty") && n.dirty(), a.set(u.value, p.value);
        }
        return { status: n.value, value: a };
      });
    } else {
      const a = /* @__PURE__ */ new Map();
      for (const l of s) {
        const u = l.key, p = l.value;
        if (u.status === "aborted" || p.status === "aborted")
          return I;
        (u.status === "dirty" || p.status === "dirty") && n.dirty(), a.set(u.value, p.value);
      }
      return { status: n.value, value: a };
    }
  }
}
Ao.create = (e, t, n) => new Ao({
  valueType: t,
  keyType: e,
  typeName: L.ZodMap,
  ...j(n)
});
class Ln extends A {
  _parse(t) {
    const { status: n, ctx: r } = this._processInputParams(t);
    if (r.parsedType !== N.set)
      return O(r, {
        code: _.invalid_type,
        expected: N.set,
        received: r.parsedType
      }), I;
    const i = this._def;
    i.minSize !== null && r.data.size < i.minSize.value && (O(r, {
      code: _.too_small,
      minimum: i.minSize.value,
      type: "set",
      inclusive: !0,
      exact: !1,
      message: i.minSize.message
    }), n.dirty()), i.maxSize !== null && r.data.size > i.maxSize.value && (O(r, {
      code: _.too_big,
      maximum: i.maxSize.value,
      type: "set",
      inclusive: !0,
      exact: !1,
      message: i.maxSize.message
    }), n.dirty());
    const o = this._def.valueType;
    function s(l) {
      const u = /* @__PURE__ */ new Set();
      for (const p of l) {
        if (p.status === "aborted")
          return I;
        p.status === "dirty" && n.dirty(), u.add(p.value);
      }
      return { status: n.value, value: u };
    }
    const a = [...r.data.values()].map((l, u) => o._parse(new _t(r, l, r.path, u)));
    return r.common.async ? Promise.all(a).then((l) => s(l)) : s(a);
  }
  min(t, n) {
    return new Ln({
      ...this._def,
      minSize: { value: t, message: R.toString(n) }
    });
  }
  max(t, n) {
    return new Ln({
      ...this._def,
      maxSize: { value: t, message: R.toString(n) }
    });
  }
  size(t, n) {
    return this.min(t, n).max(t, n);
  }
  nonempty(t) {
    return this.min(1, t);
  }
}
Ln.create = (e, t) => new Ln({
  valueType: e,
  minSize: null,
  maxSize: null,
  typeName: L.ZodSet,
  ...j(t)
});
class sr extends A {
  constructor() {
    super(...arguments), this.validate = this.implement;
  }
  _parse(t) {
    const { ctx: n } = this._processInputParams(t);
    if (n.parsedType !== N.function)
      return O(n, {
        code: _.invalid_type,
        expected: N.function,
        received: n.parsedType
      }), I;
    function r(a, l) {
      return Mo({
        data: a,
        path: n.path,
        errorMaps: [
          n.common.contextualErrorMap,
          n.schemaErrorMap,
          Do(),
          ci
        ].filter((u) => !!u),
        issueData: {
          code: _.invalid_arguments,
          argumentsError: l
        }
      });
    }
    function i(a, l) {
      return Mo({
        data: a,
        path: n.path,
        errorMaps: [
          n.common.contextualErrorMap,
          n.schemaErrorMap,
          Do(),
          ci
        ].filter((u) => !!u),
        issueData: {
          code: _.invalid_return_type,
          returnTypeError: l
        }
      });
    }
    const o = { errorMap: n.common.contextualErrorMap }, s = n.data;
    if (this._def.returns instanceof vr) {
      const a = this;
      return Re(async function(...l) {
        const u = new st([]), p = await a._def.args.parseAsync(l, o).catch((y) => {
          throw u.addIssue(r(l, y)), u;
        }), h = await Reflect.apply(s, this, p);
        return await a._def.returns._def.type.parseAsync(h, o).catch((y) => {
          throw u.addIssue(i(h, y)), u;
        });
      });
    } else {
      const a = this;
      return Re(function(...l) {
        const u = a._def.args.safeParse(l, o);
        if (!u.success)
          throw new st([r(l, u.error)]);
        const p = Reflect.apply(s, this, u.data), h = a._def.returns.safeParse(p, o);
        if (!h.success)
          throw new st([i(p, h.error)]);
        return h.data;
      });
    }
  }
  parameters() {
    return this._def.args;
  }
  returnType() {
    return this._def.returns;
  }
  args(...t) {
    return new sr({
      ...this._def,
      args: kt.create(t).rest(En.create())
    });
  }
  returns(t) {
    return new sr({
      ...this._def,
      returns: t
    });
  }
  implement(t) {
    return this.parse(t);
  }
  strictImplement(t) {
    return this.parse(t);
  }
  static create(t, n, r) {
    return new sr({
      args: t || kt.create([]).rest(En.create()),
      returns: n || En.create(),
      typeName: L.ZodFunction,
      ...j(r)
    });
  }
}
class gi extends A {
  get schema() {
    return this._def.getter();
  }
  _parse(t) {
    const { ctx: n } = this._processInputParams(t);
    return this._def.getter()._parse({ data: n.data, path: n.path, parent: n });
  }
}
gi.create = (e, t) => new gi({
  getter: e,
  typeName: L.ZodLazy,
  ...j(t)
});
class wi extends A {
  _parse(t) {
    if (t.data !== this._def.value) {
      const n = this._getOrReturnCtx(t);
      return O(n, {
        received: n.data,
        code: _.invalid_literal,
        expected: this._def.value
      }), I;
    }
    return { status: "valid", value: t.data };
  }
  get value() {
    return this._def.value;
  }
}
wi.create = (e, t) => new wi({
  value: e,
  typeName: L.ZodLiteral,
  ...j(t)
});
function Uf(e, t) {
  return new dn({
    values: e,
    typeName: L.ZodEnum,
    ...j(t)
  });
}
class dn extends A {
  _parse(t) {
    if (typeof t.data != "string") {
      const n = this._getOrReturnCtx(t), r = this._def.values;
      return O(n, {
        expected: U.joinValues(r),
        received: n.parsedType,
        code: _.invalid_type
      }), I;
    }
    if (this._def.values.indexOf(t.data) === -1) {
      const n = this._getOrReturnCtx(t), r = this._def.values;
      return O(n, {
        received: n.data,
        code: _.invalid_enum_value,
        options: r
      }), I;
    }
    return Re(t.data);
  }
  get options() {
    return this._def.values;
  }
  get enum() {
    const t = {};
    for (const n of this._def.values)
      t[n] = n;
    return t;
  }
  get Values() {
    const t = {};
    for (const n of this._def.values)
      t[n] = n;
    return t;
  }
  get Enum() {
    const t = {};
    for (const n of this._def.values)
      t[n] = n;
    return t;
  }
  extract(t) {
    return dn.create(t);
  }
  exclude(t) {
    return dn.create(this.options.filter((n) => !t.includes(n)));
  }
}
dn.create = Uf;
class _i extends A {
  _parse(t) {
    const n = U.getValidEnumValues(this._def.values), r = this._getOrReturnCtx(t);
    if (r.parsedType !== N.string && r.parsedType !== N.number) {
      const i = U.objectValues(n);
      return O(r, {
        expected: U.joinValues(i),
        received: r.parsedType,
        code: _.invalid_type
      }), I;
    }
    if (n.indexOf(t.data) === -1) {
      const i = U.objectValues(n);
      return O(r, {
        received: r.data,
        code: _.invalid_enum_value,
        options: i
      }), I;
    }
    return Re(t.data);
  }
  get enum() {
    return this._def.values;
  }
}
_i.create = (e, t) => new _i({
  values: e,
  typeName: L.ZodNativeEnum,
  ...j(t)
});
class vr extends A {
  unwrap() {
    return this._def.type;
  }
  _parse(t) {
    const { ctx: n } = this._processInputParams(t);
    if (n.parsedType !== N.promise && n.common.async === !1)
      return O(n, {
        code: _.invalid_type,
        expected: N.promise,
        received: n.parsedType
      }), I;
    const r = n.parsedType === N.promise ? n.data : Promise.resolve(n.data);
    return Re(r.then((i) => this._def.type.parseAsync(i, {
      path: n.path,
      errorMap: n.common.contextualErrorMap
    })));
  }
}
vr.create = (e, t) => new vr({
  type: e,
  typeName: L.ZodPromise,
  ...j(t)
});
class ut extends A {
  innerType() {
    return this._def.schema;
  }
  sourceType() {
    return this._def.schema._def.typeName === L.ZodEffects ? this._def.schema.sourceType() : this._def.schema;
  }
  _parse(t) {
    const { status: n, ctx: r } = this._processInputParams(t), i = this._def.effect || null, o = {
      addIssue: (s) => {
        O(r, s), s.fatal ? n.abort() : n.dirty();
      },
      get path() {
        return r.path;
      }
    };
    if (o.addIssue = o.addIssue.bind(o), i.type === "preprocess") {
      const s = i.transform(r.data, o);
      return r.common.issues.length ? {
        status: "dirty",
        value: r.data
      } : r.common.async ? Promise.resolve(s).then((a) => this._def.schema._parseAsync({
        data: a,
        path: r.path,
        parent: r
      })) : this._def.schema._parseSync({
        data: s,
        path: r.path,
        parent: r
      });
    }
    if (i.type === "refinement") {
      const s = (a) => {
        const l = i.refinement(a, o);
        if (r.common.async)
          return Promise.resolve(l);
        if (l instanceof Promise)
          throw new Error("Async refinement encountered during synchronous parse operation. Use .parseAsync instead.");
        return a;
      };
      if (r.common.async === !1) {
        const a = this._def.schema._parseSync({
          data: r.data,
          path: r.path,
          parent: r
        });
        return a.status === "aborted" ? I : (a.status === "dirty" && n.dirty(), s(a.value), { status: n.value, value: a.value });
      } else
        return this._def.schema._parseAsync({ data: r.data, path: r.path, parent: r }).then((a) => a.status === "aborted" ? I : (a.status === "dirty" && n.dirty(), s(a.value).then(() => ({ status: n.value, value: a.value }))));
    }
    if (i.type === "transform")
      if (r.common.async === !1) {
        const s = this._def.schema._parseSync({
          data: r.data,
          path: r.path,
          parent: r
        });
        if (!di(s))
          return s;
        const a = i.transform(s.value, o);
        if (a instanceof Promise)
          throw new Error("Asynchronous transform encountered during synchronous parse operation. Use .parseAsync instead.");
        return { status: n.value, value: a };
      } else
        return this._def.schema._parseAsync({ data: r.data, path: r.path, parent: r }).then((s) => di(s) ? Promise.resolve(i.transform(s.value, o)).then((a) => ({ status: n.value, value: a })) : s);
    U.assertNever(i);
  }
}
ut.create = (e, t, n) => new ut({
  schema: e,
  typeName: L.ZodEffects,
  effect: t,
  ...j(n)
});
ut.createWithPreprocess = (e, t, n) => new ut({
  schema: t,
  effect: { type: "preprocess", transform: e },
  typeName: L.ZodEffects,
  ...j(n)
});
class Mt extends A {
  _parse(t) {
    return this._getType(t) === N.undefined ? Re(void 0) : this._def.innerType._parse(t);
  }
  unwrap() {
    return this._def.innerType;
  }
}
Mt.create = (e, t) => new Mt({
  innerType: e,
  typeName: L.ZodOptional,
  ...j(t)
});
class Dn extends A {
  _parse(t) {
    return this._getType(t) === N.null ? Re(null) : this._def.innerType._parse(t);
  }
  unwrap() {
    return this._def.innerType;
  }
}
Dn.create = (e, t) => new Dn({
  innerType: e,
  typeName: L.ZodNullable,
  ...j(t)
});
class ki extends A {
  _parse(t) {
    const { ctx: n } = this._processInputParams(t);
    let r = n.data;
    return n.parsedType === N.undefined && (r = this._def.defaultValue()), this._def.innerType._parse({
      data: r,
      path: n.path,
      parent: n
    });
  }
  removeDefault() {
    return this._def.innerType;
  }
}
ki.create = (e, t) => new ki({
  innerType: e,
  typeName: L.ZodDefault,
  defaultValue: typeof t.default == "function" ? t.default : () => t.default,
  ...j(t)
});
class Fo extends A {
  _parse(t) {
    const { ctx: n } = this._processInputParams(t), r = {
      ...n,
      common: {
        ...n.common,
        issues: []
      }
    }, i = this._def.innerType._parse({
      data: r.data,
      path: r.path,
      parent: {
        ...r
      }
    });
    return Io(i) ? i.then((o) => ({
      status: "valid",
      value: o.status === "valid" ? o.value : this._def.catchValue({
        get error() {
          return new st(r.common.issues);
        },
        input: r.data
      })
    })) : {
      status: "valid",
      value: i.status === "valid" ? i.value : this._def.catchValue({
        get error() {
          return new st(r.common.issues);
        },
        input: r.data
      })
    };
  }
  removeCatch() {
    return this._def.innerType;
  }
}
Fo.create = (e, t) => new Fo({
  innerType: e,
  typeName: L.ZodCatch,
  catchValue: typeof t.catch == "function" ? t.catch : () => t.catch,
  ...j(t)
});
class Vo extends A {
  _parse(t) {
    if (this._getType(t) !== N.nan) {
      const r = this._getOrReturnCtx(t);
      return O(r, {
        code: _.invalid_type,
        expected: N.nan,
        received: r.parsedType
      }), I;
    }
    return { status: "valid", value: t.data };
  }
}
Vo.create = (e) => new Vo({
  typeName: L.ZodNaN,
  ...j(e)
});
const L0 = Symbol("zod_brand");
class Zf extends A {
  _parse(t) {
    const { ctx: n } = this._processInputParams(t), r = n.data;
    return this._def.type._parse({
      data: r,
      path: n.path,
      parent: n
    });
  }
  unwrap() {
    return this._def.type;
  }
}
class Oi extends A {
  _parse(t) {
    const { status: n, ctx: r } = this._processInputParams(t);
    if (r.common.async)
      return (async () => {
        const o = await this._def.in._parseAsync({
          data: r.data,
          path: r.path,
          parent: r
        });
        return o.status === "aborted" ? I : o.status === "dirty" ? (n.dirty(), $f(o.value)) : this._def.out._parseAsync({
          data: o.value,
          path: r.path,
          parent: r
        });
      })();
    {
      const i = this._def.in._parseSync({
        data: r.data,
        path: r.path,
        parent: r
      });
      return i.status === "aborted" ? I : i.status === "dirty" ? (n.dirty(), {
        status: "dirty",
        value: i.value
      }) : this._def.out._parseSync({
        data: i.value,
        path: r.path,
        parent: r
      });
    }
  }
  static create(t, n) {
    return new Oi({
      in: t,
      out: n,
      typeName: L.ZodPipeline
    });
  }
}
class Wo extends A {
  _parse(t) {
    const n = this._def.innerType._parse(t);
    return di(n) && (n.value = Object.freeze(n.value)), n;
  }
}
Wo.create = (e, t) => new Wo({
  innerType: e,
  typeName: L.ZodReadonly,
  ...j(t)
});
const Bf = (e, t = {}, n) => e ? mr.create().superRefine((r, i) => {
  var o, s;
  if (!e(r)) {
    const a = typeof t == "function" ? t(r) : typeof t == "string" ? { message: t } : t, l = (s = (o = a.fatal) !== null && o !== void 0 ? o : n) !== null && s !== void 0 ? s : !0, u = typeof a == "string" ? { message: a } : a;
    i.addIssue({ code: "custom", ...u, fatal: l });
  }
}) : mr.create(), D0 = {
  object: te.lazycreate
};
var L;
(function(e) {
  e.ZodString = "ZodString", e.ZodNumber = "ZodNumber", e.ZodNaN = "ZodNaN", e.ZodBigInt = "ZodBigInt", e.ZodBoolean = "ZodBoolean", e.ZodDate = "ZodDate", e.ZodSymbol = "ZodSymbol", e.ZodUndefined = "ZodUndefined", e.ZodNull = "ZodNull", e.ZodAny = "ZodAny", e.ZodUnknown = "ZodUnknown", e.ZodNever = "ZodNever", e.ZodVoid = "ZodVoid", e.ZodArray = "ZodArray", e.ZodObject = "ZodObject", e.ZodUnion = "ZodUnion", e.ZodDiscriminatedUnion = "ZodDiscriminatedUnion", e.ZodIntersection = "ZodIntersection", e.ZodTuple = "ZodTuple", e.ZodRecord = "ZodRecord", e.ZodMap = "ZodMap", e.ZodSet = "ZodSet", e.ZodFunction = "ZodFunction", e.ZodLazy = "ZodLazy", e.ZodLiteral = "ZodLiteral", e.ZodEnum = "ZodEnum", e.ZodEffects = "ZodEffects", e.ZodNativeEnum = "ZodNativeEnum", e.ZodOptional = "ZodOptional", e.ZodNullable = "ZodNullable", e.ZodDefault = "ZodDefault", e.ZodCatch = "ZodCatch", e.ZodPromise = "ZodPromise", e.ZodBranded = "ZodBranded", e.ZodPipeline = "ZodPipeline", e.ZodReadonly = "ZodReadonly";
})(L || (L = {}));
const M0 = (e, t = {
  message: `Input not instance of ${e.name}`
}) => Bf((n) => n instanceof e, t), Hf = rt.create, Yf = un.create, I0 = Vo.create, j0 = cn.create, Qf = fi.create, z0 = Rn.create, A0 = jo.create, F0 = pi.create, V0 = hi.create, W0 = mr.create, $0 = En.create, U0 = Ft.create, Z0 = zo.create, B0 = at.create, H0 = te.create, Y0 = te.strictCreate, Q0 = mi.create, G0 = ss.create, K0 = vi.create, X0 = kt.create, q0 = yi.create, J0 = Ao.create, b0 = Ln.create, ev = sr.create, tv = gi.create, nv = wi.create, rv = dn.create, iv = _i.create, ov = vr.create, ac = ut.create, sv = Mt.create, av = Dn.create, lv = ut.createWithPreprocess, uv = Oi.create, cv = () => Hf().optional(), dv = () => Yf().optional(), fv = () => Qf().optional(), pv = {
  string: (e) => rt.create({ ...e, coerce: !0 }),
  number: (e) => un.create({ ...e, coerce: !0 }),
  boolean: (e) => fi.create({
    ...e,
    coerce: !0
  }),
  bigint: (e) => cn.create({ ...e, coerce: !0 }),
  date: (e) => Rn.create({ ...e, coerce: !0 })
}, hv = I;
var ne = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  defaultErrorMap: ci,
  setErrorMap: g0,
  getErrorMap: Do,
  makeIssue: Mo,
  EMPTY_PATH: w0,
  addIssueToContext: O,
  ParseStatus: Te,
  INVALID: I,
  DIRTY: $f,
  OK: Re,
  isAborted: Ba,
  isDirty: Ha,
  isValid: di,
  isAsync: Io,
  get util() {
    return U;
  },
  get objectUtil() {
    return Za;
  },
  ZodParsedType: N,
  getParsedType: Qt,
  ZodType: A,
  ZodString: rt,
  ZodNumber: un,
  ZodBigInt: cn,
  ZodBoolean: fi,
  ZodDate: Rn,
  ZodSymbol: jo,
  ZodUndefined: pi,
  ZodNull: hi,
  ZodAny: mr,
  ZodUnknown: En,
  ZodNever: Ft,
  ZodVoid: zo,
  ZodArray: at,
  ZodObject: te,
  ZodUnion: mi,
  ZodDiscriminatedUnion: ss,
  ZodIntersection: vi,
  ZodTuple: kt,
  ZodRecord: yi,
  ZodMap: Ao,
  ZodSet: Ln,
  ZodFunction: sr,
  ZodLazy: gi,
  ZodLiteral: wi,
  ZodEnum: dn,
  ZodNativeEnum: _i,
  ZodPromise: vr,
  ZodEffects: ut,
  ZodTransformer: ut,
  ZodOptional: Mt,
  ZodNullable: Dn,
  ZodDefault: ki,
  ZodCatch: Fo,
  ZodNaN: Vo,
  BRAND: L0,
  ZodBranded: Zf,
  ZodPipeline: Oi,
  ZodReadonly: Wo,
  custom: Bf,
  Schema: A,
  ZodSchema: A,
  late: D0,
  get ZodFirstPartyTypeKind() {
    return L;
  },
  coerce: pv,
  any: W0,
  array: B0,
  bigint: j0,
  boolean: Qf,
  date: z0,
  discriminatedUnion: G0,
  effect: ac,
  enum: rv,
  function: ev,
  instanceof: M0,
  intersection: K0,
  lazy: tv,
  literal: nv,
  map: J0,
  nan: I0,
  nativeEnum: iv,
  never: U0,
  null: V0,
  nullable: av,
  number: Yf,
  object: H0,
  oboolean: fv,
  onumber: dv,
  optional: sv,
  ostring: cv,
  pipeline: uv,
  preprocess: lv,
  promise: ov,
  record: q0,
  set: b0,
  strictObject: Y0,
  string: Hf,
  symbol: A0,
  transformer: ac,
  tuple: X0,
  undefined: F0,
  union: Q0,
  unknown: $0,
  void: Z0,
  NEVER: hv,
  ZodIssueCode: _,
  quotelessJson: y0,
  ZodError: st
});
const Gf = ne.object({
  MemberCount: ne.number(),
  OnTrackCount: ne.number(),
  OnTrackOnDateCount: ne.number()
}), Kf = ne.object({
  MemberCount: ne.number(),
  ContributionAmount: ne.number()
}), Xf = ne.object({
  ContributionAmount: ne.number()
}), mv = ne.object({
  Name: ne.string(),
  MemberCount: ne.number(),
  BUKStatus: Gf,
  SamvirkStatus: Kf,
  AHStatus: Xf
}), vv = ne.object({
  Title: ne.string(),
  DateFrom: ne.string(),
  DateTo: ne.string(),
  MyShareTargetOnDate: ne.number(),
  MyShareNextThreshold: ne.number(),
  SamvirkGoalPerMonth: ne.number(),
  SamvirkGoalPerSprint: ne.number(),
  Teams: ne.array(mv),
  ReportDate: ne.string()
}), yv = ne.array(vv);
Gf.or(Kf).or(Xf);
function St(e) {
  const t = Object.prototype.toString.call(e);
  return e instanceof Date || typeof e == "object" && t === "[object Date]" ? new e.constructor(+e) : typeof e == "number" || t === "[object Number]" || typeof e == "string" || t === "[object String]" ? new Date(e) : /* @__PURE__ */ new Date(NaN);
}
function Mn(e, t) {
  return e instanceof Date ? new e.constructor(t) : new Date(t);
}
const qf = 6048e5, gv = 864e5;
let wv = {};
function as() {
  return wv;
}
function Si(e, t) {
  var a, l, u, p;
  const n = as(), r = (t == null ? void 0 : t.weekStartsOn) ?? ((l = (a = t == null ? void 0 : t.locale) == null ? void 0 : a.options) == null ? void 0 : l.weekStartsOn) ?? n.weekStartsOn ?? ((p = (u = n.locale) == null ? void 0 : u.options) == null ? void 0 : p.weekStartsOn) ?? 0, i = St(e), o = i.getDay(), s = (o < r ? 7 : 0) + o - r;
  return i.setDate(i.getDate() - s), i.setHours(0, 0, 0, 0), i;
}
function $o(e) {
  return Si(e, { weekStartsOn: 1 });
}
function Jf(e) {
  const t = St(e), n = t.getFullYear(), r = Mn(e, 0);
  r.setFullYear(n + 1, 0, 4), r.setHours(0, 0, 0, 0);
  const i = $o(r), o = Mn(e, 0);
  o.setFullYear(n, 0, 4), o.setHours(0, 0, 0, 0);
  const s = $o(o);
  return t.getTime() >= i.getTime() ? n + 1 : t.getTime() >= s.getTime() ? n : n - 1;
}
function lc(e) {
  const t = St(e);
  return t.setHours(0, 0, 0, 0), t;
}
function uc(e) {
  const t = new Date(
    Date.UTC(
      e.getFullYear(),
      e.getMonth(),
      e.getDate(),
      e.getHours(),
      e.getMinutes(),
      e.getSeconds(),
      e.getMilliseconds()
    )
  );
  return t.setUTCFullYear(e.getFullYear()), e.getTime() - t.getTime();
}
function _v(e, t) {
  const n = lc(e), r = lc(t), i = n.getTime() - uc(n), o = r.getTime() - uc(r);
  return Math.round((i - o) / gv);
}
function kv(e) {
  const t = Jf(e), n = Mn(e, 0);
  return n.setFullYear(t, 0, 4), n.setHours(0, 0, 0, 0), $o(n);
}
function Sv(e) {
  return e instanceof Date || typeof e == "object" && Object.prototype.toString.call(e) === "[object Date]";
}
function xv(e) {
  if (!Sv(e) && typeof e != "number")
    return !1;
  const t = St(e);
  return !isNaN(Number(t));
}
function Ev(e) {
  const t = St(e), n = Mn(e, 0);
  return n.setFullYear(t.getFullYear(), 0, 1), n.setHours(0, 0, 0, 0), n;
}
const Cv = {
  lessThanXSeconds: {
    one: "less than a second",
    other: "less than {{count}} seconds"
  },
  xSeconds: {
    one: "1 second",
    other: "{{count}} seconds"
  },
  halfAMinute: "half a minute",
  lessThanXMinutes: {
    one: "less than a minute",
    other: "less than {{count}} minutes"
  },
  xMinutes: {
    one: "1 minute",
    other: "{{count}} minutes"
  },
  aboutXHours: {
    one: "about 1 hour",
    other: "about {{count}} hours"
  },
  xHours: {
    one: "1 hour",
    other: "{{count}} hours"
  },
  xDays: {
    one: "1 day",
    other: "{{count}} days"
  },
  aboutXWeeks: {
    one: "about 1 week",
    other: "about {{count}} weeks"
  },
  xWeeks: {
    one: "1 week",
    other: "{{count}} weeks"
  },
  aboutXMonths: {
    one: "about 1 month",
    other: "about {{count}} months"
  },
  xMonths: {
    one: "1 month",
    other: "{{count}} months"
  },
  aboutXYears: {
    one: "about 1 year",
    other: "about {{count}} years"
  },
  xYears: {
    one: "1 year",
    other: "{{count}} years"
  },
  overXYears: {
    one: "over 1 year",
    other: "over {{count}} years"
  },
  almostXYears: {
    one: "almost 1 year",
    other: "almost {{count}} years"
  }
}, Tv = (e, t, n) => {
  let r;
  const i = Cv[e];
  return typeof i == "string" ? r = i : t === 1 ? r = i.one : r = i.other.replace("{{count}}", t.toString()), n != null && n.addSuffix ? n.comparison && n.comparison > 0 ? "in " + r : r + " ago" : r;
};
function Bs(e) {
  return (t = {}) => {
    const n = t.width ? String(t.width) : e.defaultWidth;
    return e.formats[n] || e.formats[e.defaultWidth];
  };
}
const Nv = {
  full: "EEEE, MMMM do, y",
  long: "MMMM do, y",
  medium: "MMM d, y",
  short: "MM/dd/yyyy"
}, Ov = {
  full: "h:mm:ss a zzzz",
  long: "h:mm:ss a z",
  medium: "h:mm:ss a",
  short: "h:mm a"
}, Pv = {
  full: "{{date}} 'at' {{time}}",
  long: "{{date}} 'at' {{time}}",
  medium: "{{date}}, {{time}}",
  short: "{{date}}, {{time}}"
}, Rv = {
  date: Bs({
    formats: Nv,
    defaultWidth: "full"
  }),
  time: Bs({
    formats: Ov,
    defaultWidth: "full"
  }),
  dateTime: Bs({
    formats: Pv,
    defaultWidth: "full"
  })
}, Lv = {
  lastWeek: "'last' eeee 'at' p",
  yesterday: "'yesterday at' p",
  today: "'today at' p",
  tomorrow: "'tomorrow at' p",
  nextWeek: "eeee 'at' p",
  other: "P"
}, Dv = (e, t, n, r) => Lv[e];
function Rr(e) {
  return (t, n) => {
    const r = n != null && n.context ? String(n.context) : "standalone";
    let i;
    if (r === "formatting" && e.formattingValues) {
      const s = e.defaultFormattingWidth || e.defaultWidth, a = n != null && n.width ? String(n.width) : s;
      i = e.formattingValues[a] || e.formattingValues[s];
    } else {
      const s = e.defaultWidth, a = n != null && n.width ? String(n.width) : e.defaultWidth;
      i = e.values[a] || e.values[s];
    }
    const o = e.argumentCallback ? e.argumentCallback(t) : t;
    return i[o];
  };
}
const Mv = {
  narrow: ["B", "A"],
  abbreviated: ["BC", "AD"],
  wide: ["Before Christ", "Anno Domini"]
}, Iv = {
  narrow: ["1", "2", "3", "4"],
  abbreviated: ["Q1", "Q2", "Q3", "Q4"],
  wide: ["1st quarter", "2nd quarter", "3rd quarter", "4th quarter"]
}, jv = {
  narrow: ["J", "F", "M", "A", "M", "J", "J", "A", "S", "O", "N", "D"],
  abbreviated: [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec"
  ],
  wide: [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December"
  ]
}, zv = {
  narrow: ["S", "M", "T", "W", "T", "F", "S"],
  short: ["Su", "Mo", "Tu", "We", "Th", "Fr", "Sa"],
  abbreviated: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
  wide: [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday"
  ]
}, Av = {
  narrow: {
    am: "a",
    pm: "p",
    midnight: "mi",
    noon: "n",
    morning: "morning",
    afternoon: "afternoon",
    evening: "evening",
    night: "night"
  },
  abbreviated: {
    am: "AM",
    pm: "PM",
    midnight: "midnight",
    noon: "noon",
    morning: "morning",
    afternoon: "afternoon",
    evening: "evening",
    night: "night"
  },
  wide: {
    am: "a.m.",
    pm: "p.m.",
    midnight: "midnight",
    noon: "noon",
    morning: "morning",
    afternoon: "afternoon",
    evening: "evening",
    night: "night"
  }
}, Fv = {
  narrow: {
    am: "a",
    pm: "p",
    midnight: "mi",
    noon: "n",
    morning: "in the morning",
    afternoon: "in the afternoon",
    evening: "in the evening",
    night: "at night"
  },
  abbreviated: {
    am: "AM",
    pm: "PM",
    midnight: "midnight",
    noon: "noon",
    morning: "in the morning",
    afternoon: "in the afternoon",
    evening: "in the evening",
    night: "at night"
  },
  wide: {
    am: "a.m.",
    pm: "p.m.",
    midnight: "midnight",
    noon: "noon",
    morning: "in the morning",
    afternoon: "in the afternoon",
    evening: "in the evening",
    night: "at night"
  }
}, Vv = (e, t) => {
  const n = Number(e), r = n % 100;
  if (r > 20 || r < 10)
    switch (r % 10) {
      case 1:
        return n + "st";
      case 2:
        return n + "nd";
      case 3:
        return n + "rd";
    }
  return n + "th";
}, Wv = {
  ordinalNumber: Vv,
  era: Rr({
    values: Mv,
    defaultWidth: "wide"
  }),
  quarter: Rr({
    values: Iv,
    defaultWidth: "wide",
    argumentCallback: (e) => e - 1
  }),
  month: Rr({
    values: jv,
    defaultWidth: "wide"
  }),
  day: Rr({
    values: zv,
    defaultWidth: "wide"
  }),
  dayPeriod: Rr({
    values: Av,
    defaultWidth: "wide",
    formattingValues: Fv,
    defaultFormattingWidth: "wide"
  })
};
function Lr(e) {
  return (t, n = {}) => {
    const r = n.width, i = r && e.matchPatterns[r] || e.matchPatterns[e.defaultMatchWidth], o = t.match(i);
    if (!o)
      return null;
    const s = o[0], a = r && e.parsePatterns[r] || e.parsePatterns[e.defaultParseWidth], l = Array.isArray(a) ? Uv(a, (h) => h.test(s)) : (
      // eslint-disable-next-line @typescript-eslint/no-explicit-any -- I challange you to fix the type
      $v(a, (h) => h.test(s))
    );
    let u;
    u = e.valueCallback ? e.valueCallback(l) : l, u = n.valueCallback ? (
      // eslint-disable-next-line @typescript-eslint/no-explicit-any -- I challange you to fix the type
      n.valueCallback(u)
    ) : u;
    const p = t.slice(s.length);
    return { value: u, rest: p };
  };
}
function $v(e, t) {
  for (const n in e)
    if (Object.prototype.hasOwnProperty.call(e, n) && t(e[n]))
      return n;
}
function Uv(e, t) {
  for (let n = 0; n < e.length; n++)
    if (t(e[n]))
      return n;
}
function Zv(e) {
  return (t, n = {}) => {
    const r = t.match(e.matchPattern);
    if (!r)
      return null;
    const i = r[0], o = t.match(e.parsePattern);
    if (!o)
      return null;
    let s = e.valueCallback ? e.valueCallback(o[0]) : o[0];
    s = n.valueCallback ? n.valueCallback(s) : s;
    const a = t.slice(i.length);
    return { value: s, rest: a };
  };
}
const Bv = /^(\d+)(th|st|nd|rd)?/i, Hv = /\d+/i, Yv = {
  narrow: /^(b|a)/i,
  abbreviated: /^(b\.?\s?c\.?|b\.?\s?c\.?\s?e\.?|a\.?\s?d\.?|c\.?\s?e\.?)/i,
  wide: /^(before christ|before common era|anno domini|common era)/i
}, Qv = {
  any: [/^b/i, /^(a|c)/i]
}, Gv = {
  narrow: /^[1234]/i,
  abbreviated: /^q[1234]/i,
  wide: /^[1234](th|st|nd|rd)? quarter/i
}, Kv = {
  any: [/1/i, /2/i, /3/i, /4/i]
}, Xv = {
  narrow: /^[jfmasond]/i,
  abbreviated: /^(jan|feb|mar|apr|may|jun|jul|aug|sep|oct|nov|dec)/i,
  wide: /^(january|february|march|april|may|june|july|august|september|october|november|december)/i
}, qv = {
  narrow: [
    /^j/i,
    /^f/i,
    /^m/i,
    /^a/i,
    /^m/i,
    /^j/i,
    /^j/i,
    /^a/i,
    /^s/i,
    /^o/i,
    /^n/i,
    /^d/i
  ],
  any: [
    /^ja/i,
    /^f/i,
    /^mar/i,
    /^ap/i,
    /^may/i,
    /^jun/i,
    /^jul/i,
    /^au/i,
    /^s/i,
    /^o/i,
    /^n/i,
    /^d/i
  ]
}, Jv = {
  narrow: /^[smtwf]/i,
  short: /^(su|mo|tu|we|th|fr|sa)/i,
  abbreviated: /^(sun|mon|tue|wed|thu|fri|sat)/i,
  wide: /^(sunday|monday|tuesday|wednesday|thursday|friday|saturday)/i
}, bv = {
  narrow: [/^s/i, /^m/i, /^t/i, /^w/i, /^t/i, /^f/i, /^s/i],
  any: [/^su/i, /^m/i, /^tu/i, /^w/i, /^th/i, /^f/i, /^sa/i]
}, ey = {
  narrow: /^(a|p|mi|n|(in the|at) (morning|afternoon|evening|night))/i,
  any: /^([ap]\.?\s?m\.?|midnight|noon|(in the|at) (morning|afternoon|evening|night))/i
}, ty = {
  any: {
    am: /^a/i,
    pm: /^p/i,
    midnight: /^mi/i,
    noon: /^no/i,
    morning: /morning/i,
    afternoon: /afternoon/i,
    evening: /evening/i,
    night: /night/i
  }
}, ny = {
  ordinalNumber: Zv({
    matchPattern: Bv,
    parsePattern: Hv,
    valueCallback: (e) => parseInt(e, 10)
  }),
  era: Lr({
    matchPatterns: Yv,
    defaultMatchWidth: "wide",
    parsePatterns: Qv,
    defaultParseWidth: "any"
  }),
  quarter: Lr({
    matchPatterns: Gv,
    defaultMatchWidth: "wide",
    parsePatterns: Kv,
    defaultParseWidth: "any",
    valueCallback: (e) => e + 1
  }),
  month: Lr({
    matchPatterns: Xv,
    defaultMatchWidth: "wide",
    parsePatterns: qv,
    defaultParseWidth: "any"
  }),
  day: Lr({
    matchPatterns: Jv,
    defaultMatchWidth: "wide",
    parsePatterns: bv,
    defaultParseWidth: "any"
  }),
  dayPeriod: Lr({
    matchPatterns: ey,
    defaultMatchWidth: "any",
    parsePatterns: ty,
    defaultParseWidth: "any"
  })
}, ry = {
  code: "en-US",
  formatDistance: Tv,
  formatLong: Rv,
  formatRelative: Dv,
  localize: Wv,
  match: ny,
  options: {
    weekStartsOn: 0,
    firstWeekContainsDate: 1
  }
};
function iy(e) {
  const t = St(e);
  return _v(t, Ev(t)) + 1;
}
function oy(e) {
  const t = St(e), n = $o(t).getTime() - kv(t).getTime();
  return Math.round(n / qf) + 1;
}
function bf(e, t) {
  var p, h, m, y;
  const n = St(e), r = n.getFullYear(), i = as(), o = (t == null ? void 0 : t.firstWeekContainsDate) ?? ((h = (p = t == null ? void 0 : t.locale) == null ? void 0 : p.options) == null ? void 0 : h.firstWeekContainsDate) ?? i.firstWeekContainsDate ?? ((y = (m = i.locale) == null ? void 0 : m.options) == null ? void 0 : y.firstWeekContainsDate) ?? 1, s = Mn(e, 0);
  s.setFullYear(r + 1, 0, o), s.setHours(0, 0, 0, 0);
  const a = Si(s, t), l = Mn(e, 0);
  l.setFullYear(r, 0, o), l.setHours(0, 0, 0, 0);
  const u = Si(l, t);
  return n.getTime() >= a.getTime() ? r + 1 : n.getTime() >= u.getTime() ? r : r - 1;
}
function sy(e, t) {
  var a, l, u, p;
  const n = as(), r = (t == null ? void 0 : t.firstWeekContainsDate) ?? ((l = (a = t == null ? void 0 : t.locale) == null ? void 0 : a.options) == null ? void 0 : l.firstWeekContainsDate) ?? n.firstWeekContainsDate ?? ((p = (u = n.locale) == null ? void 0 : u.options) == null ? void 0 : p.firstWeekContainsDate) ?? 1, i = bf(e, t), o = Mn(e, 0);
  return o.setFullYear(i, 0, r), o.setHours(0, 0, 0, 0), Si(o, t);
}
function ay(e, t) {
  const n = St(e), r = Si(n, t).getTime() - sy(n, t).getTime();
  return Math.round(r / qf) + 1;
}
function B(e, t) {
  const n = e < 0 ? "-" : "", r = Math.abs(e).toString().padStart(t, "0");
  return n + r;
}
const Ut = {
  // Year
  y(e, t) {
    const n = e.getFullYear(), r = n > 0 ? n : 1 - n;
    return B(t === "yy" ? r % 100 : r, t.length);
  },
  // Month
  M(e, t) {
    const n = e.getMonth();
    return t === "M" ? String(n + 1) : B(n + 1, 2);
  },
  // Day of the month
  d(e, t) {
    return B(e.getDate(), t.length);
  },
  // AM or PM
  a(e, t) {
    const n = e.getHours() / 12 >= 1 ? "pm" : "am";
    switch (t) {
      case "a":
      case "aa":
        return n.toUpperCase();
      case "aaa":
        return n;
      case "aaaaa":
        return n[0];
      case "aaaa":
      default:
        return n === "am" ? "a.m." : "p.m.";
    }
  },
  // Hour [1-12]
  h(e, t) {
    return B(e.getHours() % 12 || 12, t.length);
  },
  // Hour [0-23]
  H(e, t) {
    return B(e.getHours(), t.length);
  },
  // Minute
  m(e, t) {
    return B(e.getMinutes(), t.length);
  },
  // Second
  s(e, t) {
    return B(e.getSeconds(), t.length);
  },
  // Fraction of second
  S(e, t) {
    const n = t.length, r = e.getMilliseconds(), i = Math.floor(
      r * Math.pow(10, n - 3)
    );
    return B(i, t.length);
  }
}, Wn = {
  am: "am",
  pm: "pm",
  midnight: "midnight",
  noon: "noon",
  morning: "morning",
  afternoon: "afternoon",
  evening: "evening",
  night: "night"
}, ly = {
  // Era
  G: function(e, t, n) {
    const r = e.getFullYear() > 0 ? 1 : 0;
    switch (t) {
      case "G":
      case "GG":
      case "GGG":
        return n.era(r, { width: "abbreviated" });
      case "GGGGG":
        return n.era(r, { width: "narrow" });
      case "GGGG":
      default:
        return n.era(r, { width: "wide" });
    }
  },
  // Year
  y: function(e, t, n) {
    if (t === "yo") {
      const r = e.getFullYear(), i = r > 0 ? r : 1 - r;
      return n.ordinalNumber(i, { unit: "year" });
    }
    return Ut.y(e, t);
  },
  // Local week-numbering year
  Y: function(e, t, n, r) {
    const i = bf(e, r), o = i > 0 ? i : 1 - i;
    if (t === "YY") {
      const s = o % 100;
      return B(s, 2);
    }
    return t === "Yo" ? n.ordinalNumber(o, { unit: "year" }) : B(o, t.length);
  },
  // ISO week-numbering year
  R: function(e, t) {
    const n = Jf(e);
    return B(n, t.length);
  },
  // Extended year. This is a single number designating the year of this calendar system.
  // The main difference between `y` and `u` localizers are B.C. years:
  // | Year | `y` | `u` |
  // |------|-----|-----|
  // | AC 1 |   1 |   1 |
  // | BC 1 |   1 |   0 |
  // | BC 2 |   2 |  -1 |
  // Also `yy` always returns the last two digits of a year,
  // while `uu` pads single digit years to 2 characters and returns other years unchanged.
  u: function(e, t) {
    const n = e.getFullYear();
    return B(n, t.length);
  },
  // Quarter
  Q: function(e, t, n) {
    const r = Math.ceil((e.getMonth() + 1) / 3);
    switch (t) {
      case "Q":
        return String(r);
      case "QQ":
        return B(r, 2);
      case "Qo":
        return n.ordinalNumber(r, { unit: "quarter" });
      case "QQQ":
        return n.quarter(r, {
          width: "abbreviated",
          context: "formatting"
        });
      case "QQQQQ":
        return n.quarter(r, {
          width: "narrow",
          context: "formatting"
        });
      case "QQQQ":
      default:
        return n.quarter(r, {
          width: "wide",
          context: "formatting"
        });
    }
  },
  // Stand-alone quarter
  q: function(e, t, n) {
    const r = Math.ceil((e.getMonth() + 1) / 3);
    switch (t) {
      case "q":
        return String(r);
      case "qq":
        return B(r, 2);
      case "qo":
        return n.ordinalNumber(r, { unit: "quarter" });
      case "qqq":
        return n.quarter(r, {
          width: "abbreviated",
          context: "standalone"
        });
      case "qqqqq":
        return n.quarter(r, {
          width: "narrow",
          context: "standalone"
        });
      case "qqqq":
      default:
        return n.quarter(r, {
          width: "wide",
          context: "standalone"
        });
    }
  },
  // Month
  M: function(e, t, n) {
    const r = e.getMonth();
    switch (t) {
      case "M":
      case "MM":
        return Ut.M(e, t);
      case "Mo":
        return n.ordinalNumber(r + 1, { unit: "month" });
      case "MMM":
        return n.month(r, {
          width: "abbreviated",
          context: "formatting"
        });
      case "MMMMM":
        return n.month(r, {
          width: "narrow",
          context: "formatting"
        });
      case "MMMM":
      default:
        return n.month(r, { width: "wide", context: "formatting" });
    }
  },
  // Stand-alone month
  L: function(e, t, n) {
    const r = e.getMonth();
    switch (t) {
      case "L":
        return String(r + 1);
      case "LL":
        return B(r + 1, 2);
      case "Lo":
        return n.ordinalNumber(r + 1, { unit: "month" });
      case "LLL":
        return n.month(r, {
          width: "abbreviated",
          context: "standalone"
        });
      case "LLLLL":
        return n.month(r, {
          width: "narrow",
          context: "standalone"
        });
      case "LLLL":
      default:
        return n.month(r, { width: "wide", context: "standalone" });
    }
  },
  // Local week of year
  w: function(e, t, n, r) {
    const i = ay(e, r);
    return t === "wo" ? n.ordinalNumber(i, { unit: "week" }) : B(i, t.length);
  },
  // ISO week of year
  I: function(e, t, n) {
    const r = oy(e);
    return t === "Io" ? n.ordinalNumber(r, { unit: "week" }) : B(r, t.length);
  },
  // Day of the month
  d: function(e, t, n) {
    return t === "do" ? n.ordinalNumber(e.getDate(), { unit: "date" }) : Ut.d(e, t);
  },
  // Day of year
  D: function(e, t, n) {
    const r = iy(e);
    return t === "Do" ? n.ordinalNumber(r, { unit: "dayOfYear" }) : B(r, t.length);
  },
  // Day of week
  E: function(e, t, n) {
    const r = e.getDay();
    switch (t) {
      case "E":
      case "EE":
      case "EEE":
        return n.day(r, {
          width: "abbreviated",
          context: "formatting"
        });
      case "EEEEE":
        return n.day(r, {
          width: "narrow",
          context: "formatting"
        });
      case "EEEEEE":
        return n.day(r, {
          width: "short",
          context: "formatting"
        });
      case "EEEE":
      default:
        return n.day(r, {
          width: "wide",
          context: "formatting"
        });
    }
  },
  // Local day of week
  e: function(e, t, n, r) {
    const i = e.getDay(), o = (i - r.weekStartsOn + 8) % 7 || 7;
    switch (t) {
      case "e":
        return String(o);
      case "ee":
        return B(o, 2);
      case "eo":
        return n.ordinalNumber(o, { unit: "day" });
      case "eee":
        return n.day(i, {
          width: "abbreviated",
          context: "formatting"
        });
      case "eeeee":
        return n.day(i, {
          width: "narrow",
          context: "formatting"
        });
      case "eeeeee":
        return n.day(i, {
          width: "short",
          context: "formatting"
        });
      case "eeee":
      default:
        return n.day(i, {
          width: "wide",
          context: "formatting"
        });
    }
  },
  // Stand-alone local day of week
  c: function(e, t, n, r) {
    const i = e.getDay(), o = (i - r.weekStartsOn + 8) % 7 || 7;
    switch (t) {
      case "c":
        return String(o);
      case "cc":
        return B(o, t.length);
      case "co":
        return n.ordinalNumber(o, { unit: "day" });
      case "ccc":
        return n.day(i, {
          width: "abbreviated",
          context: "standalone"
        });
      case "ccccc":
        return n.day(i, {
          width: "narrow",
          context: "standalone"
        });
      case "cccccc":
        return n.day(i, {
          width: "short",
          context: "standalone"
        });
      case "cccc":
      default:
        return n.day(i, {
          width: "wide",
          context: "standalone"
        });
    }
  },
  // ISO day of week
  i: function(e, t, n) {
    const r = e.getDay(), i = r === 0 ? 7 : r;
    switch (t) {
      case "i":
        return String(i);
      case "ii":
        return B(i, t.length);
      case "io":
        return n.ordinalNumber(i, { unit: "day" });
      case "iii":
        return n.day(r, {
          width: "abbreviated",
          context: "formatting"
        });
      case "iiiii":
        return n.day(r, {
          width: "narrow",
          context: "formatting"
        });
      case "iiiiii":
        return n.day(r, {
          width: "short",
          context: "formatting"
        });
      case "iiii":
      default:
        return n.day(r, {
          width: "wide",
          context: "formatting"
        });
    }
  },
  // AM or PM
  a: function(e, t, n) {
    const i = e.getHours() / 12 >= 1 ? "pm" : "am";
    switch (t) {
      case "a":
      case "aa":
        return n.dayPeriod(i, {
          width: "abbreviated",
          context: "formatting"
        });
      case "aaa":
        return n.dayPeriod(i, {
          width: "abbreviated",
          context: "formatting"
        }).toLowerCase();
      case "aaaaa":
        return n.dayPeriod(i, {
          width: "narrow",
          context: "formatting"
        });
      case "aaaa":
      default:
        return n.dayPeriod(i, {
          width: "wide",
          context: "formatting"
        });
    }
  },
  // AM, PM, midnight, noon
  b: function(e, t, n) {
    const r = e.getHours();
    let i;
    switch (r === 12 ? i = Wn.noon : r === 0 ? i = Wn.midnight : i = r / 12 >= 1 ? "pm" : "am", t) {
      case "b":
      case "bb":
        return n.dayPeriod(i, {
          width: "abbreviated",
          context: "formatting"
        });
      case "bbb":
        return n.dayPeriod(i, {
          width: "abbreviated",
          context: "formatting"
        }).toLowerCase();
      case "bbbbb":
        return n.dayPeriod(i, {
          width: "narrow",
          context: "formatting"
        });
      case "bbbb":
      default:
        return n.dayPeriod(i, {
          width: "wide",
          context: "formatting"
        });
    }
  },
  // in the morning, in the afternoon, in the evening, at night
  B: function(e, t, n) {
    const r = e.getHours();
    let i;
    switch (r >= 17 ? i = Wn.evening : r >= 12 ? i = Wn.afternoon : r >= 4 ? i = Wn.morning : i = Wn.night, t) {
      case "B":
      case "BB":
      case "BBB":
        return n.dayPeriod(i, {
          width: "abbreviated",
          context: "formatting"
        });
      case "BBBBB":
        return n.dayPeriod(i, {
          width: "narrow",
          context: "formatting"
        });
      case "BBBB":
      default:
        return n.dayPeriod(i, {
          width: "wide",
          context: "formatting"
        });
    }
  },
  // Hour [1-12]
  h: function(e, t, n) {
    if (t === "ho") {
      let r = e.getHours() % 12;
      return r === 0 && (r = 12), n.ordinalNumber(r, { unit: "hour" });
    }
    return Ut.h(e, t);
  },
  // Hour [0-23]
  H: function(e, t, n) {
    return t === "Ho" ? n.ordinalNumber(e.getHours(), { unit: "hour" }) : Ut.H(e, t);
  },
  // Hour [0-11]
  K: function(e, t, n) {
    const r = e.getHours() % 12;
    return t === "Ko" ? n.ordinalNumber(r, { unit: "hour" }) : B(r, t.length);
  },
  // Hour [1-24]
  k: function(e, t, n) {
    let r = e.getHours();
    return r === 0 && (r = 24), t === "ko" ? n.ordinalNumber(r, { unit: "hour" }) : B(r, t.length);
  },
  // Minute
  m: function(e, t, n) {
    return t === "mo" ? n.ordinalNumber(e.getMinutes(), { unit: "minute" }) : Ut.m(e, t);
  },
  // Second
  s: function(e, t, n) {
    return t === "so" ? n.ordinalNumber(e.getSeconds(), { unit: "second" }) : Ut.s(e, t);
  },
  // Fraction of second
  S: function(e, t) {
    return Ut.S(e, t);
  },
  // Timezone (ISO-8601. If offset is 0, output is always `'Z'`)
  X: function(e, t, n, r) {
    const o = (r._originalDate || e).getTimezoneOffset();
    if (o === 0)
      return "Z";
    switch (t) {
      case "X":
        return dc(o);
      case "XXXX":
      case "XX":
        return gn(o);
      case "XXXXX":
      case "XXX":
      default:
        return gn(o, ":");
    }
  },
  // Timezone (ISO-8601. If offset is 0, output is `'+00:00'` or equivalent)
  x: function(e, t, n, r) {
    const o = (r._originalDate || e).getTimezoneOffset();
    switch (t) {
      case "x":
        return dc(o);
      case "xxxx":
      case "xx":
        return gn(o);
      case "xxxxx":
      case "xxx":
      default:
        return gn(o, ":");
    }
  },
  // Timezone (GMT)
  O: function(e, t, n, r) {
    const o = (r._originalDate || e).getTimezoneOffset();
    switch (t) {
      case "O":
      case "OO":
      case "OOO":
        return "GMT" + cc(o, ":");
      case "OOOO":
      default:
        return "GMT" + gn(o, ":");
    }
  },
  // Timezone (specific non-location)
  z: function(e, t, n, r) {
    const o = (r._originalDate || e).getTimezoneOffset();
    switch (t) {
      case "z":
      case "zz":
      case "zzz":
        return "GMT" + cc(o, ":");
      case "zzzz":
      default:
        return "GMT" + gn(o, ":");
    }
  },
  // Seconds timestamp
  t: function(e, t, n, r) {
    const i = r._originalDate || e, o = Math.floor(i.getTime() / 1e3);
    return B(o, t.length);
  },
  // Milliseconds timestamp
  T: function(e, t, n, r) {
    const o = (r._originalDate || e).getTime();
    return B(o, t.length);
  }
};
function cc(e, t = "") {
  const n = e > 0 ? "-" : "+", r = Math.abs(e), i = Math.floor(r / 60), o = r % 60;
  return o === 0 ? n + String(i) : n + String(i) + t + B(o, 2);
}
function dc(e, t) {
  return e % 60 === 0 ? (e > 0 ? "-" : "+") + B(Math.abs(e) / 60, 2) : gn(e, t);
}
function gn(e, t = "") {
  const n = e > 0 ? "-" : "+", r = Math.abs(e), i = B(Math.floor(r / 60), 2), o = B(r % 60, 2);
  return n + i + t + o;
}
const fc = (e, t) => {
  switch (e) {
    case "P":
      return t.date({ width: "short" });
    case "PP":
      return t.date({ width: "medium" });
    case "PPP":
      return t.date({ width: "long" });
    case "PPPP":
    default:
      return t.date({ width: "full" });
  }
}, ep = (e, t) => {
  switch (e) {
    case "p":
      return t.time({ width: "short" });
    case "pp":
      return t.time({ width: "medium" });
    case "ppp":
      return t.time({ width: "long" });
    case "pppp":
    default:
      return t.time({ width: "full" });
  }
}, uy = (e, t) => {
  const n = e.match(/(P+)(p+)?/) || [], r = n[1], i = n[2];
  if (!i)
    return fc(e, t);
  let o;
  switch (r) {
    case "P":
      o = t.dateTime({ width: "short" });
      break;
    case "PP":
      o = t.dateTime({ width: "medium" });
      break;
    case "PPP":
      o = t.dateTime({ width: "long" });
      break;
    case "PPPP":
    default:
      o = t.dateTime({ width: "full" });
      break;
  }
  return o.replace("{{date}}", fc(r, t)).replace("{{time}}", ep(i, t));
}, cy = {
  p: ep,
  P: uy
}, dy = /^D+$/, fy = /^Y+$/, py = ["D", "DD", "YY", "YYYY"];
function hy(e) {
  return dy.test(e);
}
function my(e) {
  return fy.test(e);
}
function pc(e, t, n) {
  const r = vy(e, t, n);
  if (console.warn(r), py.includes(e))
    throw new RangeError(r);
}
function vy(e, t, n) {
  const r = e[0] === "Y" ? "years" : "days of the month";
  return `Use \`${e.toLowerCase()}\` instead of \`${e}\` (in \`${t}\`) for formatting ${r} to the input \`${n}\`; see: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md`;
}
const yy = /[yYQqMLwIdDecihHKkms]o|(\w)\1*|''|'(''|[^'])+('|$)|./g, gy = /P+p+|P+|p+|''|'(''|[^'])+('|$)|./g, wy = /^'([^]*?)'?$/, _y = /''/g, ky = /[a-zA-Z]/;
function tp(e, t, n) {
  var p, h, m, y, w, k, F, d;
  const r = as(), i = (n == null ? void 0 : n.locale) ?? r.locale ?? ry, o = (n == null ? void 0 : n.firstWeekContainsDate) ?? ((h = (p = n == null ? void 0 : n.locale) == null ? void 0 : p.options) == null ? void 0 : h.firstWeekContainsDate) ?? r.firstWeekContainsDate ?? ((y = (m = r.locale) == null ? void 0 : m.options) == null ? void 0 : y.firstWeekContainsDate) ?? 1, s = (n == null ? void 0 : n.weekStartsOn) ?? ((k = (w = n == null ? void 0 : n.locale) == null ? void 0 : w.options) == null ? void 0 : k.weekStartsOn) ?? r.weekStartsOn ?? ((d = (F = r.locale) == null ? void 0 : F.options) == null ? void 0 : d.weekStartsOn) ?? 0, a = St(e);
  if (!xv(a))
    throw new RangeError("Invalid time value");
  const l = {
    firstWeekContainsDate: o,
    weekStartsOn: s,
    locale: i,
    _originalDate: a
  };
  return t.match(gy).map(function(c) {
    const f = c[0];
    if (f === "p" || f === "P") {
      const v = cy[f];
      return v(c, i.formatLong);
    }
    return c;
  }).join("").match(yy).map(function(c) {
    if (c === "''")
      return "'";
    const f = c[0];
    if (f === "'")
      return Sy(c);
    const v = ly[f];
    if (v)
      return !(n != null && n.useAdditionalWeekYearTokens) && my(c) && pc(c, t, String(e)), !(n != null && n.useAdditionalDayOfYearTokens) && hy(c) && pc(c, t, String(e)), v(
        a,
        c,
        i.localize,
        l
      );
    if (f.match(ky))
      throw new RangeError(
        "Format string contains an unescaped latin alphabet character `" + f + "`"
      );
    return c;
  }).join("");
}
function Sy(e) {
  const t = e.match(wy);
  return t ? t[1].replace(_y, "'") : e;
}
const hc = (e) => {
  const t = new Date(e);
  return tp(t, "d.M.yyyy");
}, xy = (e) => {
  const t = new Date(e);
  return tp(t, "d.M.yyyy HH:mm");
}, Hs = (e, t) => {
  switch (!0) {
    case "OnTrackCount" in e:
      return (e.OnTrackOnDateCount / e.MemberCount * 100).toLocaleString("fi-FI", { maximumFractionDigits: 1 }) + "%";
    case ("ContributionAmount" in e && "MemberCount" in e):
      return (e.ContributionAmount / ((t || 200) * e.MemberCount) * 100).toLocaleString("fi-FI", { maximumFractionDigits: 1 }) + "%";
    default:
      return e.ContributionAmount.toLocaleString("fi-FI", {
        maximumFractionDigits: 1
      }) + "€";
  }
}, Ey = (e, t) => {
  const n = e.AHStatus.ContributionAmount, r = e.BUKStatus.OnTrackOnDateCount / e.BUKStatus.MemberCount, i = e.SamvirkStatus.ContributionAmount / ((t || 200) * e.SamvirkStatus.MemberCount);
  return (n * r * i).toLocaleString("fi-FI", { maximumFractionDigits: 1 }) + "p";
}, Cy = "data:image/svg+xml,%3csvg%20width='328'%20height='145'%20viewBox='0%200%20328%20145'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20d='M0.707031%2045.81L142.59%2021.2011L151.585%2024.3149V19.1253L258.172%200L325.896%2032.7566L327.705%2047.699L282.016%20100.083L255.722%20105.618L239.116%20100.429L235.31%20108.386L29.3534%20145L14.84%20125.688L7.49499%2084.4827L10.7679%2074.235L4.44352%2074.6848L0.707031%2045.81Z'%20fill='black'/%3e%3cpath%20d='M15.9367%2066.6666L11.1727%2083.4531L18.3101%20123.499L29.2877%20130.934L230.467%2093.8565L234.272%2085.8991L254.339%2091.4347L272.675%2086.2451L317.305%2035.3873L255.325%205.11138L155.194%2022.7801L155.045%2030.5437L141.389%2025.2158L5.15625%2049.2573L8.29767%2067.2098L15.9367%2066.6666Z'%20fill='%23FFFF00'/%3e%3cpath%20d='M106.215%2048.601L94.7594%20102.496L75.1463%20105.956L69.2579%2077.538L63.4905%20108.011L43.8774%20111.471L32.3047%2061.6337L49.2884%2058.6376L53.8795%2090.5085L60.657%2056.6345L77.8518%2053.6003L84.6501%2085.0802L89.2239%2051.5937L106.215%2048.601Z'%20fill='black'/%3e%3cpath%20d='M143.793%2043.9891C147.63%2045.2415%20150.768%2047.4004%20153.214%2050.4622C155.657%2053.5241%20157.272%2057.2813%20158.061%2061.734C158.386%2063.5814%20158.559%2065.678%20158.583%2068.0168C158.57%2072.6597%20157.639%2076.9394%20155.791%2080.8558C153.94%2084.7722%20151.256%2088.0416%20147.737%2090.6641C144.219%2093.29%20140.022%2095.0302%20135.14%2095.8883C130.214%2096.7566%20125.834%2096.5767%20122%2095.3485C118.167%2094.1169%20115.043%2091.9857%20112.628%2088.9411C110.21%2085.8966%20108.608%2082.1497%20107.826%2077.6971C107.418%2075.3756%20107.227%2073.2133%20107.266%2071.1997C107.279%2066.5568%20108.22%2062.291%20110.099%2058.3919C111.978%2054.4928%20114.687%2051.2337%20118.229%2048.6044C121.772%2045.9784%20125.983%2044.2313%20130.864%2043.3733C135.646%2042.5326%20139.956%2042.7367%20143.793%2043.9891ZM125.398%2062.2529C123.786%2064.4671%20122.983%2067.2591%20122.99%2070.6289C122.966%2071.608%20123.052%2072.6459%20123.246%2073.7357C123.73%2076.4827%20124.855%2078.5067%20126.626%2079.8075C128.394%2081.1084%20130.747%2081.4993%20133.684%2080.9803C136.621%2080.4614%20138.908%2079.0844%20140.538%2076.8425C142.171%2074.6041%20142.966%2071.8467%20142.928%2068.5842C142.942%2067.5532%20142.852%2066.498%20142.662%2065.4082C142.171%2062.6127%20141.039%2060.575%20139.275%2059.2983C137.514%2058.0217%20135.185%2057.6377%20132.297%2058.1462C129.311%2058.6721%20127.01%2060.0422%20125.398%2062.2529Z'%20fill='black'/%3e%3cpath%20d='M200.34%2035.773C203.589%2037.7174%20205.568%2040.6996%20206.28%2044.7267C206.481%2045.865%20206.571%2046.9237%20206.547%2047.9062C206.533%2051.4247%20205.581%2054.6838%20203.689%2057.6799C201.8%2060.676%20199.108%2063.0667%20195.61%2064.8553L206.612%2082.7732L189.272%2085.8316L179.692%2068.9101L179.748%2087.513L163.971%2090.2946L163.913%2038.4266L187.366%2034.2923C192.767%2033.3374%20197.091%2033.8321%20200.34%2035.773ZM179.689%2058.0639L185.944%2056.9603C189.023%2056.4171%20190.549%2054.6838%20190.521%2051.7569C190.525%2051.5112%20190.497%2051.1999%20190.431%2050.8193C190.248%2049.7779%20189.784%2049.0168%20189.04%2048.5359C188.297%2048.055%20187.283%2047.9304%20186.006%2048.1553L179.751%2049.259L179.689%2058.0639Z'%20fill='black'/%3e%3cpath%20d='M242.344%2049.8035L260.975%2073.1911L242.001%2076.5367L227.353%2056.6191L227.363%2079.1142L211.587%2081.8958L211.528%2030.0278L227.305%2027.2461L227.357%2049.1461L242.085%2024.641L260.916%2021.3197L242.344%2049.8035Z'%20fill='black'/%3e%3c/svg%3e", Ty = "_app_10kin_1", Ny = "_workLogoWrapper_10kin_10", Oy = "_workLogo_10kin_10", Py = "_reports_10kin_20", Ry = "_report_10kin_20", Ly = "_reportTitle_10kin_32", Dy = "_reportTable_10kin_44", My = "_teamLogo_10kin_60", Iy = "_teamGreen_10kin_112", jy = "_teamOrange_10kin_116", zy = "_teamRed_10kin_120", Ay = "_teamBlue_10kin_124", yt = {
  app: Ty,
  workLogoWrapper: Ny,
  workLogo: Oy,
  reports: Py,
  report: Ry,
  reportTitle: Ly,
  reportTable: Dy,
  teamLogo: My,
  teamGreen: Iy,
  teamOrange: jy,
  teamRed: zy,
  teamBlue: Ay
}, Fy = {
  Title: "Ladataan...",
  DateFrom: (/* @__PURE__ */ new Date()).toISOString(),
  DateTo: (/* @__PURE__ */ new Date()).toISOString(),
  MyShareTargetOnDate: 0,
  MyShareNextThreshold: 0,
  SamvirkGoalPerSprint: 0,
  SamvirkGoalPerMonth: 0,
  Teams: [
    {
      Name: "Orange",
      MemberCount: 0,
      BUKStatus: {
        MemberCount: 0,
        OnTrackCount: 0,
        OnTrackOnDateCount: 0
      },
      SamvirkStatus: {
        MemberCount: 0,
        ContributionAmount: 0
      },
      AHStatus: {
        ContributionAmount: 0
      }
    },
    {
      Name: "Blue",
      MemberCount: 0,
      BUKStatus: {
        MemberCount: 0,
        OnTrackCount: 0,
        OnTrackOnDateCount: 0
      },
      SamvirkStatus: {
        MemberCount: 0,
        ContributionAmount: 0
      },
      AHStatus: {
        ContributionAmount: 0
      }
    },
    {
      Name: "Red",
      MemberCount: 0,
      BUKStatus: {
        MemberCount: 0,
        OnTrackCount: 0,
        OnTrackOnDateCount: 0
      },
      SamvirkStatus: {
        MemberCount: 0,
        ContributionAmount: 0
      },
      AHStatus: {
        ContributionAmount: 0
      }
    },
    {
      Name: "Green",
      MemberCount: 0,
      BUKStatus: {
        MemberCount: 0,
        OnTrackCount: 0,
        OnTrackOnDateCount: 0
      },
      SamvirkStatus: {
        MemberCount: 0,
        ContributionAmount: 0
      },
      AHStatus: {
        ContributionAmount: 0
      }
    }
  ],
  ReportDate: (/* @__PURE__ */ new Date()).toISOString()
}, Vy = async (e) => {
  let t;
  return t = await (await fetch(e)).json(), yv.parse(t);
}, Wy = () => {
  var i;
  const e = (i = document.getElementById("work-root")) == null ? void 0 : i.getAttribute("data-source-url"), { data: t, error: n, isLoading: r } = v0(e, Vy, {
    revalidateIfStale: !1,
    revalidateOnFocus: !1,
    shouldRetryOnError: !1
  });
  return /* @__PURE__ */ Z.jsx("div", { className: yt.app, children: /* @__PURE__ */ Z.jsxs("div", { children: [
    /* @__PURE__ */ Z.jsx("div", { className: yt.workLogoWrapper, children: /* @__PURE__ */ Z.jsx("img", { src: Cy, alt: "Work logo", className: yt.workLogo }) }),
    /* @__PURE__ */ Z.jsxs("ul", { className: yt.reports, children: [
      n && /* @__PURE__ */ Z.jsxs("li", { className: yt.error, children: [
        "Virhe: ",
        `${n}`
      ] }),
      r && /* @__PURE__ */ Z.jsx(mc, { report: Fy, isLoading: r }),
      t && t.map((o) => /* @__PURE__ */ Z.jsx(
        mc,
        {
          report: o,
          isLoading: r
        },
        o.Title
      ))
    ] })
  ] }) });
}, mc = ({
  report: e,
  isLoading: t
}) => /* @__PURE__ */ Z.jsxs("li", { className: yt.report, children: [
  /* @__PURE__ */ Z.jsx("h2", { className: yt.reportTitle, children: e.Title }),
  /* @__PURE__ */ Z.jsxs("p", { children: [
    hc(e.DateFrom),
    " – ",
    hc(e.DateTo)
  ] }),
  /* @__PURE__ */ Z.jsxs("p", { children: [
    "MyShare tavoite raportointihetkellä: ",
    e.MyShareTargetOnDate,
    "%"
  ] }),
  /* @__PURE__ */ Z.jsxs("table", { className: yt.reportTable, cellPadding: 6, children: [
    /* @__PURE__ */ Z.jsx("thead", { children: /* @__PURE__ */ Z.jsxs("tr", { children: [
      /* @__PURE__ */ Z.jsx("td", {}),
      /* @__PURE__ */ Z.jsx("td", { children: "AH" }),
      /* @__PURE__ */ Z.jsx("td", { children: "BUK" }),
      /* @__PURE__ */ Z.jsx("td", { children: "Samvirk" }),
      /* @__PURE__ */ Z.jsx("td", { children: "Tulos" })
    ] }) }),
    /* @__PURE__ */ Z.jsx("tbody", { children: e.Teams.map((n) => /* @__PURE__ */ Z.jsxs("tr", { children: [
      /* @__PURE__ */ Z.jsx("td", { children: /* @__PURE__ */ Z.jsx(
        "div",
        {
          className: `${yt.teamLogo} ${yt["team" + n.Name]}`
        }
      ) }),
      /* @__PURE__ */ Z.jsx("td", { children: t ? "–" : Hs(n.AHStatus) }),
      /* @__PURE__ */ Z.jsx("td", { children: t ? "–" : Hs(n.BUKStatus) }),
      /* @__PURE__ */ Z.jsx("td", { children: t ? "–" : Hs(
        n.SamvirkStatus,
        e.SamvirkGoalPerSprint
      ) }),
      /* @__PURE__ */ Z.jsx("td", { children: t ? "–" : Ey(n, e.SamvirkGoalPerSprint) })
    ] }, n.Name)) })
  ] }),
  /* @__PURE__ */ Z.jsxs("p", { children: [
    "Tulokset päivitetty: ",
    xy(e.ReportDate)
  ] })
] }), $y = document.getElementById("work-root"), Uy = Rf($y);
Uy.render(
  /* @__PURE__ */ Z.jsx(Zo.StrictMode, { children: /* @__PURE__ */ Z.jsx(Wy, {}) })
);
