webpackHotUpdate_N_E("pages/index",{

/***/ "./components/content.js":
/*!*******************************!*\
  !*** ./components/content.js ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/asyncToGenerator */ "./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js");
/* harmony import */ var _babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/esm/createClass */ "./node_modules/@babel/runtime/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime/helpers/esm/assertThisInitialized */ "./node_modules/@babel/runtime/helpers/esm/assertThisInitialized.js");
/* harmony import */ var _babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime/helpers/esm/inherits */ "./node_modules/@babel/runtime/helpers/esm/inherits.js");
/* harmony import */ var _babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @babel/runtime/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @babel/runtime/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @babel/runtime/helpers/esm/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! classnames */ "./node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var _styles_utils_module_css__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../styles/utils.module.css */ "./styles/utils.module.css");
/* harmony import */ var _styles_utils_module_css__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(_styles_utils_module_css__WEBPACK_IMPORTED_MODULE_11__);









var _jsxFileName = "D:\\Desktop\\urlencoder\\components\\content.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement;

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = Object(_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_7__["default"])(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = Object(_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_7__["default"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return Object(_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_6__["default"])(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

 // import globalStyles from "../styles/bootstrap.module.css";



var App = /*#__PURE__*/function (_React$Component) {
  Object(_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_5__["default"])(App, _React$Component);

  var _super = _createSuper(App);

  function App() {
    var _this;

    Object(_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_2__["default"])(this, App);

    _this = _super.call(this);

    Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_8__["default"])(Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__["default"])(_this), "handleSvgChange", function (e) {
      e.preventDefault();
      var value = e.target.value;
      console.log(value); // make sure you are receiving the the value

      var encodeAll = value.replace(/[\r\n%#()<>?[\\\]^`{|}]/g, encodeURIComponent); // const decodeAll = decodeURIComponent(encodeAll);

      var base64Data = encodeAll.replace(/"/g, "'");
      var xlmns = "xmlns='http://www.w3.org/2000/svg'";
      var regex = "(xmlns=[\\'\"]https?:\\/\\/www.w3.org\\/2000\\/svg[\\'\"][^s])";
      console.log(value.match(regex));
      value.match(regex) ? console.log("the input contains xlmns") : console.log("the input do not contain xlmns");
      var base64added = "data:image/svg+xml,".concat(base64Data);
      var base64adde = "background-image: url(\"data:image/svg+xml,".concat(base64Data, "\")");
      console.log(base64adde);

      _this.setState({
        svgPasted: value,
        base64: base64added
      });
    });

    Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_8__["default"])(Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__["default"])(_this), "copyToClipBoard", /*#__PURE__*/Object(_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__["default"])( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee() {
      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              _context.prev = 0;
              _context.next = 3;
              return navigator.clipboard.writeText(_this.state.base64);

            case 3:
              _this.setState({
                copySuccess: "Copied!"
              });

              _context.next = 9;
              break;

            case 6:
              _context.prev = 6;
              _context.t0 = _context["catch"](0);

              _this.setState({
                copySuccess: "Failed to copy!"
              });

            case 9:
            case "end":
              return _context.stop();
          }
        }
      }, _callee, null, [[0, 6]]);
    })));

    Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_8__["default"])(Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__["default"])(_this), "handleFocus", function (event) {
      return event.target.select();
    });

    _this.state = {
      svgPasted: '<svg width="50" height="44" viewBox="0 0 50 44" fill="none" xmlns="http://www.w3.org/2000/svg"> <path fillRule="evenodd" clipRule="evenodd" d="M30.3067 1.12869C31.9695 0.43479 33.7518 0.0776367 35.5516 0.0776367C37.3515 0.0776367 39.1338 0.43479 40.7966 1.12869C42.4591 1.82247 43.9696 2.83928 45.2418 4.12105C46.5145 5.4024 47.5248 6.9244 48.2137 8.59877C48.9026 10.2734 49.2573 12.0684 49.2573 13.8812C49.2573 15.6939 48.9026 17.4889 48.2137 19.1636C47.5247 20.8381 46.515 22.3595 45.2422 23.6409C45.2421 23.641 45.2423 23.6408 45.2422 23.6409L26.6078 42.4084C25.7846 43.2375 24.4499 43.2375 23.6266 42.4084L4.99223 23.6409C2.42213 21.0525 0.978271 17.5418 0.978271 13.8812C0.978271 10.2205 2.42213 6.70985 4.99223 4.1214C7.56232 1.53295 11.0481 0.0787721 14.6828 0.0787721C18.3174 0.0787721 21.8032 1.53295 24.3733 4.1214L25.1172 4.8706L25.8607 4.12175C25.8609 4.12163 25.8606 4.12187 25.8607 4.12175C27.1331 2.83982 28.6441 1.82253 30.3067 1.12869ZM35.5516 4.32368C34.3056 4.32368 33.0717 4.57094 31.9205 5.05134C30.7694 5.53173 29.7235 6.23584 28.8426 7.12345L26.6078 9.37421C25.7846 10.2033 24.4499 10.2033 23.6266 9.37421L21.3922 7.12381C19.6128 5.33164 17.1993 4.32482 14.6828 4.32482C12.1662 4.32482 9.75279 5.33164 7.97334 7.12381C6.19389 8.91597 5.1942 11.3467 5.1942 13.8812C5.1942 16.4157 6.19389 18.8464 7.97334 20.6385L25.1172 37.9048L42.2611 20.6385C43.1424 19.7513 43.8418 18.6976 44.3188 17.5382C44.7958 16.3788 45.0413 15.1361 45.0413 13.8812C45.0413 12.6262 44.7958 11.3835 44.3188 10.2241C43.8418 9.06473 43.1427 8.01135 42.2614 7.12416C41.3805 6.23655 40.3339 5.53173 39.1827 5.05134C38.0316 4.57094 36.7977 4.32368 35.5516 4.32368Z" fill="#6C6B6B"/></svg>',
      encoded: "hello",
      base64: "",
      decodeAll: "",
      copySuccess: ""
    };
    return _this;
  }

  Object(_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_3__["default"])(App, [{
    key: "render",
    value: function render() {
      var _this$state = this.state,
          svgPasted = _this$state.svgPasted,
          base64 = _this$state.base64,
          decodeAll = _this$state.decodeAll,
          copySuccess = _this$state.copySuccess;
      return __jsx("div", {
        className: "App container",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 53,
          columnNumber: 7
        }
      }, __jsx("h3", {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 54,
          columnNumber: 9
        }
      }, "SVG to BACKGROUND IMAGE"), __jsx("br", {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 55,
          columnNumber: 9
        }
      }), __jsx("h5", {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 56,
          columnNumber: 9
        }
      }, "SVG:"), __jsx("textarea", {
        className: "w-100 p-2",
        type: "text",
        rows: "10",
        defaultValue: svgPasted,
        onInput: this.handleSvgChange,
        onFocus: this.handleFocus,
        placeholder: "Insert SVG here",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 57,
          columnNumber: 9
        }
      }), __jsx("br", {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 66,
          columnNumber: 9
        }
      }), __jsx("div", {
        className: "position-relative d-flex flex-row flex-wrap",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 67,
          columnNumber: 9
        }
      }, __jsx("div", {
        className: "position-relative col-6\" ".concat(_styles_utils_module_css__WEBPACK_IMPORTED_MODULE_11___default.a.textAreaCopy),
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 68,
          columnNumber: 11
        }
      }, __jsx("h5", {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 71,
          columnNumber: 13
        }
      }, "Encoded:"), __jsx("textarea", {
        readOnly: true,
        className: "w-100 h-100",
        type: "text",
        rows: "9",
        defaultValue: base64,
        placeholder: "Copy CSS backgroung image here",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 72,
          columnNumber: 13
        }
      }), __jsx("button", {
        className: "btn btn-primary position-absolute ".concat(_styles_utils_module_css__WEBPACK_IMPORTED_MODULE_11___default.a.button),
        onClick: this.copyToClipBoard,
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 80,
          columnNumber: 13
        }
      }, "Click here to copy"), __jsx("div", {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 86,
          columnNumber: 13
        }
      }, copySuccess)), __jsx("div", {
        className: "col mt-5",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 88,
          columnNumber: 11
        }
      }, __jsx("h5", {
        className: "text-danger text-center",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 89,
          columnNumber: 13
        }
      }, "Preview:"), __jsx("div", {
        className: "w-100",
        style: {
          height: 254,
          // width: 100%,
          backgroundImage: "url(\"".concat(base64, "\")"),
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          backgroundColor: "blanchedalmond"
        },
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 90,
          columnNumber: 13
        }
      }, decodeAll))), __jsx("br", {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 106,
          columnNumber: 9
        }
      }));
    }
  }]);

  return App;
}(react__WEBPACK_IMPORTED_MODULE_9___default.a.Component);

