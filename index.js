function rp(e) {
  return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default") ? e.default : e;
}
var mc = { exports: {} }, Uo = {}, vc = { exports: {} }, V = {};
/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var xi = Symbol.for("react.element"), ip = Symbol.for("react.portal"), op = Symbol.for("react.fragment"), sp = Symbol.for("react.strict_mode"), lp = Symbol.for("react.profiler"), ap = Symbol.for("react.provider"), up = Symbol.for("react.context"), cp = Symbol.for("react.forward_ref"), dp = Symbol.for("react.suspense"), fp = Symbol.for("react.memo"), pp = Symbol.for("react.lazy"), Qa = Symbol.iterator;
function hp(e) {
  return e === null || typeof e != "object" ? null : (e = Qa && e[Qa] || e["@@iterator"], typeof e == "function" ? e : null);
}
var yc = { isMounted: function() {
  return !1;
}, enqueueForceUpdate: function() {
}, enqueueReplaceState: function() {
}, enqueueSetState: function() {
} }, gc = Object.assign, wc = {};
function yr(e, t, n) {
  this.props = e, this.context = t, this.refs = wc, this.updater = n || yc;
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
function _c() {
}
_c.prototype = yr.prototype;
function Ql(e, t, n) {
  this.props = e, this.context = t, this.refs = wc, this.updater = n || yc;
}
var Xl = Ql.prototype = new _c();
Xl.constructor = Ql;
gc(Xl, yr.prototype);
Xl.isPureReactComponent = !0;
var Xa = Array.isArray, kc = Object.prototype.hasOwnProperty, Gl = { current: null }, Sc = { key: !0, ref: !0, __self: !0, __source: !0 };
function xc(e, t, n) {
  var r, i = {}, o = null, s = null;
  if (t != null)
    for (r in t.ref !== void 0 && (s = t.ref), t.key !== void 0 && (o = "" + t.key), t)
      kc.call(t, r) && !Sc.hasOwnProperty(r) && (i[r] = t[r]);
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
  return { $$typeof: xi, type: e, key: o, ref: s, props: i, _owner: Gl.current };
}
function mp(e, t) {
  return { $$typeof: xi, type: e.type, key: t, ref: e.ref, props: e.props, _owner: e._owner };
}
function Kl(e) {
  return typeof e == "object" && e !== null && e.$$typeof === xi;
}
function vp(e) {
  var t = { "=": "=0", ":": "=2" };
  return "$" + e.replace(/[=:]/g, function(n) {
    return t[n];
  });
}
var Ga = /\/+/g;
function ds(e, t) {
  return typeof e == "object" && e !== null && e.key != null ? vp("" + e.key) : t.toString(36);
}
function Xi(e, t, n, r, i) {
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
          case ip:
            s = !0;
        }
    }
  if (s)
    return s = e, i = i(s), e = r === "" ? "." + ds(s, 0) : r, Xa(i) ? (n = "", e != null && (n = e.replace(Ga, "$&/") + "/"), Xi(i, t, n, "", function(u) {
      return u;
    })) : i != null && (Kl(i) && (i = mp(i, n + (!i.key || s && s.key === i.key ? "" : ("" + i.key).replace(Ga, "$&/") + "/") + e)), t.push(i)), 1;
  if (s = 0, r = r === "" ? "." : r + ":", Xa(e))
    for (var l = 0; l < e.length; l++) {
      o = e[l];
      var a = r + ds(o, l);
      s += Xi(o, t, n, a, i);
    }
  else if (a = hp(e), typeof a == "function")
    for (e = a.call(e), l = 0; !(o = e.next()).done; )
      o = o.value, a = r + ds(o, l++), s += Xi(o, t, n, a, i);
  else if (o === "object")
    throw t = String(e), Error("Objects are not valid as a React child (found: " + (t === "[object Object]" ? "object with keys {" + Object.keys(e).join(", ") + "}" : t) + "). If you meant to render a collection of children, use an array instead.");
  return s;
}
function Pi(e, t, n) {
  if (e == null)
    return e;
  var r = [], i = 0;
  return Xi(e, r, "", "", function(o) {
    return t.call(n, o, i++);
  }), r;
}
function yp(e) {
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
var Re = { current: null }, Gi = { transition: null }, gp = { ReactCurrentDispatcher: Re, ReactCurrentBatchConfig: Gi, ReactCurrentOwner: Gl };
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
  if (!Kl(e))
    throw Error("React.Children.only expected to receive a single React element child.");
  return e;
} };
V.Component = yr;
V.Fragment = op;
V.Profiler = lp;
V.PureComponent = Ql;
V.StrictMode = sp;
V.Suspense = dp;
V.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = gp;
V.cloneElement = function(e, t, n) {
  if (e == null)
    throw Error("React.cloneElement(...): The argument must be a React element, but you passed " + e + ".");
  var r = gc({}, e.props), i = e.key, o = e.ref, s = e._owner;
  if (t != null) {
    if (t.ref !== void 0 && (o = t.ref, s = Gl.current), t.key !== void 0 && (i = "" + t.key), e.type && e.type.defaultProps)
      var l = e.type.defaultProps;
    for (a in t)
      kc.call(t, a) && !Sc.hasOwnProperty(a) && (r[a] = t[a] === void 0 && l !== void 0 ? l[a] : t[a]);
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
  return { $$typeof: xi, type: e.type, key: i, ref: o, props: r, _owner: s };
};
V.createContext = function(e) {
  return e = { $$typeof: up, _currentValue: e, _currentValue2: e, _threadCount: 0, Provider: null, Consumer: null, _defaultValue: null, _globalName: null }, e.Provider = { $$typeof: ap, _context: e }, e.Consumer = e;
};
V.createElement = xc;
V.createFactory = function(e) {
  var t = xc.bind(null, e);
  return t.type = e, t;
};
V.createRef = function() {
  return { current: null };
};
V.forwardRef = function(e) {
  return { $$typeof: cp, render: e };
};
V.isValidElement = Kl;
V.lazy = function(e) {
  return { $$typeof: pp, _payload: { _status: -1, _result: e }, _init: yp };
};
V.memo = function(e, t) {
  return { $$typeof: fp, type: e, compare: t === void 0 ? null : t };
};
V.startTransition = function(e) {
  var t = Gi.transition;
  Gi.transition = {};
  try {
    e();
  } finally {
    Gi.transition = t;
  }
};
V.unstable_act = function() {
  throw Error("act(...) is not supported in production builds of React.");
};
V.useCallback = function(e, t) {
  return Re.current.useCallback(e, t);
};
V.useContext = function(e) {
  return Re.current.useContext(e);
};
V.useDebugValue = function() {
};
V.useDeferredValue = function(e) {
  return Re.current.useDeferredValue(e);
};
V.useEffect = function(e, t) {
  return Re.current.useEffect(e, t);
};
V.useId = function() {
  return Re.current.useId();
};
V.useImperativeHandle = function(e, t, n) {
  return Re.current.useImperativeHandle(e, t, n);
};
V.useInsertionEffect = function(e, t) {
  return Re.current.useInsertionEffect(e, t);
};
V.useLayoutEffect = function(e, t) {
  return Re.current.useLayoutEffect(e, t);
};
V.useMemo = function(e, t) {
  return Re.current.useMemo(e, t);
};
V.useReducer = function(e, t, n) {
  return Re.current.useReducer(e, t, n);
};
V.useRef = function(e) {
  return Re.current.useRef(e);
};
V.useState = function(e) {
  return Re.current.useState(e);
};
V.useSyncExternalStore = function(e, t, n) {
  return Re.current.useSyncExternalStore(e, t, n);
};
V.useTransition = function() {
  return Re.current.useTransition();
};
V.version = "18.2.0";
vc.exports = V;
var ae = vc.exports;
const Zo = /* @__PURE__ */ rp(ae);
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var wp = ae, _p = Symbol.for("react.element"), kp = Symbol.for("react.fragment"), Sp = Object.prototype.hasOwnProperty, xp = wp.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner, Ep = { key: !0, ref: !0, __self: !0, __source: !0 };
function Ec(e, t, n) {
  var r, i = {}, o = null, s = null;
  n !== void 0 && (o = "" + n), t.key !== void 0 && (o = "" + t.key), t.ref !== void 0 && (s = t.ref);
  for (r in t)
    Sp.call(t, r) && !Ep.hasOwnProperty(r) && (i[r] = t[r]);
  if (e && e.defaultProps)
    for (r in t = e.defaultProps, t)
      i[r] === void 0 && (i[r] = t[r]);
  return { $$typeof: _p, type: e, key: o, ref: s, props: i, _owner: xp.current };
}
Uo.Fragment = kp;
Uo.jsx = Ec;
Uo.jsxs = Ec;
mc.exports = Uo;
var Q = mc.exports, Cc = { exports: {} }, Be = {}, Tc = { exports: {} }, Nc = {};
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
        var Y = z - 1 >>> 1, G = T[Y];
        if (0 < i(G, M))
          T[Y] = M, T[z] = G, z = Y;
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
        for (var Y = 0, G = T.length, St = G >>> 1; Y < St; ) {
          var dt = 2 * (Y + 1) - 1, Wt = T[dt], ft = dt + 1, mn = T[ft];
          if (0 > i(Wt, z))
            ft < G && 0 > i(mn, Wt) ? (T[Y] = mn, T[ft] = z, Y = ft) : (T[Y] = Wt, T[dt] = z, Y = dt);
          else if (ft < G && 0 > i(mn, z))
            T[Y] = mn, T[ft] = z, Y = ft;
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
    var s = Date, l = s.now();
    e.unstable_now = function() {
      return s.now() - l;
    };
  }
  var a = [], u = [], p = 1, h = null, m = 3, y = !1, w = !1, k = !1, F = typeof setTimeout == "function" ? setTimeout : null, d = typeof clearTimeout == "function" ? clearTimeout : null, c = typeof setImmediate < "u" ? setImmediate : null;
  typeof navigator < "u" && navigator.scheduling !== void 0 && navigator.scheduling.isInputPending !== void 0 && navigator.scheduling.isInputPending.bind(navigator.scheduling);
  function f(T) {
    for (var M = n(u); M !== null; ) {
      if (M.callback === null)
        r(u);
      else if (M.startTime <= T)
        r(u), M.sortIndex = M.expirationTime, t(a, M);
      else
        break;
      M = n(u);
    }
  }
  function v(T) {
    if (k = !1, f(T), !w)
      if (n(a) !== null)
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
      for (f(M), h = n(a); h !== null && (!(h.expirationTime > M) || T && !pe()); ) {
        var Y = h.callback;
        if (typeof Y == "function") {
          h.callback = null, m = h.priorityLevel;
          var G = Y(h.expirationTime <= M);
          M = e.unstable_now(), typeof G == "function" ? h.callback = G : h === n(a) && r(a), f(M);
        } else
          r(a);
        h = n(a);
      }
      if (h !== null)
        var St = !0;
      else {
        var dt = n(u);
        dt !== null && An(v, dt.startTime - M), St = !1;
      }
      return St;
    } finally {
      h = null, m = z, y = !1;
    }
  }
  var S = !1, C = null, E = -1, H = 5, D = -1;
  function pe() {
    return !(e.unstable_now() - D < H);
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
    var he = new MessageChannel(), as = he.port2;
    he.port1.onmessage = ct, Ve = function() {
      as.postMessage(null);
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
    var Y = e.unstable_now();
    switch (typeof z == "object" && z !== null ? (z = z.delay, z = typeof z == "number" && 0 < z ? Y + z : Y) : z = Y, T) {
      case 1:
        var G = -1;
        break;
      case 2:
        G = 250;
        break;
      case 5:
        G = 1073741823;
        break;
      case 4:
        G = 1e4;
        break;
      default:
        G = 5e3;
    }
    return G = z + G, T = { id: p++, callback: M, priorityLevel: T, startTime: z, expirationTime: G, sortIndex: -1 }, z > Y ? (T.sortIndex = z, t(u, T), n(a) === null && T === n(u) && (k ? (d(E), E = -1) : k = !0, An(v, z - Y))) : (T.sortIndex = G, t(a, T), w || y || (w = !0, zn(x))), T;
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
})(Nc);
Tc.exports = Nc;
var Cp = Tc.exports;
/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Oc = ae, Ze = Cp;
function g(e) {
  for (var t = "https://reactjs.org/docs/error-decoder.html?invariant=" + e, n = 1; n < arguments.length; n++)
    t += "&args[]=" + encodeURIComponent(arguments[n]);
  return "Minified React error #" + e + "; visit " + t + " for the full message or use the non-minified dev environment for full errors and additional helpful warnings.";
}
var Pc = /* @__PURE__ */ new Set(), Hr = {};
function In(e, t) {
  lr(e, t), lr(e + "Capture", t);
}
function lr(e, t) {
  for (Hr[e] = t, e = 0; e < t.length; e++)
    Pc.add(t[e]);
}
var It = !(typeof window > "u" || typeof window.document > "u" || typeof window.document.createElement > "u"), Ys = Object.prototype.hasOwnProperty, Tp = /^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/, Ka = {}, qa = {};
function Np(e) {
  return Ys.call(qa, e) ? !0 : Ys.call(Ka, e) ? !1 : Tp.test(e) ? qa[e] = !0 : (Ka[e] = !0, !1);
}
function Op(e, t, n, r) {
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
function Pp(e, t, n, r) {
  if (t === null || typeof t > "u" || Op(e, t, n, r))
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
var ql = /[\-:]([a-z])/g;
function Jl(e) {
  return e[1].toUpperCase();
}
"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e) {
  var t = e.replace(
    ql,
    Jl
  );
  _e[t] = new De(t, 1, !1, e, null, !1, !1);
});
"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e) {
  var t = e.replace(ql, Jl);
  _e[t] = new De(t, 1, !1, e, "http://www.w3.org/1999/xlink", !1, !1);
});
["xml:base", "xml:lang", "xml:space"].forEach(function(e) {
  var t = e.replace(ql, Jl);
  _e[t] = new De(t, 1, !1, e, "http://www.w3.org/XML/1998/namespace", !1, !1);
});
["tabIndex", "crossOrigin"].forEach(function(e) {
  _e[e] = new De(e, 1, !1, e.toLowerCase(), null, !1, !1);
});
_e.xlinkHref = new De("xlinkHref", 1, !1, "xlink:href", "http://www.w3.org/1999/xlink", !0, !1);
["src", "href", "action", "formAction"].forEach(function(e) {
  _e[e] = new De(e, 1, !1, e.toLowerCase(), null, !0, !0);
});
function bl(e, t, n, r) {
  var i = _e.hasOwnProperty(t) ? _e[t] : null;
  (i !== null ? i.type !== 0 : r || !(2 < t.length) || t[0] !== "o" && t[0] !== "O" || t[1] !== "n" && t[1] !== "N") && (Pp(t, n, i, r) && (n = null), r || i === null ? Np(t) && (n === null ? e.removeAttribute(t) : e.setAttribute(t, "" + n)) : i.mustUseProperty ? e[i.propertyName] = n === null ? i.type === 3 ? !1 : "" : n : (t = i.attributeName, r = i.attributeNamespace, n === null ? e.removeAttribute(t) : (i = i.type, n = i === 3 || i === 4 && n === !0 ? "" : "" + n, r ? e.setAttributeNS(r, t, n) : e.setAttribute(t, n))));
}
var Vt = Oc.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED, Li = Symbol.for("react.element"), Un = Symbol.for("react.portal"), Zn = Symbol.for("react.fragment"), ea = Symbol.for("react.strict_mode"), Qs = Symbol.for("react.profiler"), Lc = Symbol.for("react.provider"), Rc = Symbol.for("react.context"), ta = Symbol.for("react.forward_ref"), Xs = Symbol.for("react.suspense"), Gs = Symbol.for("react.suspense_list"), na = Symbol.for("react.memo"), Zt = Symbol.for("react.lazy"), Dc = Symbol.for("react.offscreen"), Ja = Symbol.iterator;
function kr(e) {
  return e === null || typeof e != "object" ? null : (e = Ja && e[Ja] || e["@@iterator"], typeof e == "function" ? e : null);
}
var ie = Object.assign, fs;
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
    ps = !1, Error.prepareStackTrace = n;
  }
  return (e = e ? e.displayName || e.name : "") ? Dr(e) : "";
}
function Lp(e) {
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
function Ks(e) {
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
    case ea:
      return "StrictMode";
    case Xs:
      return "Suspense";
    case Gs:
      return "SuspenseList";
  }
  if (typeof e == "object")
    switch (e.$$typeof) {
      case Rc:
        return (e.displayName || "Context") + ".Consumer";
      case Lc:
        return (e._context.displayName || "Context") + ".Provider";
      case ta:
        var t = e.render;
        return e = e.displayName, e || (e = t.displayName || t.name || "", e = e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef"), e;
      case na:
        return t = e.displayName || null, t !== null ? t : Ks(e.type) || "Memo";
      case Zt:
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
      return t === ea ? "StrictMode" : "Mode";
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
function Ic(e) {
  if (!e)
    return !1;
  var t = e._valueTracker;
  if (!t)
    return !0;
  var n = t.getValue(), r = "";
  return e && (r = Mc(e) ? e.checked ? "true" : "false" : e.value), e = r, e !== n ? (t.setValue(e), !0) : !1;
}
function lo(e) {
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
  return ie({}, t, { defaultChecked: void 0, defaultValue: void 0, value: void 0, checked: n ?? e._wrapperState.initialChecked });
}
function ba(e, t) {
  var n = t.defaultValue == null ? "" : t.defaultValue, r = t.checked != null ? t.checked : t.defaultChecked;
  n = sn(t.value != null ? t.value : n), e._wrapperState = { initialChecked: r, initialValue: n, controlled: t.type === "checkbox" || t.type === "radio" ? t.checked != null : t.value != null };
}
function jc(e, t) {
  t = t.checked, t != null && bl(e, "checked", t, !1);
}
function Js(e, t) {
  jc(e, t);
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
  (t !== "number" || lo(e.ownerDocument) !== e) && (n == null ? e.defaultValue = "" + e._wrapperState.initialValue : e.defaultValue !== "" + n && (e.defaultValue = "" + n));
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
function el(e, t) {
  if (t.dangerouslySetInnerHTML != null)
    throw Error(g(91));
  return ie({}, t, { value: void 0, defaultValue: void 0, children: "" + e._wrapperState.initialValue });
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
function zc(e, t) {
  var n = sn(t.value), r = sn(t.defaultValue);
  n != null && (n = "" + n, n !== e.value && (e.value = n), t.defaultValue == null && e.defaultValue !== n && (e.defaultValue = n)), r != null && (e.defaultValue = "" + r);
}
function nu(e) {
  var t = e.textContent;
  t === e._wrapperState.initialValue && t !== "" && t !== null && (e.value = t);
}
function Ac(e) {
  switch (e) {
    case "svg":
      return "http://www.w3.org/2000/svg";
    case "math":
      return "http://www.w3.org/1998/Math/MathML";
    default:
      return "http://www.w3.org/1999/xhtml";
  }
}
function tl(e, t) {
  return e == null || e === "http://www.w3.org/1999/xhtml" ? Ac(t) : e === "http://www.w3.org/2000/svg" && t === "foreignObject" ? "http://www.w3.org/1999/xhtml" : e;
}
var Di, Fc = function(e) {
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
}, Mp = ["Webkit", "ms", "Moz", "O"];
Object.keys(zr).forEach(function(e) {
  Mp.forEach(function(t) {
    t = t + e.charAt(0).toUpperCase() + e.substring(1), zr[t] = zr[e];
  });
});
function Vc(e, t, n) {
  return t == null || typeof t == "boolean" || t === "" ? "" : n || typeof t != "number" || t === 0 || zr.hasOwnProperty(e) && zr[e] ? ("" + t).trim() : t + "px";
}
function Wc(e, t) {
  e = e.style;
  for (var n in t)
    if (t.hasOwnProperty(n)) {
      var r = n.indexOf("--") === 0, i = Vc(n, t[n], r);
      n === "float" && (n = "cssFloat"), r ? e.setProperty(n, i) : e[n] = i;
    }
}
var Ip = ie({ menuitem: !0 }, { area: !0, base: !0, br: !0, col: !0, embed: !0, hr: !0, img: !0, input: !0, keygen: !0, link: !0, meta: !0, param: !0, source: !0, track: !0, wbr: !0 });
function nl(e, t) {
  if (t) {
    if (Ip[e] && (t.children != null || t.dangerouslySetInnerHTML != null))
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
function rl(e, t) {
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
var il = null;
function ra(e) {
  return e = e.target || e.srcElement || window, e.correspondingUseElement && (e = e.correspondingUseElement), e.nodeType === 3 ? e.parentNode : e;
}
var ol = null, tr = null, nr = null;
function ru(e) {
  if (e = Ti(e)) {
    if (typeof ol != "function")
      throw Error(g(280));
    var t = e.stateNode;
    t && (t = Xo(t), ol(e.stateNode, e.type, t));
  }
}
function $c(e) {
  tr ? nr ? nr.push(e) : nr = [e] : tr = e;
}
function Uc() {
  if (tr) {
    var e = tr, t = nr;
    if (nr = tr = null, ru(e), t)
      for (e = 0; e < t.length; e++)
        ru(t[e]);
  }
}
function Zc(e, t) {
  return e(t);
}
function Bc() {
}
var ms = !1;
function Hc(e, t, n) {
  if (ms)
    return e(t, n);
  ms = !0;
  try {
    return Zc(e, t, n);
  } finally {
    ms = !1, (tr !== null || nr !== null) && (Bc(), Uc());
  }
}
function Qr(e, t) {
  var n = e.stateNode;
  if (n === null)
    return null;
  var r = Xo(n);
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
var sl = !1;
if (It)
  try {
    var Sr = {};
    Object.defineProperty(Sr, "passive", { get: function() {
      sl = !0;
    } }), window.addEventListener("test", Sr, Sr), window.removeEventListener("test", Sr, Sr);
  } catch {
    sl = !1;
  }
function jp(e, t, n, r, i, o, s, l, a) {
  var u = Array.prototype.slice.call(arguments, 3);
  try {
    t.apply(n, u);
  } catch (p) {
    this.onError(p);
  }
}
var Ar = !1, ao = null, uo = !1, ll = null, zp = { onError: function(e) {
  Ar = !0, ao = e;
} };
function Ap(e, t, n, r, i, o, s, l, a) {
  Ar = !1, ao = null, jp.apply(zp, arguments);
}
function Fp(e, t, n, r, i, o, s, l, a) {
  if (Ap.apply(this, arguments), Ar) {
    if (Ar) {
      var u = ao;
      Ar = !1, ao = null;
    } else
      throw Error(g(198));
    uo || (uo = !0, ll = u);
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
function Yc(e) {
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
function Vp(e) {
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
function Qc(e) {
  return e = Vp(e), e !== null ? Xc(e) : null;
}
function Xc(e) {
  if (e.tag === 5 || e.tag === 6)
    return e;
  for (e = e.child; e !== null; ) {
    var t = Xc(e);
    if (t !== null)
      return t;
    e = e.sibling;
  }
  return null;
}
var Gc = Ze.unstable_scheduleCallback, ou = Ze.unstable_cancelCallback, Wp = Ze.unstable_shouldYield, $p = Ze.unstable_requestPaint, le = Ze.unstable_now, Up = Ze.unstable_getCurrentPriorityLevel, ia = Ze.unstable_ImmediatePriority, Kc = Ze.unstable_UserBlockingPriority, co = Ze.unstable_NormalPriority, Zp = Ze.unstable_LowPriority, qc = Ze.unstable_IdlePriority, Bo = null, yt = null;
function Bp(e) {
  if (yt && typeof yt.onCommitFiberRoot == "function")
    try {
      yt.onCommitFiberRoot(Bo, e, void 0, (e.current.flags & 128) === 128);
    } catch {
    }
}
var it = Math.clz32 ? Math.clz32 : Qp, Hp = Math.log, Yp = Math.LN2;
function Qp(e) {
  return e >>>= 0, e === 0 ? 32 : 31 - (Hp(e) / Yp | 0) | 0;
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
    var l = s & ~i;
    l !== 0 ? r = Ir(l) : (o &= s, o !== 0 && (r = Ir(o)));
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
function Gp(e, t) {
  for (var n = e.suspendedLanes, r = e.pingedLanes, i = e.expirationTimes, o = e.pendingLanes; 0 < o; ) {
    var s = 31 - it(o), l = 1 << s, a = i[s];
    a === -1 ? (!(l & n) || l & r) && (i[s] = Xp(l, t)) : a <= t && (e.expiredLanes |= l), o &= ~l;
  }
}
function al(e) {
  return e = e.pendingLanes & -1073741825, e !== 0 ? e : e & 1073741824 ? 1073741824 : 0;
}
function Jc() {
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
function Kp(e, t) {
  var n = e.pendingLanes & ~t;
  e.pendingLanes = t, e.suspendedLanes = 0, e.pingedLanes = 0, e.expiredLanes &= t, e.mutableReadLanes &= t, e.entangledLanes &= t, t = e.entanglements;
  var r = e.eventTimes;
  for (e = e.expirationTimes; 0 < n; ) {
    var i = 31 - it(n), o = 1 << i;
    t[i] = 0, r[i] = -1, e[i] = -1, n &= ~o;
  }
}
function oa(e, t) {
  var n = e.entangledLanes |= t;
  for (e = e.entanglements; n; ) {
    var r = 31 - it(n), i = 1 << r;
    i & t | e[r] & t && (e[r] |= t), n &= ~i;
  }
}
var B = 0;
function bc(e) {
  return e &= -e, 1 < e ? 4 < e ? e & 268435455 ? 16 : 536870912 : 4 : 1;
}
var ed, sa, td, nd, rd, ul = !1, ji = [], qt = null, Jt = null, bt = null, Xr = /* @__PURE__ */ new Map(), Gr = /* @__PURE__ */ new Map(), Ht = [], qp = "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");
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
      Xr.delete(t.pointerId);
      break;
    case "gotpointercapture":
    case "lostpointercapture":
      Gr.delete(t.pointerId);
  }
}
function xr(e, t, n, r, i, o) {
  return e === null || e.nativeEvent !== o ? (e = { blockedOn: t, domEventName: n, eventSystemFlags: r, nativeEvent: o, targetContainers: [i] }, t !== null && (t = Ti(t), t !== null && sa(t)), e) : (e.eventSystemFlags |= r, t = e.targetContainers, i !== null && t.indexOf(i) === -1 && t.push(i), e);
}
function Jp(e, t, n, r, i) {
  switch (t) {
    case "focusin":
      return qt = xr(qt, e, t, n, r, i), !0;
    case "dragenter":
      return Jt = xr(Jt, e, t, n, r, i), !0;
    case "mouseover":
      return bt = xr(bt, e, t, n, r, i), !0;
    case "pointerover":
      var o = i.pointerId;
      return Xr.set(o, xr(Xr.get(o) || null, e, t, n, r, i)), !0;
    case "gotpointercapture":
      return o = i.pointerId, Gr.set(o, xr(Gr.get(o) || null, e, t, n, r, i)), !0;
  }
  return !1;
}
function id(e) {
  var t = wn(e.target);
  if (t !== null) {
    var n = jn(t);
    if (n !== null) {
      if (t = n.tag, t === 13) {
        if (t = Yc(n), t !== null) {
          e.blockedOn = t, rd(e.priority, function() {
            td(n);
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
    var n = cl(e.domEventName, e.eventSystemFlags, t[0], e.nativeEvent);
    if (n === null) {
      n = e.nativeEvent;
      var r = new n.constructor(n.type, n);
      il = r, n.target.dispatchEvent(r), il = null;
    } else
      return t = Ti(n), t !== null && sa(t), e.blockedOn = n, !1;
    t.shift();
  }
  return !0;
}
function lu(e, t, n) {
  Ki(e) && n.delete(t);
}
function bp() {
  ul = !1, qt !== null && Ki(qt) && (qt = null), Jt !== null && Ki(Jt) && (Jt = null), bt !== null && Ki(bt) && (bt = null), Xr.forEach(lu), Gr.forEach(lu);
}
function Er(e, t) {
  e.blockedOn === t && (e.blockedOn = null, ul || (ul = !0, Ze.unstable_scheduleCallback(Ze.unstable_NormalPriority, bp)));
}
function Kr(e) {
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
  for (qt !== null && Er(qt, e), Jt !== null && Er(Jt, e), bt !== null && Er(bt, e), Xr.forEach(t), Gr.forEach(t), n = 0; n < Ht.length; n++)
    r = Ht[n], r.blockedOn === e && (r.blockedOn = null);
  for (; 0 < Ht.length && (n = Ht[0], n.blockedOn === null); )
    id(n), n.blockedOn === null && Ht.shift();
}
var rr = Vt.ReactCurrentBatchConfig, po = !0;
function eh(e, t, n, r) {
  var i = B, o = rr.transition;
  rr.transition = null;
  try {
    B = 1, la(e, t, n, r);
  } finally {
    B = i, rr.transition = o;
  }
}
function th(e, t, n, r) {
  var i = B, o = rr.transition;
  rr.transition = null;
  try {
    B = 4, la(e, t, n, r);
  } finally {
    B = i, rr.transition = o;
  }
}
function la(e, t, n, r) {
  if (po) {
    var i = cl(e, t, n, r);
    if (i === null)
      Ts(e, t, r, ho, n), su(e, r);
    else if (Jp(i, e, t, n, r))
      r.stopPropagation();
    else if (su(e, r), t & 4 && -1 < qp.indexOf(e)) {
      for (; i !== null; ) {
        var o = Ti(i);
        if (o !== null && ed(o), o = cl(e, t, n, r), o === null && Ts(e, t, r, ho, n), o === i)
          break;
        i = o;
      }
      i !== null && r.stopPropagation();
    } else
      Ts(e, t, r, null, n);
  }
}
var ho = null;
function cl(e, t, n, r) {
  if (ho = null, e = ra(r), e = wn(e), e !== null)
    if (t = jn(e), t === null)
      e = null;
    else if (n = t.tag, n === 13) {
      if (e = Yc(t), e !== null)
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
function od(e) {
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
      switch (Up()) {
        case ia:
          return 1;
        case Kc:
          return 4;
        case co:
        case Zp:
          return 16;
        case qc:
          return 536870912;
        default:
          return 16;
      }
    default:
      return 16;
  }
}
var Xt = null, aa = null, qi = null;
function sd() {
  if (qi)
    return qi;
  var e, t = aa, n = t.length, r, i = "value" in Xt ? Xt.value : Xt.textContent, o = i.length;
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
function au() {
  return !1;
}
function He(e) {
  function t(n, r, i, o, s) {
    this._reactName = n, this._targetInst = i, this.type = r, this.nativeEvent = o, this.target = s, this.currentTarget = null;
    for (var l in e)
      e.hasOwnProperty(l) && (n = e[l], this[l] = n ? n(o) : o[l]);
    return this.isDefaultPrevented = (o.defaultPrevented != null ? o.defaultPrevented : o.returnValue === !1) ? zi : au, this.isPropagationStopped = au, this;
  }
  return ie(t.prototype, { preventDefault: function() {
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
}, defaultPrevented: 0, isTrusted: 0 }, ua = He(gr), Ci = ie({}, gr, { view: 0, detail: 0 }), nh = He(Ci), ys, gs, Cr, Ho = ie({}, Ci, { screenX: 0, screenY: 0, clientX: 0, clientY: 0, pageX: 0, pageY: 0, ctrlKey: 0, shiftKey: 0, altKey: 0, metaKey: 0, getModifierState: ca, button: 0, buttons: 0, relatedTarget: function(e) {
  return e.relatedTarget === void 0 ? e.fromElement === e.srcElement ? e.toElement : e.fromElement : e.relatedTarget;
}, movementX: function(e) {
  return "movementX" in e ? e.movementX : (e !== Cr && (Cr && e.type === "mousemove" ? (ys = e.screenX - Cr.screenX, gs = e.screenY - Cr.screenY) : gs = ys = 0, Cr = e), ys);
}, movementY: function(e) {
  return "movementY" in e ? e.movementY : gs;
} }), uu = He(Ho), rh = ie({}, Ho, { dataTransfer: 0 }), ih = He(rh), oh = ie({}, Ci, { relatedTarget: 0 }), ws = He(oh), sh = ie({}, gr, { animationName: 0, elapsedTime: 0, pseudoElement: 0 }), lh = He(sh), ah = ie({}, gr, { clipboardData: function(e) {
  return "clipboardData" in e ? e.clipboardData : window.clipboardData;
} }), uh = He(ah), ch = ie({}, gr, { data: 0 }), cu = He(ch), dh = {
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
}, fh = {
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
}, ph = { Alt: "altKey", Control: "ctrlKey", Meta: "metaKey", Shift: "shiftKey" };
function hh(e) {
  var t = this.nativeEvent;
  return t.getModifierState ? t.getModifierState(e) : (e = ph[e]) ? !!t[e] : !1;
}
function ca() {
  return hh;
}
var mh = ie({}, Ci, { key: function(e) {
  if (e.key) {
    var t = dh[e.key] || e.key;
    if (t !== "Unidentified")
      return t;
  }
  return e.type === "keypress" ? (e = Ji(e), e === 13 ? "Enter" : String.fromCharCode(e)) : e.type === "keydown" || e.type === "keyup" ? fh[e.keyCode] || "Unidentified" : "";
}, code: 0, location: 0, ctrlKey: 0, shiftKey: 0, altKey: 0, metaKey: 0, repeat: 0, locale: 0, getModifierState: ca, charCode: function(e) {
  return e.type === "keypress" ? Ji(e) : 0;
}, keyCode: function(e) {
  return e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0;
}, which: function(e) {
  return e.type === "keypress" ? Ji(e) : e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0;
} }), vh = He(mh), yh = ie({}, Ho, { pointerId: 0, width: 0, height: 0, pressure: 0, tangentialPressure: 0, tiltX: 0, tiltY: 0, twist: 0, pointerType: 0, isPrimary: 0 }), du = He(yh), gh = ie({}, Ci, { touches: 0, targetTouches: 0, changedTouches: 0, altKey: 0, metaKey: 0, ctrlKey: 0, shiftKey: 0, getModifierState: ca }), wh = He(gh), _h = ie({}, gr, { propertyName: 0, elapsedTime: 0, pseudoElement: 0 }), kh = He(_h), Sh = ie({}, Ho, {
  deltaX: function(e) {
    return "deltaX" in e ? e.deltaX : "wheelDeltaX" in e ? -e.wheelDeltaX : 0;
  },
  deltaY: function(e) {
    return "deltaY" in e ? e.deltaY : "wheelDeltaY" in e ? -e.wheelDeltaY : "wheelDelta" in e ? -e.wheelDelta : 0;
  },
  deltaZ: 0,
  deltaMode: 0
}), xh = He(Sh), Eh = [9, 13, 27, 32], da = It && "CompositionEvent" in window, Fr = null;
It && "documentMode" in document && (Fr = document.documentMode);
var Ch = It && "TextEvent" in window && !Fr, ld = It && (!da || Fr && 8 < Fr && 11 >= Fr), fu = " ", pu = !1;
function ad(e, t) {
  switch (e) {
    case "keyup":
      return Eh.indexOf(t.keyCode) !== -1;
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
function ud(e) {
  return e = e.detail, typeof e == "object" && "data" in e ? e.data : null;
}
var Bn = !1;
function Th(e, t) {
  switch (e) {
    case "compositionend":
      return ud(t);
    case "keypress":
      return t.which !== 32 ? null : (pu = !0, fu);
    case "textInput":
      return e = t.data, e === fu && pu ? null : e;
    default:
      return null;
  }
}
function Nh(e, t) {
  if (Bn)
    return e === "compositionend" || !da && ad(e, t) ? (e = sd(), qi = aa = Xt = null, Bn = !1, e) : null;
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
var Oh = { color: !0, date: !0, datetime: !0, "datetime-local": !0, email: !0, month: !0, number: !0, password: !0, range: !0, search: !0, tel: !0, text: !0, time: !0, url: !0, week: !0 };
function hu(e) {
  var t = e && e.nodeName && e.nodeName.toLowerCase();
  return t === "input" ? !!Oh[e.type] : t === "textarea";
}
function cd(e, t, n, r) {
  $c(r), t = mo(t, "onChange"), 0 < t.length && (n = new ua("onChange", "change", null, n, r), e.push({ event: n, listeners: t }));
}
var Vr = null, qr = null;
function Ph(e) {
  kd(e, 0);
}
function Yo(e) {
  var t = Qn(e);
  if (Ic(t))
    return e;
}
function Lh(e, t) {
  if (e === "change")
    return t;
}
var dd = !1;
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
  dd = _s && (!document.documentMode || 9 < document.documentMode);
}
function vu() {
  Vr && (Vr.detachEvent("onpropertychange", fd), qr = Vr = null);
}
function fd(e) {
  if (e.propertyName === "value" && Yo(qr)) {
    var t = [];
    cd(t, qr, e, ra(e)), Hc(Ph, t);
  }
}
function Rh(e, t, n) {
  e === "focusin" ? (vu(), Vr = t, qr = n, Vr.attachEvent("onpropertychange", fd)) : e === "focusout" && vu();
}
function Dh(e) {
  if (e === "selectionchange" || e === "keyup" || e === "keydown")
    return Yo(qr);
}
function Mh(e, t) {
  if (e === "click")
    return Yo(t);
}
function Ih(e, t) {
  if (e === "input" || e === "change")
    return Yo(t);
}
function jh(e, t) {
  return e === t && (e !== 0 || 1 / e === 1 / t) || e !== e && t !== t;
}
var at = typeof Object.is == "function" ? Object.is : jh;
function Jr(e, t) {
  if (at(e, t))
    return !0;
  if (typeof e != "object" || e === null || typeof t != "object" || t === null)
    return !1;
  var n = Object.keys(e), r = Object.keys(t);
  if (n.length !== r.length)
    return !1;
  for (r = 0; r < n.length; r++) {
    var i = n[r];
    if (!Ys.call(t, i) || !at(e[i], t[i]))
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
function pd(e, t) {
  return e && t ? e === t ? !0 : e && e.nodeType === 3 ? !1 : t && t.nodeType === 3 ? pd(e, t.parentNode) : "contains" in e ? e.contains(t) : e.compareDocumentPosition ? !!(e.compareDocumentPosition(t) & 16) : !1 : !1;
}
function hd() {
  for (var e = window, t = lo(); t instanceof e.HTMLIFrameElement; ) {
    try {
      var n = typeof t.contentWindow.location.href == "string";
    } catch {
      n = !1;
    }
    if (n)
      e = t.contentWindow;
    else
      break;
    t = lo(e.document);
  }
  return t;
}
function fa(e) {
  var t = e && e.nodeName && e.nodeName.toLowerCase();
  return t && (t === "input" && (e.type === "text" || e.type === "search" || e.type === "tel" || e.type === "url" || e.type === "password") || t === "textarea" || e.contentEditable === "true");
}
function zh(e) {
  var t = hd(), n = e.focusedElem, r = e.selectionRange;
  if (t !== n && n && n.ownerDocument && pd(n.ownerDocument.documentElement, n)) {
    if (r !== null && fa(n)) {
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
var Ah = It && "documentMode" in document && 11 >= document.documentMode, Hn = null, dl = null, Wr = null, fl = !1;
function wu(e, t, n) {
  var r = n.window === n ? n.document : n.nodeType === 9 ? n : n.ownerDocument;
  fl || Hn == null || Hn !== lo(r) || (r = Hn, "selectionStart" in r && fa(r) ? r = { start: r.selectionStart, end: r.selectionEnd } : (r = (r.ownerDocument && r.ownerDocument.defaultView || window).getSelection(), r = { anchorNode: r.anchorNode, anchorOffset: r.anchorOffset, focusNode: r.focusNode, focusOffset: r.focusOffset }), Wr && Jr(Wr, r) || (Wr = r, r = mo(dl, "onSelect"), 0 < r.length && (t = new ua("onSelect", "select", null, t, n), e.push({ event: t, listeners: r }), t.target = Hn)));
}
function Ai(e, t) {
  var n = {};
  return n[e.toLowerCase()] = t.toLowerCase(), n["Webkit" + e] = "webkit" + t, n["Moz" + e] = "moz" + t, n;
}
var Yn = { animationend: Ai("Animation", "AnimationEnd"), animationiteration: Ai("Animation", "AnimationIteration"), animationstart: Ai("Animation", "AnimationStart"), transitionend: Ai("Transition", "TransitionEnd") }, Ss = {}, md = {};
It && (md = document.createElement("div").style, "AnimationEvent" in window || (delete Yn.animationend.animation, delete Yn.animationiteration.animation, delete Yn.animationstart.animation), "TransitionEvent" in window || delete Yn.transitionend.transition);
function Qo(e) {
  if (Ss[e])
    return Ss[e];
  if (!Yn[e])
    return e;
  var t = Yn[e], n;
  for (n in t)
    if (t.hasOwnProperty(n) && n in md)
      return Ss[e] = t[n];
  return e;
}
var vd = Qo("animationend"), yd = Qo("animationiteration"), gd = Qo("animationstart"), wd = Qo("transitionend"), _d = /* @__PURE__ */ new Map(), _u = "abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");
function fn(e, t) {
  _d.set(e, t), In(t, [e]);
}
for (var xs = 0; xs < _u.length; xs++) {
  var Es = _u[xs], Fh = Es.toLowerCase(), Vh = Es[0].toUpperCase() + Es.slice(1);
  fn(Fh, "on" + Vh);
}
fn(vd, "onAnimationEnd");
fn(yd, "onAnimationIteration");
fn(gd, "onAnimationStart");
fn("dblclick", "onDoubleClick");
fn("focusin", "onFocus");
fn("focusout", "onBlur");
fn(wd, "onTransitionEnd");
lr("onMouseEnter", ["mouseout", "mouseover"]);
lr("onMouseLeave", ["mouseout", "mouseover"]);
lr("onPointerEnter", ["pointerout", "pointerover"]);
lr("onPointerLeave", ["pointerout", "pointerover"]);
In("onChange", "change click focusin focusout input keydown keyup selectionchange".split(" "));
In("onSelect", "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));
In("onBeforeInput", ["compositionend", "keypress", "textInput", "paste"]);
In("onCompositionEnd", "compositionend focusout keydown keypress keyup mousedown".split(" "));
In("onCompositionStart", "compositionstart focusout keydown keypress keyup mousedown".split(" "));
In("onCompositionUpdate", "compositionupdate focusout keydown keypress keyup mousedown".split(" "));
var jr = "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "), Wh = new Set("cancel close invalid load scroll toggle".split(" ").concat(jr));
function ku(e, t, n) {
  var r = e.type || "unknown-event";
  e.currentTarget = n, Fp(r, t, void 0, e), e.currentTarget = null;
}
function kd(e, t) {
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
          ku(i, l, u), o = a;
        }
      else
        for (s = 0; s < r.length; s++) {
          if (l = r[s], a = l.instance, u = l.currentTarget, l = l.listener, a !== o && i.isPropagationStopped())
            break e;
          ku(i, l, u), o = a;
        }
    }
  }
  if (uo)
    throw e = ll, uo = !1, ll = null, e;
}
function J(e, t) {
  var n = t[yl];
  n === void 0 && (n = t[yl] = /* @__PURE__ */ new Set());
  var r = e + "__bubble";
  n.has(r) || (Sd(t, e, 2, !1), n.add(r));
}
function Cs(e, t, n) {
  var r = 0;
  t && (r |= 4), Sd(n, e, r, t);
}
var Fi = "_reactListening" + Math.random().toString(36).slice(2);
function br(e) {
  if (!e[Fi]) {
    e[Fi] = !0, Pc.forEach(function(n) {
      n !== "selectionchange" && (Wh.has(n) || Cs(n, !1, e), Cs(n, !0, e));
    });
    var t = e.nodeType === 9 ? e : e.ownerDocument;
    t === null || t[Fi] || (t[Fi] = !0, Cs("selectionchange", !1, t));
  }
}
function Sd(e, t, n, r) {
  switch (od(t)) {
    case 1:
      var i = eh;
      break;
    case 4:
      i = th;
      break;
    default:
      i = la;
  }
  n = i.bind(null, t, n, e), i = void 0, !sl || t !== "touchstart" && t !== "touchmove" && t !== "wheel" || (i = !0), r ? i !== void 0 ? e.addEventListener(t, n, { capture: !0, passive: i }) : e.addEventListener(t, n, !0) : i !== void 0 ? e.addEventListener(t, n, { passive: i }) : e.addEventListener(t, n, !1);
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
            if (s = wn(l), s === null)
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
  Hc(function() {
    var u = o, p = ra(n), h = [];
    e: {
      var m = _d.get(e);
      if (m !== void 0) {
        var y = ua, w = e;
        switch (e) {
          case "keypress":
            if (Ji(n) === 0)
              break e;
          case "keydown":
          case "keyup":
            y = vh;
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
            y = ih;
            break;
          case "touchcancel":
          case "touchend":
          case "touchmove":
          case "touchstart":
            y = wh;
            break;
          case vd:
          case yd:
          case gd:
            y = lh;
            break;
          case wd:
            y = kh;
            break;
          case "scroll":
            y = nh;
            break;
          case "wheel":
            y = xh;
            break;
          case "copy":
          case "cut":
          case "paste":
            y = uh;
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
        if (m = e === "mouseover" || e === "pointerover", y = e === "mouseout" || e === "pointerout", m && n !== il && (w = n.relatedTarget || n.fromElement) && (wn(w) || w[jt]))
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
          var x = Lh;
        else if (hu(m))
          if (dd)
            x = Ih;
          else {
            x = Dh;
            var S = Rh;
          }
        else
          (y = m.nodeName) && y.toLowerCase() === "input" && (m.type === "checkbox" || m.type === "radio") && (x = Mh);
        if (x && (x = x(e, u))) {
          cd(h, x, n, p);
          break e;
        }
        S && S(e, m, u), e === "focusout" && (S = m._wrapperState) && S.controlled && m.type === "number" && bs(m, "number", m.value);
      }
      switch (S = u ? Qn(u) : window, e) {
        case "focusin":
          (hu(S) || S.contentEditable === "true") && (Hn = S, dl = u, Wr = null);
          break;
        case "focusout":
          Wr = dl = Hn = null;
          break;
        case "mousedown":
          fl = !0;
          break;
        case "contextmenu":
        case "mouseup":
        case "dragend":
          fl = !1, wu(h, n, p);
          break;
        case "selectionchange":
          if (Ah)
            break;
        case "keydown":
        case "keyup":
          wu(h, n, p);
      }
      var C;
      if (da)
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
        Bn ? ad(e, n) && (E = "onCompositionEnd") : e === "keydown" && n.keyCode === 229 && (E = "onCompositionStart");
      E && (ld && n.locale !== "ko" && (Bn || E !== "onCompositionStart" ? E === "onCompositionEnd" && Bn && (C = sd()) : (Xt = p, aa = "value" in Xt ? Xt.value : Xt.textContent, Bn = !0)), S = mo(u, E), 0 < S.length && (E = new cu(E, e, null, n, p), h.push({ event: E, listeners: S }), C ? E.data = C : (C = ud(n), C !== null && (E.data = C)))), (C = Ch ? Th(e, n) : Nh(e, n)) && (u = mo(u, "onBeforeInput"), 0 < u.length && (p = new cu("onBeforeInput", "beforeinput", null, n, p), h.push({ event: p, listeners: u }), p.data = C));
    }
    kd(h, t);
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
    var l = n, a = l.alternate, u = l.stateNode;
    if (a !== null && a === r)
      break;
    l.tag === 5 && u !== null && (l = u, i ? (a = Qr(n, o), a != null && s.unshift(ei(n, a, l))) : i || (a = Qr(n, o), a != null && s.push(ei(n, a, l)))), n = n.return;
  }
  s.length !== 0 && e.push({ event: t, listeners: s });
}
var $h = /\r\n?/g, Uh = /\u0000|\uFFFD/g;
function xu(e) {
  return (typeof e == "string" ? e : "" + e).replace($h, `
`).replace(Uh, "");
}
function Vi(e, t, n) {
  if (t = xu(t), xu(e) !== t && n)
    throw Error(g(425));
}
function vo() {
}
var pl = null, hl = null;
function ml(e, t) {
  return e === "textarea" || e === "noscript" || typeof t.children == "string" || typeof t.children == "number" || typeof t.dangerouslySetInnerHTML == "object" && t.dangerouslySetInnerHTML !== null && t.dangerouslySetInnerHTML.__html != null;
}
var vl = typeof setTimeout == "function" ? setTimeout : void 0, Zh = typeof clearTimeout == "function" ? clearTimeout : void 0, Eu = typeof Promise == "function" ? Promise : void 0, Bh = typeof queueMicrotask == "function" ? queueMicrotask : typeof Eu < "u" ? function(e) {
  return Eu.resolve(null).then(e).catch(Hh);
} : vl;
function Hh(e) {
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
var wr = Math.random().toString(36).slice(2), vt = "__reactFiber$" + wr, ti = "__reactProps$" + wr, jt = "__reactContainer$" + wr, yl = "__reactEvents$" + wr, Yh = "__reactListeners$" + wr, Qh = "__reactHandles$" + wr;
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
function Xo(e) {
  return e[ti] || null;
}
var gl = [], Xn = -1;
function pn(e) {
  return { current: e };
}
function b(e) {
  0 > Xn || (e.current = gl[Xn], gl[Xn] = null, Xn--);
}
function X(e, t) {
  Xn++, gl[Xn] = e.current, e.current = t;
}
var ln = {}, Ce = pn(ln), ze = pn(!1), Cn = ln;
function ar(e, t) {
  var n = e.type.contextTypes;
  if (!n)
    return ln;
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
  if (Ce.current !== ln)
    throw Error(g(168));
  X(Ce, t), X(ze, n);
}
function xd(e, t, n) {
  var r = e.stateNode;
  if (t = t.childContextTypes, typeof r.getChildContext != "function")
    return n;
  r = r.getChildContext();
  for (var i in r)
    if (!(i in t))
      throw Error(g(108, Rp(e) || "Unknown", i));
  return ie({}, n, r);
}
function go(e) {
  return e = (e = e.stateNode) && e.__reactInternalMemoizedMergedChildContext || ln, Cn = Ce.current, X(Ce, e), X(ze, ze.current), !0;
}
function Nu(e, t, n) {
  var r = e.stateNode;
  if (!r)
    throw Error(g(169));
  n ? (e = xd(e, t, Cn), r.__reactInternalMemoizedMergedChildContext = e, b(ze), b(Ce), X(Ce, e)) : b(ze), X(ze, n);
}
var Nt = null, Go = !1, Os = !1;
function Ed(e) {
  Nt === null ? Nt = [e] : Nt.push(e);
}
function Xh(e) {
  Go = !0, Ed(e);
}
function hn() {
  if (!Os && Nt !== null) {
    Os = !0;
    var e = 0, t = B;
    try {
      var n = Nt;
      for (B = 1; e < n.length; e++) {
        var r = n[e];
        do
          r = r(!0);
        while (r !== null);
      }
      Nt = null, Go = !1;
    } catch (i) {
      throw Nt !== null && (Nt = Nt.slice(e + 1)), Gc(ia, hn), i;
    } finally {
      B = t, Os = !1;
    }
  }
  return null;
}
var Gn = [], Kn = 0, wo = null, _o = 0, Qe = [], Xe = 0, Tn = null, Pt = 1, Lt = "";
function vn(e, t) {
  Gn[Kn++] = _o, Gn[Kn++] = wo, wo = e, _o = t;
}
function Cd(e, t, n) {
  Qe[Xe++] = Pt, Qe[Xe++] = Lt, Qe[Xe++] = Tn, Tn = e;
  var r = Pt;
  e = Lt;
  var i = 32 - it(r) - 1;
  r &= ~(1 << i), n += 1;
  var o = 32 - it(t) + i;
  if (30 < o) {
    var s = i - i % 5;
    o = (r & (1 << s) - 1).toString(32), r >>= s, i -= s, Pt = 1 << 32 - it(t) + i | n << i | r, Lt = o + e;
  } else
    Pt = 1 << o | n << i | r, Lt = e;
}
function pa(e) {
  e.return !== null && (vn(e, 1), Cd(e, 1, 0));
}
function ha(e) {
  for (; e === wo; )
    wo = Gn[--Kn], Gn[Kn] = null, _o = Gn[--Kn], Gn[Kn] = null;
  for (; e === Tn; )
    Tn = Qe[--Xe], Qe[Xe] = null, Lt = Qe[--Xe], Qe[Xe] = null, Pt = Qe[--Xe], Qe[Xe] = null;
}
var Ue = null, $e = null, ee = !1, nt = null;
function Td(e, t) {
  var n = Ge(5, null, null, 0);
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
      return t = t.nodeType !== 8 ? null : t, t !== null ? (n = Tn !== null ? { id: Pt, overflow: Lt } : null, e.memoizedState = { dehydrated: t, treeContext: n, retryLane: 1073741824 }, n = Ge(18, null, null, 0), n.stateNode = t, n.return = e, e.child = n, Ue = e, $e = null, !0) : !1;
    default:
      return !1;
  }
}
function wl(e) {
  return (e.mode & 1) !== 0 && (e.flags & 128) === 0;
}
function _l(e) {
  if (ee) {
    var t = $e;
    if (t) {
      var n = t;
      if (!Ou(e, t)) {
        if (wl(e))
          throw Error(g(418));
        t = en(n.nextSibling);
        var r = Ue;
        t && Ou(e, t) ? Td(r, n) : (e.flags = e.flags & -4097 | 2, ee = !1, Ue = e);
      }
    } else {
      if (wl(e))
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
  if ((t = e.tag !== 3) && !(t = e.tag !== 5) && (t = e.type, t = t !== "head" && t !== "body" && !ml(e.type, e.memoizedProps)), t && (t = $e)) {
    if (wl(e))
      throw Nd(), Error(g(418));
    for (; t; )
      Td(e, t), t = en(t.nextSibling);
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
function Nd() {
  for (var e = $e; e; )
    e = en(e.nextSibling);
}
function ur() {
  $e = Ue = null, ee = !1;
}
function ma(e) {
  nt === null ? nt = [e] : nt.push(e);
}
var Gh = Vt.ReactCurrentBatchConfig;
function et(e, t) {
  if (e && e.defaultProps) {
    t = ie({}, t), e = e.defaultProps;
    for (var n in e)
      t[n] === void 0 && (t[n] = e[n]);
    return t;
  }
  return t;
}
var ko = pn(null), So = null, qn = null, va = null;
function ya() {
  va = qn = So = null;
}
function ga(e) {
  var t = ko.current;
  b(ko), e._currentValue = t;
}
function kl(e, t, n) {
  for (; e !== null; ) {
    var r = e.alternate;
    if ((e.childLanes & t) !== t ? (e.childLanes |= t, r !== null && (r.childLanes |= t)) : r !== null && (r.childLanes & t) !== t && (r.childLanes |= t), e === n)
      break;
    e = e.return;
  }
}
function ir(e, t) {
  So = e, va = qn = null, e = e.dependencies, e !== null && e.firstContext !== null && (e.lanes & t && (je = !0), e.firstContext = null);
}
function qe(e) {
  var t = e._currentValue;
  if (va !== e)
    if (e = { context: e, memoizedValue: t, next: null }, qn === null) {
      if (So === null)
        throw Error(g(308));
      qn = e, So.dependencies = { lanes: 0, firstContext: e };
    } else
      qn = qn.next = e;
  return t;
}
var _n = null;
function wa(e) {
  _n === null ? _n = [e] : _n.push(e);
}
function Od(e, t, n, r) {
  var i = t.interleaved;
  return i === null ? (n.next = n, wa(t)) : (n.next = i.next, i.next = n), t.interleaved = n, zt(e, r);
}
function zt(e, t) {
  e.lanes |= t;
  var n = e.alternate;
  for (n !== null && (n.lanes |= t), n = e, e = e.return; e !== null; )
    e.childLanes |= t, n = e.alternate, n !== null && (n.childLanes |= t), n = e, e = e.return;
  return n.tag === 3 ? n.stateNode : null;
}
var Bt = !1;
function _a(e) {
  e.updateQueue = { baseState: e.memoizedState, firstBaseUpdate: null, lastBaseUpdate: null, shared: { pending: null, interleaved: null, lanes: 0 }, effects: null };
}
function Pd(e, t) {
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
  return i = r.interleaved, i === null ? (t.next = t, wa(r)) : (t.next = i.next, i.next = t), r.interleaved = t, zt(e, n);
}
function bi(e, t, n) {
  if (t = t.updateQueue, t !== null && (t = t.shared, (n & 4194240) !== 0)) {
    var r = t.lanes;
    r &= e.pendingLanes, n |= r, t.lanes = n, oa(e, n);
  }
}
function Lu(e, t) {
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
              Bt = !0;
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
    On |= s, e.lanes = s, e.memoizedState = h;
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
var Ld = new Oc.Component().refs;
function Sl(e, t, n, r) {
  t = e.memoizedState, n = n(r, t), n = n == null ? t : ie({}, t, n), e.memoizedState = n, e.lanes === 0 && (e.updateQueue.baseState = n);
}
var Ko = { isMounted: function(e) {
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
function Rd(e, t, n) {
  var r = !1, i = ln, o = t.contextType;
  return typeof o == "object" && o !== null ? o = qe(o) : (i = Ae(t) ? Cn : Ce.current, r = t.contextTypes, o = (r = r != null) ? ar(e, i) : ln), t = new t(n, o), e.memoizedState = t.state !== null && t.state !== void 0 ? t.state : null, t.updater = Ko, e.stateNode = t, t._reactInternals = e, r && (e = e.stateNode, e.__reactInternalMemoizedUnmaskedChildContext = i, e.__reactInternalMemoizedMaskedChildContext = o), t;
}
function Mu(e, t, n, r) {
  e = t.state, typeof t.componentWillReceiveProps == "function" && t.componentWillReceiveProps(n, r), typeof t.UNSAFE_componentWillReceiveProps == "function" && t.UNSAFE_componentWillReceiveProps(n, r), t.state !== e && Ko.enqueueReplaceState(t, t.state, null);
}
function xl(e, t, n, r) {
  var i = e.stateNode;
  i.props = n, i.state = e.memoizedState, i.refs = Ld, _a(e);
  var o = t.contextType;
  typeof o == "object" && o !== null ? i.context = qe(o) : (o = Ae(t) ? Cn : Ce.current, i.context = ar(e, o)), i.state = e.memoizedState, o = t.getDerivedStateFromProps, typeof o == "function" && (Sl(e, t, o, n), i.state = e.memoizedState), typeof t.getDerivedStateFromProps == "function" || typeof i.getSnapshotBeforeUpdate == "function" || typeof i.UNSAFE_componentWillMount != "function" && typeof i.componentWillMount != "function" || (t = i.state, typeof i.componentWillMount == "function" && i.componentWillMount(), typeof i.UNSAFE_componentWillMount == "function" && i.UNSAFE_componentWillMount(), t !== i.state && Ko.enqueueReplaceState(i, i.state, null), xo(e, n, i, r), i.state = e.memoizedState), typeof i.componentDidMount == "function" && (e.flags |= 4194308);
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
        var l = i.refs;
        l === Ld && (l = i.refs = {}), s === null ? delete l[o] : l[o] = s;
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
    return d = on(d, c), d.index = 0, d.sibling = null, d;
  }
  function o(d, c, f) {
    return d.index = f, e ? (f = d.alternate, f !== null ? (f = f.index, f < c ? (d.flags |= 2, c) : f) : (d.flags |= 2, c)) : (d.flags |= 1048576, c);
  }
  function s(d) {
    return e && d.alternate === null && (d.flags |= 2), d;
  }
  function l(d, c, f, v) {
    return c === null || c.tag !== 6 ? (c = js(f, d.mode, v), c.return = d, c) : (c = i(c, f), c.return = d, c);
  }
  function a(d, c, f, v) {
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
        case Li:
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
      return x !== null ? null : l(d, c, "" + f, v);
    if (typeof f == "object" && f !== null) {
      switch (f.$$typeof) {
        case Li:
          return f.key === x ? a(d, c, f, v) : null;
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
      return d = d.get(f) || null, l(c, d, "" + v, x);
    if (typeof v == "object" && v !== null) {
      switch (v.$$typeof) {
        case Li:
          return d = d.get(v.key === null ? f : v.key) || null, a(c, d, v, x);
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
    for (var x = null, S = null, C = c, E = c = 0, H = null; C !== null && E < f.length; E++) {
      C.index > E ? (H = C, C = null) : H = C.sibling;
      var D = m(d, C, f[E], v);
      if (D === null) {
        C === null && (C = H);
        break;
      }
      e && C && D.alternate === null && t(d, C), c = o(D, c, E), S === null ? x = D : S.sibling = D, S = D, C = H;
    }
    if (E === f.length)
      return n(d, C), ee && vn(d, E), x;
    if (C === null) {
      for (; E < f.length; E++)
        C = h(d, f[E], v), C !== null && (c = o(C, c, E), S === null ? x = C : S.sibling = C, S = C);
      return ee && vn(d, E), x;
    }
    for (C = r(d, C); E < f.length; E++)
      H = y(C, d, E, f[E], v), H !== null && (e && H.alternate !== null && C.delete(H.key === null ? E : H.key), c = o(H, c, E), S === null ? x = H : S.sibling = H, S = H);
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
    for (var S = x = null, C = c, E = c = 0, H = null, D = f.next(); C !== null && !D.done; E++, D = f.next()) {
      C.index > E ? (H = C, C = null) : H = C.sibling;
      var pe = m(d, C, D.value, v);
      if (pe === null) {
        C === null && (C = H);
        break;
      }
      e && C && pe.alternate === null && t(d, C), c = o(pe, c, E), S === null ? x = pe : S.sibling = pe, S = pe, C = H;
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
        case Li:
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
var cr = Dd(!0), Md = Dd(!1), Ni = {}, gt = pn(Ni), ni = pn(Ni), ri = pn(Ni);
function kn(e) {
  if (e === Ni)
    throw Error(g(174));
  return e;
}
function ka(e, t) {
  switch (X(ri, t), X(ni, e), X(gt, Ni), e = t.nodeType, e) {
    case 9:
    case 11:
      t = (t = t.documentElement) ? t.namespaceURI : tl(null, "");
      break;
    default:
      e = e === 8 ? t.parentNode : t, t = e.namespaceURI || null, e = e.tagName, t = tl(t, e);
  }
  b(gt), X(gt, t);
}
function dr() {
  b(gt), b(ni), b(ri);
}
function Id(e) {
  kn(ri.current);
  var t = kn(gt.current), n = tl(t, e.type);
  t !== n && (X(ni, e), X(gt, n));
}
function Sa(e) {
  ni.current === e && (b(gt), b(ni));
}
var ne = pn(0);
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
function xa() {
  for (var e = 0; e < Ps.length; e++)
    Ps[e]._workInProgressVersionPrimary = null;
  Ps.length = 0;
}
var eo = Vt.ReactCurrentDispatcher, Ls = Vt.ReactCurrentBatchConfig, Nn = 0, re = null, de = null, me = null, Co = !1, $r = !1, ii = 0, Kh = 0;
function Se() {
  throw Error(g(321));
}
function Ea(e, t) {
  if (t === null)
    return !1;
  for (var n = 0; n < t.length && n < e.length; n++)
    if (!at(e[n], t[n]))
      return !1;
  return !0;
}
function Ca(e, t, n, r, i, o) {
  if (Nn = o, re = t, t.memoizedState = null, t.updateQueue = null, t.lanes = 0, eo.current = e === null || e.memoizedState === null ? em : tm, e = n(r, i), $r) {
    o = 0;
    do {
      if ($r = !1, ii = 0, 25 <= o)
        throw Error(g(301));
      o += 1, me = de = null, t.updateQueue = null, eo.current = nm, e = n(r, i);
    } while ($r);
  }
  if (eo.current = To, t = de !== null && de.next !== null, Nn = 0, me = de = re = null, Co = !1, t)
    throw Error(g(300));
  return e;
}
function Ta() {
  var e = ii !== 0;
  return ii = 0, e;
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
function oi(e, t) {
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
      if ((Nn & p) === p)
        a !== null && (a = a.next = { lane: 0, action: u.action, hasEagerState: u.hasEagerState, eagerState: u.eagerState, next: null }), r = u.hasEagerState ? u.eagerState : e(r, u.action);
      else {
        var h = {
          lane: p,
          action: u.action,
          hasEagerState: u.hasEagerState,
          eagerState: u.eagerState,
          next: null
        };
        a === null ? (l = a = h, s = r) : a = a.next = h, re.lanes |= p, On |= p;
      }
      u = u.next;
    } while (u !== null && u !== o);
    a === null ? s = r : a.next = l, at(r, t.memoizedState) || (je = !0), t.memoizedState = r, t.baseState = s, t.baseQueue = a, n.lastRenderedState = r;
  }
  if (e = n.interleaved, e !== null) {
    i = e;
    do
      o = i.lane, re.lanes |= o, On |= o, i = i.next;
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
function jd() {
}
function zd(e, t) {
  var n = re, r = Je(), i = t(), o = !at(r.memoizedState, i);
  if (o && (r.memoizedState = i, je = !0), r = r.queue, Na(Vd.bind(null, n, r, e), [e]), r.getSnapshot !== t || o || me !== null && me.memoizedState.tag & 1) {
    if (n.flags |= 2048, si(9, Fd.bind(null, n, r, i, t), void 0, null), ve === null)
      throw Error(g(349));
    Nn & 30 || Ad(n, t, i);
  }
  return i;
}
function Ad(e, t, n) {
  e.flags |= 16384, e = { getSnapshot: t, value: n }, t = re.updateQueue, t === null ? (t = { lastEffect: null, stores: null }, re.updateQueue = t, t.stores = [e]) : (n = t.stores, n === null ? t.stores = [e] : n.push(e));
}
function Fd(e, t, n, r) {
  t.value = n, t.getSnapshot = r, Wd(t) && $d(e);
}
function Vd(e, t, n) {
  return n(function() {
    Wd(t) && $d(e);
  });
}
function Wd(e) {
  var t = e.getSnapshot;
  e = e.value;
  try {
    var n = t();
    return !at(e, n);
  } catch {
    return !0;
  }
}
function $d(e) {
  var t = zt(e, 1);
  t !== null && ot(t, e, 1, -1);
}
function ju(e) {
  var t = mt();
  return typeof e == "function" && (e = e()), t.memoizedState = t.baseState = e, e = { pending: null, interleaved: null, lanes: 0, dispatch: null, lastRenderedReducer: oi, lastRenderedState: e }, t.queue = e, e = e.dispatch = bh.bind(null, re, e), [t.memoizedState, e];
}
function si(e, t, n, r) {
  return e = { tag: e, create: t, destroy: n, deps: r, next: null }, t = re.updateQueue, t === null ? (t = { lastEffect: null, stores: null }, re.updateQueue = t, t.lastEffect = e.next = e) : (n = t.lastEffect, n === null ? t.lastEffect = e.next = e : (r = n.next, n.next = e, e.next = r, t.lastEffect = e)), e;
}
function Ud() {
  return Je().memoizedState;
}
function to(e, t, n, r) {
  var i = mt();
  re.flags |= e, i.memoizedState = si(1 | t, n, void 0, r === void 0 ? null : r);
}
function qo(e, t, n, r) {
  var i = Je();
  r = r === void 0 ? null : r;
  var o = void 0;
  if (de !== null) {
    var s = de.memoizedState;
    if (o = s.destroy, r !== null && Ea(r, s.deps)) {
      i.memoizedState = si(t, n, o, r);
      return;
    }
  }
  re.flags |= e, i.memoizedState = si(1 | t, n, o, r);
}
function zu(e, t) {
  return to(8390656, 8, e, t);
}
function Na(e, t) {
  return qo(2048, 8, e, t);
}
function Zd(e, t) {
  return qo(4, 2, e, t);
}
function Bd(e, t) {
  return qo(4, 4, e, t);
}
function Hd(e, t) {
  if (typeof t == "function")
    return e = e(), t(e), function() {
      t(null);
    };
  if (t != null)
    return e = e(), t.current = e, function() {
      t.current = null;
    };
}
function Yd(e, t, n) {
  return n = n != null ? n.concat([e]) : null, qo(4, 4, Hd.bind(null, t, e), n);
}
function Oa() {
}
function Qd(e, t) {
  var n = Je();
  t = t === void 0 ? null : t;
  var r = n.memoizedState;
  return r !== null && t !== null && Ea(t, r[1]) ? r[0] : (n.memoizedState = [e, t], e);
}
function Xd(e, t) {
  var n = Je();
  t = t === void 0 ? null : t;
  var r = n.memoizedState;
  return r !== null && t !== null && Ea(t, r[1]) ? r[0] : (e = e(), n.memoizedState = [e, t], e);
}
function Gd(e, t, n) {
  return Nn & 21 ? (at(n, t) || (n = Jc(), re.lanes |= n, On |= n, e.baseState = !0), t) : (e.baseState && (e.baseState = !1, je = !0), e.memoizedState = n);
}
function qh(e, t) {
  var n = B;
  B = n !== 0 && 4 > n ? n : 4, e(!0);
  var r = Ls.transition;
  Ls.transition = {};
  try {
    e(!1), t();
  } finally {
    B = n, Ls.transition = r;
  }
}
function Kd() {
  return Je().memoizedState;
}
function Jh(e, t, n) {
  var r = rn(e);
  if (n = { lane: r, action: n, hasEagerState: !1, eagerState: null, next: null }, qd(e))
    Jd(t, n);
  else if (n = Od(e, t, n, r), n !== null) {
    var i = Pe();
    ot(n, e, r, i), bd(n, t, r);
  }
}
function bh(e, t, n) {
  var r = rn(e), i = { lane: r, action: n, hasEagerState: !1, eagerState: null, next: null };
  if (qd(e))
    Jd(t, i);
  else {
    var o = e.alternate;
    if (e.lanes === 0 && (o === null || o.lanes === 0) && (o = t.lastRenderedReducer, o !== null))
      try {
        var s = t.lastRenderedState, l = o(s, n);
        if (i.hasEagerState = !0, i.eagerState = l, at(l, s)) {
          var a = t.interleaved;
          a === null ? (i.next = i, wa(t)) : (i.next = a.next, a.next = i), t.interleaved = i;
          return;
        }
      } catch {
      } finally {
      }
    n = Od(e, t, i, r), n !== null && (i = Pe(), ot(n, e, r, i), bd(n, t, r));
  }
}
function qd(e) {
  var t = e.alternate;
  return e === re || t !== null && t === re;
}
function Jd(e, t) {
  $r = Co = !0;
  var n = e.pending;
  n === null ? t.next = t : (t.next = n.next, n.next = t), e.pending = t;
}
function bd(e, t, n) {
  if (n & 4194240) {
    var r = t.lanes;
    r &= e.pendingLanes, n |= r, t.lanes = n, oa(e, n);
  }
}
var To = { readContext: qe, useCallback: Se, useContext: Se, useEffect: Se, useImperativeHandle: Se, useInsertionEffect: Se, useLayoutEffect: Se, useMemo: Se, useReducer: Se, useRef: Se, useState: Se, useDebugValue: Se, useDeferredValue: Se, useTransition: Se, useMutableSource: Se, useSyncExternalStore: Se, useId: Se, unstable_isNewReconciler: !1 }, em = { readContext: qe, useCallback: function(e, t) {
  return mt().memoizedState = [e, t === void 0 ? null : t], e;
}, useContext: qe, useEffect: zu, useImperativeHandle: function(e, t, n) {
  return n = n != null ? n.concat([e]) : null, to(
    4194308,
    4,
    Hd.bind(null, t, e),
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
  return t = n !== void 0 ? n(t) : t, r.memoizedState = r.baseState = t, e = { pending: null, interleaved: null, lanes: 0, dispatch: null, lastRenderedReducer: e, lastRenderedState: t }, r.queue = e, e = e.dispatch = Jh.bind(null, re, e), [r.memoizedState, e];
}, useRef: function(e) {
  var t = mt();
  return e = { current: e }, t.memoizedState = e;
}, useState: ju, useDebugValue: Oa, useDeferredValue: function(e) {
  return mt().memoizedState = e;
}, useTransition: function() {
  var e = ju(!1), t = e[0];
  return e = qh.bind(null, e[1]), mt().memoizedState = e, [t, e];
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
    Nn & 30 || Ad(r, t, n);
  }
  i.memoizedState = n;
  var o = { value: n, getSnapshot: t };
  return i.queue = o, zu(Vd.bind(
    null,
    r,
    o,
    e
  ), [e]), r.flags |= 2048, si(9, Fd.bind(null, r, o, n, t), void 0, null), n;
}, useId: function() {
  var e = mt(), t = ve.identifierPrefix;
  if (ee) {
    var n = Lt, r = Pt;
    n = (r & ~(1 << 32 - it(r) - 1)).toString(32) + n, t = ":" + t + "R" + n, n = ii++, 0 < n && (t += "H" + n.toString(32)), t += ":";
  } else
    n = Kh++, t = ":" + t + "r" + n.toString(32) + ":";
  return e.memoizedState = t;
}, unstable_isNewReconciler: !1 }, tm = {
  readContext: qe,
  useCallback: Qd,
  useContext: qe,
  useEffect: Na,
  useImperativeHandle: Yd,
  useInsertionEffect: Zd,
  useLayoutEffect: Bd,
  useMemo: Xd,
  useReducer: Rs,
  useRef: Ud,
  useState: function() {
    return Rs(oi);
  },
  useDebugValue: Oa,
  useDeferredValue: function(e) {
    var t = Je();
    return Gd(t, de.memoizedState, e);
  },
  useTransition: function() {
    var e = Rs(oi)[0], t = Je().memoizedState;
    return [e, t];
  },
  useMutableSource: jd,
  useSyncExternalStore: zd,
  useId: Kd,
  unstable_isNewReconciler: !1
}, nm = { readContext: qe, useCallback: Qd, useContext: qe, useEffect: Na, useImperativeHandle: Yd, useInsertionEffect: Zd, useLayoutEffect: Bd, useMemo: Xd, useReducer: Ds, useRef: Ud, useState: function() {
  return Ds(oi);
}, useDebugValue: Oa, useDeferredValue: function(e) {
  var t = Je();
  return de === null ? t.memoizedState = e : Gd(t, de.memoizedState, e);
}, useTransition: function() {
  var e = Ds(oi)[0], t = Je().memoizedState;
  return [e, t];
}, useMutableSource: jd, useSyncExternalStore: zd, useId: Kd, unstable_isNewReconciler: !1 };
function fr(e, t) {
  try {
    var n = "", r = t;
    do
      n += Lp(r), r = r.return;
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
function El(e, t) {
  try {
    console.error(t.value);
  } catch (n) {
    setTimeout(function() {
      throw n;
    });
  }
}
var rm = typeof WeakMap == "function" ? WeakMap : Map;
function ef(e, t, n) {
  n = Dt(-1, n), n.tag = 3, n.payload = { element: null };
  var r = t.value;
  return n.callback = function() {
    Oo || (Oo = !0, Il = r), El(e, t);
  }, n;
}
function tf(e, t, n) {
  n = Dt(-1, n), n.tag = 3;
  var r = e.type.getDerivedStateFromError;
  if (typeof r == "function") {
    var i = t.value;
    n.payload = function() {
      return r(i);
    }, n.callback = function() {
      El(e, t);
    };
  }
  var o = e.stateNode;
  return o !== null && typeof o.componentDidCatch == "function" && (n.callback = function() {
    El(e, t), typeof r != "function" && (nn === null ? nn = /* @__PURE__ */ new Set([this]) : nn.add(this));
    var s = t.stack;
    this.componentDidCatch(t.value, { componentStack: s !== null ? s : "" });
  }), n;
}
function Au(e, t, n) {
  var r = e.pingCache;
  if (r === null) {
    r = e.pingCache = new rm();
    var i = /* @__PURE__ */ new Set();
    r.set(t, i);
  } else
    i = r.get(t), i === void 0 && (i = /* @__PURE__ */ new Set(), r.set(t, i));
  i.has(n) || (i.add(n), e = ym.bind(null, e, t, n), t.then(e, e));
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
var im = Vt.ReactCurrentOwner, je = !1;
function Oe(e, t, n, r) {
  t.child = e === null ? Md(t, null, n, r) : cr(t, e.child, n, r);
}
function Wu(e, t, n, r, i) {
  n = n.render;
  var o = t.ref;
  return ir(t, i), r = Ca(e, t, n, r, o, i), n = Ta(), e !== null && !je ? (t.updateQueue = e.updateQueue, t.flags &= -2053, e.lanes &= ~i, At(e, t, i)) : (ee && n && pa(t), t.flags |= 1, Oe(e, t, r, i), t.child);
}
function $u(e, t, n, r, i) {
  if (e === null) {
    var o = n.type;
    return typeof o == "function" && !za(o) && o.defaultProps === void 0 && n.compare === null && n.defaultProps === void 0 ? (t.tag = 15, t.type = o, nf(e, t, o, r, i)) : (e = oo(n.type, null, r, t, t.mode, i), e.ref = t.ref, e.return = t, t.child = e);
  }
  if (o = e.child, !(e.lanes & i)) {
    var s = o.memoizedProps;
    if (n = n.compare, n = n !== null ? n : Jr, n(s, r) && e.ref === t.ref)
      return At(e, t, i);
  }
  return t.flags |= 1, e = on(o, r), e.ref = t.ref, e.return = t, t.child = e;
}
function nf(e, t, n, r, i) {
  if (e !== null) {
    var o = e.memoizedProps;
    if (Jr(o, r) && e.ref === t.ref)
      if (je = !1, t.pendingProps = r = o, (e.lanes & i) !== 0)
        e.flags & 131072 && (je = !0);
      else
        return t.lanes = e.lanes, At(e, t, i);
  }
  return Cl(e, t, n, r, i);
}
function rf(e, t, n) {
  var r = t.pendingProps, i = r.children, o = e !== null ? e.memoizedState : null;
  if (r.mode === "hidden")
    if (!(t.mode & 1))
      t.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }, X(bn, We), We |= n;
    else {
      if (!(n & 1073741824))
        return e = o !== null ? o.baseLanes | n : n, t.lanes = t.childLanes = 1073741824, t.memoizedState = { baseLanes: e, cachePool: null, transitions: null }, t.updateQueue = null, X(bn, We), We |= e, null;
      t.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }, r = o !== null ? o.baseLanes : n, X(bn, We), We |= r;
    }
  else
    o !== null ? (r = o.baseLanes | n, t.memoizedState = null) : r = n, X(bn, We), We |= r;
  return Oe(e, t, i, n), t.child;
}
function of(e, t) {
  var n = t.ref;
  (e === null && n !== null || e !== null && e.ref !== n) && (t.flags |= 512, t.flags |= 2097152);
}
function Cl(e, t, n, r, i) {
  var o = Ae(n) ? Cn : Ce.current;
  return o = ar(t, o), ir(t, i), n = Ca(e, t, n, r, o, i), r = Ta(), e !== null && !je ? (t.updateQueue = e.updateQueue, t.flags &= -2053, e.lanes &= ~i, At(e, t, i)) : (ee && r && pa(t), t.flags |= 1, Oe(e, t, n, i), t.child);
}
function Uu(e, t, n, r, i) {
  if (Ae(n)) {
    var o = !0;
    go(t);
  } else
    o = !1;
  if (ir(t, i), t.stateNode === null)
    no(e, t), Rd(t, n, r), xl(t, n, r, i), r = !0;
  else if (e === null) {
    var s = t.stateNode, l = t.memoizedProps;
    s.props = l;
    var a = s.context, u = n.contextType;
    typeof u == "object" && u !== null ? u = qe(u) : (u = Ae(n) ? Cn : Ce.current, u = ar(t, u));
    var p = n.getDerivedStateFromProps, h = typeof p == "function" || typeof s.getSnapshotBeforeUpdate == "function";
    h || typeof s.UNSAFE_componentWillReceiveProps != "function" && typeof s.componentWillReceiveProps != "function" || (l !== r || a !== u) && Mu(t, s, r, u), Bt = !1;
    var m = t.memoizedState;
    s.state = m, xo(t, r, s, i), a = t.memoizedState, l !== r || m !== a || ze.current || Bt ? (typeof p == "function" && (Sl(t, n, p, r), a = t.memoizedState), (l = Bt || Du(t, n, l, r, m, a, u)) ? (h || typeof s.UNSAFE_componentWillMount != "function" && typeof s.componentWillMount != "function" || (typeof s.componentWillMount == "function" && s.componentWillMount(), typeof s.UNSAFE_componentWillMount == "function" && s.UNSAFE_componentWillMount()), typeof s.componentDidMount == "function" && (t.flags |= 4194308)) : (typeof s.componentDidMount == "function" && (t.flags |= 4194308), t.memoizedProps = r, t.memoizedState = a), s.props = r, s.state = a, s.context = u, r = l) : (typeof s.componentDidMount == "function" && (t.flags |= 4194308), r = !1);
  } else {
    s = t.stateNode, Pd(e, t), l = t.memoizedProps, u = t.type === t.elementType ? l : et(t.type, l), s.props = u, h = t.pendingProps, m = s.context, a = n.contextType, typeof a == "object" && a !== null ? a = qe(a) : (a = Ae(n) ? Cn : Ce.current, a = ar(t, a));
    var y = n.getDerivedStateFromProps;
    (p = typeof y == "function" || typeof s.getSnapshotBeforeUpdate == "function") || typeof s.UNSAFE_componentWillReceiveProps != "function" && typeof s.componentWillReceiveProps != "function" || (l !== h || m !== a) && Mu(t, s, r, a), Bt = !1, m = t.memoizedState, s.state = m, xo(t, r, s, i);
    var w = t.memoizedState;
    l !== h || m !== w || ze.current || Bt ? (typeof y == "function" && (Sl(t, n, y, r), w = t.memoizedState), (u = Bt || Du(t, n, u, r, m, w, a) || !1) ? (p || typeof s.UNSAFE_componentWillUpdate != "function" && typeof s.componentWillUpdate != "function" || (typeof s.componentWillUpdate == "function" && s.componentWillUpdate(r, w, a), typeof s.UNSAFE_componentWillUpdate == "function" && s.UNSAFE_componentWillUpdate(r, w, a)), typeof s.componentDidUpdate == "function" && (t.flags |= 4), typeof s.getSnapshotBeforeUpdate == "function" && (t.flags |= 1024)) : (typeof s.componentDidUpdate != "function" || l === e.memoizedProps && m === e.memoizedState || (t.flags |= 4), typeof s.getSnapshotBeforeUpdate != "function" || l === e.memoizedProps && m === e.memoizedState || (t.flags |= 1024), t.memoizedProps = r, t.memoizedState = w), s.props = r, s.state = w, s.context = a, r = u) : (typeof s.componentDidUpdate != "function" || l === e.memoizedProps && m === e.memoizedState || (t.flags |= 4), typeof s.getSnapshotBeforeUpdate != "function" || l === e.memoizedProps && m === e.memoizedState || (t.flags |= 1024), r = !1);
  }
  return Tl(e, t, n, r, o, i);
}
function Tl(e, t, n, r, i, o) {
  of(e, t);
  var s = (t.flags & 128) !== 0;
  if (!r && !s)
    return i && Nu(t, n, !1), At(e, t, o);
  r = t.stateNode, im.current = t;
  var l = s && typeof n.getDerivedStateFromError != "function" ? null : r.render();
  return t.flags |= 1, e !== null && s ? (t.child = cr(t, e.child, null, o), t.child = cr(t, null, l, o)) : Oe(e, t, l, o), t.memoizedState = r.state, i && Nu(t, n, !0), t.child;
}
function sf(e) {
  var t = e.stateNode;
  t.pendingContext ? Tu(e, t.pendingContext, t.pendingContext !== t.context) : t.context && Tu(e, t.context, !1), ka(e, t.containerInfo);
}
function Zu(e, t, n, r, i) {
  return ur(), ma(i), t.flags |= 256, Oe(e, t, n, r), t.child;
}
var Nl = { dehydrated: null, treeContext: null, retryLane: 0 };
function Ol(e) {
  return { baseLanes: e, cachePool: null, transitions: null };
}
function lf(e, t, n) {
  var r = t.pendingProps, i = ne.current, o = !1, s = (t.flags & 128) !== 0, l;
  if ((l = s) || (l = e !== null && e.memoizedState === null ? !1 : (i & 2) !== 0), l ? (o = !0, t.flags &= -129) : (e === null || e.memoizedState !== null) && (i |= 1), X(ne, i & 1), e === null)
    return _l(t), e = t.memoizedState, e !== null && (e = e.dehydrated, e !== null) ? (t.mode & 1 ? e.data === "$!" ? t.lanes = 8 : t.lanes = 1073741824 : t.lanes = 1, null) : (s = r.children, e = r.fallback, o ? (r = t.mode, o = t.child, s = { mode: "hidden", children: s }, !(r & 1) && o !== null ? (o.childLanes = 0, o.pendingProps = s) : o = es(s, r, 0, null), e = xn(e, r, n, null), o.return = t, e.return = t, o.sibling = e, t.child = o, t.child.memoizedState = Ol(n), t.memoizedState = Nl, e) : Pa(t, s));
  if (i = e.memoizedState, i !== null && (l = i.dehydrated, l !== null))
    return om(e, t, s, r, l, i, n);
  if (o) {
    o = r.fallback, s = t.mode, i = e.child, l = i.sibling;
    var a = { mode: "hidden", children: r.children };
    return !(s & 1) && t.child !== i ? (r = t.child, r.childLanes = 0, r.pendingProps = a, t.deletions = null) : (r = on(i, a), r.subtreeFlags = i.subtreeFlags & 14680064), l !== null ? o = on(l, o) : (o = xn(o, s, n, null), o.flags |= 2), o.return = t, r.return = t, r.sibling = o, t.child = r, r = o, o = t.child, s = e.child.memoizedState, s = s === null ? Ol(n) : { baseLanes: s.baseLanes | n, cachePool: null, transitions: s.transitions }, o.memoizedState = s, o.childLanes = e.childLanes & ~n, t.memoizedState = Nl, r;
  }
  return o = e.child, e = o.sibling, r = on(o, { mode: "visible", children: r.children }), !(t.mode & 1) && (r.lanes = n), r.return = t, r.sibling = null, e !== null && (n = t.deletions, n === null ? (t.deletions = [e], t.flags |= 16) : n.push(e)), t.child = r, t.memoizedState = null, r;
}
function Pa(e, t) {
  return t = es({ mode: "visible", children: t }, e.mode, 0, null), t.return = e, e.child = t;
}
function Ui(e, t, n, r) {
  return r !== null && ma(r), cr(t, e.child, null, n), e = Pa(t, t.pendingProps.children), e.flags |= 2, t.memoizedState = null, e;
}
function om(e, t, n, r, i, o, s) {
  if (n)
    return t.flags & 256 ? (t.flags &= -257, r = Ms(Error(g(422))), Ui(e, t, s, r)) : t.memoizedState !== null ? (t.child = e.child, t.flags |= 128, null) : (o = r.fallback, i = t.mode, r = es({ mode: "visible", children: r.children }, i, 0, null), o = xn(o, i, s, null), o.flags |= 2, r.return = t, o.return = t, r.sibling = o, t.child = r, t.mode & 1 && cr(t, e.child, null, s), t.child.memoizedState = Ol(s), t.memoizedState = Nl, o);
  if (!(t.mode & 1))
    return Ui(e, t, s, null);
  if (i.data === "$!") {
    if (r = i.nextSibling && i.nextSibling.dataset, r)
      var l = r.dgst;
    return r = l, o = Error(g(419)), r = Ms(o, r, void 0), Ui(e, t, s, r);
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
      i = i & (r.suspendedLanes | s) ? 0 : i, i !== 0 && i !== o.retryLane && (o.retryLane = i, zt(e, i), ot(r, e, i, -1));
    }
    return ja(), r = Ms(Error(g(421))), Ui(e, t, s, r);
  }
  return i.data === "$?" ? (t.flags |= 128, t.child = e.child, t = gm.bind(null, e), i._reactRetry = t, null) : (e = o.treeContext, $e = en(i.nextSibling), Ue = t, ee = !0, nt = null, e !== null && (Qe[Xe++] = Pt, Qe[Xe++] = Lt, Qe[Xe++] = Tn, Pt = e.id, Lt = e.overflow, Tn = t), t = Pa(t, r.children), t.flags |= 4096, t);
}
function Bu(e, t, n) {
  e.lanes |= t;
  var r = e.alternate;
  r !== null && (r.lanes |= t), kl(e.return, t, n);
}
function Is(e, t, n, r, i) {
  var o = e.memoizedState;
  o === null ? e.memoizedState = { isBackwards: t, rendering: null, renderingStartTime: 0, last: r, tail: n, tailMode: i } : (o.isBackwards = t, o.rendering = null, o.renderingStartTime = 0, o.last = r, o.tail = n, o.tailMode = i);
}
function af(e, t, n) {
  var r = t.pendingProps, i = r.revealOrder, o = r.tail;
  if (Oe(e, t, r.children, n), r = ne.current, r & 2)
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
  if (X(ne, r), !(t.mode & 1))
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
function sm(e, t, n) {
  switch (t.tag) {
    case 3:
      sf(t), ur();
      break;
    case 5:
      Id(t);
      break;
    case 1:
      Ae(t.type) && go(t);
      break;
    case 4:
      ka(t, t.stateNode.containerInfo);
      break;
    case 10:
      var r = t.type._context, i = t.memoizedProps.value;
      X(ko, r._currentValue), r._currentValue = i;
      break;
    case 13:
      if (r = t.memoizedState, r !== null)
        return r.dehydrated !== null ? (X(ne, ne.current & 1), t.flags |= 128, null) : n & t.child.childLanes ? lf(e, t, n) : (X(ne, ne.current & 1), e = At(e, t, n), e !== null ? e.sibling : null);
      X(ne, ne.current & 1);
      break;
    case 19:
      if (r = (n & t.childLanes) !== 0, e.flags & 128) {
        if (r)
          return af(e, t, n);
        t.flags |= 128;
      }
      if (i = t.memoizedState, i !== null && (i.rendering = null, i.tail = null, i.lastEffect = null), X(ne, ne.current), r)
        break;
      return null;
    case 22:
    case 23:
      return t.lanes = 0, rf(e, t, n);
  }
  return At(e, t, n);
}
var uf, Pl, cf, df;
uf = function(e, t) {
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
Pl = function() {
};
cf = function(e, t, n, r) {
  var i = e.memoizedProps;
  if (i !== r) {
    e = t.stateNode, kn(gt.current);
    var o = null;
    switch (n) {
      case "input":
        i = qs(e, i), r = qs(e, r), o = [];
        break;
      case "select":
        i = ie({}, i, { value: void 0 }), r = ie({}, r, { value: void 0 }), o = [];
        break;
      case "textarea":
        i = el(e, i), r = el(e, r), o = [];
        break;
      default:
        typeof i.onClick != "function" && typeof r.onClick == "function" && (e.onclick = vo);
    }
    nl(n, r);
    var s;
    n = null;
    for (u in i)
      if (!r.hasOwnProperty(u) && i.hasOwnProperty(u) && i[u] != null)
        if (u === "style") {
          var l = i[u];
          for (s in l)
            l.hasOwnProperty(s) && (n || (n = {}), n[s] = "");
        } else
          u !== "dangerouslySetInnerHTML" && u !== "children" && u !== "suppressContentEditableWarning" && u !== "suppressHydrationWarning" && u !== "autoFocus" && (Hr.hasOwnProperty(u) ? o || (o = []) : (o = o || []).push(u, null));
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
          u === "dangerouslySetInnerHTML" ? (a = a ? a.__html : void 0, l = l ? l.__html : void 0, a != null && l !== a && (o = o || []).push(u, a)) : u === "children" ? typeof a != "string" && typeof a != "number" || (o = o || []).push(u, "" + a) : u !== "suppressContentEditableWarning" && u !== "suppressHydrationWarning" && (Hr.hasOwnProperty(u) ? (a != null && u === "onScroll" && J("scroll", e), o || l === a || (o = [])) : (o = o || []).push(u, a));
    }
    n && (o = o || []).push("style", n);
    var u = o;
    (t.updateQueue = u) && (t.flags |= 4);
  }
};
df = function(e, t, n, r) {
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
function lm(e, t, n) {
  var r = t.pendingProps;
  switch (ha(t), t.tag) {
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
      return r = t.stateNode, dr(), b(ze), b(Ce), xa(), r.pendingContext && (r.context = r.pendingContext, r.pendingContext = null), (e === null || e.child === null) && (Wi(t) ? t.flags |= 4 : e === null || e.memoizedState.isDehydrated && !(t.flags & 256) || (t.flags |= 1024, nt !== null && (Al(nt), nt = null))), Pl(e, t), xe(t), null;
    case 5:
      Sa(t);
      var i = kn(ri.current);
      if (n = t.type, e !== null && t.stateNode != null)
        cf(e, t, n, r, i), e.ref !== t.ref && (t.flags |= 512, t.flags |= 2097152);
      else {
        if (!r) {
          if (t.stateNode === null)
            throw Error(g(166));
          return xe(t), null;
        }
        if (e = kn(gt.current), Wi(t)) {
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
              ba(r, o), J("invalid", r);
              break;
            case "select":
              r._wrapperState = { wasMultiple: !!o.multiple }, J("invalid", r);
              break;
            case "textarea":
              tu(r, o), J("invalid", r);
          }
          nl(n, o), i = null;
          for (var s in o)
            if (o.hasOwnProperty(s)) {
              var l = o[s];
              s === "children" ? typeof l == "string" ? r.textContent !== l && (o.suppressHydrationWarning !== !0 && Vi(r.textContent, l, e), i = ["children", l]) : typeof l == "number" && r.textContent !== "" + l && (o.suppressHydrationWarning !== !0 && Vi(
                r.textContent,
                l,
                e
              ), i = ["children", "" + l]) : Hr.hasOwnProperty(s) && l != null && s === "onScroll" && J("scroll", r);
            }
          switch (n) {
            case "input":
              Ri(r), eu(r, o, !0);
              break;
            case "textarea":
              Ri(r), nu(r);
              break;
            case "select":
            case "option":
              break;
            default:
              typeof o.onClick == "function" && (r.onclick = vo);
          }
          r = i, t.updateQueue = r, r !== null && (t.flags |= 4);
        } else {
          s = i.nodeType === 9 ? i : i.ownerDocument, e === "http://www.w3.org/1999/xhtml" && (e = Ac(n)), e === "http://www.w3.org/1999/xhtml" ? n === "script" ? (e = s.createElement("div"), e.innerHTML = "<script><\/script>", e = e.removeChild(e.firstChild)) : typeof r.is == "string" ? e = s.createElement(n, { is: r.is }) : (e = s.createElement(n), n === "select" && (s = e, r.multiple ? s.multiple = !0 : r.size && (s.size = r.size))) : e = s.createElementNS(e, n), e[vt] = t, e[ti] = r, uf(e, t, !1, !1), t.stateNode = e;
          e: {
            switch (s = rl(n, r), n) {
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
                ba(e, r), i = qs(e, r), J("invalid", e);
                break;
              case "option":
                i = r;
                break;
              case "select":
                e._wrapperState = { wasMultiple: !!r.multiple }, i = ie({}, r, { value: void 0 }), J("invalid", e);
                break;
              case "textarea":
                tu(e, r), i = el(e, r), J("invalid", e);
                break;
              default:
                i = r;
            }
            nl(n, i), l = i;
            for (o in l)
              if (l.hasOwnProperty(o)) {
                var a = l[o];
                o === "style" ? Wc(e, a) : o === "dangerouslySetInnerHTML" ? (a = a ? a.__html : void 0, a != null && Fc(e, a)) : o === "children" ? typeof a == "string" ? (n !== "textarea" || a !== "") && Yr(e, a) : typeof a == "number" && Yr(e, "" + a) : o !== "suppressContentEditableWarning" && o !== "suppressHydrationWarning" && o !== "autoFocus" && (Hr.hasOwnProperty(o) ? a != null && o === "onScroll" && J("scroll", e) : a != null && bl(e, o, a, s));
              }
            switch (n) {
              case "input":
                Ri(e), eu(e, r, !1);
                break;
              case "textarea":
                Ri(e), nu(e);
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
        df(e, t, e.memoizedProps, r);
      else {
        if (typeof r != "string" && t.stateNode === null)
          throw Error(g(166));
        if (n = kn(ri.current), kn(gt.current), Wi(t)) {
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
      if (b(ne), r = t.memoizedState, e === null || e.memoizedState !== null && e.memoizedState.dehydrated !== null) {
        if (ee && $e !== null && t.mode & 1 && !(t.flags & 128))
          Nd(), ur(), t.flags |= 98560, o = !1;
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
          nt !== null && (Al(nt), nt = null), o = !0;
        if (!o)
          return t.flags & 65536 ? t : null;
      }
      return t.flags & 128 ? (t.lanes = n, t) : (r = r !== null, r !== (e !== null && e.memoizedState !== null) && r && (t.child.flags |= 8192, t.mode & 1 && (e === null || ne.current & 1 ? fe === 0 && (fe = 3) : ja())), t.updateQueue !== null && (t.flags |= 4), xe(t), null);
    case 4:
      return dr(), Pl(e, t), e === null && br(t.stateNode.containerInfo), xe(t), null;
    case 10:
      return ga(t.type._context), xe(t), null;
    case 17:
      return Ae(t.type) && yo(), xe(t), null;
    case 19:
      if (b(ne), o = t.memoizedState, o === null)
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
                return X(ne, ne.current & 1 | 2), t.child;
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
      return o.tail !== null ? (t = o.tail, o.rendering = t, o.tail = t.sibling, o.renderingStartTime = le(), t.sibling = null, n = ne.current, X(ne, r ? n & 1 | 2 : n & 1), t) : (xe(t), null);
    case 22:
    case 23:
      return Ia(), r = t.memoizedState !== null, e !== null && e.memoizedState !== null !== r && (t.flags |= 8192), r && t.mode & 1 ? We & 1073741824 && (xe(t), t.subtreeFlags & 6 && (t.flags |= 8192)) : xe(t), null;
    case 24:
      return null;
    case 25:
      return null;
  }
  throw Error(g(156, t.tag));
}
function am(e, t) {
  switch (ha(t), t.tag) {
    case 1:
      return Ae(t.type) && yo(), e = t.flags, e & 65536 ? (t.flags = e & -65537 | 128, t) : null;
    case 3:
      return dr(), b(ze), b(Ce), xa(), e = t.flags, e & 65536 && !(e & 128) ? (t.flags = e & -65537 | 128, t) : null;
    case 5:
      return Sa(t), null;
    case 13:
      if (b(ne), e = t.memoizedState, e !== null && e.dehydrated !== null) {
        if (t.alternate === null)
          throw Error(g(340));
        ur();
      }
      return e = t.flags, e & 65536 ? (t.flags = e & -65537 | 128, t) : null;
    case 19:
      return b(ne), null;
    case 4:
      return dr(), null;
    case 10:
      return ga(t.type._context), null;
    case 22:
    case 23:
      return Ia(), null;
    case 24:
      return null;
    default:
      return null;
  }
}
var Zi = !1, Ee = !1, um = typeof WeakSet == "function" ? WeakSet : Set, P = null;
function Jn(e, t) {
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
function Ll(e, t, n) {
  try {
    n();
  } catch (r) {
    oe(e, t, r);
  }
}
var Hu = !1;
function cm(e, t) {
  if (pl = po, e = hd(), fa(e)) {
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
  for (hl = { focusedElem: e, selectionRange: n }, po = !1, P = t; P !== null; )
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
  return w = Hu, Hu = !1, w;
}
function Ur(e, t, n) {
  var r = t.updateQueue;
  if (r = r !== null ? r.lastEffect : null, r !== null) {
    var i = r = r.next;
    do {
      if ((i.tag & e) === e) {
        var o = i.destroy;
        i.destroy = void 0, o !== void 0 && Ll(t, n, o);
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
function ff(e) {
  var t = e.alternate;
  t !== null && (e.alternate = null, ff(t)), e.child = null, e.deletions = null, e.sibling = null, e.tag === 5 && (t = e.stateNode, t !== null && (delete t[vt], delete t[ti], delete t[yl], delete t[Yh], delete t[Qh])), e.stateNode = null, e.return = null, e.dependencies = null, e.memoizedProps = null, e.memoizedState = null, e.pendingProps = null, e.stateNode = null, e.updateQueue = null;
}
function pf(e) {
  return e.tag === 5 || e.tag === 3 || e.tag === 4;
}
function Yu(e) {
  e:
    for (; ; ) {
      for (; e.sibling === null; ) {
        if (e.return === null || pf(e.return))
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
    e = e.stateNode, t ? n.nodeType === 8 ? n.parentNode.insertBefore(e, t) : n.insertBefore(e, t) : (n.nodeType === 8 ? (t = n.parentNode, t.insertBefore(e, n)) : (t = n, t.appendChild(e)), n = n._reactRootContainer, n != null || t.onclick !== null || (t.onclick = vo));
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
function $t(e, t, n) {
  for (n = n.child; n !== null; )
    hf(e, t, n), n = n.sibling;
}
function hf(e, t, n) {
  if (yt && typeof yt.onCommitFiberUnmount == "function")
    try {
      yt.onCommitFiberUnmount(Bo, n);
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
      ge !== null && (tt ? (e = ge, n = n.stateNode, e.nodeType === 8 ? Ns(e.parentNode, n) : e.nodeType === 1 && Ns(e, n), Kr(e)) : Ns(ge, n.stateNode));
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
          o = o.tag, s !== void 0 && (o & 2 || o & 4) && Ll(n, t, s), i = i.next;
        } while (i !== r);
      }
      $t(e, t, n);
      break;
    case 1:
      if (!Ee && (Jn(n, t), r = n.stateNode, typeof r.componentWillUnmount == "function"))
        try {
          r.props = n.memoizedProps, r.state = n.memoizedState, r.componentWillUnmount();
        } catch (l) {
          oe(n, t, l);
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
    n === null && (n = e.stateNode = new um()), t.forEach(function(r) {
      var i = wm.bind(null, e, r);
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
        hf(o, s, i), ge = null, tt = !1;
        var a = i.alternate;
        a !== null && (a.return = null), i.return = null;
      } catch (u) {
        oe(i, t, u);
      }
    }
  if (t.subtreeFlags & 12854)
    for (t = t.child; t !== null; )
      mf(t, e), t = t.sibling;
}
function mf(e, t) {
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
          oe(e, e.return, k);
        }
        try {
          Ur(5, e, e.return);
        } catch (k) {
          oe(e, e.return, k);
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
          oe(e, e.return, k);
        }
      }
      if (r & 4 && (i = e.stateNode, i != null)) {
        var o = e.memoizedProps, s = n !== null ? n.memoizedProps : o, l = e.type, a = e.updateQueue;
        if (e.updateQueue = null, a !== null)
          try {
            l === "input" && o.type === "radio" && o.name != null && jc(i, o), rl(l, s);
            var u = rl(l, o);
            for (s = 0; s < a.length; s += 2) {
              var p = a[s], h = a[s + 1];
              p === "style" ? Wc(i, h) : p === "dangerouslySetInnerHTML" ? Fc(i, h) : p === "children" ? Yr(i, h) : bl(i, p, h, u);
            }
            switch (l) {
              case "input":
                Js(i, o);
                break;
              case "textarea":
                zc(i, o);
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
      be(t, e), ht(e), i = e.child, i.flags & 8192 && (o = i.memoizedState !== null, i.stateNode.isHidden = o, !o || i.alternate !== null && i.alternate.memoizedState !== null || (Da = le())), r & 4 && Qu(e);
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
                      oe(r, n, k);
                    }
                  }
                  break;
                case 5:
                  Jn(m, m.return);
                  break;
                case 22:
                  if (m.memoizedState !== null) {
                    Gu(h);
                    continue;
                  }
              }
              y !== null ? (y.return = m, P = y) : Gu(h);
            }
            p = p.sibling;
          }
        e:
          for (p = null, h = e; ; ) {
            if (h.tag === 5) {
              if (p === null) {
                p = h;
                try {
                  i = h.stateNode, u ? (o = i.style, typeof o.setProperty == "function" ? o.setProperty("display", "none", "important") : o.display = "none") : (l = h.stateNode, a = h.memoizedProps.style, s = a != null && a.hasOwnProperty("display") ? a.display : null, l.style.display = Vc("display", s));
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
          if (pf(n)) {
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
          Ml(e, o, i);
          break;
        case 3:
        case 4:
          var s = r.stateNode.containerInfo, l = Yu(e);
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
function dm(e, t, n) {
  P = e, vf(e);
}
function vf(e, t, n) {
  for (var r = (e.mode & 1) !== 0; P !== null; ) {
    var i = P, o = i.child;
    if (i.tag === 22 && r) {
      var s = i.memoizedState !== null || Zi;
      if (!s) {
        var l = i.alternate, a = l !== null && l.memoizedState !== null || Ee;
        l = Zi;
        var u = Ee;
        if (Zi = s, (Ee = a) && !u)
          for (P = i; P !== null; )
            s = P, a = s.child, s.tag === 22 && s.memoizedState !== null ? Ku(i) : a !== null ? (a.return = s, P = a) : Ku(i);
        for (; o !== null; )
          P = o, vf(o), o = o.sibling;
        P = i, Zi = l, Ee = u;
      }
      Xu(e);
    } else
      i.subtreeFlags & 8772 && o !== null ? (o.return = i, P = o) : Xu(e);
  }
}
function Xu(e) {
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
function Gu(e) {
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
            Jo(4, t);
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
var fm = Math.ceil, No = Vt.ReactCurrentDispatcher, La = Vt.ReactCurrentOwner, Ke = Vt.ReactCurrentBatchConfig, W = 0, ve = null, ce = null, we = 0, We = 0, bn = pn(0), fe = 0, li = null, On = 0, bo = 0, Ra = 0, Zr = null, Me = null, Da = 0, pr = 1 / 0, Tt = null, Oo = !1, Il = null, nn = null, Bi = !1, Gt = null, Po = 0, Br = 0, jl = null, ro = -1, io = 0;
function Pe() {
  return W & 6 ? le() : ro !== -1 ? ro : ro = le();
}
function rn(e) {
  return e.mode & 1 ? W & 2 && we !== 0 ? we & -we : Gh.transition !== null ? (io === 0 && (io = Jc()), io) : (e = B, e !== 0 || (e = window.event, e = e === void 0 ? 16 : od(e.type)), e) : 1;
}
function ot(e, t, n, r) {
  if (50 < Br)
    throw Br = 0, jl = null, Error(g(185));
  Ei(e, n, r), (!(W & 2) || e !== ve) && (e === ve && (!(W & 2) && (bo |= n), fe === 4 && Yt(e, we)), Fe(e, r), n === 1 && W === 0 && !(t.mode & 1) && (pr = le() + 500, Go && hn()));
}
function Fe(e, t) {
  var n = e.callbackNode;
  Gp(e, t);
  var r = fo(e, e === ve ? we : 0);
  if (r === 0)
    n !== null && ou(n), e.callbackNode = null, e.callbackPriority = 0;
  else if (t = r & -r, e.callbackPriority !== t) {
    if (n != null && ou(n), t === 1)
      e.tag === 0 ? Xh(qu.bind(null, e)) : Ed(qu.bind(null, e)), Bh(function() {
        !(W & 6) && hn();
      }), n = null;
    else {
      switch (bc(r)) {
        case 1:
          n = ia;
          break;
        case 4:
          n = Kc;
          break;
        case 16:
          n = co;
          break;
        case 536870912:
          n = qc;
          break;
        default:
          n = co;
      }
      n = Ef(n, yf.bind(null, e));
    }
    e.callbackPriority = t, e.callbackNode = n;
  }
}
function yf(e, t) {
  if (ro = -1, io = 0, W & 6)
    throw Error(g(327));
  var n = e.callbackNode;
  if (or() && e.callbackNode !== n)
    return null;
  var r = fo(e, e === ve ? we : 0);
  if (r === 0)
    return null;
  if (r & 30 || r & e.expiredLanes || t)
    t = Lo(e, r);
  else {
    t = r;
    var i = W;
    W |= 2;
    var o = wf();
    (ve !== e || we !== t) && (Tt = null, pr = le() + 500, Sn(e, t));
    do
      try {
        mm();
        break;
      } catch (l) {
        gf(e, l);
      }
    while (!0);
    ya(), No.current = o, W = i, ce !== null ? t = 0 : (ve = null, we = 0, t = fe);
  }
  if (t !== 0) {
    if (t === 2 && (i = al(e), i !== 0 && (r = i, t = zl(e, i))), t === 1)
      throw n = li, Sn(e, 0), Yt(e, r), Fe(e, le()), n;
    if (t === 6)
      Yt(e, r);
    else {
      if (i = e.current.alternate, !(r & 30) && !pm(i) && (t = Lo(e, r), t === 2 && (o = al(e), o !== 0 && (r = o, t = zl(e, o))), t === 1))
        throw n = li, Sn(e, 0), Yt(e, r), Fe(e, le()), n;
      switch (e.finishedWork = i, e.finishedLanes = r, t) {
        case 0:
        case 1:
          throw Error(g(345));
        case 2:
          yn(e, Me, Tt);
          break;
        case 3:
          if (Yt(e, r), (r & 130023424) === r && (t = Da + 500 - le(), 10 < t)) {
            if (fo(e, 0) !== 0)
              break;
            if (i = e.suspendedLanes, (i & r) !== r) {
              Pe(), e.pingedLanes |= e.suspendedLanes & i;
              break;
            }
            e.timeoutHandle = vl(yn.bind(null, e, Me, Tt), t);
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
          if (r = i, r = le() - r, r = (120 > r ? 120 : 480 > r ? 480 : 1080 > r ? 1080 : 1920 > r ? 1920 : 3e3 > r ? 3e3 : 4320 > r ? 4320 : 1960 * fm(r / 1960)) - r, 10 < r) {
            e.timeoutHandle = vl(yn.bind(null, e, Me, Tt), r);
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
  return Fe(e, le()), e.callbackNode === n ? yf.bind(null, e) : null;
}
function zl(e, t) {
  var n = Zr;
  return e.current.memoizedState.isDehydrated && (Sn(e, t).flags |= 256), e = Lo(e, t), e !== 2 && (t = Me, Me = n, t !== null && Al(t)), e;
}
function Al(e) {
  Me === null ? Me = e : Me.push.apply(Me, e);
}
function pm(e) {
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
function Yt(e, t) {
  for (t &= ~Ra, t &= ~bo, e.suspendedLanes |= t, e.pingedLanes &= ~t, e = e.expirationTimes; 0 < t; ) {
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
  var n = Lo(e, t);
  if (e.tag !== 0 && n === 2) {
    var r = al(e);
    r !== 0 && (t = r, n = zl(e, r));
  }
  if (n === 1)
    throw n = li, Sn(e, 0), Yt(e, t), Fe(e, le()), n;
  if (n === 6)
    throw Error(g(345));
  return e.finishedWork = e.current.alternate, e.finishedLanes = t, yn(e, Me, Tt), Fe(e, le()), null;
}
function Ma(e, t) {
  var n = W;
  W |= 1;
  try {
    return e(t);
  } finally {
    W = n, W === 0 && (pr = le() + 500, Go && hn());
  }
}
function Pn(e) {
  Gt !== null && Gt.tag === 0 && !(W & 6) && or();
  var t = W;
  W |= 1;
  var n = Ke.transition, r = B;
  try {
    if (Ke.transition = null, B = 1, e)
      return e();
  } finally {
    B = r, Ke.transition = n, W = t, !(W & 6) && hn();
  }
}
function Ia() {
  We = bn.current, b(bn);
}
function Sn(e, t) {
  e.finishedWork = null, e.finishedLanes = 0;
  var n = e.timeoutHandle;
  if (n !== -1 && (e.timeoutHandle = -1, Zh(n)), ce !== null)
    for (n = ce.return; n !== null; ) {
      var r = n;
      switch (ha(r), r.tag) {
        case 1:
          r = r.type.childContextTypes, r != null && yo();
          break;
        case 3:
          dr(), b(ze), b(Ce), xa();
          break;
        case 5:
          Sa(r);
          break;
        case 4:
          dr();
          break;
        case 13:
          b(ne);
          break;
        case 19:
          b(ne);
          break;
        case 10:
          ga(r.type._context);
          break;
        case 22:
        case 23:
          Ia();
      }
      n = n.return;
    }
  if (ve = e, ce = e = on(e.current, null), we = We = t, fe = 0, li = null, Ra = bo = On = 0, Me = Zr = null, _n !== null) {
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
function gf(e, t) {
  do {
    var n = ce;
    try {
      if (ya(), eo.current = To, Co) {
        for (var r = re.memoizedState; r !== null; ) {
          var i = r.queue;
          i !== null && (i.pending = null), r = r.next;
        }
        Co = !1;
      }
      if (Nn = 0, me = de = re = null, $r = !1, ii = 0, La.current = null, n === null || n.return === null) {
        fe = 1, li = t, ce = null;
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
          var y = Fu(s);
          if (y !== null) {
            y.flags &= -257, Vu(y, s, l, o, t), y.mode & 1 && Au(o, u, t), t = y, a = u;
            var w = t.updateQueue;
            if (w === null) {
              var k = /* @__PURE__ */ new Set();
              k.add(a), t.updateQueue = k;
            } else
              w.add(a);
            break e;
          } else {
            if (!(t & 1)) {
              Au(o, u, t), ja();
              break e;
            }
            a = Error(g(426));
          }
        } else if (ee && l.mode & 1) {
          var F = Fu(s);
          if (F !== null) {
            !(F.flags & 65536) && (F.flags |= 256), Vu(F, s, l, o, t), ma(fr(a, l));
            break e;
          }
        }
        o = a = fr(a, l), fe !== 4 && (fe = 2), Zr === null ? Zr = [o] : Zr.push(o), o = s;
        do {
          switch (o.tag) {
            case 3:
              o.flags |= 65536, t &= -t, o.lanes |= t;
              var d = ef(o, a, t);
              Lu(o, d);
              break e;
            case 1:
              l = a;
              var c = o.type, f = o.stateNode;
              if (!(o.flags & 128) && (typeof c.getDerivedStateFromError == "function" || f !== null && typeof f.componentDidCatch == "function" && (nn === null || !nn.has(f)))) {
                o.flags |= 65536, t &= -t, o.lanes |= t;
                var v = tf(o, l, t);
                Lu(o, v);
                break e;
              }
          }
          o = o.return;
        } while (o !== null);
      }
      kf(n);
    } catch (x) {
      t = x, ce === n && n !== null && (ce = n = n.return);
      continue;
    }
    break;
  } while (!0);
}
function wf() {
  var e = No.current;
  return No.current = To, e === null ? To : e;
}
function ja() {
  (fe === 0 || fe === 3 || fe === 2) && (fe = 4), ve === null || !(On & 268435455) && !(bo & 268435455) || Yt(ve, we);
}
function Lo(e, t) {
  var n = W;
  W |= 2;
  var r = wf();
  (ve !== e || we !== t) && (Tt = null, Sn(e, t));
  do
    try {
      hm();
      break;
    } catch (i) {
      gf(e, i);
    }
  while (!0);
  if (ya(), W = n, No.current = r, ce !== null)
    throw Error(g(261));
  return ve = null, we = 0, fe;
}
function hm() {
  for (; ce !== null; )
    _f(ce);
}
function mm() {
  for (; ce !== null && !Wp(); )
    _f(ce);
}
function _f(e) {
  var t = xf(e.alternate, e, We);
  e.memoizedProps = e.pendingProps, t === null ? kf(e) : ce = t, La.current = null;
}
function kf(e) {
  var t = e;
  do {
    var n = t.alternate;
    if (e = t.return, t.flags & 32768) {
      if (n = am(n, t), n !== null) {
        n.flags &= 32767, ce = n;
        return;
      }
      if (e !== null)
        e.flags |= 32768, e.subtreeFlags = 0, e.deletions = null;
      else {
        fe = 6, ce = null;
        return;
      }
    } else if (n = lm(n, t, We), n !== null) {
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
  var r = B, i = Ke.transition;
  try {
    Ke.transition = null, B = 1, vm(e, t, n, r);
  } finally {
    Ke.transition = i, B = r;
  }
  return null;
}
function vm(e, t, n, r) {
  do
    or();
  while (Gt !== null);
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
  if (Kp(e, o), e === ve && (ce = ve = null, we = 0), !(n.subtreeFlags & 2064) && !(n.flags & 2064) || Bi || (Bi = !0, Ef(co, function() {
    return or(), null;
  })), o = (n.flags & 15990) !== 0, n.subtreeFlags & 15990 || o) {
    o = Ke.transition, Ke.transition = null;
    var s = B;
    B = 1;
    var l = W;
    W |= 4, La.current = null, cm(e, n), mf(n, e), zh(hl), po = !!pl, hl = pl = null, e.current = n, dm(n), $p(), W = l, B = s, Ke.transition = o;
  } else
    e.current = n;
  if (Bi && (Bi = !1, Gt = e, Po = i), o = e.pendingLanes, o === 0 && (nn = null), Bp(n.stateNode), Fe(e, le()), t !== null)
    for (r = e.onRecoverableError, n = 0; n < t.length; n++)
      i = t[n], r(i.value, { componentStack: i.stack, digest: i.digest });
  if (Oo)
    throw Oo = !1, e = Il, Il = null, e;
  return Po & 1 && e.tag !== 0 && or(), o = e.pendingLanes, o & 1 ? e === jl ? Br++ : (Br = 0, jl = e) : Br = 0, hn(), null;
}
function or() {
  if (Gt !== null) {
    var e = bc(Po), t = Ke.transition, n = B;
    try {
      if (Ke.transition = null, B = 16 > e ? 16 : e, Gt === null)
        var r = !1;
      else {
        if (e = Gt, Gt = null, Po = 0, W & 6)
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
                      Ur(8, p, o);
                  }
                  var h = p.child;
                  if (h !== null)
                    h.return = p, P = h;
                  else
                    for (; P !== null; ) {
                      p = P;
                      var m = p.sibling, y = p.return;
                      if (ff(p), p === u) {
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
                if (l = P, l.flags & 2048)
                  try {
                    switch (l.tag) {
                      case 0:
                      case 11:
                      case 15:
                        Jo(9, l);
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
        if (W = i, hn(), yt && typeof yt.onPostCommitFiberRoot == "function")
          try {
            yt.onPostCommitFiberRoot(Bo, e);
          } catch {
          }
        r = !0;
      }
      return r;
    } finally {
      B = n, Ke.transition = t;
    }
  }
  return !1;
}
function Ju(e, t, n) {
  t = fr(n, t), t = ef(e, t, 1), e = tn(e, t, 1), t = Pe(), e !== null && (Ei(e, 1, t), Fe(e, t));
}
function oe(e, t, n) {
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
          e = fr(n, e), e = tf(t, e, 1), t = tn(t, e, 1), e = Pe(), t !== null && (Ei(t, 1, e), Fe(t, e));
          break;
        }
      }
      t = t.return;
    }
}
function ym(e, t, n) {
  var r = e.pingCache;
  r !== null && r.delete(t), t = Pe(), e.pingedLanes |= e.suspendedLanes & n, ve === e && (we & n) === n && (fe === 4 || fe === 3 && (we & 130023424) === we && 500 > le() - Da ? Sn(e, 0) : Ra |= n), Fe(e, t);
}
function Sf(e, t) {
  t === 0 && (e.mode & 1 ? (t = Ii, Ii <<= 1, !(Ii & 130023424) && (Ii = 4194304)) : t = 1);
  var n = Pe();
  e = zt(e, t), e !== null && (Ei(e, t, n), Fe(e, n));
}
function gm(e) {
  var t = e.memoizedState, n = 0;
  t !== null && (n = t.retryLane), Sf(e, n);
}
function wm(e, t) {
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
  r !== null && r.delete(t), Sf(e, n);
}
var xf;
xf = function(e, t, n) {
  if (e !== null)
    if (e.memoizedProps !== t.pendingProps || ze.current)
      je = !0;
    else {
      if (!(e.lanes & n) && !(t.flags & 128))
        return je = !1, sm(e, t, n);
      je = !!(e.flags & 131072);
    }
  else
    je = !1, ee && t.flags & 1048576 && Cd(t, _o, t.index);
  switch (t.lanes = 0, t.tag) {
    case 2:
      var r = t.type;
      no(e, t), e = t.pendingProps;
      var i = ar(t, Ce.current);
      ir(t, n), i = Ca(null, t, r, e, i, n);
      var o = Ta();
      return t.flags |= 1, typeof i == "object" && i !== null && typeof i.render == "function" && i.$$typeof === void 0 ? (t.tag = 1, t.memoizedState = null, t.updateQueue = null, Ae(r) ? (o = !0, go(t)) : o = !1, t.memoizedState = i.state !== null && i.state !== void 0 ? i.state : null, _a(t), i.updater = Ko, t.stateNode = i, i._reactInternals = t, xl(t, r, e, n), t = Tl(null, t, r, !0, o, n)) : (t.tag = 0, ee && o && pa(t), Oe(null, t, i, n), t = t.child), t;
    case 16:
      r = t.elementType;
      e: {
        switch (no(e, t), e = t.pendingProps, i = r._init, r = i(r._payload), t.type = r, i = t.tag = km(r), e = et(r, e), i) {
          case 0:
            t = Cl(null, t, r, e, n);
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
      return r = t.type, i = t.pendingProps, i = t.elementType === r ? i : et(r, i), Cl(e, t, r, i, n);
    case 1:
      return r = t.type, i = t.pendingProps, i = t.elementType === r ? i : et(r, i), Uu(e, t, r, i, n);
    case 3:
      e: {
        if (sf(t), e === null)
          throw Error(g(387));
        r = t.pendingProps, o = t.memoizedState, i = o.element, Pd(e, t), xo(t, r, null, n);
        var s = t.memoizedState;
        if (r = s.element, o.isDehydrated)
          if (o = { element: r, isDehydrated: !1, cache: s.cache, pendingSuspenseBoundaries: s.pendingSuspenseBoundaries, transitions: s.transitions }, t.updateQueue.baseState = o, t.memoizedState = o, t.flags & 256) {
            i = fr(Error(g(423)), t), t = Zu(e, t, r, n, i);
            break e;
          } else if (r !== i) {
            i = fr(Error(g(424)), t), t = Zu(e, t, r, n, i);
            break e;
          } else
            for ($e = en(t.stateNode.containerInfo.firstChild), Ue = t, ee = !0, nt = null, n = Md(t, null, r, n), t.child = n; n; )
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
      return Id(t), e === null && _l(t), r = t.type, i = t.pendingProps, o = e !== null ? e.memoizedProps : null, s = i.children, ml(r, i) ? s = null : o !== null && ml(r, o) && (t.flags |= 32), of(e, t), Oe(e, t, s, n), t.child;
    case 6:
      return e === null && _l(t), null;
    case 13:
      return lf(e, t, n);
    case 4:
      return ka(t, t.stateNode.containerInfo), r = t.pendingProps, e === null ? t.child = cr(t, null, r, n) : Oe(e, t, r, n), t.child;
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
        if (r = t.type._context, i = t.pendingProps, o = t.memoizedProps, s = i.value, X(ko, r._currentValue), r._currentValue = s, o !== null)
          if (at(o.value, s)) {
            if (o.children === i.children && !ze.current) {
              t = At(e, t, n);
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
                    o.lanes |= n, a = o.alternate, a !== null && (a.lanes |= n), kl(
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
                s.lanes |= n, l = s.alternate, l !== null && (l.lanes |= n), kl(s, n, t), s = o.sibling;
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
      return nf(e, t, t.type, t.pendingProps, n);
    case 17:
      return r = t.type, i = t.pendingProps, i = t.elementType === r ? i : et(r, i), no(e, t), t.tag = 1, Ae(r) ? (e = !0, go(t)) : e = !1, ir(t, n), Rd(t, r, i), xl(t, r, i, n), Tl(null, t, r, !0, e, n);
    case 19:
      return af(e, t, n);
    case 22:
      return rf(e, t, n);
  }
  throw Error(g(156, t.tag));
};
function Ef(e, t) {
  return Gc(e, t);
}
function _m(e, t, n, r) {
  this.tag = e, this.key = n, this.sibling = this.child = this.return = this.stateNode = this.type = this.elementType = null, this.index = 0, this.ref = null, this.pendingProps = t, this.dependencies = this.memoizedState = this.updateQueue = this.memoizedProps = null, this.mode = r, this.subtreeFlags = this.flags = 0, this.deletions = null, this.childLanes = this.lanes = 0, this.alternate = null;
}
function Ge(e, t, n, r) {
  return new _m(e, t, n, r);
}
function za(e) {
  return e = e.prototype, !(!e || !e.isReactComponent);
}
function km(e) {
  if (typeof e == "function")
    return za(e) ? 1 : 0;
  if (e != null) {
    if (e = e.$$typeof, e === ta)
      return 11;
    if (e === na)
      return 14;
  }
  return 2;
}
function on(e, t) {
  var n = e.alternate;
  return n === null ? (n = Ge(e.tag, t, e.key, e.mode), n.elementType = e.elementType, n.type = e.type, n.stateNode = e.stateNode, n.alternate = e, e.alternate = n) : (n.pendingProps = t, n.type = e.type, n.flags = 0, n.subtreeFlags = 0, n.deletions = null), n.flags = e.flags & 14680064, n.childLanes = e.childLanes, n.lanes = e.lanes, n.child = e.child, n.memoizedProps = e.memoizedProps, n.memoizedState = e.memoizedState, n.updateQueue = e.updateQueue, t = e.dependencies, n.dependencies = t === null ? null : { lanes: t.lanes, firstContext: t.firstContext }, n.sibling = e.sibling, n.index = e.index, n.ref = e.ref, n;
}
function oo(e, t, n, r, i, o) {
  var s = 2;
  if (r = e, typeof e == "function")
    za(e) && (s = 1);
  else if (typeof e == "string")
    s = 5;
  else
    e:
      switch (e) {
        case Zn:
          return xn(n.children, i, o, t);
        case ea:
          s = 8, i |= 8;
          break;
        case Qs:
          return e = Ge(12, n, t, i | 2), e.elementType = Qs, e.lanes = o, e;
        case Xs:
          return e = Ge(13, n, t, i), e.elementType = Xs, e.lanes = o, e;
        case Gs:
          return e = Ge(19, n, t, i), e.elementType = Gs, e.lanes = o, e;
        case Dc:
          return es(n, i, o, t);
        default:
          if (typeof e == "object" && e !== null)
            switch (e.$$typeof) {
              case Lc:
                s = 10;
                break e;
              case Rc:
                s = 9;
                break e;
              case ta:
                s = 11;
                break e;
              case na:
                s = 14;
                break e;
              case Zt:
                s = 16, r = null;
                break e;
            }
          throw Error(g(130, e == null ? e : typeof e, ""));
      }
  return t = Ge(s, n, t, i), t.elementType = e, t.type = r, t.lanes = o, t;
}
function xn(e, t, n, r) {
  return e = Ge(7, e, r, t), e.lanes = n, e;
}
function es(e, t, n, r) {
  return e = Ge(22, e, r, t), e.elementType = Dc, e.lanes = n, e.stateNode = { isHidden: !1 }, e;
}
function js(e, t, n) {
  return e = Ge(6, e, null, t), e.lanes = n, e;
}
function zs(e, t, n) {
  return t = Ge(4, e.children !== null ? e.children : [], e.key, t), t.lanes = n, t.stateNode = { containerInfo: e.containerInfo, pendingChildren: null, implementation: e.implementation }, t;
}
function Sm(e, t, n, r, i) {
  this.tag = t, this.containerInfo = e, this.finishedWork = this.pingCache = this.current = this.pendingChildren = null, this.timeoutHandle = -1, this.callbackNode = this.pendingContext = this.context = null, this.callbackPriority = 0, this.eventTimes = vs(0), this.expirationTimes = vs(-1), this.entangledLanes = this.finishedLanes = this.mutableReadLanes = this.expiredLanes = this.pingedLanes = this.suspendedLanes = this.pendingLanes = 0, this.entanglements = vs(0), this.identifierPrefix = r, this.onRecoverableError = i, this.mutableSourceEagerHydrationData = null;
}
function Aa(e, t, n, r, i, o, s, l, a) {
  return e = new Sm(e, t, n, l, a), t === 1 ? (t = 1, o === !0 && (t |= 8)) : t = 0, o = Ge(3, null, null, t), e.current = o, o.stateNode = e, o.memoizedState = { element: r, isDehydrated: n, cache: null, transitions: null, pendingSuspenseBoundaries: null }, _a(o), e;
}
function xm(e, t, n) {
  var r = 3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
  return { $$typeof: Un, key: r == null ? null : "" + r, children: e, containerInfo: t, implementation: n };
}
function Cf(e) {
  if (!e)
    return ln;
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
      return xd(e, n, t);
  }
  return t;
}
function Tf(e, t, n, r, i, o, s, l, a) {
  return e = Aa(n, r, !0, e, i, o, s, l, a), e.context = Cf(null), n = e.current, r = Pe(), i = rn(n), o = Dt(r, i), o.callback = t ?? null, tn(n, o, i), e.current.lanes = i, Ei(e, i, r), Fe(e, r), e;
}
function ts(e, t, n, r) {
  var i = t.current, o = Pe(), s = rn(i);
  return n = Cf(n), t.context === null ? t.context = n : t.pendingContext = n, t = Dt(o, s), t.payload = { element: e }, r = r === void 0 ? null : r, r !== null && (t.callback = r), e = tn(i, t, s), e !== null && (ot(e, i, s, o), bi(e, i, s)), s;
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
function bu(e, t) {
  if (e = e.memoizedState, e !== null && e.dehydrated !== null) {
    var n = e.retryLane;
    e.retryLane = n !== 0 && n < t ? n : t;
  }
}
function Fa(e, t) {
  bu(e, t), (e = e.alternate) && bu(e, t);
}
function Em() {
  return null;
}
var Nf = typeof reportError == "function" ? reportError : function(e) {
  console.error(e);
};
function Va(e) {
  this._internalRoot = e;
}
ns.prototype.render = Va.prototype.render = function(e) {
  var t = this._internalRoot;
  if (t === null)
    throw Error(g(409));
  ts(e, t, null, null);
};
ns.prototype.unmount = Va.prototype.unmount = function() {
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
    var t = nd();
    e = { blockedOn: null, target: e, priority: t };
    for (var n = 0; n < Ht.length && t !== 0 && t < Ht[n].priority; n++)
      ;
    Ht.splice(n, 0, e), n === 0 && id(e);
  }
};
function Wa(e) {
  return !(!e || e.nodeType !== 1 && e.nodeType !== 9 && e.nodeType !== 11);
}
function rs(e) {
  return !(!e || e.nodeType !== 1 && e.nodeType !== 9 && e.nodeType !== 11 && (e.nodeType !== 8 || e.nodeValue !== " react-mount-point-unstable "));
}
function ec() {
}
function Cm(e, t, n, r, i) {
  if (i) {
    if (typeof r == "function") {
      var o = r;
      r = function() {
        var u = Ro(s);
        o.call(u);
      };
    }
    var s = Tf(t, r, e, 0, null, !1, !1, "", ec);
    return e._reactRootContainer = s, e[jt] = s.current, br(e.nodeType === 8 ? e.parentNode : e), Pn(), s;
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
  var a = Aa(e, 0, !1, null, null, !1, !1, "", ec);
  return e._reactRootContainer = a, e[jt] = a.current, br(e.nodeType === 8 ? e.parentNode : e), Pn(function() {
    ts(t, a, n, r);
  }), a;
}
function is(e, t, n, r, i) {
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
    ts(t, s, e, i);
  } else
    s = Cm(n, t, e, i, r);
  return Ro(s);
}
ed = function(e) {
  switch (e.tag) {
    case 3:
      var t = e.stateNode;
      if (t.current.memoizedState.isDehydrated) {
        var n = Ir(t.pendingLanes);
        n !== 0 && (oa(t, n | 1), Fe(t, le()), !(W & 6) && (pr = le() + 500, hn()));
      }
      break;
    case 13:
      Pn(function() {
        var r = zt(e, 1);
        if (r !== null) {
          var i = Pe();
          ot(r, e, 1, i);
        }
      }), Fa(e, 1);
  }
};
sa = function(e) {
  if (e.tag === 13) {
    var t = zt(e, 134217728);
    if (t !== null) {
      var n = Pe();
      ot(t, e, 134217728, n);
    }
    Fa(e, 134217728);
  }
};
td = function(e) {
  if (e.tag === 13) {
    var t = rn(e), n = zt(e, t);
    if (n !== null) {
      var r = Pe();
      ot(n, e, t, r);
    }
    Fa(e, t);
  }
};
nd = function() {
  return B;
};
rd = function(e, t) {
  var n = B;
  try {
    return B = e, t();
  } finally {
    B = n;
  }
};
ol = function(e, t, n) {
  switch (t) {
    case "input":
      if (Js(e, n), t = n.name, n.type === "radio" && t != null) {
        for (n = e; n.parentNode; )
          n = n.parentNode;
        for (n = n.querySelectorAll("input[name=" + JSON.stringify("" + t) + '][type="radio"]'), t = 0; t < n.length; t++) {
          var r = n[t];
          if (r !== e && r.form === e.form) {
            var i = Xo(r);
            if (!i)
              throw Error(g(90));
            Ic(r), Js(r, i);
          }
        }
      }
      break;
    case "textarea":
      zc(e, n);
      break;
    case "select":
      t = n.value, t != null && er(e, !!n.multiple, t, !1);
  }
};
Zc = Ma;
Bc = Pn;
var Tm = { usingClientEntryPoint: !1, Events: [Ti, Qn, Xo, $c, Uc, Ma] }, Or = { findFiberByHostInstance: wn, bundleType: 0, version: "18.2.0", rendererPackageName: "react-dom" }, Nm = { bundleType: Or.bundleType, version: Or.version, rendererPackageName: Or.rendererPackageName, rendererConfig: Or.rendererConfig, overrideHookState: null, overrideHookStateDeletePath: null, overrideHookStateRenamePath: null, overrideProps: null, overridePropsDeletePath: null, overridePropsRenamePath: null, setErrorHandler: null, setSuspenseHandler: null, scheduleUpdate: null, currentDispatcherRef: Vt.ReactCurrentDispatcher, findHostInstanceByFiber: function(e) {
  return e = Qc(e), e === null ? null : e.stateNode;
}, findFiberByHostInstance: Or.findFiberByHostInstance || Em, findHostInstancesForRefresh: null, scheduleRefresh: null, scheduleRoot: null, setRefreshHandler: null, getCurrentFiber: null, reconcilerVersion: "18.2.0-next-9e3b772b8-20220608" };
if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u") {
  var Hi = __REACT_DEVTOOLS_GLOBAL_HOOK__;
  if (!Hi.isDisabled && Hi.supportsFiber)
    try {
      Bo = Hi.inject(Nm), yt = Hi;
    } catch {
    }
}
Be.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = Tm;
Be.createPortal = function(e, t) {
  var n = 2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
  if (!Wa(t))
    throw Error(g(200));
  return xm(e, t, null, n);
};
Be.createRoot = function(e, t) {
  if (!Wa(e))
    throw Error(g(299));
  var n = !1, r = "", i = Nf;
  return t != null && (t.unstable_strictMode === !0 && (n = !0), t.identifierPrefix !== void 0 && (r = t.identifierPrefix), t.onRecoverableError !== void 0 && (i = t.onRecoverableError)), t = Aa(e, 1, !1, null, null, n, !1, r, i), e[jt] = t.current, br(e.nodeType === 8 ? e.parentNode : e), new Va(t);
};
Be.findDOMNode = function(e) {
  if (e == null)
    return null;
  if (e.nodeType === 1)
    return e;
  var t = e._reactInternals;
  if (t === void 0)
    throw typeof e.render == "function" ? Error(g(188)) : (e = Object.keys(e).join(","), Error(g(268, e)));
  return e = Qc(t), e = e === null ? null : e.stateNode, e;
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
  if (!Wa(e))
    throw Error(g(405));
  var r = n != null && n.hydratedSources || null, i = !1, o = "", s = Nf;
  if (n != null && (n.unstable_strictMode === !0 && (i = !0), n.identifierPrefix !== void 0 && (o = n.identifierPrefix), n.onRecoverableError !== void 0 && (s = n.onRecoverableError)), t = Tf(t, null, e, 1, n ?? null, i, !1, o, s), e[jt] = t.current, br(e), r)
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
Be.unstable_batchedUpdates = Ma;
Be.unstable_renderSubtreeIntoContainer = function(e, t, n, r) {
  if (!rs(n))
    throw Error(g(200));
  if (e == null || e._reactInternals === void 0)
    throw Error(g(38));
  return is(e, t, n, !1, r);
};
Be.version = "18.2.0-next-9e3b772b8-20220608";
function Of() {
  if (!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" || typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function"))
    try {
      __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(Of);
    } catch (e) {
      console.error(e);
    }
}
Of(), Cc.exports = Be;
var Om = Cc.exports, Pf, tc = Om;
Pf = tc.createRoot, tc.hydrateRoot;
var Lf = { exports: {} }, Rf = {};
/**
 * @license React
 * use-sync-external-store-shim.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var hr = ae;
function Pm(e, t) {
  return e === t && (e !== 0 || 1 / e === 1 / t) || e !== e && t !== t;
}
var Lm = typeof Object.is == "function" ? Object.is : Pm, Rm = hr.useState, Dm = hr.useEffect, Mm = hr.useLayoutEffect, Im = hr.useDebugValue;
function jm(e, t) {
  var n = t(), r = Rm({ inst: { value: n, getSnapshot: t } }), i = r[0].inst, o = r[1];
  return Mm(function() {
    i.value = n, i.getSnapshot = t, As(i) && o({ inst: i });
  }, [e, n, t]), Dm(function() {
    return As(i) && o({ inst: i }), e(function() {
      As(i) && o({ inst: i });
    });
  }, [e]), Im(n), n;
}
function As(e) {
  var t = e.getSnapshot;
  e = e.value;
  try {
    var n = t();
    return !Lm(e, n);
  } catch {
    return !0;
  }
}
function zm(e, t) {
  return t();
}
var Am = typeof window > "u" || typeof window.document > "u" || typeof window.document.createElement > "u" ? zm : jm;
Rf.useSyncExternalStore = hr.useSyncExternalStore !== void 0 ? hr.useSyncExternalStore : Am;
Lf.exports = Rf;
var Fm = Lf.exports;
const Kt = () => {
}, Ie = (
  /*#__NOINLINE__*/
  Kt()
), Fs = Object, $ = (e) => e === Ie, Rt = (e) => typeof e == "function", an = (e, t) => ({
  ...e,
  ...t
}), Vm = (e) => Rt(e.then), Yi = /* @__PURE__ */ new WeakMap();
let Wm = 0;
const ai = (e) => {
  const t = typeof e, n = e && e.constructor, r = n == Date;
  let i, o;
  if (Fs(e) === e && !r && n != RegExp) {
    if (i = Yi.get(e), i)
      return i;
    if (i = ++Wm + "~", Yi.set(e, i), n == Array) {
      for (i = "@", o = 0; o < e.length; o++)
        i += ai(e[o]) + ",";
      Yi.set(e, i);
    }
    if (n == Fs) {
      i = "#";
      const s = Fs.keys(e).sort();
      for (; !$(o = s.pop()); )
        $(e[o]) || (i += o + ":" + ai(e[o]) + ",");
      Yi.set(e, i);
    }
  } else
    i = r ? e.toJSON() : t == "symbol" ? e.toString() : t == "string" ? JSON.stringify(e) : "" + e;
  return i;
}, Ot = /* @__PURE__ */ new WeakMap(), Vs = {}, Qi = {}, $a = "undefined", os = typeof window != $a, Fl = typeof document != $a, $m = () => os && typeof window.requestAnimationFrame != $a, Df = (e, t) => {
  const n = Ot.get(e);
  return [
    // Getter
    () => !$(t) && e.get(t) || Vs,
    // Setter
    (r) => {
      if (!$(t)) {
        const i = e.get(t);
        t in Qi || (Qi[t] = i), n[5](t, an(i, r), i || Vs);
      }
    },
    // Subscriber
    n[6],
    // Get server cache snapshot
    () => !$(t) && t in Qi ? Qi[t] : !$(t) && e.get(t) || Vs
  ];
};
let Vl = !0;
const Um = () => Vl, [Wl, $l] = os && window.addEventListener ? [
  window.addEventListener.bind(window),
  window.removeEventListener.bind(window)
] : [
  Kt,
  Kt
], Zm = () => {
  const e = Fl && document.visibilityState;
  return $(e) || e !== "hidden";
}, Bm = (e) => (Fl && document.addEventListener("visibilitychange", e), Wl("focus", e), () => {
  Fl && document.removeEventListener("visibilitychange", e), $l("focus", e);
}), Hm = (e) => {
  const t = () => {
    Vl = !0, e();
  }, n = () => {
    Vl = !1;
  };
  return Wl("online", t), Wl("offline", n), () => {
    $l("online", t), $l("offline", n);
  };
}, Ym = {
  isOnline: Um,
  isVisible: Zm
}, Qm = {
  initFocus: Bm,
  initReconnect: Hm
}, nc = !Zo.useId, ui = !os || "Deno" in window, Xm = (e) => $m() ? window.requestAnimationFrame(e) : setTimeout(e, 1), Ws = ui ? ae.useEffect : ae.useLayoutEffect, $s = typeof navigator < "u" && navigator.connection, rc = !ui && $s && ([
  "slow-2g",
  "2g"
].includes($s.effectiveType) || $s.saveData), Ua = (e) => {
  if (Rt(e))
    try {
      e = e();
    } catch {
      e = "";
    }
  const t = e;
  return e = typeof e == "string" ? e : (Array.isArray(e) ? e.length : e) ? ai(e) : "", [
    e,
    t
  ];
};
let Gm = 0;
const Ul = () => ++Gm, Mf = 0, If = 1, jf = 2, Km = 3;
var Pr = {
  __proto__: null,
  ERROR_REVALIDATE_EVENT: Km,
  FOCUS_EVENT: Mf,
  MUTATE_EVENT: jf,
  RECONNECT_EVENT: If
};
async function zf(...e) {
  const [t, n, r, i] = e, o = an({
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
    const [w] = Ua(y);
    if (!w)
      return;
    const [k, F] = Df(t, w), [d, c, f, v] = Ot.get(t), x = () => {
      const he = d[w];
      return u && (delete f[w], delete v[w], he && he[0]) ? he[0](jf).then(() => k().data) : k().data;
    };
    if (e.length < 3)
      return x();
    let S = r, C;
    const E = Ul();
    c[w] = [
      E,
      0
    ];
    const H = !$(a), D = k(), pe = D.data, ct = D._c, Ve = $(ct) ? pe : ct;
    if (H && (a = Rt(a) ? a(Ve, pe) : a, F({
      data: a,
      _c: Ve
    })), Rt(S))
      try {
        S = S(Ve);
      } catch (he) {
        C = he;
      }
    if (S && Vm(S))
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
    if (c[w][1] = Ul(), Promise.resolve(x()).then(() => {
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
}, qm = (e, t) => {
  if (!Ot.has(e)) {
    const n = an(Qm, t), r = {}, i = zf.bind(Ie, e);
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
      if (!Ot.has(e) && (Ot.set(e, [
        r,
        {},
        {},
        {},
        i,
        a,
        l
      ]), !ui)) {
        const p = n.initFocus(setTimeout.bind(Ie, ic.bind(Ie, r, Mf))), h = n.initReconnect(setTimeout.bind(Ie, ic.bind(Ie, r, If)));
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
}, Jm = (e, t, n, r, i) => {
  const o = n.errorRetryCount, s = i.retryCount, l = ~~((Math.random() + 0.5) * (1 << (s < 8 ? s : 8))) * n.errorRetryInterval;
  !$(o) && s > o || setTimeout(r, l, i);
}, bm = (e, t) => ai(e) == ai(t), [Af, e0] = qm(/* @__PURE__ */ new Map()), t0 = an(
  {
    // events
    onLoadingSlow: Kt,
    onSuccess: Kt,
    onError: Kt,
    onErrorRetry: Jm,
    onDiscarded: Kt,
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
    compare: bm,
    isPaused: () => !1,
    cache: Af,
    mutate: e0,
    fallback: {}
  },
  // use web preset by default
  Ym
), n0 = (e, t) => {
  const n = an(e, t);
  if (t) {
    const { use: r, fallback: i } = e, { use: o, fallback: s } = t;
    r && o && (n.use = r.concat(o)), i && s && (n.fallback = an(i, s));
  }
  return n;
}, r0 = ae.createContext({}), i0 = "$inf$", Ff = os && window.__SWR_DEVTOOLS_USE__, o0 = Ff ? window.__SWR_DEVTOOLS_USE__ : [], s0 = () => {
  Ff && (window.__SWR_DEVTOOLS_REACT__ = Zo);
}, l0 = (e) => Rt(e[1]) ? [
  e[0],
  e[1],
  e[2] || {}
] : [
  e[0],
  null,
  (e[1] === null ? e[2] : e[1]) || {}
], a0 = () => an(t0, ae.useContext(r0)), u0 = (e) => (t, n, r) => e(t, n && ((...o) => {
  const [s] = Ua(t), [, , , l] = Ot.get(Af);
  if (s.startsWith(i0))
    return n(...o);
  const a = l[s];
  return $(a) ? n(...o) : (delete l[s], a);
}), r), c0 = o0.concat(u0), d0 = (e) => function(...n) {
  const r = a0(), [i, o, s] = l0(n), l = n0(r, s);
  let a = e;
  const { use: u } = l, p = (u || []).concat(c0);
  for (let h = p.length; h--; )
    a = p[h](a);
  return a(i, o || l.fetcher || null, l);
}, f0 = (e, t, n) => {
  const r = t[e] || (t[e] = []);
  return r.push(n), () => {
    const i = r.indexOf(n);
    i >= 0 && (r[i] = r[r.length - 1], r.pop());
  };
};
s0();
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
}, p0 = (e, t, n) => {
  const { cache: r, compare: i, suspense: o, fallbackData: s, revalidateOnMount: l, revalidateIfStale: a, refreshInterval: u, refreshWhenHidden: p, refreshWhenOffline: h, keepPreviousData: m } = n, [y, w, k, F] = Ot.get(r), [d, c] = Ua(e), f = ae.useRef(!1), v = ae.useRef(!1), x = ae.useRef(d), S = ae.useRef(t), C = ae.useRef(n), E = () => C.current, H = () => E().isVisible() && E().isOnline(), [D, pe, ct, Ve] = Df(r, d), he = ae.useRef({}).current, as = $(s) ? n.fallback[d] : s, zn = (K, q) => {
    for (const ke in he) {
      const se = ke;
      if (se === "data") {
        if (!i(K[se], q[se]) && (!$(K[se]) || !i(Wt, q[se])))
          return !1;
      } else if (q[se] !== K[se])
        return !1;
    }
    return !0;
  }, An = ae.useMemo(() => {
    const K = !d || !t ? !1 : $(l) ? E().isPaused() || o ? !1 : $(a) ? !0 : a : l, q = (Ne) => {
      const xt = an(Ne);
      return delete xt._k, K ? {
        isValidating: !0,
        isLoading: !0,
        ...xt
      } : xt;
    }, ke = D(), se = Ve(), pt = q(ke), Fn = ke === se ? pt : q(se);
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
  ]), T = Fm.useSyncExternalStore(ae.useCallback(
    (K) => ct(d, (q, ke) => {
      zn(ke, q) || K();
    }),
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [
      r,
      d
    ]
  ), An[0], An[1]), M = !f.current, z = y[d] && y[d].length > 0, Y = T.data, G = $(Y) ? as : Y, St = T.error, dt = ae.useRef(G), Wt = m ? $(Y) ? dt.current : Y : G, ft = z && !$(St) ? !1 : M && !$(l) ? l : E().isPaused() ? !1 : o ? $(G) ? !1 : a : $(G) || a, mn = !!(d && t && M && ft), ep = $(T.isValidating) ? mn : T.isValidating, tp = $(T.isLoading) ? mn : T.isLoading, _r = ae.useCallback(
    async (K) => {
      const q = S.current;
      if (!d || !q || v.current || E().isPaused())
        return !1;
      let ke, se, pt = !0;
      const Fn = K || {}, ye = !k[d] || !Fn.dedupe, Ne = () => nc ? !v.current && d === x.current && f.current : d === x.current, xt = {
        isValidating: !1,
        isLoading: !1
      }, Ba = () => {
        pe(xt);
      }, Ha = () => {
        const Ye = k[d];
        Ye && Ye[1] === se && delete k[d];
      }, Ya = {
        isValidating: !0
      };
      $(D().data) && (Ya.isLoading = !0);
      try {
        if (ye && (pe(Ya), n.loadingTimeout && $(D().data) && setTimeout(() => {
          pt && Ne() && E().onLoadingSlow(d, n);
        }, n.loadingTimeout), k[d] = [
          q(c),
          Ul()
        ]), [ke, se] = k[d], ke = await ke, ye && setTimeout(Ha, n.dedupingInterval), !k[d] || k[d][1] !== se)
          return ye && Ne() && E().onDiscarded(d), !1;
        xt.error = Ie;
        const Ye = w[d];
        if (!$(Ye) && // case 1
        (se <= Ye[0] || // case 2
        se <= Ye[1] || // case 3
        Ye[1] === 0))
          return Ba(), ye && Ne() && E().onDiscarded(d), !1;
        const Et = D().data;
        xt.data = i(Et, ke) ? Et : ke, ye && Ne() && E().onSuccess(ke, d, n);
      } catch (Ye) {
        Ha();
        const Et = E(), { shouldRetryOnError: us } = Et;
        Et.isPaused() || (xt.error = Ye, ye && Ne() && (Et.onError(Ye, d, Et), (us === !0 || Rt(us) && us(Ye)) && H() && Et.onErrorRetry(Ye, d, Et, (np) => {
          const cs = y[d];
          cs && cs[0] && cs[0](Pr.ERROR_REVALIDATE_EVENT, np);
        }, {
          retryCount: (Fn.retryCount || 0) + 1,
          dedupe: !0
        })));
      }
      return pt = !1, Ba(), !0;
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
  ), Za = ae.useCallback(
    // Use callback to make sure `keyRef.current` returns latest result every time
    (...K) => zf(r, x.current, ...K),
    // eslint-disable-next-line react-hooks/exhaustive-deps
    []
  );
  if (Ws(() => {
    S.current = t, C.current = n, $(Y) || (dt.current = Y);
  }), Ws(() => {
    if (!d)
      return;
    const K = _r.bind(Ie, Us);
    let q = 0;
    const se = f0(d, y, (pt, Fn = {}) => {
      if (pt == Pr.FOCUS_EVENT) {
        const ye = Date.now();
        E().revalidateOnFocus && ye > q && H() && (q = ye + E().focusThrottleInterval, K());
      } else if (pt == Pr.RECONNECT_EVENT)
        E().revalidateOnReconnect && H() && K();
      else {
        if (pt == Pr.MUTATE_EVENT)
          return _r();
        if (pt == Pr.ERROR_REVALIDATE_EVENT)
          return _r(Fn);
      }
    });
    return v.current = !1, x.current = d, f.current = !0, pe({
      _k: c
    }), ft && ($(G) || ui ? K() : Xm(K)), () => {
      v.current = !0, se();
    };
  }, [
    d
  ]), Ws(() => {
    let K;
    function q() {
      const se = Rt(u) ? u(D().data) : u;
      se && K !== -1 && (K = setTimeout(ke, se));
    }
    function ke() {
      !D().error && (p || E().isVisible()) && (h || E().isOnline()) ? _r(Us).then(q) : q();
    }
    return q(), () => {
      K && (clearTimeout(K), K = -1);
    };
  }, [
    u,
    p,
    h,
    d
  ]), ae.useDebugValue(Wt), o && $(G) && d) {
    if (!nc && ui)
      throw new Error("Fallback data is required when using suspense in SSR.");
    S.current = t, C.current = n, v.current = !1;
    const K = F[d];
    if (!$(K)) {
      const q = Za(K);
      oc(q);
    }
    if ($(St)) {
      const q = _r(Us);
      $(Wt) || (q.status = "fulfilled", q.value = !0), oc(q);
    } else
      throw St;
  }
  return {
    mutate: Za,
    get data() {
      return he.data = !0, Wt;
    },
    get error() {
      return he.error = !0, St;
    },
    get isValidating() {
      return he.isValidating = !0, ep;
    },
    get isLoading() {
      return he.isLoading = !0, tp;
    }
  };
}, h0 = d0(p0);
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
var Zl;
(function(e) {
  e.mergeShapes = (t, n) => ({
    ...t,
    ...n
    // second overwrites first
  });
})(Zl || (Zl = {}));
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
]), m0 = (e) => JSON.stringify(e, null, 2).replace(/"([^"]+)":/g, "$1:");
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
let Vf = ci;
function v0(e) {
  Vf = e;
}
function Do() {
  return Vf;
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
}, y0 = [];
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
}), Wf = (e) => ({ status: "dirty", value: e }), Le = (e) => ({ status: "valid", value: e }), Bl = (e) => e.status === "aborted", Hl = (e) => e.status === "dirty", di = (e) => e.status === "valid", Io = (e) => typeof Promise < "u" && e instanceof Promise;
var L;
(function(e) {
  e.errToObj = (t) => typeof t == "string" ? { message: t } : t || {}, e.toString = (t) => typeof t == "string" ? t : t == null ? void 0 : t.message;
})(L || (L = {}));
class wt {
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
      typeName: R.ZodEffects,
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
      typeName: R.ZodEffects,
      effect: { type: "transform", transform: t }
    });
  }
  default(t) {
    const n = typeof t == "function" ? t : () => t;
    return new ki({
      ...j(this._def),
      innerType: this,
      defaultValue: n,
      typeName: R.ZodDefault
    });
  }
  brand() {
    return new Uf({
      typeName: R.ZodBranded,
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
      typeName: R.ZodCatch
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
const g0 = /^c[^\s-]{8,}$/i, w0 = /^[a-z][a-z0-9]*$/, _0 = /^[0-9A-HJKMNP-TV-Z]{26}$/, k0 = /^[0-9a-fA-F]{8}\b-[0-9a-fA-F]{4}\b-[0-9a-fA-F]{4}\b-[0-9a-fA-F]{4}\b-[0-9a-fA-F]{12}$/i, S0 = /^(?!\.)(?!.*\.\.)([A-Z0-9_+-\.]*)[A-Z0-9_+-]@([A-Z0-9][A-Z0-9\-]*\.)+[A-Z]{2,}$/i, x0 = "^(\\p{Extended_Pictographic}|\\p{Emoji_Component})+$";
let Zs;
const E0 = /^(((25[0-5])|(2[0-4][0-9])|(1[0-9]{2})|([0-9]{1,2}))\.){3}((25[0-5])|(2[0-4][0-9])|(1[0-9]{2})|([0-9]{1,2}))$/, C0 = /^(([a-f0-9]{1,4}:){7}|::([a-f0-9]{1,4}:){0,6}|([a-f0-9]{1,4}:){1}:([a-f0-9]{1,4}:){0,5}|([a-f0-9]{1,4}:){2}:([a-f0-9]{1,4}:){0,4}|([a-f0-9]{1,4}:){3}:([a-f0-9]{1,4}:){0,3}|([a-f0-9]{1,4}:){4}:([a-f0-9]{1,4}:){0,2}|([a-f0-9]{1,4}:){5}:([a-f0-9]{1,4}:){0,1})([a-f0-9]{1,4}|(((25[0-5])|(2[0-4][0-9])|(1[0-9]{2})|([0-9]{1,2}))\.){3}((25[0-5])|(2[0-4][0-9])|(1[0-9]{2})|([0-9]{1,2})))$/, T0 = (e) => e.precision ? e.offset ? new RegExp(`^\\d{4}-\\d{2}-\\d{2}T\\d{2}:\\d{2}:\\d{2}\\.\\d{${e.precision}}(([+-]\\d{2}(:?\\d{2})?)|Z)$`) : new RegExp(`^\\d{4}-\\d{2}-\\d{2}T\\d{2}:\\d{2}:\\d{2}\\.\\d{${e.precision}}Z$`) : e.precision === 0 ? e.offset ? new RegExp("^\\d{4}-\\d{2}-\\d{2}T\\d{2}:\\d{2}:\\d{2}(([+-]\\d{2}(:?\\d{2})?)|Z)$") : new RegExp("^\\d{4}-\\d{2}-\\d{2}T\\d{2}:\\d{2}:\\d{2}Z$") : e.offset ? new RegExp("^\\d{4}-\\d{2}-\\d{2}T\\d{2}:\\d{2}:\\d{2}(\\.\\d+)?(([+-]\\d{2}(:?\\d{2})?)|Z)$") : new RegExp("^\\d{4}-\\d{2}-\\d{2}T\\d{2}:\\d{2}:\\d{2}(\\.\\d+)?Z$");
function N0(e, t) {
  return !!((t === "v4" || !t) && E0.test(e) || (t === "v6" || !t) && C0.test(e));
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
        S0.test(t.data) || (i = this._getOrReturnCtx(t, i), O(i, {
          validation: "email",
          code: _.invalid_string,
          message: o.message
        }), r.dirty());
      else if (o.kind === "emoji")
        Zs || (Zs = new RegExp(x0, "u")), Zs.test(t.data) || (i = this._getOrReturnCtx(t, i), O(i, {
          validation: "emoji",
          code: _.invalid_string,
          message: o.message
        }), r.dirty());
      else if (o.kind === "uuid")
        k0.test(t.data) || (i = this._getOrReturnCtx(t, i), O(i, {
          validation: "uuid",
          code: _.invalid_string,
          message: o.message
        }), r.dirty());
      else if (o.kind === "cuid")
        g0.test(t.data) || (i = this._getOrReturnCtx(t, i), O(i, {
          validation: "cuid",
          code: _.invalid_string,
          message: o.message
        }), r.dirty());
      else if (o.kind === "cuid2")
        w0.test(t.data) || (i = this._getOrReturnCtx(t, i), O(i, {
          validation: "cuid2",
          code: _.invalid_string,
          message: o.message
        }), r.dirty());
      else if (o.kind === "ulid")
        _0.test(t.data) || (i = this._getOrReturnCtx(t, i), O(i, {
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
        }), r.dirty()) : o.kind === "datetime" ? T0(o).test(t.data) || (i = this._getOrReturnCtx(t, i), O(i, {
          code: _.invalid_string,
          validation: "datetime",
          message: o.message
        }), r.dirty()) : o.kind === "ip" ? N0(t.data, o.version) || (i = this._getOrReturnCtx(t, i), O(i, {
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
      ...L.errToObj(r)
    });
  }
  _addCheck(t) {
    return new rt({
      ...this._def,
      checks: [...this._def.checks, t]
    });
  }
  email(t) {
    return this._addCheck({ kind: "email", ...L.errToObj(t) });
  }
  url(t) {
    return this._addCheck({ kind: "url", ...L.errToObj(t) });
  }
  emoji(t) {
    return this._addCheck({ kind: "emoji", ...L.errToObj(t) });
  }
  uuid(t) {
    return this._addCheck({ kind: "uuid", ...L.errToObj(t) });
  }
  cuid(t) {
    return this._addCheck({ kind: "cuid", ...L.errToObj(t) });
  }
  cuid2(t) {
    return this._addCheck({ kind: "cuid2", ...L.errToObj(t) });
  }
  ulid(t) {
    return this._addCheck({ kind: "ulid", ...L.errToObj(t) });
  }
  ip(t) {
    return this._addCheck({ kind: "ip", ...L.errToObj(t) });
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
      ...L.errToObj(t == null ? void 0 : t.message)
    });
  }
  regex(t, n) {
    return this._addCheck({
      kind: "regex",
      regex: t,
      ...L.errToObj(n)
    });
  }
  includes(t, n) {
    return this._addCheck({
      kind: "includes",
      value: t,
      position: n == null ? void 0 : n.position,
      ...L.errToObj(n == null ? void 0 : n.message)
    });
  }
  startsWith(t, n) {
    return this._addCheck({
      kind: "startsWith",
      value: t,
      ...L.errToObj(n)
    });
  }
  endsWith(t, n) {
    return this._addCheck({
      kind: "endsWith",
      value: t,
      ...L.errToObj(n)
    });
  }
  min(t, n) {
    return this._addCheck({
      kind: "min",
      value: t,
      ...L.errToObj(n)
    });
  }
  max(t, n) {
    return this._addCheck({
      kind: "max",
      value: t,
      ...L.errToObj(n)
    });
  }
  length(t, n) {
    return this._addCheck({
      kind: "length",
      value: t,
      ...L.errToObj(n)
    });
  }
  /**
   * @deprecated Use z.string().min(1) instead.
   * @see {@link ZodString.min}
   */
  nonempty(t) {
    return this.min(1, L.errToObj(t));
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
    typeName: R.ZodString,
    coerce: (t = e == null ? void 0 : e.coerce) !== null && t !== void 0 ? t : !1,
    ...j(e)
  });
};
function O0(e, t) {
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
      }), i.dirty()) : o.kind === "multipleOf" ? O0(t.data, o.value) !== 0 && (r = this._getOrReturnCtx(t, r), O(r, {
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
    return this.setLimit("min", t, !0, L.toString(n));
  }
  gt(t, n) {
    return this.setLimit("min", t, !1, L.toString(n));
  }
  lte(t, n) {
    return this.setLimit("max", t, !0, L.toString(n));
  }
  lt(t, n) {
    return this.setLimit("max", t, !1, L.toString(n));
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
          message: L.toString(i)
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
      message: L.toString(t)
    });
  }
  positive(t) {
    return this._addCheck({
      kind: "min",
      value: 0,
      inclusive: !1,
      message: L.toString(t)
    });
  }
  negative(t) {
    return this._addCheck({
      kind: "max",
      value: 0,
      inclusive: !1,
      message: L.toString(t)
    });
  }
  nonpositive(t) {
    return this._addCheck({
      kind: "max",
      value: 0,
      inclusive: !0,
      message: L.toString(t)
    });
  }
  nonnegative(t) {
    return this._addCheck({
      kind: "min",
      value: 0,
      inclusive: !0,
      message: L.toString(t)
    });
  }
  multipleOf(t, n) {
    return this._addCheck({
      kind: "multipleOf",
      value: t,
      message: L.toString(n)
    });
  }
  finite(t) {
    return this._addCheck({
      kind: "finite",
      message: L.toString(t)
    });
  }
  safe(t) {
    return this._addCheck({
      kind: "min",
      inclusive: !0,
      value: Number.MIN_SAFE_INTEGER,
      message: L.toString(t)
    })._addCheck({
      kind: "max",
      inclusive: !0,
      value: Number.MAX_SAFE_INTEGER,
      message: L.toString(t)
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
  typeName: R.ZodNumber,
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
    return this.setLimit("min", t, !0, L.toString(n));
  }
  gt(t, n) {
    return this.setLimit("min", t, !1, L.toString(n));
  }
  lte(t, n) {
    return this.setLimit("max", t, !0, L.toString(n));
  }
  lt(t, n) {
    return this.setLimit("max", t, !1, L.toString(n));
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
          message: L.toString(i)
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
      message: L.toString(t)
    });
  }
  negative(t) {
    return this._addCheck({
      kind: "max",
      value: BigInt(0),
      inclusive: !1,
      message: L.toString(t)
    });
  }
  nonpositive(t) {
    return this._addCheck({
      kind: "max",
      value: BigInt(0),
      inclusive: !0,
      message: L.toString(t)
    });
  }
  nonnegative(t) {
    return this._addCheck({
      kind: "min",
      value: BigInt(0),
      inclusive: !0,
      message: L.toString(t)
    });
  }
  multipleOf(t, n) {
    return this._addCheck({
      kind: "multipleOf",
      value: t,
      message: L.toString(n)
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
    typeName: R.ZodBigInt,
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
    return Le(t.data);
  }
}
fi.create = (e) => new fi({
  typeName: R.ZodBoolean,
  coerce: (e == null ? void 0 : e.coerce) || !1,
  ...j(e)
});
class Ln extends A {
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
    return new Ln({
      ...this._def,
      checks: [...this._def.checks, t]
    });
  }
  min(t, n) {
    return this._addCheck({
      kind: "min",
      value: t.getTime(),
      message: L.toString(n)
    });
  }
  max(t, n) {
    return this._addCheck({
      kind: "max",
      value: t.getTime(),
      message: L.toString(n)
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
Ln.create = (e) => new Ln({
  checks: [],
  coerce: (e == null ? void 0 : e.coerce) || !1,
  typeName: R.ZodDate,
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
    return Le(t.data);
  }
}
jo.create = (e) => new jo({
  typeName: R.ZodSymbol,
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
    return Le(t.data);
  }
}
pi.create = (e) => new pi({
  typeName: R.ZodUndefined,
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
    return Le(t.data);
  }
}
hi.create = (e) => new hi({
  typeName: R.ZodNull,
  ...j(e)
});
class mr extends A {
  constructor() {
    super(...arguments), this._any = !0;
  }
  _parse(t) {
    return Le(t.data);
  }
}
mr.create = (e) => new mr({
  typeName: R.ZodAny,
  ...j(e)
});
class En extends A {
  constructor() {
    super(...arguments), this._unknown = !0;
  }
  _parse(t) {
    return Le(t.data);
  }
}
En.create = (e) => new En({
  typeName: R.ZodUnknown,
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
  typeName: R.ZodNever,
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
    return Le(t.data);
  }
}
zo.create = (e) => new zo({
  typeName: R.ZodVoid,
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
      minLength: { value: t, message: L.toString(n) }
    });
  }
  max(t, n) {
    return new lt({
      ...this._def,
      maxLength: { value: t, message: L.toString(n) }
    });
  }
  length(t, n) {
    return new lt({
      ...this._def,
      exactLength: { value: t, message: L.toString(n) }
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
  typeName: R.ZodArray,
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
    return e instanceof lt ? new lt({
      ...e._def,
      type: $n(e.element)
    }) : e instanceof Mt ? Mt.create($n(e.unwrap())) : e instanceof Dn ? Dn.create($n(e.unwrap())) : e instanceof _t ? _t.create(e.items.map((t) => $n(t))) : e;
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
    if (!(this._def.catchall instanceof Ft && this._def.unknownKeys === "strip"))
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
    if (this._def.catchall instanceof Ft) {
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
    return L.errToObj, new te({
      ...this._def,
      unknownKeys: "strict",
      ...t !== void 0 ? {
        errorMap: (n, r) => {
          var i, o, s, l;
          const a = (s = (o = (i = this._def).errorMap) === null || o === void 0 ? void 0 : o.call(i, n, r).message) !== null && s !== void 0 ? s : r.defaultError;
          return n.code === "unrecognized_keys" ? {
            message: (l = L.errToObj(t).message) !== null && l !== void 0 ? l : a
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
      typeName: R.ZodObject
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
    return $f(U.objectKeys(this.shape));
  }
}
te.create = (e, t) => new te({
  shape: () => e,
  unknownKeys: "strip",
  catchall: Ft.create(),
  typeName: R.ZodObject,
  ...j(t)
});
te.strictCreate = (e, t) => new te({
  shape: () => e,
  unknownKeys: "strict",
  catchall: Ft.create(),
  typeName: R.ZodObject,
  ...j(t)
});
te.lazycreate = (e, t) => new te({
  shape: e,
  unknownKeys: "strip",
  catchall: Ft.create(),
  typeName: R.ZodObject,
  ...j(t)
});
class mi extends A {
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
mi.create = (e, t) => new mi({
  options: e,
  typeName: R.ZodUnion,
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
      for (const l of s) {
        if (i.has(l))
          throw new Error(`Discriminator property ${String(t)} has duplicate value ${String(l)}`);
        i.set(l, o);
      }
    }
    return new ss({
      typeName: R.ZodDiscriminatedUnion,
      discriminator: t,
      options: n,
      optionsMap: i,
      ...j(r)
    });
  }
}
function Yl(e, t) {
  const n = Qt(e), r = Qt(t);
  if (e === t)
    return { valid: !0, data: e };
  if (n === N.object && r === N.object) {
    const i = U.objectKeys(t), o = U.objectKeys(e).filter((l) => i.indexOf(l) !== -1), s = { ...e, ...t };
    for (const l of o) {
      const a = Yl(e[l], t[l]);
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
      const s = e[o], l = t[o], a = Yl(s, l);
      if (!a.valid)
        return { valid: !1 };
      i.push(a.data);
    }
    return { valid: !0, data: i };
  } else
    return n === N.date && r === N.date && +e == +t ? { valid: !0, data: e } : { valid: !1 };
}
class vi extends A {
  _parse(t) {
    const { status: n, ctx: r } = this._processInputParams(t), i = (o, s) => {
      if (Bl(o) || Bl(s))
        return I;
      const l = Yl(o.value, s.value);
      return l.valid ? ((Hl(o) || Hl(s)) && n.dirty(), { status: n.value, value: l.data }) : (O(r, {
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
  typeName: R.ZodIntersection,
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
    typeName: R.ZodTuple,
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
    return n instanceof A ? new yi({
      keyType: t,
      valueType: n,
      typeName: R.ZodRecord,
      ...j(r)
    }) : new yi({
      keyType: rt.create(),
      valueType: t,
      typeName: R.ZodRecord,
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
Ao.create = (e, t, n) => new Ao({
  valueType: t,
  keyType: e,
  typeName: R.ZodMap,
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
      minSize: { value: t, message: L.toString(n) }
    });
  }
  max(t, n) {
    return new Rn({
      ...this._def,
      maxSize: { value: t, message: L.toString(n) }
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
  typeName: R.ZodSet,
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
    function r(l, a) {
      return Mo({
        data: l,
        path: n.path,
        errorMaps: [
          n.common.contextualErrorMap,
          n.schemaErrorMap,
          Do(),
          ci
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
          ci
        ].filter((u) => !!u),
        issueData: {
          code: _.invalid_return_type,
          returnTypeError: a
        }
      });
    }
    const o = { errorMap: n.common.contextualErrorMap }, s = n.data;
    if (this._def.returns instanceof vr) {
      const l = this;
      return Le(async function(...a) {
        const u = new st([]), p = await l._def.args.parseAsync(a, o).catch((y) => {
          throw u.addIssue(r(a, y)), u;
        }), h = await Reflect.apply(s, this, p);
        return await l._def.returns._def.type.parseAsync(h, o).catch((y) => {
          throw u.addIssue(i(h, y)), u;
        });
      });
    } else {
      const l = this;
      return Le(function(...a) {
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
    return new sr({
      ...this._def,
      args: _t.create(t).rest(En.create())
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
      args: t || _t.create([]).rest(En.create()),
      returns: n || En.create(),
      typeName: R.ZodFunction,
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
  typeName: R.ZodLazy,
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
  typeName: R.ZodLiteral,
  ...j(t)
});
function $f(e, t) {
  return new dn({
    values: e,
    typeName: R.ZodEnum,
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
    return Le(t.data);
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
dn.create = $f;
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
    return Le(t.data);
  }
  get enum() {
    return this._def.values;
  }
}
_i.create = (e, t) => new _i({
  values: e,
  typeName: R.ZodNativeEnum,
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
    return Le(r.then((i) => this._def.type.parseAsync(i, {
      path: n.path,
      errorMap: n.common.contextualErrorMap
    })));
  }
}
vr.create = (e, t) => new vr({
  type: e,
  typeName: R.ZodPromise,
  ...j(t)
});
class ut extends A {
  innerType() {
    return this._def.schema;
  }
  sourceType() {
    return this._def.schema._def.typeName === R.ZodEffects ? this._def.schema.sourceType() : this._def.schema;
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
        if (!di(s))
          return s;
        const l = i.transform(s.value, o);
        if (l instanceof Promise)
          throw new Error("Asynchronous transform encountered during synchronous parse operation. Use .parseAsync instead.");
        return { status: n.value, value: l };
      } else
        return this._def.schema._parseAsync({ data: r.data, path: r.path, parent: r }).then((s) => di(s) ? Promise.resolve(i.transform(s.value, o)).then((l) => ({ status: n.value, value: l })) : s);
    U.assertNever(i);
  }
}
ut.create = (e, t, n) => new ut({
  schema: e,
  typeName: R.ZodEffects,
  effect: t,
  ...j(n)
});
ut.createWithPreprocess = (e, t, n) => new ut({
  schema: t,
  effect: { type: "preprocess", transform: e },
  typeName: R.ZodEffects,
  ...j(n)
});
class Mt extends A {
  _parse(t) {
    return this._getType(t) === N.undefined ? Le(void 0) : this._def.innerType._parse(t);
  }
  unwrap() {
    return this._def.innerType;
  }
}
Mt.create = (e, t) => new Mt({
  innerType: e,
  typeName: R.ZodOptional,
  ...j(t)
});
class Dn extends A {
  _parse(t) {
    return this._getType(t) === N.null ? Le(null) : this._def.innerType._parse(t);
  }
  unwrap() {
    return this._def.innerType;
  }
}
Dn.create = (e, t) => new Dn({
  innerType: e,
  typeName: R.ZodNullable,
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
  typeName: R.ZodDefault,
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
  typeName: R.ZodCatch,
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
  typeName: R.ZodNaN,
  ...j(e)
});
const P0 = Symbol("zod_brand");
class Uf extends A {
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
        return o.status === "aborted" ? I : o.status === "dirty" ? (n.dirty(), Wf(o.value)) : this._def.out._parseAsync({
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
      typeName: R.ZodPipeline
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
  typeName: R.ZodReadonly,
  ...j(t)
});
const Zf = (e, t = {}, n) => e ? mr.create().superRefine((r, i) => {
  var o, s;
  if (!e(r)) {
    const l = typeof t == "function" ? t(r) : typeof t == "string" ? { message: t } : t, a = (s = (o = l.fatal) !== null && o !== void 0 ? o : n) !== null && s !== void 0 ? s : !0, u = typeof l == "string" ? { message: l } : l;
    i.addIssue({ code: "custom", ...u, fatal: a });
  }
}) : mr.create(), L0 = {
  object: te.lazycreate
};
var R;
(function(e) {
  e.ZodString = "ZodString", e.ZodNumber = "ZodNumber", e.ZodNaN = "ZodNaN", e.ZodBigInt = "ZodBigInt", e.ZodBoolean = "ZodBoolean", e.ZodDate = "ZodDate", e.ZodSymbol = "ZodSymbol", e.ZodUndefined = "ZodUndefined", e.ZodNull = "ZodNull", e.ZodAny = "ZodAny", e.ZodUnknown = "ZodUnknown", e.ZodNever = "ZodNever", e.ZodVoid = "ZodVoid", e.ZodArray = "ZodArray", e.ZodObject = "ZodObject", e.ZodUnion = "ZodUnion", e.ZodDiscriminatedUnion = "ZodDiscriminatedUnion", e.ZodIntersection = "ZodIntersection", e.ZodTuple = "ZodTuple", e.ZodRecord = "ZodRecord", e.ZodMap = "ZodMap", e.ZodSet = "ZodSet", e.ZodFunction = "ZodFunction", e.ZodLazy = "ZodLazy", e.ZodLiteral = "ZodLiteral", e.ZodEnum = "ZodEnum", e.ZodEffects = "ZodEffects", e.ZodNativeEnum = "ZodNativeEnum", e.ZodOptional = "ZodOptional", e.ZodNullable = "ZodNullable", e.ZodDefault = "ZodDefault", e.ZodCatch = "ZodCatch", e.ZodPromise = "ZodPromise", e.ZodBranded = "ZodBranded", e.ZodPipeline = "ZodPipeline", e.ZodReadonly = "ZodReadonly";
})(R || (R = {}));
const R0 = (e, t = {
  message: `Input not instance of ${e.name}`
}) => Zf((n) => n instanceof e, t), Bf = rt.create, Hf = un.create, D0 = Vo.create, M0 = cn.create, Yf = fi.create, I0 = Ln.create, j0 = jo.create, z0 = pi.create, A0 = hi.create, F0 = mr.create, V0 = En.create, W0 = Ft.create, $0 = zo.create, U0 = lt.create, Z0 = te.create, B0 = te.strictCreate, H0 = mi.create, Y0 = ss.create, Q0 = vi.create, X0 = _t.create, G0 = yi.create, K0 = Ao.create, q0 = Rn.create, J0 = sr.create, b0 = gi.create, ev = wi.create, tv = dn.create, nv = _i.create, rv = vr.create, lc = ut.create, iv = Mt.create, ov = Dn.create, sv = ut.createWithPreprocess, lv = Oi.create, av = () => Bf().optional(), uv = () => Hf().optional(), cv = () => Yf().optional(), dv = {
  string: (e) => rt.create({ ...e, coerce: !0 }),
  number: (e) => un.create({ ...e, coerce: !0 }),
  boolean: (e) => fi.create({
    ...e,
    coerce: !0
  }),
  bigint: (e) => cn.create({ ...e, coerce: !0 }),
  date: (e) => Ln.create({ ...e, coerce: !0 })
}, fv = I;
var ue = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  defaultErrorMap: ci,
  setErrorMap: v0,
  getErrorMap: Do,
  makeIssue: Mo,
  EMPTY_PATH: y0,
  addIssueToContext: O,
  ParseStatus: Te,
  INVALID: I,
  DIRTY: Wf,
  OK: Le,
  isAborted: Bl,
  isDirty: Hl,
  isValid: di,
  isAsync: Io,
  get util() {
    return U;
  },
  get objectUtil() {
    return Zl;
  },
  ZodParsedType: N,
  getParsedType: Qt,
  ZodType: A,
  ZodString: rt,
  ZodNumber: un,
  ZodBigInt: cn,
  ZodBoolean: fi,
  ZodDate: Ln,
  ZodSymbol: jo,
  ZodUndefined: pi,
  ZodNull: hi,
  ZodAny: mr,
  ZodUnknown: En,
  ZodNever: Ft,
  ZodVoid: zo,
  ZodArray: lt,
  ZodObject: te,
  ZodUnion: mi,
  ZodDiscriminatedUnion: ss,
  ZodIntersection: vi,
  ZodTuple: _t,
  ZodRecord: yi,
  ZodMap: Ao,
  ZodSet: Rn,
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
  BRAND: P0,
  ZodBranded: Uf,
  ZodPipeline: Oi,
  ZodReadonly: Wo,
  custom: Zf,
  Schema: A,
  ZodSchema: A,
  late: L0,
  get ZodFirstPartyTypeKind() {
    return R;
  },
  coerce: dv,
  any: F0,
  array: U0,
  bigint: M0,
  boolean: Yf,
  date: I0,
  discriminatedUnion: Y0,
  effect: lc,
  enum: tv,
  function: J0,
  instanceof: R0,
  intersection: Q0,
  lazy: b0,
  literal: ev,
  map: K0,
  nan: D0,
  nativeEnum: nv,
  never: W0,
  null: A0,
  nullable: ov,
  number: Hf,
  object: Z0,
  oboolean: cv,
  onumber: uv,
  optional: iv,
  ostring: av,
  pipeline: lv,
  preprocess: sv,
  promise: rv,
  record: G0,
  set: q0,
  strictObject: B0,
  string: Bf,
  symbol: j0,
  transformer: lc,
  tuple: X0,
  undefined: z0,
  union: H0,
  unknown: V0,
  void: $0,
  NEVER: fv,
  ZodIssueCode: _,
  quotelessJson: m0,
  ZodError: st
});
const Qf = ue.object({
  MemberCount: ue.number(),
  OnTrackCount: ue.number()
}), Xf = ue.object({
  MemberCount: ue.number(),
  ContributionAmount: ue.number()
}), Gf = ue.object({
  ContributionAmount: ue.number()
}), pv = ue.object({
  Name: ue.string(),
  MemberCount: ue.number(),
  BUKStatus: Qf,
  SamvirkStatus: Xf,
  AHStatus: Gf
}), hv = ue.object({
  Title: ue.string(),
  DateFrom: ue.string(),
  DateTo: ue.string(),
  MyShareTargetOnDate: ue.number(),
  MyShareNextTreshold: ue.number(),
  SamvirkGoalPerMonth: ue.number(),
  Teams: ue.array(pv)
}), mv = ue.array(hv);
Qf.or(Xf).or(Gf);
function kt(e) {
  const t = Object.prototype.toString.call(e);
  return e instanceof Date || typeof e == "object" && t === "[object Date]" ? new e.constructor(+e) : typeof e == "number" || t === "[object Number]" || typeof e == "string" || t === "[object String]" ? new Date(e) : /* @__PURE__ */ new Date(NaN);
}
function Mn(e, t) {
  return e instanceof Date ? new e.constructor(t) : new Date(t);
}
const Kf = 6048e5, vv = 864e5;
let yv = {};
function ls() {
  return yv;
}
function Si(e, t) {
  var l, a, u, p;
  const n = ls(), r = (t == null ? void 0 : t.weekStartsOn) ?? ((a = (l = t == null ? void 0 : t.locale) == null ? void 0 : l.options) == null ? void 0 : a.weekStartsOn) ?? n.weekStartsOn ?? ((p = (u = n.locale) == null ? void 0 : u.options) == null ? void 0 : p.weekStartsOn) ?? 0, i = kt(e), o = i.getDay(), s = (o < r ? 7 : 0) + o - r;
  return i.setDate(i.getDate() - s), i.setHours(0, 0, 0, 0), i;
}
function $o(e) {
  return Si(e, { weekStartsOn: 1 });
}
function qf(e) {
  const t = kt(e), n = t.getFullYear(), r = Mn(e, 0);
  r.setFullYear(n + 1, 0, 4), r.setHours(0, 0, 0, 0);
  const i = $o(r), o = Mn(e, 0);
  o.setFullYear(n, 0, 4), o.setHours(0, 0, 0, 0);
  const s = $o(o);
  return t.getTime() >= i.getTime() ? n + 1 : t.getTime() >= s.getTime() ? n : n - 1;
}
function ac(e) {
  const t = kt(e);
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
function gv(e, t) {
  const n = ac(e), r = ac(t), i = n.getTime() - uc(n), o = r.getTime() - uc(r);
  return Math.round((i - o) / vv);
}
function wv(e) {
  const t = qf(e), n = Mn(e, 0);
  return n.setFullYear(t, 0, 4), n.setHours(0, 0, 0, 0), $o(n);
}
function _v(e) {
  return e instanceof Date || typeof e == "object" && Object.prototype.toString.call(e) === "[object Date]";
}
function kv(e) {
  if (!_v(e) && typeof e != "number")
    return !1;
  const t = kt(e);
  return !isNaN(Number(t));
}
function Sv(e) {
  const t = kt(e), n = Mn(e, 0);
  return n.setFullYear(t.getFullYear(), 0, 1), n.setHours(0, 0, 0, 0), n;
}
const xv = {
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
}, Ev = (e, t, n) => {
  let r;
  const i = xv[e];
  return typeof i == "string" ? r = i : t === 1 ? r = i.one : r = i.other.replace("{{count}}", t.toString()), n != null && n.addSuffix ? n.comparison && n.comparison > 0 ? "in " + r : r + " ago" : r;
};
function Bs(e) {
  return (t = {}) => {
    const n = t.width ? String(t.width) : e.defaultWidth;
    return e.formats[n] || e.formats[e.defaultWidth];
  };
}
const Cv = {
  full: "EEEE, MMMM do, y",
  long: "MMMM do, y",
  medium: "MMM d, y",
  short: "MM/dd/yyyy"
}, Tv = {
  full: "h:mm:ss a zzzz",
  long: "h:mm:ss a z",
  medium: "h:mm:ss a",
  short: "h:mm a"
}, Nv = {
  full: "{{date}} 'at' {{time}}",
  long: "{{date}} 'at' {{time}}",
  medium: "{{date}}, {{time}}",
  short: "{{date}}, {{time}}"
}, Ov = {
  date: Bs({
    formats: Cv,
    defaultWidth: "full"
  }),
  time: Bs({
    formats: Tv,
    defaultWidth: "full"
  }),
  dateTime: Bs({
    formats: Nv,
    defaultWidth: "full"
  })
}, Pv = {
  lastWeek: "'last' eeee 'at' p",
  yesterday: "'yesterday at' p",
  today: "'today at' p",
  tomorrow: "'tomorrow at' p",
  nextWeek: "eeee 'at' p",
  other: "P"
}, Lv = (e, t, n, r) => Pv[e];
function Lr(e) {
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
const Rv = {
  narrow: ["B", "A"],
  abbreviated: ["BC", "AD"],
  wide: ["Before Christ", "Anno Domini"]
}, Dv = {
  narrow: ["1", "2", "3", "4"],
  abbreviated: ["Q1", "Q2", "Q3", "Q4"],
  wide: ["1st quarter", "2nd quarter", "3rd quarter", "4th quarter"]
}, Mv = {
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
}, Iv = {
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
}, jv = {
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
}, zv = {
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
}, Av = (e, t) => {
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
}, Fv = {
  ordinalNumber: Av,
  era: Lr({
    values: Rv,
    defaultWidth: "wide"
  }),
  quarter: Lr({
    values: Dv,
    defaultWidth: "wide",
    argumentCallback: (e) => e - 1
  }),
  month: Lr({
    values: Mv,
    defaultWidth: "wide"
  }),
  day: Lr({
    values: Iv,
    defaultWidth: "wide"
  }),
  dayPeriod: Lr({
    values: jv,
    defaultWidth: "wide",
    formattingValues: zv,
    defaultFormattingWidth: "wide"
  })
};
function Rr(e) {
  return (t, n = {}) => {
    const r = n.width, i = r && e.matchPatterns[r] || e.matchPatterns[e.defaultMatchWidth], o = t.match(i);
    if (!o)
      return null;
    const s = o[0], l = r && e.parsePatterns[r] || e.parsePatterns[e.defaultParseWidth], a = Array.isArray(l) ? Wv(l, (h) => h.test(s)) : (
      // eslint-disable-next-line @typescript-eslint/no-explicit-any -- I challange you to fix the type
      Vv(l, (h) => h.test(s))
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
function Vv(e, t) {
  for (const n in e)
    if (Object.prototype.hasOwnProperty.call(e, n) && t(e[n]))
      return n;
}
function Wv(e, t) {
  for (let n = 0; n < e.length; n++)
    if (t(e[n]))
      return n;
}
function $v(e) {
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
const Uv = /^(\d+)(th|st|nd|rd)?/i, Zv = /\d+/i, Bv = {
  narrow: /^(b|a)/i,
  abbreviated: /^(b\.?\s?c\.?|b\.?\s?c\.?\s?e\.?|a\.?\s?d\.?|c\.?\s?e\.?)/i,
  wide: /^(before christ|before common era|anno domini|common era)/i
}, Hv = {
  any: [/^b/i, /^(a|c)/i]
}, Yv = {
  narrow: /^[1234]/i,
  abbreviated: /^q[1234]/i,
  wide: /^[1234](th|st|nd|rd)? quarter/i
}, Qv = {
  any: [/1/i, /2/i, /3/i, /4/i]
}, Xv = {
  narrow: /^[jfmasond]/i,
  abbreviated: /^(jan|feb|mar|apr|may|jun|jul|aug|sep|oct|nov|dec)/i,
  wide: /^(january|february|march|april|may|june|july|august|september|october|november|december)/i
}, Gv = {
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
}, Kv = {
  narrow: /^[smtwf]/i,
  short: /^(su|mo|tu|we|th|fr|sa)/i,
  abbreviated: /^(sun|mon|tue|wed|thu|fri|sat)/i,
  wide: /^(sunday|monday|tuesday|wednesday|thursday|friday|saturday)/i
}, qv = {
  narrow: [/^s/i, /^m/i, /^t/i, /^w/i, /^t/i, /^f/i, /^s/i],
  any: [/^su/i, /^m/i, /^tu/i, /^w/i, /^th/i, /^f/i, /^sa/i]
}, Jv = {
  narrow: /^(a|p|mi|n|(in the|at) (morning|afternoon|evening|night))/i,
  any: /^([ap]\.?\s?m\.?|midnight|noon|(in the|at) (morning|afternoon|evening|night))/i
}, bv = {
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
}, ey = {
  ordinalNumber: $v({
    matchPattern: Uv,
    parsePattern: Zv,
    valueCallback: (e) => parseInt(e, 10)
  }),
  era: Rr({
    matchPatterns: Bv,
    defaultMatchWidth: "wide",
    parsePatterns: Hv,
    defaultParseWidth: "any"
  }),
  quarter: Rr({
    matchPatterns: Yv,
    defaultMatchWidth: "wide",
    parsePatterns: Qv,
    defaultParseWidth: "any",
    valueCallback: (e) => e + 1
  }),
  month: Rr({
    matchPatterns: Xv,
    defaultMatchWidth: "wide",
    parsePatterns: Gv,
    defaultParseWidth: "any"
  }),
  day: Rr({
    matchPatterns: Kv,
    defaultMatchWidth: "wide",
    parsePatterns: qv,
    defaultParseWidth: "any"
  }),
  dayPeriod: Rr({
    matchPatterns: Jv,
    defaultMatchWidth: "any",
    parsePatterns: bv,
    defaultParseWidth: "any"
  })
}, ty = {
  code: "en-US",
  formatDistance: Ev,
  formatLong: Ov,
  formatRelative: Lv,
  localize: Fv,
  match: ey,
  options: {
    weekStartsOn: 0,
    firstWeekContainsDate: 1
  }
};
function ny(e) {
  const t = kt(e);
  return gv(t, Sv(t)) + 1;
}
function ry(e) {
  const t = kt(e), n = $o(t).getTime() - wv(t).getTime();
  return Math.round(n / Kf) + 1;
}
function Jf(e, t) {
  var p, h, m, y;
  const n = kt(e), r = n.getFullYear(), i = ls(), o = (t == null ? void 0 : t.firstWeekContainsDate) ?? ((h = (p = t == null ? void 0 : t.locale) == null ? void 0 : p.options) == null ? void 0 : h.firstWeekContainsDate) ?? i.firstWeekContainsDate ?? ((y = (m = i.locale) == null ? void 0 : m.options) == null ? void 0 : y.firstWeekContainsDate) ?? 1, s = Mn(e, 0);
  s.setFullYear(r + 1, 0, o), s.setHours(0, 0, 0, 0);
  const l = Si(s, t), a = Mn(e, 0);
  a.setFullYear(r, 0, o), a.setHours(0, 0, 0, 0);
  const u = Si(a, t);
  return n.getTime() >= l.getTime() ? r + 1 : n.getTime() >= u.getTime() ? r : r - 1;
}
function iy(e, t) {
  var l, a, u, p;
  const n = ls(), r = (t == null ? void 0 : t.firstWeekContainsDate) ?? ((a = (l = t == null ? void 0 : t.locale) == null ? void 0 : l.options) == null ? void 0 : a.firstWeekContainsDate) ?? n.firstWeekContainsDate ?? ((p = (u = n.locale) == null ? void 0 : u.options) == null ? void 0 : p.firstWeekContainsDate) ?? 1, i = Jf(e, t), o = Mn(e, 0);
  return o.setFullYear(i, 0, r), o.setHours(0, 0, 0, 0), Si(o, t);
}
function oy(e, t) {
  const n = kt(e), r = Si(n, t).getTime() - iy(n, t).getTime();
  return Math.round(r / Kf) + 1;
}
function Z(e, t) {
  const n = e < 0 ? "-" : "", r = Math.abs(e).toString().padStart(t, "0");
  return n + r;
}
const Ut = {
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
}, Wn = {
  am: "am",
  pm: "pm",
  midnight: "midnight",
  noon: "noon",
  morning: "morning",
  afternoon: "afternoon",
  evening: "evening",
  night: "night"
}, sy = {
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
    const i = Jf(e, r), o = i > 0 ? i : 1 - i;
    if (t === "YY") {
      const s = o % 100;
      return Z(s, 2);
    }
    return t === "Yo" ? n.ordinalNumber(o, { unit: "year" }) : Z(o, t.length);
  },
  // ISO week-numbering year
  R: function(e, t) {
    const n = qf(e);
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
    const i = oy(e, r);
    return t === "wo" ? n.ordinalNumber(i, { unit: "week" }) : Z(i, t.length);
  },
  // ISO week of year
  I: function(e, t, n) {
    const r = ry(e);
    return t === "Io" ? n.ordinalNumber(r, { unit: "week" }) : Z(r, t.length);
  },
  // Day of the month
  d: function(e, t, n) {
    return t === "do" ? n.ordinalNumber(e.getDate(), { unit: "date" }) : Ut.d(e, t);
  },
  // Day of year
  D: function(e, t, n) {
    const r = ny(e);
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
    return t === "Ko" ? n.ordinalNumber(r, { unit: "hour" }) : Z(r, t.length);
  },
  // Hour [1-24]
  k: function(e, t, n) {
    let r = e.getHours();
    return r === 0 && (r = 24), t === "ko" ? n.ordinalNumber(r, { unit: "hour" }) : Z(r, t.length);
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
    return Z(o, t.length);
  },
  // Milliseconds timestamp
  T: function(e, t, n, r) {
    const o = (r._originalDate || e).getTime();
    return Z(o, t.length);
  }
};
function cc(e, t = "") {
  const n = e > 0 ? "-" : "+", r = Math.abs(e), i = Math.floor(r / 60), o = r % 60;
  return o === 0 ? n + String(i) : n + String(i) + t + Z(o, 2);
}
function dc(e, t) {
  return e % 60 === 0 ? (e > 0 ? "-" : "+") + Z(Math.abs(e) / 60, 2) : gn(e, t);
}
function gn(e, t = "") {
  const n = e > 0 ? "-" : "+", r = Math.abs(e), i = Z(Math.floor(r / 60), 2), o = Z(r % 60, 2);
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
}, bf = (e, t) => {
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
}, ly = (e, t) => {
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
  return o.replace("{{date}}", fc(r, t)).replace("{{time}}", bf(i, t));
}, ay = {
  p: bf,
  P: ly
}, uy = /^D+$/, cy = /^Y+$/, dy = ["D", "DD", "YY", "YYYY"];
function fy(e) {
  return uy.test(e);
}
function py(e) {
  return cy.test(e);
}
function pc(e, t, n) {
  const r = hy(e, t, n);
  if (console.warn(r), dy.includes(e))
    throw new RangeError(r);
}
function hy(e, t, n) {
  const r = e[0] === "Y" ? "years" : "days of the month";
  return `Use \`${e.toLowerCase()}\` instead of \`${e}\` (in \`${t}\`) for formatting ${r} to the input \`${n}\`; see: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md`;
}
const my = /[yYQqMLwIdDecihHKkms]o|(\w)\1*|''|'(''|[^'])+('|$)|./g, vy = /P+p+|P+|p+|''|'(''|[^'])+('|$)|./g, yy = /^'([^]*?)'?$/, gy = /''/g, wy = /[a-zA-Z]/;
function _y(e, t, n) {
  var p, h, m, y, w, k, F, d;
  const r = ls(), i = (n == null ? void 0 : n.locale) ?? r.locale ?? ty, o = (n == null ? void 0 : n.firstWeekContainsDate) ?? ((h = (p = n == null ? void 0 : n.locale) == null ? void 0 : p.options) == null ? void 0 : h.firstWeekContainsDate) ?? r.firstWeekContainsDate ?? ((y = (m = r.locale) == null ? void 0 : m.options) == null ? void 0 : y.firstWeekContainsDate) ?? 1, s = (n == null ? void 0 : n.weekStartsOn) ?? ((k = (w = n == null ? void 0 : n.locale) == null ? void 0 : w.options) == null ? void 0 : k.weekStartsOn) ?? r.weekStartsOn ?? ((d = (F = r.locale) == null ? void 0 : F.options) == null ? void 0 : d.weekStartsOn) ?? 0, l = kt(e);
  if (!kv(l))
    throw new RangeError("Invalid time value");
  const a = {
    firstWeekContainsDate: o,
    weekStartsOn: s,
    locale: i,
    _originalDate: l
  };
  return t.match(vy).map(function(c) {
    const f = c[0];
    if (f === "p" || f === "P") {
      const v = ay[f];
      return v(c, i.formatLong);
    }
    return c;
  }).join("").match(my).map(function(c) {
    if (c === "''")
      return "'";
    const f = c[0];
    if (f === "'")
      return ky(c);
    const v = sy[f];
    if (v)
      return !(n != null && n.useAdditionalWeekYearTokens) && py(c) && pc(c, t, String(e)), !(n != null && n.useAdditionalDayOfYearTokens) && fy(c) && pc(c, t, String(e)), v(
        l,
        c,
        i.localize,
        a
      );
    if (f.match(wy))
      throw new RangeError(
        "Format string contains an unescaped latin alphabet character `" + f + "`"
      );
    return c;
  }).join("");
}
function ky(e) {
  const t = e.match(yy);
  return t ? t[1].replace(gy, "'") : e;
}
const hc = (e) => {
  const t = new Date(e);
  return _y(t, "d.M.yyyy");
}, Hs = (e, t) => {
  switch (console.log(e), !0) {
    case "OnTrackCount" in e:
      return (e.OnTrackCount / e.MemberCount * 100).toLocaleString("fi-FI", { maximumFractionDigits: 1 }) + "%";
    case ("ContributionAmount" in e && "MemberCount" in e):
      return (e.ContributionAmount / (t || 200)).toLocaleString("fi-FI", { maximumFractionDigits: 1 }) + "%";
    default:
      return e.ContributionAmount.toLocaleString("fi-FI", {
        maximumFractionDigits: 1
      }) + "€";
  }
}, Sy = (e, t) => {
  const n = e.AHStatus.ContributionAmount, r = e.BUKStatus.OnTrackCount / e.BUKStatus.MemberCount, i = e.SamvirkStatus.ContributionAmount / (t || 200);
  return (n * r * i).toLocaleString("fi-FI", { maximumFractionDigits: 1 });
}, xy = "data:image/svg+xml,%3csvg%20width='328'%20height='145'%20viewBox='0%200%20328%20145'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20d='M0.707031%2045.81L142.59%2021.2011L151.585%2024.3149V19.1253L258.172%200L325.896%2032.7566L327.705%2047.699L282.016%20100.083L255.722%20105.618L239.116%20100.429L235.31%20108.386L29.3534%20145L14.84%20125.688L7.49499%2084.4827L10.7679%2074.235L4.44352%2074.6848L0.707031%2045.81Z'%20fill='black'/%3e%3cpath%20d='M15.9367%2066.6666L11.1727%2083.4531L18.3101%20123.499L29.2877%20130.934L230.467%2093.8565L234.272%2085.8991L254.339%2091.4347L272.675%2086.2451L317.305%2035.3873L255.325%205.11138L155.194%2022.7801L155.045%2030.5437L141.389%2025.2158L5.15625%2049.2573L8.29767%2067.2098L15.9367%2066.6666Z'%20fill='%23FFFF00'/%3e%3cpath%20d='M106.215%2048.601L94.7594%20102.496L75.1463%20105.956L69.2579%2077.538L63.4905%20108.011L43.8774%20111.471L32.3047%2061.6337L49.2884%2058.6376L53.8795%2090.5085L60.657%2056.6345L77.8518%2053.6003L84.6501%2085.0802L89.2239%2051.5937L106.215%2048.601Z'%20fill='black'/%3e%3cpath%20d='M143.793%2043.9891C147.63%2045.2415%20150.768%2047.4004%20153.214%2050.4622C155.657%2053.5241%20157.272%2057.2813%20158.061%2061.734C158.386%2063.5814%20158.559%2065.678%20158.583%2068.0168C158.57%2072.6597%20157.639%2076.9394%20155.791%2080.8558C153.94%2084.7722%20151.256%2088.0416%20147.737%2090.6641C144.219%2093.29%20140.022%2095.0302%20135.14%2095.8883C130.214%2096.7566%20125.834%2096.5767%20122%2095.3485C118.167%2094.1169%20115.043%2091.9857%20112.628%2088.9411C110.21%2085.8966%20108.608%2082.1497%20107.826%2077.6971C107.418%2075.3756%20107.227%2073.2133%20107.266%2071.1997C107.279%2066.5568%20108.22%2062.291%20110.099%2058.3919C111.978%2054.4928%20114.687%2051.2337%20118.229%2048.6044C121.772%2045.9784%20125.983%2044.2313%20130.864%2043.3733C135.646%2042.5326%20139.956%2042.7367%20143.793%2043.9891ZM125.398%2062.2529C123.786%2064.4671%20122.983%2067.2591%20122.99%2070.6289C122.966%2071.608%20123.052%2072.6459%20123.246%2073.7357C123.73%2076.4827%20124.855%2078.5067%20126.626%2079.8075C128.394%2081.1084%20130.747%2081.4993%20133.684%2080.9803C136.621%2080.4614%20138.908%2079.0844%20140.538%2076.8425C142.171%2074.6041%20142.966%2071.8467%20142.928%2068.5842C142.942%2067.5532%20142.852%2066.498%20142.662%2065.4082C142.171%2062.6127%20141.039%2060.575%20139.275%2059.2983C137.514%2058.0217%20135.185%2057.6377%20132.297%2058.1462C129.311%2058.6721%20127.01%2060.0422%20125.398%2062.2529Z'%20fill='black'/%3e%3cpath%20d='M200.34%2035.773C203.589%2037.7174%20205.568%2040.6996%20206.28%2044.7267C206.481%2045.865%20206.571%2046.9237%20206.547%2047.9062C206.533%2051.4247%20205.581%2054.6838%20203.689%2057.6799C201.8%2060.676%20199.108%2063.0667%20195.61%2064.8553L206.612%2082.7732L189.272%2085.8316L179.692%2068.9101L179.748%2087.513L163.971%2090.2946L163.913%2038.4266L187.366%2034.2923C192.767%2033.3374%20197.091%2033.8321%20200.34%2035.773ZM179.689%2058.0639L185.944%2056.9603C189.023%2056.4171%20190.549%2054.6838%20190.521%2051.7569C190.525%2051.5112%20190.497%2051.1999%20190.431%2050.8193C190.248%2049.7779%20189.784%2049.0168%20189.04%2048.5359C188.297%2048.055%20187.283%2047.9304%20186.006%2048.1553L179.751%2049.259L179.689%2058.0639Z'%20fill='black'/%3e%3cpath%20d='M242.344%2049.8035L260.975%2073.1911L242.001%2076.5367L227.353%2056.6191L227.363%2079.1142L211.587%2081.8958L211.528%2030.0278L227.305%2027.2461L227.357%2049.1461L242.085%2024.641L260.916%2021.3197L242.344%2049.8035Z'%20fill='black'/%3e%3c/svg%3e", Ey = "_app_oj5n5_1", Cy = "_workLogoWrapper_oj5n5_12", Ty = "_workLogo_oj5n5_12", Ny = "_reports_oj5n5_22", Oy = "_report_oj5n5_22", Py = "_reportTitle_oj5n5_34", Ly = "_reportTable_oj5n5_45", Ry = "_teamLogo_oj5n5_83", Dy = "_teamGreen_oj5n5_91", My = "_teamOrange_oj5n5_95", Iy = "_teamRed_oj5n5_99", jy = "_teamBlue_oj5n5_103", Ct = {
  app: Ey,
  workLogoWrapper: Cy,
  workLogo: Ty,
  reports: Ny,
  report: Oy,
  reportTitle: Py,
  reportTable: Ly,
  teamLogo: Ry,
  teamGreen: Dy,
  teamOrange: My,
  teamRed: Iy,
  teamBlue: jy
}, zy = async (e) => {
  console.log("prod");
  let t;
  return t = await (await fetch(e)).json(), mv.parse(t);
}, Ay = () => {
  const e = "https://portal.bccsuomi.fi/wp-admin/admin-ajax.php?action=fetch_work_reports", { data: t, error: n, isLoading: r } = h0(e, zy);
  return console.log(t, n, r), /* @__PURE__ */ Q.jsxs("div", { className: Ct.app, children: [
    r && /* @__PURE__ */ Q.jsx("p", { children: "Ladataan dataa..." }),
    n && /* @__PURE__ */ Q.jsxs("p", { children: [
      "Virhe: ",
      n
    ] }),
    t && /* @__PURE__ */ Q.jsxs("div", { children: [
      /* @__PURE__ */ Q.jsx("div", { className: Ct.workLogoWrapper, children: /* @__PURE__ */ Q.jsx("img", { src: xy, alt: "Work logo", className: Ct.workLogo }) }),
      /* @__PURE__ */ Q.jsx("ul", { className: Ct.reports, children: t.map((i) => /* @__PURE__ */ Q.jsxs("li", { className: Ct.report, children: [
        /* @__PURE__ */ Q.jsx("h2", { className: Ct.reportTitle, children: i.Title }),
        /* @__PURE__ */ Q.jsxs("p", { children: [
          hc(i.DateFrom),
          " –",
          " ",
          hc(i.DateTo)
        ] }),
        /* @__PURE__ */ Q.jsxs(
          "table",
          {
            className: Ct.reportTable,
            cellPadding: "8",
            cellSpacing: 0,
            children: [
              /* @__PURE__ */ Q.jsx("thead", { children: /* @__PURE__ */ Q.jsxs("tr", { children: [
                /* @__PURE__ */ Q.jsx("td", {}),
                /* @__PURE__ */ Q.jsx("td", { children: "AH" }),
                /* @__PURE__ */ Q.jsx("td", { children: "BUK" }),
                /* @__PURE__ */ Q.jsx("td", { children: "Samvirk" }),
                /* @__PURE__ */ Q.jsx("td", { children: "Tulos" })
              ] }) }),
              /* @__PURE__ */ Q.jsx("tbody", { children: i.Teams.map((o) => /* @__PURE__ */ Q.jsxs("tr", { children: [
                /* @__PURE__ */ Q.jsx("td", { children: /* @__PURE__ */ Q.jsx(
                  "div",
                  {
                    className: `${Ct.teamLogo} ${Ct["team" + o.Name]}`
                  }
                ) }),
                /* @__PURE__ */ Q.jsx("td", { children: Hs(o.AHStatus) }),
                /* @__PURE__ */ Q.jsx("td", { children: Hs(o.BUKStatus) }),
                /* @__PURE__ */ Q.jsx("td", { children: Hs(
                  o.SamvirkStatus,
                  i.SamvirkGoalPerMonth
                ) }),
                /* @__PURE__ */ Q.jsx("td", { children: Sy(o, i.SamvirkGoalPerMonth) })
              ] }, o.Name)) })
            ]
          }
        )
      ] }, i.Title)) })
    ] })
  ] });
}, Fy = document.getElementById("work-root"), Vy = Pf(Fy);
Vy.render(
  /* @__PURE__ */ Q.jsx(Zo.StrictMode, { children: /* @__PURE__ */ Q.jsx(Ay, {}) })
);
