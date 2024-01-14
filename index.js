function Gb(Z) {
  return Z && Z.__esModule && Object.prototype.hasOwnProperty.call(Z, "default") ? Z.default : Z;
}
var s0 = { exports: {} }, Pp = {}, c0 = { exports: {} }, $p = { exports: {} };
$p.exports;
var G1;
function qb() {
  return G1 || (G1 = 1, function(Z, pe) {
    var F = { mode: "production", command: "build", isSsrBuild: !1, isPreview: !1 };
    /**
     * @license React
     * react.development.js
     *
     * Copyright (c) Facebook, Inc. and its affiliates.
     *
     * This source code is licensed under the MIT license found in the
     * LICENSE file in the root directory of this source tree.
     */
    F !== "production" && function() {
      typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u" && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart == "function" && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart(new Error());
      var Tt = "18.2.0", Ut = Symbol.for("react.element"), on = Symbol.for("react.portal"), nt = Symbol.for("react.fragment"), S = Symbol.for("react.strict_mode"), st = Symbol.for("react.profiler"), Me = Symbol.for("react.provider"), fe = Symbol.for("react.context"), Ie = Symbol.for("react.forward_ref"), te = Symbol.for("react.suspense"), Ne = Symbol.for("react.suspense_list"), ae = Symbol.for("react.memo"), Ce = Symbol.for("react.lazy"), ct = Symbol.for("react.offscreen"), jn = Symbol.iterator, an = "@@iterator";
      function rt(h) {
        if (h === null || typeof h != "object")
          return null;
        var C = jn && h[jn] || h[an];
        return typeof C == "function" ? C : null;
      }
      var He = {
        /**
         * @internal
         * @type {ReactComponent}
         */
        current: null
      }, _t = {
        transition: null
      }, Re = {
        current: null,
        // Used to reproduce behavior of `batchedUpdates` in legacy mode.
        isBatchingLegacy: !1,
        didScheduleLegacyUpdate: !1
      }, ut = {
        /**
         * @internal
         * @type {ReactComponent}
         */
        current: null
      }, $e = {}, Tn = null;
      function hn(h) {
        Tn = h;
      }
      $e.setExtraStackFrame = function(h) {
        Tn = h;
      }, $e.getCurrentStack = null, $e.getStackAddendum = function() {
        var h = "";
        Tn && (h += Tn);
        var C = $e.getCurrentStack;
        return C && (h += C() || ""), h;
      };
      var Yt = !1, ht = !1, Kt = !1, Pe = !1, Xe = !1, Et = {
        ReactCurrentDispatcher: He,
        ReactCurrentBatchConfig: _t,
        ReactCurrentOwner: ut
      };
      Et.ReactDebugCurrentFrame = $e, Et.ReactCurrentActQueue = Re;
      function Ke(h) {
        {
          for (var C = arguments.length, M = new Array(C > 1 ? C - 1 : 0), A = 1; A < C; A++)
            M[A - 1] = arguments[A];
          ve("warn", h, M);
        }
      }
      function B(h) {
        {
          for (var C = arguments.length, M = new Array(C > 1 ? C - 1 : 0), A = 1; A < C; A++)
            M[A - 1] = arguments[A];
          ve("error", h, M);
        }
      }
      function ve(h, C, M) {
        {
          var A = Et.ReactDebugCurrentFrame, q = A.getStackAddendum();
          q !== "" && (C += "%s", M = M.concat([q]));
          var Se = M.map(function(oe) {
            return String(oe);
          });
          Se.unshift("Warning: " + C), Function.prototype.apply.call(console[h], console, Se);
        }
      }
      var T = {};
      function $(h, C) {
        {
          var M = h.constructor, A = M && (M.displayName || M.name) || "ReactClass", q = A + "." + C;
          if (T[q])
            return;
          B("Can't call %s on a component that is not yet mounted. This is a no-op, but it might indicate a bug in your application. Instead, assign to `this.state` directly or define a `state = {};` class property with the desired state in the %s component.", C, A), T[q] = !0;
        }
      }
      var he = {
        /**
         * Checks whether or not this composite component is mounted.
         * @param {ReactClass} publicInstance The instance we want to test.
         * @return {boolean} True if mounted, false otherwise.
         * @protected
         * @final
         */
        isMounted: function(h) {
          return !1;
        },
        /**
         * Forces an update. This should only be invoked when it is known with
         * certainty that we are **not** in a DOM transaction.
         *
         * You may want to call this when you know that some deeper aspect of the
         * component's state has changed but `setState` was not called.
         *
         * This will not invoke `shouldComponentUpdate`, but it will invoke
         * `componentWillUpdate` and `componentDidUpdate`.
         *
         * @param {ReactClass} publicInstance The instance that should rerender.
         * @param {?function} callback Called after component is updated.
         * @param {?string} callerName name of the calling function in the public API.
         * @internal
         */
        enqueueForceUpdate: function(h, C, M) {
          $(h, "forceUpdate");
        },
        /**
         * Replaces all of the state. Always use this or `setState` to mutate state.
         * You should treat `this.state` as immutable.
         *
         * There is no guarantee that `this.state` will be immediately updated, so
         * accessing `this.state` after calling this method may return the old value.
         *
         * @param {ReactClass} publicInstance The instance that should rerender.
         * @param {object} completeState Next state.
         * @param {?function} callback Called after component is updated.
         * @param {?string} callerName name of the calling function in the public API.
         * @internal
         */
        enqueueReplaceState: function(h, C, M, A) {
          $(h, "replaceState");
        },
        /**
         * Sets a subset of the state. This only exists because _pendingState is
         * internal. This provides a merging strategy that is not available to deep
         * properties which is confusing. TODO: Expose pendingState or don't use it
         * during the merge.
         *
         * @param {ReactClass} publicInstance The instance that should rerender.
         * @param {object} partialState Next partial state to be merged with state.
         * @param {?function} callback Called after component is updated.
         * @param {?string} Name of the calling function in the public API.
         * @internal
         */
        enqueueSetState: function(h, C, M, A) {
          $(h, "setState");
        }
      }, Ae = Object.assign, Fe = {};
      Object.freeze(Fe);
      function ot(h, C, M) {
        this.props = h, this.context = C, this.refs = Fe, this.updater = M || he;
      }
      ot.prototype.isReactComponent = {}, ot.prototype.setState = function(h, C) {
        if (typeof h != "object" && typeof h != "function" && h != null)
          throw new Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");
        this.updater.enqueueSetState(this, h, C, "setState");
      }, ot.prototype.forceUpdate = function(h) {
        this.updater.enqueueForceUpdate(this, h, "forceUpdate");
      };
      {
        var at = {
          isMounted: ["isMounted", "Instead, make sure to clean up subscriptions and pending requests in componentWillUnmount to prevent memory leaks."],
          replaceState: ["replaceState", "Refactor your code to use setState instead (see https://github.com/facebook/react/issues/3236)."]
        }, ft = function(h, C) {
          Object.defineProperty(ot.prototype, h, {
            get: function() {
              Ke("%s(...) is deprecated in plain JavaScript React classes. %s", C[0], C[1]);
            }
          });
        };
        for (var it in at)
          at.hasOwnProperty(it) && ft(it, at[it]);
      }
      function Zt() {
      }
      Zt.prototype = ot.prototype;
      function Zn(h, C, M) {
        this.props = h, this.context = C, this.refs = Fe, this.updater = M || he;
      }
      var Jn = Zn.prototype = new Zt();
      Jn.constructor = Zn, Ae(Jn, ot.prototype), Jn.isPureReactComponent = !0;
      function Fr() {
        var h = {
          current: null
        };
        return Object.seal(h), h;
      }
      var vr = Array.isArray;
      function mn(h) {
        return vr(h);
      }
      function er(h) {
        {
          var C = typeof Symbol == "function" && Symbol.toStringTag, M = C && h[Symbol.toStringTag] || h.constructor.name || "Object";
          return M;
        }
      }
      function Hn(h) {
        try {
          return Mn(h), !1;
        } catch {
          return !0;
        }
      }
      function Mn(h) {
        return "" + h;
      }
      function Nn(h) {
        if (Hn(h))
          return B("The provided key is an unsupported type %s. This value must be coerced to a string before before using it here.", er(h)), Mn(h);
      }
      function Tr(h, C, M) {
        var A = h.displayName;
        if (A)
          return A;
        var q = C.displayName || C.name || "";
        return q !== "" ? M + "(" + q + ")" : M;
      }
      function hr(h) {
        return h.displayName || "Context";
      }
      function Vn(h) {
        if (h == null)
          return null;
        if (typeof h.tag == "number" && B("Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."), typeof h == "function")
          return h.displayName || h.name || null;
        if (typeof h == "string")
          return h;
        switch (h) {
          case nt:
            return "Fragment";
          case on:
            return "Portal";
          case st:
            return "Profiler";
          case S:
            return "StrictMode";
          case te:
            return "Suspense";
          case Ne:
            return "SuspenseList";
        }
        if (typeof h == "object")
          switch (h.$$typeof) {
            case fe:
              var C = h;
              return hr(C) + ".Consumer";
            case Me:
              var M = h;
              return hr(M._context) + ".Provider";
            case Ie:
              return Tr(h, h.render, "ForwardRef");
            case ae:
              var A = h.displayName || null;
              return A !== null ? A : Vn(h.type) || "Memo";
            case Ce: {
              var q = h, Se = q._payload, oe = q._init;
              try {
                return Vn(oe(Se));
              } catch {
                return null;
              }
            }
          }
        return null;
      }
      var la = Object.prototype.hasOwnProperty, ua = {
        key: !0,
        ref: !0,
        __self: !0,
        __source: !0
      }, mr, oa, tr;
      tr = {};
      function wr(h) {
        if (la.call(h, "ref")) {
          var C = Object.getOwnPropertyDescriptor(h, "ref").get;
          if (C && C.isReactWarning)
            return !1;
        }
        return h.ref !== void 0;
      }
      function ln(h) {
        if (la.call(h, "key")) {
          var C = Object.getOwnPropertyDescriptor(h, "key").get;
          if (C && C.isReactWarning)
            return !1;
        }
        return h.key !== void 0;
      }
      function sa(h, C) {
        var M = function() {
          mr || (mr = !0, B("%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", C));
        };
        M.isReactWarning = !0, Object.defineProperty(h, "key", {
          get: M,
          configurable: !0
        });
      }
      function ca(h, C) {
        var M = function() {
          oa || (oa = !0, B("%s: `ref` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", C));
        };
        M.isReactWarning = !0, Object.defineProperty(h, "ref", {
          get: M,
          configurable: !0
        });
      }
      function fa(h) {
        if (typeof h.ref == "string" && ut.current && h.__self && ut.current.stateNode !== h.__self) {
          var C = Vn(ut.current.type);
          tr[C] || (B('Component "%s" contains the string ref "%s". Support for string refs will be removed in a future major release. This case cannot be automatically converted to an arrow function. We ask you to manually fix this case by using useRef() or createRef() instead. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-string-ref', C, h.ref), tr[C] = !0);
        }
      }
      var ne = function(h, C, M, A, q, Se, oe) {
        var Ve = {
          // This tag allows us to uniquely identify this as a React Element
          $$typeof: Ut,
          // Built-in properties that belong on the element
          type: h,
          key: C,
          ref: M,
          props: oe,
          // Record the component responsible for creating this element.
          _owner: Se
        };
        return Ve._store = {}, Object.defineProperty(Ve._store, "validated", {
          configurable: !1,
          enumerable: !1,
          writable: !0,
          value: !1
        }), Object.defineProperty(Ve, "_self", {
          configurable: !1,
          enumerable: !1,
          writable: !1,
          value: A
        }), Object.defineProperty(Ve, "_source", {
          configurable: !1,
          enumerable: !1,
          writable: !1,
          value: q
        }), Object.freeze && (Object.freeze(Ve.props), Object.freeze(Ve)), Ve;
      };
      function be(h, C, M) {
        var A, q = {}, Se = null, oe = null, Ve = null, tt = null;
        if (C != null) {
          wr(C) && (oe = C.ref, fa(C)), ln(C) && (Nn(C.key), Se = "" + C.key), Ve = C.__self === void 0 ? null : C.__self, tt = C.__source === void 0 ? null : C.__source;
          for (A in C)
            la.call(C, A) && !ua.hasOwnProperty(A) && (q[A] = C[A]);
        }
        var Nt = arguments.length - 2;
        if (Nt === 1)
          q.children = M;
        else if (Nt > 1) {
          for (var Ft = Array(Nt), jt = 0; jt < Nt; jt++)
            Ft[jt] = arguments[jt + 2];
          Object.freeze && Object.freeze(Ft), q.children = Ft;
        }
        if (h && h.defaultProps) {
          var Ht = h.defaultProps;
          for (A in Ht)
            q[A] === void 0 && (q[A] = Ht[A]);
        }
        if (Se || oe) {
          var en = typeof h == "function" ? h.displayName || h.name || "Unknown" : h;
          Se && sa(q, en), oe && ca(q, en);
        }
        return ne(h, Se, oe, Ve, tt, ut.current, q);
      }
      function Je(h, C) {
        var M = ne(h.type, C, h.ref, h._self, h._source, h._owner, h.props);
        return M;
      }
      function Lt(h, C, M) {
        if (h == null)
          throw new Error("React.cloneElement(...): The argument must be a React element, but you passed " + h + ".");
        var A, q = Ae({}, h.props), Se = h.key, oe = h.ref, Ve = h._self, tt = h._source, Nt = h._owner;
        if (C != null) {
          wr(C) && (oe = C.ref, Nt = ut.current), ln(C) && (Nn(C.key), Se = "" + C.key);
          var Ft;
          h.type && h.type.defaultProps && (Ft = h.type.defaultProps);
          for (A in C)
            la.call(C, A) && !ua.hasOwnProperty(A) && (C[A] === void 0 && Ft !== void 0 ? q[A] = Ft[A] : q[A] = C[A]);
        }
        var jt = arguments.length - 2;
        if (jt === 1)
          q.children = M;
        else if (jt > 1) {
          for (var Ht = Array(jt), en = 0; en < jt; en++)
            Ht[en] = arguments[en + 2];
          q.children = Ht;
        }
        return ne(h.type, Se, oe, Ve, tt, Nt, q);
      }
      function xt(h) {
        return typeof h == "object" && h !== null && h.$$typeof === Ut;
      }
      var wn = ".", sn = ":";
      function yr(h) {
        var C = /[=:]/g, M = {
          "=": "=0",
          ":": "=2"
        }, A = h.replace(C, function(q) {
          return M[q];
        });
        return "$" + A;
      }
      var At = !1, Qn = /\/+/g;
      function Mt(h) {
        return h.replace(Qn, "$&/");
      }
      function It(h, C) {
        return typeof h == "object" && h !== null && h.key != null ? (Nn(h.key), yr("" + h.key)) : C.toString(36);
      }
      function qa(h, C, M, A, q) {
        var Se = typeof h;
        (Se === "undefined" || Se === "boolean") && (h = null);
        var oe = !1;
        if (h === null)
          oe = !0;
        else
          switch (Se) {
            case "string":
            case "number":
              oe = !0;
              break;
            case "object":
              switch (h.$$typeof) {
                case Ut:
                case on:
                  oe = !0;
              }
          }
        if (oe) {
          var Ve = h, tt = q(Ve), Nt = A === "" ? wn + It(Ve, 0) : A;
          if (mn(tt)) {
            var Ft = "";
            Nt != null && (Ft = Mt(Nt) + "/"), qa(tt, C, Ft, "", function(Yf) {
              return Yf;
            });
          } else
            tt != null && (xt(tt) && (tt.key && (!Ve || Ve.key !== tt.key) && Nn(tt.key), tt = Je(
              tt,
              // Keep both the (mapped) and old keys if they differ, just as
              // traverseAllChildren used to do for objects as children
              M + // $FlowFixMe Flow incorrectly thinks React.Portal doesn't have a key
              (tt.key && (!Ve || Ve.key !== tt.key) ? (
                // $FlowFixMe Flow incorrectly thinks existing element's key can be a number
                // eslint-disable-next-line react-internal/safe-string-coercion
                Mt("" + tt.key) + "/"
              ) : "") + Nt
            )), C.push(tt));
          return 1;
        }
        var jt, Ht, en = 0, Rt = A === "" ? wn : A + sn;
        if (mn(h))
          for (var gl = 0; gl < h.length; gl++)
            jt = h[gl], Ht = Rt + It(jt, gl), en += qa(jt, C, M, Ht, q);
        else {
          var Qu = rt(h);
          if (typeof Qu == "function") {
            var ts = h;
            Qu === ts.entries && (At || Ke("Using Maps as children is not supported. Use an array of keyed ReactElements instead."), At = !0);
            for (var ns = Qu.call(ts), ji, rs = 0; !(ji = ns.next()).done; )
              jt = ji.value, Ht = Rt + It(jt, rs++), en += qa(jt, C, M, Ht, q);
          } else if (Se === "object") {
            var as = String(h);
            throw new Error("Objects are not valid as a React child (found: " + (as === "[object Object]" ? "object with keys {" + Object.keys(h).join(", ") + "}" : as) + "). If you meant to render a collection of children, use an array instead.");
          }
        }
        return en;
      }
      function _a(h, C, M) {
        if (h == null)
          return h;
        var A = [], q = 0;
        return qa(h, A, "", "", function(Se) {
          return C.call(M, Se, q++);
        }), A;
      }
      function cl(h) {
        var C = 0;
        return _a(h, function() {
          C++;
        }), C;
      }
      function Gl(h, C, M) {
        _a(h, function() {
          C.apply(this, arguments);
        }, M);
      }
      function ql(h) {
        return _a(h, function(C) {
          return C;
        }) || [];
      }
      function fl(h) {
        if (!xt(h))
          throw new Error("React.Children.only expected to receive a single React element child.");
        return h;
      }
      function Xa(h) {
        var C = {
          $$typeof: fe,
          // As a workaround to support multiple concurrent renderers, we categorize
          // some renderers as primary and others as secondary. We only expect
          // there to be two concurrent renderers at most: React Native (primary) and
          // Fabric (secondary); React DOM (primary) and React ART (secondary).
          // Secondary renderers store their context values on separate fields.
          _currentValue: h,
          _currentValue2: h,
          // Used to track how many concurrent renderers this context currently
          // supports within in a single renderer. Such as parallel server rendering.
          _threadCount: 0,
          // These are circular
          Provider: null,
          Consumer: null,
          // Add these to use same hidden class in VM as ServerContext
          _defaultValue: null,
          _globalName: null
        };
        C.Provider = {
          $$typeof: Me,
          _context: C
        };
        var M = !1, A = !1, q = !1;
        {
          var Se = {
            $$typeof: fe,
            _context: C
          };
          Object.defineProperties(Se, {
            Provider: {
              get: function() {
                return A || (A = !0, B("Rendering <Context.Consumer.Provider> is not supported and will be removed in a future major release. Did you mean to render <Context.Provider> instead?")), C.Provider;
              },
              set: function(oe) {
                C.Provider = oe;
              }
            },
            _currentValue: {
              get: function() {
                return C._currentValue;
              },
              set: function(oe) {
                C._currentValue = oe;
              }
            },
            _currentValue2: {
              get: function() {
                return C._currentValue2;
              },
              set: function(oe) {
                C._currentValue2 = oe;
              }
            },
            _threadCount: {
              get: function() {
                return C._threadCount;
              },
              set: function(oe) {
                C._threadCount = oe;
              }
            },
            Consumer: {
              get: function() {
                return M || (M = !0, B("Rendering <Context.Consumer.Consumer> is not supported and will be removed in a future major release. Did you mean to render <Context.Consumer> instead?")), C.Consumer;
              }
            },
            displayName: {
              get: function() {
                return C.displayName;
              },
              set: function(oe) {
                q || (Ke("Setting `displayName` on Context.Consumer has no effect. You should set it directly on the context with Context.displayName = '%s'.", oe), q = !0);
              }
            }
          }), C.Consumer = Se;
        }
        return C._currentRenderer = null, C._currentRenderer2 = null, C;
      }
      var Ka = -1, xa = 0, Li = 1, jr = 2;
      function Hr(h) {
        if (h._status === Ka) {
          var C = h._result, M = C();
          if (M.then(function(Se) {
            if (h._status === xa || h._status === Ka) {
              var oe = h;
              oe._status = Li, oe._result = Se;
            }
          }, function(Se) {
            if (h._status === xa || h._status === Ka) {
              var oe = h;
              oe._status = jr, oe._result = Se;
            }
          }), h._status === Ka) {
            var A = h;
            A._status = xa, A._result = M;
          }
        }
        if (h._status === Li) {
          var q = h._result;
          return q === void 0 && B(`lazy: Expected the result of a dynamic import() call. Instead received: %s

Your code should look like: 
  const MyComponent = lazy(() => import('./MyComponent'))

Did you accidentally put curly braces around the import?`, q), "default" in q || B(`lazy: Expected the result of a dynamic import() call. Instead received: %s

Your code should look like: 
  const MyComponent = lazy(() => import('./MyComponent'))`, q), q.default;
        } else
          throw h._result;
      }
      function da(h) {
        var C = {
          // We use these fields to store the result.
          _status: Ka,
          _result: h
        }, M = {
          $$typeof: Ce,
          _payload: C,
          _init: Hr
        };
        {
          var A, q;
          Object.defineProperties(M, {
            defaultProps: {
              configurable: !0,
              get: function() {
                return A;
              },
              set: function(Se) {
                B("React.lazy(...): It is not supported to assign `defaultProps` to a lazy component import. Either specify them where the component is defined, or create a wrapping component around it."), A = Se, Object.defineProperty(M, "defaultProps", {
                  enumerable: !0
                });
              }
            },
            propTypes: {
              configurable: !0,
              get: function() {
                return q;
              },
              set: function(Se) {
                B("React.lazy(...): It is not supported to assign `propTypes` to a lazy component import. Either specify them where the component is defined, or create a wrapping component around it."), q = Se, Object.defineProperty(M, "propTypes", {
                  enumerable: !0
                });
              }
            }
          });
        }
        return M;
      }
      function Mi(h) {
        h != null && h.$$typeof === ae ? B("forwardRef requires a render function but received a `memo` component. Instead of forwardRef(memo(...)), use memo(forwardRef(...)).") : typeof h != "function" ? B("forwardRef requires a render function but was given %s.", h === null ? "null" : typeof h) : h.length !== 0 && h.length !== 2 && B("forwardRef render functions accept exactly two parameters: props and ref. %s", h.length === 1 ? "Did you forget to use the ref parameter?" : "Any additional parameter will be undefined."), h != null && (h.defaultProps != null || h.propTypes != null) && B("forwardRef render functions do not support propTypes or defaultProps. Did you accidentally pass a React component?");
        var C = {
          $$typeof: Ie,
          render: h
        };
        {
          var M;
          Object.defineProperty(C, "displayName", {
            enumerable: !1,
            configurable: !0,
            get: function() {
              return M;
            },
            set: function(A) {
              M = A, !h.name && !h.displayName && (h.displayName = A);
            }
          });
        }
        return C;
      }
      var R;
      R = Symbol.for("react.module.reference");
      function I(h) {
        return !!(typeof h == "string" || typeof h == "function" || h === nt || h === st || Xe || h === S || h === te || h === Ne || Pe || h === ct || Yt || ht || Kt || typeof h == "object" && h !== null && (h.$$typeof === Ce || h.$$typeof === ae || h.$$typeof === Me || h.$$typeof === fe || h.$$typeof === Ie || // This needs to include all possible module reference object
        // types supported by any Flight configuration anywhere since
        // we don't know which Flight build this will end up being used
        // with.
        h.$$typeof === R || h.getModuleId !== void 0));
      }
      function J(h, C) {
        I(h) || B("memo: The first argument must be a component. Instead received: %s", h === null ? "null" : typeof h);
        var M = {
          $$typeof: ae,
          type: h,
          compare: C === void 0 ? null : C
        };
        {
          var A;
          Object.defineProperty(M, "displayName", {
            enumerable: !1,
            configurable: !0,
            get: function() {
              return A;
            },
            set: function(q) {
              A = q, !h.name && !h.displayName && (h.displayName = q);
            }
          });
        }
        return M;
      }
      function re() {
        var h = He.current;
        return h === null && B(`Invalid hook call. Hooks can only be called inside of the body of a function component. This could happen for one of the following reasons:
1. You might have mismatching versions of React and the renderer (such as React DOM)
2. You might be breaking the Rules of Hooks
3. You might have more than one copy of React in the same app
See https://reactjs.org/link/invalid-hook-call for tips about how to debug and fix this problem.`), h;
      }
      function lt(h) {
        var C = re();
        if (h._context !== void 0) {
          var M = h._context;
          M.Consumer === h ? B("Calling useContext(Context.Consumer) is not supported, may cause bugs, and will be removed in a future major release. Did you mean to call useContext(Context) instead?") : M.Provider === h && B("Calling useContext(Context.Provider) is not supported. Did you mean to call useContext(Context) instead?");
        }
        return C.useContext(h);
      }
      function mt(h) {
        var C = re();
        return C.useState(h);
      }
      function Ze(h, C, M) {
        var A = re();
        return A.useReducer(h, C, M);
      }
      function De(h) {
        var C = re();
        return C.useRef(h);
      }
      function zn(h, C) {
        var M = re();
        return M.useEffect(h, C);
      }
      function Qt(h, C) {
        var M = re();
        return M.useInsertionEffect(h, C);
      }
      function Wt(h, C) {
        var M = re();
        return M.useLayoutEffect(h, C);
      }
      function gr(h, C) {
        var M = re();
        return M.useCallback(h, C);
      }
      function oi(h, C) {
        var M = re();
        return M.useMemo(h, C);
      }
      function Gt(h, C, M) {
        var A = re();
        return A.useImperativeHandle(h, C, M);
      }
      function Vr(h, C) {
        {
          var M = re();
          return M.useDebugValue(h, C);
        }
      }
      function Yo() {
        var h = re();
        return h.useTransition();
      }
      function si(h) {
        var C = re();
        return C.useDeferredValue(h);
      }
      function et() {
        var h = re();
        return h.useId();
      }
      function Xl(h, C, M) {
        var A = re();
        return A.useSyncExternalStore(h, C, M);
      }
      var Ni = 0, dl, Pr, Io, _r, Qo, Wo, Go;
      function Kl() {
      }
      Kl.__reactDisabledLog = !0;
      function ju() {
        {
          if (Ni === 0) {
            dl = console.log, Pr = console.info, Io = console.warn, _r = console.error, Qo = console.group, Wo = console.groupCollapsed, Go = console.groupEnd;
            var h = {
              configurable: !0,
              enumerable: !0,
              value: Kl,
              writable: !0
            };
            Object.defineProperties(console, {
              info: h,
              log: h,
              warn: h,
              error: h,
              group: h,
              groupCollapsed: h,
              groupEnd: h
            });
          }
          Ni++;
        }
      }
      function zi() {
        {
          if (Ni--, Ni === 0) {
            var h = {
              configurable: !0,
              enumerable: !0,
              writable: !0
            };
            Object.defineProperties(console, {
              log: Ae({}, h, {
                value: dl
              }),
              info: Ae({}, h, {
                value: Pr
              }),
              warn: Ae({}, h, {
                value: Io
              }),
              error: Ae({}, h, {
                value: _r
              }),
              group: Ae({}, h, {
                value: Qo
              }),
              groupCollapsed: Ae({}, h, {
                value: Wo
              }),
              groupEnd: Ae({}, h, {
                value: Go
              })
            });
          }
          Ni < 0 && B("disabledDepth fell below zero. This is a bug in React. Please file an issue.");
        }
      }
      var ci = Et.ReactCurrentDispatcher, ba;
      function pl(h, C, M) {
        {
          if (ba === void 0)
            try {
              throw Error();
            } catch (q) {
              var A = q.stack.trim().match(/\n( *(at )?)/);
              ba = A && A[1] || "";
            }
          return `
` + ba + h;
        }
      }
      var fi = !1, Zl;
      {
        var Jl = typeof WeakMap == "function" ? WeakMap : Map;
        Zl = new Jl();
      }
      function vl(h, C) {
        if (!h || fi)
          return "";
        {
          var M = Zl.get(h);
          if (M !== void 0)
            return M;
        }
        var A;
        fi = !0;
        var q = Error.prepareStackTrace;
        Error.prepareStackTrace = void 0;
        var Se;
        Se = ci.current, ci.current = null, ju();
        try {
          if (C) {
            var oe = function() {
              throw Error();
            };
            if (Object.defineProperty(oe.prototype, "props", {
              set: function() {
                throw Error();
              }
            }), typeof Reflect == "object" && Reflect.construct) {
              try {
                Reflect.construct(oe, []);
              } catch (Rt) {
                A = Rt;
              }
              Reflect.construct(h, [], oe);
            } else {
              try {
                oe.call();
              } catch (Rt) {
                A = Rt;
              }
              h.call(oe.prototype);
            }
          } else {
            try {
              throw Error();
            } catch (Rt) {
              A = Rt;
            }
            h();
          }
        } catch (Rt) {
          if (Rt && A && typeof Rt.stack == "string") {
            for (var Ve = Rt.stack.split(`
`), tt = A.stack.split(`
`), Nt = Ve.length - 1, Ft = tt.length - 1; Nt >= 1 && Ft >= 0 && Ve[Nt] !== tt[Ft]; )
              Ft--;
            for (; Nt >= 1 && Ft >= 0; Nt--, Ft--)
              if (Ve[Nt] !== tt[Ft]) {
                if (Nt !== 1 || Ft !== 1)
                  do
                    if (Nt--, Ft--, Ft < 0 || Ve[Nt] !== tt[Ft]) {
                      var jt = `
` + Ve[Nt].replace(" at new ", " at ");
                      return h.displayName && jt.includes("<anonymous>") && (jt = jt.replace("<anonymous>", h.displayName)), typeof h == "function" && Zl.set(h, jt), jt;
                    }
                  while (Nt >= 1 && Ft >= 0);
                break;
              }
          }
        } finally {
          fi = !1, ci.current = Se, zi(), Error.prepareStackTrace = q;
        }
        var Ht = h ? h.displayName || h.name : "", en = Ht ? pl(Ht) : "";
        return typeof h == "function" && Zl.set(h, en), en;
      }
      function qo(h, C, M) {
        return vl(h, !1);
      }
      function Xo(h) {
        var C = h.prototype;
        return !!(C && C.isReactComponent);
      }
      function vt(h, C, M) {
        if (h == null)
          return "";
        if (typeof h == "function")
          return vl(h, Xo(h));
        if (typeof h == "string")
          return pl(h);
        switch (h) {
          case te:
            return pl("Suspense");
          case Ne:
            return pl("SuspenseList");
        }
        if (typeof h == "object")
          switch (h.$$typeof) {
            case Ie:
              return qo(h.render);
            case ae:
              return vt(h.type, C, M);
            case Ce: {
              var A = h, q = A._payload, Se = A._init;
              try {
                return vt(Se(q), C, M);
              } catch {
              }
            }
          }
        return "";
      }
      var Ko = {}, Hu = Et.ReactDebugCurrentFrame;
      function hl(h) {
        if (h) {
          var C = h._owner, M = vt(h.type, h._source, C ? C.type : null);
          Hu.setExtraStackFrame(M);
        } else
          Hu.setExtraStackFrame(null);
      }
      function Zo(h, C, M, A, q) {
        {
          var Se = Function.call.bind(la);
          for (var oe in h)
            if (Se(h, oe)) {
              var Ve = void 0;
              try {
                if (typeof h[oe] != "function") {
                  var tt = Error((A || "React class") + ": " + M + " type `" + oe + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof h[oe] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.");
                  throw tt.name = "Invariant Violation", tt;
                }
                Ve = h[oe](C, oe, A, M, null, "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED");
              } catch (Nt) {
                Ve = Nt;
              }
              Ve && !(Ve instanceof Error) && (hl(q), B("%s: type specification of %s `%s` is invalid; the type checker function must return `null` or an `Error` but returned a %s. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).", A || "React class", M, oe, typeof Ve), hl(null)), Ve instanceof Error && !(Ve.message in Ko) && (Ko[Ve.message] = !0, hl(q), B("Failed %s type: %s", M, Ve.message), hl(null));
            }
        }
      }
      function Ct(h) {
        if (h) {
          var C = h._owner, M = vt(h.type, h._source, C ? C.type : null);
          hn(M);
        } else
          hn(null);
      }
      var Vu;
      Vu = !1;
      function eu() {
        if (ut.current) {
          var h = Vn(ut.current.type);
          if (h)
            return `

Check the render method of \`` + h + "`.";
        }
        return "";
      }
      function Ye(h) {
        if (h !== void 0) {
          var C = h.fileName.replace(/^.*[\\\/]/, ""), M = h.lineNumber;
          return `

Check your code at ` + C + ":" + M + ".";
        }
        return "";
      }
      function Za(h) {
        return h != null ? Ye(h.__source) : "";
      }
      var cn = {};
      function Br(h) {
        var C = eu();
        if (!C) {
          var M = typeof h == "string" ? h : h.displayName || h.name;
          M && (C = `

Check the top-level render call using <` + M + ">.");
        }
        return C;
      }
      function Da(h, C) {
        if (!(!h._store || h._store.validated || h.key != null)) {
          h._store.validated = !0;
          var M = Br(C);
          if (!cn[M]) {
            cn[M] = !0;
            var A = "";
            h && h._owner && h._owner !== ut.current && (A = " It was passed a child from " + Vn(h._owner.type) + "."), Ct(h), B('Each child in a list should have a unique "key" prop.%s%s See https://reactjs.org/link/warning-keys for more information.', M, A), Ct(null);
          }
        }
      }
      function ml(h, C) {
        if (typeof h == "object") {
          if (mn(h))
            for (var M = 0; M < h.length; M++) {
              var A = h[M];
              xt(A) && Da(A, C);
            }
          else if (xt(h))
            h._store && (h._store.validated = !0);
          else if (h) {
            var q = rt(h);
            if (typeof q == "function" && q !== h.entries)
              for (var Se = q.call(h), oe; !(oe = Se.next()).done; )
                xt(oe.value) && Da(oe.value, C);
          }
        }
      }
      function Jt(h) {
        {
          var C = h.type;
          if (C == null || typeof C == "string")
            return;
          var M;
          if (typeof C == "function")
            M = C.propTypes;
          else if (typeof C == "object" && (C.$$typeof === Ie || // Note: Memo only checks outer props here.
          // Inner props are checked in the reconciler.
          C.$$typeof === ae))
            M = C.propTypes;
          else
            return;
          if (M) {
            var A = Vn(C);
            Zo(M, h.props, "prop", A, h);
          } else if (C.PropTypes !== void 0 && !Vu) {
            Vu = !0;
            var q = Vn(C);
            B("Component %s declared `PropTypes` instead of `propTypes`. Did you misspell the property assignment?", q || "Unknown");
          }
          typeof C.getDefaultProps == "function" && !C.getDefaultProps.isReactClassApproved && B("getDefaultProps is only used on classic React.createClass definitions. Use a static property named `defaultProps` instead.");
        }
      }
      function fn(h) {
        {
          for (var C = Object.keys(h.props), M = 0; M < C.length; M++) {
            var A = C[M];
            if (A !== "children" && A !== "key") {
              Ct(h), B("Invalid prop `%s` supplied to `React.Fragment`. React.Fragment can only have `key` and `children` props.", A), Ct(null);
              break;
            }
          }
          h.ref !== null && (Ct(h), B("Invalid attribute `ref` supplied to `React.Fragment`."), Ct(null));
        }
      }
      function Jo(h, C, M) {
        var A = I(h);
        if (!A) {
          var q = "";
          (h === void 0 || typeof h == "object" && h !== null && Object.keys(h).length === 0) && (q += " You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports.");
          var Se = Za(C);
          Se ? q += Se : q += eu();
          var oe;
          h === null ? oe = "null" : mn(h) ? oe = "array" : h !== void 0 && h.$$typeof === Ut ? (oe = "<" + (Vn(h.type) || "Unknown") + " />", q = " Did you accidentally export a JSX literal instead of a component?") : oe = typeof h, B("React.createElement: type is invalid -- expected a string (for built-in components) or a class/function (for composite components) but got: %s.%s", oe, q);
        }
        var Ve = be.apply(this, arguments);
        if (Ve == null)
          return Ve;
        if (A)
          for (var tt = 2; tt < arguments.length; tt++)
            ml(arguments[tt], h);
        return h === nt ? fn(Ve) : Jt(Ve), Ve;
      }
      var nr = !1;
      function $r(h) {
        var C = Jo.bind(null, h);
        return C.type = h, nr || (nr = !0, Ke("React.createFactory() is deprecated and will be removed in a future major release. Consider using JSX or use React.createElement() directly instead.")), Object.defineProperty(C, "type", {
          enumerable: !1,
          get: function() {
            return Ke("Factory.type is deprecated. Access the class directly before passing it to createFactory."), Object.defineProperty(this, "type", {
              value: h
            }), h;
          }
        }), C;
      }
      function Ja(h, C, M) {
        for (var A = Lt.apply(this, arguments), q = 2; q < arguments.length; q++)
          ml(arguments[q], A.type);
        return Jt(A), A;
      }
      function Pu(h, C) {
        var M = _t.transition;
        _t.transition = {};
        var A = _t.transition;
        _t.transition._updatedFibers = /* @__PURE__ */ new Set();
        try {
          h();
        } finally {
          if (_t.transition = M, M === null && A._updatedFibers) {
            var q = A._updatedFibers.size;
            q > 10 && Ke("Detected a large number of updates inside startTransition. If this is due to a subscription please re-write it to use React provided hooks. Otherwise concurrent mode guarantees are off the table."), A._updatedFibers.clear();
          }
        }
      }
      var tu = !1, nu = null;
      function yl(h) {
        if (nu === null)
          try {
            var C = ("require" + Math.random()).slice(0, 7), M = Z && Z[C];
            nu = M.call(Z, "timers").setImmediate;
          } catch {
            nu = function(q) {
              tu === !1 && (tu = !0, typeof MessageChannel > "u" && B("This browser does not have a MessageChannel implementation, so enqueuing tasks via await act(async () => ...) will fail. Please file an issue at https://github.com/facebook/react/issues if you encounter this warning."));
              var Se = new MessageChannel();
              Se.port1.onmessage = q, Se.port2.postMessage(void 0);
            };
          }
        return nu(h);
      }
      var ka = 0, Ui = !1;
      function Bu(h) {
        {
          var C = ka;
          ka++, Re.current === null && (Re.current = []);
          var M = Re.isBatchingLegacy, A;
          try {
            if (Re.isBatchingLegacy = !0, A = h(), !M && Re.didScheduleLegacyUpdate) {
              var q = Re.current;
              q !== null && (Re.didScheduleLegacyUpdate = !1, Fi(q));
            }
          } catch (Ht) {
            throw Ai(C), Ht;
          } finally {
            Re.isBatchingLegacy = M;
          }
          if (A !== null && typeof A == "object" && typeof A.then == "function") {
            var Se = A, oe = !1, Ve = {
              then: function(Ht, en) {
                oe = !0, Se.then(function(Rt) {
                  Ai(C), ka === 0 ? $u(Rt, Ht, en) : Ht(Rt);
                }, function(Rt) {
                  Ai(C), en(Rt);
                });
              }
            };
            return !Ui && typeof Promise < "u" && Promise.resolve().then(function() {
            }).then(function() {
              oe || (Ui = !0, B("You called act(async () => ...) without await. This could lead to unexpected testing behaviour, interleaving multiple act calls and mixing their scopes. You should - await act(async () => ...);"));
            }), Ve;
          } else {
            var tt = A;
            if (Ai(C), ka === 0) {
              var Nt = Re.current;
              Nt !== null && (Fi(Nt), Re.current = null);
              var Ft = {
                then: function(Ht, en) {
                  Re.current === null ? (Re.current = [], $u(tt, Ht, en)) : Ht(tt);
                }
              };
              return Ft;
            } else {
              var jt = {
                then: function(Ht, en) {
                  Ht(tt);
                }
              };
              return jt;
            }
          }
        }
      }
      function Ai(h) {
        h !== ka - 1 && B("You seem to have overlapping act() calls, this is not supported. Be sure to await previous act() calls before making a new one. "), ka = h;
      }
      function $u(h, C, M) {
        {
          var A = Re.current;
          if (A !== null)
            try {
              Fi(A), yl(function() {
                A.length === 0 ? (Re.current = null, C(h)) : $u(h, C, M);
              });
            } catch (q) {
              M(q);
            }
          else
            C(h);
        }
      }
      var di = !1;
      function Fi(h) {
        if (!di) {
          di = !0;
          var C = 0;
          try {
            for (; C < h.length; C++) {
              var M = h[C];
              do
                M = M(!0);
              while (M !== null);
            }
            h.length = 0;
          } catch (A) {
            throw h = h.slice(C + 1), A;
          } finally {
            di = !1;
          }
        }
      }
      var Yu = Jo, es = Ja, ei = $r, Iu = {
        map: _a,
        forEach: Gl,
        count: cl,
        toArray: ql,
        only: fl
      };
      pe.Children = Iu, pe.Component = ot, pe.Fragment = nt, pe.Profiler = st, pe.PureComponent = Zn, pe.StrictMode = S, pe.Suspense = te, pe.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = Et, pe.cloneElement = es, pe.createContext = Xa, pe.createElement = Yu, pe.createFactory = ei, pe.createRef = Fr, pe.forwardRef = Mi, pe.isValidElement = xt, pe.lazy = da, pe.memo = J, pe.startTransition = Pu, pe.unstable_act = Bu, pe.useCallback = gr, pe.useContext = lt, pe.useDebugValue = Vr, pe.useDeferredValue = si, pe.useEffect = zn, pe.useId = et, pe.useImperativeHandle = Gt, pe.useInsertionEffect = Qt, pe.useLayoutEffect = Wt, pe.useMemo = oi, pe.useReducer = Ze, pe.useRef = De, pe.useState = mt, pe.useSyncExternalStore = Xl, pe.useTransition = Yo, pe.version = Tt, typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u" && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop == "function" && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop(new Error());
    }();
  }($p, $p.exports)), $p.exports;
}
var St = {};
/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var q1;
function Xb() {
  if (q1)
    return St;
  q1 = 1;
  var Z = Symbol.for("react.element"), pe = Symbol.for("react.portal"), F = Symbol.for("react.fragment"), Tt = Symbol.for("react.strict_mode"), Ut = Symbol.for("react.profiler"), on = Symbol.for("react.provider"), nt = Symbol.for("react.context"), S = Symbol.for("react.forward_ref"), st = Symbol.for("react.suspense"), Me = Symbol.for("react.memo"), fe = Symbol.for("react.lazy"), Ie = Symbol.iterator;
  function te(T) {
    return T === null || typeof T != "object" ? null : (T = Ie && T[Ie] || T["@@iterator"], typeof T == "function" ? T : null);
  }
  var Ne = { isMounted: function() {
    return !1;
  }, enqueueForceUpdate: function() {
  }, enqueueReplaceState: function() {
  }, enqueueSetState: function() {
  } }, ae = Object.assign, Ce = {};
  function ct(T, $, he) {
    this.props = T, this.context = $, this.refs = Ce, this.updater = he || Ne;
  }
  ct.prototype.isReactComponent = {}, ct.prototype.setState = function(T, $) {
    if (typeof T != "object" && typeof T != "function" && T != null)
      throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");
    this.updater.enqueueSetState(this, T, $, "setState");
  }, ct.prototype.forceUpdate = function(T) {
    this.updater.enqueueForceUpdate(this, T, "forceUpdate");
  };
  function jn() {
  }
  jn.prototype = ct.prototype;
  function an(T, $, he) {
    this.props = T, this.context = $, this.refs = Ce, this.updater = he || Ne;
  }
  var rt = an.prototype = new jn();
  rt.constructor = an, ae(rt, ct.prototype), rt.isPureReactComponent = !0;
  var He = Array.isArray, _t = Object.prototype.hasOwnProperty, Re = { current: null }, ut = { key: !0, ref: !0, __self: !0, __source: !0 };
  function $e(T, $, he) {
    var Ae, Fe = {}, ot = null, at = null;
    if ($ != null)
      for (Ae in $.ref !== void 0 && (at = $.ref), $.key !== void 0 && (ot = "" + $.key), $)
        _t.call($, Ae) && !ut.hasOwnProperty(Ae) && (Fe[Ae] = $[Ae]);
    var ft = arguments.length - 2;
    if (ft === 1)
      Fe.children = he;
    else if (1 < ft) {
      for (var it = Array(ft), Zt = 0; Zt < ft; Zt++)
        it[Zt] = arguments[Zt + 2];
      Fe.children = it;
    }
    if (T && T.defaultProps)
      for (Ae in ft = T.defaultProps, ft)
        Fe[Ae] === void 0 && (Fe[Ae] = ft[Ae]);
    return { $$typeof: Z, type: T, key: ot, ref: at, props: Fe, _owner: Re.current };
  }
  function Tn(T, $) {
    return { $$typeof: Z, type: T.type, key: $, ref: T.ref, props: T.props, _owner: T._owner };
  }
  function hn(T) {
    return typeof T == "object" && T !== null && T.$$typeof === Z;
  }
  function Yt(T) {
    var $ = { "=": "=0", ":": "=2" };
    return "$" + T.replace(/[=:]/g, function(he) {
      return $[he];
    });
  }
  var ht = /\/+/g;
  function Kt(T, $) {
    return typeof T == "object" && T !== null && T.key != null ? Yt("" + T.key) : $.toString(36);
  }
  function Pe(T, $, he, Ae, Fe) {
    var ot = typeof T;
    (ot === "undefined" || ot === "boolean") && (T = null);
    var at = !1;
    if (T === null)
      at = !0;
    else
      switch (ot) {
        case "string":
        case "number":
          at = !0;
          break;
        case "object":
          switch (T.$$typeof) {
            case Z:
            case pe:
              at = !0;
          }
      }
    if (at)
      return at = T, Fe = Fe(at), T = Ae === "" ? "." + Kt(at, 0) : Ae, He(Fe) ? (he = "", T != null && (he = T.replace(ht, "$&/") + "/"), Pe(Fe, $, he, "", function(Zt) {
        return Zt;
      })) : Fe != null && (hn(Fe) && (Fe = Tn(Fe, he + (!Fe.key || at && at.key === Fe.key ? "" : ("" + Fe.key).replace(ht, "$&/") + "/") + T)), $.push(Fe)), 1;
    if (at = 0, Ae = Ae === "" ? "." : Ae + ":", He(T))
      for (var ft = 0; ft < T.length; ft++) {
        ot = T[ft];
        var it = Ae + Kt(ot, ft);
        at += Pe(ot, $, he, it, Fe);
      }
    else if (it = te(T), typeof it == "function")
      for (T = it.call(T), ft = 0; !(ot = T.next()).done; )
        ot = ot.value, it = Ae + Kt(ot, ft++), at += Pe(ot, $, he, it, Fe);
    else if (ot === "object")
      throw $ = String(T), Error("Objects are not valid as a React child (found: " + ($ === "[object Object]" ? "object with keys {" + Object.keys(T).join(", ") + "}" : $) + "). If you meant to render a collection of children, use an array instead.");
    return at;
  }
  function Xe(T, $, he) {
    if (T == null)
      return T;
    var Ae = [], Fe = 0;
    return Pe(T, Ae, "", "", function(ot) {
      return $.call(he, ot, Fe++);
    }), Ae;
  }
  function Et(T) {
    if (T._status === -1) {
      var $ = T._result;
      $ = $(), $.then(function(he) {
        (T._status === 0 || T._status === -1) && (T._status = 1, T._result = he);
      }, function(he) {
        (T._status === 0 || T._status === -1) && (T._status = 2, T._result = he);
      }), T._status === -1 && (T._status = 0, T._result = $);
    }
    if (T._status === 1)
      return T._result.default;
    throw T._result;
  }
  var Ke = { current: null }, B = { transition: null }, ve = { ReactCurrentDispatcher: Ke, ReactCurrentBatchConfig: B, ReactCurrentOwner: Re };
  return St.Children = { map: Xe, forEach: function(T, $, he) {
    Xe(T, function() {
      $.apply(this, arguments);
    }, he);
  }, count: function(T) {
    var $ = 0;
    return Xe(T, function() {
      $++;
    }), $;
  }, toArray: function(T) {
    return Xe(T, function($) {
      return $;
    }) || [];
  }, only: function(T) {
    if (!hn(T))
      throw Error("React.Children.only expected to receive a single React element child.");
    return T;
  } }, St.Component = ct, St.Fragment = F, St.Profiler = Ut, St.PureComponent = an, St.StrictMode = Tt, St.Suspense = st, St.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = ve, St.cloneElement = function(T, $, he) {
    if (T == null)
      throw Error("React.cloneElement(...): The argument must be a React element, but you passed " + T + ".");
    var Ae = ae({}, T.props), Fe = T.key, ot = T.ref, at = T._owner;
    if ($ != null) {
      if ($.ref !== void 0 && (ot = $.ref, at = Re.current), $.key !== void 0 && (Fe = "" + $.key), T.type && T.type.defaultProps)
        var ft = T.type.defaultProps;
      for (it in $)
        _t.call($, it) && !ut.hasOwnProperty(it) && (Ae[it] = $[it] === void 0 && ft !== void 0 ? ft[it] : $[it]);
    }
    var it = arguments.length - 2;
    if (it === 1)
      Ae.children = he;
    else if (1 < it) {
      ft = Array(it);
      for (var Zt = 0; Zt < it; Zt++)
        ft[Zt] = arguments[Zt + 2];
      Ae.children = ft;
    }
    return { $$typeof: Z, type: T.type, key: Fe, ref: ot, props: Ae, _owner: at };
  }, St.createContext = function(T) {
    return T = { $$typeof: nt, _currentValue: T, _currentValue2: T, _threadCount: 0, Provider: null, Consumer: null, _defaultValue: null, _globalName: null }, T.Provider = { $$typeof: on, _context: T }, T.Consumer = T;
  }, St.createElement = $e, St.createFactory = function(T) {
    var $ = $e.bind(null, T);
    return $.type = T, $;
  }, St.createRef = function() {
    return { current: null };
  }, St.forwardRef = function(T) {
    return { $$typeof: S, render: T };
  }, St.isValidElement = hn, St.lazy = function(T) {
    return { $$typeof: fe, _payload: { _status: -1, _result: T }, _init: Et };
  }, St.memo = function(T, $) {
    return { $$typeof: Me, type: T, compare: $ === void 0 ? null : $ };
  }, St.startTransition = function(T) {
    var $ = B.transition;
    B.transition = {};
    try {
      T();
    } finally {
      B.transition = $;
    }
  }, St.unstable_act = function() {
    throw Error("act(...) is not supported in production builds of React.");
  }, St.useCallback = function(T, $) {
    return Ke.current.useCallback(T, $);
  }, St.useContext = function(T) {
    return Ke.current.useContext(T);
  }, St.useDebugValue = function() {
  }, St.useDeferredValue = function(T) {
    return Ke.current.useDeferredValue(T);
  }, St.useEffect = function(T, $) {
    return Ke.current.useEffect(T, $);
  }, St.useId = function() {
    return Ke.current.useId();
  }, St.useImperativeHandle = function(T, $, he) {
    return Ke.current.useImperativeHandle(T, $, he);
  }, St.useInsertionEffect = function(T, $) {
    return Ke.current.useInsertionEffect(T, $);
  }, St.useLayoutEffect = function(T, $) {
    return Ke.current.useLayoutEffect(T, $);
  }, St.useMemo = function(T, $) {
    return Ke.current.useMemo(T, $);
  }, St.useReducer = function(T, $, he) {
    return Ke.current.useReducer(T, $, he);
  }, St.useRef = function(T) {
    return Ke.current.useRef(T);
  }, St.useState = function(T) {
    return Ke.current.useState(T);
  }, St.useSyncExternalStore = function(T, $, he) {
    return Ke.current.useSyncExternalStore(T, $, he);
  }, St.useTransition = function() {
    return Ke.current.useTransition();
  }, St.version = "18.2.0", St;
}
var Kb = { mode: "production", command: "build", isSsrBuild: !1, isPreview: !1 };
Kb === "production" ? c0.exports = Xb() : c0.exports = qb();
var Yp = c0.exports;
const Zb = /* @__PURE__ */ Gb(Yp);
var X1;
function Jb() {
  if (X1)
    return Pp;
  X1 = 1;
  var Z = { mode: "production", command: "build", isSsrBuild: !1, isPreview: !1 };
  /**
   * @license React
   * react-jsx-runtime.development.js
   *
   * Copyright (c) Facebook, Inc. and its affiliates.
   *
   * This source code is licensed under the MIT license found in the
   * LICENSE file in the root directory of this source tree.
   */
  return Z !== "production" && function() {
    var pe = Yp, F = Symbol.for("react.element"), Tt = Symbol.for("react.portal"), Ut = Symbol.for("react.fragment"), on = Symbol.for("react.strict_mode"), nt = Symbol.for("react.profiler"), S = Symbol.for("react.provider"), st = Symbol.for("react.context"), Me = Symbol.for("react.forward_ref"), fe = Symbol.for("react.suspense"), Ie = Symbol.for("react.suspense_list"), te = Symbol.for("react.memo"), Ne = Symbol.for("react.lazy"), ae = Symbol.for("react.offscreen"), Ce = Symbol.iterator, ct = "@@iterator";
    function jn(R) {
      if (R === null || typeof R != "object")
        return null;
      var I = Ce && R[Ce] || R[ct];
      return typeof I == "function" ? I : null;
    }
    var an = pe.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
    function rt(R) {
      {
        for (var I = arguments.length, J = new Array(I > 1 ? I - 1 : 0), re = 1; re < I; re++)
          J[re - 1] = arguments[re];
        He("error", R, J);
      }
    }
    function He(R, I, J) {
      {
        var re = an.ReactDebugCurrentFrame, lt = re.getStackAddendum();
        lt !== "" && (I += "%s", J = J.concat([lt]));
        var mt = J.map(function(Ze) {
          return String(Ze);
        });
        mt.unshift("Warning: " + I), Function.prototype.apply.call(console[R], console, mt);
      }
    }
    var _t = !1, Re = !1, ut = !1, $e = !1, Tn = !1, hn;
    hn = Symbol.for("react.module.reference");
    function Yt(R) {
      return !!(typeof R == "string" || typeof R == "function" || R === Ut || R === nt || Tn || R === on || R === fe || R === Ie || $e || R === ae || _t || Re || ut || typeof R == "object" && R !== null && (R.$$typeof === Ne || R.$$typeof === te || R.$$typeof === S || R.$$typeof === st || R.$$typeof === Me || // This needs to include all possible module reference object
      // types supported by any Flight configuration anywhere since
      // we don't know which Flight build this will end up being used
      // with.
      R.$$typeof === hn || R.getModuleId !== void 0));
    }
    function ht(R, I, J) {
      var re = R.displayName;
      if (re)
        return re;
      var lt = I.displayName || I.name || "";
      return lt !== "" ? J + "(" + lt + ")" : J;
    }
    function Kt(R) {
      return R.displayName || "Context";
    }
    function Pe(R) {
      if (R == null)
        return null;
      if (typeof R.tag == "number" && rt("Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."), typeof R == "function")
        return R.displayName || R.name || null;
      if (typeof R == "string")
        return R;
      switch (R) {
        case Ut:
          return "Fragment";
        case Tt:
          return "Portal";
        case nt:
          return "Profiler";
        case on:
          return "StrictMode";
        case fe:
          return "Suspense";
        case Ie:
          return "SuspenseList";
      }
      if (typeof R == "object")
        switch (R.$$typeof) {
          case st:
            var I = R;
            return Kt(I) + ".Consumer";
          case S:
            var J = R;
            return Kt(J._context) + ".Provider";
          case Me:
            return ht(R, R.render, "ForwardRef");
          case te:
            var re = R.displayName || null;
            return re !== null ? re : Pe(R.type) || "Memo";
          case Ne: {
            var lt = R, mt = lt._payload, Ze = lt._init;
            try {
              return Pe(Ze(mt));
            } catch {
              return null;
            }
          }
        }
      return null;
    }
    var Xe = Object.assign, Et = 0, Ke, B, ve, T, $, he, Ae;
    function Fe() {
    }
    Fe.__reactDisabledLog = !0;
    function ot() {
      {
        if (Et === 0) {
          Ke = console.log, B = console.info, ve = console.warn, T = console.error, $ = console.group, he = console.groupCollapsed, Ae = console.groupEnd;
          var R = {
            configurable: !0,
            enumerable: !0,
            value: Fe,
            writable: !0
          };
          Object.defineProperties(console, {
            info: R,
            log: R,
            warn: R,
            error: R,
            group: R,
            groupCollapsed: R,
            groupEnd: R
          });
        }
        Et++;
      }
    }
    function at() {
      {
        if (Et--, Et === 0) {
          var R = {
            configurable: !0,
            enumerable: !0,
            writable: !0
          };
          Object.defineProperties(console, {
            log: Xe({}, R, {
              value: Ke
            }),
            info: Xe({}, R, {
              value: B
            }),
            warn: Xe({}, R, {
              value: ve
            }),
            error: Xe({}, R, {
              value: T
            }),
            group: Xe({}, R, {
              value: $
            }),
            groupCollapsed: Xe({}, R, {
              value: he
            }),
            groupEnd: Xe({}, R, {
              value: Ae
            })
          });
        }
        Et < 0 && rt("disabledDepth fell below zero. This is a bug in React. Please file an issue.");
      }
    }
    var ft = an.ReactCurrentDispatcher, it;
    function Zt(R, I, J) {
      {
        if (it === void 0)
          try {
            throw Error();
          } catch (lt) {
            var re = lt.stack.trim().match(/\n( *(at )?)/);
            it = re && re[1] || "";
          }
        return `
` + it + R;
      }
    }
    var Zn = !1, Jn;
    {
      var Fr = typeof WeakMap == "function" ? WeakMap : Map;
      Jn = new Fr();
    }
    function vr(R, I) {
      if (!R || Zn)
        return "";
      {
        var J = Jn.get(R);
        if (J !== void 0)
          return J;
      }
      var re;
      Zn = !0;
      var lt = Error.prepareStackTrace;
      Error.prepareStackTrace = void 0;
      var mt;
      mt = ft.current, ft.current = null, ot();
      try {
        if (I) {
          var Ze = function() {
            throw Error();
          };
          if (Object.defineProperty(Ze.prototype, "props", {
            set: function() {
              throw Error();
            }
          }), typeof Reflect == "object" && Reflect.construct) {
            try {
              Reflect.construct(Ze, []);
            } catch (Vr) {
              re = Vr;
            }
            Reflect.construct(R, [], Ze);
          } else {
            try {
              Ze.call();
            } catch (Vr) {
              re = Vr;
            }
            R.call(Ze.prototype);
          }
        } else {
          try {
            throw Error();
          } catch (Vr) {
            re = Vr;
          }
          R();
        }
      } catch (Vr) {
        if (Vr && re && typeof Vr.stack == "string") {
          for (var De = Vr.stack.split(`
`), zn = re.stack.split(`
`), Qt = De.length - 1, Wt = zn.length - 1; Qt >= 1 && Wt >= 0 && De[Qt] !== zn[Wt]; )
            Wt--;
          for (; Qt >= 1 && Wt >= 0; Qt--, Wt--)
            if (De[Qt] !== zn[Wt]) {
              if (Qt !== 1 || Wt !== 1)
                do
                  if (Qt--, Wt--, Wt < 0 || De[Qt] !== zn[Wt]) {
                    var gr = `
` + De[Qt].replace(" at new ", " at ");
                    return R.displayName && gr.includes("<anonymous>") && (gr = gr.replace("<anonymous>", R.displayName)), typeof R == "function" && Jn.set(R, gr), gr;
                  }
                while (Qt >= 1 && Wt >= 0);
              break;
            }
        }
      } finally {
        Zn = !1, ft.current = mt, at(), Error.prepareStackTrace = lt;
      }
      var oi = R ? R.displayName || R.name : "", Gt = oi ? Zt(oi) : "";
      return typeof R == "function" && Jn.set(R, Gt), Gt;
    }
    function mn(R, I, J) {
      return vr(R, !1);
    }
    function er(R) {
      var I = R.prototype;
      return !!(I && I.isReactComponent);
    }
    function Hn(R, I, J) {
      if (R == null)
        return "";
      if (typeof R == "function")
        return vr(R, er(R));
      if (typeof R == "string")
        return Zt(R);
      switch (R) {
        case fe:
          return Zt("Suspense");
        case Ie:
          return Zt("SuspenseList");
      }
      if (typeof R == "object")
        switch (R.$$typeof) {
          case Me:
            return mn(R.render);
          case te:
            return Hn(R.type, I, J);
          case Ne: {
            var re = R, lt = re._payload, mt = re._init;
            try {
              return Hn(mt(lt), I, J);
            } catch {
            }
          }
        }
      return "";
    }
    var Mn = Object.prototype.hasOwnProperty, Nn = {}, Tr = an.ReactDebugCurrentFrame;
    function hr(R) {
      if (R) {
        var I = R._owner, J = Hn(R.type, R._source, I ? I.type : null);
        Tr.setExtraStackFrame(J);
      } else
        Tr.setExtraStackFrame(null);
    }
    function Vn(R, I, J, re, lt) {
      {
        var mt = Function.call.bind(Mn);
        for (var Ze in R)
          if (mt(R, Ze)) {
            var De = void 0;
            try {
              if (typeof R[Ze] != "function") {
                var zn = Error((re || "React class") + ": " + J + " type `" + Ze + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof R[Ze] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.");
                throw zn.name = "Invariant Violation", zn;
              }
              De = R[Ze](I, Ze, re, J, null, "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED");
            } catch (Qt) {
              De = Qt;
            }
            De && !(De instanceof Error) && (hr(lt), rt("%s: type specification of %s `%s` is invalid; the type checker function must return `null` or an `Error` but returned a %s. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).", re || "React class", J, Ze, typeof De), hr(null)), De instanceof Error && !(De.message in Nn) && (Nn[De.message] = !0, hr(lt), rt("Failed %s type: %s", J, De.message), hr(null));
          }
      }
    }
    var la = Array.isArray;
    function ua(R) {
      return la(R);
    }
    function mr(R) {
      {
        var I = typeof Symbol == "function" && Symbol.toStringTag, J = I && R[Symbol.toStringTag] || R.constructor.name || "Object";
        return J;
      }
    }
    function oa(R) {
      try {
        return tr(R), !1;
      } catch {
        return !0;
      }
    }
    function tr(R) {
      return "" + R;
    }
    function wr(R) {
      if (oa(R))
        return rt("The provided key is an unsupported type %s. This value must be coerced to a string before before using it here.", mr(R)), tr(R);
    }
    var ln = an.ReactCurrentOwner, sa = {
      key: !0,
      ref: !0,
      __self: !0,
      __source: !0
    }, ca, fa, ne;
    ne = {};
    function be(R) {
      if (Mn.call(R, "ref")) {
        var I = Object.getOwnPropertyDescriptor(R, "ref").get;
        if (I && I.isReactWarning)
          return !1;
      }
      return R.ref !== void 0;
    }
    function Je(R) {
      if (Mn.call(R, "key")) {
        var I = Object.getOwnPropertyDescriptor(R, "key").get;
        if (I && I.isReactWarning)
          return !1;
      }
      return R.key !== void 0;
    }
    function Lt(R, I) {
      if (typeof R.ref == "string" && ln.current && I && ln.current.stateNode !== I) {
        var J = Pe(ln.current.type);
        ne[J] || (rt('Component "%s" contains the string ref "%s". Support for string refs will be removed in a future major release. This case cannot be automatically converted to an arrow function. We ask you to manually fix this case by using useRef() or createRef() instead. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-string-ref', Pe(ln.current.type), R.ref), ne[J] = !0);
      }
    }
    function xt(R, I) {
      {
        var J = function() {
          ca || (ca = !0, rt("%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", I));
        };
        J.isReactWarning = !0, Object.defineProperty(R, "key", {
          get: J,
          configurable: !0
        });
      }
    }
    function wn(R, I) {
      {
        var J = function() {
          fa || (fa = !0, rt("%s: `ref` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", I));
        };
        J.isReactWarning = !0, Object.defineProperty(R, "ref", {
          get: J,
          configurable: !0
        });
      }
    }
    var sn = function(R, I, J, re, lt, mt, Ze) {
      var De = {
        // This tag allows us to uniquely identify this as a React Element
        $$typeof: F,
        // Built-in properties that belong on the element
        type: R,
        key: I,
        ref: J,
        props: Ze,
        // Record the component responsible for creating this element.
        _owner: mt
      };
      return De._store = {}, Object.defineProperty(De._store, "validated", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: !1
      }), Object.defineProperty(De, "_self", {
        configurable: !1,
        enumerable: !1,
        writable: !1,
        value: re
      }), Object.defineProperty(De, "_source", {
        configurable: !1,
        enumerable: !1,
        writable: !1,
        value: lt
      }), Object.freeze && (Object.freeze(De.props), Object.freeze(De)), De;
    };
    function yr(R, I, J, re, lt) {
      {
        var mt, Ze = {}, De = null, zn = null;
        J !== void 0 && (wr(J), De = "" + J), Je(I) && (wr(I.key), De = "" + I.key), be(I) && (zn = I.ref, Lt(I, lt));
        for (mt in I)
          Mn.call(I, mt) && !sa.hasOwnProperty(mt) && (Ze[mt] = I[mt]);
        if (R && R.defaultProps) {
          var Qt = R.defaultProps;
          for (mt in Qt)
            Ze[mt] === void 0 && (Ze[mt] = Qt[mt]);
        }
        if (De || zn) {
          var Wt = typeof R == "function" ? R.displayName || R.name || "Unknown" : R;
          De && xt(Ze, Wt), zn && wn(Ze, Wt);
        }
        return sn(R, De, zn, lt, re, ln.current, Ze);
      }
    }
    var At = an.ReactCurrentOwner, Qn = an.ReactDebugCurrentFrame;
    function Mt(R) {
      if (R) {
        var I = R._owner, J = Hn(R.type, R._source, I ? I.type : null);
        Qn.setExtraStackFrame(J);
      } else
        Qn.setExtraStackFrame(null);
    }
    var It;
    It = !1;
    function qa(R) {
      return typeof R == "object" && R !== null && R.$$typeof === F;
    }
    function _a() {
      {
        if (At.current) {
          var R = Pe(At.current.type);
          if (R)
            return `

Check the render method of \`` + R + "`.";
        }
        return "";
      }
    }
    function cl(R) {
      {
        if (R !== void 0) {
          var I = R.fileName.replace(/^.*[\\\/]/, ""), J = R.lineNumber;
          return `

Check your code at ` + I + ":" + J + ".";
        }
        return "";
      }
    }
    var Gl = {};
    function ql(R) {
      {
        var I = _a();
        if (!I) {
          var J = typeof R == "string" ? R : R.displayName || R.name;
          J && (I = `

Check the top-level render call using <` + J + ">.");
        }
        return I;
      }
    }
    function fl(R, I) {
      {
        if (!R._store || R._store.validated || R.key != null)
          return;
        R._store.validated = !0;
        var J = ql(I);
        if (Gl[J])
          return;
        Gl[J] = !0;
        var re = "";
        R && R._owner && R._owner !== At.current && (re = " It was passed a child from " + Pe(R._owner.type) + "."), Mt(R), rt('Each child in a list should have a unique "key" prop.%s%s See https://reactjs.org/link/warning-keys for more information.', J, re), Mt(null);
      }
    }
    function Xa(R, I) {
      {
        if (typeof R != "object")
          return;
        if (ua(R))
          for (var J = 0; J < R.length; J++) {
            var re = R[J];
            qa(re) && fl(re, I);
          }
        else if (qa(R))
          R._store && (R._store.validated = !0);
        else if (R) {
          var lt = jn(R);
          if (typeof lt == "function" && lt !== R.entries)
            for (var mt = lt.call(R), Ze; !(Ze = mt.next()).done; )
              qa(Ze.value) && fl(Ze.value, I);
        }
      }
    }
    function Ka(R) {
      {
        var I = R.type;
        if (I == null || typeof I == "string")
          return;
        var J;
        if (typeof I == "function")
          J = I.propTypes;
        else if (typeof I == "object" && (I.$$typeof === Me || // Note: Memo only checks outer props here.
        // Inner props are checked in the reconciler.
        I.$$typeof === te))
          J = I.propTypes;
        else
          return;
        if (J) {
          var re = Pe(I);
          Vn(J, R.props, "prop", re, R);
        } else if (I.PropTypes !== void 0 && !It) {
          It = !0;
          var lt = Pe(I);
          rt("Component %s declared `PropTypes` instead of `propTypes`. Did you misspell the property assignment?", lt || "Unknown");
        }
        typeof I.getDefaultProps == "function" && !I.getDefaultProps.isReactClassApproved && rt("getDefaultProps is only used on classic React.createClass definitions. Use a static property named `defaultProps` instead.");
      }
    }
    function xa(R) {
      {
        for (var I = Object.keys(R.props), J = 0; J < I.length; J++) {
          var re = I[J];
          if (re !== "children" && re !== "key") {
            Mt(R), rt("Invalid prop `%s` supplied to `React.Fragment`. React.Fragment can only have `key` and `children` props.", re), Mt(null);
            break;
          }
        }
        R.ref !== null && (Mt(R), rt("Invalid attribute `ref` supplied to `React.Fragment`."), Mt(null));
      }
    }
    function Li(R, I, J, re, lt, mt) {
      {
        var Ze = Yt(R);
        if (!Ze) {
          var De = "";
          (R === void 0 || typeof R == "object" && R !== null && Object.keys(R).length === 0) && (De += " You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports.");
          var zn = cl(lt);
          zn ? De += zn : De += _a();
          var Qt;
          R === null ? Qt = "null" : ua(R) ? Qt = "array" : R !== void 0 && R.$$typeof === F ? (Qt = "<" + (Pe(R.type) || "Unknown") + " />", De = " Did you accidentally export a JSX literal instead of a component?") : Qt = typeof R, rt("React.jsx: type is invalid -- expected a string (for built-in components) or a class/function (for composite components) but got: %s.%s", Qt, De);
        }
        var Wt = yr(R, I, J, lt, mt);
        if (Wt == null)
          return Wt;
        if (Ze) {
          var gr = I.children;
          if (gr !== void 0)
            if (re)
              if (ua(gr)) {
                for (var oi = 0; oi < gr.length; oi++)
                  Xa(gr[oi], R);
                Object.freeze && Object.freeze(gr);
              } else
                rt("React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead.");
            else
              Xa(gr, R);
        }
        return R === Ut ? xa(Wt) : Ka(Wt), Wt;
      }
    }
    function jr(R, I, J) {
      return Li(R, I, J, !0);
    }
    function Hr(R, I, J) {
      return Li(R, I, J, !1);
    }
    var da = Hr, Mi = jr;
    Pp.Fragment = Ut, Pp.jsx = da, Pp.jsxs = Mi;
  }(), Pp;
}
var Bp = {};
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var K1;
function eD() {
  if (K1)
    return Bp;
  K1 = 1;
  var Z = Yp, pe = Symbol.for("react.element"), F = Symbol.for("react.fragment"), Tt = Object.prototype.hasOwnProperty, Ut = Z.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner, on = { key: !0, ref: !0, __self: !0, __source: !0 };
  function nt(S, st, Me) {
    var fe, Ie = {}, te = null, Ne = null;
    Me !== void 0 && (te = "" + Me), st.key !== void 0 && (te = "" + st.key), st.ref !== void 0 && (Ne = st.ref);
    for (fe in st)
      Tt.call(st, fe) && !on.hasOwnProperty(fe) && (Ie[fe] = st[fe]);
    if (S && S.defaultProps)
      for (fe in st = S.defaultProps, st)
        Ie[fe] === void 0 && (Ie[fe] = st[fe]);
    return { $$typeof: pe, type: S, key: te, ref: Ne, props: Ie, _owner: Ut.current };
  }
  return Bp.Fragment = F, Bp.jsx = nt, Bp.jsxs = nt, Bp;
}
var tD = { mode: "production", command: "build", isSsrBuild: !1, isPreview: !1 };
tD === "production" ? s0.exports = eD() : s0.exports = Jb();
var f0 = s0.exports, d0 = { exports: {} }, Wa = {}, zm = { exports: {} }, u0 = {}, Z1;
function nD() {
  return Z1 || (Z1 = 1, function(Z) {
    var pe = { mode: "production", command: "build", isSsrBuild: !1, isPreview: !1 };
    /**
     * @license React
     * scheduler.development.js
     *
     * Copyright (c) Facebook, Inc. and its affiliates.
     *
     * This source code is licensed under the MIT license found in the
     * LICENSE file in the root directory of this source tree.
     */
    pe !== "production" && function() {
      typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u" && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart == "function" && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart(new Error());
      var F = !1, Tt = !1, Ut = 5;
      function on(ne, be) {
        var Je = ne.length;
        ne.push(be), st(ne, be, Je);
      }
      function nt(ne) {
        return ne.length === 0 ? null : ne[0];
      }
      function S(ne) {
        if (ne.length === 0)
          return null;
        var be = ne[0], Je = ne.pop();
        return Je !== be && (ne[0] = Je, Me(ne, Je, 0)), be;
      }
      function st(ne, be, Je) {
        for (var Lt = Je; Lt > 0; ) {
          var xt = Lt - 1 >>> 1, wn = ne[xt];
          if (fe(wn, be) > 0)
            ne[xt] = be, ne[Lt] = wn, Lt = xt;
          else
            return;
        }
      }
      function Me(ne, be, Je) {
        for (var Lt = Je, xt = ne.length, wn = xt >>> 1; Lt < wn; ) {
          var sn = (Lt + 1) * 2 - 1, yr = ne[sn], At = sn + 1, Qn = ne[At];
          if (fe(yr, be) < 0)
            At < xt && fe(Qn, yr) < 0 ? (ne[Lt] = Qn, ne[At] = be, Lt = At) : (ne[Lt] = yr, ne[sn] = be, Lt = sn);
          else if (At < xt && fe(Qn, be) < 0)
            ne[Lt] = Qn, ne[At] = be, Lt = At;
          else
            return;
        }
      }
      function fe(ne, be) {
        var Je = ne.sortIndex - be.sortIndex;
        return Je !== 0 ? Je : ne.id - be.id;
      }
      var Ie = 1, te = 2, Ne = 3, ae = 4, Ce = 5;
      function ct(ne, be) {
      }
      var jn = typeof performance == "object" && typeof performance.now == "function";
      if (jn) {
        var an = performance;
        Z.unstable_now = function() {
          return an.now();
        };
      } else {
        var rt = Date, He = rt.now();
        Z.unstable_now = function() {
          return rt.now() - He;
        };
      }
      var _t = 1073741823, Re = -1, ut = 250, $e = 5e3, Tn = 1e4, hn = _t, Yt = [], ht = [], Kt = 1, Pe = null, Xe = Ne, Et = !1, Ke = !1, B = !1, ve = typeof setTimeout == "function" ? setTimeout : null, T = typeof clearTimeout == "function" ? clearTimeout : null, $ = typeof setImmediate < "u" ? setImmediate : null;
      typeof navigator < "u" && navigator.scheduling !== void 0 && navigator.scheduling.isInputPending !== void 0 && navigator.scheduling.isInputPending.bind(navigator.scheduling);
      function he(ne) {
        for (var be = nt(ht); be !== null; ) {
          if (be.callback === null)
            S(ht);
          else if (be.startTime <= ne)
            S(ht), be.sortIndex = be.expirationTime, on(Yt, be);
          else
            return;
          be = nt(ht);
        }
      }
      function Ae(ne) {
        if (B = !1, he(ne), !Ke)
          if (nt(Yt) !== null)
            Ke = !0, wr(Fe);
          else {
            var be = nt(ht);
            be !== null && ln(Ae, be.startTime - ne);
          }
      }
      function Fe(ne, be) {
        Ke = !1, B && (B = !1, sa()), Et = !0;
        var Je = Xe;
        try {
          var Lt;
          if (!Tt)
            return ot(ne, be);
        } finally {
          Pe = null, Xe = Je, Et = !1;
        }
      }
      function ot(ne, be) {
        var Je = be;
        for (he(Je), Pe = nt(Yt); Pe !== null && !F && !(Pe.expirationTime > Je && (!ne || hr())); ) {
          var Lt = Pe.callback;
          if (typeof Lt == "function") {
            Pe.callback = null, Xe = Pe.priorityLevel;
            var xt = Pe.expirationTime <= Je, wn = Lt(xt);
            Je = Z.unstable_now(), typeof wn == "function" ? Pe.callback = wn : Pe === nt(Yt) && S(Yt), he(Je);
          } else
            S(Yt);
          Pe = nt(Yt);
        }
        if (Pe !== null)
          return !0;
        var sn = nt(ht);
        return sn !== null && ln(Ae, sn.startTime - Je), !1;
      }
      function at(ne, be) {
        switch (ne) {
          case Ie:
          case te:
          case Ne:
          case ae:
          case Ce:
            break;
          default:
            ne = Ne;
        }
        var Je = Xe;
        Xe = ne;
        try {
          return be();
        } finally {
          Xe = Je;
        }
      }
      function ft(ne) {
        var be;
        switch (Xe) {
          case Ie:
          case te:
          case Ne:
            be = Ne;
            break;
          default:
            be = Xe;
            break;
        }
        var Je = Xe;
        Xe = be;
        try {
          return ne();
        } finally {
          Xe = Je;
        }
      }
      function it(ne) {
        var be = Xe;
        return function() {
          var Je = Xe;
          Xe = be;
          try {
            return ne.apply(this, arguments);
          } finally {
            Xe = Je;
          }
        };
      }
      function Zt(ne, be, Je) {
        var Lt = Z.unstable_now(), xt;
        if (typeof Je == "object" && Je !== null) {
          var wn = Je.delay;
          typeof wn == "number" && wn > 0 ? xt = Lt + wn : xt = Lt;
        } else
          xt = Lt;
        var sn;
        switch (ne) {
          case Ie:
            sn = Re;
            break;
          case te:
            sn = ut;
            break;
          case Ce:
            sn = hn;
            break;
          case ae:
            sn = Tn;
            break;
          case Ne:
          default:
            sn = $e;
            break;
        }
        var yr = xt + sn, At = {
          id: Kt++,
          callback: be,
          priorityLevel: ne,
          startTime: xt,
          expirationTime: yr,
          sortIndex: -1
        };
        return xt > Lt ? (At.sortIndex = xt, on(ht, At), nt(Yt) === null && At === nt(ht) && (B ? sa() : B = !0, ln(Ae, xt - Lt))) : (At.sortIndex = yr, on(Yt, At), !Ke && !Et && (Ke = !0, wr(Fe))), At;
      }
      function Zn() {
      }
      function Jn() {
        !Ke && !Et && (Ke = !0, wr(Fe));
      }
      function Fr() {
        return nt(Yt);
      }
      function vr(ne) {
        ne.callback = null;
      }
      function mn() {
        return Xe;
      }
      var er = !1, Hn = null, Mn = -1, Nn = Ut, Tr = -1;
      function hr() {
        var ne = Z.unstable_now() - Tr;
        return !(ne < Nn);
      }
      function Vn() {
      }
      function la(ne) {
        if (ne < 0 || ne > 125) {
          console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported");
          return;
        }
        ne > 0 ? Nn = Math.floor(1e3 / ne) : Nn = Ut;
      }
      var ua = function() {
        if (Hn !== null) {
          var ne = Z.unstable_now();
          Tr = ne;
          var be = !0, Je = !0;
          try {
            Je = Hn(be, ne);
          } finally {
            Je ? mr() : (er = !1, Hn = null);
          }
        } else
          er = !1;
      }, mr;
      if (typeof $ == "function")
        mr = function() {
          $(ua);
        };
      else if (typeof MessageChannel < "u") {
        var oa = new MessageChannel(), tr = oa.port2;
        oa.port1.onmessage = ua, mr = function() {
          tr.postMessage(null);
        };
      } else
        mr = function() {
          ve(ua, 0);
        };
      function wr(ne) {
        Hn = ne, er || (er = !0, mr());
      }
      function ln(ne, be) {
        Mn = ve(function() {
          ne(Z.unstable_now());
        }, be);
      }
      function sa() {
        T(Mn), Mn = -1;
      }
      var ca = Vn, fa = null;
      Z.unstable_IdlePriority = Ce, Z.unstable_ImmediatePriority = Ie, Z.unstable_LowPriority = ae, Z.unstable_NormalPriority = Ne, Z.unstable_Profiling = fa, Z.unstable_UserBlockingPriority = te, Z.unstable_cancelCallback = vr, Z.unstable_continueExecution = Jn, Z.unstable_forceFrameRate = la, Z.unstable_getCurrentPriorityLevel = mn, Z.unstable_getFirstCallbackNode = Fr, Z.unstable_next = ft, Z.unstable_pauseExecution = Zn, Z.unstable_requestPaint = ca, Z.unstable_runWithPriority = at, Z.unstable_scheduleCallback = Zt, Z.unstable_shouldYield = hr, Z.unstable_wrapCallback = it, typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u" && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop == "function" && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop(new Error());
    }();
  }(u0)), u0;
}
var o0 = {};
/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var J1;
function rD() {
  return J1 || (J1 = 1, function(Z) {
    function pe(B, ve) {
      var T = B.length;
      B.push(ve);
      e:
        for (; 0 < T; ) {
          var $ = T - 1 >>> 1, he = B[$];
          if (0 < Ut(he, ve))
            B[$] = ve, B[T] = he, T = $;
          else
            break e;
        }
    }
    function F(B) {
      return B.length === 0 ? null : B[0];
    }
    function Tt(B) {
      if (B.length === 0)
        return null;
      var ve = B[0], T = B.pop();
      if (T !== ve) {
        B[0] = T;
        e:
          for (var $ = 0, he = B.length, Ae = he >>> 1; $ < Ae; ) {
            var Fe = 2 * ($ + 1) - 1, ot = B[Fe], at = Fe + 1, ft = B[at];
            if (0 > Ut(ot, T))
              at < he && 0 > Ut(ft, ot) ? (B[$] = ft, B[at] = T, $ = at) : (B[$] = ot, B[Fe] = T, $ = Fe);
            else if (at < he && 0 > Ut(ft, T))
              B[$] = ft, B[at] = T, $ = at;
            else
              break e;
          }
      }
      return ve;
    }
    function Ut(B, ve) {
      var T = B.sortIndex - ve.sortIndex;
      return T !== 0 ? T : B.id - ve.id;
    }
    if (typeof performance == "object" && typeof performance.now == "function") {
      var on = performance;
      Z.unstable_now = function() {
        return on.now();
      };
    } else {
      var nt = Date, S = nt.now();
      Z.unstable_now = function() {
        return nt.now() - S;
      };
    }
    var st = [], Me = [], fe = 1, Ie = null, te = 3, Ne = !1, ae = !1, Ce = !1, ct = typeof setTimeout == "function" ? setTimeout : null, jn = typeof clearTimeout == "function" ? clearTimeout : null, an = typeof setImmediate < "u" ? setImmediate : null;
    typeof navigator < "u" && navigator.scheduling !== void 0 && navigator.scheduling.isInputPending !== void 0 && navigator.scheduling.isInputPending.bind(navigator.scheduling);
    function rt(B) {
      for (var ve = F(Me); ve !== null; ) {
        if (ve.callback === null)
          Tt(Me);
        else if (ve.startTime <= B)
          Tt(Me), ve.sortIndex = ve.expirationTime, pe(st, ve);
        else
          break;
        ve = F(Me);
      }
    }
    function He(B) {
      if (Ce = !1, rt(B), !ae)
        if (F(st) !== null)
          ae = !0, Et(_t);
        else {
          var ve = F(Me);
          ve !== null && Ke(He, ve.startTime - B);
        }
    }
    function _t(B, ve) {
      ae = !1, Ce && (Ce = !1, jn($e), $e = -1), Ne = !0;
      var T = te;
      try {
        for (rt(ve), Ie = F(st); Ie !== null && (!(Ie.expirationTime > ve) || B && !Yt()); ) {
          var $ = Ie.callback;
          if (typeof $ == "function") {
            Ie.callback = null, te = Ie.priorityLevel;
            var he = $(Ie.expirationTime <= ve);
            ve = Z.unstable_now(), typeof he == "function" ? Ie.callback = he : Ie === F(st) && Tt(st), rt(ve);
          } else
            Tt(st);
          Ie = F(st);
        }
        if (Ie !== null)
          var Ae = !0;
        else {
          var Fe = F(Me);
          Fe !== null && Ke(He, Fe.startTime - ve), Ae = !1;
        }
        return Ae;
      } finally {
        Ie = null, te = T, Ne = !1;
      }
    }
    var Re = !1, ut = null, $e = -1, Tn = 5, hn = -1;
    function Yt() {
      return !(Z.unstable_now() - hn < Tn);
    }
    function ht() {
      if (ut !== null) {
        var B = Z.unstable_now();
        hn = B;
        var ve = !0;
        try {
          ve = ut(!0, B);
        } finally {
          ve ? Kt() : (Re = !1, ut = null);
        }
      } else
        Re = !1;
    }
    var Kt;
    if (typeof an == "function")
      Kt = function() {
        an(ht);
      };
    else if (typeof MessageChannel < "u") {
      var Pe = new MessageChannel(), Xe = Pe.port2;
      Pe.port1.onmessage = ht, Kt = function() {
        Xe.postMessage(null);
      };
    } else
      Kt = function() {
        ct(ht, 0);
      };
    function Et(B) {
      ut = B, Re || (Re = !0, Kt());
    }
    function Ke(B, ve) {
      $e = ct(function() {
        B(Z.unstable_now());
      }, ve);
    }
    Z.unstable_IdlePriority = 5, Z.unstable_ImmediatePriority = 1, Z.unstable_LowPriority = 4, Z.unstable_NormalPriority = 3, Z.unstable_Profiling = null, Z.unstable_UserBlockingPriority = 2, Z.unstable_cancelCallback = function(B) {
      B.callback = null;
    }, Z.unstable_continueExecution = function() {
      ae || Ne || (ae = !0, Et(_t));
    }, Z.unstable_forceFrameRate = function(B) {
      0 > B || 125 < B ? console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported") : Tn = 0 < B ? Math.floor(1e3 / B) : 5;
    }, Z.unstable_getCurrentPriorityLevel = function() {
      return te;
    }, Z.unstable_getFirstCallbackNode = function() {
      return F(st);
    }, Z.unstable_next = function(B) {
      switch (te) {
        case 1:
        case 2:
        case 3:
          var ve = 3;
          break;
        default:
          ve = te;
      }
      var T = te;
      te = ve;
      try {
        return B();
      } finally {
        te = T;
      }
    }, Z.unstable_pauseExecution = function() {
    }, Z.unstable_requestPaint = function() {
    }, Z.unstable_runWithPriority = function(B, ve) {
      switch (B) {
        case 1:
        case 2:
        case 3:
        case 4:
        case 5:
          break;
        default:
          B = 3;
      }
      var T = te;
      te = B;
      try {
        return ve();
      } finally {
        te = T;
      }
    }, Z.unstable_scheduleCallback = function(B, ve, T) {
      var $ = Z.unstable_now();
      switch (typeof T == "object" && T !== null ? (T = T.delay, T = typeof T == "number" && 0 < T ? $ + T : $) : T = $, B) {
        case 1:
          var he = -1;
          break;
        case 2:
          he = 250;
          break;
        case 5:
          he = 1073741823;
          break;
        case 4:
          he = 1e4;
          break;
        default:
          he = 5e3;
      }
      return he = T + he, B = { id: fe++, callback: ve, priorityLevel: B, startTime: T, expirationTime: he, sortIndex: -1 }, T > $ ? (B.sortIndex = T, pe(Me, B), F(st) === null && B === F(Me) && (Ce ? (jn($e), $e = -1) : Ce = !0, Ke(He, T - $))) : (B.sortIndex = he, pe(st, B), ae || Ne || (ae = !0, Et(_t))), B;
    }, Z.unstable_shouldYield = Yt, Z.unstable_wrapCallback = function(B) {
      var ve = te;
      return function() {
        var T = te;
        te = ve;
        try {
          return B.apply(this, arguments);
        } finally {
          te = T;
        }
      };
    };
  }(o0)), o0;
}
var eR;
function aR() {
  if (eR)
    return zm.exports;
  eR = 1;
  var Z = { mode: "production", command: "build", isSsrBuild: !1, isPreview: !1 };
  return Z === "production" ? zm.exports = rD() : zm.exports = nD(), zm.exports;
}
var tR;
function aD() {
  if (tR)
    return Wa;
  tR = 1;
  var Z = { mode: "production", command: "build", isSsrBuild: !1, isPreview: !1 };
  /**
   * @license React
   * react-dom.development.js
   *
   * Copyright (c) Facebook, Inc. and its affiliates.
   *
   * This source code is licensed under the MIT license found in the
   * LICENSE file in the root directory of this source tree.
   */
  return Z !== "production" && function() {
    typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u" && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart == "function" && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart(new Error());
    var pe = Yp, F = aR(), Tt = pe.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED, Ut = !1;
    function on(e) {
      Ut = e;
    }
    function nt(e) {
      if (!Ut) {
        for (var t = arguments.length, a = new Array(t > 1 ? t - 1 : 0), i = 1; i < t; i++)
          a[i - 1] = arguments[i];
        st("warn", e, a);
      }
    }
    function S(e) {
      if (!Ut) {
        for (var t = arguments.length, a = new Array(t > 1 ? t - 1 : 0), i = 1; i < t; i++)
          a[i - 1] = arguments[i];
        st("error", e, a);
      }
    }
    function st(e, t, a) {
      {
        var i = Tt.ReactDebugCurrentFrame, u = i.getStackAddendum();
        u !== "" && (t += "%s", a = a.concat([u]));
        var s = a.map(function(f) {
          return String(f);
        });
        s.unshift("Warning: " + t), Function.prototype.apply.call(console[e], console, s);
      }
    }
    var Me = 0, fe = 1, Ie = 2, te = 3, Ne = 4, ae = 5, Ce = 6, ct = 7, jn = 8, an = 9, rt = 10, He = 11, _t = 12, Re = 13, ut = 14, $e = 15, Tn = 16, hn = 17, Yt = 18, ht = 19, Kt = 21, Pe = 22, Xe = 23, Et = 24, Ke = 25, B = !0, ve = !1, T = !1, $ = !1, he = !1, Ae = !0, Fe = !1, ot = !1, at = !0, ft = !0, it = !0, Zt = /* @__PURE__ */ new Set(), Zn = {}, Jn = {};
    function Fr(e, t) {
      vr(e, t), vr(e + "Capture", t);
    }
    function vr(e, t) {
      Zn[e] && S("EventRegistry: More than one plugin attempted to publish the same registration name, `%s`.", e), Zn[e] = t;
      {
        var a = e.toLowerCase();
        Jn[a] = e, e === "onDoubleClick" && (Jn.ondblclick = e);
      }
      for (var i = 0; i < t.length; i++)
        Zt.add(t[i]);
    }
    var mn = typeof window < "u" && typeof window.document < "u" && typeof window.document.createElement < "u", er = Object.prototype.hasOwnProperty;
    function Hn(e) {
      {
        var t = typeof Symbol == "function" && Symbol.toStringTag, a = t && e[Symbol.toStringTag] || e.constructor.name || "Object";
        return a;
      }
    }
    function Mn(e) {
      try {
        return Nn(e), !1;
      } catch {
        return !0;
      }
    }
    function Nn(e) {
      return "" + e;
    }
    function Tr(e, t) {
      if (Mn(e))
        return S("The provided `%s` attribute is an unsupported type %s. This value must be coerced to a string before before using it here.", t, Hn(e)), Nn(e);
    }
    function hr(e) {
      if (Mn(e))
        return S("The provided key is an unsupported type %s. This value must be coerced to a string before before using it here.", Hn(e)), Nn(e);
    }
    function Vn(e, t) {
      if (Mn(e))
        return S("The provided `%s` prop is an unsupported type %s. This value must be coerced to a string before before using it here.", t, Hn(e)), Nn(e);
    }
    function la(e, t) {
      if (Mn(e))
        return S("The provided `%s` CSS property is an unsupported type %s. This value must be coerced to a string before before using it here.", t, Hn(e)), Nn(e);
    }
    function ua(e) {
      if (Mn(e))
        return S("The provided HTML markup uses a value of unsupported type %s. This value must be coerced to a string before before using it here.", Hn(e)), Nn(e);
    }
    function mr(e) {
      if (Mn(e))
        return S("Form field values (value, checked, defaultValue, or defaultChecked props) must be strings, not %s. This value must be coerced to a string before before using it here.", Hn(e)), Nn(e);
    }
    var oa = 0, tr = 1, wr = 2, ln = 3, sa = 4, ca = 5, fa = 6, ne = ":A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD", be = ne + "\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040", Je = new RegExp("^[" + ne + "][" + be + "]*$"), Lt = {}, xt = {};
    function wn(e) {
      return er.call(xt, e) ? !0 : er.call(Lt, e) ? !1 : Je.test(e) ? (xt[e] = !0, !0) : (Lt[e] = !0, S("Invalid attribute name: `%s`", e), !1);
    }
    function sn(e, t, a) {
      return t !== null ? t.type === oa : a ? !1 : e.length > 2 && (e[0] === "o" || e[0] === "O") && (e[1] === "n" || e[1] === "N");
    }
    function yr(e, t, a, i) {
      if (a !== null && a.type === oa)
        return !1;
      switch (typeof t) {
        case "function":
        case "symbol":
          return !0;
        case "boolean": {
          if (i)
            return !1;
          if (a !== null)
            return !a.acceptsBooleans;
          var u = e.toLowerCase().slice(0, 5);
          return u !== "data-" && u !== "aria-";
        }
        default:
          return !1;
      }
    }
    function At(e, t, a, i) {
      if (t === null || typeof t > "u" || yr(e, t, a, i))
        return !0;
      if (i)
        return !1;
      if (a !== null)
        switch (a.type) {
          case ln:
            return !t;
          case sa:
            return t === !1;
          case ca:
            return isNaN(t);
          case fa:
            return isNaN(t) || t < 1;
        }
      return !1;
    }
    function Qn(e) {
      return It.hasOwnProperty(e) ? It[e] : null;
    }
    function Mt(e, t, a, i, u, s, f) {
      this.acceptsBooleans = t === wr || t === ln || t === sa, this.attributeName = i, this.attributeNamespace = u, this.mustUseProperty = a, this.propertyName = e, this.type = t, this.sanitizeURL = s, this.removeEmptyString = f;
    }
    var It = {}, qa = [
      "children",
      "dangerouslySetInnerHTML",
      // TODO: This prevents the assignment of defaultValue to regular
      // elements (not just inputs). Now that ReactDOMInput assigns to the
      // defaultValue property -- do we need this?
      "defaultValue",
      "defaultChecked",
      "innerHTML",
      "suppressContentEditableWarning",
      "suppressHydrationWarning",
      "style"
    ];
    qa.forEach(function(e) {
      It[e] = new Mt(
        e,
        oa,
        !1,
        // mustUseProperty
        e,
        // attributeName
        null,
        // attributeNamespace
        !1,
        // sanitizeURL
        !1
      );
    }), [["acceptCharset", "accept-charset"], ["className", "class"], ["htmlFor", "for"], ["httpEquiv", "http-equiv"]].forEach(function(e) {
      var t = e[0], a = e[1];
      It[t] = new Mt(
        t,
        tr,
        !1,
        // mustUseProperty
        a,
        // attributeName
        null,
        // attributeNamespace
        !1,
        // sanitizeURL
        !1
      );
    }), ["contentEditable", "draggable", "spellCheck", "value"].forEach(function(e) {
      It[e] = new Mt(
        e,
        wr,
        !1,
        // mustUseProperty
        e.toLowerCase(),
        // attributeName
        null,
        // attributeNamespace
        !1,
        // sanitizeURL
        !1
      );
    }), ["autoReverse", "externalResourcesRequired", "focusable", "preserveAlpha"].forEach(function(e) {
      It[e] = new Mt(
        e,
        wr,
        !1,
        // mustUseProperty
        e,
        // attributeName
        null,
        // attributeNamespace
        !1,
        // sanitizeURL
        !1
      );
    }), [
      "allowFullScreen",
      "async",
      // Note: there is a special case that prevents it from being written to the DOM
      // on the client side because the browsers are inconsistent. Instead we call focus().
      "autoFocus",
      "autoPlay",
      "controls",
      "default",
      "defer",
      "disabled",
      "disablePictureInPicture",
      "disableRemotePlayback",
      "formNoValidate",
      "hidden",
      "loop",
      "noModule",
      "noValidate",
      "open",
      "playsInline",
      "readOnly",
      "required",
      "reversed",
      "scoped",
      "seamless",
      // Microdata
      "itemScope"
    ].forEach(function(e) {
      It[e] = new Mt(
        e,
        ln,
        !1,
        // mustUseProperty
        e.toLowerCase(),
        // attributeName
        null,
        // attributeNamespace
        !1,
        // sanitizeURL
        !1
      );
    }), [
      "checked",
      // Note: `option.selected` is not updated if `select.multiple` is
      // disabled with `removeAttribute`. We have special logic for handling this.
      "multiple",
      "muted",
      "selected"
      // NOTE: if you add a camelCased prop to this list,
      // you'll need to set attributeName to name.toLowerCase()
      // instead in the assignment below.
    ].forEach(function(e) {
      It[e] = new Mt(
        e,
        ln,
        !0,
        // mustUseProperty
        e,
        // attributeName
        null,
        // attributeNamespace
        !1,
        // sanitizeURL
        !1
      );
    }), [
      "capture",
      "download"
      // NOTE: if you add a camelCased prop to this list,
      // you'll need to set attributeName to name.toLowerCase()
      // instead in the assignment below.
    ].forEach(function(e) {
      It[e] = new Mt(
        e,
        sa,
        !1,
        // mustUseProperty
        e,
        // attributeName
        null,
        // attributeNamespace
        !1,
        // sanitizeURL
        !1
      );
    }), [
      "cols",
      "rows",
      "size",
      "span"
      // NOTE: if you add a camelCased prop to this list,
      // you'll need to set attributeName to name.toLowerCase()
      // instead in the assignment below.
    ].forEach(function(e) {
      It[e] = new Mt(
        e,
        fa,
        !1,
        // mustUseProperty
        e,
        // attributeName
        null,
        // attributeNamespace
        !1,
        // sanitizeURL
        !1
      );
    }), ["rowSpan", "start"].forEach(function(e) {
      It[e] = new Mt(
        e,
        ca,
        !1,
        // mustUseProperty
        e.toLowerCase(),
        // attributeName
        null,
        // attributeNamespace
        !1,
        // sanitizeURL
        !1
      );
    });
    var _a = /[\-\:]([a-z])/g, cl = function(e) {
      return e[1].toUpperCase();
    };
    [
      "accent-height",
      "alignment-baseline",
      "arabic-form",
      "baseline-shift",
      "cap-height",
      "clip-path",
      "clip-rule",
      "color-interpolation",
      "color-interpolation-filters",
      "color-profile",
      "color-rendering",
      "dominant-baseline",
      "enable-background",
      "fill-opacity",
      "fill-rule",
      "flood-color",
      "flood-opacity",
      "font-family",
      "font-size",
      "font-size-adjust",
      "font-stretch",
      "font-style",
      "font-variant",
      "font-weight",
      "glyph-name",
      "glyph-orientation-horizontal",
      "glyph-orientation-vertical",
      "horiz-adv-x",
      "horiz-origin-x",
      "image-rendering",
      "letter-spacing",
      "lighting-color",
      "marker-end",
      "marker-mid",
      "marker-start",
      "overline-position",
      "overline-thickness",
      "paint-order",
      "panose-1",
      "pointer-events",
      "rendering-intent",
      "shape-rendering",
      "stop-color",
      "stop-opacity",
      "strikethrough-position",
      "strikethrough-thickness",
      "stroke-dasharray",
      "stroke-dashoffset",
      "stroke-linecap",
      "stroke-linejoin",
      "stroke-miterlimit",
      "stroke-opacity",
      "stroke-width",
      "text-anchor",
      "text-decoration",
      "text-rendering",
      "underline-position",
      "underline-thickness",
      "unicode-bidi",
      "unicode-range",
      "units-per-em",
      "v-alphabetic",
      "v-hanging",
      "v-ideographic",
      "v-mathematical",
      "vector-effect",
      "vert-adv-y",
      "vert-origin-x",
      "vert-origin-y",
      "word-spacing",
      "writing-mode",
      "xmlns:xlink",
      "x-height"
      // NOTE: if you add a camelCased prop to this list,
      // you'll need to set attributeName to name.toLowerCase()
      // instead in the assignment below.
    ].forEach(function(e) {
      var t = e.replace(_a, cl);
      It[t] = new Mt(
        t,
        tr,
        !1,
        // mustUseProperty
        e,
        null,
        // attributeNamespace
        !1,
        // sanitizeURL
        !1
      );
    }), [
      "xlink:actuate",
      "xlink:arcrole",
      "xlink:role",
      "xlink:show",
      "xlink:title",
      "xlink:type"
      // NOTE: if you add a camelCased prop to this list,
      // you'll need to set attributeName to name.toLowerCase()
      // instead in the assignment below.
    ].forEach(function(e) {
      var t = e.replace(_a, cl);
      It[t] = new Mt(
        t,
        tr,
        !1,
        // mustUseProperty
        e,
        "http://www.w3.org/1999/xlink",
        !1,
        // sanitizeURL
        !1
      );
    }), [
      "xml:base",
      "xml:lang",
      "xml:space"
      // NOTE: if you add a camelCased prop to this list,
      // you'll need to set attributeName to name.toLowerCase()
      // instead in the assignment below.
    ].forEach(function(e) {
      var t = e.replace(_a, cl);
      It[t] = new Mt(
        t,
        tr,
        !1,
        // mustUseProperty
        e,
        "http://www.w3.org/XML/1998/namespace",
        !1,
        // sanitizeURL
        !1
      );
    }), ["tabIndex", "crossOrigin"].forEach(function(e) {
      It[e] = new Mt(
        e,
        tr,
        !1,
        // mustUseProperty
        e.toLowerCase(),
        // attributeName
        null,
        // attributeNamespace
        !1,
        // sanitizeURL
        !1
      );
    });
    var Gl = "xlinkHref";
    It[Gl] = new Mt(
      "xlinkHref",
      tr,
      !1,
      // mustUseProperty
      "xlink:href",
      "http://www.w3.org/1999/xlink",
      !0,
      // sanitizeURL
      !1
    ), ["src", "href", "action", "formAction"].forEach(function(e) {
      It[e] = new Mt(
        e,
        tr,
        !1,
        // mustUseProperty
        e.toLowerCase(),
        // attributeName
        null,
        // attributeNamespace
        !0,
        // sanitizeURL
        !0
      );
    });
    var ql = /^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*\:/i, fl = !1;
    function Xa(e) {
      !fl && ql.test(e) && (fl = !0, S("A future version of React will block javascript: URLs as a security precaution. Use event handlers instead if you can. If you need to generate unsafe HTML try using dangerouslySetInnerHTML instead. React was passed %s.", JSON.stringify(e)));
    }
    function Ka(e, t, a, i) {
      if (i.mustUseProperty) {
        var u = i.propertyName;
        return e[u];
      } else {
        Tr(a, t), i.sanitizeURL && Xa("" + a);
        var s = i.attributeName, f = null;
        if (i.type === sa) {
          if (e.hasAttribute(s)) {
            var p = e.getAttribute(s);
            return p === "" ? !0 : At(t, a, i, !1) ? p : p === "" + a ? a : p;
          }
        } else if (e.hasAttribute(s)) {
          if (At(t, a, i, !1))
            return e.getAttribute(s);
          if (i.type === ln)
            return a;
          f = e.getAttribute(s);
        }
        return At(t, a, i, !1) ? f === null ? a : f : f === "" + a ? a : f;
      }
    }
    function xa(e, t, a, i) {
      {
        if (!wn(t))
          return;
        if (!e.hasAttribute(t))
          return a === void 0 ? void 0 : null;
        var u = e.getAttribute(t);
        return Tr(a, t), u === "" + a ? a : u;
      }
    }
    function Li(e, t, a, i) {
      var u = Qn(t);
      if (!sn(t, u, i)) {
        if (At(t, a, u, i) && (a = null), i || u === null) {
          if (wn(t)) {
            var s = t;
            a === null ? e.removeAttribute(s) : (Tr(a, t), e.setAttribute(s, "" + a));
          }
          return;
        }
        var f = u.mustUseProperty;
        if (f) {
          var p = u.propertyName;
          if (a === null) {
            var v = u.type;
            e[p] = v === ln ? !1 : "";
          } else
            e[p] = a;
          return;
        }
        var y = u.attributeName, g = u.attributeNamespace;
        if (a === null)
          e.removeAttribute(y);
        else {
          var b = u.type, _;
          b === ln || b === sa && a === !0 ? _ = "" : (Tr(a, y), _ = "" + a, u.sanitizeURL && Xa(_.toString())), g ? e.setAttributeNS(g, y, _) : e.setAttribute(y, _);
        }
      }
    }
    var jr = Symbol.for("react.element"), Hr = Symbol.for("react.portal"), da = Symbol.for("react.fragment"), Mi = Symbol.for("react.strict_mode"), R = Symbol.for("react.profiler"), I = Symbol.for("react.provider"), J = Symbol.for("react.context"), re = Symbol.for("react.forward_ref"), lt = Symbol.for("react.suspense"), mt = Symbol.for("react.suspense_list"), Ze = Symbol.for("react.memo"), De = Symbol.for("react.lazy"), zn = Symbol.for("react.scope"), Qt = Symbol.for("react.debug_trace_mode"), Wt = Symbol.for("react.offscreen"), gr = Symbol.for("react.legacy_hidden"), oi = Symbol.for("react.cache"), Gt = Symbol.for("react.tracing_marker"), Vr = Symbol.iterator, Yo = "@@iterator";
    function si(e) {
      if (e === null || typeof e != "object")
        return null;
      var t = Vr && e[Vr] || e[Yo];
      return typeof t == "function" ? t : null;
    }
    var et = Object.assign, Xl = 0, Ni, dl, Pr, Io, _r, Qo, Wo;
    function Go() {
    }
    Go.__reactDisabledLog = !0;
    function Kl() {
      {
        if (Xl === 0) {
          Ni = console.log, dl = console.info, Pr = console.warn, Io = console.error, _r = console.group, Qo = console.groupCollapsed, Wo = console.groupEnd;
          var e = {
            configurable: !0,
            enumerable: !0,
            value: Go,
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
        Xl++;
      }
    }
    function ju() {
      {
        if (Xl--, Xl === 0) {
          var e = {
            configurable: !0,
            enumerable: !0,
            writable: !0
          };
          Object.defineProperties(console, {
            log: et({}, e, {
              value: Ni
            }),
            info: et({}, e, {
              value: dl
            }),
            warn: et({}, e, {
              value: Pr
            }),
            error: et({}, e, {
              value: Io
            }),
            group: et({}, e, {
              value: _r
            }),
            groupCollapsed: et({}, e, {
              value: Qo
            }),
            groupEnd: et({}, e, {
              value: Wo
            })
          });
        }
        Xl < 0 && S("disabledDepth fell below zero. This is a bug in React. Please file an issue.");
      }
    }
    var zi = Tt.ReactCurrentDispatcher, ci;
    function ba(e, t, a) {
      {
        if (ci === void 0)
          try {
            throw Error();
          } catch (u) {
            var i = u.stack.trim().match(/\n( *(at )?)/);
            ci = i && i[1] || "";
          }
        return `
` + ci + e;
      }
    }
    var pl = !1, fi;
    {
      var Zl = typeof WeakMap == "function" ? WeakMap : Map;
      fi = new Zl();
    }
    function Jl(e, t) {
      if (!e || pl)
        return "";
      {
        var a = fi.get(e);
        if (a !== void 0)
          return a;
      }
      var i;
      pl = !0;
      var u = Error.prepareStackTrace;
      Error.prepareStackTrace = void 0;
      var s;
      s = zi.current, zi.current = null, Kl();
      try {
        if (t) {
          var f = function() {
            throw Error();
          };
          if (Object.defineProperty(f.prototype, "props", {
            set: function() {
              throw Error();
            }
          }), typeof Reflect == "object" && Reflect.construct) {
            try {
              Reflect.construct(f, []);
            } catch (z) {
              i = z;
            }
            Reflect.construct(e, [], f);
          } else {
            try {
              f.call();
            } catch (z) {
              i = z;
            }
            e.call(f.prototype);
          }
        } else {
          try {
            throw Error();
          } catch (z) {
            i = z;
          }
          e();
        }
      } catch (z) {
        if (z && i && typeof z.stack == "string") {
          for (var p = z.stack.split(`
`), v = i.stack.split(`
`), y = p.length - 1, g = v.length - 1; y >= 1 && g >= 0 && p[y] !== v[g]; )
            g--;
          for (; y >= 1 && g >= 0; y--, g--)
            if (p[y] !== v[g]) {
              if (y !== 1 || g !== 1)
                do
                  if (y--, g--, g < 0 || p[y] !== v[g]) {
                    var b = `
` + p[y].replace(" at new ", " at ");
                    return e.displayName && b.includes("<anonymous>") && (b = b.replace("<anonymous>", e.displayName)), typeof e == "function" && fi.set(e, b), b;
                  }
                while (y >= 1 && g >= 0);
              break;
            }
        }
      } finally {
        pl = !1, zi.current = s, ju(), Error.prepareStackTrace = u;
      }
      var _ = e ? e.displayName || e.name : "", N = _ ? ba(_) : "";
      return typeof e == "function" && fi.set(e, N), N;
    }
    function vl(e, t, a) {
      return Jl(e, !0);
    }
    function qo(e, t, a) {
      return Jl(e, !1);
    }
    function Xo(e) {
      var t = e.prototype;
      return !!(t && t.isReactComponent);
    }
    function vt(e, t, a) {
      if (e == null)
        return "";
      if (typeof e == "function")
        return Jl(e, Xo(e));
      if (typeof e == "string")
        return ba(e);
      switch (e) {
        case lt:
          return ba("Suspense");
        case mt:
          return ba("SuspenseList");
      }
      if (typeof e == "object")
        switch (e.$$typeof) {
          case re:
            return qo(e.render);
          case Ze:
            return vt(e.type, t, a);
          case De: {
            var i = e, u = i._payload, s = i._init;
            try {
              return vt(s(u), t, a);
            } catch {
            }
          }
        }
      return "";
    }
    function Ko(e) {
      switch (e._debugOwner && e._debugOwner.type, e._debugSource, e.tag) {
        case ae:
          return ba(e.type);
        case Tn:
          return ba("Lazy");
        case Re:
          return ba("Suspense");
        case ht:
          return ba("SuspenseList");
        case Me:
        case Ie:
        case $e:
          return qo(e.type);
        case He:
          return qo(e.type.render);
        case fe:
          return vl(e.type);
        default:
          return "";
      }
    }
    function Hu(e) {
      try {
        var t = "", a = e;
        do
          t += Ko(a), a = a.return;
        while (a);
        return t;
      } catch (i) {
        return `
Error generating stack: ` + i.message + `
` + i.stack;
      }
    }
    function hl(e, t, a) {
      var i = e.displayName;
      if (i)
        return i;
      var u = t.displayName || t.name || "";
      return u !== "" ? a + "(" + u + ")" : a;
    }
    function Zo(e) {
      return e.displayName || "Context";
    }
    function Ct(e) {
      if (e == null)
        return null;
      if (typeof e.tag == "number" && S("Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."), typeof e == "function")
        return e.displayName || e.name || null;
      if (typeof e == "string")
        return e;
      switch (e) {
        case da:
          return "Fragment";
        case Hr:
          return "Portal";
        case R:
          return "Profiler";
        case Mi:
          return "StrictMode";
        case lt:
          return "Suspense";
        case mt:
          return "SuspenseList";
      }
      if (typeof e == "object")
        switch (e.$$typeof) {
          case J:
            var t = e;
            return Zo(t) + ".Consumer";
          case I:
            var a = e;
            return Zo(a._context) + ".Provider";
          case re:
            return hl(e, e.render, "ForwardRef");
          case Ze:
            var i = e.displayName || null;
            return i !== null ? i : Ct(e.type) || "Memo";
          case De: {
            var u = e, s = u._payload, f = u._init;
            try {
              return Ct(f(s));
            } catch {
              return null;
            }
          }
        }
      return null;
    }
    function Vu(e, t, a) {
      var i = t.displayName || t.name || "";
      return e.displayName || (i !== "" ? a + "(" + i + ")" : a);
    }
    function eu(e) {
      return e.displayName || "Context";
    }
    function Ye(e) {
      var t = e.tag, a = e.type;
      switch (t) {
        case Et:
          return "Cache";
        case an:
          var i = a;
          return eu(i) + ".Consumer";
        case rt:
          var u = a;
          return eu(u._context) + ".Provider";
        case Yt:
          return "DehydratedFragment";
        case He:
          return Vu(a, a.render, "ForwardRef");
        case ct:
          return "Fragment";
        case ae:
          return a;
        case Ne:
          return "Portal";
        case te:
          return "Root";
        case Ce:
          return "Text";
        case Tn:
          return Ct(a);
        case jn:
          return a === Mi ? "StrictMode" : "Mode";
        case Pe:
          return "Offscreen";
        case _t:
          return "Profiler";
        case Kt:
          return "Scope";
        case Re:
          return "Suspense";
        case ht:
          return "SuspenseList";
        case Ke:
          return "TracingMarker";
        case fe:
        case Me:
        case hn:
        case Ie:
        case ut:
        case $e:
          if (typeof a == "function")
            return a.displayName || a.name || null;
          if (typeof a == "string")
            return a;
          break;
      }
      return null;
    }
    var Za = Tt.ReactDebugCurrentFrame, cn = null, Br = !1;
    function Da() {
      {
        if (cn === null)
          return null;
        var e = cn._debugOwner;
        if (e !== null && typeof e < "u")
          return Ye(e);
      }
      return null;
    }
    function ml() {
      return cn === null ? "" : Hu(cn);
    }
    function Jt() {
      Za.getCurrentStack = null, cn = null, Br = !1;
    }
    function fn(e) {
      Za.getCurrentStack = e === null ? null : ml, cn = e, Br = !1;
    }
    function Jo() {
      return cn;
    }
    function nr(e) {
      Br = e;
    }
    function $r(e) {
      return "" + e;
    }
    function Ja(e) {
      switch (typeof e) {
        case "boolean":
        case "number":
        case "string":
        case "undefined":
          return e;
        case "object":
          return mr(e), e;
        default:
          return "";
      }
    }
    var Pu = {
      button: !0,
      checkbox: !0,
      image: !0,
      hidden: !0,
      radio: !0,
      reset: !0,
      submit: !0
    };
    function tu(e, t) {
      Pu[t.type] || t.onChange || t.onInput || t.readOnly || t.disabled || t.value == null || S("You provided a `value` prop to a form field without an `onChange` handler. This will render a read-only field. If the field should be mutable use `defaultValue`. Otherwise, set either `onChange` or `readOnly`."), t.onChange || t.readOnly || t.disabled || t.checked == null || S("You provided a `checked` prop to a form field without an `onChange` handler. This will render a read-only field. If the field should be mutable use `defaultChecked`. Otherwise, set either `onChange` or `readOnly`.");
    }
    function nu(e) {
      var t = e.type, a = e.nodeName;
      return a && a.toLowerCase() === "input" && (t === "checkbox" || t === "radio");
    }
    function yl(e) {
      return e._valueTracker;
    }
    function ka(e) {
      e._valueTracker = null;
    }
    function Ui(e) {
      var t = "";
      return e && (nu(e) ? t = e.checked ? "true" : "false" : t = e.value), t;
    }
    function Bu(e) {
      var t = nu(e) ? "checked" : "value", a = Object.getOwnPropertyDescriptor(e.constructor.prototype, t);
      mr(e[t]);
      var i = "" + e[t];
      if (!(e.hasOwnProperty(t) || typeof a > "u" || typeof a.get != "function" || typeof a.set != "function")) {
        var u = a.get, s = a.set;
        Object.defineProperty(e, t, {
          configurable: !0,
          get: function() {
            return u.call(this);
          },
          set: function(p) {
            mr(p), i = "" + p, s.call(this, p);
          }
        }), Object.defineProperty(e, t, {
          enumerable: a.enumerable
        });
        var f = {
          getValue: function() {
            return i;
          },
          setValue: function(p) {
            mr(p), i = "" + p;
          },
          stopTracking: function() {
            ka(e), delete e[t];
          }
        };
        return f;
      }
    }
    function Ai(e) {
      yl(e) || (e._valueTracker = Bu(e));
    }
    function $u(e) {
      if (!e)
        return !1;
      var t = yl(e);
      if (!t)
        return !0;
      var a = t.getValue(), i = Ui(e);
      return i !== a ? (t.setValue(i), !0) : !1;
    }
    function di(e) {
      if (e = e || (typeof document < "u" ? document : void 0), typeof e > "u")
        return null;
      try {
        return e.activeElement || e.body;
      } catch {
        return e.body;
      }
    }
    var Fi = !1, Yu = !1, es = !1, ei = !1;
    function Iu(e) {
      var t = e.type === "checkbox" || e.type === "radio";
      return t ? e.checked != null : e.value != null;
    }
    function h(e, t) {
      var a = e, i = t.checked, u = et({}, t, {
        defaultChecked: void 0,
        defaultValue: void 0,
        value: void 0,
        checked: i ?? a._wrapperState.initialChecked
      });
      return u;
    }
    function C(e, t) {
      tu("input", t), t.checked !== void 0 && t.defaultChecked !== void 0 && !Yu && (S("%s contains an input of type %s with both checked and defaultChecked props. Input elements must be either controlled or uncontrolled (specify either the checked prop, or the defaultChecked prop, but not both). Decide between using a controlled or uncontrolled input element and remove one of these props. More info: https://reactjs.org/link/controlled-components", Da() || "A component", t.type), Yu = !0), t.value !== void 0 && t.defaultValue !== void 0 && !Fi && (S("%s contains an input of type %s with both value and defaultValue props. Input elements must be either controlled or uncontrolled (specify either the value prop, or the defaultValue prop, but not both). Decide between using a controlled or uncontrolled input element and remove one of these props. More info: https://reactjs.org/link/controlled-components", Da() || "A component", t.type), Fi = !0);
      var a = e, i = t.defaultValue == null ? "" : t.defaultValue;
      a._wrapperState = {
        initialChecked: t.checked != null ? t.checked : t.defaultChecked,
        initialValue: Ja(t.value != null ? t.value : i),
        controlled: Iu(t)
      };
    }
    function M(e, t) {
      var a = e, i = t.checked;
      i != null && Li(a, "checked", i, !1);
    }
    function A(e, t) {
      var a = e;
      {
        var i = Iu(t);
        !a._wrapperState.controlled && i && !ei && (S("A component is changing an uncontrolled input to be controlled. This is likely caused by the value changing from undefined to a defined value, which should not happen. Decide between using a controlled or uncontrolled input element for the lifetime of the component. More info: https://reactjs.org/link/controlled-components"), ei = !0), a._wrapperState.controlled && !i && !es && (S("A component is changing a controlled input to be uncontrolled. This is likely caused by the value changing from a defined to undefined, which should not happen. Decide between using a controlled or uncontrolled input element for the lifetime of the component. More info: https://reactjs.org/link/controlled-components"), es = !0);
      }
      M(e, t);
      var u = Ja(t.value), s = t.type;
      if (u != null)
        s === "number" ? (u === 0 && a.value === "" || // We explicitly want to coerce to number here if possible.
        // eslint-disable-next-line
        a.value != u) && (a.value = $r(u)) : a.value !== $r(u) && (a.value = $r(u));
      else if (s === "submit" || s === "reset") {
        a.removeAttribute("value");
        return;
      }
      t.hasOwnProperty("value") ? Ve(a, t.type, u) : t.hasOwnProperty("defaultValue") && Ve(a, t.type, Ja(t.defaultValue)), t.checked == null && t.defaultChecked != null && (a.defaultChecked = !!t.defaultChecked);
    }
    function q(e, t, a) {
      var i = e;
      if (t.hasOwnProperty("value") || t.hasOwnProperty("defaultValue")) {
        var u = t.type, s = u === "submit" || u === "reset";
        if (s && (t.value === void 0 || t.value === null))
          return;
        var f = $r(i._wrapperState.initialValue);
        a || f !== i.value && (i.value = f), i.defaultValue = f;
      }
      var p = i.name;
      p !== "" && (i.name = ""), i.defaultChecked = !i.defaultChecked, i.defaultChecked = !!i._wrapperState.initialChecked, p !== "" && (i.name = p);
    }
    function Se(e, t) {
      var a = e;
      A(a, t), oe(a, t);
    }
    function oe(e, t) {
      var a = t.name;
      if (t.type === "radio" && a != null) {
        for (var i = e; i.parentNode; )
          i = i.parentNode;
        Tr(a, "name");
        for (var u = i.querySelectorAll("input[name=" + JSON.stringify("" + a) + '][type="radio"]'), s = 0; s < u.length; s++) {
          var f = u[s];
          if (!(f === e || f.form !== e.form)) {
            var p = Eh(f);
            if (!p)
              throw new Error("ReactDOMInput: Mixing React and non-React radio inputs with the same `name` is not supported.");
            $u(f), A(f, p);
          }
        }
      }
    }
    function Ve(e, t, a) {
      // Focused number inputs synchronize on blur. See ChangeEventPlugin.js
      (t !== "number" || di(e.ownerDocument) !== e) && (a == null ? e.defaultValue = $r(e._wrapperState.initialValue) : e.defaultValue !== $r(a) && (e.defaultValue = $r(a)));
    }
    var tt = !1, Nt = !1, Ft = !1;
    function jt(e, t) {
      t.value == null && (typeof t.children == "object" && t.children !== null ? pe.Children.forEach(t.children, function(a) {
        a != null && (typeof a == "string" || typeof a == "number" || Nt || (Nt = !0, S("Cannot infer the option value of complex children. Pass a `value` prop or use a plain string as children to <option>.")));
      }) : t.dangerouslySetInnerHTML != null && (Ft || (Ft = !0, S("Pass a `value` prop if you set dangerouslyInnerHTML so React knows which value should be selected.")))), t.selected != null && !tt && (S("Use the `defaultValue` or `value` props on <select> instead of setting `selected` on <option>."), tt = !0);
    }
    function Ht(e, t) {
      t.value != null && e.setAttribute("value", $r(Ja(t.value)));
    }
    var en = Array.isArray;
    function Rt(e) {
      return en(e);
    }
    var gl;
    gl = !1;
    function Qu() {
      var e = Da();
      return e ? `

Check the render method of \`` + e + "`." : "";
    }
    var ts = ["value", "defaultValue"];
    function ns(e) {
      {
        tu("select", e);
        for (var t = 0; t < ts.length; t++) {
          var a = ts[t];
          if (e[a] != null) {
            var i = Rt(e[a]);
            e.multiple && !i ? S("The `%s` prop supplied to <select> must be an array if `multiple` is true.%s", a, Qu()) : !e.multiple && i && S("The `%s` prop supplied to <select> must be a scalar value if `multiple` is false.%s", a, Qu());
          }
        }
      }
    }
    function ji(e, t, a, i) {
      var u = e.options;
      if (t) {
        for (var s = a, f = {}, p = 0; p < s.length; p++)
          f["$" + s[p]] = !0;
        for (var v = 0; v < u.length; v++) {
          var y = f.hasOwnProperty("$" + u[v].value);
          u[v].selected !== y && (u[v].selected = y), y && i && (u[v].defaultSelected = !0);
        }
      } else {
        for (var g = $r(Ja(a)), b = null, _ = 0; _ < u.length; _++) {
          if (u[_].value === g) {
            u[_].selected = !0, i && (u[_].defaultSelected = !0);
            return;
          }
          b === null && !u[_].disabled && (b = u[_]);
        }
        b !== null && (b.selected = !0);
      }
    }
    function rs(e, t) {
      return et({}, t, {
        value: void 0
      });
    }
    function as(e, t) {
      var a = e;
      ns(t), a._wrapperState = {
        wasMultiple: !!t.multiple
      }, t.value !== void 0 && t.defaultValue !== void 0 && !gl && (S("Select elements must be either controlled or uncontrolled (specify either the value prop, or the defaultValue prop, but not both). Decide between using a controlled or uncontrolled select element and remove one of these props. More info: https://reactjs.org/link/controlled-components"), gl = !0);
    }
    function Yf(e, t) {
      var a = e;
      a.multiple = !!t.multiple;
      var i = t.value;
      i != null ? ji(a, !!t.multiple, i, !1) : t.defaultValue != null && ji(a, !!t.multiple, t.defaultValue, !0);
    }
    function Am(e, t) {
      var a = e, i = a._wrapperState.wasMultiple;
      a._wrapperState.wasMultiple = !!t.multiple;
      var u = t.value;
      u != null ? ji(a, !!t.multiple, u, !1) : i !== !!t.multiple && (t.defaultValue != null ? ji(a, !!t.multiple, t.defaultValue, !0) : ji(a, !!t.multiple, t.multiple ? [] : "", !1));
    }
    function Ip(e, t) {
      var a = e, i = t.value;
      i != null && ji(a, !!t.multiple, i, !1);
    }
    var Qp = !1;
    function If(e, t) {
      var a = e;
      if (t.dangerouslySetInnerHTML != null)
        throw new Error("`dangerouslySetInnerHTML` does not make sense on <textarea>.");
      var i = et({}, t, {
        value: void 0,
        defaultValue: void 0,
        children: $r(a._wrapperState.initialValue)
      });
      return i;
    }
    function Wp(e, t) {
      var a = e;
      tu("textarea", t), t.value !== void 0 && t.defaultValue !== void 0 && !Qp && (S("%s contains a textarea with both value and defaultValue props. Textarea elements must be either controlled or uncontrolled (specify either the value prop, or the defaultValue prop, but not both). Decide between using a controlled or uncontrolled textarea and remove one of these props. More info: https://reactjs.org/link/controlled-components", Da() || "A component"), Qp = !0);
      var i = t.value;
      if (i == null) {
        var u = t.children, s = t.defaultValue;
        if (u != null) {
          S("Use the `defaultValue` or `value` props instead of setting children on <textarea>.");
          {
            if (s != null)
              throw new Error("If you supply `defaultValue` on a <textarea>, do not pass children.");
            if (Rt(u)) {
              if (u.length > 1)
                throw new Error("<textarea> can only have at most one child.");
              u = u[0];
            }
            s = u;
          }
        }
        s == null && (s = ""), i = s;
      }
      a._wrapperState = {
        initialValue: Ja(i)
      };
    }
    function Gp(e, t) {
      var a = e, i = Ja(t.value), u = Ja(t.defaultValue);
      if (i != null) {
        var s = $r(i);
        s !== a.value && (a.value = s), t.defaultValue == null && a.defaultValue !== s && (a.defaultValue = s);
      }
      u != null && (a.defaultValue = $r(u));
    }
    function sc(e, t) {
      var a = e, i = a.textContent;
      i === a._wrapperState.initialValue && i !== "" && i !== null && (a.value = i);
    }
    function Fm(e, t) {
      Gp(e, t);
    }
    var Hi = "http://www.w3.org/1999/xhtml", jm = "http://www.w3.org/1998/Math/MathML", cc = "http://www.w3.org/2000/svg";
    function Qf(e) {
      switch (e) {
        case "svg":
          return cc;
        case "math":
          return jm;
        default:
          return Hi;
      }
    }
    function Wf(e, t) {
      return e == null || e === Hi ? Qf(t) : e === cc && t === "foreignObject" ? Hi : e;
    }
    var Hm = function(e) {
      return typeof MSApp < "u" && MSApp.execUnsafeLocalFunction ? function(t, a, i, u) {
        MSApp.execUnsafeLocalFunction(function() {
          return e(t, a, i, u);
        });
      } : e;
    }, fc, qp = Hm(function(e, t) {
      if (e.namespaceURI === cc && !("innerHTML" in e)) {
        fc = fc || document.createElement("div"), fc.innerHTML = "<svg>" + t.valueOf().toString() + "</svg>";
        for (var a = fc.firstChild; e.firstChild; )
          e.removeChild(e.firstChild);
        for (; a.firstChild; )
          e.appendChild(a.firstChild);
        return;
      }
      e.innerHTML = t;
    }), Yr = 1, Vi = 3, yn = 8, pa = 9, Gf = 11, is = function(e, t) {
      if (t) {
        var a = e.firstChild;
        if (a && a === e.lastChild && a.nodeType === Vi) {
          a.nodeValue = t;
          return;
        }
      }
      e.textContent = t;
    }, Xp = {
      animation: ["animationDelay", "animationDirection", "animationDuration", "animationFillMode", "animationIterationCount", "animationName", "animationPlayState", "animationTimingFunction"],
      background: ["backgroundAttachment", "backgroundClip", "backgroundColor", "backgroundImage", "backgroundOrigin", "backgroundPositionX", "backgroundPositionY", "backgroundRepeat", "backgroundSize"],
      backgroundPosition: ["backgroundPositionX", "backgroundPositionY"],
      border: ["borderBottomColor", "borderBottomStyle", "borderBottomWidth", "borderImageOutset", "borderImageRepeat", "borderImageSlice", "borderImageSource", "borderImageWidth", "borderLeftColor", "borderLeftStyle", "borderLeftWidth", "borderRightColor", "borderRightStyle", "borderRightWidth", "borderTopColor", "borderTopStyle", "borderTopWidth"],
      borderBlockEnd: ["borderBlockEndColor", "borderBlockEndStyle", "borderBlockEndWidth"],
      borderBlockStart: ["borderBlockStartColor", "borderBlockStartStyle", "borderBlockStartWidth"],
      borderBottom: ["borderBottomColor", "borderBottomStyle", "borderBottomWidth"],
      borderColor: ["borderBottomColor", "borderLeftColor", "borderRightColor", "borderTopColor"],
      borderImage: ["borderImageOutset", "borderImageRepeat", "borderImageSlice", "borderImageSource", "borderImageWidth"],
      borderInlineEnd: ["borderInlineEndColor", "borderInlineEndStyle", "borderInlineEndWidth"],
      borderInlineStart: ["borderInlineStartColor", "borderInlineStartStyle", "borderInlineStartWidth"],
      borderLeft: ["borderLeftColor", "borderLeftStyle", "borderLeftWidth"],
      borderRadius: ["borderBottomLeftRadius", "borderBottomRightRadius", "borderTopLeftRadius", "borderTopRightRadius"],
      borderRight: ["borderRightColor", "borderRightStyle", "borderRightWidth"],
      borderStyle: ["borderBottomStyle", "borderLeftStyle", "borderRightStyle", "borderTopStyle"],
      borderTop: ["borderTopColor", "borderTopStyle", "borderTopWidth"],
      borderWidth: ["borderBottomWidth", "borderLeftWidth", "borderRightWidth", "borderTopWidth"],
      columnRule: ["columnRuleColor", "columnRuleStyle", "columnRuleWidth"],
      columns: ["columnCount", "columnWidth"],
      flex: ["flexBasis", "flexGrow", "flexShrink"],
      flexFlow: ["flexDirection", "flexWrap"],
      font: ["fontFamily", "fontFeatureSettings", "fontKerning", "fontLanguageOverride", "fontSize", "fontSizeAdjust", "fontStretch", "fontStyle", "fontVariant", "fontVariantAlternates", "fontVariantCaps", "fontVariantEastAsian", "fontVariantLigatures", "fontVariantNumeric", "fontVariantPosition", "fontWeight", "lineHeight"],
      fontVariant: ["fontVariantAlternates", "fontVariantCaps", "fontVariantEastAsian", "fontVariantLigatures", "fontVariantNumeric", "fontVariantPosition"],
      gap: ["columnGap", "rowGap"],
      grid: ["gridAutoColumns", "gridAutoFlow", "gridAutoRows", "gridTemplateAreas", "gridTemplateColumns", "gridTemplateRows"],
      gridArea: ["gridColumnEnd", "gridColumnStart", "gridRowEnd", "gridRowStart"],
      gridColumn: ["gridColumnEnd", "gridColumnStart"],
      gridColumnGap: ["columnGap"],
      gridGap: ["columnGap", "rowGap"],
      gridRow: ["gridRowEnd", "gridRowStart"],
      gridRowGap: ["rowGap"],
      gridTemplate: ["gridTemplateAreas", "gridTemplateColumns", "gridTemplateRows"],
      listStyle: ["listStyleImage", "listStylePosition", "listStyleType"],
      margin: ["marginBottom", "marginLeft", "marginRight", "marginTop"],
      marker: ["markerEnd", "markerMid", "markerStart"],
      mask: ["maskClip", "maskComposite", "maskImage", "maskMode", "maskOrigin", "maskPositionX", "maskPositionY", "maskRepeat", "maskSize"],
      maskPosition: ["maskPositionX", "maskPositionY"],
      outline: ["outlineColor", "outlineStyle", "outlineWidth"],
      overflow: ["overflowX", "overflowY"],
      padding: ["paddingBottom", "paddingLeft", "paddingRight", "paddingTop"],
      placeContent: ["alignContent", "justifyContent"],
      placeItems: ["alignItems", "justifyItems"],
      placeSelf: ["alignSelf", "justifySelf"],
      textDecoration: ["textDecorationColor", "textDecorationLine", "textDecorationStyle"],
      textEmphasis: ["textEmphasisColor", "textEmphasisStyle"],
      transition: ["transitionDelay", "transitionDuration", "transitionProperty", "transitionTimingFunction"],
      wordWrap: ["overflowWrap"]
    }, Wu = {
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
      // SVG-related properties
      fillOpacity: !0,
      floodOpacity: !0,
      stopOpacity: !0,
      strokeDasharray: !0,
      strokeDashoffset: !0,
      strokeMiterlimit: !0,
      strokeOpacity: !0,
      strokeWidth: !0
    };
    function Kp(e, t) {
      return e + t.charAt(0).toUpperCase() + t.substring(1);
    }
    var Zp = ["Webkit", "ms", "Moz", "O"];
    Object.keys(Wu).forEach(function(e) {
      Zp.forEach(function(t) {
        Wu[Kp(t, e)] = Wu[e];
      });
    });
    function Sl(e, t, a) {
      var i = t == null || typeof t == "boolean" || t === "";
      return i ? "" : !a && typeof t == "number" && t !== 0 && !(Wu.hasOwnProperty(e) && Wu[e]) ? t + "px" : (la(t, e), ("" + t).trim());
    }
    var Vm = /([A-Z])/g, Pm = /^ms-/;
    function Bm(e) {
      return e.replace(Vm, "-$1").toLowerCase().replace(Pm, "-ms-");
    }
    var qf = function() {
    };
    {
      var Jp = /^(?:webkit|moz|o)[A-Z]/, ls = /^-ms-/, us = /-(.)/g, ev = /;\s*$/, Pi = {}, Xf = {}, Kf = !1, dc = !1, Zf = function(e) {
        return e.replace(us, function(t, a) {
          return a.toUpperCase();
        });
      }, tv = function(e) {
        Pi.hasOwnProperty(e) && Pi[e] || (Pi[e] = !0, S(
          "Unsupported style property %s. Did you mean %s?",
          e,
          // As Andi Smith suggests
          // (http://www.andismith.com/blog/2012/02/modernizr-prefixed/), an `-ms` prefix
          // is converted to lowercase `ms`.
          Zf(e.replace(ls, "ms-"))
        ));
      }, nv = function(e) {
        Pi.hasOwnProperty(e) && Pi[e] || (Pi[e] = !0, S("Unsupported vendor-prefixed style property %s. Did you mean %s?", e, e.charAt(0).toUpperCase() + e.slice(1)));
      }, rv = function(e, t) {
        Xf.hasOwnProperty(t) && Xf[t] || (Xf[t] = !0, S(`Style property values shouldn't contain a semicolon. Try "%s: %s" instead.`, e, t.replace(ev, "")));
      }, $m = function(e, t) {
        Kf || (Kf = !0, S("`NaN` is an invalid value for the `%s` css style property.", e));
      }, Ym = function(e, t) {
        dc || (dc = !0, S("`Infinity` is an invalid value for the `%s` css style property.", e));
      };
      qf = function(e, t) {
        e.indexOf("-") > -1 ? tv(e) : Jp.test(e) ? nv(e) : ev.test(t) && rv(e, t), typeof t == "number" && (isNaN(t) ? $m(e, t) : isFinite(t) || Ym(e, t));
      };
    }
    var Im = qf;
    function Qm(e) {
      {
        var t = "", a = "";
        for (var i in e)
          if (e.hasOwnProperty(i)) {
            var u = e[i];
            if (u != null) {
              var s = i.indexOf("--") === 0;
              t += a + (s ? i : Bm(i)) + ":", t += Sl(i, u, s), a = ";";
            }
          }
        return t || null;
      }
    }
    function av(e, t) {
      var a = e.style;
      for (var i in t)
        if (t.hasOwnProperty(i)) {
          var u = i.indexOf("--") === 0;
          u || Im(i, t[i]);
          var s = Sl(i, t[i], u);
          i === "float" && (i = "cssFloat"), u ? a.setProperty(i, s) : a[i] = s;
        }
    }
    function ti(e) {
      return e == null || typeof e == "boolean" || e === "";
    }
    function Gu(e) {
      var t = {};
      for (var a in e)
        for (var i = Xp[a] || [a], u = 0; u < i.length; u++)
          t[i[u]] = a;
      return t;
    }
    function iv(e, t) {
      {
        if (!t)
          return;
        var a = Gu(e), i = Gu(t), u = {};
        for (var s in a) {
          var f = a[s], p = i[s];
          if (p && f !== p) {
            var v = f + "," + p;
            if (u[v])
              continue;
            u[v] = !0, S("%s a style property during rerender (%s) when a conflicting property is set (%s) can lead to styling bugs. To avoid this, don't mix shorthand and non-shorthand properties for the same value; instead, replace the shorthand with separate values.", ti(e[f]) ? "Removing" : "Updating", f, p);
          }
        }
      }
    }
    var lv = {
      area: !0,
      base: !0,
      br: !0,
      col: !0,
      embed: !0,
      hr: !0,
      img: !0,
      input: !0,
      keygen: !0,
      link: !0,
      meta: !0,
      param: !0,
      source: !0,
      track: !0,
      wbr: !0
      // NOTE: menuitem's close tag should be omitted, but that causes problems.
    }, uv = et({
      menuitem: !0
    }, lv), ov = "__html";
    function os(e, t) {
      if (t) {
        if (uv[e] && (t.children != null || t.dangerouslySetInnerHTML != null))
          throw new Error(e + " is a void element tag and must neither have `children` nor use `dangerouslySetInnerHTML`.");
        if (t.dangerouslySetInnerHTML != null) {
          if (t.children != null)
            throw new Error("Can only set one of `children` or `props.dangerouslySetInnerHTML`.");
          if (typeof t.dangerouslySetInnerHTML != "object" || !(ov in t.dangerouslySetInnerHTML))
            throw new Error("`props.dangerouslySetInnerHTML` must be in the form `{__html: ...}`. Please visit https://reactjs.org/link/dangerously-set-inner-html for more information.");
        }
        if (!t.suppressContentEditableWarning && t.contentEditable && t.children != null && S("A component is `contentEditable` and contains `children` managed by React. It is now your responsibility to guarantee that none of those nodes are unexpectedly modified or duplicated. This is probably not intentional."), t.style != null && typeof t.style != "object")
          throw new Error("The `style` prop expects a mapping from style properties to values, not a string. For example, style={{marginRight: spacing + 'em'}} when using JSX.");
      }
    }
    function ru(e, t) {
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
    var pc = {
      // HTML
      accept: "accept",
      acceptcharset: "acceptCharset",
      "accept-charset": "acceptCharset",
      accesskey: "accessKey",
      action: "action",
      allowfullscreen: "allowFullScreen",
      alt: "alt",
      as: "as",
      async: "async",
      autocapitalize: "autoCapitalize",
      autocomplete: "autoComplete",
      autocorrect: "autoCorrect",
      autofocus: "autoFocus",
      autoplay: "autoPlay",
      autosave: "autoSave",
      capture: "capture",
      cellpadding: "cellPadding",
      cellspacing: "cellSpacing",
      challenge: "challenge",
      charset: "charSet",
      checked: "checked",
      children: "children",
      cite: "cite",
      class: "className",
      classid: "classID",
      classname: "className",
      cols: "cols",
      colspan: "colSpan",
      content: "content",
      contenteditable: "contentEditable",
      contextmenu: "contextMenu",
      controls: "controls",
      controlslist: "controlsList",
      coords: "coords",
      crossorigin: "crossOrigin",
      dangerouslysetinnerhtml: "dangerouslySetInnerHTML",
      data: "data",
      datetime: "dateTime",
      default: "default",
      defaultchecked: "defaultChecked",
      defaultvalue: "defaultValue",
      defer: "defer",
      dir: "dir",
      disabled: "disabled",
      disablepictureinpicture: "disablePictureInPicture",
      disableremoteplayback: "disableRemotePlayback",
      download: "download",
      draggable: "draggable",
      enctype: "encType",
      enterkeyhint: "enterKeyHint",
      for: "htmlFor",
      form: "form",
      formmethod: "formMethod",
      formaction: "formAction",
      formenctype: "formEncType",
      formnovalidate: "formNoValidate",
      formtarget: "formTarget",
      frameborder: "frameBorder",
      headers: "headers",
      height: "height",
      hidden: "hidden",
      high: "high",
      href: "href",
      hreflang: "hrefLang",
      htmlfor: "htmlFor",
      httpequiv: "httpEquiv",
      "http-equiv": "httpEquiv",
      icon: "icon",
      id: "id",
      imagesizes: "imageSizes",
      imagesrcset: "imageSrcSet",
      innerhtml: "innerHTML",
      inputmode: "inputMode",
      integrity: "integrity",
      is: "is",
      itemid: "itemID",
      itemprop: "itemProp",
      itemref: "itemRef",
      itemscope: "itemScope",
      itemtype: "itemType",
      keyparams: "keyParams",
      keytype: "keyType",
      kind: "kind",
      label: "label",
      lang: "lang",
      list: "list",
      loop: "loop",
      low: "low",
      manifest: "manifest",
      marginwidth: "marginWidth",
      marginheight: "marginHeight",
      max: "max",
      maxlength: "maxLength",
      media: "media",
      mediagroup: "mediaGroup",
      method: "method",
      min: "min",
      minlength: "minLength",
      multiple: "multiple",
      muted: "muted",
      name: "name",
      nomodule: "noModule",
      nonce: "nonce",
      novalidate: "noValidate",
      open: "open",
      optimum: "optimum",
      pattern: "pattern",
      placeholder: "placeholder",
      playsinline: "playsInline",
      poster: "poster",
      preload: "preload",
      profile: "profile",
      radiogroup: "radioGroup",
      readonly: "readOnly",
      referrerpolicy: "referrerPolicy",
      rel: "rel",
      required: "required",
      reversed: "reversed",
      role: "role",
      rows: "rows",
      rowspan: "rowSpan",
      sandbox: "sandbox",
      scope: "scope",
      scoped: "scoped",
      scrolling: "scrolling",
      seamless: "seamless",
      selected: "selected",
      shape: "shape",
      size: "size",
      sizes: "sizes",
      span: "span",
      spellcheck: "spellCheck",
      src: "src",
      srcdoc: "srcDoc",
      srclang: "srcLang",
      srcset: "srcSet",
      start: "start",
      step: "step",
      style: "style",
      summary: "summary",
      tabindex: "tabIndex",
      target: "target",
      title: "title",
      type: "type",
      usemap: "useMap",
      value: "value",
      width: "width",
      wmode: "wmode",
      wrap: "wrap",
      // SVG
      about: "about",
      accentheight: "accentHeight",
      "accent-height": "accentHeight",
      accumulate: "accumulate",
      additive: "additive",
      alignmentbaseline: "alignmentBaseline",
      "alignment-baseline": "alignmentBaseline",
      allowreorder: "allowReorder",
      alphabetic: "alphabetic",
      amplitude: "amplitude",
      arabicform: "arabicForm",
      "arabic-form": "arabicForm",
      ascent: "ascent",
      attributename: "attributeName",
      attributetype: "attributeType",
      autoreverse: "autoReverse",
      azimuth: "azimuth",
      basefrequency: "baseFrequency",
      baselineshift: "baselineShift",
      "baseline-shift": "baselineShift",
      baseprofile: "baseProfile",
      bbox: "bbox",
      begin: "begin",
      bias: "bias",
      by: "by",
      calcmode: "calcMode",
      capheight: "capHeight",
      "cap-height": "capHeight",
      clip: "clip",
      clippath: "clipPath",
      "clip-path": "clipPath",
      clippathunits: "clipPathUnits",
      cliprule: "clipRule",
      "clip-rule": "clipRule",
      color: "color",
      colorinterpolation: "colorInterpolation",
      "color-interpolation": "colorInterpolation",
      colorinterpolationfilters: "colorInterpolationFilters",
      "color-interpolation-filters": "colorInterpolationFilters",
      colorprofile: "colorProfile",
      "color-profile": "colorProfile",
      colorrendering: "colorRendering",
      "color-rendering": "colorRendering",
      contentscripttype: "contentScriptType",
      contentstyletype: "contentStyleType",
      cursor: "cursor",
      cx: "cx",
      cy: "cy",
      d: "d",
      datatype: "datatype",
      decelerate: "decelerate",
      descent: "descent",
      diffuseconstant: "diffuseConstant",
      direction: "direction",
      display: "display",
      divisor: "divisor",
      dominantbaseline: "dominantBaseline",
      "dominant-baseline": "dominantBaseline",
      dur: "dur",
      dx: "dx",
      dy: "dy",
      edgemode: "edgeMode",
      elevation: "elevation",
      enablebackground: "enableBackground",
      "enable-background": "enableBackground",
      end: "end",
      exponent: "exponent",
      externalresourcesrequired: "externalResourcesRequired",
      fill: "fill",
      fillopacity: "fillOpacity",
      "fill-opacity": "fillOpacity",
      fillrule: "fillRule",
      "fill-rule": "fillRule",
      filter: "filter",
      filterres: "filterRes",
      filterunits: "filterUnits",
      floodopacity: "floodOpacity",
      "flood-opacity": "floodOpacity",
      floodcolor: "floodColor",
      "flood-color": "floodColor",
      focusable: "focusable",
      fontfamily: "fontFamily",
      "font-family": "fontFamily",
      fontsize: "fontSize",
      "font-size": "fontSize",
      fontsizeadjust: "fontSizeAdjust",
      "font-size-adjust": "fontSizeAdjust",
      fontstretch: "fontStretch",
      "font-stretch": "fontStretch",
      fontstyle: "fontStyle",
      "font-style": "fontStyle",
      fontvariant: "fontVariant",
      "font-variant": "fontVariant",
      fontweight: "fontWeight",
      "font-weight": "fontWeight",
      format: "format",
      from: "from",
      fx: "fx",
      fy: "fy",
      g1: "g1",
      g2: "g2",
      glyphname: "glyphName",
      "glyph-name": "glyphName",
      glyphorientationhorizontal: "glyphOrientationHorizontal",
      "glyph-orientation-horizontal": "glyphOrientationHorizontal",
      glyphorientationvertical: "glyphOrientationVertical",
      "glyph-orientation-vertical": "glyphOrientationVertical",
      glyphref: "glyphRef",
      gradienttransform: "gradientTransform",
      gradientunits: "gradientUnits",
      hanging: "hanging",
      horizadvx: "horizAdvX",
      "horiz-adv-x": "horizAdvX",
      horizoriginx: "horizOriginX",
      "horiz-origin-x": "horizOriginX",
      ideographic: "ideographic",
      imagerendering: "imageRendering",
      "image-rendering": "imageRendering",
      in2: "in2",
      in: "in",
      inlist: "inlist",
      intercept: "intercept",
      k1: "k1",
      k2: "k2",
      k3: "k3",
      k4: "k4",
      k: "k",
      kernelmatrix: "kernelMatrix",
      kernelunitlength: "kernelUnitLength",
      kerning: "kerning",
      keypoints: "keyPoints",
      keysplines: "keySplines",
      keytimes: "keyTimes",
      lengthadjust: "lengthAdjust",
      letterspacing: "letterSpacing",
      "letter-spacing": "letterSpacing",
      lightingcolor: "lightingColor",
      "lighting-color": "lightingColor",
      limitingconeangle: "limitingConeAngle",
      local: "local",
      markerend: "markerEnd",
      "marker-end": "markerEnd",
      markerheight: "markerHeight",
      markermid: "markerMid",
      "marker-mid": "markerMid",
      markerstart: "markerStart",
      "marker-start": "markerStart",
      markerunits: "markerUnits",
      markerwidth: "markerWidth",
      mask: "mask",
      maskcontentunits: "maskContentUnits",
      maskunits: "maskUnits",
      mathematical: "mathematical",
      mode: "mode",
      numoctaves: "numOctaves",
      offset: "offset",
      opacity: "opacity",
      operator: "operator",
      order: "order",
      orient: "orient",
      orientation: "orientation",
      origin: "origin",
      overflow: "overflow",
      overlineposition: "overlinePosition",
      "overline-position": "overlinePosition",
      overlinethickness: "overlineThickness",
      "overline-thickness": "overlineThickness",
      paintorder: "paintOrder",
      "paint-order": "paintOrder",
      panose1: "panose1",
      "panose-1": "panose1",
      pathlength: "pathLength",
      patterncontentunits: "patternContentUnits",
      patterntransform: "patternTransform",
      patternunits: "patternUnits",
      pointerevents: "pointerEvents",
      "pointer-events": "pointerEvents",
      points: "points",
      pointsatx: "pointsAtX",
      pointsaty: "pointsAtY",
      pointsatz: "pointsAtZ",
      prefix: "prefix",
      preservealpha: "preserveAlpha",
      preserveaspectratio: "preserveAspectRatio",
      primitiveunits: "primitiveUnits",
      property: "property",
      r: "r",
      radius: "radius",
      refx: "refX",
      refy: "refY",
      renderingintent: "renderingIntent",
      "rendering-intent": "renderingIntent",
      repeatcount: "repeatCount",
      repeatdur: "repeatDur",
      requiredextensions: "requiredExtensions",
      requiredfeatures: "requiredFeatures",
      resource: "resource",
      restart: "restart",
      result: "result",
      results: "results",
      rotate: "rotate",
      rx: "rx",
      ry: "ry",
      scale: "scale",
      security: "security",
      seed: "seed",
      shaperendering: "shapeRendering",
      "shape-rendering": "shapeRendering",
      slope: "slope",
      spacing: "spacing",
      specularconstant: "specularConstant",
      specularexponent: "specularExponent",
      speed: "speed",
      spreadmethod: "spreadMethod",
      startoffset: "startOffset",
      stddeviation: "stdDeviation",
      stemh: "stemh",
      stemv: "stemv",
      stitchtiles: "stitchTiles",
      stopcolor: "stopColor",
      "stop-color": "stopColor",
      stopopacity: "stopOpacity",
      "stop-opacity": "stopOpacity",
      strikethroughposition: "strikethroughPosition",
      "strikethrough-position": "strikethroughPosition",
      strikethroughthickness: "strikethroughThickness",
      "strikethrough-thickness": "strikethroughThickness",
      string: "string",
      stroke: "stroke",
      strokedasharray: "strokeDasharray",
      "stroke-dasharray": "strokeDasharray",
      strokedashoffset: "strokeDashoffset",
      "stroke-dashoffset": "strokeDashoffset",
      strokelinecap: "strokeLinecap",
      "stroke-linecap": "strokeLinecap",
      strokelinejoin: "strokeLinejoin",
      "stroke-linejoin": "strokeLinejoin",
      strokemiterlimit: "strokeMiterlimit",
      "stroke-miterlimit": "strokeMiterlimit",
      strokewidth: "strokeWidth",
      "stroke-width": "strokeWidth",
      strokeopacity: "strokeOpacity",
      "stroke-opacity": "strokeOpacity",
      suppresscontenteditablewarning: "suppressContentEditableWarning",
      suppresshydrationwarning: "suppressHydrationWarning",
      surfacescale: "surfaceScale",
      systemlanguage: "systemLanguage",
      tablevalues: "tableValues",
      targetx: "targetX",
      targety: "targetY",
      textanchor: "textAnchor",
      "text-anchor": "textAnchor",
      textdecoration: "textDecoration",
      "text-decoration": "textDecoration",
      textlength: "textLength",
      textrendering: "textRendering",
      "text-rendering": "textRendering",
      to: "to",
      transform: "transform",
      typeof: "typeof",
      u1: "u1",
      u2: "u2",
      underlineposition: "underlinePosition",
      "underline-position": "underlinePosition",
      underlinethickness: "underlineThickness",
      "underline-thickness": "underlineThickness",
      unicode: "unicode",
      unicodebidi: "unicodeBidi",
      "unicode-bidi": "unicodeBidi",
      unicoderange: "unicodeRange",
      "unicode-range": "unicodeRange",
      unitsperem: "unitsPerEm",
      "units-per-em": "unitsPerEm",
      unselectable: "unselectable",
      valphabetic: "vAlphabetic",
      "v-alphabetic": "vAlphabetic",
      values: "values",
      vectoreffect: "vectorEffect",
      "vector-effect": "vectorEffect",
      version: "version",
      vertadvy: "vertAdvY",
      "vert-adv-y": "vertAdvY",
      vertoriginx: "vertOriginX",
      "vert-origin-x": "vertOriginX",
      vertoriginy: "vertOriginY",
      "vert-origin-y": "vertOriginY",
      vhanging: "vHanging",
      "v-hanging": "vHanging",
      videographic: "vIdeographic",
      "v-ideographic": "vIdeographic",
      viewbox: "viewBox",
      viewtarget: "viewTarget",
      visibility: "visibility",
      vmathematical: "vMathematical",
      "v-mathematical": "vMathematical",
      vocab: "vocab",
      widths: "widths",
      wordspacing: "wordSpacing",
      "word-spacing": "wordSpacing",
      writingmode: "writingMode",
      "writing-mode": "writingMode",
      x1: "x1",
      x2: "x2",
      x: "x",
      xchannelselector: "xChannelSelector",
      xheight: "xHeight",
      "x-height": "xHeight",
      xlinkactuate: "xlinkActuate",
      "xlink:actuate": "xlinkActuate",
      xlinkarcrole: "xlinkArcrole",
      "xlink:arcrole": "xlinkArcrole",
      xlinkhref: "xlinkHref",
      "xlink:href": "xlinkHref",
      xlinkrole: "xlinkRole",
      "xlink:role": "xlinkRole",
      xlinkshow: "xlinkShow",
      "xlink:show": "xlinkShow",
      xlinktitle: "xlinkTitle",
      "xlink:title": "xlinkTitle",
      xlinktype: "xlinkType",
      "xlink:type": "xlinkType",
      xmlbase: "xmlBase",
      "xml:base": "xmlBase",
      xmllang: "xmlLang",
      "xml:lang": "xmlLang",
      xmlns: "xmlns",
      "xml:space": "xmlSpace",
      xmlnsxlink: "xmlnsXlink",
      "xmlns:xlink": "xmlnsXlink",
      xmlspace: "xmlSpace",
      y1: "y1",
      y2: "y2",
      y: "y",
      ychannelselector: "yChannelSelector",
      z: "z",
      zoomandpan: "zoomAndPan"
    }, au = {
      "aria-current": 0,
      // state
      "aria-description": 0,
      "aria-details": 0,
      "aria-disabled": 0,
      // state
      "aria-hidden": 0,
      // state
      "aria-invalid": 0,
      // state
      "aria-keyshortcuts": 0,
      "aria-label": 0,
      "aria-roledescription": 0,
      // Widget Attributes
      "aria-autocomplete": 0,
      "aria-checked": 0,
      "aria-expanded": 0,
      "aria-haspopup": 0,
      "aria-level": 0,
      "aria-modal": 0,
      "aria-multiline": 0,
      "aria-multiselectable": 0,
      "aria-orientation": 0,
      "aria-placeholder": 0,
      "aria-pressed": 0,
      "aria-readonly": 0,
      "aria-required": 0,
      "aria-selected": 0,
      "aria-sort": 0,
      "aria-valuemax": 0,
      "aria-valuemin": 0,
      "aria-valuenow": 0,
      "aria-valuetext": 0,
      // Live Region Attributes
      "aria-atomic": 0,
      "aria-busy": 0,
      "aria-live": 0,
      "aria-relevant": 0,
      // Drag-and-Drop Attributes
      "aria-dropeffect": 0,
      "aria-grabbed": 0,
      // Relationship Attributes
      "aria-activedescendant": 0,
      "aria-colcount": 0,
      "aria-colindex": 0,
      "aria-colspan": 0,
      "aria-controls": 0,
      "aria-describedby": 0,
      "aria-errormessage": 0,
      "aria-flowto": 0,
      "aria-labelledby": 0,
      "aria-owns": 0,
      "aria-posinset": 0,
      "aria-rowcount": 0,
      "aria-rowindex": 0,
      "aria-rowspan": 0,
      "aria-setsize": 0
    }, El = {}, ss = new RegExp("^(aria)-[" + be + "]*$"), Jf = new RegExp("^(aria)[A-Z][" + be + "]*$");
    function sv(e, t) {
      {
        if (er.call(El, t) && El[t])
          return !0;
        if (Jf.test(t)) {
          var a = "aria-" + t.slice(4).toLowerCase(), i = au.hasOwnProperty(a) ? a : null;
          if (i == null)
            return S("Invalid ARIA attribute `%s`. ARIA attributes follow the pattern aria-* and must be lowercase.", t), El[t] = !0, !0;
          if (t !== i)
            return S("Invalid ARIA attribute `%s`. Did you mean `%s`?", t, i), El[t] = !0, !0;
        }
        if (ss.test(t)) {
          var u = t.toLowerCase(), s = au.hasOwnProperty(u) ? u : null;
          if (s == null)
            return El[t] = !0, !1;
          if (t !== s)
            return S("Unknown ARIA attribute `%s`. Did you mean `%s`?", t, s), El[t] = !0, !0;
        }
      }
      return !0;
    }
    function vc(e, t) {
      {
        var a = [];
        for (var i in t) {
          var u = sv(e, i);
          u || a.push(i);
        }
        var s = a.map(function(f) {
          return "`" + f + "`";
        }).join(", ");
        a.length === 1 ? S("Invalid aria prop %s on <%s> tag. For details, see https://reactjs.org/link/invalid-aria-props", s, e) : a.length > 1 && S("Invalid aria props %s on <%s> tag. For details, see https://reactjs.org/link/invalid-aria-props", s, e);
      }
    }
    function qu(e, t) {
      ru(e, t) || vc(e, t);
    }
    var hc = !1;
    function cv(e, t) {
      {
        if (e !== "input" && e !== "textarea" && e !== "select")
          return;
        t != null && t.value === null && !hc && (hc = !0, e === "select" && t.multiple ? S("`value` prop on `%s` should not be null. Consider using an empty array when `multiple` is set to `true` to clear the component or `undefined` for uncontrolled components.", e) : S("`value` prop on `%s` should not be null. Consider using an empty string to clear the component or `undefined` for uncontrolled components.", e));
      }
    }
    var cs = function() {
    };
    {
      var Sr = {}, ed = /^on./, fv = /^on[^A-Z]/, dv = new RegExp("^(aria)-[" + be + "]*$"), pv = new RegExp("^(aria)[A-Z][" + be + "]*$");
      cs = function(e, t, a, i) {
        if (er.call(Sr, t) && Sr[t])
          return !0;
        var u = t.toLowerCase();
        if (u === "onfocusin" || u === "onfocusout")
          return S("React uses onFocus and onBlur instead of onFocusIn and onFocusOut. All React events are normalized to bubble, so onFocusIn and onFocusOut are not needed/supported by React."), Sr[t] = !0, !0;
        if (i != null) {
          var s = i.registrationNameDependencies, f = i.possibleRegistrationNames;
          if (s.hasOwnProperty(t))
            return !0;
          var p = f.hasOwnProperty(u) ? f[u] : null;
          if (p != null)
            return S("Invalid event handler property `%s`. Did you mean `%s`?", t, p), Sr[t] = !0, !0;
          if (ed.test(t))
            return S("Unknown event handler property `%s`. It will be ignored.", t), Sr[t] = !0, !0;
        } else if (ed.test(t))
          return fv.test(t) && S("Invalid event handler property `%s`. React events use the camelCase naming convention, for example `onClick`.", t), Sr[t] = !0, !0;
        if (dv.test(t) || pv.test(t))
          return !0;
        if (u === "innerhtml")
          return S("Directly setting property `innerHTML` is not permitted. For more information, lookup documentation on `dangerouslySetInnerHTML`."), Sr[t] = !0, !0;
        if (u === "aria")
          return S("The `aria` attribute is reserved for future use in React. Pass individual `aria-` attributes instead."), Sr[t] = !0, !0;
        if (u === "is" && a !== null && a !== void 0 && typeof a != "string")
          return S("Received a `%s` for a string attribute `is`. If this is expected, cast the value to a string.", typeof a), Sr[t] = !0, !0;
        if (typeof a == "number" && isNaN(a))
          return S("Received NaN for the `%s` attribute. If this is expected, cast the value to a string.", t), Sr[t] = !0, !0;
        var v = Qn(t), y = v !== null && v.type === oa;
        if (pc.hasOwnProperty(u)) {
          var g = pc[u];
          if (g !== t)
            return S("Invalid DOM property `%s`. Did you mean `%s`?", t, g), Sr[t] = !0, !0;
        } else if (!y && t !== u)
          return S("React does not recognize the `%s` prop on a DOM element. If you intentionally want it to appear in the DOM as a custom attribute, spell it as lowercase `%s` instead. If you accidentally passed it from a parent component, remove it from the DOM element.", t, u), Sr[t] = !0, !0;
        return typeof a == "boolean" && yr(t, a, v, !1) ? (a ? S('Received `%s` for a non-boolean attribute `%s`.\n\nIf you want to write it to the DOM, pass a string instead: %s="%s" or %s={value.toString()}.', a, t, t, a, t) : S('Received `%s` for a non-boolean attribute `%s`.\n\nIf you want to write it to the DOM, pass a string instead: %s="%s" or %s={value.toString()}.\n\nIf you used to conditionally omit it with %s={condition && value}, pass %s={condition ? value : undefined} instead.', a, t, t, a, t, t, t), Sr[t] = !0, !0) : y ? !0 : yr(t, a, v, !1) ? (Sr[t] = !0, !1) : ((a === "false" || a === "true") && v !== null && v.type === ln && (S("Received the string `%s` for the boolean attribute `%s`. %s Did you mean %s={%s}?", a, t, a === "false" ? "The browser will interpret it as a truthy value." : 'Although this works, it will not work as expected if you pass the string "false".', t, a), Sr[t] = !0), !0);
      };
    }
    var vv = function(e, t, a) {
      {
        var i = [];
        for (var u in t) {
          var s = cs(e, u, t[u], a);
          s || i.push(u);
        }
        var f = i.map(function(p) {
          return "`" + p + "`";
        }).join(", ");
        i.length === 1 ? S("Invalid value for prop %s on <%s> tag. Either remove it from the element, or pass a string or number value to keep it in the DOM. For details, see https://reactjs.org/link/attribute-behavior ", f, e) : i.length > 1 && S("Invalid values for props %s on <%s> tag. Either remove them from the element, or pass a string or number value to keep them in the DOM. For details, see https://reactjs.org/link/attribute-behavior ", f, e);
      }
    };
    function Cl(e, t, a) {
      ru(e, t) || vv(e, t, a);
    }
    var mc = 1, fs = 2, ds = 4, Wm = mc | fs | ds, Bi = null;
    function Gm(e) {
      Bi !== null && S("Expected currently replaying event to be null. This error is likely caused by a bug in React. Please file an issue."), Bi = e;
    }
    function hv() {
      Bi === null && S("Expected currently replaying event to not be null. This error is likely caused by a bug in React. Please file an issue."), Bi = null;
    }
    function mv(e) {
      return e === Bi;
    }
    function Bt(e) {
      var t = e.target || e.srcElement || window;
      return t.correspondingUseElement && (t = t.correspondingUseElement), t.nodeType === Vi ? t.parentNode : t;
    }
    var ps = null, $i = null, pi = null;
    function td(e) {
      var t = Do(e);
      if (t) {
        if (typeof ps != "function")
          throw new Error("setRestoreImplementation() needs to be called to handle a target for controlled events. This error is likely caused by a bug in React. Please file an issue.");
        var a = t.stateNode;
        if (a) {
          var i = Eh(a);
          ps(t.stateNode, t.type, i);
        }
      }
    }
    function nd(e) {
      ps = e;
    }
    function Xu(e) {
      $i ? pi ? pi.push(e) : pi = [e] : $i = e;
    }
    function yc() {
      return $i !== null || pi !== null;
    }
    function iu() {
      if ($i) {
        var e = $i, t = pi;
        if ($i = null, pi = null, td(e), t)
          for (var a = 0; a < t.length; a++)
            td(t[a]);
      }
    }
    var rd = function(e, t) {
      return e(t);
    }, yv = function() {
    }, ad = !1;
    function gv() {
      var e = yc();
      e && (yv(), iu());
    }
    function vs(e, t, a) {
      if (ad)
        return e(t, a);
      ad = !0;
      try {
        return rd(e, t, a);
      } finally {
        ad = !1, gv();
      }
    }
    function gc(e, t, a) {
      rd = e, yv = a;
    }
    function id(e) {
      return e === "button" || e === "input" || e === "select" || e === "textarea";
    }
    function ld(e, t, a) {
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
          return !!(a.disabled && id(t));
        default:
          return !1;
      }
    }
    function lu(e, t) {
      var a = e.stateNode;
      if (a === null)
        return null;
      var i = Eh(a);
      if (i === null)
        return null;
      var u = i[t];
      if (ld(t, e.type, i))
        return null;
      if (u && typeof u != "function")
        throw new Error("Expected `" + t + "` listener to be a function, instead got a value of `" + typeof u + "` type.");
      return u;
    }
    var hs = !1;
    if (mn)
      try {
        var ms = {};
        Object.defineProperty(ms, "passive", {
          get: function() {
            hs = !0;
          }
        }), window.addEventListener("test", ms, ms), window.removeEventListener("test", ms, ms);
      } catch {
        hs = !1;
      }
    function ud(e, t, a, i, u, s, f, p, v) {
      var y = Array.prototype.slice.call(arguments, 3);
      try {
        t.apply(a, y);
      } catch (g) {
        this.onError(g);
      }
    }
    var Sv = ud;
    if (typeof window < "u" && typeof window.dispatchEvent == "function" && typeof document < "u" && typeof document.createEvent == "function") {
      var od = document.createElement("react");
      Sv = function(t, a, i, u, s, f, p, v, y) {
        if (typeof document > "u" || document === null)
          throw new Error("The `document` global was defined when React was initialized, but is not defined anymore. This can happen in a test environment if a component schedules an update from an asynchronous callback, but the test has already finished running. To solve this, you can either unmount the component at the end of your test (and ensure that any asynchronous operations get canceled in `componentWillUnmount`), or you can change the test itself to be asynchronous.");
        var g = document.createEvent("Event"), b = !1, _ = !0, N = window.event, z = Object.getOwnPropertyDescriptor(window, "event");
        function j() {
          od.removeEventListener(H, Le, !1), typeof window.event < "u" && window.hasOwnProperty("event") && (window.event = N);
        }
        var se = Array.prototype.slice.call(arguments, 3);
        function Le() {
          b = !0, j(), a.apply(i, se), _ = !1;
        }
        var xe, gt = !1, pt = !1;
        function k(O) {
          if (xe = O.error, gt = !0, xe === null && O.colno === 0 && O.lineno === 0 && (pt = !0), O.defaultPrevented && xe != null && typeof xe == "object")
            try {
              xe._suppressLogging = !0;
            } catch {
            }
        }
        var H = "react-" + (t || "invokeguardedcallback");
        if (window.addEventListener("error", k), od.addEventListener(H, Le, !1), g.initEvent(H, !1, !1), od.dispatchEvent(g), z && Object.defineProperty(window, "event", z), b && _ && (gt ? pt && (xe = new Error("A cross-origin error was thrown. React doesn't have access to the actual error object in development. See https://reactjs.org/link/crossorigin-error for more information.")) : xe = new Error(`An error was thrown inside one of your components, but React doesn't know what it was. This is likely due to browser flakiness. React does its best to preserve the "Pause on exceptions" behavior of the DevTools, which requires some DEV-mode only tricks. It's possible that these don't work in your browser. Try triggering the error in production mode, or switching to a modern browser. If you suspect that this is actually an issue with React, please file an issue.`), this.onError(xe)), window.removeEventListener("error", k), !b)
          return j(), ud.apply(this, arguments);
      };
    }
    var sd = Sv, va = !1, ys = null, Yi = !1, Oa = null, gs = {
      onError: function(e) {
        va = !0, ys = e;
      }
    };
    function ni(e, t, a, i, u, s, f, p, v) {
      va = !1, ys = null, sd.apply(gs, arguments);
    }
    function cd(e, t, a, i, u, s, f, p, v) {
      if (ni.apply(this, arguments), va) {
        var y = Ii();
        Yi || (Yi = !0, Oa = y);
      }
    }
    function qm() {
      if (Yi) {
        var e = Oa;
        throw Yi = !1, Oa = null, e;
      }
    }
    function Xm() {
      return va;
    }
    function Ii() {
      if (va) {
        var e = ys;
        return va = !1, ys = null, e;
      } else
        throw new Error("clearCaughtError was called but no error was captured. This error is likely caused by a bug in React. Please file an issue.");
    }
    function vi(e) {
      return e._reactInternals;
    }
    function Ku(e) {
      return e._reactInternals !== void 0;
    }
    function Sc(e, t) {
      e._reactInternals = t;
    }
    var ke = (
      /*                      */
      0
    ), ri = (
      /*                */
      1
    ), $t = (
      /*                    */
      2
    ), Te = (
      /*                       */
      4
    ), bt = (
      /*                */
      16
    ), La = (
      /*                 */
      32
    ), Wn = (
      /*                     */
      64
    ), Qe = (
      /*                   */
      128
    ), xr = (
      /*            */
      256
    ), ha = (
      /*                          */
      512
    ), Un = (
      /*                     */
      1024
    ), Ir = (
      /*                      */
      2048
    ), hi = (
      /*                    */
      4096
    ), Rl = (
      /*                   */
      8192
    ), uu = (
      /*             */
      16384
    ), Ev = Ir | Te | Wn | ha | Un | uu, Qi = (
      /*               */
      32767
    ), Tl = (
      /*                   */
      32768
    ), rr = (
      /*                */
      65536
    ), Ec = (
      /* */
      131072
    ), Cv = (
      /*                       */
      1048576
    ), mi = (
      /*                    */
      2097152
    ), Ma = (
      /*                 */
      4194304
    ), wl = (
      /*                */
      8388608
    ), Na = (
      /*               */
      16777216
    ), ou = (
      /*              */
      33554432
    ), Qr = (
      // TODO: Remove Update flag from before mutation phase by re-landing Visibility
      // flag logic (see #20043)
      Te | Un | 0
    ), Wr = $t | Te | bt | La | ha | hi | Rl, ai = Te | Wn | ha | Rl, Gr = Ir | bt, ar = Ma | wl | mi, su = Tt.ReactCurrentOwner;
    function _l(e) {
      var t = e, a = e;
      if (e.alternate)
        for (; t.return; )
          t = t.return;
      else {
        var i = t;
        do
          t = i, (t.flags & ($t | hi)) !== ke && (a = t.return), i = t.return;
        while (i);
      }
      return t.tag === te ? a : null;
    }
    function Cc(e) {
      if (e.tag === Re) {
        var t = e.memoizedState;
        if (t === null) {
          var a = e.alternate;
          a !== null && (t = a.memoizedState);
        }
        if (t !== null)
          return t.dehydrated;
      }
      return null;
    }
    function Rc(e) {
      return e.tag === te ? e.stateNode.containerInfo : null;
    }
    function ma(e) {
      return _l(e) === e;
    }
    function ya(e) {
      {
        var t = su.current;
        if (t !== null && t.tag === fe) {
          var a = t, i = a.stateNode;
          i._warnedAboutRefsInRender || S("%s is accessing isMounted inside its render() function. render() should be a pure function of props and state. It should never access something that requires stale data from the previous render, such as refs. Move this logic to componentDidMount and componentDidUpdate instead.", Ye(a) || "A component"), i._warnedAboutRefsInRender = !0;
        }
      }
      var u = vi(e);
      return u ? _l(u) === u : !1;
    }
    function tn(e) {
      if (_l(e) !== e)
        throw new Error("Unable to find node on an unmounted component.");
    }
    function za(e) {
      var t = e.alternate;
      if (!t) {
        var a = _l(e);
        if (a === null)
          throw new Error("Unable to find node on an unmounted component.");
        return a !== e ? null : e;
      }
      for (var i = e, u = t; ; ) {
        var s = i.return;
        if (s === null)
          break;
        var f = s.alternate;
        if (f === null) {
          var p = s.return;
          if (p !== null) {
            i = u = p;
            continue;
          }
          break;
        }
        if (s.child === f.child) {
          for (var v = s.child; v; ) {
            if (v === i)
              return tn(s), e;
            if (v === u)
              return tn(s), t;
            v = v.sibling;
          }
          throw new Error("Unable to find node on an unmounted component.");
        }
        if (i.return !== u.return)
          i = s, u = f;
        else {
          for (var y = !1, g = s.child; g; ) {
            if (g === i) {
              y = !0, i = s, u = f;
              break;
            }
            if (g === u) {
              y = !0, u = s, i = f;
              break;
            }
            g = g.sibling;
          }
          if (!y) {
            for (g = f.child; g; ) {
              if (g === i) {
                y = !0, i = f, u = s;
                break;
              }
              if (g === u) {
                y = !0, u = f, i = s;
                break;
              }
              g = g.sibling;
            }
            if (!y)
              throw new Error("Child was not found in either parent set. This indicates a bug in React related to the return pointer. Please file an issue.");
          }
        }
        if (i.alternate !== u)
          throw new Error("Return fibers should always be each others' alternates. This error is likely caused by a bug in React. Please file an issue.");
      }
      if (i.tag !== te)
        throw new Error("Unable to find node on an unmounted component.");
      return i.stateNode.current === i ? e : t;
    }
    function fd(e) {
      var t = za(e);
      return t !== null ? dd(t) : null;
    }
    function dd(e) {
      if (e.tag === ae || e.tag === Ce)
        return e;
      for (var t = e.child; t !== null; ) {
        var a = dd(t);
        if (a !== null)
          return a;
        t = t.sibling;
      }
      return null;
    }
    function pd(e) {
      var t = za(e);
      return t !== null ? Tc(t) : null;
    }
    function Tc(e) {
      if (e.tag === ae || e.tag === Ce)
        return e;
      for (var t = e.child; t !== null; ) {
        if (t.tag !== Ne) {
          var a = Tc(t);
          if (a !== null)
            return a;
        }
        t = t.sibling;
      }
      return null;
    }
    var vd = F.unstable_scheduleCallback, wc = F.unstable_cancelCallback, Rv = F.unstable_shouldYield, Zu = F.unstable_requestPaint, An = F.unstable_now, Km = F.unstable_getCurrentPriorityLevel, qr = F.unstable_ImmediatePriority, Ju = F.unstable_UserBlockingPriority, yi = F.unstable_NormalPriority, eo = F.unstable_LowPriority, Ss = F.unstable_IdlePriority, hd = F.unstable_yieldValue, md = F.unstable_setDisableYieldValue, xl = null, _n = null, K = null, Er = !1, ga = typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u";
    function Tv(e) {
      if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u")
        return !1;
      var t = __REACT_DEVTOOLS_GLOBAL_HOOK__;
      if (t.isDisabled)
        return !0;
      if (!t.supportsFiber)
        return S("The installed version of React DevTools is too old and will not work with the current version of React. Please update React DevTools. https://reactjs.org/link/react-devtools"), !0;
      try {
        at && (e = et({}, e, {
          getLaneLabelMap: _c,
          injectProfilingHooks: Dl
        })), xl = t.inject(e), _n = t;
      } catch (a) {
        S("React instrumentation encountered an error: %s.", a);
      }
      return !!t.checkDCE;
    }
    function Wi(e, t) {
      if (_n && typeof _n.onScheduleFiberRoot == "function")
        try {
          _n.onScheduleFiberRoot(xl, e, t);
        } catch (a) {
          Er || (Er = !0, S("React instrumentation encountered an error: %s", a));
        }
    }
    function bl(e, t) {
      if (_n && typeof _n.onCommitFiberRoot == "function")
        try {
          var a = (e.current.flags & Qe) === Qe;
          if (ft) {
            var i;
            switch (t) {
              case kn:
                i = qr;
                break;
              case qi:
                i = Ju;
                break;
              case Ei:
                i = yi;
                break;
              case co:
                i = Ss;
                break;
              default:
                i = yi;
                break;
            }
            _n.onCommitFiberRoot(xl, e, i, a);
          }
        } catch (u) {
          Er || (Er = !0, S("React instrumentation encountered an error: %s", u));
        }
    }
    function yd(e) {
      if (_n && typeof _n.onPostCommitFiberRoot == "function")
        try {
          _n.onPostCommitFiberRoot(xl, e);
        } catch (t) {
          Er || (Er = !0, S("React instrumentation encountered an error: %s", t));
        }
    }
    function wv(e) {
      if (_n && typeof _n.onCommitFiberUnmount == "function")
        try {
          _n.onCommitFiberUnmount(xl, e);
        } catch (t) {
          Er || (Er = !0, S("React instrumentation encountered an error: %s", t));
        }
    }
    function qt(e) {
      if (typeof hd == "function" && (md(e), on(e)), _n && typeof _n.setStrictMode == "function")
        try {
          _n.setStrictMode(xl, e);
        } catch (t) {
          Er || (Er = !0, S("React instrumentation encountered an error: %s", t));
        }
    }
    function Dl(e) {
      K = e;
    }
    function _c() {
      {
        for (var e = /* @__PURE__ */ new Map(), t = 1, a = 0; a < xn; a++) {
          var i = Mv(t);
          e.set(t, i), t *= 2;
        }
        return e;
      }
    }
    function _v(e) {
      K !== null && typeof K.markCommitStarted == "function" && K.markCommitStarted(e);
    }
    function Es() {
      K !== null && typeof K.markCommitStopped == "function" && K.markCommitStopped();
    }
    function to(e) {
      K !== null && typeof K.markComponentRenderStarted == "function" && K.markComponentRenderStarted(e);
    }
    function cu() {
      K !== null && typeof K.markComponentRenderStopped == "function" && K.markComponentRenderStopped();
    }
    function gd(e) {
      K !== null && typeof K.markComponentPassiveEffectMountStarted == "function" && K.markComponentPassiveEffectMountStarted(e);
    }
    function xc() {
      K !== null && typeof K.markComponentPassiveEffectMountStopped == "function" && K.markComponentPassiveEffectMountStopped();
    }
    function xv(e) {
      K !== null && typeof K.markComponentPassiveEffectUnmountStarted == "function" && K.markComponentPassiveEffectUnmountStarted(e);
    }
    function bv() {
      K !== null && typeof K.markComponentPassiveEffectUnmountStopped == "function" && K.markComponentPassiveEffectUnmountStopped();
    }
    function Dv(e) {
      K !== null && typeof K.markComponentLayoutEffectMountStarted == "function" && K.markComponentLayoutEffectMountStarted(e);
    }
    function Sd() {
      K !== null && typeof K.markComponentLayoutEffectMountStopped == "function" && K.markComponentLayoutEffectMountStopped();
    }
    function no(e) {
      K !== null && typeof K.markComponentLayoutEffectUnmountStarted == "function" && K.markComponentLayoutEffectUnmountStarted(e);
    }
    function Cs() {
      K !== null && typeof K.markComponentLayoutEffectUnmountStopped == "function" && K.markComponentLayoutEffectUnmountStopped();
    }
    function kv(e, t, a) {
      K !== null && typeof K.markComponentErrored == "function" && K.markComponentErrored(e, t, a);
    }
    function Ov(e, t, a) {
      K !== null && typeof K.markComponentSuspended == "function" && K.markComponentSuspended(e, t, a);
    }
    function ro(e) {
      K !== null && typeof K.markLayoutEffectsStarted == "function" && K.markLayoutEffectsStarted(e);
    }
    function Lv() {
      K !== null && typeof K.markLayoutEffectsStopped == "function" && K.markLayoutEffectsStopped();
    }
    function Rs(e) {
      K !== null && typeof K.markPassiveEffectsStarted == "function" && K.markPassiveEffectsStarted(e);
    }
    function gi() {
      K !== null && typeof K.markPassiveEffectsStopped == "function" && K.markPassiveEffectsStopped();
    }
    function ao(e) {
      K !== null && typeof K.markRenderStarted == "function" && K.markRenderStarted(e);
    }
    function Ts() {
      K !== null && typeof K.markRenderYielded == "function" && K.markRenderYielded();
    }
    function kl() {
      K !== null && typeof K.markRenderStopped == "function" && K.markRenderStopped();
    }
    function Ed(e) {
      K !== null && typeof K.markRenderScheduled == "function" && K.markRenderScheduled(e);
    }
    function io(e, t) {
      K !== null && typeof K.markForceUpdateScheduled == "function" && K.markForceUpdateScheduled(e, t);
    }
    function bc(e, t) {
      K !== null && typeof K.markStateUpdateScheduled == "function" && K.markStateUpdateScheduled(e, t);
    }
    var Oe = (
      /*                         */
      0
    ), _e = (
      /*                 */
      1
    ), wt = (
      /*                    */
      2
    ), gn = (
      /*               */
      8
    ), Ua = (
      /*              */
      16
    ), ws = Math.clz32 ? Math.clz32 : dn, Cd = Math.log, fu = Math.LN2;
    function dn(e) {
      var t = e >>> 0;
      return t === 0 ? 32 : 31 - (Cd(t) / fu | 0) | 0;
    }
    var xn = 31, V = (
      /*                        */
      0
    ), bn = (
      /*                          */
      0
    ), ze = (
      /*                        */
      1
    ), Si = (
      /*    */
      2
    ), Gi = (
      /*             */
      4
    ), Sn = (
      /*            */
      8
    ), Aa = (
      /*                     */
      16
    ), du = (
      /*                */
      32
    ), Ol = (
      /*                       */
      4194240
    ), Xr = (
      /*                        */
      64
    ), Kr = (
      /*                        */
      128
    ), pu = (
      /*                        */
      256
    ), _s = (
      /*                        */
      512
    ), xs = (
      /*                        */
      1024
    ), Dc = (
      /*                        */
      2048
    ), kc = (
      /*                        */
      4096
    ), Oc = (
      /*                        */
      8192
    ), Lc = (
      /*                        */
      16384
    ), Mc = (
      /*                       */
      32768
    ), Nc = (
      /*                       */
      65536
    ), zc = (
      /*                       */
      131072
    ), Uc = (
      /*                       */
      262144
    ), vu = (
      /*                       */
      524288
    ), Ac = (
      /*                       */
      1048576
    ), lo = (
      /*                       */
      2097152
    ), hu = (
      /*                            */
      130023424
    ), mu = (
      /*                             */
      4194304
    ), bs = (
      /*                             */
      8388608
    ), Fc = (
      /*                             */
      16777216
    ), jc = (
      /*                             */
      33554432
    ), Hc = (
      /*                             */
      67108864
    ), Rd = mu, yu = (
      /*          */
      134217728
    ), Td = (
      /*                          */
      268435455
    ), uo = (
      /*               */
      268435456
    ), Ll = (
      /*                        */
      536870912
    ), Sa = (
      /*                   */
      1073741824
    );
    function Mv(e) {
      {
        if (e & ze)
          return "Sync";
        if (e & Si)
          return "InputContinuousHydration";
        if (e & Gi)
          return "InputContinuous";
        if (e & Sn)
          return "DefaultHydration";
        if (e & Aa)
          return "Default";
        if (e & du)
          return "TransitionHydration";
        if (e & Ol)
          return "Transition";
        if (e & hu)
          return "Retry";
        if (e & yu)
          return "SelectiveHydration";
        if (e & uo)
          return "IdleHydration";
        if (e & Ll)
          return "Idle";
        if (e & Sa)
          return "Offscreen";
      }
    }
    var Xt = -1, Vc = Xr, Ds = mu;
    function oo(e) {
      switch (Dn(e)) {
        case ze:
          return ze;
        case Si:
          return Si;
        case Gi:
          return Gi;
        case Sn:
          return Sn;
        case Aa:
          return Aa;
        case du:
          return du;
        case Xr:
        case Kr:
        case pu:
        case _s:
        case xs:
        case Dc:
        case kc:
        case Oc:
        case Lc:
        case Mc:
        case Nc:
        case zc:
        case Uc:
        case vu:
        case Ac:
        case lo:
          return e & Ol;
        case mu:
        case bs:
        case Fc:
        case jc:
        case Hc:
          return e & hu;
        case yu:
          return yu;
        case uo:
          return uo;
        case Ll:
          return Ll;
        case Sa:
          return Sa;
        default:
          return S("Should have found matching lanes. This is a bug in React."), e;
      }
    }
    function ks(e, t) {
      var a = e.pendingLanes;
      if (a === V)
        return V;
      var i = V, u = e.suspendedLanes, s = e.pingedLanes, f = a & Td;
      if (f !== V) {
        var p = f & ~u;
        if (p !== V)
          i = oo(p);
        else {
          var v = f & s;
          v !== V && (i = oo(v));
        }
      } else {
        var y = a & ~u;
        y !== V ? i = oo(y) : s !== V && (i = oo(s));
      }
      if (i === V)
        return V;
      if (t !== V && t !== i && // If we already suspended with a delay, then interrupting is fine. Don't
      // bother waiting until the root is complete.
      (t & u) === V) {
        var g = Dn(i), b = Dn(t);
        if (
          // Tests whether the next lane is equal or lower priority than the wip
          // one. This works because the bits decrease in priority as you go left.
          g >= b || // Default priority updates should not interrupt transition updates. The
          // only difference between default updates and transition updates is that
          // default updates do not support refresh transitions.
          g === Aa && (b & Ol) !== V
        )
          return t;
      }
      (i & Gi) !== V && (i |= a & Aa);
      var _ = e.entangledLanes;
      if (_ !== V)
        for (var N = e.entanglements, z = i & _; z > 0; ) {
          var j = Nl(z), se = 1 << j;
          i |= N[j], z &= ~se;
        }
      return i;
    }
    function Pc(e, t) {
      for (var a = e.eventTimes, i = Xt; t > 0; ) {
        var u = Nl(t), s = 1 << u, f = a[u];
        f > i && (i = f), t &= ~s;
      }
      return i;
    }
    function Zm(e, t) {
      switch (e) {
        case ze:
        case Si:
        case Gi:
          return t + 250;
        case Sn:
        case Aa:
        case du:
        case Xr:
        case Kr:
        case pu:
        case _s:
        case xs:
        case Dc:
        case kc:
        case Oc:
        case Lc:
        case Mc:
        case Nc:
        case zc:
        case Uc:
        case vu:
        case Ac:
        case lo:
          return t + 5e3;
        case mu:
        case bs:
        case Fc:
        case jc:
        case Hc:
          return Xt;
        case yu:
        case uo:
        case Ll:
        case Sa:
          return Xt;
        default:
          return S("Should have found matching lanes. This is a bug in React."), Xt;
      }
    }
    function Jm(e, t) {
      for (var a = e.pendingLanes, i = e.suspendedLanes, u = e.pingedLanes, s = e.expirationTimes, f = a; f > 0; ) {
        var p = Nl(f), v = 1 << p, y = s[p];
        y === Xt ? ((v & i) === V || (v & u) !== V) && (s[p] = Zm(v, t)) : y <= t && (e.expiredLanes |= v), f &= ~v;
      }
    }
    function ey(e) {
      return oo(e.pendingLanes);
    }
    function Ml(e) {
      var t = e.pendingLanes & ~Sa;
      return t !== V ? t : t & Sa ? Sa : V;
    }
    function wd(e) {
      return (e & ze) !== V;
    }
    function Os(e) {
      return (e & Td) !== V;
    }
    function Nv(e) {
      return (e & hu) === e;
    }
    function zv(e) {
      var t = ze | Gi | Aa;
      return (e & t) === V;
    }
    function Uv(e) {
      return (e & Ol) === e;
    }
    function Ls(e, t) {
      var a = Si | Gi | Sn | Aa;
      return (t & a) !== V;
    }
    function Av(e, t) {
      return (t & e.expiredLanes) !== V;
    }
    function _d(e) {
      return (e & Ol) !== V;
    }
    function Fv() {
      var e = Vc;
      return Vc <<= 1, (Vc & Ol) === V && (Vc = Xr), e;
    }
    function Zr() {
      var e = Ds;
      return Ds <<= 1, (Ds & hu) === V && (Ds = mu), e;
    }
    function Dn(e) {
      return e & -e;
    }
    function so(e) {
      return Dn(e);
    }
    function Nl(e) {
      return 31 - ws(e);
    }
    function Bc(e) {
      return Nl(e);
    }
    function Jr(e, t) {
      return (e & t) !== V;
    }
    function gu(e, t) {
      return (e & t) === t;
    }
    function qe(e, t) {
      return e | t;
    }
    function Ms(e, t) {
      return e & ~t;
    }
    function $c(e, t) {
      return e & t;
    }
    function ty(e) {
      return e;
    }
    function jv(e, t) {
      return e !== bn && e < t ? e : t;
    }
    function Ns(e) {
      for (var t = [], a = 0; a < xn; a++)
        t.push(e);
      return t;
    }
    function Su(e, t, a) {
      e.pendingLanes |= t, t !== Ll && (e.suspendedLanes = V, e.pingedLanes = V);
      var i = e.eventTimes, u = Bc(t);
      i[u] = a;
    }
    function Hv(e, t) {
      e.suspendedLanes |= t, e.pingedLanes &= ~t;
      for (var a = e.expirationTimes, i = t; i > 0; ) {
        var u = Nl(i), s = 1 << u;
        a[u] = Xt, i &= ~s;
      }
    }
    function Yc(e, t, a) {
      e.pingedLanes |= e.suspendedLanes & t;
    }
    function Ic(e, t) {
      var a = e.pendingLanes & ~t;
      e.pendingLanes = t, e.suspendedLanes = V, e.pingedLanes = V, e.expiredLanes &= t, e.mutableReadLanes &= t, e.entangledLanes &= t;
      for (var i = e.entanglements, u = e.eventTimes, s = e.expirationTimes, f = a; f > 0; ) {
        var p = Nl(f), v = 1 << p;
        i[p] = V, u[p] = Xt, s[p] = Xt, f &= ~v;
      }
    }
    function xd(e, t) {
      for (var a = e.entangledLanes |= t, i = e.entanglements, u = a; u; ) {
        var s = Nl(u), f = 1 << s;
        // Is this one of the newly entangled lanes?
        f & t | // Is this lane transitively entangled with the newly entangled lanes?
        i[s] & t && (i[s] |= t), u &= ~f;
      }
    }
    function Vv(e, t) {
      var a = Dn(t), i;
      switch (a) {
        case Gi:
          i = Si;
          break;
        case Aa:
          i = Sn;
          break;
        case Xr:
        case Kr:
        case pu:
        case _s:
        case xs:
        case Dc:
        case kc:
        case Oc:
        case Lc:
        case Mc:
        case Nc:
        case zc:
        case Uc:
        case vu:
        case Ac:
        case lo:
        case mu:
        case bs:
        case Fc:
        case jc:
        case Hc:
          i = du;
          break;
        case Ll:
          i = uo;
          break;
        default:
          i = bn;
          break;
      }
      return (i & (e.suspendedLanes | t)) !== bn ? bn : i;
    }
    function Qc(e, t, a) {
      if (ga)
        for (var i = e.pendingUpdatersLaneMap; a > 0; ) {
          var u = Bc(a), s = 1 << u, f = i[u];
          f.add(t), a &= ~s;
        }
    }
    function bd(e, t) {
      if (ga)
        for (var a = e.pendingUpdatersLaneMap, i = e.memoizedUpdaters; t > 0; ) {
          var u = Bc(t), s = 1 << u, f = a[u];
          f.size > 0 && (f.forEach(function(p) {
            var v = p.alternate;
            (v === null || !i.has(v)) && i.add(p);
          }), f.clear()), t &= ~s;
        }
    }
    function zs(e, t) {
      return null;
    }
    var kn = ze, qi = Gi, Ei = Aa, co = Ll, fo = bn;
    function Fa() {
      return fo;
    }
    function En(e) {
      fo = e;
    }
    function Cr(e, t) {
      var a = fo;
      try {
        return fo = e, t();
      } finally {
        fo = a;
      }
    }
    function ny(e, t) {
      return e !== 0 && e < t ? e : t;
    }
    function ry(e, t) {
      return e === 0 || e > t ? e : t;
    }
    function po(e, t) {
      return e !== 0 && e < t;
    }
    function ir(e) {
      var t = Dn(e);
      return po(kn, t) ? po(qi, t) ? Os(t) ? Ei : co : qi : kn;
    }
    function Wc(e) {
      var t = e.current.memoizedState;
      return t.isDehydrated;
    }
    var de;
    function vo(e) {
      de = e;
    }
    function Dd(e) {
      de(e);
    }
    var Gc;
    function ay(e) {
      Gc = e;
    }
    var ho;
    function qc(e) {
      ho = e;
    }
    var Xc;
    function Pv(e) {
      Xc = e;
    }
    var kd;
    function Bv(e) {
      kd = e;
    }
    var Us = !1, mo = [], un = null, Gn = null, br = null, yo = /* @__PURE__ */ new Map(), go = /* @__PURE__ */ new Map(), qn = [], $v = [
      "mousedown",
      "mouseup",
      "touchcancel",
      "touchend",
      "touchstart",
      "auxclick",
      "dblclick",
      "pointercancel",
      "pointerdown",
      "pointerup",
      "dragend",
      "dragstart",
      "drop",
      "compositionend",
      "compositionstart",
      "keydown",
      "keypress",
      "keyup",
      "input",
      "textInput",
      // Intentionally camelCase
      "copy",
      "cut",
      "paste",
      "click",
      "change",
      "contextmenu",
      "reset",
      "submit"
    ];
    function Ci(e) {
      return $v.indexOf(e) > -1;
    }
    function iy(e, t, a, i, u) {
      return {
        blockedOn: e,
        domEventName: t,
        eventSystemFlags: a,
        nativeEvent: u,
        targetContainers: [i]
      };
    }
    function Od(e, t) {
      switch (e) {
        case "focusin":
        case "focusout":
          un = null;
          break;
        case "dragenter":
        case "dragleave":
          Gn = null;
          break;
        case "mouseover":
        case "mouseout":
          br = null;
          break;
        case "pointerover":
        case "pointerout": {
          var a = t.pointerId;
          yo.delete(a);
          break;
        }
        case "gotpointercapture":
        case "lostpointercapture": {
          var i = t.pointerId;
          go.delete(i);
          break;
        }
      }
    }
    function So(e, t, a, i, u, s) {
      if (e === null || e.nativeEvent !== s) {
        var f = iy(t, a, i, u, s);
        if (t !== null) {
          var p = Do(t);
          p !== null && Gc(p);
        }
        return f;
      }
      e.eventSystemFlags |= i;
      var v = e.targetContainers;
      return u !== null && v.indexOf(u) === -1 && v.push(u), e;
    }
    function Yv(e, t, a, i, u) {
      switch (t) {
        case "focusin": {
          var s = u;
          return un = So(un, e, t, a, i, s), !0;
        }
        case "dragenter": {
          var f = u;
          return Gn = So(Gn, e, t, a, i, f), !0;
        }
        case "mouseover": {
          var p = u;
          return br = So(br, e, t, a, i, p), !0;
        }
        case "pointerover": {
          var v = u, y = v.pointerId;
          return yo.set(y, So(yo.get(y) || null, e, t, a, i, v)), !0;
        }
        case "gotpointercapture": {
          var g = u, b = g.pointerId;
          return go.set(b, So(go.get(b) || null, e, t, a, i, g)), !0;
        }
      }
      return !1;
    }
    function Ld(e) {
      var t = Ws(e.target);
      if (t !== null) {
        var a = _l(t);
        if (a !== null) {
          var i = a.tag;
          if (i === Re) {
            var u = Cc(a);
            if (u !== null) {
              e.blockedOn = u, kd(e.priority, function() {
                ho(a);
              });
              return;
            }
          } else if (i === te) {
            var s = a.stateNode;
            if (Wc(s)) {
              e.blockedOn = Rc(a);
              return;
            }
          }
        }
      }
      e.blockedOn = null;
    }
    function ly(e) {
      for (var t = Xc(), a = {
        blockedOn: null,
        target: e,
        priority: t
      }, i = 0; i < qn.length && po(t, qn[i].priority); i++)
        ;
      qn.splice(i, 0, a), i === 0 && Ld(a);
    }
    function Eu(e) {
      if (e.blockedOn !== null)
        return !1;
      for (var t = e.targetContainers; t.length > 0; ) {
        var a = t[0], i = Rr(e.domEventName, e.eventSystemFlags, a, e.nativeEvent);
        if (i === null) {
          var u = e.nativeEvent, s = new u.constructor(u.type, u);
          Gm(s), u.target.dispatchEvent(s), hv();
        } else {
          var f = Do(i);
          return f !== null && Gc(f), e.blockedOn = i, !1;
        }
        t.shift();
      }
      return !0;
    }
    function Kc(e, t, a) {
      Eu(e) && a.delete(t);
    }
    function ja() {
      Us = !1, un !== null && Eu(un) && (un = null), Gn !== null && Eu(Gn) && (Gn = null), br !== null && Eu(br) && (br = null), yo.forEach(Kc), go.forEach(Kc);
    }
    function dt(e, t) {
      e.blockedOn === t && (e.blockedOn = null, Us || (Us = !0, F.unstable_scheduleCallback(F.unstable_NormalPriority, ja)));
    }
    function Cn(e) {
      if (mo.length > 0) {
        dt(mo[0], e);
        for (var t = 1; t < mo.length; t++) {
          var a = mo[t];
          a.blockedOn === e && (a.blockedOn = null);
        }
      }
      un !== null && dt(un, e), Gn !== null && dt(Gn, e), br !== null && dt(br, e);
      var i = function(p) {
        return dt(p, e);
      };
      yo.forEach(i), go.forEach(i);
      for (var u = 0; u < qn.length; u++) {
        var s = qn[u];
        s.blockedOn === e && (s.blockedOn = null);
      }
      for (; qn.length > 0; ) {
        var f = qn[0];
        if (f.blockedOn !== null)
          break;
        Ld(f), f.blockedOn === null && qn.shift();
      }
    }
    var nn = Tt.ReactCurrentBatchConfig, Pn = !0;
    function ea(e) {
      Pn = !!e;
    }
    function Eo() {
      return Pn;
    }
    function Bn(e, t, a) {
      var i = Zc(t), u;
      switch (i) {
        case kn:
          u = As;
          break;
        case qi:
          u = Cu;
          break;
        case Ei:
        default:
          u = Co;
          break;
      }
      return u.bind(null, t, a, e);
    }
    function As(e, t, a, i) {
      var u = Fa(), s = nn.transition;
      nn.transition = null;
      try {
        En(kn), Co(e, t, a, i);
      } finally {
        En(u), nn.transition = s;
      }
    }
    function Cu(e, t, a, i) {
      var u = Fa(), s = nn.transition;
      nn.transition = null;
      try {
        En(qi), Co(e, t, a, i);
      } finally {
        En(u), nn.transition = s;
      }
    }
    function Co(e, t, a, i) {
      Pn && Md(e, t, a, i);
    }
    function Md(e, t, a, i) {
      var u = Rr(e, t, a, i);
      if (u === null) {
        Ty(e, t, i, zl, a), Od(e, i);
        return;
      }
      if (Yv(u, e, t, a, i)) {
        i.stopPropagation();
        return;
      }
      if (Od(e, i), t & ds && Ci(e)) {
        for (; u !== null; ) {
          var s = Do(u);
          s !== null && Dd(s);
          var f = Rr(e, t, a, i);
          if (f === null && Ty(e, t, i, zl, a), f === u)
            break;
          u = f;
        }
        u !== null && i.stopPropagation();
        return;
      }
      Ty(e, t, i, null, a);
    }
    var zl = null;
    function Rr(e, t, a, i) {
      zl = null;
      var u = Bt(i), s = Ws(u);
      if (s !== null) {
        var f = _l(s);
        if (f === null)
          s = null;
        else {
          var p = f.tag;
          if (p === Re) {
            var v = Cc(f);
            if (v !== null)
              return v;
            s = null;
          } else if (p === te) {
            var y = f.stateNode;
            if (Wc(y))
              return Rc(f);
            s = null;
          } else
            f !== s && (s = null);
        }
      }
      return zl = s, null;
    }
    function Zc(e) {
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
          return kn;
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
          return qi;
        case "message": {
          var t = Km();
          switch (t) {
            case qr:
              return kn;
            case Ju:
              return qi;
            case yi:
            case eo:
              return Ei;
            case Ss:
              return co;
            default:
              return Ei;
          }
        }
        default:
          return Ei;
      }
    }
    function Ro(e, t, a) {
      return e.addEventListener(t, a, !1), a;
    }
    function Xi(e, t, a) {
      return e.addEventListener(t, a, !0), a;
    }
    function Jc(e, t, a, i) {
      return e.addEventListener(t, a, {
        capture: !0,
        passive: i
      }), a;
    }
    function Nd(e, t, a, i) {
      return e.addEventListener(t, a, {
        passive: i
      }), a;
    }
    var Ha = null, To = null, Va = null;
    function ef(e) {
      return Ha = e, To = js(), !0;
    }
    function Fs() {
      Ha = null, To = null, Va = null;
    }
    function tf() {
      if (Va)
        return Va;
      var e, t = To, a = t.length, i, u = js(), s = u.length;
      for (e = 0; e < a && t[e] === u[e]; e++)
        ;
      var f = a - e;
      for (i = 1; i <= f && t[a - i] === u[s - i]; i++)
        ;
      var p = i > 1 ? 1 - i : void 0;
      return Va = u.slice(e, p), Va;
    }
    function js() {
      return "value" in Ha ? Ha.value : Ha.textContent;
    }
    function Ru(e) {
      var t, a = e.keyCode;
      return "charCode" in e ? (t = e.charCode, t === 0 && a === 13 && (t = 13)) : t = a, t === 10 && (t = 13), t >= 32 || t === 13 ? t : 0;
    }
    function Xn() {
      return !0;
    }
    function Ki() {
      return !1;
    }
    function pn(e) {
      function t(a, i, u, s, f) {
        this._reactName = a, this._targetInst = u, this.type = i, this.nativeEvent = s, this.target = f, this.currentTarget = null;
        for (var p in e)
          if (e.hasOwnProperty(p)) {
            var v = e[p];
            v ? this[p] = v(s) : this[p] = s[p];
          }
        var y = s.defaultPrevented != null ? s.defaultPrevented : s.returnValue === !1;
        return y ? this.isDefaultPrevented = Xn : this.isDefaultPrevented = Ki, this.isPropagationStopped = Ki, this;
      }
      return et(t.prototype, {
        preventDefault: function() {
          this.defaultPrevented = !0;
          var a = this.nativeEvent;
          a && (a.preventDefault ? a.preventDefault() : typeof a.returnValue != "unknown" && (a.returnValue = !1), this.isDefaultPrevented = Xn);
        },
        stopPropagation: function() {
          var a = this.nativeEvent;
          a && (a.stopPropagation ? a.stopPropagation() : typeof a.cancelBubble != "unknown" && (a.cancelBubble = !0), this.isPropagationStopped = Xn);
        },
        /**
         * We release all dispatched `SyntheticEvent`s after each event loop, adding
         * them back into the pool. This allows a way to hold onto a reference that
         * won't be added back into the pool.
         */
        persist: function() {
        },
        /**
         * Checks if this event should be released back into the pool.
         *
         * @return {boolean} True if this should not be released, false otherwise.
         */
        isPersistent: Xn
      }), t;
    }
    var $n = {
      eventPhase: 0,
      bubbles: 0,
      cancelable: 0,
      timeStamp: function(e) {
        return e.timeStamp || Date.now();
      },
      defaultPrevented: 0,
      isTrusted: 0
    }, nf = pn($n), Tu = et({}, $n, {
      view: 0,
      detail: 0
    }), zd = pn(Tu), Ud, Ri, wo;
    function Ad(e) {
      e !== wo && (wo && e.type === "mousemove" ? (Ud = e.screenX - wo.screenX, Ri = e.screenY - wo.screenY) : (Ud = 0, Ri = 0), wo = e);
    }
    var Ti = et({}, Tu, {
      screenX: 0,
      screenY: 0,
      clientX: 0,
      clientY: 0,
      pageX: 0,
      pageY: 0,
      ctrlKey: 0,
      shiftKey: 0,
      altKey: 0,
      metaKey: 0,
      getModifierState: Fd,
      button: 0,
      buttons: 0,
      relatedTarget: function(e) {
        return e.relatedTarget === void 0 ? e.fromElement === e.srcElement ? e.toElement : e.fromElement : e.relatedTarget;
      },
      movementX: function(e) {
        return "movementX" in e ? e.movementX : (Ad(e), Ud);
      },
      movementY: function(e) {
        return "movementY" in e ? e.movementY : Ri;
      }
    }), rf = pn(Ti), wu = et({}, Ti, {
      dataTransfer: 0
    }), Iv = pn(wu), Qv = et({}, Tu, {
      relatedTarget: 0
    }), Hs = pn(Qv), af = et({}, $n, {
      animationName: 0,
      elapsedTime: 0,
      pseudoElement: 0
    }), uy = pn(af), oy = et({}, $n, {
      clipboardData: function(e) {
        return "clipboardData" in e ? e.clipboardData : window.clipboardData;
      }
    }), Wv = pn(oy), Gv = et({}, $n, {
      data: 0
    }), Ul = pn(Gv), sy = Ul, _o = {
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
    }, qv = {
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
    };
    function Rn(e) {
      if (e.key) {
        var t = _o[e.key] || e.key;
        if (t !== "Unidentified")
          return t;
      }
      if (e.type === "keypress") {
        var a = Ru(e);
        return a === 13 ? "Enter" : String.fromCharCode(a);
      }
      return e.type === "keydown" || e.type === "keyup" ? qv[e.keyCode] || "Unidentified" : "";
    }
    var cy = {
      Alt: "altKey",
      Control: "ctrlKey",
      Meta: "metaKey",
      Shift: "shiftKey"
    };
    function Xv(e) {
      var t = this, a = t.nativeEvent;
      if (a.getModifierState)
        return a.getModifierState(e);
      var i = cy[e];
      return i ? !!a[i] : !1;
    }
    function Fd(e) {
      return Xv;
    }
    var fy = et({}, Tu, {
      key: Rn,
      code: 0,
      location: 0,
      ctrlKey: 0,
      shiftKey: 0,
      altKey: 0,
      metaKey: 0,
      repeat: 0,
      locale: 0,
      getModifierState: Fd,
      // Legacy Interface
      charCode: function(e) {
        return e.type === "keypress" ? Ru(e) : 0;
      },
      keyCode: function(e) {
        return e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0;
      },
      which: function(e) {
        return e.type === "keypress" ? Ru(e) : e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0;
      }
    }), Kv = pn(fy), Zv = et({}, Ti, {
      pointerId: 0,
      width: 0,
      height: 0,
      pressure: 0,
      tangentialPressure: 0,
      tiltX: 0,
      tiltY: 0,
      twist: 0,
      pointerType: 0,
      isPrimary: 0
    }), Jv = pn(Zv), Pa = et({}, Tu, {
      touches: 0,
      targetTouches: 0,
      changedTouches: 0,
      altKey: 0,
      metaKey: 0,
      ctrlKey: 0,
      shiftKey: 0,
      getModifierState: Fd
    }), jd = pn(Pa), dy = et({}, $n, {
      propertyName: 0,
      elapsedTime: 0,
      pseudoElement: 0
    }), Al = pn(dy), lf = et({}, Ti, {
      deltaX: function(e) {
        return "deltaX" in e ? e.deltaX : (
          // Fallback to `wheelDeltaX` for Webkit and normalize (right is positive).
          "wheelDeltaX" in e ? -e.wheelDeltaX : 0
        );
      },
      deltaY: function(e) {
        return "deltaY" in e ? e.deltaY : (
          // Fallback to `wheelDeltaY` for Webkit and normalize (down is positive).
          "wheelDeltaY" in e ? -e.wheelDeltaY : (
            // Fallback to `wheelDelta` for IE<9 and normalize (down is positive).
            "wheelDelta" in e ? -e.wheelDelta : 0
          )
        );
      },
      deltaZ: 0,
      // Browsers without "deltaMode" is reporting in raw wheel delta where one
      // notch on the scroll is always +/- 120, roughly equivalent to pixels.
      // A good approximation of DOM_DELTA_LINE (1) is 5% of viewport size or
      // ~40 pixels, for DOM_DELTA_SCREEN (2) it is 87.5% of viewport size.
      deltaMode: 0
    }), _u = pn(lf), uf = [9, 13, 27, 32], of = 229, Vs = mn && "CompositionEvent" in window, Ps = null;
    mn && "documentMode" in document && (Ps = document.documentMode);
    var Hd = mn && "TextEvent" in window && !Ps, eh = mn && (!Vs || Ps && Ps > 8 && Ps <= 11), Vd = 32, Pd = String.fromCharCode(Vd);
    function sf() {
      Fr("onBeforeInput", ["compositionend", "keypress", "textInput", "paste"]), Fr("onCompositionEnd", ["compositionend", "focusout", "keydown", "keypress", "keyup", "mousedown"]), Fr("onCompositionStart", ["compositionstart", "focusout", "keydown", "keypress", "keyup", "mousedown"]), Fr("onCompositionUpdate", ["compositionupdate", "focusout", "keydown", "keypress", "keyup", "mousedown"]);
    }
    var Bs = !1;
    function th(e) {
      return (e.ctrlKey || e.altKey || e.metaKey) && // ctrlKey && altKey is equivalent to AltGr, and is not a command.
      !(e.ctrlKey && e.altKey);
    }
    function Bd(e) {
      switch (e) {
        case "compositionstart":
          return "onCompositionStart";
        case "compositionend":
          return "onCompositionEnd";
        case "compositionupdate":
          return "onCompositionUpdate";
      }
    }
    function py(e, t) {
      return e === "keydown" && t.keyCode === of;
    }
    function $d(e, t) {
      switch (e) {
        case "keyup":
          return uf.indexOf(t.keyCode) !== -1;
        case "keydown":
          return t.keyCode !== of;
        case "keypress":
        case "mousedown":
        case "focusout":
          return !0;
        default:
          return !1;
      }
    }
    function cf(e) {
      var t = e.detail;
      return typeof t == "object" && "data" in t ? t.data : null;
    }
    function $s(e) {
      return e.locale === "ko";
    }
    var Fl = !1;
    function ff(e, t, a, i, u) {
      var s, f;
      if (Vs ? s = Bd(t) : Fl ? $d(t, i) && (s = "onCompositionEnd") : py(t, i) && (s = "onCompositionStart"), !s)
        return null;
      eh && !$s(i) && (!Fl && s === "onCompositionStart" ? Fl = ef(u) : s === "onCompositionEnd" && Fl && (f = tf()));
      var p = uh(a, s);
      if (p.length > 0) {
        var v = new Ul(s, t, null, i, u);
        if (e.push({
          event: v,
          listeners: p
        }), f)
          v.data = f;
        else {
          var y = cf(i);
          y !== null && (v.data = y);
        }
      }
    }
    function nh(e, t) {
      switch (e) {
        case "compositionend":
          return cf(t);
        case "keypress":
          var a = t.which;
          return a !== Vd ? null : (Bs = !0, Pd);
        case "textInput":
          var i = t.data;
          return i === Pd && Bs ? null : i;
        default:
          return null;
      }
    }
    function vy(e, t) {
      if (Fl) {
        if (e === "compositionend" || !Vs && $d(e, t)) {
          var a = tf();
          return Fs(), Fl = !1, a;
        }
        return null;
      }
      switch (e) {
        case "paste":
          return null;
        case "keypress":
          if (!th(t)) {
            if (t.char && t.char.length > 1)
              return t.char;
            if (t.which)
              return String.fromCharCode(t.which);
          }
          return null;
        case "compositionend":
          return eh && !$s(t) ? null : t.data;
        default:
          return null;
      }
    }
    function df(e, t, a, i, u) {
      var s;
      if (Hd ? s = nh(t, i) : s = vy(t, i), !s)
        return null;
      var f = uh(a, "onBeforeInput");
      if (f.length > 0) {
        var p = new sy("onBeforeInput", "beforeinput", null, i, u);
        e.push({
          event: p,
          listeners: f
        }), p.data = s;
      }
    }
    function hy(e, t, a, i, u, s, f) {
      ff(e, t, a, i, u), df(e, t, a, i, u);
    }
    var Ys = {
      color: !0,
      date: !0,
      datetime: !0,
      "datetime-local": !0,
      email: !0,
      month: !0,
      number: !0,
      password: !0,
      range: !0,
      search: !0,
      tel: !0,
      text: !0,
      time: !0,
      url: !0,
      week: !0
    };
    function rh(e) {
      var t = e && e.nodeName && e.nodeName.toLowerCase();
      return t === "input" ? !!Ys[e.type] : t === "textarea";
    }
    /**
     * Checks if an event is supported in the current execution environment.
     *
     * NOTE: This will not work correctly for non-generic events such as `change`,
     * `reset`, `load`, `error`, and `select`.
     *
     * Borrows from Modernizr.
     *
     * @param {string} eventNameSuffix Event name, e.g. "click".
     * @return {boolean} True if the event is supported.
     * @internal
     * @license Modernizr 3.0.0pre (Custom Build) | MIT
     */
    function pf(e) {
      if (!mn)
        return !1;
      var t = "on" + e, a = t in document;
      if (!a) {
        var i = document.createElement("div");
        i.setAttribute(t, "return;"), a = typeof i[t] == "function";
      }
      return a;
    }
    function n() {
      Fr("onChange", ["change", "click", "focusin", "focusout", "input", "keydown", "keyup", "selectionchange"]);
    }
    function r(e, t, a, i) {
      Xu(i);
      var u = uh(t, "onChange");
      if (u.length > 0) {
        var s = new nf("onChange", "change", null, a, i);
        e.push({
          event: s,
          listeners: u
        });
      }
    }
    var l = null, o = null;
    function c(e) {
      var t = e.nodeName && e.nodeName.toLowerCase();
      return t === "select" || t === "input" && e.type === "file";
    }
    function d(e) {
      var t = [];
      r(t, o, e, Bt(e)), vs(m, t);
    }
    function m(e) {
      x0(e, 0);
    }
    function E(e) {
      var t = Sf(e);
      if ($u(t))
        return e;
    }
    function w(e, t) {
      if (e === "change")
        return t;
    }
    var U = !1;
    mn && (U = pf("input") && (!document.documentMode || document.documentMode > 9));
    function Q(e, t) {
      l = e, o = t, l.attachEvent("onpropertychange", Y);
    }
    function W() {
      l && (l.detachEvent("onpropertychange", Y), l = null, o = null);
    }
    function Y(e) {
      e.propertyName === "value" && E(o) && d(e);
    }
    function le(e, t, a) {
      e === "focusin" ? (W(), Q(t, a)) : e === "focusout" && W();
    }
    function me(e, t) {
      if (e === "selectionchange" || e === "keyup" || e === "keydown")
        return E(o);
    }
    function Ee(e) {
      var t = e.nodeName;
      return t && t.toLowerCase() === "input" && (e.type === "checkbox" || e.type === "radio");
    }
    function On(e, t) {
      if (e === "click")
        return E(t);
    }
    function D(e, t) {
      if (e === "input" || e === "change")
        return E(t);
    }
    function x(e) {
      var t = e._wrapperState;
      !t || !t.controlled || e.type !== "number" || Ve(e, "number", e.value);
    }
    function L(e, t, a, i, u, s, f) {
      var p = a ? Sf(a) : window, v, y;
      if (c(p) ? v = w : rh(p) ? U ? v = D : (v = me, y = le) : Ee(p) && (v = On), v) {
        var g = v(t, a);
        if (g) {
          r(e, g, i, u);
          return;
        }
      }
      y && y(t, p, a), t === "focusout" && x(p);
    }
    function X() {
      vr("onMouseEnter", ["mouseout", "mouseover"]), vr("onMouseLeave", ["mouseout", "mouseover"]), vr("onPointerEnter", ["pointerout", "pointerover"]), vr("onPointerLeave", ["pointerout", "pointerover"]);
    }
    function we(e, t, a, i, u, s, f) {
      var p = t === "mouseover" || t === "pointerover", v = t === "mouseout" || t === "pointerout";
      if (p && !mv(i)) {
        var y = i.relatedTarget || i.fromElement;
        if (y && (Ws(y) || rp(y)))
          return;
      }
      if (!(!v && !p)) {
        var g;
        if (u.window === u)
          g = u;
        else {
          var b = u.ownerDocument;
          b ? g = b.defaultView || b.parentWindow : g = window;
        }
        var _, N;
        if (v) {
          var z = i.relatedTarget || i.toElement;
          if (_ = a, N = z ? Ws(z) : null, N !== null) {
            var j = _l(N);
            (N !== j || N.tag !== ae && N.tag !== Ce) && (N = null);
          }
        } else
          _ = null, N = a;
        if (_ !== N) {
          var se = rf, Le = "onMouseLeave", xe = "onMouseEnter", gt = "mouse";
          (t === "pointerout" || t === "pointerover") && (se = Jv, Le = "onPointerLeave", xe = "onPointerEnter", gt = "pointer");
          var pt = _ == null ? g : Sf(_), k = N == null ? g : Sf(N), H = new se(Le, gt + "leave", _, i, u);
          H.target = pt, H.relatedTarget = k;
          var O = null, G = Ws(u);
          if (G === a) {
            var ce = new se(xe, gt + "enter", N, i, u);
            ce.target = k, ce.relatedTarget = pt, O = ce;
          }
          bR(e, H, O, _, N);
        }
      }
    }
    function Ue(e, t) {
      return e === t && (e !== 0 || 1 / e === 1 / t) || e !== e && t !== t;
    }
    var ye = typeof Object.is == "function" ? Object.is : Ue;
    function je(e, t) {
      if (ye(e, t))
        return !0;
      if (typeof e != "object" || e === null || typeof t != "object" || t === null)
        return !1;
      var a = Object.keys(e), i = Object.keys(t);
      if (a.length !== i.length)
        return !1;
      for (var u = 0; u < a.length; u++) {
        var s = a[u];
        if (!er.call(t, s) || !ye(e[s], t[s]))
          return !1;
      }
      return !0;
    }
    function Yn(e) {
      for (; e && e.firstChild; )
        e = e.firstChild;
      return e;
    }
    function Dt(e) {
      for (; e; ) {
        if (e.nextSibling)
          return e.nextSibling;
        e = e.parentNode;
      }
    }
    function Zi(e, t) {
      for (var a = Yn(e), i = 0, u = 0; a; ) {
        if (a.nodeType === Vi) {
          if (u = i + a.textContent.length, i <= t && u >= t)
            return {
              node: a,
              offset: t - i
            };
          i = u;
        }
        a = Yn(Dt(a));
      }
    }
    function my(e) {
      var t = e.ownerDocument, a = t && t.defaultView || window, i = a.getSelection && a.getSelection();
      if (!i || i.rangeCount === 0)
        return null;
      var u = i.anchorNode, s = i.anchorOffset, f = i.focusNode, p = i.focusOffset;
      try {
        u.nodeType, f.nodeType;
      } catch {
        return null;
      }
      return uR(e, u, s, f, p);
    }
    function uR(e, t, a, i, u) {
      var s = 0, f = -1, p = -1, v = 0, y = 0, g = e, b = null;
      e:
        for (; ; ) {
          for (var _ = null; g === t && (a === 0 || g.nodeType === Vi) && (f = s + a), g === i && (u === 0 || g.nodeType === Vi) && (p = s + u), g.nodeType === Vi && (s += g.nodeValue.length), (_ = g.firstChild) !== null; )
            b = g, g = _;
          for (; ; ) {
            if (g === e)
              break e;
            if (b === t && ++v === a && (f = s), b === i && ++y === u && (p = s), (_ = g.nextSibling) !== null)
              break;
            g = b, b = g.parentNode;
          }
          g = _;
        }
      return f === -1 || p === -1 ? null : {
        start: f,
        end: p
      };
    }
    function oR(e, t) {
      var a = e.ownerDocument || document, i = a && a.defaultView || window;
      if (i.getSelection) {
        var u = i.getSelection(), s = e.textContent.length, f = Math.min(t.start, s), p = t.end === void 0 ? f : Math.min(t.end, s);
        if (!u.extend && f > p) {
          var v = p;
          p = f, f = v;
        }
        var y = Zi(e, f), g = Zi(e, p);
        if (y && g) {
          if (u.rangeCount === 1 && u.anchorNode === y.node && u.anchorOffset === y.offset && u.focusNode === g.node && u.focusOffset === g.offset)
            return;
          var b = a.createRange();
          b.setStart(y.node, y.offset), u.removeAllRanges(), f > p ? (u.addRange(b), u.extend(g.node, g.offset)) : (b.setEnd(g.node, g.offset), u.addRange(b));
        }
      }
    }
    function v0(e) {
      return e && e.nodeType === Vi;
    }
    function h0(e, t) {
      return !e || !t ? !1 : e === t ? !0 : v0(e) ? !1 : v0(t) ? h0(e, t.parentNode) : "contains" in e ? e.contains(t) : e.compareDocumentPosition ? !!(e.compareDocumentPosition(t) & 16) : !1;
    }
    function sR(e) {
      return e && e.ownerDocument && h0(e.ownerDocument.documentElement, e);
    }
    function cR(e) {
      try {
        return typeof e.contentWindow.location.href == "string";
      } catch {
        return !1;
      }
    }
    function m0() {
      for (var e = window, t = di(); t instanceof e.HTMLIFrameElement; ) {
        if (cR(t))
          e = t.contentWindow;
        else
          return t;
        t = di(e.document);
      }
      return t;
    }
    function yy(e) {
      var t = e && e.nodeName && e.nodeName.toLowerCase();
      return t && (t === "input" && (e.type === "text" || e.type === "search" || e.type === "tel" || e.type === "url" || e.type === "password") || t === "textarea" || e.contentEditable === "true");
    }
    function fR() {
      var e = m0();
      return {
        focusedElem: e,
        selectionRange: yy(e) ? pR(e) : null
      };
    }
    function dR(e) {
      var t = m0(), a = e.focusedElem, i = e.selectionRange;
      if (t !== a && sR(a)) {
        i !== null && yy(a) && vR(a, i);
        for (var u = [], s = a; s = s.parentNode; )
          s.nodeType === Yr && u.push({
            element: s,
            left: s.scrollLeft,
            top: s.scrollTop
          });
        typeof a.focus == "function" && a.focus();
        for (var f = 0; f < u.length; f++) {
          var p = u[f];
          p.element.scrollLeft = p.left, p.element.scrollTop = p.top;
        }
      }
    }
    function pR(e) {
      var t;
      return "selectionStart" in e ? t = {
        start: e.selectionStart,
        end: e.selectionEnd
      } : t = my(e), t || {
        start: 0,
        end: 0
      };
    }
    function vR(e, t) {
      var a = t.start, i = t.end;
      i === void 0 && (i = a), "selectionStart" in e ? (e.selectionStart = a, e.selectionEnd = Math.min(i, e.value.length)) : oR(e, t);
    }
    var hR = mn && "documentMode" in document && document.documentMode <= 11;
    function mR() {
      Fr("onSelect", ["focusout", "contextmenu", "dragend", "focusin", "keydown", "keyup", "mousedown", "mouseup", "selectionchange"]);
    }
    var vf = null, gy = null, Yd = null, Sy = !1;
    function yR(e) {
      if ("selectionStart" in e && yy(e))
        return {
          start: e.selectionStart,
          end: e.selectionEnd
        };
      var t = e.ownerDocument && e.ownerDocument.defaultView || window, a = t.getSelection();
      return {
        anchorNode: a.anchorNode,
        anchorOffset: a.anchorOffset,
        focusNode: a.focusNode,
        focusOffset: a.focusOffset
      };
    }
    function gR(e) {
      return e.window === e ? e.document : e.nodeType === pa ? e : e.ownerDocument;
    }
    function y0(e, t, a) {
      var i = gR(a);
      if (!(Sy || vf == null || vf !== di(i))) {
        var u = yR(vf);
        if (!Yd || !je(Yd, u)) {
          Yd = u;
          var s = uh(gy, "onSelect");
          if (s.length > 0) {
            var f = new nf("onSelect", "select", null, t, a);
            e.push({
              event: f,
              listeners: s
            }), f.target = vf;
          }
        }
      }
    }
    function SR(e, t, a, i, u, s, f) {
      var p = a ? Sf(a) : window;
      switch (t) {
        case "focusin":
          (rh(p) || p.contentEditable === "true") && (vf = p, gy = a, Yd = null);
          break;
        case "focusout":
          vf = null, gy = null, Yd = null;
          break;
        case "mousedown":
          Sy = !0;
          break;
        case "contextmenu":
        case "mouseup":
        case "dragend":
          Sy = !1, y0(e, i, u);
          break;
        case "selectionchange":
          if (hR)
            break;
        case "keydown":
        case "keyup":
          y0(e, i, u);
      }
    }
    function ah(e, t) {
      var a = {};
      return a[e.toLowerCase()] = t.toLowerCase(), a["Webkit" + e] = "webkit" + t, a["Moz" + e] = "moz" + t, a;
    }
    var hf = {
      animationend: ah("Animation", "AnimationEnd"),
      animationiteration: ah("Animation", "AnimationIteration"),
      animationstart: ah("Animation", "AnimationStart"),
      transitionend: ah("Transition", "TransitionEnd")
    }, Ey = {}, g0 = {};
    mn && (g0 = document.createElement("div").style, "AnimationEvent" in window || (delete hf.animationend.animation, delete hf.animationiteration.animation, delete hf.animationstart.animation), "TransitionEvent" in window || delete hf.transitionend.transition);
    function ih(e) {
      if (Ey[e])
        return Ey[e];
      if (!hf[e])
        return e;
      var t = hf[e];
      for (var a in t)
        if (t.hasOwnProperty(a) && a in g0)
          return Ey[e] = t[a];
      return e;
    }
    var S0 = ih("animationend"), E0 = ih("animationiteration"), C0 = ih("animationstart"), R0 = ih("transitionend"), T0 = /* @__PURE__ */ new Map(), w0 = ["abort", "auxClick", "cancel", "canPlay", "canPlayThrough", "click", "close", "contextMenu", "copy", "cut", "drag", "dragEnd", "dragEnter", "dragExit", "dragLeave", "dragOver", "dragStart", "drop", "durationChange", "emptied", "encrypted", "ended", "error", "gotPointerCapture", "input", "invalid", "keyDown", "keyPress", "keyUp", "load", "loadedData", "loadedMetadata", "loadStart", "lostPointerCapture", "mouseDown", "mouseMove", "mouseOut", "mouseOver", "mouseUp", "paste", "pause", "play", "playing", "pointerCancel", "pointerDown", "pointerMove", "pointerOut", "pointerOver", "pointerUp", "progress", "rateChange", "reset", "resize", "seeked", "seeking", "stalled", "submit", "suspend", "timeUpdate", "touchCancel", "touchEnd", "touchStart", "volumeChange", "scroll", "toggle", "touchMove", "waiting", "wheel"];
    function xo(e, t) {
      T0.set(e, t), Fr(t, [e]);
    }
    function ER() {
      for (var e = 0; e < w0.length; e++) {
        var t = w0[e], a = t.toLowerCase(), i = t[0].toUpperCase() + t.slice(1);
        xo(a, "on" + i);
      }
      xo(S0, "onAnimationEnd"), xo(E0, "onAnimationIteration"), xo(C0, "onAnimationStart"), xo("dblclick", "onDoubleClick"), xo("focusin", "onFocus"), xo("focusout", "onBlur"), xo(R0, "onTransitionEnd");
    }
    function CR(e, t, a, i, u, s, f) {
      var p = T0.get(t);
      if (p !== void 0) {
        var v = nf, y = t;
        switch (t) {
          case "keypress":
            if (Ru(i) === 0)
              return;
          case "keydown":
          case "keyup":
            v = Kv;
            break;
          case "focusin":
            y = "focus", v = Hs;
            break;
          case "focusout":
            y = "blur", v = Hs;
            break;
          case "beforeblur":
          case "afterblur":
            v = Hs;
            break;
          case "click":
            if (i.button === 2)
              return;
          case "auxclick":
          case "dblclick":
          case "mousedown":
          case "mousemove":
          case "mouseup":
          case "mouseout":
          case "mouseover":
          case "contextmenu":
            v = rf;
            break;
          case "drag":
          case "dragend":
          case "dragenter":
          case "dragexit":
          case "dragleave":
          case "dragover":
          case "dragstart":
          case "drop":
            v = Iv;
            break;
          case "touchcancel":
          case "touchend":
          case "touchmove":
          case "touchstart":
            v = jd;
            break;
          case S0:
          case E0:
          case C0:
            v = uy;
            break;
          case R0:
            v = Al;
            break;
          case "scroll":
            v = zd;
            break;
          case "wheel":
            v = _u;
            break;
          case "copy":
          case "cut":
          case "paste":
            v = Wv;
            break;
          case "gotpointercapture":
          case "lostpointercapture":
          case "pointercancel":
          case "pointerdown":
          case "pointermove":
          case "pointerout":
          case "pointerover":
          case "pointerup":
            v = Jv;
            break;
        }
        var g = (s & ds) !== 0;
        {
          var b = !g && // TODO: ideally, we'd eventually add all events from
          // nonDelegatedEvents list in DOMPluginEventSystem.
          // Then we can remove this special list.
          // This is a breaking change that can wait until React 18.
          t === "scroll", _ = _R(a, p, i.type, g, b);
          if (_.length > 0) {
            var N = new v(p, y, null, i, u);
            e.push({
              event: N,
              listeners: _
            });
          }
        }
      }
    }
    ER(), X(), n(), mR(), sf();
    function RR(e, t, a, i, u, s, f) {
      CR(e, t, a, i, u, s);
      var p = (s & Wm) === 0;
      p && (we(e, t, a, i, u), L(e, t, a, i, u), SR(e, t, a, i, u), hy(e, t, a, i, u));
    }
    var Id = ["abort", "canplay", "canplaythrough", "durationchange", "emptied", "encrypted", "ended", "error", "loadeddata", "loadedmetadata", "loadstart", "pause", "play", "playing", "progress", "ratechange", "resize", "seeked", "seeking", "stalled", "suspend", "timeupdate", "volumechange", "waiting"], Cy = new Set(["cancel", "close", "invalid", "load", "scroll", "toggle"].concat(Id));
    function _0(e, t, a) {
      var i = e.type || "unknown-event";
      e.currentTarget = a, cd(i, t, void 0, e), e.currentTarget = null;
    }
    function TR(e, t, a) {
      var i;
      if (a)
        for (var u = t.length - 1; u >= 0; u--) {
          var s = t[u], f = s.instance, p = s.currentTarget, v = s.listener;
          if (f !== i && e.isPropagationStopped())
            return;
          _0(e, v, p), i = f;
        }
      else
        for (var y = 0; y < t.length; y++) {
          var g = t[y], b = g.instance, _ = g.currentTarget, N = g.listener;
          if (b !== i && e.isPropagationStopped())
            return;
          _0(e, N, _), i = b;
        }
    }
    function x0(e, t) {
      for (var a = (t & ds) !== 0, i = 0; i < e.length; i++) {
        var u = e[i], s = u.event, f = u.listeners;
        TR(s, f, a);
      }
      qm();
    }
    function wR(e, t, a, i, u) {
      var s = Bt(a), f = [];
      RR(f, e, i, a, s, t), x0(f, t);
    }
    function vn(e, t) {
      Cy.has(e) || S('Did not expect a listenToNonDelegatedEvent() call for "%s". This is a bug in React. Please file an issue.', e);
      var a = !1, i = ew(t), u = DR(e, a);
      i.has(u) || (b0(t, e, fs, a), i.add(u));
    }
    function Ry(e, t, a) {
      Cy.has(e) && !t && S('Did not expect a listenToNativeEvent() call for "%s" in the bubble phase. This is a bug in React. Please file an issue.', e);
      var i = 0;
      t && (i |= ds), b0(a, e, i, t);
    }
    var lh = "_reactListening" + Math.random().toString(36).slice(2);
    function Qd(e) {
      if (!e[lh]) {
        e[lh] = !0, Zt.forEach(function(a) {
          a !== "selectionchange" && (Cy.has(a) || Ry(a, !1, e), Ry(a, !0, e));
        });
        var t = e.nodeType === pa ? e : e.ownerDocument;
        t !== null && (t[lh] || (t[lh] = !0, Ry("selectionchange", !1, t)));
      }
    }
    function b0(e, t, a, i, u) {
      var s = Bn(e, t, a), f = void 0;
      hs && (t === "touchstart" || t === "touchmove" || t === "wheel") && (f = !0), e = e, i ? f !== void 0 ? Jc(e, t, s, f) : Xi(e, t, s) : f !== void 0 ? Nd(e, t, s, f) : Ro(e, t, s);
    }
    function D0(e, t) {
      return e === t || e.nodeType === yn && e.parentNode === t;
    }
    function Ty(e, t, a, i, u) {
      var s = i;
      if (!(t & mc) && !(t & fs)) {
        var f = u;
        if (i !== null) {
          var p = i;
          e:
            for (; ; ) {
              if (p === null)
                return;
              var v = p.tag;
              if (v === te || v === Ne) {
                var y = p.stateNode.containerInfo;
                if (D0(y, f))
                  break;
                if (v === Ne)
                  for (var g = p.return; g !== null; ) {
                    var b = g.tag;
                    if (b === te || b === Ne) {
                      var _ = g.stateNode.containerInfo;
                      if (D0(_, f))
                        return;
                    }
                    g = g.return;
                  }
                for (; y !== null; ) {
                  var N = Ws(y);
                  if (N === null)
                    return;
                  var z = N.tag;
                  if (z === ae || z === Ce) {
                    p = s = N;
                    continue e;
                  }
                  y = y.parentNode;
                }
              }
              p = p.return;
            }
        }
      }
      vs(function() {
        return wR(e, t, a, s);
      });
    }
    function Wd(e, t, a) {
      return {
        instance: e,
        listener: t,
        currentTarget: a
      };
    }
    function _R(e, t, a, i, u, s) {
      for (var f = t !== null ? t + "Capture" : null, p = i ? f : t, v = [], y = e, g = null; y !== null; ) {
        var b = y, _ = b.stateNode, N = b.tag;
        if (N === ae && _ !== null && (g = _, p !== null)) {
          var z = lu(y, p);
          z != null && v.push(Wd(y, z, g));
        }
        if (u)
          break;
        y = y.return;
      }
      return v;
    }
    function uh(e, t) {
      for (var a = t + "Capture", i = [], u = e; u !== null; ) {
        var s = u, f = s.stateNode, p = s.tag;
        if (p === ae && f !== null) {
          var v = f, y = lu(u, a);
          y != null && i.unshift(Wd(u, y, v));
          var g = lu(u, t);
          g != null && i.push(Wd(u, g, v));
        }
        u = u.return;
      }
      return i;
    }
    function mf(e) {
      if (e === null)
        return null;
      do
        e = e.return;
      while (e && e.tag !== ae);
      return e || null;
    }
    function xR(e, t) {
      for (var a = e, i = t, u = 0, s = a; s; s = mf(s))
        u++;
      for (var f = 0, p = i; p; p = mf(p))
        f++;
      for (; u - f > 0; )
        a = mf(a), u--;
      for (; f - u > 0; )
        i = mf(i), f--;
      for (var v = u; v--; ) {
        if (a === i || i !== null && a === i.alternate)
          return a;
        a = mf(a), i = mf(i);
      }
      return null;
    }
    function k0(e, t, a, i, u) {
      for (var s = t._reactName, f = [], p = a; p !== null && p !== i; ) {
        var v = p, y = v.alternate, g = v.stateNode, b = v.tag;
        if (y !== null && y === i)
          break;
        if (b === ae && g !== null) {
          var _ = g;
          if (u) {
            var N = lu(p, s);
            N != null && f.unshift(Wd(p, N, _));
          } else if (!u) {
            var z = lu(p, s);
            z != null && f.push(Wd(p, z, _));
          }
        }
        p = p.return;
      }
      f.length !== 0 && e.push({
        event: t,
        listeners: f
      });
    }
    function bR(e, t, a, i, u) {
      var s = i && u ? xR(i, u) : null;
      i !== null && k0(e, t, i, s, !1), u !== null && a !== null && k0(e, a, u, s, !0);
    }
    function DR(e, t) {
      return e + "__" + (t ? "capture" : "bubble");
    }
    var Ba = !1, Gd = "dangerouslySetInnerHTML", oh = "suppressContentEditableWarning", bo = "suppressHydrationWarning", O0 = "autoFocus", Is = "children", Qs = "style", sh = "__html", wy, ch, qd, L0, fh, M0, N0;
    wy = {
      // There are working polyfills for <dialog>. Let people use it.
      dialog: !0,
      // Electron ships a custom <webview> tag to display external web content in
      // an isolated frame and process.
      // This tag is not present in non Electron environments such as JSDom which
      // is often used for testing purposes.
      // @see https://electronjs.org/docs/api/webview-tag
      webview: !0
    }, ch = function(e, t) {
      qu(e, t), cv(e, t), Cl(e, t, {
        registrationNameDependencies: Zn,
        possibleRegistrationNames: Jn
      });
    }, M0 = mn && !document.documentMode, qd = function(e, t, a) {
      if (!Ba) {
        var i = dh(a), u = dh(t);
        u !== i && (Ba = !0, S("Prop `%s` did not match. Server: %s Client: %s", e, JSON.stringify(u), JSON.stringify(i)));
      }
    }, L0 = function(e) {
      if (!Ba) {
        Ba = !0;
        var t = [];
        e.forEach(function(a) {
          t.push(a);
        }), S("Extra attributes from the server: %s", t);
      }
    }, fh = function(e, t) {
      t === !1 ? S("Expected `%s` listener to be a function, instead got `false`.\n\nIf you used to conditionally omit it with %s={condition && value}, pass %s={condition ? value : undefined} instead.", e, e, e) : S("Expected `%s` listener to be a function, instead got a value of `%s` type.", e, typeof t);
    }, N0 = function(e, t) {
      var a = e.namespaceURI === Hi ? e.ownerDocument.createElement(e.tagName) : e.ownerDocument.createElementNS(e.namespaceURI, e.tagName);
      return a.innerHTML = t, a.innerHTML;
    };
    var kR = /\r\n?/g, OR = /\u0000|\uFFFD/g;
    function dh(e) {
      ua(e);
      var t = typeof e == "string" ? e : "" + e;
      return t.replace(kR, `
`).replace(OR, "");
    }
    function ph(e, t, a, i) {
      var u = dh(t), s = dh(e);
      if (s !== u && (i && (Ba || (Ba = !0, S('Text content did not match. Server: "%s" Client: "%s"', s, u))), a && B))
        throw new Error("Text content does not match server-rendered HTML.");
    }
    function z0(e) {
      return e.nodeType === pa ? e : e.ownerDocument;
    }
    function LR() {
    }
    function vh(e) {
      e.onclick = LR;
    }
    function MR(e, t, a, i, u) {
      for (var s in i)
        if (i.hasOwnProperty(s)) {
          var f = i[s];
          if (s === Qs)
            f && Object.freeze(f), av(t, f);
          else if (s === Gd) {
            var p = f ? f[sh] : void 0;
            p != null && qp(t, p);
          } else if (s === Is)
            if (typeof f == "string") {
              var v = e !== "textarea" || f !== "";
              v && is(t, f);
            } else
              typeof f == "number" && is(t, "" + f);
          else
            s === oh || s === bo || s === O0 || (Zn.hasOwnProperty(s) ? f != null && (typeof f != "function" && fh(s, f), s === "onScroll" && vn("scroll", t)) : f != null && Li(t, s, f, u));
        }
    }
    function NR(e, t, a, i) {
      for (var u = 0; u < t.length; u += 2) {
        var s = t[u], f = t[u + 1];
        s === Qs ? av(e, f) : s === Gd ? qp(e, f) : s === Is ? is(e, f) : Li(e, s, f, i);
      }
    }
    function zR(e, t, a, i) {
      var u, s = z0(a), f, p = i;
      if (p === Hi && (p = Qf(e)), p === Hi) {
        if (u = ru(e, t), !u && e !== e.toLowerCase() && S("<%s /> is using incorrect casing. Use PascalCase for React components, or lowercase for HTML elements.", e), e === "script") {
          var v = s.createElement("div");
          v.innerHTML = "<script><\/script>";
          var y = v.firstChild;
          f = v.removeChild(y);
        } else if (typeof t.is == "string")
          f = s.createElement(e, {
            is: t.is
          });
        else if (f = s.createElement(e), e === "select") {
          var g = f;
          t.multiple ? g.multiple = !0 : t.size && (g.size = t.size);
        }
      } else
        f = s.createElementNS(p, e);
      return p === Hi && !u && Object.prototype.toString.call(f) === "[object HTMLUnknownElement]" && !er.call(wy, e) && (wy[e] = !0, S("The tag <%s> is unrecognized in this browser. If you meant to render a React component, start its name with an uppercase letter.", e)), f;
    }
    function UR(e, t) {
      return z0(t).createTextNode(e);
    }
    function AR(e, t, a, i) {
      var u = ru(t, a);
      ch(t, a);
      var s;
      switch (t) {
        case "dialog":
          vn("cancel", e), vn("close", e), s = a;
          break;
        case "iframe":
        case "object":
        case "embed":
          vn("load", e), s = a;
          break;
        case "video":
        case "audio":
          for (var f = 0; f < Id.length; f++)
            vn(Id[f], e);
          s = a;
          break;
        case "source":
          vn("error", e), s = a;
          break;
        case "img":
        case "image":
        case "link":
          vn("error", e), vn("load", e), s = a;
          break;
        case "details":
          vn("toggle", e), s = a;
          break;
        case "input":
          C(e, a), s = h(e, a), vn("invalid", e);
          break;
        case "option":
          jt(e, a), s = a;
          break;
        case "select":
          as(e, a), s = rs(e, a), vn("invalid", e);
          break;
        case "textarea":
          Wp(e, a), s = If(e, a), vn("invalid", e);
          break;
        default:
          s = a;
      }
      switch (os(t, s), MR(t, e, i, s, u), t) {
        case "input":
          Ai(e), q(e, a, !1);
          break;
        case "textarea":
          Ai(e), sc(e);
          break;
        case "option":
          Ht(e, a);
          break;
        case "select":
          Yf(e, a);
          break;
        default:
          typeof s.onClick == "function" && vh(e);
          break;
      }
    }
    function FR(e, t, a, i, u) {
      ch(t, i);
      var s = null, f, p;
      switch (t) {
        case "input":
          f = h(e, a), p = h(e, i), s = [];
          break;
        case "select":
          f = rs(e, a), p = rs(e, i), s = [];
          break;
        case "textarea":
          f = If(e, a), p = If(e, i), s = [];
          break;
        default:
          f = a, p = i, typeof f.onClick != "function" && typeof p.onClick == "function" && vh(e);
          break;
      }
      os(t, p);
      var v, y, g = null;
      for (v in f)
        if (!(p.hasOwnProperty(v) || !f.hasOwnProperty(v) || f[v] == null))
          if (v === Qs) {
            var b = f[v];
            for (y in b)
              b.hasOwnProperty(y) && (g || (g = {}), g[y] = "");
          } else
            v === Gd || v === Is || v === oh || v === bo || v === O0 || (Zn.hasOwnProperty(v) ? s || (s = []) : (s = s || []).push(v, null));
      for (v in p) {
        var _ = p[v], N = f != null ? f[v] : void 0;
        if (!(!p.hasOwnProperty(v) || _ === N || _ == null && N == null))
          if (v === Qs)
            if (_ && Object.freeze(_), N) {
              for (y in N)
                N.hasOwnProperty(y) && (!_ || !_.hasOwnProperty(y)) && (g || (g = {}), g[y] = "");
              for (y in _)
                _.hasOwnProperty(y) && N[y] !== _[y] && (g || (g = {}), g[y] = _[y]);
            } else
              g || (s || (s = []), s.push(v, g)), g = _;
          else if (v === Gd) {
            var z = _ ? _[sh] : void 0, j = N ? N[sh] : void 0;
            z != null && j !== z && (s = s || []).push(v, z);
          } else
            v === Is ? (typeof _ == "string" || typeof _ == "number") && (s = s || []).push(v, "" + _) : v === oh || v === bo || (Zn.hasOwnProperty(v) ? (_ != null && (typeof _ != "function" && fh(v, _), v === "onScroll" && vn("scroll", e)), !s && N !== _ && (s = [])) : (s = s || []).push(v, _));
      }
      return g && (iv(g, p[Qs]), (s = s || []).push(Qs, g)), s;
    }
    function jR(e, t, a, i, u) {
      a === "input" && u.type === "radio" && u.name != null && M(e, u);
      var s = ru(a, i), f = ru(a, u);
      switch (NR(e, t, s, f), a) {
        case "input":
          A(e, u);
          break;
        case "textarea":
          Gp(e, u);
          break;
        case "select":
          Am(e, u);
          break;
      }
    }
    function HR(e) {
      {
        var t = e.toLowerCase();
        return pc.hasOwnProperty(t) && pc[t] || null;
      }
    }
    function VR(e, t, a, i, u, s, f) {
      var p, v;
      switch (p = ru(t, a), ch(t, a), t) {
        case "dialog":
          vn("cancel", e), vn("close", e);
          break;
        case "iframe":
        case "object":
        case "embed":
          vn("load", e);
          break;
        case "video":
        case "audio":
          for (var y = 0; y < Id.length; y++)
            vn(Id[y], e);
          break;
        case "source":
          vn("error", e);
          break;
        case "img":
        case "image":
        case "link":
          vn("error", e), vn("load", e);
          break;
        case "details":
          vn("toggle", e);
          break;
        case "input":
          C(e, a), vn("invalid", e);
          break;
        case "option":
          jt(e, a);
          break;
        case "select":
          as(e, a), vn("invalid", e);
          break;
        case "textarea":
          Wp(e, a), vn("invalid", e);
          break;
      }
      os(t, a);
      {
        v = /* @__PURE__ */ new Set();
        for (var g = e.attributes, b = 0; b < g.length; b++) {
          var _ = g[b].name.toLowerCase();
          switch (_) {
            case "value":
              break;
            case "checked":
              break;
            case "selected":
              break;
            default:
              v.add(g[b].name);
          }
        }
      }
      var N = null;
      for (var z in a)
        if (a.hasOwnProperty(z)) {
          var j = a[z];
          if (z === Is)
            typeof j == "string" ? e.textContent !== j && (a[bo] !== !0 && ph(e.textContent, j, s, f), N = [Is, j]) : typeof j == "number" && e.textContent !== "" + j && (a[bo] !== !0 && ph(e.textContent, j, s, f), N = [Is, "" + j]);
          else if (Zn.hasOwnProperty(z))
            j != null && (typeof j != "function" && fh(z, j), z === "onScroll" && vn("scroll", e));
          else if (f && // Convince Flow we've calculated it (it's DEV-only in this method.)
          typeof p == "boolean") {
            var se = void 0, Le = p && Fe ? null : Qn(z);
            if (a[bo] !== !0) {
              if (!(z === oh || z === bo || // Controlled attributes are not validated
              // TODO: Only ignore them on controlled tags.
              z === "value" || z === "checked" || z === "selected")) {
                if (z === Gd) {
                  var xe = e.innerHTML, gt = j ? j[sh] : void 0;
                  if (gt != null) {
                    var pt = N0(e, gt);
                    pt !== xe && qd(z, xe, pt);
                  }
                } else if (z === Qs) {
                  if (v.delete(z), M0) {
                    var k = Qm(j);
                    se = e.getAttribute("style"), k !== se && qd(z, se, k);
                  }
                } else if (p && !Fe)
                  v.delete(z.toLowerCase()), se = xa(e, z, j), j !== se && qd(z, se, j);
                else if (!sn(z, Le, p) && !At(z, j, Le, p)) {
                  var H = !1;
                  if (Le !== null)
                    v.delete(Le.attributeName), se = Ka(e, z, j, Le);
                  else {
                    var O = i;
                    if (O === Hi && (O = Qf(t)), O === Hi)
                      v.delete(z.toLowerCase());
                    else {
                      var G = HR(z);
                      G !== null && G !== z && (H = !0, v.delete(G)), v.delete(z);
                    }
                    se = xa(e, z, j);
                  }
                  var ce = Fe;
                  !ce && j !== se && !H && qd(z, se, j);
                }
              }
            }
          }
        }
      switch (f && // $FlowFixMe - Should be inferred as not undefined.
      v.size > 0 && a[bo] !== !0 && L0(v), t) {
        case "input":
          Ai(e), q(e, a, !0);
          break;
        case "textarea":
          Ai(e), sc(e);
          break;
        case "select":
        case "option":
          break;
        default:
          typeof a.onClick == "function" && vh(e);
          break;
      }
      return N;
    }
    function PR(e, t, a) {
      var i = e.nodeValue !== t;
      return i;
    }
    function _y(e, t) {
      {
        if (Ba)
          return;
        Ba = !0, S("Did not expect server HTML to contain a <%s> in <%s>.", t.nodeName.toLowerCase(), e.nodeName.toLowerCase());
      }
    }
    function xy(e, t) {
      {
        if (Ba)
          return;
        Ba = !0, S('Did not expect server HTML to contain the text node "%s" in <%s>.', t.nodeValue, e.nodeName.toLowerCase());
      }
    }
    function by(e, t, a) {
      {
        if (Ba)
          return;
        Ba = !0, S("Expected server HTML to contain a matching <%s> in <%s>.", t, e.nodeName.toLowerCase());
      }
    }
    function Dy(e, t) {
      {
        if (t === "" || Ba)
          return;
        Ba = !0, S('Expected server HTML to contain a matching text node for "%s" in <%s>.', t, e.nodeName.toLowerCase());
      }
    }
    function BR(e, t, a) {
      switch (t) {
        case "input":
          Se(e, a);
          return;
        case "textarea":
          Fm(e, a);
          return;
        case "select":
          Ip(e, a);
          return;
      }
    }
    var Xd = function() {
    }, Kd = function() {
    };
    {
      var $R = ["address", "applet", "area", "article", "aside", "base", "basefont", "bgsound", "blockquote", "body", "br", "button", "caption", "center", "col", "colgroup", "dd", "details", "dir", "div", "dl", "dt", "embed", "fieldset", "figcaption", "figure", "footer", "form", "frame", "frameset", "h1", "h2", "h3", "h4", "h5", "h6", "head", "header", "hgroup", "hr", "html", "iframe", "img", "input", "isindex", "li", "link", "listing", "main", "marquee", "menu", "menuitem", "meta", "nav", "noembed", "noframes", "noscript", "object", "ol", "p", "param", "plaintext", "pre", "script", "section", "select", "source", "style", "summary", "table", "tbody", "td", "template", "textarea", "tfoot", "th", "thead", "title", "tr", "track", "ul", "wbr", "xmp"], U0 = [
        "applet",
        "caption",
        "html",
        "table",
        "td",
        "th",
        "marquee",
        "object",
        "template",
        // https://html.spec.whatwg.org/multipage/syntax.html#html-integration-point
        // TODO: Distinguish by namespace here -- for <title>, including it here
        // errs on the side of fewer warnings
        "foreignObject",
        "desc",
        "title"
      ], YR = U0.concat(["button"]), IR = ["dd", "dt", "li", "option", "optgroup", "p", "rp", "rt"], A0 = {
        current: null,
        formTag: null,
        aTagInScope: null,
        buttonTagInScope: null,
        nobrTagInScope: null,
        pTagInButtonScope: null,
        listItemTagAutoclosing: null,
        dlItemTagAutoclosing: null
      };
      Kd = function(e, t) {
        var a = et({}, e || A0), i = {
          tag: t
        };
        return U0.indexOf(t) !== -1 && (a.aTagInScope = null, a.buttonTagInScope = null, a.nobrTagInScope = null), YR.indexOf(t) !== -1 && (a.pTagInButtonScope = null), $R.indexOf(t) !== -1 && t !== "address" && t !== "div" && t !== "p" && (a.listItemTagAutoclosing = null, a.dlItemTagAutoclosing = null), a.current = i, t === "form" && (a.formTag = i), t === "a" && (a.aTagInScope = i), t === "button" && (a.buttonTagInScope = i), t === "nobr" && (a.nobrTagInScope = i), t === "p" && (a.pTagInButtonScope = i), t === "li" && (a.listItemTagAutoclosing = i), (t === "dd" || t === "dt") && (a.dlItemTagAutoclosing = i), a;
      };
      var QR = function(e, t) {
        switch (t) {
          case "select":
            return e === "option" || e === "optgroup" || e === "#text";
          case "optgroup":
            return e === "option" || e === "#text";
          case "option":
            return e === "#text";
          case "tr":
            return e === "th" || e === "td" || e === "style" || e === "script" || e === "template";
          case "tbody":
          case "thead":
          case "tfoot":
            return e === "tr" || e === "style" || e === "script" || e === "template";
          case "colgroup":
            return e === "col" || e === "template";
          case "table":
            return e === "caption" || e === "colgroup" || e === "tbody" || e === "tfoot" || e === "thead" || e === "style" || e === "script" || e === "template";
          case "head":
            return e === "base" || e === "basefont" || e === "bgsound" || e === "link" || e === "meta" || e === "title" || e === "noscript" || e === "noframes" || e === "style" || e === "script" || e === "template";
          case "html":
            return e === "head" || e === "body" || e === "frameset";
          case "frameset":
            return e === "frame";
          case "#document":
            return e === "html";
        }
        switch (e) {
          case "h1":
          case "h2":
          case "h3":
          case "h4":
          case "h5":
          case "h6":
            return t !== "h1" && t !== "h2" && t !== "h3" && t !== "h4" && t !== "h5" && t !== "h6";
          case "rp":
          case "rt":
            return IR.indexOf(t) === -1;
          case "body":
          case "caption":
          case "col":
          case "colgroup":
          case "frameset":
          case "frame":
          case "head":
          case "html":
          case "tbody":
          case "td":
          case "tfoot":
          case "th":
          case "thead":
          case "tr":
            return t == null;
        }
        return !0;
      }, WR = function(e, t) {
        switch (e) {
          case "address":
          case "article":
          case "aside":
          case "blockquote":
          case "center":
          case "details":
          case "dialog":
          case "dir":
          case "div":
          case "dl":
          case "fieldset":
          case "figcaption":
          case "figure":
          case "footer":
          case "header":
          case "hgroup":
          case "main":
          case "menu":
          case "nav":
          case "ol":
          case "p":
          case "section":
          case "summary":
          case "ul":
          case "pre":
          case "listing":
          case "table":
          case "hr":
          case "xmp":
          case "h1":
          case "h2":
          case "h3":
          case "h4":
          case "h5":
          case "h6":
            return t.pTagInButtonScope;
          case "form":
            return t.formTag || t.pTagInButtonScope;
          case "li":
            return t.listItemTagAutoclosing;
          case "dd":
          case "dt":
            return t.dlItemTagAutoclosing;
          case "button":
            return t.buttonTagInScope;
          case "a":
            return t.aTagInScope;
          case "nobr":
            return t.nobrTagInScope;
        }
        return null;
      }, F0 = {};
      Xd = function(e, t, a) {
        a = a || A0;
        var i = a.current, u = i && i.tag;
        t != null && (e != null && S("validateDOMNesting: when childText is passed, childTag should be null"), e = "#text");
        var s = QR(e, u) ? null : i, f = s ? null : WR(e, a), p = s || f;
        if (p) {
          var v = p.tag, y = !!s + "|" + e + "|" + v;
          if (!F0[y]) {
            F0[y] = !0;
            var g = e, b = "";
            if (e === "#text" ? /\S/.test(t) ? g = "Text nodes" : (g = "Whitespace text nodes", b = " Make sure you don't have any extra whitespace between tags on each line of your source code.") : g = "<" + e + ">", s) {
              var _ = "";
              v === "table" && e === "tr" && (_ += " Add a <tbody>, <thead> or <tfoot> to your code to match the DOM tree generated by the browser."), S("validateDOMNesting(...): %s cannot appear as a child of <%s>.%s%s", g, v, b, _);
            } else
              S("validateDOMNesting(...): %s cannot appear as a descendant of <%s>.", g, v);
          }
        }
      };
    }
    var hh = "suppressHydrationWarning", mh = "$", yh = "/$", Zd = "$?", Jd = "$!", GR = "style", ky = null, Oy = null;
    function qR(e) {
      var t, a, i = e.nodeType;
      switch (i) {
        case pa:
        case Gf: {
          t = i === pa ? "#document" : "#fragment";
          var u = e.documentElement;
          a = u ? u.namespaceURI : Wf(null, "");
          break;
        }
        default: {
          var s = i === yn ? e.parentNode : e, f = s.namespaceURI || null;
          t = s.tagName, a = Wf(f, t);
          break;
        }
      }
      {
        var p = t.toLowerCase(), v = Kd(null, p);
        return {
          namespace: a,
          ancestorInfo: v
        };
      }
    }
    function XR(e, t, a) {
      {
        var i = e, u = Wf(i.namespace, t), s = Kd(i.ancestorInfo, t);
        return {
          namespace: u,
          ancestorInfo: s
        };
      }
    }
    function fD(e) {
      return e;
    }
    function KR(e) {
      ky = Eo(), Oy = fR();
      var t = null;
      return ea(!1), t;
    }
    function ZR(e) {
      dR(Oy), ea(ky), ky = null, Oy = null;
    }
    function JR(e, t, a, i, u) {
      var s;
      {
        var f = i;
        if (Xd(e, null, f.ancestorInfo), typeof t.children == "string" || typeof t.children == "number") {
          var p = "" + t.children, v = Kd(f.ancestorInfo, e);
          Xd(null, p, v);
        }
        s = f.namespace;
      }
      var y = zR(e, t, a, s);
      return np(u, y), jy(y, t), y;
    }
    function eT(e, t) {
      e.appendChild(t);
    }
    function tT(e, t, a, i, u) {
      switch (AR(e, t, a, i), t) {
        case "button":
        case "input":
        case "select":
        case "textarea":
          return !!a.autoFocus;
        case "img":
          return !0;
        default:
          return !1;
      }
    }
    function nT(e, t, a, i, u, s) {
      {
        var f = s;
        if (typeof i.children != typeof a.children && (typeof i.children == "string" || typeof i.children == "number")) {
          var p = "" + i.children, v = Kd(f.ancestorInfo, t);
          Xd(null, p, v);
        }
      }
      return FR(e, t, a, i);
    }
    function Ly(e, t) {
      return e === "textarea" || e === "noscript" || typeof t.children == "string" || typeof t.children == "number" || typeof t.dangerouslySetInnerHTML == "object" && t.dangerouslySetInnerHTML !== null && t.dangerouslySetInnerHTML.__html != null;
    }
    function rT(e, t, a, i) {
      {
        var u = a;
        Xd(null, e, u.ancestorInfo);
      }
      var s = UR(e, t);
      return np(i, s), s;
    }
    function aT() {
      var e = window.event;
      return e === void 0 ? Ei : Zc(e.type);
    }
    var My = typeof setTimeout == "function" ? setTimeout : void 0, iT = typeof clearTimeout == "function" ? clearTimeout : void 0, Ny = -1, j0 = typeof Promise == "function" ? Promise : void 0, lT = typeof queueMicrotask == "function" ? queueMicrotask : typeof j0 < "u" ? function(e) {
      return j0.resolve(null).then(e).catch(uT);
    } : My;
    function uT(e) {
      setTimeout(function() {
        throw e;
      });
    }
    function oT(e, t, a, i) {
      switch (t) {
        case "button":
        case "input":
        case "select":
        case "textarea":
          a.autoFocus && e.focus();
          return;
        case "img": {
          a.src && (e.src = a.src);
          return;
        }
      }
    }
    function sT(e, t, a, i, u, s) {
      jR(e, t, a, i, u), jy(e, u);
    }
    function H0(e) {
      is(e, "");
    }
    function cT(e, t, a) {
      e.nodeValue = a;
    }
    function fT(e, t) {
      e.appendChild(t);
    }
    function dT(e, t) {
      var a;
      e.nodeType === yn ? (a = e.parentNode, a.insertBefore(t, e)) : (a = e, a.appendChild(t));
      var i = e._reactRootContainer;
      i == null && a.onclick === null && vh(a);
    }
    function pT(e, t, a) {
      e.insertBefore(t, a);
    }
    function vT(e, t, a) {
      e.nodeType === yn ? e.parentNode.insertBefore(t, a) : e.insertBefore(t, a);
    }
    function hT(e, t) {
      e.removeChild(t);
    }
    function mT(e, t) {
      e.nodeType === yn ? e.parentNode.removeChild(t) : e.removeChild(t);
    }
    function zy(e, t) {
      var a = t, i = 0;
      do {
        var u = a.nextSibling;
        if (e.removeChild(a), u && u.nodeType === yn) {
          var s = u.data;
          if (s === yh)
            if (i === 0) {
              e.removeChild(u), Cn(t);
              return;
            } else
              i--;
          else
            (s === mh || s === Zd || s === Jd) && i++;
        }
        a = u;
      } while (a);
      Cn(t);
    }
    function yT(e, t) {
      e.nodeType === yn ? zy(e.parentNode, t) : e.nodeType === Yr && zy(e, t), Cn(e);
    }
    function gT(e) {
      e = e;
      var t = e.style;
      typeof t.setProperty == "function" ? t.setProperty("display", "none", "important") : t.display = "none";
    }
    function ST(e) {
      e.nodeValue = "";
    }
    function ET(e, t) {
      e = e;
      var a = t[GR], i = a != null && a.hasOwnProperty("display") ? a.display : null;
      e.style.display = Sl("display", i);
    }
    function CT(e, t) {
      e.nodeValue = t;
    }
    function RT(e) {
      e.nodeType === Yr ? e.textContent = "" : e.nodeType === pa && e.documentElement && e.removeChild(e.documentElement);
    }
    function TT(e, t, a) {
      return e.nodeType !== Yr || t.toLowerCase() !== e.nodeName.toLowerCase() ? null : e;
    }
    function wT(e, t) {
      return t === "" || e.nodeType !== Vi ? null : e;
    }
    function _T(e) {
      return e.nodeType !== yn ? null : e;
    }
    function V0(e) {
      return e.data === Zd;
    }
    function Uy(e) {
      return e.data === Jd;
    }
    function xT(e) {
      var t = e.nextSibling && e.nextSibling.dataset, a, i, u;
      return t && (a = t.dgst, i = t.msg, u = t.stck), {
        message: i,
        digest: a,
        stack: u
      };
    }
    function bT(e, t) {
      e._reactRetry = t;
    }
    function gh(e) {
      for (; e != null; e = e.nextSibling) {
        var t = e.nodeType;
        if (t === Yr || t === Vi)
          break;
        if (t === yn) {
          var a = e.data;
          if (a === mh || a === Jd || a === Zd)
            break;
          if (a === yh)
            return null;
        }
      }
      return e;
    }
    function ep(e) {
      return gh(e.nextSibling);
    }
    function DT(e) {
      return gh(e.firstChild);
    }
    function kT(e) {
      return gh(e.firstChild);
    }
    function OT(e) {
      return gh(e.nextSibling);
    }
    function LT(e, t, a, i, u, s, f) {
      np(s, e), jy(e, a);
      var p;
      {
        var v = u;
        p = v.namespace;
      }
      var y = (s.mode & _e) !== Oe;
      return VR(e, t, a, p, i, y, f);
    }
    function MT(e, t, a, i) {
      return np(a, e), a.mode & _e, PR(e, t);
    }
    function NT(e, t) {
      np(t, e);
    }
    function zT(e) {
      for (var t = e.nextSibling, a = 0; t; ) {
        if (t.nodeType === yn) {
          var i = t.data;
          if (i === yh) {
            if (a === 0)
              return ep(t);
            a--;
          } else
            (i === mh || i === Jd || i === Zd) && a++;
        }
        t = t.nextSibling;
      }
      return null;
    }
    function P0(e) {
      for (var t = e.previousSibling, a = 0; t; ) {
        if (t.nodeType === yn) {
          var i = t.data;
          if (i === mh || i === Jd || i === Zd) {
            if (a === 0)
              return t;
            a--;
          } else
            i === yh && a++;
        }
        t = t.previousSibling;
      }
      return null;
    }
    function UT(e) {
      Cn(e);
    }
    function AT(e) {
      Cn(e);
    }
    function FT(e) {
      return e !== "head" && e !== "body";
    }
    function jT(e, t, a, i) {
      var u = !0;
      ph(t.nodeValue, a, i, u);
    }
    function HT(e, t, a, i, u, s) {
      if (t[hh] !== !0) {
        var f = !0;
        ph(i.nodeValue, u, s, f);
      }
    }
    function VT(e, t) {
      t.nodeType === Yr ? _y(e, t) : t.nodeType === yn || xy(e, t);
    }
    function PT(e, t) {
      {
        var a = e.parentNode;
        a !== null && (t.nodeType === Yr ? _y(a, t) : t.nodeType === yn || xy(a, t));
      }
    }
    function BT(e, t, a, i, u) {
      (u || t[hh] !== !0) && (i.nodeType === Yr ? _y(a, i) : i.nodeType === yn || xy(a, i));
    }
    function $T(e, t, a) {
      by(e, t);
    }
    function YT(e, t) {
      Dy(e, t);
    }
    function IT(e, t, a) {
      {
        var i = e.parentNode;
        i !== null && by(i, t);
      }
    }
    function QT(e, t) {
      {
        var a = e.parentNode;
        a !== null && Dy(a, t);
      }
    }
    function WT(e, t, a, i, u, s) {
      (s || t[hh] !== !0) && by(a, i);
    }
    function GT(e, t, a, i, u) {
      (u || t[hh] !== !0) && Dy(a, i);
    }
    function qT(e) {
      S("An error occurred during hydration. The server HTML was replaced with client content in <%s>.", e.nodeName.toLowerCase());
    }
    function XT(e) {
      Qd(e);
    }
    var yf = Math.random().toString(36).slice(2), gf = "__reactFiber$" + yf, Ay = "__reactProps$" + yf, tp = "__reactContainer$" + yf, Fy = "__reactEvents$" + yf, KT = "__reactListeners$" + yf, ZT = "__reactHandles$" + yf;
    function JT(e) {
      delete e[gf], delete e[Ay], delete e[Fy], delete e[KT], delete e[ZT];
    }
    function np(e, t) {
      t[gf] = e;
    }
    function Sh(e, t) {
      t[tp] = e;
    }
    function B0(e) {
      e[tp] = null;
    }
    function rp(e) {
      return !!e[tp];
    }
    function Ws(e) {
      var t = e[gf];
      if (t)
        return t;
      for (var a = e.parentNode; a; ) {
        if (t = a[tp] || a[gf], t) {
          var i = t.alternate;
          if (t.child !== null || i !== null && i.child !== null)
            for (var u = P0(e); u !== null; ) {
              var s = u[gf];
              if (s)
                return s;
              u = P0(u);
            }
          return t;
        }
        e = a, a = e.parentNode;
      }
      return null;
    }
    function Do(e) {
      var t = e[gf] || e[tp];
      return t && (t.tag === ae || t.tag === Ce || t.tag === Re || t.tag === te) ? t : null;
    }
    function Sf(e) {
      if (e.tag === ae || e.tag === Ce)
        return e.stateNode;
      throw new Error("getNodeFromInstance: Invalid argument.");
    }
    function Eh(e) {
      return e[Ay] || null;
    }
    function jy(e, t) {
      e[Ay] = t;
    }
    function ew(e) {
      var t = e[Fy];
      return t === void 0 && (t = e[Fy] = /* @__PURE__ */ new Set()), t;
    }
    var $0 = {}, Y0 = Tt.ReactDebugCurrentFrame;
    function Ch(e) {
      if (e) {
        var t = e._owner, a = vt(e.type, e._source, t ? t.type : null);
        Y0.setExtraStackFrame(a);
      } else
        Y0.setExtraStackFrame(null);
    }
    function Ji(e, t, a, i, u) {
      {
        var s = Function.call.bind(er);
        for (var f in e)
          if (s(e, f)) {
            var p = void 0;
            try {
              if (typeof e[f] != "function") {
                var v = Error((i || "React class") + ": " + a + " type `" + f + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof e[f] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.");
                throw v.name = "Invariant Violation", v;
              }
              p = e[f](t, f, i, a, null, "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED");
            } catch (y) {
              p = y;
            }
            p && !(p instanceof Error) && (Ch(u), S("%s: type specification of %s `%s` is invalid; the type checker function must return `null` or an `Error` but returned a %s. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).", i || "React class", a, f, typeof p), Ch(null)), p instanceof Error && !(p.message in $0) && ($0[p.message] = !0, Ch(u), S("Failed %s type: %s", a, p.message), Ch(null));
          }
      }
    }
    var Hy = [], Rh;
    Rh = [];
    var xu = -1;
    function ko(e) {
      return {
        current: e
      };
    }
    function ta(e, t) {
      if (xu < 0) {
        S("Unexpected pop.");
        return;
      }
      t !== Rh[xu] && S("Unexpected Fiber popped."), e.current = Hy[xu], Hy[xu] = null, Rh[xu] = null, xu--;
    }
    function na(e, t, a) {
      xu++, Hy[xu] = e.current, Rh[xu] = a, e.current = t;
    }
    var Vy;
    Vy = {};
    var ii = {};
    Object.freeze(ii);
    var bu = ko(ii), jl = ko(!1), Py = ii;
    function Ef(e, t, a) {
      return a && Hl(t) ? Py : bu.current;
    }
    function I0(e, t, a) {
      {
        var i = e.stateNode;
        i.__reactInternalMemoizedUnmaskedChildContext = t, i.__reactInternalMemoizedMaskedChildContext = a;
      }
    }
    function Cf(e, t) {
      {
        var a = e.type, i = a.contextTypes;
        if (!i)
          return ii;
        var u = e.stateNode;
        if (u && u.__reactInternalMemoizedUnmaskedChildContext === t)
          return u.__reactInternalMemoizedMaskedChildContext;
        var s = {};
        for (var f in i)
          s[f] = t[f];
        {
          var p = Ye(e) || "Unknown";
          Ji(i, s, "context", p);
        }
        return u && I0(e, t, s), s;
      }
    }
    function Th() {
      return jl.current;
    }
    function Hl(e) {
      {
        var t = e.childContextTypes;
        return t != null;
      }
    }
    function wh(e) {
      ta(jl, e), ta(bu, e);
    }
    function By(e) {
      ta(jl, e), ta(bu, e);
    }
    function Q0(e, t, a) {
      {
        if (bu.current !== ii)
          throw new Error("Unexpected context found on stack. This error is likely caused by a bug in React. Please file an issue.");
        na(bu, t, e), na(jl, a, e);
      }
    }
    function W0(e, t, a) {
      {
        var i = e.stateNode, u = t.childContextTypes;
        if (typeof i.getChildContext != "function") {
          {
            var s = Ye(e) || "Unknown";
            Vy[s] || (Vy[s] = !0, S("%s.childContextTypes is specified but there is no getChildContext() method on the instance. You can either define getChildContext() on %s or remove childContextTypes from it.", s, s));
          }
          return a;
        }
        var f = i.getChildContext();
        for (var p in f)
          if (!(p in u))
            throw new Error((Ye(e) || "Unknown") + '.getChildContext(): key "' + p + '" is not defined in childContextTypes.');
        {
          var v = Ye(e) || "Unknown";
          Ji(u, f, "child context", v);
        }
        return et({}, a, f);
      }
    }
    function _h(e) {
      {
        var t = e.stateNode, a = t && t.__reactInternalMemoizedMergedChildContext || ii;
        return Py = bu.current, na(bu, a, e), na(jl, jl.current, e), !0;
      }
    }
    function G0(e, t, a) {
      {
        var i = e.stateNode;
        if (!i)
          throw new Error("Expected to have an instance by this point. This error is likely caused by a bug in React. Please file an issue.");
        if (a) {
          var u = W0(e, t, Py);
          i.__reactInternalMemoizedMergedChildContext = u, ta(jl, e), ta(bu, e), na(bu, u, e), na(jl, a, e);
        } else
          ta(jl, e), na(jl, a, e);
      }
    }
    function tw(e) {
      {
        if (!ma(e) || e.tag !== fe)
          throw new Error("Expected subtree parent to be a mounted class component. This error is likely caused by a bug in React. Please file an issue.");
        var t = e;
        do {
          switch (t.tag) {
            case te:
              return t.stateNode.context;
            case fe: {
              var a = t.type;
              if (Hl(a))
                return t.stateNode.__reactInternalMemoizedMergedChildContext;
              break;
            }
          }
          t = t.return;
        } while (t !== null);
        throw new Error("Found unexpected detached subtree parent. This error is likely caused by a bug in React. Please file an issue.");
      }
    }
    var Oo = 0, xh = 1, Du = null, $y = !1, Yy = !1;
    function q0(e) {
      Du === null ? Du = [e] : Du.push(e);
    }
    function nw(e) {
      $y = !0, q0(e);
    }
    function X0() {
      $y && Lo();
    }
    function Lo() {
      if (!Yy && Du !== null) {
        Yy = !0;
        var e = 0, t = Fa();
        try {
          var a = !0, i = Du;
          for (En(kn); e < i.length; e++) {
            var u = i[e];
            do
              u = u(a);
            while (u !== null);
          }
          Du = null, $y = !1;
        } catch (s) {
          throw Du !== null && (Du = Du.slice(e + 1)), vd(qr, Lo), s;
        } finally {
          En(t), Yy = !1;
        }
      }
      return null;
    }
    var Rf = [], Tf = 0, bh = null, Dh = 0, wi = [], _i = 0, Gs = null, ku = 1, Ou = "";
    function rw(e) {
      return Xs(), (e.flags & Cv) !== ke;
    }
    function aw(e) {
      return Xs(), Dh;
    }
    function iw() {
      var e = Ou, t = ku, a = t & ~lw(t);
      return a.toString(32) + e;
    }
    function qs(e, t) {
      Xs(), Rf[Tf++] = Dh, Rf[Tf++] = bh, bh = e, Dh = t;
    }
    function K0(e, t, a) {
      Xs(), wi[_i++] = ku, wi[_i++] = Ou, wi[_i++] = Gs, Gs = e;
      var i = ku, u = Ou, s = kh(i) - 1, f = i & ~(1 << s), p = a + 1, v = kh(t) + s;
      if (v > 30) {
        var y = s - s % 5, g = (1 << y) - 1, b = (f & g).toString(32), _ = f >> y, N = s - y, z = kh(t) + N, j = p << N, se = j | _, Le = b + u;
        ku = 1 << z | se, Ou = Le;
      } else {
        var xe = p << s, gt = xe | f, pt = u;
        ku = 1 << v | gt, Ou = pt;
      }
    }
    function Iy(e) {
      Xs();
      var t = e.return;
      if (t !== null) {
        var a = 1, i = 0;
        qs(e, a), K0(e, a, i);
      }
    }
    function kh(e) {
      return 32 - ws(e);
    }
    function lw(e) {
      return 1 << kh(e) - 1;
    }
    function Qy(e) {
      for (; e === bh; )
        bh = Rf[--Tf], Rf[Tf] = null, Dh = Rf[--Tf], Rf[Tf] = null;
      for (; e === Gs; )
        Gs = wi[--_i], wi[_i] = null, Ou = wi[--_i], wi[_i] = null, ku = wi[--_i], wi[_i] = null;
    }
    function uw() {
      return Xs(), Gs !== null ? {
        id: ku,
        overflow: Ou
      } : null;
    }
    function ow(e, t) {
      Xs(), wi[_i++] = ku, wi[_i++] = Ou, wi[_i++] = Gs, ku = t.id, Ou = t.overflow, Gs = e;
    }
    function Xs() {
      kr() || S("Expected to be hydrating. This is a bug in React. Please file an issue.");
    }
    var Dr = null, xi = null, el = !1, Ks = !1, Mo = null;
    function sw() {
      el && S("We should not be hydrating here. This is a bug in React. Please file a bug.");
    }
    function Z0() {
      Ks = !0;
    }
    function cw() {
      return Ks;
    }
    function fw(e) {
      var t = e.stateNode.containerInfo;
      return xi = kT(t), Dr = e, el = !0, Mo = null, Ks = !1, !0;
    }
    function dw(e, t, a) {
      return xi = OT(t), Dr = e, el = !0, Mo = null, Ks = !1, a !== null && ow(e, a), !0;
    }
    function J0(e, t) {
      switch (e.tag) {
        case te: {
          VT(e.stateNode.containerInfo, t);
          break;
        }
        case ae: {
          var a = (e.mode & _e) !== Oe;
          BT(
            e.type,
            e.memoizedProps,
            e.stateNode,
            t,
            // TODO: Delete this argument when we remove the legacy root API.
            a
          );
          break;
        }
        case Re: {
          var i = e.memoizedState;
          i.dehydrated !== null && PT(i.dehydrated, t);
          break;
        }
      }
    }
    function eE(e, t) {
      J0(e, t);
      var a = hb();
      a.stateNode = t, a.return = e;
      var i = e.deletions;
      i === null ? (e.deletions = [a], e.flags |= bt) : i.push(a);
    }
    function Wy(e, t) {
      {
        if (Ks)
          return;
        switch (e.tag) {
          case te: {
            var a = e.stateNode.containerInfo;
            switch (t.tag) {
              case ae:
                var i = t.type;
                t.pendingProps, $T(a, i);
                break;
              case Ce:
                var u = t.pendingProps;
                YT(a, u);
                break;
            }
            break;
          }
          case ae: {
            var s = e.type, f = e.memoizedProps, p = e.stateNode;
            switch (t.tag) {
              case ae: {
                var v = t.type, y = t.pendingProps, g = (e.mode & _e) !== Oe;
                WT(
                  s,
                  f,
                  p,
                  v,
                  y,
                  // TODO: Delete this argument when we remove the legacy root API.
                  g
                );
                break;
              }
              case Ce: {
                var b = t.pendingProps, _ = (e.mode & _e) !== Oe;
                GT(
                  s,
                  f,
                  p,
                  b,
                  // TODO: Delete this argument when we remove the legacy root API.
                  _
                );
                break;
              }
            }
            break;
          }
          case Re: {
            var N = e.memoizedState, z = N.dehydrated;
            if (z !== null)
              switch (t.tag) {
                case ae:
                  var j = t.type;
                  t.pendingProps, IT(z, j);
                  break;
                case Ce:
                  var se = t.pendingProps;
                  QT(z, se);
                  break;
              }
            break;
          }
          default:
            return;
        }
      }
    }
    function tE(e, t) {
      t.flags = t.flags & ~hi | $t, Wy(e, t);
    }
    function nE(e, t) {
      switch (e.tag) {
        case ae: {
          var a = e.type;
          e.pendingProps;
          var i = TT(t, a);
          return i !== null ? (e.stateNode = i, Dr = e, xi = DT(i), !0) : !1;
        }
        case Ce: {
          var u = e.pendingProps, s = wT(t, u);
          return s !== null ? (e.stateNode = s, Dr = e, xi = null, !0) : !1;
        }
        case Re: {
          var f = _T(t);
          if (f !== null) {
            var p = {
              dehydrated: f,
              treeContext: uw(),
              retryLane: Sa
            };
            e.memoizedState = p;
            var v = mb(f);
            return v.return = e, e.child = v, Dr = e, xi = null, !0;
          }
          return !1;
        }
        default:
          return !1;
      }
    }
    function Gy(e) {
      return (e.mode & _e) !== Oe && (e.flags & Qe) === ke;
    }
    function qy(e) {
      throw new Error("Hydration failed because the initial UI does not match what was rendered on the server.");
    }
    function Xy(e) {
      if (el) {
        var t = xi;
        if (!t) {
          Gy(e) && (Wy(Dr, e), qy()), tE(Dr, e), el = !1, Dr = e;
          return;
        }
        var a = t;
        if (!nE(e, t)) {
          Gy(e) && (Wy(Dr, e), qy()), t = ep(a);
          var i = Dr;
          if (!t || !nE(e, t)) {
            tE(Dr, e), el = !1, Dr = e;
            return;
          }
          eE(i, a);
        }
      }
    }
    function pw(e, t, a) {
      var i = e.stateNode, u = !Ks, s = LT(i, e.type, e.memoizedProps, t, a, e, u);
      return e.updateQueue = s, s !== null;
    }
    function vw(e) {
      var t = e.stateNode, a = e.memoizedProps, i = MT(t, a, e);
      if (i) {
        var u = Dr;
        if (u !== null)
          switch (u.tag) {
            case te: {
              var s = u.stateNode.containerInfo, f = (u.mode & _e) !== Oe;
              jT(
                s,
                t,
                a,
                // TODO: Delete this argument when we remove the legacy root API.
                f
              );
              break;
            }
            case ae: {
              var p = u.type, v = u.memoizedProps, y = u.stateNode, g = (u.mode & _e) !== Oe;
              HT(
                p,
                v,
                y,
                t,
                a,
                // TODO: Delete this argument when we remove the legacy root API.
                g
              );
              break;
            }
          }
      }
      return i;
    }
    function hw(e) {
      var t = e.memoizedState, a = t !== null ? t.dehydrated : null;
      if (!a)
        throw new Error("Expected to have a hydrated suspense instance. This error is likely caused by a bug in React. Please file an issue.");
      NT(a, e);
    }
    function mw(e) {
      var t = e.memoizedState, a = t !== null ? t.dehydrated : null;
      if (!a)
        throw new Error("Expected to have a hydrated suspense instance. This error is likely caused by a bug in React. Please file an issue.");
      return zT(a);
    }
    function rE(e) {
      for (var t = e.return; t !== null && t.tag !== ae && t.tag !== te && t.tag !== Re; )
        t = t.return;
      Dr = t;
    }
    function Oh(e) {
      if (e !== Dr)
        return !1;
      if (!el)
        return rE(e), el = !0, !1;
      if (e.tag !== te && (e.tag !== ae || FT(e.type) && !Ly(e.type, e.memoizedProps))) {
        var t = xi;
        if (t)
          if (Gy(e))
            aE(e), qy();
          else
            for (; t; )
              eE(e, t), t = ep(t);
      }
      return rE(e), e.tag === Re ? xi = mw(e) : xi = Dr ? ep(e.stateNode) : null, !0;
    }
    function yw() {
      return el && xi !== null;
    }
    function aE(e) {
      for (var t = xi; t; )
        J0(e, t), t = ep(t);
    }
    function wf() {
      Dr = null, xi = null, el = !1, Ks = !1;
    }
    function iE() {
      Mo !== null && (JC(Mo), Mo = null);
    }
    function kr() {
      return el;
    }
    function Ky(e) {
      Mo === null ? Mo = [e] : Mo.push(e);
    }
    var gw = Tt.ReactCurrentBatchConfig, Sw = null;
    function Ew() {
      return gw.transition;
    }
    var tl = {
      recordUnsafeLifecycleWarnings: function(e, t) {
      },
      flushPendingUnsafeLifecycleWarnings: function() {
      },
      recordLegacyContextWarning: function(e, t) {
      },
      flushLegacyContextWarning: function() {
      },
      discardPendingWarnings: function() {
      }
    };
    {
      var Cw = function(e) {
        for (var t = null, a = e; a !== null; )
          a.mode & gn && (t = a), a = a.return;
        return t;
      }, Zs = function(e) {
        var t = [];
        return e.forEach(function(a) {
          t.push(a);
        }), t.sort().join(", ");
      }, ap = [], ip = [], lp = [], up = [], op = [], sp = [], Js = /* @__PURE__ */ new Set();
      tl.recordUnsafeLifecycleWarnings = function(e, t) {
        Js.has(e.type) || (typeof t.componentWillMount == "function" && // Don't warn about react-lifecycles-compat polyfilled components.
        t.componentWillMount.__suppressDeprecationWarning !== !0 && ap.push(e), e.mode & gn && typeof t.UNSAFE_componentWillMount == "function" && ip.push(e), typeof t.componentWillReceiveProps == "function" && t.componentWillReceiveProps.__suppressDeprecationWarning !== !0 && lp.push(e), e.mode & gn && typeof t.UNSAFE_componentWillReceiveProps == "function" && up.push(e), typeof t.componentWillUpdate == "function" && t.componentWillUpdate.__suppressDeprecationWarning !== !0 && op.push(e), e.mode & gn && typeof t.UNSAFE_componentWillUpdate == "function" && sp.push(e));
      }, tl.flushPendingUnsafeLifecycleWarnings = function() {
        var e = /* @__PURE__ */ new Set();
        ap.length > 0 && (ap.forEach(function(_) {
          e.add(Ye(_) || "Component"), Js.add(_.type);
        }), ap = []);
        var t = /* @__PURE__ */ new Set();
        ip.length > 0 && (ip.forEach(function(_) {
          t.add(Ye(_) || "Component"), Js.add(_.type);
        }), ip = []);
        var a = /* @__PURE__ */ new Set();
        lp.length > 0 && (lp.forEach(function(_) {
          a.add(Ye(_) || "Component"), Js.add(_.type);
        }), lp = []);
        var i = /* @__PURE__ */ new Set();
        up.length > 0 && (up.forEach(function(_) {
          i.add(Ye(_) || "Component"), Js.add(_.type);
        }), up = []);
        var u = /* @__PURE__ */ new Set();
        op.length > 0 && (op.forEach(function(_) {
          u.add(Ye(_) || "Component"), Js.add(_.type);
        }), op = []);
        var s = /* @__PURE__ */ new Set();
        if (sp.length > 0 && (sp.forEach(function(_) {
          s.add(Ye(_) || "Component"), Js.add(_.type);
        }), sp = []), t.size > 0) {
          var f = Zs(t);
          S(`Using UNSAFE_componentWillMount in strict mode is not recommended and may indicate bugs in your code. See https://reactjs.org/link/unsafe-component-lifecycles for details.

* Move code with side effects to componentDidMount, and set initial state in the constructor.

Please update the following components: %s`, f);
        }
        if (i.size > 0) {
          var p = Zs(i);
          S(`Using UNSAFE_componentWillReceiveProps in strict mode is not recommended and may indicate bugs in your code. See https://reactjs.org/link/unsafe-component-lifecycles for details.

* Move data fetching code or side effects to componentDidUpdate.
* If you're updating state whenever props change, refactor your code to use memoization techniques or move it to static getDerivedStateFromProps. Learn more at: https://reactjs.org/link/derived-state

Please update the following components: %s`, p);
        }
        if (s.size > 0) {
          var v = Zs(s);
          S(`Using UNSAFE_componentWillUpdate in strict mode is not recommended and may indicate bugs in your code. See https://reactjs.org/link/unsafe-component-lifecycles for details.

* Move data fetching code or side effects to componentDidUpdate.

Please update the following components: %s`, v);
        }
        if (e.size > 0) {
          var y = Zs(e);
          nt(`componentWillMount has been renamed, and is not recommended for use. See https://reactjs.org/link/unsafe-component-lifecycles for details.

* Move code with side effects to componentDidMount, and set initial state in the constructor.
* Rename componentWillMount to UNSAFE_componentWillMount to suppress this warning in non-strict mode. In React 18.x, only the UNSAFE_ name will work. To rename all deprecated lifecycles to their new names, you can run \`npx react-codemod rename-unsafe-lifecycles\` in your project source folder.

Please update the following components: %s`, y);
        }
        if (a.size > 0) {
          var g = Zs(a);
          nt(`componentWillReceiveProps has been renamed, and is not recommended for use. See https://reactjs.org/link/unsafe-component-lifecycles for details.

* Move data fetching code or side effects to componentDidUpdate.
* If you're updating state whenever props change, refactor your code to use memoization techniques or move it to static getDerivedStateFromProps. Learn more at: https://reactjs.org/link/derived-state
* Rename componentWillReceiveProps to UNSAFE_componentWillReceiveProps to suppress this warning in non-strict mode. In React 18.x, only the UNSAFE_ name will work. To rename all deprecated lifecycles to their new names, you can run \`npx react-codemod rename-unsafe-lifecycles\` in your project source folder.

Please update the following components: %s`, g);
        }
        if (u.size > 0) {
          var b = Zs(u);
          nt(`componentWillUpdate has been renamed, and is not recommended for use. See https://reactjs.org/link/unsafe-component-lifecycles for details.

* Move data fetching code or side effects to componentDidUpdate.
* Rename componentWillUpdate to UNSAFE_componentWillUpdate to suppress this warning in non-strict mode. In React 18.x, only the UNSAFE_ name will work. To rename all deprecated lifecycles to their new names, you can run \`npx react-codemod rename-unsafe-lifecycles\` in your project source folder.

Please update the following components: %s`, b);
        }
      };
      var Lh = /* @__PURE__ */ new Map(), lE = /* @__PURE__ */ new Set();
      tl.recordLegacyContextWarning = function(e, t) {
        var a = Cw(e);
        if (a === null) {
          S("Expected to find a StrictMode component in a strict mode tree. This error is likely caused by a bug in React. Please file an issue.");
          return;
        }
        if (!lE.has(e.type)) {
          var i = Lh.get(a);
          (e.type.contextTypes != null || e.type.childContextTypes != null || t !== null && typeof t.getChildContext == "function") && (i === void 0 && (i = [], Lh.set(a, i)), i.push(e));
        }
      }, tl.flushLegacyContextWarning = function() {
        Lh.forEach(function(e, t) {
          if (e.length !== 0) {
            var a = e[0], i = /* @__PURE__ */ new Set();
            e.forEach(function(s) {
              i.add(Ye(s) || "Component"), lE.add(s.type);
            });
            var u = Zs(i);
            try {
              fn(a), S(`Legacy context API has been detected within a strict-mode tree.

The old API will be supported in all 16.x releases, but applications using it should migrate to the new version.

Please update the following components: %s

Learn more about this warning here: https://reactjs.org/link/legacy-context`, u);
            } finally {
              Jt();
            }
          }
        });
      }, tl.discardPendingWarnings = function() {
        ap = [], ip = [], lp = [], up = [], op = [], sp = [], Lh = /* @__PURE__ */ new Map();
      };
    }
    function nl(e, t) {
      if (e && e.defaultProps) {
        var a = et({}, t), i = e.defaultProps;
        for (var u in i)
          a[u] === void 0 && (a[u] = i[u]);
        return a;
      }
      return t;
    }
    var Zy = ko(null), Jy;
    Jy = {};
    var Mh = null, _f = null, eg = null, Nh = !1;
    function zh() {
      Mh = null, _f = null, eg = null, Nh = !1;
    }
    function uE() {
      Nh = !0;
    }
    function oE() {
      Nh = !1;
    }
    function sE(e, t, a) {
      na(Zy, t._currentValue, e), t._currentValue = a, t._currentRenderer !== void 0 && t._currentRenderer !== null && t._currentRenderer !== Jy && S("Detected multiple renderers concurrently rendering the same context provider. This is currently unsupported."), t._currentRenderer = Jy;
    }
    function tg(e, t) {
      var a = Zy.current;
      ta(Zy, t), e._currentValue = a;
    }
    function ng(e, t, a) {
      for (var i = e; i !== null; ) {
        var u = i.alternate;
        if (gu(i.childLanes, t) ? u !== null && !gu(u.childLanes, t) && (u.childLanes = qe(u.childLanes, t)) : (i.childLanes = qe(i.childLanes, t), u !== null && (u.childLanes = qe(u.childLanes, t))), i === a)
          break;
        i = i.return;
      }
      i !== a && S("Expected to find the propagation root when scheduling context work. This error is likely caused by a bug in React. Please file an issue.");
    }
    function Rw(e, t, a) {
      Tw(e, t, a);
    }
    function Tw(e, t, a) {
      var i = e.child;
      for (i !== null && (i.return = e); i !== null; ) {
        var u = void 0, s = i.dependencies;
        if (s !== null) {
          u = i.child;
          for (var f = s.firstContext; f !== null; ) {
            if (f.context === t) {
              if (i.tag === fe) {
                var p = so(a), v = Lu(Xt, p);
                v.tag = Ah;
                var y = i.updateQueue;
                if (y !== null) {
                  var g = y.shared, b = g.pending;
                  b === null ? v.next = v : (v.next = b.next, b.next = v), g.pending = v;
                }
              }
              i.lanes = qe(i.lanes, a);
              var _ = i.alternate;
              _ !== null && (_.lanes = qe(_.lanes, a)), ng(i.return, a, e), s.lanes = qe(s.lanes, a);
              break;
            }
            f = f.next;
          }
        } else if (i.tag === rt)
          u = i.type === e.type ? null : i.child;
        else if (i.tag === Yt) {
          var N = i.return;
          if (N === null)
            throw new Error("We just came from a parent so we must have had a parent. This is a bug in React.");
          N.lanes = qe(N.lanes, a);
          var z = N.alternate;
          z !== null && (z.lanes = qe(z.lanes, a)), ng(N, a, e), u = i.sibling;
        } else
          u = i.child;
        if (u !== null)
          u.return = i;
        else
          for (u = i; u !== null; ) {
            if (u === e) {
              u = null;
              break;
            }
            var j = u.sibling;
            if (j !== null) {
              j.return = u.return, u = j;
              break;
            }
            u = u.return;
          }
        i = u;
      }
    }
    function xf(e, t) {
      Mh = e, _f = null, eg = null;
      var a = e.dependencies;
      if (a !== null) {
        var i = a.firstContext;
        i !== null && (Jr(a.lanes, t) && Tp(), a.firstContext = null);
      }
    }
    function Kn(e) {
      Nh && S("Context can only be read while React is rendering. In classes, you can read it in the render method or getDerivedStateFromProps. In function components, you can read it directly in the function body, but not inside Hooks like useReducer() or useMemo().");
      var t = e._currentValue;
      if (eg !== e) {
        var a = {
          context: e,
          memoizedValue: t,
          next: null
        };
        if (_f === null) {
          if (Mh === null)
            throw new Error("Context can only be read while React is rendering. In classes, you can read it in the render method or getDerivedStateFromProps. In function components, you can read it directly in the function body, but not inside Hooks like useReducer() or useMemo().");
          _f = a, Mh.dependencies = {
            lanes: V,
            firstContext: a
          };
        } else
          _f = _f.next = a;
      }
      return t;
    }
    var ec = null;
    function rg(e) {
      ec === null ? ec = [e] : ec.push(e);
    }
    function ww() {
      if (ec !== null) {
        for (var e = 0; e < ec.length; e++) {
          var t = ec[e], a = t.interleaved;
          if (a !== null) {
            t.interleaved = null;
            var i = a.next, u = t.pending;
            if (u !== null) {
              var s = u.next;
              u.next = i, a.next = s;
            }
            t.pending = a;
          }
        }
        ec = null;
      }
    }
    function cE(e, t, a, i) {
      var u = t.interleaved;
      return u === null ? (a.next = a, rg(t)) : (a.next = u.next, u.next = a), t.interleaved = a, Uh(e, i);
    }
    function _w(e, t, a, i) {
      var u = t.interleaved;
      u === null ? (a.next = a, rg(t)) : (a.next = u.next, u.next = a), t.interleaved = a;
    }
    function xw(e, t, a, i) {
      var u = t.interleaved;
      return u === null ? (a.next = a, rg(t)) : (a.next = u.next, u.next = a), t.interleaved = a, Uh(e, i);
    }
    function $a(e, t) {
      return Uh(e, t);
    }
    var bw = Uh;
    function Uh(e, t) {
      e.lanes = qe(e.lanes, t);
      var a = e.alternate;
      a !== null && (a.lanes = qe(a.lanes, t)), a === null && (e.flags & ($t | hi)) !== ke && f1(e);
      for (var i = e, u = e.return; u !== null; )
        u.childLanes = qe(u.childLanes, t), a = u.alternate, a !== null ? a.childLanes = qe(a.childLanes, t) : (u.flags & ($t | hi)) !== ke && f1(e), i = u, u = u.return;
      if (i.tag === te) {
        var s = i.stateNode;
        return s;
      } else
        return null;
    }
    var fE = 0, dE = 1, Ah = 2, ag = 3, Fh = !1, ig, jh;
    ig = !1, jh = null;
    function lg(e) {
      var t = {
        baseState: e.memoizedState,
        firstBaseUpdate: null,
        lastBaseUpdate: null,
        shared: {
          pending: null,
          interleaved: null,
          lanes: V
        },
        effects: null
      };
      e.updateQueue = t;
    }
    function pE(e, t) {
      var a = t.updateQueue, i = e.updateQueue;
      if (a === i) {
        var u = {
          baseState: i.baseState,
          firstBaseUpdate: i.firstBaseUpdate,
          lastBaseUpdate: i.lastBaseUpdate,
          shared: i.shared,
          effects: i.effects
        };
        t.updateQueue = u;
      }
    }
    function Lu(e, t) {
      var a = {
        eventTime: e,
        lane: t,
        tag: fE,
        payload: null,
        callback: null,
        next: null
      };
      return a;
    }
    function No(e, t, a) {
      var i = e.updateQueue;
      if (i === null)
        return null;
      var u = i.shared;
      if (jh === u && !ig && (S("An update (setState, replaceState, or forceUpdate) was scheduled from inside an update function. Update functions should be pure, with zero side-effects. Consider using componentDidUpdate or a callback."), ig = !0), bx()) {
        var s = u.pending;
        return s === null ? t.next = t : (t.next = s.next, s.next = t), u.pending = t, bw(e, a);
      } else
        return xw(e, u, t, a);
    }
    function Hh(e, t, a) {
      var i = t.updateQueue;
      if (i !== null) {
        var u = i.shared;
        if (_d(a)) {
          var s = u.lanes;
          s = $c(s, e.pendingLanes);
          var f = qe(s, a);
          u.lanes = f, xd(e, f);
        }
      }
    }
    function ug(e, t) {
      var a = e.updateQueue, i = e.alternate;
      if (i !== null) {
        var u = i.updateQueue;
        if (a === u) {
          var s = null, f = null, p = a.firstBaseUpdate;
          if (p !== null) {
            var v = p;
            do {
              var y = {
                eventTime: v.eventTime,
                lane: v.lane,
                tag: v.tag,
                payload: v.payload,
                callback: v.callback,
                next: null
              };
              f === null ? s = f = y : (f.next = y, f = y), v = v.next;
            } while (v !== null);
            f === null ? s = f = t : (f.next = t, f = t);
          } else
            s = f = t;
          a = {
            baseState: u.baseState,
            firstBaseUpdate: s,
            lastBaseUpdate: f,
            shared: u.shared,
            effects: u.effects
          }, e.updateQueue = a;
          return;
        }
      }
      var g = a.lastBaseUpdate;
      g === null ? a.firstBaseUpdate = t : g.next = t, a.lastBaseUpdate = t;
    }
    function Dw(e, t, a, i, u, s) {
      switch (a.tag) {
        case dE: {
          var f = a.payload;
          if (typeof f == "function") {
            uE();
            var p = f.call(s, i, u);
            {
              if (e.mode & gn) {
                qt(!0);
                try {
                  f.call(s, i, u);
                } finally {
                  qt(!1);
                }
              }
              oE();
            }
            return p;
          }
          return f;
        }
        case ag:
          e.flags = e.flags & ~rr | Qe;
        case fE: {
          var v = a.payload, y;
          if (typeof v == "function") {
            uE(), y = v.call(s, i, u);
            {
              if (e.mode & gn) {
                qt(!0);
                try {
                  v.call(s, i, u);
                } finally {
                  qt(!1);
                }
              }
              oE();
            }
          } else
            y = v;
          return y == null ? i : et({}, i, y);
        }
        case Ah:
          return Fh = !0, i;
      }
      return i;
    }
    function Vh(e, t, a, i) {
      var u = e.updateQueue;
      Fh = !1, jh = u.shared;
      var s = u.firstBaseUpdate, f = u.lastBaseUpdate, p = u.shared.pending;
      if (p !== null) {
        u.shared.pending = null;
        var v = p, y = v.next;
        v.next = null, f === null ? s = y : f.next = y, f = v;
        var g = e.alternate;
        if (g !== null) {
          var b = g.updateQueue, _ = b.lastBaseUpdate;
          _ !== f && (_ === null ? b.firstBaseUpdate = y : _.next = y, b.lastBaseUpdate = v);
        }
      }
      if (s !== null) {
        var N = u.baseState, z = V, j = null, se = null, Le = null, xe = s;
        do {
          var gt = xe.lane, pt = xe.eventTime;
          if (gu(i, gt)) {
            if (Le !== null) {
              var H = {
                eventTime: pt,
                // This update is going to be committed so we never want uncommit
                // it. Using NoLane works because 0 is a subset of all bitmasks, so
                // this will never be skipped by the check above.
                lane: bn,
                tag: xe.tag,
                payload: xe.payload,
                callback: xe.callback,
                next: null
              };
              Le = Le.next = H;
            }
            N = Dw(e, u, xe, N, t, a);
            var O = xe.callback;
            if (O !== null && // If the update was already committed, we should not queue its
            // callback again.
            xe.lane !== bn) {
              e.flags |= Wn;
              var G = u.effects;
              G === null ? u.effects = [xe] : G.push(xe);
            }
          } else {
            var k = {
              eventTime: pt,
              lane: gt,
              tag: xe.tag,
              payload: xe.payload,
              callback: xe.callback,
              next: null
            };
            Le === null ? (se = Le = k, j = N) : Le = Le.next = k, z = qe(z, gt);
          }
          if (xe = xe.next, xe === null) {
            if (p = u.shared.pending, p === null)
              break;
            var ce = p, ie = ce.next;
            ce.next = null, xe = ie, u.lastBaseUpdate = ce, u.shared.pending = null;
          }
        } while (!0);
        Le === null && (j = N), u.baseState = j, u.firstBaseUpdate = se, u.lastBaseUpdate = Le;
        var Be = u.shared.interleaved;
        if (Be !== null) {
          var Ge = Be;
          do
            z = qe(z, Ge.lane), Ge = Ge.next;
          while (Ge !== Be);
        } else
          s === null && (u.shared.lanes = V);
        Up(z), e.lanes = z, e.memoizedState = N;
      }
      jh = null;
    }
    function kw(e, t) {
      if (typeof e != "function")
        throw new Error("Invalid argument passed as callback. Expected a function. Instead " + ("received: " + e));
      e.call(t);
    }
    function vE() {
      Fh = !1;
    }
    function Ph() {
      return Fh;
    }
    function hE(e, t, a) {
      var i = t.effects;
      if (t.effects = null, i !== null)
        for (var u = 0; u < i.length; u++) {
          var s = i[u], f = s.callback;
          f !== null && (s.callback = null, kw(f, a));
        }
    }
    var og = {}, mE = new pe.Component().refs, sg, cg, fg, dg, pg, yE, Bh, vg, hg, mg;
    {
      sg = /* @__PURE__ */ new Set(), cg = /* @__PURE__ */ new Set(), fg = /* @__PURE__ */ new Set(), dg = /* @__PURE__ */ new Set(), vg = /* @__PURE__ */ new Set(), pg = /* @__PURE__ */ new Set(), hg = /* @__PURE__ */ new Set(), mg = /* @__PURE__ */ new Set();
      var gE = /* @__PURE__ */ new Set();
      Bh = function(e, t) {
        if (!(e === null || typeof e == "function")) {
          var a = t + "_" + e;
          gE.has(a) || (gE.add(a), S("%s(...): Expected the last optional `callback` argument to be a function. Instead received: %s.", t, e));
        }
      }, yE = function(e, t) {
        if (t === void 0) {
          var a = Ct(e) || "Component";
          pg.has(a) || (pg.add(a), S("%s.getDerivedStateFromProps(): A valid state object (or null) must be returned. You have returned undefined.", a));
        }
      }, Object.defineProperty(og, "_processChildContext", {
        enumerable: !1,
        value: function() {
          throw new Error("_processChildContext is not available in React 16+. This likely means you have multiple copies of React and are attempting to nest a React 15 tree inside a React 16 tree using unstable_renderSubtreeIntoContainer, which isn't supported. Try to make sure you have only one copy of React (and ideally, switch to ReactDOM.createPortal).");
        }
      }), Object.freeze(og);
    }
    function yg(e, t, a, i) {
      var u = e.memoizedState, s = a(i, u);
      {
        if (e.mode & gn) {
          qt(!0);
          try {
            s = a(i, u);
          } finally {
            qt(!1);
          }
        }
        yE(t, s);
      }
      var f = s == null ? u : et({}, u, s);
      if (e.memoizedState = f, e.lanes === V) {
        var p = e.updateQueue;
        p.baseState = f;
      }
    }
    var gg = {
      isMounted: ya,
      enqueueSetState: function(e, t, a) {
        var i = vi(e), u = Ra(), s = Po(i), f = Lu(u, s);
        f.payload = t, a != null && (Bh(a, "setState"), f.callback = a);
        var p = No(i, f, s);
        p !== null && (pr(p, i, s, u), Hh(p, i, s)), bc(i, s);
      },
      enqueueReplaceState: function(e, t, a) {
        var i = vi(e), u = Ra(), s = Po(i), f = Lu(u, s);
        f.tag = dE, f.payload = t, a != null && (Bh(a, "replaceState"), f.callback = a);
        var p = No(i, f, s);
        p !== null && (pr(p, i, s, u), Hh(p, i, s)), bc(i, s);
      },
      enqueueForceUpdate: function(e, t) {
        var a = vi(e), i = Ra(), u = Po(a), s = Lu(i, u);
        s.tag = Ah, t != null && (Bh(t, "forceUpdate"), s.callback = t);
        var f = No(a, s, u);
        f !== null && (pr(f, a, u, i), Hh(f, a, u)), io(a, u);
      }
    };
    function SE(e, t, a, i, u, s, f) {
      var p = e.stateNode;
      if (typeof p.shouldComponentUpdate == "function") {
        var v = p.shouldComponentUpdate(i, s, f);
        {
          if (e.mode & gn) {
            qt(!0);
            try {
              v = p.shouldComponentUpdate(i, s, f);
            } finally {
              qt(!1);
            }
          }
          v === void 0 && S("%s.shouldComponentUpdate(): Returned undefined instead of a boolean value. Make sure to return true or false.", Ct(t) || "Component");
        }
        return v;
      }
      return t.prototype && t.prototype.isPureReactComponent ? !je(a, i) || !je(u, s) : !0;
    }
    function Ow(e, t, a) {
      var i = e.stateNode;
      {
        var u = Ct(t) || "Component", s = i.render;
        s || (t.prototype && typeof t.prototype.render == "function" ? S("%s(...): No `render` method found on the returned component instance: did you accidentally return an object from the constructor?", u) : S("%s(...): No `render` method found on the returned component instance: you may have forgotten to define `render`.", u)), i.getInitialState && !i.getInitialState.isReactClassApproved && !i.state && S("getInitialState was defined on %s, a plain JavaScript class. This is only supported for classes created using React.createClass. Did you mean to define a state property instead?", u), i.getDefaultProps && !i.getDefaultProps.isReactClassApproved && S("getDefaultProps was defined on %s, a plain JavaScript class. This is only supported for classes created using React.createClass. Use a static property to define defaultProps instead.", u), i.propTypes && S("propTypes was defined as an instance property on %s. Use a static property to define propTypes instead.", u), i.contextType && S("contextType was defined as an instance property on %s. Use a static property to define contextType instead.", u), i.contextTypes && S("contextTypes was defined as an instance property on %s. Use a static property to define contextTypes instead.", u), t.contextType && t.contextTypes && !hg.has(t) && (hg.add(t), S("%s declares both contextTypes and contextType static properties. The legacy contextTypes property will be ignored.", u)), typeof i.componentShouldUpdate == "function" && S("%s has a method called componentShouldUpdate(). Did you mean shouldComponentUpdate()? The name is phrased as a question because the function is expected to return a value.", u), t.prototype && t.prototype.isPureReactComponent && typeof i.shouldComponentUpdate < "u" && S("%s has a method called shouldComponentUpdate(). shouldComponentUpdate should not be used when extending React.PureComponent. Please extend React.Component if shouldComponentUpdate is used.", Ct(t) || "A pure component"), typeof i.componentDidUnmount == "function" && S("%s has a method called componentDidUnmount(). But there is no such lifecycle method. Did you mean componentWillUnmount()?", u), typeof i.componentDidReceiveProps == "function" && S("%s has a method called componentDidReceiveProps(). But there is no such lifecycle method. If you meant to update the state in response to changing props, use componentWillReceiveProps(). If you meant to fetch data or run side-effects or mutations after React has updated the UI, use componentDidUpdate().", u), typeof i.componentWillRecieveProps == "function" && S("%s has a method called componentWillRecieveProps(). Did you mean componentWillReceiveProps()?", u), typeof i.UNSAFE_componentWillRecieveProps == "function" && S("%s has a method called UNSAFE_componentWillRecieveProps(). Did you mean UNSAFE_componentWillReceiveProps()?", u);
        var f = i.props !== a;
        i.props !== void 0 && f && S("%s(...): When calling super() in `%s`, make sure to pass up the same props that your component's constructor was passed.", u, u), i.defaultProps && S("Setting defaultProps as an instance property on %s is not supported and will be ignored. Instead, define defaultProps as a static property on %s.", u, u), typeof i.getSnapshotBeforeUpdate == "function" && typeof i.componentDidUpdate != "function" && !fg.has(t) && (fg.add(t), S("%s: getSnapshotBeforeUpdate() should be used with componentDidUpdate(). This component defines getSnapshotBeforeUpdate() only.", Ct(t))), typeof i.getDerivedStateFromProps == "function" && S("%s: getDerivedStateFromProps() is defined as an instance method and will be ignored. Instead, declare it as a static method.", u), typeof i.getDerivedStateFromError == "function" && S("%s: getDerivedStateFromError() is defined as an instance method and will be ignored. Instead, declare it as a static method.", u), typeof t.getSnapshotBeforeUpdate == "function" && S("%s: getSnapshotBeforeUpdate() is defined as a static method and will be ignored. Instead, declare it as an instance method.", u);
        var p = i.state;
        p && (typeof p != "object" || Rt(p)) && S("%s.state: must be set to an object or null", u), typeof i.getChildContext == "function" && typeof t.childContextTypes != "object" && S("%s.getChildContext(): childContextTypes must be defined in order to use getChildContext().", u);
      }
    }
    function EE(e, t) {
      t.updater = gg, e.stateNode = t, Sc(t, e), t._reactInternalInstance = og;
    }
    function CE(e, t, a) {
      var i = !1, u = ii, s = ii, f = t.contextType;
      if ("contextType" in t) {
        var p = (
          // Allow null for conditional declaration
          f === null || f !== void 0 && f.$$typeof === J && f._context === void 0
        );
        if (!p && !mg.has(t)) {
          mg.add(t);
          var v = "";
          f === void 0 ? v = " However, it is set to undefined. This can be caused by a typo or by mixing up named and default imports. This can also happen due to a circular dependency, so try moving the createContext() call to a separate file." : typeof f != "object" ? v = " However, it is set to a " + typeof f + "." : f.$$typeof === I ? v = " Did you accidentally pass the Context.Provider instead?" : f._context !== void 0 ? v = " Did you accidentally pass the Context.Consumer instead?" : v = " However, it is set to an object with keys {" + Object.keys(f).join(", ") + "}.", S("%s defines an invalid contextType. contextType should point to the Context object returned by React.createContext().%s", Ct(t) || "Component", v);
        }
      }
      if (typeof f == "object" && f !== null)
        s = Kn(f);
      else {
        u = Ef(e, t, !0);
        var y = t.contextTypes;
        i = y != null, s = i ? Cf(e, u) : ii;
      }
      var g = new t(a, s);
      if (e.mode & gn) {
        qt(!0);
        try {
          g = new t(a, s);
        } finally {
          qt(!1);
        }
      }
      var b = e.memoizedState = g.state !== null && g.state !== void 0 ? g.state : null;
      EE(e, g);
      {
        if (typeof t.getDerivedStateFromProps == "function" && b === null) {
          var _ = Ct(t) || "Component";
          cg.has(_) || (cg.add(_), S("`%s` uses `getDerivedStateFromProps` but its initial state is %s. This is not recommended. Instead, define the initial state by assigning an object to `this.state` in the constructor of `%s`. This ensures that `getDerivedStateFromProps` arguments have a consistent shape.", _, g.state === null ? "null" : "undefined", _));
        }
        if (typeof t.getDerivedStateFromProps == "function" || typeof g.getSnapshotBeforeUpdate == "function") {
          var N = null, z = null, j = null;
          if (typeof g.componentWillMount == "function" && g.componentWillMount.__suppressDeprecationWarning !== !0 ? N = "componentWillMount" : typeof g.UNSAFE_componentWillMount == "function" && (N = "UNSAFE_componentWillMount"), typeof g.componentWillReceiveProps == "function" && g.componentWillReceiveProps.__suppressDeprecationWarning !== !0 ? z = "componentWillReceiveProps" : typeof g.UNSAFE_componentWillReceiveProps == "function" && (z = "UNSAFE_componentWillReceiveProps"), typeof g.componentWillUpdate == "function" && g.componentWillUpdate.__suppressDeprecationWarning !== !0 ? j = "componentWillUpdate" : typeof g.UNSAFE_componentWillUpdate == "function" && (j = "UNSAFE_componentWillUpdate"), N !== null || z !== null || j !== null) {
            var se = Ct(t) || "Component", Le = typeof t.getDerivedStateFromProps == "function" ? "getDerivedStateFromProps()" : "getSnapshotBeforeUpdate()";
            dg.has(se) || (dg.add(se), S(`Unsafe legacy lifecycles will not be called for components using new component APIs.

%s uses %s but also contains the following legacy lifecycles:%s%s%s

The above lifecycles should be removed. Learn more about this warning here:
https://reactjs.org/link/unsafe-component-lifecycles`, se, Le, N !== null ? `
  ` + N : "", z !== null ? `
  ` + z : "", j !== null ? `
  ` + j : ""));
          }
        }
      }
      return i && I0(e, u, s), g;
    }
    function Lw(e, t) {
      var a = t.state;
      typeof t.componentWillMount == "function" && t.componentWillMount(), typeof t.UNSAFE_componentWillMount == "function" && t.UNSAFE_componentWillMount(), a !== t.state && (S("%s.componentWillMount(): Assigning directly to this.state is deprecated (except inside a component's constructor). Use setState instead.", Ye(e) || "Component"), gg.enqueueReplaceState(t, t.state, null));
    }
    function RE(e, t, a, i) {
      var u = t.state;
      if (typeof t.componentWillReceiveProps == "function" && t.componentWillReceiveProps(a, i), typeof t.UNSAFE_componentWillReceiveProps == "function" && t.UNSAFE_componentWillReceiveProps(a, i), t.state !== u) {
        {
          var s = Ye(e) || "Component";
          sg.has(s) || (sg.add(s), S("%s.componentWillReceiveProps(): Assigning directly to this.state is deprecated (except inside a component's constructor). Use setState instead.", s));
        }
        gg.enqueueReplaceState(t, t.state, null);
      }
    }
    function Sg(e, t, a, i) {
      Ow(e, t, a);
      var u = e.stateNode;
      u.props = a, u.state = e.memoizedState, u.refs = mE, lg(e);
      var s = t.contextType;
      if (typeof s == "object" && s !== null)
        u.context = Kn(s);
      else {
        var f = Ef(e, t, !0);
        u.context = Cf(e, f);
      }
      {
        if (u.state === a) {
          var p = Ct(t) || "Component";
          vg.has(p) || (vg.add(p), S("%s: It is not recommended to assign props directly to state because updates to props won't be reflected in state. In most cases, it is better to use props directly.", p));
        }
        e.mode & gn && tl.recordLegacyContextWarning(e, u), tl.recordUnsafeLifecycleWarnings(e, u);
      }
      u.state = e.memoizedState;
      var v = t.getDerivedStateFromProps;
      if (typeof v == "function" && (yg(e, t, v, a), u.state = e.memoizedState), typeof t.getDerivedStateFromProps != "function" && typeof u.getSnapshotBeforeUpdate != "function" && (typeof u.UNSAFE_componentWillMount == "function" || typeof u.componentWillMount == "function") && (Lw(e, u), Vh(e, a, u, i), u.state = e.memoizedState), typeof u.componentDidMount == "function") {
        var y = Te;
        y |= Ma, (e.mode & Ua) !== Oe && (y |= Na), e.flags |= y;
      }
    }
    function Mw(e, t, a, i) {
      var u = e.stateNode, s = e.memoizedProps;
      u.props = s;
      var f = u.context, p = t.contextType, v = ii;
      if (typeof p == "object" && p !== null)
        v = Kn(p);
      else {
        var y = Ef(e, t, !0);
        v = Cf(e, y);
      }
      var g = t.getDerivedStateFromProps, b = typeof g == "function" || typeof u.getSnapshotBeforeUpdate == "function";
      !b && (typeof u.UNSAFE_componentWillReceiveProps == "function" || typeof u.componentWillReceiveProps == "function") && (s !== a || f !== v) && RE(e, u, a, v), vE();
      var _ = e.memoizedState, N = u.state = _;
      if (Vh(e, a, u, i), N = e.memoizedState, s === a && _ === N && !Th() && !Ph()) {
        if (typeof u.componentDidMount == "function") {
          var z = Te;
          z |= Ma, (e.mode & Ua) !== Oe && (z |= Na), e.flags |= z;
        }
        return !1;
      }
      typeof g == "function" && (yg(e, t, g, a), N = e.memoizedState);
      var j = Ph() || SE(e, t, s, a, _, N, v);
      if (j) {
        if (!b && (typeof u.UNSAFE_componentWillMount == "function" || typeof u.componentWillMount == "function") && (typeof u.componentWillMount == "function" && u.componentWillMount(), typeof u.UNSAFE_componentWillMount == "function" && u.UNSAFE_componentWillMount()), typeof u.componentDidMount == "function") {
          var se = Te;
          se |= Ma, (e.mode & Ua) !== Oe && (se |= Na), e.flags |= se;
        }
      } else {
        if (typeof u.componentDidMount == "function") {
          var Le = Te;
          Le |= Ma, (e.mode & Ua) !== Oe && (Le |= Na), e.flags |= Le;
        }
        e.memoizedProps = a, e.memoizedState = N;
      }
      return u.props = a, u.state = N, u.context = v, j;
    }
    function Nw(e, t, a, i, u) {
      var s = t.stateNode;
      pE(e, t);
      var f = t.memoizedProps, p = t.type === t.elementType ? f : nl(t.type, f);
      s.props = p;
      var v = t.pendingProps, y = s.context, g = a.contextType, b = ii;
      if (typeof g == "object" && g !== null)
        b = Kn(g);
      else {
        var _ = Ef(t, a, !0);
        b = Cf(t, _);
      }
      var N = a.getDerivedStateFromProps, z = typeof N == "function" || typeof s.getSnapshotBeforeUpdate == "function";
      !z && (typeof s.UNSAFE_componentWillReceiveProps == "function" || typeof s.componentWillReceiveProps == "function") && (f !== v || y !== b) && RE(t, s, i, b), vE();
      var j = t.memoizedState, se = s.state = j;
      if (Vh(t, i, s, u), se = t.memoizedState, f === v && j === se && !Th() && !Ph() && !T)
        return typeof s.componentDidUpdate == "function" && (f !== e.memoizedProps || j !== e.memoizedState) && (t.flags |= Te), typeof s.getSnapshotBeforeUpdate == "function" && (f !== e.memoizedProps || j !== e.memoizedState) && (t.flags |= Un), !1;
      typeof N == "function" && (yg(t, a, N, i), se = t.memoizedState);
      var Le = Ph() || SE(t, a, p, i, j, se, b) || // TODO: In some cases, we'll end up checking if context has changed twice,
      // both before and after `shouldComponentUpdate` has been called. Not ideal,
      // but I'm loath to refactor this function. This only happens for memoized
      // components so it's not that common.
      T;
      return Le ? (!z && (typeof s.UNSAFE_componentWillUpdate == "function" || typeof s.componentWillUpdate == "function") && (typeof s.componentWillUpdate == "function" && s.componentWillUpdate(i, se, b), typeof s.UNSAFE_componentWillUpdate == "function" && s.UNSAFE_componentWillUpdate(i, se, b)), typeof s.componentDidUpdate == "function" && (t.flags |= Te), typeof s.getSnapshotBeforeUpdate == "function" && (t.flags |= Un)) : (typeof s.componentDidUpdate == "function" && (f !== e.memoizedProps || j !== e.memoizedState) && (t.flags |= Te), typeof s.getSnapshotBeforeUpdate == "function" && (f !== e.memoizedProps || j !== e.memoizedState) && (t.flags |= Un), t.memoizedProps = i, t.memoizedState = se), s.props = i, s.state = se, s.context = b, Le;
    }
    var Eg, Cg, Rg, Tg, wg, TE = function(e, t) {
    };
    Eg = !1, Cg = !1, Rg = {}, Tg = {}, wg = {}, TE = function(e, t) {
      if (!(e === null || typeof e != "object") && !(!e._store || e._store.validated || e.key != null)) {
        if (typeof e._store != "object")
          throw new Error("React Component in warnForMissingKey should have a _store. This error is likely caused by a bug in React. Please file an issue.");
        e._store.validated = !0;
        var a = Ye(t) || "Component";
        Tg[a] || (Tg[a] = !0, S('Each child in a list should have a unique "key" prop. See https://reactjs.org/link/warning-keys for more information.'));
      }
    };
    function cp(e, t, a) {
      var i = a.ref;
      if (i !== null && typeof i != "function" && typeof i != "object") {
        if ((e.mode & gn || ot) && // We warn in ReactElement.js if owner and self are equal for string refs
        // because these cannot be automatically converted to an arrow function
        // using a codemod. Therefore, we don't have to warn about string refs again.
        !(a._owner && a._self && a._owner.stateNode !== a._self)) {
          var u = Ye(e) || "Component";
          Rg[u] || (S('A string ref, "%s", has been found within a strict mode tree. String refs are a source of potential bugs and should be avoided. We recommend using useRef() or createRef() instead. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-string-ref', i), Rg[u] = !0);
        }
        if (a._owner) {
          var s = a._owner, f;
          if (s) {
            var p = s;
            if (p.tag !== fe)
              throw new Error("Function components cannot have string refs. We recommend using useRef() instead. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-string-ref");
            f = p.stateNode;
          }
          if (!f)
            throw new Error("Missing owner for string ref " + i + ". This error is likely caused by a bug in React. Please file an issue.");
          var v = f;
          Vn(i, "ref");
          var y = "" + i;
          if (t !== null && t.ref !== null && typeof t.ref == "function" && t.ref._stringRef === y)
            return t.ref;
          var g = function(b) {
            var _ = v.refs;
            _ === mE && (_ = v.refs = {}), b === null ? delete _[y] : _[y] = b;
          };
          return g._stringRef = y, g;
        } else {
          if (typeof i != "string")
            throw new Error("Expected ref to be a function, a string, an object returned by React.createRef(), or null.");
          if (!a._owner)
            throw new Error("Element ref was specified as a string (" + i + `) but no owner was set. This could happen for one of the following reasons:
1. You may be adding a ref to a function component
2. You may be adding a ref to a component that was not created inside a component's render method
3. You have multiple copies of React loaded
See https://reactjs.org/link/refs-must-have-owner for more information.`);
        }
      }
      return i;
    }
    function $h(e, t) {
      var a = Object.prototype.toString.call(t);
      throw new Error("Objects are not valid as a React child (found: " + (a === "[object Object]" ? "object with keys {" + Object.keys(t).join(", ") + "}" : a) + "). If you meant to render a collection of children, use an array instead.");
    }
    function Yh(e) {
      {
        var t = Ye(e) || "Component";
        if (wg[t])
          return;
        wg[t] = !0, S("Functions are not valid as a React child. This may happen if you return a Component instead of <Component /> from render. Or maybe you meant to call this function rather than return it.");
      }
    }
    function wE(e) {
      var t = e._payload, a = e._init;
      return a(t);
    }
    function _E(e) {
      function t(k, H) {
        if (e) {
          var O = k.deletions;
          O === null ? (k.deletions = [H], k.flags |= bt) : O.push(H);
        }
      }
      function a(k, H) {
        if (!e)
          return null;
        for (var O = H; O !== null; )
          t(k, O), O = O.sibling;
        return null;
      }
      function i(k, H) {
        for (var O = /* @__PURE__ */ new Map(), G = H; G !== null; )
          G.key !== null ? O.set(G.key, G) : O.set(G.index, G), G = G.sibling;
        return O;
      }
      function u(k, H) {
        var O = oc(k, H);
        return O.index = 0, O.sibling = null, O;
      }
      function s(k, H, O) {
        if (k.index = O, !e)
          return k.flags |= Cv, H;
        var G = k.alternate;
        if (G !== null) {
          var ce = G.index;
          return ce < H ? (k.flags |= $t, H) : ce;
        } else
          return k.flags |= $t, H;
      }
      function f(k) {
        return e && k.alternate === null && (k.flags |= $t), k;
      }
      function p(k, H, O, G) {
        if (H === null || H.tag !== Ce) {
          var ce = KS(O, k.mode, G);
          return ce.return = k, ce;
        } else {
          var ie = u(H, O);
          return ie.return = k, ie;
        }
      }
      function v(k, H, O, G) {
        var ce = O.type;
        if (ce === da)
          return g(k, H, O.props.children, G, O.key);
        if (H !== null && (H.elementType === ce || // Keep this check inline so it only runs on the false path:
        h1(H, O) || // Lazy types should reconcile their resolved type.
        // We need to do this after the Hot Reloading check above,
        // because hot reloading has different semantics than prod because
        // it doesn't resuspend. So we can't let the call below suspend.
        typeof ce == "object" && ce !== null && ce.$$typeof === De && wE(ce) === H.type)) {
          var ie = u(H, O.props);
          return ie.ref = cp(k, H, O), ie.return = k, ie._debugSource = O._source, ie._debugOwner = O._owner, ie;
        }
        var Be = XS(O, k.mode, G);
        return Be.ref = cp(k, H, O), Be.return = k, Be;
      }
      function y(k, H, O, G) {
        if (H === null || H.tag !== Ne || H.stateNode.containerInfo !== O.containerInfo || H.stateNode.implementation !== O.implementation) {
          var ce = ZS(O, k.mode, G);
          return ce.return = k, ce;
        } else {
          var ie = u(H, O.children || []);
          return ie.return = k, ie;
        }
      }
      function g(k, H, O, G, ce) {
        if (H === null || H.tag !== ct) {
          var ie = $o(O, k.mode, G, ce);
          return ie.return = k, ie;
        } else {
          var Be = u(H, O);
          return Be.return = k, Be;
        }
      }
      function b(k, H, O) {
        if (typeof H == "string" && H !== "" || typeof H == "number") {
          var G = KS("" + H, k.mode, O);
          return G.return = k, G;
        }
        if (typeof H == "object" && H !== null) {
          switch (H.$$typeof) {
            case jr: {
              var ce = XS(H, k.mode, O);
              return ce.ref = cp(k, null, H), ce.return = k, ce;
            }
            case Hr: {
              var ie = ZS(H, k.mode, O);
              return ie.return = k, ie;
            }
            case De: {
              var Be = H._payload, Ge = H._init;
              return b(k, Ge(Be), O);
            }
          }
          if (Rt(H) || si(H)) {
            var Pt = $o(H, k.mode, O, null);
            return Pt.return = k, Pt;
          }
          $h(k, H);
        }
        return typeof H == "function" && Yh(k), null;
      }
      function _(k, H, O, G) {
        var ce = H !== null ? H.key : null;
        if (typeof O == "string" && O !== "" || typeof O == "number")
          return ce !== null ? null : p(k, H, "" + O, G);
        if (typeof O == "object" && O !== null) {
          switch (O.$$typeof) {
            case jr:
              return O.key === ce ? v(k, H, O, G) : null;
            case Hr:
              return O.key === ce ? y(k, H, O, G) : null;
            case De: {
              var ie = O._payload, Be = O._init;
              return _(k, H, Be(ie), G);
            }
          }
          if (Rt(O) || si(O))
            return ce !== null ? null : g(k, H, O, G, null);
          $h(k, O);
        }
        return typeof O == "function" && Yh(k), null;
      }
      function N(k, H, O, G, ce) {
        if (typeof G == "string" && G !== "" || typeof G == "number") {
          var ie = k.get(O) || null;
          return p(H, ie, "" + G, ce);
        }
        if (typeof G == "object" && G !== null) {
          switch (G.$$typeof) {
            case jr: {
              var Be = k.get(G.key === null ? O : G.key) || null;
              return v(H, Be, G, ce);
            }
            case Hr: {
              var Ge = k.get(G.key === null ? O : G.key) || null;
              return y(H, Ge, G, ce);
            }
            case De:
              var Pt = G._payload, kt = G._init;
              return N(k, H, O, kt(Pt), ce);
          }
          if (Rt(G) || si(G)) {
            var In = k.get(O) || null;
            return g(H, In, G, ce, null);
          }
          $h(H, G);
        }
        return typeof G == "function" && Yh(H), null;
      }
      function z(k, H, O) {
        {
          if (typeof k != "object" || k === null)
            return H;
          switch (k.$$typeof) {
            case jr:
            case Hr:
              TE(k, O);
              var G = k.key;
              if (typeof G != "string")
                break;
              if (H === null) {
                H = /* @__PURE__ */ new Set(), H.add(G);
                break;
              }
              if (!H.has(G)) {
                H.add(G);
                break;
              }
              S("Encountered two children with the same key, `%s`. Keys should be unique so that components maintain their identity across updates. Non-unique keys may cause children to be duplicated and/or omitted — the behavior is unsupported and could change in a future version.", G);
              break;
            case De:
              var ce = k._payload, ie = k._init;
              z(ie(ce), H, O);
              break;
          }
        }
        return H;
      }
      function j(k, H, O, G) {
        for (var ce = null, ie = 0; ie < O.length; ie++) {
          var Be = O[ie];
          ce = z(Be, ce, k);
        }
        for (var Ge = null, Pt = null, kt = H, In = 0, Ot = 0, Fn = null; kt !== null && Ot < O.length; Ot++) {
          kt.index > Ot ? (Fn = kt, kt = null) : Fn = kt.sibling;
          var aa = _(k, kt, O[Ot], G);
          if (aa === null) {
            kt === null && (kt = Fn);
            break;
          }
          e && kt && aa.alternate === null && t(k, kt), In = s(aa, In, Ot), Pt === null ? Ge = aa : Pt.sibling = aa, Pt = aa, kt = Fn;
        }
        if (Ot === O.length) {
          if (a(k, kt), kr()) {
            var Ar = Ot;
            qs(k, Ar);
          }
          return Ge;
        }
        if (kt === null) {
          for (; Ot < O.length; Ot++) {
            var ui = b(k, O[Ot], G);
            ui !== null && (In = s(ui, In, Ot), Pt === null ? Ge = ui : Pt.sibling = ui, Pt = ui);
          }
          if (kr()) {
            var Ta = Ot;
            qs(k, Ta);
          }
          return Ge;
        }
        for (var wa = i(k, kt); Ot < O.length; Ot++) {
          var ia = N(wa, k, Ot, O[Ot], G);
          ia !== null && (e && ia.alternate !== null && wa.delete(ia.key === null ? Ot : ia.key), In = s(ia, In, Ot), Pt === null ? Ge = ia : Pt.sibling = ia, Pt = ia);
        }
        if (e && wa.forEach(function($f) {
          return t(k, $f);
        }), kr()) {
          var Fu = Ot;
          qs(k, Fu);
        }
        return Ge;
      }
      function se(k, H, O, G) {
        var ce = si(O);
        if (typeof ce != "function")
          throw new Error("An object is not an iterable. This error is likely caused by a bug in React. Please file an issue.");
        {
          typeof Symbol == "function" && // $FlowFixMe Flow doesn't know about toStringTag
          O[Symbol.toStringTag] === "Generator" && (Cg || S("Using Generators as children is unsupported and will likely yield unexpected results because enumerating a generator mutates it. You may convert it to an array with `Array.from()` or the `[...spread]` operator before rendering. Keep in mind you might need to polyfill these features for older browsers."), Cg = !0), O.entries === ce && (Eg || S("Using Maps as children is not supported. Use an array of keyed ReactElements instead."), Eg = !0);
          var ie = ce.call(O);
          if (ie)
            for (var Be = null, Ge = ie.next(); !Ge.done; Ge = ie.next()) {
              var Pt = Ge.value;
              Be = z(Pt, Be, k);
            }
        }
        var kt = ce.call(O);
        if (kt == null)
          throw new Error("An iterable object provided no iterator.");
        for (var In = null, Ot = null, Fn = H, aa = 0, Ar = 0, ui = null, Ta = kt.next(); Fn !== null && !Ta.done; Ar++, Ta = kt.next()) {
          Fn.index > Ar ? (ui = Fn, Fn = null) : ui = Fn.sibling;
          var wa = _(k, Fn, Ta.value, G);
          if (wa === null) {
            Fn === null && (Fn = ui);
            break;
          }
          e && Fn && wa.alternate === null && t(k, Fn), aa = s(wa, aa, Ar), Ot === null ? In = wa : Ot.sibling = wa, Ot = wa, Fn = ui;
        }
        if (Ta.done) {
          if (a(k, Fn), kr()) {
            var ia = Ar;
            qs(k, ia);
          }
          return In;
        }
        if (Fn === null) {
          for (; !Ta.done; Ar++, Ta = kt.next()) {
            var Fu = b(k, Ta.value, G);
            Fu !== null && (aa = s(Fu, aa, Ar), Ot === null ? In = Fu : Ot.sibling = Fu, Ot = Fu);
          }
          if (kr()) {
            var $f = Ar;
            qs(k, $f);
          }
          return In;
        }
        for (var Vp = i(k, Fn); !Ta.done; Ar++, Ta = kt.next()) {
          var Wl = N(Vp, k, Ar, Ta.value, G);
          Wl !== null && (e && Wl.alternate !== null && Vp.delete(Wl.key === null ? Ar : Wl.key), aa = s(Wl, aa, Ar), Ot === null ? In = Wl : Ot.sibling = Wl, Ot = Wl);
        }
        if (e && Vp.forEach(function(Wb) {
          return t(k, Wb);
        }), kr()) {
          var Qb = Ar;
          qs(k, Qb);
        }
        return In;
      }
      function Le(k, H, O, G) {
        if (H !== null && H.tag === Ce) {
          a(k, H.sibling);
          var ce = u(H, O);
          return ce.return = k, ce;
        }
        a(k, H);
        var ie = KS(O, k.mode, G);
        return ie.return = k, ie;
      }
      function xe(k, H, O, G) {
        for (var ce = O.key, ie = H; ie !== null; ) {
          if (ie.key === ce) {
            var Be = O.type;
            if (Be === da) {
              if (ie.tag === ct) {
                a(k, ie.sibling);
                var Ge = u(ie, O.props.children);
                return Ge.return = k, Ge._debugSource = O._source, Ge._debugOwner = O._owner, Ge;
              }
            } else if (ie.elementType === Be || // Keep this check inline so it only runs on the false path:
            h1(ie, O) || // Lazy types should reconcile their resolved type.
            // We need to do this after the Hot Reloading check above,
            // because hot reloading has different semantics than prod because
            // it doesn't resuspend. So we can't let the call below suspend.
            typeof Be == "object" && Be !== null && Be.$$typeof === De && wE(Be) === ie.type) {
              a(k, ie.sibling);
              var Pt = u(ie, O.props);
              return Pt.ref = cp(k, ie, O), Pt.return = k, Pt._debugSource = O._source, Pt._debugOwner = O._owner, Pt;
            }
            a(k, ie);
            break;
          } else
            t(k, ie);
          ie = ie.sibling;
        }
        if (O.type === da) {
          var kt = $o(O.props.children, k.mode, G, O.key);
          return kt.return = k, kt;
        } else {
          var In = XS(O, k.mode, G);
          return In.ref = cp(k, H, O), In.return = k, In;
        }
      }
      function gt(k, H, O, G) {
        for (var ce = O.key, ie = H; ie !== null; ) {
          if (ie.key === ce)
            if (ie.tag === Ne && ie.stateNode.containerInfo === O.containerInfo && ie.stateNode.implementation === O.implementation) {
              a(k, ie.sibling);
              var Be = u(ie, O.children || []);
              return Be.return = k, Be;
            } else {
              a(k, ie);
              break;
            }
          else
            t(k, ie);
          ie = ie.sibling;
        }
        var Ge = ZS(O, k.mode, G);
        return Ge.return = k, Ge;
      }
      function pt(k, H, O, G) {
        var ce = typeof O == "object" && O !== null && O.type === da && O.key === null;
        if (ce && (O = O.props.children), typeof O == "object" && O !== null) {
          switch (O.$$typeof) {
            case jr:
              return f(xe(k, H, O, G));
            case Hr:
              return f(gt(k, H, O, G));
            case De:
              var ie = O._payload, Be = O._init;
              return pt(k, H, Be(ie), G);
          }
          if (Rt(O))
            return j(k, H, O, G);
          if (si(O))
            return se(k, H, O, G);
          $h(k, O);
        }
        return typeof O == "string" && O !== "" || typeof O == "number" ? f(Le(k, H, "" + O, G)) : (typeof O == "function" && Yh(k), a(k, H));
      }
      return pt;
    }
    var bf = _E(!0), xE = _E(!1);
    function zw(e, t) {
      if (e !== null && t.child !== e.child)
        throw new Error("Resuming work not yet implemented.");
      if (t.child !== null) {
        var a = t.child, i = oc(a, a.pendingProps);
        for (t.child = i, i.return = t; a.sibling !== null; )
          a = a.sibling, i = i.sibling = oc(a, a.pendingProps), i.return = t;
        i.sibling = null;
      }
    }
    function Uw(e, t) {
      for (var a = e.child; a !== null; )
        cb(a, t), a = a.sibling;
    }
    var fp = {}, zo = ko(fp), dp = ko(fp), Ih = ko(fp);
    function Qh(e) {
      if (e === fp)
        throw new Error("Expected host context to exist. This error is likely caused by a bug in React. Please file an issue.");
      return e;
    }
    function bE() {
      var e = Qh(Ih.current);
      return e;
    }
    function _g(e, t) {
      na(Ih, t, e), na(dp, e, e), na(zo, fp, e);
      var a = qR(t);
      ta(zo, e), na(zo, a, e);
    }
    function Df(e) {
      ta(zo, e), ta(dp, e), ta(Ih, e);
    }
    function xg() {
      var e = Qh(zo.current);
      return e;
    }
    function DE(e) {
      Qh(Ih.current);
      var t = Qh(zo.current), a = XR(t, e.type);
      t !== a && (na(dp, e, e), na(zo, a, e));
    }
    function bg(e) {
      dp.current === e && (ta(zo, e), ta(dp, e));
    }
    var Aw = 0, kE = 1, OE = 1, pp = 2, rl = ko(Aw);
    function Dg(e, t) {
      return (e & t) !== 0;
    }
    function kf(e) {
      return e & kE;
    }
    function kg(e, t) {
      return e & kE | t;
    }
    function Fw(e, t) {
      return e | t;
    }
    function Uo(e, t) {
      na(rl, t, e);
    }
    function Of(e) {
      ta(rl, e);
    }
    function jw(e, t) {
      var a = e.memoizedState;
      return a !== null ? a.dehydrated !== null : (e.memoizedProps, !0);
    }
    function Wh(e) {
      for (var t = e; t !== null; ) {
        if (t.tag === Re) {
          var a = t.memoizedState;
          if (a !== null) {
            var i = a.dehydrated;
            if (i === null || V0(i) || Uy(i))
              return t;
          }
        } else if (t.tag === ht && // revealOrder undefined can't be trusted because it don't
        // keep track of whether it suspended or not.
        t.memoizedProps.revealOrder !== void 0) {
          var u = (t.flags & Qe) !== ke;
          if (u)
            return t;
        } else if (t.child !== null) {
          t.child.return = t, t = t.child;
          continue;
        }
        if (t === e)
          return null;
        for (; t.sibling === null; ) {
          if (t.return === null || t.return === e)
            return null;
          t = t.return;
        }
        t.sibling.return = t.return, t = t.sibling;
      }
      return null;
    }
    var Ya = (
      /*   */
      0
    ), lr = (
      /* */
      1
    ), Vl = (
      /*  */
      2
    ), ur = (
      /*    */
      4
    ), Or = (
      /*   */
      8
    ), Og = [];
    function Lg() {
      for (var e = 0; e < Og.length; e++) {
        var t = Og[e];
        t._workInProgressVersionPrimary = null;
      }
      Og.length = 0;
    }
    function Hw(e, t) {
      var a = t._getVersion, i = a(t._source);
      e.mutableSourceEagerHydrationData == null ? e.mutableSourceEagerHydrationData = [t, i] : e.mutableSourceEagerHydrationData.push(t, i);
    }
    var ue = Tt.ReactCurrentDispatcher, vp = Tt.ReactCurrentBatchConfig, Mg, Lf;
    Mg = /* @__PURE__ */ new Set();
    var tc = V, Vt = null, or = null, sr = null, Gh = !1, hp = !1, mp = 0, Vw = 0, Pw = 25, P = null, bi = null, Ao = -1, Ng = !1;
    function zt() {
      {
        var e = P;
        bi === null ? bi = [e] : bi.push(e);
      }
    }
    function ee() {
      {
        var e = P;
        bi !== null && (Ao++, bi[Ao] !== e && Bw(e));
      }
    }
    function Mf(e) {
      e != null && !Rt(e) && S("%s received a final argument that is not an array (instead, received `%s`). When specified, the final argument must be an array.", P, typeof e);
    }
    function Bw(e) {
      {
        var t = Ye(Vt);
        if (!Mg.has(t) && (Mg.add(t), bi !== null)) {
          for (var a = "", i = 30, u = 0; u <= Ao; u++) {
            for (var s = bi[u], f = u === Ao ? e : s, p = u + 1 + ". " + s; p.length < i; )
              p += " ";
            p += f + `
`, a += p;
          }
          S(`React has detected a change in the order of Hooks called by %s. This will lead to bugs and errors if not fixed. For more information, read the Rules of Hooks: https://reactjs.org/link/rules-of-hooks

   Previous render            Next render
   ------------------------------------------------------
%s   ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
`, t, a);
        }
      }
    }
    function ra() {
      throw new Error(`Invalid hook call. Hooks can only be called inside of the body of a function component. This could happen for one of the following reasons:
1. You might have mismatching versions of React and the renderer (such as React DOM)
2. You might be breaking the Rules of Hooks
3. You might have more than one copy of React in the same app
See https://reactjs.org/link/invalid-hook-call for tips about how to debug and fix this problem.`);
    }
    function zg(e, t) {
      if (Ng)
        return !1;
      if (t === null)
        return S("%s received a final argument during this render, but not during the previous render. Even though the final argument is optional, its type cannot change between renders.", P), !1;
      e.length !== t.length && S(`The final argument passed to %s changed size between renders. The order and size of this array must remain constant.

Previous: %s
Incoming: %s`, P, "[" + t.join(", ") + "]", "[" + e.join(", ") + "]");
      for (var a = 0; a < t.length && a < e.length; a++)
        if (!ye(e[a], t[a]))
          return !1;
      return !0;
    }
    function Nf(e, t, a, i, u, s) {
      tc = s, Vt = t, bi = e !== null ? e._debugHookTypes : null, Ao = -1, Ng = e !== null && e.type !== t.type, t.memoizedState = null, t.updateQueue = null, t.lanes = V, e !== null && e.memoizedState !== null ? ue.current = ZE : bi !== null ? ue.current = KE : ue.current = XE;
      var f = a(i, u);
      if (hp) {
        var p = 0;
        do {
          if (hp = !1, mp = 0, p >= Pw)
            throw new Error("Too many re-renders. React limits the number of renders to prevent an infinite loop.");
          p += 1, Ng = !1, or = null, sr = null, t.updateQueue = null, Ao = -1, ue.current = JE, f = a(i, u);
        } while (hp);
      }
      ue.current = um, t._debugHookTypes = bi;
      var v = or !== null && or.next !== null;
      if (tc = V, Vt = null, or = null, sr = null, P = null, bi = null, Ao = -1, e !== null && (e.flags & ar) !== (t.flags & ar) && // Disable this warning in legacy mode, because legacy Suspense is weird
      // and creates false positives. To make this work in legacy mode, we'd
      // need to mark fibers that commit in an incomplete state, somehow. For
      // now I'll disable the warning that most of the bugs that would trigger
      // it are either exclusive to concurrent mode or exist in both.
      (e.mode & _e) !== Oe && S("Internal React error: Expected static flag was missing. Please notify the React team."), Gh = !1, v)
        throw new Error("Rendered fewer hooks than expected. This may be caused by an accidental early return statement.");
      return f;
    }
    function zf() {
      var e = mp !== 0;
      return mp = 0, e;
    }
    function LE(e, t, a) {
      t.updateQueue = e.updateQueue, (t.mode & Ua) !== Oe ? t.flags &= ~(ou | Na | Ir | Te) : t.flags &= ~(Ir | Te), e.lanes = Ms(e.lanes, a);
    }
    function ME() {
      if (ue.current = um, Gh) {
        for (var e = Vt.memoizedState; e !== null; ) {
          var t = e.queue;
          t !== null && (t.pending = null), e = e.next;
        }
        Gh = !1;
      }
      tc = V, Vt = null, or = null, sr = null, bi = null, Ao = -1, P = null, IE = !1, hp = !1, mp = 0;
    }
    function Pl() {
      var e = {
        memoizedState: null,
        baseState: null,
        baseQueue: null,
        queue: null,
        next: null
      };
      return sr === null ? Vt.memoizedState = sr = e : sr = sr.next = e, sr;
    }
    function Di() {
      var e;
      if (or === null) {
        var t = Vt.alternate;
        t !== null ? e = t.memoizedState : e = null;
      } else
        e = or.next;
      var a;
      if (sr === null ? a = Vt.memoizedState : a = sr.next, a !== null)
        sr = a, a = sr.next, or = e;
      else {
        if (e === null)
          throw new Error("Rendered more hooks than during the previous render.");
        or = e;
        var i = {
          memoizedState: or.memoizedState,
          baseState: or.baseState,
          baseQueue: or.baseQueue,
          queue: or.queue,
          next: null
        };
        sr === null ? Vt.memoizedState = sr = i : sr = sr.next = i;
      }
      return sr;
    }
    function NE() {
      return {
        lastEffect: null,
        stores: null
      };
    }
    function Ug(e, t) {
      return typeof t == "function" ? t(e) : t;
    }
    function Ag(e, t, a) {
      var i = Pl(), u;
      a !== void 0 ? u = a(t) : u = t, i.memoizedState = i.baseState = u;
      var s = {
        pending: null,
        interleaved: null,
        lanes: V,
        dispatch: null,
        lastRenderedReducer: e,
        lastRenderedState: u
      };
      i.queue = s;
      var f = s.dispatch = Qw.bind(null, Vt, s);
      return [i.memoizedState, f];
    }
    function Fg(e, t, a) {
      var i = Di(), u = i.queue;
      if (u === null)
        throw new Error("Should have a queue. This is likely a bug in React. Please file an issue.");
      u.lastRenderedReducer = e;
      var s = or, f = s.baseQueue, p = u.pending;
      if (p !== null) {
        if (f !== null) {
          var v = f.next, y = p.next;
          f.next = y, p.next = v;
        }
        s.baseQueue !== f && S("Internal error: Expected work-in-progress queue to be a clone. This is a bug in React."), s.baseQueue = f = p, u.pending = null;
      }
      if (f !== null) {
        var g = f.next, b = s.baseState, _ = null, N = null, z = null, j = g;
        do {
          var se = j.lane;
          if (gu(tc, se)) {
            if (z !== null) {
              var xe = {
                // This update is going to be committed so we never want uncommit
                // it. Using NoLane works because 0 is a subset of all bitmasks, so
                // this will never be skipped by the check above.
                lane: bn,
                action: j.action,
                hasEagerState: j.hasEagerState,
                eagerState: j.eagerState,
                next: null
              };
              z = z.next = xe;
            }
            if (j.hasEagerState)
              b = j.eagerState;
            else {
              var gt = j.action;
              b = e(b, gt);
            }
          } else {
            var Le = {
              lane: se,
              action: j.action,
              hasEagerState: j.hasEagerState,
              eagerState: j.eagerState,
              next: null
            };
            z === null ? (N = z = Le, _ = b) : z = z.next = Le, Vt.lanes = qe(Vt.lanes, se), Up(se);
          }
          j = j.next;
        } while (j !== null && j !== g);
        z === null ? _ = b : z.next = N, ye(b, i.memoizedState) || Tp(), i.memoizedState = b, i.baseState = _, i.baseQueue = z, u.lastRenderedState = b;
      }
      var pt = u.interleaved;
      if (pt !== null) {
        var k = pt;
        do {
          var H = k.lane;
          Vt.lanes = qe(Vt.lanes, H), Up(H), k = k.next;
        } while (k !== pt);
      } else
        f === null && (u.lanes = V);
      var O = u.dispatch;
      return [i.memoizedState, O];
    }
    function jg(e, t, a) {
      var i = Di(), u = i.queue;
      if (u === null)
        throw new Error("Should have a queue. This is likely a bug in React. Please file an issue.");
      u.lastRenderedReducer = e;
      var s = u.dispatch, f = u.pending, p = i.memoizedState;
      if (f !== null) {
        u.pending = null;
        var v = f.next, y = v;
        do {
          var g = y.action;
          p = e(p, g), y = y.next;
        } while (y !== v);
        ye(p, i.memoizedState) || Tp(), i.memoizedState = p, i.baseQueue === null && (i.baseState = p), u.lastRenderedState = p;
      }
      return [p, s];
    }
    function dD(e, t, a) {
    }
    function pD(e, t, a) {
    }
    function Hg(e, t, a) {
      var i = Vt, u = Pl(), s, f = kr();
      if (f) {
        if (a === void 0)
          throw new Error("Missing getServerSnapshot, which is required for server-rendered content. Will revert to client rendering.");
        s = a(), Lf || s !== a() && (S("The result of getServerSnapshot should be cached to avoid an infinite loop"), Lf = !0);
      } else {
        if (s = t(), !Lf) {
          var p = t();
          ye(s, p) || (S("The result of getSnapshot should be cached to avoid an infinite loop"), Lf = !0);
        }
        var v = _m();
        if (v === null)
          throw new Error("Expected a work-in-progress root. This is a bug in React. Please file an issue.");
        Ls(v, tc) || zE(i, t, s);
      }
      u.memoizedState = s;
      var y = {
        value: s,
        getSnapshot: t
      };
      return u.queue = y, Jh(AE.bind(null, i, y, e), [e]), i.flags |= Ir, yp(lr | Or, UE.bind(null, i, y, s, t), void 0, null), s;
    }
    function qh(e, t, a) {
      var i = Vt, u = Di(), s = t();
      if (!Lf) {
        var f = t();
        ye(s, f) || (S("The result of getSnapshot should be cached to avoid an infinite loop"), Lf = !0);
      }
      var p = u.memoizedState, v = !ye(p, s);
      v && (u.memoizedState = s, Tp());
      var y = u.queue;
      if (Sp(AE.bind(null, i, y, e), [e]), y.getSnapshot !== t || v || // Check if the susbcribe function changed. We can save some memory by
      // checking whether we scheduled a subscription effect above.
      sr !== null && sr.memoizedState.tag & lr) {
        i.flags |= Ir, yp(lr | Or, UE.bind(null, i, y, s, t), void 0, null);
        var g = _m();
        if (g === null)
          throw new Error("Expected a work-in-progress root. This is a bug in React. Please file an issue.");
        Ls(g, tc) || zE(i, t, s);
      }
      return s;
    }
    function zE(e, t, a) {
      e.flags |= uu;
      var i = {
        getSnapshot: t,
        value: a
      }, u = Vt.updateQueue;
      if (u === null)
        u = NE(), Vt.updateQueue = u, u.stores = [i];
      else {
        var s = u.stores;
        s === null ? u.stores = [i] : s.push(i);
      }
    }
    function UE(e, t, a, i) {
      t.value = a, t.getSnapshot = i, FE(t) && jE(e);
    }
    function AE(e, t, a) {
      var i = function() {
        FE(t) && jE(e);
      };
      return a(i);
    }
    function FE(e) {
      var t = e.getSnapshot, a = e.value;
      try {
        var i = t();
        return !ye(a, i);
      } catch {
        return !0;
      }
    }
    function jE(e) {
      var t = $a(e, ze);
      t !== null && pr(t, e, ze, Xt);
    }
    function Xh(e) {
      var t = Pl();
      typeof e == "function" && (e = e()), t.memoizedState = t.baseState = e;
      var a = {
        pending: null,
        interleaved: null,
        lanes: V,
        dispatch: null,
        lastRenderedReducer: Ug,
        lastRenderedState: e
      };
      t.queue = a;
      var i = a.dispatch = Ww.bind(null, Vt, a);
      return [t.memoizedState, i];
    }
    function Vg(e) {
      return Fg(Ug);
    }
    function Pg(e) {
      return jg(Ug);
    }
    function yp(e, t, a, i) {
      var u = {
        tag: e,
        create: t,
        destroy: a,
        deps: i,
        // Circular
        next: null
      }, s = Vt.updateQueue;
      if (s === null)
        s = NE(), Vt.updateQueue = s, s.lastEffect = u.next = u;
      else {
        var f = s.lastEffect;
        if (f === null)
          s.lastEffect = u.next = u;
        else {
          var p = f.next;
          f.next = u, u.next = p, s.lastEffect = u;
        }
      }
      return u;
    }
    function Bg(e) {
      var t = Pl();
      {
        var a = {
          current: e
        };
        return t.memoizedState = a, a;
      }
    }
    function Kh(e) {
      var t = Di();
      return t.memoizedState;
    }
    function gp(e, t, a, i) {
      var u = Pl(), s = i === void 0 ? null : i;
      Vt.flags |= e, u.memoizedState = yp(lr | t, a, void 0, s);
    }
    function Zh(e, t, a, i) {
      var u = Di(), s = i === void 0 ? null : i, f = void 0;
      if (or !== null) {
        var p = or.memoizedState;
        if (f = p.destroy, s !== null) {
          var v = p.deps;
          if (zg(s, v)) {
            u.memoizedState = yp(t, a, f, s);
            return;
          }
        }
      }
      Vt.flags |= e, u.memoizedState = yp(lr | t, a, f, s);
    }
    function Jh(e, t) {
      return (Vt.mode & Ua) !== Oe ? gp(ou | Ir | wl, Or, e, t) : gp(Ir | wl, Or, e, t);
    }
    function Sp(e, t) {
      return Zh(Ir, Or, e, t);
    }
    function $g(e, t) {
      return gp(Te, Vl, e, t);
    }
    function em(e, t) {
      return Zh(Te, Vl, e, t);
    }
    function Yg(e, t) {
      var a = Te;
      return a |= Ma, (Vt.mode & Ua) !== Oe && (a |= Na), gp(a, ur, e, t);
    }
    function tm(e, t) {
      return Zh(Te, ur, e, t);
    }
    function HE(e, t) {
      if (typeof t == "function") {
        var a = t, i = e();
        return a(i), function() {
          a(null);
        };
      } else if (t != null) {
        var u = t;
        u.hasOwnProperty("current") || S("Expected useImperativeHandle() first argument to either be a ref callback or React.createRef() object. Instead received: %s.", "an object with keys {" + Object.keys(u).join(", ") + "}");
        var s = e();
        return u.current = s, function() {
          u.current = null;
        };
      }
    }
    function Ig(e, t, a) {
      typeof t != "function" && S("Expected useImperativeHandle() second argument to be a function that creates a handle. Instead received: %s.", t !== null ? typeof t : "null");
      var i = a != null ? a.concat([e]) : null, u = Te;
      return u |= Ma, (Vt.mode & Ua) !== Oe && (u |= Na), gp(u, ur, HE.bind(null, t, e), i);
    }
    function nm(e, t, a) {
      typeof t != "function" && S("Expected useImperativeHandle() second argument to be a function that creates a handle. Instead received: %s.", t !== null ? typeof t : "null");
      var i = a != null ? a.concat([e]) : null;
      return Zh(Te, ur, HE.bind(null, t, e), i);
    }
    function $w(e, t) {
    }
    var rm = $w;
    function Qg(e, t) {
      var a = Pl(), i = t === void 0 ? null : t;
      return a.memoizedState = [e, i], e;
    }
    function am(e, t) {
      var a = Di(), i = t === void 0 ? null : t, u = a.memoizedState;
      if (u !== null && i !== null) {
        var s = u[1];
        if (zg(i, s))
          return u[0];
      }
      return a.memoizedState = [e, i], e;
    }
    function Wg(e, t) {
      var a = Pl(), i = t === void 0 ? null : t, u = e();
      return a.memoizedState = [u, i], u;
    }
    function im(e, t) {
      var a = Di(), i = t === void 0 ? null : t, u = a.memoizedState;
      if (u !== null && i !== null) {
        var s = u[1];
        if (zg(i, s))
          return u[0];
      }
      var f = e();
      return a.memoizedState = [f, i], f;
    }
    function Gg(e) {
      var t = Pl();
      return t.memoizedState = e, e;
    }
    function VE(e) {
      var t = Di(), a = or, i = a.memoizedState;
      return BE(t, i, e);
    }
    function PE(e) {
      var t = Di();
      if (or === null)
        return t.memoizedState = e, e;
      var a = or.memoizedState;
      return BE(t, a, e);
    }
    function BE(e, t, a) {
      var i = !zv(tc);
      if (i) {
        if (!ye(a, t)) {
          var u = Fv();
          Vt.lanes = qe(Vt.lanes, u), Up(u), e.baseState = !0;
        }
        return t;
      } else
        return e.baseState && (e.baseState = !1, Tp()), e.memoizedState = a, a;
    }
    function Yw(e, t, a) {
      var i = Fa();
      En(ny(i, qi)), e(!0);
      var u = vp.transition;
      vp.transition = {};
      var s = vp.transition;
      vp.transition._updatedFibers = /* @__PURE__ */ new Set();
      try {
        e(!1), t();
      } finally {
        if (En(i), vp.transition = u, u === null && s._updatedFibers) {
          var f = s._updatedFibers.size;
          f > 10 && nt("Detected a large number of updates inside startTransition. If this is due to a subscription please re-write it to use React provided hooks. Otherwise concurrent mode guarantees are off the table."), s._updatedFibers.clear();
        }
      }
    }
    function qg() {
      var e = Xh(!1), t = e[0], a = e[1], i = Yw.bind(null, a), u = Pl();
      return u.memoizedState = i, [t, i];
    }
    function $E() {
      var e = Vg(), t = e[0], a = Di(), i = a.memoizedState;
      return [t, i];
    }
    function YE() {
      var e = Pg(), t = e[0], a = Di(), i = a.memoizedState;
      return [t, i];
    }
    var IE = !1;
    function Iw() {
      return IE;
    }
    function Xg() {
      var e = Pl(), t = _m(), a = t.identifierPrefix, i;
      if (kr()) {
        var u = iw();
        i = ":" + a + "R" + u;
        var s = mp++;
        s > 0 && (i += "H" + s.toString(32)), i += ":";
      } else {
        var f = Vw++;
        i = ":" + a + "r" + f.toString(32) + ":";
      }
      return e.memoizedState = i, i;
    }
    function lm() {
      var e = Di(), t = e.memoizedState;
      return t;
    }
    function Qw(e, t, a) {
      typeof arguments[3] == "function" && S("State updates from the useState() and useReducer() Hooks don't support the second callback argument. To execute a side effect after rendering, declare it in the component body with useEffect().");
      var i = Po(e), u = {
        lane: i,
        action: a,
        hasEagerState: !1,
        eagerState: null,
        next: null
      };
      if (QE(e))
        WE(t, u);
      else {
        var s = cE(e, t, u, i);
        if (s !== null) {
          var f = Ra();
          pr(s, e, i, f), GE(s, t, i);
        }
      }
      qE(e, i);
    }
    function Ww(e, t, a) {
      typeof arguments[3] == "function" && S("State updates from the useState() and useReducer() Hooks don't support the second callback argument. To execute a side effect after rendering, declare it in the component body with useEffect().");
      var i = Po(e), u = {
        lane: i,
        action: a,
        hasEagerState: !1,
        eagerState: null,
        next: null
      };
      if (QE(e))
        WE(t, u);
      else {
        var s = e.alternate;
        if (e.lanes === V && (s === null || s.lanes === V)) {
          var f = t.lastRenderedReducer;
          if (f !== null) {
            var p;
            p = ue.current, ue.current = al;
            try {
              var v = t.lastRenderedState, y = f(v, a);
              if (u.hasEagerState = !0, u.eagerState = y, ye(y, v)) {
                _w(e, t, u, i);
                return;
              }
            } catch {
            } finally {
              ue.current = p;
            }
          }
        }
        var g = cE(e, t, u, i);
        if (g !== null) {
          var b = Ra();
          pr(g, e, i, b), GE(g, t, i);
        }
      }
      qE(e, i);
    }
    function QE(e) {
      var t = e.alternate;
      return e === Vt || t !== null && t === Vt;
    }
    function WE(e, t) {
      hp = Gh = !0;
      var a = e.pending;
      a === null ? t.next = t : (t.next = a.next, a.next = t), e.pending = t;
    }
    function GE(e, t, a) {
      if (_d(a)) {
        var i = t.lanes;
        i = $c(i, e.pendingLanes);
        var u = qe(i, a);
        t.lanes = u, xd(e, u);
      }
    }
    function qE(e, t, a) {
      bc(e, t);
    }
    var um = {
      readContext: Kn,
      useCallback: ra,
      useContext: ra,
      useEffect: ra,
      useImperativeHandle: ra,
      useInsertionEffect: ra,
      useLayoutEffect: ra,
      useMemo: ra,
      useReducer: ra,
      useRef: ra,
      useState: ra,
      useDebugValue: ra,
      useDeferredValue: ra,
      useTransition: ra,
      useMutableSource: ra,
      useSyncExternalStore: ra,
      useId: ra,
      unstable_isNewReconciler: ve
    }, XE = null, KE = null, ZE = null, JE = null, Bl = null, al = null, om = null;
    {
      var Kg = function() {
        S("Context can only be read while React is rendering. In classes, you can read it in the render method or getDerivedStateFromProps. In function components, you can read it directly in the function body, but not inside Hooks like useReducer() or useMemo().");
      }, We = function() {
        S("Do not call Hooks inside useEffect(...), useMemo(...), or other built-in Hooks. You can only call Hooks at the top level of your React function. For more information, see https://reactjs.org/link/rules-of-hooks");
      };
      XE = {
        readContext: function(e) {
          return Kn(e);
        },
        useCallback: function(e, t) {
          return P = "useCallback", zt(), Mf(t), Qg(e, t);
        },
        useContext: function(e) {
          return P = "useContext", zt(), Kn(e);
        },
        useEffect: function(e, t) {
          return P = "useEffect", zt(), Mf(t), Jh(e, t);
        },
        useImperativeHandle: function(e, t, a) {
          return P = "useImperativeHandle", zt(), Mf(a), Ig(e, t, a);
        },
        useInsertionEffect: function(e, t) {
          return P = "useInsertionEffect", zt(), Mf(t), $g(e, t);
        },
        useLayoutEffect: function(e, t) {
          return P = "useLayoutEffect", zt(), Mf(t), Yg(e, t);
        },
        useMemo: function(e, t) {
          P = "useMemo", zt(), Mf(t);
          var a = ue.current;
          ue.current = Bl;
          try {
            return Wg(e, t);
          } finally {
            ue.current = a;
          }
        },
        useReducer: function(e, t, a) {
          P = "useReducer", zt();
          var i = ue.current;
          ue.current = Bl;
          try {
            return Ag(e, t, a);
          } finally {
            ue.current = i;
          }
        },
        useRef: function(e) {
          return P = "useRef", zt(), Bg(e);
        },
        useState: function(e) {
          P = "useState", zt();
          var t = ue.current;
          ue.current = Bl;
          try {
            return Xh(e);
          } finally {
            ue.current = t;
          }
        },
        useDebugValue: function(e, t) {
          return P = "useDebugValue", zt(), void 0;
        },
        useDeferredValue: function(e) {
          return P = "useDeferredValue", zt(), Gg(e);
        },
        useTransition: function() {
          return P = "useTransition", zt(), qg();
        },
        useMutableSource: function(e, t, a) {
          return P = "useMutableSource", zt(), void 0;
        },
        useSyncExternalStore: function(e, t, a) {
          return P = "useSyncExternalStore", zt(), Hg(e, t, a);
        },
        useId: function() {
          return P = "useId", zt(), Xg();
        },
        unstable_isNewReconciler: ve
      }, KE = {
        readContext: function(e) {
          return Kn(e);
        },
        useCallback: function(e, t) {
          return P = "useCallback", ee(), Qg(e, t);
        },
        useContext: function(e) {
          return P = "useContext", ee(), Kn(e);
        },
        useEffect: function(e, t) {
          return P = "useEffect", ee(), Jh(e, t);
        },
        useImperativeHandle: function(e, t, a) {
          return P = "useImperativeHandle", ee(), Ig(e, t, a);
        },
        useInsertionEffect: function(e, t) {
          return P = "useInsertionEffect", ee(), $g(e, t);
        },
        useLayoutEffect: function(e, t) {
          return P = "useLayoutEffect", ee(), Yg(e, t);
        },
        useMemo: function(e, t) {
          P = "useMemo", ee();
          var a = ue.current;
          ue.current = Bl;
          try {
            return Wg(e, t);
          } finally {
            ue.current = a;
          }
        },
        useReducer: function(e, t, a) {
          P = "useReducer", ee();
          var i = ue.current;
          ue.current = Bl;
          try {
            return Ag(e, t, a);
          } finally {
            ue.current = i;
          }
        },
        useRef: function(e) {
          return P = "useRef", ee(), Bg(e);
        },
        useState: function(e) {
          P = "useState", ee();
          var t = ue.current;
          ue.current = Bl;
          try {
            return Xh(e);
          } finally {
            ue.current = t;
          }
        },
        useDebugValue: function(e, t) {
          return P = "useDebugValue", ee(), void 0;
        },
        useDeferredValue: function(e) {
          return P = "useDeferredValue", ee(), Gg(e);
        },
        useTransition: function() {
          return P = "useTransition", ee(), qg();
        },
        useMutableSource: function(e, t, a) {
          return P = "useMutableSource", ee(), void 0;
        },
        useSyncExternalStore: function(e, t, a) {
          return P = "useSyncExternalStore", ee(), Hg(e, t, a);
        },
        useId: function() {
          return P = "useId", ee(), Xg();
        },
        unstable_isNewReconciler: ve
      }, ZE = {
        readContext: function(e) {
          return Kn(e);
        },
        useCallback: function(e, t) {
          return P = "useCallback", ee(), am(e, t);
        },
        useContext: function(e) {
          return P = "useContext", ee(), Kn(e);
        },
        useEffect: function(e, t) {
          return P = "useEffect", ee(), Sp(e, t);
        },
        useImperativeHandle: function(e, t, a) {
          return P = "useImperativeHandle", ee(), nm(e, t, a);
        },
        useInsertionEffect: function(e, t) {
          return P = "useInsertionEffect", ee(), em(e, t);
        },
        useLayoutEffect: function(e, t) {
          return P = "useLayoutEffect", ee(), tm(e, t);
        },
        useMemo: function(e, t) {
          P = "useMemo", ee();
          var a = ue.current;
          ue.current = al;
          try {
            return im(e, t);
          } finally {
            ue.current = a;
          }
        },
        useReducer: function(e, t, a) {
          P = "useReducer", ee();
          var i = ue.current;
          ue.current = al;
          try {
            return Fg(e, t, a);
          } finally {
            ue.current = i;
          }
        },
        useRef: function(e) {
          return P = "useRef", ee(), Kh();
        },
        useState: function(e) {
          P = "useState", ee();
          var t = ue.current;
          ue.current = al;
          try {
            return Vg(e);
          } finally {
            ue.current = t;
          }
        },
        useDebugValue: function(e, t) {
          return P = "useDebugValue", ee(), rm();
        },
        useDeferredValue: function(e) {
          return P = "useDeferredValue", ee(), VE(e);
        },
        useTransition: function() {
          return P = "useTransition", ee(), $E();
        },
        useMutableSource: function(e, t, a) {
          return P = "useMutableSource", ee(), void 0;
        },
        useSyncExternalStore: function(e, t, a) {
          return P = "useSyncExternalStore", ee(), qh(e, t);
        },
        useId: function() {
          return P = "useId", ee(), lm();
        },
        unstable_isNewReconciler: ve
      }, JE = {
        readContext: function(e) {
          return Kn(e);
        },
        useCallback: function(e, t) {
          return P = "useCallback", ee(), am(e, t);
        },
        useContext: function(e) {
          return P = "useContext", ee(), Kn(e);
        },
        useEffect: function(e, t) {
          return P = "useEffect", ee(), Sp(e, t);
        },
        useImperativeHandle: function(e, t, a) {
          return P = "useImperativeHandle", ee(), nm(e, t, a);
        },
        useInsertionEffect: function(e, t) {
          return P = "useInsertionEffect", ee(), em(e, t);
        },
        useLayoutEffect: function(e, t) {
          return P = "useLayoutEffect", ee(), tm(e, t);
        },
        useMemo: function(e, t) {
          P = "useMemo", ee();
          var a = ue.current;
          ue.current = om;
          try {
            return im(e, t);
          } finally {
            ue.current = a;
          }
        },
        useReducer: function(e, t, a) {
          P = "useReducer", ee();
          var i = ue.current;
          ue.current = om;
          try {
            return jg(e, t, a);
          } finally {
            ue.current = i;
          }
        },
        useRef: function(e) {
          return P = "useRef", ee(), Kh();
        },
        useState: function(e) {
          P = "useState", ee();
          var t = ue.current;
          ue.current = om;
          try {
            return Pg(e);
          } finally {
            ue.current = t;
          }
        },
        useDebugValue: function(e, t) {
          return P = "useDebugValue", ee(), rm();
        },
        useDeferredValue: function(e) {
          return P = "useDeferredValue", ee(), PE(e);
        },
        useTransition: function() {
          return P = "useTransition", ee(), YE();
        },
        useMutableSource: function(e, t, a) {
          return P = "useMutableSource", ee(), void 0;
        },
        useSyncExternalStore: function(e, t, a) {
          return P = "useSyncExternalStore", ee(), qh(e, t);
        },
        useId: function() {
          return P = "useId", ee(), lm();
        },
        unstable_isNewReconciler: ve
      }, Bl = {
        readContext: function(e) {
          return Kg(), Kn(e);
        },
        useCallback: function(e, t) {
          return P = "useCallback", We(), zt(), Qg(e, t);
        },
        useContext: function(e) {
          return P = "useContext", We(), zt(), Kn(e);
        },
        useEffect: function(e, t) {
          return P = "useEffect", We(), zt(), Jh(e, t);
        },
        useImperativeHandle: function(e, t, a) {
          return P = "useImperativeHandle", We(), zt(), Ig(e, t, a);
        },
        useInsertionEffect: function(e, t) {
          return P = "useInsertionEffect", We(), zt(), $g(e, t);
        },
        useLayoutEffect: function(e, t) {
          return P = "useLayoutEffect", We(), zt(), Yg(e, t);
        },
        useMemo: function(e, t) {
          P = "useMemo", We(), zt();
          var a = ue.current;
          ue.current = Bl;
          try {
            return Wg(e, t);
          } finally {
            ue.current = a;
          }
        },
        useReducer: function(e, t, a) {
          P = "useReducer", We(), zt();
          var i = ue.current;
          ue.current = Bl;
          try {
            return Ag(e, t, a);
          } finally {
            ue.current = i;
          }
        },
        useRef: function(e) {
          return P = "useRef", We(), zt(), Bg(e);
        },
        useState: function(e) {
          P = "useState", We(), zt();
          var t = ue.current;
          ue.current = Bl;
          try {
            return Xh(e);
          } finally {
            ue.current = t;
          }
        },
        useDebugValue: function(e, t) {
          return P = "useDebugValue", We(), zt(), void 0;
        },
        useDeferredValue: function(e) {
          return P = "useDeferredValue", We(), zt(), Gg(e);
        },
        useTransition: function() {
          return P = "useTransition", We(), zt(), qg();
        },
        useMutableSource: function(e, t, a) {
          return P = "useMutableSource", We(), zt(), void 0;
        },
        useSyncExternalStore: function(e, t, a) {
          return P = "useSyncExternalStore", We(), zt(), Hg(e, t, a);
        },
        useId: function() {
          return P = "useId", We(), zt(), Xg();
        },
        unstable_isNewReconciler: ve
      }, al = {
        readContext: function(e) {
          return Kg(), Kn(e);
        },
        useCallback: function(e, t) {
          return P = "useCallback", We(), ee(), am(e, t);
        },
        useContext: function(e) {
          return P = "useContext", We(), ee(), Kn(e);
        },
        useEffect: function(e, t) {
          return P = "useEffect", We(), ee(), Sp(e, t);
        },
        useImperativeHandle: function(e, t, a) {
          return P = "useImperativeHandle", We(), ee(), nm(e, t, a);
        },
        useInsertionEffect: function(e, t) {
          return P = "useInsertionEffect", We(), ee(), em(e, t);
        },
        useLayoutEffect: function(e, t) {
          return P = "useLayoutEffect", We(), ee(), tm(e, t);
        },
        useMemo: function(e, t) {
          P = "useMemo", We(), ee();
          var a = ue.current;
          ue.current = al;
          try {
            return im(e, t);
          } finally {
            ue.current = a;
          }
        },
        useReducer: function(e, t, a) {
          P = "useReducer", We(), ee();
          var i = ue.current;
          ue.current = al;
          try {
            return Fg(e, t, a);
          } finally {
            ue.current = i;
          }
        },
        useRef: function(e) {
          return P = "useRef", We(), ee(), Kh();
        },
        useState: function(e) {
          P = "useState", We(), ee();
          var t = ue.current;
          ue.current = al;
          try {
            return Vg(e);
          } finally {
            ue.current = t;
          }
        },
        useDebugValue: function(e, t) {
          return P = "useDebugValue", We(), ee(), rm();
        },
        useDeferredValue: function(e) {
          return P = "useDeferredValue", We(), ee(), VE(e);
        },
        useTransition: function() {
          return P = "useTransition", We(), ee(), $E();
        },
        useMutableSource: function(e, t, a) {
          return P = "useMutableSource", We(), ee(), void 0;
        },
        useSyncExternalStore: function(e, t, a) {
          return P = "useSyncExternalStore", We(), ee(), qh(e, t);
        },
        useId: function() {
          return P = "useId", We(), ee(), lm();
        },
        unstable_isNewReconciler: ve
      }, om = {
        readContext: function(e) {
          return Kg(), Kn(e);
        },
        useCallback: function(e, t) {
          return P = "useCallback", We(), ee(), am(e, t);
        },
        useContext: function(e) {
          return P = "useContext", We(), ee(), Kn(e);
        },
        useEffect: function(e, t) {
          return P = "useEffect", We(), ee(), Sp(e, t);
        },
        useImperativeHandle: function(e, t, a) {
          return P = "useImperativeHandle", We(), ee(), nm(e, t, a);
        },
        useInsertionEffect: function(e, t) {
          return P = "useInsertionEffect", We(), ee(), em(e, t);
        },
        useLayoutEffect: function(e, t) {
          return P = "useLayoutEffect", We(), ee(), tm(e, t);
        },
        useMemo: function(e, t) {
          P = "useMemo", We(), ee();
          var a = ue.current;
          ue.current = al;
          try {
            return im(e, t);
          } finally {
            ue.current = a;
          }
        },
        useReducer: function(e, t, a) {
          P = "useReducer", We(), ee();
          var i = ue.current;
          ue.current = al;
          try {
            return jg(e, t, a);
          } finally {
            ue.current = i;
          }
        },
        useRef: function(e) {
          return P = "useRef", We(), ee(), Kh();
        },
        useState: function(e) {
          P = "useState", We(), ee();
          var t = ue.current;
          ue.current = al;
          try {
            return Pg(e);
          } finally {
            ue.current = t;
          }
        },
        useDebugValue: function(e, t) {
          return P = "useDebugValue", We(), ee(), rm();
        },
        useDeferredValue: function(e) {
          return P = "useDeferredValue", We(), ee(), PE(e);
        },
        useTransition: function() {
          return P = "useTransition", We(), ee(), YE();
        },
        useMutableSource: function(e, t, a) {
          return P = "useMutableSource", We(), ee(), void 0;
        },
        useSyncExternalStore: function(e, t, a) {
          return P = "useSyncExternalStore", We(), ee(), qh(e, t);
        },
        useId: function() {
          return P = "useId", We(), ee(), lm();
        },
        unstable_isNewReconciler: ve
      };
    }
    var Fo = F.unstable_now, eC = 0, sm = -1, Ep = -1, cm = -1, Zg = !1, fm = !1;
    function tC() {
      return Zg;
    }
    function Gw() {
      fm = !0;
    }
    function qw() {
      Zg = !1, fm = !1;
    }
    function Xw() {
      Zg = fm, fm = !1;
    }
    function nC() {
      return eC;
    }
    function rC() {
      eC = Fo();
    }
    function Jg(e) {
      Ep = Fo(), e.actualStartTime < 0 && (e.actualStartTime = Fo());
    }
    function aC(e) {
      Ep = -1;
    }
    function dm(e, t) {
      if (Ep >= 0) {
        var a = Fo() - Ep;
        e.actualDuration += a, t && (e.selfBaseDuration = a), Ep = -1;
      }
    }
    function $l(e) {
      if (sm >= 0) {
        var t = Fo() - sm;
        sm = -1;
        for (var a = e.return; a !== null; ) {
          switch (a.tag) {
            case te:
              var i = a.stateNode;
              i.effectDuration += t;
              return;
            case _t:
              var u = a.stateNode;
              u.effectDuration += t;
              return;
          }
          a = a.return;
        }
      }
    }
    function eS(e) {
      if (cm >= 0) {
        var t = Fo() - cm;
        cm = -1;
        for (var a = e.return; a !== null; ) {
          switch (a.tag) {
            case te:
              var i = a.stateNode;
              i !== null && (i.passiveEffectDuration += t);
              return;
            case _t:
              var u = a.stateNode;
              u !== null && (u.passiveEffectDuration += t);
              return;
          }
          a = a.return;
        }
      }
    }
    function Yl() {
      sm = Fo();
    }
    function tS() {
      cm = Fo();
    }
    function nS(e) {
      for (var t = e.child; t; )
        e.actualDuration += t.actualDuration, t = t.sibling;
    }
    function nc(e, t) {
      return {
        value: e,
        source: t,
        stack: Hu(t),
        digest: null
      };
    }
    function rS(e, t, a) {
      return {
        value: e,
        source: null,
        stack: a ?? null,
        digest: t ?? null
      };
    }
    function Kw(e, t) {
      return !0;
    }
    function aS(e, t) {
      try {
        var a = Kw(e, t);
        if (a === !1)
          return;
        var i = t.value, u = t.source, s = t.stack, f = s !== null ? s : "";
        if (i != null && i._suppressLogging) {
          if (e.tag === fe)
            return;
          console.error(i);
        }
        var p = u ? Ye(u) : null, v = p ? "The above error occurred in the <" + p + "> component:" : "The above error occurred in one of your React components:", y;
        if (e.tag === te)
          y = `Consider adding an error boundary to your tree to customize error handling behavior.
Visit https://reactjs.org/link/error-boundaries to learn more about error boundaries.`;
        else {
          var g = Ye(e) || "Anonymous";
          y = "React will try to recreate this component tree from scratch " + ("using the error boundary you provided, " + g + ".");
        }
        var b = v + `
` + f + `

` + ("" + y);
        console.error(b);
      } catch (_) {
        setTimeout(function() {
          throw _;
        });
      }
    }
    var Zw = typeof WeakMap == "function" ? WeakMap : Map;
    function iC(e, t, a) {
      var i = Lu(Xt, a);
      i.tag = ag, i.payload = {
        element: null
      };
      var u = t.value;
      return i.callback = function() {
        Yx(u), aS(e, t);
      }, i;
    }
    function iS(e, t, a) {
      var i = Lu(Xt, a);
      i.tag = ag;
      var u = e.type.getDerivedStateFromError;
      if (typeof u == "function") {
        var s = t.value;
        i.payload = function() {
          return u(s);
        }, i.callback = function() {
          m1(e), aS(e, t);
        };
      }
      var f = e.stateNode;
      return f !== null && typeof f.componentDidCatch == "function" && (i.callback = function() {
        m1(e), aS(e, t), typeof u != "function" && Bx(this);
        var v = t.value, y = t.stack;
        this.componentDidCatch(v, {
          componentStack: y !== null ? y : ""
        }), typeof u != "function" && (Jr(e.lanes, ze) || S("%s: Error boundaries should implement getDerivedStateFromError(). In that method, return a state update to display an error message or fallback UI.", Ye(e) || "Unknown"));
      }), i;
    }
    function lC(e, t, a) {
      var i = e.pingCache, u;
      if (i === null ? (i = e.pingCache = new Zw(), u = /* @__PURE__ */ new Set(), i.set(t, u)) : (u = i.get(t), u === void 0 && (u = /* @__PURE__ */ new Set(), i.set(t, u))), !u.has(a)) {
        u.add(a);
        var s = Ix.bind(null, e, t, a);
        ga && Ap(e, a), t.then(s, s);
      }
    }
    function Jw(e, t, a, i) {
      var u = e.updateQueue;
      if (u === null) {
        var s = /* @__PURE__ */ new Set();
        s.add(a), e.updateQueue = s;
      } else
        u.add(a);
    }
    function e_(e, t) {
      var a = e.tag;
      if ((e.mode & _e) === Oe && (a === Me || a === He || a === $e)) {
        var i = e.alternate;
        i ? (e.updateQueue = i.updateQueue, e.memoizedState = i.memoizedState, e.lanes = i.lanes) : (e.updateQueue = null, e.memoizedState = null);
      }
    }
    function uC(e) {
      var t = e;
      do {
        if (t.tag === Re && jw(t))
          return t;
        t = t.return;
      } while (t !== null);
      return null;
    }
    function oC(e, t, a, i, u) {
      if ((e.mode & _e) === Oe) {
        if (e === t)
          e.flags |= rr;
        else {
          if (e.flags |= Qe, a.flags |= Ec, a.flags &= ~(Ev | Tl), a.tag === fe) {
            var s = a.alternate;
            if (s === null)
              a.tag = hn;
            else {
              var f = Lu(Xt, ze);
              f.tag = Ah, No(a, f, ze);
            }
          }
          a.lanes = qe(a.lanes, ze);
        }
        return e;
      }
      return e.flags |= rr, e.lanes = u, e;
    }
    function t_(e, t, a, i, u) {
      if (a.flags |= Tl, ga && Ap(e, u), i !== null && typeof i == "object" && typeof i.then == "function") {
        var s = i;
        e_(a), kr() && a.mode & _e && Z0();
        var f = uC(t);
        if (f !== null) {
          f.flags &= ~xr, oC(f, t, a, e, u), f.mode & _e && lC(e, s, u), Jw(f, e, s);
          return;
        } else {
          if (!wd(u)) {
            lC(e, s, u), jS();
            return;
          }
          var p = new Error("A component suspended while responding to synchronous input. This will cause the UI to be replaced with a loading indicator. To fix, updates that suspend should be wrapped with startTransition.");
          i = p;
        }
      } else if (kr() && a.mode & _e) {
        Z0();
        var v = uC(t);
        if (v !== null) {
          (v.flags & rr) === ke && (v.flags |= xr), oC(v, t, a, e, u), Ky(nc(i, a));
          return;
        }
      }
      i = nc(i, a), zx(i);
      var y = t;
      do {
        switch (y.tag) {
          case te: {
            var g = i;
            y.flags |= rr;
            var b = so(u);
            y.lanes = qe(y.lanes, b);
            var _ = iC(y, g, b);
            ug(y, _);
            return;
          }
          case fe:
            var N = i, z = y.type, j = y.stateNode;
            if ((y.flags & Qe) === ke && (typeof z.getDerivedStateFromError == "function" || j !== null && typeof j.componentDidCatch == "function" && !u1(j))) {
              y.flags |= rr;
              var se = so(u);
              y.lanes = qe(y.lanes, se);
              var Le = iS(y, N, se);
              ug(y, Le);
              return;
            }
            break;
        }
        y = y.return;
      } while (y !== null);
    }
    function n_() {
      return null;
    }
    var Cp = Tt.ReactCurrentOwner, il = !1, lS, Rp, uS, oS, sS, rc, cS, pm;
    lS = {}, Rp = {}, uS = {}, oS = {}, sS = {}, rc = !1, cS = {}, pm = {};
    function Ea(e, t, a, i) {
      e === null ? t.child = xE(t, null, a, i) : t.child = bf(t, e.child, a, i);
    }
    function r_(e, t, a, i) {
      t.child = bf(t, e.child, null, i), t.child = bf(t, null, a, i);
    }
    function sC(e, t, a, i, u) {
      if (t.type !== t.elementType) {
        var s = a.propTypes;
        s && Ji(
          s,
          i,
          // Resolved props
          "prop",
          Ct(a)
        );
      }
      var f = a.render, p = t.ref, v, y;
      xf(t, u), to(t);
      {
        if (Cp.current = t, nr(!0), v = Nf(e, t, f, i, p, u), y = zf(), t.mode & gn) {
          qt(!0);
          try {
            v = Nf(e, t, f, i, p, u), y = zf();
          } finally {
            qt(!1);
          }
        }
        nr(!1);
      }
      return cu(), e !== null && !il ? (LE(e, t, u), Mu(e, t, u)) : (kr() && y && Iy(t), t.flags |= ri, Ea(e, t, v, u), t.child);
    }
    function cC(e, t, a, i, u) {
      if (e === null) {
        var s = a.type;
        if (ob(s) && a.compare === null && // SimpleMemoComponent codepath doesn't resolve outer props either.
        a.defaultProps === void 0) {
          var f = s;
          return f = Bf(s), t.tag = $e, t.type = f, pS(t, s), fC(e, t, f, i, u);
        }
        {
          var p = s.propTypes;
          p && Ji(
            p,
            i,
            // Resolved props
            "prop",
            Ct(s)
          );
        }
        var v = qS(a.type, null, i, t, t.mode, u);
        return v.ref = t.ref, v.return = t, t.child = v, v;
      }
      {
        var y = a.type, g = y.propTypes;
        g && Ji(
          g,
          i,
          // Resolved props
          "prop",
          Ct(y)
        );
      }
      var b = e.child, _ = SS(e, u);
      if (!_) {
        var N = b.memoizedProps, z = a.compare;
        if (z = z !== null ? z : je, z(N, i) && e.ref === t.ref)
          return Mu(e, t, u);
      }
      t.flags |= ri;
      var j = oc(b, i);
      return j.ref = t.ref, j.return = t, t.child = j, j;
    }
    function fC(e, t, a, i, u) {
      if (t.type !== t.elementType) {
        var s = t.elementType;
        if (s.$$typeof === De) {
          var f = s, p = f._payload, v = f._init;
          try {
            s = v(p);
          } catch {
            s = null;
          }
          var y = s && s.propTypes;
          y && Ji(
            y,
            i,
            // Resolved (SimpleMemoComponent has no defaultProps)
            "prop",
            Ct(s)
          );
        }
      }
      if (e !== null) {
        var g = e.memoizedProps;
        if (je(g, i) && e.ref === t.ref && // Prevent bailout if the implementation changed due to hot reload.
        t.type === e.type)
          if (il = !1, t.pendingProps = i = g, SS(e, u))
            (e.flags & Ec) !== ke && (il = !0);
          else
            return t.lanes = e.lanes, Mu(e, t, u);
      }
      return fS(e, t, a, i, u);
    }
    function dC(e, t, a) {
      var i = t.pendingProps, u = i.children, s = e !== null ? e.memoizedState : null;
      if (i.mode === "hidden" || $)
        if ((t.mode & _e) === Oe) {
          var f = {
            baseLanes: V,
            cachePool: null,
            transitions: null
          };
          t.memoizedState = f, xm(t, a);
        } else if (Jr(a, Sa)) {
          var b = {
            baseLanes: V,
            cachePool: null,
            transitions: null
          };
          t.memoizedState = b;
          var _ = s !== null ? s.baseLanes : a;
          xm(t, _);
        } else {
          var p = null, v;
          if (s !== null) {
            var y = s.baseLanes;
            v = qe(y, a);
          } else
            v = a;
          t.lanes = t.childLanes = Sa;
          var g = {
            baseLanes: v,
            cachePool: p,
            transitions: null
          };
          return t.memoizedState = g, t.updateQueue = null, xm(t, v), null;
        }
      else {
        var N;
        s !== null ? (N = qe(s.baseLanes, a), t.memoizedState = null) : N = a, xm(t, N);
      }
      return Ea(e, t, u, a), t.child;
    }
    function a_(e, t, a) {
      var i = t.pendingProps;
      return Ea(e, t, i, a), t.child;
    }
    function i_(e, t, a) {
      var i = t.pendingProps.children;
      return Ea(e, t, i, a), t.child;
    }
    function l_(e, t, a) {
      {
        t.flags |= Te;
        {
          var i = t.stateNode;
          i.effectDuration = 0, i.passiveEffectDuration = 0;
        }
      }
      var u = t.pendingProps, s = u.children;
      return Ea(e, t, s, a), t.child;
    }
    function pC(e, t) {
      var a = t.ref;
      (e === null && a !== null || e !== null && e.ref !== a) && (t.flags |= ha, t.flags |= mi);
    }
    function fS(e, t, a, i, u) {
      if (t.type !== t.elementType) {
        var s = a.propTypes;
        s && Ji(
          s,
          i,
          // Resolved props
          "prop",
          Ct(a)
        );
      }
      var f;
      {
        var p = Ef(t, a, !0);
        f = Cf(t, p);
      }
      var v, y;
      xf(t, u), to(t);
      {
        if (Cp.current = t, nr(!0), v = Nf(e, t, a, i, f, u), y = zf(), t.mode & gn) {
          qt(!0);
          try {
            v = Nf(e, t, a, i, f, u), y = zf();
          } finally {
            qt(!1);
          }
        }
        nr(!1);
      }
      return cu(), e !== null && !il ? (LE(e, t, u), Mu(e, t, u)) : (kr() && y && Iy(t), t.flags |= ri, Ea(e, t, v, u), t.child);
    }
    function vC(e, t, a, i, u) {
      {
        switch (Tb(t)) {
          case !1: {
            var s = t.stateNode, f = t.type, p = new f(t.memoizedProps, s.context), v = p.state;
            s.updater.enqueueSetState(s, v, null);
            break;
          }
          case !0: {
            t.flags |= Qe, t.flags |= rr;
            var y = new Error("Simulated error coming from DevTools"), g = so(u);
            t.lanes = qe(t.lanes, g);
            var b = iS(t, nc(y, t), g);
            ug(t, b);
            break;
          }
        }
        if (t.type !== t.elementType) {
          var _ = a.propTypes;
          _ && Ji(
            _,
            i,
            // Resolved props
            "prop",
            Ct(a)
          );
        }
      }
      var N;
      Hl(a) ? (N = !0, _h(t)) : N = !1, xf(t, u);
      var z = t.stateNode, j;
      z === null ? (hm(e, t), CE(t, a, i), Sg(t, a, i, u), j = !0) : e === null ? j = Mw(t, a, i, u) : j = Nw(e, t, a, i, u);
      var se = dS(e, t, a, j, N, u);
      {
        var Le = t.stateNode;
        j && Le.props !== i && (rc || S("It looks like %s is reassigning its own `this.props` while rendering. This is not supported and can lead to confusing bugs.", Ye(t) || "a component"), rc = !0);
      }
      return se;
    }
    function dS(e, t, a, i, u, s) {
      pC(e, t);
      var f = (t.flags & Qe) !== ke;
      if (!i && !f)
        return u && G0(t, a, !1), Mu(e, t, s);
      var p = t.stateNode;
      Cp.current = t;
      var v;
      if (f && typeof a.getDerivedStateFromError != "function")
        v = null, aC();
      else {
        to(t);
        {
          if (nr(!0), v = p.render(), t.mode & gn) {
            qt(!0);
            try {
              p.render();
            } finally {
              qt(!1);
            }
          }
          nr(!1);
        }
        cu();
      }
      return t.flags |= ri, e !== null && f ? r_(e, t, v, s) : Ea(e, t, v, s), t.memoizedState = p.state, u && G0(t, a, !0), t.child;
    }
    function hC(e) {
      var t = e.stateNode;
      t.pendingContext ? Q0(e, t.pendingContext, t.pendingContext !== t.context) : t.context && Q0(e, t.context, !1), _g(e, t.containerInfo);
    }
    function u_(e, t, a) {
      if (hC(t), e === null)
        throw new Error("Should have a current fiber. This is a bug in React.");
      var i = t.pendingProps, u = t.memoizedState, s = u.element;
      pE(e, t), Vh(t, i, null, a);
      var f = t.memoizedState;
      t.stateNode;
      var p = f.element;
      if (u.isDehydrated) {
        var v = {
          element: p,
          isDehydrated: !1,
          cache: f.cache,
          pendingSuspenseBoundaries: f.pendingSuspenseBoundaries,
          transitions: f.transitions
        }, y = t.updateQueue;
        if (y.baseState = v, t.memoizedState = v, t.flags & xr) {
          var g = nc(new Error("There was an error while hydrating. Because the error happened outside of a Suspense boundary, the entire root will switch to client rendering."), t);
          return mC(e, t, p, a, g);
        } else if (p !== s) {
          var b = nc(new Error("This root received an early update, before anything was able hydrate. Switched the entire root to client rendering."), t);
          return mC(e, t, p, a, b);
        } else {
          fw(t);
          var _ = xE(t, null, p, a);
          t.child = _;
          for (var N = _; N; )
            N.flags = N.flags & ~$t | hi, N = N.sibling;
        }
      } else {
        if (wf(), p === s)
          return Mu(e, t, a);
        Ea(e, t, p, a);
      }
      return t.child;
    }
    function mC(e, t, a, i, u) {
      return wf(), Ky(u), t.flags |= xr, Ea(e, t, a, i), t.child;
    }
    function o_(e, t, a) {
      DE(t), e === null && Xy(t);
      var i = t.type, u = t.pendingProps, s = e !== null ? e.memoizedProps : null, f = u.children, p = Ly(i, u);
      return p ? f = null : s !== null && Ly(i, s) && (t.flags |= La), pC(e, t), Ea(e, t, f, a), t.child;
    }
    function s_(e, t) {
      return e === null && Xy(t), null;
    }
    function c_(e, t, a, i) {
      hm(e, t);
      var u = t.pendingProps, s = a, f = s._payload, p = s._init, v = p(f);
      t.type = v;
      var y = t.tag = sb(v), g = nl(v, u), b;
      switch (y) {
        case Me:
          return pS(t, v), t.type = v = Bf(v), b = fS(null, t, v, g, i), b;
        case fe:
          return t.type = v = $S(v), b = vC(null, t, v, g, i), b;
        case He:
          return t.type = v = YS(v), b = sC(null, t, v, g, i), b;
        case ut: {
          if (t.type !== t.elementType) {
            var _ = v.propTypes;
            _ && Ji(
              _,
              g,
              // Resolved for outer only
              "prop",
              Ct(v)
            );
          }
          return b = cC(
            null,
            t,
            v,
            nl(v.type, g),
            // The inner type can have defaults too
            i
          ), b;
        }
      }
      var N = "";
      throw v !== null && typeof v == "object" && v.$$typeof === De && (N = " Did you wrap a component in React.lazy() more than once?"), new Error("Element type is invalid. Received a promise that resolves to: " + v + ". " + ("Lazy element type must resolve to a class or function." + N));
    }
    function f_(e, t, a, i, u) {
      hm(e, t), t.tag = fe;
      var s;
      return Hl(a) ? (s = !0, _h(t)) : s = !1, xf(t, u), CE(t, a, i), Sg(t, a, i, u), dS(null, t, a, !0, s, u);
    }
    function d_(e, t, a, i) {
      hm(e, t);
      var u = t.pendingProps, s;
      {
        var f = Ef(t, a, !1);
        s = Cf(t, f);
      }
      xf(t, i);
      var p, v;
      to(t);
      {
        if (a.prototype && typeof a.prototype.render == "function") {
          var y = Ct(a) || "Unknown";
          lS[y] || (S("The <%s /> component appears to have a render method, but doesn't extend React.Component. This is likely to cause errors. Change %s to extend React.Component instead.", y, y), lS[y] = !0);
        }
        t.mode & gn && tl.recordLegacyContextWarning(t, null), nr(!0), Cp.current = t, p = Nf(null, t, a, u, s, i), v = zf(), nr(!1);
      }
      if (cu(), t.flags |= ri, typeof p == "object" && p !== null && typeof p.render == "function" && p.$$typeof === void 0) {
        var g = Ct(a) || "Unknown";
        Rp[g] || (S("The <%s /> component appears to be a function component that returns a class instance. Change %s to a class that extends React.Component instead. If you can't use a class try assigning the prototype on the function as a workaround. `%s.prototype = React.Component.prototype`. Don't use an arrow function since it cannot be called with `new` by React.", g, g, g), Rp[g] = !0);
      }
      if (
        // Run these checks in production only if the flag is off.
        // Eventually we'll delete this branch altogether.
        typeof p == "object" && p !== null && typeof p.render == "function" && p.$$typeof === void 0
      ) {
        {
          var b = Ct(a) || "Unknown";
          Rp[b] || (S("The <%s /> component appears to be a function component that returns a class instance. Change %s to a class that extends React.Component instead. If you can't use a class try assigning the prototype on the function as a workaround. `%s.prototype = React.Component.prototype`. Don't use an arrow function since it cannot be called with `new` by React.", b, b, b), Rp[b] = !0);
        }
        t.tag = fe, t.memoizedState = null, t.updateQueue = null;
        var _ = !1;
        return Hl(a) ? (_ = !0, _h(t)) : _ = !1, t.memoizedState = p.state !== null && p.state !== void 0 ? p.state : null, lg(t), EE(t, p), Sg(t, a, u, i), dS(null, t, a, !0, _, i);
      } else {
        if (t.tag = Me, t.mode & gn) {
          qt(!0);
          try {
            p = Nf(null, t, a, u, s, i), v = zf();
          } finally {
            qt(!1);
          }
        }
        return kr() && v && Iy(t), Ea(null, t, p, i), pS(t, a), t.child;
      }
    }
    function pS(e, t) {
      {
        if (t && t.childContextTypes && S("%s(...): childContextTypes cannot be defined on a function component.", t.displayName || t.name || "Component"), e.ref !== null) {
          var a = "", i = Da();
          i && (a += `

Check the render method of \`` + i + "`.");
          var u = i || "", s = e._debugSource;
          s && (u = s.fileName + ":" + s.lineNumber), sS[u] || (sS[u] = !0, S("Function components cannot be given refs. Attempts to access this ref will fail. Did you mean to use React.forwardRef()?%s", a));
        }
        if (typeof t.getDerivedStateFromProps == "function") {
          var f = Ct(t) || "Unknown";
          oS[f] || (S("%s: Function components do not support getDerivedStateFromProps.", f), oS[f] = !0);
        }
        if (typeof t.contextType == "object" && t.contextType !== null) {
          var p = Ct(t) || "Unknown";
          uS[p] || (S("%s: Function components do not support contextType.", p), uS[p] = !0);
        }
      }
    }
    var vS = {
      dehydrated: null,
      treeContext: null,
      retryLane: bn
    };
    function hS(e) {
      return {
        baseLanes: e,
        cachePool: n_(),
        transitions: null
      };
    }
    function p_(e, t) {
      var a = null;
      return {
        baseLanes: qe(e.baseLanes, t),
        cachePool: a,
        transitions: e.transitions
      };
    }
    function v_(e, t, a, i) {
      if (t !== null) {
        var u = t.memoizedState;
        if (u === null)
          return !1;
      }
      return Dg(e, pp);
    }
    function h_(e, t) {
      return Ms(e.childLanes, t);
    }
    function yC(e, t, a) {
      var i = t.pendingProps;
      wb(t) && (t.flags |= Qe);
      var u = rl.current, s = !1, f = (t.flags & Qe) !== ke;
      if (f || v_(u, e) ? (s = !0, t.flags &= ~Qe) : (e === null || e.memoizedState !== null) && (u = Fw(u, OE)), u = kf(u), Uo(t, u), e === null) {
        Xy(t);
        var p = t.memoizedState;
        if (p !== null) {
          var v = p.dehydrated;
          if (v !== null)
            return E_(t, v);
        }
        var y = i.children, g = i.fallback;
        if (s) {
          var b = m_(t, y, g, a), _ = t.child;
          return _.memoizedState = hS(a), t.memoizedState = vS, b;
        } else
          return mS(t, y);
      } else {
        var N = e.memoizedState;
        if (N !== null) {
          var z = N.dehydrated;
          if (z !== null)
            return C_(e, t, f, i, z, N, a);
        }
        if (s) {
          var j = i.fallback, se = i.children, Le = g_(e, t, se, j, a), xe = t.child, gt = e.child.memoizedState;
          return xe.memoizedState = gt === null ? hS(a) : p_(gt, a), xe.childLanes = h_(e, a), t.memoizedState = vS, Le;
        } else {
          var pt = i.children, k = y_(e, t, pt, a);
          return t.memoizedState = null, k;
        }
      }
    }
    function mS(e, t, a) {
      var i = e.mode, u = {
        mode: "visible",
        children: t
      }, s = yS(u, i);
      return s.return = e, e.child = s, s;
    }
    function m_(e, t, a, i) {
      var u = e.mode, s = e.child, f = {
        mode: "hidden",
        children: t
      }, p, v;
      return (u & _e) === Oe && s !== null ? (p = s, p.childLanes = V, p.pendingProps = f, e.mode & wt && (p.actualDuration = 0, p.actualStartTime = -1, p.selfBaseDuration = 0, p.treeBaseDuration = 0), v = $o(a, u, i, null)) : (p = yS(f, u), v = $o(a, u, i, null)), p.return = e, v.return = e, p.sibling = v, e.child = p, v;
    }
    function yS(e, t, a) {
      return g1(e, t, V, null);
    }
    function gC(e, t) {
      return oc(e, t);
    }
    function y_(e, t, a, i) {
      var u = e.child, s = u.sibling, f = gC(u, {
        mode: "visible",
        children: a
      });
      if ((t.mode & _e) === Oe && (f.lanes = i), f.return = t, f.sibling = null, s !== null) {
        var p = t.deletions;
        p === null ? (t.deletions = [s], t.flags |= bt) : p.push(s);
      }
      return t.child = f, f;
    }
    function g_(e, t, a, i, u) {
      var s = t.mode, f = e.child, p = f.sibling, v = {
        mode: "hidden",
        children: a
      }, y;
      if (
        // In legacy mode, we commit the primary tree as if it successfully
        // completed, even though it's in an inconsistent state.
        (s & _e) === Oe && // Make sure we're on the second pass, i.e. the primary child fragment was
        // already cloned. In legacy mode, the only case where this isn't true is
        // when DevTools forces us to display a fallback; we skip the first render
        // pass entirely and go straight to rendering the fallback. (In Concurrent
        // Mode, SuspenseList can also trigger this scenario, but this is a legacy-
        // only codepath.)
        t.child !== f
      ) {
        var g = t.child;
        y = g, y.childLanes = V, y.pendingProps = v, t.mode & wt && (y.actualDuration = 0, y.actualStartTime = -1, y.selfBaseDuration = f.selfBaseDuration, y.treeBaseDuration = f.treeBaseDuration), t.deletions = null;
      } else
        y = gC(f, v), y.subtreeFlags = f.subtreeFlags & ar;
      var b;
      return p !== null ? b = oc(p, i) : (b = $o(i, s, u, null), b.flags |= $t), b.return = t, y.return = t, y.sibling = b, t.child = y, b;
    }
    function vm(e, t, a, i) {
      i !== null && Ky(i), bf(t, e.child, null, a);
      var u = t.pendingProps, s = u.children, f = mS(t, s);
      return f.flags |= $t, t.memoizedState = null, f;
    }
    function S_(e, t, a, i, u) {
      var s = t.mode, f = {
        mode: "visible",
        children: a
      }, p = yS(f, s), v = $o(i, s, u, null);
      return v.flags |= $t, p.return = t, v.return = t, p.sibling = v, t.child = p, (t.mode & _e) !== Oe && bf(t, e.child, null, u), v;
    }
    function E_(e, t, a) {
      return (e.mode & _e) === Oe ? (S("Cannot hydrate Suspense in legacy mode. Switch from ReactDOM.hydrate(element, container) to ReactDOMClient.hydrateRoot(container, <App />).render(element) or remove the Suspense components from the server rendered components."), e.lanes = ze) : Uy(t) ? e.lanes = Sn : e.lanes = Sa, null;
    }
    function C_(e, t, a, i, u, s, f) {
      if (a)
        if (t.flags & xr) {
          t.flags &= ~xr;
          var k = rS(new Error("There was an error while hydrating this Suspense boundary. Switched to client rendering."));
          return vm(e, t, f, k);
        } else {
          if (t.memoizedState !== null)
            return t.child = e.child, t.flags |= Qe, null;
          var H = i.children, O = i.fallback, G = S_(e, t, H, O, f), ce = t.child;
          return ce.memoizedState = hS(f), t.memoizedState = vS, G;
        }
      else {
        if (sw(), (t.mode & _e) === Oe)
          return vm(
            e,
            t,
            f,
            // TODO: When we delete legacy mode, we should make this error argument
            // required — every concurrent mode path that causes hydration to
            // de-opt to client rendering should have an error message.
            null
          );
        if (Uy(u)) {
          var p, v, y;
          {
            var g = xT(u);
            p = g.digest, v = g.message, y = g.stack;
          }
          var b;
          v ? b = new Error(v) : b = new Error("The server could not finish this Suspense boundary, likely due to an error during server rendering. Switched to client rendering.");
          var _ = rS(b, p, y);
          return vm(e, t, f, _);
        }
        var N = Jr(f, e.childLanes);
        if (il || N) {
          var z = _m();
          if (z !== null) {
            var j = Vv(z, f);
            if (j !== bn && j !== s.retryLane) {
              s.retryLane = j;
              var se = Xt;
              $a(e, j), pr(z, e, j, se);
            }
          }
          jS();
          var Le = rS(new Error("This Suspense boundary received an update before it finished hydrating. This caused the boundary to switch to client rendering. The usual way to fix this is to wrap the original update in startTransition."));
          return vm(e, t, f, Le);
        } else if (V0(u)) {
          t.flags |= Qe, t.child = e.child;
          var xe = Qx.bind(null, e);
          return bT(u, xe), null;
        } else {
          dw(t, u, s.treeContext);
          var gt = i.children, pt = mS(t, gt);
          return pt.flags |= hi, pt;
        }
      }
    }
    function SC(e, t, a) {
      e.lanes = qe(e.lanes, t);
      var i = e.alternate;
      i !== null && (i.lanes = qe(i.lanes, t)), ng(e.return, t, a);
    }
    function R_(e, t, a) {
      for (var i = t; i !== null; ) {
        if (i.tag === Re) {
          var u = i.memoizedState;
          u !== null && SC(i, a, e);
        } else if (i.tag === ht)
          SC(i, a, e);
        else if (i.child !== null) {
          i.child.return = i, i = i.child;
          continue;
        }
        if (i === e)
          return;
        for (; i.sibling === null; ) {
          if (i.return === null || i.return === e)
            return;
          i = i.return;
        }
        i.sibling.return = i.return, i = i.sibling;
      }
    }
    function T_(e) {
      for (var t = e, a = null; t !== null; ) {
        var i = t.alternate;
        i !== null && Wh(i) === null && (a = t), t = t.sibling;
      }
      return a;
    }
    function w_(e) {
      if (e !== void 0 && e !== "forwards" && e !== "backwards" && e !== "together" && !cS[e])
        if (cS[e] = !0, typeof e == "string")
          switch (e.toLowerCase()) {
            case "together":
            case "forwards":
            case "backwards": {
              S('"%s" is not a valid value for revealOrder on <SuspenseList />. Use lowercase "%s" instead.', e, e.toLowerCase());
              break;
            }
            case "forward":
            case "backward": {
              S('"%s" is not a valid value for revealOrder on <SuspenseList />. React uses the -s suffix in the spelling. Use "%ss" instead.', e, e.toLowerCase());
              break;
            }
            default:
              S('"%s" is not a supported revealOrder on <SuspenseList />. Did you mean "together", "forwards" or "backwards"?', e);
              break;
          }
        else
          S('%s is not a supported value for revealOrder on <SuspenseList />. Did you mean "together", "forwards" or "backwards"?', e);
    }
    function __(e, t) {
      e !== void 0 && !pm[e] && (e !== "collapsed" && e !== "hidden" ? (pm[e] = !0, S('"%s" is not a supported value for tail on <SuspenseList />. Did you mean "collapsed" or "hidden"?', e)) : t !== "forwards" && t !== "backwards" && (pm[e] = !0, S('<SuspenseList tail="%s" /> is only valid if revealOrder is "forwards" or "backwards". Did you mean to specify revealOrder="forwards"?', e)));
    }
    function EC(e, t) {
      {
        var a = Rt(e), i = !a && typeof si(e) == "function";
        if (a || i) {
          var u = a ? "array" : "iterable";
          return S("A nested %s was passed to row #%s in <SuspenseList />. Wrap it in an additional SuspenseList to configure its revealOrder: <SuspenseList revealOrder=...> ... <SuspenseList revealOrder=...>{%s}</SuspenseList> ... </SuspenseList>", u, t, u), !1;
        }
      }
      return !0;
    }
    function x_(e, t) {
      if ((t === "forwards" || t === "backwards") && e !== void 0 && e !== null && e !== !1)
        if (Rt(e)) {
          for (var a = 0; a < e.length; a++)
            if (!EC(e[a], a))
              return;
        } else {
          var i = si(e);
          if (typeof i == "function") {
            var u = i.call(e);
            if (u)
              for (var s = u.next(), f = 0; !s.done; s = u.next()) {
                if (!EC(s.value, f))
                  return;
                f++;
              }
          } else
            S('A single row was passed to a <SuspenseList revealOrder="%s" />. This is not useful since it needs multiple rows. Did you mean to pass multiple children or an array?', t);
        }
    }
    function gS(e, t, a, i, u) {
      var s = e.memoizedState;
      s === null ? e.memoizedState = {
        isBackwards: t,
        rendering: null,
        renderingStartTime: 0,
        last: i,
        tail: a,
        tailMode: u
      } : (s.isBackwards = t, s.rendering = null, s.renderingStartTime = 0, s.last = i, s.tail = a, s.tailMode = u);
    }
    function CC(e, t, a) {
      var i = t.pendingProps, u = i.revealOrder, s = i.tail, f = i.children;
      w_(u), __(s, u), x_(f, u), Ea(e, t, f, a);
      var p = rl.current, v = Dg(p, pp);
      if (v)
        p = kg(p, pp), t.flags |= Qe;
      else {
        var y = e !== null && (e.flags & Qe) !== ke;
        y && R_(t, t.child, a), p = kf(p);
      }
      if (Uo(t, p), (t.mode & _e) === Oe)
        t.memoizedState = null;
      else
        switch (u) {
          case "forwards": {
            var g = T_(t.child), b;
            g === null ? (b = t.child, t.child = null) : (b = g.sibling, g.sibling = null), gS(
              t,
              !1,
              // isBackwards
              b,
              g,
              s
            );
            break;
          }
          case "backwards": {
            var _ = null, N = t.child;
            for (t.child = null; N !== null; ) {
              var z = N.alternate;
              if (z !== null && Wh(z) === null) {
                t.child = N;
                break;
              }
              var j = N.sibling;
              N.sibling = _, _ = N, N = j;
            }
            gS(
              t,
              !0,
              // isBackwards
              _,
              null,
              // last
              s
            );
            break;
          }
          case "together": {
            gS(
              t,
              !1,
              // isBackwards
              null,
              // tail
              null,
              // last
              void 0
            );
            break;
          }
          default:
            t.memoizedState = null;
        }
      return t.child;
    }
    function b_(e, t, a) {
      _g(t, t.stateNode.containerInfo);
      var i = t.pendingProps;
      return e === null ? t.child = bf(t, null, i, a) : Ea(e, t, i, a), t.child;
    }
    var RC = !1;
    function D_(e, t, a) {
      var i = t.type, u = i._context, s = t.pendingProps, f = t.memoizedProps, p = s.value;
      {
        "value" in s || RC || (RC = !0, S("The `value` prop is required for the `<Context.Provider>`. Did you misspell it or forget to pass it?"));
        var v = t.type.propTypes;
        v && Ji(v, s, "prop", "Context.Provider");
      }
      if (sE(t, u, p), f !== null) {
        var y = f.value;
        if (ye(y, p)) {
          if (f.children === s.children && !Th())
            return Mu(e, t, a);
        } else
          Rw(t, u, a);
      }
      var g = s.children;
      return Ea(e, t, g, a), t.child;
    }
    var TC = !1;
    function k_(e, t, a) {
      var i = t.type;
      i._context === void 0 ? i !== i.Consumer && (TC || (TC = !0, S("Rendering <Context> directly is not supported and will be removed in a future major release. Did you mean to render <Context.Consumer> instead?"))) : i = i._context;
      var u = t.pendingProps, s = u.children;
      typeof s != "function" && S("A context consumer was rendered with multiple children, or a child that isn't a function. A context consumer expects a single child that is a function. If you did pass a function, make sure there is no trailing or leading whitespace around it."), xf(t, a);
      var f = Kn(i);
      to(t);
      var p;
      return Cp.current = t, nr(!0), p = s(f), nr(!1), cu(), t.flags |= ri, Ea(e, t, p, a), t.child;
    }
    function Tp() {
      il = !0;
    }
    function hm(e, t) {
      (t.mode & _e) === Oe && e !== null && (e.alternate = null, t.alternate = null, t.flags |= $t);
    }
    function Mu(e, t, a) {
      return e !== null && (t.dependencies = e.dependencies), aC(), Up(t.lanes), Jr(a, t.childLanes) ? (zw(e, t), t.child) : null;
    }
    function O_(e, t, a) {
      {
        var i = t.return;
        if (i === null)
          throw new Error("Cannot swap the root fiber.");
        if (e.alternate = null, t.alternate = null, a.index = t.index, a.sibling = t.sibling, a.return = t.return, a.ref = t.ref, t === i.child)
          i.child = a;
        else {
          var u = i.child;
          if (u === null)
            throw new Error("Expected parent to have a child.");
          for (; u.sibling !== t; )
            if (u = u.sibling, u === null)
              throw new Error("Expected to find the previous sibling.");
          u.sibling = a;
        }
        var s = i.deletions;
        return s === null ? (i.deletions = [e], i.flags |= bt) : s.push(e), a.flags |= $t, a;
      }
    }
    function SS(e, t) {
      var a = e.lanes;
      return !!Jr(a, t);
    }
    function L_(e, t, a) {
      switch (t.tag) {
        case te:
          hC(t), t.stateNode, wf();
          break;
        case ae:
          DE(t);
          break;
        case fe: {
          var i = t.type;
          Hl(i) && _h(t);
          break;
        }
        case Ne:
          _g(t, t.stateNode.containerInfo);
          break;
        case rt: {
          var u = t.memoizedProps.value, s = t.type._context;
          sE(t, s, u);
          break;
        }
        case _t:
          {
            var f = Jr(a, t.childLanes);
            f && (t.flags |= Te);
            {
              var p = t.stateNode;
              p.effectDuration = 0, p.passiveEffectDuration = 0;
            }
          }
          break;
        case Re: {
          var v = t.memoizedState;
          if (v !== null) {
            if (v.dehydrated !== null)
              return Uo(t, kf(rl.current)), t.flags |= Qe, null;
            var y = t.child, g = y.childLanes;
            if (Jr(a, g))
              return yC(e, t, a);
            Uo(t, kf(rl.current));
            var b = Mu(e, t, a);
            return b !== null ? b.sibling : null;
          } else
            Uo(t, kf(rl.current));
          break;
        }
        case ht: {
          var _ = (e.flags & Qe) !== ke, N = Jr(a, t.childLanes);
          if (_) {
            if (N)
              return CC(e, t, a);
            t.flags |= Qe;
          }
          var z = t.memoizedState;
          if (z !== null && (z.rendering = null, z.tail = null, z.lastEffect = null), Uo(t, rl.current), N)
            break;
          return null;
        }
        case Pe:
        case Xe:
          return t.lanes = V, dC(e, t, a);
      }
      return Mu(e, t, a);
    }
    function wC(e, t, a) {
      if (t._debugNeedsRemount && e !== null)
        return O_(e, t, qS(t.type, t.key, t.pendingProps, t._debugOwner || null, t.mode, t.lanes));
      if (e !== null) {
        var i = e.memoizedProps, u = t.pendingProps;
        if (i !== u || Th() || // Force a re-render if the implementation changed due to hot reload:
        t.type !== e.type)
          il = !0;
        else {
          var s = SS(e, a);
          if (!s && // If this is the second pass of an error or suspense boundary, there
          // may not be work scheduled on `current`, so we check for this flag.
          (t.flags & Qe) === ke)
            return il = !1, L_(e, t, a);
          (e.flags & Ec) !== ke ? il = !0 : il = !1;
        }
      } else if (il = !1, kr() && rw(t)) {
        var f = t.index, p = aw();
        K0(t, p, f);
      }
      switch (t.lanes = V, t.tag) {
        case Ie:
          return d_(e, t, t.type, a);
        case Tn: {
          var v = t.elementType;
          return c_(e, t, v, a);
        }
        case Me: {
          var y = t.type, g = t.pendingProps, b = t.elementType === y ? g : nl(y, g);
          return fS(e, t, y, b, a);
        }
        case fe: {
          var _ = t.type, N = t.pendingProps, z = t.elementType === _ ? N : nl(_, N);
          return vC(e, t, _, z, a);
        }
        case te:
          return u_(e, t, a);
        case ae:
          return o_(e, t, a);
        case Ce:
          return s_(e, t);
        case Re:
          return yC(e, t, a);
        case Ne:
          return b_(e, t, a);
        case He: {
          var j = t.type, se = t.pendingProps, Le = t.elementType === j ? se : nl(j, se);
          return sC(e, t, j, Le, a);
        }
        case ct:
          return a_(e, t, a);
        case jn:
          return i_(e, t, a);
        case _t:
          return l_(e, t, a);
        case rt:
          return D_(e, t, a);
        case an:
          return k_(e, t, a);
        case ut: {
          var xe = t.type, gt = t.pendingProps, pt = nl(xe, gt);
          if (t.type !== t.elementType) {
            var k = xe.propTypes;
            k && Ji(
              k,
              pt,
              // Resolved for outer only
              "prop",
              Ct(xe)
            );
          }
          return pt = nl(xe.type, pt), cC(e, t, xe, pt, a);
        }
        case $e:
          return fC(e, t, t.type, t.pendingProps, a);
        case hn: {
          var H = t.type, O = t.pendingProps, G = t.elementType === H ? O : nl(H, O);
          return f_(e, t, H, G, a);
        }
        case ht:
          return CC(e, t, a);
        case Kt:
          break;
        case Pe:
          return dC(e, t, a);
      }
      throw new Error("Unknown unit of work tag (" + t.tag + "). This error is likely caused by a bug in React. Please file an issue.");
    }
    function Uf(e) {
      e.flags |= Te;
    }
    function _C(e) {
      e.flags |= ha, e.flags |= mi;
    }
    var xC, ES, bC, DC;
    xC = function(e, t, a, i) {
      for (var u = t.child; u !== null; ) {
        if (u.tag === ae || u.tag === Ce)
          eT(e, u.stateNode);
        else if (u.tag !== Ne) {
          if (u.child !== null) {
            u.child.return = u, u = u.child;
            continue;
          }
        }
        if (u === t)
          return;
        for (; u.sibling === null; ) {
          if (u.return === null || u.return === t)
            return;
          u = u.return;
        }
        u.sibling.return = u.return, u = u.sibling;
      }
    }, ES = function(e, t) {
    }, bC = function(e, t, a, i, u) {
      var s = e.memoizedProps;
      if (s !== i) {
        var f = t.stateNode, p = xg(), v = nT(f, a, s, i, u, p);
        t.updateQueue = v, v && Uf(t);
      }
    }, DC = function(e, t, a, i) {
      a !== i && Uf(t);
    };
    function wp(e, t) {
      if (!kr())
        switch (e.tailMode) {
          case "hidden": {
            for (var a = e.tail, i = null; a !== null; )
              a.alternate !== null && (i = a), a = a.sibling;
            i === null ? e.tail = null : i.sibling = null;
            break;
          }
          case "collapsed": {
            for (var u = e.tail, s = null; u !== null; )
              u.alternate !== null && (s = u), u = u.sibling;
            s === null ? !t && e.tail !== null ? e.tail.sibling = null : e.tail = null : s.sibling = null;
            break;
          }
        }
    }
    function Lr(e) {
      var t = e.alternate !== null && e.alternate.child === e.child, a = V, i = ke;
      if (t) {
        if ((e.mode & wt) !== Oe) {
          for (var v = e.selfBaseDuration, y = e.child; y !== null; )
            a = qe(a, qe(y.lanes, y.childLanes)), i |= y.subtreeFlags & ar, i |= y.flags & ar, v += y.treeBaseDuration, y = y.sibling;
          e.treeBaseDuration = v;
        } else
          for (var g = e.child; g !== null; )
            a = qe(a, qe(g.lanes, g.childLanes)), i |= g.subtreeFlags & ar, i |= g.flags & ar, g.return = e, g = g.sibling;
        e.subtreeFlags |= i;
      } else {
        if ((e.mode & wt) !== Oe) {
          for (var u = e.actualDuration, s = e.selfBaseDuration, f = e.child; f !== null; )
            a = qe(a, qe(f.lanes, f.childLanes)), i |= f.subtreeFlags, i |= f.flags, u += f.actualDuration, s += f.treeBaseDuration, f = f.sibling;
          e.actualDuration = u, e.treeBaseDuration = s;
        } else
          for (var p = e.child; p !== null; )
            a = qe(a, qe(p.lanes, p.childLanes)), i |= p.subtreeFlags, i |= p.flags, p.return = e, p = p.sibling;
        e.subtreeFlags |= i;
      }
      return e.childLanes = a, t;
    }
    function M_(e, t, a) {
      if (yw() && (t.mode & _e) !== Oe && (t.flags & Qe) === ke)
        return aE(t), wf(), t.flags |= xr | Tl | rr, !1;
      var i = Oh(t);
      if (a !== null && a.dehydrated !== null)
        if (e === null) {
          if (!i)
            throw new Error("A dehydrated suspense component was completed without a hydrated node. This is probably a bug in React.");
          if (hw(t), Lr(t), (t.mode & wt) !== Oe) {
            var u = a !== null;
            if (u) {
              var s = t.child;
              s !== null && (t.treeBaseDuration -= s.treeBaseDuration);
            }
          }
          return !1;
        } else {
          if (wf(), (t.flags & Qe) === ke && (t.memoizedState = null), t.flags |= Te, Lr(t), (t.mode & wt) !== Oe) {
            var f = a !== null;
            if (f) {
              var p = t.child;
              p !== null && (t.treeBaseDuration -= p.treeBaseDuration);
            }
          }
          return !1;
        }
      else
        return iE(), !0;
    }
    function kC(e, t, a) {
      var i = t.pendingProps;
      switch (Qy(t), t.tag) {
        case Ie:
        case Tn:
        case $e:
        case Me:
        case He:
        case ct:
        case jn:
        case _t:
        case an:
        case ut:
          return Lr(t), null;
        case fe: {
          var u = t.type;
          return Hl(u) && wh(t), Lr(t), null;
        }
        case te: {
          var s = t.stateNode;
          if (Df(t), By(t), Lg(), s.pendingContext && (s.context = s.pendingContext, s.pendingContext = null), e === null || e.child === null) {
            var f = Oh(t);
            if (f)
              Uf(t);
            else if (e !== null) {
              var p = e.memoizedState;
              // Check if this is a client root
              (!p.isDehydrated || // Check if we reverted to client rendering (e.g. due to an error)
              (t.flags & xr) !== ke) && (t.flags |= Un, iE());
            }
          }
          return ES(e, t), Lr(t), null;
        }
        case ae: {
          bg(t);
          var v = bE(), y = t.type;
          if (e !== null && t.stateNode != null)
            bC(e, t, y, i, v), e.ref !== t.ref && _C(t);
          else {
            if (!i) {
              if (t.stateNode === null)
                throw new Error("We must have new props for new mounts. This error is likely caused by a bug in React. Please file an issue.");
              return Lr(t), null;
            }
            var g = xg(), b = Oh(t);
            if (b)
              pw(t, v, g) && Uf(t);
            else {
              var _ = JR(y, i, v, g, t);
              xC(_, t, !1, !1), t.stateNode = _, tT(_, y, i, v) && Uf(t);
            }
            t.ref !== null && _C(t);
          }
          return Lr(t), null;
        }
        case Ce: {
          var N = i;
          if (e && t.stateNode != null) {
            var z = e.memoizedProps;
            DC(e, t, z, N);
          } else {
            if (typeof N != "string" && t.stateNode === null)
              throw new Error("We must have new props for new mounts. This error is likely caused by a bug in React. Please file an issue.");
            var j = bE(), se = xg(), Le = Oh(t);
            Le ? vw(t) && Uf(t) : t.stateNode = rT(N, j, se, t);
          }
          return Lr(t), null;
        }
        case Re: {
          Of(t);
          var xe = t.memoizedState;
          if (e === null || e.memoizedState !== null && e.memoizedState.dehydrated !== null) {
            var gt = M_(e, t, xe);
            if (!gt)
              return t.flags & rr ? t : null;
          }
          if ((t.flags & Qe) !== ke)
            return t.lanes = a, (t.mode & wt) !== Oe && nS(t), t;
          var pt = xe !== null, k = e !== null && e.memoizedState !== null;
          if (pt !== k && pt) {
            var H = t.child;
            if (H.flags |= Rl, (t.mode & _e) !== Oe) {
              var O = e === null && (t.memoizedProps.unstable_avoidThisFallback !== !0 || !he);
              O || Dg(rl.current, OE) ? Nx() : jS();
            }
          }
          var G = t.updateQueue;
          if (G !== null && (t.flags |= Te), Lr(t), (t.mode & wt) !== Oe && pt) {
            var ce = t.child;
            ce !== null && (t.treeBaseDuration -= ce.treeBaseDuration);
          }
          return null;
        }
        case Ne:
          return Df(t), ES(e, t), e === null && XT(t.stateNode.containerInfo), Lr(t), null;
        case rt:
          var ie = t.type._context;
          return tg(ie, t), Lr(t), null;
        case hn: {
          var Be = t.type;
          return Hl(Be) && wh(t), Lr(t), null;
        }
        case ht: {
          Of(t);
          var Ge = t.memoizedState;
          if (Ge === null)
            return Lr(t), null;
          var Pt = (t.flags & Qe) !== ke, kt = Ge.rendering;
          if (kt === null)
            if (Pt)
              wp(Ge, !1);
            else {
              var In = Ux() && (e === null || (e.flags & Qe) === ke);
              if (!In)
                for (var Ot = t.child; Ot !== null; ) {
                  var Fn = Wh(Ot);
                  if (Fn !== null) {
                    Pt = !0, t.flags |= Qe, wp(Ge, !1);
                    var aa = Fn.updateQueue;
                    return aa !== null && (t.updateQueue = aa, t.flags |= Te), t.subtreeFlags = ke, Uw(t, a), Uo(t, kg(rl.current, pp)), t.child;
                  }
                  Ot = Ot.sibling;
                }
              Ge.tail !== null && An() > XC() && (t.flags |= Qe, Pt = !0, wp(Ge, !1), t.lanes = Rd);
            }
          else {
            if (!Pt) {
              var Ar = Wh(kt);
              if (Ar !== null) {
                t.flags |= Qe, Pt = !0;
                var ui = Ar.updateQueue;
                if (ui !== null && (t.updateQueue = ui, t.flags |= Te), wp(Ge, !0), Ge.tail === null && Ge.tailMode === "hidden" && !kt.alternate && !kr())
                  return Lr(t), null;
              } else
                // The time it took to render last row is greater than the remaining
                // time we have to render. So rendering one more row would likely
                // exceed it.
                An() * 2 - Ge.renderingStartTime > XC() && a !== Sa && (t.flags |= Qe, Pt = !0, wp(Ge, !1), t.lanes = Rd);
            }
            if (Ge.isBackwards)
              kt.sibling = t.child, t.child = kt;
            else {
              var Ta = Ge.last;
              Ta !== null ? Ta.sibling = kt : t.child = kt, Ge.last = kt;
            }
          }
          if (Ge.tail !== null) {
            var wa = Ge.tail;
            Ge.rendering = wa, Ge.tail = wa.sibling, Ge.renderingStartTime = An(), wa.sibling = null;
            var ia = rl.current;
            return Pt ? ia = kg(ia, pp) : ia = kf(ia), Uo(t, ia), wa;
          }
          return Lr(t), null;
        }
        case Kt:
          break;
        case Pe:
        case Xe: {
          FS(t);
          var Fu = t.memoizedState, $f = Fu !== null;
          if (e !== null) {
            var Vp = e.memoizedState, Wl = Vp !== null;
            Wl !== $f && // LegacyHidden doesn't do any hiding — it only pre-renders.
            !$ && (t.flags |= Rl);
          }
          return !$f || (t.mode & _e) === Oe ? Lr(t) : Jr(Ql, Sa) && (Lr(t), t.subtreeFlags & ($t | Te) && (t.flags |= Rl)), null;
        }
        case Et:
          return null;
        case Ke:
          return null;
      }
      throw new Error("Unknown unit of work tag (" + t.tag + "). This error is likely caused by a bug in React. Please file an issue.");
    }
    function N_(e, t, a) {
      switch (Qy(t), t.tag) {
        case fe: {
          var i = t.type;
          Hl(i) && wh(t);
          var u = t.flags;
          return u & rr ? (t.flags = u & ~rr | Qe, (t.mode & wt) !== Oe && nS(t), t) : null;
        }
        case te: {
          t.stateNode, Df(t), By(t), Lg();
          var s = t.flags;
          return (s & rr) !== ke && (s & Qe) === ke ? (t.flags = s & ~rr | Qe, t) : null;
        }
        case ae:
          return bg(t), null;
        case Re: {
          Of(t);
          var f = t.memoizedState;
          if (f !== null && f.dehydrated !== null) {
            if (t.alternate === null)
              throw new Error("Threw in newly mounted dehydrated component. This is likely a bug in React. Please file an issue.");
            wf();
          }
          var p = t.flags;
          return p & rr ? (t.flags = p & ~rr | Qe, (t.mode & wt) !== Oe && nS(t), t) : null;
        }
        case ht:
          return Of(t), null;
        case Ne:
          return Df(t), null;
        case rt:
          var v = t.type._context;
          return tg(v, t), null;
        case Pe:
        case Xe:
          return FS(t), null;
        case Et:
          return null;
        default:
          return null;
      }
    }
    function OC(e, t, a) {
      switch (Qy(t), t.tag) {
        case fe: {
          var i = t.type.childContextTypes;
          i != null && wh(t);
          break;
        }
        case te: {
          t.stateNode, Df(t), By(t), Lg();
          break;
        }
        case ae: {
          bg(t);
          break;
        }
        case Ne:
          Df(t);
          break;
        case Re:
          Of(t);
          break;
        case ht:
          Of(t);
          break;
        case rt:
          var u = t.type._context;
          tg(u, t);
          break;
        case Pe:
        case Xe:
          FS(t);
          break;
      }
    }
    var LC = null;
    LC = /* @__PURE__ */ new Set();
    var mm = !1, Mr = !1, z_ = typeof WeakSet == "function" ? WeakSet : Set, ge = null, Af = null, Ff = null;
    function U_(e) {
      ni(null, function() {
        throw e;
      }), Ii();
    }
    var A_ = function(e, t) {
      if (t.props = e.memoizedProps, t.state = e.memoizedState, e.mode & wt)
        try {
          Yl(), t.componentWillUnmount();
        } finally {
          $l(e);
        }
      else
        t.componentWillUnmount();
    };
    function MC(e, t) {
      try {
        jo(ur, e);
      } catch (a) {
        rn(e, t, a);
      }
    }
    function CS(e, t, a) {
      try {
        A_(e, a);
      } catch (i) {
        rn(e, t, i);
      }
    }
    function F_(e, t, a) {
      try {
        a.componentDidMount();
      } catch (i) {
        rn(e, t, i);
      }
    }
    function NC(e, t) {
      try {
        UC(e);
      } catch (a) {
        rn(e, t, a);
      }
    }
    function jf(e, t) {
      var a = e.ref;
      if (a !== null)
        if (typeof a == "function") {
          var i;
          try {
            if (ft && it && e.mode & wt)
              try {
                Yl(), i = a(null);
              } finally {
                $l(e);
              }
            else
              i = a(null);
          } catch (u) {
            rn(e, t, u);
          }
          typeof i == "function" && S("Unexpected return value from a callback ref in %s. A callback ref should not return a function.", Ye(e));
        } else
          a.current = null;
    }
    function ym(e, t, a) {
      try {
        a();
      } catch (i) {
        rn(e, t, i);
      }
    }
    var zC = !1;
    function j_(e, t) {
      KR(e.containerInfo), ge = t, H_();
      var a = zC;
      return zC = !1, a;
    }
    function H_() {
      for (; ge !== null; ) {
        var e = ge, t = e.child;
        (e.subtreeFlags & Qr) !== ke && t !== null ? (t.return = e, ge = t) : V_();
      }
    }
    function V_() {
      for (; ge !== null; ) {
        var e = ge;
        fn(e);
        try {
          P_(e);
        } catch (a) {
          rn(e, e.return, a);
        }
        Jt();
        var t = e.sibling;
        if (t !== null) {
          t.return = e.return, ge = t;
          return;
        }
        ge = e.return;
      }
    }
    function P_(e) {
      var t = e.alternate, a = e.flags;
      if ((a & Un) !== ke) {
        switch (fn(e), e.tag) {
          case Me:
          case He:
          case $e:
            break;
          case fe: {
            if (t !== null) {
              var i = t.memoizedProps, u = t.memoizedState, s = e.stateNode;
              e.type === e.elementType && !rc && (s.props !== e.memoizedProps && S("Expected %s props to match memoized props before getSnapshotBeforeUpdate. This might either be because of a bug in React, or because a component reassigns its own `this.props`. Please file an issue.", Ye(e) || "instance"), s.state !== e.memoizedState && S("Expected %s state to match memoized state before getSnapshotBeforeUpdate. This might either be because of a bug in React, or because a component reassigns its own `this.state`. Please file an issue.", Ye(e) || "instance"));
              var f = s.getSnapshotBeforeUpdate(e.elementType === e.type ? i : nl(e.type, i), u);
              {
                var p = LC;
                f === void 0 && !p.has(e.type) && (p.add(e.type), S("%s.getSnapshotBeforeUpdate(): A snapshot value (or null) must be returned. You have returned undefined.", Ye(e)));
              }
              s.__reactInternalSnapshotBeforeUpdate = f;
            }
            break;
          }
          case te: {
            {
              var v = e.stateNode;
              RT(v.containerInfo);
            }
            break;
          }
          case ae:
          case Ce:
          case Ne:
          case hn:
            break;
          default:
            throw new Error("This unit of work tag should not have side-effects. This error is likely caused by a bug in React. Please file an issue.");
        }
        Jt();
      }
    }
    function ll(e, t, a) {
      var i = t.updateQueue, u = i !== null ? i.lastEffect : null;
      if (u !== null) {
        var s = u.next, f = s;
        do {
          if ((f.tag & e) === e) {
            var p = f.destroy;
            f.destroy = void 0, p !== void 0 && ((e & Or) !== Ya ? xv(t) : (e & ur) !== Ya && no(t), (e & Vl) !== Ya && Fp(!0), ym(t, a, p), (e & Vl) !== Ya && Fp(!1), (e & Or) !== Ya ? bv() : (e & ur) !== Ya && Cs());
          }
          f = f.next;
        } while (f !== s);
      }
    }
    function jo(e, t) {
      var a = t.updateQueue, i = a !== null ? a.lastEffect : null;
      if (i !== null) {
        var u = i.next, s = u;
        do {
          if ((s.tag & e) === e) {
            (e & Or) !== Ya ? gd(t) : (e & ur) !== Ya && Dv(t);
            var f = s.create;
            (e & Vl) !== Ya && Fp(!0), s.destroy = f(), (e & Vl) !== Ya && Fp(!1), (e & Or) !== Ya ? xc() : (e & ur) !== Ya && Sd();
            {
              var p = s.destroy;
              if (p !== void 0 && typeof p != "function") {
                var v = void 0;
                (s.tag & ur) !== ke ? v = "useLayoutEffect" : (s.tag & Vl) !== ke ? v = "useInsertionEffect" : v = "useEffect";
                var y = void 0;
                p === null ? y = " You returned null. If your effect does not require clean up, return undefined (or nothing)." : typeof p.then == "function" ? y = `

It looks like you wrote ` + v + `(async () => ...) or returned a Promise. Instead, write the async function inside your effect and call it immediately:

` + v + `(() => {
  async function fetchData() {
    // You can await here
    const response = await MyAPI.getData(someId);
    // ...
  }
  fetchData();
}, [someId]); // Or [] if effect doesn't need props or state

Learn more about data fetching with Hooks: https://reactjs.org/link/hooks-data-fetching` : y = " You returned: " + p, S("%s must not return anything besides a function, which is used for clean-up.%s", v, y);
              }
            }
          }
          s = s.next;
        } while (s !== u);
      }
    }
    function B_(e, t) {
      if ((t.flags & Te) !== ke)
        switch (t.tag) {
          case _t: {
            var a = t.stateNode.passiveEffectDuration, i = t.memoizedProps, u = i.id, s = i.onPostCommit, f = nC(), p = t.alternate === null ? "mount" : "update";
            tC() && (p = "nested-update"), typeof s == "function" && s(u, p, a, f);
            var v = t.return;
            e:
              for (; v !== null; ) {
                switch (v.tag) {
                  case te:
                    var y = v.stateNode;
                    y.passiveEffectDuration += a;
                    break e;
                  case _t:
                    var g = v.stateNode;
                    g.passiveEffectDuration += a;
                    break e;
                }
                v = v.return;
              }
            break;
          }
        }
    }
    function $_(e, t, a, i) {
      if ((a.flags & ai) !== ke)
        switch (a.tag) {
          case Me:
          case He:
          case $e: {
            if (!Mr)
              if (a.mode & wt)
                try {
                  Yl(), jo(ur | lr, a);
                } finally {
                  $l(a);
                }
              else
                jo(ur | lr, a);
            break;
          }
          case fe: {
            var u = a.stateNode;
            if (a.flags & Te && !Mr)
              if (t === null)
                if (a.type === a.elementType && !rc && (u.props !== a.memoizedProps && S("Expected %s props to match memoized props before componentDidMount. This might either be because of a bug in React, or because a component reassigns its own `this.props`. Please file an issue.", Ye(a) || "instance"), u.state !== a.memoizedState && S("Expected %s state to match memoized state before componentDidMount. This might either be because of a bug in React, or because a component reassigns its own `this.state`. Please file an issue.", Ye(a) || "instance")), a.mode & wt)
                  try {
                    Yl(), u.componentDidMount();
                  } finally {
                    $l(a);
                  }
                else
                  u.componentDidMount();
              else {
                var s = a.elementType === a.type ? t.memoizedProps : nl(a.type, t.memoizedProps), f = t.memoizedState;
                if (a.type === a.elementType && !rc && (u.props !== a.memoizedProps && S("Expected %s props to match memoized props before componentDidUpdate. This might either be because of a bug in React, or because a component reassigns its own `this.props`. Please file an issue.", Ye(a) || "instance"), u.state !== a.memoizedState && S("Expected %s state to match memoized state before componentDidUpdate. This might either be because of a bug in React, or because a component reassigns its own `this.state`. Please file an issue.", Ye(a) || "instance")), a.mode & wt)
                  try {
                    Yl(), u.componentDidUpdate(s, f, u.__reactInternalSnapshotBeforeUpdate);
                  } finally {
                    $l(a);
                  }
                else
                  u.componentDidUpdate(s, f, u.__reactInternalSnapshotBeforeUpdate);
              }
            var p = a.updateQueue;
            p !== null && (a.type === a.elementType && !rc && (u.props !== a.memoizedProps && S("Expected %s props to match memoized props before processing the update queue. This might either be because of a bug in React, or because a component reassigns its own `this.props`. Please file an issue.", Ye(a) || "instance"), u.state !== a.memoizedState && S("Expected %s state to match memoized state before processing the update queue. This might either be because of a bug in React, or because a component reassigns its own `this.state`. Please file an issue.", Ye(a) || "instance")), hE(a, p, u));
            break;
          }
          case te: {
            var v = a.updateQueue;
            if (v !== null) {
              var y = null;
              if (a.child !== null)
                switch (a.child.tag) {
                  case ae:
                    y = a.child.stateNode;
                    break;
                  case fe:
                    y = a.child.stateNode;
                    break;
                }
              hE(a, v, y);
            }
            break;
          }
          case ae: {
            var g = a.stateNode;
            if (t === null && a.flags & Te) {
              var b = a.type, _ = a.memoizedProps;
              oT(g, b, _);
            }
            break;
          }
          case Ce:
            break;
          case Ne:
            break;
          case _t: {
            {
              var N = a.memoizedProps, z = N.onCommit, j = N.onRender, se = a.stateNode.effectDuration, Le = nC(), xe = t === null ? "mount" : "update";
              tC() && (xe = "nested-update"), typeof j == "function" && j(a.memoizedProps.id, xe, a.actualDuration, a.treeBaseDuration, a.actualStartTime, Le);
              {
                typeof z == "function" && z(a.memoizedProps.id, xe, se, Le), Vx(a);
                var gt = a.return;
                e:
                  for (; gt !== null; ) {
                    switch (gt.tag) {
                      case te:
                        var pt = gt.stateNode;
                        pt.effectDuration += se;
                        break e;
                      case _t:
                        var k = gt.stateNode;
                        k.effectDuration += se;
                        break e;
                    }
                    gt = gt.return;
                  }
              }
            }
            break;
          }
          case Re: {
            K_(e, a);
            break;
          }
          case ht:
          case hn:
          case Kt:
          case Pe:
          case Xe:
          case Ke:
            break;
          default:
            throw new Error("This unit of work tag should not have side-effects. This error is likely caused by a bug in React. Please file an issue.");
        }
      Mr || a.flags & ha && UC(a);
    }
    function Y_(e) {
      switch (e.tag) {
        case Me:
        case He:
        case $e: {
          if (e.mode & wt)
            try {
              Yl(), MC(e, e.return);
            } finally {
              $l(e);
            }
          else
            MC(e, e.return);
          break;
        }
        case fe: {
          var t = e.stateNode;
          typeof t.componentDidMount == "function" && F_(e, e.return, t), NC(e, e.return);
          break;
        }
        case ae: {
          NC(e, e.return);
          break;
        }
      }
    }
    function I_(e, t) {
      for (var a = null, i = e; ; ) {
        if (i.tag === ae) {
          if (a === null) {
            a = i;
            try {
              var u = i.stateNode;
              t ? gT(u) : ET(i.stateNode, i.memoizedProps);
            } catch (f) {
              rn(e, e.return, f);
            }
          }
        } else if (i.tag === Ce) {
          if (a === null)
            try {
              var s = i.stateNode;
              t ? ST(s) : CT(s, i.memoizedProps);
            } catch (f) {
              rn(e, e.return, f);
            }
        } else if (!((i.tag === Pe || i.tag === Xe) && i.memoizedState !== null && i !== e)) {
          if (i.child !== null) {
            i.child.return = i, i = i.child;
            continue;
          }
        }
        if (i === e)
          return;
        for (; i.sibling === null; ) {
          if (i.return === null || i.return === e)
            return;
          a === i && (a = null), i = i.return;
        }
        a === i && (a = null), i.sibling.return = i.return, i = i.sibling;
      }
    }
    function UC(e) {
      var t = e.ref;
      if (t !== null) {
        var a = e.stateNode, i;
        switch (e.tag) {
          case ae:
            i = a;
            break;
          default:
            i = a;
        }
        if (typeof t == "function") {
          var u;
          if (e.mode & wt)
            try {
              Yl(), u = t(i);
            } finally {
              $l(e);
            }
          else
            u = t(i);
          typeof u == "function" && S("Unexpected return value from a callback ref in %s. A callback ref should not return a function.", Ye(e));
        } else
          t.hasOwnProperty("current") || S("Unexpected ref object provided for %s. Use either a ref-setter function or React.createRef().", Ye(e)), t.current = i;
      }
    }
    function Q_(e) {
      var t = e.alternate;
      t !== null && (t.return = null), e.return = null;
    }
    function AC(e) {
      var t = e.alternate;
      t !== null && (e.alternate = null, AC(t));
      {
        if (e.child = null, e.deletions = null, e.sibling = null, e.tag === ae) {
          var a = e.stateNode;
          a !== null && JT(a);
        }
        e.stateNode = null, e._debugOwner = null, e.return = null, e.dependencies = null, e.memoizedProps = null, e.memoizedState = null, e.pendingProps = null, e.stateNode = null, e.updateQueue = null;
      }
    }
    function W_(e) {
      for (var t = e.return; t !== null; ) {
        if (FC(t))
          return t;
        t = t.return;
      }
      throw new Error("Expected to find a host parent. This error is likely caused by a bug in React. Please file an issue.");
    }
    function FC(e) {
      return e.tag === ae || e.tag === te || e.tag === Ne;
    }
    function jC(e) {
      var t = e;
      e:
        for (; ; ) {
          for (; t.sibling === null; ) {
            if (t.return === null || FC(t.return))
              return null;
            t = t.return;
          }
          for (t.sibling.return = t.return, t = t.sibling; t.tag !== ae && t.tag !== Ce && t.tag !== Yt; ) {
            if (t.flags & $t || t.child === null || t.tag === Ne)
              continue e;
            t.child.return = t, t = t.child;
          }
          if (!(t.flags & $t))
            return t.stateNode;
        }
    }
    function G_(e) {
      var t = W_(e);
      switch (t.tag) {
        case ae: {
          var a = t.stateNode;
          t.flags & La && (H0(a), t.flags &= ~La);
          var i = jC(e);
          TS(e, i, a);
          break;
        }
        case te:
        case Ne: {
          var u = t.stateNode.containerInfo, s = jC(e);
          RS(e, s, u);
          break;
        }
        default:
          throw new Error("Invalid host parent fiber. This error is likely caused by a bug in React. Please file an issue.");
      }
    }
    function RS(e, t, a) {
      var i = e.tag, u = i === ae || i === Ce;
      if (u) {
        var s = e.stateNode;
        t ? vT(a, s, t) : dT(a, s);
      } else if (i !== Ne) {
        var f = e.child;
        if (f !== null) {
          RS(f, t, a);
          for (var p = f.sibling; p !== null; )
            RS(p, t, a), p = p.sibling;
        }
      }
    }
    function TS(e, t, a) {
      var i = e.tag, u = i === ae || i === Ce;
      if (u) {
        var s = e.stateNode;
        t ? pT(a, s, t) : fT(a, s);
      } else if (i !== Ne) {
        var f = e.child;
        if (f !== null) {
          TS(f, t, a);
          for (var p = f.sibling; p !== null; )
            TS(p, t, a), p = p.sibling;
        }
      }
    }
    var Nr = null, ul = !1;
    function q_(e, t, a) {
      {
        var i = t;
        e:
          for (; i !== null; ) {
            switch (i.tag) {
              case ae: {
                Nr = i.stateNode, ul = !1;
                break e;
              }
              case te: {
                Nr = i.stateNode.containerInfo, ul = !0;
                break e;
              }
              case Ne: {
                Nr = i.stateNode.containerInfo, ul = !0;
                break e;
              }
            }
            i = i.return;
          }
        if (Nr === null)
          throw new Error("Expected to find a host parent. This error is likely caused by a bug in React. Please file an issue.");
        HC(e, t, a), Nr = null, ul = !1;
      }
      Q_(a);
    }
    function Ho(e, t, a) {
      for (var i = a.child; i !== null; )
        HC(e, t, i), i = i.sibling;
    }
    function HC(e, t, a) {
      switch (wv(a), a.tag) {
        case ae:
          Mr || jf(a, t);
        case Ce: {
          {
            var i = Nr, u = ul;
            Nr = null, Ho(e, t, a), Nr = i, ul = u, Nr !== null && (ul ? mT(Nr, a.stateNode) : hT(Nr, a.stateNode));
          }
          return;
        }
        case Yt: {
          Nr !== null && (ul ? yT(Nr, a.stateNode) : zy(Nr, a.stateNode));
          return;
        }
        case Ne: {
          {
            var s = Nr, f = ul;
            Nr = a.stateNode.containerInfo, ul = !0, Ho(e, t, a), Nr = s, ul = f;
          }
          return;
        }
        case Me:
        case He:
        case ut:
        case $e: {
          if (!Mr) {
            var p = a.updateQueue;
            if (p !== null) {
              var v = p.lastEffect;
              if (v !== null) {
                var y = v.next, g = y;
                do {
                  var b = g, _ = b.destroy, N = b.tag;
                  _ !== void 0 && ((N & Vl) !== Ya ? ym(a, t, _) : (N & ur) !== Ya && (no(a), a.mode & wt ? (Yl(), ym(a, t, _), $l(a)) : ym(a, t, _), Cs())), g = g.next;
                } while (g !== y);
              }
            }
          }
          Ho(e, t, a);
          return;
        }
        case fe: {
          if (!Mr) {
            jf(a, t);
            var z = a.stateNode;
            typeof z.componentWillUnmount == "function" && CS(a, t, z);
          }
          Ho(e, t, a);
          return;
        }
        case Kt: {
          Ho(e, t, a);
          return;
        }
        case Pe: {
          if (
            // TODO: Remove this dead flag
            a.mode & _e
          ) {
            var j = Mr;
            Mr = j || a.memoizedState !== null, Ho(e, t, a), Mr = j;
          } else
            Ho(e, t, a);
          break;
        }
        default: {
          Ho(e, t, a);
          return;
        }
      }
    }
    function X_(e) {
      e.memoizedState;
    }
    function K_(e, t) {
      var a = t.memoizedState;
      if (a === null) {
        var i = t.alternate;
        if (i !== null) {
          var u = i.memoizedState;
          if (u !== null) {
            var s = u.dehydrated;
            s !== null && AT(s);
          }
        }
      }
    }
    function VC(e) {
      var t = e.updateQueue;
      if (t !== null) {
        e.updateQueue = null;
        var a = e.stateNode;
        a === null && (a = e.stateNode = new z_()), t.forEach(function(i) {
          var u = Wx.bind(null, e, i);
          if (!a.has(i)) {
            if (a.add(i), ga)
              if (Af !== null && Ff !== null)
                Ap(Ff, Af);
              else
                throw Error("Expected finished root and lanes to be set. This is a bug in React.");
            i.then(u, u);
          }
        });
      }
    }
    function Z_(e, t, a) {
      Af = a, Ff = e, fn(t), PC(t, e), fn(t), Af = null, Ff = null;
    }
    function ol(e, t, a) {
      var i = t.deletions;
      if (i !== null)
        for (var u = 0; u < i.length; u++) {
          var s = i[u];
          try {
            q_(e, t, s);
          } catch (v) {
            rn(s, t, v);
          }
        }
      var f = Jo();
      if (t.subtreeFlags & Wr)
        for (var p = t.child; p !== null; )
          fn(p), PC(p, e), p = p.sibling;
      fn(f);
    }
    function PC(e, t, a) {
      var i = e.alternate, u = e.flags;
      switch (e.tag) {
        case Me:
        case He:
        case ut:
        case $e: {
          if (ol(t, e), Il(e), u & Te) {
            try {
              ll(Vl | lr, e, e.return), jo(Vl | lr, e);
            } catch (Be) {
              rn(e, e.return, Be);
            }
            if (e.mode & wt) {
              try {
                Yl(), ll(ur | lr, e, e.return);
              } catch (Be) {
                rn(e, e.return, Be);
              }
              $l(e);
            } else
              try {
                ll(ur | lr, e, e.return);
              } catch (Be) {
                rn(e, e.return, Be);
              }
          }
          return;
        }
        case fe: {
          ol(t, e), Il(e), u & ha && i !== null && jf(i, i.return);
          return;
        }
        case ae: {
          ol(t, e), Il(e), u & ha && i !== null && jf(i, i.return);
          {
            if (e.flags & La) {
              var s = e.stateNode;
              try {
                H0(s);
              } catch (Be) {
                rn(e, e.return, Be);
              }
            }
            if (u & Te) {
              var f = e.stateNode;
              if (f != null) {
                var p = e.memoizedProps, v = i !== null ? i.memoizedProps : p, y = e.type, g = e.updateQueue;
                if (e.updateQueue = null, g !== null)
                  try {
                    sT(f, g, y, v, p, e);
                  } catch (Be) {
                    rn(e, e.return, Be);
                  }
              }
            }
          }
          return;
        }
        case Ce: {
          if (ol(t, e), Il(e), u & Te) {
            if (e.stateNode === null)
              throw new Error("This should have a text node initialized. This error is likely caused by a bug in React. Please file an issue.");
            var b = e.stateNode, _ = e.memoizedProps, N = i !== null ? i.memoizedProps : _;
            try {
              cT(b, N, _);
            } catch (Be) {
              rn(e, e.return, Be);
            }
          }
          return;
        }
        case te: {
          if (ol(t, e), Il(e), u & Te && i !== null) {
            var z = i.memoizedState;
            if (z.isDehydrated)
              try {
                UT(t.containerInfo);
              } catch (Be) {
                rn(e, e.return, Be);
              }
          }
          return;
        }
        case Ne: {
          ol(t, e), Il(e);
          return;
        }
        case Re: {
          ol(t, e), Il(e);
          var j = e.child;
          if (j.flags & Rl) {
            var se = j.stateNode, Le = j.memoizedState, xe = Le !== null;
            if (se.isHidden = xe, xe) {
              var gt = j.alternate !== null && j.alternate.memoizedState !== null;
              gt || Mx();
            }
          }
          if (u & Te) {
            try {
              X_(e);
            } catch (Be) {
              rn(e, e.return, Be);
            }
            VC(e);
          }
          return;
        }
        case Pe: {
          var pt = i !== null && i.memoizedState !== null;
          if (
            // TODO: Remove this dead flag
            e.mode & _e
          ) {
            var k = Mr;
            Mr = k || pt, ol(t, e), Mr = k;
          } else
            ol(t, e);
          if (Il(e), u & Rl) {
            var H = e.stateNode, O = e.memoizedState, G = O !== null, ce = e;
            if (H.isHidden = G, G && !pt && (ce.mode & _e) !== Oe) {
              ge = ce;
              for (var ie = ce.child; ie !== null; )
                ge = ie, ex(ie), ie = ie.sibling;
            }
            I_(ce, G);
          }
          return;
        }
        case ht: {
          ol(t, e), Il(e), u & Te && VC(e);
          return;
        }
        case Kt:
          return;
        default: {
          ol(t, e), Il(e);
          return;
        }
      }
    }
    function Il(e) {
      var t = e.flags;
      if (t & $t) {
        try {
          G_(e);
        } catch (a) {
          rn(e, e.return, a);
        }
        e.flags &= ~$t;
      }
      t & hi && (e.flags &= ~hi);
    }
    function J_(e, t, a) {
      Af = a, Ff = t, ge = e, BC(e, t, a), Af = null, Ff = null;
    }
    function BC(e, t, a) {
      for (var i = (e.mode & _e) !== Oe; ge !== null; ) {
        var u = ge, s = u.child;
        if (u.tag === Pe && i) {
          var f = u.memoizedState !== null, p = f || mm;
          if (p) {
            wS(e, t, a);
            continue;
          } else {
            var v = u.alternate, y = v !== null && v.memoizedState !== null, g = y || Mr, b = mm, _ = Mr;
            mm = p, Mr = g, Mr && !_ && (ge = u, tx(u));
            for (var N = s; N !== null; )
              ge = N, BC(
                N,
                // New root; bubble back up to here and stop.
                t,
                a
              ), N = N.sibling;
            ge = u, mm = b, Mr = _, wS(e, t, a);
            continue;
          }
        }
        (u.subtreeFlags & ai) !== ke && s !== null ? (s.return = u, ge = s) : wS(e, t, a);
      }
    }
    function wS(e, t, a) {
      for (; ge !== null; ) {
        var i = ge;
        if ((i.flags & ai) !== ke) {
          var u = i.alternate;
          fn(i);
          try {
            $_(t, u, i, a);
          } catch (f) {
            rn(i, i.return, f);
          }
          Jt();
        }
        if (i === e) {
          ge = null;
          return;
        }
        var s = i.sibling;
        if (s !== null) {
          s.return = i.return, ge = s;
          return;
        }
        ge = i.return;
      }
    }
    function ex(e) {
      for (; ge !== null; ) {
        var t = ge, a = t.child;
        switch (t.tag) {
          case Me:
          case He:
          case ut:
          case $e: {
            if (t.mode & wt)
              try {
                Yl(), ll(ur, t, t.return);
              } finally {
                $l(t);
              }
            else
              ll(ur, t, t.return);
            break;
          }
          case fe: {
            jf(t, t.return);
            var i = t.stateNode;
            typeof i.componentWillUnmount == "function" && CS(t, t.return, i);
            break;
          }
          case ae: {
            jf(t, t.return);
            break;
          }
          case Pe: {
            var u = t.memoizedState !== null;
            if (u) {
              $C(e);
              continue;
            }
            break;
          }
        }
        a !== null ? (a.return = t, ge = a) : $C(e);
      }
    }
    function $C(e) {
      for (; ge !== null; ) {
        var t = ge;
        if (t === e) {
          ge = null;
          return;
        }
        var a = t.sibling;
        if (a !== null) {
          a.return = t.return, ge = a;
          return;
        }
        ge = t.return;
      }
    }
    function tx(e) {
      for (; ge !== null; ) {
        var t = ge, a = t.child;
        if (t.tag === Pe) {
          var i = t.memoizedState !== null;
          if (i) {
            YC(e);
            continue;
          }
        }
        a !== null ? (a.return = t, ge = a) : YC(e);
      }
    }
    function YC(e) {
      for (; ge !== null; ) {
        var t = ge;
        fn(t);
        try {
          Y_(t);
        } catch (i) {
          rn(t, t.return, i);
        }
        if (Jt(), t === e) {
          ge = null;
          return;
        }
        var a = t.sibling;
        if (a !== null) {
          a.return = t.return, ge = a;
          return;
        }
        ge = t.return;
      }
    }
    function nx(e, t, a, i) {
      ge = t, rx(t, e, a, i);
    }
    function rx(e, t, a, i) {
      for (; ge !== null; ) {
        var u = ge, s = u.child;
        (u.subtreeFlags & Gr) !== ke && s !== null ? (s.return = u, ge = s) : ax(e, t, a, i);
      }
    }
    function ax(e, t, a, i) {
      for (; ge !== null; ) {
        var u = ge;
        if ((u.flags & Ir) !== ke) {
          fn(u);
          try {
            ix(t, u, a, i);
          } catch (f) {
            rn(u, u.return, f);
          }
          Jt();
        }
        if (u === e) {
          ge = null;
          return;
        }
        var s = u.sibling;
        if (s !== null) {
          s.return = u.return, ge = s;
          return;
        }
        ge = u.return;
      }
    }
    function ix(e, t, a, i) {
      switch (t.tag) {
        case Me:
        case He:
        case $e: {
          if (t.mode & wt) {
            tS();
            try {
              jo(Or | lr, t);
            } finally {
              eS(t);
            }
          } else
            jo(Or | lr, t);
          break;
        }
      }
    }
    function lx(e) {
      ge = e, ux();
    }
    function ux() {
      for (; ge !== null; ) {
        var e = ge, t = e.child;
        if ((ge.flags & bt) !== ke) {
          var a = e.deletions;
          if (a !== null) {
            for (var i = 0; i < a.length; i++) {
              var u = a[i];
              ge = u, cx(u, e);
            }
            {
              var s = e.alternate;
              if (s !== null) {
                var f = s.child;
                if (f !== null) {
                  s.child = null;
                  do {
                    var p = f.sibling;
                    f.sibling = null, f = p;
                  } while (f !== null);
                }
              }
            }
            ge = e;
          }
        }
        (e.subtreeFlags & Gr) !== ke && t !== null ? (t.return = e, ge = t) : ox();
      }
    }
    function ox() {
      for (; ge !== null; ) {
        var e = ge;
        (e.flags & Ir) !== ke && (fn(e), sx(e), Jt());
        var t = e.sibling;
        if (t !== null) {
          t.return = e.return, ge = t;
          return;
        }
        ge = e.return;
      }
    }
    function sx(e) {
      switch (e.tag) {
        case Me:
        case He:
        case $e: {
          e.mode & wt ? (tS(), ll(Or | lr, e, e.return), eS(e)) : ll(Or | lr, e, e.return);
          break;
        }
      }
    }
    function cx(e, t) {
      for (; ge !== null; ) {
        var a = ge;
        fn(a), dx(a, t), Jt();
        var i = a.child;
        i !== null ? (i.return = a, ge = i) : fx(e);
      }
    }
    function fx(e) {
      for (; ge !== null; ) {
        var t = ge, a = t.sibling, i = t.return;
        if (AC(t), t === e) {
          ge = null;
          return;
        }
        if (a !== null) {
          a.return = i, ge = a;
          return;
        }
        ge = i;
      }
    }
    function dx(e, t) {
      switch (e.tag) {
        case Me:
        case He:
        case $e: {
          e.mode & wt ? (tS(), ll(Or, e, t), eS(e)) : ll(Or, e, t);
          break;
        }
      }
    }
    function px(e) {
      switch (e.tag) {
        case Me:
        case He:
        case $e: {
          try {
            jo(ur | lr, e);
          } catch (a) {
            rn(e, e.return, a);
          }
          break;
        }
        case fe: {
          var t = e.stateNode;
          try {
            t.componentDidMount();
          } catch (a) {
            rn(e, e.return, a);
          }
          break;
        }
      }
    }
    function vx(e) {
      switch (e.tag) {
        case Me:
        case He:
        case $e: {
          try {
            jo(Or | lr, e);
          } catch (t) {
            rn(e, e.return, t);
          }
          break;
        }
      }
    }
    function hx(e) {
      switch (e.tag) {
        case Me:
        case He:
        case $e: {
          try {
            ll(ur | lr, e, e.return);
          } catch (a) {
            rn(e, e.return, a);
          }
          break;
        }
        case fe: {
          var t = e.stateNode;
          typeof t.componentWillUnmount == "function" && CS(e, e.return, t);
          break;
        }
      }
    }
    function mx(e) {
      switch (e.tag) {
        case Me:
        case He:
        case $e:
          try {
            ll(Or | lr, e, e.return);
          } catch (t) {
            rn(e, e.return, t);
          }
      }
    }
    if (typeof Symbol == "function" && Symbol.for) {
      var _p = Symbol.for;
      _p("selector.component"), _p("selector.has_pseudo_class"), _p("selector.role"), _p("selector.test_id"), _p("selector.text");
    }
    var yx = [];
    function gx() {
      yx.forEach(function(e) {
        return e();
      });
    }
    var Sx = Tt.ReactCurrentActQueue;
    function Ex(e) {
      {
        var t = (
          // $FlowExpectedError – Flow doesn't know about IS_REACT_ACT_ENVIRONMENT global
          typeof IS_REACT_ACT_ENVIRONMENT < "u" ? IS_REACT_ACT_ENVIRONMENT : void 0
        ), a = typeof jest < "u";
        return a && t !== !1;
      }
    }
    function IC() {
      {
        var e = (
          // $FlowExpectedError – Flow doesn't know about IS_REACT_ACT_ENVIRONMENT global
          typeof IS_REACT_ACT_ENVIRONMENT < "u" ? IS_REACT_ACT_ENVIRONMENT : void 0
        );
        return !e && Sx.current !== null && S("The current testing environment is not configured to support act(...)"), e;
      }
    }
    var Cx = Math.ceil, _S = Tt.ReactCurrentDispatcher, xS = Tt.ReactCurrentOwner, zr = Tt.ReactCurrentBatchConfig, sl = Tt.ReactCurrentActQueue, cr = (
      /*             */
      0
    ), QC = (
      /*               */
      1
    ), Ur = (
      /*                */
      2
    ), ki = (
      /*                */
      4
    ), Nu = 0, xp = 1, ac = 2, gm = 3, bp = 4, WC = 5, bS = 6, yt = cr, Ca = null, Ln = null, fr = V, Ql = V, DS = ko(V), dr = Nu, Dp = null, Sm = V, kp = V, Em = V, Op = null, Ia = null, kS = 0, GC = 500, qC = 1 / 0, Rx = 500, zu = null;
    function Lp() {
      qC = An() + Rx;
    }
    function XC() {
      return qC;
    }
    var Cm = !1, OS = null, Hf = null, ic = !1, Vo = null, Mp = V, LS = [], MS = null, Tx = 50, Np = 0, NS = null, zS = !1, Rm = !1, wx = 50, Vf = 0, Tm = null, zp = Xt, wm = V, KC = !1;
    function _m() {
      return Ca;
    }
    function Ra() {
      return (yt & (Ur | ki)) !== cr ? An() : (zp !== Xt || (zp = An()), zp);
    }
    function Po(e) {
      var t = e.mode;
      if ((t & _e) === Oe)
        return ze;
      if ((yt & Ur) !== cr && fr !== V)
        return so(fr);
      var a = Ew() !== Sw;
      if (a) {
        if (zr.transition !== null) {
          var i = zr.transition;
          i._updatedFibers || (i._updatedFibers = /* @__PURE__ */ new Set()), i._updatedFibers.add(e);
        }
        return wm === bn && (wm = Fv()), wm;
      }
      var u = Fa();
      if (u !== bn)
        return u;
      var s = aT();
      return s;
    }
    function _x(e) {
      var t = e.mode;
      return (t & _e) === Oe ? ze : Zr();
    }
    function pr(e, t, a, i) {
      qx(), KC && S("useInsertionEffect must not schedule updates."), zS && (Rm = !0), Su(e, a, i), (yt & Ur) !== V && e === Ca ? Zx(t) : (ga && Qc(e, t, a), Jx(t), e === Ca && ((yt & Ur) === cr && (kp = qe(kp, a)), dr === bp && Bo(e, fr)), Qa(e, i), a === ze && yt === cr && (t.mode & _e) === Oe && // Treat `act` as if it's inside `batchedUpdates`, even in legacy mode.
      !sl.isBatchingLegacy && (Lp(), X0()));
    }
    function xx(e, t, a) {
      var i = e.current;
      i.lanes = t, Su(e, t, a), Qa(e, a);
    }
    function bx(e) {
      return (
        // TODO: Remove outdated deferRenderPhaseUpdateToNextBatch experiment. We
        // decided not to enable it.
        (yt & Ur) !== cr
      );
    }
    function Qa(e, t) {
      var a = e.callbackNode;
      Jm(e, t);
      var i = ks(e, e === Ca ? fr : V);
      if (i === V) {
        a !== null && p1(a), e.callbackNode = null, e.callbackPriority = bn;
        return;
      }
      var u = Dn(i), s = e.callbackPriority;
      if (s === u && // Special case related to `act`. If the currently scheduled task is a
      // Scheduler task, rather than an `act` task, cancel it and re-scheduled
      // on the `act` queue.
      !(sl.current !== null && a !== PS)) {
        a == null && s !== ze && S("Expected scheduled callback to exist. This error is likely caused by a bug in React. Please file an issue.");
        return;
      }
      a != null && p1(a);
      var f;
      if (u === ze)
        e.tag === Oo ? (sl.isBatchingLegacy !== null && (sl.didScheduleLegacyUpdate = !0), nw(e1.bind(null, e))) : q0(e1.bind(null, e)), sl.current !== null ? sl.current.push(Lo) : lT(function() {
          (yt & (Ur | ki)) === cr && Lo();
        }), f = null;
      else {
        var p;
        switch (ir(i)) {
          case kn:
            p = qr;
            break;
          case qi:
            p = Ju;
            break;
          case Ei:
            p = yi;
            break;
          case co:
            p = Ss;
            break;
          default:
            p = yi;
            break;
        }
        f = BS(p, ZC.bind(null, e));
      }
      e.callbackPriority = u, e.callbackNode = f;
    }
    function ZC(e, t) {
      if (qw(), zp = Xt, wm = V, (yt & (Ur | ki)) !== cr)
        throw new Error("Should not already be working.");
      var a = e.callbackNode, i = Au();
      if (i && e.callbackNode !== a)
        return null;
      var u = ks(e, e === Ca ? fr : V);
      if (u === V)
        return null;
      var s = !Ls(e, u) && !Av(e, u) && !t, f = s ? Fx(e, u) : bm(e, u);
      if (f !== Nu) {
        if (f === ac) {
          var p = Ml(e);
          p !== V && (u = p, f = US(e, p));
        }
        if (f === xp) {
          var v = Dp;
          throw lc(e, V), Bo(e, u), Qa(e, An()), v;
        }
        if (f === bS)
          Bo(e, u);
        else {
          var y = !Ls(e, u), g = e.current.alternate;
          if (y && !kx(g)) {
            if (f = bm(e, u), f === ac) {
              var b = Ml(e);
              b !== V && (u = b, f = US(e, b));
            }
            if (f === xp) {
              var _ = Dp;
              throw lc(e, V), Bo(e, u), Qa(e, An()), _;
            }
          }
          e.finishedWork = g, e.finishedLanes = u, Dx(e, f, u);
        }
      }
      return Qa(e, An()), e.callbackNode === a ? ZC.bind(null, e) : null;
    }
    function US(e, t) {
      var a = Op;
      if (Wc(e)) {
        var i = lc(e, t);
        i.flags |= xr, qT(e.containerInfo);
      }
      var u = bm(e, t);
      if (u !== ac) {
        var s = Ia;
        Ia = a, s !== null && JC(s);
      }
      return u;
    }
    function JC(e) {
      Ia === null ? Ia = e : Ia.push.apply(Ia, e);
    }
    function Dx(e, t, a) {
      switch (t) {
        case Nu:
        case xp:
          throw new Error("Root did not complete. This is a bug in React.");
        case ac: {
          uc(e, Ia, zu);
          break;
        }
        case gm: {
          if (Bo(e, a), Nv(a) && // do not delay if we're inside an act() scope
          !v1()) {
            var i = kS + GC - An();
            if (i > 10) {
              var u = ks(e, V);
              if (u !== V)
                break;
              var s = e.suspendedLanes;
              if (!gu(s, a)) {
                Ra(), Yc(e, s);
                break;
              }
              e.timeoutHandle = My(uc.bind(null, e, Ia, zu), i);
              break;
            }
          }
          uc(e, Ia, zu);
          break;
        }
        case bp: {
          if (Bo(e, a), Uv(a))
            break;
          if (!v1()) {
            var f = Pc(e, a), p = f, v = An() - p, y = Gx(v) - v;
            if (y > 10) {
              e.timeoutHandle = My(uc.bind(null, e, Ia, zu), y);
              break;
            }
          }
          uc(e, Ia, zu);
          break;
        }
        case WC: {
          uc(e, Ia, zu);
          break;
        }
        default:
          throw new Error("Unknown root exit status.");
      }
    }
    function kx(e) {
      for (var t = e; ; ) {
        if (t.flags & uu) {
          var a = t.updateQueue;
          if (a !== null) {
            var i = a.stores;
            if (i !== null)
              for (var u = 0; u < i.length; u++) {
                var s = i[u], f = s.getSnapshot, p = s.value;
                try {
                  if (!ye(f(), p))
                    return !1;
                } catch {
                  return !1;
                }
              }
          }
        }
        var v = t.child;
        if (t.subtreeFlags & uu && v !== null) {
          v.return = t, t = v;
          continue;
        }
        if (t === e)
          return !0;
        for (; t.sibling === null; ) {
          if (t.return === null || t.return === e)
            return !0;
          t = t.return;
        }
        t.sibling.return = t.return, t = t.sibling;
      }
      return !0;
    }
    function Bo(e, t) {
      t = Ms(t, Em), t = Ms(t, kp), Hv(e, t);
    }
    function e1(e) {
      if (Xw(), (yt & (Ur | ki)) !== cr)
        throw new Error("Should not already be working.");
      Au();
      var t = ks(e, V);
      if (!Jr(t, ze))
        return Qa(e, An()), null;
      var a = bm(e, t);
      if (e.tag !== Oo && a === ac) {
        var i = Ml(e);
        i !== V && (t = i, a = US(e, i));
      }
      if (a === xp) {
        var u = Dp;
        throw lc(e, V), Bo(e, t), Qa(e, An()), u;
      }
      if (a === bS)
        throw new Error("Root did not complete. This is a bug in React.");
      var s = e.current.alternate;
      return e.finishedWork = s, e.finishedLanes = t, uc(e, Ia, zu), Qa(e, An()), null;
    }
    function Ox(e, t) {
      t !== V && (xd(e, qe(t, ze)), Qa(e, An()), (yt & (Ur | ki)) === cr && (Lp(), Lo()));
    }
    function AS(e, t) {
      var a = yt;
      yt |= QC;
      try {
        return e(t);
      } finally {
        yt = a, yt === cr && // Treat `act` as if it's inside `batchedUpdates`, even in legacy mode.
        !sl.isBatchingLegacy && (Lp(), X0());
      }
    }
    function Lx(e, t, a, i, u) {
      var s = Fa(), f = zr.transition;
      try {
        return zr.transition = null, En(kn), e(t, a, i, u);
      } finally {
        En(s), zr.transition = f, yt === cr && Lp();
      }
    }
    function Uu(e) {
      Vo !== null && Vo.tag === Oo && (yt & (Ur | ki)) === cr && Au();
      var t = yt;
      yt |= QC;
      var a = zr.transition, i = Fa();
      try {
        return zr.transition = null, En(kn), e ? e() : void 0;
      } finally {
        En(i), zr.transition = a, yt = t, (yt & (Ur | ki)) === cr && Lo();
      }
    }
    function t1() {
      return (yt & (Ur | ki)) !== cr;
    }
    function xm(e, t) {
      na(DS, Ql, e), Ql = qe(Ql, t);
    }
    function FS(e) {
      Ql = DS.current, ta(DS, e);
    }
    function lc(e, t) {
      e.finishedWork = null, e.finishedLanes = V;
      var a = e.timeoutHandle;
      if (a !== Ny && (e.timeoutHandle = Ny, iT(a)), Ln !== null)
        for (var i = Ln.return; i !== null; ) {
          var u = i.alternate;
          OC(u, i), i = i.return;
        }
      Ca = e;
      var s = oc(e.current, null);
      return Ln = s, fr = Ql = t, dr = Nu, Dp = null, Sm = V, kp = V, Em = V, Op = null, Ia = null, ww(), tl.discardPendingWarnings(), s;
    }
    function n1(e, t) {
      do {
        var a = Ln;
        try {
          if (zh(), ME(), Jt(), xS.current = null, a === null || a.return === null) {
            dr = xp, Dp = t, Ln = null;
            return;
          }
          if (ft && a.mode & wt && dm(a, !0), at)
            if (cu(), t !== null && typeof t == "object" && typeof t.then == "function") {
              var i = t;
              Ov(a, i, fr);
            } else
              kv(a, t, fr);
          t_(e, a.return, a, t, fr), l1(a);
        } catch (u) {
          t = u, Ln === a && a !== null ? (a = a.return, Ln = a) : a = Ln;
          continue;
        }
        return;
      } while (!0);
    }
    function r1() {
      var e = _S.current;
      return _S.current = um, e === null ? um : e;
    }
    function a1(e) {
      _S.current = e;
    }
    function Mx() {
      kS = An();
    }
    function Up(e) {
      Sm = qe(e, Sm);
    }
    function Nx() {
      dr === Nu && (dr = gm);
    }
    function jS() {
      (dr === Nu || dr === gm || dr === ac) && (dr = bp), Ca !== null && (Os(Sm) || Os(kp)) && Bo(Ca, fr);
    }
    function zx(e) {
      dr !== bp && (dr = ac), Op === null ? Op = [e] : Op.push(e);
    }
    function Ux() {
      return dr === Nu;
    }
    function bm(e, t) {
      var a = yt;
      yt |= Ur;
      var i = r1();
      if (Ca !== e || fr !== t) {
        if (ga) {
          var u = e.memoizedUpdaters;
          u.size > 0 && (Ap(e, fr), u.clear()), bd(e, t);
        }
        zu = zs(), lc(e, t);
      }
      ao(t);
      do
        try {
          Ax();
          break;
        } catch (s) {
          n1(e, s);
        }
      while (!0);
      if (zh(), yt = a, a1(i), Ln !== null)
        throw new Error("Cannot commit an incomplete root. This error is likely caused by a bug in React. Please file an issue.");
      return kl(), Ca = null, fr = V, dr;
    }
    function Ax() {
      for (; Ln !== null; )
        i1(Ln);
    }
    function Fx(e, t) {
      var a = yt;
      yt |= Ur;
      var i = r1();
      if (Ca !== e || fr !== t) {
        if (ga) {
          var u = e.memoizedUpdaters;
          u.size > 0 && (Ap(e, fr), u.clear()), bd(e, t);
        }
        zu = zs(), Lp(), lc(e, t);
      }
      ao(t);
      do
        try {
          jx();
          break;
        } catch (s) {
          n1(e, s);
        }
      while (!0);
      return zh(), a1(i), yt = a, Ln !== null ? (Ts(), Nu) : (kl(), Ca = null, fr = V, dr);
    }
    function jx() {
      for (; Ln !== null && !Rv(); )
        i1(Ln);
    }
    function i1(e) {
      var t = e.alternate;
      fn(e);
      var a;
      (e.mode & wt) !== Oe ? (Jg(e), a = HS(t, e, Ql), dm(e, !0)) : a = HS(t, e, Ql), Jt(), e.memoizedProps = e.pendingProps, a === null ? l1(e) : Ln = a, xS.current = null;
    }
    function l1(e) {
      var t = e;
      do {
        var a = t.alternate, i = t.return;
        if ((t.flags & Tl) === ke) {
          fn(t);
          var u = void 0;
          if ((t.mode & wt) === Oe ? u = kC(a, t, Ql) : (Jg(t), u = kC(a, t, Ql), dm(t, !1)), Jt(), u !== null) {
            Ln = u;
            return;
          }
        } else {
          var s = N_(a, t);
          if (s !== null) {
            s.flags &= Qi, Ln = s;
            return;
          }
          if ((t.mode & wt) !== Oe) {
            dm(t, !1);
            for (var f = t.actualDuration, p = t.child; p !== null; )
              f += p.actualDuration, p = p.sibling;
            t.actualDuration = f;
          }
          if (i !== null)
            i.flags |= Tl, i.subtreeFlags = ke, i.deletions = null;
          else {
            dr = bS, Ln = null;
            return;
          }
        }
        var v = t.sibling;
        if (v !== null) {
          Ln = v;
          return;
        }
        t = i, Ln = t;
      } while (t !== null);
      dr === Nu && (dr = WC);
    }
    function uc(e, t, a) {
      var i = Fa(), u = zr.transition;
      try {
        zr.transition = null, En(kn), Hx(e, t, a, i);
      } finally {
        zr.transition = u, En(i);
      }
      return null;
    }
    function Hx(e, t, a, i) {
      do
        Au();
      while (Vo !== null);
      if (Xx(), (yt & (Ur | ki)) !== cr)
        throw new Error("Should not already be working.");
      var u = e.finishedWork, s = e.finishedLanes;
      if (_v(s), u === null)
        return Es(), null;
      if (s === V && S("root.finishedLanes should not be empty during a commit. This is a bug in React."), e.finishedWork = null, e.finishedLanes = V, u === e.current)
        throw new Error("Cannot commit the same tree as before. This error is likely caused by a bug in React. Please file an issue.");
      e.callbackNode = null, e.callbackPriority = bn;
      var f = qe(u.lanes, u.childLanes);
      Ic(e, f), e === Ca && (Ca = null, Ln = null, fr = V), ((u.subtreeFlags & Gr) !== ke || (u.flags & Gr) !== ke) && (ic || (ic = !0, MS = a, BS(yi, function() {
        return Au(), null;
      })));
      var p = (u.subtreeFlags & (Qr | Wr | ai | Gr)) !== ke, v = (u.flags & (Qr | Wr | ai | Gr)) !== ke;
      if (p || v) {
        var y = zr.transition;
        zr.transition = null;
        var g = Fa();
        En(kn);
        var b = yt;
        yt |= ki, xS.current = null, j_(e, u), rC(), Z_(e, u, s), ZR(e.containerInfo), e.current = u, ro(s), J_(u, e, s), Lv(), Zu(), yt = b, En(g), zr.transition = y;
      } else
        e.current = u, rC();
      var _ = ic;
      if (ic ? (ic = !1, Vo = e, Mp = s) : (Vf = 0, Tm = null), f = e.pendingLanes, f === V && (Hf = null), _ || c1(e.current, !1), bl(u.stateNode, i), ga && e.memoizedUpdaters.clear(), gx(), Qa(e, An()), t !== null)
        for (var N = e.onRecoverableError, z = 0; z < t.length; z++) {
          var j = t[z], se = j.stack, Le = j.digest;
          N(j.value, {
            componentStack: se,
            digest: Le
          });
        }
      if (Cm) {
        Cm = !1;
        var xe = OS;
        throw OS = null, xe;
      }
      return Jr(Mp, ze) && e.tag !== Oo && Au(), f = e.pendingLanes, Jr(f, ze) ? (Gw(), e === NS ? Np++ : (Np = 0, NS = e)) : Np = 0, Lo(), Es(), null;
    }
    function Au() {
      if (Vo !== null) {
        var e = ir(Mp), t = ry(Ei, e), a = zr.transition, i = Fa();
        try {
          return zr.transition = null, En(t), Px();
        } finally {
          En(i), zr.transition = a;
        }
      }
      return !1;
    }
    function Vx(e) {
      LS.push(e), ic || (ic = !0, BS(yi, function() {
        return Au(), null;
      }));
    }
    function Px() {
      if (Vo === null)
        return !1;
      var e = MS;
      MS = null;
      var t = Vo, a = Mp;
      if (Vo = null, Mp = V, (yt & (Ur | ki)) !== cr)
        throw new Error("Cannot flush passive effects while already rendering.");
      zS = !0, Rm = !1, Rs(a);
      var i = yt;
      yt |= ki, lx(t.current), nx(t, t.current, a, e);
      {
        var u = LS;
        LS = [];
        for (var s = 0; s < u.length; s++) {
          var f = u[s];
          B_(t, f);
        }
      }
      gi(), c1(t.current, !0), yt = i, Lo(), Rm ? t === Tm ? Vf++ : (Vf = 0, Tm = t) : Vf = 0, zS = !1, Rm = !1, yd(t);
      {
        var p = t.current.stateNode;
        p.effectDuration = 0, p.passiveEffectDuration = 0;
      }
      return !0;
    }
    function u1(e) {
      return Hf !== null && Hf.has(e);
    }
    function Bx(e) {
      Hf === null ? Hf = /* @__PURE__ */ new Set([e]) : Hf.add(e);
    }
    function $x(e) {
      Cm || (Cm = !0, OS = e);
    }
    var Yx = $x;
    function o1(e, t, a) {
      var i = nc(a, t), u = iC(e, i, ze), s = No(e, u, ze), f = Ra();
      s !== null && (Su(s, ze, f), Qa(s, f));
    }
    function rn(e, t, a) {
      if (U_(a), Fp(!1), e.tag === te) {
        o1(e, e, a);
        return;
      }
      var i = null;
      for (i = t; i !== null; ) {
        if (i.tag === te) {
          o1(i, e, a);
          return;
        } else if (i.tag === fe) {
          var u = i.type, s = i.stateNode;
          if (typeof u.getDerivedStateFromError == "function" || typeof s.componentDidCatch == "function" && !u1(s)) {
            var f = nc(a, e), p = iS(i, f, ze), v = No(i, p, ze), y = Ra();
            v !== null && (Su(v, ze, y), Qa(v, y));
            return;
          }
        }
        i = i.return;
      }
      S(`Internal React error: Attempted to capture a commit phase error inside a detached tree. This indicates a bug in React. Likely causes include deleting the same fiber more than once, committing an already-finished tree, or an inconsistent return pointer.

Error message:

%s`, a);
    }
    function Ix(e, t, a) {
      var i = e.pingCache;
      i !== null && i.delete(t);
      var u = Ra();
      Yc(e, a), eb(e), Ca === e && gu(fr, a) && (dr === bp || dr === gm && Nv(fr) && An() - kS < GC ? lc(e, V) : Em = qe(Em, a)), Qa(e, u);
    }
    function s1(e, t) {
      t === bn && (t = _x(e));
      var a = Ra(), i = $a(e, t);
      i !== null && (Su(i, t, a), Qa(i, a));
    }
    function Qx(e) {
      var t = e.memoizedState, a = bn;
      t !== null && (a = t.retryLane), s1(e, a);
    }
    function Wx(e, t) {
      var a = bn, i;
      switch (e.tag) {
        case Re:
          i = e.stateNode;
          var u = e.memoizedState;
          u !== null && (a = u.retryLane);
          break;
        case ht:
          i = e.stateNode;
          break;
        default:
          throw new Error("Pinged unknown suspense boundary type. This is probably a bug in React.");
      }
      i !== null && i.delete(t), s1(e, a);
    }
    function Gx(e) {
      return e < 120 ? 120 : e < 480 ? 480 : e < 1080 ? 1080 : e < 1920 ? 1920 : e < 3e3 ? 3e3 : e < 4320 ? 4320 : Cx(e / 1960) * 1960;
    }
    function qx() {
      if (Np > Tx)
        throw Np = 0, NS = null, new Error("Maximum update depth exceeded. This can happen when a component repeatedly calls setState inside componentWillUpdate or componentDidUpdate. React limits the number of nested updates to prevent infinite loops.");
      Vf > wx && (Vf = 0, Tm = null, S("Maximum update depth exceeded. This can happen when a component calls setState inside useEffect, but useEffect either doesn't have a dependency array, or one of the dependencies changes on every render."));
    }
    function Xx() {
      tl.flushLegacyContextWarning(), tl.flushPendingUnsafeLifecycleWarnings();
    }
    function c1(e, t) {
      fn(e), Dm(e, Na, hx), t && Dm(e, ou, mx), Dm(e, Na, px), t && Dm(e, ou, vx), Jt();
    }
    function Dm(e, t, a) {
      for (var i = e, u = null; i !== null; ) {
        var s = i.subtreeFlags & t;
        i !== u && i.child !== null && s !== ke ? i = i.child : ((i.flags & t) !== ke && a(i), i.sibling !== null ? i = i.sibling : i = u = i.return);
      }
    }
    var km = null;
    function f1(e) {
      {
        if ((yt & Ur) !== cr || !(e.mode & _e))
          return;
        var t = e.tag;
        if (t !== Ie && t !== te && t !== fe && t !== Me && t !== He && t !== ut && t !== $e)
          return;
        var a = Ye(e) || "ReactComponent";
        if (km !== null) {
          if (km.has(a))
            return;
          km.add(a);
        } else
          km = /* @__PURE__ */ new Set([a]);
        var i = cn;
        try {
          fn(e), S("Can't perform a React state update on a component that hasn't mounted yet. This indicates that you have a side-effect in your render function that asynchronously later calls tries to update the component. Move this work to useEffect instead.");
        } finally {
          i ? fn(e) : Jt();
        }
      }
    }
    var HS;
    {
      var Kx = null;
      HS = function(e, t, a) {
        var i = S1(Kx, t);
        try {
          return wC(e, t, a);
        } catch (s) {
          if (cw() || s !== null && typeof s == "object" && typeof s.then == "function")
            throw s;
          if (zh(), ME(), OC(e, t), S1(t, i), t.mode & wt && Jg(t), ni(null, wC, null, e, t, a), Xm()) {
            var u = Ii();
            typeof u == "object" && u !== null && u._suppressLogging && typeof s == "object" && s !== null && !s._suppressLogging && (s._suppressLogging = !0);
          }
          throw s;
        }
      };
    }
    var d1 = !1, VS;
    VS = /* @__PURE__ */ new Set();
    function Zx(e) {
      if (Br && !Iw())
        switch (e.tag) {
          case Me:
          case He:
          case $e: {
            var t = Ln && Ye(Ln) || "Unknown", a = t;
            if (!VS.has(a)) {
              VS.add(a);
              var i = Ye(e) || "Unknown";
              S("Cannot update a component (`%s`) while rendering a different component (`%s`). To locate the bad setState() call inside `%s`, follow the stack trace as described in https://reactjs.org/link/setstate-in-render", i, t, t);
            }
            break;
          }
          case fe: {
            d1 || (S("Cannot update during an existing state transition (such as within `render`). Render methods should be a pure function of props and state."), d1 = !0);
            break;
          }
        }
    }
    function Ap(e, t) {
      if (ga) {
        var a = e.memoizedUpdaters;
        a.forEach(function(i) {
          Qc(e, i, t);
        });
      }
    }
    var PS = {};
    function BS(e, t) {
      {
        var a = sl.current;
        return a !== null ? (a.push(t), PS) : vd(e, t);
      }
    }
    function p1(e) {
      if (e !== PS)
        return wc(e);
    }
    function v1() {
      return sl.current !== null;
    }
    function Jx(e) {
      {
        if (e.mode & _e) {
          if (!IC())
            return;
        } else if (!Ex() || yt !== cr || e.tag !== Me && e.tag !== He && e.tag !== $e)
          return;
        if (sl.current === null) {
          var t = cn;
          try {
            fn(e), S(`An update to %s inside a test was not wrapped in act(...).

When testing, code that causes React state updates should be wrapped into act(...):

act(() => {
  /* fire events that update state */
});
/* assert on the output */

This ensures that you're testing the behavior the user would see in the browser. Learn more at https://reactjs.org/link/wrap-tests-with-act`, Ye(e));
          } finally {
            t ? fn(e) : Jt();
          }
        }
      }
    }
    function eb(e) {
      e.tag !== Oo && IC() && sl.current === null && S(`A suspended resource finished loading inside a test, but the event was not wrapped in act(...).

When testing, code that resolves suspended data should be wrapped into act(...):

act(() => {
  /* finish loading suspended data */
});
/* assert on the output */

This ensures that you're testing the behavior the user would see in the browser. Learn more at https://reactjs.org/link/wrap-tests-with-act`);
    }
    function Fp(e) {
      KC = e;
    }
    var Oi = null, Pf = null, tb = function(e) {
      Oi = e;
    };
    function Bf(e) {
      {
        if (Oi === null)
          return e;
        var t = Oi(e);
        return t === void 0 ? e : t.current;
      }
    }
    function $S(e) {
      return Bf(e);
    }
    function YS(e) {
      {
        if (Oi === null)
          return e;
        var t = Oi(e);
        if (t === void 0) {
          if (e != null && typeof e.render == "function") {
            var a = Bf(e.render);
            if (e.render !== a) {
              var i = {
                $$typeof: re,
                render: a
              };
              return e.displayName !== void 0 && (i.displayName = e.displayName), i;
            }
          }
          return e;
        }
        return t.current;
      }
    }
    function h1(e, t) {
      {
        if (Oi === null)
          return !1;
        var a = e.elementType, i = t.type, u = !1, s = typeof i == "object" && i !== null ? i.$$typeof : null;
        switch (e.tag) {
          case fe: {
            typeof i == "function" && (u = !0);
            break;
          }
          case Me: {
            (typeof i == "function" || s === De) && (u = !0);
            break;
          }
          case He: {
            (s === re || s === De) && (u = !0);
            break;
          }
          case ut:
          case $e: {
            (s === Ze || s === De) && (u = !0);
            break;
          }
          default:
            return !1;
        }
        if (u) {
          var f = Oi(a);
          if (f !== void 0 && f === Oi(i))
            return !0;
        }
        return !1;
      }
    }
    function m1(e) {
      {
        if (Oi === null || typeof WeakSet != "function")
          return;
        Pf === null && (Pf = /* @__PURE__ */ new WeakSet()), Pf.add(e);
      }
    }
    var nb = function(e, t) {
      {
        if (Oi === null)
          return;
        var a = t.staleFamilies, i = t.updatedFamilies;
        Au(), Uu(function() {
          IS(e.current, i, a);
        });
      }
    }, rb = function(e, t) {
      {
        if (e.context !== ii)
          return;
        Au(), Uu(function() {
          jp(t, e, null, null);
        });
      }
    };
    function IS(e, t, a) {
      {
        var i = e.alternate, u = e.child, s = e.sibling, f = e.tag, p = e.type, v = null;
        switch (f) {
          case Me:
          case $e:
          case fe:
            v = p;
            break;
          case He:
            v = p.render;
            break;
        }
        if (Oi === null)
          throw new Error("Expected resolveFamily to be set during hot reload.");
        var y = !1, g = !1;
        if (v !== null) {
          var b = Oi(v);
          b !== void 0 && (a.has(b) ? g = !0 : t.has(b) && (f === fe ? g = !0 : y = !0));
        }
        if (Pf !== null && (Pf.has(e) || i !== null && Pf.has(i)) && (g = !0), g && (e._debugNeedsRemount = !0), g || y) {
          var _ = $a(e, ze);
          _ !== null && pr(_, e, ze, Xt);
        }
        u !== null && !g && IS(u, t, a), s !== null && IS(s, t, a);
      }
    }
    var ab = function(e, t) {
      {
        var a = /* @__PURE__ */ new Set(), i = new Set(t.map(function(u) {
          return u.current;
        }));
        return QS(e.current, i, a), a;
      }
    };
    function QS(e, t, a) {
      {
        var i = e.child, u = e.sibling, s = e.tag, f = e.type, p = null;
        switch (s) {
          case Me:
          case $e:
          case fe:
            p = f;
            break;
          case He:
            p = f.render;
            break;
        }
        var v = !1;
        p !== null && t.has(p) && (v = !0), v ? ib(e, a) : i !== null && QS(i, t, a), u !== null && QS(u, t, a);
      }
    }
    function ib(e, t) {
      {
        var a = lb(e, t);
        if (a)
          return;
        for (var i = e; ; ) {
          switch (i.tag) {
            case ae:
              t.add(i.stateNode);
              return;
            case Ne:
              t.add(i.stateNode.containerInfo);
              return;
            case te:
              t.add(i.stateNode.containerInfo);
              return;
          }
          if (i.return === null)
            throw new Error("Expected to reach root first.");
          i = i.return;
        }
      }
    }
    function lb(e, t) {
      for (var a = e, i = !1; ; ) {
        if (a.tag === ae)
          i = !0, t.add(a.stateNode);
        else if (a.child !== null) {
          a.child.return = a, a = a.child;
          continue;
        }
        if (a === e)
          return i;
        for (; a.sibling === null; ) {
          if (a.return === null || a.return === e)
            return i;
          a = a.return;
        }
        a.sibling.return = a.return, a = a.sibling;
      }
      return !1;
    }
    var WS;
    {
      WS = !1;
      try {
        var y1 = Object.preventExtensions({});
      } catch {
        WS = !0;
      }
    }
    function ub(e, t, a, i) {
      this.tag = e, this.key = a, this.elementType = null, this.type = null, this.stateNode = null, this.return = null, this.child = null, this.sibling = null, this.index = 0, this.ref = null, this.pendingProps = t, this.memoizedProps = null, this.updateQueue = null, this.memoizedState = null, this.dependencies = null, this.mode = i, this.flags = ke, this.subtreeFlags = ke, this.deletions = null, this.lanes = V, this.childLanes = V, this.alternate = null, this.actualDuration = Number.NaN, this.actualStartTime = Number.NaN, this.selfBaseDuration = Number.NaN, this.treeBaseDuration = Number.NaN, this.actualDuration = 0, this.actualStartTime = -1, this.selfBaseDuration = 0, this.treeBaseDuration = 0, this._debugSource = null, this._debugOwner = null, this._debugNeedsRemount = !1, this._debugHookTypes = null, !WS && typeof Object.preventExtensions == "function" && Object.preventExtensions(this);
    }
    var li = function(e, t, a, i) {
      return new ub(e, t, a, i);
    };
    function GS(e) {
      var t = e.prototype;
      return !!(t && t.isReactComponent);
    }
    function ob(e) {
      return typeof e == "function" && !GS(e) && e.defaultProps === void 0;
    }
    function sb(e) {
      if (typeof e == "function")
        return GS(e) ? fe : Me;
      if (e != null) {
        var t = e.$$typeof;
        if (t === re)
          return He;
        if (t === Ze)
          return ut;
      }
      return Ie;
    }
    function oc(e, t) {
      var a = e.alternate;
      a === null ? (a = li(e.tag, t, e.key, e.mode), a.elementType = e.elementType, a.type = e.type, a.stateNode = e.stateNode, a._debugSource = e._debugSource, a._debugOwner = e._debugOwner, a._debugHookTypes = e._debugHookTypes, a.alternate = e, e.alternate = a) : (a.pendingProps = t, a.type = e.type, a.flags = ke, a.subtreeFlags = ke, a.deletions = null, a.actualDuration = 0, a.actualStartTime = -1), a.flags = e.flags & ar, a.childLanes = e.childLanes, a.lanes = e.lanes, a.child = e.child, a.memoizedProps = e.memoizedProps, a.memoizedState = e.memoizedState, a.updateQueue = e.updateQueue;
      var i = e.dependencies;
      switch (a.dependencies = i === null ? null : {
        lanes: i.lanes,
        firstContext: i.firstContext
      }, a.sibling = e.sibling, a.index = e.index, a.ref = e.ref, a.selfBaseDuration = e.selfBaseDuration, a.treeBaseDuration = e.treeBaseDuration, a._debugNeedsRemount = e._debugNeedsRemount, a.tag) {
        case Ie:
        case Me:
        case $e:
          a.type = Bf(e.type);
          break;
        case fe:
          a.type = $S(e.type);
          break;
        case He:
          a.type = YS(e.type);
          break;
      }
      return a;
    }
    function cb(e, t) {
      e.flags &= ar | $t;
      var a = e.alternate;
      if (a === null)
        e.childLanes = V, e.lanes = t, e.child = null, e.subtreeFlags = ke, e.memoizedProps = null, e.memoizedState = null, e.updateQueue = null, e.dependencies = null, e.stateNode = null, e.selfBaseDuration = 0, e.treeBaseDuration = 0;
      else {
        e.childLanes = a.childLanes, e.lanes = a.lanes, e.child = a.child, e.subtreeFlags = ke, e.deletions = null, e.memoizedProps = a.memoizedProps, e.memoizedState = a.memoizedState, e.updateQueue = a.updateQueue, e.type = a.type;
        var i = a.dependencies;
        e.dependencies = i === null ? null : {
          lanes: i.lanes,
          firstContext: i.firstContext
        }, e.selfBaseDuration = a.selfBaseDuration, e.treeBaseDuration = a.treeBaseDuration;
      }
      return e;
    }
    function fb(e, t, a) {
      var i;
      return e === xh ? (i = _e, t === !0 && (i |= gn, i |= Ua)) : i = Oe, ga && (i |= wt), li(te, null, null, i);
    }
    function qS(e, t, a, i, u, s) {
      var f = Ie, p = e;
      if (typeof e == "function")
        GS(e) ? (f = fe, p = $S(p)) : p = Bf(p);
      else if (typeof e == "string")
        f = ae;
      else
        e:
          switch (e) {
            case da:
              return $o(a.children, u, s, t);
            case Mi:
              f = jn, u |= gn, (u & _e) !== Oe && (u |= Ua);
              break;
            case R:
              return db(a, u, s, t);
            case lt:
              return pb(a, u, s, t);
            case mt:
              return vb(a, u, s, t);
            case Wt:
              return g1(a, u, s, t);
            case gr:
            case zn:
            case oi:
            case Gt:
            case Qt:
            default: {
              if (typeof e == "object" && e !== null)
                switch (e.$$typeof) {
                  case I:
                    f = rt;
                    break e;
                  case J:
                    f = an;
                    break e;
                  case re:
                    f = He, p = YS(p);
                    break e;
                  case Ze:
                    f = ut;
                    break e;
                  case De:
                    f = Tn, p = null;
                    break e;
                }
              var v = "";
              {
                (e === void 0 || typeof e == "object" && e !== null && Object.keys(e).length === 0) && (v += " You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports.");
                var y = i ? Ye(i) : null;
                y && (v += `

Check the render method of \`` + y + "`.");
              }
              throw new Error("Element type is invalid: expected a string (for built-in components) or a class/function (for composite components) " + ("but got: " + (e == null ? e : typeof e) + "." + v));
            }
          }
      var g = li(f, a, t, u);
      return g.elementType = e, g.type = p, g.lanes = s, g._debugOwner = i, g;
    }
    function XS(e, t, a) {
      var i = null;
      i = e._owner;
      var u = e.type, s = e.key, f = e.props, p = qS(u, s, f, i, t, a);
      return p._debugSource = e._source, p._debugOwner = e._owner, p;
    }
    function $o(e, t, a, i) {
      var u = li(ct, e, i, t);
      return u.lanes = a, u;
    }
    function db(e, t, a, i) {
      typeof e.id != "string" && S('Profiler must specify an "id" of type `string` as a prop. Received the type `%s` instead.', typeof e.id);
      var u = li(_t, e, i, t | wt);
      return u.elementType = R, u.lanes = a, u.stateNode = {
        effectDuration: 0,
        passiveEffectDuration: 0
      }, u;
    }
    function pb(e, t, a, i) {
      var u = li(Re, e, i, t);
      return u.elementType = lt, u.lanes = a, u;
    }
    function vb(e, t, a, i) {
      var u = li(ht, e, i, t);
      return u.elementType = mt, u.lanes = a, u;
    }
    function g1(e, t, a, i) {
      var u = li(Pe, e, i, t);
      u.elementType = Wt, u.lanes = a;
      var s = {
        isHidden: !1
      };
      return u.stateNode = s, u;
    }
    function KS(e, t, a) {
      var i = li(Ce, e, null, t);
      return i.lanes = a, i;
    }
    function hb() {
      var e = li(ae, null, null, Oe);
      return e.elementType = "DELETED", e;
    }
    function mb(e) {
      var t = li(Yt, null, null, Oe);
      return t.stateNode = e, t;
    }
    function ZS(e, t, a) {
      var i = e.children !== null ? e.children : [], u = li(Ne, i, e.key, t);
      return u.lanes = a, u.stateNode = {
        containerInfo: e.containerInfo,
        pendingChildren: null,
        // Used by persistent updates
        implementation: e.implementation
      }, u;
    }
    function S1(e, t) {
      return e === null && (e = li(Ie, null, null, Oe)), e.tag = t.tag, e.key = t.key, e.elementType = t.elementType, e.type = t.type, e.stateNode = t.stateNode, e.return = t.return, e.child = t.child, e.sibling = t.sibling, e.index = t.index, e.ref = t.ref, e.pendingProps = t.pendingProps, e.memoizedProps = t.memoizedProps, e.updateQueue = t.updateQueue, e.memoizedState = t.memoizedState, e.dependencies = t.dependencies, e.mode = t.mode, e.flags = t.flags, e.subtreeFlags = t.subtreeFlags, e.deletions = t.deletions, e.lanes = t.lanes, e.childLanes = t.childLanes, e.alternate = t.alternate, e.actualDuration = t.actualDuration, e.actualStartTime = t.actualStartTime, e.selfBaseDuration = t.selfBaseDuration, e.treeBaseDuration = t.treeBaseDuration, e._debugSource = t._debugSource, e._debugOwner = t._debugOwner, e._debugNeedsRemount = t._debugNeedsRemount, e._debugHookTypes = t._debugHookTypes, e;
    }
    function yb(e, t, a, i, u) {
      this.tag = t, this.containerInfo = e, this.pendingChildren = null, this.current = null, this.pingCache = null, this.finishedWork = null, this.timeoutHandle = Ny, this.context = null, this.pendingContext = null, this.callbackNode = null, this.callbackPriority = bn, this.eventTimes = Ns(V), this.expirationTimes = Ns(Xt), this.pendingLanes = V, this.suspendedLanes = V, this.pingedLanes = V, this.expiredLanes = V, this.mutableReadLanes = V, this.finishedLanes = V, this.entangledLanes = V, this.entanglements = Ns(V), this.identifierPrefix = i, this.onRecoverableError = u, this.mutableSourceEagerHydrationData = null, this.effectDuration = 0, this.passiveEffectDuration = 0;
      {
        this.memoizedUpdaters = /* @__PURE__ */ new Set();
        for (var s = this.pendingUpdatersLaneMap = [], f = 0; f < xn; f++)
          s.push(/* @__PURE__ */ new Set());
      }
      switch (t) {
        case xh:
          this._debugRootType = a ? "hydrateRoot()" : "createRoot()";
          break;
        case Oo:
          this._debugRootType = a ? "hydrate()" : "render()";
          break;
      }
    }
    function E1(e, t, a, i, u, s, f, p, v, y) {
      var g = new yb(e, t, a, p, v), b = fb(t, s);
      g.current = b, b.stateNode = g;
      {
        var _ = {
          element: i,
          isDehydrated: a,
          cache: null,
          // not enabled yet
          transitions: null,
          pendingSuspenseBoundaries: null
        };
        b.memoizedState = _;
      }
      return lg(b), g;
    }
    var JS = "18.2.0";
    function gb(e, t, a) {
      var i = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : null;
      return hr(i), {
        // This tag allow us to uniquely identify this as a React Portal
        $$typeof: Hr,
        key: i == null ? null : "" + i,
        children: e,
        containerInfo: t,
        implementation: a
      };
    }
    var e0, t0;
    e0 = !1, t0 = {};
    function C1(e) {
      if (!e)
        return ii;
      var t = vi(e), a = tw(t);
      if (t.tag === fe) {
        var i = t.type;
        if (Hl(i))
          return W0(t, i, a);
      }
      return a;
    }
    function Sb(e, t) {
      {
        var a = vi(e);
        if (a === void 0) {
          if (typeof e.render == "function")
            throw new Error("Unable to find node on an unmounted component.");
          var i = Object.keys(e).join(",");
          throw new Error("Argument appears to not be a ReactComponent. Keys: " + i);
        }
        var u = fd(a);
        if (u === null)
          return null;
        if (u.mode & gn) {
          var s = Ye(a) || "Component";
          if (!t0[s]) {
            t0[s] = !0;
            var f = cn;
            try {
              fn(u), a.mode & gn ? S("%s is deprecated in StrictMode. %s was passed an instance of %s which is inside StrictMode. Instead, add a ref directly to the element you want to reference. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-find-node", t, t, s) : S("%s is deprecated in StrictMode. %s was passed an instance of %s which renders StrictMode children. Instead, add a ref directly to the element you want to reference. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-find-node", t, t, s);
            } finally {
              f ? fn(f) : Jt();
            }
          }
        }
        return u.stateNode;
      }
    }
    function R1(e, t, a, i, u, s, f, p) {
      var v = !1, y = null;
      return E1(e, t, v, y, a, i, u, s, f);
    }
    function T1(e, t, a, i, u, s, f, p, v, y) {
      var g = !0, b = E1(a, i, g, e, u, s, f, p, v);
      b.context = C1(null);
      var _ = b.current, N = Ra(), z = Po(_), j = Lu(N, z);
      return j.callback = t ?? null, No(_, j, z), xx(b, z, N), b;
    }
    function jp(e, t, a, i) {
      Wi(t, e);
      var u = t.current, s = Ra(), f = Po(u);
      Ed(f);
      var p = C1(a);
      t.context === null ? t.context = p : t.pendingContext = p, Br && cn !== null && !e0 && (e0 = !0, S(`Render methods should be a pure function of props and state; triggering nested component updates from render is not allowed. If necessary, trigger nested updates in componentDidUpdate.

Check the render method of %s.`, Ye(cn) || "Unknown"));
      var v = Lu(s, f);
      v.payload = {
        element: e
      }, i = i === void 0 ? null : i, i !== null && (typeof i != "function" && S("render(...): Expected the last optional `callback` argument to be a function. Instead received: %s.", i), v.callback = i);
      var y = No(u, v, f);
      return y !== null && (pr(y, u, f, s), Hh(y, u, f)), f;
    }
    function Om(e) {
      var t = e.current;
      if (!t.child)
        return null;
      switch (t.child.tag) {
        case ae:
          return t.child.stateNode;
        default:
          return t.child.stateNode;
      }
    }
    function Eb(e) {
      switch (e.tag) {
        case te: {
          var t = e.stateNode;
          if (Wc(t)) {
            var a = ey(t);
            Ox(t, a);
          }
          break;
        }
        case Re: {
          Uu(function() {
            var u = $a(e, ze);
            if (u !== null) {
              var s = Ra();
              pr(u, e, ze, s);
            }
          });
          var i = ze;
          n0(e, i);
          break;
        }
      }
    }
    function w1(e, t) {
      var a = e.memoizedState;
      a !== null && a.dehydrated !== null && (a.retryLane = jv(a.retryLane, t));
    }
    function n0(e, t) {
      w1(e, t);
      var a = e.alternate;
      a && w1(a, t);
    }
    function Cb(e) {
      if (e.tag === Re) {
        var t = yu, a = $a(e, t);
        if (a !== null) {
          var i = Ra();
          pr(a, e, t, i);
        }
        n0(e, t);
      }
    }
    function Rb(e) {
      if (e.tag === Re) {
        var t = Po(e), a = $a(e, t);
        if (a !== null) {
          var i = Ra();
          pr(a, e, t, i);
        }
        n0(e, t);
      }
    }
    function _1(e) {
      var t = pd(e);
      return t === null ? null : t.stateNode;
    }
    var x1 = function(e) {
      return null;
    };
    function Tb(e) {
      return x1(e);
    }
    var b1 = function(e) {
      return !1;
    };
    function wb(e) {
      return b1(e);
    }
    var D1 = null, k1 = null, O1 = null, L1 = null, M1 = null, N1 = null, z1 = null, U1 = null, A1 = null;
    {
      var F1 = function(e, t, a) {
        var i = t[a], u = Rt(e) ? e.slice() : et({}, e);
        return a + 1 === t.length ? (Rt(u) ? u.splice(i, 1) : delete u[i], u) : (u[i] = F1(e[i], t, a + 1), u);
      }, j1 = function(e, t) {
        return F1(e, t, 0);
      }, H1 = function(e, t, a, i) {
        var u = t[i], s = Rt(e) ? e.slice() : et({}, e);
        if (i + 1 === t.length) {
          var f = a[i];
          s[f] = s[u], Rt(s) ? s.splice(u, 1) : delete s[u];
        } else
          s[u] = H1(
            // $FlowFixMe number or string is fine here
            e[u],
            t,
            a,
            i + 1
          );
        return s;
      }, V1 = function(e, t, a) {
        if (t.length !== a.length) {
          nt("copyWithRename() expects paths of the same length");
          return;
        } else
          for (var i = 0; i < a.length - 1; i++)
            if (t[i] !== a[i]) {
              nt("copyWithRename() expects paths to be the same except for the deepest key");
              return;
            }
        return H1(e, t, a, 0);
      }, P1 = function(e, t, a, i) {
        if (a >= t.length)
          return i;
        var u = t[a], s = Rt(e) ? e.slice() : et({}, e);
        return s[u] = P1(e[u], t, a + 1, i), s;
      }, B1 = function(e, t, a) {
        return P1(e, t, 0, a);
      }, r0 = function(e, t) {
        for (var a = e.memoizedState; a !== null && t > 0; )
          a = a.next, t--;
        return a;
      };
      D1 = function(e, t, a, i) {
        var u = r0(e, t);
        if (u !== null) {
          var s = B1(u.memoizedState, a, i);
          u.memoizedState = s, u.baseState = s, e.memoizedProps = et({}, e.memoizedProps);
          var f = $a(e, ze);
          f !== null && pr(f, e, ze, Xt);
        }
      }, k1 = function(e, t, a) {
        var i = r0(e, t);
        if (i !== null) {
          var u = j1(i.memoizedState, a);
          i.memoizedState = u, i.baseState = u, e.memoizedProps = et({}, e.memoizedProps);
          var s = $a(e, ze);
          s !== null && pr(s, e, ze, Xt);
        }
      }, O1 = function(e, t, a, i) {
        var u = r0(e, t);
        if (u !== null) {
          var s = V1(u.memoizedState, a, i);
          u.memoizedState = s, u.baseState = s, e.memoizedProps = et({}, e.memoizedProps);
          var f = $a(e, ze);
          f !== null && pr(f, e, ze, Xt);
        }
      }, L1 = function(e, t, a) {
        e.pendingProps = B1(e.memoizedProps, t, a), e.alternate && (e.alternate.pendingProps = e.pendingProps);
        var i = $a(e, ze);
        i !== null && pr(i, e, ze, Xt);
      }, M1 = function(e, t) {
        e.pendingProps = j1(e.memoizedProps, t), e.alternate && (e.alternate.pendingProps = e.pendingProps);
        var a = $a(e, ze);
        a !== null && pr(a, e, ze, Xt);
      }, N1 = function(e, t, a) {
        e.pendingProps = V1(e.memoizedProps, t, a), e.alternate && (e.alternate.pendingProps = e.pendingProps);
        var i = $a(e, ze);
        i !== null && pr(i, e, ze, Xt);
      }, z1 = function(e) {
        var t = $a(e, ze);
        t !== null && pr(t, e, ze, Xt);
      }, U1 = function(e) {
        x1 = e;
      }, A1 = function(e) {
        b1 = e;
      };
    }
    function _b(e) {
      var t = fd(e);
      return t === null ? null : t.stateNode;
    }
    function xb(e) {
      return null;
    }
    function bb() {
      return cn;
    }
    function Db(e) {
      var t = e.findFiberByHostInstance, a = Tt.ReactCurrentDispatcher;
      return Tv({
        bundleType: e.bundleType,
        version: e.version,
        rendererPackageName: e.rendererPackageName,
        rendererConfig: e.rendererConfig,
        overrideHookState: D1,
        overrideHookStateDeletePath: k1,
        overrideHookStateRenamePath: O1,
        overrideProps: L1,
        overridePropsDeletePath: M1,
        overridePropsRenamePath: N1,
        setErrorHandler: U1,
        setSuspenseHandler: A1,
        scheduleUpdate: z1,
        currentDispatcherRef: a,
        findHostInstanceByFiber: _b,
        findFiberByHostInstance: t || xb,
        // React Refresh
        findHostInstancesForRefresh: ab,
        scheduleRefresh: nb,
        scheduleRoot: rb,
        setRefreshHandler: tb,
        // Enables DevTools to append owner stacks to error messages in DEV mode.
        getCurrentFiber: bb,
        // Enables DevTools to detect reconciler version rather than renderer version
        // which may not match for third party renderers.
        reconcilerVersion: JS
      });
    }
    var $1 = typeof reportError == "function" ? (
      // In modern browsers, reportError will dispatch an error event,
      // emulating an uncaught JavaScript error.
      reportError
    ) : function(e) {
      console.error(e);
    };
    function a0(e) {
      this._internalRoot = e;
    }
    Lm.prototype.render = a0.prototype.render = function(e) {
      var t = this._internalRoot;
      if (t === null)
        throw new Error("Cannot update an unmounted root.");
      {
        typeof arguments[1] == "function" ? S("render(...): does not support the second callback argument. To execute a side effect after rendering, declare it in a component body with useEffect().") : Mm(arguments[1]) ? S("You passed a container to the second argument of root.render(...). You don't need to pass it again since you already passed it to create the root.") : typeof arguments[1] < "u" && S("You passed a second argument to root.render(...) but it only accepts one argument.");
        var a = t.containerInfo;
        if (a.nodeType !== yn) {
          var i = _1(t.current);
          i && i.parentNode !== a && S("render(...): It looks like the React-rendered content of the root container was removed without using React. This is not supported and will cause errors. Instead, call root.unmount() to empty a root's container.");
        }
      }
      jp(e, t, null, null);
    }, Lm.prototype.unmount = a0.prototype.unmount = function() {
      typeof arguments[0] == "function" && S("unmount(...): does not support a callback argument. To execute a side effect after rendering, declare it in a component body with useEffect().");
      var e = this._internalRoot;
      if (e !== null) {
        this._internalRoot = null;
        var t = e.containerInfo;
        t1() && S("Attempted to synchronously unmount a root while React was already rendering. React cannot finish unmounting the root until the current render has completed, which may lead to a race condition."), Uu(function() {
          jp(null, e, null, null);
        }), B0(t);
      }
    };
    function kb(e, t) {
      if (!Mm(e))
        throw new Error("createRoot(...): Target container is not a DOM element.");
      Y1(e);
      var a = !1, i = !1, u = "", s = $1;
      t != null && (t.hydrate ? nt("hydrate through createRoot is deprecated. Use ReactDOMClient.hydrateRoot(container, <App />) instead.") : typeof t == "object" && t !== null && t.$$typeof === jr && S(`You passed a JSX element to createRoot. You probably meant to call root.render instead. Example usage:

  let root = createRoot(domContainer);
  root.render(<App />);`), t.unstable_strictMode === !0 && (a = !0), t.identifierPrefix !== void 0 && (u = t.identifierPrefix), t.onRecoverableError !== void 0 && (s = t.onRecoverableError), t.transitionCallbacks !== void 0 && t.transitionCallbacks);
      var f = R1(e, xh, null, a, i, u, s);
      Sh(f.current, e);
      var p = e.nodeType === yn ? e.parentNode : e;
      return Qd(p), new a0(f);
    }
    function Lm(e) {
      this._internalRoot = e;
    }
    function Ob(e) {
      e && ly(e);
    }
    Lm.prototype.unstable_scheduleHydration = Ob;
    function Lb(e, t, a) {
      if (!Mm(e))
        throw new Error("hydrateRoot(...): Target container is not a DOM element.");
      Y1(e), t === void 0 && S("Must provide initial children as second argument to hydrateRoot. Example usage: hydrateRoot(domContainer, <App />)");
      var i = a ?? null, u = a != null && a.hydratedSources || null, s = !1, f = !1, p = "", v = $1;
      a != null && (a.unstable_strictMode === !0 && (s = !0), a.identifierPrefix !== void 0 && (p = a.identifierPrefix), a.onRecoverableError !== void 0 && (v = a.onRecoverableError));
      var y = T1(t, null, e, xh, i, s, f, p, v);
      if (Sh(y.current, e), Qd(e), u)
        for (var g = 0; g < u.length; g++) {
          var b = u[g];
          Hw(y, b);
        }
      return new Lm(y);
    }
    function Mm(e) {
      return !!(e && (e.nodeType === Yr || e.nodeType === pa || e.nodeType === Gf || !Ae));
    }
    function Hp(e) {
      return !!(e && (e.nodeType === Yr || e.nodeType === pa || e.nodeType === Gf || e.nodeType === yn && e.nodeValue === " react-mount-point-unstable "));
    }
    function Y1(e) {
      e.nodeType === Yr && e.tagName && e.tagName.toUpperCase() === "BODY" && S("createRoot(): Creating roots directly with document.body is discouraged, since its children are often manipulated by third-party scripts and browser extensions. This may lead to subtle reconciliation issues. Try using a container element created for your app."), rp(e) && (e._reactRootContainer ? S("You are calling ReactDOMClient.createRoot() on a container that was previously passed to ReactDOM.render(). This is not supported.") : S("You are calling ReactDOMClient.createRoot() on a container that has already been passed to createRoot() before. Instead, call root.render() on the existing root instead if you want to update it."));
    }
    var Mb = Tt.ReactCurrentOwner, I1;
    I1 = function(e) {
      if (e._reactRootContainer && e.nodeType !== yn) {
        var t = _1(e._reactRootContainer.current);
        t && t.parentNode !== e && S("render(...): It looks like the React-rendered content of this container was removed without using React. This is not supported and will cause errors. Instead, call ReactDOM.unmountComponentAtNode to empty a container.");
      }
      var a = !!e._reactRootContainer, i = i0(e), u = !!(i && Do(i));
      u && !a && S("render(...): Replacing React-rendered children with a new root component. If you intended to update the children of this node, you should instead have the existing children update their state and render the new components instead of calling ReactDOM.render."), e.nodeType === Yr && e.tagName && e.tagName.toUpperCase() === "BODY" && S("render(): Rendering components directly into document.body is discouraged, since its children are often manipulated by third-party scripts and browser extensions. This may lead to subtle reconciliation issues. Try rendering into a container element created for your app.");
    };
    function i0(e) {
      return e ? e.nodeType === pa ? e.documentElement : e.firstChild : null;
    }
    function Q1() {
    }
    function Nb(e, t, a, i, u) {
      if (u) {
        if (typeof i == "function") {
          var s = i;
          i = function() {
            var _ = Om(f);
            s.call(_);
          };
        }
        var f = T1(
          t,
          i,
          e,
          Oo,
          null,
          // hydrationCallbacks
          !1,
          // isStrictMode
          !1,
          // concurrentUpdatesByDefaultOverride,
          "",
          // identifierPrefix
          Q1
        );
        e._reactRootContainer = f, Sh(f.current, e);
        var p = e.nodeType === yn ? e.parentNode : e;
        return Qd(p), Uu(), f;
      } else {
        for (var v; v = e.lastChild; )
          e.removeChild(v);
        if (typeof i == "function") {
          var y = i;
          i = function() {
            var _ = Om(g);
            y.call(_);
          };
        }
        var g = R1(
          e,
          Oo,
          null,
          // hydrationCallbacks
          !1,
          // isStrictMode
          !1,
          // concurrentUpdatesByDefaultOverride,
          "",
          // identifierPrefix
          Q1
        );
        e._reactRootContainer = g, Sh(g.current, e);
        var b = e.nodeType === yn ? e.parentNode : e;
        return Qd(b), Uu(function() {
          jp(t, g, a, i);
        }), g;
      }
    }
    function zb(e, t) {
      e !== null && typeof e != "function" && S("%s(...): Expected the last optional `callback` argument to be a function. Instead received: %s.", t, e);
    }
    function Nm(e, t, a, i, u) {
      I1(a), zb(u === void 0 ? null : u, "render");
      var s = a._reactRootContainer, f;
      if (!s)
        f = Nb(a, t, e, u, i);
      else {
        if (f = s, typeof u == "function") {
          var p = u;
          u = function() {
            var v = Om(f);
            p.call(v);
          };
        }
        jp(t, f, e, u);
      }
      return Om(f);
    }
    function Ub(e) {
      {
        var t = Mb.current;
        if (t !== null && t.stateNode !== null) {
          var a = t.stateNode._warnedAboutRefsInRender;
          a || S("%s is accessing findDOMNode inside its render(). render() should be a pure function of props and state. It should never access something that requires stale data from the previous render, such as refs. Move this logic to componentDidMount and componentDidUpdate instead.", Ct(t.type) || "A component"), t.stateNode._warnedAboutRefsInRender = !0;
        }
      }
      return e == null ? null : e.nodeType === Yr ? e : Sb(e, "findDOMNode");
    }
    function Ab(e, t, a) {
      if (S("ReactDOM.hydrate is no longer supported in React 18. Use hydrateRoot instead. Until you switch to the new API, your app will behave as if it's running React 17. Learn more: https://reactjs.org/link/switch-to-createroot"), !Hp(t))
        throw new Error("Target container is not a DOM element.");
      {
        var i = rp(t) && t._reactRootContainer === void 0;
        i && S("You are calling ReactDOM.hydrate() on a container that was previously passed to ReactDOMClient.createRoot(). This is not supported. Did you mean to call hydrateRoot(container, element)?");
      }
      return Nm(null, e, t, !0, a);
    }
    function Fb(e, t, a) {
      if (S("ReactDOM.render is no longer supported in React 18. Use createRoot instead. Until you switch to the new API, your app will behave as if it's running React 17. Learn more: https://reactjs.org/link/switch-to-createroot"), !Hp(t))
        throw new Error("Target container is not a DOM element.");
      {
        var i = rp(t) && t._reactRootContainer === void 0;
        i && S("You are calling ReactDOM.render() on a container that was previously passed to ReactDOMClient.createRoot(). This is not supported. Did you mean to call root.render(element)?");
      }
      return Nm(null, e, t, !1, a);
    }
    function jb(e, t, a, i) {
      if (S("ReactDOM.unstable_renderSubtreeIntoContainer() is no longer supported in React 18. Consider using a portal instead. Until you switch to the createRoot API, your app will behave as if it's running React 17. Learn more: https://reactjs.org/link/switch-to-createroot"), !Hp(a))
        throw new Error("Target container is not a DOM element.");
      if (e == null || !Ku(e))
        throw new Error("parentComponent must be a valid React Component");
      return Nm(e, t, a, !1, i);
    }
    function Hb(e) {
      if (!Hp(e))
        throw new Error("unmountComponentAtNode(...): Target container is not a DOM element.");
      {
        var t = rp(e) && e._reactRootContainer === void 0;
        t && S("You are calling ReactDOM.unmountComponentAtNode() on a container that was previously passed to ReactDOMClient.createRoot(). This is not supported. Did you mean to call root.unmount()?");
      }
      if (e._reactRootContainer) {
        {
          var a = i0(e), i = a && !Do(a);
          i && S("unmountComponentAtNode(): The node you're attempting to unmount was rendered by another copy of React.");
        }
        return Uu(function() {
          Nm(null, null, e, !1, function() {
            e._reactRootContainer = null, B0(e);
          });
        }), !0;
      } else {
        {
          var u = i0(e), s = !!(u && Do(u)), f = e.nodeType === Yr && Hp(e.parentNode) && !!e.parentNode._reactRootContainer;
          s && S("unmountComponentAtNode(): The node you're attempting to unmount was rendered by React and is not a top-level container. %s", f ? "You may have accidentally passed in a React root node instead of its container." : "Instead, have the parent component update its state and rerender in order to remove this component.");
        }
        return !1;
      }
    }
    vo(Eb), ay(Cb), qc(Rb), Pv(Fa), Bv(Cr), (typeof Map != "function" || // $FlowIssue Flow incorrectly thinks Map has no prototype
    Map.prototype == null || typeof Map.prototype.forEach != "function" || typeof Set != "function" || // $FlowIssue Flow incorrectly thinks Set has no prototype
    Set.prototype == null || typeof Set.prototype.clear != "function" || typeof Set.prototype.forEach != "function") && S("React depends on Map and Set built-in types. Make sure that you load a polyfill in older browsers. https://reactjs.org/link/react-polyfills"), nd(BR), gc(AS, Lx, Uu);
    function Vb(e, t) {
      var a = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : null;
      if (!Mm(t))
        throw new Error("Target container is not a DOM element.");
      return gb(e, t, null, a);
    }
    function Pb(e, t, a, i) {
      return jb(e, t, a, i);
    }
    var l0 = {
      usingClientEntryPoint: !1,
      // Keep in sync with ReactTestUtils.js.
      // This is an array for better minification.
      Events: [Do, Sf, Eh, Xu, iu, AS]
    };
    function Bb(e, t) {
      return l0.usingClientEntryPoint || S('You are importing createRoot from "react-dom" which is not supported. You should instead import it from "react-dom/client".'), kb(e, t);
    }
    function $b(e, t, a) {
      return l0.usingClientEntryPoint || S('You are importing hydrateRoot from "react-dom" which is not supported. You should instead import it from "react-dom/client".'), Lb(e, t, a);
    }
    function Yb(e) {
      return t1() && S("flushSync was called from inside a lifecycle method. React cannot flush when React is already rendering. Consider moving this call to a scheduler task or micro task."), Uu(e);
    }
    var Ib = Db({
      findFiberByHostInstance: Ws,
      bundleType: 1,
      version: JS,
      rendererPackageName: "react-dom"
    });
    if (!Ib && mn && window.top === window.self && (navigator.userAgent.indexOf("Chrome") > -1 && navigator.userAgent.indexOf("Edge") === -1 || navigator.userAgent.indexOf("Firefox") > -1)) {
      var W1 = window.location.protocol;
      /^(https?|file):$/.test(W1) && console.info("%cDownload the React DevTools for a better development experience: https://reactjs.org/link/react-devtools" + (W1 === "file:" ? `
You might need to use a local HTTP server (instead of file://): https://reactjs.org/link/react-devtools-faq` : ""), "font-weight:bold");
    }
    Wa.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = l0, Wa.createPortal = Vb, Wa.createRoot = Bb, Wa.findDOMNode = Ub, Wa.flushSync = Yb, Wa.hydrate = Ab, Wa.hydrateRoot = $b, Wa.render = Fb, Wa.unmountComponentAtNode = Hb, Wa.unstable_batchedUpdates = AS, Wa.unstable_renderSubtreeIntoContainer = Pb, Wa.version = JS, typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u" && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop == "function" && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop(new Error());
  }(), Wa;
}
var Ga = {};
/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var nR;
function iD() {
  if (nR)
    return Ga;
  nR = 1;
  var Z = Yp, pe = aR();
  function F(n) {
    for (var r = "https://reactjs.org/docs/error-decoder.html?invariant=" + n, l = 1; l < arguments.length; l++)
      r += "&args[]=" + encodeURIComponent(arguments[l]);
    return "Minified React error #" + n + "; visit " + r + " for the full message or use the non-minified dev environment for full errors and additional helpful warnings.";
  }
  var Tt = /* @__PURE__ */ new Set(), Ut = {};
  function on(n, r) {
    nt(n, r), nt(n + "Capture", r);
  }
  function nt(n, r) {
    for (Ut[n] = r, n = 0; n < r.length; n++)
      Tt.add(r[n]);
  }
  var S = !(typeof window > "u" || typeof window.document > "u" || typeof window.document.createElement > "u"), st = Object.prototype.hasOwnProperty, Me = /^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/, fe = {}, Ie = {};
  function te(n) {
    return st.call(Ie, n) ? !0 : st.call(fe, n) ? !1 : Me.test(n) ? Ie[n] = !0 : (fe[n] = !0, !1);
  }
  function Ne(n, r, l, o) {
    if (l !== null && l.type === 0)
      return !1;
    switch (typeof r) {
      case "function":
      case "symbol":
        return !0;
      case "boolean":
        return o ? !1 : l !== null ? !l.acceptsBooleans : (n = n.toLowerCase().slice(0, 5), n !== "data-" && n !== "aria-");
      default:
        return !1;
    }
  }
  function ae(n, r, l, o) {
    if (r === null || typeof r > "u" || Ne(n, r, l, o))
      return !0;
    if (o)
      return !1;
    if (l !== null)
      switch (l.type) {
        case 3:
          return !r;
        case 4:
          return r === !1;
        case 5:
          return isNaN(r);
        case 6:
          return isNaN(r) || 1 > r;
      }
    return !1;
  }
  function Ce(n, r, l, o, c, d, m) {
    this.acceptsBooleans = r === 2 || r === 3 || r === 4, this.attributeName = o, this.attributeNamespace = c, this.mustUseProperty = l, this.propertyName = n, this.type = r, this.sanitizeURL = d, this.removeEmptyString = m;
  }
  var ct = {};
  "children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(n) {
    ct[n] = new Ce(n, 0, !1, n, null, !1, !1);
  }), [["acceptCharset", "accept-charset"], ["className", "class"], ["htmlFor", "for"], ["httpEquiv", "http-equiv"]].forEach(function(n) {
    var r = n[0];
    ct[r] = new Ce(r, 1, !1, n[1], null, !1, !1);
  }), ["contentEditable", "draggable", "spellCheck", "value"].forEach(function(n) {
    ct[n] = new Ce(n, 2, !1, n.toLowerCase(), null, !1, !1);
  }), ["autoReverse", "externalResourcesRequired", "focusable", "preserveAlpha"].forEach(function(n) {
    ct[n] = new Ce(n, 2, !1, n, null, !1, !1);
  }), "allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(n) {
    ct[n] = new Ce(n, 3, !1, n.toLowerCase(), null, !1, !1);
  }), ["checked", "multiple", "muted", "selected"].forEach(function(n) {
    ct[n] = new Ce(n, 3, !0, n, null, !1, !1);
  }), ["capture", "download"].forEach(function(n) {
    ct[n] = new Ce(n, 4, !1, n, null, !1, !1);
  }), ["cols", "rows", "size", "span"].forEach(function(n) {
    ct[n] = new Ce(n, 6, !1, n, null, !1, !1);
  }), ["rowSpan", "start"].forEach(function(n) {
    ct[n] = new Ce(n, 5, !1, n.toLowerCase(), null, !1, !1);
  });
  var jn = /[\-:]([a-z])/g;
  function an(n) {
    return n[1].toUpperCase();
  }
  "accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(n) {
    var r = n.replace(
      jn,
      an
    );
    ct[r] = new Ce(r, 1, !1, n, null, !1, !1);
  }), "xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(n) {
    var r = n.replace(jn, an);
    ct[r] = new Ce(r, 1, !1, n, "http://www.w3.org/1999/xlink", !1, !1);
  }), ["xml:base", "xml:lang", "xml:space"].forEach(function(n) {
    var r = n.replace(jn, an);
    ct[r] = new Ce(r, 1, !1, n, "http://www.w3.org/XML/1998/namespace", !1, !1);
  }), ["tabIndex", "crossOrigin"].forEach(function(n) {
    ct[n] = new Ce(n, 1, !1, n.toLowerCase(), null, !1, !1);
  }), ct.xlinkHref = new Ce("xlinkHref", 1, !1, "xlink:href", "http://www.w3.org/1999/xlink", !0, !1), ["src", "href", "action", "formAction"].forEach(function(n) {
    ct[n] = new Ce(n, 1, !1, n.toLowerCase(), null, !0, !0);
  });
  function rt(n, r, l, o) {
    var c = ct.hasOwnProperty(r) ? ct[r] : null;
    (c !== null ? c.type !== 0 : o || !(2 < r.length) || r[0] !== "o" && r[0] !== "O" || r[1] !== "n" && r[1] !== "N") && (ae(r, l, c, o) && (l = null), o || c === null ? te(r) && (l === null ? n.removeAttribute(r) : n.setAttribute(r, "" + l)) : c.mustUseProperty ? n[c.propertyName] = l === null ? c.type === 3 ? !1 : "" : l : (r = c.attributeName, o = c.attributeNamespace, l === null ? n.removeAttribute(r) : (c = c.type, l = c === 3 || c === 4 && l === !0 ? "" : "" + l, o ? n.setAttributeNS(o, r, l) : n.setAttribute(r, l))));
  }
  var He = Z.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED, _t = Symbol.for("react.element"), Re = Symbol.for("react.portal"), ut = Symbol.for("react.fragment"), $e = Symbol.for("react.strict_mode"), Tn = Symbol.for("react.profiler"), hn = Symbol.for("react.provider"), Yt = Symbol.for("react.context"), ht = Symbol.for("react.forward_ref"), Kt = Symbol.for("react.suspense"), Pe = Symbol.for("react.suspense_list"), Xe = Symbol.for("react.memo"), Et = Symbol.for("react.lazy"), Ke = Symbol.for("react.offscreen"), B = Symbol.iterator;
  function ve(n) {
    return n === null || typeof n != "object" ? null : (n = B && n[B] || n["@@iterator"], typeof n == "function" ? n : null);
  }
  var T = Object.assign, $;
  function he(n) {
    if ($ === void 0)
      try {
        throw Error();
      } catch (l) {
        var r = l.stack.trim().match(/\n( *(at )?)/);
        $ = r && r[1] || "";
      }
    return `
` + $ + n;
  }
  var Ae = !1;
  function Fe(n, r) {
    if (!n || Ae)
      return "";
    Ae = !0;
    var l = Error.prepareStackTrace;
    Error.prepareStackTrace = void 0;
    try {
      if (r)
        if (r = function() {
          throw Error();
        }, Object.defineProperty(r.prototype, "props", { set: function() {
          throw Error();
        } }), typeof Reflect == "object" && Reflect.construct) {
          try {
            Reflect.construct(r, []);
          } catch (U) {
            var o = U;
          }
          Reflect.construct(n, [], r);
        } else {
          try {
            r.call();
          } catch (U) {
            o = U;
          }
          n.call(r.prototype);
        }
      else {
        try {
          throw Error();
        } catch (U) {
          o = U;
        }
        n();
      }
    } catch (U) {
      if (U && o && typeof U.stack == "string") {
        for (var c = U.stack.split(`
`), d = o.stack.split(`
`), m = c.length - 1, E = d.length - 1; 1 <= m && 0 <= E && c[m] !== d[E]; )
          E--;
        for (; 1 <= m && 0 <= E; m--, E--)
          if (c[m] !== d[E]) {
            if (m !== 1 || E !== 1)
              do
                if (m--, E--, 0 > E || c[m] !== d[E]) {
                  var w = `
` + c[m].replace(" at new ", " at ");
                  return n.displayName && w.includes("<anonymous>") && (w = w.replace("<anonymous>", n.displayName)), w;
                }
              while (1 <= m && 0 <= E);
            break;
          }
      }
    } finally {
      Ae = !1, Error.prepareStackTrace = l;
    }
    return (n = n ? n.displayName || n.name : "") ? he(n) : "";
  }
  function ot(n) {
    switch (n.tag) {
      case 5:
        return he(n.type);
      case 16:
        return he("Lazy");
      case 13:
        return he("Suspense");
      case 19:
        return he("SuspenseList");
      case 0:
      case 2:
      case 15:
        return n = Fe(n.type, !1), n;
      case 11:
        return n = Fe(n.type.render, !1), n;
      case 1:
        return n = Fe(n.type, !0), n;
      default:
        return "";
    }
  }
  function at(n) {
    if (n == null)
      return null;
    if (typeof n == "function")
      return n.displayName || n.name || null;
    if (typeof n == "string")
      return n;
    switch (n) {
      case ut:
        return "Fragment";
      case Re:
        return "Portal";
      case Tn:
        return "Profiler";
      case $e:
        return "StrictMode";
      case Kt:
        return "Suspense";
      case Pe:
        return "SuspenseList";
    }
    if (typeof n == "object")
      switch (n.$$typeof) {
        case Yt:
          return (n.displayName || "Context") + ".Consumer";
        case hn:
          return (n._context.displayName || "Context") + ".Provider";
        case ht:
          var r = n.render;
          return n = n.displayName, n || (n = r.displayName || r.name || "", n = n !== "" ? "ForwardRef(" + n + ")" : "ForwardRef"), n;
        case Xe:
          return r = n.displayName || null, r !== null ? r : at(n.type) || "Memo";
        case Et:
          r = n._payload, n = n._init;
          try {
            return at(n(r));
          } catch {
          }
      }
    return null;
  }
  function ft(n) {
    var r = n.type;
    switch (n.tag) {
      case 24:
        return "Cache";
      case 9:
        return (r.displayName || "Context") + ".Consumer";
      case 10:
        return (r._context.displayName || "Context") + ".Provider";
      case 18:
        return "DehydratedFragment";
      case 11:
        return n = r.render, n = n.displayName || n.name || "", r.displayName || (n !== "" ? "ForwardRef(" + n + ")" : "ForwardRef");
      case 7:
        return "Fragment";
      case 5:
        return r;
      case 4:
        return "Portal";
      case 3:
        return "Root";
      case 6:
        return "Text";
      case 16:
        return at(r);
      case 8:
        return r === $e ? "StrictMode" : "Mode";
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
        if (typeof r == "function")
          return r.displayName || r.name || null;
        if (typeof r == "string")
          return r;
    }
    return null;
  }
  function it(n) {
    switch (typeof n) {
      case "boolean":
      case "number":
      case "string":
      case "undefined":
        return n;
      case "object":
        return n;
      default:
        return "";
    }
  }
  function Zt(n) {
    var r = n.type;
    return (n = n.nodeName) && n.toLowerCase() === "input" && (r === "checkbox" || r === "radio");
  }
  function Zn(n) {
    var r = Zt(n) ? "checked" : "value", l = Object.getOwnPropertyDescriptor(n.constructor.prototype, r), o = "" + n[r];
    if (!n.hasOwnProperty(r) && typeof l < "u" && typeof l.get == "function" && typeof l.set == "function") {
      var c = l.get, d = l.set;
      return Object.defineProperty(n, r, { configurable: !0, get: function() {
        return c.call(this);
      }, set: function(m) {
        o = "" + m, d.call(this, m);
      } }), Object.defineProperty(n, r, { enumerable: l.enumerable }), { getValue: function() {
        return o;
      }, setValue: function(m) {
        o = "" + m;
      }, stopTracking: function() {
        n._valueTracker = null, delete n[r];
      } };
    }
  }
  function Jn(n) {
    n._valueTracker || (n._valueTracker = Zn(n));
  }
  function Fr(n) {
    if (!n)
      return !1;
    var r = n._valueTracker;
    if (!r)
      return !0;
    var l = r.getValue(), o = "";
    return n && (o = Zt(n) ? n.checked ? "true" : "false" : n.value), n = o, n !== l ? (r.setValue(n), !0) : !1;
  }
  function vr(n) {
    if (n = n || (typeof document < "u" ? document : void 0), typeof n > "u")
      return null;
    try {
      return n.activeElement || n.body;
    } catch {
      return n.body;
    }
  }
  function mn(n, r) {
    var l = r.checked;
    return T({}, r, { defaultChecked: void 0, defaultValue: void 0, value: void 0, checked: l ?? n._wrapperState.initialChecked });
  }
  function er(n, r) {
    var l = r.defaultValue == null ? "" : r.defaultValue, o = r.checked != null ? r.checked : r.defaultChecked;
    l = it(r.value != null ? r.value : l), n._wrapperState = { initialChecked: o, initialValue: l, controlled: r.type === "checkbox" || r.type === "radio" ? r.checked != null : r.value != null };
  }
  function Hn(n, r) {
    r = r.checked, r != null && rt(n, "checked", r, !1);
  }
  function Mn(n, r) {
    Hn(n, r);
    var l = it(r.value), o = r.type;
    if (l != null)
      o === "number" ? (l === 0 && n.value === "" || n.value != l) && (n.value = "" + l) : n.value !== "" + l && (n.value = "" + l);
    else if (o === "submit" || o === "reset") {
      n.removeAttribute("value");
      return;
    }
    r.hasOwnProperty("value") ? Tr(n, r.type, l) : r.hasOwnProperty("defaultValue") && Tr(n, r.type, it(r.defaultValue)), r.checked == null && r.defaultChecked != null && (n.defaultChecked = !!r.defaultChecked);
  }
  function Nn(n, r, l) {
    if (r.hasOwnProperty("value") || r.hasOwnProperty("defaultValue")) {
      var o = r.type;
      if (!(o !== "submit" && o !== "reset" || r.value !== void 0 && r.value !== null))
        return;
      r = "" + n._wrapperState.initialValue, l || r === n.value || (n.value = r), n.defaultValue = r;
    }
    l = n.name, l !== "" && (n.name = ""), n.defaultChecked = !!n._wrapperState.initialChecked, l !== "" && (n.name = l);
  }
  function Tr(n, r, l) {
    (r !== "number" || vr(n.ownerDocument) !== n) && (l == null ? n.defaultValue = "" + n._wrapperState.initialValue : n.defaultValue !== "" + l && (n.defaultValue = "" + l));
  }
  var hr = Array.isArray;
  function Vn(n, r, l, o) {
    if (n = n.options, r) {
      r = {};
      for (var c = 0; c < l.length; c++)
        r["$" + l[c]] = !0;
      for (l = 0; l < n.length; l++)
        c = r.hasOwnProperty("$" + n[l].value), n[l].selected !== c && (n[l].selected = c), c && o && (n[l].defaultSelected = !0);
    } else {
      for (l = "" + it(l), r = null, c = 0; c < n.length; c++) {
        if (n[c].value === l) {
          n[c].selected = !0, o && (n[c].defaultSelected = !0);
          return;
        }
        r !== null || n[c].disabled || (r = n[c]);
      }
      r !== null && (r.selected = !0);
    }
  }
  function la(n, r) {
    if (r.dangerouslySetInnerHTML != null)
      throw Error(F(91));
    return T({}, r, { value: void 0, defaultValue: void 0, children: "" + n._wrapperState.initialValue });
  }
  function ua(n, r) {
    var l = r.value;
    if (l == null) {
      if (l = r.children, r = r.defaultValue, l != null) {
        if (r != null)
          throw Error(F(92));
        if (hr(l)) {
          if (1 < l.length)
            throw Error(F(93));
          l = l[0];
        }
        r = l;
      }
      r == null && (r = ""), l = r;
    }
    n._wrapperState = { initialValue: it(l) };
  }
  function mr(n, r) {
    var l = it(r.value), o = it(r.defaultValue);
    l != null && (l = "" + l, l !== n.value && (n.value = l), r.defaultValue == null && n.defaultValue !== l && (n.defaultValue = l)), o != null && (n.defaultValue = "" + o);
  }
  function oa(n) {
    var r = n.textContent;
    r === n._wrapperState.initialValue && r !== "" && r !== null && (n.value = r);
  }
  function tr(n) {
    switch (n) {
      case "svg":
        return "http://www.w3.org/2000/svg";
      case "math":
        return "http://www.w3.org/1998/Math/MathML";
      default:
        return "http://www.w3.org/1999/xhtml";
    }
  }
  function wr(n, r) {
    return n == null || n === "http://www.w3.org/1999/xhtml" ? tr(r) : n === "http://www.w3.org/2000/svg" && r === "foreignObject" ? "http://www.w3.org/1999/xhtml" : n;
  }
  var ln, sa = function(n) {
    return typeof MSApp < "u" && MSApp.execUnsafeLocalFunction ? function(r, l, o, c) {
      MSApp.execUnsafeLocalFunction(function() {
        return n(r, l, o, c);
      });
    } : n;
  }(function(n, r) {
    if (n.namespaceURI !== "http://www.w3.org/2000/svg" || "innerHTML" in n)
      n.innerHTML = r;
    else {
      for (ln = ln || document.createElement("div"), ln.innerHTML = "<svg>" + r.valueOf().toString() + "</svg>", r = ln.firstChild; n.firstChild; )
        n.removeChild(n.firstChild);
      for (; r.firstChild; )
        n.appendChild(r.firstChild);
    }
  });
  function ca(n, r) {
    if (r) {
      var l = n.firstChild;
      if (l && l === n.lastChild && l.nodeType === 3) {
        l.nodeValue = r;
        return;
      }
    }
    n.textContent = r;
  }
  var fa = {
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
  }, ne = ["Webkit", "ms", "Moz", "O"];
  Object.keys(fa).forEach(function(n) {
    ne.forEach(function(r) {
      r = r + n.charAt(0).toUpperCase() + n.substring(1), fa[r] = fa[n];
    });
  });
  function be(n, r, l) {
    return r == null || typeof r == "boolean" || r === "" ? "" : l || typeof r != "number" || r === 0 || fa.hasOwnProperty(n) && fa[n] ? ("" + r).trim() : r + "px";
  }
  function Je(n, r) {
    n = n.style;
    for (var l in r)
      if (r.hasOwnProperty(l)) {
        var o = l.indexOf("--") === 0, c = be(l, r[l], o);
        l === "float" && (l = "cssFloat"), o ? n.setProperty(l, c) : n[l] = c;
      }
  }
  var Lt = T({ menuitem: !0 }, { area: !0, base: !0, br: !0, col: !0, embed: !0, hr: !0, img: !0, input: !0, keygen: !0, link: !0, meta: !0, param: !0, source: !0, track: !0, wbr: !0 });
  function xt(n, r) {
    if (r) {
      if (Lt[n] && (r.children != null || r.dangerouslySetInnerHTML != null))
        throw Error(F(137, n));
      if (r.dangerouslySetInnerHTML != null) {
        if (r.children != null)
          throw Error(F(60));
        if (typeof r.dangerouslySetInnerHTML != "object" || !("__html" in r.dangerouslySetInnerHTML))
          throw Error(F(61));
      }
      if (r.style != null && typeof r.style != "object")
        throw Error(F(62));
    }
  }
  function wn(n, r) {
    if (n.indexOf("-") === -1)
      return typeof r.is == "string";
    switch (n) {
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
  var sn = null;
  function yr(n) {
    return n = n.target || n.srcElement || window, n.correspondingUseElement && (n = n.correspondingUseElement), n.nodeType === 3 ? n.parentNode : n;
  }
  var At = null, Qn = null, Mt = null;
  function It(n) {
    if (n = vi(n)) {
      if (typeof At != "function")
        throw Error(F(280));
      var r = n.stateNode;
      r && (r = Sc(r), At(n.stateNode, n.type, r));
    }
  }
  function qa(n) {
    Qn ? Mt ? Mt.push(n) : Mt = [n] : Qn = n;
  }
  function _a() {
    if (Qn) {
      var n = Qn, r = Mt;
      if (Mt = Qn = null, It(n), r)
        for (n = 0; n < r.length; n++)
          It(r[n]);
    }
  }
  function cl(n, r) {
    return n(r);
  }
  function Gl() {
  }
  var ql = !1;
  function fl(n, r, l) {
    if (ql)
      return n(r, l);
    ql = !0;
    try {
      return cl(n, r, l);
    } finally {
      ql = !1, (Qn !== null || Mt !== null) && (Gl(), _a());
    }
  }
  function Xa(n, r) {
    var l = n.stateNode;
    if (l === null)
      return null;
    var o = Sc(l);
    if (o === null)
      return null;
    l = o[r];
    e:
      switch (r) {
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
          (o = !o.disabled) || (n = n.type, o = !(n === "button" || n === "input" || n === "select" || n === "textarea")), n = !o;
          break e;
        default:
          n = !1;
      }
    if (n)
      return null;
    if (l && typeof l != "function")
      throw Error(F(231, r, typeof l));
    return l;
  }
  var Ka = !1;
  if (S)
    try {
      var xa = {};
      Object.defineProperty(xa, "passive", { get: function() {
        Ka = !0;
      } }), window.addEventListener("test", xa, xa), window.removeEventListener("test", xa, xa);
    } catch {
      Ka = !1;
    }
  function Li(n, r, l, o, c, d, m, E, w) {
    var U = Array.prototype.slice.call(arguments, 3);
    try {
      r.apply(l, U);
    } catch (Q) {
      this.onError(Q);
    }
  }
  var jr = !1, Hr = null, da = !1, Mi = null, R = { onError: function(n) {
    jr = !0, Hr = n;
  } };
  function I(n, r, l, o, c, d, m, E, w) {
    jr = !1, Hr = null, Li.apply(R, arguments);
  }
  function J(n, r, l, o, c, d, m, E, w) {
    if (I.apply(this, arguments), jr) {
      if (jr) {
        var U = Hr;
        jr = !1, Hr = null;
      } else
        throw Error(F(198));
      da || (da = !0, Mi = U);
    }
  }
  function re(n) {
    var r = n, l = n;
    if (n.alternate)
      for (; r.return; )
        r = r.return;
    else {
      n = r;
      do
        r = n, r.flags & 4098 && (l = r.return), n = r.return;
      while (n);
    }
    return r.tag === 3 ? l : null;
  }
  function lt(n) {
    if (n.tag === 13) {
      var r = n.memoizedState;
      if (r === null && (n = n.alternate, n !== null && (r = n.memoizedState)), r !== null)
        return r.dehydrated;
    }
    return null;
  }
  function mt(n) {
    if (re(n) !== n)
      throw Error(F(188));
  }
  function Ze(n) {
    var r = n.alternate;
    if (!r) {
      if (r = re(n), r === null)
        throw Error(F(188));
      return r !== n ? null : n;
    }
    for (var l = n, o = r; ; ) {
      var c = l.return;
      if (c === null)
        break;
      var d = c.alternate;
      if (d === null) {
        if (o = c.return, o !== null) {
          l = o;
          continue;
        }
        break;
      }
      if (c.child === d.child) {
        for (d = c.child; d; ) {
          if (d === l)
            return mt(c), n;
          if (d === o)
            return mt(c), r;
          d = d.sibling;
        }
        throw Error(F(188));
      }
      if (l.return !== o.return)
        l = c, o = d;
      else {
        for (var m = !1, E = c.child; E; ) {
          if (E === l) {
            m = !0, l = c, o = d;
            break;
          }
          if (E === o) {
            m = !0, o = c, l = d;
            break;
          }
          E = E.sibling;
        }
        if (!m) {
          for (E = d.child; E; ) {
            if (E === l) {
              m = !0, l = d, o = c;
              break;
            }
            if (E === o) {
              m = !0, o = d, l = c;
              break;
            }
            E = E.sibling;
          }
          if (!m)
            throw Error(F(189));
        }
      }
      if (l.alternate !== o)
        throw Error(F(190));
    }
    if (l.tag !== 3)
      throw Error(F(188));
    return l.stateNode.current === l ? n : r;
  }
  function De(n) {
    return n = Ze(n), n !== null ? zn(n) : null;
  }
  function zn(n) {
    if (n.tag === 5 || n.tag === 6)
      return n;
    for (n = n.child; n !== null; ) {
      var r = zn(n);
      if (r !== null)
        return r;
      n = n.sibling;
    }
    return null;
  }
  var Qt = pe.unstable_scheduleCallback, Wt = pe.unstable_cancelCallback, gr = pe.unstable_shouldYield, oi = pe.unstable_requestPaint, Gt = pe.unstable_now, Vr = pe.unstable_getCurrentPriorityLevel, Yo = pe.unstable_ImmediatePriority, si = pe.unstable_UserBlockingPriority, et = pe.unstable_NormalPriority, Xl = pe.unstable_LowPriority, Ni = pe.unstable_IdlePriority, dl = null, Pr = null;
  function Io(n) {
    if (Pr && typeof Pr.onCommitFiberRoot == "function")
      try {
        Pr.onCommitFiberRoot(dl, n, void 0, (n.current.flags & 128) === 128);
      } catch {
      }
  }
  var _r = Math.clz32 ? Math.clz32 : Go, Qo = Math.log, Wo = Math.LN2;
  function Go(n) {
    return n >>>= 0, n === 0 ? 32 : 31 - (Qo(n) / Wo | 0) | 0;
  }
  var Kl = 64, ju = 4194304;
  function zi(n) {
    switch (n & -n) {
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
        return n & 4194240;
      case 4194304:
      case 8388608:
      case 16777216:
      case 33554432:
      case 67108864:
        return n & 130023424;
      case 134217728:
        return 134217728;
      case 268435456:
        return 268435456;
      case 536870912:
        return 536870912;
      case 1073741824:
        return 1073741824;
      default:
        return n;
    }
  }
  function ci(n, r) {
    var l = n.pendingLanes;
    if (l === 0)
      return 0;
    var o = 0, c = n.suspendedLanes, d = n.pingedLanes, m = l & 268435455;
    if (m !== 0) {
      var E = m & ~c;
      E !== 0 ? o = zi(E) : (d &= m, d !== 0 && (o = zi(d)));
    } else
      m = l & ~c, m !== 0 ? o = zi(m) : d !== 0 && (o = zi(d));
    if (o === 0)
      return 0;
    if (r !== 0 && r !== o && !(r & c) && (c = o & -o, d = r & -r, c >= d || c === 16 && (d & 4194240) !== 0))
      return r;
    if (o & 4 && (o |= l & 16), r = n.entangledLanes, r !== 0)
      for (n = n.entanglements, r &= o; 0 < r; )
        l = 31 - _r(r), c = 1 << l, o |= n[l], r &= ~c;
    return o;
  }
  function ba(n, r) {
    switch (n) {
      case 1:
      case 2:
      case 4:
        return r + 250;
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
        return r + 5e3;
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
  function pl(n, r) {
    for (var l = n.suspendedLanes, o = n.pingedLanes, c = n.expirationTimes, d = n.pendingLanes; 0 < d; ) {
      var m = 31 - _r(d), E = 1 << m, w = c[m];
      w === -1 ? (!(E & l) || E & o) && (c[m] = ba(E, r)) : w <= r && (n.expiredLanes |= E), d &= ~E;
    }
  }
  function fi(n) {
    return n = n.pendingLanes & -1073741825, n !== 0 ? n : n & 1073741824 ? 1073741824 : 0;
  }
  function Zl() {
    var n = Kl;
    return Kl <<= 1, !(Kl & 4194240) && (Kl = 64), n;
  }
  function Jl(n) {
    for (var r = [], l = 0; 31 > l; l++)
      r.push(n);
    return r;
  }
  function vl(n, r, l) {
    n.pendingLanes |= r, r !== 536870912 && (n.suspendedLanes = 0, n.pingedLanes = 0), n = n.eventTimes, r = 31 - _r(r), n[r] = l;
  }
  function qo(n, r) {
    var l = n.pendingLanes & ~r;
    n.pendingLanes = r, n.suspendedLanes = 0, n.pingedLanes = 0, n.expiredLanes &= r, n.mutableReadLanes &= r, n.entangledLanes &= r, r = n.entanglements;
    var o = n.eventTimes;
    for (n = n.expirationTimes; 0 < l; ) {
      var c = 31 - _r(l), d = 1 << c;
      r[c] = 0, o[c] = -1, n[c] = -1, l &= ~d;
    }
  }
  function Xo(n, r) {
    var l = n.entangledLanes |= r;
    for (n = n.entanglements; l; ) {
      var o = 31 - _r(l), c = 1 << o;
      c & r | n[o] & r && (n[o] |= r), l &= ~c;
    }
  }
  var vt = 0;
  function Ko(n) {
    return n &= -n, 1 < n ? 4 < n ? n & 268435455 ? 16 : 536870912 : 4 : 1;
  }
  var Hu, hl, Zo, Ct, Vu, eu = !1, Ye = [], Za = null, cn = null, Br = null, Da = /* @__PURE__ */ new Map(), ml = /* @__PURE__ */ new Map(), Jt = [], fn = "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");
  function Jo(n, r) {
    switch (n) {
      case "focusin":
      case "focusout":
        Za = null;
        break;
      case "dragenter":
      case "dragleave":
        cn = null;
        break;
      case "mouseover":
      case "mouseout":
        Br = null;
        break;
      case "pointerover":
      case "pointerout":
        Da.delete(r.pointerId);
        break;
      case "gotpointercapture":
      case "lostpointercapture":
        ml.delete(r.pointerId);
    }
  }
  function nr(n, r, l, o, c, d) {
    return n === null || n.nativeEvent !== d ? (n = { blockedOn: r, domEventName: l, eventSystemFlags: o, nativeEvent: d, targetContainers: [c] }, r !== null && (r = vi(r), r !== null && hl(r)), n) : (n.eventSystemFlags |= o, r = n.targetContainers, c !== null && r.indexOf(c) === -1 && r.push(c), n);
  }
  function $r(n, r, l, o, c) {
    switch (r) {
      case "focusin":
        return Za = nr(Za, n, r, l, o, c), !0;
      case "dragenter":
        return cn = nr(cn, n, r, l, o, c), !0;
      case "mouseover":
        return Br = nr(Br, n, r, l, o, c), !0;
      case "pointerover":
        var d = c.pointerId;
        return Da.set(d, nr(Da.get(d) || null, n, r, l, o, c)), !0;
      case "gotpointercapture":
        return d = c.pointerId, ml.set(d, nr(ml.get(d) || null, n, r, l, o, c)), !0;
    }
    return !1;
  }
  function Ja(n) {
    var r = Ii(n.target);
    if (r !== null) {
      var l = re(r);
      if (l !== null) {
        if (r = l.tag, r === 13) {
          if (r = lt(l), r !== null) {
            n.blockedOn = r, Vu(n.priority, function() {
              Zo(l);
            });
            return;
          }
        } else if (r === 3 && l.stateNode.current.memoizedState.isDehydrated) {
          n.blockedOn = l.tag === 3 ? l.stateNode.containerInfo : null;
          return;
        }
      }
    }
    n.blockedOn = null;
  }
  function Pu(n) {
    if (n.blockedOn !== null)
      return !1;
    for (var r = n.targetContainers; 0 < r.length; ) {
      var l = Yu(n.domEventName, n.eventSystemFlags, r[0], n.nativeEvent);
      if (l === null) {
        l = n.nativeEvent;
        var o = new l.constructor(l.type, l);
        sn = o, l.target.dispatchEvent(o), sn = null;
      } else
        return r = vi(l), r !== null && hl(r), n.blockedOn = l, !1;
      r.shift();
    }
    return !0;
  }
  function tu(n, r, l) {
    Pu(n) && l.delete(r);
  }
  function nu() {
    eu = !1, Za !== null && Pu(Za) && (Za = null), cn !== null && Pu(cn) && (cn = null), Br !== null && Pu(Br) && (Br = null), Da.forEach(tu), ml.forEach(tu);
  }
  function yl(n, r) {
    n.blockedOn === r && (n.blockedOn = null, eu || (eu = !0, pe.unstable_scheduleCallback(pe.unstable_NormalPriority, nu)));
  }
  function ka(n) {
    function r(c) {
      return yl(c, n);
    }
    if (0 < Ye.length) {
      yl(Ye[0], n);
      for (var l = 1; l < Ye.length; l++) {
        var o = Ye[l];
        o.blockedOn === n && (o.blockedOn = null);
      }
    }
    for (Za !== null && yl(Za, n), cn !== null && yl(cn, n), Br !== null && yl(Br, n), Da.forEach(r), ml.forEach(r), l = 0; l < Jt.length; l++)
      o = Jt[l], o.blockedOn === n && (o.blockedOn = null);
    for (; 0 < Jt.length && (l = Jt[0], l.blockedOn === null); )
      Ja(l), l.blockedOn === null && Jt.shift();
  }
  var Ui = He.ReactCurrentBatchConfig, Bu = !0;
  function Ai(n, r, l, o) {
    var c = vt, d = Ui.transition;
    Ui.transition = null;
    try {
      vt = 1, di(n, r, l, o);
    } finally {
      vt = c, Ui.transition = d;
    }
  }
  function $u(n, r, l, o) {
    var c = vt, d = Ui.transition;
    Ui.transition = null;
    try {
      vt = 4, di(n, r, l, o);
    } finally {
      vt = c, Ui.transition = d;
    }
  }
  function di(n, r, l, o) {
    if (Bu) {
      var c = Yu(n, r, l, o);
      if (c === null)
        nd(n, r, o, Fi, l), Jo(n, o);
      else if ($r(c, n, r, l, o))
        o.stopPropagation();
      else if (Jo(n, o), r & 4 && -1 < fn.indexOf(n)) {
        for (; c !== null; ) {
          var d = vi(c);
          if (d !== null && Hu(d), d = Yu(n, r, l, o), d === null && nd(n, r, o, Fi, l), d === c)
            break;
          c = d;
        }
        c !== null && o.stopPropagation();
      } else
        nd(n, r, o, null, l);
    }
  }
  var Fi = null;
  function Yu(n, r, l, o) {
    if (Fi = null, n = yr(o), n = Ii(n), n !== null)
      if (r = re(n), r === null)
        n = null;
      else if (l = r.tag, l === 13) {
        if (n = lt(r), n !== null)
          return n;
        n = null;
      } else if (l === 3) {
        if (r.stateNode.current.memoizedState.isDehydrated)
          return r.tag === 3 ? r.stateNode.containerInfo : null;
        n = null;
      } else
        r !== n && (n = null);
    return Fi = n, null;
  }
  function es(n) {
    switch (n) {
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
        switch (Vr()) {
          case Yo:
            return 1;
          case si:
            return 4;
          case et:
          case Xl:
            return 16;
          case Ni:
            return 536870912;
          default:
            return 16;
        }
      default:
        return 16;
    }
  }
  var ei = null, Iu = null, h = null;
  function C() {
    if (h)
      return h;
    var n, r = Iu, l = r.length, o, c = "value" in ei ? ei.value : ei.textContent, d = c.length;
    for (n = 0; n < l && r[n] === c[n]; n++)
      ;
    var m = l - n;
    for (o = 1; o <= m && r[l - o] === c[d - o]; o++)
      ;
    return h = c.slice(n, 1 < o ? 1 - o : void 0);
  }
  function M(n) {
    var r = n.keyCode;
    return "charCode" in n ? (n = n.charCode, n === 0 && r === 13 && (n = 13)) : n = r, n === 10 && (n = 13), 32 <= n || n === 13 ? n : 0;
  }
  function A() {
    return !0;
  }
  function q() {
    return !1;
  }
  function Se(n) {
    function r(l, o, c, d, m) {
      this._reactName = l, this._targetInst = c, this.type = o, this.nativeEvent = d, this.target = m, this.currentTarget = null;
      for (var E in n)
        n.hasOwnProperty(E) && (l = n[E], this[E] = l ? l(d) : d[E]);
      return this.isDefaultPrevented = (d.defaultPrevented != null ? d.defaultPrevented : d.returnValue === !1) ? A : q, this.isPropagationStopped = q, this;
    }
    return T(r.prototype, { preventDefault: function() {
      this.defaultPrevented = !0;
      var l = this.nativeEvent;
      l && (l.preventDefault ? l.preventDefault() : typeof l.returnValue != "unknown" && (l.returnValue = !1), this.isDefaultPrevented = A);
    }, stopPropagation: function() {
      var l = this.nativeEvent;
      l && (l.stopPropagation ? l.stopPropagation() : typeof l.cancelBubble != "unknown" && (l.cancelBubble = !0), this.isPropagationStopped = A);
    }, persist: function() {
    }, isPersistent: A }), r;
  }
  var oe = { eventPhase: 0, bubbles: 0, cancelable: 0, timeStamp: function(n) {
    return n.timeStamp || Date.now();
  }, defaultPrevented: 0, isTrusted: 0 }, Ve = Se(oe), tt = T({}, oe, { view: 0, detail: 0 }), Nt = Se(tt), Ft, jt, Ht, en = T({}, tt, { screenX: 0, screenY: 0, clientX: 0, clientY: 0, pageX: 0, pageY: 0, ctrlKey: 0, shiftKey: 0, altKey: 0, metaKey: 0, getModifierState: sc, button: 0, buttons: 0, relatedTarget: function(n) {
    return n.relatedTarget === void 0 ? n.fromElement === n.srcElement ? n.toElement : n.fromElement : n.relatedTarget;
  }, movementX: function(n) {
    return "movementX" in n ? n.movementX : (n !== Ht && (Ht && n.type === "mousemove" ? (Ft = n.screenX - Ht.screenX, jt = n.screenY - Ht.screenY) : jt = Ft = 0, Ht = n), Ft);
  }, movementY: function(n) {
    return "movementY" in n ? n.movementY : jt;
  } }), Rt = Se(en), gl = T({}, en, { dataTransfer: 0 }), Qu = Se(gl), ts = T({}, tt, { relatedTarget: 0 }), ns = Se(ts), ji = T({}, oe, { animationName: 0, elapsedTime: 0, pseudoElement: 0 }), rs = Se(ji), as = T({}, oe, { clipboardData: function(n) {
    return "clipboardData" in n ? n.clipboardData : window.clipboardData;
  } }), Yf = Se(as), Am = T({}, oe, { data: 0 }), Ip = Se(Am), Qp = {
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
  }, If = {
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
  }, Wp = { Alt: "altKey", Control: "ctrlKey", Meta: "metaKey", Shift: "shiftKey" };
  function Gp(n) {
    var r = this.nativeEvent;
    return r.getModifierState ? r.getModifierState(n) : (n = Wp[n]) ? !!r[n] : !1;
  }
  function sc() {
    return Gp;
  }
  var Fm = T({}, tt, { key: function(n) {
    if (n.key) {
      var r = Qp[n.key] || n.key;
      if (r !== "Unidentified")
        return r;
    }
    return n.type === "keypress" ? (n = M(n), n === 13 ? "Enter" : String.fromCharCode(n)) : n.type === "keydown" || n.type === "keyup" ? If[n.keyCode] || "Unidentified" : "";
  }, code: 0, location: 0, ctrlKey: 0, shiftKey: 0, altKey: 0, metaKey: 0, repeat: 0, locale: 0, getModifierState: sc, charCode: function(n) {
    return n.type === "keypress" ? M(n) : 0;
  }, keyCode: function(n) {
    return n.type === "keydown" || n.type === "keyup" ? n.keyCode : 0;
  }, which: function(n) {
    return n.type === "keypress" ? M(n) : n.type === "keydown" || n.type === "keyup" ? n.keyCode : 0;
  } }), Hi = Se(Fm), jm = T({}, en, { pointerId: 0, width: 0, height: 0, pressure: 0, tangentialPressure: 0, tiltX: 0, tiltY: 0, twist: 0, pointerType: 0, isPrimary: 0 }), cc = Se(jm), Qf = T({}, tt, { touches: 0, targetTouches: 0, changedTouches: 0, altKey: 0, metaKey: 0, ctrlKey: 0, shiftKey: 0, getModifierState: sc }), Wf = Se(Qf), Hm = T({}, oe, { propertyName: 0, elapsedTime: 0, pseudoElement: 0 }), fc = Se(Hm), qp = T({}, en, {
    deltaX: function(n) {
      return "deltaX" in n ? n.deltaX : "wheelDeltaX" in n ? -n.wheelDeltaX : 0;
    },
    deltaY: function(n) {
      return "deltaY" in n ? n.deltaY : "wheelDeltaY" in n ? -n.wheelDeltaY : "wheelDelta" in n ? -n.wheelDelta : 0;
    },
    deltaZ: 0,
    deltaMode: 0
  }), Yr = Se(qp), Vi = [9, 13, 27, 32], yn = S && "CompositionEvent" in window, pa = null;
  S && "documentMode" in document && (pa = document.documentMode);
  var Gf = S && "TextEvent" in window && !pa, is = S && (!yn || pa && 8 < pa && 11 >= pa), Xp = " ", Wu = !1;
  function Kp(n, r) {
    switch (n) {
      case "keyup":
        return Vi.indexOf(r.keyCode) !== -1;
      case "keydown":
        return r.keyCode !== 229;
      case "keypress":
      case "mousedown":
      case "focusout":
        return !0;
      default:
        return !1;
    }
  }
  function Zp(n) {
    return n = n.detail, typeof n == "object" && "data" in n ? n.data : null;
  }
  var Sl = !1;
  function Vm(n, r) {
    switch (n) {
      case "compositionend":
        return Zp(r);
      case "keypress":
        return r.which !== 32 ? null : (Wu = !0, Xp);
      case "textInput":
        return n = r.data, n === Xp && Wu ? null : n;
      default:
        return null;
    }
  }
  function Pm(n, r) {
    if (Sl)
      return n === "compositionend" || !yn && Kp(n, r) ? (n = C(), h = Iu = ei = null, Sl = !1, n) : null;
    switch (n) {
      case "paste":
        return null;
      case "keypress":
        if (!(r.ctrlKey || r.altKey || r.metaKey) || r.ctrlKey && r.altKey) {
          if (r.char && 1 < r.char.length)
            return r.char;
          if (r.which)
            return String.fromCharCode(r.which);
        }
        return null;
      case "compositionend":
        return is && r.locale !== "ko" ? null : r.data;
      default:
        return null;
    }
  }
  var Bm = { color: !0, date: !0, datetime: !0, "datetime-local": !0, email: !0, month: !0, number: !0, password: !0, range: !0, search: !0, tel: !0, text: !0, time: !0, url: !0, week: !0 };
  function qf(n) {
    var r = n && n.nodeName && n.nodeName.toLowerCase();
    return r === "input" ? !!Bm[n.type] : r === "textarea";
  }
  function Jp(n, r, l, o) {
    qa(o), r = yc(r, "onChange"), 0 < r.length && (l = new Ve("onChange", "change", null, l, o), n.push({ event: l, listeners: r }));
  }
  var ls = null, us = null;
  function ev(n) {
    mv(n, 0);
  }
  function Pi(n) {
    var r = Ku(n);
    if (Fr(r))
      return n;
  }
  function Xf(n, r) {
    if (n === "change")
      return r;
  }
  var Kf = !1;
  if (S) {
    var dc;
    if (S) {
      var Zf = "oninput" in document;
      if (!Zf) {
        var tv = document.createElement("div");
        tv.setAttribute("oninput", "return;"), Zf = typeof tv.oninput == "function";
      }
      dc = Zf;
    } else
      dc = !1;
    Kf = dc && (!document.documentMode || 9 < document.documentMode);
  }
  function nv() {
    ls && (ls.detachEvent("onpropertychange", rv), us = ls = null);
  }
  function rv(n) {
    if (n.propertyName === "value" && Pi(us)) {
      var r = [];
      Jp(r, us, n, yr(n)), fl(ev, r);
    }
  }
  function $m(n, r, l) {
    n === "focusin" ? (nv(), ls = r, us = l, ls.attachEvent("onpropertychange", rv)) : n === "focusout" && nv();
  }
  function Ym(n) {
    if (n === "selectionchange" || n === "keyup" || n === "keydown")
      return Pi(us);
  }
  function Im(n, r) {
    if (n === "click")
      return Pi(r);
  }
  function Qm(n, r) {
    if (n === "input" || n === "change")
      return Pi(r);
  }
  function av(n, r) {
    return n === r && (n !== 0 || 1 / n === 1 / r) || n !== n && r !== r;
  }
  var ti = typeof Object.is == "function" ? Object.is : av;
  function Gu(n, r) {
    if (ti(n, r))
      return !0;
    if (typeof n != "object" || n === null || typeof r != "object" || r === null)
      return !1;
    var l = Object.keys(n), o = Object.keys(r);
    if (l.length !== o.length)
      return !1;
    for (o = 0; o < l.length; o++) {
      var c = l[o];
      if (!st.call(r, c) || !ti(n[c], r[c]))
        return !1;
    }
    return !0;
  }
  function iv(n) {
    for (; n && n.firstChild; )
      n = n.firstChild;
    return n;
  }
  function lv(n, r) {
    var l = iv(n);
    n = 0;
    for (var o; l; ) {
      if (l.nodeType === 3) {
        if (o = n + l.textContent.length, n <= r && o >= r)
          return { node: l, offset: r - n };
        n = o;
      }
      e: {
        for (; l; ) {
          if (l.nextSibling) {
            l = l.nextSibling;
            break e;
          }
          l = l.parentNode;
        }
        l = void 0;
      }
      l = iv(l);
    }
  }
  function uv(n, r) {
    return n && r ? n === r ? !0 : n && n.nodeType === 3 ? !1 : r && r.nodeType === 3 ? uv(n, r.parentNode) : "contains" in n ? n.contains(r) : n.compareDocumentPosition ? !!(n.compareDocumentPosition(r) & 16) : !1 : !1;
  }
  function ov() {
    for (var n = window, r = vr(); r instanceof n.HTMLIFrameElement; ) {
      try {
        var l = typeof r.contentWindow.location.href == "string";
      } catch {
        l = !1;
      }
      if (l)
        n = r.contentWindow;
      else
        break;
      r = vr(n.document);
    }
    return r;
  }
  function os(n) {
    var r = n && n.nodeName && n.nodeName.toLowerCase();
    return r && (r === "input" && (n.type === "text" || n.type === "search" || n.type === "tel" || n.type === "url" || n.type === "password") || r === "textarea" || n.contentEditable === "true");
  }
  function ru(n) {
    var r = ov(), l = n.focusedElem, o = n.selectionRange;
    if (r !== l && l && l.ownerDocument && uv(l.ownerDocument.documentElement, l)) {
      if (o !== null && os(l)) {
        if (r = o.start, n = o.end, n === void 0 && (n = r), "selectionStart" in l)
          l.selectionStart = r, l.selectionEnd = Math.min(n, l.value.length);
        else if (n = (r = l.ownerDocument || document) && r.defaultView || window, n.getSelection) {
          n = n.getSelection();
          var c = l.textContent.length, d = Math.min(o.start, c);
          o = o.end === void 0 ? d : Math.min(o.end, c), !n.extend && d > o && (c = o, o = d, d = c), c = lv(l, d);
          var m = lv(
            l,
            o
          );
          c && m && (n.rangeCount !== 1 || n.anchorNode !== c.node || n.anchorOffset !== c.offset || n.focusNode !== m.node || n.focusOffset !== m.offset) && (r = r.createRange(), r.setStart(c.node, c.offset), n.removeAllRanges(), d > o ? (n.addRange(r), n.extend(m.node, m.offset)) : (r.setEnd(m.node, m.offset), n.addRange(r)));
        }
      }
      for (r = [], n = l; n = n.parentNode; )
        n.nodeType === 1 && r.push({ element: n, left: n.scrollLeft, top: n.scrollTop });
      for (typeof l.focus == "function" && l.focus(), l = 0; l < r.length; l++)
        n = r[l], n.element.scrollLeft = n.left, n.element.scrollTop = n.top;
    }
  }
  var pc = S && "documentMode" in document && 11 >= document.documentMode, au = null, El = null, ss = null, Jf = !1;
  function sv(n, r, l) {
    var o = l.window === l ? l.document : l.nodeType === 9 ? l : l.ownerDocument;
    Jf || au == null || au !== vr(o) || (o = au, "selectionStart" in o && os(o) ? o = { start: o.selectionStart, end: o.selectionEnd } : (o = (o.ownerDocument && o.ownerDocument.defaultView || window).getSelection(), o = { anchorNode: o.anchorNode, anchorOffset: o.anchorOffset, focusNode: o.focusNode, focusOffset: o.focusOffset }), ss && Gu(ss, o) || (ss = o, o = yc(El, "onSelect"), 0 < o.length && (r = new Ve("onSelect", "select", null, r, l), n.push({ event: r, listeners: o }), r.target = au)));
  }
  function vc(n, r) {
    var l = {};
    return l[n.toLowerCase()] = r.toLowerCase(), l["Webkit" + n] = "webkit" + r, l["Moz" + n] = "moz" + r, l;
  }
  var qu = { animationend: vc("Animation", "AnimationEnd"), animationiteration: vc("Animation", "AnimationIteration"), animationstart: vc("Animation", "AnimationStart"), transitionend: vc("Transition", "TransitionEnd") }, hc = {}, cv = {};
  S && (cv = document.createElement("div").style, "AnimationEvent" in window || (delete qu.animationend.animation, delete qu.animationiteration.animation, delete qu.animationstart.animation), "TransitionEvent" in window || delete qu.transitionend.transition);
  function cs(n) {
    if (hc[n])
      return hc[n];
    if (!qu[n])
      return n;
    var r = qu[n], l;
    for (l in r)
      if (r.hasOwnProperty(l) && l in cv)
        return hc[n] = r[l];
    return n;
  }
  var Sr = cs("animationend"), ed = cs("animationiteration"), fv = cs("animationstart"), dv = cs("transitionend"), pv = /* @__PURE__ */ new Map(), vv = "abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");
  function Cl(n, r) {
    pv.set(n, r), on(r, [n]);
  }
  for (var mc = 0; mc < vv.length; mc++) {
    var fs = vv[mc], ds = fs.toLowerCase(), Wm = fs[0].toUpperCase() + fs.slice(1);
    Cl(ds, "on" + Wm);
  }
  Cl(Sr, "onAnimationEnd"), Cl(ed, "onAnimationIteration"), Cl(fv, "onAnimationStart"), Cl("dblclick", "onDoubleClick"), Cl("focusin", "onFocus"), Cl("focusout", "onBlur"), Cl(dv, "onTransitionEnd"), nt("onMouseEnter", ["mouseout", "mouseover"]), nt("onMouseLeave", ["mouseout", "mouseover"]), nt("onPointerEnter", ["pointerout", "pointerover"]), nt("onPointerLeave", ["pointerout", "pointerover"]), on("onChange", "change click focusin focusout input keydown keyup selectionchange".split(" ")), on("onSelect", "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")), on("onBeforeInput", ["compositionend", "keypress", "textInput", "paste"]), on("onCompositionEnd", "compositionend focusout keydown keypress keyup mousedown".split(" ")), on("onCompositionStart", "compositionstart focusout keydown keypress keyup mousedown".split(" ")), on("onCompositionUpdate", "compositionupdate focusout keydown keypress keyup mousedown".split(" "));
  var Bi = "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "), Gm = new Set("cancel close invalid load scroll toggle".split(" ").concat(Bi));
  function hv(n, r, l) {
    var o = n.type || "unknown-event";
    n.currentTarget = l, J(o, r, void 0, n), n.currentTarget = null;
  }
  function mv(n, r) {
    r = (r & 4) !== 0;
    for (var l = 0; l < n.length; l++) {
      var o = n[l], c = o.event;
      o = o.listeners;
      e: {
        var d = void 0;
        if (r)
          for (var m = o.length - 1; 0 <= m; m--) {
            var E = o[m], w = E.instance, U = E.currentTarget;
            if (E = E.listener, w !== d && c.isPropagationStopped())
              break e;
            hv(c, E, U), d = w;
          }
        else
          for (m = 0; m < o.length; m++) {
            if (E = o[m], w = E.instance, U = E.currentTarget, E = E.listener, w !== d && c.isPropagationStopped())
              break e;
            hv(c, E, U), d = w;
          }
      }
    }
    if (da)
      throw n = Mi, da = !1, Mi = null, n;
  }
  function Bt(n, r) {
    var l = r[cd];
    l === void 0 && (l = r[cd] = /* @__PURE__ */ new Set());
    var o = n + "__bubble";
    l.has(o) || (td(r, n, 2, !1), l.add(o));
  }
  function ps(n, r, l) {
    var o = 0;
    r && (o |= 4), td(l, n, o, r);
  }
  var $i = "_reactListening" + Math.random().toString(36).slice(2);
  function pi(n) {
    if (!n[$i]) {
      n[$i] = !0, Tt.forEach(function(l) {
        l !== "selectionchange" && (Gm.has(l) || ps(l, !1, n), ps(l, !0, n));
      });
      var r = n.nodeType === 9 ? n : n.ownerDocument;
      r === null || r[$i] || (r[$i] = !0, ps("selectionchange", !1, r));
    }
  }
  function td(n, r, l, o) {
    switch (es(r)) {
      case 1:
        var c = Ai;
        break;
      case 4:
        c = $u;
        break;
      default:
        c = di;
    }
    l = c.bind(null, r, l, n), c = void 0, !Ka || r !== "touchstart" && r !== "touchmove" && r !== "wheel" || (c = !0), o ? c !== void 0 ? n.addEventListener(r, l, { capture: !0, passive: c }) : n.addEventListener(r, l, !0) : c !== void 0 ? n.addEventListener(r, l, { passive: c }) : n.addEventListener(r, l, !1);
  }
  function nd(n, r, l, o, c) {
    var d = o;
    if (!(r & 1) && !(r & 2) && o !== null)
      e:
        for (; ; ) {
          if (o === null)
            return;
          var m = o.tag;
          if (m === 3 || m === 4) {
            var E = o.stateNode.containerInfo;
            if (E === c || E.nodeType === 8 && E.parentNode === c)
              break;
            if (m === 4)
              for (m = o.return; m !== null; ) {
                var w = m.tag;
                if ((w === 3 || w === 4) && (w = m.stateNode.containerInfo, w === c || w.nodeType === 8 && w.parentNode === c))
                  return;
                m = m.return;
              }
            for (; E !== null; ) {
              if (m = Ii(E), m === null)
                return;
              if (w = m.tag, w === 5 || w === 6) {
                o = d = m;
                continue e;
              }
              E = E.parentNode;
            }
          }
          o = o.return;
        }
    fl(function() {
      var U = d, Q = yr(l), W = [];
      e: {
        var Y = pv.get(n);
        if (Y !== void 0) {
          var le = Ve, me = n;
          switch (n) {
            case "keypress":
              if (M(l) === 0)
                break e;
            case "keydown":
            case "keyup":
              le = Hi;
              break;
            case "focusin":
              me = "focus", le = ns;
              break;
            case "focusout":
              me = "blur", le = ns;
              break;
            case "beforeblur":
            case "afterblur":
              le = ns;
              break;
            case "click":
              if (l.button === 2)
                break e;
            case "auxclick":
            case "dblclick":
            case "mousedown":
            case "mousemove":
            case "mouseup":
            case "mouseout":
            case "mouseover":
            case "contextmenu":
              le = Rt;
              break;
            case "drag":
            case "dragend":
            case "dragenter":
            case "dragexit":
            case "dragleave":
            case "dragover":
            case "dragstart":
            case "drop":
              le = Qu;
              break;
            case "touchcancel":
            case "touchend":
            case "touchmove":
            case "touchstart":
              le = Wf;
              break;
            case Sr:
            case ed:
            case fv:
              le = rs;
              break;
            case dv:
              le = fc;
              break;
            case "scroll":
              le = Nt;
              break;
            case "wheel":
              le = Yr;
              break;
            case "copy":
            case "cut":
            case "paste":
              le = Yf;
              break;
            case "gotpointercapture":
            case "lostpointercapture":
            case "pointercancel":
            case "pointerdown":
            case "pointermove":
            case "pointerout":
            case "pointerover":
            case "pointerup":
              le = cc;
          }
          var Ee = (r & 4) !== 0, On = !Ee && n === "scroll", D = Ee ? Y !== null ? Y + "Capture" : null : Y;
          Ee = [];
          for (var x = U, L; x !== null; ) {
            L = x;
            var X = L.stateNode;
            if (L.tag === 5 && X !== null && (L = X, D !== null && (X = Xa(x, D), X != null && Ee.push(Xu(x, X, L)))), On)
              break;
            x = x.return;
          }
          0 < Ee.length && (Y = new le(Y, me, null, l, Q), W.push({ event: Y, listeners: Ee }));
        }
      }
      if (!(r & 7)) {
        e: {
          if (Y = n === "mouseover" || n === "pointerover", le = n === "mouseout" || n === "pointerout", Y && l !== sn && (me = l.relatedTarget || l.fromElement) && (Ii(me) || me[ni]))
            break e;
          if ((le || Y) && (Y = Q.window === Q ? Q : (Y = Q.ownerDocument) ? Y.defaultView || Y.parentWindow : window, le ? (me = l.relatedTarget || l.toElement, le = U, me = me ? Ii(me) : null, me !== null && (On = re(me), me !== On || me.tag !== 5 && me.tag !== 6) && (me = null)) : (le = null, me = U), le !== me)) {
            if (Ee = Rt, X = "onMouseLeave", D = "onMouseEnter", x = "mouse", (n === "pointerout" || n === "pointerover") && (Ee = cc, X = "onPointerLeave", D = "onPointerEnter", x = "pointer"), On = le == null ? Y : Ku(le), L = me == null ? Y : Ku(me), Y = new Ee(X, x + "leave", le, l, Q), Y.target = On, Y.relatedTarget = L, X = null, Ii(Q) === U && (Ee = new Ee(D, x + "enter", me, l, Q), Ee.target = L, Ee.relatedTarget = On, X = Ee), On = X, le && me)
              t: {
                for (Ee = le, D = me, x = 0, L = Ee; L; L = iu(L))
                  x++;
                for (L = 0, X = D; X; X = iu(X))
                  L++;
                for (; 0 < x - L; )
                  Ee = iu(Ee), x--;
                for (; 0 < L - x; )
                  D = iu(D), L--;
                for (; x--; ) {
                  if (Ee === D || D !== null && Ee === D.alternate)
                    break t;
                  Ee = iu(Ee), D = iu(D);
                }
                Ee = null;
              }
            else
              Ee = null;
            le !== null && rd(W, Y, le, Ee, !1), me !== null && On !== null && rd(W, On, me, Ee, !0);
          }
        }
        e: {
          if (Y = U ? Ku(U) : window, le = Y.nodeName && Y.nodeName.toLowerCase(), le === "select" || le === "input" && Y.type === "file")
            var we = Xf;
          else if (qf(Y))
            if (Kf)
              we = Qm;
            else {
              we = Ym;
              var Ue = $m;
            }
          else
            (le = Y.nodeName) && le.toLowerCase() === "input" && (Y.type === "checkbox" || Y.type === "radio") && (we = Im);
          if (we && (we = we(n, U))) {
            Jp(W, we, l, Q);
            break e;
          }
          Ue && Ue(n, Y, U), n === "focusout" && (Ue = Y._wrapperState) && Ue.controlled && Y.type === "number" && Tr(Y, "number", Y.value);
        }
        switch (Ue = U ? Ku(U) : window, n) {
          case "focusin":
            (qf(Ue) || Ue.contentEditable === "true") && (au = Ue, El = U, ss = null);
            break;
          case "focusout":
            ss = El = au = null;
            break;
          case "mousedown":
            Jf = !0;
            break;
          case "contextmenu":
          case "mouseup":
          case "dragend":
            Jf = !1, sv(W, l, Q);
            break;
          case "selectionchange":
            if (pc)
              break;
          case "keydown":
          case "keyup":
            sv(W, l, Q);
        }
        var ye;
        if (yn)
          e: {
            switch (n) {
              case "compositionstart":
                var je = "onCompositionStart";
                break e;
              case "compositionend":
                je = "onCompositionEnd";
                break e;
              case "compositionupdate":
                je = "onCompositionUpdate";
                break e;
            }
            je = void 0;
          }
        else
          Sl ? Kp(n, l) && (je = "onCompositionEnd") : n === "keydown" && l.keyCode === 229 && (je = "onCompositionStart");
        je && (is && l.locale !== "ko" && (Sl || je !== "onCompositionStart" ? je === "onCompositionEnd" && Sl && (ye = C()) : (ei = Q, Iu = "value" in ei ? ei.value : ei.textContent, Sl = !0)), Ue = yc(U, je), 0 < Ue.length && (je = new Ip(je, n, null, l, Q), W.push({ event: je, listeners: Ue }), ye ? je.data = ye : (ye = Zp(l), ye !== null && (je.data = ye)))), (ye = Gf ? Vm(n, l) : Pm(n, l)) && (U = yc(U, "onBeforeInput"), 0 < U.length && (Q = new Ip("onBeforeInput", "beforeinput", null, l, Q), W.push({ event: Q, listeners: U }), Q.data = ye));
      }
      mv(W, r);
    });
  }
  function Xu(n, r, l) {
    return { instance: n, listener: r, currentTarget: l };
  }
  function yc(n, r) {
    for (var l = r + "Capture", o = []; n !== null; ) {
      var c = n, d = c.stateNode;
      c.tag === 5 && d !== null && (c = d, d = Xa(n, l), d != null && o.unshift(Xu(n, d, c)), d = Xa(n, r), d != null && o.push(Xu(n, d, c))), n = n.return;
    }
    return o;
  }
  function iu(n) {
    if (n === null)
      return null;
    do
      n = n.return;
    while (n && n.tag !== 5);
    return n || null;
  }
  function rd(n, r, l, o, c) {
    for (var d = r._reactName, m = []; l !== null && l !== o; ) {
      var E = l, w = E.alternate, U = E.stateNode;
      if (w !== null && w === o)
        break;
      E.tag === 5 && U !== null && (E = U, c ? (w = Xa(l, d), w != null && m.unshift(Xu(l, w, E))) : c || (w = Xa(l, d), w != null && m.push(Xu(l, w, E)))), l = l.return;
    }
    m.length !== 0 && n.push({ event: r, listeners: m });
  }
  var yv = /\r\n?/g, ad = /\u0000|\uFFFD/g;
  function gv(n) {
    return (typeof n == "string" ? n : "" + n).replace(yv, `
`).replace(ad, "");
  }
  function vs(n, r, l) {
    if (r = gv(r), gv(n) !== r && l)
      throw Error(F(425));
  }
  function gc() {
  }
  var id = null, ld = null;
  function lu(n, r) {
    return n === "textarea" || n === "noscript" || typeof r.children == "string" || typeof r.children == "number" || typeof r.dangerouslySetInnerHTML == "object" && r.dangerouslySetInnerHTML !== null && r.dangerouslySetInnerHTML.__html != null;
  }
  var hs = typeof setTimeout == "function" ? setTimeout : void 0, ms = typeof clearTimeout == "function" ? clearTimeout : void 0, ud = typeof Promise == "function" ? Promise : void 0, Sv = typeof queueMicrotask == "function" ? queueMicrotask : typeof ud < "u" ? function(n) {
    return ud.resolve(null).then(n).catch(od);
  } : hs;
  function od(n) {
    setTimeout(function() {
      throw n;
    });
  }
  function sd(n, r) {
    var l = r, o = 0;
    do {
      var c = l.nextSibling;
      if (n.removeChild(l), c && c.nodeType === 8)
        if (l = c.data, l === "/$") {
          if (o === 0) {
            n.removeChild(c), ka(r);
            return;
          }
          o--;
        } else
          l !== "$" && l !== "$?" && l !== "$!" || o++;
      l = c;
    } while (l);
    ka(r);
  }
  function va(n) {
    for (; n != null; n = n.nextSibling) {
      var r = n.nodeType;
      if (r === 1 || r === 3)
        break;
      if (r === 8) {
        if (r = n.data, r === "$" || r === "$!" || r === "$?")
          break;
        if (r === "/$")
          return null;
      }
    }
    return n;
  }
  function ys(n) {
    n = n.previousSibling;
    for (var r = 0; n; ) {
      if (n.nodeType === 8) {
        var l = n.data;
        if (l === "$" || l === "$!" || l === "$?") {
          if (r === 0)
            return n;
          r--;
        } else
          l === "/$" && r++;
      }
      n = n.previousSibling;
    }
    return null;
  }
  var Yi = Math.random().toString(36).slice(2), Oa = "__reactFiber$" + Yi, gs = "__reactProps$" + Yi, ni = "__reactContainer$" + Yi, cd = "__reactEvents$" + Yi, qm = "__reactListeners$" + Yi, Xm = "__reactHandles$" + Yi;
  function Ii(n) {
    var r = n[Oa];
    if (r)
      return r;
    for (var l = n.parentNode; l; ) {
      if (r = l[ni] || l[Oa]) {
        if (l = r.alternate, r.child !== null || l !== null && l.child !== null)
          for (n = ys(n); n !== null; ) {
            if (l = n[Oa])
              return l;
            n = ys(n);
          }
        return r;
      }
      n = l, l = n.parentNode;
    }
    return null;
  }
  function vi(n) {
    return n = n[Oa] || n[ni], !n || n.tag !== 5 && n.tag !== 6 && n.tag !== 13 && n.tag !== 3 ? null : n;
  }
  function Ku(n) {
    if (n.tag === 5 || n.tag === 6)
      return n.stateNode;
    throw Error(F(33));
  }
  function Sc(n) {
    return n[gs] || null;
  }
  var ke = [], ri = -1;
  function $t(n) {
    return { current: n };
  }
  function Te(n) {
    0 > ri || (n.current = ke[ri], ke[ri] = null, ri--);
  }
  function bt(n, r) {
    ri++, ke[ri] = n.current, n.current = r;
  }
  var La = {}, Wn = $t(La), Qe = $t(!1), xr = La;
  function ha(n, r) {
    var l = n.type.contextTypes;
    if (!l)
      return La;
    var o = n.stateNode;
    if (o && o.__reactInternalMemoizedUnmaskedChildContext === r)
      return o.__reactInternalMemoizedMaskedChildContext;
    var c = {}, d;
    for (d in l)
      c[d] = r[d];
    return o && (n = n.stateNode, n.__reactInternalMemoizedUnmaskedChildContext = r, n.__reactInternalMemoizedMaskedChildContext = c), c;
  }
  function Un(n) {
    return n = n.childContextTypes, n != null;
  }
  function Ir() {
    Te(Qe), Te(Wn);
  }
  function hi(n, r, l) {
    if (Wn.current !== La)
      throw Error(F(168));
    bt(Wn, r), bt(Qe, l);
  }
  function Rl(n, r, l) {
    var o = n.stateNode;
    if (r = r.childContextTypes, typeof o.getChildContext != "function")
      return l;
    o = o.getChildContext();
    for (var c in o)
      if (!(c in r))
        throw Error(F(108, ft(n) || "Unknown", c));
    return T({}, l, o);
  }
  function uu(n) {
    return n = (n = n.stateNode) && n.__reactInternalMemoizedMergedChildContext || La, xr = Wn.current, bt(Wn, n), bt(Qe, Qe.current), !0;
  }
  function Ev(n, r, l) {
    var o = n.stateNode;
    if (!o)
      throw Error(F(169));
    l ? (n = Rl(n, r, xr), o.__reactInternalMemoizedMergedChildContext = n, Te(Qe), Te(Wn), bt(Wn, n)) : Te(Qe), bt(Qe, l);
  }
  var Qi = null, Tl = !1, rr = !1;
  function Ec(n) {
    Qi === null ? Qi = [n] : Qi.push(n);
  }
  function Cv(n) {
    Tl = !0, Ec(n);
  }
  function mi() {
    if (!rr && Qi !== null) {
      rr = !0;
      var n = 0, r = vt;
      try {
        var l = Qi;
        for (vt = 1; n < l.length; n++) {
          var o = l[n];
          do
            o = o(!0);
          while (o !== null);
        }
        Qi = null, Tl = !1;
      } catch (c) {
        throw Qi !== null && (Qi = Qi.slice(n + 1)), Qt(Yo, mi), c;
      } finally {
        vt = r, rr = !1;
      }
    }
    return null;
  }
  var Ma = [], wl = 0, Na = null, ou = 0, Qr = [], Wr = 0, ai = null, Gr = 1, ar = "";
  function su(n, r) {
    Ma[wl++] = ou, Ma[wl++] = Na, Na = n, ou = r;
  }
  function _l(n, r, l) {
    Qr[Wr++] = Gr, Qr[Wr++] = ar, Qr[Wr++] = ai, ai = n;
    var o = Gr;
    n = ar;
    var c = 32 - _r(o) - 1;
    o &= ~(1 << c), l += 1;
    var d = 32 - _r(r) + c;
    if (30 < d) {
      var m = c - c % 5;
      d = (o & (1 << m) - 1).toString(32), o >>= m, c -= m, Gr = 1 << 32 - _r(r) + c | l << c | o, ar = d + n;
    } else
      Gr = 1 << d | l << c | o, ar = n;
  }
  function Cc(n) {
    n.return !== null && (su(n, 1), _l(n, 1, 0));
  }
  function Rc(n) {
    for (; n === Na; )
      Na = Ma[--wl], Ma[wl] = null, ou = Ma[--wl], Ma[wl] = null;
    for (; n === ai; )
      ai = Qr[--Wr], Qr[Wr] = null, ar = Qr[--Wr], Qr[Wr] = null, Gr = Qr[--Wr], Qr[Wr] = null;
  }
  var ma = null, ya = null, tn = !1, za = null;
  function fd(n, r) {
    var l = Pa(5, null, null, 0);
    l.elementType = "DELETED", l.stateNode = r, l.return = n, r = n.deletions, r === null ? (n.deletions = [l], n.flags |= 16) : r.push(l);
  }
  function dd(n, r) {
    switch (n.tag) {
      case 5:
        var l = n.type;
        return r = r.nodeType !== 1 || l.toLowerCase() !== r.nodeName.toLowerCase() ? null : r, r !== null ? (n.stateNode = r, ma = n, ya = va(r.firstChild), !0) : !1;
      case 6:
        return r = n.pendingProps === "" || r.nodeType !== 3 ? null : r, r !== null ? (n.stateNode = r, ma = n, ya = null, !0) : !1;
      case 13:
        return r = r.nodeType !== 8 ? null : r, r !== null ? (l = ai !== null ? { id: Gr, overflow: ar } : null, n.memoizedState = { dehydrated: r, treeContext: l, retryLane: 1073741824 }, l = Pa(18, null, null, 0), l.stateNode = r, l.return = n, n.child = l, ma = n, ya = null, !0) : !1;
      default:
        return !1;
    }
  }
  function pd(n) {
    return (n.mode & 1) !== 0 && (n.flags & 128) === 0;
  }
  function Tc(n) {
    if (tn) {
      var r = ya;
      if (r) {
        var l = r;
        if (!dd(n, r)) {
          if (pd(n))
            throw Error(F(418));
          r = va(l.nextSibling);
          var o = ma;
          r && dd(n, r) ? fd(o, l) : (n.flags = n.flags & -4097 | 2, tn = !1, ma = n);
        }
      } else {
        if (pd(n))
          throw Error(F(418));
        n.flags = n.flags & -4097 | 2, tn = !1, ma = n;
      }
    }
  }
  function vd(n) {
    for (n = n.return; n !== null && n.tag !== 5 && n.tag !== 3 && n.tag !== 13; )
      n = n.return;
    ma = n;
  }
  function wc(n) {
    if (n !== ma)
      return !1;
    if (!tn)
      return vd(n), tn = !0, !1;
    var r;
    if ((r = n.tag !== 3) && !(r = n.tag !== 5) && (r = n.type, r = r !== "head" && r !== "body" && !lu(n.type, n.memoizedProps)), r && (r = ya)) {
      if (pd(n))
        throw Rv(), Error(F(418));
      for (; r; )
        fd(n, r), r = va(r.nextSibling);
    }
    if (vd(n), n.tag === 13) {
      if (n = n.memoizedState, n = n !== null ? n.dehydrated : null, !n)
        throw Error(F(317));
      e: {
        for (n = n.nextSibling, r = 0; n; ) {
          if (n.nodeType === 8) {
            var l = n.data;
            if (l === "/$") {
              if (r === 0) {
                ya = va(n.nextSibling);
                break e;
              }
              r--;
            } else
              l !== "$" && l !== "$!" && l !== "$?" || r++;
          }
          n = n.nextSibling;
        }
        ya = null;
      }
    } else
      ya = ma ? va(n.stateNode.nextSibling) : null;
    return !0;
  }
  function Rv() {
    for (var n = ya; n; )
      n = va(n.nextSibling);
  }
  function Zu() {
    ya = ma = null, tn = !1;
  }
  function An(n) {
    za === null ? za = [n] : za.push(n);
  }
  var Km = He.ReactCurrentBatchConfig;
  function qr(n, r) {
    if (n && n.defaultProps) {
      r = T({}, r), n = n.defaultProps;
      for (var l in n)
        r[l] === void 0 && (r[l] = n[l]);
      return r;
    }
    return r;
  }
  var Ju = $t(null), yi = null, eo = null, Ss = null;
  function hd() {
    Ss = eo = yi = null;
  }
  function md(n) {
    var r = Ju.current;
    Te(Ju), n._currentValue = r;
  }
  function xl(n, r, l) {
    for (; n !== null; ) {
      var o = n.alternate;
      if ((n.childLanes & r) !== r ? (n.childLanes |= r, o !== null && (o.childLanes |= r)) : o !== null && (o.childLanes & r) !== r && (o.childLanes |= r), n === l)
        break;
      n = n.return;
    }
  }
  function _n(n, r) {
    yi = n, Ss = eo = null, n = n.dependencies, n !== null && n.firstContext !== null && (n.lanes & r && (Zr = !0), n.firstContext = null);
  }
  function K(n) {
    var r = n._currentValue;
    if (Ss !== n)
      if (n = { context: n, memoizedValue: r, next: null }, eo === null) {
        if (yi === null)
          throw Error(F(308));
        eo = n, yi.dependencies = { lanes: 0, firstContext: n };
      } else
        eo = eo.next = n;
    return r;
  }
  var Er = null;
  function ga(n) {
    Er === null ? Er = [n] : Er.push(n);
  }
  function Tv(n, r, l, o) {
    var c = r.interleaved;
    return c === null ? (l.next = l, ga(r)) : (l.next = c.next, c.next = l), r.interleaved = l, Wi(n, o);
  }
  function Wi(n, r) {
    n.lanes |= r;
    var l = n.alternate;
    for (l !== null && (l.lanes |= r), l = n, n = n.return; n !== null; )
      n.childLanes |= r, l = n.alternate, l !== null && (l.childLanes |= r), l = n, n = n.return;
    return l.tag === 3 ? l.stateNode : null;
  }
  var bl = !1;
  function yd(n) {
    n.updateQueue = { baseState: n.memoizedState, firstBaseUpdate: null, lastBaseUpdate: null, shared: { pending: null, interleaved: null, lanes: 0 }, effects: null };
  }
  function wv(n, r) {
    n = n.updateQueue, r.updateQueue === n && (r.updateQueue = { baseState: n.baseState, firstBaseUpdate: n.firstBaseUpdate, lastBaseUpdate: n.lastBaseUpdate, shared: n.shared, effects: n.effects });
  }
  function qt(n, r) {
    return { eventTime: n, lane: r, tag: 0, payload: null, callback: null, next: null };
  }
  function Dl(n, r, l) {
    var o = n.updateQueue;
    if (o === null)
      return null;
    if (o = o.shared, dt & 2) {
      var c = o.pending;
      return c === null ? r.next = r : (r.next = c.next, c.next = r), o.pending = r, Wi(n, l);
    }
    return c = o.interleaved, c === null ? (r.next = r, ga(o)) : (r.next = c.next, c.next = r), o.interleaved = r, Wi(n, l);
  }
  function _c(n, r, l) {
    if (r = r.updateQueue, r !== null && (r = r.shared, (l & 4194240) !== 0)) {
      var o = r.lanes;
      o &= n.pendingLanes, l |= o, r.lanes = l, Xo(n, l);
    }
  }
  function _v(n, r) {
    var l = n.updateQueue, o = n.alternate;
    if (o !== null && (o = o.updateQueue, l === o)) {
      var c = null, d = null;
      if (l = l.firstBaseUpdate, l !== null) {
        do {
          var m = { eventTime: l.eventTime, lane: l.lane, tag: l.tag, payload: l.payload, callback: l.callback, next: null };
          d === null ? c = d = m : d = d.next = m, l = l.next;
        } while (l !== null);
        d === null ? c = d = r : d = d.next = r;
      } else
        c = d = r;
      l = { baseState: o.baseState, firstBaseUpdate: c, lastBaseUpdate: d, shared: o.shared, effects: o.effects }, n.updateQueue = l;
      return;
    }
    n = l.lastBaseUpdate, n === null ? l.firstBaseUpdate = r : n.next = r, l.lastBaseUpdate = r;
  }
  function Es(n, r, l, o) {
    var c = n.updateQueue;
    bl = !1;
    var d = c.firstBaseUpdate, m = c.lastBaseUpdate, E = c.shared.pending;
    if (E !== null) {
      c.shared.pending = null;
      var w = E, U = w.next;
      w.next = null, m === null ? d = U : m.next = U, m = w;
      var Q = n.alternate;
      Q !== null && (Q = Q.updateQueue, E = Q.lastBaseUpdate, E !== m && (E === null ? Q.firstBaseUpdate = U : E.next = U, Q.lastBaseUpdate = w));
    }
    if (d !== null) {
      var W = c.baseState;
      m = 0, Q = U = w = null, E = d;
      do {
        var Y = E.lane, le = E.eventTime;
        if ((o & Y) === Y) {
          Q !== null && (Q = Q.next = {
            eventTime: le,
            lane: 0,
            tag: E.tag,
            payload: E.payload,
            callback: E.callback,
            next: null
          });
          e: {
            var me = n, Ee = E;
            switch (Y = r, le = l, Ee.tag) {
              case 1:
                if (me = Ee.payload, typeof me == "function") {
                  W = me.call(le, W, Y);
                  break e;
                }
                W = me;
                break e;
              case 3:
                me.flags = me.flags & -65537 | 128;
              case 0:
                if (me = Ee.payload, Y = typeof me == "function" ? me.call(le, W, Y) : me, Y == null)
                  break e;
                W = T({}, W, Y);
                break e;
              case 2:
                bl = !0;
            }
          }
          E.callback !== null && E.lane !== 0 && (n.flags |= 64, Y = c.effects, Y === null ? c.effects = [E] : Y.push(E));
        } else
          le = { eventTime: le, lane: Y, tag: E.tag, payload: E.payload, callback: E.callback, next: null }, Q === null ? (U = Q = le, w = W) : Q = Q.next = le, m |= Y;
        if (E = E.next, E === null) {
          if (E = c.shared.pending, E === null)
            break;
          Y = E, E = Y.next, Y.next = null, c.lastBaseUpdate = Y, c.shared.pending = null;
        }
      } while (!0);
      if (Q === null && (w = W), c.baseState = w, c.firstBaseUpdate = U, c.lastBaseUpdate = Q, r = c.shared.interleaved, r !== null) {
        c = r;
        do
          m |= c.lane, c = c.next;
        while (c !== r);
      } else
        d === null && (c.shared.lanes = 0);
      Cu |= m, n.lanes = m, n.memoizedState = W;
    }
  }
  function to(n, r, l) {
    if (n = r.effects, r.effects = null, n !== null)
      for (r = 0; r < n.length; r++) {
        var o = n[r], c = o.callback;
        if (c !== null) {
          if (o.callback = null, o = l, typeof c != "function")
            throw Error(F(191, c));
          c.call(o);
        }
      }
  }
  var cu = new Z.Component().refs;
  function gd(n, r, l, o) {
    r = n.memoizedState, l = l(o, r), l = l == null ? r : T({}, r, l), n.memoizedState = l, n.lanes === 0 && (n.updateQueue.baseState = l);
  }
  var xc = { isMounted: function(n) {
    return (n = n._reactInternals) ? re(n) === n : !1;
  }, enqueueSetState: function(n, r, l) {
    n = n._reactInternals;
    var o = Xn(), c = Ki(n), d = qt(o, c);
    d.payload = r, l != null && (d.callback = l), r = Dl(n, d, c), r !== null && (pn(r, n, c, o), _c(r, n, c));
  }, enqueueReplaceState: function(n, r, l) {
    n = n._reactInternals;
    var o = Xn(), c = Ki(n), d = qt(o, c);
    d.tag = 1, d.payload = r, l != null && (d.callback = l), r = Dl(n, d, c), r !== null && (pn(r, n, c, o), _c(r, n, c));
  }, enqueueForceUpdate: function(n, r) {
    n = n._reactInternals;
    var l = Xn(), o = Ki(n), c = qt(l, o);
    c.tag = 2, r != null && (c.callback = r), r = Dl(n, c, o), r !== null && (pn(r, n, o, l), _c(r, n, o));
  } };
  function xv(n, r, l, o, c, d, m) {
    return n = n.stateNode, typeof n.shouldComponentUpdate == "function" ? n.shouldComponentUpdate(o, d, m) : r.prototype && r.prototype.isPureReactComponent ? !Gu(l, o) || !Gu(c, d) : !0;
  }
  function bv(n, r, l) {
    var o = !1, c = La, d = r.contextType;
    return typeof d == "object" && d !== null ? d = K(d) : (c = Un(r) ? xr : Wn.current, o = r.contextTypes, d = (o = o != null) ? ha(n, c) : La), r = new r(l, d), n.memoizedState = r.state !== null && r.state !== void 0 ? r.state : null, r.updater = xc, n.stateNode = r, r._reactInternals = n, o && (n = n.stateNode, n.__reactInternalMemoizedUnmaskedChildContext = c, n.__reactInternalMemoizedMaskedChildContext = d), r;
  }
  function Dv(n, r, l, o) {
    n = r.state, typeof r.componentWillReceiveProps == "function" && r.componentWillReceiveProps(l, o), typeof r.UNSAFE_componentWillReceiveProps == "function" && r.UNSAFE_componentWillReceiveProps(l, o), r.state !== n && xc.enqueueReplaceState(r, r.state, null);
  }
  function Sd(n, r, l, o) {
    var c = n.stateNode;
    c.props = l, c.state = n.memoizedState, c.refs = cu, yd(n);
    var d = r.contextType;
    typeof d == "object" && d !== null ? c.context = K(d) : (d = Un(r) ? xr : Wn.current, c.context = ha(n, d)), c.state = n.memoizedState, d = r.getDerivedStateFromProps, typeof d == "function" && (gd(n, r, d, l), c.state = n.memoizedState), typeof r.getDerivedStateFromProps == "function" || typeof c.getSnapshotBeforeUpdate == "function" || typeof c.UNSAFE_componentWillMount != "function" && typeof c.componentWillMount != "function" || (r = c.state, typeof c.componentWillMount == "function" && c.componentWillMount(), typeof c.UNSAFE_componentWillMount == "function" && c.UNSAFE_componentWillMount(), r !== c.state && xc.enqueueReplaceState(c, c.state, null), Es(n, l, c, o), c.state = n.memoizedState), typeof c.componentDidMount == "function" && (n.flags |= 4194308);
  }
  function no(n, r, l) {
    if (n = l.ref, n !== null && typeof n != "function" && typeof n != "object") {
      if (l._owner) {
        if (l = l._owner, l) {
          if (l.tag !== 1)
            throw Error(F(309));
          var o = l.stateNode;
        }
        if (!o)
          throw Error(F(147, n));
        var c = o, d = "" + n;
        return r !== null && r.ref !== null && typeof r.ref == "function" && r.ref._stringRef === d ? r.ref : (r = function(m) {
          var E = c.refs;
          E === cu && (E = c.refs = {}), m === null ? delete E[d] : E[d] = m;
        }, r._stringRef = d, r);
      }
      if (typeof n != "string")
        throw Error(F(284));
      if (!l._owner)
        throw Error(F(290, n));
    }
    return n;
  }
  function Cs(n, r) {
    throw n = Object.prototype.toString.call(r), Error(F(31, n === "[object Object]" ? "object with keys {" + Object.keys(r).join(", ") + "}" : n));
  }
  function kv(n) {
    var r = n._init;
    return r(n._payload);
  }
  function Ov(n) {
    function r(D, x) {
      if (n) {
        var L = D.deletions;
        L === null ? (D.deletions = [x], D.flags |= 16) : L.push(x);
      }
    }
    function l(D, x) {
      if (!n)
        return null;
      for (; x !== null; )
        r(D, x), x = x.sibling;
      return null;
    }
    function o(D, x) {
      for (D = /* @__PURE__ */ new Map(); x !== null; )
        x.key !== null ? D.set(x.key, x) : D.set(x.index, x), x = x.sibling;
      return D;
    }
    function c(D, x) {
      return D = Al(D, x), D.index = 0, D.sibling = null, D;
    }
    function d(D, x, L) {
      return D.index = L, n ? (L = D.alternate, L !== null ? (L = L.index, L < x ? (D.flags |= 2, x) : L) : (D.flags |= 2, x)) : (D.flags |= 1048576, x);
    }
    function m(D) {
      return n && D.alternate === null && (D.flags |= 2), D;
    }
    function E(D, x, L, X) {
      return x === null || x.tag !== 6 ? (x = of(L, D.mode, X), x.return = D, x) : (x = c(x, L), x.return = D, x);
    }
    function w(D, x, L, X) {
      var we = L.type;
      return we === ut ? Q(D, x, L.props.children, X, L.key) : x !== null && (x.elementType === we || typeof we == "object" && we !== null && we.$$typeof === Et && kv(we) === x.type) ? (X = c(x, L.props), X.ref = no(D, x, L), X.return = D, X) : (X = lf(L.type, L.key, L.props, null, D.mode, X), X.ref = no(D, x, L), X.return = D, X);
    }
    function U(D, x, L, X) {
      return x === null || x.tag !== 4 || x.stateNode.containerInfo !== L.containerInfo || x.stateNode.implementation !== L.implementation ? (x = Vs(L, D.mode, X), x.return = D, x) : (x = c(x, L.children || []), x.return = D, x);
    }
    function Q(D, x, L, X, we) {
      return x === null || x.tag !== 7 ? (x = _u(L, D.mode, X, we), x.return = D, x) : (x = c(x, L), x.return = D, x);
    }
    function W(D, x, L) {
      if (typeof x == "string" && x !== "" || typeof x == "number")
        return x = of("" + x, D.mode, L), x.return = D, x;
      if (typeof x == "object" && x !== null) {
        switch (x.$$typeof) {
          case _t:
            return L = lf(x.type, x.key, x.props, null, D.mode, L), L.ref = no(D, null, x), L.return = D, L;
          case Re:
            return x = Vs(x, D.mode, L), x.return = D, x;
          case Et:
            var X = x._init;
            return W(D, X(x._payload), L);
        }
        if (hr(x) || ve(x))
          return x = _u(x, D.mode, L, null), x.return = D, x;
        Cs(D, x);
      }
      return null;
    }
    function Y(D, x, L, X) {
      var we = x !== null ? x.key : null;
      if (typeof L == "string" && L !== "" || typeof L == "number")
        return we !== null ? null : E(D, x, "" + L, X);
      if (typeof L == "object" && L !== null) {
        switch (L.$$typeof) {
          case _t:
            return L.key === we ? w(D, x, L, X) : null;
          case Re:
            return L.key === we ? U(D, x, L, X) : null;
          case Et:
            return we = L._init, Y(
              D,
              x,
              we(L._payload),
              X
            );
        }
        if (hr(L) || ve(L))
          return we !== null ? null : Q(D, x, L, X, null);
        Cs(D, L);
      }
      return null;
    }
    function le(D, x, L, X, we) {
      if (typeof X == "string" && X !== "" || typeof X == "number")
        return D = D.get(L) || null, E(x, D, "" + X, we);
      if (typeof X == "object" && X !== null) {
        switch (X.$$typeof) {
          case _t:
            return D = D.get(X.key === null ? L : X.key) || null, w(x, D, X, we);
          case Re:
            return D = D.get(X.key === null ? L : X.key) || null, U(x, D, X, we);
          case Et:
            var Ue = X._init;
            return le(D, x, L, Ue(X._payload), we);
        }
        if (hr(X) || ve(X))
          return D = D.get(L) || null, Q(x, D, X, we, null);
        Cs(x, X);
      }
      return null;
    }
    function me(D, x, L, X) {
      for (var we = null, Ue = null, ye = x, je = x = 0, Yn = null; ye !== null && je < L.length; je++) {
        ye.index > je ? (Yn = ye, ye = null) : Yn = ye.sibling;
        var Dt = Y(D, ye, L[je], X);
        if (Dt === null) {
          ye === null && (ye = Yn);
          break;
        }
        n && ye && Dt.alternate === null && r(D, ye), x = d(Dt, x, je), Ue === null ? we = Dt : Ue.sibling = Dt, Ue = Dt, ye = Yn;
      }
      if (je === L.length)
        return l(D, ye), tn && su(D, je), we;
      if (ye === null) {
        for (; je < L.length; je++)
          ye = W(D, L[je], X), ye !== null && (x = d(ye, x, je), Ue === null ? we = ye : Ue.sibling = ye, Ue = ye);
        return tn && su(D, je), we;
      }
      for (ye = o(D, ye); je < L.length; je++)
        Yn = le(ye, D, je, L[je], X), Yn !== null && (n && Yn.alternate !== null && ye.delete(Yn.key === null ? je : Yn.key), x = d(Yn, x, je), Ue === null ? we = Yn : Ue.sibling = Yn, Ue = Yn);
      return n && ye.forEach(function(Zi) {
        return r(D, Zi);
      }), tn && su(D, je), we;
    }
    function Ee(D, x, L, X) {
      var we = ve(L);
      if (typeof we != "function")
        throw Error(F(150));
      if (L = we.call(L), L == null)
        throw Error(F(151));
      for (var Ue = we = null, ye = x, je = x = 0, Yn = null, Dt = L.next(); ye !== null && !Dt.done; je++, Dt = L.next()) {
        ye.index > je ? (Yn = ye, ye = null) : Yn = ye.sibling;
        var Zi = Y(D, ye, Dt.value, X);
        if (Zi === null) {
          ye === null && (ye = Yn);
          break;
        }
        n && ye && Zi.alternate === null && r(D, ye), x = d(Zi, x, je), Ue === null ? we = Zi : Ue.sibling = Zi, Ue = Zi, ye = Yn;
      }
      if (Dt.done)
        return l(
          D,
          ye
        ), tn && su(D, je), we;
      if (ye === null) {
        for (; !Dt.done; je++, Dt = L.next())
          Dt = W(D, Dt.value, X), Dt !== null && (x = d(Dt, x, je), Ue === null ? we = Dt : Ue.sibling = Dt, Ue = Dt);
        return tn && su(D, je), we;
      }
      for (ye = o(D, ye); !Dt.done; je++, Dt = L.next())
        Dt = le(ye, D, je, Dt.value, X), Dt !== null && (n && Dt.alternate !== null && ye.delete(Dt.key === null ? je : Dt.key), x = d(Dt, x, je), Ue === null ? we = Dt : Ue.sibling = Dt, Ue = Dt);
      return n && ye.forEach(function(my) {
        return r(D, my);
      }), tn && su(D, je), we;
    }
    function On(D, x, L, X) {
      if (typeof L == "object" && L !== null && L.type === ut && L.key === null && (L = L.props.children), typeof L == "object" && L !== null) {
        switch (L.$$typeof) {
          case _t:
            e: {
              for (var we = L.key, Ue = x; Ue !== null; ) {
                if (Ue.key === we) {
                  if (we = L.type, we === ut) {
                    if (Ue.tag === 7) {
                      l(D, Ue.sibling), x = c(Ue, L.props.children), x.return = D, D = x;
                      break e;
                    }
                  } else if (Ue.elementType === we || typeof we == "object" && we !== null && we.$$typeof === Et && kv(we) === Ue.type) {
                    l(D, Ue.sibling), x = c(Ue, L.props), x.ref = no(D, Ue, L), x.return = D, D = x;
                    break e;
                  }
                  l(D, Ue);
                  break;
                } else
                  r(D, Ue);
                Ue = Ue.sibling;
              }
              L.type === ut ? (x = _u(L.props.children, D.mode, X, L.key), x.return = D, D = x) : (X = lf(L.type, L.key, L.props, null, D.mode, X), X.ref = no(D, x, L), X.return = D, D = X);
            }
            return m(D);
          case Re:
            e: {
              for (Ue = L.key; x !== null; ) {
                if (x.key === Ue)
                  if (x.tag === 4 && x.stateNode.containerInfo === L.containerInfo && x.stateNode.implementation === L.implementation) {
                    l(D, x.sibling), x = c(x, L.children || []), x.return = D, D = x;
                    break e;
                  } else {
                    l(D, x);
                    break;
                  }
                else
                  r(D, x);
                x = x.sibling;
              }
              x = Vs(L, D.mode, X), x.return = D, D = x;
            }
            return m(D);
          case Et:
            return Ue = L._init, On(D, x, Ue(L._payload), X);
        }
        if (hr(L))
          return me(D, x, L, X);
        if (ve(L))
          return Ee(D, x, L, X);
        Cs(D, L);
      }
      return typeof L == "string" && L !== "" || typeof L == "number" ? (L = "" + L, x !== null && x.tag === 6 ? (l(D, x.sibling), x = c(x, L), x.return = D, D = x) : (l(D, x), x = of(L, D.mode, X), x.return = D, D = x), m(D)) : l(D, x);
    }
    return On;
  }
  var ro = Ov(!0), Lv = Ov(!1), Rs = {}, gi = $t(Rs), ao = $t(Rs), Ts = $t(Rs);
  function kl(n) {
    if (n === Rs)
      throw Error(F(174));
    return n;
  }
  function Ed(n, r) {
    switch (bt(Ts, r), bt(ao, n), bt(gi, Rs), n = r.nodeType, n) {
      case 9:
      case 11:
        r = (r = r.documentElement) ? r.namespaceURI : wr(null, "");
        break;
      default:
        n = n === 8 ? r.parentNode : r, r = n.namespaceURI || null, n = n.tagName, r = wr(r, n);
    }
    Te(gi), bt(gi, r);
  }
  function io() {
    Te(gi), Te(ao), Te(Ts);
  }
  function bc(n) {
    kl(Ts.current);
    var r = kl(gi.current), l = wr(r, n.type);
    r !== l && (bt(ao, n), bt(gi, l));
  }
  function Oe(n) {
    ao.current === n && (Te(gi), Te(ao));
  }
  var _e = $t(0);
  function wt(n) {
    for (var r = n; r !== null; ) {
      if (r.tag === 13) {
        var l = r.memoizedState;
        if (l !== null && (l = l.dehydrated, l === null || l.data === "$?" || l.data === "$!"))
          return r;
      } else if (r.tag === 19 && r.memoizedProps.revealOrder !== void 0) {
        if (r.flags & 128)
          return r;
      } else if (r.child !== null) {
        r.child.return = r, r = r.child;
        continue;
      }
      if (r === n)
        break;
      for (; r.sibling === null; ) {
        if (r.return === null || r.return === n)
          return null;
        r = r.return;
      }
      r.sibling.return = r.return, r = r.sibling;
    }
    return null;
  }
  var gn = [];
  function Ua() {
    for (var n = 0; n < gn.length; n++)
      gn[n]._workInProgressVersionPrimary = null;
    gn.length = 0;
  }
  var ws = He.ReactCurrentDispatcher, Cd = He.ReactCurrentBatchConfig, fu = 0, dn = null, xn = null, V = null, bn = !1, ze = !1, Si = 0, Gi = 0;
  function Sn() {
    throw Error(F(321));
  }
  function Aa(n, r) {
    if (r === null)
      return !1;
    for (var l = 0; l < r.length && l < n.length; l++)
      if (!ti(n[l], r[l]))
        return !1;
    return !0;
  }
  function du(n, r, l, o, c, d) {
    if (fu = d, dn = r, r.memoizedState = null, r.updateQueue = null, r.lanes = 0, ws.current = n === null || n.memoizedState === null ? Zm : Jm, n = l(o, c), ze) {
      d = 0;
      do {
        if (ze = !1, Si = 0, 25 <= d)
          throw Error(F(301));
        d += 1, V = xn = null, r.updateQueue = null, ws.current = ey, n = l(o, c);
      } while (ze);
    }
    if (ws.current = Pc, r = xn !== null && xn.next !== null, fu = 0, V = xn = dn = null, bn = !1, r)
      throw Error(F(300));
    return n;
  }
  function Ol() {
    var n = Si !== 0;
    return Si = 0, n;
  }
  function Xr() {
    var n = { memoizedState: null, baseState: null, baseQueue: null, queue: null, next: null };
    return V === null ? dn.memoizedState = V = n : V = V.next = n, V;
  }
  function Kr() {
    if (xn === null) {
      var n = dn.alternate;
      n = n !== null ? n.memoizedState : null;
    } else
      n = xn.next;
    var r = V === null ? dn.memoizedState : V.next;
    if (r !== null)
      V = r, xn = n;
    else {
      if (n === null)
        throw Error(F(310));
      xn = n, n = { memoizedState: xn.memoizedState, baseState: xn.baseState, baseQueue: xn.baseQueue, queue: xn.queue, next: null }, V === null ? dn.memoizedState = V = n : V = V.next = n;
    }
    return V;
  }
  function pu(n, r) {
    return typeof r == "function" ? r(n) : r;
  }
  function _s(n) {
    var r = Kr(), l = r.queue;
    if (l === null)
      throw Error(F(311));
    l.lastRenderedReducer = n;
    var o = xn, c = o.baseQueue, d = l.pending;
    if (d !== null) {
      if (c !== null) {
        var m = c.next;
        c.next = d.next, d.next = m;
      }
      o.baseQueue = c = d, l.pending = null;
    }
    if (c !== null) {
      d = c.next, o = o.baseState;
      var E = m = null, w = null, U = d;
      do {
        var Q = U.lane;
        if ((fu & Q) === Q)
          w !== null && (w = w.next = { lane: 0, action: U.action, hasEagerState: U.hasEagerState, eagerState: U.eagerState, next: null }), o = U.hasEagerState ? U.eagerState : n(o, U.action);
        else {
          var W = {
            lane: Q,
            action: U.action,
            hasEagerState: U.hasEagerState,
            eagerState: U.eagerState,
            next: null
          };
          w === null ? (E = w = W, m = o) : w = w.next = W, dn.lanes |= Q, Cu |= Q;
        }
        U = U.next;
      } while (U !== null && U !== d);
      w === null ? m = o : w.next = E, ti(o, r.memoizedState) || (Zr = !0), r.memoizedState = o, r.baseState = m, r.baseQueue = w, l.lastRenderedState = o;
    }
    if (n = l.interleaved, n !== null) {
      c = n;
      do
        d = c.lane, dn.lanes |= d, Cu |= d, c = c.next;
      while (c !== n);
    } else
      c === null && (l.lanes = 0);
    return [r.memoizedState, l.dispatch];
  }
  function xs(n) {
    var r = Kr(), l = r.queue;
    if (l === null)
      throw Error(F(311));
    l.lastRenderedReducer = n;
    var o = l.dispatch, c = l.pending, d = r.memoizedState;
    if (c !== null) {
      l.pending = null;
      var m = c = c.next;
      do
        d = n(d, m.action), m = m.next;
      while (m !== c);
      ti(d, r.memoizedState) || (Zr = !0), r.memoizedState = d, r.baseQueue === null && (r.baseState = d), l.lastRenderedState = d;
    }
    return [d, o];
  }
  function Dc() {
  }
  function kc(n, r) {
    var l = dn, o = Kr(), c = r(), d = !ti(o.memoizedState, c);
    if (d && (o.memoizedState = c, Zr = !0), o = o.queue, bs(Mc.bind(null, l, o, n), [n]), o.getSnapshot !== r || d || V !== null && V.memoizedState.tag & 1) {
      if (l.flags |= 2048, vu(9, Lc.bind(null, l, o, c, r), void 0, null), Cn === null)
        throw Error(F(349));
      fu & 30 || Oc(l, r, c);
    }
    return c;
  }
  function Oc(n, r, l) {
    n.flags |= 16384, n = { getSnapshot: r, value: l }, r = dn.updateQueue, r === null ? (r = { lastEffect: null, stores: null }, dn.updateQueue = r, r.stores = [n]) : (l = r.stores, l === null ? r.stores = [n] : l.push(n));
  }
  function Lc(n, r, l, o) {
    r.value = l, r.getSnapshot = o, Nc(r) && zc(n);
  }
  function Mc(n, r, l) {
    return l(function() {
      Nc(r) && zc(n);
    });
  }
  function Nc(n) {
    var r = n.getSnapshot;
    n = n.value;
    try {
      var l = r();
      return !ti(n, l);
    } catch {
      return !0;
    }
  }
  function zc(n) {
    var r = Wi(n, 1);
    r !== null && pn(r, n, 1, -1);
  }
  function Uc(n) {
    var r = Xr();
    return typeof n == "function" && (n = n()), r.memoizedState = r.baseState = n, n = { pending: null, interleaved: null, lanes: 0, dispatch: null, lastRenderedReducer: pu, lastRenderedState: n }, r.queue = n, n = n.dispatch = Vc.bind(null, dn, n), [r.memoizedState, n];
  }
  function vu(n, r, l, o) {
    return n = { tag: n, create: r, destroy: l, deps: o, next: null }, r = dn.updateQueue, r === null ? (r = { lastEffect: null, stores: null }, dn.updateQueue = r, r.lastEffect = n.next = n) : (l = r.lastEffect, l === null ? r.lastEffect = n.next = n : (o = l.next, l.next = n, n.next = o, r.lastEffect = n)), n;
  }
  function Ac() {
    return Kr().memoizedState;
  }
  function lo(n, r, l, o) {
    var c = Xr();
    dn.flags |= n, c.memoizedState = vu(1 | r, l, void 0, o === void 0 ? null : o);
  }
  function hu(n, r, l, o) {
    var c = Kr();
    o = o === void 0 ? null : o;
    var d = void 0;
    if (xn !== null) {
      var m = xn.memoizedState;
      if (d = m.destroy, o !== null && Aa(o, m.deps)) {
        c.memoizedState = vu(r, l, d, o);
        return;
      }
    }
    dn.flags |= n, c.memoizedState = vu(1 | r, l, d, o);
  }
  function mu(n, r) {
    return lo(8390656, 8, n, r);
  }
  function bs(n, r) {
    return hu(2048, 8, n, r);
  }
  function Fc(n, r) {
    return hu(4, 2, n, r);
  }
  function jc(n, r) {
    return hu(4, 4, n, r);
  }
  function Hc(n, r) {
    if (typeof r == "function")
      return n = n(), r(n), function() {
        r(null);
      };
    if (r != null)
      return n = n(), r.current = n, function() {
        r.current = null;
      };
  }
  function Rd(n, r, l) {
    return l = l != null ? l.concat([n]) : null, hu(4, 4, Hc.bind(null, r, n), l);
  }
  function yu() {
  }
  function Td(n, r) {
    var l = Kr();
    r = r === void 0 ? null : r;
    var o = l.memoizedState;
    return o !== null && r !== null && Aa(r, o[1]) ? o[0] : (l.memoizedState = [n, r], n);
  }
  function uo(n, r) {
    var l = Kr();
    r = r === void 0 ? null : r;
    var o = l.memoizedState;
    return o !== null && r !== null && Aa(r, o[1]) ? o[0] : (n = n(), l.memoizedState = [n, r], n);
  }
  function Ll(n, r, l) {
    return fu & 21 ? (ti(l, r) || (l = Zl(), dn.lanes |= l, Cu |= l, n.baseState = !0), r) : (n.baseState && (n.baseState = !1, Zr = !0), n.memoizedState = l);
  }
  function Sa(n, r) {
    var l = vt;
    vt = l !== 0 && 4 > l ? l : 4, n(!0);
    var o = Cd.transition;
    Cd.transition = {};
    try {
      n(!1), r();
    } finally {
      vt = l, Cd.transition = o;
    }
  }
  function Mv() {
    return Kr().memoizedState;
  }
  function Xt(n, r, l) {
    var o = Ki(n);
    if (l = { lane: o, action: l, hasEagerState: !1, eagerState: null, next: null }, Ds(n))
      oo(r, l);
    else if (l = Tv(n, r, l, o), l !== null) {
      var c = Xn();
      pn(l, n, o, c), ks(l, r, o);
    }
  }
  function Vc(n, r, l) {
    var o = Ki(n), c = { lane: o, action: l, hasEagerState: !1, eagerState: null, next: null };
    if (Ds(n))
      oo(r, c);
    else {
      var d = n.alternate;
      if (n.lanes === 0 && (d === null || d.lanes === 0) && (d = r.lastRenderedReducer, d !== null))
        try {
          var m = r.lastRenderedState, E = d(m, l);
          if (c.hasEagerState = !0, c.eagerState = E, ti(E, m)) {
            var w = r.interleaved;
            w === null ? (c.next = c, ga(r)) : (c.next = w.next, w.next = c), r.interleaved = c;
            return;
          }
        } catch {
        } finally {
        }
      l = Tv(n, r, c, o), l !== null && (c = Xn(), pn(l, n, o, c), ks(l, r, o));
    }
  }
  function Ds(n) {
    var r = n.alternate;
    return n === dn || r !== null && r === dn;
  }
  function oo(n, r) {
    ze = bn = !0;
    var l = n.pending;
    l === null ? r.next = r : (r.next = l.next, l.next = r), n.pending = r;
  }
  function ks(n, r, l) {
    if (l & 4194240) {
      var o = r.lanes;
      o &= n.pendingLanes, l |= o, r.lanes = l, Xo(n, l);
    }
  }
  var Pc = { readContext: K, useCallback: Sn, useContext: Sn, useEffect: Sn, useImperativeHandle: Sn, useInsertionEffect: Sn, useLayoutEffect: Sn, useMemo: Sn, useReducer: Sn, useRef: Sn, useState: Sn, useDebugValue: Sn, useDeferredValue: Sn, useTransition: Sn, useMutableSource: Sn, useSyncExternalStore: Sn, useId: Sn, unstable_isNewReconciler: !1 }, Zm = { readContext: K, useCallback: function(n, r) {
    return Xr().memoizedState = [n, r === void 0 ? null : r], n;
  }, useContext: K, useEffect: mu, useImperativeHandle: function(n, r, l) {
    return l = l != null ? l.concat([n]) : null, lo(
      4194308,
      4,
      Hc.bind(null, r, n),
      l
    );
  }, useLayoutEffect: function(n, r) {
    return lo(4194308, 4, n, r);
  }, useInsertionEffect: function(n, r) {
    return lo(4, 2, n, r);
  }, useMemo: function(n, r) {
    var l = Xr();
    return r = r === void 0 ? null : r, n = n(), l.memoizedState = [n, r], n;
  }, useReducer: function(n, r, l) {
    var o = Xr();
    return r = l !== void 0 ? l(r) : r, o.memoizedState = o.baseState = r, n = { pending: null, interleaved: null, lanes: 0, dispatch: null, lastRenderedReducer: n, lastRenderedState: r }, o.queue = n, n = n.dispatch = Xt.bind(null, dn, n), [o.memoizedState, n];
  }, useRef: function(n) {
    var r = Xr();
    return n = { current: n }, r.memoizedState = n;
  }, useState: Uc, useDebugValue: yu, useDeferredValue: function(n) {
    return Xr().memoizedState = n;
  }, useTransition: function() {
    var n = Uc(!1), r = n[0];
    return n = Sa.bind(null, n[1]), Xr().memoizedState = n, [r, n];
  }, useMutableSource: function() {
  }, useSyncExternalStore: function(n, r, l) {
    var o = dn, c = Xr();
    if (tn) {
      if (l === void 0)
        throw Error(F(407));
      l = l();
    } else {
      if (l = r(), Cn === null)
        throw Error(F(349));
      fu & 30 || Oc(o, r, l);
    }
    c.memoizedState = l;
    var d = { value: l, getSnapshot: r };
    return c.queue = d, mu(Mc.bind(
      null,
      o,
      d,
      n
    ), [n]), o.flags |= 2048, vu(9, Lc.bind(null, o, d, l, r), void 0, null), l;
  }, useId: function() {
    var n = Xr(), r = Cn.identifierPrefix;
    if (tn) {
      var l = ar, o = Gr;
      l = (o & ~(1 << 32 - _r(o) - 1)).toString(32) + l, r = ":" + r + "R" + l, l = Si++, 0 < l && (r += "H" + l.toString(32)), r += ":";
    } else
      l = Gi++, r = ":" + r + "r" + l.toString(32) + ":";
    return n.memoizedState = r;
  }, unstable_isNewReconciler: !1 }, Jm = {
    readContext: K,
    useCallback: Td,
    useContext: K,
    useEffect: bs,
    useImperativeHandle: Rd,
    useInsertionEffect: Fc,
    useLayoutEffect: jc,
    useMemo: uo,
    useReducer: _s,
    useRef: Ac,
    useState: function() {
      return _s(pu);
    },
    useDebugValue: yu,
    useDeferredValue: function(n) {
      var r = Kr();
      return Ll(r, xn.memoizedState, n);
    },
    useTransition: function() {
      var n = _s(pu)[0], r = Kr().memoizedState;
      return [n, r];
    },
    useMutableSource: Dc,
    useSyncExternalStore: kc,
    useId: Mv,
    unstable_isNewReconciler: !1
  }, ey = { readContext: K, useCallback: Td, useContext: K, useEffect: bs, useImperativeHandle: Rd, useInsertionEffect: Fc, useLayoutEffect: jc, useMemo: uo, useReducer: xs, useRef: Ac, useState: function() {
    return xs(pu);
  }, useDebugValue: yu, useDeferredValue: function(n) {
    var r = Kr();
    return xn === null ? r.memoizedState = n : Ll(r, xn.memoizedState, n);
  }, useTransition: function() {
    var n = xs(pu)[0], r = Kr().memoizedState;
    return [n, r];
  }, useMutableSource: Dc, useSyncExternalStore: kc, useId: Mv, unstable_isNewReconciler: !1 };
  function Ml(n, r) {
    try {
      var l = "", o = r;
      do
        l += ot(o), o = o.return;
      while (o);
      var c = l;
    } catch (d) {
      c = `
Error generating stack: ` + d.message + `
` + d.stack;
    }
    return { value: n, source: r, stack: c, digest: null };
  }
  function wd(n, r, l) {
    return { value: n, source: null, stack: l ?? null, digest: r ?? null };
  }
  function Os(n, r) {
    try {
      console.error(r.value);
    } catch (l) {
      setTimeout(function() {
        throw l;
      });
    }
  }
  var Nv = typeof WeakMap == "function" ? WeakMap : Map;
  function zv(n, r, l) {
    l = qt(-1, l), l.tag = 3, l.payload = { element: null };
    var o = r.value;
    return l.callback = function() {
      Jc || (Jc = !0, Nd = o), Os(n, r);
    }, l;
  }
  function Uv(n, r, l) {
    l = qt(-1, l), l.tag = 3;
    var o = n.type.getDerivedStateFromError;
    if (typeof o == "function") {
      var c = r.value;
      l.payload = function() {
        return o(c);
      }, l.callback = function() {
        Os(n, r);
      };
    }
    var d = n.stateNode;
    return d !== null && typeof d.componentDidCatch == "function" && (l.callback = function() {
      Os(n, r), typeof o != "function" && (Ha === null ? Ha = /* @__PURE__ */ new Set([this]) : Ha.add(this));
      var m = r.stack;
      this.componentDidCatch(r.value, { componentStack: m !== null ? m : "" });
    }), l;
  }
  function Ls(n, r, l) {
    var o = n.pingCache;
    if (o === null) {
      o = n.pingCache = new Nv();
      var c = /* @__PURE__ */ new Set();
      o.set(r, c);
    } else
      c = o.get(r), c === void 0 && (c = /* @__PURE__ */ new Set(), o.set(r, c));
    c.has(l) || (c.add(l), n = cy.bind(null, n, r, l), r.then(n, n));
  }
  function Av(n) {
    do {
      var r;
      if ((r = n.tag === 13) && (r = n.memoizedState, r = r !== null ? r.dehydrated !== null : !0), r)
        return n;
      n = n.return;
    } while (n !== null);
    return null;
  }
  function _d(n, r, l, o, c) {
    return n.mode & 1 ? (n.flags |= 65536, n.lanes = c, n) : (n === r ? n.flags |= 65536 : (n.flags |= 128, l.flags |= 131072, l.flags &= -52805, l.tag === 1 && (l.alternate === null ? l.tag = 17 : (r = qt(-1, 1), r.tag = 2, Dl(l, r, 1))), l.lanes |= 1), n);
  }
  var Fv = He.ReactCurrentOwner, Zr = !1;
  function Dn(n, r, l, o) {
    r.child = n === null ? Lv(r, null, l, o) : ro(r, n.child, l, o);
  }
  function so(n, r, l, o, c) {
    l = l.render;
    var d = r.ref;
    return _n(r, c), o = du(n, r, l, o, d, c), l = Ol(), n !== null && !Zr ? (r.updateQueue = n.updateQueue, r.flags &= -2053, n.lanes &= ~c, kn(n, r, c)) : (tn && l && Cc(r), r.flags |= 1, Dn(n, r, o, c), r.child);
  }
  function Nl(n, r, l, o, c) {
    if (n === null) {
      var d = l.type;
      return typeof d == "function" && !jd(d) && d.defaultProps === void 0 && l.compare === null && l.defaultProps === void 0 ? (r.tag = 15, r.type = d, Bc(n, r, d, o, c)) : (n = lf(l.type, null, o, r, r.mode, c), n.ref = r.ref, n.return = r, r.child = n);
    }
    if (d = n.child, !(n.lanes & c)) {
      var m = d.memoizedProps;
      if (l = l.compare, l = l !== null ? l : Gu, l(m, o) && n.ref === r.ref)
        return kn(n, r, c);
    }
    return r.flags |= 1, n = Al(d, o), n.ref = r.ref, n.return = r, r.child = n;
  }
  function Bc(n, r, l, o, c) {
    if (n !== null) {
      var d = n.memoizedProps;
      if (Gu(d, o) && n.ref === r.ref)
        if (Zr = !1, r.pendingProps = o = d, (n.lanes & c) !== 0)
          n.flags & 131072 && (Zr = !0);
        else
          return r.lanes = n.lanes, kn(n, r, c);
    }
    return qe(n, r, l, o, c);
  }
  function Jr(n, r, l) {
    var o = r.pendingProps, c = o.children, d = n !== null ? n.memoizedState : null;
    if (o.mode === "hidden")
      if (!(r.mode & 1))
        r.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }, bt(Eo, ea), ea |= l;
      else {
        if (!(l & 1073741824))
          return n = d !== null ? d.baseLanes | l : l, r.lanes = r.childLanes = 1073741824, r.memoizedState = { baseLanes: n, cachePool: null, transitions: null }, r.updateQueue = null, bt(Eo, ea), ea |= n, null;
        r.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }, o = d !== null ? d.baseLanes : l, bt(Eo, ea), ea |= o;
      }
    else
      d !== null ? (o = d.baseLanes | l, r.memoizedState = null) : o = l, bt(Eo, ea), ea |= o;
    return Dn(n, r, c, l), r.child;
  }
  function gu(n, r) {
    var l = r.ref;
    (n === null && l !== null || n !== null && n.ref !== l) && (r.flags |= 512, r.flags |= 2097152);
  }
  function qe(n, r, l, o, c) {
    var d = Un(l) ? xr : Wn.current;
    return d = ha(r, d), _n(r, c), l = du(n, r, l, o, d, c), o = Ol(), n !== null && !Zr ? (r.updateQueue = n.updateQueue, r.flags &= -2053, n.lanes &= ~c, kn(n, r, c)) : (tn && o && Cc(r), r.flags |= 1, Dn(n, r, l, c), r.child);
  }
  function Ms(n, r, l, o, c) {
    if (Un(l)) {
      var d = !0;
      uu(r);
    } else
      d = !1;
    if (_n(r, c), r.stateNode === null)
      zs(n, r), bv(r, l, o), Sd(r, l, o, c), o = !0;
    else if (n === null) {
      var m = r.stateNode, E = r.memoizedProps;
      m.props = E;
      var w = m.context, U = l.contextType;
      typeof U == "object" && U !== null ? U = K(U) : (U = Un(l) ? xr : Wn.current, U = ha(r, U));
      var Q = l.getDerivedStateFromProps, W = typeof Q == "function" || typeof m.getSnapshotBeforeUpdate == "function";
      W || typeof m.UNSAFE_componentWillReceiveProps != "function" && typeof m.componentWillReceiveProps != "function" || (E !== o || w !== U) && Dv(r, m, o, U), bl = !1;
      var Y = r.memoizedState;
      m.state = Y, Es(r, o, m, c), w = r.memoizedState, E !== o || Y !== w || Qe.current || bl ? (typeof Q == "function" && (gd(r, l, Q, o), w = r.memoizedState), (E = bl || xv(r, l, E, o, Y, w, U)) ? (W || typeof m.UNSAFE_componentWillMount != "function" && typeof m.componentWillMount != "function" || (typeof m.componentWillMount == "function" && m.componentWillMount(), typeof m.UNSAFE_componentWillMount == "function" && m.UNSAFE_componentWillMount()), typeof m.componentDidMount == "function" && (r.flags |= 4194308)) : (typeof m.componentDidMount == "function" && (r.flags |= 4194308), r.memoizedProps = o, r.memoizedState = w), m.props = o, m.state = w, m.context = U, o = E) : (typeof m.componentDidMount == "function" && (r.flags |= 4194308), o = !1);
    } else {
      m = r.stateNode, wv(n, r), E = r.memoizedProps, U = r.type === r.elementType ? E : qr(r.type, E), m.props = U, W = r.pendingProps, Y = m.context, w = l.contextType, typeof w == "object" && w !== null ? w = K(w) : (w = Un(l) ? xr : Wn.current, w = ha(r, w));
      var le = l.getDerivedStateFromProps;
      (Q = typeof le == "function" || typeof m.getSnapshotBeforeUpdate == "function") || typeof m.UNSAFE_componentWillReceiveProps != "function" && typeof m.componentWillReceiveProps != "function" || (E !== W || Y !== w) && Dv(r, m, o, w), bl = !1, Y = r.memoizedState, m.state = Y, Es(r, o, m, c);
      var me = r.memoizedState;
      E !== W || Y !== me || Qe.current || bl ? (typeof le == "function" && (gd(r, l, le, o), me = r.memoizedState), (U = bl || xv(r, l, U, o, Y, me, w) || !1) ? (Q || typeof m.UNSAFE_componentWillUpdate != "function" && typeof m.componentWillUpdate != "function" || (typeof m.componentWillUpdate == "function" && m.componentWillUpdate(o, me, w), typeof m.UNSAFE_componentWillUpdate == "function" && m.UNSAFE_componentWillUpdate(o, me, w)), typeof m.componentDidUpdate == "function" && (r.flags |= 4), typeof m.getSnapshotBeforeUpdate == "function" && (r.flags |= 1024)) : (typeof m.componentDidUpdate != "function" || E === n.memoizedProps && Y === n.memoizedState || (r.flags |= 4), typeof m.getSnapshotBeforeUpdate != "function" || E === n.memoizedProps && Y === n.memoizedState || (r.flags |= 1024), r.memoizedProps = o, r.memoizedState = me), m.props = o, m.state = me, m.context = w, o = U) : (typeof m.componentDidUpdate != "function" || E === n.memoizedProps && Y === n.memoizedState || (r.flags |= 4), typeof m.getSnapshotBeforeUpdate != "function" || E === n.memoizedProps && Y === n.memoizedState || (r.flags |= 1024), o = !1);
    }
    return $c(n, r, l, o, d, c);
  }
  function $c(n, r, l, o, c, d) {
    gu(n, r);
    var m = (r.flags & 128) !== 0;
    if (!o && !m)
      return c && Ev(r, l, !1), kn(n, r, d);
    o = r.stateNode, Fv.current = r;
    var E = m && typeof l.getDerivedStateFromError != "function" ? null : o.render();
    return r.flags |= 1, n !== null && m ? (r.child = ro(r, n.child, null, d), r.child = ro(r, null, E, d)) : Dn(n, r, E, d), r.memoizedState = o.state, c && Ev(r, l, !0), r.child;
  }
  function ty(n) {
    var r = n.stateNode;
    r.pendingContext ? hi(n, r.pendingContext, r.pendingContext !== r.context) : r.context && hi(n, r.context, !1), Ed(n, r.containerInfo);
  }
  function jv(n, r, l, o, c) {
    return Zu(), An(c), r.flags |= 256, Dn(n, r, l, o), r.child;
  }
  var Ns = { dehydrated: null, treeContext: null, retryLane: 0 };
  function Su(n) {
    return { baseLanes: n, cachePool: null, transitions: null };
  }
  function Hv(n, r, l) {
    var o = r.pendingProps, c = _e.current, d = !1, m = (r.flags & 128) !== 0, E;
    if ((E = m) || (E = n !== null && n.memoizedState === null ? !1 : (c & 2) !== 0), E ? (d = !0, r.flags &= -129) : (n === null || n.memoizedState !== null) && (c |= 1), bt(_e, c & 1), n === null)
      return Tc(r), n = r.memoizedState, n !== null && (n = n.dehydrated, n !== null) ? (r.mode & 1 ? n.data === "$!" ? r.lanes = 8 : r.lanes = 1073741824 : r.lanes = 1, null) : (m = o.children, n = o.fallback, d ? (o = r.mode, d = r.child, m = { mode: "hidden", children: m }, !(o & 1) && d !== null ? (d.childLanes = 0, d.pendingProps = m) : d = uf(m, o, 0, null), n = _u(n, o, l, null), d.return = r, n.return = r, d.sibling = n, r.child = d, r.child.memoizedState = Su(l), r.memoizedState = Ns, n) : Yc(r, m));
    if (c = n.memoizedState, c !== null && (E = c.dehydrated, E !== null))
      return xd(n, r, m, o, E, c, l);
    if (d) {
      d = o.fallback, m = r.mode, c = n.child, E = c.sibling;
      var w = { mode: "hidden", children: o.children };
      return !(m & 1) && r.child !== c ? (o = r.child, o.childLanes = 0, o.pendingProps = w, r.deletions = null) : (o = Al(c, w), o.subtreeFlags = c.subtreeFlags & 14680064), E !== null ? d = Al(E, d) : (d = _u(d, m, l, null), d.flags |= 2), d.return = r, o.return = r, o.sibling = d, r.child = o, o = d, d = r.child, m = n.child.memoizedState, m = m === null ? Su(l) : { baseLanes: m.baseLanes | l, cachePool: null, transitions: m.transitions }, d.memoizedState = m, d.childLanes = n.childLanes & ~l, r.memoizedState = Ns, o;
    }
    return d = n.child, n = d.sibling, o = Al(d, { mode: "visible", children: o.children }), !(r.mode & 1) && (o.lanes = l), o.return = r, o.sibling = null, n !== null && (l = r.deletions, l === null ? (r.deletions = [n], r.flags |= 16) : l.push(n)), r.child = o, r.memoizedState = null, o;
  }
  function Yc(n, r) {
    return r = uf({ mode: "visible", children: r }, n.mode, 0, null), r.return = n, n.child = r;
  }
  function Ic(n, r, l, o) {
    return o !== null && An(o), ro(r, n.child, null, l), n = Yc(r, r.pendingProps.children), n.flags |= 2, r.memoizedState = null, n;
  }
  function xd(n, r, l, o, c, d, m) {
    if (l)
      return r.flags & 256 ? (r.flags &= -257, o = wd(Error(F(422))), Ic(n, r, m, o)) : r.memoizedState !== null ? (r.child = n.child, r.flags |= 128, null) : (d = o.fallback, c = r.mode, o = uf({ mode: "visible", children: o.children }, c, 0, null), d = _u(d, c, m, null), d.flags |= 2, o.return = r, d.return = r, o.sibling = d, r.child = o, r.mode & 1 && ro(r, n.child, null, m), r.child.memoizedState = Su(m), r.memoizedState = Ns, d);
    if (!(r.mode & 1))
      return Ic(n, r, m, null);
    if (c.data === "$!") {
      if (o = c.nextSibling && c.nextSibling.dataset, o)
        var E = o.dgst;
      return o = E, d = Error(F(419)), o = wd(d, o, void 0), Ic(n, r, m, o);
    }
    if (E = (m & n.childLanes) !== 0, Zr || E) {
      if (o = Cn, o !== null) {
        switch (m & -m) {
          case 4:
            c = 2;
            break;
          case 16:
            c = 8;
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
            c = 32;
            break;
          case 536870912:
            c = 268435456;
            break;
          default:
            c = 0;
        }
        c = c & (o.suspendedLanes | m) ? 0 : c, c !== 0 && c !== d.retryLane && (d.retryLane = c, Wi(n, c), pn(o, n, c, -1));
      }
      return Hs(), o = wd(Error(F(421))), Ic(n, r, m, o);
    }
    return c.data === "$?" ? (r.flags |= 128, r.child = n.child, r = Fd.bind(null, n), c._reactRetry = r, null) : (n = d.treeContext, ya = va(c.nextSibling), ma = r, tn = !0, za = null, n !== null && (Qr[Wr++] = Gr, Qr[Wr++] = ar, Qr[Wr++] = ai, Gr = n.id, ar = n.overflow, ai = r), r = Yc(r, o.children), r.flags |= 4096, r);
  }
  function Vv(n, r, l) {
    n.lanes |= r;
    var o = n.alternate;
    o !== null && (o.lanes |= r), xl(n.return, r, l);
  }
  function Qc(n, r, l, o, c) {
    var d = n.memoizedState;
    d === null ? n.memoizedState = { isBackwards: r, rendering: null, renderingStartTime: 0, last: o, tail: l, tailMode: c } : (d.isBackwards = r, d.rendering = null, d.renderingStartTime = 0, d.last = o, d.tail = l, d.tailMode = c);
  }
  function bd(n, r, l) {
    var o = r.pendingProps, c = o.revealOrder, d = o.tail;
    if (Dn(n, r, o.children, l), o = _e.current, o & 2)
      o = o & 1 | 2, r.flags |= 128;
    else {
      if (n !== null && n.flags & 128)
        e:
          for (n = r.child; n !== null; ) {
            if (n.tag === 13)
              n.memoizedState !== null && Vv(n, l, r);
            else if (n.tag === 19)
              Vv(n, l, r);
            else if (n.child !== null) {
              n.child.return = n, n = n.child;
              continue;
            }
            if (n === r)
              break e;
            for (; n.sibling === null; ) {
              if (n.return === null || n.return === r)
                break e;
              n = n.return;
            }
            n.sibling.return = n.return, n = n.sibling;
          }
      o &= 1;
    }
    if (bt(_e, o), !(r.mode & 1))
      r.memoizedState = null;
    else
      switch (c) {
        case "forwards":
          for (l = r.child, c = null; l !== null; )
            n = l.alternate, n !== null && wt(n) === null && (c = l), l = l.sibling;
          l = c, l === null ? (c = r.child, r.child = null) : (c = l.sibling, l.sibling = null), Qc(r, !1, c, l, d);
          break;
        case "backwards":
          for (l = null, c = r.child, r.child = null; c !== null; ) {
            if (n = c.alternate, n !== null && wt(n) === null) {
              r.child = c;
              break;
            }
            n = c.sibling, c.sibling = l, l = c, c = n;
          }
          Qc(r, !0, l, null, d);
          break;
        case "together":
          Qc(r, !1, null, null, void 0);
          break;
        default:
          r.memoizedState = null;
      }
    return r.child;
  }
  function zs(n, r) {
    !(r.mode & 1) && n !== null && (n.alternate = null, r.alternate = null, r.flags |= 2);
  }
  function kn(n, r, l) {
    if (n !== null && (r.dependencies = n.dependencies), Cu |= r.lanes, !(l & r.childLanes))
      return null;
    if (n !== null && r.child !== n.child)
      throw Error(F(153));
    if (r.child !== null) {
      for (n = r.child, l = Al(n, n.pendingProps), r.child = l, l.return = r; n.sibling !== null; )
        n = n.sibling, l = l.sibling = Al(n, n.pendingProps), l.return = r;
      l.sibling = null;
    }
    return r.child;
  }
  function qi(n, r, l) {
    switch (r.tag) {
      case 3:
        ty(r), Zu();
        break;
      case 5:
        bc(r);
        break;
      case 1:
        Un(r.type) && uu(r);
        break;
      case 4:
        Ed(r, r.stateNode.containerInfo);
        break;
      case 10:
        var o = r.type._context, c = r.memoizedProps.value;
        bt(Ju, o._currentValue), o._currentValue = c;
        break;
      case 13:
        if (o = r.memoizedState, o !== null)
          return o.dehydrated !== null ? (bt(_e, _e.current & 1), r.flags |= 128, null) : l & r.child.childLanes ? Hv(n, r, l) : (bt(_e, _e.current & 1), n = kn(n, r, l), n !== null ? n.sibling : null);
        bt(_e, _e.current & 1);
        break;
      case 19:
        if (o = (l & r.childLanes) !== 0, n.flags & 128) {
          if (o)
            return bd(n, r, l);
          r.flags |= 128;
        }
        if (c = r.memoizedState, c !== null && (c.rendering = null, c.tail = null, c.lastEffect = null), bt(_e, _e.current), o)
          break;
        return null;
      case 22:
      case 23:
        return r.lanes = 0, Jr(n, r, l);
    }
    return kn(n, r, l);
  }
  var Ei, co, fo, Fa;
  Ei = function(n, r) {
    for (var l = r.child; l !== null; ) {
      if (l.tag === 5 || l.tag === 6)
        n.appendChild(l.stateNode);
      else if (l.tag !== 4 && l.child !== null) {
        l.child.return = l, l = l.child;
        continue;
      }
      if (l === r)
        break;
      for (; l.sibling === null; ) {
        if (l.return === null || l.return === r)
          return;
        l = l.return;
      }
      l.sibling.return = l.return, l = l.sibling;
    }
  }, co = function() {
  }, fo = function(n, r, l, o) {
    var c = n.memoizedProps;
    if (c !== o) {
      n = r.stateNode, kl(gi.current);
      var d = null;
      switch (l) {
        case "input":
          c = mn(n, c), o = mn(n, o), d = [];
          break;
        case "select":
          c = T({}, c, { value: void 0 }), o = T({}, o, { value: void 0 }), d = [];
          break;
        case "textarea":
          c = la(n, c), o = la(n, o), d = [];
          break;
        default:
          typeof c.onClick != "function" && typeof o.onClick == "function" && (n.onclick = gc);
      }
      xt(l, o);
      var m;
      l = null;
      for (U in c)
        if (!o.hasOwnProperty(U) && c.hasOwnProperty(U) && c[U] != null)
          if (U === "style") {
            var E = c[U];
            for (m in E)
              E.hasOwnProperty(m) && (l || (l = {}), l[m] = "");
          } else
            U !== "dangerouslySetInnerHTML" && U !== "children" && U !== "suppressContentEditableWarning" && U !== "suppressHydrationWarning" && U !== "autoFocus" && (Ut.hasOwnProperty(U) ? d || (d = []) : (d = d || []).push(U, null));
      for (U in o) {
        var w = o[U];
        if (E = c != null ? c[U] : void 0, o.hasOwnProperty(U) && w !== E && (w != null || E != null))
          if (U === "style")
            if (E) {
              for (m in E)
                !E.hasOwnProperty(m) || w && w.hasOwnProperty(m) || (l || (l = {}), l[m] = "");
              for (m in w)
                w.hasOwnProperty(m) && E[m] !== w[m] && (l || (l = {}), l[m] = w[m]);
            } else
              l || (d || (d = []), d.push(
                U,
                l
              )), l = w;
          else
            U === "dangerouslySetInnerHTML" ? (w = w ? w.__html : void 0, E = E ? E.__html : void 0, w != null && E !== w && (d = d || []).push(U, w)) : U === "children" ? typeof w != "string" && typeof w != "number" || (d = d || []).push(U, "" + w) : U !== "suppressContentEditableWarning" && U !== "suppressHydrationWarning" && (Ut.hasOwnProperty(U) ? (w != null && U === "onScroll" && Bt("scroll", n), d || E === w || (d = [])) : (d = d || []).push(U, w));
      }
      l && (d = d || []).push("style", l);
      var U = d;
      (r.updateQueue = U) && (r.flags |= 4);
    }
  }, Fa = function(n, r, l, o) {
    l !== o && (r.flags |= 4);
  };
  function En(n, r) {
    if (!tn)
      switch (n.tailMode) {
        case "hidden":
          r = n.tail;
          for (var l = null; r !== null; )
            r.alternate !== null && (l = r), r = r.sibling;
          l === null ? n.tail = null : l.sibling = null;
          break;
        case "collapsed":
          l = n.tail;
          for (var o = null; l !== null; )
            l.alternate !== null && (o = l), l = l.sibling;
          o === null ? r || n.tail === null ? n.tail = null : n.tail.sibling = null : o.sibling = null;
      }
  }
  function Cr(n) {
    var r = n.alternate !== null && n.alternate.child === n.child, l = 0, o = 0;
    if (r)
      for (var c = n.child; c !== null; )
        l |= c.lanes | c.childLanes, o |= c.subtreeFlags & 14680064, o |= c.flags & 14680064, c.return = n, c = c.sibling;
    else
      for (c = n.child; c !== null; )
        l |= c.lanes | c.childLanes, o |= c.subtreeFlags, o |= c.flags, c.return = n, c = c.sibling;
    return n.subtreeFlags |= o, n.childLanes = l, r;
  }
  function ny(n, r, l) {
    var o = r.pendingProps;
    switch (Rc(r), r.tag) {
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
        return Cr(r), null;
      case 1:
        return Un(r.type) && Ir(), Cr(r), null;
      case 3:
        return o = r.stateNode, io(), Te(Qe), Te(Wn), Ua(), o.pendingContext && (o.context = o.pendingContext, o.pendingContext = null), (n === null || n.child === null) && (wc(r) ? r.flags |= 4 : n === null || n.memoizedState.isDehydrated && !(r.flags & 256) || (r.flags |= 1024, za !== null && (zd(za), za = null))), co(n, r), Cr(r), null;
      case 5:
        Oe(r);
        var c = kl(Ts.current);
        if (l = r.type, n !== null && r.stateNode != null)
          fo(n, r, l, o, c), n.ref !== r.ref && (r.flags |= 512, r.flags |= 2097152);
        else {
          if (!o) {
            if (r.stateNode === null)
              throw Error(F(166));
            return Cr(r), null;
          }
          if (n = kl(gi.current), wc(r)) {
            o = r.stateNode, l = r.type;
            var d = r.memoizedProps;
            switch (o[Oa] = r, o[gs] = d, n = (r.mode & 1) !== 0, l) {
              case "dialog":
                Bt("cancel", o), Bt("close", o);
                break;
              case "iframe":
              case "object":
              case "embed":
                Bt("load", o);
                break;
              case "video":
              case "audio":
                for (c = 0; c < Bi.length; c++)
                  Bt(Bi[c], o);
                break;
              case "source":
                Bt("error", o);
                break;
              case "img":
              case "image":
              case "link":
                Bt(
                  "error",
                  o
                ), Bt("load", o);
                break;
              case "details":
                Bt("toggle", o);
                break;
              case "input":
                er(o, d), Bt("invalid", o);
                break;
              case "select":
                o._wrapperState = { wasMultiple: !!d.multiple }, Bt("invalid", o);
                break;
              case "textarea":
                ua(o, d), Bt("invalid", o);
            }
            xt(l, d), c = null;
            for (var m in d)
              if (d.hasOwnProperty(m)) {
                var E = d[m];
                m === "children" ? typeof E == "string" ? o.textContent !== E && (d.suppressHydrationWarning !== !0 && vs(o.textContent, E, n), c = ["children", E]) : typeof E == "number" && o.textContent !== "" + E && (d.suppressHydrationWarning !== !0 && vs(
                  o.textContent,
                  E,
                  n
                ), c = ["children", "" + E]) : Ut.hasOwnProperty(m) && E != null && m === "onScroll" && Bt("scroll", o);
              }
            switch (l) {
              case "input":
                Jn(o), Nn(o, d, !0);
                break;
              case "textarea":
                Jn(o), oa(o);
                break;
              case "select":
              case "option":
                break;
              default:
                typeof d.onClick == "function" && (o.onclick = gc);
            }
            o = c, r.updateQueue = o, o !== null && (r.flags |= 4);
          } else {
            m = c.nodeType === 9 ? c : c.ownerDocument, n === "http://www.w3.org/1999/xhtml" && (n = tr(l)), n === "http://www.w3.org/1999/xhtml" ? l === "script" ? (n = m.createElement("div"), n.innerHTML = "<script><\/script>", n = n.removeChild(n.firstChild)) : typeof o.is == "string" ? n = m.createElement(l, { is: o.is }) : (n = m.createElement(l), l === "select" && (m = n, o.multiple ? m.multiple = !0 : o.size && (m.size = o.size))) : n = m.createElementNS(n, l), n[Oa] = r, n[gs] = o, Ei(n, r, !1, !1), r.stateNode = n;
            e: {
              switch (m = wn(l, o), l) {
                case "dialog":
                  Bt("cancel", n), Bt("close", n), c = o;
                  break;
                case "iframe":
                case "object":
                case "embed":
                  Bt("load", n), c = o;
                  break;
                case "video":
                case "audio":
                  for (c = 0; c < Bi.length; c++)
                    Bt(Bi[c], n);
                  c = o;
                  break;
                case "source":
                  Bt("error", n), c = o;
                  break;
                case "img":
                case "image":
                case "link":
                  Bt(
                    "error",
                    n
                  ), Bt("load", n), c = o;
                  break;
                case "details":
                  Bt("toggle", n), c = o;
                  break;
                case "input":
                  er(n, o), c = mn(n, o), Bt("invalid", n);
                  break;
                case "option":
                  c = o;
                  break;
                case "select":
                  n._wrapperState = { wasMultiple: !!o.multiple }, c = T({}, o, { value: void 0 }), Bt("invalid", n);
                  break;
                case "textarea":
                  ua(n, o), c = la(n, o), Bt("invalid", n);
                  break;
                default:
                  c = o;
              }
              xt(l, c), E = c;
              for (d in E)
                if (E.hasOwnProperty(d)) {
                  var w = E[d];
                  d === "style" ? Je(n, w) : d === "dangerouslySetInnerHTML" ? (w = w ? w.__html : void 0, w != null && sa(n, w)) : d === "children" ? typeof w == "string" ? (l !== "textarea" || w !== "") && ca(n, w) : typeof w == "number" && ca(n, "" + w) : d !== "suppressContentEditableWarning" && d !== "suppressHydrationWarning" && d !== "autoFocus" && (Ut.hasOwnProperty(d) ? w != null && d === "onScroll" && Bt("scroll", n) : w != null && rt(n, d, w, m));
                }
              switch (l) {
                case "input":
                  Jn(n), Nn(n, o, !1);
                  break;
                case "textarea":
                  Jn(n), oa(n);
                  break;
                case "option":
                  o.value != null && n.setAttribute("value", "" + it(o.value));
                  break;
                case "select":
                  n.multiple = !!o.multiple, d = o.value, d != null ? Vn(n, !!o.multiple, d, !1) : o.defaultValue != null && Vn(
                    n,
                    !!o.multiple,
                    o.defaultValue,
                    !0
                  );
                  break;
                default:
                  typeof c.onClick == "function" && (n.onclick = gc);
              }
              switch (l) {
                case "button":
                case "input":
                case "select":
                case "textarea":
                  o = !!o.autoFocus;
                  break e;
                case "img":
                  o = !0;
                  break e;
                default:
                  o = !1;
              }
            }
            o && (r.flags |= 4);
          }
          r.ref !== null && (r.flags |= 512, r.flags |= 2097152);
        }
        return Cr(r), null;
      case 6:
        if (n && r.stateNode != null)
          Fa(n, r, n.memoizedProps, o);
        else {
          if (typeof o != "string" && r.stateNode === null)
            throw Error(F(166));
          if (l = kl(Ts.current), kl(gi.current), wc(r)) {
            if (o = r.stateNode, l = r.memoizedProps, o[Oa] = r, (d = o.nodeValue !== l) && (n = ma, n !== null))
              switch (n.tag) {
                case 3:
                  vs(o.nodeValue, l, (n.mode & 1) !== 0);
                  break;
                case 5:
                  n.memoizedProps.suppressHydrationWarning !== !0 && vs(o.nodeValue, l, (n.mode & 1) !== 0);
              }
            d && (r.flags |= 4);
          } else
            o = (l.nodeType === 9 ? l : l.ownerDocument).createTextNode(o), o[Oa] = r, r.stateNode = o;
        }
        return Cr(r), null;
      case 13:
        if (Te(_e), o = r.memoizedState, n === null || n.memoizedState !== null && n.memoizedState.dehydrated !== null) {
          if (tn && ya !== null && r.mode & 1 && !(r.flags & 128))
            Rv(), Zu(), r.flags |= 98560, d = !1;
          else if (d = wc(r), o !== null && o.dehydrated !== null) {
            if (n === null) {
              if (!d)
                throw Error(F(318));
              if (d = r.memoizedState, d = d !== null ? d.dehydrated : null, !d)
                throw Error(F(317));
              d[Oa] = r;
            } else
              Zu(), !(r.flags & 128) && (r.memoizedState = null), r.flags |= 4;
            Cr(r), d = !1;
          } else
            za !== null && (zd(za), za = null), d = !0;
          if (!d)
            return r.flags & 65536 ? r : null;
        }
        return r.flags & 128 ? (r.lanes = l, r) : (o = o !== null, o !== (n !== null && n.memoizedState !== null) && o && (r.child.flags |= 8192, r.mode & 1 && (n === null || _e.current & 1 ? Bn === 0 && (Bn = 3) : Hs())), r.updateQueue !== null && (r.flags |= 4), Cr(r), null);
      case 4:
        return io(), co(n, r), n === null && pi(r.stateNode.containerInfo), Cr(r), null;
      case 10:
        return md(r.type._context), Cr(r), null;
      case 17:
        return Un(r.type) && Ir(), Cr(r), null;
      case 19:
        if (Te(_e), d = r.memoizedState, d === null)
          return Cr(r), null;
        if (o = (r.flags & 128) !== 0, m = d.rendering, m === null)
          if (o)
            En(d, !1);
          else {
            if (Bn !== 0 || n !== null && n.flags & 128)
              for (n = r.child; n !== null; ) {
                if (m = wt(n), m !== null) {
                  for (r.flags |= 128, En(d, !1), o = m.updateQueue, o !== null && (r.updateQueue = o, r.flags |= 4), r.subtreeFlags = 0, o = l, l = r.child; l !== null; )
                    d = l, n = o, d.flags &= 14680066, m = d.alternate, m === null ? (d.childLanes = 0, d.lanes = n, d.child = null, d.subtreeFlags = 0, d.memoizedProps = null, d.memoizedState = null, d.updateQueue = null, d.dependencies = null, d.stateNode = null) : (d.childLanes = m.childLanes, d.lanes = m.lanes, d.child = m.child, d.subtreeFlags = 0, d.deletions = null, d.memoizedProps = m.memoizedProps, d.memoizedState = m.memoizedState, d.updateQueue = m.updateQueue, d.type = m.type, n = m.dependencies, d.dependencies = n === null ? null : { lanes: n.lanes, firstContext: n.firstContext }), l = l.sibling;
                  return bt(_e, _e.current & 1 | 2), r.child;
                }
                n = n.sibling;
              }
            d.tail !== null && Gt() > Ro && (r.flags |= 128, o = !0, En(d, !1), r.lanes = 4194304);
          }
        else {
          if (!o)
            if (n = wt(m), n !== null) {
              if (r.flags |= 128, o = !0, l = n.updateQueue, l !== null && (r.updateQueue = l, r.flags |= 4), En(d, !0), d.tail === null && d.tailMode === "hidden" && !m.alternate && !tn)
                return Cr(r), null;
            } else
              2 * Gt() - d.renderingStartTime > Ro && l !== 1073741824 && (r.flags |= 128, o = !0, En(d, !1), r.lanes = 4194304);
          d.isBackwards ? (m.sibling = r.child, r.child = m) : (l = d.last, l !== null ? l.sibling = m : r.child = m, d.last = m);
        }
        return d.tail !== null ? (r = d.tail, d.rendering = r, d.tail = r.sibling, d.renderingStartTime = Gt(), r.sibling = null, l = _e.current, bt(_e, o ? l & 1 | 2 : l & 1), r) : (Cr(r), null);
      case 22:
      case 23:
        return rf(), o = r.memoizedState !== null, n !== null && n.memoizedState !== null !== o && (r.flags |= 8192), o && r.mode & 1 ? ea & 1073741824 && (Cr(r), r.subtreeFlags & 6 && (r.flags |= 8192)) : Cr(r), null;
      case 24:
        return null;
      case 25:
        return null;
    }
    throw Error(F(156, r.tag));
  }
  function ry(n, r) {
    switch (Rc(r), r.tag) {
      case 1:
        return Un(r.type) && Ir(), n = r.flags, n & 65536 ? (r.flags = n & -65537 | 128, r) : null;
      case 3:
        return io(), Te(Qe), Te(Wn), Ua(), n = r.flags, n & 65536 && !(n & 128) ? (r.flags = n & -65537 | 128, r) : null;
      case 5:
        return Oe(r), null;
      case 13:
        if (Te(_e), n = r.memoizedState, n !== null && n.dehydrated !== null) {
          if (r.alternate === null)
            throw Error(F(340));
          Zu();
        }
        return n = r.flags, n & 65536 ? (r.flags = n & -65537 | 128, r) : null;
      case 19:
        return Te(_e), null;
      case 4:
        return io(), null;
      case 10:
        return md(r.type._context), null;
      case 22:
      case 23:
        return rf(), null;
      case 24:
        return null;
      default:
        return null;
    }
  }
  var po = !1, ir = !1, Wc = typeof WeakSet == "function" ? WeakSet : Set, de = null;
  function vo(n, r) {
    var l = n.ref;
    if (l !== null)
      if (typeof l == "function")
        try {
          l(null);
        } catch (o) {
          Rn(n, r, o);
        }
      else
        l.current = null;
  }
  function Dd(n, r, l) {
    try {
      l();
    } catch (o) {
      Rn(n, r, o);
    }
  }
  var Gc = !1;
  function ay(n, r) {
    if (id = Bu, n = ov(), os(n)) {
      if ("selectionStart" in n)
        var l = { start: n.selectionStart, end: n.selectionEnd };
      else
        e: {
          l = (l = n.ownerDocument) && l.defaultView || window;
          var o = l.getSelection && l.getSelection();
          if (o && o.rangeCount !== 0) {
            l = o.anchorNode;
            var c = o.anchorOffset, d = o.focusNode;
            o = o.focusOffset;
            try {
              l.nodeType, d.nodeType;
            } catch {
              l = null;
              break e;
            }
            var m = 0, E = -1, w = -1, U = 0, Q = 0, W = n, Y = null;
            t:
              for (; ; ) {
                for (var le; W !== l || c !== 0 && W.nodeType !== 3 || (E = m + c), W !== d || o !== 0 && W.nodeType !== 3 || (w = m + o), W.nodeType === 3 && (m += W.nodeValue.length), (le = W.firstChild) !== null; )
                  Y = W, W = le;
                for (; ; ) {
                  if (W === n)
                    break t;
                  if (Y === l && ++U === c && (E = m), Y === d && ++Q === o && (w = m), (le = W.nextSibling) !== null)
                    break;
                  W = Y, Y = W.parentNode;
                }
                W = le;
              }
            l = E === -1 || w === -1 ? null : { start: E, end: w };
          } else
            l = null;
        }
      l = l || { start: 0, end: 0 };
    } else
      l = null;
    for (ld = { focusedElem: n, selectionRange: l }, Bu = !1, de = r; de !== null; )
      if (r = de, n = r.child, (r.subtreeFlags & 1028) !== 0 && n !== null)
        n.return = r, de = n;
      else
        for (; de !== null; ) {
          r = de;
          try {
            var me = r.alternate;
            if (r.flags & 1024)
              switch (r.tag) {
                case 0:
                case 11:
                case 15:
                  break;
                case 1:
                  if (me !== null) {
                    var Ee = me.memoizedProps, On = me.memoizedState, D = r.stateNode, x = D.getSnapshotBeforeUpdate(r.elementType === r.type ? Ee : qr(r.type, Ee), On);
                    D.__reactInternalSnapshotBeforeUpdate = x;
                  }
                  break;
                case 3:
                  var L = r.stateNode.containerInfo;
                  L.nodeType === 1 ? L.textContent = "" : L.nodeType === 9 && L.documentElement && L.removeChild(L.documentElement);
                  break;
                case 5:
                case 6:
                case 4:
                case 17:
                  break;
                default:
                  throw Error(F(163));
              }
          } catch (X) {
            Rn(r, r.return, X);
          }
          if (n = r.sibling, n !== null) {
            n.return = r.return, de = n;
            break;
          }
          de = r.return;
        }
    return me = Gc, Gc = !1, me;
  }
  function ho(n, r, l) {
    var o = r.updateQueue;
    if (o = o !== null ? o.lastEffect : null, o !== null) {
      var c = o = o.next;
      do {
        if ((c.tag & n) === n) {
          var d = c.destroy;
          c.destroy = void 0, d !== void 0 && Dd(r, l, d);
        }
        c = c.next;
      } while (c !== o);
    }
  }
  function qc(n, r) {
    if (r = r.updateQueue, r = r !== null ? r.lastEffect : null, r !== null) {
      var l = r = r.next;
      do {
        if ((l.tag & n) === n) {
          var o = l.create;
          l.destroy = o();
        }
        l = l.next;
      } while (l !== r);
    }
  }
  function Xc(n) {
    var r = n.ref;
    if (r !== null) {
      var l = n.stateNode;
      switch (n.tag) {
        case 5:
          n = l;
          break;
        default:
          n = l;
      }
      typeof r == "function" ? r(n) : r.current = n;
    }
  }
  function Pv(n) {
    var r = n.alternate;
    r !== null && (n.alternate = null, Pv(r)), n.child = null, n.deletions = null, n.sibling = null, n.tag === 5 && (r = n.stateNode, r !== null && (delete r[Oa], delete r[gs], delete r[cd], delete r[qm], delete r[Xm])), n.stateNode = null, n.return = null, n.dependencies = null, n.memoizedProps = null, n.memoizedState = null, n.pendingProps = null, n.stateNode = null, n.updateQueue = null;
  }
  function kd(n) {
    return n.tag === 5 || n.tag === 3 || n.tag === 4;
  }
  function Bv(n) {
    e:
      for (; ; ) {
        for (; n.sibling === null; ) {
          if (n.return === null || kd(n.return))
            return null;
          n = n.return;
        }
        for (n.sibling.return = n.return, n = n.sibling; n.tag !== 5 && n.tag !== 6 && n.tag !== 18; ) {
          if (n.flags & 2 || n.child === null || n.tag === 4)
            continue e;
          n.child.return = n, n = n.child;
        }
        if (!(n.flags & 2))
          return n.stateNode;
      }
  }
  function Us(n, r, l) {
    var o = n.tag;
    if (o === 5 || o === 6)
      n = n.stateNode, r ? l.nodeType === 8 ? l.parentNode.insertBefore(n, r) : l.insertBefore(n, r) : (l.nodeType === 8 ? (r = l.parentNode, r.insertBefore(n, l)) : (r = l, r.appendChild(n)), l = l._reactRootContainer, l != null || r.onclick !== null || (r.onclick = gc));
    else if (o !== 4 && (n = n.child, n !== null))
      for (Us(n, r, l), n = n.sibling; n !== null; )
        Us(n, r, l), n = n.sibling;
  }
  function mo(n, r, l) {
    var o = n.tag;
    if (o === 5 || o === 6)
      n = n.stateNode, r ? l.insertBefore(n, r) : l.appendChild(n);
    else if (o !== 4 && (n = n.child, n !== null))
      for (mo(n, r, l), n = n.sibling; n !== null; )
        mo(n, r, l), n = n.sibling;
  }
  var un = null, Gn = !1;
  function br(n, r, l) {
    for (l = l.child; l !== null; )
      yo(n, r, l), l = l.sibling;
  }
  function yo(n, r, l) {
    if (Pr && typeof Pr.onCommitFiberUnmount == "function")
      try {
        Pr.onCommitFiberUnmount(dl, l);
      } catch {
      }
    switch (l.tag) {
      case 5:
        ir || vo(l, r);
      case 6:
        var o = un, c = Gn;
        un = null, br(n, r, l), un = o, Gn = c, un !== null && (Gn ? (n = un, l = l.stateNode, n.nodeType === 8 ? n.parentNode.removeChild(l) : n.removeChild(l)) : un.removeChild(l.stateNode));
        break;
      case 18:
        un !== null && (Gn ? (n = un, l = l.stateNode, n.nodeType === 8 ? sd(n.parentNode, l) : n.nodeType === 1 && sd(n, l), ka(n)) : sd(un, l.stateNode));
        break;
      case 4:
        o = un, c = Gn, un = l.stateNode.containerInfo, Gn = !0, br(n, r, l), un = o, Gn = c;
        break;
      case 0:
      case 11:
      case 14:
      case 15:
        if (!ir && (o = l.updateQueue, o !== null && (o = o.lastEffect, o !== null))) {
          c = o = o.next;
          do {
            var d = c, m = d.destroy;
            d = d.tag, m !== void 0 && (d & 2 || d & 4) && Dd(l, r, m), c = c.next;
          } while (c !== o);
        }
        br(n, r, l);
        break;
      case 1:
        if (!ir && (vo(l, r), o = l.stateNode, typeof o.componentWillUnmount == "function"))
          try {
            o.props = l.memoizedProps, o.state = l.memoizedState, o.componentWillUnmount();
          } catch (E) {
            Rn(l, r, E);
          }
        br(n, r, l);
        break;
      case 21:
        br(n, r, l);
        break;
      case 22:
        l.mode & 1 ? (ir = (o = ir) || l.memoizedState !== null, br(n, r, l), ir = o) : br(n, r, l);
        break;
      default:
        br(n, r, l);
    }
  }
  function go(n) {
    var r = n.updateQueue;
    if (r !== null) {
      n.updateQueue = null;
      var l = n.stateNode;
      l === null && (l = n.stateNode = new Wc()), r.forEach(function(o) {
        var c = fy.bind(null, n, o);
        l.has(o) || (l.add(o), o.then(c, c));
      });
    }
  }
  function qn(n, r) {
    var l = r.deletions;
    if (l !== null)
      for (var o = 0; o < l.length; o++) {
        var c = l[o];
        try {
          var d = n, m = r, E = m;
          e:
            for (; E !== null; ) {
              switch (E.tag) {
                case 5:
                  un = E.stateNode, Gn = !1;
                  break e;
                case 3:
                  un = E.stateNode.containerInfo, Gn = !0;
                  break e;
                case 4:
                  un = E.stateNode.containerInfo, Gn = !0;
                  break e;
              }
              E = E.return;
            }
          if (un === null)
            throw Error(F(160));
          yo(d, m, c), un = null, Gn = !1;
          var w = c.alternate;
          w !== null && (w.return = null), c.return = null;
        } catch (U) {
          Rn(c, r, U);
        }
      }
    if (r.subtreeFlags & 12854)
      for (r = r.child; r !== null; )
        $v(r, n), r = r.sibling;
  }
  function $v(n, r) {
    var l = n.alternate, o = n.flags;
    switch (n.tag) {
      case 0:
      case 11:
      case 14:
      case 15:
        if (qn(r, n), Ci(n), o & 4) {
          try {
            ho(3, n, n.return), qc(3, n);
          } catch (Ee) {
            Rn(n, n.return, Ee);
          }
          try {
            ho(5, n, n.return);
          } catch (Ee) {
            Rn(n, n.return, Ee);
          }
        }
        break;
      case 1:
        qn(r, n), Ci(n), o & 512 && l !== null && vo(l, l.return);
        break;
      case 5:
        if (qn(r, n), Ci(n), o & 512 && l !== null && vo(l, l.return), n.flags & 32) {
          var c = n.stateNode;
          try {
            ca(c, "");
          } catch (Ee) {
            Rn(n, n.return, Ee);
          }
        }
        if (o & 4 && (c = n.stateNode, c != null)) {
          var d = n.memoizedProps, m = l !== null ? l.memoizedProps : d, E = n.type, w = n.updateQueue;
          if (n.updateQueue = null, w !== null)
            try {
              E === "input" && d.type === "radio" && d.name != null && Hn(c, d), wn(E, m);
              var U = wn(E, d);
              for (m = 0; m < w.length; m += 2) {
                var Q = w[m], W = w[m + 1];
                Q === "style" ? Je(c, W) : Q === "dangerouslySetInnerHTML" ? sa(c, W) : Q === "children" ? ca(c, W) : rt(c, Q, W, U);
              }
              switch (E) {
                case "input":
                  Mn(c, d);
                  break;
                case "textarea":
                  mr(c, d);
                  break;
                case "select":
                  var Y = c._wrapperState.wasMultiple;
                  c._wrapperState.wasMultiple = !!d.multiple;
                  var le = d.value;
                  le != null ? Vn(c, !!d.multiple, le, !1) : Y !== !!d.multiple && (d.defaultValue != null ? Vn(
                    c,
                    !!d.multiple,
                    d.defaultValue,
                    !0
                  ) : Vn(c, !!d.multiple, d.multiple ? [] : "", !1));
              }
              c[gs] = d;
            } catch (Ee) {
              Rn(n, n.return, Ee);
            }
        }
        break;
      case 6:
        if (qn(r, n), Ci(n), o & 4) {
          if (n.stateNode === null)
            throw Error(F(162));
          c = n.stateNode, d = n.memoizedProps;
          try {
            c.nodeValue = d;
          } catch (Ee) {
            Rn(n, n.return, Ee);
          }
        }
        break;
      case 3:
        if (qn(r, n), Ci(n), o & 4 && l !== null && l.memoizedState.isDehydrated)
          try {
            ka(r.containerInfo);
          } catch (Ee) {
            Rn(n, n.return, Ee);
          }
        break;
      case 4:
        qn(r, n), Ci(n);
        break;
      case 13:
        qn(r, n), Ci(n), c = n.child, c.flags & 8192 && (d = c.memoizedState !== null, c.stateNode.isHidden = d, !d || c.alternate !== null && c.alternate.memoizedState !== null || (Zc = Gt())), o & 4 && go(n);
        break;
      case 22:
        if (Q = l !== null && l.memoizedState !== null, n.mode & 1 ? (ir = (U = ir) || Q, qn(r, n), ir = U) : qn(r, n), Ci(n), o & 8192) {
          if (U = n.memoizedState !== null, (n.stateNode.isHidden = U) && !Q && n.mode & 1)
            for (de = n, Q = n.child; Q !== null; ) {
              for (W = de = Q; de !== null; ) {
                switch (Y = de, le = Y.child, Y.tag) {
                  case 0:
                  case 11:
                  case 14:
                  case 15:
                    ho(4, Y, Y.return);
                    break;
                  case 1:
                    vo(Y, Y.return);
                    var me = Y.stateNode;
                    if (typeof me.componentWillUnmount == "function") {
                      o = Y, l = Y.return;
                      try {
                        r = o, me.props = r.memoizedProps, me.state = r.memoizedState, me.componentWillUnmount();
                      } catch (Ee) {
                        Rn(o, l, Ee);
                      }
                    }
                    break;
                  case 5:
                    vo(Y, Y.return);
                    break;
                  case 22:
                    if (Y.memoizedState !== null) {
                      Yv(W);
                      continue;
                    }
                }
                le !== null ? (le.return = Y, de = le) : Yv(W);
              }
              Q = Q.sibling;
            }
          e:
            for (Q = null, W = n; ; ) {
              if (W.tag === 5) {
                if (Q === null) {
                  Q = W;
                  try {
                    c = W.stateNode, U ? (d = c.style, typeof d.setProperty == "function" ? d.setProperty("display", "none", "important") : d.display = "none") : (E = W.stateNode, w = W.memoizedProps.style, m = w != null && w.hasOwnProperty("display") ? w.display : null, E.style.display = be("display", m));
                  } catch (Ee) {
                    Rn(n, n.return, Ee);
                  }
                }
              } else if (W.tag === 6) {
                if (Q === null)
                  try {
                    W.stateNode.nodeValue = U ? "" : W.memoizedProps;
                  } catch (Ee) {
                    Rn(n, n.return, Ee);
                  }
              } else if ((W.tag !== 22 && W.tag !== 23 || W.memoizedState === null || W === n) && W.child !== null) {
                W.child.return = W, W = W.child;
                continue;
              }
              if (W === n)
                break e;
              for (; W.sibling === null; ) {
                if (W.return === null || W.return === n)
                  break e;
                Q === W && (Q = null), W = W.return;
              }
              Q === W && (Q = null), W.sibling.return = W.return, W = W.sibling;
            }
        }
        break;
      case 19:
        qn(r, n), Ci(n), o & 4 && go(n);
        break;
      case 21:
        break;
      default:
        qn(
          r,
          n
        ), Ci(n);
    }
  }
  function Ci(n) {
    var r = n.flags;
    if (r & 2) {
      try {
        e: {
          for (var l = n.return; l !== null; ) {
            if (kd(l)) {
              var o = l;
              break e;
            }
            l = l.return;
          }
          throw Error(F(160));
        }
        switch (o.tag) {
          case 5:
            var c = o.stateNode;
            o.flags & 32 && (ca(c, ""), o.flags &= -33);
            var d = Bv(n);
            mo(n, d, c);
            break;
          case 3:
          case 4:
            var m = o.stateNode.containerInfo, E = Bv(n);
            Us(n, E, m);
            break;
          default:
            throw Error(F(161));
        }
      } catch (w) {
        Rn(n, n.return, w);
      }
      n.flags &= -3;
    }
    r & 4096 && (n.flags &= -4097);
  }
  function iy(n, r, l) {
    de = n, Od(n);
  }
  function Od(n, r, l) {
    for (var o = (n.mode & 1) !== 0; de !== null; ) {
      var c = de, d = c.child;
      if (c.tag === 22 && o) {
        var m = c.memoizedState !== null || po;
        if (!m) {
          var E = c.alternate, w = E !== null && E.memoizedState !== null || ir;
          E = po;
          var U = ir;
          if (po = m, (ir = w) && !U)
            for (de = c; de !== null; )
              m = de, w = m.child, m.tag === 22 && m.memoizedState !== null ? Ld(c) : w !== null ? (w.return = m, de = w) : Ld(c);
          for (; d !== null; )
            de = d, Od(d), d = d.sibling;
          de = c, po = E, ir = U;
        }
        So(n);
      } else
        c.subtreeFlags & 8772 && d !== null ? (d.return = c, de = d) : So(n);
    }
  }
  function So(n) {
    for (; de !== null; ) {
      var r = de;
      if (r.flags & 8772) {
        var l = r.alternate;
        try {
          if (r.flags & 8772)
            switch (r.tag) {
              case 0:
              case 11:
              case 15:
                ir || qc(5, r);
                break;
              case 1:
                var o = r.stateNode;
                if (r.flags & 4 && !ir)
                  if (l === null)
                    o.componentDidMount();
                  else {
                    var c = r.elementType === r.type ? l.memoizedProps : qr(r.type, l.memoizedProps);
                    o.componentDidUpdate(c, l.memoizedState, o.__reactInternalSnapshotBeforeUpdate);
                  }
                var d = r.updateQueue;
                d !== null && to(r, d, o);
                break;
              case 3:
                var m = r.updateQueue;
                if (m !== null) {
                  if (l = null, r.child !== null)
                    switch (r.child.tag) {
                      case 5:
                        l = r.child.stateNode;
                        break;
                      case 1:
                        l = r.child.stateNode;
                    }
                  to(r, m, l);
                }
                break;
              case 5:
                var E = r.stateNode;
                if (l === null && r.flags & 4) {
                  l = E;
                  var w = r.memoizedProps;
                  switch (r.type) {
                    case "button":
                    case "input":
                    case "select":
                    case "textarea":
                      w.autoFocus && l.focus();
                      break;
                    case "img":
                      w.src && (l.src = w.src);
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
                if (r.memoizedState === null) {
                  var U = r.alternate;
                  if (U !== null) {
                    var Q = U.memoizedState;
                    if (Q !== null) {
                      var W = Q.dehydrated;
                      W !== null && ka(W);
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
          ir || r.flags & 512 && Xc(r);
        } catch (Y) {
          Rn(r, r.return, Y);
        }
      }
      if (r === n) {
        de = null;
        break;
      }
      if (l = r.sibling, l !== null) {
        l.return = r.return, de = l;
        break;
      }
      de = r.return;
    }
  }
  function Yv(n) {
    for (; de !== null; ) {
      var r = de;
      if (r === n) {
        de = null;
        break;
      }
      var l = r.sibling;
      if (l !== null) {
        l.return = r.return, de = l;
        break;
      }
      de = r.return;
    }
  }
  function Ld(n) {
    for (; de !== null; ) {
      var r = de;
      try {
        switch (r.tag) {
          case 0:
          case 11:
          case 15:
            var l = r.return;
            try {
              qc(4, r);
            } catch (w) {
              Rn(r, l, w);
            }
            break;
          case 1:
            var o = r.stateNode;
            if (typeof o.componentDidMount == "function") {
              var c = r.return;
              try {
                o.componentDidMount();
              } catch (w) {
                Rn(r, c, w);
              }
            }
            var d = r.return;
            try {
              Xc(r);
            } catch (w) {
              Rn(r, d, w);
            }
            break;
          case 5:
            var m = r.return;
            try {
              Xc(r);
            } catch (w) {
              Rn(r, m, w);
            }
        }
      } catch (w) {
        Rn(r, r.return, w);
      }
      if (r === n) {
        de = null;
        break;
      }
      var E = r.sibling;
      if (E !== null) {
        E.return = r.return, de = E;
        break;
      }
      de = r.return;
    }
  }
  var ly = Math.ceil, Eu = He.ReactCurrentDispatcher, Kc = He.ReactCurrentOwner, ja = He.ReactCurrentBatchConfig, dt = 0, Cn = null, nn = null, Pn = 0, ea = 0, Eo = $t(0), Bn = 0, As = null, Cu = 0, Co = 0, Md = 0, zl = null, Rr = null, Zc = 0, Ro = 1 / 0, Xi = null, Jc = !1, Nd = null, Ha = null, To = !1, Va = null, ef = 0, Fs = 0, tf = null, js = -1, Ru = 0;
  function Xn() {
    return dt & 6 ? Gt() : js !== -1 ? js : js = Gt();
  }
  function Ki(n) {
    return n.mode & 1 ? dt & 2 && Pn !== 0 ? Pn & -Pn : Km.transition !== null ? (Ru === 0 && (Ru = Zl()), Ru) : (n = vt, n !== 0 || (n = window.event, n = n === void 0 ? 16 : es(n.type)), n) : 1;
  }
  function pn(n, r, l, o) {
    if (50 < Fs)
      throw Fs = 0, tf = null, Error(F(185));
    vl(n, l, o), (!(dt & 2) || n !== Cn) && (n === Cn && (!(dt & 2) && (Co |= l), Bn === 4 && Ri(n, Pn)), $n(n, o), l === 1 && dt === 0 && !(r.mode & 1) && (Ro = Gt() + 500, Tl && mi()));
  }
  function $n(n, r) {
    var l = n.callbackNode;
    pl(n, r);
    var o = ci(n, n === Cn ? Pn : 0);
    if (o === 0)
      l !== null && Wt(l), n.callbackNode = null, n.callbackPriority = 0;
    else if (r = o & -o, n.callbackPriority !== r) {
      if (l != null && Wt(l), r === 1)
        n.tag === 0 ? Cv(wo.bind(null, n)) : Ec(wo.bind(null, n)), Sv(function() {
          !(dt & 6) && mi();
        }), l = null;
      else {
        switch (Ko(o)) {
          case 1:
            l = Yo;
            break;
          case 4:
            l = si;
            break;
          case 16:
            l = et;
            break;
          case 536870912:
            l = Ni;
            break;
          default:
            l = et;
        }
        l = Zv(l, nf.bind(null, n));
      }
      n.callbackPriority = r, n.callbackNode = l;
    }
  }
  function nf(n, r) {
    if (js = -1, Ru = 0, dt & 6)
      throw Error(F(327));
    var l = n.callbackNode;
    if (_o() && n.callbackNode !== l)
      return null;
    var o = ci(n, n === Cn ? Pn : 0);
    if (o === 0)
      return null;
    if (o & 30 || o & n.expiredLanes || r)
      r = af(n, o);
    else {
      r = o;
      var c = dt;
      dt |= 2;
      var d = Qv();
      (Cn !== n || Pn !== r) && (Xi = null, Ro = Gt() + 500, wu(n, r));
      do
        try {
          oy();
          break;
        } catch (E) {
          Iv(n, E);
        }
      while (!0);
      hd(), Eu.current = d, dt = c, nn !== null ? r = 0 : (Cn = null, Pn = 0, r = Bn);
    }
    if (r !== 0) {
      if (r === 2 && (c = fi(n), c !== 0 && (o = c, r = Tu(n, c))), r === 1)
        throw l = As, wu(n, 0), Ri(n, o), $n(n, Gt()), l;
      if (r === 6)
        Ri(n, o);
      else {
        if (c = n.current.alternate, !(o & 30) && !Ud(c) && (r = af(n, o), r === 2 && (d = fi(n), d !== 0 && (o = d, r = Tu(n, d))), r === 1))
          throw l = As, wu(n, 0), Ri(n, o), $n(n, Gt()), l;
        switch (n.finishedWork = c, n.finishedLanes = o, r) {
          case 0:
          case 1:
            throw Error(F(345));
          case 2:
            Ul(n, Rr, Xi);
            break;
          case 3:
            if (Ri(n, o), (o & 130023424) === o && (r = Zc + 500 - Gt(), 10 < r)) {
              if (ci(n, 0) !== 0)
                break;
              if (c = n.suspendedLanes, (c & o) !== o) {
                Xn(), n.pingedLanes |= n.suspendedLanes & c;
                break;
              }
              n.timeoutHandle = hs(Ul.bind(null, n, Rr, Xi), r);
              break;
            }
            Ul(n, Rr, Xi);
            break;
          case 4:
            if (Ri(n, o), (o & 4194240) === o)
              break;
            for (r = n.eventTimes, c = -1; 0 < o; ) {
              var m = 31 - _r(o);
              d = 1 << m, m = r[m], m > c && (c = m), o &= ~d;
            }
            if (o = c, o = Gt() - o, o = (120 > o ? 120 : 480 > o ? 480 : 1080 > o ? 1080 : 1920 > o ? 1920 : 3e3 > o ? 3e3 : 4320 > o ? 4320 : 1960 * ly(o / 1960)) - o, 10 < o) {
              n.timeoutHandle = hs(Ul.bind(null, n, Rr, Xi), o);
              break;
            }
            Ul(n, Rr, Xi);
            break;
          case 5:
            Ul(n, Rr, Xi);
            break;
          default:
            throw Error(F(329));
        }
      }
    }
    return $n(n, Gt()), n.callbackNode === l ? nf.bind(null, n) : null;
  }
  function Tu(n, r) {
    var l = zl;
    return n.current.memoizedState.isDehydrated && (wu(n, r).flags |= 256), n = af(n, r), n !== 2 && (r = Rr, Rr = l, r !== null && zd(r)), n;
  }
  function zd(n) {
    Rr === null ? Rr = n : Rr.push.apply(Rr, n);
  }
  function Ud(n) {
    for (var r = n; ; ) {
      if (r.flags & 16384) {
        var l = r.updateQueue;
        if (l !== null && (l = l.stores, l !== null))
          for (var o = 0; o < l.length; o++) {
            var c = l[o], d = c.getSnapshot;
            c = c.value;
            try {
              if (!ti(d(), c))
                return !1;
            } catch {
              return !1;
            }
          }
      }
      if (l = r.child, r.subtreeFlags & 16384 && l !== null)
        l.return = r, r = l;
      else {
        if (r === n)
          break;
        for (; r.sibling === null; ) {
          if (r.return === null || r.return === n)
            return !0;
          r = r.return;
        }
        r.sibling.return = r.return, r = r.sibling;
      }
    }
    return !0;
  }
  function Ri(n, r) {
    for (r &= ~Md, r &= ~Co, n.suspendedLanes |= r, n.pingedLanes &= ~r, n = n.expirationTimes; 0 < r; ) {
      var l = 31 - _r(r), o = 1 << l;
      n[l] = -1, r &= ~o;
    }
  }
  function wo(n) {
    if (dt & 6)
      throw Error(F(327));
    _o();
    var r = ci(n, 0);
    if (!(r & 1))
      return $n(n, Gt()), null;
    var l = af(n, r);
    if (n.tag !== 0 && l === 2) {
      var o = fi(n);
      o !== 0 && (r = o, l = Tu(n, o));
    }
    if (l === 1)
      throw l = As, wu(n, 0), Ri(n, r), $n(n, Gt()), l;
    if (l === 6)
      throw Error(F(345));
    return n.finishedWork = n.current.alternate, n.finishedLanes = r, Ul(n, Rr, Xi), $n(n, Gt()), null;
  }
  function Ad(n, r) {
    var l = dt;
    dt |= 1;
    try {
      return n(r);
    } finally {
      dt = l, dt === 0 && (Ro = Gt() + 500, Tl && mi());
    }
  }
  function Ti(n) {
    Va !== null && Va.tag === 0 && !(dt & 6) && _o();
    var r = dt;
    dt |= 1;
    var l = ja.transition, o = vt;
    try {
      if (ja.transition = null, vt = 1, n)
        return n();
    } finally {
      vt = o, ja.transition = l, dt = r, !(dt & 6) && mi();
    }
  }
  function rf() {
    ea = Eo.current, Te(Eo);
  }
  function wu(n, r) {
    n.finishedWork = null, n.finishedLanes = 0;
    var l = n.timeoutHandle;
    if (l !== -1 && (n.timeoutHandle = -1, ms(l)), nn !== null)
      for (l = nn.return; l !== null; ) {
        var o = l;
        switch (Rc(o), o.tag) {
          case 1:
            o = o.type.childContextTypes, o != null && Ir();
            break;
          case 3:
            io(), Te(Qe), Te(Wn), Ua();
            break;
          case 5:
            Oe(o);
            break;
          case 4:
            io();
            break;
          case 13:
            Te(_e);
            break;
          case 19:
            Te(_e);
            break;
          case 10:
            md(o.type._context);
            break;
          case 22:
          case 23:
            rf();
        }
        l = l.return;
      }
    if (Cn = n, nn = n = Al(n.current, null), Pn = ea = r, Bn = 0, As = null, Md = Co = Cu = 0, Rr = zl = null, Er !== null) {
      for (r = 0; r < Er.length; r++)
        if (l = Er[r], o = l.interleaved, o !== null) {
          l.interleaved = null;
          var c = o.next, d = l.pending;
          if (d !== null) {
            var m = d.next;
            d.next = c, o.next = m;
          }
          l.pending = o;
        }
      Er = null;
    }
    return n;
  }
  function Iv(n, r) {
    do {
      var l = nn;
      try {
        if (hd(), ws.current = Pc, bn) {
          for (var o = dn.memoizedState; o !== null; ) {
            var c = o.queue;
            c !== null && (c.pending = null), o = o.next;
          }
          bn = !1;
        }
        if (fu = 0, V = xn = dn = null, ze = !1, Si = 0, Kc.current = null, l === null || l.return === null) {
          Bn = 1, As = r, nn = null;
          break;
        }
        e: {
          var d = n, m = l.return, E = l, w = r;
          if (r = Pn, E.flags |= 32768, w !== null && typeof w == "object" && typeof w.then == "function") {
            var U = w, Q = E, W = Q.tag;
            if (!(Q.mode & 1) && (W === 0 || W === 11 || W === 15)) {
              var Y = Q.alternate;
              Y ? (Q.updateQueue = Y.updateQueue, Q.memoizedState = Y.memoizedState, Q.lanes = Y.lanes) : (Q.updateQueue = null, Q.memoizedState = null);
            }
            var le = Av(m);
            if (le !== null) {
              le.flags &= -257, _d(le, m, E, d, r), le.mode & 1 && Ls(d, U, r), r = le, w = U;
              var me = r.updateQueue;
              if (me === null) {
                var Ee = /* @__PURE__ */ new Set();
                Ee.add(w), r.updateQueue = Ee;
              } else
                me.add(w);
              break e;
            } else {
              if (!(r & 1)) {
                Ls(d, U, r), Hs();
                break e;
              }
              w = Error(F(426));
            }
          } else if (tn && E.mode & 1) {
            var On = Av(m);
            if (On !== null) {
              !(On.flags & 65536) && (On.flags |= 256), _d(On, m, E, d, r), An(Ml(w, E));
              break e;
            }
          }
          d = w = Ml(w, E), Bn !== 4 && (Bn = 2), zl === null ? zl = [d] : zl.push(d), d = m;
          do {
            switch (d.tag) {
              case 3:
                d.flags |= 65536, r &= -r, d.lanes |= r;
                var D = zv(d, w, r);
                _v(d, D);
                break e;
              case 1:
                E = w;
                var x = d.type, L = d.stateNode;
                if (!(d.flags & 128) && (typeof x.getDerivedStateFromError == "function" || L !== null && typeof L.componentDidCatch == "function" && (Ha === null || !Ha.has(L)))) {
                  d.flags |= 65536, r &= -r, d.lanes |= r;
                  var X = Uv(d, E, r);
                  _v(d, X);
                  break e;
                }
            }
            d = d.return;
          } while (d !== null);
        }
        Gv(l);
      } catch (we) {
        r = we, nn === l && l !== null && (nn = l = l.return);
        continue;
      }
      break;
    } while (!0);
  }
  function Qv() {
    var n = Eu.current;
    return Eu.current = Pc, n === null ? Pc : n;
  }
  function Hs() {
    (Bn === 0 || Bn === 3 || Bn === 2) && (Bn = 4), Cn === null || !(Cu & 268435455) && !(Co & 268435455) || Ri(Cn, Pn);
  }
  function af(n, r) {
    var l = dt;
    dt |= 2;
    var o = Qv();
    (Cn !== n || Pn !== r) && (Xi = null, wu(n, r));
    do
      try {
        uy();
        break;
      } catch (c) {
        Iv(n, c);
      }
    while (!0);
    if (hd(), dt = l, Eu.current = o, nn !== null)
      throw Error(F(261));
    return Cn = null, Pn = 0, Bn;
  }
  function uy() {
    for (; nn !== null; )
      Wv(nn);
  }
  function oy() {
    for (; nn !== null && !gr(); )
      Wv(nn);
  }
  function Wv(n) {
    var r = Kv(n.alternate, n, ea);
    n.memoizedProps = n.pendingProps, r === null ? Gv(n) : nn = r, Kc.current = null;
  }
  function Gv(n) {
    var r = n;
    do {
      var l = r.alternate;
      if (n = r.return, r.flags & 32768) {
        if (l = ry(l, r), l !== null) {
          l.flags &= 32767, nn = l;
          return;
        }
        if (n !== null)
          n.flags |= 32768, n.subtreeFlags = 0, n.deletions = null;
        else {
          Bn = 6, nn = null;
          return;
        }
      } else if (l = ny(l, r, ea), l !== null) {
        nn = l;
        return;
      }
      if (r = r.sibling, r !== null) {
        nn = r;
        return;
      }
      nn = r = n;
    } while (r !== null);
    Bn === 0 && (Bn = 5);
  }
  function Ul(n, r, l) {
    var o = vt, c = ja.transition;
    try {
      ja.transition = null, vt = 1, sy(n, r, l, o);
    } finally {
      ja.transition = c, vt = o;
    }
    return null;
  }
  function sy(n, r, l, o) {
    do
      _o();
    while (Va !== null);
    if (dt & 6)
      throw Error(F(327));
    l = n.finishedWork;
    var c = n.finishedLanes;
    if (l === null)
      return null;
    if (n.finishedWork = null, n.finishedLanes = 0, l === n.current)
      throw Error(F(177));
    n.callbackNode = null, n.callbackPriority = 0;
    var d = l.lanes | l.childLanes;
    if (qo(n, d), n === Cn && (nn = Cn = null, Pn = 0), !(l.subtreeFlags & 2064) && !(l.flags & 2064) || To || (To = !0, Zv(et, function() {
      return _o(), null;
    })), d = (l.flags & 15990) !== 0, l.subtreeFlags & 15990 || d) {
      d = ja.transition, ja.transition = null;
      var m = vt;
      vt = 1;
      var E = dt;
      dt |= 4, Kc.current = null, ay(n, l), $v(l, n), ru(ld), Bu = !!id, ld = id = null, n.current = l, iy(l), oi(), dt = E, vt = m, ja.transition = d;
    } else
      n.current = l;
    if (To && (To = !1, Va = n, ef = c), d = n.pendingLanes, d === 0 && (Ha = null), Io(l.stateNode), $n(n, Gt()), r !== null)
      for (o = n.onRecoverableError, l = 0; l < r.length; l++)
        c = r[l], o(c.value, { componentStack: c.stack, digest: c.digest });
    if (Jc)
      throw Jc = !1, n = Nd, Nd = null, n;
    return ef & 1 && n.tag !== 0 && _o(), d = n.pendingLanes, d & 1 ? n === tf ? Fs++ : (Fs = 0, tf = n) : Fs = 0, mi(), null;
  }
  function _o() {
    if (Va !== null) {
      var n = Ko(ef), r = ja.transition, l = vt;
      try {
        if (ja.transition = null, vt = 16 > n ? 16 : n, Va === null)
          var o = !1;
        else {
          if (n = Va, Va = null, ef = 0, dt & 6)
            throw Error(F(331));
          var c = dt;
          for (dt |= 4, de = n.current; de !== null; ) {
            var d = de, m = d.child;
            if (de.flags & 16) {
              var E = d.deletions;
              if (E !== null) {
                for (var w = 0; w < E.length; w++) {
                  var U = E[w];
                  for (de = U; de !== null; ) {
                    var Q = de;
                    switch (Q.tag) {
                      case 0:
                      case 11:
                      case 15:
                        ho(8, Q, d);
                    }
                    var W = Q.child;
                    if (W !== null)
                      W.return = Q, de = W;
                    else
                      for (; de !== null; ) {
                        Q = de;
                        var Y = Q.sibling, le = Q.return;
                        if (Pv(Q), Q === U) {
                          de = null;
                          break;
                        }
                        if (Y !== null) {
                          Y.return = le, de = Y;
                          break;
                        }
                        de = le;
                      }
                  }
                }
                var me = d.alternate;
                if (me !== null) {
                  var Ee = me.child;
                  if (Ee !== null) {
                    me.child = null;
                    do {
                      var On = Ee.sibling;
                      Ee.sibling = null, Ee = On;
                    } while (Ee !== null);
                  }
                }
                de = d;
              }
            }
            if (d.subtreeFlags & 2064 && m !== null)
              m.return = d, de = m;
            else
              e:
                for (; de !== null; ) {
                  if (d = de, d.flags & 2048)
                    switch (d.tag) {
                      case 0:
                      case 11:
                      case 15:
                        ho(9, d, d.return);
                    }
                  var D = d.sibling;
                  if (D !== null) {
                    D.return = d.return, de = D;
                    break e;
                  }
                  de = d.return;
                }
          }
          var x = n.current;
          for (de = x; de !== null; ) {
            m = de;
            var L = m.child;
            if (m.subtreeFlags & 2064 && L !== null)
              L.return = m, de = L;
            else
              e:
                for (m = x; de !== null; ) {
                  if (E = de, E.flags & 2048)
                    try {
                      switch (E.tag) {
                        case 0:
                        case 11:
                        case 15:
                          qc(9, E);
                      }
                    } catch (we) {
                      Rn(E, E.return, we);
                    }
                  if (E === m) {
                    de = null;
                    break e;
                  }
                  var X = E.sibling;
                  if (X !== null) {
                    X.return = E.return, de = X;
                    break e;
                  }
                  de = E.return;
                }
          }
          if (dt = c, mi(), Pr && typeof Pr.onPostCommitFiberRoot == "function")
            try {
              Pr.onPostCommitFiberRoot(dl, n);
            } catch {
            }
          o = !0;
        }
        return o;
      } finally {
        vt = l, ja.transition = r;
      }
    }
    return !1;
  }
  function qv(n, r, l) {
    r = Ml(l, r), r = zv(n, r, 1), n = Dl(n, r, 1), r = Xn(), n !== null && (vl(n, 1, r), $n(n, r));
  }
  function Rn(n, r, l) {
    if (n.tag === 3)
      qv(n, n, l);
    else
      for (; r !== null; ) {
        if (r.tag === 3) {
          qv(r, n, l);
          break;
        } else if (r.tag === 1) {
          var o = r.stateNode;
          if (typeof r.type.getDerivedStateFromError == "function" || typeof o.componentDidCatch == "function" && (Ha === null || !Ha.has(o))) {
            n = Ml(l, n), n = Uv(r, n, 1), r = Dl(r, n, 1), n = Xn(), r !== null && (vl(r, 1, n), $n(r, n));
            break;
          }
        }
        r = r.return;
      }
  }
  function cy(n, r, l) {
    var o = n.pingCache;
    o !== null && o.delete(r), r = Xn(), n.pingedLanes |= n.suspendedLanes & l, Cn === n && (Pn & l) === l && (Bn === 4 || Bn === 3 && (Pn & 130023424) === Pn && 500 > Gt() - Zc ? wu(n, 0) : Md |= l), $n(n, r);
  }
  function Xv(n, r) {
    r === 0 && (n.mode & 1 ? (r = ju, ju <<= 1, !(ju & 130023424) && (ju = 4194304)) : r = 1);
    var l = Xn();
    n = Wi(n, r), n !== null && (vl(n, r, l), $n(n, l));
  }
  function Fd(n) {
    var r = n.memoizedState, l = 0;
    r !== null && (l = r.retryLane), Xv(n, l);
  }
  function fy(n, r) {
    var l = 0;
    switch (n.tag) {
      case 13:
        var o = n.stateNode, c = n.memoizedState;
        c !== null && (l = c.retryLane);
        break;
      case 19:
        o = n.stateNode;
        break;
      default:
        throw Error(F(314));
    }
    o !== null && o.delete(r), Xv(n, l);
  }
  var Kv;
  Kv = function(n, r, l) {
    if (n !== null)
      if (n.memoizedProps !== r.pendingProps || Qe.current)
        Zr = !0;
      else {
        if (!(n.lanes & l) && !(r.flags & 128))
          return Zr = !1, qi(n, r, l);
        Zr = !!(n.flags & 131072);
      }
    else
      Zr = !1, tn && r.flags & 1048576 && _l(r, ou, r.index);
    switch (r.lanes = 0, r.tag) {
      case 2:
        var o = r.type;
        zs(n, r), n = r.pendingProps;
        var c = ha(r, Wn.current);
        _n(r, l), c = du(null, r, o, n, c, l);
        var d = Ol();
        return r.flags |= 1, typeof c == "object" && c !== null && typeof c.render == "function" && c.$$typeof === void 0 ? (r.tag = 1, r.memoizedState = null, r.updateQueue = null, Un(o) ? (d = !0, uu(r)) : d = !1, r.memoizedState = c.state !== null && c.state !== void 0 ? c.state : null, yd(r), c.updater = xc, r.stateNode = c, c._reactInternals = r, Sd(r, o, n, l), r = $c(null, r, o, !0, d, l)) : (r.tag = 0, tn && d && Cc(r), Dn(null, r, c, l), r = r.child), r;
      case 16:
        o = r.elementType;
        e: {
          switch (zs(n, r), n = r.pendingProps, c = o._init, o = c(o._payload), r.type = o, c = r.tag = dy(o), n = qr(o, n), c) {
            case 0:
              r = qe(null, r, o, n, l);
              break e;
            case 1:
              r = Ms(null, r, o, n, l);
              break e;
            case 11:
              r = so(null, r, o, n, l);
              break e;
            case 14:
              r = Nl(null, r, o, qr(o.type, n), l);
              break e;
          }
          throw Error(F(
            306,
            o,
            ""
          ));
        }
        return r;
      case 0:
        return o = r.type, c = r.pendingProps, c = r.elementType === o ? c : qr(o, c), qe(n, r, o, c, l);
      case 1:
        return o = r.type, c = r.pendingProps, c = r.elementType === o ? c : qr(o, c), Ms(n, r, o, c, l);
      case 3:
        e: {
          if (ty(r), n === null)
            throw Error(F(387));
          o = r.pendingProps, d = r.memoizedState, c = d.element, wv(n, r), Es(r, o, null, l);
          var m = r.memoizedState;
          if (o = m.element, d.isDehydrated)
            if (d = { element: o, isDehydrated: !1, cache: m.cache, pendingSuspenseBoundaries: m.pendingSuspenseBoundaries, transitions: m.transitions }, r.updateQueue.baseState = d, r.memoizedState = d, r.flags & 256) {
              c = Ml(Error(F(423)), r), r = jv(n, r, o, l, c);
              break e;
            } else if (o !== c) {
              c = Ml(Error(F(424)), r), r = jv(n, r, o, l, c);
              break e;
            } else
              for (ya = va(r.stateNode.containerInfo.firstChild), ma = r, tn = !0, za = null, l = Lv(r, null, o, l), r.child = l; l; )
                l.flags = l.flags & -3 | 4096, l = l.sibling;
          else {
            if (Zu(), o === c) {
              r = kn(n, r, l);
              break e;
            }
            Dn(n, r, o, l);
          }
          r = r.child;
        }
        return r;
      case 5:
        return bc(r), n === null && Tc(r), o = r.type, c = r.pendingProps, d = n !== null ? n.memoizedProps : null, m = c.children, lu(o, c) ? m = null : d !== null && lu(o, d) && (r.flags |= 32), gu(n, r), Dn(n, r, m, l), r.child;
      case 6:
        return n === null && Tc(r), null;
      case 13:
        return Hv(n, r, l);
      case 4:
        return Ed(r, r.stateNode.containerInfo), o = r.pendingProps, n === null ? r.child = ro(r, null, o, l) : Dn(n, r, o, l), r.child;
      case 11:
        return o = r.type, c = r.pendingProps, c = r.elementType === o ? c : qr(o, c), so(n, r, o, c, l);
      case 7:
        return Dn(n, r, r.pendingProps, l), r.child;
      case 8:
        return Dn(n, r, r.pendingProps.children, l), r.child;
      case 12:
        return Dn(n, r, r.pendingProps.children, l), r.child;
      case 10:
        e: {
          if (o = r.type._context, c = r.pendingProps, d = r.memoizedProps, m = c.value, bt(Ju, o._currentValue), o._currentValue = m, d !== null)
            if (ti(d.value, m)) {
              if (d.children === c.children && !Qe.current) {
                r = kn(n, r, l);
                break e;
              }
            } else
              for (d = r.child, d !== null && (d.return = r); d !== null; ) {
                var E = d.dependencies;
                if (E !== null) {
                  m = d.child;
                  for (var w = E.firstContext; w !== null; ) {
                    if (w.context === o) {
                      if (d.tag === 1) {
                        w = qt(-1, l & -l), w.tag = 2;
                        var U = d.updateQueue;
                        if (U !== null) {
                          U = U.shared;
                          var Q = U.pending;
                          Q === null ? w.next = w : (w.next = Q.next, Q.next = w), U.pending = w;
                        }
                      }
                      d.lanes |= l, w = d.alternate, w !== null && (w.lanes |= l), xl(
                        d.return,
                        l,
                        r
                      ), E.lanes |= l;
                      break;
                    }
                    w = w.next;
                  }
                } else if (d.tag === 10)
                  m = d.type === r.type ? null : d.child;
                else if (d.tag === 18) {
                  if (m = d.return, m === null)
                    throw Error(F(341));
                  m.lanes |= l, E = m.alternate, E !== null && (E.lanes |= l), xl(m, l, r), m = d.sibling;
                } else
                  m = d.child;
                if (m !== null)
                  m.return = d;
                else
                  for (m = d; m !== null; ) {
                    if (m === r) {
                      m = null;
                      break;
                    }
                    if (d = m.sibling, d !== null) {
                      d.return = m.return, m = d;
                      break;
                    }
                    m = m.return;
                  }
                d = m;
              }
          Dn(n, r, c.children, l), r = r.child;
        }
        return r;
      case 9:
        return c = r.type, o = r.pendingProps.children, _n(r, l), c = K(c), o = o(c), r.flags |= 1, Dn(n, r, o, l), r.child;
      case 14:
        return o = r.type, c = qr(o, r.pendingProps), c = qr(o.type, c), Nl(n, r, o, c, l);
      case 15:
        return Bc(n, r, r.type, r.pendingProps, l);
      case 17:
        return o = r.type, c = r.pendingProps, c = r.elementType === o ? c : qr(o, c), zs(n, r), r.tag = 1, Un(o) ? (n = !0, uu(r)) : n = !1, _n(r, l), bv(r, o, c), Sd(r, o, c, l), $c(null, r, o, !0, n, l);
      case 19:
        return bd(n, r, l);
      case 22:
        return Jr(n, r, l);
    }
    throw Error(F(156, r.tag));
  };
  function Zv(n, r) {
    return Qt(n, r);
  }
  function Jv(n, r, l, o) {
    this.tag = n, this.key = l, this.sibling = this.child = this.return = this.stateNode = this.type = this.elementType = null, this.index = 0, this.ref = null, this.pendingProps = r, this.dependencies = this.memoizedState = this.updateQueue = this.memoizedProps = null, this.mode = o, this.subtreeFlags = this.flags = 0, this.deletions = null, this.childLanes = this.lanes = 0, this.alternate = null;
  }
  function Pa(n, r, l, o) {
    return new Jv(n, r, l, o);
  }
  function jd(n) {
    return n = n.prototype, !(!n || !n.isReactComponent);
  }
  function dy(n) {
    if (typeof n == "function")
      return jd(n) ? 1 : 0;
    if (n != null) {
      if (n = n.$$typeof, n === ht)
        return 11;
      if (n === Xe)
        return 14;
    }
    return 2;
  }
  function Al(n, r) {
    var l = n.alternate;
    return l === null ? (l = Pa(n.tag, r, n.key, n.mode), l.elementType = n.elementType, l.type = n.type, l.stateNode = n.stateNode, l.alternate = n, n.alternate = l) : (l.pendingProps = r, l.type = n.type, l.flags = 0, l.subtreeFlags = 0, l.deletions = null), l.flags = n.flags & 14680064, l.childLanes = n.childLanes, l.lanes = n.lanes, l.child = n.child, l.memoizedProps = n.memoizedProps, l.memoizedState = n.memoizedState, l.updateQueue = n.updateQueue, r = n.dependencies, l.dependencies = r === null ? null : { lanes: r.lanes, firstContext: r.firstContext }, l.sibling = n.sibling, l.index = n.index, l.ref = n.ref, l;
  }
  function lf(n, r, l, o, c, d) {
    var m = 2;
    if (o = n, typeof n == "function")
      jd(n) && (m = 1);
    else if (typeof n == "string")
      m = 5;
    else
      e:
        switch (n) {
          case ut:
            return _u(l.children, c, d, r);
          case $e:
            m = 8, c |= 8;
            break;
          case Tn:
            return n = Pa(12, l, r, c | 2), n.elementType = Tn, n.lanes = d, n;
          case Kt:
            return n = Pa(13, l, r, c), n.elementType = Kt, n.lanes = d, n;
          case Pe:
            return n = Pa(19, l, r, c), n.elementType = Pe, n.lanes = d, n;
          case Ke:
            return uf(l, c, d, r);
          default:
            if (typeof n == "object" && n !== null)
              switch (n.$$typeof) {
                case hn:
                  m = 10;
                  break e;
                case Yt:
                  m = 9;
                  break e;
                case ht:
                  m = 11;
                  break e;
                case Xe:
                  m = 14;
                  break e;
                case Et:
                  m = 16, o = null;
                  break e;
              }
            throw Error(F(130, n == null ? n : typeof n, ""));
        }
    return r = Pa(m, l, r, c), r.elementType = n, r.type = o, r.lanes = d, r;
  }
  function _u(n, r, l, o) {
    return n = Pa(7, n, o, r), n.lanes = l, n;
  }
  function uf(n, r, l, o) {
    return n = Pa(22, n, o, r), n.elementType = Ke, n.lanes = l, n.stateNode = { isHidden: !1 }, n;
  }
  function of(n, r, l) {
    return n = Pa(6, n, null, r), n.lanes = l, n;
  }
  function Vs(n, r, l) {
    return r = Pa(4, n.children !== null ? n.children : [], n.key, r), r.lanes = l, r.stateNode = { containerInfo: n.containerInfo, pendingChildren: null, implementation: n.implementation }, r;
  }
  function Ps(n, r, l, o, c) {
    this.tag = r, this.containerInfo = n, this.finishedWork = this.pingCache = this.current = this.pendingChildren = null, this.timeoutHandle = -1, this.callbackNode = this.pendingContext = this.context = null, this.callbackPriority = 0, this.eventTimes = Jl(0), this.expirationTimes = Jl(-1), this.entangledLanes = this.finishedLanes = this.mutableReadLanes = this.expiredLanes = this.pingedLanes = this.suspendedLanes = this.pendingLanes = 0, this.entanglements = Jl(0), this.identifierPrefix = o, this.onRecoverableError = c, this.mutableSourceEagerHydrationData = null;
  }
  function Hd(n, r, l, o, c, d, m, E, w) {
    return n = new Ps(n, r, l, E, w), r === 1 ? (r = 1, d === !0 && (r |= 8)) : r = 0, d = Pa(3, null, null, r), n.current = d, d.stateNode = n, d.memoizedState = { element: o, isDehydrated: l, cache: null, transitions: null, pendingSuspenseBoundaries: null }, yd(d), n;
  }
  function eh(n, r, l) {
    var o = 3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
    return { $$typeof: Re, key: o == null ? null : "" + o, children: n, containerInfo: r, implementation: l };
  }
  function Vd(n) {
    if (!n)
      return La;
    n = n._reactInternals;
    e: {
      if (re(n) !== n || n.tag !== 1)
        throw Error(F(170));
      var r = n;
      do {
        switch (r.tag) {
          case 3:
            r = r.stateNode.context;
            break e;
          case 1:
            if (Un(r.type)) {
              r = r.stateNode.__reactInternalMemoizedMergedChildContext;
              break e;
            }
        }
        r = r.return;
      } while (r !== null);
      throw Error(F(171));
    }
    if (n.tag === 1) {
      var l = n.type;
      if (Un(l))
        return Rl(n, l, r);
    }
    return r;
  }
  function Pd(n, r, l, o, c, d, m, E, w) {
    return n = Hd(l, o, !0, n, c, d, m, E, w), n.context = Vd(null), l = n.current, o = Xn(), c = Ki(l), d = qt(o, c), d.callback = r ?? null, Dl(l, d, c), n.current.lanes = c, vl(n, c, o), $n(n, o), n;
  }
  function sf(n, r, l, o) {
    var c = r.current, d = Xn(), m = Ki(c);
    return l = Vd(l), r.context === null ? r.context = l : r.pendingContext = l, r = qt(d, m), r.payload = { element: n }, o = o === void 0 ? null : o, o !== null && (r.callback = o), n = Dl(c, r, m), n !== null && (pn(n, c, m, d), _c(n, c, m)), m;
  }
  function Bs(n) {
    if (n = n.current, !n.child)
      return null;
    switch (n.child.tag) {
      case 5:
        return n.child.stateNode;
      default:
        return n.child.stateNode;
    }
  }
  function th(n, r) {
    if (n = n.memoizedState, n !== null && n.dehydrated !== null) {
      var l = n.retryLane;
      n.retryLane = l !== 0 && l < r ? l : r;
    }
  }
  function Bd(n, r) {
    th(n, r), (n = n.alternate) && th(n, r);
  }
  function py() {
    return null;
  }
  var $d = typeof reportError == "function" ? reportError : function(n) {
    console.error(n);
  };
  function cf(n) {
    this._internalRoot = n;
  }
  $s.prototype.render = cf.prototype.render = function(n) {
    var r = this._internalRoot;
    if (r === null)
      throw Error(F(409));
    sf(n, r, null, null);
  }, $s.prototype.unmount = cf.prototype.unmount = function() {
    var n = this._internalRoot;
    if (n !== null) {
      this._internalRoot = null;
      var r = n.containerInfo;
      Ti(function() {
        sf(null, n, null, null);
      }), r[ni] = null;
    }
  };
  function $s(n) {
    this._internalRoot = n;
  }
  $s.prototype.unstable_scheduleHydration = function(n) {
    if (n) {
      var r = Ct();
      n = { blockedOn: null, target: n, priority: r };
      for (var l = 0; l < Jt.length && r !== 0 && r < Jt[l].priority; l++)
        ;
      Jt.splice(l, 0, n), l === 0 && Ja(n);
    }
  };
  function Fl(n) {
    return !(!n || n.nodeType !== 1 && n.nodeType !== 9 && n.nodeType !== 11);
  }
  function ff(n) {
    return !(!n || n.nodeType !== 1 && n.nodeType !== 9 && n.nodeType !== 11 && (n.nodeType !== 8 || n.nodeValue !== " react-mount-point-unstable "));
  }
  function nh() {
  }
  function vy(n, r, l, o, c) {
    if (c) {
      if (typeof o == "function") {
        var d = o;
        o = function() {
          var U = Bs(m);
          d.call(U);
        };
      }
      var m = Pd(r, o, n, 0, null, !1, !1, "", nh);
      return n._reactRootContainer = m, n[ni] = m.current, pi(n.nodeType === 8 ? n.parentNode : n), Ti(), m;
    }
    for (; c = n.lastChild; )
      n.removeChild(c);
    if (typeof o == "function") {
      var E = o;
      o = function() {
        var U = Bs(w);
        E.call(U);
      };
    }
    var w = Hd(n, 0, !1, null, null, !1, !1, "", nh);
    return n._reactRootContainer = w, n[ni] = w.current, pi(n.nodeType === 8 ? n.parentNode : n), Ti(function() {
      sf(r, w, l, o);
    }), w;
  }
  function df(n, r, l, o, c) {
    var d = l._reactRootContainer;
    if (d) {
      var m = d;
      if (typeof c == "function") {
        var E = c;
        c = function() {
          var w = Bs(m);
          E.call(w);
        };
      }
      sf(r, m, n, c);
    } else
      m = vy(l, r, n, c, o);
    return Bs(m);
  }
  Hu = function(n) {
    switch (n.tag) {
      case 3:
        var r = n.stateNode;
        if (r.current.memoizedState.isDehydrated) {
          var l = zi(r.pendingLanes);
          l !== 0 && (Xo(r, l | 1), $n(r, Gt()), !(dt & 6) && (Ro = Gt() + 500, mi()));
        }
        break;
      case 13:
        Ti(function() {
          var o = Wi(n, 1);
          if (o !== null) {
            var c = Xn();
            pn(o, n, 1, c);
          }
        }), Bd(n, 1);
    }
  }, hl = function(n) {
    if (n.tag === 13) {
      var r = Wi(n, 134217728);
      if (r !== null) {
        var l = Xn();
        pn(r, n, 134217728, l);
      }
      Bd(n, 134217728);
    }
  }, Zo = function(n) {
    if (n.tag === 13) {
      var r = Ki(n), l = Wi(n, r);
      if (l !== null) {
        var o = Xn();
        pn(l, n, r, o);
      }
      Bd(n, r);
    }
  }, Ct = function() {
    return vt;
  }, Vu = function(n, r) {
    var l = vt;
    try {
      return vt = n, r();
    } finally {
      vt = l;
    }
  }, At = function(n, r, l) {
    switch (r) {
      case "input":
        if (Mn(n, l), r = l.name, l.type === "radio" && r != null) {
          for (l = n; l.parentNode; )
            l = l.parentNode;
          for (l = l.querySelectorAll("input[name=" + JSON.stringify("" + r) + '][type="radio"]'), r = 0; r < l.length; r++) {
            var o = l[r];
            if (o !== n && o.form === n.form) {
              var c = Sc(o);
              if (!c)
                throw Error(F(90));
              Fr(o), Mn(o, c);
            }
          }
        }
        break;
      case "textarea":
        mr(n, l);
        break;
      case "select":
        r = l.value, r != null && Vn(n, !!l.multiple, r, !1);
    }
  }, cl = Ad, Gl = Ti;
  var hy = { usingClientEntryPoint: !1, Events: [vi, Ku, Sc, qa, _a, Ad] }, Ys = { findFiberByHostInstance: Ii, bundleType: 0, version: "18.2.0", rendererPackageName: "react-dom" }, rh = { bundleType: Ys.bundleType, version: Ys.version, rendererPackageName: Ys.rendererPackageName, rendererConfig: Ys.rendererConfig, overrideHookState: null, overrideHookStateDeletePath: null, overrideHookStateRenamePath: null, overrideProps: null, overridePropsDeletePath: null, overridePropsRenamePath: null, setErrorHandler: null, setSuspenseHandler: null, scheduleUpdate: null, currentDispatcherRef: He.ReactCurrentDispatcher, findHostInstanceByFiber: function(n) {
    return n = De(n), n === null ? null : n.stateNode;
  }, findFiberByHostInstance: Ys.findFiberByHostInstance || py, findHostInstancesForRefresh: null, scheduleRefresh: null, scheduleRoot: null, setRefreshHandler: null, getCurrentFiber: null, reconcilerVersion: "18.2.0-next-9e3b772b8-20220608" };
  if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u") {
    var pf = __REACT_DEVTOOLS_GLOBAL_HOOK__;
    if (!pf.isDisabled && pf.supportsFiber)
      try {
        dl = pf.inject(rh), Pr = pf;
      } catch {
      }
  }
  return Ga.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = hy, Ga.createPortal = function(n, r) {
    var l = 2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
    if (!Fl(r))
      throw Error(F(200));
    return eh(n, r, null, l);
  }, Ga.createRoot = function(n, r) {
    if (!Fl(n))
      throw Error(F(299));
    var l = !1, o = "", c = $d;
    return r != null && (r.unstable_strictMode === !0 && (l = !0), r.identifierPrefix !== void 0 && (o = r.identifierPrefix), r.onRecoverableError !== void 0 && (c = r.onRecoverableError)), r = Hd(n, 1, !1, null, null, l, !1, o, c), n[ni] = r.current, pi(n.nodeType === 8 ? n.parentNode : n), new cf(r);
  }, Ga.findDOMNode = function(n) {
    if (n == null)
      return null;
    if (n.nodeType === 1)
      return n;
    var r = n._reactInternals;
    if (r === void 0)
      throw typeof n.render == "function" ? Error(F(188)) : (n = Object.keys(n).join(","), Error(F(268, n)));
    return n = De(r), n = n === null ? null : n.stateNode, n;
  }, Ga.flushSync = function(n) {
    return Ti(n);
  }, Ga.hydrate = function(n, r, l) {
    if (!ff(r))
      throw Error(F(200));
    return df(null, n, r, !0, l);
  }, Ga.hydrateRoot = function(n, r, l) {
    if (!Fl(n))
      throw Error(F(405));
    var o = l != null && l.hydratedSources || null, c = !1, d = "", m = $d;
    if (l != null && (l.unstable_strictMode === !0 && (c = !0), l.identifierPrefix !== void 0 && (d = l.identifierPrefix), l.onRecoverableError !== void 0 && (m = l.onRecoverableError)), r = Pd(r, null, n, 1, l ?? null, c, !1, d, m), n[ni] = r.current, pi(n), o)
      for (n = 0; n < o.length; n++)
        l = o[n], c = l._getVersion, c = c(l._source), r.mutableSourceEagerHydrationData == null ? r.mutableSourceEagerHydrationData = [l, c] : r.mutableSourceEagerHydrationData.push(
          l,
          c
        );
    return new $s(r);
  }, Ga.render = function(n, r, l) {
    if (!ff(r))
      throw Error(F(200));
    return df(null, n, r, !1, l);
  }, Ga.unmountComponentAtNode = function(n) {
    if (!ff(n))
      throw Error(F(40));
    return n._reactRootContainer ? (Ti(function() {
      df(null, null, n, !1, function() {
        n._reactRootContainer = null, n[ni] = null;
      });
    }), !0) : !1;
  }, Ga.unstable_batchedUpdates = Ad, Ga.unstable_renderSubtreeIntoContainer = function(n, r, l, o) {
    if (!ff(l))
      throw Error(F(200));
    if (n == null || n._reactInternals === void 0)
      throw Error(F(38));
    return df(n, r, l, !1, o);
  }, Ga.version = "18.2.0-next-9e3b772b8-20220608", Ga;
}
var iR = { mode: "production", command: "build", isSsrBuild: !1, isPreview: !1 };
function lR() {
  if (!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" || typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function")) {
    if (iR !== "production")
      throw new Error("^_^");
    try {
      __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(lR);
    } catch (Z) {
      console.error(Z);
    }
  }
}
iR === "production" ? (lR(), d0.exports = iD()) : d0.exports = aD();
var lD = d0.exports, p0, uD = { mode: "production", command: "build", isSsrBuild: !1, isPreview: !1 }, Um = lD;
if (uD === "production")
  p0 = Um.createRoot, Um.hydrateRoot;
else {
  var rR = Um.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
  p0 = function(Z, pe) {
    rR.usingClientEntryPoint = !0;
    try {
      return Um.createRoot(Z, pe);
    } finally {
      rR.usingClientEntryPoint = !1;
    }
  };
}
function oD() {
  return /* @__PURE__ */ f0.jsx("div", { className: "App", children: "Hello WORK!" });
}
const sD = document.getElementById("work-root"), cD = p0(sD);
cD.render(
  /* @__PURE__ */ f0.jsx(Zb.StrictMode, { children: /* @__PURE__ */ f0.jsx(oD, {}) })
);
