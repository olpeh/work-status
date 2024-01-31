function ri(A) {
  return A && A.__esModule && Object.prototype.hasOwnProperty.call(A, "default") ? A.default : A;
}
var Gg = { exports: {} }, co = {}, Wg = { exports: {} }, j = {};
/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var ni = Symbol.for("react.element"), P0 = Symbol.for("react.portal"), V0 = Symbol.for("react.fragment"), G0 = Symbol.for("react.strict_mode"), W0 = Symbol.for("react.profiler"), Y0 = Symbol.for("react.provider"), X0 = Symbol.for("react.context"), Z0 = Symbol.for("react.forward_ref"), j0 = Symbol.for("react.suspense"), z0 = Symbol.for("react.memo"), J0 = Symbol.for("react.lazy"), Bd = Symbol.iterator;
function $0(A) {
  return A === null || typeof A != "object" ? null : (A = Bd && A[Bd] || A["@@iterator"], typeof A == "function" ? A : null);
}
var Yg = { isMounted: function() {
  return !1;
}, enqueueForceUpdate: function() {
}, enqueueReplaceState: function() {
}, enqueueSetState: function() {
} }, Xg = Object.assign, Zg = {};
function _n(A, e, t) {
  this.props = A, this.context = e, this.refs = Zg, this.updater = t || Yg;
}
_n.prototype.isReactComponent = {};
_n.prototype.setState = function(A, e) {
  if (typeof A != "object" && typeof A != "function" && A != null)
    throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");
  this.updater.enqueueSetState(this, A, e, "setState");
};
_n.prototype.forceUpdate = function(A) {
  this.updater.enqueueForceUpdate(this, A, "forceUpdate");
};
function jg() {
}
jg.prototype = _n.prototype;
function nf(A, e, t) {
  this.props = A, this.context = e, this.refs = Zg, this.updater = t || Yg;
}
var af = nf.prototype = new jg();
af.constructor = nf;
Xg(af, _n.prototype);
af.isPureReactComponent = !0;
var gd = Array.isArray, zg = Object.prototype.hasOwnProperty, sf = { current: null }, Jg = { key: !0, ref: !0, __self: !0, __source: !0 };
function $g(A, e, t) {
  var r, n = {}, a = null, i = null;
  if (e != null)
    for (r in e.ref !== void 0 && (i = e.ref), e.key !== void 0 && (a = "" + e.key), e)
      zg.call(e, r) && !Jg.hasOwnProperty(r) && (n[r] = e[r]);
  var s = arguments.length - 2;
  if (s === 1)
    n.children = t;
  else if (1 < s) {
    for (var o = Array(s), u = 0; u < s; u++)
      o[u] = arguments[u + 2];
    n.children = o;
  }
  if (A && A.defaultProps)
    for (r in s = A.defaultProps, s)
      n[r] === void 0 && (n[r] = s[r]);
  return { $$typeof: ni, type: A, key: a, ref: i, props: n, _owner: sf.current };
}
function q0(A, e) {
  return { $$typeof: ni, type: A.type, key: e, ref: A.ref, props: A.props, _owner: A._owner };
}
function of(A) {
  return typeof A == "object" && A !== null && A.$$typeof === ni;
}
function Av(A) {
  var e = { "=": "=0", ":": "=2" };
  return "$" + A.replace(/[=:]/g, function(t) {
    return e[t];
  });
}
var hd = /\/+/g;
function Go(A, e) {
  return typeof A == "object" && A !== null && A.key != null ? Av("" + A.key) : e.toString(36);
}
function es(A, e, t, r, n) {
  var a = typeof A;
  (a === "undefined" || a === "boolean") && (A = null);
  var i = !1;
  if (A === null)
    i = !0;
  else
    switch (a) {
      case "string":
      case "number":
        i = !0;
        break;
      case "object":
        switch (A.$$typeof) {
          case ni:
          case P0:
            i = !0;
        }
    }
  if (i)
    return i = A, n = n(i), A = r === "" ? "." + Go(i, 0) : r, gd(n) ? (t = "", A != null && (t = A.replace(hd, "$&/") + "/"), es(n, e, t, "", function(u) {
      return u;
    })) : n != null && (of(n) && (n = q0(n, t + (!n.key || i && i.key === n.key ? "" : ("" + n.key).replace(hd, "$&/") + "/") + A)), e.push(n)), 1;
  if (i = 0, r = r === "" ? "." : r + ":", gd(A))
    for (var s = 0; s < A.length; s++) {
      a = A[s];
      var o = r + Go(a, s);
      i += es(a, e, t, o, n);
    }
  else if (o = $0(A), typeof o == "function")
    for (A = o.call(A), s = 0; !(a = A.next()).done; )
      a = a.value, o = r + Go(a, s++), i += es(a, e, t, o, n);
  else if (a === "object")
    throw e = String(A), Error("Objects are not valid as a React child (found: " + (e === "[object Object]" ? "object with keys {" + Object.keys(A).join(", ") + "}" : e) + "). If you meant to render a collection of children, use an array instead.");
  return i;
}
function di(A, e, t) {
  if (A == null)
    return A;
  var r = [], n = 0;
  return es(A, r, "", "", function(a) {
    return e.call(t, a, n++);
  }), r;
}
function ev(A) {
  if (A._status === -1) {
    var e = A._result;
    e = e(), e.then(function(t) {
      (A._status === 0 || A._status === -1) && (A._status = 1, A._result = t);
    }, function(t) {
      (A._status === 0 || A._status === -1) && (A._status = 2, A._result = t);
    }), A._status === -1 && (A._status = 0, A._result = e);
  }
  if (A._status === 1)
    return A._result.default;
  throw A._result;
}
var oe = { current: null }, ts = { transition: null }, tv = { ReactCurrentDispatcher: oe, ReactCurrentBatchConfig: ts, ReactCurrentOwner: sf };
j.Children = { map: di, forEach: function(A, e, t) {
  di(A, function() {
    e.apply(this, arguments);
  }, t);
}, count: function(A) {
  var e = 0;
  return di(A, function() {
    e++;
  }), e;
}, toArray: function(A) {
  return di(A, function(e) {
    return e;
  }) || [];
}, only: function(A) {
  if (!of(A))
    throw Error("React.Children.only expected to receive a single React element child.");
  return A;
} };
j.Component = _n;
j.Fragment = V0;
j.Profiler = W0;
j.PureComponent = nf;
j.StrictMode = G0;
j.Suspense = j0;
j.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = tv;
j.cloneElement = function(A, e, t) {
  if (A == null)
    throw Error("React.cloneElement(...): The argument must be a React element, but you passed " + A + ".");
  var r = Xg({}, A.props), n = A.key, a = A.ref, i = A._owner;
  if (e != null) {
    if (e.ref !== void 0 && (a = e.ref, i = sf.current), e.key !== void 0 && (n = "" + e.key), A.type && A.type.defaultProps)
      var s = A.type.defaultProps;
    for (o in e)
      zg.call(e, o) && !Jg.hasOwnProperty(o) && (r[o] = e[o] === void 0 && s !== void 0 ? s[o] : e[o]);
  }
  var o = arguments.length - 2;
  if (o === 1)
    r.children = t;
  else if (1 < o) {
    s = Array(o);
    for (var u = 0; u < o; u++)
      s[u] = arguments[u + 2];
    r.children = s;
  }
  return { $$typeof: ni, type: A.type, key: n, ref: a, props: r, _owner: i };
};
j.createContext = function(A) {
  return A = { $$typeof: X0, _currentValue: A, _currentValue2: A, _threadCount: 0, Provider: null, Consumer: null, _defaultValue: null, _globalName: null }, A.Provider = { $$typeof: Y0, _context: A }, A.Consumer = A;
};
j.createElement = $g;
j.createFactory = function(A) {
  var e = $g.bind(null, A);
  return e.type = A, e;
};
j.createRef = function() {
  return { current: null };
};
j.forwardRef = function(A) {
  return { $$typeof: Z0, render: A };
};
j.isValidElement = of;
j.lazy = function(A) {
  return { $$typeof: J0, _payload: { _status: -1, _result: A }, _init: ev };
};
j.memo = function(A, e) {
  return { $$typeof: z0, type: A, compare: e === void 0 ? null : e };
};
j.startTransition = function(A) {
  var e = ts.transition;
  ts.transition = {};
  try {
    A();
  } finally {
    ts.transition = e;
  }
};
j.unstable_act = function() {
  throw Error("act(...) is not supported in production builds of React.");
};
j.useCallback = function(A, e) {
  return oe.current.useCallback(A, e);
};
j.useContext = function(A) {
  return oe.current.useContext(A);
};
j.useDebugValue = function() {
};
j.useDeferredValue = function(A) {
  return oe.current.useDeferredValue(A);
};
j.useEffect = function(A, e) {
  return oe.current.useEffect(A, e);
};
j.useId = function() {
  return oe.current.useId();
};
j.useImperativeHandle = function(A, e, t) {
  return oe.current.useImperativeHandle(A, e, t);
};
j.useInsertionEffect = function(A, e) {
  return oe.current.useInsertionEffect(A, e);
};
j.useLayoutEffect = function(A, e) {
  return oe.current.useLayoutEffect(A, e);
};
j.useMemo = function(A, e) {
  return oe.current.useMemo(A, e);
};
j.useReducer = function(A, e, t) {
  return oe.current.useReducer(A, e, t);
};
j.useRef = function(A) {
  return oe.current.useRef(A);
};
j.useState = function(A) {
  return oe.current.useState(A);
};
j.useSyncExternalStore = function(A, e, t) {
  return oe.current.useSyncExternalStore(A, e, t);
};
j.useTransition = function() {
  return oe.current.useTransition();
};
j.version = "18.2.0";
Wg.exports = j;
var IA = Wg.exports;
const fo = /* @__PURE__ */ ri(IA);
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var rv = IA, nv = Symbol.for("react.element"), av = Symbol.for("react.fragment"), iv = Object.prototype.hasOwnProperty, sv = rv.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner, ov = { key: !0, ref: !0, __self: !0, __source: !0 };
function qg(A, e, t) {
  var r, n = {}, a = null, i = null;
  t !== void 0 && (a = "" + t), e.key !== void 0 && (a = "" + e.key), e.ref !== void 0 && (i = e.ref);
  for (r in e)
    iv.call(e, r) && !ov.hasOwnProperty(r) && (n[r] = e[r]);
  if (A && A.defaultProps)
    for (r in e = A.defaultProps, e)
      n[r] === void 0 && (n[r] = e[r]);
  return { $$typeof: nv, type: A, key: a, ref: i, props: n, _owner: sv.current };
}
co.Fragment = av;
co.jsx = qg;
co.jsxs = qg;
Gg.exports = co;
var P = Gg.exports, Ah = { exports: {} }, ye = {}, eh = { exports: {} }, th = {};
/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
(function(A) {
  function e(H, O) {
    var k = H.length;
    H.push(O);
    A:
      for (; 0 < k; ) {
        var G = k - 1 >>> 1, X = H[G];
        if (0 < n(X, O))
          H[G] = O, H[k] = X, k = G;
        else
          break A;
      }
  }
  function t(H) {
    return H.length === 0 ? null : H[0];
  }
  function r(H) {
    if (H.length === 0)
      return null;
    var O = H[0], k = H.pop();
    if (k !== O) {
      H[0] = k;
      A:
        for (var G = 0, X = H.length, hA = X >>> 1; G < hA; ) {
          var yA = 2 * (G + 1) - 1, FA = H[yA], DA = yA + 1, OA = H[DA];
          if (0 > n(FA, k))
            DA < X && 0 > n(OA, FA) ? (H[G] = OA, H[DA] = k, G = DA) : (H[G] = FA, H[yA] = k, G = yA);
          else if (DA < X && 0 > n(OA, k))
            H[G] = OA, H[DA] = k, G = DA;
          else
            break A;
        }
    }
    return O;
  }
  function n(H, O) {
    var k = H.sortIndex - O.sortIndex;
    return k !== 0 ? k : H.id - O.id;
  }
  if (typeof performance == "object" && typeof performance.now == "function") {
    var a = performance;
    A.unstable_now = function() {
      return a.now();
    };
  } else {
    var i = Date, s = i.now();
    A.unstable_now = function() {
      return i.now() - s;
    };
  }
  var o = [], u = [], l = 1, c = null, g = 3, w = !1, p = !1, C = !1, Q = typeof setTimeout == "function" ? setTimeout : null, d = typeof clearTimeout == "function" ? clearTimeout : null, f = typeof setImmediate < "u" ? setImmediate : null;
  typeof navigator < "u" && navigator.scheduling !== void 0 && navigator.scheduling.isInputPending !== void 0 && navigator.scheduling.isInputPending.bind(navigator.scheduling);
  function B(H) {
    for (var O = t(u); O !== null; ) {
      if (O.callback === null)
        r(u);
      else if (O.startTime <= H)
        r(u), O.sortIndex = O.expirationTime, e(o, O);
      else
        break;
      O = t(u);
    }
  }
  function h(H) {
    if (C = !1, B(H), !p)
      if (t(o) !== null)
        p = !0, z(m);
      else {
        var O = t(u);
        O !== null && tA(h, O.startTime - H);
      }
  }
  function m(H, O) {
    p = !1, C && (C = !1, d(y), y = -1), w = !0;
    var k = g;
    try {
      for (B(O), c = t(o); c !== null && (!(c.expirationTime > O) || H && !Y()); ) {
        var G = c.callback;
        if (typeof G == "function") {
          c.callback = null, g = c.priorityLevel;
          var X = G(c.expirationTime <= O);
          O = A.unstable_now(), typeof X == "function" ? c.callback = X : c === t(o) && r(o), B(O);
        } else
          r(o);
        c = t(o);
      }
      if (c !== null)
        var hA = !0;
      else {
        var yA = t(u);
        yA !== null && tA(h, yA.startTime - O), hA = !1;
      }
      return hA;
    } finally {
      c = null, g = k, w = !1;
    }
  }
  var v = !1, U = null, y = -1, E = 5, x = -1;
  function Y() {
    return !(A.unstable_now() - x < E);
  }
  function AA() {
    if (U !== null) {
      var H = A.unstable_now();
      x = H;
      var O = !0;
      try {
        O = U(!0, H);
      } finally {
        O ? b() : (v = !1, U = null);
      }
    } else
      v = !1;
  }
  var b;
  if (typeof f == "function")
    b = function() {
      f(AA);
    };
  else if (typeof MessageChannel < "u") {
    var R = new MessageChannel(), eA = R.port2;
    R.port1.onmessage = AA, b = function() {
      eA.postMessage(null);
    };
  } else
    b = function() {
      Q(AA, 0);
    };
  function z(H) {
    U = H, v || (v = !0, b());
  }
  function tA(H, O) {
    y = Q(function() {
      H(A.unstable_now());
    }, O);
  }
  A.unstable_IdlePriority = 5, A.unstable_ImmediatePriority = 1, A.unstable_LowPriority = 4, A.unstable_NormalPriority = 3, A.unstable_Profiling = null, A.unstable_UserBlockingPriority = 2, A.unstable_cancelCallback = function(H) {
    H.callback = null;
  }, A.unstable_continueExecution = function() {
    p || w || (p = !0, z(m));
  }, A.unstable_forceFrameRate = function(H) {
    0 > H || 125 < H ? console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported") : E = 0 < H ? Math.floor(1e3 / H) : 5;
  }, A.unstable_getCurrentPriorityLevel = function() {
    return g;
  }, A.unstable_getFirstCallbackNode = function() {
    return t(o);
  }, A.unstable_next = function(H) {
    switch (g) {
      case 1:
      case 2:
      case 3:
        var O = 3;
        break;
      default:
        O = g;
    }
    var k = g;
    g = O;
    try {
      return H();
    } finally {
      g = k;
    }
  }, A.unstable_pauseExecution = function() {
  }, A.unstable_requestPaint = function() {
  }, A.unstable_runWithPriority = function(H, O) {
    switch (H) {
      case 1:
      case 2:
      case 3:
      case 4:
      case 5:
        break;
      default:
        H = 3;
    }
    var k = g;
    g = H;
    try {
      return O();
    } finally {
      g = k;
    }
  }, A.unstable_scheduleCallback = function(H, O, k) {
    var G = A.unstable_now();
    switch (typeof k == "object" && k !== null ? (k = k.delay, k = typeof k == "number" && 0 < k ? G + k : G) : k = G, H) {
      case 1:
        var X = -1;
        break;
      case 2:
        X = 250;
        break;
      case 5:
        X = 1073741823;
        break;
      case 4:
        X = 1e4;
        break;
      default:
        X = 5e3;
    }
    return X = k + X, H = { id: l++, callback: O, priorityLevel: H, startTime: k, expirationTime: X, sortIndex: -1 }, k > G ? (H.sortIndex = k, e(u, H), t(o) === null && H === t(u) && (C ? (d(y), y = -1) : C = !0, tA(h, k - G))) : (H.sortIndex = X, e(o, H), p || w || (p = !0, z(m))), H;
  }, A.unstable_shouldYield = Y, A.unstable_wrapCallback = function(H) {
    var O = g;
    return function() {
      var k = g;
      g = O;
      try {
        return H.apply(this, arguments);
      } finally {
        g = k;
      }
    };
  };
})(th);
eh.exports = th;
var uv = eh.exports;
/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var rh = IA, Ue = uv;
function F(A) {
  for (var e = "https://reactjs.org/docs/error-decoder.html?invariant=" + A, t = 1; t < arguments.length; t++)
    e += "&args[]=" + encodeURIComponent(arguments[t]);
  return "Minified React error #" + A + "; visit " + e + " for the full message or use the non-minified dev environment for full errors and additional helpful warnings.";
}
var nh = /* @__PURE__ */ new Set(), Ua = {};
function Mr(A, e) {
  Cn(A, e), Cn(A + "Capture", e);
}
function Cn(A, e) {
  for (Ua[A] = e, A = 0; A < e.length; A++)
    nh.add(e[A]);
}
var Ut = !(typeof window > "u" || typeof window.document > "u" || typeof window.document.createElement > "u"), $u = Object.prototype.hasOwnProperty, lv = /^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/, pd = {}, wd = {};
function cv(A) {
  return $u.call(wd, A) ? !0 : $u.call(pd, A) ? !1 : lv.test(A) ? wd[A] = !0 : (pd[A] = !0, !1);
}
function fv(A, e, t, r) {
  if (t !== null && t.type === 0)
    return !1;
  switch (typeof e) {
    case "function":
    case "symbol":
      return !0;
    case "boolean":
      return r ? !1 : t !== null ? !t.acceptsBooleans : (A = A.toLowerCase().slice(0, 5), A !== "data-" && A !== "aria-");
    default:
      return !1;
  }
}
function dv(A, e, t, r) {
  if (e === null || typeof e > "u" || fv(A, e, t, r))
    return !0;
  if (r)
    return !1;
  if (t !== null)
    switch (t.type) {
      case 3:
        return !e;
      case 4:
        return e === !1;
      case 5:
        return isNaN(e);
      case 6:
        return isNaN(e) || 1 > e;
    }
  return !1;
}
function ue(A, e, t, r, n, a, i) {
  this.acceptsBooleans = e === 2 || e === 3 || e === 4, this.attributeName = r, this.attributeNamespace = n, this.mustUseProperty = t, this.propertyName = A, this.type = e, this.sanitizeURL = a, this.removeEmptyString = i;
}
var XA = {};
"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(A) {
  XA[A] = new ue(A, 0, !1, A, null, !1, !1);
});
[["acceptCharset", "accept-charset"], ["className", "class"], ["htmlFor", "for"], ["httpEquiv", "http-equiv"]].forEach(function(A) {
  var e = A[0];
  XA[e] = new ue(e, 1, !1, A[1], null, !1, !1);
});
["contentEditable", "draggable", "spellCheck", "value"].forEach(function(A) {
  XA[A] = new ue(A, 2, !1, A.toLowerCase(), null, !1, !1);
});
["autoReverse", "externalResourcesRequired", "focusable", "preserveAlpha"].forEach(function(A) {
  XA[A] = new ue(A, 2, !1, A, null, !1, !1);
});
"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(A) {
  XA[A] = new ue(A, 3, !1, A.toLowerCase(), null, !1, !1);
});
["checked", "multiple", "muted", "selected"].forEach(function(A) {
  XA[A] = new ue(A, 3, !0, A, null, !1, !1);
});
["capture", "download"].forEach(function(A) {
  XA[A] = new ue(A, 4, !1, A, null, !1, !1);
});
["cols", "rows", "size", "span"].forEach(function(A) {
  XA[A] = new ue(A, 6, !1, A, null, !1, !1);
});
["rowSpan", "start"].forEach(function(A) {
  XA[A] = new ue(A, 5, !1, A.toLowerCase(), null, !1, !1);
});
var uf = /[\-:]([a-z])/g;
function lf(A) {
  return A[1].toUpperCase();
}
"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(A) {
  var e = A.replace(
    uf,
    lf
  );
  XA[e] = new ue(e, 1, !1, A, null, !1, !1);
});
"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(A) {
  var e = A.replace(uf, lf);
  XA[e] = new ue(e, 1, !1, A, "http://www.w3.org/1999/xlink", !1, !1);
});
["xml:base", "xml:lang", "xml:space"].forEach(function(A) {
  var e = A.replace(uf, lf);
  XA[e] = new ue(e, 1, !1, A, "http://www.w3.org/XML/1998/namespace", !1, !1);
});
["tabIndex", "crossOrigin"].forEach(function(A) {
  XA[A] = new ue(A, 1, !1, A.toLowerCase(), null, !1, !1);
});
XA.xlinkHref = new ue("xlinkHref", 1, !1, "xlink:href", "http://www.w3.org/1999/xlink", !0, !1);
["src", "href", "action", "formAction"].forEach(function(A) {
  XA[A] = new ue(A, 1, !1, A.toLowerCase(), null, !0, !0);
});
function cf(A, e, t, r) {
  var n = XA.hasOwnProperty(e) ? XA[e] : null;
  (n !== null ? n.type !== 0 : r || !(2 < e.length) || e[0] !== "o" && e[0] !== "O" || e[1] !== "n" && e[1] !== "N") && (dv(e, t, n, r) && (t = null), r || n === null ? cv(e) && (t === null ? A.removeAttribute(e) : A.setAttribute(e, "" + t)) : n.mustUseProperty ? A[n.propertyName] = t === null ? n.type === 3 ? !1 : "" : t : (e = n.attributeName, r = n.attributeNamespace, t === null ? A.removeAttribute(e) : (n = n.type, t = n === 3 || n === 4 && t === !0 ? "" : "" + t, r ? A.setAttributeNS(r, e, t) : A.setAttribute(e, t))));
}
var xt = rh.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED, Bi = Symbol.for("react.element"), qr = Symbol.for("react.portal"), An = Symbol.for("react.fragment"), ff = Symbol.for("react.strict_mode"), qu = Symbol.for("react.profiler"), ah = Symbol.for("react.provider"), ih = Symbol.for("react.context"), df = Symbol.for("react.forward_ref"), Al = Symbol.for("react.suspense"), el = Symbol.for("react.suspense_list"), Bf = Symbol.for("react.memo"), Dt = Symbol.for("react.lazy"), sh = Symbol.for("react.offscreen"), vd = Symbol.iterator;
function Mn(A) {
  return A === null || typeof A != "object" ? null : (A = vd && A[vd] || A["@@iterator"], typeof A == "function" ? A : null);
}
var QA = Object.assign, Wo;
function $n(A) {
  if (Wo === void 0)
    try {
      throw Error();
    } catch (t) {
      var e = t.stack.trim().match(/\n( *(at )?)/);
      Wo = e && e[1] || "";
    }
  return `
` + Wo + A;
}
var Yo = !1;
function Xo(A, e) {
  if (!A || Yo)
    return "";
  Yo = !0;
  var t = Error.prepareStackTrace;
  Error.prepareStackTrace = void 0;
  try {
    if (e)
      if (e = function() {
        throw Error();
      }, Object.defineProperty(e.prototype, "props", { set: function() {
        throw Error();
      } }), typeof Reflect == "object" && Reflect.construct) {
        try {
          Reflect.construct(e, []);
        } catch (u) {
          var r = u;
        }
        Reflect.construct(A, [], e);
      } else {
        try {
          e.call();
        } catch (u) {
          r = u;
        }
        A.call(e.prototype);
      }
    else {
      try {
        throw Error();
      } catch (u) {
        r = u;
      }
      A();
    }
  } catch (u) {
    if (u && r && typeof u.stack == "string") {
      for (var n = u.stack.split(`
`), a = r.stack.split(`
`), i = n.length - 1, s = a.length - 1; 1 <= i && 0 <= s && n[i] !== a[s]; )
        s--;
      for (; 1 <= i && 0 <= s; i--, s--)
        if (n[i] !== a[s]) {
          if (i !== 1 || s !== 1)
            do
              if (i--, s--, 0 > s || n[i] !== a[s]) {
                var o = `
` + n[i].replace(" at new ", " at ");
                return A.displayName && o.includes("<anonymous>") && (o = o.replace("<anonymous>", A.displayName)), o;
              }
            while (1 <= i && 0 <= s);
          break;
        }
    }
  } finally {
    Yo = !1, Error.prepareStackTrace = t;
  }
  return (A = A ? A.displayName || A.name : "") ? $n(A) : "";
}
function Bv(A) {
  switch (A.tag) {
    case 5:
      return $n(A.type);
    case 16:
      return $n("Lazy");
    case 13:
      return $n("Suspense");
    case 19:
      return $n("SuspenseList");
    case 0:
    case 2:
    case 15:
      return A = Xo(A.type, !1), A;
    case 11:
      return A = Xo(A.type.render, !1), A;
    case 1:
      return A = Xo(A.type, !0), A;
    default:
      return "";
  }
}
function tl(A) {
  if (A == null)
    return null;
  if (typeof A == "function")
    return A.displayName || A.name || null;
  if (typeof A == "string")
    return A;
  switch (A) {
    case An:
      return "Fragment";
    case qr:
      return "Portal";
    case qu:
      return "Profiler";
    case ff:
      return "StrictMode";
    case Al:
      return "Suspense";
    case el:
      return "SuspenseList";
  }
  if (typeof A == "object")
    switch (A.$$typeof) {
      case ih:
        return (A.displayName || "Context") + ".Consumer";
      case ah:
        return (A._context.displayName || "Context") + ".Provider";
      case df:
        var e = A.render;
        return A = A.displayName, A || (A = e.displayName || e.name || "", A = A !== "" ? "ForwardRef(" + A + ")" : "ForwardRef"), A;
      case Bf:
        return e = A.displayName || null, e !== null ? e : tl(A.type) || "Memo";
      case Dt:
        e = A._payload, A = A._init;
        try {
          return tl(A(e));
        } catch {
        }
    }
  return null;
}
function gv(A) {
  var e = A.type;
  switch (A.tag) {
    case 24:
      return "Cache";
    case 9:
      return (e.displayName || "Context") + ".Consumer";
    case 10:
      return (e._context.displayName || "Context") + ".Provider";
    case 18:
      return "DehydratedFragment";
    case 11:
      return A = e.render, A = A.displayName || A.name || "", e.displayName || (A !== "" ? "ForwardRef(" + A + ")" : "ForwardRef");
    case 7:
      return "Fragment";
    case 5:
      return e;
    case 4:
      return "Portal";
    case 3:
      return "Root";
    case 6:
      return "Text";
    case 16:
      return tl(e);
    case 8:
      return e === ff ? "StrictMode" : "Mode";
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
      if (typeof e == "function")
        return e.displayName || e.name || null;
      if (typeof e == "string")
        return e;
  }
  return null;
}
function tr(A) {
  switch (typeof A) {
    case "boolean":
    case "number":
    case "string":
    case "undefined":
      return A;
    case "object":
      return A;
    default:
      return "";
  }
}
function oh(A) {
  var e = A.type;
  return (A = A.nodeName) && A.toLowerCase() === "input" && (e === "checkbox" || e === "radio");
}
function hv(A) {
  var e = oh(A) ? "checked" : "value", t = Object.getOwnPropertyDescriptor(A.constructor.prototype, e), r = "" + A[e];
  if (!A.hasOwnProperty(e) && typeof t < "u" && typeof t.get == "function" && typeof t.set == "function") {
    var n = t.get, a = t.set;
    return Object.defineProperty(A, e, { configurable: !0, get: function() {
      return n.call(this);
    }, set: function(i) {
      r = "" + i, a.call(this, i);
    } }), Object.defineProperty(A, e, { enumerable: t.enumerable }), { getValue: function() {
      return r;
    }, setValue: function(i) {
      r = "" + i;
    }, stopTracking: function() {
      A._valueTracker = null, delete A[e];
    } };
  }
}
function gi(A) {
  A._valueTracker || (A._valueTracker = hv(A));
}
function uh(A) {
  if (!A)
    return !1;
  var e = A._valueTracker;
  if (!e)
    return !0;
  var t = e.getValue(), r = "";
  return A && (r = oh(A) ? A.checked ? "true" : "false" : A.value), A = r, A !== t ? (e.setValue(A), !0) : !1;
}
function ws(A) {
  if (A = A || (typeof document < "u" ? document : void 0), typeof A > "u")
    return null;
  try {
    return A.activeElement || A.body;
  } catch {
    return A.body;
  }
}
function rl(A, e) {
  var t = e.checked;
  return QA({}, e, { defaultChecked: void 0, defaultValue: void 0, value: void 0, checked: t ?? A._wrapperState.initialChecked });
}
function md(A, e) {
  var t = e.defaultValue == null ? "" : e.defaultValue, r = e.checked != null ? e.checked : e.defaultChecked;
  t = tr(e.value != null ? e.value : t), A._wrapperState = { initialChecked: r, initialValue: t, controlled: e.type === "checkbox" || e.type === "radio" ? e.checked != null : e.value != null };
}
function lh(A, e) {
  e = e.checked, e != null && cf(A, "checked", e, !1);
}
function nl(A, e) {
  lh(A, e);
  var t = tr(e.value), r = e.type;
  if (t != null)
    r === "number" ? (t === 0 && A.value === "" || A.value != t) && (A.value = "" + t) : A.value !== "" + t && (A.value = "" + t);
  else if (r === "submit" || r === "reset") {
    A.removeAttribute("value");
    return;
  }
  e.hasOwnProperty("value") ? al(A, e.type, t) : e.hasOwnProperty("defaultValue") && al(A, e.type, tr(e.defaultValue)), e.checked == null && e.defaultChecked != null && (A.defaultChecked = !!e.defaultChecked);
}
function Cd(A, e, t) {
  if (e.hasOwnProperty("value") || e.hasOwnProperty("defaultValue")) {
    var r = e.type;
    if (!(r !== "submit" && r !== "reset" || e.value !== void 0 && e.value !== null))
      return;
    e = "" + A._wrapperState.initialValue, t || e === A.value || (A.value = e), A.defaultValue = e;
  }
  t = A.name, t !== "" && (A.name = ""), A.defaultChecked = !!A._wrapperState.initialChecked, t !== "" && (A.name = t);
}
function al(A, e, t) {
  (e !== "number" || ws(A.ownerDocument) !== A) && (t == null ? A.defaultValue = "" + A._wrapperState.initialValue : A.defaultValue !== "" + t && (A.defaultValue = "" + t));
}
var qn = Array.isArray;
function dn(A, e, t, r) {
  if (A = A.options, e) {
    e = {};
    for (var n = 0; n < t.length; n++)
      e["$" + t[n]] = !0;
    for (t = 0; t < A.length; t++)
      n = e.hasOwnProperty("$" + A[t].value), A[t].selected !== n && (A[t].selected = n), n && r && (A[t].defaultSelected = !0);
  } else {
    for (t = "" + tr(t), e = null, n = 0; n < A.length; n++) {
      if (A[n].value === t) {
        A[n].selected = !0, r && (A[n].defaultSelected = !0);
        return;
      }
      e !== null || A[n].disabled || (e = A[n]);
    }
    e !== null && (e.selected = !0);
  }
}
function il(A, e) {
  if (e.dangerouslySetInnerHTML != null)
    throw Error(F(91));
  return QA({}, e, { value: void 0, defaultValue: void 0, children: "" + A._wrapperState.initialValue });
}
function Qd(A, e) {
  var t = e.value;
  if (t == null) {
    if (t = e.children, e = e.defaultValue, t != null) {
      if (e != null)
        throw Error(F(92));
      if (qn(t)) {
        if (1 < t.length)
          throw Error(F(93));
        t = t[0];
      }
      e = t;
    }
    e == null && (e = ""), t = e;
  }
  A._wrapperState = { initialValue: tr(t) };
}
function ch(A, e) {
  var t = tr(e.value), r = tr(e.defaultValue);
  t != null && (t = "" + t, t !== A.value && (A.value = t), e.defaultValue == null && A.defaultValue !== t && (A.defaultValue = t)), r != null && (A.defaultValue = "" + r);
}
function Ud(A) {
  var e = A.textContent;
  e === A._wrapperState.initialValue && e !== "" && e !== null && (A.value = e);
}
function fh(A) {
  switch (A) {
    case "svg":
      return "http://www.w3.org/2000/svg";
    case "math":
      return "http://www.w3.org/1998/Math/MathML";
    default:
      return "http://www.w3.org/1999/xhtml";
  }
}
function sl(A, e) {
  return A == null || A === "http://www.w3.org/1999/xhtml" ? fh(e) : A === "http://www.w3.org/2000/svg" && e === "foreignObject" ? "http://www.w3.org/1999/xhtml" : A;
}
var hi, dh = function(A) {
  return typeof MSApp < "u" && MSApp.execUnsafeLocalFunction ? function(e, t, r, n) {
    MSApp.execUnsafeLocalFunction(function() {
      return A(e, t, r, n);
    });
  } : A;
}(function(A, e) {
  if (A.namespaceURI !== "http://www.w3.org/2000/svg" || "innerHTML" in A)
    A.innerHTML = e;
  else {
    for (hi = hi || document.createElement("div"), hi.innerHTML = "<svg>" + e.valueOf().toString() + "</svg>", e = hi.firstChild; A.firstChild; )
      A.removeChild(A.firstChild);
    for (; e.firstChild; )
      A.appendChild(e.firstChild);
  }
});
function ya(A, e) {
  if (e) {
    var t = A.firstChild;
    if (t && t === A.lastChild && t.nodeType === 3) {
      t.nodeValue = e;
      return;
    }
  }
  A.textContent = e;
}
var ua = {
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
}, pv = ["Webkit", "ms", "Moz", "O"];
Object.keys(ua).forEach(function(A) {
  pv.forEach(function(e) {
    e = e + A.charAt(0).toUpperCase() + A.substring(1), ua[e] = ua[A];
  });
});
function Bh(A, e, t) {
  return e == null || typeof e == "boolean" || e === "" ? "" : t || typeof e != "number" || e === 0 || ua.hasOwnProperty(A) && ua[A] ? ("" + e).trim() : e + "px";
}
function gh(A, e) {
  A = A.style;
  for (var t in e)
    if (e.hasOwnProperty(t)) {
      var r = t.indexOf("--") === 0, n = Bh(t, e[t], r);
      t === "float" && (t = "cssFloat"), r ? A.setProperty(t, n) : A[t] = n;
    }
}
var wv = QA({ menuitem: !0 }, { area: !0, base: !0, br: !0, col: !0, embed: !0, hr: !0, img: !0, input: !0, keygen: !0, link: !0, meta: !0, param: !0, source: !0, track: !0, wbr: !0 });
function ol(A, e) {
  if (e) {
    if (wv[A] && (e.children != null || e.dangerouslySetInnerHTML != null))
      throw Error(F(137, A));
    if (e.dangerouslySetInnerHTML != null) {
      if (e.children != null)
        throw Error(F(60));
      if (typeof e.dangerouslySetInnerHTML != "object" || !("__html" in e.dangerouslySetInnerHTML))
        throw Error(F(61));
    }
    if (e.style != null && typeof e.style != "object")
      throw Error(F(62));
  }
}
function ul(A, e) {
  if (A.indexOf("-") === -1)
    return typeof e.is == "string";
  switch (A) {
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
var ll = null;
function gf(A) {
  return A = A.target || A.srcElement || window, A.correspondingUseElement && (A = A.correspondingUseElement), A.nodeType === 3 ? A.parentNode : A;
}
var cl = null, Bn = null, gn = null;
function yd(A) {
  if (A = si(A)) {
    if (typeof cl != "function")
      throw Error(F(280));
    var e = A.stateNode;
    e && (e = wo(e), cl(A.stateNode, A.type, e));
  }
}
function hh(A) {
  Bn ? gn ? gn.push(A) : gn = [A] : Bn = A;
}
function ph() {
  if (Bn) {
    var A = Bn, e = gn;
    if (gn = Bn = null, yd(A), e)
      for (A = 0; A < e.length; A++)
        yd(e[A]);
  }
}
function wh(A, e) {
  return A(e);
}
function vh() {
}
var Zo = !1;
function mh(A, e, t) {
  if (Zo)
    return A(e, t);
  Zo = !0;
  try {
    return wh(A, e, t);
  } finally {
    Zo = !1, (Bn !== null || gn !== null) && (vh(), ph());
  }
}
function Fa(A, e) {
  var t = A.stateNode;
  if (t === null)
    return null;
  var r = wo(t);
  if (r === null)
    return null;
  t = r[e];
  A:
    switch (e) {
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
        (r = !r.disabled) || (A = A.type, r = !(A === "button" || A === "input" || A === "select" || A === "textarea")), A = !r;
        break A;
      default:
        A = !1;
    }
  if (A)
    return null;
  if (t && typeof t != "function")
    throw Error(F(231, e, typeof t));
  return t;
}
var fl = !1;
if (Ut)
  try {
    var Kn = {};
    Object.defineProperty(Kn, "passive", { get: function() {
      fl = !0;
    } }), window.addEventListener("test", Kn, Kn), window.removeEventListener("test", Kn, Kn);
  } catch {
    fl = !1;
  }
function vv(A, e, t, r, n, a, i, s, o) {
  var u = Array.prototype.slice.call(arguments, 3);
  try {
    e.apply(t, u);
  } catch (l) {
    this.onError(l);
  }
}
var la = !1, vs = null, ms = !1, dl = null, mv = { onError: function(A) {
  la = !0, vs = A;
} };
function Cv(A, e, t, r, n, a, i, s, o) {
  la = !1, vs = null, vv.apply(mv, arguments);
}
function Qv(A, e, t, r, n, a, i, s, o) {
  if (Cv.apply(this, arguments), la) {
    if (la) {
      var u = vs;
      la = !1, vs = null;
    } else
      throw Error(F(198));
    ms || (ms = !0, dl = u);
  }
}
function Kr(A) {
  var e = A, t = A;
  if (A.alternate)
    for (; e.return; )
      e = e.return;
  else {
    A = e;
    do
      e = A, e.flags & 4098 && (t = e.return), A = e.return;
    while (A);
  }
  return e.tag === 3 ? t : null;
}
function Ch(A) {
  if (A.tag === 13) {
    var e = A.memoizedState;
    if (e === null && (A = A.alternate, A !== null && (e = A.memoizedState)), e !== null)
      return e.dehydrated;
  }
  return null;
}
function Fd(A) {
  if (Kr(A) !== A)
    throw Error(F(188));
}
function Uv(A) {
  var e = A.alternate;
  if (!e) {
    if (e = Kr(A), e === null)
      throw Error(F(188));
    return e !== A ? null : A;
  }
  for (var t = A, r = e; ; ) {
    var n = t.return;
    if (n === null)
      break;
    var a = n.alternate;
    if (a === null) {
      if (r = n.return, r !== null) {
        t = r;
        continue;
      }
      break;
    }
    if (n.child === a.child) {
      for (a = n.child; a; ) {
        if (a === t)
          return Fd(n), A;
        if (a === r)
          return Fd(n), e;
        a = a.sibling;
      }
      throw Error(F(188));
    }
    if (t.return !== r.return)
      t = n, r = a;
    else {
      for (var i = !1, s = n.child; s; ) {
        if (s === t) {
          i = !0, t = n, r = a;
          break;
        }
        if (s === r) {
          i = !0, r = n, t = a;
          break;
        }
        s = s.sibling;
      }
      if (!i) {
        for (s = a.child; s; ) {
          if (s === t) {
            i = !0, t = a, r = n;
            break;
          }
          if (s === r) {
            i = !0, r = a, t = n;
            break;
          }
          s = s.sibling;
        }
        if (!i)
          throw Error(F(189));
      }
    }
    if (t.alternate !== r)
      throw Error(F(190));
  }
  if (t.tag !== 3)
    throw Error(F(188));
  return t.stateNode.current === t ? A : e;
}
function Qh(A) {
  return A = Uv(A), A !== null ? Uh(A) : null;
}
function Uh(A) {
  if (A.tag === 5 || A.tag === 6)
    return A;
  for (A = A.child; A !== null; ) {
    var e = Uh(A);
    if (e !== null)
      return e;
    A = A.sibling;
  }
  return null;
}
var yh = Ue.unstable_scheduleCallback, Ed = Ue.unstable_cancelCallback, yv = Ue.unstable_shouldYield, Fv = Ue.unstable_requestPaint, TA = Ue.unstable_now, Ev = Ue.unstable_getCurrentPriorityLevel, hf = Ue.unstable_ImmediatePriority, Fh = Ue.unstable_UserBlockingPriority, Cs = Ue.unstable_NormalPriority, Iv = Ue.unstable_LowPriority, Eh = Ue.unstable_IdlePriority, Bo = null, et = null;
function Hv(A) {
  if (et && typeof et.onCommitFiberRoot == "function")
    try {
      et.onCommitFiberRoot(Bo, A, void 0, (A.current.flags & 128) === 128);
    } catch {
    }
}
var Ge = Math.clz32 ? Math.clz32 : Tv, xv = Math.log, Sv = Math.LN2;
function Tv(A) {
  return A >>>= 0, A === 0 ? 32 : 31 - (xv(A) / Sv | 0) | 0;
}
var pi = 64, wi = 4194304;
function Aa(A) {
  switch (A & -A) {
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
      return A & 4194240;
    case 4194304:
    case 8388608:
    case 16777216:
    case 33554432:
    case 67108864:
      return A & 130023424;
    case 134217728:
      return 134217728;
    case 268435456:
      return 268435456;
    case 536870912:
      return 536870912;
    case 1073741824:
      return 1073741824;
    default:
      return A;
  }
}
function Qs(A, e) {
  var t = A.pendingLanes;
  if (t === 0)
    return 0;
  var r = 0, n = A.suspendedLanes, a = A.pingedLanes, i = t & 268435455;
  if (i !== 0) {
    var s = i & ~n;
    s !== 0 ? r = Aa(s) : (a &= i, a !== 0 && (r = Aa(a)));
  } else
    i = t & ~n, i !== 0 ? r = Aa(i) : a !== 0 && (r = Aa(a));
  if (r === 0)
    return 0;
  if (e !== 0 && e !== r && !(e & n) && (n = r & -r, a = e & -e, n >= a || n === 16 && (a & 4194240) !== 0))
    return e;
  if (r & 4 && (r |= t & 16), e = A.entangledLanes, e !== 0)
    for (A = A.entanglements, e &= r; 0 < e; )
      t = 31 - Ge(e), n = 1 << t, r |= A[t], e &= ~n;
  return r;
}
function _v(A, e) {
  switch (A) {
    case 1:
    case 2:
    case 4:
      return e + 250;
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
      return e + 5e3;
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
function Lv(A, e) {
  for (var t = A.suspendedLanes, r = A.pingedLanes, n = A.expirationTimes, a = A.pendingLanes; 0 < a; ) {
    var i = 31 - Ge(a), s = 1 << i, o = n[i];
    o === -1 ? (!(s & t) || s & r) && (n[i] = _v(s, e)) : o <= e && (A.expiredLanes |= s), a &= ~s;
  }
}
function Bl(A) {
  return A = A.pendingLanes & -1073741825, A !== 0 ? A : A & 1073741824 ? 1073741824 : 0;
}
function Ih() {
  var A = pi;
  return pi <<= 1, !(pi & 4194240) && (pi = 64), A;
}
function jo(A) {
  for (var e = [], t = 0; 31 > t; t++)
    e.push(A);
  return e;
}
function ai(A, e, t) {
  A.pendingLanes |= e, e !== 536870912 && (A.suspendedLanes = 0, A.pingedLanes = 0), A = A.eventTimes, e = 31 - Ge(e), A[e] = t;
}
function Dv(A, e) {
  var t = A.pendingLanes & ~e;
  A.pendingLanes = e, A.suspendedLanes = 0, A.pingedLanes = 0, A.expiredLanes &= e, A.mutableReadLanes &= e, A.entangledLanes &= e, e = A.entanglements;
  var r = A.eventTimes;
  for (A = A.expirationTimes; 0 < t; ) {
    var n = 31 - Ge(t), a = 1 << n;
    e[n] = 0, r[n] = -1, A[n] = -1, t &= ~a;
  }
}
function pf(A, e) {
  var t = A.entangledLanes |= e;
  for (A = A.entanglements; t; ) {
    var r = 31 - Ge(t), n = 1 << r;
    n & e | A[r] & e && (A[r] |= e), t &= ~n;
  }
}
var aA = 0;
function Hh(A) {
  return A &= -A, 1 < A ? 4 < A ? A & 268435455 ? 16 : 536870912 : 4 : 1;
}
var xh, wf, Sh, Th, _h, gl = !1, vi = [], Yt = null, Xt = null, Zt = null, Ea = /* @__PURE__ */ new Map(), Ia = /* @__PURE__ */ new Map(), Mt = [], Ov = "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");
function Id(A, e) {
  switch (A) {
    case "focusin":
    case "focusout":
      Yt = null;
      break;
    case "dragenter":
    case "dragleave":
      Xt = null;
      break;
    case "mouseover":
    case "mouseout":
      Zt = null;
      break;
    case "pointerover":
    case "pointerout":
      Ea.delete(e.pointerId);
      break;
    case "gotpointercapture":
    case "lostpointercapture":
      Ia.delete(e.pointerId);
  }
}
function bn(A, e, t, r, n, a) {
  return A === null || A.nativeEvent !== a ? (A = { blockedOn: e, domEventName: t, eventSystemFlags: r, nativeEvent: a, targetContainers: [n] }, e !== null && (e = si(e), e !== null && wf(e)), A) : (A.eventSystemFlags |= r, e = A.targetContainers, n !== null && e.indexOf(n) === -1 && e.push(n), A);
}
function kv(A, e, t, r, n) {
  switch (e) {
    case "focusin":
      return Yt = bn(Yt, A, e, t, r, n), !0;
    case "dragenter":
      return Xt = bn(Xt, A, e, t, r, n), !0;
    case "mouseover":
      return Zt = bn(Zt, A, e, t, r, n), !0;
    case "pointerover":
      var a = n.pointerId;
      return Ea.set(a, bn(Ea.get(a) || null, A, e, t, r, n)), !0;
    case "gotpointercapture":
      return a = n.pointerId, Ia.set(a, bn(Ia.get(a) || null, A, e, t, r, n)), !0;
  }
  return !1;
}
function Lh(A) {
  var e = vr(A.target);
  if (e !== null) {
    var t = Kr(e);
    if (t !== null) {
      if (e = t.tag, e === 13) {
        if (e = Ch(t), e !== null) {
          A.blockedOn = e, _h(A.priority, function() {
            Sh(t);
          });
          return;
        }
      } else if (e === 3 && t.stateNode.current.memoizedState.isDehydrated) {
        A.blockedOn = t.tag === 3 ? t.stateNode.containerInfo : null;
        return;
      }
    }
  }
  A.blockedOn = null;
}
function rs(A) {
  if (A.blockedOn !== null)
    return !1;
  for (var e = A.targetContainers; 0 < e.length; ) {
    var t = hl(A.domEventName, A.eventSystemFlags, e[0], A.nativeEvent);
    if (t === null) {
      t = A.nativeEvent;
      var r = new t.constructor(t.type, t);
      ll = r, t.target.dispatchEvent(r), ll = null;
    } else
      return e = si(t), e !== null && wf(e), A.blockedOn = t, !1;
    e.shift();
  }
  return !0;
}
function Hd(A, e, t) {
  rs(A) && t.delete(e);
}
function Mv() {
  gl = !1, Yt !== null && rs(Yt) && (Yt = null), Xt !== null && rs(Xt) && (Xt = null), Zt !== null && rs(Zt) && (Zt = null), Ea.forEach(Hd), Ia.forEach(Hd);
}
function Nn(A, e) {
  A.blockedOn === e && (A.blockedOn = null, gl || (gl = !0, Ue.unstable_scheduleCallback(Ue.unstable_NormalPriority, Mv)));
}
function Ha(A) {
  function e(n) {
    return Nn(n, A);
  }
  if (0 < vi.length) {
    Nn(vi[0], A);
    for (var t = 1; t < vi.length; t++) {
      var r = vi[t];
      r.blockedOn === A && (r.blockedOn = null);
    }
  }
  for (Yt !== null && Nn(Yt, A), Xt !== null && Nn(Xt, A), Zt !== null && Nn(Zt, A), Ea.forEach(e), Ia.forEach(e), t = 0; t < Mt.length; t++)
    r = Mt[t], r.blockedOn === A && (r.blockedOn = null);
  for (; 0 < Mt.length && (t = Mt[0], t.blockedOn === null); )
    Lh(t), t.blockedOn === null && Mt.shift();
}
var hn = xt.ReactCurrentBatchConfig, Us = !0;
function Kv(A, e, t, r) {
  var n = aA, a = hn.transition;
  hn.transition = null;
  try {
    aA = 1, vf(A, e, t, r);
  } finally {
    aA = n, hn.transition = a;
  }
}
function bv(A, e, t, r) {
  var n = aA, a = hn.transition;
  hn.transition = null;
  try {
    aA = 4, vf(A, e, t, r);
  } finally {
    aA = n, hn.transition = a;
  }
}
function vf(A, e, t, r) {
  if (Us) {
    var n = hl(A, e, t, r);
    if (n === null)
      au(A, e, r, ys, t), Id(A, r);
    else if (kv(n, A, e, t, r))
      r.stopPropagation();
    else if (Id(A, r), e & 4 && -1 < Ov.indexOf(A)) {
      for (; n !== null; ) {
        var a = si(n);
        if (a !== null && xh(a), a = hl(A, e, t, r), a === null && au(A, e, r, ys, t), a === n)
          break;
        n = a;
      }
      n !== null && r.stopPropagation();
    } else
      au(A, e, r, null, t);
  }
}
var ys = null;
function hl(A, e, t, r) {
  if (ys = null, A = gf(r), A = vr(A), A !== null)
    if (e = Kr(A), e === null)
      A = null;
    else if (t = e.tag, t === 13) {
      if (A = Ch(e), A !== null)
        return A;
      A = null;
    } else if (t === 3) {
      if (e.stateNode.current.memoizedState.isDehydrated)
        return e.tag === 3 ? e.stateNode.containerInfo : null;
      A = null;
    } else
      e !== A && (A = null);
  return ys = A, null;
}
function Dh(A) {
  switch (A) {
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
      switch (Ev()) {
        case hf:
          return 1;
        case Fh:
          return 4;
        case Cs:
        case Iv:
          return 16;
        case Eh:
          return 536870912;
        default:
          return 16;
      }
    default:
      return 16;
  }
}
var Nt = null, mf = null, ns = null;
function Oh() {
  if (ns)
    return ns;
  var A, e = mf, t = e.length, r, n = "value" in Nt ? Nt.value : Nt.textContent, a = n.length;
  for (A = 0; A < t && e[A] === n[A]; A++)
    ;
  var i = t - A;
  for (r = 1; r <= i && e[t - r] === n[a - r]; r++)
    ;
  return ns = n.slice(A, 1 < r ? 1 - r : void 0);
}
function as(A) {
  var e = A.keyCode;
  return "charCode" in A ? (A = A.charCode, A === 0 && e === 13 && (A = 13)) : A = e, A === 10 && (A = 13), 32 <= A || A === 13 ? A : 0;
}
function mi() {
  return !0;
}
function xd() {
  return !1;
}
function Fe(A) {
  function e(t, r, n, a, i) {
    this._reactName = t, this._targetInst = n, this.type = r, this.nativeEvent = a, this.target = i, this.currentTarget = null;
    for (var s in A)
      A.hasOwnProperty(s) && (t = A[s], this[s] = t ? t(a) : a[s]);
    return this.isDefaultPrevented = (a.defaultPrevented != null ? a.defaultPrevented : a.returnValue === !1) ? mi : xd, this.isPropagationStopped = xd, this;
  }
  return QA(e.prototype, { preventDefault: function() {
    this.defaultPrevented = !0;
    var t = this.nativeEvent;
    t && (t.preventDefault ? t.preventDefault() : typeof t.returnValue != "unknown" && (t.returnValue = !1), this.isDefaultPrevented = mi);
  }, stopPropagation: function() {
    var t = this.nativeEvent;
    t && (t.stopPropagation ? t.stopPropagation() : typeof t.cancelBubble != "unknown" && (t.cancelBubble = !0), this.isPropagationStopped = mi);
  }, persist: function() {
  }, isPersistent: mi }), e;
}
var Ln = { eventPhase: 0, bubbles: 0, cancelable: 0, timeStamp: function(A) {
  return A.timeStamp || Date.now();
}, defaultPrevented: 0, isTrusted: 0 }, Cf = Fe(Ln), ii = QA({}, Ln, { view: 0, detail: 0 }), Nv = Fe(ii), zo, Jo, Rn, go = QA({}, ii, { screenX: 0, screenY: 0, clientX: 0, clientY: 0, pageX: 0, pageY: 0, ctrlKey: 0, shiftKey: 0, altKey: 0, metaKey: 0, getModifierState: Qf, button: 0, buttons: 0, relatedTarget: function(A) {
  return A.relatedTarget === void 0 ? A.fromElement === A.srcElement ? A.toElement : A.fromElement : A.relatedTarget;
}, movementX: function(A) {
  return "movementX" in A ? A.movementX : (A !== Rn && (Rn && A.type === "mousemove" ? (zo = A.screenX - Rn.screenX, Jo = A.screenY - Rn.screenY) : Jo = zo = 0, Rn = A), zo);
}, movementY: function(A) {
  return "movementY" in A ? A.movementY : Jo;
} }), Sd = Fe(go), Rv = QA({}, go, { dataTransfer: 0 }), Pv = Fe(Rv), Vv = QA({}, ii, { relatedTarget: 0 }), $o = Fe(Vv), Gv = QA({}, Ln, { animationName: 0, elapsedTime: 0, pseudoElement: 0 }), Wv = Fe(Gv), Yv = QA({}, Ln, { clipboardData: function(A) {
  return "clipboardData" in A ? A.clipboardData : window.clipboardData;
} }), Xv = Fe(Yv), Zv = QA({}, Ln, { data: 0 }), Td = Fe(Zv), jv = {
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
}, zv = {
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
}, Jv = { Alt: "altKey", Control: "ctrlKey", Meta: "metaKey", Shift: "shiftKey" };
function $v(A) {
  var e = this.nativeEvent;
  return e.getModifierState ? e.getModifierState(A) : (A = Jv[A]) ? !!e[A] : !1;
}
function Qf() {
  return $v;
}
var qv = QA({}, ii, { key: function(A) {
  if (A.key) {
    var e = jv[A.key] || A.key;
    if (e !== "Unidentified")
      return e;
  }
  return A.type === "keypress" ? (A = as(A), A === 13 ? "Enter" : String.fromCharCode(A)) : A.type === "keydown" || A.type === "keyup" ? zv[A.keyCode] || "Unidentified" : "";
}, code: 0, location: 0, ctrlKey: 0, shiftKey: 0, altKey: 0, metaKey: 0, repeat: 0, locale: 0, getModifierState: Qf, charCode: function(A) {
  return A.type === "keypress" ? as(A) : 0;
}, keyCode: function(A) {
  return A.type === "keydown" || A.type === "keyup" ? A.keyCode : 0;
}, which: function(A) {
  return A.type === "keypress" ? as(A) : A.type === "keydown" || A.type === "keyup" ? A.keyCode : 0;
} }), Am = Fe(qv), em = QA({}, go, { pointerId: 0, width: 0, height: 0, pressure: 0, tangentialPressure: 0, tiltX: 0, tiltY: 0, twist: 0, pointerType: 0, isPrimary: 0 }), _d = Fe(em), tm = QA({}, ii, { touches: 0, targetTouches: 0, changedTouches: 0, altKey: 0, metaKey: 0, ctrlKey: 0, shiftKey: 0, getModifierState: Qf }), rm = Fe(tm), nm = QA({}, Ln, { propertyName: 0, elapsedTime: 0, pseudoElement: 0 }), am = Fe(nm), im = QA({}, go, {
  deltaX: function(A) {
    return "deltaX" in A ? A.deltaX : "wheelDeltaX" in A ? -A.wheelDeltaX : 0;
  },
  deltaY: function(A) {
    return "deltaY" in A ? A.deltaY : "wheelDeltaY" in A ? -A.wheelDeltaY : "wheelDelta" in A ? -A.wheelDelta : 0;
  },
  deltaZ: 0,
  deltaMode: 0
}), sm = Fe(im), om = [9, 13, 27, 32], Uf = Ut && "CompositionEvent" in window, ca = null;
Ut && "documentMode" in document && (ca = document.documentMode);
var um = Ut && "TextEvent" in window && !ca, kh = Ut && (!Uf || ca && 8 < ca && 11 >= ca), Ld = " ", Dd = !1;
function Mh(A, e) {
  switch (A) {
    case "keyup":
      return om.indexOf(e.keyCode) !== -1;
    case "keydown":
      return e.keyCode !== 229;
    case "keypress":
    case "mousedown":
    case "focusout":
      return !0;
    default:
      return !1;
  }
}
function Kh(A) {
  return A = A.detail, typeof A == "object" && "data" in A ? A.data : null;
}
var en = !1;
function lm(A, e) {
  switch (A) {
    case "compositionend":
      return Kh(e);
    case "keypress":
      return e.which !== 32 ? null : (Dd = !0, Ld);
    case "textInput":
      return A = e.data, A === Ld && Dd ? null : A;
    default:
      return null;
  }
}
function cm(A, e) {
  if (en)
    return A === "compositionend" || !Uf && Mh(A, e) ? (A = Oh(), ns = mf = Nt = null, en = !1, A) : null;
  switch (A) {
    case "paste":
      return null;
    case "keypress":
      if (!(e.ctrlKey || e.altKey || e.metaKey) || e.ctrlKey && e.altKey) {
        if (e.char && 1 < e.char.length)
          return e.char;
        if (e.which)
          return String.fromCharCode(e.which);
      }
      return null;
    case "compositionend":
      return kh && e.locale !== "ko" ? null : e.data;
    default:
      return null;
  }
}
var fm = { color: !0, date: !0, datetime: !0, "datetime-local": !0, email: !0, month: !0, number: !0, password: !0, range: !0, search: !0, tel: !0, text: !0, time: !0, url: !0, week: !0 };
function Od(A) {
  var e = A && A.nodeName && A.nodeName.toLowerCase();
  return e === "input" ? !!fm[A.type] : e === "textarea";
}
function bh(A, e, t, r) {
  hh(r), e = Fs(e, "onChange"), 0 < e.length && (t = new Cf("onChange", "change", null, t, r), A.push({ event: t, listeners: e }));
}
var fa = null, xa = null;
function dm(A) {
  zh(A, 0);
}
function ho(A) {
  var e = nn(A);
  if (uh(e))
    return A;
}
function Bm(A, e) {
  if (A === "change")
    return e;
}
var Nh = !1;
if (Ut) {
  var qo;
  if (Ut) {
    var Au = "oninput" in document;
    if (!Au) {
      var kd = document.createElement("div");
      kd.setAttribute("oninput", "return;"), Au = typeof kd.oninput == "function";
    }
    qo = Au;
  } else
    qo = !1;
  Nh = qo && (!document.documentMode || 9 < document.documentMode);
}
function Md() {
  fa && (fa.detachEvent("onpropertychange", Rh), xa = fa = null);
}
function Rh(A) {
  if (A.propertyName === "value" && ho(xa)) {
    var e = [];
    bh(e, xa, A, gf(A)), mh(dm, e);
  }
}
function gm(A, e, t) {
  A === "focusin" ? (Md(), fa = e, xa = t, fa.attachEvent("onpropertychange", Rh)) : A === "focusout" && Md();
}
function hm(A) {
  if (A === "selectionchange" || A === "keyup" || A === "keydown")
    return ho(xa);
}
function pm(A, e) {
  if (A === "click")
    return ho(e);
}
function wm(A, e) {
  if (A === "input" || A === "change")
    return ho(e);
}
function vm(A, e) {
  return A === e && (A !== 0 || 1 / A === 1 / e) || A !== A && e !== e;
}
var Ze = typeof Object.is == "function" ? Object.is : vm;
function Sa(A, e) {
  if (Ze(A, e))
    return !0;
  if (typeof A != "object" || A === null || typeof e != "object" || e === null)
    return !1;
  var t = Object.keys(A), r = Object.keys(e);
  if (t.length !== r.length)
    return !1;
  for (r = 0; r < t.length; r++) {
    var n = t[r];
    if (!$u.call(e, n) || !Ze(A[n], e[n]))
      return !1;
  }
  return !0;
}
function Kd(A) {
  for (; A && A.firstChild; )
    A = A.firstChild;
  return A;
}
function bd(A, e) {
  var t = Kd(A);
  A = 0;
  for (var r; t; ) {
    if (t.nodeType === 3) {
      if (r = A + t.textContent.length, A <= e && r >= e)
        return { node: t, offset: e - A };
      A = r;
    }
    A: {
      for (; t; ) {
        if (t.nextSibling) {
          t = t.nextSibling;
          break A;
        }
        t = t.parentNode;
      }
      t = void 0;
    }
    t = Kd(t);
  }
}
function Ph(A, e) {
  return A && e ? A === e ? !0 : A && A.nodeType === 3 ? !1 : e && e.nodeType === 3 ? Ph(A, e.parentNode) : "contains" in A ? A.contains(e) : A.compareDocumentPosition ? !!(A.compareDocumentPosition(e) & 16) : !1 : !1;
}
function Vh() {
  for (var A = window, e = ws(); e instanceof A.HTMLIFrameElement; ) {
    try {
      var t = typeof e.contentWindow.location.href == "string";
    } catch {
      t = !1;
    }
    if (t)
      A = e.contentWindow;
    else
      break;
    e = ws(A.document);
  }
  return e;
}
function yf(A) {
  var e = A && A.nodeName && A.nodeName.toLowerCase();
  return e && (e === "input" && (A.type === "text" || A.type === "search" || A.type === "tel" || A.type === "url" || A.type === "password") || e === "textarea" || A.contentEditable === "true");
}
function mm(A) {
  var e = Vh(), t = A.focusedElem, r = A.selectionRange;
  if (e !== t && t && t.ownerDocument && Ph(t.ownerDocument.documentElement, t)) {
    if (r !== null && yf(t)) {
      if (e = r.start, A = r.end, A === void 0 && (A = e), "selectionStart" in t)
        t.selectionStart = e, t.selectionEnd = Math.min(A, t.value.length);
      else if (A = (e = t.ownerDocument || document) && e.defaultView || window, A.getSelection) {
        A = A.getSelection();
        var n = t.textContent.length, a = Math.min(r.start, n);
        r = r.end === void 0 ? a : Math.min(r.end, n), !A.extend && a > r && (n = r, r = a, a = n), n = bd(t, a);
        var i = bd(
          t,
          r
        );
        n && i && (A.rangeCount !== 1 || A.anchorNode !== n.node || A.anchorOffset !== n.offset || A.focusNode !== i.node || A.focusOffset !== i.offset) && (e = e.createRange(), e.setStart(n.node, n.offset), A.removeAllRanges(), a > r ? (A.addRange(e), A.extend(i.node, i.offset)) : (e.setEnd(i.node, i.offset), A.addRange(e)));
      }
    }
    for (e = [], A = t; A = A.parentNode; )
      A.nodeType === 1 && e.push({ element: A, left: A.scrollLeft, top: A.scrollTop });
    for (typeof t.focus == "function" && t.focus(), t = 0; t < e.length; t++)
      A = e[t], A.element.scrollLeft = A.left, A.element.scrollTop = A.top;
  }
}
var Cm = Ut && "documentMode" in document && 11 >= document.documentMode, tn = null, pl = null, da = null, wl = !1;
function Nd(A, e, t) {
  var r = t.window === t ? t.document : t.nodeType === 9 ? t : t.ownerDocument;
  wl || tn == null || tn !== ws(r) || (r = tn, "selectionStart" in r && yf(r) ? r = { start: r.selectionStart, end: r.selectionEnd } : (r = (r.ownerDocument && r.ownerDocument.defaultView || window).getSelection(), r = { anchorNode: r.anchorNode, anchorOffset: r.anchorOffset, focusNode: r.focusNode, focusOffset: r.focusOffset }), da && Sa(da, r) || (da = r, r = Fs(pl, "onSelect"), 0 < r.length && (e = new Cf("onSelect", "select", null, e, t), A.push({ event: e, listeners: r }), e.target = tn)));
}
function Ci(A, e) {
  var t = {};
  return t[A.toLowerCase()] = e.toLowerCase(), t["Webkit" + A] = "webkit" + e, t["Moz" + A] = "moz" + e, t;
}
var rn = { animationend: Ci("Animation", "AnimationEnd"), animationiteration: Ci("Animation", "AnimationIteration"), animationstart: Ci("Animation", "AnimationStart"), transitionend: Ci("Transition", "TransitionEnd") }, eu = {}, Gh = {};
Ut && (Gh = document.createElement("div").style, "AnimationEvent" in window || (delete rn.animationend.animation, delete rn.animationiteration.animation, delete rn.animationstart.animation), "TransitionEvent" in window || delete rn.transitionend.transition);
function po(A) {
  if (eu[A])
    return eu[A];
  if (!rn[A])
    return A;
  var e = rn[A], t;
  for (t in e)
    if (e.hasOwnProperty(t) && t in Gh)
      return eu[A] = e[t];
  return A;
}
var Wh = po("animationend"), Yh = po("animationiteration"), Xh = po("animationstart"), Zh = po("transitionend"), jh = /* @__PURE__ */ new Map(), Rd = "abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");
function ur(A, e) {
  jh.set(A, e), Mr(e, [A]);
}
for (var tu = 0; tu < Rd.length; tu++) {
  var ru = Rd[tu], Qm = ru.toLowerCase(), Um = ru[0].toUpperCase() + ru.slice(1);
  ur(Qm, "on" + Um);
}
ur(Wh, "onAnimationEnd");
ur(Yh, "onAnimationIteration");
ur(Xh, "onAnimationStart");
ur("dblclick", "onDoubleClick");
ur("focusin", "onFocus");
ur("focusout", "onBlur");
ur(Zh, "onTransitionEnd");
Cn("onMouseEnter", ["mouseout", "mouseover"]);
Cn("onMouseLeave", ["mouseout", "mouseover"]);
Cn("onPointerEnter", ["pointerout", "pointerover"]);
Cn("onPointerLeave", ["pointerout", "pointerover"]);
Mr("onChange", "change click focusin focusout input keydown keyup selectionchange".split(" "));
Mr("onSelect", "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));
Mr("onBeforeInput", ["compositionend", "keypress", "textInput", "paste"]);
Mr("onCompositionEnd", "compositionend focusout keydown keypress keyup mousedown".split(" "));
Mr("onCompositionStart", "compositionstart focusout keydown keypress keyup mousedown".split(" "));
Mr("onCompositionUpdate", "compositionupdate focusout keydown keypress keyup mousedown".split(" "));
var ea = "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "), ym = new Set("cancel close invalid load scroll toggle".split(" ").concat(ea));
function Pd(A, e, t) {
  var r = A.type || "unknown-event";
  A.currentTarget = t, Qv(r, e, void 0, A), A.currentTarget = null;
}
function zh(A, e) {
  e = (e & 4) !== 0;
  for (var t = 0; t < A.length; t++) {
    var r = A[t], n = r.event;
    r = r.listeners;
    A: {
      var a = void 0;
      if (e)
        for (var i = r.length - 1; 0 <= i; i--) {
          var s = r[i], o = s.instance, u = s.currentTarget;
          if (s = s.listener, o !== a && n.isPropagationStopped())
            break A;
          Pd(n, s, u), a = o;
        }
      else
        for (i = 0; i < r.length; i++) {
          if (s = r[i], o = s.instance, u = s.currentTarget, s = s.listener, o !== a && n.isPropagationStopped())
            break A;
          Pd(n, s, u), a = o;
        }
    }
  }
  if (ms)
    throw A = dl, ms = !1, dl = null, A;
}
function cA(A, e) {
  var t = e[Ul];
  t === void 0 && (t = e[Ul] = /* @__PURE__ */ new Set());
  var r = A + "__bubble";
  t.has(r) || (Jh(e, A, 2, !1), t.add(r));
}
function nu(A, e, t) {
  var r = 0;
  e && (r |= 4), Jh(t, A, r, e);
}
var Qi = "_reactListening" + Math.random().toString(36).slice(2);
function Ta(A) {
  if (!A[Qi]) {
    A[Qi] = !0, nh.forEach(function(t) {
      t !== "selectionchange" && (ym.has(t) || nu(t, !1, A), nu(t, !0, A));
    });
    var e = A.nodeType === 9 ? A : A.ownerDocument;
    e === null || e[Qi] || (e[Qi] = !0, nu("selectionchange", !1, e));
  }
}
function Jh(A, e, t, r) {
  switch (Dh(e)) {
    case 1:
      var n = Kv;
      break;
    case 4:
      n = bv;
      break;
    default:
      n = vf;
  }
  t = n.bind(null, e, t, A), n = void 0, !fl || e !== "touchstart" && e !== "touchmove" && e !== "wheel" || (n = !0), r ? n !== void 0 ? A.addEventListener(e, t, { capture: !0, passive: n }) : A.addEventListener(e, t, !0) : n !== void 0 ? A.addEventListener(e, t, { passive: n }) : A.addEventListener(e, t, !1);
}
function au(A, e, t, r, n) {
  var a = r;
  if (!(e & 1) && !(e & 2) && r !== null)
    A:
      for (; ; ) {
        if (r === null)
          return;
        var i = r.tag;
        if (i === 3 || i === 4) {
          var s = r.stateNode.containerInfo;
          if (s === n || s.nodeType === 8 && s.parentNode === n)
            break;
          if (i === 4)
            for (i = r.return; i !== null; ) {
              var o = i.tag;
              if ((o === 3 || o === 4) && (o = i.stateNode.containerInfo, o === n || o.nodeType === 8 && o.parentNode === n))
                return;
              i = i.return;
            }
          for (; s !== null; ) {
            if (i = vr(s), i === null)
              return;
            if (o = i.tag, o === 5 || o === 6) {
              r = a = i;
              continue A;
            }
            s = s.parentNode;
          }
        }
        r = r.return;
      }
  mh(function() {
    var u = a, l = gf(t), c = [];
    A: {
      var g = jh.get(A);
      if (g !== void 0) {
        var w = Cf, p = A;
        switch (A) {
          case "keypress":
            if (as(t) === 0)
              break A;
          case "keydown":
          case "keyup":
            w = Am;
            break;
          case "focusin":
            p = "focus", w = $o;
            break;
          case "focusout":
            p = "blur", w = $o;
            break;
          case "beforeblur":
          case "afterblur":
            w = $o;
            break;
          case "click":
            if (t.button === 2)
              break A;
          case "auxclick":
          case "dblclick":
          case "mousedown":
          case "mousemove":
          case "mouseup":
          case "mouseout":
          case "mouseover":
          case "contextmenu":
            w = Sd;
            break;
          case "drag":
          case "dragend":
          case "dragenter":
          case "dragexit":
          case "dragleave":
          case "dragover":
          case "dragstart":
          case "drop":
            w = Pv;
            break;
          case "touchcancel":
          case "touchend":
          case "touchmove":
          case "touchstart":
            w = rm;
            break;
          case Wh:
          case Yh:
          case Xh:
            w = Wv;
            break;
          case Zh:
            w = am;
            break;
          case "scroll":
            w = Nv;
            break;
          case "wheel":
            w = sm;
            break;
          case "copy":
          case "cut":
          case "paste":
            w = Xv;
            break;
          case "gotpointercapture":
          case "lostpointercapture":
          case "pointercancel":
          case "pointerdown":
          case "pointermove":
          case "pointerout":
          case "pointerover":
          case "pointerup":
            w = _d;
        }
        var C = (e & 4) !== 0, Q = !C && A === "scroll", d = C ? g !== null ? g + "Capture" : null : g;
        C = [];
        for (var f = u, B; f !== null; ) {
          B = f;
          var h = B.stateNode;
          if (B.tag === 5 && h !== null && (B = h, d !== null && (h = Fa(f, d), h != null && C.push(_a(f, h, B)))), Q)
            break;
          f = f.return;
        }
        0 < C.length && (g = new w(g, p, null, t, l), c.push({ event: g, listeners: C }));
      }
    }
    if (!(e & 7)) {
      A: {
        if (g = A === "mouseover" || A === "pointerover", w = A === "mouseout" || A === "pointerout", g && t !== ll && (p = t.relatedTarget || t.fromElement) && (vr(p) || p[yt]))
          break A;
        if ((w || g) && (g = l.window === l ? l : (g = l.ownerDocument) ? g.defaultView || g.parentWindow : window, w ? (p = t.relatedTarget || t.toElement, w = u, p = p ? vr(p) : null, p !== null && (Q = Kr(p), p !== Q || p.tag !== 5 && p.tag !== 6) && (p = null)) : (w = null, p = u), w !== p)) {
          if (C = Sd, h = "onMouseLeave", d = "onMouseEnter", f = "mouse", (A === "pointerout" || A === "pointerover") && (C = _d, h = "onPointerLeave", d = "onPointerEnter", f = "pointer"), Q = w == null ? g : nn(w), B = p == null ? g : nn(p), g = new C(h, f + "leave", w, t, l), g.target = Q, g.relatedTarget = B, h = null, vr(l) === u && (C = new C(d, f + "enter", p, t, l), C.target = B, C.relatedTarget = Q, h = C), Q = h, w && p)
            e: {
              for (C = w, d = p, f = 0, B = C; B; B = Rr(B))
                f++;
              for (B = 0, h = d; h; h = Rr(h))
                B++;
              for (; 0 < f - B; )
                C = Rr(C), f--;
              for (; 0 < B - f; )
                d = Rr(d), B--;
              for (; f--; ) {
                if (C === d || d !== null && C === d.alternate)
                  break e;
                C = Rr(C), d = Rr(d);
              }
              C = null;
            }
          else
            C = null;
          w !== null && Vd(c, g, w, C, !1), p !== null && Q !== null && Vd(c, Q, p, C, !0);
        }
      }
      A: {
        if (g = u ? nn(u) : window, w = g.nodeName && g.nodeName.toLowerCase(), w === "select" || w === "input" && g.type === "file")
          var m = Bm;
        else if (Od(g))
          if (Nh)
            m = wm;
          else {
            m = hm;
            var v = gm;
          }
        else
          (w = g.nodeName) && w.toLowerCase() === "input" && (g.type === "checkbox" || g.type === "radio") && (m = pm);
        if (m && (m = m(A, u))) {
          bh(c, m, t, l);
          break A;
        }
        v && v(A, g, u), A === "focusout" && (v = g._wrapperState) && v.controlled && g.type === "number" && al(g, "number", g.value);
      }
      switch (v = u ? nn(u) : window, A) {
        case "focusin":
          (Od(v) || v.contentEditable === "true") && (tn = v, pl = u, da = null);
          break;
        case "focusout":
          da = pl = tn = null;
          break;
        case "mousedown":
          wl = !0;
          break;
        case "contextmenu":
        case "mouseup":
        case "dragend":
          wl = !1, Nd(c, t, l);
          break;
        case "selectionchange":
          if (Cm)
            break;
        case "keydown":
        case "keyup":
          Nd(c, t, l);
      }
      var U;
      if (Uf)
        A: {
          switch (A) {
            case "compositionstart":
              var y = "onCompositionStart";
              break A;
            case "compositionend":
              y = "onCompositionEnd";
              break A;
            case "compositionupdate":
              y = "onCompositionUpdate";
              break A;
          }
          y = void 0;
        }
      else
        en ? Mh(A, t) && (y = "onCompositionEnd") : A === "keydown" && t.keyCode === 229 && (y = "onCompositionStart");
      y && (kh && t.locale !== "ko" && (en || y !== "onCompositionStart" ? y === "onCompositionEnd" && en && (U = Oh()) : (Nt = l, mf = "value" in Nt ? Nt.value : Nt.textContent, en = !0)), v = Fs(u, y), 0 < v.length && (y = new Td(y, A, null, t, l), c.push({ event: y, listeners: v }), U ? y.data = U : (U = Kh(t), U !== null && (y.data = U)))), (U = um ? lm(A, t) : cm(A, t)) && (u = Fs(u, "onBeforeInput"), 0 < u.length && (l = new Td("onBeforeInput", "beforeinput", null, t, l), c.push({ event: l, listeners: u }), l.data = U));
    }
    zh(c, e);
  });
}
function _a(A, e, t) {
  return { instance: A, listener: e, currentTarget: t };
}
function Fs(A, e) {
  for (var t = e + "Capture", r = []; A !== null; ) {
    var n = A, a = n.stateNode;
    n.tag === 5 && a !== null && (n = a, a = Fa(A, t), a != null && r.unshift(_a(A, a, n)), a = Fa(A, e), a != null && r.push(_a(A, a, n))), A = A.return;
  }
  return r;
}
function Rr(A) {
  if (A === null)
    return null;
  do
    A = A.return;
  while (A && A.tag !== 5);
  return A || null;
}
function Vd(A, e, t, r, n) {
  for (var a = e._reactName, i = []; t !== null && t !== r; ) {
    var s = t, o = s.alternate, u = s.stateNode;
    if (o !== null && o === r)
      break;
    s.tag === 5 && u !== null && (s = u, n ? (o = Fa(t, a), o != null && i.unshift(_a(t, o, s))) : n || (o = Fa(t, a), o != null && i.push(_a(t, o, s)))), t = t.return;
  }
  i.length !== 0 && A.push({ event: e, listeners: i });
}
var Fm = /\r\n?/g, Em = /\u0000|\uFFFD/g;
function Gd(A) {
  return (typeof A == "string" ? A : "" + A).replace(Fm, `
`).replace(Em, "");
}
function Ui(A, e, t) {
  if (e = Gd(e), Gd(A) !== e && t)
    throw Error(F(425));
}
function Es() {
}
var vl = null, ml = null;
function Cl(A, e) {
  return A === "textarea" || A === "noscript" || typeof e.children == "string" || typeof e.children == "number" || typeof e.dangerouslySetInnerHTML == "object" && e.dangerouslySetInnerHTML !== null && e.dangerouslySetInnerHTML.__html != null;
}
var Ql = typeof setTimeout == "function" ? setTimeout : void 0, Im = typeof clearTimeout == "function" ? clearTimeout : void 0, Wd = typeof Promise == "function" ? Promise : void 0, Hm = typeof queueMicrotask == "function" ? queueMicrotask : typeof Wd < "u" ? function(A) {
  return Wd.resolve(null).then(A).catch(xm);
} : Ql;
function xm(A) {
  setTimeout(function() {
    throw A;
  });
}
function iu(A, e) {
  var t = e, r = 0;
  do {
    var n = t.nextSibling;
    if (A.removeChild(t), n && n.nodeType === 8)
      if (t = n.data, t === "/$") {
        if (r === 0) {
          A.removeChild(n), Ha(e);
          return;
        }
        r--;
      } else
        t !== "$" && t !== "$?" && t !== "$!" || r++;
    t = n;
  } while (t);
  Ha(e);
}
function jt(A) {
  for (; A != null; A = A.nextSibling) {
    var e = A.nodeType;
    if (e === 1 || e === 3)
      break;
    if (e === 8) {
      if (e = A.data, e === "$" || e === "$!" || e === "$?")
        break;
      if (e === "/$")
        return null;
    }
  }
  return A;
}
function Yd(A) {
  A = A.previousSibling;
  for (var e = 0; A; ) {
    if (A.nodeType === 8) {
      var t = A.data;
      if (t === "$" || t === "$!" || t === "$?") {
        if (e === 0)
          return A;
        e--;
      } else
        t === "/$" && e++;
    }
    A = A.previousSibling;
  }
  return null;
}
var Dn = Math.random().toString(36).slice(2), At = "__reactFiber$" + Dn, La = "__reactProps$" + Dn, yt = "__reactContainer$" + Dn, Ul = "__reactEvents$" + Dn, Sm = "__reactListeners$" + Dn, Tm = "__reactHandles$" + Dn;
function vr(A) {
  var e = A[At];
  if (e)
    return e;
  for (var t = A.parentNode; t; ) {
    if (e = t[yt] || t[At]) {
      if (t = e.alternate, e.child !== null || t !== null && t.child !== null)
        for (A = Yd(A); A !== null; ) {
          if (t = A[At])
            return t;
          A = Yd(A);
        }
      return e;
    }
    A = t, t = A.parentNode;
  }
  return null;
}
function si(A) {
  return A = A[At] || A[yt], !A || A.tag !== 5 && A.tag !== 6 && A.tag !== 13 && A.tag !== 3 ? null : A;
}
function nn(A) {
  if (A.tag === 5 || A.tag === 6)
    return A.stateNode;
  throw Error(F(33));
}
function wo(A) {
  return A[La] || null;
}
var yl = [], an = -1;
function lr(A) {
  return { current: A };
}
function fA(A) {
  0 > an || (A.current = yl[an], yl[an] = null, an--);
}
function lA(A, e) {
  an++, yl[an] = A.current, A.current = e;
}
var rr = {}, qA = lr(rr), he = lr(!1), Hr = rr;
function Qn(A, e) {
  var t = A.type.contextTypes;
  if (!t)
    return rr;
  var r = A.stateNode;
  if (r && r.__reactInternalMemoizedUnmaskedChildContext === e)
    return r.__reactInternalMemoizedMaskedChildContext;
  var n = {}, a;
  for (a in t)
    n[a] = e[a];
  return r && (A = A.stateNode, A.__reactInternalMemoizedUnmaskedChildContext = e, A.__reactInternalMemoizedMaskedChildContext = n), n;
}
function pe(A) {
  return A = A.childContextTypes, A != null;
}
function Is() {
  fA(he), fA(qA);
}
function Xd(A, e, t) {
  if (qA.current !== rr)
    throw Error(F(168));
  lA(qA, e), lA(he, t);
}
function $h(A, e, t) {
  var r = A.stateNode;
  if (e = e.childContextTypes, typeof r.getChildContext != "function")
    return t;
  r = r.getChildContext();
  for (var n in r)
    if (!(n in e))
      throw Error(F(108, gv(A) || "Unknown", n));
  return QA({}, t, r);
}
function Hs(A) {
  return A = (A = A.stateNode) && A.__reactInternalMemoizedMergedChildContext || rr, Hr = qA.current, lA(qA, A), lA(he, he.current), !0;
}
function Zd(A, e, t) {
  var r = A.stateNode;
  if (!r)
    throw Error(F(169));
  t ? (A = $h(A, e, Hr), r.__reactInternalMemoizedMergedChildContext = A, fA(he), fA(qA), lA(qA, A)) : fA(he), lA(he, t);
}
var gt = null, vo = !1, su = !1;
function qh(A) {
  gt === null ? gt = [A] : gt.push(A);
}
function _m(A) {
  vo = !0, qh(A);
}
function cr() {
  if (!su && gt !== null) {
    su = !0;
    var A = 0, e = aA;
    try {
      var t = gt;
      for (aA = 1; A < t.length; A++) {
        var r = t[A];
        do
          r = r(!0);
        while (r !== null);
      }
      gt = null, vo = !1;
    } catch (n) {
      throw gt !== null && (gt = gt.slice(A + 1)), yh(hf, cr), n;
    } finally {
      aA = e, su = !1;
    }
  }
  return null;
}
var sn = [], on = 0, xs = null, Ss = 0, He = [], xe = 0, xr = null, pt = 1, wt = "";
function gr(A, e) {
  sn[on++] = Ss, sn[on++] = xs, xs = A, Ss = e;
}
function Ap(A, e, t) {
  He[xe++] = pt, He[xe++] = wt, He[xe++] = xr, xr = A;
  var r = pt;
  A = wt;
  var n = 32 - Ge(r) - 1;
  r &= ~(1 << n), t += 1;
  var a = 32 - Ge(e) + n;
  if (30 < a) {
    var i = n - n % 5;
    a = (r & (1 << i) - 1).toString(32), r >>= i, n -= i, pt = 1 << 32 - Ge(e) + n | t << n | r, wt = a + A;
  } else
    pt = 1 << a | t << n | r, wt = A;
}
function Ff(A) {
  A.return !== null && (gr(A, 1), Ap(A, 1, 0));
}
function Ef(A) {
  for (; A === xs; )
    xs = sn[--on], sn[on] = null, Ss = sn[--on], sn[on] = null;
  for (; A === xr; )
    xr = He[--xe], He[xe] = null, wt = He[--xe], He[xe] = null, pt = He[--xe], He[xe] = null;
}
var Qe = null, Ce = null, gA = !1, Pe = null;
function ep(A, e) {
  var t = _e(5, null, null, 0);
  t.elementType = "DELETED", t.stateNode = e, t.return = A, e = A.deletions, e === null ? (A.deletions = [t], A.flags |= 16) : e.push(t);
}
function jd(A, e) {
  switch (A.tag) {
    case 5:
      var t = A.type;
      return e = e.nodeType !== 1 || t.toLowerCase() !== e.nodeName.toLowerCase() ? null : e, e !== null ? (A.stateNode = e, Qe = A, Ce = jt(e.firstChild), !0) : !1;
    case 6:
      return e = A.pendingProps === "" || e.nodeType !== 3 ? null : e, e !== null ? (A.stateNode = e, Qe = A, Ce = null, !0) : !1;
    case 13:
      return e = e.nodeType !== 8 ? null : e, e !== null ? (t = xr !== null ? { id: pt, overflow: wt } : null, A.memoizedState = { dehydrated: e, treeContext: t, retryLane: 1073741824 }, t = _e(18, null, null, 0), t.stateNode = e, t.return = A, A.child = t, Qe = A, Ce = null, !0) : !1;
    default:
      return !1;
  }
}
function Fl(A) {
  return (A.mode & 1) !== 0 && (A.flags & 128) === 0;
}
function El(A) {
  if (gA) {
    var e = Ce;
    if (e) {
      var t = e;
      if (!jd(A, e)) {
        if (Fl(A))
          throw Error(F(418));
        e = jt(t.nextSibling);
        var r = Qe;
        e && jd(A, e) ? ep(r, t) : (A.flags = A.flags & -4097 | 2, gA = !1, Qe = A);
      }
    } else {
      if (Fl(A))
        throw Error(F(418));
      A.flags = A.flags & -4097 | 2, gA = !1, Qe = A;
    }
  }
}
function zd(A) {
  for (A = A.return; A !== null && A.tag !== 5 && A.tag !== 3 && A.tag !== 13; )
    A = A.return;
  Qe = A;
}
function yi(A) {
  if (A !== Qe)
    return !1;
  if (!gA)
    return zd(A), gA = !0, !1;
  var e;
  if ((e = A.tag !== 3) && !(e = A.tag !== 5) && (e = A.type, e = e !== "head" && e !== "body" && !Cl(A.type, A.memoizedProps)), e && (e = Ce)) {
    if (Fl(A))
      throw tp(), Error(F(418));
    for (; e; )
      ep(A, e), e = jt(e.nextSibling);
  }
  if (zd(A), A.tag === 13) {
    if (A = A.memoizedState, A = A !== null ? A.dehydrated : null, !A)
      throw Error(F(317));
    A: {
      for (A = A.nextSibling, e = 0; A; ) {
        if (A.nodeType === 8) {
          var t = A.data;
          if (t === "/$") {
            if (e === 0) {
              Ce = jt(A.nextSibling);
              break A;
            }
            e--;
          } else
            t !== "$" && t !== "$!" && t !== "$?" || e++;
        }
        A = A.nextSibling;
      }
      Ce = null;
    }
  } else
    Ce = Qe ? jt(A.stateNode.nextSibling) : null;
  return !0;
}
function tp() {
  for (var A = Ce; A; )
    A = jt(A.nextSibling);
}
function Un() {
  Ce = Qe = null, gA = !1;
}
function If(A) {
  Pe === null ? Pe = [A] : Pe.push(A);
}
var Lm = xt.ReactCurrentBatchConfig;
function Ne(A, e) {
  if (A && A.defaultProps) {
    e = QA({}, e), A = A.defaultProps;
    for (var t in A)
      e[t] === void 0 && (e[t] = A[t]);
    return e;
  }
  return e;
}
var Ts = lr(null), _s = null, un = null, Hf = null;
function xf() {
  Hf = un = _s = null;
}
function Sf(A) {
  var e = Ts.current;
  fA(Ts), A._currentValue = e;
}
function Il(A, e, t) {
  for (; A !== null; ) {
    var r = A.alternate;
    if ((A.childLanes & e) !== e ? (A.childLanes |= e, r !== null && (r.childLanes |= e)) : r !== null && (r.childLanes & e) !== e && (r.childLanes |= e), A === t)
      break;
    A = A.return;
  }
}
function pn(A, e) {
  _s = A, Hf = un = null, A = A.dependencies, A !== null && A.firstContext !== null && (A.lanes & e && (ge = !0), A.firstContext = null);
}
function ke(A) {
  var e = A._currentValue;
  if (Hf !== A)
    if (A = { context: A, memoizedValue: e, next: null }, un === null) {
      if (_s === null)
        throw Error(F(308));
      un = A, _s.dependencies = { lanes: 0, firstContext: A };
    } else
      un = un.next = A;
  return e;
}
var mr = null;
function Tf(A) {
  mr === null ? mr = [A] : mr.push(A);
}
function rp(A, e, t, r) {
  var n = e.interleaved;
  return n === null ? (t.next = t, Tf(e)) : (t.next = n.next, n.next = t), e.interleaved = t, Ft(A, r);
}
function Ft(A, e) {
  A.lanes |= e;
  var t = A.alternate;
  for (t !== null && (t.lanes |= e), t = A, A = A.return; A !== null; )
    A.childLanes |= e, t = A.alternate, t !== null && (t.childLanes |= e), t = A, A = A.return;
  return t.tag === 3 ? t.stateNode : null;
}
var Ot = !1;
function _f(A) {
  A.updateQueue = { baseState: A.memoizedState, firstBaseUpdate: null, lastBaseUpdate: null, shared: { pending: null, interleaved: null, lanes: 0 }, effects: null };
}
function np(A, e) {
  A = A.updateQueue, e.updateQueue === A && (e.updateQueue = { baseState: A.baseState, firstBaseUpdate: A.firstBaseUpdate, lastBaseUpdate: A.lastBaseUpdate, shared: A.shared, effects: A.effects });
}
function mt(A, e) {
  return { eventTime: A, lane: e, tag: 0, payload: null, callback: null, next: null };
}
function zt(A, e, t) {
  var r = A.updateQueue;
  if (r === null)
    return null;
  if (r = r.shared, J & 2) {
    var n = r.pending;
    return n === null ? e.next = e : (e.next = n.next, n.next = e), r.pending = e, Ft(A, t);
  }
  return n = r.interleaved, n === null ? (e.next = e, Tf(r)) : (e.next = n.next, n.next = e), r.interleaved = e, Ft(A, t);
}
function is(A, e, t) {
  if (e = e.updateQueue, e !== null && (e = e.shared, (t & 4194240) !== 0)) {
    var r = e.lanes;
    r &= A.pendingLanes, t |= r, e.lanes = t, pf(A, t);
  }
}
function Jd(A, e) {
  var t = A.updateQueue, r = A.alternate;
  if (r !== null && (r = r.updateQueue, t === r)) {
    var n = null, a = null;
    if (t = t.firstBaseUpdate, t !== null) {
      do {
        var i = { eventTime: t.eventTime, lane: t.lane, tag: t.tag, payload: t.payload, callback: t.callback, next: null };
        a === null ? n = a = i : a = a.next = i, t = t.next;
      } while (t !== null);
      a === null ? n = a = e : a = a.next = e;
    } else
      n = a = e;
    t = { baseState: r.baseState, firstBaseUpdate: n, lastBaseUpdate: a, shared: r.shared, effects: r.effects }, A.updateQueue = t;
    return;
  }
  A = t.lastBaseUpdate, A === null ? t.firstBaseUpdate = e : A.next = e, t.lastBaseUpdate = e;
}
function Ls(A, e, t, r) {
  var n = A.updateQueue;
  Ot = !1;
  var a = n.firstBaseUpdate, i = n.lastBaseUpdate, s = n.shared.pending;
  if (s !== null) {
    n.shared.pending = null;
    var o = s, u = o.next;
    o.next = null, i === null ? a = u : i.next = u, i = o;
    var l = A.alternate;
    l !== null && (l = l.updateQueue, s = l.lastBaseUpdate, s !== i && (s === null ? l.firstBaseUpdate = u : s.next = u, l.lastBaseUpdate = o));
  }
  if (a !== null) {
    var c = n.baseState;
    i = 0, l = u = o = null, s = a;
    do {
      var g = s.lane, w = s.eventTime;
      if ((r & g) === g) {
        l !== null && (l = l.next = {
          eventTime: w,
          lane: 0,
          tag: s.tag,
          payload: s.payload,
          callback: s.callback,
          next: null
        });
        A: {
          var p = A, C = s;
          switch (g = e, w = t, C.tag) {
            case 1:
              if (p = C.payload, typeof p == "function") {
                c = p.call(w, c, g);
                break A;
              }
              c = p;
              break A;
            case 3:
              p.flags = p.flags & -65537 | 128;
            case 0:
              if (p = C.payload, g = typeof p == "function" ? p.call(w, c, g) : p, g == null)
                break A;
              c = QA({}, c, g);
              break A;
            case 2:
              Ot = !0;
          }
        }
        s.callback !== null && s.lane !== 0 && (A.flags |= 64, g = n.effects, g === null ? n.effects = [s] : g.push(s));
      } else
        w = { eventTime: w, lane: g, tag: s.tag, payload: s.payload, callback: s.callback, next: null }, l === null ? (u = l = w, o = c) : l = l.next = w, i |= g;
      if (s = s.next, s === null) {
        if (s = n.shared.pending, s === null)
          break;
        g = s, s = g.next, g.next = null, n.lastBaseUpdate = g, n.shared.pending = null;
      }
    } while (!0);
    if (l === null && (o = c), n.baseState = o, n.firstBaseUpdate = u, n.lastBaseUpdate = l, e = n.shared.interleaved, e !== null) {
      n = e;
      do
        i |= n.lane, n = n.next;
      while (n !== e);
    } else
      a === null && (n.shared.lanes = 0);
    Tr |= i, A.lanes = i, A.memoizedState = c;
  }
}
function $d(A, e, t) {
  if (A = e.effects, e.effects = null, A !== null)
    for (e = 0; e < A.length; e++) {
      var r = A[e], n = r.callback;
      if (n !== null) {
        if (r.callback = null, r = t, typeof n != "function")
          throw Error(F(191, n));
        n.call(r);
      }
    }
}
var ap = new rh.Component().refs;
function Hl(A, e, t, r) {
  e = A.memoizedState, t = t(r, e), t = t == null ? e : QA({}, e, t), A.memoizedState = t, A.lanes === 0 && (A.updateQueue.baseState = t);
}
var mo = { isMounted: function(A) {
  return (A = A._reactInternals) ? Kr(A) === A : !1;
}, enqueueSetState: function(A, e, t) {
  A = A._reactInternals;
  var r = ie(), n = $t(A), a = mt(r, n);
  a.payload = e, t != null && (a.callback = t), e = zt(A, a, n), e !== null && (We(e, A, n, r), is(e, A, n));
}, enqueueReplaceState: function(A, e, t) {
  A = A._reactInternals;
  var r = ie(), n = $t(A), a = mt(r, n);
  a.tag = 1, a.payload = e, t != null && (a.callback = t), e = zt(A, a, n), e !== null && (We(e, A, n, r), is(e, A, n));
}, enqueueForceUpdate: function(A, e) {
  A = A._reactInternals;
  var t = ie(), r = $t(A), n = mt(t, r);
  n.tag = 2, e != null && (n.callback = e), e = zt(A, n, r), e !== null && (We(e, A, r, t), is(e, A, r));
} };
function qd(A, e, t, r, n, a, i) {
  return A = A.stateNode, typeof A.shouldComponentUpdate == "function" ? A.shouldComponentUpdate(r, a, i) : e.prototype && e.prototype.isPureReactComponent ? !Sa(t, r) || !Sa(n, a) : !0;
}
function ip(A, e, t) {
  var r = !1, n = rr, a = e.contextType;
  return typeof a == "object" && a !== null ? a = ke(a) : (n = pe(e) ? Hr : qA.current, r = e.contextTypes, a = (r = r != null) ? Qn(A, n) : rr), e = new e(t, a), A.memoizedState = e.state !== null && e.state !== void 0 ? e.state : null, e.updater = mo, A.stateNode = e, e._reactInternals = A, r && (A = A.stateNode, A.__reactInternalMemoizedUnmaskedChildContext = n, A.__reactInternalMemoizedMaskedChildContext = a), e;
}
function AB(A, e, t, r) {
  A = e.state, typeof e.componentWillReceiveProps == "function" && e.componentWillReceiveProps(t, r), typeof e.UNSAFE_componentWillReceiveProps == "function" && e.UNSAFE_componentWillReceiveProps(t, r), e.state !== A && mo.enqueueReplaceState(e, e.state, null);
}
function xl(A, e, t, r) {
  var n = A.stateNode;
  n.props = t, n.state = A.memoizedState, n.refs = ap, _f(A);
  var a = e.contextType;
  typeof a == "object" && a !== null ? n.context = ke(a) : (a = pe(e) ? Hr : qA.current, n.context = Qn(A, a)), n.state = A.memoizedState, a = e.getDerivedStateFromProps, typeof a == "function" && (Hl(A, e, a, t), n.state = A.memoizedState), typeof e.getDerivedStateFromProps == "function" || typeof n.getSnapshotBeforeUpdate == "function" || typeof n.UNSAFE_componentWillMount != "function" && typeof n.componentWillMount != "function" || (e = n.state, typeof n.componentWillMount == "function" && n.componentWillMount(), typeof n.UNSAFE_componentWillMount == "function" && n.UNSAFE_componentWillMount(), e !== n.state && mo.enqueueReplaceState(n, n.state, null), Ls(A, t, n, r), n.state = A.memoizedState), typeof n.componentDidMount == "function" && (A.flags |= 4194308);
}
function Pn(A, e, t) {
  if (A = t.ref, A !== null && typeof A != "function" && typeof A != "object") {
    if (t._owner) {
      if (t = t._owner, t) {
        if (t.tag !== 1)
          throw Error(F(309));
        var r = t.stateNode;
      }
      if (!r)
        throw Error(F(147, A));
      var n = r, a = "" + A;
      return e !== null && e.ref !== null && typeof e.ref == "function" && e.ref._stringRef === a ? e.ref : (e = function(i) {
        var s = n.refs;
        s === ap && (s = n.refs = {}), i === null ? delete s[a] : s[a] = i;
      }, e._stringRef = a, e);
    }
    if (typeof A != "string")
      throw Error(F(284));
    if (!t._owner)
      throw Error(F(290, A));
  }
  return A;
}
function Fi(A, e) {
  throw A = Object.prototype.toString.call(e), Error(F(31, A === "[object Object]" ? "object with keys {" + Object.keys(e).join(", ") + "}" : A));
}
function eB(A) {
  var e = A._init;
  return e(A._payload);
}
function sp(A) {
  function e(d, f) {
    if (A) {
      var B = d.deletions;
      B === null ? (d.deletions = [f], d.flags |= 16) : B.push(f);
    }
  }
  function t(d, f) {
    if (!A)
      return null;
    for (; f !== null; )
      e(d, f), f = f.sibling;
    return null;
  }
  function r(d, f) {
    for (d = /* @__PURE__ */ new Map(); f !== null; )
      f.key !== null ? d.set(f.key, f) : d.set(f.index, f), f = f.sibling;
    return d;
  }
  function n(d, f) {
    return d = qt(d, f), d.index = 0, d.sibling = null, d;
  }
  function a(d, f, B) {
    return d.index = B, A ? (B = d.alternate, B !== null ? (B = B.index, B < f ? (d.flags |= 2, f) : B) : (d.flags |= 2, f)) : (d.flags |= 1048576, f);
  }
  function i(d) {
    return A && d.alternate === null && (d.flags |= 2), d;
  }
  function s(d, f, B, h) {
    return f === null || f.tag !== 6 ? (f = Bu(B, d.mode, h), f.return = d, f) : (f = n(f, B), f.return = d, f);
  }
  function o(d, f, B, h) {
    var m = B.type;
    return m === An ? l(d, f, B.props.children, h, B.key) : f !== null && (f.elementType === m || typeof m == "object" && m !== null && m.$$typeof === Dt && eB(m) === f.type) ? (h = n(f, B.props), h.ref = Pn(d, f, B), h.return = d, h) : (h = fs(B.type, B.key, B.props, null, d.mode, h), h.ref = Pn(d, f, B), h.return = d, h);
  }
  function u(d, f, B, h) {
    return f === null || f.tag !== 4 || f.stateNode.containerInfo !== B.containerInfo || f.stateNode.implementation !== B.implementation ? (f = gu(B, d.mode, h), f.return = d, f) : (f = n(f, B.children || []), f.return = d, f);
  }
  function l(d, f, B, h, m) {
    return f === null || f.tag !== 7 ? (f = yr(B, d.mode, h, m), f.return = d, f) : (f = n(f, B), f.return = d, f);
  }
  function c(d, f, B) {
    if (typeof f == "string" && f !== "" || typeof f == "number")
      return f = Bu("" + f, d.mode, B), f.return = d, f;
    if (typeof f == "object" && f !== null) {
      switch (f.$$typeof) {
        case Bi:
          return B = fs(f.type, f.key, f.props, null, d.mode, B), B.ref = Pn(d, null, f), B.return = d, B;
        case qr:
          return f = gu(f, d.mode, B), f.return = d, f;
        case Dt:
          var h = f._init;
          return c(d, h(f._payload), B);
      }
      if (qn(f) || Mn(f))
        return f = yr(f, d.mode, B, null), f.return = d, f;
      Fi(d, f);
    }
    return null;
  }
  function g(d, f, B, h) {
    var m = f !== null ? f.key : null;
    if (typeof B == "string" && B !== "" || typeof B == "number")
      return m !== null ? null : s(d, f, "" + B, h);
    if (typeof B == "object" && B !== null) {
      switch (B.$$typeof) {
        case Bi:
          return B.key === m ? o(d, f, B, h) : null;
        case qr:
          return B.key === m ? u(d, f, B, h) : null;
        case Dt:
          return m = B._init, g(
            d,
            f,
            m(B._payload),
            h
          );
      }
      if (qn(B) || Mn(B))
        return m !== null ? null : l(d, f, B, h, null);
      Fi(d, B);
    }
    return null;
  }
  function w(d, f, B, h, m) {
    if (typeof h == "string" && h !== "" || typeof h == "number")
      return d = d.get(B) || null, s(f, d, "" + h, m);
    if (typeof h == "object" && h !== null) {
      switch (h.$$typeof) {
        case Bi:
          return d = d.get(h.key === null ? B : h.key) || null, o(f, d, h, m);
        case qr:
          return d = d.get(h.key === null ? B : h.key) || null, u(f, d, h, m);
        case Dt:
          var v = h._init;
          return w(d, f, B, v(h._payload), m);
      }
      if (qn(h) || Mn(h))
        return d = d.get(B) || null, l(f, d, h, m, null);
      Fi(f, h);
    }
    return null;
  }
  function p(d, f, B, h) {
    for (var m = null, v = null, U = f, y = f = 0, E = null; U !== null && y < B.length; y++) {
      U.index > y ? (E = U, U = null) : E = U.sibling;
      var x = g(d, U, B[y], h);
      if (x === null) {
        U === null && (U = E);
        break;
      }
      A && U && x.alternate === null && e(d, U), f = a(x, f, y), v === null ? m = x : v.sibling = x, v = x, U = E;
    }
    if (y === B.length)
      return t(d, U), gA && gr(d, y), m;
    if (U === null) {
      for (; y < B.length; y++)
        U = c(d, B[y], h), U !== null && (f = a(U, f, y), v === null ? m = U : v.sibling = U, v = U);
      return gA && gr(d, y), m;
    }
    for (U = r(d, U); y < B.length; y++)
      E = w(U, d, y, B[y], h), E !== null && (A && E.alternate !== null && U.delete(E.key === null ? y : E.key), f = a(E, f, y), v === null ? m = E : v.sibling = E, v = E);
    return A && U.forEach(function(Y) {
      return e(d, Y);
    }), gA && gr(d, y), m;
  }
  function C(d, f, B, h) {
    var m = Mn(B);
    if (typeof m != "function")
      throw Error(F(150));
    if (B = m.call(B), B == null)
      throw Error(F(151));
    for (var v = m = null, U = f, y = f = 0, E = null, x = B.next(); U !== null && !x.done; y++, x = B.next()) {
      U.index > y ? (E = U, U = null) : E = U.sibling;
      var Y = g(d, U, x.value, h);
      if (Y === null) {
        U === null && (U = E);
        break;
      }
      A && U && Y.alternate === null && e(d, U), f = a(Y, f, y), v === null ? m = Y : v.sibling = Y, v = Y, U = E;
    }
    if (x.done)
      return t(
        d,
        U
      ), gA && gr(d, y), m;
    if (U === null) {
      for (; !x.done; y++, x = B.next())
        x = c(d, x.value, h), x !== null && (f = a(x, f, y), v === null ? m = x : v.sibling = x, v = x);
      return gA && gr(d, y), m;
    }
    for (U = r(d, U); !x.done; y++, x = B.next())
      x = w(U, d, y, x.value, h), x !== null && (A && x.alternate !== null && U.delete(x.key === null ? y : x.key), f = a(x, f, y), v === null ? m = x : v.sibling = x, v = x);
    return A && U.forEach(function(AA) {
      return e(d, AA);
    }), gA && gr(d, y), m;
  }
  function Q(d, f, B, h) {
    if (typeof B == "object" && B !== null && B.type === An && B.key === null && (B = B.props.children), typeof B == "object" && B !== null) {
      switch (B.$$typeof) {
        case Bi:
          A: {
            for (var m = B.key, v = f; v !== null; ) {
              if (v.key === m) {
                if (m = B.type, m === An) {
                  if (v.tag === 7) {
                    t(d, v.sibling), f = n(v, B.props.children), f.return = d, d = f;
                    break A;
                  }
                } else if (v.elementType === m || typeof m == "object" && m !== null && m.$$typeof === Dt && eB(m) === v.type) {
                  t(d, v.sibling), f = n(v, B.props), f.ref = Pn(d, v, B), f.return = d, d = f;
                  break A;
                }
                t(d, v);
                break;
              } else
                e(d, v);
              v = v.sibling;
            }
            B.type === An ? (f = yr(B.props.children, d.mode, h, B.key), f.return = d, d = f) : (h = fs(B.type, B.key, B.props, null, d.mode, h), h.ref = Pn(d, f, B), h.return = d, d = h);
          }
          return i(d);
        case qr:
          A: {
            for (v = B.key; f !== null; ) {
              if (f.key === v)
                if (f.tag === 4 && f.stateNode.containerInfo === B.containerInfo && f.stateNode.implementation === B.implementation) {
                  t(d, f.sibling), f = n(f, B.children || []), f.return = d, d = f;
                  break A;
                } else {
                  t(d, f);
                  break;
                }
              else
                e(d, f);
              f = f.sibling;
            }
            f = gu(B, d.mode, h), f.return = d, d = f;
          }
          return i(d);
        case Dt:
          return v = B._init, Q(d, f, v(B._payload), h);
      }
      if (qn(B))
        return p(d, f, B, h);
      if (Mn(B))
        return C(d, f, B, h);
      Fi(d, B);
    }
    return typeof B == "string" && B !== "" || typeof B == "number" ? (B = "" + B, f !== null && f.tag === 6 ? (t(d, f.sibling), f = n(f, B), f.return = d, d = f) : (t(d, f), f = Bu(B, d.mode, h), f.return = d, d = f), i(d)) : t(d, f);
  }
  return Q;
}
var yn = sp(!0), op = sp(!1), oi = {}, tt = lr(oi), Da = lr(oi), Oa = lr(oi);
function Cr(A) {
  if (A === oi)
    throw Error(F(174));
  return A;
}
function Lf(A, e) {
  switch (lA(Oa, e), lA(Da, A), lA(tt, oi), A = e.nodeType, A) {
    case 9:
    case 11:
      e = (e = e.documentElement) ? e.namespaceURI : sl(null, "");
      break;
    default:
      A = A === 8 ? e.parentNode : e, e = A.namespaceURI || null, A = A.tagName, e = sl(e, A);
  }
  fA(tt), lA(tt, e);
}
function Fn() {
  fA(tt), fA(Da), fA(Oa);
}
function up(A) {
  Cr(Oa.current);
  var e = Cr(tt.current), t = sl(e, A.type);
  e !== t && (lA(Da, A), lA(tt, t));
}
function Df(A) {
  Da.current === A && (fA(tt), fA(Da));
}
var mA = lr(0);
function Ds(A) {
  for (var e = A; e !== null; ) {
    if (e.tag === 13) {
      var t = e.memoizedState;
      if (t !== null && (t = t.dehydrated, t === null || t.data === "$?" || t.data === "$!"))
        return e;
    } else if (e.tag === 19 && e.memoizedProps.revealOrder !== void 0) {
      if (e.flags & 128)
        return e;
    } else if (e.child !== null) {
      e.child.return = e, e = e.child;
      continue;
    }
    if (e === A)
      break;
    for (; e.sibling === null; ) {
      if (e.return === null || e.return === A)
        return null;
      e = e.return;
    }
    e.sibling.return = e.return, e = e.sibling;
  }
  return null;
}
var ou = [];
function Of() {
  for (var A = 0; A < ou.length; A++)
    ou[A]._workInProgressVersionPrimary = null;
  ou.length = 0;
}
var ss = xt.ReactCurrentDispatcher, uu = xt.ReactCurrentBatchConfig, Sr = 0, CA = null, kA = null, RA = null, Os = !1, Ba = !1, ka = 0, Dm = 0;
function ZA() {
  throw Error(F(321));
}
function kf(A, e) {
  if (e === null)
    return !1;
  for (var t = 0; t < e.length && t < A.length; t++)
    if (!Ze(A[t], e[t]))
      return !1;
  return !0;
}
function Mf(A, e, t, r, n, a) {
  if (Sr = a, CA = e, e.memoizedState = null, e.updateQueue = null, e.lanes = 0, ss.current = A === null || A.memoizedState === null ? Km : bm, A = t(r, n), Ba) {
    a = 0;
    do {
      if (Ba = !1, ka = 0, 25 <= a)
        throw Error(F(301));
      a += 1, RA = kA = null, e.updateQueue = null, ss.current = Nm, A = t(r, n);
    } while (Ba);
  }
  if (ss.current = ks, e = kA !== null && kA.next !== null, Sr = 0, RA = kA = CA = null, Os = !1, e)
    throw Error(F(300));
  return A;
}
function Kf() {
  var A = ka !== 0;
  return ka = 0, A;
}
function qe() {
  var A = { memoizedState: null, baseState: null, baseQueue: null, queue: null, next: null };
  return RA === null ? CA.memoizedState = RA = A : RA = RA.next = A, RA;
}
function Me() {
  if (kA === null) {
    var A = CA.alternate;
    A = A !== null ? A.memoizedState : null;
  } else
    A = kA.next;
  var e = RA === null ? CA.memoizedState : RA.next;
  if (e !== null)
    RA = e, kA = A;
  else {
    if (A === null)
      throw Error(F(310));
    kA = A, A = { memoizedState: kA.memoizedState, baseState: kA.baseState, baseQueue: kA.baseQueue, queue: kA.queue, next: null }, RA === null ? CA.memoizedState = RA = A : RA = RA.next = A;
  }
  return RA;
}
function Ma(A, e) {
  return typeof e == "function" ? e(A) : e;
}
function lu(A) {
  var e = Me(), t = e.queue;
  if (t === null)
    throw Error(F(311));
  t.lastRenderedReducer = A;
  var r = kA, n = r.baseQueue, a = t.pending;
  if (a !== null) {
    if (n !== null) {
      var i = n.next;
      n.next = a.next, a.next = i;
    }
    r.baseQueue = n = a, t.pending = null;
  }
  if (n !== null) {
    a = n.next, r = r.baseState;
    var s = i = null, o = null, u = a;
    do {
      var l = u.lane;
      if ((Sr & l) === l)
        o !== null && (o = o.next = { lane: 0, action: u.action, hasEagerState: u.hasEagerState, eagerState: u.eagerState, next: null }), r = u.hasEagerState ? u.eagerState : A(r, u.action);
      else {
        var c = {
          lane: l,
          action: u.action,
          hasEagerState: u.hasEagerState,
          eagerState: u.eagerState,
          next: null
        };
        o === null ? (s = o = c, i = r) : o = o.next = c, CA.lanes |= l, Tr |= l;
      }
      u = u.next;
    } while (u !== null && u !== a);
    o === null ? i = r : o.next = s, Ze(r, e.memoizedState) || (ge = !0), e.memoizedState = r, e.baseState = i, e.baseQueue = o, t.lastRenderedState = r;
  }
  if (A = t.interleaved, A !== null) {
    n = A;
    do
      a = n.lane, CA.lanes |= a, Tr |= a, n = n.next;
    while (n !== A);
  } else
    n === null && (t.lanes = 0);
  return [e.memoizedState, t.dispatch];
}
function cu(A) {
  var e = Me(), t = e.queue;
  if (t === null)
    throw Error(F(311));
  t.lastRenderedReducer = A;
  var r = t.dispatch, n = t.pending, a = e.memoizedState;
  if (n !== null) {
    t.pending = null;
    var i = n = n.next;
    do
      a = A(a, i.action), i = i.next;
    while (i !== n);
    Ze(a, e.memoizedState) || (ge = !0), e.memoizedState = a, e.baseQueue === null && (e.baseState = a), t.lastRenderedState = a;
  }
  return [a, r];
}
function lp() {
}
function cp(A, e) {
  var t = CA, r = Me(), n = e(), a = !Ze(r.memoizedState, n);
  if (a && (r.memoizedState = n, ge = !0), r = r.queue, bf(Bp.bind(null, t, r, A), [A]), r.getSnapshot !== e || a || RA !== null && RA.memoizedState.tag & 1) {
    if (t.flags |= 2048, Ka(9, dp.bind(null, t, r, n, e), void 0, null), PA === null)
      throw Error(F(349));
    Sr & 30 || fp(t, e, n);
  }
  return n;
}
function fp(A, e, t) {
  A.flags |= 16384, A = { getSnapshot: e, value: t }, e = CA.updateQueue, e === null ? (e = { lastEffect: null, stores: null }, CA.updateQueue = e, e.stores = [A]) : (t = e.stores, t === null ? e.stores = [A] : t.push(A));
}
function dp(A, e, t, r) {
  e.value = t, e.getSnapshot = r, gp(e) && hp(A);
}
function Bp(A, e, t) {
  return t(function() {
    gp(e) && hp(A);
  });
}
function gp(A) {
  var e = A.getSnapshot;
  A = A.value;
  try {
    var t = e();
    return !Ze(A, t);
  } catch {
    return !0;
  }
}
function hp(A) {
  var e = Ft(A, 1);
  e !== null && We(e, A, 1, -1);
}
function tB(A) {
  var e = qe();
  return typeof A == "function" && (A = A()), e.memoizedState = e.baseState = A, A = { pending: null, interleaved: null, lanes: 0, dispatch: null, lastRenderedReducer: Ma, lastRenderedState: A }, e.queue = A, A = A.dispatch = Mm.bind(null, CA, A), [e.memoizedState, A];
}
function Ka(A, e, t, r) {
  return A = { tag: A, create: e, destroy: t, deps: r, next: null }, e = CA.updateQueue, e === null ? (e = { lastEffect: null, stores: null }, CA.updateQueue = e, e.lastEffect = A.next = A) : (t = e.lastEffect, t === null ? e.lastEffect = A.next = A : (r = t.next, t.next = A, A.next = r, e.lastEffect = A)), A;
}
function pp() {
  return Me().memoizedState;
}
function os(A, e, t, r) {
  var n = qe();
  CA.flags |= A, n.memoizedState = Ka(1 | e, t, void 0, r === void 0 ? null : r);
}
function Co(A, e, t, r) {
  var n = Me();
  r = r === void 0 ? null : r;
  var a = void 0;
  if (kA !== null) {
    var i = kA.memoizedState;
    if (a = i.destroy, r !== null && kf(r, i.deps)) {
      n.memoizedState = Ka(e, t, a, r);
      return;
    }
  }
  CA.flags |= A, n.memoizedState = Ka(1 | e, t, a, r);
}
function rB(A, e) {
  return os(8390656, 8, A, e);
}
function bf(A, e) {
  return Co(2048, 8, A, e);
}
function wp(A, e) {
  return Co(4, 2, A, e);
}
function vp(A, e) {
  return Co(4, 4, A, e);
}
function mp(A, e) {
  if (typeof e == "function")
    return A = A(), e(A), function() {
      e(null);
    };
  if (e != null)
    return A = A(), e.current = A, function() {
      e.current = null;
    };
}
function Cp(A, e, t) {
  return t = t != null ? t.concat([A]) : null, Co(4, 4, mp.bind(null, e, A), t);
}
function Nf() {
}
function Qp(A, e) {
  var t = Me();
  e = e === void 0 ? null : e;
  var r = t.memoizedState;
  return r !== null && e !== null && kf(e, r[1]) ? r[0] : (t.memoizedState = [A, e], A);
}
function Up(A, e) {
  var t = Me();
  e = e === void 0 ? null : e;
  var r = t.memoizedState;
  return r !== null && e !== null && kf(e, r[1]) ? r[0] : (A = A(), t.memoizedState = [A, e], A);
}
function yp(A, e, t) {
  return Sr & 21 ? (Ze(t, e) || (t = Ih(), CA.lanes |= t, Tr |= t, A.baseState = !0), e) : (A.baseState && (A.baseState = !1, ge = !0), A.memoizedState = t);
}
function Om(A, e) {
  var t = aA;
  aA = t !== 0 && 4 > t ? t : 4, A(!0);
  var r = uu.transition;
  uu.transition = {};
  try {
    A(!1), e();
  } finally {
    aA = t, uu.transition = r;
  }
}
function Fp() {
  return Me().memoizedState;
}
function km(A, e, t) {
  var r = $t(A);
  if (t = { lane: r, action: t, hasEagerState: !1, eagerState: null, next: null }, Ep(A))
    Ip(e, t);
  else if (t = rp(A, e, t, r), t !== null) {
    var n = ie();
    We(t, A, r, n), Hp(t, e, r);
  }
}
function Mm(A, e, t) {
  var r = $t(A), n = { lane: r, action: t, hasEagerState: !1, eagerState: null, next: null };
  if (Ep(A))
    Ip(e, n);
  else {
    var a = A.alternate;
    if (A.lanes === 0 && (a === null || a.lanes === 0) && (a = e.lastRenderedReducer, a !== null))
      try {
        var i = e.lastRenderedState, s = a(i, t);
        if (n.hasEagerState = !0, n.eagerState = s, Ze(s, i)) {
          var o = e.interleaved;
          o === null ? (n.next = n, Tf(e)) : (n.next = o.next, o.next = n), e.interleaved = n;
          return;
        }
      } catch {
      } finally {
      }
    t = rp(A, e, n, r), t !== null && (n = ie(), We(t, A, r, n), Hp(t, e, r));
  }
}
function Ep(A) {
  var e = A.alternate;
  return A === CA || e !== null && e === CA;
}
function Ip(A, e) {
  Ba = Os = !0;
  var t = A.pending;
  t === null ? e.next = e : (e.next = t.next, t.next = e), A.pending = e;
}
function Hp(A, e, t) {
  if (t & 4194240) {
    var r = e.lanes;
    r &= A.pendingLanes, t |= r, e.lanes = t, pf(A, t);
  }
}
var ks = { readContext: ke, useCallback: ZA, useContext: ZA, useEffect: ZA, useImperativeHandle: ZA, useInsertionEffect: ZA, useLayoutEffect: ZA, useMemo: ZA, useReducer: ZA, useRef: ZA, useState: ZA, useDebugValue: ZA, useDeferredValue: ZA, useTransition: ZA, useMutableSource: ZA, useSyncExternalStore: ZA, useId: ZA, unstable_isNewReconciler: !1 }, Km = { readContext: ke, useCallback: function(A, e) {
  return qe().memoizedState = [A, e === void 0 ? null : e], A;
}, useContext: ke, useEffect: rB, useImperativeHandle: function(A, e, t) {
  return t = t != null ? t.concat([A]) : null, os(
    4194308,
    4,
    mp.bind(null, e, A),
    t
  );
}, useLayoutEffect: function(A, e) {
  return os(4194308, 4, A, e);
}, useInsertionEffect: function(A, e) {
  return os(4, 2, A, e);
}, useMemo: function(A, e) {
  var t = qe();
  return e = e === void 0 ? null : e, A = A(), t.memoizedState = [A, e], A;
}, useReducer: function(A, e, t) {
  var r = qe();
  return e = t !== void 0 ? t(e) : e, r.memoizedState = r.baseState = e, A = { pending: null, interleaved: null, lanes: 0, dispatch: null, lastRenderedReducer: A, lastRenderedState: e }, r.queue = A, A = A.dispatch = km.bind(null, CA, A), [r.memoizedState, A];
}, useRef: function(A) {
  var e = qe();
  return A = { current: A }, e.memoizedState = A;
}, useState: tB, useDebugValue: Nf, useDeferredValue: function(A) {
  return qe().memoizedState = A;
}, useTransition: function() {
  var A = tB(!1), e = A[0];
  return A = Om.bind(null, A[1]), qe().memoizedState = A, [e, A];
}, useMutableSource: function() {
}, useSyncExternalStore: function(A, e, t) {
  var r = CA, n = qe();
  if (gA) {
    if (t === void 0)
      throw Error(F(407));
    t = t();
  } else {
    if (t = e(), PA === null)
      throw Error(F(349));
    Sr & 30 || fp(r, e, t);
  }
  n.memoizedState = t;
  var a = { value: t, getSnapshot: e };
  return n.queue = a, rB(Bp.bind(
    null,
    r,
    a,
    A
  ), [A]), r.flags |= 2048, Ka(9, dp.bind(null, r, a, t, e), void 0, null), t;
}, useId: function() {
  var A = qe(), e = PA.identifierPrefix;
  if (gA) {
    var t = wt, r = pt;
    t = (r & ~(1 << 32 - Ge(r) - 1)).toString(32) + t, e = ":" + e + "R" + t, t = ka++, 0 < t && (e += "H" + t.toString(32)), e += ":";
  } else
    t = Dm++, e = ":" + e + "r" + t.toString(32) + ":";
  return A.memoizedState = e;
}, unstable_isNewReconciler: !1 }, bm = {
  readContext: ke,
  useCallback: Qp,
  useContext: ke,
  useEffect: bf,
  useImperativeHandle: Cp,
  useInsertionEffect: wp,
  useLayoutEffect: vp,
  useMemo: Up,
  useReducer: lu,
  useRef: pp,
  useState: function() {
    return lu(Ma);
  },
  useDebugValue: Nf,
  useDeferredValue: function(A) {
    var e = Me();
    return yp(e, kA.memoizedState, A);
  },
  useTransition: function() {
    var A = lu(Ma)[0], e = Me().memoizedState;
    return [A, e];
  },
  useMutableSource: lp,
  useSyncExternalStore: cp,
  useId: Fp,
  unstable_isNewReconciler: !1
}, Nm = { readContext: ke, useCallback: Qp, useContext: ke, useEffect: bf, useImperativeHandle: Cp, useInsertionEffect: wp, useLayoutEffect: vp, useMemo: Up, useReducer: cu, useRef: pp, useState: function() {
  return cu(Ma);
}, useDebugValue: Nf, useDeferredValue: function(A) {
  var e = Me();
  return kA === null ? e.memoizedState = A : yp(e, kA.memoizedState, A);
}, useTransition: function() {
  var A = cu(Ma)[0], e = Me().memoizedState;
  return [A, e];
}, useMutableSource: lp, useSyncExternalStore: cp, useId: Fp, unstable_isNewReconciler: !1 };
function En(A, e) {
  try {
    var t = "", r = e;
    do
      t += Bv(r), r = r.return;
    while (r);
    var n = t;
  } catch (a) {
    n = `
Error generating stack: ` + a.message + `
` + a.stack;
  }
  return { value: A, source: e, stack: n, digest: null };
}
function fu(A, e, t) {
  return { value: A, source: null, stack: t ?? null, digest: e ?? null };
}
function Sl(A, e) {
  try {
    console.error(e.value);
  } catch (t) {
    setTimeout(function() {
      throw t;
    });
  }
}
var Rm = typeof WeakMap == "function" ? WeakMap : Map;
function xp(A, e, t) {
  t = mt(-1, t), t.tag = 3, t.payload = { element: null };
  var r = e.value;
  return t.callback = function() {
    Ks || (Ks = !0, Nl = r), Sl(A, e);
  }, t;
}
function Sp(A, e, t) {
  t = mt(-1, t), t.tag = 3;
  var r = A.type.getDerivedStateFromError;
  if (typeof r == "function") {
    var n = e.value;
    t.payload = function() {
      return r(n);
    }, t.callback = function() {
      Sl(A, e);
    };
  }
  var a = A.stateNode;
  return a !== null && typeof a.componentDidCatch == "function" && (t.callback = function() {
    Sl(A, e), typeof r != "function" && (Jt === null ? Jt = /* @__PURE__ */ new Set([this]) : Jt.add(this));
    var i = e.stack;
    this.componentDidCatch(e.value, { componentStack: i !== null ? i : "" });
  }), t;
}
function nB(A, e, t) {
  var r = A.pingCache;
  if (r === null) {
    r = A.pingCache = new Rm();
    var n = /* @__PURE__ */ new Set();
    r.set(e, n);
  } else
    n = r.get(e), n === void 0 && (n = /* @__PURE__ */ new Set(), r.set(e, n));
  n.has(t) || (n.add(t), A = eC.bind(null, A, e, t), e.then(A, A));
}
function aB(A) {
  do {
    var e;
    if ((e = A.tag === 13) && (e = A.memoizedState, e = e !== null ? e.dehydrated !== null : !0), e)
      return A;
    A = A.return;
  } while (A !== null);
  return null;
}
function iB(A, e, t, r, n) {
  return A.mode & 1 ? (A.flags |= 65536, A.lanes = n, A) : (A === e ? A.flags |= 65536 : (A.flags |= 128, t.flags |= 131072, t.flags &= -52805, t.tag === 1 && (t.alternate === null ? t.tag = 17 : (e = mt(-1, 1), e.tag = 2, zt(t, e, 1))), t.lanes |= 1), A);
}
var Pm = xt.ReactCurrentOwner, ge = !1;
function ne(A, e, t, r) {
  e.child = A === null ? op(e, null, t, r) : yn(e, A.child, t, r);
}
function sB(A, e, t, r, n) {
  t = t.render;
  var a = e.ref;
  return pn(e, n), r = Mf(A, e, t, r, a, n), t = Kf(), A !== null && !ge ? (e.updateQueue = A.updateQueue, e.flags &= -2053, A.lanes &= ~n, Et(A, e, n)) : (gA && t && Ff(e), e.flags |= 1, ne(A, e, r, n), e.child);
}
function oB(A, e, t, r, n) {
  if (A === null) {
    var a = t.type;
    return typeof a == "function" && !Zf(a) && a.defaultProps === void 0 && t.compare === null && t.defaultProps === void 0 ? (e.tag = 15, e.type = a, Tp(A, e, a, r, n)) : (A = fs(t.type, null, r, e, e.mode, n), A.ref = e.ref, A.return = e, e.child = A);
  }
  if (a = A.child, !(A.lanes & n)) {
    var i = a.memoizedProps;
    if (t = t.compare, t = t !== null ? t : Sa, t(i, r) && A.ref === e.ref)
      return Et(A, e, n);
  }
  return e.flags |= 1, A = qt(a, r), A.ref = e.ref, A.return = e, e.child = A;
}
function Tp(A, e, t, r, n) {
  if (A !== null) {
    var a = A.memoizedProps;
    if (Sa(a, r) && A.ref === e.ref)
      if (ge = !1, e.pendingProps = r = a, (A.lanes & n) !== 0)
        A.flags & 131072 && (ge = !0);
      else
        return e.lanes = A.lanes, Et(A, e, n);
  }
  return Tl(A, e, t, r, n);
}
function _p(A, e, t) {
  var r = e.pendingProps, n = r.children, a = A !== null ? A.memoizedState : null;
  if (r.mode === "hidden")
    if (!(e.mode & 1))
      e.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }, lA(cn, me), me |= t;
    else {
      if (!(t & 1073741824))
        return A = a !== null ? a.baseLanes | t : t, e.lanes = e.childLanes = 1073741824, e.memoizedState = { baseLanes: A, cachePool: null, transitions: null }, e.updateQueue = null, lA(cn, me), me |= A, null;
      e.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }, r = a !== null ? a.baseLanes : t, lA(cn, me), me |= r;
    }
  else
    a !== null ? (r = a.baseLanes | t, e.memoizedState = null) : r = t, lA(cn, me), me |= r;
  return ne(A, e, n, t), e.child;
}
function Lp(A, e) {
  var t = e.ref;
  (A === null && t !== null || A !== null && A.ref !== t) && (e.flags |= 512, e.flags |= 2097152);
}
function Tl(A, e, t, r, n) {
  var a = pe(t) ? Hr : qA.current;
  return a = Qn(e, a), pn(e, n), t = Mf(A, e, t, r, a, n), r = Kf(), A !== null && !ge ? (e.updateQueue = A.updateQueue, e.flags &= -2053, A.lanes &= ~n, Et(A, e, n)) : (gA && r && Ff(e), e.flags |= 1, ne(A, e, t, n), e.child);
}
function uB(A, e, t, r, n) {
  if (pe(t)) {
    var a = !0;
    Hs(e);
  } else
    a = !1;
  if (pn(e, n), e.stateNode === null)
    us(A, e), ip(e, t, r), xl(e, t, r, n), r = !0;
  else if (A === null) {
    var i = e.stateNode, s = e.memoizedProps;
    i.props = s;
    var o = i.context, u = t.contextType;
    typeof u == "object" && u !== null ? u = ke(u) : (u = pe(t) ? Hr : qA.current, u = Qn(e, u));
    var l = t.getDerivedStateFromProps, c = typeof l == "function" || typeof i.getSnapshotBeforeUpdate == "function";
    c || typeof i.UNSAFE_componentWillReceiveProps != "function" && typeof i.componentWillReceiveProps != "function" || (s !== r || o !== u) && AB(e, i, r, u), Ot = !1;
    var g = e.memoizedState;
    i.state = g, Ls(e, r, i, n), o = e.memoizedState, s !== r || g !== o || he.current || Ot ? (typeof l == "function" && (Hl(e, t, l, r), o = e.memoizedState), (s = Ot || qd(e, t, s, r, g, o, u)) ? (c || typeof i.UNSAFE_componentWillMount != "function" && typeof i.componentWillMount != "function" || (typeof i.componentWillMount == "function" && i.componentWillMount(), typeof i.UNSAFE_componentWillMount == "function" && i.UNSAFE_componentWillMount()), typeof i.componentDidMount == "function" && (e.flags |= 4194308)) : (typeof i.componentDidMount == "function" && (e.flags |= 4194308), e.memoizedProps = r, e.memoizedState = o), i.props = r, i.state = o, i.context = u, r = s) : (typeof i.componentDidMount == "function" && (e.flags |= 4194308), r = !1);
  } else {
    i = e.stateNode, np(A, e), s = e.memoizedProps, u = e.type === e.elementType ? s : Ne(e.type, s), i.props = u, c = e.pendingProps, g = i.context, o = t.contextType, typeof o == "object" && o !== null ? o = ke(o) : (o = pe(t) ? Hr : qA.current, o = Qn(e, o));
    var w = t.getDerivedStateFromProps;
    (l = typeof w == "function" || typeof i.getSnapshotBeforeUpdate == "function") || typeof i.UNSAFE_componentWillReceiveProps != "function" && typeof i.componentWillReceiveProps != "function" || (s !== c || g !== o) && AB(e, i, r, o), Ot = !1, g = e.memoizedState, i.state = g, Ls(e, r, i, n);
    var p = e.memoizedState;
    s !== c || g !== p || he.current || Ot ? (typeof w == "function" && (Hl(e, t, w, r), p = e.memoizedState), (u = Ot || qd(e, t, u, r, g, p, o) || !1) ? (l || typeof i.UNSAFE_componentWillUpdate != "function" && typeof i.componentWillUpdate != "function" || (typeof i.componentWillUpdate == "function" && i.componentWillUpdate(r, p, o), typeof i.UNSAFE_componentWillUpdate == "function" && i.UNSAFE_componentWillUpdate(r, p, o)), typeof i.componentDidUpdate == "function" && (e.flags |= 4), typeof i.getSnapshotBeforeUpdate == "function" && (e.flags |= 1024)) : (typeof i.componentDidUpdate != "function" || s === A.memoizedProps && g === A.memoizedState || (e.flags |= 4), typeof i.getSnapshotBeforeUpdate != "function" || s === A.memoizedProps && g === A.memoizedState || (e.flags |= 1024), e.memoizedProps = r, e.memoizedState = p), i.props = r, i.state = p, i.context = o, r = u) : (typeof i.componentDidUpdate != "function" || s === A.memoizedProps && g === A.memoizedState || (e.flags |= 4), typeof i.getSnapshotBeforeUpdate != "function" || s === A.memoizedProps && g === A.memoizedState || (e.flags |= 1024), r = !1);
  }
  return _l(A, e, t, r, a, n);
}
function _l(A, e, t, r, n, a) {
  Lp(A, e);
  var i = (e.flags & 128) !== 0;
  if (!r && !i)
    return n && Zd(e, t, !1), Et(A, e, a);
  r = e.stateNode, Pm.current = e;
  var s = i && typeof t.getDerivedStateFromError != "function" ? null : r.render();
  return e.flags |= 1, A !== null && i ? (e.child = yn(e, A.child, null, a), e.child = yn(e, null, s, a)) : ne(A, e, s, a), e.memoizedState = r.state, n && Zd(e, t, !0), e.child;
}
function Dp(A) {
  var e = A.stateNode;
  e.pendingContext ? Xd(A, e.pendingContext, e.pendingContext !== e.context) : e.context && Xd(A, e.context, !1), Lf(A, e.containerInfo);
}
function lB(A, e, t, r, n) {
  return Un(), If(n), e.flags |= 256, ne(A, e, t, r), e.child;
}
var Ll = { dehydrated: null, treeContext: null, retryLane: 0 };
function Dl(A) {
  return { baseLanes: A, cachePool: null, transitions: null };
}
function Op(A, e, t) {
  var r = e.pendingProps, n = mA.current, a = !1, i = (e.flags & 128) !== 0, s;
  if ((s = i) || (s = A !== null && A.memoizedState === null ? !1 : (n & 2) !== 0), s ? (a = !0, e.flags &= -129) : (A === null || A.memoizedState !== null) && (n |= 1), lA(mA, n & 1), A === null)
    return El(e), A = e.memoizedState, A !== null && (A = A.dehydrated, A !== null) ? (e.mode & 1 ? A.data === "$!" ? e.lanes = 8 : e.lanes = 1073741824 : e.lanes = 1, null) : (i = r.children, A = r.fallback, a ? (r = e.mode, a = e.child, i = { mode: "hidden", children: i }, !(r & 1) && a !== null ? (a.childLanes = 0, a.pendingProps = i) : a = yo(i, r, 0, null), A = yr(A, r, t, null), a.return = e, A.return = e, a.sibling = A, e.child = a, e.child.memoizedState = Dl(t), e.memoizedState = Ll, A) : Rf(e, i));
  if (n = A.memoizedState, n !== null && (s = n.dehydrated, s !== null))
    return Vm(A, e, i, r, s, n, t);
  if (a) {
    a = r.fallback, i = e.mode, n = A.child, s = n.sibling;
    var o = { mode: "hidden", children: r.children };
    return !(i & 1) && e.child !== n ? (r = e.child, r.childLanes = 0, r.pendingProps = o, e.deletions = null) : (r = qt(n, o), r.subtreeFlags = n.subtreeFlags & 14680064), s !== null ? a = qt(s, a) : (a = yr(a, i, t, null), a.flags |= 2), a.return = e, r.return = e, r.sibling = a, e.child = r, r = a, a = e.child, i = A.child.memoizedState, i = i === null ? Dl(t) : { baseLanes: i.baseLanes | t, cachePool: null, transitions: i.transitions }, a.memoizedState = i, a.childLanes = A.childLanes & ~t, e.memoizedState = Ll, r;
  }
  return a = A.child, A = a.sibling, r = qt(a, { mode: "visible", children: r.children }), !(e.mode & 1) && (r.lanes = t), r.return = e, r.sibling = null, A !== null && (t = e.deletions, t === null ? (e.deletions = [A], e.flags |= 16) : t.push(A)), e.child = r, e.memoizedState = null, r;
}
function Rf(A, e) {
  return e = yo({ mode: "visible", children: e }, A.mode, 0, null), e.return = A, A.child = e;
}
function Ei(A, e, t, r) {
  return r !== null && If(r), yn(e, A.child, null, t), A = Rf(e, e.pendingProps.children), A.flags |= 2, e.memoizedState = null, A;
}
function Vm(A, e, t, r, n, a, i) {
  if (t)
    return e.flags & 256 ? (e.flags &= -257, r = fu(Error(F(422))), Ei(A, e, i, r)) : e.memoizedState !== null ? (e.child = A.child, e.flags |= 128, null) : (a = r.fallback, n = e.mode, r = yo({ mode: "visible", children: r.children }, n, 0, null), a = yr(a, n, i, null), a.flags |= 2, r.return = e, a.return = e, r.sibling = a, e.child = r, e.mode & 1 && yn(e, A.child, null, i), e.child.memoizedState = Dl(i), e.memoizedState = Ll, a);
  if (!(e.mode & 1))
    return Ei(A, e, i, null);
  if (n.data === "$!") {
    if (r = n.nextSibling && n.nextSibling.dataset, r)
      var s = r.dgst;
    return r = s, a = Error(F(419)), r = fu(a, r, void 0), Ei(A, e, i, r);
  }
  if (s = (i & A.childLanes) !== 0, ge || s) {
    if (r = PA, r !== null) {
      switch (i & -i) {
        case 4:
          n = 2;
          break;
        case 16:
          n = 8;
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
          n = 32;
          break;
        case 536870912:
          n = 268435456;
          break;
        default:
          n = 0;
      }
      n = n & (r.suspendedLanes | i) ? 0 : n, n !== 0 && n !== a.retryLane && (a.retryLane = n, Ft(A, n), We(r, A, n, -1));
    }
    return Xf(), r = fu(Error(F(421))), Ei(A, e, i, r);
  }
  return n.data === "$?" ? (e.flags |= 128, e.child = A.child, e = tC.bind(null, A), n._reactRetry = e, null) : (A = a.treeContext, Ce = jt(n.nextSibling), Qe = e, gA = !0, Pe = null, A !== null && (He[xe++] = pt, He[xe++] = wt, He[xe++] = xr, pt = A.id, wt = A.overflow, xr = e), e = Rf(e, r.children), e.flags |= 4096, e);
}
function cB(A, e, t) {
  A.lanes |= e;
  var r = A.alternate;
  r !== null && (r.lanes |= e), Il(A.return, e, t);
}
function du(A, e, t, r, n) {
  var a = A.memoizedState;
  a === null ? A.memoizedState = { isBackwards: e, rendering: null, renderingStartTime: 0, last: r, tail: t, tailMode: n } : (a.isBackwards = e, a.rendering = null, a.renderingStartTime = 0, a.last = r, a.tail = t, a.tailMode = n);
}
function kp(A, e, t) {
  var r = e.pendingProps, n = r.revealOrder, a = r.tail;
  if (ne(A, e, r.children, t), r = mA.current, r & 2)
    r = r & 1 | 2, e.flags |= 128;
  else {
    if (A !== null && A.flags & 128)
      A:
        for (A = e.child; A !== null; ) {
          if (A.tag === 13)
            A.memoizedState !== null && cB(A, t, e);
          else if (A.tag === 19)
            cB(A, t, e);
          else if (A.child !== null) {
            A.child.return = A, A = A.child;
            continue;
          }
          if (A === e)
            break A;
          for (; A.sibling === null; ) {
            if (A.return === null || A.return === e)
              break A;
            A = A.return;
          }
          A.sibling.return = A.return, A = A.sibling;
        }
    r &= 1;
  }
  if (lA(mA, r), !(e.mode & 1))
    e.memoizedState = null;
  else
    switch (n) {
      case "forwards":
        for (t = e.child, n = null; t !== null; )
          A = t.alternate, A !== null && Ds(A) === null && (n = t), t = t.sibling;
        t = n, t === null ? (n = e.child, e.child = null) : (n = t.sibling, t.sibling = null), du(e, !1, n, t, a);
        break;
      case "backwards":
        for (t = null, n = e.child, e.child = null; n !== null; ) {
          if (A = n.alternate, A !== null && Ds(A) === null) {
            e.child = n;
            break;
          }
          A = n.sibling, n.sibling = t, t = n, n = A;
        }
        du(e, !0, t, null, a);
        break;
      case "together":
        du(e, !1, null, null, void 0);
        break;
      default:
        e.memoizedState = null;
    }
  return e.child;
}
function us(A, e) {
  !(e.mode & 1) && A !== null && (A.alternate = null, e.alternate = null, e.flags |= 2);
}
function Et(A, e, t) {
  if (A !== null && (e.dependencies = A.dependencies), Tr |= e.lanes, !(t & e.childLanes))
    return null;
  if (A !== null && e.child !== A.child)
    throw Error(F(153));
  if (e.child !== null) {
    for (A = e.child, t = qt(A, A.pendingProps), e.child = t, t.return = e; A.sibling !== null; )
      A = A.sibling, t = t.sibling = qt(A, A.pendingProps), t.return = e;
    t.sibling = null;
  }
  return e.child;
}
function Gm(A, e, t) {
  switch (e.tag) {
    case 3:
      Dp(e), Un();
      break;
    case 5:
      up(e);
      break;
    case 1:
      pe(e.type) && Hs(e);
      break;
    case 4:
      Lf(e, e.stateNode.containerInfo);
      break;
    case 10:
      var r = e.type._context, n = e.memoizedProps.value;
      lA(Ts, r._currentValue), r._currentValue = n;
      break;
    case 13:
      if (r = e.memoizedState, r !== null)
        return r.dehydrated !== null ? (lA(mA, mA.current & 1), e.flags |= 128, null) : t & e.child.childLanes ? Op(A, e, t) : (lA(mA, mA.current & 1), A = Et(A, e, t), A !== null ? A.sibling : null);
      lA(mA, mA.current & 1);
      break;
    case 19:
      if (r = (t & e.childLanes) !== 0, A.flags & 128) {
        if (r)
          return kp(A, e, t);
        e.flags |= 128;
      }
      if (n = e.memoizedState, n !== null && (n.rendering = null, n.tail = null, n.lastEffect = null), lA(mA, mA.current), r)
        break;
      return null;
    case 22:
    case 23:
      return e.lanes = 0, _p(A, e, t);
  }
  return Et(A, e, t);
}
var Mp, Ol, Kp, bp;
Mp = function(A, e) {
  for (var t = e.child; t !== null; ) {
    if (t.tag === 5 || t.tag === 6)
      A.appendChild(t.stateNode);
    else if (t.tag !== 4 && t.child !== null) {
      t.child.return = t, t = t.child;
      continue;
    }
    if (t === e)
      break;
    for (; t.sibling === null; ) {
      if (t.return === null || t.return === e)
        return;
      t = t.return;
    }
    t.sibling.return = t.return, t = t.sibling;
  }
};
Ol = function() {
};
Kp = function(A, e, t, r) {
  var n = A.memoizedProps;
  if (n !== r) {
    A = e.stateNode, Cr(tt.current);
    var a = null;
    switch (t) {
      case "input":
        n = rl(A, n), r = rl(A, r), a = [];
        break;
      case "select":
        n = QA({}, n, { value: void 0 }), r = QA({}, r, { value: void 0 }), a = [];
        break;
      case "textarea":
        n = il(A, n), r = il(A, r), a = [];
        break;
      default:
        typeof n.onClick != "function" && typeof r.onClick == "function" && (A.onclick = Es);
    }
    ol(t, r);
    var i;
    t = null;
    for (u in n)
      if (!r.hasOwnProperty(u) && n.hasOwnProperty(u) && n[u] != null)
        if (u === "style") {
          var s = n[u];
          for (i in s)
            s.hasOwnProperty(i) && (t || (t = {}), t[i] = "");
        } else
          u !== "dangerouslySetInnerHTML" && u !== "children" && u !== "suppressContentEditableWarning" && u !== "suppressHydrationWarning" && u !== "autoFocus" && (Ua.hasOwnProperty(u) ? a || (a = []) : (a = a || []).push(u, null));
    for (u in r) {
      var o = r[u];
      if (s = n != null ? n[u] : void 0, r.hasOwnProperty(u) && o !== s && (o != null || s != null))
        if (u === "style")
          if (s) {
            for (i in s)
              !s.hasOwnProperty(i) || o && o.hasOwnProperty(i) || (t || (t = {}), t[i] = "");
            for (i in o)
              o.hasOwnProperty(i) && s[i] !== o[i] && (t || (t = {}), t[i] = o[i]);
          } else
            t || (a || (a = []), a.push(
              u,
              t
            )), t = o;
        else
          u === "dangerouslySetInnerHTML" ? (o = o ? o.__html : void 0, s = s ? s.__html : void 0, o != null && s !== o && (a = a || []).push(u, o)) : u === "children" ? typeof o != "string" && typeof o != "number" || (a = a || []).push(u, "" + o) : u !== "suppressContentEditableWarning" && u !== "suppressHydrationWarning" && (Ua.hasOwnProperty(u) ? (o != null && u === "onScroll" && cA("scroll", A), a || s === o || (a = [])) : (a = a || []).push(u, o));
    }
    t && (a = a || []).push("style", t);
    var u = a;
    (e.updateQueue = u) && (e.flags |= 4);
  }
};
bp = function(A, e, t, r) {
  t !== r && (e.flags |= 4);
};
function Vn(A, e) {
  if (!gA)
    switch (A.tailMode) {
      case "hidden":
        e = A.tail;
        for (var t = null; e !== null; )
          e.alternate !== null && (t = e), e = e.sibling;
        t === null ? A.tail = null : t.sibling = null;
        break;
      case "collapsed":
        t = A.tail;
        for (var r = null; t !== null; )
          t.alternate !== null && (r = t), t = t.sibling;
        r === null ? e || A.tail === null ? A.tail = null : A.tail.sibling = null : r.sibling = null;
    }
}
function jA(A) {
  var e = A.alternate !== null && A.alternate.child === A.child, t = 0, r = 0;
  if (e)
    for (var n = A.child; n !== null; )
      t |= n.lanes | n.childLanes, r |= n.subtreeFlags & 14680064, r |= n.flags & 14680064, n.return = A, n = n.sibling;
  else
    for (n = A.child; n !== null; )
      t |= n.lanes | n.childLanes, r |= n.subtreeFlags, r |= n.flags, n.return = A, n = n.sibling;
  return A.subtreeFlags |= r, A.childLanes = t, e;
}
function Wm(A, e, t) {
  var r = e.pendingProps;
  switch (Ef(e), e.tag) {
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
      return jA(e), null;
    case 1:
      return pe(e.type) && Is(), jA(e), null;
    case 3:
      return r = e.stateNode, Fn(), fA(he), fA(qA), Of(), r.pendingContext && (r.context = r.pendingContext, r.pendingContext = null), (A === null || A.child === null) && (yi(e) ? e.flags |= 4 : A === null || A.memoizedState.isDehydrated && !(e.flags & 256) || (e.flags |= 1024, Pe !== null && (Vl(Pe), Pe = null))), Ol(A, e), jA(e), null;
    case 5:
      Df(e);
      var n = Cr(Oa.current);
      if (t = e.type, A !== null && e.stateNode != null)
        Kp(A, e, t, r, n), A.ref !== e.ref && (e.flags |= 512, e.flags |= 2097152);
      else {
        if (!r) {
          if (e.stateNode === null)
            throw Error(F(166));
          return jA(e), null;
        }
        if (A = Cr(tt.current), yi(e)) {
          r = e.stateNode, t = e.type;
          var a = e.memoizedProps;
          switch (r[At] = e, r[La] = a, A = (e.mode & 1) !== 0, t) {
            case "dialog":
              cA("cancel", r), cA("close", r);
              break;
            case "iframe":
            case "object":
            case "embed":
              cA("load", r);
              break;
            case "video":
            case "audio":
              for (n = 0; n < ea.length; n++)
                cA(ea[n], r);
              break;
            case "source":
              cA("error", r);
              break;
            case "img":
            case "image":
            case "link":
              cA(
                "error",
                r
              ), cA("load", r);
              break;
            case "details":
              cA("toggle", r);
              break;
            case "input":
              md(r, a), cA("invalid", r);
              break;
            case "select":
              r._wrapperState = { wasMultiple: !!a.multiple }, cA("invalid", r);
              break;
            case "textarea":
              Qd(r, a), cA("invalid", r);
          }
          ol(t, a), n = null;
          for (var i in a)
            if (a.hasOwnProperty(i)) {
              var s = a[i];
              i === "children" ? typeof s == "string" ? r.textContent !== s && (a.suppressHydrationWarning !== !0 && Ui(r.textContent, s, A), n = ["children", s]) : typeof s == "number" && r.textContent !== "" + s && (a.suppressHydrationWarning !== !0 && Ui(
                r.textContent,
                s,
                A
              ), n = ["children", "" + s]) : Ua.hasOwnProperty(i) && s != null && i === "onScroll" && cA("scroll", r);
            }
          switch (t) {
            case "input":
              gi(r), Cd(r, a, !0);
              break;
            case "textarea":
              gi(r), Ud(r);
              break;
            case "select":
            case "option":
              break;
            default:
              typeof a.onClick == "function" && (r.onclick = Es);
          }
          r = n, e.updateQueue = r, r !== null && (e.flags |= 4);
        } else {
          i = n.nodeType === 9 ? n : n.ownerDocument, A === "http://www.w3.org/1999/xhtml" && (A = fh(t)), A === "http://www.w3.org/1999/xhtml" ? t === "script" ? (A = i.createElement("div"), A.innerHTML = "<script><\/script>", A = A.removeChild(A.firstChild)) : typeof r.is == "string" ? A = i.createElement(t, { is: r.is }) : (A = i.createElement(t), t === "select" && (i = A, r.multiple ? i.multiple = !0 : r.size && (i.size = r.size))) : A = i.createElementNS(A, t), A[At] = e, A[La] = r, Mp(A, e, !1, !1), e.stateNode = A;
          A: {
            switch (i = ul(t, r), t) {
              case "dialog":
                cA("cancel", A), cA("close", A), n = r;
                break;
              case "iframe":
              case "object":
              case "embed":
                cA("load", A), n = r;
                break;
              case "video":
              case "audio":
                for (n = 0; n < ea.length; n++)
                  cA(ea[n], A);
                n = r;
                break;
              case "source":
                cA("error", A), n = r;
                break;
              case "img":
              case "image":
              case "link":
                cA(
                  "error",
                  A
                ), cA("load", A), n = r;
                break;
              case "details":
                cA("toggle", A), n = r;
                break;
              case "input":
                md(A, r), n = rl(A, r), cA("invalid", A);
                break;
              case "option":
                n = r;
                break;
              case "select":
                A._wrapperState = { wasMultiple: !!r.multiple }, n = QA({}, r, { value: void 0 }), cA("invalid", A);
                break;
              case "textarea":
                Qd(A, r), n = il(A, r), cA("invalid", A);
                break;
              default:
                n = r;
            }
            ol(t, n), s = n;
            for (a in s)
              if (s.hasOwnProperty(a)) {
                var o = s[a];
                a === "style" ? gh(A, o) : a === "dangerouslySetInnerHTML" ? (o = o ? o.__html : void 0, o != null && dh(A, o)) : a === "children" ? typeof o == "string" ? (t !== "textarea" || o !== "") && ya(A, o) : typeof o == "number" && ya(A, "" + o) : a !== "suppressContentEditableWarning" && a !== "suppressHydrationWarning" && a !== "autoFocus" && (Ua.hasOwnProperty(a) ? o != null && a === "onScroll" && cA("scroll", A) : o != null && cf(A, a, o, i));
              }
            switch (t) {
              case "input":
                gi(A), Cd(A, r, !1);
                break;
              case "textarea":
                gi(A), Ud(A);
                break;
              case "option":
                r.value != null && A.setAttribute("value", "" + tr(r.value));
                break;
              case "select":
                A.multiple = !!r.multiple, a = r.value, a != null ? dn(A, !!r.multiple, a, !1) : r.defaultValue != null && dn(
                  A,
                  !!r.multiple,
                  r.defaultValue,
                  !0
                );
                break;
              default:
                typeof n.onClick == "function" && (A.onclick = Es);
            }
            switch (t) {
              case "button":
              case "input":
              case "select":
              case "textarea":
                r = !!r.autoFocus;
                break A;
              case "img":
                r = !0;
                break A;
              default:
                r = !1;
            }
          }
          r && (e.flags |= 4);
        }
        e.ref !== null && (e.flags |= 512, e.flags |= 2097152);
      }
      return jA(e), null;
    case 6:
      if (A && e.stateNode != null)
        bp(A, e, A.memoizedProps, r);
      else {
        if (typeof r != "string" && e.stateNode === null)
          throw Error(F(166));
        if (t = Cr(Oa.current), Cr(tt.current), yi(e)) {
          if (r = e.stateNode, t = e.memoizedProps, r[At] = e, (a = r.nodeValue !== t) && (A = Qe, A !== null))
            switch (A.tag) {
              case 3:
                Ui(r.nodeValue, t, (A.mode & 1) !== 0);
                break;
              case 5:
                A.memoizedProps.suppressHydrationWarning !== !0 && Ui(r.nodeValue, t, (A.mode & 1) !== 0);
            }
          a && (e.flags |= 4);
        } else
          r = (t.nodeType === 9 ? t : t.ownerDocument).createTextNode(r), r[At] = e, e.stateNode = r;
      }
      return jA(e), null;
    case 13:
      if (fA(mA), r = e.memoizedState, A === null || A.memoizedState !== null && A.memoizedState.dehydrated !== null) {
        if (gA && Ce !== null && e.mode & 1 && !(e.flags & 128))
          tp(), Un(), e.flags |= 98560, a = !1;
        else if (a = yi(e), r !== null && r.dehydrated !== null) {
          if (A === null) {
            if (!a)
              throw Error(F(318));
            if (a = e.memoizedState, a = a !== null ? a.dehydrated : null, !a)
              throw Error(F(317));
            a[At] = e;
          } else
            Un(), !(e.flags & 128) && (e.memoizedState = null), e.flags |= 4;
          jA(e), a = !1;
        } else
          Pe !== null && (Vl(Pe), Pe = null), a = !0;
        if (!a)
          return e.flags & 65536 ? e : null;
      }
      return e.flags & 128 ? (e.lanes = t, e) : (r = r !== null, r !== (A !== null && A.memoizedState !== null) && r && (e.child.flags |= 8192, e.mode & 1 && (A === null || mA.current & 1 ? KA === 0 && (KA = 3) : Xf())), e.updateQueue !== null && (e.flags |= 4), jA(e), null);
    case 4:
      return Fn(), Ol(A, e), A === null && Ta(e.stateNode.containerInfo), jA(e), null;
    case 10:
      return Sf(e.type._context), jA(e), null;
    case 17:
      return pe(e.type) && Is(), jA(e), null;
    case 19:
      if (fA(mA), a = e.memoizedState, a === null)
        return jA(e), null;
      if (r = (e.flags & 128) !== 0, i = a.rendering, i === null)
        if (r)
          Vn(a, !1);
        else {
          if (KA !== 0 || A !== null && A.flags & 128)
            for (A = e.child; A !== null; ) {
              if (i = Ds(A), i !== null) {
                for (e.flags |= 128, Vn(a, !1), r = i.updateQueue, r !== null && (e.updateQueue = r, e.flags |= 4), e.subtreeFlags = 0, r = t, t = e.child; t !== null; )
                  a = t, A = r, a.flags &= 14680066, i = a.alternate, i === null ? (a.childLanes = 0, a.lanes = A, a.child = null, a.subtreeFlags = 0, a.memoizedProps = null, a.memoizedState = null, a.updateQueue = null, a.dependencies = null, a.stateNode = null) : (a.childLanes = i.childLanes, a.lanes = i.lanes, a.child = i.child, a.subtreeFlags = 0, a.deletions = null, a.memoizedProps = i.memoizedProps, a.memoizedState = i.memoizedState, a.updateQueue = i.updateQueue, a.type = i.type, A = i.dependencies, a.dependencies = A === null ? null : { lanes: A.lanes, firstContext: A.firstContext }), t = t.sibling;
                return lA(mA, mA.current & 1 | 2), e.child;
              }
              A = A.sibling;
            }
          a.tail !== null && TA() > In && (e.flags |= 128, r = !0, Vn(a, !1), e.lanes = 4194304);
        }
      else {
        if (!r)
          if (A = Ds(i), A !== null) {
            if (e.flags |= 128, r = !0, t = A.updateQueue, t !== null && (e.updateQueue = t, e.flags |= 4), Vn(a, !0), a.tail === null && a.tailMode === "hidden" && !i.alternate && !gA)
              return jA(e), null;
          } else
            2 * TA() - a.renderingStartTime > In && t !== 1073741824 && (e.flags |= 128, r = !0, Vn(a, !1), e.lanes = 4194304);
        a.isBackwards ? (i.sibling = e.child, e.child = i) : (t = a.last, t !== null ? t.sibling = i : e.child = i, a.last = i);
      }
      return a.tail !== null ? (e = a.tail, a.rendering = e, a.tail = e.sibling, a.renderingStartTime = TA(), e.sibling = null, t = mA.current, lA(mA, r ? t & 1 | 2 : t & 1), e) : (jA(e), null);
    case 22:
    case 23:
      return Yf(), r = e.memoizedState !== null, A !== null && A.memoizedState !== null !== r && (e.flags |= 8192), r && e.mode & 1 ? me & 1073741824 && (jA(e), e.subtreeFlags & 6 && (e.flags |= 8192)) : jA(e), null;
    case 24:
      return null;
    case 25:
      return null;
  }
  throw Error(F(156, e.tag));
}
function Ym(A, e) {
  switch (Ef(e), e.tag) {
    case 1:
      return pe(e.type) && Is(), A = e.flags, A & 65536 ? (e.flags = A & -65537 | 128, e) : null;
    case 3:
      return Fn(), fA(he), fA(qA), Of(), A = e.flags, A & 65536 && !(A & 128) ? (e.flags = A & -65537 | 128, e) : null;
    case 5:
      return Df(e), null;
    case 13:
      if (fA(mA), A = e.memoizedState, A !== null && A.dehydrated !== null) {
        if (e.alternate === null)
          throw Error(F(340));
        Un();
      }
      return A = e.flags, A & 65536 ? (e.flags = A & -65537 | 128, e) : null;
    case 19:
      return fA(mA), null;
    case 4:
      return Fn(), null;
    case 10:
      return Sf(e.type._context), null;
    case 22:
    case 23:
      return Yf(), null;
    case 24:
      return null;
    default:
      return null;
  }
}
var Ii = !1, $A = !1, Xm = typeof WeakSet == "function" ? WeakSet : Set, D = null;
function ln(A, e) {
  var t = A.ref;
  if (t !== null)
    if (typeof t == "function")
      try {
        t(null);
      } catch (r) {
        HA(A, e, r);
      }
    else
      t.current = null;
}
function kl(A, e, t) {
  try {
    t();
  } catch (r) {
    HA(A, e, r);
  }
}
var fB = !1;
function Zm(A, e) {
  if (vl = Us, A = Vh(), yf(A)) {
    if ("selectionStart" in A)
      var t = { start: A.selectionStart, end: A.selectionEnd };
    else
      A: {
        t = (t = A.ownerDocument) && t.defaultView || window;
        var r = t.getSelection && t.getSelection();
        if (r && r.rangeCount !== 0) {
          t = r.anchorNode;
          var n = r.anchorOffset, a = r.focusNode;
          r = r.focusOffset;
          try {
            t.nodeType, a.nodeType;
          } catch {
            t = null;
            break A;
          }
          var i = 0, s = -1, o = -1, u = 0, l = 0, c = A, g = null;
          e:
            for (; ; ) {
              for (var w; c !== t || n !== 0 && c.nodeType !== 3 || (s = i + n), c !== a || r !== 0 && c.nodeType !== 3 || (o = i + r), c.nodeType === 3 && (i += c.nodeValue.length), (w = c.firstChild) !== null; )
                g = c, c = w;
              for (; ; ) {
                if (c === A)
                  break e;
                if (g === t && ++u === n && (s = i), g === a && ++l === r && (o = i), (w = c.nextSibling) !== null)
                  break;
                c = g, g = c.parentNode;
              }
              c = w;
            }
          t = s === -1 || o === -1 ? null : { start: s, end: o };
        } else
          t = null;
      }
    t = t || { start: 0, end: 0 };
  } else
    t = null;
  for (ml = { focusedElem: A, selectionRange: t }, Us = !1, D = e; D !== null; )
    if (e = D, A = e.child, (e.subtreeFlags & 1028) !== 0 && A !== null)
      A.return = e, D = A;
    else
      for (; D !== null; ) {
        e = D;
        try {
          var p = e.alternate;
          if (e.flags & 1024)
            switch (e.tag) {
              case 0:
              case 11:
              case 15:
                break;
              case 1:
                if (p !== null) {
                  var C = p.memoizedProps, Q = p.memoizedState, d = e.stateNode, f = d.getSnapshotBeforeUpdate(e.elementType === e.type ? C : Ne(e.type, C), Q);
                  d.__reactInternalSnapshotBeforeUpdate = f;
                }
                break;
              case 3:
                var B = e.stateNode.containerInfo;
                B.nodeType === 1 ? B.textContent = "" : B.nodeType === 9 && B.documentElement && B.removeChild(B.documentElement);
                break;
              case 5:
              case 6:
              case 4:
              case 17:
                break;
              default:
                throw Error(F(163));
            }
        } catch (h) {
          HA(e, e.return, h);
        }
        if (A = e.sibling, A !== null) {
          A.return = e.return, D = A;
          break;
        }
        D = e.return;
      }
  return p = fB, fB = !1, p;
}
function ga(A, e, t) {
  var r = e.updateQueue;
  if (r = r !== null ? r.lastEffect : null, r !== null) {
    var n = r = r.next;
    do {
      if ((n.tag & A) === A) {
        var a = n.destroy;
        n.destroy = void 0, a !== void 0 && kl(e, t, a);
      }
      n = n.next;
    } while (n !== r);
  }
}
function Qo(A, e) {
  if (e = e.updateQueue, e = e !== null ? e.lastEffect : null, e !== null) {
    var t = e = e.next;
    do {
      if ((t.tag & A) === A) {
        var r = t.create;
        t.destroy = r();
      }
      t = t.next;
    } while (t !== e);
  }
}
function Ml(A) {
  var e = A.ref;
  if (e !== null) {
    var t = A.stateNode;
    switch (A.tag) {
      case 5:
        A = t;
        break;
      default:
        A = t;
    }
    typeof e == "function" ? e(A) : e.current = A;
  }
}
function Np(A) {
  var e = A.alternate;
  e !== null && (A.alternate = null, Np(e)), A.child = null, A.deletions = null, A.sibling = null, A.tag === 5 && (e = A.stateNode, e !== null && (delete e[At], delete e[La], delete e[Ul], delete e[Sm], delete e[Tm])), A.stateNode = null, A.return = null, A.dependencies = null, A.memoizedProps = null, A.memoizedState = null, A.pendingProps = null, A.stateNode = null, A.updateQueue = null;
}
function Rp(A) {
  return A.tag === 5 || A.tag === 3 || A.tag === 4;
}
function dB(A) {
  A:
    for (; ; ) {
      for (; A.sibling === null; ) {
        if (A.return === null || Rp(A.return))
          return null;
        A = A.return;
      }
      for (A.sibling.return = A.return, A = A.sibling; A.tag !== 5 && A.tag !== 6 && A.tag !== 18; ) {
        if (A.flags & 2 || A.child === null || A.tag === 4)
          continue A;
        A.child.return = A, A = A.child;
      }
      if (!(A.flags & 2))
        return A.stateNode;
    }
}
function Kl(A, e, t) {
  var r = A.tag;
  if (r === 5 || r === 6)
    A = A.stateNode, e ? t.nodeType === 8 ? t.parentNode.insertBefore(A, e) : t.insertBefore(A, e) : (t.nodeType === 8 ? (e = t.parentNode, e.insertBefore(A, t)) : (e = t, e.appendChild(A)), t = t._reactRootContainer, t != null || e.onclick !== null || (e.onclick = Es));
  else if (r !== 4 && (A = A.child, A !== null))
    for (Kl(A, e, t), A = A.sibling; A !== null; )
      Kl(A, e, t), A = A.sibling;
}
function bl(A, e, t) {
  var r = A.tag;
  if (r === 5 || r === 6)
    A = A.stateNode, e ? t.insertBefore(A, e) : t.appendChild(A);
  else if (r !== 4 && (A = A.child, A !== null))
    for (bl(A, e, t), A = A.sibling; A !== null; )
      bl(A, e, t), A = A.sibling;
}
var VA = null, Re = !1;
function St(A, e, t) {
  for (t = t.child; t !== null; )
    Pp(A, e, t), t = t.sibling;
}
function Pp(A, e, t) {
  if (et && typeof et.onCommitFiberUnmount == "function")
    try {
      et.onCommitFiberUnmount(Bo, t);
    } catch {
    }
  switch (t.tag) {
    case 5:
      $A || ln(t, e);
    case 6:
      var r = VA, n = Re;
      VA = null, St(A, e, t), VA = r, Re = n, VA !== null && (Re ? (A = VA, t = t.stateNode, A.nodeType === 8 ? A.parentNode.removeChild(t) : A.removeChild(t)) : VA.removeChild(t.stateNode));
      break;
    case 18:
      VA !== null && (Re ? (A = VA, t = t.stateNode, A.nodeType === 8 ? iu(A.parentNode, t) : A.nodeType === 1 && iu(A, t), Ha(A)) : iu(VA, t.stateNode));
      break;
    case 4:
      r = VA, n = Re, VA = t.stateNode.containerInfo, Re = !0, St(A, e, t), VA = r, Re = n;
      break;
    case 0:
    case 11:
    case 14:
    case 15:
      if (!$A && (r = t.updateQueue, r !== null && (r = r.lastEffect, r !== null))) {
        n = r = r.next;
        do {
          var a = n, i = a.destroy;
          a = a.tag, i !== void 0 && (a & 2 || a & 4) && kl(t, e, i), n = n.next;
        } while (n !== r);
      }
      St(A, e, t);
      break;
    case 1:
      if (!$A && (ln(t, e), r = t.stateNode, typeof r.componentWillUnmount == "function"))
        try {
          r.props = t.memoizedProps, r.state = t.memoizedState, r.componentWillUnmount();
        } catch (s) {
          HA(t, e, s);
        }
      St(A, e, t);
      break;
    case 21:
      St(A, e, t);
      break;
    case 22:
      t.mode & 1 ? ($A = (r = $A) || t.memoizedState !== null, St(A, e, t), $A = r) : St(A, e, t);
      break;
    default:
      St(A, e, t);
  }
}
function BB(A) {
  var e = A.updateQueue;
  if (e !== null) {
    A.updateQueue = null;
    var t = A.stateNode;
    t === null && (t = A.stateNode = new Xm()), e.forEach(function(r) {
      var n = rC.bind(null, A, r);
      t.has(r) || (t.add(r), r.then(n, n));
    });
  }
}
function Ke(A, e) {
  var t = e.deletions;
  if (t !== null)
    for (var r = 0; r < t.length; r++) {
      var n = t[r];
      try {
        var a = A, i = e, s = i;
        A:
          for (; s !== null; ) {
            switch (s.tag) {
              case 5:
                VA = s.stateNode, Re = !1;
                break A;
              case 3:
                VA = s.stateNode.containerInfo, Re = !0;
                break A;
              case 4:
                VA = s.stateNode.containerInfo, Re = !0;
                break A;
            }
            s = s.return;
          }
        if (VA === null)
          throw Error(F(160));
        Pp(a, i, n), VA = null, Re = !1;
        var o = n.alternate;
        o !== null && (o.return = null), n.return = null;
      } catch (u) {
        HA(n, e, u);
      }
    }
  if (e.subtreeFlags & 12854)
    for (e = e.child; e !== null; )
      Vp(e, A), e = e.sibling;
}
function Vp(A, e) {
  var t = A.alternate, r = A.flags;
  switch (A.tag) {
    case 0:
    case 11:
    case 14:
    case 15:
      if (Ke(e, A), Je(A), r & 4) {
        try {
          ga(3, A, A.return), Qo(3, A);
        } catch (C) {
          HA(A, A.return, C);
        }
        try {
          ga(5, A, A.return);
        } catch (C) {
          HA(A, A.return, C);
        }
      }
      break;
    case 1:
      Ke(e, A), Je(A), r & 512 && t !== null && ln(t, t.return);
      break;
    case 5:
      if (Ke(e, A), Je(A), r & 512 && t !== null && ln(t, t.return), A.flags & 32) {
        var n = A.stateNode;
        try {
          ya(n, "");
        } catch (C) {
          HA(A, A.return, C);
        }
      }
      if (r & 4 && (n = A.stateNode, n != null)) {
        var a = A.memoizedProps, i = t !== null ? t.memoizedProps : a, s = A.type, o = A.updateQueue;
        if (A.updateQueue = null, o !== null)
          try {
            s === "input" && a.type === "radio" && a.name != null && lh(n, a), ul(s, i);
            var u = ul(s, a);
            for (i = 0; i < o.length; i += 2) {
              var l = o[i], c = o[i + 1];
              l === "style" ? gh(n, c) : l === "dangerouslySetInnerHTML" ? dh(n, c) : l === "children" ? ya(n, c) : cf(n, l, c, u);
            }
            switch (s) {
              case "input":
                nl(n, a);
                break;
              case "textarea":
                ch(n, a);
                break;
              case "select":
                var g = n._wrapperState.wasMultiple;
                n._wrapperState.wasMultiple = !!a.multiple;
                var w = a.value;
                w != null ? dn(n, !!a.multiple, w, !1) : g !== !!a.multiple && (a.defaultValue != null ? dn(
                  n,
                  !!a.multiple,
                  a.defaultValue,
                  !0
                ) : dn(n, !!a.multiple, a.multiple ? [] : "", !1));
            }
            n[La] = a;
          } catch (C) {
            HA(A, A.return, C);
          }
      }
      break;
    case 6:
      if (Ke(e, A), Je(A), r & 4) {
        if (A.stateNode === null)
          throw Error(F(162));
        n = A.stateNode, a = A.memoizedProps;
        try {
          n.nodeValue = a;
        } catch (C) {
          HA(A, A.return, C);
        }
      }
      break;
    case 3:
      if (Ke(e, A), Je(A), r & 4 && t !== null && t.memoizedState.isDehydrated)
        try {
          Ha(e.containerInfo);
        } catch (C) {
          HA(A, A.return, C);
        }
      break;
    case 4:
      Ke(e, A), Je(A);
      break;
    case 13:
      Ke(e, A), Je(A), n = A.child, n.flags & 8192 && (a = n.memoizedState !== null, n.stateNode.isHidden = a, !a || n.alternate !== null && n.alternate.memoizedState !== null || (Gf = TA())), r & 4 && BB(A);
      break;
    case 22:
      if (l = t !== null && t.memoizedState !== null, A.mode & 1 ? ($A = (u = $A) || l, Ke(e, A), $A = u) : Ke(e, A), Je(A), r & 8192) {
        if (u = A.memoizedState !== null, (A.stateNode.isHidden = u) && !l && A.mode & 1)
          for (D = A, l = A.child; l !== null; ) {
            for (c = D = l; D !== null; ) {
              switch (g = D, w = g.child, g.tag) {
                case 0:
                case 11:
                case 14:
                case 15:
                  ga(4, g, g.return);
                  break;
                case 1:
                  ln(g, g.return);
                  var p = g.stateNode;
                  if (typeof p.componentWillUnmount == "function") {
                    r = g, t = g.return;
                    try {
                      e = r, p.props = e.memoizedProps, p.state = e.memoizedState, p.componentWillUnmount();
                    } catch (C) {
                      HA(r, t, C);
                    }
                  }
                  break;
                case 5:
                  ln(g, g.return);
                  break;
                case 22:
                  if (g.memoizedState !== null) {
                    hB(c);
                    continue;
                  }
              }
              w !== null ? (w.return = g, D = w) : hB(c);
            }
            l = l.sibling;
          }
        A:
          for (l = null, c = A; ; ) {
            if (c.tag === 5) {
              if (l === null) {
                l = c;
                try {
                  n = c.stateNode, u ? (a = n.style, typeof a.setProperty == "function" ? a.setProperty("display", "none", "important") : a.display = "none") : (s = c.stateNode, o = c.memoizedProps.style, i = o != null && o.hasOwnProperty("display") ? o.display : null, s.style.display = Bh("display", i));
                } catch (C) {
                  HA(A, A.return, C);
                }
              }
            } else if (c.tag === 6) {
              if (l === null)
                try {
                  c.stateNode.nodeValue = u ? "" : c.memoizedProps;
                } catch (C) {
                  HA(A, A.return, C);
                }
            } else if ((c.tag !== 22 && c.tag !== 23 || c.memoizedState === null || c === A) && c.child !== null) {
              c.child.return = c, c = c.child;
              continue;
            }
            if (c === A)
              break A;
            for (; c.sibling === null; ) {
              if (c.return === null || c.return === A)
                break A;
              l === c && (l = null), c = c.return;
            }
            l === c && (l = null), c.sibling.return = c.return, c = c.sibling;
          }
      }
      break;
    case 19:
      Ke(e, A), Je(A), r & 4 && BB(A);
      break;
    case 21:
      break;
    default:
      Ke(
        e,
        A
      ), Je(A);
  }
}
function Je(A) {
  var e = A.flags;
  if (e & 2) {
    try {
      A: {
        for (var t = A.return; t !== null; ) {
          if (Rp(t)) {
            var r = t;
            break A;
          }
          t = t.return;
        }
        throw Error(F(160));
      }
      switch (r.tag) {
        case 5:
          var n = r.stateNode;
          r.flags & 32 && (ya(n, ""), r.flags &= -33);
          var a = dB(A);
          bl(A, a, n);
          break;
        case 3:
        case 4:
          var i = r.stateNode.containerInfo, s = dB(A);
          Kl(A, s, i);
          break;
        default:
          throw Error(F(161));
      }
    } catch (o) {
      HA(A, A.return, o);
    }
    A.flags &= -3;
  }
  e & 4096 && (A.flags &= -4097);
}
function jm(A, e, t) {
  D = A, Gp(A);
}
function Gp(A, e, t) {
  for (var r = (A.mode & 1) !== 0; D !== null; ) {
    var n = D, a = n.child;
    if (n.tag === 22 && r) {
      var i = n.memoizedState !== null || Ii;
      if (!i) {
        var s = n.alternate, o = s !== null && s.memoizedState !== null || $A;
        s = Ii;
        var u = $A;
        if (Ii = i, ($A = o) && !u)
          for (D = n; D !== null; )
            i = D, o = i.child, i.tag === 22 && i.memoizedState !== null ? pB(n) : o !== null ? (o.return = i, D = o) : pB(n);
        for (; a !== null; )
          D = a, Gp(a), a = a.sibling;
        D = n, Ii = s, $A = u;
      }
      gB(A);
    } else
      n.subtreeFlags & 8772 && a !== null ? (a.return = n, D = a) : gB(A);
  }
}
function gB(A) {
  for (; D !== null; ) {
    var e = D;
    if (e.flags & 8772) {
      var t = e.alternate;
      try {
        if (e.flags & 8772)
          switch (e.tag) {
            case 0:
            case 11:
            case 15:
              $A || Qo(5, e);
              break;
            case 1:
              var r = e.stateNode;
              if (e.flags & 4 && !$A)
                if (t === null)
                  r.componentDidMount();
                else {
                  var n = e.elementType === e.type ? t.memoizedProps : Ne(e.type, t.memoizedProps);
                  r.componentDidUpdate(n, t.memoizedState, r.__reactInternalSnapshotBeforeUpdate);
                }
              var a = e.updateQueue;
              a !== null && $d(e, a, r);
              break;
            case 3:
              var i = e.updateQueue;
              if (i !== null) {
                if (t = null, e.child !== null)
                  switch (e.child.tag) {
                    case 5:
                      t = e.child.stateNode;
                      break;
                    case 1:
                      t = e.child.stateNode;
                  }
                $d(e, i, t);
              }
              break;
            case 5:
              var s = e.stateNode;
              if (t === null && e.flags & 4) {
                t = s;
                var o = e.memoizedProps;
                switch (e.type) {
                  case "button":
                  case "input":
                  case "select":
                  case "textarea":
                    o.autoFocus && t.focus();
                    break;
                  case "img":
                    o.src && (t.src = o.src);
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
              if (e.memoizedState === null) {
                var u = e.alternate;
                if (u !== null) {
                  var l = u.memoizedState;
                  if (l !== null) {
                    var c = l.dehydrated;
                    c !== null && Ha(c);
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
              throw Error(F(163));
          }
        $A || e.flags & 512 && Ml(e);
      } catch (g) {
        HA(e, e.return, g);
      }
    }
    if (e === A) {
      D = null;
      break;
    }
    if (t = e.sibling, t !== null) {
      t.return = e.return, D = t;
      break;
    }
    D = e.return;
  }
}
function hB(A) {
  for (; D !== null; ) {
    var e = D;
    if (e === A) {
      D = null;
      break;
    }
    var t = e.sibling;
    if (t !== null) {
      t.return = e.return, D = t;
      break;
    }
    D = e.return;
  }
}
function pB(A) {
  for (; D !== null; ) {
    var e = D;
    try {
      switch (e.tag) {
        case 0:
        case 11:
        case 15:
          var t = e.return;
          try {
            Qo(4, e);
          } catch (o) {
            HA(e, t, o);
          }
          break;
        case 1:
          var r = e.stateNode;
          if (typeof r.componentDidMount == "function") {
            var n = e.return;
            try {
              r.componentDidMount();
            } catch (o) {
              HA(e, n, o);
            }
          }
          var a = e.return;
          try {
            Ml(e);
          } catch (o) {
            HA(e, a, o);
          }
          break;
        case 5:
          var i = e.return;
          try {
            Ml(e);
          } catch (o) {
            HA(e, i, o);
          }
      }
    } catch (o) {
      HA(e, e.return, o);
    }
    if (e === A) {
      D = null;
      break;
    }
    var s = e.sibling;
    if (s !== null) {
      s.return = e.return, D = s;
      break;
    }
    D = e.return;
  }
}
var zm = Math.ceil, Ms = xt.ReactCurrentDispatcher, Pf = xt.ReactCurrentOwner, Oe = xt.ReactCurrentBatchConfig, J = 0, PA = null, LA = null, YA = 0, me = 0, cn = lr(0), KA = 0, ba = null, Tr = 0, Uo = 0, Vf = 0, ha = null, de = null, Gf = 0, In = 1 / 0, Bt = null, Ks = !1, Nl = null, Jt = null, Hi = !1, Rt = null, bs = 0, pa = 0, Rl = null, ls = -1, cs = 0;
function ie() {
  return J & 6 ? TA() : ls !== -1 ? ls : ls = TA();
}
function $t(A) {
  return A.mode & 1 ? J & 2 && YA !== 0 ? YA & -YA : Lm.transition !== null ? (cs === 0 && (cs = Ih()), cs) : (A = aA, A !== 0 || (A = window.event, A = A === void 0 ? 16 : Dh(A.type)), A) : 1;
}
function We(A, e, t, r) {
  if (50 < pa)
    throw pa = 0, Rl = null, Error(F(185));
  ai(A, t, r), (!(J & 2) || A !== PA) && (A === PA && (!(J & 2) && (Uo |= t), KA === 4 && Kt(A, YA)), we(A, r), t === 1 && J === 0 && !(e.mode & 1) && (In = TA() + 500, vo && cr()));
}
function we(A, e) {
  var t = A.callbackNode;
  Lv(A, e);
  var r = Qs(A, A === PA ? YA : 0);
  if (r === 0)
    t !== null && Ed(t), A.callbackNode = null, A.callbackPriority = 0;
  else if (e = r & -r, A.callbackPriority !== e) {
    if (t != null && Ed(t), e === 1)
      A.tag === 0 ? _m(wB.bind(null, A)) : qh(wB.bind(null, A)), Hm(function() {
        !(J & 6) && cr();
      }), t = null;
    else {
      switch (Hh(r)) {
        case 1:
          t = hf;
          break;
        case 4:
          t = Fh;
          break;
        case 16:
          t = Cs;
          break;
        case 536870912:
          t = Eh;
          break;
        default:
          t = Cs;
      }
      t = $p(t, Wp.bind(null, A));
    }
    A.callbackPriority = e, A.callbackNode = t;
  }
}
function Wp(A, e) {
  if (ls = -1, cs = 0, J & 6)
    throw Error(F(327));
  var t = A.callbackNode;
  if (wn() && A.callbackNode !== t)
    return null;
  var r = Qs(A, A === PA ? YA : 0);
  if (r === 0)
    return null;
  if (r & 30 || r & A.expiredLanes || e)
    e = Ns(A, r);
  else {
    e = r;
    var n = J;
    J |= 2;
    var a = Xp();
    (PA !== A || YA !== e) && (Bt = null, In = TA() + 500, Ur(A, e));
    do
      try {
        qm();
        break;
      } catch (s) {
        Yp(A, s);
      }
    while (!0);
    xf(), Ms.current = a, J = n, LA !== null ? e = 0 : (PA = null, YA = 0, e = KA);
  }
  if (e !== 0) {
    if (e === 2 && (n = Bl(A), n !== 0 && (r = n, e = Pl(A, n))), e === 1)
      throw t = ba, Ur(A, 0), Kt(A, r), we(A, TA()), t;
    if (e === 6)
      Kt(A, r);
    else {
      if (n = A.current.alternate, !(r & 30) && !Jm(n) && (e = Ns(A, r), e === 2 && (a = Bl(A), a !== 0 && (r = a, e = Pl(A, a))), e === 1))
        throw t = ba, Ur(A, 0), Kt(A, r), we(A, TA()), t;
      switch (A.finishedWork = n, A.finishedLanes = r, e) {
        case 0:
        case 1:
          throw Error(F(345));
        case 2:
          hr(A, de, Bt);
          break;
        case 3:
          if (Kt(A, r), (r & 130023424) === r && (e = Gf + 500 - TA(), 10 < e)) {
            if (Qs(A, 0) !== 0)
              break;
            if (n = A.suspendedLanes, (n & r) !== r) {
              ie(), A.pingedLanes |= A.suspendedLanes & n;
              break;
            }
            A.timeoutHandle = Ql(hr.bind(null, A, de, Bt), e);
            break;
          }
          hr(A, de, Bt);
          break;
        case 4:
          if (Kt(A, r), (r & 4194240) === r)
            break;
          for (e = A.eventTimes, n = -1; 0 < r; ) {
            var i = 31 - Ge(r);
            a = 1 << i, i = e[i], i > n && (n = i), r &= ~a;
          }
          if (r = n, r = TA() - r, r = (120 > r ? 120 : 480 > r ? 480 : 1080 > r ? 1080 : 1920 > r ? 1920 : 3e3 > r ? 3e3 : 4320 > r ? 4320 : 1960 * zm(r / 1960)) - r, 10 < r) {
            A.timeoutHandle = Ql(hr.bind(null, A, de, Bt), r);
            break;
          }
          hr(A, de, Bt);
          break;
        case 5:
          hr(A, de, Bt);
          break;
        default:
          throw Error(F(329));
      }
    }
  }
  return we(A, TA()), A.callbackNode === t ? Wp.bind(null, A) : null;
}
function Pl(A, e) {
  var t = ha;
  return A.current.memoizedState.isDehydrated && (Ur(A, e).flags |= 256), A = Ns(A, e), A !== 2 && (e = de, de = t, e !== null && Vl(e)), A;
}
function Vl(A) {
  de === null ? de = A : de.push.apply(de, A);
}
function Jm(A) {
  for (var e = A; ; ) {
    if (e.flags & 16384) {
      var t = e.updateQueue;
      if (t !== null && (t = t.stores, t !== null))
        for (var r = 0; r < t.length; r++) {
          var n = t[r], a = n.getSnapshot;
          n = n.value;
          try {
            if (!Ze(a(), n))
              return !1;
          } catch {
            return !1;
          }
        }
    }
    if (t = e.child, e.subtreeFlags & 16384 && t !== null)
      t.return = e, e = t;
    else {
      if (e === A)
        break;
      for (; e.sibling === null; ) {
        if (e.return === null || e.return === A)
          return !0;
        e = e.return;
      }
      e.sibling.return = e.return, e = e.sibling;
    }
  }
  return !0;
}
function Kt(A, e) {
  for (e &= ~Vf, e &= ~Uo, A.suspendedLanes |= e, A.pingedLanes &= ~e, A = A.expirationTimes; 0 < e; ) {
    var t = 31 - Ge(e), r = 1 << t;
    A[t] = -1, e &= ~r;
  }
}
function wB(A) {
  if (J & 6)
    throw Error(F(327));
  wn();
  var e = Qs(A, 0);
  if (!(e & 1))
    return we(A, TA()), null;
  var t = Ns(A, e);
  if (A.tag !== 0 && t === 2) {
    var r = Bl(A);
    r !== 0 && (e = r, t = Pl(A, r));
  }
  if (t === 1)
    throw t = ba, Ur(A, 0), Kt(A, e), we(A, TA()), t;
  if (t === 6)
    throw Error(F(345));
  return A.finishedWork = A.current.alternate, A.finishedLanes = e, hr(A, de, Bt), we(A, TA()), null;
}
function Wf(A, e) {
  var t = J;
  J |= 1;
  try {
    return A(e);
  } finally {
    J = t, J === 0 && (In = TA() + 500, vo && cr());
  }
}
function _r(A) {
  Rt !== null && Rt.tag === 0 && !(J & 6) && wn();
  var e = J;
  J |= 1;
  var t = Oe.transition, r = aA;
  try {
    if (Oe.transition = null, aA = 1, A)
      return A();
  } finally {
    aA = r, Oe.transition = t, J = e, !(J & 6) && cr();
  }
}
function Yf() {
  me = cn.current, fA(cn);
}
function Ur(A, e) {
  A.finishedWork = null, A.finishedLanes = 0;
  var t = A.timeoutHandle;
  if (t !== -1 && (A.timeoutHandle = -1, Im(t)), LA !== null)
    for (t = LA.return; t !== null; ) {
      var r = t;
      switch (Ef(r), r.tag) {
        case 1:
          r = r.type.childContextTypes, r != null && Is();
          break;
        case 3:
          Fn(), fA(he), fA(qA), Of();
          break;
        case 5:
          Df(r);
          break;
        case 4:
          Fn();
          break;
        case 13:
          fA(mA);
          break;
        case 19:
          fA(mA);
          break;
        case 10:
          Sf(r.type._context);
          break;
        case 22:
        case 23:
          Yf();
      }
      t = t.return;
    }
  if (PA = A, LA = A = qt(A.current, null), YA = me = e, KA = 0, ba = null, Vf = Uo = Tr = 0, de = ha = null, mr !== null) {
    for (e = 0; e < mr.length; e++)
      if (t = mr[e], r = t.interleaved, r !== null) {
        t.interleaved = null;
        var n = r.next, a = t.pending;
        if (a !== null) {
          var i = a.next;
          a.next = n, r.next = i;
        }
        t.pending = r;
      }
    mr = null;
  }
  return A;
}
function Yp(A, e) {
  do {
    var t = LA;
    try {
      if (xf(), ss.current = ks, Os) {
        for (var r = CA.memoizedState; r !== null; ) {
          var n = r.queue;
          n !== null && (n.pending = null), r = r.next;
        }
        Os = !1;
      }
      if (Sr = 0, RA = kA = CA = null, Ba = !1, ka = 0, Pf.current = null, t === null || t.return === null) {
        KA = 1, ba = e, LA = null;
        break;
      }
      A: {
        var a = A, i = t.return, s = t, o = e;
        if (e = YA, s.flags |= 32768, o !== null && typeof o == "object" && typeof o.then == "function") {
          var u = o, l = s, c = l.tag;
          if (!(l.mode & 1) && (c === 0 || c === 11 || c === 15)) {
            var g = l.alternate;
            g ? (l.updateQueue = g.updateQueue, l.memoizedState = g.memoizedState, l.lanes = g.lanes) : (l.updateQueue = null, l.memoizedState = null);
          }
          var w = aB(i);
          if (w !== null) {
            w.flags &= -257, iB(w, i, s, a, e), w.mode & 1 && nB(a, u, e), e = w, o = u;
            var p = e.updateQueue;
            if (p === null) {
              var C = /* @__PURE__ */ new Set();
              C.add(o), e.updateQueue = C;
            } else
              p.add(o);
            break A;
          } else {
            if (!(e & 1)) {
              nB(a, u, e), Xf();
              break A;
            }
            o = Error(F(426));
          }
        } else if (gA && s.mode & 1) {
          var Q = aB(i);
          if (Q !== null) {
            !(Q.flags & 65536) && (Q.flags |= 256), iB(Q, i, s, a, e), If(En(o, s));
            break A;
          }
        }
        a = o = En(o, s), KA !== 4 && (KA = 2), ha === null ? ha = [a] : ha.push(a), a = i;
        do {
          switch (a.tag) {
            case 3:
              a.flags |= 65536, e &= -e, a.lanes |= e;
              var d = xp(a, o, e);
              Jd(a, d);
              break A;
            case 1:
              s = o;
              var f = a.type, B = a.stateNode;
              if (!(a.flags & 128) && (typeof f.getDerivedStateFromError == "function" || B !== null && typeof B.componentDidCatch == "function" && (Jt === null || !Jt.has(B)))) {
                a.flags |= 65536, e &= -e, a.lanes |= e;
                var h = Sp(a, s, e);
                Jd(a, h);
                break A;
              }
          }
          a = a.return;
        } while (a !== null);
      }
      jp(t);
    } catch (m) {
      e = m, LA === t && t !== null && (LA = t = t.return);
      continue;
    }
    break;
  } while (!0);
}
function Xp() {
  var A = Ms.current;
  return Ms.current = ks, A === null ? ks : A;
}
function Xf() {
  (KA === 0 || KA === 3 || KA === 2) && (KA = 4), PA === null || !(Tr & 268435455) && !(Uo & 268435455) || Kt(PA, YA);
}
function Ns(A, e) {
  var t = J;
  J |= 2;
  var r = Xp();
  (PA !== A || YA !== e) && (Bt = null, Ur(A, e));
  do
    try {
      $m();
      break;
    } catch (n) {
      Yp(A, n);
    }
  while (!0);
  if (xf(), J = t, Ms.current = r, LA !== null)
    throw Error(F(261));
  return PA = null, YA = 0, KA;
}
function $m() {
  for (; LA !== null; )
    Zp(LA);
}
function qm() {
  for (; LA !== null && !yv(); )
    Zp(LA);
}
function Zp(A) {
  var e = Jp(A.alternate, A, me);
  A.memoizedProps = A.pendingProps, e === null ? jp(A) : LA = e, Pf.current = null;
}
function jp(A) {
  var e = A;
  do {
    var t = e.alternate;
    if (A = e.return, e.flags & 32768) {
      if (t = Ym(t, e), t !== null) {
        t.flags &= 32767, LA = t;
        return;
      }
      if (A !== null)
        A.flags |= 32768, A.subtreeFlags = 0, A.deletions = null;
      else {
        KA = 6, LA = null;
        return;
      }
    } else if (t = Wm(t, e, me), t !== null) {
      LA = t;
      return;
    }
    if (e = e.sibling, e !== null) {
      LA = e;
      return;
    }
    LA = e = A;
  } while (e !== null);
  KA === 0 && (KA = 5);
}
function hr(A, e, t) {
  var r = aA, n = Oe.transition;
  try {
    Oe.transition = null, aA = 1, AC(A, e, t, r);
  } finally {
    Oe.transition = n, aA = r;
  }
  return null;
}
function AC(A, e, t, r) {
  do
    wn();
  while (Rt !== null);
  if (J & 6)
    throw Error(F(327));
  t = A.finishedWork;
  var n = A.finishedLanes;
  if (t === null)
    return null;
  if (A.finishedWork = null, A.finishedLanes = 0, t === A.current)
    throw Error(F(177));
  A.callbackNode = null, A.callbackPriority = 0;
  var a = t.lanes | t.childLanes;
  if (Dv(A, a), A === PA && (LA = PA = null, YA = 0), !(t.subtreeFlags & 2064) && !(t.flags & 2064) || Hi || (Hi = !0, $p(Cs, function() {
    return wn(), null;
  })), a = (t.flags & 15990) !== 0, t.subtreeFlags & 15990 || a) {
    a = Oe.transition, Oe.transition = null;
    var i = aA;
    aA = 1;
    var s = J;
    J |= 4, Pf.current = null, Zm(A, t), Vp(t, A), mm(ml), Us = !!vl, ml = vl = null, A.current = t, jm(t), Fv(), J = s, aA = i, Oe.transition = a;
  } else
    A.current = t;
  if (Hi && (Hi = !1, Rt = A, bs = n), a = A.pendingLanes, a === 0 && (Jt = null), Hv(t.stateNode), we(A, TA()), e !== null)
    for (r = A.onRecoverableError, t = 0; t < e.length; t++)
      n = e[t], r(n.value, { componentStack: n.stack, digest: n.digest });
  if (Ks)
    throw Ks = !1, A = Nl, Nl = null, A;
  return bs & 1 && A.tag !== 0 && wn(), a = A.pendingLanes, a & 1 ? A === Rl ? pa++ : (pa = 0, Rl = A) : pa = 0, cr(), null;
}
function wn() {
  if (Rt !== null) {
    var A = Hh(bs), e = Oe.transition, t = aA;
    try {
      if (Oe.transition = null, aA = 16 > A ? 16 : A, Rt === null)
        var r = !1;
      else {
        if (A = Rt, Rt = null, bs = 0, J & 6)
          throw Error(F(331));
        var n = J;
        for (J |= 4, D = A.current; D !== null; ) {
          var a = D, i = a.child;
          if (D.flags & 16) {
            var s = a.deletions;
            if (s !== null) {
              for (var o = 0; o < s.length; o++) {
                var u = s[o];
                for (D = u; D !== null; ) {
                  var l = D;
                  switch (l.tag) {
                    case 0:
                    case 11:
                    case 15:
                      ga(8, l, a);
                  }
                  var c = l.child;
                  if (c !== null)
                    c.return = l, D = c;
                  else
                    for (; D !== null; ) {
                      l = D;
                      var g = l.sibling, w = l.return;
                      if (Np(l), l === u) {
                        D = null;
                        break;
                      }
                      if (g !== null) {
                        g.return = w, D = g;
                        break;
                      }
                      D = w;
                    }
                }
              }
              var p = a.alternate;
              if (p !== null) {
                var C = p.child;
                if (C !== null) {
                  p.child = null;
                  do {
                    var Q = C.sibling;
                    C.sibling = null, C = Q;
                  } while (C !== null);
                }
              }
              D = a;
            }
          }
          if (a.subtreeFlags & 2064 && i !== null)
            i.return = a, D = i;
          else
            A:
              for (; D !== null; ) {
                if (a = D, a.flags & 2048)
                  switch (a.tag) {
                    case 0:
                    case 11:
                    case 15:
                      ga(9, a, a.return);
                  }
                var d = a.sibling;
                if (d !== null) {
                  d.return = a.return, D = d;
                  break A;
                }
                D = a.return;
              }
        }
        var f = A.current;
        for (D = f; D !== null; ) {
          i = D;
          var B = i.child;
          if (i.subtreeFlags & 2064 && B !== null)
            B.return = i, D = B;
          else
            A:
              for (i = f; D !== null; ) {
                if (s = D, s.flags & 2048)
                  try {
                    switch (s.tag) {
                      case 0:
                      case 11:
                      case 15:
                        Qo(9, s);
                    }
                  } catch (m) {
                    HA(s, s.return, m);
                  }
                if (s === i) {
                  D = null;
                  break A;
                }
                var h = s.sibling;
                if (h !== null) {
                  h.return = s.return, D = h;
                  break A;
                }
                D = s.return;
              }
        }
        if (J = n, cr(), et && typeof et.onPostCommitFiberRoot == "function")
          try {
            et.onPostCommitFiberRoot(Bo, A);
          } catch {
          }
        r = !0;
      }
      return r;
    } finally {
      aA = t, Oe.transition = e;
    }
  }
  return !1;
}
function vB(A, e, t) {
  e = En(t, e), e = xp(A, e, 1), A = zt(A, e, 1), e = ie(), A !== null && (ai(A, 1, e), we(A, e));
}
function HA(A, e, t) {
  if (A.tag === 3)
    vB(A, A, t);
  else
    for (; e !== null; ) {
      if (e.tag === 3) {
        vB(e, A, t);
        break;
      } else if (e.tag === 1) {
        var r = e.stateNode;
        if (typeof e.type.getDerivedStateFromError == "function" || typeof r.componentDidCatch == "function" && (Jt === null || !Jt.has(r))) {
          A = En(t, A), A = Sp(e, A, 1), e = zt(e, A, 1), A = ie(), e !== null && (ai(e, 1, A), we(e, A));
          break;
        }
      }
      e = e.return;
    }
}
function eC(A, e, t) {
  var r = A.pingCache;
  r !== null && r.delete(e), e = ie(), A.pingedLanes |= A.suspendedLanes & t, PA === A && (YA & t) === t && (KA === 4 || KA === 3 && (YA & 130023424) === YA && 500 > TA() - Gf ? Ur(A, 0) : Vf |= t), we(A, e);
}
function zp(A, e) {
  e === 0 && (A.mode & 1 ? (e = wi, wi <<= 1, !(wi & 130023424) && (wi = 4194304)) : e = 1);
  var t = ie();
  A = Ft(A, e), A !== null && (ai(A, e, t), we(A, t));
}
function tC(A) {
  var e = A.memoizedState, t = 0;
  e !== null && (t = e.retryLane), zp(A, t);
}
function rC(A, e) {
  var t = 0;
  switch (A.tag) {
    case 13:
      var r = A.stateNode, n = A.memoizedState;
      n !== null && (t = n.retryLane);
      break;
    case 19:
      r = A.stateNode;
      break;
    default:
      throw Error(F(314));
  }
  r !== null && r.delete(e), zp(A, t);
}
var Jp;
Jp = function(A, e, t) {
  if (A !== null)
    if (A.memoizedProps !== e.pendingProps || he.current)
      ge = !0;
    else {
      if (!(A.lanes & t) && !(e.flags & 128))
        return ge = !1, Gm(A, e, t);
      ge = !!(A.flags & 131072);
    }
  else
    ge = !1, gA && e.flags & 1048576 && Ap(e, Ss, e.index);
  switch (e.lanes = 0, e.tag) {
    case 2:
      var r = e.type;
      us(A, e), A = e.pendingProps;
      var n = Qn(e, qA.current);
      pn(e, t), n = Mf(null, e, r, A, n, t);
      var a = Kf();
      return e.flags |= 1, typeof n == "object" && n !== null && typeof n.render == "function" && n.$$typeof === void 0 ? (e.tag = 1, e.memoizedState = null, e.updateQueue = null, pe(r) ? (a = !0, Hs(e)) : a = !1, e.memoizedState = n.state !== null && n.state !== void 0 ? n.state : null, _f(e), n.updater = mo, e.stateNode = n, n._reactInternals = e, xl(e, r, A, t), e = _l(null, e, r, !0, a, t)) : (e.tag = 0, gA && a && Ff(e), ne(null, e, n, t), e = e.child), e;
    case 16:
      r = e.elementType;
      A: {
        switch (us(A, e), A = e.pendingProps, n = r._init, r = n(r._payload), e.type = r, n = e.tag = aC(r), A = Ne(r, A), n) {
          case 0:
            e = Tl(null, e, r, A, t);
            break A;
          case 1:
            e = uB(null, e, r, A, t);
            break A;
          case 11:
            e = sB(null, e, r, A, t);
            break A;
          case 14:
            e = oB(null, e, r, Ne(r.type, A), t);
            break A;
        }
        throw Error(F(
          306,
          r,
          ""
        ));
      }
      return e;
    case 0:
      return r = e.type, n = e.pendingProps, n = e.elementType === r ? n : Ne(r, n), Tl(A, e, r, n, t);
    case 1:
      return r = e.type, n = e.pendingProps, n = e.elementType === r ? n : Ne(r, n), uB(A, e, r, n, t);
    case 3:
      A: {
        if (Dp(e), A === null)
          throw Error(F(387));
        r = e.pendingProps, a = e.memoizedState, n = a.element, np(A, e), Ls(e, r, null, t);
        var i = e.memoizedState;
        if (r = i.element, a.isDehydrated)
          if (a = { element: r, isDehydrated: !1, cache: i.cache, pendingSuspenseBoundaries: i.pendingSuspenseBoundaries, transitions: i.transitions }, e.updateQueue.baseState = a, e.memoizedState = a, e.flags & 256) {
            n = En(Error(F(423)), e), e = lB(A, e, r, t, n);
            break A;
          } else if (r !== n) {
            n = En(Error(F(424)), e), e = lB(A, e, r, t, n);
            break A;
          } else
            for (Ce = jt(e.stateNode.containerInfo.firstChild), Qe = e, gA = !0, Pe = null, t = op(e, null, r, t), e.child = t; t; )
              t.flags = t.flags & -3 | 4096, t = t.sibling;
        else {
          if (Un(), r === n) {
            e = Et(A, e, t);
            break A;
          }
          ne(A, e, r, t);
        }
        e = e.child;
      }
      return e;
    case 5:
      return up(e), A === null && El(e), r = e.type, n = e.pendingProps, a = A !== null ? A.memoizedProps : null, i = n.children, Cl(r, n) ? i = null : a !== null && Cl(r, a) && (e.flags |= 32), Lp(A, e), ne(A, e, i, t), e.child;
    case 6:
      return A === null && El(e), null;
    case 13:
      return Op(A, e, t);
    case 4:
      return Lf(e, e.stateNode.containerInfo), r = e.pendingProps, A === null ? e.child = yn(e, null, r, t) : ne(A, e, r, t), e.child;
    case 11:
      return r = e.type, n = e.pendingProps, n = e.elementType === r ? n : Ne(r, n), sB(A, e, r, n, t);
    case 7:
      return ne(A, e, e.pendingProps, t), e.child;
    case 8:
      return ne(A, e, e.pendingProps.children, t), e.child;
    case 12:
      return ne(A, e, e.pendingProps.children, t), e.child;
    case 10:
      A: {
        if (r = e.type._context, n = e.pendingProps, a = e.memoizedProps, i = n.value, lA(Ts, r._currentValue), r._currentValue = i, a !== null)
          if (Ze(a.value, i)) {
            if (a.children === n.children && !he.current) {
              e = Et(A, e, t);
              break A;
            }
          } else
            for (a = e.child, a !== null && (a.return = e); a !== null; ) {
              var s = a.dependencies;
              if (s !== null) {
                i = a.child;
                for (var o = s.firstContext; o !== null; ) {
                  if (o.context === r) {
                    if (a.tag === 1) {
                      o = mt(-1, t & -t), o.tag = 2;
                      var u = a.updateQueue;
                      if (u !== null) {
                        u = u.shared;
                        var l = u.pending;
                        l === null ? o.next = o : (o.next = l.next, l.next = o), u.pending = o;
                      }
                    }
                    a.lanes |= t, o = a.alternate, o !== null && (o.lanes |= t), Il(
                      a.return,
                      t,
                      e
                    ), s.lanes |= t;
                    break;
                  }
                  o = o.next;
                }
              } else if (a.tag === 10)
                i = a.type === e.type ? null : a.child;
              else if (a.tag === 18) {
                if (i = a.return, i === null)
                  throw Error(F(341));
                i.lanes |= t, s = i.alternate, s !== null && (s.lanes |= t), Il(i, t, e), i = a.sibling;
              } else
                i = a.child;
              if (i !== null)
                i.return = a;
              else
                for (i = a; i !== null; ) {
                  if (i === e) {
                    i = null;
                    break;
                  }
                  if (a = i.sibling, a !== null) {
                    a.return = i.return, i = a;
                    break;
                  }
                  i = i.return;
                }
              a = i;
            }
        ne(A, e, n.children, t), e = e.child;
      }
      return e;
    case 9:
      return n = e.type, r = e.pendingProps.children, pn(e, t), n = ke(n), r = r(n), e.flags |= 1, ne(A, e, r, t), e.child;
    case 14:
      return r = e.type, n = Ne(r, e.pendingProps), n = Ne(r.type, n), oB(A, e, r, n, t);
    case 15:
      return Tp(A, e, e.type, e.pendingProps, t);
    case 17:
      return r = e.type, n = e.pendingProps, n = e.elementType === r ? n : Ne(r, n), us(A, e), e.tag = 1, pe(r) ? (A = !0, Hs(e)) : A = !1, pn(e, t), ip(e, r, n), xl(e, r, n, t), _l(null, e, r, !0, A, t);
    case 19:
      return kp(A, e, t);
    case 22:
      return _p(A, e, t);
  }
  throw Error(F(156, e.tag));
};
function $p(A, e) {
  return yh(A, e);
}
function nC(A, e, t, r) {
  this.tag = A, this.key = t, this.sibling = this.child = this.return = this.stateNode = this.type = this.elementType = null, this.index = 0, this.ref = null, this.pendingProps = e, this.dependencies = this.memoizedState = this.updateQueue = this.memoizedProps = null, this.mode = r, this.subtreeFlags = this.flags = 0, this.deletions = null, this.childLanes = this.lanes = 0, this.alternate = null;
}
function _e(A, e, t, r) {
  return new nC(A, e, t, r);
}
function Zf(A) {
  return A = A.prototype, !(!A || !A.isReactComponent);
}
function aC(A) {
  if (typeof A == "function")
    return Zf(A) ? 1 : 0;
  if (A != null) {
    if (A = A.$$typeof, A === df)
      return 11;
    if (A === Bf)
      return 14;
  }
  return 2;
}
function qt(A, e) {
  var t = A.alternate;
  return t === null ? (t = _e(A.tag, e, A.key, A.mode), t.elementType = A.elementType, t.type = A.type, t.stateNode = A.stateNode, t.alternate = A, A.alternate = t) : (t.pendingProps = e, t.type = A.type, t.flags = 0, t.subtreeFlags = 0, t.deletions = null), t.flags = A.flags & 14680064, t.childLanes = A.childLanes, t.lanes = A.lanes, t.child = A.child, t.memoizedProps = A.memoizedProps, t.memoizedState = A.memoizedState, t.updateQueue = A.updateQueue, e = A.dependencies, t.dependencies = e === null ? null : { lanes: e.lanes, firstContext: e.firstContext }, t.sibling = A.sibling, t.index = A.index, t.ref = A.ref, t;
}
function fs(A, e, t, r, n, a) {
  var i = 2;
  if (r = A, typeof A == "function")
    Zf(A) && (i = 1);
  else if (typeof A == "string")
    i = 5;
  else
    A:
      switch (A) {
        case An:
          return yr(t.children, n, a, e);
        case ff:
          i = 8, n |= 8;
          break;
        case qu:
          return A = _e(12, t, e, n | 2), A.elementType = qu, A.lanes = a, A;
        case Al:
          return A = _e(13, t, e, n), A.elementType = Al, A.lanes = a, A;
        case el:
          return A = _e(19, t, e, n), A.elementType = el, A.lanes = a, A;
        case sh:
          return yo(t, n, a, e);
        default:
          if (typeof A == "object" && A !== null)
            switch (A.$$typeof) {
              case ah:
                i = 10;
                break A;
              case ih:
                i = 9;
                break A;
              case df:
                i = 11;
                break A;
              case Bf:
                i = 14;
                break A;
              case Dt:
                i = 16, r = null;
                break A;
            }
          throw Error(F(130, A == null ? A : typeof A, ""));
      }
  return e = _e(i, t, e, n), e.elementType = A, e.type = r, e.lanes = a, e;
}
function yr(A, e, t, r) {
  return A = _e(7, A, r, e), A.lanes = t, A;
}
function yo(A, e, t, r) {
  return A = _e(22, A, r, e), A.elementType = sh, A.lanes = t, A.stateNode = { isHidden: !1 }, A;
}
function Bu(A, e, t) {
  return A = _e(6, A, null, e), A.lanes = t, A;
}
function gu(A, e, t) {
  return e = _e(4, A.children !== null ? A.children : [], A.key, e), e.lanes = t, e.stateNode = { containerInfo: A.containerInfo, pendingChildren: null, implementation: A.implementation }, e;
}
function iC(A, e, t, r, n) {
  this.tag = e, this.containerInfo = A, this.finishedWork = this.pingCache = this.current = this.pendingChildren = null, this.timeoutHandle = -1, this.callbackNode = this.pendingContext = this.context = null, this.callbackPriority = 0, this.eventTimes = jo(0), this.expirationTimes = jo(-1), this.entangledLanes = this.finishedLanes = this.mutableReadLanes = this.expiredLanes = this.pingedLanes = this.suspendedLanes = this.pendingLanes = 0, this.entanglements = jo(0), this.identifierPrefix = r, this.onRecoverableError = n, this.mutableSourceEagerHydrationData = null;
}
function jf(A, e, t, r, n, a, i, s, o) {
  return A = new iC(A, e, t, s, o), e === 1 ? (e = 1, a === !0 && (e |= 8)) : e = 0, a = _e(3, null, null, e), A.current = a, a.stateNode = A, a.memoizedState = { element: r, isDehydrated: t, cache: null, transitions: null, pendingSuspenseBoundaries: null }, _f(a), A;
}
function sC(A, e, t) {
  var r = 3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
  return { $$typeof: qr, key: r == null ? null : "" + r, children: A, containerInfo: e, implementation: t };
}
function qp(A) {
  if (!A)
    return rr;
  A = A._reactInternals;
  A: {
    if (Kr(A) !== A || A.tag !== 1)
      throw Error(F(170));
    var e = A;
    do {
      switch (e.tag) {
        case 3:
          e = e.stateNode.context;
          break A;
        case 1:
          if (pe(e.type)) {
            e = e.stateNode.__reactInternalMemoizedMergedChildContext;
            break A;
          }
      }
      e = e.return;
    } while (e !== null);
    throw Error(F(171));
  }
  if (A.tag === 1) {
    var t = A.type;
    if (pe(t))
      return $h(A, t, e);
  }
  return e;
}
function Aw(A, e, t, r, n, a, i, s, o) {
  return A = jf(t, r, !0, A, n, a, i, s, o), A.context = qp(null), t = A.current, r = ie(), n = $t(t), a = mt(r, n), a.callback = e ?? null, zt(t, a, n), A.current.lanes = n, ai(A, n, r), we(A, r), A;
}
function Fo(A, e, t, r) {
  var n = e.current, a = ie(), i = $t(n);
  return t = qp(t), e.context === null ? e.context = t : e.pendingContext = t, e = mt(a, i), e.payload = { element: A }, r = r === void 0 ? null : r, r !== null && (e.callback = r), A = zt(n, e, i), A !== null && (We(A, n, i, a), is(A, n, i)), i;
}
function Rs(A) {
  if (A = A.current, !A.child)
    return null;
  switch (A.child.tag) {
    case 5:
      return A.child.stateNode;
    default:
      return A.child.stateNode;
  }
}
function mB(A, e) {
  if (A = A.memoizedState, A !== null && A.dehydrated !== null) {
    var t = A.retryLane;
    A.retryLane = t !== 0 && t < e ? t : e;
  }
}
function zf(A, e) {
  mB(A, e), (A = A.alternate) && mB(A, e);
}
function oC() {
  return null;
}
var ew = typeof reportError == "function" ? reportError : function(A) {
  console.error(A);
};
function Jf(A) {
  this._internalRoot = A;
}
Eo.prototype.render = Jf.prototype.render = function(A) {
  var e = this._internalRoot;
  if (e === null)
    throw Error(F(409));
  Fo(A, e, null, null);
};
Eo.prototype.unmount = Jf.prototype.unmount = function() {
  var A = this._internalRoot;
  if (A !== null) {
    this._internalRoot = null;
    var e = A.containerInfo;
    _r(function() {
      Fo(null, A, null, null);
    }), e[yt] = null;
  }
};
function Eo(A) {
  this._internalRoot = A;
}
Eo.prototype.unstable_scheduleHydration = function(A) {
  if (A) {
    var e = Th();
    A = { blockedOn: null, target: A, priority: e };
    for (var t = 0; t < Mt.length && e !== 0 && e < Mt[t].priority; t++)
      ;
    Mt.splice(t, 0, A), t === 0 && Lh(A);
  }
};
function $f(A) {
  return !(!A || A.nodeType !== 1 && A.nodeType !== 9 && A.nodeType !== 11);
}
function Io(A) {
  return !(!A || A.nodeType !== 1 && A.nodeType !== 9 && A.nodeType !== 11 && (A.nodeType !== 8 || A.nodeValue !== " react-mount-point-unstable "));
}
function CB() {
}
function uC(A, e, t, r, n) {
  if (n) {
    if (typeof r == "function") {
      var a = r;
      r = function() {
        var u = Rs(i);
        a.call(u);
      };
    }
    var i = Aw(e, r, A, 0, null, !1, !1, "", CB);
    return A._reactRootContainer = i, A[yt] = i.current, Ta(A.nodeType === 8 ? A.parentNode : A), _r(), i;
  }
  for (; n = A.lastChild; )
    A.removeChild(n);
  if (typeof r == "function") {
    var s = r;
    r = function() {
      var u = Rs(o);
      s.call(u);
    };
  }
  var o = jf(A, 0, !1, null, null, !1, !1, "", CB);
  return A._reactRootContainer = o, A[yt] = o.current, Ta(A.nodeType === 8 ? A.parentNode : A), _r(function() {
    Fo(e, o, t, r);
  }), o;
}
function Ho(A, e, t, r, n) {
  var a = t._reactRootContainer;
  if (a) {
    var i = a;
    if (typeof n == "function") {
      var s = n;
      n = function() {
        var o = Rs(i);
        s.call(o);
      };
    }
    Fo(e, i, A, n);
  } else
    i = uC(t, e, A, n, r);
  return Rs(i);
}
xh = function(A) {
  switch (A.tag) {
    case 3:
      var e = A.stateNode;
      if (e.current.memoizedState.isDehydrated) {
        var t = Aa(e.pendingLanes);
        t !== 0 && (pf(e, t | 1), we(e, TA()), !(J & 6) && (In = TA() + 500, cr()));
      }
      break;
    case 13:
      _r(function() {
        var r = Ft(A, 1);
        if (r !== null) {
          var n = ie();
          We(r, A, 1, n);
        }
      }), zf(A, 1);
  }
};
wf = function(A) {
  if (A.tag === 13) {
    var e = Ft(A, 134217728);
    if (e !== null) {
      var t = ie();
      We(e, A, 134217728, t);
    }
    zf(A, 134217728);
  }
};
Sh = function(A) {
  if (A.tag === 13) {
    var e = $t(A), t = Ft(A, e);
    if (t !== null) {
      var r = ie();
      We(t, A, e, r);
    }
    zf(A, e);
  }
};
Th = function() {
  return aA;
};
_h = function(A, e) {
  var t = aA;
  try {
    return aA = A, e();
  } finally {
    aA = t;
  }
};
cl = function(A, e, t) {
  switch (e) {
    case "input":
      if (nl(A, t), e = t.name, t.type === "radio" && e != null) {
        for (t = A; t.parentNode; )
          t = t.parentNode;
        for (t = t.querySelectorAll("input[name=" + JSON.stringify("" + e) + '][type="radio"]'), e = 0; e < t.length; e++) {
          var r = t[e];
          if (r !== A && r.form === A.form) {
            var n = wo(r);
            if (!n)
              throw Error(F(90));
            uh(r), nl(r, n);
          }
        }
      }
      break;
    case "textarea":
      ch(A, t);
      break;
    case "select":
      e = t.value, e != null && dn(A, !!t.multiple, e, !1);
  }
};
wh = Wf;
vh = _r;
var lC = { usingClientEntryPoint: !1, Events: [si, nn, wo, hh, ph, Wf] }, Gn = { findFiberByHostInstance: vr, bundleType: 0, version: "18.2.0", rendererPackageName: "react-dom" }, cC = { bundleType: Gn.bundleType, version: Gn.version, rendererPackageName: Gn.rendererPackageName, rendererConfig: Gn.rendererConfig, overrideHookState: null, overrideHookStateDeletePath: null, overrideHookStateRenamePath: null, overrideProps: null, overridePropsDeletePath: null, overridePropsRenamePath: null, setErrorHandler: null, setSuspenseHandler: null, scheduleUpdate: null, currentDispatcherRef: xt.ReactCurrentDispatcher, findHostInstanceByFiber: function(A) {
  return A = Qh(A), A === null ? null : A.stateNode;
}, findFiberByHostInstance: Gn.findFiberByHostInstance || oC, findHostInstancesForRefresh: null, scheduleRefresh: null, scheduleRoot: null, setRefreshHandler: null, getCurrentFiber: null, reconcilerVersion: "18.2.0-next-9e3b772b8-20220608" };
if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u") {
  var xi = __REACT_DEVTOOLS_GLOBAL_HOOK__;
  if (!xi.isDisabled && xi.supportsFiber)
    try {
      Bo = xi.inject(cC), et = xi;
    } catch {
    }
}
ye.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = lC;
ye.createPortal = function(A, e) {
  var t = 2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
  if (!$f(e))
    throw Error(F(200));
  return sC(A, e, null, t);
};
ye.createRoot = function(A, e) {
  if (!$f(A))
    throw Error(F(299));
  var t = !1, r = "", n = ew;
  return e != null && (e.unstable_strictMode === !0 && (t = !0), e.identifierPrefix !== void 0 && (r = e.identifierPrefix), e.onRecoverableError !== void 0 && (n = e.onRecoverableError)), e = jf(A, 1, !1, null, null, t, !1, r, n), A[yt] = e.current, Ta(A.nodeType === 8 ? A.parentNode : A), new Jf(e);
};
ye.findDOMNode = function(A) {
  if (A == null)
    return null;
  if (A.nodeType === 1)
    return A;
  var e = A._reactInternals;
  if (e === void 0)
    throw typeof A.render == "function" ? Error(F(188)) : (A = Object.keys(A).join(","), Error(F(268, A)));
  return A = Qh(e), A = A === null ? null : A.stateNode, A;
};
ye.flushSync = function(A) {
  return _r(A);
};
ye.hydrate = function(A, e, t) {
  if (!Io(e))
    throw Error(F(200));
  return Ho(null, A, e, !0, t);
};
ye.hydrateRoot = function(A, e, t) {
  if (!$f(A))
    throw Error(F(405));
  var r = t != null && t.hydratedSources || null, n = !1, a = "", i = ew;
  if (t != null && (t.unstable_strictMode === !0 && (n = !0), t.identifierPrefix !== void 0 && (a = t.identifierPrefix), t.onRecoverableError !== void 0 && (i = t.onRecoverableError)), e = Aw(e, null, A, 1, t ?? null, n, !1, a, i), A[yt] = e.current, Ta(A), r)
    for (A = 0; A < r.length; A++)
      t = r[A], n = t._getVersion, n = n(t._source), e.mutableSourceEagerHydrationData == null ? e.mutableSourceEagerHydrationData = [t, n] : e.mutableSourceEagerHydrationData.push(
        t,
        n
      );
  return new Eo(e);
};
ye.render = function(A, e, t) {
  if (!Io(e))
    throw Error(F(200));
  return Ho(null, A, e, !1, t);
};
ye.unmountComponentAtNode = function(A) {
  if (!Io(A))
    throw Error(F(40));
  return A._reactRootContainer ? (_r(function() {
    Ho(null, null, A, !1, function() {
      A._reactRootContainer = null, A[yt] = null;
    });
  }), !0) : !1;
};
ye.unstable_batchedUpdates = Wf;
ye.unstable_renderSubtreeIntoContainer = function(A, e, t, r) {
  if (!Io(t))
    throw Error(F(200));
  if (A == null || A._reactInternals === void 0)
    throw Error(F(38));
  return Ho(A, e, t, !1, r);
};
ye.version = "18.2.0-next-9e3b772b8-20220608";
function tw() {
  if (!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" || typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function"))
    try {
      __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(tw);
    } catch (A) {
      console.error(A);
    }
}
tw(), Ah.exports = ye;
var fC = Ah.exports, rw, QB = fC;
rw = QB.createRoot, QB.hydrateRoot;
var nw = { exports: {} }, aw = {};
/**
 * @license React
 * use-sync-external-store-shim.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Hn = IA;
function dC(A, e) {
  return A === e && (A !== 0 || 1 / A === 1 / e) || A !== A && e !== e;
}
var BC = typeof Object.is == "function" ? Object.is : dC, gC = Hn.useState, hC = Hn.useEffect, pC = Hn.useLayoutEffect, wC = Hn.useDebugValue;
function vC(A, e) {
  var t = e(), r = gC({ inst: { value: t, getSnapshot: e } }), n = r[0].inst, a = r[1];
  return pC(function() {
    n.value = t, n.getSnapshot = e, hu(n) && a({ inst: n });
  }, [A, t, e]), hC(function() {
    return hu(n) && a({ inst: n }), A(function() {
      hu(n) && a({ inst: n });
    });
  }, [A]), wC(t), t;
}
function hu(A) {
  var e = A.getSnapshot;
  A = A.value;
  try {
    var t = e();
    return !BC(A, t);
  } catch {
    return !0;
  }
}
function mC(A, e) {
  return e();
}
var CC = typeof window > "u" || typeof window.document > "u" || typeof window.document.createElement > "u" ? mC : vC;
aw.useSyncExternalStore = Hn.useSyncExternalStore !== void 0 ? Hn.useSyncExternalStore : CC;
nw.exports = aw;
var QC = nw.exports;
const Pt = () => {
}, Be = (
  /*#__NOINLINE__*/
  Pt()
), pu = Object, $ = (A) => A === Be, vt = (A) => typeof A == "function", nr = (A, e) => ({
  ...A,
  ...e
}), UC = (A) => vt(A.then), Si = /* @__PURE__ */ new WeakMap();
let yC = 0;
const Na = (A) => {
  const e = typeof A, t = A && A.constructor, r = t == Date;
  let n, a;
  if (pu(A) === A && !r && t != RegExp) {
    if (n = Si.get(A), n)
      return n;
    if (n = ++yC + "~", Si.set(A, n), t == Array) {
      for (n = "@", a = 0; a < A.length; a++)
        n += Na(A[a]) + ",";
      Si.set(A, n);
    }
    if (t == pu) {
      n = "#";
      const i = pu.keys(A).sort();
      for (; !$(a = i.pop()); )
        $(A[a]) || (n += a + ":" + Na(A[a]) + ",");
      Si.set(A, n);
    }
  } else
    n = r ? A.toJSON() : e == "symbol" ? A.toString() : e == "string" ? JSON.stringify(A) : "" + A;
  return n;
}, ht = /* @__PURE__ */ new WeakMap(), wu = {}, Ti = {}, qf = "undefined", xo = typeof window != qf, Gl = typeof document != qf, FC = () => xo && typeof window.requestAnimationFrame != qf, iw = (A, e) => {
  const t = ht.get(A);
  return [
    // Getter
    () => !$(e) && A.get(e) || wu,
    // Setter
    (r) => {
      if (!$(e)) {
        const n = A.get(e);
        e in Ti || (Ti[e] = n), t[5](e, nr(n, r), n || wu);
      }
    },
    // Subscriber
    t[6],
    // Get server cache snapshot
    () => !$(e) && e in Ti ? Ti[e] : !$(e) && A.get(e) || wu
  ];
};
let Wl = !0;
const EC = () => Wl, [Yl, Xl] = xo && window.addEventListener ? [
  window.addEventListener.bind(window),
  window.removeEventListener.bind(window)
] : [
  Pt,
  Pt
], IC = () => {
  const A = Gl && document.visibilityState;
  return $(A) || A !== "hidden";
}, HC = (A) => (Gl && document.addEventListener("visibilitychange", A), Yl("focus", A), () => {
  Gl && document.removeEventListener("visibilitychange", A), Xl("focus", A);
}), xC = (A) => {
  const e = () => {
    Wl = !0, A();
  }, t = () => {
    Wl = !1;
  };
  return Yl("online", e), Yl("offline", t), () => {
    Xl("online", e), Xl("offline", t);
  };
}, SC = {
  isOnline: EC,
  isVisible: IC
}, TC = {
  initFocus: HC,
  initReconnect: xC
}, UB = !fo.useId, Ra = !xo || "Deno" in window, _C = (A) => FC() ? window.requestAnimationFrame(A) : setTimeout(A, 1), vu = Ra ? IA.useEffect : IA.useLayoutEffect, mu = typeof navigator < "u" && navigator.connection, yB = !Ra && mu && ([
  "slow-2g",
  "2g"
].includes(mu.effectiveType) || mu.saveData), Ad = (A) => {
  if (vt(A))
    try {
      A = A();
    } catch {
      A = "";
    }
  const e = A;
  return A = typeof A == "string" ? A : (Array.isArray(A) ? A.length : A) ? Na(A) : "", [
    A,
    e
  ];
};
let LC = 0;
const Zl = () => ++LC, sw = 0, ow = 1, uw = 2, DC = 3;
var Wn = {
  __proto__: null,
  ERROR_REVALIDATE_EVENT: DC,
  FOCUS_EVENT: sw,
  MUTATE_EVENT: uw,
  RECONNECT_EVENT: ow
};
async function lw(...A) {
  const [e, t, r, n] = A, a = nr({
    populateCache: !0,
    throwOnError: !0
  }, typeof n == "boolean" ? {
    revalidate: n
  } : n || {});
  let i = a.populateCache;
  const s = a.rollbackOnError;
  let o = a.optimisticData;
  const u = a.revalidate !== !1, l = (w) => typeof s == "function" ? s(w) : s !== !1, c = a.throwOnError;
  if (vt(t)) {
    const w = t, p = [], C = e.keys();
    for (const Q of C)
      // Skip the special useSWRInfinite and useSWRSubscription keys.
      !/^\$(inf|sub)\$/.test(Q) && w(e.get(Q)._k) && p.push(Q);
    return Promise.all(p.map(g));
  }
  return g(t);
  async function g(w) {
    const [p] = Ad(w);
    if (!p)
      return;
    const [C, Q] = iw(e, p), [d, f, B, h] = ht.get(e), m = () => {
      const R = d[p];
      return u && (delete B[p], delete h[p], R && R[0]) ? R[0](uw).then(() => C().data) : C().data;
    };
    if (A.length < 3)
      return m();
    let v = r, U;
    const y = Zl();
    f[p] = [
      y,
      0
    ];
    const E = !$(o), x = C(), Y = x.data, AA = x._c, b = $(AA) ? Y : AA;
    if (E && (o = vt(o) ? o(b, Y) : o, Q({
      data: o,
      _c: b
    })), vt(v))
      try {
        v = v(b);
      } catch (R) {
        U = R;
      }
    if (v && UC(v))
      if (v = await v.catch((R) => {
        U = R;
      }), y !== f[p][0]) {
        if (U)
          throw U;
        return v;
      } else
        U && E && l(U) && (i = !0, Q({
          data: b,
          _c: Be
        }));
    if (i && !U)
      if (vt(i)) {
        const R = i(v, b);
        Q({
          data: R,
          error: Be,
          _c: Be
        });
      } else
        Q({
          data: v,
          error: Be,
          _c: Be
        });
    if (f[p][1] = Zl(), Promise.resolve(m()).then(() => {
      Q({
        _c: Be
      });
    }), U) {
      if (c)
        throw U;
      return;
    }
    return v;
  }
}
const FB = (A, e) => {
  for (const t in A)
    A[t][0] && A[t][0](e);
}, OC = (A, e) => {
  if (!ht.has(A)) {
    const t = nr(TC, e), r = {}, n = lw.bind(Be, A);
    let a = Pt;
    const i = {}, s = (l, c) => {
      const g = i[l] || [];
      return i[l] = g, g.push(c), () => g.splice(g.indexOf(c), 1);
    }, o = (l, c, g) => {
      A.set(l, c);
      const w = i[l];
      if (w)
        for (const p of w)
          p(c, g);
    }, u = () => {
      if (!ht.has(A) && (ht.set(A, [
        r,
        {},
        {},
        {},
        n,
        o,
        s
      ]), !Ra)) {
        const l = t.initFocus(setTimeout.bind(Be, FB.bind(Be, r, sw))), c = t.initReconnect(setTimeout.bind(Be, FB.bind(Be, r, ow)));
        a = () => {
          l && l(), c && c(), ht.delete(A);
        };
      }
    };
    return u(), [
      A,
      n,
      u,
      a
    ];
  }
  return [
    A,
    ht.get(A)[4]
  ];
}, kC = (A, e, t, r, n) => {
  const a = t.errorRetryCount, i = n.retryCount, s = ~~((Math.random() + 0.5) * (1 << (i < 8 ? i : 8))) * t.errorRetryInterval;
  !$(a) && i > a || setTimeout(r, s, n);
}, MC = (A, e) => Na(A) == Na(e), [cw, KC] = OC(/* @__PURE__ */ new Map()), bC = nr(
  {
    // events
    onLoadingSlow: Pt,
    onSuccess: Pt,
    onError: Pt,
    onErrorRetry: kC,
    onDiscarded: Pt,
    // switches
    revalidateOnFocus: !0,
    revalidateOnReconnect: !0,
    revalidateIfStale: !0,
    shouldRetryOnError: !0,
    // timeouts
    errorRetryInterval: yB ? 1e4 : 5e3,
    focusThrottleInterval: 5 * 1e3,
    dedupingInterval: 2 * 1e3,
    loadingTimeout: yB ? 5e3 : 3e3,
    // providers
    compare: MC,
    isPaused: () => !1,
    cache: cw,
    mutate: KC,
    fallback: {}
  },
  // use web preset by default
  SC
), NC = (A, e) => {
  const t = nr(A, e);
  if (e) {
    const { use: r, fallback: n } = A, { use: a, fallback: i } = e;
    r && a && (t.use = r.concat(a)), n && i && (t.fallback = nr(n, i));
  }
  return t;
}, RC = IA.createContext({}), PC = "$inf$", fw = xo && window.__SWR_DEVTOOLS_USE__, VC = fw ? window.__SWR_DEVTOOLS_USE__ : [], GC = () => {
  fw && (window.__SWR_DEVTOOLS_REACT__ = fo);
}, WC = (A) => vt(A[1]) ? [
  A[0],
  A[1],
  A[2] || {}
] : [
  A[0],
  null,
  (A[1] === null ? A[2] : A[1]) || {}
], YC = () => nr(bC, IA.useContext(RC)), XC = (A) => (e, t, r) => A(e, t && ((...a) => {
  const [i] = Ad(e), [, , , s] = ht.get(cw);
  if (i.startsWith(PC))
    return t(...a);
  const o = s[i];
  return $(o) ? t(...a) : (delete s[i], o);
}), r), ZC = VC.concat(XC), jC = (A) => function(...t) {
  const r = YC(), [n, a, i] = WC(t), s = NC(r, i);
  let o = A;
  const { use: u } = s, l = (u || []).concat(ZC);
  for (let c = l.length; c--; )
    o = l[c](o);
  return o(n, a || s.fetcher || null, s);
}, zC = (A, e, t) => {
  const r = e[A] || (e[A] = []);
  return r.push(t), () => {
    const n = r.indexOf(t);
    n >= 0 && (r[n] = r[r.length - 1], r.pop());
  };
};
GC();
const EB = fo.use || ((A) => {
  if (A.status === "pending")
    throw A;
  if (A.status === "fulfilled")
    return A.value;
  throw A.status === "rejected" ? A.reason : (A.status = "pending", A.then((e) => {
    A.status = "fulfilled", A.value = e;
  }, (e) => {
    A.status = "rejected", A.reason = e;
  }), A);
}), Cu = {
  dedupe: !0
}, JC = (A, e, t) => {
  const { cache: r, compare: n, suspense: a, fallbackData: i, revalidateOnMount: s, revalidateIfStale: o, refreshInterval: u, refreshWhenHidden: l, refreshWhenOffline: c, keepPreviousData: g } = t, [w, p, C, Q] = ht.get(r), [d, f] = Ad(A), B = IA.useRef(!1), h = IA.useRef(!1), m = IA.useRef(d), v = IA.useRef(e), U = IA.useRef(t), y = () => U.current, E = () => y().isVisible() && y().isOnline(), [x, Y, AA, b] = iw(r, d), R = IA.useRef({}).current, eA = $(i) ? t.fallback[d] : i, z = (sA, oA) => {
    for (const bA in R) {
      const pA = bA;
      if (pA === "data") {
        if (!n(sA[pA], oA[pA]) && (!$(sA[pA]) || !n(FA, oA[pA])))
          return !1;
      } else if (oA[pA] !== sA[pA])
        return !1;
    }
    return !0;
  }, tA = IA.useMemo(() => {
    const sA = !d || !e ? !1 : $(s) ? y().isPaused() || a ? !1 : $(o) ? !0 : o : s, oA = (te) => {
      const lt = nr(te);
      return delete lt._k, sA ? {
        isValidating: !0,
        isLoading: !0,
        ...lt
      } : lt;
    }, bA = x(), pA = b(), dA = oA(bA), ee = bA === pA ? dA : oA(pA);
    let EA = dA;
    return [
      () => {
        const te = oA(x());
        return z(te, EA) ? (EA.data = te.data, EA.isLoading = te.isLoading, EA.isValidating = te.isValidating, EA.error = te.error, EA) : (EA = te, te);
      },
      () => ee
    ];
  }, [
    r,
    d
  ]), H = QC.useSyncExternalStore(IA.useCallback(
    (sA) => AA(d, (oA, bA) => {
      z(bA, oA) || sA();
    }),
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [
      r,
      d
    ]
  ), tA[0], tA[1]), O = !B.current, k = w[d] && w[d].length > 0, G = H.data, X = $(G) ? eA : G, hA = H.error, yA = IA.useRef(X), FA = g ? $(G) ? yA.current : G : X, DA = k && !$(hA) ? !1 : O && !$(s) ? s : y().isPaused() ? !1 : a ? $(X) ? !1 : o : $(X) || o, OA = !!(d && e && O && DA), fr = $(H.isValidating) ? OA : H.isValidating, kn = $(H.isLoading) ? OA : H.isLoading, ut = IA.useCallback(
    async (sA) => {
      const oA = v.current;
      if (!d || !oA || h.current || y().isPaused())
        return !1;
      let bA, pA, dA = !0;
      const ee = sA || {}, EA = !C[d] || !ee.dedupe, te = () => UB ? !h.current && d === m.current && B.current : d === m.current, lt = {
        isValidating: !1,
        isLoading: !1
      }, cd = () => {
        Y(lt);
      }, fd = () => {
        const Ee = C[d];
        Ee && Ee[1] === pA && delete C[d];
      }, dd = {
        isValidating: !0
      };
      $(x().data) && (dd.isLoading = !0);
      try {
        if (EA && (Y(dd), t.loadingTimeout && $(x().data) && setTimeout(() => {
          dA && te() && y().onLoadingSlow(d, t);
        }, t.loadingTimeout), C[d] = [
          oA(f),
          Zl()
        ]), [bA, pA] = C[d], bA = await bA, EA && setTimeout(fd, t.dedupingInterval), !C[d] || C[d][1] !== pA)
          return EA && te() && y().onDiscarded(d), !1;
        lt.error = Be;
        const Ee = p[d];
        if (!$(Ee) && // case 1
        (pA <= Ee[0] || // case 2
        pA <= Ee[1] || // case 3
        Ee[1] === 0))
          return cd(), EA && te() && y().onDiscarded(d), !1;
        const ct = x().data;
        lt.data = n(ct, bA) ? ct : bA, EA && te() && y().onSuccess(bA, d, t);
      } catch (Ee) {
        fd();
        const ct = y(), { shouldRetryOnError: Po } = ct;
        ct.isPaused() || (lt.error = Ee, EA && te() && (ct.onError(Ee, d, ct), (Po === !0 || vt(Po) && Po(Ee)) && E() && ct.onErrorRetry(Ee, d, ct, (R0) => {
          const Vo = w[d];
          Vo && Vo[0] && Vo[0](Wn.ERROR_REVALIDATE_EVENT, R0);
        }, {
          retryCount: (ee.retryCount || 0) + 1,
          dedupe: !0
        })));
      }
      return dA = !1, cd(), !0;
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
  ), dr = IA.useCallback(
    // Use callback to make sure `keyRef.current` returns latest result every time
    (...sA) => lw(r, m.current, ...sA),
    // eslint-disable-next-line react-hooks/exhaustive-deps
    []
  );
  if (vu(() => {
    v.current = e, U.current = t, $(G) || (yA.current = G);
  }), vu(() => {
    if (!d)
      return;
    const sA = ut.bind(Be, Cu);
    let oA = 0;
    const pA = zC(d, w, (dA, ee = {}) => {
      if (dA == Wn.FOCUS_EVENT) {
        const EA = Date.now();
        y().revalidateOnFocus && EA > oA && E() && (oA = EA + y().focusThrottleInterval, sA());
      } else if (dA == Wn.RECONNECT_EVENT)
        y().revalidateOnReconnect && E() && sA();
      else {
        if (dA == Wn.MUTATE_EVENT)
          return ut();
        if (dA == Wn.ERROR_REVALIDATE_EVENT)
          return ut(ee);
      }
    });
    return h.current = !1, m.current = d, B.current = !0, Y({
      _k: f
    }), DA && ($(X) || Ra ? sA() : _C(sA)), () => {
      h.current = !0, pA();
    };
  }, [
    d
  ]), vu(() => {
    let sA;
    function oA() {
      const pA = vt(u) ? u(x().data) : u;
      pA && sA !== -1 && (sA = setTimeout(bA, pA));
    }
    function bA() {
      !x().error && (l || y().isVisible()) && (c || y().isOnline()) ? ut(Cu).then(oA) : oA();
    }
    return oA(), () => {
      sA && (clearTimeout(sA), sA = -1);
    };
  }, [
    u,
    l,
    c,
    d
  ]), IA.useDebugValue(FA), a && $(X) && d) {
    if (!UB && Ra)
      throw new Error("Fallback data is required when using suspense in SSR.");
    v.current = e, U.current = t, h.current = !1;
    const sA = Q[d];
    if (!$(sA)) {
      const oA = dr(sA);
      EB(oA);
    }
    if ($(hA)) {
      const oA = ut(Cu);
      $(FA) || (oA.status = "fulfilled", oA.value = !0), EB(oA);
    } else
      throw hA;
  }
  return {
    mutate: dr,
    get data() {
      return R.data = !0, FA;
    },
    get error() {
      return R.error = !0, hA;
    },
    get isValidating() {
      return R.isValidating = !0, fr;
    },
    get isLoading() {
      return R.isLoading = !0, kn;
    }
  };
}, $C = jC(JC);
var q;
(function(A) {
  A.assertEqual = (n) => n;
  function e(n) {
  }
  A.assertIs = e;
  function t(n) {
    throw new Error();
  }
  A.assertNever = t, A.arrayToEnum = (n) => {
    const a = {};
    for (const i of n)
      a[i] = i;
    return a;
  }, A.getValidEnumValues = (n) => {
    const a = A.objectKeys(n).filter((s) => typeof n[n[s]] != "number"), i = {};
    for (const s of a)
      i[s] = n[s];
    return A.objectValues(i);
  }, A.objectValues = (n) => A.objectKeys(n).map(function(a) {
    return n[a];
  }), A.objectKeys = typeof Object.keys == "function" ? (n) => Object.keys(n) : (n) => {
    const a = [];
    for (const i in n)
      Object.prototype.hasOwnProperty.call(n, i) && a.push(i);
    return a;
  }, A.find = (n, a) => {
    for (const i of n)
      if (a(i))
        return i;
  }, A.isInteger = typeof Number.isInteger == "function" ? (n) => Number.isInteger(n) : (n) => typeof n == "number" && isFinite(n) && Math.floor(n) === n;
  function r(n, a = " | ") {
    return n.map((i) => typeof i == "string" ? `'${i}'` : i).join(a);
  }
  A.joinValues = r, A.jsonStringifyReplacer = (n, a) => typeof a == "bigint" ? a.toString() : a;
})(q || (q = {}));
var jl;
(function(A) {
  A.mergeShapes = (e, t) => ({
    ...e,
    ...t
    // second overwrites first
  });
})(jl || (jl = {}));
const _ = q.arrayToEnum([
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
]), bt = (A) => {
  switch (typeof A) {
    case "undefined":
      return _.undefined;
    case "string":
      return _.string;
    case "number":
      return isNaN(A) ? _.nan : _.number;
    case "boolean":
      return _.boolean;
    case "function":
      return _.function;
    case "bigint":
      return _.bigint;
    case "symbol":
      return _.symbol;
    case "object":
      return Array.isArray(A) ? _.array : A === null ? _.null : A.then && typeof A.then == "function" && A.catch && typeof A.catch == "function" ? _.promise : typeof Map < "u" && A instanceof Map ? _.map : typeof Set < "u" && A instanceof Set ? _.set : typeof Date < "u" && A instanceof Date ? _.date : _.object;
    default:
      return _.unknown;
  }
}, I = q.arrayToEnum([
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
]), qC = (A) => JSON.stringify(A, null, 2).replace(/"([^"]+)":/g, "$1:");
class Ye extends Error {
  constructor(e) {
    super(), this.issues = [], this.addIssue = (r) => {
      this.issues = [...this.issues, r];
    }, this.addIssues = (r = []) => {
      this.issues = [...this.issues, ...r];
    };
    const t = new.target.prototype;
    Object.setPrototypeOf ? Object.setPrototypeOf(this, t) : this.__proto__ = t, this.name = "ZodError", this.issues = e;
  }
  get errors() {
    return this.issues;
  }
  format(e) {
    const t = e || function(a) {
      return a.message;
    }, r = { _errors: [] }, n = (a) => {
      for (const i of a.issues)
        if (i.code === "invalid_union")
          i.unionErrors.map(n);
        else if (i.code === "invalid_return_type")
          n(i.returnTypeError);
        else if (i.code === "invalid_arguments")
          n(i.argumentsError);
        else if (i.path.length === 0)
          r._errors.push(t(i));
        else {
          let s = r, o = 0;
          for (; o < i.path.length; ) {
            const u = i.path[o];
            o === i.path.length - 1 ? (s[u] = s[u] || { _errors: [] }, s[u]._errors.push(t(i))) : s[u] = s[u] || { _errors: [] }, s = s[u], o++;
          }
        }
    };
    return n(this), r;
  }
  toString() {
    return this.message;
  }
  get message() {
    return JSON.stringify(this.issues, q.jsonStringifyReplacer, 2);
  }
  get isEmpty() {
    return this.issues.length === 0;
  }
  flatten(e = (t) => t.message) {
    const t = {}, r = [];
    for (const n of this.issues)
      n.path.length > 0 ? (t[n.path[0]] = t[n.path[0]] || [], t[n.path[0]].push(e(n))) : r.push(e(n));
    return { formErrors: r, fieldErrors: t };
  }
  get formErrors() {
    return this.flatten();
  }
}
Ye.create = (A) => new Ye(A);
const Pa = (A, e) => {
  let t;
  switch (A.code) {
    case I.invalid_type:
      A.received === _.undefined ? t = "Required" : t = `Expected ${A.expected}, received ${A.received}`;
      break;
    case I.invalid_literal:
      t = `Invalid literal value, expected ${JSON.stringify(A.expected, q.jsonStringifyReplacer)}`;
      break;
    case I.unrecognized_keys:
      t = `Unrecognized key(s) in object: ${q.joinValues(A.keys, ", ")}`;
      break;
    case I.invalid_union:
      t = "Invalid input";
      break;
    case I.invalid_union_discriminator:
      t = `Invalid discriminator value. Expected ${q.joinValues(A.options)}`;
      break;
    case I.invalid_enum_value:
      t = `Invalid enum value. Expected ${q.joinValues(A.options)}, received '${A.received}'`;
      break;
    case I.invalid_arguments:
      t = "Invalid function arguments";
      break;
    case I.invalid_return_type:
      t = "Invalid function return type";
      break;
    case I.invalid_date:
      t = "Invalid date";
      break;
    case I.invalid_string:
      typeof A.validation == "object" ? "includes" in A.validation ? (t = `Invalid input: must include "${A.validation.includes}"`, typeof A.validation.position == "number" && (t = `${t} at one or more positions greater than or equal to ${A.validation.position}`)) : "startsWith" in A.validation ? t = `Invalid input: must start with "${A.validation.startsWith}"` : "endsWith" in A.validation ? t = `Invalid input: must end with "${A.validation.endsWith}"` : q.assertNever(A.validation) : A.validation !== "regex" ? t = `Invalid ${A.validation}` : t = "Invalid";
      break;
    case I.too_small:
      A.type === "array" ? t = `Array must contain ${A.exact ? "exactly" : A.inclusive ? "at least" : "more than"} ${A.minimum} element(s)` : A.type === "string" ? t = `String must contain ${A.exact ? "exactly" : A.inclusive ? "at least" : "over"} ${A.minimum} character(s)` : A.type === "number" ? t = `Number must be ${A.exact ? "exactly equal to " : A.inclusive ? "greater than or equal to " : "greater than "}${A.minimum}` : A.type === "date" ? t = `Date must be ${A.exact ? "exactly equal to " : A.inclusive ? "greater than or equal to " : "greater than "}${new Date(Number(A.minimum))}` : t = "Invalid input";
      break;
    case I.too_big:
      A.type === "array" ? t = `Array must contain ${A.exact ? "exactly" : A.inclusive ? "at most" : "less than"} ${A.maximum} element(s)` : A.type === "string" ? t = `String must contain ${A.exact ? "exactly" : A.inclusive ? "at most" : "under"} ${A.maximum} character(s)` : A.type === "number" ? t = `Number must be ${A.exact ? "exactly" : A.inclusive ? "less than or equal to" : "less than"} ${A.maximum}` : A.type === "bigint" ? t = `BigInt must be ${A.exact ? "exactly" : A.inclusive ? "less than or equal to" : "less than"} ${A.maximum}` : A.type === "date" ? t = `Date must be ${A.exact ? "exactly" : A.inclusive ? "smaller than or equal to" : "smaller than"} ${new Date(Number(A.maximum))}` : t = "Invalid input";
      break;
    case I.custom:
      t = "Invalid input";
      break;
    case I.invalid_intersection_types:
      t = "Intersection results could not be merged";
      break;
    case I.not_multiple_of:
      t = `Number must be a multiple of ${A.multipleOf}`;
      break;
    case I.not_finite:
      t = "Number must be finite";
      break;
    default:
      t = e.defaultError, q.assertNever(A);
  }
  return { message: t };
};
let dw = Pa;
function AQ(A) {
  dw = A;
}
function Ps() {
  return dw;
}
const Vs = (A) => {
  const { data: e, path: t, errorMaps: r, issueData: n } = A, a = [...t, ...n.path || []], i = {
    ...n,
    path: a
  };
  let s = "";
  const o = r.filter((u) => !!u).slice().reverse();
  for (const u of o)
    s = u(i, { data: e, defaultError: s }).message;
  return {
    ...n,
    path: a,
    message: n.message || s
  };
}, eQ = [];
function L(A, e) {
  const t = Vs({
    issueData: e,
    data: A.data,
    path: A.path,
    errorMaps: [
      A.common.contextualErrorMap,
      A.schemaErrorMap,
      Ps(),
      Pa
      // then global default map
    ].filter((r) => !!r)
  });
  A.common.issues.push(t);
}
class Ae {
  constructor() {
    this.value = "valid";
  }
  dirty() {
    this.value === "valid" && (this.value = "dirty");
  }
  abort() {
    this.value !== "aborted" && (this.value = "aborted");
  }
  static mergeArray(e, t) {
    const r = [];
    for (const n of t) {
      if (n.status === "aborted")
        return N;
      n.status === "dirty" && e.dirty(), r.push(n.value);
    }
    return { status: e.value, value: r };
  }
  static async mergeObjectAsync(e, t) {
    const r = [];
    for (const n of t)
      r.push({
        key: await n.key,
        value: await n.value
      });
    return Ae.mergeObjectSync(e, r);
  }
  static mergeObjectSync(e, t) {
    const r = {};
    for (const n of t) {
      const { key: a, value: i } = n;
      if (a.status === "aborted" || i.status === "aborted")
        return N;
      a.status === "dirty" && e.dirty(), i.status === "dirty" && e.dirty(), a.value !== "__proto__" && (typeof i.value < "u" || n.alwaysSet) && (r[a.value] = i.value);
    }
    return { status: e.value, value: r };
  }
}
const N = Object.freeze({
  status: "aborted"
}), Bw = (A) => ({ status: "dirty", value: A }), se = (A) => ({ status: "valid", value: A }), zl = (A) => A.status === "aborted", Jl = (A) => A.status === "dirty", Va = (A) => A.status === "valid", Gs = (A) => typeof Promise < "u" && A instanceof Promise;
var M;
(function(A) {
  A.errToObj = (e) => typeof e == "string" ? { message: e } : e || {}, A.toString = (e) => typeof e == "string" ? e : e == null ? void 0 : e.message;
})(M || (M = {}));
class rt {
  constructor(e, t, r, n) {
    this._cachedPath = [], this.parent = e, this.data = t, this._path = r, this._key = n;
  }
  get path() {
    return this._cachedPath.length || (this._key instanceof Array ? this._cachedPath.push(...this._path, ...this._key) : this._cachedPath.push(...this._path, this._key)), this._cachedPath;
  }
}
const IB = (A, e) => {
  if (Va(e))
    return { success: !0, data: e.value };
  if (!A.common.issues.length)
    throw new Error("Validation failed but no issues detected.");
  return {
    success: !1,
    get error() {
      if (this._error)
        return this._error;
      const t = new Ye(A.common.issues);
      return this._error = t, this._error;
    }
  };
};
function V(A) {
  if (!A)
    return {};
  const { errorMap: e, invalid_type_error: t, required_error: r, description: n } = A;
  if (e && (t || r))
    throw new Error(`Can't use "invalid_type_error" or "required_error" in conjunction with custom error map.`);
  return e ? { errorMap: e, description: n } : { errorMap: (i, s) => i.code !== "invalid_type" ? { message: s.defaultError } : typeof s.data > "u" ? { message: r ?? s.defaultError } : { message: t ?? s.defaultError }, description: n };
}
class W {
  constructor(e) {
    this.spa = this.safeParseAsync, this._def = e, this.parse = this.parse.bind(this), this.safeParse = this.safeParse.bind(this), this.parseAsync = this.parseAsync.bind(this), this.safeParseAsync = this.safeParseAsync.bind(this), this.spa = this.spa.bind(this), this.refine = this.refine.bind(this), this.refinement = this.refinement.bind(this), this.superRefine = this.superRefine.bind(this), this.optional = this.optional.bind(this), this.nullable = this.nullable.bind(this), this.nullish = this.nullish.bind(this), this.array = this.array.bind(this), this.promise = this.promise.bind(this), this.or = this.or.bind(this), this.and = this.and.bind(this), this.transform = this.transform.bind(this), this.brand = this.brand.bind(this), this.default = this.default.bind(this), this.catch = this.catch.bind(this), this.describe = this.describe.bind(this), this.pipe = this.pipe.bind(this), this.readonly = this.readonly.bind(this), this.isNullable = this.isNullable.bind(this), this.isOptional = this.isOptional.bind(this);
  }
  get description() {
    return this._def.description;
  }
  _getType(e) {
    return bt(e.data);
  }
  _getOrReturnCtx(e, t) {
    return t || {
      common: e.parent.common,
      data: e.data,
      parsedType: bt(e.data),
      schemaErrorMap: this._def.errorMap,
      path: e.path,
      parent: e.parent
    };
  }
  _processInputParams(e) {
    return {
      status: new Ae(),
      ctx: {
        common: e.parent.common,
        data: e.data,
        parsedType: bt(e.data),
        schemaErrorMap: this._def.errorMap,
        path: e.path,
        parent: e.parent
      }
    };
  }
  _parseSync(e) {
    const t = this._parse(e);
    if (Gs(t))
      throw new Error("Synchronous parse encountered promise.");
    return t;
  }
  _parseAsync(e) {
    const t = this._parse(e);
    return Promise.resolve(t);
  }
  parse(e, t) {
    const r = this.safeParse(e, t);
    if (r.success)
      return r.data;
    throw r.error;
  }
  safeParse(e, t) {
    var r;
    const n = {
      common: {
        issues: [],
        async: (r = t == null ? void 0 : t.async) !== null && r !== void 0 ? r : !1,
        contextualErrorMap: t == null ? void 0 : t.errorMap
      },
      path: (t == null ? void 0 : t.path) || [],
      schemaErrorMap: this._def.errorMap,
      parent: null,
      data: e,
      parsedType: bt(e)
    }, a = this._parseSync({ data: e, path: n.path, parent: n });
    return IB(n, a);
  }
  async parseAsync(e, t) {
    const r = await this.safeParseAsync(e, t);
    if (r.success)
      return r.data;
    throw r.error;
  }
  async safeParseAsync(e, t) {
    const r = {
      common: {
        issues: [],
        contextualErrorMap: t == null ? void 0 : t.errorMap,
        async: !0
      },
      path: (t == null ? void 0 : t.path) || [],
      schemaErrorMap: this._def.errorMap,
      parent: null,
      data: e,
      parsedType: bt(e)
    }, n = this._parse({ data: e, path: r.path, parent: r }), a = await (Gs(n) ? n : Promise.resolve(n));
    return IB(r, a);
  }
  refine(e, t) {
    const r = (n) => typeof t == "string" || typeof t > "u" ? { message: t } : typeof t == "function" ? t(n) : t;
    return this._refinement((n, a) => {
      const i = e(n), s = () => a.addIssue({
        code: I.custom,
        ...r(n)
      });
      return typeof Promise < "u" && i instanceof Promise ? i.then((o) => o ? !0 : (s(), !1)) : i ? !0 : (s(), !1);
    });
  }
  refinement(e, t) {
    return this._refinement((r, n) => e(r) ? !0 : (n.addIssue(typeof t == "function" ? t(r, n) : t), !1));
  }
  _refinement(e) {
    return new je({
      schema: this,
      typeName: K.ZodEffects,
      effect: { type: "refinement", refinement: e }
    });
  }
  superRefine(e) {
    return this._refinement(e);
  }
  optional() {
    return Ct.create(this, this._def);
  }
  nullable() {
    return Or.create(this, this._def);
  }
  nullish() {
    return this.nullable().optional();
  }
  array() {
    return Xe.create(this, this._def);
  }
  promise() {
    return Sn.create(this, this._def);
  }
  or(e) {
    return Xa.create([this, e], this._def);
  }
  and(e) {
    return Za.create(this, e, this._def);
  }
  transform(e) {
    return new je({
      ...V(this._def),
      schema: this,
      typeName: K.ZodEffects,
      effect: { type: "transform", transform: e }
    });
  }
  default(e) {
    const t = typeof e == "function" ? e : () => e;
    return new qa({
      ...V(this._def),
      innerType: this,
      defaultValue: t,
      typeName: K.ZodDefault
    });
  }
  brand() {
    return new hw({
      typeName: K.ZodBranded,
      type: this,
      ...V(this._def)
    });
  }
  catch(e) {
    const t = typeof e == "function" ? e : () => e;
    return new Zs({
      ...V(this._def),
      innerType: this,
      catchValue: t,
      typeName: K.ZodCatch
    });
  }
  describe(e) {
    const t = this.constructor;
    return new t({
      ...this._def,
      description: e
    });
  }
  pipe(e) {
    return ui.create(this, e);
  }
  readonly() {
    return zs.create(this);
  }
  isOptional() {
    return this.safeParse(void 0).success;
  }
  isNullable() {
    return this.safeParse(null).success;
  }
}
const tQ = /^c[^\s-]{8,}$/i, rQ = /^[a-z][a-z0-9]*$/, nQ = /^[0-9A-HJKMNP-TV-Z]{26}$/, aQ = /^[0-9a-fA-F]{8}\b-[0-9a-fA-F]{4}\b-[0-9a-fA-F]{4}\b-[0-9a-fA-F]{4}\b-[0-9a-fA-F]{12}$/i, iQ = /^(?!\.)(?!.*\.\.)([A-Z0-9_+-\.]*)[A-Z0-9_+-]@([A-Z0-9][A-Z0-9\-]*\.)+[A-Z]{2,}$/i, sQ = "^(\\p{Extended_Pictographic}|\\p{Emoji_Component})+$";
let Qu;
const oQ = /^(((25[0-5])|(2[0-4][0-9])|(1[0-9]{2})|([0-9]{1,2}))\.){3}((25[0-5])|(2[0-4][0-9])|(1[0-9]{2})|([0-9]{1,2}))$/, uQ = /^(([a-f0-9]{1,4}:){7}|::([a-f0-9]{1,4}:){0,6}|([a-f0-9]{1,4}:){1}:([a-f0-9]{1,4}:){0,5}|([a-f0-9]{1,4}:){2}:([a-f0-9]{1,4}:){0,4}|([a-f0-9]{1,4}:){3}:([a-f0-9]{1,4}:){0,3}|([a-f0-9]{1,4}:){4}:([a-f0-9]{1,4}:){0,2}|([a-f0-9]{1,4}:){5}:([a-f0-9]{1,4}:){0,1})([a-f0-9]{1,4}|(((25[0-5])|(2[0-4][0-9])|(1[0-9]{2})|([0-9]{1,2}))\.){3}((25[0-5])|(2[0-4][0-9])|(1[0-9]{2})|([0-9]{1,2})))$/, lQ = (A) => A.precision ? A.offset ? new RegExp(`^\\d{4}-\\d{2}-\\d{2}T\\d{2}:\\d{2}:\\d{2}\\.\\d{${A.precision}}(([+-]\\d{2}(:?\\d{2})?)|Z)$`) : new RegExp(`^\\d{4}-\\d{2}-\\d{2}T\\d{2}:\\d{2}:\\d{2}\\.\\d{${A.precision}}Z$`) : A.precision === 0 ? A.offset ? new RegExp("^\\d{4}-\\d{2}-\\d{2}T\\d{2}:\\d{2}:\\d{2}(([+-]\\d{2}(:?\\d{2})?)|Z)$") : new RegExp("^\\d{4}-\\d{2}-\\d{2}T\\d{2}:\\d{2}:\\d{2}Z$") : A.offset ? new RegExp("^\\d{4}-\\d{2}-\\d{2}T\\d{2}:\\d{2}:\\d{2}(\\.\\d+)?(([+-]\\d{2}(:?\\d{2})?)|Z)$") : new RegExp("^\\d{4}-\\d{2}-\\d{2}T\\d{2}:\\d{2}:\\d{2}(\\.\\d+)?Z$");
function cQ(A, e) {
  return !!((e === "v4" || !e) && oQ.test(A) || (e === "v6" || !e) && uQ.test(A));
}
class Ve extends W {
  _parse(e) {
    if (this._def.coerce && (e.data = String(e.data)), this._getType(e) !== _.string) {
      const a = this._getOrReturnCtx(e);
      return L(
        a,
        {
          code: I.invalid_type,
          expected: _.string,
          received: a.parsedType
        }
        //
      ), N;
    }
    const r = new Ae();
    let n;
    for (const a of this._def.checks)
      if (a.kind === "min")
        e.data.length < a.value && (n = this._getOrReturnCtx(e, n), L(n, {
          code: I.too_small,
          minimum: a.value,
          type: "string",
          inclusive: !0,
          exact: !1,
          message: a.message
        }), r.dirty());
      else if (a.kind === "max")
        e.data.length > a.value && (n = this._getOrReturnCtx(e, n), L(n, {
          code: I.too_big,
          maximum: a.value,
          type: "string",
          inclusive: !0,
          exact: !1,
          message: a.message
        }), r.dirty());
      else if (a.kind === "length") {
        const i = e.data.length > a.value, s = e.data.length < a.value;
        (i || s) && (n = this._getOrReturnCtx(e, n), i ? L(n, {
          code: I.too_big,
          maximum: a.value,
          type: "string",
          inclusive: !0,
          exact: !0,
          message: a.message
        }) : s && L(n, {
          code: I.too_small,
          minimum: a.value,
          type: "string",
          inclusive: !0,
          exact: !0,
          message: a.message
        }), r.dirty());
      } else if (a.kind === "email")
        iQ.test(e.data) || (n = this._getOrReturnCtx(e, n), L(n, {
          validation: "email",
          code: I.invalid_string,
          message: a.message
        }), r.dirty());
      else if (a.kind === "emoji")
        Qu || (Qu = new RegExp(sQ, "u")), Qu.test(e.data) || (n = this._getOrReturnCtx(e, n), L(n, {
          validation: "emoji",
          code: I.invalid_string,
          message: a.message
        }), r.dirty());
      else if (a.kind === "uuid")
        aQ.test(e.data) || (n = this._getOrReturnCtx(e, n), L(n, {
          validation: "uuid",
          code: I.invalid_string,
          message: a.message
        }), r.dirty());
      else if (a.kind === "cuid")
        tQ.test(e.data) || (n = this._getOrReturnCtx(e, n), L(n, {
          validation: "cuid",
          code: I.invalid_string,
          message: a.message
        }), r.dirty());
      else if (a.kind === "cuid2")
        rQ.test(e.data) || (n = this._getOrReturnCtx(e, n), L(n, {
          validation: "cuid2",
          code: I.invalid_string,
          message: a.message
        }), r.dirty());
      else if (a.kind === "ulid")
        nQ.test(e.data) || (n = this._getOrReturnCtx(e, n), L(n, {
          validation: "ulid",
          code: I.invalid_string,
          message: a.message
        }), r.dirty());
      else if (a.kind === "url")
        try {
          new URL(e.data);
        } catch {
          n = this._getOrReturnCtx(e, n), L(n, {
            validation: "url",
            code: I.invalid_string,
            message: a.message
          }), r.dirty();
        }
      else
        a.kind === "regex" ? (a.regex.lastIndex = 0, a.regex.test(e.data) || (n = this._getOrReturnCtx(e, n), L(n, {
          validation: "regex",
          code: I.invalid_string,
          message: a.message
        }), r.dirty())) : a.kind === "trim" ? e.data = e.data.trim() : a.kind === "includes" ? e.data.includes(a.value, a.position) || (n = this._getOrReturnCtx(e, n), L(n, {
          code: I.invalid_string,
          validation: { includes: a.value, position: a.position },
          message: a.message
        }), r.dirty()) : a.kind === "toLowerCase" ? e.data = e.data.toLowerCase() : a.kind === "toUpperCase" ? e.data = e.data.toUpperCase() : a.kind === "startsWith" ? e.data.startsWith(a.value) || (n = this._getOrReturnCtx(e, n), L(n, {
          code: I.invalid_string,
          validation: { startsWith: a.value },
          message: a.message
        }), r.dirty()) : a.kind === "endsWith" ? e.data.endsWith(a.value) || (n = this._getOrReturnCtx(e, n), L(n, {
          code: I.invalid_string,
          validation: { endsWith: a.value },
          message: a.message
        }), r.dirty()) : a.kind === "datetime" ? lQ(a).test(e.data) || (n = this._getOrReturnCtx(e, n), L(n, {
          code: I.invalid_string,
          validation: "datetime",
          message: a.message
        }), r.dirty()) : a.kind === "ip" ? cQ(e.data, a.version) || (n = this._getOrReturnCtx(e, n), L(n, {
          validation: "ip",
          code: I.invalid_string,
          message: a.message
        }), r.dirty()) : q.assertNever(a);
    return { status: r.value, value: e.data };
  }
  _regex(e, t, r) {
    return this.refinement((n) => e.test(n), {
      validation: t,
      code: I.invalid_string,
      ...M.errToObj(r)
    });
  }
  _addCheck(e) {
    return new Ve({
      ...this._def,
      checks: [...this._def.checks, e]
    });
  }
  email(e) {
    return this._addCheck({ kind: "email", ...M.errToObj(e) });
  }
  url(e) {
    return this._addCheck({ kind: "url", ...M.errToObj(e) });
  }
  emoji(e) {
    return this._addCheck({ kind: "emoji", ...M.errToObj(e) });
  }
  uuid(e) {
    return this._addCheck({ kind: "uuid", ...M.errToObj(e) });
  }
  cuid(e) {
    return this._addCheck({ kind: "cuid", ...M.errToObj(e) });
  }
  cuid2(e) {
    return this._addCheck({ kind: "cuid2", ...M.errToObj(e) });
  }
  ulid(e) {
    return this._addCheck({ kind: "ulid", ...M.errToObj(e) });
  }
  ip(e) {
    return this._addCheck({ kind: "ip", ...M.errToObj(e) });
  }
  datetime(e) {
    var t;
    return typeof e == "string" ? this._addCheck({
      kind: "datetime",
      precision: null,
      offset: !1,
      message: e
    }) : this._addCheck({
      kind: "datetime",
      precision: typeof (e == null ? void 0 : e.precision) > "u" ? null : e == null ? void 0 : e.precision,
      offset: (t = e == null ? void 0 : e.offset) !== null && t !== void 0 ? t : !1,
      ...M.errToObj(e == null ? void 0 : e.message)
    });
  }
  regex(e, t) {
    return this._addCheck({
      kind: "regex",
      regex: e,
      ...M.errToObj(t)
    });
  }
  includes(e, t) {
    return this._addCheck({
      kind: "includes",
      value: e,
      position: t == null ? void 0 : t.position,
      ...M.errToObj(t == null ? void 0 : t.message)
    });
  }
  startsWith(e, t) {
    return this._addCheck({
      kind: "startsWith",
      value: e,
      ...M.errToObj(t)
    });
  }
  endsWith(e, t) {
    return this._addCheck({
      kind: "endsWith",
      value: e,
      ...M.errToObj(t)
    });
  }
  min(e, t) {
    return this._addCheck({
      kind: "min",
      value: e,
      ...M.errToObj(t)
    });
  }
  max(e, t) {
    return this._addCheck({
      kind: "max",
      value: e,
      ...M.errToObj(t)
    });
  }
  length(e, t) {
    return this._addCheck({
      kind: "length",
      value: e,
      ...M.errToObj(t)
    });
  }
  /**
   * @deprecated Use z.string().min(1) instead.
   * @see {@link ZodString.min}
   */
  nonempty(e) {
    return this.min(1, M.errToObj(e));
  }
  trim() {
    return new Ve({
      ...this._def,
      checks: [...this._def.checks, { kind: "trim" }]
    });
  }
  toLowerCase() {
    return new Ve({
      ...this._def,
      checks: [...this._def.checks, { kind: "toLowerCase" }]
    });
  }
  toUpperCase() {
    return new Ve({
      ...this._def,
      checks: [...this._def.checks, { kind: "toUpperCase" }]
    });
  }
  get isDatetime() {
    return !!this._def.checks.find((e) => e.kind === "datetime");
  }
  get isEmail() {
    return !!this._def.checks.find((e) => e.kind === "email");
  }
  get isURL() {
    return !!this._def.checks.find((e) => e.kind === "url");
  }
  get isEmoji() {
    return !!this._def.checks.find((e) => e.kind === "emoji");
  }
  get isUUID() {
    return !!this._def.checks.find((e) => e.kind === "uuid");
  }
  get isCUID() {
    return !!this._def.checks.find((e) => e.kind === "cuid");
  }
  get isCUID2() {
    return !!this._def.checks.find((e) => e.kind === "cuid2");
  }
  get isULID() {
    return !!this._def.checks.find((e) => e.kind === "ulid");
  }
  get isIP() {
    return !!this._def.checks.find((e) => e.kind === "ip");
  }
  get minLength() {
    let e = null;
    for (const t of this._def.checks)
      t.kind === "min" && (e === null || t.value > e) && (e = t.value);
    return e;
  }
  get maxLength() {
    let e = null;
    for (const t of this._def.checks)
      t.kind === "max" && (e === null || t.value < e) && (e = t.value);
    return e;
  }
}
Ve.create = (A) => {
  var e;
  return new Ve({
    checks: [],
    typeName: K.ZodString,
    coerce: (e = A == null ? void 0 : A.coerce) !== null && e !== void 0 ? e : !1,
    ...V(A)
  });
};
function fQ(A, e) {
  const t = (A.toString().split(".")[1] || "").length, r = (e.toString().split(".")[1] || "").length, n = t > r ? t : r, a = parseInt(A.toFixed(n).replace(".", "")), i = parseInt(e.toFixed(n).replace(".", ""));
  return a % i / Math.pow(10, n);
}
class ar extends W {
  constructor() {
    super(...arguments), this.min = this.gte, this.max = this.lte, this.step = this.multipleOf;
  }
  _parse(e) {
    if (this._def.coerce && (e.data = Number(e.data)), this._getType(e) !== _.number) {
      const a = this._getOrReturnCtx(e);
      return L(a, {
        code: I.invalid_type,
        expected: _.number,
        received: a.parsedType
      }), N;
    }
    let r;
    const n = new Ae();
    for (const a of this._def.checks)
      a.kind === "int" ? q.isInteger(e.data) || (r = this._getOrReturnCtx(e, r), L(r, {
        code: I.invalid_type,
        expected: "integer",
        received: "float",
        message: a.message
      }), n.dirty()) : a.kind === "min" ? (a.inclusive ? e.data < a.value : e.data <= a.value) && (r = this._getOrReturnCtx(e, r), L(r, {
        code: I.too_small,
        minimum: a.value,
        type: "number",
        inclusive: a.inclusive,
        exact: !1,
        message: a.message
      }), n.dirty()) : a.kind === "max" ? (a.inclusive ? e.data > a.value : e.data >= a.value) && (r = this._getOrReturnCtx(e, r), L(r, {
        code: I.too_big,
        maximum: a.value,
        type: "number",
        inclusive: a.inclusive,
        exact: !1,
        message: a.message
      }), n.dirty()) : a.kind === "multipleOf" ? fQ(e.data, a.value) !== 0 && (r = this._getOrReturnCtx(e, r), L(r, {
        code: I.not_multiple_of,
        multipleOf: a.value,
        message: a.message
      }), n.dirty()) : a.kind === "finite" ? Number.isFinite(e.data) || (r = this._getOrReturnCtx(e, r), L(r, {
        code: I.not_finite,
        message: a.message
      }), n.dirty()) : q.assertNever(a);
    return { status: n.value, value: e.data };
  }
  gte(e, t) {
    return this.setLimit("min", e, !0, M.toString(t));
  }
  gt(e, t) {
    return this.setLimit("min", e, !1, M.toString(t));
  }
  lte(e, t) {
    return this.setLimit("max", e, !0, M.toString(t));
  }
  lt(e, t) {
    return this.setLimit("max", e, !1, M.toString(t));
  }
  setLimit(e, t, r, n) {
    return new ar({
      ...this._def,
      checks: [
        ...this._def.checks,
        {
          kind: e,
          value: t,
          inclusive: r,
          message: M.toString(n)
        }
      ]
    });
  }
  _addCheck(e) {
    return new ar({
      ...this._def,
      checks: [...this._def.checks, e]
    });
  }
  int(e) {
    return this._addCheck({
      kind: "int",
      message: M.toString(e)
    });
  }
  positive(e) {
    return this._addCheck({
      kind: "min",
      value: 0,
      inclusive: !1,
      message: M.toString(e)
    });
  }
  negative(e) {
    return this._addCheck({
      kind: "max",
      value: 0,
      inclusive: !1,
      message: M.toString(e)
    });
  }
  nonpositive(e) {
    return this._addCheck({
      kind: "max",
      value: 0,
      inclusive: !0,
      message: M.toString(e)
    });
  }
  nonnegative(e) {
    return this._addCheck({
      kind: "min",
      value: 0,
      inclusive: !0,
      message: M.toString(e)
    });
  }
  multipleOf(e, t) {
    return this._addCheck({
      kind: "multipleOf",
      value: e,
      message: M.toString(t)
    });
  }
  finite(e) {
    return this._addCheck({
      kind: "finite",
      message: M.toString(e)
    });
  }
  safe(e) {
    return this._addCheck({
      kind: "min",
      inclusive: !0,
      value: Number.MIN_SAFE_INTEGER,
      message: M.toString(e)
    })._addCheck({
      kind: "max",
      inclusive: !0,
      value: Number.MAX_SAFE_INTEGER,
      message: M.toString(e)
    });
  }
  get minValue() {
    let e = null;
    for (const t of this._def.checks)
      t.kind === "min" && (e === null || t.value > e) && (e = t.value);
    return e;
  }
  get maxValue() {
    let e = null;
    for (const t of this._def.checks)
      t.kind === "max" && (e === null || t.value < e) && (e = t.value);
    return e;
  }
  get isInt() {
    return !!this._def.checks.find((e) => e.kind === "int" || e.kind === "multipleOf" && q.isInteger(e.value));
  }
  get isFinite() {
    let e = null, t = null;
    for (const r of this._def.checks) {
      if (r.kind === "finite" || r.kind === "int" || r.kind === "multipleOf")
        return !0;
      r.kind === "min" ? (t === null || r.value > t) && (t = r.value) : r.kind === "max" && (e === null || r.value < e) && (e = r.value);
    }
    return Number.isFinite(t) && Number.isFinite(e);
  }
}
ar.create = (A) => new ar({
  checks: [],
  typeName: K.ZodNumber,
  coerce: (A == null ? void 0 : A.coerce) || !1,
  ...V(A)
});
class ir extends W {
  constructor() {
    super(...arguments), this.min = this.gte, this.max = this.lte;
  }
  _parse(e) {
    if (this._def.coerce && (e.data = BigInt(e.data)), this._getType(e) !== _.bigint) {
      const a = this._getOrReturnCtx(e);
      return L(a, {
        code: I.invalid_type,
        expected: _.bigint,
        received: a.parsedType
      }), N;
    }
    let r;
    const n = new Ae();
    for (const a of this._def.checks)
      a.kind === "min" ? (a.inclusive ? e.data < a.value : e.data <= a.value) && (r = this._getOrReturnCtx(e, r), L(r, {
        code: I.too_small,
        type: "bigint",
        minimum: a.value,
        inclusive: a.inclusive,
        message: a.message
      }), n.dirty()) : a.kind === "max" ? (a.inclusive ? e.data > a.value : e.data >= a.value) && (r = this._getOrReturnCtx(e, r), L(r, {
        code: I.too_big,
        type: "bigint",
        maximum: a.value,
        inclusive: a.inclusive,
        message: a.message
      }), n.dirty()) : a.kind === "multipleOf" ? e.data % a.value !== BigInt(0) && (r = this._getOrReturnCtx(e, r), L(r, {
        code: I.not_multiple_of,
        multipleOf: a.value,
        message: a.message
      }), n.dirty()) : q.assertNever(a);
    return { status: n.value, value: e.data };
  }
  gte(e, t) {
    return this.setLimit("min", e, !0, M.toString(t));
  }
  gt(e, t) {
    return this.setLimit("min", e, !1, M.toString(t));
  }
  lte(e, t) {
    return this.setLimit("max", e, !0, M.toString(t));
  }
  lt(e, t) {
    return this.setLimit("max", e, !1, M.toString(t));
  }
  setLimit(e, t, r, n) {
    return new ir({
      ...this._def,
      checks: [
        ...this._def.checks,
        {
          kind: e,
          value: t,
          inclusive: r,
          message: M.toString(n)
        }
      ]
    });
  }
  _addCheck(e) {
    return new ir({
      ...this._def,
      checks: [...this._def.checks, e]
    });
  }
  positive(e) {
    return this._addCheck({
      kind: "min",
      value: BigInt(0),
      inclusive: !1,
      message: M.toString(e)
    });
  }
  negative(e) {
    return this._addCheck({
      kind: "max",
      value: BigInt(0),
      inclusive: !1,
      message: M.toString(e)
    });
  }
  nonpositive(e) {
    return this._addCheck({
      kind: "max",
      value: BigInt(0),
      inclusive: !0,
      message: M.toString(e)
    });
  }
  nonnegative(e) {
    return this._addCheck({
      kind: "min",
      value: BigInt(0),
      inclusive: !0,
      message: M.toString(e)
    });
  }
  multipleOf(e, t) {
    return this._addCheck({
      kind: "multipleOf",
      value: e,
      message: M.toString(t)
    });
  }
  get minValue() {
    let e = null;
    for (const t of this._def.checks)
      t.kind === "min" && (e === null || t.value > e) && (e = t.value);
    return e;
  }
  get maxValue() {
    let e = null;
    for (const t of this._def.checks)
      t.kind === "max" && (e === null || t.value < e) && (e = t.value);
    return e;
  }
}
ir.create = (A) => {
  var e;
  return new ir({
    checks: [],
    typeName: K.ZodBigInt,
    coerce: (e = A == null ? void 0 : A.coerce) !== null && e !== void 0 ? e : !1,
    ...V(A)
  });
};
class Ga extends W {
  _parse(e) {
    if (this._def.coerce && (e.data = !!e.data), this._getType(e) !== _.boolean) {
      const r = this._getOrReturnCtx(e);
      return L(r, {
        code: I.invalid_type,
        expected: _.boolean,
        received: r.parsedType
      }), N;
    }
    return se(e.data);
  }
}
Ga.create = (A) => new Ga({
  typeName: K.ZodBoolean,
  coerce: (A == null ? void 0 : A.coerce) || !1,
  ...V(A)
});
class Lr extends W {
  _parse(e) {
    if (this._def.coerce && (e.data = new Date(e.data)), this._getType(e) !== _.date) {
      const a = this._getOrReturnCtx(e);
      return L(a, {
        code: I.invalid_type,
        expected: _.date,
        received: a.parsedType
      }), N;
    }
    if (isNaN(e.data.getTime())) {
      const a = this._getOrReturnCtx(e);
      return L(a, {
        code: I.invalid_date
      }), N;
    }
    const r = new Ae();
    let n;
    for (const a of this._def.checks)
      a.kind === "min" ? e.data.getTime() < a.value && (n = this._getOrReturnCtx(e, n), L(n, {
        code: I.too_small,
        message: a.message,
        inclusive: !0,
        exact: !1,
        minimum: a.value,
        type: "date"
      }), r.dirty()) : a.kind === "max" ? e.data.getTime() > a.value && (n = this._getOrReturnCtx(e, n), L(n, {
        code: I.too_big,
        message: a.message,
        inclusive: !0,
        exact: !1,
        maximum: a.value,
        type: "date"
      }), r.dirty()) : q.assertNever(a);
    return {
      status: r.value,
      value: new Date(e.data.getTime())
    };
  }
  _addCheck(e) {
    return new Lr({
      ...this._def,
      checks: [...this._def.checks, e]
    });
  }
  min(e, t) {
    return this._addCheck({
      kind: "min",
      value: e.getTime(),
      message: M.toString(t)
    });
  }
  max(e, t) {
    return this._addCheck({
      kind: "max",
      value: e.getTime(),
      message: M.toString(t)
    });
  }
  get minDate() {
    let e = null;
    for (const t of this._def.checks)
      t.kind === "min" && (e === null || t.value > e) && (e = t.value);
    return e != null ? new Date(e) : null;
  }
  get maxDate() {
    let e = null;
    for (const t of this._def.checks)
      t.kind === "max" && (e === null || t.value < e) && (e = t.value);
    return e != null ? new Date(e) : null;
  }
}
Lr.create = (A) => new Lr({
  checks: [],
  coerce: (A == null ? void 0 : A.coerce) || !1,
  typeName: K.ZodDate,
  ...V(A)
});
class Ws extends W {
  _parse(e) {
    if (this._getType(e) !== _.symbol) {
      const r = this._getOrReturnCtx(e);
      return L(r, {
        code: I.invalid_type,
        expected: _.symbol,
        received: r.parsedType
      }), N;
    }
    return se(e.data);
  }
}
Ws.create = (A) => new Ws({
  typeName: K.ZodSymbol,
  ...V(A)
});
class Wa extends W {
  _parse(e) {
    if (this._getType(e) !== _.undefined) {
      const r = this._getOrReturnCtx(e);
      return L(r, {
        code: I.invalid_type,
        expected: _.undefined,
        received: r.parsedType
      }), N;
    }
    return se(e.data);
  }
}
Wa.create = (A) => new Wa({
  typeName: K.ZodUndefined,
  ...V(A)
});
class Ya extends W {
  _parse(e) {
    if (this._getType(e) !== _.null) {
      const r = this._getOrReturnCtx(e);
      return L(r, {
        code: I.invalid_type,
        expected: _.null,
        received: r.parsedType
      }), N;
    }
    return se(e.data);
  }
}
Ya.create = (A) => new Ya({
  typeName: K.ZodNull,
  ...V(A)
});
class xn extends W {
  constructor() {
    super(...arguments), this._any = !0;
  }
  _parse(e) {
    return se(e.data);
  }
}
xn.create = (A) => new xn({
  typeName: K.ZodAny,
  ...V(A)
});
class Fr extends W {
  constructor() {
    super(...arguments), this._unknown = !0;
  }
  _parse(e) {
    return se(e.data);
  }
}
Fr.create = (A) => new Fr({
  typeName: K.ZodUnknown,
  ...V(A)
});
class It extends W {
  _parse(e) {
    const t = this._getOrReturnCtx(e);
    return L(t, {
      code: I.invalid_type,
      expected: _.never,
      received: t.parsedType
    }), N;
  }
}
It.create = (A) => new It({
  typeName: K.ZodNever,
  ...V(A)
});
class Ys extends W {
  _parse(e) {
    if (this._getType(e) !== _.undefined) {
      const r = this._getOrReturnCtx(e);
      return L(r, {
        code: I.invalid_type,
        expected: _.void,
        received: r.parsedType
      }), N;
    }
    return se(e.data);
  }
}
Ys.create = (A) => new Ys({
  typeName: K.ZodVoid,
  ...V(A)
});
class Xe extends W {
  _parse(e) {
    const { ctx: t, status: r } = this._processInputParams(e), n = this._def;
    if (t.parsedType !== _.array)
      return L(t, {
        code: I.invalid_type,
        expected: _.array,
        received: t.parsedType
      }), N;
    if (n.exactLength !== null) {
      const i = t.data.length > n.exactLength.value, s = t.data.length < n.exactLength.value;
      (i || s) && (L(t, {
        code: i ? I.too_big : I.too_small,
        minimum: s ? n.exactLength.value : void 0,
        maximum: i ? n.exactLength.value : void 0,
        type: "array",
        inclusive: !0,
        exact: !0,
        message: n.exactLength.message
      }), r.dirty());
    }
    if (n.minLength !== null && t.data.length < n.minLength.value && (L(t, {
      code: I.too_small,
      minimum: n.minLength.value,
      type: "array",
      inclusive: !0,
      exact: !1,
      message: n.minLength.message
    }), r.dirty()), n.maxLength !== null && t.data.length > n.maxLength.value && (L(t, {
      code: I.too_big,
      maximum: n.maxLength.value,
      type: "array",
      inclusive: !0,
      exact: !1,
      message: n.maxLength.message
    }), r.dirty()), t.common.async)
      return Promise.all([...t.data].map((i, s) => n.type._parseAsync(new rt(t, i, t.path, s)))).then((i) => Ae.mergeArray(r, i));
    const a = [...t.data].map((i, s) => n.type._parseSync(new rt(t, i, t.path, s)));
    return Ae.mergeArray(r, a);
  }
  get element() {
    return this._def.type;
  }
  min(e, t) {
    return new Xe({
      ...this._def,
      minLength: { value: e, message: M.toString(t) }
    });
  }
  max(e, t) {
    return new Xe({
      ...this._def,
      maxLength: { value: e, message: M.toString(t) }
    });
  }
  length(e, t) {
    return new Xe({
      ...this._def,
      exactLength: { value: e, message: M.toString(t) }
    });
  }
  nonempty(e) {
    return this.min(1, e);
  }
}
Xe.create = (A, e) => new Xe({
  type: A,
  minLength: null,
  maxLength: null,
  exactLength: null,
  typeName: K.ZodArray,
  ...V(e)
});
function jr(A) {
  if (A instanceof wA) {
    const e = {};
    for (const t in A.shape) {
      const r = A.shape[t];
      e[t] = Ct.create(jr(r));
    }
    return new wA({
      ...A._def,
      shape: () => e
    });
  } else
    return A instanceof Xe ? new Xe({
      ...A._def,
      type: jr(A.element)
    }) : A instanceof Ct ? Ct.create(jr(A.unwrap())) : A instanceof Or ? Or.create(jr(A.unwrap())) : A instanceof nt ? nt.create(A.items.map((e) => jr(e))) : A;
}
class wA extends W {
  constructor() {
    super(...arguments), this._cached = null, this.nonstrict = this.passthrough, this.augment = this.extend;
  }
  _getCached() {
    if (this._cached !== null)
      return this._cached;
    const e = this._def.shape(), t = q.objectKeys(e);
    return this._cached = { shape: e, keys: t };
  }
  _parse(e) {
    if (this._getType(e) !== _.object) {
      const u = this._getOrReturnCtx(e);
      return L(u, {
        code: I.invalid_type,
        expected: _.object,
        received: u.parsedType
      }), N;
    }
    const { status: r, ctx: n } = this._processInputParams(e), { shape: a, keys: i } = this._getCached(), s = [];
    if (!(this._def.catchall instanceof It && this._def.unknownKeys === "strip"))
      for (const u in n.data)
        i.includes(u) || s.push(u);
    const o = [];
    for (const u of i) {
      const l = a[u], c = n.data[u];
      o.push({
        key: { status: "valid", value: u },
        value: l._parse(new rt(n, c, n.path, u)),
        alwaysSet: u in n.data
      });
    }
    if (this._def.catchall instanceof It) {
      const u = this._def.unknownKeys;
      if (u === "passthrough")
        for (const l of s)
          o.push({
            key: { status: "valid", value: l },
            value: { status: "valid", value: n.data[l] }
          });
      else if (u === "strict")
        s.length > 0 && (L(n, {
          code: I.unrecognized_keys,
          keys: s
        }), r.dirty());
      else if (u !== "strip")
        throw new Error("Internal ZodObject error: invalid unknownKeys value.");
    } else {
      const u = this._def.catchall;
      for (const l of s) {
        const c = n.data[l];
        o.push({
          key: { status: "valid", value: l },
          value: u._parse(
            new rt(n, c, n.path, l)
            //, ctx.child(key), value, getParsedType(value)
          ),
          alwaysSet: l in n.data
        });
      }
    }
    return n.common.async ? Promise.resolve().then(async () => {
      const u = [];
      for (const l of o) {
        const c = await l.key;
        u.push({
          key: c,
          value: await l.value,
          alwaysSet: l.alwaysSet
        });
      }
      return u;
    }).then((u) => Ae.mergeObjectSync(r, u)) : Ae.mergeObjectSync(r, o);
  }
  get shape() {
    return this._def.shape();
  }
  strict(e) {
    return M.errToObj, new wA({
      ...this._def,
      unknownKeys: "strict",
      ...e !== void 0 ? {
        errorMap: (t, r) => {
          var n, a, i, s;
          const o = (i = (a = (n = this._def).errorMap) === null || a === void 0 ? void 0 : a.call(n, t, r).message) !== null && i !== void 0 ? i : r.defaultError;
          return t.code === "unrecognized_keys" ? {
            message: (s = M.errToObj(e).message) !== null && s !== void 0 ? s : o
          } : {
            message: o
          };
        }
      } : {}
    });
  }
  strip() {
    return new wA({
      ...this._def,
      unknownKeys: "strip"
    });
  }
  passthrough() {
    return new wA({
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
  extend(e) {
    return new wA({
      ...this._def,
      shape: () => ({
        ...this._def.shape(),
        ...e
      })
    });
  }
  /**
   * Prior to zod@1.0.12 there was a bug in the
   * inferred type of merged objects. Please
   * upgrade if you are experiencing issues.
   */
  merge(e) {
    return new wA({
      unknownKeys: e._def.unknownKeys,
      catchall: e._def.catchall,
      shape: () => ({
        ...this._def.shape(),
        ...e._def.shape()
      }),
      typeName: K.ZodObject
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
  setKey(e, t) {
    return this.augment({ [e]: t });
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
  catchall(e) {
    return new wA({
      ...this._def,
      catchall: e
    });
  }
  pick(e) {
    const t = {};
    return q.objectKeys(e).forEach((r) => {
      e[r] && this.shape[r] && (t[r] = this.shape[r]);
    }), new wA({
      ...this._def,
      shape: () => t
    });
  }
  omit(e) {
    const t = {};
    return q.objectKeys(this.shape).forEach((r) => {
      e[r] || (t[r] = this.shape[r]);
    }), new wA({
      ...this._def,
      shape: () => t
    });
  }
  /**
   * @deprecated
   */
  deepPartial() {
    return jr(this);
  }
  partial(e) {
    const t = {};
    return q.objectKeys(this.shape).forEach((r) => {
      const n = this.shape[r];
      e && !e[r] ? t[r] = n : t[r] = n.optional();
    }), new wA({
      ...this._def,
      shape: () => t
    });
  }
  required(e) {
    const t = {};
    return q.objectKeys(this.shape).forEach((r) => {
      if (e && !e[r])
        t[r] = this.shape[r];
      else {
        let a = this.shape[r];
        for (; a instanceof Ct; )
          a = a._def.innerType;
        t[r] = a;
      }
    }), new wA({
      ...this._def,
      shape: () => t
    });
  }
  keyof() {
    return gw(q.objectKeys(this.shape));
  }
}
wA.create = (A, e) => new wA({
  shape: () => A,
  unknownKeys: "strip",
  catchall: It.create(),
  typeName: K.ZodObject,
  ...V(e)
});
wA.strictCreate = (A, e) => new wA({
  shape: () => A,
  unknownKeys: "strict",
  catchall: It.create(),
  typeName: K.ZodObject,
  ...V(e)
});
wA.lazycreate = (A, e) => new wA({
  shape: A,
  unknownKeys: "strip",
  catchall: It.create(),
  typeName: K.ZodObject,
  ...V(e)
});
class Xa extends W {
  _parse(e) {
    const { ctx: t } = this._processInputParams(e), r = this._def.options;
    function n(a) {
      for (const s of a)
        if (s.result.status === "valid")
          return s.result;
      for (const s of a)
        if (s.result.status === "dirty")
          return t.common.issues.push(...s.ctx.common.issues), s.result;
      const i = a.map((s) => new Ye(s.ctx.common.issues));
      return L(t, {
        code: I.invalid_union,
        unionErrors: i
      }), N;
    }
    if (t.common.async)
      return Promise.all(r.map(async (a) => {
        const i = {
          ...t,
          common: {
            ...t.common,
            issues: []
          },
          parent: null
        };
        return {
          result: await a._parseAsync({
            data: t.data,
            path: t.path,
            parent: i
          }),
          ctx: i
        };
      })).then(n);
    {
      let a;
      const i = [];
      for (const o of r) {
        const u = {
          ...t,
          common: {
            ...t.common,
            issues: []
          },
          parent: null
        }, l = o._parseSync({
          data: t.data,
          path: t.path,
          parent: u
        });
        if (l.status === "valid")
          return l;
        l.status === "dirty" && !a && (a = { result: l, ctx: u }), u.common.issues.length && i.push(u.common.issues);
      }
      if (a)
        return t.common.issues.push(...a.ctx.common.issues), a.result;
      const s = i.map((o) => new Ye(o));
      return L(t, {
        code: I.invalid_union,
        unionErrors: s
      }), N;
    }
  }
  get options() {
    return this._def.options;
  }
}
Xa.create = (A, e) => new Xa({
  options: A,
  typeName: K.ZodUnion,
  ...V(e)
});
const ds = (A) => A instanceof za ? ds(A.schema) : A instanceof je ? ds(A.innerType()) : A instanceof Ja ? [A.value] : A instanceof sr ? A.options : A instanceof $a ? Object.keys(A.enum) : A instanceof qa ? ds(A._def.innerType) : A instanceof Wa ? [void 0] : A instanceof Ya ? [null] : null;
class So extends W {
  _parse(e) {
    const { ctx: t } = this._processInputParams(e);
    if (t.parsedType !== _.object)
      return L(t, {
        code: I.invalid_type,
        expected: _.object,
        received: t.parsedType
      }), N;
    const r = this.discriminator, n = t.data[r], a = this.optionsMap.get(n);
    return a ? t.common.async ? a._parseAsync({
      data: t.data,
      path: t.path,
      parent: t
    }) : a._parseSync({
      data: t.data,
      path: t.path,
      parent: t
    }) : (L(t, {
      code: I.invalid_union_discriminator,
      options: Array.from(this.optionsMap.keys()),
      path: [r]
    }), N);
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
  static create(e, t, r) {
    const n = /* @__PURE__ */ new Map();
    for (const a of t) {
      const i = ds(a.shape[e]);
      if (!i)
        throw new Error(`A discriminator value for key \`${e}\` could not be extracted from all schema options`);
      for (const s of i) {
        if (n.has(s))
          throw new Error(`Discriminator property ${String(e)} has duplicate value ${String(s)}`);
        n.set(s, a);
      }
    }
    return new So({
      typeName: K.ZodDiscriminatedUnion,
      discriminator: e,
      options: t,
      optionsMap: n,
      ...V(r)
    });
  }
}
function $l(A, e) {
  const t = bt(A), r = bt(e);
  if (A === e)
    return { valid: !0, data: A };
  if (t === _.object && r === _.object) {
    const n = q.objectKeys(e), a = q.objectKeys(A).filter((s) => n.indexOf(s) !== -1), i = { ...A, ...e };
    for (const s of a) {
      const o = $l(A[s], e[s]);
      if (!o.valid)
        return { valid: !1 };
      i[s] = o.data;
    }
    return { valid: !0, data: i };
  } else if (t === _.array && r === _.array) {
    if (A.length !== e.length)
      return { valid: !1 };
    const n = [];
    for (let a = 0; a < A.length; a++) {
      const i = A[a], s = e[a], o = $l(i, s);
      if (!o.valid)
        return { valid: !1 };
      n.push(o.data);
    }
    return { valid: !0, data: n };
  } else
    return t === _.date && r === _.date && +A == +e ? { valid: !0, data: A } : { valid: !1 };
}
class Za extends W {
  _parse(e) {
    const { status: t, ctx: r } = this._processInputParams(e), n = (a, i) => {
      if (zl(a) || zl(i))
        return N;
      const s = $l(a.value, i.value);
      return s.valid ? ((Jl(a) || Jl(i)) && t.dirty(), { status: t.value, value: s.data }) : (L(r, {
        code: I.invalid_intersection_types
      }), N);
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
    ]).then(([a, i]) => n(a, i)) : n(this._def.left._parseSync({
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
Za.create = (A, e, t) => new Za({
  left: A,
  right: e,
  typeName: K.ZodIntersection,
  ...V(t)
});
class nt extends W {
  _parse(e) {
    const { status: t, ctx: r } = this._processInputParams(e);
    if (r.parsedType !== _.array)
      return L(r, {
        code: I.invalid_type,
        expected: _.array,
        received: r.parsedType
      }), N;
    if (r.data.length < this._def.items.length)
      return L(r, {
        code: I.too_small,
        minimum: this._def.items.length,
        inclusive: !0,
        exact: !1,
        type: "array"
      }), N;
    !this._def.rest && r.data.length > this._def.items.length && (L(r, {
      code: I.too_big,
      maximum: this._def.items.length,
      inclusive: !0,
      exact: !1,
      type: "array"
    }), t.dirty());
    const a = [...r.data].map((i, s) => {
      const o = this._def.items[s] || this._def.rest;
      return o ? o._parse(new rt(r, i, r.path, s)) : null;
    }).filter((i) => !!i);
    return r.common.async ? Promise.all(a).then((i) => Ae.mergeArray(t, i)) : Ae.mergeArray(t, a);
  }
  get items() {
    return this._def.items;
  }
  rest(e) {
    return new nt({
      ...this._def,
      rest: e
    });
  }
}
nt.create = (A, e) => {
  if (!Array.isArray(A))
    throw new Error("You must pass an array of schemas to z.tuple([ ... ])");
  return new nt({
    items: A,
    typeName: K.ZodTuple,
    rest: null,
    ...V(e)
  });
};
class ja extends W {
  get keySchema() {
    return this._def.keyType;
  }
  get valueSchema() {
    return this._def.valueType;
  }
  _parse(e) {
    const { status: t, ctx: r } = this._processInputParams(e);
    if (r.parsedType !== _.object)
      return L(r, {
        code: I.invalid_type,
        expected: _.object,
        received: r.parsedType
      }), N;
    const n = [], a = this._def.keyType, i = this._def.valueType;
    for (const s in r.data)
      n.push({
        key: a._parse(new rt(r, s, r.path, s)),
        value: i._parse(new rt(r, r.data[s], r.path, s))
      });
    return r.common.async ? Ae.mergeObjectAsync(t, n) : Ae.mergeObjectSync(t, n);
  }
  get element() {
    return this._def.valueType;
  }
  static create(e, t, r) {
    return t instanceof W ? new ja({
      keyType: e,
      valueType: t,
      typeName: K.ZodRecord,
      ...V(r)
    }) : new ja({
      keyType: Ve.create(),
      valueType: e,
      typeName: K.ZodRecord,
      ...V(t)
    });
  }
}
class Xs extends W {
  get keySchema() {
    return this._def.keyType;
  }
  get valueSchema() {
    return this._def.valueType;
  }
  _parse(e) {
    const { status: t, ctx: r } = this._processInputParams(e);
    if (r.parsedType !== _.map)
      return L(r, {
        code: I.invalid_type,
        expected: _.map,
        received: r.parsedType
      }), N;
    const n = this._def.keyType, a = this._def.valueType, i = [...r.data.entries()].map(([s, o], u) => ({
      key: n._parse(new rt(r, s, r.path, [u, "key"])),
      value: a._parse(new rt(r, o, r.path, [u, "value"]))
    }));
    if (r.common.async) {
      const s = /* @__PURE__ */ new Map();
      return Promise.resolve().then(async () => {
        for (const o of i) {
          const u = await o.key, l = await o.value;
          if (u.status === "aborted" || l.status === "aborted")
            return N;
          (u.status === "dirty" || l.status === "dirty") && t.dirty(), s.set(u.value, l.value);
        }
        return { status: t.value, value: s };
      });
    } else {
      const s = /* @__PURE__ */ new Map();
      for (const o of i) {
        const u = o.key, l = o.value;
        if (u.status === "aborted" || l.status === "aborted")
          return N;
        (u.status === "dirty" || l.status === "dirty") && t.dirty(), s.set(u.value, l.value);
      }
      return { status: t.value, value: s };
    }
  }
}
Xs.create = (A, e, t) => new Xs({
  valueType: e,
  keyType: A,
  typeName: K.ZodMap,
  ...V(t)
});
class Dr extends W {
  _parse(e) {
    const { status: t, ctx: r } = this._processInputParams(e);
    if (r.parsedType !== _.set)
      return L(r, {
        code: I.invalid_type,
        expected: _.set,
        received: r.parsedType
      }), N;
    const n = this._def;
    n.minSize !== null && r.data.size < n.minSize.value && (L(r, {
      code: I.too_small,
      minimum: n.minSize.value,
      type: "set",
      inclusive: !0,
      exact: !1,
      message: n.minSize.message
    }), t.dirty()), n.maxSize !== null && r.data.size > n.maxSize.value && (L(r, {
      code: I.too_big,
      maximum: n.maxSize.value,
      type: "set",
      inclusive: !0,
      exact: !1,
      message: n.maxSize.message
    }), t.dirty());
    const a = this._def.valueType;
    function i(o) {
      const u = /* @__PURE__ */ new Set();
      for (const l of o) {
        if (l.status === "aborted")
          return N;
        l.status === "dirty" && t.dirty(), u.add(l.value);
      }
      return { status: t.value, value: u };
    }
    const s = [...r.data.values()].map((o, u) => a._parse(new rt(r, o, r.path, u)));
    return r.common.async ? Promise.all(s).then((o) => i(o)) : i(s);
  }
  min(e, t) {
    return new Dr({
      ...this._def,
      minSize: { value: e, message: M.toString(t) }
    });
  }
  max(e, t) {
    return new Dr({
      ...this._def,
      maxSize: { value: e, message: M.toString(t) }
    });
  }
  size(e, t) {
    return this.min(e, t).max(e, t);
  }
  nonempty(e) {
    return this.min(1, e);
  }
}
Dr.create = (A, e) => new Dr({
  valueType: A,
  minSize: null,
  maxSize: null,
  typeName: K.ZodSet,
  ...V(e)
});
class vn extends W {
  constructor() {
    super(...arguments), this.validate = this.implement;
  }
  _parse(e) {
    const { ctx: t } = this._processInputParams(e);
    if (t.parsedType !== _.function)
      return L(t, {
        code: I.invalid_type,
        expected: _.function,
        received: t.parsedType
      }), N;
    function r(s, o) {
      return Vs({
        data: s,
        path: t.path,
        errorMaps: [
          t.common.contextualErrorMap,
          t.schemaErrorMap,
          Ps(),
          Pa
        ].filter((u) => !!u),
        issueData: {
          code: I.invalid_arguments,
          argumentsError: o
        }
      });
    }
    function n(s, o) {
      return Vs({
        data: s,
        path: t.path,
        errorMaps: [
          t.common.contextualErrorMap,
          t.schemaErrorMap,
          Ps(),
          Pa
        ].filter((u) => !!u),
        issueData: {
          code: I.invalid_return_type,
          returnTypeError: o
        }
      });
    }
    const a = { errorMap: t.common.contextualErrorMap }, i = t.data;
    if (this._def.returns instanceof Sn) {
      const s = this;
      return se(async function(...o) {
        const u = new Ye([]), l = await s._def.args.parseAsync(o, a).catch((w) => {
          throw u.addIssue(r(o, w)), u;
        }), c = await Reflect.apply(i, this, l);
        return await s._def.returns._def.type.parseAsync(c, a).catch((w) => {
          throw u.addIssue(n(c, w)), u;
        });
      });
    } else {
      const s = this;
      return se(function(...o) {
        const u = s._def.args.safeParse(o, a);
        if (!u.success)
          throw new Ye([r(o, u.error)]);
        const l = Reflect.apply(i, this, u.data), c = s._def.returns.safeParse(l, a);
        if (!c.success)
          throw new Ye([n(l, c.error)]);
        return c.data;
      });
    }
  }
  parameters() {
    return this._def.args;
  }
  returnType() {
    return this._def.returns;
  }
  args(...e) {
    return new vn({
      ...this._def,
      args: nt.create(e).rest(Fr.create())
    });
  }
  returns(e) {
    return new vn({
      ...this._def,
      returns: e
    });
  }
  implement(e) {
    return this.parse(e);
  }
  strictImplement(e) {
    return this.parse(e);
  }
  static create(e, t, r) {
    return new vn({
      args: e || nt.create([]).rest(Fr.create()),
      returns: t || Fr.create(),
      typeName: K.ZodFunction,
      ...V(r)
    });
  }
}
class za extends W {
  get schema() {
    return this._def.getter();
  }
  _parse(e) {
    const { ctx: t } = this._processInputParams(e);
    return this._def.getter()._parse({ data: t.data, path: t.path, parent: t });
  }
}
za.create = (A, e) => new za({
  getter: A,
  typeName: K.ZodLazy,
  ...V(e)
});
class Ja extends W {
  _parse(e) {
    if (e.data !== this._def.value) {
      const t = this._getOrReturnCtx(e);
      return L(t, {
        received: t.data,
        code: I.invalid_literal,
        expected: this._def.value
      }), N;
    }
    return { status: "valid", value: e.data };
  }
  get value() {
    return this._def.value;
  }
}
Ja.create = (A, e) => new Ja({
  value: A,
  typeName: K.ZodLiteral,
  ...V(e)
});
function gw(A, e) {
  return new sr({
    values: A,
    typeName: K.ZodEnum,
    ...V(e)
  });
}
class sr extends W {
  _parse(e) {
    if (typeof e.data != "string") {
      const t = this._getOrReturnCtx(e), r = this._def.values;
      return L(t, {
        expected: q.joinValues(r),
        received: t.parsedType,
        code: I.invalid_type
      }), N;
    }
    if (this._def.values.indexOf(e.data) === -1) {
      const t = this._getOrReturnCtx(e), r = this._def.values;
      return L(t, {
        received: t.data,
        code: I.invalid_enum_value,
        options: r
      }), N;
    }
    return se(e.data);
  }
  get options() {
    return this._def.values;
  }
  get enum() {
    const e = {};
    for (const t of this._def.values)
      e[t] = t;
    return e;
  }
  get Values() {
    const e = {};
    for (const t of this._def.values)
      e[t] = t;
    return e;
  }
  get Enum() {
    const e = {};
    for (const t of this._def.values)
      e[t] = t;
    return e;
  }
  extract(e) {
    return sr.create(e);
  }
  exclude(e) {
    return sr.create(this.options.filter((t) => !e.includes(t)));
  }
}
sr.create = gw;
class $a extends W {
  _parse(e) {
    const t = q.getValidEnumValues(this._def.values), r = this._getOrReturnCtx(e);
    if (r.parsedType !== _.string && r.parsedType !== _.number) {
      const n = q.objectValues(t);
      return L(r, {
        expected: q.joinValues(n),
        received: r.parsedType,
        code: I.invalid_type
      }), N;
    }
    if (t.indexOf(e.data) === -1) {
      const n = q.objectValues(t);
      return L(r, {
        received: r.data,
        code: I.invalid_enum_value,
        options: n
      }), N;
    }
    return se(e.data);
  }
  get enum() {
    return this._def.values;
  }
}
$a.create = (A, e) => new $a({
  values: A,
  typeName: K.ZodNativeEnum,
  ...V(e)
});
class Sn extends W {
  unwrap() {
    return this._def.type;
  }
  _parse(e) {
    const { ctx: t } = this._processInputParams(e);
    if (t.parsedType !== _.promise && t.common.async === !1)
      return L(t, {
        code: I.invalid_type,
        expected: _.promise,
        received: t.parsedType
      }), N;
    const r = t.parsedType === _.promise ? t.data : Promise.resolve(t.data);
    return se(r.then((n) => this._def.type.parseAsync(n, {
      path: t.path,
      errorMap: t.common.contextualErrorMap
    })));
  }
}
Sn.create = (A, e) => new Sn({
  type: A,
  typeName: K.ZodPromise,
  ...V(e)
});
class je extends W {
  innerType() {
    return this._def.schema;
  }
  sourceType() {
    return this._def.schema._def.typeName === K.ZodEffects ? this._def.schema.sourceType() : this._def.schema;
  }
  _parse(e) {
    const { status: t, ctx: r } = this._processInputParams(e), n = this._def.effect || null, a = {
      addIssue: (i) => {
        L(r, i), i.fatal ? t.abort() : t.dirty();
      },
      get path() {
        return r.path;
      }
    };
    if (a.addIssue = a.addIssue.bind(a), n.type === "preprocess") {
      const i = n.transform(r.data, a);
      return r.common.issues.length ? {
        status: "dirty",
        value: r.data
      } : r.common.async ? Promise.resolve(i).then((s) => this._def.schema._parseAsync({
        data: s,
        path: r.path,
        parent: r
      })) : this._def.schema._parseSync({
        data: i,
        path: r.path,
        parent: r
      });
    }
    if (n.type === "refinement") {
      const i = (s) => {
        const o = n.refinement(s, a);
        if (r.common.async)
          return Promise.resolve(o);
        if (o instanceof Promise)
          throw new Error("Async refinement encountered during synchronous parse operation. Use .parseAsync instead.");
        return s;
      };
      if (r.common.async === !1) {
        const s = this._def.schema._parseSync({
          data: r.data,
          path: r.path,
          parent: r
        });
        return s.status === "aborted" ? N : (s.status === "dirty" && t.dirty(), i(s.value), { status: t.value, value: s.value });
      } else
        return this._def.schema._parseAsync({ data: r.data, path: r.path, parent: r }).then((s) => s.status === "aborted" ? N : (s.status === "dirty" && t.dirty(), i(s.value).then(() => ({ status: t.value, value: s.value }))));
    }
    if (n.type === "transform")
      if (r.common.async === !1) {
        const i = this._def.schema._parseSync({
          data: r.data,
          path: r.path,
          parent: r
        });
        if (!Va(i))
          return i;
        const s = n.transform(i.value, a);
        if (s instanceof Promise)
          throw new Error("Asynchronous transform encountered during synchronous parse operation. Use .parseAsync instead.");
        return { status: t.value, value: s };
      } else
        return this._def.schema._parseAsync({ data: r.data, path: r.path, parent: r }).then((i) => Va(i) ? Promise.resolve(n.transform(i.value, a)).then((s) => ({ status: t.value, value: s })) : i);
    q.assertNever(n);
  }
}
je.create = (A, e, t) => new je({
  schema: A,
  typeName: K.ZodEffects,
  effect: e,
  ...V(t)
});
je.createWithPreprocess = (A, e, t) => new je({
  schema: e,
  effect: { type: "preprocess", transform: A },
  typeName: K.ZodEffects,
  ...V(t)
});
class Ct extends W {
  _parse(e) {
    return this._getType(e) === _.undefined ? se(void 0) : this._def.innerType._parse(e);
  }
  unwrap() {
    return this._def.innerType;
  }
}
Ct.create = (A, e) => new Ct({
  innerType: A,
  typeName: K.ZodOptional,
  ...V(e)
});
class Or extends W {
  _parse(e) {
    return this._getType(e) === _.null ? se(null) : this._def.innerType._parse(e);
  }
  unwrap() {
    return this._def.innerType;
  }
}
Or.create = (A, e) => new Or({
  innerType: A,
  typeName: K.ZodNullable,
  ...V(e)
});
class qa extends W {
  _parse(e) {
    const { ctx: t } = this._processInputParams(e);
    let r = t.data;
    return t.parsedType === _.undefined && (r = this._def.defaultValue()), this._def.innerType._parse({
      data: r,
      path: t.path,
      parent: t
    });
  }
  removeDefault() {
    return this._def.innerType;
  }
}
qa.create = (A, e) => new qa({
  innerType: A,
  typeName: K.ZodDefault,
  defaultValue: typeof e.default == "function" ? e.default : () => e.default,
  ...V(e)
});
class Zs extends W {
  _parse(e) {
    const { ctx: t } = this._processInputParams(e), r = {
      ...t,
      common: {
        ...t.common,
        issues: []
      }
    }, n = this._def.innerType._parse({
      data: r.data,
      path: r.path,
      parent: {
        ...r
      }
    });
    return Gs(n) ? n.then((a) => ({
      status: "valid",
      value: a.status === "valid" ? a.value : this._def.catchValue({
        get error() {
          return new Ye(r.common.issues);
        },
        input: r.data
      })
    })) : {
      status: "valid",
      value: n.status === "valid" ? n.value : this._def.catchValue({
        get error() {
          return new Ye(r.common.issues);
        },
        input: r.data
      })
    };
  }
  removeCatch() {
    return this._def.innerType;
  }
}
Zs.create = (A, e) => new Zs({
  innerType: A,
  typeName: K.ZodCatch,
  catchValue: typeof e.catch == "function" ? e.catch : () => e.catch,
  ...V(e)
});
class js extends W {
  _parse(e) {
    if (this._getType(e) !== _.nan) {
      const r = this._getOrReturnCtx(e);
      return L(r, {
        code: I.invalid_type,
        expected: _.nan,
        received: r.parsedType
      }), N;
    }
    return { status: "valid", value: e.data };
  }
}
js.create = (A) => new js({
  typeName: K.ZodNaN,
  ...V(A)
});
const dQ = Symbol("zod_brand");
class hw extends W {
  _parse(e) {
    const { ctx: t } = this._processInputParams(e), r = t.data;
    return this._def.type._parse({
      data: r,
      path: t.path,
      parent: t
    });
  }
  unwrap() {
    return this._def.type;
  }
}
class ui extends W {
  _parse(e) {
    const { status: t, ctx: r } = this._processInputParams(e);
    if (r.common.async)
      return (async () => {
        const a = await this._def.in._parseAsync({
          data: r.data,
          path: r.path,
          parent: r
        });
        return a.status === "aborted" ? N : a.status === "dirty" ? (t.dirty(), Bw(a.value)) : this._def.out._parseAsync({
          data: a.value,
          path: r.path,
          parent: r
        });
      })();
    {
      const n = this._def.in._parseSync({
        data: r.data,
        path: r.path,
        parent: r
      });
      return n.status === "aborted" ? N : n.status === "dirty" ? (t.dirty(), {
        status: "dirty",
        value: n.value
      }) : this._def.out._parseSync({
        data: n.value,
        path: r.path,
        parent: r
      });
    }
  }
  static create(e, t) {
    return new ui({
      in: e,
      out: t,
      typeName: K.ZodPipeline
    });
  }
}
class zs extends W {
  _parse(e) {
    const t = this._def.innerType._parse(e);
    return Va(t) && (t.value = Object.freeze(t.value)), t;
  }
}
zs.create = (A, e) => new zs({
  innerType: A,
  typeName: K.ZodReadonly,
  ...V(e)
});
const pw = (A, e = {}, t) => A ? xn.create().superRefine((r, n) => {
  var a, i;
  if (!A(r)) {
    const s = typeof e == "function" ? e(r) : typeof e == "string" ? { message: e } : e, o = (i = (a = s.fatal) !== null && a !== void 0 ? a : t) !== null && i !== void 0 ? i : !0, u = typeof s == "string" ? { message: s } : s;
    n.addIssue({ code: "custom", ...u, fatal: o });
  }
}) : xn.create(), BQ = {
  object: wA.lazycreate
};
var K;
(function(A) {
  A.ZodString = "ZodString", A.ZodNumber = "ZodNumber", A.ZodNaN = "ZodNaN", A.ZodBigInt = "ZodBigInt", A.ZodBoolean = "ZodBoolean", A.ZodDate = "ZodDate", A.ZodSymbol = "ZodSymbol", A.ZodUndefined = "ZodUndefined", A.ZodNull = "ZodNull", A.ZodAny = "ZodAny", A.ZodUnknown = "ZodUnknown", A.ZodNever = "ZodNever", A.ZodVoid = "ZodVoid", A.ZodArray = "ZodArray", A.ZodObject = "ZodObject", A.ZodUnion = "ZodUnion", A.ZodDiscriminatedUnion = "ZodDiscriminatedUnion", A.ZodIntersection = "ZodIntersection", A.ZodTuple = "ZodTuple", A.ZodRecord = "ZodRecord", A.ZodMap = "ZodMap", A.ZodSet = "ZodSet", A.ZodFunction = "ZodFunction", A.ZodLazy = "ZodLazy", A.ZodLiteral = "ZodLiteral", A.ZodEnum = "ZodEnum", A.ZodEffects = "ZodEffects", A.ZodNativeEnum = "ZodNativeEnum", A.ZodOptional = "ZodOptional", A.ZodNullable = "ZodNullable", A.ZodDefault = "ZodDefault", A.ZodCatch = "ZodCatch", A.ZodPromise = "ZodPromise", A.ZodBranded = "ZodBranded", A.ZodPipeline = "ZodPipeline", A.ZodReadonly = "ZodReadonly";
})(K || (K = {}));
const gQ = (A, e = {
  message: `Input not instance of ${A.name}`
}) => pw((t) => t instanceof A, e), ww = Ve.create, vw = ar.create, hQ = js.create, pQ = ir.create, mw = Ga.create, wQ = Lr.create, vQ = Ws.create, mQ = Wa.create, CQ = Ya.create, QQ = xn.create, UQ = Fr.create, yQ = It.create, FQ = Ys.create, EQ = Xe.create, IQ = wA.create, HQ = wA.strictCreate, xQ = Xa.create, SQ = So.create, TQ = Za.create, _Q = nt.create, LQ = ja.create, DQ = Xs.create, OQ = Dr.create, kQ = vn.create, MQ = za.create, KQ = Ja.create, bQ = sr.create, NQ = $a.create, RQ = Sn.create, HB = je.create, PQ = Ct.create, VQ = Or.create, GQ = je.createWithPreprocess, WQ = ui.create, YQ = () => ww().optional(), XQ = () => vw().optional(), ZQ = () => mw().optional(), jQ = {
  string: (A) => Ve.create({ ...A, coerce: !0 }),
  number: (A) => ar.create({ ...A, coerce: !0 }),
  boolean: (A) => Ga.create({
    ...A,
    coerce: !0
  }),
  bigint: (A) => ir.create({ ...A, coerce: !0 }),
  date: (A) => Lr.create({ ...A, coerce: !0 })
}, zQ = N;
var vA = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  defaultErrorMap: Pa,
  setErrorMap: AQ,
  getErrorMap: Ps,
  makeIssue: Vs,
  EMPTY_PATH: eQ,
  addIssueToContext: L,
  ParseStatus: Ae,
  INVALID: N,
  DIRTY: Bw,
  OK: se,
  isAborted: zl,
  isDirty: Jl,
  isValid: Va,
  isAsync: Gs,
  get util() {
    return q;
  },
  get objectUtil() {
    return jl;
  },
  ZodParsedType: _,
  getParsedType: bt,
  ZodType: W,
  ZodString: Ve,
  ZodNumber: ar,
  ZodBigInt: ir,
  ZodBoolean: Ga,
  ZodDate: Lr,
  ZodSymbol: Ws,
  ZodUndefined: Wa,
  ZodNull: Ya,
  ZodAny: xn,
  ZodUnknown: Fr,
  ZodNever: It,
  ZodVoid: Ys,
  ZodArray: Xe,
  ZodObject: wA,
  ZodUnion: Xa,
  ZodDiscriminatedUnion: So,
  ZodIntersection: Za,
  ZodTuple: nt,
  ZodRecord: ja,
  ZodMap: Xs,
  ZodSet: Dr,
  ZodFunction: vn,
  ZodLazy: za,
  ZodLiteral: Ja,
  ZodEnum: sr,
  ZodNativeEnum: $a,
  ZodPromise: Sn,
  ZodEffects: je,
  ZodTransformer: je,
  ZodOptional: Ct,
  ZodNullable: Or,
  ZodDefault: qa,
  ZodCatch: Zs,
  ZodNaN: js,
  BRAND: dQ,
  ZodBranded: hw,
  ZodPipeline: ui,
  ZodReadonly: zs,
  custom: pw,
  Schema: W,
  ZodSchema: W,
  late: BQ,
  get ZodFirstPartyTypeKind() {
    return K;
  },
  coerce: jQ,
  any: QQ,
  array: EQ,
  bigint: pQ,
  boolean: mw,
  date: wQ,
  discriminatedUnion: SQ,
  effect: HB,
  enum: bQ,
  function: kQ,
  instanceof: gQ,
  intersection: TQ,
  lazy: MQ,
  literal: KQ,
  map: DQ,
  nan: hQ,
  nativeEnum: NQ,
  never: yQ,
  null: CQ,
  nullable: VQ,
  number: vw,
  object: IQ,
  oboolean: ZQ,
  onumber: XQ,
  optional: PQ,
  ostring: YQ,
  pipeline: WQ,
  preprocess: GQ,
  promise: RQ,
  record: LQ,
  set: OQ,
  strictObject: HQ,
  string: ww,
  symbol: vQ,
  transformer: HB,
  tuple: _Q,
  undefined: mQ,
  union: xQ,
  unknown: UQ,
  void: FQ,
  NEVER: zQ,
  ZodIssueCode: I,
  quotelessJson: qC,
  ZodError: Ye
});
const Cw = vA.object({
  MemberCount: vA.number(),
  OnTrackCount: vA.number(),
  OnTrackOnDateCount: vA.number()
}), Qw = vA.object({
  MemberCount: vA.number(),
  ContributionAmount: vA.number()
}), Uw = vA.object({
  ContributionAmount: vA.number()
}), JQ = vA.object({
  Name: vA.string(),
  MemberCount: vA.number(),
  BUKStatus: Cw,
  SamvirkStatus: Qw,
  AHStatus: Uw
}), $Q = vA.object({
  Title: vA.string(),
  DateFrom: vA.string(),
  DateTo: vA.string(),
  MyShareTargetOnDate: vA.number(),
  MyShareNextThreshold: vA.number(),
  SamvirkGoalPerMonth: vA.number(),
  SamvirkGoalPerSprint: vA.number(),
  Teams: vA.array(JQ),
  ReportDate: vA.string()
}), qQ = vA.array($Q);
Cw.or(Qw).or(Uw);
function Js(A) {
  "@babel/helpers - typeof";
  return Js = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(e) {
    return typeof e;
  } : function(e) {
    return e && typeof Symbol == "function" && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e;
  }, Js(A);
}
function kr(A) {
  if (A === null || A === !0 || A === !1)
    return NaN;
  var e = Number(A);
  return isNaN(e) ? e : e < 0 ? Math.ceil(e) : Math.floor(e);
}
function le(A, e) {
  if (e.length < A)
    throw new TypeError(A + " argument" + (A > 1 ? "s" : "") + " required, but only " + e.length + " present");
}
function at(A) {
  le(1, arguments);
  var e = Object.prototype.toString.call(A);
  return A instanceof Date || Js(A) === "object" && e === "[object Date]" ? new Date(A.getTime()) : typeof A == "number" || e === "[object Number]" ? new Date(A) : ((typeof A == "string" || e === "[object String]") && typeof console < "u" && (console.warn("Starting with v2.0.0-beta.1 date-fns doesn't accept strings as date arguments. Please use `parseISO` to parse strings. See: https://github.com/date-fns/date-fns/blob/master/docs/upgradeGuide.md#string-arguments"), console.warn(new Error().stack)), /* @__PURE__ */ new Date(NaN));
}
function AU(A, e) {
  le(2, arguments);
  var t = at(A).getTime(), r = kr(e);
  return new Date(t + r);
}
var eU = {};
function To() {
  return eU;
}
function tU(A) {
  var e = new Date(Date.UTC(A.getFullYear(), A.getMonth(), A.getDate(), A.getHours(), A.getMinutes(), A.getSeconds(), A.getMilliseconds()));
  return e.setUTCFullYear(A.getFullYear()), A.getTime() - e.getTime();
}
function rU(A) {
  return le(1, arguments), A instanceof Date || Js(A) === "object" && Object.prototype.toString.call(A) === "[object Date]";
}
function nU(A) {
  if (le(1, arguments), !rU(A) && typeof A != "number")
    return !1;
  var e = at(A);
  return !isNaN(Number(e));
}
function aU(A, e) {
  le(2, arguments);
  var t = kr(e);
  return AU(A, -t);
}
var iU = 864e5;
function sU(A) {
  le(1, arguments);
  var e = at(A), t = e.getTime();
  e.setUTCMonth(0, 1), e.setUTCHours(0, 0, 0, 0);
  var r = e.getTime(), n = t - r;
  return Math.floor(n / iU) + 1;
}
function $s(A) {
  le(1, arguments);
  var e = 1, t = at(A), r = t.getUTCDay(), n = (r < e ? 7 : 0) + r - e;
  return t.setUTCDate(t.getUTCDate() - n), t.setUTCHours(0, 0, 0, 0), t;
}
function yw(A) {
  le(1, arguments);
  var e = at(A), t = e.getUTCFullYear(), r = /* @__PURE__ */ new Date(0);
  r.setUTCFullYear(t + 1, 0, 4), r.setUTCHours(0, 0, 0, 0);
  var n = $s(r), a = /* @__PURE__ */ new Date(0);
  a.setUTCFullYear(t, 0, 4), a.setUTCHours(0, 0, 0, 0);
  var i = $s(a);
  return e.getTime() >= n.getTime() ? t + 1 : e.getTime() >= i.getTime() ? t : t - 1;
}
function oU(A) {
  le(1, arguments);
  var e = yw(A), t = /* @__PURE__ */ new Date(0);
  t.setUTCFullYear(e, 0, 4), t.setUTCHours(0, 0, 0, 0);
  var r = $s(t);
  return r;
}
var uU = 6048e5;
function lU(A) {
  le(1, arguments);
  var e = at(A), t = $s(e).getTime() - oU(e).getTime();
  return Math.round(t / uU) + 1;
}
function qs(A, e) {
  var t, r, n, a, i, s, o, u;
  le(1, arguments);
  var l = To(), c = kr((t = (r = (n = (a = e == null ? void 0 : e.weekStartsOn) !== null && a !== void 0 ? a : e == null || (i = e.locale) === null || i === void 0 || (s = i.options) === null || s === void 0 ? void 0 : s.weekStartsOn) !== null && n !== void 0 ? n : l.weekStartsOn) !== null && r !== void 0 ? r : (o = l.locale) === null || o === void 0 || (u = o.options) === null || u === void 0 ? void 0 : u.weekStartsOn) !== null && t !== void 0 ? t : 0);
  if (!(c >= 0 && c <= 6))
    throw new RangeError("weekStartsOn must be between 0 and 6 inclusively");
  var g = at(A), w = g.getUTCDay(), p = (w < c ? 7 : 0) + w - c;
  return g.setUTCDate(g.getUTCDate() - p), g.setUTCHours(0, 0, 0, 0), g;
}
function Fw(A, e) {
  var t, r, n, a, i, s, o, u;
  le(1, arguments);
  var l = at(A), c = l.getUTCFullYear(), g = To(), w = kr((t = (r = (n = (a = e == null ? void 0 : e.firstWeekContainsDate) !== null && a !== void 0 ? a : e == null || (i = e.locale) === null || i === void 0 || (s = i.options) === null || s === void 0 ? void 0 : s.firstWeekContainsDate) !== null && n !== void 0 ? n : g.firstWeekContainsDate) !== null && r !== void 0 ? r : (o = g.locale) === null || o === void 0 || (u = o.options) === null || u === void 0 ? void 0 : u.firstWeekContainsDate) !== null && t !== void 0 ? t : 1);
  if (!(w >= 1 && w <= 7))
    throw new RangeError("firstWeekContainsDate must be between 1 and 7 inclusively");
  var p = /* @__PURE__ */ new Date(0);
  p.setUTCFullYear(c + 1, 0, w), p.setUTCHours(0, 0, 0, 0);
  var C = qs(p, e), Q = /* @__PURE__ */ new Date(0);
  Q.setUTCFullYear(c, 0, w), Q.setUTCHours(0, 0, 0, 0);
  var d = qs(Q, e);
  return l.getTime() >= C.getTime() ? c + 1 : l.getTime() >= d.getTime() ? c : c - 1;
}
function cU(A, e) {
  var t, r, n, a, i, s, o, u;
  le(1, arguments);
  var l = To(), c = kr((t = (r = (n = (a = e == null ? void 0 : e.firstWeekContainsDate) !== null && a !== void 0 ? a : e == null || (i = e.locale) === null || i === void 0 || (s = i.options) === null || s === void 0 ? void 0 : s.firstWeekContainsDate) !== null && n !== void 0 ? n : l.firstWeekContainsDate) !== null && r !== void 0 ? r : (o = l.locale) === null || o === void 0 || (u = o.options) === null || u === void 0 ? void 0 : u.firstWeekContainsDate) !== null && t !== void 0 ? t : 1), g = Fw(A, e), w = /* @__PURE__ */ new Date(0);
  w.setUTCFullYear(g, 0, c), w.setUTCHours(0, 0, 0, 0);
  var p = qs(w, e);
  return p;
}
var fU = 6048e5;
function dU(A, e) {
  le(1, arguments);
  var t = at(A), r = qs(t, e).getTime() - cU(t, e).getTime();
  return Math.round(r / fU) + 1;
}
function nA(A, e) {
  for (var t = A < 0 ? "-" : "", r = Math.abs(A).toString(); r.length < e; )
    r = "0" + r;
  return t + r;
}
var BU = {
  // Year
  y: function(e, t) {
    var r = e.getUTCFullYear(), n = r > 0 ? r : 1 - r;
    return nA(t === "yy" ? n % 100 : n, t.length);
  },
  // Month
  M: function(e, t) {
    var r = e.getUTCMonth();
    return t === "M" ? String(r + 1) : nA(r + 1, 2);
  },
  // Day of the month
  d: function(e, t) {
    return nA(e.getUTCDate(), t.length);
  },
  // AM or PM
  a: function(e, t) {
    var r = e.getUTCHours() / 12 >= 1 ? "pm" : "am";
    switch (t) {
      case "a":
      case "aa":
        return r.toUpperCase();
      case "aaa":
        return r;
      case "aaaaa":
        return r[0];
      case "aaaa":
      default:
        return r === "am" ? "a.m." : "p.m.";
    }
  },
  // Hour [1-12]
  h: function(e, t) {
    return nA(e.getUTCHours() % 12 || 12, t.length);
  },
  // Hour [0-23]
  H: function(e, t) {
    return nA(e.getUTCHours(), t.length);
  },
  // Minute
  m: function(e, t) {
    return nA(e.getUTCMinutes(), t.length);
  },
  // Second
  s: function(e, t) {
    return nA(e.getUTCSeconds(), t.length);
  },
  // Fraction of second
  S: function(e, t) {
    var r = t.length, n = e.getUTCMilliseconds(), a = Math.floor(n * Math.pow(10, r - 3));
    return nA(a, t.length);
  }
};
const Tt = BU;
var Pr = {
  am: "am",
  pm: "pm",
  midnight: "midnight",
  noon: "noon",
  morning: "morning",
  afternoon: "afternoon",
  evening: "evening",
  night: "night"
}, gU = {
  // Era
  G: function(e, t, r) {
    var n = e.getUTCFullYear() > 0 ? 1 : 0;
    switch (t) {
      case "G":
      case "GG":
      case "GGG":
        return r.era(n, {
          width: "abbreviated"
        });
      case "GGGGG":
        return r.era(n, {
          width: "narrow"
        });
      case "GGGG":
      default:
        return r.era(n, {
          width: "wide"
        });
    }
  },
  // Year
  y: function(e, t, r) {
    if (t === "yo") {
      var n = e.getUTCFullYear(), a = n > 0 ? n : 1 - n;
      return r.ordinalNumber(a, {
        unit: "year"
      });
    }
    return Tt.y(e, t);
  },
  // Local week-numbering year
  Y: function(e, t, r, n) {
    var a = Fw(e, n), i = a > 0 ? a : 1 - a;
    if (t === "YY") {
      var s = i % 100;
      return nA(s, 2);
    }
    return t === "Yo" ? r.ordinalNumber(i, {
      unit: "year"
    }) : nA(i, t.length);
  },
  // ISO week-numbering year
  R: function(e, t) {
    var r = yw(e);
    return nA(r, t.length);
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
    var r = e.getUTCFullYear();
    return nA(r, t.length);
  },
  // Quarter
  Q: function(e, t, r) {
    var n = Math.ceil((e.getUTCMonth() + 1) / 3);
    switch (t) {
      case "Q":
        return String(n);
      case "QQ":
        return nA(n, 2);
      case "Qo":
        return r.ordinalNumber(n, {
          unit: "quarter"
        });
      case "QQQ":
        return r.quarter(n, {
          width: "abbreviated",
          context: "formatting"
        });
      case "QQQQQ":
        return r.quarter(n, {
          width: "narrow",
          context: "formatting"
        });
      case "QQQQ":
      default:
        return r.quarter(n, {
          width: "wide",
          context: "formatting"
        });
    }
  },
  // Stand-alone quarter
  q: function(e, t, r) {
    var n = Math.ceil((e.getUTCMonth() + 1) / 3);
    switch (t) {
      case "q":
        return String(n);
      case "qq":
        return nA(n, 2);
      case "qo":
        return r.ordinalNumber(n, {
          unit: "quarter"
        });
      case "qqq":
        return r.quarter(n, {
          width: "abbreviated",
          context: "standalone"
        });
      case "qqqqq":
        return r.quarter(n, {
          width: "narrow",
          context: "standalone"
        });
      case "qqqq":
      default:
        return r.quarter(n, {
          width: "wide",
          context: "standalone"
        });
    }
  },
  // Month
  M: function(e, t, r) {
    var n = e.getUTCMonth();
    switch (t) {
      case "M":
      case "MM":
        return Tt.M(e, t);
      case "Mo":
        return r.ordinalNumber(n + 1, {
          unit: "month"
        });
      case "MMM":
        return r.month(n, {
          width: "abbreviated",
          context: "formatting"
        });
      case "MMMMM":
        return r.month(n, {
          width: "narrow",
          context: "formatting"
        });
      case "MMMM":
      default:
        return r.month(n, {
          width: "wide",
          context: "formatting"
        });
    }
  },
  // Stand-alone month
  L: function(e, t, r) {
    var n = e.getUTCMonth();
    switch (t) {
      case "L":
        return String(n + 1);
      case "LL":
        return nA(n + 1, 2);
      case "Lo":
        return r.ordinalNumber(n + 1, {
          unit: "month"
        });
      case "LLL":
        return r.month(n, {
          width: "abbreviated",
          context: "standalone"
        });
      case "LLLLL":
        return r.month(n, {
          width: "narrow",
          context: "standalone"
        });
      case "LLLL":
      default:
        return r.month(n, {
          width: "wide",
          context: "standalone"
        });
    }
  },
  // Local week of year
  w: function(e, t, r, n) {
    var a = dU(e, n);
    return t === "wo" ? r.ordinalNumber(a, {
      unit: "week"
    }) : nA(a, t.length);
  },
  // ISO week of year
  I: function(e, t, r) {
    var n = lU(e);
    return t === "Io" ? r.ordinalNumber(n, {
      unit: "week"
    }) : nA(n, t.length);
  },
  // Day of the month
  d: function(e, t, r) {
    return t === "do" ? r.ordinalNumber(e.getUTCDate(), {
      unit: "date"
    }) : Tt.d(e, t);
  },
  // Day of year
  D: function(e, t, r) {
    var n = sU(e);
    return t === "Do" ? r.ordinalNumber(n, {
      unit: "dayOfYear"
    }) : nA(n, t.length);
  },
  // Day of week
  E: function(e, t, r) {
    var n = e.getUTCDay();
    switch (t) {
      case "E":
      case "EE":
      case "EEE":
        return r.day(n, {
          width: "abbreviated",
          context: "formatting"
        });
      case "EEEEE":
        return r.day(n, {
          width: "narrow",
          context: "formatting"
        });
      case "EEEEEE":
        return r.day(n, {
          width: "short",
          context: "formatting"
        });
      case "EEEE":
      default:
        return r.day(n, {
          width: "wide",
          context: "formatting"
        });
    }
  },
  // Local day of week
  e: function(e, t, r, n) {
    var a = e.getUTCDay(), i = (a - n.weekStartsOn + 8) % 7 || 7;
    switch (t) {
      case "e":
        return String(i);
      case "ee":
        return nA(i, 2);
      case "eo":
        return r.ordinalNumber(i, {
          unit: "day"
        });
      case "eee":
        return r.day(a, {
          width: "abbreviated",
          context: "formatting"
        });
      case "eeeee":
        return r.day(a, {
          width: "narrow",
          context: "formatting"
        });
      case "eeeeee":
        return r.day(a, {
          width: "short",
          context: "formatting"
        });
      case "eeee":
      default:
        return r.day(a, {
          width: "wide",
          context: "formatting"
        });
    }
  },
  // Stand-alone local day of week
  c: function(e, t, r, n) {
    var a = e.getUTCDay(), i = (a - n.weekStartsOn + 8) % 7 || 7;
    switch (t) {
      case "c":
        return String(i);
      case "cc":
        return nA(i, t.length);
      case "co":
        return r.ordinalNumber(i, {
          unit: "day"
        });
      case "ccc":
        return r.day(a, {
          width: "abbreviated",
          context: "standalone"
        });
      case "ccccc":
        return r.day(a, {
          width: "narrow",
          context: "standalone"
        });
      case "cccccc":
        return r.day(a, {
          width: "short",
          context: "standalone"
        });
      case "cccc":
      default:
        return r.day(a, {
          width: "wide",
          context: "standalone"
        });
    }
  },
  // ISO day of week
  i: function(e, t, r) {
    var n = e.getUTCDay(), a = n === 0 ? 7 : n;
    switch (t) {
      case "i":
        return String(a);
      case "ii":
        return nA(a, t.length);
      case "io":
        return r.ordinalNumber(a, {
          unit: "day"
        });
      case "iii":
        return r.day(n, {
          width: "abbreviated",
          context: "formatting"
        });
      case "iiiii":
        return r.day(n, {
          width: "narrow",
          context: "formatting"
        });
      case "iiiiii":
        return r.day(n, {
          width: "short",
          context: "formatting"
        });
      case "iiii":
      default:
        return r.day(n, {
          width: "wide",
          context: "formatting"
        });
    }
  },
  // AM or PM
  a: function(e, t, r) {
    var n = e.getUTCHours(), a = n / 12 >= 1 ? "pm" : "am";
    switch (t) {
      case "a":
      case "aa":
        return r.dayPeriod(a, {
          width: "abbreviated",
          context: "formatting"
        });
      case "aaa":
        return r.dayPeriod(a, {
          width: "abbreviated",
          context: "formatting"
        }).toLowerCase();
      case "aaaaa":
        return r.dayPeriod(a, {
          width: "narrow",
          context: "formatting"
        });
      case "aaaa":
      default:
        return r.dayPeriod(a, {
          width: "wide",
          context: "formatting"
        });
    }
  },
  // AM, PM, midnight, noon
  b: function(e, t, r) {
    var n = e.getUTCHours(), a;
    switch (n === 12 ? a = Pr.noon : n === 0 ? a = Pr.midnight : a = n / 12 >= 1 ? "pm" : "am", t) {
      case "b":
      case "bb":
        return r.dayPeriod(a, {
          width: "abbreviated",
          context: "formatting"
        });
      case "bbb":
        return r.dayPeriod(a, {
          width: "abbreviated",
          context: "formatting"
        }).toLowerCase();
      case "bbbbb":
        return r.dayPeriod(a, {
          width: "narrow",
          context: "formatting"
        });
      case "bbbb":
      default:
        return r.dayPeriod(a, {
          width: "wide",
          context: "formatting"
        });
    }
  },
  // in the morning, in the afternoon, in the evening, at night
  B: function(e, t, r) {
    var n = e.getUTCHours(), a;
    switch (n >= 17 ? a = Pr.evening : n >= 12 ? a = Pr.afternoon : n >= 4 ? a = Pr.morning : a = Pr.night, t) {
      case "B":
      case "BB":
      case "BBB":
        return r.dayPeriod(a, {
          width: "abbreviated",
          context: "formatting"
        });
      case "BBBBB":
        return r.dayPeriod(a, {
          width: "narrow",
          context: "formatting"
        });
      case "BBBB":
      default:
        return r.dayPeriod(a, {
          width: "wide",
          context: "formatting"
        });
    }
  },
  // Hour [1-12]
  h: function(e, t, r) {
    if (t === "ho") {
      var n = e.getUTCHours() % 12;
      return n === 0 && (n = 12), r.ordinalNumber(n, {
        unit: "hour"
      });
    }
    return Tt.h(e, t);
  },
  // Hour [0-23]
  H: function(e, t, r) {
    return t === "Ho" ? r.ordinalNumber(e.getUTCHours(), {
      unit: "hour"
    }) : Tt.H(e, t);
  },
  // Hour [0-11]
  K: function(e, t, r) {
    var n = e.getUTCHours() % 12;
    return t === "Ko" ? r.ordinalNumber(n, {
      unit: "hour"
    }) : nA(n, t.length);
  },
  // Hour [1-24]
  k: function(e, t, r) {
    var n = e.getUTCHours();
    return n === 0 && (n = 24), t === "ko" ? r.ordinalNumber(n, {
      unit: "hour"
    }) : nA(n, t.length);
  },
  // Minute
  m: function(e, t, r) {
    return t === "mo" ? r.ordinalNumber(e.getUTCMinutes(), {
      unit: "minute"
    }) : Tt.m(e, t);
  },
  // Second
  s: function(e, t, r) {
    return t === "so" ? r.ordinalNumber(e.getUTCSeconds(), {
      unit: "second"
    }) : Tt.s(e, t);
  },
  // Fraction of second
  S: function(e, t) {
    return Tt.S(e, t);
  },
  // Timezone (ISO-8601. If offset is 0, output is always `'Z'`)
  X: function(e, t, r, n) {
    var a = n._originalDate || e, i = a.getTimezoneOffset();
    if (i === 0)
      return "Z";
    switch (t) {
      case "X":
        return SB(i);
      case "XXXX":
      case "XX":
        return pr(i);
      case "XXXXX":
      case "XXX":
      default:
        return pr(i, ":");
    }
  },
  // Timezone (ISO-8601. If offset is 0, output is `'+00:00'` or equivalent)
  x: function(e, t, r, n) {
    var a = n._originalDate || e, i = a.getTimezoneOffset();
    switch (t) {
      case "x":
        return SB(i);
      case "xxxx":
      case "xx":
        return pr(i);
      case "xxxxx":
      case "xxx":
      default:
        return pr(i, ":");
    }
  },
  // Timezone (GMT)
  O: function(e, t, r, n) {
    var a = n._originalDate || e, i = a.getTimezoneOffset();
    switch (t) {
      case "O":
      case "OO":
      case "OOO":
        return "GMT" + xB(i, ":");
      case "OOOO":
      default:
        return "GMT" + pr(i, ":");
    }
  },
  // Timezone (specific non-location)
  z: function(e, t, r, n) {
    var a = n._originalDate || e, i = a.getTimezoneOffset();
    switch (t) {
      case "z":
      case "zz":
      case "zzz":
        return "GMT" + xB(i, ":");
      case "zzzz":
      default:
        return "GMT" + pr(i, ":");
    }
  },
  // Seconds timestamp
  t: function(e, t, r, n) {
    var a = n._originalDate || e, i = Math.floor(a.getTime() / 1e3);
    return nA(i, t.length);
  },
  // Milliseconds timestamp
  T: function(e, t, r, n) {
    var a = n._originalDate || e, i = a.getTime();
    return nA(i, t.length);
  }
};
function xB(A, e) {
  var t = A > 0 ? "-" : "+", r = Math.abs(A), n = Math.floor(r / 60), a = r % 60;
  if (a === 0)
    return t + String(n);
  var i = e || "";
  return t + String(n) + i + nA(a, 2);
}
function SB(A, e) {
  if (A % 60 === 0) {
    var t = A > 0 ? "-" : "+";
    return t + nA(Math.abs(A) / 60, 2);
  }
  return pr(A, e);
}
function pr(A, e) {
  var t = e || "", r = A > 0 ? "-" : "+", n = Math.abs(A), a = nA(Math.floor(n / 60), 2), i = nA(n % 60, 2);
  return r + a + t + i;
}
var TB = function(e, t) {
  switch (e) {
    case "P":
      return t.date({
        width: "short"
      });
    case "PP":
      return t.date({
        width: "medium"
      });
    case "PPP":
      return t.date({
        width: "long"
      });
    case "PPPP":
    default:
      return t.date({
        width: "full"
      });
  }
}, Ew = function(e, t) {
  switch (e) {
    case "p":
      return t.time({
        width: "short"
      });
    case "pp":
      return t.time({
        width: "medium"
      });
    case "ppp":
      return t.time({
        width: "long"
      });
    case "pppp":
    default:
      return t.time({
        width: "full"
      });
  }
}, hU = function(e, t) {
  var r = e.match(/(P+)(p+)?/) || [], n = r[1], a = r[2];
  if (!a)
    return TB(e, t);
  var i;
  switch (n) {
    case "P":
      i = t.dateTime({
        width: "short"
      });
      break;
    case "PP":
      i = t.dateTime({
        width: "medium"
      });
      break;
    case "PPP":
      i = t.dateTime({
        width: "long"
      });
      break;
    case "PPPP":
    default:
      i = t.dateTime({
        width: "full"
      });
      break;
  }
  return i.replace("{{date}}", TB(n, t)).replace("{{time}}", Ew(a, t));
}, pU = {
  p: Ew,
  P: hU
}, wU = ["D", "DD"], vU = ["YY", "YYYY"];
function mU(A) {
  return wU.indexOf(A) !== -1;
}
function CU(A) {
  return vU.indexOf(A) !== -1;
}
function _B(A, e, t) {
  if (A === "YYYY")
    throw new RangeError("Use `yyyy` instead of `YYYY` (in `".concat(e, "`) for formatting years to the input `").concat(t, "`; see: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md"));
  if (A === "YY")
    throw new RangeError("Use `yy` instead of `YY` (in `".concat(e, "`) for formatting years to the input `").concat(t, "`; see: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md"));
  if (A === "D")
    throw new RangeError("Use `d` instead of `D` (in `".concat(e, "`) for formatting days of the month to the input `").concat(t, "`; see: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md"));
  if (A === "DD")
    throw new RangeError("Use `dd` instead of `DD` (in `".concat(e, "`) for formatting days of the month to the input `").concat(t, "`; see: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md"));
}
var QU = {
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
}, UU = function(e, t, r) {
  var n, a = QU[e];
  return typeof a == "string" ? n = a : t === 1 ? n = a.one : n = a.other.replace("{{count}}", t.toString()), r != null && r.addSuffix ? r.comparison && r.comparison > 0 ? "in " + n : n + " ago" : n;
};
const yU = UU;
function Uu(A) {
  return function() {
    var e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {}, t = e.width ? String(e.width) : A.defaultWidth, r = A.formats[t] || A.formats[A.defaultWidth];
    return r;
  };
}
var FU = {
  full: "EEEE, MMMM do, y",
  long: "MMMM do, y",
  medium: "MMM d, y",
  short: "MM/dd/yyyy"
}, EU = {
  full: "h:mm:ss a zzzz",
  long: "h:mm:ss a z",
  medium: "h:mm:ss a",
  short: "h:mm a"
}, IU = {
  full: "{{date}} 'at' {{time}}",
  long: "{{date}} 'at' {{time}}",
  medium: "{{date}}, {{time}}",
  short: "{{date}}, {{time}}"
}, HU = {
  date: Uu({
    formats: FU,
    defaultWidth: "full"
  }),
  time: Uu({
    formats: EU,
    defaultWidth: "full"
  }),
  dateTime: Uu({
    formats: IU,
    defaultWidth: "full"
  })
};
const xU = HU;
var SU = {
  lastWeek: "'last' eeee 'at' p",
  yesterday: "'yesterday at' p",
  today: "'today at' p",
  tomorrow: "'tomorrow at' p",
  nextWeek: "eeee 'at' p",
  other: "P"
}, TU = function(e, t, r, n) {
  return SU[e];
};
const _U = TU;
function Yn(A) {
  return function(e, t) {
    var r = t != null && t.context ? String(t.context) : "standalone", n;
    if (r === "formatting" && A.formattingValues) {
      var a = A.defaultFormattingWidth || A.defaultWidth, i = t != null && t.width ? String(t.width) : a;
      n = A.formattingValues[i] || A.formattingValues[a];
    } else {
      var s = A.defaultWidth, o = t != null && t.width ? String(t.width) : A.defaultWidth;
      n = A.values[o] || A.values[s];
    }
    var u = A.argumentCallback ? A.argumentCallback(e) : e;
    return n[u];
  };
}
var LU = {
  narrow: ["B", "A"],
  abbreviated: ["BC", "AD"],
  wide: ["Before Christ", "Anno Domini"]
}, DU = {
  narrow: ["1", "2", "3", "4"],
  abbreviated: ["Q1", "Q2", "Q3", "Q4"],
  wide: ["1st quarter", "2nd quarter", "3rd quarter", "4th quarter"]
}, OU = {
  narrow: ["J", "F", "M", "A", "M", "J", "J", "A", "S", "O", "N", "D"],
  abbreviated: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
  wide: ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"]
}, kU = {
  narrow: ["S", "M", "T", "W", "T", "F", "S"],
  short: ["Su", "Mo", "Tu", "We", "Th", "Fr", "Sa"],
  abbreviated: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
  wide: ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"]
}, MU = {
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
}, KU = {
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
}, bU = function(e, t) {
  var r = Number(e), n = r % 100;
  if (n > 20 || n < 10)
    switch (n % 10) {
      case 1:
        return r + "st";
      case 2:
        return r + "nd";
      case 3:
        return r + "rd";
    }
  return r + "th";
}, NU = {
  ordinalNumber: bU,
  era: Yn({
    values: LU,
    defaultWidth: "wide"
  }),
  quarter: Yn({
    values: DU,
    defaultWidth: "wide",
    argumentCallback: function(e) {
      return e - 1;
    }
  }),
  month: Yn({
    values: OU,
    defaultWidth: "wide"
  }),
  day: Yn({
    values: kU,
    defaultWidth: "wide"
  }),
  dayPeriod: Yn({
    values: MU,
    defaultWidth: "wide",
    formattingValues: KU,
    defaultFormattingWidth: "wide"
  })
};
const RU = NU;
function Xn(A) {
  return function(e) {
    var t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, r = t.width, n = r && A.matchPatterns[r] || A.matchPatterns[A.defaultMatchWidth], a = e.match(n);
    if (!a)
      return null;
    var i = a[0], s = r && A.parsePatterns[r] || A.parsePatterns[A.defaultParseWidth], o = Array.isArray(s) ? VU(s, function(c) {
      return c.test(i);
    }) : PU(s, function(c) {
      return c.test(i);
    }), u;
    u = A.valueCallback ? A.valueCallback(o) : o, u = t.valueCallback ? t.valueCallback(u) : u;
    var l = e.slice(i.length);
    return {
      value: u,
      rest: l
    };
  };
}
function PU(A, e) {
  for (var t in A)
    if (A.hasOwnProperty(t) && e(A[t]))
      return t;
}
function VU(A, e) {
  for (var t = 0; t < A.length; t++)
    if (e(A[t]))
      return t;
}
function GU(A) {
  return function(e) {
    var t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, r = e.match(A.matchPattern);
    if (!r)
      return null;
    var n = r[0], a = e.match(A.parsePattern);
    if (!a)
      return null;
    var i = A.valueCallback ? A.valueCallback(a[0]) : a[0];
    i = t.valueCallback ? t.valueCallback(i) : i;
    var s = e.slice(n.length);
    return {
      value: i,
      rest: s
    };
  };
}
var WU = /^(\d+)(th|st|nd|rd)?/i, YU = /\d+/i, XU = {
  narrow: /^(b|a)/i,
  abbreviated: /^(b\.?\s?c\.?|b\.?\s?c\.?\s?e\.?|a\.?\s?d\.?|c\.?\s?e\.?)/i,
  wide: /^(before christ|before common era|anno domini|common era)/i
}, ZU = {
  any: [/^b/i, /^(a|c)/i]
}, jU = {
  narrow: /^[1234]/i,
  abbreviated: /^q[1234]/i,
  wide: /^[1234](th|st|nd|rd)? quarter/i
}, zU = {
  any: [/1/i, /2/i, /3/i, /4/i]
}, JU = {
  narrow: /^[jfmasond]/i,
  abbreviated: /^(jan|feb|mar|apr|may|jun|jul|aug|sep|oct|nov|dec)/i,
  wide: /^(january|february|march|april|may|june|july|august|september|october|november|december)/i
}, $U = {
  narrow: [/^j/i, /^f/i, /^m/i, /^a/i, /^m/i, /^j/i, /^j/i, /^a/i, /^s/i, /^o/i, /^n/i, /^d/i],
  any: [/^ja/i, /^f/i, /^mar/i, /^ap/i, /^may/i, /^jun/i, /^jul/i, /^au/i, /^s/i, /^o/i, /^n/i, /^d/i]
}, qU = {
  narrow: /^[smtwf]/i,
  short: /^(su|mo|tu|we|th|fr|sa)/i,
  abbreviated: /^(sun|mon|tue|wed|thu|fri|sat)/i,
  wide: /^(sunday|monday|tuesday|wednesday|thursday|friday|saturday)/i
}, Ay = {
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
}, ry = {
  ordinalNumber: GU({
    matchPattern: WU,
    parsePattern: YU,
    valueCallback: function(e) {
      return parseInt(e, 10);
    }
  }),
  era: Xn({
    matchPatterns: XU,
    defaultMatchWidth: "wide",
    parsePatterns: ZU,
    defaultParseWidth: "any"
  }),
  quarter: Xn({
    matchPatterns: jU,
    defaultMatchWidth: "wide",
    parsePatterns: zU,
    defaultParseWidth: "any",
    valueCallback: function(e) {
      return e + 1;
    }
  }),
  month: Xn({
    matchPatterns: JU,
    defaultMatchWidth: "wide",
    parsePatterns: $U,
    defaultParseWidth: "any"
  }),
  day: Xn({
    matchPatterns: qU,
    defaultMatchWidth: "wide",
    parsePatterns: Ay,
    defaultParseWidth: "any"
  }),
  dayPeriod: Xn({
    matchPatterns: ey,
    defaultMatchWidth: "any",
    parsePatterns: ty,
    defaultParseWidth: "any"
  })
};
const ny = ry;
var ay = {
  code: "en-US",
  formatDistance: yU,
  formatLong: xU,
  formatRelative: _U,
  localize: RU,
  match: ny,
  options: {
    weekStartsOn: 0,
    firstWeekContainsDate: 1
  }
};
const iy = ay;
var sy = /[yYQqMLwIdDecihHKkms]o|(\w)\1*|''|'(''|[^'])+('|$)|./g, oy = /P+p+|P+|p+|''|'(''|[^'])+('|$)|./g, uy = /^'([^]*?)'?$/, ly = /''/g, cy = /[a-zA-Z]/;
function fy(A, e, t) {
  var r, n, a, i, s, o, u, l, c, g, w, p, C, Q, d, f, B, h;
  le(2, arguments);
  var m = String(e), v = To(), U = (r = (n = t == null ? void 0 : t.locale) !== null && n !== void 0 ? n : v.locale) !== null && r !== void 0 ? r : iy, y = kr((a = (i = (s = (o = t == null ? void 0 : t.firstWeekContainsDate) !== null && o !== void 0 ? o : t == null || (u = t.locale) === null || u === void 0 || (l = u.options) === null || l === void 0 ? void 0 : l.firstWeekContainsDate) !== null && s !== void 0 ? s : v.firstWeekContainsDate) !== null && i !== void 0 ? i : (c = v.locale) === null || c === void 0 || (g = c.options) === null || g === void 0 ? void 0 : g.firstWeekContainsDate) !== null && a !== void 0 ? a : 1);
  if (!(y >= 1 && y <= 7))
    throw new RangeError("firstWeekContainsDate must be between 1 and 7 inclusively");
  var E = kr((w = (p = (C = (Q = t == null ? void 0 : t.weekStartsOn) !== null && Q !== void 0 ? Q : t == null || (d = t.locale) === null || d === void 0 || (f = d.options) === null || f === void 0 ? void 0 : f.weekStartsOn) !== null && C !== void 0 ? C : v.weekStartsOn) !== null && p !== void 0 ? p : (B = v.locale) === null || B === void 0 || (h = B.options) === null || h === void 0 ? void 0 : h.weekStartsOn) !== null && w !== void 0 ? w : 0);
  if (!(E >= 0 && E <= 6))
    throw new RangeError("weekStartsOn must be between 0 and 6 inclusively");
  if (!U.localize)
    throw new RangeError("locale must contain localize property");
  if (!U.formatLong)
    throw new RangeError("locale must contain formatLong property");
  var x = at(A);
  if (!nU(x))
    throw new RangeError("Invalid time value");
  var Y = tU(x), AA = aU(x, Y), b = {
    firstWeekContainsDate: y,
    weekStartsOn: E,
    locale: U,
    _originalDate: x
  }, R = m.match(oy).map(function(eA) {
    var z = eA[0];
    if (z === "p" || z === "P") {
      var tA = pU[z];
      return tA(eA, U.formatLong);
    }
    return eA;
  }).join("").match(sy).map(function(eA) {
    if (eA === "''")
      return "'";
    var z = eA[0];
    if (z === "'")
      return dy(eA);
    var tA = gU[z];
    if (tA)
      return !(t != null && t.useAdditionalWeekYearTokens) && CU(eA) && _B(eA, e, String(A)), !(t != null && t.useAdditionalDayOfYearTokens) && mU(eA) && _B(eA, e, String(A)), tA(AA, eA, U.localize, b);
    if (z.match(cy))
      throw new RangeError("Format string contains an unescaped latin alphabet character `" + z + "`");
    return eA;
  }).join("");
  return R;
}
function dy(A) {
  var e = A.match(uy);
  return e ? e[1].replace(ly, "'") : A;
}
var ql = { exports: {} }, Iw = { exports: {} };
(function(A) {
  function e(t) {
    return t && t.__esModule ? t : {
      default: t
    };
  }
  A.exports = e, A.exports.__esModule = !0, A.exports.default = A.exports;
})(Iw);
var UA = Iw.exports, Ac = { exports: {} }, ec = { exports: {} }, Hw = { exports: {} };
(function(A) {
  function e(t) {
    "@babel/helpers - typeof";
    return A.exports = e = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(r) {
      return typeof r;
    } : function(r) {
      return r && typeof Symbol == "function" && r.constructor === Symbol && r !== Symbol.prototype ? "symbol" : typeof r;
    }, A.exports.__esModule = !0, A.exports.default = A.exports, e(t);
  }
  A.exports = e, A.exports.__esModule = !0, A.exports.default = A.exports;
})(Hw);
var xw = Hw.exports, tc = { exports: {} };
(function(A, e) {
  Object.defineProperty(e, "__esModule", {
    value: !0
  }), e.default = t;
  function t(r, n) {
    if (n.length < r)
      throw new TypeError(r + " argument" + (r > 1 ? "s" : "") + " required, but only " + n.length + " present");
  }
  A.exports = e.default;
})(tc, tc.exports);
var ce = tc.exports;
(function(A, e) {
  var t = UA.default;
  Object.defineProperty(e, "__esModule", {
    value: !0
  }), e.default = a;
  var r = t(xw), n = t(ce);
  function a(i) {
    return (0, n.default)(1, arguments), i instanceof Date || (0, r.default)(i) === "object" && Object.prototype.toString.call(i) === "[object Date]";
  }
  A.exports = e.default;
})(ec, ec.exports);
var By = ec.exports, rc = { exports: {} };
(function(A, e) {
  var t = UA.default;
  Object.defineProperty(e, "__esModule", {
    value: !0
  }), e.default = a;
  var r = t(xw), n = t(ce);
  function a(i) {
    (0, n.default)(1, arguments);
    var s = Object.prototype.toString.call(i);
    return i instanceof Date || (0, r.default)(i) === "object" && s === "[object Date]" ? new Date(i.getTime()) : typeof i == "number" || s === "[object Number]" ? new Date(i) : ((typeof i == "string" || s === "[object String]") && typeof console < "u" && (console.warn("Starting with v2.0.0-beta.1 date-fns doesn't accept strings as date arguments. Please use `parseISO` to parse strings. See: https://github.com/date-fns/date-fns/blob/master/docs/upgradeGuide.md#string-arguments"), console.warn(new Error().stack)), /* @__PURE__ */ new Date(NaN));
  }
  A.exports = e.default;
})(rc, rc.exports);
var it = rc.exports;
(function(A, e) {
  var t = UA.default;
  Object.defineProperty(e, "__esModule", {
    value: !0
  }), e.default = i;
  var r = t(By), n = t(it), a = t(ce);
  function i(s) {
    if ((0, a.default)(1, arguments), !(0, r.default)(s) && typeof s != "number")
      return !1;
    var o = (0, n.default)(s);
    return !isNaN(Number(o));
  }
  A.exports = e.default;
})(Ac, Ac.exports);
var gy = Ac.exports, nc = { exports: {} }, ac = { exports: {} }, ic = { exports: {} };
(function(A, e) {
  Object.defineProperty(e, "__esModule", {
    value: !0
  }), e.default = t;
  function t(r) {
    if (r === null || r === !0 || r === !1)
      return NaN;
    var n = Number(r);
    return isNaN(n) ? n : n < 0 ? Math.ceil(n) : Math.floor(n);
  }
  A.exports = e.default;
})(ic, ic.exports);
var br = ic.exports;
const hy = /* @__PURE__ */ ri(br);
(function(A, e) {
  var t = UA.default;
  Object.defineProperty(e, "__esModule", {
    value: !0
  }), e.default = i;
  var r = t(br), n = t(it), a = t(ce);
  function i(s, o) {
    (0, a.default)(2, arguments);
    var u = (0, n.default)(s).getTime(), l = (0, r.default)(o);
    return new Date(u + l);
  }
  A.exports = e.default;
})(ac, ac.exports);
var py = ac.exports;
(function(A, e) {
  var t = UA.default;
  Object.defineProperty(e, "__esModule", {
    value: !0
  }), e.default = i;
  var r = t(py), n = t(ce), a = t(br);
  function i(s, o) {
    (0, n.default)(2, arguments);
    var u = (0, a.default)(o);
    return (0, r.default)(s, -u);
  }
  A.exports = e.default;
})(nc, nc.exports);
var wy = nc.exports, sc = { exports: {} }, oc = { exports: {} };
(function(A, e) {
  var t = UA.default;
  Object.defineProperty(e, "__esModule", {
    value: !0
  }), e.default = i;
  var r = t(it), n = t(ce), a = 864e5;
  function i(s) {
    (0, n.default)(1, arguments);
    var o = (0, r.default)(s), u = o.getTime();
    o.setUTCMonth(0, 1), o.setUTCHours(0, 0, 0, 0);
    var l = o.getTime(), c = u - l;
    return Math.floor(c / a) + 1;
  }
  A.exports = e.default;
})(oc, oc.exports);
var vy = oc.exports, uc = { exports: {} }, lc = { exports: {} };
(function(A, e) {
  var t = UA.default;
  Object.defineProperty(e, "__esModule", {
    value: !0
  }), e.default = a;
  var r = t(it), n = t(ce);
  function a(i) {
    (0, n.default)(1, arguments);
    var s = 1, o = (0, r.default)(i), u = o.getUTCDay(), l = (u < s ? 7 : 0) + u - s;
    return o.setUTCDate(o.getUTCDate() - l), o.setUTCHours(0, 0, 0, 0), o;
  }
  A.exports = e.default;
})(lc, lc.exports);
var ed = lc.exports, cc = { exports: {} }, fc = { exports: {} };
(function(A, e) {
  var t = UA.default;
  Object.defineProperty(e, "__esModule", {
    value: !0
  }), e.default = i;
  var r = t(it), n = t(ce), a = t(ed);
  function i(s) {
    (0, n.default)(1, arguments);
    var o = (0, r.default)(s), u = o.getUTCFullYear(), l = /* @__PURE__ */ new Date(0);
    l.setUTCFullYear(u + 1, 0, 4), l.setUTCHours(0, 0, 0, 0);
    var c = (0, a.default)(l), g = /* @__PURE__ */ new Date(0);
    g.setUTCFullYear(u, 0, 4), g.setUTCHours(0, 0, 0, 0);
    var w = (0, a.default)(g);
    return o.getTime() >= c.getTime() ? u + 1 : o.getTime() >= w.getTime() ? u : u - 1;
  }
  A.exports = e.default;
})(fc, fc.exports);
var Sw = fc.exports;
(function(A, e) {
  var t = UA.default;
  Object.defineProperty(e, "__esModule", {
    value: !0
  }), e.default = i;
  var r = t(Sw), n = t(ed), a = t(ce);
  function i(s) {
    (0, a.default)(1, arguments);
    var o = (0, r.default)(s), u = /* @__PURE__ */ new Date(0);
    u.setUTCFullYear(o, 0, 4), u.setUTCHours(0, 0, 0, 0);
    var l = (0, n.default)(u);
    return l;
  }
  A.exports = e.default;
})(cc, cc.exports);
var my = cc.exports;
(function(A, e) {
  var t = UA.default;
  Object.defineProperty(e, "__esModule", {
    value: !0
  }), e.default = o;
  var r = t(it), n = t(ed), a = t(my), i = t(ce), s = 6048e5;
  function o(u) {
    (0, i.default)(1, arguments);
    var l = (0, r.default)(u), c = (0, n.default)(l).getTime() - (0, a.default)(l).getTime();
    return Math.round(c / s) + 1;
  }
  A.exports = e.default;
})(uc, uc.exports);
var Cy = uc.exports, dc = { exports: {} }, Bc = { exports: {} }, Nr = {};
Object.defineProperty(Nr, "__esModule", {
  value: !0
});
Nr.getDefaultOptions = Qy;
Nr.setDefaultOptions = Uy;
var Tw = {};
function Qy() {
  return Tw;
}
function Uy(A) {
  Tw = A;
}
(function(A, e) {
  var t = UA.default;
  Object.defineProperty(e, "__esModule", {
    value: !0
  }), e.default = s;
  var r = t(it), n = t(ce), a = t(br), i = Nr;
  function s(o, u) {
    var l, c, g, w, p, C, Q, d;
    (0, n.default)(1, arguments);
    var f = (0, i.getDefaultOptions)(), B = (0, a.default)((l = (c = (g = (w = u == null ? void 0 : u.weekStartsOn) !== null && w !== void 0 ? w : u == null || (p = u.locale) === null || p === void 0 || (C = p.options) === null || C === void 0 ? void 0 : C.weekStartsOn) !== null && g !== void 0 ? g : f.weekStartsOn) !== null && c !== void 0 ? c : (Q = f.locale) === null || Q === void 0 || (d = Q.options) === null || d === void 0 ? void 0 : d.weekStartsOn) !== null && l !== void 0 ? l : 0);
    if (!(B >= 0 && B <= 6))
      throw new RangeError("weekStartsOn must be between 0 and 6 inclusively");
    var h = (0, r.default)(o), m = h.getUTCDay(), v = (m < B ? 7 : 0) + m - B;
    return h.setUTCDate(h.getUTCDate() - v), h.setUTCHours(0, 0, 0, 0), h;
  }
  A.exports = e.default;
})(Bc, Bc.exports);
var td = Bc.exports, gc = { exports: {} }, hc = { exports: {} };
(function(A, e) {
  var t = UA.default;
  Object.defineProperty(e, "__esModule", {
    value: !0
  }), e.default = o;
  var r = t(it), n = t(ce), a = t(td), i = t(br), s = Nr;
  function o(u, l) {
    var c, g, w, p, C, Q, d, f;
    (0, n.default)(1, arguments);
    var B = (0, r.default)(u), h = B.getUTCFullYear(), m = (0, s.getDefaultOptions)(), v = (0, i.default)((c = (g = (w = (p = l == null ? void 0 : l.firstWeekContainsDate) !== null && p !== void 0 ? p : l == null || (C = l.locale) === null || C === void 0 || (Q = C.options) === null || Q === void 0 ? void 0 : Q.firstWeekContainsDate) !== null && w !== void 0 ? w : m.firstWeekContainsDate) !== null && g !== void 0 ? g : (d = m.locale) === null || d === void 0 || (f = d.options) === null || f === void 0 ? void 0 : f.firstWeekContainsDate) !== null && c !== void 0 ? c : 1);
    if (!(v >= 1 && v <= 7))
      throw new RangeError("firstWeekContainsDate must be between 1 and 7 inclusively");
    var U = /* @__PURE__ */ new Date(0);
    U.setUTCFullYear(h + 1, 0, v), U.setUTCHours(0, 0, 0, 0);
    var y = (0, a.default)(U, l), E = /* @__PURE__ */ new Date(0);
    E.setUTCFullYear(h, 0, v), E.setUTCHours(0, 0, 0, 0);
    var x = (0, a.default)(E, l);
    return B.getTime() >= y.getTime() ? h + 1 : B.getTime() >= x.getTime() ? h : h - 1;
  }
  A.exports = e.default;
})(hc, hc.exports);
var _w = hc.exports;
(function(A, e) {
  var t = UA.default;
  Object.defineProperty(e, "__esModule", {
    value: !0
  }), e.default = o;
  var r = t(_w), n = t(ce), a = t(td), i = t(br), s = Nr;
  function o(u, l) {
    var c, g, w, p, C, Q, d, f;
    (0, n.default)(1, arguments);
    var B = (0, s.getDefaultOptions)(), h = (0, i.default)((c = (g = (w = (p = l == null ? void 0 : l.firstWeekContainsDate) !== null && p !== void 0 ? p : l == null || (C = l.locale) === null || C === void 0 || (Q = C.options) === null || Q === void 0 ? void 0 : Q.firstWeekContainsDate) !== null && w !== void 0 ? w : B.firstWeekContainsDate) !== null && g !== void 0 ? g : (d = B.locale) === null || d === void 0 || (f = d.options) === null || f === void 0 ? void 0 : f.firstWeekContainsDate) !== null && c !== void 0 ? c : 1), m = (0, r.default)(u, l), v = /* @__PURE__ */ new Date(0);
    v.setUTCFullYear(m, 0, h), v.setUTCHours(0, 0, 0, 0);
    var U = (0, a.default)(v, l);
    return U;
  }
  A.exports = e.default;
})(gc, gc.exports);
var yy = gc.exports;
(function(A, e) {
  var t = UA.default;
  Object.defineProperty(e, "__esModule", {
    value: !0
  }), e.default = o;
  var r = t(it), n = t(td), a = t(yy), i = t(ce), s = 6048e5;
  function o(u, l) {
    (0, i.default)(1, arguments);
    var c = (0, r.default)(u), g = (0, n.default)(c, l).getTime() - (0, a.default)(c, l).getTime();
    return Math.round(g / s) + 1;
  }
  A.exports = e.default;
})(dc, dc.exports);
var Fy = dc.exports, pc = { exports: {} };
(function(A, e) {
  Object.defineProperty(e, "__esModule", {
    value: !0
  }), e.default = t;
  function t(r, n) {
    for (var a = r < 0 ? "-" : "", i = Math.abs(r).toString(); i.length < n; )
      i = "0" + i;
    return a + i;
  }
  A.exports = e.default;
})(pc, pc.exports);
var Lw = pc.exports, wc = { exports: {} };
(function(A, e) {
  var t = UA.default;
  Object.defineProperty(e, "__esModule", {
    value: !0
  }), e.default = void 0;
  var r = t(Lw), n = {
    // Year
    y: function(s, o) {
      var u = s.getUTCFullYear(), l = u > 0 ? u : 1 - u;
      return (0, r.default)(o === "yy" ? l % 100 : l, o.length);
    },
    // Month
    M: function(s, o) {
      var u = s.getUTCMonth();
      return o === "M" ? String(u + 1) : (0, r.default)(u + 1, 2);
    },
    // Day of the month
    d: function(s, o) {
      return (0, r.default)(s.getUTCDate(), o.length);
    },
    // AM or PM
    a: function(s, o) {
      var u = s.getUTCHours() / 12 >= 1 ? "pm" : "am";
      switch (o) {
        case "a":
        case "aa":
          return u.toUpperCase();
        case "aaa":
          return u;
        case "aaaaa":
          return u[0];
        case "aaaa":
        default:
          return u === "am" ? "a.m." : "p.m.";
      }
    },
    // Hour [1-12]
    h: function(s, o) {
      return (0, r.default)(s.getUTCHours() % 12 || 12, o.length);
    },
    // Hour [0-23]
    H: function(s, o) {
      return (0, r.default)(s.getUTCHours(), o.length);
    },
    // Minute
    m: function(s, o) {
      return (0, r.default)(s.getUTCMinutes(), o.length);
    },
    // Second
    s: function(s, o) {
      return (0, r.default)(s.getUTCSeconds(), o.length);
    },
    // Fraction of second
    S: function(s, o) {
      var u = o.length, l = s.getUTCMilliseconds(), c = Math.floor(l * Math.pow(10, u - 3));
      return (0, r.default)(c, o.length);
    }
  }, a = n;
  e.default = a, A.exports = e.default;
})(wc, wc.exports);
var Ey = wc.exports;
(function(A, e) {
  var t = UA.default;
  Object.defineProperty(e, "__esModule", {
    value: !0
  }), e.default = void 0;
  var r = t(vy), n = t(Cy), a = t(Sw), i = t(Fy), s = t(_w), o = t(Lw), u = t(Ey), l = {
    am: "am",
    pm: "pm",
    midnight: "midnight",
    noon: "noon",
    morning: "morning",
    afternoon: "afternoon",
    evening: "evening",
    night: "night"
  }, c = {
    // Era
    G: function(d, f, B) {
      var h = d.getUTCFullYear() > 0 ? 1 : 0;
      switch (f) {
        case "G":
        case "GG":
        case "GGG":
          return B.era(h, {
            width: "abbreviated"
          });
        case "GGGGG":
          return B.era(h, {
            width: "narrow"
          });
        case "GGGG":
        default:
          return B.era(h, {
            width: "wide"
          });
      }
    },
    // Year
    y: function(d, f, B) {
      if (f === "yo") {
        var h = d.getUTCFullYear(), m = h > 0 ? h : 1 - h;
        return B.ordinalNumber(m, {
          unit: "year"
        });
      }
      return u.default.y(d, f);
    },
    // Local week-numbering year
    Y: function(d, f, B, h) {
      var m = (0, s.default)(d, h), v = m > 0 ? m : 1 - m;
      if (f === "YY") {
        var U = v % 100;
        return (0, o.default)(U, 2);
      }
      return f === "Yo" ? B.ordinalNumber(v, {
        unit: "year"
      }) : (0, o.default)(v, f.length);
    },
    // ISO week-numbering year
    R: function(d, f) {
      var B = (0, a.default)(d);
      return (0, o.default)(B, f.length);
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
    u: function(d, f) {
      var B = d.getUTCFullYear();
      return (0, o.default)(B, f.length);
    },
    // Quarter
    Q: function(d, f, B) {
      var h = Math.ceil((d.getUTCMonth() + 1) / 3);
      switch (f) {
        case "Q":
          return String(h);
        case "QQ":
          return (0, o.default)(h, 2);
        case "Qo":
          return B.ordinalNumber(h, {
            unit: "quarter"
          });
        case "QQQ":
          return B.quarter(h, {
            width: "abbreviated",
            context: "formatting"
          });
        case "QQQQQ":
          return B.quarter(h, {
            width: "narrow",
            context: "formatting"
          });
        case "QQQQ":
        default:
          return B.quarter(h, {
            width: "wide",
            context: "formatting"
          });
      }
    },
    // Stand-alone quarter
    q: function(d, f, B) {
      var h = Math.ceil((d.getUTCMonth() + 1) / 3);
      switch (f) {
        case "q":
          return String(h);
        case "qq":
          return (0, o.default)(h, 2);
        case "qo":
          return B.ordinalNumber(h, {
            unit: "quarter"
          });
        case "qqq":
          return B.quarter(h, {
            width: "abbreviated",
            context: "standalone"
          });
        case "qqqqq":
          return B.quarter(h, {
            width: "narrow",
            context: "standalone"
          });
        case "qqqq":
        default:
          return B.quarter(h, {
            width: "wide",
            context: "standalone"
          });
      }
    },
    // Month
    M: function(d, f, B) {
      var h = d.getUTCMonth();
      switch (f) {
        case "M":
        case "MM":
          return u.default.M(d, f);
        case "Mo":
          return B.ordinalNumber(h + 1, {
            unit: "month"
          });
        case "MMM":
          return B.month(h, {
            width: "abbreviated",
            context: "formatting"
          });
        case "MMMMM":
          return B.month(h, {
            width: "narrow",
            context: "formatting"
          });
        case "MMMM":
        default:
          return B.month(h, {
            width: "wide",
            context: "formatting"
          });
      }
    },
    // Stand-alone month
    L: function(d, f, B) {
      var h = d.getUTCMonth();
      switch (f) {
        case "L":
          return String(h + 1);
        case "LL":
          return (0, o.default)(h + 1, 2);
        case "Lo":
          return B.ordinalNumber(h + 1, {
            unit: "month"
          });
        case "LLL":
          return B.month(h, {
            width: "abbreviated",
            context: "standalone"
          });
        case "LLLLL":
          return B.month(h, {
            width: "narrow",
            context: "standalone"
          });
        case "LLLL":
        default:
          return B.month(h, {
            width: "wide",
            context: "standalone"
          });
      }
    },
    // Local week of year
    w: function(d, f, B, h) {
      var m = (0, i.default)(d, h);
      return f === "wo" ? B.ordinalNumber(m, {
        unit: "week"
      }) : (0, o.default)(m, f.length);
    },
    // ISO week of year
    I: function(d, f, B) {
      var h = (0, n.default)(d);
      return f === "Io" ? B.ordinalNumber(h, {
        unit: "week"
      }) : (0, o.default)(h, f.length);
    },
    // Day of the month
    d: function(d, f, B) {
      return f === "do" ? B.ordinalNumber(d.getUTCDate(), {
        unit: "date"
      }) : u.default.d(d, f);
    },
    // Day of year
    D: function(d, f, B) {
      var h = (0, r.default)(d);
      return f === "Do" ? B.ordinalNumber(h, {
        unit: "dayOfYear"
      }) : (0, o.default)(h, f.length);
    },
    // Day of week
    E: function(d, f, B) {
      var h = d.getUTCDay();
      switch (f) {
        case "E":
        case "EE":
        case "EEE":
          return B.day(h, {
            width: "abbreviated",
            context: "formatting"
          });
        case "EEEEE":
          return B.day(h, {
            width: "narrow",
            context: "formatting"
          });
        case "EEEEEE":
          return B.day(h, {
            width: "short",
            context: "formatting"
          });
        case "EEEE":
        default:
          return B.day(h, {
            width: "wide",
            context: "formatting"
          });
      }
    },
    // Local day of week
    e: function(d, f, B, h) {
      var m = d.getUTCDay(), v = (m - h.weekStartsOn + 8) % 7 || 7;
      switch (f) {
        case "e":
          return String(v);
        case "ee":
          return (0, o.default)(v, 2);
        case "eo":
          return B.ordinalNumber(v, {
            unit: "day"
          });
        case "eee":
          return B.day(m, {
            width: "abbreviated",
            context: "formatting"
          });
        case "eeeee":
          return B.day(m, {
            width: "narrow",
            context: "formatting"
          });
        case "eeeeee":
          return B.day(m, {
            width: "short",
            context: "formatting"
          });
        case "eeee":
        default:
          return B.day(m, {
            width: "wide",
            context: "formatting"
          });
      }
    },
    // Stand-alone local day of week
    c: function(d, f, B, h) {
      var m = d.getUTCDay(), v = (m - h.weekStartsOn + 8) % 7 || 7;
      switch (f) {
        case "c":
          return String(v);
        case "cc":
          return (0, o.default)(v, f.length);
        case "co":
          return B.ordinalNumber(v, {
            unit: "day"
          });
        case "ccc":
          return B.day(m, {
            width: "abbreviated",
            context: "standalone"
          });
        case "ccccc":
          return B.day(m, {
            width: "narrow",
            context: "standalone"
          });
        case "cccccc":
          return B.day(m, {
            width: "short",
            context: "standalone"
          });
        case "cccc":
        default:
          return B.day(m, {
            width: "wide",
            context: "standalone"
          });
      }
    },
    // ISO day of week
    i: function(d, f, B) {
      var h = d.getUTCDay(), m = h === 0 ? 7 : h;
      switch (f) {
        case "i":
          return String(m);
        case "ii":
          return (0, o.default)(m, f.length);
        case "io":
          return B.ordinalNumber(m, {
            unit: "day"
          });
        case "iii":
          return B.day(h, {
            width: "abbreviated",
            context: "formatting"
          });
        case "iiiii":
          return B.day(h, {
            width: "narrow",
            context: "formatting"
          });
        case "iiiiii":
          return B.day(h, {
            width: "short",
            context: "formatting"
          });
        case "iiii":
        default:
          return B.day(h, {
            width: "wide",
            context: "formatting"
          });
      }
    },
    // AM or PM
    a: function(d, f, B) {
      var h = d.getUTCHours(), m = h / 12 >= 1 ? "pm" : "am";
      switch (f) {
        case "a":
        case "aa":
          return B.dayPeriod(m, {
            width: "abbreviated",
            context: "formatting"
          });
        case "aaa":
          return B.dayPeriod(m, {
            width: "abbreviated",
            context: "formatting"
          }).toLowerCase();
        case "aaaaa":
          return B.dayPeriod(m, {
            width: "narrow",
            context: "formatting"
          });
        case "aaaa":
        default:
          return B.dayPeriod(m, {
            width: "wide",
            context: "formatting"
          });
      }
    },
    // AM, PM, midnight, noon
    b: function(d, f, B) {
      var h = d.getUTCHours(), m;
      switch (h === 12 ? m = l.noon : h === 0 ? m = l.midnight : m = h / 12 >= 1 ? "pm" : "am", f) {
        case "b":
        case "bb":
          return B.dayPeriod(m, {
            width: "abbreviated",
            context: "formatting"
          });
        case "bbb":
          return B.dayPeriod(m, {
            width: "abbreviated",
            context: "formatting"
          }).toLowerCase();
        case "bbbbb":
          return B.dayPeriod(m, {
            width: "narrow",
            context: "formatting"
          });
        case "bbbb":
        default:
          return B.dayPeriod(m, {
            width: "wide",
            context: "formatting"
          });
      }
    },
    // in the morning, in the afternoon, in the evening, at night
    B: function(d, f, B) {
      var h = d.getUTCHours(), m;
      switch (h >= 17 ? m = l.evening : h >= 12 ? m = l.afternoon : h >= 4 ? m = l.morning : m = l.night, f) {
        case "B":
        case "BB":
        case "BBB":
          return B.dayPeriod(m, {
            width: "abbreviated",
            context: "formatting"
          });
        case "BBBBB":
          return B.dayPeriod(m, {
            width: "narrow",
            context: "formatting"
          });
        case "BBBB":
        default:
          return B.dayPeriod(m, {
            width: "wide",
            context: "formatting"
          });
      }
    },
    // Hour [1-12]
    h: function(d, f, B) {
      if (f === "ho") {
        var h = d.getUTCHours() % 12;
        return h === 0 && (h = 12), B.ordinalNumber(h, {
          unit: "hour"
        });
      }
      return u.default.h(d, f);
    },
    // Hour [0-23]
    H: function(d, f, B) {
      return f === "Ho" ? B.ordinalNumber(d.getUTCHours(), {
        unit: "hour"
      }) : u.default.H(d, f);
    },
    // Hour [0-11]
    K: function(d, f, B) {
      var h = d.getUTCHours() % 12;
      return f === "Ko" ? B.ordinalNumber(h, {
        unit: "hour"
      }) : (0, o.default)(h, f.length);
    },
    // Hour [1-24]
    k: function(d, f, B) {
      var h = d.getUTCHours();
      return h === 0 && (h = 24), f === "ko" ? B.ordinalNumber(h, {
        unit: "hour"
      }) : (0, o.default)(h, f.length);
    },
    // Minute
    m: function(d, f, B) {
      return f === "mo" ? B.ordinalNumber(d.getUTCMinutes(), {
        unit: "minute"
      }) : u.default.m(d, f);
    },
    // Second
    s: function(d, f, B) {
      return f === "so" ? B.ordinalNumber(d.getUTCSeconds(), {
        unit: "second"
      }) : u.default.s(d, f);
    },
    // Fraction of second
    S: function(d, f) {
      return u.default.S(d, f);
    },
    // Timezone (ISO-8601. If offset is 0, output is always `'Z'`)
    X: function(d, f, B, h) {
      var m = h._originalDate || d, v = m.getTimezoneOffset();
      if (v === 0)
        return "Z";
      switch (f) {
        case "X":
          return w(v);
        case "XXXX":
        case "XX":
          return p(v);
        case "XXXXX":
        case "XXX":
        default:
          return p(v, ":");
      }
    },
    // Timezone (ISO-8601. If offset is 0, output is `'+00:00'` or equivalent)
    x: function(d, f, B, h) {
      var m = h._originalDate || d, v = m.getTimezoneOffset();
      switch (f) {
        case "x":
          return w(v);
        case "xxxx":
        case "xx":
          return p(v);
        case "xxxxx":
        case "xxx":
        default:
          return p(v, ":");
      }
    },
    // Timezone (GMT)
    O: function(d, f, B, h) {
      var m = h._originalDate || d, v = m.getTimezoneOffset();
      switch (f) {
        case "O":
        case "OO":
        case "OOO":
          return "GMT" + g(v, ":");
        case "OOOO":
        default:
          return "GMT" + p(v, ":");
      }
    },
    // Timezone (specific non-location)
    z: function(d, f, B, h) {
      var m = h._originalDate || d, v = m.getTimezoneOffset();
      switch (f) {
        case "z":
        case "zz":
        case "zzz":
          return "GMT" + g(v, ":");
        case "zzzz":
        default:
          return "GMT" + p(v, ":");
      }
    },
    // Seconds timestamp
    t: function(d, f, B, h) {
      var m = h._originalDate || d, v = Math.floor(m.getTime() / 1e3);
      return (0, o.default)(v, f.length);
    },
    // Milliseconds timestamp
    T: function(d, f, B, h) {
      var m = h._originalDate || d, v = m.getTime();
      return (0, o.default)(v, f.length);
    }
  };
  function g(Q, d) {
    var f = Q > 0 ? "-" : "+", B = Math.abs(Q), h = Math.floor(B / 60), m = B % 60;
    if (m === 0)
      return f + String(h);
    var v = d || "";
    return f + String(h) + v + (0, o.default)(m, 2);
  }
  function w(Q, d) {
    if (Q % 60 === 0) {
      var f = Q > 0 ? "-" : "+";
      return f + (0, o.default)(Math.abs(Q) / 60, 2);
    }
    return p(Q, d);
  }
  function p(Q, d) {
    var f = d || "", B = Q > 0 ? "-" : "+", h = Math.abs(Q), m = (0, o.default)(Math.floor(h / 60), 2), v = (0, o.default)(h % 60, 2);
    return B + m + f + v;
  }
  var C = c;
  e.default = C, A.exports = e.default;
})(sc, sc.exports);
var Iy = sc.exports, vc = { exports: {} };
(function(A, e) {
  Object.defineProperty(e, "__esModule", {
    value: !0
  }), e.default = void 0;
  var t = function(o, u) {
    switch (o) {
      case "P":
        return u.date({
          width: "short"
        });
      case "PP":
        return u.date({
          width: "medium"
        });
      case "PPP":
        return u.date({
          width: "long"
        });
      case "PPPP":
      default:
        return u.date({
          width: "full"
        });
    }
  }, r = function(o, u) {
    switch (o) {
      case "p":
        return u.time({
          width: "short"
        });
      case "pp":
        return u.time({
          width: "medium"
        });
      case "ppp":
        return u.time({
          width: "long"
        });
      case "pppp":
      default:
        return u.time({
          width: "full"
        });
    }
  }, n = function(o, u) {
    var l = o.match(/(P+)(p+)?/) || [], c = l[1], g = l[2];
    if (!g)
      return t(o, u);
    var w;
    switch (c) {
      case "P":
        w = u.dateTime({
          width: "short"
        });
        break;
      case "PP":
        w = u.dateTime({
          width: "medium"
        });
        break;
      case "PPP":
        w = u.dateTime({
          width: "long"
        });
        break;
      case "PPPP":
      default:
        w = u.dateTime({
          width: "full"
        });
        break;
    }
    return w.replace("{{date}}", t(c, u)).replace("{{time}}", r(g, u));
  }, a = {
    p: r,
    P: n
  }, i = a;
  e.default = i, A.exports = e.default;
})(vc, vc.exports);
var Hy = vc.exports, mc = { exports: {} };
(function(A, e) {
  Object.defineProperty(e, "__esModule", {
    value: !0
  }), e.default = t;
  function t(r) {
    var n = new Date(Date.UTC(r.getFullYear(), r.getMonth(), r.getDate(), r.getHours(), r.getMinutes(), r.getSeconds(), r.getMilliseconds()));
    return n.setUTCFullYear(r.getFullYear()), r.getTime() - n.getTime();
  }
  A.exports = e.default;
})(mc, mc.exports);
var Dw = mc.exports;
const LB = /* @__PURE__ */ ri(Dw);
var li = {};
Object.defineProperty(li, "__esModule", {
  value: !0
});
li.isProtectedDayOfYearToken = Ty;
li.isProtectedWeekYearToken = _y;
li.throwProtectedError = Ly;
var xy = ["D", "DD"], Sy = ["YY", "YYYY"];
function Ty(A) {
  return xy.indexOf(A) !== -1;
}
function _y(A) {
  return Sy.indexOf(A) !== -1;
}
function Ly(A, e, t) {
  if (A === "YYYY")
    throw new RangeError("Use `yyyy` instead of `YYYY` (in `".concat(e, "`) for formatting years to the input `").concat(t, "`; see: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md"));
  if (A === "YY")
    throw new RangeError("Use `yy` instead of `YY` (in `".concat(e, "`) for formatting years to the input `").concat(t, "`; see: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md"));
  if (A === "D")
    throw new RangeError("Use `d` instead of `D` (in `".concat(e, "`) for formatting days of the month to the input `").concat(t, "`; see: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md"));
  if (A === "DD")
    throw new RangeError("Use `dd` instead of `DD` (in `".concat(e, "`) for formatting days of the month to the input `").concat(t, "`; see: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md"));
}
var Cc = { exports: {} }, Qc = { exports: {} }, Uc = { exports: {} };
(function(A, e) {
  Object.defineProperty(e, "__esModule", {
    value: !0
  }), e.default = void 0;
  var t = {
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
  }, r = function(i, s, o) {
    var u, l = t[i];
    return typeof l == "string" ? u = l : s === 1 ? u = l.one : u = l.other.replace("{{count}}", s.toString()), o != null && o.addSuffix ? o.comparison && o.comparison > 0 ? "in " + u : u + " ago" : u;
  }, n = r;
  e.default = n, A.exports = e.default;
})(Uc, Uc.exports);
var Dy = Uc.exports, yc = { exports: {} }, Fc = { exports: {} };
(function(A, e) {
  Object.defineProperty(e, "__esModule", {
    value: !0
  }), e.default = t;
  function t(r) {
    return function() {
      var n = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {}, a = n.width ? String(n.width) : r.defaultWidth, i = r.formats[a] || r.formats[r.defaultWidth];
      return i;
    };
  }
  A.exports = e.default;
})(Fc, Fc.exports);
var Oy = Fc.exports;
(function(A, e) {
  var t = UA.default;
  Object.defineProperty(e, "__esModule", {
    value: !0
  }), e.default = void 0;
  var r = t(Oy), n = {
    full: "EEEE, MMMM do, y",
    long: "MMMM do, y",
    medium: "MMM d, y",
    short: "MM/dd/yyyy"
  }, a = {
    full: "h:mm:ss a zzzz",
    long: "h:mm:ss a z",
    medium: "h:mm:ss a",
    short: "h:mm a"
  }, i = {
    full: "{{date}} 'at' {{time}}",
    long: "{{date}} 'at' {{time}}",
    medium: "{{date}}, {{time}}",
    short: "{{date}}, {{time}}"
  }, s = {
    date: (0, r.default)({
      formats: n,
      defaultWidth: "full"
    }),
    time: (0, r.default)({
      formats: a,
      defaultWidth: "full"
    }),
    dateTime: (0, r.default)({
      formats: i,
      defaultWidth: "full"
    })
  }, o = s;
  e.default = o, A.exports = e.default;
})(yc, yc.exports);
var ky = yc.exports, Ec = { exports: {} };
(function(A, e) {
  Object.defineProperty(e, "__esModule", {
    value: !0
  }), e.default = void 0;
  var t = {
    lastWeek: "'last' eeee 'at' p",
    yesterday: "'yesterday at' p",
    today: "'today at' p",
    tomorrow: "'tomorrow at' p",
    nextWeek: "eeee 'at' p",
    other: "P"
  }, r = function(i, s, o, u) {
    return t[i];
  }, n = r;
  e.default = n, A.exports = e.default;
})(Ec, Ec.exports);
var My = Ec.exports, Ic = { exports: {} }, Hc = { exports: {} };
(function(A, e) {
  Object.defineProperty(e, "__esModule", {
    value: !0
  }), e.default = t;
  function t(r) {
    return function(n, a) {
      var i = a != null && a.context ? String(a.context) : "standalone", s;
      if (i === "formatting" && r.formattingValues) {
        var o = r.defaultFormattingWidth || r.defaultWidth, u = a != null && a.width ? String(a.width) : o;
        s = r.formattingValues[u] || r.formattingValues[o];
      } else {
        var l = r.defaultWidth, c = a != null && a.width ? String(a.width) : r.defaultWidth;
        s = r.values[c] || r.values[l];
      }
      var g = r.argumentCallback ? r.argumentCallback(n) : n;
      return s[g];
    };
  }
  A.exports = e.default;
})(Hc, Hc.exports);
var Ky = Hc.exports;
(function(A, e) {
  var t = UA.default;
  Object.defineProperty(e, "__esModule", {
    value: !0
  }), e.default = void 0;
  var r = t(Ky), n = {
    narrow: ["B", "A"],
    abbreviated: ["BC", "AD"],
    wide: ["Before Christ", "Anno Domini"]
  }, a = {
    narrow: ["1", "2", "3", "4"],
    abbreviated: ["Q1", "Q2", "Q3", "Q4"],
    wide: ["1st quarter", "2nd quarter", "3rd quarter", "4th quarter"]
  }, i = {
    narrow: ["J", "F", "M", "A", "M", "J", "J", "A", "S", "O", "N", "D"],
    abbreviated: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
    wide: ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"]
  }, s = {
    narrow: ["S", "M", "T", "W", "T", "F", "S"],
    short: ["Su", "Mo", "Tu", "We", "Th", "Fr", "Sa"],
    abbreviated: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
    wide: ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"]
  }, o = {
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
  }, u = {
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
  }, l = function(p, C) {
    var Q = Number(p), d = Q % 100;
    if (d > 20 || d < 10)
      switch (d % 10) {
        case 1:
          return Q + "st";
        case 2:
          return Q + "nd";
        case 3:
          return Q + "rd";
      }
    return Q + "th";
  }, c = {
    ordinalNumber: l,
    era: (0, r.default)({
      values: n,
      defaultWidth: "wide"
    }),
    quarter: (0, r.default)({
      values: a,
      defaultWidth: "wide",
      argumentCallback: function(p) {
        return p - 1;
      }
    }),
    month: (0, r.default)({
      values: i,
      defaultWidth: "wide"
    }),
    day: (0, r.default)({
      values: s,
      defaultWidth: "wide"
    }),
    dayPeriod: (0, r.default)({
      values: o,
      defaultWidth: "wide",
      formattingValues: u,
      defaultFormattingWidth: "wide"
    })
  }, g = c;
  e.default = g, A.exports = e.default;
})(Ic, Ic.exports);
var by = Ic.exports, xc = { exports: {} }, Sc = { exports: {} };
(function(A, e) {
  Object.defineProperty(e, "__esModule", {
    value: !0
  }), e.default = t;
  function t(a) {
    return function(i) {
      var s = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, o = s.width, u = o && a.matchPatterns[o] || a.matchPatterns[a.defaultMatchWidth], l = i.match(u);
      if (!l)
        return null;
      var c = l[0], g = o && a.parsePatterns[o] || a.parsePatterns[a.defaultParseWidth], w = Array.isArray(g) ? n(g, function(Q) {
        return Q.test(c);
      }) : r(g, function(Q) {
        return Q.test(c);
      }), p;
      p = a.valueCallback ? a.valueCallback(w) : w, p = s.valueCallback ? s.valueCallback(p) : p;
      var C = i.slice(c.length);
      return {
        value: p,
        rest: C
      };
    };
  }
  function r(a, i) {
    for (var s in a)
      if (a.hasOwnProperty(s) && i(a[s]))
        return s;
  }
  function n(a, i) {
    for (var s = 0; s < a.length; s++)
      if (i(a[s]))
        return s;
  }
  A.exports = e.default;
})(Sc, Sc.exports);
var Ny = Sc.exports, Tc = { exports: {} };
(function(A, e) {
  Object.defineProperty(e, "__esModule", {
    value: !0
  }), e.default = t;
  function t(r) {
    return function(n) {
      var a = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, i = n.match(r.matchPattern);
      if (!i)
        return null;
      var s = i[0], o = n.match(r.parsePattern);
      if (!o)
        return null;
      var u = r.valueCallback ? r.valueCallback(o[0]) : o[0];
      u = a.valueCallback ? a.valueCallback(u) : u;
      var l = n.slice(s.length);
      return {
        value: u,
        rest: l
      };
    };
  }
  A.exports = e.default;
})(Tc, Tc.exports);
var Ry = Tc.exports;
(function(A, e) {
  var t = UA.default;
  Object.defineProperty(e, "__esModule", {
    value: !0
  }), e.default = void 0;
  var r = t(Ny), n = t(Ry), a = /^(\d+)(th|st|nd|rd)?/i, i = /\d+/i, s = {
    narrow: /^(b|a)/i,
    abbreviated: /^(b\.?\s?c\.?|b\.?\s?c\.?\s?e\.?|a\.?\s?d\.?|c\.?\s?e\.?)/i,
    wide: /^(before christ|before common era|anno domini|common era)/i
  }, o = {
    any: [/^b/i, /^(a|c)/i]
  }, u = {
    narrow: /^[1234]/i,
    abbreviated: /^q[1234]/i,
    wide: /^[1234](th|st|nd|rd)? quarter/i
  }, l = {
    any: [/1/i, /2/i, /3/i, /4/i]
  }, c = {
    narrow: /^[jfmasond]/i,
    abbreviated: /^(jan|feb|mar|apr|may|jun|jul|aug|sep|oct|nov|dec)/i,
    wide: /^(january|february|march|april|may|june|july|august|september|october|november|december)/i
  }, g = {
    narrow: [/^j/i, /^f/i, /^m/i, /^a/i, /^m/i, /^j/i, /^j/i, /^a/i, /^s/i, /^o/i, /^n/i, /^d/i],
    any: [/^ja/i, /^f/i, /^mar/i, /^ap/i, /^may/i, /^jun/i, /^jul/i, /^au/i, /^s/i, /^o/i, /^n/i, /^d/i]
  }, w = {
    narrow: /^[smtwf]/i,
    short: /^(su|mo|tu|we|th|fr|sa)/i,
    abbreviated: /^(sun|mon|tue|wed|thu|fri|sat)/i,
    wide: /^(sunday|monday|tuesday|wednesday|thursday|friday|saturday)/i
  }, p = {
    narrow: [/^s/i, /^m/i, /^t/i, /^w/i, /^t/i, /^f/i, /^s/i],
    any: [/^su/i, /^m/i, /^tu/i, /^w/i, /^th/i, /^f/i, /^sa/i]
  }, C = {
    narrow: /^(a|p|mi|n|(in the|at) (morning|afternoon|evening|night))/i,
    any: /^([ap]\.?\s?m\.?|midnight|noon|(in the|at) (morning|afternoon|evening|night))/i
  }, Q = {
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
  }, d = {
    ordinalNumber: (0, n.default)({
      matchPattern: a,
      parsePattern: i,
      valueCallback: function(h) {
        return parseInt(h, 10);
      }
    }),
    era: (0, r.default)({
      matchPatterns: s,
      defaultMatchWidth: "wide",
      parsePatterns: o,
      defaultParseWidth: "any"
    }),
    quarter: (0, r.default)({
      matchPatterns: u,
      defaultMatchWidth: "wide",
      parsePatterns: l,
      defaultParseWidth: "any",
      valueCallback: function(h) {
        return h + 1;
      }
    }),
    month: (0, r.default)({
      matchPatterns: c,
      defaultMatchWidth: "wide",
      parsePatterns: g,
      defaultParseWidth: "any"
    }),
    day: (0, r.default)({
      matchPatterns: w,
      defaultMatchWidth: "wide",
      parsePatterns: p,
      defaultParseWidth: "any"
    }),
    dayPeriod: (0, r.default)({
      matchPatterns: C,
      defaultMatchWidth: "any",
      parsePatterns: Q,
      defaultParseWidth: "any"
    })
  }, f = d;
  e.default = f, A.exports = e.default;
})(xc, xc.exports);
var Py = xc.exports;
(function(A, e) {
  var t = UA.default;
  Object.defineProperty(e, "__esModule", {
    value: !0
  }), e.default = void 0;
  var r = t(Dy), n = t(ky), a = t(My), i = t(by), s = t(Py), o = {
    code: "en-US",
    formatDistance: r.default,
    formatLong: n.default,
    formatRelative: a.default,
    localize: i.default,
    match: s.default,
    options: {
      weekStartsOn: 0,
      firstWeekContainsDate: 1
    }
  }, u = o;
  e.default = u, A.exports = e.default;
})(Qc, Qc.exports);
var Vy = Qc.exports;
(function(A, e) {
  var t = UA.default;
  Object.defineProperty(e, "__esModule", {
    value: !0
  }), e.default = void 0;
  var r = t(Vy), n = r.default;
  e.default = n, A.exports = e.default;
})(Cc, Cc.exports);
var Gy = Cc.exports;
(function(A, e) {
  var t = UA.default;
  Object.defineProperty(e, "__esModule", {
    value: !0
  }), e.default = B;
  var r = t(gy), n = t(wy), a = t(it), i = t(Iy), s = t(Hy), o = t(Dw), u = li, l = t(br), c = t(ce), g = Nr, w = t(Gy), p = /[yYQqMLwIdDecihHKkms]o|(\w)\1*|''|'(''|[^'])+('|$)|./g, C = /P+p+|P+|p+|''|'(''|[^'])+('|$)|./g, Q = /^'([^]*?)'?$/, d = /''/g, f = /[a-zA-Z]/;
  function B(m, v, U) {
    var y, E, x, Y, AA, b, R, eA, z, tA, H, O, k, G, X, hA, yA, FA;
    (0, c.default)(2, arguments);
    var DA = String(v), OA = (0, g.getDefaultOptions)(), fr = (y = (E = U == null ? void 0 : U.locale) !== null && E !== void 0 ? E : OA.locale) !== null && y !== void 0 ? y : w.default, kn = (0, l.default)((x = (Y = (AA = (b = U == null ? void 0 : U.firstWeekContainsDate) !== null && b !== void 0 ? b : U == null || (R = U.locale) === null || R === void 0 || (eA = R.options) === null || eA === void 0 ? void 0 : eA.firstWeekContainsDate) !== null && AA !== void 0 ? AA : OA.firstWeekContainsDate) !== null && Y !== void 0 ? Y : (z = OA.locale) === null || z === void 0 || (tA = z.options) === null || tA === void 0 ? void 0 : tA.firstWeekContainsDate) !== null && x !== void 0 ? x : 1);
    if (!(kn >= 1 && kn <= 7))
      throw new RangeError("firstWeekContainsDate must be between 1 and 7 inclusively");
    var ut = (0, l.default)((H = (O = (k = (G = U == null ? void 0 : U.weekStartsOn) !== null && G !== void 0 ? G : U == null || (X = U.locale) === null || X === void 0 || (hA = X.options) === null || hA === void 0 ? void 0 : hA.weekStartsOn) !== null && k !== void 0 ? k : OA.weekStartsOn) !== null && O !== void 0 ? O : (yA = OA.locale) === null || yA === void 0 || (FA = yA.options) === null || FA === void 0 ? void 0 : FA.weekStartsOn) !== null && H !== void 0 ? H : 0);
    if (!(ut >= 0 && ut <= 6))
      throw new RangeError("weekStartsOn must be between 0 and 6 inclusively");
    if (!fr.localize)
      throw new RangeError("locale must contain localize property");
    if (!fr.formatLong)
      throw new RangeError("locale must contain formatLong property");
    var dr = (0, a.default)(m);
    if (!(0, r.default)(dr))
      throw new RangeError("Invalid time value");
    var sA = (0, o.default)(dr), oA = (0, n.default)(dr, sA), bA = {
      firstWeekContainsDate: kn,
      weekStartsOn: ut,
      locale: fr,
      _originalDate: dr
    }, pA = DA.match(C).map(function(dA) {
      var ee = dA[0];
      if (ee === "p" || ee === "P") {
        var EA = s.default[ee];
        return EA(dA, fr.formatLong);
      }
      return dA;
    }).join("").match(p).map(function(dA) {
      if (dA === "''")
        return "'";
      var ee = dA[0];
      if (ee === "'")
        return h(dA);
      var EA = i.default[ee];
      if (EA)
        return !(U != null && U.useAdditionalWeekYearTokens) && (0, u.isProtectedWeekYearToken)(dA) && (0, u.throwProtectedError)(dA, v, String(m)), !(U != null && U.useAdditionalDayOfYearTokens) && (0, u.isProtectedDayOfYearToken)(dA) && (0, u.throwProtectedError)(dA, v, String(m)), EA(oA, dA, fr.localize, bA);
      if (ee.match(f))
        throw new RangeError("Format string contains an unescaped latin alphabet character `" + ee + "`");
      return dA;
    }).join("");
    return pA;
  }
  function h(m) {
    var v = m.match(Q);
    return v ? v[1].replace(d, "'") : m;
  }
  A.exports = e.default;
})(ql, ql.exports);
var Wy = ql.exports;
const Yy = /* @__PURE__ */ ri(Wy);
function DB(A, e, t) {
  var r = jy(A, t.timeZone, t.locale);
  return r.formatToParts ? Xy(r, e) : Zy(r, e);
}
function Xy(A, e) {
  for (var t = A.formatToParts(e), r = t.length - 1; r >= 0; --r)
    if (t[r].type === "timeZoneName")
      return t[r].value;
}
function Zy(A, e) {
  var t = A.format(e).replace(/\u200E/g, ""), r = / [\w-+ ]+$/.exec(t);
  return r ? r[0].substr(1) : "";
}
function jy(A, e, t) {
  if (t && !t.code)
    throw new Error(
      "date-fns-tz error: Please set a language code on the locale object imported from date-fns, e.g. `locale.code = 'en-US'`"
    );
  return new Intl.DateTimeFormat(t ? [t.code, "en-US"] : void 0, {
    timeZone: e,
    timeZoneName: A
  });
}
function zy(A, e) {
  var t = AF(e);
  return t.formatToParts ? $y(t, A) : qy(t, A);
}
var Jy = {
  year: 0,
  month: 1,
  day: 2,
  hour: 3,
  minute: 4,
  second: 5
};
function $y(A, e) {
  try {
    for (var t = A.formatToParts(e), r = [], n = 0; n < t.length; n++) {
      var a = Jy[t[n].type];
      a >= 0 && (r[a] = parseInt(t[n].value, 10));
    }
    return r;
  } catch (i) {
    if (i instanceof RangeError)
      return [NaN];
    throw i;
  }
}
function qy(A, e) {
  var t = A.format(e).replace(/\u200E/g, ""), r = /(\d+)\/(\d+)\/(\d+),? (\d+):(\d+):(\d+)/.exec(t);
  return [r[3], r[1], r[2], r[4], r[5], r[6]];
}
var yu = {};
function AF(A) {
  if (!yu[A]) {
    var e = new Intl.DateTimeFormat("en-US", {
      hour12: !1,
      timeZone: "America/New_York",
      year: "numeric",
      month: "numeric",
      day: "2-digit",
      hour: "2-digit",
      minute: "2-digit",
      second: "2-digit"
    }).format(/* @__PURE__ */ new Date("2014-06-25T04:00:00.123Z")), t = e === "06/25/2014, 00:00:00" || e === "‎06‎/‎25‎/‎2014‎ ‎00‎:‎00‎:‎00";
    yu[A] = t ? new Intl.DateTimeFormat("en-US", {
      hour12: !1,
      timeZone: A,
      year: "numeric",
      month: "numeric",
      day: "2-digit",
      hour: "2-digit",
      minute: "2-digit",
      second: "2-digit"
    }) : new Intl.DateTimeFormat("en-US", {
      hourCycle: "h23",
      timeZone: A,
      year: "numeric",
      month: "numeric",
      day: "2-digit",
      hour: "2-digit",
      minute: "2-digit",
      second: "2-digit"
    });
  }
  return yu[A];
}
function Ow(A, e, t, r, n, a, i) {
  var s = /* @__PURE__ */ new Date(0);
  return s.setUTCFullYear(A, e, t), s.setUTCHours(r, n, a, i), s;
}
var OB = 36e5, eF = 6e4, Fu = {
  timezone: /([Z+-].*)$/,
  timezoneZ: /^(Z)$/,
  timezoneHH: /^([+-]\d{2})$/,
  timezoneHHMM: /^([+-]\d{2}):?(\d{2})$/
};
function rd(A, e, t) {
  var r, n;
  if (!A || (r = Fu.timezoneZ.exec(A), r))
    return 0;
  var a;
  if (r = Fu.timezoneHH.exec(A), r)
    return a = parseInt(r[1], 10), kB(a) ? -(a * OB) : NaN;
  if (r = Fu.timezoneHHMM.exec(A), r) {
    a = parseInt(r[1], 10);
    var i = parseInt(r[2], 10);
    return kB(a, i) ? (n = Math.abs(a) * OB + i * eF, a > 0 ? -n : n) : NaN;
  }
  if (nF(A)) {
    e = new Date(e || Date.now());
    var s = t ? e : tF(e), o = _c(s, A), u = t ? o : rF(e, o, A);
    return -u;
  }
  return NaN;
}
function tF(A) {
  return Ow(
    A.getFullYear(),
    A.getMonth(),
    A.getDate(),
    A.getHours(),
    A.getMinutes(),
    A.getSeconds(),
    A.getMilliseconds()
  );
}
function _c(A, e) {
  var t = zy(A, e), r = Ow(
    t[0],
    t[1] - 1,
    t[2],
    t[3] % 24,
    t[4],
    t[5],
    0
  ).getTime(), n = A.getTime(), a = n % 1e3;
  return n -= a >= 0 ? a : 1e3 + a, r - n;
}
function rF(A, e, t) {
  var r = A.getTime(), n = r - e, a = _c(new Date(n), t);
  if (e === a)
    return e;
  n -= a - e;
  var i = _c(new Date(n), t);
  return a === i ? a : Math.max(a, i);
}
function kB(A, e) {
  return -23 <= A && A <= 23 && (e == null || 0 <= e && e <= 59);
}
var MB = {};
function nF(A) {
  if (MB[A])
    return !0;
  try {
    return new Intl.DateTimeFormat(void 0, { timeZone: A }), MB[A] = !0, !0;
  } catch {
    return !1;
  }
}
var aF = 60 * 1e3, iF = {
  // Timezone (ISO-8601. If offset is 0, output is always `'Z'`)
  X: function(A, e, t, r) {
    var n = Eu(r.timeZone, r._originalDate || A);
    if (n === 0)
      return "Z";
    switch (e) {
      case "X":
        return KB(n);
      case "XXXX":
      case "XX":
        return zr(n);
      case "XXXXX":
      case "XXX":
      default:
        return zr(n, ":");
    }
  },
  // Timezone (ISO-8601. If offset is 0, output is `'+00:00'` or equivalent)
  x: function(A, e, t, r) {
    var n = Eu(r.timeZone, r._originalDate || A);
    switch (e) {
      case "x":
        return KB(n);
      case "xxxx":
      case "xx":
        return zr(n);
      case "xxxxx":
      case "xxx":
      default:
        return zr(n, ":");
    }
  },
  // Timezone (GMT)
  O: function(A, e, t, r) {
    var n = Eu(r.timeZone, r._originalDate || A);
    switch (e) {
      case "O":
      case "OO":
      case "OOO":
        return "GMT" + sF(n, ":");
      case "OOOO":
      default:
        return "GMT" + zr(n, ":");
    }
  },
  // Timezone (specific non-location)
  z: function(A, e, t, r) {
    var n = r._originalDate || A;
    switch (e) {
      case "z":
      case "zz":
      case "zzz":
        return DB("short", n, r);
      case "zzzz":
      default:
        return DB("long", n, r);
    }
  }
};
function Eu(A, e) {
  var t = A ? rd(A, e, !0) / aF : e.getTimezoneOffset();
  if (Number.isNaN(t))
    throw new RangeError("Invalid time zone specified: " + A);
  return t;
}
function Ao(A, e) {
  for (var t = A < 0 ? "-" : "", r = Math.abs(A).toString(); r.length < e; )
    r = "0" + r;
  return t + r;
}
function zr(A, e) {
  var t = e || "", r = A > 0 ? "-" : "+", n = Math.abs(A), a = Ao(Math.floor(n / 60), 2), i = Ao(Math.floor(n % 60), 2);
  return r + a + t + i;
}
function KB(A, e) {
  if (A % 60 === 0) {
    var t = A > 0 ? "-" : "+";
    return t + Ao(Math.abs(A) / 60, 2);
  }
  return zr(A, e);
}
function sF(A, e) {
  var t = A > 0 ? "-" : "+", r = Math.abs(A), n = Math.floor(r / 60), a = r % 60;
  if (a === 0)
    return t + String(n);
  var i = e || "";
  return t + String(n) + i + Ao(a, 2);
}
var oF = /(Z|[+-]\d{2}(?::?\d{2})?| UTC| [a-zA-Z]+\/[a-zA-Z_]+(?:\/[a-zA-Z_]+)?)$/, Iu = 36e5, bB = 6e4, uF = 2, ae = {
  dateTimePattern: /^([0-9W+-]+)(T| )(.*)/,
  datePattern: /^([0-9W+-]+)(.*)/,
  plainTime: /:/,
  // year tokens
  YY: /^(\d{2})$/,
  YYY: [
    /^([+-]\d{2})$/,
    // 0 additional digits
    /^([+-]\d{3})$/,
    // 1 additional digit
    /^([+-]\d{4})$/
    // 2 additional digits
  ],
  YYYY: /^(\d{4})/,
  YYYYY: [
    /^([+-]\d{4})/,
    // 0 additional digits
    /^([+-]\d{5})/,
    // 1 additional digit
    /^([+-]\d{6})/
    // 2 additional digits
  ],
  // date tokens
  MM: /^-(\d{2})$/,
  DDD: /^-?(\d{3})$/,
  MMDD: /^-?(\d{2})-?(\d{2})$/,
  Www: /^-?W(\d{2})$/,
  WwwD: /^-?W(\d{2})-?(\d{1})$/,
  HH: /^(\d{2}([.,]\d*)?)$/,
  HHMM: /^(\d{2}):?(\d{2}([.,]\d*)?)$/,
  HHMMSS: /^(\d{2}):?(\d{2}):?(\d{2}([.,]\d*)?)$/,
  // time zone tokens (to identify the presence of a tz)
  timeZone: oF
};
function kw(A, e) {
  if (arguments.length < 1)
    throw new TypeError("1 argument required, but only " + arguments.length + " present");
  if (A === null)
    return /* @__PURE__ */ new Date(NaN);
  var t = e || {}, r = t.additionalDigits == null ? uF : hy(t.additionalDigits);
  if (r !== 2 && r !== 1 && r !== 0)
    throw new RangeError("additionalDigits must be 0, 1 or 2");
  if (A instanceof Date || typeof A == "object" && Object.prototype.toString.call(A) === "[object Date]")
    return new Date(A.getTime());
  if (typeof A == "number" || Object.prototype.toString.call(A) === "[object Number]")
    return new Date(A);
  if (!(typeof A == "string" || Object.prototype.toString.call(A) === "[object String]"))
    return /* @__PURE__ */ new Date(NaN);
  var n = lF(A), a = cF(n.date, r), i = a.year, s = a.restDateString, o = fF(s, i);
  if (isNaN(o))
    return /* @__PURE__ */ new Date(NaN);
  if (o) {
    var u = o.getTime(), l = 0, c;
    if (n.time && (l = dF(n.time), isNaN(l)))
      return /* @__PURE__ */ new Date(NaN);
    if (n.timeZone || t.timeZone) {
      if (c = rd(n.timeZone || t.timeZone, new Date(u + l)), isNaN(c))
        return /* @__PURE__ */ new Date(NaN);
    } else
      c = LB(new Date(u + l)), c = LB(new Date(u + l + c));
    return new Date(u + l + c);
  } else
    return /* @__PURE__ */ new Date(NaN);
}
function lF(A) {
  var e = {}, t = ae.dateTimePattern.exec(A), r;
  if (t ? (e.date = t[1], r = t[3]) : (t = ae.datePattern.exec(A), t ? (e.date = t[1], r = t[2]) : (e.date = null, r = A)), r) {
    var n = ae.timeZone.exec(r);
    n ? (e.time = r.replace(n[1], ""), e.timeZone = n[1].trim()) : e.time = r;
  }
  return e;
}
function cF(A, e) {
  var t = ae.YYY[e], r = ae.YYYYY[e], n;
  if (n = ae.YYYY.exec(A) || r.exec(A), n) {
    var a = n[1];
    return {
      year: parseInt(a, 10),
      restDateString: A.slice(a.length)
    };
  }
  if (n = ae.YY.exec(A) || t.exec(A), n) {
    var i = n[1];
    return {
      year: parseInt(i, 10) * 100,
      restDateString: A.slice(i.length)
    };
  }
  return {
    year: null
  };
}
function fF(A, e) {
  if (e === null)
    return null;
  var t, r, n, a;
  if (A.length === 0)
    return r = /* @__PURE__ */ new Date(0), r.setUTCFullYear(e), r;
  if (t = ae.MM.exec(A), t)
    return r = /* @__PURE__ */ new Date(0), n = parseInt(t[1], 10) - 1, RB(e, n) ? (r.setUTCFullYear(e, n), r) : /* @__PURE__ */ new Date(NaN);
  if (t = ae.DDD.exec(A), t) {
    r = /* @__PURE__ */ new Date(0);
    var i = parseInt(t[1], 10);
    return hF(e, i) ? (r.setUTCFullYear(e, 0, i), r) : /* @__PURE__ */ new Date(NaN);
  }
  if (t = ae.MMDD.exec(A), t) {
    r = /* @__PURE__ */ new Date(0), n = parseInt(t[1], 10) - 1;
    var s = parseInt(t[2], 10);
    return RB(e, n, s) ? (r.setUTCFullYear(e, n, s), r) : /* @__PURE__ */ new Date(NaN);
  }
  if (t = ae.Www.exec(A), t)
    return a = parseInt(t[1], 10) - 1, PB(e, a) ? NB(e, a) : /* @__PURE__ */ new Date(NaN);
  if (t = ae.WwwD.exec(A), t) {
    a = parseInt(t[1], 10) - 1;
    var o = parseInt(t[2], 10) - 1;
    return PB(e, a, o) ? NB(e, a, o) : /* @__PURE__ */ new Date(NaN);
  }
  return null;
}
function dF(A) {
  var e, t, r;
  if (e = ae.HH.exec(A), e)
    return t = parseFloat(e[1].replace(",", ".")), Hu(t) ? t % 24 * Iu : NaN;
  if (e = ae.HHMM.exec(A), e)
    return t = parseInt(e[1], 10), r = parseFloat(e[2].replace(",", ".")), Hu(t, r) ? t % 24 * Iu + r * bB : NaN;
  if (e = ae.HHMMSS.exec(A), e) {
    t = parseInt(e[1], 10), r = parseInt(e[2], 10);
    var n = parseFloat(e[3].replace(",", "."));
    return Hu(t, r, n) ? t % 24 * Iu + r * bB + n * 1e3 : NaN;
  }
  return null;
}
function NB(A, e, t) {
  e = e || 0, t = t || 0;
  var r = /* @__PURE__ */ new Date(0);
  r.setUTCFullYear(A, 0, 4);
  var n = r.getUTCDay() || 7, a = e * 7 + t + 1 - n;
  return r.setUTCDate(r.getUTCDate() + a), r;
}
var BF = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31], gF = [31, 29, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
function Mw(A) {
  return A % 400 === 0 || A % 4 === 0 && A % 100 !== 0;
}
function RB(A, e, t) {
  if (e < 0 || e > 11)
    return !1;
  if (t != null) {
    if (t < 1)
      return !1;
    var r = Mw(A);
    if (r && t > gF[e] || !r && t > BF[e])
      return !1;
  }
  return !0;
}
function hF(A, e) {
  if (e < 1)
    return !1;
  var t = Mw(A);
  return !(t && e > 366 || !t && e > 365);
}
function PB(A, e, t) {
  return !(e < 0 || e > 52 || t != null && (t < 0 || t > 6));
}
function Hu(A, e, t) {
  return !(A != null && (A < 0 || A >= 25) || e != null && (e < 0 || e >= 60) || t != null && (t < 0 || t >= 60));
}
var pF = /([xXOz]+)|''|'(''|[^'])+('|$)/g;
function wF(A, e, t) {
  var r = String(e), n = t || {}, a = r.match(pF);
  if (a) {
    var i = kw(A, n);
    r = a.reduce(function(s, o) {
      if (o[0] === "'")
        return s;
      var u = s.indexOf(o), l = s[u - 1] === "'", c = s.replace(
        o,
        "'" + iF[o[0]](i, o, null, n) + "'"
      );
      return l ? c.substring(0, u - 1) + c.substring(u + 1) : c;
    }, r);
  }
  return Yy(A, r, n);
}
var Lc = { exports: {} }, Dc = { exports: {} };
(function(A, e) {
  Object.defineProperty(e, "__esModule", {
    value: !0
  }), e.default = t;
  function t(r, n) {
    if (r == null)
      throw new TypeError("assign requires that input parameter not be null or undefined");
    for (var a in n)
      Object.prototype.hasOwnProperty.call(n, a) && (r[a] = n[a]);
    return r;
  }
  A.exports = e.default;
})(Dc, Dc.exports);
var vF = Dc.exports;
(function(A, e) {
  var t = UA.default;
  Object.defineProperty(e, "__esModule", {
    value: !0
  }), e.default = n;
  var r = t(vF);
  function n(a) {
    return (0, r.default)({}, a);
  }
  A.exports = e.default;
})(Lc, Lc.exports);
var mF = Lc.exports;
const CF = /* @__PURE__ */ ri(mF);
function QF(A, e, t) {
  var r = kw(A, t), n = rd(e, r, !0), a = new Date(r.getTime() - n), i = /* @__PURE__ */ new Date(0);
  return i.setFullYear(a.getUTCFullYear(), a.getUTCMonth(), a.getUTCDate()), i.setHours(a.getUTCHours(), a.getUTCMinutes(), a.getUTCSeconds(), a.getUTCMilliseconds()), i;
}
function UF(A, e, t, r) {
  var n = CF(r);
  return n.timeZone = e, wF(QF(A, e), t, n);
}
const yF = "Europe/Helsinki", VB = (A) => {
  const e = new Date(A);
  return fy(e, "d.M.yyyy");
}, FF = (A) => UF(A, yF, "d.M.yyyy HH:mm"), xu = ({
  status: A,
  samvirkGoalPerSprint: e,
  mode: t
}) => {
  switch (!0) {
    case "OnTrackCount" in A:
      return ((t === "statusNow" ? A.OnTrackOnDateCount : A.OnTrackCount) / A.MemberCount * 100).toLocaleString("fi-FI", { maximumFractionDigits: 1 }) + "%";
    case ("ContributionAmount" in A && "MemberCount" in A):
      return (A.ContributionAmount / ((e || 200) * A.MemberCount) * 100).toLocaleString("fi-FI", { maximumFractionDigits: 1 }) + "%";
    default:
      return A.ContributionAmount.toLocaleString("fi-FI", {
        maximumFractionDigits: 1
      }) + "€";
  }
}, EF = ({
  team: A,
  samvirkGoalPerSprint: e,
  mode: t
}) => {
  const r = A.AHStatus.ContributionAmount, n = (t === "statusNow" ? A.BUKStatus.OnTrackOnDateCount : A.BUKStatus.OnTrackCount) / A.BUKStatus.MemberCount, a = A.SamvirkStatus.ContributionAmount / ((e || 200) * A.SamvirkStatus.MemberCount);
  return (r * n * a).toLocaleString("fi-FI", { maximumFractionDigits: 1 }) + "p";
}, IF = "data:image/svg+xml,%3csvg%20width='328'%20height='145'%20viewBox='0%200%20328%20145'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20d='M0.707031%2045.81L142.59%2021.2011L151.585%2024.3149V19.1253L258.172%200L325.896%2032.7566L327.705%2047.699L282.016%20100.083L255.722%20105.618L239.116%20100.429L235.31%20108.386L29.3534%20145L14.84%20125.688L7.49499%2084.4827L10.7679%2074.235L4.44352%2074.6848L0.707031%2045.81Z'%20fill='black'/%3e%3cpath%20d='M15.9367%2066.6666L11.1727%2083.4531L18.3101%20123.499L29.2877%20130.934L230.467%2093.8565L234.272%2085.8991L254.339%2091.4347L272.675%2086.2451L317.305%2035.3873L255.325%205.11138L155.194%2022.7801L155.045%2030.5437L141.389%2025.2158L5.15625%2049.2573L8.29767%2067.2098L15.9367%2066.6666Z'%20fill='%23FFFF00'/%3e%3cpath%20d='M106.215%2048.601L94.7594%20102.496L75.1463%20105.956L69.2579%2077.538L63.4905%20108.011L43.8774%20111.471L32.3047%2061.6337L49.2884%2058.6376L53.8795%2090.5085L60.657%2056.6345L77.8518%2053.6003L84.6501%2085.0802L89.2239%2051.5937L106.215%2048.601Z'%20fill='black'/%3e%3cpath%20d='M143.793%2043.9891C147.63%2045.2415%20150.768%2047.4004%20153.214%2050.4622C155.657%2053.5241%20157.272%2057.2813%20158.061%2061.734C158.386%2063.5814%20158.559%2065.678%20158.583%2068.0168C158.57%2072.6597%20157.639%2076.9394%20155.791%2080.8558C153.94%2084.7722%20151.256%2088.0416%20147.737%2090.6641C144.219%2093.29%20140.022%2095.0302%20135.14%2095.8883C130.214%2096.7566%20125.834%2096.5767%20122%2095.3485C118.167%2094.1169%20115.043%2091.9857%20112.628%2088.9411C110.21%2085.8966%20108.608%2082.1497%20107.826%2077.6971C107.418%2075.3756%20107.227%2073.2133%20107.266%2071.1997C107.279%2066.5568%20108.22%2062.291%20110.099%2058.3919C111.978%2054.4928%20114.687%2051.2337%20118.229%2048.6044C121.772%2045.9784%20125.983%2044.2313%20130.864%2043.3733C135.646%2042.5326%20139.956%2042.7367%20143.793%2043.9891ZM125.398%2062.2529C123.786%2064.4671%20122.983%2067.2591%20122.99%2070.6289C122.966%2071.608%20123.052%2072.6459%20123.246%2073.7357C123.73%2076.4827%20124.855%2078.5067%20126.626%2079.8075C128.394%2081.1084%20130.747%2081.4993%20133.684%2080.9803C136.621%2080.4614%20138.908%2079.0844%20140.538%2076.8425C142.171%2074.6041%20142.966%2071.8467%20142.928%2068.5842C142.942%2067.5532%20142.852%2066.498%20142.662%2065.4082C142.171%2062.6127%20141.039%2060.575%20139.275%2059.2983C137.514%2058.0217%20135.185%2057.6377%20132.297%2058.1462C129.311%2058.6721%20127.01%2060.0422%20125.398%2062.2529Z'%20fill='black'/%3e%3cpath%20d='M200.34%2035.773C203.589%2037.7174%20205.568%2040.6996%20206.28%2044.7267C206.481%2045.865%20206.571%2046.9237%20206.547%2047.9062C206.533%2051.4247%20205.581%2054.6838%20203.689%2057.6799C201.8%2060.676%20199.108%2063.0667%20195.61%2064.8553L206.612%2082.7732L189.272%2085.8316L179.692%2068.9101L179.748%2087.513L163.971%2090.2946L163.913%2038.4266L187.366%2034.2923C192.767%2033.3374%20197.091%2033.8321%20200.34%2035.773ZM179.689%2058.0639L185.944%2056.9603C189.023%2056.4171%20190.549%2054.6838%20190.521%2051.7569C190.525%2051.5112%20190.497%2051.1999%20190.431%2050.8193C190.248%2049.7779%20189.784%2049.0168%20189.04%2048.5359C188.297%2048.055%20187.283%2047.9304%20186.006%2048.1553L179.751%2049.259L179.689%2058.0639Z'%20fill='black'/%3e%3cpath%20d='M242.344%2049.8035L260.975%2073.1911L242.001%2076.5367L227.353%2056.6191L227.363%2079.1142L211.587%2081.8958L211.528%2030.0278L227.305%2027.2461L227.357%2049.1461L242.085%2024.641L260.916%2021.3197L242.344%2049.8035Z'%20fill='black'/%3e%3c/svg%3e", HF = "_app_bzrmw_1", xF = "_workLogoWrapper_bzrmw_10", SF = "_workLogo_bzrmw_10", TF = "_reports_bzrmw_20", _F = "_report_bzrmw_20", LF = "_reportTitle_bzrmw_32", DF = "_reportTable_bzrmw_44", OF = "_teamLogo_bzrmw_61", kF = "_teamGreen_bzrmw_113", MF = "_teamOrange_bzrmw_117", KF = "_teamRed_bzrmw_121", bF = "_teamBlue_bzrmw_125", NF = "_screenshotWrapper_bzrmw_129", RF = "_explanation_bzrmw_138", Se = {
  app: HF,
  workLogoWrapper: xF,
  workLogo: SF,
  reports: TF,
  report: _F,
  reportTitle: LF,
  reportTable: DF,
  teamLogo: OF,
  teamGreen: kF,
  teamOrange: MF,
  teamRed: KF,
  teamBlue: bF,
  screenshotWrapper: NF,
  explanation: RF
}, PF = {
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
};
/*!
 * html2canvas 1.4.1 <https://html2canvas.hertzen.com>
 * Copyright (c) 2022 Niklas von Hertzen <https://hertzen.com>
 * Released under MIT License
 */
/*! *****************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */
var Oc = function(A, e) {
  return Oc = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(t, r) {
    t.__proto__ = r;
  } || function(t, r) {
    for (var n in r)
      Object.prototype.hasOwnProperty.call(r, n) && (t[n] = r[n]);
  }, Oc(A, e);
};
function ze(A, e) {
  if (typeof e != "function" && e !== null)
    throw new TypeError("Class extends value " + String(e) + " is not a constructor or null");
  Oc(A, e);
  function t() {
    this.constructor = A;
  }
  A.prototype = e === null ? Object.create(e) : (t.prototype = e.prototype, new t());
}
var kc = function() {
  return kc = Object.assign || function(e) {
    for (var t, r = 1, n = arguments.length; r < n; r++) {
      t = arguments[r];
      for (var a in t)
        Object.prototype.hasOwnProperty.call(t, a) && (e[a] = t[a]);
    }
    return e;
  }, kc.apply(this, arguments);
};
function re(A, e, t, r) {
  function n(a) {
    return a instanceof t ? a : new t(function(i) {
      i(a);
    });
  }
  return new (t || (t = Promise))(function(a, i) {
    function s(l) {
      try {
        u(r.next(l));
      } catch (c) {
        i(c);
      }
    }
    function o(l) {
      try {
        u(r.throw(l));
      } catch (c) {
        i(c);
      }
    }
    function u(l) {
      l.done ? a(l.value) : n(l.value).then(s, o);
    }
    u((r = r.apply(A, e || [])).next());
  });
}
function zA(A, e) {
  var t = { label: 0, sent: function() {
    if (a[0] & 1)
      throw a[1];
    return a[1];
  }, trys: [], ops: [] }, r, n, a, i;
  return i = { next: s(0), throw: s(1), return: s(2) }, typeof Symbol == "function" && (i[Symbol.iterator] = function() {
    return this;
  }), i;
  function s(u) {
    return function(l) {
      return o([u, l]);
    };
  }
  function o(u) {
    if (r)
      throw new TypeError("Generator is already executing.");
    for (; t; )
      try {
        if (r = 1, n && (a = u[0] & 2 ? n.return : u[0] ? n.throw || ((a = n.return) && a.call(n), 0) : n.next) && !(a = a.call(n, u[1])).done)
          return a;
        switch (n = 0, a && (u = [u[0] & 2, a.value]), u[0]) {
          case 0:
          case 1:
            a = u;
            break;
          case 4:
            return t.label++, { value: u[1], done: !1 };
          case 5:
            t.label++, n = u[1], u = [0];
            continue;
          case 7:
            u = t.ops.pop(), t.trys.pop();
            continue;
          default:
            if (a = t.trys, !(a = a.length > 0 && a[a.length - 1]) && (u[0] === 6 || u[0] === 2)) {
              t = 0;
              continue;
            }
            if (u[0] === 3 && (!a || u[1] > a[0] && u[1] < a[3])) {
              t.label = u[1];
              break;
            }
            if (u[0] === 6 && t.label < a[1]) {
              t.label = a[1], a = u;
              break;
            }
            if (a && t.label < a[2]) {
              t.label = a[2], t.ops.push(u);
              break;
            }
            a[2] && t.ops.pop(), t.trys.pop();
            continue;
        }
        u = e.call(A, t);
      } catch (l) {
        u = [6, l], n = 0;
      } finally {
        r = a = 0;
      }
    if (u[0] & 5)
      throw u[1];
    return { value: u[0] ? u[1] : void 0, done: !0 };
  }
}
function _i(A, e, t) {
  if (t || arguments.length === 2)
    for (var r = 0, n = e.length, a; r < n; r++)
      (a || !(r in e)) && (a || (a = Array.prototype.slice.call(e, 0, r)), a[r] = e[r]);
  return A.concat(a || e);
}
var Ht = (
  /** @class */
  function() {
    function A(e, t, r, n) {
      this.left = e, this.top = t, this.width = r, this.height = n;
    }
    return A.prototype.add = function(e, t, r, n) {
      return new A(this.left + e, this.top + t, this.width + r, this.height + n);
    }, A.fromClientRect = function(e, t) {
      return new A(t.left + e.windowBounds.left, t.top + e.windowBounds.top, t.width, t.height);
    }, A.fromDOMRectList = function(e, t) {
      var r = Array.from(t).find(function(n) {
        return n.width !== 0;
      });
      return r ? new A(r.left + e.windowBounds.left, r.top + e.windowBounds.top, r.width, r.height) : A.EMPTY;
    }, A.EMPTY = new A(0, 0, 0, 0), A;
  }()
), _o = function(A, e) {
  return Ht.fromClientRect(A, e.getBoundingClientRect());
}, VF = function(A) {
  var e = A.body, t = A.documentElement;
  if (!e || !t)
    throw new Error("Unable to get document size");
  var r = Math.max(Math.max(e.scrollWidth, t.scrollWidth), Math.max(e.offsetWidth, t.offsetWidth), Math.max(e.clientWidth, t.clientWidth)), n = Math.max(Math.max(e.scrollHeight, t.scrollHeight), Math.max(e.offsetHeight, t.offsetHeight), Math.max(e.clientHeight, t.clientHeight));
  return new Ht(0, 0, r, n);
}, Lo = function(A) {
  for (var e = [], t = 0, r = A.length; t < r; ) {
    var n = A.charCodeAt(t++);
    if (n >= 55296 && n <= 56319 && t < r) {
      var a = A.charCodeAt(t++);
      (a & 64512) === 56320 ? e.push(((n & 1023) << 10) + (a & 1023) + 65536) : (e.push(n), t--);
    } else
      e.push(n);
  }
  return e;
}, SA = function() {
  for (var A = [], e = 0; e < arguments.length; e++)
    A[e] = arguments[e];
  if (String.fromCodePoint)
    return String.fromCodePoint.apply(String, A);
  var t = A.length;
  if (!t)
    return "";
  for (var r = [], n = -1, a = ""; ++n < t; ) {
    var i = A[n];
    i <= 65535 ? r.push(i) : (i -= 65536, r.push((i >> 10) + 55296, i % 1024 + 56320)), (n + 1 === t || r.length > 16384) && (a += String.fromCharCode.apply(String, r), r.length = 0);
  }
  return a;
}, GB = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/", GF = typeof Uint8Array > "u" ? [] : new Uint8Array(256);
for (var Li = 0; Li < GB.length; Li++)
  GF[GB.charCodeAt(Li)] = Li;
var WB = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/", ta = typeof Uint8Array > "u" ? [] : new Uint8Array(256);
for (var Di = 0; Di < WB.length; Di++)
  ta[WB.charCodeAt(Di)] = Di;
var WF = function(A) {
  var e = A.length * 0.75, t = A.length, r, n = 0, a, i, s, o;
  A[A.length - 1] === "=" && (e--, A[A.length - 2] === "=" && e--);
  var u = typeof ArrayBuffer < "u" && typeof Uint8Array < "u" && typeof Uint8Array.prototype.slice < "u" ? new ArrayBuffer(e) : new Array(e), l = Array.isArray(u) ? u : new Uint8Array(u);
  for (r = 0; r < t; r += 4)
    a = ta[A.charCodeAt(r)], i = ta[A.charCodeAt(r + 1)], s = ta[A.charCodeAt(r + 2)], o = ta[A.charCodeAt(r + 3)], l[n++] = a << 2 | i >> 4, l[n++] = (i & 15) << 4 | s >> 2, l[n++] = (s & 3) << 6 | o & 63;
  return u;
}, YF = function(A) {
  for (var e = A.length, t = [], r = 0; r < e; r += 2)
    t.push(A[r + 1] << 8 | A[r]);
  return t;
}, XF = function(A) {
  for (var e = A.length, t = [], r = 0; r < e; r += 4)
    t.push(A[r + 3] << 24 | A[r + 2] << 16 | A[r + 1] << 8 | A[r]);
  return t;
}, Er = 5, nd = 11, Su = 2, ZF = nd - Er, Kw = 65536 >> Er, jF = 1 << Er, Tu = jF - 1, zF = 1024 >> Er, JF = Kw + zF, $F = JF, qF = 32, AE = $F + qF, eE = 65536 >> nd, tE = 1 << ZF, rE = tE - 1, YB = function(A, e, t) {
  return A.slice ? A.slice(e, t) : new Uint16Array(Array.prototype.slice.call(A, e, t));
}, nE = function(A, e, t) {
  return A.slice ? A.slice(e, t) : new Uint32Array(Array.prototype.slice.call(A, e, t));
}, aE = function(A, e) {
  var t = WF(A), r = Array.isArray(t) ? XF(t) : new Uint32Array(t), n = Array.isArray(t) ? YF(t) : new Uint16Array(t), a = 24, i = YB(n, a / 2, r[4] / 2), s = r[5] === 2 ? YB(n, (a + r[4]) / 2) : nE(r, Math.ceil((a + r[4]) / 4));
  return new iE(r[0], r[1], r[2], r[3], i, s);
}, iE = (
  /** @class */
  function() {
    function A(e, t, r, n, a, i) {
      this.initialValue = e, this.errorValue = t, this.highStart = r, this.highValueIndex = n, this.index = a, this.data = i;
    }
    return A.prototype.get = function(e) {
      var t;
      if (e >= 0) {
        if (e < 55296 || e > 56319 && e <= 65535)
          return t = this.index[e >> Er], t = (t << Su) + (e & Tu), this.data[t];
        if (e <= 65535)
          return t = this.index[Kw + (e - 55296 >> Er)], t = (t << Su) + (e & Tu), this.data[t];
        if (e < this.highStart)
          return t = AE - eE + (e >> nd), t = this.index[t], t += e >> Er & rE, t = this.index[t], t = (t << Su) + (e & Tu), this.data[t];
        if (e <= 1114111)
          return this.data[this.highValueIndex];
      }
      return this.errorValue;
    }, A;
  }()
), XB = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/", sE = typeof Uint8Array > "u" ? [] : new Uint8Array(256);
for (var Oi = 0; Oi < XB.length; Oi++)
  sE[XB.charCodeAt(Oi)] = Oi;
var oE = "KwAAAAAAAAAACA4AUD0AADAgAAACAAAAAAAIABAAGABAAEgAUABYAGAAaABgAGgAYgBqAF8AZwBgAGgAcQB5AHUAfQCFAI0AlQCdAKIAqgCyALoAYABoAGAAaABgAGgAwgDKAGAAaADGAM4A0wDbAOEA6QDxAPkAAQEJAQ8BFwF1AH0AHAEkASwBNAE6AUIBQQFJAVEBWQFhAWgBcAF4ATAAgAGGAY4BlQGXAZ8BpwGvAbUBvQHFAc0B0wHbAeMB6wHxAfkBAQIJAvEBEQIZAiECKQIxAjgCQAJGAk4CVgJeAmQCbAJ0AnwCgQKJApECmQKgAqgCsAK4ArwCxAIwAMwC0wLbAjAA4wLrAvMC+AIAAwcDDwMwABcDHQMlAy0DNQN1AD0DQQNJA0kDSQNRA1EDVwNZA1kDdQB1AGEDdQBpA20DdQN1AHsDdQCBA4kDkQN1AHUAmQOhA3UAdQB1AHUAdQB1AHUAdQB1AHUAdQB1AHUAdQB1AHUAdQB1AKYDrgN1AHUAtgO+A8YDzgPWAxcD3gPjA+sD8wN1AHUA+wMDBAkEdQANBBUEHQQlBCoEFwMyBDgEYABABBcDSARQBFgEYARoBDAAcAQzAXgEgASIBJAEdQCXBHUAnwSnBK4EtgS6BMIEyAR1AHUAdQB1AHUAdQCVANAEYABgAGAAYABgAGAAYABgANgEYADcBOQEYADsBPQE/AQEBQwFFAUcBSQFLAU0BWQEPAVEBUsFUwVbBWAAYgVgAGoFcgV6BYIFigWRBWAAmQWfBaYFYABgAGAAYABgAKoFYACxBbAFuQW6BcEFwQXHBcEFwQXPBdMF2wXjBeoF8gX6BQIGCgYSBhoGIgYqBjIGOgZgAD4GRgZMBmAAUwZaBmAAYABgAGAAYABgAGAAYABgAGAAYABgAGIGYABpBnAGYABgAGAAYABgAGAAYABgAGAAYAB4Bn8GhQZgAGAAYAB1AHcDFQSLBmAAYABgAJMGdQA9A3UAmwajBqsGqwaVALMGuwbDBjAAywbSBtIG1QbSBtIG0gbSBtIG0gbdBuMG6wbzBvsGAwcLBxMHAwcbByMHJwcsBywHMQcsB9IGOAdAB0gHTgfSBkgHVgfSBtIG0gbSBtIG0gbSBtIG0gbSBiwHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAdgAGAALAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAdbB2MHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsB2kH0gZwB64EdQB1AHUAdQB1AHUAdQB1AHUHfQdgAIUHjQd1AHUAlQedB2AAYAClB6sHYACzB7YHvgfGB3UAzgfWBzMB3gfmB1EB7gf1B/0HlQENAQUIDQh1ABUIHQglCBcDLQg1CD0IRQhNCEEDUwh1AHUAdQBbCGMIZAhlCGYIZwhoCGkIYwhkCGUIZghnCGgIaQhjCGQIZQhmCGcIaAhpCGMIZAhlCGYIZwhoCGkIYwhkCGUIZghnCGgIaQhjCGQIZQhmCGcIaAhpCGMIZAhlCGYIZwhoCGkIYwhkCGUIZghnCGgIaQhjCGQIZQhmCGcIaAhpCGMIZAhlCGYIZwhoCGkIYwhkCGUIZghnCGgIaQhjCGQIZQhmCGcIaAhpCGMIZAhlCGYIZwhoCGkIYwhkCGUIZghnCGgIaQhjCGQIZQhmCGcIaAhpCGMIZAhlCGYIZwhoCGkIYwhkCGUIZghnCGgIaQhjCGQIZQhmCGcIaAhpCGMIZAhlCGYIZwhoCGkIYwhkCGUIZghnCGgIaQhjCGQIZQhmCGcIaAhpCGMIZAhlCGYIZwhoCGkIYwhkCGUIZghnCGgIaQhjCGQIZQhmCGcIaAhpCGMIZAhlCGYIZwhoCGkIYwhkCGUIZghnCGgIaQhjCGQIZQhmCGcIaAhpCGMIZAhlCGYIZwhoCGkIYwhkCGUIZghnCGgIaQhjCGQIZQhmCGcIaAhpCGMIZAhlCGYIZwhoCGkIYwhkCGUIZghnCGgIaQhjCGQIZQhmCGcIaAhpCGMIZAhlCGYIZwhoCGkIYwhkCGUIZghnCGgIaQhjCGQIZQhmCGcIaAhpCGMIZAhlCGYIZwhoCGkIYwhkCGUIZghnCGgIaQhjCGQIZQhmCGcIaAhpCGMIZAhlCGYIZwhoCGkIYwhkCGUIZghnCGgIaQhjCGQIZQhmCGcIaAhpCGMIZAhlCGYIZwhoCGkIYwhkCGUIZghnCGgIaQhjCGQIZQhmCGcIaAhpCGMIZAhlCGYIZwhoCGkIYwhkCGUIZghnCGgIaQhjCGQIZQhmCGcIaAhpCGMIZAhlCGYIZwhoCGkIYwhkCGUIZghnCGgIcAh3CHoIMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwAIIIggiCCIIIggiCCIIIggiCCIIIggiCCIIIggiCCIIIggiCCIIIggiCCIIIggiCCIIIggiCCIIIggiCCIIIgggwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAALAcsBywHLAcsBywHLAcsBywHLAcsB4oILAcsB44I0gaWCJ4Ipgh1AHUAqgiyCHUAdQB1AHUAdQB1AHUAdQB1AHUAtwh8AXUAvwh1AMUIyQjRCNkI4AjoCHUAdQB1AO4I9gj+CAYJDgkTCS0HGwkjCYIIggiCCIIIggiCCIIIggiCCIIIggiCCIIIggiCCIIIggiCCIIIggiCCIIIggiCCIIIggiCCIIIggiCCIIIggiAAIAAAAFAAYABgAGIAXwBgAHEAdQBFAJUAogCyAKAAYABgAEIA4ABGANMA4QDxAMEBDwE1AFwBLAE6AQEBUQF4QkhCmEKoQrhCgAHIQsAB0MLAAcABwAHAAeDC6ABoAHDCwMMAAcABwAHAAdDDGMMAAcAB6MM4wwjDWMNow3jDaABoAGgAaABoAGgAaABoAGgAaABoAGgAaABoAGgAaABoAGgAaABoAEjDqABWw6bDqABpg6gAaABoAHcDvwOPA+gAaABfA/8DvwO/A78DvwO/A78DvwO/A78DvwO/A78DvwO/A78DvwO/A78DvwO/A78DvwO/A78DvwO/A78DpcPAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcAB9cPKwkyCToJMAB1AHUAdQBCCUoJTQl1AFUJXAljCWcJawkwADAAMAAwAHMJdQB2CX4JdQCECYoJjgmWCXUAngkwAGAAYABxAHUApgn3A64JtAl1ALkJdQDACTAAMAAwADAAdQB1AHUAdQB1AHUAdQB1AHUAowYNBMUIMAAwADAAMADICcsJ0wnZCRUE4QkwAOkJ8An4CTAAMAB1AAAKvwh1AAgKDwoXCh8KdQAwACcKLgp1ADYKqAmICT4KRgowADAAdQB1AE4KMAB1AFYKdQBeCnUAZQowADAAMAAwADAAMAAwADAAMAAVBHUAbQowADAAdQC5CXUKMAAwAHwBxAijBogEMgF9CoQKiASMCpQKmgqIBKIKqgquCogEDQG2Cr4KxgrLCjAAMADTCtsKCgHjCusK8Qr5CgELMAAwADAAMAB1AIsECQsRC3UANAEZCzAAMAAwADAAMAB1ACELKQswAHUANAExCzkLdQBBC0kLMABRC1kLMAAwADAAMAAwADAAdQBhCzAAMAAwAGAAYABpC3ELdwt/CzAAMACHC4sLkwubC58Lpwt1AK4Ltgt1APsDMAAwADAAMAAwADAAMAAwAL4LwwvLC9IL1wvdCzAAMADlC+kL8Qv5C/8LSQswADAAMAAwADAAMAAwADAAMAAHDDAAMAAwADAAMAAODBYMHgx1AHUAdQB1AHUAdQB1AHUAdQB1AHUAdQB1AHUAdQB1AHUAdQB1AHUAdQB1AHUAdQB1AHUAdQB1ACYMMAAwADAAdQB1AHUALgx1AHUAdQB1AHUAdQA2DDAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwAHUAdQB1AHUAdQB1AHUAdQB1AHUAdQB1AHUAdQB1AHUAdQB1AD4MdQBGDHUAdQB1AHUAdQB1AEkMdQB1AHUAdQB1AFAMMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwAHUAdQB1AHUAdQB1AHUAdQB1AHUAdQB1AHUAdQBYDHUAdQB1AF8MMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAB1AHUAdQB1AHUAdQB1AHUAdQB1AHUAdQB1AHUAdQB1AHUA+wMVBGcMMAAwAHwBbwx1AHcMfwyHDI8MMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAYABgAJcMMAAwADAAdQB1AJ8MlQClDDAAMACtDCwHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsB7UMLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHdQB1AHUAdQB1AHUAdQB1AHUAdQB1AHUAdQB1AA0EMAC9DDAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAsBywHLAcsBywHLAcsBywHLQcwAMEMyAwsBywHLAcsBywHLAcsBywHLAcsBywHzAwwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwAHUAdQB1ANQM2QzhDDAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMABgAGAAYABgAGAAYABgAOkMYADxDGAA+AwADQYNYABhCWAAYAAODTAAMAAwADAAFg1gAGAAHg37AzAAMAAwADAAYABgACYNYAAsDTQNPA1gAEMNPg1LDWAAYABgAGAAYABgAGAAYABgAGAAUg1aDYsGVglhDV0NcQBnDW0NdQ15DWAAYABgAGAAYABgAGAAYABgAGAAYABgAGAAYABgAGAAlQCBDZUAiA2PDZcNMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAnw2nDTAAMAAwADAAMAAwAHUArw23DTAAMAAwADAAMAAwADAAMAAwADAAMAB1AL8NMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAB1AHUAdQB1AHUAdQDHDTAAYABgAM8NMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAA1w11ANwNMAAwAD0B5A0wADAAMAAwADAAMADsDfQN/A0EDgwOFA4wABsOMAAwADAAMAAwADAAMAAwANIG0gbSBtIG0gbSBtIG0gYjDigOwQUuDsEFMw7SBjoO0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIGQg5KDlIOVg7SBtIGXg5lDm0OdQ7SBtIGfQ6EDooOjQ6UDtIGmg6hDtIG0gaoDqwO0ga0DrwO0gZgAGAAYADEDmAAYAAkBtIGzA5gANIOYADaDokO0gbSBt8O5w7SBu8O0gb1DvwO0gZgAGAAxA7SBtIG0gbSBtIGYABgAGAAYAAED2AAsAUMD9IG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIGFA8sBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAccD9IGLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHJA8sBywHLAcsBywHLAccDywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywPLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAc0D9IG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIGLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAccD9IG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIGFA8sBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHPA/SBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gYUD0QPlQCVAJUAMAAwADAAMACVAJUAlQCVAJUAlQCVAEwPMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAA//8EAAQABAAEAAQABAAEAAQABAANAAMAAQABAAIABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQACgATABcAHgAbABoAHgAXABYAEgAeABsAGAAPABgAHABLAEsASwBLAEsASwBLAEsASwBLABgAGAAeAB4AHgATAB4AUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQABYAGwASAB4AHgAeAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAWAA0AEQAeAAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArAAQABAAEAAQABAAFAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAJABYAGgAbABsAGwAeAB0AHQAeAE8AFwAeAA0AHgAeABoAGwBPAE8ADgBQAB0AHQAdAE8ATwAXAE8ATwBPABYAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAB0AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAdAFAAUABQAFAAUABQAFAAUAAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAFAAHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAeAB4AHgAeAFAATwBAAE8ATwBPAEAATwBQAFAATwBQAB4AHgAeAB4AHgAeAB0AHQAdAB0AHgAdAB4ADgBQAFAAUABQAFAAHgAeAB4AHgAeAB4AHgBQAB4AUAAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4ABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAJAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAkACQAJAAkACQAJAAkABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAeAB4AHgAeAFAAHgAeAB4AKwArAFAAUABQAFAAGABQACsAKwArACsAHgAeAFAAHgBQAFAAUAArAFAAKwAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AKwAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4ABAAEAAQABAAEAAQABAAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAUAAeAB4AHgAeAB4AHgBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAYAA0AKwArAB4AHgAbACsABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQADQAEAB4ABAAEAB4ABAAEABMABAArACsAKwArACsAKwArACsAVgBWAFYAVgBWAFYAVgBWAFYAVgBWAFYAVgBWAFYAVgBWAFYAVgBWAFYAVgBWAFYAVgBWAFYAKwArACsAKwBWAFYAVgBWAB4AHgArACsAKwArACsAKwArACsAKwArACsAHgAeAB4AHgAeAB4AHgAeAB4AGgAaABoAGAAYAB4AHgAEAAQABAAEAAQABAAEAAQABAAEAAQAEwAEACsAEwATAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABABLAEsASwBLAEsASwBLAEsASwBLABoAGQAZAB4AUABQAAQAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQABMAUAAEAAQABAAEAAQABAAEAB4AHgAEAAQABAAEAAQABABQAFAABAAEAB4ABAAEAAQABABQAFAASwBLAEsASwBLAEsASwBLAEsASwBQAFAAUAAeAB4AUAAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AKwAeAFAABABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAABAAEAAQABAAEAAQABAAEAAQABAAEAFAAKwArACsAKwArACsAKwArACsAKwArACsAKwArAEsASwBLAEsASwBLAEsASwBLAEsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAABAAEAAQABAAEAAQABAAEAAQAUABQAB4AHgAYABMAUAArACsABAAbABsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAEAAQABAAEAFAABAAEAAQABAAEAFAABAAEAAQAUAAEAAQABAAEAAQAKwArAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAEAAQABAArACsAHgArAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArAFAAUABQAFAAUABQAFAAUABQAFAAKwArACsAKwArACsAKwArACsAKwArAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAB4ABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAAQABAAEAFAABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQAUAAEAAQABAAEAAQABAAEAFAAUABQAFAAUABQAFAAUABQAFAABAAEAA0ADQBLAEsASwBLAEsASwBLAEsASwBLAB4AUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAEAAQABAArAFAAUABQAFAAUABQAFAAUAArACsAUABQACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwBQAFAAUABQAFAAUABQACsAUAArACsAKwBQAFAAUABQACsAKwAEAFAABAAEAAQABAAEAAQABAArACsABAAEACsAKwAEAAQABABQACsAKwArACsAKwArACsAKwAEACsAKwArACsAUABQACsAUABQAFAABAAEACsAKwBLAEsASwBLAEsASwBLAEsASwBLAFAAUAAaABoAUABQAFAAUABQAEwAHgAbAFAAHgAEACsAKwAEAAQABAArAFAAUABQAFAAUABQACsAKwArACsAUABQACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwBQAFAAUABQAFAAUABQACsAUABQACsAUABQACsAUABQACsAKwAEACsABAAEAAQABAAEACsAKwArACsABAAEACsAKwAEAAQABAArACsAKwAEACsAKwArACsAKwArACsAUABQAFAAUAArAFAAKwArACsAKwArACsAKwBLAEsASwBLAEsASwBLAEsASwBLAAQABABQAFAAUAAEAB4AKwArACsAKwArACsAKwArACsAKwAEAAQABAArAFAAUABQAFAAUABQAFAAUABQACsAUABQAFAAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwBQAFAAUABQAFAAUABQACsAUABQACsAUABQAFAAUABQACsAKwAEAFAABAAEAAQABAAEAAQABAAEACsABAAEAAQAKwAEAAQABAArACsAUAArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwBQAFAABAAEACsAKwBLAEsASwBLAEsASwBLAEsASwBLAB4AGwArACsAKwArACsAKwArAFAABAAEAAQABAAEAAQAKwAEAAQABAArAFAAUABQAFAAUABQAFAAUAArACsAUABQACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAAQABAAEAAQABAArACsABAAEACsAKwAEAAQABAArACsAKwArACsAKwArAAQABAAEACsAKwArACsAUABQACsAUABQAFAABAAEACsAKwBLAEsASwBLAEsASwBLAEsASwBLAB4AUABQAFAAUABQAFAAUAArACsAKwArACsAKwArACsAKwArAAQAUAArAFAAUABQAFAAUABQACsAKwArAFAAUABQACsAUABQAFAAUAArACsAKwBQAFAAKwBQACsAUABQACsAKwArAFAAUAArACsAKwBQAFAAUAArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwArAAQABAAEAAQABAArACsAKwAEAAQABAArAAQABAAEAAQAKwArAFAAKwArACsAKwArACsABAArACsAKwArACsAKwArACsAKwArAEsASwBLAEsASwBLAEsASwBLAEsAUABQAFAAHgAeAB4AHgAeAB4AGwAeACsAKwArACsAKwAEAAQABAAEAAQAUABQAFAAUABQAFAAUABQACsAUABQAFAAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwArACsAUAAEAAQABAAEAAQABAAEACsABAAEAAQAKwAEAAQABAAEACsAKwArACsAKwArACsABAAEACsAUABQAFAAKwArACsAKwArAFAAUAAEAAQAKwArAEsASwBLAEsASwBLAEsASwBLAEsAKwArACsAKwArACsAKwAOAFAAUABQAFAAUABQAFAAHgBQAAQABAAEAA4AUABQAFAAUABQAFAAUABQACsAUABQAFAAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArAFAAUABQAFAAUABQAFAAUABQAFAAKwBQAFAAUABQAFAAKwArAAQAUAAEAAQABAAEAAQABAAEACsABAAEAAQAKwAEAAQABAAEACsAKwArACsAKwArACsABAAEACsAKwArACsAKwArACsAUAArAFAAUAAEAAQAKwArAEsASwBLAEsASwBLAEsASwBLAEsAKwBQAFAAKwArACsAKwArACsAKwArACsAKwArACsAKwAEAAQABAAEAFAAUABQAFAAUABQAFAAUABQACsAUABQAFAAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAABAAEAFAABAAEAAQABAAEAAQABAArAAQABAAEACsABAAEAAQABABQAB4AKwArACsAKwBQAFAAUAAEAFAAUABQAFAAUABQAFAAUABQAFAABAAEACsAKwBLAEsASwBLAEsASwBLAEsASwBLAFAAUABQAFAAUABQAFAAUABQABoAUABQAFAAUABQAFAAKwAEAAQABAArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArAFAAUABQAFAAUABQAFAAUABQACsAUAArACsAUABQAFAAUABQAFAAUAArACsAKwAEACsAKwArACsABAAEAAQABAAEAAQAKwAEACsABAAEAAQABAAEAAQABAAEACsAKwArACsAKwArAEsASwBLAEsASwBLAEsASwBLAEsAKwArAAQABAAeACsAKwArACsAKwArACsAKwArACsAKwArAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXAAqAFwAXAAqACoAKgAqACoAKgAqACsAKwArACsAGwBcAFwAXABcAFwAXABcACoAKgAqACoAKgAqACoAKgAeAEsASwBLAEsASwBLAEsASwBLAEsADQANACsAKwArACsAKwBcAFwAKwBcACsAXABcAFwAXABcACsAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcACsAXAArAFwAXABcAFwAXABcAFwAXABcAFwAKgBcAFwAKgAqACoAKgAqACoAKgAqACoAXAArACsAXABcAFwAXABcACsAXAArACoAKgAqACoAKgAqACsAKwBLAEsASwBLAEsASwBLAEsASwBLACsAKwBcAFwAXABcAFAADgAOAA4ADgAeAA4ADgAJAA4ADgANAAkAEwATABMAEwATAAkAHgATAB4AHgAeAAQABAAeAB4AHgAeAB4AHgBLAEsASwBLAEsASwBLAEsASwBLAFAAUABQAFAAUABQAFAAUABQAFAADQAEAB4ABAAeAAQAFgARABYAEQAEAAQAUABQAFAAUABQAFAAUABQACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwArACsAKwAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQADQAEAAQABAAEAAQADQAEAAQAUABQAFAAUABQAAQABAAEAAQABAAEAAQABAAEAAQABAArAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAArAA0ADQAeAB4AHgAeAB4AHgAEAB4AHgAeAB4AHgAeACsAHgAeAA4ADgANAA4AHgAeAB4AHgAeAAkACQArACsAKwArACsAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcACoAKgAqACoAKgAqACoAKgAqACoAKgAqACoAKgAqACoAKgAqACoAKgBcAEsASwBLAEsASwBLAEsASwBLAEsADQANAB4AHgAeAB4AXABcAFwAXABcAFwAKgAqACoAKgBcAFwAXABcACoAKgAqAFwAKgAqACoAXABcACoAKgAqACoAKgAqACoAXABcAFwAKgAqACoAKgBcAFwAXABcAFwAXABcAFwAXABcAFwAXABcACoAKgAqACoAKgAqACoAKgAqACoAKgAqAFwAKgBLAEsASwBLAEsASwBLAEsASwBLACoAKgAqACoAKgAqAFAAUABQAFAAUABQACsAUAArACsAKwArACsAUAArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAHgBQAFAAUABQAFgAWABYAFgAWABYAFgAWABYAFgAWABYAFgAWABYAFgAWABYAFgAWABYAFgAWABYAFgAWABYAFgAWABYAFgAWABZAFkAWQBZAFkAWQBZAFkAWQBZAFkAWQBZAFkAWQBZAFkAWQBZAFkAWQBZAFkAWQBZAFkAWQBZAFkAWQBZAFkAWgBaAFoAWgBaAFoAWgBaAFoAWgBaAFoAWgBaAFoAWgBaAFoAWgBaAFoAWgBaAFoAWgBaAFoAWgBaAFoAWgBaAFAAUABQAFAAUABQAFAAUABQACsAUABQAFAAUAArACsAUABQAFAAUABQAFAAUAArAFAAKwBQAFAAUABQACsAKwBQAFAAUABQAFAAUABQAFAAUAArAFAAUABQAFAAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArAFAAUABQAFAAKwArAFAAUABQAFAAUABQAFAAKwBQACsAUABQAFAAUAArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwBQAFAAUABQACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsABAAEAAQAHgANAB4AHgAeAB4AHgAeAB4AUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAHgAeAB4AHgAeAB4AHgAeAB4AHgArACsAKwArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwBQAFAAUABQAFAAUAArACsADQBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAHgAeAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAANAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAWABEAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAA0ADQANAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwBQAFAAUABQAAQABAAEACsAKwArACsAKwArACsAKwArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAEAAQABAANAA0AKwArACsAKwArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAABAAEACsAKwArACsAKwArACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwBQAFAAUAArAAQABAArACsAKwArACsAKwArACsAKwArACsAKwBcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAKgAqACoAKgAqACoAKgAqACoAKgAqACoAKgAqACoAKgAqACoAKgAqAA0ADQAVAFwADQAeAA0AGwBcACoAKwArAEsASwBLAEsASwBLAEsASwBLAEsAKwArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwArACsAKwAeAB4AEwATAA0ADQAOAB4AEwATAB4ABAAEAAQACQArAEsASwBLAEsASwBLAEsASwBLAEsAKwArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwArACsAKwArAFAAUABQAFAAUAAEAAQAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAAQAUAArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwArACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwAEAAQABAAEAAQABAAEAAQABAAEAAQABAArACsAKwArAAQABAAEAAQABAAEAAQABAAEAAQABAAEACsAKwArACsAHgArACsAKwATABMASwBLAEsASwBLAEsASwBLAEsASwBcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXAArACsAXABcAFwAXABcACsAKwArACsAKwArACsAKwArACsAKwBcAFwAXABcAFwAXABcAFwAXABcAFwAXAArACsAKwArAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcACsAKwArACsAKwArAEsASwBLAEsASwBLAEsASwBLAEsAXAArACsAKwAqACoAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAAQABAAEAAQABAArACsAHgAeAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcACoAKgAqACoAKgAqACoAKgAqACoAKwAqACoAKgAqACoAKgAqACoAKgAqACoAKgAqACoAKgAqACoAKgAqACoAKgAqACoAKgAqACoAKgAqACoAKwArAAQASwBLAEsASwBLAEsASwBLAEsASwArACsAKwArACsAKwBLAEsASwBLAEsASwBLAEsASwBLACsAKwArACsAKwArACoAKgAqACoAKgAqACoAXAAqACoAKgAqACoAKgArACsABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsABAAEAAQABAAEAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAAQABAAEAAQABABQAFAAUABQAFAAUABQACsAKwArACsASwBLAEsASwBLAEsASwBLAEsASwANAA0AHgANAA0ADQANAB4AHgAeAB4AHgAeAB4AHgAeAB4ABAAEAAQABAAEAAQABAAEAAQAHgAeAB4AHgAeAB4AHgAeAB4AKwArACsABAAEAAQAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAABAAEAAQABAAEAAQABAAEAAQABAAEAAQABABQAFAASwBLAEsASwBLAEsASwBLAEsASwBQAFAAUABQAFAAUABQAFAABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEACsAKwArACsAKwArACsAKwAeAB4AHgAeAFAAUABQAFAABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEACsAKwArAA0ADQANAA0ADQBLAEsASwBLAEsASwBLAEsASwBLACsAKwArAFAAUABQAEsASwBLAEsASwBLAEsASwBLAEsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAA0ADQBQAFAAUABQAFAAUABQAFAAUAArACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwBQAFAAUAAeAB4AHgAeAB4AHgAeAB4AKwArACsAKwArACsAKwArAAQABAAEAB4ABAAEAAQABAAEAAQABAAEAAQABAAEAAQABABQAFAAUABQAAQAUABQAFAAUABQAFAABABQAFAABAAEAAQAUAArACsAKwArACsABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEACsABAAEAAQABAAEAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AKwArAFAAUABQAFAAUABQACsAKwBQAFAAUABQAFAAUABQAFAAKwBQACsAUAArAFAAKwAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeACsAKwAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgArAB4AHgAeAB4AHgAeAB4AHgBQAB4AHgAeAFAAUABQACsAHgAeAB4AHgAeAB4AHgAeAB4AHgBQAFAAUABQACsAKwAeAB4AHgAeAB4AHgArAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AKwArAFAAUABQACsAHgAeAB4AHgAeAB4AHgAOAB4AKwANAA0ADQANAA0ADQANAAkADQANAA0ACAAEAAsABAAEAA0ACQANAA0ADAAdAB0AHgAXABcAFgAXABcAFwAWABcAHQAdAB4AHgAUABQAFAANAAEAAQAEAAQABAAEAAQACQAaABoAGgAaABoAGgAaABoAHgAXABcAHQAVABUAHgAeAB4AHgAeAB4AGAAWABEAFQAVABUAHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4ADQAeAA0ADQANAA0AHgANAA0ADQAHAB4AHgAeAB4AKwAEAAQABAAEAAQABAAEAAQABAAEAFAAUAArACsATwBQAFAAUABQAFAAHgAeAB4AFgARAE8AUABPAE8ATwBPAFAAUABQAFAAUAAeAB4AHgAWABEAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwArABsAGwAbABsAGwAbABsAGgAbABsAGwAbABsAGwAbABsAGwAbABsAGwAbABsAGgAbABsAGwAbABoAGwAbABoAGwAbABsAGwAbABsAGwAbABsAGwAbABsAGwAbABsAGwAbAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQAHgAeAFAAGgAeAB0AHgBQAB4AGgAeAB4AHgAeAB4AHgAeAB4AHgBPAB4AUAAbAB4AHgBQAFAAUABQAFAAHgAeAB4AHQAdAB4AUAAeAFAAHgBQAB4AUABPAFAAUAAeAB4AHgAeAB4AHgAeAFAAUABQAFAAUAAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAFAAHgBQAFAAUABQAE8ATwBQAFAAUABQAFAATwBQAFAATwBQAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwBPAFAAUABQAFAATwBPAE8ATwBPAE8ATwBPAE8ATwBQAFAAUABQAFAAUABQAFAAUAAeAB4AUABQAFAAUABPAB4AHgArACsAKwArAB0AHQAdAB0AHQAdAB0AHQAdAB0AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB0AHgAdAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAdAB4AHQAdAB4AHgAeAB0AHQAeAB4AHQAeAB4AHgAdAB4AHQAbABsAHgAdAB4AHgAeAB4AHQAeAB4AHQAdAB0AHQAeAB4AHQAeAB0AHgAdAB0AHQAdAB0AHQAeAB0AHgAeAB4AHgAeAB0AHQAdAB0AHgAeAB4AHgAdAB0AHgAeAB4AHgAeAB4AHgAeAB4AHgAdAB4AHgAeAB0AHgAeAB4AHgAeAB0AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAdAB0AHgAeAB0AHQAdAB0AHgAeAB0AHQAeAB4AHQAdAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB0AHQAeAB4AHQAdAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHQAeAB4AHgAdAB4AHgAeAB4AHgAeAB4AHQAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB0AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AFAAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeABYAEQAWABEAHgAeAB4AHgAeAB4AHQAeAB4AHgAeAB4AHgAeACUAJQAeAB4AHgAeAB4AHgAeAB4AHgAWABEAHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AJQAlACUAJQAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwBPAFAAHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHgAeAB4AHgAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAeAB4AHQAdAB0AHQAeAB4AHgAeAB4AHgAeAB4AHgAeAB0AHQAeAB0AHQAdAB0AHQAdAB0AHgAeAB4AHgAeAB4AHgAeAB0AHQAeAB4AHQAdAB4AHgAeAB4AHQAdAB4AHgAeAB4AHQAdAB0AHgAeAB0AHgAeAB0AHQAdAB0AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAdAB0AHQAdAB4AHgAeAB4AHgAeAB4AHgAeAB0AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAlACUAJQAlAB4AHQAdAB4AHgAdAB4AHgAeAB4AHQAdAB4AHgAeAB4AJQAlAB0AHQAlAB4AJQAlACUAIAAlACUAHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAlACUAJQAeAB4AHgAeAB0AHgAdAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAdAB0AHgAdAB0AHQAeAB0AJQAdAB0AHgAdAB0AHgAdAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeACUAHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHQAdAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAlACUAJQAlACUAJQAlACUAJQAlACUAJQAdAB0AHQAdACUAHgAlACUAJQAdACUAJQAdAB0AHQAlACUAHQAdACUAHQAdACUAJQAlAB4AHQAeAB4AHgAeAB0AHQAlAB0AHQAdAB0AHQAdACUAJQAlACUAJQAdACUAJQAgACUAHQAdACUAJQAlACUAJQAlACUAJQAeAB4AHgAlACUAIAAgACAAIAAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB0AHgAeAB4AFwAXABcAFwAXABcAHgATABMAJQAeAB4AHgAWABEAFgARABYAEQAWABEAFgARABYAEQAWABEATwBPAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeABYAEQAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAWABEAFgARABYAEQAWABEAFgARAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AFgARABYAEQAWABEAFgARABYAEQAWABEAFgARABYAEQAWABEAFgARABYAEQAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAWABEAFgARAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AFgARAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAdAB0AHQAdAB0AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgArACsAHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AKwAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AUABQAFAAUAAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAEAAQABAAeAB4AKwArACsAKwArABMADQANAA0AUAATAA0AUABQAFAAUABQAFAAUABQACsAKwArACsAKwArACsAUAANACsAKwArACsAKwArACsAKwArACsAKwArACsAKwAEAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwArACsAKwArACsAKwBQAFAAUABQAFAAUABQACsAUABQAFAAUABQAFAAUAArAFAAUABQAFAAUABQAFAAKwBQAFAAUABQAFAAUABQACsAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXAA0ADQANAA0ADQANAA0ADQAeAA0AFgANAB4AHgAXABcAHgAeABcAFwAWABEAFgARABYAEQAWABEADQANAA0ADQATAFAADQANAB4ADQANAB4AHgAeAB4AHgAMAAwADQANAA0AHgANAA0AFgANAA0ADQANAA0ADQANAA0AHgANAB4ADQANAB4AHgAeACsAKwArACsAKwArACsAKwArACsAKwArACsAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACsAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAKwArACsAKwArACsAKwArACsAKwArACsAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwAlACUAJQAlACUAJQAlACUAJQAlACUAJQArACsAKwArAA0AEQARACUAJQBHAFcAVwAWABEAFgARABYAEQAWABEAFgARACUAJQAWABEAFgARABYAEQAWABEAFQAWABEAEQAlAFcAVwBXAFcAVwBXAFcAVwBXAAQABAAEAAQABAAEACUAVwBXAFcAVwA2ACUAJQBXAFcAVwBHAEcAJQAlACUAKwBRAFcAUQBXAFEAVwBRAFcAUQBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFEAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBRAFcAUQBXAFEAVwBXAFcAVwBXAFcAUQBXAFcAVwBXAFcAVwBRAFEAKwArAAQABAAVABUARwBHAFcAFQBRAFcAUQBXAFEAVwBRAFcAUQBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFEAVwBRAFcAUQBXAFcAVwBXAFcAVwBRAFcAVwBXAFcAVwBXAFEAUQBXAFcAVwBXABUAUQBHAEcAVwArACsAKwArACsAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAKwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAKwAlACUAVwBXAFcAVwAlACUAJQAlACUAJQAlACUAJQAlACsAKwArACsAKwArACsAKwArACsAKwArAFEAUQBRAFEAUQBRAFEAUQBRAFEAUQBRAFEAUQBRAFEAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQArAFcAVwBXAFcAVwBXAFcAVwBXAFcAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQBPAE8ATwBPAE8ATwBPAE8AJQBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXACUAJQAlAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAEcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAKwArACsAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQArACsAKwArACsAKwArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAADQATAA0AUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABLAEsASwBLAEsASwBLAEsASwBLAFAAUAArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAFAABAAEAAQABAAeAAQABAAEAAQABAAEAAQABAAEAAQAHgBQAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AUABQAAQABABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAAQABAAeAA0ADQANAA0ADQArACsAKwArACsAKwArACsAHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAFAAUABQAFAAUABQAFAAUABQAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AUAAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgBQAB4AHgAeAB4AHgAeAFAAHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgArACsAHgAeAB4AHgAeAB4AHgAeAB4AKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwAeAB4AUABQAFAAUABQAFAAUABQAFAAUABQAAQAUABQAFAABABQAFAAUABQAAQAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAAQABAAEAAQABAAeAB4AHgAeAAQAKwArACsAUABQAFAAUABQAFAAHgAeABoAHgArACsAKwArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAADgAOABMAEwArACsAKwArACsAKwArACsABAAEAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAAQABAAEAAQABAAEACsAKwArACsAKwArACsAKwANAA0ASwBLAEsASwBLAEsASwBLAEsASwArACsAKwArACsAKwAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABABQAFAAUABQAFAAUAAeAB4AHgBQAA4AUABQAAQAUABQAFAAUABQAFAABAAEAAQABAAEAAQABAAEAA0ADQBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQAKwArACsAKwArACsAKwArACsAKwArAB4AWABYAFgAWABYAFgAWABYAFgAWABYAFgAWABYAFgAWABYAFgAWABYAFgAWABYAFgAWABYAFgAWABYACsAKwArAAQAHgAeAB4AHgAeAB4ADQANAA0AHgAeAB4AHgArAFAASwBLAEsASwBLAEsASwBLAEsASwArACsAKwArAB4AHgBcAFwAXABcAFwAKgBcAFwAXABcAFwAXABcAFwAXABcAEsASwBLAEsASwBLAEsASwBLAEsAXABcAFwAXABcACsAUABQAFAAUABQAFAAUABQAFAABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEACsAKwArACsAKwArACsAKwArAFAAUABQAAQAUABQAFAAUABQAFAAUABQAAQABAArACsASwBLAEsASwBLAEsASwBLAEsASwArACsAHgANAA0ADQBcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAKgAqACoAXAAqACoAKgBcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXAAqAFwAKgAqACoAXABcACoAKgBcAFwAXABcAFwAKgAqAFwAKgBcACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArAFwAXABcACoAKgBQAFAAUABQAFAAUABQAFAAUABQAFAABAAEAAQABAAEAA0ADQBQAFAAUAAEAAQAKwArACsAKwArACsAKwArACsAKwBQAFAAUABQAFAAUAArACsAUABQAFAAUABQAFAAKwArAFAAUABQAFAAUABQACsAKwArACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAKwBQAFAAUABQAFAAUABQACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAHgAeACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAEAAQABAAEAAQABAAEAAQADQAEAAQAKwArAEsASwBLAEsASwBLAEsASwBLAEsAKwArACsAKwArACsAVABVAFUAVQBVAFUAVQBVAFUAVQBVAFUAVQBVAFUAVQBVAFUAVQBVAFUAVQBVAFUAVQBVAFUAVQBUAFUAVQBVAFUAVQBVAFUAVQBVAFUAVQBVAFUAVQBVAFUAVQBVAFUAVQBVAFUAVQBVAFUAVQBVACsAKwArACsAKwArACsAKwArACsAKwArAFkAWQBZAFkAWQBZAFkAWQBZAFkAWQBZAFkAWQBZAFkAWQBZAFkAKwArACsAKwBaAFoAWgBaAFoAWgBaAFoAWgBaAFoAWgBaAFoAWgBaAFoAWgBaAFoAWgBaAFoAWgBaAFoAWgBaAFoAKwArACsAKwAGAAYABgAGAAYABgAGAAYABgAGAAYABgAGAAYABgAGAAYABgAGAAYABgAGAAYABgAGAAYABgAGAAYABgAGAAYAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXACUAJQBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAJQAlACUAJQAlACUAUABQAFAAUABQAFAAUAArACsAKwArACsAKwArACsAKwArACsAKwBQAFAAUABQAFAAKwArACsAKwArAFYABABWAFYAVgBWAFYAVgBWAFYAVgBWAB4AVgBWAFYAVgBWAFYAVgBWAFYAVgBWAFYAVgArAFYAVgBWAFYAVgArAFYAKwBWAFYAKwBWAFYAKwBWAFYAVgBWAFYAVgBWAFYAVgBWAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAEQAWAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUAAaAB4AKwArAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQAGAARABEAGAAYABMAEwAWABEAFAArACsAKwArACsAKwAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEACUAJQAlACUAJQAWABEAFgARABYAEQAWABEAFgARABYAEQAlACUAFgARACUAJQAlACUAJQAlACUAEQAlABEAKwAVABUAEwATACUAFgARABYAEQAWABEAJQAlACUAJQAlACUAJQAlACsAJQAbABoAJQArACsAKwArAFAAUABQAFAAUAArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwArAAcAKwATACUAJQAbABoAJQAlABYAEQAlACUAEQAlABEAJQBXAFcAVwBXAFcAVwBXAFcAVwBXABUAFQAlACUAJQATACUAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXABYAJQARACUAJQAlAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwAWACUAEQAlABYAEQARABYAEQARABUAVwBRAFEAUQBRAFEAUQBRAFEAUQBRAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAEcARwArACsAVwBXAFcAVwBXAFcAKwArAFcAVwBXAFcAVwBXACsAKwBXAFcAVwBXAFcAVwArACsAVwBXAFcAKwArACsAGgAbACUAJQAlABsAGwArAB4AHgAeAB4AHgAeAB4AKwArACsAKwArACsAKwArACsAKwAEAAQABAAQAB0AKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwBQAFAAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwArACsADQANAA0AKwArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwArAB4AHgAeAB4AHgAeAB4AHgAeAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgBQAFAAHgAeAB4AKwAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAAQAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwAEAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwArACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAABAAEAAQABAAEACsAKwArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArAA0AUABQAFAAUAArACsAKwArAFAAUABQAFAAUABQAFAAUAANAFAAUABQAFAAUAArACsAKwArACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwArACsAKwArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwArACsAKwArACsAKwArACsAKwAeACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAUABQAFAAUABQAFAAKwArAFAAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArAFAAUAArACsAKwBQACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwANAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAeAB4AUABQAFAAUABQAFAAUAArACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArAFAAUAArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwArAA0AUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwArACsAKwAeAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwArACsAUABQAFAAUABQAAQABAAEACsABAAEACsAKwArACsAKwAEAAQABAAEAFAAUABQAFAAKwBQAFAAUAArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwArAAQABAAEACsAKwArACsABABQAFAAUABQAFAAUABQAFAAUAArACsAKwArACsAKwArAA0ADQANAA0ADQANAA0ADQAeACsAKwArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAeAFAAUABQAFAAUABQAFAAUAAeAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAAQABAArACsAKwArAFAAUABQAFAAUAANAA0ADQANAA0ADQAUACsAKwArACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwArACsADQANAA0ADQANAA0ADQBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwArACsAKwArAB4AHgAeAB4AKwArACsAKwArACsAKwArACsAKwArACsAUABQAFAAUABQAFAAUAArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwArACsAKwArACsAKwArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwArACsAKwArAFAAUABQAFAAUABQAAQABAAEAAQAKwArACsAKwArACsAKwArAEsASwBLAEsASwBLAEsASwBLAEsAKwArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUAArAAQABAANACsAKwBQAFAAKwArACsAKwArACsAKwArACsAKwArACsAKwArAFAAUABQAFAAUABQAAQABAAEAAQABAAEAAQABAAEAAQABABQAFAAUABQAB4AHgAeAB4AHgArACsAKwArACsAKwAEAAQABAAEAAQABAAEAA0ADQAeAB4AHgAeAB4AKwArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAEsASwBLAEsASwBLAEsASwBLAEsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsABABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAAQABAAEAAQABAAEAAQABAAEAAQABAAeAB4AHgANAA0ADQANACsAKwArACsAKwArACsAKwArACsAKwAeACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwArACsAKwArACsAKwBLAEsASwBLAEsASwBLAEsASwBLACsAKwArACsAKwArAFAAUABQAFAAUABQAFAABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEACsASwBLAEsASwBLAEsASwBLAEsASwANAA0ADQANAFAABAAEAFAAKwArACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAABAAeAA4AUAArACsAKwArACsAKwArACsAKwAEAFAAUABQAFAADQANAB4ADQAEAAQABAAEAB4ABAAEAEsASwBLAEsASwBLAEsASwBLAEsAUAAOAFAADQANAA0AKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwArACsAKwArACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAEAAQABAAEAAQABAAEAAQABAAEAAQABAANAA0AHgANAA0AHgAEACsAUABQAFAAUABQAFAAUAArAFAAKwBQAFAAUABQACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwBQAFAAUABQAFAAUABQAFAAUABQAA0AKwArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAEAAQABAAEAAQABAAEAAQABAAEAAQAKwArACsAKwArAEsASwBLAEsASwBLAEsASwBLAEsAKwArACsAKwArACsABAAEAAQABAArAFAAUABQAFAAUABQAFAAUAArACsAUABQACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwBQAFAAUABQAFAAUABQACsAUABQACsAUABQAFAAUABQACsABAAEAFAABAAEAAQABAAEAAQABAArACsABAAEACsAKwAEAAQABAArACsAUAArACsAKwArACsAKwAEACsAKwArACsAKwBQAFAAUABQAFAABAAEACsAKwAEAAQABAAEAAQABAAEACsAKwArAAQABAAEAAQABAArACsAKwArACsAKwArACsAKwArACsABAAEAAQABAAEAAQABABQAFAAUABQAA0ADQANAA0AHgBLAEsASwBLAEsASwBLAEsASwBLAA0ADQArAB4ABABQAFAAUAArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwAEAAQABAAEAFAAUAAeAFAAKwArACsAKwArACsAKwArAEsASwBLAEsASwBLAEsASwBLAEsAKwArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAABAAEAAQABAAEAAQABAArACsABAAEAAQABAAEAAQABAAEAAQADgANAA0AEwATAB4AHgAeAA0ADQANAA0ADQANAA0ADQANAA0ADQANAA0ADQANAFAAUABQAFAABAAEACsAKwAEAA0ADQAeAFAAKwArACsAKwArACsAKwArACsAKwArAEsASwBLAEsASwBLAEsASwBLAEsAKwArACsAKwArACsADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAFAAKwArACsAKwArACsAKwBLAEsASwBLAEsASwBLAEsASwBLACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAKwArACoAKgAqACoAKgAqACoAKgAqACoAKgAqACoAKgAqACsAKwArACsASwBLAEsASwBLAEsASwBLAEsASwBcAFwADQANAA0AKgBQAFAAUABQAFAAUABQAFAAUABQAFAAUAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAeACsAKwArACsASwBLAEsASwBLAEsASwBLAEsASwBQAFAAUABQAFAAUABQAFAAUAArACsAKwArACsAKwArACsAKwArACsAKwBQAFAAUABQAFAAUABQAFAAKwArAFAAKwArAFAAUABQAFAAUABQAFAAUAArAFAAUAArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAABAAEAAQABAAEAAQAKwAEAAQAKwArAAQABAAEAAQAUAAEAFAABAAEAA0ADQANACsAKwArACsAKwArACsAKwArAEsASwBLAEsASwBLAEsASwBLAEsAKwArACsAKwArACsAUABQAFAAUABQAFAAUABQACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAABAAEAAQABAAEAAQABAArACsABAAEAAQABAAEAAQABABQAA4AUAAEACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArAFAABAAEAAQABAAEAAQABAAEAAQABABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAEAAQABAAEAAQABAAEAFAABAAEAAQABAAOAB4ADQANAA0ADQAOAB4ABAArACsAKwArACsAKwArACsAUAAEAAQABAAEAAQABAAEAAQABAAEAAQAUABQAFAAUABQAFAAUABQAFAAUAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAA0ADQANAFAADgAOAA4ADQANACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwBQAFAAUABQAFAAUABQAFAAUAArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAABAAEAAQABAAEAAQABAAEACsABAAEAAQABAAEAAQABAAEAFAADQANAA0ADQANACsAKwArACsAKwArACsAKwArACsASwBLAEsASwBLAEsASwBLAEsASwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwAOABMAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwArAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAArAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAArACsAKwArACsAKwArACsAKwBQAFAAUABQAFAAUABQACsAUABQACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAEAAQABAAEAAQABAArACsAKwAEACsABAAEACsABAAEAAQABAAEAAQABABQAAQAKwArACsAKwArACsAKwArAEsASwBLAEsASwBLAEsASwBLAEsAKwArACsAKwArACsAUABQAFAAUABQAFAAKwBQAFAAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAEAAQABAAEAAQAKwAEAAQAKwAEAAQABAAEAAQAUAArACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAABAAEAAQABAAeAB4AKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwBQACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAB4AHgAeAB4AHgAeAB4AHgAaABoAGgAaAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgArACsAKwArACsAKwArACsAKwArACsAKwArAA0AUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsADQANAA0ADQANACsAKwArACsAKwArACsAKwArACsAKwBQAFAAUABQACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAASABIAEgAQwBDAEMAUABQAFAAUABDAFAAUABQAEgAQwBIAEMAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAASABDAEMAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwAJAAkACQAJAAkACQAJABYAEQArACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABIAEMAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArAEsASwBLAEsASwBLAEsASwBLAEsAKwArACsAKwANAA0AKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwArAAQABAAEAAQABAANACsAKwArACsAKwArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAEAAQABAAEAAQABAAEAA0ADQANAB4AHgAeAB4AHgAeAFAAUABQAFAADQAeACsAKwArACsAKwArACsAKwArACsASwBLAEsASwBLAEsASwBLAEsASwArAFAAUABQAFAAUABQAFAAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAANAA0AHgAeACsAKwArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAKwArACsAKwAEAFAABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQAKwArACsAKwArACsAKwAEAAQABAAEAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAARwBHABUARwAJACsAKwArACsAKwArACsAKwArACsAKwAEAAQAKwArACsAKwArACsAKwArACsAKwArACsAKwArAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXACsAKwArACsAKwArACsAKwBXAFcAVwBXAFcAVwBXAFcAVwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAUQBRAFEAKwArACsAKwArACsAKwArACsAKwArACsAKwBRAFEAUQBRACsAKwArACsAKwArACsAKwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUAArACsAHgAEAAQADQAEAAQABAAEACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgArACsAKwArACsAKwArACsAKwArAB4AHgAeAB4AHgAeAB4AKwArAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAAQABAAEAAQABAAeAB4AHgAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAB4AHgAEAAQABAAEAAQABAAEAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4ABAAEAAQABAAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4ABAAEAAQAHgArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwArACsAKwArACsAKwArACsAKwArAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgArACsAKwArACsAKwArACsAKwAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgArAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AKwBQAFAAKwArAFAAKwArAFAAUAArACsAUABQAFAAUAArAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeACsAUAArAFAAUABQAFAAUABQAFAAKwAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AKwBQAFAAUABQACsAKwBQAFAAUABQAFAAUABQAFAAKwBQAFAAUABQAFAAUABQACsAHgAeAFAAUABQAFAAUAArAFAAKwArACsAUABQAFAAUABQAFAAUAArAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAHgBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgBQAFAAUABQAFAAUABQAFAAUABQAFAAHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAB4AHgAeAB4AHgAeAB4AHgAeACsAKwBLAEsASwBLAEsASwBLAEsASwBLAEsASwBLAEsASwBLAEsASwBLAEsASwBLAEsASwBLAEsASwBLAEsASwBLAEsASwBLAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAeAB4AHgAeAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAeAB4AHgAeAB4AHgAeAB4ABAAeAB4AHgAeAB4AHgAeAB4AHgAeAAQAHgAeAA0ADQANAA0AHgArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwAEAAQABAAEAAQAKwAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArAAQABAAEAAQABAAEAAQAKwAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQAKwArAAQABAAEAAQABAAEAAQAKwAEAAQAKwAEAAQABAAEAAQAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwAEAAQABAAEAAQABAAEAFAAUABQAFAAUABQAFAAKwArAEsASwBLAEsASwBLAEsASwBLAEsAKwArACsAKwBQAB4AKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUAAEAAQABAAEAEsASwBLAEsASwBLAEsASwBLAEsAKwArACsAKwArABsAUABQAFAAUABQACsAKwBQAFAAUABQAFAAUABQAFAAUAAEAAQABAAEAAQABAAEACsAKwArACsAKwArACsAKwArAB4AHgAeAB4ABAAEAAQABAAEAAQABABQACsAKwArACsASwBLAEsASwBLAEsASwBLAEsASwArACsAKwArABYAFgArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAGgBQAFAAUAAaAFAAUABQAFAAKwArACsAKwArACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAeAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwBQAFAAUABQACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwBQAFAAKwBQACsAKwBQACsAUABQAFAAUABQAFAAUABQAFAAUAArAFAAUABQAFAAKwBQACsAUAArACsAKwArACsAKwBQACsAKwArACsAUAArAFAAKwBQACsAUABQAFAAKwBQAFAAKwBQACsAKwBQACsAUAArAFAAKwBQACsAUAArAFAAUAArAFAAKwArAFAAUABQAFAAKwBQAFAAUABQAFAAUABQACsAUABQAFAAUAArAFAAUABQAFAAKwBQACsAUABQAFAAUABQAFAAUABQAFAAUAArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwArACsAUABQAFAAKwBQAFAAUABQAFAAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwAeAB4AKwArACsAKwArACsAKwArACsAKwArACsAKwArAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwBPAE8AJQAlACUAHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHgAeAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB4AHgAeACUAJQAlAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQApACkAKQApACkAKQApACkAKQApACkAKQApACkAKQApACkAKQApACkAKQApACkAKQApACkAJQAlACUAJQAlACAAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAeAB4AJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlAB4AHgAlACUAJQAlACUAHgAlACUAJQAlACUAIAAgACAAJQAlACAAJQAlACAAIAAgACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACEAIQAhACEAIQAlACUAIAAgACUAJQAgACAAIAAgACAAIAAgACAAIAAgACAAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAJQAlACUAIAAlACUAJQAlACAAIAAgACUAIAAgACAAJQAlACUAJQAlACUAJQAgACUAIAAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAHgAlAB4AJQAeACUAJQAlACUAJQAgACUAJQAlACUAHgAlAB4AHgAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlAB4AHgAeAB4AHgAeAB4AJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAeAB4AHgAeAB4AHgAeAB4AHgAeACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACAAIAAlACUAJQAlACAAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACAAJQAlACUAJQAgACAAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAHgAeAB4AHgAeAB4AHgAeACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAeAB4AHgAeAB4AHgAlACUAJQAlACUAJQAlACAAIAAgACUAJQAlACAAIAAgACAAIAAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeABcAFwAXABUAFQAVAB4AHgAeAB4AJQAlACUAIAAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACAAIAAgACUAJQAlACUAJQAlACUAJQAlACAAJQAlACUAJQAlACUAJQAlACUAJQAlACAAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AJQAlACUAJQAlACUAJQAlACUAJQAlACUAHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AJQAlACUAJQAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeACUAJQAlACUAJQAlACUAJQAeAB4AHgAeAB4AHgAeAB4AHgAeACUAJQAlACUAJQAlAB4AHgAeAB4AHgAeAB4AHgAlACUAJQAlACUAJQAlACUAHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAgACUAJQAgACUAJQAlACUAJQAlACUAJQAgACAAIAAgACAAIAAgACAAJQAlACUAJQAlACUAIAAlACUAJQAlACUAJQAlACUAJQAgACAAIAAgACAAIAAgACAAIAAgACUAJQAgACAAIAAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAgACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACAAIAAlACAAIAAlACAAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAgACAAIAAlACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAJQAlAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AKwAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArAEsASwBLAEsASwBLAEsASwBLAEsAKwArACsAKwArACsAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAKwArAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXACUAJQBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwAlACUAJQAlACUAJQAlACUAJQAlACUAVwBXACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAKwAEACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArAA==", ZB = 50, uE = 1, bw = 2, Nw = 3, lE = 4, cE = 5, jB = 7, Rw = 8, zB = 9, Vt = 10, Mc = 11, JB = 12, Kc = 13, fE = 14, ra = 15, bc = 16, ki = 17, Zn = 18, dE = 19, $B = 20, Nc = 21, jn = 22, _u = 23, Vr = 24, ve = 25, na = 26, aa = 27, Gr = 28, BE = 29, wr = 30, gE = 31, Mi = 32, Ki = 33, Rc = 34, Pc = 35, Vc = 36, Ai = 37, Gc = 38, Bs = 39, gs = 40, Lu = 41, Pw = 42, hE = 43, pE = [9001, 65288], Vw = "!", Z = "×", bi = "÷", Wc = aE(oE), ft = [wr, Vc], Yc = [uE, bw, Nw, cE], Gw = [Vt, Rw], qB = [aa, na], wE = Yc.concat(Gw), Ag = [Gc, Bs, gs, Rc, Pc], vE = [ra, Kc], mE = function(A, e) {
  e === void 0 && (e = "strict");
  var t = [], r = [], n = [];
  return A.forEach(function(a, i) {
    var s = Wc.get(a);
    if (s > ZB ? (n.push(!0), s -= ZB) : n.push(!1), ["normal", "auto", "loose"].indexOf(e) !== -1 && [8208, 8211, 12316, 12448].indexOf(a) !== -1)
      return r.push(i), t.push(bc);
    if (s === lE || s === Mc) {
      if (i === 0)
        return r.push(i), t.push(wr);
      var o = t[i - 1];
      return wE.indexOf(o) === -1 ? (r.push(r[i - 1]), t.push(o)) : (r.push(i), t.push(wr));
    }
    if (r.push(i), s === gE)
      return t.push(e === "strict" ? Nc : Ai);
    if (s === Pw || s === BE)
      return t.push(wr);
    if (s === hE)
      return a >= 131072 && a <= 196605 || a >= 196608 && a <= 262141 ? t.push(Ai) : t.push(wr);
    t.push(s);
  }), [r, t, n];
}, Du = function(A, e, t, r) {
  var n = r[t];
  if (Array.isArray(A) ? A.indexOf(n) !== -1 : A === n)
    for (var a = t; a <= r.length; ) {
      a++;
      var i = r[a];
      if (i === e)
        return !0;
      if (i !== Vt)
        break;
    }
  if (n === Vt)
    for (var a = t; a > 0; ) {
      a--;
      var s = r[a];
      if (Array.isArray(A) ? A.indexOf(s) !== -1 : A === s)
        for (var o = t; o <= r.length; ) {
          o++;
          var i = r[o];
          if (i === e)
            return !0;
          if (i !== Vt)
            break;
        }
      if (s !== Vt)
        break;
    }
  return !1;
}, eg = function(A, e) {
  for (var t = A; t >= 0; ) {
    var r = e[t];
    if (r === Vt)
      t--;
    else
      return r;
  }
  return 0;
}, CE = function(A, e, t, r, n) {
  if (t[r] === 0)
    return Z;
  var a = r - 1;
  if (Array.isArray(n) && n[a] === !0)
    return Z;
  var i = a - 1, s = a + 1, o = e[a], u = i >= 0 ? e[i] : 0, l = e[s];
  if (o === bw && l === Nw)
    return Z;
  if (Yc.indexOf(o) !== -1)
    return Vw;
  if (Yc.indexOf(l) !== -1 || Gw.indexOf(l) !== -1)
    return Z;
  if (eg(a, e) === Rw)
    return bi;
  if (Wc.get(A[a]) === Mc || (o === Mi || o === Ki) && Wc.get(A[s]) === Mc || o === jB || l === jB || o === zB || [Vt, Kc, ra].indexOf(o) === -1 && l === zB || [ki, Zn, dE, Vr, Gr].indexOf(l) !== -1 || eg(a, e) === jn || Du(_u, jn, a, e) || Du([ki, Zn], Nc, a, e) || Du(JB, JB, a, e))
    return Z;
  if (o === Vt)
    return bi;
  if (o === _u || l === _u)
    return Z;
  if (l === bc || o === bc)
    return bi;
  if ([Kc, ra, Nc].indexOf(l) !== -1 || o === fE || u === Vc && vE.indexOf(o) !== -1 || o === Gr && l === Vc || l === $B || ft.indexOf(l) !== -1 && o === ve || ft.indexOf(o) !== -1 && l === ve || o === aa && [Ai, Mi, Ki].indexOf(l) !== -1 || [Ai, Mi, Ki].indexOf(o) !== -1 && l === na || ft.indexOf(o) !== -1 && qB.indexOf(l) !== -1 || qB.indexOf(o) !== -1 && ft.indexOf(l) !== -1 || // (PR | PO) × ( OP | HY )? NU
  [aa, na].indexOf(o) !== -1 && (l === ve || [jn, ra].indexOf(l) !== -1 && e[s + 1] === ve) || // ( OP | HY ) × NU
  [jn, ra].indexOf(o) !== -1 && l === ve || // NU ×	(NU | SY | IS)
  o === ve && [ve, Gr, Vr].indexOf(l) !== -1)
    return Z;
  if ([ve, Gr, Vr, ki, Zn].indexOf(l) !== -1)
    for (var c = a; c >= 0; ) {
      var g = e[c];
      if (g === ve)
        return Z;
      if ([Gr, Vr].indexOf(g) !== -1)
        c--;
      else
        break;
    }
  if ([aa, na].indexOf(l) !== -1)
    for (var c = [ki, Zn].indexOf(o) !== -1 ? i : a; c >= 0; ) {
      var g = e[c];
      if (g === ve)
        return Z;
      if ([Gr, Vr].indexOf(g) !== -1)
        c--;
      else
        break;
    }
  if (Gc === o && [Gc, Bs, Rc, Pc].indexOf(l) !== -1 || [Bs, Rc].indexOf(o) !== -1 && [Bs, gs].indexOf(l) !== -1 || [gs, Pc].indexOf(o) !== -1 && l === gs || Ag.indexOf(o) !== -1 && [$B, na].indexOf(l) !== -1 || Ag.indexOf(l) !== -1 && o === aa || ft.indexOf(o) !== -1 && ft.indexOf(l) !== -1 || o === Vr && ft.indexOf(l) !== -1 || ft.concat(ve).indexOf(o) !== -1 && l === jn && pE.indexOf(A[s]) === -1 || ft.concat(ve).indexOf(l) !== -1 && o === Zn)
    return Z;
  if (o === Lu && l === Lu) {
    for (var w = t[a], p = 1; w > 0 && (w--, e[w] === Lu); )
      p++;
    if (p % 2 !== 0)
      return Z;
  }
  return o === Mi && l === Ki ? Z : bi;
}, QE = function(A, e) {
  e || (e = { lineBreak: "normal", wordBreak: "normal" });
  var t = mE(A, e.lineBreak), r = t[0], n = t[1], a = t[2];
  (e.wordBreak === "break-all" || e.wordBreak === "break-word") && (n = n.map(function(s) {
    return [ve, wr, Pw].indexOf(s) !== -1 ? Ai : s;
  }));
  var i = e.wordBreak === "keep-all" ? a.map(function(s, o) {
    return s && A[o] >= 19968 && A[o] <= 40959;
  }) : void 0;
  return [r, n, i];
}, UE = (
  /** @class */
  function() {
    function A(e, t, r, n) {
      this.codePoints = e, this.required = t === Vw, this.start = r, this.end = n;
    }
    return A.prototype.slice = function() {
      return SA.apply(void 0, this.codePoints.slice(this.start, this.end));
    }, A;
  }()
), yE = function(A, e) {
  var t = Lo(A), r = QE(t, e), n = r[0], a = r[1], i = r[2], s = t.length, o = 0, u = 0;
  return {
    next: function() {
      if (u >= s)
        return { done: !0, value: null };
      for (var l = Z; u < s && (l = CE(t, a, n, ++u, i)) === Z; )
        ;
      if (l !== Z || u === s) {
        var c = new UE(t, l, o, u);
        return o = u, { value: c, done: !1 };
      }
      return { done: !0, value: null };
    }
  };
}, FE = 1, EE = 2, ci = 4, tg = 8, eo = 10, rg = 47, wa = 92, IE = 9, HE = 32, Ni = 34, zn = 61, xE = 35, SE = 36, TE = 37, Ri = 39, Pi = 40, Jn = 41, _E = 95, fe = 45, LE = 33, DE = 60, OE = 62, kE = 64, ME = 91, KE = 93, bE = 61, NE = 123, Vi = 63, RE = 125, ng = 124, PE = 126, VE = 128, ag = 65533, Ou = 42, Qr = 43, GE = 44, WE = 58, YE = 59, ei = 46, XE = 0, ZE = 8, jE = 11, zE = 14, JE = 31, $E = 127, $e = -1, Ww = 48, Yw = 97, Xw = 101, qE = 102, A1 = 117, e1 = 122, Zw = 65, jw = 69, zw = 70, t1 = 85, r1 = 90, JA = function(A) {
  return A >= Ww && A <= 57;
}, n1 = function(A) {
  return A >= 55296 && A <= 57343;
}, Wr = function(A) {
  return JA(A) || A >= Zw && A <= zw || A >= Yw && A <= qE;
}, a1 = function(A) {
  return A >= Yw && A <= e1;
}, i1 = function(A) {
  return A >= Zw && A <= r1;
}, s1 = function(A) {
  return a1(A) || i1(A);
}, o1 = function(A) {
  return A >= VE;
}, Gi = function(A) {
  return A === eo || A === IE || A === HE;
}, to = function(A) {
  return s1(A) || o1(A) || A === _E;
}, ig = function(A) {
  return to(A) || JA(A) || A === fe;
}, u1 = function(A) {
  return A >= XE && A <= ZE || A === jE || A >= zE && A <= JE || A === $E;
}, kt = function(A, e) {
  return A !== wa ? !1 : e !== eo;
}, Wi = function(A, e, t) {
  return A === fe ? to(e) || kt(e, t) : to(A) ? !0 : !!(A === wa && kt(A, e));
}, ku = function(A, e, t) {
  return A === Qr || A === fe ? JA(e) ? !0 : e === ei && JA(t) : JA(A === ei ? e : A);
}, l1 = function(A) {
  var e = 0, t = 1;
  (A[e] === Qr || A[e] === fe) && (A[e] === fe && (t = -1), e++);
  for (var r = []; JA(A[e]); )
    r.push(A[e++]);
  var n = r.length ? parseInt(SA.apply(void 0, r), 10) : 0;
  A[e] === ei && e++;
  for (var a = []; JA(A[e]); )
    a.push(A[e++]);
  var i = a.length, s = i ? parseInt(SA.apply(void 0, a), 10) : 0;
  (A[e] === jw || A[e] === Xw) && e++;
  var o = 1;
  (A[e] === Qr || A[e] === fe) && (A[e] === fe && (o = -1), e++);
  for (var u = []; JA(A[e]); )
    u.push(A[e++]);
  var l = u.length ? parseInt(SA.apply(void 0, u), 10) : 0;
  return t * (n + s * Math.pow(10, -i)) * Math.pow(10, o * l);
}, c1 = {
  type: 2
  /* LEFT_PARENTHESIS_TOKEN */
}, f1 = {
  type: 3
  /* RIGHT_PARENTHESIS_TOKEN */
}, d1 = {
  type: 4
  /* COMMA_TOKEN */
}, B1 = {
  type: 13
  /* SUFFIX_MATCH_TOKEN */
}, g1 = {
  type: 8
  /* PREFIX_MATCH_TOKEN */
}, h1 = {
  type: 21
  /* COLUMN_TOKEN */
}, p1 = {
  type: 9
  /* DASH_MATCH_TOKEN */
}, w1 = {
  type: 10
  /* INCLUDE_MATCH_TOKEN */
}, v1 = {
  type: 11
  /* LEFT_CURLY_BRACKET_TOKEN */
}, m1 = {
  type: 12
  /* RIGHT_CURLY_BRACKET_TOKEN */
}, C1 = {
  type: 14
  /* SUBSTRING_MATCH_TOKEN */
}, Yi = {
  type: 23
  /* BAD_URL_TOKEN */
}, Q1 = {
  type: 1
  /* BAD_STRING_TOKEN */
}, U1 = {
  type: 25
  /* CDO_TOKEN */
}, y1 = {
  type: 24
  /* CDC_TOKEN */
}, F1 = {
  type: 26
  /* COLON_TOKEN */
}, E1 = {
  type: 27
  /* SEMICOLON_TOKEN */
}, I1 = {
  type: 28
  /* LEFT_SQUARE_BRACKET_TOKEN */
}, H1 = {
  type: 29
  /* RIGHT_SQUARE_BRACKET_TOKEN */
}, x1 = {
  type: 31
  /* WHITESPACE_TOKEN */
}, Xc = {
  type: 32
  /* EOF_TOKEN */
}, Jw = (
  /** @class */
  function() {
    function A() {
      this._value = [];
    }
    return A.prototype.write = function(e) {
      this._value = this._value.concat(Lo(e));
    }, A.prototype.read = function() {
      for (var e = [], t = this.consumeToken(); t !== Xc; )
        e.push(t), t = this.consumeToken();
      return e;
    }, A.prototype.consumeToken = function() {
      var e = this.consumeCodePoint();
      switch (e) {
        case Ni:
          return this.consumeStringToken(Ni);
        case xE:
          var t = this.peekCodePoint(0), r = this.peekCodePoint(1), n = this.peekCodePoint(2);
          if (ig(t) || kt(r, n)) {
            var a = Wi(t, r, n) ? EE : FE, i = this.consumeName();
            return { type: 5, value: i, flags: a };
          }
          break;
        case SE:
          if (this.peekCodePoint(0) === zn)
            return this.consumeCodePoint(), B1;
          break;
        case Ri:
          return this.consumeStringToken(Ri);
        case Pi:
          return c1;
        case Jn:
          return f1;
        case Ou:
          if (this.peekCodePoint(0) === zn)
            return this.consumeCodePoint(), C1;
          break;
        case Qr:
          if (ku(e, this.peekCodePoint(0), this.peekCodePoint(1)))
            return this.reconsumeCodePoint(e), this.consumeNumericToken();
          break;
        case GE:
          return d1;
        case fe:
          var s = e, o = this.peekCodePoint(0), u = this.peekCodePoint(1);
          if (ku(s, o, u))
            return this.reconsumeCodePoint(e), this.consumeNumericToken();
          if (Wi(s, o, u))
            return this.reconsumeCodePoint(e), this.consumeIdentLikeToken();
          if (o === fe && u === OE)
            return this.consumeCodePoint(), this.consumeCodePoint(), y1;
          break;
        case ei:
          if (ku(e, this.peekCodePoint(0), this.peekCodePoint(1)))
            return this.reconsumeCodePoint(e), this.consumeNumericToken();
          break;
        case rg:
          if (this.peekCodePoint(0) === Ou)
            for (this.consumeCodePoint(); ; ) {
              var l = this.consumeCodePoint();
              if (l === Ou && (l = this.consumeCodePoint(), l === rg))
                return this.consumeToken();
              if (l === $e)
                return this.consumeToken();
            }
          break;
        case WE:
          return F1;
        case YE:
          return E1;
        case DE:
          if (this.peekCodePoint(0) === LE && this.peekCodePoint(1) === fe && this.peekCodePoint(2) === fe)
            return this.consumeCodePoint(), this.consumeCodePoint(), U1;
          break;
        case kE:
          var c = this.peekCodePoint(0), g = this.peekCodePoint(1), w = this.peekCodePoint(2);
          if (Wi(c, g, w)) {
            var i = this.consumeName();
            return { type: 7, value: i };
          }
          break;
        case ME:
          return I1;
        case wa:
          if (kt(e, this.peekCodePoint(0)))
            return this.reconsumeCodePoint(e), this.consumeIdentLikeToken();
          break;
        case KE:
          return H1;
        case bE:
          if (this.peekCodePoint(0) === zn)
            return this.consumeCodePoint(), g1;
          break;
        case NE:
          return v1;
        case RE:
          return m1;
        case A1:
        case t1:
          var p = this.peekCodePoint(0), C = this.peekCodePoint(1);
          return p === Qr && (Wr(C) || C === Vi) && (this.consumeCodePoint(), this.consumeUnicodeRangeToken()), this.reconsumeCodePoint(e), this.consumeIdentLikeToken();
        case ng:
          if (this.peekCodePoint(0) === zn)
            return this.consumeCodePoint(), p1;
          if (this.peekCodePoint(0) === ng)
            return this.consumeCodePoint(), h1;
          break;
        case PE:
          if (this.peekCodePoint(0) === zn)
            return this.consumeCodePoint(), w1;
          break;
        case $e:
          return Xc;
      }
      return Gi(e) ? (this.consumeWhiteSpace(), x1) : JA(e) ? (this.reconsumeCodePoint(e), this.consumeNumericToken()) : to(e) ? (this.reconsumeCodePoint(e), this.consumeIdentLikeToken()) : { type: 6, value: SA(e) };
    }, A.prototype.consumeCodePoint = function() {
      var e = this._value.shift();
      return typeof e > "u" ? -1 : e;
    }, A.prototype.reconsumeCodePoint = function(e) {
      this._value.unshift(e);
    }, A.prototype.peekCodePoint = function(e) {
      return e >= this._value.length ? -1 : this._value[e];
    }, A.prototype.consumeUnicodeRangeToken = function() {
      for (var e = [], t = this.consumeCodePoint(); Wr(t) && e.length < 6; )
        e.push(t), t = this.consumeCodePoint();
      for (var r = !1; t === Vi && e.length < 6; )
        e.push(t), t = this.consumeCodePoint(), r = !0;
      if (r) {
        var n = parseInt(SA.apply(void 0, e.map(function(o) {
          return o === Vi ? Ww : o;
        })), 16), a = parseInt(SA.apply(void 0, e.map(function(o) {
          return o === Vi ? zw : o;
        })), 16);
        return { type: 30, start: n, end: a };
      }
      var i = parseInt(SA.apply(void 0, e), 16);
      if (this.peekCodePoint(0) === fe && Wr(this.peekCodePoint(1))) {
        this.consumeCodePoint(), t = this.consumeCodePoint();
        for (var s = []; Wr(t) && s.length < 6; )
          s.push(t), t = this.consumeCodePoint();
        var a = parseInt(SA.apply(void 0, s), 16);
        return { type: 30, start: i, end: a };
      } else
        return { type: 30, start: i, end: i };
    }, A.prototype.consumeIdentLikeToken = function() {
      var e = this.consumeName();
      return e.toLowerCase() === "url" && this.peekCodePoint(0) === Pi ? (this.consumeCodePoint(), this.consumeUrlToken()) : this.peekCodePoint(0) === Pi ? (this.consumeCodePoint(), { type: 19, value: e }) : { type: 20, value: e };
    }, A.prototype.consumeUrlToken = function() {
      var e = [];
      if (this.consumeWhiteSpace(), this.peekCodePoint(0) === $e)
        return { type: 22, value: "" };
      var t = this.peekCodePoint(0);
      if (t === Ri || t === Ni) {
        var r = this.consumeStringToken(this.consumeCodePoint());
        return r.type === 0 && (this.consumeWhiteSpace(), this.peekCodePoint(0) === $e || this.peekCodePoint(0) === Jn) ? (this.consumeCodePoint(), { type: 22, value: r.value }) : (this.consumeBadUrlRemnants(), Yi);
      }
      for (; ; ) {
        var n = this.consumeCodePoint();
        if (n === $e || n === Jn)
          return { type: 22, value: SA.apply(void 0, e) };
        if (Gi(n))
          return this.consumeWhiteSpace(), this.peekCodePoint(0) === $e || this.peekCodePoint(0) === Jn ? (this.consumeCodePoint(), { type: 22, value: SA.apply(void 0, e) }) : (this.consumeBadUrlRemnants(), Yi);
        if (n === Ni || n === Ri || n === Pi || u1(n))
          return this.consumeBadUrlRemnants(), Yi;
        if (n === wa)
          if (kt(n, this.peekCodePoint(0)))
            e.push(this.consumeEscapedCodePoint());
          else
            return this.consumeBadUrlRemnants(), Yi;
        else
          e.push(n);
      }
    }, A.prototype.consumeWhiteSpace = function() {
      for (; Gi(this.peekCodePoint(0)); )
        this.consumeCodePoint();
    }, A.prototype.consumeBadUrlRemnants = function() {
      for (; ; ) {
        var e = this.consumeCodePoint();
        if (e === Jn || e === $e)
          return;
        kt(e, this.peekCodePoint(0)) && this.consumeEscapedCodePoint();
      }
    }, A.prototype.consumeStringSlice = function(e) {
      for (var t = 5e4, r = ""; e > 0; ) {
        var n = Math.min(t, e);
        r += SA.apply(void 0, this._value.splice(0, n)), e -= n;
      }
      return this._value.shift(), r;
    }, A.prototype.consumeStringToken = function(e) {
      var t = "", r = 0;
      do {
        var n = this._value[r];
        if (n === $e || n === void 0 || n === e)
          return t += this.consumeStringSlice(r), { type: 0, value: t };
        if (n === eo)
          return this._value.splice(0, r), Q1;
        if (n === wa) {
          var a = this._value[r + 1];
          a !== $e && a !== void 0 && (a === eo ? (t += this.consumeStringSlice(r), r = -1, this._value.shift()) : kt(n, a) && (t += this.consumeStringSlice(r), t += SA(this.consumeEscapedCodePoint()), r = -1));
        }
        r++;
      } while (!0);
    }, A.prototype.consumeNumber = function() {
      var e = [], t = ci, r = this.peekCodePoint(0);
      for ((r === Qr || r === fe) && e.push(this.consumeCodePoint()); JA(this.peekCodePoint(0)); )
        e.push(this.consumeCodePoint());
      r = this.peekCodePoint(0);
      var n = this.peekCodePoint(1);
      if (r === ei && JA(n))
        for (e.push(this.consumeCodePoint(), this.consumeCodePoint()), t = tg; JA(this.peekCodePoint(0)); )
          e.push(this.consumeCodePoint());
      r = this.peekCodePoint(0), n = this.peekCodePoint(1);
      var a = this.peekCodePoint(2);
      if ((r === jw || r === Xw) && ((n === Qr || n === fe) && JA(a) || JA(n)))
        for (e.push(this.consumeCodePoint(), this.consumeCodePoint()), t = tg; JA(this.peekCodePoint(0)); )
          e.push(this.consumeCodePoint());
      return [l1(e), t];
    }, A.prototype.consumeNumericToken = function() {
      var e = this.consumeNumber(), t = e[0], r = e[1], n = this.peekCodePoint(0), a = this.peekCodePoint(1), i = this.peekCodePoint(2);
      if (Wi(n, a, i)) {
        var s = this.consumeName();
        return { type: 15, number: t, flags: r, unit: s };
      }
      return n === TE ? (this.consumeCodePoint(), { type: 16, number: t, flags: r }) : { type: 17, number: t, flags: r };
    }, A.prototype.consumeEscapedCodePoint = function() {
      var e = this.consumeCodePoint();
      if (Wr(e)) {
        for (var t = SA(e); Wr(this.peekCodePoint(0)) && t.length < 6; )
          t += SA(this.consumeCodePoint());
        Gi(this.peekCodePoint(0)) && this.consumeCodePoint();
        var r = parseInt(t, 16);
        return r === 0 || n1(r) || r > 1114111 ? ag : r;
      }
      return e === $e ? ag : e;
    }, A.prototype.consumeName = function() {
      for (var e = ""; ; ) {
        var t = this.consumeCodePoint();
        if (ig(t))
          e += SA(t);
        else if (kt(t, this.peekCodePoint(0)))
          e += SA(this.consumeEscapedCodePoint());
        else
          return this.reconsumeCodePoint(t), e;
      }
    }, A;
  }()
), $w = (
  /** @class */
  function() {
    function A(e) {
      this._tokens = e;
    }
    return A.create = function(e) {
      var t = new Jw();
      return t.write(e), new A(t.read());
    }, A.parseValue = function(e) {
      return A.create(e).parseComponentValue();
    }, A.parseValues = function(e) {
      return A.create(e).parseComponentValues();
    }, A.prototype.parseComponentValue = function() {
      for (var e = this.consumeToken(); e.type === 31; )
        e = this.consumeToken();
      if (e.type === 32)
        throw new SyntaxError("Error parsing CSS component value, unexpected EOF");
      this.reconsumeToken(e);
      var t = this.consumeComponentValue();
      do
        e = this.consumeToken();
      while (e.type === 31);
      if (e.type === 32)
        return t;
      throw new SyntaxError("Error parsing CSS component value, multiple values found when expecting only one");
    }, A.prototype.parseComponentValues = function() {
      for (var e = []; ; ) {
        var t = this.consumeComponentValue();
        if (t.type === 32)
          return e;
        e.push(t), e.push();
      }
    }, A.prototype.consumeComponentValue = function() {
      var e = this.consumeToken();
      switch (e.type) {
        case 11:
        case 28:
        case 2:
          return this.consumeSimpleBlock(e.type);
        case 19:
          return this.consumeFunction(e);
      }
      return e;
    }, A.prototype.consumeSimpleBlock = function(e) {
      for (var t = { type: e, values: [] }, r = this.consumeToken(); ; ) {
        if (r.type === 32 || T1(r, e))
          return t;
        this.reconsumeToken(r), t.values.push(this.consumeComponentValue()), r = this.consumeToken();
      }
    }, A.prototype.consumeFunction = function(e) {
      for (var t = {
        name: e.value,
        values: [],
        type: 18
        /* FUNCTION */
      }; ; ) {
        var r = this.consumeToken();
        if (r.type === 32 || r.type === 3)
          return t;
        this.reconsumeToken(r), t.values.push(this.consumeComponentValue());
      }
    }, A.prototype.consumeToken = function() {
      var e = this._tokens.shift();
      return typeof e > "u" ? Xc : e;
    }, A.prototype.reconsumeToken = function(e) {
      this._tokens.unshift(e);
    }, A;
  }()
), fi = function(A) {
  return A.type === 15;
}, On = function(A) {
  return A.type === 17;
}, iA = function(A) {
  return A.type === 20;
}, S1 = function(A) {
  return A.type === 0;
}, Zc = function(A, e) {
  return iA(A) && A.value === e;
}, qw = function(A) {
  return A.type !== 31;
}, Tn = function(A) {
  return A.type !== 31 && A.type !== 4;
}, st = function(A) {
  var e = [], t = [];
  return A.forEach(function(r) {
    if (r.type === 4) {
      if (t.length === 0)
        throw new Error("Error parsing function args, zero tokens for arg");
      e.push(t), t = [];
      return;
    }
    r.type !== 31 && t.push(r);
  }), t.length && e.push(t), e;
}, T1 = function(A, e) {
  return e === 11 && A.type === 12 || e === 28 && A.type === 29 ? !0 : e === 2 && A.type === 3;
}, or = function(A) {
  return A.type === 17 || A.type === 15;
}, _A = function(A) {
  return A.type === 16 || or(A);
}, A0 = function(A) {
  return A.length > 1 ? [A[0], A[1]] : [A[0]];
}, WA = {
  type: 17,
  number: 0,
  flags: ci
}, ad = {
  type: 16,
  number: 50,
  flags: ci
}, Gt = {
  type: 16,
  number: 100,
  flags: ci
}, ia = function(A, e, t) {
  var r = A[0], n = A[1];
  return [uA(r, e), uA(typeof n < "u" ? n : r, t)];
}, uA = function(A, e) {
  if (A.type === 16)
    return A.number / 100 * e;
  if (fi(A))
    switch (A.unit) {
      case "rem":
      case "em":
        return 16 * A.number;
      case "px":
      default:
        return A.number;
    }
  return A.number;
}, e0 = "deg", t0 = "grad", r0 = "rad", n0 = "turn", Do = {
  name: "angle",
  parse: function(A, e) {
    if (e.type === 15)
      switch (e.unit) {
        case e0:
          return Math.PI * e.number / 180;
        case t0:
          return Math.PI / 200 * e.number;
        case r0:
          return e.number;
        case n0:
          return Math.PI * 2 * e.number;
      }
    throw new Error("Unsupported angle type");
  }
}, a0 = function(A) {
  return A.type === 15 && (A.unit === e0 || A.unit === t0 || A.unit === r0 || A.unit === n0);
}, i0 = function(A) {
  var e = A.filter(iA).map(function(t) {
    return t.value;
  }).join(" ");
  switch (e) {
    case "to bottom right":
    case "to right bottom":
    case "left top":
    case "top left":
      return [WA, WA];
    case "to top":
    case "bottom":
      return Le(0);
    case "to bottom left":
    case "to left bottom":
    case "right top":
    case "top right":
      return [WA, Gt];
    case "to right":
    case "left":
      return Le(90);
    case "to top left":
    case "to left top":
    case "right bottom":
    case "bottom right":
      return [Gt, Gt];
    case "to bottom":
    case "top":
      return Le(180);
    case "to top right":
    case "to right top":
    case "left bottom":
    case "bottom left":
      return [Gt, WA];
    case "to left":
    case "right":
      return Le(270);
  }
  return 0;
}, Le = function(A) {
  return Math.PI * A / 180;
}, Ar = {
  name: "color",
  parse: function(A, e) {
    if (e.type === 18) {
      var t = _1[e.name];
      if (typeof t > "u")
        throw new Error('Attempting to parse an unsupported color function "' + e.name + '"');
      return t(A, e.values);
    }
    if (e.type === 5) {
      if (e.value.length === 3) {
        var r = e.value.substring(0, 1), n = e.value.substring(1, 2), a = e.value.substring(2, 3);
        return Wt(parseInt(r + r, 16), parseInt(n + n, 16), parseInt(a + a, 16), 1);
      }
      if (e.value.length === 4) {
        var r = e.value.substring(0, 1), n = e.value.substring(1, 2), a = e.value.substring(2, 3), i = e.value.substring(3, 4);
        return Wt(parseInt(r + r, 16), parseInt(n + n, 16), parseInt(a + a, 16), parseInt(i + i, 16) / 255);
      }
      if (e.value.length === 6) {
        var r = e.value.substring(0, 2), n = e.value.substring(2, 4), a = e.value.substring(4, 6);
        return Wt(parseInt(r, 16), parseInt(n, 16), parseInt(a, 16), 1);
      }
      if (e.value.length === 8) {
        var r = e.value.substring(0, 2), n = e.value.substring(2, 4), a = e.value.substring(4, 6), i = e.value.substring(6, 8);
        return Wt(parseInt(r, 16), parseInt(n, 16), parseInt(a, 16), parseInt(i, 16) / 255);
      }
    }
    if (e.type === 20) {
      var s = Qt[e.value.toUpperCase()];
      if (typeof s < "u")
        return s;
    }
    return Qt.TRANSPARENT;
  }
}, er = function(A) {
  return (255 & A) === 0;
}, NA = function(A) {
  var e = 255 & A, t = 255 & A >> 8, r = 255 & A >> 16, n = 255 & A >> 24;
  return e < 255 ? "rgba(" + n + "," + r + "," + t + "," + e / 255 + ")" : "rgb(" + n + "," + r + "," + t + ")";
}, Wt = function(A, e, t, r) {
  return (A << 24 | e << 16 | t << 8 | Math.round(r * 255) << 0) >>> 0;
}, sg = function(A, e) {
  if (A.type === 17)
    return A.number;
  if (A.type === 16) {
    var t = e === 3 ? 1 : 255;
    return e === 3 ? A.number / 100 * t : Math.round(A.number / 100 * t);
  }
  return 0;
}, og = function(A, e) {
  var t = e.filter(Tn);
  if (t.length === 3) {
    var r = t.map(sg), n = r[0], a = r[1], i = r[2];
    return Wt(n, a, i, 1);
  }
  if (t.length === 4) {
    var s = t.map(sg), n = s[0], a = s[1], i = s[2], o = s[3];
    return Wt(n, a, i, o);
  }
  return 0;
};
function Mu(A, e, t) {
  return t < 0 && (t += 1), t >= 1 && (t -= 1), t < 1 / 6 ? (e - A) * t * 6 + A : t < 1 / 2 ? e : t < 2 / 3 ? (e - A) * 6 * (2 / 3 - t) + A : A;
}
var ug = function(A, e) {
  var t = e.filter(Tn), r = t[0], n = t[1], a = t[2], i = t[3], s = (r.type === 17 ? Le(r.number) : Do.parse(A, r)) / (Math.PI * 2), o = _A(n) ? n.number / 100 : 0, u = _A(a) ? a.number / 100 : 0, l = typeof i < "u" && _A(i) ? uA(i, 1) : 1;
  if (o === 0)
    return Wt(u * 255, u * 255, u * 255, 1);
  var c = u <= 0.5 ? u * (o + 1) : u + o - u * o, g = u * 2 - c, w = Mu(g, c, s + 1 / 3), p = Mu(g, c, s), C = Mu(g, c, s - 1 / 3);
  return Wt(w * 255, p * 255, C * 255, l);
}, _1 = {
  hsl: ug,
  hsla: ug,
  rgb: og,
  rgba: og
}, va = function(A, e) {
  return Ar.parse(A, $w.create(e).parseComponentValue());
}, Qt = {
  ALICEBLUE: 4042850303,
  ANTIQUEWHITE: 4209760255,
  AQUA: 16777215,
  AQUAMARINE: 2147472639,
  AZURE: 4043309055,
  BEIGE: 4126530815,
  BISQUE: 4293182719,
  BLACK: 255,
  BLANCHEDALMOND: 4293643775,
  BLUE: 65535,
  BLUEVIOLET: 2318131967,
  BROWN: 2771004159,
  BURLYWOOD: 3736635391,
  CADETBLUE: 1604231423,
  CHARTREUSE: 2147418367,
  CHOCOLATE: 3530104575,
  CORAL: 4286533887,
  CORNFLOWERBLUE: 1687547391,
  CORNSILK: 4294499583,
  CRIMSON: 3692313855,
  CYAN: 16777215,
  DARKBLUE: 35839,
  DARKCYAN: 9145343,
  DARKGOLDENROD: 3095837695,
  DARKGRAY: 2846468607,
  DARKGREEN: 6553855,
  DARKGREY: 2846468607,
  DARKKHAKI: 3182914559,
  DARKMAGENTA: 2332068863,
  DARKOLIVEGREEN: 1433087999,
  DARKORANGE: 4287365375,
  DARKORCHID: 2570243327,
  DARKRED: 2332033279,
  DARKSALMON: 3918953215,
  DARKSEAGREEN: 2411499519,
  DARKSLATEBLUE: 1211993087,
  DARKSLATEGRAY: 793726975,
  DARKSLATEGREY: 793726975,
  DARKTURQUOISE: 13554175,
  DARKVIOLET: 2483082239,
  DEEPPINK: 4279538687,
  DEEPSKYBLUE: 12582911,
  DIMGRAY: 1768516095,
  DIMGREY: 1768516095,
  DODGERBLUE: 512819199,
  FIREBRICK: 2988581631,
  FLORALWHITE: 4294635775,
  FORESTGREEN: 579543807,
  FUCHSIA: 4278255615,
  GAINSBORO: 3705462015,
  GHOSTWHITE: 4177068031,
  GOLD: 4292280575,
  GOLDENROD: 3668254975,
  GRAY: 2155905279,
  GREEN: 8388863,
  GREENYELLOW: 2919182335,
  GREY: 2155905279,
  HONEYDEW: 4043305215,
  HOTPINK: 4285117695,
  INDIANRED: 3445382399,
  INDIGO: 1258324735,
  IVORY: 4294963455,
  KHAKI: 4041641215,
  LAVENDER: 3873897215,
  LAVENDERBLUSH: 4293981695,
  LAWNGREEN: 2096890111,
  LEMONCHIFFON: 4294626815,
  LIGHTBLUE: 2916673279,
  LIGHTCORAL: 4034953471,
  LIGHTCYAN: 3774873599,
  LIGHTGOLDENRODYELLOW: 4210742015,
  LIGHTGRAY: 3553874943,
  LIGHTGREEN: 2431553791,
  LIGHTGREY: 3553874943,
  LIGHTPINK: 4290167295,
  LIGHTSALMON: 4288707327,
  LIGHTSEAGREEN: 548580095,
  LIGHTSKYBLUE: 2278488831,
  LIGHTSLATEGRAY: 2005441023,
  LIGHTSLATEGREY: 2005441023,
  LIGHTSTEELBLUE: 2965692159,
  LIGHTYELLOW: 4294959359,
  LIME: 16711935,
  LIMEGREEN: 852308735,
  LINEN: 4210091775,
  MAGENTA: 4278255615,
  MAROON: 2147483903,
  MEDIUMAQUAMARINE: 1724754687,
  MEDIUMBLUE: 52735,
  MEDIUMORCHID: 3126187007,
  MEDIUMPURPLE: 2473647103,
  MEDIUMSEAGREEN: 1018393087,
  MEDIUMSLATEBLUE: 2070474495,
  MEDIUMSPRINGGREEN: 16423679,
  MEDIUMTURQUOISE: 1221709055,
  MEDIUMVIOLETRED: 3340076543,
  MIDNIGHTBLUE: 421097727,
  MINTCREAM: 4127193855,
  MISTYROSE: 4293190143,
  MOCCASIN: 4293178879,
  NAVAJOWHITE: 4292783615,
  NAVY: 33023,
  OLDLACE: 4260751103,
  OLIVE: 2155872511,
  OLIVEDRAB: 1804477439,
  ORANGE: 4289003775,
  ORANGERED: 4282712319,
  ORCHID: 3664828159,
  PALEGOLDENROD: 4008225535,
  PALEGREEN: 2566625535,
  PALETURQUOISE: 2951671551,
  PALEVIOLETRED: 3681588223,
  PAPAYAWHIP: 4293907967,
  PEACHPUFF: 4292524543,
  PERU: 3448061951,
  PINK: 4290825215,
  PLUM: 3718307327,
  POWDERBLUE: 2967529215,
  PURPLE: 2147516671,
  REBECCAPURPLE: 1714657791,
  RED: 4278190335,
  ROSYBROWN: 3163525119,
  ROYALBLUE: 1097458175,
  SADDLEBROWN: 2336560127,
  SALMON: 4202722047,
  SANDYBROWN: 4104413439,
  SEAGREEN: 780883967,
  SEASHELL: 4294307583,
  SIENNA: 2689740287,
  SILVER: 3233857791,
  SKYBLUE: 2278484991,
  SLATEBLUE: 1784335871,
  SLATEGRAY: 1887473919,
  SLATEGREY: 1887473919,
  SNOW: 4294638335,
  SPRINGGREEN: 16744447,
  STEELBLUE: 1182971135,
  TAN: 3535047935,
  TEAL: 8421631,
  THISTLE: 3636451583,
  TOMATO: 4284696575,
  TRANSPARENT: 0,
  TURQUOISE: 1088475391,
  VIOLET: 4001558271,
  WHEAT: 4125012991,
  WHITE: 4294967295,
  WHITESMOKE: 4126537215,
  YELLOW: 4294902015,
  YELLOWGREEN: 2597139199
}, L1 = {
  name: "background-clip",
  initialValue: "border-box",
  prefix: !1,
  type: 1,
  parse: function(A, e) {
    return e.map(function(t) {
      if (iA(t))
        switch (t.value) {
          case "padding-box":
            return 1;
          case "content-box":
            return 2;
        }
      return 0;
    });
  }
}, D1 = {
  name: "background-color",
  initialValue: "transparent",
  prefix: !1,
  type: 3,
  format: "color"
}, Oo = function(A, e) {
  var t = Ar.parse(A, e[0]), r = e[1];
  return r && _A(r) ? { color: t, stop: r } : { color: t, stop: null };
}, lg = function(A, e) {
  var t = A[0], r = A[A.length - 1];
  t.stop === null && (t.stop = WA), r.stop === null && (r.stop = Gt);
  for (var n = [], a = 0, i = 0; i < A.length; i++) {
    var s = A[i].stop;
    if (s !== null) {
      var o = uA(s, e);
      o > a ? n.push(o) : n.push(a), a = o;
    } else
      n.push(null);
  }
  for (var u = null, i = 0; i < n.length; i++) {
    var l = n[i];
    if (l === null)
      u === null && (u = i);
    else if (u !== null) {
      for (var c = i - u, g = n[u - 1], w = (l - g) / (c + 1), p = 1; p <= c; p++)
        n[u + p - 1] = w * p;
      u = null;
    }
  }
  return A.map(function(C, Q) {
    var d = C.color;
    return { color: d, stop: Math.max(Math.min(1, n[Q] / e), 0) };
  });
}, O1 = function(A, e, t) {
  var r = e / 2, n = t / 2, a = uA(A[0], e) - r, i = n - uA(A[1], t);
  return (Math.atan2(i, a) + Math.PI * 2) % (Math.PI * 2);
}, k1 = function(A, e, t) {
  var r = typeof A == "number" ? A : O1(A, e, t), n = Math.abs(e * Math.sin(r)) + Math.abs(t * Math.cos(r)), a = e / 2, i = t / 2, s = n / 2, o = Math.sin(r - Math.PI / 2) * s, u = Math.cos(r - Math.PI / 2) * s;
  return [n, a - u, a + u, i - o, i + o];
}, be = function(A, e) {
  return Math.sqrt(A * A + e * e);
}, cg = function(A, e, t, r, n) {
  var a = [
    [0, 0],
    [0, e],
    [A, 0],
    [A, e]
  ];
  return a.reduce(function(i, s) {
    var o = s[0], u = s[1], l = be(t - o, r - u);
    return (n ? l < i.optimumDistance : l > i.optimumDistance) ? {
      optimumCorner: s,
      optimumDistance: l
    } : i;
  }, {
    optimumDistance: n ? 1 / 0 : -1 / 0,
    optimumCorner: null
  }).optimumCorner;
}, M1 = function(A, e, t, r, n) {
  var a = 0, i = 0;
  switch (A.size) {
    case 0:
      A.shape === 0 ? a = i = Math.min(Math.abs(e), Math.abs(e - r), Math.abs(t), Math.abs(t - n)) : A.shape === 1 && (a = Math.min(Math.abs(e), Math.abs(e - r)), i = Math.min(Math.abs(t), Math.abs(t - n)));
      break;
    case 2:
      if (A.shape === 0)
        a = i = Math.min(be(e, t), be(e, t - n), be(e - r, t), be(e - r, t - n));
      else if (A.shape === 1) {
        var s = Math.min(Math.abs(t), Math.abs(t - n)) / Math.min(Math.abs(e), Math.abs(e - r)), o = cg(r, n, e, t, !0), u = o[0], l = o[1];
        a = be(u - e, (l - t) / s), i = s * a;
      }
      break;
    case 1:
      A.shape === 0 ? a = i = Math.max(Math.abs(e), Math.abs(e - r), Math.abs(t), Math.abs(t - n)) : A.shape === 1 && (a = Math.max(Math.abs(e), Math.abs(e - r)), i = Math.max(Math.abs(t), Math.abs(t - n)));
      break;
    case 3:
      if (A.shape === 0)
        a = i = Math.max(be(e, t), be(e, t - n), be(e - r, t), be(e - r, t - n));
      else if (A.shape === 1) {
        var s = Math.max(Math.abs(t), Math.abs(t - n)) / Math.max(Math.abs(e), Math.abs(e - r)), c = cg(r, n, e, t, !1), u = c[0], l = c[1];
        a = be(u - e, (l - t) / s), i = s * a;
      }
      break;
  }
  return Array.isArray(A.size) && (a = uA(A.size[0], r), i = A.size.length === 2 ? uA(A.size[1], n) : a), [a, i];
}, K1 = function(A, e) {
  var t = Le(180), r = [];
  return st(e).forEach(function(n, a) {
    if (a === 0) {
      var i = n[0];
      if (i.type === 20 && i.value === "to") {
        t = i0(n);
        return;
      } else if (a0(i)) {
        t = Do.parse(A, i);
        return;
      }
    }
    var s = Oo(A, n);
    r.push(s);
  }), {
    angle: t,
    stops: r,
    type: 1
    /* LINEAR_GRADIENT */
  };
}, Xi = function(A, e) {
  var t = Le(180), r = [];
  return st(e).forEach(function(n, a) {
    if (a === 0) {
      var i = n[0];
      if (i.type === 20 && ["top", "left", "right", "bottom"].indexOf(i.value) !== -1) {
        t = i0(n);
        return;
      } else if (a0(i)) {
        t = (Do.parse(A, i) + Le(270)) % Le(360);
        return;
      }
    }
    var s = Oo(A, n);
    r.push(s);
  }), {
    angle: t,
    stops: r,
    type: 1
    /* LINEAR_GRADIENT */
  };
}, b1 = function(A, e) {
  var t = Le(180), r = [], n = 1, a = 0, i = 3, s = [];
  return st(e).forEach(function(o, u) {
    var l = o[0];
    if (u === 0) {
      if (iA(l) && l.value === "linear") {
        n = 1;
        return;
      } else if (iA(l) && l.value === "radial") {
        n = 2;
        return;
      }
    }
    if (l.type === 18) {
      if (l.name === "from") {
        var c = Ar.parse(A, l.values[0]);
        r.push({ stop: WA, color: c });
      } else if (l.name === "to") {
        var c = Ar.parse(A, l.values[0]);
        r.push({ stop: Gt, color: c });
      } else if (l.name === "color-stop") {
        var g = l.values.filter(Tn);
        if (g.length === 2) {
          var c = Ar.parse(A, g[1]), w = g[0];
          On(w) && r.push({
            stop: { type: 16, number: w.number * 100, flags: w.flags },
            color: c
          });
        }
      }
    }
  }), n === 1 ? {
    angle: (t + Le(180)) % Le(360),
    stops: r,
    type: n
  } : { size: i, shape: a, stops: r, position: s, type: n };
}, s0 = "closest-side", o0 = "farthest-side", u0 = "closest-corner", l0 = "farthest-corner", c0 = "circle", f0 = "ellipse", d0 = "cover", B0 = "contain", N1 = function(A, e) {
  var t = 0, r = 3, n = [], a = [];
  return st(e).forEach(function(i, s) {
    var o = !0;
    if (s === 0) {
      var u = !1;
      o = i.reduce(function(c, g) {
        if (u)
          if (iA(g))
            switch (g.value) {
              case "center":
                return a.push(ad), c;
              case "top":
              case "left":
                return a.push(WA), c;
              case "right":
              case "bottom":
                return a.push(Gt), c;
            }
          else
            (_A(g) || or(g)) && a.push(g);
        else if (iA(g))
          switch (g.value) {
            case c0:
              return t = 0, !1;
            case f0:
              return t = 1, !1;
            case "at":
              return u = !0, !1;
            case s0:
              return r = 0, !1;
            case d0:
            case o0:
              return r = 1, !1;
            case B0:
            case u0:
              return r = 2, !1;
            case l0:
              return r = 3, !1;
          }
        else if (or(g) || _A(g))
          return Array.isArray(r) || (r = []), r.push(g), !1;
        return c;
      }, o);
    }
    if (o) {
      var l = Oo(A, i);
      n.push(l);
    }
  }), {
    size: r,
    shape: t,
    stops: n,
    position: a,
    type: 2
    /* RADIAL_GRADIENT */
  };
}, Zi = function(A, e) {
  var t = 0, r = 3, n = [], a = [];
  return st(e).forEach(function(i, s) {
    var o = !0;
    if (s === 0 ? o = i.reduce(function(l, c) {
      if (iA(c))
        switch (c.value) {
          case "center":
            return a.push(ad), !1;
          case "top":
          case "left":
            return a.push(WA), !1;
          case "right":
          case "bottom":
            return a.push(Gt), !1;
        }
      else if (_A(c) || or(c))
        return a.push(c), !1;
      return l;
    }, o) : s === 1 && (o = i.reduce(function(l, c) {
      if (iA(c))
        switch (c.value) {
          case c0:
            return t = 0, !1;
          case f0:
            return t = 1, !1;
          case B0:
          case s0:
            return r = 0, !1;
          case o0:
            return r = 1, !1;
          case u0:
            return r = 2, !1;
          case d0:
          case l0:
            return r = 3, !1;
        }
      else if (or(c) || _A(c))
        return Array.isArray(r) || (r = []), r.push(c), !1;
      return l;
    }, o)), o) {
      var u = Oo(A, i);
      n.push(u);
    }
  }), {
    size: r,
    shape: t,
    stops: n,
    position: a,
    type: 2
    /* RADIAL_GRADIENT */
  };
}, R1 = function(A) {
  return A.type === 1;
}, P1 = function(A) {
  return A.type === 2;
}, id = {
  name: "image",
  parse: function(A, e) {
    if (e.type === 22) {
      var t = {
        url: e.value,
        type: 0
        /* URL */
      };
      return A.cache.addImage(e.value), t;
    }
    if (e.type === 18) {
      var r = g0[e.name];
      if (typeof r > "u")
        throw new Error('Attempting to parse an unsupported image function "' + e.name + '"');
      return r(A, e.values);
    }
    throw new Error("Unsupported image type " + e.type);
  }
};
function V1(A) {
  return !(A.type === 20 && A.value === "none") && (A.type !== 18 || !!g0[A.name]);
}
var g0 = {
  "linear-gradient": K1,
  "-moz-linear-gradient": Xi,
  "-ms-linear-gradient": Xi,
  "-o-linear-gradient": Xi,
  "-webkit-linear-gradient": Xi,
  "radial-gradient": N1,
  "-moz-radial-gradient": Zi,
  "-ms-radial-gradient": Zi,
  "-o-radial-gradient": Zi,
  "-webkit-radial-gradient": Zi,
  "-webkit-gradient": b1
}, G1 = {
  name: "background-image",
  initialValue: "none",
  type: 1,
  prefix: !1,
  parse: function(A, e) {
    if (e.length === 0)
      return [];
    var t = e[0];
    return t.type === 20 && t.value === "none" ? [] : e.filter(function(r) {
      return Tn(r) && V1(r);
    }).map(function(r) {
      return id.parse(A, r);
    });
  }
}, W1 = {
  name: "background-origin",
  initialValue: "border-box",
  prefix: !1,
  type: 1,
  parse: function(A, e) {
    return e.map(function(t) {
      if (iA(t))
        switch (t.value) {
          case "padding-box":
            return 1;
          case "content-box":
            return 2;
        }
      return 0;
    });
  }
}, Y1 = {
  name: "background-position",
  initialValue: "0% 0%",
  type: 1,
  prefix: !1,
  parse: function(A, e) {
    return st(e).map(function(t) {
      return t.filter(_A);
    }).map(A0);
  }
}, X1 = {
  name: "background-repeat",
  initialValue: "repeat",
  prefix: !1,
  type: 1,
  parse: function(A, e) {
    return st(e).map(function(t) {
      return t.filter(iA).map(function(r) {
        return r.value;
      }).join(" ");
    }).map(Z1);
  }
}, Z1 = function(A) {
  switch (A) {
    case "no-repeat":
      return 1;
    case "repeat-x":
    case "repeat no-repeat":
      return 2;
    case "repeat-y":
    case "no-repeat repeat":
      return 3;
    case "repeat":
    default:
      return 0;
  }
}, mn;
(function(A) {
  A.AUTO = "auto", A.CONTAIN = "contain", A.COVER = "cover";
})(mn || (mn = {}));
var j1 = {
  name: "background-size",
  initialValue: "0",
  prefix: !1,
  type: 1,
  parse: function(A, e) {
    return st(e).map(function(t) {
      return t.filter(z1);
    });
  }
}, z1 = function(A) {
  return iA(A) || _A(A);
}, ko = function(A) {
  return {
    name: "border-" + A + "-color",
    initialValue: "transparent",
    prefix: !1,
    type: 3,
    format: "color"
  };
}, J1 = ko("top"), $1 = ko("right"), q1 = ko("bottom"), AI = ko("left"), Mo = function(A) {
  return {
    name: "border-radius-" + A,
    initialValue: "0 0",
    prefix: !1,
    type: 1,
    parse: function(e, t) {
      return A0(t.filter(_A));
    }
  };
}, eI = Mo("top-left"), tI = Mo("top-right"), rI = Mo("bottom-right"), nI = Mo("bottom-left"), Ko = function(A) {
  return {
    name: "border-" + A + "-style",
    initialValue: "solid",
    prefix: !1,
    type: 2,
    parse: function(e, t) {
      switch (t) {
        case "none":
          return 0;
        case "dashed":
          return 2;
        case "dotted":
          return 3;
        case "double":
          return 4;
      }
      return 1;
    }
  };
}, aI = Ko("top"), iI = Ko("right"), sI = Ko("bottom"), oI = Ko("left"), bo = function(A) {
  return {
    name: "border-" + A + "-width",
    initialValue: "0",
    type: 0,
    prefix: !1,
    parse: function(e, t) {
      return fi(t) ? t.number : 0;
    }
  };
}, uI = bo("top"), lI = bo("right"), cI = bo("bottom"), fI = bo("left"), dI = {
  name: "color",
  initialValue: "transparent",
  prefix: !1,
  type: 3,
  format: "color"
}, BI = {
  name: "direction",
  initialValue: "ltr",
  prefix: !1,
  type: 2,
  parse: function(A, e) {
    switch (e) {
      case "rtl":
        return 1;
      case "ltr":
      default:
        return 0;
    }
  }
}, gI = {
  name: "display",
  initialValue: "inline-block",
  prefix: !1,
  type: 1,
  parse: function(A, e) {
    return e.filter(iA).reduce(
      function(t, r) {
        return t | hI(r.value);
      },
      0
      /* NONE */
    );
  }
}, hI = function(A) {
  switch (A) {
    case "block":
    case "-webkit-box":
      return 2;
    case "inline":
      return 4;
    case "run-in":
      return 8;
    case "flow":
      return 16;
    case "flow-root":
      return 32;
    case "table":
      return 64;
    case "flex":
    case "-webkit-flex":
      return 128;
    case "grid":
    case "-ms-grid":
      return 256;
    case "ruby":
      return 512;
    case "subgrid":
      return 1024;
    case "list-item":
      return 2048;
    case "table-row-group":
      return 4096;
    case "table-header-group":
      return 8192;
    case "table-footer-group":
      return 16384;
    case "table-row":
      return 32768;
    case "table-cell":
      return 65536;
    case "table-column-group":
      return 131072;
    case "table-column":
      return 262144;
    case "table-caption":
      return 524288;
    case "ruby-base":
      return 1048576;
    case "ruby-text":
      return 2097152;
    case "ruby-base-container":
      return 4194304;
    case "ruby-text-container":
      return 8388608;
    case "contents":
      return 16777216;
    case "inline-block":
      return 33554432;
    case "inline-list-item":
      return 67108864;
    case "inline-table":
      return 134217728;
    case "inline-flex":
      return 268435456;
    case "inline-grid":
      return 536870912;
  }
  return 0;
}, pI = {
  name: "float",
  initialValue: "none",
  prefix: !1,
  type: 2,
  parse: function(A, e) {
    switch (e) {
      case "left":
        return 1;
      case "right":
        return 2;
      case "inline-start":
        return 3;
      case "inline-end":
        return 4;
    }
    return 0;
  }
}, wI = {
  name: "letter-spacing",
  initialValue: "0",
  prefix: !1,
  type: 0,
  parse: function(A, e) {
    return e.type === 20 && e.value === "normal" ? 0 : e.type === 17 || e.type === 15 ? e.number : 0;
  }
}, ro;
(function(A) {
  A.NORMAL = "normal", A.STRICT = "strict";
})(ro || (ro = {}));
var vI = {
  name: "line-break",
  initialValue: "normal",
  prefix: !1,
  type: 2,
  parse: function(A, e) {
    switch (e) {
      case "strict":
        return ro.STRICT;
      case "normal":
      default:
        return ro.NORMAL;
    }
  }
}, mI = {
  name: "line-height",
  initialValue: "normal",
  prefix: !1,
  type: 4
  /* TOKEN_VALUE */
}, fg = function(A, e) {
  return iA(A) && A.value === "normal" ? 1.2 * e : A.type === 17 ? e * A.number : _A(A) ? uA(A, e) : e;
}, CI = {
  name: "list-style-image",
  initialValue: "none",
  type: 0,
  prefix: !1,
  parse: function(A, e) {
    return e.type === 20 && e.value === "none" ? null : id.parse(A, e);
  }
}, QI = {
  name: "list-style-position",
  initialValue: "outside",
  prefix: !1,
  type: 2,
  parse: function(A, e) {
    switch (e) {
      case "inside":
        return 0;
      case "outside":
      default:
        return 1;
    }
  }
}, jc = {
  name: "list-style-type",
  initialValue: "none",
  prefix: !1,
  type: 2,
  parse: function(A, e) {
    switch (e) {
      case "disc":
        return 0;
      case "circle":
        return 1;
      case "square":
        return 2;
      case "decimal":
        return 3;
      case "cjk-decimal":
        return 4;
      case "decimal-leading-zero":
        return 5;
      case "lower-roman":
        return 6;
      case "upper-roman":
        return 7;
      case "lower-greek":
        return 8;
      case "lower-alpha":
        return 9;
      case "upper-alpha":
        return 10;
      case "arabic-indic":
        return 11;
      case "armenian":
        return 12;
      case "bengali":
        return 13;
      case "cambodian":
        return 14;
      case "cjk-earthly-branch":
        return 15;
      case "cjk-heavenly-stem":
        return 16;
      case "cjk-ideographic":
        return 17;
      case "devanagari":
        return 18;
      case "ethiopic-numeric":
        return 19;
      case "georgian":
        return 20;
      case "gujarati":
        return 21;
      case "gurmukhi":
        return 22;
      case "hebrew":
        return 22;
      case "hiragana":
        return 23;
      case "hiragana-iroha":
        return 24;
      case "japanese-formal":
        return 25;
      case "japanese-informal":
        return 26;
      case "kannada":
        return 27;
      case "katakana":
        return 28;
      case "katakana-iroha":
        return 29;
      case "khmer":
        return 30;
      case "korean-hangul-formal":
        return 31;
      case "korean-hanja-formal":
        return 32;
      case "korean-hanja-informal":
        return 33;
      case "lao":
        return 34;
      case "lower-armenian":
        return 35;
      case "malayalam":
        return 36;
      case "mongolian":
        return 37;
      case "myanmar":
        return 38;
      case "oriya":
        return 39;
      case "persian":
        return 40;
      case "simp-chinese-formal":
        return 41;
      case "simp-chinese-informal":
        return 42;
      case "tamil":
        return 43;
      case "telugu":
        return 44;
      case "thai":
        return 45;
      case "tibetan":
        return 46;
      case "trad-chinese-formal":
        return 47;
      case "trad-chinese-informal":
        return 48;
      case "upper-armenian":
        return 49;
      case "disclosure-open":
        return 50;
      case "disclosure-closed":
        return 51;
      case "none":
      default:
        return -1;
    }
  }
}, No = function(A) {
  return {
    name: "margin-" + A,
    initialValue: "0",
    prefix: !1,
    type: 4
    /* TOKEN_VALUE */
  };
}, UI = No("top"), yI = No("right"), FI = No("bottom"), EI = No("left"), II = {
  name: "overflow",
  initialValue: "visible",
  prefix: !1,
  type: 1,
  parse: function(A, e) {
    return e.filter(iA).map(function(t) {
      switch (t.value) {
        case "hidden":
          return 1;
        case "scroll":
          return 2;
        case "clip":
          return 3;
        case "auto":
          return 4;
        case "visible":
        default:
          return 0;
      }
    });
  }
}, HI = {
  name: "overflow-wrap",
  initialValue: "normal",
  prefix: !1,
  type: 2,
  parse: function(A, e) {
    switch (e) {
      case "break-word":
        return "break-word";
      case "normal":
      default:
        return "normal";
    }
  }
}, Ro = function(A) {
  return {
    name: "padding-" + A,
    initialValue: "0",
    prefix: !1,
    type: 3,
    format: "length-percentage"
  };
}, xI = Ro("top"), SI = Ro("right"), TI = Ro("bottom"), _I = Ro("left"), LI = {
  name: "text-align",
  initialValue: "left",
  prefix: !1,
  type: 2,
  parse: function(A, e) {
    switch (e) {
      case "right":
        return 2;
      case "center":
      case "justify":
        return 1;
      case "left":
      default:
        return 0;
    }
  }
}, DI = {
  name: "position",
  initialValue: "static",
  prefix: !1,
  type: 2,
  parse: function(A, e) {
    switch (e) {
      case "relative":
        return 1;
      case "absolute":
        return 2;
      case "fixed":
        return 3;
      case "sticky":
        return 4;
    }
    return 0;
  }
}, OI = {
  name: "text-shadow",
  initialValue: "none",
  type: 1,
  prefix: !1,
  parse: function(A, e) {
    return e.length === 1 && Zc(e[0], "none") ? [] : st(e).map(function(t) {
      for (var r = {
        color: Qt.TRANSPARENT,
        offsetX: WA,
        offsetY: WA,
        blur: WA
      }, n = 0, a = 0; a < t.length; a++) {
        var i = t[a];
        or(i) ? (n === 0 ? r.offsetX = i : n === 1 ? r.offsetY = i : r.blur = i, n++) : r.color = Ar.parse(A, i);
      }
      return r;
    });
  }
}, kI = {
  name: "text-transform",
  initialValue: "none",
  prefix: !1,
  type: 2,
  parse: function(A, e) {
    switch (e) {
      case "uppercase":
        return 2;
      case "lowercase":
        return 1;
      case "capitalize":
        return 3;
    }
    return 0;
  }
}, MI = {
  name: "transform",
  initialValue: "none",
  prefix: !0,
  type: 0,
  parse: function(A, e) {
    if (e.type === 20 && e.value === "none")
      return null;
    if (e.type === 18) {
      var t = NI[e.name];
      if (typeof t > "u")
        throw new Error('Attempting to parse an unsupported transform function "' + e.name + '"');
      return t(e.values);
    }
    return null;
  }
}, KI = function(A) {
  var e = A.filter(function(t) {
    return t.type === 17;
  }).map(function(t) {
    return t.number;
  });
  return e.length === 6 ? e : null;
}, bI = function(A) {
  var e = A.filter(function(o) {
    return o.type === 17;
  }).map(function(o) {
    return o.number;
  }), t = e[0], r = e[1];
  e[2], e[3];
  var n = e[4], a = e[5];
  e[6], e[7], e[8], e[9], e[10], e[11];
  var i = e[12], s = e[13];
  return e[14], e[15], e.length === 16 ? [t, r, n, a, i, s] : null;
}, NI = {
  matrix: KI,
  matrix3d: bI
}, dg = {
  type: 16,
  number: 50,
  flags: ci
}, RI = [dg, dg], PI = {
  name: "transform-origin",
  initialValue: "50% 50%",
  prefix: !0,
  type: 1,
  parse: function(A, e) {
    var t = e.filter(_A);
    return t.length !== 2 ? RI : [t[0], t[1]];
  }
}, VI = {
  name: "visible",
  initialValue: "none",
  prefix: !1,
  type: 2,
  parse: function(A, e) {
    switch (e) {
      case "hidden":
        return 1;
      case "collapse":
        return 2;
      case "visible":
      default:
        return 0;
    }
  }
}, ma;
(function(A) {
  A.NORMAL = "normal", A.BREAK_ALL = "break-all", A.KEEP_ALL = "keep-all";
})(ma || (ma = {}));
var GI = {
  name: "word-break",
  initialValue: "normal",
  prefix: !1,
  type: 2,
  parse: function(A, e) {
    switch (e) {
      case "break-all":
        return ma.BREAK_ALL;
      case "keep-all":
        return ma.KEEP_ALL;
      case "normal":
      default:
        return ma.NORMAL;
    }
  }
}, WI = {
  name: "z-index",
  initialValue: "auto",
  prefix: !1,
  type: 0,
  parse: function(A, e) {
    if (e.type === 20)
      return { auto: !0, order: 0 };
    if (On(e))
      return { auto: !1, order: e.number };
    throw new Error("Invalid z-index number parsed");
  }
}, h0 = {
  name: "time",
  parse: function(A, e) {
    if (e.type === 15)
      switch (e.unit.toLowerCase()) {
        case "s":
          return 1e3 * e.number;
        case "ms":
          return e.number;
      }
    throw new Error("Unsupported time type");
  }
}, YI = {
  name: "opacity",
  initialValue: "1",
  type: 0,
  prefix: !1,
  parse: function(A, e) {
    return On(e) ? e.number : 1;
  }
}, XI = {
  name: "text-decoration-color",
  initialValue: "transparent",
  prefix: !1,
  type: 3,
  format: "color"
}, ZI = {
  name: "text-decoration-line",
  initialValue: "none",
  prefix: !1,
  type: 1,
  parse: function(A, e) {
    return e.filter(iA).map(function(t) {
      switch (t.value) {
        case "underline":
          return 1;
        case "overline":
          return 2;
        case "line-through":
          return 3;
        case "none":
          return 4;
      }
      return 0;
    }).filter(function(t) {
      return t !== 0;
    });
  }
}, jI = {
  name: "font-family",
  initialValue: "",
  prefix: !1,
  type: 1,
  parse: function(A, e) {
    var t = [], r = [];
    return e.forEach(function(n) {
      switch (n.type) {
        case 20:
        case 0:
          t.push(n.value);
          break;
        case 17:
          t.push(n.number.toString());
          break;
        case 4:
          r.push(t.join(" ")), t.length = 0;
          break;
      }
    }), t.length && r.push(t.join(" ")), r.map(function(n) {
      return n.indexOf(" ") === -1 ? n : "'" + n + "'";
    });
  }
}, zI = {
  name: "font-size",
  initialValue: "0",
  prefix: !1,
  type: 3,
  format: "length"
}, JI = {
  name: "font-weight",
  initialValue: "normal",
  type: 0,
  prefix: !1,
  parse: function(A, e) {
    if (On(e))
      return e.number;
    if (iA(e))
      switch (e.value) {
        case "bold":
          return 700;
        case "normal":
        default:
          return 400;
      }
    return 400;
  }
}, $I = {
  name: "font-variant",
  initialValue: "none",
  type: 1,
  prefix: !1,
  parse: function(A, e) {
    return e.filter(iA).map(function(t) {
      return t.value;
    });
  }
}, qI = {
  name: "font-style",
  initialValue: "normal",
  prefix: !1,
  type: 2,
  parse: function(A, e) {
    switch (e) {
      case "oblique":
        return "oblique";
      case "italic":
        return "italic";
      case "normal":
      default:
        return "normal";
    }
  }
}, MA = function(A, e) {
  return (A & e) !== 0;
}, AH = {
  name: "content",
  initialValue: "none",
  type: 1,
  prefix: !1,
  parse: function(A, e) {
    if (e.length === 0)
      return [];
    var t = e[0];
    return t.type === 20 && t.value === "none" ? [] : e;
  }
}, eH = {
  name: "counter-increment",
  initialValue: "none",
  prefix: !0,
  type: 1,
  parse: function(A, e) {
    if (e.length === 0)
      return null;
    var t = e[0];
    if (t.type === 20 && t.value === "none")
      return null;
    for (var r = [], n = e.filter(qw), a = 0; a < n.length; a++) {
      var i = n[a], s = n[a + 1];
      if (i.type === 20) {
        var o = s && On(s) ? s.number : 1;
        r.push({ counter: i.value, increment: o });
      }
    }
    return r;
  }
}, tH = {
  name: "counter-reset",
  initialValue: "none",
  prefix: !0,
  type: 1,
  parse: function(A, e) {
    if (e.length === 0)
      return [];
    for (var t = [], r = e.filter(qw), n = 0; n < r.length; n++) {
      var a = r[n], i = r[n + 1];
      if (iA(a) && a.value !== "none") {
        var s = i && On(i) ? i.number : 0;
        t.push({ counter: a.value, reset: s });
      }
    }
    return t;
  }
}, rH = {
  name: "duration",
  initialValue: "0s",
  prefix: !1,
  type: 1,
  parse: function(A, e) {
    return e.filter(fi).map(function(t) {
      return h0.parse(A, t);
    });
  }
}, nH = {
  name: "quotes",
  initialValue: "none",
  prefix: !0,
  type: 1,
  parse: function(A, e) {
    if (e.length === 0)
      return null;
    var t = e[0];
    if (t.type === 20 && t.value === "none")
      return null;
    var r = [], n = e.filter(S1);
    if (n.length % 2 !== 0)
      return null;
    for (var a = 0; a < n.length; a += 2) {
      var i = n[a].value, s = n[a + 1].value;
      r.push({ open: i, close: s });
    }
    return r;
  }
}, Bg = function(A, e, t) {
  if (!A)
    return "";
  var r = A[Math.min(e, A.length - 1)];
  return r ? t ? r.open : r.close : "";
}, aH = {
  name: "box-shadow",
  initialValue: "none",
  type: 1,
  prefix: !1,
  parse: function(A, e) {
    return e.length === 1 && Zc(e[0], "none") ? [] : st(e).map(function(t) {
      for (var r = {
        color: 255,
        offsetX: WA,
        offsetY: WA,
        blur: WA,
        spread: WA,
        inset: !1
      }, n = 0, a = 0; a < t.length; a++) {
        var i = t[a];
        Zc(i, "inset") ? r.inset = !0 : or(i) ? (n === 0 ? r.offsetX = i : n === 1 ? r.offsetY = i : n === 2 ? r.blur = i : r.spread = i, n++) : r.color = Ar.parse(A, i);
      }
      return r;
    });
  }
}, iH = {
  name: "paint-order",
  initialValue: "normal",
  prefix: !1,
  type: 1,
  parse: function(A, e) {
    var t = [
      0,
      1,
      2
      /* MARKERS */
    ], r = [];
    return e.filter(iA).forEach(function(n) {
      switch (n.value) {
        case "stroke":
          r.push(
            1
            /* STROKE */
          );
          break;
        case "fill":
          r.push(
            0
            /* FILL */
          );
          break;
        case "markers":
          r.push(
            2
            /* MARKERS */
          );
          break;
      }
    }), t.forEach(function(n) {
      r.indexOf(n) === -1 && r.push(n);
    }), r;
  }
}, sH = {
  name: "-webkit-text-stroke-color",
  initialValue: "currentcolor",
  prefix: !1,
  type: 3,
  format: "color"
}, oH = {
  name: "-webkit-text-stroke-width",
  initialValue: "0",
  type: 0,
  prefix: !1,
  parse: function(A, e) {
    return fi(e) ? e.number : 0;
  }
}, uH = (
  /** @class */
  function() {
    function A(e, t) {
      var r, n;
      this.animationDuration = T(e, rH, t.animationDuration), this.backgroundClip = T(e, L1, t.backgroundClip), this.backgroundColor = T(e, D1, t.backgroundColor), this.backgroundImage = T(e, G1, t.backgroundImage), this.backgroundOrigin = T(e, W1, t.backgroundOrigin), this.backgroundPosition = T(e, Y1, t.backgroundPosition), this.backgroundRepeat = T(e, X1, t.backgroundRepeat), this.backgroundSize = T(e, j1, t.backgroundSize), this.borderTopColor = T(e, J1, t.borderTopColor), this.borderRightColor = T(e, $1, t.borderRightColor), this.borderBottomColor = T(e, q1, t.borderBottomColor), this.borderLeftColor = T(e, AI, t.borderLeftColor), this.borderTopLeftRadius = T(e, eI, t.borderTopLeftRadius), this.borderTopRightRadius = T(e, tI, t.borderTopRightRadius), this.borderBottomRightRadius = T(e, rI, t.borderBottomRightRadius), this.borderBottomLeftRadius = T(e, nI, t.borderBottomLeftRadius), this.borderTopStyle = T(e, aI, t.borderTopStyle), this.borderRightStyle = T(e, iI, t.borderRightStyle), this.borderBottomStyle = T(e, sI, t.borderBottomStyle), this.borderLeftStyle = T(e, oI, t.borderLeftStyle), this.borderTopWidth = T(e, uI, t.borderTopWidth), this.borderRightWidth = T(e, lI, t.borderRightWidth), this.borderBottomWidth = T(e, cI, t.borderBottomWidth), this.borderLeftWidth = T(e, fI, t.borderLeftWidth), this.boxShadow = T(e, aH, t.boxShadow), this.color = T(e, dI, t.color), this.direction = T(e, BI, t.direction), this.display = T(e, gI, t.display), this.float = T(e, pI, t.cssFloat), this.fontFamily = T(e, jI, t.fontFamily), this.fontSize = T(e, zI, t.fontSize), this.fontStyle = T(e, qI, t.fontStyle), this.fontVariant = T(e, $I, t.fontVariant), this.fontWeight = T(e, JI, t.fontWeight), this.letterSpacing = T(e, wI, t.letterSpacing), this.lineBreak = T(e, vI, t.lineBreak), this.lineHeight = T(e, mI, t.lineHeight), this.listStyleImage = T(e, CI, t.listStyleImage), this.listStylePosition = T(e, QI, t.listStylePosition), this.listStyleType = T(e, jc, t.listStyleType), this.marginTop = T(e, UI, t.marginTop), this.marginRight = T(e, yI, t.marginRight), this.marginBottom = T(e, FI, t.marginBottom), this.marginLeft = T(e, EI, t.marginLeft), this.opacity = T(e, YI, t.opacity);
      var a = T(e, II, t.overflow);
      this.overflowX = a[0], this.overflowY = a[a.length > 1 ? 1 : 0], this.overflowWrap = T(e, HI, t.overflowWrap), this.paddingTop = T(e, xI, t.paddingTop), this.paddingRight = T(e, SI, t.paddingRight), this.paddingBottom = T(e, TI, t.paddingBottom), this.paddingLeft = T(e, _I, t.paddingLeft), this.paintOrder = T(e, iH, t.paintOrder), this.position = T(e, DI, t.position), this.textAlign = T(e, LI, t.textAlign), this.textDecorationColor = T(e, XI, (r = t.textDecorationColor) !== null && r !== void 0 ? r : t.color), this.textDecorationLine = T(e, ZI, (n = t.textDecorationLine) !== null && n !== void 0 ? n : t.textDecoration), this.textShadow = T(e, OI, t.textShadow), this.textTransform = T(e, kI, t.textTransform), this.transform = T(e, MI, t.transform), this.transformOrigin = T(e, PI, t.transformOrigin), this.visibility = T(e, VI, t.visibility), this.webkitTextStrokeColor = T(e, sH, t.webkitTextStrokeColor), this.webkitTextStrokeWidth = T(e, oH, t.webkitTextStrokeWidth), this.wordBreak = T(e, GI, t.wordBreak), this.zIndex = T(e, WI, t.zIndex);
    }
    return A.prototype.isVisible = function() {
      return this.display > 0 && this.opacity > 0 && this.visibility === 0;
    }, A.prototype.isTransparent = function() {
      return er(this.backgroundColor);
    }, A.prototype.isTransformed = function() {
      return this.transform !== null;
    }, A.prototype.isPositioned = function() {
      return this.position !== 0;
    }, A.prototype.isPositionedWithZIndex = function() {
      return this.isPositioned() && !this.zIndex.auto;
    }, A.prototype.isFloating = function() {
      return this.float !== 0;
    }, A.prototype.isInlineLevel = function() {
      return MA(
        this.display,
        4
        /* INLINE */
      ) || MA(
        this.display,
        33554432
        /* INLINE_BLOCK */
      ) || MA(
        this.display,
        268435456
        /* INLINE_FLEX */
      ) || MA(
        this.display,
        536870912
        /* INLINE_GRID */
      ) || MA(
        this.display,
        67108864
        /* INLINE_LIST_ITEM */
      ) || MA(
        this.display,
        134217728
        /* INLINE_TABLE */
      );
    }, A;
  }()
), lH = (
  /** @class */
  /* @__PURE__ */ function() {
    function A(e, t) {
      this.content = T(e, AH, t.content), this.quotes = T(e, nH, t.quotes);
    }
    return A;
  }()
), gg = (
  /** @class */
  /* @__PURE__ */ function() {
    function A(e, t) {
      this.counterIncrement = T(e, eH, t.counterIncrement), this.counterReset = T(e, tH, t.counterReset);
    }
    return A;
  }()
), T = function(A, e, t) {
  var r = new Jw(), n = t !== null && typeof t < "u" ? t.toString() : e.initialValue;
  r.write(n);
  var a = new $w(r.read());
  switch (e.type) {
    case 2:
      var i = a.parseComponentValue();
      return e.parse(A, iA(i) ? i.value : e.initialValue);
    case 0:
      return e.parse(A, a.parseComponentValue());
    case 1:
      return e.parse(A, a.parseComponentValues());
    case 4:
      return a.parseComponentValue();
    case 3:
      switch (e.format) {
        case "angle":
          return Do.parse(A, a.parseComponentValue());
        case "color":
          return Ar.parse(A, a.parseComponentValue());
        case "image":
          return id.parse(A, a.parseComponentValue());
        case "length":
          var s = a.parseComponentValue();
          return or(s) ? s : WA;
        case "length-percentage":
          var o = a.parseComponentValue();
          return _A(o) ? o : WA;
        case "time":
          return h0.parse(A, a.parseComponentValue());
      }
      break;
  }
}, cH = "data-html2canvas-debug", fH = function(A) {
  var e = A.getAttribute(cH);
  switch (e) {
    case "all":
      return 1;
    case "clone":
      return 2;
    case "parse":
      return 3;
    case "render":
      return 4;
    default:
      return 0;
  }
}, zc = function(A, e) {
  var t = fH(A);
  return t === 1 || e === t;
}, ot = (
  /** @class */
  /* @__PURE__ */ function() {
    function A(e, t) {
      if (this.context = e, this.textNodes = [], this.elements = [], this.flags = 0, zc(
        t,
        3
        /* PARSE */
      ))
        debugger;
      this.styles = new uH(e, window.getComputedStyle(t, null)), qc(t) && (this.styles.animationDuration.some(function(r) {
        return r > 0;
      }) && (t.style.animationDuration = "0s"), this.styles.transform !== null && (t.style.transform = "none")), this.bounds = _o(this.context, t), zc(
        t,
        4
        /* RENDER */
      ) && (this.flags |= 16);
    }
    return A;
  }()
), dH = "AAAAAAAAAAAAEA4AGBkAAFAaAAACAAAAAAAIABAAGAAwADgACAAQAAgAEAAIABAACAAQAAgAEAAIABAACAAQAAgAEAAIABAAQABIAEQATAAIABAACAAQAAgAEAAIABAAVABcAAgAEAAIABAACAAQAGAAaABwAHgAgACIAI4AlgAIABAAmwCjAKgAsAC2AL4AvQDFAMoA0gBPAVYBWgEIAAgACACMANoAYgFkAWwBdAF8AX0BhQGNAZUBlgGeAaMBlQGWAasBswF8AbsBwwF0AcsBYwHTAQgA2wG/AOMBdAF8AekB8QF0AfkB+wHiAHQBfAEIAAMC5gQIAAsCEgIIAAgAFgIeAggAIgIpAggAMQI5AkACygEIAAgASAJQAlgCYAIIAAgACAAKBQoFCgUTBRMFGQUrBSsFCAAIAAgACAAIAAgACAAIAAgACABdAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACABoAmgCrwGvAQgAbgJ2AggAHgEIAAgACADnAXsCCAAIAAgAgwIIAAgACAAIAAgACACKAggAkQKZAggAPADJAAgAoQKkAqwCsgK6AsICCADJAggA0AIIAAgACAAIANYC3gIIAAgACAAIAAgACABAAOYCCAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAkASoB+QIEAAgACAA8AEMCCABCBQgACABJBVAFCAAIAAgACAAIAAgACAAIAAgACABTBVoFCAAIAFoFCABfBWUFCAAIAAgACAAIAAgAbQUIAAgACAAIAAgACABzBXsFfQWFBYoFigWKBZEFigWKBYoFmAWfBaYFrgWxBbkFCAAIAAgACAAIAAgACAAIAAgACAAIAMEFCAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAMgFCADQBQgACAAIAAgACAAIAAgACAAIAAgACAAIAO4CCAAIAAgAiQAIAAgACABAAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAD0AggACAD8AggACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIANYFCAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAMDvwAIAAgAJAIIAAgACAAIAAgACAAIAAgACwMTAwgACAB9BOsEGwMjAwgAKwMyAwsFYgE3A/MEPwMIAEUDTQNRAwgAWQOsAGEDCAAIAAgACAAIAAgACABpAzQFNQU2BTcFOAU5BToFNAU1BTYFNwU4BTkFOgU0BTUFNgU3BTgFOQU6BTQFNQU2BTcFOAU5BToFNAU1BTYFNwU4BTkFOgU0BTUFNgU3BTgFOQU6BTQFNQU2BTcFOAU5BToFNAU1BTYFNwU4BTkFOgU0BTUFNgU3BTgFOQU6BTQFNQU2BTcFOAU5BToFNAU1BTYFNwU4BTkFOgU0BTUFNgU3BTgFOQU6BTQFNQU2BTcFOAU5BToFNAU1BTYFNwU4BTkFOgU0BTUFNgU3BTgFOQU6BTQFNQU2BTcFOAU5BToFNAU1BTYFNwU4BTkFOgU0BTUFNgU3BTgFOQU6BTQFNQU2BTcFOAU5BToFNAU1BTYFNwU4BTkFOgU0BTUFNgU3BTgFOQU6BTQFNQU2BTcFOAU5BToFNAU1BTYFNwU4BTkFOgU0BTUFNgU3BTgFOQU6BTQFNQU2BTcFOAU5BToFNAU1BTYFNwU4BTkFOgU0BTUFNgU3BTgFOQU6BTQFNQU2BTcFOAU5BToFNAU1BTYFNwU4BTkFOgU0BTUFNgU3BTgFOQU6BTQFNQU2BTcFOAU5BToFNAU1BTYFNwU4BTkFOgU0BTUFNgU3BTgFOQU6BTQFNQU2BTcFOAU5BToFNAU1BTYFNwU4BTkFOgU0BTUFNgU3BTgFOQU6BTQFNQU2BTcFOAU5BToFNAU1BTYFNwU4BTkFOgU0BTUFNgU3BTgFOQU6BTQFNQU2BTcFOAU5BToFNAU1BTYFNwU4BTkFOgU0BTUFNgU3BTgFOQU6BTQFNQU2BTcFOAU5BToFNAU1BTYFNwU4BTkFOgU0BTUFNgU3BTgFOQU6BTQFNQU2BTcFOAU5BToFNAU1BTYFNwU4BTkFOgU0BTUFNgU3BTgFOQU6BTQFNQU2BTcFOAU5BToFNAU1BTYFNwU4BTkFIQUoBSwFCAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACABtAwgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACABMAEwACAAIAAgACAAIABgACAAIAAgACAC/AAgACAAyAQgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACACAAIAAwAAgACAAIAAgACAAIAAgACAAIAAAARABIAAgACAAIABQASAAIAAgAIABwAEAAjgCIABsAqAC2AL0AigDQAtwC+IJIQqVAZUBWQqVAZUBlQGVAZUBlQGrC5UBlQGVAZUBlQGVAZUBlQGVAXsKlQGVAbAK6wsrDGUMpQzlDJUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAfAKAAuZA64AtwCJALoC6ADwAAgAuACgA/oEpgO6AqsD+AAIAAgAswMIAAgACAAIAIkAuwP5AfsBwwPLAwgACAAIAAgACADRA9kDCAAIAOED6QMIAAgACAAIAAgACADuA/YDCAAIAP4DyQAIAAgABgQIAAgAXQAOBAgACAAIAAgACAAIABMECAAIAAgACAAIAAgACAD8AAQBCAAIAAgAGgQiBCoECAExBAgAEAEIAAgACAAIAAgACAAIAAgACAAIAAgACAA4BAgACABABEYECAAIAAgATAQYAQgAVAQIAAgACAAIAAgACAAIAAgACAAIAFoECAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgAOQEIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAB+BAcACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAEABhgSMBAgACAAIAAgAlAQIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAwAEAAQABAADAAMAAwADAAQABAAEAAQABAAEAAQABHATAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgAdQMIAAgACAAIAAgACAAIAMkACAAIAAgAfQMIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACACFA4kDCAAIAAgACAAIAOcBCAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAIcDCAAIAAgACAAIAAgACAAIAAgACAAIAJEDCAAIAAgACADFAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACABgBAgAZgQIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgAbAQCBXIECAAIAHkECAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACABAAJwEQACjBKoEsgQIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAC6BMIECAAIAAgACAAIAAgACABmBAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgAxwQIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAGYECAAIAAgAzgQIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgAigWKBYoFigWKBYoFigWKBd0FXwUIAOIF6gXxBYoF3gT5BQAGCAaKBYoFigWKBYoFigWKBYoFigWKBYoFigXWBIoFigWKBYoFigWKBYoFigWKBYsFEAaKBYoFigWKBYoFigWKBRQGCACKBYoFigWKBQgACAAIANEECAAIABgGigUgBggAJgYIAC4GMwaKBYoF0wQ3Bj4GigWKBYoFigWKBYoFigWKBYoFigWKBYoFigUIAAgACAAIAAgACAAIAAgAigWKBYoFigWKBYoFigWKBYoFigWKBYoFigWKBYoFigWKBYoFigWKBYoFigWKBYoFigWKBYoFigWKBYoFigWLBf///////wQABAAEAAQABAAEAAQABAAEAAQAAwAEAAQAAgAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAAAAAAAAAAAAAAAAAAAAAAAAAOAAAAAAAAAAQADgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAFAAUABQAFAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAAAAUAAAAFAAUAAAAFAAUAAAAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABAAEAAQABAAEAAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAFAAUABQAFAAUABQAFAAUABQAAAAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAFAAUABQAFAAUAAQAAAAUABQAFAAUABQAFAAAAAAAFAAUAAAAFAAUABQAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAEAAAAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAUABQAFAAUABQAFAAUABQAFAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAUABQAFAAUABQAFAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAFAAAAAAAFAAUAAQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABwAFAAUABQAFAAAABwAHAAcAAAAHAAcABwAFAAEAAAAAAAAAAAAAAAAAAAAAAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAHAAcABwAFAAUABQAFAAcABwAFAAUAAAAAAAEAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAHAAAAAQABAAAAAAAAAAAAAAAFAAUABQAFAAAABwAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAHAAcABwAHAAcAAAAHAAcAAAAAAAUABQAHAAUAAQAHAAEABwAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAFAAUABQAFAAUABwABAAUABQAFAAUAAAAAAAAAAAAAAAEAAQABAAEAAQABAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABwAFAAUAAAAAAAAAAAAAAAAABQAFAAUABQAFAAUAAQAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAFAAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAQABQANAAQABAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAQABAAEAAQABAAEAAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAOAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABAAEAAQABAAEAAQABAAEAAQABAAEAAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAEAAQABAAEAAQABAAEAAQABAAAAAAAAAAAAAAAAAAAAAAABQAHAAUABQAFAAAAAAAAAAcABQAFAAUABQAFAAQABAAEAAQABAAEAAQABAAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAFAAUAAAAFAAUABQAFAAUAAAAFAAUABQAAAAUABQAFAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAUABQAAAAAAAAAAAAUABQAFAAcAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAHAAUAAAAHAAcABwAFAAUABQAFAAUABQAFAAUABwAHAAcABwAFAAcABwAAAAUABQAFAAUABQAFAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABwAHAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAAAAUABwAHAAUABQAFAAUAAAAAAAcABwAAAAAABwAHAAUAAAAAAAAAAAAAAAAAAAAAAAAABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAAAAAABQAFAAcAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAAABwAHAAcABQAFAAAAAAAAAAAABQAFAAAAAAAFAAUABQAAAAAAAAAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAAAAAAAAAFAAAAAAAAAAAAAAAAAAAAAAAAAAAABwAFAAUABQAFAAUAAAAFAAUABwAAAAcABwAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAUABQAFAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUAAAAFAAUABwAFAAUABQAFAAAAAAAHAAcAAAAAAAcABwAFAAAAAAAAAAAAAAAAAAAABQAFAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAcABwAAAAAAAAAHAAcABwAAAAcABwAHAAUAAAAAAAAAAAAAAAAAAAAAAAAABQAAAAAAAAAAAAAAAAAAAAAABQAHAAcABwAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABwAHAAcABwAAAAUABQAFAAAABQAFAAUABQAAAAAAAAAAAAAAAAAAAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAAAAcABQAHAAcABQAHAAcAAAAFAAcABwAAAAcABwAFAAUAAAAAAAAAAAAAAAAAAAAFAAUAAAAAAAAAAAAAAAAAAAAAAAAABQAFAAcABwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAAAAUABwAAAAAAAAAAAAAAAAAAAAAAAAAAAAUAAAAAAAAAAAAFAAcABwAFAAUABQAAAAUAAAAHAAcABwAHAAcABwAHAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUAAAAHAAUABQAFAAUABQAFAAUAAAAAAAAAAAAAAAAAAAAAAAUABQAFAAUABQAFAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAAABwAFAAUABQAFAAUABQAFAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAFAAUABQAFAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAAAAUAAAAFAAAAAAAAAAAABwAHAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABwAFAAUABQAFAAUAAAAFAAUAAAAAAAAAAAAAAAUABQAFAAUABQAFAAUABQAFAAUABQAAAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAFAAUABwAFAAUABQAFAAUABQAAAAUABQAHAAcABQAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAHAAcABQAFAAAAAAAAAAAABQAFAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAUABQAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAAAAcABQAFAAAAAAAAAAAAAAAAAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAFAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAHAAUABQAFAAUABQAFAAUABwAHAAcABwAHAAcABwAHAAUABwAHAAUABQAFAAUABQAFAAUABQAFAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAFAAUABwAHAAcABwAFAAUABwAHAAcAAAAAAAAAAAAHAAcABQAHAAcABwAHAAcABwAFAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAFAAcABwAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAcABQAHAAUABQAFAAUABQAFAAUAAAAFAAAABQAAAAAABQAFAAUABQAFAAUABQAFAAcABwAHAAcABwAHAAUABQAFAAUABQAFAAUABQAFAAUAAAAAAAUABQAFAAUABQAHAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAFAAUABQAFAAUABwAFAAcABwAHAAcABwAFAAcABwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAUABQAFAAUABQAFAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAUABwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAHAAUABQAFAAUABwAHAAUABQAHAAUABQAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAcABQAFAAcABwAHAAUABwAFAAUABQAHAAcAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABwAHAAcABwAHAAcABwAHAAUABQAFAAUABQAFAAUABQAHAAcABQAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAFAAUAAAAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAcABQAFAAUABQAFAAUABQAAAAAAAAAAAAUAAAAAAAAAAAAAAAAABQAAAAAABwAFAAUAAAAAAAAAAAAAAAAABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAAABQAFAAUABQAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAFAAUABQAFAAUADgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAOAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAFAAUAAAAFAAUABQAFAAUABQAFAAUABQAFAAAAAAAAAAAABQAAAAAAAAAFAAAAAAAAAAAABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABwAHAAUABQAHAAAAAAAAAAAABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAcABwAHAAcABQAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUAAAAAAAAAAAAAAAAABQAFAAUABQAFAAUABQAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAFAAUABQAFAAUABQAFAAUABQAHAAcAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAcABwAFAAUABQAFAAcABwAFAAUABwAHAAAAAAAAAAAAAAAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAFAAUABQAFAAcABwAFAAUABwAHAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAAAAAAAAAAAAAAAAAAAAAAFAAcAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUAAAAFAAUABQAAAAAABQAFAAAAAAAAAAAAAAAFAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAcABQAFAAcABwAAAAAAAAAAAAAABwAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAcABwAFAAcABwAFAAcABwAAAAcABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAFAAUABQAAAAAAAAAAAAAAAAAFAAUABQAAAAUABQAAAAAAAAAAAAAABQAFAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAUABQAAAAAAAAAAAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAcABQAHAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAUABQAFAAUABwAFAAUABQAFAAUABQAFAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABwAHAAcABQAFAAUABQAFAAUABQAFAAUABwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAHAAcABwAFAAUABQAHAAcABQAHAAUABQAAAAAAAAAAAAAAAAAFAAAABwAHAAcABQAFAAUABQAFAAUABQAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABwAHAAcABwAAAAAABwAHAAAAAAAHAAcABwAAAAAAAAAAAAAAAAAAAAAAAAAFAAAAAAAAAAAAAAAAAAAAAAAAAAAABwAHAAAAAAAFAAUABQAFAAUABQAFAAAAAAAAAAUABQAFAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAHAAcABwAFAAUABQAFAAUABQAFAAUABwAHAAUABQAFAAcABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAHAAcABQAFAAUABQAFAAUABwAFAAcABwAFAAcABQAFAAcABQAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAHAAcABQAFAAUABQAAAAAABwAHAAcABwAFAAUABwAFAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAcABwAHAAUABQAFAAUABQAFAAUABQAHAAcABQAHAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABwAFAAcABwAFAAUABQAFAAUABQAHAAUAAAAAAAAAAAAAAAAAAAAAAAcABwAFAAUABQAFAAcABQAFAAUABQAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAHAAcABwAFAAUABQAFAAUABQAFAAUABQAHAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAHAAcABwAFAAUABQAFAAAAAAAFAAUABwAHAAcABwAFAAAAAAAAAAcAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAUABQAFAAUABQAFAAUABQAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUAAAAAAAAAAAAAAAAAAAAAAAAABQAFAAUABQAFAAUABwAHAAUABQAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAcABQAFAAUABQAFAAUABQAAAAUABQAFAAUABQAFAAcABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAAAHAAUABQAFAAUABQAFAAUABwAFAAUABwAFAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAFAAUABQAFAAUAAAAAAAAABQAAAAUABQAAAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAHAAcABwAHAAcAAAAFAAUAAAAHAAcABQAHAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAUABwAHAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAUABQAFAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAUABQAFAAUABQAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAAAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAAAAAAAAAAAAAAAAAAABQAFAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAcABwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAAAAUABQAFAAAAAAAFAAUABQAFAAUABQAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAFAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAFAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAAAAAAAAAAABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAAAAAAAAAAAAAAAAAAAAAAFAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAFAAUABQAAAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAFAAUABQAFAAUABQAAAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAAAAAABQAFAAUABQAFAAUABQAAAAUABQAAAAUABQAFAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAUABQAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAFAAUABQAFAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAFAAUABQAFAAUADgAOAA4ADgAOAA4ADwAPAA8ADwAPAA8ADwAPAA8ADwAPAA8ADwAPAA8ADwAPAA8ADwAPAA8ADwAPAA8ADwAPAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAcABwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABwAHAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAAAAAAAAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAKAAoACgAKAAoACgAKAAoACgAKAAoACgAKAAoACgAKAAoACgAKAAoACgAKAAoACgAMAAwADAAMAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkAAAAAAAAAAAAKAAoACgAKAAoACgAKAAoACgAKAAoACgAKAAoACgAKAAoACgAKAAoACgAKAAoACgAKAAoACgAKAAoACgAKAAoACgAAAAAAAAAAAAsADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwACwAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAAAAAADgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA4AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAOAA4ADgAOAA4ADgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADgAOAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA4ADgAAAAAAAAAAAAAAAAAAAAAADgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADgAOAA4ADgAOAA4ADgAOAA4ADgAOAAAAAAAAAAAADgAOAA4AAAAAAAAAAAAAAAAAAAAOAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADgAOAAAAAAAAAAAAAAAAAAAAAAAAAAAADgAAAAAAAAAAAAAAAAAAAAAAAAAOAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADgAOAA4ADgAAAA4ADgAOAA4ADgAOAAAADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4AAAAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAAAAAAAAAAAAAAAAAAAAAAAAAAAADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4AAAAAAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAAAA4AAAAOAAAAAAAAAAAAAAAAAA4AAAAAAAAAAAAAAAAADgAAAAAAAAAAAAAAAAAAAAAAAAAAAA4ADgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADgAAAAAADgAAAAAAAAAAAA4AAAAOAAAAAAAAAAAADgAOAA4AAAAOAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAOAA4ADgAOAA4AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAOAA4ADgAAAAAAAAAAAAAAAAAAAAAAAAAOAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAOAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAOAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAOAA4AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA4ADgAOAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADgAOAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADgAAAAAAAAAAAA4AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAOAAAADgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAOAA4ADgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA4ADgAOAA4ADgAOAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA4ADgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADgAAAAAADgAOAA4ADgAOAA4ADgAOAA4ADgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAAAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAAAAAAAAAAAAAAAAAAAAAAAAAAAADgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA4AAAAAAA4ADgAOAA4ADgAOAA4ADgAOAAAADgAOAA4ADgAAAAAAAAAAAAAAAAAAAAAAAAAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4AAAAAAAAAAAAAAAAADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAOAA4ADgAOAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADgAOAA4ADgAOAA4ADgAOAAAAAAAAAAAAAAAAAAAAAAAAAAAADgAOAA4ADgAOAA4AAAAAAAAAAAAAAAAAAAAAAA4ADgAOAA4ADgAOAA4ADgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4AAAAOAA4ADgAOAA4ADgAAAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4AAAAAAAAAAAA=", hg = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/", sa = typeof Uint8Array > "u" ? [] : new Uint8Array(256);
for (var ji = 0; ji < hg.length; ji++)
  sa[hg.charCodeAt(ji)] = ji;
var BH = function(A) {
  var e = A.length * 0.75, t = A.length, r, n = 0, a, i, s, o;
  A[A.length - 1] === "=" && (e--, A[A.length - 2] === "=" && e--);
  var u = typeof ArrayBuffer < "u" && typeof Uint8Array < "u" && typeof Uint8Array.prototype.slice < "u" ? new ArrayBuffer(e) : new Array(e), l = Array.isArray(u) ? u : new Uint8Array(u);
  for (r = 0; r < t; r += 4)
    a = sa[A.charCodeAt(r)], i = sa[A.charCodeAt(r + 1)], s = sa[A.charCodeAt(r + 2)], o = sa[A.charCodeAt(r + 3)], l[n++] = a << 2 | i >> 4, l[n++] = (i & 15) << 4 | s >> 2, l[n++] = (s & 3) << 6 | o & 63;
  return u;
}, gH = function(A) {
  for (var e = A.length, t = [], r = 0; r < e; r += 2)
    t.push(A[r + 1] << 8 | A[r]);
  return t;
}, hH = function(A) {
  for (var e = A.length, t = [], r = 0; r < e; r += 4)
    t.push(A[r + 3] << 24 | A[r + 2] << 16 | A[r + 1] << 8 | A[r]);
  return t;
}, Ir = 5, sd = 11, Ku = 2, pH = sd - Ir, p0 = 65536 >> Ir, wH = 1 << Ir, bu = wH - 1, vH = 1024 >> Ir, mH = p0 + vH, CH = mH, QH = 32, UH = CH + QH, yH = 65536 >> sd, FH = 1 << pH, EH = FH - 1, pg = function(A, e, t) {
  return A.slice ? A.slice(e, t) : new Uint16Array(Array.prototype.slice.call(A, e, t));
}, IH = function(A, e, t) {
  return A.slice ? A.slice(e, t) : new Uint32Array(Array.prototype.slice.call(A, e, t));
}, HH = function(A, e) {
  var t = BH(A), r = Array.isArray(t) ? hH(t) : new Uint32Array(t), n = Array.isArray(t) ? gH(t) : new Uint16Array(t), a = 24, i = pg(n, a / 2, r[4] / 2), s = r[5] === 2 ? pg(n, (a + r[4]) / 2) : IH(r, Math.ceil((a + r[4]) / 4));
  return new xH(r[0], r[1], r[2], r[3], i, s);
}, xH = (
  /** @class */
  function() {
    function A(e, t, r, n, a, i) {
      this.initialValue = e, this.errorValue = t, this.highStart = r, this.highValueIndex = n, this.index = a, this.data = i;
    }
    return A.prototype.get = function(e) {
      var t;
      if (e >= 0) {
        if (e < 55296 || e > 56319 && e <= 65535)
          return t = this.index[e >> Ir], t = (t << Ku) + (e & bu), this.data[t];
        if (e <= 65535)
          return t = this.index[p0 + (e - 55296 >> Ir)], t = (t << Ku) + (e & bu), this.data[t];
        if (e < this.highStart)
          return t = UH - yH + (e >> sd), t = this.index[t], t += e >> Ir & EH, t = this.index[t], t = (t << Ku) + (e & bu), this.data[t];
        if (e <= 1114111)
          return this.data[this.highValueIndex];
      }
      return this.errorValue;
    }, A;
  }()
), wg = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/", SH = typeof Uint8Array > "u" ? [] : new Uint8Array(256);
for (var zi = 0; zi < wg.length; zi++)
  SH[wg.charCodeAt(zi)] = zi;
var TH = 1, Nu = 2, Ru = 3, vg = 4, mg = 5, _H = 7, Cg = 8, Pu = 9, Vu = 10, Qg = 11, Ug = 12, yg = 13, Fg = 14, Gu = 15, LH = function(A) {
  for (var e = [], t = 0, r = A.length; t < r; ) {
    var n = A.charCodeAt(t++);
    if (n >= 55296 && n <= 56319 && t < r) {
      var a = A.charCodeAt(t++);
      (a & 64512) === 56320 ? e.push(((n & 1023) << 10) + (a & 1023) + 65536) : (e.push(n), t--);
    } else
      e.push(n);
  }
  return e;
}, DH = function() {
  for (var A = [], e = 0; e < arguments.length; e++)
    A[e] = arguments[e];
  if (String.fromCodePoint)
    return String.fromCodePoint.apply(String, A);
  var t = A.length;
  if (!t)
    return "";
  for (var r = [], n = -1, a = ""; ++n < t; ) {
    var i = A[n];
    i <= 65535 ? r.push(i) : (i -= 65536, r.push((i >> 10) + 55296, i % 1024 + 56320)), (n + 1 === t || r.length > 16384) && (a += String.fromCharCode.apply(String, r), r.length = 0);
  }
  return a;
}, OH = HH(dH), Ie = "×", Wu = "÷", kH = function(A) {
  return OH.get(A);
}, MH = function(A, e, t) {
  var r = t - 2, n = e[r], a = e[t - 1], i = e[t];
  if (a === Nu && i === Ru)
    return Ie;
  if (a === Nu || a === Ru || a === vg || i === Nu || i === Ru || i === vg)
    return Wu;
  if (a === Cg && [Cg, Pu, Qg, Ug].indexOf(i) !== -1 || (a === Qg || a === Pu) && (i === Pu || i === Vu) || (a === Ug || a === Vu) && i === Vu || i === yg || i === mg || i === _H || a === TH)
    return Ie;
  if (a === yg && i === Fg) {
    for (; n === mg; )
      n = e[--r];
    if (n === Fg)
      return Ie;
  }
  if (a === Gu && i === Gu) {
    for (var s = 0; n === Gu; )
      s++, n = e[--r];
    if (s % 2 === 0)
      return Ie;
  }
  return Wu;
}, KH = function(A) {
  var e = LH(A), t = e.length, r = 0, n = 0, a = e.map(kH);
  return {
    next: function() {
      if (r >= t)
        return { done: !0, value: null };
      for (var i = Ie; r < t && (i = MH(e, a, ++r)) === Ie; )
        ;
      if (i !== Ie || r === t) {
        var s = DH.apply(null, e.slice(n, r));
        return n = r, { value: s, done: !1 };
      }
      return { done: !0, value: null };
    }
  };
}, bH = function(A) {
  for (var e = KH(A), t = [], r; !(r = e.next()).done; )
    r.value && t.push(r.value.slice());
  return t;
}, NH = function(A) {
  var e = 123;
  if (A.createRange) {
    var t = A.createRange();
    if (t.getBoundingClientRect) {
      var r = A.createElement("boundtest");
      r.style.height = e + "px", r.style.display = "block", A.body.appendChild(r), t.selectNode(r);
      var n = t.getBoundingClientRect(), a = Math.round(n.height);
      if (A.body.removeChild(r), a === e)
        return !0;
    }
  }
  return !1;
}, RH = function(A) {
  var e = A.createElement("boundtest");
  e.style.width = "50px", e.style.display = "block", e.style.fontSize = "12px", e.style.letterSpacing = "0px", e.style.wordSpacing = "0px", A.body.appendChild(e);
  var t = A.createRange();
  e.innerHTML = typeof "".repeat == "function" ? "&#128104;".repeat(10) : "";
  var r = e.firstChild, n = Lo(r.data).map(function(o) {
    return SA(o);
  }), a = 0, i = {}, s = n.every(function(o, u) {
    t.setStart(r, a), t.setEnd(r, a + o.length);
    var l = t.getBoundingClientRect();
    a += o.length;
    var c = l.x > i.x || l.y > i.y;
    return i = l, u === 0 ? !0 : c;
  });
  return A.body.removeChild(e), s;
}, PH = function() {
  return typeof new Image().crossOrigin < "u";
}, VH = function() {
  return typeof new XMLHttpRequest().responseType == "string";
}, GH = function(A) {
  var e = new Image(), t = A.createElement("canvas"), r = t.getContext("2d");
  if (!r)
    return !1;
  e.src = "data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg'></svg>";
  try {
    r.drawImage(e, 0, 0), t.toDataURL();
  } catch {
    return !1;
  }
  return !0;
}, Eg = function(A) {
  return A[0] === 0 && A[1] === 255 && A[2] === 0 && A[3] === 255;
}, WH = function(A) {
  var e = A.createElement("canvas"), t = 100;
  e.width = t, e.height = t;
  var r = e.getContext("2d");
  if (!r)
    return Promise.reject(!1);
  r.fillStyle = "rgb(0, 255, 0)", r.fillRect(0, 0, t, t);
  var n = new Image(), a = e.toDataURL();
  n.src = a;
  var i = Jc(t, t, 0, 0, n);
  return r.fillStyle = "red", r.fillRect(0, 0, t, t), Ig(i).then(function(s) {
    r.drawImage(s, 0, 0);
    var o = r.getImageData(0, 0, t, t).data;
    r.fillStyle = "red", r.fillRect(0, 0, t, t);
    var u = A.createElement("div");
    return u.style.backgroundImage = "url(" + a + ")", u.style.height = t + "px", Eg(o) ? Ig(Jc(t, t, 0, 0, u)) : Promise.reject(!1);
  }).then(function(s) {
    return r.drawImage(s, 0, 0), Eg(r.getImageData(0, 0, t, t).data);
  }).catch(function() {
    return !1;
  });
}, Jc = function(A, e, t, r, n) {
  var a = "http://www.w3.org/2000/svg", i = document.createElementNS(a, "svg"), s = document.createElementNS(a, "foreignObject");
  return i.setAttributeNS(null, "width", A.toString()), i.setAttributeNS(null, "height", e.toString()), s.setAttributeNS(null, "width", "100%"), s.setAttributeNS(null, "height", "100%"), s.setAttributeNS(null, "x", t.toString()), s.setAttributeNS(null, "y", r.toString()), s.setAttributeNS(null, "externalResourcesRequired", "true"), i.appendChild(s), s.appendChild(n), i;
}, Ig = function(A) {
  return new Promise(function(e, t) {
    var r = new Image();
    r.onload = function() {
      return e(r);
    }, r.onerror = t, r.src = "data:image/svg+xml;charset=utf-8," + encodeURIComponent(new XMLSerializer().serializeToString(A));
  });
}, GA = {
  get SUPPORT_RANGE_BOUNDS() {
    var A = NH(document);
    return Object.defineProperty(GA, "SUPPORT_RANGE_BOUNDS", { value: A }), A;
  },
  get SUPPORT_WORD_BREAKING() {
    var A = GA.SUPPORT_RANGE_BOUNDS && RH(document);
    return Object.defineProperty(GA, "SUPPORT_WORD_BREAKING", { value: A }), A;
  },
  get SUPPORT_SVG_DRAWING() {
    var A = GH(document);
    return Object.defineProperty(GA, "SUPPORT_SVG_DRAWING", { value: A }), A;
  },
  get SUPPORT_FOREIGNOBJECT_DRAWING() {
    var A = typeof Array.from == "function" && typeof window.fetch == "function" ? WH(document) : Promise.resolve(!1);
    return Object.defineProperty(GA, "SUPPORT_FOREIGNOBJECT_DRAWING", { value: A }), A;
  },
  get SUPPORT_CORS_IMAGES() {
    var A = PH();
    return Object.defineProperty(GA, "SUPPORT_CORS_IMAGES", { value: A }), A;
  },
  get SUPPORT_RESPONSE_TYPE() {
    var A = VH();
    return Object.defineProperty(GA, "SUPPORT_RESPONSE_TYPE", { value: A }), A;
  },
  get SUPPORT_CORS_XHR() {
    var A = "withCredentials" in new XMLHttpRequest();
    return Object.defineProperty(GA, "SUPPORT_CORS_XHR", { value: A }), A;
  },
  get SUPPORT_NATIVE_TEXT_SEGMENTATION() {
    var A = !!(typeof Intl < "u" && Intl.Segmenter);
    return Object.defineProperty(GA, "SUPPORT_NATIVE_TEXT_SEGMENTATION", { value: A }), A;
  }
}, Ca = (
  /** @class */
  /* @__PURE__ */ function() {
    function A(e, t) {
      this.text = e, this.bounds = t;
    }
    return A;
  }()
), YH = function(A, e, t, r) {
  var n = jH(e, t), a = [], i = 0;
  return n.forEach(function(s) {
    if (t.textDecorationLine.length || s.trim().length > 0)
      if (GA.SUPPORT_RANGE_BOUNDS) {
        var o = Hg(r, i, s.length).getClientRects();
        if (o.length > 1) {
          var u = od(s), l = 0;
          u.forEach(function(g) {
            a.push(new Ca(g, Ht.fromDOMRectList(A, Hg(r, l + i, g.length).getClientRects()))), l += g.length;
          });
        } else
          a.push(new Ca(s, Ht.fromDOMRectList(A, o)));
      } else {
        var c = r.splitText(s.length);
        a.push(new Ca(s, XH(A, r))), r = c;
      }
    else
      GA.SUPPORT_RANGE_BOUNDS || (r = r.splitText(s.length));
    i += s.length;
  }), a;
}, XH = function(A, e) {
  var t = e.ownerDocument;
  if (t) {
    var r = t.createElement("html2canvaswrapper");
    r.appendChild(e.cloneNode(!0));
    var n = e.parentNode;
    if (n) {
      n.replaceChild(r, e);
      var a = _o(A, r);
      return r.firstChild && n.replaceChild(r.firstChild, r), a;
    }
  }
  return Ht.EMPTY;
}, Hg = function(A, e, t) {
  var r = A.ownerDocument;
  if (!r)
    throw new Error("Node has no owner document");
  var n = r.createRange();
  return n.setStart(A, e), n.setEnd(A, e + t), n;
}, od = function(A) {
  if (GA.SUPPORT_NATIVE_TEXT_SEGMENTATION) {
    var e = new Intl.Segmenter(void 0, { granularity: "grapheme" });
    return Array.from(e.segment(A)).map(function(t) {
      return t.segment;
    });
  }
  return bH(A);
}, ZH = function(A, e) {
  if (GA.SUPPORT_NATIVE_TEXT_SEGMENTATION) {
    var t = new Intl.Segmenter(void 0, {
      granularity: "word"
    });
    return Array.from(t.segment(A)).map(function(r) {
      return r.segment;
    });
  }
  return JH(A, e);
}, jH = function(A, e) {
  return e.letterSpacing !== 0 ? od(A) : ZH(A, e);
}, zH = [32, 160, 4961, 65792, 65793, 4153, 4241], JH = function(A, e) {
  for (var t = yE(A, {
    lineBreak: e.lineBreak,
    wordBreak: e.overflowWrap === "break-word" ? "break-word" : e.wordBreak
  }), r = [], n, a = function() {
    if (n.value) {
      var i = n.value.slice(), s = Lo(i), o = "";
      s.forEach(function(u) {
        zH.indexOf(u) === -1 ? o += SA(u) : (o.length && r.push(o), r.push(SA(u)), o = "");
      }), o.length && r.push(o);
    }
  }; !(n = t.next()).done; )
    a();
  return r;
}, $H = (
  /** @class */
  /* @__PURE__ */ function() {
    function A(e, t, r) {
      this.text = qH(t.data, r.textTransform), this.textBounds = YH(e, this.text, r, t);
    }
    return A;
  }()
), qH = function(A, e) {
  switch (e) {
    case 1:
      return A.toLowerCase();
    case 3:
      return A.replace(Ax, ex);
    case 2:
      return A.toUpperCase();
    default:
      return A;
  }
}, Ax = /(^|\s|:|-|\(|\))([a-z])/g, ex = function(A, e, t) {
  return A.length > 0 ? e + t.toUpperCase() : A;
}, w0 = (
  /** @class */
  function(A) {
    ze(e, A);
    function e(t, r) {
      var n = A.call(this, t, r) || this;
      return n.src = r.currentSrc || r.src, n.intrinsicWidth = r.naturalWidth, n.intrinsicHeight = r.naturalHeight, n.context.cache.addImage(n.src), n;
    }
    return e;
  }(ot)
), v0 = (
  /** @class */
  function(A) {
    ze(e, A);
    function e(t, r) {
      var n = A.call(this, t, r) || this;
      return n.canvas = r, n.intrinsicWidth = r.width, n.intrinsicHeight = r.height, n;
    }
    return e;
  }(ot)
), m0 = (
  /** @class */
  function(A) {
    ze(e, A);
    function e(t, r) {
      var n = A.call(this, t, r) || this, a = new XMLSerializer(), i = _o(t, r);
      return r.setAttribute("width", i.width + "px"), r.setAttribute("height", i.height + "px"), n.svg = "data:image/svg+xml," + encodeURIComponent(a.serializeToString(r)), n.intrinsicWidth = r.width.baseVal.value, n.intrinsicHeight = r.height.baseVal.value, n.context.cache.addImage(n.svg), n;
    }
    return e;
  }(ot)
), C0 = (
  /** @class */
  function(A) {
    ze(e, A);
    function e(t, r) {
      var n = A.call(this, t, r) || this;
      return n.value = r.value, n;
    }
    return e;
  }(ot)
), $c = (
  /** @class */
  function(A) {
    ze(e, A);
    function e(t, r) {
      var n = A.call(this, t, r) || this;
      return n.start = r.start, n.reversed = typeof r.reversed == "boolean" && r.reversed === !0, n;
    }
    return e;
  }(ot)
), tx = [
  {
    type: 15,
    flags: 0,
    unit: "px",
    number: 3
  }
], rx = [
  {
    type: 16,
    flags: 0,
    number: 50
  }
], nx = function(A) {
  return A.width > A.height ? new Ht(A.left + (A.width - A.height) / 2, A.top, A.height, A.height) : A.width < A.height ? new Ht(A.left, A.top + (A.height - A.width) / 2, A.width, A.width) : A;
}, ax = function(A) {
  var e = A.type === ix ? new Array(A.value.length + 1).join("•") : A.value;
  return e.length === 0 ? A.placeholder || "" : e;
}, no = "checkbox", ao = "radio", ix = "password", xg = 707406591, ud = (
  /** @class */
  function(A) {
    ze(e, A);
    function e(t, r) {
      var n = A.call(this, t, r) || this;
      switch (n.type = r.type.toLowerCase(), n.checked = r.checked, n.value = ax(r), (n.type === no || n.type === ao) && (n.styles.backgroundColor = 3739148031, n.styles.borderTopColor = n.styles.borderRightColor = n.styles.borderBottomColor = n.styles.borderLeftColor = 2779096575, n.styles.borderTopWidth = n.styles.borderRightWidth = n.styles.borderBottomWidth = n.styles.borderLeftWidth = 1, n.styles.borderTopStyle = n.styles.borderRightStyle = n.styles.borderBottomStyle = n.styles.borderLeftStyle = 1, n.styles.backgroundClip = [
        0
        /* BORDER_BOX */
      ], n.styles.backgroundOrigin = [
        0
        /* BORDER_BOX */
      ], n.bounds = nx(n.bounds)), n.type) {
        case no:
          n.styles.borderTopRightRadius = n.styles.borderTopLeftRadius = n.styles.borderBottomRightRadius = n.styles.borderBottomLeftRadius = tx;
          break;
        case ao:
          n.styles.borderTopRightRadius = n.styles.borderTopLeftRadius = n.styles.borderBottomRightRadius = n.styles.borderBottomLeftRadius = rx;
          break;
      }
      return n;
    }
    return e;
  }(ot)
), Q0 = (
  /** @class */
  function(A) {
    ze(e, A);
    function e(t, r) {
      var n = A.call(this, t, r) || this, a = r.options[r.selectedIndex || 0];
      return n.value = a && a.text || "", n;
    }
    return e;
  }(ot)
), U0 = (
  /** @class */
  function(A) {
    ze(e, A);
    function e(t, r) {
      var n = A.call(this, t, r) || this;
      return n.value = r.value, n;
    }
    return e;
  }(ot)
), y0 = (
  /** @class */
  function(A) {
    ze(e, A);
    function e(t, r) {
      var n = A.call(this, t, r) || this;
      n.src = r.src, n.width = parseInt(r.width, 10) || 0, n.height = parseInt(r.height, 10) || 0, n.backgroundColor = n.styles.backgroundColor;
      try {
        if (r.contentWindow && r.contentWindow.document && r.contentWindow.document.documentElement) {
          n.tree = E0(t, r.contentWindow.document.documentElement);
          var a = r.contentWindow.document.documentElement ? va(t, getComputedStyle(r.contentWindow.document.documentElement).backgroundColor) : Qt.TRANSPARENT, i = r.contentWindow.document.body ? va(t, getComputedStyle(r.contentWindow.document.body).backgroundColor) : Qt.TRANSPARENT;
          n.backgroundColor = er(a) ? er(i) ? n.styles.backgroundColor : i : a;
        }
      } catch {
      }
      return n;
    }
    return e;
  }(ot)
), sx = ["OL", "UL", "MENU"], hs = function(A, e, t, r) {
  for (var n = e.firstChild, a = void 0; n; n = a)
    if (a = n.nextSibling, I0(n) && n.data.trim().length > 0)
      t.textNodes.push(new $H(A, n, t.styles));
    else if (fn(n))
      if (T0(n) && n.assignedNodes)
        n.assignedNodes().forEach(function(s) {
          return hs(A, s, t, r);
        });
      else {
        var i = F0(A, n);
        i.styles.isVisible() && (ox(n, i, r) ? i.flags |= 4 : ux(i.styles) && (i.flags |= 2), sx.indexOf(n.tagName) !== -1 && (i.flags |= 8), t.elements.push(i), n.slot, n.shadowRoot ? hs(A, n.shadowRoot, i, r) : !io(n) && !H0(n) && !so(n) && hs(A, n, i, r));
      }
}, F0 = function(A, e) {
  return Af(e) ? new w0(A, e) : x0(e) ? new v0(A, e) : H0(e) ? new m0(A, e) : lx(e) ? new C0(A, e) : cx(e) ? new $c(A, e) : fx(e) ? new ud(A, e) : so(e) ? new Q0(A, e) : io(e) ? new U0(A, e) : S0(e) ? new y0(A, e) : new ot(A, e);
}, E0 = function(A, e) {
  var t = F0(A, e);
  return t.flags |= 4, hs(A, e, t, t), t;
}, ox = function(A, e, t) {
  return e.styles.isPositionedWithZIndex() || e.styles.opacity < 1 || e.styles.isTransformed() || ld(A) && t.styles.isTransparent();
}, ux = function(A) {
  return A.isPositioned() || A.isFloating();
}, I0 = function(A) {
  return A.nodeType === Node.TEXT_NODE;
}, fn = function(A) {
  return A.nodeType === Node.ELEMENT_NODE;
}, qc = function(A) {
  return fn(A) && typeof A.style < "u" && !ps(A);
}, ps = function(A) {
  return typeof A.className == "object";
}, lx = function(A) {
  return A.tagName === "LI";
}, cx = function(A) {
  return A.tagName === "OL";
}, fx = function(A) {
  return A.tagName === "INPUT";
}, dx = function(A) {
  return A.tagName === "HTML";
}, H0 = function(A) {
  return A.tagName === "svg";
}, ld = function(A) {
  return A.tagName === "BODY";
}, x0 = function(A) {
  return A.tagName === "CANVAS";
}, Sg = function(A) {
  return A.tagName === "VIDEO";
}, Af = function(A) {
  return A.tagName === "IMG";
}, S0 = function(A) {
  return A.tagName === "IFRAME";
}, Tg = function(A) {
  return A.tagName === "STYLE";
}, Bx = function(A) {
  return A.tagName === "SCRIPT";
}, io = function(A) {
  return A.tagName === "TEXTAREA";
}, so = function(A) {
  return A.tagName === "SELECT";
}, T0 = function(A) {
  return A.tagName === "SLOT";
}, _g = function(A) {
  return A.tagName.indexOf("-") > 0;
}, gx = (
  /** @class */
  function() {
    function A() {
      this.counters = {};
    }
    return A.prototype.getCounterValue = function(e) {
      var t = this.counters[e];
      return t && t.length ? t[t.length - 1] : 1;
    }, A.prototype.getCounterValues = function(e) {
      var t = this.counters[e];
      return t || [];
    }, A.prototype.pop = function(e) {
      var t = this;
      e.forEach(function(r) {
        return t.counters[r].pop();
      });
    }, A.prototype.parse = function(e) {
      var t = this, r = e.counterIncrement, n = e.counterReset, a = !0;
      r !== null && r.forEach(function(s) {
        var o = t.counters[s.counter];
        o && s.increment !== 0 && (a = !1, o.length || o.push(1), o[Math.max(0, o.length - 1)] += s.increment);
      });
      var i = [];
      return a && n.forEach(function(s) {
        var o = t.counters[s.counter];
        i.push(s.counter), o || (o = t.counters[s.counter] = []), o.push(s.reset);
      }), i;
    }, A;
  }()
), Lg = {
  integers: [1e3, 900, 500, 400, 100, 90, 50, 40, 10, 9, 5, 4, 1],
  values: ["M", "CM", "D", "CD", "C", "XC", "L", "XL", "X", "IX", "V", "IV", "I"]
}, Dg = {
  integers: [
    9e3,
    8e3,
    7e3,
    6e3,
    5e3,
    4e3,
    3e3,
    2e3,
    1e3,
    900,
    800,
    700,
    600,
    500,
    400,
    300,
    200,
    100,
    90,
    80,
    70,
    60,
    50,
    40,
    30,
    20,
    10,
    9,
    8,
    7,
    6,
    5,
    4,
    3,
    2,
    1
  ],
  values: [
    "Ք",
    "Փ",
    "Ւ",
    "Ց",
    "Ր",
    "Տ",
    "Վ",
    "Ս",
    "Ռ",
    "Ջ",
    "Պ",
    "Չ",
    "Ո",
    "Շ",
    "Ն",
    "Յ",
    "Մ",
    "Ճ",
    "Ղ",
    "Ձ",
    "Հ",
    "Կ",
    "Ծ",
    "Խ",
    "Լ",
    "Ի",
    "Ժ",
    "Թ",
    "Ը",
    "Է",
    "Զ",
    "Ե",
    "Դ",
    "Գ",
    "Բ",
    "Ա"
  ]
}, hx = {
  integers: [
    1e4,
    9e3,
    8e3,
    7e3,
    6e3,
    5e3,
    4e3,
    3e3,
    2e3,
    1e3,
    400,
    300,
    200,
    100,
    90,
    80,
    70,
    60,
    50,
    40,
    30,
    20,
    19,
    18,
    17,
    16,
    15,
    10,
    9,
    8,
    7,
    6,
    5,
    4,
    3,
    2,
    1
  ],
  values: [
    "י׳",
    "ט׳",
    "ח׳",
    "ז׳",
    "ו׳",
    "ה׳",
    "ד׳",
    "ג׳",
    "ב׳",
    "א׳",
    "ת",
    "ש",
    "ר",
    "ק",
    "צ",
    "פ",
    "ע",
    "ס",
    "נ",
    "מ",
    "ל",
    "כ",
    "יט",
    "יח",
    "יז",
    "טז",
    "טו",
    "י",
    "ט",
    "ח",
    "ז",
    "ו",
    "ה",
    "ד",
    "ג",
    "ב",
    "א"
  ]
}, px = {
  integers: [
    1e4,
    9e3,
    8e3,
    7e3,
    6e3,
    5e3,
    4e3,
    3e3,
    2e3,
    1e3,
    900,
    800,
    700,
    600,
    500,
    400,
    300,
    200,
    100,
    90,
    80,
    70,
    60,
    50,
    40,
    30,
    20,
    10,
    9,
    8,
    7,
    6,
    5,
    4,
    3,
    2,
    1
  ],
  values: [
    "ჵ",
    "ჰ",
    "ჯ",
    "ჴ",
    "ხ",
    "ჭ",
    "წ",
    "ძ",
    "ც",
    "ჩ",
    "შ",
    "ყ",
    "ღ",
    "ქ",
    "ფ",
    "ჳ",
    "ტ",
    "ს",
    "რ",
    "ჟ",
    "პ",
    "ო",
    "ჲ",
    "ნ",
    "მ",
    "ლ",
    "კ",
    "ი",
    "თ",
    "ჱ",
    "ზ",
    "ვ",
    "ე",
    "დ",
    "გ",
    "ბ",
    "ა"
  ]
}, Yr = function(A, e, t, r, n, a) {
  return A < e || A > t ? ti(A, n, a.length > 0) : r.integers.reduce(function(i, s, o) {
    for (; A >= s; )
      A -= s, i += r.values[o];
    return i;
  }, "") + a;
}, _0 = function(A, e, t, r) {
  var n = "";
  do
    t || A--, n = r(A) + n, A /= e;
  while (A * e >= e);
  return n;
}, xA = function(A, e, t, r, n) {
  var a = t - e + 1;
  return (A < 0 ? "-" : "") + (_0(Math.abs(A), a, r, function(i) {
    return SA(Math.floor(i % a) + e);
  }) + n);
}, Br = function(A, e, t) {
  t === void 0 && (t = ". ");
  var r = e.length;
  return _0(Math.abs(A), r, !1, function(n) {
    return e[Math.floor(n % r)];
  }) + t;
}, Jr = 1, _t = 2, Lt = 4, oa = 8, dt = function(A, e, t, r, n, a) {
  if (A < -9999 || A > 9999)
    return ti(A, 4, n.length > 0);
  var i = Math.abs(A), s = n;
  if (i === 0)
    return e[0] + s;
  for (var o = 0; i > 0 && o <= 4; o++) {
    var u = i % 10;
    u === 0 && MA(a, Jr) && s !== "" ? s = e[u] + s : u > 1 || u === 1 && o === 0 || u === 1 && o === 1 && MA(a, _t) || u === 1 && o === 1 && MA(a, Lt) && A > 100 || u === 1 && o > 1 && MA(a, oa) ? s = e[u] + (o > 0 ? t[o - 1] : "") + s : u === 1 && o > 0 && (s = t[o - 1] + s), i = Math.floor(i / 10);
  }
  return (A < 0 ? r : "") + s;
}, Og = "十百千萬", kg = "拾佰仟萬", Mg = "マイナス", Yu = "마이너스", ti = function(A, e, t) {
  var r = t ? ". " : "", n = t ? "、" : "", a = t ? ", " : "", i = t ? " " : "";
  switch (e) {
    case 0:
      return "•" + i;
    case 1:
      return "◦" + i;
    case 2:
      return "◾" + i;
    case 5:
      var s = xA(A, 48, 57, !0, r);
      return s.length < 4 ? "0" + s : s;
    case 4:
      return Br(A, "〇一二三四五六七八九", n);
    case 6:
      return Yr(A, 1, 3999, Lg, 3, r).toLowerCase();
    case 7:
      return Yr(A, 1, 3999, Lg, 3, r);
    case 8:
      return xA(A, 945, 969, !1, r);
    case 9:
      return xA(A, 97, 122, !1, r);
    case 10:
      return xA(A, 65, 90, !1, r);
    case 11:
      return xA(A, 1632, 1641, !0, r);
    case 12:
    case 49:
      return Yr(A, 1, 9999, Dg, 3, r);
    case 35:
      return Yr(A, 1, 9999, Dg, 3, r).toLowerCase();
    case 13:
      return xA(A, 2534, 2543, !0, r);
    case 14:
    case 30:
      return xA(A, 6112, 6121, !0, r);
    case 15:
      return Br(A, "子丑寅卯辰巳午未申酉戌亥", n);
    case 16:
      return Br(A, "甲乙丙丁戊己庚辛壬癸", n);
    case 17:
    case 48:
      return dt(A, "零一二三四五六七八九", Og, "負", n, _t | Lt | oa);
    case 47:
      return dt(A, "零壹貳參肆伍陸柒捌玖", kg, "負", n, Jr | _t | Lt | oa);
    case 42:
      return dt(A, "零一二三四五六七八九", Og, "负", n, _t | Lt | oa);
    case 41:
      return dt(A, "零壹贰叁肆伍陆柒捌玖", kg, "负", n, Jr | _t | Lt | oa);
    case 26:
      return dt(A, "〇一二三四五六七八九", "十百千万", Mg, n, 0);
    case 25:
      return dt(A, "零壱弐参四伍六七八九", "拾百千万", Mg, n, Jr | _t | Lt);
    case 31:
      return dt(A, "영일이삼사오육칠팔구", "십백천만", Yu, a, Jr | _t | Lt);
    case 33:
      return dt(A, "零一二三四五六七八九", "十百千萬", Yu, a, 0);
    case 32:
      return dt(A, "零壹貳參四五六七八九", "拾百千", Yu, a, Jr | _t | Lt);
    case 18:
      return xA(A, 2406, 2415, !0, r);
    case 20:
      return Yr(A, 1, 19999, px, 3, r);
    case 21:
      return xA(A, 2790, 2799, !0, r);
    case 22:
      return xA(A, 2662, 2671, !0, r);
    case 22:
      return Yr(A, 1, 10999, hx, 3, r);
    case 23:
      return Br(A, "あいうえおかきくけこさしすせそたちつてとなにぬねのはひふへほまみむめもやゆよらりるれろわゐゑをん");
    case 24:
      return Br(A, "いろはにほへとちりぬるをわかよたれそつねならむうゐのおくやまけふこえてあさきゆめみしゑひもせす");
    case 27:
      return xA(A, 3302, 3311, !0, r);
    case 28:
      return Br(A, "アイウエオカキクケコサシスセソタチツテトナニヌネノハヒフヘホマミムメモヤユヨラリルレロワヰヱヲン", n);
    case 29:
      return Br(A, "イロハニホヘトチリヌルヲワカヨタレソツネナラムウヰノオクヤマケフコエテアサキユメミシヱヒモセス", n);
    case 34:
      return xA(A, 3792, 3801, !0, r);
    case 37:
      return xA(A, 6160, 6169, !0, r);
    case 38:
      return xA(A, 4160, 4169, !0, r);
    case 39:
      return xA(A, 2918, 2927, !0, r);
    case 40:
      return xA(A, 1776, 1785, !0, r);
    case 43:
      return xA(A, 3046, 3055, !0, r);
    case 44:
      return xA(A, 3174, 3183, !0, r);
    case 45:
      return xA(A, 3664, 3673, !0, r);
    case 46:
      return xA(A, 3872, 3881, !0, r);
    case 3:
    default:
      return xA(A, 48, 57, !0, r);
  }
}, L0 = "data-html2canvas-ignore", Kg = (
  /** @class */
  function() {
    function A(e, t, r) {
      if (this.context = e, this.options = r, this.scrolledElements = [], this.referenceElement = t, this.counters = new gx(), this.quoteDepth = 0, !t.ownerDocument)
        throw new Error("Cloned element does not have an owner document");
      this.documentElement = this.cloneNode(t.ownerDocument.documentElement, !1);
    }
    return A.prototype.toIFrame = function(e, t) {
      var r = this, n = wx(e, t);
      if (!n.contentWindow)
        return Promise.reject("Unable to find iframe window");
      var a = e.defaultView.pageXOffset, i = e.defaultView.pageYOffset, s = n.contentWindow, o = s.document, u = Cx(n).then(function() {
        return re(r, void 0, void 0, function() {
          var l, c;
          return zA(this, function(g) {
            switch (g.label) {
              case 0:
                return this.scrolledElements.forEach(Fx), s && (s.scrollTo(t.left, t.top), /(iPad|iPhone|iPod)/g.test(navigator.userAgent) && (s.scrollY !== t.top || s.scrollX !== t.left) && (this.context.logger.warn("Unable to restore scroll position for cloned document"), this.context.windowBounds = this.context.windowBounds.add(s.scrollX - t.left, s.scrollY - t.top, 0, 0))), l = this.options.onclone, c = this.clonedReferenceElement, typeof c > "u" ? [2, Promise.reject("Error finding the " + this.referenceElement.nodeName + " in the cloned document")] : o.fonts && o.fonts.ready ? [4, o.fonts.ready] : [3, 2];
              case 1:
                g.sent(), g.label = 2;
              case 2:
                return /(AppleWebKit)/g.test(navigator.userAgent) ? [4, mx(o)] : [3, 4];
              case 3:
                g.sent(), g.label = 4;
              case 4:
                return typeof l == "function" ? [2, Promise.resolve().then(function() {
                  return l(o, c);
                }).then(function() {
                  return n;
                })] : [2, n];
            }
          });
        });
      });
      return o.open(), o.write(Ux(document.doctype) + "<html></html>"), yx(this.referenceElement.ownerDocument, a, i), o.replaceChild(o.adoptNode(this.documentElement), o.documentElement), o.close(), u;
    }, A.prototype.createElementClone = function(e) {
      if (zc(
        e,
        2
        /* CLONE */
      ))
        debugger;
      if (x0(e))
        return this.createCanvasClone(e);
      if (Sg(e))
        return this.createVideoClone(e);
      if (Tg(e))
        return this.createStyleClone(e);
      var t = e.cloneNode(!1);
      return Af(t) && (Af(e) && e.currentSrc && e.currentSrc !== e.src && (t.src = e.currentSrc, t.srcset = ""), t.loading === "lazy" && (t.loading = "eager")), _g(t) ? this.createCustomElementClone(t) : t;
    }, A.prototype.createCustomElementClone = function(e) {
      var t = document.createElement("html2canvascustomelement");
      return Xu(e.style, t), t;
    }, A.prototype.createStyleClone = function(e) {
      try {
        var t = e.sheet;
        if (t && t.cssRules) {
          var r = [].slice.call(t.cssRules, 0).reduce(function(a, i) {
            return i && typeof i.cssText == "string" ? a + i.cssText : a;
          }, ""), n = e.cloneNode(!1);
          return n.textContent = r, n;
        }
      } catch (a) {
        if (this.context.logger.error("Unable to access cssRules property", a), a.name !== "SecurityError")
          throw a;
      }
      return e.cloneNode(!1);
    }, A.prototype.createCanvasClone = function(e) {
      var t;
      if (this.options.inlineImages && e.ownerDocument) {
        var r = e.ownerDocument.createElement("img");
        try {
          return r.src = e.toDataURL(), r;
        } catch {
          this.context.logger.info("Unable to inline canvas contents, canvas is tainted", e);
        }
      }
      var n = e.cloneNode(!1);
      try {
        n.width = e.width, n.height = e.height;
        var a = e.getContext("2d"), i = n.getContext("2d");
        if (i)
          if (!this.options.allowTaint && a)
            i.putImageData(a.getImageData(0, 0, e.width, e.height), 0, 0);
          else {
            var s = (t = e.getContext("webgl2")) !== null && t !== void 0 ? t : e.getContext("webgl");
            if (s) {
              var o = s.getContextAttributes();
              (o == null ? void 0 : o.preserveDrawingBuffer) === !1 && this.context.logger.warn("Unable to clone WebGL context as it has preserveDrawingBuffer=false", e);
            }
            i.drawImage(e, 0, 0);
          }
        return n;
      } catch {
        this.context.logger.info("Unable to clone canvas as it is tainted", e);
      }
      return n;
    }, A.prototype.createVideoClone = function(e) {
      var t = e.ownerDocument.createElement("canvas");
      t.width = e.offsetWidth, t.height = e.offsetHeight;
      var r = t.getContext("2d");
      try {
        return r && (r.drawImage(e, 0, 0, t.width, t.height), this.options.allowTaint || r.getImageData(0, 0, t.width, t.height)), t;
      } catch {
        this.context.logger.info("Unable to clone video as it is tainted", e);
      }
      var n = e.ownerDocument.createElement("canvas");
      return n.width = e.offsetWidth, n.height = e.offsetHeight, n;
    }, A.prototype.appendChildNode = function(e, t, r) {
      (!fn(t) || !Bx(t) && !t.hasAttribute(L0) && (typeof this.options.ignoreElements != "function" || !this.options.ignoreElements(t))) && (!this.options.copyStyles || !fn(t) || !Tg(t)) && e.appendChild(this.cloneNode(t, r));
    }, A.prototype.cloneChildNodes = function(e, t, r) {
      for (var n = this, a = e.shadowRoot ? e.shadowRoot.firstChild : e.firstChild; a; a = a.nextSibling)
        if (fn(a) && T0(a) && typeof a.assignedNodes == "function") {
          var i = a.assignedNodes();
          i.length && i.forEach(function(s) {
            return n.appendChildNode(t, s, r);
          });
        } else
          this.appendChildNode(t, a, r);
    }, A.prototype.cloneNode = function(e, t) {
      if (I0(e))
        return document.createTextNode(e.data);
      if (!e.ownerDocument)
        return e.cloneNode(!1);
      var r = e.ownerDocument.defaultView;
      if (r && fn(e) && (qc(e) || ps(e))) {
        var n = this.createElementClone(e);
        n.style.transitionProperty = "none";
        var a = r.getComputedStyle(e), i = r.getComputedStyle(e, ":before"), s = r.getComputedStyle(e, ":after");
        this.referenceElement === e && qc(n) && (this.clonedReferenceElement = n), ld(n) && Hx(n);
        var o = this.counters.parse(new gg(this.context, a)), u = this.resolvePseudoContent(e, n, i, Qa.BEFORE);
        _g(e) && (t = !0), Sg(e) || this.cloneChildNodes(e, n, t), u && n.insertBefore(u, n.firstChild);
        var l = this.resolvePseudoContent(e, n, s, Qa.AFTER);
        return l && n.appendChild(l), this.counters.pop(o), (a && (this.options.copyStyles || ps(e)) && !S0(e) || t) && Xu(a, n), (e.scrollTop !== 0 || e.scrollLeft !== 0) && this.scrolledElements.push([n, e.scrollLeft, e.scrollTop]), (io(e) || so(e)) && (io(n) || so(n)) && (n.value = e.value), n;
      }
      return e.cloneNode(!1);
    }, A.prototype.resolvePseudoContent = function(e, t, r, n) {
      var a = this;
      if (r) {
        var i = r.content, s = t.ownerDocument;
        if (!(!s || !i || i === "none" || i === "-moz-alt-content" || r.display === "none")) {
          this.counters.parse(new gg(this.context, r));
          var o = new lH(this.context, r), u = s.createElement("html2canvaspseudoelement");
          Xu(r, u), o.content.forEach(function(c) {
            if (c.type === 0)
              u.appendChild(s.createTextNode(c.value));
            else if (c.type === 22) {
              var g = s.createElement("img");
              g.src = c.value, g.style.opacity = "1", u.appendChild(g);
            } else if (c.type === 18) {
              if (c.name === "attr") {
                var w = c.values.filter(iA);
                w.length && u.appendChild(s.createTextNode(e.getAttribute(w[0].value) || ""));
              } else if (c.name === "counter") {
                var p = c.values.filter(Tn), C = p[0], Q = p[1];
                if (C && iA(C)) {
                  var d = a.counters.getCounterValue(C.value), f = Q && iA(Q) ? jc.parse(a.context, Q.value) : 3;
                  u.appendChild(s.createTextNode(ti(d, f, !1)));
                }
              } else if (c.name === "counters") {
                var B = c.values.filter(Tn), C = B[0], h = B[1], Q = B[2];
                if (C && iA(C)) {
                  var m = a.counters.getCounterValues(C.value), v = Q && iA(Q) ? jc.parse(a.context, Q.value) : 3, U = h && h.type === 0 ? h.value : "", y = m.map(function(Y) {
                    return ti(Y, v, !1);
                  }).join(U);
                  u.appendChild(s.createTextNode(y));
                }
              }
            } else if (c.type === 20)
              switch (c.value) {
                case "open-quote":
                  u.appendChild(s.createTextNode(Bg(o.quotes, a.quoteDepth++, !0)));
                  break;
                case "close-quote":
                  u.appendChild(s.createTextNode(Bg(o.quotes, --a.quoteDepth, !1)));
                  break;
                default:
                  u.appendChild(s.createTextNode(c.value));
              }
          }), u.className = ef + " " + tf;
          var l = n === Qa.BEFORE ? " " + ef : " " + tf;
          return ps(t) ? t.className.baseValue += l : t.className += l, u;
        }
      }
    }, A.destroy = function(e) {
      return e.parentNode ? (e.parentNode.removeChild(e), !0) : !1;
    }, A;
  }()
), Qa;
(function(A) {
  A[A.BEFORE = 0] = "BEFORE", A[A.AFTER = 1] = "AFTER";
})(Qa || (Qa = {}));
var wx = function(A, e) {
  var t = A.createElement("iframe");
  return t.className = "html2canvas-container", t.style.visibility = "hidden", t.style.position = "fixed", t.style.left = "-10000px", t.style.top = "0px", t.style.border = "0", t.width = e.width.toString(), t.height = e.height.toString(), t.scrolling = "no", t.setAttribute(L0, "true"), A.body.appendChild(t), t;
}, vx = function(A) {
  return new Promise(function(e) {
    if (A.complete) {
      e();
      return;
    }
    if (!A.src) {
      e();
      return;
    }
    A.onload = e, A.onerror = e;
  });
}, mx = function(A) {
  return Promise.all([].slice.call(A.images, 0).map(vx));
}, Cx = function(A) {
  return new Promise(function(e, t) {
    var r = A.contentWindow;
    if (!r)
      return t("No window assigned for iframe");
    var n = r.document;
    r.onload = A.onload = function() {
      r.onload = A.onload = null;
      var a = setInterval(function() {
        n.body.childNodes.length > 0 && n.readyState === "complete" && (clearInterval(a), e(A));
      }, 50);
    };
  });
}, Qx = [
  "all",
  "d",
  "content"
  // Safari shows pseudoelements if content is set
], Xu = function(A, e) {
  for (var t = A.length - 1; t >= 0; t--) {
    var r = A.item(t);
    Qx.indexOf(r) === -1 && e.style.setProperty(r, A.getPropertyValue(r));
  }
  return e;
}, Ux = function(A) {
  var e = "";
  return A && (e += "<!DOCTYPE ", A.name && (e += A.name), A.internalSubset && (e += A.internalSubset), A.publicId && (e += '"' + A.publicId + '"'), A.systemId && (e += '"' + A.systemId + '"'), e += ">"), e;
}, yx = function(A, e, t) {
  A && A.defaultView && (e !== A.defaultView.pageXOffset || t !== A.defaultView.pageYOffset) && A.defaultView.scrollTo(e, t);
}, Fx = function(A) {
  var e = A[0], t = A[1], r = A[2];
  e.scrollLeft = t, e.scrollTop = r;
}, Ex = ":before", Ix = ":after", ef = "___html2canvas___pseudoelement_before", tf = "___html2canvas___pseudoelement_after", bg = `{
    content: "" !important;
    display: none !important;
}`, Hx = function(A) {
  xx(A, "." + ef + Ex + bg + `
         .` + tf + Ix + bg);
}, xx = function(A, e) {
  var t = A.ownerDocument;
  if (t) {
    var r = t.createElement("style");
    r.textContent = e, A.appendChild(r);
  }
}, D0 = (
  /** @class */
  function() {
    function A() {
    }
    return A.getOrigin = function(e) {
      var t = A._link;
      return t ? (t.href = e, t.href = t.href, t.protocol + t.hostname + t.port) : "about:blank";
    }, A.isSameOrigin = function(e) {
      return A.getOrigin(e) === A._origin;
    }, A.setContext = function(e) {
      A._link = e.document.createElement("a"), A._origin = A.getOrigin(e.location.href);
    }, A._origin = "about:blank", A;
  }()
), Sx = (
  /** @class */
  function() {
    function A(e, t) {
      this.context = e, this._options = t, this._cache = {};
    }
    return A.prototype.addImage = function(e) {
      var t = Promise.resolve();
      return this.has(e) || (ju(e) || Dx(e)) && (this._cache[e] = this.loadImage(e)).catch(function() {
      }), t;
    }, A.prototype.match = function(e) {
      return this._cache[e];
    }, A.prototype.loadImage = function(e) {
      return re(this, void 0, void 0, function() {
        var t, r, n, a, i = this;
        return zA(this, function(s) {
          switch (s.label) {
            case 0:
              return t = D0.isSameOrigin(e), r = !Zu(e) && this._options.useCORS === !0 && GA.SUPPORT_CORS_IMAGES && !t, n = !Zu(e) && !t && !ju(e) && typeof this._options.proxy == "string" && GA.SUPPORT_CORS_XHR && !r, !t && this._options.allowTaint === !1 && !Zu(e) && !ju(e) && !n && !r ? [
                2
                /*return*/
              ] : (a = e, n ? [4, this.proxy(a)] : [3, 2]);
            case 1:
              a = s.sent(), s.label = 2;
            case 2:
              return this.context.logger.debug("Added image " + e.substring(0, 256)), [4, new Promise(function(o, u) {
                var l = new Image();
                l.onload = function() {
                  return o(l);
                }, l.onerror = u, (Ox(a) || r) && (l.crossOrigin = "anonymous"), l.src = a, l.complete === !0 && setTimeout(function() {
                  return o(l);
                }, 500), i._options.imageTimeout > 0 && setTimeout(function() {
                  return u("Timed out (" + i._options.imageTimeout + "ms) loading image");
                }, i._options.imageTimeout);
              })];
            case 3:
              return [2, s.sent()];
          }
        });
      });
    }, A.prototype.has = function(e) {
      return typeof this._cache[e] < "u";
    }, A.prototype.keys = function() {
      return Promise.resolve(Object.keys(this._cache));
    }, A.prototype.proxy = function(e) {
      var t = this, r = this._options.proxy;
      if (!r)
        throw new Error("No proxy defined");
      var n = e.substring(0, 256);
      return new Promise(function(a, i) {
        var s = GA.SUPPORT_RESPONSE_TYPE ? "blob" : "text", o = new XMLHttpRequest();
        o.onload = function() {
          if (o.status === 200)
            if (s === "text")
              a(o.response);
            else {
              var c = new FileReader();
              c.addEventListener("load", function() {
                return a(c.result);
              }, !1), c.addEventListener("error", function(g) {
                return i(g);
              }, !1), c.readAsDataURL(o.response);
            }
          else
            i("Failed to proxy resource " + n + " with status code " + o.status);
        }, o.onerror = i;
        var u = r.indexOf("?") > -1 ? "&" : "?";
        if (o.open("GET", "" + r + u + "url=" + encodeURIComponent(e) + "&responseType=" + s), s !== "text" && o instanceof XMLHttpRequest && (o.responseType = s), t._options.imageTimeout) {
          var l = t._options.imageTimeout;
          o.timeout = l, o.ontimeout = function() {
            return i("Timed out (" + l + "ms) proxying " + n);
          };
        }
        o.send();
      });
    }, A;
  }()
), Tx = /^data:image\/svg\+xml/i, _x = /^data:image\/.*;base64,/i, Lx = /^data:image\/.*/i, Dx = function(A) {
  return GA.SUPPORT_SVG_DRAWING || !kx(A);
}, Zu = function(A) {
  return Lx.test(A);
}, Ox = function(A) {
  return _x.test(A);
}, ju = function(A) {
  return A.substr(0, 4) === "blob";
}, kx = function(A) {
  return A.substr(-3).toLowerCase() === "svg" || Tx.test(A);
}, S = (
  /** @class */
  function() {
    function A(e, t) {
      this.type = 0, this.x = e, this.y = t;
    }
    return A.prototype.add = function(e, t) {
      return new A(this.x + e, this.y + t);
    }, A;
  }()
), Xr = function(A, e, t) {
  return new S(A.x + (e.x - A.x) * t, A.y + (e.y - A.y) * t);
}, Ji = (
  /** @class */
  function() {
    function A(e, t, r, n) {
      this.type = 1, this.start = e, this.startControl = t, this.endControl = r, this.end = n;
    }
    return A.prototype.subdivide = function(e, t) {
      var r = Xr(this.start, this.startControl, e), n = Xr(this.startControl, this.endControl, e), a = Xr(this.endControl, this.end, e), i = Xr(r, n, e), s = Xr(n, a, e), o = Xr(i, s, e);
      return t ? new A(this.start, r, i, o) : new A(o, s, a, this.end);
    }, A.prototype.add = function(e, t) {
      return new A(this.start.add(e, t), this.startControl.add(e, t), this.endControl.add(e, t), this.end.add(e, t));
    }, A.prototype.reverse = function() {
      return new A(this.end, this.endControl, this.startControl, this.start);
    }, A;
  }()
), Te = function(A) {
  return A.type === 1;
}, Mx = (
  /** @class */
  /* @__PURE__ */ function() {
    function A(e) {
      var t = e.styles, r = e.bounds, n = ia(t.borderTopLeftRadius, r.width, r.height), a = n[0], i = n[1], s = ia(t.borderTopRightRadius, r.width, r.height), o = s[0], u = s[1], l = ia(t.borderBottomRightRadius, r.width, r.height), c = l[0], g = l[1], w = ia(t.borderBottomLeftRadius, r.width, r.height), p = w[0], C = w[1], Q = [];
      Q.push((a + o) / r.width), Q.push((p + c) / r.width), Q.push((i + C) / r.height), Q.push((u + g) / r.height);
      var d = Math.max.apply(Math, Q);
      d > 1 && (a /= d, i /= d, o /= d, u /= d, c /= d, g /= d, p /= d, C /= d);
      var f = r.width - o, B = r.height - g, h = r.width - c, m = r.height - C, v = t.borderTopWidth, U = t.borderRightWidth, y = t.borderBottomWidth, E = t.borderLeftWidth, x = uA(t.paddingTop, e.bounds.width), Y = uA(t.paddingRight, e.bounds.width), AA = uA(t.paddingBottom, e.bounds.width), b = uA(t.paddingLeft, e.bounds.width);
      this.topLeftBorderDoubleOuterBox = a > 0 || i > 0 ? BA(r.left + E / 3, r.top + v / 3, a - E / 3, i - v / 3, rA.TOP_LEFT) : new S(r.left + E / 3, r.top + v / 3), this.topRightBorderDoubleOuterBox = a > 0 || i > 0 ? BA(r.left + f, r.top + v / 3, o - U / 3, u - v / 3, rA.TOP_RIGHT) : new S(r.left + r.width - U / 3, r.top + v / 3), this.bottomRightBorderDoubleOuterBox = c > 0 || g > 0 ? BA(r.left + h, r.top + B, c - U / 3, g - y / 3, rA.BOTTOM_RIGHT) : new S(r.left + r.width - U / 3, r.top + r.height - y / 3), this.bottomLeftBorderDoubleOuterBox = p > 0 || C > 0 ? BA(r.left + E / 3, r.top + m, p - E / 3, C - y / 3, rA.BOTTOM_LEFT) : new S(r.left + E / 3, r.top + r.height - y / 3), this.topLeftBorderDoubleInnerBox = a > 0 || i > 0 ? BA(r.left + E * 2 / 3, r.top + v * 2 / 3, a - E * 2 / 3, i - v * 2 / 3, rA.TOP_LEFT) : new S(r.left + E * 2 / 3, r.top + v * 2 / 3), this.topRightBorderDoubleInnerBox = a > 0 || i > 0 ? BA(r.left + f, r.top + v * 2 / 3, o - U * 2 / 3, u - v * 2 / 3, rA.TOP_RIGHT) : new S(r.left + r.width - U * 2 / 3, r.top + v * 2 / 3), this.bottomRightBorderDoubleInnerBox = c > 0 || g > 0 ? BA(r.left + h, r.top + B, c - U * 2 / 3, g - y * 2 / 3, rA.BOTTOM_RIGHT) : new S(r.left + r.width - U * 2 / 3, r.top + r.height - y * 2 / 3), this.bottomLeftBorderDoubleInnerBox = p > 0 || C > 0 ? BA(r.left + E * 2 / 3, r.top + m, p - E * 2 / 3, C - y * 2 / 3, rA.BOTTOM_LEFT) : new S(r.left + E * 2 / 3, r.top + r.height - y * 2 / 3), this.topLeftBorderStroke = a > 0 || i > 0 ? BA(r.left + E / 2, r.top + v / 2, a - E / 2, i - v / 2, rA.TOP_LEFT) : new S(r.left + E / 2, r.top + v / 2), this.topRightBorderStroke = a > 0 || i > 0 ? BA(r.left + f, r.top + v / 2, o - U / 2, u - v / 2, rA.TOP_RIGHT) : new S(r.left + r.width - U / 2, r.top + v / 2), this.bottomRightBorderStroke = c > 0 || g > 0 ? BA(r.left + h, r.top + B, c - U / 2, g - y / 2, rA.BOTTOM_RIGHT) : new S(r.left + r.width - U / 2, r.top + r.height - y / 2), this.bottomLeftBorderStroke = p > 0 || C > 0 ? BA(r.left + E / 2, r.top + m, p - E / 2, C - y / 2, rA.BOTTOM_LEFT) : new S(r.left + E / 2, r.top + r.height - y / 2), this.topLeftBorderBox = a > 0 || i > 0 ? BA(r.left, r.top, a, i, rA.TOP_LEFT) : new S(r.left, r.top), this.topRightBorderBox = o > 0 || u > 0 ? BA(r.left + f, r.top, o, u, rA.TOP_RIGHT) : new S(r.left + r.width, r.top), this.bottomRightBorderBox = c > 0 || g > 0 ? BA(r.left + h, r.top + B, c, g, rA.BOTTOM_RIGHT) : new S(r.left + r.width, r.top + r.height), this.bottomLeftBorderBox = p > 0 || C > 0 ? BA(r.left, r.top + m, p, C, rA.BOTTOM_LEFT) : new S(r.left, r.top + r.height), this.topLeftPaddingBox = a > 0 || i > 0 ? BA(r.left + E, r.top + v, Math.max(0, a - E), Math.max(0, i - v), rA.TOP_LEFT) : new S(r.left + E, r.top + v), this.topRightPaddingBox = o > 0 || u > 0 ? BA(r.left + Math.min(f, r.width - U), r.top + v, f > r.width + U ? 0 : Math.max(0, o - U), Math.max(0, u - v), rA.TOP_RIGHT) : new S(r.left + r.width - U, r.top + v), this.bottomRightPaddingBox = c > 0 || g > 0 ? BA(r.left + Math.min(h, r.width - E), r.top + Math.min(B, r.height - y), Math.max(0, c - U), Math.max(0, g - y), rA.BOTTOM_RIGHT) : new S(r.left + r.width - U, r.top + r.height - y), this.bottomLeftPaddingBox = p > 0 || C > 0 ? BA(r.left + E, r.top + Math.min(m, r.height - y), Math.max(0, p - E), Math.max(0, C - y), rA.BOTTOM_LEFT) : new S(r.left + E, r.top + r.height - y), this.topLeftContentBox = a > 0 || i > 0 ? BA(r.left + E + b, r.top + v + x, Math.max(0, a - (E + b)), Math.max(0, i - (v + x)), rA.TOP_LEFT) : new S(r.left + E + b, r.top + v + x), this.topRightContentBox = o > 0 || u > 0 ? BA(r.left + Math.min(f, r.width + E + b), r.top + v + x, f > r.width + E + b ? 0 : o - E + b, u - (v + x), rA.TOP_RIGHT) : new S(r.left + r.width - (U + Y), r.top + v + x), this.bottomRightContentBox = c > 0 || g > 0 ? BA(r.left + Math.min(h, r.width - (E + b)), r.top + Math.min(B, r.height + v + x), Math.max(0, c - (U + Y)), g - (y + AA), rA.BOTTOM_RIGHT) : new S(r.left + r.width - (U + Y), r.top + r.height - (y + AA)), this.bottomLeftContentBox = p > 0 || C > 0 ? BA(r.left + E + b, r.top + m, Math.max(0, p - (E + b)), C - (y + AA), rA.BOTTOM_LEFT) : new S(r.left + E + b, r.top + r.height - (y + AA));
    }
    return A;
  }()
), rA;
(function(A) {
  A[A.TOP_LEFT = 0] = "TOP_LEFT", A[A.TOP_RIGHT = 1] = "TOP_RIGHT", A[A.BOTTOM_RIGHT = 2] = "BOTTOM_RIGHT", A[A.BOTTOM_LEFT = 3] = "BOTTOM_LEFT";
})(rA || (rA = {}));
var BA = function(A, e, t, r, n) {
  var a = 4 * ((Math.sqrt(2) - 1) / 3), i = t * a, s = r * a, o = A + t, u = e + r;
  switch (n) {
    case rA.TOP_LEFT:
      return new Ji(new S(A, u), new S(A, u - s), new S(o - i, e), new S(o, e));
    case rA.TOP_RIGHT:
      return new Ji(new S(A, e), new S(A + i, e), new S(o, u - s), new S(o, u));
    case rA.BOTTOM_RIGHT:
      return new Ji(new S(o, e), new S(o, e + s), new S(A + i, u), new S(A, u));
    case rA.BOTTOM_LEFT:
    default:
      return new Ji(new S(o, u), new S(o - i, u), new S(A, e + s), new S(A, e));
  }
}, oo = function(A) {
  return [A.topLeftBorderBox, A.topRightBorderBox, A.bottomRightBorderBox, A.bottomLeftBorderBox];
}, Kx = function(A) {
  return [
    A.topLeftContentBox,
    A.topRightContentBox,
    A.bottomRightContentBox,
    A.bottomLeftContentBox
  ];
}, uo = function(A) {
  return [
    A.topLeftPaddingBox,
    A.topRightPaddingBox,
    A.bottomRightPaddingBox,
    A.bottomLeftPaddingBox
  ];
}, bx = (
  /** @class */
  /* @__PURE__ */ function() {
    function A(e, t, r) {
      this.offsetX = e, this.offsetY = t, this.matrix = r, this.type = 0, this.target = 6;
    }
    return A;
  }()
), $i = (
  /** @class */
  /* @__PURE__ */ function() {
    function A(e, t) {
      this.path = e, this.target = t, this.type = 1;
    }
    return A;
  }()
), Nx = (
  /** @class */
  /* @__PURE__ */ function() {
    function A(e) {
      this.opacity = e, this.type = 2, this.target = 6;
    }
    return A;
  }()
), Rx = function(A) {
  return A.type === 0;
}, O0 = function(A) {
  return A.type === 1;
}, Px = function(A) {
  return A.type === 2;
}, Ng = function(A, e) {
  return A.length === e.length ? A.some(function(t, r) {
    return t === e[r];
  }) : !1;
}, Vx = function(A, e, t, r, n) {
  return A.map(function(a, i) {
    switch (i) {
      case 0:
        return a.add(e, t);
      case 1:
        return a.add(e + r, t);
      case 2:
        return a.add(e + r, t + n);
      case 3:
        return a.add(e, t + n);
    }
    return a;
  });
}, k0 = (
  /** @class */
  /* @__PURE__ */ function() {
    function A(e) {
      this.element = e, this.inlineLevel = [], this.nonInlineLevel = [], this.negativeZIndex = [], this.zeroOrAutoZIndexOrTransformedOrOpacity = [], this.positiveZIndex = [], this.nonPositionedFloats = [], this.nonPositionedInlineLevel = [];
    }
    return A;
  }()
), M0 = (
  /** @class */
  function() {
    function A(e, t) {
      if (this.container = e, this.parent = t, this.effects = [], this.curves = new Mx(this.container), this.container.styles.opacity < 1 && this.effects.push(new Nx(this.container.styles.opacity)), this.container.styles.transform !== null) {
        var r = this.container.bounds.left + this.container.styles.transformOrigin[0].number, n = this.container.bounds.top + this.container.styles.transformOrigin[1].number, a = this.container.styles.transform;
        this.effects.push(new bx(r, n, a));
      }
      if (this.container.styles.overflowX !== 0) {
        var i = oo(this.curves), s = uo(this.curves);
        Ng(i, s) ? this.effects.push(new $i(
          i,
          6
          /* CONTENT */
        )) : (this.effects.push(new $i(
          i,
          2
          /* BACKGROUND_BORDERS */
        )), this.effects.push(new $i(
          s,
          4
          /* CONTENT */
        )));
      }
    }
    return A.prototype.getEffects = function(e) {
      for (var t = [
        2,
        3
        /* FIXED */
      ].indexOf(this.container.styles.position) === -1, r = this.parent, n = this.effects.slice(0); r; ) {
        var a = r.effects.filter(function(o) {
          return !O0(o);
        });
        if (t || r.container.styles.position !== 0 || !r.parent) {
          if (n.unshift.apply(n, a), t = [
            2,
            3
            /* FIXED */
          ].indexOf(r.container.styles.position) === -1, r.container.styles.overflowX !== 0) {
            var i = oo(r.curves), s = uo(r.curves);
            Ng(i, s) || n.unshift(new $i(
              s,
              6
              /* CONTENT */
            ));
          }
        } else
          n.unshift.apply(n, a);
        r = r.parent;
      }
      return n.filter(function(o) {
        return MA(o.target, e);
      });
    }, A;
  }()
), rf = function(A, e, t, r) {
  A.container.elements.forEach(function(n) {
    var a = MA(
      n.flags,
      4
      /* CREATES_REAL_STACKING_CONTEXT */
    ), i = MA(
      n.flags,
      2
      /* CREATES_STACKING_CONTEXT */
    ), s = new M0(n, A);
    MA(
      n.styles.display,
      2048
      /* LIST_ITEM */
    ) && r.push(s);
    var o = MA(
      n.flags,
      8
      /* IS_LIST_OWNER */
    ) ? [] : r;
    if (a || i) {
      var u = a || n.styles.isPositioned() ? t : e, l = new k0(s);
      if (n.styles.isPositioned() || n.styles.opacity < 1 || n.styles.isTransformed()) {
        var c = n.styles.zIndex.order;
        if (c < 0) {
          var g = 0;
          u.negativeZIndex.some(function(p, C) {
            return c > p.element.container.styles.zIndex.order ? (g = C, !1) : g > 0;
          }), u.negativeZIndex.splice(g, 0, l);
        } else if (c > 0) {
          var w = 0;
          u.positiveZIndex.some(function(p, C) {
            return c >= p.element.container.styles.zIndex.order ? (w = C + 1, !1) : w > 0;
          }), u.positiveZIndex.splice(w, 0, l);
        } else
          u.zeroOrAutoZIndexOrTransformedOrOpacity.push(l);
      } else
        n.styles.isFloating() ? u.nonPositionedFloats.push(l) : u.nonPositionedInlineLevel.push(l);
      rf(s, l, a ? l : t, o);
    } else
      n.styles.isInlineLevel() ? e.inlineLevel.push(s) : e.nonInlineLevel.push(s), rf(s, e, t, o);
    MA(
      n.flags,
      8
      /* IS_LIST_OWNER */
    ) && K0(n, o);
  });
}, K0 = function(A, e) {
  for (var t = A instanceof $c ? A.start : 1, r = A instanceof $c ? A.reversed : !1, n = 0; n < e.length; n++) {
    var a = e[n];
    a.container instanceof C0 && typeof a.container.value == "number" && a.container.value !== 0 && (t = a.container.value), a.listValue = ti(t, a.container.styles.listStyleType, !0), t += r ? -1 : 1;
  }
}, Gx = function(A) {
  var e = new M0(A, null), t = new k0(e), r = [];
  return rf(e, t, t, r), K0(e.container, r), t;
}, Rg = function(A, e) {
  switch (e) {
    case 0:
      return De(A.topLeftBorderBox, A.topLeftPaddingBox, A.topRightBorderBox, A.topRightPaddingBox);
    case 1:
      return De(A.topRightBorderBox, A.topRightPaddingBox, A.bottomRightBorderBox, A.bottomRightPaddingBox);
    case 2:
      return De(A.bottomRightBorderBox, A.bottomRightPaddingBox, A.bottomLeftBorderBox, A.bottomLeftPaddingBox);
    case 3:
    default:
      return De(A.bottomLeftBorderBox, A.bottomLeftPaddingBox, A.topLeftBorderBox, A.topLeftPaddingBox);
  }
}, Wx = function(A, e) {
  switch (e) {
    case 0:
      return De(A.topLeftBorderBox, A.topLeftBorderDoubleOuterBox, A.topRightBorderBox, A.topRightBorderDoubleOuterBox);
    case 1:
      return De(A.topRightBorderBox, A.topRightBorderDoubleOuterBox, A.bottomRightBorderBox, A.bottomRightBorderDoubleOuterBox);
    case 2:
      return De(A.bottomRightBorderBox, A.bottomRightBorderDoubleOuterBox, A.bottomLeftBorderBox, A.bottomLeftBorderDoubleOuterBox);
    case 3:
    default:
      return De(A.bottomLeftBorderBox, A.bottomLeftBorderDoubleOuterBox, A.topLeftBorderBox, A.topLeftBorderDoubleOuterBox);
  }
}, Yx = function(A, e) {
  switch (e) {
    case 0:
      return De(A.topLeftBorderDoubleInnerBox, A.topLeftPaddingBox, A.topRightBorderDoubleInnerBox, A.topRightPaddingBox);
    case 1:
      return De(A.topRightBorderDoubleInnerBox, A.topRightPaddingBox, A.bottomRightBorderDoubleInnerBox, A.bottomRightPaddingBox);
    case 2:
      return De(A.bottomRightBorderDoubleInnerBox, A.bottomRightPaddingBox, A.bottomLeftBorderDoubleInnerBox, A.bottomLeftPaddingBox);
    case 3:
    default:
      return De(A.bottomLeftBorderDoubleInnerBox, A.bottomLeftPaddingBox, A.topLeftBorderDoubleInnerBox, A.topLeftPaddingBox);
  }
}, Xx = function(A, e) {
  switch (e) {
    case 0:
      return qi(A.topLeftBorderStroke, A.topRightBorderStroke);
    case 1:
      return qi(A.topRightBorderStroke, A.bottomRightBorderStroke);
    case 2:
      return qi(A.bottomRightBorderStroke, A.bottomLeftBorderStroke);
    case 3:
    default:
      return qi(A.bottomLeftBorderStroke, A.topLeftBorderStroke);
  }
}, qi = function(A, e) {
  var t = [];
  return Te(A) ? t.push(A.subdivide(0.5, !1)) : t.push(A), Te(e) ? t.push(e.subdivide(0.5, !0)) : t.push(e), t;
}, De = function(A, e, t, r) {
  var n = [];
  return Te(A) ? n.push(A.subdivide(0.5, !1)) : n.push(A), Te(t) ? n.push(t.subdivide(0.5, !0)) : n.push(t), Te(r) ? n.push(r.subdivide(0.5, !0).reverse()) : n.push(r), Te(e) ? n.push(e.subdivide(0.5, !1).reverse()) : n.push(e), n;
}, b0 = function(A) {
  var e = A.bounds, t = A.styles;
  return e.add(t.borderLeftWidth, t.borderTopWidth, -(t.borderRightWidth + t.borderLeftWidth), -(t.borderTopWidth + t.borderBottomWidth));
}, lo = function(A) {
  var e = A.styles, t = A.bounds, r = uA(e.paddingLeft, t.width), n = uA(e.paddingRight, t.width), a = uA(e.paddingTop, t.width), i = uA(e.paddingBottom, t.width);
  return t.add(r + e.borderLeftWidth, a + e.borderTopWidth, -(e.borderRightWidth + e.borderLeftWidth + r + n), -(e.borderTopWidth + e.borderBottomWidth + a + i));
}, Zx = function(A, e) {
  return A === 0 ? e.bounds : A === 2 ? lo(e) : b0(e);
}, jx = function(A, e) {
  return A === 0 ? e.bounds : A === 2 ? lo(e) : b0(e);
}, zu = function(A, e, t) {
  var r = Zx($r(A.styles.backgroundOrigin, e), A), n = jx($r(A.styles.backgroundClip, e), A), a = zx($r(A.styles.backgroundSize, e), t, r), i = a[0], s = a[1], o = ia($r(A.styles.backgroundPosition, e), r.width - i, r.height - s), u = Jx($r(A.styles.backgroundRepeat, e), o, a, r, n), l = Math.round(r.left + o[0]), c = Math.round(r.top + o[1]);
  return [u, l, c, i, s];
}, Zr = function(A) {
  return iA(A) && A.value === mn.AUTO;
}, As = function(A) {
  return typeof A == "number";
}, zx = function(A, e, t) {
  var r = e[0], n = e[1], a = e[2], i = A[0], s = A[1];
  if (!i)
    return [0, 0];
  if (_A(i) && s && _A(s))
    return [uA(i, t.width), uA(s, t.height)];
  var o = As(a);
  if (iA(i) && (i.value === mn.CONTAIN || i.value === mn.COVER)) {
    if (As(a)) {
      var u = t.width / t.height;
      return u < a != (i.value === mn.COVER) ? [t.width, t.width / a] : [t.height * a, t.height];
    }
    return [t.width, t.height];
  }
  var l = As(r), c = As(n), g = l || c;
  if (Zr(i) && (!s || Zr(s))) {
    if (l && c)
      return [r, n];
    if (!o && !g)
      return [t.width, t.height];
    if (g && o) {
      var w = l ? r : n * a, p = c ? n : r / a;
      return [w, p];
    }
    var C = l ? r : t.width, Q = c ? n : t.height;
    return [C, Q];
  }
  if (o) {
    var d = 0, f = 0;
    return _A(i) ? d = uA(i, t.width) : _A(s) && (f = uA(s, t.height)), Zr(i) ? d = f * a : (!s || Zr(s)) && (f = d / a), [d, f];
  }
  var B = null, h = null;
  if (_A(i) ? B = uA(i, t.width) : s && _A(s) && (h = uA(s, t.height)), B !== null && (!s || Zr(s)) && (h = l && c ? B / r * n : t.height), h !== null && Zr(i) && (B = l && c ? h / n * r : t.width), B !== null && h !== null)
    return [B, h];
  throw new Error("Unable to calculate background-size for element");
}, $r = function(A, e) {
  var t = A[e];
  return typeof t > "u" ? A[0] : t;
}, Jx = function(A, e, t, r, n) {
  var a = e[0], i = e[1], s = t[0], o = t[1];
  switch (A) {
    case 2:
      return [
        new S(Math.round(r.left), Math.round(r.top + i)),
        new S(Math.round(r.left + r.width), Math.round(r.top + i)),
        new S(Math.round(r.left + r.width), Math.round(o + r.top + i)),
        new S(Math.round(r.left), Math.round(o + r.top + i))
      ];
    case 3:
      return [
        new S(Math.round(r.left + a), Math.round(r.top)),
        new S(Math.round(r.left + a + s), Math.round(r.top)),
        new S(Math.round(r.left + a + s), Math.round(r.height + r.top)),
        new S(Math.round(r.left + a), Math.round(r.height + r.top))
      ];
    case 1:
      return [
        new S(Math.round(r.left + a), Math.round(r.top + i)),
        new S(Math.round(r.left + a + s), Math.round(r.top + i)),
        new S(Math.round(r.left + a + s), Math.round(r.top + i + o)),
        new S(Math.round(r.left + a), Math.round(r.top + i + o))
      ];
    default:
      return [
        new S(Math.round(n.left), Math.round(n.top)),
        new S(Math.round(n.left + n.width), Math.round(n.top)),
        new S(Math.round(n.left + n.width), Math.round(n.height + n.top)),
        new S(Math.round(n.left), Math.round(n.height + n.top))
      ];
  }
}, $x = "data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7", Pg = "Hidden Text", qx = (
  /** @class */
  function() {
    function A(e) {
      this._data = {}, this._document = e;
    }
    return A.prototype.parseMetrics = function(e, t) {
      var r = this._document.createElement("div"), n = this._document.createElement("img"), a = this._document.createElement("span"), i = this._document.body;
      r.style.visibility = "hidden", r.style.fontFamily = e, r.style.fontSize = t, r.style.margin = "0", r.style.padding = "0", r.style.whiteSpace = "nowrap", i.appendChild(r), n.src = $x, n.width = 1, n.height = 1, n.style.margin = "0", n.style.padding = "0", n.style.verticalAlign = "baseline", a.style.fontFamily = e, a.style.fontSize = t, a.style.margin = "0", a.style.padding = "0", a.appendChild(this._document.createTextNode(Pg)), r.appendChild(a), r.appendChild(n);
      var s = n.offsetTop - a.offsetTop + 2;
      r.removeChild(a), r.appendChild(this._document.createTextNode(Pg)), r.style.lineHeight = "normal", n.style.verticalAlign = "super";
      var o = n.offsetTop - r.offsetTop + 2;
      return i.removeChild(r), { baseline: s, middle: o };
    }, A.prototype.getMetrics = function(e, t) {
      var r = e + " " + t;
      return typeof this._data[r] > "u" && (this._data[r] = this.parseMetrics(e, t)), this._data[r];
    }, A;
  }()
), N0 = (
  /** @class */
  /* @__PURE__ */ function() {
    function A(e, t) {
      this.context = e, this.options = t;
    }
    return A;
  }()
), A2 = 1e4, e2 = (
  /** @class */
  function(A) {
    ze(e, A);
    function e(t, r) {
      var n = A.call(this, t, r) || this;
      return n._activeEffects = [], n.canvas = r.canvas ? r.canvas : document.createElement("canvas"), n.ctx = n.canvas.getContext("2d"), r.canvas || (n.canvas.width = Math.floor(r.width * r.scale), n.canvas.height = Math.floor(r.height * r.scale), n.canvas.style.width = r.width + "px", n.canvas.style.height = r.height + "px"), n.fontMetrics = new qx(document), n.ctx.scale(n.options.scale, n.options.scale), n.ctx.translate(-r.x, -r.y), n.ctx.textBaseline = "bottom", n._activeEffects = [], n.context.logger.debug("Canvas renderer initialized (" + r.width + "x" + r.height + ") with scale " + r.scale), n;
    }
    return e.prototype.applyEffects = function(t) {
      for (var r = this; this._activeEffects.length; )
        this.popEffect();
      t.forEach(function(n) {
        return r.applyEffect(n);
      });
    }, e.prototype.applyEffect = function(t) {
      this.ctx.save(), Px(t) && (this.ctx.globalAlpha = t.opacity), Rx(t) && (this.ctx.translate(t.offsetX, t.offsetY), this.ctx.transform(t.matrix[0], t.matrix[1], t.matrix[2], t.matrix[3], t.matrix[4], t.matrix[5]), this.ctx.translate(-t.offsetX, -t.offsetY)), O0(t) && (this.path(t.path), this.ctx.clip()), this._activeEffects.push(t);
    }, e.prototype.popEffect = function() {
      this._activeEffects.pop(), this.ctx.restore();
    }, e.prototype.renderStack = function(t) {
      return re(this, void 0, void 0, function() {
        var r;
        return zA(this, function(n) {
          switch (n.label) {
            case 0:
              return r = t.element.container.styles, r.isVisible() ? [4, this.renderStackContent(t)] : [3, 2];
            case 1:
              n.sent(), n.label = 2;
            case 2:
              return [
                2
                /*return*/
              ];
          }
        });
      });
    }, e.prototype.renderNode = function(t) {
      return re(this, void 0, void 0, function() {
        return zA(this, function(r) {
          switch (r.label) {
            case 0:
              if (MA(
                t.container.flags,
                16
                /* DEBUG_RENDER */
              ))
                debugger;
              return t.container.styles.isVisible() ? [4, this.renderNodeBackgroundAndBorders(t)] : [3, 3];
            case 1:
              return r.sent(), [4, this.renderNodeContent(t)];
            case 2:
              r.sent(), r.label = 3;
            case 3:
              return [
                2
                /*return*/
              ];
          }
        });
      });
    }, e.prototype.renderTextWithLetterSpacing = function(t, r, n) {
      var a = this;
      if (r === 0)
        this.ctx.fillText(t.text, t.bounds.left, t.bounds.top + n);
      else {
        var i = od(t.text);
        i.reduce(function(s, o) {
          return a.ctx.fillText(o, s, t.bounds.top + n), s + a.ctx.measureText(o).width;
        }, t.bounds.left);
      }
    }, e.prototype.createFontStyle = function(t) {
      var r = t.fontVariant.filter(function(i) {
        return i === "normal" || i === "small-caps";
      }).join(""), n = i2(t.fontFamily).join(", "), a = fi(t.fontSize) ? "" + t.fontSize.number + t.fontSize.unit : t.fontSize.number + "px";
      return [
        [t.fontStyle, r, t.fontWeight, a, n].join(" "),
        n,
        a
      ];
    }, e.prototype.renderTextNode = function(t, r) {
      return re(this, void 0, void 0, function() {
        var n, a, i, s, o, u, l, c, g = this;
        return zA(this, function(w) {
          return n = this.createFontStyle(r), a = n[0], i = n[1], s = n[2], this.ctx.font = a, this.ctx.direction = r.direction === 1 ? "rtl" : "ltr", this.ctx.textAlign = "left", this.ctx.textBaseline = "alphabetic", o = this.fontMetrics.getMetrics(i, s), u = o.baseline, l = o.middle, c = r.paintOrder, t.textBounds.forEach(function(p) {
            c.forEach(function(C) {
              switch (C) {
                case 0:
                  g.ctx.fillStyle = NA(r.color), g.renderTextWithLetterSpacing(p, r.letterSpacing, u);
                  var Q = r.textShadow;
                  Q.length && p.text.trim().length && (Q.slice(0).reverse().forEach(function(d) {
                    g.ctx.shadowColor = NA(d.color), g.ctx.shadowOffsetX = d.offsetX.number * g.options.scale, g.ctx.shadowOffsetY = d.offsetY.number * g.options.scale, g.ctx.shadowBlur = d.blur.number, g.renderTextWithLetterSpacing(p, r.letterSpacing, u);
                  }), g.ctx.shadowColor = "", g.ctx.shadowOffsetX = 0, g.ctx.shadowOffsetY = 0, g.ctx.shadowBlur = 0), r.textDecorationLine.length && (g.ctx.fillStyle = NA(r.textDecorationColor || r.color), r.textDecorationLine.forEach(function(d) {
                    switch (d) {
                      case 1:
                        g.ctx.fillRect(p.bounds.left, Math.round(p.bounds.top + u), p.bounds.width, 1);
                        break;
                      case 2:
                        g.ctx.fillRect(p.bounds.left, Math.round(p.bounds.top), p.bounds.width, 1);
                        break;
                      case 3:
                        g.ctx.fillRect(p.bounds.left, Math.ceil(p.bounds.top + l), p.bounds.width, 1);
                        break;
                    }
                  }));
                  break;
                case 1:
                  r.webkitTextStrokeWidth && p.text.trim().length && (g.ctx.strokeStyle = NA(r.webkitTextStrokeColor), g.ctx.lineWidth = r.webkitTextStrokeWidth, g.ctx.lineJoin = window.chrome ? "miter" : "round", g.ctx.strokeText(p.text, p.bounds.left, p.bounds.top + u)), g.ctx.strokeStyle = "", g.ctx.lineWidth = 0, g.ctx.lineJoin = "miter";
                  break;
              }
            });
          }), [
            2
            /*return*/
          ];
        });
      });
    }, e.prototype.renderReplacedElement = function(t, r, n) {
      if (n && t.intrinsicWidth > 0 && t.intrinsicHeight > 0) {
        var a = lo(t), i = uo(r);
        this.path(i), this.ctx.save(), this.ctx.clip(), this.ctx.drawImage(n, 0, 0, t.intrinsicWidth, t.intrinsicHeight, a.left, a.top, a.width, a.height), this.ctx.restore();
      }
    }, e.prototype.renderNodeContent = function(t) {
      return re(this, void 0, void 0, function() {
        var r, n, a, i, s, o, f, f, u, l, c, g, h, w, p, m, C, Q, d, f, B, h, m;
        return zA(this, function(v) {
          switch (v.label) {
            case 0:
              this.applyEffects(t.getEffects(
                4
                /* CONTENT */
              )), r = t.container, n = t.curves, a = r.styles, i = 0, s = r.textNodes, v.label = 1;
            case 1:
              return i < s.length ? (o = s[i], [4, this.renderTextNode(o, a)]) : [3, 4];
            case 2:
              v.sent(), v.label = 3;
            case 3:
              return i++, [3, 1];
            case 4:
              if (!(r instanceof w0))
                return [3, 8];
              v.label = 5;
            case 5:
              return v.trys.push([5, 7, , 8]), [4, this.context.cache.match(r.src)];
            case 6:
              return f = v.sent(), this.renderReplacedElement(r, n, f), [3, 8];
            case 7:
              return v.sent(), this.context.logger.error("Error loading image " + r.src), [3, 8];
            case 8:
              if (r instanceof v0 && this.renderReplacedElement(r, n, r.canvas), !(r instanceof m0))
                return [3, 12];
              v.label = 9;
            case 9:
              return v.trys.push([9, 11, , 12]), [4, this.context.cache.match(r.svg)];
            case 10:
              return f = v.sent(), this.renderReplacedElement(r, n, f), [3, 12];
            case 11:
              return v.sent(), this.context.logger.error("Error loading svg " + r.svg.substring(0, 255)), [3, 12];
            case 12:
              return r instanceof y0 && r.tree ? (u = new e(this.context, {
                scale: this.options.scale,
                backgroundColor: r.backgroundColor,
                x: 0,
                y: 0,
                width: r.width,
                height: r.height
              }), [4, u.render(r.tree)]) : [3, 14];
            case 13:
              l = v.sent(), r.width && r.height && this.ctx.drawImage(l, 0, 0, r.width, r.height, r.bounds.left, r.bounds.top, r.bounds.width, r.bounds.height), v.label = 14;
            case 14:
              if (r instanceof ud && (c = Math.min(r.bounds.width, r.bounds.height), r.type === no ? r.checked && (this.ctx.save(), this.path([
                new S(r.bounds.left + c * 0.39363, r.bounds.top + c * 0.79),
                new S(r.bounds.left + c * 0.16, r.bounds.top + c * 0.5549),
                new S(r.bounds.left + c * 0.27347, r.bounds.top + c * 0.44071),
                new S(r.bounds.left + c * 0.39694, r.bounds.top + c * 0.5649),
                new S(r.bounds.left + c * 0.72983, r.bounds.top + c * 0.23),
                new S(r.bounds.left + c * 0.84, r.bounds.top + c * 0.34085),
                new S(r.bounds.left + c * 0.39363, r.bounds.top + c * 0.79)
              ]), this.ctx.fillStyle = NA(xg), this.ctx.fill(), this.ctx.restore()) : r.type === ao && r.checked && (this.ctx.save(), this.ctx.beginPath(), this.ctx.arc(r.bounds.left + c / 2, r.bounds.top + c / 2, c / 4, 0, Math.PI * 2, !0), this.ctx.fillStyle = NA(xg), this.ctx.fill(), this.ctx.restore())), t2(r) && r.value.length) {
                switch (g = this.createFontStyle(a), h = g[0], w = g[1], p = this.fontMetrics.getMetrics(h, w).baseline, this.ctx.font = h, this.ctx.fillStyle = NA(a.color), this.ctx.textBaseline = "alphabetic", this.ctx.textAlign = n2(r.styles.textAlign), m = lo(r), C = 0, r.styles.textAlign) {
                  case 1:
                    C += m.width / 2;
                    break;
                  case 2:
                    C += m.width;
                    break;
                }
                Q = m.add(C, 0, 0, -m.height / 2 + 1), this.ctx.save(), this.path([
                  new S(m.left, m.top),
                  new S(m.left + m.width, m.top),
                  new S(m.left + m.width, m.top + m.height),
                  new S(m.left, m.top + m.height)
                ]), this.ctx.clip(), this.renderTextWithLetterSpacing(new Ca(r.value, Q), a.letterSpacing, p), this.ctx.restore(), this.ctx.textBaseline = "alphabetic", this.ctx.textAlign = "left";
              }
              if (!MA(
                r.styles.display,
                2048
                /* LIST_ITEM */
              ))
                return [3, 20];
              if (r.styles.listStyleImage === null)
                return [3, 19];
              if (d = r.styles.listStyleImage, d.type !== 0)
                return [3, 18];
              f = void 0, B = d.url, v.label = 15;
            case 15:
              return v.trys.push([15, 17, , 18]), [4, this.context.cache.match(B)];
            case 16:
              return f = v.sent(), this.ctx.drawImage(f, r.bounds.left - (f.width + 10), r.bounds.top), [3, 18];
            case 17:
              return v.sent(), this.context.logger.error("Error loading list-style-image " + B), [3, 18];
            case 18:
              return [3, 20];
            case 19:
              t.listValue && r.styles.listStyleType !== -1 && (h = this.createFontStyle(a)[0], this.ctx.font = h, this.ctx.fillStyle = NA(a.color), this.ctx.textBaseline = "middle", this.ctx.textAlign = "right", m = new Ht(r.bounds.left, r.bounds.top + uA(r.styles.paddingTop, r.bounds.width), r.bounds.width, fg(a.lineHeight, a.fontSize.number) / 2 + 1), this.renderTextWithLetterSpacing(new Ca(t.listValue, m), a.letterSpacing, fg(a.lineHeight, a.fontSize.number) / 2 + 2), this.ctx.textBaseline = "bottom", this.ctx.textAlign = "left"), v.label = 20;
            case 20:
              return [
                2
                /*return*/
              ];
          }
        });
      });
    }, e.prototype.renderStackContent = function(t) {
      return re(this, void 0, void 0, function() {
        var r, n, d, a, i, d, s, o, d, u, l, d, c, g, d, w, p, d, C, Q, d;
        return zA(this, function(f) {
          switch (f.label) {
            case 0:
              if (MA(
                t.element.container.flags,
                16
                /* DEBUG_RENDER */
              ))
                debugger;
              return [4, this.renderNodeBackgroundAndBorders(t.element)];
            case 1:
              f.sent(), r = 0, n = t.negativeZIndex, f.label = 2;
            case 2:
              return r < n.length ? (d = n[r], [4, this.renderStack(d)]) : [3, 5];
            case 3:
              f.sent(), f.label = 4;
            case 4:
              return r++, [3, 2];
            case 5:
              return [4, this.renderNodeContent(t.element)];
            case 6:
              f.sent(), a = 0, i = t.nonInlineLevel, f.label = 7;
            case 7:
              return a < i.length ? (d = i[a], [4, this.renderNode(d)]) : [3, 10];
            case 8:
              f.sent(), f.label = 9;
            case 9:
              return a++, [3, 7];
            case 10:
              s = 0, o = t.nonPositionedFloats, f.label = 11;
            case 11:
              return s < o.length ? (d = o[s], [4, this.renderStack(d)]) : [3, 14];
            case 12:
              f.sent(), f.label = 13;
            case 13:
              return s++, [3, 11];
            case 14:
              u = 0, l = t.nonPositionedInlineLevel, f.label = 15;
            case 15:
              return u < l.length ? (d = l[u], [4, this.renderStack(d)]) : [3, 18];
            case 16:
              f.sent(), f.label = 17;
            case 17:
              return u++, [3, 15];
            case 18:
              c = 0, g = t.inlineLevel, f.label = 19;
            case 19:
              return c < g.length ? (d = g[c], [4, this.renderNode(d)]) : [3, 22];
            case 20:
              f.sent(), f.label = 21;
            case 21:
              return c++, [3, 19];
            case 22:
              w = 0, p = t.zeroOrAutoZIndexOrTransformedOrOpacity, f.label = 23;
            case 23:
              return w < p.length ? (d = p[w], [4, this.renderStack(d)]) : [3, 26];
            case 24:
              f.sent(), f.label = 25;
            case 25:
              return w++, [3, 23];
            case 26:
              C = 0, Q = t.positiveZIndex, f.label = 27;
            case 27:
              return C < Q.length ? (d = Q[C], [4, this.renderStack(d)]) : [3, 30];
            case 28:
              f.sent(), f.label = 29;
            case 29:
              return C++, [3, 27];
            case 30:
              return [
                2
                /*return*/
              ];
          }
        });
      });
    }, e.prototype.mask = function(t) {
      this.ctx.beginPath(), this.ctx.moveTo(0, 0), this.ctx.lineTo(this.canvas.width, 0), this.ctx.lineTo(this.canvas.width, this.canvas.height), this.ctx.lineTo(0, this.canvas.height), this.ctx.lineTo(0, 0), this.formatPath(t.slice(0).reverse()), this.ctx.closePath();
    }, e.prototype.path = function(t) {
      this.ctx.beginPath(), this.formatPath(t), this.ctx.closePath();
    }, e.prototype.formatPath = function(t) {
      var r = this;
      t.forEach(function(n, a) {
        var i = Te(n) ? n.start : n;
        a === 0 ? r.ctx.moveTo(i.x, i.y) : r.ctx.lineTo(i.x, i.y), Te(n) && r.ctx.bezierCurveTo(n.startControl.x, n.startControl.y, n.endControl.x, n.endControl.y, n.end.x, n.end.y);
      });
    }, e.prototype.renderRepeat = function(t, r, n, a) {
      this.path(t), this.ctx.fillStyle = r, this.ctx.translate(n, a), this.ctx.fill(), this.ctx.translate(-n, -a);
    }, e.prototype.resizeImage = function(t, r, n) {
      var a;
      if (t.width === r && t.height === n)
        return t;
      var i = (a = this.canvas.ownerDocument) !== null && a !== void 0 ? a : document, s = i.createElement("canvas");
      s.width = Math.max(1, r), s.height = Math.max(1, n);
      var o = s.getContext("2d");
      return o.drawImage(t, 0, 0, t.width, t.height, 0, 0, r, n), s;
    }, e.prototype.renderBackgroundImage = function(t) {
      return re(this, void 0, void 0, function() {
        var r, n, a, i, s, o;
        return zA(this, function(u) {
          switch (u.label) {
            case 0:
              r = t.styles.backgroundImage.length - 1, n = function(l) {
                var c, g, w, x, z, tA, b, R, y, p, x, z, tA, b, R, C, Q, d, f, B, h, m, v, U, y, E, x, Y, AA, b, R, eA, z, tA, H, O, k, G, X, hA, yA, FA;
                return zA(this, function(DA) {
                  switch (DA.label) {
                    case 0:
                      if (l.type !== 0)
                        return [3, 5];
                      c = void 0, g = l.url, DA.label = 1;
                    case 1:
                      return DA.trys.push([1, 3, , 4]), [4, a.context.cache.match(g)];
                    case 2:
                      return c = DA.sent(), [3, 4];
                    case 3:
                      return DA.sent(), a.context.logger.error("Error loading background-image " + g), [3, 4];
                    case 4:
                      return c && (w = zu(t, r, [
                        c.width,
                        c.height,
                        c.width / c.height
                      ]), x = w[0], z = w[1], tA = w[2], b = w[3], R = w[4], y = a.ctx.createPattern(a.resizeImage(c, b, R), "repeat"), a.renderRepeat(x, y, z, tA)), [3, 6];
                    case 5:
                      R1(l) ? (p = zu(t, r, [null, null, null]), x = p[0], z = p[1], tA = p[2], b = p[3], R = p[4], C = k1(l.angle, b, R), Q = C[0], d = C[1], f = C[2], B = C[3], h = C[4], m = document.createElement("canvas"), m.width = b, m.height = R, v = m.getContext("2d"), U = v.createLinearGradient(d, B, f, h), lg(l.stops, Q).forEach(function(OA) {
                        return U.addColorStop(OA.stop, NA(OA.color));
                      }), v.fillStyle = U, v.fillRect(0, 0, b, R), b > 0 && R > 0 && (y = a.ctx.createPattern(m, "repeat"), a.renderRepeat(x, y, z, tA))) : P1(l) && (E = zu(t, r, [
                        null,
                        null,
                        null
                      ]), x = E[0], Y = E[1], AA = E[2], b = E[3], R = E[4], eA = l.position.length === 0 ? [ad] : l.position, z = uA(eA[0], b), tA = uA(eA[eA.length - 1], R), H = M1(l, z, tA, b, R), O = H[0], k = H[1], O > 0 && k > 0 && (G = a.ctx.createRadialGradient(Y + z, AA + tA, 0, Y + z, AA + tA, O), lg(l.stops, O * 2).forEach(function(OA) {
                        return G.addColorStop(OA.stop, NA(OA.color));
                      }), a.path(x), a.ctx.fillStyle = G, O !== k ? (X = t.bounds.left + 0.5 * t.bounds.width, hA = t.bounds.top + 0.5 * t.bounds.height, yA = k / O, FA = 1 / yA, a.ctx.save(), a.ctx.translate(X, hA), a.ctx.transform(1, 0, 0, yA, 0, 0), a.ctx.translate(-X, -hA), a.ctx.fillRect(Y, FA * (AA - hA) + hA, b, R * FA), a.ctx.restore()) : a.ctx.fill())), DA.label = 6;
                    case 6:
                      return r--, [
                        2
                        /*return*/
                      ];
                  }
                });
              }, a = this, i = 0, s = t.styles.backgroundImage.slice(0).reverse(), u.label = 1;
            case 1:
              return i < s.length ? (o = s[i], [5, n(o)]) : [3, 4];
            case 2:
              u.sent(), u.label = 3;
            case 3:
              return i++, [3, 1];
            case 4:
              return [
                2
                /*return*/
              ];
          }
        });
      });
    }, e.prototype.renderSolidBorder = function(t, r, n) {
      return re(this, void 0, void 0, function() {
        return zA(this, function(a) {
          return this.path(Rg(n, r)), this.ctx.fillStyle = NA(t), this.ctx.fill(), [
            2
            /*return*/
          ];
        });
      });
    }, e.prototype.renderDoubleBorder = function(t, r, n, a) {
      return re(this, void 0, void 0, function() {
        var i, s;
        return zA(this, function(o) {
          switch (o.label) {
            case 0:
              return r < 3 ? [4, this.renderSolidBorder(t, n, a)] : [3, 2];
            case 1:
              return o.sent(), [
                2
                /*return*/
              ];
            case 2:
              return i = Wx(a, n), this.path(i), this.ctx.fillStyle = NA(t), this.ctx.fill(), s = Yx(a, n), this.path(s), this.ctx.fill(), [
                2
                /*return*/
              ];
          }
        });
      });
    }, e.prototype.renderNodeBackgroundAndBorders = function(t) {
      return re(this, void 0, void 0, function() {
        var r, n, a, i, s, o, u, l, c = this;
        return zA(this, function(g) {
          switch (g.label) {
            case 0:
              return this.applyEffects(t.getEffects(
                2
                /* BACKGROUND_BORDERS */
              )), r = t.container.styles, n = !er(r.backgroundColor) || r.backgroundImage.length, a = [
                { style: r.borderTopStyle, color: r.borderTopColor, width: r.borderTopWidth },
                { style: r.borderRightStyle, color: r.borderRightColor, width: r.borderRightWidth },
                { style: r.borderBottomStyle, color: r.borderBottomColor, width: r.borderBottomWidth },
                { style: r.borderLeftStyle, color: r.borderLeftColor, width: r.borderLeftWidth }
              ], i = r2($r(r.backgroundClip, 0), t.curves), n || r.boxShadow.length ? (this.ctx.save(), this.path(i), this.ctx.clip(), er(r.backgroundColor) || (this.ctx.fillStyle = NA(r.backgroundColor), this.ctx.fill()), [4, this.renderBackgroundImage(t.container)]) : [3, 2];
            case 1:
              g.sent(), this.ctx.restore(), r.boxShadow.slice(0).reverse().forEach(function(w) {
                c.ctx.save();
                var p = oo(t.curves), C = w.inset ? 0 : A2, Q = Vx(p, -C + (w.inset ? 1 : -1) * w.spread.number, (w.inset ? 1 : -1) * w.spread.number, w.spread.number * (w.inset ? -2 : 2), w.spread.number * (w.inset ? -2 : 2));
                w.inset ? (c.path(p), c.ctx.clip(), c.mask(Q)) : (c.mask(p), c.ctx.clip(), c.path(Q)), c.ctx.shadowOffsetX = w.offsetX.number + C, c.ctx.shadowOffsetY = w.offsetY.number, c.ctx.shadowColor = NA(w.color), c.ctx.shadowBlur = w.blur.number, c.ctx.fillStyle = w.inset ? NA(w.color) : "rgba(0,0,0,1)", c.ctx.fill(), c.ctx.restore();
              }), g.label = 2;
            case 2:
              s = 0, o = 0, u = a, g.label = 3;
            case 3:
              return o < u.length ? (l = u[o], l.style !== 0 && !er(l.color) && l.width > 0 ? l.style !== 2 ? [3, 5] : [4, this.renderDashedDottedBorder(
                l.color,
                l.width,
                s,
                t.curves,
                2
                /* DASHED */
              )] : [3, 11]) : [3, 13];
            case 4:
              return g.sent(), [3, 11];
            case 5:
              return l.style !== 3 ? [3, 7] : [4, this.renderDashedDottedBorder(
                l.color,
                l.width,
                s,
                t.curves,
                3
                /* DOTTED */
              )];
            case 6:
              return g.sent(), [3, 11];
            case 7:
              return l.style !== 4 ? [3, 9] : [4, this.renderDoubleBorder(l.color, l.width, s, t.curves)];
            case 8:
              return g.sent(), [3, 11];
            case 9:
              return [4, this.renderSolidBorder(l.color, s, t.curves)];
            case 10:
              g.sent(), g.label = 11;
            case 11:
              s++, g.label = 12;
            case 12:
              return o++, [3, 3];
            case 13:
              return [
                2
                /*return*/
              ];
          }
        });
      });
    }, e.prototype.renderDashedDottedBorder = function(t, r, n, a, i) {
      return re(this, void 0, void 0, function() {
        var s, o, u, l, c, g, w, p, C, Q, d, f, B, h, m, v, m, v;
        return zA(this, function(U) {
          return this.ctx.save(), s = Xx(a, n), o = Rg(a, n), i === 2 && (this.path(o), this.ctx.clip()), Te(o[0]) ? (u = o[0].start.x, l = o[0].start.y) : (u = o[0].x, l = o[0].y), Te(o[1]) ? (c = o[1].end.x, g = o[1].end.y) : (c = o[1].x, g = o[1].y), n === 0 || n === 2 ? w = Math.abs(u - c) : w = Math.abs(l - g), this.ctx.beginPath(), i === 3 ? this.formatPath(s) : this.formatPath(o.slice(0, 2)), p = r < 3 ? r * 3 : r * 2, C = r < 3 ? r * 2 : r, i === 3 && (p = r, C = r), Q = !0, w <= p * 2 ? Q = !1 : w <= p * 2 + C ? (d = w / (2 * p + C), p *= d, C *= d) : (f = Math.floor((w + C) / (p + C)), B = (w - f * p) / (f - 1), h = (w - (f + 1) * p) / f, C = h <= 0 || Math.abs(C - B) < Math.abs(C - h) ? B : h), Q && (i === 3 ? this.ctx.setLineDash([0, p + C]) : this.ctx.setLineDash([p, C])), i === 3 ? (this.ctx.lineCap = "round", this.ctx.lineWidth = r) : this.ctx.lineWidth = r * 2 + 1.1, this.ctx.strokeStyle = NA(t), this.ctx.stroke(), this.ctx.setLineDash([]), i === 2 && (Te(o[0]) && (m = o[3], v = o[0], this.ctx.beginPath(), this.formatPath([new S(m.end.x, m.end.y), new S(v.start.x, v.start.y)]), this.ctx.stroke()), Te(o[1]) && (m = o[1], v = o[2], this.ctx.beginPath(), this.formatPath([new S(m.end.x, m.end.y), new S(v.start.x, v.start.y)]), this.ctx.stroke())), this.ctx.restore(), [
            2
            /*return*/
          ];
        });
      });
    }, e.prototype.render = function(t) {
      return re(this, void 0, void 0, function() {
        var r;
        return zA(this, function(n) {
          switch (n.label) {
            case 0:
              return this.options.backgroundColor && (this.ctx.fillStyle = NA(this.options.backgroundColor), this.ctx.fillRect(this.options.x, this.options.y, this.options.width, this.options.height)), r = Gx(t), [4, this.renderStack(r)];
            case 1:
              return n.sent(), this.applyEffects([]), [2, this.canvas];
          }
        });
      });
    }, e;
  }(N0)
), t2 = function(A) {
  return A instanceof U0 || A instanceof Q0 ? !0 : A instanceof ud && A.type !== ao && A.type !== no;
}, r2 = function(A, e) {
  switch (A) {
    case 0:
      return oo(e);
    case 2:
      return Kx(e);
    case 1:
    default:
      return uo(e);
  }
}, n2 = function(A) {
  switch (A) {
    case 1:
      return "center";
    case 2:
      return "right";
    case 0:
    default:
      return "left";
  }
}, a2 = ["-apple-system", "system-ui"], i2 = function(A) {
  return /iPhone OS 15_(0|1)/.test(window.navigator.userAgent) ? A.filter(function(e) {
    return a2.indexOf(e) === -1;
  }) : A;
}, s2 = (
  /** @class */
  function(A) {
    ze(e, A);
    function e(t, r) {
      var n = A.call(this, t, r) || this;
      return n.canvas = r.canvas ? r.canvas : document.createElement("canvas"), n.ctx = n.canvas.getContext("2d"), n.options = r, n.canvas.width = Math.floor(r.width * r.scale), n.canvas.height = Math.floor(r.height * r.scale), n.canvas.style.width = r.width + "px", n.canvas.style.height = r.height + "px", n.ctx.scale(n.options.scale, n.options.scale), n.ctx.translate(-r.x, -r.y), n.context.logger.debug("EXPERIMENTAL ForeignObject renderer initialized (" + r.width + "x" + r.height + " at " + r.x + "," + r.y + ") with scale " + r.scale), n;
    }
    return e.prototype.render = function(t) {
      return re(this, void 0, void 0, function() {
        var r, n;
        return zA(this, function(a) {
          switch (a.label) {
            case 0:
              return r = Jc(this.options.width * this.options.scale, this.options.height * this.options.scale, this.options.scale, this.options.scale, t), [4, o2(r)];
            case 1:
              return n = a.sent(), this.options.backgroundColor && (this.ctx.fillStyle = NA(this.options.backgroundColor), this.ctx.fillRect(0, 0, this.options.width * this.options.scale, this.options.height * this.options.scale)), this.ctx.drawImage(n, -this.options.x * this.options.scale, -this.options.y * this.options.scale), [2, this.canvas];
          }
        });
      });
    }, e;
  }(N0)
), o2 = function(A) {
  return new Promise(function(e, t) {
    var r = new Image();
    r.onload = function() {
      e(r);
    }, r.onerror = t, r.src = "data:image/svg+xml;charset=utf-8," + encodeURIComponent(new XMLSerializer().serializeToString(A));
  });
}, u2 = (
  /** @class */
  function() {
    function A(e) {
      var t = e.id, r = e.enabled;
      this.id = t, this.enabled = r, this.start = Date.now();
    }
    return A.prototype.debug = function() {
      for (var e = [], t = 0; t < arguments.length; t++)
        e[t] = arguments[t];
      this.enabled && (typeof window < "u" && window.console && typeof console.debug == "function" ? console.debug.apply(console, _i([this.id, this.getTime() + "ms"], e)) : this.info.apply(this, e));
    }, A.prototype.getTime = function() {
      return Date.now() - this.start;
    }, A.prototype.info = function() {
      for (var e = [], t = 0; t < arguments.length; t++)
        e[t] = arguments[t];
      this.enabled && typeof window < "u" && window.console && typeof console.info == "function" && console.info.apply(console, _i([this.id, this.getTime() + "ms"], e));
    }, A.prototype.warn = function() {
      for (var e = [], t = 0; t < arguments.length; t++)
        e[t] = arguments[t];
      this.enabled && (typeof window < "u" && window.console && typeof console.warn == "function" ? console.warn.apply(console, _i([this.id, this.getTime() + "ms"], e)) : this.info.apply(this, e));
    }, A.prototype.error = function() {
      for (var e = [], t = 0; t < arguments.length; t++)
        e[t] = arguments[t];
      this.enabled && (typeof window < "u" && window.console && typeof console.error == "function" ? console.error.apply(console, _i([this.id, this.getTime() + "ms"], e)) : this.info.apply(this, e));
    }, A.instances = {}, A;
  }()
), l2 = (
  /** @class */
  function() {
    function A(e, t) {
      var r;
      this.windowBounds = t, this.instanceName = "#" + A.instanceCount++, this.logger = new u2({ id: this.instanceName, enabled: e.logging }), this.cache = (r = e.cache) !== null && r !== void 0 ? r : new Sx(this, e);
    }
    return A.instanceCount = 1, A;
  }()
), c2 = function(A, e) {
  return e === void 0 && (e = {}), f2(A, e);
};
typeof window < "u" && D0.setContext(window);
var f2 = function(A, e) {
  return re(void 0, void 0, void 0, function() {
    var t, r, n, a, i, s, o, u, l, c, g, w, p, C, Q, d, f, B, h, m, U, v, U, y, E, x, Y, AA, b, R, eA, z, tA, H, O, k, G, X, hA, yA;
    return zA(this, function(FA) {
      switch (FA.label) {
        case 0:
          if (!A || typeof A != "object")
            return [2, Promise.reject("Invalid element provided as first argument")];
          if (t = A.ownerDocument, !t)
            throw new Error("Element is not attached to a Document");
          if (r = t.defaultView, !r)
            throw new Error("Document is not attached to a Window");
          return n = {
            allowTaint: (y = e.allowTaint) !== null && y !== void 0 ? y : !1,
            imageTimeout: (E = e.imageTimeout) !== null && E !== void 0 ? E : 15e3,
            proxy: e.proxy,
            useCORS: (x = e.useCORS) !== null && x !== void 0 ? x : !1
          }, a = kc({ logging: (Y = e.logging) !== null && Y !== void 0 ? Y : !0, cache: e.cache }, n), i = {
            windowWidth: (AA = e.windowWidth) !== null && AA !== void 0 ? AA : r.innerWidth,
            windowHeight: (b = e.windowHeight) !== null && b !== void 0 ? b : r.innerHeight,
            scrollX: (R = e.scrollX) !== null && R !== void 0 ? R : r.pageXOffset,
            scrollY: (eA = e.scrollY) !== null && eA !== void 0 ? eA : r.pageYOffset
          }, s = new Ht(i.scrollX, i.scrollY, i.windowWidth, i.windowHeight), o = new l2(a, s), u = (z = e.foreignObjectRendering) !== null && z !== void 0 ? z : !1, l = {
            allowTaint: (tA = e.allowTaint) !== null && tA !== void 0 ? tA : !1,
            onclone: e.onclone,
            ignoreElements: e.ignoreElements,
            inlineImages: u,
            copyStyles: u
          }, o.logger.debug("Starting document clone with size " + s.width + "x" + s.height + " scrolled to " + -s.left + "," + -s.top), c = new Kg(o, A, l), g = c.clonedReferenceElement, g ? [4, c.toIFrame(t, s)] : [2, Promise.reject("Unable to find element in cloned iframe")];
        case 1:
          return w = FA.sent(), p = ld(g) || dx(g) ? VF(g.ownerDocument) : _o(o, g), C = p.width, Q = p.height, d = p.left, f = p.top, B = d2(o, g, e.backgroundColor), h = {
            canvas: e.canvas,
            backgroundColor: B,
            scale: (O = (H = e.scale) !== null && H !== void 0 ? H : r.devicePixelRatio) !== null && O !== void 0 ? O : 1,
            x: ((k = e.x) !== null && k !== void 0 ? k : 0) + d,
            y: ((G = e.y) !== null && G !== void 0 ? G : 0) + f,
            width: (X = e.width) !== null && X !== void 0 ? X : Math.ceil(C),
            height: (hA = e.height) !== null && hA !== void 0 ? hA : Math.ceil(Q)
          }, u ? (o.logger.debug("Document cloned, using foreign object rendering"), U = new s2(o, h), [4, U.render(g)]) : [3, 3];
        case 2:
          return m = FA.sent(), [3, 5];
        case 3:
          return o.logger.debug("Document cloned, element located at " + d + "," + f + " with size " + C + "x" + Q + " using computed rendering"), o.logger.debug("Starting DOM parsing"), v = E0(o, g), B === v.styles.backgroundColor && (v.styles.backgroundColor = Qt.TRANSPARENT), o.logger.debug("Starting renderer for element at " + h.x + "," + h.y + " with size " + h.width + "x" + h.height), U = new e2(o, h), [4, U.render(v)];
        case 4:
          m = FA.sent(), FA.label = 5;
        case 5:
          return (!((yA = e.removeContainer) !== null && yA !== void 0) || yA) && (Kg.destroy(w) || o.logger.error("Cannot detach cloned iframe as it is not in the DOM anymore")), o.logger.debug("Finished rendering"), [2, m];
      }
    });
  });
}, d2 = function(A, e, t) {
  var r = e.ownerDocument, n = r.documentElement ? va(A, getComputedStyle(r.documentElement).backgroundColor) : Qt.TRANSPARENT, a = r.body ? va(A, getComputedStyle(r.body).backgroundColor) : Qt.TRANSPARENT, i = typeof t == "string" ? va(A, t) : t === null ? Qt.TRANSPARENT : 4294967295;
  return e === r.documentElement ? er(n) ? er(a) ? i : a : n : i;
};
const B2 = "_toggleButton_tq8ia_1", g2 = "_active_tq8ia_24", h2 = "_toggleWrapper_tq8ia_32", Ju = {
  toggleButton: B2,
  active: g2,
  toggleWrapper: h2
}, p2 = ({ mode: A, setMode: e }) => {
  const t = () => e(A === "statusForSprint" ? "statusNow" : "statusForSprint");
  return /* @__PURE__ */ P.jsxs(P.Fragment, { children: [
    /* @__PURE__ */ P.jsxs("div", { className: Ju.toggleWrapper, children: [
      /* @__PURE__ */ P.jsx(
        "button",
        {
          onClick: t,
          className: `${Ju.toggleButton} ${A === "statusForSprint" ? Ju.active : ""}`,
          title: "Valitse tilanne raportointihetken tavoitteeseen nähden tai etapin tavoitteeseen nähden"
        }
      ),
      /* @__PURE__ */ P.jsx("p", { children: "Etapin tilanne" })
    ] }),
    /* @__PURE__ */ P.jsx("p", { children: A === "statusNow" ? "Tilanne raportointihetken tavoitteeseen nähden" : "Tilanne etapin tavoitteeseen nähden" })
  ] });
}, w2 = async (A) => {
  let e;
  return e = await (await fetch(A)).json(), qQ.parse(e);
}, v2 = () => {
  var s;
  const A = IA.useRef(null), e = (s = document.getElementById("work-root")) == null ? void 0 : s.getAttribute("data-source-url"), { data: t, error: r, isLoading: n } = $C(e, w2, {
    revalidateIfStale: !1,
    revalidateOnFocus: !1,
    shouldRetryOnError: !1
  }), a = (o, u) => {
    const l = document.createElement("a");
    l.href = o, l.download = `${u}.png`, l.click();
  }, i = (o) => {
    console.log("trying to take a screenshot");
    const u = document.querySelector("main");
    if (!u) {
      console.error("Could not find the element to screenshot"), alert("Screenshotin luonti epäonnistui");
      return;
    }
    console.log(u), c2(u).then((l) => {
      const c = l.toDataURL("image/png");
      a(c, o);
    }).catch((l) => {
      console.error(l);
    });
  };
  return /* @__PURE__ */ P.jsxs("div", { className: Se.app, children: [
    /* @__PURE__ */ P.jsxs("div", { children: [
      /* @__PURE__ */ P.jsx("div", { className: Se.workLogoWrapper, children: /* @__PURE__ */ P.jsx("img", { src: IF, alt: "Work logo", className: Se.workLogo }) }),
      /* @__PURE__ */ P.jsxs("ul", { className: Se.reports, children: [
        r && /* @__PURE__ */ P.jsxs("li", { className: Se.error, children: [
          "Virhe: ",
          `${r}`
        ] }),
        n && /* @__PURE__ */ P.jsx(Vg, { report: PF, isLoading: n }),
        t && t.map((o) => /* @__PURE__ */ P.jsx(
          Vg,
          {
            report: o,
            isLoading: n
          },
          o.Title
        ))
      ] })
    ] }),
    /* @__PURE__ */ P.jsx("div", { className: Se.screenshotWrapper, ref: A, children: /* @__PURE__ */ P.jsx(
      "button",
      {
        onClick: () => {
          var o;
          (o = A.current) == null || o.remove(), i(t && t[0] ? t[0].Title : "work-tilanne");
        },
        children: "Lataa kuvana"
      }
    ) })
  ] });
}, Vg = ({
  report: A,
  isLoading: e
}) => {
  const [t, r] = IA.useState("statusNow");
  return /* @__PURE__ */ P.jsxs("li", { className: `${Se.report} report`, id: A.Title, children: [
    /* @__PURE__ */ P.jsx("h2", { className: Se.reportTitle, children: A.Title }),
    /* @__PURE__ */ P.jsxs("p", { children: [
      VB(A.DateFrom),
      " – ",
      VB(A.DateTo)
    ] }),
    /* @__PURE__ */ P.jsx(p2, { mode: t, setMode: r }),
    /* @__PURE__ */ P.jsxs("table", { className: Se.reportTable, cellPadding: 6, children: [
      /* @__PURE__ */ P.jsx("thead", { children: /* @__PURE__ */ P.jsxs("tr", { children: [
        /* @__PURE__ */ P.jsx("td", {}),
        /* @__PURE__ */ P.jsx("td", { children: "AH" }),
        /* @__PURE__ */ P.jsx("td", { children: "BUK" }),
        /* @__PURE__ */ P.jsx("td", { children: "Samvirk" }),
        /* @__PURE__ */ P.jsx("td", { children: "Tulos" })
      ] }) }),
      /* @__PURE__ */ P.jsx("tbody", { children: A.Teams.map((a) => /* @__PURE__ */ P.jsxs("tr", { children: [
        /* @__PURE__ */ P.jsx("td", { children: /* @__PURE__ */ P.jsx(
          "div",
          {
            className: `${Se.teamLogo} ${Se["team" + a.Name]}`
          }
        ) }),
        /* @__PURE__ */ P.jsx("td", { children: e ? "–" : xu({ status: a.AHStatus, mode: t }) }),
        /* @__PURE__ */ P.jsx("td", { children: e ? "–" : xu({
          status: a.BUKStatus,
          mode: t
        }) }),
        /* @__PURE__ */ P.jsx("td", { children: e ? "–" : xu({
          status: a.SamvirkStatus,
          samvirkGoalPerSprint: A.SamvirkGoalPerSprint,
          mode: t
        }) }),
        /* @__PURE__ */ P.jsx("td", { children: e ? "–" : EF({
          team: a,
          samvirkGoalPerSprint: A.SamvirkGoalPerSprint,
          mode: t
        }) })
      ] }, a.Name)) })
    ] }),
    /* @__PURE__ */ P.jsxs("p", { children: [
      "Tulokset päivitetty: ",
      FF(A.ReportDate)
    ] }),
    /* @__PURE__ */ P.jsxs("ul", { className: Se.explanation, children: [
      /* @__PURE__ */ P.jsx("li", { children: t === "statusNow" ? `MyShare tavoite raportointihetkellä: ${A.MyShareTargetOnDate}%` : `MyShare tavoite etapin loppuun mennessä: ${A.MyShareNextThreshold}%` }),
      /* @__PURE__ */ P.jsxs("li", { children: [
        "AH-tavoite etapin aikana per tiimi:",
        " ",
        6e3.toLocaleString("fi-FI", {
          maximumFractionDigits: 0
        }),
        "€"
      ] })
    ] })
  ] });
}, m2 = document.getElementById("work-root"), C2 = rw(m2);
C2.render(
  /* @__PURE__ */ P.jsx(fo.StrictMode, { children: /* @__PURE__ */ P.jsx(v2, {}) })
);
