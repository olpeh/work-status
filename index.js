function Ia(e) {
  return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default") ? e.default : e;
}
var Dd = { exports: {} }, ro = {}, Md = { exports: {} }, F = {};
/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Ua = Symbol.for("react.element"), Tm = Symbol.for("react.portal"), Cm = Symbol.for("react.fragment"), Em = Symbol.for("react.strict_mode"), Om = Symbol.for("react.profiler"), Dm = Symbol.for("react.provider"), Mm = Symbol.for("react.context"), Nm = Symbol.for("react.forward_ref"), Pm = Symbol.for("react.suspense"), Rm = Symbol.for("react.memo"), Lm = Symbol.for("react.lazy"), Gs = Symbol.iterator;
function Im(e) {
  return e === null || typeof e != "object" ? null : (e = Gs && e[Gs] || e["@@iterator"], typeof e == "function" ? e : null);
}
var Nd = { isMounted: function() {
  return !1;
}, enqueueForceUpdate: function() {
}, enqueueReplaceState: function() {
}, enqueueSetState: function() {
} }, Pd = Object.assign, Rd = {};
function Mr(e, t, n) {
  this.props = e, this.context = t, this.refs = Rd, this.updater = n || Nd;
}
Mr.prototype.isReactComponent = {};
Mr.prototype.setState = function(e, t) {
  if (typeof e != "object" && typeof e != "function" && e != null)
    throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");
  this.updater.enqueueSetState(this, e, t, "setState");
};
Mr.prototype.forceUpdate = function(e) {
  this.updater.enqueueForceUpdate(this, e, "forceUpdate");
};
function Ld() {
}
Ld.prototype = Mr.prototype;
function ql(e, t, n) {
  this.props = e, this.context = t, this.refs = Rd, this.updater = n || Nd;
}
var Xl = ql.prototype = new Ld();
Xl.constructor = ql;
Pd(Xl, Mr.prototype);
Xl.isPureReactComponent = !0;
var Ks = Array.isArray, Id = Object.prototype.hasOwnProperty, Gl = { current: null }, Ud = { key: !0, ref: !0, __self: !0, __source: !0 };
function jd(e, t, n) {
  var r, a = {}, i = null, o = null;
  if (t != null)
    for (r in t.ref !== void 0 && (o = t.ref), t.key !== void 0 && (i = "" + t.key), t)
      Id.call(t, r) && !Ud.hasOwnProperty(r) && (a[r] = t[r]);
  var u = arguments.length - 2;
  if (u === 1)
    a.children = n;
  else if (1 < u) {
    for (var l = Array(u), s = 0; s < u; s++)
      l[s] = arguments[s + 2];
    a.children = l;
  }
  if (e && e.defaultProps)
    for (r in u = e.defaultProps, u)
      a[r] === void 0 && (a[r] = u[r]);
  return { $$typeof: Ua, type: e, key: i, ref: o, props: a, _owner: Gl.current };
}
function Um(e, t) {
  return { $$typeof: Ua, type: e.type, key: t, ref: e.ref, props: e.props, _owner: e._owner };
}
function Kl(e) {
  return typeof e == "object" && e !== null && e.$$typeof === Ua;
}
function jm(e) {
  var t = { "=": "=0", ":": "=2" };
  return "$" + e.replace(/[=:]/g, function(n) {
    return t[n];
  });
}
var Js = /\/+/g;
function Eo(e, t) {
  return typeof e == "object" && e !== null && e.key != null ? jm("" + e.key) : t.toString(36);
}
function ui(e, t, n, r, a) {
  var i = typeof e;
  (i === "undefined" || i === "boolean") && (e = null);
  var o = !1;
  if (e === null)
    o = !0;
  else
    switch (i) {
      case "string":
      case "number":
        o = !0;
        break;
      case "object":
        switch (e.$$typeof) {
          case Ua:
          case Tm:
            o = !0;
        }
    }
  if (o)
    return o = e, a = a(o), e = r === "" ? "." + Eo(o, 0) : r, Ks(a) ? (n = "", e != null && (n = e.replace(Js, "$&/") + "/"), ui(a, t, n, "", function(s) {
      return s;
    })) : a != null && (Kl(a) && (a = Um(a, n + (!a.key || o && o.key === a.key ? "" : ("" + a.key).replace(Js, "$&/") + "/") + e)), t.push(a)), 1;
  if (o = 0, r = r === "" ? "." : r + ":", Ks(e))
    for (var u = 0; u < e.length; u++) {
      i = e[u];
      var l = r + Eo(i, u);
      o += ui(i, t, n, l, a);
    }
  else if (l = Im(e), typeof l == "function")
    for (e = l.call(e), u = 0; !(i = e.next()).done; )
      i = i.value, l = r + Eo(i, u++), o += ui(i, t, n, l, a);
  else if (i === "object")
    throw t = String(e), Error("Objects are not valid as a React child (found: " + (t === "[object Object]" ? "object with keys {" + Object.keys(e).join(", ") + "}" : t) + "). If you meant to render a collection of children, use an array instead.");
  return o;
}
function ba(e, t, n) {
  if (e == null)
    return e;
  var r = [], a = 0;
  return ui(e, r, "", "", function(i) {
    return t.call(n, i, a++);
  }), r;
}
function zm(e) {
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
var Fe = { current: null }, li = { transition: null }, $m = { ReactCurrentDispatcher: Fe, ReactCurrentBatchConfig: li, ReactCurrentOwner: Gl };
F.Children = { map: ba, forEach: function(e, t, n) {
  ba(e, function() {
    t.apply(this, arguments);
  }, n);
}, count: function(e) {
  var t = 0;
  return ba(e, function() {
    t++;
  }), t;
}, toArray: function(e) {
  return ba(e, function(t) {
    return t;
  }) || [];
}, only: function(e) {
  if (!Kl(e))
    throw Error("React.Children.only expected to receive a single React element child.");
  return e;
} };
F.Component = Mr;
F.Fragment = Cm;
F.Profiler = Om;
F.PureComponent = ql;
F.StrictMode = Em;
F.Suspense = Pm;
F.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = $m;
F.cloneElement = function(e, t, n) {
  if (e == null)
    throw Error("React.cloneElement(...): The argument must be a React element, but you passed " + e + ".");
  var r = Pd({}, e.props), a = e.key, i = e.ref, o = e._owner;
  if (t != null) {
    if (t.ref !== void 0 && (i = t.ref, o = Gl.current), t.key !== void 0 && (a = "" + t.key), e.type && e.type.defaultProps)
      var u = e.type.defaultProps;
    for (l in t)
      Id.call(t, l) && !Ud.hasOwnProperty(l) && (r[l] = t[l] === void 0 && u !== void 0 ? u[l] : t[l]);
  }
  var l = arguments.length - 2;
  if (l === 1)
    r.children = n;
  else if (1 < l) {
    u = Array(l);
    for (var s = 0; s < l; s++)
      u[s] = arguments[s + 2];
    r.children = u;
  }
  return { $$typeof: Ua, type: e.type, key: a, ref: i, props: r, _owner: o };
};
F.createContext = function(e) {
  return e = { $$typeof: Mm, _currentValue: e, _currentValue2: e, _threadCount: 0, Provider: null, Consumer: null, _defaultValue: null, _globalName: null }, e.Provider = { $$typeof: Dm, _context: e }, e.Consumer = e;
};
F.createElement = jd;
F.createFactory = function(e) {
  var t = jd.bind(null, e);
  return t.type = e, t;
};
F.createRef = function() {
  return { current: null };
};
F.forwardRef = function(e) {
  return { $$typeof: Nm, render: e };
};
F.isValidElement = Kl;
F.lazy = function(e) {
  return { $$typeof: Lm, _payload: { _status: -1, _result: e }, _init: zm };
};
F.memo = function(e, t) {
  return { $$typeof: Rm, type: e, compare: t === void 0 ? null : t };
};
F.startTransition = function(e) {
  var t = li.transition;
  li.transition = {};
  try {
    e();
  } finally {
    li.transition = t;
  }
};
F.unstable_act = function() {
  throw Error("act(...) is not supported in production builds of React.");
};
F.useCallback = function(e, t) {
  return Fe.current.useCallback(e, t);
};
F.useContext = function(e) {
  return Fe.current.useContext(e);
};
F.useDebugValue = function() {
};
F.useDeferredValue = function(e) {
  return Fe.current.useDeferredValue(e);
};
F.useEffect = function(e, t) {
  return Fe.current.useEffect(e, t);
};
F.useId = function() {
  return Fe.current.useId();
};
F.useImperativeHandle = function(e, t, n) {
  return Fe.current.useImperativeHandle(e, t, n);
};
F.useInsertionEffect = function(e, t) {
  return Fe.current.useInsertionEffect(e, t);
};
F.useLayoutEffect = function(e, t) {
  return Fe.current.useLayoutEffect(e, t);
};
F.useMemo = function(e, t) {
  return Fe.current.useMemo(e, t);
};
F.useReducer = function(e, t, n) {
  return Fe.current.useReducer(e, t, n);
};
F.useRef = function(e) {
  return Fe.current.useRef(e);
};
F.useState = function(e) {
  return Fe.current.useState(e);
};
F.useSyncExternalStore = function(e, t, n) {
  return Fe.current.useSyncExternalStore(e, t, n);
};
F.useTransition = function() {
  return Fe.current.useTransition();
};
F.version = "18.2.0";
Md.exports = F;
var he = Md.exports;
const ao = /* @__PURE__ */ Ia(he);
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Wm = he, Fm = Symbol.for("react.element"), Am = Symbol.for("react.fragment"), bm = Object.prototype.hasOwnProperty, Ym = Wm.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner, Vm = { key: !0, ref: !0, __self: !0, __source: !0 };
function zd(e, t, n) {
  var r, a = {}, i = null, o = null;
  n !== void 0 && (i = "" + n), t.key !== void 0 && (i = "" + t.key), t.ref !== void 0 && (o = t.ref);
  for (r in t)
    bm.call(t, r) && !Vm.hasOwnProperty(r) && (a[r] = t[r]);
  if (e && e.defaultProps)
    for (r in t = e.defaultProps, t)
      a[r] === void 0 && (a[r] = t[r]);
  return { $$typeof: Fm, type: e, key: i, ref: o, props: a, _owner: Ym.current };
}
ro.Fragment = Am;
ro.jsx = zd;
ro.jsxs = zd;
Dd.exports = ro;
var Z = Dd.exports, $d = { exports: {} }, rt = {}, Wd = { exports: {} }, Fd = {};
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
  function t(O, I) {
    var U = O.length;
    O.push(I);
    e:
      for (; 0 < U; ) {
        var b = U - 1 >>> 1, H = O[b];
        if (0 < a(H, I))
          O[b] = I, O[U] = H, U = b;
        else
          break e;
      }
  }
  function n(O) {
    return O.length === 0 ? null : O[0];
  }
  function r(O) {
    if (O.length === 0)
      return null;
    var I = O[0], U = O.pop();
    if (U !== I) {
      O[0] = U;
      e:
        for (var b = 0, H = O.length, Ge = H >>> 1; b < Ge; ) {
          var Ve = 2 * (b + 1) - 1, it = O[Ve], ot = Ve + 1, Ke = O[ot];
          if (0 > a(it, U))
            ot < H && 0 > a(Ke, it) ? (O[b] = Ke, O[ot] = U, b = ot) : (O[b] = it, O[Ve] = U, b = Ve);
          else if (ot < H && 0 > a(Ke, U))
            O[b] = Ke, O[ot] = U, b = ot;
          else
            break e;
        }
    }
    return I;
  }
  function a(O, I) {
    var U = O.sortIndex - I.sortIndex;
    return U !== 0 ? U : O.id - I.id;
  }
  if (typeof performance == "object" && typeof performance.now == "function") {
    var i = performance;
    e.unstable_now = function() {
      return i.now();
    };
  } else {
    var o = Date, u = o.now();
    e.unstable_now = function() {
      return o.now() - u;
    };
  }
  var l = [], s = [], p = 1, h = null, v = 3, y = !1, w = !1, k = !1, x = typeof setTimeout == "function" ? setTimeout : null, c = typeof clearTimeout == "function" ? clearTimeout : null, d = typeof setImmediate < "u" ? setImmediate : null;
  typeof navigator < "u" && navigator.scheduling !== void 0 && navigator.scheduling.isInputPending !== void 0 && navigator.scheduling.isInputPending.bind(navigator.scheduling);
  function f(O) {
    for (var I = n(s); I !== null; ) {
      if (I.callback === null)
        r(s);
      else if (I.startTime <= O)
        r(s), I.sortIndex = I.expirationTime, t(l, I);
      else
        break;
      I = n(s);
    }
  }
  function m(O) {
    if (k = !1, f(O), !w)
      if (n(l) !== null)
        w = !0, ye(g);
      else {
        var I = n(s);
        I !== null && Le(m, I.startTime - O);
      }
  }
  function g(O, I) {
    w = !1, k && (k = !1, c(E), E = -1), y = !0;
    var U = v;
    try {
      for (f(I), h = n(l); h !== null && (!(h.expirationTime > I) || O && !ee()); ) {
        var b = h.callback;
        if (typeof b == "function") {
          h.callback = null, v = h.priorityLevel;
          var H = b(h.expirationTime <= I);
          I = e.unstable_now(), typeof H == "function" ? h.callback = H : h === n(l) && r(l), f(I);
        } else
          r(l);
        h = n(l);
      }
      if (h !== null)
        var Ge = !0;
      else {
        var Ve = n(s);
        Ve !== null && Le(m, Ve.startTime - I), Ge = !1;
      }
      return Ge;
    } finally {
      h = null, v = U, y = !1;
    }
  }
  var _ = !1, S = null, E = -1, $ = 5, P = -1;
  function ee() {
    return !(e.unstable_now() - P < $);
  }
  function Oe() {
    if (S !== null) {
      var O = e.unstable_now();
      P = O;
      var I = !0;
      try {
        I = S(!0, O);
      } finally {
        I ? ge() : (_ = !1, S = null);
      }
    } else
      _ = !1;
  }
  var ge;
  if (typeof d == "function")
    ge = function() {
      d(Oe);
    };
  else if (typeof MessageChannel < "u") {
    var te = new MessageChannel(), pe = te.port2;
    te.port1.onmessage = Oe, ge = function() {
      pe.postMessage(null);
    };
  } else
    ge = function() {
      x(Oe, 0);
    };
  function ye(O) {
    S = O, _ || (_ = !0, ge());
  }
  function Le(O, I) {
    E = x(function() {
      O(e.unstable_now());
    }, I);
  }
  e.unstable_IdlePriority = 5, e.unstable_ImmediatePriority = 1, e.unstable_LowPriority = 4, e.unstable_NormalPriority = 3, e.unstable_Profiling = null, e.unstable_UserBlockingPriority = 2, e.unstable_cancelCallback = function(O) {
    O.callback = null;
  }, e.unstable_continueExecution = function() {
    w || y || (w = !0, ye(g));
  }, e.unstable_forceFrameRate = function(O) {
    0 > O || 125 < O ? console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported") : $ = 0 < O ? Math.floor(1e3 / O) : 5;
  }, e.unstable_getCurrentPriorityLevel = function() {
    return v;
  }, e.unstable_getFirstCallbackNode = function() {
    return n(l);
  }, e.unstable_next = function(O) {
    switch (v) {
      case 1:
      case 2:
      case 3:
        var I = 3;
        break;
      default:
        I = v;
    }
    var U = v;
    v = I;
    try {
      return O();
    } finally {
      v = U;
    }
  }, e.unstable_pauseExecution = function() {
  }, e.unstable_requestPaint = function() {
  }, e.unstable_runWithPriority = function(O, I) {
    switch (O) {
      case 1:
      case 2:
      case 3:
      case 4:
      case 5:
        break;
      default:
        O = 3;
    }
    var U = v;
    v = O;
    try {
      return I();
    } finally {
      v = U;
    }
  }, e.unstable_scheduleCallback = function(O, I, U) {
    var b = e.unstable_now();
    switch (typeof U == "object" && U !== null ? (U = U.delay, U = typeof U == "number" && 0 < U ? b + U : b) : U = b, O) {
      case 1:
        var H = -1;
        break;
      case 2:
        H = 250;
        break;
      case 5:
        H = 1073741823;
        break;
      case 4:
        H = 1e4;
        break;
      default:
        H = 5e3;
    }
    return H = U + H, O = { id: p++, callback: I, priorityLevel: O, startTime: U, expirationTime: H, sortIndex: -1 }, U > b ? (O.sortIndex = U, t(s, O), n(l) === null && O === n(s) && (k ? (c(E), E = -1) : k = !0, Le(m, U - b))) : (O.sortIndex = H, t(l, O), w || y || (w = !0, ye(g))), O;
  }, e.unstable_shouldYield = ee, e.unstable_wrapCallback = function(O) {
    var I = v;
    return function() {
      var U = v;
      v = I;
      try {
        return O.apply(this, arguments);
      } finally {
        v = U;
      }
    };
  };
})(Fd);
Wd.exports = Fd;
var Zm = Wd.exports;
/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Ad = he, nt = Zm;
function T(e) {
  for (var t = "https://reactjs.org/docs/error-decoder.html?invariant=" + e, n = 1; n < arguments.length; n++)
    t += "&args[]=" + encodeURIComponent(arguments[n]);
  return "Minified React error #" + e + "; visit " + t + " for the full message or use the non-minified dev environment for full errors and additional helpful warnings.";
}
var bd = /* @__PURE__ */ new Set(), ra = {};
function Hn(e, t) {
  wr(e, t), wr(e + "Capture", t);
}
function wr(e, t) {
  for (ra[e] = t, e = 0; e < t.length; e++)
    bd.add(t[e]);
}
var Ht = !(typeof window > "u" || typeof window.document > "u" || typeof window.document.createElement > "u"), fu = Object.prototype.hasOwnProperty, Hm = /^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/, ec = {}, tc = {};
function Bm(e) {
  return fu.call(tc, e) ? !0 : fu.call(ec, e) ? !1 : Hm.test(e) ? tc[e] = !0 : (ec[e] = !0, !1);
}
function Qm(e, t, n, r) {
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
function qm(e, t, n, r) {
  if (t === null || typeof t > "u" || Qm(e, t, n, r))
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
function Ae(e, t, n, r, a, i, o) {
  this.acceptsBooleans = t === 2 || t === 3 || t === 4, this.attributeName = r, this.attributeNamespace = a, this.mustUseProperty = n, this.propertyName = e, this.type = t, this.sanitizeURL = i, this.removeEmptyString = o;
}
var Ee = {};
"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e) {
  Ee[e] = new Ae(e, 0, !1, e, null, !1, !1);
});
[["acceptCharset", "accept-charset"], ["className", "class"], ["htmlFor", "for"], ["httpEquiv", "http-equiv"]].forEach(function(e) {
  var t = e[0];
  Ee[t] = new Ae(t, 1, !1, e[1], null, !1, !1);
});
["contentEditable", "draggable", "spellCheck", "value"].forEach(function(e) {
  Ee[e] = new Ae(e, 2, !1, e.toLowerCase(), null, !1, !1);
});
["autoReverse", "externalResourcesRequired", "focusable", "preserveAlpha"].forEach(function(e) {
  Ee[e] = new Ae(e, 2, !1, e, null, !1, !1);
});
"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e) {
  Ee[e] = new Ae(e, 3, !1, e.toLowerCase(), null, !1, !1);
});
["checked", "multiple", "muted", "selected"].forEach(function(e) {
  Ee[e] = new Ae(e, 3, !0, e, null, !1, !1);
});
["capture", "download"].forEach(function(e) {
  Ee[e] = new Ae(e, 4, !1, e, null, !1, !1);
});
["cols", "rows", "size", "span"].forEach(function(e) {
  Ee[e] = new Ae(e, 6, !1, e, null, !1, !1);
});
["rowSpan", "start"].forEach(function(e) {
  Ee[e] = new Ae(e, 5, !1, e.toLowerCase(), null, !1, !1);
});
var Jl = /[\-:]([a-z])/g;
function es(e) {
  return e[1].toUpperCase();
}
"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e) {
  var t = e.replace(
    Jl,
    es
  );
  Ee[t] = new Ae(t, 1, !1, e, null, !1, !1);
});
"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e) {
  var t = e.replace(Jl, es);
  Ee[t] = new Ae(t, 1, !1, e, "http://www.w3.org/1999/xlink", !1, !1);
});
["xml:base", "xml:lang", "xml:space"].forEach(function(e) {
  var t = e.replace(Jl, es);
  Ee[t] = new Ae(t, 1, !1, e, "http://www.w3.org/XML/1998/namespace", !1, !1);
});
["tabIndex", "crossOrigin"].forEach(function(e) {
  Ee[e] = new Ae(e, 1, !1, e.toLowerCase(), null, !1, !1);
});
Ee.xlinkHref = new Ae("xlinkHref", 1, !1, "xlink:href", "http://www.w3.org/1999/xlink", !0, !1);
["src", "href", "action", "formAction"].forEach(function(e) {
  Ee[e] = new Ae(e, 1, !1, e.toLowerCase(), null, !0, !0);
});
function ts(e, t, n, r) {
  var a = Ee.hasOwnProperty(t) ? Ee[t] : null;
  (a !== null ? a.type !== 0 : r || !(2 < t.length) || t[0] !== "o" && t[0] !== "O" || t[1] !== "n" && t[1] !== "N") && (qm(t, n, a, r) && (n = null), r || a === null ? Bm(t) && (n === null ? e.removeAttribute(t) : e.setAttribute(t, "" + n)) : a.mustUseProperty ? e[a.propertyName] = n === null ? a.type === 3 ? !1 : "" : n : (t = a.attributeName, r = a.attributeNamespace, n === null ? e.removeAttribute(t) : (a = a.type, n = a === 3 || a === 4 && n === !0 ? "" : "" + n, r ? e.setAttributeNS(r, t, n) : e.setAttribute(t, n))));
}
var Gt = Ad.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED, Ya = Symbol.for("react.element"), er = Symbol.for("react.portal"), tr = Symbol.for("react.fragment"), ns = Symbol.for("react.strict_mode"), pu = Symbol.for("react.profiler"), Yd = Symbol.for("react.provider"), Vd = Symbol.for("react.context"), rs = Symbol.for("react.forward_ref"), mu = Symbol.for("react.suspense"), hu = Symbol.for("react.suspense_list"), as = Symbol.for("react.memo"), en = Symbol.for("react.lazy"), Zd = Symbol.for("react.offscreen"), nc = Symbol.iterator;
function Lr(e) {
  return e === null || typeof e != "object" ? null : (e = nc && e[nc] || e["@@iterator"], typeof e == "function" ? e : null);
}
var se = Object.assign, Oo;
function Vr(e) {
  if (Oo === void 0)
    try {
      throw Error();
    } catch (n) {
      var t = n.stack.trim().match(/\n( *(at )?)/);
      Oo = t && t[1] || "";
    }
  return `
` + Oo + e;
}
var Do = !1;
function Mo(e, t) {
  if (!e || Do)
    return "";
  Do = !0;
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
        } catch (s) {
          var r = s;
        }
        Reflect.construct(e, [], t);
      } else {
        try {
          t.call();
        } catch (s) {
          r = s;
        }
        e.call(t.prototype);
      }
    else {
      try {
        throw Error();
      } catch (s) {
        r = s;
      }
      e();
    }
  } catch (s) {
    if (s && r && typeof s.stack == "string") {
      for (var a = s.stack.split(`
`), i = r.stack.split(`
`), o = a.length - 1, u = i.length - 1; 1 <= o && 0 <= u && a[o] !== i[u]; )
        u--;
      for (; 1 <= o && 0 <= u; o--, u--)
        if (a[o] !== i[u]) {
          if (o !== 1 || u !== 1)
            do
              if (o--, u--, 0 > u || a[o] !== i[u]) {
                var l = `
` + a[o].replace(" at new ", " at ");
                return e.displayName && l.includes("<anonymous>") && (l = l.replace("<anonymous>", e.displayName)), l;
              }
            while (1 <= o && 0 <= u);
          break;
        }
    }
  } finally {
    Do = !1, Error.prepareStackTrace = n;
  }
  return (e = e ? e.displayName || e.name : "") ? Vr(e) : "";
}
function Xm(e) {
  switch (e.tag) {
    case 5:
      return Vr(e.type);
    case 16:
      return Vr("Lazy");
    case 13:
      return Vr("Suspense");
    case 19:
      return Vr("SuspenseList");
    case 0:
    case 2:
    case 15:
      return e = Mo(e.type, !1), e;
    case 11:
      return e = Mo(e.type.render, !1), e;
    case 1:
      return e = Mo(e.type, !0), e;
    default:
      return "";
  }
}
function vu(e) {
  if (e == null)
    return null;
  if (typeof e == "function")
    return e.displayName || e.name || null;
  if (typeof e == "string")
    return e;
  switch (e) {
    case tr:
      return "Fragment";
    case er:
      return "Portal";
    case pu:
      return "Profiler";
    case ns:
      return "StrictMode";
    case mu:
      return "Suspense";
    case hu:
      return "SuspenseList";
  }
  if (typeof e == "object")
    switch (e.$$typeof) {
      case Vd:
        return (e.displayName || "Context") + ".Consumer";
      case Yd:
        return (e._context.displayName || "Context") + ".Provider";
      case rs:
        var t = e.render;
        return e = e.displayName, e || (e = t.displayName || t.name || "", e = e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef"), e;
      case as:
        return t = e.displayName || null, t !== null ? t : vu(e.type) || "Memo";
      case en:
        t = e._payload, e = e._init;
        try {
          return vu(e(t));
        } catch {
        }
    }
  return null;
}
function Gm(e) {
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
      return vu(t);
    case 8:
      return t === ns ? "StrictMode" : "Mode";
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
function gn(e) {
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
function Hd(e) {
  var t = e.type;
  return (e = e.nodeName) && e.toLowerCase() === "input" && (t === "checkbox" || t === "radio");
}
function Km(e) {
  var t = Hd(e) ? "checked" : "value", n = Object.getOwnPropertyDescriptor(e.constructor.prototype, t), r = "" + e[t];
  if (!e.hasOwnProperty(t) && typeof n < "u" && typeof n.get == "function" && typeof n.set == "function") {
    var a = n.get, i = n.set;
    return Object.defineProperty(e, t, { configurable: !0, get: function() {
      return a.call(this);
    }, set: function(o) {
      r = "" + o, i.call(this, o);
    } }), Object.defineProperty(e, t, { enumerable: n.enumerable }), { getValue: function() {
      return r;
    }, setValue: function(o) {
      r = "" + o;
    }, stopTracking: function() {
      e._valueTracker = null, delete e[t];
    } };
  }
}
function Va(e) {
  e._valueTracker || (e._valueTracker = Km(e));
}
function Bd(e) {
  if (!e)
    return !1;
  var t = e._valueTracker;
  if (!t)
    return !0;
  var n = t.getValue(), r = "";
  return e && (r = Hd(e) ? e.checked ? "true" : "false" : e.value), e = r, e !== n ? (t.setValue(e), !0) : !1;
}
function _i(e) {
  if (e = e || (typeof document < "u" ? document : void 0), typeof e > "u")
    return null;
  try {
    return e.activeElement || e.body;
  } catch {
    return e.body;
  }
}
function gu(e, t) {
  var n = t.checked;
  return se({}, t, { defaultChecked: void 0, defaultValue: void 0, value: void 0, checked: n ?? e._wrapperState.initialChecked });
}
function rc(e, t) {
  var n = t.defaultValue == null ? "" : t.defaultValue, r = t.checked != null ? t.checked : t.defaultChecked;
  n = gn(t.value != null ? t.value : n), e._wrapperState = { initialChecked: r, initialValue: n, controlled: t.type === "checkbox" || t.type === "radio" ? t.checked != null : t.value != null };
}
function Qd(e, t) {
  t = t.checked, t != null && ts(e, "checked", t, !1);
}
function yu(e, t) {
  Qd(e, t);
  var n = gn(t.value), r = t.type;
  if (n != null)
    r === "number" ? (n === 0 && e.value === "" || e.value != n) && (e.value = "" + n) : e.value !== "" + n && (e.value = "" + n);
  else if (r === "submit" || r === "reset") {
    e.removeAttribute("value");
    return;
  }
  t.hasOwnProperty("value") ? wu(e, t.type, n) : t.hasOwnProperty("defaultValue") && wu(e, t.type, gn(t.defaultValue)), t.checked == null && t.defaultChecked != null && (e.defaultChecked = !!t.defaultChecked);
}
function ac(e, t, n) {
  if (t.hasOwnProperty("value") || t.hasOwnProperty("defaultValue")) {
    var r = t.type;
    if (!(r !== "submit" && r !== "reset" || t.value !== void 0 && t.value !== null))
      return;
    t = "" + e._wrapperState.initialValue, n || t === e.value || (e.value = t), e.defaultValue = t;
  }
  n = e.name, n !== "" && (e.name = ""), e.defaultChecked = !!e._wrapperState.initialChecked, n !== "" && (e.name = n);
}
function wu(e, t, n) {
  (t !== "number" || _i(e.ownerDocument) !== e) && (n == null ? e.defaultValue = "" + e._wrapperState.initialValue : e.defaultValue !== "" + n && (e.defaultValue = "" + n));
}
var Zr = Array.isArray;
function fr(e, t, n, r) {
  if (e = e.options, t) {
    t = {};
    for (var a = 0; a < n.length; a++)
      t["$" + n[a]] = !0;
    for (n = 0; n < e.length; n++)
      a = t.hasOwnProperty("$" + e[n].value), e[n].selected !== a && (e[n].selected = a), a && r && (e[n].defaultSelected = !0);
  } else {
    for (n = "" + gn(n), t = null, a = 0; a < e.length; a++) {
      if (e[a].value === n) {
        e[a].selected = !0, r && (e[a].defaultSelected = !0);
        return;
      }
      t !== null || e[a].disabled || (t = e[a]);
    }
    t !== null && (t.selected = !0);
  }
}
function _u(e, t) {
  if (t.dangerouslySetInnerHTML != null)
    throw Error(T(91));
  return se({}, t, { value: void 0, defaultValue: void 0, children: "" + e._wrapperState.initialValue });
}
function ic(e, t) {
  var n = t.value;
  if (n == null) {
    if (n = t.children, t = t.defaultValue, n != null) {
      if (t != null)
        throw Error(T(92));
      if (Zr(n)) {
        if (1 < n.length)
          throw Error(T(93));
        n = n[0];
      }
      t = n;
    }
    t == null && (t = ""), n = t;
  }
  e._wrapperState = { initialValue: gn(n) };
}
function qd(e, t) {
  var n = gn(t.value), r = gn(t.defaultValue);
  n != null && (n = "" + n, n !== e.value && (e.value = n), t.defaultValue == null && e.defaultValue !== n && (e.defaultValue = n)), r != null && (e.defaultValue = "" + r);
}
function oc(e) {
  var t = e.textContent;
  t === e._wrapperState.initialValue && t !== "" && t !== null && (e.value = t);
}
function Xd(e) {
  switch (e) {
    case "svg":
      return "http://www.w3.org/2000/svg";
    case "math":
      return "http://www.w3.org/1998/Math/MathML";
    default:
      return "http://www.w3.org/1999/xhtml";
  }
}
function xu(e, t) {
  return e == null || e === "http://www.w3.org/1999/xhtml" ? Xd(t) : e === "http://www.w3.org/2000/svg" && t === "foreignObject" ? "http://www.w3.org/1999/xhtml" : e;
}
var Za, Gd = function(e) {
  return typeof MSApp < "u" && MSApp.execUnsafeLocalFunction ? function(t, n, r, a) {
    MSApp.execUnsafeLocalFunction(function() {
      return e(t, n, r, a);
    });
  } : e;
}(function(e, t) {
  if (e.namespaceURI !== "http://www.w3.org/2000/svg" || "innerHTML" in e)
    e.innerHTML = t;
  else {
    for (Za = Za || document.createElement("div"), Za.innerHTML = "<svg>" + t.valueOf().toString() + "</svg>", t = Za.firstChild; e.firstChild; )
      e.removeChild(e.firstChild);
    for (; t.firstChild; )
      e.appendChild(t.firstChild);
  }
});
function aa(e, t) {
  if (t) {
    var n = e.firstChild;
    if (n && n === e.lastChild && n.nodeType === 3) {
      n.nodeValue = t;
      return;
    }
  }
  e.textContent = t;
}
var Qr = {
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
}, Jm = ["Webkit", "ms", "Moz", "O"];
Object.keys(Qr).forEach(function(e) {
  Jm.forEach(function(t) {
    t = t + e.charAt(0).toUpperCase() + e.substring(1), Qr[t] = Qr[e];
  });
});
function Kd(e, t, n) {
  return t == null || typeof t == "boolean" || t === "" ? "" : n || typeof t != "number" || t === 0 || Qr.hasOwnProperty(e) && Qr[e] ? ("" + t).trim() : t + "px";
}
function Jd(e, t) {
  e = e.style;
  for (var n in t)
    if (t.hasOwnProperty(n)) {
      var r = n.indexOf("--") === 0, a = Kd(n, t[n], r);
      n === "float" && (n = "cssFloat"), r ? e.setProperty(n, a) : e[n] = a;
    }
}
var eh = se({ menuitem: !0 }, { area: !0, base: !0, br: !0, col: !0, embed: !0, hr: !0, img: !0, input: !0, keygen: !0, link: !0, meta: !0, param: !0, source: !0, track: !0, wbr: !0 });
function ku(e, t) {
  if (t) {
    if (eh[e] && (t.children != null || t.dangerouslySetInnerHTML != null))
      throw Error(T(137, e));
    if (t.dangerouslySetInnerHTML != null) {
      if (t.children != null)
        throw Error(T(60));
      if (typeof t.dangerouslySetInnerHTML != "object" || !("__html" in t.dangerouslySetInnerHTML))
        throw Error(T(61));
    }
    if (t.style != null && typeof t.style != "object")
      throw Error(T(62));
  }
}
function Su(e, t) {
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
var Tu = null;
function is(e) {
  return e = e.target || e.srcElement || window, e.correspondingUseElement && (e = e.correspondingUseElement), e.nodeType === 3 ? e.parentNode : e;
}
var Cu = null, pr = null, mr = null;
function uc(e) {
  if (e = $a(e)) {
    if (typeof Cu != "function")
      throw Error(T(280));
    var t = e.stateNode;
    t && (t = so(t), Cu(e.stateNode, e.type, t));
  }
}
function ef(e) {
  pr ? mr ? mr.push(e) : mr = [e] : pr = e;
}
function tf() {
  if (pr) {
    var e = pr, t = mr;
    if (mr = pr = null, uc(e), t)
      for (e = 0; e < t.length; e++)
        uc(t[e]);
  }
}
function nf(e, t) {
  return e(t);
}
function rf() {
}
var No = !1;
function af(e, t, n) {
  if (No)
    return e(t, n);
  No = !0;
  try {
    return nf(e, t, n);
  } finally {
    No = !1, (pr !== null || mr !== null) && (rf(), tf());
  }
}
function ia(e, t) {
  var n = e.stateNode;
  if (n === null)
    return null;
  var r = so(n);
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
    throw Error(T(231, t, typeof n));
  return n;
}
var Eu = !1;
if (Ht)
  try {
    var Ir = {};
    Object.defineProperty(Ir, "passive", { get: function() {
      Eu = !0;
    } }), window.addEventListener("test", Ir, Ir), window.removeEventListener("test", Ir, Ir);
  } catch {
    Eu = !1;
  }
function th(e, t, n, r, a, i, o, u, l) {
  var s = Array.prototype.slice.call(arguments, 3);
  try {
    t.apply(n, s);
  } catch (p) {
    this.onError(p);
  }
}
var qr = !1, xi = null, ki = !1, Ou = null, nh = { onError: function(e) {
  qr = !0, xi = e;
} };
function rh(e, t, n, r, a, i, o, u, l) {
  qr = !1, xi = null, th.apply(nh, arguments);
}
function ah(e, t, n, r, a, i, o, u, l) {
  if (rh.apply(this, arguments), qr) {
    if (qr) {
      var s = xi;
      qr = !1, xi = null;
    } else
      throw Error(T(198));
    ki || (ki = !0, Ou = s);
  }
}
function Bn(e) {
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
function of(e) {
  if (e.tag === 13) {
    var t = e.memoizedState;
    if (t === null && (e = e.alternate, e !== null && (t = e.memoizedState)), t !== null)
      return t.dehydrated;
  }
  return null;
}
function lc(e) {
  if (Bn(e) !== e)
    throw Error(T(188));
}
function ih(e) {
  var t = e.alternate;
  if (!t) {
    if (t = Bn(e), t === null)
      throw Error(T(188));
    return t !== e ? null : e;
  }
  for (var n = e, r = t; ; ) {
    var a = n.return;
    if (a === null)
      break;
    var i = a.alternate;
    if (i === null) {
      if (r = a.return, r !== null) {
        n = r;
        continue;
      }
      break;
    }
    if (a.child === i.child) {
      for (i = a.child; i; ) {
        if (i === n)
          return lc(a), e;
        if (i === r)
          return lc(a), t;
        i = i.sibling;
      }
      throw Error(T(188));
    }
    if (n.return !== r.return)
      n = a, r = i;
    else {
      for (var o = !1, u = a.child; u; ) {
        if (u === n) {
          o = !0, n = a, r = i;
          break;
        }
        if (u === r) {
          o = !0, r = a, n = i;
          break;
        }
        u = u.sibling;
      }
      if (!o) {
        for (u = i.child; u; ) {
          if (u === n) {
            o = !0, n = i, r = a;
            break;
          }
          if (u === r) {
            o = !0, r = i, n = a;
            break;
          }
          u = u.sibling;
        }
        if (!o)
          throw Error(T(189));
      }
    }
    if (n.alternate !== r)
      throw Error(T(190));
  }
  if (n.tag !== 3)
    throw Error(T(188));
  return n.stateNode.current === n ? e : t;
}
function uf(e) {
  return e = ih(e), e !== null ? lf(e) : null;
}
function lf(e) {
  if (e.tag === 5 || e.tag === 6)
    return e;
  for (e = e.child; e !== null; ) {
    var t = lf(e);
    if (t !== null)
      return t;
    e = e.sibling;
  }
  return null;
}
var sf = nt.unstable_scheduleCallback, sc = nt.unstable_cancelCallback, oh = nt.unstable_shouldYield, uh = nt.unstable_requestPaint, me = nt.unstable_now, lh = nt.unstable_getCurrentPriorityLevel, os = nt.unstable_ImmediatePriority, cf = nt.unstable_UserBlockingPriority, Si = nt.unstable_NormalPriority, sh = nt.unstable_LowPriority, df = nt.unstable_IdlePriority, io = null, Mt = null;
function ch(e) {
  if (Mt && typeof Mt.onCommitFiberRoot == "function")
    try {
      Mt.onCommitFiberRoot(io, e, void 0, (e.current.flags & 128) === 128);
    } catch {
    }
}
var wt = Math.clz32 ? Math.clz32 : ph, dh = Math.log, fh = Math.LN2;
function ph(e) {
  return e >>>= 0, e === 0 ? 32 : 31 - (dh(e) / fh | 0) | 0;
}
var Ha = 64, Ba = 4194304;
function Hr(e) {
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
function Ti(e, t) {
  var n = e.pendingLanes;
  if (n === 0)
    return 0;
  var r = 0, a = e.suspendedLanes, i = e.pingedLanes, o = n & 268435455;
  if (o !== 0) {
    var u = o & ~a;
    u !== 0 ? r = Hr(u) : (i &= o, i !== 0 && (r = Hr(i)));
  } else
    o = n & ~a, o !== 0 ? r = Hr(o) : i !== 0 && (r = Hr(i));
  if (r === 0)
    return 0;
  if (t !== 0 && t !== r && !(t & a) && (a = r & -r, i = t & -t, a >= i || a === 16 && (i & 4194240) !== 0))
    return t;
  if (r & 4 && (r |= n & 16), t = e.entangledLanes, t !== 0)
    for (e = e.entanglements, t &= r; 0 < t; )
      n = 31 - wt(t), a = 1 << n, r |= e[n], t &= ~a;
  return r;
}
function mh(e, t) {
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
function hh(e, t) {
  for (var n = e.suspendedLanes, r = e.pingedLanes, a = e.expirationTimes, i = e.pendingLanes; 0 < i; ) {
    var o = 31 - wt(i), u = 1 << o, l = a[o];
    l === -1 ? (!(u & n) || u & r) && (a[o] = mh(u, t)) : l <= t && (e.expiredLanes |= u), i &= ~u;
  }
}
function Du(e) {
  return e = e.pendingLanes & -1073741825, e !== 0 ? e : e & 1073741824 ? 1073741824 : 0;
}
function ff() {
  var e = Ha;
  return Ha <<= 1, !(Ha & 4194240) && (Ha = 64), e;
}
function Po(e) {
  for (var t = [], n = 0; 31 > n; n++)
    t.push(e);
  return t;
}
function ja(e, t, n) {
  e.pendingLanes |= t, t !== 536870912 && (e.suspendedLanes = 0, e.pingedLanes = 0), e = e.eventTimes, t = 31 - wt(t), e[t] = n;
}
function vh(e, t) {
  var n = e.pendingLanes & ~t;
  e.pendingLanes = t, e.suspendedLanes = 0, e.pingedLanes = 0, e.expiredLanes &= t, e.mutableReadLanes &= t, e.entangledLanes &= t, t = e.entanglements;
  var r = e.eventTimes;
  for (e = e.expirationTimes; 0 < n; ) {
    var a = 31 - wt(n), i = 1 << a;
    t[a] = 0, r[a] = -1, e[a] = -1, n &= ~i;
  }
}
function us(e, t) {
  var n = e.entangledLanes |= t;
  for (e = e.entanglements; n; ) {
    var r = 31 - wt(n), a = 1 << r;
    a & t | e[r] & t && (e[r] |= t), n &= ~a;
  }
}
var Q = 0;
function pf(e) {
  return e &= -e, 1 < e ? 4 < e ? e & 268435455 ? 16 : 536870912 : 4 : 1;
}
var mf, ls, hf, vf, gf, Mu = !1, Qa = [], sn = null, cn = null, dn = null, oa = /* @__PURE__ */ new Map(), ua = /* @__PURE__ */ new Map(), nn = [], gh = "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");
function cc(e, t) {
  switch (e) {
    case "focusin":
    case "focusout":
      sn = null;
      break;
    case "dragenter":
    case "dragleave":
      cn = null;
      break;
    case "mouseover":
    case "mouseout":
      dn = null;
      break;
    case "pointerover":
    case "pointerout":
      oa.delete(t.pointerId);
      break;
    case "gotpointercapture":
    case "lostpointercapture":
      ua.delete(t.pointerId);
  }
}
function Ur(e, t, n, r, a, i) {
  return e === null || e.nativeEvent !== i ? (e = { blockedOn: t, domEventName: n, eventSystemFlags: r, nativeEvent: i, targetContainers: [a] }, t !== null && (t = $a(t), t !== null && ls(t)), e) : (e.eventSystemFlags |= r, t = e.targetContainers, a !== null && t.indexOf(a) === -1 && t.push(a), e);
}
function yh(e, t, n, r, a) {
  switch (t) {
    case "focusin":
      return sn = Ur(sn, e, t, n, r, a), !0;
    case "dragenter":
      return cn = Ur(cn, e, t, n, r, a), !0;
    case "mouseover":
      return dn = Ur(dn, e, t, n, r, a), !0;
    case "pointerover":
      var i = a.pointerId;
      return oa.set(i, Ur(oa.get(i) || null, e, t, n, r, a)), !0;
    case "gotpointercapture":
      return i = a.pointerId, ua.set(i, Ur(ua.get(i) || null, e, t, n, r, a)), !0;
  }
  return !1;
}
function yf(e) {
  var t = Pn(e.target);
  if (t !== null) {
    var n = Bn(t);
    if (n !== null) {
      if (t = n.tag, t === 13) {
        if (t = of(n), t !== null) {
          e.blockedOn = t, gf(e.priority, function() {
            hf(n);
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
function si(e) {
  if (e.blockedOn !== null)
    return !1;
  for (var t = e.targetContainers; 0 < t.length; ) {
    var n = Nu(e.domEventName, e.eventSystemFlags, t[0], e.nativeEvent);
    if (n === null) {
      n = e.nativeEvent;
      var r = new n.constructor(n.type, n);
      Tu = r, n.target.dispatchEvent(r), Tu = null;
    } else
      return t = $a(n), t !== null && ls(t), e.blockedOn = n, !1;
    t.shift();
  }
  return !0;
}
function dc(e, t, n) {
  si(e) && n.delete(t);
}
function wh() {
  Mu = !1, sn !== null && si(sn) && (sn = null), cn !== null && si(cn) && (cn = null), dn !== null && si(dn) && (dn = null), oa.forEach(dc), ua.forEach(dc);
}
function jr(e, t) {
  e.blockedOn === t && (e.blockedOn = null, Mu || (Mu = !0, nt.unstable_scheduleCallback(nt.unstable_NormalPriority, wh)));
}
function la(e) {
  function t(a) {
    return jr(a, e);
  }
  if (0 < Qa.length) {
    jr(Qa[0], e);
    for (var n = 1; n < Qa.length; n++) {
      var r = Qa[n];
      r.blockedOn === e && (r.blockedOn = null);
    }
  }
  for (sn !== null && jr(sn, e), cn !== null && jr(cn, e), dn !== null && jr(dn, e), oa.forEach(t), ua.forEach(t), n = 0; n < nn.length; n++)
    r = nn[n], r.blockedOn === e && (r.blockedOn = null);
  for (; 0 < nn.length && (n = nn[0], n.blockedOn === null); )
    yf(n), n.blockedOn === null && nn.shift();
}
var hr = Gt.ReactCurrentBatchConfig, Ci = !0;
function _h(e, t, n, r) {
  var a = Q, i = hr.transition;
  hr.transition = null;
  try {
    Q = 1, ss(e, t, n, r);
  } finally {
    Q = a, hr.transition = i;
  }
}
function xh(e, t, n, r) {
  var a = Q, i = hr.transition;
  hr.transition = null;
  try {
    Q = 4, ss(e, t, n, r);
  } finally {
    Q = a, hr.transition = i;
  }
}
function ss(e, t, n, r) {
  if (Ci) {
    var a = Nu(e, t, n, r);
    if (a === null)
      Ao(e, t, r, Ei, n), cc(e, r);
    else if (yh(a, e, t, n, r))
      r.stopPropagation();
    else if (cc(e, r), t & 4 && -1 < gh.indexOf(e)) {
      for (; a !== null; ) {
        var i = $a(a);
        if (i !== null && mf(i), i = Nu(e, t, n, r), i === null && Ao(e, t, r, Ei, n), i === a)
          break;
        a = i;
      }
      a !== null && r.stopPropagation();
    } else
      Ao(e, t, r, null, n);
  }
}
var Ei = null;
function Nu(e, t, n, r) {
  if (Ei = null, e = is(r), e = Pn(e), e !== null)
    if (t = Bn(e), t === null)
      e = null;
    else if (n = t.tag, n === 13) {
      if (e = of(t), e !== null)
        return e;
      e = null;
    } else if (n === 3) {
      if (t.stateNode.current.memoizedState.isDehydrated)
        return t.tag === 3 ? t.stateNode.containerInfo : null;
      e = null;
    } else
      t !== e && (e = null);
  return Ei = e, null;
}
function wf(e) {
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
      switch (lh()) {
        case os:
          return 1;
        case cf:
          return 4;
        case Si:
        case sh:
          return 16;
        case df:
          return 536870912;
        default:
          return 16;
      }
    default:
      return 16;
  }
}
var on = null, cs = null, ci = null;
function _f() {
  if (ci)
    return ci;
  var e, t = cs, n = t.length, r, a = "value" in on ? on.value : on.textContent, i = a.length;
  for (e = 0; e < n && t[e] === a[e]; e++)
    ;
  var o = n - e;
  for (r = 1; r <= o && t[n - r] === a[i - r]; r++)
    ;
  return ci = a.slice(e, 1 < r ? 1 - r : void 0);
}
function di(e) {
  var t = e.keyCode;
  return "charCode" in e ? (e = e.charCode, e === 0 && t === 13 && (e = 13)) : e = t, e === 10 && (e = 13), 32 <= e || e === 13 ? e : 0;
}
function qa() {
  return !0;
}
function fc() {
  return !1;
}
function at(e) {
  function t(n, r, a, i, o) {
    this._reactName = n, this._targetInst = a, this.type = r, this.nativeEvent = i, this.target = o, this.currentTarget = null;
    for (var u in e)
      e.hasOwnProperty(u) && (n = e[u], this[u] = n ? n(i) : i[u]);
    return this.isDefaultPrevented = (i.defaultPrevented != null ? i.defaultPrevented : i.returnValue === !1) ? qa : fc, this.isPropagationStopped = fc, this;
  }
  return se(t.prototype, { preventDefault: function() {
    this.defaultPrevented = !0;
    var n = this.nativeEvent;
    n && (n.preventDefault ? n.preventDefault() : typeof n.returnValue != "unknown" && (n.returnValue = !1), this.isDefaultPrevented = qa);
  }, stopPropagation: function() {
    var n = this.nativeEvent;
    n && (n.stopPropagation ? n.stopPropagation() : typeof n.cancelBubble != "unknown" && (n.cancelBubble = !0), this.isPropagationStopped = qa);
  }, persist: function() {
  }, isPersistent: qa }), t;
}
var Nr = { eventPhase: 0, bubbles: 0, cancelable: 0, timeStamp: function(e) {
  return e.timeStamp || Date.now();
}, defaultPrevented: 0, isTrusted: 0 }, ds = at(Nr), za = se({}, Nr, { view: 0, detail: 0 }), kh = at(za), Ro, Lo, zr, oo = se({}, za, { screenX: 0, screenY: 0, clientX: 0, clientY: 0, pageX: 0, pageY: 0, ctrlKey: 0, shiftKey: 0, altKey: 0, metaKey: 0, getModifierState: fs, button: 0, buttons: 0, relatedTarget: function(e) {
  return e.relatedTarget === void 0 ? e.fromElement === e.srcElement ? e.toElement : e.fromElement : e.relatedTarget;
}, movementX: function(e) {
  return "movementX" in e ? e.movementX : (e !== zr && (zr && e.type === "mousemove" ? (Ro = e.screenX - zr.screenX, Lo = e.screenY - zr.screenY) : Lo = Ro = 0, zr = e), Ro);
}, movementY: function(e) {
  return "movementY" in e ? e.movementY : Lo;
} }), pc = at(oo), Sh = se({}, oo, { dataTransfer: 0 }), Th = at(Sh), Ch = se({}, za, { relatedTarget: 0 }), Io = at(Ch), Eh = se({}, Nr, { animationName: 0, elapsedTime: 0, pseudoElement: 0 }), Oh = at(Eh), Dh = se({}, Nr, { clipboardData: function(e) {
  return "clipboardData" in e ? e.clipboardData : window.clipboardData;
} }), Mh = at(Dh), Nh = se({}, Nr, { data: 0 }), mc = at(Nh), Ph = {
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
}, Rh = {
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
}, Lh = { Alt: "altKey", Control: "ctrlKey", Meta: "metaKey", Shift: "shiftKey" };
function Ih(e) {
  var t = this.nativeEvent;
  return t.getModifierState ? t.getModifierState(e) : (e = Lh[e]) ? !!t[e] : !1;
}
function fs() {
  return Ih;
}
var Uh = se({}, za, { key: function(e) {
  if (e.key) {
    var t = Ph[e.key] || e.key;
    if (t !== "Unidentified")
      return t;
  }
  return e.type === "keypress" ? (e = di(e), e === 13 ? "Enter" : String.fromCharCode(e)) : e.type === "keydown" || e.type === "keyup" ? Rh[e.keyCode] || "Unidentified" : "";
}, code: 0, location: 0, ctrlKey: 0, shiftKey: 0, altKey: 0, metaKey: 0, repeat: 0, locale: 0, getModifierState: fs, charCode: function(e) {
  return e.type === "keypress" ? di(e) : 0;
}, keyCode: function(e) {
  return e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0;
}, which: function(e) {
  return e.type === "keypress" ? di(e) : e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0;
} }), jh = at(Uh), zh = se({}, oo, { pointerId: 0, width: 0, height: 0, pressure: 0, tangentialPressure: 0, tiltX: 0, tiltY: 0, twist: 0, pointerType: 0, isPrimary: 0 }), hc = at(zh), $h = se({}, za, { touches: 0, targetTouches: 0, changedTouches: 0, altKey: 0, metaKey: 0, ctrlKey: 0, shiftKey: 0, getModifierState: fs }), Wh = at($h), Fh = se({}, Nr, { propertyName: 0, elapsedTime: 0, pseudoElement: 0 }), Ah = at(Fh), bh = se({}, oo, {
  deltaX: function(e) {
    return "deltaX" in e ? e.deltaX : "wheelDeltaX" in e ? -e.wheelDeltaX : 0;
  },
  deltaY: function(e) {
    return "deltaY" in e ? e.deltaY : "wheelDeltaY" in e ? -e.wheelDeltaY : "wheelDelta" in e ? -e.wheelDelta : 0;
  },
  deltaZ: 0,
  deltaMode: 0
}), Yh = at(bh), Vh = [9, 13, 27, 32], ps = Ht && "CompositionEvent" in window, Xr = null;
Ht && "documentMode" in document && (Xr = document.documentMode);
var Zh = Ht && "TextEvent" in window && !Xr, xf = Ht && (!ps || Xr && 8 < Xr && 11 >= Xr), vc = " ", gc = !1;
function kf(e, t) {
  switch (e) {
    case "keyup":
      return Vh.indexOf(t.keyCode) !== -1;
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
function Sf(e) {
  return e = e.detail, typeof e == "object" && "data" in e ? e.data : null;
}
var nr = !1;
function Hh(e, t) {
  switch (e) {
    case "compositionend":
      return Sf(t);
    case "keypress":
      return t.which !== 32 ? null : (gc = !0, vc);
    case "textInput":
      return e = t.data, e === vc && gc ? null : e;
    default:
      return null;
  }
}
function Bh(e, t) {
  if (nr)
    return e === "compositionend" || !ps && kf(e, t) ? (e = _f(), ci = cs = on = null, nr = !1, e) : null;
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
      return xf && t.locale !== "ko" ? null : t.data;
    default:
      return null;
  }
}
var Qh = { color: !0, date: !0, datetime: !0, "datetime-local": !0, email: !0, month: !0, number: !0, password: !0, range: !0, search: !0, tel: !0, text: !0, time: !0, url: !0, week: !0 };
function yc(e) {
  var t = e && e.nodeName && e.nodeName.toLowerCase();
  return t === "input" ? !!Qh[e.type] : t === "textarea";
}
function Tf(e, t, n, r) {
  ef(r), t = Oi(t, "onChange"), 0 < t.length && (n = new ds("onChange", "change", null, n, r), e.push({ event: n, listeners: t }));
}
var Gr = null, sa = null;
function qh(e) {
  Uf(e, 0);
}
function uo(e) {
  var t = ir(e);
  if (Bd(t))
    return e;
}
function Xh(e, t) {
  if (e === "change")
    return t;
}
var Cf = !1;
if (Ht) {
  var Uo;
  if (Ht) {
    var jo = "oninput" in document;
    if (!jo) {
      var wc = document.createElement("div");
      wc.setAttribute("oninput", "return;"), jo = typeof wc.oninput == "function";
    }
    Uo = jo;
  } else
    Uo = !1;
  Cf = Uo && (!document.documentMode || 9 < document.documentMode);
}
function _c() {
  Gr && (Gr.detachEvent("onpropertychange", Ef), sa = Gr = null);
}
function Ef(e) {
  if (e.propertyName === "value" && uo(sa)) {
    var t = [];
    Tf(t, sa, e, is(e)), af(qh, t);
  }
}
function Gh(e, t, n) {
  e === "focusin" ? (_c(), Gr = t, sa = n, Gr.attachEvent("onpropertychange", Ef)) : e === "focusout" && _c();
}
function Kh(e) {
  if (e === "selectionchange" || e === "keyup" || e === "keydown")
    return uo(sa);
}
function Jh(e, t) {
  if (e === "click")
    return uo(t);
}
function ev(e, t) {
  if (e === "input" || e === "change")
    return uo(t);
}
function tv(e, t) {
  return e === t && (e !== 0 || 1 / e === 1 / t) || e !== e && t !== t;
}
var St = typeof Object.is == "function" ? Object.is : tv;
function ca(e, t) {
  if (St(e, t))
    return !0;
  if (typeof e != "object" || e === null || typeof t != "object" || t === null)
    return !1;
  var n = Object.keys(e), r = Object.keys(t);
  if (n.length !== r.length)
    return !1;
  for (r = 0; r < n.length; r++) {
    var a = n[r];
    if (!fu.call(t, a) || !St(e[a], t[a]))
      return !1;
  }
  return !0;
}
function xc(e) {
  for (; e && e.firstChild; )
    e = e.firstChild;
  return e;
}
function kc(e, t) {
  var n = xc(e);
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
    n = xc(n);
  }
}
function Of(e, t) {
  return e && t ? e === t ? !0 : e && e.nodeType === 3 ? !1 : t && t.nodeType === 3 ? Of(e, t.parentNode) : "contains" in e ? e.contains(t) : e.compareDocumentPosition ? !!(e.compareDocumentPosition(t) & 16) : !1 : !1;
}
function Df() {
  for (var e = window, t = _i(); t instanceof e.HTMLIFrameElement; ) {
    try {
      var n = typeof t.contentWindow.location.href == "string";
    } catch {
      n = !1;
    }
    if (n)
      e = t.contentWindow;
    else
      break;
    t = _i(e.document);
  }
  return t;
}
function ms(e) {
  var t = e && e.nodeName && e.nodeName.toLowerCase();
  return t && (t === "input" && (e.type === "text" || e.type === "search" || e.type === "tel" || e.type === "url" || e.type === "password") || t === "textarea" || e.contentEditable === "true");
}
function nv(e) {
  var t = Df(), n = e.focusedElem, r = e.selectionRange;
  if (t !== n && n && n.ownerDocument && Of(n.ownerDocument.documentElement, n)) {
    if (r !== null && ms(n)) {
      if (t = r.start, e = r.end, e === void 0 && (e = t), "selectionStart" in n)
        n.selectionStart = t, n.selectionEnd = Math.min(e, n.value.length);
      else if (e = (t = n.ownerDocument || document) && t.defaultView || window, e.getSelection) {
        e = e.getSelection();
        var a = n.textContent.length, i = Math.min(r.start, a);
        r = r.end === void 0 ? i : Math.min(r.end, a), !e.extend && i > r && (a = r, r = i, i = a), a = kc(n, i);
        var o = kc(
          n,
          r
        );
        a && o && (e.rangeCount !== 1 || e.anchorNode !== a.node || e.anchorOffset !== a.offset || e.focusNode !== o.node || e.focusOffset !== o.offset) && (t = t.createRange(), t.setStart(a.node, a.offset), e.removeAllRanges(), i > r ? (e.addRange(t), e.extend(o.node, o.offset)) : (t.setEnd(o.node, o.offset), e.addRange(t)));
      }
    }
    for (t = [], e = n; e = e.parentNode; )
      e.nodeType === 1 && t.push({ element: e, left: e.scrollLeft, top: e.scrollTop });
    for (typeof n.focus == "function" && n.focus(), n = 0; n < t.length; n++)
      e = t[n], e.element.scrollLeft = e.left, e.element.scrollTop = e.top;
  }
}
var rv = Ht && "documentMode" in document && 11 >= document.documentMode, rr = null, Pu = null, Kr = null, Ru = !1;
function Sc(e, t, n) {
  var r = n.window === n ? n.document : n.nodeType === 9 ? n : n.ownerDocument;
  Ru || rr == null || rr !== _i(r) || (r = rr, "selectionStart" in r && ms(r) ? r = { start: r.selectionStart, end: r.selectionEnd } : (r = (r.ownerDocument && r.ownerDocument.defaultView || window).getSelection(), r = { anchorNode: r.anchorNode, anchorOffset: r.anchorOffset, focusNode: r.focusNode, focusOffset: r.focusOffset }), Kr && ca(Kr, r) || (Kr = r, r = Oi(Pu, "onSelect"), 0 < r.length && (t = new ds("onSelect", "select", null, t, n), e.push({ event: t, listeners: r }), t.target = rr)));
}
function Xa(e, t) {
  var n = {};
  return n[e.toLowerCase()] = t.toLowerCase(), n["Webkit" + e] = "webkit" + t, n["Moz" + e] = "moz" + t, n;
}
var ar = { animationend: Xa("Animation", "AnimationEnd"), animationiteration: Xa("Animation", "AnimationIteration"), animationstart: Xa("Animation", "AnimationStart"), transitionend: Xa("Transition", "TransitionEnd") }, zo = {}, Mf = {};
Ht && (Mf = document.createElement("div").style, "AnimationEvent" in window || (delete ar.animationend.animation, delete ar.animationiteration.animation, delete ar.animationstart.animation), "TransitionEvent" in window || delete ar.transitionend.transition);
function lo(e) {
  if (zo[e])
    return zo[e];
  if (!ar[e])
    return e;
  var t = ar[e], n;
  for (n in t)
    if (t.hasOwnProperty(n) && n in Mf)
      return zo[e] = t[n];
  return e;
}
var Nf = lo("animationend"), Pf = lo("animationiteration"), Rf = lo("animationstart"), Lf = lo("transitionend"), If = /* @__PURE__ */ new Map(), Tc = "abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");
function Sn(e, t) {
  If.set(e, t), Hn(t, [e]);
}
for (var $o = 0; $o < Tc.length; $o++) {
  var Wo = Tc[$o], av = Wo.toLowerCase(), iv = Wo[0].toUpperCase() + Wo.slice(1);
  Sn(av, "on" + iv);
}
Sn(Nf, "onAnimationEnd");
Sn(Pf, "onAnimationIteration");
Sn(Rf, "onAnimationStart");
Sn("dblclick", "onDoubleClick");
Sn("focusin", "onFocus");
Sn("focusout", "onBlur");
Sn(Lf, "onTransitionEnd");
wr("onMouseEnter", ["mouseout", "mouseover"]);
wr("onMouseLeave", ["mouseout", "mouseover"]);
wr("onPointerEnter", ["pointerout", "pointerover"]);
wr("onPointerLeave", ["pointerout", "pointerover"]);
Hn("onChange", "change click focusin focusout input keydown keyup selectionchange".split(" "));
Hn("onSelect", "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));
Hn("onBeforeInput", ["compositionend", "keypress", "textInput", "paste"]);
Hn("onCompositionEnd", "compositionend focusout keydown keypress keyup mousedown".split(" "));
Hn("onCompositionStart", "compositionstart focusout keydown keypress keyup mousedown".split(" "));
Hn("onCompositionUpdate", "compositionupdate focusout keydown keypress keyup mousedown".split(" "));
var Br = "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "), ov = new Set("cancel close invalid load scroll toggle".split(" ").concat(Br));
function Cc(e, t, n) {
  var r = e.type || "unknown-event";
  e.currentTarget = n, ah(r, t, void 0, e), e.currentTarget = null;
}
function Uf(e, t) {
  t = (t & 4) !== 0;
  for (var n = 0; n < e.length; n++) {
    var r = e[n], a = r.event;
    r = r.listeners;
    e: {
      var i = void 0;
      if (t)
        for (var o = r.length - 1; 0 <= o; o--) {
          var u = r[o], l = u.instance, s = u.currentTarget;
          if (u = u.listener, l !== i && a.isPropagationStopped())
            break e;
          Cc(a, u, s), i = l;
        }
      else
        for (o = 0; o < r.length; o++) {
          if (u = r[o], l = u.instance, s = u.currentTarget, u = u.listener, l !== i && a.isPropagationStopped())
            break e;
          Cc(a, u, s), i = l;
        }
    }
  }
  if (ki)
    throw e = Ou, ki = !1, Ou = null, e;
}
function K(e, t) {
  var n = t[zu];
  n === void 0 && (n = t[zu] = /* @__PURE__ */ new Set());
  var r = e + "__bubble";
  n.has(r) || (jf(t, e, 2, !1), n.add(r));
}
function Fo(e, t, n) {
  var r = 0;
  t && (r |= 4), jf(n, e, r, t);
}
var Ga = "_reactListening" + Math.random().toString(36).slice(2);
function da(e) {
  if (!e[Ga]) {
    e[Ga] = !0, bd.forEach(function(n) {
      n !== "selectionchange" && (ov.has(n) || Fo(n, !1, e), Fo(n, !0, e));
    });
    var t = e.nodeType === 9 ? e : e.ownerDocument;
    t === null || t[Ga] || (t[Ga] = !0, Fo("selectionchange", !1, t));
  }
}
function jf(e, t, n, r) {
  switch (wf(t)) {
    case 1:
      var a = _h;
      break;
    case 4:
      a = xh;
      break;
    default:
      a = ss;
  }
  n = a.bind(null, t, n, e), a = void 0, !Eu || t !== "touchstart" && t !== "touchmove" && t !== "wheel" || (a = !0), r ? a !== void 0 ? e.addEventListener(t, n, { capture: !0, passive: a }) : e.addEventListener(t, n, !0) : a !== void 0 ? e.addEventListener(t, n, { passive: a }) : e.addEventListener(t, n, !1);
}
function Ao(e, t, n, r, a) {
  var i = r;
  if (!(t & 1) && !(t & 2) && r !== null)
    e:
      for (; ; ) {
        if (r === null)
          return;
        var o = r.tag;
        if (o === 3 || o === 4) {
          var u = r.stateNode.containerInfo;
          if (u === a || u.nodeType === 8 && u.parentNode === a)
            break;
          if (o === 4)
            for (o = r.return; o !== null; ) {
              var l = o.tag;
              if ((l === 3 || l === 4) && (l = o.stateNode.containerInfo, l === a || l.nodeType === 8 && l.parentNode === a))
                return;
              o = o.return;
            }
          for (; u !== null; ) {
            if (o = Pn(u), o === null)
              return;
            if (l = o.tag, l === 5 || l === 6) {
              r = i = o;
              continue e;
            }
            u = u.parentNode;
          }
        }
        r = r.return;
      }
  af(function() {
    var s = i, p = is(n), h = [];
    e: {
      var v = If.get(e);
      if (v !== void 0) {
        var y = ds, w = e;
        switch (e) {
          case "keypress":
            if (di(n) === 0)
              break e;
          case "keydown":
          case "keyup":
            y = jh;
            break;
          case "focusin":
            w = "focus", y = Io;
            break;
          case "focusout":
            w = "blur", y = Io;
            break;
          case "beforeblur":
          case "afterblur":
            y = Io;
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
            y = pc;
            break;
          case "drag":
          case "dragend":
          case "dragenter":
          case "dragexit":
          case "dragleave":
          case "dragover":
          case "dragstart":
          case "drop":
            y = Th;
            break;
          case "touchcancel":
          case "touchend":
          case "touchmove":
          case "touchstart":
            y = Wh;
            break;
          case Nf:
          case Pf:
          case Rf:
            y = Oh;
            break;
          case Lf:
            y = Ah;
            break;
          case "scroll":
            y = kh;
            break;
          case "wheel":
            y = Yh;
            break;
          case "copy":
          case "cut":
          case "paste":
            y = Mh;
            break;
          case "gotpointercapture":
          case "lostpointercapture":
          case "pointercancel":
          case "pointerdown":
          case "pointermove":
          case "pointerout":
          case "pointerover":
          case "pointerup":
            y = hc;
        }
        var k = (t & 4) !== 0, x = !k && e === "scroll", c = k ? v !== null ? v + "Capture" : null : v;
        k = [];
        for (var d = s, f; d !== null; ) {
          f = d;
          var m = f.stateNode;
          if (f.tag === 5 && m !== null && (f = m, c !== null && (m = ia(d, c), m != null && k.push(fa(d, m, f)))), x)
            break;
          d = d.return;
        }
        0 < k.length && (v = new y(v, w, null, n, p), h.push({ event: v, listeners: k }));
      }
    }
    if (!(t & 7)) {
      e: {
        if (v = e === "mouseover" || e === "pointerover", y = e === "mouseout" || e === "pointerout", v && n !== Tu && (w = n.relatedTarget || n.fromElement) && (Pn(w) || w[Bt]))
          break e;
        if ((y || v) && (v = p.window === p ? p : (v = p.ownerDocument) ? v.defaultView || v.parentWindow : window, y ? (w = n.relatedTarget || n.toElement, y = s, w = w ? Pn(w) : null, w !== null && (x = Bn(w), w !== x || w.tag !== 5 && w.tag !== 6) && (w = null)) : (y = null, w = s), y !== w)) {
          if (k = pc, m = "onMouseLeave", c = "onMouseEnter", d = "mouse", (e === "pointerout" || e === "pointerover") && (k = hc, m = "onPointerLeave", c = "onPointerEnter", d = "pointer"), x = y == null ? v : ir(y), f = w == null ? v : ir(w), v = new k(m, d + "leave", y, n, p), v.target = x, v.relatedTarget = f, m = null, Pn(p) === s && (k = new k(c, d + "enter", w, n, p), k.target = f, k.relatedTarget = x, m = k), x = m, y && w)
            t: {
              for (k = y, c = w, d = 0, f = k; f; f = Xn(f))
                d++;
              for (f = 0, m = c; m; m = Xn(m))
                f++;
              for (; 0 < d - f; )
                k = Xn(k), d--;
              for (; 0 < f - d; )
                c = Xn(c), f--;
              for (; d--; ) {
                if (k === c || c !== null && k === c.alternate)
                  break t;
                k = Xn(k), c = Xn(c);
              }
              k = null;
            }
          else
            k = null;
          y !== null && Ec(h, v, y, k, !1), w !== null && x !== null && Ec(h, x, w, k, !0);
        }
      }
      e: {
        if (v = s ? ir(s) : window, y = v.nodeName && v.nodeName.toLowerCase(), y === "select" || y === "input" && v.type === "file")
          var g = Xh;
        else if (yc(v))
          if (Cf)
            g = ev;
          else {
            g = Kh;
            var _ = Gh;
          }
        else
          (y = v.nodeName) && y.toLowerCase() === "input" && (v.type === "checkbox" || v.type === "radio") && (g = Jh);
        if (g && (g = g(e, s))) {
          Tf(h, g, n, p);
          break e;
        }
        _ && _(e, v, s), e === "focusout" && (_ = v._wrapperState) && _.controlled && v.type === "number" && wu(v, "number", v.value);
      }
      switch (_ = s ? ir(s) : window, e) {
        case "focusin":
          (yc(_) || _.contentEditable === "true") && (rr = _, Pu = s, Kr = null);
          break;
        case "focusout":
          Kr = Pu = rr = null;
          break;
        case "mousedown":
          Ru = !0;
          break;
        case "contextmenu":
        case "mouseup":
        case "dragend":
          Ru = !1, Sc(h, n, p);
          break;
        case "selectionchange":
          if (rv)
            break;
        case "keydown":
        case "keyup":
          Sc(h, n, p);
      }
      var S;
      if (ps)
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
        nr ? kf(e, n) && (E = "onCompositionEnd") : e === "keydown" && n.keyCode === 229 && (E = "onCompositionStart");
      E && (xf && n.locale !== "ko" && (nr || E !== "onCompositionStart" ? E === "onCompositionEnd" && nr && (S = _f()) : (on = p, cs = "value" in on ? on.value : on.textContent, nr = !0)), _ = Oi(s, E), 0 < _.length && (E = new mc(E, e, null, n, p), h.push({ event: E, listeners: _ }), S ? E.data = S : (S = Sf(n), S !== null && (E.data = S)))), (S = Zh ? Hh(e, n) : Bh(e, n)) && (s = Oi(s, "onBeforeInput"), 0 < s.length && (p = new mc("onBeforeInput", "beforeinput", null, n, p), h.push({ event: p, listeners: s }), p.data = S));
    }
    Uf(h, t);
  });
}
function fa(e, t, n) {
  return { instance: e, listener: t, currentTarget: n };
}
function Oi(e, t) {
  for (var n = t + "Capture", r = []; e !== null; ) {
    var a = e, i = a.stateNode;
    a.tag === 5 && i !== null && (a = i, i = ia(e, n), i != null && r.unshift(fa(e, i, a)), i = ia(e, t), i != null && r.push(fa(e, i, a))), e = e.return;
  }
  return r;
}
function Xn(e) {
  if (e === null)
    return null;
  do
    e = e.return;
  while (e && e.tag !== 5);
  return e || null;
}
function Ec(e, t, n, r, a) {
  for (var i = t._reactName, o = []; n !== null && n !== r; ) {
    var u = n, l = u.alternate, s = u.stateNode;
    if (l !== null && l === r)
      break;
    u.tag === 5 && s !== null && (u = s, a ? (l = ia(n, i), l != null && o.unshift(fa(n, l, u))) : a || (l = ia(n, i), l != null && o.push(fa(n, l, u)))), n = n.return;
  }
  o.length !== 0 && e.push({ event: t, listeners: o });
}
var uv = /\r\n?/g, lv = /\u0000|\uFFFD/g;
function Oc(e) {
  return (typeof e == "string" ? e : "" + e).replace(uv, `
`).replace(lv, "");
}
function Ka(e, t, n) {
  if (t = Oc(t), Oc(e) !== t && n)
    throw Error(T(425));
}
function Di() {
}
var Lu = null, Iu = null;
function Uu(e, t) {
  return e === "textarea" || e === "noscript" || typeof t.children == "string" || typeof t.children == "number" || typeof t.dangerouslySetInnerHTML == "object" && t.dangerouslySetInnerHTML !== null && t.dangerouslySetInnerHTML.__html != null;
}
var ju = typeof setTimeout == "function" ? setTimeout : void 0, sv = typeof clearTimeout == "function" ? clearTimeout : void 0, Dc = typeof Promise == "function" ? Promise : void 0, cv = typeof queueMicrotask == "function" ? queueMicrotask : typeof Dc < "u" ? function(e) {
  return Dc.resolve(null).then(e).catch(dv);
} : ju;
function dv(e) {
  setTimeout(function() {
    throw e;
  });
}
function bo(e, t) {
  var n = t, r = 0;
  do {
    var a = n.nextSibling;
    if (e.removeChild(n), a && a.nodeType === 8)
      if (n = a.data, n === "/$") {
        if (r === 0) {
          e.removeChild(a), la(t);
          return;
        }
        r--;
      } else
        n !== "$" && n !== "$?" && n !== "$!" || r++;
    n = a;
  } while (n);
  la(t);
}
function fn(e) {
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
function Mc(e) {
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
var Pr = Math.random().toString(36).slice(2), Ot = "__reactFiber$" + Pr, pa = "__reactProps$" + Pr, Bt = "__reactContainer$" + Pr, zu = "__reactEvents$" + Pr, fv = "__reactListeners$" + Pr, pv = "__reactHandles$" + Pr;
function Pn(e) {
  var t = e[Ot];
  if (t)
    return t;
  for (var n = e.parentNode; n; ) {
    if (t = n[Bt] || n[Ot]) {
      if (n = t.alternate, t.child !== null || n !== null && n.child !== null)
        for (e = Mc(e); e !== null; ) {
          if (n = e[Ot])
            return n;
          e = Mc(e);
        }
      return t;
    }
    e = n, n = e.parentNode;
  }
  return null;
}
function $a(e) {
  return e = e[Ot] || e[Bt], !e || e.tag !== 5 && e.tag !== 6 && e.tag !== 13 && e.tag !== 3 ? null : e;
}
function ir(e) {
  if (e.tag === 5 || e.tag === 6)
    return e.stateNode;
  throw Error(T(33));
}
function so(e) {
  return e[pa] || null;
}
var $u = [], or = -1;
function Tn(e) {
  return { current: e };
}
function J(e) {
  0 > or || (e.current = $u[or], $u[or] = null, or--);
}
function G(e, t) {
  or++, $u[or] = e.current, e.current = t;
}
var yn = {}, Pe = Tn(yn), Qe = Tn(!1), zn = yn;
function _r(e, t) {
  var n = e.type.contextTypes;
  if (!n)
    return yn;
  var r = e.stateNode;
  if (r && r.__reactInternalMemoizedUnmaskedChildContext === t)
    return r.__reactInternalMemoizedMaskedChildContext;
  var a = {}, i;
  for (i in n)
    a[i] = t[i];
  return r && (e = e.stateNode, e.__reactInternalMemoizedUnmaskedChildContext = t, e.__reactInternalMemoizedMaskedChildContext = a), a;
}
function qe(e) {
  return e = e.childContextTypes, e != null;
}
function Mi() {
  J(Qe), J(Pe);
}
function Nc(e, t, n) {
  if (Pe.current !== yn)
    throw Error(T(168));
  G(Pe, t), G(Qe, n);
}
function zf(e, t, n) {
  var r = e.stateNode;
  if (t = t.childContextTypes, typeof r.getChildContext != "function")
    return n;
  r = r.getChildContext();
  for (var a in r)
    if (!(a in t))
      throw Error(T(108, Gm(e) || "Unknown", a));
  return se({}, n, r);
}
function Ni(e) {
  return e = (e = e.stateNode) && e.__reactInternalMemoizedMergedChildContext || yn, zn = Pe.current, G(Pe, e), G(Qe, Qe.current), !0;
}
function Pc(e, t, n) {
  var r = e.stateNode;
  if (!r)
    throw Error(T(169));
  n ? (e = zf(e, t, zn), r.__reactInternalMemoizedMergedChildContext = e, J(Qe), J(Pe), G(Pe, e)) : J(Qe), G(Qe, n);
}
var Wt = null, co = !1, Yo = !1;
function $f(e) {
  Wt === null ? Wt = [e] : Wt.push(e);
}
function mv(e) {
  co = !0, $f(e);
}
function Cn() {
  if (!Yo && Wt !== null) {
    Yo = !0;
    var e = 0, t = Q;
    try {
      var n = Wt;
      for (Q = 1; e < n.length; e++) {
        var r = n[e];
        do
          r = r(!0);
        while (r !== null);
      }
      Wt = null, co = !1;
    } catch (a) {
      throw Wt !== null && (Wt = Wt.slice(e + 1)), sf(os, Cn), a;
    } finally {
      Q = t, Yo = !1;
    }
  }
  return null;
}
var ur = [], lr = 0, Pi = null, Ri = 0, lt = [], st = 0, $n = null, At = 1, bt = "";
function Dn(e, t) {
  ur[lr++] = Ri, ur[lr++] = Pi, Pi = e, Ri = t;
}
function Wf(e, t, n) {
  lt[st++] = At, lt[st++] = bt, lt[st++] = $n, $n = e;
  var r = At;
  e = bt;
  var a = 32 - wt(r) - 1;
  r &= ~(1 << a), n += 1;
  var i = 32 - wt(t) + a;
  if (30 < i) {
    var o = a - a % 5;
    i = (r & (1 << o) - 1).toString(32), r >>= o, a -= o, At = 1 << 32 - wt(t) + a | n << a | r, bt = i + e;
  } else
    At = 1 << i | n << a | r, bt = e;
}
function hs(e) {
  e.return !== null && (Dn(e, 1), Wf(e, 1, 0));
}
function vs(e) {
  for (; e === Pi; )
    Pi = ur[--lr], ur[lr] = null, Ri = ur[--lr], ur[lr] = null;
  for (; e === $n; )
    $n = lt[--st], lt[st] = null, bt = lt[--st], lt[st] = null, At = lt[--st], lt[st] = null;
}
var tt = null, et = null, re = !1, gt = null;
function Ff(e, t) {
  var n = ct(5, null, null, 0);
  n.elementType = "DELETED", n.stateNode = t, n.return = e, t = e.deletions, t === null ? (e.deletions = [n], e.flags |= 16) : t.push(n);
}
function Rc(e, t) {
  switch (e.tag) {
    case 5:
      var n = e.type;
      return t = t.nodeType !== 1 || n.toLowerCase() !== t.nodeName.toLowerCase() ? null : t, t !== null ? (e.stateNode = t, tt = e, et = fn(t.firstChild), !0) : !1;
    case 6:
      return t = e.pendingProps === "" || t.nodeType !== 3 ? null : t, t !== null ? (e.stateNode = t, tt = e, et = null, !0) : !1;
    case 13:
      return t = t.nodeType !== 8 ? null : t, t !== null ? (n = $n !== null ? { id: At, overflow: bt } : null, e.memoizedState = { dehydrated: t, treeContext: n, retryLane: 1073741824 }, n = ct(18, null, null, 0), n.stateNode = t, n.return = e, e.child = n, tt = e, et = null, !0) : !1;
    default:
      return !1;
  }
}
function Wu(e) {
  return (e.mode & 1) !== 0 && (e.flags & 128) === 0;
}
function Fu(e) {
  if (re) {
    var t = et;
    if (t) {
      var n = t;
      if (!Rc(e, t)) {
        if (Wu(e))
          throw Error(T(418));
        t = fn(n.nextSibling);
        var r = tt;
        t && Rc(e, t) ? Ff(r, n) : (e.flags = e.flags & -4097 | 2, re = !1, tt = e);
      }
    } else {
      if (Wu(e))
        throw Error(T(418));
      e.flags = e.flags & -4097 | 2, re = !1, tt = e;
    }
  }
}
function Lc(e) {
  for (e = e.return; e !== null && e.tag !== 5 && e.tag !== 3 && e.tag !== 13; )
    e = e.return;
  tt = e;
}
function Ja(e) {
  if (e !== tt)
    return !1;
  if (!re)
    return Lc(e), re = !0, !1;
  var t;
  if ((t = e.tag !== 3) && !(t = e.tag !== 5) && (t = e.type, t = t !== "head" && t !== "body" && !Uu(e.type, e.memoizedProps)), t && (t = et)) {
    if (Wu(e))
      throw Af(), Error(T(418));
    for (; t; )
      Ff(e, t), t = fn(t.nextSibling);
  }
  if (Lc(e), e.tag === 13) {
    if (e = e.memoizedState, e = e !== null ? e.dehydrated : null, !e)
      throw Error(T(317));
    e: {
      for (e = e.nextSibling, t = 0; e; ) {
        if (e.nodeType === 8) {
          var n = e.data;
          if (n === "/$") {
            if (t === 0) {
              et = fn(e.nextSibling);
              break e;
            }
            t--;
          } else
            n !== "$" && n !== "$!" && n !== "$?" || t++;
        }
        e = e.nextSibling;
      }
      et = null;
    }
  } else
    et = tt ? fn(e.stateNode.nextSibling) : null;
  return !0;
}
function Af() {
  for (var e = et; e; )
    e = fn(e.nextSibling);
}
function xr() {
  et = tt = null, re = !1;
}
function gs(e) {
  gt === null ? gt = [e] : gt.push(e);
}
var hv = Gt.ReactCurrentBatchConfig;
function ht(e, t) {
  if (e && e.defaultProps) {
    t = se({}, t), e = e.defaultProps;
    for (var n in e)
      t[n] === void 0 && (t[n] = e[n]);
    return t;
  }
  return t;
}
var Li = Tn(null), Ii = null, sr = null, ys = null;
function ws() {
  ys = sr = Ii = null;
}
function _s(e) {
  var t = Li.current;
  J(Li), e._currentValue = t;
}
function Au(e, t, n) {
  for (; e !== null; ) {
    var r = e.alternate;
    if ((e.childLanes & t) !== t ? (e.childLanes |= t, r !== null && (r.childLanes |= t)) : r !== null && (r.childLanes & t) !== t && (r.childLanes |= t), e === n)
      break;
    e = e.return;
  }
}
function vr(e, t) {
  Ii = e, ys = sr = null, e = e.dependencies, e !== null && e.firstContext !== null && (e.lanes & t && (Be = !0), e.firstContext = null);
}
function ft(e) {
  var t = e._currentValue;
  if (ys !== e)
    if (e = { context: e, memoizedValue: t, next: null }, sr === null) {
      if (Ii === null)
        throw Error(T(308));
      sr = e, Ii.dependencies = { lanes: 0, firstContext: e };
    } else
      sr = sr.next = e;
  return t;
}
var Rn = null;
function xs(e) {
  Rn === null ? Rn = [e] : Rn.push(e);
}
function bf(e, t, n, r) {
  var a = t.interleaved;
  return a === null ? (n.next = n, xs(t)) : (n.next = a.next, a.next = n), t.interleaved = n, Qt(e, r);
}
function Qt(e, t) {
  e.lanes |= t;
  var n = e.alternate;
  for (n !== null && (n.lanes |= t), n = e, e = e.return; e !== null; )
    e.childLanes |= t, n = e.alternate, n !== null && (n.childLanes |= t), n = e, e = e.return;
  return n.tag === 3 ? n.stateNode : null;
}
var tn = !1;
function ks(e) {
  e.updateQueue = { baseState: e.memoizedState, firstBaseUpdate: null, lastBaseUpdate: null, shared: { pending: null, interleaved: null, lanes: 0 }, effects: null };
}
function Yf(e, t) {
  e = e.updateQueue, t.updateQueue === e && (t.updateQueue = { baseState: e.baseState, firstBaseUpdate: e.firstBaseUpdate, lastBaseUpdate: e.lastBaseUpdate, shared: e.shared, effects: e.effects });
}
function Vt(e, t) {
  return { eventTime: e, lane: t, tag: 0, payload: null, callback: null, next: null };
}
function pn(e, t, n) {
  var r = e.updateQueue;
  if (r === null)
    return null;
  if (r = r.shared, A & 2) {
    var a = r.pending;
    return a === null ? t.next = t : (t.next = a.next, a.next = t), r.pending = t, Qt(e, n);
  }
  return a = r.interleaved, a === null ? (t.next = t, xs(r)) : (t.next = a.next, a.next = t), r.interleaved = t, Qt(e, n);
}
function fi(e, t, n) {
  if (t = t.updateQueue, t !== null && (t = t.shared, (n & 4194240) !== 0)) {
    var r = t.lanes;
    r &= e.pendingLanes, n |= r, t.lanes = n, us(e, n);
  }
}
function Ic(e, t) {
  var n = e.updateQueue, r = e.alternate;
  if (r !== null && (r = r.updateQueue, n === r)) {
    var a = null, i = null;
    if (n = n.firstBaseUpdate, n !== null) {
      do {
        var o = { eventTime: n.eventTime, lane: n.lane, tag: n.tag, payload: n.payload, callback: n.callback, next: null };
        i === null ? a = i = o : i = i.next = o, n = n.next;
      } while (n !== null);
      i === null ? a = i = t : i = i.next = t;
    } else
      a = i = t;
    n = { baseState: r.baseState, firstBaseUpdate: a, lastBaseUpdate: i, shared: r.shared, effects: r.effects }, e.updateQueue = n;
    return;
  }
  e = n.lastBaseUpdate, e === null ? n.firstBaseUpdate = t : e.next = t, n.lastBaseUpdate = t;
}
function Ui(e, t, n, r) {
  var a = e.updateQueue;
  tn = !1;
  var i = a.firstBaseUpdate, o = a.lastBaseUpdate, u = a.shared.pending;
  if (u !== null) {
    a.shared.pending = null;
    var l = u, s = l.next;
    l.next = null, o === null ? i = s : o.next = s, o = l;
    var p = e.alternate;
    p !== null && (p = p.updateQueue, u = p.lastBaseUpdate, u !== o && (u === null ? p.firstBaseUpdate = s : u.next = s, p.lastBaseUpdate = l));
  }
  if (i !== null) {
    var h = a.baseState;
    o = 0, p = s = l = null, u = i;
    do {
      var v = u.lane, y = u.eventTime;
      if ((r & v) === v) {
        p !== null && (p = p.next = {
          eventTime: y,
          lane: 0,
          tag: u.tag,
          payload: u.payload,
          callback: u.callback,
          next: null
        });
        e: {
          var w = e, k = u;
          switch (v = t, y = n, k.tag) {
            case 1:
              if (w = k.payload, typeof w == "function") {
                h = w.call(y, h, v);
                break e;
              }
              h = w;
              break e;
            case 3:
              w.flags = w.flags & -65537 | 128;
            case 0:
              if (w = k.payload, v = typeof w == "function" ? w.call(y, h, v) : w, v == null)
                break e;
              h = se({}, h, v);
              break e;
            case 2:
              tn = !0;
          }
        }
        u.callback !== null && u.lane !== 0 && (e.flags |= 64, v = a.effects, v === null ? a.effects = [u] : v.push(u));
      } else
        y = { eventTime: y, lane: v, tag: u.tag, payload: u.payload, callback: u.callback, next: null }, p === null ? (s = p = y, l = h) : p = p.next = y, o |= v;
      if (u = u.next, u === null) {
        if (u = a.shared.pending, u === null)
          break;
        v = u, u = v.next, v.next = null, a.lastBaseUpdate = v, a.shared.pending = null;
      }
    } while (!0);
    if (p === null && (l = h), a.baseState = l, a.firstBaseUpdate = s, a.lastBaseUpdate = p, t = a.shared.interleaved, t !== null) {
      a = t;
      do
        o |= a.lane, a = a.next;
      while (a !== t);
    } else
      i === null && (a.shared.lanes = 0);
    Fn |= o, e.lanes = o, e.memoizedState = h;
  }
}
function Uc(e, t, n) {
  if (e = t.effects, t.effects = null, e !== null)
    for (t = 0; t < e.length; t++) {
      var r = e[t], a = r.callback;
      if (a !== null) {
        if (r.callback = null, r = n, typeof a != "function")
          throw Error(T(191, a));
        a.call(r);
      }
    }
}
var Vf = new Ad.Component().refs;
function bu(e, t, n, r) {
  t = e.memoizedState, n = n(r, t), n = n == null ? t : se({}, t, n), e.memoizedState = n, e.lanes === 0 && (e.updateQueue.baseState = n);
}
var fo = { isMounted: function(e) {
  return (e = e._reactInternals) ? Bn(e) === e : !1;
}, enqueueSetState: function(e, t, n) {
  e = e._reactInternals;
  var r = $e(), a = hn(e), i = Vt(r, a);
  i.payload = t, n != null && (i.callback = n), t = pn(e, i, a), t !== null && (_t(t, e, a, r), fi(t, e, a));
}, enqueueReplaceState: function(e, t, n) {
  e = e._reactInternals;
  var r = $e(), a = hn(e), i = Vt(r, a);
  i.tag = 1, i.payload = t, n != null && (i.callback = n), t = pn(e, i, a), t !== null && (_t(t, e, a, r), fi(t, e, a));
}, enqueueForceUpdate: function(e, t) {
  e = e._reactInternals;
  var n = $e(), r = hn(e), a = Vt(n, r);
  a.tag = 2, t != null && (a.callback = t), t = pn(e, a, r), t !== null && (_t(t, e, r, n), fi(t, e, r));
} };
function jc(e, t, n, r, a, i, o) {
  return e = e.stateNode, typeof e.shouldComponentUpdate == "function" ? e.shouldComponentUpdate(r, i, o) : t.prototype && t.prototype.isPureReactComponent ? !ca(n, r) || !ca(a, i) : !0;
}
function Zf(e, t, n) {
  var r = !1, a = yn, i = t.contextType;
  return typeof i == "object" && i !== null ? i = ft(i) : (a = qe(t) ? zn : Pe.current, r = t.contextTypes, i = (r = r != null) ? _r(e, a) : yn), t = new t(n, i), e.memoizedState = t.state !== null && t.state !== void 0 ? t.state : null, t.updater = fo, e.stateNode = t, t._reactInternals = e, r && (e = e.stateNode, e.__reactInternalMemoizedUnmaskedChildContext = a, e.__reactInternalMemoizedMaskedChildContext = i), t;
}
function zc(e, t, n, r) {
  e = t.state, typeof t.componentWillReceiveProps == "function" && t.componentWillReceiveProps(n, r), typeof t.UNSAFE_componentWillReceiveProps == "function" && t.UNSAFE_componentWillReceiveProps(n, r), t.state !== e && fo.enqueueReplaceState(t, t.state, null);
}
function Yu(e, t, n, r) {
  var a = e.stateNode;
  a.props = n, a.state = e.memoizedState, a.refs = Vf, ks(e);
  var i = t.contextType;
  typeof i == "object" && i !== null ? a.context = ft(i) : (i = qe(t) ? zn : Pe.current, a.context = _r(e, i)), a.state = e.memoizedState, i = t.getDerivedStateFromProps, typeof i == "function" && (bu(e, t, i, n), a.state = e.memoizedState), typeof t.getDerivedStateFromProps == "function" || typeof a.getSnapshotBeforeUpdate == "function" || typeof a.UNSAFE_componentWillMount != "function" && typeof a.componentWillMount != "function" || (t = a.state, typeof a.componentWillMount == "function" && a.componentWillMount(), typeof a.UNSAFE_componentWillMount == "function" && a.UNSAFE_componentWillMount(), t !== a.state && fo.enqueueReplaceState(a, a.state, null), Ui(e, n, a, r), a.state = e.memoizedState), typeof a.componentDidMount == "function" && (e.flags |= 4194308);
}
function $r(e, t, n) {
  if (e = n.ref, e !== null && typeof e != "function" && typeof e != "object") {
    if (n._owner) {
      if (n = n._owner, n) {
        if (n.tag !== 1)
          throw Error(T(309));
        var r = n.stateNode;
      }
      if (!r)
        throw Error(T(147, e));
      var a = r, i = "" + e;
      return t !== null && t.ref !== null && typeof t.ref == "function" && t.ref._stringRef === i ? t.ref : (t = function(o) {
        var u = a.refs;
        u === Vf && (u = a.refs = {}), o === null ? delete u[i] : u[i] = o;
      }, t._stringRef = i, t);
    }
    if (typeof e != "string")
      throw Error(T(284));
    if (!n._owner)
      throw Error(T(290, e));
  }
  return e;
}
function ei(e, t) {
  throw e = Object.prototype.toString.call(t), Error(T(31, e === "[object Object]" ? "object with keys {" + Object.keys(t).join(", ") + "}" : e));
}
function $c(e) {
  var t = e._init;
  return t(e._payload);
}
function Hf(e) {
  function t(c, d) {
    if (e) {
      var f = c.deletions;
      f === null ? (c.deletions = [d], c.flags |= 16) : f.push(d);
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
  function a(c, d) {
    return c = vn(c, d), c.index = 0, c.sibling = null, c;
  }
  function i(c, d, f) {
    return c.index = f, e ? (f = c.alternate, f !== null ? (f = f.index, f < d ? (c.flags |= 2, d) : f) : (c.flags |= 2, d)) : (c.flags |= 1048576, d);
  }
  function o(c) {
    return e && c.alternate === null && (c.flags |= 2), c;
  }
  function u(c, d, f, m) {
    return d === null || d.tag !== 6 ? (d = Xo(f, c.mode, m), d.return = c, d) : (d = a(d, f), d.return = c, d);
  }
  function l(c, d, f, m) {
    var g = f.type;
    return g === tr ? p(c, d, f.props.children, m, f.key) : d !== null && (d.elementType === g || typeof g == "object" && g !== null && g.$$typeof === en && $c(g) === d.type) ? (m = a(d, f.props), m.ref = $r(c, d, f), m.return = c, m) : (m = yi(f.type, f.key, f.props, null, c.mode, m), m.ref = $r(c, d, f), m.return = c, m);
  }
  function s(c, d, f, m) {
    return d === null || d.tag !== 4 || d.stateNode.containerInfo !== f.containerInfo || d.stateNode.implementation !== f.implementation ? (d = Go(f, c.mode, m), d.return = c, d) : (d = a(d, f.children || []), d.return = c, d);
  }
  function p(c, d, f, m, g) {
    return d === null || d.tag !== 7 ? (d = Un(f, c.mode, m, g), d.return = c, d) : (d = a(d, f), d.return = c, d);
  }
  function h(c, d, f) {
    if (typeof d == "string" && d !== "" || typeof d == "number")
      return d = Xo("" + d, c.mode, f), d.return = c, d;
    if (typeof d == "object" && d !== null) {
      switch (d.$$typeof) {
        case Ya:
          return f = yi(d.type, d.key, d.props, null, c.mode, f), f.ref = $r(c, null, d), f.return = c, f;
        case er:
          return d = Go(d, c.mode, f), d.return = c, d;
        case en:
          var m = d._init;
          return h(c, m(d._payload), f);
      }
      if (Zr(d) || Lr(d))
        return d = Un(d, c.mode, f, null), d.return = c, d;
      ei(c, d);
    }
    return null;
  }
  function v(c, d, f, m) {
    var g = d !== null ? d.key : null;
    if (typeof f == "string" && f !== "" || typeof f == "number")
      return g !== null ? null : u(c, d, "" + f, m);
    if (typeof f == "object" && f !== null) {
      switch (f.$$typeof) {
        case Ya:
          return f.key === g ? l(c, d, f, m) : null;
        case er:
          return f.key === g ? s(c, d, f, m) : null;
        case en:
          return g = f._init, v(
            c,
            d,
            g(f._payload),
            m
          );
      }
      if (Zr(f) || Lr(f))
        return g !== null ? null : p(c, d, f, m, null);
      ei(c, f);
    }
    return null;
  }
  function y(c, d, f, m, g) {
    if (typeof m == "string" && m !== "" || typeof m == "number")
      return c = c.get(f) || null, u(d, c, "" + m, g);
    if (typeof m == "object" && m !== null) {
      switch (m.$$typeof) {
        case Ya:
          return c = c.get(m.key === null ? f : m.key) || null, l(d, c, m, g);
        case er:
          return c = c.get(m.key === null ? f : m.key) || null, s(d, c, m, g);
        case en:
          var _ = m._init;
          return y(c, d, f, _(m._payload), g);
      }
      if (Zr(m) || Lr(m))
        return c = c.get(f) || null, p(d, c, m, g, null);
      ei(d, m);
    }
    return null;
  }
  function w(c, d, f, m) {
    for (var g = null, _ = null, S = d, E = d = 0, $ = null; S !== null && E < f.length; E++) {
      S.index > E ? ($ = S, S = null) : $ = S.sibling;
      var P = v(c, S, f[E], m);
      if (P === null) {
        S === null && (S = $);
        break;
      }
      e && S && P.alternate === null && t(c, S), d = i(P, d, E), _ === null ? g = P : _.sibling = P, _ = P, S = $;
    }
    if (E === f.length)
      return n(c, S), re && Dn(c, E), g;
    if (S === null) {
      for (; E < f.length; E++)
        S = h(c, f[E], m), S !== null && (d = i(S, d, E), _ === null ? g = S : _.sibling = S, _ = S);
      return re && Dn(c, E), g;
    }
    for (S = r(c, S); E < f.length; E++)
      $ = y(S, c, E, f[E], m), $ !== null && (e && $.alternate !== null && S.delete($.key === null ? E : $.key), d = i($, d, E), _ === null ? g = $ : _.sibling = $, _ = $);
    return e && S.forEach(function(ee) {
      return t(c, ee);
    }), re && Dn(c, E), g;
  }
  function k(c, d, f, m) {
    var g = Lr(f);
    if (typeof g != "function")
      throw Error(T(150));
    if (f = g.call(f), f == null)
      throw Error(T(151));
    for (var _ = g = null, S = d, E = d = 0, $ = null, P = f.next(); S !== null && !P.done; E++, P = f.next()) {
      S.index > E ? ($ = S, S = null) : $ = S.sibling;
      var ee = v(c, S, P.value, m);
      if (ee === null) {
        S === null && (S = $);
        break;
      }
      e && S && ee.alternate === null && t(c, S), d = i(ee, d, E), _ === null ? g = ee : _.sibling = ee, _ = ee, S = $;
    }
    if (P.done)
      return n(
        c,
        S
      ), re && Dn(c, E), g;
    if (S === null) {
      for (; !P.done; E++, P = f.next())
        P = h(c, P.value, m), P !== null && (d = i(P, d, E), _ === null ? g = P : _.sibling = P, _ = P);
      return re && Dn(c, E), g;
    }
    for (S = r(c, S); !P.done; E++, P = f.next())
      P = y(S, c, E, P.value, m), P !== null && (e && P.alternate !== null && S.delete(P.key === null ? E : P.key), d = i(P, d, E), _ === null ? g = P : _.sibling = P, _ = P);
    return e && S.forEach(function(Oe) {
      return t(c, Oe);
    }), re && Dn(c, E), g;
  }
  function x(c, d, f, m) {
    if (typeof f == "object" && f !== null && f.type === tr && f.key === null && (f = f.props.children), typeof f == "object" && f !== null) {
      switch (f.$$typeof) {
        case Ya:
          e: {
            for (var g = f.key, _ = d; _ !== null; ) {
              if (_.key === g) {
                if (g = f.type, g === tr) {
                  if (_.tag === 7) {
                    n(c, _.sibling), d = a(_, f.props.children), d.return = c, c = d;
                    break e;
                  }
                } else if (_.elementType === g || typeof g == "object" && g !== null && g.$$typeof === en && $c(g) === _.type) {
                  n(c, _.sibling), d = a(_, f.props), d.ref = $r(c, _, f), d.return = c, c = d;
                  break e;
                }
                n(c, _);
                break;
              } else
                t(c, _);
              _ = _.sibling;
            }
            f.type === tr ? (d = Un(f.props.children, c.mode, m, f.key), d.return = c, c = d) : (m = yi(f.type, f.key, f.props, null, c.mode, m), m.ref = $r(c, d, f), m.return = c, c = m);
          }
          return o(c);
        case er:
          e: {
            for (_ = f.key; d !== null; ) {
              if (d.key === _)
                if (d.tag === 4 && d.stateNode.containerInfo === f.containerInfo && d.stateNode.implementation === f.implementation) {
                  n(c, d.sibling), d = a(d, f.children || []), d.return = c, c = d;
                  break e;
                } else {
                  n(c, d);
                  break;
                }
              else
                t(c, d);
              d = d.sibling;
            }
            d = Go(f, c.mode, m), d.return = c, c = d;
          }
          return o(c);
        case en:
          return _ = f._init, x(c, d, _(f._payload), m);
      }
      if (Zr(f))
        return w(c, d, f, m);
      if (Lr(f))
        return k(c, d, f, m);
      ei(c, f);
    }
    return typeof f == "string" && f !== "" || typeof f == "number" ? (f = "" + f, d !== null && d.tag === 6 ? (n(c, d.sibling), d = a(d, f), d.return = c, c = d) : (n(c, d), d = Xo(f, c.mode, m), d.return = c, c = d), o(c)) : n(c, d);
  }
  return x;
}
var kr = Hf(!0), Bf = Hf(!1), Wa = {}, Nt = Tn(Wa), ma = Tn(Wa), ha = Tn(Wa);
function Ln(e) {
  if (e === Wa)
    throw Error(T(174));
  return e;
}
function Ss(e, t) {
  switch (G(ha, t), G(ma, e), G(Nt, Wa), e = t.nodeType, e) {
    case 9:
    case 11:
      t = (t = t.documentElement) ? t.namespaceURI : xu(null, "");
      break;
    default:
      e = e === 8 ? t.parentNode : t, t = e.namespaceURI || null, e = e.tagName, t = xu(t, e);
  }
  J(Nt), G(Nt, t);
}
function Sr() {
  J(Nt), J(ma), J(ha);
}
function Qf(e) {
  Ln(ha.current);
  var t = Ln(Nt.current), n = xu(t, e.type);
  t !== n && (G(ma, e), G(Nt, n));
}
function Ts(e) {
  ma.current === e && (J(Nt), J(ma));
}
var ue = Tn(0);
function ji(e) {
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
var Vo = [];
function Cs() {
  for (var e = 0; e < Vo.length; e++)
    Vo[e]._workInProgressVersionPrimary = null;
  Vo.length = 0;
}
var pi = Gt.ReactCurrentDispatcher, Zo = Gt.ReactCurrentBatchConfig, Wn = 0, le = null, we = null, ke = null, zi = !1, Jr = !1, va = 0, vv = 0;
function De() {
  throw Error(T(321));
}
function Es(e, t) {
  if (t === null)
    return !1;
  for (var n = 0; n < t.length && n < e.length; n++)
    if (!St(e[n], t[n]))
      return !1;
  return !0;
}
function Os(e, t, n, r, a, i) {
  if (Wn = i, le = t, t.memoizedState = null, t.updateQueue = null, t.lanes = 0, pi.current = e === null || e.memoizedState === null ? _v : xv, e = n(r, a), Jr) {
    i = 0;
    do {
      if (Jr = !1, va = 0, 25 <= i)
        throw Error(T(301));
      i += 1, ke = we = null, t.updateQueue = null, pi.current = kv, e = n(r, a);
    } while (Jr);
  }
  if (pi.current = $i, t = we !== null && we.next !== null, Wn = 0, ke = we = le = null, zi = !1, t)
    throw Error(T(300));
  return e;
}
function Ds() {
  var e = va !== 0;
  return va = 0, e;
}
function Et() {
  var e = { memoizedState: null, baseState: null, baseQueue: null, queue: null, next: null };
  return ke === null ? le.memoizedState = ke = e : ke = ke.next = e, ke;
}
function pt() {
  if (we === null) {
    var e = le.alternate;
    e = e !== null ? e.memoizedState : null;
  } else
    e = we.next;
  var t = ke === null ? le.memoizedState : ke.next;
  if (t !== null)
    ke = t, we = e;
  else {
    if (e === null)
      throw Error(T(310));
    we = e, e = { memoizedState: we.memoizedState, baseState: we.baseState, baseQueue: we.baseQueue, queue: we.queue, next: null }, ke === null ? le.memoizedState = ke = e : ke = ke.next = e;
  }
  return ke;
}
function ga(e, t) {
  return typeof t == "function" ? t(e) : t;
}
function Ho(e) {
  var t = pt(), n = t.queue;
  if (n === null)
    throw Error(T(311));
  n.lastRenderedReducer = e;
  var r = we, a = r.baseQueue, i = n.pending;
  if (i !== null) {
    if (a !== null) {
      var o = a.next;
      a.next = i.next, i.next = o;
    }
    r.baseQueue = a = i, n.pending = null;
  }
  if (a !== null) {
    i = a.next, r = r.baseState;
    var u = o = null, l = null, s = i;
    do {
      var p = s.lane;
      if ((Wn & p) === p)
        l !== null && (l = l.next = { lane: 0, action: s.action, hasEagerState: s.hasEagerState, eagerState: s.eagerState, next: null }), r = s.hasEagerState ? s.eagerState : e(r, s.action);
      else {
        var h = {
          lane: p,
          action: s.action,
          hasEagerState: s.hasEagerState,
          eagerState: s.eagerState,
          next: null
        };
        l === null ? (u = l = h, o = r) : l = l.next = h, le.lanes |= p, Fn |= p;
      }
      s = s.next;
    } while (s !== null && s !== i);
    l === null ? o = r : l.next = u, St(r, t.memoizedState) || (Be = !0), t.memoizedState = r, t.baseState = o, t.baseQueue = l, n.lastRenderedState = r;
  }
  if (e = n.interleaved, e !== null) {
    a = e;
    do
      i = a.lane, le.lanes |= i, Fn |= i, a = a.next;
    while (a !== e);
  } else
    a === null && (n.lanes = 0);
  return [t.memoizedState, n.dispatch];
}
function Bo(e) {
  var t = pt(), n = t.queue;
  if (n === null)
    throw Error(T(311));
  n.lastRenderedReducer = e;
  var r = n.dispatch, a = n.pending, i = t.memoizedState;
  if (a !== null) {
    n.pending = null;
    var o = a = a.next;
    do
      i = e(i, o.action), o = o.next;
    while (o !== a);
    St(i, t.memoizedState) || (Be = !0), t.memoizedState = i, t.baseQueue === null && (t.baseState = i), n.lastRenderedState = i;
  }
  return [i, r];
}
function qf() {
}
function Xf(e, t) {
  var n = le, r = pt(), a = t(), i = !St(r.memoizedState, a);
  if (i && (r.memoizedState = a, Be = !0), r = r.queue, Ms(Jf.bind(null, n, r, e), [e]), r.getSnapshot !== t || i || ke !== null && ke.memoizedState.tag & 1) {
    if (n.flags |= 2048, ya(9, Kf.bind(null, n, r, a, t), void 0, null), Se === null)
      throw Error(T(349));
    Wn & 30 || Gf(n, t, a);
  }
  return a;
}
function Gf(e, t, n) {
  e.flags |= 16384, e = { getSnapshot: t, value: n }, t = le.updateQueue, t === null ? (t = { lastEffect: null, stores: null }, le.updateQueue = t, t.stores = [e]) : (n = t.stores, n === null ? t.stores = [e] : n.push(e));
}
function Kf(e, t, n, r) {
  t.value = n, t.getSnapshot = r, ep(t) && tp(e);
}
function Jf(e, t, n) {
  return n(function() {
    ep(t) && tp(e);
  });
}
function ep(e) {
  var t = e.getSnapshot;
  e = e.value;
  try {
    var n = t();
    return !St(e, n);
  } catch {
    return !0;
  }
}
function tp(e) {
  var t = Qt(e, 1);
  t !== null && _t(t, e, 1, -1);
}
function Wc(e) {
  var t = Et();
  return typeof e == "function" && (e = e()), t.memoizedState = t.baseState = e, e = { pending: null, interleaved: null, lanes: 0, dispatch: null, lastRenderedReducer: ga, lastRenderedState: e }, t.queue = e, e = e.dispatch = wv.bind(null, le, e), [t.memoizedState, e];
}
function ya(e, t, n, r) {
  return e = { tag: e, create: t, destroy: n, deps: r, next: null }, t = le.updateQueue, t === null ? (t = { lastEffect: null, stores: null }, le.updateQueue = t, t.lastEffect = e.next = e) : (n = t.lastEffect, n === null ? t.lastEffect = e.next = e : (r = n.next, n.next = e, e.next = r, t.lastEffect = e)), e;
}
function np() {
  return pt().memoizedState;
}
function mi(e, t, n, r) {
  var a = Et();
  le.flags |= e, a.memoizedState = ya(1 | t, n, void 0, r === void 0 ? null : r);
}
function po(e, t, n, r) {
  var a = pt();
  r = r === void 0 ? null : r;
  var i = void 0;
  if (we !== null) {
    var o = we.memoizedState;
    if (i = o.destroy, r !== null && Es(r, o.deps)) {
      a.memoizedState = ya(t, n, i, r);
      return;
    }
  }
  le.flags |= e, a.memoizedState = ya(1 | t, n, i, r);
}
function Fc(e, t) {
  return mi(8390656, 8, e, t);
}
function Ms(e, t) {
  return po(2048, 8, e, t);
}
function rp(e, t) {
  return po(4, 2, e, t);
}
function ap(e, t) {
  return po(4, 4, e, t);
}
function ip(e, t) {
  if (typeof t == "function")
    return e = e(), t(e), function() {
      t(null);
    };
  if (t != null)
    return e = e(), t.current = e, function() {
      t.current = null;
    };
}
function op(e, t, n) {
  return n = n != null ? n.concat([e]) : null, po(4, 4, ip.bind(null, t, e), n);
}
function Ns() {
}
function up(e, t) {
  var n = pt();
  t = t === void 0 ? null : t;
  var r = n.memoizedState;
  return r !== null && t !== null && Es(t, r[1]) ? r[0] : (n.memoizedState = [e, t], e);
}
function lp(e, t) {
  var n = pt();
  t = t === void 0 ? null : t;
  var r = n.memoizedState;
  return r !== null && t !== null && Es(t, r[1]) ? r[0] : (e = e(), n.memoizedState = [e, t], e);
}
function sp(e, t, n) {
  return Wn & 21 ? (St(n, t) || (n = ff(), le.lanes |= n, Fn |= n, e.baseState = !0), t) : (e.baseState && (e.baseState = !1, Be = !0), e.memoizedState = n);
}
function gv(e, t) {
  var n = Q;
  Q = n !== 0 && 4 > n ? n : 4, e(!0);
  var r = Zo.transition;
  Zo.transition = {};
  try {
    e(!1), t();
  } finally {
    Q = n, Zo.transition = r;
  }
}
function cp() {
  return pt().memoizedState;
}
function yv(e, t, n) {
  var r = hn(e);
  if (n = { lane: r, action: n, hasEagerState: !1, eagerState: null, next: null }, dp(e))
    fp(t, n);
  else if (n = bf(e, t, n, r), n !== null) {
    var a = $e();
    _t(n, e, r, a), pp(n, t, r);
  }
}
function wv(e, t, n) {
  var r = hn(e), a = { lane: r, action: n, hasEagerState: !1, eagerState: null, next: null };
  if (dp(e))
    fp(t, a);
  else {
    var i = e.alternate;
    if (e.lanes === 0 && (i === null || i.lanes === 0) && (i = t.lastRenderedReducer, i !== null))
      try {
        var o = t.lastRenderedState, u = i(o, n);
        if (a.hasEagerState = !0, a.eagerState = u, St(u, o)) {
          var l = t.interleaved;
          l === null ? (a.next = a, xs(t)) : (a.next = l.next, l.next = a), t.interleaved = a;
          return;
        }
      } catch {
      } finally {
      }
    n = bf(e, t, a, r), n !== null && (a = $e(), _t(n, e, r, a), pp(n, t, r));
  }
}
function dp(e) {
  var t = e.alternate;
  return e === le || t !== null && t === le;
}
function fp(e, t) {
  Jr = zi = !0;
  var n = e.pending;
  n === null ? t.next = t : (t.next = n.next, n.next = t), e.pending = t;
}
function pp(e, t, n) {
  if (n & 4194240) {
    var r = t.lanes;
    r &= e.pendingLanes, n |= r, t.lanes = n, us(e, n);
  }
}
var $i = { readContext: ft, useCallback: De, useContext: De, useEffect: De, useImperativeHandle: De, useInsertionEffect: De, useLayoutEffect: De, useMemo: De, useReducer: De, useRef: De, useState: De, useDebugValue: De, useDeferredValue: De, useTransition: De, useMutableSource: De, useSyncExternalStore: De, useId: De, unstable_isNewReconciler: !1 }, _v = { readContext: ft, useCallback: function(e, t) {
  return Et().memoizedState = [e, t === void 0 ? null : t], e;
}, useContext: ft, useEffect: Fc, useImperativeHandle: function(e, t, n) {
  return n = n != null ? n.concat([e]) : null, mi(
    4194308,
    4,
    ip.bind(null, t, e),
    n
  );
}, useLayoutEffect: function(e, t) {
  return mi(4194308, 4, e, t);
}, useInsertionEffect: function(e, t) {
  return mi(4, 2, e, t);
}, useMemo: function(e, t) {
  var n = Et();
  return t = t === void 0 ? null : t, e = e(), n.memoizedState = [e, t], e;
}, useReducer: function(e, t, n) {
  var r = Et();
  return t = n !== void 0 ? n(t) : t, r.memoizedState = r.baseState = t, e = { pending: null, interleaved: null, lanes: 0, dispatch: null, lastRenderedReducer: e, lastRenderedState: t }, r.queue = e, e = e.dispatch = yv.bind(null, le, e), [r.memoizedState, e];
}, useRef: function(e) {
  var t = Et();
  return e = { current: e }, t.memoizedState = e;
}, useState: Wc, useDebugValue: Ns, useDeferredValue: function(e) {
  return Et().memoizedState = e;
}, useTransition: function() {
  var e = Wc(!1), t = e[0];
  return e = gv.bind(null, e[1]), Et().memoizedState = e, [t, e];
}, useMutableSource: function() {
}, useSyncExternalStore: function(e, t, n) {
  var r = le, a = Et();
  if (re) {
    if (n === void 0)
      throw Error(T(407));
    n = n();
  } else {
    if (n = t(), Se === null)
      throw Error(T(349));
    Wn & 30 || Gf(r, t, n);
  }
  a.memoizedState = n;
  var i = { value: n, getSnapshot: t };
  return a.queue = i, Fc(Jf.bind(
    null,
    r,
    i,
    e
  ), [e]), r.flags |= 2048, ya(9, Kf.bind(null, r, i, n, t), void 0, null), n;
}, useId: function() {
  var e = Et(), t = Se.identifierPrefix;
  if (re) {
    var n = bt, r = At;
    n = (r & ~(1 << 32 - wt(r) - 1)).toString(32) + n, t = ":" + t + "R" + n, n = va++, 0 < n && (t += "H" + n.toString(32)), t += ":";
  } else
    n = vv++, t = ":" + t + "r" + n.toString(32) + ":";
  return e.memoizedState = t;
}, unstable_isNewReconciler: !1 }, xv = {
  readContext: ft,
  useCallback: up,
  useContext: ft,
  useEffect: Ms,
  useImperativeHandle: op,
  useInsertionEffect: rp,
  useLayoutEffect: ap,
  useMemo: lp,
  useReducer: Ho,
  useRef: np,
  useState: function() {
    return Ho(ga);
  },
  useDebugValue: Ns,
  useDeferredValue: function(e) {
    var t = pt();
    return sp(t, we.memoizedState, e);
  },
  useTransition: function() {
    var e = Ho(ga)[0], t = pt().memoizedState;
    return [e, t];
  },
  useMutableSource: qf,
  useSyncExternalStore: Xf,
  useId: cp,
  unstable_isNewReconciler: !1
}, kv = { readContext: ft, useCallback: up, useContext: ft, useEffect: Ms, useImperativeHandle: op, useInsertionEffect: rp, useLayoutEffect: ap, useMemo: lp, useReducer: Bo, useRef: np, useState: function() {
  return Bo(ga);
}, useDebugValue: Ns, useDeferredValue: function(e) {
  var t = pt();
  return we === null ? t.memoizedState = e : sp(t, we.memoizedState, e);
}, useTransition: function() {
  var e = Bo(ga)[0], t = pt().memoizedState;
  return [e, t];
}, useMutableSource: qf, useSyncExternalStore: Xf, useId: cp, unstable_isNewReconciler: !1 };
function Tr(e, t) {
  try {
    var n = "", r = t;
    do
      n += Xm(r), r = r.return;
    while (r);
    var a = n;
  } catch (i) {
    a = `
Error generating stack: ` + i.message + `
` + i.stack;
  }
  return { value: e, source: t, stack: a, digest: null };
}
function Qo(e, t, n) {
  return { value: e, source: null, stack: n ?? null, digest: t ?? null };
}
function Vu(e, t) {
  try {
    console.error(t.value);
  } catch (n) {
    setTimeout(function() {
      throw n;
    });
  }
}
var Sv = typeof WeakMap == "function" ? WeakMap : Map;
function mp(e, t, n) {
  n = Vt(-1, n), n.tag = 3, n.payload = { element: null };
  var r = t.value;
  return n.callback = function() {
    Fi || (Fi = !0, el = r), Vu(e, t);
  }, n;
}
function hp(e, t, n) {
  n = Vt(-1, n), n.tag = 3;
  var r = e.type.getDerivedStateFromError;
  if (typeof r == "function") {
    var a = t.value;
    n.payload = function() {
      return r(a);
    }, n.callback = function() {
      Vu(e, t);
    };
  }
  var i = e.stateNode;
  return i !== null && typeof i.componentDidCatch == "function" && (n.callback = function() {
    Vu(e, t), typeof r != "function" && (mn === null ? mn = /* @__PURE__ */ new Set([this]) : mn.add(this));
    var o = t.stack;
    this.componentDidCatch(t.value, { componentStack: o !== null ? o : "" });
  }), n;
}
function Ac(e, t, n) {
  var r = e.pingCache;
  if (r === null) {
    r = e.pingCache = new Sv();
    var a = /* @__PURE__ */ new Set();
    r.set(t, a);
  } else
    a = r.get(t), a === void 0 && (a = /* @__PURE__ */ new Set(), r.set(t, a));
  a.has(n) || (a.add(n), e = zv.bind(null, e, t, n), t.then(e, e));
}
function bc(e) {
  do {
    var t;
    if ((t = e.tag === 13) && (t = e.memoizedState, t = t !== null ? t.dehydrated !== null : !0), t)
      return e;
    e = e.return;
  } while (e !== null);
  return null;
}
function Yc(e, t, n, r, a) {
  return e.mode & 1 ? (e.flags |= 65536, e.lanes = a, e) : (e === t ? e.flags |= 65536 : (e.flags |= 128, n.flags |= 131072, n.flags &= -52805, n.tag === 1 && (n.alternate === null ? n.tag = 17 : (t = Vt(-1, 1), t.tag = 2, pn(n, t, 1))), n.lanes |= 1), e);
}
var Tv = Gt.ReactCurrentOwner, Be = !1;
function je(e, t, n, r) {
  t.child = e === null ? Bf(t, null, n, r) : kr(t, e.child, n, r);
}
function Vc(e, t, n, r, a) {
  n = n.render;
  var i = t.ref;
  return vr(t, a), r = Os(e, t, n, r, i, a), n = Ds(), e !== null && !Be ? (t.updateQueue = e.updateQueue, t.flags &= -2053, e.lanes &= ~a, qt(e, t, a)) : (re && n && hs(t), t.flags |= 1, je(e, t, r, a), t.child);
}
function Zc(e, t, n, r, a) {
  if (e === null) {
    var i = n.type;
    return typeof i == "function" && !$s(i) && i.defaultProps === void 0 && n.compare === null && n.defaultProps === void 0 ? (t.tag = 15, t.type = i, vp(e, t, i, r, a)) : (e = yi(n.type, null, r, t, t.mode, a), e.ref = t.ref, e.return = t, t.child = e);
  }
  if (i = e.child, !(e.lanes & a)) {
    var o = i.memoizedProps;
    if (n = n.compare, n = n !== null ? n : ca, n(o, r) && e.ref === t.ref)
      return qt(e, t, a);
  }
  return t.flags |= 1, e = vn(i, r), e.ref = t.ref, e.return = t, t.child = e;
}
function vp(e, t, n, r, a) {
  if (e !== null) {
    var i = e.memoizedProps;
    if (ca(i, r) && e.ref === t.ref)
      if (Be = !1, t.pendingProps = r = i, (e.lanes & a) !== 0)
        e.flags & 131072 && (Be = !0);
      else
        return t.lanes = e.lanes, qt(e, t, a);
  }
  return Zu(e, t, n, r, a);
}
function gp(e, t, n) {
  var r = t.pendingProps, a = r.children, i = e !== null ? e.memoizedState : null;
  if (r.mode === "hidden")
    if (!(t.mode & 1))
      t.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }, G(dr, Je), Je |= n;
    else {
      if (!(n & 1073741824))
        return e = i !== null ? i.baseLanes | n : n, t.lanes = t.childLanes = 1073741824, t.memoizedState = { baseLanes: e, cachePool: null, transitions: null }, t.updateQueue = null, G(dr, Je), Je |= e, null;
      t.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }, r = i !== null ? i.baseLanes : n, G(dr, Je), Je |= r;
    }
  else
    i !== null ? (r = i.baseLanes | n, t.memoizedState = null) : r = n, G(dr, Je), Je |= r;
  return je(e, t, a, n), t.child;
}
function yp(e, t) {
  var n = t.ref;
  (e === null && n !== null || e !== null && e.ref !== n) && (t.flags |= 512, t.flags |= 2097152);
}
function Zu(e, t, n, r, a) {
  var i = qe(n) ? zn : Pe.current;
  return i = _r(t, i), vr(t, a), n = Os(e, t, n, r, i, a), r = Ds(), e !== null && !Be ? (t.updateQueue = e.updateQueue, t.flags &= -2053, e.lanes &= ~a, qt(e, t, a)) : (re && r && hs(t), t.flags |= 1, je(e, t, n, a), t.child);
}
function Hc(e, t, n, r, a) {
  if (qe(n)) {
    var i = !0;
    Ni(t);
  } else
    i = !1;
  if (vr(t, a), t.stateNode === null)
    hi(e, t), Zf(t, n, r), Yu(t, n, r, a), r = !0;
  else if (e === null) {
    var o = t.stateNode, u = t.memoizedProps;
    o.props = u;
    var l = o.context, s = n.contextType;
    typeof s == "object" && s !== null ? s = ft(s) : (s = qe(n) ? zn : Pe.current, s = _r(t, s));
    var p = n.getDerivedStateFromProps, h = typeof p == "function" || typeof o.getSnapshotBeforeUpdate == "function";
    h || typeof o.UNSAFE_componentWillReceiveProps != "function" && typeof o.componentWillReceiveProps != "function" || (u !== r || l !== s) && zc(t, o, r, s), tn = !1;
    var v = t.memoizedState;
    o.state = v, Ui(t, r, o, a), l = t.memoizedState, u !== r || v !== l || Qe.current || tn ? (typeof p == "function" && (bu(t, n, p, r), l = t.memoizedState), (u = tn || jc(t, n, u, r, v, l, s)) ? (h || typeof o.UNSAFE_componentWillMount != "function" && typeof o.componentWillMount != "function" || (typeof o.componentWillMount == "function" && o.componentWillMount(), typeof o.UNSAFE_componentWillMount == "function" && o.UNSAFE_componentWillMount()), typeof o.componentDidMount == "function" && (t.flags |= 4194308)) : (typeof o.componentDidMount == "function" && (t.flags |= 4194308), t.memoizedProps = r, t.memoizedState = l), o.props = r, o.state = l, o.context = s, r = u) : (typeof o.componentDidMount == "function" && (t.flags |= 4194308), r = !1);
  } else {
    o = t.stateNode, Yf(e, t), u = t.memoizedProps, s = t.type === t.elementType ? u : ht(t.type, u), o.props = s, h = t.pendingProps, v = o.context, l = n.contextType, typeof l == "object" && l !== null ? l = ft(l) : (l = qe(n) ? zn : Pe.current, l = _r(t, l));
    var y = n.getDerivedStateFromProps;
    (p = typeof y == "function" || typeof o.getSnapshotBeforeUpdate == "function") || typeof o.UNSAFE_componentWillReceiveProps != "function" && typeof o.componentWillReceiveProps != "function" || (u !== h || v !== l) && zc(t, o, r, l), tn = !1, v = t.memoizedState, o.state = v, Ui(t, r, o, a);
    var w = t.memoizedState;
    u !== h || v !== w || Qe.current || tn ? (typeof y == "function" && (bu(t, n, y, r), w = t.memoizedState), (s = tn || jc(t, n, s, r, v, w, l) || !1) ? (p || typeof o.UNSAFE_componentWillUpdate != "function" && typeof o.componentWillUpdate != "function" || (typeof o.componentWillUpdate == "function" && o.componentWillUpdate(r, w, l), typeof o.UNSAFE_componentWillUpdate == "function" && o.UNSAFE_componentWillUpdate(r, w, l)), typeof o.componentDidUpdate == "function" && (t.flags |= 4), typeof o.getSnapshotBeforeUpdate == "function" && (t.flags |= 1024)) : (typeof o.componentDidUpdate != "function" || u === e.memoizedProps && v === e.memoizedState || (t.flags |= 4), typeof o.getSnapshotBeforeUpdate != "function" || u === e.memoizedProps && v === e.memoizedState || (t.flags |= 1024), t.memoizedProps = r, t.memoizedState = w), o.props = r, o.state = w, o.context = l, r = s) : (typeof o.componentDidUpdate != "function" || u === e.memoizedProps && v === e.memoizedState || (t.flags |= 4), typeof o.getSnapshotBeforeUpdate != "function" || u === e.memoizedProps && v === e.memoizedState || (t.flags |= 1024), r = !1);
  }
  return Hu(e, t, n, r, i, a);
}
function Hu(e, t, n, r, a, i) {
  yp(e, t);
  var o = (t.flags & 128) !== 0;
  if (!r && !o)
    return a && Pc(t, n, !1), qt(e, t, i);
  r = t.stateNode, Tv.current = t;
  var u = o && typeof n.getDerivedStateFromError != "function" ? null : r.render();
  return t.flags |= 1, e !== null && o ? (t.child = kr(t, e.child, null, i), t.child = kr(t, null, u, i)) : je(e, t, u, i), t.memoizedState = r.state, a && Pc(t, n, !0), t.child;
}
function wp(e) {
  var t = e.stateNode;
  t.pendingContext ? Nc(e, t.pendingContext, t.pendingContext !== t.context) : t.context && Nc(e, t.context, !1), Ss(e, t.containerInfo);
}
function Bc(e, t, n, r, a) {
  return xr(), gs(a), t.flags |= 256, je(e, t, n, r), t.child;
}
var Bu = { dehydrated: null, treeContext: null, retryLane: 0 };
function Qu(e) {
  return { baseLanes: e, cachePool: null, transitions: null };
}
function _p(e, t, n) {
  var r = t.pendingProps, a = ue.current, i = !1, o = (t.flags & 128) !== 0, u;
  if ((u = o) || (u = e !== null && e.memoizedState === null ? !1 : (a & 2) !== 0), u ? (i = !0, t.flags &= -129) : (e === null || e.memoizedState !== null) && (a |= 1), G(ue, a & 1), e === null)
    return Fu(t), e = t.memoizedState, e !== null && (e = e.dehydrated, e !== null) ? (t.mode & 1 ? e.data === "$!" ? t.lanes = 8 : t.lanes = 1073741824 : t.lanes = 1, null) : (o = r.children, e = r.fallback, i ? (r = t.mode, i = t.child, o = { mode: "hidden", children: o }, !(r & 1) && i !== null ? (i.childLanes = 0, i.pendingProps = o) : i = vo(o, r, 0, null), e = Un(e, r, n, null), i.return = t, e.return = t, i.sibling = e, t.child = i, t.child.memoizedState = Qu(n), t.memoizedState = Bu, e) : Ps(t, o));
  if (a = e.memoizedState, a !== null && (u = a.dehydrated, u !== null))
    return Cv(e, t, o, r, u, a, n);
  if (i) {
    i = r.fallback, o = t.mode, a = e.child, u = a.sibling;
    var l = { mode: "hidden", children: r.children };
    return !(o & 1) && t.child !== a ? (r = t.child, r.childLanes = 0, r.pendingProps = l, t.deletions = null) : (r = vn(a, l), r.subtreeFlags = a.subtreeFlags & 14680064), u !== null ? i = vn(u, i) : (i = Un(i, o, n, null), i.flags |= 2), i.return = t, r.return = t, r.sibling = i, t.child = r, r = i, i = t.child, o = e.child.memoizedState, o = o === null ? Qu(n) : { baseLanes: o.baseLanes | n, cachePool: null, transitions: o.transitions }, i.memoizedState = o, i.childLanes = e.childLanes & ~n, t.memoizedState = Bu, r;
  }
  return i = e.child, e = i.sibling, r = vn(i, { mode: "visible", children: r.children }), !(t.mode & 1) && (r.lanes = n), r.return = t, r.sibling = null, e !== null && (n = t.deletions, n === null ? (t.deletions = [e], t.flags |= 16) : n.push(e)), t.child = r, t.memoizedState = null, r;
}
function Ps(e, t) {
  return t = vo({ mode: "visible", children: t }, e.mode, 0, null), t.return = e, e.child = t;
}
function ti(e, t, n, r) {
  return r !== null && gs(r), kr(t, e.child, null, n), e = Ps(t, t.pendingProps.children), e.flags |= 2, t.memoizedState = null, e;
}
function Cv(e, t, n, r, a, i, o) {
  if (n)
    return t.flags & 256 ? (t.flags &= -257, r = Qo(Error(T(422))), ti(e, t, o, r)) : t.memoizedState !== null ? (t.child = e.child, t.flags |= 128, null) : (i = r.fallback, a = t.mode, r = vo({ mode: "visible", children: r.children }, a, 0, null), i = Un(i, a, o, null), i.flags |= 2, r.return = t, i.return = t, r.sibling = i, t.child = r, t.mode & 1 && kr(t, e.child, null, o), t.child.memoizedState = Qu(o), t.memoizedState = Bu, i);
  if (!(t.mode & 1))
    return ti(e, t, o, null);
  if (a.data === "$!") {
    if (r = a.nextSibling && a.nextSibling.dataset, r)
      var u = r.dgst;
    return r = u, i = Error(T(419)), r = Qo(i, r, void 0), ti(e, t, o, r);
  }
  if (u = (o & e.childLanes) !== 0, Be || u) {
    if (r = Se, r !== null) {
      switch (o & -o) {
        case 4:
          a = 2;
          break;
        case 16:
          a = 8;
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
          a = 32;
          break;
        case 536870912:
          a = 268435456;
          break;
        default:
          a = 0;
      }
      a = a & (r.suspendedLanes | o) ? 0 : a, a !== 0 && a !== i.retryLane && (i.retryLane = a, Qt(e, a), _t(r, e, a, -1));
    }
    return zs(), r = Qo(Error(T(421))), ti(e, t, o, r);
  }
  return a.data === "$?" ? (t.flags |= 128, t.child = e.child, t = $v.bind(null, e), a._reactRetry = t, null) : (e = i.treeContext, et = fn(a.nextSibling), tt = t, re = !0, gt = null, e !== null && (lt[st++] = At, lt[st++] = bt, lt[st++] = $n, At = e.id, bt = e.overflow, $n = t), t = Ps(t, r.children), t.flags |= 4096, t);
}
function Qc(e, t, n) {
  e.lanes |= t;
  var r = e.alternate;
  r !== null && (r.lanes |= t), Au(e.return, t, n);
}
function qo(e, t, n, r, a) {
  var i = e.memoizedState;
  i === null ? e.memoizedState = { isBackwards: t, rendering: null, renderingStartTime: 0, last: r, tail: n, tailMode: a } : (i.isBackwards = t, i.rendering = null, i.renderingStartTime = 0, i.last = r, i.tail = n, i.tailMode = a);
}
function xp(e, t, n) {
  var r = t.pendingProps, a = r.revealOrder, i = r.tail;
  if (je(e, t, r.children, n), r = ue.current, r & 2)
    r = r & 1 | 2, t.flags |= 128;
  else {
    if (e !== null && e.flags & 128)
      e:
        for (e = t.child; e !== null; ) {
          if (e.tag === 13)
            e.memoizedState !== null && Qc(e, n, t);
          else if (e.tag === 19)
            Qc(e, n, t);
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
  if (G(ue, r), !(t.mode & 1))
    t.memoizedState = null;
  else
    switch (a) {
      case "forwards":
        for (n = t.child, a = null; n !== null; )
          e = n.alternate, e !== null && ji(e) === null && (a = n), n = n.sibling;
        n = a, n === null ? (a = t.child, t.child = null) : (a = n.sibling, n.sibling = null), qo(t, !1, a, n, i);
        break;
      case "backwards":
        for (n = null, a = t.child, t.child = null; a !== null; ) {
          if (e = a.alternate, e !== null && ji(e) === null) {
            t.child = a;
            break;
          }
          e = a.sibling, a.sibling = n, n = a, a = e;
        }
        qo(t, !0, n, null, i);
        break;
      case "together":
        qo(t, !1, null, null, void 0);
        break;
      default:
        t.memoizedState = null;
    }
  return t.child;
}
function hi(e, t) {
  !(t.mode & 1) && e !== null && (e.alternate = null, t.alternate = null, t.flags |= 2);
}
function qt(e, t, n) {
  if (e !== null && (t.dependencies = e.dependencies), Fn |= t.lanes, !(n & t.childLanes))
    return null;
  if (e !== null && t.child !== e.child)
    throw Error(T(153));
  if (t.child !== null) {
    for (e = t.child, n = vn(e, e.pendingProps), t.child = n, n.return = t; e.sibling !== null; )
      e = e.sibling, n = n.sibling = vn(e, e.pendingProps), n.return = t;
    n.sibling = null;
  }
  return t.child;
}
function Ev(e, t, n) {
  switch (t.tag) {
    case 3:
      wp(t), xr();
      break;
    case 5:
      Qf(t);
      break;
    case 1:
      qe(t.type) && Ni(t);
      break;
    case 4:
      Ss(t, t.stateNode.containerInfo);
      break;
    case 10:
      var r = t.type._context, a = t.memoizedProps.value;
      G(Li, r._currentValue), r._currentValue = a;
      break;
    case 13:
      if (r = t.memoizedState, r !== null)
        return r.dehydrated !== null ? (G(ue, ue.current & 1), t.flags |= 128, null) : n & t.child.childLanes ? _p(e, t, n) : (G(ue, ue.current & 1), e = qt(e, t, n), e !== null ? e.sibling : null);
      G(ue, ue.current & 1);
      break;
    case 19:
      if (r = (n & t.childLanes) !== 0, e.flags & 128) {
        if (r)
          return xp(e, t, n);
        t.flags |= 128;
      }
      if (a = t.memoizedState, a !== null && (a.rendering = null, a.tail = null, a.lastEffect = null), G(ue, ue.current), r)
        break;
      return null;
    case 22:
    case 23:
      return t.lanes = 0, gp(e, t, n);
  }
  return qt(e, t, n);
}
var kp, qu, Sp, Tp;
kp = function(e, t) {
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
qu = function() {
};
Sp = function(e, t, n, r) {
  var a = e.memoizedProps;
  if (a !== r) {
    e = t.stateNode, Ln(Nt.current);
    var i = null;
    switch (n) {
      case "input":
        a = gu(e, a), r = gu(e, r), i = [];
        break;
      case "select":
        a = se({}, a, { value: void 0 }), r = se({}, r, { value: void 0 }), i = [];
        break;
      case "textarea":
        a = _u(e, a), r = _u(e, r), i = [];
        break;
      default:
        typeof a.onClick != "function" && typeof r.onClick == "function" && (e.onclick = Di);
    }
    ku(n, r);
    var o;
    n = null;
    for (s in a)
      if (!r.hasOwnProperty(s) && a.hasOwnProperty(s) && a[s] != null)
        if (s === "style") {
          var u = a[s];
          for (o in u)
            u.hasOwnProperty(o) && (n || (n = {}), n[o] = "");
        } else
          s !== "dangerouslySetInnerHTML" && s !== "children" && s !== "suppressContentEditableWarning" && s !== "suppressHydrationWarning" && s !== "autoFocus" && (ra.hasOwnProperty(s) ? i || (i = []) : (i = i || []).push(s, null));
    for (s in r) {
      var l = r[s];
      if (u = a != null ? a[s] : void 0, r.hasOwnProperty(s) && l !== u && (l != null || u != null))
        if (s === "style")
          if (u) {
            for (o in u)
              !u.hasOwnProperty(o) || l && l.hasOwnProperty(o) || (n || (n = {}), n[o] = "");
            for (o in l)
              l.hasOwnProperty(o) && u[o] !== l[o] && (n || (n = {}), n[o] = l[o]);
          } else
            n || (i || (i = []), i.push(
              s,
              n
            )), n = l;
        else
          s === "dangerouslySetInnerHTML" ? (l = l ? l.__html : void 0, u = u ? u.__html : void 0, l != null && u !== l && (i = i || []).push(s, l)) : s === "children" ? typeof l != "string" && typeof l != "number" || (i = i || []).push(s, "" + l) : s !== "suppressContentEditableWarning" && s !== "suppressHydrationWarning" && (ra.hasOwnProperty(s) ? (l != null && s === "onScroll" && K("scroll", e), i || u === l || (i = [])) : (i = i || []).push(s, l));
    }
    n && (i = i || []).push("style", n);
    var s = i;
    (t.updateQueue = s) && (t.flags |= 4);
  }
};
Tp = function(e, t, n, r) {
  n !== r && (t.flags |= 4);
};
function Wr(e, t) {
  if (!re)
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
function Me(e) {
  var t = e.alternate !== null && e.alternate.child === e.child, n = 0, r = 0;
  if (t)
    for (var a = e.child; a !== null; )
      n |= a.lanes | a.childLanes, r |= a.subtreeFlags & 14680064, r |= a.flags & 14680064, a.return = e, a = a.sibling;
  else
    for (a = e.child; a !== null; )
      n |= a.lanes | a.childLanes, r |= a.subtreeFlags, r |= a.flags, a.return = e, a = a.sibling;
  return e.subtreeFlags |= r, e.childLanes = n, t;
}
function Ov(e, t, n) {
  var r = t.pendingProps;
  switch (vs(t), t.tag) {
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
      return Me(t), null;
    case 1:
      return qe(t.type) && Mi(), Me(t), null;
    case 3:
      return r = t.stateNode, Sr(), J(Qe), J(Pe), Cs(), r.pendingContext && (r.context = r.pendingContext, r.pendingContext = null), (e === null || e.child === null) && (Ja(t) ? t.flags |= 4 : e === null || e.memoizedState.isDehydrated && !(t.flags & 256) || (t.flags |= 1024, gt !== null && (rl(gt), gt = null))), qu(e, t), Me(t), null;
    case 5:
      Ts(t);
      var a = Ln(ha.current);
      if (n = t.type, e !== null && t.stateNode != null)
        Sp(e, t, n, r, a), e.ref !== t.ref && (t.flags |= 512, t.flags |= 2097152);
      else {
        if (!r) {
          if (t.stateNode === null)
            throw Error(T(166));
          return Me(t), null;
        }
        if (e = Ln(Nt.current), Ja(t)) {
          r = t.stateNode, n = t.type;
          var i = t.memoizedProps;
          switch (r[Ot] = t, r[pa] = i, e = (t.mode & 1) !== 0, n) {
            case "dialog":
              K("cancel", r), K("close", r);
              break;
            case "iframe":
            case "object":
            case "embed":
              K("load", r);
              break;
            case "video":
            case "audio":
              for (a = 0; a < Br.length; a++)
                K(Br[a], r);
              break;
            case "source":
              K("error", r);
              break;
            case "img":
            case "image":
            case "link":
              K(
                "error",
                r
              ), K("load", r);
              break;
            case "details":
              K("toggle", r);
              break;
            case "input":
              rc(r, i), K("invalid", r);
              break;
            case "select":
              r._wrapperState = { wasMultiple: !!i.multiple }, K("invalid", r);
              break;
            case "textarea":
              ic(r, i), K("invalid", r);
          }
          ku(n, i), a = null;
          for (var o in i)
            if (i.hasOwnProperty(o)) {
              var u = i[o];
              o === "children" ? typeof u == "string" ? r.textContent !== u && (i.suppressHydrationWarning !== !0 && Ka(r.textContent, u, e), a = ["children", u]) : typeof u == "number" && r.textContent !== "" + u && (i.suppressHydrationWarning !== !0 && Ka(
                r.textContent,
                u,
                e
              ), a = ["children", "" + u]) : ra.hasOwnProperty(o) && u != null && o === "onScroll" && K("scroll", r);
            }
          switch (n) {
            case "input":
              Va(r), ac(r, i, !0);
              break;
            case "textarea":
              Va(r), oc(r);
              break;
            case "select":
            case "option":
              break;
            default:
              typeof i.onClick == "function" && (r.onclick = Di);
          }
          r = a, t.updateQueue = r, r !== null && (t.flags |= 4);
        } else {
          o = a.nodeType === 9 ? a : a.ownerDocument, e === "http://www.w3.org/1999/xhtml" && (e = Xd(n)), e === "http://www.w3.org/1999/xhtml" ? n === "script" ? (e = o.createElement("div"), e.innerHTML = "<script><\/script>", e = e.removeChild(e.firstChild)) : typeof r.is == "string" ? e = o.createElement(n, { is: r.is }) : (e = o.createElement(n), n === "select" && (o = e, r.multiple ? o.multiple = !0 : r.size && (o.size = r.size))) : e = o.createElementNS(e, n), e[Ot] = t, e[pa] = r, kp(e, t, !1, !1), t.stateNode = e;
          e: {
            switch (o = Su(n, r), n) {
              case "dialog":
                K("cancel", e), K("close", e), a = r;
                break;
              case "iframe":
              case "object":
              case "embed":
                K("load", e), a = r;
                break;
              case "video":
              case "audio":
                for (a = 0; a < Br.length; a++)
                  K(Br[a], e);
                a = r;
                break;
              case "source":
                K("error", e), a = r;
                break;
              case "img":
              case "image":
              case "link":
                K(
                  "error",
                  e
                ), K("load", e), a = r;
                break;
              case "details":
                K("toggle", e), a = r;
                break;
              case "input":
                rc(e, r), a = gu(e, r), K("invalid", e);
                break;
              case "option":
                a = r;
                break;
              case "select":
                e._wrapperState = { wasMultiple: !!r.multiple }, a = se({}, r, { value: void 0 }), K("invalid", e);
                break;
              case "textarea":
                ic(e, r), a = _u(e, r), K("invalid", e);
                break;
              default:
                a = r;
            }
            ku(n, a), u = a;
            for (i in u)
              if (u.hasOwnProperty(i)) {
                var l = u[i];
                i === "style" ? Jd(e, l) : i === "dangerouslySetInnerHTML" ? (l = l ? l.__html : void 0, l != null && Gd(e, l)) : i === "children" ? typeof l == "string" ? (n !== "textarea" || l !== "") && aa(e, l) : typeof l == "number" && aa(e, "" + l) : i !== "suppressContentEditableWarning" && i !== "suppressHydrationWarning" && i !== "autoFocus" && (ra.hasOwnProperty(i) ? l != null && i === "onScroll" && K("scroll", e) : l != null && ts(e, i, l, o));
              }
            switch (n) {
              case "input":
                Va(e), ac(e, r, !1);
                break;
              case "textarea":
                Va(e), oc(e);
                break;
              case "option":
                r.value != null && e.setAttribute("value", "" + gn(r.value));
                break;
              case "select":
                e.multiple = !!r.multiple, i = r.value, i != null ? fr(e, !!r.multiple, i, !1) : r.defaultValue != null && fr(
                  e,
                  !!r.multiple,
                  r.defaultValue,
                  !0
                );
                break;
              default:
                typeof a.onClick == "function" && (e.onclick = Di);
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
      return Me(t), null;
    case 6:
      if (e && t.stateNode != null)
        Tp(e, t, e.memoizedProps, r);
      else {
        if (typeof r != "string" && t.stateNode === null)
          throw Error(T(166));
        if (n = Ln(ha.current), Ln(Nt.current), Ja(t)) {
          if (r = t.stateNode, n = t.memoizedProps, r[Ot] = t, (i = r.nodeValue !== n) && (e = tt, e !== null))
            switch (e.tag) {
              case 3:
                Ka(r.nodeValue, n, (e.mode & 1) !== 0);
                break;
              case 5:
                e.memoizedProps.suppressHydrationWarning !== !0 && Ka(r.nodeValue, n, (e.mode & 1) !== 0);
            }
          i && (t.flags |= 4);
        } else
          r = (n.nodeType === 9 ? n : n.ownerDocument).createTextNode(r), r[Ot] = t, t.stateNode = r;
      }
      return Me(t), null;
    case 13:
      if (J(ue), r = t.memoizedState, e === null || e.memoizedState !== null && e.memoizedState.dehydrated !== null) {
        if (re && et !== null && t.mode & 1 && !(t.flags & 128))
          Af(), xr(), t.flags |= 98560, i = !1;
        else if (i = Ja(t), r !== null && r.dehydrated !== null) {
          if (e === null) {
            if (!i)
              throw Error(T(318));
            if (i = t.memoizedState, i = i !== null ? i.dehydrated : null, !i)
              throw Error(T(317));
            i[Ot] = t;
          } else
            xr(), !(t.flags & 128) && (t.memoizedState = null), t.flags |= 4;
          Me(t), i = !1;
        } else
          gt !== null && (rl(gt), gt = null), i = !0;
        if (!i)
          return t.flags & 65536 ? t : null;
      }
      return t.flags & 128 ? (t.lanes = n, t) : (r = r !== null, r !== (e !== null && e.memoizedState !== null) && r && (t.child.flags |= 8192, t.mode & 1 && (e === null || ue.current & 1 ? _e === 0 && (_e = 3) : zs())), t.updateQueue !== null && (t.flags |= 4), Me(t), null);
    case 4:
      return Sr(), qu(e, t), e === null && da(t.stateNode.containerInfo), Me(t), null;
    case 10:
      return _s(t.type._context), Me(t), null;
    case 17:
      return qe(t.type) && Mi(), Me(t), null;
    case 19:
      if (J(ue), i = t.memoizedState, i === null)
        return Me(t), null;
      if (r = (t.flags & 128) !== 0, o = i.rendering, o === null)
        if (r)
          Wr(i, !1);
        else {
          if (_e !== 0 || e !== null && e.flags & 128)
            for (e = t.child; e !== null; ) {
              if (o = ji(e), o !== null) {
                for (t.flags |= 128, Wr(i, !1), r = o.updateQueue, r !== null && (t.updateQueue = r, t.flags |= 4), t.subtreeFlags = 0, r = n, n = t.child; n !== null; )
                  i = n, e = r, i.flags &= 14680066, o = i.alternate, o === null ? (i.childLanes = 0, i.lanes = e, i.child = null, i.subtreeFlags = 0, i.memoizedProps = null, i.memoizedState = null, i.updateQueue = null, i.dependencies = null, i.stateNode = null) : (i.childLanes = o.childLanes, i.lanes = o.lanes, i.child = o.child, i.subtreeFlags = 0, i.deletions = null, i.memoizedProps = o.memoizedProps, i.memoizedState = o.memoizedState, i.updateQueue = o.updateQueue, i.type = o.type, e = o.dependencies, i.dependencies = e === null ? null : { lanes: e.lanes, firstContext: e.firstContext }), n = n.sibling;
                return G(ue, ue.current & 1 | 2), t.child;
              }
              e = e.sibling;
            }
          i.tail !== null && me() > Cr && (t.flags |= 128, r = !0, Wr(i, !1), t.lanes = 4194304);
        }
      else {
        if (!r)
          if (e = ji(o), e !== null) {
            if (t.flags |= 128, r = !0, n = e.updateQueue, n !== null && (t.updateQueue = n, t.flags |= 4), Wr(i, !0), i.tail === null && i.tailMode === "hidden" && !o.alternate && !re)
              return Me(t), null;
          } else
            2 * me() - i.renderingStartTime > Cr && n !== 1073741824 && (t.flags |= 128, r = !0, Wr(i, !1), t.lanes = 4194304);
        i.isBackwards ? (o.sibling = t.child, t.child = o) : (n = i.last, n !== null ? n.sibling = o : t.child = o, i.last = o);
      }
      return i.tail !== null ? (t = i.tail, i.rendering = t, i.tail = t.sibling, i.renderingStartTime = me(), t.sibling = null, n = ue.current, G(ue, r ? n & 1 | 2 : n & 1), t) : (Me(t), null);
    case 22:
    case 23:
      return js(), r = t.memoizedState !== null, e !== null && e.memoizedState !== null !== r && (t.flags |= 8192), r && t.mode & 1 ? Je & 1073741824 && (Me(t), t.subtreeFlags & 6 && (t.flags |= 8192)) : Me(t), null;
    case 24:
      return null;
    case 25:
      return null;
  }
  throw Error(T(156, t.tag));
}
function Dv(e, t) {
  switch (vs(t), t.tag) {
    case 1:
      return qe(t.type) && Mi(), e = t.flags, e & 65536 ? (t.flags = e & -65537 | 128, t) : null;
    case 3:
      return Sr(), J(Qe), J(Pe), Cs(), e = t.flags, e & 65536 && !(e & 128) ? (t.flags = e & -65537 | 128, t) : null;
    case 5:
      return Ts(t), null;
    case 13:
      if (J(ue), e = t.memoizedState, e !== null && e.dehydrated !== null) {
        if (t.alternate === null)
          throw Error(T(340));
        xr();
      }
      return e = t.flags, e & 65536 ? (t.flags = e & -65537 | 128, t) : null;
    case 19:
      return J(ue), null;
    case 4:
      return Sr(), null;
    case 10:
      return _s(t.type._context), null;
    case 22:
    case 23:
      return js(), null;
    case 24:
      return null;
    default:
      return null;
  }
}
var ni = !1, Ne = !1, Mv = typeof WeakSet == "function" ? WeakSet : Set, N = null;
function cr(e, t) {
  var n = e.ref;
  if (n !== null)
    if (typeof n == "function")
      try {
        n(null);
      } catch (r) {
        fe(e, t, r);
      }
    else
      n.current = null;
}
function Xu(e, t, n) {
  try {
    n();
  } catch (r) {
    fe(e, t, r);
  }
}
var qc = !1;
function Nv(e, t) {
  if (Lu = Ci, e = Df(), ms(e)) {
    if ("selectionStart" in e)
      var n = { start: e.selectionStart, end: e.selectionEnd };
    else
      e: {
        n = (n = e.ownerDocument) && n.defaultView || window;
        var r = n.getSelection && n.getSelection();
        if (r && r.rangeCount !== 0) {
          n = r.anchorNode;
          var a = r.anchorOffset, i = r.focusNode;
          r = r.focusOffset;
          try {
            n.nodeType, i.nodeType;
          } catch {
            n = null;
            break e;
          }
          var o = 0, u = -1, l = -1, s = 0, p = 0, h = e, v = null;
          t:
            for (; ; ) {
              for (var y; h !== n || a !== 0 && h.nodeType !== 3 || (u = o + a), h !== i || r !== 0 && h.nodeType !== 3 || (l = o + r), h.nodeType === 3 && (o += h.nodeValue.length), (y = h.firstChild) !== null; )
                v = h, h = y;
              for (; ; ) {
                if (h === e)
                  break t;
                if (v === n && ++s === a && (u = o), v === i && ++p === r && (l = o), (y = h.nextSibling) !== null)
                  break;
                h = v, v = h.parentNode;
              }
              h = y;
            }
          n = u === -1 || l === -1 ? null : { start: u, end: l };
        } else
          n = null;
      }
    n = n || { start: 0, end: 0 };
  } else
    n = null;
  for (Iu = { focusedElem: e, selectionRange: n }, Ci = !1, N = t; N !== null; )
    if (t = N, e = t.child, (t.subtreeFlags & 1028) !== 0 && e !== null)
      e.return = t, N = e;
    else
      for (; N !== null; ) {
        t = N;
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
                  var k = w.memoizedProps, x = w.memoizedState, c = t.stateNode, d = c.getSnapshotBeforeUpdate(t.elementType === t.type ? k : ht(t.type, k), x);
                  c.__reactInternalSnapshotBeforeUpdate = d;
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
                throw Error(T(163));
            }
        } catch (m) {
          fe(t, t.return, m);
        }
        if (e = t.sibling, e !== null) {
          e.return = t.return, N = e;
          break;
        }
        N = t.return;
      }
  return w = qc, qc = !1, w;
}
function ea(e, t, n) {
  var r = t.updateQueue;
  if (r = r !== null ? r.lastEffect : null, r !== null) {
    var a = r = r.next;
    do {
      if ((a.tag & e) === e) {
        var i = a.destroy;
        a.destroy = void 0, i !== void 0 && Xu(t, n, i);
      }
      a = a.next;
    } while (a !== r);
  }
}
function mo(e, t) {
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
function Gu(e) {
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
function Cp(e) {
  var t = e.alternate;
  t !== null && (e.alternate = null, Cp(t)), e.child = null, e.deletions = null, e.sibling = null, e.tag === 5 && (t = e.stateNode, t !== null && (delete t[Ot], delete t[pa], delete t[zu], delete t[fv], delete t[pv])), e.stateNode = null, e.return = null, e.dependencies = null, e.memoizedProps = null, e.memoizedState = null, e.pendingProps = null, e.stateNode = null, e.updateQueue = null;
}
function Ep(e) {
  return e.tag === 5 || e.tag === 3 || e.tag === 4;
}
function Xc(e) {
  e:
    for (; ; ) {
      for (; e.sibling === null; ) {
        if (e.return === null || Ep(e.return))
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
function Ku(e, t, n) {
  var r = e.tag;
  if (r === 5 || r === 6)
    e = e.stateNode, t ? n.nodeType === 8 ? n.parentNode.insertBefore(e, t) : n.insertBefore(e, t) : (n.nodeType === 8 ? (t = n.parentNode, t.insertBefore(e, n)) : (t = n, t.appendChild(e)), n = n._reactRootContainer, n != null || t.onclick !== null || (t.onclick = Di));
  else if (r !== 4 && (e = e.child, e !== null))
    for (Ku(e, t, n), e = e.sibling; e !== null; )
      Ku(e, t, n), e = e.sibling;
}
function Ju(e, t, n) {
  var r = e.tag;
  if (r === 5 || r === 6)
    e = e.stateNode, t ? n.insertBefore(e, t) : n.appendChild(e);
  else if (r !== 4 && (e = e.child, e !== null))
    for (Ju(e, t, n), e = e.sibling; e !== null; )
      Ju(e, t, n), e = e.sibling;
}
var Te = null, vt = !1;
function Kt(e, t, n) {
  for (n = n.child; n !== null; )
    Op(e, t, n), n = n.sibling;
}
function Op(e, t, n) {
  if (Mt && typeof Mt.onCommitFiberUnmount == "function")
    try {
      Mt.onCommitFiberUnmount(io, n);
    } catch {
    }
  switch (n.tag) {
    case 5:
      Ne || cr(n, t);
    case 6:
      var r = Te, a = vt;
      Te = null, Kt(e, t, n), Te = r, vt = a, Te !== null && (vt ? (e = Te, n = n.stateNode, e.nodeType === 8 ? e.parentNode.removeChild(n) : e.removeChild(n)) : Te.removeChild(n.stateNode));
      break;
    case 18:
      Te !== null && (vt ? (e = Te, n = n.stateNode, e.nodeType === 8 ? bo(e.parentNode, n) : e.nodeType === 1 && bo(e, n), la(e)) : bo(Te, n.stateNode));
      break;
    case 4:
      r = Te, a = vt, Te = n.stateNode.containerInfo, vt = !0, Kt(e, t, n), Te = r, vt = a;
      break;
    case 0:
    case 11:
    case 14:
    case 15:
      if (!Ne && (r = n.updateQueue, r !== null && (r = r.lastEffect, r !== null))) {
        a = r = r.next;
        do {
          var i = a, o = i.destroy;
          i = i.tag, o !== void 0 && (i & 2 || i & 4) && Xu(n, t, o), a = a.next;
        } while (a !== r);
      }
      Kt(e, t, n);
      break;
    case 1:
      if (!Ne && (cr(n, t), r = n.stateNode, typeof r.componentWillUnmount == "function"))
        try {
          r.props = n.memoizedProps, r.state = n.memoizedState, r.componentWillUnmount();
        } catch (u) {
          fe(n, t, u);
        }
      Kt(e, t, n);
      break;
    case 21:
      Kt(e, t, n);
      break;
    case 22:
      n.mode & 1 ? (Ne = (r = Ne) || n.memoizedState !== null, Kt(e, t, n), Ne = r) : Kt(e, t, n);
      break;
    default:
      Kt(e, t, n);
  }
}
function Gc(e) {
  var t = e.updateQueue;
  if (t !== null) {
    e.updateQueue = null;
    var n = e.stateNode;
    n === null && (n = e.stateNode = new Mv()), t.forEach(function(r) {
      var a = Wv.bind(null, e, r);
      n.has(r) || (n.add(r), r.then(a, a));
    });
  }
}
function mt(e, t) {
  var n = t.deletions;
  if (n !== null)
    for (var r = 0; r < n.length; r++) {
      var a = n[r];
      try {
        var i = e, o = t, u = o;
        e:
          for (; u !== null; ) {
            switch (u.tag) {
              case 5:
                Te = u.stateNode, vt = !1;
                break e;
              case 3:
                Te = u.stateNode.containerInfo, vt = !0;
                break e;
              case 4:
                Te = u.stateNode.containerInfo, vt = !0;
                break e;
            }
            u = u.return;
          }
        if (Te === null)
          throw Error(T(160));
        Op(i, o, a), Te = null, vt = !1;
        var l = a.alternate;
        l !== null && (l.return = null), a.return = null;
      } catch (s) {
        fe(a, t, s);
      }
    }
  if (t.subtreeFlags & 12854)
    for (t = t.child; t !== null; )
      Dp(t, e), t = t.sibling;
}
function Dp(e, t) {
  var n = e.alternate, r = e.flags;
  switch (e.tag) {
    case 0:
    case 11:
    case 14:
    case 15:
      if (mt(t, e), Ct(e), r & 4) {
        try {
          ea(3, e, e.return), mo(3, e);
        } catch (k) {
          fe(e, e.return, k);
        }
        try {
          ea(5, e, e.return);
        } catch (k) {
          fe(e, e.return, k);
        }
      }
      break;
    case 1:
      mt(t, e), Ct(e), r & 512 && n !== null && cr(n, n.return);
      break;
    case 5:
      if (mt(t, e), Ct(e), r & 512 && n !== null && cr(n, n.return), e.flags & 32) {
        var a = e.stateNode;
        try {
          aa(a, "");
        } catch (k) {
          fe(e, e.return, k);
        }
      }
      if (r & 4 && (a = e.stateNode, a != null)) {
        var i = e.memoizedProps, o = n !== null ? n.memoizedProps : i, u = e.type, l = e.updateQueue;
        if (e.updateQueue = null, l !== null)
          try {
            u === "input" && i.type === "radio" && i.name != null && Qd(a, i), Su(u, o);
            var s = Su(u, i);
            for (o = 0; o < l.length; o += 2) {
              var p = l[o], h = l[o + 1];
              p === "style" ? Jd(a, h) : p === "dangerouslySetInnerHTML" ? Gd(a, h) : p === "children" ? aa(a, h) : ts(a, p, h, s);
            }
            switch (u) {
              case "input":
                yu(a, i);
                break;
              case "textarea":
                qd(a, i);
                break;
              case "select":
                var v = a._wrapperState.wasMultiple;
                a._wrapperState.wasMultiple = !!i.multiple;
                var y = i.value;
                y != null ? fr(a, !!i.multiple, y, !1) : v !== !!i.multiple && (i.defaultValue != null ? fr(
                  a,
                  !!i.multiple,
                  i.defaultValue,
                  !0
                ) : fr(a, !!i.multiple, i.multiple ? [] : "", !1));
            }
            a[pa] = i;
          } catch (k) {
            fe(e, e.return, k);
          }
      }
      break;
    case 6:
      if (mt(t, e), Ct(e), r & 4) {
        if (e.stateNode === null)
          throw Error(T(162));
        a = e.stateNode, i = e.memoizedProps;
        try {
          a.nodeValue = i;
        } catch (k) {
          fe(e, e.return, k);
        }
      }
      break;
    case 3:
      if (mt(t, e), Ct(e), r & 4 && n !== null && n.memoizedState.isDehydrated)
        try {
          la(t.containerInfo);
        } catch (k) {
          fe(e, e.return, k);
        }
      break;
    case 4:
      mt(t, e), Ct(e);
      break;
    case 13:
      mt(t, e), Ct(e), a = e.child, a.flags & 8192 && (i = a.memoizedState !== null, a.stateNode.isHidden = i, !i || a.alternate !== null && a.alternate.memoizedState !== null || (Is = me())), r & 4 && Gc(e);
      break;
    case 22:
      if (p = n !== null && n.memoizedState !== null, e.mode & 1 ? (Ne = (s = Ne) || p, mt(t, e), Ne = s) : mt(t, e), Ct(e), r & 8192) {
        if (s = e.memoizedState !== null, (e.stateNode.isHidden = s) && !p && e.mode & 1)
          for (N = e, p = e.child; p !== null; ) {
            for (h = N = p; N !== null; ) {
              switch (v = N, y = v.child, v.tag) {
                case 0:
                case 11:
                case 14:
                case 15:
                  ea(4, v, v.return);
                  break;
                case 1:
                  cr(v, v.return);
                  var w = v.stateNode;
                  if (typeof w.componentWillUnmount == "function") {
                    r = v, n = v.return;
                    try {
                      t = r, w.props = t.memoizedProps, w.state = t.memoizedState, w.componentWillUnmount();
                    } catch (k) {
                      fe(r, n, k);
                    }
                  }
                  break;
                case 5:
                  cr(v, v.return);
                  break;
                case 22:
                  if (v.memoizedState !== null) {
                    Jc(h);
                    continue;
                  }
              }
              y !== null ? (y.return = v, N = y) : Jc(h);
            }
            p = p.sibling;
          }
        e:
          for (p = null, h = e; ; ) {
            if (h.tag === 5) {
              if (p === null) {
                p = h;
                try {
                  a = h.stateNode, s ? (i = a.style, typeof i.setProperty == "function" ? i.setProperty("display", "none", "important") : i.display = "none") : (u = h.stateNode, l = h.memoizedProps.style, o = l != null && l.hasOwnProperty("display") ? l.display : null, u.style.display = Kd("display", o));
                } catch (k) {
                  fe(e, e.return, k);
                }
              }
            } else if (h.tag === 6) {
              if (p === null)
                try {
                  h.stateNode.nodeValue = s ? "" : h.memoizedProps;
                } catch (k) {
                  fe(e, e.return, k);
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
      mt(t, e), Ct(e), r & 4 && Gc(e);
      break;
    case 21:
      break;
    default:
      mt(
        t,
        e
      ), Ct(e);
  }
}
function Ct(e) {
  var t = e.flags;
  if (t & 2) {
    try {
      e: {
        for (var n = e.return; n !== null; ) {
          if (Ep(n)) {
            var r = n;
            break e;
          }
          n = n.return;
        }
        throw Error(T(160));
      }
      switch (r.tag) {
        case 5:
          var a = r.stateNode;
          r.flags & 32 && (aa(a, ""), r.flags &= -33);
          var i = Xc(e);
          Ju(e, i, a);
          break;
        case 3:
        case 4:
          var o = r.stateNode.containerInfo, u = Xc(e);
          Ku(e, u, o);
          break;
        default:
          throw Error(T(161));
      }
    } catch (l) {
      fe(e, e.return, l);
    }
    e.flags &= -3;
  }
  t & 4096 && (e.flags &= -4097);
}
function Pv(e, t, n) {
  N = e, Mp(e);
}
function Mp(e, t, n) {
  for (var r = (e.mode & 1) !== 0; N !== null; ) {
    var a = N, i = a.child;
    if (a.tag === 22 && r) {
      var o = a.memoizedState !== null || ni;
      if (!o) {
        var u = a.alternate, l = u !== null && u.memoizedState !== null || Ne;
        u = ni;
        var s = Ne;
        if (ni = o, (Ne = l) && !s)
          for (N = a; N !== null; )
            o = N, l = o.child, o.tag === 22 && o.memoizedState !== null ? ed(a) : l !== null ? (l.return = o, N = l) : ed(a);
        for (; i !== null; )
          N = i, Mp(i), i = i.sibling;
        N = a, ni = u, Ne = s;
      }
      Kc(e);
    } else
      a.subtreeFlags & 8772 && i !== null ? (i.return = a, N = i) : Kc(e);
  }
}
function Kc(e) {
  for (; N !== null; ) {
    var t = N;
    if (t.flags & 8772) {
      var n = t.alternate;
      try {
        if (t.flags & 8772)
          switch (t.tag) {
            case 0:
            case 11:
            case 15:
              Ne || mo(5, t);
              break;
            case 1:
              var r = t.stateNode;
              if (t.flags & 4 && !Ne)
                if (n === null)
                  r.componentDidMount();
                else {
                  var a = t.elementType === t.type ? n.memoizedProps : ht(t.type, n.memoizedProps);
                  r.componentDidUpdate(a, n.memoizedState, r.__reactInternalSnapshotBeforeUpdate);
                }
              var i = t.updateQueue;
              i !== null && Uc(t, i, r);
              break;
            case 3:
              var o = t.updateQueue;
              if (o !== null) {
                if (n = null, t.child !== null)
                  switch (t.child.tag) {
                    case 5:
                      n = t.child.stateNode;
                      break;
                    case 1:
                      n = t.child.stateNode;
                  }
                Uc(t, o, n);
              }
              break;
            case 5:
              var u = t.stateNode;
              if (n === null && t.flags & 4) {
                n = u;
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
                var s = t.alternate;
                if (s !== null) {
                  var p = s.memoizedState;
                  if (p !== null) {
                    var h = p.dehydrated;
                    h !== null && la(h);
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
              throw Error(T(163));
          }
        Ne || t.flags & 512 && Gu(t);
      } catch (v) {
        fe(t, t.return, v);
      }
    }
    if (t === e) {
      N = null;
      break;
    }
    if (n = t.sibling, n !== null) {
      n.return = t.return, N = n;
      break;
    }
    N = t.return;
  }
}
function Jc(e) {
  for (; N !== null; ) {
    var t = N;
    if (t === e) {
      N = null;
      break;
    }
    var n = t.sibling;
    if (n !== null) {
      n.return = t.return, N = n;
      break;
    }
    N = t.return;
  }
}
function ed(e) {
  for (; N !== null; ) {
    var t = N;
    try {
      switch (t.tag) {
        case 0:
        case 11:
        case 15:
          var n = t.return;
          try {
            mo(4, t);
          } catch (l) {
            fe(t, n, l);
          }
          break;
        case 1:
          var r = t.stateNode;
          if (typeof r.componentDidMount == "function") {
            var a = t.return;
            try {
              r.componentDidMount();
            } catch (l) {
              fe(t, a, l);
            }
          }
          var i = t.return;
          try {
            Gu(t);
          } catch (l) {
            fe(t, i, l);
          }
          break;
        case 5:
          var o = t.return;
          try {
            Gu(t);
          } catch (l) {
            fe(t, o, l);
          }
      }
    } catch (l) {
      fe(t, t.return, l);
    }
    if (t === e) {
      N = null;
      break;
    }
    var u = t.sibling;
    if (u !== null) {
      u.return = t.return, N = u;
      break;
    }
    N = t.return;
  }
}
var Rv = Math.ceil, Wi = Gt.ReactCurrentDispatcher, Rs = Gt.ReactCurrentOwner, dt = Gt.ReactCurrentBatchConfig, A = 0, Se = null, ve = null, Ce = 0, Je = 0, dr = Tn(0), _e = 0, wa = null, Fn = 0, ho = 0, Ls = 0, ta = null, Ze = null, Is = 0, Cr = 1 / 0, $t = null, Fi = !1, el = null, mn = null, ri = !1, un = null, Ai = 0, na = 0, tl = null, vi = -1, gi = 0;
function $e() {
  return A & 6 ? me() : vi !== -1 ? vi : vi = me();
}
function hn(e) {
  return e.mode & 1 ? A & 2 && Ce !== 0 ? Ce & -Ce : hv.transition !== null ? (gi === 0 && (gi = ff()), gi) : (e = Q, e !== 0 || (e = window.event, e = e === void 0 ? 16 : wf(e.type)), e) : 1;
}
function _t(e, t, n, r) {
  if (50 < na)
    throw na = 0, tl = null, Error(T(185));
  ja(e, n, r), (!(A & 2) || e !== Se) && (e === Se && (!(A & 2) && (ho |= n), _e === 4 && rn(e, Ce)), Xe(e, r), n === 1 && A === 0 && !(t.mode & 1) && (Cr = me() + 500, co && Cn()));
}
function Xe(e, t) {
  var n = e.callbackNode;
  hh(e, t);
  var r = Ti(e, e === Se ? Ce : 0);
  if (r === 0)
    n !== null && sc(n), e.callbackNode = null, e.callbackPriority = 0;
  else if (t = r & -r, e.callbackPriority !== t) {
    if (n != null && sc(n), t === 1)
      e.tag === 0 ? mv(td.bind(null, e)) : $f(td.bind(null, e)), cv(function() {
        !(A & 6) && Cn();
      }), n = null;
    else {
      switch (pf(r)) {
        case 1:
          n = os;
          break;
        case 4:
          n = cf;
          break;
        case 16:
          n = Si;
          break;
        case 536870912:
          n = df;
          break;
        default:
          n = Si;
      }
      n = zp(n, Np.bind(null, e));
    }
    e.callbackPriority = t, e.callbackNode = n;
  }
}
function Np(e, t) {
  if (vi = -1, gi = 0, A & 6)
    throw Error(T(327));
  var n = e.callbackNode;
  if (gr() && e.callbackNode !== n)
    return null;
  var r = Ti(e, e === Se ? Ce : 0);
  if (r === 0)
    return null;
  if (r & 30 || r & e.expiredLanes || t)
    t = bi(e, r);
  else {
    t = r;
    var a = A;
    A |= 2;
    var i = Rp();
    (Se !== e || Ce !== t) && ($t = null, Cr = me() + 500, In(e, t));
    do
      try {
        Uv();
        break;
      } catch (u) {
        Pp(e, u);
      }
    while (!0);
    ws(), Wi.current = i, A = a, ve !== null ? t = 0 : (Se = null, Ce = 0, t = _e);
  }
  if (t !== 0) {
    if (t === 2 && (a = Du(e), a !== 0 && (r = a, t = nl(e, a))), t === 1)
      throw n = wa, In(e, 0), rn(e, r), Xe(e, me()), n;
    if (t === 6)
      rn(e, r);
    else {
      if (a = e.current.alternate, !(r & 30) && !Lv(a) && (t = bi(e, r), t === 2 && (i = Du(e), i !== 0 && (r = i, t = nl(e, i))), t === 1))
        throw n = wa, In(e, 0), rn(e, r), Xe(e, me()), n;
      switch (e.finishedWork = a, e.finishedLanes = r, t) {
        case 0:
        case 1:
          throw Error(T(345));
        case 2:
          Mn(e, Ze, $t);
          break;
        case 3:
          if (rn(e, r), (r & 130023424) === r && (t = Is + 500 - me(), 10 < t)) {
            if (Ti(e, 0) !== 0)
              break;
            if (a = e.suspendedLanes, (a & r) !== r) {
              $e(), e.pingedLanes |= e.suspendedLanes & a;
              break;
            }
            e.timeoutHandle = ju(Mn.bind(null, e, Ze, $t), t);
            break;
          }
          Mn(e, Ze, $t);
          break;
        case 4:
          if (rn(e, r), (r & 4194240) === r)
            break;
          for (t = e.eventTimes, a = -1; 0 < r; ) {
            var o = 31 - wt(r);
            i = 1 << o, o = t[o], o > a && (a = o), r &= ~i;
          }
          if (r = a, r = me() - r, r = (120 > r ? 120 : 480 > r ? 480 : 1080 > r ? 1080 : 1920 > r ? 1920 : 3e3 > r ? 3e3 : 4320 > r ? 4320 : 1960 * Rv(r / 1960)) - r, 10 < r) {
            e.timeoutHandle = ju(Mn.bind(null, e, Ze, $t), r);
            break;
          }
          Mn(e, Ze, $t);
          break;
        case 5:
          Mn(e, Ze, $t);
          break;
        default:
          throw Error(T(329));
      }
    }
  }
  return Xe(e, me()), e.callbackNode === n ? Np.bind(null, e) : null;
}
function nl(e, t) {
  var n = ta;
  return e.current.memoizedState.isDehydrated && (In(e, t).flags |= 256), e = bi(e, t), e !== 2 && (t = Ze, Ze = n, t !== null && rl(t)), e;
}
function rl(e) {
  Ze === null ? Ze = e : Ze.push.apply(Ze, e);
}
function Lv(e) {
  for (var t = e; ; ) {
    if (t.flags & 16384) {
      var n = t.updateQueue;
      if (n !== null && (n = n.stores, n !== null))
        for (var r = 0; r < n.length; r++) {
          var a = n[r], i = a.getSnapshot;
          a = a.value;
          try {
            if (!St(i(), a))
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
function rn(e, t) {
  for (t &= ~Ls, t &= ~ho, e.suspendedLanes |= t, e.pingedLanes &= ~t, e = e.expirationTimes; 0 < t; ) {
    var n = 31 - wt(t), r = 1 << n;
    e[n] = -1, t &= ~r;
  }
}
function td(e) {
  if (A & 6)
    throw Error(T(327));
  gr();
  var t = Ti(e, 0);
  if (!(t & 1))
    return Xe(e, me()), null;
  var n = bi(e, t);
  if (e.tag !== 0 && n === 2) {
    var r = Du(e);
    r !== 0 && (t = r, n = nl(e, r));
  }
  if (n === 1)
    throw n = wa, In(e, 0), rn(e, t), Xe(e, me()), n;
  if (n === 6)
    throw Error(T(345));
  return e.finishedWork = e.current.alternate, e.finishedLanes = t, Mn(e, Ze, $t), Xe(e, me()), null;
}
function Us(e, t) {
  var n = A;
  A |= 1;
  try {
    return e(t);
  } finally {
    A = n, A === 0 && (Cr = me() + 500, co && Cn());
  }
}
function An(e) {
  un !== null && un.tag === 0 && !(A & 6) && gr();
  var t = A;
  A |= 1;
  var n = dt.transition, r = Q;
  try {
    if (dt.transition = null, Q = 1, e)
      return e();
  } finally {
    Q = r, dt.transition = n, A = t, !(A & 6) && Cn();
  }
}
function js() {
  Je = dr.current, J(dr);
}
function In(e, t) {
  e.finishedWork = null, e.finishedLanes = 0;
  var n = e.timeoutHandle;
  if (n !== -1 && (e.timeoutHandle = -1, sv(n)), ve !== null)
    for (n = ve.return; n !== null; ) {
      var r = n;
      switch (vs(r), r.tag) {
        case 1:
          r = r.type.childContextTypes, r != null && Mi();
          break;
        case 3:
          Sr(), J(Qe), J(Pe), Cs();
          break;
        case 5:
          Ts(r);
          break;
        case 4:
          Sr();
          break;
        case 13:
          J(ue);
          break;
        case 19:
          J(ue);
          break;
        case 10:
          _s(r.type._context);
          break;
        case 22:
        case 23:
          js();
      }
      n = n.return;
    }
  if (Se = e, ve = e = vn(e.current, null), Ce = Je = t, _e = 0, wa = null, Ls = ho = Fn = 0, Ze = ta = null, Rn !== null) {
    for (t = 0; t < Rn.length; t++)
      if (n = Rn[t], r = n.interleaved, r !== null) {
        n.interleaved = null;
        var a = r.next, i = n.pending;
        if (i !== null) {
          var o = i.next;
          i.next = a, r.next = o;
        }
        n.pending = r;
      }
    Rn = null;
  }
  return e;
}
function Pp(e, t) {
  do {
    var n = ve;
    try {
      if (ws(), pi.current = $i, zi) {
        for (var r = le.memoizedState; r !== null; ) {
          var a = r.queue;
          a !== null && (a.pending = null), r = r.next;
        }
        zi = !1;
      }
      if (Wn = 0, ke = we = le = null, Jr = !1, va = 0, Rs.current = null, n === null || n.return === null) {
        _e = 1, wa = t, ve = null;
        break;
      }
      e: {
        var i = e, o = n.return, u = n, l = t;
        if (t = Ce, u.flags |= 32768, l !== null && typeof l == "object" && typeof l.then == "function") {
          var s = l, p = u, h = p.tag;
          if (!(p.mode & 1) && (h === 0 || h === 11 || h === 15)) {
            var v = p.alternate;
            v ? (p.updateQueue = v.updateQueue, p.memoizedState = v.memoizedState, p.lanes = v.lanes) : (p.updateQueue = null, p.memoizedState = null);
          }
          var y = bc(o);
          if (y !== null) {
            y.flags &= -257, Yc(y, o, u, i, t), y.mode & 1 && Ac(i, s, t), t = y, l = s;
            var w = t.updateQueue;
            if (w === null) {
              var k = /* @__PURE__ */ new Set();
              k.add(l), t.updateQueue = k;
            } else
              w.add(l);
            break e;
          } else {
            if (!(t & 1)) {
              Ac(i, s, t), zs();
              break e;
            }
            l = Error(T(426));
          }
        } else if (re && u.mode & 1) {
          var x = bc(o);
          if (x !== null) {
            !(x.flags & 65536) && (x.flags |= 256), Yc(x, o, u, i, t), gs(Tr(l, u));
            break e;
          }
        }
        i = l = Tr(l, u), _e !== 4 && (_e = 2), ta === null ? ta = [i] : ta.push(i), i = o;
        do {
          switch (i.tag) {
            case 3:
              i.flags |= 65536, t &= -t, i.lanes |= t;
              var c = mp(i, l, t);
              Ic(i, c);
              break e;
            case 1:
              u = l;
              var d = i.type, f = i.stateNode;
              if (!(i.flags & 128) && (typeof d.getDerivedStateFromError == "function" || f !== null && typeof f.componentDidCatch == "function" && (mn === null || !mn.has(f)))) {
                i.flags |= 65536, t &= -t, i.lanes |= t;
                var m = hp(i, u, t);
                Ic(i, m);
                break e;
              }
          }
          i = i.return;
        } while (i !== null);
      }
      Ip(n);
    } catch (g) {
      t = g, ve === n && n !== null && (ve = n = n.return);
      continue;
    }
    break;
  } while (!0);
}
function Rp() {
  var e = Wi.current;
  return Wi.current = $i, e === null ? $i : e;
}
function zs() {
  (_e === 0 || _e === 3 || _e === 2) && (_e = 4), Se === null || !(Fn & 268435455) && !(ho & 268435455) || rn(Se, Ce);
}
function bi(e, t) {
  var n = A;
  A |= 2;
  var r = Rp();
  (Se !== e || Ce !== t) && ($t = null, In(e, t));
  do
    try {
      Iv();
      break;
    } catch (a) {
      Pp(e, a);
    }
  while (!0);
  if (ws(), A = n, Wi.current = r, ve !== null)
    throw Error(T(261));
  return Se = null, Ce = 0, _e;
}
function Iv() {
  for (; ve !== null; )
    Lp(ve);
}
function Uv() {
  for (; ve !== null && !oh(); )
    Lp(ve);
}
function Lp(e) {
  var t = jp(e.alternate, e, Je);
  e.memoizedProps = e.pendingProps, t === null ? Ip(e) : ve = t, Rs.current = null;
}
function Ip(e) {
  var t = e;
  do {
    var n = t.alternate;
    if (e = t.return, t.flags & 32768) {
      if (n = Dv(n, t), n !== null) {
        n.flags &= 32767, ve = n;
        return;
      }
      if (e !== null)
        e.flags |= 32768, e.subtreeFlags = 0, e.deletions = null;
      else {
        _e = 6, ve = null;
        return;
      }
    } else if (n = Ov(n, t, Je), n !== null) {
      ve = n;
      return;
    }
    if (t = t.sibling, t !== null) {
      ve = t;
      return;
    }
    ve = t = e;
  } while (t !== null);
  _e === 0 && (_e = 5);
}
function Mn(e, t, n) {
  var r = Q, a = dt.transition;
  try {
    dt.transition = null, Q = 1, jv(e, t, n, r);
  } finally {
    dt.transition = a, Q = r;
  }
  return null;
}
function jv(e, t, n, r) {
  do
    gr();
  while (un !== null);
  if (A & 6)
    throw Error(T(327));
  n = e.finishedWork;
  var a = e.finishedLanes;
  if (n === null)
    return null;
  if (e.finishedWork = null, e.finishedLanes = 0, n === e.current)
    throw Error(T(177));
  e.callbackNode = null, e.callbackPriority = 0;
  var i = n.lanes | n.childLanes;
  if (vh(e, i), e === Se && (ve = Se = null, Ce = 0), !(n.subtreeFlags & 2064) && !(n.flags & 2064) || ri || (ri = !0, zp(Si, function() {
    return gr(), null;
  })), i = (n.flags & 15990) !== 0, n.subtreeFlags & 15990 || i) {
    i = dt.transition, dt.transition = null;
    var o = Q;
    Q = 1;
    var u = A;
    A |= 4, Rs.current = null, Nv(e, n), Dp(n, e), nv(Iu), Ci = !!Lu, Iu = Lu = null, e.current = n, Pv(n), uh(), A = u, Q = o, dt.transition = i;
  } else
    e.current = n;
  if (ri && (ri = !1, un = e, Ai = a), i = e.pendingLanes, i === 0 && (mn = null), ch(n.stateNode), Xe(e, me()), t !== null)
    for (r = e.onRecoverableError, n = 0; n < t.length; n++)
      a = t[n], r(a.value, { componentStack: a.stack, digest: a.digest });
  if (Fi)
    throw Fi = !1, e = el, el = null, e;
  return Ai & 1 && e.tag !== 0 && gr(), i = e.pendingLanes, i & 1 ? e === tl ? na++ : (na = 0, tl = e) : na = 0, Cn(), null;
}
function gr() {
  if (un !== null) {
    var e = pf(Ai), t = dt.transition, n = Q;
    try {
      if (dt.transition = null, Q = 16 > e ? 16 : e, un === null)
        var r = !1;
      else {
        if (e = un, un = null, Ai = 0, A & 6)
          throw Error(T(331));
        var a = A;
        for (A |= 4, N = e.current; N !== null; ) {
          var i = N, o = i.child;
          if (N.flags & 16) {
            var u = i.deletions;
            if (u !== null) {
              for (var l = 0; l < u.length; l++) {
                var s = u[l];
                for (N = s; N !== null; ) {
                  var p = N;
                  switch (p.tag) {
                    case 0:
                    case 11:
                    case 15:
                      ea(8, p, i);
                  }
                  var h = p.child;
                  if (h !== null)
                    h.return = p, N = h;
                  else
                    for (; N !== null; ) {
                      p = N;
                      var v = p.sibling, y = p.return;
                      if (Cp(p), p === s) {
                        N = null;
                        break;
                      }
                      if (v !== null) {
                        v.return = y, N = v;
                        break;
                      }
                      N = y;
                    }
                }
              }
              var w = i.alternate;
              if (w !== null) {
                var k = w.child;
                if (k !== null) {
                  w.child = null;
                  do {
                    var x = k.sibling;
                    k.sibling = null, k = x;
                  } while (k !== null);
                }
              }
              N = i;
            }
          }
          if (i.subtreeFlags & 2064 && o !== null)
            o.return = i, N = o;
          else
            e:
              for (; N !== null; ) {
                if (i = N, i.flags & 2048)
                  switch (i.tag) {
                    case 0:
                    case 11:
                    case 15:
                      ea(9, i, i.return);
                  }
                var c = i.sibling;
                if (c !== null) {
                  c.return = i.return, N = c;
                  break e;
                }
                N = i.return;
              }
        }
        var d = e.current;
        for (N = d; N !== null; ) {
          o = N;
          var f = o.child;
          if (o.subtreeFlags & 2064 && f !== null)
            f.return = o, N = f;
          else
            e:
              for (o = d; N !== null; ) {
                if (u = N, u.flags & 2048)
                  try {
                    switch (u.tag) {
                      case 0:
                      case 11:
                      case 15:
                        mo(9, u);
                    }
                  } catch (g) {
                    fe(u, u.return, g);
                  }
                if (u === o) {
                  N = null;
                  break e;
                }
                var m = u.sibling;
                if (m !== null) {
                  m.return = u.return, N = m;
                  break e;
                }
                N = u.return;
              }
        }
        if (A = a, Cn(), Mt && typeof Mt.onPostCommitFiberRoot == "function")
          try {
            Mt.onPostCommitFiberRoot(io, e);
          } catch {
          }
        r = !0;
      }
      return r;
    } finally {
      Q = n, dt.transition = t;
    }
  }
  return !1;
}
function nd(e, t, n) {
  t = Tr(n, t), t = mp(e, t, 1), e = pn(e, t, 1), t = $e(), e !== null && (ja(e, 1, t), Xe(e, t));
}
function fe(e, t, n) {
  if (e.tag === 3)
    nd(e, e, n);
  else
    for (; t !== null; ) {
      if (t.tag === 3) {
        nd(t, e, n);
        break;
      } else if (t.tag === 1) {
        var r = t.stateNode;
        if (typeof t.type.getDerivedStateFromError == "function" || typeof r.componentDidCatch == "function" && (mn === null || !mn.has(r))) {
          e = Tr(n, e), e = hp(t, e, 1), t = pn(t, e, 1), e = $e(), t !== null && (ja(t, 1, e), Xe(t, e));
          break;
        }
      }
      t = t.return;
    }
}
function zv(e, t, n) {
  var r = e.pingCache;
  r !== null && r.delete(t), t = $e(), e.pingedLanes |= e.suspendedLanes & n, Se === e && (Ce & n) === n && (_e === 4 || _e === 3 && (Ce & 130023424) === Ce && 500 > me() - Is ? In(e, 0) : Ls |= n), Xe(e, t);
}
function Up(e, t) {
  t === 0 && (e.mode & 1 ? (t = Ba, Ba <<= 1, !(Ba & 130023424) && (Ba = 4194304)) : t = 1);
  var n = $e();
  e = Qt(e, t), e !== null && (ja(e, t, n), Xe(e, n));
}
function $v(e) {
  var t = e.memoizedState, n = 0;
  t !== null && (n = t.retryLane), Up(e, n);
}
function Wv(e, t) {
  var n = 0;
  switch (e.tag) {
    case 13:
      var r = e.stateNode, a = e.memoizedState;
      a !== null && (n = a.retryLane);
      break;
    case 19:
      r = e.stateNode;
      break;
    default:
      throw Error(T(314));
  }
  r !== null && r.delete(t), Up(e, n);
}
var jp;
jp = function(e, t, n) {
  if (e !== null)
    if (e.memoizedProps !== t.pendingProps || Qe.current)
      Be = !0;
    else {
      if (!(e.lanes & n) && !(t.flags & 128))
        return Be = !1, Ev(e, t, n);
      Be = !!(e.flags & 131072);
    }
  else
    Be = !1, re && t.flags & 1048576 && Wf(t, Ri, t.index);
  switch (t.lanes = 0, t.tag) {
    case 2:
      var r = t.type;
      hi(e, t), e = t.pendingProps;
      var a = _r(t, Pe.current);
      vr(t, n), a = Os(null, t, r, e, a, n);
      var i = Ds();
      return t.flags |= 1, typeof a == "object" && a !== null && typeof a.render == "function" && a.$$typeof === void 0 ? (t.tag = 1, t.memoizedState = null, t.updateQueue = null, qe(r) ? (i = !0, Ni(t)) : i = !1, t.memoizedState = a.state !== null && a.state !== void 0 ? a.state : null, ks(t), a.updater = fo, t.stateNode = a, a._reactInternals = t, Yu(t, r, e, n), t = Hu(null, t, r, !0, i, n)) : (t.tag = 0, re && i && hs(t), je(null, t, a, n), t = t.child), t;
    case 16:
      r = t.elementType;
      e: {
        switch (hi(e, t), e = t.pendingProps, a = r._init, r = a(r._payload), t.type = r, a = t.tag = Av(r), e = ht(r, e), a) {
          case 0:
            t = Zu(null, t, r, e, n);
            break e;
          case 1:
            t = Hc(null, t, r, e, n);
            break e;
          case 11:
            t = Vc(null, t, r, e, n);
            break e;
          case 14:
            t = Zc(null, t, r, ht(r.type, e), n);
            break e;
        }
        throw Error(T(
          306,
          r,
          ""
        ));
      }
      return t;
    case 0:
      return r = t.type, a = t.pendingProps, a = t.elementType === r ? a : ht(r, a), Zu(e, t, r, a, n);
    case 1:
      return r = t.type, a = t.pendingProps, a = t.elementType === r ? a : ht(r, a), Hc(e, t, r, a, n);
    case 3:
      e: {
        if (wp(t), e === null)
          throw Error(T(387));
        r = t.pendingProps, i = t.memoizedState, a = i.element, Yf(e, t), Ui(t, r, null, n);
        var o = t.memoizedState;
        if (r = o.element, i.isDehydrated)
          if (i = { element: r, isDehydrated: !1, cache: o.cache, pendingSuspenseBoundaries: o.pendingSuspenseBoundaries, transitions: o.transitions }, t.updateQueue.baseState = i, t.memoizedState = i, t.flags & 256) {
            a = Tr(Error(T(423)), t), t = Bc(e, t, r, n, a);
            break e;
          } else if (r !== a) {
            a = Tr(Error(T(424)), t), t = Bc(e, t, r, n, a);
            break e;
          } else
            for (et = fn(t.stateNode.containerInfo.firstChild), tt = t, re = !0, gt = null, n = Bf(t, null, r, n), t.child = n; n; )
              n.flags = n.flags & -3 | 4096, n = n.sibling;
        else {
          if (xr(), r === a) {
            t = qt(e, t, n);
            break e;
          }
          je(e, t, r, n);
        }
        t = t.child;
      }
      return t;
    case 5:
      return Qf(t), e === null && Fu(t), r = t.type, a = t.pendingProps, i = e !== null ? e.memoizedProps : null, o = a.children, Uu(r, a) ? o = null : i !== null && Uu(r, i) && (t.flags |= 32), yp(e, t), je(e, t, o, n), t.child;
    case 6:
      return e === null && Fu(t), null;
    case 13:
      return _p(e, t, n);
    case 4:
      return Ss(t, t.stateNode.containerInfo), r = t.pendingProps, e === null ? t.child = kr(t, null, r, n) : je(e, t, r, n), t.child;
    case 11:
      return r = t.type, a = t.pendingProps, a = t.elementType === r ? a : ht(r, a), Vc(e, t, r, a, n);
    case 7:
      return je(e, t, t.pendingProps, n), t.child;
    case 8:
      return je(e, t, t.pendingProps.children, n), t.child;
    case 12:
      return je(e, t, t.pendingProps.children, n), t.child;
    case 10:
      e: {
        if (r = t.type._context, a = t.pendingProps, i = t.memoizedProps, o = a.value, G(Li, r._currentValue), r._currentValue = o, i !== null)
          if (St(i.value, o)) {
            if (i.children === a.children && !Qe.current) {
              t = qt(e, t, n);
              break e;
            }
          } else
            for (i = t.child, i !== null && (i.return = t); i !== null; ) {
              var u = i.dependencies;
              if (u !== null) {
                o = i.child;
                for (var l = u.firstContext; l !== null; ) {
                  if (l.context === r) {
                    if (i.tag === 1) {
                      l = Vt(-1, n & -n), l.tag = 2;
                      var s = i.updateQueue;
                      if (s !== null) {
                        s = s.shared;
                        var p = s.pending;
                        p === null ? l.next = l : (l.next = p.next, p.next = l), s.pending = l;
                      }
                    }
                    i.lanes |= n, l = i.alternate, l !== null && (l.lanes |= n), Au(
                      i.return,
                      n,
                      t
                    ), u.lanes |= n;
                    break;
                  }
                  l = l.next;
                }
              } else if (i.tag === 10)
                o = i.type === t.type ? null : i.child;
              else if (i.tag === 18) {
                if (o = i.return, o === null)
                  throw Error(T(341));
                o.lanes |= n, u = o.alternate, u !== null && (u.lanes |= n), Au(o, n, t), o = i.sibling;
              } else
                o = i.child;
              if (o !== null)
                o.return = i;
              else
                for (o = i; o !== null; ) {
                  if (o === t) {
                    o = null;
                    break;
                  }
                  if (i = o.sibling, i !== null) {
                    i.return = o.return, o = i;
                    break;
                  }
                  o = o.return;
                }
              i = o;
            }
        je(e, t, a.children, n), t = t.child;
      }
      return t;
    case 9:
      return a = t.type, r = t.pendingProps.children, vr(t, n), a = ft(a), r = r(a), t.flags |= 1, je(e, t, r, n), t.child;
    case 14:
      return r = t.type, a = ht(r, t.pendingProps), a = ht(r.type, a), Zc(e, t, r, a, n);
    case 15:
      return vp(e, t, t.type, t.pendingProps, n);
    case 17:
      return r = t.type, a = t.pendingProps, a = t.elementType === r ? a : ht(r, a), hi(e, t), t.tag = 1, qe(r) ? (e = !0, Ni(t)) : e = !1, vr(t, n), Zf(t, r, a), Yu(t, r, a, n), Hu(null, t, r, !0, e, n);
    case 19:
      return xp(e, t, n);
    case 22:
      return gp(e, t, n);
  }
  throw Error(T(156, t.tag));
};
function zp(e, t) {
  return sf(e, t);
}
function Fv(e, t, n, r) {
  this.tag = e, this.key = n, this.sibling = this.child = this.return = this.stateNode = this.type = this.elementType = null, this.index = 0, this.ref = null, this.pendingProps = t, this.dependencies = this.memoizedState = this.updateQueue = this.memoizedProps = null, this.mode = r, this.subtreeFlags = this.flags = 0, this.deletions = null, this.childLanes = this.lanes = 0, this.alternate = null;
}
function ct(e, t, n, r) {
  return new Fv(e, t, n, r);
}
function $s(e) {
  return e = e.prototype, !(!e || !e.isReactComponent);
}
function Av(e) {
  if (typeof e == "function")
    return $s(e) ? 1 : 0;
  if (e != null) {
    if (e = e.$$typeof, e === rs)
      return 11;
    if (e === as)
      return 14;
  }
  return 2;
}
function vn(e, t) {
  var n = e.alternate;
  return n === null ? (n = ct(e.tag, t, e.key, e.mode), n.elementType = e.elementType, n.type = e.type, n.stateNode = e.stateNode, n.alternate = e, e.alternate = n) : (n.pendingProps = t, n.type = e.type, n.flags = 0, n.subtreeFlags = 0, n.deletions = null), n.flags = e.flags & 14680064, n.childLanes = e.childLanes, n.lanes = e.lanes, n.child = e.child, n.memoizedProps = e.memoizedProps, n.memoizedState = e.memoizedState, n.updateQueue = e.updateQueue, t = e.dependencies, n.dependencies = t === null ? null : { lanes: t.lanes, firstContext: t.firstContext }, n.sibling = e.sibling, n.index = e.index, n.ref = e.ref, n;
}
function yi(e, t, n, r, a, i) {
  var o = 2;
  if (r = e, typeof e == "function")
    $s(e) && (o = 1);
  else if (typeof e == "string")
    o = 5;
  else
    e:
      switch (e) {
        case tr:
          return Un(n.children, a, i, t);
        case ns:
          o = 8, a |= 8;
          break;
        case pu:
          return e = ct(12, n, t, a | 2), e.elementType = pu, e.lanes = i, e;
        case mu:
          return e = ct(13, n, t, a), e.elementType = mu, e.lanes = i, e;
        case hu:
          return e = ct(19, n, t, a), e.elementType = hu, e.lanes = i, e;
        case Zd:
          return vo(n, a, i, t);
        default:
          if (typeof e == "object" && e !== null)
            switch (e.$$typeof) {
              case Yd:
                o = 10;
                break e;
              case Vd:
                o = 9;
                break e;
              case rs:
                o = 11;
                break e;
              case as:
                o = 14;
                break e;
              case en:
                o = 16, r = null;
                break e;
            }
          throw Error(T(130, e == null ? e : typeof e, ""));
      }
  return t = ct(o, n, t, a), t.elementType = e, t.type = r, t.lanes = i, t;
}
function Un(e, t, n, r) {
  return e = ct(7, e, r, t), e.lanes = n, e;
}
function vo(e, t, n, r) {
  return e = ct(22, e, r, t), e.elementType = Zd, e.lanes = n, e.stateNode = { isHidden: !1 }, e;
}
function Xo(e, t, n) {
  return e = ct(6, e, null, t), e.lanes = n, e;
}
function Go(e, t, n) {
  return t = ct(4, e.children !== null ? e.children : [], e.key, t), t.lanes = n, t.stateNode = { containerInfo: e.containerInfo, pendingChildren: null, implementation: e.implementation }, t;
}
function bv(e, t, n, r, a) {
  this.tag = t, this.containerInfo = e, this.finishedWork = this.pingCache = this.current = this.pendingChildren = null, this.timeoutHandle = -1, this.callbackNode = this.pendingContext = this.context = null, this.callbackPriority = 0, this.eventTimes = Po(0), this.expirationTimes = Po(-1), this.entangledLanes = this.finishedLanes = this.mutableReadLanes = this.expiredLanes = this.pingedLanes = this.suspendedLanes = this.pendingLanes = 0, this.entanglements = Po(0), this.identifierPrefix = r, this.onRecoverableError = a, this.mutableSourceEagerHydrationData = null;
}
function Ws(e, t, n, r, a, i, o, u, l) {
  return e = new bv(e, t, n, u, l), t === 1 ? (t = 1, i === !0 && (t |= 8)) : t = 0, i = ct(3, null, null, t), e.current = i, i.stateNode = e, i.memoizedState = { element: r, isDehydrated: n, cache: null, transitions: null, pendingSuspenseBoundaries: null }, ks(i), e;
}
function Yv(e, t, n) {
  var r = 3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
  return { $$typeof: er, key: r == null ? null : "" + r, children: e, containerInfo: t, implementation: n };
}
function $p(e) {
  if (!e)
    return yn;
  e = e._reactInternals;
  e: {
    if (Bn(e) !== e || e.tag !== 1)
      throw Error(T(170));
    var t = e;
    do {
      switch (t.tag) {
        case 3:
          t = t.stateNode.context;
          break e;
        case 1:
          if (qe(t.type)) {
            t = t.stateNode.__reactInternalMemoizedMergedChildContext;
            break e;
          }
      }
      t = t.return;
    } while (t !== null);
    throw Error(T(171));
  }
  if (e.tag === 1) {
    var n = e.type;
    if (qe(n))
      return zf(e, n, t);
  }
  return t;
}
function Wp(e, t, n, r, a, i, o, u, l) {
  return e = Ws(n, r, !0, e, a, i, o, u, l), e.context = $p(null), n = e.current, r = $e(), a = hn(n), i = Vt(r, a), i.callback = t ?? null, pn(n, i, a), e.current.lanes = a, ja(e, a, r), Xe(e, r), e;
}
function go(e, t, n, r) {
  var a = t.current, i = $e(), o = hn(a);
  return n = $p(n), t.context === null ? t.context = n : t.pendingContext = n, t = Vt(i, o), t.payload = { element: e }, r = r === void 0 ? null : r, r !== null && (t.callback = r), e = pn(a, t, o), e !== null && (_t(e, a, o, i), fi(e, a, o)), o;
}
function Yi(e) {
  if (e = e.current, !e.child)
    return null;
  switch (e.child.tag) {
    case 5:
      return e.child.stateNode;
    default:
      return e.child.stateNode;
  }
}
function rd(e, t) {
  if (e = e.memoizedState, e !== null && e.dehydrated !== null) {
    var n = e.retryLane;
    e.retryLane = n !== 0 && n < t ? n : t;
  }
}
function Fs(e, t) {
  rd(e, t), (e = e.alternate) && rd(e, t);
}
function Vv() {
  return null;
}
var Fp = typeof reportError == "function" ? reportError : function(e) {
  console.error(e);
};
function As(e) {
  this._internalRoot = e;
}
yo.prototype.render = As.prototype.render = function(e) {
  var t = this._internalRoot;
  if (t === null)
    throw Error(T(409));
  go(e, t, null, null);
};
yo.prototype.unmount = As.prototype.unmount = function() {
  var e = this._internalRoot;
  if (e !== null) {
    this._internalRoot = null;
    var t = e.containerInfo;
    An(function() {
      go(null, e, null, null);
    }), t[Bt] = null;
  }
};
function yo(e) {
  this._internalRoot = e;
}
yo.prototype.unstable_scheduleHydration = function(e) {
  if (e) {
    var t = vf();
    e = { blockedOn: null, target: e, priority: t };
    for (var n = 0; n < nn.length && t !== 0 && t < nn[n].priority; n++)
      ;
    nn.splice(n, 0, e), n === 0 && yf(e);
  }
};
function bs(e) {
  return !(!e || e.nodeType !== 1 && e.nodeType !== 9 && e.nodeType !== 11);
}
function wo(e) {
  return !(!e || e.nodeType !== 1 && e.nodeType !== 9 && e.nodeType !== 11 && (e.nodeType !== 8 || e.nodeValue !== " react-mount-point-unstable "));
}
function ad() {
}
function Zv(e, t, n, r, a) {
  if (a) {
    if (typeof r == "function") {
      var i = r;
      r = function() {
        var s = Yi(o);
        i.call(s);
      };
    }
    var o = Wp(t, r, e, 0, null, !1, !1, "", ad);
    return e._reactRootContainer = o, e[Bt] = o.current, da(e.nodeType === 8 ? e.parentNode : e), An(), o;
  }
  for (; a = e.lastChild; )
    e.removeChild(a);
  if (typeof r == "function") {
    var u = r;
    r = function() {
      var s = Yi(l);
      u.call(s);
    };
  }
  var l = Ws(e, 0, !1, null, null, !1, !1, "", ad);
  return e._reactRootContainer = l, e[Bt] = l.current, da(e.nodeType === 8 ? e.parentNode : e), An(function() {
    go(t, l, n, r);
  }), l;
}
function _o(e, t, n, r, a) {
  var i = n._reactRootContainer;
  if (i) {
    var o = i;
    if (typeof a == "function") {
      var u = a;
      a = function() {
        var l = Yi(o);
        u.call(l);
      };
    }
    go(t, o, e, a);
  } else
    o = Zv(n, t, e, a, r);
  return Yi(o);
}
mf = function(e) {
  switch (e.tag) {
    case 3:
      var t = e.stateNode;
      if (t.current.memoizedState.isDehydrated) {
        var n = Hr(t.pendingLanes);
        n !== 0 && (us(t, n | 1), Xe(t, me()), !(A & 6) && (Cr = me() + 500, Cn()));
      }
      break;
    case 13:
      An(function() {
        var r = Qt(e, 1);
        if (r !== null) {
          var a = $e();
          _t(r, e, 1, a);
        }
      }), Fs(e, 1);
  }
};
ls = function(e) {
  if (e.tag === 13) {
    var t = Qt(e, 134217728);
    if (t !== null) {
      var n = $e();
      _t(t, e, 134217728, n);
    }
    Fs(e, 134217728);
  }
};
hf = function(e) {
  if (e.tag === 13) {
    var t = hn(e), n = Qt(e, t);
    if (n !== null) {
      var r = $e();
      _t(n, e, t, r);
    }
    Fs(e, t);
  }
};
vf = function() {
  return Q;
};
gf = function(e, t) {
  var n = Q;
  try {
    return Q = e, t();
  } finally {
    Q = n;
  }
};
Cu = function(e, t, n) {
  switch (t) {
    case "input":
      if (yu(e, n), t = n.name, n.type === "radio" && t != null) {
        for (n = e; n.parentNode; )
          n = n.parentNode;
        for (n = n.querySelectorAll("input[name=" + JSON.stringify("" + t) + '][type="radio"]'), t = 0; t < n.length; t++) {
          var r = n[t];
          if (r !== e && r.form === e.form) {
            var a = so(r);
            if (!a)
              throw Error(T(90));
            Bd(r), yu(r, a);
          }
        }
      }
      break;
    case "textarea":
      qd(e, n);
      break;
    case "select":
      t = n.value, t != null && fr(e, !!n.multiple, t, !1);
  }
};
nf = Us;
rf = An;
var Hv = { usingClientEntryPoint: !1, Events: [$a, ir, so, ef, tf, Us] }, Fr = { findFiberByHostInstance: Pn, bundleType: 0, version: "18.2.0", rendererPackageName: "react-dom" }, Bv = { bundleType: Fr.bundleType, version: Fr.version, rendererPackageName: Fr.rendererPackageName, rendererConfig: Fr.rendererConfig, overrideHookState: null, overrideHookStateDeletePath: null, overrideHookStateRenamePath: null, overrideProps: null, overridePropsDeletePath: null, overridePropsRenamePath: null, setErrorHandler: null, setSuspenseHandler: null, scheduleUpdate: null, currentDispatcherRef: Gt.ReactCurrentDispatcher, findHostInstanceByFiber: function(e) {
  return e = uf(e), e === null ? null : e.stateNode;
}, findFiberByHostInstance: Fr.findFiberByHostInstance || Vv, findHostInstancesForRefresh: null, scheduleRefresh: null, scheduleRoot: null, setRefreshHandler: null, getCurrentFiber: null, reconcilerVersion: "18.2.0-next-9e3b772b8-20220608" };
if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u") {
  var ai = __REACT_DEVTOOLS_GLOBAL_HOOK__;
  if (!ai.isDisabled && ai.supportsFiber)
    try {
      io = ai.inject(Bv), Mt = ai;
    } catch {
    }
}
rt.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = Hv;
rt.createPortal = function(e, t) {
  var n = 2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
  if (!bs(t))
    throw Error(T(200));
  return Yv(e, t, null, n);
};
rt.createRoot = function(e, t) {
  if (!bs(e))
    throw Error(T(299));
  var n = !1, r = "", a = Fp;
  return t != null && (t.unstable_strictMode === !0 && (n = !0), t.identifierPrefix !== void 0 && (r = t.identifierPrefix), t.onRecoverableError !== void 0 && (a = t.onRecoverableError)), t = Ws(e, 1, !1, null, null, n, !1, r, a), e[Bt] = t.current, da(e.nodeType === 8 ? e.parentNode : e), new As(t);
};
rt.findDOMNode = function(e) {
  if (e == null)
    return null;
  if (e.nodeType === 1)
    return e;
  var t = e._reactInternals;
  if (t === void 0)
    throw typeof e.render == "function" ? Error(T(188)) : (e = Object.keys(e).join(","), Error(T(268, e)));
  return e = uf(t), e = e === null ? null : e.stateNode, e;
};
rt.flushSync = function(e) {
  return An(e);
};
rt.hydrate = function(e, t, n) {
  if (!wo(t))
    throw Error(T(200));
  return _o(null, e, t, !0, n);
};
rt.hydrateRoot = function(e, t, n) {
  if (!bs(e))
    throw Error(T(405));
  var r = n != null && n.hydratedSources || null, a = !1, i = "", o = Fp;
  if (n != null && (n.unstable_strictMode === !0 && (a = !0), n.identifierPrefix !== void 0 && (i = n.identifierPrefix), n.onRecoverableError !== void 0 && (o = n.onRecoverableError)), t = Wp(t, null, e, 1, n ?? null, a, !1, i, o), e[Bt] = t.current, da(e), r)
    for (e = 0; e < r.length; e++)
      n = r[e], a = n._getVersion, a = a(n._source), t.mutableSourceEagerHydrationData == null ? t.mutableSourceEagerHydrationData = [n, a] : t.mutableSourceEagerHydrationData.push(
        n,
        a
      );
  return new yo(t);
};
rt.render = function(e, t, n) {
  if (!wo(t))
    throw Error(T(200));
  return _o(null, e, t, !1, n);
};
rt.unmountComponentAtNode = function(e) {
  if (!wo(e))
    throw Error(T(40));
  return e._reactRootContainer ? (An(function() {
    _o(null, null, e, !1, function() {
      e._reactRootContainer = null, e[Bt] = null;
    });
  }), !0) : !1;
};
rt.unstable_batchedUpdates = Us;
rt.unstable_renderSubtreeIntoContainer = function(e, t, n, r) {
  if (!wo(n))
    throw Error(T(200));
  if (e == null || e._reactInternals === void 0)
    throw Error(T(38));
  return _o(e, t, n, !1, r);
};
rt.version = "18.2.0-next-9e3b772b8-20220608";
function Ap() {
  if (!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" || typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function"))
    try {
      __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(Ap);
    } catch (e) {
      console.error(e);
    }
}
Ap(), $d.exports = rt;
var Qv = $d.exports, bp, id = Qv;
bp = id.createRoot, id.hydrateRoot;
var Yp = { exports: {} }, Vp = {};
/**
 * @license React
 * use-sync-external-store-shim.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Er = he;
function qv(e, t) {
  return e === t && (e !== 0 || 1 / e === 1 / t) || e !== e && t !== t;
}
var Xv = typeof Object.is == "function" ? Object.is : qv, Gv = Er.useState, Kv = Er.useEffect, Jv = Er.useLayoutEffect, e0 = Er.useDebugValue;
function t0(e, t) {
  var n = t(), r = Gv({ inst: { value: n, getSnapshot: t } }), a = r[0].inst, i = r[1];
  return Jv(function() {
    a.value = n, a.getSnapshot = t, Ko(a) && i({ inst: a });
  }, [e, n, t]), Kv(function() {
    return Ko(a) && i({ inst: a }), e(function() {
      Ko(a) && i({ inst: a });
    });
  }, [e]), e0(n), n;
}
function Ko(e) {
  var t = e.getSnapshot;
  e = e.value;
  try {
    var n = t();
    return !Xv(e, n);
  } catch {
    return !0;
  }
}
function n0(e, t) {
  return t();
}
var r0 = typeof window > "u" || typeof window.document > "u" || typeof window.document.createElement > "u" ? n0 : t0;
Vp.useSyncExternalStore = Er.useSyncExternalStore !== void 0 ? Er.useSyncExternalStore : r0;
Yp.exports = Vp;
var a0 = Yp.exports;
const ln = () => {
}, He = (
  /*#__NOINLINE__*/
  ln()
), Jo = Object, Y = (e) => e === He, Yt = (e) => typeof e == "function", wn = (e, t) => ({
  ...e,
  ...t
}), i0 = (e) => Yt(e.then), ii = /* @__PURE__ */ new WeakMap();
let o0 = 0;
const _a = (e) => {
  const t = typeof e, n = e && e.constructor, r = n == Date;
  let a, i;
  if (Jo(e) === e && !r && n != RegExp) {
    if (a = ii.get(e), a)
      return a;
    if (a = ++o0 + "~", ii.set(e, a), n == Array) {
      for (a = "@", i = 0; i < e.length; i++)
        a += _a(e[i]) + ",";
      ii.set(e, a);
    }
    if (n == Jo) {
      a = "#";
      const o = Jo.keys(e).sort();
      for (; !Y(i = o.pop()); )
        Y(e[i]) || (a += i + ":" + _a(e[i]) + ",");
      ii.set(e, a);
    }
  } else
    a = r ? e.toJSON() : t == "symbol" ? e.toString() : t == "string" ? JSON.stringify(e) : "" + e;
  return a;
}, Ft = /* @__PURE__ */ new WeakMap(), eu = {}, oi = {}, Ys = "undefined", xo = typeof window != Ys, al = typeof document != Ys, u0 = () => xo && typeof window.requestAnimationFrame != Ys, Zp = (e, t) => {
  const n = Ft.get(e);
  return [
    // Getter
    () => !Y(t) && e.get(t) || eu,
    // Setter
    (r) => {
      if (!Y(t)) {
        const a = e.get(t);
        t in oi || (oi[t] = a), n[5](t, wn(a, r), a || eu);
      }
    },
    // Subscriber
    n[6],
    // Get server cache snapshot
    () => !Y(t) && t in oi ? oi[t] : !Y(t) && e.get(t) || eu
  ];
};
let il = !0;
const l0 = () => il, [ol, ul] = xo && window.addEventListener ? [
  window.addEventListener.bind(window),
  window.removeEventListener.bind(window)
] : [
  ln,
  ln
], s0 = () => {
  const e = al && document.visibilityState;
  return Y(e) || e !== "hidden";
}, c0 = (e) => (al && document.addEventListener("visibilitychange", e), ol("focus", e), () => {
  al && document.removeEventListener("visibilitychange", e), ul("focus", e);
}), d0 = (e) => {
  const t = () => {
    il = !0, e();
  }, n = () => {
    il = !1;
  };
  return ol("online", t), ol("offline", n), () => {
    ul("online", t), ul("offline", n);
  };
}, f0 = {
  isOnline: l0,
  isVisible: s0
}, p0 = {
  initFocus: c0,
  initReconnect: d0
}, od = !ao.useId, xa = !xo || "Deno" in window, m0 = (e) => u0() ? window.requestAnimationFrame(e) : setTimeout(e, 1), tu = xa ? he.useEffect : he.useLayoutEffect, nu = typeof navigator < "u" && navigator.connection, ud = !xa && nu && ([
  "slow-2g",
  "2g"
].includes(nu.effectiveType) || nu.saveData), Vs = (e) => {
  if (Yt(e))
    try {
      e = e();
    } catch {
      e = "";
    }
  const t = e;
  return e = typeof e == "string" ? e : (Array.isArray(e) ? e.length : e) ? _a(e) : "", [
    e,
    t
  ];
};
let h0 = 0;
const ll = () => ++h0, Hp = 0, Bp = 1, Qp = 2, v0 = 3;
var Ar = {
  __proto__: null,
  ERROR_REVALIDATE_EVENT: v0,
  FOCUS_EVENT: Hp,
  MUTATE_EVENT: Qp,
  RECONNECT_EVENT: Bp
};
async function qp(...e) {
  const [t, n, r, a] = e, i = wn({
    populateCache: !0,
    throwOnError: !0
  }, typeof a == "boolean" ? {
    revalidate: a
  } : a || {});
  let o = i.populateCache;
  const u = i.rollbackOnError;
  let l = i.optimisticData;
  const s = i.revalidate !== !1, p = (y) => typeof u == "function" ? u(y) : u !== !1, h = i.throwOnError;
  if (Yt(n)) {
    const y = n, w = [], k = t.keys();
    for (const x of k)
      // Skip the special useSWRInfinite and useSWRSubscription keys.
      !/^\$(inf|sub)\$/.test(x) && y(t.get(x)._k) && w.push(x);
    return Promise.all(w.map(v));
  }
  return v(n);
  async function v(y) {
    const [w] = Vs(y);
    if (!w)
      return;
    const [k, x] = Zp(t, w), [c, d, f, m] = Ft.get(t), g = () => {
      const te = c[w];
      return s && (delete f[w], delete m[w], te && te[0]) ? te[0](Qp).then(() => k().data) : k().data;
    };
    if (e.length < 3)
      return g();
    let _ = r, S;
    const E = ll();
    d[w] = [
      E,
      0
    ];
    const $ = !Y(l), P = k(), ee = P.data, Oe = P._c, ge = Y(Oe) ? ee : Oe;
    if ($ && (l = Yt(l) ? l(ge, ee) : l, x({
      data: l,
      _c: ge
    })), Yt(_))
      try {
        _ = _(ge);
      } catch (te) {
        S = te;
      }
    if (_ && i0(_))
      if (_ = await _.catch((te) => {
        S = te;
      }), E !== d[w][0]) {
        if (S)
          throw S;
        return _;
      } else
        S && $ && p(S) && (o = !0, x({
          data: ge,
          _c: He
        }));
    if (o && !S)
      if (Yt(o)) {
        const te = o(_, ge);
        x({
          data: te,
          error: He,
          _c: He
        });
      } else
        x({
          data: _,
          error: He,
          _c: He
        });
    if (d[w][1] = ll(), Promise.resolve(g()).then(() => {
      x({
        _c: He
      });
    }), S) {
      if (h)
        throw S;
      return;
    }
    return _;
  }
}
const ld = (e, t) => {
  for (const n in e)
    e[n][0] && e[n][0](t);
}, g0 = (e, t) => {
  if (!Ft.has(e)) {
    const n = wn(p0, t), r = {}, a = qp.bind(He, e);
    let i = ln;
    const o = {}, u = (p, h) => {
      const v = o[p] || [];
      return o[p] = v, v.push(h), () => v.splice(v.indexOf(h), 1);
    }, l = (p, h, v) => {
      e.set(p, h);
      const y = o[p];
      if (y)
        for (const w of y)
          w(h, v);
    }, s = () => {
      if (!Ft.has(e) && (Ft.set(e, [
        r,
        {},
        {},
        {},
        a,
        l,
        u
      ]), !xa)) {
        const p = n.initFocus(setTimeout.bind(He, ld.bind(He, r, Hp))), h = n.initReconnect(setTimeout.bind(He, ld.bind(He, r, Bp)));
        i = () => {
          p && p(), h && h(), Ft.delete(e);
        };
      }
    };
    return s(), [
      e,
      a,
      s,
      i
    ];
  }
  return [
    e,
    Ft.get(e)[4]
  ];
}, y0 = (e, t, n, r, a) => {
  const i = n.errorRetryCount, o = a.retryCount, u = ~~((Math.random() + 0.5) * (1 << (o < 8 ? o : 8))) * n.errorRetryInterval;
  !Y(i) && o > i || setTimeout(r, u, a);
}, w0 = (e, t) => _a(e) == _a(t), [Xp, _0] = g0(/* @__PURE__ */ new Map()), x0 = wn(
  {
    // events
    onLoadingSlow: ln,
    onSuccess: ln,
    onError: ln,
    onErrorRetry: y0,
    onDiscarded: ln,
    // switches
    revalidateOnFocus: !0,
    revalidateOnReconnect: !0,
    revalidateIfStale: !0,
    shouldRetryOnError: !0,
    // timeouts
    errorRetryInterval: ud ? 1e4 : 5e3,
    focusThrottleInterval: 5 * 1e3,
    dedupingInterval: 2 * 1e3,
    loadingTimeout: ud ? 5e3 : 3e3,
    // providers
    compare: w0,
    isPaused: () => !1,
    cache: Xp,
    mutate: _0,
    fallback: {}
  },
  // use web preset by default
  f0
), k0 = (e, t) => {
  const n = wn(e, t);
  if (t) {
    const { use: r, fallback: a } = e, { use: i, fallback: o } = t;
    r && i && (n.use = r.concat(i)), a && o && (n.fallback = wn(a, o));
  }
  return n;
}, S0 = he.createContext({}), T0 = "$inf$", Gp = xo && window.__SWR_DEVTOOLS_USE__, C0 = Gp ? window.__SWR_DEVTOOLS_USE__ : [], E0 = () => {
  Gp && (window.__SWR_DEVTOOLS_REACT__ = ao);
}, O0 = (e) => Yt(e[1]) ? [
  e[0],
  e[1],
  e[2] || {}
] : [
  e[0],
  null,
  (e[1] === null ? e[2] : e[1]) || {}
], D0 = () => wn(x0, he.useContext(S0)), M0 = (e) => (t, n, r) => e(t, n && ((...i) => {
  const [o] = Vs(t), [, , , u] = Ft.get(Xp);
  if (o.startsWith(T0))
    return n(...i);
  const l = u[o];
  return Y(l) ? n(...i) : (delete u[o], l);
}), r), N0 = C0.concat(M0), P0 = (e) => function(...n) {
  const r = D0(), [a, i, o] = O0(n), u = k0(r, o);
  let l = e;
  const { use: s } = u, p = (s || []).concat(N0);
  for (let h = p.length; h--; )
    l = p[h](l);
  return l(a, i || u.fetcher || null, u);
}, R0 = (e, t, n) => {
  const r = t[e] || (t[e] = []);
  return r.push(n), () => {
    const a = r.indexOf(n);
    a >= 0 && (r[a] = r[r.length - 1], r.pop());
  };
};
E0();
const sd = ao.use || ((e) => {
  if (e.status === "pending")
    throw e;
  if (e.status === "fulfilled")
    return e.value;
  throw e.status === "rejected" ? e.reason : (e.status = "pending", e.then((t) => {
    e.status = "fulfilled", e.value = t;
  }, (t) => {
    e.status = "rejected", e.reason = t;
  }), e);
}), ru = {
  dedupe: !0
}, L0 = (e, t, n) => {
  const { cache: r, compare: a, suspense: i, fallbackData: o, revalidateOnMount: u, revalidateIfStale: l, refreshInterval: s, refreshWhenHidden: p, refreshWhenOffline: h, keepPreviousData: v } = n, [y, w, k, x] = Ft.get(r), [c, d] = Vs(e), f = he.useRef(!1), m = he.useRef(!1), g = he.useRef(c), _ = he.useRef(t), S = he.useRef(n), E = () => S.current, $ = () => E().isVisible() && E().isOnline(), [P, ee, Oe, ge] = Zp(r, c), te = he.useRef({}).current, pe = Y(o) ? n.fallback[c] : o, ye = (q, X) => {
    for (const xe in te) {
      const ae = xe;
      if (ae === "data") {
        if (!a(q[ae], X[ae]) && (!Y(q[ae]) || !a(it, X[ae])))
          return !1;
      } else if (X[ae] !== q[ae])
        return !1;
    }
    return !0;
  }, Le = he.useMemo(() => {
    const q = !c || !t ? !1 : Y(u) ? E().isPaused() || i ? !1 : Y(l) ? !0 : l : u, X = (Ue) => {
      const jt = wn(Ue);
      return delete jt._k, q ? {
        isValidating: !0,
        isLoading: !0,
        ...jt
      } : jt;
    }, xe = P(), ae = ge(), ne = X(xe), Ie = xe === ae ? ne : X(ae);
    let de = ne;
    return [
      () => {
        const Ue = X(P());
        return ye(Ue, de) ? (de.data = Ue.data, de.isLoading = Ue.isLoading, de.isValidating = Ue.isValidating, de.error = Ue.error, de) : (de = Ue, Ue);
      },
      () => Ie
    ];
  }, [
    r,
    c
  ]), O = a0.useSyncExternalStore(he.useCallback(
    (q) => Oe(c, (X, xe) => {
      ye(xe, X) || q();
    }),
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [
      r,
      c
    ]
  ), Le[0], Le[1]), I = !f.current, U = y[c] && y[c].length > 0, b = O.data, H = Y(b) ? pe : b, Ge = O.error, Ve = he.useRef(H), it = v ? Y(b) ? Ve.current : b : H, ot = U && !Y(Ge) ? !1 : I && !Y(u) ? u : E().isPaused() ? !1 : i ? Y(H) ? !1 : l : Y(H) || l, Ke = !!(c && t && I && ot), En = Y(O.isValidating) ? Ke : O.isValidating, Rr = Y(O.isLoading) ? Ke : O.isLoading, Ut = he.useCallback(
    async (q) => {
      const X = _.current;
      if (!c || !X || m.current || E().isPaused())
        return !1;
      let xe, ae, ne = !0;
      const Ie = q || {}, de = !k[c] || !Ie.dedupe, Ue = () => od ? !m.current && c === g.current && f.current : c === g.current, jt = {
        isValidating: !1,
        isLoading: !1
      }, Qs = () => {
        ee(jt);
      }, qs = () => {
        const ut = k[c];
        ut && ut[1] === ae && delete k[c];
      }, Xs = {
        isValidating: !0
      };
      Y(P().data) && (Xs.isLoading = !0);
      try {
        if (de && (ee(Xs), n.loadingTimeout && Y(P().data) && setTimeout(() => {
          ne && Ue() && E().onLoadingSlow(c, n);
        }, n.loadingTimeout), k[c] = [
          X(d),
          ll()
        ]), [xe, ae] = k[c], xe = await xe, de && setTimeout(qs, n.dedupingInterval), !k[c] || k[c][1] !== ae)
          return de && Ue() && E().onDiscarded(c), !1;
        jt.error = He;
        const ut = w[c];
        if (!Y(ut) && // case 1
        (ae <= ut[0] || // case 2
        ae <= ut[1] || // case 3
        ut[1] === 0))
          return Qs(), de && Ue() && E().onDiscarded(c), !1;
        const zt = P().data;
        jt.data = a(zt, xe) ? zt : xe, de && Ue() && E().onSuccess(xe, c, n);
      } catch (ut) {
        qs();
        const zt = E(), { shouldRetryOnError: To } = zt;
        zt.isPaused() || (jt.error = ut, de && Ue() && (zt.onError(ut, c, zt), (To === !0 || Yt(To) && To(ut)) && $() && zt.onErrorRetry(ut, c, zt, (Sm) => {
          const Co = y[c];
          Co && Co[0] && Co[0](Ar.ERROR_REVALIDATE_EVENT, Sm);
        }, {
          retryCount: (Ie.retryCount || 0) + 1,
          dedupe: !0
        })));
      }
      return ne = !1, Qs(), !0;
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
  ), On = he.useCallback(
    // Use callback to make sure `keyRef.current` returns latest result every time
    (...q) => qp(r, g.current, ...q),
    // eslint-disable-next-line react-hooks/exhaustive-deps
    []
  );
  if (tu(() => {
    _.current = t, S.current = n, Y(b) || (Ve.current = b);
  }), tu(() => {
    if (!c)
      return;
    const q = Ut.bind(He, ru);
    let X = 0;
    const ae = R0(c, y, (ne, Ie = {}) => {
      if (ne == Ar.FOCUS_EVENT) {
        const de = Date.now();
        E().revalidateOnFocus && de > X && $() && (X = de + E().focusThrottleInterval, q());
      } else if (ne == Ar.RECONNECT_EVENT)
        E().revalidateOnReconnect && $() && q();
      else {
        if (ne == Ar.MUTATE_EVENT)
          return Ut();
        if (ne == Ar.ERROR_REVALIDATE_EVENT)
          return Ut(Ie);
      }
    });
    return m.current = !1, g.current = c, f.current = !0, ee({
      _k: d
    }), ot && (Y(H) || xa ? q() : m0(q)), () => {
      m.current = !0, ae();
    };
  }, [
    c
  ]), tu(() => {
    let q;
    function X() {
      const ae = Yt(s) ? s(P().data) : s;
      ae && q !== -1 && (q = setTimeout(xe, ae));
    }
    function xe() {
      !P().error && (p || E().isVisible()) && (h || E().isOnline()) ? Ut(ru).then(X) : X();
    }
    return X(), () => {
      q && (clearTimeout(q), q = -1);
    };
  }, [
    s,
    p,
    h,
    c
  ]), he.useDebugValue(it), i && Y(H) && c) {
    if (!od && xa)
      throw new Error("Fallback data is required when using suspense in SSR.");
    _.current = t, S.current = n, m.current = !1;
    const q = x[c];
    if (!Y(q)) {
      const X = On(q);
      sd(X);
    }
    if (Y(Ge)) {
      const X = Ut(ru);
      Y(it) || (X.status = "fulfilled", X.value = !0), sd(X);
    } else
      throw Ge;
  }
  return {
    mutate: On,
    get data() {
      return te.data = !0, it;
    },
    get error() {
      return te.error = !0, Ge;
    },
    get isValidating() {
      return te.isValidating = !0, En;
    },
    get isLoading() {
      return te.isLoading = !0, Rr;
    }
  };
}, I0 = P0(L0);
var V;
(function(e) {
  e.assertEqual = (a) => a;
  function t(a) {
  }
  e.assertIs = t;
  function n(a) {
    throw new Error();
  }
  e.assertNever = n, e.arrayToEnum = (a) => {
    const i = {};
    for (const o of a)
      i[o] = o;
    return i;
  }, e.getValidEnumValues = (a) => {
    const i = e.objectKeys(a).filter((u) => typeof a[a[u]] != "number"), o = {};
    for (const u of i)
      o[u] = a[u];
    return e.objectValues(o);
  }, e.objectValues = (a) => e.objectKeys(a).map(function(i) {
    return a[i];
  }), e.objectKeys = typeof Object.keys == "function" ? (a) => Object.keys(a) : (a) => {
    const i = [];
    for (const o in a)
      Object.prototype.hasOwnProperty.call(a, o) && i.push(o);
    return i;
  }, e.find = (a, i) => {
    for (const o of a)
      if (i(o))
        return o;
  }, e.isInteger = typeof Number.isInteger == "function" ? (a) => Number.isInteger(a) : (a) => typeof a == "number" && isFinite(a) && Math.floor(a) === a;
  function r(a, i = " | ") {
    return a.map((o) => typeof o == "string" ? `'${o}'` : o).join(i);
  }
  e.joinValues = r, e.jsonStringifyReplacer = (a, i) => typeof i == "bigint" ? i.toString() : i;
})(V || (V = {}));
var sl;
(function(e) {
  e.mergeShapes = (t, n) => ({
    ...t,
    ...n
    // second overwrites first
  });
})(sl || (sl = {}));
const D = V.arrayToEnum([
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
]), an = (e) => {
  switch (typeof e) {
    case "undefined":
      return D.undefined;
    case "string":
      return D.string;
    case "number":
      return isNaN(e) ? D.nan : D.number;
    case "boolean":
      return D.boolean;
    case "function":
      return D.function;
    case "bigint":
      return D.bigint;
    case "symbol":
      return D.symbol;
    case "object":
      return Array.isArray(e) ? D.array : e === null ? D.null : e.then && typeof e.then == "function" && e.catch && typeof e.catch == "function" ? D.promise : typeof Map < "u" && e instanceof Map ? D.map : typeof Set < "u" && e instanceof Set ? D.set : typeof Date < "u" && e instanceof Date ? D.date : D.object;
    default:
      return D.unknown;
  }
}, C = V.arrayToEnum([
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
]), U0 = (e) => JSON.stringify(e, null, 2).replace(/"([^"]+)":/g, "$1:");
class xt extends Error {
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
    const n = t || function(i) {
      return i.message;
    }, r = { _errors: [] }, a = (i) => {
      for (const o of i.issues)
        if (o.code === "invalid_union")
          o.unionErrors.map(a);
        else if (o.code === "invalid_return_type")
          a(o.returnTypeError);
        else if (o.code === "invalid_arguments")
          a(o.argumentsError);
        else if (o.path.length === 0)
          r._errors.push(n(o));
        else {
          let u = r, l = 0;
          for (; l < o.path.length; ) {
            const s = o.path[l];
            l === o.path.length - 1 ? (u[s] = u[s] || { _errors: [] }, u[s]._errors.push(n(o))) : u[s] = u[s] || { _errors: [] }, u = u[s], l++;
          }
        }
    };
    return a(this), r;
  }
  toString() {
    return this.message;
  }
  get message() {
    return JSON.stringify(this.issues, V.jsonStringifyReplacer, 2);
  }
  get isEmpty() {
    return this.issues.length === 0;
  }
  flatten(t = (n) => n.message) {
    const n = {}, r = [];
    for (const a of this.issues)
      a.path.length > 0 ? (n[a.path[0]] = n[a.path[0]] || [], n[a.path[0]].push(t(a))) : r.push(t(a));
    return { formErrors: r, fieldErrors: n };
  }
  get formErrors() {
    return this.flatten();
  }
}
xt.create = (e) => new xt(e);
const ka = (e, t) => {
  let n;
  switch (e.code) {
    case C.invalid_type:
      e.received === D.undefined ? n = "Required" : n = `Expected ${e.expected}, received ${e.received}`;
      break;
    case C.invalid_literal:
      n = `Invalid literal value, expected ${JSON.stringify(e.expected, V.jsonStringifyReplacer)}`;
      break;
    case C.unrecognized_keys:
      n = `Unrecognized key(s) in object: ${V.joinValues(e.keys, ", ")}`;
      break;
    case C.invalid_union:
      n = "Invalid input";
      break;
    case C.invalid_union_discriminator:
      n = `Invalid discriminator value. Expected ${V.joinValues(e.options)}`;
      break;
    case C.invalid_enum_value:
      n = `Invalid enum value. Expected ${V.joinValues(e.options)}, received '${e.received}'`;
      break;
    case C.invalid_arguments:
      n = "Invalid function arguments";
      break;
    case C.invalid_return_type:
      n = "Invalid function return type";
      break;
    case C.invalid_date:
      n = "Invalid date";
      break;
    case C.invalid_string:
      typeof e.validation == "object" ? "includes" in e.validation ? (n = `Invalid input: must include "${e.validation.includes}"`, typeof e.validation.position == "number" && (n = `${n} at one or more positions greater than or equal to ${e.validation.position}`)) : "startsWith" in e.validation ? n = `Invalid input: must start with "${e.validation.startsWith}"` : "endsWith" in e.validation ? n = `Invalid input: must end with "${e.validation.endsWith}"` : V.assertNever(e.validation) : e.validation !== "regex" ? n = `Invalid ${e.validation}` : n = "Invalid";
      break;
    case C.too_small:
      e.type === "array" ? n = `Array must contain ${e.exact ? "exactly" : e.inclusive ? "at least" : "more than"} ${e.minimum} element(s)` : e.type === "string" ? n = `String must contain ${e.exact ? "exactly" : e.inclusive ? "at least" : "over"} ${e.minimum} character(s)` : e.type === "number" ? n = `Number must be ${e.exact ? "exactly equal to " : e.inclusive ? "greater than or equal to " : "greater than "}${e.minimum}` : e.type === "date" ? n = `Date must be ${e.exact ? "exactly equal to " : e.inclusive ? "greater than or equal to " : "greater than "}${new Date(Number(e.minimum))}` : n = "Invalid input";
      break;
    case C.too_big:
      e.type === "array" ? n = `Array must contain ${e.exact ? "exactly" : e.inclusive ? "at most" : "less than"} ${e.maximum} element(s)` : e.type === "string" ? n = `String must contain ${e.exact ? "exactly" : e.inclusive ? "at most" : "under"} ${e.maximum} character(s)` : e.type === "number" ? n = `Number must be ${e.exact ? "exactly" : e.inclusive ? "less than or equal to" : "less than"} ${e.maximum}` : e.type === "bigint" ? n = `BigInt must be ${e.exact ? "exactly" : e.inclusive ? "less than or equal to" : "less than"} ${e.maximum}` : e.type === "date" ? n = `Date must be ${e.exact ? "exactly" : e.inclusive ? "smaller than or equal to" : "smaller than"} ${new Date(Number(e.maximum))}` : n = "Invalid input";
      break;
    case C.custom:
      n = "Invalid input";
      break;
    case C.invalid_intersection_types:
      n = "Intersection results could not be merged";
      break;
    case C.not_multiple_of:
      n = `Number must be a multiple of ${e.multipleOf}`;
      break;
    case C.not_finite:
      n = "Number must be finite";
      break;
    default:
      n = t.defaultError, V.assertNever(e);
  }
  return { message: n };
};
let Kp = ka;
function j0(e) {
  Kp = e;
}
function Vi() {
  return Kp;
}
const Zi = (e) => {
  const { data: t, path: n, errorMaps: r, issueData: a } = e, i = [...n, ...a.path || []], o = {
    ...a,
    path: i
  };
  let u = "";
  const l = r.filter((s) => !!s).slice().reverse();
  for (const s of l)
    u = s(o, { data: t, defaultError: u }).message;
  return {
    ...a,
    path: i,
    message: a.message || u
  };
}, z0 = [];
function M(e, t) {
  const n = Zi({
    issueData: t,
    data: e.data,
    path: e.path,
    errorMaps: [
      e.common.contextualErrorMap,
      e.schemaErrorMap,
      Vi(),
      ka
      // then global default map
    ].filter((r) => !!r)
  });
  e.common.issues.push(n);
}
class Re {
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
    for (const a of n) {
      if (a.status === "aborted")
        return j;
      a.status === "dirty" && t.dirty(), r.push(a.value);
    }
    return { status: t.value, value: r };
  }
  static async mergeObjectAsync(t, n) {
    const r = [];
    for (const a of n)
      r.push({
        key: await a.key,
        value: await a.value
      });
    return Re.mergeObjectSync(t, r);
  }
  static mergeObjectSync(t, n) {
    const r = {};
    for (const a of n) {
      const { key: i, value: o } = a;
      if (i.status === "aborted" || o.status === "aborted")
        return j;
      i.status === "dirty" && t.dirty(), o.status === "dirty" && t.dirty(), i.value !== "__proto__" && (typeof o.value < "u" || a.alwaysSet) && (r[i.value] = o.value);
    }
    return { status: t.value, value: r };
  }
}
const j = Object.freeze({
  status: "aborted"
}), Jp = (e) => ({ status: "dirty", value: e }), We = (e) => ({ status: "valid", value: e }), cl = (e) => e.status === "aborted", dl = (e) => e.status === "dirty", Sa = (e) => e.status === "valid", Hi = (e) => typeof Promise < "u" && e instanceof Promise;
var R;
(function(e) {
  e.errToObj = (t) => typeof t == "string" ? { message: t } : t || {}, e.toString = (t) => typeof t == "string" ? t : t == null ? void 0 : t.message;
})(R || (R = {}));
class Pt {
  constructor(t, n, r, a) {
    this._cachedPath = [], this.parent = t, this.data = n, this._path = r, this._key = a;
  }
  get path() {
    return this._cachedPath.length || (this._key instanceof Array ? this._cachedPath.push(...this._path, ...this._key) : this._cachedPath.push(...this._path, this._key)), this._cachedPath;
  }
}
const cd = (e, t) => {
  if (Sa(t))
    return { success: !0, data: t.value };
  if (!e.common.issues.length)
    throw new Error("Validation failed but no issues detected.");
  return {
    success: !1,
    get error() {
      if (this._error)
        return this._error;
      const n = new xt(e.common.issues);
      return this._error = n, this._error;
    }
  };
};
function z(e) {
  if (!e)
    return {};
  const { errorMap: t, invalid_type_error: n, required_error: r, description: a } = e;
  if (t && (n || r))
    throw new Error(`Can't use "invalid_type_error" or "required_error" in conjunction with custom error map.`);
  return t ? { errorMap: t, description: a } : { errorMap: (o, u) => o.code !== "invalid_type" ? { message: u.defaultError } : typeof u.data > "u" ? { message: r ?? u.defaultError } : { message: n ?? u.defaultError }, description: a };
}
class W {
  constructor(t) {
    this.spa = this.safeParseAsync, this._def = t, this.parse = this.parse.bind(this), this.safeParse = this.safeParse.bind(this), this.parseAsync = this.parseAsync.bind(this), this.safeParseAsync = this.safeParseAsync.bind(this), this.spa = this.spa.bind(this), this.refine = this.refine.bind(this), this.refinement = this.refinement.bind(this), this.superRefine = this.superRefine.bind(this), this.optional = this.optional.bind(this), this.nullable = this.nullable.bind(this), this.nullish = this.nullish.bind(this), this.array = this.array.bind(this), this.promise = this.promise.bind(this), this.or = this.or.bind(this), this.and = this.and.bind(this), this.transform = this.transform.bind(this), this.brand = this.brand.bind(this), this.default = this.default.bind(this), this.catch = this.catch.bind(this), this.describe = this.describe.bind(this), this.pipe = this.pipe.bind(this), this.readonly = this.readonly.bind(this), this.isNullable = this.isNullable.bind(this), this.isOptional = this.isOptional.bind(this);
  }
  get description() {
    return this._def.description;
  }
  _getType(t) {
    return an(t.data);
  }
  _getOrReturnCtx(t, n) {
    return n || {
      common: t.parent.common,
      data: t.data,
      parsedType: an(t.data),
      schemaErrorMap: this._def.errorMap,
      path: t.path,
      parent: t.parent
    };
  }
  _processInputParams(t) {
    return {
      status: new Re(),
      ctx: {
        common: t.parent.common,
        data: t.data,
        parsedType: an(t.data),
        schemaErrorMap: this._def.errorMap,
        path: t.path,
        parent: t.parent
      }
    };
  }
  _parseSync(t) {
    const n = this._parse(t);
    if (Hi(n))
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
    const a = {
      common: {
        issues: [],
        async: (r = n == null ? void 0 : n.async) !== null && r !== void 0 ? r : !1,
        contextualErrorMap: n == null ? void 0 : n.errorMap
      },
      path: (n == null ? void 0 : n.path) || [],
      schemaErrorMap: this._def.errorMap,
      parent: null,
      data: t,
      parsedType: an(t)
    }, i = this._parseSync({ data: t, path: a.path, parent: a });
    return cd(a, i);
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
      parsedType: an(t)
    }, a = this._parse({ data: t, path: r.path, parent: r }), i = await (Hi(a) ? a : Promise.resolve(a));
    return cd(r, i);
  }
  refine(t, n) {
    const r = (a) => typeof n == "string" || typeof n > "u" ? { message: n } : typeof n == "function" ? n(a) : n;
    return this._refinement((a, i) => {
      const o = t(a), u = () => i.addIssue({
        code: C.custom,
        ...r(a)
      });
      return typeof Promise < "u" && o instanceof Promise ? o.then((l) => l ? !0 : (u(), !1)) : o ? !0 : (u(), !1);
    });
  }
  refinement(t, n) {
    return this._refinement((r, a) => t(r) ? !0 : (a.addIssue(typeof n == "function" ? n(r, a) : n), !1));
  }
  _refinement(t) {
    return new Tt({
      schema: this,
      typeName: L.ZodEffects,
      effect: { type: "refinement", refinement: t }
    });
  }
  superRefine(t) {
    return this._refinement(t);
  }
  optional() {
    return Zt.create(this, this._def);
  }
  nullable() {
    return Vn.create(this, this._def);
  }
  nullish() {
    return this.nullable().optional();
  }
  array() {
    return kt.create(this, this._def);
  }
  promise() {
    return Dr.create(this, this._def);
  }
  or(t) {
    return Oa.create([this, t], this._def);
  }
  and(t) {
    return Da.create(this, t, this._def);
  }
  transform(t) {
    return new Tt({
      ...z(this._def),
      schema: this,
      typeName: L.ZodEffects,
      effect: { type: "transform", transform: t }
    });
  }
  default(t) {
    const n = typeof t == "function" ? t : () => t;
    return new La({
      ...z(this._def),
      innerType: this,
      defaultValue: n,
      typeName: L.ZodDefault
    });
  }
  brand() {
    return new tm({
      typeName: L.ZodBranded,
      type: this,
      ...z(this._def)
    });
  }
  catch(t) {
    const n = typeof t == "function" ? t : () => t;
    return new Xi({
      ...z(this._def),
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
    return Fa.create(this, t);
  }
  readonly() {
    return Ki.create(this);
  }
  isOptional() {
    return this.safeParse(void 0).success;
  }
  isNullable() {
    return this.safeParse(null).success;
  }
}
const $0 = /^c[^\s-]{8,}$/i, W0 = /^[a-z][a-z0-9]*$/, F0 = /^[0-9A-HJKMNP-TV-Z]{26}$/, A0 = /^[0-9a-fA-F]{8}\b-[0-9a-fA-F]{4}\b-[0-9a-fA-F]{4}\b-[0-9a-fA-F]{4}\b-[0-9a-fA-F]{12}$/i, b0 = /^(?!\.)(?!.*\.\.)([A-Z0-9_+-\.]*)[A-Z0-9_+-]@([A-Z0-9][A-Z0-9\-]*\.)+[A-Z]{2,}$/i, Y0 = "^(\\p{Extended_Pictographic}|\\p{Emoji_Component})+$";
let au;
const V0 = /^(((25[0-5])|(2[0-4][0-9])|(1[0-9]{2})|([0-9]{1,2}))\.){3}((25[0-5])|(2[0-4][0-9])|(1[0-9]{2})|([0-9]{1,2}))$/, Z0 = /^(([a-f0-9]{1,4}:){7}|::([a-f0-9]{1,4}:){0,6}|([a-f0-9]{1,4}:){1}:([a-f0-9]{1,4}:){0,5}|([a-f0-9]{1,4}:){2}:([a-f0-9]{1,4}:){0,4}|([a-f0-9]{1,4}:){3}:([a-f0-9]{1,4}:){0,3}|([a-f0-9]{1,4}:){4}:([a-f0-9]{1,4}:){0,2}|([a-f0-9]{1,4}:){5}:([a-f0-9]{1,4}:){0,1})([a-f0-9]{1,4}|(((25[0-5])|(2[0-4][0-9])|(1[0-9]{2})|([0-9]{1,2}))\.){3}((25[0-5])|(2[0-4][0-9])|(1[0-9]{2})|([0-9]{1,2})))$/, H0 = (e) => e.precision ? e.offset ? new RegExp(`^\\d{4}-\\d{2}-\\d{2}T\\d{2}:\\d{2}:\\d{2}\\.\\d{${e.precision}}(([+-]\\d{2}(:?\\d{2})?)|Z)$`) : new RegExp(`^\\d{4}-\\d{2}-\\d{2}T\\d{2}:\\d{2}:\\d{2}\\.\\d{${e.precision}}Z$`) : e.precision === 0 ? e.offset ? new RegExp("^\\d{4}-\\d{2}-\\d{2}T\\d{2}:\\d{2}:\\d{2}(([+-]\\d{2}(:?\\d{2})?)|Z)$") : new RegExp("^\\d{4}-\\d{2}-\\d{2}T\\d{2}:\\d{2}:\\d{2}Z$") : e.offset ? new RegExp("^\\d{4}-\\d{2}-\\d{2}T\\d{2}:\\d{2}:\\d{2}(\\.\\d+)?(([+-]\\d{2}(:?\\d{2})?)|Z)$") : new RegExp("^\\d{4}-\\d{2}-\\d{2}T\\d{2}:\\d{2}:\\d{2}(\\.\\d+)?Z$");
function B0(e, t) {
  return !!((t === "v4" || !t) && V0.test(e) || (t === "v6" || !t) && Z0.test(e));
}
class yt extends W {
  _parse(t) {
    if (this._def.coerce && (t.data = String(t.data)), this._getType(t) !== D.string) {
      const i = this._getOrReturnCtx(t);
      return M(
        i,
        {
          code: C.invalid_type,
          expected: D.string,
          received: i.parsedType
        }
        //
      ), j;
    }
    const r = new Re();
    let a;
    for (const i of this._def.checks)
      if (i.kind === "min")
        t.data.length < i.value && (a = this._getOrReturnCtx(t, a), M(a, {
          code: C.too_small,
          minimum: i.value,
          type: "string",
          inclusive: !0,
          exact: !1,
          message: i.message
        }), r.dirty());
      else if (i.kind === "max")
        t.data.length > i.value && (a = this._getOrReturnCtx(t, a), M(a, {
          code: C.too_big,
          maximum: i.value,
          type: "string",
          inclusive: !0,
          exact: !1,
          message: i.message
        }), r.dirty());
      else if (i.kind === "length") {
        const o = t.data.length > i.value, u = t.data.length < i.value;
        (o || u) && (a = this._getOrReturnCtx(t, a), o ? M(a, {
          code: C.too_big,
          maximum: i.value,
          type: "string",
          inclusive: !0,
          exact: !0,
          message: i.message
        }) : u && M(a, {
          code: C.too_small,
          minimum: i.value,
          type: "string",
          inclusive: !0,
          exact: !0,
          message: i.message
        }), r.dirty());
      } else if (i.kind === "email")
        b0.test(t.data) || (a = this._getOrReturnCtx(t, a), M(a, {
          validation: "email",
          code: C.invalid_string,
          message: i.message
        }), r.dirty());
      else if (i.kind === "emoji")
        au || (au = new RegExp(Y0, "u")), au.test(t.data) || (a = this._getOrReturnCtx(t, a), M(a, {
          validation: "emoji",
          code: C.invalid_string,
          message: i.message
        }), r.dirty());
      else if (i.kind === "uuid")
        A0.test(t.data) || (a = this._getOrReturnCtx(t, a), M(a, {
          validation: "uuid",
          code: C.invalid_string,
          message: i.message
        }), r.dirty());
      else if (i.kind === "cuid")
        $0.test(t.data) || (a = this._getOrReturnCtx(t, a), M(a, {
          validation: "cuid",
          code: C.invalid_string,
          message: i.message
        }), r.dirty());
      else if (i.kind === "cuid2")
        W0.test(t.data) || (a = this._getOrReturnCtx(t, a), M(a, {
          validation: "cuid2",
          code: C.invalid_string,
          message: i.message
        }), r.dirty());
      else if (i.kind === "ulid")
        F0.test(t.data) || (a = this._getOrReturnCtx(t, a), M(a, {
          validation: "ulid",
          code: C.invalid_string,
          message: i.message
        }), r.dirty());
      else if (i.kind === "url")
        try {
          new URL(t.data);
        } catch {
          a = this._getOrReturnCtx(t, a), M(a, {
            validation: "url",
            code: C.invalid_string,
            message: i.message
          }), r.dirty();
        }
      else
        i.kind === "regex" ? (i.regex.lastIndex = 0, i.regex.test(t.data) || (a = this._getOrReturnCtx(t, a), M(a, {
          validation: "regex",
          code: C.invalid_string,
          message: i.message
        }), r.dirty())) : i.kind === "trim" ? t.data = t.data.trim() : i.kind === "includes" ? t.data.includes(i.value, i.position) || (a = this._getOrReturnCtx(t, a), M(a, {
          code: C.invalid_string,
          validation: { includes: i.value, position: i.position },
          message: i.message
        }), r.dirty()) : i.kind === "toLowerCase" ? t.data = t.data.toLowerCase() : i.kind === "toUpperCase" ? t.data = t.data.toUpperCase() : i.kind === "startsWith" ? t.data.startsWith(i.value) || (a = this._getOrReturnCtx(t, a), M(a, {
          code: C.invalid_string,
          validation: { startsWith: i.value },
          message: i.message
        }), r.dirty()) : i.kind === "endsWith" ? t.data.endsWith(i.value) || (a = this._getOrReturnCtx(t, a), M(a, {
          code: C.invalid_string,
          validation: { endsWith: i.value },
          message: i.message
        }), r.dirty()) : i.kind === "datetime" ? H0(i).test(t.data) || (a = this._getOrReturnCtx(t, a), M(a, {
          code: C.invalid_string,
          validation: "datetime",
          message: i.message
        }), r.dirty()) : i.kind === "ip" ? B0(t.data, i.version) || (a = this._getOrReturnCtx(t, a), M(a, {
          validation: "ip",
          code: C.invalid_string,
          message: i.message
        }), r.dirty()) : V.assertNever(i);
    return { status: r.value, value: t.data };
  }
  _regex(t, n, r) {
    return this.refinement((a) => t.test(a), {
      validation: n,
      code: C.invalid_string,
      ...R.errToObj(r)
    });
  }
  _addCheck(t) {
    return new yt({
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
    return new yt({
      ...this._def,
      checks: [...this._def.checks, { kind: "trim" }]
    });
  }
  toLowerCase() {
    return new yt({
      ...this._def,
      checks: [...this._def.checks, { kind: "toLowerCase" }]
    });
  }
  toUpperCase() {
    return new yt({
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
yt.create = (e) => {
  var t;
  return new yt({
    checks: [],
    typeName: L.ZodString,
    coerce: (t = e == null ? void 0 : e.coerce) !== null && t !== void 0 ? t : !1,
    ...z(e)
  });
};
function Q0(e, t) {
  const n = (e.toString().split(".")[1] || "").length, r = (t.toString().split(".")[1] || "").length, a = n > r ? n : r, i = parseInt(e.toFixed(a).replace(".", "")), o = parseInt(t.toFixed(a).replace(".", ""));
  return i % o / Math.pow(10, a);
}
class _n extends W {
  constructor() {
    super(...arguments), this.min = this.gte, this.max = this.lte, this.step = this.multipleOf;
  }
  _parse(t) {
    if (this._def.coerce && (t.data = Number(t.data)), this._getType(t) !== D.number) {
      const i = this._getOrReturnCtx(t);
      return M(i, {
        code: C.invalid_type,
        expected: D.number,
        received: i.parsedType
      }), j;
    }
    let r;
    const a = new Re();
    for (const i of this._def.checks)
      i.kind === "int" ? V.isInteger(t.data) || (r = this._getOrReturnCtx(t, r), M(r, {
        code: C.invalid_type,
        expected: "integer",
        received: "float",
        message: i.message
      }), a.dirty()) : i.kind === "min" ? (i.inclusive ? t.data < i.value : t.data <= i.value) && (r = this._getOrReturnCtx(t, r), M(r, {
        code: C.too_small,
        minimum: i.value,
        type: "number",
        inclusive: i.inclusive,
        exact: !1,
        message: i.message
      }), a.dirty()) : i.kind === "max" ? (i.inclusive ? t.data > i.value : t.data >= i.value) && (r = this._getOrReturnCtx(t, r), M(r, {
        code: C.too_big,
        maximum: i.value,
        type: "number",
        inclusive: i.inclusive,
        exact: !1,
        message: i.message
      }), a.dirty()) : i.kind === "multipleOf" ? Q0(t.data, i.value) !== 0 && (r = this._getOrReturnCtx(t, r), M(r, {
        code: C.not_multiple_of,
        multipleOf: i.value,
        message: i.message
      }), a.dirty()) : i.kind === "finite" ? Number.isFinite(t.data) || (r = this._getOrReturnCtx(t, r), M(r, {
        code: C.not_finite,
        message: i.message
      }), a.dirty()) : V.assertNever(i);
    return { status: a.value, value: t.data };
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
  setLimit(t, n, r, a) {
    return new _n({
      ...this._def,
      checks: [
        ...this._def.checks,
        {
          kind: t,
          value: n,
          inclusive: r,
          message: R.toString(a)
        }
      ]
    });
  }
  _addCheck(t) {
    return new _n({
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
    return !!this._def.checks.find((t) => t.kind === "int" || t.kind === "multipleOf" && V.isInteger(t.value));
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
_n.create = (e) => new _n({
  checks: [],
  typeName: L.ZodNumber,
  coerce: (e == null ? void 0 : e.coerce) || !1,
  ...z(e)
});
class xn extends W {
  constructor() {
    super(...arguments), this.min = this.gte, this.max = this.lte;
  }
  _parse(t) {
    if (this._def.coerce && (t.data = BigInt(t.data)), this._getType(t) !== D.bigint) {
      const i = this._getOrReturnCtx(t);
      return M(i, {
        code: C.invalid_type,
        expected: D.bigint,
        received: i.parsedType
      }), j;
    }
    let r;
    const a = new Re();
    for (const i of this._def.checks)
      i.kind === "min" ? (i.inclusive ? t.data < i.value : t.data <= i.value) && (r = this._getOrReturnCtx(t, r), M(r, {
        code: C.too_small,
        type: "bigint",
        minimum: i.value,
        inclusive: i.inclusive,
        message: i.message
      }), a.dirty()) : i.kind === "max" ? (i.inclusive ? t.data > i.value : t.data >= i.value) && (r = this._getOrReturnCtx(t, r), M(r, {
        code: C.too_big,
        type: "bigint",
        maximum: i.value,
        inclusive: i.inclusive,
        message: i.message
      }), a.dirty()) : i.kind === "multipleOf" ? t.data % i.value !== BigInt(0) && (r = this._getOrReturnCtx(t, r), M(r, {
        code: C.not_multiple_of,
        multipleOf: i.value,
        message: i.message
      }), a.dirty()) : V.assertNever(i);
    return { status: a.value, value: t.data };
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
  setLimit(t, n, r, a) {
    return new xn({
      ...this._def,
      checks: [
        ...this._def.checks,
        {
          kind: t,
          value: n,
          inclusive: r,
          message: R.toString(a)
        }
      ]
    });
  }
  _addCheck(t) {
    return new xn({
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
xn.create = (e) => {
  var t;
  return new xn({
    checks: [],
    typeName: L.ZodBigInt,
    coerce: (t = e == null ? void 0 : e.coerce) !== null && t !== void 0 ? t : !1,
    ...z(e)
  });
};
class Ta extends W {
  _parse(t) {
    if (this._def.coerce && (t.data = !!t.data), this._getType(t) !== D.boolean) {
      const r = this._getOrReturnCtx(t);
      return M(r, {
        code: C.invalid_type,
        expected: D.boolean,
        received: r.parsedType
      }), j;
    }
    return We(t.data);
  }
}
Ta.create = (e) => new Ta({
  typeName: L.ZodBoolean,
  coerce: (e == null ? void 0 : e.coerce) || !1,
  ...z(e)
});
class bn extends W {
  _parse(t) {
    if (this._def.coerce && (t.data = new Date(t.data)), this._getType(t) !== D.date) {
      const i = this._getOrReturnCtx(t);
      return M(i, {
        code: C.invalid_type,
        expected: D.date,
        received: i.parsedType
      }), j;
    }
    if (isNaN(t.data.getTime())) {
      const i = this._getOrReturnCtx(t);
      return M(i, {
        code: C.invalid_date
      }), j;
    }
    const r = new Re();
    let a;
    for (const i of this._def.checks)
      i.kind === "min" ? t.data.getTime() < i.value && (a = this._getOrReturnCtx(t, a), M(a, {
        code: C.too_small,
        message: i.message,
        inclusive: !0,
        exact: !1,
        minimum: i.value,
        type: "date"
      }), r.dirty()) : i.kind === "max" ? t.data.getTime() > i.value && (a = this._getOrReturnCtx(t, a), M(a, {
        code: C.too_big,
        message: i.message,
        inclusive: !0,
        exact: !1,
        maximum: i.value,
        type: "date"
      }), r.dirty()) : V.assertNever(i);
    return {
      status: r.value,
      value: new Date(t.data.getTime())
    };
  }
  _addCheck(t) {
    return new bn({
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
bn.create = (e) => new bn({
  checks: [],
  coerce: (e == null ? void 0 : e.coerce) || !1,
  typeName: L.ZodDate,
  ...z(e)
});
class Bi extends W {
  _parse(t) {
    if (this._getType(t) !== D.symbol) {
      const r = this._getOrReturnCtx(t);
      return M(r, {
        code: C.invalid_type,
        expected: D.symbol,
        received: r.parsedType
      }), j;
    }
    return We(t.data);
  }
}
Bi.create = (e) => new Bi({
  typeName: L.ZodSymbol,
  ...z(e)
});
class Ca extends W {
  _parse(t) {
    if (this._getType(t) !== D.undefined) {
      const r = this._getOrReturnCtx(t);
      return M(r, {
        code: C.invalid_type,
        expected: D.undefined,
        received: r.parsedType
      }), j;
    }
    return We(t.data);
  }
}
Ca.create = (e) => new Ca({
  typeName: L.ZodUndefined,
  ...z(e)
});
class Ea extends W {
  _parse(t) {
    if (this._getType(t) !== D.null) {
      const r = this._getOrReturnCtx(t);
      return M(r, {
        code: C.invalid_type,
        expected: D.null,
        received: r.parsedType
      }), j;
    }
    return We(t.data);
  }
}
Ea.create = (e) => new Ea({
  typeName: L.ZodNull,
  ...z(e)
});
class Or extends W {
  constructor() {
    super(...arguments), this._any = !0;
  }
  _parse(t) {
    return We(t.data);
  }
}
Or.create = (e) => new Or({
  typeName: L.ZodAny,
  ...z(e)
});
class jn extends W {
  constructor() {
    super(...arguments), this._unknown = !0;
  }
  _parse(t) {
    return We(t.data);
  }
}
jn.create = (e) => new jn({
  typeName: L.ZodUnknown,
  ...z(e)
});
class Xt extends W {
  _parse(t) {
    const n = this._getOrReturnCtx(t);
    return M(n, {
      code: C.invalid_type,
      expected: D.never,
      received: n.parsedType
    }), j;
  }
}
Xt.create = (e) => new Xt({
  typeName: L.ZodNever,
  ...z(e)
});
class Qi extends W {
  _parse(t) {
    if (this._getType(t) !== D.undefined) {
      const r = this._getOrReturnCtx(t);
      return M(r, {
        code: C.invalid_type,
        expected: D.void,
        received: r.parsedType
      }), j;
    }
    return We(t.data);
  }
}
Qi.create = (e) => new Qi({
  typeName: L.ZodVoid,
  ...z(e)
});
class kt extends W {
  _parse(t) {
    const { ctx: n, status: r } = this._processInputParams(t), a = this._def;
    if (n.parsedType !== D.array)
      return M(n, {
        code: C.invalid_type,
        expected: D.array,
        received: n.parsedType
      }), j;
    if (a.exactLength !== null) {
      const o = n.data.length > a.exactLength.value, u = n.data.length < a.exactLength.value;
      (o || u) && (M(n, {
        code: o ? C.too_big : C.too_small,
        minimum: u ? a.exactLength.value : void 0,
        maximum: o ? a.exactLength.value : void 0,
        type: "array",
        inclusive: !0,
        exact: !0,
        message: a.exactLength.message
      }), r.dirty());
    }
    if (a.minLength !== null && n.data.length < a.minLength.value && (M(n, {
      code: C.too_small,
      minimum: a.minLength.value,
      type: "array",
      inclusive: !0,
      exact: !1,
      message: a.minLength.message
    }), r.dirty()), a.maxLength !== null && n.data.length > a.maxLength.value && (M(n, {
      code: C.too_big,
      maximum: a.maxLength.value,
      type: "array",
      inclusive: !0,
      exact: !1,
      message: a.maxLength.message
    }), r.dirty()), n.common.async)
      return Promise.all([...n.data].map((o, u) => a.type._parseAsync(new Pt(n, o, n.path, u)))).then((o) => Re.mergeArray(r, o));
    const i = [...n.data].map((o, u) => a.type._parseSync(new Pt(n, o, n.path, u)));
    return Re.mergeArray(r, i);
  }
  get element() {
    return this._def.type;
  }
  min(t, n) {
    return new kt({
      ...this._def,
      minLength: { value: t, message: R.toString(n) }
    });
  }
  max(t, n) {
    return new kt({
      ...this._def,
      maxLength: { value: t, message: R.toString(n) }
    });
  }
  length(t, n) {
    return new kt({
      ...this._def,
      exactLength: { value: t, message: R.toString(n) }
    });
  }
  nonempty(t) {
    return this.min(1, t);
  }
}
kt.create = (e, t) => new kt({
  type: e,
  minLength: null,
  maxLength: null,
  exactLength: null,
  typeName: L.ZodArray,
  ...z(t)
});
function Kn(e) {
  if (e instanceof ie) {
    const t = {};
    for (const n in e.shape) {
      const r = e.shape[n];
      t[n] = Zt.create(Kn(r));
    }
    return new ie({
      ...e._def,
      shape: () => t
    });
  } else
    return e instanceof kt ? new kt({
      ...e._def,
      type: Kn(e.element)
    }) : e instanceof Zt ? Zt.create(Kn(e.unwrap())) : e instanceof Vn ? Vn.create(Kn(e.unwrap())) : e instanceof Rt ? Rt.create(e.items.map((t) => Kn(t))) : e;
}
class ie extends W {
  constructor() {
    super(...arguments), this._cached = null, this.nonstrict = this.passthrough, this.augment = this.extend;
  }
  _getCached() {
    if (this._cached !== null)
      return this._cached;
    const t = this._def.shape(), n = V.objectKeys(t);
    return this._cached = { shape: t, keys: n };
  }
  _parse(t) {
    if (this._getType(t) !== D.object) {
      const s = this._getOrReturnCtx(t);
      return M(s, {
        code: C.invalid_type,
        expected: D.object,
        received: s.parsedType
      }), j;
    }
    const { status: r, ctx: a } = this._processInputParams(t), { shape: i, keys: o } = this._getCached(), u = [];
    if (!(this._def.catchall instanceof Xt && this._def.unknownKeys === "strip"))
      for (const s in a.data)
        o.includes(s) || u.push(s);
    const l = [];
    for (const s of o) {
      const p = i[s], h = a.data[s];
      l.push({
        key: { status: "valid", value: s },
        value: p._parse(new Pt(a, h, a.path, s)),
        alwaysSet: s in a.data
      });
    }
    if (this._def.catchall instanceof Xt) {
      const s = this._def.unknownKeys;
      if (s === "passthrough")
        for (const p of u)
          l.push({
            key: { status: "valid", value: p },
            value: { status: "valid", value: a.data[p] }
          });
      else if (s === "strict")
        u.length > 0 && (M(a, {
          code: C.unrecognized_keys,
          keys: u
        }), r.dirty());
      else if (s !== "strip")
        throw new Error("Internal ZodObject error: invalid unknownKeys value.");
    } else {
      const s = this._def.catchall;
      for (const p of u) {
        const h = a.data[p];
        l.push({
          key: { status: "valid", value: p },
          value: s._parse(
            new Pt(a, h, a.path, p)
            //, ctx.child(key), value, getParsedType(value)
          ),
          alwaysSet: p in a.data
        });
      }
    }
    return a.common.async ? Promise.resolve().then(async () => {
      const s = [];
      for (const p of l) {
        const h = await p.key;
        s.push({
          key: h,
          value: await p.value,
          alwaysSet: p.alwaysSet
        });
      }
      return s;
    }).then((s) => Re.mergeObjectSync(r, s)) : Re.mergeObjectSync(r, l);
  }
  get shape() {
    return this._def.shape();
  }
  strict(t) {
    return R.errToObj, new ie({
      ...this._def,
      unknownKeys: "strict",
      ...t !== void 0 ? {
        errorMap: (n, r) => {
          var a, i, o, u;
          const l = (o = (i = (a = this._def).errorMap) === null || i === void 0 ? void 0 : i.call(a, n, r).message) !== null && o !== void 0 ? o : r.defaultError;
          return n.code === "unrecognized_keys" ? {
            message: (u = R.errToObj(t).message) !== null && u !== void 0 ? u : l
          } : {
            message: l
          };
        }
      } : {}
    });
  }
  strip() {
    return new ie({
      ...this._def,
      unknownKeys: "strip"
    });
  }
  passthrough() {
    return new ie({
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
    return new ie({
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
    return new ie({
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
    return new ie({
      ...this._def,
      catchall: t
    });
  }
  pick(t) {
    const n = {};
    return V.objectKeys(t).forEach((r) => {
      t[r] && this.shape[r] && (n[r] = this.shape[r]);
    }), new ie({
      ...this._def,
      shape: () => n
    });
  }
  omit(t) {
    const n = {};
    return V.objectKeys(this.shape).forEach((r) => {
      t[r] || (n[r] = this.shape[r]);
    }), new ie({
      ...this._def,
      shape: () => n
    });
  }
  /**
   * @deprecated
   */
  deepPartial() {
    return Kn(this);
  }
  partial(t) {
    const n = {};
    return V.objectKeys(this.shape).forEach((r) => {
      const a = this.shape[r];
      t && !t[r] ? n[r] = a : n[r] = a.optional();
    }), new ie({
      ...this._def,
      shape: () => n
    });
  }
  required(t) {
    const n = {};
    return V.objectKeys(this.shape).forEach((r) => {
      if (t && !t[r])
        n[r] = this.shape[r];
      else {
        let i = this.shape[r];
        for (; i instanceof Zt; )
          i = i._def.innerType;
        n[r] = i;
      }
    }), new ie({
      ...this._def,
      shape: () => n
    });
  }
  keyof() {
    return em(V.objectKeys(this.shape));
  }
}
ie.create = (e, t) => new ie({
  shape: () => e,
  unknownKeys: "strip",
  catchall: Xt.create(),
  typeName: L.ZodObject,
  ...z(t)
});
ie.strictCreate = (e, t) => new ie({
  shape: () => e,
  unknownKeys: "strict",
  catchall: Xt.create(),
  typeName: L.ZodObject,
  ...z(t)
});
ie.lazycreate = (e, t) => new ie({
  shape: e,
  unknownKeys: "strip",
  catchall: Xt.create(),
  typeName: L.ZodObject,
  ...z(t)
});
class Oa extends W {
  _parse(t) {
    const { ctx: n } = this._processInputParams(t), r = this._def.options;
    function a(i) {
      for (const u of i)
        if (u.result.status === "valid")
          return u.result;
      for (const u of i)
        if (u.result.status === "dirty")
          return n.common.issues.push(...u.ctx.common.issues), u.result;
      const o = i.map((u) => new xt(u.ctx.common.issues));
      return M(n, {
        code: C.invalid_union,
        unionErrors: o
      }), j;
    }
    if (n.common.async)
      return Promise.all(r.map(async (i) => {
        const o = {
          ...n,
          common: {
            ...n.common,
            issues: []
          },
          parent: null
        };
        return {
          result: await i._parseAsync({
            data: n.data,
            path: n.path,
            parent: o
          }),
          ctx: o
        };
      })).then(a);
    {
      let i;
      const o = [];
      for (const l of r) {
        const s = {
          ...n,
          common: {
            ...n.common,
            issues: []
          },
          parent: null
        }, p = l._parseSync({
          data: n.data,
          path: n.path,
          parent: s
        });
        if (p.status === "valid")
          return p;
        p.status === "dirty" && !i && (i = { result: p, ctx: s }), s.common.issues.length && o.push(s.common.issues);
      }
      if (i)
        return n.common.issues.push(...i.ctx.common.issues), i.result;
      const u = o.map((l) => new xt(l));
      return M(n, {
        code: C.invalid_union,
        unionErrors: u
      }), j;
    }
  }
  get options() {
    return this._def.options;
  }
}
Oa.create = (e, t) => new Oa({
  options: e,
  typeName: L.ZodUnion,
  ...z(t)
});
const wi = (e) => e instanceof Na ? wi(e.schema) : e instanceof Tt ? wi(e.innerType()) : e instanceof Pa ? [e.value] : e instanceof kn ? e.options : e instanceof Ra ? Object.keys(e.enum) : e instanceof La ? wi(e._def.innerType) : e instanceof Ca ? [void 0] : e instanceof Ea ? [null] : null;
class ko extends W {
  _parse(t) {
    const { ctx: n } = this._processInputParams(t);
    if (n.parsedType !== D.object)
      return M(n, {
        code: C.invalid_type,
        expected: D.object,
        received: n.parsedType
      }), j;
    const r = this.discriminator, a = n.data[r], i = this.optionsMap.get(a);
    return i ? n.common.async ? i._parseAsync({
      data: n.data,
      path: n.path,
      parent: n
    }) : i._parseSync({
      data: n.data,
      path: n.path,
      parent: n
    }) : (M(n, {
      code: C.invalid_union_discriminator,
      options: Array.from(this.optionsMap.keys()),
      path: [r]
    }), j);
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
    const a = /* @__PURE__ */ new Map();
    for (const i of n) {
      const o = wi(i.shape[t]);
      if (!o)
        throw new Error(`A discriminator value for key \`${t}\` could not be extracted from all schema options`);
      for (const u of o) {
        if (a.has(u))
          throw new Error(`Discriminator property ${String(t)} has duplicate value ${String(u)}`);
        a.set(u, i);
      }
    }
    return new ko({
      typeName: L.ZodDiscriminatedUnion,
      discriminator: t,
      options: n,
      optionsMap: a,
      ...z(r)
    });
  }
}
function fl(e, t) {
  const n = an(e), r = an(t);
  if (e === t)
    return { valid: !0, data: e };
  if (n === D.object && r === D.object) {
    const a = V.objectKeys(t), i = V.objectKeys(e).filter((u) => a.indexOf(u) !== -1), o = { ...e, ...t };
    for (const u of i) {
      const l = fl(e[u], t[u]);
      if (!l.valid)
        return { valid: !1 };
      o[u] = l.data;
    }
    return { valid: !0, data: o };
  } else if (n === D.array && r === D.array) {
    if (e.length !== t.length)
      return { valid: !1 };
    const a = [];
    for (let i = 0; i < e.length; i++) {
      const o = e[i], u = t[i], l = fl(o, u);
      if (!l.valid)
        return { valid: !1 };
      a.push(l.data);
    }
    return { valid: !0, data: a };
  } else
    return n === D.date && r === D.date && +e == +t ? { valid: !0, data: e } : { valid: !1 };
}
class Da extends W {
  _parse(t) {
    const { status: n, ctx: r } = this._processInputParams(t), a = (i, o) => {
      if (cl(i) || cl(o))
        return j;
      const u = fl(i.value, o.value);
      return u.valid ? ((dl(i) || dl(o)) && n.dirty(), { status: n.value, value: u.data }) : (M(r, {
        code: C.invalid_intersection_types
      }), j);
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
    ]).then(([i, o]) => a(i, o)) : a(this._def.left._parseSync({
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
Da.create = (e, t, n) => new Da({
  left: e,
  right: t,
  typeName: L.ZodIntersection,
  ...z(n)
});
class Rt extends W {
  _parse(t) {
    const { status: n, ctx: r } = this._processInputParams(t);
    if (r.parsedType !== D.array)
      return M(r, {
        code: C.invalid_type,
        expected: D.array,
        received: r.parsedType
      }), j;
    if (r.data.length < this._def.items.length)
      return M(r, {
        code: C.too_small,
        minimum: this._def.items.length,
        inclusive: !0,
        exact: !1,
        type: "array"
      }), j;
    !this._def.rest && r.data.length > this._def.items.length && (M(r, {
      code: C.too_big,
      maximum: this._def.items.length,
      inclusive: !0,
      exact: !1,
      type: "array"
    }), n.dirty());
    const i = [...r.data].map((o, u) => {
      const l = this._def.items[u] || this._def.rest;
      return l ? l._parse(new Pt(r, o, r.path, u)) : null;
    }).filter((o) => !!o);
    return r.common.async ? Promise.all(i).then((o) => Re.mergeArray(n, o)) : Re.mergeArray(n, i);
  }
  get items() {
    return this._def.items;
  }
  rest(t) {
    return new Rt({
      ...this._def,
      rest: t
    });
  }
}
Rt.create = (e, t) => {
  if (!Array.isArray(e))
    throw new Error("You must pass an array of schemas to z.tuple([ ... ])");
  return new Rt({
    items: e,
    typeName: L.ZodTuple,
    rest: null,
    ...z(t)
  });
};
class Ma extends W {
  get keySchema() {
    return this._def.keyType;
  }
  get valueSchema() {
    return this._def.valueType;
  }
  _parse(t) {
    const { status: n, ctx: r } = this._processInputParams(t);
    if (r.parsedType !== D.object)
      return M(r, {
        code: C.invalid_type,
        expected: D.object,
        received: r.parsedType
      }), j;
    const a = [], i = this._def.keyType, o = this._def.valueType;
    for (const u in r.data)
      a.push({
        key: i._parse(new Pt(r, u, r.path, u)),
        value: o._parse(new Pt(r, r.data[u], r.path, u))
      });
    return r.common.async ? Re.mergeObjectAsync(n, a) : Re.mergeObjectSync(n, a);
  }
  get element() {
    return this._def.valueType;
  }
  static create(t, n, r) {
    return n instanceof W ? new Ma({
      keyType: t,
      valueType: n,
      typeName: L.ZodRecord,
      ...z(r)
    }) : new Ma({
      keyType: yt.create(),
      valueType: t,
      typeName: L.ZodRecord,
      ...z(n)
    });
  }
}
class qi extends W {
  get keySchema() {
    return this._def.keyType;
  }
  get valueSchema() {
    return this._def.valueType;
  }
  _parse(t) {
    const { status: n, ctx: r } = this._processInputParams(t);
    if (r.parsedType !== D.map)
      return M(r, {
        code: C.invalid_type,
        expected: D.map,
        received: r.parsedType
      }), j;
    const a = this._def.keyType, i = this._def.valueType, o = [...r.data.entries()].map(([u, l], s) => ({
      key: a._parse(new Pt(r, u, r.path, [s, "key"])),
      value: i._parse(new Pt(r, l, r.path, [s, "value"]))
    }));
    if (r.common.async) {
      const u = /* @__PURE__ */ new Map();
      return Promise.resolve().then(async () => {
        for (const l of o) {
          const s = await l.key, p = await l.value;
          if (s.status === "aborted" || p.status === "aborted")
            return j;
          (s.status === "dirty" || p.status === "dirty") && n.dirty(), u.set(s.value, p.value);
        }
        return { status: n.value, value: u };
      });
    } else {
      const u = /* @__PURE__ */ new Map();
      for (const l of o) {
        const s = l.key, p = l.value;
        if (s.status === "aborted" || p.status === "aborted")
          return j;
        (s.status === "dirty" || p.status === "dirty") && n.dirty(), u.set(s.value, p.value);
      }
      return { status: n.value, value: u };
    }
  }
}
qi.create = (e, t, n) => new qi({
  valueType: t,
  keyType: e,
  typeName: L.ZodMap,
  ...z(n)
});
class Yn extends W {
  _parse(t) {
    const { status: n, ctx: r } = this._processInputParams(t);
    if (r.parsedType !== D.set)
      return M(r, {
        code: C.invalid_type,
        expected: D.set,
        received: r.parsedType
      }), j;
    const a = this._def;
    a.minSize !== null && r.data.size < a.minSize.value && (M(r, {
      code: C.too_small,
      minimum: a.minSize.value,
      type: "set",
      inclusive: !0,
      exact: !1,
      message: a.minSize.message
    }), n.dirty()), a.maxSize !== null && r.data.size > a.maxSize.value && (M(r, {
      code: C.too_big,
      maximum: a.maxSize.value,
      type: "set",
      inclusive: !0,
      exact: !1,
      message: a.maxSize.message
    }), n.dirty());
    const i = this._def.valueType;
    function o(l) {
      const s = /* @__PURE__ */ new Set();
      for (const p of l) {
        if (p.status === "aborted")
          return j;
        p.status === "dirty" && n.dirty(), s.add(p.value);
      }
      return { status: n.value, value: s };
    }
    const u = [...r.data.values()].map((l, s) => i._parse(new Pt(r, l, r.path, s)));
    return r.common.async ? Promise.all(u).then((l) => o(l)) : o(u);
  }
  min(t, n) {
    return new Yn({
      ...this._def,
      minSize: { value: t, message: R.toString(n) }
    });
  }
  max(t, n) {
    return new Yn({
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
Yn.create = (e, t) => new Yn({
  valueType: e,
  minSize: null,
  maxSize: null,
  typeName: L.ZodSet,
  ...z(t)
});
class yr extends W {
  constructor() {
    super(...arguments), this.validate = this.implement;
  }
  _parse(t) {
    const { ctx: n } = this._processInputParams(t);
    if (n.parsedType !== D.function)
      return M(n, {
        code: C.invalid_type,
        expected: D.function,
        received: n.parsedType
      }), j;
    function r(u, l) {
      return Zi({
        data: u,
        path: n.path,
        errorMaps: [
          n.common.contextualErrorMap,
          n.schemaErrorMap,
          Vi(),
          ka
        ].filter((s) => !!s),
        issueData: {
          code: C.invalid_arguments,
          argumentsError: l
        }
      });
    }
    function a(u, l) {
      return Zi({
        data: u,
        path: n.path,
        errorMaps: [
          n.common.contextualErrorMap,
          n.schemaErrorMap,
          Vi(),
          ka
        ].filter((s) => !!s),
        issueData: {
          code: C.invalid_return_type,
          returnTypeError: l
        }
      });
    }
    const i = { errorMap: n.common.contextualErrorMap }, o = n.data;
    if (this._def.returns instanceof Dr) {
      const u = this;
      return We(async function(...l) {
        const s = new xt([]), p = await u._def.args.parseAsync(l, i).catch((y) => {
          throw s.addIssue(r(l, y)), s;
        }), h = await Reflect.apply(o, this, p);
        return await u._def.returns._def.type.parseAsync(h, i).catch((y) => {
          throw s.addIssue(a(h, y)), s;
        });
      });
    } else {
      const u = this;
      return We(function(...l) {
        const s = u._def.args.safeParse(l, i);
        if (!s.success)
          throw new xt([r(l, s.error)]);
        const p = Reflect.apply(o, this, s.data), h = u._def.returns.safeParse(p, i);
        if (!h.success)
          throw new xt([a(p, h.error)]);
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
    return new yr({
      ...this._def,
      args: Rt.create(t).rest(jn.create())
    });
  }
  returns(t) {
    return new yr({
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
    return new yr({
      args: t || Rt.create([]).rest(jn.create()),
      returns: n || jn.create(),
      typeName: L.ZodFunction,
      ...z(r)
    });
  }
}
class Na extends W {
  get schema() {
    return this._def.getter();
  }
  _parse(t) {
    const { ctx: n } = this._processInputParams(t);
    return this._def.getter()._parse({ data: n.data, path: n.path, parent: n });
  }
}
Na.create = (e, t) => new Na({
  getter: e,
  typeName: L.ZodLazy,
  ...z(t)
});
class Pa extends W {
  _parse(t) {
    if (t.data !== this._def.value) {
      const n = this._getOrReturnCtx(t);
      return M(n, {
        received: n.data,
        code: C.invalid_literal,
        expected: this._def.value
      }), j;
    }
    return { status: "valid", value: t.data };
  }
  get value() {
    return this._def.value;
  }
}
Pa.create = (e, t) => new Pa({
  value: e,
  typeName: L.ZodLiteral,
  ...z(t)
});
function em(e, t) {
  return new kn({
    values: e,
    typeName: L.ZodEnum,
    ...z(t)
  });
}
class kn extends W {
  _parse(t) {
    if (typeof t.data != "string") {
      const n = this._getOrReturnCtx(t), r = this._def.values;
      return M(n, {
        expected: V.joinValues(r),
        received: n.parsedType,
        code: C.invalid_type
      }), j;
    }
    if (this._def.values.indexOf(t.data) === -1) {
      const n = this._getOrReturnCtx(t), r = this._def.values;
      return M(n, {
        received: n.data,
        code: C.invalid_enum_value,
        options: r
      }), j;
    }
    return We(t.data);
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
    return kn.create(t);
  }
  exclude(t) {
    return kn.create(this.options.filter((n) => !t.includes(n)));
  }
}
kn.create = em;
class Ra extends W {
  _parse(t) {
    const n = V.getValidEnumValues(this._def.values), r = this._getOrReturnCtx(t);
    if (r.parsedType !== D.string && r.parsedType !== D.number) {
      const a = V.objectValues(n);
      return M(r, {
        expected: V.joinValues(a),
        received: r.parsedType,
        code: C.invalid_type
      }), j;
    }
    if (n.indexOf(t.data) === -1) {
      const a = V.objectValues(n);
      return M(r, {
        received: r.data,
        code: C.invalid_enum_value,
        options: a
      }), j;
    }
    return We(t.data);
  }
  get enum() {
    return this._def.values;
  }
}
Ra.create = (e, t) => new Ra({
  values: e,
  typeName: L.ZodNativeEnum,
  ...z(t)
});
class Dr extends W {
  unwrap() {
    return this._def.type;
  }
  _parse(t) {
    const { ctx: n } = this._processInputParams(t);
    if (n.parsedType !== D.promise && n.common.async === !1)
      return M(n, {
        code: C.invalid_type,
        expected: D.promise,
        received: n.parsedType
      }), j;
    const r = n.parsedType === D.promise ? n.data : Promise.resolve(n.data);
    return We(r.then((a) => this._def.type.parseAsync(a, {
      path: n.path,
      errorMap: n.common.contextualErrorMap
    })));
  }
}
Dr.create = (e, t) => new Dr({
  type: e,
  typeName: L.ZodPromise,
  ...z(t)
});
class Tt extends W {
  innerType() {
    return this._def.schema;
  }
  sourceType() {
    return this._def.schema._def.typeName === L.ZodEffects ? this._def.schema.sourceType() : this._def.schema;
  }
  _parse(t) {
    const { status: n, ctx: r } = this._processInputParams(t), a = this._def.effect || null, i = {
      addIssue: (o) => {
        M(r, o), o.fatal ? n.abort() : n.dirty();
      },
      get path() {
        return r.path;
      }
    };
    if (i.addIssue = i.addIssue.bind(i), a.type === "preprocess") {
      const o = a.transform(r.data, i);
      return r.common.issues.length ? {
        status: "dirty",
        value: r.data
      } : r.common.async ? Promise.resolve(o).then((u) => this._def.schema._parseAsync({
        data: u,
        path: r.path,
        parent: r
      })) : this._def.schema._parseSync({
        data: o,
        path: r.path,
        parent: r
      });
    }
    if (a.type === "refinement") {
      const o = (u) => {
        const l = a.refinement(u, i);
        if (r.common.async)
          return Promise.resolve(l);
        if (l instanceof Promise)
          throw new Error("Async refinement encountered during synchronous parse operation. Use .parseAsync instead.");
        return u;
      };
      if (r.common.async === !1) {
        const u = this._def.schema._parseSync({
          data: r.data,
          path: r.path,
          parent: r
        });
        return u.status === "aborted" ? j : (u.status === "dirty" && n.dirty(), o(u.value), { status: n.value, value: u.value });
      } else
        return this._def.schema._parseAsync({ data: r.data, path: r.path, parent: r }).then((u) => u.status === "aborted" ? j : (u.status === "dirty" && n.dirty(), o(u.value).then(() => ({ status: n.value, value: u.value }))));
    }
    if (a.type === "transform")
      if (r.common.async === !1) {
        const o = this._def.schema._parseSync({
          data: r.data,
          path: r.path,
          parent: r
        });
        if (!Sa(o))
          return o;
        const u = a.transform(o.value, i);
        if (u instanceof Promise)
          throw new Error("Asynchronous transform encountered during synchronous parse operation. Use .parseAsync instead.");
        return { status: n.value, value: u };
      } else
        return this._def.schema._parseAsync({ data: r.data, path: r.path, parent: r }).then((o) => Sa(o) ? Promise.resolve(a.transform(o.value, i)).then((u) => ({ status: n.value, value: u })) : o);
    V.assertNever(a);
  }
}
Tt.create = (e, t, n) => new Tt({
  schema: e,
  typeName: L.ZodEffects,
  effect: t,
  ...z(n)
});
Tt.createWithPreprocess = (e, t, n) => new Tt({
  schema: t,
  effect: { type: "preprocess", transform: e },
  typeName: L.ZodEffects,
  ...z(n)
});
class Zt extends W {
  _parse(t) {
    return this._getType(t) === D.undefined ? We(void 0) : this._def.innerType._parse(t);
  }
  unwrap() {
    return this._def.innerType;
  }
}
Zt.create = (e, t) => new Zt({
  innerType: e,
  typeName: L.ZodOptional,
  ...z(t)
});
class Vn extends W {
  _parse(t) {
    return this._getType(t) === D.null ? We(null) : this._def.innerType._parse(t);
  }
  unwrap() {
    return this._def.innerType;
  }
}
Vn.create = (e, t) => new Vn({
  innerType: e,
  typeName: L.ZodNullable,
  ...z(t)
});
class La extends W {
  _parse(t) {
    const { ctx: n } = this._processInputParams(t);
    let r = n.data;
    return n.parsedType === D.undefined && (r = this._def.defaultValue()), this._def.innerType._parse({
      data: r,
      path: n.path,
      parent: n
    });
  }
  removeDefault() {
    return this._def.innerType;
  }
}
La.create = (e, t) => new La({
  innerType: e,
  typeName: L.ZodDefault,
  defaultValue: typeof t.default == "function" ? t.default : () => t.default,
  ...z(t)
});
class Xi extends W {
  _parse(t) {
    const { ctx: n } = this._processInputParams(t), r = {
      ...n,
      common: {
        ...n.common,
        issues: []
      }
    }, a = this._def.innerType._parse({
      data: r.data,
      path: r.path,
      parent: {
        ...r
      }
    });
    return Hi(a) ? a.then((i) => ({
      status: "valid",
      value: i.status === "valid" ? i.value : this._def.catchValue({
        get error() {
          return new xt(r.common.issues);
        },
        input: r.data
      })
    })) : {
      status: "valid",
      value: a.status === "valid" ? a.value : this._def.catchValue({
        get error() {
          return new xt(r.common.issues);
        },
        input: r.data
      })
    };
  }
  removeCatch() {
    return this._def.innerType;
  }
}
Xi.create = (e, t) => new Xi({
  innerType: e,
  typeName: L.ZodCatch,
  catchValue: typeof t.catch == "function" ? t.catch : () => t.catch,
  ...z(t)
});
class Gi extends W {
  _parse(t) {
    if (this._getType(t) !== D.nan) {
      const r = this._getOrReturnCtx(t);
      return M(r, {
        code: C.invalid_type,
        expected: D.nan,
        received: r.parsedType
      }), j;
    }
    return { status: "valid", value: t.data };
  }
}
Gi.create = (e) => new Gi({
  typeName: L.ZodNaN,
  ...z(e)
});
const q0 = Symbol("zod_brand");
class tm extends W {
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
class Fa extends W {
  _parse(t) {
    const { status: n, ctx: r } = this._processInputParams(t);
    if (r.common.async)
      return (async () => {
        const i = await this._def.in._parseAsync({
          data: r.data,
          path: r.path,
          parent: r
        });
        return i.status === "aborted" ? j : i.status === "dirty" ? (n.dirty(), Jp(i.value)) : this._def.out._parseAsync({
          data: i.value,
          path: r.path,
          parent: r
        });
      })();
    {
      const a = this._def.in._parseSync({
        data: r.data,
        path: r.path,
        parent: r
      });
      return a.status === "aborted" ? j : a.status === "dirty" ? (n.dirty(), {
        status: "dirty",
        value: a.value
      }) : this._def.out._parseSync({
        data: a.value,
        path: r.path,
        parent: r
      });
    }
  }
  static create(t, n) {
    return new Fa({
      in: t,
      out: n,
      typeName: L.ZodPipeline
    });
  }
}
class Ki extends W {
  _parse(t) {
    const n = this._def.innerType._parse(t);
    return Sa(n) && (n.value = Object.freeze(n.value)), n;
  }
}
Ki.create = (e, t) => new Ki({
  innerType: e,
  typeName: L.ZodReadonly,
  ...z(t)
});
const nm = (e, t = {}, n) => e ? Or.create().superRefine((r, a) => {
  var i, o;
  if (!e(r)) {
    const u = typeof t == "function" ? t(r) : typeof t == "string" ? { message: t } : t, l = (o = (i = u.fatal) !== null && i !== void 0 ? i : n) !== null && o !== void 0 ? o : !0, s = typeof u == "string" ? { message: u } : u;
    a.addIssue({ code: "custom", ...s, fatal: l });
  }
}) : Or.create(), X0 = {
  object: ie.lazycreate
};
var L;
(function(e) {
  e.ZodString = "ZodString", e.ZodNumber = "ZodNumber", e.ZodNaN = "ZodNaN", e.ZodBigInt = "ZodBigInt", e.ZodBoolean = "ZodBoolean", e.ZodDate = "ZodDate", e.ZodSymbol = "ZodSymbol", e.ZodUndefined = "ZodUndefined", e.ZodNull = "ZodNull", e.ZodAny = "ZodAny", e.ZodUnknown = "ZodUnknown", e.ZodNever = "ZodNever", e.ZodVoid = "ZodVoid", e.ZodArray = "ZodArray", e.ZodObject = "ZodObject", e.ZodUnion = "ZodUnion", e.ZodDiscriminatedUnion = "ZodDiscriminatedUnion", e.ZodIntersection = "ZodIntersection", e.ZodTuple = "ZodTuple", e.ZodRecord = "ZodRecord", e.ZodMap = "ZodMap", e.ZodSet = "ZodSet", e.ZodFunction = "ZodFunction", e.ZodLazy = "ZodLazy", e.ZodLiteral = "ZodLiteral", e.ZodEnum = "ZodEnum", e.ZodEffects = "ZodEffects", e.ZodNativeEnum = "ZodNativeEnum", e.ZodOptional = "ZodOptional", e.ZodNullable = "ZodNullable", e.ZodDefault = "ZodDefault", e.ZodCatch = "ZodCatch", e.ZodPromise = "ZodPromise", e.ZodBranded = "ZodBranded", e.ZodPipeline = "ZodPipeline", e.ZodReadonly = "ZodReadonly";
})(L || (L = {}));
const G0 = (e, t = {
  message: `Input not instance of ${e.name}`
}) => nm((n) => n instanceof e, t), rm = yt.create, am = _n.create, K0 = Gi.create, J0 = xn.create, im = Ta.create, eg = bn.create, tg = Bi.create, ng = Ca.create, rg = Ea.create, ag = Or.create, ig = jn.create, og = Xt.create, ug = Qi.create, lg = kt.create, sg = ie.create, cg = ie.strictCreate, dg = Oa.create, fg = ko.create, pg = Da.create, mg = Rt.create, hg = Ma.create, vg = qi.create, gg = Yn.create, yg = yr.create, wg = Na.create, _g = Pa.create, xg = kn.create, kg = Ra.create, Sg = Dr.create, dd = Tt.create, Tg = Zt.create, Cg = Vn.create, Eg = Tt.createWithPreprocess, Og = Fa.create, Dg = () => rm().optional(), Mg = () => am().optional(), Ng = () => im().optional(), Pg = {
  string: (e) => yt.create({ ...e, coerce: !0 }),
  number: (e) => _n.create({ ...e, coerce: !0 }),
  boolean: (e) => Ta.create({
    ...e,
    coerce: !0
  }),
  bigint: (e) => xn.create({ ...e, coerce: !0 }),
  date: (e) => bn.create({ ...e, coerce: !0 })
}, Rg = j;
var oe = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  defaultErrorMap: ka,
  setErrorMap: j0,
  getErrorMap: Vi,
  makeIssue: Zi,
  EMPTY_PATH: z0,
  addIssueToContext: M,
  ParseStatus: Re,
  INVALID: j,
  DIRTY: Jp,
  OK: We,
  isAborted: cl,
  isDirty: dl,
  isValid: Sa,
  isAsync: Hi,
  get util() {
    return V;
  },
  get objectUtil() {
    return sl;
  },
  ZodParsedType: D,
  getParsedType: an,
  ZodType: W,
  ZodString: yt,
  ZodNumber: _n,
  ZodBigInt: xn,
  ZodBoolean: Ta,
  ZodDate: bn,
  ZodSymbol: Bi,
  ZodUndefined: Ca,
  ZodNull: Ea,
  ZodAny: Or,
  ZodUnknown: jn,
  ZodNever: Xt,
  ZodVoid: Qi,
  ZodArray: kt,
  ZodObject: ie,
  ZodUnion: Oa,
  ZodDiscriminatedUnion: ko,
  ZodIntersection: Da,
  ZodTuple: Rt,
  ZodRecord: Ma,
  ZodMap: qi,
  ZodSet: Yn,
  ZodFunction: yr,
  ZodLazy: Na,
  ZodLiteral: Pa,
  ZodEnum: kn,
  ZodNativeEnum: Ra,
  ZodPromise: Dr,
  ZodEffects: Tt,
  ZodTransformer: Tt,
  ZodOptional: Zt,
  ZodNullable: Vn,
  ZodDefault: La,
  ZodCatch: Xi,
  ZodNaN: Gi,
  BRAND: q0,
  ZodBranded: tm,
  ZodPipeline: Fa,
  ZodReadonly: Ki,
  custom: nm,
  Schema: W,
  ZodSchema: W,
  late: X0,
  get ZodFirstPartyTypeKind() {
    return L;
  },
  coerce: Pg,
  any: ag,
  array: lg,
  bigint: J0,
  boolean: im,
  date: eg,
  discriminatedUnion: fg,
  effect: dd,
  enum: xg,
  function: yg,
  instanceof: G0,
  intersection: pg,
  lazy: wg,
  literal: _g,
  map: vg,
  nan: K0,
  nativeEnum: kg,
  never: og,
  null: rg,
  nullable: Cg,
  number: am,
  object: sg,
  oboolean: Ng,
  onumber: Mg,
  optional: Tg,
  ostring: Dg,
  pipeline: Og,
  preprocess: Eg,
  promise: Sg,
  record: hg,
  set: gg,
  strictObject: cg,
  string: rm,
  symbol: tg,
  transformer: dd,
  tuple: mg,
  undefined: ng,
  union: dg,
  unknown: ig,
  void: ug,
  NEVER: Rg,
  ZodIssueCode: C,
  quotelessJson: U0,
  ZodError: xt
});
const om = oe.object({
  MemberCount: oe.number(),
  OnTrackCount: oe.number(),
  OnTrackOnDateCount: oe.number()
}), um = oe.object({
  MemberCount: oe.number(),
  ContributionAmount: oe.number()
}), lm = oe.object({
  ContributionAmount: oe.number()
}), Lg = oe.object({
  Name: oe.string(),
  MemberCount: oe.number(),
  BUKStatus: om,
  SamvirkStatus: um,
  AHStatus: lm
}), Ig = oe.object({
  Title: oe.string(),
  DateFrom: oe.string(),
  DateTo: oe.string(),
  MyShareTargetOnDate: oe.number(),
  MyShareNextThreshold: oe.number(),
  SamvirkGoalPerMonth: oe.number(),
  SamvirkGoalPerSprint: oe.number(),
  Teams: oe.array(Lg),
  ReportDate: oe.string()
}), Ug = oe.array(Ig);
om.or(um).or(lm);
function Ji(e) {
  "@babel/helpers - typeof";
  return Ji = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
    return typeof t;
  } : function(t) {
    return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
  }, Ji(e);
}
function Zn(e) {
  if (e === null || e === !0 || e === !1)
    return NaN;
  var t = Number(e);
  return isNaN(t) ? t : t < 0 ? Math.ceil(t) : Math.floor(t);
}
function be(e, t) {
  if (t.length < e)
    throw new TypeError(e + " argument" + (e > 1 ? "s" : "") + " required, but only " + t.length + " present");
}
function Lt(e) {
  be(1, arguments);
  var t = Object.prototype.toString.call(e);
  return e instanceof Date || Ji(e) === "object" && t === "[object Date]" ? new Date(e.getTime()) : typeof e == "number" || t === "[object Number]" ? new Date(e) : ((typeof e == "string" || t === "[object String]") && typeof console < "u" && (console.warn("Starting with v2.0.0-beta.1 date-fns doesn't accept strings as date arguments. Please use `parseISO` to parse strings. See: https://github.com/date-fns/date-fns/blob/master/docs/upgradeGuide.md#string-arguments"), console.warn(new Error().stack)), /* @__PURE__ */ new Date(NaN));
}
function jg(e, t) {
  be(2, arguments);
  var n = Lt(e).getTime(), r = Zn(t);
  return new Date(n + r);
}
var zg = {};
function So() {
  return zg;
}
function $g(e) {
  var t = new Date(Date.UTC(e.getFullYear(), e.getMonth(), e.getDate(), e.getHours(), e.getMinutes(), e.getSeconds(), e.getMilliseconds()));
  return t.setUTCFullYear(e.getFullYear()), e.getTime() - t.getTime();
}
function Wg(e) {
  return be(1, arguments), e instanceof Date || Ji(e) === "object" && Object.prototype.toString.call(e) === "[object Date]";
}
function Fg(e) {
  if (be(1, arguments), !Wg(e) && typeof e != "number")
    return !1;
  var t = Lt(e);
  return !isNaN(Number(t));
}
function Ag(e, t) {
  be(2, arguments);
  var n = Zn(t);
  return jg(e, -n);
}
var bg = 864e5;
function Yg(e) {
  be(1, arguments);
  var t = Lt(e), n = t.getTime();
  t.setUTCMonth(0, 1), t.setUTCHours(0, 0, 0, 0);
  var r = t.getTime(), a = n - r;
  return Math.floor(a / bg) + 1;
}
function eo(e) {
  be(1, arguments);
  var t = 1, n = Lt(e), r = n.getUTCDay(), a = (r < t ? 7 : 0) + r - t;
  return n.setUTCDate(n.getUTCDate() - a), n.setUTCHours(0, 0, 0, 0), n;
}
function sm(e) {
  be(1, arguments);
  var t = Lt(e), n = t.getUTCFullYear(), r = /* @__PURE__ */ new Date(0);
  r.setUTCFullYear(n + 1, 0, 4), r.setUTCHours(0, 0, 0, 0);
  var a = eo(r), i = /* @__PURE__ */ new Date(0);
  i.setUTCFullYear(n, 0, 4), i.setUTCHours(0, 0, 0, 0);
  var o = eo(i);
  return t.getTime() >= a.getTime() ? n + 1 : t.getTime() >= o.getTime() ? n : n - 1;
}
function Vg(e) {
  be(1, arguments);
  var t = sm(e), n = /* @__PURE__ */ new Date(0);
  n.setUTCFullYear(t, 0, 4), n.setUTCHours(0, 0, 0, 0);
  var r = eo(n);
  return r;
}
var Zg = 6048e5;
function Hg(e) {
  be(1, arguments);
  var t = Lt(e), n = eo(t).getTime() - Vg(t).getTime();
  return Math.round(n / Zg) + 1;
}
function to(e, t) {
  var n, r, a, i, o, u, l, s;
  be(1, arguments);
  var p = So(), h = Zn((n = (r = (a = (i = t == null ? void 0 : t.weekStartsOn) !== null && i !== void 0 ? i : t == null || (o = t.locale) === null || o === void 0 || (u = o.options) === null || u === void 0 ? void 0 : u.weekStartsOn) !== null && a !== void 0 ? a : p.weekStartsOn) !== null && r !== void 0 ? r : (l = p.locale) === null || l === void 0 || (s = l.options) === null || s === void 0 ? void 0 : s.weekStartsOn) !== null && n !== void 0 ? n : 0);
  if (!(h >= 0 && h <= 6))
    throw new RangeError("weekStartsOn must be between 0 and 6 inclusively");
  var v = Lt(e), y = v.getUTCDay(), w = (y < h ? 7 : 0) + y - h;
  return v.setUTCDate(v.getUTCDate() - w), v.setUTCHours(0, 0, 0, 0), v;
}
function cm(e, t) {
  var n, r, a, i, o, u, l, s;
  be(1, arguments);
  var p = Lt(e), h = p.getUTCFullYear(), v = So(), y = Zn((n = (r = (a = (i = t == null ? void 0 : t.firstWeekContainsDate) !== null && i !== void 0 ? i : t == null || (o = t.locale) === null || o === void 0 || (u = o.options) === null || u === void 0 ? void 0 : u.firstWeekContainsDate) !== null && a !== void 0 ? a : v.firstWeekContainsDate) !== null && r !== void 0 ? r : (l = v.locale) === null || l === void 0 || (s = l.options) === null || s === void 0 ? void 0 : s.firstWeekContainsDate) !== null && n !== void 0 ? n : 1);
  if (!(y >= 1 && y <= 7))
    throw new RangeError("firstWeekContainsDate must be between 1 and 7 inclusively");
  var w = /* @__PURE__ */ new Date(0);
  w.setUTCFullYear(h + 1, 0, y), w.setUTCHours(0, 0, 0, 0);
  var k = to(w, t), x = /* @__PURE__ */ new Date(0);
  x.setUTCFullYear(h, 0, y), x.setUTCHours(0, 0, 0, 0);
  var c = to(x, t);
  return p.getTime() >= k.getTime() ? h + 1 : p.getTime() >= c.getTime() ? h : h - 1;
}
function Bg(e, t) {
  var n, r, a, i, o, u, l, s;
  be(1, arguments);
  var p = So(), h = Zn((n = (r = (a = (i = t == null ? void 0 : t.firstWeekContainsDate) !== null && i !== void 0 ? i : t == null || (o = t.locale) === null || o === void 0 || (u = o.options) === null || u === void 0 ? void 0 : u.firstWeekContainsDate) !== null && a !== void 0 ? a : p.firstWeekContainsDate) !== null && r !== void 0 ? r : (l = p.locale) === null || l === void 0 || (s = l.options) === null || s === void 0 ? void 0 : s.firstWeekContainsDate) !== null && n !== void 0 ? n : 1), v = cm(e, t), y = /* @__PURE__ */ new Date(0);
  y.setUTCFullYear(v, 0, h), y.setUTCHours(0, 0, 0, 0);
  var w = to(y, t);
  return w;
}
var Qg = 6048e5;
function qg(e, t) {
  be(1, arguments);
  var n = Lt(e), r = to(n, t).getTime() - Bg(n, t).getTime();
  return Math.round(r / Qg) + 1;
}
function B(e, t) {
  for (var n = e < 0 ? "-" : "", r = Math.abs(e).toString(); r.length < t; )
    r = "0" + r;
  return n + r;
}
var Xg = {
  // Year
  y: function(t, n) {
    var r = t.getUTCFullYear(), a = r > 0 ? r : 1 - r;
    return B(n === "yy" ? a % 100 : a, n.length);
  },
  // Month
  M: function(t, n) {
    var r = t.getUTCMonth();
    return n === "M" ? String(r + 1) : B(r + 1, 2);
  },
  // Day of the month
  d: function(t, n) {
    return B(t.getUTCDate(), n.length);
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
    return B(t.getUTCHours() % 12 || 12, n.length);
  },
  // Hour [0-23]
  H: function(t, n) {
    return B(t.getUTCHours(), n.length);
  },
  // Minute
  m: function(t, n) {
    return B(t.getUTCMinutes(), n.length);
  },
  // Second
  s: function(t, n) {
    return B(t.getUTCSeconds(), n.length);
  },
  // Fraction of second
  S: function(t, n) {
    var r = n.length, a = t.getUTCMilliseconds(), i = Math.floor(a * Math.pow(10, r - 3));
    return B(i, n.length);
  }
};
const Jt = Xg;
var Gn = {
  am: "am",
  pm: "pm",
  midnight: "midnight",
  noon: "noon",
  morning: "morning",
  afternoon: "afternoon",
  evening: "evening",
  night: "night"
}, Gg = {
  // Era
  G: function(t, n, r) {
    var a = t.getUTCFullYear() > 0 ? 1 : 0;
    switch (n) {
      case "G":
      case "GG":
      case "GGG":
        return r.era(a, {
          width: "abbreviated"
        });
      case "GGGGG":
        return r.era(a, {
          width: "narrow"
        });
      case "GGGG":
      default:
        return r.era(a, {
          width: "wide"
        });
    }
  },
  // Year
  y: function(t, n, r) {
    if (n === "yo") {
      var a = t.getUTCFullYear(), i = a > 0 ? a : 1 - a;
      return r.ordinalNumber(i, {
        unit: "year"
      });
    }
    return Jt.y(t, n);
  },
  // Local week-numbering year
  Y: function(t, n, r, a) {
    var i = cm(t, a), o = i > 0 ? i : 1 - i;
    if (n === "YY") {
      var u = o % 100;
      return B(u, 2);
    }
    return n === "Yo" ? r.ordinalNumber(o, {
      unit: "year"
    }) : B(o, n.length);
  },
  // ISO week-numbering year
  R: function(t, n) {
    var r = sm(t);
    return B(r, n.length);
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
    return B(r, n.length);
  },
  // Quarter
  Q: function(t, n, r) {
    var a = Math.ceil((t.getUTCMonth() + 1) / 3);
    switch (n) {
      case "Q":
        return String(a);
      case "QQ":
        return B(a, 2);
      case "Qo":
        return r.ordinalNumber(a, {
          unit: "quarter"
        });
      case "QQQ":
        return r.quarter(a, {
          width: "abbreviated",
          context: "formatting"
        });
      case "QQQQQ":
        return r.quarter(a, {
          width: "narrow",
          context: "formatting"
        });
      case "QQQQ":
      default:
        return r.quarter(a, {
          width: "wide",
          context: "formatting"
        });
    }
  },
  // Stand-alone quarter
  q: function(t, n, r) {
    var a = Math.ceil((t.getUTCMonth() + 1) / 3);
    switch (n) {
      case "q":
        return String(a);
      case "qq":
        return B(a, 2);
      case "qo":
        return r.ordinalNumber(a, {
          unit: "quarter"
        });
      case "qqq":
        return r.quarter(a, {
          width: "abbreviated",
          context: "standalone"
        });
      case "qqqqq":
        return r.quarter(a, {
          width: "narrow",
          context: "standalone"
        });
      case "qqqq":
      default:
        return r.quarter(a, {
          width: "wide",
          context: "standalone"
        });
    }
  },
  // Month
  M: function(t, n, r) {
    var a = t.getUTCMonth();
    switch (n) {
      case "M":
      case "MM":
        return Jt.M(t, n);
      case "Mo":
        return r.ordinalNumber(a + 1, {
          unit: "month"
        });
      case "MMM":
        return r.month(a, {
          width: "abbreviated",
          context: "formatting"
        });
      case "MMMMM":
        return r.month(a, {
          width: "narrow",
          context: "formatting"
        });
      case "MMMM":
      default:
        return r.month(a, {
          width: "wide",
          context: "formatting"
        });
    }
  },
  // Stand-alone month
  L: function(t, n, r) {
    var a = t.getUTCMonth();
    switch (n) {
      case "L":
        return String(a + 1);
      case "LL":
        return B(a + 1, 2);
      case "Lo":
        return r.ordinalNumber(a + 1, {
          unit: "month"
        });
      case "LLL":
        return r.month(a, {
          width: "abbreviated",
          context: "standalone"
        });
      case "LLLLL":
        return r.month(a, {
          width: "narrow",
          context: "standalone"
        });
      case "LLLL":
      default:
        return r.month(a, {
          width: "wide",
          context: "standalone"
        });
    }
  },
  // Local week of year
  w: function(t, n, r, a) {
    var i = qg(t, a);
    return n === "wo" ? r.ordinalNumber(i, {
      unit: "week"
    }) : B(i, n.length);
  },
  // ISO week of year
  I: function(t, n, r) {
    var a = Hg(t);
    return n === "Io" ? r.ordinalNumber(a, {
      unit: "week"
    }) : B(a, n.length);
  },
  // Day of the month
  d: function(t, n, r) {
    return n === "do" ? r.ordinalNumber(t.getUTCDate(), {
      unit: "date"
    }) : Jt.d(t, n);
  },
  // Day of year
  D: function(t, n, r) {
    var a = Yg(t);
    return n === "Do" ? r.ordinalNumber(a, {
      unit: "dayOfYear"
    }) : B(a, n.length);
  },
  // Day of week
  E: function(t, n, r) {
    var a = t.getUTCDay();
    switch (n) {
      case "E":
      case "EE":
      case "EEE":
        return r.day(a, {
          width: "abbreviated",
          context: "formatting"
        });
      case "EEEEE":
        return r.day(a, {
          width: "narrow",
          context: "formatting"
        });
      case "EEEEEE":
        return r.day(a, {
          width: "short",
          context: "formatting"
        });
      case "EEEE":
      default:
        return r.day(a, {
          width: "wide",
          context: "formatting"
        });
    }
  },
  // Local day of week
  e: function(t, n, r, a) {
    var i = t.getUTCDay(), o = (i - a.weekStartsOn + 8) % 7 || 7;
    switch (n) {
      case "e":
        return String(o);
      case "ee":
        return B(o, 2);
      case "eo":
        return r.ordinalNumber(o, {
          unit: "day"
        });
      case "eee":
        return r.day(i, {
          width: "abbreviated",
          context: "formatting"
        });
      case "eeeee":
        return r.day(i, {
          width: "narrow",
          context: "formatting"
        });
      case "eeeeee":
        return r.day(i, {
          width: "short",
          context: "formatting"
        });
      case "eeee":
      default:
        return r.day(i, {
          width: "wide",
          context: "formatting"
        });
    }
  },
  // Stand-alone local day of week
  c: function(t, n, r, a) {
    var i = t.getUTCDay(), o = (i - a.weekStartsOn + 8) % 7 || 7;
    switch (n) {
      case "c":
        return String(o);
      case "cc":
        return B(o, n.length);
      case "co":
        return r.ordinalNumber(o, {
          unit: "day"
        });
      case "ccc":
        return r.day(i, {
          width: "abbreviated",
          context: "standalone"
        });
      case "ccccc":
        return r.day(i, {
          width: "narrow",
          context: "standalone"
        });
      case "cccccc":
        return r.day(i, {
          width: "short",
          context: "standalone"
        });
      case "cccc":
      default:
        return r.day(i, {
          width: "wide",
          context: "standalone"
        });
    }
  },
  // ISO day of week
  i: function(t, n, r) {
    var a = t.getUTCDay(), i = a === 0 ? 7 : a;
    switch (n) {
      case "i":
        return String(i);
      case "ii":
        return B(i, n.length);
      case "io":
        return r.ordinalNumber(i, {
          unit: "day"
        });
      case "iii":
        return r.day(a, {
          width: "abbreviated",
          context: "formatting"
        });
      case "iiiii":
        return r.day(a, {
          width: "narrow",
          context: "formatting"
        });
      case "iiiiii":
        return r.day(a, {
          width: "short",
          context: "formatting"
        });
      case "iiii":
      default:
        return r.day(a, {
          width: "wide",
          context: "formatting"
        });
    }
  },
  // AM or PM
  a: function(t, n, r) {
    var a = t.getUTCHours(), i = a / 12 >= 1 ? "pm" : "am";
    switch (n) {
      case "a":
      case "aa":
        return r.dayPeriod(i, {
          width: "abbreviated",
          context: "formatting"
        });
      case "aaa":
        return r.dayPeriod(i, {
          width: "abbreviated",
          context: "formatting"
        }).toLowerCase();
      case "aaaaa":
        return r.dayPeriod(i, {
          width: "narrow",
          context: "formatting"
        });
      case "aaaa":
      default:
        return r.dayPeriod(i, {
          width: "wide",
          context: "formatting"
        });
    }
  },
  // AM, PM, midnight, noon
  b: function(t, n, r) {
    var a = t.getUTCHours(), i;
    switch (a === 12 ? i = Gn.noon : a === 0 ? i = Gn.midnight : i = a / 12 >= 1 ? "pm" : "am", n) {
      case "b":
      case "bb":
        return r.dayPeriod(i, {
          width: "abbreviated",
          context: "formatting"
        });
      case "bbb":
        return r.dayPeriod(i, {
          width: "abbreviated",
          context: "formatting"
        }).toLowerCase();
      case "bbbbb":
        return r.dayPeriod(i, {
          width: "narrow",
          context: "formatting"
        });
      case "bbbb":
      default:
        return r.dayPeriod(i, {
          width: "wide",
          context: "formatting"
        });
    }
  },
  // in the morning, in the afternoon, in the evening, at night
  B: function(t, n, r) {
    var a = t.getUTCHours(), i;
    switch (a >= 17 ? i = Gn.evening : a >= 12 ? i = Gn.afternoon : a >= 4 ? i = Gn.morning : i = Gn.night, n) {
      case "B":
      case "BB":
      case "BBB":
        return r.dayPeriod(i, {
          width: "abbreviated",
          context: "formatting"
        });
      case "BBBBB":
        return r.dayPeriod(i, {
          width: "narrow",
          context: "formatting"
        });
      case "BBBB":
      default:
        return r.dayPeriod(i, {
          width: "wide",
          context: "formatting"
        });
    }
  },
  // Hour [1-12]
  h: function(t, n, r) {
    if (n === "ho") {
      var a = t.getUTCHours() % 12;
      return a === 0 && (a = 12), r.ordinalNumber(a, {
        unit: "hour"
      });
    }
    return Jt.h(t, n);
  },
  // Hour [0-23]
  H: function(t, n, r) {
    return n === "Ho" ? r.ordinalNumber(t.getUTCHours(), {
      unit: "hour"
    }) : Jt.H(t, n);
  },
  // Hour [0-11]
  K: function(t, n, r) {
    var a = t.getUTCHours() % 12;
    return n === "Ko" ? r.ordinalNumber(a, {
      unit: "hour"
    }) : B(a, n.length);
  },
  // Hour [1-24]
  k: function(t, n, r) {
    var a = t.getUTCHours();
    return a === 0 && (a = 24), n === "ko" ? r.ordinalNumber(a, {
      unit: "hour"
    }) : B(a, n.length);
  },
  // Minute
  m: function(t, n, r) {
    return n === "mo" ? r.ordinalNumber(t.getUTCMinutes(), {
      unit: "minute"
    }) : Jt.m(t, n);
  },
  // Second
  s: function(t, n, r) {
    return n === "so" ? r.ordinalNumber(t.getUTCSeconds(), {
      unit: "second"
    }) : Jt.s(t, n);
  },
  // Fraction of second
  S: function(t, n) {
    return Jt.S(t, n);
  },
  // Timezone (ISO-8601. If offset is 0, output is always `'Z'`)
  X: function(t, n, r, a) {
    var i = a._originalDate || t, o = i.getTimezoneOffset();
    if (o === 0)
      return "Z";
    switch (n) {
      case "X":
        return pd(o);
      case "XXXX":
      case "XX":
        return Nn(o);
      case "XXXXX":
      case "XXX":
      default:
        return Nn(o, ":");
    }
  },
  // Timezone (ISO-8601. If offset is 0, output is `'+00:00'` or equivalent)
  x: function(t, n, r, a) {
    var i = a._originalDate || t, o = i.getTimezoneOffset();
    switch (n) {
      case "x":
        return pd(o);
      case "xxxx":
      case "xx":
        return Nn(o);
      case "xxxxx":
      case "xxx":
      default:
        return Nn(o, ":");
    }
  },
  // Timezone (GMT)
  O: function(t, n, r, a) {
    var i = a._originalDate || t, o = i.getTimezoneOffset();
    switch (n) {
      case "O":
      case "OO":
      case "OOO":
        return "GMT" + fd(o, ":");
      case "OOOO":
      default:
        return "GMT" + Nn(o, ":");
    }
  },
  // Timezone (specific non-location)
  z: function(t, n, r, a) {
    var i = a._originalDate || t, o = i.getTimezoneOffset();
    switch (n) {
      case "z":
      case "zz":
      case "zzz":
        return "GMT" + fd(o, ":");
      case "zzzz":
      default:
        return "GMT" + Nn(o, ":");
    }
  },
  // Seconds timestamp
  t: function(t, n, r, a) {
    var i = a._originalDate || t, o = Math.floor(i.getTime() / 1e3);
    return B(o, n.length);
  },
  // Milliseconds timestamp
  T: function(t, n, r, a) {
    var i = a._originalDate || t, o = i.getTime();
    return B(o, n.length);
  }
};
function fd(e, t) {
  var n = e > 0 ? "-" : "+", r = Math.abs(e), a = Math.floor(r / 60), i = r % 60;
  if (i === 0)
    return n + String(a);
  var o = t || "";
  return n + String(a) + o + B(i, 2);
}
function pd(e, t) {
  if (e % 60 === 0) {
    var n = e > 0 ? "-" : "+";
    return n + B(Math.abs(e) / 60, 2);
  }
  return Nn(e, t);
}
function Nn(e, t) {
  var n = t || "", r = e > 0 ? "-" : "+", a = Math.abs(e), i = B(Math.floor(a / 60), 2), o = B(a % 60, 2);
  return r + i + n + o;
}
var md = function(t, n) {
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
}, dm = function(t, n) {
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
}, Kg = function(t, n) {
  var r = t.match(/(P+)(p+)?/) || [], a = r[1], i = r[2];
  if (!i)
    return md(t, n);
  var o;
  switch (a) {
    case "P":
      o = n.dateTime({
        width: "short"
      });
      break;
    case "PP":
      o = n.dateTime({
        width: "medium"
      });
      break;
    case "PPP":
      o = n.dateTime({
        width: "long"
      });
      break;
    case "PPPP":
    default:
      o = n.dateTime({
        width: "full"
      });
      break;
  }
  return o.replace("{{date}}", md(a, n)).replace("{{time}}", dm(i, n));
}, Jg = {
  p: dm,
  P: Kg
}, ey = ["D", "DD"], ty = ["YY", "YYYY"];
function ny(e) {
  return ey.indexOf(e) !== -1;
}
function ry(e) {
  return ty.indexOf(e) !== -1;
}
function hd(e, t, n) {
  if (e === "YYYY")
    throw new RangeError("Use `yyyy` instead of `YYYY` (in `".concat(t, "`) for formatting years to the input `").concat(n, "`; see: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md"));
  if (e === "YY")
    throw new RangeError("Use `yy` instead of `YY` (in `".concat(t, "`) for formatting years to the input `").concat(n, "`; see: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md"));
  if (e === "D")
    throw new RangeError("Use `d` instead of `D` (in `".concat(t, "`) for formatting days of the month to the input `").concat(n, "`; see: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md"));
  if (e === "DD")
    throw new RangeError("Use `dd` instead of `DD` (in `".concat(t, "`) for formatting days of the month to the input `").concat(n, "`; see: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md"));
}
var ay = {
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
}, iy = function(t, n, r) {
  var a, i = ay[t];
  return typeof i == "string" ? a = i : n === 1 ? a = i.one : a = i.other.replace("{{count}}", n.toString()), r != null && r.addSuffix ? r.comparison && r.comparison > 0 ? "in " + a : a + " ago" : a;
};
const oy = iy;
function iu(e) {
  return function() {
    var t = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {}, n = t.width ? String(t.width) : e.defaultWidth, r = e.formats[n] || e.formats[e.defaultWidth];
    return r;
  };
}
var uy = {
  full: "EEEE, MMMM do, y",
  long: "MMMM do, y",
  medium: "MMM d, y",
  short: "MM/dd/yyyy"
}, ly = {
  full: "h:mm:ss a zzzz",
  long: "h:mm:ss a z",
  medium: "h:mm:ss a",
  short: "h:mm a"
}, sy = {
  full: "{{date}} 'at' {{time}}",
  long: "{{date}} 'at' {{time}}",
  medium: "{{date}}, {{time}}",
  short: "{{date}}, {{time}}"
}, cy = {
  date: iu({
    formats: uy,
    defaultWidth: "full"
  }),
  time: iu({
    formats: ly,
    defaultWidth: "full"
  }),
  dateTime: iu({
    formats: sy,
    defaultWidth: "full"
  })
};
const dy = cy;
var fy = {
  lastWeek: "'last' eeee 'at' p",
  yesterday: "'yesterday at' p",
  today: "'today at' p",
  tomorrow: "'tomorrow at' p",
  nextWeek: "eeee 'at' p",
  other: "P"
}, py = function(t, n, r, a) {
  return fy[t];
};
const my = py;
function br(e) {
  return function(t, n) {
    var r = n != null && n.context ? String(n.context) : "standalone", a;
    if (r === "formatting" && e.formattingValues) {
      var i = e.defaultFormattingWidth || e.defaultWidth, o = n != null && n.width ? String(n.width) : i;
      a = e.formattingValues[o] || e.formattingValues[i];
    } else {
      var u = e.defaultWidth, l = n != null && n.width ? String(n.width) : e.defaultWidth;
      a = e.values[l] || e.values[u];
    }
    var s = e.argumentCallback ? e.argumentCallback(t) : t;
    return a[s];
  };
}
var hy = {
  narrow: ["B", "A"],
  abbreviated: ["BC", "AD"],
  wide: ["Before Christ", "Anno Domini"]
}, vy = {
  narrow: ["1", "2", "3", "4"],
  abbreviated: ["Q1", "Q2", "Q3", "Q4"],
  wide: ["1st quarter", "2nd quarter", "3rd quarter", "4th quarter"]
}, gy = {
  narrow: ["J", "F", "M", "A", "M", "J", "J", "A", "S", "O", "N", "D"],
  abbreviated: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
  wide: ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"]
}, yy = {
  narrow: ["S", "M", "T", "W", "T", "F", "S"],
  short: ["Su", "Mo", "Tu", "We", "Th", "Fr", "Sa"],
  abbreviated: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
  wide: ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"]
}, wy = {
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
}, _y = {
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
}, xy = function(t, n) {
  var r = Number(t), a = r % 100;
  if (a > 20 || a < 10)
    switch (a % 10) {
      case 1:
        return r + "st";
      case 2:
        return r + "nd";
      case 3:
        return r + "rd";
    }
  return r + "th";
}, ky = {
  ordinalNumber: xy,
  era: br({
    values: hy,
    defaultWidth: "wide"
  }),
  quarter: br({
    values: vy,
    defaultWidth: "wide",
    argumentCallback: function(t) {
      return t - 1;
    }
  }),
  month: br({
    values: gy,
    defaultWidth: "wide"
  }),
  day: br({
    values: yy,
    defaultWidth: "wide"
  }),
  dayPeriod: br({
    values: wy,
    defaultWidth: "wide",
    formattingValues: _y,
    defaultFormattingWidth: "wide"
  })
};
const Sy = ky;
function Yr(e) {
  return function(t) {
    var n = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, r = n.width, a = r && e.matchPatterns[r] || e.matchPatterns[e.defaultMatchWidth], i = t.match(a);
    if (!i)
      return null;
    var o = i[0], u = r && e.parsePatterns[r] || e.parsePatterns[e.defaultParseWidth], l = Array.isArray(u) ? Cy(u, function(h) {
      return h.test(o);
    }) : Ty(u, function(h) {
      return h.test(o);
    }), s;
    s = e.valueCallback ? e.valueCallback(l) : l, s = n.valueCallback ? n.valueCallback(s) : s;
    var p = t.slice(o.length);
    return {
      value: s,
      rest: p
    };
  };
}
function Ty(e, t) {
  for (var n in e)
    if (e.hasOwnProperty(n) && t(e[n]))
      return n;
}
function Cy(e, t) {
  for (var n = 0; n < e.length; n++)
    if (t(e[n]))
      return n;
}
function Ey(e) {
  return function(t) {
    var n = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, r = t.match(e.matchPattern);
    if (!r)
      return null;
    var a = r[0], i = t.match(e.parsePattern);
    if (!i)
      return null;
    var o = e.valueCallback ? e.valueCallback(i[0]) : i[0];
    o = n.valueCallback ? n.valueCallback(o) : o;
    var u = t.slice(a.length);
    return {
      value: o,
      rest: u
    };
  };
}
var Oy = /^(\d+)(th|st|nd|rd)?/i, Dy = /\d+/i, My = {
  narrow: /^(b|a)/i,
  abbreviated: /^(b\.?\s?c\.?|b\.?\s?c\.?\s?e\.?|a\.?\s?d\.?|c\.?\s?e\.?)/i,
  wide: /^(before christ|before common era|anno domini|common era)/i
}, Ny = {
  any: [/^b/i, /^(a|c)/i]
}, Py = {
  narrow: /^[1234]/i,
  abbreviated: /^q[1234]/i,
  wide: /^[1234](th|st|nd|rd)? quarter/i
}, Ry = {
  any: [/1/i, /2/i, /3/i, /4/i]
}, Ly = {
  narrow: /^[jfmasond]/i,
  abbreviated: /^(jan|feb|mar|apr|may|jun|jul|aug|sep|oct|nov|dec)/i,
  wide: /^(january|february|march|april|may|june|july|august|september|october|november|december)/i
}, Iy = {
  narrow: [/^j/i, /^f/i, /^m/i, /^a/i, /^m/i, /^j/i, /^j/i, /^a/i, /^s/i, /^o/i, /^n/i, /^d/i],
  any: [/^ja/i, /^f/i, /^mar/i, /^ap/i, /^may/i, /^jun/i, /^jul/i, /^au/i, /^s/i, /^o/i, /^n/i, /^d/i]
}, Uy = {
  narrow: /^[smtwf]/i,
  short: /^(su|mo|tu|we|th|fr|sa)/i,
  abbreviated: /^(sun|mon|tue|wed|thu|fri|sat)/i,
  wide: /^(sunday|monday|tuesday|wednesday|thursday|friday|saturday)/i
}, jy = {
  narrow: [/^s/i, /^m/i, /^t/i, /^w/i, /^t/i, /^f/i, /^s/i],
  any: [/^su/i, /^m/i, /^tu/i, /^w/i, /^th/i, /^f/i, /^sa/i]
}, zy = {
  narrow: /^(a|p|mi|n|(in the|at) (morning|afternoon|evening|night))/i,
  any: /^([ap]\.?\s?m\.?|midnight|noon|(in the|at) (morning|afternoon|evening|night))/i
}, $y = {
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
}, Wy = {
  ordinalNumber: Ey({
    matchPattern: Oy,
    parsePattern: Dy,
    valueCallback: function(t) {
      return parseInt(t, 10);
    }
  }),
  era: Yr({
    matchPatterns: My,
    defaultMatchWidth: "wide",
    parsePatterns: Ny,
    defaultParseWidth: "any"
  }),
  quarter: Yr({
    matchPatterns: Py,
    defaultMatchWidth: "wide",
    parsePatterns: Ry,
    defaultParseWidth: "any",
    valueCallback: function(t) {
      return t + 1;
    }
  }),
  month: Yr({
    matchPatterns: Ly,
    defaultMatchWidth: "wide",
    parsePatterns: Iy,
    defaultParseWidth: "any"
  }),
  day: Yr({
    matchPatterns: Uy,
    defaultMatchWidth: "wide",
    parsePatterns: jy,
    defaultParseWidth: "any"
  }),
  dayPeriod: Yr({
    matchPatterns: zy,
    defaultMatchWidth: "any",
    parsePatterns: $y,
    defaultParseWidth: "any"
  })
};
const Fy = Wy;
var Ay = {
  code: "en-US",
  formatDistance: oy,
  formatLong: dy,
  formatRelative: my,
  localize: Sy,
  match: Fy,
  options: {
    weekStartsOn: 0,
    firstWeekContainsDate: 1
  }
};
const by = Ay;
var Yy = /[yYQqMLwIdDecihHKkms]o|(\w)\1*|''|'(''|[^'])+('|$)|./g, Vy = /P+p+|P+|p+|''|'(''|[^'])+('|$)|./g, Zy = /^'([^]*?)'?$/, Hy = /''/g, By = /[a-zA-Z]/;
function Qy(e, t, n) {
  var r, a, i, o, u, l, s, p, h, v, y, w, k, x, c, d, f, m;
  be(2, arguments);
  var g = String(t), _ = So(), S = (r = (a = n == null ? void 0 : n.locale) !== null && a !== void 0 ? a : _.locale) !== null && r !== void 0 ? r : by, E = Zn((i = (o = (u = (l = n == null ? void 0 : n.firstWeekContainsDate) !== null && l !== void 0 ? l : n == null || (s = n.locale) === null || s === void 0 || (p = s.options) === null || p === void 0 ? void 0 : p.firstWeekContainsDate) !== null && u !== void 0 ? u : _.firstWeekContainsDate) !== null && o !== void 0 ? o : (h = _.locale) === null || h === void 0 || (v = h.options) === null || v === void 0 ? void 0 : v.firstWeekContainsDate) !== null && i !== void 0 ? i : 1);
  if (!(E >= 1 && E <= 7))
    throw new RangeError("firstWeekContainsDate must be between 1 and 7 inclusively");
  var $ = Zn((y = (w = (k = (x = n == null ? void 0 : n.weekStartsOn) !== null && x !== void 0 ? x : n == null || (c = n.locale) === null || c === void 0 || (d = c.options) === null || d === void 0 ? void 0 : d.weekStartsOn) !== null && k !== void 0 ? k : _.weekStartsOn) !== null && w !== void 0 ? w : (f = _.locale) === null || f === void 0 || (m = f.options) === null || m === void 0 ? void 0 : m.weekStartsOn) !== null && y !== void 0 ? y : 0);
  if (!($ >= 0 && $ <= 6))
    throw new RangeError("weekStartsOn must be between 0 and 6 inclusively");
  if (!S.localize)
    throw new RangeError("locale must contain localize property");
  if (!S.formatLong)
    throw new RangeError("locale must contain formatLong property");
  var P = Lt(e);
  if (!Fg(P))
    throw new RangeError("Invalid time value");
  var ee = $g(P), Oe = Ag(P, ee), ge = {
    firstWeekContainsDate: E,
    weekStartsOn: $,
    locale: S,
    _originalDate: P
  }, te = g.match(Vy).map(function(pe) {
    var ye = pe[0];
    if (ye === "p" || ye === "P") {
      var Le = Jg[ye];
      return Le(pe, S.formatLong);
    }
    return pe;
  }).join("").match(Yy).map(function(pe) {
    if (pe === "''")
      return "'";
    var ye = pe[0];
    if (ye === "'")
      return qy(pe);
    var Le = Gg[ye];
    if (Le)
      return !(n != null && n.useAdditionalWeekYearTokens) && ry(pe) && hd(pe, t, String(e)), !(n != null && n.useAdditionalDayOfYearTokens) && ny(pe) && hd(pe, t, String(e)), Le(Oe, pe, S.localize, ge);
    if (ye.match(By))
      throw new RangeError("Format string contains an unescaped latin alphabet character `" + ye + "`");
    return pe;
  }).join("");
  return te;
}
function qy(e) {
  var t = e.match(Zy);
  return t ? t[1].replace(Hy, "'") : e;
}
var pl = { exports: {} }, fm = { exports: {} };
(function(e) {
  function t(n) {
    return n && n.__esModule ? n : {
      default: n
    };
  }
  e.exports = t, e.exports.__esModule = !0, e.exports.default = e.exports;
})(fm);
var ce = fm.exports, ml = { exports: {} }, hl = { exports: {} }, pm = { exports: {} };
(function(e) {
  function t(n) {
    "@babel/helpers - typeof";
    return e.exports = t = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(r) {
      return typeof r;
    } : function(r) {
      return r && typeof Symbol == "function" && r.constructor === Symbol && r !== Symbol.prototype ? "symbol" : typeof r;
    }, e.exports.__esModule = !0, e.exports.default = e.exports, t(n);
  }
  e.exports = t, e.exports.__esModule = !0, e.exports.default = e.exports;
})(pm);
var mm = pm.exports, vl = { exports: {} };
(function(e, t) {
  Object.defineProperty(t, "__esModule", {
    value: !0
  }), t.default = n;
  function n(r, a) {
    if (a.length < r)
      throw new TypeError(r + " argument" + (r > 1 ? "s" : "") + " required, but only " + a.length + " present");
  }
  e.exports = t.default;
})(vl, vl.exports);
var Ye = vl.exports;
(function(e, t) {
  var n = ce.default;
  Object.defineProperty(t, "__esModule", {
    value: !0
  }), t.default = i;
  var r = n(mm), a = n(Ye);
  function i(o) {
    return (0, a.default)(1, arguments), o instanceof Date || (0, r.default)(o) === "object" && Object.prototype.toString.call(o) === "[object Date]";
  }
  e.exports = t.default;
})(hl, hl.exports);
var Xy = hl.exports, gl = { exports: {} };
(function(e, t) {
  var n = ce.default;
  Object.defineProperty(t, "__esModule", {
    value: !0
  }), t.default = i;
  var r = n(mm), a = n(Ye);
  function i(o) {
    (0, a.default)(1, arguments);
    var u = Object.prototype.toString.call(o);
    return o instanceof Date || (0, r.default)(o) === "object" && u === "[object Date]" ? new Date(o.getTime()) : typeof o == "number" || u === "[object Number]" ? new Date(o) : ((typeof o == "string" || u === "[object String]") && typeof console < "u" && (console.warn("Starting with v2.0.0-beta.1 date-fns doesn't accept strings as date arguments. Please use `parseISO` to parse strings. See: https://github.com/date-fns/date-fns/blob/master/docs/upgradeGuide.md#string-arguments"), console.warn(new Error().stack)), /* @__PURE__ */ new Date(NaN));
  }
  e.exports = t.default;
})(gl, gl.exports);
var It = gl.exports;
(function(e, t) {
  var n = ce.default;
  Object.defineProperty(t, "__esModule", {
    value: !0
  }), t.default = o;
  var r = n(Xy), a = n(It), i = n(Ye);
  function o(u) {
    if ((0, i.default)(1, arguments), !(0, r.default)(u) && typeof u != "number")
      return !1;
    var l = (0, a.default)(u);
    return !isNaN(Number(l));
  }
  e.exports = t.default;
})(ml, ml.exports);
var Gy = ml.exports, yl = { exports: {} }, wl = { exports: {} }, _l = { exports: {} };
(function(e, t) {
  Object.defineProperty(t, "__esModule", {
    value: !0
  }), t.default = n;
  function n(r) {
    if (r === null || r === !0 || r === !1)
      return NaN;
    var a = Number(r);
    return isNaN(a) ? a : a < 0 ? Math.ceil(a) : Math.floor(a);
  }
  e.exports = t.default;
})(_l, _l.exports);
var Qn = _l.exports;
const Ky = /* @__PURE__ */ Ia(Qn);
(function(e, t) {
  var n = ce.default;
  Object.defineProperty(t, "__esModule", {
    value: !0
  }), t.default = o;
  var r = n(Qn), a = n(It), i = n(Ye);
  function o(u, l) {
    (0, i.default)(2, arguments);
    var s = (0, a.default)(u).getTime(), p = (0, r.default)(l);
    return new Date(s + p);
  }
  e.exports = t.default;
})(wl, wl.exports);
var Jy = wl.exports;
(function(e, t) {
  var n = ce.default;
  Object.defineProperty(t, "__esModule", {
    value: !0
  }), t.default = o;
  var r = n(Jy), a = n(Ye), i = n(Qn);
  function o(u, l) {
    (0, a.default)(2, arguments);
    var s = (0, i.default)(l);
    return (0, r.default)(u, -s);
  }
  e.exports = t.default;
})(yl, yl.exports);
var e1 = yl.exports, xl = { exports: {} }, kl = { exports: {} };
(function(e, t) {
  var n = ce.default;
  Object.defineProperty(t, "__esModule", {
    value: !0
  }), t.default = o;
  var r = n(It), a = n(Ye), i = 864e5;
  function o(u) {
    (0, a.default)(1, arguments);
    var l = (0, r.default)(u), s = l.getTime();
    l.setUTCMonth(0, 1), l.setUTCHours(0, 0, 0, 0);
    var p = l.getTime(), h = s - p;
    return Math.floor(h / i) + 1;
  }
  e.exports = t.default;
})(kl, kl.exports);
var t1 = kl.exports, Sl = { exports: {} }, Tl = { exports: {} };
(function(e, t) {
  var n = ce.default;
  Object.defineProperty(t, "__esModule", {
    value: !0
  }), t.default = i;
  var r = n(It), a = n(Ye);
  function i(o) {
    (0, a.default)(1, arguments);
    var u = 1, l = (0, r.default)(o), s = l.getUTCDay(), p = (s < u ? 7 : 0) + s - u;
    return l.setUTCDate(l.getUTCDate() - p), l.setUTCHours(0, 0, 0, 0), l;
  }
  e.exports = t.default;
})(Tl, Tl.exports);
var Zs = Tl.exports, Cl = { exports: {} }, El = { exports: {} };
(function(e, t) {
  var n = ce.default;
  Object.defineProperty(t, "__esModule", {
    value: !0
  }), t.default = o;
  var r = n(It), a = n(Ye), i = n(Zs);
  function o(u) {
    (0, a.default)(1, arguments);
    var l = (0, r.default)(u), s = l.getUTCFullYear(), p = /* @__PURE__ */ new Date(0);
    p.setUTCFullYear(s + 1, 0, 4), p.setUTCHours(0, 0, 0, 0);
    var h = (0, i.default)(p), v = /* @__PURE__ */ new Date(0);
    v.setUTCFullYear(s, 0, 4), v.setUTCHours(0, 0, 0, 0);
    var y = (0, i.default)(v);
    return l.getTime() >= h.getTime() ? s + 1 : l.getTime() >= y.getTime() ? s : s - 1;
  }
  e.exports = t.default;
})(El, El.exports);
var hm = El.exports;
(function(e, t) {
  var n = ce.default;
  Object.defineProperty(t, "__esModule", {
    value: !0
  }), t.default = o;
  var r = n(hm), a = n(Zs), i = n(Ye);
  function o(u) {
    (0, i.default)(1, arguments);
    var l = (0, r.default)(u), s = /* @__PURE__ */ new Date(0);
    s.setUTCFullYear(l, 0, 4), s.setUTCHours(0, 0, 0, 0);
    var p = (0, a.default)(s);
    return p;
  }
  e.exports = t.default;
})(Cl, Cl.exports);
var n1 = Cl.exports;
(function(e, t) {
  var n = ce.default;
  Object.defineProperty(t, "__esModule", {
    value: !0
  }), t.default = l;
  var r = n(It), a = n(Zs), i = n(n1), o = n(Ye), u = 6048e5;
  function l(s) {
    (0, o.default)(1, arguments);
    var p = (0, r.default)(s), h = (0, a.default)(p).getTime() - (0, i.default)(p).getTime();
    return Math.round(h / u) + 1;
  }
  e.exports = t.default;
})(Sl, Sl.exports);
var r1 = Sl.exports, Ol = { exports: {} }, Dl = { exports: {} }, qn = {};
Object.defineProperty(qn, "__esModule", {
  value: !0
});
qn.getDefaultOptions = a1;
qn.setDefaultOptions = i1;
var vm = {};
function a1() {
  return vm;
}
function i1(e) {
  vm = e;
}
(function(e, t) {
  var n = ce.default;
  Object.defineProperty(t, "__esModule", {
    value: !0
  }), t.default = u;
  var r = n(It), a = n(Ye), i = n(Qn), o = qn;
  function u(l, s) {
    var p, h, v, y, w, k, x, c;
    (0, a.default)(1, arguments);
    var d = (0, o.getDefaultOptions)(), f = (0, i.default)((p = (h = (v = (y = s == null ? void 0 : s.weekStartsOn) !== null && y !== void 0 ? y : s == null || (w = s.locale) === null || w === void 0 || (k = w.options) === null || k === void 0 ? void 0 : k.weekStartsOn) !== null && v !== void 0 ? v : d.weekStartsOn) !== null && h !== void 0 ? h : (x = d.locale) === null || x === void 0 || (c = x.options) === null || c === void 0 ? void 0 : c.weekStartsOn) !== null && p !== void 0 ? p : 0);
    if (!(f >= 0 && f <= 6))
      throw new RangeError("weekStartsOn must be between 0 and 6 inclusively");
    var m = (0, r.default)(l), g = m.getUTCDay(), _ = (g < f ? 7 : 0) + g - f;
    return m.setUTCDate(m.getUTCDate() - _), m.setUTCHours(0, 0, 0, 0), m;
  }
  e.exports = t.default;
})(Dl, Dl.exports);
var Hs = Dl.exports, Ml = { exports: {} }, Nl = { exports: {} };
(function(e, t) {
  var n = ce.default;
  Object.defineProperty(t, "__esModule", {
    value: !0
  }), t.default = l;
  var r = n(It), a = n(Ye), i = n(Hs), o = n(Qn), u = qn;
  function l(s, p) {
    var h, v, y, w, k, x, c, d;
    (0, a.default)(1, arguments);
    var f = (0, r.default)(s), m = f.getUTCFullYear(), g = (0, u.getDefaultOptions)(), _ = (0, o.default)((h = (v = (y = (w = p == null ? void 0 : p.firstWeekContainsDate) !== null && w !== void 0 ? w : p == null || (k = p.locale) === null || k === void 0 || (x = k.options) === null || x === void 0 ? void 0 : x.firstWeekContainsDate) !== null && y !== void 0 ? y : g.firstWeekContainsDate) !== null && v !== void 0 ? v : (c = g.locale) === null || c === void 0 || (d = c.options) === null || d === void 0 ? void 0 : d.firstWeekContainsDate) !== null && h !== void 0 ? h : 1);
    if (!(_ >= 1 && _ <= 7))
      throw new RangeError("firstWeekContainsDate must be between 1 and 7 inclusively");
    var S = /* @__PURE__ */ new Date(0);
    S.setUTCFullYear(m + 1, 0, _), S.setUTCHours(0, 0, 0, 0);
    var E = (0, i.default)(S, p), $ = /* @__PURE__ */ new Date(0);
    $.setUTCFullYear(m, 0, _), $.setUTCHours(0, 0, 0, 0);
    var P = (0, i.default)($, p);
    return f.getTime() >= E.getTime() ? m + 1 : f.getTime() >= P.getTime() ? m : m - 1;
  }
  e.exports = t.default;
})(Nl, Nl.exports);
var gm = Nl.exports;
(function(e, t) {
  var n = ce.default;
  Object.defineProperty(t, "__esModule", {
    value: !0
  }), t.default = l;
  var r = n(gm), a = n(Ye), i = n(Hs), o = n(Qn), u = qn;
  function l(s, p) {
    var h, v, y, w, k, x, c, d;
    (0, a.default)(1, arguments);
    var f = (0, u.getDefaultOptions)(), m = (0, o.default)((h = (v = (y = (w = p == null ? void 0 : p.firstWeekContainsDate) !== null && w !== void 0 ? w : p == null || (k = p.locale) === null || k === void 0 || (x = k.options) === null || x === void 0 ? void 0 : x.firstWeekContainsDate) !== null && y !== void 0 ? y : f.firstWeekContainsDate) !== null && v !== void 0 ? v : (c = f.locale) === null || c === void 0 || (d = c.options) === null || d === void 0 ? void 0 : d.firstWeekContainsDate) !== null && h !== void 0 ? h : 1), g = (0, r.default)(s, p), _ = /* @__PURE__ */ new Date(0);
    _.setUTCFullYear(g, 0, m), _.setUTCHours(0, 0, 0, 0);
    var S = (0, i.default)(_, p);
    return S;
  }
  e.exports = t.default;
})(Ml, Ml.exports);
var o1 = Ml.exports;
(function(e, t) {
  var n = ce.default;
  Object.defineProperty(t, "__esModule", {
    value: !0
  }), t.default = l;
  var r = n(It), a = n(Hs), i = n(o1), o = n(Ye), u = 6048e5;
  function l(s, p) {
    (0, o.default)(1, arguments);
    var h = (0, r.default)(s), v = (0, a.default)(h, p).getTime() - (0, i.default)(h, p).getTime();
    return Math.round(v / u) + 1;
  }
  e.exports = t.default;
})(Ol, Ol.exports);
var u1 = Ol.exports, Pl = { exports: {} };
(function(e, t) {
  Object.defineProperty(t, "__esModule", {
    value: !0
  }), t.default = n;
  function n(r, a) {
    for (var i = r < 0 ? "-" : "", o = Math.abs(r).toString(); o.length < a; )
      o = "0" + o;
    return i + o;
  }
  e.exports = t.default;
})(Pl, Pl.exports);
var ym = Pl.exports, Rl = { exports: {} };
(function(e, t) {
  var n = ce.default;
  Object.defineProperty(t, "__esModule", {
    value: !0
  }), t.default = void 0;
  var r = n(ym), a = {
    // Year
    y: function(u, l) {
      var s = u.getUTCFullYear(), p = s > 0 ? s : 1 - s;
      return (0, r.default)(l === "yy" ? p % 100 : p, l.length);
    },
    // Month
    M: function(u, l) {
      var s = u.getUTCMonth();
      return l === "M" ? String(s + 1) : (0, r.default)(s + 1, 2);
    },
    // Day of the month
    d: function(u, l) {
      return (0, r.default)(u.getUTCDate(), l.length);
    },
    // AM or PM
    a: function(u, l) {
      var s = u.getUTCHours() / 12 >= 1 ? "pm" : "am";
      switch (l) {
        case "a":
        case "aa":
          return s.toUpperCase();
        case "aaa":
          return s;
        case "aaaaa":
          return s[0];
        case "aaaa":
        default:
          return s === "am" ? "a.m." : "p.m.";
      }
    },
    // Hour [1-12]
    h: function(u, l) {
      return (0, r.default)(u.getUTCHours() % 12 || 12, l.length);
    },
    // Hour [0-23]
    H: function(u, l) {
      return (0, r.default)(u.getUTCHours(), l.length);
    },
    // Minute
    m: function(u, l) {
      return (0, r.default)(u.getUTCMinutes(), l.length);
    },
    // Second
    s: function(u, l) {
      return (0, r.default)(u.getUTCSeconds(), l.length);
    },
    // Fraction of second
    S: function(u, l) {
      var s = l.length, p = u.getUTCMilliseconds(), h = Math.floor(p * Math.pow(10, s - 3));
      return (0, r.default)(h, l.length);
    }
  }, i = a;
  t.default = i, e.exports = t.default;
})(Rl, Rl.exports);
var l1 = Rl.exports;
(function(e, t) {
  var n = ce.default;
  Object.defineProperty(t, "__esModule", {
    value: !0
  }), t.default = void 0;
  var r = n(t1), a = n(r1), i = n(hm), o = n(u1), u = n(gm), l = n(ym), s = n(l1), p = {
    am: "am",
    pm: "pm",
    midnight: "midnight",
    noon: "noon",
    morning: "morning",
    afternoon: "afternoon",
    evening: "evening",
    night: "night"
  }, h = {
    // Era
    G: function(c, d, f) {
      var m = c.getUTCFullYear() > 0 ? 1 : 0;
      switch (d) {
        case "G":
        case "GG":
        case "GGG":
          return f.era(m, {
            width: "abbreviated"
          });
        case "GGGGG":
          return f.era(m, {
            width: "narrow"
          });
        case "GGGG":
        default:
          return f.era(m, {
            width: "wide"
          });
      }
    },
    // Year
    y: function(c, d, f) {
      if (d === "yo") {
        var m = c.getUTCFullYear(), g = m > 0 ? m : 1 - m;
        return f.ordinalNumber(g, {
          unit: "year"
        });
      }
      return s.default.y(c, d);
    },
    // Local week-numbering year
    Y: function(c, d, f, m) {
      var g = (0, u.default)(c, m), _ = g > 0 ? g : 1 - g;
      if (d === "YY") {
        var S = _ % 100;
        return (0, l.default)(S, 2);
      }
      return d === "Yo" ? f.ordinalNumber(_, {
        unit: "year"
      }) : (0, l.default)(_, d.length);
    },
    // ISO week-numbering year
    R: function(c, d) {
      var f = (0, i.default)(c);
      return (0, l.default)(f, d.length);
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
    u: function(c, d) {
      var f = c.getUTCFullYear();
      return (0, l.default)(f, d.length);
    },
    // Quarter
    Q: function(c, d, f) {
      var m = Math.ceil((c.getUTCMonth() + 1) / 3);
      switch (d) {
        case "Q":
          return String(m);
        case "QQ":
          return (0, l.default)(m, 2);
        case "Qo":
          return f.ordinalNumber(m, {
            unit: "quarter"
          });
        case "QQQ":
          return f.quarter(m, {
            width: "abbreviated",
            context: "formatting"
          });
        case "QQQQQ":
          return f.quarter(m, {
            width: "narrow",
            context: "formatting"
          });
        case "QQQQ":
        default:
          return f.quarter(m, {
            width: "wide",
            context: "formatting"
          });
      }
    },
    // Stand-alone quarter
    q: function(c, d, f) {
      var m = Math.ceil((c.getUTCMonth() + 1) / 3);
      switch (d) {
        case "q":
          return String(m);
        case "qq":
          return (0, l.default)(m, 2);
        case "qo":
          return f.ordinalNumber(m, {
            unit: "quarter"
          });
        case "qqq":
          return f.quarter(m, {
            width: "abbreviated",
            context: "standalone"
          });
        case "qqqqq":
          return f.quarter(m, {
            width: "narrow",
            context: "standalone"
          });
        case "qqqq":
        default:
          return f.quarter(m, {
            width: "wide",
            context: "standalone"
          });
      }
    },
    // Month
    M: function(c, d, f) {
      var m = c.getUTCMonth();
      switch (d) {
        case "M":
        case "MM":
          return s.default.M(c, d);
        case "Mo":
          return f.ordinalNumber(m + 1, {
            unit: "month"
          });
        case "MMM":
          return f.month(m, {
            width: "abbreviated",
            context: "formatting"
          });
        case "MMMMM":
          return f.month(m, {
            width: "narrow",
            context: "formatting"
          });
        case "MMMM":
        default:
          return f.month(m, {
            width: "wide",
            context: "formatting"
          });
      }
    },
    // Stand-alone month
    L: function(c, d, f) {
      var m = c.getUTCMonth();
      switch (d) {
        case "L":
          return String(m + 1);
        case "LL":
          return (0, l.default)(m + 1, 2);
        case "Lo":
          return f.ordinalNumber(m + 1, {
            unit: "month"
          });
        case "LLL":
          return f.month(m, {
            width: "abbreviated",
            context: "standalone"
          });
        case "LLLLL":
          return f.month(m, {
            width: "narrow",
            context: "standalone"
          });
        case "LLLL":
        default:
          return f.month(m, {
            width: "wide",
            context: "standalone"
          });
      }
    },
    // Local week of year
    w: function(c, d, f, m) {
      var g = (0, o.default)(c, m);
      return d === "wo" ? f.ordinalNumber(g, {
        unit: "week"
      }) : (0, l.default)(g, d.length);
    },
    // ISO week of year
    I: function(c, d, f) {
      var m = (0, a.default)(c);
      return d === "Io" ? f.ordinalNumber(m, {
        unit: "week"
      }) : (0, l.default)(m, d.length);
    },
    // Day of the month
    d: function(c, d, f) {
      return d === "do" ? f.ordinalNumber(c.getUTCDate(), {
        unit: "date"
      }) : s.default.d(c, d);
    },
    // Day of year
    D: function(c, d, f) {
      var m = (0, r.default)(c);
      return d === "Do" ? f.ordinalNumber(m, {
        unit: "dayOfYear"
      }) : (0, l.default)(m, d.length);
    },
    // Day of week
    E: function(c, d, f) {
      var m = c.getUTCDay();
      switch (d) {
        case "E":
        case "EE":
        case "EEE":
          return f.day(m, {
            width: "abbreviated",
            context: "formatting"
          });
        case "EEEEE":
          return f.day(m, {
            width: "narrow",
            context: "formatting"
          });
        case "EEEEEE":
          return f.day(m, {
            width: "short",
            context: "formatting"
          });
        case "EEEE":
        default:
          return f.day(m, {
            width: "wide",
            context: "formatting"
          });
      }
    },
    // Local day of week
    e: function(c, d, f, m) {
      var g = c.getUTCDay(), _ = (g - m.weekStartsOn + 8) % 7 || 7;
      switch (d) {
        case "e":
          return String(_);
        case "ee":
          return (0, l.default)(_, 2);
        case "eo":
          return f.ordinalNumber(_, {
            unit: "day"
          });
        case "eee":
          return f.day(g, {
            width: "abbreviated",
            context: "formatting"
          });
        case "eeeee":
          return f.day(g, {
            width: "narrow",
            context: "formatting"
          });
        case "eeeeee":
          return f.day(g, {
            width: "short",
            context: "formatting"
          });
        case "eeee":
        default:
          return f.day(g, {
            width: "wide",
            context: "formatting"
          });
      }
    },
    // Stand-alone local day of week
    c: function(c, d, f, m) {
      var g = c.getUTCDay(), _ = (g - m.weekStartsOn + 8) % 7 || 7;
      switch (d) {
        case "c":
          return String(_);
        case "cc":
          return (0, l.default)(_, d.length);
        case "co":
          return f.ordinalNumber(_, {
            unit: "day"
          });
        case "ccc":
          return f.day(g, {
            width: "abbreviated",
            context: "standalone"
          });
        case "ccccc":
          return f.day(g, {
            width: "narrow",
            context: "standalone"
          });
        case "cccccc":
          return f.day(g, {
            width: "short",
            context: "standalone"
          });
        case "cccc":
        default:
          return f.day(g, {
            width: "wide",
            context: "standalone"
          });
      }
    },
    // ISO day of week
    i: function(c, d, f) {
      var m = c.getUTCDay(), g = m === 0 ? 7 : m;
      switch (d) {
        case "i":
          return String(g);
        case "ii":
          return (0, l.default)(g, d.length);
        case "io":
          return f.ordinalNumber(g, {
            unit: "day"
          });
        case "iii":
          return f.day(m, {
            width: "abbreviated",
            context: "formatting"
          });
        case "iiiii":
          return f.day(m, {
            width: "narrow",
            context: "formatting"
          });
        case "iiiiii":
          return f.day(m, {
            width: "short",
            context: "formatting"
          });
        case "iiii":
        default:
          return f.day(m, {
            width: "wide",
            context: "formatting"
          });
      }
    },
    // AM or PM
    a: function(c, d, f) {
      var m = c.getUTCHours(), g = m / 12 >= 1 ? "pm" : "am";
      switch (d) {
        case "a":
        case "aa":
          return f.dayPeriod(g, {
            width: "abbreviated",
            context: "formatting"
          });
        case "aaa":
          return f.dayPeriod(g, {
            width: "abbreviated",
            context: "formatting"
          }).toLowerCase();
        case "aaaaa":
          return f.dayPeriod(g, {
            width: "narrow",
            context: "formatting"
          });
        case "aaaa":
        default:
          return f.dayPeriod(g, {
            width: "wide",
            context: "formatting"
          });
      }
    },
    // AM, PM, midnight, noon
    b: function(c, d, f) {
      var m = c.getUTCHours(), g;
      switch (m === 12 ? g = p.noon : m === 0 ? g = p.midnight : g = m / 12 >= 1 ? "pm" : "am", d) {
        case "b":
        case "bb":
          return f.dayPeriod(g, {
            width: "abbreviated",
            context: "formatting"
          });
        case "bbb":
          return f.dayPeriod(g, {
            width: "abbreviated",
            context: "formatting"
          }).toLowerCase();
        case "bbbbb":
          return f.dayPeriod(g, {
            width: "narrow",
            context: "formatting"
          });
        case "bbbb":
        default:
          return f.dayPeriod(g, {
            width: "wide",
            context: "formatting"
          });
      }
    },
    // in the morning, in the afternoon, in the evening, at night
    B: function(c, d, f) {
      var m = c.getUTCHours(), g;
      switch (m >= 17 ? g = p.evening : m >= 12 ? g = p.afternoon : m >= 4 ? g = p.morning : g = p.night, d) {
        case "B":
        case "BB":
        case "BBB":
          return f.dayPeriod(g, {
            width: "abbreviated",
            context: "formatting"
          });
        case "BBBBB":
          return f.dayPeriod(g, {
            width: "narrow",
            context: "formatting"
          });
        case "BBBB":
        default:
          return f.dayPeriod(g, {
            width: "wide",
            context: "formatting"
          });
      }
    },
    // Hour [1-12]
    h: function(c, d, f) {
      if (d === "ho") {
        var m = c.getUTCHours() % 12;
        return m === 0 && (m = 12), f.ordinalNumber(m, {
          unit: "hour"
        });
      }
      return s.default.h(c, d);
    },
    // Hour [0-23]
    H: function(c, d, f) {
      return d === "Ho" ? f.ordinalNumber(c.getUTCHours(), {
        unit: "hour"
      }) : s.default.H(c, d);
    },
    // Hour [0-11]
    K: function(c, d, f) {
      var m = c.getUTCHours() % 12;
      return d === "Ko" ? f.ordinalNumber(m, {
        unit: "hour"
      }) : (0, l.default)(m, d.length);
    },
    // Hour [1-24]
    k: function(c, d, f) {
      var m = c.getUTCHours();
      return m === 0 && (m = 24), d === "ko" ? f.ordinalNumber(m, {
        unit: "hour"
      }) : (0, l.default)(m, d.length);
    },
    // Minute
    m: function(c, d, f) {
      return d === "mo" ? f.ordinalNumber(c.getUTCMinutes(), {
        unit: "minute"
      }) : s.default.m(c, d);
    },
    // Second
    s: function(c, d, f) {
      return d === "so" ? f.ordinalNumber(c.getUTCSeconds(), {
        unit: "second"
      }) : s.default.s(c, d);
    },
    // Fraction of second
    S: function(c, d) {
      return s.default.S(c, d);
    },
    // Timezone (ISO-8601. If offset is 0, output is always `'Z'`)
    X: function(c, d, f, m) {
      var g = m._originalDate || c, _ = g.getTimezoneOffset();
      if (_ === 0)
        return "Z";
      switch (d) {
        case "X":
          return y(_);
        case "XXXX":
        case "XX":
          return w(_);
        case "XXXXX":
        case "XXX":
        default:
          return w(_, ":");
      }
    },
    // Timezone (ISO-8601. If offset is 0, output is `'+00:00'` or equivalent)
    x: function(c, d, f, m) {
      var g = m._originalDate || c, _ = g.getTimezoneOffset();
      switch (d) {
        case "x":
          return y(_);
        case "xxxx":
        case "xx":
          return w(_);
        case "xxxxx":
        case "xxx":
        default:
          return w(_, ":");
      }
    },
    // Timezone (GMT)
    O: function(c, d, f, m) {
      var g = m._originalDate || c, _ = g.getTimezoneOffset();
      switch (d) {
        case "O":
        case "OO":
        case "OOO":
          return "GMT" + v(_, ":");
        case "OOOO":
        default:
          return "GMT" + w(_, ":");
      }
    },
    // Timezone (specific non-location)
    z: function(c, d, f, m) {
      var g = m._originalDate || c, _ = g.getTimezoneOffset();
      switch (d) {
        case "z":
        case "zz":
        case "zzz":
          return "GMT" + v(_, ":");
        case "zzzz":
        default:
          return "GMT" + w(_, ":");
      }
    },
    // Seconds timestamp
    t: function(c, d, f, m) {
      var g = m._originalDate || c, _ = Math.floor(g.getTime() / 1e3);
      return (0, l.default)(_, d.length);
    },
    // Milliseconds timestamp
    T: function(c, d, f, m) {
      var g = m._originalDate || c, _ = g.getTime();
      return (0, l.default)(_, d.length);
    }
  };
  function v(x, c) {
    var d = x > 0 ? "-" : "+", f = Math.abs(x), m = Math.floor(f / 60), g = f % 60;
    if (g === 0)
      return d + String(m);
    var _ = c || "";
    return d + String(m) + _ + (0, l.default)(g, 2);
  }
  function y(x, c) {
    if (x % 60 === 0) {
      var d = x > 0 ? "-" : "+";
      return d + (0, l.default)(Math.abs(x) / 60, 2);
    }
    return w(x, c);
  }
  function w(x, c) {
    var d = c || "", f = x > 0 ? "-" : "+", m = Math.abs(x), g = (0, l.default)(Math.floor(m / 60), 2), _ = (0, l.default)(m % 60, 2);
    return f + g + d + _;
  }
  var k = h;
  t.default = k, e.exports = t.default;
})(xl, xl.exports);
var s1 = xl.exports, Ll = { exports: {} };
(function(e, t) {
  Object.defineProperty(t, "__esModule", {
    value: !0
  }), t.default = void 0;
  var n = function(l, s) {
    switch (l) {
      case "P":
        return s.date({
          width: "short"
        });
      case "PP":
        return s.date({
          width: "medium"
        });
      case "PPP":
        return s.date({
          width: "long"
        });
      case "PPPP":
      default:
        return s.date({
          width: "full"
        });
    }
  }, r = function(l, s) {
    switch (l) {
      case "p":
        return s.time({
          width: "short"
        });
      case "pp":
        return s.time({
          width: "medium"
        });
      case "ppp":
        return s.time({
          width: "long"
        });
      case "pppp":
      default:
        return s.time({
          width: "full"
        });
    }
  }, a = function(l, s) {
    var p = l.match(/(P+)(p+)?/) || [], h = p[1], v = p[2];
    if (!v)
      return n(l, s);
    var y;
    switch (h) {
      case "P":
        y = s.dateTime({
          width: "short"
        });
        break;
      case "PP":
        y = s.dateTime({
          width: "medium"
        });
        break;
      case "PPP":
        y = s.dateTime({
          width: "long"
        });
        break;
      case "PPPP":
      default:
        y = s.dateTime({
          width: "full"
        });
        break;
    }
    return y.replace("{{date}}", n(h, s)).replace("{{time}}", r(v, s));
  }, i = {
    p: r,
    P: a
  }, o = i;
  t.default = o, e.exports = t.default;
})(Ll, Ll.exports);
var c1 = Ll.exports, Il = { exports: {} };
(function(e, t) {
  Object.defineProperty(t, "__esModule", {
    value: !0
  }), t.default = n;
  function n(r) {
    var a = new Date(Date.UTC(r.getFullYear(), r.getMonth(), r.getDate(), r.getHours(), r.getMinutes(), r.getSeconds(), r.getMilliseconds()));
    return a.setUTCFullYear(r.getFullYear()), r.getTime() - a.getTime();
  }
  e.exports = t.default;
})(Il, Il.exports);
var wm = Il.exports;
const vd = /* @__PURE__ */ Ia(wm);
var Aa = {};
Object.defineProperty(Aa, "__esModule", {
  value: !0
});
Aa.isProtectedDayOfYearToken = p1;
Aa.isProtectedWeekYearToken = m1;
Aa.throwProtectedError = h1;
var d1 = ["D", "DD"], f1 = ["YY", "YYYY"];
function p1(e) {
  return d1.indexOf(e) !== -1;
}
function m1(e) {
  return f1.indexOf(e) !== -1;
}
function h1(e, t, n) {
  if (e === "YYYY")
    throw new RangeError("Use `yyyy` instead of `YYYY` (in `".concat(t, "`) for formatting years to the input `").concat(n, "`; see: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md"));
  if (e === "YY")
    throw new RangeError("Use `yy` instead of `YY` (in `".concat(t, "`) for formatting years to the input `").concat(n, "`; see: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md"));
  if (e === "D")
    throw new RangeError("Use `d` instead of `D` (in `".concat(t, "`) for formatting days of the month to the input `").concat(n, "`; see: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md"));
  if (e === "DD")
    throw new RangeError("Use `dd` instead of `DD` (in `".concat(t, "`) for formatting days of the month to the input `").concat(n, "`; see: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md"));
}
var Ul = { exports: {} }, jl = { exports: {} }, zl = { exports: {} };
(function(e, t) {
  Object.defineProperty(t, "__esModule", {
    value: !0
  }), t.default = void 0;
  var n = {
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
  }, r = function(o, u, l) {
    var s, p = n[o];
    return typeof p == "string" ? s = p : u === 1 ? s = p.one : s = p.other.replace("{{count}}", u.toString()), l != null && l.addSuffix ? l.comparison && l.comparison > 0 ? "in " + s : s + " ago" : s;
  }, a = r;
  t.default = a, e.exports = t.default;
})(zl, zl.exports);
var v1 = zl.exports, $l = { exports: {} }, Wl = { exports: {} };
(function(e, t) {
  Object.defineProperty(t, "__esModule", {
    value: !0
  }), t.default = n;
  function n(r) {
    return function() {
      var a = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {}, i = a.width ? String(a.width) : r.defaultWidth, o = r.formats[i] || r.formats[r.defaultWidth];
      return o;
    };
  }
  e.exports = t.default;
})(Wl, Wl.exports);
var g1 = Wl.exports;
(function(e, t) {
  var n = ce.default;
  Object.defineProperty(t, "__esModule", {
    value: !0
  }), t.default = void 0;
  var r = n(g1), a = {
    full: "EEEE, MMMM do, y",
    long: "MMMM do, y",
    medium: "MMM d, y",
    short: "MM/dd/yyyy"
  }, i = {
    full: "h:mm:ss a zzzz",
    long: "h:mm:ss a z",
    medium: "h:mm:ss a",
    short: "h:mm a"
  }, o = {
    full: "{{date}} 'at' {{time}}",
    long: "{{date}} 'at' {{time}}",
    medium: "{{date}}, {{time}}",
    short: "{{date}}, {{time}}"
  }, u = {
    date: (0, r.default)({
      formats: a,
      defaultWidth: "full"
    }),
    time: (0, r.default)({
      formats: i,
      defaultWidth: "full"
    }),
    dateTime: (0, r.default)({
      formats: o,
      defaultWidth: "full"
    })
  }, l = u;
  t.default = l, e.exports = t.default;
})($l, $l.exports);
var y1 = $l.exports, Fl = { exports: {} };
(function(e, t) {
  Object.defineProperty(t, "__esModule", {
    value: !0
  }), t.default = void 0;
  var n = {
    lastWeek: "'last' eeee 'at' p",
    yesterday: "'yesterday at' p",
    today: "'today at' p",
    tomorrow: "'tomorrow at' p",
    nextWeek: "eeee 'at' p",
    other: "P"
  }, r = function(o, u, l, s) {
    return n[o];
  }, a = r;
  t.default = a, e.exports = t.default;
})(Fl, Fl.exports);
var w1 = Fl.exports, Al = { exports: {} }, bl = { exports: {} };
(function(e, t) {
  Object.defineProperty(t, "__esModule", {
    value: !0
  }), t.default = n;
  function n(r) {
    return function(a, i) {
      var o = i != null && i.context ? String(i.context) : "standalone", u;
      if (o === "formatting" && r.formattingValues) {
        var l = r.defaultFormattingWidth || r.defaultWidth, s = i != null && i.width ? String(i.width) : l;
        u = r.formattingValues[s] || r.formattingValues[l];
      } else {
        var p = r.defaultWidth, h = i != null && i.width ? String(i.width) : r.defaultWidth;
        u = r.values[h] || r.values[p];
      }
      var v = r.argumentCallback ? r.argumentCallback(a) : a;
      return u[v];
    };
  }
  e.exports = t.default;
})(bl, bl.exports);
var _1 = bl.exports;
(function(e, t) {
  var n = ce.default;
  Object.defineProperty(t, "__esModule", {
    value: !0
  }), t.default = void 0;
  var r = n(_1), a = {
    narrow: ["B", "A"],
    abbreviated: ["BC", "AD"],
    wide: ["Before Christ", "Anno Domini"]
  }, i = {
    narrow: ["1", "2", "3", "4"],
    abbreviated: ["Q1", "Q2", "Q3", "Q4"],
    wide: ["1st quarter", "2nd quarter", "3rd quarter", "4th quarter"]
  }, o = {
    narrow: ["J", "F", "M", "A", "M", "J", "J", "A", "S", "O", "N", "D"],
    abbreviated: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
    wide: ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"]
  }, u = {
    narrow: ["S", "M", "T", "W", "T", "F", "S"],
    short: ["Su", "Mo", "Tu", "We", "Th", "Fr", "Sa"],
    abbreviated: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
    wide: ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"]
  }, l = {
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
  }, s = {
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
  }, p = function(w, k) {
    var x = Number(w), c = x % 100;
    if (c > 20 || c < 10)
      switch (c % 10) {
        case 1:
          return x + "st";
        case 2:
          return x + "nd";
        case 3:
          return x + "rd";
      }
    return x + "th";
  }, h = {
    ordinalNumber: p,
    era: (0, r.default)({
      values: a,
      defaultWidth: "wide"
    }),
    quarter: (0, r.default)({
      values: i,
      defaultWidth: "wide",
      argumentCallback: function(w) {
        return w - 1;
      }
    }),
    month: (0, r.default)({
      values: o,
      defaultWidth: "wide"
    }),
    day: (0, r.default)({
      values: u,
      defaultWidth: "wide"
    }),
    dayPeriod: (0, r.default)({
      values: l,
      defaultWidth: "wide",
      formattingValues: s,
      defaultFormattingWidth: "wide"
    })
  }, v = h;
  t.default = v, e.exports = t.default;
})(Al, Al.exports);
var x1 = Al.exports, Yl = { exports: {} }, Vl = { exports: {} };
(function(e, t) {
  Object.defineProperty(t, "__esModule", {
    value: !0
  }), t.default = n;
  function n(i) {
    return function(o) {
      var u = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, l = u.width, s = l && i.matchPatterns[l] || i.matchPatterns[i.defaultMatchWidth], p = o.match(s);
      if (!p)
        return null;
      var h = p[0], v = l && i.parsePatterns[l] || i.parsePatterns[i.defaultParseWidth], y = Array.isArray(v) ? a(v, function(x) {
        return x.test(h);
      }) : r(v, function(x) {
        return x.test(h);
      }), w;
      w = i.valueCallback ? i.valueCallback(y) : y, w = u.valueCallback ? u.valueCallback(w) : w;
      var k = o.slice(h.length);
      return {
        value: w,
        rest: k
      };
    };
  }
  function r(i, o) {
    for (var u in i)
      if (i.hasOwnProperty(u) && o(i[u]))
        return u;
  }
  function a(i, o) {
    for (var u = 0; u < i.length; u++)
      if (o(i[u]))
        return u;
  }
  e.exports = t.default;
})(Vl, Vl.exports);
var k1 = Vl.exports, Zl = { exports: {} };
(function(e, t) {
  Object.defineProperty(t, "__esModule", {
    value: !0
  }), t.default = n;
  function n(r) {
    return function(a) {
      var i = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, o = a.match(r.matchPattern);
      if (!o)
        return null;
      var u = o[0], l = a.match(r.parsePattern);
      if (!l)
        return null;
      var s = r.valueCallback ? r.valueCallback(l[0]) : l[0];
      s = i.valueCallback ? i.valueCallback(s) : s;
      var p = a.slice(u.length);
      return {
        value: s,
        rest: p
      };
    };
  }
  e.exports = t.default;
})(Zl, Zl.exports);
var S1 = Zl.exports;
(function(e, t) {
  var n = ce.default;
  Object.defineProperty(t, "__esModule", {
    value: !0
  }), t.default = void 0;
  var r = n(k1), a = n(S1), i = /^(\d+)(th|st|nd|rd)?/i, o = /\d+/i, u = {
    narrow: /^(b|a)/i,
    abbreviated: /^(b\.?\s?c\.?|b\.?\s?c\.?\s?e\.?|a\.?\s?d\.?|c\.?\s?e\.?)/i,
    wide: /^(before christ|before common era|anno domini|common era)/i
  }, l = {
    any: [/^b/i, /^(a|c)/i]
  }, s = {
    narrow: /^[1234]/i,
    abbreviated: /^q[1234]/i,
    wide: /^[1234](th|st|nd|rd)? quarter/i
  }, p = {
    any: [/1/i, /2/i, /3/i, /4/i]
  }, h = {
    narrow: /^[jfmasond]/i,
    abbreviated: /^(jan|feb|mar|apr|may|jun|jul|aug|sep|oct|nov|dec)/i,
    wide: /^(january|february|march|april|may|june|july|august|september|october|november|december)/i
  }, v = {
    narrow: [/^j/i, /^f/i, /^m/i, /^a/i, /^m/i, /^j/i, /^j/i, /^a/i, /^s/i, /^o/i, /^n/i, /^d/i],
    any: [/^ja/i, /^f/i, /^mar/i, /^ap/i, /^may/i, /^jun/i, /^jul/i, /^au/i, /^s/i, /^o/i, /^n/i, /^d/i]
  }, y = {
    narrow: /^[smtwf]/i,
    short: /^(su|mo|tu|we|th|fr|sa)/i,
    abbreviated: /^(sun|mon|tue|wed|thu|fri|sat)/i,
    wide: /^(sunday|monday|tuesday|wednesday|thursday|friday|saturday)/i
  }, w = {
    narrow: [/^s/i, /^m/i, /^t/i, /^w/i, /^t/i, /^f/i, /^s/i],
    any: [/^su/i, /^m/i, /^tu/i, /^w/i, /^th/i, /^f/i, /^sa/i]
  }, k = {
    narrow: /^(a|p|mi|n|(in the|at) (morning|afternoon|evening|night))/i,
    any: /^([ap]\.?\s?m\.?|midnight|noon|(in the|at) (morning|afternoon|evening|night))/i
  }, x = {
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
  }, c = {
    ordinalNumber: (0, a.default)({
      matchPattern: i,
      parsePattern: o,
      valueCallback: function(m) {
        return parseInt(m, 10);
      }
    }),
    era: (0, r.default)({
      matchPatterns: u,
      defaultMatchWidth: "wide",
      parsePatterns: l,
      defaultParseWidth: "any"
    }),
    quarter: (0, r.default)({
      matchPatterns: s,
      defaultMatchWidth: "wide",
      parsePatterns: p,
      defaultParseWidth: "any",
      valueCallback: function(m) {
        return m + 1;
      }
    }),
    month: (0, r.default)({
      matchPatterns: h,
      defaultMatchWidth: "wide",
      parsePatterns: v,
      defaultParseWidth: "any"
    }),
    day: (0, r.default)({
      matchPatterns: y,
      defaultMatchWidth: "wide",
      parsePatterns: w,
      defaultParseWidth: "any"
    }),
    dayPeriod: (0, r.default)({
      matchPatterns: k,
      defaultMatchWidth: "any",
      parsePatterns: x,
      defaultParseWidth: "any"
    })
  }, d = c;
  t.default = d, e.exports = t.default;
})(Yl, Yl.exports);
var T1 = Yl.exports;
(function(e, t) {
  var n = ce.default;
  Object.defineProperty(t, "__esModule", {
    value: !0
  }), t.default = void 0;
  var r = n(v1), a = n(y1), i = n(w1), o = n(x1), u = n(T1), l = {
    code: "en-US",
    formatDistance: r.default,
    formatLong: a.default,
    formatRelative: i.default,
    localize: o.default,
    match: u.default,
    options: {
      weekStartsOn: 0,
      firstWeekContainsDate: 1
    }
  }, s = l;
  t.default = s, e.exports = t.default;
})(jl, jl.exports);
var C1 = jl.exports;
(function(e, t) {
  var n = ce.default;
  Object.defineProperty(t, "__esModule", {
    value: !0
  }), t.default = void 0;
  var r = n(C1), a = r.default;
  t.default = a, e.exports = t.default;
})(Ul, Ul.exports);
var E1 = Ul.exports;
(function(e, t) {
  var n = ce.default;
  Object.defineProperty(t, "__esModule", {
    value: !0
  }), t.default = f;
  var r = n(Gy), a = n(e1), i = n(It), o = n(s1), u = n(c1), l = n(wm), s = Aa, p = n(Qn), h = n(Ye), v = qn, y = n(E1), w = /[yYQqMLwIdDecihHKkms]o|(\w)\1*|''|'(''|[^'])+('|$)|./g, k = /P+p+|P+|p+|''|'(''|[^'])+('|$)|./g, x = /^'([^]*?)'?$/, c = /''/g, d = /[a-zA-Z]/;
  function f(g, _, S) {
    var E, $, P, ee, Oe, ge, te, pe, ye, Le, O, I, U, b, H, Ge, Ve, it;
    (0, h.default)(2, arguments);
    var ot = String(_), Ke = (0, v.getDefaultOptions)(), En = (E = ($ = S == null ? void 0 : S.locale) !== null && $ !== void 0 ? $ : Ke.locale) !== null && E !== void 0 ? E : y.default, Rr = (0, p.default)((P = (ee = (Oe = (ge = S == null ? void 0 : S.firstWeekContainsDate) !== null && ge !== void 0 ? ge : S == null || (te = S.locale) === null || te === void 0 || (pe = te.options) === null || pe === void 0 ? void 0 : pe.firstWeekContainsDate) !== null && Oe !== void 0 ? Oe : Ke.firstWeekContainsDate) !== null && ee !== void 0 ? ee : (ye = Ke.locale) === null || ye === void 0 || (Le = ye.options) === null || Le === void 0 ? void 0 : Le.firstWeekContainsDate) !== null && P !== void 0 ? P : 1);
    if (!(Rr >= 1 && Rr <= 7))
      throw new RangeError("firstWeekContainsDate must be between 1 and 7 inclusively");
    var Ut = (0, p.default)((O = (I = (U = (b = S == null ? void 0 : S.weekStartsOn) !== null && b !== void 0 ? b : S == null || (H = S.locale) === null || H === void 0 || (Ge = H.options) === null || Ge === void 0 ? void 0 : Ge.weekStartsOn) !== null && U !== void 0 ? U : Ke.weekStartsOn) !== null && I !== void 0 ? I : (Ve = Ke.locale) === null || Ve === void 0 || (it = Ve.options) === null || it === void 0 ? void 0 : it.weekStartsOn) !== null && O !== void 0 ? O : 0);
    if (!(Ut >= 0 && Ut <= 6))
      throw new RangeError("weekStartsOn must be between 0 and 6 inclusively");
    if (!En.localize)
      throw new RangeError("locale must contain localize property");
    if (!En.formatLong)
      throw new RangeError("locale must contain formatLong property");
    var On = (0, i.default)(g);
    if (!(0, r.default)(On))
      throw new RangeError("Invalid time value");
    var q = (0, l.default)(On), X = (0, a.default)(On, q), xe = {
      firstWeekContainsDate: Rr,
      weekStartsOn: Ut,
      locale: En,
      _originalDate: On
    }, ae = ot.match(k).map(function(ne) {
      var Ie = ne[0];
      if (Ie === "p" || Ie === "P") {
        var de = u.default[Ie];
        return de(ne, En.formatLong);
      }
      return ne;
    }).join("").match(w).map(function(ne) {
      if (ne === "''")
        return "'";
      var Ie = ne[0];
      if (Ie === "'")
        return m(ne);
      var de = o.default[Ie];
      if (de)
        return !(S != null && S.useAdditionalWeekYearTokens) && (0, s.isProtectedWeekYearToken)(ne) && (0, s.throwProtectedError)(ne, _, String(g)), !(S != null && S.useAdditionalDayOfYearTokens) && (0, s.isProtectedDayOfYearToken)(ne) && (0, s.throwProtectedError)(ne, _, String(g)), de(X, ne, En.localize, xe);
      if (Ie.match(d))
        throw new RangeError("Format string contains an unescaped latin alphabet character `" + Ie + "`");
      return ne;
    }).join("");
    return ae;
  }
  function m(g) {
    var _ = g.match(x);
    return _ ? _[1].replace(c, "'") : g;
  }
  e.exports = t.default;
})(pl, pl.exports);
var O1 = pl.exports;
const D1 = /* @__PURE__ */ Ia(O1);
function gd(e, t, n) {
  var r = P1(e, n.timeZone, n.locale);
  return r.formatToParts ? M1(r, t) : N1(r, t);
}
function M1(e, t) {
  for (var n = e.formatToParts(t), r = n.length - 1; r >= 0; --r)
    if (n[r].type === "timeZoneName")
      return n[r].value;
}
function N1(e, t) {
  var n = e.format(t).replace(/\u200E/g, ""), r = / [\w-+ ]+$/.exec(n);
  return r ? r[0].substr(1) : "";
}
function P1(e, t, n) {
  if (n && !n.code)
    throw new Error(
      "date-fns-tz error: Please set a language code on the locale object imported from date-fns, e.g. `locale.code = 'en-US'`"
    );
  return new Intl.DateTimeFormat(n ? [n.code, "en-US"] : void 0, {
    timeZone: t,
    timeZoneName: e
  });
}
function R1(e, t) {
  var n = j1(t);
  return n.formatToParts ? I1(n, e) : U1(n, e);
}
var L1 = {
  year: 0,
  month: 1,
  day: 2,
  hour: 3,
  minute: 4,
  second: 5
};
function I1(e, t) {
  try {
    for (var n = e.formatToParts(t), r = [], a = 0; a < n.length; a++) {
      var i = L1[n[a].type];
      i >= 0 && (r[i] = parseInt(n[a].value, 10));
    }
    return r;
  } catch (o) {
    if (o instanceof RangeError)
      return [NaN];
    throw o;
  }
}
function U1(e, t) {
  var n = e.format(t).replace(/\u200E/g, ""), r = /(\d+)\/(\d+)\/(\d+),? (\d+):(\d+):(\d+)/.exec(n);
  return [r[3], r[1], r[2], r[4], r[5], r[6]];
}
var ou = {};
function j1(e) {
  if (!ou[e]) {
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
    ou[e] = n ? new Intl.DateTimeFormat("en-US", {
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
  return ou[e];
}
function _m(e, t, n, r, a, i, o) {
  var u = /* @__PURE__ */ new Date(0);
  return u.setUTCFullYear(e, t, n), u.setUTCHours(r, a, i, o), u;
}
var yd = 36e5, z1 = 6e4, uu = {
  timezone: /([Z+-].*)$/,
  timezoneZ: /^(Z)$/,
  timezoneHH: /^([+-]\d{2})$/,
  timezoneHHMM: /^([+-]\d{2}):?(\d{2})$/
};
function Bs(e, t, n) {
  var r, a;
  if (!e || (r = uu.timezoneZ.exec(e), r))
    return 0;
  var i;
  if (r = uu.timezoneHH.exec(e), r)
    return i = parseInt(r[1], 10), wd(i) ? -(i * yd) : NaN;
  if (r = uu.timezoneHHMM.exec(e), r) {
    i = parseInt(r[1], 10);
    var o = parseInt(r[2], 10);
    return wd(i, o) ? (a = Math.abs(i) * yd + o * z1, i > 0 ? -a : a) : NaN;
  }
  if (F1(e)) {
    t = new Date(t || Date.now());
    var u = n ? t : $1(t), l = Hl(u, e), s = n ? l : W1(t, l, e);
    return -s;
  }
  return NaN;
}
function $1(e) {
  return _m(
    e.getFullYear(),
    e.getMonth(),
    e.getDate(),
    e.getHours(),
    e.getMinutes(),
    e.getSeconds(),
    e.getMilliseconds()
  );
}
function Hl(e, t) {
  var n = R1(e, t), r = _m(
    n[0],
    n[1] - 1,
    n[2],
    n[3] % 24,
    n[4],
    n[5],
    0
  ).getTime(), a = e.getTime(), i = a % 1e3;
  return a -= i >= 0 ? i : 1e3 + i, r - a;
}
function W1(e, t, n) {
  var r = e.getTime(), a = r - t, i = Hl(new Date(a), n);
  if (t === i)
    return t;
  a -= i - t;
  var o = Hl(new Date(a), n);
  return i === o ? i : Math.max(i, o);
}
function wd(e, t) {
  return -23 <= e && e <= 23 && (t == null || 0 <= t && t <= 59);
}
var _d = {};
function F1(e) {
  if (_d[e])
    return !0;
  try {
    return new Intl.DateTimeFormat(void 0, { timeZone: e }), _d[e] = !0, !0;
  } catch {
    return !1;
  }
}
var A1 = 60 * 1e3, b1 = {
  // Timezone (ISO-8601. If offset is 0, output is always `'Z'`)
  X: function(e, t, n, r) {
    var a = lu(r.timeZone, r._originalDate || e);
    if (a === 0)
      return "Z";
    switch (t) {
      case "X":
        return xd(a);
      case "XXXX":
      case "XX":
        return Jn(a);
      case "XXXXX":
      case "XXX":
      default:
        return Jn(a, ":");
    }
  },
  // Timezone (ISO-8601. If offset is 0, output is `'+00:00'` or equivalent)
  x: function(e, t, n, r) {
    var a = lu(r.timeZone, r._originalDate || e);
    switch (t) {
      case "x":
        return xd(a);
      case "xxxx":
      case "xx":
        return Jn(a);
      case "xxxxx":
      case "xxx":
      default:
        return Jn(a, ":");
    }
  },
  // Timezone (GMT)
  O: function(e, t, n, r) {
    var a = lu(r.timeZone, r._originalDate || e);
    switch (t) {
      case "O":
      case "OO":
      case "OOO":
        return "GMT" + Y1(a, ":");
      case "OOOO":
      default:
        return "GMT" + Jn(a, ":");
    }
  },
  // Timezone (specific non-location)
  z: function(e, t, n, r) {
    var a = r._originalDate || e;
    switch (t) {
      case "z":
      case "zz":
      case "zzz":
        return gd("short", a, r);
      case "zzzz":
      default:
        return gd("long", a, r);
    }
  }
};
function lu(e, t) {
  var n = e ? Bs(e, t, !0) / A1 : t.getTimezoneOffset();
  if (Number.isNaN(n))
    throw new RangeError("Invalid time zone specified: " + e);
  return n;
}
function no(e, t) {
  for (var n = e < 0 ? "-" : "", r = Math.abs(e).toString(); r.length < t; )
    r = "0" + r;
  return n + r;
}
function Jn(e, t) {
  var n = t || "", r = e > 0 ? "-" : "+", a = Math.abs(e), i = no(Math.floor(a / 60), 2), o = no(Math.floor(a % 60), 2);
  return r + i + n + o;
}
function xd(e, t) {
  if (e % 60 === 0) {
    var n = e > 0 ? "-" : "+";
    return n + no(Math.abs(e) / 60, 2);
  }
  return Jn(e, t);
}
function Y1(e, t) {
  var n = e > 0 ? "-" : "+", r = Math.abs(e), a = Math.floor(r / 60), i = r % 60;
  if (i === 0)
    return n + String(a);
  var o = t || "";
  return n + String(a) + o + no(i, 2);
}
var V1 = /(Z|[+-]\d{2}(?::?\d{2})?| UTC| [a-zA-Z]+\/[a-zA-Z_]+(?:\/[a-zA-Z_]+)?)$/, su = 36e5, kd = 6e4, Z1 = 2, ze = {
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
  timeZone: V1
};
function xm(e, t) {
  if (arguments.length < 1)
    throw new TypeError("1 argument required, but only " + arguments.length + " present");
  if (e === null)
    return /* @__PURE__ */ new Date(NaN);
  var n = t || {}, r = n.additionalDigits == null ? Z1 : Ky(n.additionalDigits);
  if (r !== 2 && r !== 1 && r !== 0)
    throw new RangeError("additionalDigits must be 0, 1 or 2");
  if (e instanceof Date || typeof e == "object" && Object.prototype.toString.call(e) === "[object Date]")
    return new Date(e.getTime());
  if (typeof e == "number" || Object.prototype.toString.call(e) === "[object Number]")
    return new Date(e);
  if (!(typeof e == "string" || Object.prototype.toString.call(e) === "[object String]"))
    return /* @__PURE__ */ new Date(NaN);
  var a = H1(e), i = B1(a.date, r), o = i.year, u = i.restDateString, l = Q1(u, o);
  if (isNaN(l))
    return /* @__PURE__ */ new Date(NaN);
  if (l) {
    var s = l.getTime(), p = 0, h;
    if (a.time && (p = q1(a.time), isNaN(p)))
      return /* @__PURE__ */ new Date(NaN);
    if (a.timeZone || n.timeZone) {
      if (h = Bs(a.timeZone || n.timeZone, new Date(s + p)), isNaN(h))
        return /* @__PURE__ */ new Date(NaN);
    } else
      h = vd(new Date(s + p)), h = vd(new Date(s + p + h));
    return new Date(s + p + h);
  } else
    return /* @__PURE__ */ new Date(NaN);
}
function H1(e) {
  var t = {}, n = ze.dateTimePattern.exec(e), r;
  if (n ? (t.date = n[1], r = n[3]) : (n = ze.datePattern.exec(e), n ? (t.date = n[1], r = n[2]) : (t.date = null, r = e)), r) {
    var a = ze.timeZone.exec(r);
    a ? (t.time = r.replace(a[1], ""), t.timeZone = a[1].trim()) : t.time = r;
  }
  return t;
}
function B1(e, t) {
  var n = ze.YYY[t], r = ze.YYYYY[t], a;
  if (a = ze.YYYY.exec(e) || r.exec(e), a) {
    var i = a[1];
    return {
      year: parseInt(i, 10),
      restDateString: e.slice(i.length)
    };
  }
  if (a = ze.YY.exec(e) || n.exec(e), a) {
    var o = a[1];
    return {
      year: parseInt(o, 10) * 100,
      restDateString: e.slice(o.length)
    };
  }
  return {
    year: null
  };
}
function Q1(e, t) {
  if (t === null)
    return null;
  var n, r, a, i;
  if (e.length === 0)
    return r = /* @__PURE__ */ new Date(0), r.setUTCFullYear(t), r;
  if (n = ze.MM.exec(e), n)
    return r = /* @__PURE__ */ new Date(0), a = parseInt(n[1], 10) - 1, Td(t, a) ? (r.setUTCFullYear(t, a), r) : /* @__PURE__ */ new Date(NaN);
  if (n = ze.DDD.exec(e), n) {
    r = /* @__PURE__ */ new Date(0);
    var o = parseInt(n[1], 10);
    return K1(t, o) ? (r.setUTCFullYear(t, 0, o), r) : /* @__PURE__ */ new Date(NaN);
  }
  if (n = ze.MMDD.exec(e), n) {
    r = /* @__PURE__ */ new Date(0), a = parseInt(n[1], 10) - 1;
    var u = parseInt(n[2], 10);
    return Td(t, a, u) ? (r.setUTCFullYear(t, a, u), r) : /* @__PURE__ */ new Date(NaN);
  }
  if (n = ze.Www.exec(e), n)
    return i = parseInt(n[1], 10) - 1, Cd(t, i) ? Sd(t, i) : /* @__PURE__ */ new Date(NaN);
  if (n = ze.WwwD.exec(e), n) {
    i = parseInt(n[1], 10) - 1;
    var l = parseInt(n[2], 10) - 1;
    return Cd(t, i, l) ? Sd(t, i, l) : /* @__PURE__ */ new Date(NaN);
  }
  return null;
}
function q1(e) {
  var t, n, r;
  if (t = ze.HH.exec(e), t)
    return n = parseFloat(t[1].replace(",", ".")), cu(n) ? n % 24 * su : NaN;
  if (t = ze.HHMM.exec(e), t)
    return n = parseInt(t[1], 10), r = parseFloat(t[2].replace(",", ".")), cu(n, r) ? n % 24 * su + r * kd : NaN;
  if (t = ze.HHMMSS.exec(e), t) {
    n = parseInt(t[1], 10), r = parseInt(t[2], 10);
    var a = parseFloat(t[3].replace(",", "."));
    return cu(n, r, a) ? n % 24 * su + r * kd + a * 1e3 : NaN;
  }
  return null;
}
function Sd(e, t, n) {
  t = t || 0, n = n || 0;
  var r = /* @__PURE__ */ new Date(0);
  r.setUTCFullYear(e, 0, 4);
  var a = r.getUTCDay() || 7, i = t * 7 + n + 1 - a;
  return r.setUTCDate(r.getUTCDate() + i), r;
}
var X1 = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31], G1 = [31, 29, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
function km(e) {
  return e % 400 === 0 || e % 4 === 0 && e % 100 !== 0;
}
function Td(e, t, n) {
  if (t < 0 || t > 11)
    return !1;
  if (n != null) {
    if (n < 1)
      return !1;
    var r = km(e);
    if (r && n > G1[t] || !r && n > X1[t])
      return !1;
  }
  return !0;
}
function K1(e, t) {
  if (t < 1)
    return !1;
  var n = km(e);
  return !(n && t > 366 || !n && t > 365);
}
function Cd(e, t, n) {
  return !(t < 0 || t > 52 || n != null && (n < 0 || n > 6));
}
function cu(e, t, n) {
  return !(e != null && (e < 0 || e >= 25) || t != null && (t < 0 || t >= 60) || n != null && (n < 0 || n >= 60));
}
var J1 = /([xXOz]+)|''|'(''|[^'])+('|$)/g;
function ew(e, t, n) {
  var r = String(t), a = n || {}, i = r.match(J1);
  if (i) {
    var o = xm(e, a);
    r = i.reduce(function(u, l) {
      if (l[0] === "'")
        return u;
      var s = u.indexOf(l), p = u[s - 1] === "'", h = u.replace(
        l,
        "'" + b1[l[0]](o, l, null, a) + "'"
      );
      return p ? h.substring(0, s - 1) + h.substring(s + 1) : h;
    }, r);
  }
  return D1(e, r, a);
}
var Bl = { exports: {} }, Ql = { exports: {} };
(function(e, t) {
  Object.defineProperty(t, "__esModule", {
    value: !0
  }), t.default = n;
  function n(r, a) {
    if (r == null)
      throw new TypeError("assign requires that input parameter not be null or undefined");
    for (var i in a)
      Object.prototype.hasOwnProperty.call(a, i) && (r[i] = a[i]);
    return r;
  }
  e.exports = t.default;
})(Ql, Ql.exports);
var tw = Ql.exports;
(function(e, t) {
  var n = ce.default;
  Object.defineProperty(t, "__esModule", {
    value: !0
  }), t.default = a;
  var r = n(tw);
  function a(i) {
    return (0, r.default)({}, i);
  }
  e.exports = t.default;
})(Bl, Bl.exports);
var nw = Bl.exports;
const rw = /* @__PURE__ */ Ia(nw);
function aw(e, t, n) {
  var r = xm(e, n), a = Bs(t, r, !0), i = new Date(r.getTime() - a), o = /* @__PURE__ */ new Date(0);
  return o.setFullYear(i.getUTCFullYear(), i.getUTCMonth(), i.getUTCDate()), o.setHours(i.getUTCHours(), i.getUTCMinutes(), i.getUTCSeconds(), i.getUTCMilliseconds()), o;
}
function iw(e, t, n, r) {
  var a = rw(r);
  return a.timeZone = t, ew(aw(e, t), n, a);
}
const ow = "Europe/Helsinki", Ed = (e) => {
  const t = new Date(e);
  return Qy(t, "d.M.yyyy");
}, uw = (e) => iw(e, ow, "d.M.yyyy HH:mm"), du = (e, t) => {
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
}, lw = (e, t) => {
  const n = e.AHStatus.ContributionAmount, r = e.BUKStatus.OnTrackOnDateCount / e.BUKStatus.MemberCount, a = e.SamvirkStatus.ContributionAmount / ((t || 200) * e.SamvirkStatus.MemberCount);
  return (n * r * a).toLocaleString("fi-FI", { maximumFractionDigits: 1 }) + "p";
}, sw = "data:image/svg+xml,%3csvg%20width='328'%20height='145'%20viewBox='0%200%20328%20145'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20d='M0.707031%2045.81L142.59%2021.2011L151.585%2024.3149V19.1253L258.172%200L325.896%2032.7566L327.705%2047.699L282.016%20100.083L255.722%20105.618L239.116%20100.429L235.31%20108.386L29.3534%20145L14.84%20125.688L7.49499%2084.4827L10.7679%2074.235L4.44352%2074.6848L0.707031%2045.81Z'%20fill='black'/%3e%3cpath%20d='M15.9367%2066.6666L11.1727%2083.4531L18.3101%20123.499L29.2877%20130.934L230.467%2093.8565L234.272%2085.8991L254.339%2091.4347L272.675%2086.2451L317.305%2035.3873L255.325%205.11138L155.194%2022.7801L155.045%2030.5437L141.389%2025.2158L5.15625%2049.2573L8.29767%2067.2098L15.9367%2066.6666Z'%20fill='%23FFFF00'/%3e%3cpath%20d='M106.215%2048.601L94.7594%20102.496L75.1463%20105.956L69.2579%2077.538L63.4905%20108.011L43.8774%20111.471L32.3047%2061.6337L49.2884%2058.6376L53.8795%2090.5085L60.657%2056.6345L77.8518%2053.6003L84.6501%2085.0802L89.2239%2051.5937L106.215%2048.601Z'%20fill='black'/%3e%3cpath%20d='M143.793%2043.9891C147.63%2045.2415%20150.768%2047.4004%20153.214%2050.4622C155.657%2053.5241%20157.272%2057.2813%20158.061%2061.734C158.386%2063.5814%20158.559%2065.678%20158.583%2068.0168C158.57%2072.6597%20157.639%2076.9394%20155.791%2080.8558C153.94%2084.7722%20151.256%2088.0416%20147.737%2090.6641C144.219%2093.29%20140.022%2095.0302%20135.14%2095.8883C130.214%2096.7566%20125.834%2096.5767%20122%2095.3485C118.167%2094.1169%20115.043%2091.9857%20112.628%2088.9411C110.21%2085.8966%20108.608%2082.1497%20107.826%2077.6971C107.418%2075.3756%20107.227%2073.2133%20107.266%2071.1997C107.279%2066.5568%20108.22%2062.291%20110.099%2058.3919C111.978%2054.4928%20114.687%2051.2337%20118.229%2048.6044C121.772%2045.9784%20125.983%2044.2313%20130.864%2043.3733C135.646%2042.5326%20139.956%2042.7367%20143.793%2043.9891ZM125.398%2062.2529C123.786%2064.4671%20122.983%2067.2591%20122.99%2070.6289C122.966%2071.608%20123.052%2072.6459%20123.246%2073.7357C123.73%2076.4827%20124.855%2078.5067%20126.626%2079.8075C128.394%2081.1084%20130.747%2081.4993%20133.684%2080.9803C136.621%2080.4614%20138.908%2079.0844%20140.538%2076.8425C142.171%2074.6041%20142.966%2071.8467%20142.928%2068.5842C142.942%2067.5532%20142.852%2066.498%20142.662%2065.4082C142.171%2062.6127%20141.039%2060.575%20139.275%2059.2983C137.514%2058.0217%20135.185%2057.6377%20132.297%2058.1462C129.311%2058.6721%20127.01%2060.0422%20125.398%2062.2529Z'%20fill='black'/%3e%3cpath%20d='M200.34%2035.773C203.589%2037.7174%20205.568%2040.6996%20206.28%2044.7267C206.481%2045.865%20206.571%2046.9237%20206.547%2047.9062C206.533%2051.4247%20205.581%2054.6838%20203.689%2057.6799C201.8%2060.676%20199.108%2063.0667%20195.61%2064.8553L206.612%2082.7732L189.272%2085.8316L179.692%2068.9101L179.748%2087.513L163.971%2090.2946L163.913%2038.4266L187.366%2034.2923C192.767%2033.3374%20197.091%2033.8321%20200.34%2035.773ZM179.689%2058.0639L185.944%2056.9603C189.023%2056.4171%20190.549%2054.6838%20190.521%2051.7569C190.525%2051.5112%20190.497%2051.1999%20190.431%2050.8193C190.248%2049.7779%20189.784%2049.0168%20189.04%2048.5359C188.297%2048.055%20187.283%2047.9304%20186.006%2048.1553L179.751%2049.259L179.689%2058.0639Z'%20fill='black'/%3e%3cpath%20d='M242.344%2049.8035L260.975%2073.1911L242.001%2076.5367L227.353%2056.6191L227.363%2079.1142L211.587%2081.8958L211.528%2030.0278L227.305%2027.2461L227.357%2049.1461L242.085%2024.641L260.916%2021.3197L242.344%2049.8035Z'%20fill='black'/%3e%3c/svg%3e", cw = "_app_10kin_1", dw = "_workLogoWrapper_10kin_10", fw = "_workLogo_10kin_10", pw = "_reports_10kin_20", mw = "_report_10kin_20", hw = "_reportTitle_10kin_32", vw = "_reportTable_10kin_44", gw = "_teamLogo_10kin_60", yw = "_teamGreen_10kin_112", ww = "_teamOrange_10kin_116", _w = "_teamRed_10kin_120", xw = "_teamBlue_10kin_124", Dt = {
  app: cw,
  workLogoWrapper: dw,
  workLogo: fw,
  reports: pw,
  report: mw,
  reportTitle: hw,
  reportTable: vw,
  teamLogo: gw,
  teamGreen: yw,
  teamOrange: ww,
  teamRed: _w,
  teamBlue: xw
}, kw = {
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
}, Sw = async (e) => {
  let t;
  return t = await (await fetch(e)).json(), Ug.parse(t);
}, Tw = () => {
  var a;
  const e = (a = document.getElementById("work-root")) == null ? void 0 : a.getAttribute("data-source-url"), { data: t, error: n, isLoading: r } = I0(e, Sw, {
    revalidateIfStale: !1,
    revalidateOnFocus: !1,
    shouldRetryOnError: !1
  });
  return /* @__PURE__ */ Z.jsx("div", { className: Dt.app, children: /* @__PURE__ */ Z.jsxs("div", { children: [
    /* @__PURE__ */ Z.jsx("div", { className: Dt.workLogoWrapper, children: /* @__PURE__ */ Z.jsx("img", { src: sw, alt: "Work logo", className: Dt.workLogo }) }),
    /* @__PURE__ */ Z.jsxs("ul", { className: Dt.reports, children: [
      n && /* @__PURE__ */ Z.jsxs("li", { className: Dt.error, children: [
        "Virhe: ",
        `${n}`
      ] }),
      r && /* @__PURE__ */ Z.jsx(Od, { report: kw, isLoading: r }),
      t && t.map((i) => /* @__PURE__ */ Z.jsx(
        Od,
        {
          report: i,
          isLoading: r
        },
        i.Title
      ))
    ] })
  ] }) });
}, Od = ({
  report: e,
  isLoading: t
}) => /* @__PURE__ */ Z.jsxs("li", { className: Dt.report, children: [
  /* @__PURE__ */ Z.jsx("h2", { className: Dt.reportTitle, children: e.Title }),
  /* @__PURE__ */ Z.jsxs("p", { children: [
    Ed(e.DateFrom),
    " – ",
    Ed(e.DateTo)
  ] }),
  /* @__PURE__ */ Z.jsxs("p", { children: [
    "MyShare tavoite raportointihetkellä: ",
    e.MyShareTargetOnDate,
    "%"
  ] }),
  /* @__PURE__ */ Z.jsxs("table", { className: Dt.reportTable, cellPadding: 6, children: [
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
          className: `${Dt.teamLogo} ${Dt["team" + n.Name]}`
        }
      ) }),
      /* @__PURE__ */ Z.jsx("td", { children: t ? "–" : du(n.AHStatus) }),
      /* @__PURE__ */ Z.jsx("td", { children: t ? "–" : du(n.BUKStatus) }),
      /* @__PURE__ */ Z.jsx("td", { children: t ? "–" : du(
        n.SamvirkStatus,
        e.SamvirkGoalPerSprint
      ) }),
      /* @__PURE__ */ Z.jsx("td", { children: t ? "–" : lw(n, e.SamvirkGoalPerSprint) })
    ] }, n.Name)) })
  ] }),
  /* @__PURE__ */ Z.jsxs("p", { children: [
    "Tulokset päivitetty: ",
    uw(e.ReportDate)
  ] })
] }), Cw = document.getElementById("work-root"), Ew = bp(Cw);
Ew.render(
  /* @__PURE__ */ Z.jsx(ao.StrictMode, { children: /* @__PURE__ */ Z.jsx(Tw, {}) })
);
