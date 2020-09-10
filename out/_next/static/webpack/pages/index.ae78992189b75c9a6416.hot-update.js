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

    Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_8__["default"])(Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__["default"])(_this), "handleFileLoad", function (event) {
      console.log(event.target.result);
      var fileContent = event.target.result;

      _this.setState({
        fileContent: fileContent,
        inputedSvg: fileContent
      });

      _this.refs.test.innerHTML = fileContent;
      _this.handleSvgChange;
      console.log(_this.state.inputedSvg); // document.getElementById("fileContent").innerHTML = event.target.result;
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
          lineNumber: 121,
          columnNumber: 7
        }
      }, __jsx("h3", {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 123,
          columnNumber: 9
        }
      }, "SVG to BACKGROUND IMAGE"), __jsx("br", {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 124,
          columnNumber: 9
        }
      }), __jsx("h5", {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 125,
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
          lineNumber: 126,
          columnNumber: 9
        }
      }), __jsx("div", {
        className: "form-group",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 135,
          columnNumber: 9
        }
      }, __jsx("label", {
        htmlFor: "exampleFormControlFile",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 136,
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
          lineNumber: 137,
          columnNumber: 11
        }
      }), __jsx("pre", {
        id: "fileContent",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 146,
          columnNumber: 11
        }
      }, fileContent), __jsx("div", {
        ref: "test",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 147,
          columnNumber: 11
        }
      }, fileContent)), __jsx("br", {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 149,
          columnNumber: 9
        }
      }), __jsx("div", {
        className: "position-relative d-flex flex-column flex-wrap",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 150,
          columnNumber: 9
        }
      }, inputedSvg ? __jsx("div", {
        className: "position-relative ",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 152,
          columnNumber: 13
        }
      }, __jsx("h5", {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 153,
          columnNumber: 15
        }
      }, "Background CSS:"), __jsx("div", {
        className: "position-relative ".concat(_styles_utils_module_css__WEBPACK_IMPORTED_MODULE_11___default.a.textAreaCopy),
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 154,
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
          lineNumber: 155,
          columnNumber: 17
        }
      }), cssBackgroundImage ? __jsx("button", {
        className: "btn btn-primary position-absolute ".concat(_styles_utils_module_css__WEBPACK_IMPORTED_MODULE_11___default.a.button),
        onClick: this.copyToClipBoard,
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 165,
          columnNumber: 19
        }
      }, copyButtonText) : null)) : null, __jsx("div", {
        className: "",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 175,
          columnNumber: 11
        }
      }, __jsx("h5", {
        className: "text-danger text-center",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 176,
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
          lineNumber: 177,
          columnNumber: 13
        }
      }, decodeAll))), __jsx("br", {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 193,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9jb250ZW50LmpzIl0sIm5hbWVzIjpbIkFwcCIsImUiLCJwcmV2ZW50RGVmYXVsdCIsInZhbHVlIiwidGFyZ2V0Iiwic2V0U3RhdGUiLCJpbnB1dGVkU3ZnIiwiaGFuZGxlU3ZnQ2hhbmdlcyIsImNvbnNvbGUiLCJsb2ciLCJzdGF0ZSIsInJlZ2V4IiwibWF0Y2giLCJlbmNvZGVBbGwiLCJyZXBsYWNlIiwiZW5jb2RlVVJJQ29tcG9uZW50IiwieGxtbnMiLCJhZGRYbG1ucyIsInJlcGxhY2VkUXVvdGVzIiwiYmFja2dyb3VuZEltYWdlIiwiY3NzQmFja2dyb3VuZEltYWdlIiwibmF2aWdhdG9yIiwiY2xpcGJvYXJkIiwid3JpdGVUZXh0IiwiY29weUJ1dHRvblRleHQiLCJzZXRUaW1lb3V0IiwiZXZlbnQiLCJzZWxlY3QiLCJmaWxlIiwiZmlsZXMiLCJzZWxlY3RlZEZpbGUiLCJzaXplIiwiYWxlcnQiLCJyZWFkZXIiLCJGaWxlUmVhZGVyIiwib25sb2FkIiwiaGFuZGxlRmlsZUxvYWQiLCJyZWFkQXNUZXh0IiwicmVzdWx0IiwiZmlsZUNvbnRlbnQiLCJyZWZzIiwidGVzdCIsImlubmVySFRNTCIsImhhbmRsZVN2Z0NoYW5nZSIsImRlY29kZUFsbCIsImNvcHlTdWNjZXNzIiwiaGFuZGxlRm9jdXMiLCJoYW5kbGVGaWxlSW5wdXQiLCJ1dGlsU3R5bGVzIiwidGV4dEFyZWFDb3B5IiwiYnV0dG9uIiwiY29weVRvQ2xpcEJvYXJkIiwiaGVpZ2h0IiwiYmFja2dyb3VuZFBvc2l0aW9uIiwiYmFja2dyb3VuZFJlcGVhdCIsImJhY2tncm91bmRDb2xvciIsIlJlYWN0IiwiQ29tcG9uZW50Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztDQUNBOztBQUNBOztJQUVNQSxHOzs7OztBQUNKLGlCQUFjO0FBQUE7O0FBQUE7O0FBQ1o7O0FBRFksME5BbUJJLFVB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M0IsY0FKSCxDQURpQixHQU9mLElBakJOLENBRkYsQ0FEUyxHQXVCUCxJQXhCTixFQXlCRTtBQUFLLGlCQUFTLEVBQUMsRUFBZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFNBQ0U7QUFBSSxpQkFBUywyQkFBYjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLG9CQURGLEVBRUU7QUFDRSxpQkFBUyxFQUFDLE9BRFo7QUFFRSxhQUFLLEVBQUU7QUFDTDRCLGdCQUFNLEVBQUUsR0FESDtBQUVMO0FBQ0FqQyx5QkFBZSxrQkFBVUEsZUFBVixRQUhWO0FBSUxrQyw0QkFBa0IsRUFBRSxRQUpmO0FBS0xDLDBCQUFnQixFQUFFLFdBTGI7QUFNTEMseUJBQWUsRUFBRTtBQU5aLFNBRlQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxTQVdHWCxTQVhILENBRkYsQ0F6QkYsQ0E3QkYsRUF3RUU7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxRQXhFRixDQURGO0FBNEVEOzs7O0VBL0xlWSw0Q0FBSyxDQUFDQyxTOztBQWtNVHpELGtFQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL2luZGV4LmFlNzg5OTIxODliNzVjOWE2NDE2LmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgY3ggZnJvbSBcImNsYXNzbmFtZXNcIjtcclxuLy8gaW1wb3J0IGdsb2JhbFN0eWxlcyBmcm9tIFwiLi4vc3R5bGVzL2Jvb3RzdHJhcC5tb2R1bGUuY3NzXCI7XHJcbmltcG9ydCB1dGlsU3R5bGVzIGZyb20gXCIuLi9zdHlsZXMvdXRpbHMubW9kdWxlLmNzc1wiO1xyXG5cclxuY2xhc3MgQXBwIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcclxuICBjb25zdHJ1Y3RvcigpIHtcclxuICAgIHN1cGVyKCk7XHJcbiAgICB0aGlzLnN0YXRlID0ge1xyXG4gICAgICBpbnB1dGVkU3ZnOiBcIlwiLFxyXG4gICAgICAvLyAnPHN2ZyB3aWR0aD1cIjUwXCIgaGVpZ2h0PVwiNDRcIiB2aWV3Qm94PVwiMCAwIDUwIDQ0XCIgZmlsbD1cIm5vbmVcIiB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCI+IDxwYXRoIGZpbGxSdWxlPVwiZXZlbm9kZFwiIGNsaXBSdWxlPVwiZXZlbm9kZFwiIGQ9XCJNMzAuMzA2NyAxLjEyODY5QzMxLjk2OTUgMC40MzQ3OSAzMy43NTE4IDAuMDc3NjM2NyAzNS41NTE2IDAuMDc3NjM2N0MzNy4zNTE1IDAuMDc3NjM2NyAzOS4xMzM4IDAuNDM0NzkgNDAuNzk2NiAxLjEyODY5QzQyLjQ1OTEgMS44MjI0NyA0My45Njk2IDIuODM5MjggNDUuMjQxOCA0LjEyMTA1QzQ2LjUxNDUgNS40MDI0IDQ3LjUyNDggNi45MjQ0IDQ4LjIxMzcgOC41OTg3N0M0OC45MDI2IDEwLjI3MzQgNDkuMjU3MyAxMi4wNjg0IDQ5LjI1NzMgMTMuODgxMkM0OS4yNTczIDE1LjY5MzkgNDguOTAyNiAxNy40ODg5IDQ4LjIxMzcgMTkuMTYzNkM0Ny41MjQ3IDIwLjgzODEgNDYuNTE1IDIyLjM1OTUgNDUuMjQyMiAyMy42NDA5QzQ1LjI0MjEgMjMuNjQxIDQ1LjI0MjMgMjMuNjQwOCA0NS4yNDIyIDIzLjY0MDlMMjYuNjA3OCA0Mi40MDg0QzI1Ljc4NDYgNDMuMjM3NSAyNC40NDk5IDQzLjIzNzUgMjMuNjI2NiA0Mi40MDg0TDQuOTkyMjMgMjMuNjQwOUMyLjQyMjEzIDIxLjA1MjUgMC45NzgyNzEgMTcuNTQxOCAwLjk3ODI3MSAxMy44ODEyQzAuOTc4MjcxIDEwLjIyMDUgMi40MjIxMyA2LjcwOTg1IDQuOTkyMjMgNC4xMjE0QzcuNTYyMzIgMS41MzI5NSAxMS4wNDgxIDAuMDc4NzcyMSAxNC42ODI4IDAuMDc4NzcyMUMxOC4zMTc0IDAuMDc4NzcyMSAyMS44MDMyIDEuNTMyOTUgMjQuMzczMyA0LjEyMTRMMjUuMTE3MiA0Ljg3MDZMMjUuODYwNyA0LjEyMTc1QzI1Ljg2MDkgNC4xMjE2MyAyNS44NjA2IDQuMTIxODcgMjUuODYwNyA0LjEyMTc1QzI3LjEzMzEgMi44Mzk4MiAyOC42NDQxIDEuODIyNTMgMzAuMzA2NyAxLjEyODY5Wk0zNS41NTE2IDQuMzIzNjhDMzQuMzA1NiA0LjMyMzY4IDMzLjA3MTcgNC41NzA5NCAzMS45MjA1IDUuMDUxMzRDMzAuNzY5NCA1LjUzMTczIDI5LjcyMzUgNi4yMzU4NCAyOC44NDI2IDcuMTIzNDVMMjYuNjA3OCA5LjM3NDIxQzI1Ljc4NDYgMTAuMjAzMyAyNC40NDk5IDEwLjIwMzMgMjMuNjI2NiA5LjM3NDIxTDIxLjM5MjIgNy4xMjM4MUMxOS42MTI4IDUuMzMxNjQgMTcuMTk5MyA0LjMyNDgyIDE0LjY4MjggNC4zMjQ4MkMxMi4xNjYyIDQuMzI0ODIgOS43NTI3OSA1LjMzMTY0IDcuOTczMzQgNy4xMjM4MUM2LjE5Mzg5IDguOTE1OTcgNS4xOTQyIDExLjM0NjcgNS4xOTQyIDEzLjg4MTJDNS4xOTQyIDE2LjQxNTcgNi4xOTM4OSAxOC44NDY0IDcuOTczMzQgMjAuNjM4NUwyNS4xMTcyIDM3LjkwNDhMNDIuMjYxMSAyMC42Mzg1QzQzLjE0MjQgMTkuNzUxMyA0My44NDE4IDE4LjY5NzYgNDQuMzE4OCAxNy41MzgyQzQ0Ljc5NTggMTYuMzc4OCA0NS4wNDEzIDE1LjEzNjEgNDUuMDQxMyAxMy44ODEyQzQ1LjA0MTMgMTIuNjI2MiA0NC43OTU4IDExLjM4MzUgNDQuMzE4OCAxMC4yMjQxQzQzLjg0MTggOS4wNjQ3MyA0My4xNDI3IDguMDExMzUgNDIuMjYxNCA3LjEyNDE2QzQxLjM4MDUgNi4yMzY1NSA0MC4zMzM5IDUuNTMxNzMgMzkuMTgyNyA1LjA1MTM0QzM4LjAzMTYgNC41NzA5NCAzNi43OTc3IDQuMzIzNjggMzUuNTUxNiA0LjMyMzY4WlwiIGZpbGw9XCIjNkM2QjZCXCIvPjwvc3ZnPicsXHJcbiAgICAgIGNzc0JhY2tncm91bmRJbWFnZTogXCJcIixcclxuICAgICAgZGVjb2RlQWxsOiBcIlwiLFxyXG4gICAgICBjb3B5U3VjY2VzczogXCJcIixcclxuICAgICAgYmFja2dyb3VuZEltYWdlOiBcIlwiLFxyXG4gICAgICBzZWxlY3RlZEZpbGU6IG51bGwsXHJcbiAgICAgIGNvcHlCdXR0b25UZXh0OiBcImNsaWNrIGhlcmUgdG8gY29weVwiLFxyXG4gICAgICBmaWxlQ29udGVudDogbnVsbCxcclxuICAgIH07XHJcbiAgfVxyXG4gIGNvbXBvbmVudERpZFVwZGF0ZSgpIHtcclxuICAgIHRoaXMuaGFuZGxlU3ZnQ2hhbmdlO1xyXG4gICAgY29uc29sZS5sb2coXCJ1cGRhdGVkXCIpO1xyXG4gIH1cclxuXHJcbiAgaGFuZGxlU3ZnQ2hhbmdlID0gKGUpID0+IHtcclxuICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuICAgIGNvbnN0IHZhbHVlID0gZS50YXJnZXQudmFsdWU7XHJcbiAgICB0aGlzLnNldFN0YXRlKFxyXG4gICAgICB7XHJcbiAgICAgICAgaW5wdXRlZFN2ZzogdmFsdWUsXHJcbiAgICAgIH0sXHJcbiAgICAgICgpID0+IHRoaXMuaGFuZGxlU3ZnQ2hhbmdlcyh2YWx1ZSlcclxuICAgICk7XHJcbiAgfTtcclxuICBoYW5kbGVTdmdDaGFuZ2VzID0gKHZhbHVlKSA9PiB7XHJcbiAgICBjb25zb2xlLmxvZyhgc3RhdGU6ICR7dGhpcy5zdGF0ZS5pbnB1dGVkU3ZnfSwgdmFsdWU6ICR7dmFsdWV9YCk7XHJcbiAgICAvLyBjb25zdCBkZWNvZGVBbGwgPSBkZWNvZGVVUklDb21wb25lbnQoZW5jb2RlQWxsKTtcclxuICAgIGNvbnN0IHJlZ2V4ID1cclxuICAgICAgXCIoeG1sbnM9W1xcXFwnXFxcIl1odHRwcz86XFxcXC9cXFxcL3d3dy53My5vcmdcXFxcLzIwMDBcXFxcL3N2Z1tcXFxcJ1xcXCJdW15zXSlcIjtcclxuICAgIC8vIGNvbnNvbGUubG9nKHZhbHVlLm1hdGNoKHJlZ2V4KSk7XHJcblxyXG4gICAgaWYgKHZhbHVlLm1hdGNoKHJlZ2V4KSkge1xyXG4gICAgICBjb25zb2xlLmxvZyhcInRoZSBpbnB1dCBjb250YWlucyB4bG1uc1wiKTtcclxuICAgICAgdmFyIGVuY29kZUFsbCA9IHZhbHVlLnJlcGxhY2UoXHJcbiAgICAgICAgL1tcXHJcXG4lIygpPD4/W1xcXFxcXF1eYHt8fV0vZyxcclxuICAgICAgICBlbmNvZGVVUklDb21wb25lbnRcclxuICAgICAgKTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIGNvbnNvbGUubG9nKFwidGhlIGlucHV0IGRvIG5vdCBjb250YWluIHhsbW5zXCIpO1xyXG4gICAgICBjb25zdCB4bG1ucyA9IFwiPHN2ZyB4bWxucz0naHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmcnXCI7XHJcbiAgICAgIGNvbnN0IGFkZFhsbW5zID0gdGhpcy5zdGF0ZS5pbnB1dGVkU3ZnLnJlcGxhY2UoLzxzdmcvZywgeGxtbnMpO1xyXG4gICAgICBjb25zb2xlLmxvZyhhZGRYbG1ucyk7XHJcbiAgICAgIHZhciBlbmNvZGVBbGwgPSBhZGRYbG1ucy5yZXBsYWNlKFxyXG4gICAgICAgIC9bXFxyXFxuJSMoKTw+P1tcXFxcXFxdXmB7fH1dL2csXHJcbiAgICAgICAgZW5jb2RlVVJJQ29tcG9uZW50XHJcbiAgICAgICk7XHJcbiAgICB9XHJcbiAgICBjb25zdCByZXBsYWNlZFF1b3RlcyA9IGVuY29kZUFsbC5yZXBsYWNlKC9cIi9nLCBgJ2ApO1xyXG4gICAgY29uc29sZS5sb2codGhpcy5zdGF0ZS5pbnB1dGVkU3ZnKTtcclxuICAgIGNvbnN0IGJhY2tncm91bmRJbWFnZSA9IGBkYXRhOmltYWdlL3N2Zyt4bWwsJHtyZXBsYWNlZFF1b3Rlc31gO1xyXG4gICAgaWYgKHJlcGxhY2VkUXVvdGVzKSB7XHJcbiAgICAgIHZhciBjc3NCYWNrZ3JvdW5kSW1hZ2UgPSBgYmFja2dyb3VuZC1pbWFnZTogdXJsKFwiZGF0YTppbWFnZS9zdmcreG1sLCR7cmVwbGFjZWRRdW90ZXN9XCIpYDtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIHZhciBjc3NCYWNrZ3JvdW5kSW1hZ2UgPSBgYDtcclxuICAgIH1cclxuICAgIGNvbnNvbGUubG9nKGNzc0JhY2tncm91bmRJbWFnZSk7XHJcbiAgICB0aGlzLnNldFN0YXRlKHtcclxuICAgICAgY3NzQmFja2dyb3VuZEltYWdlLFxyXG4gICAgICBiYWNrZ3JvdW5kSW1hZ2UsXHJcbiAgICB9KTtcclxuICB9O1xyXG5cclxuICBjb3B5VG9DbGlwQm9hcmQgPSBhc3luYyAoKSA9PiB7XHJcbiAgICB0cnkge1xyXG4gICAgICBhd2FpdCBuYXZpZ2F0b3IuY2xpcGJvYXJkLndyaXRlVGV4dCh0aGlzLnN0YXRlLmNzc0JhY2tncm91bmRJbWFnZSk7XHJcbiAgICAgIHRoaXMuc2V0U3RhdGUoeyBjb3B5QnV0dG9uVGV4dDogXCJDb3BpZWQhXCIgfSk7XHJcbiAgICB9IGNhdGNoIChlcnIpIHtcclxuICAgICAgdGhpcy5zZXRTdGF0ZSh7IGNvcHlCdXR0b25UZXh0OiBcIkZhaWxlZCB0byBjb3B5IVwiIH0pO1xyXG4gICAgfVxyXG4gICAgaWYgKHRoaXMuc3RhdGUuY29weUJ1dHRvblRleHQgIT09ICdjbGljayBoZXJlIHRvIGNvcHlcIicpIHtcclxuICAgICAgc2V0VGltZW91dCgoKSA9PiB7XHJcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSgoKSA9PiAoeyBjb3B5QnV0dG9uVGV4dDogXCJjbGljayBoZXJlIHRvIGNvcHlcIiB9KSk7XHJcbiAgICAgIH0sIDUwMDApO1xyXG4gICAgfVxyXG4gIH07XHJcbiAgaGFuZGxlRm9jdXMgPSAoZXZlbnQpID0+IGV2ZW50LnRhcmdldC5zZWxlY3QoKTtcclxuICBoYW5kbGVGaWxlSW5wdXQgPSAoZSkgPT4ge1xyXG4gICAgLy8gaGFuZGxlIHZhbGlkYXRpb25zXHJcbiAgICBjb25zdCBmaWxlID0gZS50YXJnZXQuZmlsZXNbMF07XHJcbiAgICB0aGlzLnNldFN0YXRlKHsgc2VsZWN0ZWRGaWxlOiBmaWxlIH0pO1xyXG4gICAgY29uc29sZS5sb2coZmlsZSk7XHJcbiAgICBpZiAoZmlsZS5zaXplID4gMjA0OClcclxuICAgICAgcmV0dXJuIGFsZXJ0KFwiZXJyb3I6IEZpbGUgdXBsb2FkIHNpemUgY2Fubm90IGV4Y2VlZCBtb3JlIHRoYW4gMk1CXCIpO1xyXG4gICAgZWxzZSBjb25zb2xlLmxvZyh0aGlzLnN0YXRlLnNlbGVjdGVkRmlsZSk7XHJcbiAgICBjb25zdCByZWFkZXIgPSBuZXcgRmlsZVJlYWRlcigpO1xyXG4gICAgcmVhZGVyLm9ubG9hZCA9IHRoaXMuaGFuZGxlRmlsZUxvYWQ7XHJcbiAgICByZWFkZXIucmVhZEFzVGV4dChmaWxlKTtcclxuICB9O1xyXG5cclxuICBoYW5kbGVGaWxlTG9hZCA9IChldmVudCkgPT4ge1xyXG4gICAgY29uc29sZS5sb2coZXZlbnQudGFyZ2V0LnJlc3VsdCk7XHJcblxyXG4gICAgY29uc3QgZmlsZUNvbnRlbnQgPSBldmVudC50YXJnZXQucmVzdWx0O1xyXG4gICAgdGhpcy5zZXRTdGF0ZSh7IGZpbGVDb250ZW50OiBmaWxlQ29udGVudCwgaW5wdXRlZFN2ZzogZmlsZUNvbnRlbnQgfSk7XHJcbiAgICB0aGlzLnJlZnMudGVzdC5pbm5lckhUTUwgPSBmaWxlQ29udGVudDtcclxuICAgIHRoaXMuaGFuZGxlU3ZnQ2hhbmdlO1xyXG4gICAgY29uc29sZS5sb2codGhpcy5zdGF0ZS5pbnB1dGVkU3ZnKTtcclxuICAgIC8vIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiZmlsZUNvbnRlbnRcIikuaW5uZXJIVE1MID0gZXZlbnQudGFyZ2V0LnJlc3VsdDtcclxuICB9O1xyXG4gIHJlbmRlcigpIHtcclxuICAgIGNvbnN0IHtcclxuICAgICAgaW5wdXRlZFN2ZyxcclxuICAgICAgY3NzQmFja2dyb3VuZEltYWdlLFxyXG4gICAgICBkZWNvZGVBbGwsXHJcbiAgICAgIGJhY2tncm91bmRJbWFnZSxcclxuICAgICAgY29weUJ1dHRvblRleHQsXHJcbiAgICAgIHNlbGVjdGVkRmlsZSxcclxuICAgICAgZmlsZUNvbnRlbnQsXHJcbiAgICB9ID0gdGhpcy5zdGF0ZTtcclxuICAgIHJldHVybiAoXHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiQXBwIGNvbnRhaW5lclwiPlxyXG4gICAgICAgIHsvKiA8aDMgY29udGVudEVkaXRhYmxlPVwidHJ1ZVwiPlNWRyB0byBCQUNLR1JPVU5EIElNQUdFPC9oMz4gKi99XHJcbiAgICAgICAgPGgzPlNWRyB0byBCQUNLR1JPVU5EIElNQUdFPC9oMz5cclxuICAgICAgICA8YnIgLz5cclxuICAgICAgICA8aDU+U1ZHOjwvaDU+XHJcbiAgICAgICAgPHRleHRhcmVhXHJcbiAgICAgICAgICBjbGFzc05hbWU9XCJ3LTEwMCBwLTJcIlxyXG4gICAgICAgICAgdHlwZT1cInRleHRcIlxyXG4gICAgICAgICAgcm93cz1cIjEwXCJcclxuICAgICAgICAgIGRlZmF1bHRWYWx1ZT17aW5wdXRlZFN2Z31cclxuICAgICAgICAgIG9uSW5wdXQ9e3RoaXMuaGFuZGxlU3ZnQ2hhbmdlfVxyXG4gICAgICAgICAgb25Gb2N1cz17dGhpcy5oYW5kbGVGb2N1c31cclxuICAgICAgICAgIHBsYWNlaG9sZGVyPVwiUGFzdGUgU1ZHIGhlcmVcIlxyXG4gICAgICAgIC8+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmb3JtLWdyb3VwXCI+XHJcbiAgICAgICAgICA8bGFiZWwgaHRtbEZvcj1cImV4YW1wbGVGb3JtQ29udHJvbEZpbGVcIj5VcGxvYWQgeW91ciBzdmcgZmlsZTwvbGFiZWw+XHJcbiAgICAgICAgICA8aW5wdXRcclxuICAgICAgICAgICAgdHlwZT1cImZpbGVcIlxyXG4gICAgICAgICAgICBhY2NlcHQ9XCIuc3ZnXCJcclxuICAgICAgICAgICAgLy8gdmFsdWU9e3NlbGVjdGVkRmlsZX1cclxuICAgICAgICAgICAgb25DaGFuZ2U9e3RoaXMuaGFuZGxlRmlsZUlucHV0fVxyXG4gICAgICAgICAgICBvbklucHV0PXt0aGlzLmhhbmRsZVN2Z0NoYW5nZX1cclxuICAgICAgICAgICAgY2xhc3NOYW1lPVwiZm9ybS1jb250cm9sLWZpbGVcIlxyXG4gICAgICAgICAgICBpZD1cImV4YW1wbGVGb3JtQ29udHJvbEZpbGVcIlxyXG4gICAgICAgICAgLz5cclxuICAgICAgICAgIDxwcmUgaWQ9XCJmaWxlQ29udGVudFwiPntmaWxlQ29udGVudH08L3ByZT5cclxuICAgICAgICAgIDxkaXYgcmVmPVwidGVzdFwiPntmaWxlQ29udGVudH08L2Rpdj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8YnIgLz5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT17YHBvc2l0aW9uLXJlbGF0aXZlIGQtZmxleCBmbGV4LWNvbHVtbiBmbGV4LXdyYXBgfT5cclxuICAgICAgICAgIHtpbnB1dGVkU3ZnID8gKFxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17YHBvc2l0aW9uLXJlbGF0aXZlIGB9PlxyXG4gICAgICAgICAgICAgIDxoNT5CYWNrZ3JvdW5kIENTUzo8L2g1PlxyXG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtgcG9zaXRpb24tcmVsYXRpdmUgJHt1dGlsU3R5bGVzLnRleHRBcmVhQ29weX1gfT5cclxuICAgICAgICAgICAgICAgIDxpbnB1dFxyXG4gICAgICAgICAgICAgICAgICByZWFkT25seVxyXG4gICAgICAgICAgICAgICAgICBjbGFzc05hbWU9e2B3LTEwMGB9XHJcbiAgICAgICAgICAgICAgICAgIHR5cGU9XCJ0ZXh0XCJcclxuICAgICAgICAgICAgICAgICAgLy8gICByb3dzPVwiOVwiXHJcbiAgICAgICAgICAgICAgICAgIGRlZmF1bHRWYWx1ZT17Y3NzQmFja2dyb3VuZEltYWdlfVxyXG4gICAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cIkNvcHkgQ1NTIGJhY2tncm91bmcgaW1hZ2UgaGVyZVwiXHJcbiAgICAgICAgICAgICAgICAvPlxyXG5cclxuICAgICAgICAgICAgICAgIHtjc3NCYWNrZ3JvdW5kSW1hZ2UgPyAoXHJcbiAgICAgICAgICAgICAgICAgIDxidXR0b25cclxuICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9e2BidG4gYnRuLXByaW1hcnkgcG9zaXRpb24tYWJzb2x1dGUgJHt1dGlsU3R5bGVzLmJ1dHRvbn1gfVxyXG4gICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9e3RoaXMuY29weVRvQ2xpcEJvYXJkfVxyXG4gICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAge2NvcHlCdXR0b25UZXh0fVxyXG4gICAgICAgICAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICAgICAgICAgICkgOiBudWxsfVxyXG4gICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICkgOiBudWxsfVxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJcIj5cclxuICAgICAgICAgICAgPGg1IGNsYXNzTmFtZT17YHRleHQtZGFuZ2VyIHRleHQtY2VudGVyYH0+UHJldmlldzo8L2g1PlxyXG4gICAgICAgICAgICA8ZGl2XHJcbiAgICAgICAgICAgICAgY2xhc3NOYW1lPVwidy0xMDBcIlxyXG4gICAgICAgICAgICAgIHN0eWxlPXt7XHJcbiAgICAgICAgICAgICAgICBoZWlnaHQ6IDI1NCxcclxuICAgICAgICAgICAgICAgIC8vIHdpZHRoOiAyNTYsXHJcbiAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kSW1hZ2U6IGB1cmwoXCIke2JhY2tncm91bmRJbWFnZX1cIilgLFxyXG4gICAgICAgICAgICAgICAgYmFja2dyb3VuZFBvc2l0aW9uOiBcImNlbnRlclwiLFxyXG4gICAgICAgICAgICAgICAgYmFja2dyb3VuZFJlcGVhdDogXCJuby1yZXBlYXRcIixcclxuICAgICAgICAgICAgICAgIGJhY2tncm91bmRDb2xvcjogXCJibGFuY2hlZGFsbW9uZFwiLFxyXG4gICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICB7ZGVjb2RlQWxsfVxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICA8YnIgLz5cclxuICAgICAgPC9kaXY+XHJcbiAgICApO1xyXG4gIH1cclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgQXBwO1xyXG4iXSwic291cmNlUm9vdCI6IiJ9