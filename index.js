function rs(e) {
  return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default") ? e.default : e;
}
var Rc = { exports: {} }, Bo = {}, Ic = { exports: {} }, $ = {};
/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Ti = Symbol.for("react.element"), Cp = Symbol.for("react.portal"), Tp = Symbol.for("react.fragment"), Ep = Symbol.for("react.strict_mode"), Np = Symbol.for("react.profiler"), Op = Symbol.for("react.provider"), Dp = Symbol.for("react.context"), Pp = Symbol.for("react.forward_ref"), Mp = Symbol.for("react.suspense"), Lp = Symbol.for("react.memo"), Rp = Symbol.for("react.lazy"), iu = Symbol.iterator;
function Ip(e) {
  return e === null || typeof e != "object" ? null : (e = iu && e[iu] || e["@@iterator"], typeof e == "function" ? e : null);
}
var zc = { isMounted: function() {
  return !1;
}, enqueueForceUpdate: function() {
}, enqueueReplaceState: function() {
}, enqueueSetState: function() {
} }, jc = Object.assign, Uc = {};
function _r(e, t, n) {
  this.props = e, this.context = t, this.refs = Uc, this.updater = n || zc;
}
_r.prototype.isReactComponent = {};
_r.prototype.setState = function(e, t) {
  if (typeof e != "object" && typeof e != "function" && e != null)
    throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");
  this.updater.enqueueSetState(this, e, t, "setState");
};
_r.prototype.forceUpdate = function(e) {
  this.updater.enqueueForceUpdate(this, e, "forceUpdate");
};
function Ac() {
}
Ac.prototype = _r.prototype;
function is(e, t, n) {
  this.props = e, this.context = t, this.refs = Uc, this.updater = n || zc;
}
var os = is.prototype = new Ac();
os.constructor = is;
jc(os, _r.prototype);
os.isPureReactComponent = !0;
var ou = Array.isArray, $c = Object.prototype.hasOwnProperty, as = { current: null }, Fc = { key: !0, ref: !0, __self: !0, __source: !0 };
function Vc(e, t, n) {
  var r, i = {}, o = null, a = null;
  if (t != null)
    for (r in t.ref !== void 0 && (a = t.ref), t.key !== void 0 && (o = "" + t.key), t)
      $c.call(t, r) && !Fc.hasOwnProperty(r) && (i[r] = t[r]);
  var l = arguments.length - 2;
  if (l === 1)
    i.children = n;
  else if (1 < l) {
    for (var s = Array(l), u = 0; u < l; u++)
      s[u] = arguments[u + 2];
    i.children = s;
  }
  if (e && e.defaultProps)
    for (r in l = e.defaultProps, l)
      i[r] === void 0 && (i[r] = l[r]);
  return { $$typeof: Ti, type: e, key: o, ref: a, props: i, _owner: as.current };
}
function zp(e, t) {
  return { $$typeof: Ti, type: e.type, key: t, ref: e.ref, props: e.props, _owner: e._owner };
}
function ls(e) {
  return typeof e == "object" && e !== null && e.$$typeof === Ti;
}
function jp(e) {
  var t = { "=": "=0", ":": "=2" };
  return "$" + e.replace(/[=:]/g, function(n) {
    return t[n];
  });
}
var au = /\/+/g;
function ha(e, t) {
  return typeof e == "object" && e !== null && e.key != null ? jp("" + e.key) : t.toString(36);
}
function Xi(e, t, n, r, i) {
  var o = typeof e;
  (o === "undefined" || o === "boolean") && (e = null);
  var a = !1;
  if (e === null)
    a = !0;
  else
    switch (o) {
      case "string":
      case "number":
        a = !0;
        break;
      case "object":
        switch (e.$$typeof) {
          case Ti:
          case Cp:
            a = !0;
        }
    }
  if (a)
    return a = e, i = i(a), e = r === "" ? "." + ha(a, 0) : r, ou(i) ? (n = "", e != null && (n = e.replace(au, "$&/") + "/"), Xi(i, t, n, "", function(u) {
      return u;
    })) : i != null && (ls(i) && (i = zp(i, n + (!i.key || a && a.key === i.key ? "" : ("" + i.key).replace(au, "$&/") + "/") + e)), t.push(i)), 1;
  if (a = 0, r = r === "" ? "." : r + ":", ou(e))
    for (var l = 0; l < e.length; l++) {
      o = e[l];
      var s = r + ha(o, l);
      a += Xi(o, t, n, s, i);
    }
  else if (s = Ip(e), typeof s == "function")
    for (e = s.call(e), l = 0; !(o = e.next()).done; )
      o = o.value, s = r + ha(o, l++), a += Xi(o, t, n, s, i);
  else if (o === "object")
    throw t = String(e), Error("Objects are not valid as a React child (found: " + (t === "[object Object]" ? "object with keys {" + Object.keys(e).join(", ") + "}" : t) + "). If you meant to render a collection of children, use an array instead.");
  return a;
}
function Mi(e, t, n) {
  if (e == null)
    return e;
  var r = [], i = 0;
  return Xi(e, r, "", "", function(o) {
    return t.call(n, o, i++);
  }), r;
}
function Up(e) {
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
var ze = { current: null }, qi = { transition: null }, Ap = { ReactCurrentDispatcher: ze, ReactCurrentBatchConfig: qi, ReactCurrentOwner: as };
$.Children = { map: Mi, forEach: function(e, t, n) {
  Mi(e, function() {
    t.apply(this, arguments);
  }, n);
}, count: function(e) {
  var t = 0;
  return Mi(e, function() {
    t++;
  }), t;
}, toArray: function(e) {
  return Mi(e, function(t) {
    return t;
  }) || [];
}, only: function(e) {
  if (!ls(e))
    throw Error("React.Children.only expected to receive a single React element child.");
  return e;
} };
$.Component = _r;
$.Fragment = Tp;
$.Profiler = Np;
$.PureComponent = is;
$.StrictMode = Ep;
$.Suspense = Mp;
$.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = Ap;
$.cloneElement = function(e, t, n) {
  if (e == null)
    throw Error("React.cloneElement(...): The argument must be a React element, but you passed " + e + ".");
  var r = jc({}, e.props), i = e.key, o = e.ref, a = e._owner;
  if (t != null) {
    if (t.ref !== void 0 && (o = t.ref, a = as.current), t.key !== void 0 && (i = "" + t.key), e.type && e.type.defaultProps)
      var l = e.type.defaultProps;
    for (s in t)
      $c.call(t, s) && !Fc.hasOwnProperty(s) && (r[s] = t[s] === void 0 && l !== void 0 ? l[s] : t[s]);
  }
  var s = arguments.length - 2;
  if (s === 1)
    r.children = n;
  else if (1 < s) {
    l = Array(s);
    for (var u = 0; u < s; u++)
      l[u] = arguments[u + 2];
    r.children = l;
  }
  return { $$typeof: Ti, type: e.type, key: i, ref: o, props: r, _owner: a };
};
$.createContext = function(e) {
  return e = { $$typeof: Dp, _currentValue: e, _currentValue2: e, _threadCount: 0, Provider: null, Consumer: null, _defaultValue: null, _globalName: null }, e.Provider = { $$typeof: Op, _context: e }, e.Consumer = e;
};
$.createElement = Vc;
$.createFactory = function(e) {
  var t = Vc.bind(null, e);
  return t.type = e, t;
};
$.createRef = function() {
  return { current: null };
};
$.forwardRef = function(e) {
  return { $$typeof: Pp, render: e };
};
$.isValidElement = ls;
$.lazy = function(e) {
  return { $$typeof: Rp, _payload: { _status: -1, _result: e }, _init: Up };
};
$.memo = function(e, t) {
  return { $$typeof: Lp, type: e, compare: t === void 0 ? null : t };
};
$.startTransition = function(e) {
  var t = qi.transition;
  qi.transition = {};
  try {
    e();
  } finally {
    qi.transition = t;
  }
};
$.unstable_act = function() {
  throw Error("act(...) is not supported in production builds of React.");
};
$.useCallback = function(e, t) {
  return ze.current.useCallback(e, t);
};
$.useContext = function(e) {
  return ze.current.useContext(e);
};
$.useDebugValue = function() {
};
$.useDeferredValue = function(e) {
  return ze.current.useDeferredValue(e);
};
$.useEffect = function(e, t) {
  return ze.current.useEffect(e, t);
};
$.useId = function() {
  return ze.current.useId();
};
$.useImperativeHandle = function(e, t, n) {
  return ze.current.useImperativeHandle(e, t, n);
};
$.useInsertionEffect = function(e, t) {
  return ze.current.useInsertionEffect(e, t);
};
$.useLayoutEffect = function(e, t) {
  return ze.current.useLayoutEffect(e, t);
};
$.useMemo = function(e, t) {
  return ze.current.useMemo(e, t);
};
$.useReducer = function(e, t, n) {
  return ze.current.useReducer(e, t, n);
};
$.useRef = function(e) {
  return ze.current.useRef(e);
};
$.useState = function(e) {
  return ze.current.useState(e);
};
$.useSyncExternalStore = function(e, t, n) {
  return ze.current.useSyncExternalStore(e, t, n);
};
$.useTransition = function() {
  return ze.current.useTransition();
};
$.version = "18.2.0";
Ic.exports = $;
var de = Ic.exports;
const Qo = /* @__PURE__ */ rs(de);
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var $p = de, Fp = Symbol.for("react.element"), Vp = Symbol.for("react.fragment"), Wp = Object.prototype.hasOwnProperty, Zp = $p.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner, Hp = { key: !0, ref: !0, __self: !0, __source: !0 };
function Wc(e, t, n) {
  var r, i = {}, o = null, a = null;
  n !== void 0 && (o = "" + n), t.key !== void 0 && (o = "" + t.key), t.ref !== void 0 && (a = t.ref);
  for (r in t)
    Wp.call(t, r) && !Hp.hasOwnProperty(r) && (i[r] = t[r]);
  if (e && e.defaultProps)
    for (r in t = e.defaultProps, t)
      i[r] === void 0 && (i[r] = t[r]);
  return { $$typeof: Fp, type: e, key: o, ref: a, props: i, _owner: Zp.current };
}
Bo.Fragment = Vp;
Bo.jsx = Wc;
Bo.jsxs = Wc;
Rc.exports = Bo;
var H = Rc.exports, Zc = { exports: {} }, Ge = {}, Hc = { exports: {} }, Yc = {};
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
  function t(E, I) {
    var U = E.length;
    E.push(I);
    e:
      for (; 0 < U; ) {
        var Q = U - 1 >>> 1, K = E[Q];
        if (0 < i(K, I))
          E[Q] = I, E[U] = K, U = Q;
        else
          break e;
      }
  }
  function n(E) {
    return E.length === 0 ? null : E[0];
  }
  function r(E) {
    if (E.length === 0)
      return null;
    var I = E[0], U = E.pop();
    if (U !== I) {
      E[0] = U;
      e:
        for (var Q = 0, K = E.length, Ot = K >>> 1; Q < Ot; ) {
          var vt = 2 * (Q + 1) - 1, Yt = E[vt], gt = vt + 1, _n = E[gt];
          if (0 > i(Yt, U))
            gt < K && 0 > i(_n, Yt) ? (E[Q] = _n, E[gt] = U, Q = gt) : (E[Q] = Yt, E[vt] = U, Q = vt);
          else if (gt < K && 0 > i(_n, U))
            E[Q] = _n, E[gt] = U, Q = gt;
          else
            break e;
        }
    }
    return I;
  }
  function i(E, I) {
    var U = E.sortIndex - I.sortIndex;
    return U !== 0 ? U : E.id - I.id;
  }
  if (typeof performance == "object" && typeof performance.now == "function") {
    var o = performance;
    e.unstable_now = function() {
      return o.now();
    };
  } else {
    var a = Date, l = a.now();
    e.unstable_now = function() {
      return a.now() - l;
    };
  }
  var s = [], u = [], f = 1, h = null, m = 3, v = !1, y = !1, _ = !1, R = typeof setTimeout == "function" ? setTimeout : null, c = typeof clearTimeout == "function" ? clearTimeout : null, d = typeof setImmediate < "u" ? setImmediate : null;
  typeof navigator < "u" && navigator.scheduling !== void 0 && navigator.scheduling.isInputPending !== void 0 && navigator.scheduling.isInputPending.bind(navigator.scheduling);
  function p(E) {
    for (var I = n(u); I !== null; ) {
      if (I.callback === null)
        r(u);
      else if (I.startTime <= E)
        r(u), I.sortIndex = I.expirationTime, t(s, I);
      else
        break;
      I = n(u);
    }
  }
  function g(E) {
    if (_ = !1, p(E), !y)
      if (n(s) !== null)
        y = !0, De(T);
      else {
        var I = n(u);
        I !== null && it(g, I.startTime - E);
      }
  }
  function T(E, I) {
    y = !1, _ && (_ = !1, c(C), C = -1), v = !0;
    var U = m;
    try {
      for (p(I), h = n(s); h !== null && (!(h.expirationTime > I) || E && !ue()); ) {
        var Q = h.callback;
        if (typeof Q == "function") {
          h.callback = null, m = h.priorityLevel;
          var K = Q(h.expirationTime <= I);
          I = e.unstable_now(), typeof K == "function" ? h.callback = K : h === n(s) && r(s), p(I);
        } else
          r(s);
        h = n(s);
      }
      if (h !== null)
        var Ot = !0;
      else {
        var vt = n(u);
        vt !== null && it(g, vt.startTime - I), Ot = !1;
      }
      return Ot;
    } finally {
      h = null, m = U, v = !1;
    }
  }
  var S = !1, x = null, C = -1, V = 5, M = -1;
  function ue() {
    return !(e.unstable_now() - M < V);
  }
  function Xe() {
    if (x !== null) {
      var E = e.unstable_now();
      M = E;
      var I = !0;
      try {
        I = x(!0, E);
      } finally {
        I ? Oe() : (S = !1, x = null);
      }
    } else
      S = !1;
  }
  var Oe;
  if (typeof d == "function")
    Oe = function() {
      d(Xe);
    };
  else if (typeof MessageChannel < "u") {
    var ce = new MessageChannel(), ge = ce.port2;
    ce.port1.onmessage = Xe, Oe = function() {
      ge.postMessage(null);
    };
  } else
    Oe = function() {
      R(Xe, 0);
    };
  function De(E) {
    x = E, S || (S = !0, Oe());
  }
  function it(E, I) {
    C = R(function() {
      E(e.unstable_now());
    }, I);
  }
  e.unstable_IdlePriority = 5, e.unstable_ImmediatePriority = 1, e.unstable_LowPriority = 4, e.unstable_NormalPriority = 3, e.unstable_Profiling = null, e.unstable_UserBlockingPriority = 2, e.unstable_cancelCallback = function(E) {
    E.callback = null;
  }, e.unstable_continueExecution = function() {
    y || v || (y = !0, De(T));
  }, e.unstable_forceFrameRate = function(E) {
    0 > E || 125 < E ? console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported") : V = 0 < E ? Math.floor(1e3 / E) : 5;
  }, e.unstable_getCurrentPriorityLevel = function() {
    return m;
  }, e.unstable_getFirstCallbackNode = function() {
    return n(s);
  }, e.unstable_next = function(E) {
    switch (m) {
      case 1:
      case 2:
      case 3:
        var I = 3;
        break;
      default:
        I = m;
    }
    var U = m;
    m = I;
    try {
      return E();
    } finally {
      m = U;
    }
  }, e.unstable_pauseExecution = function() {
  }, e.unstable_requestPaint = function() {
  }, e.unstable_runWithPriority = function(E, I) {
    switch (E) {
      case 1:
      case 2:
      case 3:
      case 4:
      case 5:
        break;
      default:
        E = 3;
    }
    var U = m;
    m = E;
    try {
      return I();
    } finally {
      m = U;
    }
  }, e.unstable_scheduleCallback = function(E, I, U) {
    var Q = e.unstable_now();
    switch (typeof U == "object" && U !== null ? (U = U.delay, U = typeof U == "number" && 0 < U ? Q + U : Q) : U = Q, E) {
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
    return K = U + K, E = { id: f++, callback: I, priorityLevel: E, startTime: U, expirationTime: K, sortIndex: -1 }, U > Q ? (E.sortIndex = U, t(u, E), n(s) === null && E === n(u) && (_ ? (c(C), C = -1) : _ = !0, it(g, U - Q))) : (E.sortIndex = K, t(s, E), y || v || (y = !0, De(T))), E;
  }, e.unstable_shouldYield = ue, e.unstable_wrapCallback = function(E) {
    var I = m;
    return function() {
      var U = m;
      m = I;
      try {
        return E.apply(this, arguments);
      } finally {
        m = U;
      }
    };
  };
})(Yc);
Hc.exports = Yc;
var Yp = Hc.exports;
/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Bc = de, Qe = Yp;
function w(e) {
  for (var t = "https://reactjs.org/docs/error-decoder.html?invariant=" + e, n = 1; n < arguments.length; n++)
    t += "&args[]=" + encodeURIComponent(arguments[n]);
  return "Minified React error #" + e + "; visit " + t + " for the full message or use the non-minified dev environment for full errors and additional helpful warnings.";
}
var Qc = /* @__PURE__ */ new Set(), Gr = {};
function $n(e, t) {
  cr(e, t), cr(e + "Capture", t);
}
function cr(e, t) {
  for (Gr[e] = t, e = 0; e < t.length; e++)
    Qc.add(t[e]);
}
var $t = !(typeof window > "u" || typeof window.document > "u" || typeof window.document.createElement > "u"), ba = Object.prototype.hasOwnProperty, Bp = /^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/, lu = {}, su = {};
function Qp(e) {
  return ba.call(su, e) ? !0 : ba.call(lu, e) ? !1 : Bp.test(e) ? su[e] = !0 : (lu[e] = !0, !1);
}
function Gp(e, t, n, r) {
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
function Kp(e, t, n, r) {
  if (t === null || typeof t > "u" || Gp(e, t, n, r))
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
function je(e, t, n, r, i, o, a) {
  this.acceptsBooleans = t === 2 || t === 3 || t === 4, this.attributeName = r, this.attributeNamespace = i, this.mustUseProperty = n, this.propertyName = e, this.type = t, this.sanitizeURL = o, this.removeEmptyString = a;
}
var ke = {};
"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e) {
  ke[e] = new je(e, 0, !1, e, null, !1, !1);
});
[["acceptCharset", "accept-charset"], ["className", "class"], ["htmlFor", "for"], ["httpEquiv", "http-equiv"]].forEach(function(e) {
  var t = e[0];
  ke[t] = new je(t, 1, !1, e[1], null, !1, !1);
});
["contentEditable", "draggable", "spellCheck", "value"].forEach(function(e) {
  ke[e] = new je(e, 2, !1, e.toLowerCase(), null, !1, !1);
});
["autoReverse", "externalResourcesRequired", "focusable", "preserveAlpha"].forEach(function(e) {
  ke[e] = new je(e, 2, !1, e, null, !1, !1);
});
"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e) {
  ke[e] = new je(e, 3, !1, e.toLowerCase(), null, !1, !1);
});
["checked", "multiple", "muted", "selected"].forEach(function(e) {
  ke[e] = new je(e, 3, !0, e, null, !1, !1);
});
["capture", "download"].forEach(function(e) {
  ke[e] = new je(e, 4, !1, e, null, !1, !1);
});
["cols", "rows", "size", "span"].forEach(function(e) {
  ke[e] = new je(e, 6, !1, e, null, !1, !1);
});
["rowSpan", "start"].forEach(function(e) {
  ke[e] = new je(e, 5, !1, e.toLowerCase(), null, !1, !1);
});
var ss = /[\-:]([a-z])/g;
function us(e) {
  return e[1].toUpperCase();
}
"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e) {
  var t = e.replace(
    ss,
    us
  );
  ke[t] = new je(t, 1, !1, e, null, !1, !1);
});
"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e) {
  var t = e.replace(ss, us);
  ke[t] = new je(t, 1, !1, e, "http://www.w3.org/1999/xlink", !1, !1);
});
["xml:base", "xml:lang", "xml:space"].forEach(function(e) {
  var t = e.replace(ss, us);
  ke[t] = new je(t, 1, !1, e, "http://www.w3.org/XML/1998/namespace", !1, !1);
});
["tabIndex", "crossOrigin"].forEach(function(e) {
  ke[e] = new je(e, 1, !1, e.toLowerCase(), null, !1, !1);
});
ke.xlinkHref = new je("xlinkHref", 1, !1, "xlink:href", "http://www.w3.org/1999/xlink", !0, !1);
["src", "href", "action", "formAction"].forEach(function(e) {
  ke[e] = new je(e, 1, !1, e.toLowerCase(), null, !0, !0);
});
function cs(e, t, n, r) {
  var i = ke.hasOwnProperty(t) ? ke[t] : null;
  (i !== null ? i.type !== 0 : r || !(2 < t.length) || t[0] !== "o" && t[0] !== "O" || t[1] !== "n" && t[1] !== "N") && (Kp(t, n, i, r) && (n = null), r || i === null ? Qp(t) && (n === null ? e.removeAttribute(t) : e.setAttribute(t, "" + n)) : i.mustUseProperty ? e[i.propertyName] = n === null ? i.type === 3 ? !1 : "" : n : (t = i.attributeName, r = i.attributeNamespace, n === null ? e.removeAttribute(t) : (i = i.type, n = i === 3 || i === 4 && n === !0 ? "" : "" + n, r ? e.setAttributeNS(r, t, n) : e.setAttribute(t, n))));
}
var Ht = Bc.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED, Li = Symbol.for("react.element"), Yn = Symbol.for("react.portal"), Bn = Symbol.for("react.fragment"), ds = Symbol.for("react.strict_mode"), el = Symbol.for("react.profiler"), Gc = Symbol.for("react.provider"), Kc = Symbol.for("react.context"), fs = Symbol.for("react.forward_ref"), tl = Symbol.for("react.suspense"), nl = Symbol.for("react.suspense_list"), ps = Symbol.for("react.memo"), Gt = Symbol.for("react.lazy"), Xc = Symbol.for("react.offscreen"), uu = Symbol.iterator;
function Cr(e) {
  return e === null || typeof e != "object" ? null : (e = uu && e[uu] || e["@@iterator"], typeof e == "function" ? e : null);
}
var oe = Object.assign, ma;
function zr(e) {
  if (ma === void 0)
    try {
      throw Error();
    } catch (n) {
      var t = n.stack.trim().match(/\n( *(at )?)/);
      ma = t && t[1] || "";
    }
  return `
` + ma + e;
}
var va = !1;
function ga(e, t) {
  if (!e || va)
    return "";
  va = !0;
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
`), a = i.length - 1, l = o.length - 1; 1 <= a && 0 <= l && i[a] !== o[l]; )
        l--;
      for (; 1 <= a && 0 <= l; a--, l--)
        if (i[a] !== o[l]) {
          if (a !== 1 || l !== 1)
            do
              if (a--, l--, 0 > l || i[a] !== o[l]) {
                var s = `
` + i[a].replace(" at new ", " at ");
                return e.displayName && s.includes("<anonymous>") && (s = s.replace("<anonymous>", e.displayName)), s;
              }
            while (1 <= a && 0 <= l);
          break;
        }
    }
  } finally {
    va = !1, Error.prepareStackTrace = n;
  }
  return (e = e ? e.displayName || e.name : "") ? zr(e) : "";
}
function Xp(e) {
  switch (e.tag) {
    case 5:
      return zr(e.type);
    case 16:
      return zr("Lazy");
    case 13:
      return zr("Suspense");
    case 19:
      return zr("SuspenseList");
    case 0:
    case 2:
    case 15:
      return e = ga(e.type, !1), e;
    case 11:
      return e = ga(e.type.render, !1), e;
    case 1:
      return e = ga(e.type, !0), e;
    default:
      return "";
  }
}
function rl(e) {
  if (e == null)
    return null;
  if (typeof e == "function")
    return e.displayName || e.name || null;
  if (typeof e == "string")
    return e;
  switch (e) {
    case Bn:
      return "Fragment";
    case Yn:
      return "Portal";
    case el:
      return "Profiler";
    case ds:
      return "StrictMode";
    case tl:
      return "Suspense";
    case nl:
      return "SuspenseList";
  }
  if (typeof e == "object")
    switch (e.$$typeof) {
      case Kc:
        return (e.displayName || "Context") + ".Consumer";
      case Gc:
        return (e._context.displayName || "Context") + ".Provider";
      case fs:
        var t = e.render;
        return e = e.displayName, e || (e = t.displayName || t.name || "", e = e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef"), e;
      case ps:
        return t = e.displayName || null, t !== null ? t : rl(e.type) || "Memo";
      case Gt:
        t = e._payload, e = e._init;
        try {
          return rl(e(t));
        } catch {
        }
    }
  return null;
}
function qp(e) {
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
      return rl(t);
    case 8:
      return t === ds ? "StrictMode" : "Mode";
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
function dn(e) {
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
function qc(e) {
  var t = e.type;
  return (e = e.nodeName) && e.toLowerCase() === "input" && (t === "checkbox" || t === "radio");
}
function Jp(e) {
  var t = qc(e) ? "checked" : "value", n = Object.getOwnPropertyDescriptor(e.constructor.prototype, t), r = "" + e[t];
  if (!e.hasOwnProperty(t) && typeof n < "u" && typeof n.get == "function" && typeof n.set == "function") {
    var i = n.get, o = n.set;
    return Object.defineProperty(e, t, { configurable: !0, get: function() {
      return i.call(this);
    }, set: function(a) {
      r = "" + a, o.call(this, a);
    } }), Object.defineProperty(e, t, { enumerable: n.enumerable }), { getValue: function() {
      return r;
    }, setValue: function(a) {
      r = "" + a;
    }, stopTracking: function() {
      e._valueTracker = null, delete e[t];
    } };
  }
}
function Ri(e) {
  e._valueTracker || (e._valueTracker = Jp(e));
}
function Jc(e) {
  if (!e)
    return !1;
  var t = e._valueTracker;
  if (!t)
    return !0;
  var n = t.getValue(), r = "";
  return e && (r = qc(e) ? e.checked ? "true" : "false" : e.value), e = r, e !== n ? (t.setValue(e), !0) : !1;
}
function uo(e) {
  if (e = e || (typeof document < "u" ? document : void 0), typeof e > "u")
    return null;
  try {
    return e.activeElement || e.body;
  } catch {
    return e.body;
  }
}
function il(e, t) {
  var n = t.checked;
  return oe({}, t, { defaultChecked: void 0, defaultValue: void 0, value: void 0, checked: n ?? e._wrapperState.initialChecked });
}
function cu(e, t) {
  var n = t.defaultValue == null ? "" : t.defaultValue, r = t.checked != null ? t.checked : t.defaultChecked;
  n = dn(t.value != null ? t.value : n), e._wrapperState = { initialChecked: r, initialValue: n, controlled: t.type === "checkbox" || t.type === "radio" ? t.checked != null : t.value != null };
}
function bc(e, t) {
  t = t.checked, t != null && cs(e, "checked", t, !1);
}
function ol(e, t) {
  bc(e, t);
  var n = dn(t.value), r = t.type;
  if (n != null)
    r === "number" ? (n === 0 && e.value === "" || e.value != n) && (e.value = "" + n) : e.value !== "" + n && (e.value = "" + n);
  else if (r === "submit" || r === "reset") {
    e.removeAttribute("value");
    return;
  }
  t.hasOwnProperty("value") ? al(e, t.type, n) : t.hasOwnProperty("defaultValue") && al(e, t.type, dn(t.defaultValue)), t.checked == null && t.defaultChecked != null && (e.defaultChecked = !!t.defaultChecked);
}
function du(e, t, n) {
  if (t.hasOwnProperty("value") || t.hasOwnProperty("defaultValue")) {
    var r = t.type;
    if (!(r !== "submit" && r !== "reset" || t.value !== void 0 && t.value !== null))
      return;
    t = "" + e._wrapperState.initialValue, n || t === e.value || (e.value = t), e.defaultValue = t;
  }
  n = e.name, n !== "" && (e.name = ""), e.defaultChecked = !!e._wrapperState.initialChecked, n !== "" && (e.name = n);
}
function al(e, t, n) {
  (t !== "number" || uo(e.ownerDocument) !== e) && (n == null ? e.defaultValue = "" + e._wrapperState.initialValue : e.defaultValue !== "" + n && (e.defaultValue = "" + n));
}
var jr = Array.isArray;
function rr(e, t, n, r) {
  if (e = e.options, t) {
    t = {};
    for (var i = 0; i < n.length; i++)
      t["$" + n[i]] = !0;
    for (n = 0; n < e.length; n++)
      i = t.hasOwnProperty("$" + e[n].value), e[n].selected !== i && (e[n].selected = i), i && r && (e[n].defaultSelected = !0);
  } else {
    for (n = "" + dn(n), t = null, i = 0; i < e.length; i++) {
      if (e[i].value === n) {
        e[i].selected = !0, r && (e[i].defaultSelected = !0);
        return;
      }
      t !== null || e[i].disabled || (t = e[i]);
    }
    t !== null && (t.selected = !0);
  }
}
function ll(e, t) {
  if (t.dangerouslySetInnerHTML != null)
    throw Error(w(91));
  return oe({}, t, { value: void 0, defaultValue: void 0, children: "" + e._wrapperState.initialValue });
}
function fu(e, t) {
  var n = t.value;
  if (n == null) {
    if (n = t.children, t = t.defaultValue, n != null) {
      if (t != null)
        throw Error(w(92));
      if (jr(n)) {
        if (1 < n.length)
          throw Error(w(93));
        n = n[0];
      }
      t = n;
    }
    t == null && (t = ""), n = t;
  }
  e._wrapperState = { initialValue: dn(n) };
}
function ed(e, t) {
  var n = dn(t.value), r = dn(t.defaultValue);
  n != null && (n = "" + n, n !== e.value && (e.value = n), t.defaultValue == null && e.defaultValue !== n && (e.defaultValue = n)), r != null && (e.defaultValue = "" + r);
}
function pu(e) {
  var t = e.textContent;
  t === e._wrapperState.initialValue && t !== "" && t !== null && (e.value = t);
}
function td(e) {
  switch (e) {
    case "svg":
      return "http://www.w3.org/2000/svg";
    case "math":
      return "http://www.w3.org/1998/Math/MathML";
    default:
      return "http://www.w3.org/1999/xhtml";
  }
}
function sl(e, t) {
  return e == null || e === "http://www.w3.org/1999/xhtml" ? td(t) : e === "http://www.w3.org/2000/svg" && t === "foreignObject" ? "http://www.w3.org/1999/xhtml" : e;
}
var Ii, nd = function(e) {
  return typeof MSApp < "u" && MSApp.execUnsafeLocalFunction ? function(t, n, r, i) {
    MSApp.execUnsafeLocalFunction(function() {
      return e(t, n, r, i);
    });
  } : e;
}(function(e, t) {
  if (e.namespaceURI !== "http://www.w3.org/2000/svg" || "innerHTML" in e)
    e.innerHTML = t;
  else {
    for (Ii = Ii || document.createElement("div"), Ii.innerHTML = "<svg>" + t.valueOf().toString() + "</svg>", t = Ii.firstChild; e.firstChild; )
      e.removeChild(e.firstChild);
    for (; t.firstChild; )
      e.appendChild(t.firstChild);
  }
});
function Kr(e, t) {
  if (t) {
    var n = e.firstChild;
    if (n && n === e.lastChild && n.nodeType === 3) {
      n.nodeValue = t;
      return;
    }
  }
  e.textContent = t;
}
var $r = {
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
}, bp = ["Webkit", "ms", "Moz", "O"];
Object.keys($r).forEach(function(e) {
  bp.forEach(function(t) {
    t = t + e.charAt(0).toUpperCase() + e.substring(1), $r[t] = $r[e];
  });
});
function rd(e, t, n) {
  return t == null || typeof t == "boolean" || t === "" ? "" : n || typeof t != "number" || t === 0 || $r.hasOwnProperty(e) && $r[e] ? ("" + t).trim() : t + "px";
}
function id(e, t) {
  e = e.style;
  for (var n in t)
    if (t.hasOwnProperty(n)) {
      var r = n.indexOf("--") === 0, i = rd(n, t[n], r);
      n === "float" && (n = "cssFloat"), r ? e.setProperty(n, i) : e[n] = i;
    }
}
var eh = oe({ menuitem: !0 }, { area: !0, base: !0, br: !0, col: !0, embed: !0, hr: !0, img: !0, input: !0, keygen: !0, link: !0, meta: !0, param: !0, source: !0, track: !0, wbr: !0 });
function ul(e, t) {
  if (t) {
    if (eh[e] && (t.children != null || t.dangerouslySetInnerHTML != null))
      throw Error(w(137, e));
    if (t.dangerouslySetInnerHTML != null) {
      if (t.children != null)
        throw Error(w(60));
      if (typeof t.dangerouslySetInnerHTML != "object" || !("__html" in t.dangerouslySetInnerHTML))
        throw Error(w(61));
    }
    if (t.style != null && typeof t.style != "object")
      throw Error(w(62));
  }
}
function cl(e, t) {
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
var dl = null;
function hs(e) {
  return e = e.target || e.srcElement || window, e.correspondingUseElement && (e = e.correspondingUseElement), e.nodeType === 3 ? e.parentNode : e;
}
var fl = null, ir = null, or = null;
function hu(e) {
  if (e = Oi(e)) {
    if (typeof fl != "function")
      throw Error(w(280));
    var t = e.stateNode;
    t && (t = Jo(t), fl(e.stateNode, e.type, t));
  }
}
function od(e) {
  ir ? or ? or.push(e) : or = [e] : ir = e;
}
function ad() {
  if (ir) {
    var e = ir, t = or;
    if (or = ir = null, hu(e), t)
      for (e = 0; e < t.length; e++)
        hu(t[e]);
  }
}
function ld(e, t) {
  return e(t);
}
function sd() {
}
var ya = !1;
function ud(e, t, n) {
  if (ya)
    return e(t, n);
  ya = !0;
  try {
    return ld(e, t, n);
  } finally {
    ya = !1, (ir !== null || or !== null) && (sd(), ad());
  }
}
function Xr(e, t) {
  var n = e.stateNode;
  if (n === null)
    return null;
  var r = Jo(n);
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
    throw Error(w(231, t, typeof n));
  return n;
}
var pl = !1;
if ($t)
  try {
    var Tr = {};
    Object.defineProperty(Tr, "passive", { get: function() {
      pl = !0;
    } }), window.addEventListener("test", Tr, Tr), window.removeEventListener("test", Tr, Tr);
  } catch {
    pl = !1;
  }
function th(e, t, n, r, i, o, a, l, s) {
  var u = Array.prototype.slice.call(arguments, 3);
  try {
    t.apply(n, u);
  } catch (f) {
    this.onError(f);
  }
}
var Fr = !1, co = null, fo = !1, hl = null, nh = { onError: function(e) {
  Fr = !0, co = e;
} };
function rh(e, t, n, r, i, o, a, l, s) {
  Fr = !1, co = null, th.apply(nh, arguments);
}
function ih(e, t, n, r, i, o, a, l, s) {
  if (rh.apply(this, arguments), Fr) {
    if (Fr) {
      var u = co;
      Fr = !1, co = null;
    } else
      throw Error(w(198));
    fo || (fo = !0, hl = u);
  }
}
function Fn(e) {
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
function cd(e) {
  if (e.tag === 13) {
    var t = e.memoizedState;
    if (t === null && (e = e.alternate, e !== null && (t = e.memoizedState)), t !== null)
      return t.dehydrated;
  }
  return null;
}
function mu(e) {
  if (Fn(e) !== e)
    throw Error(w(188));
}
function oh(e) {
  var t = e.alternate;
  if (!t) {
    if (t = Fn(e), t === null)
      throw Error(w(188));
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
          return mu(i), e;
        if (o === r)
          return mu(i), t;
        o = o.sibling;
      }
      throw Error(w(188));
    }
    if (n.return !== r.return)
      n = i, r = o;
    else {
      for (var a = !1, l = i.child; l; ) {
        if (l === n) {
          a = !0, n = i, r = o;
          break;
        }
        if (l === r) {
          a = !0, r = i, n = o;
          break;
        }
        l = l.sibling;
      }
      if (!a) {
        for (l = o.child; l; ) {
          if (l === n) {
            a = !0, n = o, r = i;
            break;
          }
          if (l === r) {
            a = !0, r = o, n = i;
            break;
          }
          l = l.sibling;
        }
        if (!a)
          throw Error(w(189));
      }
    }
    if (n.alternate !== r)
      throw Error(w(190));
  }
  if (n.tag !== 3)
    throw Error(w(188));
  return n.stateNode.current === n ? e : t;
}
function dd(e) {
  return e = oh(e), e !== null ? fd(e) : null;
}
function fd(e) {
  if (e.tag === 5 || e.tag === 6)
    return e;
  for (e = e.child; e !== null; ) {
    var t = fd(e);
    if (t !== null)
      return t;
    e = e.sibling;
  }
  return null;
}
var pd = Qe.unstable_scheduleCallback, vu = Qe.unstable_cancelCallback, ah = Qe.unstable_shouldYield, lh = Qe.unstable_requestPaint, se = Qe.unstable_now, sh = Qe.unstable_getCurrentPriorityLevel, ms = Qe.unstable_ImmediatePriority, hd = Qe.unstable_UserBlockingPriority, po = Qe.unstable_NormalPriority, uh = Qe.unstable_LowPriority, md = Qe.unstable_IdlePriority, Go = null, xt = null;
function ch(e) {
  if (xt && typeof xt.onCommitFiberRoot == "function")
    try {
      xt.onCommitFiberRoot(Go, e, void 0, (e.current.flags & 128) === 128);
    } catch {
    }
}
var ct = Math.clz32 ? Math.clz32 : ph, dh = Math.log, fh = Math.LN2;
function ph(e) {
  return e >>>= 0, e === 0 ? 32 : 31 - (dh(e) / fh | 0) | 0;
}
var zi = 64, ji = 4194304;
function Ur(e) {
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
function ho(e, t) {
  var n = e.pendingLanes;
  if (n === 0)
    return 0;
  var r = 0, i = e.suspendedLanes, o = e.pingedLanes, a = n & 268435455;
  if (a !== 0) {
    var l = a & ~i;
    l !== 0 ? r = Ur(l) : (o &= a, o !== 0 && (r = Ur(o)));
  } else
    a = n & ~i, a !== 0 ? r = Ur(a) : o !== 0 && (r = Ur(o));
  if (r === 0)
    return 0;
  if (t !== 0 && t !== r && !(t & i) && (i = r & -r, o = t & -t, i >= o || i === 16 && (o & 4194240) !== 0))
    return t;
  if (r & 4 && (r |= n & 16), t = e.entangledLanes, t !== 0)
    for (e = e.entanglements, t &= r; 0 < t; )
      n = 31 - ct(t), i = 1 << n, r |= e[n], t &= ~i;
  return r;
}
function hh(e, t) {
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
function mh(e, t) {
  for (var n = e.suspendedLanes, r = e.pingedLanes, i = e.expirationTimes, o = e.pendingLanes; 0 < o; ) {
    var a = 31 - ct(o), l = 1 << a, s = i[a];
    s === -1 ? (!(l & n) || l & r) && (i[a] = hh(l, t)) : s <= t && (e.expiredLanes |= l), o &= ~l;
  }
}
function ml(e) {
  return e = e.pendingLanes & -1073741825, e !== 0 ? e : e & 1073741824 ? 1073741824 : 0;
}
function vd() {
  var e = zi;
  return zi <<= 1, !(zi & 4194240) && (zi = 64), e;
}
function wa(e) {
  for (var t = [], n = 0; 31 > n; n++)
    t.push(e);
  return t;
}
function Ei(e, t, n) {
  e.pendingLanes |= t, t !== 536870912 && (e.suspendedLanes = 0, e.pingedLanes = 0), e = e.eventTimes, t = 31 - ct(t), e[t] = n;
}
function vh(e, t) {
  var n = e.pendingLanes & ~t;
  e.pendingLanes = t, e.suspendedLanes = 0, e.pingedLanes = 0, e.expiredLanes &= t, e.mutableReadLanes &= t, e.entangledLanes &= t, t = e.entanglements;
  var r = e.eventTimes;
  for (e = e.expirationTimes; 0 < n; ) {
    var i = 31 - ct(n), o = 1 << i;
    t[i] = 0, r[i] = -1, e[i] = -1, n &= ~o;
  }
}
function vs(e, t) {
  var n = e.entangledLanes |= t;
  for (e = e.entanglements; n; ) {
    var r = 31 - ct(n), i = 1 << r;
    i & t | e[r] & t && (e[r] |= t), n &= ~i;
  }
}
var B = 0;
function gd(e) {
  return e &= -e, 1 < e ? 4 < e ? e & 268435455 ? 16 : 536870912 : 4 : 1;
}
var yd, gs, wd, _d, kd, vl = !1, Ui = [], nn = null, rn = null, on = null, qr = /* @__PURE__ */ new Map(), Jr = /* @__PURE__ */ new Map(), Xt = [], gh = "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");
function gu(e, t) {
  switch (e) {
    case "focusin":
    case "focusout":
      nn = null;
      break;
    case "dragenter":
    case "dragleave":
      rn = null;
      break;
    case "mouseover":
    case "mouseout":
      on = null;
      break;
    case "pointerover":
    case "pointerout":
      qr.delete(t.pointerId);
      break;
    case "gotpointercapture":
    case "lostpointercapture":
      Jr.delete(t.pointerId);
  }
}
function Er(e, t, n, r, i, o) {
  return e === null || e.nativeEvent !== o ? (e = { blockedOn: t, domEventName: n, eventSystemFlags: r, nativeEvent: o, targetContainers: [i] }, t !== null && (t = Oi(t), t !== null && gs(t)), e) : (e.eventSystemFlags |= r, t = e.targetContainers, i !== null && t.indexOf(i) === -1 && t.push(i), e);
}
function yh(e, t, n, r, i) {
  switch (t) {
    case "focusin":
      return nn = Er(nn, e, t, n, r, i), !0;
    case "dragenter":
      return rn = Er(rn, e, t, n, r, i), !0;
    case "mouseover":
      return on = Er(on, e, t, n, r, i), !0;
    case "pointerover":
      var o = i.pointerId;
      return qr.set(o, Er(qr.get(o) || null, e, t, n, r, i)), !0;
    case "gotpointercapture":
      return o = i.pointerId, Jr.set(o, Er(Jr.get(o) || null, e, t, n, r, i)), !0;
  }
  return !1;
}
function Sd(e) {
  var t = Cn(e.target);
  if (t !== null) {
    var n = Fn(t);
    if (n !== null) {
      if (t = n.tag, t === 13) {
        if (t = cd(n), t !== null) {
          e.blockedOn = t, kd(e.priority, function() {
            wd(n);
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
function Ji(e) {
  if (e.blockedOn !== null)
    return !1;
  for (var t = e.targetContainers; 0 < t.length; ) {
    var n = gl(e.domEventName, e.eventSystemFlags, t[0], e.nativeEvent);
    if (n === null) {
      n = e.nativeEvent;
      var r = new n.constructor(n.type, n);
      dl = r, n.target.dispatchEvent(r), dl = null;
    } else
      return t = Oi(n), t !== null && gs(t), e.blockedOn = n, !1;
    t.shift();
  }
  return !0;
}
function yu(e, t, n) {
  Ji(e) && n.delete(t);
}
function wh() {
  vl = !1, nn !== null && Ji(nn) && (nn = null), rn !== null && Ji(rn) && (rn = null), on !== null && Ji(on) && (on = null), qr.forEach(yu), Jr.forEach(yu);
}
function Nr(e, t) {
  e.blockedOn === t && (e.blockedOn = null, vl || (vl = !0, Qe.unstable_scheduleCallback(Qe.unstable_NormalPriority, wh)));
}
function br(e) {
  function t(i) {
    return Nr(i, e);
  }
  if (0 < Ui.length) {
    Nr(Ui[0], e);
    for (var n = 1; n < Ui.length; n++) {
      var r = Ui[n];
      r.blockedOn === e && (r.blockedOn = null);
    }
  }
  for (nn !== null && Nr(nn, e), rn !== null && Nr(rn, e), on !== null && Nr(on, e), qr.forEach(t), Jr.forEach(t), n = 0; n < Xt.length; n++)
    r = Xt[n], r.blockedOn === e && (r.blockedOn = null);
  for (; 0 < Xt.length && (n = Xt[0], n.blockedOn === null); )
    Sd(n), n.blockedOn === null && Xt.shift();
}
var ar = Ht.ReactCurrentBatchConfig, mo = !0;
function _h(e, t, n, r) {
  var i = B, o = ar.transition;
  ar.transition = null;
  try {
    B = 1, ys(e, t, n, r);
  } finally {
    B = i, ar.transition = o;
  }
}
function kh(e, t, n, r) {
  var i = B, o = ar.transition;
  ar.transition = null;
  try {
    B = 4, ys(e, t, n, r);
  } finally {
    B = i, ar.transition = o;
  }
}
function ys(e, t, n, r) {
  if (mo) {
    var i = gl(e, t, n, r);
    if (i === null)
      Da(e, t, r, vo, n), gu(e, r);
    else if (yh(i, e, t, n, r))
      r.stopPropagation();
    else if (gu(e, r), t & 4 && -1 < gh.indexOf(e)) {
      for (; i !== null; ) {
        var o = Oi(i);
        if (o !== null && yd(o), o = gl(e, t, n, r), o === null && Da(e, t, r, vo, n), o === i)
          break;
        i = o;
      }
      i !== null && r.stopPropagation();
    } else
      Da(e, t, r, null, n);
  }
}
var vo = null;
function gl(e, t, n, r) {
  if (vo = null, e = hs(r), e = Cn(e), e !== null)
    if (t = Fn(e), t === null)
      e = null;
    else if (n = t.tag, n === 13) {
      if (e = cd(t), e !== null)
        return e;
      e = null;
    } else if (n === 3) {
      if (t.stateNode.current.memoizedState.isDehydrated)
        return t.tag === 3 ? t.stateNode.containerInfo : null;
      e = null;
    } else
      t !== e && (e = null);
  return vo = e, null;
}
function xd(e) {
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
      switch (sh()) {
        case ms:
          return 1;
        case hd:
          return 4;
        case po:
        case uh:
          return 16;
        case md:
          return 536870912;
        default:
          return 16;
      }
    default:
      return 16;
  }
}
var bt = null, ws = null, bi = null;
function Cd() {
  if (bi)
    return bi;
  var e, t = ws, n = t.length, r, i = "value" in bt ? bt.value : bt.textContent, o = i.length;
  for (e = 0; e < n && t[e] === i[e]; e++)
    ;
  var a = n - e;
  for (r = 1; r <= a && t[n - r] === i[o - r]; r++)
    ;
  return bi = i.slice(e, 1 < r ? 1 - r : void 0);
}
function eo(e) {
  var t = e.keyCode;
  return "charCode" in e ? (e = e.charCode, e === 0 && t === 13 && (e = 13)) : e = t, e === 10 && (e = 13), 32 <= e || e === 13 ? e : 0;
}
function Ai() {
  return !0;
}
function wu() {
  return !1;
}
function Ke(e) {
  function t(n, r, i, o, a) {
    this._reactName = n, this._targetInst = i, this.type = r, this.nativeEvent = o, this.target = a, this.currentTarget = null;
    for (var l in e)
      e.hasOwnProperty(l) && (n = e[l], this[l] = n ? n(o) : o[l]);
    return this.isDefaultPrevented = (o.defaultPrevented != null ? o.defaultPrevented : o.returnValue === !1) ? Ai : wu, this.isPropagationStopped = wu, this;
  }
  return oe(t.prototype, { preventDefault: function() {
    this.defaultPrevented = !0;
    var n = this.nativeEvent;
    n && (n.preventDefault ? n.preventDefault() : typeof n.returnValue != "unknown" && (n.returnValue = !1), this.isDefaultPrevented = Ai);
  }, stopPropagation: function() {
    var n = this.nativeEvent;
    n && (n.stopPropagation ? n.stopPropagation() : typeof n.cancelBubble != "unknown" && (n.cancelBubble = !0), this.isPropagationStopped = Ai);
  }, persist: function() {
  }, isPersistent: Ai }), t;
}
var kr = { eventPhase: 0, bubbles: 0, cancelable: 0, timeStamp: function(e) {
  return e.timeStamp || Date.now();
}, defaultPrevented: 0, isTrusted: 0 }, _s = Ke(kr), Ni = oe({}, kr, { view: 0, detail: 0 }), Sh = Ke(Ni), _a, ka, Or, Ko = oe({}, Ni, { screenX: 0, screenY: 0, clientX: 0, clientY: 0, pageX: 0, pageY: 0, ctrlKey: 0, shiftKey: 0, altKey: 0, metaKey: 0, getModifierState: ks, button: 0, buttons: 0, relatedTarget: function(e) {
  return e.relatedTarget === void 0 ? e.fromElement === e.srcElement ? e.toElement : e.fromElement : e.relatedTarget;
}, movementX: function(e) {
  return "movementX" in e ? e.movementX : (e !== Or && (Or && e.type === "mousemove" ? (_a = e.screenX - Or.screenX, ka = e.screenY - Or.screenY) : ka = _a = 0, Or = e), _a);
}, movementY: function(e) {
  return "movementY" in e ? e.movementY : ka;
} }), _u = Ke(Ko), xh = oe({}, Ko, { dataTransfer: 0 }), Ch = Ke(xh), Th = oe({}, Ni, { relatedTarget: 0 }), Sa = Ke(Th), Eh = oe({}, kr, { animationName: 0, elapsedTime: 0, pseudoElement: 0 }), Nh = Ke(Eh), Oh = oe({}, kr, { clipboardData: function(e) {
  return "clipboardData" in e ? e.clipboardData : window.clipboardData;
} }), Dh = Ke(Oh), Ph = oe({}, kr, { data: 0 }), ku = Ke(Ph), Mh = {
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
}, Lh = {
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
}, Rh = { Alt: "altKey", Control: "ctrlKey", Meta: "metaKey", Shift: "shiftKey" };
function Ih(e) {
  var t = this.nativeEvent;
  return t.getModifierState ? t.getModifierState(e) : (e = Rh[e]) ? !!t[e] : !1;
}
function ks() {
  return Ih;
}
var zh = oe({}, Ni, { key: function(e) {
  if (e.key) {
    var t = Mh[e.key] || e.key;
    if (t !== "Unidentified")
      return t;
  }
  return e.type === "keypress" ? (e = eo(e), e === 13 ? "Enter" : String.fromCharCode(e)) : e.type === "keydown" || e.type === "keyup" ? Lh[e.keyCode] || "Unidentified" : "";
}, code: 0, location: 0, ctrlKey: 0, shiftKey: 0, altKey: 0, metaKey: 0, repeat: 0, locale: 0, getModifierState: ks, charCode: function(e) {
  return e.type === "keypress" ? eo(e) : 0;
}, keyCode: function(e) {
  return e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0;
}, which: function(e) {
  return e.type === "keypress" ? eo(e) : e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0;
} }), jh = Ke(zh), Uh = oe({}, Ko, { pointerId: 0, width: 0, height: 0, pressure: 0, tangentialPressure: 0, tiltX: 0, tiltY: 0, twist: 0, pointerType: 0, isPrimary: 0 }), Su = Ke(Uh), Ah = oe({}, Ni, { touches: 0, targetTouches: 0, changedTouches: 0, altKey: 0, metaKey: 0, ctrlKey: 0, shiftKey: 0, getModifierState: ks }), $h = Ke(Ah), Fh = oe({}, kr, { propertyName: 0, elapsedTime: 0, pseudoElement: 0 }), Vh = Ke(Fh), Wh = oe({}, Ko, {
  deltaX: function(e) {
    return "deltaX" in e ? e.deltaX : "wheelDeltaX" in e ? -e.wheelDeltaX : 0;
  },
  deltaY: function(e) {
    return "deltaY" in e ? e.deltaY : "wheelDeltaY" in e ? -e.wheelDeltaY : "wheelDelta" in e ? -e.wheelDelta : 0;
  },
  deltaZ: 0,
  deltaMode: 0
}), Zh = Ke(Wh), Hh = [9, 13, 27, 32], Ss = $t && "CompositionEvent" in window, Vr = null;
$t && "documentMode" in document && (Vr = document.documentMode);
var Yh = $t && "TextEvent" in window && !Vr, Td = $t && (!Ss || Vr && 8 < Vr && 11 >= Vr), xu = " ", Cu = !1;
function Ed(e, t) {
  switch (e) {
    case "keyup":
      return Hh.indexOf(t.keyCode) !== -1;
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
function Nd(e) {
  return e = e.detail, typeof e == "object" && "data" in e ? e.data : null;
}
var Qn = !1;
function Bh(e, t) {
  switch (e) {
    case "compositionend":
      return Nd(t);
    case "keypress":
      return t.which !== 32 ? null : (Cu = !0, xu);
    case "textInput":
      return e = t.data, e === xu && Cu ? null : e;
    default:
      return null;
  }
}
function Qh(e, t) {
  if (Qn)
    return e === "compositionend" || !Ss && Ed(e, t) ? (e = Cd(), bi = ws = bt = null, Qn = !1, e) : null;
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
      return Td && t.locale !== "ko" ? null : t.data;
    default:
      return null;
  }
}
var Gh = { color: !0, date: !0, datetime: !0, "datetime-local": !0, email: !0, month: !0, number: !0, password: !0, range: !0, search: !0, tel: !0, text: !0, time: !0, url: !0, week: !0 };
function Tu(e) {
  var t = e && e.nodeName && e.nodeName.toLowerCase();
  return t === "input" ? !!Gh[e.type] : t === "textarea";
}
function Od(e, t, n, r) {
  od(r), t = go(t, "onChange"), 0 < t.length && (n = new _s("onChange", "change", null, n, r), e.push({ event: n, listeners: t }));
}
var Wr = null, ei = null;
function Kh(e) {
  $d(e, 0);
}
function Xo(e) {
  var t = Xn(e);
  if (Jc(t))
    return e;
}
function Xh(e, t) {
  if (e === "change")
    return t;
}
var Dd = !1;
if ($t) {
  var xa;
  if ($t) {
    var Ca = "oninput" in document;
    if (!Ca) {
      var Eu = document.createElement("div");
      Eu.setAttribute("oninput", "return;"), Ca = typeof Eu.oninput == "function";
    }
    xa = Ca;
  } else
    xa = !1;
  Dd = xa && (!document.documentMode || 9 < document.documentMode);
}
function Nu() {
  Wr && (Wr.detachEvent("onpropertychange", Pd), ei = Wr = null);
}
function Pd(e) {
  if (e.propertyName === "value" && Xo(ei)) {
    var t = [];
    Od(t, ei, e, hs(e)), ud(Kh, t);
  }
}
function qh(e, t, n) {
  e === "focusin" ? (Nu(), Wr = t, ei = n, Wr.attachEvent("onpropertychange", Pd)) : e === "focusout" && Nu();
}
function Jh(e) {
  if (e === "selectionchange" || e === "keyup" || e === "keydown")
    return Xo(ei);
}
function bh(e, t) {
  if (e === "click")
    return Xo(t);
}
function em(e, t) {
  if (e === "input" || e === "change")
    return Xo(t);
}
function tm(e, t) {
  return e === t && (e !== 0 || 1 / e === 1 / t) || e !== e && t !== t;
}
var ht = typeof Object.is == "function" ? Object.is : tm;
function ti(e, t) {
  if (ht(e, t))
    return !0;
  if (typeof e != "object" || e === null || typeof t != "object" || t === null)
    return !1;
  var n = Object.keys(e), r = Object.keys(t);
  if (n.length !== r.length)
    return !1;
  for (r = 0; r < n.length; r++) {
    var i = n[r];
    if (!ba.call(t, i) || !ht(e[i], t[i]))
      return !1;
  }
  return !0;
}
function Ou(e) {
  for (; e && e.firstChild; )
    e = e.firstChild;
  return e;
}
function Du(e, t) {
  var n = Ou(e);
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
    n = Ou(n);
  }
}
function Md(e, t) {
  return e && t ? e === t ? !0 : e && e.nodeType === 3 ? !1 : t && t.nodeType === 3 ? Md(e, t.parentNode) : "contains" in e ? e.contains(t) : e.compareDocumentPosition ? !!(e.compareDocumentPosition(t) & 16) : !1 : !1;
}
function Ld() {
  for (var e = window, t = uo(); t instanceof e.HTMLIFrameElement; ) {
    try {
      var n = typeof t.contentWindow.location.href == "string";
    } catch {
      n = !1;
    }
    if (n)
      e = t.contentWindow;
    else
      break;
    t = uo(e.document);
  }
  return t;
}
function xs(e) {
  var t = e && e.nodeName && e.nodeName.toLowerCase();
  return t && (t === "input" && (e.type === "text" || e.type === "search" || e.type === "tel" || e.type === "url" || e.type === "password") || t === "textarea" || e.contentEditable === "true");
}
function nm(e) {
  var t = Ld(), n = e.focusedElem, r = e.selectionRange;
  if (t !== n && n && n.ownerDocument && Md(n.ownerDocument.documentElement, n)) {
    if (r !== null && xs(n)) {
      if (t = r.start, e = r.end, e === void 0 && (e = t), "selectionStart" in n)
        n.selectionStart = t, n.selectionEnd = Math.min(e, n.value.length);
      else if (e = (t = n.ownerDocument || document) && t.defaultView || window, e.getSelection) {
        e = e.getSelection();
        var i = n.textContent.length, o = Math.min(r.start, i);
        r = r.end === void 0 ? o : Math.min(r.end, i), !e.extend && o > r && (i = r, r = o, o = i), i = Du(n, o);
        var a = Du(
          n,
          r
        );
        i && a && (e.rangeCount !== 1 || e.anchorNode !== i.node || e.anchorOffset !== i.offset || e.focusNode !== a.node || e.focusOffset !== a.offset) && (t = t.createRange(), t.setStart(i.node, i.offset), e.removeAllRanges(), o > r ? (e.addRange(t), e.extend(a.node, a.offset)) : (t.setEnd(a.node, a.offset), e.addRange(t)));
      }
    }
    for (t = [], e = n; e = e.parentNode; )
      e.nodeType === 1 && t.push({ element: e, left: e.scrollLeft, top: e.scrollTop });
    for (typeof n.focus == "function" && n.focus(), n = 0; n < t.length; n++)
      e = t[n], e.element.scrollLeft = e.left, e.element.scrollTop = e.top;
  }
}
var rm = $t && "documentMode" in document && 11 >= document.documentMode, Gn = null, yl = null, Zr = null, wl = !1;
function Pu(e, t, n) {
  var r = n.window === n ? n.document : n.nodeType === 9 ? n : n.ownerDocument;
  wl || Gn == null || Gn !== uo(r) || (r = Gn, "selectionStart" in r && xs(r) ? r = { start: r.selectionStart, end: r.selectionEnd } : (r = (r.ownerDocument && r.ownerDocument.defaultView || window).getSelection(), r = { anchorNode: r.anchorNode, anchorOffset: r.anchorOffset, focusNode: r.focusNode, focusOffset: r.focusOffset }), Zr && ti(Zr, r) || (Zr = r, r = go(yl, "onSelect"), 0 < r.length && (t = new _s("onSelect", "select", null, t, n), e.push({ event: t, listeners: r }), t.target = Gn)));
}
function $i(e, t) {
  var n = {};
  return n[e.toLowerCase()] = t.toLowerCase(), n["Webkit" + e] = "webkit" + t, n["Moz" + e] = "moz" + t, n;
}
var Kn = { animationend: $i("Animation", "AnimationEnd"), animationiteration: $i("Animation", "AnimationIteration"), animationstart: $i("Animation", "AnimationStart"), transitionend: $i("Transition", "TransitionEnd") }, Ta = {}, Rd = {};
$t && (Rd = document.createElement("div").style, "AnimationEvent" in window || (delete Kn.animationend.animation, delete Kn.animationiteration.animation, delete Kn.animationstart.animation), "TransitionEvent" in window || delete Kn.transitionend.transition);
function qo(e) {
  if (Ta[e])
    return Ta[e];
  if (!Kn[e])
    return e;
  var t = Kn[e], n;
  for (n in t)
    if (t.hasOwnProperty(n) && n in Rd)
      return Ta[e] = t[n];
  return e;
}
var Id = qo("animationend"), zd = qo("animationiteration"), jd = qo("animationstart"), Ud = qo("transitionend"), Ad = /* @__PURE__ */ new Map(), Mu = "abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");
function gn(e, t) {
  Ad.set(e, t), $n(t, [e]);
}
for (var Ea = 0; Ea < Mu.length; Ea++) {
  var Na = Mu[Ea], im = Na.toLowerCase(), om = Na[0].toUpperCase() + Na.slice(1);
  gn(im, "on" + om);
}
gn(Id, "onAnimationEnd");
gn(zd, "onAnimationIteration");
gn(jd, "onAnimationStart");
gn("dblclick", "onDoubleClick");
gn("focusin", "onFocus");
gn("focusout", "onBlur");
gn(Ud, "onTransitionEnd");
cr("onMouseEnter", ["mouseout", "mouseover"]);
cr("onMouseLeave", ["mouseout", "mouseover"]);
cr("onPointerEnter", ["pointerout", "pointerover"]);
cr("onPointerLeave", ["pointerout", "pointerover"]);
$n("onChange", "change click focusin focusout input keydown keyup selectionchange".split(" "));
$n("onSelect", "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));
$n("onBeforeInput", ["compositionend", "keypress", "textInput", "paste"]);
$n("onCompositionEnd", "compositionend focusout keydown keypress keyup mousedown".split(" "));
$n("onCompositionStart", "compositionstart focusout keydown keypress keyup mousedown".split(" "));
$n("onCompositionUpdate", "compositionupdate focusout keydown keypress keyup mousedown".split(" "));
var Ar = "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "), am = new Set("cancel close invalid load scroll toggle".split(" ").concat(Ar));
function Lu(e, t, n) {
  var r = e.type || "unknown-event";
  e.currentTarget = n, ih(r, t, void 0, e), e.currentTarget = null;
}
function $d(e, t) {
  t = (t & 4) !== 0;
  for (var n = 0; n < e.length; n++) {
    var r = e[n], i = r.event;
    r = r.listeners;
    e: {
      var o = void 0;
      if (t)
        for (var a = r.length - 1; 0 <= a; a--) {
          var l = r[a], s = l.instance, u = l.currentTarget;
          if (l = l.listener, s !== o && i.isPropagationStopped())
            break e;
          Lu(i, l, u), o = s;
        }
      else
        for (a = 0; a < r.length; a++) {
          if (l = r[a], s = l.instance, u = l.currentTarget, l = l.listener, s !== o && i.isPropagationStopped())
            break e;
          Lu(i, l, u), o = s;
        }
    }
  }
  if (fo)
    throw e = hl, fo = !1, hl = null, e;
}
function J(e, t) {
  var n = t[Cl];
  n === void 0 && (n = t[Cl] = /* @__PURE__ */ new Set());
  var r = e + "__bubble";
  n.has(r) || (Fd(t, e, 2, !1), n.add(r));
}
function Oa(e, t, n) {
  var r = 0;
  t && (r |= 4), Fd(n, e, r, t);
}
var Fi = "_reactListening" + Math.random().toString(36).slice(2);
function ni(e) {
  if (!e[Fi]) {
    e[Fi] = !0, Qc.forEach(function(n) {
      n !== "selectionchange" && (am.has(n) || Oa(n, !1, e), Oa(n, !0, e));
    });
    var t = e.nodeType === 9 ? e : e.ownerDocument;
    t === null || t[Fi] || (t[Fi] = !0, Oa("selectionchange", !1, t));
  }
}
function Fd(e, t, n, r) {
  switch (xd(t)) {
    case 1:
      var i = _h;
      break;
    case 4:
      i = kh;
      break;
    default:
      i = ys;
  }
  n = i.bind(null, t, n, e), i = void 0, !pl || t !== "touchstart" && t !== "touchmove" && t !== "wheel" || (i = !0), r ? i !== void 0 ? e.addEventListener(t, n, { capture: !0, passive: i }) : e.addEventListener(t, n, !0) : i !== void 0 ? e.addEventListener(t, n, { passive: i }) : e.addEventListener(t, n, !1);
}
function Da(e, t, n, r, i) {
  var o = r;
  if (!(t & 1) && !(t & 2) && r !== null)
    e:
      for (; ; ) {
        if (r === null)
          return;
        var a = r.tag;
        if (a === 3 || a === 4) {
          var l = r.stateNode.containerInfo;
          if (l === i || l.nodeType === 8 && l.parentNode === i)
            break;
          if (a === 4)
            for (a = r.return; a !== null; ) {
              var s = a.tag;
              if ((s === 3 || s === 4) && (s = a.stateNode.containerInfo, s === i || s.nodeType === 8 && s.parentNode === i))
                return;
              a = a.return;
            }
          for (; l !== null; ) {
            if (a = Cn(l), a === null)
              return;
            if (s = a.tag, s === 5 || s === 6) {
              r = o = a;
              continue e;
            }
            l = l.parentNode;
          }
        }
        r = r.return;
      }
  ud(function() {
    var u = o, f = hs(n), h = [];
    e: {
      var m = Ad.get(e);
      if (m !== void 0) {
        var v = _s, y = e;
        switch (e) {
          case "keypress":
            if (eo(n) === 0)
              break e;
          case "keydown":
          case "keyup":
            v = jh;
            break;
          case "focusin":
            y = "focus", v = Sa;
            break;
          case "focusout":
            y = "blur", v = Sa;
            break;
          case "beforeblur":
          case "afterblur":
            v = Sa;
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
            v = _u;
            break;
          case "drag":
          case "dragend":
          case "dragenter":
          case "dragexit":
          case "dragleave":
          case "dragover":
          case "dragstart":
          case "drop":
            v = Ch;
            break;
          case "touchcancel":
          case "touchend":
          case "touchmove":
          case "touchstart":
            v = $h;
            break;
          case Id:
          case zd:
          case jd:
            v = Nh;
            break;
          case Ud:
            v = Vh;
            break;
          case "scroll":
            v = Sh;
            break;
          case "wheel":
            v = Zh;
            break;
          case "copy":
          case "cut":
          case "paste":
            v = Dh;
            break;
          case "gotpointercapture":
          case "lostpointercapture":
          case "pointercancel":
          case "pointerdown":
          case "pointermove":
          case "pointerout":
          case "pointerover":
          case "pointerup":
            v = Su;
        }
        var _ = (t & 4) !== 0, R = !_ && e === "scroll", c = _ ? m !== null ? m + "Capture" : null : m;
        _ = [];
        for (var d = u, p; d !== null; ) {
          p = d;
          var g = p.stateNode;
          if (p.tag === 5 && g !== null && (p = g, c !== null && (g = Xr(d, c), g != null && _.push(ri(d, g, p)))), R)
            break;
          d = d.return;
        }
        0 < _.length && (m = new v(m, y, null, n, f), h.push({ event: m, listeners: _ }));
      }
    }
    if (!(t & 7)) {
      e: {
        if (m = e === "mouseover" || e === "pointerover", v = e === "mouseout" || e === "pointerout", m && n !== dl && (y = n.relatedTarget || n.fromElement) && (Cn(y) || y[Ft]))
          break e;
        if ((v || m) && (m = f.window === f ? f : (m = f.ownerDocument) ? m.defaultView || m.parentWindow : window, v ? (y = n.relatedTarget || n.toElement, v = u, y = y ? Cn(y) : null, y !== null && (R = Fn(y), y !== R || y.tag !== 5 && y.tag !== 6) && (y = null)) : (v = null, y = u), v !== y)) {
          if (_ = _u, g = "onMouseLeave", c = "onMouseEnter", d = "mouse", (e === "pointerout" || e === "pointerover") && (_ = Su, g = "onPointerLeave", c = "onPointerEnter", d = "pointer"), R = v == null ? m : Xn(v), p = y == null ? m : Xn(y), m = new _(g, d + "leave", v, n, f), m.target = R, m.relatedTarget = p, g = null, Cn(f) === u && (_ = new _(c, d + "enter", y, n, f), _.target = p, _.relatedTarget = R, g = _), R = g, v && y)
            t: {
              for (_ = v, c = y, d = 0, p = _; p; p = Wn(p))
                d++;
              for (p = 0, g = c; g; g = Wn(g))
                p++;
              for (; 0 < d - p; )
                _ = Wn(_), d--;
              for (; 0 < p - d; )
                c = Wn(c), p--;
              for (; d--; ) {
                if (_ === c || c !== null && _ === c.alternate)
                  break t;
                _ = Wn(_), c = Wn(c);
              }
              _ = null;
            }
          else
            _ = null;
          v !== null && Ru(h, m, v, _, !1), y !== null && R !== null && Ru(h, R, y, _, !0);
        }
      }
      e: {
        if (m = u ? Xn(u) : window, v = m.nodeName && m.nodeName.toLowerCase(), v === "select" || v === "input" && m.type === "file")
          var T = Xh;
        else if (Tu(m))
          if (Dd)
            T = em;
          else {
            T = Jh;
            var S = qh;
          }
        else
          (v = m.nodeName) && v.toLowerCase() === "input" && (m.type === "checkbox" || m.type === "radio") && (T = bh);
        if (T && (T = T(e, u))) {
          Od(h, T, n, f);
          break e;
        }
        S && S(e, m, u), e === "focusout" && (S = m._wrapperState) && S.controlled && m.type === "number" && al(m, "number", m.value);
      }
      switch (S = u ? Xn(u) : window, e) {
        case "focusin":
          (Tu(S) || S.contentEditable === "true") && (Gn = S, yl = u, Zr = null);
          break;
        case "focusout":
          Zr = yl = Gn = null;
          break;
        case "mousedown":
          wl = !0;
          break;
        case "contextmenu":
        case "mouseup":
        case "dragend":
          wl = !1, Pu(h, n, f);
          break;
        case "selectionchange":
          if (rm)
            break;
        case "keydown":
        case "keyup":
          Pu(h, n, f);
      }
      var x;
      if (Ss)
        e: {
          switch (e) {
            case "compositionstart":
              var C = "onCompositionStart";
              break e;
            case "compositionend":
              C = "onCompositionEnd";
              break e;
            case "compositionupdate":
              C = "onCompositionUpdate";
              break e;
          }
          C = void 0;
        }
      else
        Qn ? Ed(e, n) && (C = "onCompositionEnd") : e === "keydown" && n.keyCode === 229 && (C = "onCompositionStart");
      C && (Td && n.locale !== "ko" && (Qn || C !== "onCompositionStart" ? C === "onCompositionEnd" && Qn && (x = Cd()) : (bt = f, ws = "value" in bt ? bt.value : bt.textContent, Qn = !0)), S = go(u, C), 0 < S.length && (C = new ku(C, e, null, n, f), h.push({ event: C, listeners: S }), x ? C.data = x : (x = Nd(n), x !== null && (C.data = x)))), (x = Yh ? Bh(e, n) : Qh(e, n)) && (u = go(u, "onBeforeInput"), 0 < u.length && (f = new ku("onBeforeInput", "beforeinput", null, n, f), h.push({ event: f, listeners: u }), f.data = x));
    }
    $d(h, t);
  });
}
function ri(e, t, n) {
  return { instance: e, listener: t, currentTarget: n };
}
function go(e, t) {
  for (var n = t + "Capture", r = []; e !== null; ) {
    var i = e, o = i.stateNode;
    i.tag === 5 && o !== null && (i = o, o = Xr(e, n), o != null && r.unshift(ri(e, o, i)), o = Xr(e, t), o != null && r.push(ri(e, o, i))), e = e.return;
  }
  return r;
}
function Wn(e) {
  if (e === null)
    return null;
  do
    e = e.return;
  while (e && e.tag !== 5);
  return e || null;
}
function Ru(e, t, n, r, i) {
  for (var o = t._reactName, a = []; n !== null && n !== r; ) {
    var l = n, s = l.alternate, u = l.stateNode;
    if (s !== null && s === r)
      break;
    l.tag === 5 && u !== null && (l = u, i ? (s = Xr(n, o), s != null && a.unshift(ri(n, s, l))) : i || (s = Xr(n, o), s != null && a.push(ri(n, s, l)))), n = n.return;
  }
  a.length !== 0 && e.push({ event: t, listeners: a });
}
var lm = /\r\n?/g, sm = /\u0000|\uFFFD/g;
function Iu(e) {
  return (typeof e == "string" ? e : "" + e).replace(lm, `
`).replace(sm, "");
}
function Vi(e, t, n) {
  if (t = Iu(t), Iu(e) !== t && n)
    throw Error(w(425));
}
function yo() {
}
var _l = null, kl = null;
function Sl(e, t) {
  return e === "textarea" || e === "noscript" || typeof t.children == "string" || typeof t.children == "number" || typeof t.dangerouslySetInnerHTML == "object" && t.dangerouslySetInnerHTML !== null && t.dangerouslySetInnerHTML.__html != null;
}
var xl = typeof setTimeout == "function" ? setTimeout : void 0, um = typeof clearTimeout == "function" ? clearTimeout : void 0, zu = typeof Promise == "function" ? Promise : void 0, cm = typeof queueMicrotask == "function" ? queueMicrotask : typeof zu < "u" ? function(e) {
  return zu.resolve(null).then(e).catch(dm);
} : xl;
function dm(e) {
  setTimeout(function() {
    throw e;
  });
}
function Pa(e, t) {
  var n = t, r = 0;
  do {
    var i = n.nextSibling;
    if (e.removeChild(n), i && i.nodeType === 8)
      if (n = i.data, n === "/$") {
        if (r === 0) {
          e.removeChild(i), br(t);
          return;
        }
        r--;
      } else
        n !== "$" && n !== "$?" && n !== "$!" || r++;
    n = i;
  } while (n);
  br(t);
}
function an(e) {
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
function ju(e) {
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
var Sr = Math.random().toString(36).slice(2), kt = "__reactFiber$" + Sr, ii = "__reactProps$" + Sr, Ft = "__reactContainer$" + Sr, Cl = "__reactEvents$" + Sr, fm = "__reactListeners$" + Sr, pm = "__reactHandles$" + Sr;
function Cn(e) {
  var t = e[kt];
  if (t)
    return t;
  for (var n = e.parentNode; n; ) {
    if (t = n[Ft] || n[kt]) {
      if (n = t.alternate, t.child !== null || n !== null && n.child !== null)
        for (e = ju(e); e !== null; ) {
          if (n = e[kt])
            return n;
          e = ju(e);
        }
      return t;
    }
    e = n, n = e.parentNode;
  }
  return null;
}
function Oi(e) {
  return e = e[kt] || e[Ft], !e || e.tag !== 5 && e.tag !== 6 && e.tag !== 13 && e.tag !== 3 ? null : e;
}
function Xn(e) {
  if (e.tag === 5 || e.tag === 6)
    return e.stateNode;
  throw Error(w(33));
}
function Jo(e) {
  return e[ii] || null;
}
var Tl = [], qn = -1;
function yn(e) {
  return { current: e };
}
function b(e) {
  0 > qn || (e.current = Tl[qn], Tl[qn] = null, qn--);
}
function G(e, t) {
  qn++, Tl[qn] = e.current, e.current = t;
}
var fn = {}, Ee = yn(fn), Ve = yn(!1), Pn = fn;
function dr(e, t) {
  var n = e.type.contextTypes;
  if (!n)
    return fn;
  var r = e.stateNode;
  if (r && r.__reactInternalMemoizedUnmaskedChildContext === t)
    return r.__reactInternalMemoizedMaskedChildContext;
  var i = {}, o;
  for (o in n)
    i[o] = t[o];
  return r && (e = e.stateNode, e.__reactInternalMemoizedUnmaskedChildContext = t, e.__reactInternalMemoizedMaskedChildContext = i), i;
}
function We(e) {
  return e = e.childContextTypes, e != null;
}
function wo() {
  b(Ve), b(Ee);
}
function Uu(e, t, n) {
  if (Ee.current !== fn)
    throw Error(w(168));
  G(Ee, t), G(Ve, n);
}
function Vd(e, t, n) {
  var r = e.stateNode;
  if (t = t.childContextTypes, typeof r.getChildContext != "function")
    return n;
  r = r.getChildContext();
  for (var i in r)
    if (!(i in t))
      throw Error(w(108, qp(e) || "Unknown", i));
  return oe({}, n, r);
}
function _o(e) {
  return e = (e = e.stateNode) && e.__reactInternalMemoizedMergedChildContext || fn, Pn = Ee.current, G(Ee, e), G(Ve, Ve.current), !0;
}
function Au(e, t, n) {
  var r = e.stateNode;
  if (!r)
    throw Error(w(169));
  n ? (e = Vd(e, t, Pn), r.__reactInternalMemoizedMergedChildContext = e, b(Ve), b(Ee), G(Ee, e)) : b(Ve), G(Ve, n);
}
var Lt = null, bo = !1, Ma = !1;
function Wd(e) {
  Lt === null ? Lt = [e] : Lt.push(e);
}
function hm(e) {
  bo = !0, Wd(e);
}
function wn() {
  if (!Ma && Lt !== null) {
    Ma = !0;
    var e = 0, t = B;
    try {
      var n = Lt;
      for (B = 1; e < n.length; e++) {
        var r = n[e];
        do
          r = r(!0);
        while (r !== null);
      }
      Lt = null, bo = !1;
    } catch (i) {
      throw Lt !== null && (Lt = Lt.slice(e + 1)), pd(ms, wn), i;
    } finally {
      B = t, Ma = !1;
    }
  }
  return null;
}
var Jn = [], bn = 0, ko = null, So = 0, Je = [], be = 0, Mn = null, It = 1, zt = "";
function kn(e, t) {
  Jn[bn++] = So, Jn[bn++] = ko, ko = e, So = t;
}
function Zd(e, t, n) {
  Je[be++] = It, Je[be++] = zt, Je[be++] = Mn, Mn = e;
  var r = It;
  e = zt;
  var i = 32 - ct(r) - 1;
  r &= ~(1 << i), n += 1;
  var o = 32 - ct(t) + i;
  if (30 < o) {
    var a = i - i % 5;
    o = (r & (1 << a) - 1).toString(32), r >>= a, i -= a, It = 1 << 32 - ct(t) + i | n << i | r, zt = o + e;
  } else
    It = 1 << o | n << i | r, zt = e;
}
function Cs(e) {
  e.return !== null && (kn(e, 1), Zd(e, 1, 0));
}
function Ts(e) {
  for (; e === ko; )
    ko = Jn[--bn], Jn[bn] = null, So = Jn[--bn], Jn[bn] = null;
  for (; e === Mn; )
    Mn = Je[--be], Je[be] = null, zt = Je[--be], Je[be] = null, It = Je[--be], Je[be] = null;
}
var Be = null, Ye = null, ee = !1, st = null;
function Hd(e, t) {
  var n = et(5, null, null, 0);
  n.elementType = "DELETED", n.stateNode = t, n.return = e, t = e.deletions, t === null ? (e.deletions = [n], e.flags |= 16) : t.push(n);
}
function $u(e, t) {
  switch (e.tag) {
    case 5:
      var n = e.type;
      return t = t.nodeType !== 1 || n.toLowerCase() !== t.nodeName.toLowerCase() ? null : t, t !== null ? (e.stateNode = t, Be = e, Ye = an(t.firstChild), !0) : !1;
    case 6:
      return t = e.pendingProps === "" || t.nodeType !== 3 ? null : t, t !== null ? (e.stateNode = t, Be = e, Ye = null, !0) : !1;
    case 13:
      return t = t.nodeType !== 8 ? null : t, t !== null ? (n = Mn !== null ? { id: It, overflow: zt } : null, e.memoizedState = { dehydrated: t, treeContext: n, retryLane: 1073741824 }, n = et(18, null, null, 0), n.stateNode = t, n.return = e, e.child = n, Be = e, Ye = null, !0) : !1;
    default:
      return !1;
  }
}
function El(e) {
  return (e.mode & 1) !== 0 && (e.flags & 128) === 0;
}
function Nl(e) {
  if (ee) {
    var t = Ye;
    if (t) {
      var n = t;
      if (!$u(e, t)) {
        if (El(e))
          throw Error(w(418));
        t = an(n.nextSibling);
        var r = Be;
        t && $u(e, t) ? Hd(r, n) : (e.flags = e.flags & -4097 | 2, ee = !1, Be = e);
      }
    } else {
      if (El(e))
        throw Error(w(418));
      e.flags = e.flags & -4097 | 2, ee = !1, Be = e;
    }
  }
}
function Fu(e) {
  for (e = e.return; e !== null && e.tag !== 5 && e.tag !== 3 && e.tag !== 13; )
    e = e.return;
  Be = e;
}
function Wi(e) {
  if (e !== Be)
    return !1;
  if (!ee)
    return Fu(e), ee = !0, !1;
  var t;
  if ((t = e.tag !== 3) && !(t = e.tag !== 5) && (t = e.type, t = t !== "head" && t !== "body" && !Sl(e.type, e.memoizedProps)), t && (t = Ye)) {
    if (El(e))
      throw Yd(), Error(w(418));
    for (; t; )
      Hd(e, t), t = an(t.nextSibling);
  }
  if (Fu(e), e.tag === 13) {
    if (e = e.memoizedState, e = e !== null ? e.dehydrated : null, !e)
      throw Error(w(317));
    e: {
      for (e = e.nextSibling, t = 0; e; ) {
        if (e.nodeType === 8) {
          var n = e.data;
          if (n === "/$") {
            if (t === 0) {
              Ye = an(e.nextSibling);
              break e;
            }
            t--;
          } else
            n !== "$" && n !== "$!" && n !== "$?" || t++;
        }
        e = e.nextSibling;
      }
      Ye = null;
    }
  } else
    Ye = Be ? an(e.stateNode.nextSibling) : null;
  return !0;
}
function Yd() {
  for (var e = Ye; e; )
    e = an(e.nextSibling);
}
function fr() {
  Ye = Be = null, ee = !1;
}
function Es(e) {
  st === null ? st = [e] : st.push(e);
}
var mm = Ht.ReactCurrentBatchConfig;
function at(e, t) {
  if (e && e.defaultProps) {
    t = oe({}, t), e = e.defaultProps;
    for (var n in e)
      t[n] === void 0 && (t[n] = e[n]);
    return t;
  }
  return t;
}
var xo = yn(null), Co = null, er = null, Ns = null;
function Os() {
  Ns = er = Co = null;
}
function Ds(e) {
  var t = xo.current;
  b(xo), e._currentValue = t;
}
function Ol(e, t, n) {
  for (; e !== null; ) {
    var r = e.alternate;
    if ((e.childLanes & t) !== t ? (e.childLanes |= t, r !== null && (r.childLanes |= t)) : r !== null && (r.childLanes & t) !== t && (r.childLanes |= t), e === n)
      break;
    e = e.return;
  }
}
function lr(e, t) {
  Co = e, Ns = er = null, e = e.dependencies, e !== null && e.firstContext !== null && (e.lanes & t && (Fe = !0), e.firstContext = null);
}
function nt(e) {
  var t = e._currentValue;
  if (Ns !== e)
    if (e = { context: e, memoizedValue: t, next: null }, er === null) {
      if (Co === null)
        throw Error(w(308));
      er = e, Co.dependencies = { lanes: 0, firstContext: e };
    } else
      er = er.next = e;
  return t;
}
var Tn = null;
function Ps(e) {
  Tn === null ? Tn = [e] : Tn.push(e);
}
function Bd(e, t, n, r) {
  var i = t.interleaved;
  return i === null ? (n.next = n, Ps(t)) : (n.next = i.next, i.next = n), t.interleaved = n, Vt(e, r);
}
function Vt(e, t) {
  e.lanes |= t;
  var n = e.alternate;
  for (n !== null && (n.lanes |= t), n = e, e = e.return; e !== null; )
    e.childLanes |= t, n = e.alternate, n !== null && (n.childLanes |= t), n = e, e = e.return;
  return n.tag === 3 ? n.stateNode : null;
}
var Kt = !1;
function Ms(e) {
  e.updateQueue = { baseState: e.memoizedState, firstBaseUpdate: null, lastBaseUpdate: null, shared: { pending: null, interleaved: null, lanes: 0 }, effects: null };
}
function Qd(e, t) {
  e = e.updateQueue, t.updateQueue === e && (t.updateQueue = { baseState: e.baseState, firstBaseUpdate: e.firstBaseUpdate, lastBaseUpdate: e.lastBaseUpdate, shared: e.shared, effects: e.effects });
}
function Ut(e, t) {
  return { eventTime: e, lane: t, tag: 0, payload: null, callback: null, next: null };
}
function ln(e, t, n) {
  var r = e.updateQueue;
  if (r === null)
    return null;
  if (r = r.shared, F & 2) {
    var i = r.pending;
    return i === null ? t.next = t : (t.next = i.next, i.next = t), r.pending = t, Vt(e, n);
  }
  return i = r.interleaved, i === null ? (t.next = t, Ps(r)) : (t.next = i.next, i.next = t), r.interleaved = t, Vt(e, n);
}
function to(e, t, n) {
  if (t = t.updateQueue, t !== null && (t = t.shared, (n & 4194240) !== 0)) {
    var r = t.lanes;
    r &= e.pendingLanes, n |= r, t.lanes = n, vs(e, n);
  }
}
function Vu(e, t) {
  var n = e.updateQueue, r = e.alternate;
  if (r !== null && (r = r.updateQueue, n === r)) {
    var i = null, o = null;
    if (n = n.firstBaseUpdate, n !== null) {
      do {
        var a = { eventTime: n.eventTime, lane: n.lane, tag: n.tag, payload: n.payload, callback: n.callback, next: null };
        o === null ? i = o = a : o = o.next = a, n = n.next;
      } while (n !== null);
      o === null ? i = o = t : o = o.next = t;
    } else
      i = o = t;
    n = { baseState: r.baseState, firstBaseUpdate: i, lastBaseUpdate: o, shared: r.shared, effects: r.effects }, e.updateQueue = n;
    return;
  }
  e = n.lastBaseUpdate, e === null ? n.firstBaseUpdate = t : e.next = t, n.lastBaseUpdate = t;
}
function To(e, t, n, r) {
  var i = e.updateQueue;
  Kt = !1;
  var o = i.firstBaseUpdate, a = i.lastBaseUpdate, l = i.shared.pending;
  if (l !== null) {
    i.shared.pending = null;
    var s = l, u = s.next;
    s.next = null, a === null ? o = u : a.next = u, a = s;
    var f = e.alternate;
    f !== null && (f = f.updateQueue, l = f.lastBaseUpdate, l !== a && (l === null ? f.firstBaseUpdate = u : l.next = u, f.lastBaseUpdate = s));
  }
  if (o !== null) {
    var h = i.baseState;
    a = 0, f = u = s = null, l = o;
    do {
      var m = l.lane, v = l.eventTime;
      if ((r & m) === m) {
        f !== null && (f = f.next = {
          eventTime: v,
          lane: 0,
          tag: l.tag,
          payload: l.payload,
          callback: l.callback,
          next: null
        });
        e: {
          var y = e, _ = l;
          switch (m = t, v = n, _.tag) {
            case 1:
              if (y = _.payload, typeof y == "function") {
                h = y.call(v, h, m);
                break e;
              }
              h = y;
              break e;
            case 3:
              y.flags = y.flags & -65537 | 128;
            case 0:
              if (y = _.payload, m = typeof y == "function" ? y.call(v, h, m) : y, m == null)
                break e;
              h = oe({}, h, m);
              break e;
            case 2:
              Kt = !0;
          }
        }
        l.callback !== null && l.lane !== 0 && (e.flags |= 64, m = i.effects, m === null ? i.effects = [l] : m.push(l));
      } else
        v = { eventTime: v, lane: m, tag: l.tag, payload: l.payload, callback: l.callback, next: null }, f === null ? (u = f = v, s = h) : f = f.next = v, a |= m;
      if (l = l.next, l === null) {
        if (l = i.shared.pending, l === null)
          break;
        m = l, l = m.next, m.next = null, i.lastBaseUpdate = m, i.shared.pending = null;
      }
    } while (!0);
    if (f === null && (s = h), i.baseState = s, i.firstBaseUpdate = u, i.lastBaseUpdate = f, t = i.shared.interleaved, t !== null) {
      i = t;
      do
        a |= i.lane, i = i.next;
      while (i !== t);
    } else
      o === null && (i.shared.lanes = 0);
    Rn |= a, e.lanes = a, e.memoizedState = h;
  }
}
function Wu(e, t, n) {
  if (e = t.effects, t.effects = null, e !== null)
    for (t = 0; t < e.length; t++) {
      var r = e[t], i = r.callback;
      if (i !== null) {
        if (r.callback = null, r = n, typeof i != "function")
          throw Error(w(191, i));
        i.call(r);
      }
    }
}
var Gd = new Bc.Component().refs;
function Dl(e, t, n, r) {
  t = e.memoizedState, n = n(r, t), n = n == null ? t : oe({}, t, n), e.memoizedState = n, e.lanes === 0 && (e.updateQueue.baseState = n);
}
var ea = { isMounted: function(e) {
  return (e = e._reactInternals) ? Fn(e) === e : !1;
}, enqueueSetState: function(e, t, n) {
  e = e._reactInternals;
  var r = Re(), i = un(e), o = Ut(r, i);
  o.payload = t, n != null && (o.callback = n), t = ln(e, o, i), t !== null && (dt(t, e, i, r), to(t, e, i));
}, enqueueReplaceState: function(e, t, n) {
  e = e._reactInternals;
  var r = Re(), i = un(e), o = Ut(r, i);
  o.tag = 1, o.payload = t, n != null && (o.callback = n), t = ln(e, o, i), t !== null && (dt(t, e, i, r), to(t, e, i));
}, enqueueForceUpdate: function(e, t) {
  e = e._reactInternals;
  var n = Re(), r = un(e), i = Ut(n, r);
  i.tag = 2, t != null && (i.callback = t), t = ln(e, i, r), t !== null && (dt(t, e, r, n), to(t, e, r));
} };
function Zu(e, t, n, r, i, o, a) {
  return e = e.stateNode, typeof e.shouldComponentUpdate == "function" ? e.shouldComponentUpdate(r, o, a) : t.prototype && t.prototype.isPureReactComponent ? !ti(n, r) || !ti(i, o) : !0;
}
function Kd(e, t, n) {
  var r = !1, i = fn, o = t.contextType;
  return typeof o == "object" && o !== null ? o = nt(o) : (i = We(t) ? Pn : Ee.current, r = t.contextTypes, o = (r = r != null) ? dr(e, i) : fn), t = new t(n, o), e.memoizedState = t.state !== null && t.state !== void 0 ? t.state : null, t.updater = ea, e.stateNode = t, t._reactInternals = e, r && (e = e.stateNode, e.__reactInternalMemoizedUnmaskedChildContext = i, e.__reactInternalMemoizedMaskedChildContext = o), t;
}
function Hu(e, t, n, r) {
  e = t.state, typeof t.componentWillReceiveProps == "function" && t.componentWillReceiveProps(n, r), typeof t.UNSAFE_componentWillReceiveProps == "function" && t.UNSAFE_componentWillReceiveProps(n, r), t.state !== e && ea.enqueueReplaceState(t, t.state, null);
}
function Pl(e, t, n, r) {
  var i = e.stateNode;
  i.props = n, i.state = e.memoizedState, i.refs = Gd, Ms(e);
  var o = t.contextType;
  typeof o == "object" && o !== null ? i.context = nt(o) : (o = We(t) ? Pn : Ee.current, i.context = dr(e, o)), i.state = e.memoizedState, o = t.getDerivedStateFromProps, typeof o == "function" && (Dl(e, t, o, n), i.state = e.memoizedState), typeof t.getDerivedStateFromProps == "function" || typeof i.getSnapshotBeforeUpdate == "function" || typeof i.UNSAFE_componentWillMount != "function" && typeof i.componentWillMount != "function" || (t = i.state, typeof i.componentWillMount == "function" && i.componentWillMount(), typeof i.UNSAFE_componentWillMount == "function" && i.UNSAFE_componentWillMount(), t !== i.state && ea.enqueueReplaceState(i, i.state, null), To(e, n, i, r), i.state = e.memoizedState), typeof i.componentDidMount == "function" && (e.flags |= 4194308);
}
function Dr(e, t, n) {
  if (e = n.ref, e !== null && typeof e != "function" && typeof e != "object") {
    if (n._owner) {
      if (n = n._owner, n) {
        if (n.tag !== 1)
          throw Error(w(309));
        var r = n.stateNode;
      }
      if (!r)
        throw Error(w(147, e));
      var i = r, o = "" + e;
      return t !== null && t.ref !== null && typeof t.ref == "function" && t.ref._stringRef === o ? t.ref : (t = function(a) {
        var l = i.refs;
        l === Gd && (l = i.refs = {}), a === null ? delete l[o] : l[o] = a;
      }, t._stringRef = o, t);
    }
    if (typeof e != "string")
      throw Error(w(284));
    if (!n._owner)
      throw Error(w(290, e));
  }
  return e;
}
function Zi(e, t) {
  throw e = Object.prototype.toString.call(t), Error(w(31, e === "[object Object]" ? "object with keys {" + Object.keys(t).join(", ") + "}" : e));
}
function Yu(e) {
  var t = e._init;
  return t(e._payload);
}
function Xd(e) {
  function t(c, d) {
    if (e) {
      var p = c.deletions;
      p === null ? (c.deletions = [d], c.flags |= 16) : p.push(d);
    }
  }
  function n(c, d) {
    if (!e)
      return null;
    for (; d !== null; )
      t(c, d), d = d.sibling;
    return null;
  }
  function r(c, d) {
    for (c = /* @__PURE__ */ new Map(); d !== null; )
      d.key !== null ? c.set(d.key, d) : c.set(d.index, d), d = d.sibling;
    return c;
  }
  function i(c, d) {
    return c = cn(c, d), c.index = 0, c.sibling = null, c;
  }
  function o(c, d, p) {
    return c.index = p, e ? (p = c.alternate, p !== null ? (p = p.index, p < d ? (c.flags |= 2, d) : p) : (c.flags |= 2, d)) : (c.flags |= 1048576, d);
  }
  function a(c) {
    return e && c.alternate === null && (c.flags |= 2), c;
  }
  function l(c, d, p, g) {
    return d === null || d.tag !== 6 ? (d = Aa(p, c.mode, g), d.return = c, d) : (d = i(d, p), d.return = c, d);
  }
  function s(c, d, p, g) {
    var T = p.type;
    return T === Bn ? f(c, d, p.props.children, g, p.key) : d !== null && (d.elementType === T || typeof T == "object" && T !== null && T.$$typeof === Gt && Yu(T) === d.type) ? (g = i(d, p.props), g.ref = Dr(c, d, p), g.return = c, g) : (g = lo(p.type, p.key, p.props, null, c.mode, g), g.ref = Dr(c, d, p), g.return = c, g);
  }
  function u(c, d, p, g) {
    return d === null || d.tag !== 4 || d.stateNode.containerInfo !== p.containerInfo || d.stateNode.implementation !== p.implementation ? (d = $a(p, c.mode, g), d.return = c, d) : (d = i(d, p.children || []), d.return = c, d);
  }
  function f(c, d, p, g, T) {
    return d === null || d.tag !== 7 ? (d = On(p, c.mode, g, T), d.return = c, d) : (d = i(d, p), d.return = c, d);
  }
  function h(c, d, p) {
    if (typeof d == "string" && d !== "" || typeof d == "number")
      return d = Aa("" + d, c.mode, p), d.return = c, d;
    if (typeof d == "object" && d !== null) {
      switch (d.$$typeof) {
        case Li:
          return p = lo(d.type, d.key, d.props, null, c.mode, p), p.ref = Dr(c, null, d), p.return = c, p;
        case Yn:
          return d = $a(d, c.mode, p), d.return = c, d;
        case Gt:
          var g = d._init;
          return h(c, g(d._payload), p);
      }
      if (jr(d) || Cr(d))
        return d = On(d, c.mode, p, null), d.return = c, d;
      Zi(c, d);
    }
    return null;
  }
  function m(c, d, p, g) {
    var T = d !== null ? d.key : null;
    if (typeof p == "string" && p !== "" || typeof p == "number")
      return T !== null ? null : l(c, d, "" + p, g);
    if (typeof p == "object" && p !== null) {
      switch (p.$$typeof) {
        case Li:
          return p.key === T ? s(c, d, p, g) : null;
        case Yn:
          return p.key === T ? u(c, d, p, g) : null;
        case Gt:
          return T = p._init, m(
            c,
            d,
            T(p._payload),
            g
          );
      }
      if (jr(p) || Cr(p))
        return T !== null ? null : f(c, d, p, g, null);
      Zi(c, p);
    }
    return null;
  }
  function v(c, d, p, g, T) {
    if (typeof g == "string" && g !== "" || typeof g == "number")
      return c = c.get(p) || null, l(d, c, "" + g, T);
    if (typeof g == "object" && g !== null) {
      switch (g.$$typeof) {
        case Li:
          return c = c.get(g.key === null ? p : g.key) || null, s(d, c, g, T);
        case Yn:
          return c = c.get(g.key === null ? p : g.key) || null, u(d, c, g, T);
        case Gt:
          var S = g._init;
          return v(c, d, p, S(g._payload), T);
      }
      if (jr(g) || Cr(g))
        return c = c.get(p) || null, f(d, c, g, T, null);
      Zi(d, g);
    }
    return null;
  }
  function y(c, d, p, g) {
    for (var T = null, S = null, x = d, C = d = 0, V = null; x !== null && C < p.length; C++) {
      x.index > C ? (V = x, x = null) : V = x.sibling;
      var M = m(c, x, p[C], g);
      if (M === null) {
        x === null && (x = V);
        break;
      }
      e && x && M.alternate === null && t(c, x), d = o(M, d, C), S === null ? T = M : S.sibling = M, S = M, x = V;
    }
    if (C === p.length)
      return n(c, x), ee && kn(c, C), T;
    if (x === null) {
      for (; C < p.length; C++)
        x = h(c, p[C], g), x !== null && (d = o(x, d, C), S === null ? T = x : S.sibling = x, S = x);
      return ee && kn(c, C), T;
    }
    for (x = r(c, x); C < p.length; C++)
      V = v(x, c, C, p[C], g), V !== null && (e && V.alternate !== null && x.delete(V.key === null ? C : V.key), d = o(V, d, C), S === null ? T = V : S.sibling = V, S = V);
    return e && x.forEach(function(ue) {
      return t(c, ue);
    }), ee && kn(c, C), T;
  }
  function _(c, d, p, g) {
    var T = Cr(p);
    if (typeof T != "function")
      throw Error(w(150));
    if (p = T.call(p), p == null)
      throw Error(w(151));
    for (var S = T = null, x = d, C = d = 0, V = null, M = p.next(); x !== null && !M.done; C++, M = p.next()) {
      x.index > C ? (V = x, x = null) : V = x.sibling;
      var ue = m(c, x, M.value, g);
      if (ue === null) {
        x === null && (x = V);
        break;
      }
      e && x && ue.alternate === null && t(c, x), d = o(ue, d, C), S === null ? T = ue : S.sibling = ue, S = ue, x = V;
    }
    if (M.done)
      return n(
        c,
        x
      ), ee && kn(c, C), T;
    if (x === null) {
      for (; !M.done; C++, M = p.next())
        M = h(c, M.value, g), M !== null && (d = o(M, d, C), S === null ? T = M : S.sibling = M, S = M);
      return ee && kn(c, C), T;
    }
    for (x = r(c, x); !M.done; C++, M = p.next())
      M = v(x, c, C, M.value, g), M !== null && (e && M.alternate !== null && x.delete(M.key === null ? C : M.key), d = o(M, d, C), S === null ? T = M : S.sibling = M, S = M);
    return e && x.forEach(function(Xe) {
      return t(c, Xe);
    }), ee && kn(c, C), T;
  }
  function R(c, d, p, g) {
    if (typeof p == "object" && p !== null && p.type === Bn && p.key === null && (p = p.props.children), typeof p == "object" && p !== null) {
      switch (p.$$typeof) {
        case Li:
          e: {
            for (var T = p.key, S = d; S !== null; ) {
              if (S.key === T) {
                if (T = p.type, T === Bn) {
                  if (S.tag === 7) {
                    n(c, S.sibling), d = i(S, p.props.children), d.return = c, c = d;
                    break e;
                  }
                } else if (S.elementType === T || typeof T == "object" && T !== null && T.$$typeof === Gt && Yu(T) === S.type) {
                  n(c, S.sibling), d = i(S, p.props), d.ref = Dr(c, S, p), d.return = c, c = d;
                  break e;
                }
                n(c, S);
                break;
              } else
                t(c, S);
              S = S.sibling;
            }
            p.type === Bn ? (d = On(p.props.children, c.mode, g, p.key), d.return = c, c = d) : (g = lo(p.type, p.key, p.props, null, c.mode, g), g.ref = Dr(c, d, p), g.return = c, c = g);
          }
          return a(c);
        case Yn:
          e: {
            for (S = p.key; d !== null; ) {
              if (d.key === S)
                if (d.tag === 4 && d.stateNode.containerInfo === p.containerInfo && d.stateNode.implementation === p.implementation) {
                  n(c, d.sibling), d = i(d, p.children || []), d.return = c, c = d;
                  break e;
                } else {
                  n(c, d);
                  break;
                }
              else
                t(c, d);
              d = d.sibling;
            }
            d = $a(p, c.mode, g), d.return = c, c = d;
          }
          return a(c);
        case Gt:
          return S = p._init, R(c, d, S(p._payload), g);
      }
      if (jr(p))
        return y(c, d, p, g);
      if (Cr(p))
        return _(c, d, p, g);
      Zi(c, p);
    }
    return typeof p == "string" && p !== "" || typeof p == "number" ? (p = "" + p, d !== null && d.tag === 6 ? (n(c, d.sibling), d = i(d, p), d.return = c, c = d) : (n(c, d), d = Aa(p, c.mode, g), d.return = c, c = d), a(c)) : n(c, d);
  }
  return R;
}
var pr = Xd(!0), qd = Xd(!1), Di = {}, Ct = yn(Di), oi = yn(Di), ai = yn(Di);
function En(e) {
  if (e === Di)
    throw Error(w(174));
  return e;
}
function Ls(e, t) {
  switch (G(ai, t), G(oi, e), G(Ct, Di), e = t.nodeType, e) {
    case 9:
    case 11:
      t = (t = t.documentElement) ? t.namespaceURI : sl(null, "");
      break;
    default:
      e = e === 8 ? t.parentNode : t, t = e.namespaceURI || null, e = e.tagName, t = sl(t, e);
  }
  b(Ct), G(Ct, t);
}
function hr() {
  b(Ct), b(oi), b(ai);
}
function Jd(e) {
  En(ai.current);
  var t = En(Ct.current), n = sl(t, e.type);
  t !== n && (G(oi, e), G(Ct, n));
}
function Rs(e) {
  oi.current === e && (b(Ct), b(oi));
}
var re = yn(0);
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
var La = [];
function Is() {
  for (var e = 0; e < La.length; e++)
    La[e]._workInProgressVersionPrimary = null;
  La.length = 0;
}
var no = Ht.ReactCurrentDispatcher, Ra = Ht.ReactCurrentBatchConfig, Ln = 0, ie = null, pe = null, me = null, No = !1, Hr = !1, li = 0, vm = 0;
function xe() {
  throw Error(w(321));
}
function zs(e, t) {
  if (t === null)
    return !1;
  for (var n = 0; n < t.length && n < e.length; n++)
    if (!ht(e[n], t[n]))
      return !1;
  return !0;
}
function js(e, t, n, r, i, o) {
  if (Ln = o, ie = t, t.memoizedState = null, t.updateQueue = null, t.lanes = 0, no.current = e === null || e.memoizedState === null ? _m : km, e = n(r, i), Hr) {
    o = 0;
    do {
      if (Hr = !1, li = 0, 25 <= o)
        throw Error(w(301));
      o += 1, me = pe = null, t.updateQueue = null, no.current = Sm, e = n(r, i);
    } while (Hr);
  }
  if (no.current = Oo, t = pe !== null && pe.next !== null, Ln = 0, me = pe = ie = null, No = !1, t)
    throw Error(w(300));
  return e;
}
function Us() {
  var e = li !== 0;
  return li = 0, e;
}
function _t() {
  var e = { memoizedState: null, baseState: null, baseQueue: null, queue: null, next: null };
  return me === null ? ie.memoizedState = me = e : me = me.next = e, me;
}
function rt() {
  if (pe === null) {
    var e = ie.alternate;
    e = e !== null ? e.memoizedState : null;
  } else
    e = pe.next;
  var t = me === null ? ie.memoizedState : me.next;
  if (t !== null)
    me = t, pe = e;
  else {
    if (e === null)
      throw Error(w(310));
    pe = e, e = { memoizedState: pe.memoizedState, baseState: pe.baseState, baseQueue: pe.baseQueue, queue: pe.queue, next: null }, me === null ? ie.memoizedState = me = e : me = me.next = e;
  }
  return me;
}
function si(e, t) {
  return typeof t == "function" ? t(e) : t;
}
function Ia(e) {
  var t = rt(), n = t.queue;
  if (n === null)
    throw Error(w(311));
  n.lastRenderedReducer = e;
  var r = pe, i = r.baseQueue, o = n.pending;
  if (o !== null) {
    if (i !== null) {
      var a = i.next;
      i.next = o.next, o.next = a;
    }
    r.baseQueue = i = o, n.pending = null;
  }
  if (i !== null) {
    o = i.next, r = r.baseState;
    var l = a = null, s = null, u = o;
    do {
      var f = u.lane;
      if ((Ln & f) === f)
        s !== null && (s = s.next = { lane: 0, action: u.action, hasEagerState: u.hasEagerState, eagerState: u.eagerState, next: null }), r = u.hasEagerState ? u.eagerState : e(r, u.action);
      else {
        var h = {
          lane: f,
          action: u.action,
          hasEagerState: u.hasEagerState,
          eagerState: u.eagerState,
          next: null
        };
        s === null ? (l = s = h, a = r) : s = s.next = h, ie.lanes |= f, Rn |= f;
      }
      u = u.next;
    } while (u !== null && u !== o);
    s === null ? a = r : s.next = l, ht(r, t.memoizedState) || (Fe = !0), t.memoizedState = r, t.baseState = a, t.baseQueue = s, n.lastRenderedState = r;
  }
  if (e = n.interleaved, e !== null) {
    i = e;
    do
      o = i.lane, ie.lanes |= o, Rn |= o, i = i.next;
    while (i !== e);
  } else
    i === null && (n.lanes = 0);
  return [t.memoizedState, n.dispatch];
}
function za(e) {
  var t = rt(), n = t.queue;
  if (n === null)
    throw Error(w(311));
  n.lastRenderedReducer = e;
  var r = n.dispatch, i = n.pending, o = t.memoizedState;
  if (i !== null) {
    n.pending = null;
    var a = i = i.next;
    do
      o = e(o, a.action), a = a.next;
    while (a !== i);
    ht(o, t.memoizedState) || (Fe = !0), t.memoizedState = o, t.baseQueue === null && (t.baseState = o), n.lastRenderedState = o;
  }
  return [o, r];
}
function bd() {
}
function ef(e, t) {
  var n = ie, r = rt(), i = t(), o = !ht(r.memoizedState, i);
  if (o && (r.memoizedState = i, Fe = !0), r = r.queue, As(rf.bind(null, n, r, e), [e]), r.getSnapshot !== t || o || me !== null && me.memoizedState.tag & 1) {
    if (n.flags |= 2048, ui(9, nf.bind(null, n, r, i, t), void 0, null), ve === null)
      throw Error(w(349));
    Ln & 30 || tf(n, t, i);
  }
  return i;
}
function tf(e, t, n) {
  e.flags |= 16384, e = { getSnapshot: t, value: n }, t = ie.updateQueue, t === null ? (t = { lastEffect: null, stores: null }, ie.updateQueue = t, t.stores = [e]) : (n = t.stores, n === null ? t.stores = [e] : n.push(e));
}
function nf(e, t, n, r) {
  t.value = n, t.getSnapshot = r, of(t) && af(e);
}
function rf(e, t, n) {
  return n(function() {
    of(t) && af(e);
  });
}
function of(e) {
  var t = e.getSnapshot;
  e = e.value;
  try {
    var n = t();
    return !ht(e, n);
  } catch {
    return !0;
  }
}
function af(e) {
  var t = Vt(e, 1);
  t !== null && dt(t, e, 1, -1);
}
function Bu(e) {
  var t = _t();
  return typeof e == "function" && (e = e()), t.memoizedState = t.baseState = e, e = { pending: null, interleaved: null, lanes: 0, dispatch: null, lastRenderedReducer: si, lastRenderedState: e }, t.queue = e, e = e.dispatch = wm.bind(null, ie, e), [t.memoizedState, e];
}
function ui(e, t, n, r) {
  return e = { tag: e, create: t, destroy: n, deps: r, next: null }, t = ie.updateQueue, t === null ? (t = { lastEffect: null, stores: null }, ie.updateQueue = t, t.lastEffect = e.next = e) : (n = t.lastEffect, n === null ? t.lastEffect = e.next = e : (r = n.next, n.next = e, e.next = r, t.lastEffect = e)), e;
}
function lf() {
  return rt().memoizedState;
}
function ro(e, t, n, r) {
  var i = _t();
  ie.flags |= e, i.memoizedState = ui(1 | t, n, void 0, r === void 0 ? null : r);
}
function ta(e, t, n, r) {
  var i = rt();
  r = r === void 0 ? null : r;
  var o = void 0;
  if (pe !== null) {
    var a = pe.memoizedState;
    if (o = a.destroy, r !== null && zs(r, a.deps)) {
      i.memoizedState = ui(t, n, o, r);
      return;
    }
  }
  ie.flags |= e, i.memoizedState = ui(1 | t, n, o, r);
}
function Qu(e, t) {
  return ro(8390656, 8, e, t);
}
function As(e, t) {
  return ta(2048, 8, e, t);
}
function sf(e, t) {
  return ta(4, 2, e, t);
}
function uf(e, t) {
  return ta(4, 4, e, t);
}
function cf(e, t) {
  if (typeof t == "function")
    return e = e(), t(e), function() {
      t(null);
    };
  if (t != null)
    return e = e(), t.current = e, function() {
      t.current = null;
    };
}
function df(e, t, n) {
  return n = n != null ? n.concat([e]) : null, ta(4, 4, cf.bind(null, t, e), n);
}
function $s() {
}
function ff(e, t) {
  var n = rt();
  t = t === void 0 ? null : t;
  var r = n.memoizedState;
  return r !== null && t !== null && zs(t, r[1]) ? r[0] : (n.memoizedState = [e, t], e);
}
function pf(e, t) {
  var n = rt();
  t = t === void 0 ? null : t;
  var r = n.memoizedState;
  return r !== null && t !== null && zs(t, r[1]) ? r[0] : (e = e(), n.memoizedState = [e, t], e);
}
function hf(e, t, n) {
  return Ln & 21 ? (ht(n, t) || (n = vd(), ie.lanes |= n, Rn |= n, e.baseState = !0), t) : (e.baseState && (e.baseState = !1, Fe = !0), e.memoizedState = n);
}
function gm(e, t) {
  var n = B;
  B = n !== 0 && 4 > n ? n : 4, e(!0);
  var r = Ra.transition;
  Ra.transition = {};
  try {
    e(!1), t();
  } finally {
    B = n, Ra.transition = r;
  }
}
function mf() {
  return rt().memoizedState;
}
function ym(e, t, n) {
  var r = un(e);
  if (n = { lane: r, action: n, hasEagerState: !1, eagerState: null, next: null }, vf(e))
    gf(t, n);
  else if (n = Bd(e, t, n, r), n !== null) {
    var i = Re();
    dt(n, e, r, i), yf(n, t, r);
  }
}
function wm(e, t, n) {
  var r = un(e), i = { lane: r, action: n, hasEagerState: !1, eagerState: null, next: null };
  if (vf(e))
    gf(t, i);
  else {
    var o = e.alternate;
    if (e.lanes === 0 && (o === null || o.lanes === 0) && (o = t.lastRenderedReducer, o !== null))
      try {
        var a = t.lastRenderedState, l = o(a, n);
        if (i.hasEagerState = !0, i.eagerState = l, ht(l, a)) {
          var s = t.interleaved;
          s === null ? (i.next = i, Ps(t)) : (i.next = s.next, s.next = i), t.interleaved = i;
          return;
        }
      } catch {
      } finally {
      }
    n = Bd(e, t, i, r), n !== null && (i = Re(), dt(n, e, r, i), yf(n, t, r));
  }
}
function vf(e) {
  var t = e.alternate;
  return e === ie || t !== null && t === ie;
}
function gf(e, t) {
  Hr = No = !0;
  var n = e.pending;
  n === null ? t.next = t : (t.next = n.next, n.next = t), e.pending = t;
}
function yf(e, t, n) {
  if (n & 4194240) {
    var r = t.lanes;
    r &= e.pendingLanes, n |= r, t.lanes = n, vs(e, n);
  }
}
var Oo = { readContext: nt, useCallback: xe, useContext: xe, useEffect: xe, useImperativeHandle: xe, useInsertionEffect: xe, useLayoutEffect: xe, useMemo: xe, useReducer: xe, useRef: xe, useState: xe, useDebugValue: xe, useDeferredValue: xe, useTransition: xe, useMutableSource: xe, useSyncExternalStore: xe, useId: xe, unstable_isNewReconciler: !1 }, _m = { readContext: nt, useCallback: function(e, t) {
  return _t().memoizedState = [e, t === void 0 ? null : t], e;
}, useContext: nt, useEffect: Qu, useImperativeHandle: function(e, t, n) {
  return n = n != null ? n.concat([e]) : null, ro(
    4194308,
    4,
    cf.bind(null, t, e),
    n
  );
}, useLayoutEffect: function(e, t) {
  return ro(4194308, 4, e, t);
}, useInsertionEffect: function(e, t) {
  return ro(4, 2, e, t);
}, useMemo: function(e, t) {
  var n = _t();
  return t = t === void 0 ? null : t, e = e(), n.memoizedState = [e, t], e;
}, useReducer: function(e, t, n) {
  var r = _t();
  return t = n !== void 0 ? n(t) : t, r.memoizedState = r.baseState = t, e = { pending: null, interleaved: null, lanes: 0, dispatch: null, lastRenderedReducer: e, lastRenderedState: t }, r.queue = e, e = e.dispatch = ym.bind(null, ie, e), [r.memoizedState, e];
}, useRef: function(e) {
  var t = _t();
  return e = { current: e }, t.memoizedState = e;
}, useState: Bu, useDebugValue: $s, useDeferredValue: function(e) {
  return _t().memoizedState = e;
}, useTransition: function() {
  var e = Bu(!1), t = e[0];
  return e = gm.bind(null, e[1]), _t().memoizedState = e, [t, e];
}, useMutableSource: function() {
}, useSyncExternalStore: function(e, t, n) {
  var r = ie, i = _t();
  if (ee) {
    if (n === void 0)
      throw Error(w(407));
    n = n();
  } else {
    if (n = t(), ve === null)
      throw Error(w(349));
    Ln & 30 || tf(r, t, n);
  }
  i.memoizedState = n;
  var o = { value: n, getSnapshot: t };
  return i.queue = o, Qu(rf.bind(
    null,
    r,
    o,
    e
  ), [e]), r.flags |= 2048, ui(9, nf.bind(null, r, o, n, t), void 0, null), n;
}, useId: function() {
  var e = _t(), t = ve.identifierPrefix;
  if (ee) {
    var n = zt, r = It;
    n = (r & ~(1 << 32 - ct(r) - 1)).toString(32) + n, t = ":" + t + "R" + n, n = li++, 0 < n && (t += "H" + n.toString(32)), t += ":";
  } else
    n = vm++, t = ":" + t + "r" + n.toString(32) + ":";
  return e.memoizedState = t;
}, unstable_isNewReconciler: !1 }, km = {
  readContext: nt,
  useCallback: ff,
  useContext: nt,
  useEffect: As,
  useImperativeHandle: df,
  useInsertionEffect: sf,
  useLayoutEffect: uf,
  useMemo: pf,
  useReducer: Ia,
  useRef: lf,
  useState: function() {
    return Ia(si);
  },
  useDebugValue: $s,
  useDeferredValue: function(e) {
    var t = rt();
    return hf(t, pe.memoizedState, e);
  },
  useTransition: function() {
    var e = Ia(si)[0], t = rt().memoizedState;
    return [e, t];
  },
  useMutableSource: bd,
  useSyncExternalStore: ef,
  useId: mf,
  unstable_isNewReconciler: !1
}, Sm = { readContext: nt, useCallback: ff, useContext: nt, useEffect: As, useImperativeHandle: df, useInsertionEffect: sf, useLayoutEffect: uf, useMemo: pf, useReducer: za, useRef: lf, useState: function() {
  return za(si);
}, useDebugValue: $s, useDeferredValue: function(e) {
  var t = rt();
  return pe === null ? t.memoizedState = e : hf(t, pe.memoizedState, e);
}, useTransition: function() {
  var e = za(si)[0], t = rt().memoizedState;
  return [e, t];
}, useMutableSource: bd, useSyncExternalStore: ef, useId: mf, unstable_isNewReconciler: !1 };
function mr(e, t) {
  try {
    var n = "", r = t;
    do
      n += Xp(r), r = r.return;
    while (r);
    var i = n;
  } catch (o) {
    i = `
Error generating stack: ` + o.message + `
` + o.stack;
  }
  return { value: e, source: t, stack: i, digest: null };
}
function ja(e, t, n) {
  return { value: e, source: null, stack: n ?? null, digest: t ?? null };
}
function Ml(e, t) {
  try {
    console.error(t.value);
  } catch (n) {
    setTimeout(function() {
      throw n;
    });
  }
}
var xm = typeof WeakMap == "function" ? WeakMap : Map;
function wf(e, t, n) {
  n = Ut(-1, n), n.tag = 3, n.payload = { element: null };
  var r = t.value;
  return n.callback = function() {
    Po || (Po = !0, Vl = r), Ml(e, t);
  }, n;
}
function _f(e, t, n) {
  n = Ut(-1, n), n.tag = 3;
  var r = e.type.getDerivedStateFromError;
  if (typeof r == "function") {
    var i = t.value;
    n.payload = function() {
      return r(i);
    }, n.callback = function() {
      Ml(e, t);
    };
  }
  var o = e.stateNode;
  return o !== null && typeof o.componentDidCatch == "function" && (n.callback = function() {
    Ml(e, t), typeof r != "function" && (sn === null ? sn = /* @__PURE__ */ new Set([this]) : sn.add(this));
    var a = t.stack;
    this.componentDidCatch(t.value, { componentStack: a !== null ? a : "" });
  }), n;
}
function Gu(e, t, n) {
  var r = e.pingCache;
  if (r === null) {
    r = e.pingCache = new xm();
    var i = /* @__PURE__ */ new Set();
    r.set(t, i);
  } else
    i = r.get(t), i === void 0 && (i = /* @__PURE__ */ new Set(), r.set(t, i));
  i.has(n) || (i.add(n), e = Um.bind(null, e, t, n), t.then(e, e));
}
function Ku(e) {
  do {
    var t;
    if ((t = e.tag === 13) && (t = e.memoizedState, t = t !== null ? t.dehydrated !== null : !0), t)
      return e;
    e = e.return;
  } while (e !== null);
  return null;
}
function Xu(e, t, n, r, i) {
  return e.mode & 1 ? (e.flags |= 65536, e.lanes = i, e) : (e === t ? e.flags |= 65536 : (e.flags |= 128, n.flags |= 131072, n.flags &= -52805, n.tag === 1 && (n.alternate === null ? n.tag = 17 : (t = Ut(-1, 1), t.tag = 2, ln(n, t, 1))), n.lanes |= 1), e);
}
var Cm = Ht.ReactCurrentOwner, Fe = !1;
function Me(e, t, n, r) {
  t.child = e === null ? qd(t, null, n, r) : pr(t, e.child, n, r);
}
function qu(e, t, n, r, i) {
  n = n.render;
  var o = t.ref;
  return lr(t, i), r = js(e, t, n, r, o, i), n = Us(), e !== null && !Fe ? (t.updateQueue = e.updateQueue, t.flags &= -2053, e.lanes &= ~i, Wt(e, t, i)) : (ee && n && Cs(t), t.flags |= 1, Me(e, t, r, i), t.child);
}
function Ju(e, t, n, r, i) {
  if (e === null) {
    var o = n.type;
    return typeof o == "function" && !Qs(o) && o.defaultProps === void 0 && n.compare === null && n.defaultProps === void 0 ? (t.tag = 15, t.type = o, kf(e, t, o, r, i)) : (e = lo(n.type, null, r, t, t.mode, i), e.ref = t.ref, e.return = t, t.child = e);
  }
  if (o = e.child, !(e.lanes & i)) {
    var a = o.memoizedProps;
    if (n = n.compare, n = n !== null ? n : ti, n(a, r) && e.ref === t.ref)
      return Wt(e, t, i);
  }
  return t.flags |= 1, e = cn(o, r), e.ref = t.ref, e.return = t, t.child = e;
}
function kf(e, t, n, r, i) {
  if (e !== null) {
    var o = e.memoizedProps;
    if (ti(o, r) && e.ref === t.ref)
      if (Fe = !1, t.pendingProps = r = o, (e.lanes & i) !== 0)
        e.flags & 131072 && (Fe = !0);
      else
        return t.lanes = e.lanes, Wt(e, t, i);
  }
  return Ll(e, t, n, r, i);
}
function Sf(e, t, n) {
  var r = t.pendingProps, i = r.children, o = e !== null ? e.memoizedState : null;
  if (r.mode === "hidden")
    if (!(t.mode & 1))
      t.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }, G(nr, He), He |= n;
    else {
      if (!(n & 1073741824))
        return e = o !== null ? o.baseLanes | n : n, t.lanes = t.childLanes = 1073741824, t.memoizedState = { baseLanes: e, cachePool: null, transitions: null }, t.updateQueue = null, G(nr, He), He |= e, null;
      t.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }, r = o !== null ? o.baseLanes : n, G(nr, He), He |= r;
    }
  else
    o !== null ? (r = o.baseLanes | n, t.memoizedState = null) : r = n, G(nr, He), He |= r;
  return Me(e, t, i, n), t.child;
}
function xf(e, t) {
  var n = t.ref;
  (e === null && n !== null || e !== null && e.ref !== n) && (t.flags |= 512, t.flags |= 2097152);
}
function Ll(e, t, n, r, i) {
  var o = We(n) ? Pn : Ee.current;
  return o = dr(t, o), lr(t, i), n = js(e, t, n, r, o, i), r = Us(), e !== null && !Fe ? (t.updateQueue = e.updateQueue, t.flags &= -2053, e.lanes &= ~i, Wt(e, t, i)) : (ee && r && Cs(t), t.flags |= 1, Me(e, t, n, i), t.child);
}
function bu(e, t, n, r, i) {
  if (We(n)) {
    var o = !0;
    _o(t);
  } else
    o = !1;
  if (lr(t, i), t.stateNode === null)
    io(e, t), Kd(t, n, r), Pl(t, n, r, i), r = !0;
  else if (e === null) {
    var a = t.stateNode, l = t.memoizedProps;
    a.props = l;
    var s = a.context, u = n.contextType;
    typeof u == "object" && u !== null ? u = nt(u) : (u = We(n) ? Pn : Ee.current, u = dr(t, u));
    var f = n.getDerivedStateFromProps, h = typeof f == "function" || typeof a.getSnapshotBeforeUpdate == "function";
    h || typeof a.UNSAFE_componentWillReceiveProps != "function" && typeof a.componentWillReceiveProps != "function" || (l !== r || s !== u) && Hu(t, a, r, u), Kt = !1;
    var m = t.memoizedState;
    a.state = m, To(t, r, a, i), s = t.memoizedState, l !== r || m !== s || Ve.current || Kt ? (typeof f == "function" && (Dl(t, n, f, r), s = t.memoizedState), (l = Kt || Zu(t, n, l, r, m, s, u)) ? (h || typeof a.UNSAFE_componentWillMount != "function" && typeof a.componentWillMount != "function" || (typeof a.componentWillMount == "function" && a.componentWillMount(), typeof a.UNSAFE_componentWillMount == "function" && a.UNSAFE_componentWillMount()), typeof a.componentDidMount == "function" && (t.flags |= 4194308)) : (typeof a.componentDidMount == "function" && (t.flags |= 4194308), t.memoizedProps = r, t.memoizedState = s), a.props = r, a.state = s, a.context = u, r = l) : (typeof a.componentDidMount == "function" && (t.flags |= 4194308), r = !1);
  } else {
    a = t.stateNode, Qd(e, t), l = t.memoizedProps, u = t.type === t.elementType ? l : at(t.type, l), a.props = u, h = t.pendingProps, m = a.context, s = n.contextType, typeof s == "object" && s !== null ? s = nt(s) : (s = We(n) ? Pn : Ee.current, s = dr(t, s));
    var v = n.getDerivedStateFromProps;
    (f = typeof v == "function" || typeof a.getSnapshotBeforeUpdate == "function") || typeof a.UNSAFE_componentWillReceiveProps != "function" && typeof a.componentWillReceiveProps != "function" || (l !== h || m !== s) && Hu(t, a, r, s), Kt = !1, m = t.memoizedState, a.state = m, To(t, r, a, i);
    var y = t.memoizedState;
    l !== h || m !== y || Ve.current || Kt ? (typeof v == "function" && (Dl(t, n, v, r), y = t.memoizedState), (u = Kt || Zu(t, n, u, r, m, y, s) || !1) ? (f || typeof a.UNSAFE_componentWillUpdate != "function" && typeof a.componentWillUpdate != "function" || (typeof a.componentWillUpdate == "function" && a.componentWillUpdate(r, y, s), typeof a.UNSAFE_componentWillUpdate == "function" && a.UNSAFE_componentWillUpdate(r, y, s)), typeof a.componentDidUpdate == "function" && (t.flags |= 4), typeof a.getSnapshotBeforeUpdate == "function" && (t.flags |= 1024)) : (typeof a.componentDidUpdate != "function" || l === e.memoizedProps && m === e.memoizedState || (t.flags |= 4), typeof a.getSnapshotBeforeUpdate != "function" || l === e.memoizedProps && m === e.memoizedState || (t.flags |= 1024), t.memoizedProps = r, t.memoizedState = y), a.props = r, a.state = y, a.context = s, r = u) : (typeof a.componentDidUpdate != "function" || l === e.memoizedProps && m === e.memoizedState || (t.flags |= 4), typeof a.getSnapshotBeforeUpdate != "function" || l === e.memoizedProps && m === e.memoizedState || (t.flags |= 1024), r = !1);
  }
  return Rl(e, t, n, r, o, i);
}
function Rl(e, t, n, r, i, o) {
  xf(e, t);
  var a = (t.flags & 128) !== 0;
  if (!r && !a)
    return i && Au(t, n, !1), Wt(e, t, o);
  r = t.stateNode, Cm.current = t;
  var l = a && typeof n.getDerivedStateFromError != "function" ? null : r.render();
  return t.flags |= 1, e !== null && a ? (t.child = pr(t, e.child, null, o), t.child = pr(t, null, l, o)) : Me(e, t, l, o), t.memoizedState = r.state, i && Au(t, n, !0), t.child;
}
function Cf(e) {
  var t = e.stateNode;
  t.pendingContext ? Uu(e, t.pendingContext, t.pendingContext !== t.context) : t.context && Uu(e, t.context, !1), Ls(e, t.containerInfo);
}
function ec(e, t, n, r, i) {
  return fr(), Es(i), t.flags |= 256, Me(e, t, n, r), t.child;
}
var Il = { dehydrated: null, treeContext: null, retryLane: 0 };
function zl(e) {
  return { baseLanes: e, cachePool: null, transitions: null };
}
function Tf(e, t, n) {
  var r = t.pendingProps, i = re.current, o = !1, a = (t.flags & 128) !== 0, l;
  if ((l = a) || (l = e !== null && e.memoizedState === null ? !1 : (i & 2) !== 0), l ? (o = !0, t.flags &= -129) : (e === null || e.memoizedState !== null) && (i |= 1), G(re, i & 1), e === null)
    return Nl(t), e = t.memoizedState, e !== null && (e = e.dehydrated, e !== null) ? (t.mode & 1 ? e.data === "$!" ? t.lanes = 8 : t.lanes = 1073741824 : t.lanes = 1, null) : (a = r.children, e = r.fallback, o ? (r = t.mode, o = t.child, a = { mode: "hidden", children: a }, !(r & 1) && o !== null ? (o.childLanes = 0, o.pendingProps = a) : o = ia(a, r, 0, null), e = On(e, r, n, null), o.return = t, e.return = t, o.sibling = e, t.child = o, t.child.memoizedState = zl(n), t.memoizedState = Il, e) : Fs(t, a));
  if (i = e.memoizedState, i !== null && (l = i.dehydrated, l !== null))
    return Tm(e, t, a, r, l, i, n);
  if (o) {
    o = r.fallback, a = t.mode, i = e.child, l = i.sibling;
    var s = { mode: "hidden", children: r.children };
    return !(a & 1) && t.child !== i ? (r = t.child, r.childLanes = 0, r.pendingProps = s, t.deletions = null) : (r = cn(i, s), r.subtreeFlags = i.subtreeFlags & 14680064), l !== null ? o = cn(l, o) : (o = On(o, a, n, null), o.flags |= 2), o.return = t, r.return = t, r.sibling = o, t.child = r, r = o, o = t.child, a = e.child.memoizedState, a = a === null ? zl(n) : { baseLanes: a.baseLanes | n, cachePool: null, transitions: a.transitions }, o.memoizedState = a, o.childLanes = e.childLanes & ~n, t.memoizedState = Il, r;
  }
  return o = e.child, e = o.sibling, r = cn(o, { mode: "visible", children: r.children }), !(t.mode & 1) && (r.lanes = n), r.return = t, r.sibling = null, e !== null && (n = t.deletions, n === null ? (t.deletions = [e], t.flags |= 16) : n.push(e)), t.child = r, t.memoizedState = null, r;
}
function Fs(e, t) {
  return t = ia({ mode: "visible", children: t }, e.mode, 0, null), t.return = e, e.child = t;
}
function Hi(e, t, n, r) {
  return r !== null && Es(r), pr(t, e.child, null, n), e = Fs(t, t.pendingProps.children), e.flags |= 2, t.memoizedState = null, e;
}
function Tm(e, t, n, r, i, o, a) {
  if (n)
    return t.flags & 256 ? (t.flags &= -257, r = ja(Error(w(422))), Hi(e, t, a, r)) : t.memoizedState !== null ? (t.child = e.child, t.flags |= 128, null) : (o = r.fallback, i = t.mode, r = ia({ mode: "visible", children: r.children }, i, 0, null), o = On(o, i, a, null), o.flags |= 2, r.return = t, o.return = t, r.sibling = o, t.child = r, t.mode & 1 && pr(t, e.child, null, a), t.child.memoizedState = zl(a), t.memoizedState = Il, o);
  if (!(t.mode & 1))
    return Hi(e, t, a, null);
  if (i.data === "$!") {
    if (r = i.nextSibling && i.nextSibling.dataset, r)
      var l = r.dgst;
    return r = l, o = Error(w(419)), r = ja(o, r, void 0), Hi(e, t, a, r);
  }
  if (l = (a & e.childLanes) !== 0, Fe || l) {
    if (r = ve, r !== null) {
      switch (a & -a) {
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
      i = i & (r.suspendedLanes | a) ? 0 : i, i !== 0 && i !== o.retryLane && (o.retryLane = i, Vt(e, i), dt(r, e, i, -1));
    }
    return Bs(), r = ja(Error(w(421))), Hi(e, t, a, r);
  }
  return i.data === "$?" ? (t.flags |= 128, t.child = e.child, t = Am.bind(null, e), i._reactRetry = t, null) : (e = o.treeContext, Ye = an(i.nextSibling), Be = t, ee = !0, st = null, e !== null && (Je[be++] = It, Je[be++] = zt, Je[be++] = Mn, It = e.id, zt = e.overflow, Mn = t), t = Fs(t, r.children), t.flags |= 4096, t);
}
function tc(e, t, n) {
  e.lanes |= t;
  var r = e.alternate;
  r !== null && (r.lanes |= t), Ol(e.return, t, n);
}
function Ua(e, t, n, r, i) {
  var o = e.memoizedState;
  o === null ? e.memoizedState = { isBackwards: t, rendering: null, renderingStartTime: 0, last: r, tail: n, tailMode: i } : (o.isBackwards = t, o.rendering = null, o.renderingStartTime = 0, o.last = r, o.tail = n, o.tailMode = i);
}
function Ef(e, t, n) {
  var r = t.pendingProps, i = r.revealOrder, o = r.tail;
  if (Me(e, t, r.children, n), r = re.current, r & 2)
    r = r & 1 | 2, t.flags |= 128;
  else {
    if (e !== null && e.flags & 128)
      e:
        for (e = t.child; e !== null; ) {
          if (e.tag === 13)
            e.memoizedState !== null && tc(e, n, t);
          else if (e.tag === 19)
            tc(e, n, t);
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
        n = i, n === null ? (i = t.child, t.child = null) : (i = n.sibling, n.sibling = null), Ua(t, !1, i, n, o);
        break;
      case "backwards":
        for (n = null, i = t.child, t.child = null; i !== null; ) {
          if (e = i.alternate, e !== null && Eo(e) === null) {
            t.child = i;
            break;
          }
          e = i.sibling, i.sibling = n, n = i, i = e;
        }
        Ua(t, !0, n, null, o);
        break;
      case "together":
        Ua(t, !1, null, null, void 0);
        break;
      default:
        t.memoizedState = null;
    }
  return t.child;
}
function io(e, t) {
  !(t.mode & 1) && e !== null && (e.alternate = null, t.alternate = null, t.flags |= 2);
}
function Wt(e, t, n) {
  if (e !== null && (t.dependencies = e.dependencies), Rn |= t.lanes, !(n & t.childLanes))
    return null;
  if (e !== null && t.child !== e.child)
    throw Error(w(153));
  if (t.child !== null) {
    for (e = t.child, n = cn(e, e.pendingProps), t.child = n, n.return = t; e.sibling !== null; )
      e = e.sibling, n = n.sibling = cn(e, e.pendingProps), n.return = t;
    n.sibling = null;
  }
  return t.child;
}
function Em(e, t, n) {
  switch (t.tag) {
    case 3:
      Cf(t), fr();
      break;
    case 5:
      Jd(t);
      break;
    case 1:
      We(t.type) && _o(t);
      break;
    case 4:
      Ls(t, t.stateNode.containerInfo);
      break;
    case 10:
      var r = t.type._context, i = t.memoizedProps.value;
      G(xo, r._currentValue), r._currentValue = i;
      break;
    case 13:
      if (r = t.memoizedState, r !== null)
        return r.dehydrated !== null ? (G(re, re.current & 1), t.flags |= 128, null) : n & t.child.childLanes ? Tf(e, t, n) : (G(re, re.current & 1), e = Wt(e, t, n), e !== null ? e.sibling : null);
      G(re, re.current & 1);
      break;
    case 19:
      if (r = (n & t.childLanes) !== 0, e.flags & 128) {
        if (r)
          return Ef(e, t, n);
        t.flags |= 128;
      }
      if (i = t.memoizedState, i !== null && (i.rendering = null, i.tail = null, i.lastEffect = null), G(re, re.current), r)
        break;
      return null;
    case 22:
    case 23:
      return t.lanes = 0, Sf(e, t, n);
  }
  return Wt(e, t, n);
}
var Nf, jl, Of, Df;
Nf = function(e, t) {
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
jl = function() {
};
Of = function(e, t, n, r) {
  var i = e.memoizedProps;
  if (i !== r) {
    e = t.stateNode, En(Ct.current);
    var o = null;
    switch (n) {
      case "input":
        i = il(e, i), r = il(e, r), o = [];
        break;
      case "select":
        i = oe({}, i, { value: void 0 }), r = oe({}, r, { value: void 0 }), o = [];
        break;
      case "textarea":
        i = ll(e, i), r = ll(e, r), o = [];
        break;
      default:
        typeof i.onClick != "function" && typeof r.onClick == "function" && (e.onclick = yo);
    }
    ul(n, r);
    var a;
    n = null;
    for (u in i)
      if (!r.hasOwnProperty(u) && i.hasOwnProperty(u) && i[u] != null)
        if (u === "style") {
          var l = i[u];
          for (a in l)
            l.hasOwnProperty(a) && (n || (n = {}), n[a] = "");
        } else
          u !== "dangerouslySetInnerHTML" && u !== "children" && u !== "suppressContentEditableWarning" && u !== "suppressHydrationWarning" && u !== "autoFocus" && (Gr.hasOwnProperty(u) ? o || (o = []) : (o = o || []).push(u, null));
    for (u in r) {
      var s = r[u];
      if (l = i != null ? i[u] : void 0, r.hasOwnProperty(u) && s !== l && (s != null || l != null))
        if (u === "style")
          if (l) {
            for (a in l)
              !l.hasOwnProperty(a) || s && s.hasOwnProperty(a) || (n || (n = {}), n[a] = "");
            for (a in s)
              s.hasOwnProperty(a) && l[a] !== s[a] && (n || (n = {}), n[a] = s[a]);
          } else
            n || (o || (o = []), o.push(
              u,
              n
            )), n = s;
        else
          u === "dangerouslySetInnerHTML" ? (s = s ? s.__html : void 0, l = l ? l.__html : void 0, s != null && l !== s && (o = o || []).push(u, s)) : u === "children" ? typeof s != "string" && typeof s != "number" || (o = o || []).push(u, "" + s) : u !== "suppressContentEditableWarning" && u !== "suppressHydrationWarning" && (Gr.hasOwnProperty(u) ? (s != null && u === "onScroll" && J("scroll", e), o || l === s || (o = [])) : (o = o || []).push(u, s));
    }
    n && (o = o || []).push("style", n);
    var u = o;
    (t.updateQueue = u) && (t.flags |= 4);
  }
};
Df = function(e, t, n, r) {
  n !== r && (t.flags |= 4);
};
function Pr(e, t) {
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
function Ce(e) {
  var t = e.alternate !== null && e.alternate.child === e.child, n = 0, r = 0;
  if (t)
    for (var i = e.child; i !== null; )
      n |= i.lanes | i.childLanes, r |= i.subtreeFlags & 14680064, r |= i.flags & 14680064, i.return = e, i = i.sibling;
  else
    for (i = e.child; i !== null; )
      n |= i.lanes | i.childLanes, r |= i.subtreeFlags, r |= i.flags, i.return = e, i = i.sibling;
  return e.subtreeFlags |= r, e.childLanes = n, t;
}
function Nm(e, t, n) {
  var r = t.pendingProps;
  switch (Ts(t), t.tag) {
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
      return Ce(t), null;
    case 1:
      return We(t.type) && wo(), Ce(t), null;
    case 3:
      return r = t.stateNode, hr(), b(Ve), b(Ee), Is(), r.pendingContext && (r.context = r.pendingContext, r.pendingContext = null), (e === null || e.child === null) && (Wi(t) ? t.flags |= 4 : e === null || e.memoizedState.isDehydrated && !(t.flags & 256) || (t.flags |= 1024, st !== null && (Hl(st), st = null))), jl(e, t), Ce(t), null;
    case 5:
      Rs(t);
      var i = En(ai.current);
      if (n = t.type, e !== null && t.stateNode != null)
        Of(e, t, n, r, i), e.ref !== t.ref && (t.flags |= 512, t.flags |= 2097152);
      else {
        if (!r) {
          if (t.stateNode === null)
            throw Error(w(166));
          return Ce(t), null;
        }
        if (e = En(Ct.current), Wi(t)) {
          r = t.stateNode, n = t.type;
          var o = t.memoizedProps;
          switch (r[kt] = t, r[ii] = o, e = (t.mode & 1) !== 0, n) {
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
              for (i = 0; i < Ar.length; i++)
                J(Ar[i], r);
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
              cu(r, o), J("invalid", r);
              break;
            case "select":
              r._wrapperState = { wasMultiple: !!o.multiple }, J("invalid", r);
              break;
            case "textarea":
              fu(r, o), J("invalid", r);
          }
          ul(n, o), i = null;
          for (var a in o)
            if (o.hasOwnProperty(a)) {
              var l = o[a];
              a === "children" ? typeof l == "string" ? r.textContent !== l && (o.suppressHydrationWarning !== !0 && Vi(r.textContent, l, e), i = ["children", l]) : typeof l == "number" && r.textContent !== "" + l && (o.suppressHydrationWarning !== !0 && Vi(
                r.textContent,
                l,
                e
              ), i = ["children", "" + l]) : Gr.hasOwnProperty(a) && l != null && a === "onScroll" && J("scroll", r);
            }
          switch (n) {
            case "input":
              Ri(r), du(r, o, !0);
              break;
            case "textarea":
              Ri(r), pu(r);
              break;
            case "select":
            case "option":
              break;
            default:
              typeof o.onClick == "function" && (r.onclick = yo);
          }
          r = i, t.updateQueue = r, r !== null && (t.flags |= 4);
        } else {
          a = i.nodeType === 9 ? i : i.ownerDocument, e === "http://www.w3.org/1999/xhtml" && (e = td(n)), e === "http://www.w3.org/1999/xhtml" ? n === "script" ? (e = a.createElement("div"), e.innerHTML = "<script><\/script>", e = e.removeChild(e.firstChild)) : typeof r.is == "string" ? e = a.createElement(n, { is: r.is }) : (e = a.createElement(n), n === "select" && (a = e, r.multiple ? a.multiple = !0 : r.size && (a.size = r.size))) : e = a.createElementNS(e, n), e[kt] = t, e[ii] = r, Nf(e, t, !1, !1), t.stateNode = e;
          e: {
            switch (a = cl(n, r), n) {
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
                for (i = 0; i < Ar.length; i++)
                  J(Ar[i], e);
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
                cu(e, r), i = il(e, r), J("invalid", e);
                break;
              case "option":
                i = r;
                break;
              case "select":
                e._wrapperState = { wasMultiple: !!r.multiple }, i = oe({}, r, { value: void 0 }), J("invalid", e);
                break;
              case "textarea":
                fu(e, r), i = ll(e, r), J("invalid", e);
                break;
              default:
                i = r;
            }
            ul(n, i), l = i;
            for (o in l)
              if (l.hasOwnProperty(o)) {
                var s = l[o];
                o === "style" ? id(e, s) : o === "dangerouslySetInnerHTML" ? (s = s ? s.__html : void 0, s != null && nd(e, s)) : o === "children" ? typeof s == "string" ? (n !== "textarea" || s !== "") && Kr(e, s) : typeof s == "number" && Kr(e, "" + s) : o !== "suppressContentEditableWarning" && o !== "suppressHydrationWarning" && o !== "autoFocus" && (Gr.hasOwnProperty(o) ? s != null && o === "onScroll" && J("scroll", e) : s != null && cs(e, o, s, a));
              }
            switch (n) {
              case "input":
                Ri(e), du(e, r, !1);
                break;
              case "textarea":
                Ri(e), pu(e);
                break;
              case "option":
                r.value != null && e.setAttribute("value", "" + dn(r.value));
                break;
              case "select":
                e.multiple = !!r.multiple, o = r.value, o != null ? rr(e, !!r.multiple, o, !1) : r.defaultValue != null && rr(
                  e,
                  !!r.multiple,
                  r.defaultValue,
                  !0
                );
                break;
              default:
                typeof i.onClick == "function" && (e.onclick = yo);
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
      return Ce(t), null;
    case 6:
      if (e && t.stateNode != null)
        Df(e, t, e.memoizedProps, r);
      else {
        if (typeof r != "string" && t.stateNode === null)
          throw Error(w(166));
        if (n = En(ai.current), En(Ct.current), Wi(t)) {
          if (r = t.stateNode, n = t.memoizedProps, r[kt] = t, (o = r.nodeValue !== n) && (e = Be, e !== null))
            switch (e.tag) {
              case 3:
                Vi(r.nodeValue, n, (e.mode & 1) !== 0);
                break;
              case 5:
                e.memoizedProps.suppressHydrationWarning !== !0 && Vi(r.nodeValue, n, (e.mode & 1) !== 0);
            }
          o && (t.flags |= 4);
        } else
          r = (n.nodeType === 9 ? n : n.ownerDocument).createTextNode(r), r[kt] = t, t.stateNode = r;
      }
      return Ce(t), null;
    case 13:
      if (b(re), r = t.memoizedState, e === null || e.memoizedState !== null && e.memoizedState.dehydrated !== null) {
        if (ee && Ye !== null && t.mode & 1 && !(t.flags & 128))
          Yd(), fr(), t.flags |= 98560, o = !1;
        else if (o = Wi(t), r !== null && r.dehydrated !== null) {
          if (e === null) {
            if (!o)
              throw Error(w(318));
            if (o = t.memoizedState, o = o !== null ? o.dehydrated : null, !o)
              throw Error(w(317));
            o[kt] = t;
          } else
            fr(), !(t.flags & 128) && (t.memoizedState = null), t.flags |= 4;
          Ce(t), o = !1;
        } else
          st !== null && (Hl(st), st = null), o = !0;
        if (!o)
          return t.flags & 65536 ? t : null;
      }
      return t.flags & 128 ? (t.lanes = n, t) : (r = r !== null, r !== (e !== null && e.memoizedState !== null) && r && (t.child.flags |= 8192, t.mode & 1 && (e === null || re.current & 1 ? he === 0 && (he = 3) : Bs())), t.updateQueue !== null && (t.flags |= 4), Ce(t), null);
    case 4:
      return hr(), jl(e, t), e === null && ni(t.stateNode.containerInfo), Ce(t), null;
    case 10:
      return Ds(t.type._context), Ce(t), null;
    case 17:
      return We(t.type) && wo(), Ce(t), null;
    case 19:
      if (b(re), o = t.memoizedState, o === null)
        return Ce(t), null;
      if (r = (t.flags & 128) !== 0, a = o.rendering, a === null)
        if (r)
          Pr(o, !1);
        else {
          if (he !== 0 || e !== null && e.flags & 128)
            for (e = t.child; e !== null; ) {
              if (a = Eo(e), a !== null) {
                for (t.flags |= 128, Pr(o, !1), r = a.updateQueue, r !== null && (t.updateQueue = r, t.flags |= 4), t.subtreeFlags = 0, r = n, n = t.child; n !== null; )
                  o = n, e = r, o.flags &= 14680066, a = o.alternate, a === null ? (o.childLanes = 0, o.lanes = e, o.child = null, o.subtreeFlags = 0, o.memoizedProps = null, o.memoizedState = null, o.updateQueue = null, o.dependencies = null, o.stateNode = null) : (o.childLanes = a.childLanes, o.lanes = a.lanes, o.child = a.child, o.subtreeFlags = 0, o.deletions = null, o.memoizedProps = a.memoizedProps, o.memoizedState = a.memoizedState, o.updateQueue = a.updateQueue, o.type = a.type, e = a.dependencies, o.dependencies = e === null ? null : { lanes: e.lanes, firstContext: e.firstContext }), n = n.sibling;
                return G(re, re.current & 1 | 2), t.child;
              }
              e = e.sibling;
            }
          o.tail !== null && se() > vr && (t.flags |= 128, r = !0, Pr(o, !1), t.lanes = 4194304);
        }
      else {
        if (!r)
          if (e = Eo(a), e !== null) {
            if (t.flags |= 128, r = !0, n = e.updateQueue, n !== null && (t.updateQueue = n, t.flags |= 4), Pr(o, !0), o.tail === null && o.tailMode === "hidden" && !a.alternate && !ee)
              return Ce(t), null;
          } else
            2 * se() - o.renderingStartTime > vr && n !== 1073741824 && (t.flags |= 128, r = !0, Pr(o, !1), t.lanes = 4194304);
        o.isBackwards ? (a.sibling = t.child, t.child = a) : (n = o.last, n !== null ? n.sibling = a : t.child = a, o.last = a);
      }
      return o.tail !== null ? (t = o.tail, o.rendering = t, o.tail = t.sibling, o.renderingStartTime = se(), t.sibling = null, n = re.current, G(re, r ? n & 1 | 2 : n & 1), t) : (Ce(t), null);
    case 22:
    case 23:
      return Ys(), r = t.memoizedState !== null, e !== null && e.memoizedState !== null !== r && (t.flags |= 8192), r && t.mode & 1 ? He & 1073741824 && (Ce(t), t.subtreeFlags & 6 && (t.flags |= 8192)) : Ce(t), null;
    case 24:
      return null;
    case 25:
      return null;
  }
  throw Error(w(156, t.tag));
}
function Om(e, t) {
  switch (Ts(t), t.tag) {
    case 1:
      return We(t.type) && wo(), e = t.flags, e & 65536 ? (t.flags = e & -65537 | 128, t) : null;
    case 3:
      return hr(), b(Ve), b(Ee), Is(), e = t.flags, e & 65536 && !(e & 128) ? (t.flags = e & -65537 | 128, t) : null;
    case 5:
      return Rs(t), null;
    case 13:
      if (b(re), e = t.memoizedState, e !== null && e.dehydrated !== null) {
        if (t.alternate === null)
          throw Error(w(340));
        fr();
      }
      return e = t.flags, e & 65536 ? (t.flags = e & -65537 | 128, t) : null;
    case 19:
      return b(re), null;
    case 4:
      return hr(), null;
    case 10:
      return Ds(t.type._context), null;
    case 22:
    case 23:
      return Ys(), null;
    case 24:
      return null;
    default:
      return null;
  }
}
var Yi = !1, Te = !1, Dm = typeof WeakSet == "function" ? WeakSet : Set, D = null;
function tr(e, t) {
  var n = e.ref;
  if (n !== null)
    if (typeof n == "function")
      try {
        n(null);
      } catch (r) {
        ae(e, t, r);
      }
    else
      n.current = null;
}
function Ul(e, t, n) {
  try {
    n();
  } catch (r) {
    ae(e, t, r);
  }
}
var nc = !1;
function Pm(e, t) {
  if (_l = mo, e = Ld(), xs(e)) {
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
          var a = 0, l = -1, s = -1, u = 0, f = 0, h = e, m = null;
          t:
            for (; ; ) {
              for (var v; h !== n || i !== 0 && h.nodeType !== 3 || (l = a + i), h !== o || r !== 0 && h.nodeType !== 3 || (s = a + r), h.nodeType === 3 && (a += h.nodeValue.length), (v = h.firstChild) !== null; )
                m = h, h = v;
              for (; ; ) {
                if (h === e)
                  break t;
                if (m === n && ++u === i && (l = a), m === o && ++f === r && (s = a), (v = h.nextSibling) !== null)
                  break;
                h = m, m = h.parentNode;
              }
              h = v;
            }
          n = l === -1 || s === -1 ? null : { start: l, end: s };
        } else
          n = null;
      }
    n = n || { start: 0, end: 0 };
  } else
    n = null;
  for (kl = { focusedElem: e, selectionRange: n }, mo = !1, D = t; D !== null; )
    if (t = D, e = t.child, (t.subtreeFlags & 1028) !== 0 && e !== null)
      e.return = t, D = e;
    else
      for (; D !== null; ) {
        t = D;
        try {
          var y = t.alternate;
          if (t.flags & 1024)
            switch (t.tag) {
              case 0:
              case 11:
              case 15:
                break;
              case 1:
                if (y !== null) {
                  var _ = y.memoizedProps, R = y.memoizedState, c = t.stateNode, d = c.getSnapshotBeforeUpdate(t.elementType === t.type ? _ : at(t.type, _), R);
                  c.__reactInternalSnapshotBeforeUpdate = d;
                }
                break;
              case 3:
                var p = t.stateNode.containerInfo;
                p.nodeType === 1 ? p.textContent = "" : p.nodeType === 9 && p.documentElement && p.removeChild(p.documentElement);
                break;
              case 5:
              case 6:
              case 4:
              case 17:
                break;
              default:
                throw Error(w(163));
            }
        } catch (g) {
          ae(t, t.return, g);
        }
        if (e = t.sibling, e !== null) {
          e.return = t.return, D = e;
          break;
        }
        D = t.return;
      }
  return y = nc, nc = !1, y;
}
function Yr(e, t, n) {
  var r = t.updateQueue;
  if (r = r !== null ? r.lastEffect : null, r !== null) {
    var i = r = r.next;
    do {
      if ((i.tag & e) === e) {
        var o = i.destroy;
        i.destroy = void 0, o !== void 0 && Ul(t, n, o);
      }
      i = i.next;
    } while (i !== r);
  }
}
function na(e, t) {
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
function Al(e) {
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
function Pf(e) {
  var t = e.alternate;
  t !== null && (e.alternate = null, Pf(t)), e.child = null, e.deletions = null, e.sibling = null, e.tag === 5 && (t = e.stateNode, t !== null && (delete t[kt], delete t[ii], delete t[Cl], delete t[fm], delete t[pm])), e.stateNode = null, e.return = null, e.dependencies = null, e.memoizedProps = null, e.memoizedState = null, e.pendingProps = null, e.stateNode = null, e.updateQueue = null;
}
function Mf(e) {
  return e.tag === 5 || e.tag === 3 || e.tag === 4;
}
function rc(e) {
  e:
    for (; ; ) {
      for (; e.sibling === null; ) {
        if (e.return === null || Mf(e.return))
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
function $l(e, t, n) {
  var r = e.tag;
  if (r === 5 || r === 6)
    e = e.stateNode, t ? n.nodeType === 8 ? n.parentNode.insertBefore(e, t) : n.insertBefore(e, t) : (n.nodeType === 8 ? (t = n.parentNode, t.insertBefore(e, n)) : (t = n, t.appendChild(e)), n = n._reactRootContainer, n != null || t.onclick !== null || (t.onclick = yo));
  else if (r !== 4 && (e = e.child, e !== null))
    for ($l(e, t, n), e = e.sibling; e !== null; )
      $l(e, t, n), e = e.sibling;
}
function Fl(e, t, n) {
  var r = e.tag;
  if (r === 5 || r === 6)
    e = e.stateNode, t ? n.insertBefore(e, t) : n.appendChild(e);
  else if (r !== 4 && (e = e.child, e !== null))
    for (Fl(e, t, n), e = e.sibling; e !== null; )
      Fl(e, t, n), e = e.sibling;
}
var we = null, lt = !1;
function Bt(e, t, n) {
  for (n = n.child; n !== null; )
    Lf(e, t, n), n = n.sibling;
}
function Lf(e, t, n) {
  if (xt && typeof xt.onCommitFiberUnmount == "function")
    try {
      xt.onCommitFiberUnmount(Go, n);
    } catch {
    }
  switch (n.tag) {
    case 5:
      Te || tr(n, t);
    case 6:
      var r = we, i = lt;
      we = null, Bt(e, t, n), we = r, lt = i, we !== null && (lt ? (e = we, n = n.stateNode, e.nodeType === 8 ? e.parentNode.removeChild(n) : e.removeChild(n)) : we.removeChild(n.stateNode));
      break;
    case 18:
      we !== null && (lt ? (e = we, n = n.stateNode, e.nodeType === 8 ? Pa(e.parentNode, n) : e.nodeType === 1 && Pa(e, n), br(e)) : Pa(we, n.stateNode));
      break;
    case 4:
      r = we, i = lt, we = n.stateNode.containerInfo, lt = !0, Bt(e, t, n), we = r, lt = i;
      break;
    case 0:
    case 11:
    case 14:
    case 15:
      if (!Te && (r = n.updateQueue, r !== null && (r = r.lastEffect, r !== null))) {
        i = r = r.next;
        do {
          var o = i, a = o.destroy;
          o = o.tag, a !== void 0 && (o & 2 || o & 4) && Ul(n, t, a), i = i.next;
        } while (i !== r);
      }
      Bt(e, t, n);
      break;
    case 1:
      if (!Te && (tr(n, t), r = n.stateNode, typeof r.componentWillUnmount == "function"))
        try {
          r.props = n.memoizedProps, r.state = n.memoizedState, r.componentWillUnmount();
        } catch (l) {
          ae(n, t, l);
        }
      Bt(e, t, n);
      break;
    case 21:
      Bt(e, t, n);
      break;
    case 22:
      n.mode & 1 ? (Te = (r = Te) || n.memoizedState !== null, Bt(e, t, n), Te = r) : Bt(e, t, n);
      break;
    default:
      Bt(e, t, n);
  }
}
function ic(e) {
  var t = e.updateQueue;
  if (t !== null) {
    e.updateQueue = null;
    var n = e.stateNode;
    n === null && (n = e.stateNode = new Dm()), t.forEach(function(r) {
      var i = $m.bind(null, e, r);
      n.has(r) || (n.add(r), r.then(i, i));
    });
  }
}
function ot(e, t) {
  var n = t.deletions;
  if (n !== null)
    for (var r = 0; r < n.length; r++) {
      var i = n[r];
      try {
        var o = e, a = t, l = a;
        e:
          for (; l !== null; ) {
            switch (l.tag) {
              case 5:
                we = l.stateNode, lt = !1;
                break e;
              case 3:
                we = l.stateNode.containerInfo, lt = !0;
                break e;
              case 4:
                we = l.stateNode.containerInfo, lt = !0;
                break e;
            }
            l = l.return;
          }
        if (we === null)
          throw Error(w(160));
        Lf(o, a, i), we = null, lt = !1;
        var s = i.alternate;
        s !== null && (s.return = null), i.return = null;
      } catch (u) {
        ae(i, t, u);
      }
    }
  if (t.subtreeFlags & 12854)
    for (t = t.child; t !== null; )
      Rf(t, e), t = t.sibling;
}
function Rf(e, t) {
  var n = e.alternate, r = e.flags;
  switch (e.tag) {
    case 0:
    case 11:
    case 14:
    case 15:
      if (ot(t, e), wt(e), r & 4) {
        try {
          Yr(3, e, e.return), na(3, e);
        } catch (_) {
          ae(e, e.return, _);
        }
        try {
          Yr(5, e, e.return);
        } catch (_) {
          ae(e, e.return, _);
        }
      }
      break;
    case 1:
      ot(t, e), wt(e), r & 512 && n !== null && tr(n, n.return);
      break;
    case 5:
      if (ot(t, e), wt(e), r & 512 && n !== null && tr(n, n.return), e.flags & 32) {
        var i = e.stateNode;
        try {
          Kr(i, "");
        } catch (_) {
          ae(e, e.return, _);
        }
      }
      if (r & 4 && (i = e.stateNode, i != null)) {
        var o = e.memoizedProps, a = n !== null ? n.memoizedProps : o, l = e.type, s = e.updateQueue;
        if (e.updateQueue = null, s !== null)
          try {
            l === "input" && o.type === "radio" && o.name != null && bc(i, o), cl(l, a);
            var u = cl(l, o);
            for (a = 0; a < s.length; a += 2) {
              var f = s[a], h = s[a + 1];
              f === "style" ? id(i, h) : f === "dangerouslySetInnerHTML" ? nd(i, h) : f === "children" ? Kr(i, h) : cs(i, f, h, u);
            }
            switch (l) {
              case "input":
                ol(i, o);
                break;
              case "textarea":
                ed(i, o);
                break;
              case "select":
                var m = i._wrapperState.wasMultiple;
                i._wrapperState.wasMultiple = !!o.multiple;
                var v = o.value;
                v != null ? rr(i, !!o.multiple, v, !1) : m !== !!o.multiple && (o.defaultValue != null ? rr(
                  i,
                  !!o.multiple,
                  o.defaultValue,
                  !0
                ) : rr(i, !!o.multiple, o.multiple ? [] : "", !1));
            }
            i[ii] = o;
          } catch (_) {
            ae(e, e.return, _);
          }
      }
      break;
    case 6:
      if (ot(t, e), wt(e), r & 4) {
        if (e.stateNode === null)
          throw Error(w(162));
        i = e.stateNode, o = e.memoizedProps;
        try {
          i.nodeValue = o;
        } catch (_) {
          ae(e, e.return, _);
        }
      }
      break;
    case 3:
      if (ot(t, e), wt(e), r & 4 && n !== null && n.memoizedState.isDehydrated)
        try {
          br(t.containerInfo);
        } catch (_) {
          ae(e, e.return, _);
        }
      break;
    case 4:
      ot(t, e), wt(e);
      break;
    case 13:
      ot(t, e), wt(e), i = e.child, i.flags & 8192 && (o = i.memoizedState !== null, i.stateNode.isHidden = o, !o || i.alternate !== null && i.alternate.memoizedState !== null || (Zs = se())), r & 4 && ic(e);
      break;
    case 22:
      if (f = n !== null && n.memoizedState !== null, e.mode & 1 ? (Te = (u = Te) || f, ot(t, e), Te = u) : ot(t, e), wt(e), r & 8192) {
        if (u = e.memoizedState !== null, (e.stateNode.isHidden = u) && !f && e.mode & 1)
          for (D = e, f = e.child; f !== null; ) {
            for (h = D = f; D !== null; ) {
              switch (m = D, v = m.child, m.tag) {
                case 0:
                case 11:
                case 14:
                case 15:
                  Yr(4, m, m.return);
                  break;
                case 1:
                  tr(m, m.return);
                  var y = m.stateNode;
                  if (typeof y.componentWillUnmount == "function") {
                    r = m, n = m.return;
                    try {
                      t = r, y.props = t.memoizedProps, y.state = t.memoizedState, y.componentWillUnmount();
                    } catch (_) {
                      ae(r, n, _);
                    }
                  }
                  break;
                case 5:
                  tr(m, m.return);
                  break;
                case 22:
                  if (m.memoizedState !== null) {
                    ac(h);
                    continue;
                  }
              }
              v !== null ? (v.return = m, D = v) : ac(h);
            }
            f = f.sibling;
          }
        e:
          for (f = null, h = e; ; ) {
            if (h.tag === 5) {
              if (f === null) {
                f = h;
                try {
                  i = h.stateNode, u ? (o = i.style, typeof o.setProperty == "function" ? o.setProperty("display", "none", "important") : o.display = "none") : (l = h.stateNode, s = h.memoizedProps.style, a = s != null && s.hasOwnProperty("display") ? s.display : null, l.style.display = rd("display", a));
                } catch (_) {
                  ae(e, e.return, _);
                }
              }
            } else if (h.tag === 6) {
              if (f === null)
                try {
                  h.stateNode.nodeValue = u ? "" : h.memoizedProps;
                } catch (_) {
                  ae(e, e.return, _);
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
              f === h && (f = null), h = h.return;
            }
            f === h && (f = null), h.sibling.return = h.return, h = h.sibling;
          }
      }
      break;
    case 19:
      ot(t, e), wt(e), r & 4 && ic(e);
      break;
    case 21:
      break;
    default:
      ot(
        t,
        e
      ), wt(e);
  }
}
function wt(e) {
  var t = e.flags;
  if (t & 2) {
    try {
      e: {
        for (var n = e.return; n !== null; ) {
          if (Mf(n)) {
            var r = n;
            break e;
          }
          n = n.return;
        }
        throw Error(w(160));
      }
      switch (r.tag) {
        case 5:
          var i = r.stateNode;
          r.flags & 32 && (Kr(i, ""), r.flags &= -33);
          var o = rc(e);
          Fl(e, o, i);
          break;
        case 3:
        case 4:
          var a = r.stateNode.containerInfo, l = rc(e);
          $l(e, l, a);
          break;
        default:
          throw Error(w(161));
      }
    } catch (s) {
      ae(e, e.return, s);
    }
    e.flags &= -3;
  }
  t & 4096 && (e.flags &= -4097);
}
function Mm(e, t, n) {
  D = e, If(e);
}
function If(e, t, n) {
  for (var r = (e.mode & 1) !== 0; D !== null; ) {
    var i = D, o = i.child;
    if (i.tag === 22 && r) {
      var a = i.memoizedState !== null || Yi;
      if (!a) {
        var l = i.alternate, s = l !== null && l.memoizedState !== null || Te;
        l = Yi;
        var u = Te;
        if (Yi = a, (Te = s) && !u)
          for (D = i; D !== null; )
            a = D, s = a.child, a.tag === 22 && a.memoizedState !== null ? lc(i) : s !== null ? (s.return = a, D = s) : lc(i);
        for (; o !== null; )
          D = o, If(o), o = o.sibling;
        D = i, Yi = l, Te = u;
      }
      oc(e);
    } else
      i.subtreeFlags & 8772 && o !== null ? (o.return = i, D = o) : oc(e);
  }
}
function oc(e) {
  for (; D !== null; ) {
    var t = D;
    if (t.flags & 8772) {
      var n = t.alternate;
      try {
        if (t.flags & 8772)
          switch (t.tag) {
            case 0:
            case 11:
            case 15:
              Te || na(5, t);
              break;
            case 1:
              var r = t.stateNode;
              if (t.flags & 4 && !Te)
                if (n === null)
                  r.componentDidMount();
                else {
                  var i = t.elementType === t.type ? n.memoizedProps : at(t.type, n.memoizedProps);
                  r.componentDidUpdate(i, n.memoizedState, r.__reactInternalSnapshotBeforeUpdate);
                }
              var o = t.updateQueue;
              o !== null && Wu(t, o, r);
              break;
            case 3:
              var a = t.updateQueue;
              if (a !== null) {
                if (n = null, t.child !== null)
                  switch (t.child.tag) {
                    case 5:
                      n = t.child.stateNode;
                      break;
                    case 1:
                      n = t.child.stateNode;
                  }
                Wu(t, a, n);
              }
              break;
            case 5:
              var l = t.stateNode;
              if (n === null && t.flags & 4) {
                n = l;
                var s = t.memoizedProps;
                switch (t.type) {
                  case "button":
                  case "input":
                  case "select":
                  case "textarea":
                    s.autoFocus && n.focus();
                    break;
                  case "img":
                    s.src && (n.src = s.src);
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
                  var f = u.memoizedState;
                  if (f !== null) {
                    var h = f.dehydrated;
                    h !== null && br(h);
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
              throw Error(w(163));
          }
        Te || t.flags & 512 && Al(t);
      } catch (m) {
        ae(t, t.return, m);
      }
    }
    if (t === e) {
      D = null;
      break;
    }
    if (n = t.sibling, n !== null) {
      n.return = t.return, D = n;
      break;
    }
    D = t.return;
  }
}
function ac(e) {
  for (; D !== null; ) {
    var t = D;
    if (t === e) {
      D = null;
      break;
    }
    var n = t.sibling;
    if (n !== null) {
      n.return = t.return, D = n;
      break;
    }
    D = t.return;
  }
}
function lc(e) {
  for (; D !== null; ) {
    var t = D;
    try {
      switch (t.tag) {
        case 0:
        case 11:
        case 15:
          var n = t.return;
          try {
            na(4, t);
          } catch (s) {
            ae(t, n, s);
          }
          break;
        case 1:
          var r = t.stateNode;
          if (typeof r.componentDidMount == "function") {
            var i = t.return;
            try {
              r.componentDidMount();
            } catch (s) {
              ae(t, i, s);
            }
          }
          var o = t.return;
          try {
            Al(t);
          } catch (s) {
            ae(t, o, s);
          }
          break;
        case 5:
          var a = t.return;
          try {
            Al(t);
          } catch (s) {
            ae(t, a, s);
          }
      }
    } catch (s) {
      ae(t, t.return, s);
    }
    if (t === e) {
      D = null;
      break;
    }
    var l = t.sibling;
    if (l !== null) {
      l.return = t.return, D = l;
      break;
    }
    D = t.return;
  }
}
var Lm = Math.ceil, Do = Ht.ReactCurrentDispatcher, Vs = Ht.ReactCurrentOwner, tt = Ht.ReactCurrentBatchConfig, F = 0, ve = null, fe = null, _e = 0, He = 0, nr = yn(0), he = 0, ci = null, Rn = 0, ra = 0, Ws = 0, Br = null, Ae = null, Zs = 0, vr = 1 / 0, Mt = null, Po = !1, Vl = null, sn = null, Bi = !1, en = null, Mo = 0, Qr = 0, Wl = null, oo = -1, ao = 0;
function Re() {
  return F & 6 ? se() : oo !== -1 ? oo : oo = se();
}
function un(e) {
  return e.mode & 1 ? F & 2 && _e !== 0 ? _e & -_e : mm.transition !== null ? (ao === 0 && (ao = vd()), ao) : (e = B, e !== 0 || (e = window.event, e = e === void 0 ? 16 : xd(e.type)), e) : 1;
}
function dt(e, t, n, r) {
  if (50 < Qr)
    throw Qr = 0, Wl = null, Error(w(185));
  Ei(e, n, r), (!(F & 2) || e !== ve) && (e === ve && (!(F & 2) && (ra |= n), he === 4 && qt(e, _e)), Ze(e, r), n === 1 && F === 0 && !(t.mode & 1) && (vr = se() + 500, bo && wn()));
}
function Ze(e, t) {
  var n = e.callbackNode;
  mh(e, t);
  var r = ho(e, e === ve ? _e : 0);
  if (r === 0)
    n !== null && vu(n), e.callbackNode = null, e.callbackPriority = 0;
  else if (t = r & -r, e.callbackPriority !== t) {
    if (n != null && vu(n), t === 1)
      e.tag === 0 ? hm(sc.bind(null, e)) : Wd(sc.bind(null, e)), cm(function() {
        !(F & 6) && wn();
      }), n = null;
    else {
      switch (gd(r)) {
        case 1:
          n = ms;
          break;
        case 4:
          n = hd;
          break;
        case 16:
          n = po;
          break;
        case 536870912:
          n = md;
          break;
        default:
          n = po;
      }
      n = Wf(n, zf.bind(null, e));
    }
    e.callbackPriority = t, e.callbackNode = n;
  }
}
function zf(e, t) {
  if (oo = -1, ao = 0, F & 6)
    throw Error(w(327));
  var n = e.callbackNode;
  if (sr() && e.callbackNode !== n)
    return null;
  var r = ho(e, e === ve ? _e : 0);
  if (r === 0)
    return null;
  if (r & 30 || r & e.expiredLanes || t)
    t = Lo(e, r);
  else {
    t = r;
    var i = F;
    F |= 2;
    var o = Uf();
    (ve !== e || _e !== t) && (Mt = null, vr = se() + 500, Nn(e, t));
    do
      try {
        zm();
        break;
      } catch (l) {
        jf(e, l);
      }
    while (!0);
    Os(), Do.current = o, F = i, fe !== null ? t = 0 : (ve = null, _e = 0, t = he);
  }
  if (t !== 0) {
    if (t === 2 && (i = ml(e), i !== 0 && (r = i, t = Zl(e, i))), t === 1)
      throw n = ci, Nn(e, 0), qt(e, r), Ze(e, se()), n;
    if (t === 6)
      qt(e, r);
    else {
      if (i = e.current.alternate, !(r & 30) && !Rm(i) && (t = Lo(e, r), t === 2 && (o = ml(e), o !== 0 && (r = o, t = Zl(e, o))), t === 1))
        throw n = ci, Nn(e, 0), qt(e, r), Ze(e, se()), n;
      switch (e.finishedWork = i, e.finishedLanes = r, t) {
        case 0:
        case 1:
          throw Error(w(345));
        case 2:
          Sn(e, Ae, Mt);
          break;
        case 3:
          if (qt(e, r), (r & 130023424) === r && (t = Zs + 500 - se(), 10 < t)) {
            if (ho(e, 0) !== 0)
              break;
            if (i = e.suspendedLanes, (i & r) !== r) {
              Re(), e.pingedLanes |= e.suspendedLanes & i;
              break;
            }
            e.timeoutHandle = xl(Sn.bind(null, e, Ae, Mt), t);
            break;
          }
          Sn(e, Ae, Mt);
          break;
        case 4:
          if (qt(e, r), (r & 4194240) === r)
            break;
          for (t = e.eventTimes, i = -1; 0 < r; ) {
            var a = 31 - ct(r);
            o = 1 << a, a = t[a], a > i && (i = a), r &= ~o;
          }
          if (r = i, r = se() - r, r = (120 > r ? 120 : 480 > r ? 480 : 1080 > r ? 1080 : 1920 > r ? 1920 : 3e3 > r ? 3e3 : 4320 > r ? 4320 : 1960 * Lm(r / 1960)) - r, 10 < r) {
            e.timeoutHandle = xl(Sn.bind(null, e, Ae, Mt), r);
            break;
          }
          Sn(e, Ae, Mt);
          break;
        case 5:
          Sn(e, Ae, Mt);
          break;
        default:
          throw Error(w(329));
      }
    }
  }
  return Ze(e, se()), e.callbackNode === n ? zf.bind(null, e) : null;
}
function Zl(e, t) {
  var n = Br;
  return e.current.memoizedState.isDehydrated && (Nn(e, t).flags |= 256), e = Lo(e, t), e !== 2 && (t = Ae, Ae = n, t !== null && Hl(t)), e;
}
function Hl(e) {
  Ae === null ? Ae = e : Ae.push.apply(Ae, e);
}
function Rm(e) {
  for (var t = e; ; ) {
    if (t.flags & 16384) {
      var n = t.updateQueue;
      if (n !== null && (n = n.stores, n !== null))
        for (var r = 0; r < n.length; r++) {
          var i = n[r], o = i.getSnapshot;
          i = i.value;
          try {
            if (!ht(o(), i))
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
function qt(e, t) {
  for (t &= ~Ws, t &= ~ra, e.suspendedLanes |= t, e.pingedLanes &= ~t, e = e.expirationTimes; 0 < t; ) {
    var n = 31 - ct(t), r = 1 << n;
    e[n] = -1, t &= ~r;
  }
}
function sc(e) {
  if (F & 6)
    throw Error(w(327));
  sr();
  var t = ho(e, 0);
  if (!(t & 1))
    return Ze(e, se()), null;
  var n = Lo(e, t);
  if (e.tag !== 0 && n === 2) {
    var r = ml(e);
    r !== 0 && (t = r, n = Zl(e, r));
  }
  if (n === 1)
    throw n = ci, Nn(e, 0), qt(e, t), Ze(e, se()), n;
  if (n === 6)
    throw Error(w(345));
  return e.finishedWork = e.current.alternate, e.finishedLanes = t, Sn(e, Ae, Mt), Ze(e, se()), null;
}
function Hs(e, t) {
  var n = F;
  F |= 1;
  try {
    return e(t);
  } finally {
    F = n, F === 0 && (vr = se() + 500, bo && wn());
  }
}
function In(e) {
  en !== null && en.tag === 0 && !(F & 6) && sr();
  var t = F;
  F |= 1;
  var n = tt.transition, r = B;
  try {
    if (tt.transition = null, B = 1, e)
      return e();
  } finally {
    B = r, tt.transition = n, F = t, !(F & 6) && wn();
  }
}
function Ys() {
  He = nr.current, b(nr);
}
function Nn(e, t) {
  e.finishedWork = null, e.finishedLanes = 0;
  var n = e.timeoutHandle;
  if (n !== -1 && (e.timeoutHandle = -1, um(n)), fe !== null)
    for (n = fe.return; n !== null; ) {
      var r = n;
      switch (Ts(r), r.tag) {
        case 1:
          r = r.type.childContextTypes, r != null && wo();
          break;
        case 3:
          hr(), b(Ve), b(Ee), Is();
          break;
        case 5:
          Rs(r);
          break;
        case 4:
          hr();
          break;
        case 13:
          b(re);
          break;
        case 19:
          b(re);
          break;
        case 10:
          Ds(r.type._context);
          break;
        case 22:
        case 23:
          Ys();
      }
      n = n.return;
    }
  if (ve = e, fe = e = cn(e.current, null), _e = He = t, he = 0, ci = null, Ws = ra = Rn = 0, Ae = Br = null, Tn !== null) {
    for (t = 0; t < Tn.length; t++)
      if (n = Tn[t], r = n.interleaved, r !== null) {
        n.interleaved = null;
        var i = r.next, o = n.pending;
        if (o !== null) {
          var a = o.next;
          o.next = i, r.next = a;
        }
        n.pending = r;
      }
    Tn = null;
  }
  return e;
}
function jf(e, t) {
  do {
    var n = fe;
    try {
      if (Os(), no.current = Oo, No) {
        for (var r = ie.memoizedState; r !== null; ) {
          var i = r.queue;
          i !== null && (i.pending = null), r = r.next;
        }
        No = !1;
      }
      if (Ln = 0, me = pe = ie = null, Hr = !1, li = 0, Vs.current = null, n === null || n.return === null) {
        he = 1, ci = t, fe = null;
        break;
      }
      e: {
        var o = e, a = n.return, l = n, s = t;
        if (t = _e, l.flags |= 32768, s !== null && typeof s == "object" && typeof s.then == "function") {
          var u = s, f = l, h = f.tag;
          if (!(f.mode & 1) && (h === 0 || h === 11 || h === 15)) {
            var m = f.alternate;
            m ? (f.updateQueue = m.updateQueue, f.memoizedState = m.memoizedState, f.lanes = m.lanes) : (f.updateQueue = null, f.memoizedState = null);
          }
          var v = Ku(a);
          if (v !== null) {
            v.flags &= -257, Xu(v, a, l, o, t), v.mode & 1 && Gu(o, u, t), t = v, s = u;
            var y = t.updateQueue;
            if (y === null) {
              var _ = /* @__PURE__ */ new Set();
              _.add(s), t.updateQueue = _;
            } else
              y.add(s);
            break e;
          } else {
            if (!(t & 1)) {
              Gu(o, u, t), Bs();
              break e;
            }
            s = Error(w(426));
          }
        } else if (ee && l.mode & 1) {
          var R = Ku(a);
          if (R !== null) {
            !(R.flags & 65536) && (R.flags |= 256), Xu(R, a, l, o, t), Es(mr(s, l));
            break e;
          }
        }
        o = s = mr(s, l), he !== 4 && (he = 2), Br === null ? Br = [o] : Br.push(o), o = a;
        do {
          switch (o.tag) {
            case 3:
              o.flags |= 65536, t &= -t, o.lanes |= t;
              var c = wf(o, s, t);
              Vu(o, c);
              break e;
            case 1:
              l = s;
              var d = o.type, p = o.stateNode;
              if (!(o.flags & 128) && (typeof d.getDerivedStateFromError == "function" || p !== null && typeof p.componentDidCatch == "function" && (sn === null || !sn.has(p)))) {
                o.flags |= 65536, t &= -t, o.lanes |= t;
                var g = _f(o, l, t);
                Vu(o, g);
                break e;
              }
          }
          o = o.return;
        } while (o !== null);
      }
      $f(n);
    } catch (T) {
      t = T, fe === n && n !== null && (fe = n = n.return);
      continue;
    }
    break;
  } while (!0);
}
function Uf() {
  var e = Do.current;
  return Do.current = Oo, e === null ? Oo : e;
}
function Bs() {
  (he === 0 || he === 3 || he === 2) && (he = 4), ve === null || !(Rn & 268435455) && !(ra & 268435455) || qt(ve, _e);
}
function Lo(e, t) {
  var n = F;
  F |= 2;
  var r = Uf();
  (ve !== e || _e !== t) && (Mt = null, Nn(e, t));
  do
    try {
      Im();
      break;
    } catch (i) {
      jf(e, i);
    }
  while (!0);
  if (Os(), F = n, Do.current = r, fe !== null)
    throw Error(w(261));
  return ve = null, _e = 0, he;
}
function Im() {
  for (; fe !== null; )
    Af(fe);
}
function zm() {
  for (; fe !== null && !ah(); )
    Af(fe);
}
function Af(e) {
  var t = Vf(e.alternate, e, He);
  e.memoizedProps = e.pendingProps, t === null ? $f(e) : fe = t, Vs.current = null;
}
function $f(e) {
  var t = e;
  do {
    var n = t.alternate;
    if (e = t.return, t.flags & 32768) {
      if (n = Om(n, t), n !== null) {
        n.flags &= 32767, fe = n;
        return;
      }
      if (e !== null)
        e.flags |= 32768, e.subtreeFlags = 0, e.deletions = null;
      else {
        he = 6, fe = null;
        return;
      }
    } else if (n = Nm(n, t, He), n !== null) {
      fe = n;
      return;
    }
    if (t = t.sibling, t !== null) {
      fe = t;
      return;
    }
    fe = t = e;
  } while (t !== null);
  he === 0 && (he = 5);
}
function Sn(e, t, n) {
  var r = B, i = tt.transition;
  try {
    tt.transition = null, B = 1, jm(e, t, n, r);
  } finally {
    tt.transition = i, B = r;
  }
  return null;
}
function jm(e, t, n, r) {
  do
    sr();
  while (en !== null);
  if (F & 6)
    throw Error(w(327));
  n = e.finishedWork;
  var i = e.finishedLanes;
  if (n === null)
    return null;
  if (e.finishedWork = null, e.finishedLanes = 0, n === e.current)
    throw Error(w(177));
  e.callbackNode = null, e.callbackPriority = 0;
  var o = n.lanes | n.childLanes;
  if (vh(e, o), e === ve && (fe = ve = null, _e = 0), !(n.subtreeFlags & 2064) && !(n.flags & 2064) || Bi || (Bi = !0, Wf(po, function() {
    return sr(), null;
  })), o = (n.flags & 15990) !== 0, n.subtreeFlags & 15990 || o) {
    o = tt.transition, tt.transition = null;
    var a = B;
    B = 1;
    var l = F;
    F |= 4, Vs.current = null, Pm(e, n), Rf(n, e), nm(kl), mo = !!_l, kl = _l = null, e.current = n, Mm(n), lh(), F = l, B = a, tt.transition = o;
  } else
    e.current = n;
  if (Bi && (Bi = !1, en = e, Mo = i), o = e.pendingLanes, o === 0 && (sn = null), ch(n.stateNode), Ze(e, se()), t !== null)
    for (r = e.onRecoverableError, n = 0; n < t.length; n++)
      i = t[n], r(i.value, { componentStack: i.stack, digest: i.digest });
  if (Po)
    throw Po = !1, e = Vl, Vl = null, e;
  return Mo & 1 && e.tag !== 0 && sr(), o = e.pendingLanes, o & 1 ? e === Wl ? Qr++ : (Qr = 0, Wl = e) : Qr = 0, wn(), null;
}
function sr() {
  if (en !== null) {
    var e = gd(Mo), t = tt.transition, n = B;
    try {
      if (tt.transition = null, B = 16 > e ? 16 : e, en === null)
        var r = !1;
      else {
        if (e = en, en = null, Mo = 0, F & 6)
          throw Error(w(331));
        var i = F;
        for (F |= 4, D = e.current; D !== null; ) {
          var o = D, a = o.child;
          if (D.flags & 16) {
            var l = o.deletions;
            if (l !== null) {
              for (var s = 0; s < l.length; s++) {
                var u = l[s];
                for (D = u; D !== null; ) {
                  var f = D;
                  switch (f.tag) {
                    case 0:
                    case 11:
                    case 15:
                      Yr(8, f, o);
                  }
                  var h = f.child;
                  if (h !== null)
                    h.return = f, D = h;
                  else
                    for (; D !== null; ) {
                      f = D;
                      var m = f.sibling, v = f.return;
                      if (Pf(f), f === u) {
                        D = null;
                        break;
                      }
                      if (m !== null) {
                        m.return = v, D = m;
                        break;
                      }
                      D = v;
                    }
                }
              }
              var y = o.alternate;
              if (y !== null) {
                var _ = y.child;
                if (_ !== null) {
                  y.child = null;
                  do {
                    var R = _.sibling;
                    _.sibling = null, _ = R;
                  } while (_ !== null);
                }
              }
              D = o;
            }
          }
          if (o.subtreeFlags & 2064 && a !== null)
            a.return = o, D = a;
          else
            e:
              for (; D !== null; ) {
                if (o = D, o.flags & 2048)
                  switch (o.tag) {
                    case 0:
                    case 11:
                    case 15:
                      Yr(9, o, o.return);
                  }
                var c = o.sibling;
                if (c !== null) {
                  c.return = o.return, D = c;
                  break e;
                }
                D = o.return;
              }
        }
        var d = e.current;
        for (D = d; D !== null; ) {
          a = D;
          var p = a.child;
          if (a.subtreeFlags & 2064 && p !== null)
            p.return = a, D = p;
          else
            e:
              for (a = d; D !== null; ) {
                if (l = D, l.flags & 2048)
                  try {
                    switch (l.tag) {
                      case 0:
                      case 11:
                      case 15:
                        na(9, l);
                    }
                  } catch (T) {
                    ae(l, l.return, T);
                  }
                if (l === a) {
                  D = null;
                  break e;
                }
                var g = l.sibling;
                if (g !== null) {
                  g.return = l.return, D = g;
                  break e;
                }
                D = l.return;
              }
        }
        if (F = i, wn(), xt && typeof xt.onPostCommitFiberRoot == "function")
          try {
            xt.onPostCommitFiberRoot(Go, e);
          } catch {
          }
        r = !0;
      }
      return r;
    } finally {
      B = n, tt.transition = t;
    }
  }
  return !1;
}
function uc(e, t, n) {
  t = mr(n, t), t = wf(e, t, 1), e = ln(e, t, 1), t = Re(), e !== null && (Ei(e, 1, t), Ze(e, t));
}
function ae(e, t, n) {
  if (e.tag === 3)
    uc(e, e, n);
  else
    for (; t !== null; ) {
      if (t.tag === 3) {
        uc(t, e, n);
        break;
      } else if (t.tag === 1) {
        var r = t.stateNode;
        if (typeof t.type.getDerivedStateFromError == "function" || typeof r.componentDidCatch == "function" && (sn === null || !sn.has(r))) {
          e = mr(n, e), e = _f(t, e, 1), t = ln(t, e, 1), e = Re(), t !== null && (Ei(t, 1, e), Ze(t, e));
          break;
        }
      }
      t = t.return;
    }
}
function Um(e, t, n) {
  var r = e.pingCache;
  r !== null && r.delete(t), t = Re(), e.pingedLanes |= e.suspendedLanes & n, ve === e && (_e & n) === n && (he === 4 || he === 3 && (_e & 130023424) === _e && 500 > se() - Zs ? Nn(e, 0) : Ws |= n), Ze(e, t);
}
function Ff(e, t) {
  t === 0 && (e.mode & 1 ? (t = ji, ji <<= 1, !(ji & 130023424) && (ji = 4194304)) : t = 1);
  var n = Re();
  e = Vt(e, t), e !== null && (Ei(e, t, n), Ze(e, n));
}
function Am(e) {
  var t = e.memoizedState, n = 0;
  t !== null && (n = t.retryLane), Ff(e, n);
}
function $m(e, t) {
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
      throw Error(w(314));
  }
  r !== null && r.delete(t), Ff(e, n);
}
var Vf;
Vf = function(e, t, n) {
  if (e !== null)
    if (e.memoizedProps !== t.pendingProps || Ve.current)
      Fe = !0;
    else {
      if (!(e.lanes & n) && !(t.flags & 128))
        return Fe = !1, Em(e, t, n);
      Fe = !!(e.flags & 131072);
    }
  else
    Fe = !1, ee && t.flags & 1048576 && Zd(t, So, t.index);
  switch (t.lanes = 0, t.tag) {
    case 2:
      var r = t.type;
      io(e, t), e = t.pendingProps;
      var i = dr(t, Ee.current);
      lr(t, n), i = js(null, t, r, e, i, n);
      var o = Us();
      return t.flags |= 1, typeof i == "object" && i !== null && typeof i.render == "function" && i.$$typeof === void 0 ? (t.tag = 1, t.memoizedState = null, t.updateQueue = null, We(r) ? (o = !0, _o(t)) : o = !1, t.memoizedState = i.state !== null && i.state !== void 0 ? i.state : null, Ms(t), i.updater = ea, t.stateNode = i, i._reactInternals = t, Pl(t, r, e, n), t = Rl(null, t, r, !0, o, n)) : (t.tag = 0, ee && o && Cs(t), Me(null, t, i, n), t = t.child), t;
    case 16:
      r = t.elementType;
      e: {
        switch (io(e, t), e = t.pendingProps, i = r._init, r = i(r._payload), t.type = r, i = t.tag = Vm(r), e = at(r, e), i) {
          case 0:
            t = Ll(null, t, r, e, n);
            break e;
          case 1:
            t = bu(null, t, r, e, n);
            break e;
          case 11:
            t = qu(null, t, r, e, n);
            break e;
          case 14:
            t = Ju(null, t, r, at(r.type, e), n);
            break e;
        }
        throw Error(w(
          306,
          r,
          ""
        ));
      }
      return t;
    case 0:
      return r = t.type, i = t.pendingProps, i = t.elementType === r ? i : at(r, i), Ll(e, t, r, i, n);
    case 1:
      return r = t.type, i = t.pendingProps, i = t.elementType === r ? i : at(r, i), bu(e, t, r, i, n);
    case 3:
      e: {
        if (Cf(t), e === null)
          throw Error(w(387));
        r = t.pendingProps, o = t.memoizedState, i = o.element, Qd(e, t), To(t, r, null, n);
        var a = t.memoizedState;
        if (r = a.element, o.isDehydrated)
          if (o = { element: r, isDehydrated: !1, cache: a.cache, pendingSuspenseBoundaries: a.pendingSuspenseBoundaries, transitions: a.transitions }, t.updateQueue.baseState = o, t.memoizedState = o, t.flags & 256) {
            i = mr(Error(w(423)), t), t = ec(e, t, r, n, i);
            break e;
          } else if (r !== i) {
            i = mr(Error(w(424)), t), t = ec(e, t, r, n, i);
            break e;
          } else
            for (Ye = an(t.stateNode.containerInfo.firstChild), Be = t, ee = !0, st = null, n = qd(t, null, r, n), t.child = n; n; )
              n.flags = n.flags & -3 | 4096, n = n.sibling;
        else {
          if (fr(), r === i) {
            t = Wt(e, t, n);
            break e;
          }
          Me(e, t, r, n);
        }
        t = t.child;
      }
      return t;
    case 5:
      return Jd(t), e === null && Nl(t), r = t.type, i = t.pendingProps, o = e !== null ? e.memoizedProps : null, a = i.children, Sl(r, i) ? a = null : o !== null && Sl(r, o) && (t.flags |= 32), xf(e, t), Me(e, t, a, n), t.child;
    case 6:
      return e === null && Nl(t), null;
    case 13:
      return Tf(e, t, n);
    case 4:
      return Ls(t, t.stateNode.containerInfo), r = t.pendingProps, e === null ? t.child = pr(t, null, r, n) : Me(e, t, r, n), t.child;
    case 11:
      return r = t.type, i = t.pendingProps, i = t.elementType === r ? i : at(r, i), qu(e, t, r, i, n);
    case 7:
      return Me(e, t, t.pendingProps, n), t.child;
    case 8:
      return Me(e, t, t.pendingProps.children, n), t.child;
    case 12:
      return Me(e, t, t.pendingProps.children, n), t.child;
    case 10:
      e: {
        if (r = t.type._context, i = t.pendingProps, o = t.memoizedProps, a = i.value, G(xo, r._currentValue), r._currentValue = a, o !== null)
          if (ht(o.value, a)) {
            if (o.children === i.children && !Ve.current) {
              t = Wt(e, t, n);
              break e;
            }
          } else
            for (o = t.child, o !== null && (o.return = t); o !== null; ) {
              var l = o.dependencies;
              if (l !== null) {
                a = o.child;
                for (var s = l.firstContext; s !== null; ) {
                  if (s.context === r) {
                    if (o.tag === 1) {
                      s = Ut(-1, n & -n), s.tag = 2;
                      var u = o.updateQueue;
                      if (u !== null) {
                        u = u.shared;
                        var f = u.pending;
                        f === null ? s.next = s : (s.next = f.next, f.next = s), u.pending = s;
                      }
                    }
                    o.lanes |= n, s = o.alternate, s !== null && (s.lanes |= n), Ol(
                      o.return,
                      n,
                      t
                    ), l.lanes |= n;
                    break;
                  }
                  s = s.next;
                }
              } else if (o.tag === 10)
                a = o.type === t.type ? null : o.child;
              else if (o.tag === 18) {
                if (a = o.return, a === null)
                  throw Error(w(341));
                a.lanes |= n, l = a.alternate, l !== null && (l.lanes |= n), Ol(a, n, t), a = o.sibling;
              } else
                a = o.child;
              if (a !== null)
                a.return = o;
              else
                for (a = o; a !== null; ) {
                  if (a === t) {
                    a = null;
                    break;
                  }
                  if (o = a.sibling, o !== null) {
                    o.return = a.return, a = o;
                    break;
                  }
                  a = a.return;
                }
              o = a;
            }
        Me(e, t, i.children, n), t = t.child;
      }
      return t;
    case 9:
      return i = t.type, r = t.pendingProps.children, lr(t, n), i = nt(i), r = r(i), t.flags |= 1, Me(e, t, r, n), t.child;
    case 14:
      return r = t.type, i = at(r, t.pendingProps), i = at(r.type, i), Ju(e, t, r, i, n);
    case 15:
      return kf(e, t, t.type, t.pendingProps, n);
    case 17:
      return r = t.type, i = t.pendingProps, i = t.elementType === r ? i : at(r, i), io(e, t), t.tag = 1, We(r) ? (e = !0, _o(t)) : e = !1, lr(t, n), Kd(t, r, i), Pl(t, r, i, n), Rl(null, t, r, !0, e, n);
    case 19:
      return Ef(e, t, n);
    case 22:
      return Sf(e, t, n);
  }
  throw Error(w(156, t.tag));
};
function Wf(e, t) {
  return pd(e, t);
}
function Fm(e, t, n, r) {
  this.tag = e, this.key = n, this.sibling = this.child = this.return = this.stateNode = this.type = this.elementType = null, this.index = 0, this.ref = null, this.pendingProps = t, this.dependencies = this.memoizedState = this.updateQueue = this.memoizedProps = null, this.mode = r, this.subtreeFlags = this.flags = 0, this.deletions = null, this.childLanes = this.lanes = 0, this.alternate = null;
}
function et(e, t, n, r) {
  return new Fm(e, t, n, r);
}
function Qs(e) {
  return e = e.prototype, !(!e || !e.isReactComponent);
}
function Vm(e) {
  if (typeof e == "function")
    return Qs(e) ? 1 : 0;
  if (e != null) {
    if (e = e.$$typeof, e === fs)
      return 11;
    if (e === ps)
      return 14;
  }
  return 2;
}
function cn(e, t) {
  var n = e.alternate;
  return n === null ? (n = et(e.tag, t, e.key, e.mode), n.elementType = e.elementType, n.type = e.type, n.stateNode = e.stateNode, n.alternate = e, e.alternate = n) : (n.pendingProps = t, n.type = e.type, n.flags = 0, n.subtreeFlags = 0, n.deletions = null), n.flags = e.flags & 14680064, n.childLanes = e.childLanes, n.lanes = e.lanes, n.child = e.child, n.memoizedProps = e.memoizedProps, n.memoizedState = e.memoizedState, n.updateQueue = e.updateQueue, t = e.dependencies, n.dependencies = t === null ? null : { lanes: t.lanes, firstContext: t.firstContext }, n.sibling = e.sibling, n.index = e.index, n.ref = e.ref, n;
}
function lo(e, t, n, r, i, o) {
  var a = 2;
  if (r = e, typeof e == "function")
    Qs(e) && (a = 1);
  else if (typeof e == "string")
    a = 5;
  else
    e:
      switch (e) {
        case Bn:
          return On(n.children, i, o, t);
        case ds:
          a = 8, i |= 8;
          break;
        case el:
          return e = et(12, n, t, i | 2), e.elementType = el, e.lanes = o, e;
        case tl:
          return e = et(13, n, t, i), e.elementType = tl, e.lanes = o, e;
        case nl:
          return e = et(19, n, t, i), e.elementType = nl, e.lanes = o, e;
        case Xc:
          return ia(n, i, o, t);
        default:
          if (typeof e == "object" && e !== null)
            switch (e.$$typeof) {
              case Gc:
                a = 10;
                break e;
              case Kc:
                a = 9;
                break e;
              case fs:
                a = 11;
                break e;
              case ps:
                a = 14;
                break e;
              case Gt:
                a = 16, r = null;
                break e;
            }
          throw Error(w(130, e == null ? e : typeof e, ""));
      }
  return t = et(a, n, t, i), t.elementType = e, t.type = r, t.lanes = o, t;
}
function On(e, t, n, r) {
  return e = et(7, e, r, t), e.lanes = n, e;
}
function ia(e, t, n, r) {
  return e = et(22, e, r, t), e.elementType = Xc, e.lanes = n, e.stateNode = { isHidden: !1 }, e;
}
function Aa(e, t, n) {
  return e = et(6, e, null, t), e.lanes = n, e;
}
function $a(e, t, n) {
  return t = et(4, e.children !== null ? e.children : [], e.key, t), t.lanes = n, t.stateNode = { containerInfo: e.containerInfo, pendingChildren: null, implementation: e.implementation }, t;
}
function Wm(e, t, n, r, i) {
  this.tag = t, this.containerInfo = e, this.finishedWork = this.pingCache = this.current = this.pendingChildren = null, this.timeoutHandle = -1, this.callbackNode = this.pendingContext = this.context = null, this.callbackPriority = 0, this.eventTimes = wa(0), this.expirationTimes = wa(-1), this.entangledLanes = this.finishedLanes = this.mutableReadLanes = this.expiredLanes = this.pingedLanes = this.suspendedLanes = this.pendingLanes = 0, this.entanglements = wa(0), this.identifierPrefix = r, this.onRecoverableError = i, this.mutableSourceEagerHydrationData = null;
}
function Gs(e, t, n, r, i, o, a, l, s) {
  return e = new Wm(e, t, n, l, s), t === 1 ? (t = 1, o === !0 && (t |= 8)) : t = 0, o = et(3, null, null, t), e.current = o, o.stateNode = e, o.memoizedState = { element: r, isDehydrated: n, cache: null, transitions: null, pendingSuspenseBoundaries: null }, Ms(o), e;
}
function Zm(e, t, n) {
  var r = 3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
  return { $$typeof: Yn, key: r == null ? null : "" + r, children: e, containerInfo: t, implementation: n };
}
function Zf(e) {
  if (!e)
    return fn;
  e = e._reactInternals;
  e: {
    if (Fn(e) !== e || e.tag !== 1)
      throw Error(w(170));
    var t = e;
    do {
      switch (t.tag) {
        case 3:
          t = t.stateNode.context;
          break e;
        case 1:
          if (We(t.type)) {
            t = t.stateNode.__reactInternalMemoizedMergedChildContext;
            break e;
          }
      }
      t = t.return;
    } while (t !== null);
    throw Error(w(171));
  }
  if (e.tag === 1) {
    var n = e.type;
    if (We(n))
      return Vd(e, n, t);
  }
  return t;
}
function Hf(e, t, n, r, i, o, a, l, s) {
  return e = Gs(n, r, !0, e, i, o, a, l, s), e.context = Zf(null), n = e.current, r = Re(), i = un(n), o = Ut(r, i), o.callback = t ?? null, ln(n, o, i), e.current.lanes = i, Ei(e, i, r), Ze(e, r), e;
}
function oa(e, t, n, r) {
  var i = t.current, o = Re(), a = un(i);
  return n = Zf(n), t.context === null ? t.context = n : t.pendingContext = n, t = Ut(o, a), t.payload = { element: e }, r = r === void 0 ? null : r, r !== null && (t.callback = r), e = ln(i, t, a), e !== null && (dt(e, i, a, o), to(e, i, a)), a;
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
function cc(e, t) {
  if (e = e.memoizedState, e !== null && e.dehydrated !== null) {
    var n = e.retryLane;
    e.retryLane = n !== 0 && n < t ? n : t;
  }
}
function Ks(e, t) {
  cc(e, t), (e = e.alternate) && cc(e, t);
}
function Hm() {
  return null;
}
var Yf = typeof reportError == "function" ? reportError : function(e) {
  console.error(e);
};
function Xs(e) {
  this._internalRoot = e;
}
aa.prototype.render = Xs.prototype.render = function(e) {
  var t = this._internalRoot;
  if (t === null)
    throw Error(w(409));
  oa(e, t, null, null);
};
aa.prototype.unmount = Xs.prototype.unmount = function() {
  var e = this._internalRoot;
  if (e !== null) {
    this._internalRoot = null;
    var t = e.containerInfo;
    In(function() {
      oa(null, e, null, null);
    }), t[Ft] = null;
  }
};
function aa(e) {
  this._internalRoot = e;
}
aa.prototype.unstable_scheduleHydration = function(e) {
  if (e) {
    var t = _d();
    e = { blockedOn: null, target: e, priority: t };
    for (var n = 0; n < Xt.length && t !== 0 && t < Xt[n].priority; n++)
      ;
    Xt.splice(n, 0, e), n === 0 && Sd(e);
  }
};
function qs(e) {
  return !(!e || e.nodeType !== 1 && e.nodeType !== 9 && e.nodeType !== 11);
}
function la(e) {
  return !(!e || e.nodeType !== 1 && e.nodeType !== 9 && e.nodeType !== 11 && (e.nodeType !== 8 || e.nodeValue !== " react-mount-point-unstable "));
}
function dc() {
}
function Ym(e, t, n, r, i) {
  if (i) {
    if (typeof r == "function") {
      var o = r;
      r = function() {
        var u = Ro(a);
        o.call(u);
      };
    }
    var a = Hf(t, r, e, 0, null, !1, !1, "", dc);
    return e._reactRootContainer = a, e[Ft] = a.current, ni(e.nodeType === 8 ? e.parentNode : e), In(), a;
  }
  for (; i = e.lastChild; )
    e.removeChild(i);
  if (typeof r == "function") {
    var l = r;
    r = function() {
      var u = Ro(s);
      l.call(u);
    };
  }
  var s = Gs(e, 0, !1, null, null, !1, !1, "", dc);
  return e._reactRootContainer = s, e[Ft] = s.current, ni(e.nodeType === 8 ? e.parentNode : e), In(function() {
    oa(t, s, n, r);
  }), s;
}
function sa(e, t, n, r, i) {
  var o = n._reactRootContainer;
  if (o) {
    var a = o;
    if (typeof i == "function") {
      var l = i;
      i = function() {
        var s = Ro(a);
        l.call(s);
      };
    }
    oa(t, a, e, i);
  } else
    a = Ym(n, t, e, i, r);
  return Ro(a);
}
yd = function(e) {
  switch (e.tag) {
    case 3:
      var t = e.stateNode;
      if (t.current.memoizedState.isDehydrated) {
        var n = Ur(t.pendingLanes);
        n !== 0 && (vs(t, n | 1), Ze(t, se()), !(F & 6) && (vr = se() + 500, wn()));
      }
      break;
    case 13:
      In(function() {
        var r = Vt(e, 1);
        if (r !== null) {
          var i = Re();
          dt(r, e, 1, i);
        }
      }), Ks(e, 1);
  }
};
gs = function(e) {
  if (e.tag === 13) {
    var t = Vt(e, 134217728);
    if (t !== null) {
      var n = Re();
      dt(t, e, 134217728, n);
    }
    Ks(e, 134217728);
  }
};
wd = function(e) {
  if (e.tag === 13) {
    var t = un(e), n = Vt(e, t);
    if (n !== null) {
      var r = Re();
      dt(n, e, t, r);
    }
    Ks(e, t);
  }
};
_d = function() {
  return B;
};
kd = function(e, t) {
  var n = B;
  try {
    return B = e, t();
  } finally {
    B = n;
  }
};
fl = function(e, t, n) {
  switch (t) {
    case "input":
      if (ol(e, n), t = n.name, n.type === "radio" && t != null) {
        for (n = e; n.parentNode; )
          n = n.parentNode;
        for (n = n.querySelectorAll("input[name=" + JSON.stringify("" + t) + '][type="radio"]'), t = 0; t < n.length; t++) {
          var r = n[t];
          if (r !== e && r.form === e.form) {
            var i = Jo(r);
            if (!i)
              throw Error(w(90));
            Jc(r), ol(r, i);
          }
        }
      }
      break;
    case "textarea":
      ed(e, n);
      break;
    case "select":
      t = n.value, t != null && rr(e, !!n.multiple, t, !1);
  }
};
ld = Hs;
sd = In;
var Bm = { usingClientEntryPoint: !1, Events: [Oi, Xn, Jo, od, ad, Hs] }, Mr = { findFiberByHostInstance: Cn, bundleType: 0, version: "18.2.0", rendererPackageName: "react-dom" }, Qm = { bundleType: Mr.bundleType, version: Mr.version, rendererPackageName: Mr.rendererPackageName, rendererConfig: Mr.rendererConfig, overrideHookState: null, overrideHookStateDeletePath: null, overrideHookStateRenamePath: null, overrideProps: null, overridePropsDeletePath: null, overridePropsRenamePath: null, setErrorHandler: null, setSuspenseHandler: null, scheduleUpdate: null, currentDispatcherRef: Ht.ReactCurrentDispatcher, findHostInstanceByFiber: function(e) {
  return e = dd(e), e === null ? null : e.stateNode;
}, findFiberByHostInstance: Mr.findFiberByHostInstance || Hm, findHostInstancesForRefresh: null, scheduleRefresh: null, scheduleRoot: null, setRefreshHandler: null, getCurrentFiber: null, reconcilerVersion: "18.2.0-next-9e3b772b8-20220608" };
if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u") {
  var Qi = __REACT_DEVTOOLS_GLOBAL_HOOK__;
  if (!Qi.isDisabled && Qi.supportsFiber)
    try {
      Go = Qi.inject(Qm), xt = Qi;
    } catch {
    }
}
Ge.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = Bm;
Ge.createPortal = function(e, t) {
  var n = 2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
  if (!qs(t))
    throw Error(w(200));
  return Zm(e, t, null, n);
};
Ge.createRoot = function(e, t) {
  if (!qs(e))
    throw Error(w(299));
  var n = !1, r = "", i = Yf;
  return t != null && (t.unstable_strictMode === !0 && (n = !0), t.identifierPrefix !== void 0 && (r = t.identifierPrefix), t.onRecoverableError !== void 0 && (i = t.onRecoverableError)), t = Gs(e, 1, !1, null, null, n, !1, r, i), e[Ft] = t.current, ni(e.nodeType === 8 ? e.parentNode : e), new Xs(t);
};
Ge.findDOMNode = function(e) {
  if (e == null)
    return null;
  if (e.nodeType === 1)
    return e;
  var t = e._reactInternals;
  if (t === void 0)
    throw typeof e.render == "function" ? Error(w(188)) : (e = Object.keys(e).join(","), Error(w(268, e)));
  return e = dd(t), e = e === null ? null : e.stateNode, e;
};
Ge.flushSync = function(e) {
  return In(e);
};
Ge.hydrate = function(e, t, n) {
  if (!la(t))
    throw Error(w(200));
  return sa(null, e, t, !0, n);
};
Ge.hydrateRoot = function(e, t, n) {
  if (!qs(e))
    throw Error(w(405));
  var r = n != null && n.hydratedSources || null, i = !1, o = "", a = Yf;
  if (n != null && (n.unstable_strictMode === !0 && (i = !0), n.identifierPrefix !== void 0 && (o = n.identifierPrefix), n.onRecoverableError !== void 0 && (a = n.onRecoverableError)), t = Hf(t, null, e, 1, n ?? null, i, !1, o, a), e[Ft] = t.current, ni(e), r)
    for (e = 0; e < r.length; e++)
      n = r[e], i = n._getVersion, i = i(n._source), t.mutableSourceEagerHydrationData == null ? t.mutableSourceEagerHydrationData = [n, i] : t.mutableSourceEagerHydrationData.push(
        n,
        i
      );
  return new aa(t);
};
Ge.render = function(e, t, n) {
  if (!la(t))
    throw Error(w(200));
  return sa(null, e, t, !1, n);
};
Ge.unmountComponentAtNode = function(e) {
  if (!la(e))
    throw Error(w(40));
  return e._reactRootContainer ? (In(function() {
    sa(null, null, e, !1, function() {
      e._reactRootContainer = null, e[Ft] = null;
    });
  }), !0) : !1;
};
Ge.unstable_batchedUpdates = Hs;
Ge.unstable_renderSubtreeIntoContainer = function(e, t, n, r) {
  if (!la(n))
    throw Error(w(200));
  if (e == null || e._reactInternals === void 0)
    throw Error(w(38));
  return sa(e, t, n, !1, r);
};
Ge.version = "18.2.0-next-9e3b772b8-20220608";
function Bf() {
  if (!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" || typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function"))
    try {
      __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(Bf);
    } catch (e) {
      console.error(e);
    }
}
Bf(), Zc.exports = Ge;
var Gm = Zc.exports, Qf, fc = Gm;
Qf = fc.createRoot, fc.hydrateRoot;
var Gf = { exports: {} }, Kf = {};
/**
 * @license React
 * use-sync-external-store-shim.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var gr = de;
function Km(e, t) {
  return e === t && (e !== 0 || 1 / e === 1 / t) || e !== e && t !== t;
}
var Xm = typeof Object.is == "function" ? Object.is : Km, qm = gr.useState, Jm = gr.useEffect, bm = gr.useLayoutEffect, ev = gr.useDebugValue;
function tv(e, t) {
  var n = t(), r = qm({ inst: { value: n, getSnapshot: t } }), i = r[0].inst, o = r[1];
  return bm(function() {
    i.value = n, i.getSnapshot = t, Fa(i) && o({ inst: i });
  }, [e, n, t]), Jm(function() {
    return Fa(i) && o({ inst: i }), e(function() {
      Fa(i) && o({ inst: i });
    });
  }, [e]), ev(n), n;
}
function Fa(e) {
  var t = e.getSnapshot;
  e = e.value;
  try {
    var n = t();
    return !Xm(e, n);
  } catch {
    return !0;
  }
}
function nv(e, t) {
  return t();
}
var rv = typeof window > "u" || typeof window.document > "u" || typeof window.document.createElement > "u" ? nv : tv;
Kf.useSyncExternalStore = gr.useSyncExternalStore !== void 0 ? gr.useSyncExternalStore : rv;
Gf.exports = Kf;
var iv = Gf.exports;
const tn = () => {
}, $e = (
  /*#__NOINLINE__*/
  tn()
), Va = Object, W = (e) => e === $e, jt = (e) => typeof e == "function", pn = (e, t) => ({
  ...e,
  ...t
}), ov = (e) => jt(e.then), Gi = /* @__PURE__ */ new WeakMap();
let av = 0;
const di = (e) => {
  const t = typeof e, n = e && e.constructor, r = n == Date;
  let i, o;
  if (Va(e) === e && !r && n != RegExp) {
    if (i = Gi.get(e), i)
      return i;
    if (i = ++av + "~", Gi.set(e, i), n == Array) {
      for (i = "@", o = 0; o < e.length; o++)
        i += di(e[o]) + ",";
      Gi.set(e, i);
    }
    if (n == Va) {
      i = "#";
      const a = Va.keys(e).sort();
      for (; !W(o = a.pop()); )
        W(e[o]) || (i += o + ":" + di(e[o]) + ",");
      Gi.set(e, i);
    }
  } else
    i = r ? e.toJSON() : t == "symbol" ? e.toString() : t == "string" ? JSON.stringify(e) : "" + e;
  return i;
}, Rt = /* @__PURE__ */ new WeakMap(), Wa = {}, Ki = {}, Js = "undefined", ua = typeof window != Js, Yl = typeof document != Js, lv = () => ua && typeof window.requestAnimationFrame != Js, Xf = (e, t) => {
  const n = Rt.get(e);
  return [
    // Getter
    () => !W(t) && e.get(t) || Wa,
    // Setter
    (r) => {
      if (!W(t)) {
        const i = e.get(t);
        t in Ki || (Ki[t] = i), n[5](t, pn(i, r), i || Wa);
      }
    },
    // Subscriber
    n[6],
    // Get server cache snapshot
    () => !W(t) && t in Ki ? Ki[t] : !W(t) && e.get(t) || Wa
  ];
};
let Bl = !0;
const sv = () => Bl, [Ql, Gl] = ua && window.addEventListener ? [
  window.addEventListener.bind(window),
  window.removeEventListener.bind(window)
] : [
  tn,
  tn
], uv = () => {
  const e = Yl && document.visibilityState;
  return W(e) || e !== "hidden";
}, cv = (e) => (Yl && document.addEventListener("visibilitychange", e), Ql("focus", e), () => {
  Yl && document.removeEventListener("visibilitychange", e), Gl("focus", e);
}), dv = (e) => {
  const t = () => {
    Bl = !0, e();
  }, n = () => {
    Bl = !1;
  };
  return Ql("online", t), Ql("offline", n), () => {
    Gl("online", t), Gl("offline", n);
  };
}, fv = {
  isOnline: sv,
  isVisible: uv
}, pv = {
  initFocus: cv,
  initReconnect: dv
}, pc = !Qo.useId, fi = !ua || "Deno" in window, hv = (e) => lv() ? window.requestAnimationFrame(e) : setTimeout(e, 1), Za = fi ? de.useEffect : de.useLayoutEffect, Ha = typeof navigator < "u" && navigator.connection, hc = !fi && Ha && ([
  "slow-2g",
  "2g"
].includes(Ha.effectiveType) || Ha.saveData), bs = (e) => {
  if (jt(e))
    try {
      e = e();
    } catch {
      e = "";
    }
  const t = e;
  return e = typeof e == "string" ? e : (Array.isArray(e) ? e.length : e) ? di(e) : "", [
    e,
    t
  ];
};
let mv = 0;
const Kl = () => ++mv, qf = 0, Jf = 1, bf = 2, vv = 3;
var Lr = {
  __proto__: null,
  ERROR_REVALIDATE_EVENT: vv,
  FOCUS_EVENT: qf,
  MUTATE_EVENT: bf,
  RECONNECT_EVENT: Jf
};
async function ep(...e) {
  const [t, n, r, i] = e, o = pn({
    populateCache: !0,
    throwOnError: !0
  }, typeof i == "boolean" ? {
    revalidate: i
  } : i || {});
  let a = o.populateCache;
  const l = o.rollbackOnError;
  let s = o.optimisticData;
  const u = o.revalidate !== !1, f = (v) => typeof l == "function" ? l(v) : l !== !1, h = o.throwOnError;
  if (jt(n)) {
    const v = n, y = [], _ = t.keys();
    for (const R of _)
      // Skip the special useSWRInfinite and useSWRSubscription keys.
      !/^\$(inf|sub)\$/.test(R) && v(t.get(R)._k) && y.push(R);
    return Promise.all(y.map(m));
  }
  return m(n);
  async function m(v) {
    const [y] = bs(v);
    if (!y)
      return;
    const [_, R] = Xf(t, y), [c, d, p, g] = Rt.get(t), T = () => {
      const ce = c[y];
      return u && (delete p[y], delete g[y], ce && ce[0]) ? ce[0](bf).then(() => _().data) : _().data;
    };
    if (e.length < 3)
      return T();
    let S = r, x;
    const C = Kl();
    d[y] = [
      C,
      0
    ];
    const V = !W(s), M = _(), ue = M.data, Xe = M._c, Oe = W(Xe) ? ue : Xe;
    if (V && (s = jt(s) ? s(Oe, ue) : s, R({
      data: s,
      _c: Oe
    })), jt(S))
      try {
        S = S(Oe);
      } catch (ce) {
        x = ce;
      }
    if (S && ov(S))
      if (S = await S.catch((ce) => {
        x = ce;
      }), C !== d[y][0]) {
        if (x)
          throw x;
        return S;
      } else
        x && V && f(x) && (a = !0, R({
          data: Oe,
          _c: $e
        }));
    if (a && !x)
      if (jt(a)) {
        const ce = a(S, Oe);
        R({
          data: ce,
          error: $e,
          _c: $e
        });
      } else
        R({
          data: S,
          error: $e,
          _c: $e
        });
    if (d[y][1] = Kl(), Promise.resolve(T()).then(() => {
      R({
        _c: $e
      });
    }), x) {
      if (h)
        throw x;
      return;
    }
    return S;
  }
}
const mc = (e, t) => {
  for (const n in e)
    e[n][0] && e[n][0](t);
}, gv = (e, t) => {
  if (!Rt.has(e)) {
    const n = pn(pv, t), r = {}, i = ep.bind($e, e);
    let o = tn;
    const a = {}, l = (f, h) => {
      const m = a[f] || [];
      return a[f] = m, m.push(h), () => m.splice(m.indexOf(h), 1);
    }, s = (f, h, m) => {
      e.set(f, h);
      const v = a[f];
      if (v)
        for (const y of v)
          y(h, m);
    }, u = () => {
      if (!Rt.has(e) && (Rt.set(e, [
        r,
        {},
        {},
        {},
        i,
        s,
        l
      ]), !fi)) {
        const f = n.initFocus(setTimeout.bind($e, mc.bind($e, r, qf))), h = n.initReconnect(setTimeout.bind($e, mc.bind($e, r, Jf)));
        o = () => {
          f && f(), h && h(), Rt.delete(e);
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
    Rt.get(e)[4]
  ];
}, yv = (e, t, n, r, i) => {
  const o = n.errorRetryCount, a = i.retryCount, l = ~~((Math.random() + 0.5) * (1 << (a < 8 ? a : 8))) * n.errorRetryInterval;
  !W(o) && a > o || setTimeout(r, l, i);
}, wv = (e, t) => di(e) == di(t), [tp, _v] = gv(/* @__PURE__ */ new Map()), kv = pn(
  {
    // events
    onLoadingSlow: tn,
    onSuccess: tn,
    onError: tn,
    onErrorRetry: yv,
    onDiscarded: tn,
    // switches
    revalidateOnFocus: !0,
    revalidateOnReconnect: !0,
    revalidateIfStale: !0,
    shouldRetryOnError: !0,
    // timeouts
    errorRetryInterval: hc ? 1e4 : 5e3,
    focusThrottleInterval: 5 * 1e3,
    dedupingInterval: 2 * 1e3,
    loadingTimeout: hc ? 5e3 : 3e3,
    // providers
    compare: wv,
    isPaused: () => !1,
    cache: tp,
    mutate: _v,
    fallback: {}
  },
  // use web preset by default
  fv
), Sv = (e, t) => {
  const n = pn(e, t);
  if (t) {
    const { use: r, fallback: i } = e, { use: o, fallback: a } = t;
    r && o && (n.use = r.concat(o)), i && a && (n.fallback = pn(i, a));
  }
  return n;
}, xv = de.createContext({}), Cv = "$inf$", np = ua && window.__SWR_DEVTOOLS_USE__, Tv = np ? window.__SWR_DEVTOOLS_USE__ : [], Ev = () => {
  np && (window.__SWR_DEVTOOLS_REACT__ = Qo);
}, Nv = (e) => jt(e[1]) ? [
  e[0],
  e[1],
  e[2] || {}
] : [
  e[0],
  null,
  (e[1] === null ? e[2] : e[1]) || {}
], Ov = () => pn(kv, de.useContext(xv)), Dv = (e) => (t, n, r) => e(t, n && ((...o) => {
  const [a] = bs(t), [, , , l] = Rt.get(tp);
  if (a.startsWith(Cv))
    return n(...o);
  const s = l[a];
  return W(s) ? n(...o) : (delete l[a], s);
}), r), Pv = Tv.concat(Dv), Mv = (e) => function(...n) {
  const r = Ov(), [i, o, a] = Nv(n), l = Sv(r, a);
  let s = e;
  const { use: u } = l, f = (u || []).concat(Pv);
  for (let h = f.length; h--; )
    s = f[h](s);
  return s(i, o || l.fetcher || null, l);
}, Lv = (e, t, n) => {
  const r = t[e] || (t[e] = []);
  return r.push(n), () => {
    const i = r.indexOf(n);
    i >= 0 && (r[i] = r[r.length - 1], r.pop());
  };
};
Ev();
const vc = Qo.use || ((e) => {
  if (e.status === "pending")
    throw e;
  if (e.status === "fulfilled")
    return e.value;
  throw e.status === "rejected" ? e.reason : (e.status = "pending", e.then((t) => {
    e.status = "fulfilled", e.value = t;
  }, (t) => {
    e.status = "rejected", e.reason = t;
  }), e);
}), Ya = {
  dedupe: !0
}, Rv = (e, t, n) => {
  const { cache: r, compare: i, suspense: o, fallbackData: a, revalidateOnMount: l, revalidateIfStale: s, refreshInterval: u, refreshWhenHidden: f, refreshWhenOffline: h, keepPreviousData: m } = n, [v, y, _, R] = Rt.get(r), [c, d] = bs(e), p = de.useRef(!1), g = de.useRef(!1), T = de.useRef(c), S = de.useRef(t), x = de.useRef(n), C = () => x.current, V = () => C().isVisible() && C().isOnline(), [M, ue, Xe, Oe] = Xf(r, c), ce = de.useRef({}).current, ge = W(a) ? n.fallback[c] : a, De = (X, q) => {
    for (const Se in ce) {
      const le = Se;
      if (le === "data") {
        if (!i(X[le], q[le]) && (!W(X[le]) || !i(Yt, q[le])))
          return !1;
      } else if (q[le] !== X[le])
        return !1;
    }
    return !0;
  }, it = de.useMemo(() => {
    const X = !c || !t ? !1 : W(l) ? C().isPaused() || o ? !1 : W(s) ? !0 : s : l, q = (Pe) => {
      const Dt = pn(Pe);
      return delete Dt._k, X ? {
        isValidating: !0,
        isLoading: !0,
        ...Dt
      } : Dt;
    }, Se = M(), le = Oe(), yt = q(Se), Vn = Se === le ? yt : q(le);
    let ye = yt;
    return [
      () => {
        const Pe = q(M());
        return De(Pe, ye) ? (ye.data = Pe.data, ye.isLoading = Pe.isLoading, ye.isValidating = Pe.isValidating, ye.error = Pe.error, ye) : (ye = Pe, Pe);
      },
      () => Vn
    ];
  }, [
    r,
    c
  ]), E = iv.useSyncExternalStore(de.useCallback(
    (X) => Xe(c, (q, Se) => {
      De(Se, q) || X();
    }),
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [
      r,
      c
    ]
  ), it[0], it[1]), I = !p.current, U = v[c] && v[c].length > 0, Q = E.data, K = W(Q) ? ge : Q, Ot = E.error, vt = de.useRef(K), Yt = m ? W(Q) ? vt.current : Q : K, gt = U && !W(Ot) ? !1 : I && !W(l) ? l : C().isPaused() ? !1 : o ? W(K) ? !1 : s : W(K) || s, _n = !!(c && t && I && gt), kp = W(E.isValidating) ? _n : E.isValidating, Sp = W(E.isLoading) ? _n : E.isLoading, xr = de.useCallback(
    async (X) => {
      const q = S.current;
      if (!c || !q || g.current || C().isPaused())
        return !1;
      let Se, le, yt = !0;
      const Vn = X || {}, ye = !_[c] || !Vn.dedupe, Pe = () => pc ? !g.current && c === T.current && p.current : c === T.current, Dt = {
        isValidating: !1,
        isLoading: !1
      }, tu = () => {
        ue(Dt);
      }, nu = () => {
        const qe = _[c];
        qe && qe[1] === le && delete _[c];
      }, ru = {
        isValidating: !0
      };
      W(M().data) && (ru.isLoading = !0);
      try {
        if (ye && (ue(ru), n.loadingTimeout && W(M().data) && setTimeout(() => {
          yt && Pe() && C().onLoadingSlow(c, n);
        }, n.loadingTimeout), _[c] = [
          q(d),
          Kl()
        ]), [Se, le] = _[c], Se = await Se, ye && setTimeout(nu, n.dedupingInterval), !_[c] || _[c][1] !== le)
          return ye && Pe() && C().onDiscarded(c), !1;
        Dt.error = $e;
        const qe = y[c];
        if (!W(qe) && // case 1
        (le <= qe[0] || // case 2
        le <= qe[1] || // case 3
        qe[1] === 0))
          return tu(), ye && Pe() && C().onDiscarded(c), !1;
        const Pt = M().data;
        Dt.data = i(Pt, Se) ? Pt : Se, ye && Pe() && C().onSuccess(Se, c, n);
      } catch (qe) {
        nu();
        const Pt = C(), { shouldRetryOnError: fa } = Pt;
        Pt.isPaused() || (Dt.error = qe, ye && Pe() && (Pt.onError(qe, c, Pt), (fa === !0 || jt(fa) && fa(qe)) && V() && Pt.onErrorRetry(qe, c, Pt, (xp) => {
          const pa = v[c];
          pa && pa[0] && pa[0](Lr.ERROR_REVALIDATE_EVENT, xp);
        }, {
          retryCount: (Vn.retryCount || 0) + 1,
          dedupe: !0
        })));
      }
      return yt = !1, tu(), !0;
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
      c,
      r
    ]
  ), eu = de.useCallback(
    // Use callback to make sure `keyRef.current` returns latest result every time
    (...X) => ep(r, T.current, ...X),
    // eslint-disable-next-line react-hooks/exhaustive-deps
    []
  );
  if (Za(() => {
    S.current = t, x.current = n, W(Q) || (vt.current = Q);
  }), Za(() => {
    if (!c)
      return;
    const X = xr.bind($e, Ya);
    let q = 0;
    const le = Lv(c, v, (yt, Vn = {}) => {
      if (yt == Lr.FOCUS_EVENT) {
        const ye = Date.now();
        C().revalidateOnFocus && ye > q && V() && (q = ye + C().focusThrottleInterval, X());
      } else if (yt == Lr.RECONNECT_EVENT)
        C().revalidateOnReconnect && V() && X();
      else {
        if (yt == Lr.MUTATE_EVENT)
          return xr();
        if (yt == Lr.ERROR_REVALIDATE_EVENT)
          return xr(Vn);
      }
    });
    return g.current = !1, T.current = c, p.current = !0, ue({
      _k: d
    }), gt && (W(K) || fi ? X() : hv(X)), () => {
      g.current = !0, le();
    };
  }, [
    c
  ]), Za(() => {
    let X;
    function q() {
      const le = jt(u) ? u(M().data) : u;
      le && X !== -1 && (X = setTimeout(Se, le));
    }
    function Se() {
      !M().error && (f || C().isVisible()) && (h || C().isOnline()) ? xr(Ya).then(q) : q();
    }
    return q(), () => {
      X && (clearTimeout(X), X = -1);
    };
  }, [
    u,
    f,
    h,
    c
  ]), de.useDebugValue(Yt), o && W(K) && c) {
    if (!pc && fi)
      throw new Error("Fallback data is required when using suspense in SSR.");
    S.current = t, x.current = n, g.current = !1;
    const X = R[c];
    if (!W(X)) {
      const q = eu(X);
      vc(q);
    }
    if (W(Ot)) {
      const q = xr(Ya);
      W(Yt) || (q.status = "fulfilled", q.value = !0), vc(q);
    } else
      throw Ot;
  }
  return {
    mutate: eu,
    get data() {
      return ce.data = !0, Yt;
    },
    get error() {
      return ce.error = !0, Ot;
    },
    get isValidating() {
      return ce.isValidating = !0, kp;
    },
    get isLoading() {
      return ce.isLoading = !0, Sp;
    }
  };
}, Iv = Mv(Rv);
var Z;
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
    for (const a of i)
      o[a] = a;
    return o;
  }, e.getValidEnumValues = (i) => {
    const o = e.objectKeys(i).filter((l) => typeof i[i[l]] != "number"), a = {};
    for (const l of o)
      a[l] = i[l];
    return e.objectValues(a);
  }, e.objectValues = (i) => e.objectKeys(i).map(function(o) {
    return i[o];
  }), e.objectKeys = typeof Object.keys == "function" ? (i) => Object.keys(i) : (i) => {
    const o = [];
    for (const a in i)
      Object.prototype.hasOwnProperty.call(i, a) && o.push(a);
    return o;
  }, e.find = (i, o) => {
    for (const a of i)
      if (o(a))
        return a;
  }, e.isInteger = typeof Number.isInteger == "function" ? (i) => Number.isInteger(i) : (i) => typeof i == "number" && isFinite(i) && Math.floor(i) === i;
  function r(i, o = " | ") {
    return i.map((a) => typeof a == "string" ? `'${a}'` : a).join(o);
  }
  e.joinValues = r, e.jsonStringifyReplacer = (i, o) => typeof o == "bigint" ? o.toString() : o;
})(Z || (Z = {}));
var Xl;
(function(e) {
  e.mergeShapes = (t, n) => ({
    ...t,
    ...n
    // second overwrites first
  });
})(Xl || (Xl = {}));
const N = Z.arrayToEnum([
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
]), Jt = (e) => {
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
}, k = Z.arrayToEnum([
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
]), zv = (e) => JSON.stringify(e, null, 2).replace(/"([^"]+)":/g, "$1:");
class ft extends Error {
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
      for (const a of o.issues)
        if (a.code === "invalid_union")
          a.unionErrors.map(i);
        else if (a.code === "invalid_return_type")
          i(a.returnTypeError);
        else if (a.code === "invalid_arguments")
          i(a.argumentsError);
        else if (a.path.length === 0)
          r._errors.push(n(a));
        else {
          let l = r, s = 0;
          for (; s < a.path.length; ) {
            const u = a.path[s];
            s === a.path.length - 1 ? (l[u] = l[u] || { _errors: [] }, l[u]._errors.push(n(a))) : l[u] = l[u] || { _errors: [] }, l = l[u], s++;
          }
        }
    };
    return i(this), r;
  }
  toString() {
    return this.message;
  }
  get message() {
    return JSON.stringify(this.issues, Z.jsonStringifyReplacer, 2);
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
ft.create = (e) => new ft(e);
const pi = (e, t) => {
  let n;
  switch (e.code) {
    case k.invalid_type:
      e.received === N.undefined ? n = "Required" : n = `Expected ${e.expected}, received ${e.received}`;
      break;
    case k.invalid_literal:
      n = `Invalid literal value, expected ${JSON.stringify(e.expected, Z.jsonStringifyReplacer)}`;
      break;
    case k.unrecognized_keys:
      n = `Unrecognized key(s) in object: ${Z.joinValues(e.keys, ", ")}`;
      break;
    case k.invalid_union:
      n = "Invalid input";
      break;
    case k.invalid_union_discriminator:
      n = `Invalid discriminator value. Expected ${Z.joinValues(e.options)}`;
      break;
    case k.invalid_enum_value:
      n = `Invalid enum value. Expected ${Z.joinValues(e.options)}, received '${e.received}'`;
      break;
    case k.invalid_arguments:
      n = "Invalid function arguments";
      break;
    case k.invalid_return_type:
      n = "Invalid function return type";
      break;
    case k.invalid_date:
      n = "Invalid date";
      break;
    case k.invalid_string:
      typeof e.validation == "object" ? "includes" in e.validation ? (n = `Invalid input: must include "${e.validation.includes}"`, typeof e.validation.position == "number" && (n = `${n} at one or more positions greater than or equal to ${e.validation.position}`)) : "startsWith" in e.validation ? n = `Invalid input: must start with "${e.validation.startsWith}"` : "endsWith" in e.validation ? n = `Invalid input: must end with "${e.validation.endsWith}"` : Z.assertNever(e.validation) : e.validation !== "regex" ? n = `Invalid ${e.validation}` : n = "Invalid";
      break;
    case k.too_small:
      e.type === "array" ? n = `Array must contain ${e.exact ? "exactly" : e.inclusive ? "at least" : "more than"} ${e.minimum} element(s)` : e.type === "string" ? n = `String must contain ${e.exact ? "exactly" : e.inclusive ? "at least" : "over"} ${e.minimum} character(s)` : e.type === "number" ? n = `Number must be ${e.exact ? "exactly equal to " : e.inclusive ? "greater than or equal to " : "greater than "}${e.minimum}` : e.type === "date" ? n = `Date must be ${e.exact ? "exactly equal to " : e.inclusive ? "greater than or equal to " : "greater than "}${new Date(Number(e.minimum))}` : n = "Invalid input";
      break;
    case k.too_big:
      e.type === "array" ? n = `Array must contain ${e.exact ? "exactly" : e.inclusive ? "at most" : "less than"} ${e.maximum} element(s)` : e.type === "string" ? n = `String must contain ${e.exact ? "exactly" : e.inclusive ? "at most" : "under"} ${e.maximum} character(s)` : e.type === "number" ? n = `Number must be ${e.exact ? "exactly" : e.inclusive ? "less than or equal to" : "less than"} ${e.maximum}` : e.type === "bigint" ? n = `BigInt must be ${e.exact ? "exactly" : e.inclusive ? "less than or equal to" : "less than"} ${e.maximum}` : e.type === "date" ? n = `Date must be ${e.exact ? "exactly" : e.inclusive ? "smaller than or equal to" : "smaller than"} ${new Date(Number(e.maximum))}` : n = "Invalid input";
      break;
    case k.custom:
      n = "Invalid input";
      break;
    case k.invalid_intersection_types:
      n = "Intersection results could not be merged";
      break;
    case k.not_multiple_of:
      n = `Number must be a multiple of ${e.multipleOf}`;
      break;
    case k.not_finite:
      n = "Number must be finite";
      break;
    default:
      n = t.defaultError, Z.assertNever(e);
  }
  return { message: n };
};
let rp = pi;
function jv(e) {
  rp = e;
}
function Io() {
  return rp;
}
const zo = (e) => {
  const { data: t, path: n, errorMaps: r, issueData: i } = e, o = [...n, ...i.path || []], a = {
    ...i,
    path: o
  };
  let l = "";
  const s = r.filter((u) => !!u).slice().reverse();
  for (const u of s)
    l = u(a, { data: t, defaultError: l }).message;
  return {
    ...i,
    path: o,
    message: i.message || l
  };
}, Uv = [];
function O(e, t) {
  const n = zo({
    issueData: t,
    data: e.data,
    path: e.path,
    errorMaps: [
      e.common.contextualErrorMap,
      e.schemaErrorMap,
      Io(),
      pi
      // then global default map
    ].filter((r) => !!r)
  });
  e.common.issues.push(n);
}
class Ne {
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
        return z;
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
    return Ne.mergeObjectSync(t, r);
  }
  static mergeObjectSync(t, n) {
    const r = {};
    for (const i of n) {
      const { key: o, value: a } = i;
      if (o.status === "aborted" || a.status === "aborted")
        return z;
      o.status === "dirty" && t.dirty(), a.status === "dirty" && t.dirty(), o.value !== "__proto__" && (typeof a.value < "u" || i.alwaysSet) && (r[o.value] = a.value);
    }
    return { status: t.value, value: r };
  }
}
const z = Object.freeze({
  status: "aborted"
}), ip = (e) => ({ status: "dirty", value: e }), Ie = (e) => ({ status: "valid", value: e }), ql = (e) => e.status === "aborted", Jl = (e) => e.status === "dirty", hi = (e) => e.status === "valid", jo = (e) => typeof Promise < "u" && e instanceof Promise;
var P;
(function(e) {
  e.errToObj = (t) => typeof t == "string" ? { message: t } : t || {}, e.toString = (t) => typeof t == "string" ? t : t == null ? void 0 : t.message;
})(P || (P = {}));
class Tt {
  constructor(t, n, r, i) {
    this._cachedPath = [], this.parent = t, this.data = n, this._path = r, this._key = i;
  }
  get path() {
    return this._cachedPath.length || (this._key instanceof Array ? this._cachedPath.push(...this._path, ...this._key) : this._cachedPath.push(...this._path, this._key)), this._cachedPath;
  }
}
const gc = (e, t) => {
  if (hi(t))
    return { success: !0, data: t.value };
  if (!e.common.issues.length)
    throw new Error("Validation failed but no issues detected.");
  return {
    success: !1,
    get error() {
      if (this._error)
        return this._error;
      const n = new ft(e.common.issues);
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
  return t ? { errorMap: t, description: i } : { errorMap: (a, l) => a.code !== "invalid_type" ? { message: l.defaultError } : typeof l.data > "u" ? { message: r ?? l.defaultError } : { message: n ?? l.defaultError }, description: i };
}
class A {
  constructor(t) {
    this.spa = this.safeParseAsync, this._def = t, this.parse = this.parse.bind(this), this.safeParse = this.safeParse.bind(this), this.parseAsync = this.parseAsync.bind(this), this.safeParseAsync = this.safeParseAsync.bind(this), this.spa = this.spa.bind(this), this.refine = this.refine.bind(this), this.refinement = this.refinement.bind(this), this.superRefine = this.superRefine.bind(this), this.optional = this.optional.bind(this), this.nullable = this.nullable.bind(this), this.nullish = this.nullish.bind(this), this.array = this.array.bind(this), this.promise = this.promise.bind(this), this.or = this.or.bind(this), this.and = this.and.bind(this), this.transform = this.transform.bind(this), this.brand = this.brand.bind(this), this.default = this.default.bind(this), this.catch = this.catch.bind(this), this.describe = this.describe.bind(this), this.pipe = this.pipe.bind(this), this.readonly = this.readonly.bind(this), this.isNullable = this.isNullable.bind(this), this.isOptional = this.isOptional.bind(this);
  }
  get description() {
    return this._def.description;
  }
  _getType(t) {
    return Jt(t.data);
  }
  _getOrReturnCtx(t, n) {
    return n || {
      common: t.parent.common,
      data: t.data,
      parsedType: Jt(t.data),
      schemaErrorMap: this._def.errorMap,
      path: t.path,
      parent: t.parent
    };
  }
  _processInputParams(t) {
    return {
      status: new Ne(),
      ctx: {
        common: t.parent.common,
        data: t.data,
        parsedType: Jt(t.data),
        schemaErrorMap: this._def.errorMap,
        path: t.path,
        parent: t.parent
      }
    };
  }
  _parseSync(t) {
    const n = this._parse(t);
    if (jo(n))
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
      parsedType: Jt(t)
    }, o = this._parseSync({ data: t, path: i.path, parent: i });
    return gc(i, o);
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
      parsedType: Jt(t)
    }, i = this._parse({ data: t, path: r.path, parent: r }), o = await (jo(i) ? i : Promise.resolve(i));
    return gc(r, o);
  }
  refine(t, n) {
    const r = (i) => typeof n == "string" || typeof n > "u" ? { message: n } : typeof n == "function" ? n(i) : n;
    return this._refinement((i, o) => {
      const a = t(i), l = () => o.addIssue({
        code: k.custom,
        ...r(i)
      });
      return typeof Promise < "u" && a instanceof Promise ? a.then((s) => s ? !0 : (l(), !1)) : a ? !0 : (l(), !1);
    });
  }
  refinement(t, n) {
    return this._refinement((r, i) => t(r) ? !0 : (i.addIssue(typeof n == "function" ? n(r, i) : n), !1));
  }
  _refinement(t) {
    return new mt({
      schema: this,
      typeName: L.ZodEffects,
      effect: { type: "refinement", refinement: t }
    });
  }
  superRefine(t) {
    return this._refinement(t);
  }
  optional() {
    return At.create(this, this._def);
  }
  nullable() {
    return Un.create(this, this._def);
  }
  nullish() {
    return this.nullable().optional();
  }
  array() {
    return pt.create(this, this._def);
  }
  promise() {
    return wr.create(this, this._def);
  }
  or(t) {
    return yi.create([this, t], this._def);
  }
  and(t) {
    return wi.create(this, t, this._def);
  }
  transform(t) {
    return new mt({
      ...j(this._def),
      schema: this,
      typeName: L.ZodEffects,
      effect: { type: "transform", transform: t }
    });
  }
  default(t) {
    const n = typeof t == "function" ? t : () => t;
    return new Ci({
      ...j(this._def),
      innerType: this,
      defaultValue: n,
      typeName: L.ZodDefault
    });
  }
  brand() {
    return new ap({
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
    return Pi.create(this, t);
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
const Av = /^c[^\s-]{8,}$/i, $v = /^[a-z][a-z0-9]*$/, Fv = /^[0-9A-HJKMNP-TV-Z]{26}$/, Vv = /^[0-9a-fA-F]{8}\b-[0-9a-fA-F]{4}\b-[0-9a-fA-F]{4}\b-[0-9a-fA-F]{4}\b-[0-9a-fA-F]{12}$/i, Wv = /^(?!\.)(?!.*\.\.)([A-Z0-9_+-\.]*)[A-Z0-9_+-]@([A-Z0-9][A-Z0-9\-]*\.)+[A-Z]{2,}$/i, Zv = "^(\\p{Extended_Pictographic}|\\p{Emoji_Component})+$";
let Ba;
const Hv = /^(((25[0-5])|(2[0-4][0-9])|(1[0-9]{2})|([0-9]{1,2}))\.){3}((25[0-5])|(2[0-4][0-9])|(1[0-9]{2})|([0-9]{1,2}))$/, Yv = /^(([a-f0-9]{1,4}:){7}|::([a-f0-9]{1,4}:){0,6}|([a-f0-9]{1,4}:){1}:([a-f0-9]{1,4}:){0,5}|([a-f0-9]{1,4}:){2}:([a-f0-9]{1,4}:){0,4}|([a-f0-9]{1,4}:){3}:([a-f0-9]{1,4}:){0,3}|([a-f0-9]{1,4}:){4}:([a-f0-9]{1,4}:){0,2}|([a-f0-9]{1,4}:){5}:([a-f0-9]{1,4}:){0,1})([a-f0-9]{1,4}|(((25[0-5])|(2[0-4][0-9])|(1[0-9]{2})|([0-9]{1,2}))\.){3}((25[0-5])|(2[0-4][0-9])|(1[0-9]{2})|([0-9]{1,2})))$/, Bv = (e) => e.precision ? e.offset ? new RegExp(`^\\d{4}-\\d{2}-\\d{2}T\\d{2}:\\d{2}:\\d{2}\\.\\d{${e.precision}}(([+-]\\d{2}(:?\\d{2})?)|Z)$`) : new RegExp(`^\\d{4}-\\d{2}-\\d{2}T\\d{2}:\\d{2}:\\d{2}\\.\\d{${e.precision}}Z$`) : e.precision === 0 ? e.offset ? new RegExp("^\\d{4}-\\d{2}-\\d{2}T\\d{2}:\\d{2}:\\d{2}(([+-]\\d{2}(:?\\d{2})?)|Z)$") : new RegExp("^\\d{4}-\\d{2}-\\d{2}T\\d{2}:\\d{2}:\\d{2}Z$") : e.offset ? new RegExp("^\\d{4}-\\d{2}-\\d{2}T\\d{2}:\\d{2}:\\d{2}(\\.\\d+)?(([+-]\\d{2}(:?\\d{2})?)|Z)$") : new RegExp("^\\d{4}-\\d{2}-\\d{2}T\\d{2}:\\d{2}:\\d{2}(\\.\\d+)?Z$");
function Qv(e, t) {
  return !!((t === "v4" || !t) && Hv.test(e) || (t === "v6" || !t) && Yv.test(e));
}
class ut extends A {
  _parse(t) {
    if (this._def.coerce && (t.data = String(t.data)), this._getType(t) !== N.string) {
      const o = this._getOrReturnCtx(t);
      return O(
        o,
        {
          code: k.invalid_type,
          expected: N.string,
          received: o.parsedType
        }
        //
      ), z;
    }
    const r = new Ne();
    let i;
    for (const o of this._def.checks)
      if (o.kind === "min")
        t.data.length < o.value && (i = this._getOrReturnCtx(t, i), O(i, {
          code: k.too_small,
          minimum: o.value,
          type: "string",
          inclusive: !0,
          exact: !1,
          message: o.message
        }), r.dirty());
      else if (o.kind === "max")
        t.data.length > o.value && (i = this._getOrReturnCtx(t, i), O(i, {
          code: k.too_big,
          maximum: o.value,
          type: "string",
          inclusive: !0,
          exact: !1,
          message: o.message
        }), r.dirty());
      else if (o.kind === "length") {
        const a = t.data.length > o.value, l = t.data.length < o.value;
        (a || l) && (i = this._getOrReturnCtx(t, i), a ? O(i, {
          code: k.too_big,
          maximum: o.value,
          type: "string",
          inclusive: !0,
          exact: !0,
          message: o.message
        }) : l && O(i, {
          code: k.too_small,
          minimum: o.value,
          type: "string",
          inclusive: !0,
          exact: !0,
          message: o.message
        }), r.dirty());
      } else if (o.kind === "email")
        Wv.test(t.data) || (i = this._getOrReturnCtx(t, i), O(i, {
          validation: "email",
          code: k.invalid_string,
          message: o.message
        }), r.dirty());
      else if (o.kind === "emoji")
        Ba || (Ba = new RegExp(Zv, "u")), Ba.test(t.data) || (i = this._getOrReturnCtx(t, i), O(i, {
          validation: "emoji",
          code: k.invalid_string,
          message: o.message
        }), r.dirty());
      else if (o.kind === "uuid")
        Vv.test(t.data) || (i = this._getOrReturnCtx(t, i), O(i, {
          validation: "uuid",
          code: k.invalid_string,
          message: o.message
        }), r.dirty());
      else if (o.kind === "cuid")
        Av.test(t.data) || (i = this._getOrReturnCtx(t, i), O(i, {
          validation: "cuid",
          code: k.invalid_string,
          message: o.message
        }), r.dirty());
      else if (o.kind === "cuid2")
        $v.test(t.data) || (i = this._getOrReturnCtx(t, i), O(i, {
          validation: "cuid2",
          code: k.invalid_string,
          message: o.message
        }), r.dirty());
      else if (o.kind === "ulid")
        Fv.test(t.data) || (i = this._getOrReturnCtx(t, i), O(i, {
          validation: "ulid",
          code: k.invalid_string,
          message: o.message
        }), r.dirty());
      else if (o.kind === "url")
        try {
          new URL(t.data);
        } catch {
          i = this._getOrReturnCtx(t, i), O(i, {
            validation: "url",
            code: k.invalid_string,
            message: o.message
          }), r.dirty();
        }
      else
        o.kind === "regex" ? (o.regex.lastIndex = 0, o.regex.test(t.data) || (i = this._getOrReturnCtx(t, i), O(i, {
          validation: "regex",
          code: k.invalid_string,
          message: o.message
        }), r.dirty())) : o.kind === "trim" ? t.data = t.data.trim() : o.kind === "includes" ? t.data.includes(o.value, o.position) || (i = this._getOrReturnCtx(t, i), O(i, {
          code: k.invalid_string,
          validation: { includes: o.value, position: o.position },
          message: o.message
        }), r.dirty()) : o.kind === "toLowerCase" ? t.data = t.data.toLowerCase() : o.kind === "toUpperCase" ? t.data = t.data.toUpperCase() : o.kind === "startsWith" ? t.data.startsWith(o.value) || (i = this._getOrReturnCtx(t, i), O(i, {
          code: k.invalid_string,
          validation: { startsWith: o.value },
          message: o.message
        }), r.dirty()) : o.kind === "endsWith" ? t.data.endsWith(o.value) || (i = this._getOrReturnCtx(t, i), O(i, {
          code: k.invalid_string,
          validation: { endsWith: o.value },
          message: o.message
        }), r.dirty()) : o.kind === "datetime" ? Bv(o).test(t.data) || (i = this._getOrReturnCtx(t, i), O(i, {
          code: k.invalid_string,
          validation: "datetime",
          message: o.message
        }), r.dirty()) : o.kind === "ip" ? Qv(t.data, o.version) || (i = this._getOrReturnCtx(t, i), O(i, {
          validation: "ip",
          code: k.invalid_string,
          message: o.message
        }), r.dirty()) : Z.assertNever(o);
    return { status: r.value, value: t.data };
  }
  _regex(t, n, r) {
    return this.refinement((i) => t.test(i), {
      validation: n,
      code: k.invalid_string,
      ...P.errToObj(r)
    });
  }
  _addCheck(t) {
    return new ut({
      ...this._def,
      checks: [...this._def.checks, t]
    });
  }
  email(t) {
    return this._addCheck({ kind: "email", ...P.errToObj(t) });
  }
  url(t) {
    return this._addCheck({ kind: "url", ...P.errToObj(t) });
  }
  emoji(t) {
    return this._addCheck({ kind: "emoji", ...P.errToObj(t) });
  }
  uuid(t) {
    return this._addCheck({ kind: "uuid", ...P.errToObj(t) });
  }
  cuid(t) {
    return this._addCheck({ kind: "cuid", ...P.errToObj(t) });
  }
  cuid2(t) {
    return this._addCheck({ kind: "cuid2", ...P.errToObj(t) });
  }
  ulid(t) {
    return this._addCheck({ kind: "ulid", ...P.errToObj(t) });
  }
  ip(t) {
    return this._addCheck({ kind: "ip", ...P.errToObj(t) });
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
      ...P.errToObj(t == null ? void 0 : t.message)
    });
  }
  regex(t, n) {
    return this._addCheck({
      kind: "regex",
      regex: t,
      ...P.errToObj(n)
    });
  }
  includes(t, n) {
    return this._addCheck({
      kind: "includes",
      value: t,
      position: n == null ? void 0 : n.position,
      ...P.errToObj(n == null ? void 0 : n.message)
    });
  }
  startsWith(t, n) {
    return this._addCheck({
      kind: "startsWith",
      value: t,
      ...P.errToObj(n)
    });
  }
  endsWith(t, n) {
    return this._addCheck({
      kind: "endsWith",
      value: t,
      ...P.errToObj(n)
    });
  }
  min(t, n) {
    return this._addCheck({
      kind: "min",
      value: t,
      ...P.errToObj(n)
    });
  }
  max(t, n) {
    return this._addCheck({
      kind: "max",
      value: t,
      ...P.errToObj(n)
    });
  }
  length(t, n) {
    return this._addCheck({
      kind: "length",
      value: t,
      ...P.errToObj(n)
    });
  }
  /**
   * @deprecated Use z.string().min(1) instead.
   * @see {@link ZodString.min}
   */
  nonempty(t) {
    return this.min(1, P.errToObj(t));
  }
  trim() {
    return new ut({
      ...this._def,
      checks: [...this._def.checks, { kind: "trim" }]
    });
  }
  toLowerCase() {
    return new ut({
      ...this._def,
      checks: [...this._def.checks, { kind: "toLowerCase" }]
    });
  }
  toUpperCase() {
    return new ut({
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
ut.create = (e) => {
  var t;
  return new ut({
    checks: [],
    typeName: L.ZodString,
    coerce: (t = e == null ? void 0 : e.coerce) !== null && t !== void 0 ? t : !1,
    ...j(e)
  });
};
function Gv(e, t) {
  const n = (e.toString().split(".")[1] || "").length, r = (t.toString().split(".")[1] || "").length, i = n > r ? n : r, o = parseInt(e.toFixed(i).replace(".", "")), a = parseInt(t.toFixed(i).replace(".", ""));
  return o % a / Math.pow(10, i);
}
class hn extends A {
  constructor() {
    super(...arguments), this.min = this.gte, this.max = this.lte, this.step = this.multipleOf;
  }
  _parse(t) {
    if (this._def.coerce && (t.data = Number(t.data)), this._getType(t) !== N.number) {
      const o = this._getOrReturnCtx(t);
      return O(o, {
        code: k.invalid_type,
        expected: N.number,
        received: o.parsedType
      }), z;
    }
    let r;
    const i = new Ne();
    for (const o of this._def.checks)
      o.kind === "int" ? Z.isInteger(t.data) || (r = this._getOrReturnCtx(t, r), O(r, {
        code: k.invalid_type,
        expected: "integer",
        received: "float",
        message: o.message
      }), i.dirty()) : o.kind === "min" ? (o.inclusive ? t.data < o.value : t.data <= o.value) && (r = this._getOrReturnCtx(t, r), O(r, {
        code: k.too_small,
        minimum: o.value,
        type: "number",
        inclusive: o.inclusive,
        exact: !1,
        message: o.message
      }), i.dirty()) : o.kind === "max" ? (o.inclusive ? t.data > o.value : t.data >= o.value) && (r = this._getOrReturnCtx(t, r), O(r, {
        code: k.too_big,
        maximum: o.value,
        type: "number",
        inclusive: o.inclusive,
        exact: !1,
        message: o.message
      }), i.dirty()) : o.kind === "multipleOf" ? Gv(t.data, o.value) !== 0 && (r = this._getOrReturnCtx(t, r), O(r, {
        code: k.not_multiple_of,
        multipleOf: o.value,
        message: o.message
      }), i.dirty()) : o.kind === "finite" ? Number.isFinite(t.data) || (r = this._getOrReturnCtx(t, r), O(r, {
        code: k.not_finite,
        message: o.message
      }), i.dirty()) : Z.assertNever(o);
    return { status: i.value, value: t.data };
  }
  gte(t, n) {
    return this.setLimit("min", t, !0, P.toString(n));
  }
  gt(t, n) {
    return this.setLimit("min", t, !1, P.toString(n));
  }
  lte(t, n) {
    return this.setLimit("max", t, !0, P.toString(n));
  }
  lt(t, n) {
    return this.setLimit("max", t, !1, P.toString(n));
  }
  setLimit(t, n, r, i) {
    return new hn({
      ...this._def,
      checks: [
        ...this._def.checks,
        {
          kind: t,
          value: n,
          inclusive: r,
          message: P.toString(i)
        }
      ]
    });
  }
  _addCheck(t) {
    return new hn({
      ...this._def,
      checks: [...this._def.checks, t]
    });
  }
  int(t) {
    return this._addCheck({
      kind: "int",
      message: P.toString(t)
    });
  }
  positive(t) {
    return this._addCheck({
      kind: "min",
      value: 0,
      inclusive: !1,
      message: P.toString(t)
    });
  }
  negative(t) {
    return this._addCheck({
      kind: "max",
      value: 0,
      inclusive: !1,
      message: P.toString(t)
    });
  }
  nonpositive(t) {
    return this._addCheck({
      kind: "max",
      value: 0,
      inclusive: !0,
      message: P.toString(t)
    });
  }
  nonnegative(t) {
    return this._addCheck({
      kind: "min",
      value: 0,
      inclusive: !0,
      message: P.toString(t)
    });
  }
  multipleOf(t, n) {
    return this._addCheck({
      kind: "multipleOf",
      value: t,
      message: P.toString(n)
    });
  }
  finite(t) {
    return this._addCheck({
      kind: "finite",
      message: P.toString(t)
    });
  }
  safe(t) {
    return this._addCheck({
      kind: "min",
      inclusive: !0,
      value: Number.MIN_SAFE_INTEGER,
      message: P.toString(t)
    })._addCheck({
      kind: "max",
      inclusive: !0,
      value: Number.MAX_SAFE_INTEGER,
      message: P.toString(t)
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
    return !!this._def.checks.find((t) => t.kind === "int" || t.kind === "multipleOf" && Z.isInteger(t.value));
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
hn.create = (e) => new hn({
  checks: [],
  typeName: L.ZodNumber,
  coerce: (e == null ? void 0 : e.coerce) || !1,
  ...j(e)
});
class mn extends A {
  constructor() {
    super(...arguments), this.min = this.gte, this.max = this.lte;
  }
  _parse(t) {
    if (this._def.coerce && (t.data = BigInt(t.data)), this._getType(t) !== N.bigint) {
      const o = this._getOrReturnCtx(t);
      return O(o, {
        code: k.invalid_type,
        expected: N.bigint,
        received: o.parsedType
      }), z;
    }
    let r;
    const i = new Ne();
    for (const o of this._def.checks)
      o.kind === "min" ? (o.inclusive ? t.data < o.value : t.data <= o.value) && (r = this._getOrReturnCtx(t, r), O(r, {
        code: k.too_small,
        type: "bigint",
        minimum: o.value,
        inclusive: o.inclusive,
        message: o.message
      }), i.dirty()) : o.kind === "max" ? (o.inclusive ? t.data > o.value : t.data >= o.value) && (r = this._getOrReturnCtx(t, r), O(r, {
        code: k.too_big,
        type: "bigint",
        maximum: o.value,
        inclusive: o.inclusive,
        message: o.message
      }), i.dirty()) : o.kind === "multipleOf" ? t.data % o.value !== BigInt(0) && (r = this._getOrReturnCtx(t, r), O(r, {
        code: k.not_multiple_of,
        multipleOf: o.value,
        message: o.message
      }), i.dirty()) : Z.assertNever(o);
    return { status: i.value, value: t.data };
  }
  gte(t, n) {
    return this.setLimit("min", t, !0, P.toString(n));
  }
  gt(t, n) {
    return this.setLimit("min", t, !1, P.toString(n));
  }
  lte(t, n) {
    return this.setLimit("max", t, !0, P.toString(n));
  }
  lt(t, n) {
    return this.setLimit("max", t, !1, P.toString(n));
  }
  setLimit(t, n, r, i) {
    return new mn({
      ...this._def,
      checks: [
        ...this._def.checks,
        {
          kind: t,
          value: n,
          inclusive: r,
          message: P.toString(i)
        }
      ]
    });
  }
  _addCheck(t) {
    return new mn({
      ...this._def,
      checks: [...this._def.checks, t]
    });
  }
  positive(t) {
    return this._addCheck({
      kind: "min",
      value: BigInt(0),
      inclusive: !1,
      message: P.toString(t)
    });
  }
  negative(t) {
    return this._addCheck({
      kind: "max",
      value: BigInt(0),
      inclusive: !1,
      message: P.toString(t)
    });
  }
  nonpositive(t) {
    return this._addCheck({
      kind: "max",
      value: BigInt(0),
      inclusive: !0,
      message: P.toString(t)
    });
  }
  nonnegative(t) {
    return this._addCheck({
      kind: "min",
      value: BigInt(0),
      inclusive: !0,
      message: P.toString(t)
    });
  }
  multipleOf(t, n) {
    return this._addCheck({
      kind: "multipleOf",
      value: t,
      message: P.toString(n)
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
mn.create = (e) => {
  var t;
  return new mn({
    checks: [],
    typeName: L.ZodBigInt,
    coerce: (t = e == null ? void 0 : e.coerce) !== null && t !== void 0 ? t : !1,
    ...j(e)
  });
};
class mi extends A {
  _parse(t) {
    if (this._def.coerce && (t.data = !!t.data), this._getType(t) !== N.boolean) {
      const r = this._getOrReturnCtx(t);
      return O(r, {
        code: k.invalid_type,
        expected: N.boolean,
        received: r.parsedType
      }), z;
    }
    return Ie(t.data);
  }
}
mi.create = (e) => new mi({
  typeName: L.ZodBoolean,
  coerce: (e == null ? void 0 : e.coerce) || !1,
  ...j(e)
});
class zn extends A {
  _parse(t) {
    if (this._def.coerce && (t.data = new Date(t.data)), this._getType(t) !== N.date) {
      const o = this._getOrReturnCtx(t);
      return O(o, {
        code: k.invalid_type,
        expected: N.date,
        received: o.parsedType
      }), z;
    }
    if (isNaN(t.data.getTime())) {
      const o = this._getOrReturnCtx(t);
      return O(o, {
        code: k.invalid_date
      }), z;
    }
    const r = new Ne();
    let i;
    for (const o of this._def.checks)
      o.kind === "min" ? t.data.getTime() < o.value && (i = this._getOrReturnCtx(t, i), O(i, {
        code: k.too_small,
        message: o.message,
        inclusive: !0,
        exact: !1,
        minimum: o.value,
        type: "date"
      }), r.dirty()) : o.kind === "max" ? t.data.getTime() > o.value && (i = this._getOrReturnCtx(t, i), O(i, {
        code: k.too_big,
        message: o.message,
        inclusive: !0,
        exact: !1,
        maximum: o.value,
        type: "date"
      }), r.dirty()) : Z.assertNever(o);
    return {
      status: r.value,
      value: new Date(t.data.getTime())
    };
  }
  _addCheck(t) {
    return new zn({
      ...this._def,
      checks: [...this._def.checks, t]
    });
  }
  min(t, n) {
    return this._addCheck({
      kind: "min",
      value: t.getTime(),
      message: P.toString(n)
    });
  }
  max(t, n) {
    return this._addCheck({
      kind: "max",
      value: t.getTime(),
      message: P.toString(n)
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
zn.create = (e) => new zn({
  checks: [],
  coerce: (e == null ? void 0 : e.coerce) || !1,
  typeName: L.ZodDate,
  ...j(e)
});
class Uo extends A {
  _parse(t) {
    if (this._getType(t) !== N.symbol) {
      const r = this._getOrReturnCtx(t);
      return O(r, {
        code: k.invalid_type,
        expected: N.symbol,
        received: r.parsedType
      }), z;
    }
    return Ie(t.data);
  }
}
Uo.create = (e) => new Uo({
  typeName: L.ZodSymbol,
  ...j(e)
});
class vi extends A {
  _parse(t) {
    if (this._getType(t) !== N.undefined) {
      const r = this._getOrReturnCtx(t);
      return O(r, {
        code: k.invalid_type,
        expected: N.undefined,
        received: r.parsedType
      }), z;
    }
    return Ie(t.data);
  }
}
vi.create = (e) => new vi({
  typeName: L.ZodUndefined,
  ...j(e)
});
class gi extends A {
  _parse(t) {
    if (this._getType(t) !== N.null) {
      const r = this._getOrReturnCtx(t);
      return O(r, {
        code: k.invalid_type,
        expected: N.null,
        received: r.parsedType
      }), z;
    }
    return Ie(t.data);
  }
}
gi.create = (e) => new gi({
  typeName: L.ZodNull,
  ...j(e)
});
class yr extends A {
  constructor() {
    super(...arguments), this._any = !0;
  }
  _parse(t) {
    return Ie(t.data);
  }
}
yr.create = (e) => new yr({
  typeName: L.ZodAny,
  ...j(e)
});
class Dn extends A {
  constructor() {
    super(...arguments), this._unknown = !0;
  }
  _parse(t) {
    return Ie(t.data);
  }
}
Dn.create = (e) => new Dn({
  typeName: L.ZodUnknown,
  ...j(e)
});
class Zt extends A {
  _parse(t) {
    const n = this._getOrReturnCtx(t);
    return O(n, {
      code: k.invalid_type,
      expected: N.never,
      received: n.parsedType
    }), z;
  }
}
Zt.create = (e) => new Zt({
  typeName: L.ZodNever,
  ...j(e)
});
class Ao extends A {
  _parse(t) {
    if (this._getType(t) !== N.undefined) {
      const r = this._getOrReturnCtx(t);
      return O(r, {
        code: k.invalid_type,
        expected: N.void,
        received: r.parsedType
      }), z;
    }
    return Ie(t.data);
  }
}
Ao.create = (e) => new Ao({
  typeName: L.ZodVoid,
  ...j(e)
});
class pt extends A {
  _parse(t) {
    const { ctx: n, status: r } = this._processInputParams(t), i = this._def;
    if (n.parsedType !== N.array)
      return O(n, {
        code: k.invalid_type,
        expected: N.array,
        received: n.parsedType
      }), z;
    if (i.exactLength !== null) {
      const a = n.data.length > i.exactLength.value, l = n.data.length < i.exactLength.value;
      (a || l) && (O(n, {
        code: a ? k.too_big : k.too_small,
        minimum: l ? i.exactLength.value : void 0,
        maximum: a ? i.exactLength.value : void 0,
        type: "array",
        inclusive: !0,
        exact: !0,
        message: i.exactLength.message
      }), r.dirty());
    }
    if (i.minLength !== null && n.data.length < i.minLength.value && (O(n, {
      code: k.too_small,
      minimum: i.minLength.value,
      type: "array",
      inclusive: !0,
      exact: !1,
      message: i.minLength.message
    }), r.dirty()), i.maxLength !== null && n.data.length > i.maxLength.value && (O(n, {
      code: k.too_big,
      maximum: i.maxLength.value,
      type: "array",
      inclusive: !0,
      exact: !1,
      message: i.maxLength.message
    }), r.dirty()), n.common.async)
      return Promise.all([...n.data].map((a, l) => i.type._parseAsync(new Tt(n, a, n.path, l)))).then((a) => Ne.mergeArray(r, a));
    const o = [...n.data].map((a, l) => i.type._parseSync(new Tt(n, a, n.path, l)));
    return Ne.mergeArray(r, o);
  }
  get element() {
    return this._def.type;
  }
  min(t, n) {
    return new pt({
      ...this._def,
      minLength: { value: t, message: P.toString(n) }
    });
  }
  max(t, n) {
    return new pt({
      ...this._def,
      maxLength: { value: t, message: P.toString(n) }
    });
  }
  length(t, n) {
    return new pt({
      ...this._def,
      exactLength: { value: t, message: P.toString(n) }
    });
  }
  nonempty(t) {
    return this.min(1, t);
  }
}
pt.create = (e, t) => new pt({
  type: e,
  minLength: null,
  maxLength: null,
  exactLength: null,
  typeName: L.ZodArray,
  ...j(t)
});
function Hn(e) {
  if (e instanceof te) {
    const t = {};
    for (const n in e.shape) {
      const r = e.shape[n];
      t[n] = At.create(Hn(r));
    }
    return new te({
      ...e._def,
      shape: () => t
    });
  } else
    return e instanceof pt ? new pt({
      ...e._def,
      type: Hn(e.element)
    }) : e instanceof At ? At.create(Hn(e.unwrap())) : e instanceof Un ? Un.create(Hn(e.unwrap())) : e instanceof Et ? Et.create(e.items.map((t) => Hn(t))) : e;
}
class te extends A {
  constructor() {
    super(...arguments), this._cached = null, this.nonstrict = this.passthrough, this.augment = this.extend;
  }
  _getCached() {
    if (this._cached !== null)
      return this._cached;
    const t = this._def.shape(), n = Z.objectKeys(t);
    return this._cached = { shape: t, keys: n };
  }
  _parse(t) {
    if (this._getType(t) !== N.object) {
      const u = this._getOrReturnCtx(t);
      return O(u, {
        code: k.invalid_type,
        expected: N.object,
        received: u.parsedType
      }), z;
    }
    const { status: r, ctx: i } = this._processInputParams(t), { shape: o, keys: a } = this._getCached(), l = [];
    if (!(this._def.catchall instanceof Zt && this._def.unknownKeys === "strip"))
      for (const u in i.data)
        a.includes(u) || l.push(u);
    const s = [];
    for (const u of a) {
      const f = o[u], h = i.data[u];
      s.push({
        key: { status: "valid", value: u },
        value: f._parse(new Tt(i, h, i.path, u)),
        alwaysSet: u in i.data
      });
    }
    if (this._def.catchall instanceof Zt) {
      const u = this._def.unknownKeys;
      if (u === "passthrough")
        for (const f of l)
          s.push({
            key: { status: "valid", value: f },
            value: { status: "valid", value: i.data[f] }
          });
      else if (u === "strict")
        l.length > 0 && (O(i, {
          code: k.unrecognized_keys,
          keys: l
        }), r.dirty());
      else if (u !== "strip")
        throw new Error("Internal ZodObject error: invalid unknownKeys value.");
    } else {
      const u = this._def.catchall;
      for (const f of l) {
        const h = i.data[f];
        s.push({
          key: { status: "valid", value: f },
          value: u._parse(
            new Tt(i, h, i.path, f)
            //, ctx.child(key), value, getParsedType(value)
          ),
          alwaysSet: f in i.data
        });
      }
    }
    return i.common.async ? Promise.resolve().then(async () => {
      const u = [];
      for (const f of s) {
        const h = await f.key;
        u.push({
          key: h,
          value: await f.value,
          alwaysSet: f.alwaysSet
        });
      }
      return u;
    }).then((u) => Ne.mergeObjectSync(r, u)) : Ne.mergeObjectSync(r, s);
  }
  get shape() {
    return this._def.shape();
  }
  strict(t) {
    return P.errToObj, new te({
      ...this._def,
      unknownKeys: "strict",
      ...t !== void 0 ? {
        errorMap: (n, r) => {
          var i, o, a, l;
          const s = (a = (o = (i = this._def).errorMap) === null || o === void 0 ? void 0 : o.call(i, n, r).message) !== null && a !== void 0 ? a : r.defaultError;
          return n.code === "unrecognized_keys" ? {
            message: (l = P.errToObj(t).message) !== null && l !== void 0 ? l : s
          } : {
            message: s
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
    return Z.objectKeys(t).forEach((r) => {
      t[r] && this.shape[r] && (n[r] = this.shape[r]);
    }), new te({
      ...this._def,
      shape: () => n
    });
  }
  omit(t) {
    const n = {};
    return Z.objectKeys(this.shape).forEach((r) => {
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
    return Hn(this);
  }
  partial(t) {
    const n = {};
    return Z.objectKeys(this.shape).forEach((r) => {
      const i = this.shape[r];
      t && !t[r] ? n[r] = i : n[r] = i.optional();
    }), new te({
      ...this._def,
      shape: () => n
    });
  }
  required(t) {
    const n = {};
    return Z.objectKeys(this.shape).forEach((r) => {
      if (t && !t[r])
        n[r] = this.shape[r];
      else {
        let o = this.shape[r];
        for (; o instanceof At; )
          o = o._def.innerType;
        n[r] = o;
      }
    }), new te({
      ...this._def,
      shape: () => n
    });
  }
  keyof() {
    return op(Z.objectKeys(this.shape));
  }
}
te.create = (e, t) => new te({
  shape: () => e,
  unknownKeys: "strip",
  catchall: Zt.create(),
  typeName: L.ZodObject,
  ...j(t)
});
te.strictCreate = (e, t) => new te({
  shape: () => e,
  unknownKeys: "strict",
  catchall: Zt.create(),
  typeName: L.ZodObject,
  ...j(t)
});
te.lazycreate = (e, t) => new te({
  shape: e,
  unknownKeys: "strip",
  catchall: Zt.create(),
  typeName: L.ZodObject,
  ...j(t)
});
class yi extends A {
  _parse(t) {
    const { ctx: n } = this._processInputParams(t), r = this._def.options;
    function i(o) {
      for (const l of o)
        if (l.result.status === "valid")
          return l.result;
      for (const l of o)
        if (l.result.status === "dirty")
          return n.common.issues.push(...l.ctx.common.issues), l.result;
      const a = o.map((l) => new ft(l.ctx.common.issues));
      return O(n, {
        code: k.invalid_union,
        unionErrors: a
      }), z;
    }
    if (n.common.async)
      return Promise.all(r.map(async (o) => {
        const a = {
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
            parent: a
          }),
          ctx: a
        };
      })).then(i);
    {
      let o;
      const a = [];
      for (const s of r) {
        const u = {
          ...n,
          common: {
            ...n.common,
            issues: []
          },
          parent: null
        }, f = s._parseSync({
          data: n.data,
          path: n.path,
          parent: u
        });
        if (f.status === "valid")
          return f;
        f.status === "dirty" && !o && (o = { result: f, ctx: u }), u.common.issues.length && a.push(u.common.issues);
      }
      if (o)
        return n.common.issues.push(...o.ctx.common.issues), o.result;
      const l = a.map((s) => new ft(s));
      return O(n, {
        code: k.invalid_union,
        unionErrors: l
      }), z;
    }
  }
  get options() {
    return this._def.options;
  }
}
yi.create = (e, t) => new yi({
  options: e,
  typeName: L.ZodUnion,
  ...j(t)
});
const so = (e) => e instanceof ki ? so(e.schema) : e instanceof mt ? so(e.innerType()) : e instanceof Si ? [e.value] : e instanceof vn ? e.options : e instanceof xi ? Object.keys(e.enum) : e instanceof Ci ? so(e._def.innerType) : e instanceof vi ? [void 0] : e instanceof gi ? [null] : null;
class ca extends A {
  _parse(t) {
    const { ctx: n } = this._processInputParams(t);
    if (n.parsedType !== N.object)
      return O(n, {
        code: k.invalid_type,
        expected: N.object,
        received: n.parsedType
      }), z;
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
      code: k.invalid_union_discriminator,
      options: Array.from(this.optionsMap.keys()),
      path: [r]
    }), z);
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
      const a = so(o.shape[t]);
      if (!a)
        throw new Error(`A discriminator value for key \`${t}\` could not be extracted from all schema options`);
      for (const l of a) {
        if (i.has(l))
          throw new Error(`Discriminator property ${String(t)} has duplicate value ${String(l)}`);
        i.set(l, o);
      }
    }
    return new ca({
      typeName: L.ZodDiscriminatedUnion,
      discriminator: t,
      options: n,
      optionsMap: i,
      ...j(r)
    });
  }
}
function bl(e, t) {
  const n = Jt(e), r = Jt(t);
  if (e === t)
    return { valid: !0, data: e };
  if (n === N.object && r === N.object) {
    const i = Z.objectKeys(t), o = Z.objectKeys(e).filter((l) => i.indexOf(l) !== -1), a = { ...e, ...t };
    for (const l of o) {
      const s = bl(e[l], t[l]);
      if (!s.valid)
        return { valid: !1 };
      a[l] = s.data;
    }
    return { valid: !0, data: a };
  } else if (n === N.array && r === N.array) {
    if (e.length !== t.length)
      return { valid: !1 };
    const i = [];
    for (let o = 0; o < e.length; o++) {
      const a = e[o], l = t[o], s = bl(a, l);
      if (!s.valid)
        return { valid: !1 };
      i.push(s.data);
    }
    return { valid: !0, data: i };
  } else
    return n === N.date && r === N.date && +e == +t ? { valid: !0, data: e } : { valid: !1 };
}
class wi extends A {
  _parse(t) {
    const { status: n, ctx: r } = this._processInputParams(t), i = (o, a) => {
      if (ql(o) || ql(a))
        return z;
      const l = bl(o.value, a.value);
      return l.valid ? ((Jl(o) || Jl(a)) && n.dirty(), { status: n.value, value: l.data }) : (O(r, {
        code: k.invalid_intersection_types
      }), z);
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
    ]).then(([o, a]) => i(o, a)) : i(this._def.left._parseSync({
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
wi.create = (e, t, n) => new wi({
  left: e,
  right: t,
  typeName: L.ZodIntersection,
  ...j(n)
});
class Et extends A {
  _parse(t) {
    const { status: n, ctx: r } = this._processInputParams(t);
    if (r.parsedType !== N.array)
      return O(r, {
        code: k.invalid_type,
        expected: N.array,
        received: r.parsedType
      }), z;
    if (r.data.length < this._def.items.length)
      return O(r, {
        code: k.too_small,
        minimum: this._def.items.length,
        inclusive: !0,
        exact: !1,
        type: "array"
      }), z;
    !this._def.rest && r.data.length > this._def.items.length && (O(r, {
      code: k.too_big,
      maximum: this._def.items.length,
      inclusive: !0,
      exact: !1,
      type: "array"
    }), n.dirty());
    const o = [...r.data].map((a, l) => {
      const s = this._def.items[l] || this._def.rest;
      return s ? s._parse(new Tt(r, a, r.path, l)) : null;
    }).filter((a) => !!a);
    return r.common.async ? Promise.all(o).then((a) => Ne.mergeArray(n, a)) : Ne.mergeArray(n, o);
  }
  get items() {
    return this._def.items;
  }
  rest(t) {
    return new Et({
      ...this._def,
      rest: t
    });
  }
}
Et.create = (e, t) => {
  if (!Array.isArray(e))
    throw new Error("You must pass an array of schemas to z.tuple([ ... ])");
  return new Et({
    items: e,
    typeName: L.ZodTuple,
    rest: null,
    ...j(t)
  });
};
class _i extends A {
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
        code: k.invalid_type,
        expected: N.object,
        received: r.parsedType
      }), z;
    const i = [], o = this._def.keyType, a = this._def.valueType;
    for (const l in r.data)
      i.push({
        key: o._parse(new Tt(r, l, r.path, l)),
        value: a._parse(new Tt(r, r.data[l], r.path, l))
      });
    return r.common.async ? Ne.mergeObjectAsync(n, i) : Ne.mergeObjectSync(n, i);
  }
  get element() {
    return this._def.valueType;
  }
  static create(t, n, r) {
    return n instanceof A ? new _i({
      keyType: t,
      valueType: n,
      typeName: L.ZodRecord,
      ...j(r)
    }) : new _i({
      keyType: ut.create(),
      valueType: t,
      typeName: L.ZodRecord,
      ...j(n)
    });
  }
}
class $o extends A {
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
        code: k.invalid_type,
        expected: N.map,
        received: r.parsedType
      }), z;
    const i = this._def.keyType, o = this._def.valueType, a = [...r.data.entries()].map(([l, s], u) => ({
      key: i._parse(new Tt(r, l, r.path, [u, "key"])),
      value: o._parse(new Tt(r, s, r.path, [u, "value"]))
    }));
    if (r.common.async) {
      const l = /* @__PURE__ */ new Map();
      return Promise.resolve().then(async () => {
        for (const s of a) {
          const u = await s.key, f = await s.value;
          if (u.status === "aborted" || f.status === "aborted")
            return z;
          (u.status === "dirty" || f.status === "dirty") && n.dirty(), l.set(u.value, f.value);
        }
        return { status: n.value, value: l };
      });
    } else {
      const l = /* @__PURE__ */ new Map();
      for (const s of a) {
        const u = s.key, f = s.value;
        if (u.status === "aborted" || f.status === "aborted")
          return z;
        (u.status === "dirty" || f.status === "dirty") && n.dirty(), l.set(u.value, f.value);
      }
      return { status: n.value, value: l };
    }
  }
}
$o.create = (e, t, n) => new $o({
  valueType: t,
  keyType: e,
  typeName: L.ZodMap,
  ...j(n)
});
class jn extends A {
  _parse(t) {
    const { status: n, ctx: r } = this._processInputParams(t);
    if (r.parsedType !== N.set)
      return O(r, {
        code: k.invalid_type,
        expected: N.set,
        received: r.parsedType
      }), z;
    const i = this._def;
    i.minSize !== null && r.data.size < i.minSize.value && (O(r, {
      code: k.too_small,
      minimum: i.minSize.value,
      type: "set",
      inclusive: !0,
      exact: !1,
      message: i.minSize.message
    }), n.dirty()), i.maxSize !== null && r.data.size > i.maxSize.value && (O(r, {
      code: k.too_big,
      maximum: i.maxSize.value,
      type: "set",
      inclusive: !0,
      exact: !1,
      message: i.maxSize.message
    }), n.dirty());
    const o = this._def.valueType;
    function a(s) {
      const u = /* @__PURE__ */ new Set();
      for (const f of s) {
        if (f.status === "aborted")
          return z;
        f.status === "dirty" && n.dirty(), u.add(f.value);
      }
      return { status: n.value, value: u };
    }
    const l = [...r.data.values()].map((s, u) => o._parse(new Tt(r, s, r.path, u)));
    return r.common.async ? Promise.all(l).then((s) => a(s)) : a(l);
  }
  min(t, n) {
    return new jn({
      ...this._def,
      minSize: { value: t, message: P.toString(n) }
    });
  }
  max(t, n) {
    return new jn({
      ...this._def,
      maxSize: { value: t, message: P.toString(n) }
    });
  }
  size(t, n) {
    return this.min(t, n).max(t, n);
  }
  nonempty(t) {
    return this.min(1, t);
  }
}
jn.create = (e, t) => new jn({
  valueType: e,
  minSize: null,
  maxSize: null,
  typeName: L.ZodSet,
  ...j(t)
});
class ur extends A {
  constructor() {
    super(...arguments), this.validate = this.implement;
  }
  _parse(t) {
    const { ctx: n } = this._processInputParams(t);
    if (n.parsedType !== N.function)
      return O(n, {
        code: k.invalid_type,
        expected: N.function,
        received: n.parsedType
      }), z;
    function r(l, s) {
      return zo({
        data: l,
        path: n.path,
        errorMaps: [
          n.common.contextualErrorMap,
          n.schemaErrorMap,
          Io(),
          pi
        ].filter((u) => !!u),
        issueData: {
          code: k.invalid_arguments,
          argumentsError: s
        }
      });
    }
    function i(l, s) {
      return zo({
        data: l,
        path: n.path,
        errorMaps: [
          n.common.contextualErrorMap,
          n.schemaErrorMap,
          Io(),
          pi
        ].filter((u) => !!u),
        issueData: {
          code: k.invalid_return_type,
          returnTypeError: s
        }
      });
    }
    const o = { errorMap: n.common.contextualErrorMap }, a = n.data;
    if (this._def.returns instanceof wr) {
      const l = this;
      return Ie(async function(...s) {
        const u = new ft([]), f = await l._def.args.parseAsync(s, o).catch((v) => {
          throw u.addIssue(r(s, v)), u;
        }), h = await Reflect.apply(a, this, f);
        return await l._def.returns._def.type.parseAsync(h, o).catch((v) => {
          throw u.addIssue(i(h, v)), u;
        });
      });
    } else {
      const l = this;
      return Ie(function(...s) {
        const u = l._def.args.safeParse(s, o);
        if (!u.success)
          throw new ft([r(s, u.error)]);
        const f = Reflect.apply(a, this, u.data), h = l._def.returns.safeParse(f, o);
        if (!h.success)
          throw new ft([i(f, h.error)]);
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
    return new ur({
      ...this._def,
      args: Et.create(t).rest(Dn.create())
    });
  }
  returns(t) {
    return new ur({
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
    return new ur({
      args: t || Et.create([]).rest(Dn.create()),
      returns: n || Dn.create(),
      typeName: L.ZodFunction,
      ...j(r)
    });
  }
}
class ki extends A {
  get schema() {
    return this._def.getter();
  }
  _parse(t) {
    const { ctx: n } = this._processInputParams(t);
    return this._def.getter()._parse({ data: n.data, path: n.path, parent: n });
  }
}
ki.create = (e, t) => new ki({
  getter: e,
  typeName: L.ZodLazy,
  ...j(t)
});
class Si extends A {
  _parse(t) {
    if (t.data !== this._def.value) {
      const n = this._getOrReturnCtx(t);
      return O(n, {
        received: n.data,
        code: k.invalid_literal,
        expected: this._def.value
      }), z;
    }
    return { status: "valid", value: t.data };
  }
  get value() {
    return this._def.value;
  }
}
Si.create = (e, t) => new Si({
  value: e,
  typeName: L.ZodLiteral,
  ...j(t)
});
function op(e, t) {
  return new vn({
    values: e,
    typeName: L.ZodEnum,
    ...j(t)
  });
}
class vn extends A {
  _parse(t) {
    if (typeof t.data != "string") {
      const n = this._getOrReturnCtx(t), r = this._def.values;
      return O(n, {
        expected: Z.joinValues(r),
        received: n.parsedType,
        code: k.invalid_type
      }), z;
    }
    if (this._def.values.indexOf(t.data) === -1) {
      const n = this._getOrReturnCtx(t), r = this._def.values;
      return O(n, {
        received: n.data,
        code: k.invalid_enum_value,
        options: r
      }), z;
    }
    return Ie(t.data);
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
    return vn.create(t);
  }
  exclude(t) {
    return vn.create(this.options.filter((n) => !t.includes(n)));
  }
}
vn.create = op;
class xi extends A {
  _parse(t) {
    const n = Z.getValidEnumValues(this._def.values), r = this._getOrReturnCtx(t);
    if (r.parsedType !== N.string && r.parsedType !== N.number) {
      const i = Z.objectValues(n);
      return O(r, {
        expected: Z.joinValues(i),
        received: r.parsedType,
        code: k.invalid_type
      }), z;
    }
    if (n.indexOf(t.data) === -1) {
      const i = Z.objectValues(n);
      return O(r, {
        received: r.data,
        code: k.invalid_enum_value,
        options: i
      }), z;
    }
    return Ie(t.data);
  }
  get enum() {
    return this._def.values;
  }
}
xi.create = (e, t) => new xi({
  values: e,
  typeName: L.ZodNativeEnum,
  ...j(t)
});
class wr extends A {
  unwrap() {
    return this._def.type;
  }
  _parse(t) {
    const { ctx: n } = this._processInputParams(t);
    if (n.parsedType !== N.promise && n.common.async === !1)
      return O(n, {
        code: k.invalid_type,
        expected: N.promise,
        received: n.parsedType
      }), z;
    const r = n.parsedType === N.promise ? n.data : Promise.resolve(n.data);
    return Ie(r.then((i) => this._def.type.parseAsync(i, {
      path: n.path,
      errorMap: n.common.contextualErrorMap
    })));
  }
}
wr.create = (e, t) => new wr({
  type: e,
  typeName: L.ZodPromise,
  ...j(t)
});
class mt extends A {
  innerType() {
    return this._def.schema;
  }
  sourceType() {
    return this._def.schema._def.typeName === L.ZodEffects ? this._def.schema.sourceType() : this._def.schema;
  }
  _parse(t) {
    const { status: n, ctx: r } = this._processInputParams(t), i = this._def.effect || null, o = {
      addIssue: (a) => {
        O(r, a), a.fatal ? n.abort() : n.dirty();
      },
      get path() {
        return r.path;
      }
    };
    if (o.addIssue = o.addIssue.bind(o), i.type === "preprocess") {
      const a = i.transform(r.data, o);
      return r.common.issues.length ? {
        status: "dirty",
        value: r.data
      } : r.common.async ? Promise.resolve(a).then((l) => this._def.schema._parseAsync({
        data: l,
        path: r.path,
        parent: r
      })) : this._def.schema._parseSync({
        data: a,
        path: r.path,
        parent: r
      });
    }
    if (i.type === "refinement") {
      const a = (l) => {
        const s = i.refinement(l, o);
        if (r.common.async)
          return Promise.resolve(s);
        if (s instanceof Promise)
          throw new Error("Async refinement encountered during synchronous parse operation. Use .parseAsync instead.");
        return l;
      };
      if (r.common.async === !1) {
        const l = this._def.schema._parseSync({
          data: r.data,
          path: r.path,
          parent: r
        });
        return l.status === "aborted" ? z : (l.status === "dirty" && n.dirty(), a(l.value), { status: n.value, value: l.value });
      } else
        return this._def.schema._parseAsync({ data: r.data, path: r.path, parent: r }).then((l) => l.status === "aborted" ? z : (l.status === "dirty" && n.dirty(), a(l.value).then(() => ({ status: n.value, value: l.value }))));
    }
    if (i.type === "transform")
      if (r.common.async === !1) {
        const a = this._def.schema._parseSync({
          data: r.data,
          path: r.path,
          parent: r
        });
        if (!hi(a))
          return a;
        const l = i.transform(a.value, o);
        if (l instanceof Promise)
          throw new Error("Asynchronous transform encountered during synchronous parse operation. Use .parseAsync instead.");
        return { status: n.value, value: l };
      } else
        return this._def.schema._parseAsync({ data: r.data, path: r.path, parent: r }).then((a) => hi(a) ? Promise.resolve(i.transform(a.value, o)).then((l) => ({ status: n.value, value: l })) : a);
    Z.assertNever(i);
  }
}
mt.create = (e, t, n) => new mt({
  schema: e,
  typeName: L.ZodEffects,
  effect: t,
  ...j(n)
});
mt.createWithPreprocess = (e, t, n) => new mt({
  schema: t,
  effect: { type: "preprocess", transform: e },
  typeName: L.ZodEffects,
  ...j(n)
});
class At extends A {
  _parse(t) {
    return this._getType(t) === N.undefined ? Ie(void 0) : this._def.innerType._parse(t);
  }
  unwrap() {
    return this._def.innerType;
  }
}
At.create = (e, t) => new At({
  innerType: e,
  typeName: L.ZodOptional,
  ...j(t)
});
class Un extends A {
  _parse(t) {
    return this._getType(t) === N.null ? Ie(null) : this._def.innerType._parse(t);
  }
  unwrap() {
    return this._def.innerType;
  }
}
Un.create = (e, t) => new Un({
  innerType: e,
  typeName: L.ZodNullable,
  ...j(t)
});
class Ci extends A {
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
Ci.create = (e, t) => new Ci({
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
    return jo(i) ? i.then((o) => ({
      status: "valid",
      value: o.status === "valid" ? o.value : this._def.catchValue({
        get error() {
          return new ft(r.common.issues);
        },
        input: r.data
      })
    })) : {
      status: "valid",
      value: i.status === "valid" ? i.value : this._def.catchValue({
        get error() {
          return new ft(r.common.issues);
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
        code: k.invalid_type,
        expected: N.nan,
        received: r.parsedType
      }), z;
    }
    return { status: "valid", value: t.data };
  }
}
Vo.create = (e) => new Vo({
  typeName: L.ZodNaN,
  ...j(e)
});
const Kv = Symbol("zod_brand");
class ap extends A {
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
class Pi extends A {
  _parse(t) {
    const { status: n, ctx: r } = this._processInputParams(t);
    if (r.common.async)
      return (async () => {
        const o = await this._def.in._parseAsync({
          data: r.data,
          path: r.path,
          parent: r
        });
        return o.status === "aborted" ? z : o.status === "dirty" ? (n.dirty(), ip(o.value)) : this._def.out._parseAsync({
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
      return i.status === "aborted" ? z : i.status === "dirty" ? (n.dirty(), {
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
    return new Pi({
      in: t,
      out: n,
      typeName: L.ZodPipeline
    });
  }
}
class Wo extends A {
  _parse(t) {
    const n = this._def.innerType._parse(t);
    return hi(n) && (n.value = Object.freeze(n.value)), n;
  }
}
Wo.create = (e, t) => new Wo({
  innerType: e,
  typeName: L.ZodReadonly,
  ...j(t)
});
const lp = (e, t = {}, n) => e ? yr.create().superRefine((r, i) => {
  var o, a;
  if (!e(r)) {
    const l = typeof t == "function" ? t(r) : typeof t == "string" ? { message: t } : t, s = (a = (o = l.fatal) !== null && o !== void 0 ? o : n) !== null && a !== void 0 ? a : !0, u = typeof l == "string" ? { message: l } : l;
    i.addIssue({ code: "custom", ...u, fatal: s });
  }
}) : yr.create(), Xv = {
  object: te.lazycreate
};
var L;
(function(e) {
  e.ZodString = "ZodString", e.ZodNumber = "ZodNumber", e.ZodNaN = "ZodNaN", e.ZodBigInt = "ZodBigInt", e.ZodBoolean = "ZodBoolean", e.ZodDate = "ZodDate", e.ZodSymbol = "ZodSymbol", e.ZodUndefined = "ZodUndefined", e.ZodNull = "ZodNull", e.ZodAny = "ZodAny", e.ZodUnknown = "ZodUnknown", e.ZodNever = "ZodNever", e.ZodVoid = "ZodVoid", e.ZodArray = "ZodArray", e.ZodObject = "ZodObject", e.ZodUnion = "ZodUnion", e.ZodDiscriminatedUnion = "ZodDiscriminatedUnion", e.ZodIntersection = "ZodIntersection", e.ZodTuple = "ZodTuple", e.ZodRecord = "ZodRecord", e.ZodMap = "ZodMap", e.ZodSet = "ZodSet", e.ZodFunction = "ZodFunction", e.ZodLazy = "ZodLazy", e.ZodLiteral = "ZodLiteral", e.ZodEnum = "ZodEnum", e.ZodEffects = "ZodEffects", e.ZodNativeEnum = "ZodNativeEnum", e.ZodOptional = "ZodOptional", e.ZodNullable = "ZodNullable", e.ZodDefault = "ZodDefault", e.ZodCatch = "ZodCatch", e.ZodPromise = "ZodPromise", e.ZodBranded = "ZodBranded", e.ZodPipeline = "ZodPipeline", e.ZodReadonly = "ZodReadonly";
})(L || (L = {}));
const qv = (e, t = {
  message: `Input not instance of ${e.name}`
}) => lp((n) => n instanceof e, t), sp = ut.create, up = hn.create, Jv = Vo.create, bv = mn.create, cp = mi.create, e0 = zn.create, t0 = Uo.create, n0 = vi.create, r0 = gi.create, i0 = yr.create, o0 = Dn.create, a0 = Zt.create, l0 = Ao.create, s0 = pt.create, u0 = te.create, c0 = te.strictCreate, d0 = yi.create, f0 = ca.create, p0 = wi.create, h0 = Et.create, m0 = _i.create, v0 = $o.create, g0 = jn.create, y0 = ur.create, w0 = ki.create, _0 = Si.create, k0 = vn.create, S0 = xi.create, x0 = wr.create, yc = mt.create, C0 = At.create, T0 = Un.create, E0 = mt.createWithPreprocess, N0 = Pi.create, O0 = () => sp().optional(), D0 = () => up().optional(), P0 = () => cp().optional(), M0 = {
  string: (e) => ut.create({ ...e, coerce: !0 }),
  number: (e) => hn.create({ ...e, coerce: !0 }),
  boolean: (e) => mi.create({
    ...e,
    coerce: !0
  }),
  bigint: (e) => mn.create({ ...e, coerce: !0 }),
  date: (e) => zn.create({ ...e, coerce: !0 })
}, L0 = z;
var ne = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  defaultErrorMap: pi,
  setErrorMap: jv,
  getErrorMap: Io,
  makeIssue: zo,
  EMPTY_PATH: Uv,
  addIssueToContext: O,
  ParseStatus: Ne,
  INVALID: z,
  DIRTY: ip,
  OK: Ie,
  isAborted: ql,
  isDirty: Jl,
  isValid: hi,
  isAsync: jo,
  get util() {
    return Z;
  },
  get objectUtil() {
    return Xl;
  },
  ZodParsedType: N,
  getParsedType: Jt,
  ZodType: A,
  ZodString: ut,
  ZodNumber: hn,
  ZodBigInt: mn,
  ZodBoolean: mi,
  ZodDate: zn,
  ZodSymbol: Uo,
  ZodUndefined: vi,
  ZodNull: gi,
  ZodAny: yr,
  ZodUnknown: Dn,
  ZodNever: Zt,
  ZodVoid: Ao,
  ZodArray: pt,
  ZodObject: te,
  ZodUnion: yi,
  ZodDiscriminatedUnion: ca,
  ZodIntersection: wi,
  ZodTuple: Et,
  ZodRecord: _i,
  ZodMap: $o,
  ZodSet: jn,
  ZodFunction: ur,
  ZodLazy: ki,
  ZodLiteral: Si,
  ZodEnum: vn,
  ZodNativeEnum: xi,
  ZodPromise: wr,
  ZodEffects: mt,
  ZodTransformer: mt,
  ZodOptional: At,
  ZodNullable: Un,
  ZodDefault: Ci,
  ZodCatch: Fo,
  ZodNaN: Vo,
  BRAND: Kv,
  ZodBranded: ap,
  ZodPipeline: Pi,
  ZodReadonly: Wo,
  custom: lp,
  Schema: A,
  ZodSchema: A,
  late: Xv,
  get ZodFirstPartyTypeKind() {
    return L;
  },
  coerce: M0,
  any: i0,
  array: s0,
  bigint: bv,
  boolean: cp,
  date: e0,
  discriminatedUnion: f0,
  effect: yc,
  enum: k0,
  function: y0,
  instanceof: qv,
  intersection: p0,
  lazy: w0,
  literal: _0,
  map: v0,
  nan: Jv,
  nativeEnum: S0,
  never: a0,
  null: r0,
  nullable: T0,
  number: up,
  object: u0,
  oboolean: P0,
  onumber: D0,
  optional: C0,
  ostring: O0,
  pipeline: N0,
  preprocess: E0,
  promise: x0,
  record: m0,
  set: g0,
  strictObject: c0,
  string: sp,
  symbol: t0,
  transformer: yc,
  tuple: h0,
  undefined: n0,
  union: d0,
  unknown: o0,
  void: l0,
  NEVER: L0,
  ZodIssueCode: k,
  quotelessJson: zv,
  ZodError: ft
});
const dp = ne.object({
  MemberCount: ne.number(),
  OnTrackCount: ne.number(),
  OnTrackOnDateCount: ne.number()
}), fp = ne.object({
  MemberCount: ne.number(),
  ContributionAmount: ne.number()
}), pp = ne.object({
  ContributionAmount: ne.number()
}), R0 = ne.object({
  Name: ne.string(),
  MemberCount: ne.number(),
  BUKStatus: dp,
  SamvirkStatus: fp,
  AHStatus: pp
}), I0 = ne.object({
  Title: ne.string(),
  DateFrom: ne.string(),
  DateTo: ne.string(),
  MyShareTargetOnDate: ne.number(),
  MyShareNextThreshold: ne.number(),
  SamvirkGoalPerMonth: ne.number(),
  SamvirkGoalPerSprint: ne.number(),
  Teams: ne.array(R0),
  ReportDate: ne.string()
}), z0 = ne.array(I0);
dp.or(fp).or(pp);
function Zo(e) {
  "@babel/helpers - typeof";
  return Zo = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
    return typeof t;
  } : function(t) {
    return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
  }, Zo(e);
}
function An(e) {
  if (e === null || e === !0 || e === !1)
    return NaN;
  var t = Number(e);
  return isNaN(t) ? t : t < 0 ? Math.ceil(t) : Math.floor(t);
}
function Ue(e, t) {
  if (t.length < e)
    throw new TypeError(e + " argument" + (e > 1 ? "s" : "") + " required, but only " + t.length + " present");
}
function Nt(e) {
  Ue(1, arguments);
  var t = Object.prototype.toString.call(e);
  return e instanceof Date || Zo(e) === "object" && t === "[object Date]" ? new Date(e.getTime()) : typeof e == "number" || t === "[object Number]" ? new Date(e) : ((typeof e == "string" || t === "[object String]") && typeof console < "u" && (console.warn("Starting with v2.0.0-beta.1 date-fns doesn't accept strings as date arguments. Please use `parseISO` to parse strings. See: https://github.com/date-fns/date-fns/blob/master/docs/upgradeGuide.md#string-arguments"), console.warn(new Error().stack)), /* @__PURE__ */ new Date(NaN));
}
function j0(e, t) {
  Ue(2, arguments);
  var n = Nt(e).getTime(), r = An(t);
  return new Date(n + r);
}
var U0 = {};
function da() {
  return U0;
}
function A0(e) {
  var t = new Date(Date.UTC(e.getFullYear(), e.getMonth(), e.getDate(), e.getHours(), e.getMinutes(), e.getSeconds(), e.getMilliseconds()));
  return t.setUTCFullYear(e.getFullYear()), e.getTime() - t.getTime();
}
function $0(e) {
  return Ue(1, arguments), e instanceof Date || Zo(e) === "object" && Object.prototype.toString.call(e) === "[object Date]";
}
function F0(e) {
  if (Ue(1, arguments), !$0(e) && typeof e != "number")
    return !1;
  var t = Nt(e);
  return !isNaN(Number(t));
}
function V0(e, t) {
  Ue(2, arguments);
  var n = An(t);
  return j0(e, -n);
}
var W0 = 864e5;
function Z0(e) {
  Ue(1, arguments);
  var t = Nt(e), n = t.getTime();
  t.setUTCMonth(0, 1), t.setUTCHours(0, 0, 0, 0);
  var r = t.getTime(), i = n - r;
  return Math.floor(i / W0) + 1;
}
function Ho(e) {
  Ue(1, arguments);
  var t = 1, n = Nt(e), r = n.getUTCDay(), i = (r < t ? 7 : 0) + r - t;
  return n.setUTCDate(n.getUTCDate() - i), n.setUTCHours(0, 0, 0, 0), n;
}
function hp(e) {
  Ue(1, arguments);
  var t = Nt(e), n = t.getUTCFullYear(), r = /* @__PURE__ */ new Date(0);
  r.setUTCFullYear(n + 1, 0, 4), r.setUTCHours(0, 0, 0, 0);
  var i = Ho(r), o = /* @__PURE__ */ new Date(0);
  o.setUTCFullYear(n, 0, 4), o.setUTCHours(0, 0, 0, 0);
  var a = Ho(o);
  return t.getTime() >= i.getTime() ? n + 1 : t.getTime() >= a.getTime() ? n : n - 1;
}
function H0(e) {
  Ue(1, arguments);
  var t = hp(e), n = /* @__PURE__ */ new Date(0);
  n.setUTCFullYear(t, 0, 4), n.setUTCHours(0, 0, 0, 0);
  var r = Ho(n);
  return r;
}
var Y0 = 6048e5;
function B0(e) {
  Ue(1, arguments);
  var t = Nt(e), n = Ho(t).getTime() - H0(t).getTime();
  return Math.round(n / Y0) + 1;
}
function Yo(e, t) {
  var n, r, i, o, a, l, s, u;
  Ue(1, arguments);
  var f = da(), h = An((n = (r = (i = (o = t == null ? void 0 : t.weekStartsOn) !== null && o !== void 0 ? o : t == null || (a = t.locale) === null || a === void 0 || (l = a.options) === null || l === void 0 ? void 0 : l.weekStartsOn) !== null && i !== void 0 ? i : f.weekStartsOn) !== null && r !== void 0 ? r : (s = f.locale) === null || s === void 0 || (u = s.options) === null || u === void 0 ? void 0 : u.weekStartsOn) !== null && n !== void 0 ? n : 0);
  if (!(h >= 0 && h <= 6))
    throw new RangeError("weekStartsOn must be between 0 and 6 inclusively");
  var m = Nt(e), v = m.getUTCDay(), y = (v < h ? 7 : 0) + v - h;
  return m.setUTCDate(m.getUTCDate() - y), m.setUTCHours(0, 0, 0, 0), m;
}
function mp(e, t) {
  var n, r, i, o, a, l, s, u;
  Ue(1, arguments);
  var f = Nt(e), h = f.getUTCFullYear(), m = da(), v = An((n = (r = (i = (o = t == null ? void 0 : t.firstWeekContainsDate) !== null && o !== void 0 ? o : t == null || (a = t.locale) === null || a === void 0 || (l = a.options) === null || l === void 0 ? void 0 : l.firstWeekContainsDate) !== null && i !== void 0 ? i : m.firstWeekContainsDate) !== null && r !== void 0 ? r : (s = m.locale) === null || s === void 0 || (u = s.options) === null || u === void 0 ? void 0 : u.firstWeekContainsDate) !== null && n !== void 0 ? n : 1);
  if (!(v >= 1 && v <= 7))
    throw new RangeError("firstWeekContainsDate must be between 1 and 7 inclusively");
  var y = /* @__PURE__ */ new Date(0);
  y.setUTCFullYear(h + 1, 0, v), y.setUTCHours(0, 0, 0, 0);
  var _ = Yo(y, t), R = /* @__PURE__ */ new Date(0);
  R.setUTCFullYear(h, 0, v), R.setUTCHours(0, 0, 0, 0);
  var c = Yo(R, t);
  return f.getTime() >= _.getTime() ? h + 1 : f.getTime() >= c.getTime() ? h : h - 1;
}
function Q0(e, t) {
  var n, r, i, o, a, l, s, u;
  Ue(1, arguments);
  var f = da(), h = An((n = (r = (i = (o = t == null ? void 0 : t.firstWeekContainsDate) !== null && o !== void 0 ? o : t == null || (a = t.locale) === null || a === void 0 || (l = a.options) === null || l === void 0 ? void 0 : l.firstWeekContainsDate) !== null && i !== void 0 ? i : f.firstWeekContainsDate) !== null && r !== void 0 ? r : (s = f.locale) === null || s === void 0 || (u = s.options) === null || u === void 0 ? void 0 : u.firstWeekContainsDate) !== null && n !== void 0 ? n : 1), m = mp(e, t), v = /* @__PURE__ */ new Date(0);
  v.setUTCFullYear(m, 0, h), v.setUTCHours(0, 0, 0, 0);
  var y = Yo(v, t);
  return y;
}
var G0 = 6048e5;
function K0(e, t) {
  Ue(1, arguments);
  var n = Nt(e), r = Yo(n, t).getTime() - Q0(n, t).getTime();
  return Math.round(r / G0) + 1;
}
function Y(e, t) {
  for (var n = e < 0 ? "-" : "", r = Math.abs(e).toString(); r.length < t; )
    r = "0" + r;
  return n + r;
}
var X0 = {
  // Year
  y: function(t, n) {
    var r = t.getUTCFullYear(), i = r > 0 ? r : 1 - r;
    return Y(n === "yy" ? i % 100 : i, n.length);
  },
  // Month
  M: function(t, n) {
    var r = t.getUTCMonth();
    return n === "M" ? String(r + 1) : Y(r + 1, 2);
  },
  // Day of the month
  d: function(t, n) {
    return Y(t.getUTCDate(), n.length);
  },
  // AM or PM
  a: function(t, n) {
    var r = t.getUTCHours() / 12 >= 1 ? "pm" : "am";
    switch (n) {
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
  h: function(t, n) {
    return Y(t.getUTCHours() % 12 || 12, n.length);
  },
  // Hour [0-23]
  H: function(t, n) {
    return Y(t.getUTCHours(), n.length);
  },
  // Minute
  m: function(t, n) {
    return Y(t.getUTCMinutes(), n.length);
  },
  // Second
  s: function(t, n) {
    return Y(t.getUTCSeconds(), n.length);
  },
  // Fraction of second
  S: function(t, n) {
    var r = n.length, i = t.getUTCMilliseconds(), o = Math.floor(i * Math.pow(10, r - 3));
    return Y(o, n.length);
  }
};
const Qt = X0;
var Zn = {
  am: "am",
  pm: "pm",
  midnight: "midnight",
  noon: "noon",
  morning: "morning",
  afternoon: "afternoon",
  evening: "evening",
  night: "night"
}, q0 = {
  // Era
  G: function(t, n, r) {
    var i = t.getUTCFullYear() > 0 ? 1 : 0;
    switch (n) {
      case "G":
      case "GG":
      case "GGG":
        return r.era(i, {
          width: "abbreviated"
        });
      case "GGGGG":
        return r.era(i, {
          width: "narrow"
        });
      case "GGGG":
      default:
        return r.era(i, {
          width: "wide"
        });
    }
  },
  // Year
  y: function(t, n, r) {
    if (n === "yo") {
      var i = t.getUTCFullYear(), o = i > 0 ? i : 1 - i;
      return r.ordinalNumber(o, {
        unit: "year"
      });
    }
    return Qt.y(t, n);
  },
  // Local week-numbering year
  Y: function(t, n, r, i) {
    var o = mp(t, i), a = o > 0 ? o : 1 - o;
    if (n === "YY") {
      var l = a % 100;
      return Y(l, 2);
    }
    return n === "Yo" ? r.ordinalNumber(a, {
      unit: "year"
    }) : Y(a, n.length);
  },
  // ISO week-numbering year
  R: function(t, n) {
    var r = hp(t);
    return Y(r, n.length);
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
  u: function(t, n) {
    var r = t.getUTCFullYear();
    return Y(r, n.length);
  },
  // Quarter
  Q: function(t, n, r) {
    var i = Math.ceil((t.getUTCMonth() + 1) / 3);
    switch (n) {
      case "Q":
        return String(i);
      case "QQ":
        return Y(i, 2);
      case "Qo":
        return r.ordinalNumber(i, {
          unit: "quarter"
        });
      case "QQQ":
        return r.quarter(i, {
          width: "abbreviated",
          context: "formatting"
        });
      case "QQQQQ":
        return r.quarter(i, {
          width: "narrow",
          context: "formatting"
        });
      case "QQQQ":
      default:
        return r.quarter(i, {
          width: "wide",
          context: "formatting"
        });
    }
  },
  // Stand-alone quarter
  q: function(t, n, r) {
    var i = Math.ceil((t.getUTCMonth() + 1) / 3);
    switch (n) {
      case "q":
        return String(i);
      case "qq":
        return Y(i, 2);
      case "qo":
        return r.ordinalNumber(i, {
          unit: "quarter"
        });
      case "qqq":
        return r.quarter(i, {
          width: "abbreviated",
          context: "standalone"
        });
      case "qqqqq":
        return r.quarter(i, {
          width: "narrow",
          context: "standalone"
        });
      case "qqqq":
      default:
        return r.quarter(i, {
          width: "wide",
          context: "standalone"
        });
    }
  },
  // Month
  M: function(t, n, r) {
    var i = t.getUTCMonth();
    switch (n) {
      case "M":
      case "MM":
        return Qt.M(t, n);
      case "Mo":
        return r.ordinalNumber(i + 1, {
          unit: "month"
        });
      case "MMM":
        return r.month(i, {
          width: "abbreviated",
          context: "formatting"
        });
      case "MMMMM":
        return r.month(i, {
          width: "narrow",
          context: "formatting"
        });
      case "MMMM":
      default:
        return r.month(i, {
          width: "wide",
          context: "formatting"
        });
    }
  },
  // Stand-alone month
  L: function(t, n, r) {
    var i = t.getUTCMonth();
    switch (n) {
      case "L":
        return String(i + 1);
      case "LL":
        return Y(i + 1, 2);
      case "Lo":
        return r.ordinalNumber(i + 1, {
          unit: "month"
        });
      case "LLL":
        return r.month(i, {
          width: "abbreviated",
          context: "standalone"
        });
      case "LLLLL":
        return r.month(i, {
          width: "narrow",
          context: "standalone"
        });
      case "LLLL":
      default:
        return r.month(i, {
          width: "wide",
          context: "standalone"
        });
    }
  },
  // Local week of year
  w: function(t, n, r, i) {
    var o = K0(t, i);
    return n === "wo" ? r.ordinalNumber(o, {
      unit: "week"
    }) : Y(o, n.length);
  },
  // ISO week of year
  I: function(t, n, r) {
    var i = B0(t);
    return n === "Io" ? r.ordinalNumber(i, {
      unit: "week"
    }) : Y(i, n.length);
  },
  // Day of the month
  d: function(t, n, r) {
    return n === "do" ? r.ordinalNumber(t.getUTCDate(), {
      unit: "date"
    }) : Qt.d(t, n);
  },
  // Day of year
  D: function(t, n, r) {
    var i = Z0(t);
    return n === "Do" ? r.ordinalNumber(i, {
      unit: "dayOfYear"
    }) : Y(i, n.length);
  },
  // Day of week
  E: function(t, n, r) {
    var i = t.getUTCDay();
    switch (n) {
      case "E":
      case "EE":
      case "EEE":
        return r.day(i, {
          width: "abbreviated",
          context: "formatting"
        });
      case "EEEEE":
        return r.day(i, {
          width: "narrow",
          context: "formatting"
        });
      case "EEEEEE":
        return r.day(i, {
          width: "short",
          context: "formatting"
        });
      case "EEEE":
      default:
        return r.day(i, {
          width: "wide",
          context: "formatting"
        });
    }
  },
  // Local day of week
  e: function(t, n, r, i) {
    var o = t.getUTCDay(), a = (o - i.weekStartsOn + 8) % 7 || 7;
    switch (n) {
      case "e":
        return String(a);
      case "ee":
        return Y(a, 2);
      case "eo":
        return r.ordinalNumber(a, {
          unit: "day"
        });
      case "eee":
        return r.day(o, {
          width: "abbreviated",
          context: "formatting"
        });
      case "eeeee":
        return r.day(o, {
          width: "narrow",
          context: "formatting"
        });
      case "eeeeee":
        return r.day(o, {
          width: "short",
          context: "formatting"
        });
      case "eeee":
      default:
        return r.day(o, {
          width: "wide",
          context: "formatting"
        });
    }
  },
  // Stand-alone local day of week
  c: function(t, n, r, i) {
    var o = t.getUTCDay(), a = (o - i.weekStartsOn + 8) % 7 || 7;
    switch (n) {
      case "c":
        return String(a);
      case "cc":
        return Y(a, n.length);
      case "co":
        return r.ordinalNumber(a, {
          unit: "day"
        });
      case "ccc":
        return r.day(o, {
          width: "abbreviated",
          context: "standalone"
        });
      case "ccccc":
        return r.day(o, {
          width: "narrow",
          context: "standalone"
        });
      case "cccccc":
        return r.day(o, {
          width: "short",
          context: "standalone"
        });
      case "cccc":
      default:
        return r.day(o, {
          width: "wide",
          context: "standalone"
        });
    }
  },
  // ISO day of week
  i: function(t, n, r) {
    var i = t.getUTCDay(), o = i === 0 ? 7 : i;
    switch (n) {
      case "i":
        return String(o);
      case "ii":
        return Y(o, n.length);
      case "io":
        return r.ordinalNumber(o, {
          unit: "day"
        });
      case "iii":
        return r.day(i, {
          width: "abbreviated",
          context: "formatting"
        });
      case "iiiii":
        return r.day(i, {
          width: "narrow",
          context: "formatting"
        });
      case "iiiiii":
        return r.day(i, {
          width: "short",
          context: "formatting"
        });
      case "iiii":
      default:
        return r.day(i, {
          width: "wide",
          context: "formatting"
        });
    }
  },
  // AM or PM
  a: function(t, n, r) {
    var i = t.getUTCHours(), o = i / 12 >= 1 ? "pm" : "am";
    switch (n) {
      case "a":
      case "aa":
        return r.dayPeriod(o, {
          width: "abbreviated",
          context: "formatting"
        });
      case "aaa":
        return r.dayPeriod(o, {
          width: "abbreviated",
          context: "formatting"
        }).toLowerCase();
      case "aaaaa":
        return r.dayPeriod(o, {
          width: "narrow",
          context: "formatting"
        });
      case "aaaa":
      default:
        return r.dayPeriod(o, {
          width: "wide",
          context: "formatting"
        });
    }
  },
  // AM, PM, midnight, noon
  b: function(t, n, r) {
    var i = t.getUTCHours(), o;
    switch (i === 12 ? o = Zn.noon : i === 0 ? o = Zn.midnight : o = i / 12 >= 1 ? "pm" : "am", n) {
      case "b":
      case "bb":
        return r.dayPeriod(o, {
          width: "abbreviated",
          context: "formatting"
        });
      case "bbb":
        return r.dayPeriod(o, {
          width: "abbreviated",
          context: "formatting"
        }).toLowerCase();
      case "bbbbb":
        return r.dayPeriod(o, {
          width: "narrow",
          context: "formatting"
        });
      case "bbbb":
      default:
        return r.dayPeriod(o, {
          width: "wide",
          context: "formatting"
        });
    }
  },
  // in the morning, in the afternoon, in the evening, at night
  B: function(t, n, r) {
    var i = t.getUTCHours(), o;
    switch (i >= 17 ? o = Zn.evening : i >= 12 ? o = Zn.afternoon : i >= 4 ? o = Zn.morning : o = Zn.night, n) {
      case "B":
      case "BB":
      case "BBB":
        return r.dayPeriod(o, {
          width: "abbreviated",
          context: "formatting"
        });
      case "BBBBB":
        return r.dayPeriod(o, {
          width: "narrow",
          context: "formatting"
        });
      case "BBBB":
      default:
        return r.dayPeriod(o, {
          width: "wide",
          context: "formatting"
        });
    }
  },
  // Hour [1-12]
  h: function(t, n, r) {
    if (n === "ho") {
      var i = t.getUTCHours() % 12;
      return i === 0 && (i = 12), r.ordinalNumber(i, {
        unit: "hour"
      });
    }
    return Qt.h(t, n);
  },
  // Hour [0-23]
  H: function(t, n, r) {
    return n === "Ho" ? r.ordinalNumber(t.getUTCHours(), {
      unit: "hour"
    }) : Qt.H(t, n);
  },
  // Hour [0-11]
  K: function(t, n, r) {
    var i = t.getUTCHours() % 12;
    return n === "Ko" ? r.ordinalNumber(i, {
      unit: "hour"
    }) : Y(i, n.length);
  },
  // Hour [1-24]
  k: function(t, n, r) {
    var i = t.getUTCHours();
    return i === 0 && (i = 24), n === "ko" ? r.ordinalNumber(i, {
      unit: "hour"
    }) : Y(i, n.length);
  },
  // Minute
  m: function(t, n, r) {
    return n === "mo" ? r.ordinalNumber(t.getUTCMinutes(), {
      unit: "minute"
    }) : Qt.m(t, n);
  },
  // Second
  s: function(t, n, r) {
    return n === "so" ? r.ordinalNumber(t.getUTCSeconds(), {
      unit: "second"
    }) : Qt.s(t, n);
  },
  // Fraction of second
  S: function(t, n) {
    return Qt.S(t, n);
  },
  // Timezone (ISO-8601. If offset is 0, output is always `'Z'`)
  X: function(t, n, r, i) {
    var o = i._originalDate || t, a = o.getTimezoneOffset();
    if (a === 0)
      return "Z";
    switch (n) {
      case "X":
        return _c(a);
      case "XXXX":
      case "XX":
        return xn(a);
      case "XXXXX":
      case "XXX":
      default:
        return xn(a, ":");
    }
  },
  // Timezone (ISO-8601. If offset is 0, output is `'+00:00'` or equivalent)
  x: function(t, n, r, i) {
    var o = i._originalDate || t, a = o.getTimezoneOffset();
    switch (n) {
      case "x":
        return _c(a);
      case "xxxx":
      case "xx":
        return xn(a);
      case "xxxxx":
      case "xxx":
      default:
        return xn(a, ":");
    }
  },
  // Timezone (GMT)
  O: function(t, n, r, i) {
    var o = i._originalDate || t, a = o.getTimezoneOffset();
    switch (n) {
      case "O":
      case "OO":
      case "OOO":
        return "GMT" + wc(a, ":");
      case "OOOO":
      default:
        return "GMT" + xn(a, ":");
    }
  },
  // Timezone (specific non-location)
  z: function(t, n, r, i) {
    var o = i._originalDate || t, a = o.getTimezoneOffset();
    switch (n) {
      case "z":
      case "zz":
      case "zzz":
        return "GMT" + wc(a, ":");
      case "zzzz":
      default:
        return "GMT" + xn(a, ":");
    }
  },
  // Seconds timestamp
  t: function(t, n, r, i) {
    var o = i._originalDate || t, a = Math.floor(o.getTime() / 1e3);
    return Y(a, n.length);
  },
  // Milliseconds timestamp
  T: function(t, n, r, i) {
    var o = i._originalDate || t, a = o.getTime();
    return Y(a, n.length);
  }
};
function wc(e, t) {
  var n = e > 0 ? "-" : "+", r = Math.abs(e), i = Math.floor(r / 60), o = r % 60;
  if (o === 0)
    return n + String(i);
  var a = t || "";
  return n + String(i) + a + Y(o, 2);
}
function _c(e, t) {
  if (e % 60 === 0) {
    var n = e > 0 ? "-" : "+";
    return n + Y(Math.abs(e) / 60, 2);
  }
  return xn(e, t);
}
function xn(e, t) {
  var n = t || "", r = e > 0 ? "-" : "+", i = Math.abs(e), o = Y(Math.floor(i / 60), 2), a = Y(i % 60, 2);
  return r + o + n + a;
}
var kc = function(t, n) {
  switch (t) {
    case "P":
      return n.date({
        width: "short"
      });
    case "PP":
      return n.date({
        width: "medium"
      });
    case "PPP":
      return n.date({
        width: "long"
      });
    case "PPPP":
    default:
      return n.date({
        width: "full"
      });
  }
}, vp = function(t, n) {
  switch (t) {
    case "p":
      return n.time({
        width: "short"
      });
    case "pp":
      return n.time({
        width: "medium"
      });
    case "ppp":
      return n.time({
        width: "long"
      });
    case "pppp":
    default:
      return n.time({
        width: "full"
      });
  }
}, J0 = function(t, n) {
  var r = t.match(/(P+)(p+)?/) || [], i = r[1], o = r[2];
  if (!o)
    return kc(t, n);
  var a;
  switch (i) {
    case "P":
      a = n.dateTime({
        width: "short"
      });
      break;
    case "PP":
      a = n.dateTime({
        width: "medium"
      });
      break;
    case "PPP":
      a = n.dateTime({
        width: "long"
      });
      break;
    case "PPPP":
    default:
      a = n.dateTime({
        width: "full"
      });
      break;
  }
  return a.replace("{{date}}", kc(i, n)).replace("{{time}}", vp(o, n));
}, b0 = {
  p: vp,
  P: J0
}, eg = ["D", "DD"], tg = ["YY", "YYYY"];
function ng(e) {
  return eg.indexOf(e) !== -1;
}
function rg(e) {
  return tg.indexOf(e) !== -1;
}
function Sc(e, t, n) {
  if (e === "YYYY")
    throw new RangeError("Use `yyyy` instead of `YYYY` (in `".concat(t, "`) for formatting years to the input `").concat(n, "`; see: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md"));
  if (e === "YY")
    throw new RangeError("Use `yy` instead of `YY` (in `".concat(t, "`) for formatting years to the input `").concat(n, "`; see: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md"));
  if (e === "D")
    throw new RangeError("Use `d` instead of `D` (in `".concat(t, "`) for formatting days of the month to the input `").concat(n, "`; see: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md"));
  if (e === "DD")
    throw new RangeError("Use `dd` instead of `DD` (in `".concat(t, "`) for formatting days of the month to the input `").concat(n, "`; see: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md"));
}
var ig = {
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
}, og = function(t, n, r) {
  var i, o = ig[t];
  return typeof o == "string" ? i = o : n === 1 ? i = o.one : i = o.other.replace("{{count}}", n.toString()), r != null && r.addSuffix ? r.comparison && r.comparison > 0 ? "in " + i : i + " ago" : i;
};
const ag = og;
function Qa(e) {
  return function() {
    var t = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {}, n = t.width ? String(t.width) : e.defaultWidth, r = e.formats[n] || e.formats[e.defaultWidth];
    return r;
  };
}
var lg = {
  full: "EEEE, MMMM do, y",
  long: "MMMM do, y",
  medium: "MMM d, y",
  short: "MM/dd/yyyy"
}, sg = {
  full: "h:mm:ss a zzzz",
  long: "h:mm:ss a z",
  medium: "h:mm:ss a",
  short: "h:mm a"
}, ug = {
  full: "{{date}} 'at' {{time}}",
  long: "{{date}} 'at' {{time}}",
  medium: "{{date}}, {{time}}",
  short: "{{date}}, {{time}}"
}, cg = {
  date: Qa({
    formats: lg,
    defaultWidth: "full"
  }),
  time: Qa({
    formats: sg,
    defaultWidth: "full"
  }),
  dateTime: Qa({
    formats: ug,
    defaultWidth: "full"
  })
};
const dg = cg;
var fg = {
  lastWeek: "'last' eeee 'at' p",
  yesterday: "'yesterday at' p",
  today: "'today at' p",
  tomorrow: "'tomorrow at' p",
  nextWeek: "eeee 'at' p",
  other: "P"
}, pg = function(t, n, r, i) {
  return fg[t];
};
const hg = pg;
function Rr(e) {
  return function(t, n) {
    var r = n != null && n.context ? String(n.context) : "standalone", i;
    if (r === "formatting" && e.formattingValues) {
      var o = e.defaultFormattingWidth || e.defaultWidth, a = n != null && n.width ? String(n.width) : o;
      i = e.formattingValues[a] || e.formattingValues[o];
    } else {
      var l = e.defaultWidth, s = n != null && n.width ? String(n.width) : e.defaultWidth;
      i = e.values[s] || e.values[l];
    }
    var u = e.argumentCallback ? e.argumentCallback(t) : t;
    return i[u];
  };
}
var mg = {
  narrow: ["B", "A"],
  abbreviated: ["BC", "AD"],
  wide: ["Before Christ", "Anno Domini"]
}, vg = {
  narrow: ["1", "2", "3", "4"],
  abbreviated: ["Q1", "Q2", "Q3", "Q4"],
  wide: ["1st quarter", "2nd quarter", "3rd quarter", "4th quarter"]
}, gg = {
  narrow: ["J", "F", "M", "A", "M", "J", "J", "A", "S", "O", "N", "D"],
  abbreviated: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
  wide: ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"]
}, yg = {
  narrow: ["S", "M", "T", "W", "T", "F", "S"],
  short: ["Su", "Mo", "Tu", "We", "Th", "Fr", "Sa"],
  abbreviated: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
  wide: ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"]
}, wg = {
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
}, _g = {
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
}, kg = function(t, n) {
  var r = Number(t), i = r % 100;
  if (i > 20 || i < 10)
    switch (i % 10) {
      case 1:
        return r + "st";
      case 2:
        return r + "nd";
      case 3:
        return r + "rd";
    }
  return r + "th";
}, Sg = {
  ordinalNumber: kg,
  era: Rr({
    values: mg,
    defaultWidth: "wide"
  }),
  quarter: Rr({
    values: vg,
    defaultWidth: "wide",
    argumentCallback: function(t) {
      return t - 1;
    }
  }),
  month: Rr({
    values: gg,
    defaultWidth: "wide"
  }),
  day: Rr({
    values: yg,
    defaultWidth: "wide"
  }),
  dayPeriod: Rr({
    values: wg,
    defaultWidth: "wide",
    formattingValues: _g,
    defaultFormattingWidth: "wide"
  })
};
const xg = Sg;
function Ir(e) {
  return function(t) {
    var n = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, r = n.width, i = r && e.matchPatterns[r] || e.matchPatterns[e.defaultMatchWidth], o = t.match(i);
    if (!o)
      return null;
    var a = o[0], l = r && e.parsePatterns[r] || e.parsePatterns[e.defaultParseWidth], s = Array.isArray(l) ? Tg(l, function(h) {
      return h.test(a);
    }) : Cg(l, function(h) {
      return h.test(a);
    }), u;
    u = e.valueCallback ? e.valueCallback(s) : s, u = n.valueCallback ? n.valueCallback(u) : u;
    var f = t.slice(a.length);
    return {
      value: u,
      rest: f
    };
  };
}
function Cg(e, t) {
  for (var n in e)
    if (e.hasOwnProperty(n) && t(e[n]))
      return n;
}
function Tg(e, t) {
  for (var n = 0; n < e.length; n++)
    if (t(e[n]))
      return n;
}
function Eg(e) {
  return function(t) {
    var n = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, r = t.match(e.matchPattern);
    if (!r)
      return null;
    var i = r[0], o = t.match(e.parsePattern);
    if (!o)
      return null;
    var a = e.valueCallback ? e.valueCallback(o[0]) : o[0];
    a = n.valueCallback ? n.valueCallback(a) : a;
    var l = t.slice(i.length);
    return {
      value: a,
      rest: l
    };
  };
}
var Ng = /^(\d+)(th|st|nd|rd)?/i, Og = /\d+/i, Dg = {
  narrow: /^(b|a)/i,
  abbreviated: /^(b\.?\s?c\.?|b\.?\s?c\.?\s?e\.?|a\.?\s?d\.?|c\.?\s?e\.?)/i,
  wide: /^(before christ|before common era|anno domini|common era)/i
}, Pg = {
  any: [/^b/i, /^(a|c)/i]
}, Mg = {
  narrow: /^[1234]/i,
  abbreviated: /^q[1234]/i,
  wide: /^[1234](th|st|nd|rd)? quarter/i
}, Lg = {
  any: [/1/i, /2/i, /3/i, /4/i]
}, Rg = {
  narrow: /^[jfmasond]/i,
  abbreviated: /^(jan|feb|mar|apr|may|jun|jul|aug|sep|oct|nov|dec)/i,
  wide: /^(january|february|march|april|may|june|july|august|september|october|november|december)/i
}, Ig = {
  narrow: [/^j/i, /^f/i, /^m/i, /^a/i, /^m/i, /^j/i, /^j/i, /^a/i, /^s/i, /^o/i, /^n/i, /^d/i],
  any: [/^ja/i, /^f/i, /^mar/i, /^ap/i, /^may/i, /^jun/i, /^jul/i, /^au/i, /^s/i, /^o/i, /^n/i, /^d/i]
}, zg = {
  narrow: /^[smtwf]/i,
  short: /^(su|mo|tu|we|th|fr|sa)/i,
  abbreviated: /^(sun|mon|tue|wed|thu|fri|sat)/i,
  wide: /^(sunday|monday|tuesday|wednesday|thursday|friday|saturday)/i
}, jg = {
  narrow: [/^s/i, /^m/i, /^t/i, /^w/i, /^t/i, /^f/i, /^s/i],
  any: [/^su/i, /^m/i, /^tu/i, /^w/i, /^th/i, /^f/i, /^sa/i]
}, Ug = {
  narrow: /^(a|p|mi|n|(in the|at) (morning|afternoon|evening|night))/i,
  any: /^([ap]\.?\s?m\.?|midnight|noon|(in the|at) (morning|afternoon|evening|night))/i
}, Ag = {
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
}, $g = {
  ordinalNumber: Eg({
    matchPattern: Ng,
    parsePattern: Og,
    valueCallback: function(t) {
      return parseInt(t, 10);
    }
  }),
  era: Ir({
    matchPatterns: Dg,
    defaultMatchWidth: "wide",
    parsePatterns: Pg,
    defaultParseWidth: "any"
  }),
  quarter: Ir({
    matchPatterns: Mg,
    defaultMatchWidth: "wide",
    parsePatterns: Lg,
    defaultParseWidth: "any",
    valueCallback: function(t) {
      return t + 1;
    }
  }),
  month: Ir({
    matchPatterns: Rg,
    defaultMatchWidth: "wide",
    parsePatterns: Ig,
    defaultParseWidth: "any"
  }),
  day: Ir({
    matchPatterns: zg,
    defaultMatchWidth: "wide",
    parsePatterns: jg,
    defaultParseWidth: "any"
  }),
  dayPeriod: Ir({
    matchPatterns: Ug,
    defaultMatchWidth: "any",
    parsePatterns: Ag,
    defaultParseWidth: "any"
  })
};
const Fg = $g;
var Vg = {
  code: "en-US",
  formatDistance: ag,
  formatLong: dg,
  formatRelative: hg,
  localize: xg,
  match: Fg,
  options: {
    weekStartsOn: 0,
    firstWeekContainsDate: 1
  }
};
const Wg = Vg;
var Zg = /[yYQqMLwIdDecihHKkms]o|(\w)\1*|''|'(''|[^'])+('|$)|./g, Hg = /P+p+|P+|p+|''|'(''|[^'])+('|$)|./g, Yg = /^'([^]*?)'?$/, Bg = /''/g, Qg = /[a-zA-Z]/;
function gp(e, t, n) {
  var r, i, o, a, l, s, u, f, h, m, v, y, _, R, c, d, p, g;
  Ue(2, arguments);
  var T = String(t), S = da(), x = (r = (i = n == null ? void 0 : n.locale) !== null && i !== void 0 ? i : S.locale) !== null && r !== void 0 ? r : Wg, C = An((o = (a = (l = (s = n == null ? void 0 : n.firstWeekContainsDate) !== null && s !== void 0 ? s : n == null || (u = n.locale) === null || u === void 0 || (f = u.options) === null || f === void 0 ? void 0 : f.firstWeekContainsDate) !== null && l !== void 0 ? l : S.firstWeekContainsDate) !== null && a !== void 0 ? a : (h = S.locale) === null || h === void 0 || (m = h.options) === null || m === void 0 ? void 0 : m.firstWeekContainsDate) !== null && o !== void 0 ? o : 1);
  if (!(C >= 1 && C <= 7))
    throw new RangeError("firstWeekContainsDate must be between 1 and 7 inclusively");
  var V = An((v = (y = (_ = (R = n == null ? void 0 : n.weekStartsOn) !== null && R !== void 0 ? R : n == null || (c = n.locale) === null || c === void 0 || (d = c.options) === null || d === void 0 ? void 0 : d.weekStartsOn) !== null && _ !== void 0 ? _ : S.weekStartsOn) !== null && y !== void 0 ? y : (p = S.locale) === null || p === void 0 || (g = p.options) === null || g === void 0 ? void 0 : g.weekStartsOn) !== null && v !== void 0 ? v : 0);
  if (!(V >= 0 && V <= 6))
    throw new RangeError("weekStartsOn must be between 0 and 6 inclusively");
  if (!x.localize)
    throw new RangeError("locale must contain localize property");
  if (!x.formatLong)
    throw new RangeError("locale must contain formatLong property");
  var M = Nt(e);
  if (!F0(M))
    throw new RangeError("Invalid time value");
  var ue = A0(M), Xe = V0(M, ue), Oe = {
    firstWeekContainsDate: C,
    weekStartsOn: V,
    locale: x,
    _originalDate: M
  }, ce = T.match(Hg).map(function(ge) {
    var De = ge[0];
    if (De === "p" || De === "P") {
      var it = b0[De];
      return it(ge, x.formatLong);
    }
    return ge;
  }).join("").match(Zg).map(function(ge) {
    if (ge === "''")
      return "'";
    var De = ge[0];
    if (De === "'")
      return Gg(ge);
    var it = q0[De];
    if (it)
      return !(n != null && n.useAdditionalWeekYearTokens) && rg(ge) && Sc(ge, t, String(e)), !(n != null && n.useAdditionalDayOfYearTokens) && ng(ge) && Sc(ge, t, String(e)), it(Xe, ge, x.localize, Oe);
    if (De.match(Qg))
      throw new RangeError("Format string contains an unescaped latin alphabet character `" + De + "`");
    return ge;
  }).join("");
  return ce;
}
function Gg(e) {
  var t = e.match(Yg);
  return t ? t[1].replace(Bg, "'") : e;
}
var es = { exports: {} };
(function(e, t) {
  Object.defineProperty(t, "__esModule", {
    value: !0
  }), t.default = n;
  function n(r) {
    if (r === null || r === !0 || r === !1)
      return NaN;
    var i = Number(r);
    return isNaN(i) ? i : i < 0 ? Math.ceil(i) : Math.floor(i);
  }
  e.exports = t.default;
})(es, es.exports);
var Kg = es.exports;
const Xg = /* @__PURE__ */ rs(Kg);
var ts = { exports: {} };
(function(e, t) {
  Object.defineProperty(t, "__esModule", {
    value: !0
  }), t.default = n;
  function n(r) {
    var i = new Date(Date.UTC(r.getFullYear(), r.getMonth(), r.getDate(), r.getHours(), r.getMinutes(), r.getSeconds(), r.getMilliseconds()));
    return i.setUTCFullYear(r.getFullYear()), r.getTime() - i.getTime();
  }
  e.exports = t.default;
})(ts, ts.exports);
var qg = ts.exports;
const xc = /* @__PURE__ */ rs(qg);
function Jg(e, t) {
  var n = ny(t);
  return n.formatToParts ? ey(n, e) : ty(n, e);
}
var bg = {
  year: 0,
  month: 1,
  day: 2,
  hour: 3,
  minute: 4,
  second: 5
};
function ey(e, t) {
  try {
    for (var n = e.formatToParts(t), r = [], i = 0; i < n.length; i++) {
      var o = bg[n[i].type];
      o >= 0 && (r[o] = parseInt(n[i].value, 10));
    }
    return r;
  } catch (a) {
    if (a instanceof RangeError)
      return [NaN];
    throw a;
  }
}
function ty(e, t) {
  var n = e.format(t).replace(/\u200E/g, ""), r = /(\d+)\/(\d+)\/(\d+),? (\d+):(\d+):(\d+)/.exec(n);
  return [r[3], r[1], r[2], r[4], r[5], r[6]];
}
var Ga = {};
function ny(e) {
  if (!Ga[e]) {
    var t = new Intl.DateTimeFormat("en-US", {
      hour12: !1,
      timeZone: "America/New_York",
      year: "numeric",
      month: "numeric",
      day: "2-digit",
      hour: "2-digit",
      minute: "2-digit",
      second: "2-digit"
    }).format(/* @__PURE__ */ new Date("2014-06-25T04:00:00.123Z")), n = t === "06/25/2014, 00:00:00" || t === "‎06‎/‎25‎/‎2014‎ ‎00‎:‎00‎:‎00";
    Ga[e] = n ? new Intl.DateTimeFormat("en-US", {
      hour12: !1,
      timeZone: e,
      year: "numeric",
      month: "numeric",
      day: "2-digit",
      hour: "2-digit",
      minute: "2-digit",
      second: "2-digit"
    }) : new Intl.DateTimeFormat("en-US", {
      hourCycle: "h23",
      timeZone: e,
      year: "numeric",
      month: "numeric",
      day: "2-digit",
      hour: "2-digit",
      minute: "2-digit",
      second: "2-digit"
    });
  }
  return Ga[e];
}
function yp(e, t, n, r, i, o, a) {
  var l = /* @__PURE__ */ new Date(0);
  return l.setUTCFullYear(e, t, n), l.setUTCHours(r, i, o, a), l;
}
var Cc = 36e5, ry = 6e4, Ka = {
  timezone: /([Z+-].*)$/,
  timezoneZ: /^(Z)$/,
  timezoneHH: /^([+-]\d{2})$/,
  timezoneHHMM: /^([+-]\d{2}):?(\d{2})$/
};
function wp(e, t, n) {
  var r, i;
  if (!e || (r = Ka.timezoneZ.exec(e), r))
    return 0;
  var o;
  if (r = Ka.timezoneHH.exec(e), r)
    return o = parseInt(r[1], 10), Tc(o) ? -(o * Cc) : NaN;
  if (r = Ka.timezoneHHMM.exec(e), r) {
    o = parseInt(r[1], 10);
    var a = parseInt(r[2], 10);
    return Tc(o, a) ? (i = Math.abs(o) * Cc + a * ry, o > 0 ? -i : i) : NaN;
  }
  if (ay(e)) {
    t = new Date(t || Date.now());
    var l = n ? t : iy(t), s = ns(l, e), u = n ? s : oy(t, s, e);
    return -u;
  }
  return NaN;
}
function iy(e) {
  return yp(
    e.getFullYear(),
    e.getMonth(),
    e.getDate(),
    e.getHours(),
    e.getMinutes(),
    e.getSeconds(),
    e.getMilliseconds()
  );
}
function ns(e, t) {
  var n = Jg(e, t), r = yp(
    n[0],
    n[1] - 1,
    n[2],
    n[3] % 24,
    n[4],
    n[5],
    0
  ).getTime(), i = e.getTime(), o = i % 1e3;
  return i -= o >= 0 ? o : 1e3 + o, r - i;
}
function oy(e, t, n) {
  var r = e.getTime(), i = r - t, o = ns(new Date(i), n);
  if (t === o)
    return t;
  i -= o - t;
  var a = ns(new Date(i), n);
  return o === a ? o : Math.max(o, a);
}
function Tc(e, t) {
  return -23 <= e && e <= 23 && (t == null || 0 <= t && t <= 59);
}
var Ec = {};
function ay(e) {
  if (Ec[e])
    return !0;
  try {
    return new Intl.DateTimeFormat(void 0, { timeZone: e }), Ec[e] = !0, !0;
  } catch {
    return !1;
  }
}
var ly = /(Z|[+-]\d{2}(?::?\d{2})?| UTC| [a-zA-Z]+\/[a-zA-Z_]+(?:\/[a-zA-Z_]+)?)$/, Xa = 36e5, Nc = 6e4, sy = 2, Le = {
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
  timeZone: ly
};
function uy(e, t) {
  if (arguments.length < 1)
    throw new TypeError("1 argument required, but only " + arguments.length + " present");
  if (e === null)
    return /* @__PURE__ */ new Date(NaN);
  var n = t || {}, r = n.additionalDigits == null ? sy : Xg(n.additionalDigits);
  if (r !== 2 && r !== 1 && r !== 0)
    throw new RangeError("additionalDigits must be 0, 1 or 2");
  if (e instanceof Date || typeof e == "object" && Object.prototype.toString.call(e) === "[object Date]")
    return new Date(e.getTime());
  if (typeof e == "number" || Object.prototype.toString.call(e) === "[object Number]")
    return new Date(e);
  if (!(typeof e == "string" || Object.prototype.toString.call(e) === "[object String]"))
    return /* @__PURE__ */ new Date(NaN);
  var i = cy(e), o = dy(i.date, r), a = o.year, l = o.restDateString, s = fy(l, a);
  if (isNaN(s))
    return /* @__PURE__ */ new Date(NaN);
  if (s) {
    var u = s.getTime(), f = 0, h;
    if (i.time && (f = py(i.time), isNaN(f)))
      return /* @__PURE__ */ new Date(NaN);
    if (i.timeZone || n.timeZone) {
      if (h = wp(i.timeZone || n.timeZone, new Date(u + f)), isNaN(h))
        return /* @__PURE__ */ new Date(NaN);
    } else
      h = xc(new Date(u + f)), h = xc(new Date(u + f + h));
    return new Date(u + f + h);
  } else
    return /* @__PURE__ */ new Date(NaN);
}
function cy(e) {
  var t = {}, n = Le.dateTimePattern.exec(e), r;
  if (n ? (t.date = n[1], r = n[3]) : (n = Le.datePattern.exec(e), n ? (t.date = n[1], r = n[2]) : (t.date = null, r = e)), r) {
    var i = Le.timeZone.exec(r);
    i ? (t.time = r.replace(i[1], ""), t.timeZone = i[1].trim()) : t.time = r;
  }
  return t;
}
function dy(e, t) {
  var n = Le.YYY[t], r = Le.YYYYY[t], i;
  if (i = Le.YYYY.exec(e) || r.exec(e), i) {
    var o = i[1];
    return {
      year: parseInt(o, 10),
      restDateString: e.slice(o.length)
    };
  }
  if (i = Le.YY.exec(e) || n.exec(e), i) {
    var a = i[1];
    return {
      year: parseInt(a, 10) * 100,
      restDateString: e.slice(a.length)
    };
  }
  return {
    year: null
  };
}
function fy(e, t) {
  if (t === null)
    return null;
  var n, r, i, o;
  if (e.length === 0)
    return r = /* @__PURE__ */ new Date(0), r.setUTCFullYear(t), r;
  if (n = Le.MM.exec(e), n)
    return r = /* @__PURE__ */ new Date(0), i = parseInt(n[1], 10) - 1, Dc(t, i) ? (r.setUTCFullYear(t, i), r) : /* @__PURE__ */ new Date(NaN);
  if (n = Le.DDD.exec(e), n) {
    r = /* @__PURE__ */ new Date(0);
    var a = parseInt(n[1], 10);
    return vy(t, a) ? (r.setUTCFullYear(t, 0, a), r) : /* @__PURE__ */ new Date(NaN);
  }
  if (n = Le.MMDD.exec(e), n) {
    r = /* @__PURE__ */ new Date(0), i = parseInt(n[1], 10) - 1;
    var l = parseInt(n[2], 10);
    return Dc(t, i, l) ? (r.setUTCFullYear(t, i, l), r) : /* @__PURE__ */ new Date(NaN);
  }
  if (n = Le.Www.exec(e), n)
    return o = parseInt(n[1], 10) - 1, Pc(t, o) ? Oc(t, o) : /* @__PURE__ */ new Date(NaN);
  if (n = Le.WwwD.exec(e), n) {
    o = parseInt(n[1], 10) - 1;
    var s = parseInt(n[2], 10) - 1;
    return Pc(t, o, s) ? Oc(t, o, s) : /* @__PURE__ */ new Date(NaN);
  }
  return null;
}
function py(e) {
  var t, n, r;
  if (t = Le.HH.exec(e), t)
    return n = parseFloat(t[1].replace(",", ".")), qa(n) ? n % 24 * Xa : NaN;
  if (t = Le.HHMM.exec(e), t)
    return n = parseInt(t[1], 10), r = parseFloat(t[2].replace(",", ".")), qa(n, r) ? n % 24 * Xa + r * Nc : NaN;
  if (t = Le.HHMMSS.exec(e), t) {
    n = parseInt(t[1], 10), r = parseInt(t[2], 10);
    var i = parseFloat(t[3].replace(",", "."));
    return qa(n, r, i) ? n % 24 * Xa + r * Nc + i * 1e3 : NaN;
  }
  return null;
}
function Oc(e, t, n) {
  t = t || 0, n = n || 0;
  var r = /* @__PURE__ */ new Date(0);
  r.setUTCFullYear(e, 0, 4);
  var i = r.getUTCDay() || 7, o = t * 7 + n + 1 - i;
  return r.setUTCDate(r.getUTCDate() + o), r;
}
var hy = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31], my = [31, 29, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
function _p(e) {
  return e % 400 === 0 || e % 4 === 0 && e % 100 !== 0;
}
function Dc(e, t, n) {
  if (t < 0 || t > 11)
    return !1;
  if (n != null) {
    if (n < 1)
      return !1;
    var r = _p(e);
    if (r && n > my[t] || !r && n > hy[t])
      return !1;
  }
  return !0;
}
function vy(e, t) {
  if (t < 1)
    return !1;
  var n = _p(e);
  return !(n && t > 366 || !n && t > 365);
}
function Pc(e, t, n) {
  return !(t < 0 || t > 52 || n != null && (n < 0 || n > 6));
}
function qa(e, t, n) {
  return !(e != null && (e < 0 || e >= 25) || t != null && (t < 0 || t >= 60) || n != null && (n < 0 || n >= 60));
}
function gy(e, t, n) {
  var r = uy(e, n), i = wp(t, r, !0), o = new Date(r.getTime() - i), a = /* @__PURE__ */ new Date(0);
  return a.setFullYear(o.getUTCFullYear(), o.getUTCMonth(), o.getUTCDate()), a.setHours(o.getUTCHours(), o.getUTCMinutes(), o.getUTCSeconds(), o.getUTCMilliseconds()), a;
}
const yy = "Europe/Helsinki", Mc = (e) => {
  const t = new Date(e);
  return gp(t, "d.M.yyyy");
}, wy = (e) => {
  const t = gy(e, yy);
  return gp(t, "d.M.yyyy HH:mm");
}, Ja = (e, t) => {
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
}, _y = (e, t) => {
  const n = e.AHStatus.ContributionAmount, r = e.BUKStatus.OnTrackOnDateCount / e.BUKStatus.MemberCount, i = e.SamvirkStatus.ContributionAmount / ((t || 200) * e.SamvirkStatus.MemberCount);
  return (n * r * i).toLocaleString("fi-FI", { maximumFractionDigits: 1 }) + "p";
}, ky = "data:image/svg+xml,%3csvg%20width='328'%20height='145'%20viewBox='0%200%20328%20145'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20d='M0.707031%2045.81L142.59%2021.2011L151.585%2024.3149V19.1253L258.172%200L325.896%2032.7566L327.705%2047.699L282.016%20100.083L255.722%20105.618L239.116%20100.429L235.31%20108.386L29.3534%20145L14.84%20125.688L7.49499%2084.4827L10.7679%2074.235L4.44352%2074.6848L0.707031%2045.81Z'%20fill='black'/%3e%3cpath%20d='M15.9367%2066.6666L11.1727%2083.4531L18.3101%20123.499L29.2877%20130.934L230.467%2093.8565L234.272%2085.8991L254.339%2091.4347L272.675%2086.2451L317.305%2035.3873L255.325%205.11138L155.194%2022.7801L155.045%2030.5437L141.389%2025.2158L5.15625%2049.2573L8.29767%2067.2098L15.9367%2066.6666Z'%20fill='%23FFFF00'/%3e%3cpath%20d='M106.215%2048.601L94.7594%20102.496L75.1463%20105.956L69.2579%2077.538L63.4905%20108.011L43.8774%20111.471L32.3047%2061.6337L49.2884%2058.6376L53.8795%2090.5085L60.657%2056.6345L77.8518%2053.6003L84.6501%2085.0802L89.2239%2051.5937L106.215%2048.601Z'%20fill='black'/%3e%3cpath%20d='M143.793%2043.9891C147.63%2045.2415%20150.768%2047.4004%20153.214%2050.4622C155.657%2053.5241%20157.272%2057.2813%20158.061%2061.734C158.386%2063.5814%20158.559%2065.678%20158.583%2068.0168C158.57%2072.6597%20157.639%2076.9394%20155.791%2080.8558C153.94%2084.7722%20151.256%2088.0416%20147.737%2090.6641C144.219%2093.29%20140.022%2095.0302%20135.14%2095.8883C130.214%2096.7566%20125.834%2096.5767%20122%2095.3485C118.167%2094.1169%20115.043%2091.9857%20112.628%2088.9411C110.21%2085.8966%20108.608%2082.1497%20107.826%2077.6971C107.418%2075.3756%20107.227%2073.2133%20107.266%2071.1997C107.279%2066.5568%20108.22%2062.291%20110.099%2058.3919C111.978%2054.4928%20114.687%2051.2337%20118.229%2048.6044C121.772%2045.9784%20125.983%2044.2313%20130.864%2043.3733C135.646%2042.5326%20139.956%2042.7367%20143.793%2043.9891ZM125.398%2062.2529C123.786%2064.4671%20122.983%2067.2591%20122.99%2070.6289C122.966%2071.608%20123.052%2072.6459%20123.246%2073.7357C123.73%2076.4827%20124.855%2078.5067%20126.626%2079.8075C128.394%2081.1084%20130.747%2081.4993%20133.684%2080.9803C136.621%2080.4614%20138.908%2079.0844%20140.538%2076.8425C142.171%2074.6041%20142.966%2071.8467%20142.928%2068.5842C142.942%2067.5532%20142.852%2066.498%20142.662%2065.4082C142.171%2062.6127%20141.039%2060.575%20139.275%2059.2983C137.514%2058.0217%20135.185%2057.6377%20132.297%2058.1462C129.311%2058.6721%20127.01%2060.0422%20125.398%2062.2529Z'%20fill='black'/%3e%3cpath%20d='M200.34%2035.773C203.589%2037.7174%20205.568%2040.6996%20206.28%2044.7267C206.481%2045.865%20206.571%2046.9237%20206.547%2047.9062C206.533%2051.4247%20205.581%2054.6838%20203.689%2057.6799C201.8%2060.676%20199.108%2063.0667%20195.61%2064.8553L206.612%2082.7732L189.272%2085.8316L179.692%2068.9101L179.748%2087.513L163.971%2090.2946L163.913%2038.4266L187.366%2034.2923C192.767%2033.3374%20197.091%2033.8321%20200.34%2035.773ZM179.689%2058.0639L185.944%2056.9603C189.023%2056.4171%20190.549%2054.6838%20190.521%2051.7569C190.525%2051.5112%20190.497%2051.1999%20190.431%2050.8193C190.248%2049.7779%20189.784%2049.0168%20189.04%2048.5359C188.297%2048.055%20187.283%2047.9304%20186.006%2048.1553L179.751%2049.259L179.689%2058.0639Z'%20fill='black'/%3e%3cpath%20d='M242.344%2049.8035L260.975%2073.1911L242.001%2076.5367L227.353%2056.6191L227.363%2079.1142L211.587%2081.8958L211.528%2030.0278L227.305%2027.2461L227.357%2049.1461L242.085%2024.641L260.916%2021.3197L242.344%2049.8035Z'%20fill='black'/%3e%3c/svg%3e", Sy = "_app_10kin_1", xy = "_workLogoWrapper_10kin_10", Cy = "_workLogo_10kin_10", Ty = "_reports_10kin_20", Ey = "_report_10kin_20", Ny = "_reportTitle_10kin_32", Oy = "_reportTable_10kin_44", Dy = "_teamLogo_10kin_60", Py = "_teamGreen_10kin_112", My = "_teamOrange_10kin_116", Ly = "_teamRed_10kin_120", Ry = "_teamBlue_10kin_124", St = {
  app: Sy,
  workLogoWrapper: xy,
  workLogo: Cy,
  reports: Ty,
  report: Ey,
  reportTitle: Ny,
  reportTable: Oy,
  teamLogo: Dy,
  teamGreen: Py,
  teamOrange: My,
  teamRed: Ly,
  teamBlue: Ry
}, Iy = {
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
}, zy = async (e) => {
  let t;
  return t = await (await fetch(e)).json(), z0.parse(t);
}, jy = () => {
  var i;
  const e = (i = document.getElementById("work-root")) == null ? void 0 : i.getAttribute("data-source-url"), { data: t, error: n, isLoading: r } = Iv(e, zy, {
    revalidateIfStale: !1,
    revalidateOnFocus: !1,
    shouldRetryOnError: !1
  });
  return /* @__PURE__ */ H.jsx("div", { className: St.app, children: /* @__PURE__ */ H.jsxs("div", { children: [
    /* @__PURE__ */ H.jsx("div", { className: St.workLogoWrapper, children: /* @__PURE__ */ H.jsx("img", { src: ky, alt: "Work logo", className: St.workLogo }) }),
    /* @__PURE__ */ H.jsxs("ul", { className: St.reports, children: [
      n && /* @__PURE__ */ H.jsxs("li", { className: St.error, children: [
        "Virhe: ",
        `${n}`
      ] }),
      r && /* @__PURE__ */ H.jsx(Lc, { report: Iy, isLoading: r }),
      t && t.map((o) => /* @__PURE__ */ H.jsx(
        Lc,
        {
          report: o,
          isLoading: r
        },
        o.Title
      ))
    ] })
  ] }) });
}, Lc = ({
  report: e,
  isLoading: t
}) => /* @__PURE__ */ H.jsxs("li", { className: St.report, children: [
  /* @__PURE__ */ H.jsx("h2", { className: St.reportTitle, children: e.Title }),
  /* @__PURE__ */ H.jsxs("p", { children: [
    Mc(e.DateFrom),
    " – ",
    Mc(e.DateTo)
  ] }),
  /* @__PURE__ */ H.jsxs("p", { children: [
    "MyShare tavoite raportointihetkellä: ",
    e.MyShareTargetOnDate,
    "%"
  ] }),
  /* @__PURE__ */ H.jsxs("table", { className: St.reportTable, cellPadding: 6, children: [
    /* @__PURE__ */ H.jsx("thead", { children: /* @__PURE__ */ H.jsxs("tr", { children: [
      /* @__PURE__ */ H.jsx("td", {}),
      /* @__PURE__ */ H.jsx("td", { children: "AH" }),
      /* @__PURE__ */ H.jsx("td", { children: "BUK" }),
      /* @__PURE__ */ H.jsx("td", { children: "Samvirk" }),
      /* @__PURE__ */ H.jsx("td", { children: "Tulos" })
    ] }) }),
    /* @__PURE__ */ H.jsx("tbody", { children: e.Teams.map((n) => /* @__PURE__ */ H.jsxs("tr", { children: [
      /* @__PURE__ */ H.jsx("td", { children: /* @__PURE__ */ H.jsx(
        "div",
        {
          className: `${St.teamLogo} ${St["team" + n.Name]}`
        }
      ) }),
      /* @__PURE__ */ H.jsx("td", { children: t ? "–" : Ja(n.AHStatus) }),
      /* @__PURE__ */ H.jsx("td", { children: t ? "–" : Ja(n.BUKStatus) }),
      /* @__PURE__ */ H.jsx("td", { children: t ? "–" : Ja(
        n.SamvirkStatus,
        e.SamvirkGoalPerSprint
      ) }),
      /* @__PURE__ */ H.jsx("td", { children: t ? "–" : _y(n, e.SamvirkGoalPerSprint) })
    ] }, n.Name)) })
  ] }),
  /* @__PURE__ */ H.jsxs("p", { children: [
    "Tulokset päivitetty: ",
    wy(e.ReportDate)
  ] })
] }), Uy = document.getElementById("work-root"), Ay = Qf(Uy);
Ay.render(
  /* @__PURE__ */ H.jsx(Qo.StrictMode, { children: /* @__PURE__ */ H.jsx(jy, {}) })
);