/* harmony default export */ __webpack_exports__["default"] = (App);

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9jb250ZW50LmpzIl0sIm5hbWVzIjpbIkFwcCIsImUiLCJwcmV2ZW50RGVmYXVsdCIsInZhbHVlIiwidGFyZ2V0IiwiY29uc29sZSIsImxvZyIsImVuY29kZUFsbCIsInJlcGxhY2UiLCJlbmNvZGVVUklDb21wb25lbnQiLCJiYXNlNjREYXRhIiwieGxtbnMiLCJyZWdleCIsIm1hdGNoIiwiYmFzZTY0YWRkZWQiLCJiYXNlNjRhZGRlIiwic2V0U3RhdGUiLCJzdmdQYXN0ZWQiLCJiYXNlNjQiLCJuYXZpZ2F0b3IiLCJjbGlwYm9hcmQiLCJ3cml0ZVRleHQiLCJzdGF0ZSIsImNvcHlTdWNjZXNzIiwiZXZlbnQiLCJzZWxlY3QiLCJlbmNvZGVkIiwiZGVjb2RlQWxsIiwiaGFuZGxlU3ZnQ2hhbmdlIiwiaGFuZGxlRm9jdXMiLCJ1dGlsU3R5bGVzIiwidGV4dEFyZWFDb3B5IiwiYnV0dG9uIiwiY29weVRvQ2xpcEJvYXJkIiwiaGVpZ2h0IiwiYmFja2dyb3VuZEltYWdlIiwiYmFja2dyb3VuZFBvc2l0aW9uIiwiYmFja2dyb3VuZFJlcGVhdCIsImJhY2tncm91bmRDb2xvciIsIlJlYWN0IiwiQ29tcG9uZW50Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztDQUNBOztBQUNBOztJQUVNQSxHOzs7OztBQUNKLGlCQUFjO0FBQUE7O0FBQUE7O0FBQ1o7O0FBRFksME5BV0ksVUFBQ0MsQ0FBRCxFQUFPO0FBQ3ZCQSxPQUFDLENBQUNDLGNBQUY7QUFDQSxVQUFNQyxLQUFLLEdBQUdGLENBQUMsQ0FBQ0csTUFBRixDQUFTRCxLQUF2QjtBQUNBRSxhQUFPLENBQUNDLEdBQVIsQ0FBWUgsS0FBWixFQUh1QixDQUdIOztBQUVwQixVQUFNSSxTQUFTLEdBQUdKLEtBQUssQ0FBQ0ssT0FBTixDQUNoQiwwQkFEZ0IsRUFFaEJDLGtCQUZnQixDQUFsQixDQUx1QixDQVN2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RUUsaUJBQVMsZUFGWDtBQUdFLFlBQUksRUFBQyxNQUhQO0FBSUUsWUFBSSxFQUFDLEdBSlA7QUFLRSxvQkFBWSxFQUFFYixNQUxoQjtBQU1FLG1CQUFXLEVBQUMsZ0NBTmQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxRQUpGLEVBWUU7QUFDRSxpQkFBUyw4Q0FBdUNZLGdFQUFVLENBQUNFLE1BQWxELENBRFg7QUFFRSxlQUFPLEVBQUUsS0FBS0MsZUFGaEI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSw4QkFaRixFQWtCRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFNBQU1WLFdBQU4sQ0FsQkYsQ0FERixFQXFCRTtBQUFLLGlCQUFTLEVBQUMsVUFBZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFNBQ0U7QUFBSSxpQkFBUywyQkFBYjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLG9CQURGLEVBRUU7QUFDRSxpQkFBUyxFQUFDLE9BRFo7QUFFRSxhQUFLLEVBQUU7QUFDTFcsZ0JBQU0sRUFBRSxHQURIO0FBRUw7QUFDQUMseUJBQWUsa0JBQVVqQixNQUFWLFFBSFY7QUFJTGtCLDRCQUFrQixFQUFFLFFBSmY7QUFLTEMsMEJBQWdCLEVBQUUsV0FMYjtBQU1MQyx5QkFBZSxFQUFFO0FBTlosU0FGVDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFNBV0dYLFNBWEgsQ0FGRixDQXJCRixDQWRGLEVBcURFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsUUFyREYsQ0FERjtBQXlERDs7OztFQXhHZVksNENBQUssQ0FBQ0MsUzs7QUEyR1R4QyxrRUFBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9pbmRleC4yYWE4MThmNGRlOGE1NTg2YTNhMi5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IGN4IGZyb20gXCJjbGFzc25hbWVzXCI7XHJcbi8vIGltcG9ydCBnbG9iYWxTdHlsZXMgZnJvbSBcIi4uL3N0eWxlcy9ib290c3RyYXAubW9kdWxlLmNzc1wiO1xyXG5pbXBvcnQgdXRpbFN0eWxlcyBmcm9tIFwiLi4vc3R5bGVzL3V0aWxzLm1vZHVsZS5jc3NcIjtcclxuXHJcbmNsYXNzIEFwcCBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XHJcbiAgY29uc3RydWN0b3IoKSB7XHJcbiAgICBzdXBlcigpO1xyXG4gICAgdGhpcy5zdGF0ZSA9IHtcclxuICAgICAgc3ZnUGFzdGVkOlxyXG4gICAgICAgICc8c3ZnIHdpZHRoPVwiNTBcIiBoZWlnaHQ9XCI0NFwiIHZpZXdCb3g9XCIwIDAgNTAgNDRcIiBmaWxsPVwibm9uZVwiIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIj4gPHBhdGggZmlsbFJ1bGU9XCJldmVub2RkXCIgY2xpcFJ1bGU9XCJldmVub2RkXCIgZD1cIk0zMC4zMDY3IDEuMTI4NjlDMzEuOTY5NSAwLjQzNDc5IDMzLjc1MTggMC4wNzc2MzY3IDM1LjU1MTYgMC4wNzc2MzY3QzM3LjM1MTUgMC4wNzc2MzY3IDM5LjEzMzggMC40MzQ3OSA0MC43OTY2IDEuMTI4NjlDNDIuNDU5MSAxLjgyMjQ3IDQzLjk2OTYgMi44MzkyOCA0NS4yNDE4IDQuMTIxMDVDNDYuNTE0NSA1LjQwMjQgNDcuNTI0OCA2LjkyNDQgNDguMjEzNyA4LjU5ODc3QzQ4LjkwMjYgMTAuMjczNCA0OS4yNTczIDEyLjA2ODQgNDkuMjU3MyAxMy44ODEyQzQ5LjI1NzMgMTUuNjkzOSA0OC45MDI2IDE3LjQ4ODkgNDguMjEzNyAxOS4xNjM2QzQ3LjUyNDcgMjAuODM4MSA0Ni41MTUgMjIuMzU5NSA0NS4yNDIyIDIzLjY0MDlDNDUuMjQyMSAyMy42NDEgNDUuMjQyMyAyMy42NDA4IDQ1LjI0MjIgMjMuNjQwOUwyNi42MDc4IDQyLjQwODRDMjUuNzg0NiA0My4yMzc1IDI0LjQ0OTkgNDMuMjM3NSAyMy42MjY2IDQyLjQwODRMNC45OTIyMyAyMy42NDA5QzIuNDIyMTMgMjEuMDUyNSAwLjk3ODI3MSAxNy41NDE4IDAuOTc4MjcxIDEzLjg4MTJDMC45NzgyNzEgMTAuMjIwNSAyLjQyMjEzIDYuNzA5ODUgNC45OTIyMyA0LjEyMTRDNy41NjIzMiAxLjUzMjk1IDExLjA0ODEgMC4wNzg3NzIxIDE0LjY4MjggMC4wNzg3NzIxQzE4LjMxNzQgMC4wNzg3NzIxIDIxLjgwMzIgMS41MzI5NSAyNC4zNzMzIDQuMTIxNEwyNS4xMTcyIDQuODcwNkwyNS44NjA3IDQuMTIxNzVDMjUuODYwOSA0LjEyMTYzIDI1Ljg2MDYgNC4xMjE4NyAyNS44NjA3IDQuMTIxNzVDMjcuMTMzMSAyLjgzOTgyIDI4LjY0NDEgMS44MjI1MyAzMC4zMDY3IDEuMTI4NjlaTTM1LjU1MTYgNC4zMjM2OEMzNC4zMDU2IDQuMzIzNjggMzMuMDcxNyA0LjU3MDk0IDMxLjkyMDUgNS4wNTEzNEMzMC43Njk0IDUuNTMxNzMgMjkuNzIzNSA2LjIzNTg0IDI4Ljg0MjYgNy4xMjM0NUwyNi42MDc4IDkuMzc0MjFDMjUuNzg0NiAxMC4yMDMzIDI0LjQ0OTkgMTAuMjAzMyAyMy42MjY2IDkuMzc0MjFMMjEuMzkyMiA3LjEyMzgxQzE5LjYxMjggNS4zMzE2NCAxNy4xOTkzIDQuMzI0ODIgMTQuNjgyOCA0LjMyNDgyQzEyLjE2NjIgNC4zMjQ4MiA5Ljc1Mjc5IDUuMzMxNjQgNy45NzMzNCA3LjEyMzgxQzYuMTkzODkgOC45MTU5NyA1LjE5NDIgMTEuMzQ2NyA1LjE5NDIgMTMuODgxMkM1LjE5NDIgMTYuNDE1NyA2LjE5Mzg5IDE4Ljg0NjQgNy45NzMzNCAyMC42Mzg1TDI1LjExNzIgMzcuOTA0OEw0Mi4yNjExIDIwLjYzODVDNDMuMTQyNCAxOS43NTEzIDQzLjg0MTggMTguNjk3NiA0NC4zMTg4IDE3LjUzODJDNDQuNzk1OCAxNi4zNzg4IDQ1LjA0MTMgMTUuMTM2MSA0NS4wNDEzIDEzLjg4MTJDNDUuMDQxMyAxMi42MjYyIDQ0Ljc5NTggMTEuMzgzNSA0NC4zMTg4IDEwLjIyNDFDNDMuODQxOCA5LjA2NDczIDQzLjE0MjcgOC4wMTEzNSA0Mi4yNjE0IDcuMTI0MTZDNDEuMzgwNSA2LjIzNjU1IDQwLjMzMzkgNS41MzE3MyAzOS4xODI3IDUuMDUxMzRDMzguMDMxNiA0LjU3MDk0IDM2Ljc5NzcgNC4zMjM2OCAzNS41NTE2IDQuMzIzNjhaXCIgZmlsbD1cIiM2QzZCNkJcIi8+PC9zdmc+JyxcclxuICAgICAgZW5jb2RlZDogXCJoZWxsb1wiLFxyXG4gICAgICBiYXNlNjQ6IFwiXCIsXHJcbiAgICAgIGRlY29kZUFsbDogXCJcIixcclxuICAgICAgY29weVN1Y2Nlc3M6IFwiXCIsXHJcbiAgICB9O1xyXG4gIH1cclxuICBoYW5kbGVTdmdDaGFuZ2UgPSAoZSkgPT4ge1xyXG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgY29uc3QgdmFsdWUgPSBlLnRhcmdldC52YWx1ZTtcclxuICAgIGNvbnNvbGUubG9nKHZhbHVlKTsgLy8gbWFrZSBzdXJlIHlvdSBhcmUgcmVjZWl2aW5nIHRoZSB0aGUgdmFsdWVcclxuXHJcbiAgICBjb25zdCBlbmNvZGVBbGwgPSB2YWx1ZS5yZXBsYWNlKFxyXG4gICAgICAvW1xcclxcbiUjKCk8Pj9bXFxcXFxcXV5ge3x9XS9nLFxyXG4gICAgICBlbmNvZGVVUklDb21wb25lbnRcclxuICAgICk7XHJcbiAgICAvLyBjb25zdCBkZWNvZGVBbGwgPSBkZWNvZGVVUklDb21wb25lbnQoZW5jb2RlQWxsKTtcclxuICAgIGNvbnN0IGJhc2U2NERhdGEgPSBlbmNvZGVBbGwucmVwbGFjZSgvXCIvZywgYCdgKTtcclxuICAgIGNvbnN0IHhsbW5zID0gXCJ4bWxucz0naHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmcnXCI7XHJcbiAgICBjb25zdCByZWdleCA9XHJcbiAgICAgIFwiKHhtbG5zPVtcXFxcJ1xcXCJdaHR0cHM/OlxcXFwvXFxcXC93d3cudzMub3JnXFxcXC8yMDAwXFxcXC9zdmdbXFxcXCdcXFwiXVtec10pXCI7XHJcbiAgICBjb25zb2xlLmxvZyh2YWx1ZS5tYXRjaChyZWdleCkpO1xyXG4gICAgdmFsdWUubWF0Y2gocmVnZXgpXHJcbiAgICAgID8gY29uc29sZS5sb2coXCJ0aGUgaW5wdXQgY29udGFpbnMgeGxtbnNcIilcclxuICAgICAgOiBjb25zb2xlLmxvZyhcInRoZSBpbnB1dCBkbyBub3QgY29udGFpbiB4bG1uc1wiKTtcclxuICAgIGNvbnN0IGJhc2U2NGFkZGVkID0gYGRhdGE6aW1hZ2Uvc3ZnK3htbCwke2Jhc2U2NERhdGF9YDtcclxuICAgIGNvbnN0IGJhc2U2NGFkZGUgPSBgYmFja2dyb3VuZC1pbWFnZTogdXJsKFwiZGF0YTppbWFnZS9zdmcreG1sLCR7YmFzZTY0RGF0YX1cIilgO1xyXG4gICAgY29uc29sZS5sb2coYmFzZTY0YWRkZSk7XHJcbiAgICB0aGlzLnNldFN0YXRlKHsgc3ZnUGFzdGVkOiB2YWx1ZSwgYmFzZTY0OiBiYXNlNjRhZGRlZCB9KTtcclxuICB9O1xyXG5cclxuICBjb3B5VG9DbGlwQm9hcmQgPSBhc3luYyAoKSA9PiB7XHJcbiAgICB0cnkge1xyXG4gICAgICBhd2FpdCBuYXZpZ2F0b3IuY2xpcGJvYXJkLndyaXRlVGV4dCh0aGlzLnN0YXRlLmJhc2U2NCk7XHJcbiAgICAgIHRoaXMuc2V0U3RhdGUoeyBjb3B5U3VjY2VzczogXCJDb3BpZWQhXCIgfSk7XHJcbiAgICB9IGNhdGNoIChlcnIpIHtcclxuICAgICAgdGhpcy5zZXRTdGF0ZSh7IGNvcHlTdWNjZXNzOiBcIkZhaWxlZCB0byBjb3B5IVwiIH0pO1xyXG4gICAgfVxyXG4gIH07XHJcbiAgaGFuZGxlRm9jdXMgPSAoZXZlbnQpID0+IGV2ZW50LnRhcmdldC5zZWxlY3QoKTtcclxuICByZW5kZXIoKSB7XHJcbiAgICBjb25zdCB7IHN2Z1Bhc3RlZCwgYmFzZTY0LCBkZWNvZGVBbGwsIGNvcHlTdWNjZXNzIH0gPSB0aGlzLnN0YXRlO1xyXG4gICAgcmV0dXJuIChcclxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJBcHAgY29udGFpbmVyXCI+XHJcbiAgICAgICAgPGgzPlNWRyB0byBCQUNLR1JPVU5EIElNQUdFPC9oMz5cclxuICAgICAgICA8YnIgLz5cclxuICAgICAgICA8aDU+U1ZHOjwvaDU+XHJcbiAgICAgICAgPHRleHRhcmVhXHJcbiAgICAgICAgICBjbGFzc05hbWU9XCJ3LTEwMCBwLTJcIlxyXG4gICAgICAgICAgdHlwZT1cInRleHRcIlxyXG4gICAgICAgICAgcm93cz1cIjEwXCJcclxuICAgICAgICAgIGRlZmF1bHRWYWx1ZT17c3ZnUGFzdGVkfVxyXG4gICAgICAgICAgb25JbnB1dD17dGhpcy5oYW5kbGVTdmdDaGFuZ2V9XHJcbiAgICAgICAgICBvbkZvY3VzPXt0aGlzLmhhbmRsZUZvY3VzfVxyXG4gICAgICAgICAgcGxhY2Vob2xkZXI9XCJJbnNlcnQgU1ZHIGhlcmVcIlxyXG4gICAgICAgIC8+XHJcbiAgICAgICAgPGJyIC8+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9e2Bwb3NpdGlvbi1yZWxhdGl2ZSBkLWZsZXggZmxleC1yb3cgZmxleC13cmFwYH0+XHJcbiAgICAgICAgICA8ZGl2XHJcbiAgICAgICAgICAgIGNsYXNzTmFtZT17YHBvc2l0aW9uLXJlbGF0aXZlIGNvbC02XCIgJHt1dGlsU3R5bGVzLnRleHRBcmVhQ29weX1gfVxyXG4gICAgICAgICAgPlxyXG4gICAgICAgICAgICA8aDU+RW5jb2RlZDo8L2g1PlxyXG4gICAgICAgICAgICA8dGV4dGFyZWFcclxuICAgICAgICAgICAgICByZWFkT25seVxyXG4gICAgICAgICAgICAgIGNsYXNzTmFtZT17YHctMTAwIGgtMTAwYH1cclxuICAgICAgICAgICAgICB0eXBlPVwidGV4dFwiXHJcbiAgICAgICAgICAgICAgcm93cz1cIjlcIlxyXG4gICAgICAgICAgICAgIGRlZmF1bHRWYWx1ZT17YmFzZTY0fVxyXG4gICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiQ29weSBDU1MgYmFja2dyb3VuZyBpbWFnZSBoZXJlXCJcclxuICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgPGJ1dHRvblxyXG4gICAgICAgICAgICAgIGNsYXNzTmFtZT17YGJ0biBidG4tcHJpbWFyeSBwb3NpdGlvbi1hYnNvbHV0ZSAke3V0aWxTdHlsZXMuYnV0dG9ufWB9XHJcbiAgICAgICAgICAgICAgb25DbGljaz17dGhpcy5jb3B5VG9DbGlwQm9hcmR9XHJcbiAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICBDbGljayBoZXJlIHRvIGNvcHlcclxuICAgICAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgICAgIDxkaXY+e2NvcHlTdWNjZXNzfTwvZGl2PlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbCBtdC01XCI+XHJcbiAgICAgICAgICAgIDxoNSBjbGFzc05hbWU9e2B0ZXh0LWRhbmdlciB0ZXh0LWNlbnRlcmB9PlByZXZpZXc6PC9oNT5cclxuICAgICAgICAgICAgPGRpdlxyXG4gICAgICAgICAgICAgIGNsYXNzTmFtZT1cInctMTAwXCJcclxuICAgICAgICAgICAgICBzdHlsZT17e1xyXG4gICAgICAgICAgICAgICAgaGVpZ2h0OiAyNTQsXHJcbiAgICAgICAgICAgICAgICAvLyB3aWR0aDogMTAwJSxcclxuICAgICAgICAgICAgICAgIGJhY2tncm91bmRJbWFnZTogYHVybChcIiR7YmFzZTY0fVwiKWAsXHJcbiAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kUG9zaXRpb246IFwiY2VudGVyXCIsXHJcbiAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kUmVwZWF0OiBcIm5vLXJlcGVhdFwiLFxyXG4gICAgICAgICAgICAgICAgYmFja2dyb3VuZENvbG9yOiBcImJsYW5jaGVkYWxtb25kXCIsXHJcbiAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgIHtkZWNvZGVBbGx9XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgIDxiciAvPlxyXG4gICAgICA8L2Rpdj5cclxuICAgICk7XHJcbiAgfVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBBcHA7XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=