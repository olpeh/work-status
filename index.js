function np(e) {
  return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default") ? e.default : e;
}
var hc = { exports: {} }, $o = {}, mc = { exports: {} }, V = {};
/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Si = Symbol.for("react.element"), rp = Symbol.for("react.portal"), ip = Symbol.for("react.fragment"), op = Symbol.for("react.strict_mode"), sp = Symbol.for("react.profiler"), lp = Symbol.for("react.provider"), ap = Symbol.for("react.context"), up = Symbol.for("react.forward_ref"), cp = Symbol.for("react.suspense"), dp = Symbol.for("react.memo"), fp = Symbol.for("react.lazy"), Ya = Symbol.iterator;
function pp(e) {
  return e === null || typeof e != "object" ? null : (e = Ya && e[Ya] || e["@@iterator"], typeof e == "function" ? e : null);
}
var vc = { isMounted: function() {
  return !1;
}, enqueueForceUpdate: function() {
}, enqueueReplaceState: function() {
}, enqueueSetState: function() {
} }, yc = Object.assign, gc = {};
function vr(e, t, n) {
  this.props = e, this.context = t, this.refs = gc, this.updater = n || vc;
}
vr.prototype.isReactComponent = {};
vr.prototype.setState = function(e, t) {
  if (typeof e != "object" && typeof e != "function" && e != null)
    throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");
  this.updater.enqueueSetState(this, e, t, "setState");
};
vr.prototype.forceUpdate = function(e) {
  this.updater.enqueueForceUpdate(this, e, "forceUpdate");
};
function wc() {
}
wc.prototype = vr.prototype;
function Yl(e, t, n) {
  this.props = e, this.context = t, this.refs = gc, this.updater = n || vc;
}
var Ql = Yl.prototype = new wc();
Ql.constructor = Yl;
yc(Ql, vr.prototype);
Ql.isPureReactComponent = !0;
var Qa = Array.isArray, _c = Object.prototype.hasOwnProperty, Xl = { current: null }, kc = { key: !0, ref: !0, __self: !0, __source: !0 };
function Sc(e, t, n) {
  var r, i = {}, o = null, s = null;
  if (t != null)
    for (r in t.ref !== void 0 && (s = t.ref), t.key !== void 0 && (o = "" + t.key), t)
      _c.call(t, r) && !kc.hasOwnProperty(r) && (i[r] = t[r]);
  var l = arguments.length - 2;
  if (l === 1)
    i.children = n;
  else if (1 < l) {
    for (var a = Array(l), u = 0; u < l; u++)
      a[u] = arguments[u + 2];
    i.children = a;
  }
  if (e && e.defaultProps)
    for (r in l = e.defaultProps, l)
      i[r] === void 0 && (i[r] = l[r]);
  return { $$typeof: Si, type: e, key: o, ref: s, props: i, _owner: Xl.current };
}
function hp(e, t) {
  return { $$typeof: Si, type: e.type, key: t, ref: e.ref, props: e.props, _owner: e._owner };
}
function Kl(e) {
  return typeof e == "object" && e !== null && e.$$typeof === Si;
}
function mp(e) {
  var t = { "=": "=0", ":": "=2" };
  return "$" + e.replace(/[=:]/g, function(n) {
    return t[n];
  });
}
var Xa = /\/+/g;
function cs(e, t) {
  return typeof e == "object" && e !== null && e.key != null ? mp("" + e.key) : t.toString(36);
}
function Qi(e, t, n, r, i) {
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
          case Si:
          case rp:
            s = !0;
        }
    }
  if (s)
    return s = e, i = i(s), e = r === "" ? "." + cs(s, 0) : r, Qa(i) ? (n = "", e != null && (n = e.replace(Xa, "$&/") + "/"), Qi(i, t, n, "", function(u) {
      return u;
    })) : i != null && (Kl(i) && (i = hp(i, n + (!i.key || s && s.key === i.key ? "" : ("" + i.key).replace(Xa, "$&/") + "/") + e)), t.push(i)), 1;
  if (s = 0, r = r === "" ? "." : r + ":", Qa(e))
    for (var l = 0; l < e.length; l++) {
      o = e[l];
      var a = r + cs(o, l);
      s += Qi(o, t, n, a, i);
    }
  else if (a = pp(e), typeof a == "function")
    for (e = a.call(e), l = 0; !(o = e.next()).done; )
      o = o.value, a = r + cs(o, l++), s += Qi(o, t, n, a, i);
  else if (o === "object")
    throw t = String(e), Error("Objects are not valid as a React child (found: " + (t === "[object Object]" ? "object with keys {" + Object.keys(e).join(", ") + "}" : t) + "). If you meant to render a collection of children, use an array instead.");
  return s;
}
function Oi(e, t, n) {
  if (e == null)
    return e;
  var r = [], i = 0;
  return Qi(e, r, "", "", function(o) {
    return t.call(n, o, i++);
  }), r;
}
function vp(e) {
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
var De = { current: null }, Xi = { transition: null }, yp = { ReactCurrentDispatcher: De, ReactCurrentBatchConfig: Xi, ReactCurrentOwner: Xl };
V.Children = { map: Oi, forEach: function(e, t, n) {
  Oi(e, function() {
    t.apply(this, arguments);
  }, n);
}, count: function(e) {
  var t = 0;
  return Oi(e, function() {
    t++;
  }), t;
}, toArray: function(e) {
  return Oi(e, function(t) {
    return t;
  }) || [];
}, only: function(e) {
  if (!Kl(e))
    throw Error("React.Children.only expected to receive a single React element child.");
  return e;
} };
V.Component = vr;
V.Fragment = ip;
V.Profiler = sp;
V.PureComponent = Yl;
V.StrictMode = op;
V.Suspense = cp;
V.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = yp;
V.cloneElement = function(e, t, n) {
  if (e == null)
    throw Error("React.cloneElement(...): The argument must be a React element, but you passed " + e + ".");
  var r = yc({}, e.props), i = e.key, o = e.ref, s = e._owner;
  if (t != null) {
    if (t.ref !== void 0 && (o = t.ref, s = Xl.current), t.key !== void 0 && (i = "" + t.key), e.type && e.type.defaultProps)
      var l = e.type.defaultProps;
    for (a in t)
      _c.call(t, a) && !kc.hasOwnProperty(a) && (r[a] = t[a] === void 0 && l !== void 0 ? l[a] : t[a]);
  }
  var a = arguments.length - 2;
  if (a === 1)
    r.children = n;
  else if (1 < a) {
    l = Array(a);
    for (var u = 0; u < a; u++)
      l[u] = arguments[u + 2];
    r.children = l;
  }
  return { $$typeof: Si, type: e.type, key: i, ref: o, props: r, _owner: s };
};
V.createContext = function(e) {
  return e = { $$typeof: ap, _currentValue: e, _currentValue2: e, _threadCount: 0, Provider: null, Consumer: null, _defaultValue: null, _globalName: null }, e.Provider = { $$typeof: lp, _context: e }, e.Consumer = e;
};
V.createElement = Sc;
V.createFactory = function(e) {
  var t = Sc.bind(null, e);
  return t.type = e, t;
};
V.createRef = function() {
  return { current: null };
};
V.forwardRef = function(e) {
  return { $$typeof: up, render: e };
};
V.isValidElement = Kl;
V.lazy = function(e) {
  return { $$typeof: fp, _payload: { _status: -1, _result: e }, _init: vp };
};
V.memo = function(e, t) {
  return { $$typeof: dp, type: e, compare: t === void 0 ? null : t };
};
V.startTransition = function(e) {
  var t = Xi.transition;
  Xi.transition = {};
  try {
    e();
  } finally {
    Xi.transition = t;
  }
};
V.unstable_act = function() {
  throw Error("act(...) is not supported in production builds of React.");
};
V.useCallback = function(e, t) {
  return De.current.useCallback(e, t);
};
V.useContext = function(e) {
  return De.current.useContext(e);
};
V.useDebugValue = function() {
};
V.useDeferredValue = function(e) {
  return De.current.useDeferredValue(e);
};
V.useEffect = function(e, t) {
  return De.current.useEffect(e, t);
};
V.useId = function() {
  return De.current.useId();
};
V.useImperativeHandle = function(e, t, n) {
  return De.current.useImperativeHandle(e, t, n);
};
V.useInsertionEffect = function(e, t) {
  return De.current.useInsertionEffect(e, t);
};
V.useLayoutEffect = function(e, t) {
  return De.current.useLayoutEffect(e, t);
};
V.useMemo = function(e, t) {
  return De.current.useMemo(e, t);
};
V.useReducer = function(e, t, n) {
  return De.current.useReducer(e, t, n);
};
V.useRef = function(e) {
  return De.current.useRef(e);
};
V.useState = function(e) {
  return De.current.useState(e);
};
V.useSyncExternalStore = function(e, t, n) {
  return De.current.useSyncExternalStore(e, t, n);
};
V.useTransition = function() {
  return De.current.useTransition();
};
V.version = "18.2.0";
mc.exports = V;
var ae = mc.exports;
const Uo = /* @__PURE__ */ np(ae);
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var gp = ae, wp = Symbol.for("react.element"), _p = Symbol.for("react.fragment"), kp = Object.prototype.hasOwnProperty, Sp = gp.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner, xp = { key: !0, ref: !0, __self: !0, __source: !0 };
function xc(e, t, n) {
  var r, i = {}, o = null, s = null;
  n !== void 0 && (o = "" + n), t.key !== void 0 && (o = "" + t.key), t.ref !== void 0 && (s = t.ref);
  for (r in t)
    kp.call(t, r) && !xp.hasOwnProperty(r) && (i[r] = t[r]);
  if (e && e.defaultProps)
    for (r in t = e.defaultProps, t)
      i[r] === void 0 && (i[r] = t[r]);
  return { $$typeof: wp, type: e, key: o, ref: s, props: i, _owner: Sp.current };
}
$o.Fragment = _p;
$o.jsx = xc;
$o.jsxs = xc;
hc.exports = $o;
var Q = hc.exports, Ec = { exports: {} }, Be = {}, Cc = { exports: {} }, Tc = {};
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
  function t(T, L) {
    var z = T.length;
    T.push(L);
    e:
      for (; 0 < z; ) {
        var Y = z - 1 >>> 1, K = T[Y];
        if (0 < i(K, L))
          T[Y] = L, T[z] = K, z = Y;
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
    var L = T[0], z = T.pop();
    if (z !== L) {
      T[0] = z;
      e:
        for (var Y = 0, K = T.length, St = K >>> 1; Y < St; ) {
          var dt = 2 * (Y + 1) - 1, Vt = T[dt], ft = dt + 1, hn = T[ft];
          if (0 > i(Vt, z))
            ft < K && 0 > i(hn, Vt) ? (T[Y] = hn, T[ft] = z, Y = ft) : (T[Y] = Vt, T[dt] = z, Y = dt);
          else if (ft < K && 0 > i(hn, z))
            T[Y] = hn, T[ft] = z, Y = ft;
          else
            break e;
        }
    }
    return L;
  }
  function i(T, L) {
    var z = T.sortIndex - L.sortIndex;
    return z !== 0 ? z : T.id - L.id;
  }
  if (typeof performance == "object" && typeof performance.now == "function") {
    var o = performance;
    e.unstable_now = function() {
      return o.now();
    };
  } else {
    var s = Date, l = s.now();
    e.unstable_now = function() {
      return s.now() - l;
    };
  }
  var a = [], u = [], p = 1, h = null, m = 3, y = !1, w = !1, k = !1, F = typeof setTimeout == "function" ? setTimeout : null, d = typeof clearTimeout == "function" ? clearTimeout : null, c = typeof setImmediate < "u" ? setImmediate : null;
  typeof navigator < "u" && navigator.scheduling !== void 0 && navigator.scheduling.isInputPending !== void 0 && navigator.scheduling.isInputPending.bind(navigator.scheduling);
  function f(T) {
    for (var L = n(u); L !== null; ) {
      if (L.callback === null)
        r(u);
      else if (L.startTime <= T)
        r(u), L.sortIndex = L.expirationTime, t(a, L);
      else
        break;
      L = n(u);
    }
  }
  function v(T) {
    if (k = !1, f(T), !w)
      if (n(a) !== null)
        w = !0, jn(x);
      else {
        var L = n(u);
        L !== null && zn(v, L.startTime - T);
      }
  }
  function x(T, L) {
    w = !1, k && (k = !1, d(E), E = -1), y = !0;
    var z = m;
    try {
      for (f(L), h = n(a); h !== null && (!(h.expirationTime > L) || T && !pe()); ) {
        var Y = h.callback;
        if (typeof Y == "function") {
          h.callback = null, m = h.priorityLevel;
          var K = Y(h.expirationTime <= L);
          L = e.unstable_now(), typeof K == "function" ? h.callback = K : h === n(a) && r(a), f(L);
        } else
          r(a);
        h = n(a);
      }
      if (h !== null)
        var St = !0;
      else {
        var dt = n(u);
        dt !== null && zn(v, dt.startTime - L), St = !1;
      }
      return St;
    } finally {
      h = null, m = z, y = !1;
    }
  }
  var S = !1, C = null, E = -1, H = 5, M = -1;
  function pe() {
    return !(e.unstable_now() - M < H);
  }
  function ct() {
    if (C !== null) {
      var T = e.unstable_now();
      M = T;
      var L = !0;
      try {
        L = C(!0, T);
      } finally {
        L ? Ve() : (S = !1, C = null);
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
  function jn(T) {
    C = T, S || (S = !0, Ve());
  }
  function zn(T, L) {
    E = F(function() {
      T(e.unstable_now());
    }, L);
  }
  e.unstable_IdlePriority = 5, e.unstable_ImmediatePriority = 1, e.unstable_LowPriority = 4, e.unstable_NormalPriority = 3, e.unstable_Profiling = null, e.unstable_UserBlockingPriority = 2, e.unstable_cancelCallback = function(T) {
    T.callback = null;
  }, e.unstable_continueExecution = function() {
    w || y || (w = !0, jn(x));
  }, e.unstable_forceFrameRate = function(T) {
    0 > T || 125 < T ? console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported") : H = 0 < T ? Math.floor(1e3 / T) : 5;
  }, e.unstable_getCurrentPriorityLevel = function() {
    return m;
  }, e.unstable_getFirstCallbackNode = function() {
    return n(a);
  }, e.unstable_next = function(T) {
    switch (m) {
      case 1:
      case 2:
      case 3:
        var L = 3;
        break;
      default:
        L = m;
    }
    var z = m;
    m = L;
    try {
      return T();
    } finally {
      m = z;
    }
  }, e.unstable_pauseExecution = function() {
  }, e.unstable_requestPaint = function() {
  }, e.unstable_runWithPriority = function(T, L) {
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
      return L();
    } finally {
      m = z;
    }
  }, e.unstable_scheduleCallback = function(T, L, z) {
    var Y = e.unstable_now();
    switch (typeof z == "object" && z !== null ? (z = z.delay, z = typeof z == "number" && 0 < z ? Y + z : Y) : z = Y, T) {
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
    return K = z + K, T = { id: p++, callback: L, priorityLevel: T, startTime: z, expirationTime: K, sortIndex: -1 }, z > Y ? (T.sortIndex = z, t(u, T), n(a) === null && T === n(u) && (k ? (d(E), E = -1) : k = !0, zn(v, z - Y))) : (T.sortIndex = K, t(a, T), w || y || (w = !0, jn(x))), T;
  }, e.unstable_shouldYield = pe, e.unstable_wrapCallback = function(T) {
    var L = m;
    return function() {
      var z = m;
      m = L;
      try {
        return T.apply(this, arguments);
      } finally {
        m = z;
      }
    };
  };
})(Tc);
Cc.exports = Tc;
var Ep = Cc.exports;
/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Nc = ae, Ze = Ep;
function g(e) {
  for (var t = "https://reactjs.org/docs/error-decoder.html?invariant=" + e, n = 1; n < arguments.length; n++)
    t += "&args[]=" + encodeURIComponent(arguments[n]);
  return "Minified React error #" + e + "; visit " + t + " for the full message or use the non-minified dev environment for full errors and additional helpful warnings.";
}
var Oc = /* @__PURE__ */ new Set(), Br = {};
function Ln(e, t) {
  sr(e, t), sr(e + "Capture", t);
}
function sr(e, t) {
  for (Br[e] = t, e = 0; e < t.length; e++)
    Oc.add(t[e]);
}
var Lt = !(typeof window > "u" || typeof window.document > "u" || typeof window.document.createElement > "u"), Hs = Object.prototype.hasOwnProperty, Cp = /^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/, Ka = {}, Ga = {};
function Tp(e) {
  return Hs.call(Ga, e) ? !0 : Hs.call(Ka, e) ? !1 : Cp.test(e) ? Ga[e] = !0 : (Ka[e] = !0, !1);
}
function Np(e, t, n, r) {
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
function Op(e, t, n, r) {
  if (t === null || typeof t > "u" || Np(e, t, n, r))
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
function Me(e, t, n, r, i, o, s) {
  this.acceptsBooleans = t === 2 || t === 3 || t === 4, this.attributeName = r, this.attributeNamespace = i, this.mustUseProperty = n, this.propertyName = e, this.type = t, this.sanitizeURL = o, this.removeEmptyString = s;
}
var _e = {};
"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e) {
  _e[e] = new Me(e, 0, !1, e, null, !1, !1);
});
[["acceptCharset", "accept-charset"], ["className", "class"], ["htmlFor", "for"], ["httpEquiv", "http-equiv"]].forEach(function(e) {
  var t = e[0];
  _e[t] = new Me(t, 1, !1, e[1], null, !1, !1);
});
["contentEditable", "draggable", "spellCheck", "value"].forEach(function(e) {
  _e[e] = new Me(e, 2, !1, e.toLowerCase(), null, !1, !1);
});
["autoReverse", "externalResourcesRequired", "focusable", "preserveAlpha"].forEach(function(e) {
  _e[e] = new Me(e, 2, !1, e, null, !1, !1);
});
"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e) {
  _e[e] = new Me(e, 3, !1, e.toLowerCase(), null, !1, !1);
});
["checked", "multiple", "muted", "selected"].forEach(function(e) {
  _e[e] = new Me(e, 3, !0, e, null, !1, !1);
});
["capture", "download"].forEach(function(e) {
  _e[e] = new Me(e, 4, !1, e, null, !1, !1);
});
["cols", "rows", "size", "span"].forEach(function(e) {
  _e[e] = new Me(e, 6, !1, e, null, !1, !1);
});
["rowSpan", "start"].forEach(function(e) {
  _e[e] = new Me(e, 5, !1, e.toLowerCase(), null, !1, !1);
});
var Gl = /[\-:]([a-z])/g;
function ql(e) {
  return e[1].toUpperCase();
}
"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e) {
  var t = e.replace(
    Gl,
    ql
  );
  _e[t] = new Me(t, 1, !1, e, null, !1, !1);
});
"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e) {
  var t = e.replace(Gl, ql);
  _e[t] = new Me(t, 1, !1, e, "http://www.w3.org/1999/xlink", !1, !1);
});
["xml:base", "xml:lang", "xml:space"].forEach(function(e) {
  var t = e.replace(Gl, ql);
  _e[t] = new Me(t, 1, !1, e, "http://www.w3.org/XML/1998/namespace", !1, !1);
});
["tabIndex", "crossOrigin"].forEach(function(e) {
  _e[e] = new Me(e, 1, !1, e.toLowerCase(), null, !1, !1);
});
_e.xlinkHref = new Me("xlinkHref", 1, !1, "xlink:href", "http://www.w3.org/1999/xlink", !0, !1);
["src", "href", "action", "formAction"].forEach(function(e) {
  _e[e] = new Me(e, 1, !1, e.toLowerCase(), null, !0, !0);
});
function Jl(e, t, n, r) {
  var i = _e.hasOwnProperty(t) ? _e[t] : null;
  (i !== null ? i.type !== 0 : r || !(2 < t.length) || t[0] !== "o" && t[0] !== "O" || t[1] !== "n" && t[1] !== "N") && (Op(t, n, i, r) && (n = null), r || i === null ? Tp(t) && (n === null ? e.removeAttribute(t) : e.setAttribute(t, "" + n)) : i.mustUseProperty ? e[i.propertyName] = n === null ? i.type === 3 ? !1 : "" : n : (t = i.attributeName, r = i.attributeNamespace, n === null ? e.removeAttribute(t) : (i = i.type, n = i === 3 || i === 4 && n === !0 ? "" : "" + n, r ? e.setAttributeNS(r, t, n) : e.setAttribute(t, n))));
}
var Ft = Nc.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED, Pi = Symbol.for("react.element"), $n = Symbol.for("react.portal"), Un = Symbol.for("react.fragment"), bl = Symbol.for("react.strict_mode"), Ys = Symbol.for("react.profiler"), Pc = Symbol.for("react.provider"), Rc = Symbol.for("react.context"), ea = Symbol.for("react.forward_ref"), Qs = Symbol.for("react.suspense"), Xs = Symbol.for("react.suspense_list"), ta = Symbol.for("react.memo"), Ut = Symbol.for("react.lazy"), Dc = Symbol.for("react.offscreen"), qa = Symbol.iterator;
function _r(e) {
  return e === null || typeof e != "object" ? null : (e = qa && e[qa] || e["@@iterator"], typeof e == "function" ? e : null);
}
var ie = Object.assign, ds;
function Dr(e) {
  if (ds === void 0)
    try {
      throw Error();
    } catch (n) {
      var t = n.stack.trim().match(/\n( *(at )?)/);
      ds = t && t[1] || "";
    }
  return `
` + ds + e;
}
var fs = !1;
function ps(e, t) {
  if (!e || fs)
    return "";
  fs = !0;
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
`), s = i.length - 1, l = o.length - 1; 1 <= s && 0 <= l && i[s] !== o[l]; )
        l--;
      for (; 1 <= s && 0 <= l; s--, l--)
        if (i[s] !== o[l]) {
          if (s !== 1 || l !== 1)
            do
              if (s--, l--, 0 > l || i[s] !== o[l]) {
                var a = `
` + i[s].replace(" at new ", " at ");
                return e.displayName && a.includes("<anonymous>") && (a = a.replace("<anonymous>", e.displayName)), a;
              }
            while (1 <= s && 0 <= l);
          break;
        }
    }
  } finally {
    fs = !1, Error.prepareStackTrace = n;
  }
  return (e = e ? e.displayName || e.name : "") ? Dr(e) : "";
}
function Pp(e) {
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
      return e = ps(e.type, !1), e;
    case 11:
      return e = ps(e.type.render, !1), e;
    case 1:
      return e = ps(e.type, !0), e;
    default:
      return "";
  }
}
function Ks(e) {
  if (e == null)
    return null;
  if (typeof e == "function")
    return e.displayName || e.name || null;
  if (typeof e == "string")
    return e;
  switch (e) {
    case Un:
      return "Fragment";
    case $n:
      return "Portal";
    case Ys:
      return "Profiler";
    case bl:
      return "StrictMode";
    case Qs:
      return "Suspense";
    case Xs:
      return "SuspenseList";
  }
  if (typeof e == "object")
    switch (e.$$typeof) {
      case Rc:
        return (e.displayName || "Context") + ".Consumer";
      case Pc:
        return (e._context.displayName || "Context") + ".Provider";
      case ea:
        var t = e.render;
        return e = e.displayName, e || (e = t.displayName || t.name || "", e = e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef"), e;
      case ta:
        return t = e.displayName || null, t !== null ? t : Ks(e.type) || "Memo";
      case Ut:
        t = e._payload, e = e._init;
        try {
          return Ks(e(t));
        } catch {
        }
    }
  return null;
}
function Rp(e) {
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
      return Ks(t);
    case 8:
      return t === bl ? "StrictMode" : "Mode";
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
function on(e) {
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
function Mc(e) {
  var t = e.type;
  return (e = e.nodeName) && e.toLowerCase() === "input" && (t === "checkbox" || t === "radio");
}
function Dp(e) {
  var t = Mc(e) ? "checked" : "value", n = Object.getOwnPropertyDescriptor(e.constructor.prototype, t), r = "" + e[t];
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
function Ri(e) {
  e._valueTracker || (e._valueTracker = Dp(e));
}
function Lc(e) {
  if (!e)
    return !1;
  var t = e._valueTracker;
  if (!t)
    return !0;
  var n = t.getValue(), r = "";
  return e && (r = Mc(e) ? e.checked ? "true" : "false" : e.value), e = r, e !== n ? (t.setValue(e), !0) : !1;
}
function so(e) {
  if (e = e || (typeof document < "u" ? document : void 0), typeof e > "u")
    return null;
  try {
    return e.activeElement || e.body;
  } catch {
    return e.body;
  }
}
function Gs(e, t) {
  var n = t.checked;
  return ie({}, t, { defaultChecked: void 0, defaultValue: void 0, value: void 0, checked: n ?? e._wrapperState.initialChecked });
}
function Ja(e, t) {
  var n = t.defaultValue == null ? "" : t.defaultValue, r = t.checked != null ? t.checked : t.defaultChecked;
  n = on(t.value != null ? t.value : n), e._wrapperState = { initialChecked: r, initialValue: n, controlled: t.type === "checkbox" || t.type === "radio" ? t.checked != null : t.value != null };
}
function Ic(e, t) {
  t = t.checked, t != null && Jl(e, "checked", t, !1);
}
function qs(e, t) {
  Ic(e, t);
  var n = on(t.value), r = t.type;
  if (n != null)
    r === "number" ? (n === 0 && e.value === "" || e.value != n) && (e.value = "" + n) : e.value !== "" + n && (e.value = "" + n);
  else if (r === "submit" || r === "reset") {
    e.removeAttribute("value");
    return;
  }
  t.hasOwnProperty("value") ? Js(e, t.type, n) : t.hasOwnProperty("defaultValue") && Js(e, t.type, on(t.defaultValue)), t.checked == null && t.defaultChecked != null && (e.defaultChecked = !!t.defaultChecked);
}
function ba(e, t, n) {
  if (t.hasOwnProperty("value") || t.hasOwnProperty("defaultValue")) {
    var r = t.type;
    if (!(r !== "submit" && r !== "reset" || t.value !== void 0 && t.value !== null))
      return;
    t = "" + e._wrapperState.initialValue, n || t === e.value || (e.value = t), e.defaultValue = t;
  }
  n = e.name, n !== "" && (e.name = ""), e.defaultChecked = !!e._wrapperState.initialChecked, n !== "" && (e.name = n);
}
function Js(e, t, n) {
  (t !== "number" || so(e.ownerDocument) !== e) && (n == null ? e.defaultValue = "" + e._wrapperState.initialValue : e.defaultValue !== "" + n && (e.defaultValue = "" + n));
}
var Mr = Array.isArray;
function bn(e, t, n, r) {
  if (e = e.options, t) {
    t = {};
    for (var i = 0; i < n.length; i++)
      t["$" + n[i]] = !0;
    for (n = 0; n < e.length; n++)
      i = t.hasOwnProperty("$" + e[n].value), e[n].selected !== i && (e[n].selected = i), i && r && (e[n].defaultSelected = !0);
  } else {
    for (n = "" + on(n), t = null, i = 0; i < e.length; i++) {
      if (e[i].value === n) {
        e[i].selected = !0, r && (e[i].defaultSelected = !0);
        return;
      }
      t !== null || e[i].disabled || (t = e[i]);
    }
    t !== null && (t.selected = !0);
  }
}
function bs(e, t) {
  if (t.dangerouslySetInnerHTML != null)
    throw Error(g(91));
  return ie({}, t, { value: void 0, defaultValue: void 0, children: "" + e._wrapperState.initialValue });
}
function eu(e, t) {
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
  e._wrapperState = { initialValue: on(n) };
}
function jc(e, t) {
  var n = on(t.value), r = on(t.defaultValue);
  n != null && (n = "" + n, n !== e.value && (e.value = n), t.defaultValue == null && e.defaultValue !== n && (e.defaultValue = n)), r != null && (e.defaultValue = "" + r);
}
function tu(e) {
  var t = e.textContent;
  t === e._wrapperState.initialValue && t !== "" && t !== null && (e.value = t);
}
function zc(e) {
  switch (e) {
    case "svg":
      return "http://www.w3.org/2000/svg";
    case "math":
      return "http://www.w3.org/1998/Math/MathML";
    default:
      return "http://www.w3.org/1999/xhtml";
  }
}
function el(e, t) {
  return e == null || e === "http://www.w3.org/1999/xhtml" ? zc(t) : e === "http://www.w3.org/2000/svg" && t === "foreignObject" ? "http://www.w3.org/1999/xhtml" : e;
}
var Di, Ac = function(e) {
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
function Hr(e, t) {
  if (t) {
    var n = e.firstChild;
    if (n && n === e.lastChild && n.nodeType === 3) {
      n.nodeValue = t;
      return;
    }
  }
  e.textContent = t;
}
var jr = {
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
}, Mp = ["Webkit", "ms", "Moz", "O"];
Object.keys(jr).forEach(function(e) {
  Mp.forEach(function(t) {
    t = t + e.charAt(0).toUpperCase() + e.substring(1), jr[t] = jr[e];
  });
});
function Fc(e, t, n) {
  return t == null || typeof t == "boolean" || t === "" ? "" : n || typeof t != "number" || t === 0 || jr.hasOwnProperty(e) && jr[e] ? ("" + t).trim() : t + "px";
}
function Vc(e, t) {
  e = e.style;
  for (var n in t)
    if (t.hasOwnProperty(n)) {
      var r = n.indexOf("--") === 0, i = Fc(n, t[n], r);
      n === "float" && (n = "cssFloat"), r ? e.setProperty(n, i) : e[n] = i;
    }
}
var Lp = ie({ menuitem: !0 }, { area: !0, base: !0, br: !0, col: !0, embed: !0, hr: !0, img: !0, input: !0, keygen: !0, link: !0, meta: !0, param: !0, source: !0, track: !0, wbr: !0 });
function tl(e, t) {
  if (t) {
    if (Lp[e] && (t.children != null || t.dangerouslySetInnerHTML != null))
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
function nl(e, t) {
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
var rl = null;
function na(e) {
  return e = e.target || e.srcElement || window, e.correspondingUseElement && (e = e.correspondingUseElement), e.nodeType === 3 ? e.parentNode : e;
}
var il = null, er = null, tr = null;
function nu(e) {
  if (e = Ci(e)) {
    if (typeof il != "function")
      throw Error(g(280));
    var t = e.stateNode;
    t && (t = Qo(t), il(e.stateNode, e.type, t));
  }
}
function Wc(e) {
  er ? tr ? tr.push(e) : tr = [e] : er = e;
}
function $c() {
  if (er) {
    var e = er, t = tr;
    if (tr = er = null, nu(e), t)
      for (e = 0; e < t.length; e++)
        nu(t[e]);
  }
}
function Uc(e, t) {
  return e(t);
}
function Zc() {
}
var hs = !1;
function Bc(e, t, n) {
  if (hs)
    return e(t, n);
  hs = !0;
  try {
    return Uc(e, t, n);
  } finally {
    hs = !1, (er !== null || tr !== null) && (Zc(), $c());
  }
}
function Yr(e, t) {
  var n = e.stateNode;
  if (n === null)
    return null;
  var r = Qo(n);
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
var ol = !1;
if (Lt)
  try {
    var kr = {};
    Object.defineProperty(kr, "passive", { get: function() {
      ol = !0;
    } }), window.addEventListener("test", kr, kr), window.removeEventListener("test", kr, kr);
  } catch {
    ol = !1;
  }
function Ip(e, t, n, r, i, o, s, l, a) {
  var u = Array.prototype.slice.call(arguments, 3);
  try {
    t.apply(n, u);
  } catch (p) {
    this.onError(p);
  }
}
var zr = !1, lo = null, ao = !1, sl = null, jp = { onError: function(e) {
  zr = !0, lo = e;
} };
function zp(e, t, n, r, i, o, s, l, a) {
  zr = !1, lo = null, Ip.apply(jp, arguments);
}
function Ap(e, t, n, r, i, o, s, l, a) {
  if (zp.apply(this, arguments), zr) {
    if (zr) {
      var u = lo;
      zr = !1, lo = null;
    } else
      throw Error(g(198));
    ao || (ao = !0, sl = u);
  }
}
function In(e) {
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
function Hc(e) {
  if (e.tag === 13) {
    var t = e.memoizedState;
    if (t === null && (e = e.alternate, e !== null && (t = e.memoizedState)), t !== null)
      return t.dehydrated;
  }
  return null;
}
function ru(e) {
  if (In(e) !== e)
    throw Error(g(188));
}
function Fp(e) {
  var t = e.alternate;
  if (!t) {
    if (t = In(e), t === null)
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
          return ru(i), e;
        if (o === r)
          return ru(i), t;
        o = o.sibling;
      }
      throw Error(g(188));
    }
    if (n.return !== r.return)
      n = i, r = o;
    else {
      for (var s = !1, l = i.child; l; ) {
        if (l === n) {
          s = !0, n = i, r = o;
          break;
        }
        if (l === r) {
          s = !0, r = i, n = o;
          break;
        }
        l = l.sibling;
      }
      if (!s) {
        for (l = o.child; l; ) {
          if (l === n) {
            s = !0, n = o, r = i;
            break;
          }
          if (l === r) {
            s = !0, r = o, n = i;
            break;
          }
          l = l.sibling;
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
function Yc(e) {
  return e = Fp(e), e !== null ? Qc(e) : null;
}
function Qc(e) {
  if (e.tag === 5 || e.tag === 6)
    return e;
  for (e = e.child; e !== null; ) {
    var t = Qc(e);
    if (t !== null)
      return t;
    e = e.sibling;
  }
  return null;
}
var Xc = Ze.unstable_scheduleCallback, iu = Ze.unstable_cancelCallback, Vp = Ze.unstable_shouldYield, Wp = Ze.unstable_requestPaint, le = Ze.unstable_now, $p = Ze.unstable_getCurrentPriorityLevel, ra = Ze.unstable_ImmediatePriority, Kc = Ze.unstable_UserBlockingPriority, uo = Ze.unstable_NormalPriority, Up = Ze.unstable_LowPriority, Gc = Ze.unstable_IdlePriority, Zo = null, yt = null;
function Zp(e) {
  if (yt && typeof yt.onCommitFiberRoot == "function")
    try {
      yt.onCommitFiberRoot(Zo, e, void 0, (e.current.flags & 128) === 128);
    } catch {
    }
}
var it = Math.clz32 ? Math.clz32 : Yp, Bp = Math.log, Hp = Math.LN2;
function Yp(e) {
  return e >>>= 0, e === 0 ? 32 : 31 - (Bp(e) / Hp | 0) | 0;
}
var Mi = 64, Li = 4194304;
function Lr(e) {
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
function co(e, t) {
  var n = e.pendingLanes;
  if (n === 0)
    return 0;
  var r = 0, i = e.suspendedLanes, o = e.pingedLanes, s = n & 268435455;
  if (s !== 0) {
    var l = s & ~i;
    l !== 0 ? r = Lr(l) : (o &= s, o !== 0 && (r = Lr(o)));
  } else
    s = n & ~i, s !== 0 ? r = Lr(s) : o !== 0 && (r = Lr(o));
  if (r === 0)
    return 0;
  if (t !== 0 && t !== r && !(t & i) && (i = r & -r, o = t & -t, i >= o || i === 16 && (o & 4194240) !== 0))
    return t;
  if (r & 4 && (r |= n & 16), t = e.entangledLanes, t !== 0)
    for (e = e.entanglements, t &= r; 0 < t; )
      n = 31 - it(t), i = 1 << n, r |= e[n], t &= ~i;
  return r;
}
function Qp(e, t) {
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
function Xp(e, t) {
  for (var n = e.suspendedLanes, r = e.pingedLanes, i = e.expirationTimes, o = e.pendingLanes; 0 < o; ) {
    var s = 31 - it(o), l = 1 << s, a = i[s];
    a === -1 ? (!(l & n) || l & r) && (i[s] = Qp(l, t)) : a <= t && (e.expiredLanes |= l), o &= ~l;
  }
}
function ll(e) {
  return e = e.pendingLanes & -1073741825, e !== 0 ? e : e & 1073741824 ? 1073741824 : 0;
}
function qc() {
  var e = Mi;
  return Mi <<= 1, !(Mi & 4194240) && (Mi = 64), e;
}
function ms(e) {
  for (var t = [], n = 0; 31 > n; n++)
    t.push(e);
  return t;
}
function xi(e, t, n) {
  e.pendingLanes |= t, t !== 536870912 && (e.suspendedLanes = 0, e.pingedLanes = 0), e = e.eventTimes, t = 31 - it(t), e[t] = n;
}
function Kp(e, t) {
  var n = e.pendingLanes & ~t;
  e.pendingLanes = t, e.suspendedLanes = 0, e.pingedLanes = 0, e.expiredLanes &= t, e.mutableReadLanes &= t, e.entangledLanes &= t, t = e.entanglements;
  var r = e.eventTimes;
  for (e = e.expirationTimes; 0 < n; ) {
    var i = 31 - it(n), o = 1 << i;
    t[i] = 0, r[i] = -1, e[i] = -1, n &= ~o;
  }
}
function ia(e, t) {
  var n = e.entangledLanes |= t;
  for (e = e.entanglements; n; ) {
    var r = 31 - it(n), i = 1 << r;
    i & t | e[r] & t && (e[r] |= t), n &= ~i;
  }
}
var B = 0;
function Jc(e) {
  return e &= -e, 1 < e ? 4 < e ? e & 268435455 ? 16 : 536870912 : 4 : 1;
}
var bc, oa, ed, td, nd, al = !1, Ii = [], Gt = null, qt = null, Jt = null, Qr = /* @__PURE__ */ new Map(), Xr = /* @__PURE__ */ new Map(), Bt = [], Gp = "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");
function ou(e, t) {
  switch (e) {
    case "focusin":
    case "focusout":
      Gt = null;
      break;
    case "dragenter":
    case "dragleave":
      qt = null;
      break;
    case "mouseover":
    case "mouseout":
      Jt = null;
      break;
    case "pointerover":
    case "pointerout":
      Qr.delete(t.pointerId);
      break;
    case "gotpointercapture":
    case "lostpointercapture":
      Xr.delete(t.pointerId);
  }
}
function Sr(e, t, n, r, i, o) {
  return e === null || e.nativeEvent !== o ? (e = { blockedOn: t, domEventName: n, eventSystemFlags: r, nativeEvent: o, targetContainers: [i] }, t !== null && (t = Ci(t), t !== null && oa(t)), e) : (e.eventSystemFlags |= r, t = e.targetContainers, i !== null && t.indexOf(i) === -1 && t.push(i), e);
}
function qp(e, t, n, r, i) {
  switch (t) {
    case "focusin":
      return Gt = Sr(Gt, e, t, n, r, i), !0;
    case "dragenter":
      return qt = Sr(qt, e, t, n, r, i), !0;
    case "mouseover":
      return Jt = Sr(Jt, e, t, n, r, i), !0;
    case "pointerover":
      var o = i.pointerId;
      return Qr.set(o, Sr(Qr.get(o) || null, e, t, n, r, i)), !0;
    case "gotpointercapture":
      return o = i.pointerId, Xr.set(o, Sr(Xr.get(o) || null, e, t, n, r, i)), !0;
  }
  return !1;
}
function rd(e) {
  var t = gn(e.target);
  if (t !== null) {
    var n = In(t);
    if (n !== null) {
      if (t = n.tag, t === 13) {
        if (t = Hc(n), t !== null) {
          e.blockedOn = t, nd(e.priority, function() {
            ed(n);
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
function Ki(e) {
  if (e.blockedOn !== null)
    return !1;
  for (var t = e.targetContainers; 0 < t.length; ) {
    var n = ul(e.domEventName, e.eventSystemFlags, t[0], e.nativeEvent);
    if (n === null) {
      n = e.nativeEvent;
      var r = new n.constructor(n.type, n);
      rl = r, n.target.dispatchEvent(r), rl = null;
    } else
      return t = Ci(n), t !== null && oa(t), e.blockedOn = n, !1;
    t.shift();
  }
  return !0;
}
function su(e, t, n) {
  Ki(e) && n.delete(t);
}
function Jp() {
  al = !1, Gt !== null && Ki(Gt) && (Gt = null), qt !== null && Ki(qt) && (qt = null), Jt !== null && Ki(Jt) && (Jt = null), Qr.forEach(su), Xr.forEach(su);
}
function xr(e, t) {
  e.blockedOn === t && (e.blockedOn = null, al || (al = !0, Ze.unstable_scheduleCallback(Ze.unstable_NormalPriority, Jp)));
}
function Kr(e) {
  function t(i) {
    return xr(i, e);
  }
  if (0 < Ii.length) {
    xr(Ii[0], e);
    for (var n = 1; n < Ii.length; n++) {
      var r = Ii[n];
      r.blockedOn === e && (r.blockedOn = null);
    }
  }
  for (Gt !== null && xr(Gt, e), qt !== null && xr(qt, e), Jt !== null && xr(Jt, e), Qr.forEach(t), Xr.forEach(t), n = 0; n < Bt.length; n++)
    r = Bt[n], r.blockedOn === e && (r.blockedOn = null);
  for (; 0 < Bt.length && (n = Bt[0], n.blockedOn === null); )
    rd(n), n.blockedOn === null && Bt.shift();
}
var nr = Ft.ReactCurrentBatchConfig, fo = !0;
function bp(e, t, n, r) {
  var i = B, o = nr.transition;
  nr.transition = null;
  try {
    B = 1, sa(e, t, n, r);
  } finally {
    B = i, nr.transition = o;
  }
}
function eh(e, t, n, r) {
  var i = B, o = nr.transition;
  nr.transition = null;
  try {
    B = 4, sa(e, t, n, r);
  } finally {
    B = i, nr.transition = o;
  }
}
function sa(e, t, n, r) {
  if (fo) {
    var i = ul(e, t, n, r);
    if (i === null)
      Cs(e, t, r, po, n), ou(e, r);
    else if (qp(i, e, t, n, r))
      r.stopPropagation();
    else if (ou(e, r), t & 4 && -1 < Gp.indexOf(e)) {
      for (; i !== null; ) {
        var o = Ci(i);
        if (o !== null && bc(o), o = ul(e, t, n, r), o === null && Cs(e, t, r, po, n), o === i)
          break;
        i = o;
      }
      i !== null && r.stopPropagation();
    } else
      Cs(e, t, r, null, n);
  }
}
var po = null;
function ul(e, t, n, r) {
  if (po = null, e = na(r), e = gn(e), e !== null)
    if (t = In(e), t === null)
      e = null;
    else if (n = t.tag, n === 13) {
      if (e = Hc(t), e !== null)
        return e;
      e = null;
    } else if (n === 3) {
      if (t.stateNode.current.memoizedState.isDehydrated)
        return t.tag === 3 ? t.stateNode.containerInfo : null;
      e = null;
    } else
      t !== e && (e = null);
  return po = e, null;
}
function id(e) {
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
      switch ($p()) {
        case ra:
          return 1;
        case Kc:
          return 4;
        case uo:
        case Up:
          return 16;
        case Gc:
          return 536870912;
        default:
          return 16;
      }
    default:
      return 16;
  }
}
var Qt = null, la = null, Gi = null;
function od() {
  if (Gi)
    return Gi;
  var e, t = la, n = t.length, r, i = "value" in Qt ? Qt.value : Qt.textContent, o = i.length;
  for (e = 0; e < n && t[e] === i[e]; e++)
    ;
  var s = n - e;
  for (r = 1; r <= s && t[n - r] === i[o - r]; r++)
    ;
  return Gi = i.slice(e, 1 < r ? 1 - r : void 0);
}
function qi(e) {
  var t = e.keyCode;
  return "charCode" in e ? (e = e.charCode, e === 0 && t === 13 && (e = 13)) : e = t, e === 10 && (e = 13), 32 <= e || e === 13 ? e : 0;
}
function ji() {
  return !0;
}
function lu() {
  return !1;
}
function He(e) {
  function t(n, r, i, o, s) {
    this._reactName = n, this._targetInst = i, this.type = r, this.nativeEvent = o, this.target = s, this.currentTarget = null;
    for (var l in e)
      e.hasOwnProperty(l) && (n = e[l], this[l] = n ? n(o) : o[l]);
    return this.isDefaultPrevented = (o.defaultPrevented != null ? o.defaultPrevented : o.returnValue === !1) ? ji : lu, this.isPropagationStopped = lu, this;
  }
  return ie(t.prototype, { preventDefault: function() {
    this.defaultPrevented = !0;
    var n = this.nativeEvent;
    n && (n.preventDefault ? n.preventDefault() : typeof n.returnValue != "unknown" && (n.returnValue = !1), this.isDefaultPrevented = ji);
  }, stopPropagation: function() {
    var n = this.nativeEvent;
    n && (n.stopPropagation ? n.stopPropagation() : typeof n.cancelBubble != "unknown" && (n.cancelBubble = !0), this.isPropagationStopped = ji);
  }, persist: function() {
  }, isPersistent: ji }), t;
}
var yr = { eventPhase: 0, bubbles: 0, cancelable: 0, timeStamp: function(e) {
  return e.timeStamp || Date.now();
}, defaultPrevented: 0, isTrusted: 0 }, aa = He(yr), Ei = ie({}, yr, { view: 0, detail: 0 }), th = He(Ei), vs, ys, Er, Bo = ie({}, Ei, { screenX: 0, screenY: 0, clientX: 0, clientY: 0, pageX: 0, pageY: 0, ctrlKey: 0, shiftKey: 0, altKey: 0, metaKey: 0, getModifierState: ua, button: 0, buttons: 0, relatedTarget: function(e) {
  return e.relatedTarget === void 0 ? e.fromElement === e.srcElement ? e.toElement : e.fromElement : e.relatedTarget;
}, movementX: function(e) {
  return "movementX" in e ? e.movementX : (e !== Er && (Er && e.type === "mousemove" ? (vs = e.screenX - Er.screenX, ys = e.screenY - Er.screenY) : ys = vs = 0, Er = e), vs);
}, movementY: function(e) {
  return "movementY" in e ? e.movementY : ys;
} }), au = He(Bo), nh = ie({}, Bo, { dataTransfer: 0 }), rh = He(nh), ih = ie({}, Ei, { relatedTarget: 0 }), gs = He(ih), oh = ie({}, yr, { animationName: 0, elapsedTime: 0, pseudoElement: 0 }), sh = He(oh), lh = ie({}, yr, { clipboardData: function(e) {
  return "clipboardData" in e ? e.clipboardData : window.clipboardData;
} }), ah = He(lh), uh = ie({}, yr, { data: 0 }), uu = He(uh), ch = {
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
}, dh = {
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
}, fh = { Alt: "altKey", Control: "ctrlKey", Meta: "metaKey", Shift: "shiftKey" };
function ph(e) {
  var t = this.nativeEvent;
  return t.getModifierState ? t.getModifierState(e) : (e = fh[e]) ? !!t[e] : !1;
}
function ua() {
  return ph;
}
var hh = ie({}, Ei, { key: function(e) {
  if (e.key) {
    var t = ch[e.key] || e.key;
    if (t !== "Unidentified")
      return t;
  }
  return e.type === "keypress" ? (e = qi(e), e === 13 ? "Enter" : String.fromCharCode(e)) : e.type === "keydown" || e.type === "keyup" ? dh[e.keyCode] || "Unidentified" : "";
}, code: 0, location: 0, ctrlKey: 0, shiftKey: 0, altKey: 0, metaKey: 0, repeat: 0, locale: 0, getModifierState: ua, charCode: function(e) {
  return e.type === "keypress" ? qi(e) : 0;
}, keyCode: function(e) {
  return e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0;
}, which: function(e) {
  return e.type === "keypress" ? qi(e) : e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0;
} }), mh = He(hh), vh = ie({}, Bo, { pointerId: 0, width: 0, height: 0, pressure: 0, tangentialPressure: 0, tiltX: 0, tiltY: 0, twist: 0, pointerType: 0, isPrimary: 0 }), cu = He(vh), yh = ie({}, Ei, { touches: 0, targetTouches: 0, changedTouches: 0, altKey: 0, metaKey: 0, ctrlKey: 0, shiftKey: 0, getModifierState: ua }), gh = He(yh), wh = ie({}, yr, { propertyName: 0, elapsedTime: 0, pseudoElement: 0 }), _h = He(wh), kh = ie({}, Bo, {
  deltaX: function(e) {
    return "deltaX" in e ? e.deltaX : "wheelDeltaX" in e ? -e.wheelDeltaX : 0;
  },
  deltaY: function(e) {
    return "deltaY" in e ? e.deltaY : "wheelDeltaY" in e ? -e.wheelDeltaY : "wheelDelta" in e ? -e.wheelDelta : 0;
  },
  deltaZ: 0,
  deltaMode: 0
}), Sh = He(kh), xh = [9, 13, 27, 32], ca = Lt && "CompositionEvent" in window, Ar = null;
Lt && "documentMode" in document && (Ar = document.documentMode);
var Eh = Lt && "TextEvent" in window && !Ar, sd = Lt && (!ca || Ar && 8 < Ar && 11 >= Ar), du = " ", fu = !1;
function ld(e, t) {
  switch (e) {
    case "keyup":
      return xh.indexOf(t.keyCode) !== -1;
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
function ad(e) {
  return e = e.detail, typeof e == "object" && "data" in e ? e.data : null;
}
var Zn = !1;
function Ch(e, t) {
  switch (e) {
    case "compositionend":
      return ad(t);
    case "keypress":
      return t.which !== 32 ? null : (fu = !0, du);
    case "textInput":
      return e = t.data, e === du && fu ? null : e;
    default:
      return null;
  }
}
function Th(e, t) {
  if (Zn)
    return e === "compositionend" || !ca && ld(e, t) ? (e = od(), Gi = la = Qt = null, Zn = !1, e) : null;
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
      return sd && t.locale !== "ko" ? null : t.data;
    default:
      return null;
  }
}
var Nh = { color: !0, date: !0, datetime: !0, "datetime-local": !0, email: !0, month: !0, number: !0, password: !0, range: !0, search: !0, tel: !0, text: !0, time: !0, url: !0, week: !0 };
function pu(e) {
  var t = e && e.nodeName && e.nodeName.toLowerCase();
  return t === "input" ? !!Nh[e.type] : t === "textarea";
}
function ud(e, t, n, r) {
  Wc(r), t = ho(t, "onChange"), 0 < t.length && (n = new aa("onChange", "change", null, n, r), e.push({ event: n, listeners: t }));
}
var Fr = null, Gr = null;
function Oh(e) {
  _d(e, 0);
}
function Ho(e) {
  var t = Yn(e);
  if (Lc(t))
    return e;
}
function Ph(e, t) {
  if (e === "change")
    return t;
}
var cd = !1;
if (Lt) {
  var ws;
  if (Lt) {
    var _s = "oninput" in document;
    if (!_s) {
      var hu = document.createElement("div");
      hu.setAttribute("oninput", "return;"), _s = typeof hu.oninput == "function";
    }
    ws = _s;
  } else
    ws = !1;
  cd = ws && (!document.documentMode || 9 < document.documentMode);
}
function mu() {
  Fr && (Fr.detachEvent("onpropertychange", dd), Gr = Fr = null);
}
function dd(e) {
  if (e.propertyName === "value" && Ho(Gr)) {
    var t = [];
    ud(t, Gr, e, na(e)), Bc(Oh, t);
  }
}
function Rh(e, t, n) {
  e === "focusin" ? (mu(), Fr = t, Gr = n, Fr.attachEvent("onpropertychange", dd)) : e === "focusout" && mu();
}
function Dh(e) {
  if (e === "selectionchange" || e === "keyup" || e === "keydown")
    return Ho(Gr);
}
function Mh(e, t) {
  if (e === "click")
    return Ho(t);
}
function Lh(e, t) {
  if (e === "input" || e === "change")
    return Ho(t);
}
function Ih(e, t) {
  return e === t && (e !== 0 || 1 / e === 1 / t) || e !== e && t !== t;
}
var at = typeof Object.is == "function" ? Object.is : Ih;
function qr(e, t) {
  if (at(e, t))
    return !0;
  if (typeof e != "object" || e === null || typeof t != "object" || t === null)
    return !1;
  var n = Object.keys(e), r = Object.keys(t);
  if (n.length !== r.length)
    return !1;
  for (r = 0; r < n.length; r++) {
    var i = n[r];
    if (!Hs.call(t, i) || !at(e[i], t[i]))
      return !1;
  }
  return !0;
}
function vu(e) {
  for (; e && e.firstChild; )
    e = e.firstChild;
  return e;
}
function yu(e, t) {
  var n = vu(e);
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
    n = vu(n);
  }
}
function fd(e, t) {
  return e && t ? e === t ? !0 : e && e.nodeType === 3 ? !1 : t && t.nodeType === 3 ? fd(e, t.parentNode) : "contains" in e ? e.contains(t) : e.compareDocumentPosition ? !!(e.compareDocumentPosition(t) & 16) : !1 : !1;
}
function pd() {
  for (var e = window, t = so(); t instanceof e.HTMLIFrameElement; ) {
    try {
      var n = typeof t.contentWindow.location.href == "string";
    } catch {
      n = !1;
    }
    if (n)
      e = t.contentWindow;
    else
      break;
    t = so(e.document);
  }
  return t;
}
function da(e) {
  var t = e && e.nodeName && e.nodeName.toLowerCase();
  return t && (t === "input" && (e.type === "text" || e.type === "search" || e.type === "tel" || e.type === "url" || e.type === "password") || t === "textarea" || e.contentEditable === "true");
}
function jh(e) {
  var t = pd(), n = e.focusedElem, r = e.selectionRange;
  if (t !== n && n && n.ownerDocument && fd(n.ownerDocument.documentElement, n)) {
    if (r !== null && da(n)) {
      if (t = r.start, e = r.end, e === void 0 && (e = t), "selectionStart" in n)
        n.selectionStart = t, n.selectionEnd = Math.min(e, n.value.length);
      else if (e = (t = n.ownerDocument || document) && t.defaultView || window, e.getSelection) {
        e = e.getSelection();
        var i = n.textContent.length, o = Math.min(r.start, i);
        r = r.end === void 0 ? o : Math.min(r.end, i), !e.extend && o > r && (i = r, r = o, o = i), i = yu(n, o);
        var s = yu(
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
var zh = Lt && "documentMode" in document && 11 >= document.documentMode, Bn = null, cl = null, Vr = null, dl = !1;
function gu(e, t, n) {
  var r = n.window === n ? n.document : n.nodeType === 9 ? n : n.ownerDocument;
  dl || Bn == null || Bn !== so(r) || (r = Bn, "selectionStart" in r && da(r) ? r = { start: r.selectionStart, end: r.selectionEnd } : (r = (r.ownerDocument && r.ownerDocument.defaultView || window).getSelection(), r = { anchorNode: r.anchorNode, anchorOffset: r.anchorOffset, focusNode: r.focusNode, focusOffset: r.focusOffset }), Vr && qr(Vr, r) || (Vr = r, r = ho(cl, "onSelect"), 0 < r.length && (t = new aa("onSelect", "select", null, t, n), e.push({ event: t, listeners: r }), t.target = Bn)));
}
function zi(e, t) {
  var n = {};
  return n[e.toLowerCase()] = t.toLowerCase(), n["Webkit" + e] = "webkit" + t, n["Moz" + e] = "moz" + t, n;
}
var Hn = { animationend: zi("Animation", "AnimationEnd"), animationiteration: zi("Animation", "AnimationIteration"), animationstart: zi("Animation", "AnimationStart"), transitionend: zi("Transition", "TransitionEnd") }, ks = {}, hd = {};
Lt && (hd = document.createElement("div").style, "AnimationEvent" in window || (delete Hn.animationend.animation, delete Hn.animationiteration.animation, delete Hn.animationstart.animation), "TransitionEvent" in window || delete Hn.transitionend.transition);
function Yo(e) {
  if (ks[e])
    return ks[e];
  if (!Hn[e])
    return e;
  var t = Hn[e], n;
  for (n in t)
    if (t.hasOwnProperty(n) && n in hd)
      return ks[e] = t[n];
  return e;
}
var md = Yo("animationend"), vd = Yo("animationiteration"), yd = Yo("animationstart"), gd = Yo("transitionend"), wd = /* @__PURE__ */ new Map(), wu = "abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");
function dn(e, t) {
  wd.set(e, t), Ln(t, [e]);
}
for (var Ss = 0; Ss < wu.length; Ss++) {
  var xs = wu[Ss], Ah = xs.toLowerCase(), Fh = xs[0].toUpperCase() + xs.slice(1);
  dn(Ah, "on" + Fh);
}
dn(md, "onAnimationEnd");
dn(vd, "onAnimationIteration");
dn(yd, "onAnimationStart");
dn("dblclick", "onDoubleClick");
dn("focusin", "onFocus");
dn("focusout", "onBlur");
dn(gd, "onTransitionEnd");
sr("onMouseEnter", ["mouseout", "mouseover"]);
sr("onMouseLeave", ["mouseout", "mouseover"]);
sr("onPointerEnter", ["pointerout", "pointerover"]);
sr("onPointerLeave", ["pointerout", "pointerover"]);
Ln("onChange", "change click focusin focusout input keydown keyup selectionchange".split(" "));
Ln("onSelect", "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));
Ln("onBeforeInput", ["compositionend", "keypress", "textInput", "paste"]);
Ln("onCompositionEnd", "compositionend focusout keydown keypress keyup mousedown".split(" "));
Ln("onCompositionStart", "compositionstart focusout keydown keypress keyup mousedown".split(" "));
Ln("onCompositionUpdate", "compositionupdate focusout keydown keypress keyup mousedown".split(" "));
var Ir = "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "), Vh = new Set("cancel close invalid load scroll toggle".split(" ").concat(Ir));
function _u(e, t, n) {
  var r = e.type || "unknown-event";
  e.currentTarget = n, Ap(r, t, void 0, e), e.currentTarget = null;
}
function _d(e, t) {
  t = (t & 4) !== 0;
  for (var n = 0; n < e.length; n++) {
    var r = e[n], i = r.event;
    r = r.listeners;
    e: {
      var o = void 0;
      if (t)
        for (var s = r.length - 1; 0 <= s; s--) {
          var l = r[s], a = l.instance, u = l.currentTarget;
          if (l = l.listener, a !== o && i.isPropagationStopped())
            break e;
          _u(i, l, u), o = a;
        }
      else
        for (s = 0; s < r.length; s++) {
          if (l = r[s], a = l.instance, u = l.currentTarget, l = l.listener, a !== o && i.isPropagationStopped())
            break e;
          _u(i, l, u), o = a;
        }
    }
  }
  if (ao)
    throw e = sl, ao = !1, sl = null, e;
}
function J(e, t) {
  var n = t[vl];
  n === void 0 && (n = t[vl] = /* @__PURE__ */ new Set());
  var r = e + "__bubble";
  n.has(r) || (kd(t, e, 2, !1), n.add(r));
}
function Es(e, t, n) {
  var r = 0;
  t && (r |= 4), kd(n, e, r, t);
}
var Ai = "_reactListening" + Math.random().toString(36).slice(2);
function Jr(e) {
  if (!e[Ai]) {
    e[Ai] = !0, Oc.forEach(function(n) {
      n !== "selectionchange" && (Vh.has(n) || Es(n, !1, e), Es(n, !0, e));
    });
    var t = e.nodeType === 9 ? e : e.ownerDocument;
    t === null || t[Ai] || (t[Ai] = !0, Es("selectionchange", !1, t));
  }
}
function kd(e, t, n, r) {
  switch (id(t)) {
    case 1:
      var i = bp;
      break;
    case 4:
      i = eh;
      break;
    default:
      i = sa;
  }
  n = i.bind(null, t, n, e), i = void 0, !ol || t !== "touchstart" && t !== "touchmove" && t !== "wheel" || (i = !0), r ? i !== void 0 ? e.addEventListener(t, n, { capture: !0, passive: i }) : e.addEventListener(t, n, !0) : i !== void 0 ? e.addEventListener(t, n, { passive: i }) : e.addEventListener(t, n, !1);
}
function Cs(e, t, n, r, i) {
  var o = r;
  if (!(t & 1) && !(t & 2) && r !== null)
    e:
      for (; ; ) {
        if (r === null)
          return;
        var s = r.tag;
        if (s === 3 || s === 4) {
          var l = r.stateNode.containerInfo;
          if (l === i || l.nodeType === 8 && l.parentNode === i)
            break;
          if (s === 4)
            for (s = r.return; s !== null; ) {
              var a = s.tag;
              if ((a === 3 || a === 4) && (a = s.stateNode.containerInfo, a === i || a.nodeType === 8 && a.parentNode === i))
                return;
              s = s.return;
            }
          for (; l !== null; ) {
            if (s = gn(l), s === null)
              return;
            if (a = s.tag, a === 5 || a === 6) {
              r = o = s;
              continue e;
            }
            l = l.parentNode;
          }
        }
        r = r.return;
      }
  Bc(function() {
    var u = o, p = na(n), h = [];
    e: {
      var m = wd.get(e);
      if (m !== void 0) {
        var y = aa, w = e;
        switch (e) {
          case "keypress":
            if (qi(n) === 0)
              break e;
          case "keydown":
          case "keyup":
            y = mh;
            break;
          case "focusin":
            w = "focus", y = gs;
            break;
          case "focusout":
            w = "blur", y = gs;
            break;
          case "beforeblur":
          case "afterblur":
            y = gs;
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
            y = au;
            break;
          case "drag":
          case "dragend":
          case "dragenter":
          case "dragexit":
          case "dragleave":
          case "dragover":
          case "dragstart":
          case "drop":
            y = rh;
            break;
          case "touchcancel":
          case "touchend":
          case "touchmove":
          case "touchstart":
            y = gh;
            break;
          case md:
          case vd:
          case yd:
            y = sh;
            break;
          case gd:
            y = _h;
            break;
          case "scroll":
            y = th;
            break;
          case "wheel":
            y = Sh;
            break;
          case "copy":
          case "cut":
          case "paste":
            y = ah;
            break;
          case "gotpointercapture":
          case "lostpointercapture":
          case "pointercancel":
          case "pointerdown":
          case "pointermove":
          case "pointerout":
          case "pointerover":
          case "pointerup":
            y = cu;
        }
        var k = (t & 4) !== 0, F = !k && e === "scroll", d = k ? m !== null ? m + "Capture" : null : m;
        k = [];
        for (var c = u, f; c !== null; ) {
          f = c;
          var v = f.stateNode;
          if (f.tag === 5 && v !== null && (f = v, d !== null && (v = Yr(c, d), v != null && k.push(br(c, v, f)))), F)
            break;
          c = c.return;
        }
        0 < k.length && (m = new y(m, w, null, n, p), h.push({ event: m, listeners: k }));
      }
    }
    if (!(t & 7)) {
      e: {
        if (m = e === "mouseover" || e === "pointerover", y = e === "mouseout" || e === "pointerout", m && n !== rl && (w = n.relatedTarget || n.fromElement) && (gn(w) || w[It]))
          break e;
        if ((y || m) && (m = p.window === p ? p : (m = p.ownerDocument) ? m.defaultView || m.parentWindow : window, y ? (w = n.relatedTarget || n.toElement, y = u, w = w ? gn(w) : null, w !== null && (F = In(w), w !== F || w.tag !== 5 && w.tag !== 6) && (w = null)) : (y = null, w = u), y !== w)) {
          if (k = au, v = "onMouseLeave", d = "onMouseEnter", c = "mouse", (e === "pointerout" || e === "pointerover") && (k = cu, v = "onPointerLeave", d = "onPointerEnter", c = "pointer"), F = y == null ? m : Yn(y), f = w == null ? m : Yn(w), m = new k(v, c + "leave", y, n, p), m.target = F, m.relatedTarget = f, v = null, gn(p) === u && (k = new k(d, c + "enter", w, n, p), k.target = f, k.relatedTarget = F, v = k), F = v, y && w)
            t: {
              for (k = y, d = w, c = 0, f = k; f; f = Fn(f))
                c++;
              for (f = 0, v = d; v; v = Fn(v))
                f++;
              for (; 0 < c - f; )
                k = Fn(k), c--;
              for (; 0 < f - c; )
                d = Fn(d), f--;
              for (; c--; ) {
                if (k === d || d !== null && k === d.alternate)
                  break t;
                k = Fn(k), d = Fn(d);
              }
              k = null;
            }
          else
            k = null;
          y !== null && ku(h, m, y, k, !1), w !== null && F !== null && ku(h, F, w, k, !0);
        }
      }
      e: {
        if (m = u ? Yn(u) : window, y = m.nodeName && m.nodeName.toLowerCase(), y === "select" || y === "input" && m.type === "file")
          var x = Ph;
        else if (pu(m))
          if (cd)
            x = Lh;
          else {
            x = Dh;
            var S = Rh;
          }
        else
          (y = m.nodeName) && y.toLowerCase() === "input" && (m.type === "checkbox" || m.type === "radio") && (x = Mh);
        if (x && (x = x(e, u))) {
          ud(h, x, n, p);
          break e;
        }
        S && S(e, m, u), e === "focusout" && (S = m._wrapperState) && S.controlled && m.type === "number" && Js(m, "number", m.value);
      }
      switch (S = u ? Yn(u) : window, e) {
        case "focusin":
          (pu(S) || S.contentEditable === "true") && (Bn = S, cl = u, Vr = null);
          break;
        case "focusout":
          Vr = cl = Bn = null;
          break;
        case "mousedown":
          dl = !0;
          break;
        case "contextmenu":
        case "mouseup":
        case "dragend":
          dl = !1, gu(h, n, p);
          break;
        case "selectionchange":
          if (zh)
            break;
        case "keydown":
        case "keyup":
          gu(h, n, p);
      }
      var C;
      if (ca)
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
        Zn ? ld(e, n) && (E = "onCompositionEnd") : e === "keydown" && n.keyCode === 229 && (E = "onCompositionStart");
      E && (sd && n.locale !== "ko" && (Zn || E !== "onCompositionStart" ? E === "onCompositionEnd" && Zn && (C = od()) : (Qt = p, la = "value" in Qt ? Qt.value : Qt.textContent, Zn = !0)), S = ho(u, E), 0 < S.length && (E = new uu(E, e, null, n, p), h.push({ event: E, listeners: S }), C ? E.data = C : (C = ad(n), C !== null && (E.data = C)))), (C = Eh ? Ch(e, n) : Th(e, n)) && (u = ho(u, "onBeforeInput"), 0 < u.length && (p = new uu("onBeforeInput", "beforeinput", null, n, p), h.push({ event: p, listeners: u }), p.data = C));
    }
    _d(h, t);
  });
}
function br(e, t, n) {
  return { instance: e, listener: t, currentTarget: n };
}
function ho(e, t) {
  for (var n = t + "Capture", r = []; e !== null; ) {
    var i = e, o = i.stateNode;
    i.tag === 5 && o !== null && (i = o, o = Yr(e, n), o != null && r.unshift(br(e, o, i)), o = Yr(e, t), o != null && r.push(br(e, o, i))), e = e.return;
  }
  return r;
}
function Fn(e) {
  if (e === null)
    return null;
  do
    e = e.return;
  while (e && e.tag !== 5);
  return e || null;
}
function ku(e, t, n, r, i) {
  for (var o = t._reactName, s = []; n !== null && n !== r; ) {
    var l = n, a = l.alternate, u = l.stateNode;
    if (a !== null && a === r)
      break;
    l.tag === 5 && u !== null && (l = u, i ? (a = Yr(n, o), a != null && s.unshift(br(n, a, l))) : i || (a = Yr(n, o), a != null && s.push(br(n, a, l)))), n = n.return;
  }
  s.length !== 0 && e.push({ event: t, listeners: s });
}
var Wh = /\r\n?/g, $h = /\u0000|\uFFFD/g;
function Su(e) {
  return (typeof e == "string" ? e : "" + e).replace(Wh, `
`).replace($h, "");
}
function Fi(e, t, n) {
  if (t = Su(t), Su(e) !== t && n)
    throw Error(g(425));
}
function mo() {
}
var fl = null, pl = null;
function hl(e, t) {
  return e === "textarea" || e === "noscript" || typeof t.children == "string" || typeof t.children == "number" || typeof t.dangerouslySetInnerHTML == "object" && t.dangerouslySetInnerHTML !== null && t.dangerouslySetInnerHTML.__html != null;
}
var ml = typeof setTimeout == "function" ? setTimeout : void 0, Uh = typeof clearTimeout == "function" ? clearTimeout : void 0, xu = typeof Promise == "function" ? Promise : void 0, Zh = typeof queueMicrotask == "function" ? queueMicrotask : typeof xu < "u" ? function(e) {
  return xu.resolve(null).then(e).catch(Bh);
} : ml;
function Bh(e) {
  setTimeout(function() {
    throw e;
  });
}
function Ts(e, t) {
  var n = t, r = 0;
  do {
    var i = n.nextSibling;
    if (e.removeChild(n), i && i.nodeType === 8)
      if (n = i.data, n === "/$") {
        if (r === 0) {
          e.removeChild(i), Kr(t);
          return;
        }
        r--;
      } else
        n !== "$" && n !== "$?" && n !== "$!" || r++;
    n = i;
  } while (n);
  Kr(t);
}
function bt(e) {
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
function Eu(e) {
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
var gr = Math.random().toString(36).slice(2), vt = "__reactFiber$" + gr, ei = "__reactProps$" + gr, It = "__reactContainer$" + gr, vl = "__reactEvents$" + gr, Hh = "__reactListeners$" + gr, Yh = "__reactHandles$" + gr;
function gn(e) {
  var t = e[vt];
  if (t)
    return t;
  for (var n = e.parentNode; n; ) {
    if (t = n[It] || n[vt]) {
      if (n = t.alternate, t.child !== null || n !== null && n.child !== null)
        for (e = Eu(e); e !== null; ) {
          if (n = e[vt])
            return n;
          e = Eu(e);
        }
      return t;
    }
    e = n, n = e.parentNode;
  }
  return null;
}
function Ci(e) {
  return e = e[vt] || e[It], !e || e.tag !== 5 && e.tag !== 6 && e.tag !== 13 && e.tag !== 3 ? null : e;
}
function Yn(e) {
  if (e.tag === 5 || e.tag === 6)
    return e.stateNode;
  throw Error(g(33));
}
function Qo(e) {
  return e[ei] || null;
}
var yl = [], Qn = -1;
function fn(e) {
  return { current: e };
}
function b(e) {
  0 > Qn || (e.current = yl[Qn], yl[Qn] = null, Qn--);
}
function X(e, t) {
  Qn++, yl[Qn] = e.current, e.current = t;
}
var sn = {}, Ce = fn(sn), ze = fn(!1), En = sn;
function lr(e, t) {
  var n = e.type.contextTypes;
  if (!n)
    return sn;
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
function vo() {
  b(ze), b(Ce);
}
function Cu(e, t, n) {
  if (Ce.current !== sn)
    throw Error(g(168));
  X(Ce, t), X(ze, n);
}
function Sd(e, t, n) {
  var r = e.stateNode;
  if (t = t.childContextTypes, typeof r.getChildContext != "function")
    return n;
  r = r.getChildContext();
  for (var i in r)
    if (!(i in t))
      throw Error(g(108, Rp(e) || "Unknown", i));
  return ie({}, n, r);
}
function yo(e) {
  return e = (e = e.stateNode) && e.__reactInternalMemoizedMergedChildContext || sn, En = Ce.current, X(Ce, e), X(ze, ze.current), !0;
}
function Tu(e, t, n) {
  var r = e.stateNode;
  if (!r)
    throw Error(g(169));
  n ? (e = Sd(e, t, En), r.__reactInternalMemoizedMergedChildContext = e, b(ze), b(Ce), X(Ce, e)) : b(ze), X(ze, n);
}
var Tt = null, Xo = !1, Ns = !1;
function xd(e) {
  Tt === null ? Tt = [e] : Tt.push(e);
}
function Qh(e) {
  Xo = !0, xd(e);
}
function pn() {
  if (!Ns && Tt !== null) {
    Ns = !0;
    var e = 0, t = B;
    try {
      var n = Tt;
      for (B = 1; e < n.length; e++) {
        var r = n[e];
        do
          r = r(!0);
        while (r !== null);
      }
      Tt = null, Xo = !1;
    } catch (i) {
      throw Tt !== null && (Tt = Tt.slice(e + 1)), Xc(ra, pn), i;
    } finally {
      B = t, Ns = !1;
    }
  }
  return null;
}
var Xn = [], Kn = 0, go = null, wo = 0, Qe = [], Xe = 0, Cn = null, Ot = 1, Pt = "";
function mn(e, t) {
  Xn[Kn++] = wo, Xn[Kn++] = go, go = e, wo = t;
}
function Ed(e, t, n) {
  Qe[Xe++] = Ot, Qe[Xe++] = Pt, Qe[Xe++] = Cn, Cn = e;
  var r = Ot;
  e = Pt;
  var i = 32 - it(r) - 1;
  r &= ~(1 << i), n += 1;
  var o = 32 - it(t) + i;
  if (30 < o) {
    var s = i - i % 5;
    o = (r & (1 << s) - 1).toString(32), r >>= s, i -= s, Ot = 1 << 32 - it(t) + i | n << i | r, Pt = o + e;
  } else
    Ot = 1 << o | n << i | r, Pt = e;
}
function fa(e) {
  e.return !== null && (mn(e, 1), Ed(e, 1, 0));
}
function pa(e) {
  for (; e === go; )
    go = Xn[--Kn], Xn[Kn] = null, wo = Xn[--Kn], Xn[Kn] = null;
  for (; e === Cn; )
    Cn = Qe[--Xe], Qe[Xe] = null, Pt = Qe[--Xe], Qe[Xe] = null, Ot = Qe[--Xe], Qe[Xe] = null;
}
var Ue = null, $e = null, ee = !1, nt = null;
function Cd(e, t) {
  var n = Ke(5, null, null, 0);
  n.elementType = "DELETED", n.stateNode = t, n.return = e, t = e.deletions, t === null ? (e.deletions = [n], e.flags |= 16) : t.push(n);
}
function Nu(e, t) {
  switch (e.tag) {
    case 5:
      var n = e.type;
      return t = t.nodeType !== 1 || n.toLowerCase() !== t.nodeName.toLowerCase() ? null : t, t !== null ? (e.stateNode = t, Ue = e, $e = bt(t.firstChild), !0) : !1;
    case 6:
      return t = e.pendingProps === "" || t.nodeType !== 3 ? null : t, t !== null ? (e.stateNode = t, Ue = e, $e = null, !0) : !1;
    case 13:
      return t = t.nodeType !== 8 ? null : t, t !== null ? (n = Cn !== null ? { id: Ot, overflow: Pt } : null, e.memoizedState = { dehydrated: t, treeContext: n, retryLane: 1073741824 }, n = Ke(18, null, null, 0), n.stateNode = t, n.return = e, e.child = n, Ue = e, $e = null, !0) : !1;
    default:
      return !1;
  }
}
function gl(e) {
  return (e.mode & 1) !== 0 && (e.flags & 128) === 0;
}
function wl(e) {
  if (ee) {
    var t = $e;
    if (t) {
      var n = t;
      if (!Nu(e, t)) {
        if (gl(e))
          throw Error(g(418));
        t = bt(n.nextSibling);
        var r = Ue;
        t && Nu(e, t) ? Cd(r, n) : (e.flags = e.flags & -4097 | 2, ee = !1, Ue = e);
      }
    } else {
      if (gl(e))
        throw Error(g(418));
      e.flags = e.flags & -4097 | 2, ee = !1, Ue = e;
    }
  }
}
function Ou(e) {
  for (e = e.return; e !== null && e.tag !== 5 && e.tag !== 3 && e.tag !== 13; )
    e = e.return;
  Ue = e;
}
function Vi(e) {
  if (e !== Ue)
    return !1;
  if (!ee)
    return Ou(e), ee = !0, !1;
  var t;
  if ((t = e.tag !== 3) && !(t = e.tag !== 5) && (t = e.type, t = t !== "head" && t !== "body" && !hl(e.type, e.memoizedProps)), t && (t = $e)) {
    if (gl(e))
      throw Td(), Error(g(418));
    for (; t; )
      Cd(e, t), t = bt(t.nextSibling);
  }
  if (Ou(e), e.tag === 13) {
    if (e = e.memoizedState, e = e !== null ? e.dehydrated : null, !e)
      throw Error(g(317));
    e: {
      for (e = e.nextSibling, t = 0; e; ) {
        if (e.nodeType === 8) {
          var n = e.data;
          if (n === "/$") {
            if (t === 0) {
              $e = bt(e.nextSibling);
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
    $e = Ue ? bt(e.stateNode.nextSibling) : null;
  return !0;
}
function Td() {
  for (var e = $e; e; )
    e = bt(e.nextSibling);
}
function ar() {
  $e = Ue = null, ee = !1;
}
function ha(e) {
  nt === null ? nt = [e] : nt.push(e);
}
var Xh = Ft.ReactCurrentBatchConfig;
function et(e, t) {
  if (e && e.defaultProps) {
    t = ie({}, t), e = e.defaultProps;
    for (var n in e)
      t[n] === void 0 && (t[n] = e[n]);
    return t;
  }
  return t;
}
var _o = fn(null), ko = null, Gn = null, ma = null;
function va() {
  ma = Gn = ko = null;
}
function ya(e) {
  var t = _o.current;
  b(_o), e._currentValue = t;
}
function _l(e, t, n) {
  for (; e !== null; ) {
    var r = e.alternate;
    if ((e.childLanes & t) !== t ? (e.childLanes |= t, r !== null && (r.childLanes |= t)) : r !== null && (r.childLanes & t) !== t && (r.childLanes |= t), e === n)
      break;
    e = e.return;
  }
}
function rr(e, t) {
  ko = e, ma = Gn = null, e = e.dependencies, e !== null && e.firstContext !== null && (e.lanes & t && (je = !0), e.firstContext = null);
}
function qe(e) {
  var t = e._currentValue;
  if (ma !== e)
    if (e = { context: e, memoizedValue: t, next: null }, Gn === null) {
      if (ko === null)
        throw Error(g(308));
      Gn = e, ko.dependencies = { lanes: 0, firstContext: e };
    } else
      Gn = Gn.next = e;
  return t;
}
var wn = null;
function ga(e) {
  wn === null ? wn = [e] : wn.push(e);
}
function Nd(e, t, n, r) {
  var i = t.interleaved;
  return i === null ? (n.next = n, ga(t)) : (n.next = i.next, i.next = n), t.interleaved = n, jt(e, r);
}
function jt(e, t) {
  e.lanes |= t;
  var n = e.alternate;
  for (n !== null && (n.lanes |= t), n = e, e = e.return; e !== null; )
    e.childLanes |= t, n = e.alternate, n !== null && (n.childLanes |= t), n = e, e = e.return;
  return n.tag === 3 ? n.stateNode : null;
}
var Zt = !1;
function wa(e) {
  e.updateQueue = { baseState: e.memoizedState, firstBaseUpdate: null, lastBaseUpdate: null, shared: { pending: null, interleaved: null, lanes: 0 }, effects: null };
}
function Od(e, t) {
  e = e.updateQueue, t.updateQueue === e && (t.updateQueue = { baseState: e.baseState, firstBaseUpdate: e.firstBaseUpdate, lastBaseUpdate: e.lastBaseUpdate, shared: e.shared, effects: e.effects });
}
function Dt(e, t) {
  return { eventTime: e, lane: t, tag: 0, payload: null, callback: null, next: null };
}
function en(e, t, n) {
  var r = e.updateQueue;
  if (r === null)
    return null;
  if (r = r.shared, W & 2) {
    var i = r.pending;
    return i === null ? t.next = t : (t.next = i.next, i.next = t), r.pending = t, jt(e, n);
  }
  return i = r.interleaved, i === null ? (t.next = t, ga(r)) : (t.next = i.next, i.next = t), r.interleaved = t, jt(e, n);
}
function Ji(e, t, n) {
  if (t = t.updateQueue, t !== null && (t = t.shared, (n & 4194240) !== 0)) {
    var r = t.lanes;
    r &= e.pendingLanes, n |= r, t.lanes = n, ia(e, n);
  }
}
function Pu(e, t) {
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
function So(e, t, n, r) {
  var i = e.updateQueue;
  Zt = !1;
  var o = i.firstBaseUpdate, s = i.lastBaseUpdate, l = i.shared.pending;
  if (l !== null) {
    i.shared.pending = null;
    var a = l, u = a.next;
    a.next = null, s === null ? o = u : s.next = u, s = a;
    var p = e.alternate;
    p !== null && (p = p.updateQueue, l = p.lastBaseUpdate, l !== s && (l === null ? p.firstBaseUpdate = u : l.next = u, p.lastBaseUpdate = a));
  }
  if (o !== null) {
    var h = i.baseState;
    s = 0, p = u = a = null, l = o;
    do {
      var m = l.lane, y = l.eventTime;
      if ((r & m) === m) {
        p !== null && (p = p.next = {
          eventTime: y,
          lane: 0,
          tag: l.tag,
          payload: l.payload,
          callback: l.callback,
          next: null
        });
        e: {
          var w = e, k = l;
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
              h = ie({}, h, m);
              break e;
            case 2:
              Zt = !0;
          }
        }
        l.callback !== null && l.lane !== 0 && (e.flags |= 64, m = i.effects, m === null ? i.effects = [l] : m.push(l));
      } else
        y = { eventTime: y, lane: m, tag: l.tag, payload: l.payload, callback: l.callback, next: null }, p === null ? (u = p = y, a = h) : p = p.next = y, s |= m;
      if (l = l.next, l === null) {
        if (l = i.shared.pending, l === null)
          break;
        m = l, l = m.next, m.next = null, i.lastBaseUpdate = m, i.shared.pending = null;
      }
    } while (!0);
    if (p === null && (a = h), i.baseState = a, i.firstBaseUpdate = u, i.lastBaseUpdate = p, t = i.shared.interleaved, t !== null) {
      i = t;
      do
        s |= i.lane, i = i.next;
      while (i !== t);
    } else
      o === null && (i.shared.lanes = 0);
    Nn |= s, e.lanes = s, e.memoizedState = h;
  }
}
function Ru(e, t, n) {
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
var Pd = new Nc.Component().refs;
function kl(e, t, n, r) {
  t = e.memoizedState, n = n(r, t), n = n == null ? t : ie({}, t, n), e.memoizedState = n, e.lanes === 0 && (e.updateQueue.baseState = n);
}
var Ko = { isMounted: function(e) {
  return (e = e._reactInternals) ? In(e) === e : !1;
}, enqueueSetState: function(e, t, n) {
  e = e._reactInternals;
  var r = Pe(), i = nn(e), o = Dt(r, i);
  o.payload = t, n != null && (o.callback = n), t = en(e, o, i), t !== null && (ot(t, e, i, r), Ji(t, e, i));
}, enqueueReplaceState: function(e, t, n) {
  e = e._reactInternals;
  var r = Pe(), i = nn(e), o = Dt(r, i);
  o.tag = 1, o.payload = t, n != null && (o.callback = n), t = en(e, o, i), t !== null && (ot(t, e, i, r), Ji(t, e, i));
}, enqueueForceUpdate: function(e, t) {
  e = e._reactInternals;
  var n = Pe(), r = nn(e), i = Dt(n, r);
  i.tag = 2, t != null && (i.callback = t), t = en(e, i, r), t !== null && (ot(t, e, r, n), Ji(t, e, r));
} };
function Du(e, t, n, r, i, o, s) {
  return e = e.stateNode, typeof e.shouldComponentUpdate == "function" ? e.shouldComponentUpdate(r, o, s) : t.prototype && t.prototype.isPureReactComponent ? !qr(n, r) || !qr(i, o) : !0;
}
function Rd(e, t, n) {
  var r = !1, i = sn, o = t.contextType;
  return typeof o == "object" && o !== null ? o = qe(o) : (i = Ae(t) ? En : Ce.current, r = t.contextTypes, o = (r = r != null) ? lr(e, i) : sn), t = new t(n, o), e.memoizedState = t.state !== null && t.state !== void 0 ? t.state : null, t.updater = Ko, e.stateNode = t, t._reactInternals = e, r && (e = e.stateNode, e.__reactInternalMemoizedUnmaskedChildContext = i, e.__reactInternalMemoizedMaskedChildContext = o), t;
}
function Mu(e, t, n, r) {
  e = t.state, typeof t.componentWillReceiveProps == "function" && t.componentWillReceiveProps(n, r), typeof t.UNSAFE_componentWillReceiveProps == "function" && t.UNSAFE_componentWillReceiveProps(n, r), t.state !== e && Ko.enqueueReplaceState(t, t.state, null);
}
function Sl(e, t, n, r) {
  var i = e.stateNode;
  i.props = n, i.state = e.memoizedState, i.refs = Pd, wa(e);
  var o = t.contextType;
  typeof o == "object" && o !== null ? i.context = qe(o) : (o = Ae(t) ? En : Ce.current, i.context = lr(e, o)), i.state = e.memoizedState, o = t.getDerivedStateFromProps, typeof o == "function" && (kl(e, t, o, n), i.state = e.memoizedState), typeof t.getDerivedStateFromProps == "function" || typeof i.getSnapshotBeforeUpdate == "function" || typeof i.UNSAFE_componentWillMount != "function" && typeof i.componentWillMount != "function" || (t = i.state, typeof i.componentWillMount == "function" && i.componentWillMount(), typeof i.UNSAFE_componentWillMount == "function" && i.UNSAFE_componentWillMount(), t !== i.state && Ko.enqueueReplaceState(i, i.state, null), So(e, n, i, r), i.state = e.memoizedState), typeof i.componentDidMount == "function" && (e.flags |= 4194308);
}
function Cr(e, t, n) {
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
        var l = i.refs;
        l === Pd && (l = i.refs = {}), s === null ? delete l[o] : l[o] = s;
      }, t._stringRef = o, t);
    }
    if (typeof e != "string")
      throw Error(g(284));
    if (!n._owner)
      throw Error(g(290, e));
  }
  return e;
}
function Wi(e, t) {
  throw e = Object.prototype.toString.call(t), Error(g(31, e === "[object Object]" ? "object with keys {" + Object.keys(t).join(", ") + "}" : e));
}
function Lu(e) {
  var t = e._init;
  return t(e._payload);
}
function Dd(e) {
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
    return d = rn(d, c), d.index = 0, d.sibling = null, d;
  }
  function o(d, c, f) {
    return d.index = f, e ? (f = d.alternate, f !== null ? (f = f.index, f < c ? (d.flags |= 2, c) : f) : (d.flags |= 2, c)) : (d.flags |= 1048576, c);
  }
  function s(d) {
    return e && d.alternate === null && (d.flags |= 2), d;
  }
  function l(d, c, f, v) {
    return c === null || c.tag !== 6 ? (c = Is(f, d.mode, v), c.return = d, c) : (c = i(c, f), c.return = d, c);
  }
  function a(d, c, f, v) {
    var x = f.type;
    return x === Un ? p(d, c, f.props.children, v, f.key) : c !== null && (c.elementType === x || typeof x == "object" && x !== null && x.$$typeof === Ut && Lu(x) === c.type) ? (v = i(c, f.props), v.ref = Cr(d, c, f), v.return = d, v) : (v = io(f.type, f.key, f.props, null, d.mode, v), v.ref = Cr(d, c, f), v.return = d, v);
  }
  function u(d, c, f, v) {
    return c === null || c.tag !== 4 || c.stateNode.containerInfo !== f.containerInfo || c.stateNode.implementation !== f.implementation ? (c = js(f, d.mode, v), c.return = d, c) : (c = i(c, f.children || []), c.return = d, c);
  }
  function p(d, c, f, v, x) {
    return c === null || c.tag !== 7 ? (c = Sn(f, d.mode, v, x), c.return = d, c) : (c = i(c, f), c.return = d, c);
  }
  function h(d, c, f) {
    if (typeof c == "string" && c !== "" || typeof c == "number")
      return c = Is("" + c, d.mode, f), c.return = d, c;
    if (typeof c == "object" && c !== null) {
      switch (c.$$typeof) {
        case Pi:
          return f = io(c.type, c.key, c.props, null, d.mode, f), f.ref = Cr(d, null, c), f.return = d, f;
        case $n:
          return c = js(c, d.mode, f), c.return = d, c;
        case Ut:
          var v = c._init;
          return h(d, v(c._payload), f);
      }
      if (Mr(c) || _r(c))
        return c = Sn(c, d.mode, f, null), c.return = d, c;
      Wi(d, c);
    }
    return null;
  }
  function m(d, c, f, v) {
    var x = c !== null ? c.key : null;
    if (typeof f == "string" && f !== "" || typeof f == "number")
      return x !== null ? null : l(d, c, "" + f, v);
    if (typeof f == "object" && f !== null) {
      switch (f.$$typeof) {
        case Pi:
          return f.key === x ? a(d, c, f, v) : null;
        case $n:
          return f.key === x ? u(d, c, f, v) : null;
        case Ut:
          return x = f._init, m(
            d,
            c,
            x(f._payload),
            v
          );
      }
      if (Mr(f) || _r(f))
        return x !== null ? null : p(d, c, f, v, null);
      Wi(d, f);
    }
    return null;
  }
  function y(d, c, f, v, x) {
    if (typeof v == "string" && v !== "" || typeof v == "number")
      return d = d.get(f) || null, l(c, d, "" + v, x);
    if (typeof v == "object" && v !== null) {
      switch (v.$$typeof) {
        case Pi:
          return d = d.get(v.key === null ? f : v.key) || null, a(c, d, v, x);
        case $n:
          return d = d.get(v.key === null ? f : v.key) || null, u(c, d, v, x);
        case Ut:
          var S = v._init;
          return y(d, c, f, S(v._payload), x);
      }
      if (Mr(v) || _r(v))
        return d = d.get(f) || null, p(c, d, v, x, null);
      Wi(c, v);
    }
    return null;
  }
  function w(d, c, f, v) {
    for (var x = null, S = null, C = c, E = c = 0, H = null; C !== null && E < f.length; E++) {
      C.index > E ? (H = C, C = null) : H = C.sibling;
      var M = m(d, C, f[E], v);
      if (M === null) {
        C === null && (C = H);
        break;
      }
      e && C && M.alternate === null && t(d, C), c = o(M, c, E), S === null ? x = M : S.sibling = M, S = M, C = H;
    }
    if (E === f.length)
      return n(d, C), ee && mn(d, E), x;
    if (C === null) {
      for (; E < f.length; E++)
        C = h(d, f[E], v), C !== null && (c = o(C, c, E), S === null ? x = C : S.sibling = C, S = C);
      return ee && mn(d, E), x;
    }
    for (C = r(d, C); E < f.length; E++)
      H = y(C, d, E, f[E], v), H !== null && (e && H.alternate !== null && C.delete(H.key === null ? E : H.key), c = o(H, c, E), S === null ? x = H : S.sibling = H, S = H);
    return e && C.forEach(function(pe) {
      return t(d, pe);
    }), ee && mn(d, E), x;
  }
  function k(d, c, f, v) {
    var x = _r(f);
    if (typeof x != "function")
      throw Error(g(150));
    if (f = x.call(f), f == null)
      throw Error(g(151));
    for (var S = x = null, C = c, E = c = 0, H = null, M = f.next(); C !== null && !M.done; E++, M = f.next()) {
      C.index > E ? (H = C, C = null) : H = C.sibling;
      var pe = m(d, C, M.value, v);
      if (pe === null) {
        C === null && (C = H);
        break;
      }
      e && C && pe.alternate === null && t(d, C), c = o(pe, c, E), S === null ? x = pe : S.sibling = pe, S = pe, C = H;
    }
    if (M.done)
      return n(
        d,
        C
      ), ee && mn(d, E), x;
    if (C === null) {
      for (; !M.done; E++, M = f.next())
        M = h(d, M.value, v), M !== null && (c = o(M, c, E), S === null ? x = M : S.sibling = M, S = M);
      return ee && mn(d, E), x;
    }
    for (C = r(d, C); !M.done; E++, M = f.next())
      M = y(C, d, E, M.value, v), M !== null && (e && M.alternate !== null && C.delete(M.key === null ? E : M.key), c = o(M, c, E), S === null ? x = M : S.sibling = M, S = M);
    return e && C.forEach(function(ct) {
      return t(d, ct);
    }), ee && mn(d, E), x;
  }
  function F(d, c, f, v) {
    if (typeof f == "object" && f !== null && f.type === Un && f.key === null && (f = f.props.children), typeof f == "object" && f !== null) {
      switch (f.$$typeof) {
        case Pi:
          e: {
            for (var x = f.key, S = c; S !== null; ) {
              if (S.key === x) {
                if (x = f.type, x === Un) {
                  if (S.tag === 7) {
                    n(d, S.sibling), c = i(S, f.props.children), c.return = d, d = c;
                    break e;
                  }
                } else if (S.elementType === x || typeof x == "object" && x !== null && x.$$typeof === Ut && Lu(x) === S.type) {
                  n(d, S.sibling), c = i(S, f.props), c.ref = Cr(d, S, f), c.return = d, d = c;
                  break e;
                }
                n(d, S);
                break;
              } else
                t(d, S);
              S = S.sibling;
            }
            f.type === Un ? (c = Sn(f.props.children, d.mode, v, f.key), c.return = d, d = c) : (v = io(f.type, f.key, f.props, null, d.mode, v), v.ref = Cr(d, c, f), v.return = d, d = v);
          }
          return s(d);
        case $n:
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
            c = js(f, d.mode, v), c.return = d, d = c;
          }
          return s(d);
        case Ut:
          return S = f._init, F(d, c, S(f._payload), v);
      }
      if (Mr(f))
        return w(d, c, f, v);
      if (_r(f))
        return k(d, c, f, v);
      Wi(d, f);
    }
    return typeof f == "string" && f !== "" || typeof f == "number" ? (f = "" + f, c !== null && c.tag === 6 ? (n(d, c.sibling), c = i(c, f), c.return = d, d = c) : (n(d, c), c = Is(f, d.mode, v), c.return = d, d = c), s(d)) : n(d, c);
  }
  return F;
}
var ur = Dd(!0), Md = Dd(!1), Ti = {}, gt = fn(Ti), ti = fn(Ti), ni = fn(Ti);
function _n(e) {
  if (e === Ti)
    throw Error(g(174));
  return e;
}
function _a(e, t) {
  switch (X(ni, t), X(ti, e), X(gt, Ti), e = t.nodeType, e) {
    case 9:
    case 11:
      t = (t = t.documentElement) ? t.namespaceURI : el(null, "");
      break;
    default:
      e = e === 8 ? t.parentNode : t, t = e.namespaceURI || null, e = e.tagName, t = el(t, e);
  }
  b(gt), X(gt, t);
}
function cr() {
  b(gt), b(ti), b(ni);
}
function Ld(e) {
  _n(ni.current);
  var t = _n(gt.current), n = el(t, e.type);
  t !== n && (X(ti, e), X(gt, n));
}
function ka(e) {
  ti.current === e && (b(gt), b(ti));
}
var ne = fn(0);
function xo(e) {
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
var Os = [];
function Sa() {
  for (var e = 0; e < Os.length; e++)
    Os[e]._workInProgressVersionPrimary = null;
  Os.length = 0;
}
var bi = Ft.ReactCurrentDispatcher, Ps = Ft.ReactCurrentBatchConfig, Tn = 0, re = null, de = null, me = null, Eo = !1, Wr = !1, ri = 0, Kh = 0;
function Se() {
  throw Error(g(321));
}
function xa(e, t) {
  if (t === null)
    return !1;
  for (var n = 0; n < t.length && n < e.length; n++)
    if (!at(e[n], t[n]))
      return !1;
  return !0;
}
function Ea(e, t, n, r, i, o) {
  if (Tn = o, re = t, t.memoizedState = null, t.updateQueue = null, t.lanes = 0, bi.current = e === null || e.memoizedState === null ? bh : em, e = n(r, i), Wr) {
    o = 0;
    do {
      if (Wr = !1, ri = 0, 25 <= o)
        throw Error(g(301));
      o += 1, me = de = null, t.updateQueue = null, bi.current = tm, e = n(r, i);
    } while (Wr);
  }
  if (bi.current = Co, t = de !== null && de.next !== null, Tn = 0, me = de = re = null, Eo = !1, t)
    throw Error(g(300));
  return e;
}
function Ca() {
  var e = ri !== 0;
  return ri = 0, e;
}
function mt() {
  var e = { memoizedState: null, baseState: null, baseQueue: null, queue: null, next: null };
  return me === null ? re.memoizedState = me = e : me = me.next = e, me;
}
function Je() {
  if (de === null) {
    var e = re.alternate;
    e = e !== null ? e.memoizedState : null;
  } else
    e = de.next;
  var t = me === null ? re.memoizedState : me.next;
  if (t !== null)
    me = t, de = e;
  else {
    if (e === null)
      throw Error(g(310));
    de = e, e = { memoizedState: de.memoizedState, baseState: de.baseState, baseQueue: de.baseQueue, queue: de.queue, next: null }, me === null ? re.memoizedState = me = e : me = me.next = e;
  }
  return me;
}
function ii(e, t) {
  return typeof t == "function" ? t(e) : t;
}
function Rs(e) {
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
    var l = s = null, a = null, u = o;
    do {
      var p = u.lane;
      if ((Tn & p) === p)
        a !== null && (a = a.next = { lane: 0, action: u.action, hasEagerState: u.hasEagerState, eagerState: u.eagerState, next: null }), r = u.hasEagerState ? u.eagerState : e(r, u.action);
      else {
        var h = {
          lane: p,
          action: u.action,
          hasEagerState: u.hasEagerState,
          eagerState: u.eagerState,
          next: null
        };
        a === null ? (l = a = h, s = r) : a = a.next = h, re.lanes |= p, Nn |= p;
      }
      u = u.next;
    } while (u !== null && u !== o);
    a === null ? s = r : a.next = l, at(r, t.memoizedState) || (je = !0), t.memoizedState = r, t.baseState = s, t.baseQueue = a, n.lastRenderedState = r;
  }
  if (e = n.interleaved, e !== null) {
    i = e;
    do
      o = i.lane, re.lanes |= o, Nn |= o, i = i.next;
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
    at(o, t.memoizedState) || (je = !0), t.memoizedState = o, t.baseQueue === null && (t.baseState = o), n.lastRenderedState = o;
  }
  return [o, r];
}
function Id() {
}
function jd(e, t) {
  var n = re, r = Je(), i = t(), o = !at(r.memoizedState, i);
  if (o && (r.memoizedState = i, je = !0), r = r.queue, Ta(Fd.bind(null, n, r, e), [e]), r.getSnapshot !== t || o || me !== null && me.memoizedState.tag & 1) {
    if (n.flags |= 2048, oi(9, Ad.bind(null, n, r, i, t), void 0, null), ve === null)
      throw Error(g(349));
    Tn & 30 || zd(n, t, i);
  }
  return i;
}
function zd(e, t, n) {
  e.flags |= 16384, e = { getSnapshot: t, value: n }, t = re.updateQueue, t === null ? (t = { lastEffect: null, stores: null }, re.updateQueue = t, t.stores = [e]) : (n = t.stores, n === null ? t.stores = [e] : n.push(e));
}
function Ad(e, t, n, r) {
  t.value = n, t.getSnapshot = r, Vd(t) && Wd(e);
}
function Fd(e, t, n) {
  return n(function() {
    Vd(t) && Wd(e);
  });
}
function Vd(e) {
  var t = e.getSnapshot;
  e = e.value;
  try {
    var n = t();
    return !at(e, n);
  } catch {
    return !0;
  }
}
function Wd(e) {
  var t = jt(e, 1);
  t !== null && ot(t, e, 1, -1);
}
function Iu(e) {
  var t = mt();
  return typeof e == "function" && (e = e()), t.memoizedState = t.baseState = e, e = { pending: null, interleaved: null, lanes: 0, dispatch: null, lastRenderedReducer: ii, lastRenderedState: e }, t.queue = e, e = e.dispatch = Jh.bind(null, re, e), [t.memoizedState, e];
}
function oi(e, t, n, r) {
  return e = { tag: e, create: t, destroy: n, deps: r, next: null }, t = re.updateQueue, t === null ? (t = { lastEffect: null, stores: null }, re.updateQueue = t, t.lastEffect = e.next = e) : (n = t.lastEffect, n === null ? t.lastEffect = e.next = e : (r = n.next, n.next = e, e.next = r, t.lastEffect = e)), e;
}
function $d() {
  return Je().memoizedState;
}
function eo(e, t, n, r) {
  var i = mt();
  re.flags |= e, i.memoizedState = oi(1 | t, n, void 0, r === void 0 ? null : r);
}
function Go(e, t, n, r) {
  var i = Je();
  r = r === void 0 ? null : r;
  var o = void 0;
  if (de !== null) {
    var s = de.memoizedState;
    if (o = s.destroy, r !== null && xa(r, s.deps)) {
      i.memoizedState = oi(t, n, o, r);
      return;
    }
  }
  re.flags |= e, i.memoizedState = oi(1 | t, n, o, r);
}
function ju(e, t) {
  return eo(8390656, 8, e, t);
}
function Ta(e, t) {
  return Go(2048, 8, e, t);
}
function Ud(e, t) {
  return Go(4, 2, e, t);
}
function Zd(e, t) {
  return Go(4, 4, e, t);
}
function Bd(e, t) {
  if (typeof t == "function")
    return e = e(), t(e), function() {
      t(null);
    };
  if (t != null)
    return e = e(), t.current = e, function() {
      t.current = null;
    };
}
function Hd(e, t, n) {
  return n = n != null ? n.concat([e]) : null, Go(4, 4, Bd.bind(null, t, e), n);
}
function Na() {
}
function Yd(e, t) {
  var n = Je();
  t = t === void 0 ? null : t;
  var r = n.memoizedState;
  return r !== null && t !== null && xa(t, r[1]) ? r[0] : (n.memoizedState = [e, t], e);
}
function Qd(e, t) {
  var n = Je();
  t = t === void 0 ? null : t;
  var r = n.memoizedState;
  return r !== null && t !== null && xa(t, r[1]) ? r[0] : (e = e(), n.memoizedState = [e, t], e);
}
function Xd(e, t, n) {
  return Tn & 21 ? (at(n, t) || (n = qc(), re.lanes |= n, Nn |= n, e.baseState = !0), t) : (e.baseState && (e.baseState = !1, je = !0), e.memoizedState = n);
}
function Gh(e, t) {
  var n = B;
  B = n !== 0 && 4 > n ? n : 4, e(!0);
  var r = Ps.transition;
  Ps.transition = {};
  try {
    e(!1), t();
  } finally {
    B = n, Ps.transition = r;
  }
}
function Kd() {
  return Je().memoizedState;
}
function qh(e, t, n) {
  var r = nn(e);
  if (n = { lane: r, action: n, hasEagerState: !1, eagerState: null, next: null }, Gd(e))
    qd(t, n);
  else if (n = Nd(e, t, n, r), n !== null) {
    var i = Pe();
    ot(n, e, r, i), Jd(n, t, r);
  }
}
function Jh(e, t, n) {
  var r = nn(e), i = { lane: r, action: n, hasEagerState: !1, eagerState: null, next: null };
  if (Gd(e))
    qd(t, i);
  else {
    var o = e.alternate;
    if (e.lanes === 0 && (o === null || o.lanes === 0) && (o = t.lastRenderedReducer, o !== null))
      try {
        var s = t.lastRenderedState, l = o(s, n);
        if (i.hasEagerState = !0, i.eagerState = l, at(l, s)) {
          var a = t.interleaved;
          a === null ? (i.next = i, ga(t)) : (i.next = a.next, a.next = i), t.interleaved = i;
          return;
        }
      } catch {
      } finally {
      }
    n = Nd(e, t, i, r), n !== null && (i = Pe(), ot(n, e, r, i), Jd(n, t, r));
  }
}
function Gd(e) {
  var t = e.alternate;
  return e === re || t !== null && t === re;
}
function qd(e, t) {
  Wr = Eo = !0;
  var n = e.pending;
  n === null ? t.next = t : (t.next = n.next, n.next = t), e.pending = t;
}
function Jd(e, t, n) {
  if (n & 4194240) {
    var r = t.lanes;
    r &= e.pendingLanes, n |= r, t.lanes = n, ia(e, n);
  }
}
var Co = { readContext: qe, useCallback: Se, useContext: Se, useEffect: Se, useImperativeHandle: Se, useInsertionEffect: Se, useLayoutEffect: Se, useMemo: Se, useReducer: Se, useRef: Se, useState: Se, useDebugValue: Se, useDeferredValue: Se, useTransition: Se, useMutableSource: Se, useSyncExternalStore: Se, useId: Se, unstable_isNewReconciler: !1 }, bh = { readContext: qe, useCallback: function(e, t) {
  return mt().memoizedState = [e, t === void 0 ? null : t], e;
}, useContext: qe, useEffect: ju, useImperativeHandle: function(e, t, n) {
  return n = n != null ? n.concat([e]) : null, eo(
    4194308,
    4,
    Bd.bind(null, t, e),
    n
  );
}, useLayoutEffect: function(e, t) {
  return eo(4194308, 4, e, t);
}, useInsertionEffect: function(e, t) {
  return eo(4, 2, e, t);
}, useMemo: function(e, t) {
  var n = mt();
  return t = t === void 0 ? null : t, e = e(), n.memoizedState = [e, t], e;
}, useReducer: function(e, t, n) {
  var r = mt();
  return t = n !== void 0 ? n(t) : t, r.memoizedState = r.baseState = t, e = { pending: null, interleaved: null, lanes: 0, dispatch: null, lastRenderedReducer: e, lastRenderedState: t }, r.queue = e, e = e.dispatch = qh.bind(null, re, e), [r.memoizedState, e];
}, useRef: function(e) {
  var t = mt();
  return e = { current: e }, t.memoizedState = e;
}, useState: Iu, useDebugValue: Na, useDeferredValue: function(e) {
  return mt().memoizedState = e;
}, useTransition: function() {
  var e = Iu(!1), t = e[0];
  return e = Gh.bind(null, e[1]), mt().memoizedState = e, [t, e];
}, useMutableSource: function() {
}, useSyncExternalStore: function(e, t, n) {
  var r = re, i = mt();
  if (ee) {
    if (n === void 0)
      throw Error(g(407));
    n = n();
  } else {
    if (n = t(), ve === null)
      throw Error(g(349));
    Tn & 30 || zd(r, t, n);
  }
  i.memoizedState = n;
  var o = { value: n, getSnapshot: t };
  return i.queue = o, ju(Fd.bind(
    null,
    r,
    o,
    e
  ), [e]), r.flags |= 2048, oi(9, Ad.bind(null, r, o, n, t), void 0, null), n;
}, useId: function() {
  var e = mt(), t = ve.identifierPrefix;
  if (ee) {
    var n = Pt, r = Ot;
    n = (r & ~(1 << 32 - it(r) - 1)).toString(32) + n, t = ":" + t + "R" + n, n = ri++, 0 < n && (t += "H" + n.toString(32)), t += ":";
  } else
    n = Kh++, t = ":" + t + "r" + n.toString(32) + ":";
  return e.memoizedState = t;
}, unstable_isNewReconciler: !1 }, em = {
  readContext: qe,
  useCallback: Yd,
  useContext: qe,
  useEffect: Ta,
  useImperativeHandle: Hd,
  useInsertionEffect: Ud,
  useLayoutEffect: Zd,
  useMemo: Qd,
  useReducer: Rs,
  useRef: $d,
  useState: function() {
    return Rs(ii);
  },
  useDebugValue: Na,
  useDeferredValue: function(e) {
    var t = Je();
    return Xd(t, de.memoizedState, e);
  },
  useTransition: function() {
    var e = Rs(ii)[0], t = Je().memoizedState;
    return [e, t];
  },
  useMutableSource: Id,
  useSyncExternalStore: jd,
  useId: Kd,
  unstable_isNewReconciler: !1
}, tm = { readContext: qe, useCallback: Yd, useContext: qe, useEffect: Ta, useImperativeHandle: Hd, useInsertionEffect: Ud, useLayoutEffect: Zd, useMemo: Qd, useReducer: Ds, useRef: $d, useState: function() {
  return Ds(ii);
}, useDebugValue: Na, useDeferredValue: function(e) {
  var t = Je();
  return de === null ? t.memoizedState = e : Xd(t, de.memoizedState, e);
}, useTransition: function() {
  var e = Ds(ii)[0], t = Je().memoizedState;
  return [e, t];
}, useMutableSource: Id, useSyncExternalStore: jd, useId: Kd, unstable_isNewReconciler: !1 };
function dr(e, t) {
  try {
    var n = "", r = t;
    do
      n += Pp(r), r = r.return;
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
function xl(e, t) {
  try {
    console.error(t.value);
  } catch (n) {
    setTimeout(function() {
      throw n;
    });
  }
}
var nm = typeof WeakMap == "function" ? WeakMap : Map;
function bd(e, t, n) {
  n = Dt(-1, n), n.tag = 3, n.payload = { element: null };
  var r = t.value;
  return n.callback = function() {
    No || (No = !0, Ll = r), xl(e, t);
  }, n;
}
function ef(e, t, n) {
  n = Dt(-1, n), n.tag = 3;
  var r = e.type.getDerivedStateFromError;
  if (typeof r == "function") {
    var i = t.value;
    n.payload = function() {
      return r(i);
    }, n.callback = function() {
      xl(e, t);
    };
  }
  var o = e.stateNode;
  return o !== null && typeof o.componentDidCatch == "function" && (n.callback = function() {
    xl(e, t), typeof r != "function" && (tn === null ? tn = /* @__PURE__ */ new Set([this]) : tn.add(this));
    var s = t.stack;
    this.componentDidCatch(t.value, { componentStack: s !== null ? s : "" });
  }), n;
}
function zu(e, t, n) {
  var r = e.pingCache;
  if (r === null) {
    r = e.pingCache = new nm();
    var i = /* @__PURE__ */ new Set();
    r.set(t, i);
  } else
    i = r.get(t), i === void 0 && (i = /* @__PURE__ */ new Set(), r.set(t, i));
  i.has(n) || (i.add(n), e = vm.bind(null, e, t, n), t.then(e, e));
}
function Au(e) {
  do {
    var t;
    if ((t = e.tag === 13) && (t = e.memoizedState, t = t !== null ? t.dehydrated !== null : !0), t)
      return e;
    e = e.return;
  } while (e !== null);
  return null;
}
function Fu(e, t, n, r, i) {
  return e.mode & 1 ? (e.flags |= 65536, e.lanes = i, e) : (e === t ? e.flags |= 65536 : (e.flags |= 128, n.flags |= 131072, n.flags &= -52805, n.tag === 1 && (n.alternate === null ? n.tag = 17 : (t = Dt(-1, 1), t.tag = 2, en(n, t, 1))), n.lanes |= 1), e);
}
var rm = Ft.ReactCurrentOwner, je = !1;
function Oe(e, t, n, r) {
  t.child = e === null ? Md(t, null, n, r) : ur(t, e.child, n, r);
}
function Vu(e, t, n, r, i) {
  n = n.render;
  var o = t.ref;
  return rr(t, i), r = Ea(e, t, n, r, o, i), n = Ca(), e !== null && !je ? (t.updateQueue = e.updateQueue, t.flags &= -2053, e.lanes &= ~i, zt(e, t, i)) : (ee && n && fa(t), t.flags |= 1, Oe(e, t, r, i), t.child);
}
function Wu(e, t, n, r, i) {
  if (e === null) {
    var o = n.type;
    return typeof o == "function" && !ja(o) && o.defaultProps === void 0 && n.compare === null && n.defaultProps === void 0 ? (t.tag = 15, t.type = o, tf(e, t, o, r, i)) : (e = io(n.type, null, r, t, t.mode, i), e.ref = t.ref, e.return = t, t.child = e);
  }
  if (o = e.child, !(e.lanes & i)) {
    var s = o.memoizedProps;
    if (n = n.compare, n = n !== null ? n : qr, n(s, r) && e.ref === t.ref)
      return zt(e, t, i);
  }
  return t.flags |= 1, e = rn(o, r), e.ref = t.ref, e.return = t, t.child = e;
}
function tf(e, t, n, r, i) {
  if (e !== null) {
    var o = e.memoizedProps;
    if (qr(o, r) && e.ref === t.ref)
      if (je = !1, t.pendingProps = r = o, (e.lanes & i) !== 0)
        e.flags & 131072 && (je = !0);
      else
        return t.lanes = e.lanes, zt(e, t, i);
  }
  return El(e, t, n, r, i);
}
function nf(e, t, n) {
  var r = t.pendingProps, i = r.children, o = e !== null ? e.memoizedState : null;
  if (r.mode === "hidden")
    if (!(t.mode & 1))
      t.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }, X(Jn, We), We |= n;
    else {
      if (!(n & 1073741824))
        return e = o !== null ? o.baseLanes | n : n, t.lanes = t.childLanes = 1073741824, t.memoizedState = { baseLanes: e, cachePool: null, transitions: null }, t.updateQueue = null, X(Jn, We), We |= e, null;
      t.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }, r = o !== null ? o.baseLanes : n, X(Jn, We), We |= r;
    }
  else
    o !== null ? (r = o.baseLanes | n, t.memoizedState = null) : r = n, X(Jn, We), We |= r;
  return Oe(e, t, i, n), t.child;
}
function rf(e, t) {
  var n = t.ref;
  (e === null && n !== null || e !== null && e.ref !== n) && (t.flags |= 512, t.flags |= 2097152);
}
function El(e, t, n, r, i) {
  var o = Ae(n) ? En : Ce.current;
  return o = lr(t, o), rr(t, i), n = Ea(e, t, n, r, o, i), r = Ca(), e !== null && !je ? (t.updateQueue = e.updateQueue, t.flags &= -2053, e.lanes &= ~i, zt(e, t, i)) : (ee && r && fa(t), t.flags |= 1, Oe(e, t, n, i), t.child);
}
function $u(e, t, n, r, i) {
  if (Ae(n)) {
    var o = !0;
    yo(t);
  } else
    o = !1;
  if (rr(t, i), t.stateNode === null)
    to(e, t), Rd(t, n, r), Sl(t, n, r, i), r = !0;
  else if (e === null) {
    var s = t.stateNode, l = t.memoizedProps;
    s.props = l;
    var a = s.context, u = n.contextType;
    typeof u == "object" && u !== null ? u = qe(u) : (u = Ae(n) ? En : Ce.current, u = lr(t, u));
    var p = n.getDerivedStateFromProps, h = typeof p == "function" || typeof s.getSnapshotBeforeUpdate == "function";
    h || typeof s.UNSAFE_componentWillReceiveProps != "function" && typeof s.componentWillReceiveProps != "function" || (l !== r || a !== u) && Mu(t, s, r, u), Zt = !1;
    var m = t.memoizedState;
    s.state = m, So(t, r, s, i), a = t.memoizedState, l !== r || m !== a || ze.current || Zt ? (typeof p == "function" && (kl(t, n, p, r), a = t.memoizedState), (l = Zt || Du(t, n, l, r, m, a, u)) ? (h || typeof s.UNSAFE_componentWillMount != "function" && typeof s.componentWillMount != "function" || (typeof s.componentWillMount == "function" && s.componentWillMount(), typeof s.UNSAFE_componentWillMount == "function" && s.UNSAFE_componentWillMount()), typeof s.componentDidMount == "function" && (t.flags |= 4194308)) : (typeof s.componentDidMount == "function" && (t.flags |= 4194308), t.memoizedProps = r, t.memoizedState = a), s.props = r, s.state = a, s.context = u, r = l) : (typeof s.componentDidMount == "function" && (t.flags |= 4194308), r = !1);
  } else {
    s = t.stateNode, Od(e, t), l = t.memoizedProps, u = t.type === t.elementType ? l : et(t.type, l), s.props = u, h = t.pendingProps, m = s.context, a = n.contextType, typeof a == "object" && a !== null ? a = qe(a) : (a = Ae(n) ? En : Ce.current, a = lr(t, a));
    var y = n.getDerivedStateFromProps;
    (p = typeof y == "function" || typeof s.getSnapshotBeforeUpdate == "function") || typeof s.UNSAFE_componentWillReceiveProps != "function" && typeof s.componentWillReceiveProps != "function" || (l !== h || m !== a) && Mu(t, s, r, a), Zt = !1, m = t.memoizedState, s.state = m, So(t, r, s, i);
    var w = t.memoizedState;
    l !== h || m !== w || ze.current || Zt ? (typeof y == "function" && (kl(t, n, y, r), w = t.memoizedState), (u = Zt || Du(t, n, u, r, m, w, a) || !1) ? (p || typeof s.UNSAFE_componentWillUpdate != "function" && typeof s.componentWillUpdate != "function" || (typeof s.componentWillUpdate == "function" && s.componentWillUpdate(r, w, a), typeof s.UNSAFE_componentWillUpdate == "function" && s.UNSAFE_componentWillUpdate(r, w, a)), typeof s.componentDidUpdate == "function" && (t.flags |= 4), typeof s.getSnapshotBeforeUpdate == "function" && (t.flags |= 1024)) : (typeof s.componentDidUpdate != "function" || l === e.memoizedProps && m === e.memoizedState || (t.flags |= 4), typeof s.getSnapshotBeforeUpdate != "function" || l === e.memoizedProps && m === e.memoizedState || (t.flags |= 1024), t.memoizedProps = r, t.memoizedState = w), s.props = r, s.state = w, s.context = a, r = u) : (typeof s.componentDidUpdate != "function" || l === e.memoizedProps && m === e.memoizedState || (t.flags |= 4), typeof s.getSnapshotBeforeUpdate != "function" || l === e.memoizedProps && m === e.memoizedState || (t.flags |= 1024), r = !1);
  }
  return Cl(e, t, n, r, o, i);
}
function Cl(e, t, n, r, i, o) {
  rf(e, t);
  var s = (t.flags & 128) !== 0;
  if (!r && !s)
    return i && Tu(t, n, !1), zt(e, t, o);
  r = t.stateNode, rm.current = t;
  var l = s && typeof n.getDerivedStateFromError != "function" ? null : r.render();
  return t.flags |= 1, e !== null && s ? (t.child = ur(t, e.child, null, o), t.child = ur(t, null, l, o)) : Oe(e, t, l, o), t.memoizedState = r.state, i && Tu(t, n, !0), t.child;
}
function of(e) {
  var t = e.stateNode;
  t.pendingContext ? Cu(e, t.pendingContext, t.pendingContext !== t.context) : t.context && Cu(e, t.context, !1), _a(e, t.containerInfo);
}
function Uu(e, t, n, r, i) {
  return ar(), ha(i), t.flags |= 256, Oe(e, t, n, r), t.child;
}
var Tl = { dehydrated: null, treeContext: null, retryLane: 0 };
function Nl(e) {
  return { baseLanes: e, cachePool: null, transitions: null };
}
function sf(e, t, n) {
  var r = t.pendingProps, i = ne.current, o = !1, s = (t.flags & 128) !== 0, l;
  if ((l = s) || (l = e !== null && e.memoizedState === null ? !1 : (i & 2) !== 0), l ? (o = !0, t.flags &= -129) : (e === null || e.memoizedState !== null) && (i |= 1), X(ne, i & 1), e === null)
    return wl(t), e = t.memoizedState, e !== null && (e = e.dehydrated, e !== null) ? (t.mode & 1 ? e.data === "$!" ? t.lanes = 8 : t.lanes = 1073741824 : t.lanes = 1, null) : (s = r.children, e = r.fallback, o ? (r = t.mode, o = t.child, s = { mode: "hidden", children: s }, !(r & 1) && o !== null ? (o.childLanes = 0, o.pendingProps = s) : o = bo(s, r, 0, null), e = Sn(e, r, n, null), o.return = t, e.return = t, o.sibling = e, t.child = o, t.child.memoizedState = Nl(n), t.memoizedState = Tl, e) : Oa(t, s));
  if (i = e.memoizedState, i !== null && (l = i.dehydrated, l !== null))
    return im(e, t, s, r, l, i, n);
  if (o) {
    o = r.fallback, s = t.mode, i = e.child, l = i.sibling;
    var a = { mode: "hidden", children: r.children };
    return !(s & 1) && t.child !== i ? (r = t.child, r.childLanes = 0, r.pendingProps = a, t.deletions = null) : (r = rn(i, a), r.subtreeFlags = i.subtreeFlags & 14680064), l !== null ? o = rn(l, o) : (o = Sn(o, s, n, null), o.flags |= 2), o.return = t, r.return = t, r.sibling = o, t.child = r, r = o, o = t.child, s = e.child.memoizedState, s = s === null ? Nl(n) : { baseLanes: s.baseLanes | n, cachePool: null, transitions: s.transitions }, o.memoizedState = s, o.childLanes = e.childLanes & ~n, t.memoizedState = Tl, r;
  }
  return o = e.child, e = o.sibling, r = rn(o, { mode: "visible", children: r.children }), !(t.mode & 1) && (r.lanes = n), r.return = t, r.sibling = null, e !== null && (n = t.deletions, n === null ? (t.deletions = [e], t.flags |= 16) : n.push(e)), t.child = r, t.memoizedState = null, r;
}
function Oa(e, t) {
  return t = bo({ mode: "visible", children: t }, e.mode, 0, null), t.return = e, e.child = t;
}
function $i(e, t, n, r) {
  return r !== null && ha(r), ur(t, e.child, null, n), e = Oa(t, t.pendingProps.children), e.flags |= 2, t.memoizedState = null, e;
}
function im(e, t, n, r, i, o, s) {
  if (n)
    return t.flags & 256 ? (t.flags &= -257, r = Ms(Error(g(422))), $i(e, t, s, r)) : t.memoizedState !== null ? (t.child = e.child, t.flags |= 128, null) : (o = r.fallback, i = t.mode, r = bo({ mode: "visible", children: r.children }, i, 0, null), o = Sn(o, i, s, null), o.flags |= 2, r.return = t, o.return = t, r.sibling = o, t.child = r, t.mode & 1 && ur(t, e.child, null, s), t.child.memoizedState = Nl(s), t.memoizedState = Tl, o);
  if (!(t.mode & 1))
    return $i(e, t, s, null);
  if (i.data === "$!") {
    if (r = i.nextSibling && i.nextSibling.dataset, r)
      var l = r.dgst;
    return r = l, o = Error(g(419)), r = Ms(o, r, void 0), $i(e, t, s, r);
  }
  if (l = (s & e.childLanes) !== 0, je || l) {
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
      i = i & (r.suspendedLanes | s) ? 0 : i, i !== 0 && i !== o.retryLane && (o.retryLane = i, jt(e, i), ot(r, e, i, -1));
    }
    return Ia(), r = Ms(Error(g(421))), $i(e, t, s, r);
  }
  return i.data === "$?" ? (t.flags |= 128, t.child = e.child, t = ym.bind(null, e), i._reactRetry = t, null) : (e = o.treeContext, $e = bt(i.nextSibling), Ue = t, ee = !0, nt = null, e !== null && (Qe[Xe++] = Ot, Qe[Xe++] = Pt, Qe[Xe++] = Cn, Ot = e.id, Pt = e.overflow, Cn = t), t = Oa(t, r.children), t.flags |= 4096, t);
}
function Zu(e, t, n) {
  e.lanes |= t;
  var r = e.alternate;
  r !== null && (r.lanes |= t), _l(e.return, t, n);
}
function Ls(e, t, n, r, i) {
  var o = e.memoizedState;
  o === null ? e.memoizedState = { isBackwards: t, rendering: null, renderingStartTime: 0, last: r, tail: n, tailMode: i } : (o.isBackwards = t, o.rendering = null, o.renderingStartTime = 0, o.last = r, o.tail = n, o.tailMode = i);
}
function lf(e, t, n) {
  var r = t.pendingProps, i = r.revealOrder, o = r.tail;
  if (Oe(e, t, r.children, n), r = ne.current, r & 2)
    r = r & 1 | 2, t.flags |= 128;
  else {
    if (e !== null && e.flags & 128)
      e:
        for (e = t.child; e !== null; ) {
          if (e.tag === 13)
            e.memoizedState !== null && Zu(e, n, t);
          else if (e.tag === 19)
            Zu(e, n, t);
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
  if (X(ne, r), !(t.mode & 1))
    t.memoizedState = null;
  else
    switch (i) {
      case "forwards":
        for (n = t.child, i = null; n !== null; )
          e = n.alternate, e !== null && xo(e) === null && (i = n), n = n.sibling;
        n = i, n === null ? (i = t.child, t.child = null) : (i = n.sibling, n.sibling = null), Ls(t, !1, i, n, o);
        break;
      case "backwards":
        for (n = null, i = t.child, t.child = null; i !== null; ) {
          if (e = i.alternate, e !== null && xo(e) === null) {
            t.child = i;
            break;
          }
          e = i.sibling, i.sibling = n, n = i, i = e;
        }
        Ls(t, !0, n, null, o);
        break;
      case "together":
        Ls(t, !1, null, null, void 0);
        break;
      default:
        t.memoizedState = null;
    }
  return t.child;
}
function to(e, t) {
  !(t.mode & 1) && e !== null && (e.alternate = null, t.alternate = null, t.flags |= 2);
}
function zt(e, t, n) {
  if (e !== null && (t.dependencies = e.dependencies), Nn |= t.lanes, !(n & t.childLanes))
    return null;
  if (e !== null && t.child !== e.child)
    throw Error(g(153));
  if (t.child !== null) {
    for (e = t.child, n = rn(e, e.pendingProps), t.child = n, n.return = t; e.sibling !== null; )
      e = e.sibling, n = n.sibling = rn(e, e.pendingProps), n.return = t;
    n.sibling = null;
  }
  return t.child;
}
function om(e, t, n) {
  switch (t.tag) {
    case 3:
      of(t), ar();
      break;
    case 5:
      Ld(t);
      break;
    case 1:
      Ae(t.type) && yo(t);
      break;
    case 4:
      _a(t, t.stateNode.containerInfo);
      break;
    case 10:
      var r = t.type._context, i = t.memoizedProps.value;
      X(_o, r._currentValue), r._currentValue = i;
      break;
    case 13:
      if (r = t.memoizedState, r !== null)
        return r.dehydrated !== null ? (X(ne, ne.current & 1), t.flags |= 128, null) : n & t.child.childLanes ? sf(e, t, n) : (X(ne, ne.current & 1), e = zt(e, t, n), e !== null ? e.sibling : null);
      X(ne, ne.current & 1);
      break;
    case 19:
      if (r = (n & t.childLanes) !== 0, e.flags & 128) {
        if (r)
          return lf(e, t, n);
        t.flags |= 128;
      }
      if (i = t.memoizedState, i !== null && (i.rendering = null, i.tail = null, i.lastEffect = null), X(ne, ne.current), r)
        break;
      return null;
    case 22:
    case 23:
      return t.lanes = 0, nf(e, t, n);
  }
  return zt(e, t, n);
}
var af, Ol, uf, cf;
af = function(e, t) {
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
Ol = function() {
};
uf = function(e, t, n, r) {
  var i = e.memoizedProps;
  if (i !== r) {
    e = t.stateNode, _n(gt.current);
    var o = null;
    switch (n) {
      case "input":
        i = Gs(e, i), r = Gs(e, r), o = [];
        break;
      case "select":
        i = ie({}, i, { value: void 0 }), r = ie({}, r, { value: void 0 }), o = [];
        break;
      case "textarea":
        i = bs(e, i), r = bs(e, r), o = [];
        break;
      default:
        typeof i.onClick != "function" && typeof r.onClick == "function" && (e.onclick = mo);
    }
    tl(n, r);
    var s;
    n = null;
    for (u in i)
      if (!r.hasOwnProperty(u) && i.hasOwnProperty(u) && i[u] != null)
        if (u === "style") {
          var l = i[u];
          for (s in l)
            l.hasOwnProperty(s) && (n || (n = {}), n[s] = "");
        } else
          u !== "dangerouslySetInnerHTML" && u !== "children" && u !== "suppressContentEditableWarning" && u !== "suppressHydrationWarning" && u !== "autoFocus" && (Br.hasOwnProperty(u) ? o || (o = []) : (o = o || []).push(u, null));
    for (u in r) {
      var a = r[u];
      if (l = i != null ? i[u] : void 0, r.hasOwnProperty(u) && a !== l && (a != null || l != null))
        if (u === "style")
          if (l) {
            for (s in l)
              !l.hasOwnProperty(s) || a && a.hasOwnProperty(s) || (n || (n = {}), n[s] = "");
            for (s in a)
              a.hasOwnProperty(s) && l[s] !== a[s] && (n || (n = {}), n[s] = a[s]);
          } else
            n || (o || (o = []), o.push(
              u,
              n
            )), n = a;
        else
          u === "dangerouslySetInnerHTML" ? (a = a ? a.__html : void 0, l = l ? l.__html : void 0, a != null && l !== a && (o = o || []).push(u, a)) : u === "children" ? typeof a != "string" && typeof a != "number" || (o = o || []).push(u, "" + a) : u !== "suppressContentEditableWarning" && u !== "suppressHydrationWarning" && (Br.hasOwnProperty(u) ? (a != null && u === "onScroll" && J("scroll", e), o || l === a || (o = [])) : (o = o || []).push(u, a));
    }
    n && (o = o || []).push("style", n);
    var u = o;
    (t.updateQueue = u) && (t.flags |= 4);
  }
};
cf = function(e, t, n, r) {
  n !== r && (t.flags |= 4);
};
function Tr(e, t) {
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
function sm(e, t, n) {
  var r = t.pendingProps;
  switch (pa(t), t.tag) {
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
      return Ae(t.type) && vo(), xe(t), null;
    case 3:
      return r = t.stateNode, cr(), b(ze), b(Ce), Sa(), r.pendingContext && (r.context = r.pendingContext, r.pendingContext = null), (e === null || e.child === null) && (Vi(t) ? t.flags |= 4 : e === null || e.memoizedState.isDehydrated && !(t.flags & 256) || (t.flags |= 1024, nt !== null && (zl(nt), nt = null))), Ol(e, t), xe(t), null;
    case 5:
      ka(t);
      var i = _n(ni.current);
      if (n = t.type, e !== null && t.stateNode != null)
        uf(e, t, n, r, i), e.ref !== t.ref && (t.flags |= 512, t.flags |= 2097152);
      else {
        if (!r) {
          if (t.stateNode === null)
            throw Error(g(166));
          return xe(t), null;
        }
        if (e = _n(gt.current), Vi(t)) {
          r = t.stateNode, n = t.type;
          var o = t.memoizedProps;
          switch (r[vt] = t, r[ei] = o, e = (t.mode & 1) !== 0, n) {
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
              for (i = 0; i < Ir.length; i++)
                J(Ir[i], r);
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
              Ja(r, o), J("invalid", r);
              break;
            case "select":
              r._wrapperState = { wasMultiple: !!o.multiple }, J("invalid", r);
              break;
            case "textarea":
              eu(r, o), J("invalid", r);
          }
          tl(n, o), i = null;
          for (var s in o)
            if (o.hasOwnProperty(s)) {
              var l = o[s];
              s === "children" ? typeof l == "string" ? r.textContent !== l && (o.suppressHydrationWarning !== !0 && Fi(r.textContent, l, e), i = ["children", l]) : typeof l == "number" && r.textContent !== "" + l && (o.suppressHydrationWarning !== !0 && Fi(
                r.textContent,
                l,
                e
              ), i = ["children", "" + l]) : Br.hasOwnProperty(s) && l != null && s === "onScroll" && J("scroll", r);
            }
          switch (n) {
            case "input":
              Ri(r), ba(r, o, !0);
              break;
            case "textarea":
              Ri(r), tu(r);
              break;
            case "select":
            case "option":
              break;
            default:
              typeof o.onClick == "function" && (r.onclick = mo);
          }
          r = i, t.updateQueue = r, r !== null && (t.flags |= 4);
        } else {
          s = i.nodeType === 9 ? i : i.ownerDocument, e === "http://www.w3.org/1999/xhtml" && (e = zc(n)), e === "http://www.w3.org/1999/xhtml" ? n === "script" ? (e = s.createElement("div"), e.innerHTML = "<script><\/script>", e = e.removeChild(e.firstChild)) : typeof r.is == "string" ? e = s.createElement(n, { is: r.is }) : (e = s.createElement(n), n === "select" && (s = e, r.multiple ? s.multiple = !0 : r.size && (s.size = r.size))) : e = s.createElementNS(e, n), e[vt] = t, e[ei] = r, af(e, t, !1, !1), t.stateNode = e;
          e: {
            switch (s = nl(n, r), n) {
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
                for (i = 0; i < Ir.length; i++)
                  J(Ir[i], e);
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
                Ja(e, r), i = Gs(e, r), J("invalid", e);
                break;
              case "option":
                i = r;
                break;
              case "select":
                e._wrapperState = { wasMultiple: !!r.multiple }, i = ie({}, r, { value: void 0 }), J("invalid", e);
                break;
              case "textarea":
                eu(e, r), i = bs(e, r), J("invalid", e);
                break;
              default:
                i = r;
            }
            tl(n, i), l = i;
            for (o in l)
              if (l.hasOwnProperty(o)) {
                var a = l[o];
                o === "style" ? Vc(e, a) : o === "dangerouslySetInnerHTML" ? (a = a ? a.__html : void 0, a != null && Ac(e, a)) : o === "children" ? typeof a == "string" ? (n !== "textarea" || a !== "") && Hr(e, a) : typeof a == "number" && Hr(e, "" + a) : o !== "suppressContentEditableWarning" && o !== "suppressHydrationWarning" && o !== "autoFocus" && (Br.hasOwnProperty(o) ? a != null && o === "onScroll" && J("scroll", e) : a != null && Jl(e, o, a, s));
              }
            switch (n) {
              case "input":
                Ri(e), ba(e, r, !1);
                break;
              case "textarea":
                Ri(e), tu(e);
                break;
              case "option":
                r.value != null && e.setAttribute("value", "" + on(r.value));
                break;
              case "select":
                e.multiple = !!r.multiple, o = r.value, o != null ? bn(e, !!r.multiple, o, !1) : r.defaultValue != null && bn(
                  e,
                  !!r.multiple,
                  r.defaultValue,
                  !0
                );
                break;
              default:
                typeof i.onClick == "function" && (e.onclick = mo);
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
        cf(e, t, e.memoizedProps, r);
      else {
        if (typeof r != "string" && t.stateNode === null)
          throw Error(g(166));
        if (n = _n(ni.current), _n(gt.current), Vi(t)) {
          if (r = t.stateNode, n = t.memoizedProps, r[vt] = t, (o = r.nodeValue !== n) && (e = Ue, e !== null))
            switch (e.tag) {
              case 3:
                Fi(r.nodeValue, n, (e.mode & 1) !== 0);
                break;
              case 5:
                e.memoizedProps.suppressHydrationWarning !== !0 && Fi(r.nodeValue, n, (e.mode & 1) !== 0);
            }
          o && (t.flags |= 4);
        } else
          r = (n.nodeType === 9 ? n : n.ownerDocument).createTextNode(r), r[vt] = t, t.stateNode = r;
      }
      return xe(t), null;
    case 13:
      if (b(ne), r = t.memoizedState, e === null || e.memoizedState !== null && e.memoizedState.dehydrated !== null) {
        if (ee && $e !== null && t.mode & 1 && !(t.flags & 128))
          Td(), ar(), t.flags |= 98560, o = !1;
        else if (o = Vi(t), r !== null && r.dehydrated !== null) {
          if (e === null) {
            if (!o)
              throw Error(g(318));
            if (o = t.memoizedState, o = o !== null ? o.dehydrated : null, !o)
              throw Error(g(317));
            o[vt] = t;
          } else
            ar(), !(t.flags & 128) && (t.memoizedState = null), t.flags |= 4;
          xe(t), o = !1;
        } else
          nt !== null && (zl(nt), nt = null), o = !0;
        if (!o)
          return t.flags & 65536 ? t : null;
      }
      return t.flags & 128 ? (t.lanes = n, t) : (r = r !== null, r !== (e !== null && e.memoizedState !== null) && r && (t.child.flags |= 8192, t.mode & 1 && (e === null || ne.current & 1 ? fe === 0 && (fe = 3) : Ia())), t.updateQueue !== null && (t.flags |= 4), xe(t), null);
    case 4:
      return cr(), Ol(e, t), e === null && Jr(t.stateNode.containerInfo), xe(t), null;
    case 10:
      return ya(t.type._context), xe(t), null;
    case 17:
      return Ae(t.type) && vo(), xe(t), null;
    case 19:
      if (b(ne), o = t.memoizedState, o === null)
        return xe(t), null;
      if (r = (t.flags & 128) !== 0, s = o.rendering, s === null)
        if (r)
          Tr(o, !1);
        else {
          if (fe !== 0 || e !== null && e.flags & 128)
            for (e = t.child; e !== null; ) {
              if (s = xo(e), s !== null) {
                for (t.flags |= 128, Tr(o, !1), r = s.updateQueue, r !== null && (t.updateQueue = r, t.flags |= 4), t.subtreeFlags = 0, r = n, n = t.child; n !== null; )
                  o = n, e = r, o.flags &= 14680066, s = o.alternate, s === null ? (o.childLanes = 0, o.lanes = e, o.child = null, o.subtreeFlags = 0, o.memoizedProps = null, o.memoizedState = null, o.updateQueue = null, o.dependencies = null, o.stateNode = null) : (o.childLanes = s.childLanes, o.lanes = s.lanes, o.child = s.child, o.subtreeFlags = 0, o.deletions = null, o.memoizedProps = s.memoizedProps, o.memoizedState = s.memoizedState, o.updateQueue = s.updateQueue, o.type = s.type, e = s.dependencies, o.dependencies = e === null ? null : { lanes: e.lanes, firstContext: e.firstContext }), n = n.sibling;
                return X(ne, ne.current & 1 | 2), t.child;
              }
              e = e.sibling;
            }
          o.tail !== null && le() > fr && (t.flags |= 128, r = !0, Tr(o, !1), t.lanes = 4194304);
        }
      else {
        if (!r)
          if (e = xo(s), e !== null) {
            if (t.flags |= 128, r = !0, n = e.updateQueue, n !== null && (t.updateQueue = n, t.flags |= 4), Tr(o, !0), o.tail === null && o.tailMode === "hidden" && !s.alternate && !ee)
              return xe(t), null;
          } else
            2 * le() - o.renderingStartTime > fr && n !== 1073741824 && (t.flags |= 128, r = !0, Tr(o, !1), t.lanes = 4194304);
        o.isBackwards ? (s.sibling = t.child, t.child = s) : (n = o.last, n !== null ? n.sibling = s : t.child = s, o.last = s);
      }
      return o.tail !== null ? (t = o.tail, o.rendering = t, o.tail = t.sibling, o.renderingStartTime = le(), t.sibling = null, n = ne.current, X(ne, r ? n & 1 | 2 : n & 1), t) : (xe(t), null);
    case 22:
    case 23:
      return La(), r = t.memoizedState !== null, e !== null && e.memoizedState !== null !== r && (t.flags |= 8192), r && t.mode & 1 ? We & 1073741824 && (xe(t), t.subtreeFlags & 6 && (t.flags |= 8192)) : xe(t), null;
    case 24:
      return null;
    case 25:
      return null;
  }
  throw Error(g(156, t.tag));
}
function lm(e, t) {
  switch (pa(t), t.tag) {
    case 1:
      return Ae(t.type) && vo(), e = t.flags, e & 65536 ? (t.flags = e & -65537 | 128, t) : null;
    case 3:
      return cr(), b(ze), b(Ce), Sa(), e = t.flags, e & 65536 && !(e & 128) ? (t.flags = e & -65537 | 128, t) : null;
    case 5:
      return ka(t), null;
    case 13:
      if (b(ne), e = t.memoizedState, e !== null && e.dehydrated !== null) {
        if (t.alternate === null)
          throw Error(g(340));
        ar();
      }
      return e = t.flags, e & 65536 ? (t.flags = e & -65537 | 128, t) : null;
    case 19:
      return b(ne), null;
    case 4:
      return cr(), null;
    case 10:
      return ya(t.type._context), null;
    case 22:
    case 23:
      return La(), null;
    case 24:
      return null;
    default:
      return null;
  }
}
var Ui = !1, Ee = !1, am = typeof WeakSet == "function" ? WeakSet : Set, P = null;
function qn(e, t) {
  var n = e.ref;
  if (n !== null)
    if (typeof n == "function")
      try {
        n(null);
      } catch (r) {
        oe(e, t, r);
      }
    else
      n.current = null;
}
function Pl(e, t, n) {
  try {
    n();
  } catch (r) {
    oe(e, t, r);
  }
}
var Bu = !1;
function um(e, t) {
  if (fl = fo, e = pd(), da(e)) {
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
          var s = 0, l = -1, a = -1, u = 0, p = 0, h = e, m = null;
          t:
            for (; ; ) {
              for (var y; h !== n || i !== 0 && h.nodeType !== 3 || (l = s + i), h !== o || r !== 0 && h.nodeType !== 3 || (a = s + r), h.nodeType === 3 && (s += h.nodeValue.length), (y = h.firstChild) !== null; )
                m = h, h = y;
              for (; ; ) {
                if (h === e)
                  break t;
                if (m === n && ++u === i && (l = s), m === o && ++p === r && (a = s), (y = h.nextSibling) !== null)
                  break;
                h = m, m = h.parentNode;
              }
              h = y;
            }
          n = l === -1 || a === -1 ? null : { start: l, end: a };
        } else
          n = null;
      }
    n = n || { start: 0, end: 0 };
  } else
    n = null;
  for (pl = { focusedElem: e, selectionRange: n }, fo = !1, P = t; P !== null; )
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
          oe(t, t.return, v);
        }
        if (e = t.sibling, e !== null) {
          e.return = t.return, P = e;
          break;
        }
        P = t.return;
      }
  return w = Bu, Bu = !1, w;
}
function $r(e, t, n) {
  var r = t.updateQueue;
  if (r = r !== null ? r.lastEffect : null, r !== null) {
    var i = r = r.next;
    do {
      if ((i.tag & e) === e) {
        var o = i.destroy;
        i.destroy = void 0, o !== void 0 && Pl(t, n, o);
      }
      i = i.next;
    } while (i !== r);
  }
}
function qo(e, t) {
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
function Rl(e) {
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
function df(e) {
  var t = e.alternate;
  t !== null && (e.alternate = null, df(t)), e.child = null, e.deletions = null, e.sibling = null, e.tag === 5 && (t = e.stateNode, t !== null && (delete t[vt], delete t[ei], delete t[vl], delete t[Hh], delete t[Yh])), e.stateNode = null, e.return = null, e.dependencies = null, e.memoizedProps = null, e.memoizedState = null, e.pendingProps = null, e.stateNode = null, e.updateQueue = null;
}
function ff(e) {
  return e.tag === 5 || e.tag === 3 || e.tag === 4;
}
function Hu(e) {
  e:
    for (; ; ) {
      for (; e.sibling === null; ) {
        if (e.return === null || ff(e.return))
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
function Dl(e, t, n) {
  var r = e.tag;
  if (r === 5 || r === 6)
    e = e.stateNode, t ? n.nodeType === 8 ? n.parentNode.insertBefore(e, t) : n.insertBefore(e, t) : (n.nodeType === 8 ? (t = n.parentNode, t.insertBefore(e, n)) : (t = n, t.appendChild(e)), n = n._reactRootContainer, n != null || t.onclick !== null || (t.onclick = mo));
  else if (r !== 4 && (e = e.child, e !== null))
    for (Dl(e, t, n), e = e.sibling; e !== null; )
      Dl(e, t, n), e = e.sibling;
}
function Ml(e, t, n) {
  var r = e.tag;
  if (r === 5 || r === 6)
    e = e.stateNode, t ? n.insertBefore(e, t) : n.appendChild(e);
  else if (r !== 4 && (e = e.child, e !== null))
    for (Ml(e, t, n), e = e.sibling; e !== null; )
      Ml(e, t, n), e = e.sibling;
}
var ge = null, tt = !1;
function Wt(e, t, n) {
  for (n = n.child; n !== null; )
    pf(e, t, n), n = n.sibling;
}
function pf(e, t, n) {
  if (yt && typeof yt.onCommitFiberUnmount == "function")
    try {
      yt.onCommitFiberUnmount(Zo, n);
    } catch {
    }
  switch (n.tag) {
    case 5:
      Ee || qn(n, t);
    case 6:
      var r = ge, i = tt;
      ge = null, Wt(e, t, n), ge = r, tt = i, ge !== null && (tt ? (e = ge, n = n.stateNode, e.nodeType === 8 ? e.parentNode.removeChild(n) : e.removeChild(n)) : ge.removeChild(n.stateNode));
      break;
    case 18:
      ge !== null && (tt ? (e = ge, n = n.stateNode, e.nodeType === 8 ? Ts(e.parentNode, n) : e.nodeType === 1 && Ts(e, n), Kr(e)) : Ts(ge, n.stateNode));
      break;
    case 4:
      r = ge, i = tt, ge = n.stateNode.containerInfo, tt = !0, Wt(e, t, n), ge = r, tt = i;
      break;
    case 0:
    case 11:
    case 14:
    case 15:
      if (!Ee && (r = n.updateQueue, r !== null && (r = r.lastEffect, r !== null))) {
        i = r = r.next;
        do {
          var o = i, s = o.destroy;
          o = o.tag, s !== void 0 && (o & 2 || o & 4) && Pl(n, t, s), i = i.next;
        } while (i !== r);
      }
      Wt(e, t, n);
      break;
    case 1:
      if (!Ee && (qn(n, t), r = n.stateNode, typeof r.componentWillUnmount == "function"))
        try {
          r.props = n.memoizedProps, r.state = n.memoizedState, r.componentWillUnmount();
        } catch (l) {
          oe(n, t, l);
        }
      Wt(e, t, n);
      break;
    case 21:
      Wt(e, t, n);
      break;
    case 22:
      n.mode & 1 ? (Ee = (r = Ee) || n.memoizedState !== null, Wt(e, t, n), Ee = r) : Wt(e, t, n);
      break;
    default:
      Wt(e, t, n);
  }
}
function Yu(e) {
  var t = e.updateQueue;
  if (t !== null) {
    e.updateQueue = null;
    var n = e.stateNode;
    n === null && (n = e.stateNode = new am()), t.forEach(function(r) {
      var i = gm.bind(null, e, r);
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
        var o = e, s = t, l = s;
        e:
          for (; l !== null; ) {
            switch (l.tag) {
              case 5:
                ge = l.stateNode, tt = !1;
                break e;
              case 3:
                ge = l.stateNode.containerInfo, tt = !0;
                break e;
              case 4:
                ge = l.stateNode.containerInfo, tt = !0;
                break e;
            }
            l = l.return;
          }
        if (ge === null)
          throw Error(g(160));
        pf(o, s, i), ge = null, tt = !1;
        var a = i.alternate;
        a !== null && (a.return = null), i.return = null;
      } catch (u) {
        oe(i, t, u);
      }
    }
  if (t.subtreeFlags & 12854)
    for (t = t.child; t !== null; )
      hf(t, e), t = t.sibling;
}
function hf(e, t) {
  var n = e.alternate, r = e.flags;
  switch (e.tag) {
    case 0:
    case 11:
    case 14:
    case 15:
      if (be(t, e), ht(e), r & 4) {
        try {
          $r(3, e, e.return), qo(3, e);
        } catch (k) {
          oe(e, e.return, k);
        }
        try {
          $r(5, e, e.return);
        } catch (k) {
          oe(e, e.return, k);
        }
      }
      break;
    case 1:
      be(t, e), ht(e), r & 512 && n !== null && qn(n, n.return);
      break;
    case 5:
      if (be(t, e), ht(e), r & 512 && n !== null && qn(n, n.return), e.flags & 32) {
        var i = e.stateNode;
        try {
          Hr(i, "");
        } catch (k) {
          oe(e, e.return, k);
        }
      }
      if (r & 4 && (i = e.stateNode, i != null)) {
        var o = e.memoizedProps, s = n !== null ? n.memoizedProps : o, l = e.type, a = e.updateQueue;
        if (e.updateQueue = null, a !== null)
          try {
            l === "input" && o.type === "radio" && o.name != null && Ic(i, o), nl(l, s);
            var u = nl(l, o);
            for (s = 0; s < a.length; s += 2) {
              var p = a[s], h = a[s + 1];
              p === "style" ? Vc(i, h) : p === "dangerouslySetInnerHTML" ? Ac(i, h) : p === "children" ? Hr(i, h) : Jl(i, p, h, u);
            }
            switch (l) {
              case "input":
                qs(i, o);
                break;
              case "textarea":
                jc(i, o);
                break;
              case "select":
                var m = i._wrapperState.wasMultiple;
                i._wrapperState.wasMultiple = !!o.multiple;
                var y = o.value;
                y != null ? bn(i, !!o.multiple, y, !1) : m !== !!o.multiple && (o.defaultValue != null ? bn(
                  i,
                  !!o.multiple,
                  o.defaultValue,
                  !0
                ) : bn(i, !!o.multiple, o.multiple ? [] : "", !1));
            }
            i[ei] = o;
          } catch (k) {
            oe(e, e.return, k);
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
          oe(e, e.return, k);
        }
      }
      break;
    case 3:
      if (be(t, e), ht(e), r & 4 && n !== null && n.memoizedState.isDehydrated)
        try {
          Kr(t.containerInfo);
        } catch (k) {
          oe(e, e.return, k);
        }
      break;
    case 4:
      be(t, e), ht(e);
      break;
    case 13:
      be(t, e), ht(e), i = e.child, i.flags & 8192 && (o = i.memoizedState !== null, i.stateNode.isHidden = o, !o || i.alternate !== null && i.alternate.memoizedState !== null || (Da = le())), r & 4 && Yu(e);
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
                  $r(4, m, m.return);
                  break;
                case 1:
                  qn(m, m.return);
                  var w = m.stateNode;
                  if (typeof w.componentWillUnmount == "function") {
                    r = m, n = m.return;
                    try {
                      t = r, w.props = t.memoizedProps, w.state = t.memoizedState, w.componentWillUnmount();
                    } catch (k) {
                      oe(r, n, k);
                    }
                  }
                  break;
                case 5:
                  qn(m, m.return);
                  break;
                case 22:
                  if (m.memoizedState !== null) {
                    Xu(h);
                    continue;
                  }
              }
              y !== null ? (y.return = m, P = y) : Xu(h);
            }
            p = p.sibling;
          }
        e:
          for (p = null, h = e; ; ) {
            if (h.tag === 5) {
              if (p === null) {
                p = h;
                try {
                  i = h.stateNode, u ? (o = i.style, typeof o.setProperty == "function" ? o.setProperty("display", "none", "important") : o.display = "none") : (l = h.stateNode, a = h.memoizedProps.style, s = a != null && a.hasOwnProperty("display") ? a.display : null, l.style.display = Fc("display", s));
                } catch (k) {
                  oe(e, e.return, k);
                }
              }
            } else if (h.tag === 6) {
              if (p === null)
                try {
                  h.stateNode.nodeValue = u ? "" : h.memoizedProps;
                } catch (k) {
                  oe(e, e.return, k);
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
      be(t, e), ht(e), r & 4 && Yu(e);
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
          if (ff(n)) {
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
          r.flags & 32 && (Hr(i, ""), r.flags &= -33);
          var o = Hu(e);
          Ml(e, o, i);
          break;
        case 3:
        case 4:
          var s = r.stateNode.containerInfo, l = Hu(e);
          Dl(e, l, s);
          break;
        default:
          throw Error(g(161));
      }
    } catch (a) {
      oe(e, e.return, a);
    }
    e.flags &= -3;
  }
  t & 4096 && (e.flags &= -4097);
}
function cm(e, t, n) {
  P = e, mf(e);
}
function mf(e, t, n) {
  for (var r = (e.mode & 1) !== 0; P !== null; ) {
    var i = P, o = i.child;
    if (i.tag === 22 && r) {
      var s = i.memoizedState !== null || Ui;
      if (!s) {
        var l = i.alternate, a = l !== null && l.memoizedState !== null || Ee;
        l = Ui;
        var u = Ee;
        if (Ui = s, (Ee = a) && !u)
          for (P = i; P !== null; )
            s = P, a = s.child, s.tag === 22 && s.memoizedState !== null ? Ku(i) : a !== null ? (a.return = s, P = a) : Ku(i);
        for (; o !== null; )
          P = o, mf(o), o = o.sibling;
        P = i, Ui = l, Ee = u;
      }
      Qu(e);
    } else
      i.subtreeFlags & 8772 && o !== null ? (o.return = i, P = o) : Qu(e);
  }
}
function Qu(e) {
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
              Ee || qo(5, t);
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
              o !== null && Ru(t, o, r);
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
                Ru(t, s, n);
              }
              break;
            case 5:
              var l = t.stateNode;
              if (n === null && t.flags & 4) {
                n = l;
                var a = t.memoizedProps;
                switch (t.type) {
                  case "button":
                  case "input":
                  case "select":
                  case "textarea":
                    a.autoFocus && n.focus();
                    break;
                  case "img":
                    a.src && (n.src = a.src);
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
                    h !== null && Kr(h);
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
        Ee || t.flags & 512 && Rl(t);
      } catch (m) {
        oe(t, t.return, m);
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
function Xu(e) {
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
function Ku(e) {
  for (; P !== null; ) {
    var t = P;
    try {
      switch (t.tag) {
        case 0:
        case 11:
        case 15:
          var n = t.return;
          try {
            qo(4, t);
          } catch (a) {
            oe(t, n, a);
          }
          break;
        case 1:
          var r = t.stateNode;
          if (typeof r.componentDidMount == "function") {
            var i = t.return;
            try {
              r.componentDidMount();
            } catch (a) {
              oe(t, i, a);
            }
          }
          var o = t.return;
          try {
            Rl(t);
          } catch (a) {
            oe(t, o, a);
          }
          break;
        case 5:
          var s = t.return;
          try {
            Rl(t);
          } catch (a) {
            oe(t, s, a);
          }
      }
    } catch (a) {
      oe(t, t.return, a);
    }
    if (t === e) {
      P = null;
      break;
    }
    var l = t.sibling;
    if (l !== null) {
      l.return = t.return, P = l;
      break;
    }
    P = t.return;
  }
}
var dm = Math.ceil, To = Ft.ReactCurrentDispatcher, Pa = Ft.ReactCurrentOwner, Ge = Ft.ReactCurrentBatchConfig, W = 0, ve = null, ce = null, we = 0, We = 0, Jn = fn(0), fe = 0, si = null, Nn = 0, Jo = 0, Ra = 0, Ur = null, Le = null, Da = 0, fr = 1 / 0, Ct = null, No = !1, Ll = null, tn = null, Zi = !1, Xt = null, Oo = 0, Zr = 0, Il = null, no = -1, ro = 0;
function Pe() {
  return W & 6 ? le() : no !== -1 ? no : no = le();
}
function nn(e) {
  return e.mode & 1 ? W & 2 && we !== 0 ? we & -we : Xh.transition !== null ? (ro === 0 && (ro = qc()), ro) : (e = B, e !== 0 || (e = window.event, e = e === void 0 ? 16 : id(e.type)), e) : 1;
}
function ot(e, t, n, r) {
  if (50 < Zr)
    throw Zr = 0, Il = null, Error(g(185));
  xi(e, n, r), (!(W & 2) || e !== ve) && (e === ve && (!(W & 2) && (Jo |= n), fe === 4 && Ht(e, we)), Fe(e, r), n === 1 && W === 0 && !(t.mode & 1) && (fr = le() + 500, Xo && pn()));
}
function Fe(e, t) {
  var n = e.callbackNode;
  Xp(e, t);
  var r = co(e, e === ve ? we : 0);
  if (r === 0)
    n !== null && iu(n), e.callbackNode = null, e.callbackPriority = 0;
  else if (t = r & -r, e.callbackPriority !== t) {
    if (n != null && iu(n), t === 1)
      e.tag === 0 ? Qh(Gu.bind(null, e)) : xd(Gu.bind(null, e)), Zh(function() {
        !(W & 6) && pn();
      }), n = null;
    else {
      switch (Jc(r)) {
        case 1:
          n = ra;
          break;
        case 4:
          n = Kc;
          break;
        case 16:
          n = uo;
          break;
        case 536870912:
          n = Gc;
          break;
        default:
          n = uo;
      }
      n = xf(n, vf.bind(null, e));
    }
    e.callbackPriority = t, e.callbackNode = n;
  }
}
function vf(e, t) {
  if (no = -1, ro = 0, W & 6)
    throw Error(g(327));
  var n = e.callbackNode;
  if (ir() && e.callbackNode !== n)
    return null;
  var r = co(e, e === ve ? we : 0);
  if (r === 0)
    return null;
  if (r & 30 || r & e.expiredLanes || t)
    t = Po(e, r);
  else {
    t = r;
    var i = W;
    W |= 2;
    var o = gf();
    (ve !== e || we !== t) && (Ct = null, fr = le() + 500, kn(e, t));
    do
      try {
        hm();
        break;
      } catch (l) {
        yf(e, l);
      }
    while (!0);
    va(), To.current = o, W = i, ce !== null ? t = 0 : (ve = null, we = 0, t = fe);
  }
  if (t !== 0) {
    if (t === 2 && (i = ll(e), i !== 0 && (r = i, t = jl(e, i))), t === 1)
      throw n = si, kn(e, 0), Ht(e, r), Fe(e, le()), n;
    if (t === 6)
      Ht(e, r);
    else {
      if (i = e.current.alternate, !(r & 30) && !fm(i) && (t = Po(e, r), t === 2 && (o = ll(e), o !== 0 && (r = o, t = jl(e, o))), t === 1))
        throw n = si, kn(e, 0), Ht(e, r), Fe(e, le()), n;
      switch (e.finishedWork = i, e.finishedLanes = r, t) {
        case 0:
        case 1:
          throw Error(g(345));
        case 2:
          vn(e, Le, Ct);
          break;
        case 3:
          if (Ht(e, r), (r & 130023424) === r && (t = Da + 500 - le(), 10 < t)) {
            if (co(e, 0) !== 0)
              break;
            if (i = e.suspendedLanes, (i & r) !== r) {
              Pe(), e.pingedLanes |= e.suspendedLanes & i;
              break;
            }
            e.timeoutHandle = ml(vn.bind(null, e, Le, Ct), t);
            break;
          }
          vn(e, Le, Ct);
          break;
        case 4:
          if (Ht(e, r), (r & 4194240) === r)
            break;
          for (t = e.eventTimes, i = -1; 0 < r; ) {
            var s = 31 - it(r);
            o = 1 << s, s = t[s], s > i && (i = s), r &= ~o;
          }
          if (r = i, r = le() - r, r = (120 > r ? 120 : 480 > r ? 480 : 1080 > r ? 1080 : 1920 > r ? 1920 : 3e3 > r ? 3e3 : 4320 > r ? 4320 : 1960 * dm(r / 1960)) - r, 10 < r) {
            e.timeoutHandle = ml(vn.bind(null, e, Le, Ct), r);
            break;
          }
          vn(e, Le, Ct);
          break;
        case 5:
          vn(e, Le, Ct);
          break;
        default:
          throw Error(g(329));
      }
    }
  }
  return Fe(e, le()), e.callbackNode === n ? vf.bind(null, e) : null;
}
function jl(e, t) {
  var n = Ur;
  return e.current.memoizedState.isDehydrated && (kn(e, t).flags |= 256), e = Po(e, t), e !== 2 && (t = Le, Le = n, t !== null && zl(t)), e;
}
function zl(e) {
  Le === null ? Le = e : Le.push.apply(Le, e);
}
function fm(e) {
  for (var t = e; ; ) {
    if (t.flags & 16384) {
      var n = t.updateQueue;
      if (n !== null && (n = n.stores, n !== null))
        for (var r = 0; r < n.length; r++) {
          var i = n[r], o = i.getSnapshot;
          i = i.value;
          try {
            if (!at(o(), i))
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
function Ht(e, t) {
  for (t &= ~Ra, t &= ~Jo, e.suspendedLanes |= t, e.pingedLanes &= ~t, e = e.expirationTimes; 0 < t; ) {
    var n = 31 - it(t), r = 1 << n;
    e[n] = -1, t &= ~r;
  }
}
function Gu(e) {
  if (W & 6)
    throw Error(g(327));
  ir();
  var t = co(e, 0);
  if (!(t & 1))
    return Fe(e, le()), null;
  var n = Po(e, t);
  if (e.tag !== 0 && n === 2) {
    var r = ll(e);
    r !== 0 && (t = r, n = jl(e, r));
  }
  if (n === 1)
    throw n = si, kn(e, 0), Ht(e, t), Fe(e, le()), n;
  if (n === 6)
    throw Error(g(345));
  return e.finishedWork = e.current.alternate, e.finishedLanes = t, vn(e, Le, Ct), Fe(e, le()), null;
}
function Ma(e, t) {
  var n = W;
  W |= 1;
  try {
    return e(t);
  } finally {
    W = n, W === 0 && (fr = le() + 500, Xo && pn());
  }
}
function On(e) {
  Xt !== null && Xt.tag === 0 && !(W & 6) && ir();
  var t = W;
  W |= 1;
  var n = Ge.transition, r = B;
  try {
    if (Ge.transition = null, B = 1, e)
      return e();
  } finally {
    B = r, Ge.transition = n, W = t, !(W & 6) && pn();
  }
}
function La() {
  We = Jn.current, b(Jn);
}
function kn(e, t) {
  e.finishedWork = null, e.finishedLanes = 0;
  var n = e.timeoutHandle;
  if (n !== -1 && (e.timeoutHandle = -1, Uh(n)), ce !== null)
    for (n = ce.return; n !== null; ) {
      var r = n;
      switch (pa(r), r.tag) {
        case 1:
          r = r.type.childContextTypes, r != null && vo();
          break;
        case 3:
          cr(), b(ze), b(Ce), Sa();
          break;
        case 5:
          ka(r);
          break;
        case 4:
          cr();
          break;
        case 13:
          b(ne);
          break;
        case 19:
          b(ne);
          break;
        case 10:
          ya(r.type._context);
          break;
        case 22:
        case 23:
          La();
      }
      n = n.return;
    }
  if (ve = e, ce = e = rn(e.current, null), we = We = t, fe = 0, si = null, Ra = Jo = Nn = 0, Le = Ur = null, wn !== null) {
    for (t = 0; t < wn.length; t++)
      if (n = wn[t], r = n.interleaved, r !== null) {
        n.interleaved = null;
        var i = r.next, o = n.pending;
        if (o !== null) {
          var s = o.next;
          o.next = i, r.next = s;
        }
        n.pending = r;
      }
    wn = null;
  }
  return e;
}
function yf(e, t) {
  do {
    var n = ce;
    try {
      if (va(), bi.current = Co, Eo) {
        for (var r = re.memoizedState; r !== null; ) {
          var i = r.queue;
          i !== null && (i.pending = null), r = r.next;
        }
        Eo = !1;
      }
      if (Tn = 0, me = de = re = null, Wr = !1, ri = 0, Pa.current = null, n === null || n.return === null) {
        fe = 1, si = t, ce = null;
        break;
      }
      e: {
        var o = e, s = n.return, l = n, a = t;
        if (t = we, l.flags |= 32768, a !== null && typeof a == "object" && typeof a.then == "function") {
          var u = a, p = l, h = p.tag;
          if (!(p.mode & 1) && (h === 0 || h === 11 || h === 15)) {
            var m = p.alternate;
            m ? (p.updateQueue = m.updateQueue, p.memoizedState = m.memoizedState, p.lanes = m.lanes) : (p.updateQueue = null, p.memoizedState = null);
          }
          var y = Au(s);
          if (y !== null) {
            y.flags &= -257, Fu(y, s, l, o, t), y.mode & 1 && zu(o, u, t), t = y, a = u;
            var w = t.updateQueue;
            if (w === null) {
              var k = /* @__PURE__ */ new Set();
              k.add(a), t.updateQueue = k;
            } else
              w.add(a);
            break e;
          } else {
            if (!(t & 1)) {
              zu(o, u, t), Ia();
              break e;
            }
            a = Error(g(426));
          }
        } else if (ee && l.mode & 1) {
          var F = Au(s);
          if (F !== null) {
            !(F.flags & 65536) && (F.flags |= 256), Fu(F, s, l, o, t), ha(dr(a, l));
            break e;
          }
        }
        o = a = dr(a, l), fe !== 4 && (fe = 2), Ur === null ? Ur = [o] : Ur.push(o), o = s;
        do {
          switch (o.tag) {
            case 3:
              o.flags |= 65536, t &= -t, o.lanes |= t;
              var d = bd(o, a, t);
              Pu(o, d);
              break e;
            case 1:
              l = a;
              var c = o.type, f = o.stateNode;
              if (!(o.flags & 128) && (typeof c.getDerivedStateFromError == "function" || f !== null && typeof f.componentDidCatch == "function" && (tn === null || !tn.has(f)))) {
                o.flags |= 65536, t &= -t, o.lanes |= t;
                var v = ef(o, l, t);
                Pu(o, v);
                break e;
              }
          }
          o = o.return;
        } while (o !== null);
      }
      _f(n);
    } catch (x) {
      t = x, ce === n && n !== null && (ce = n = n.return);
      continue;
    }
    break;
  } while (!0);
}
function gf() {
  var e = To.current;
  return To.current = Co, e === null ? Co : e;
}
function Ia() {
  (fe === 0 || fe === 3 || fe === 2) && (fe = 4), ve === null || !(Nn & 268435455) && !(Jo & 268435455) || Ht(ve, we);
}
function Po(e, t) {
  var n = W;
  W |= 2;
  var r = gf();
  (ve !== e || we !== t) && (Ct = null, kn(e, t));
  do
    try {
      pm();
      break;
    } catch (i) {
      yf(e, i);
    }
  while (!0);
  if (va(), W = n, To.current = r, ce !== null)
    throw Error(g(261));
  return ve = null, we = 0, fe;
}
function pm() {
  for (; ce !== null; )
    wf(ce);
}
function hm() {
  for (; ce !== null && !Vp(); )
    wf(ce);
}
function wf(e) {
  var t = Sf(e.alternate, e, We);
  e.memoizedProps = e.pendingProps, t === null ? _f(e) : ce = t, Pa.current = null;
}
function _f(e) {
  var t = e;
  do {
    var n = t.alternate;
    if (e = t.return, t.flags & 32768) {
      if (n = lm(n, t), n !== null) {
        n.flags &= 32767, ce = n;
        return;
      }
      if (e !== null)
        e.flags |= 32768, e.subtreeFlags = 0, e.deletions = null;
      else {
        fe = 6, ce = null;
        return;
      }
    } else if (n = sm(n, t, We), n !== null) {
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
function vn(e, t, n) {
  var r = B, i = Ge.transition;
  try {
    Ge.transition = null, B = 1, mm(e, t, n, r);
  } finally {
    Ge.transition = i, B = r;
  }
  return null;
}
function mm(e, t, n, r) {
  do
    ir();
  while (Xt !== null);
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
  if (Kp(e, o), e === ve && (ce = ve = null, we = 0), !(n.subtreeFlags & 2064) && !(n.flags & 2064) || Zi || (Zi = !0, xf(uo, function() {
    return ir(), null;
  })), o = (n.flags & 15990) !== 0, n.subtreeFlags & 15990 || o) {
    o = Ge.transition, Ge.transition = null;
    var s = B;
    B = 1;
    var l = W;
    W |= 4, Pa.current = null, um(e, n), hf(n, e), jh(pl), fo = !!fl, pl = fl = null, e.current = n, cm(n), Wp(), W = l, B = s, Ge.transition = o;
  } else
    e.current = n;
  if (Zi && (Zi = !1, Xt = e, Oo = i), o = e.pendingLanes, o === 0 && (tn = null), Zp(n.stateNode), Fe(e, le()), t !== null)
    for (r = e.onRecoverableError, n = 0; n < t.length; n++)
      i = t[n], r(i.value, { componentStack: i.stack, digest: i.digest });
  if (No)
    throw No = !1, e = Ll, Ll = null, e;
  return Oo & 1 && e.tag !== 0 && ir(), o = e.pendingLanes, o & 1 ? e === Il ? Zr++ : (Zr = 0, Il = e) : Zr = 0, pn(), null;
}
function ir() {
  if (Xt !== null) {
    var e = Jc(Oo), t = Ge.transition, n = B;
    try {
      if (Ge.transition = null, B = 16 > e ? 16 : e, Xt === null)
        var r = !1;
      else {
        if (e = Xt, Xt = null, Oo = 0, W & 6)
          throw Error(g(331));
        var i = W;
        for (W |= 4, P = e.current; P !== null; ) {
          var o = P, s = o.child;
          if (P.flags & 16) {
            var l = o.deletions;
            if (l !== null) {
              for (var a = 0; a < l.length; a++) {
                var u = l[a];
                for (P = u; P !== null; ) {
                  var p = P;
                  switch (p.tag) {
                    case 0:
                    case 11:
                    case 15:
                      $r(8, p, o);
                  }
                  var h = p.child;
                  if (h !== null)
                    h.return = p, P = h;
                  else
                    for (; P !== null; ) {
                      p = P;
                      var m = p.sibling, y = p.return;
                      if (df(p), p === u) {
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
                      $r(9, o, o.return);
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
                if (l = P, l.flags & 2048)
                  try {
                    switch (l.tag) {
                      case 0:
                      case 11:
                      case 15:
                        qo(9, l);
                    }
                  } catch (x) {
                    oe(l, l.return, x);
                  }
                if (l === s) {
                  P = null;
                  break e;
                }
                var v = l.sibling;
                if (v !== null) {
                  v.return = l.return, P = v;
                  break e;
                }
                P = l.return;
              }
        }
        if (W = i, pn(), yt && typeof yt.onPostCommitFiberRoot == "function")
          try {
            yt.onPostCommitFiberRoot(Zo, e);
          } catch {
          }
        r = !0;
      }
      return r;
    } finally {
      B = n, Ge.transition = t;
    }
  }
  return !1;
}
function qu(e, t, n) {
  t = dr(n, t), t = bd(e, t, 1), e = en(e, t, 1), t = Pe(), e !== null && (xi(e, 1, t), Fe(e, t));
}
function oe(e, t, n) {
  if (e.tag === 3)
    qu(e, e, n);
  else
    for (; t !== null; ) {
      if (t.tag === 3) {
        qu(t, e, n);
        break;
      } else if (t.tag === 1) {
        var r = t.stateNode;
        if (typeof t.type.getDerivedStateFromError == "function" || typeof r.componentDidCatch == "function" && (tn === null || !tn.has(r))) {
          e = dr(n, e), e = ef(t, e, 1), t = en(t, e, 1), e = Pe(), t !== null && (xi(t, 1, e), Fe(t, e));
          break;
        }
      }
      t = t.return;
    }
}
function vm(e, t, n) {
  var r = e.pingCache;
  r !== null && r.delete(t), t = Pe(), e.pingedLanes |= e.suspendedLanes & n, ve === e && (we & n) === n && (fe === 4 || fe === 3 && (we & 130023424) === we && 500 > le() - Da ? kn(e, 0) : Ra |= n), Fe(e, t);
}
function kf(e, t) {
  t === 0 && (e.mode & 1 ? (t = Li, Li <<= 1, !(Li & 130023424) && (Li = 4194304)) : t = 1);
  var n = Pe();
  e = jt(e, t), e !== null && (xi(e, t, n), Fe(e, n));
}
function ym(e) {
  var t = e.memoizedState, n = 0;
  t !== null && (n = t.retryLane), kf(e, n);
}
function gm(e, t) {
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
  r !== null && r.delete(t), kf(e, n);
}
var Sf;
Sf = function(e, t, n) {
  if (e !== null)
    if (e.memoizedProps !== t.pendingProps || ze.current)
      je = !0;
    else {
      if (!(e.lanes & n) && !(t.flags & 128))
        return je = !1, om(e, t, n);
      je = !!(e.flags & 131072);
    }
  else
    je = !1, ee && t.flags & 1048576 && Ed(t, wo, t.index);
  switch (t.lanes = 0, t.tag) {
    case 2:
      var r = t.type;
      to(e, t), e = t.pendingProps;
      var i = lr(t, Ce.current);
      rr(t, n), i = Ea(null, t, r, e, i, n);
      var o = Ca();
      return t.flags |= 1, typeof i == "object" && i !== null && typeof i.render == "function" && i.$$typeof === void 0 ? (t.tag = 1, t.memoizedState = null, t.updateQueue = null, Ae(r) ? (o = !0, yo(t)) : o = !1, t.memoizedState = i.state !== null && i.state !== void 0 ? i.state : null, wa(t), i.updater = Ko, t.stateNode = i, i._reactInternals = t, Sl(t, r, e, n), t = Cl(null, t, r, !0, o, n)) : (t.tag = 0, ee && o && fa(t), Oe(null, t, i, n), t = t.child), t;
    case 16:
      r = t.elementType;
      e: {
        switch (to(e, t), e = t.pendingProps, i = r._init, r = i(r._payload), t.type = r, i = t.tag = _m(r), e = et(r, e), i) {
          case 0:
            t = El(null, t, r, e, n);
            break e;
          case 1:
            t = $u(null, t, r, e, n);
            break e;
          case 11:
            t = Vu(null, t, r, e, n);
            break e;
          case 14:
            t = Wu(null, t, r, et(r.type, e), n);
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
      return r = t.type, i = t.pendingProps, i = t.elementType === r ? i : et(r, i), El(e, t, r, i, n);
    case 1:
      return r = t.type, i = t.pendingProps, i = t.elementType === r ? i : et(r, i), $u(e, t, r, i, n);
    case 3:
      e: {
        if (of(t), e === null)
          throw Error(g(387));
        r = t.pendingProps, o = t.memoizedState, i = o.element, Od(e, t), So(t, r, null, n);
        var s = t.memoizedState;
        if (r = s.element, o.isDehydrated)
          if (o = { element: r, isDehydrated: !1, cache: s.cache, pendingSuspenseBoundaries: s.pendingSuspenseBoundaries, transitions: s.transitions }, t.updateQueue.baseState = o, t.memoizedState = o, t.flags & 256) {
            i = dr(Error(g(423)), t), t = Uu(e, t, r, n, i);
            break e;
          } else if (r !== i) {
            i = dr(Error(g(424)), t), t = Uu(e, t, r, n, i);
            break e;
          } else
            for ($e = bt(t.stateNode.containerInfo.firstChild), Ue = t, ee = !0, nt = null, n = Md(t, null, r, n), t.child = n; n; )
              n.flags = n.flags & -3 | 4096, n = n.sibling;
        else {
          if (ar(), r === i) {
            t = zt(e, t, n);
            break e;
          }
          Oe(e, t, r, n);
        }
        t = t.child;
      }
      return t;
    case 5:
      return Ld(t), e === null && wl(t), r = t.type, i = t.pendingProps, o = e !== null ? e.memoizedProps : null, s = i.children, hl(r, i) ? s = null : o !== null && hl(r, o) && (t.flags |= 32), rf(e, t), Oe(e, t, s, n), t.child;
    case 6:
      return e === null && wl(t), null;
    case 13:
      return sf(e, t, n);
    case 4:
      return _a(t, t.stateNode.containerInfo), r = t.pendingProps, e === null ? t.child = ur(t, null, r, n) : Oe(e, t, r, n), t.child;
    case 11:
      return r = t.type, i = t.pendingProps, i = t.elementType === r ? i : et(r, i), Vu(e, t, r, i, n);
    case 7:
      return Oe(e, t, t.pendingProps, n), t.child;
    case 8:
      return Oe(e, t, t.pendingProps.children, n), t.child;
    case 12:
      return Oe(e, t, t.pendingProps.children, n), t.child;
    case 10:
      e: {
        if (r = t.type._context, i = t.pendingProps, o = t.memoizedProps, s = i.value, X(_o, r._currentValue), r._currentValue = s, o !== null)
          if (at(o.value, s)) {
            if (o.children === i.children && !ze.current) {
              t = zt(e, t, n);
              break e;
            }
          } else
            for (o = t.child, o !== null && (o.return = t); o !== null; ) {
              var l = o.dependencies;
              if (l !== null) {
                s = o.child;
                for (var a = l.firstContext; a !== null; ) {
                  if (a.context === r) {
                    if (o.tag === 1) {
                      a = Dt(-1, n & -n), a.tag = 2;
                      var u = o.updateQueue;
                      if (u !== null) {
                        u = u.shared;
                        var p = u.pending;
                        p === null ? a.next = a : (a.next = p.next, p.next = a), u.pending = a;
                      }
                    }
                    o.lanes |= n, a = o.alternate, a !== null && (a.lanes |= n), _l(
                      o.return,
                      n,
                      t
                    ), l.lanes |= n;
                    break;
                  }
                  a = a.next;
                }
              } else if (o.tag === 10)
                s = o.type === t.type ? null : o.child;
              else if (o.tag === 18) {
                if (s = o.return, s === null)
                  throw Error(g(341));
                s.lanes |= n, l = s.alternate, l !== null && (l.lanes |= n), _l(s, n, t), s = o.sibling;
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
      return i = t.type, r = t.pendingProps.children, rr(t, n), i = qe(i), r = r(i), t.flags |= 1, Oe(e, t, r, n), t.child;
    case 14:
      return r = t.type, i = et(r, t.pendingProps), i = et(r.type, i), Wu(e, t, r, i, n);
    case 15:
      return tf(e, t, t.type, t.pendingProps, n);
    case 17:
      return r = t.type, i = t.pendingProps, i = t.elementType === r ? i : et(r, i), to(e, t), t.tag = 1, Ae(r) ? (e = !0, yo(t)) : e = !1, rr(t, n), Rd(t, r, i), Sl(t, r, i, n), Cl(null, t, r, !0, e, n);
    case 19:
      return lf(e, t, n);
    case 22:
      return nf(e, t, n);
  }
  throw Error(g(156, t.tag));
};
function xf(e, t) {
  return Xc(e, t);
}
function wm(e, t, n, r) {
  this.tag = e, this.key = n, this.sibling = this.child = this.return = this.stateNode = this.type = this.elementType = null, this.index = 0, this.ref = null, this.pendingProps = t, this.dependencies = this.memoizedState = this.updateQueue = this.memoizedProps = null, this.mode = r, this.subtreeFlags = this.flags = 0, this.deletions = null, this.childLanes = this.lanes = 0, this.alternate = null;
}
function Ke(e, t, n, r) {
  return new wm(e, t, n, r);
}
function ja(e) {
  return e = e.prototype, !(!e || !e.isReactComponent);
}
function _m(e) {
  if (typeof e == "function")
    return ja(e) ? 1 : 0;
  if (e != null) {
    if (e = e.$$typeof, e === ea)
      return 11;
    if (e === ta)
      return 14;
  }
  return 2;
}
function rn(e, t) {
  var n = e.alternate;
  return n === null ? (n = Ke(e.tag, t, e.key, e.mode), n.elementType = e.elementType, n.type = e.type, n.stateNode = e.stateNode, n.alternate = e, e.alternate = n) : (n.pendingProps = t, n.type = e.type, n.flags = 0, n.subtreeFlags = 0, n.deletions = null), n.flags = e.flags & 14680064, n.childLanes = e.childLanes, n.lanes = e.lanes, n.child = e.child, n.memoizedProps = e.memoizedProps, n.memoizedState = e.memoizedState, n.updateQueue = e.updateQueue, t = e.dependencies, n.dependencies = t === null ? null : { lanes: t.lanes, firstContext: t.firstContext }, n.sibling = e.sibling, n.index = e.index, n.ref = e.ref, n;
}
function io(e, t, n, r, i, o) {
  var s = 2;
  if (r = e, typeof e == "function")
    ja(e) && (s = 1);
  else if (typeof e == "string")
    s = 5;
  else
    e:
      switch (e) {
        case Un:
          return Sn(n.children, i, o, t);
        case bl:
          s = 8, i |= 8;
          break;
        case Ys:
          return e = Ke(12, n, t, i | 2), e.elementType = Ys, e.lanes = o, e;
        case Qs:
          return e = Ke(13, n, t, i), e.elementType = Qs, e.lanes = o, e;
        case Xs:
          return e = Ke(19, n, t, i), e.elementType = Xs, e.lanes = o, e;
        case Dc:
          return bo(n, i, o, t);
        default:
          if (typeof e == "object" && e !== null)
            switch (e.$$typeof) {
              case Pc:
                s = 10;
                break e;
              case Rc:
                s = 9;
                break e;
              case ea:
                s = 11;
                break e;
              case ta:
                s = 14;
                break e;
              case Ut:
                s = 16, r = null;
                break e;
            }
          throw Error(g(130, e == null ? e : typeof e, ""));
      }
  return t = Ke(s, n, t, i), t.elementType = e, t.type = r, t.lanes = o, t;
}
function Sn(e, t, n, r) {
  return e = Ke(7, e, r, t), e.lanes = n, e;
}
function bo(e, t, n, r) {
  return e = Ke(22, e, r, t), e.elementType = Dc, e.lanes = n, e.stateNode = { isHidden: !1 }, e;
}
function Is(e, t, n) {
  return e = Ke(6, e, null, t), e.lanes = n, e;
}
function js(e, t, n) {
  return t = Ke(4, e.children !== null ? e.children : [], e.key, t), t.lanes = n, t.stateNode = { containerInfo: e.containerInfo, pendingChildren: null, implementation: e.implementation }, t;
}
function km(e, t, n, r, i) {
  this.tag = t, this.containerInfo = e, this.finishedWork = this.pingCache = this.current = this.pendingChildren = null, this.timeoutHandle = -1, this.callbackNode = this.pendingContext = this.context = null, this.callbackPriority = 0, this.eventTimes = ms(0), this.expirationTimes = ms(-1), this.entangledLanes = this.finishedLanes = this.mutableReadLanes = this.expiredLanes = this.pingedLanes = this.suspendedLanes = this.pendingLanes = 0, this.entanglements = ms(0), this.identifierPrefix = r, this.onRecoverableError = i, this.mutableSourceEagerHydrationData = null;
}
function za(e, t, n, r, i, o, s, l, a) {
  return e = new km(e, t, n, l, a), t === 1 ? (t = 1, o === !0 && (t |= 8)) : t = 0, o = Ke(3, null, null, t), e.current = o, o.stateNode = e, o.memoizedState = { element: r, isDehydrated: n, cache: null, transitions: null, pendingSuspenseBoundaries: null }, wa(o), e;
}
function Sm(e, t, n) {
  var r = 3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
  return { $$typeof: $n, key: r == null ? null : "" + r, children: e, containerInfo: t, implementation: n };
}
function Ef(e) {
  if (!e)
    return sn;
  e = e._reactInternals;
  e: {
    if (In(e) !== e || e.tag !== 1)
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
      return Sd(e, n, t);
  }
  return t;
}
function Cf(e, t, n, r, i, o, s, l, a) {
  return e = za(n, r, !0, e, i, o, s, l, a), e.context = Ef(null), n = e.current, r = Pe(), i = nn(n), o = Dt(r, i), o.callback = t ?? null, en(n, o, i), e.current.lanes = i, xi(e, i, r), Fe(e, r), e;
}
function es(e, t, n, r) {
  var i = t.current, o = Pe(), s = nn(i);
  return n = Ef(n), t.context === null ? t.context = n : t.pendingContext = n, t = Dt(o, s), t.payload = { element: e }, r = r === void 0 ? null : r, r !== null && (t.callback = r), e = en(i, t, s), e !== null && (ot(e, i, s, o), Ji(e, i, s)), s;
}
function Ro(e) {
  if (e = e.current, !e.child)
    return null;
  switch (e.child.tag) {
    case 5:
      return e.child.stateNode;
    default:
      return e.child.stateNode;
  }
}
function Ju(e, t) {
  if (e = e.memoizedState, e !== null && e.dehydrated !== null) {
    var n = e.retryLane;
    e.retryLane = n !== 0 && n < t ? n : t;
  }
}
function Aa(e, t) {
  Ju(e, t), (e = e.alternate) && Ju(e, t);
}
function xm() {
  return null;
}
var Tf = typeof reportError == "function" ? reportError : function(e) {
  console.error(e);
};
function Fa(e) {
  this._internalRoot = e;
}
ts.prototype.render = Fa.prototype.render = function(e) {
  var t = this._internalRoot;
  if (t === null)
    throw Error(g(409));
  es(e, t, null, null);
};
ts.prototype.unmount = Fa.prototype.unmount = function() {
  var e = this._internalRoot;
  if (e !== null) {
    this._internalRoot = null;
    var t = e.containerInfo;
    On(function() {
      es(null, e, null, null);
    }), t[It] = null;
  }
};
function ts(e) {
  this._internalRoot = e;
}
ts.prototype.unstable_scheduleHydration = function(e) {
  if (e) {
    var t = td();
    e = { blockedOn: null, target: e, priority: t };
    for (var n = 0; n < Bt.length && t !== 0 && t < Bt[n].priority; n++)
      ;
    Bt.splice(n, 0, e), n === 0 && rd(e);
  }
};
function Va(e) {
  return !(!e || e.nodeType !== 1 && e.nodeType !== 9 && e.nodeType !== 11);
}
function ns(e) {
  return !(!e || e.nodeType !== 1 && e.nodeType !== 9 && e.nodeType !== 11 && (e.nodeType !== 8 || e.nodeValue !== " react-mount-point-unstable "));
}
function bu() {
}
function Em(e, t, n, r, i) {
  if (i) {
    if (typeof r == "function") {
      var o = r;
      r = function() {
        var u = Ro(s);
        o.call(u);
      };
    }
    var s = Cf(t, r, e, 0, null, !1, !1, "", bu);
    return e._reactRootContainer = s, e[It] = s.current, Jr(e.nodeType === 8 ? e.parentNode : e), On(), s;
  }
  for (; i = e.lastChild; )
    e.removeChild(i);
  if (typeof r == "function") {
    var l = r;
    r = function() {
      var u = Ro(a);
      l.call(u);
    };
  }
  var a = za(e, 0, !1, null, null, !1, !1, "", bu);
  return e._reactRootContainer = a, e[It] = a.current, Jr(e.nodeType === 8 ? e.parentNode : e), On(function() {
    es(t, a, n, r);
  }), a;
}
function rs(e, t, n, r, i) {
  var o = n._reactRootContainer;
  if (o) {
    var s = o;
    if (typeof i == "function") {
      var l = i;
      i = function() {
        var a = Ro(s);
        l.call(a);
      };
    }
    es(t, s, e, i);
  } else
    s = Em(n, t, e, i, r);
  return Ro(s);
}
bc = function(e) {
  switch (e.tag) {
    case 3:
      var t = e.stateNode;
      if (t.current.memoizedState.isDehydrated) {
        var n = Lr(t.pendingLanes);
        n !== 0 && (ia(t, n | 1), Fe(t, le()), !(W & 6) && (fr = le() + 500, pn()));
      }
      break;
    case 13:
      On(function() {
        var r = jt(e, 1);
        if (r !== null) {
          var i = Pe();
          ot(r, e, 1, i);
        }
      }), Aa(e, 1);
  }
};
oa = function(e) {
  if (e.tag === 13) {
    var t = jt(e, 134217728);
    if (t !== null) {
      var n = Pe();
      ot(t, e, 134217728, n);
    }
    Aa(e, 134217728);
  }
};
ed = function(e) {
  if (e.tag === 13) {
    var t = nn(e), n = jt(e, t);
    if (n !== null) {
      var r = Pe();
      ot(n, e, t, r);
    }
    Aa(e, t);
  }
};
td = function() {
  return B;
};
nd = function(e, t) {
  var n = B;
  try {
    return B = e, t();
  } finally {
    B = n;
  }
};
il = function(e, t, n) {
  switch (t) {
    case "input":
      if (qs(e, n), t = n.name, n.type === "radio" && t != null) {
        for (n = e; n.parentNode; )
          n = n.parentNode;
        for (n = n.querySelectorAll("input[name=" + JSON.stringify("" + t) + '][type="radio"]'), t = 0; t < n.length; t++) {
          var r = n[t];
          if (r !== e && r.form === e.form) {
            var i = Qo(r);
            if (!i)
              throw Error(g(90));
            Lc(r), qs(r, i);
          }
        }
      }
      break;
    case "textarea":
      jc(e, n);
      break;
    case "select":
      t = n.value, t != null && bn(e, !!n.multiple, t, !1);
  }
};
Uc = Ma;
Zc = On;
var Cm = { usingClientEntryPoint: !1, Events: [Ci, Yn, Qo, Wc, $c, Ma] }, Nr = { findFiberByHostInstance: gn, bundleType: 0, version: "18.2.0", rendererPackageName: "react-dom" }, Tm = { bundleType: Nr.bundleType, version: Nr.version, rendererPackageName: Nr.rendererPackageName, rendererConfig: Nr.rendererConfig, overrideHookState: null, overrideHookStateDeletePath: null, overrideHookStateRenamePath: null, overrideProps: null, overridePropsDeletePath: null, overridePropsRenamePath: null, setErrorHandler: null, setSuspenseHandler: null, scheduleUpdate: null, currentDispatcherRef: Ft.ReactCurrentDispatcher, findHostInstanceByFiber: function(e) {
  return e = Yc(e), e === null ? null : e.stateNode;
}, findFiberByHostInstance: Nr.findFiberByHostInstance || xm, findHostInstancesForRefresh: null, scheduleRefresh: null, scheduleRoot: null, setRefreshHandler: null, getCurrentFiber: null, reconcilerVersion: "18.2.0-next-9e3b772b8-20220608" };
if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u") {
  var Bi = __REACT_DEVTOOLS_GLOBAL_HOOK__;
  if (!Bi.isDisabled && Bi.supportsFiber)
    try {
      Zo = Bi.inject(Tm), yt = Bi;
    } catch {
    }
}
Be.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = Cm;
Be.createPortal = function(e, t) {
  var n = 2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
  if (!Va(t))
    throw Error(g(200));
  return Sm(e, t, null, n);
};
Be.createRoot = function(e, t) {
  if (!Va(e))
    throw Error(g(299));
  var n = !1, r = "", i = Tf;
  return t != null && (t.unstable_strictMode === !0 && (n = !0), t.identifierPrefix !== void 0 && (r = t.identifierPrefix), t.onRecoverableError !== void 0 && (i = t.onRecoverableError)), t = za(e, 1, !1, null, null, n, !1, r, i), e[It] = t.current, Jr(e.nodeType === 8 ? e.parentNode : e), new Fa(t);
};
Be.findDOMNode = function(e) {
  if (e == null)
    return null;
  if (e.nodeType === 1)
    return e;
  var t = e._reactInternals;
  if (t === void 0)
    throw typeof e.render == "function" ? Error(g(188)) : (e = Object.keys(e).join(","), Error(g(268, e)));
  return e = Yc(t), e = e === null ? null : e.stateNode, e;
};
Be.flushSync = function(e) {
  return On(e);
};
Be.hydrate = function(e, t, n) {
  if (!ns(t))
    throw Error(g(200));
  return rs(null, e, t, !0, n);
};
Be.hydrateRoot = function(e, t, n) {
  if (!Va(e))
    throw Error(g(405));
  var r = n != null && n.hydratedSources || null, i = !1, o = "", s = Tf;
  if (n != null && (n.unstable_strictMode === !0 && (i = !0), n.identifierPrefix !== void 0 && (o = n.identifierPrefix), n.onRecoverableError !== void 0 && (s = n.onRecoverableError)), t = Cf(t, null, e, 1, n ?? null, i, !1, o, s), e[It] = t.current, Jr(e), r)
    for (e = 0; e < r.length; e++)
      n = r[e], i = n._getVersion, i = i(n._source), t.mutableSourceEagerHydrationData == null ? t.mutableSourceEagerHydrationData = [n, i] : t.mutableSourceEagerHydrationData.push(
        n,
        i
      );
  return new ts(t);
};
Be.render = function(e, t, n) {
  if (!ns(t))
    throw Error(g(200));
  return rs(null, e, t, !1, n);
};
Be.unmountComponentAtNode = function(e) {
  if (!ns(e))
    throw Error(g(40));
  return e._reactRootContainer ? (On(function() {
    rs(null, null, e, !1, function() {
      e._reactRootContainer = null, e[It] = null;
    });
  }), !0) : !1;
};
Be.unstable_batchedUpdates = Ma;
Be.unstable_renderSubtreeIntoContainer = function(e, t, n, r) {
  if (!ns(n))
    throw Error(g(200));
  if (e == null || e._reactInternals === void 0)
    throw Error(g(38));
  return rs(e, t, n, !1, r);
};
Be.version = "18.2.0-next-9e3b772b8-20220608";
function Nf() {
  if (!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" || typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function"))
    try {
      __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(Nf);
    } catch (e) {
      console.error(e);
    }
}
Nf(), Ec.exports = Be;
var Nm = Ec.exports, Of, ec = Nm;
Of = ec.createRoot, ec.hydrateRoot;
var Pf = { exports: {} }, Rf = {};
/**
 * @license React
 * use-sync-external-store-shim.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var pr = ae;
function Om(e, t) {
  return e === t && (e !== 0 || 1 / e === 1 / t) || e !== e && t !== t;
}
var Pm = typeof Object.is == "function" ? Object.is : Om, Rm = pr.useState, Dm = pr.useEffect, Mm = pr.useLayoutEffect, Lm = pr.useDebugValue;
function Im(e, t) {
  var n = t(), r = Rm({ inst: { value: n, getSnapshot: t } }), i = r[0].inst, o = r[1];
  return Mm(function() {
    i.value = n, i.getSnapshot = t, zs(i) && o({ inst: i });
  }, [e, n, t]), Dm(function() {
    return zs(i) && o({ inst: i }), e(function() {
      zs(i) && o({ inst: i });
    });
  }, [e]), Lm(n), n;
}
function zs(e) {
  var t = e.getSnapshot;
  e = e.value;
  try {
    var n = t();
    return !Pm(e, n);
  } catch {
    return !0;
  }
}
function jm(e, t) {
  return t();
}
var zm = typeof window > "u" || typeof window.document > "u" || typeof window.document.createElement > "u" ? jm : Im;
Rf.useSyncExternalStore = pr.useSyncExternalStore !== void 0 ? pr.useSyncExternalStore : zm;
Pf.exports = Rf;
var Am = Pf.exports;
const Kt = () => {
}, Ie = (
  /*#__NOINLINE__*/
  Kt()
), As = Object, $ = (e) => e === Ie, Rt = (e) => typeof e == "function", ln = (e, t) => ({
  ...e,
  ...t
}), Fm = (e) => Rt(e.then), Hi = /* @__PURE__ */ new WeakMap();
let Vm = 0;
const li = (e) => {
  const t = typeof e, n = e && e.constructor, r = n == Date;
  let i, o;
  if (As(e) === e && !r && n != RegExp) {
    if (i = Hi.get(e), i)
      return i;
    if (i = ++Vm + "~", Hi.set(e, i), n == Array) {
      for (i = "@", o = 0; o < e.length; o++)
        i += li(e[o]) + ",";
      Hi.set(e, i);
    }
    if (n == As) {
      i = "#";
      const s = As.keys(e).sort();
      for (; !$(o = s.pop()); )
        $(e[o]) || (i += o + ":" + li(e[o]) + ",");
      Hi.set(e, i);
    }
  } else
    i = r ? e.toJSON() : t == "symbol" ? e.toString() : t == "string" ? JSON.stringify(e) : "" + e;
  return i;
}, Nt = /* @__PURE__ */ new WeakMap(), Fs = {}, Yi = {}, Wa = "undefined", is = typeof window != Wa, Al = typeof document != Wa, Wm = () => is && typeof window.requestAnimationFrame != Wa, Df = (e, t) => {
  const n = Nt.get(e);
  return [
    // Getter
    () => !$(t) && e.get(t) || Fs,
    // Setter
    (r) => {
      if (!$(t)) {
        const i = e.get(t);
        t in Yi || (Yi[t] = i), n[5](t, ln(i, r), i || Fs);
      }
    },
    // Subscriber
    n[6],
    // Get server cache snapshot
    () => !$(t) && t in Yi ? Yi[t] : !$(t) && e.get(t) || Fs
  ];
};
let Fl = !0;
const $m = () => Fl, [Vl, Wl] = is && window.addEventListener ? [
  window.addEventListener.bind(window),
  window.removeEventListener.bind(window)
] : [
  Kt,
  Kt
], Um = () => {
  const e = Al && document.visibilityState;
  return $(e) || e !== "hidden";
}, Zm = (e) => (Al && document.addEventListener("visibilitychange", e), Vl("focus", e), () => {
  Al && document.removeEventListener("visibilitychange", e), Wl("focus", e);
}), Bm = (e) => {
  const t = () => {
    Fl = !0, e();
  }, n = () => {
    Fl = !1;
  };
  return Vl("online", t), Vl("offline", n), () => {
    Wl("online", t), Wl("offline", n);
  };
}, Hm = {
  isOnline: $m,
  isVisible: Um
}, Ym = {
  initFocus: Zm,
  initReconnect: Bm
}, tc = !Uo.useId, ai = !is || "Deno" in window, Qm = (e) => Wm() ? window.requestAnimationFrame(e) : setTimeout(e, 1), Vs = ai ? ae.useEffect : ae.useLayoutEffect, Ws = typeof navigator < "u" && navigator.connection, nc = !ai && Ws && ([
  "slow-2g",
  "2g"
].includes(Ws.effectiveType) || Ws.saveData), $a = (e) => {
  if (Rt(e))
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
let Xm = 0;
const $l = () => ++Xm, Mf = 0, Lf = 1, If = 2, Km = 3;
var Or = {
  __proto__: null,
  ERROR_REVALIDATE_EVENT: Km,
  FOCUS_EVENT: Mf,
  MUTATE_EVENT: If,
  RECONNECT_EVENT: Lf
};
async function jf(...e) {
  const [t, n, r, i] = e, o = ln({
    populateCache: !0,
    throwOnError: !0
  }, typeof i == "boolean" ? {
    revalidate: i
  } : i || {});
  let s = o.populateCache;
  const l = o.rollbackOnError;
  let a = o.optimisticData;
  const u = o.revalidate !== !1, p = (y) => typeof l == "function" ? l(y) : l !== !1, h = o.throwOnError;
  if (Rt(n)) {
    const y = n, w = [], k = t.keys();
    for (const F of k)
      // Skip the special useSWRInfinite and useSWRSubscription keys.
      !/^\$(inf|sub)\$/.test(F) && y(t.get(F)._k) && w.push(F);
    return Promise.all(w.map(m));
  }
  return m(n);
  async function m(y) {
    const [w] = $a(y);
    if (!w)
      return;
    const [k, F] = Df(t, w), [d, c, f, v] = Nt.get(t), x = () => {
      const he = d[w];
      return u && (delete f[w], delete v[w], he && he[0]) ? he[0](If).then(() => k().data) : k().data;
    };
    if (e.length < 3)
      return x();
    let S = r, C;
    const E = $l();
    c[w] = [
      E,
      0
    ];
    const H = !$(a), M = k(), pe = M.data, ct = M._c, Ve = $(ct) ? pe : ct;
    if (H && (a = Rt(a) ? a(Ve, pe) : a, F({
      data: a,
      _c: Ve
    })), Rt(S))
      try {
        S = S(Ve);
      } catch (he) {
        C = he;
      }
    if (S && Fm(S))
      if (S = await S.catch((he) => {
        C = he;
      }), E !== c[w][0]) {
        if (C)
          throw C;
        return S;
      } else
        C && H && p(C) && (s = !0, F({
          data: Ve,
          _c: Ie
        }));
    if (s && !C)
      if (Rt(s)) {
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
    if (c[w][1] = $l(), Promise.resolve(x()).then(() => {
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
const rc = (e, t) => {
  for (const n in e)
    e[n][0] && e[n][0](t);
}, Gm = (e, t) => {
  if (!Nt.has(e)) {
    const n = ln(Ym, t), r = {}, i = jf.bind(Ie, e);
    let o = Kt;
    const s = {}, l = (p, h) => {
      const m = s[p] || [];
      return s[p] = m, m.push(h), () => m.splice(m.indexOf(h), 1);
    }, a = (p, h, m) => {
      e.set(p, h);
      const y = s[p];
      if (y)
        for (const w of y)
          w(h, m);
    }, u = () => {
      if (!Nt.has(e) && (Nt.set(e, [
        r,
        {},
        {},
        {},
        i,
        a,
        l
      ]), !ai)) {
        const p = n.initFocus(setTimeout.bind(Ie, rc.bind(Ie, r, Mf))), h = n.initReconnect(setTimeout.bind(Ie, rc.bind(Ie, r, Lf)));
        o = () => {
          p && p(), h && h(), Nt.delete(e);
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
    Nt.get(e)[4]
  ];
}, qm = (e, t, n, r, i) => {
  const o = n.errorRetryCount, s = i.retryCount, l = ~~((Math.random() + 0.5) * (1 << (s < 8 ? s : 8))) * n.errorRetryInterval;
  !$(o) && s > o || setTimeout(r, l, i);
}, Jm = (e, t) => li(e) == li(t), [zf, bm] = Gm(/* @__PURE__ */ new Map()), ev = ln(
  {
    // events
    onLoadingSlow: Kt,
    onSuccess: Kt,
    onError: Kt,
    onErrorRetry: qm,
    onDiscarded: Kt,
    // switches
    revalidateOnFocus: !0,
    revalidateOnReconnect: !0,
    revalidateIfStale: !0,
    shouldRetryOnError: !0,
    // timeouts
    errorRetryInterval: nc ? 1e4 : 5e3,
    focusThrottleInterval: 5 * 1e3,
    dedupingInterval: 2 * 1e3,
    loadingTimeout: nc ? 5e3 : 3e3,
    // providers
    compare: Jm,
    isPaused: () => !1,
    cache: zf,
    mutate: bm,
    fallback: {}
  },
  // use web preset by default
  Hm
), tv = (e, t) => {
  const n = ln(e, t);
  if (t) {
    const { use: r, fallback: i } = e, { use: o, fallback: s } = t;
    r && o && (n.use = r.concat(o)), i && s && (n.fallback = ln(i, s));
  }
  return n;
}, nv = ae.createContext({}), rv = "$inf$", Af = is && window.__SWR_DEVTOOLS_USE__, iv = Af ? window.__SWR_DEVTOOLS_USE__ : [], ov = () => {
  Af && (window.__SWR_DEVTOOLS_REACT__ = Uo);
}, sv = (e) => Rt(e[1]) ? [
  e[0],
  e[1],
  e[2] || {}
] : [
  e[0],
  null,
  (e[1] === null ? e[2] : e[1]) || {}
], lv = () => ln(ev, ae.useContext(nv)), av = (e) => (t, n, r) => e(t, n && ((...o) => {
  const [s] = $a(t), [, , , l] = Nt.get(zf);
  if (s.startsWith(rv))
    return n(...o);
  const a = l[s];
  return $(a) ? n(...o) : (delete l[s], a);
}), r), uv = iv.concat(av), cv = (e) => function(...n) {
  const r = lv(), [i, o, s] = sv(n), l = tv(r, s);
  let a = e;
  const { use: u } = l, p = (u || []).concat(uv);
  for (let h = p.length; h--; )
    a = p[h](a);
  return a(i, o || l.fetcher || null, l);
}, dv = (e, t, n) => {
  const r = t[e] || (t[e] = []);
  return r.push(n), () => {
    const i = r.indexOf(n);
    i >= 0 && (r[i] = r[r.length - 1], r.pop());
  };
};
ov();
const ic = Uo.use || ((e) => {
  if (e.status === "pending")
    throw e;
  if (e.status === "fulfilled")
    return e.value;
  throw e.status === "rejected" ? e.reason : (e.status = "pending", e.then((t) => {
    e.status = "fulfilled", e.value = t;
  }, (t) => {
    e.status = "rejected", e.reason = t;
  }), e);
}), $s = {
  dedupe: !0
}, fv = (e, t, n) => {
  const { cache: r, compare: i, suspense: o, fallbackData: s, revalidateOnMount: l, revalidateIfStale: a, refreshInterval: u, refreshWhenHidden: p, refreshWhenOffline: h, keepPreviousData: m } = n, [y, w, k, F] = Nt.get(r), [d, c] = $a(e), f = ae.useRef(!1), v = ae.useRef(!1), x = ae.useRef(d), S = ae.useRef(t), C = ae.useRef(n), E = () => C.current, H = () => E().isVisible() && E().isOnline(), [M, pe, ct, Ve] = Df(r, d), he = ae.useRef({}).current, ls = $(s) ? n.fallback[d] : s, jn = (G, q) => {
    for (const ke in he) {
      const se = ke;
      if (se === "data") {
        if (!i(G[se], q[se]) && (!$(G[se]) || !i(Vt, q[se])))
          return !1;
      } else if (q[se] !== G[se])
        return !1;
    }
    return !0;
  }, zn = ae.useMemo(() => {
    const G = !d || !t ? !1 : $(l) ? E().isPaused() || o ? !1 : $(a) ? !0 : a : l, q = (Ne) => {
      const xt = ln(Ne);
      return delete xt._k, G ? {
        isValidating: !0,
        isLoading: !0,
        ...xt
      } : xt;
    }, ke = M(), se = Ve(), pt = q(ke), An = ke === se ? pt : q(se);
    let ye = pt;
    return [
      () => {
        const Ne = q(M());
        return jn(Ne, ye) ? (ye.data = Ne.data, ye.isLoading = Ne.isLoading, ye.isValidating = Ne.isValidating, ye.error = Ne.error, ye) : (ye = Ne, Ne);
      },
      () => An
    ];
  }, [
    r,
    d
  ]), T = Am.useSyncExternalStore(ae.useCallback(
    (G) => ct(d, (q, ke) => {
      jn(ke, q) || G();
    }),
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [
      r,
      d
    ]
  ), zn[0], zn[1]), L = !f.current, z = y[d] && y[d].length > 0, Y = T.data, K = $(Y) ? ls : Y, St = T.error, dt = ae.useRef(K), Vt = m ? $(Y) ? dt.current : Y : K, ft = z && !$(St) ? !1 : L && !$(l) ? l : E().isPaused() ? !1 : o ? $(K) ? !1 : a : $(K) || a, hn = !!(d && t && L && ft), bf = $(T.isValidating) ? hn : T.isValidating, ep = $(T.isLoading) ? hn : T.isLoading, wr = ae.useCallback(
    async (G) => {
      const q = S.current;
      if (!d || !q || v.current || E().isPaused())
        return !1;
      let ke, se, pt = !0;
      const An = G || {}, ye = !k[d] || !An.dedupe, Ne = () => tc ? !v.current && d === x.current && f.current : d === x.current, xt = {
        isValidating: !1,
        isLoading: !1
      }, Za = () => {
        pe(xt);
      }, Ba = () => {
        const Ye = k[d];
        Ye && Ye[1] === se && delete k[d];
      }, Ha = {
        isValidating: !0
      };
      $(M().data) && (Ha.isLoading = !0);
      try {
        if (ye && (pe(Ha), n.loadingTimeout && $(M().data) && setTimeout(() => {
          pt && Ne() && E().onLoadingSlow(d, n);
        }, n.loadingTimeout), k[d] = [
          q(c),
          $l()
        ]), [ke, se] = k[d], ke = await ke, ye && setTimeout(Ba, n.dedupingInterval), !k[d] || k[d][1] !== se)
          return ye && Ne() && E().onDiscarded(d), !1;
        xt.error = Ie;
        const Ye = w[d];
        if (!$(Ye) && // case 1
        (se <= Ye[0] || // case 2
        se <= Ye[1] || // case 3
        Ye[1] === 0))
          return Za(), ye && Ne() && E().onDiscarded(d), !1;
        const Et = M().data;
        xt.data = i(Et, ke) ? Et : ke, ye && Ne() && E().onSuccess(ke, d, n);
      } catch (Ye) {
        Ba();
        const Et = E(), { shouldRetryOnError: as } = Et;
        Et.isPaused() || (xt.error = Ye, ye && Ne() && (Et.onError(Ye, d, Et), (as === !0 || Rt(as) && as(Ye)) && H() && Et.onErrorRetry(Ye, d, Et, (tp) => {
          const us = y[d];
          us && us[0] && us[0](Or.ERROR_REVALIDATE_EVENT, tp);
        }, {
          retryCount: (An.retryCount || 0) + 1,
          dedupe: !0
        })));
      }
      return pt = !1, Za(), !0;
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
  ), Ua = ae.useCallback(
    // Use callback to make sure `keyRef.current` returns latest result every time
    (...G) => jf(r, x.current, ...G),
    // eslint-disable-next-line react-hooks/exhaustive-deps
    []
  );
  if (Vs(() => {
    S.current = t, C.current = n, $(Y) || (dt.current = Y);
  }), Vs(() => {
    if (!d)
      return;
    const G = wr.bind(Ie, $s);
    let q = 0;
    const se = dv(d, y, (pt, An = {}) => {
      if (pt == Or.FOCUS_EVENT) {
        const ye = Date.now();
        E().revalidateOnFocus && ye > q && H() && (q = ye + E().focusThrottleInterval, G());
      } else if (pt == Or.RECONNECT_EVENT)
        E().revalidateOnReconnect && H() && G();
      else {
        if (pt == Or.MUTATE_EVENT)
          return wr();
        if (pt == Or.ERROR_REVALIDATE_EVENT)
          return wr(An);
      }
    });
    return v.current = !1, x.current = d, f.current = !0, pe({
      _k: c
    }), ft && ($(K) || ai ? G() : Qm(G)), () => {
      v.current = !0, se();
    };
  }, [
    d
  ]), Vs(() => {
    let G;
    function q() {
      const se = Rt(u) ? u(M().data) : u;
      se && G !== -1 && (G = setTimeout(ke, se));
    }
    function ke() {
      !M().error && (p || E().isVisible()) && (h || E().isOnline()) ? wr($s).then(q) : q();
    }
    return q(), () => {
      G && (clearTimeout(G), G = -1);
    };
  }, [
    u,
    p,
    h,
    d
  ]), ae.useDebugValue(Vt), o && $(K) && d) {
    if (!tc && ai)
      throw new Error("Fallback data is required when using suspense in SSR.");
    S.current = t, C.current = n, v.current = !1;
    const G = F[d];
    if (!$(G)) {
      const q = Ua(G);
      ic(q);
    }
    if ($(St)) {
      const q = wr($s);
      $(Vt) || (q.status = "fulfilled", q.value = !0), ic(q);
    } else
      throw St;
  }
  return {
    mutate: Ua,
    get data() {
      return he.data = !0, Vt;
    },
    get error() {
      return he.error = !0, St;
    },
    get isValidating() {
      return he.isValidating = !0, bf;
    },
    get isLoading() {
      return he.isLoading = !0, ep;
    }
  };
}, pv = cv(fv);
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
    const o = e.objectKeys(i).filter((l) => typeof i[i[l]] != "number"), s = {};
    for (const l of o)
      s[l] = i[l];
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
var Ul;
(function(e) {
  e.mergeShapes = (t, n) => ({
    ...t,
    ...n
    // second overwrites first
  });
})(Ul || (Ul = {}));
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
]), Yt = (e) => {
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
]), hv = (e) => JSON.stringify(e, null, 2).replace(/"([^"]+)":/g, "$1:");
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
          let l = r, a = 0;
          for (; a < s.path.length; ) {
            const u = s.path[a];
            a === s.path.length - 1 ? (l[u] = l[u] || { _errors: [] }, l[u]._errors.push(n(s))) : l[u] = l[u] || { _errors: [] }, l = l[u], a++;
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
const ui = (e, t) => {
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
let Ff = ui;
function mv(e) {
  Ff = e;
}
function Do() {
  return Ff;
}
const Mo = (e) => {
  const { data: t, path: n, errorMaps: r, issueData: i } = e, o = [...n, ...i.path || []], s = {
    ...i,
    path: o
  };
  let l = "";
  const a = r.filter((u) => !!u).slice().reverse();
  for (const u of a)
    l = u(s, { data: t, defaultError: l }).message;
  return {
    ...i,
    path: o,
    message: i.message || l
  };
}, vv = [];
function O(e, t) {
  const n = Mo({
    issueData: t,
    data: e.data,
    path: e.path,
    errorMaps: [
      e.common.contextualErrorMap,
      e.schemaErrorMap,
      Do(),
      ui
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
}), Vf = (e) => ({ status: "dirty", value: e }), Re = (e) => ({ status: "valid", value: e }), Zl = (e) => e.status === "aborted", Bl = (e) => e.status === "dirty", ci = (e) => e.status === "valid", Lo = (e) => typeof Promise < "u" && e instanceof Promise;
var R;
(function(e) {
  e.errToObj = (t) => typeof t == "string" ? { message: t } : t || {}, e.toString = (t) => typeof t == "string" ? t : t == null ? void 0 : t.message;
})(R || (R = {}));
class wt {
  constructor(t, n, r, i) {
    this._cachedPath = [], this.parent = t, this.data = n, this._path = r, this._key = i;
  }
  get path() {
    return this._cachedPath.length || (this._key instanceof Array ? this._cachedPath.push(...this._path, ...this._key) : this._cachedPath.push(...this._path, this._key)), this._cachedPath;
  }
}
const oc = (e, t) => {
  if (ci(t))
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
  return t ? { errorMap: t, description: i } : { errorMap: (s, l) => s.code !== "invalid_type" ? { message: l.defaultError } : typeof l.data > "u" ? { message: r ?? l.defaultError } : { message: n ?? l.defaultError }, description: i };
}
class A {
  constructor(t) {
    this.spa = this.safeParseAsync, this._def = t, this.parse = this.parse.bind(this), this.safeParse = this.safeParse.bind(this), this.parseAsync = this.parseAsync.bind(this), this.safeParseAsync = this.safeParseAsync.bind(this), this.spa = this.spa.bind(this), this.refine = this.refine.bind(this), this.refinement = this.refinement.bind(this), this.superRefine = this.superRefine.bind(this), this.optional = this.optional.bind(this), this.nullable = this.nullable.bind(this), this.nullish = this.nullish.bind(this), this.array = this.array.bind(this), this.promise = this.promise.bind(this), this.or = this.or.bind(this), this.and = this.and.bind(this), this.transform = this.transform.bind(this), this.brand = this.brand.bind(this), this.default = this.default.bind(this), this.catch = this.catch.bind(this), this.describe = this.describe.bind(this), this.pipe = this.pipe.bind(this), this.readonly = this.readonly.bind(this), this.isNullable = this.isNullable.bind(this), this.isOptional = this.isOptional.bind(this);
  }
  get description() {
    return this._def.description;
  }
  _getType(t) {
    return Yt(t.data);
  }
  _getOrReturnCtx(t, n) {
    return n || {
      common: t.parent.common,
      data: t.data,
      parsedType: Yt(t.data),
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
        parsedType: Yt(t.data),
        schemaErrorMap: this._def.errorMap,
        path: t.path,
        parent: t.parent
      }
    };
  }
  _parseSync(t) {
    const n = this._parse(t);
    if (Lo(n))
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
      parsedType: Yt(t)
    }, o = this._parseSync({ data: t, path: i.path, parent: i });
    return oc(i, o);
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
      parsedType: Yt(t)
    }, i = this._parse({ data: t, path: r.path, parent: r }), o = await (Lo(i) ? i : Promise.resolve(i));
    return oc(r, o);
  }
  refine(t, n) {
    const r = (i) => typeof n == "string" || typeof n > "u" ? { message: n } : typeof n == "function" ? n(i) : n;
    return this._refinement((i, o) => {
      const s = t(i), l = () => o.addIssue({
        code: _.custom,
        ...r(i)
      });
      return typeof Promise < "u" && s instanceof Promise ? s.then((a) => a ? !0 : (l(), !1)) : s ? !0 : (l(), !1);
    });
  }
  refinement(t, n) {
    return this._refinement((r, i) => t(r) ? !0 : (i.addIssue(typeof n == "function" ? n(r, i) : n), !1));
  }
  _refinement(t) {
    return new ut({
      schema: this,
      typeName: D.ZodEffects,
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
    return lt.create(this, this._def);
  }
  promise() {
    return mr.create(this, this._def);
  }
  or(t) {
    return hi.create([this, t], this._def);
  }
  and(t) {
    return mi.create(this, t, this._def);
  }
  transform(t) {
    return new ut({
      ...j(this._def),
      schema: this,
      typeName: D.ZodEffects,
      effect: { type: "transform", transform: t }
    });
  }
  default(t) {
    const n = typeof t == "function" ? t : () => t;
    return new _i({
      ...j(this._def),
      innerType: this,
      defaultValue: n,
      typeName: D.ZodDefault
    });
  }
  brand() {
    return new $f({
      typeName: D.ZodBranded,
      type: this,
      ...j(this._def)
    });
  }
  catch(t) {
    const n = typeof t == "function" ? t : () => t;
    return new Ao({
      ...j(this._def),
      innerType: this,
      catchValue: n,
      typeName: D.ZodCatch
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
    return Ni.create(this, t);
  }
  readonly() {
    return Vo.create(this);
  }
  isOptional() {
    return this.safeParse(void 0).success;
  }
  isNullable() {
    return this.safeParse(null).success;
  }
}
const yv = /^c[^\s-]{8,}$/i, gv = /^[a-z][a-z0-9]*$/, wv = /^[0-9A-HJKMNP-TV-Z]{26}$/, _v = /^[0-9a-fA-F]{8}\b-[0-9a-fA-F]{4}\b-[0-9a-fA-F]{4}\b-[0-9a-fA-F]{4}\b-[0-9a-fA-F]{12}$/i, kv = /^(?!\.)(?!.*\.\.)([A-Z0-9_+-\.]*)[A-Z0-9_+-]@([A-Z0-9][A-Z0-9\-]*\.)+[A-Z]{2,}$/i, Sv = "^(\\p{Extended_Pictographic}|\\p{Emoji_Component})+$";
let Us;
const xv = /^(((25[0-5])|(2[0-4][0-9])|(1[0-9]{2})|([0-9]{1,2}))\.){3}((25[0-5])|(2[0-4][0-9])|(1[0-9]{2})|([0-9]{1,2}))$/, Ev = /^(([a-f0-9]{1,4}:){7}|::([a-f0-9]{1,4}:){0,6}|([a-f0-9]{1,4}:){1}:([a-f0-9]{1,4}:){0,5}|([a-f0-9]{1,4}:){2}:([a-f0-9]{1,4}:){0,4}|([a-f0-9]{1,4}:){3}:([a-f0-9]{1,4}:){0,3}|([a-f0-9]{1,4}:){4}:([a-f0-9]{1,4}:){0,2}|([a-f0-9]{1,4}:){5}:([a-f0-9]{1,4}:){0,1})([a-f0-9]{1,4}|(((25[0-5])|(2[0-4][0-9])|(1[0-9]{2})|([0-9]{1,2}))\.){3}((25[0-5])|(2[0-4][0-9])|(1[0-9]{2})|([0-9]{1,2})))$/, Cv = (e) => e.precision ? e.offset ? new RegExp(`^\\d{4}-\\d{2}-\\d{2}T\\d{2}:\\d{2}:\\d{2}\\.\\d{${e.precision}}(([+-]\\d{2}(:?\\d{2})?)|Z)$`) : new RegExp(`^\\d{4}-\\d{2}-\\d{2}T\\d{2}:\\d{2}:\\d{2}\\.\\d{${e.precision}}Z$`) : e.precision === 0 ? e.offset ? new RegExp("^\\d{4}-\\d{2}-\\d{2}T\\d{2}:\\d{2}:\\d{2}(([+-]\\d{2}(:?\\d{2})?)|Z)$") : new RegExp("^\\d{4}-\\d{2}-\\d{2}T\\d{2}:\\d{2}:\\d{2}Z$") : e.offset ? new RegExp("^\\d{4}-\\d{2}-\\d{2}T\\d{2}:\\d{2}:\\d{2}(\\.\\d+)?(([+-]\\d{2}(:?\\d{2})?)|Z)$") : new RegExp("^\\d{4}-\\d{2}-\\d{2}T\\d{2}:\\d{2}:\\d{2}(\\.\\d+)?Z$");
function Tv(e, t) {
  return !!((t === "v4" || !t) && xv.test(e) || (t === "v6" || !t) && Ev.test(e));
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
        const s = t.data.length > o.value, l = t.data.length < o.value;
        (s || l) && (i = this._getOrReturnCtx(t, i), s ? O(i, {
          code: _.too_big,
          maximum: o.value,
          type: "string",
          inclusive: !0,
          exact: !0,
          message: o.message
        }) : l && O(i, {
          code: _.too_small,
          minimum: o.value,
          type: "string",
          inclusive: !0,
          exact: !0,
          message: o.message
        }), r.dirty());
      } else if (o.kind === "email")
        kv.test(t.data) || (i = this._getOrReturnCtx(t, i), O(i, {
          validation: "email",
          code: _.invalid_string,
          message: o.message
        }), r.dirty());
      else if (o.kind === "emoji")
        Us || (Us = new RegExp(Sv, "u")), Us.test(t.data) || (i = this._getOrReturnCtx(t, i), O(i, {
          validation: "emoji",
          code: _.invalid_string,
          message: o.message
        }), r.dirty());
      else if (o.kind === "uuid")
        _v.test(t.data) || (i = this._getOrReturnCtx(t, i), O(i, {
          validation: "uuid",
          code: _.invalid_string,
          message: o.message
        }), r.dirty());
      else if (o.kind === "cuid")
        yv.test(t.data) || (i = this._getOrReturnCtx(t, i), O(i, {
          validation: "cuid",
          code: _.invalid_string,
          message: o.message
        }), r.dirty());
      else if (o.kind === "cuid2")
        gv.test(t.data) || (i = this._getOrReturnCtx(t, i), O(i, {
          validation: "cuid2",
          code: _.invalid_string,
          message: o.message
        }), r.dirty());
      else if (o.kind === "ulid")
        wv.test(t.data) || (i = this._getOrReturnCtx(t, i), O(i, {
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
        }), r.dirty()) : o.kind === "datetime" ? Cv(o).test(t.data) || (i = this._getOrReturnCtx(t, i), O(i, {
          code: _.invalid_string,
          validation: "datetime",
          message: o.message
        }), r.dirty()) : o.kind === "ip" ? Tv(t.data, o.version) || (i = this._getOrReturnCtx(t, i), O(i, {
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
    typeName: D.ZodString,
    coerce: (t = e == null ? void 0 : e.coerce) !== null && t !== void 0 ? t : !1,
    ...j(e)
  });
};
function Nv(e, t) {
  const n = (e.toString().split(".")[1] || "").length, r = (t.toString().split(".")[1] || "").length, i = n > r ? n : r, o = parseInt(e.toFixed(i).replace(".", "")), s = parseInt(t.toFixed(i).replace(".", ""));
  return o % s / Math.pow(10, i);
}
class an extends A {
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
      }), i.dirty()) : o.kind === "multipleOf" ? Nv(t.data, o.value) !== 0 && (r = this._getOrReturnCtx(t, r), O(r, {
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
    return new an({
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
    return new an({
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
an.create = (e) => new an({
  checks: [],
  typeName: D.ZodNumber,
  coerce: (e == null ? void 0 : e.coerce) || !1,
  ...j(e)
});
class un extends A {
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
un.create = (e) => {
  var t;
  return new un({
    checks: [],
    typeName: D.ZodBigInt,
    coerce: (t = e == null ? void 0 : e.coerce) !== null && t !== void 0 ? t : !1,
    ...j(e)
  });
};
class di extends A {
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
di.create = (e) => new di({
  typeName: D.ZodBoolean,
  coerce: (e == null ? void 0 : e.coerce) || !1,
  ...j(e)
});
class Pn extends A {
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
    return new Pn({
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
Pn.create = (e) => new Pn({
  checks: [],
  coerce: (e == null ? void 0 : e.coerce) || !1,
  typeName: D.ZodDate,
  ...j(e)
});
class Io extends A {
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
Io.create = (e) => new Io({
  typeName: D.ZodSymbol,
  ...j(e)
});
class fi extends A {
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
fi.create = (e) => new fi({
  typeName: D.ZodUndefined,
  ...j(e)
});
class pi extends A {
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
pi.create = (e) => new pi({
  typeName: D.ZodNull,
  ...j(e)
});
class hr extends A {
  constructor() {
    super(...arguments), this._any = !0;
  }
  _parse(t) {
    return Re(t.data);
  }
}
hr.create = (e) => new hr({
  typeName: D.ZodAny,
  ...j(e)
});
class xn extends A {
  constructor() {
    super(...arguments), this._unknown = !0;
  }
  _parse(t) {
    return Re(t.data);
  }
}
xn.create = (e) => new xn({
  typeName: D.ZodUnknown,
  ...j(e)
});
class At extends A {
  _parse(t) {
    const n = this._getOrReturnCtx(t);
    return O(n, {
      code: _.invalid_type,
      expected: N.never,
      received: n.parsedType
    }), I;
  }
}
At.create = (e) => new At({
  typeName: D.ZodNever,
  ...j(e)
});
class jo extends A {
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
jo.create = (e) => new jo({
  typeName: D.ZodVoid,
  ...j(e)
});
class lt extends A {
  _parse(t) {
    const { ctx: n, status: r } = this._processInputParams(t), i = this._def;
    if (n.parsedType !== N.array)
      return O(n, {
        code: _.invalid_type,
        expected: N.array,
        received: n.parsedType
      }), I;
    if (i.exactLength !== null) {
      const s = n.data.length > i.exactLength.value, l = n.data.length < i.exactLength.value;
      (s || l) && (O(n, {
        code: s ? _.too_big : _.too_small,
        minimum: l ? i.exactLength.value : void 0,
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
      return Promise.all([...n.data].map((s, l) => i.type._parseAsync(new wt(n, s, n.path, l)))).then((s) => Te.mergeArray(r, s));
    const o = [...n.data].map((s, l) => i.type._parseSync(new wt(n, s, n.path, l)));
    return Te.mergeArray(r, o);
  }
  get element() {
    return this._def.type;
  }
  min(t, n) {
    return new lt({
      ...this._def,
      minLength: { value: t, message: R.toString(n) }
    });
  }
  max(t, n) {
    return new lt({
      ...this._def,
      maxLength: { value: t, message: R.toString(n) }
    });
  }
  length(t, n) {
    return new lt({
      ...this._def,
      exactLength: { value: t, message: R.toString(n) }
    });
  }
  nonempty(t) {
    return this.min(1, t);
  }
}
lt.create = (e, t) => new lt({
  type: e,
  minLength: null,
  maxLength: null,
  exactLength: null,
  typeName: D.ZodArray,
  ...j(t)
});
function Wn(e) {
  if (e instanceof te) {
    const t = {};
    for (const n in e.shape) {
      const r = e.shape[n];
      t[n] = Mt.create(Wn(r));
    }
    return new te({
      ...e._def,
      shape: () => t
    });
  } else
    return e instanceof lt ? new lt({
      ...e._def,
      type: Wn(e.element)
    }) : e instanceof Mt ? Mt.create(Wn(e.unwrap())) : e instanceof Dn ? Dn.create(Wn(e.unwrap())) : e instanceof _t ? _t.create(e.items.map((t) => Wn(t))) : e;
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
    const { status: r, ctx: i } = this._processInputParams(t), { shape: o, keys: s } = this._getCached(), l = [];
    if (!(this._def.catchall instanceof At && this._def.unknownKeys === "strip"))
      for (const u in i.data)
        s.includes(u) || l.push(u);
    const a = [];
    for (const u of s) {
      const p = o[u], h = i.data[u];
      a.push({
        key: { status: "valid", value: u },
        value: p._parse(new wt(i, h, i.path, u)),
        alwaysSet: u in i.data
      });
    }
    if (this._def.catchall instanceof At) {
      const u = this._def.unknownKeys;
      if (u === "passthrough")
        for (const p of l)
          a.push({
            key: { status: "valid", value: p },
            value: { status: "valid", value: i.data[p] }
          });
      else if (u === "strict")
        l.length > 0 && (O(i, {
          code: _.unrecognized_keys,
          keys: l
        }), r.dirty());
      else if (u !== "strip")
        throw new Error("Internal ZodObject error: invalid unknownKeys value.");
    } else {
      const u = this._def.catchall;
      for (const p of l) {
        const h = i.data[p];
        a.push({
          key: { status: "valid", value: p },
          value: u._parse(
            new wt(i, h, i.path, p)
            //, ctx.child(key), value, getParsedType(value)
          ),
          alwaysSet: p in i.data
        });
      }
    }
    return i.common.async ? Promise.resolve().then(async () => {
      const u = [];
      for (const p of a) {
        const h = await p.key;
        u.push({
          key: h,
          value: await p.value,
          alwaysSet: p.alwaysSet
        });
      }
      return u;
    }).then((u) => Te.mergeObjectSync(r, u)) : Te.mergeObjectSync(r, a);
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
          var i, o, s, l;
          const a = (s = (o = (i = this._def).errorMap) === null || o === void 0 ? void 0 : o.call(i, n, r).message) !== null && s !== void 0 ? s : r.defaultError;
          return n.code === "unrecognized_keys" ? {
            message: (l = R.errToObj(t).message) !== null && l !== void 0 ? l : a
          } : {
            message: a
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
      typeName: D.ZodObject
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
    return Wn(this);
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
    return Wf(U.objectKeys(this.shape));
  }
}
te.create = (e, t) => new te({
  shape: () => e,
  unknownKeys: "strip",
  catchall: At.create(),
  typeName: D.ZodObject,
  ...j(t)
});
te.strictCreate = (e, t) => new te({
  shape: () => e,
  unknownKeys: "strict",
  catchall: At.create(),
  typeName: D.ZodObject,
  ...j(t)
});
te.lazycreate = (e, t) => new te({
  shape: e,
  unknownKeys: "strip",
  catchall: At.create(),
  typeName: D.ZodObject,
  ...j(t)
});
class hi extends A {
  _parse(t) {
    const { ctx: n } = this._processInputParams(t), r = this._def.options;
    function i(o) {
      for (const l of o)
        if (l.result.status === "valid")
          return l.result;
      for (const l of o)
        if (l.result.status === "dirty")
          return n.common.issues.push(...l.ctx.common.issues), l.result;
      const s = o.map((l) => new st(l.ctx.common.issues));
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
      for (const a of r) {
        const u = {
          ...n,
          common: {
            ...n.common,
            issues: []
          },
          parent: null
        }, p = a._parseSync({
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
      const l = s.map((a) => new st(a));
      return O(n, {
        code: _.invalid_union,
        unionErrors: l
      }), I;
    }
  }
  get options() {
    return this._def.options;
  }
}
hi.create = (e, t) => new hi({
  options: e,
  typeName: D.ZodUnion,
  ...j(t)
});
const oo = (e) => e instanceof yi ? oo(e.schema) : e instanceof ut ? oo(e.innerType()) : e instanceof gi ? [e.value] : e instanceof cn ? e.options : e instanceof wi ? Object.keys(e.enum) : e instanceof _i ? oo(e._def.innerType) : e instanceof fi ? [void 0] : e instanceof pi ? [null] : null;
class os extends A {
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
      const s = oo(o.shape[t]);
      if (!s)
        throw new Error(`A discriminator value for key \`${t}\` could not be extracted from all schema options`);
      for (const l of s) {
        if (i.has(l))
          throw new Error(`Discriminator property ${String(t)} has duplicate value ${String(l)}`);
        i.set(l, o);
      }
    }
    return new os({
      typeName: D.ZodDiscriminatedUnion,
      discriminator: t,
      options: n,
      optionsMap: i,
      ...j(r)
    });
  }
}
function Hl(e, t) {
  const n = Yt(e), r = Yt(t);
  if (e === t)
    return { valid: !0, data: e };
  if (n === N.object && r === N.object) {
    const i = U.objectKeys(t), o = U.objectKeys(e).filter((l) => i.indexOf(l) !== -1), s = { ...e, ...t };
    for (const l of o) {
      const a = Hl(e[l], t[l]);
      if (!a.valid)
        return { valid: !1 };
      s[l] = a.data;
    }
    return { valid: !0, data: s };
  } else if (n === N.array && r === N.array) {
    if (e.length !== t.length)
      return { valid: !1 };
    const i = [];
    for (let o = 0; o < e.length; o++) {
      const s = e[o], l = t[o], a = Hl(s, l);
      if (!a.valid)
        return { valid: !1 };
      i.push(a.data);
    }
    return { valid: !0, data: i };
  } else
    return n === N.date && r === N.date && +e == +t ? { valid: !0, data: e } : { valid: !1 };
}
class mi extends A {
  _parse(t) {
    const { status: n, ctx: r } = this._processInputParams(t), i = (o, s) => {
      if (Zl(o) || Zl(s))
        return I;
      const l = Hl(o.value, s.value);
      return l.valid ? ((Bl(o) || Bl(s)) && n.dirty(), { status: n.value, value: l.data }) : (O(r, {
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
mi.create = (e, t, n) => new mi({
  left: e,
  right: t,
  typeName: D.ZodIntersection,
  ...j(n)
});
class _t extends A {
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
    const o = [...r.data].map((s, l) => {
      const a = this._def.items[l] || this._def.rest;
      return a ? a._parse(new wt(r, s, r.path, l)) : null;
    }).filter((s) => !!s);
    return r.common.async ? Promise.all(o).then((s) => Te.mergeArray(n, s)) : Te.mergeArray(n, o);
  }
  get items() {
    return this._def.items;
  }
  rest(t) {
    return new _t({
      ...this._def,
      rest: t
    });
  }
}
_t.create = (e, t) => {
  if (!Array.isArray(e))
    throw new Error("You must pass an array of schemas to z.tuple([ ... ])");
  return new _t({
    items: e,
    typeName: D.ZodTuple,
    rest: null,
    ...j(t)
  });
};
class vi extends A {
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
    for (const l in r.data)
      i.push({
        key: o._parse(new wt(r, l, r.path, l)),
        value: s._parse(new wt(r, r.data[l], r.path, l))
      });
    return r.common.async ? Te.mergeObjectAsync(n, i) : Te.mergeObjectSync(n, i);
  }
  get element() {
    return this._def.valueType;
  }
  static create(t, n, r) {
    return n instanceof A ? new vi({
      keyType: t,
      valueType: n,
      typeName: D.ZodRecord,
      ...j(r)
    }) : new vi({
      keyType: rt.create(),
      valueType: t,
      typeName: D.ZodRecord,
      ...j(n)
    });
  }
}
class zo extends A {
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
    const i = this._def.keyType, o = this._def.valueType, s = [...r.data.entries()].map(([l, a], u) => ({
      key: i._parse(new wt(r, l, r.path, [u, "key"])),
      value: o._parse(new wt(r, a, r.path, [u, "value"]))
    }));
    if (r.common.async) {
      const l = /* @__PURE__ */ new Map();
      return Promise.resolve().then(async () => {
        for (const a of s) {
          const u = await a.key, p = await a.value;
          if (u.status === "aborted" || p.status === "aborted")
            return I;
          (u.status === "dirty" || p.status === "dirty") && n.dirty(), l.set(u.value, p.value);
        }
        return { status: n.value, value: l };
      });
    } else {
      const l = /* @__PURE__ */ new Map();
      for (const a of s) {
        const u = a.key, p = a.value;
        if (u.status === "aborted" || p.status === "aborted")
          return I;
        (u.status === "dirty" || p.status === "dirty") && n.dirty(), l.set(u.value, p.value);
      }
      return { status: n.value, value: l };
    }
  }
}
zo.create = (e, t, n) => new zo({
  valueType: t,
  keyType: e,
  typeName: D.ZodMap,
  ...j(n)
});
class Rn extends A {
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
    function s(a) {
      const u = /* @__PURE__ */ new Set();
      for (const p of a) {
        if (p.status === "aborted")
          return I;
        p.status === "dirty" && n.dirty(), u.add(p.value);
      }
      return { status: n.value, value: u };
    }
    const l = [...r.data.values()].map((a, u) => o._parse(new wt(r, a, r.path, u)));
    return r.common.async ? Promise.all(l).then((a) => s(a)) : s(l);
  }
  min(t, n) {
    return new Rn({
      ...this._def,
      minSize: { value: t, message: R.toString(n) }
    });
  }
  max(t, n) {
    return new Rn({
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
Rn.create = (e, t) => new Rn({
  valueType: e,
  minSize: null,
  maxSize: null,
  typeName: D.ZodSet,
  ...j(t)
});
class or extends A {
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
    function r(l, a) {
      return Mo({
        data: l,
        path: n.path,
        errorMaps: [
          n.common.contextualErrorMap,
          n.schemaErrorMap,
          Do(),
          ui
        ].filter((u) => !!u),
        issueData: {
          code: _.invalid_arguments,
          argumentsError: a
        }
      });
    }
    function i(l, a) {
      return Mo({
        data: l,
        path: n.path,
        errorMaps: [
          n.common.contextualErrorMap,
          n.schemaErrorMap,
          Do(),
          ui
        ].filter((u) => !!u),
        issueData: {
          code: _.invalid_return_type,
          returnTypeError: a
        }
      });
    }
    const o = { errorMap: n.common.contextualErrorMap }, s = n.data;
    if (this._def.returns instanceof mr) {
      const l = this;
      return Re(async function(...a) {
        const u = new st([]), p = await l._def.args.parseAsync(a, o).catch((y) => {
          throw u.addIssue(r(a, y)), u;
        }), h = await Reflect.apply(s, this, p);
        return await l._def.returns._def.type.parseAsync(h, o).catch((y) => {
          throw u.addIssue(i(h, y)), u;
        });
      });
    } else {
      const l = this;
      return Re(function(...a) {
        const u = l._def.args.safeParse(a, o);
        if (!u.success)
          throw new st([r(a, u.error)]);
        const p = Reflect.apply(s, this, u.data), h = l._def.returns.safeParse(p, o);
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
    return new or({
      ...this._def,
      args: _t.create(t).rest(xn.create())
    });
  }
  returns(t) {
    return new or({
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
    return new or({
      args: t || _t.create([]).rest(xn.create()),
      returns: n || xn.create(),
      typeName: D.ZodFunction,
      ...j(r)
    });
  }
}
class yi extends A {
  get schema() {
    return this._def.getter();
  }
  _parse(t) {
    const { ctx: n } = this._processInputParams(t);
    return this._def.getter()._parse({ data: n.data, path: n.path, parent: n });
  }
}
yi.create = (e, t) => new yi({
  getter: e,
  typeName: D.ZodLazy,
  ...j(t)
});
class gi extends A {
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
gi.create = (e, t) => new gi({
  value: e,
  typeName: D.ZodLiteral,
  ...j(t)
});
function Wf(e, t) {
  return new cn({
    values: e,
    typeName: D.ZodEnum,
    ...j(t)
  });
}
class cn extends A {
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
    return cn.create(t);
  }
  exclude(t) {
    return cn.create(this.options.filter((n) => !t.includes(n)));
  }
}
cn.create = Wf;
class wi extends A {
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
wi.create = (e, t) => new wi({
  values: e,
  typeName: D.ZodNativeEnum,
  ...j(t)
});
class mr extends A {
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
mr.create = (e, t) => new mr({
  type: e,
  typeName: D.ZodPromise,
  ...j(t)
});
class ut extends A {
  innerType() {
    return this._def.schema;
  }
  sourceType() {
    return this._def.schema._def.typeName === D.ZodEffects ? this._def.schema.sourceType() : this._def.schema;
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
      } : r.common.async ? Promise.resolve(s).then((l) => this._def.schema._parseAsync({
        data: l,
        path: r.path,
        parent: r
      })) : this._def.schema._parseSync({
        data: s,
        path: r.path,
        parent: r
      });
    }
    if (i.type === "refinement") {
      const s = (l) => {
        const a = i.refinement(l, o);
        if (r.common.async)
          return Promise.resolve(a);
        if (a instanceof Promise)
          throw new Error("Async refinement encountered during synchronous parse operation. Use .parseAsync instead.");
        return l;
      };
      if (r.common.async === !1) {
        const l = this._def.schema._parseSync({
          data: r.data,
          path: r.path,
          parent: r
        });
        return l.status === "aborted" ? I : (l.status === "dirty" && n.dirty(), s(l.value), { status: n.value, value: l.value });
      } else
        return this._def.schema._parseAsync({ data: r.data, path: r.path, parent: r }).then((l) => l.status === "aborted" ? I : (l.status === "dirty" && n.dirty(), s(l.value).then(() => ({ status: n.value, value: l.value }))));
    }
    if (i.type === "transform")
      if (r.common.async === !1) {
        const s = this._def.schema._parseSync({
          data: r.data,
          path: r.path,
          parent: r
        });
        if (!ci(s))
          return s;
        const l = i.transform(s.value, o);
        if (l instanceof Promise)
          throw new Error("Asynchronous transform encountered during synchronous parse operation. Use .parseAsync instead.");
        return { status: n.value, value: l };
      } else
        return this._def.schema._parseAsync({ data: r.data, path: r.path, parent: r }).then((s) => ci(s) ? Promise.resolve(i.transform(s.value, o)).then((l) => ({ status: n.value, value: l })) : s);
    U.assertNever(i);
  }
}
ut.create = (e, t, n) => new ut({
  schema: e,
  typeName: D.ZodEffects,
  effect: t,
  ...j(n)
});
ut.createWithPreprocess = (e, t, n) => new ut({
  schema: t,
  effect: { type: "preprocess", transform: e },
  typeName: D.ZodEffects,
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
  typeName: D.ZodOptional,
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
  typeName: D.ZodNullable,
  ...j(t)
});
class _i extends A {
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
_i.create = (e, t) => new _i({
  innerType: e,
  typeName: D.ZodDefault,
  defaultValue: typeof t.default == "function" ? t.default : () => t.default,
  ...j(t)
});
class Ao extends A {
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
    return Lo(i) ? i.then((o) => ({
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
Ao.create = (e, t) => new Ao({
  innerType: e,
  typeName: D.ZodCatch,
  catchValue: typeof t.catch == "function" ? t.catch : () => t.catch,
  ...j(t)
});
class Fo extends A {
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
Fo.create = (e) => new Fo({
  typeName: D.ZodNaN,
  ...j(e)
});
const Ov = Symbol("zod_brand");
class $f extends A {
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
class Ni extends A {
  _parse(t) {
    const { status: n, ctx: r } = this._processInputParams(t);
    if (r.common.async)
      return (async () => {
        const o = await this._def.in._parseAsync({
          data: r.data,
          path: r.path,
          parent: r
        });
        return o.status === "aborted" ? I : o.status === "dirty" ? (n.dirty(), Vf(o.value)) : this._def.out._parseAsync({
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
    return new Ni({
      in: t,
      out: n,
      typeName: D.ZodPipeline
    });
  }
}
class Vo extends A {
  _parse(t) {
    const n = this._def.innerType._parse(t);
    return ci(n) && (n.value = Object.freeze(n.value)), n;
  }
}
Vo.create = (e, t) => new Vo({
  innerType: e,
  typeName: D.ZodReadonly,
  ...j(t)
});
const Uf = (e, t = {}, n) => e ? hr.create().superRefine((r, i) => {
  var o, s;
  if (!e(r)) {
    const l = typeof t == "function" ? t(r) : typeof t == "string" ? { message: t } : t, a = (s = (o = l.fatal) !== null && o !== void 0 ? o : n) !== null && s !== void 0 ? s : !0, u = typeof l == "string" ? { message: l } : l;
    i.addIssue({ code: "custom", ...u, fatal: a });
  }
}) : hr.create(), Pv = {
  object: te.lazycreate
};
var D;
(function(e) {
  e.ZodString = "ZodString", e.ZodNumber = "ZodNumber", e.ZodNaN = "ZodNaN", e.ZodBigInt = "ZodBigInt", e.ZodBoolean = "ZodBoolean", e.ZodDate = "ZodDate", e.ZodSymbol = "ZodSymbol", e.ZodUndefined = "ZodUndefined", e.ZodNull = "ZodNull", e.ZodAny = "ZodAny", e.ZodUnknown = "ZodUnknown", e.ZodNever = "ZodNever", e.ZodVoid = "ZodVoid", e.ZodArray = "ZodArray", e.ZodObject = "ZodObject", e.ZodUnion = "ZodUnion", e.ZodDiscriminatedUnion = "ZodDiscriminatedUnion", e.ZodIntersection = "ZodIntersection", e.ZodTuple = "ZodTuple", e.ZodRecord = "ZodRecord", e.ZodMap = "ZodMap", e.ZodSet = "ZodSet", e.ZodFunction = "ZodFunction", e.ZodLazy = "ZodLazy", e.ZodLiteral = "ZodLiteral", e.ZodEnum = "ZodEnum", e.ZodEffects = "ZodEffects", e.ZodNativeEnum = "ZodNativeEnum", e.ZodOptional = "ZodOptional", e.ZodNullable = "ZodNullable", e.ZodDefault = "ZodDefault", e.ZodCatch = "ZodCatch", e.ZodPromise = "ZodPromise", e.ZodBranded = "ZodBranded", e.ZodPipeline = "ZodPipeline", e.ZodReadonly = "ZodReadonly";
})(D || (D = {}));
const Rv = (e, t = {
  message: `Input not instance of ${e.name}`
}) => Uf((n) => n instanceof e, t), Zf = rt.create, Bf = an.create, Dv = Fo.create, Mv = un.create, Hf = di.create, Lv = Pn.create, Iv = Io.create, jv = fi.create, zv = pi.create, Av = hr.create, Fv = xn.create, Vv = At.create, Wv = jo.create, $v = lt.create, Uv = te.create, Zv = te.strictCreate, Bv = hi.create, Hv = os.create, Yv = mi.create, Qv = _t.create, Xv = vi.create, Kv = zo.create, Gv = Rn.create, qv = or.create, Jv = yi.create, bv = gi.create, ey = cn.create, ty = wi.create, ny = mr.create, sc = ut.create, ry = Mt.create, iy = Dn.create, oy = ut.createWithPreprocess, sy = Ni.create, ly = () => Zf().optional(), ay = () => Bf().optional(), uy = () => Hf().optional(), cy = {
  string: (e) => rt.create({ ...e, coerce: !0 }),
  number: (e) => an.create({ ...e, coerce: !0 }),
  boolean: (e) => di.create({
    ...e,
    coerce: !0
  }),
  bigint: (e) => un.create({ ...e, coerce: !0 }),
  date: (e) => Pn.create({ ...e, coerce: !0 })
}, dy = I;
var ue = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  defaultErrorMap: ui,
  setErrorMap: mv,
  getErrorMap: Do,
  makeIssue: Mo,
  EMPTY_PATH: vv,
  addIssueToContext: O,
  ParseStatus: Te,
  INVALID: I,
  DIRTY: Vf,
  OK: Re,
  isAborted: Zl,
  isDirty: Bl,
  isValid: ci,
  isAsync: Lo,
  get util() {
    return U;
  },
  get objectUtil() {
    return Ul;
  },
  ZodParsedType: N,
  getParsedType: Yt,
  ZodType: A,
  ZodString: rt,
  ZodNumber: an,
  ZodBigInt: un,
  ZodBoolean: di,
  ZodDate: Pn,
  ZodSymbol: Io,
  ZodUndefined: fi,
  ZodNull: pi,
  ZodAny: hr,
  ZodUnknown: xn,
  ZodNever: At,
  ZodVoid: jo,
  ZodArray: lt,
  ZodObject: te,
  ZodUnion: hi,
  ZodDiscriminatedUnion: os,
  ZodIntersection: mi,
  ZodTuple: _t,
  ZodRecord: vi,
  ZodMap: zo,
  ZodSet: Rn,
  ZodFunction: or,
  ZodLazy: yi,
  ZodLiteral: gi,
  ZodEnum: cn,
  ZodNativeEnum: wi,
  ZodPromise: mr,
  ZodEffects: ut,
  ZodTransformer: ut,
  ZodOptional: Mt,
  ZodNullable: Dn,
  ZodDefault: _i,
  ZodCatch: Ao,
  ZodNaN: Fo,
  BRAND: Ov,
  ZodBranded: $f,
  ZodPipeline: Ni,
  ZodReadonly: Vo,
  custom: Uf,
  Schema: A,
  ZodSchema: A,
  late: Pv,
  get ZodFirstPartyTypeKind() {
    return D;
  },
  coerce: cy,
  any: Av,
  array: $v,
  bigint: Mv,
  boolean: Hf,
  date: Lv,
  discriminatedUnion: Hv,
  effect: sc,
  enum: ey,
  function: qv,
  instanceof: Rv,
  intersection: Yv,
  lazy: Jv,
  literal: bv,
  map: Kv,
  nan: Dv,
  nativeEnum: ty,
  never: Vv,
  null: zv,
  nullable: iy,
  number: Bf,
  object: Uv,
  oboolean: uy,
  onumber: ay,
  optional: ry,
  ostring: ly,
  pipeline: sy,
  preprocess: oy,
  promise: ny,
  record: Xv,
  set: Gv,
  strictObject: Zv,
  string: Zf,
  symbol: Iv,
  transformer: sc,
  tuple: Qv,
  undefined: jv,
  union: Bv,
  unknown: Fv,
  void: Wv,
  NEVER: dy,
  ZodIssueCode: _,
  quotelessJson: hv,
  ZodError: st
});
const Yf = ue.object({
  MemberCount: ue.number(),
  OnTrackCount: ue.number()
}), Qf = ue.object({
  MemberCount: ue.number(),
  ContributionAmount: ue.number()
}), Xf = ue.object({
  ContributionAmount: ue.number()
}), fy = ue.object({
  Name: ue.string(),
  MemberCount: ue.number(),
  BUKStatus: Yf,
  SamvirkStatus: Qf,
  AHStatus: Xf
}), py = ue.object({
  Title: ue.string(),
  DateFrom: ue.string(),
  DateTo: ue.string(),
  MyShareTargetOnDate: ue.number(),
  MyShareNextTreshold: ue.number(),
  SamvirkGoalPerMonth: ue.number(),
  Teams: ue.array(fy)
}), hy = ue.array(py);
Yf.or(Qf).or(Xf);
function kt(e) {
  const t = Object.prototype.toString.call(e);
  return e instanceof Date || typeof e == "object" && t === "[object Date]" ? new e.constructor(+e) : typeof e == "number" || t === "[object Number]" || typeof e == "string" || t === "[object String]" ? new Date(e) : /* @__PURE__ */ new Date(NaN);
}
function Mn(e, t) {
  return e instanceof Date ? new e.constructor(t) : new Date(t);
}
const Kf = 6048e5, my = 864e5;
let vy = {};
function ss() {
  return vy;
}
function ki(e, t) {
  var l, a, u, p;
  const n = ss(), r = (t == null ? void 0 : t.weekStartsOn) ?? ((a = (l = t == null ? void 0 : t.locale) == null ? void 0 : l.options) == null ? void 0 : a.weekStartsOn) ?? n.weekStartsOn ?? ((p = (u = n.locale) == null ? void 0 : u.options) == null ? void 0 : p.weekStartsOn) ?? 0, i = kt(e), o = i.getDay(), s = (o < r ? 7 : 0) + o - r;
  return i.setDate(i.getDate() - s), i.setHours(0, 0, 0, 0), i;
}
function Wo(e) {
  return ki(e, { weekStartsOn: 1 });
}
function Gf(e) {
  const t = kt(e), n = t.getFullYear(), r = Mn(e, 0);
  r.setFullYear(n + 1, 0, 4), r.setHours(0, 0, 0, 0);
  const i = Wo(r), o = Mn(e, 0);
  o.setFullYear(n, 0, 4), o.setHours(0, 0, 0, 0);
  const s = Wo(o);
  return t.getTime() >= i.getTime() ? n + 1 : t.getTime() >= s.getTime() ? n : n - 1;
}
function lc(e) {
  const t = kt(e);
  return t.setHours(0, 0, 0, 0), t;
}
function ac(e) {
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
function yy(e, t) {
  const n = lc(e), r = lc(t), i = n.getTime() - ac(n), o = r.getTime() - ac(r);
  return Math.round((i - o) / my);
}
function gy(e) {
  const t = Gf(e), n = Mn(e, 0);
  return n.setFullYear(t, 0, 4), n.setHours(0, 0, 0, 0), Wo(n);
}
function wy(e) {
  return e instanceof Date || typeof e == "object" && Object.prototype.toString.call(e) === "[object Date]";
}
function _y(e) {
  if (!wy(e) && typeof e != "number")
    return !1;
  const t = kt(e);
  return !isNaN(Number(t));
}
function ky(e) {
  const t = kt(e), n = Mn(e, 0);
  return n.setFullYear(t.getFullYear(), 0, 1), n.setHours(0, 0, 0, 0), n;
}
const Sy = {
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
}, xy = (e, t, n) => {
  let r;
  const i = Sy[e];
  return typeof i == "string" ? r = i : t === 1 ? r = i.one : r = i.other.replace("{{count}}", t.toString()), n != null && n.addSuffix ? n.comparison && n.comparison > 0 ? "in " + r : r + " ago" : r;
};
function Zs(e) {
  return (t = {}) => {
    const n = t.width ? String(t.width) : e.defaultWidth;
    return e.formats[n] || e.formats[e.defaultWidth];
  };
}
const Ey = {
  full: "EEEE, MMMM do, y",
  long: "MMMM do, y",
  medium: "MMM d, y",
  short: "MM/dd/yyyy"
}, Cy = {
  full: "h:mm:ss a zzzz",
  long: "h:mm:ss a z",
  medium: "h:mm:ss a",
  short: "h:mm a"
}, Ty = {
  full: "{{date}} 'at' {{time}}",
  long: "{{date}} 'at' {{time}}",
  medium: "{{date}}, {{time}}",
  short: "{{date}}, {{time}}"
}, Ny = {
  date: Zs({
    formats: Ey,
    defaultWidth: "full"
  }),
  time: Zs({
    formats: Cy,
    defaultWidth: "full"
  }),
  dateTime: Zs({
    formats: Ty,
    defaultWidth: "full"
  })
}, Oy = {
  lastWeek: "'last' eeee 'at' p",
  yesterday: "'yesterday at' p",
  today: "'today at' p",
  tomorrow: "'tomorrow at' p",
  nextWeek: "eeee 'at' p",
  other: "P"
}, Py = (e, t, n, r) => Oy[e];
function Pr(e) {
  return (t, n) => {
    const r = n != null && n.context ? String(n.context) : "standalone";
    let i;
    if (r === "formatting" && e.formattingValues) {
      const s = e.defaultFormattingWidth || e.defaultWidth, l = n != null && n.width ? String(n.width) : s;
      i = e.formattingValues[l] || e.formattingValues[s];
    } else {
      const s = e.defaultWidth, l = n != null && n.width ? String(n.width) : e.defaultWidth;
      i = e.values[l] || e.values[s];
    }
    const o = e.argumentCallback ? e.argumentCallback(t) : t;
    return i[o];
  };
}
const Ry = {
  narrow: ["B", "A"],
  abbreviated: ["BC", "AD"],
  wide: ["Before Christ", "Anno Domini"]
}, Dy = {
  narrow: ["1", "2", "3", "4"],
  abbreviated: ["Q1", "Q2", "Q3", "Q4"],
  wide: ["1st quarter", "2nd quarter", "3rd quarter", "4th quarter"]
}, My = {
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
}, Ly = {
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
}, Iy = {
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
}, jy = {
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
}, zy = (e, t) => {
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
}, Ay = {
  ordinalNumber: zy,
  era: Pr({
    values: Ry,
    defaultWidth: "wide"
  }),
  quarter: Pr({
    values: Dy,
    defaultWidth: "wide",
    argumentCallback: (e) => e - 1
  }),
  month: Pr({
    values: My,
    defaultWidth: "wide"
  }),
  day: Pr({
    values: Ly,
    defaultWidth: "wide"
  }),
  dayPeriod: Pr({
    values: Iy,
    defaultWidth: "wide",
    formattingValues: jy,
    defaultFormattingWidth: "wide"
  })
};
function Rr(e) {
  return (t, n = {}) => {
    const r = n.width, i = r && e.matchPatterns[r] || e.matchPatterns[e.defaultMatchWidth], o = t.match(i);
    if (!o)
      return null;
    const s = o[0], l = r && e.parsePatterns[r] || e.parsePatterns[e.defaultParseWidth], a = Array.isArray(l) ? Vy(l, (h) => h.test(s)) : (
      // eslint-disable-next-line @typescript-eslint/no-explicit-any -- I challange you to fix the type
      Fy(l, (h) => h.test(s))
    );
    let u;
    u = e.valueCallback ? e.valueCallback(a) : a, u = n.valueCallback ? (
      // eslint-disable-next-line @typescript-eslint/no-explicit-any -- I challange you to fix the type
      n.valueCallback(u)
    ) : u;
    const p = t.slice(s.length);
    return { value: u, rest: p };
  };
}
function Fy(e, t) {
  for (const n in e)
    if (Object.prototype.hasOwnProperty.call(e, n) && t(e[n]))
      return n;
}
function Vy(e, t) {
  for (let n = 0; n < e.length; n++)
    if (t(e[n]))
      return n;
}
function Wy(e) {
  return (t, n = {}) => {
    const r = t.match(e.matchPattern);
    if (!r)
      return null;
    const i = r[0], o = t.match(e.parsePattern);
    if (!o)
      return null;
    let s = e.valueCallback ? e.valueCallback(o[0]) : o[0];
    s = n.valueCallback ? n.valueCallback(s) : s;
    const l = t.slice(i.length);
    return { value: s, rest: l };
  };
}
const $y = /^(\d+)(th|st|nd|rd)?/i, Uy = /\d+/i, Zy = {
  narrow: /^(b|a)/i,
  abbreviated: /^(b\.?\s?c\.?|b\.?\s?c\.?\s?e\.?|a\.?\s?d\.?|c\.?\s?e\.?)/i,
  wide: /^(before christ|before common era|anno domini|common era)/i
}, By = {
  any: [/^b/i, /^(a|c)/i]
}, Hy = {
  narrow: /^[1234]/i,
  abbreviated: /^q[1234]/i,
  wide: /^[1234](th|st|nd|rd)? quarter/i
}, Yy = {
  any: [/1/i, /2/i, /3/i, /4/i]
}, Qy = {
  narrow: /^[jfmasond]/i,
  abbreviated: /^(jan|feb|mar|apr|may|jun|jul|aug|sep|oct|nov|dec)/i,
  wide: /^(january|february|march|april|may|june|july|august|september|october|november|december)/i
}, Xy = {
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
}, Ky = {
  narrow: /^[smtwf]/i,
  short: /^(su|mo|tu|we|th|fr|sa)/i,
  abbreviated: /^(sun|mon|tue|wed|thu|fri|sat)/i,
  wide: /^(sunday|monday|tuesday|wednesday|thursday|friday|saturday)/i
}, Gy = {
  narrow: [/^s/i, /^m/i, /^t/i, /^w/i, /^t/i, /^f/i, /^s/i],
  any: [/^su/i, /^m/i, /^tu/i, /^w/i, /^th/i, /^f/i, /^sa/i]
}, qy = {
  narrow: /^(a|p|mi|n|(in the|at) (morning|afternoon|evening|night))/i,
  any: /^([ap]\.?\s?m\.?|midnight|noon|(in the|at) (morning|afternoon|evening|night))/i
}, Jy = {
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
}, by = {
  ordinalNumber: Wy({
    matchPattern: $y,
    parsePattern: Uy,
    valueCallback: (e) => parseInt(e, 10)
  }),
  era: Rr({
    matchPatterns: Zy,
    defaultMatchWidth: "wide",
    parsePatterns: By,
    defaultParseWidth: "any"
  }),
  quarter: Rr({
    matchPatterns: Hy,
    defaultMatchWidth: "wide",
    parsePatterns: Yy,
    defaultParseWidth: "any",
    valueCallback: (e) => e + 1
  }),
  month: Rr({
    matchPatterns: Qy,
    defaultMatchWidth: "wide",
    parsePatterns: Xy,
    defaultParseWidth: "any"
  }),
  day: Rr({
    matchPatterns: Ky,
    defaultMatchWidth: "wide",
    parsePatterns: Gy,
    defaultParseWidth: "any"
  }),
  dayPeriod: Rr({
    matchPatterns: qy,
    defaultMatchWidth: "any",
    parsePatterns: Jy,
    defaultParseWidth: "any"
  })
}, eg = {
  code: "en-US",
  formatDistance: xy,
  formatLong: Ny,
  formatRelative: Py,
  localize: Ay,
  match: by,
  options: {
    weekStartsOn: 0,
    firstWeekContainsDate: 1
  }
};
function tg(e) {
  const t = kt(e);
  return yy(t, ky(t)) + 1;
}
function ng(e) {
  const t = kt(e), n = Wo(t).getTime() - gy(t).getTime();
  return Math.round(n / Kf) + 1;
}
function qf(e, t) {
  var p, h, m, y;
  const n = kt(e), r = n.getFullYear(), i = ss(), o = (t == null ? void 0 : t.firstWeekContainsDate) ?? ((h = (p = t == null ? void 0 : t.locale) == null ? void 0 : p.options) == null ? void 0 : h.firstWeekContainsDate) ?? i.firstWeekContainsDate ?? ((y = (m = i.locale) == null ? void 0 : m.options) == null ? void 0 : y.firstWeekContainsDate) ?? 1, s = Mn(e, 0);
  s.setFullYear(r + 1, 0, o), s.setHours(0, 0, 0, 0);
  const l = ki(s, t), a = Mn(e, 0);
  a.setFullYear(r, 0, o), a.setHours(0, 0, 0, 0);
  const u = ki(a, t);
  return n.getTime() >= l.getTime() ? r + 1 : n.getTime() >= u.getTime() ? r : r - 1;
}
function rg(e, t) {
  var l, a, u, p;
  const n = ss(), r = (t == null ? void 0 : t.firstWeekContainsDate) ?? ((a = (l = t == null ? void 0 : t.locale) == null ? void 0 : l.options) == null ? void 0 : a.firstWeekContainsDate) ?? n.firstWeekContainsDate ?? ((p = (u = n.locale) == null ? void 0 : u.options) == null ? void 0 : p.firstWeekContainsDate) ?? 1, i = qf(e, t), o = Mn(e, 0);
  return o.setFullYear(i, 0, r), o.setHours(0, 0, 0, 0), ki(o, t);
}
function ig(e, t) {
  const n = kt(e), r = ki(n, t).getTime() - rg(n, t).getTime();
  return Math.round(r / Kf) + 1;
}
function Z(e, t) {
  const n = e < 0 ? "-" : "", r = Math.abs(e).toString().padStart(t, "0");
  return n + r;
}
const $t = {
  // Year
  y(e, t) {
    const n = e.getFullYear(), r = n > 0 ? n : 1 - n;
    return Z(t === "yy" ? r % 100 : r, t.length);
  },
  // Month
  M(e, t) {
    const n = e.getMonth();
    return t === "M" ? String(n + 1) : Z(n + 1, 2);
  },
  // Day of the month
  d(e, t) {
    return Z(e.getDate(), t.length);
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
    return Z(e.getHours() % 12 || 12, t.length);
  },
  // Hour [0-23]
  H(e, t) {
    return Z(e.getHours(), t.length);
  },
  // Minute
  m(e, t) {
    return Z(e.getMinutes(), t.length);
  },
  // Second
  s(e, t) {
    return Z(e.getSeconds(), t.length);
  },
  // Fraction of second
  S(e, t) {
    const n = t.length, r = e.getMilliseconds(), i = Math.floor(
      r * Math.pow(10, n - 3)
    );
    return Z(i, t.length);
  }
}, Vn = {
  am: "am",
  pm: "pm",
  midnight: "midnight",
  noon: "noon",
  morning: "morning",
  afternoon: "afternoon",
  evening: "evening",
  night: "night"
}, og = {
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
    return $t.y(e, t);
  },
  // Local week-numbering year
  Y: function(e, t, n, r) {
    const i = qf(e, r), o = i > 0 ? i : 1 - i;
    if (t === "YY") {
      const s = o % 100;
      return Z(s, 2);
    }
    return t === "Yo" ? n.ordinalNumber(o, { unit: "year" }) : Z(o, t.length);
  },
  // ISO week-numbering year
  R: function(e, t) {
    const n = Gf(e);
    return Z(n, t.length);
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
    return Z(n, t.length);
  },
  // Quarter
  Q: function(e, t, n) {
    const r = Math.ceil((e.getMonth() + 1) / 3);
    switch (t) {
      case "Q":
        return String(r);
      case "QQ":
        return Z(r, 2);
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
        return Z(r, 2);
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
        return $t.M(e, t);
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
        return Z(r + 1, 2);
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
    const i = ig(e, r);
    return t === "wo" ? n.ordinalNumber(i, { unit: "week" }) : Z(i, t.length);
  },
  // ISO week of year
  I: function(e, t, n) {
    const r = ng(e);
    return t === "Io" ? n.ordinalNumber(r, { unit: "week" }) : Z(r, t.length);
  },
  // Day of the month
  d: function(e, t, n) {
    return t === "do" ? n.ordinalNumber(e.getDate(), { unit: "date" }) : $t.d(e, t);
  },
  // Day of year
  D: function(e, t, n) {
    const r = tg(e);
    return t === "Do" ? n.ordinalNumber(r, { unit: "dayOfYear" }) : Z(r, t.length);
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
        return Z(o, 2);
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
        return Z(o, t.length);
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
        return Z(i, t.length);
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
    switch (r === 12 ? i = Vn.noon : r === 0 ? i = Vn.midnight : i = r / 12 >= 1 ? "pm" : "am", t) {
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
    switch (r >= 17 ? i = Vn.evening : r >= 12 ? i = Vn.afternoon : r >= 4 ? i = Vn.morning : i = Vn.night, t) {
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
    return $t.h(e, t);
  },
  // Hour [0-23]
  H: function(e, t, n) {
    return t === "Ho" ? n.ordinalNumber(e.getHours(), { unit: "hour" }) : $t.H(e, t);
  },
  // Hour [0-11]
  K: function(e, t, n) {
    const r = e.getHours() % 12;
    return t === "Ko" ? n.ordinalNumber(r, { unit: "hour" }) : Z(r, t.length);
  },
  // Hour [1-24]
  k: function(e, t, n) {
    let r = e.getHours();
    return r === 0 && (r = 24), t === "ko" ? n.ordinalNumber(r, { unit: "hour" }) : Z(r, t.length);
  },
  // Minute
  m: function(e, t, n) {
    return t === "mo" ? n.ordinalNumber(e.getMinutes(), { unit: "minute" }) : $t.m(e, t);
  },
  // Second
  s: function(e, t, n) {
    return t === "so" ? n.ordinalNumber(e.getSeconds(), { unit: "second" }) : $t.s(e, t);
  },
  // Fraction of second
  S: function(e, t) {
    return $t.S(e, t);
  },
  // Timezone (ISO-8601. If offset is 0, output is always `'Z'`)
  X: function(e, t, n, r) {
    const o = (r._originalDate || e).getTimezoneOffset();
    if (o === 0)
      return "Z";
    switch (t) {
      case "X":
        return cc(o);
      case "XXXX":
      case "XX":
        return yn(o);
      case "XXXXX":
      case "XXX":
      default:
        return yn(o, ":");
    }
  },
  // Timezone (ISO-8601. If offset is 0, output is `'+00:00'` or equivalent)
  x: function(e, t, n, r) {
    const o = (r._originalDate || e).getTimezoneOffset();
    switch (t) {
      case "x":
        return cc(o);
      case "xxxx":
      case "xx":
        return yn(o);
      case "xxxxx":
      case "xxx":
      default:
        return yn(o, ":");
    }
  },
  // Timezone (GMT)
  O: function(e, t, n, r) {
    const o = (r._originalDate || e).getTimezoneOffset();
    switch (t) {
      case "O":
      case "OO":
      case "OOO":
        return "GMT" + uc(o, ":");
      case "OOOO":
      default:
        return "GMT" + yn(o, ":");
    }
  },
  // Timezone (specific non-location)
  z: function(e, t, n, r) {
    const o = (r._originalDate || e).getTimezoneOffset();
    switch (t) {
      case "z":
      case "zz":
      case "zzz":
        return "GMT" + uc(o, ":");
      case "zzzz":
      default:
        return "GMT" + yn(o, ":");
    }
  },
  // Seconds timestamp
  t: function(e, t, n, r) {
    const i = r._originalDate || e, o = Math.floor(i.getTime() / 1e3);
    return Z(o, t.length);
  },
  // Milliseconds timestamp
  T: function(e, t, n, r) {
    const o = (r._originalDate || e).getTime();
    return Z(o, t.length);
  }
};
function uc(e, t = "") {
  const n = e > 0 ? "-" : "+", r = Math.abs(e), i = Math.floor(r / 60), o = r % 60;
  return o === 0 ? n + String(i) : n + String(i) + t + Z(o, 2);
}
function cc(e, t) {
  return e % 60 === 0 ? (e > 0 ? "-" : "+") + Z(Math.abs(e) / 60, 2) : yn(e, t);
}
function yn(e, t = "") {
  const n = e > 0 ? "-" : "+", r = Math.abs(e), i = Z(Math.floor(r / 60), 2), o = Z(r % 60, 2);
  return n + i + t + o;
}
const dc = (e, t) => {
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
}, Jf = (e, t) => {
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
}, sg = (e, t) => {
  const n = e.match(/(P+)(p+)?/) || [], r = n[1], i = n[2];
  if (!i)
    return dc(e, t);
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
  return o.replace("{{date}}", dc(r, t)).replace("{{time}}", Jf(i, t));
}, lg = {
  p: Jf,
  P: sg
}, ag = /^D+$/, ug = /^Y+$/, cg = ["D", "DD", "YY", "YYYY"];
function dg(e) {
  return ag.test(e);
}
function fg(e) {
  return ug.test(e);
}
function fc(e, t, n) {
  const r = pg(e, t, n);
  if (console.warn(r), cg.includes(e))
    throw new RangeError(r);
}
function pg(e, t, n) {
  const r = e[0] === "Y" ? "years" : "days of the month";
  return `Use \`${e.toLowerCase()}\` instead of \`${e}\` (in \`${t}\`) for formatting ${r} to the input \`${n}\`; see: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md`;
}
const hg = /[yYQqMLwIdDecihHKkms]o|(\w)\1*|''|'(''|[^'])+('|$)|./g, mg = /P+p+|P+|p+|''|'(''|[^'])+('|$)|./g, vg = /^'([^]*?)'?$/, yg = /''/g, gg = /[a-zA-Z]/;
function wg(e, t, n) {
  var p, h, m, y, w, k, F, d;
  const r = ss(), i = (n == null ? void 0 : n.locale) ?? r.locale ?? eg, o = (n == null ? void 0 : n.firstWeekContainsDate) ?? ((h = (p = n == null ? void 0 : n.locale) == null ? void 0 : p.options) == null ? void 0 : h.firstWeekContainsDate) ?? r.firstWeekContainsDate ?? ((y = (m = r.locale) == null ? void 0 : m.options) == null ? void 0 : y.firstWeekContainsDate) ?? 1, s = (n == null ? void 0 : n.weekStartsOn) ?? ((k = (w = n == null ? void 0 : n.locale) == null ? void 0 : w.options) == null ? void 0 : k.weekStartsOn) ?? r.weekStartsOn ?? ((d = (F = r.locale) == null ? void 0 : F.options) == null ? void 0 : d.weekStartsOn) ?? 0, l = kt(e);
  if (!_y(l))
    throw new RangeError("Invalid time value");
  const a = {
    firstWeekContainsDate: o,
    weekStartsOn: s,
    locale: i,
    _originalDate: l
  };
  return t.match(mg).map(function(c) {
    const f = c[0];
    if (f === "p" || f === "P") {
      const v = lg[f];
      return v(c, i.formatLong);
    }
    return c;
  }).join("").match(hg).map(function(c) {
    if (c === "''")
      return "'";
    const f = c[0];
    if (f === "'")
      return _g(c);
    const v = og[f];
    if (v)
      return !(n != null && n.useAdditionalWeekYearTokens) && fg(c) && fc(c, t, String(e)), !(n != null && n.useAdditionalDayOfYearTokens) && dg(c) && fc(c, t, String(e)), v(
        l,
        c,
        i.localize,
        a
      );
    if (f.match(gg))
      throw new RangeError(
        "Format string contains an unescaped latin alphabet character `" + f + "`"
      );
    return c;
  }).join("");
}
function _g(e) {
  const t = e.match(vg);
  return t ? t[1].replace(yg, "'") : e;
}
const pc = (e) => {
  const t = new Date(e);
  return wg(t, "d.M.yyyy");
}, Bs = (e, t) => {
  switch (console.log(e), !0) {
    case "OnTrackCount" in e:
      return (e.OnTrackCount / e.MemberCount * 100).toLocaleString("fi-FI", { maximumFractionDigits: 1 }) + "%";
    case ("ContributionAmount" in e && "MemberCount" in e):
      return (e.ContributionAmount / (t || 200)).toLocaleString("fi-FI", { maximumFractionDigits: 1 }) + "%";
    default:
      return e.ContributionAmount;
  }
}, kg = (e, t) => {
  const n = e.AHStatus.ContributionAmount, r = e.BUKStatus.OnTrackCount / e.BUKStatus.MemberCount, i = e.SamvirkStatus.ContributionAmount / (t || 200);
  return (n * r * i).toLocaleString("fi-FI", { maximumFractionDigits: 1 });
}, Sg = async (e) => {
  console.log("prod");
  let t;
  return t = await (await fetch(e)).json(), hy.parse(t);
}, xg = () => {
  const e = "https://portal.bccsuomi.fi/wp-admin/admin-ajax.php?action=fetch_work_reports", { data: t, error: n, isLoading: r } = pv(e, Sg);
  return console.log(t, n, r), /* @__PURE__ */ Q.jsxs("div", { className: "App", children: [
    r && /* @__PURE__ */ Q.jsx("p", { children: "Ladataan dataa..." }),
    n && /* @__PURE__ */ Q.jsxs("p", { children: [
      "Virhe: ",
      n
    ] }),
    t && /* @__PURE__ */ Q.jsx("div", { children: /* @__PURE__ */ Q.jsx("ul", { children: t.map((i) => /* @__PURE__ */ Q.jsxs("div", { children: [
      /* @__PURE__ */ Q.jsx("h2", { children: i.Title }),
      /* @__PURE__ */ Q.jsxs("li", { children: [
        /* @__PURE__ */ Q.jsxs("p", { children: [
          pc(i.DateFrom),
          " -",
          pc(i.DateTo)
        ] }),
        /* @__PURE__ */ Q.jsxs("table", { children: [
          /* @__PURE__ */ Q.jsx("thead", { children: /* @__PURE__ */ Q.jsxs("tr", { children: [
            /* @__PURE__ */ Q.jsx("td", { children: "Team" }),
            /* @__PURE__ */ Q.jsx("td", { children: "AH" }),
            /* @__PURE__ */ Q.jsx("td", { children: "BUK" }),
            /* @__PURE__ */ Q.jsx("td", { children: "Samvirk" }),
            /* @__PURE__ */ Q.jsx("td", { children: "Tulos" })
          ] }) }),
          /* @__PURE__ */ Q.jsx("tbody", { children: i.Teams.map((o) => /* @__PURE__ */ Q.jsxs("tr", { children: [
            /* @__PURE__ */ Q.jsx("td", { children: o.Name }),
            /* @__PURE__ */ Q.jsx("td", { children: Bs(o.AHStatus) }),
            /* @__PURE__ */ Q.jsx("td", { children: Bs(o.BUKStatus) }),
            /* @__PURE__ */ Q.jsx("td", { children: Bs(
              o.SamvirkStatus,
              i.SamvirkGoalPerMonth
            ) }),
            /* @__PURE__ */ Q.jsx("td", { children: kg(
              o,
              i.SamvirkGoalPerMonth
            ) })
          ] }, o.Name)) })
        ] })
      ] })
    ] }, i.Title)) }) })
  ] });
}, Eg = document.getElementById("work-root"), Cg = Of(Eg);
Cg.render(
  /* @__PURE__ */ Q.jsx(Uo.StrictMode, { children: /* @__PURE__ */ Q.jsx(xg, {}) })
);
