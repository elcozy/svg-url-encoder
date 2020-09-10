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
      backgroundImage: "",
      buttonText: "click here to copy"
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
          backgroundImage = _this$state.backgroundImage,
          buttonText = _this$state.buttonText;
      return __jsx("div", {
        className: "App container",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 75,
          columnNumber: 7
        }
      }, __jsx("h3", {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 76,
          columnNumber: 9
        }
      }, "SVG to BACKGROUND IMAGE"), __jsx("br", {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 77,
          columnNumber: 9
        }
      }), __jsx("h5", {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 78,
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
          lineNumber: 79,
          columnNumber: 9
        }
      }), __jsx("br", {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 88,
          columnNumber: 9
        }
      }), __jsx("div", {
        className: "position-relative d-flex flex-row flex-wrap",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 89,
          columnNumber: 9
        }
      }, __jsx("div", {
        className: "position-relative col ".concat(_styles_utils_module_css__WEBPACK_IMPORTED_MODULE_11___default.a.textAreaCopy),
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 90,
          columnNumber: 11
        }
      }, __jsx("h5", {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 91,
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
          lineNumber: 92,
          columnNumber: 13
        }
      }), __jsx("button", {
        className: "btn btn-primary position-absolute ".concat(_styles_utils_module_css__WEBPACK_IMPORTED_MODULE_11___default.a.button),
        onClick: this.copyToClipBoard,
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 100,
          columnNumber: 13
        }
      }, buttonText), __jsx("div", {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 106,
          columnNumber: 13
        }
      }, copySuccess)), __jsx("div", {
        className: "col mt-5",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 108,
          columnNumber: 11
        }
      }, __jsx("h5", {
        className: "text-danger text-center",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 109,
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
          lineNumber: 110,
          columnNumber: 13
        }
      }, decodeAll))), __jsx("br", {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 126,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9jb250ZW50LmpzIl0sIm5hbWVzIjpbIkFwcCIsImUiLCJwcmV2ZW50RGVmYXVsdCIsInZhbHVlIiwidGFyZ2V0IiwiY29uc29sZSIsImxvZyIsInJlZ2V4IiwibWF0Y2giLCJlbmNvZGVBbGwiLCJyZXBsYWNlIiwiZW5jb2RlVVJJQ29tcG9uZW50IiwieGxtbnMiLCJhZGRYbWxzIiwiYmFzZTY0RGF0YSIsImJhc2U2NGFkZGVkIiwiYmFzZTY0YWRkZSIsInNldFN0YXRlIiwic3ZnUGFzdGVkIiwiYmFzZTY0IiwiYmFja2dyb3VuZEltYWdlIiwibmF2aWdhdG9yIiwiY2xpcGJvYXJkIiwid3JpdGVUZXh0Iiwic3RhdGUiLCJjb3B5U3VjY2VzcyIsImV2ZW50Iiwic2VsZWN0IiwiZGVjb2RlQWxsIiwiYnV0dG9uVGV4dCIsImhhbmRsZVN2Z0NoYW5nZSIsImhhbmRsZUZvY3VzIiwidXRpbFN0eWxlcyIsInRleHRBcmVhQ29weSIsImJ1dHRvbiIsImNvcHlUb0NsaXBCb2FyZCIsImhlaWdodCIsImJhY2tncm91bmRQb3NpdGlvbiIsImJhY2tncm91bmRSZXBlYXQiLCJiYWNrZ3JvdW5kQ29sb3IiLCJSZWFjdCIsIkNvbXBvbmVudCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Q0FDQTs7QUFDQTs7SUFFTUEsRzs7Ozs7QUFDSixpQkFBYztBQUFBOztBQUFBOztBQUNaOztBQURZLDBOQVlJLFVBQUNDLENBQUQsRUFBTztBQUN2QkEsT0FBQyxDQUFDQyxjQUFGO0FBQ0EsVUFBTUMsS0FBSyxHQUFHRixDQUFDLENBQUNHLE1BQUYsQ0FBU0QsS0FBdkI7QUFDQUUsYUFBTyxDQUFDQyxHQUFSLENBQVlILEtBQVosRUFIdUIsQ0FHSDtBQUVwQjs7QUFDQSxVQUFNSSxLQUFLLEdBQ1QsZ0VBREY7QUFFQUYsYUFBTyxDQUFDQyxHQUFSLENBQVlILEtBQUssQ0FB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RlQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxTQVdHWCxTQVhILENBRkYsQ0FuQkYsQ0FkRixFQW1ERTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFFBbkRGLENBREY7QUF1REQ7Ozs7RUE1SGVZLDRDQUFLLENBQUNDLFM7O0FBK0hUekMsa0VBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvaW5kZXguYTczYTVlNzc3MjQ5MTE5ZDNjYjEuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBjeCBmcm9tIFwiY2xhc3NuYW1lc1wiO1xyXG4vLyBpbXBvcnQgZ2xvYmFsU3R5bGVzIGZyb20gXCIuLi9zdHlsZXMvYm9vdHN0cmFwLm1vZHVsZS5jc3NcIjtcclxuaW1wb3J0IHV0aWxTdHlsZXMgZnJvbSBcIi4uL3N0eWxlcy91dGlscy5tb2R1bGUuY3NzXCI7XHJcblxyXG5jbGFzcyBBcHAgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xyXG4gIGNvbnN0cnVjdG9yKCkge1xyXG4gICAgc3VwZXIoKTtcclxuICAgIHRoaXMuc3RhdGUgPSB7XHJcbiAgICAgIHN2Z1Bhc3RlZDogXCJcIixcclxuICAgICAgLy8gJzxzdmcgd2lkdGg9XCI1MFwiIGhlaWdodD1cIjQ0XCIgdmlld0JveD1cIjAgMCA1MCA0NFwiIGZpbGw9XCJub25lXCIgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiPiA8cGF0aCBmaWxsUnVsZT1cImV2ZW5vZGRcIiBjbGlwUnVsZT1cImV2ZW5vZGRcIiBkPVwiTTMwLjMwNjcgMS4xMjg2OUMzMS45Njk1IDAuNDM0NzkgMzMuNzUxOCAwLjA3NzYzNjcgMzUuNTUxNiAwLjA3NzYzNjdDMzcuMzUxNSAwLjA3NzYzNjcgMzkuMTMzOCAwLjQzNDc5IDQwLjc5NjYgMS4xMjg2OUM0Mi40NTkxIDEuODIyNDcgNDMuOTY5NiAyLjgzOTI4IDQ1LjI0MTggNC4xMjEwNUM0Ni41MTQ1IDUuNDAyNCA0Ny41MjQ4IDYuOTI0NCA0OC4yMTM3IDguNTk4NzdDNDguOTAyNiAxMC4yNzM0IDQ5LjI1NzMgMTIuMDY4NCA0OS4yNTczIDEzLjg4MTJDNDkuMjU3MyAxNS42OTM5IDQ4LjkwMjYgMTcuNDg4OSA0OC4yMTM3IDE5LjE2MzZDNDcuNTI0NyAyMC44MzgxIDQ2LjUxNSAyMi4zNTk1IDQ1LjI0MjIgMjMuNjQwOUM0NS4yNDIxIDIzLjY0MSA0NS4yNDIzIDIzLjY0MDggNDUuMjQyMiAyMy42NDA5TDI2LjYwNzggNDIuNDA4NEMyNS43ODQ2IDQzLjIzNzUgMjQuNDQ5OSA0My4yMzc1IDIzLjYyNjYgNDIuNDA4NEw0Ljk5MjIzIDIzLjY0MDlDMi40MjIxMyAyMS4wNTI1IDAuOTc4MjcxIDE3LjU0MTggMC45NzgyNzEgMTMuODgxMkMwLjk3ODI3MSAxMC4yMjA1IDIuNDIyMTMgNi43MDk4NSA0Ljk5MjIzIDQuMTIxNEM3LjU2MjMyIDEuNTMyOTUgMTEuMDQ4MSAwLjA3ODc3MjEgMTQuNjgyOCAwLjA3ODc3MjFDMTguMzE3NCAwLjA3ODc3MjEgMjEuODAzMiAxLjUzMjk1IDI0LjM3MzMgNC4xMjE0TDI1LjExNzIgNC44NzA2TDI1Ljg2MDcgNC4xMjE3NUMyNS44NjA5IDQuMTIxNjMgMjUuODYwNiA0LjEyMTg3IDI1Ljg2MDcgNC4xMjE3NUMyNy4xMzMxIDIuODM5ODIgMjguNjQ0MSAxLjgyMjUzIDMwLjMwNjcgMS4xMjg2OVpNMzUuNTUxNiA0LjMyMzY4QzM0LjMwNTYgNC4zMjM2OCAzMy4wNzE3IDQuNTcwOTQgMzEuOTIwNSA1LjA1MTM0QzMwLjc2OTQgNS41MzE3MyAyOS43MjM1IDYuMjM1ODQgMjguODQyNiA3LjEyMzQ1TDI2LjYwNzggOS4zNzQyMUMyNS43ODQ2IDEwLjIwMzMgMjQuNDQ5OSAxMC4yMDMzIDIzLjYyNjYgOS4zNzQyMUwyMS4zOTIyIDcuMTIzODFDMTkuNjEyOCA1LjMzMTY0IDE3LjE5OTMgNC4zMjQ4MiAxNC42ODI4IDQuMzI0ODJDMTIuMTY2MiA0LjMyNDgyIDkuNzUyNzkgNS4zMzE2NCA3Ljk3MzM0IDcuMTIzODFDNi4xOTM4OSA4LjkxNTk3IDUuMTk0MiAxMS4zNDY3IDUuMTk0MiAxMy44ODEyQzUuMTk0MiAxNi40MTU3IDYuMTkzODkgMTguODQ2NCA3Ljk3MzM0IDIwLjYzODVMMjUuMTE3MiAzNy45MDQ4TDQyLjI2MTEgMjAuNjM4NUM0My4xNDI0IDE5Ljc1MTMgNDMuODQxOCAxOC42OTc2IDQ0LjMxODggMTcuNTM4MkM0NC43OTU4IDE2LjM3ODggNDUuMDQxMyAxNS4xMzYxIDQ1LjA0MTMgMTMuODgxMkM0NS4wNDEzIDEyLjYyNjIgNDQuNzk1OCAxMS4zODM1IDQ0LjMxODggMTAuMjI0MUM0My44NDE4IDkuMDY0NzMgNDMuMTQyNyA4LjAxMTM1IDQyLjI2MTQgNy4xMjQxNkM0MS4zODA1IDYuMjM2NTUgNDAuMzMzOSA1LjUzMTczIDM5LjE4MjcgNS4wNTEzNEMzOC4wMzE2IDQuNTcwOTQgMzYuNzk3NyA0LjMyMzY4IDM1LjU1MTYgNC4zMjM2OFpcIiBmaWxsPVwiIzZDNkI2QlwiLz48L3N2Zz4nLFxyXG4gICAgICBiYXNlNjQ6IFwiXCIsXHJcbiAgICAgIGRlY29kZUFsbDogXCJcIixcclxuICAgICAgY29weVN1Y2Nlc3M6IFwiXCIsXHJcbiAgICAgIGJhY2tncm91bmRJbWFnZTogXCJcIixcclxuICAgICAgYnV0dG9uVGV4dDogXCJjbGljayBoZXJlIHRvIGNvcHlcIixcclxuICAgIH07XHJcbiAgfVxyXG4gIGhhbmRsZVN2Z0NoYW5nZSA9IChlKSA9PiB7XHJcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICBjb25zdCB2YWx1ZSA9IGUudGFyZ2V0LnZhbHVlO1xyXG4gICAgY29uc29sZS5sb2codmFsdWUpOyAvLyBtYWtlIHN1cmUgeW91IGFyZSByZWNlaXZpbmcgdGhlIHRoZSB2YWx1ZVxyXG5cclxuICAgIC8vIGNvbnN0IGRlY29kZUFsbCA9IGRlY29kZVVSSUNvbXBvbmVudChlbmNvZGVBbGwpO1xyXG4gICAgY29uc3QgcmVnZXggPVxyXG4gICAgICBcIih4bWxucz1bXFxcXCdcXFwiXWh0dHBzPzpcXFxcL1xcXFwvd3d3LnczLm9yZ1xcXFwvMjAwMFxcXFwvc3ZnW1xcXFwnXFxcIl1bXnNdKVwiO1xyXG4gICAgY29uc29sZS5sb2codmFsdWUubWF0Y2gocmVnZXgpKTtcclxuXHJcbiAgICBpZiAodmFsdWUubWF0Y2gocmVnZXgpKSB7XHJcbiAgICAgIGNvbnNvbGUubG9nKFwidGhlIGlucHV0IGNvbnRhaW5zIHhsbW5zXCIpO1xyXG4gICAgICB2YXIgZW5jb2RlQWxsID0gdmFsdWUucmVwbGFjZShcclxuICAgICAgICAvW1xcclxcbiUjKCk8Pj9bXFxcXFxcXV5ge3x9XS9nLFxyXG4gICAgICAgIGVuY29kZVVSSUNvbXBvbmVudFxyXG4gICAgICApO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgY29uc29sZS5sb2coXCJ0aGUgaW5wdXQgZG8gbm90IGNvbnRhaW4geGxtbnNcIik7XHJcbiAgICAgIGNvbnN0IHhsbW5zID0gXCI8c3ZnIHhtbG5zPSdodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZydcIjtcclxuICAgICAgY29uc3QgYWRkWG1scyA9IHZhbHVlLnJlcGxhY2UoLzxzdmcvZywgeGxtbnMpO1xyXG4gICAgICBjb25zb2xlLmxvZyhhZGRYbWxzKTtcclxuICAgICAgdmFyIGVuY29kZUFsbCA9IGFkZFhtbHMucmVwbGFjZShcclxuICAgICAgICAvW1xcclxcbiUjKCk8Pj9bXFxcXFxcXV5ge3x9XS9nLFxyXG4gICAgICAgIGVuY29kZVVSSUNvbXBvbmVudFxyXG4gICAgICApO1xyXG4gICAgfVxyXG4gICAgY29uc3QgYmFzZTY0RGF0YSA9IGVuY29kZUFsbC5yZXBsYWNlKC9cIi9nLCBgJ2ApO1xyXG5cclxuICAgIGNvbnN0IGJhc2U2NGFkZGVkID0gYGRhdGE6aW1hZ2Uvc3ZnK3htbCwke2Jhc2U2NERhdGF9YDtcclxuICAgIGNvbnN0IGJhc2U2NGFkZGUgPSBgYmFja2dyb3VuZC1pbWFnZTogdXJsKFwiZGF0YTppbWFnZS9zdmcreG1sLCR7YmFzZTY0RGF0YX1cIilgO1xyXG4gICAgY29uc29sZS5sb2coYmFzZTY0YWRkZSk7XHJcbiAgICB0aGlzLnNldFN0YXRlKHtcclxuICAgICAgc3ZnUGFzdGVkOiB2YWx1ZSxcclxuICAgICAgYmFzZTY0OiBiYXNlNjRhZGRlLFxyXG4gICAgICBiYWNrZ3JvdW5kSW1hZ2U6IGJhc2U2NGFkZGVkLFxyXG4gICAgfSk7XHJcbiAgfTtcclxuXHJcbiAgY29weVRvQ2xpcEJvYXJkID0gYXN5bmMgKCkgPT4ge1xyXG4gICAgdHJ5IHtcclxuICAgICAgYXdhaXQgbmF2aWdhdG9yLmNsaXBib2FyZC53cml0ZVRleHQodGhpcy5zdGF0ZS5iYXNlNjQpO1xyXG4gICAgICB0aGlzLnNldFN0YXRlKHsgY29weVN1Y2Nlc3M6IFwiQ29waWVkIVwiIH0pO1xyXG4gICAgfSBjYXRjaCAoZXJyKSB7XHJcbiAgICAgIHRoaXMuc2V0U3RhdGUoeyBjb3B5U3VjY2VzczogXCJGYWlsZWQgdG8gY29weSFcIiB9KTtcclxuICAgIH1cclxuICB9O1xyXG4gIGhhbmRsZUZvY3VzID0gKGV2ZW50KSA9PiBldmVudC50YXJnZXQuc2VsZWN0KCk7XHJcbiAgcmVuZGVyKCkge1xyXG4gICAgY29uc3Qge1xyXG4gICAgICBzdmdQYXN0ZWQsXHJcbiAgICAgIGJhc2U2NCxcclxuICAgICAgZGVjb2RlQWxsLFxyXG4gICAgICBjb3B5U3VjY2VzcyxcclxuICAgICAgYmFja2dyb3VuZEltYWdlLFxyXG4gICAgICBidXR0b25UZXh0LFxyXG4gICAgfSA9IHRoaXMuc3RhdGU7XHJcbiAgICByZXR1cm4gKFxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cIkFwcCBjb250YWluZXJcIj5cclxuICAgICAgICA8aDM+U1ZHIHRvIEJBQ0tHUk9VTkQgSU1BR0U8L2gzPlxyXG4gICAgICAgIDxiciAvPlxyXG4gICAgICAgIDxoNT5TVkc6PC9oNT5cclxuICAgICAgICA8dGV4dGFyZWFcclxuICAgICAgICAgIGNsYXNzTmFtZT1cInctMTAwIHAtMlwiXHJcbiAgICAgICAgICB0eXBlPVwidGV4dFwiXHJcbiAgICAgICAgICByb3dzPVwiMTBcIlxyXG4gICAgICAgICAgZGVmYXVsdFZhbHVlPXtzdmdQYXN0ZWR9XHJcbiAgICAgICAgICBvbklucHV0PXt0aGlzLmhhbmRsZVN2Z0NoYW5nZX1cclxuICAgICAgICAgIG9uRm9jdXM9e3RoaXMuaGFuZGxlRm9jdXN9XHJcbiAgICAgICAgICBwbGFjZWhvbGRlcj1cIkluc2VydCBTVkcgaGVyZVwiXHJcbiAgICAgICAgLz5cclxuICAgICAgICA8YnIgLz5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT17YHBvc2l0aW9uLXJlbGF0aXZlIGQtZmxleCBmbGV4LXJvdyBmbGV4LXdyYXBgfT5cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtgcG9zaXRpb24tcmVsYXRpdmUgY29sICR7dXRpbFN0eWxlcy50ZXh0QXJlYUNvcHl9YH0+XHJcbiAgICAgICAgICAgIDxoNT5FbmNvZGVkOjwvaDU+XHJcbiAgICAgICAgICAgIDx0ZXh0YXJlYVxyXG4gICAgICAgICAgICAgIHJlYWRPbmx5XHJcbiAgICAgICAgICAgICAgY2xhc3NOYW1lPXtgdy0xMDAgaC0xMDBgfVxyXG4gICAgICAgICAgICAgIHR5cGU9XCJ0ZXh0XCJcclxuICAgICAgICAgICAgICAvLyAgIHJvd3M9XCI5XCJcclxuICAgICAgICAgICAgICBkZWZhdWx0VmFsdWU9e2Jhc2U2NH1cclxuICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cIkNvcHkgQ1NTIGJhY2tncm91bmcgaW1hZ2UgaGVyZVwiXHJcbiAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgIDxidXR0b25cclxuICAgICAgICAgICAgICBjbGFzc05hbWU9e2BidG4gYnRuLXByaW1hcnkgcG9zaXRpb24tYWJzb2x1dGUgJHt1dGlsU3R5bGVzLmJ1dHRvbn1gfVxyXG4gICAgICAgICAgICAgIG9uQ2xpY2s9e3RoaXMuY29weVRvQ2xpcEJvYXJkfVxyXG4gICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAge2J1dHRvblRleHR9XHJcbiAgICAgICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgICAgICA8ZGl2Pntjb3B5U3VjY2Vzc308L2Rpdj5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wgbXQtNVwiPlxyXG4gICAgICAgICAgICA8aDUgY2xhc3NOYW1lPXtgdGV4dC1kYW5nZXIgdGV4dC1jZW50ZXJgfT5QcmV2aWV3OjwvaDU+XHJcbiAgICAgICAgICAgIDxkaXZcclxuICAgICAgICAgICAgICBjbGFzc05hbWU9XCJ3LTEwMFwiXHJcbiAgICAgICAgICAgICAgc3R5bGU9e3tcclxuICAgICAgICAgICAgICAgIGhlaWdodDogMjU0LFxyXG4gICAgICAgICAgICAgICAgLy8gd2lkdGg6IDI1NixcclxuICAgICAgICAgICAgICAgIGJhY2tncm91bmRJbWFnZTogYHVybChcIiR7YmFja2dyb3VuZEltYWdlfVwiKWAsXHJcbiAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kUG9zaXRpb246IFwiY2VudGVyXCIsXHJcbiAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kUmVwZWF0OiBcIm5vLXJlcGVhdFwiLFxyXG4gICAgICAgICAgICAgICAgYmFja2dyb3VuZENvbG9yOiBcImJsYW5jaGVkYWxtb25kXCIsXHJcbiAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgIHtkZWNvZGVBbGx9XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgIDxiciAvPlxyXG4gICAgICA8L2Rpdj5cclxuICAgICk7XHJcbiAgfVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBBcHA7XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=