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

      _this.setState({
        inputedSvg: value
      }, function () {
        return _this.handleSvgChanges(value);
      });
    });

    Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_8__["default"])(Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__["default"])(_this), "handleSvgChanges", function (value) {
      console.log("state: ".concat(_this.state.inputedSvg, ", value: ").concat(value)); // const decodeAll = decodeURIComponent(encodeAll);

      var regex = "(xmlns=[\\'\"]https?:\\/\\/www.w3.org\\/2000\\/svg[\\'\"][^s])"; // console.log(value.match(regex));

      if (!value.match(regex)) {
        //if input do not have the xlmns
        var xlmns = "<svg xmlns='http://www.w3.org/2000/svg'";
        value = value.replace(/<svg/g, xlmns);
      } // replacing double quotes to single quotes


      var replacedQuotes = value.replace(/[\r\n%#()<>?[\\\]^`{|}]/g, encodeURIComponent).replace(/"/g, "'");
      var backgroundImage = "data:image/svg+xml,".concat(replacedQuotes);

      if (replacedQuotes) {
        var cssBackgroundImage = "background-image: url(\"data:image/svg+xml,".concat(replacedQuotes, "\")");
      } else {
        var cssBackgroundImage = "";
      }

      console.log(cssBackgroundImage);

      _this.setState({
        cssBackgroundImage: cssBackgroundImage,
        backgroundImage: backgroundImage
      });
    });

    Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_8__["default"])(Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__["default"])(_this), "copyToClipBoard", /*#__PURE__*/Object(_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__["default"])( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee() {
      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              _context.prev = 0;
              _context.next = 3;
              return navigator.clipboard.writeText(_this.state.cssBackgroundImage);

            case 3:
              _this.setState({
                copyButtonText: "Copied!"
              });

              _context.next = 9;
              break;

            case 6:
              _context.prev = 6;
              _context.t0 = _context["catch"](0);

              _this.setState({
                copyButtonText: "Failed to copy!"
              });

            case 9:
              if (_this.state.copyButtonText !== 'click here to copy"') {
                setTimeout(function () {
                  _this.setState(function () {
                    return {
                      copyButtonText: "click here to copy"
                    };
                  });
                }, 5000);
              }

            case 10:
            case "end":
              return _context.stop();
          }
        }
      }, _callee, null, [[0, 6]]);
    })));

    Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_8__["default"])(Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__["default"])(_this), "handleFocus", function (event) {
      return event.target.select();
    });

    Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_8__["default"])(Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__["default"])(_this), "handleFileInput", function (e) {
      // handle validations
      var file = e.target.files[0];
      if (!file) return;

      _this.setState({
        selectedFile: file
      });

      var reader = new FileReader();
      reader.onload = _this.handleFileLoad;
      reader.readAsText(file);
    });

    Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_8__["default"])(Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__["default"])(_this), "handleFileLoad", function (event) {
      console.log(event.target.result); //   getting the svg from  uploaded image

      var fileContent = event.target.result;

      _this.setState({
        fileContent: fileContent,
        inputedSvg: fileContent
      }, function () {
        return _this.handleSvgChanges(fileContent);
      }); // this.refs.test.innerHTML = fileContent;
      // this.handleSvgChanges;


      console.log(_this.state.inputedSvg);
    });

    _this.state = {
      inputedSvg: "",
      // '<svg width="50" height="44" viewBox="0 0 50 44" fill="none" xmlns="http://www.w3.org/2000/svg"> <path fillRule="evenodd" clipRule="evenodd" d="M30.3067 1.12869C31.9695 0.43479 33.7518 0.0776367 35.5516 0.0776367C37.3515 0.0776367 39.1338 0.43479 40.7966 1.12869C42.4591 1.82247 43.9696 2.83928 45.2418 4.12105C46.5145 5.4024 47.5248 6.9244 48.2137 8.59877C48.9026 10.2734 49.2573 12.0684 49.2573 13.8812C49.2573 15.6939 48.9026 17.4889 48.2137 19.1636C47.5247 20.8381 46.515 22.3595 45.2422 23.6409C45.2421 23.641 45.2423 23.6408 45.2422 23.6409L26.6078 42.4084C25.7846 43.2375 24.4499 43.2375 23.6266 42.4084L4.99223 23.6409C2.42213 21.0525 0.978271 17.5418 0.978271 13.8812C0.978271 10.2205 2.42213 6.70985 4.99223 4.1214C7.56232 1.53295 11.0481 0.0787721 14.6828 0.0787721C18.3174 0.0787721 21.8032 1.53295 24.3733 4.1214L25.1172 4.8706L25.8607 4.12175C25.8609 4.12163 25.8606 4.12187 25.8607 4.12175C27.1331 2.83982 28.6441 1.82253 30.3067 1.12869ZM35.5516 4.32368C34.3056 4.32368 33.0717 4.57094 31.9205 5.05134C30.7694 5.53173 29.7235 6.23584 28.8426 7.12345L26.6078 9.37421C25.7846 10.2033 24.4499 10.2033 23.6266 9.37421L21.3922 7.12381C19.6128 5.33164 17.1993 4.32482 14.6828 4.32482C12.1662 4.32482 9.75279 5.33164 7.97334 7.12381C6.19389 8.91597 5.1942 11.3467 5.1942 13.8812C5.1942 16.4157 6.19389 18.8464 7.97334 20.6385L25.1172 37.9048L42.2611 20.6385C43.1424 19.7513 43.8418 18.6976 44.3188 17.5382C44.7958 16.3788 45.0413 15.1361 45.0413 13.8812C45.0413 12.6262 44.7958 11.3835 44.3188 10.2241C43.8418 9.06473 43.1427 8.01135 42.2614 7.12416C41.3805 6.23655 40.3339 5.53173 39.1827 5.05134C38.0316 4.57094 36.7977 4.32368 35.5516 4.32368Z" fill="#6C6B6B"/></svg>',
      cssBackgroundImage: "",
      decodeAll: "",
      copySuccess: "",
      backgroundImage: "",
      copyButtonText: "click here to copy",
      fileContent: null
    };
    return _this;
  }

  Object(_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_3__["default"])(App, [{
    key: "render",
    value: function render() {
      var _this$state = this.state,
          inputedSvg = _this$state.inputedSvg,
          cssBackgroundImage = _this$state.cssBackgroundImage,
          decodeAll = _this$state.decodeAll,
          backgroundImage = _this$state.backgroundImage,
          copyButtonText = _this$state.copyButtonText,
          fileContent = _this$state.fileContent;
      return __jsx("div", {
        className: "App container",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 108,
          columnNumber: 7
        }
      }, __jsx("h3", {
        className: "text-center",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 110,
          columnNumber: 9
        }
      }, "Encode svg image to use for CSS background"), __jsx("br", {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 113,
          columnNumber: 9
        }
      }), __jsx("div", {
        className: "",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 115,
          columnNumber: 9
        }
      }, __jsx("label", {
        htmlFor: "exampleFormControlFile",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 116,
          columnNumber: 11
        }
      }, "Upload your svg file or paste the code below"), __jsx("input", {
        type: "file",
        accept: ".svg" // value={selectedFile}
        ,
        onChange: this.handleFileInput,
        className: _styles_utils_module_css__WEBPACK_IMPORTED_MODULE_11___default.a["form-control-file"],
        id: "exampleFormControlFile",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 119,
          columnNumber: 11
        }
      })), __jsx("h5", {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 130,
          columnNumber: 9
        }
      }, "svg code:"), __jsx("textarea", {
        className: "w-100 p-2 form-control",
        type: "text",
        rows: "10",
        value: inputedSvg,
        onChange: this.handleSvgChange,
        onFocus: this.handleFocus,
        placeholder: "Paste SVG here",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 131,
          columnNumber: 9
        }
      }), __jsx("br", {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 141,
          columnNumber: 9
        }
      }), __jsx("div", {
        className: "position-relative d-flex flex-column flex-wrap",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 142,
          columnNumber: 9
        }
      }, inputedSvg ? __jsx("div", {
        className: "position-relative ",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 144,
          columnNumber: 13
        }
      }, __jsx("h5", {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 145,
          columnNumber: 15
        }
      }, "Background CSS:"), __jsx("div", {
        className: "position-relative ".concat(_styles_utils_module_css__WEBPACK_IMPORTED_MODULE_11___default.a.textAreaCopy),
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 146,
          columnNumber: 15
        }
      }, __jsx("input", {
        readOnly: true,
        className: "w-100 form-control",
        type: "text" //   rows="9"
        ,
        value: cssBackgroundImage,
        placeholder: "Copy CSS backgroung image here",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 147,
          columnNumber: 17
        }
      }), cssBackgroundImage ? __jsx("button", {
        className: "btn btn-primary position-absolute ".concat(_styles_utils_module_css__WEBPACK_IMPORTED_MODULE_11___default.a.button),
        onClick: this.copyToClipBoard,
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 157,
          columnNumber: 19
        }
      }, copyButtonText) : null)) : null, __jsx("div", {
        className: "",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 167,
          columnNumber: 11
        }
      }, __jsx("h5", {
        className: "",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 168,
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
          backgroundColor: "whitesmoke"
        },
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 169,
          columnNumber: 13
        }
      }, decodeAll))), __jsx("br", {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 185,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9jb250ZW50LmpzIl0sIm5hbWVzIjpbIkFwcCIsImUiLCJwcmV2ZW50RGVmYXVsdCIsInZhbHVlIiwidGFyZ2V0Iiwic2V0U3RhdGUiLCJpbnB1dGVkU3ZnIiwiaGFuZGxlU3ZnQ2hhbmdlcyIsImNvbnNvbGUiLCJsb2ciLCJzdGF0ZSIsInJlZ2V4IiwibWF0Y2giLCJ4bG1ucyIsInJlcGxhY2UiLCJyZXBsYWNlZFF1b3RlcyIsImVuY29kZVVSSUNvbXBvbmVudCIsImJhY2tncm91bmRJbWFnZSIsImNzc0JhY2tncm91bmRJbWFnZSIsIm5hdmlnYXRvciIsImNsaXBib2FyZCIsIndyaXRlVGV4dCIsImNvcHlCdXR0b25UZXh0Iiwic2V0VGltZW91dCIsImV2ZW50Iiwic2VsZWN0IiwiZmlsZSIsImZpbGVzIiwic2VsZWN0ZWRGaWxlIiwicmVhZGVyIiwiRmlsZVJlYWRlciIsIm9ubG9hZCIsImhhbmRsZUZpbGVMb2FkIiwicmVhZEFzVGV4dCIsInJlc3VsdCIsImZpbGVDb250ZW50IiwiZGVjb2RlQWxsIiwiY29weVN1Y2Nlc3MiLCJoYW5kbGVGaWxlSW5wdXQiLCJ1dGlsU3R5bGVzIiwiaGFuZGxlU3ZnQ2hhbmdlIiwiaGFuZGxlRm9jdXMiLCJ0ZXh0QXJlYUNvcHkiLCJidXR0b24iLCJjb3B5VG9DbGlwQm9hcmQiLCJoZWlnaHQiLCJiYWNrZ3JvdW5kUG9zaXRpb24iLCJiYWNrZ3JvdW5kUmVwZWF0IiwiYmFja2dyb3VuZENvbG9yIiwiUmVhY3QiLCJDb21wb25lbnQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0NBQ0E7O0FBQ0E7O0lBRU1BLEc7Ozs7O0FBQ0osaUJBQWM7QUFBQTs7QUFBQTs7QUFDWjs7QUFEWSwwTkFjSSxVQUFDQyxDQUFELEVBQU87QUFDdkJBLE9BQUMsQ0FBQ0MsY0FBRjtBQUNBLFVBQU1DLEtBQUssR0FBR0YsQ0FBQyxD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TFQ7QUFNRSxtQkFBVyxFQUFDLGdDQU5kO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsUUFERixFQVVHQSxrQkFBa0IsR0FDakI7QUFDRSxpQkFBUyw4Q0FBdUNxQixnRUFBVSxDQUFDSSxNQUFsRCxDQURYO0FBRUUsZUFBTyxFQUFFLEtBQUtDLGVBRmhCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsU0FJR3RCLGNBSkgsQ0FEaUIsR0FPZixJQWpCTixDQUZGLENBRFMsR0F1QlAsSUF4Qk4sRUF5QkU7QUFBSyxpQkFBUyxFQUFDLEVBQWY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxTQUNFO0FBQUksaUJBQVMsSUFBYjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLG9CQURGLEVBRUU7QUFDRSxpQkFBUyxFQUFDLE9BRFo7QUFFRSxhQUFLLEVBQUU7QUFDTHVCLGdCQUFNLEVBQUUsR0FESDtBQUVMO0FBQ0E1Qix5QkFBZSxrQkFBVUEsZUFBVixRQUhWO0FBSUw2Qiw0QkFBa0IsRUFBRSxRQUpmO0FBS0xDLDBCQUFnQixFQUFFLFdBTGI7QUFNTEMseUJBQWUsRUFBRTtBQU5aLFNBRlQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxTQVdHWixTQVhILENBRkYsQ0F6QkYsQ0FsQ0YsRUE2RUU7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxRQTdFRixDQURGO0FBaUZEOzs7O0VBdkxlYSw0Q0FBSyxDQUFDQyxTOztBQTBMVGxELGtFQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL2luZGV4LjhjZmFmOWRhMzUwMWEwZDlkZTBjLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgY3ggZnJvbSBcImNsYXNzbmFtZXNcIjtcclxuLy8gaW1wb3J0IGdsb2JhbFN0eWxlcyBmcm9tIFwiLi4vc3R5bGVzL2Jvb3RzdHJhcC5tb2R1bGUuY3NzXCI7XHJcbmltcG9ydCB1dGlsU3R5bGVzIGZyb20gXCIuLi9zdHlsZXMvdXRpbHMubW9kdWxlLmNzc1wiO1xyXG5cclxuY2xhc3MgQXBwIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcclxuICBjb25zdHJ1Y3RvcigpIHtcclxuICAgIHN1cGVyKCk7XHJcbiAgICB0aGlzLnN0YXRlID0ge1xyXG4gICAgICBpbnB1dGVkU3ZnOiBcIlwiLFxyXG4gICAgICAvLyAnPHN2ZyB3aWR0aD1cIjUwXCIgaGVpZ2h0PVwiNDRcIiB2aWV3Qm94PVwiMCAwIDUwIDQ0XCIgZmlsbD1cIm5vbmVcIiB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCI+IDxwYXRoIGZpbGxSdWxlPVwiZXZlbm9kZFwiIGNsaXBSdWxlPVwiZXZlbm9kZFwiIGQ9XCJNMzAuMzA2NyAxLjEyODY5QzMxLjk2OTUgMC40MzQ3OSAzMy43NTE4IDAuMDc3NjM2NyAzNS41NTE2IDAuMDc3NjM2N0MzNy4zNTE1IDAuMDc3NjM2NyAzOS4xMzM4IDAuNDM0NzkgNDAuNzk2NiAxLjEyODY5QzQyLjQ1OTEgMS44MjI0NyA0My45Njk2IDIuODM5MjggNDUuMjQxOCA0LjEyMTA1QzQ2LjUxNDUgNS40MDI0IDQ3LjUyNDggNi45MjQ0IDQ4LjIxMzcgOC41OTg3N0M0OC45MDI2IDEwLjI3MzQgNDkuMjU3MyAxMi4wNjg0IDQ5LjI1NzMgMTMuODgxMkM0OS4yNTczIDE1LjY5MzkgNDguOTAyNiAxNy40ODg5IDQ4LjIxMzcgMTkuMTYzNkM0Ny41MjQ3IDIwLjgzODEgNDYuNTE1IDIyLjM1OTUgNDUuMjQyMiAyMy42NDA5QzQ1LjI0MjEgMjMuNjQxIDQ1LjI0MjMgMjMuNjQwOCA0NS4yNDIyIDIzLjY0MDlMMjYuNjA3OCA0Mi40MDg0QzI1Ljc4NDYgNDMuMjM3NSAyNC40NDk5IDQzLjIzNzUgMjMuNjI2NiA0Mi40MDg0TDQuOTkyMjMgMjMuNjQwOUMyLjQyMjEzIDIxLjA1MjUgMC45NzgyNzEgMTcuNTQxOCAwLjk3ODI3MSAxMy44ODEyQzAuOTc4MjcxIDEwLjIyMDUgMi40MjIxMyA2LjcwOTg1IDQuOTkyMjMgNC4xMjE0QzcuNTYyMzIgMS41MzI5NSAxMS4wNDgxIDAuMDc4NzcyMSAxNC42ODI4IDAuMDc4NzcyMUMxOC4zMTc0IDAuMDc4NzcyMSAyMS44MDMyIDEuNTMyOTUgMjQuMzczMyA0LjEyMTRMMjUuMTE3MiA0Ljg3MDZMMjUuODYwNyA0LjEyMTc1QzI1Ljg2MDkgNC4xMjE2MyAyNS44NjA2IDQuMTIxODcgMjUuODYwNyA0LjEyMTc1QzI3LjEzMzEgMi44Mzk4MiAyOC42NDQxIDEuODIyNTMgMzAuMzA2NyAxLjEyODY5Wk0zNS41NTE2IDQuMzIzNjhDMzQuMzA1NiA0LjMyMzY4IDMzLjA3MTcgNC41NzA5NCAzMS45MjA1IDUuMDUxMzRDMzAuNzY5NCA1LjUzMTczIDI5LjcyMzUgNi4yMzU4NCAyOC44NDI2IDcuMTIzNDVMMjYuNjA3OCA5LjM3NDIxQzI1Ljc4NDYgMTAuMjAzMyAyNC40NDk5IDEwLjIwMzMgMjMuNjI2NiA5LjM3NDIxTDIxLjM5MjIgNy4xMjM4MUMxOS42MTI4IDUuMzMxNjQgMTcuMTk5MyA0LjMyNDgyIDE0LjY4MjggNC4zMjQ4MkMxMi4xNjYyIDQuMzI0ODIgOS43NTI3OSA1LjMzMTY0IDcuOTczMzQgNy4xMjM4MUM2LjE5Mzg5IDguOTE1OTcgNS4xOTQyIDExLjM0NjcgNS4xOTQyIDEzLjg4MTJDNS4xOTQyIDE2LjQxNTcgNi4xOTM4OSAxOC44NDY0IDcuOTczMzQgMjAuNjM4NUwyNS4xMTcyIDM3LjkwNDhMNDIuMjYxMSAyMC42Mzg1QzQzLjE0MjQgMTkuNzUxMyA0My44NDE4IDE4LjY5NzYgNDQuMzE4OCAxNy41MzgyQzQ0Ljc5NTggMTYuMzc4OCA0NS4wNDEzIDE1LjEzNjEgNDUuMDQxMyAxMy44ODEyQzQ1LjA0MTMgMTIuNjI2MiA0NC43OTU4IDExLjM4MzUgNDQuMzE4OCAxMC4yMjQxQzQzLjg0MTggOS4wNjQ3MyA0My4xNDI3IDguMDExMzUgNDIuMjYxNCA3LjEyNDE2QzQxLjM4MDUgNi4yMzY1NSA0MC4zMzM5IDUuNTMxNzMgMzkuMTgyNyA1LjA1MTM0QzM4LjAzMTYgNC41NzA5NCAzNi43OTc3IDQuMzIzNjggMzUuNTUxNiA0LjMyMzY4WlwiIGZpbGw9XCIjNkM2QjZCXCIvPjwvc3ZnPicsXHJcbiAgICAgIGNzc0JhY2tncm91bmRJbWFnZTogXCJcIixcclxuICAgICAgZGVjb2RlQWxsOiBcIlwiLFxyXG4gICAgICBjb3B5U3VjY2VzczogXCJcIixcclxuICAgICAgYmFja2dyb3VuZEltYWdlOiBcIlwiLFxyXG4gICAgICBjb3B5QnV0dG9uVGV4dDogXCJjbGljayBoZXJlIHRvIGNvcHlcIixcclxuICAgICAgZmlsZUNvbnRlbnQ6IG51bGwsXHJcbiAgICB9O1xyXG4gIH1cclxuXHJcbiAgaGFuZGxlU3ZnQ2hhbmdlID0gKGUpID0+IHtcclxuICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuICAgIGNvbnN0IHZhbHVlID0gZS50YXJnZXQudmFsdWU7XHJcbiAgICB0aGlzLnNldFN0YXRlKFxyXG4gICAgICB7XHJcbiAgICAgICAgaW5wdXRlZFN2ZzogdmFsdWUsXHJcbiAgICAgIH0sXHJcbiAgICAgICgpID0+IHRoaXMuaGFuZGxlU3ZnQ2hhbmdlcyh2YWx1ZSlcclxuICAgICk7XHJcbiAgfTtcclxuICBoYW5kbGVTdmdDaGFuZ2VzID0gKHZhbHVlKSA9PiB7XHJcbiAgICBjb25zb2xlLmxvZyhgc3RhdGU6ICR7dGhpcy5zdGF0ZS5pbnB1dGVkU3ZnfSwgdmFsdWU6ICR7dmFsdWV9YCk7XHJcbiAgICAvLyBjb25zdCBkZWNvZGVBbGwgPSBkZWNvZGVVUklDb21wb25lbnQoZW5jb2RlQWxsKTtcclxuXHJcbiAgICBjb25zdCByZWdleCA9XHJcbiAgICAgIFwiKHhtbG5zPVtcXFxcJ1xcXCJdaHR0cHM/OlxcXFwvXFxcXC93d3cudzMub3JnXFxcXC8yMDAwXFxcXC9zdmdbXFxcXCdcXFwiXVtec10pXCI7XHJcbiAgICAvLyBjb25zb2xlLmxvZyh2YWx1ZS5tYXRjaChyZWdleCkpO1xyXG5cclxuICAgIGlmICghdmFsdWUubWF0Y2gocmVnZXgpKSB7XHJcbiAgICAgIC8vaWYgaW5wdXQgZG8gbm90IGhhdmUgdGhlIHhsbW5zXHJcbiAgICAgIGNvbnN0IHhsbW5zID0gXCI8c3ZnIHhtbG5zPSdodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZydcIjtcclxuICAgICAgdmFsdWUgPSB2YWx1ZS5yZXBsYWNlKC88c3ZnL2csIHhsbW5zKTtcclxuICAgIH1cclxuICAgIC8vIHJlcGxhY2luZyBkb3VibGUgcXVvdGVzIHRvIHNpbmdsZSBxdW90ZXNcclxuICAgIGNvbnN0IHJlcGxhY2VkUXVvdGVzID0gdmFsdWVcclxuICAgICAgLnJlcGxhY2UoL1tcXHJcXG4lIygpPD4/W1xcXFxcXF1eYHt8fV0vZywgZW5jb2RlVVJJQ29tcG9uZW50KVxyXG4gICAgICAucmVwbGFjZSgvXCIvZywgYCdgKTtcclxuICAgIGNvbnN0IGJhY2tncm91bmRJbWFnZSA9IGBkYXRhOmltYWdlL3N2Zyt4bWwsJHtyZXBsYWNlZFF1b3Rlc31gO1xyXG4gICAgaWYgKHJlcGxhY2VkUXVvdGVzKSB7XHJcbiAgICAgIHZhciBjc3NCYWNrZ3JvdW5kSW1hZ2UgPSBgYmFja2dyb3VuZC1pbWFnZTogdXJsKFwiZGF0YTppbWFnZS9zdmcreG1sLCR7cmVwbGFjZWRRdW90ZXN9XCIpYDtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIHZhciBjc3NCYWNrZ3JvdW5kSW1hZ2UgPSBgYDtcclxuICAgIH1cclxuICAgIGNvbnNvbGUubG9nKGNzc0JhY2tncm91bmRJbWFnZSk7XHJcbiAgICB0aGlzLnNldFN0YXRlKHtcclxuICAgICAgY3NzQmFja2dyb3VuZEltYWdlLFxyXG4gICAgICBiYWNrZ3JvdW5kSW1hZ2UsXHJcbiAgICB9KTtcclxuICB9O1xyXG5cclxuICBjb3B5VG9DbGlwQm9hcmQgPSBhc3luYyAoKSA9PiB7XHJcbiAgICB0cnkge1xyXG4gICAgICBhd2FpdCBuYXZpZ2F0b3IuY2xpcGJvYXJkLndyaXRlVGV4dCh0aGlzLnN0YXRlLmNzc0JhY2tncm91bmRJbWFnZSk7XHJcbiAgICAgIHRoaXMuc2V0U3RhdGUoeyBjb3B5QnV0dG9uVGV4dDogXCJDb3BpZWQhXCIgfSk7XHJcbiAgICB9IGNhdGNoIChlcnIpIHtcclxuICAgICAgdGhpcy5zZXRTdGF0ZSh7IGNvcHlCdXR0b25UZXh0OiBcIkZhaWxlZCB0byBjb3B5IVwiIH0pO1xyXG4gICAgfVxyXG4gICAgaWYgKHRoaXMuc3RhdGUuY29weUJ1dHRvblRleHQgIT09ICdjbGljayBoZXJlIHRvIGNvcHlcIicpIHtcclxuICAgICAgc2V0VGltZW91dCgoKSA9PiB7XHJcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSgoKSA9PiAoeyBjb3B5QnV0dG9uVGV4dDogXCJjbGljayBoZXJlIHRvIGNvcHlcIiB9KSk7XHJcbiAgICAgIH0sIDUwMDApO1xyXG4gICAgfVxyXG4gIH07XHJcbiAgaGFuZGxlRm9jdXMgPSAoZXZlbnQpID0+IGV2ZW50LnRhcmdldC5zZWxlY3QoKTtcclxuXHJcbiAgaGFuZGxlRmlsZUlucHV0ID0gKGUpID0+IHtcclxuICAgIC8vIGhhbmRsZSB2YWxpZGF0aW9uc1xyXG4gICAgY29uc3QgZmlsZSA9IGUudGFyZ2V0LmZpbGVzWzBdO1xyXG4gICAgaWYgKCFmaWxlKSByZXR1cm47XHJcbiAgICB0aGlzLnNldFN0YXRlKHsgc2VsZWN0ZWRGaWxlOiBmaWxlIH0pO1xyXG5cclxuICAgIGNvbnN0IHJlYWRlciA9IG5ldyBGaWxlUmVhZGVyKCk7XHJcbiAgICByZWFkZXIub25sb2FkID0gdGhpcy5oYW5kbGVGaWxlTG9hZDtcclxuICAgIHJlYWRlci5yZWFkQXNUZXh0KGZpbGUpO1xyXG4gIH07XHJcblxyXG4gIGhhbmRsZUZpbGVMb2FkID0gKGV2ZW50KSA9PiB7XHJcbiAgICBjb25zb2xlLmxvZyhldmVudC50YXJnZXQucmVzdWx0KTtcclxuICAgIC8vICAgZ2V0dGluZyB0aGUgc3ZnIGZyb20gIHVwbG9hZGVkIGltYWdlXHJcbiAgICBjb25zdCBmaWxlQ29udGVudCA9IGV2ZW50LnRhcmdldC5yZXN1bHQ7XHJcbiAgICB0aGlzLnNldFN0YXRlKHsgZmlsZUNvbnRlbnQ6IGZpbGVDb250ZW50LCBpbnB1dGVkU3ZnOiBmaWxlQ29udGVudCB9LCAoKSA9PlxyXG4gICAgICB0aGlzLmhhbmRsZVN2Z0NoYW5nZXMoZmlsZUNvbnRlbnQpXHJcbiAgICApO1xyXG4gICAgLy8gdGhpcy5yZWZzLnRlc3QuaW5uZXJIVE1MID0gZmlsZUNvbnRlbnQ7XHJcbiAgICAvLyB0aGlzLmhhbmRsZVN2Z0NoYW5nZXM7XHJcbiAgICBjb25zb2xlLmxvZyh0aGlzLnN0YXRlLmlucHV0ZWRTdmcpO1xyXG4gIH07XHJcblxyXG4gIHJlbmRlcigpIHtcclxuICAgIGNvbnN0IHtcclxuICAgICAgaW5wdXRlZFN2ZyxcclxuICAgICAgY3NzQmFja2dyb3VuZEltYWdlLFxyXG4gICAgICBkZWNvZGVBbGwsXHJcbiAgICAgIGJhY2tncm91bmRJbWFnZSxcclxuICAgICAgY29weUJ1dHRvblRleHQsXHJcbiAgICAgIGZpbGVDb250ZW50LFxyXG4gICAgfSA9IHRoaXMuc3RhdGU7XHJcbiAgICByZXR1cm4gKFxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cIkFwcCBjb250YWluZXJcIj5cclxuICAgICAgICB7LyogPGgzIGNvbnRlbnRFZGl0YWJsZT1cInRydWVcIj5TVkcgdG8gQkFDS0dST1VORCBJTUFHRTwvaDM+ICovfVxyXG4gICAgICAgIDxoMyBjbGFzc05hbWU9XCJ0ZXh0LWNlbnRlclwiPlxyXG4gICAgICAgICAgRW5jb2RlIHN2ZyBpbWFnZSB0byB1c2UgZm9yIENTUyBiYWNrZ3JvdW5kXHJcbiAgICAgICAgPC9oMz5cclxuICAgICAgICA8YnIgLz5cclxuXHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJcIj5cclxuICAgICAgICAgIDxsYWJlbCBodG1sRm9yPVwiZXhhbXBsZUZvcm1Db250cm9sRmlsZVwiPlxyXG4gICAgICAgICAgICBVcGxvYWQgeW91ciBzdmcgZmlsZSBvciBwYXN0ZSB0aGUgY29kZSBiZWxvd1xyXG4gICAgICAgICAgPC9sYWJlbD5cclxuICAgICAgICAgIDxpbnB1dFxyXG4gICAgICAgICAgICB0eXBlPVwiZmlsZVwiXHJcbiAgICAgICAgICAgIGFjY2VwdD1cIi5zdmdcIlxyXG4gICAgICAgICAgICAvLyB2YWx1ZT17c2VsZWN0ZWRGaWxlfVxyXG4gICAgICAgICAgICBvbkNoYW5nZT17dGhpcy5oYW5kbGVGaWxlSW5wdXR9XHJcbiAgICAgICAgICAgIGNsYXNzTmFtZT17dXRpbFN0eWxlc1tcImZvcm0tY29udHJvbC1maWxlXCJdfVxyXG4gICAgICAgICAgICBpZD1cImV4YW1wbGVGb3JtQ29udHJvbEZpbGVcIlxyXG4gICAgICAgICAgLz5cclxuICAgICAgICAgIHsvKiA8cHJlIGlkPVwiZmlsZUNvbnRlbnRcIj57ZmlsZUNvbnRlbnR9PC9wcmU+ICovfVxyXG4gICAgICAgICAgey8qIDxkaXYgcmVmPVwidGVzdFwiPntmaWxlQ29udGVudH08L2Rpdj4gKi99XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPGg1PnN2ZyBjb2RlOjwvaDU+XHJcbiAgICAgICAgPHRleHRhcmVhXHJcbiAgICAgICAgICBjbGFzc05hbWU9XCJ3LTEwMCBwLTIgZm9ybS1jb250cm9sXCJcclxuICAgICAgICAgIHR5cGU9XCJ0ZXh0XCJcclxuICAgICAgICAgIHJvd3M9XCIxMFwiXHJcbiAgICAgICAgICB2YWx1ZT17aW5wdXRlZFN2Z31cclxuICAgICAgICAgIG9uQ2hhbmdlPXt0aGlzLmhhbmRsZVN2Z0NoYW5nZX1cclxuICAgICAgICAgIG9uRm9jdXM9e3RoaXMuaGFuZGxlRm9jdXN9XHJcbiAgICAgICAgICBwbGFjZWhvbGRlcj1cIlBhc3RlIFNWRyBoZXJlXCJcclxuICAgICAgICAvPlxyXG5cclxuICAgICAgICA8YnIgLz5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT17YHBvc2l0aW9uLXJlbGF0aXZlIGQtZmxleCBmbGV4LWNvbHVtbiBmbGV4LXdyYXBgfT5cclxuICAgICAgICAgIHtpbnB1dGVkU3ZnID8gKFxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17YHBvc2l0aW9uLXJlbGF0aXZlIGB9PlxyXG4gICAgICAgICAgICAgIDxoNT5CYWNrZ3JvdW5kIENTUzo8L2g1PlxyXG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtgcG9zaXRpb24tcmVsYXRpdmUgJHt1dGlsU3R5bGVzLnRleHRBcmVhQ29weX1gfT5cclxuICAgICAgICAgICAgICAgIDxpbnB1dFxyXG4gICAgICAgICAgICAgICAgICByZWFkT25seVxyXG4gICAgICAgICAgICAgICAgICBjbGFzc05hbWU9e2B3LTEwMCBmb3JtLWNvbnRyb2xgfVxyXG4gICAgICAgICAgICAgICAgICB0eXBlPVwidGV4dFwiXHJcbiAgICAgICAgICAgICAgICAgIC8vICAgcm93cz1cIjlcIlxyXG4gICAgICAgICAgICAgICAgICB2YWx1ZT17Y3NzQmFja2dyb3VuZEltYWdlfVxyXG4gICAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cIkNvcHkgQ1NTIGJhY2tncm91bmcgaW1hZ2UgaGVyZVwiXHJcbiAgICAgICAgICAgICAgICAvPlxyXG5cclxuICAgICAgICAgICAgICAgIHtjc3NCYWNrZ3JvdW5kSW1hZ2UgPyAoXHJcbiAgICAgICAgICAgICAgICAgIDxidXR0b25cclxuICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9e2BidG4gYnRuLXByaW1hcnkgcG9zaXRpb24tYWJzb2x1dGUgJHt1dGlsU3R5bGVzLmJ1dHRvbn1gfVxyXG4gICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9e3RoaXMuY29weVRvQ2xpcEJvYXJkfVxyXG4gICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAge2NvcHlCdXR0b25UZXh0fVxyXG4gICAgICAgICAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICAgICAgICAgICkgOiBudWxsfVxyXG4gICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICkgOiBudWxsfVxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJcIj5cclxuICAgICAgICAgICAgPGg1IGNsYXNzTmFtZT17YGB9PlByZXZpZXc6PC9oNT5cclxuICAgICAgICAgICAgPGRpdlxyXG4gICAgICAgICAgICAgIGNsYXNzTmFtZT1cInctMTAwXCJcclxuICAgICAgICAgICAgICBzdHlsZT17e1xyXG4gICAgICAgICAgICAgICAgaGVpZ2h0OiAyNTQsXHJcbiAgICAgICAgICAgICAgICAvLyB3aWR0aDogMjU2LFxyXG4gICAgICAgICAgICAgICAgYmFja2dyb3VuZEltYWdlOiBgdXJsKFwiJHtiYWNrZ3JvdW5kSW1hZ2V9XCIpYCxcclxuICAgICAgICAgICAgICAgIGJhY2tncm91bmRQb3NpdGlvbjogXCJjZW50ZXJcIixcclxuICAgICAgICAgICAgICAgIGJhY2tncm91bmRSZXBlYXQ6IFwibm8tcmVwZWF0XCIsXHJcbiAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kQ29sb3I6IFwid2hpdGVzbW9rZVwiLFxyXG4gICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICB7ZGVjb2RlQWxsfVxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICA8YnIgLz5cclxuICAgICAgPC9kaXY+XHJcbiAgICApO1xyXG4gIH1cclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgQXBwO1xyXG4iXSwic291cmNlUm9vdCI6IiJ9