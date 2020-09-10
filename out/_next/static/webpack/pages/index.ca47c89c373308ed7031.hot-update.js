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
      // const decodeAll = decodeURIComponent(encodeAll);

      var regex = "(xmlns=[\\'\"]https?:\\/\\/www.w3.org\\/2000\\/svg[\\'\"][^s])";
      console.log(value.match(regex));

      if (value.match(regex)) {
        console.log("the input contains xlmns");
        var encodeAll = value.replace(/[\r\n%#()<>?[\\\]^`{|}]/g, encodeURIComponent);
      } else {
        console.log("the input do not contain xlmns");
        var xlmns = "<svg xmlns='http://www.w3.org/2000/svg'";
        var addXmls = value.replace(/<svg/g, xlmns);
        console.log(addXmls);
        var encodeAll = addXmls.replace(/[\r\n%#()<>?[\\\]^`{|}]/g, encodeURIComponent);
      }

      var base64Data = encodeAll.replace(/"/g, "'");
      var base64added = "data:image/svg+xml,".concat(base64Data);
      var base64adde = "background-image: url(\"data:image/svg+xml,".concat(base64Data, "\")");
      console.log(base64adde);

      _this.setState({
        svgPasted: value,
        base64: base64adde,
        backgroundImage: base64added
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
      svgPasted: "",
      // '<svg width="50" height="44" viewBox="0 0 50 44" fill="none" xmlns="http://www.w3.org/2000/svg"> <path fillRule="evenodd" clipRule="evenodd" d="M30.3067 1.12869C31.9695 0.43479 33.7518 0.0776367 35.5516 0.0776367C37.3515 0.0776367 39.1338 0.43479 40.7966 1.12869C42.4591 1.82247 43.9696 2.83928 45.2418 4.12105C46.5145 5.4024 47.5248 6.9244 48.2137 8.59877C48.9026 10.2734 49.2573 12.0684 49.2573 13.8812C49.2573 15.6939 48.9026 17.4889 48.2137 19.1636C47.5247 20.8381 46.515 22.3595 45.2422 23.6409C45.2421 23.641 45.2423 23.6408 45.2422 23.6409L26.6078 42.4084C25.7846 43.2375 24.4499 43.2375 23.6266 42.4084L4.99223 23.6409C2.42213 21.0525 0.978271 17.5418 0.978271 13.8812C0.978271 10.2205 2.42213 6.70985 4.99223 4.1214C7.56232 1.53295 11.0481 0.0787721 14.6828 0.0787721C18.3174 0.0787721 21.8032 1.53295 24.3733 4.1214L25.1172 4.8706L25.8607 4.12175C25.8609 4.12163 25.8606 4.12187 25.8607 4.12175C27.1331 2.83982 28.6441 1.82253 30.3067 1.12869ZM35.5516 4.32368C34.3056 4.32368 33.0717 4.57094 31.9205 5.05134C30.7694 5.53173 29.7235 6.23584 28.8426 7.12345L26.6078 9.37421C25.7846 10.2033 24.4499 10.2033 23.6266 9.37421L21.3922 7.12381C19.6128 5.33164 17.1993 4.32482 14.6828 4.32482C12.1662 4.32482 9.75279 5.33164 7.97334 7.12381C6.19389 8.91597 5.1942 11.3467 5.1942 13.8812C5.1942 16.4157 6.19389 18.8464 7.97334 20.6385L25.1172 37.9048L42.2611 20.6385C43.1424 19.7513 43.8418 18.6976 44.3188 17.5382C44.7958 16.3788 45.0413 15.1361 45.0413 13.8812C45.0413 12.6262 44.7958 11.3835 44.3188 10.2241C43.8418 9.06473 43.1427 8.01135 42.2614 7.12416C41.3805 6.23655 40.3339 5.53173 39.1827 5.05134C38.0316 4.57094 36.7977 4.32368 35.5516 4.32368Z" fill="#6C6B6B"/></svg>',
      base64: "",
      decodeAll: "",
      copySuccess: "",
      backgroundImage: ""
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
          copySuccess = _this$state.copySuccess,
          backgroundImage = _this$state.backgroundImage;
      return __jsx("div", {
        className: "App container",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 73,
          columnNumber: 7
        }
      }, __jsx("h3", {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 74,
          columnNumber: 9
        }
      }, "SVG to BACKGROUND IMAGE"), __jsx("br", {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 75,
          columnNumber: 9
        }
      }), __jsx("h5", {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 76,
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
          lineNumber: 77,
          columnNumber: 9
        }
      }), __jsx("br", {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 86,
          columnNumber: 9
        }
      }), __jsx("div", {
        className: "position-relative d-flex flex-row flex-wrap",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 87,
          columnNumber: 9
        }
      }, __jsx("div", {
        className: "position-relative col ".concat(_styles_utils_module_css__WEBPACK_IMPORTED_MODULE_11___default.a.textAreaCopy),
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 88,
          columnNumber: 11
        }
      }, __jsx("h5", {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 89,
          columnNumber: 13
        }
      }, "Encoded:"), __jsx("textarea", {
        readOnly: true,
        className: "w-100 h-100",
        type: "text" //   rows="9"
        ,
        defaultValue: base64,
        placeholder: "Copy CSS backgroung image here",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 90,
          columnNumber: 13
        }
      }), __jsx("button", {
        className: "btn btn-primary position-absolute ".concat(_styles_utils_module_css__WEBPACK_IMPORTED_MODULE_11___default.a.button),
        onClick: this.copyToClipBoard,
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 98,
          columnNumber: 13
        }
      }, "Click here to copy"), __jsx("div", {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 104,
          columnNumber: 13
        }
      }, copySuccess)), __jsx("div", {
        className: "col mt-5",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 106,
          columnNumber: 11
        }
      }, __jsx("h5", {
        className: "text-danger text-center",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 107,
          columnNumber: 13
        }
      }, "Preview:"), __jsx("div", {
        className: "w-100",
        style: {
          height: 254,
          // width: 256,
          backgroundImage: "url(\"".concat(backgroundImage, "\")"),
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          backgroundColor: "blanchedalmond"
        },
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 108,
          columnNumber: 13
        }
      }, decodeAll))), __jsx("br", {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 124,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9jb250ZW50LmpzIl0sIm5hbWVzIjpbIkFwcCIsImUiLCJwcmV2ZW50RGVmYXVsdCIsInZhbHVlIiwidGFyZ2V0IiwiY29uc29sZSIsImxvZyIsInJlZ2V4IiwibWF0Y2giLCJlbmNvZGVBbGwiLCJyZXBsYWNlIiwiZW5jb2RlVVJJQ29tcG9uZW50IiwieGxtbnMiLCJhZGRYbWxzIiwiYmFzZTY0RGF0YSIsImJhc2U2NGFkZGVkIiwiYmFzZTY0YWRkZSIsInNldFN0YXRlIiwic3ZnUGFzdGVkIiwiYmFzZTY0IiwiYmFja2dyb3VuZEltYWdlIiwibmF2aWdhdG9yIiwiY2xpcGJvYXJkIiwid3JpdGVUZXh0Iiwic3RhdGUiLCJjb3B5U3VjY2VzcyIsImV2ZW50Iiwic2VsZWN0IiwiZGVjb2RlQWxsIiwiaGFuZGxlU3ZnQ2hhbmdlIiwiaGFuZGxlRm9jdXMiLCJ1dGlsU3R5bGVzIiwidGV4dEFyZWFDb3B5IiwiYnV0dG9uIiwiY29weVRvQ2xpcEJvYXJkIiwiaGVpZ2h0IiwiYmFja2dyb3VuZFBvc2l0aW9uIiwiYmFja2dyb3VuZFJlcGVhdCIsImJhY2tncm91bmRDb2xvciIsIlJlYWN0IiwiQ29tcG9uZW50Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztDQUNBOztBQUNBOztJQUVNQSxHOzs7OztBQUNKLGlCQUFjO0FBQUE7O0FBQUE7O0FBQ1o7O0FBRFksME5BV0ksVUFBQ0MsQ0FBRCxFQUFPO0FBQ3ZCQSxPQUFDLENBQUNDLGNBQUY7QUFDQSxVQUFNQyxLQUFLLEdBQUdGLENBQUMsQ0FBQ0csTUFBRixDQUFTRCxLQUF2QjtBQUNBRSxhQUFPLENBQUNDLEdBQVIsQ0FBWUgsS0FBWixFQUh1QixDQUdIO0FBRXBCOztBQUNBLFVBQU1JLEtBQUssR0FDVCxnRUFERjtBQUVBRixhQUFPLENBQUNDLEdBQVIsQ0FBWUgsS0FBSyxDQUFDSyxLQUFOLENBQVlE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QUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsUUFuREYsQ0FERjtBQXVERDs7OztFQTFIZVcsNENBQUssQ0FBQ0MsUzs7QUE2SFR4QyxrRUFBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9pbmRleC5jYTQ3Yzg5YzM3MzMwOGVkNzAzMS5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IGN4IGZyb20gXCJjbGFzc25hbWVzXCI7XHJcbi8vIGltcG9ydCBnbG9iYWxTdHlsZXMgZnJvbSBcIi4uL3N0eWxlcy9ib290c3RyYXAubW9kdWxlLmNzc1wiO1xyXG5pbXBvcnQgdXRpbFN0eWxlcyBmcm9tIFwiLi4vc3R5bGVzL3V0aWxzLm1vZHVsZS5jc3NcIjtcclxuXHJcbmNsYXNzIEFwcCBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XHJcbiAgY29uc3RydWN0b3IoKSB7XHJcbiAgICBzdXBlcigpO1xyXG4gICAgdGhpcy5zdGF0ZSA9IHtcclxuICAgICAgc3ZnUGFzdGVkOiBcIlwiLFxyXG4gICAgICAvLyAnPHN2ZyB3aWR0aD1cIjUwXCIgaGVpZ2h0PVwiNDRcIiB2aWV3Qm94PVwiMCAwIDUwIDQ0XCIgZmlsbD1cIm5vbmVcIiB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCI+IDxwYXRoIGZpbGxSdWxlPVwiZXZlbm9kZFwiIGNsaXBSdWxlPVwiZXZlbm9kZFwiIGQ9XCJNMzAuMzA2NyAxLjEyODY5QzMxLjk2OTUgMC40MzQ3OSAzMy43NTE4IDAuMDc3NjM2NyAzNS41NTE2IDAuMDc3NjM2N0MzNy4zNTE1IDAuMDc3NjM2NyAzOS4xMzM4IDAuNDM0NzkgNDAuNzk2NiAxLjEyODY5QzQyLjQ1OTEgMS44MjI0NyA0My45Njk2IDIuODM5MjggNDUuMjQxOCA0LjEyMTA1QzQ2LjUxNDUgNS40MDI0IDQ3LjUyNDggNi45MjQ0IDQ4LjIxMzcgOC41OTg3N0M0OC45MDI2IDEwLjI3MzQgNDkuMjU3MyAxMi4wNjg0IDQ5LjI1NzMgMTMuODgxMkM0OS4yNTczIDE1LjY5MzkgNDguOTAyNiAxNy40ODg5IDQ4LjIxMzcgMTkuMTYzNkM0Ny41MjQ3IDIwLjgzODEgNDYuNTE1IDIyLjM1OTUgNDUuMjQyMiAyMy42NDA5QzQ1LjI0MjEgMjMuNjQxIDQ1LjI0MjMgMjMuNjQwOCA0NS4yNDIyIDIzLjY0MDlMMjYuNjA3OCA0Mi40MDg0QzI1Ljc4NDYgNDMuMjM3NSAyNC40NDk5IDQzLjIzNzUgMjMuNjI2NiA0Mi40MDg0TDQuOTkyMjMgMjMuNjQwOUMyLjQyMjEzIDIxLjA1MjUgMC45NzgyNzEgMTcuNTQxOCAwLjk3ODI3MSAxMy44ODEyQzAuOTc4MjcxIDEwLjIyMDUgMi40MjIxMyA2LjcwOTg1IDQuOTkyMjMgNC4xMjE0QzcuNTYyMzIgMS41MzI5NSAxMS4wNDgxIDAuMDc4NzcyMSAxNC42ODI4IDAuMDc4NzcyMUMxOC4zMTc0IDAuMDc4NzcyMSAyMS44MDMyIDEuNTMyOTUgMjQuMzczMyA0LjEyMTRMMjUuMTE3MiA0Ljg3MDZMMjUuODYwNyA0LjEyMTc1QzI1Ljg2MDkgNC4xMjE2MyAyNS44NjA2IDQuMTIxODcgMjUuODYwNyA0LjEyMTc1QzI3LjEzMzEgMi44Mzk4MiAyOC42NDQxIDEuODIyNTMgMzAuMzA2NyAxLjEyODY5Wk0zNS41NTE2IDQuMzIzNjhDMzQuMzA1NiA0LjMyMzY4IDMzLjA3MTcgNC41NzA5NCAzMS45MjA1IDUuMDUxMzRDMzAuNzY5NCA1LjUzMTczIDI5LjcyMzUgNi4yMzU4NCAyOC44NDI2IDcuMTIzNDVMMjYuNjA3OCA5LjM3NDIxQzI1Ljc4NDYgMTAuMjAzMyAyNC40NDk5IDEwLjIwMzMgMjMuNjI2NiA5LjM3NDIxTDIxLjM5MjIgNy4xMjM4MUMxOS42MTI4IDUuMzMxNjQgMTcuMTk5MyA0LjMyNDgyIDE0LjY4MjggNC4zMjQ4MkMxMi4xNjYyIDQuMzI0ODIgOS43NTI3OSA1LjMzMTY0IDcuOTczMzQgNy4xMjM4MUM2LjE5Mzg5IDguOTE1OTcgNS4xOTQyIDExLjM0NjcgNS4xOTQyIDEzLjg4MTJDNS4xOTQyIDE2LjQxNTcgNi4xOTM4OSAxOC44NDY0IDcuOTczMzQgMjAuNjM4NUwyNS4xMTcyIDM3LjkwNDhMNDIuMjYxMSAyMC42Mzg1QzQzLjE0MjQgMTkuNzUxMyA0My44NDE4IDE4LjY5NzYgNDQuMzE4OCAxNy41MzgyQzQ0Ljc5NTggMTYuMzc4OCA0NS4wNDEzIDE1LjEzNjEgNDUuMDQxMyAxMy44ODEyQzQ1LjA0MTMgMTIuNjI2MiA0NC43OTU4IDExLjM4MzUgNDQuMzE4OCAxMC4yMjQxQzQzLjg0MTggOS4wNjQ3MyA0My4xNDI3IDguMDExMzUgNDIuMjYxNCA3LjEyNDE2QzQxLjM4MDUgNi4yMzY1NSA0MC4zMzM5IDUuNTMxNzMgMzkuMTgyNyA1LjA1MTM0QzM4LjAzMTYgNC41NzA5NCAzNi43OTc3IDQuMzIzNjggMzUuNTUxNiA0LjMyMzY4WlwiIGZpbGw9XCIjNkM2QjZCXCIvPjwvc3ZnPicsXHJcbiAgICAgIGJhc2U2NDogXCJcIixcclxuICAgICAgZGVjb2RlQWxsOiBcIlwiLFxyXG4gICAgICBjb3B5U3VjY2VzczogXCJcIixcclxuICAgICAgYmFja2dyb3VuZEltYWdlOiBcIlwiLFxyXG4gICAgfTtcclxuICB9XHJcbiAgaGFuZGxlU3ZnQ2hhbmdlID0gKGUpID0+IHtcclxuICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuICAgIGNvbnN0IHZhbHVlID0gZS50YXJnZXQudmFsdWU7XHJcbiAgICBjb25zb2xlLmxvZyh2YWx1ZSk7IC8vIG1ha2Ugc3VyZSB5b3UgYXJlIHJlY2VpdmluZyB0aGUgdGhlIHZhbHVlXHJcblxyXG4gICAgLy8gY29uc3QgZGVjb2RlQWxsID0gZGVjb2RlVVJJQ29tcG9uZW50KGVuY29kZUFsbCk7XHJcbiAgICBjb25zdCByZWdleCA9XHJcbiAgICAgIFwiKHhtbG5zPVtcXFxcJ1xcXCJdaHR0cHM/OlxcXFwvXFxcXC93d3cudzMub3JnXFxcXC8yMDAwXFxcXC9zdmdbXFxcXCdcXFwiXVtec10pXCI7XHJcbiAgICBjb25zb2xlLmxvZyh2YWx1ZS5tYXRjaChyZWdleCkpO1xyXG5cclxuICAgIGlmICh2YWx1ZS5tYXRjaChyZWdleCkpIHtcclxuICAgICAgY29uc29sZS5sb2coXCJ0aGUgaW5wdXQgY29udGFpbnMgeGxtbnNcIik7XHJcbiAgICAgIHZhciBlbmNvZGVBbGwgPSB2YWx1ZS5yZXBsYWNlKFxyXG4gICAgICAgIC9bXFxyXFxuJSMoKTw+P1tcXFxcXFxdXmB7fH1dL2csXHJcbiAgICAgICAgZW5jb2RlVVJJQ29tcG9uZW50XHJcbiAgICAgICk7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICBjb25zb2xlLmxvZyhcInRoZSBpbnB1dCBkbyBub3QgY29udGFpbiB4bG1uc1wiKTtcclxuICAgICAgY29uc3QgeGxtbnMgPSBcIjxzdmcgeG1sbnM9J2h0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnJ1wiO1xyXG4gICAgICBjb25zdCBhZGRYbWxzID0gdmFsdWUucmVwbGFjZSgvPHN2Zy9nLCB4bG1ucyk7XHJcbiAgICAgIGNvbnNvbGUubG9nKGFkZFhtbHMpO1xyXG4gICAgICB2YXIgZW5jb2RlQWxsID0gYWRkWG1scy5yZXBsYWNlKFxyXG4gICAgICAgIC9bXFxyXFxuJSMoKTw+P1tcXFxcXFxdXmB7fH1dL2csXHJcbiAgICAgICAgZW5jb2RlVVJJQ29tcG9uZW50XHJcbiAgICAgICk7XHJcbiAgICB9XHJcbiAgICBjb25zdCBiYXNlNjREYXRhID0gZW5jb2RlQWxsLnJlcGxhY2UoL1wiL2csIGAnYCk7XHJcblxyXG4gICAgY29uc3QgYmFzZTY0YWRkZWQgPSBgZGF0YTppbWFnZS9zdmcreG1sLCR7YmFzZTY0RGF0YX1gO1xyXG4gICAgY29uc3QgYmFzZTY0YWRkZSA9IGBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXCJkYXRhOmltYWdlL3N2Zyt4bWwsJHtiYXNlNjREYXRhfVwiKWA7XHJcbiAgICBjb25zb2xlLmxvZyhiYXNlNjRhZGRlKTtcclxuICAgIHRoaXMuc2V0U3RhdGUoe1xyXG4gICAgICBzdmdQYXN0ZWQ6IHZhbHVlLFxyXG4gICAgICBiYXNlNjQ6IGJhc2U2NGFkZGUsXHJcbiAgICAgIGJhY2tncm91bmRJbWFnZTogYmFzZTY0YWRkZWQsXHJcbiAgICB9KTtcclxuICB9O1xyXG5cclxuICBjb3B5VG9DbGlwQm9hcmQgPSBhc3luYyAoKSA9PiB7XHJcbiAgICB0cnkge1xyXG4gICAgICBhd2FpdCBuYXZpZ2F0b3IuY2xpcGJvYXJkLndyaXRlVGV4dCh0aGlzLnN0YXRlLmJhc2U2NCk7XHJcbiAgICAgIHRoaXMuc2V0U3RhdGUoeyBjb3B5U3VjY2VzczogXCJDb3BpZWQhXCIgfSk7XHJcbiAgICB9IGNhdGNoIChlcnIpIHtcclxuICAgICAgdGhpcy5zZXRTdGF0ZSh7IGNvcHlTdWNjZXNzOiBcIkZhaWxlZCB0byBjb3B5IVwiIH0pO1xyXG4gICAgfVxyXG4gIH07XHJcbiAgaGFuZGxlRm9jdXMgPSAoZXZlbnQpID0+IGV2ZW50LnRhcmdldC5zZWxlY3QoKTtcclxuICByZW5kZXIoKSB7XHJcbiAgICBjb25zdCB7XHJcbiAgICAgIHN2Z1Bhc3RlZCxcclxuICAgICAgYmFzZTY0LFxyXG4gICAgICBkZWNvZGVBbGwsXHJcbiAgICAgIGNvcHlTdWNjZXNzLFxyXG4gICAgICBiYWNrZ3JvdW5kSW1hZ2UsXHJcbiAgICB9ID0gdGhpcy5zdGF0ZTtcclxuICAgIHJldHVybiAoXHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiQXBwIGNvbnRhaW5lclwiPlxyXG4gICAgICAgIDxoMz5TVkcgdG8gQkFDS0dST1VORCBJTUFHRTwvaDM+XHJcbiAgICAgICAgPGJyIC8+XHJcbiAgICAgICAgPGg1PlNWRzo8L2g1PlxyXG4gICAgICAgIDx0ZXh0YXJlYVxyXG4gICAgICAgICAgY2xhc3NOYW1lPVwidy0xMDAgcC0yXCJcclxuICAgICAgICAgIHR5cGU9XCJ0ZXh0XCJcclxuICAgICAgICAgIHJvd3M9XCIxMFwiXHJcbiAgICAgICAgICBkZWZhdWx0VmFsdWU9e3N2Z1Bhc3RlZH1cclxuICAgICAgICAgIG9uSW5wdXQ9e3RoaXMuaGFuZGxlU3ZnQ2hhbmdlfVxyXG4gICAgICAgICAgb25Gb2N1cz17dGhpcy5oYW5kbGVGb2N1c31cclxuICAgICAgICAgIHBsYWNlaG9sZGVyPVwiSW5zZXJ0IFNWRyBoZXJlXCJcclxuICAgICAgICAvPlxyXG4gICAgICAgIDxiciAvPlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPXtgcG9zaXRpb24tcmVsYXRpdmUgZC1mbGV4IGZsZXgtcm93IGZsZXgtd3JhcGB9PlxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9e2Bwb3NpdGlvbi1yZWxhdGl2ZSBjb2wgJHt1dGlsU3R5bGVzLnRleHRBcmVhQ29weX1gfT5cclxuICAgICAgICAgICAgPGg1PkVuY29kZWQ6PC9oNT5cclxuICAgICAgICAgICAgPHRleHRhcmVhXHJcbiAgICAgICAgICAgICAgcmVhZE9ubHlcclxuICAgICAgICAgICAgICBjbGFzc05hbWU9e2B3LTEwMCBoLTEwMGB9XHJcbiAgICAgICAgICAgICAgdHlwZT1cInRleHRcIlxyXG4gICAgICAgICAgICAgIC8vICAgcm93cz1cIjlcIlxyXG4gICAgICAgICAgICAgIGRlZmF1bHRWYWx1ZT17YmFzZTY0fVxyXG4gICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiQ29weSBDU1MgYmFja2dyb3VuZyBpbWFnZSBoZXJlXCJcclxuICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgPGJ1dHRvblxyXG4gICAgICAgICAgICAgIGNsYXNzTmFtZT17YGJ0biBidG4tcHJpbWFyeSBwb3NpdGlvbi1hYnNvbHV0ZSAke3V0aWxTdHlsZXMuYnV0dG9ufWB9XHJcbiAgICAgICAgICAgICAgb25DbGljaz17dGhpcy5jb3B5VG9DbGlwQm9hcmR9XHJcbiAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICBDbGljayBoZXJlIHRvIGNvcHlcclxuICAgICAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgICAgIDxkaXY+e2NvcHlTdWNjZXNzfTwvZGl2PlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbCBtdC01XCI+XHJcbiAgICAgICAgICAgIDxoNSBjbGFzc05hbWU9e2B0ZXh0LWRhbmdlciB0ZXh0LWNlbnRlcmB9PlByZXZpZXc6PC9oNT5cclxuICAgICAgICAgICAgPGRpdlxyXG4gICAgICAgICAgICAgIGNsYXNzTmFtZT1cInctMTAwXCJcclxuICAgICAgICAgICAgICBzdHlsZT17e1xyXG4gICAgICAgICAgICAgICAgaGVpZ2h0OiAyNTQsXHJcbiAgICAgICAgICAgICAgICAvLyB3aWR0aDogMjU2LFxyXG4gICAgICAgICAgICAgICAgYmFja2dyb3VuZEltYWdlOiBgdXJsKFwiJHtiYWNrZ3JvdW5kSW1hZ2V9XCIpYCxcclxuICAgICAgICAgICAgICAgIGJhY2tncm91bmRQb3NpdGlvbjogXCJjZW50ZXJcIixcclxuICAgICAgICAgICAgICAgIGJhY2tncm91bmRSZXBlYXQ6IFwibm8tcmVwZWF0XCIsXHJcbiAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kQ29sb3I6IFwiYmxhbmNoZWRhbG1vbmRcIixcclxuICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAge2RlY29kZUFsbH1cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgPGJyIC8+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgKTtcclxuICB9XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IEFwcDtcclxuIl0sInNvdXJjZVJvb3QiOiIifQ==