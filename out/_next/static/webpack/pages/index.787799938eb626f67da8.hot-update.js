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

    Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_8__["default"])(Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__["default"])(_this), "handleFileLoad", function (event) {
      console.log(event.target.result);
      var fileContent = event.target.result;

      _this.setState({
        fileContent: fileContent,
        inputedSvg: fileContent
      });

      _this.refs.test.innerHTML = fileContent;
      _this.handleSvgChange;
      console.log(_this.state.replacedQuotes); // document.getElementById("fileContent").innerHTML = event.target.result;
    });

    Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_8__["default"])(Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__["default"])(_this), "handleSvgChange", function (e) {
      e.preventDefault();
      var value = e.target.value;

      _this.setState({
        inputedSvg: value
      }, _this.handleSvgChanges(value));
    });

    Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_8__["default"])(Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__["default"])(_this), "handleSvgChanges", function (value) {
      console.log("state: ".concat(_this.state, ", value: ").concat(value)); // const decodeAll = decodeURIComponent(encodeAll);

      var regex = "(xmlns=[\\'\"]https?:\\/\\/www.w3.org\\/2000\\/svg[\\'\"][^s])"; // console.log(value.match(regex));

      if (value.match(regex)) {
        console.log("the input contains xlmns");
        var encodeAll = value.replace(/[\r\n%#()<>?[\\\]^`{|}]/g, encodeURIComponent);
      } else {
        console.log("the input do not contain xlmns");
        var xlmns = "<svg xmlns='http://www.w3.org/2000/svg'";

        var addXlmns = _this.state.inputedSvg.replace(/<svg/g, xlmns);

        console.log(addXlmns);
        var encodeAll = addXlmns.replace(/[\r\n%#()<>?[\\\]^`{|}]/g, encodeURIComponent);
      }

      var replacedQuotes = encodeAll.replace(/"/g, "'");
      console.log(_this.state.inputedSvg);
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

      _this.setState({
        selectedFile: file
      });

      console.log(file);
      if (file.size > 2048) return alert("error: File upload size cannot exceed more than 2MB");else console.log(_this.state.selectedFile);
      var reader = new FileReader();
      reader.onload = _this.handleFileLoad;
      reader.readAsText(file);
    });

    _this.state = {
      inputedSvg: "",
      // '<svg width="50" height="44" viewBox="0 0 50 44" fill="none" xmlns="http://www.w3.org/2000/svg"> <path fillRule="evenodd" clipRule="evenodd" d="M30.3067 1.12869C31.9695 0.43479 33.7518 0.0776367 35.5516 0.0776367C37.3515 0.0776367 39.1338 0.43479 40.7966 1.12869C42.4591 1.82247 43.9696 2.83928 45.2418 4.12105C46.5145 5.4024 47.5248 6.9244 48.2137 8.59877C48.9026 10.2734 49.2573 12.0684 49.2573 13.8812C49.2573 15.6939 48.9026 17.4889 48.2137 19.1636C47.5247 20.8381 46.515 22.3595 45.2422 23.6409C45.2421 23.641 45.2423 23.6408 45.2422 23.6409L26.6078 42.4084C25.7846 43.2375 24.4499 43.2375 23.6266 42.4084L4.99223 23.6409C2.42213 21.0525 0.978271 17.5418 0.978271 13.8812C0.978271 10.2205 2.42213 6.70985 4.99223 4.1214C7.56232 1.53295 11.0481 0.0787721 14.6828 0.0787721C18.3174 0.0787721 21.8032 1.53295 24.3733 4.1214L25.1172 4.8706L25.8607 4.12175C25.8609 4.12163 25.8606 4.12187 25.8607 4.12175C27.1331 2.83982 28.6441 1.82253 30.3067 1.12869ZM35.5516 4.32368C34.3056 4.32368 33.0717 4.57094 31.9205 5.05134C30.7694 5.53173 29.7235 6.23584 28.8426 7.12345L26.6078 9.37421C25.7846 10.2033 24.4499 10.2033 23.6266 9.37421L21.3922 7.12381C19.6128 5.33164 17.1993 4.32482 14.6828 4.32482C12.1662 4.32482 9.75279 5.33164 7.97334 7.12381C6.19389 8.91597 5.1942 11.3467 5.1942 13.8812C5.1942 16.4157 6.19389 18.8464 7.97334 20.6385L25.1172 37.9048L42.2611 20.6385C43.1424 19.7513 43.8418 18.6976 44.3188 17.5382C44.7958 16.3788 45.0413 15.1361 45.0413 13.8812C45.0413 12.6262 44.7958 11.3835 44.3188 10.2241C43.8418 9.06473 43.1427 8.01135 42.2614 7.12416C41.3805 6.23655 40.3339 5.53173 39.1827 5.05134C38.0316 4.57094 36.7977 4.32368 35.5516 4.32368Z" fill="#6C6B6B"/></svg>',
      cssBackgroundImage: "",
      decodeAll: "",
      copySuccess: "",
      backgroundImage: "",
      selectedFile: null,
      copyButtonText: "click here to copy",
      fileContent: null
    };
    return _this;
  }

  Object(_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_3__["default"])(App, [{
    key: "componentDidUpdate",
    value: function componentDidUpdate() {
      this.handleSvgChange;
      console.log("updated");
    }
  }, {
    key: "render",
    value: function render() {
      var _this$state = this.state,
          inputedSvg = _this$state.inputedSvg,
          cssBackgroundImage = _this$state.cssBackgroundImage,
          decodeAll = _this$state.decodeAll,
          backgroundImage = _this$state.backgroundImage,
          copyButtonText = _this$state.copyButtonText,
          selectedFile = _this$state.selectedFile,
          fileContent = _this$state.fileContent;
      return __jsx("div", {
        className: "App container",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 120,
          columnNumber: 7
        }
      }, __jsx("h3", {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 122,
          columnNumber: 9
        }
      }, "SVG to BACKGROUND IMAGE"), __jsx("br", {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 123,
          columnNumber: 9
        }
      }), __jsx("h5", {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 124,
          columnNumber: 9
        }
      }, "SVG:"), __jsx("textarea", {
        className: "w-100 p-2",
        type: "text",
        rows: "10",
        defaultValue: inputedSvg,
        onInput: this.handleSvgChange,
        onFocus: this.handleFocus,
        placeholder: "Paste SVG here",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 125,
          columnNumber: 9
        }
      }), __jsx("div", {
        className: "form-group",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 134,
          columnNumber: 9
        }
      }, __jsx("label", {
        htmlFor: "exampleFormControlFile",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 135,
          columnNumber: 11
        }
      }, "Upload your svg file"), __jsx("input", {
        type: "file",
        accept: ".svg" // value={selectedFile}
        ,
        onChange: this.handleFileInput,
        onInput: this.handleSvgChange,
        className: "form-control-file",
        id: "exampleFormControlFile",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 136,
          columnNumber: 11
        }
      }), __jsx("pre", {
        id: "fileContent",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 145,
          columnNumber: 11
        }
      }, fileContent), __jsx("div", {
        ref: "test",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 146,
          columnNumber: 11
        }
      }, fileContent)), __jsx("br", {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 148,
          columnNumber: 9
        }
      }), __jsx("div", {
        className: "position-relative d-flex flex-column flex-wrap",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 149,
          columnNumber: 9
        }
      }, inputedSvg ? __jsx("div", {
        className: "position-relative ",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 151,
          columnNumber: 13
        }
      }, __jsx("h5", {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 152,
          columnNumber: 15
        }
      }, "Background CSS:"), __jsx("div", {
        className: "position-relative ".concat(_styles_utils_module_css__WEBPACK_IMPORTED_MODULE_11___default.a.textAreaCopy),
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 153,
          columnNumber: 15
        }
      }, __jsx("input", {
        readOnly: true,
        className: "w-100",
        type: "text" //   rows="9"
        ,
        defaultValue: cssBackgroundImage,
        placeholder: "Copy CSS backgroung image here",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 154,
          columnNumber: 17
        }
      }), cssBackgroundImage ? __jsx("button", {
        className: "btn btn-primary position-absolute ".concat(_styles_utils_module_css__WEBPACK_IMPORTED_MODULE_11___default.a.button),
        onClick: this.copyToClipBoard,
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 164,
          columnNumber: 19
        }
      }, copyButtonText) : null)) : null, __jsx("div", {
        className: "",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 174,
          columnNumber: 11
        }
      }, __jsx("h5", {
        className: "text-danger text-center",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 175,
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
          lineNumber: 176,
          columnNumber: 13
        }
      }, decodeAll))), __jsx("br", {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 192,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9jb250ZW50LmpzIl0sIm5hbWVzIjpbIkFwcCIsImV2ZW50IiwiY29uc29sZSIsImxvZyIsInRhcmdldCIsInJlc3VsdCIsImZpbGVDb250ZW50Iiwic2V0U3RhdGUiLCJpbnB1dGVkU3ZnIiwicmVmcyIsInRlc3QiLCJpbm5lckhUTUwiLCJoYW5kbGVTdmdDaGFuZ2UiLCJzdGF0ZSIsInJlcGxhY2VkUXVvdGVzIiwiZSIsInByZXZlbnREZWZhdWx0IiwidmFsdWUiLCJoYW5kbGVTdmdDaGFuZ2VzIiwicmVnZXgiLCJtYXRjaCIsImVuY29kZUFsbCIsInJlcGxhY2UiLCJlbmNvZGVVUklDb21wb25lbnQiLCJ4bG1ucyIsImFkZFhsbW5zIiwiYmFja2dyb3VuZEltYWdlIiwiY3NzQmFja2dyb3VuZEltYWdlIiwibmF2aWdhdG9yIiwiY2xpcGJvYXJkIiwid3JpdGVUZXh0IiwiY29weUJ1dHRvblRleHQiLCJzZXRUaW1lb3V0Iiwic2VsZWN0IiwiZmlsZSIsImZpbGVzIiwic2VsZWN0ZWRGaWxlIiwic2l6ZSIsImFsZXJ0IiwicmVhZGVyIiwiRmlsZVJlYWRlciIsIm9ubG9hZCIsImhhbmRsZUZpbGVMb2FkIiwicmVhZEFzVGV4dCIsImRlY29kZUFsbCIsImNvcHlTdWNjZXNzIiwiaGFuZGxlRm9jdXMiLCJoYW5kbGVGaWxlSW5wdXQiLCJ1dGlsU3R5bGVzIiwidGV4dEFyZWFDb3B5IiwiYnV0dG9uIiwiY29weVRvQ2xpcEJvYXJkIiwiaGVpZ2h0IiwiYmFja2dyb3VuZFBvc2l0aW9uIiwiYmFja2dyb3VuZFJlcGVhdCIsImJhY2tncm91bmRDb2xvciIsIlJlYWN0IiwiQ29tcG9uZW50Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztDQUNBOztBQUNBOztJQUVNQSxHOzs7OztBQUNKLGlCQUFjO0FBQUE7O0FBQUE7O0FBQ1o7O0FBRFkseU5Ba0JHLFVB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TixDQUZGLENBRFMsR0F1QlAsSUF4Qk4sRUF5QkU7QUFBSyxpQkFBUyxFQUFDLEVBQWY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxTQUNFO0FBQUksaUJBQVMsMkJBQWI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxvQkFERixFQUVFO0FBQ0UsaUJBQVMsRUFBQyxPQURaO0FBRUUsYUFBSyxFQUFFO0FBQ0xxQixnQkFBTSxFQUFFLEdBREg7QUFFTDtBQUNBMUIseUJBQWUsa0JBQVVBLGVBQVYsUUFIVjtBQUlMMkIsNEJBQWtCLEVBQUUsUUFKZjtBQUtMQywwQkFBZ0IsRUFBRSxXQUxiO0FBTUxDLHlCQUFlLEVBQUU7QUFOWixTQUZUO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsU0FXR1gsU0FYSCxDQUZGLENBekJGLENBN0JGLEVBd0VFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsUUF4RUYsQ0FERjtBQTRFRDs7OztFQTlMZVksNENBQUssQ0FBQ0MsUzs7QUFpTVR6RCxrRUFBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9pbmRleC43ODc3OTk5MzhlYjYyNmY2N2RhOC5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IGN4IGZyb20gXCJjbGFzc25hbWVzXCI7XHJcbi8vIGltcG9ydCBnbG9iYWxTdHlsZXMgZnJvbSBcIi4uL3N0eWxlcy9ib290c3RyYXAubW9kdWxlLmNzc1wiO1xyXG5pbXBvcnQgdXRpbFN0eWxlcyBmcm9tIFwiLi4vc3R5bGVzL3V0aWxzLm1vZHVsZS5jc3NcIjtcclxuXHJcbmNsYXNzIEFwcCBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XHJcbiAgY29uc3RydWN0b3IoKSB7XHJcbiAgICBzdXBlcigpO1xyXG4gICAgdGhpcy5zdGF0ZSA9IHtcclxuICAgICAgaW5wdXRlZFN2ZzogXCJcIixcclxuICAgICAgLy8gJzxzdmcgd2lkdGg9XCI1MFwiIGhlaWdodD1cIjQ0XCIgdmlld0JveD1cIjAgMCA1MCA0NFwiIGZpbGw9XCJub25lXCIgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiPiA8cGF0aCBmaWxsUnVsZT1cImV2ZW5vZGRcIiBjbGlwUnVsZT1cImV2ZW5vZGRcIiBkPVwiTTMwLjMwNjcgMS4xMjg2OUMzMS45Njk1IDAuNDM0NzkgMzMuNzUxOCAwLjA3NzYzNjcgMzUuNTUxNiAwLjA3NzYzNjdDMzcuMzUxNSAwLjA3NzYzNjcgMzkuMTMzOCAwLjQzNDc5IDQwLjc5NjYgMS4xMjg2OUM0Mi40NTkxIDEuODIyNDcgNDMuOTY5NiAyLjgzOTI4IDQ1LjI0MTggNC4xMjEwNUM0Ni41MTQ1IDUuNDAyNCA0Ny41MjQ4IDYuOTI0NCA0OC4yMTM3IDguNTk4NzdDNDguOTAyNiAxMC4yNzM0IDQ5LjI1NzMgMTIuMDY4NCA0OS4yNTczIDEzLjg4MTJDNDkuMjU3MyAxNS42OTM5IDQ4LjkwMjYgMTcuNDg4OSA0OC4yMTM3IDE5LjE2MzZDNDcuNTI0NyAyMC44MzgxIDQ2LjUxNSAyMi4zNTk1IDQ1LjI0MjIgMjMuNjQwOUM0NS4yNDIxIDIzLjY0MSA0NS4yNDIzIDIzLjY0MDggNDUuMjQyMiAyMy42NDA5TDI2LjYwNzggNDIuNDA4NEMyNS43ODQ2IDQzLjIzNzUgMjQuNDQ5OSA0My4yMzc1IDIzLjYyNjYgNDIuNDA4NEw0Ljk5MjIzIDIzLjY0MDlDMi40MjIxMyAyMS4wNTI1IDAuOTc4MjcxIDE3LjU0MTggMC45NzgyNzEgMTMuODgxMkMwLjk3ODI3MSAxMC4yMjA1IDIuNDIyMTMgNi43MDk4NSA0Ljk5MjIzIDQuMTIxNEM3LjU2MjMyIDEuNTMyOTUgMTEuMDQ4MSAwLjA3ODc3MjEgMTQuNjgyOCAwLjA3ODc3MjFDMTguMzE3NCAwLjA3ODc3MjEgMjEuODAzMiAxLjUzMjk1IDI0LjM3MzMgNC4xMjE0TDI1LjExNzIgNC44NzA2TDI1Ljg2MDcgNC4xMjE3NUMyNS44NjA5IDQuMTIxNjMgMjUuODYwNiA0LjEyMTg3IDI1Ljg2MDcgNC4xMjE3NUMyNy4xMzMxIDIuODM5ODIgMjguNjQ0MSAxLjgyMjUzIDMwLjMwNjcgMS4xMjg2OVpNMzUuNTUxNiA0LjMyMzY4QzM0LjMwNTYgNC4zMjM2OCAzMy4wNzE3IDQuNTcwOTQgMzEuOTIwNSA1LjA1MTM0QzMwLjc2OTQgNS41MzE3MyAyOS43MjM1IDYuMjM1ODQgMjguODQyNiA3LjEyMzQ1TDI2LjYwNzggOS4zNzQyMUMyNS43ODQ2IDEwLjIwMzMgMjQuNDQ5OSAxMC4yMDMzIDIzLjYyNjYgOS4zNzQyMUwyMS4zOTIyIDcuMTIzODFDMTkuNjEyOCA1LjMzMTY0IDE3LjE5OTMgNC4zMjQ4MiAxNC42ODI4IDQuMzI0ODJDMTIuMTY2MiA0LjMyNDgyIDkuNzUyNzkgNS4zMzE2NCA3Ljk3MzM0IDcuMTIzODFDNi4xOTM4OSA4LjkxNTk3IDUuMTk0MiAxMS4zNDY3IDUuMTk0MiAxMy44ODEyQzUuMTk0MiAxNi40MTU3IDYuMTkzODkgMTguODQ2NCA3Ljk3MzM0IDIwLjYzODVMMjUuMTE3MiAzNy45MDQ4TDQyLjI2MTEgMjAuNjM4NUM0My4xNDI0IDE5Ljc1MTMgNDMuODQxOCAxOC42OTc2IDQ0LjMxODggMTcuNTM4MkM0NC43OTU4IDE2LjM3ODggNDUuMDQxMyAxNS4xMzYxIDQ1LjA0MTMgMTMuODgxMkM0NS4wNDEzIDEyLjYyNjIgNDQuNzk1OCAxMS4zODM1IDQ0LjMxODggMTAuMjI0MUM0My44NDE4IDkuMDY0NzMgNDMuMTQyNyA4LjAxMTM1IDQyLjI2MTQgNy4xMjQxNkM0MS4zODA1IDYuMjM2NTUgNDAuMzMzOSA1LjUzMTczIDM5LjE4MjcgNS4wNTEzNEMzOC4wMzE2IDQuNTcwOTQgMzYuNzk3NyA0LjMyMzY4IDM1LjU1MTYgNC4zMjM2OFpcIiBmaWxsPVwiIzZDNkI2QlwiLz48L3N2Zz4nLFxyXG4gICAgICBjc3NCYWNrZ3JvdW5kSW1hZ2U6IFwiXCIsXHJcbiAgICAgIGRlY29kZUFsbDogXCJcIixcclxuICAgICAgY29weVN1Y2Nlc3M6IFwiXCIsXHJcbiAgICAgIGJhY2tncm91bmRJbWFnZTogXCJcIixcclxuICAgICAgc2VsZWN0ZWRGaWxlOiBudWxsLFxyXG4gICAgICBjb3B5QnV0dG9uVGV4dDogXCJjbGljayBoZXJlIHRvIGNvcHlcIixcclxuICAgICAgZmlsZUNvbnRlbnQ6IG51bGwsXHJcbiAgICB9O1xyXG4gIH1cclxuICBjb21wb25lbnREaWRVcGRhdGUoKSB7XHJcbiAgICB0aGlzLmhhbmRsZVN2Z0NoYW5nZTtcclxuICAgIGNvbnNvbGUubG9nKFwidXBkYXRlZFwiKTtcclxuICB9XHJcbiAgaGFuZGxlRmlsZUxvYWQgPSAoZXZlbnQpID0+IHtcclxuICAgIGNvbnNvbGUubG9nKGV2ZW50LnRhcmdldC5yZXN1bHQpO1xyXG5cclxuICAgIGNvbnN0IGZpbGVDb250ZW50ID0gZXZlbnQudGFyZ2V0LnJlc3VsdDtcclxuICAgIHRoaXMuc2V0U3RhdGUoeyBmaWxlQ29udGVudDogZmlsZUNvbnRlbnQsIGlucHV0ZWRTdmc6IGZpbGVDb250ZW50IH0pO1xyXG4gICAgdGhpcy5yZWZzLnRlc3QuaW5uZXJIVE1MID0gZmlsZUNvbnRlbnQ7XHJcbiAgICB0aGlzLmhhbmRsZVN2Z0NoYW5nZTtcclxuICAgIGNvbnNvbGUubG9nKHRoaXMuc3RhdGUucmVwbGFjZWRRdW90ZXMpO1xyXG4gICAgLy8gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJmaWxlQ29udGVudFwiKS5pbm5lckhUTUwgPSBldmVudC50YXJnZXQucmVzdWx0O1xyXG4gIH07XHJcbiAgaGFuZGxlU3ZnQ2hhbmdlID0gKGUpID0+IHtcclxuICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuICAgIGNvbnN0IHZhbHVlID0gZS50YXJnZXQudmFsdWU7XHJcbiAgICB0aGlzLnNldFN0YXRlKFxyXG4gICAgICB7XHJcbiAgICAgICAgaW5wdXRlZFN2ZzogdmFsdWUsXHJcbiAgICAgIH0sXHJcbiAgICAgIHRoaXMuaGFuZGxlU3ZnQ2hhbmdlcyh2YWx1ZSlcclxuICAgICk7XHJcbiAgfTtcclxuICBoYW5kbGVTdmdDaGFuZ2VzID0gKHZhbHVlKSA9PiB7XHJcbiAgICBjb25zb2xlLmxvZyhgc3RhdGU6ICR7dGhpcy5zdGF0ZX0sIHZhbHVlOiAke3ZhbHVlfWApO1xyXG4gICAgLy8gY29uc3QgZGVjb2RlQWxsID0gZGVjb2RlVVJJQ29tcG9uZW50KGVuY29kZUFsbCk7XHJcbiAgICBjb25zdCByZWdleCA9XHJcbiAgICAgIFwiKHhtbG5zPVtcXFxcJ1xcXCJdaHR0cHM/OlxcXFwvXFxcXC93d3cudzMub3JnXFxcXC8yMDAwXFxcXC9zdmdbXFxcXCdcXFwiXVtec10pXCI7XHJcbiAgICAvLyBjb25zb2xlLmxvZyh2YWx1ZS5tYXRjaChyZWdleCkpO1xyXG5cclxuICAgIGlmICh2YWx1ZS5tYXRjaChyZWdleCkpIHtcclxuICAgICAgY29uc29sZS5sb2coXCJ0aGUgaW5wdXQgY29udGFpbnMgeGxtbnNcIik7XHJcbiAgICAgIHZhciBlbmNvZGVBbGwgPSB2YWx1ZS5yZXBsYWNlKFxyXG4gICAgICAgIC9bXFxyXFxuJSMoKTw+P1tcXFxcXFxdXmB7fH1dL2csXHJcbiAgICAgICAgZW5jb2RlVVJJQ29tcG9uZW50XHJcbiAgICAgICk7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICBjb25zb2xlLmxvZyhcInRoZSBpbnB1dCBkbyBub3QgY29udGFpbiB4bG1uc1wiKTtcclxuICAgICAgY29uc3QgeGxtbnMgPSBcIjxzdmcgeG1sbnM9J2h0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnJ1wiO1xyXG4gICAgICBjb25zdCBhZGRYbG1ucyA9IHRoaXMuc3RhdGUuaW5wdXRlZFN2Zy5yZXBsYWNlKC88c3ZnL2csIHhsbW5zKTtcclxuICAgICAgY29uc29sZS5sb2coYWRkWGxtbnMpO1xyXG4gICAgICB2YXIgZW5jb2RlQWxsID0gYWRkWGxtbnMucmVwbGFjZShcclxuICAgICAgICAvW1xcclxcbiUjKCk8Pj9bXFxcXFxcXV5ge3x9XS9nLFxyXG4gICAgICAgIGVuY29kZVVSSUNvbXBvbmVudFxyXG4gICAgICApO1xyXG4gICAgfVxyXG4gICAgY29uc3QgcmVwbGFjZWRRdW90ZXMgPSBlbmNvZGVBbGwucmVwbGFjZSgvXCIvZywgYCdgKTtcclxuICAgIGNvbnNvbGUubG9nKHRoaXMuc3RhdGUuaW5wdXRlZFN2Zyk7XHJcbiAgICBjb25zdCBiYWNrZ3JvdW5kSW1hZ2UgPSBgZGF0YTppbWFnZS9zdmcreG1sLCR7cmVwbGFjZWRRdW90ZXN9YDtcclxuICAgIGlmIChyZXBsYWNlZFF1b3Rlcykge1xyXG4gICAgICB2YXIgY3NzQmFja2dyb3VuZEltYWdlID0gYGJhY2tncm91bmQtaW1hZ2U6IHVybChcImRhdGE6aW1hZ2Uvc3ZnK3htbCwke3JlcGxhY2VkUXVvdGVzfVwiKWA7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICB2YXIgY3NzQmFja2dyb3VuZEltYWdlID0gYGA7XHJcbiAgICB9XHJcbiAgICBjb25zb2xlLmxvZyhjc3NCYWNrZ3JvdW5kSW1hZ2UpO1xyXG4gICAgdGhpcy5zZXRTdGF0ZSh7XHJcbiAgICAgIGNzc0JhY2tncm91bmRJbWFnZSxcclxuICAgICAgYmFja2dyb3VuZEltYWdlLFxyXG4gICAgfSk7XHJcbiAgfTtcclxuXHJcbiAgY29weVRvQ2xpcEJvYXJkID0gYXN5bmMgKCkgPT4ge1xyXG4gICAgdHJ5IHtcclxuICAgICAgYXdhaXQgbmF2aWdhdG9yLmNsaXBib2FyZC53cml0ZVRleHQodGhpcy5zdGF0ZS5jc3NCYWNrZ3JvdW5kSW1hZ2UpO1xyXG4gICAgICB0aGlzLnNldFN0YXRlKHsgY29weUJ1dHRvblRleHQ6IFwiQ29waWVkIVwiIH0pO1xyXG4gICAgfSBjYXRjaCAoZXJyKSB7XHJcbiAgICAgIHRoaXMuc2V0U3RhdGUoeyBjb3B5QnV0dG9uVGV4dDogXCJGYWlsZWQgdG8gY29weSFcIiB9KTtcclxuICAgIH1cclxuICAgIGlmICh0aGlzLnN0YXRlLmNvcHlCdXR0b25UZXh0ICE9PSAnY2xpY2sgaGVyZSB0byBjb3B5XCInKSB7XHJcbiAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xyXG4gICAgICAgIHRoaXMuc2V0U3RhdGUoKCkgPT4gKHsgY29weUJ1dHRvblRleHQ6IFwiY2xpY2sgaGVyZSB0byBjb3B5XCIgfSkpO1xyXG4gICAgICB9LCA1MDAwKTtcclxuICAgIH1cclxuICB9O1xyXG4gIGhhbmRsZUZvY3VzID0gKGV2ZW50KSA9PiBldmVudC50YXJnZXQuc2VsZWN0KCk7XHJcbiAgaGFuZGxlRmlsZUlucHV0ID0gKGUpID0+IHtcclxuICAgIC8vIGhhbmRsZSB2YWxpZGF0aW9uc1xyXG4gICAgY29uc3QgZmlsZSA9IGUudGFyZ2V0LmZpbGVzWzBdO1xyXG4gICAgdGhpcy5zZXRTdGF0ZSh7IHNlbGVjdGVkRmlsZTogZmlsZSB9KTtcclxuICAgIGNvbnNvbGUubG9nKGZpbGUpO1xyXG4gICAgaWYgKGZpbGUuc2l6ZSA+IDIwNDgpXHJcbiAgICAgIHJldHVybiBhbGVydChcImVycm9yOiBGaWxlIHVwbG9hZCBzaXplIGNhbm5vdCBleGNlZWQgbW9yZSB0aGFuIDJNQlwiKTtcclxuICAgIGVsc2UgY29uc29sZS5sb2codGhpcy5zdGF0ZS5zZWxlY3RlZEZpbGUpO1xyXG4gICAgY29uc3QgcmVhZGVyID0gbmV3IEZpbGVSZWFkZXIoKTtcclxuICAgIHJlYWRlci5vbmxvYWQgPSB0aGlzLmhhbmRsZUZpbGVMb2FkO1xyXG4gICAgcmVhZGVyLnJlYWRBc1RleHQoZmlsZSk7XHJcbiAgfTtcclxuXHJcbiAgcmVuZGVyKCkge1xyXG4gICAgY29uc3Qge1xyXG4gICAgICBpbnB1dGVkU3ZnLFxyXG4gICAgICBjc3NCYWNrZ3JvdW5kSW1hZ2UsXHJcbiAgICAgIGRlY29kZUFsbCxcclxuICAgICAgYmFja2dyb3VuZEltYWdlLFxyXG4gICAgICBjb3B5QnV0dG9uVGV4dCxcclxuICAgICAgc2VsZWN0ZWRGaWxlLFxyXG4gICAgICBmaWxlQ29udGVudCxcclxuICAgIH0gPSB0aGlzLnN0YXRlO1xyXG4gICAgcmV0dXJuIChcclxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJBcHAgY29udGFpbmVyXCI+XHJcbiAgICAgICAgey8qIDxoMyBjb250ZW50RWRpdGFibGU9XCJ0cnVlXCI+U1ZHIHRvIEJBQ0tHUk9VTkQgSU1BR0U8L2gzPiAqL31cclxuICAgICAgICA8aDM+U1ZHIHRvIEJBQ0tHUk9VTkQgSU1BR0U8L2gzPlxyXG4gICAgICAgIDxiciAvPlxyXG4gICAgICAgIDxoNT5TVkc6PC9oNT5cclxuICAgICAgICA8dGV4dGFyZWFcclxuICAgICAgICAgIGNsYXNzTmFtZT1cInctMTAwIHAtMlwiXHJcbiAgICAgICAgICB0eXBlPVwidGV4dFwiXHJcbiAgICAgICAgICByb3dzPVwiMTBcIlxyXG4gICAgICAgICAgZGVmYXVsdFZhbHVlPXtpbnB1dGVkU3ZnfVxyXG4gICAgICAgICAgb25JbnB1dD17dGhpcy5oYW5kbGVTdmdDaGFuZ2V9XHJcbiAgICAgICAgICBvbkZvY3VzPXt0aGlzLmhhbmRsZUZvY3VzfVxyXG4gICAgICAgICAgcGxhY2Vob2xkZXI9XCJQYXN0ZSBTVkcgaGVyZVwiXHJcbiAgICAgICAgLz5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZvcm0tZ3JvdXBcIj5cclxuICAgICAgICAgIDxsYWJlbCBodG1sRm9yPVwiZXhhbXBsZUZvcm1Db250cm9sRmlsZVwiPlVwbG9hZCB5b3VyIHN2ZyBmaWxlPC9sYWJlbD5cclxuICAgICAgICAgIDxpbnB1dFxyXG4gICAgICAgICAgICB0eXBlPVwiZmlsZVwiXHJcbiAgICAgICAgICAgIGFjY2VwdD1cIi5zdmdcIlxyXG4gICAgICAgICAgICAvLyB2YWx1ZT17c2VsZWN0ZWRGaWxlfVxyXG4gICAgICAgICAgICBvbkNoYW5nZT17dGhpcy5oYW5kbGVGaWxlSW5wdXR9XHJcbiAgICAgICAgICAgIG9uSW5wdXQ9e3RoaXMuaGFuZGxlU3ZnQ2hhbmdlfVxyXG4gICAgICAgICAgICBjbGFzc05hbWU9XCJmb3JtLWNvbnRyb2wtZmlsZVwiXHJcbiAgICAgICAgICAgIGlkPVwiZXhhbXBsZUZvcm1Db250cm9sRmlsZVwiXHJcbiAgICAgICAgICAvPlxyXG4gICAgICAgICAgPHByZSBpZD1cImZpbGVDb250ZW50XCI+e2ZpbGVDb250ZW50fTwvcHJlPlxyXG4gICAgICAgICAgPGRpdiByZWY9XCJ0ZXN0XCI+e2ZpbGVDb250ZW50fTwvZGl2PlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDxiciAvPlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPXtgcG9zaXRpb24tcmVsYXRpdmUgZC1mbGV4IGZsZXgtY29sdW1uIGZsZXgtd3JhcGB9PlxyXG4gICAgICAgICAge2lucHV0ZWRTdmcgPyAoXHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtgcG9zaXRpb24tcmVsYXRpdmUgYH0+XHJcbiAgICAgICAgICAgICAgPGg1PkJhY2tncm91bmQgQ1NTOjwvaDU+XHJcbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e2Bwb3NpdGlvbi1yZWxhdGl2ZSAke3V0aWxTdHlsZXMudGV4dEFyZWFDb3B5fWB9PlxyXG4gICAgICAgICAgICAgICAgPGlucHV0XHJcbiAgICAgICAgICAgICAgICAgIHJlYWRPbmx5XHJcbiAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17YHctMTAwYH1cclxuICAgICAgICAgICAgICAgICAgdHlwZT1cInRleHRcIlxyXG4gICAgICAgICAgICAgICAgICAvLyAgIHJvd3M9XCI5XCJcclxuICAgICAgICAgICAgICAgICAgZGVmYXVsdFZhbHVlPXtjc3NCYWNrZ3JvdW5kSW1hZ2V9XHJcbiAgICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiQ29weSBDU1MgYmFja2dyb3VuZyBpbWFnZSBoZXJlXCJcclxuICAgICAgICAgICAgICAgIC8+XHJcblxyXG4gICAgICAgICAgICAgICAge2Nzc0JhY2tncm91bmRJbWFnZSA/IChcclxuICAgICAgICAgICAgICAgICAgPGJ1dHRvblxyXG4gICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17YGJ0biBidG4tcHJpbWFyeSBwb3NpdGlvbi1hYnNvbHV0ZSAke3V0aWxTdHlsZXMuYnV0dG9ufWB9XHJcbiAgICAgICAgICAgICAgICAgICAgb25DbGljaz17dGhpcy5jb3B5VG9DbGlwQm9hcmR9XHJcbiAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICB7Y29weUJ1dHRvblRleHR9XHJcbiAgICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgKSA6IG51bGx9XHJcbiAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgKSA6IG51bGx9XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIlwiPlxyXG4gICAgICAgICAgICA8aDUgY2xhc3NOYW1lPXtgdGV4dC1kYW5nZXIgdGV4dC1jZW50ZXJgfT5QcmV2aWV3OjwvaDU+XHJcbiAgICAgICAgICAgIDxkaXZcclxuICAgICAgICAgICAgICBjbGFzc05hbWU9XCJ3LTEwMFwiXHJcbiAgICAgICAgICAgICAgc3R5bGU9e3tcclxuICAgICAgICAgICAgICAgIGhlaWdodDogMjU0LFxyXG4gICAgICAgICAgICAgICAgLy8gd2lkdGg6IDI1NixcclxuICAgICAgICAgICAgICAgIGJhY2tncm91bmRJbWFnZTogYHVybChcIiR7YmFja2dyb3VuZEltYWdlfVwiKWAsXHJcbiAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kUG9zaXRpb246IFwiY2VudGVyXCIsXHJcbiAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kUmVwZWF0OiBcIm5vLXJlcGVhdFwiLFxyXG4gICAgICAgICAgICAgICAgYmFja2dyb3VuZENvbG9yOiBcImJsYW5jaGVkYWxtb25kXCIsXHJcbiAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgIHtkZWNvZGVBbGx9XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgIDxiciAvPlxyXG4gICAgICA8L2Rpdj5cclxuICAgICk7XHJcbiAgfVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBBcHA7XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=