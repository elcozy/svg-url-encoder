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
        //if input have the xlmns
        var encodeAll = value.replace(/[\r\n%#()<>?[\\\]^`{|}]/g, encodeURIComponent);
      } else {
        //if input do not have the xlmns
        var xlmns = "<svg xmlns='http://www.w3.org/2000/svg'";
        var addXlmns = value.replace(/<svg/g, xlmns);
        console.log(addXlmns);
        var encodeAll = addXlmns.replace(/[\r\n%#()<>?[\\\]^`{|}]/g, encodeURIComponent);
      } // replacing double quotes to single quotes


      var replacedQuotes = encodeAll.replace(/"/g, "'");
      console.log(value);
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

    Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_8__["default"])(Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__["default"])(_this), "changeBackground", function () {
      document.getElementsByTagName("body").style.backgroundColor = "blue";
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
    key: "componentDidUpdate",
    value: function componentDidUpdate() {
      // this.handleSvgChange;
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
          fileContent = _this$state.fileContent;
      return __jsx("div", {
        className: "App container",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 126,
          columnNumber: 7
        }
      }, __jsx("div", {
        style: {
          height: 25,
          width: 25,
          backgroundImage: "red",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          backgroundColor: "whitesmoke"
        },
        onClick: this.changeBackground,
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 127,
          columnNumber: 9
        }
      }), __jsx("h3", {
        className: "text-center",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 139,
          columnNumber: 9
        }
      }, "Encode svg image to use for CSS background"), __jsx("br", {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 142,
          columnNumber: 9
        }
      }), __jsx("div", {
        className: "",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 144,
          columnNumber: 9
        }
      }, __jsx("label", {
        htmlFor: "exampleFormControlFile",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 145,
          columnNumber: 11
        }
      }, "Upload your svg file or paste the code below"), __jsx("input", {
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
          lineNumber: 148,
          columnNumber: 11
        }
      })), __jsx("h5", {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 160,
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
          lineNumber: 161,
          columnNumber: 9
        }
      }), __jsx("br", {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 171,
          columnNumber: 9
        }
      }), __jsx("div", {
        className: "position-relative d-flex flex-column flex-wrap",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 172,
          columnNumber: 9
        }
      }, inputedSvg ? __jsx("div", {
        className: "position-relative ",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 174,
          columnNumber: 13
        }
      }, __jsx("h5", {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 175,
          columnNumber: 15
        }
      }, "Background CSS:"), __jsx("div", {
        className: "position-relative ".concat(_styles_utils_module_css__WEBPACK_IMPORTED_MODULE_11___default.a.textAreaCopy),
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 176,
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
          lineNumber: 177,
          columnNumber: 17
        }
      }), cssBackgroundImage ? __jsx("button", {
        className: "btn btn-primary position-absolute ".concat(_styles_utils_module_css__WEBPACK_IMPORTED_MODULE_11___default.a.button),
        onClick: this.copyToClipBoard,
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 187,
          columnNumber: 19
        }
      }, copyButtonText) : null)) : null, __jsx("div", {
        className: "",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 197,
          columnNumber: 11
        }
      }, __jsx("h5", {
        className: "",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 198,
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
          lineNumber: 199,
          columnNumber: 13
        }
      }, decodeAll))), __jsx("br", {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 215,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9jb250ZW50LmpzIl0sIm5hbWVzIjpbIkFwcCIsImUiLCJwcmV2ZW50RGVmYXVsdCIsInZhbHVlIiwidGFyZ2V0Iiwic2V0U3RhdGUiLCJpbnB1dGVkU3ZnIiwiaGFuZGxlU3ZnQ2hhbmdlcyIsImNvbnNvbGUiLCJsb2ciLCJzdGF0ZSIsInJlZ2V4IiwibWF0Y2giLCJlbmNvZGVBbGwiLCJyZXBsYWNlIiwiZW5jb2RlVVJJQ29tcG9uZW50IiwieGxtbnMiLCJhZGRYbG1ucyIsInJlcGxhY2VkUXVvdGVzIiwiYmFja2dyb3VuZEltYWdlIiwiY3NzQmFja2dyb3VuZEltYWdlIiwibmF2aWdhdG9yIiwiY2xpcGJvYXJkIiwid3JpdGVUZXh0IiwiY29weUJ1dHRvblRleHQiLCJzZXRUaW1lb3V0IiwiZXZlbnQiLCJzZWxlY3QiLCJmaWxlIiwiZmlsZXMiLCJzZWxlY3RlZEZpbGUiLCJzaXplIiwiYWxlcnQiLCJyZWFkZXIiLCJGaWxlUmVhZGVyIiwib25sb2FkIiwiaGFuZGxlRmlsZUxvYWQiLCJyZWFkQXNUZXh0IiwicmVzdWx0IiwiZmlsZUNvbnRlbnQiLCJkb2N1bWVudCIsImdldEVsZW1lbnRzQnlUYWdOYW1lIiwic3R5bGUiLCJiYWNrZ3JvdW5kQ29sb3IiLCJkZWNvZGVBbGwiLCJjb3B5U3VjY2VzcyIsImhlaWdodCIsIndpZHRoIiwiYmFja2dyb3VuZFBvc2l0aW9uIiwiYmFja2dyb3VuZFJlcGVhdCIsImNoYW5nZUJhY2tncm91bmQiLCJoYW5kbGVGaWxlSW5wdXQiLCJoYW5kbGVTdmdDaGFuZ2UiLCJoYW5kbGVGb2N1cyIsInV0aWxTdHlsZXMiLCJ0ZXh0QXJlYUNvcHkiLCJidXR0b24iLCJjb3B5VG9DbGlwQm9hcmQiLCJSZWFjdCIsIkNvbXBvbmVudCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Q0FDQTs7QUFDQTs7SUFFTUEsRzs7Ozs7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QixHQUNqQjtBQUNFLGlCQUFTLDhDQUF1Q2tDLGdFQUFVLENBQUNFLE1BQWxELENBRFg7QUFFRSxlQUFPLEVBQUUsS0FBS0MsZUFGaEI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxTQUlHakMsY0FKSCxDQURpQixHQU9mLElBakJOLENBRkYsQ0FEUyxHQXVCUCxJQXhCTixFQXlCRTtBQUFLLGlCQUFTLEVBQUMsRUFBZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFNBQ0U7QUFBSSxpQkFBUyxJQUFiO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsb0JBREYsRUFFRTtBQUNFLGlCQUFTLEVBQUMsT0FEWjtBQUVFLGFBQUssRUFBRTtBQUNMc0IsZ0JBQU0sRUFBRSxHQURIO0FBRUw7QUFDQTNCLHlCQUFlLGtCQUFVQSxlQUFWLFFBSFY7QUFJTDZCLDRCQUFrQixFQUFFLFFBSmY7QUFLTEMsMEJBQWdCLEVBQUUsV0FMYjtBQU1MTix5QkFBZSxFQUFFO0FBTlosU0FGVDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFNBV0dDLFNBWEgsQ0FGRixDQXpCRixDQTlDRixFQXlGRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFFBekZGLENBREY7QUE2RkQ7Ozs7RUFyTmVjLDRDQUFLLENBQUNDLFM7O0FBd05UM0Qsa0VBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvaW5kZXguZGYzN2Q5ODNhMWYyODI0Y2JhNTIuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBjeCBmcm9tIFwiY2xhc3NuYW1lc1wiO1xyXG4vLyBpbXBvcnQgZ2xvYmFsU3R5bGVzIGZyb20gXCIuLi9zdHlsZXMvYm9vdHN0cmFwLm1vZHVsZS5jc3NcIjtcclxuaW1wb3J0IHV0aWxTdHlsZXMgZnJvbSBcIi4uL3N0eWxlcy91dGlscy5tb2R1bGUuY3NzXCI7XHJcblxyXG5jbGFzcyBBcHAgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xyXG4gIGNvbnN0cnVjdG9yKCkge1xyXG4gICAgc3VwZXIoKTtcclxuICAgIHRoaXMuc3RhdGUgPSB7XHJcbiAgICAgIGlucHV0ZWRTdmc6IFwiXCIsXHJcbiAgICAgIC8vICc8c3ZnIHdpZHRoPVwiNTBcIiBoZWlnaHQ9XCI0NFwiIHZpZXdCb3g9XCIwIDAgNTAgNDRcIiBmaWxsPVwibm9uZVwiIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIj4gPHBhdGggZmlsbFJ1bGU9XCJldmVub2RkXCIgY2xpcFJ1bGU9XCJldmVub2RkXCIgZD1cIk0zMC4zMDY3IDEuMTI4NjlDMzEuOTY5NSAwLjQzNDc5IDMzLjc1MTggMC4wNzc2MzY3IDM1LjU1MTYgMC4wNzc2MzY3QzM3LjM1MTUgMC4wNzc2MzY3IDM5LjEzMzggMC40MzQ3OSA0MC43OTY2IDEuMTI4NjlDNDIuNDU5MSAxLjgyMjQ3IDQzLjk2OTYgMi44MzkyOCA0NS4yNDE4IDQuMTIxMDVDNDYuNTE0NSA1LjQwMjQgNDcuNTI0OCA2LjkyNDQgNDguMjEzNyA4LjU5ODc3QzQ4LjkwMjYgMTAuMjczNCA0OS4yNTczIDEyLjA2ODQgNDkuMjU3MyAxMy44ODEyQzQ5LjI1NzMgMTUuNjkzOSA0OC45MDI2IDE3LjQ4ODkgNDguMjEzNyAxOS4xNjM2QzQ3LjUyNDcgMjAuODM4MSA0Ni41MTUgMjIuMzU5NSA0NS4yNDIyIDIzLjY0MDlDNDUuMjQyMSAyMy42NDEgNDUuMjQyMyAyMy42NDA4IDQ1LjI0MjIgMjMuNjQwOUwyNi42MDc4IDQyLjQwODRDMjUuNzg0NiA0My4yMzc1IDI0LjQ0OTkgNDMuMjM3NSAyMy42MjY2IDQyLjQwODRMNC45OTIyMyAyMy42NDA5QzIuNDIyMTMgMjEuMDUyNSAwLjk3ODI3MSAxNy41NDE4IDAuOTc4MjcxIDEzLjg4MTJDMC45NzgyNzEgMTAuMjIwNSAyLjQyMjEzIDYuNzA5ODUgNC45OTIyMyA0LjEyMTRDNy41NjIzMiAxLjUzMjk1IDExLjA0ODEgMC4wNzg3NzIxIDE0LjY4MjggMC4wNzg3NzIxQzE4LjMxNzQgMC4wNzg3NzIxIDIxLjgwMzIgMS41MzI5NSAyNC4zNzMzIDQuMTIxNEwyNS4xMTcyIDQuODcwNkwyNS44NjA3IDQuMTIxNzVDMjUuODYwOSA0LjEyMTYzIDI1Ljg2MDYgNC4xMjE4NyAyNS44NjA3IDQuMTIxNzVDMjcuMTMzMSAyLjgzOTgyIDI4LjY0NDEgMS44MjI1MyAzMC4zMDY3IDEuMTI4NjlaTTM1LjU1MTYgNC4zMjM2OEMzNC4zMDU2IDQuMzIzNjggMzMuMDcxNyA0LjU3MDk0IDMxLjkyMDUgNS4wNTEzNEMzMC43Njk0IDUuNTMxNzMgMjkuNzIzNSA2LjIzNTg0IDI4Ljg0MjYgNy4xMjM0NUwyNi42MDc4IDkuMzc0MjFDMjUuNzg0NiAxMC4yMDMzIDI0LjQ0OTkgMTAuMjAzMyAyMy42MjY2IDkuMzc0MjFMMjEuMzkyMiA3LjEyMzgxQzE5LjYxMjggNS4zMzE2NCAxNy4xOTkzIDQuMzI0ODIgMTQuNjgyOCA0LjMyNDgyQzEyLjE2NjIgNC4zMjQ4MiA5Ljc1Mjc5IDUuMzMxNjQgNy45NzMzNCA3LjEyMzgxQzYuMTkzODkgOC45MTU5NyA1LjE5NDIgMTEuMzQ2NyA1LjE5NDIgMTMuODgxMkM1LjE5NDIgMTYuNDE1NyA2LjE5Mzg5IDE4Ljg0NjQgNy45NzMzNCAyMC42Mzg1TDI1LjExNzIgMzcuOTA0OEw0Mi4yNjExIDIwLjYzODVDNDMuMTQyNCAxOS43NTEzIDQzLjg0MTggMTguNjk3NiA0NC4zMTg4IDE3LjUzODJDNDQuNzk1OCAxNi4zNzg4IDQ1LjA0MTMgMTUuMTM2MSA0NS4wNDEzIDEzLjg4MTJDNDUuMDQxMyAxMi42MjYyIDQ0Ljc5NTggMTEuMzgzNSA0NC4zMTg4IDEwLjIyNDFDNDMuODQxOCA5LjA2NDczIDQzLjE0MjcgOC4wMTEzNSA0Mi4yNjE0IDcuMTI0MTZDNDEuMzgwNSA2LjIzNjU1IDQwLjMzMzkgNS41MzE3MyAzOS4xODI3IDUuMDUxMzRDMzguMDMxNiA0LjU3MDk0IDM2Ljc5NzcgNC4zMjM2OCAzNS41NTE2IDQuMzIzNjhaXCIgZmlsbD1cIiM2QzZCNkJcIi8+PC9zdmc+JyxcclxuICAgICAgY3NzQmFja2dyb3VuZEltYWdlOiBcIlwiLFxyXG4gICAgICBkZWNvZGVBbGw6IFwiXCIsXHJcbiAgICAgIGNvcHlTdWNjZXNzOiBcIlwiLFxyXG4gICAgICBiYWNrZ3JvdW5kSW1hZ2U6IFwiXCIsXHJcbiAgICAgIGNvcHlCdXR0b25UZXh0OiBcImNsaWNrIGhlcmUgdG8gY29weVwiLFxyXG4gICAgICBmaWxlQ29udGVudDogbnVsbCxcclxuICAgIH07XHJcbiAgfVxyXG4gIGNvbXBvbmVudERpZFVwZGF0ZSgpIHtcclxuICAgIC8vIHRoaXMuaGFuZGxlU3ZnQ2hhbmdlO1xyXG4gICAgY29uc29sZS5sb2coXCJ1cGRhdGVkXCIpO1xyXG4gIH1cclxuXHJcbiAgaGFuZGxlU3ZnQ2hhbmdlID0gKGUpID0+IHtcclxuICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuICAgIGNvbnN0IHZhbHVlID0gZS50YXJnZXQudmFsdWU7XHJcbiAgICB0aGlzLnNldFN0YXRlKFxyXG4gICAgICB7XHJcbiAgICAgICAgaW5wdXRlZFN2ZzogdmFsdWUsXHJcbiAgICAgIH0sXHJcbiAgICAgICgpID0+IHRoaXMuaGFuZGxlU3ZnQ2hhbmdlcyh2YWx1ZSlcclxuICAgICk7XHJcbiAgfTtcclxuICBoYW5kbGVTdmdDaGFuZ2VzID0gKHZhbHVlKSA9PiB7XHJcbiAgICBjb25zb2xlLmxvZyhgc3RhdGU6ICR7dGhpcy5zdGF0ZS5pbnB1dGVkU3ZnfSwgdmFsdWU6ICR7dmFsdWV9YCk7XHJcbiAgICAvLyBjb25zdCBkZWNvZGVBbGwgPSBkZWNvZGVVUklDb21wb25lbnQoZW5jb2RlQWxsKTtcclxuXHJcbiAgICBjb25zdCByZWdleCA9XHJcbiAgICAgIFwiKHhtbG5zPVtcXFxcJ1xcXCJdaHR0cHM/OlxcXFwvXFxcXC93d3cudzMub3JnXFxcXC8yMDAwXFxcXC9zdmdbXFxcXCdcXFwiXVtec10pXCI7XHJcbiAgICAvLyBjb25zb2xlLmxvZyh2YWx1ZS5tYXRjaChyZWdleCkpO1xyXG5cclxuICAgIGlmICh2YWx1ZS5tYXRjaChyZWdleCkpIHtcclxuICAgICAgLy9pZiBpbnB1dCBoYXZlIHRoZSB4bG1uc1xyXG4gICAgICB2YXIgZW5jb2RlQWxsID0gdmFsdWUucmVwbGFjZShcclxuICAgICAgICAvW1xcclxcbiUjKCk8Pj9bXFxcXFxcXV5ge3x9XS9nLFxyXG4gICAgICAgIGVuY29kZVVSSUNvbXBvbmVudFxyXG4gICAgICApO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgLy9pZiBpbnB1dCBkbyBub3QgaGF2ZSB0aGUgeGxtbnNcclxuICAgICAgY29uc3QgeGxtbnMgPSBcIjxzdmcgeG1sbnM9J2h0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnJ1wiO1xyXG4gICAgICBjb25zdCBhZGRYbG1ucyA9IHZhbHVlLnJlcGxhY2UoLzxzdmcvZywgeGxtbnMpO1xyXG4gICAgICBjb25zb2xlLmxvZyhhZGRYbG1ucyk7XHJcbiAgICAgIHZhciBlbmNvZGVBbGwgPSBhZGRYbG1ucy5yZXBsYWNlKFxyXG4gICAgICAgIC9bXFxyXFxuJSMoKTw+P1tcXFxcXFxdXmB7fH1dL2csXHJcbiAgICAgICAgZW5jb2RlVVJJQ29tcG9uZW50XHJcbiAgICAgICk7XHJcbiAgICB9XHJcbiAgICAvLyByZXBsYWNpbmcgZG91YmxlIHF1b3RlcyB0byBzaW5nbGUgcXVvdGVzXHJcbiAgICBjb25zdCByZXBsYWNlZFF1b3RlcyA9IGVuY29kZUFsbC5yZXBsYWNlKC9cIi9nLCBgJ2ApO1xyXG4gICAgY29uc29sZS5sb2codmFsdWUpO1xyXG4gICAgY29uc3QgYmFja2dyb3VuZEltYWdlID0gYGRhdGE6aW1hZ2Uvc3ZnK3htbCwke3JlcGxhY2VkUXVvdGVzfWA7XHJcbiAgICBpZiAocmVwbGFjZWRRdW90ZXMpIHtcclxuICAgICAgdmFyIGNzc0JhY2tncm91bmRJbWFnZSA9IGBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXCJkYXRhOmltYWdlL3N2Zyt4bWwsJHtyZXBsYWNlZFF1b3Rlc31cIilgO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgdmFyIGNzc0JhY2tncm91bmRJbWFnZSA9IGBgO1xyXG4gICAgfVxyXG4gICAgY29uc29sZS5sb2coY3NzQmFja2dyb3VuZEltYWdlKTtcclxuICAgIHRoaXMuc2V0U3RhdGUoe1xyXG4gICAgICBjc3NCYWNrZ3JvdW5kSW1hZ2UsXHJcbiAgICAgIGJhY2tncm91bmRJbWFnZSxcclxuICAgIH0pO1xyXG4gIH07XHJcblxyXG4gIGNvcHlUb0NsaXBCb2FyZCA9IGFzeW5jICgpID0+IHtcclxuICAgIHRyeSB7XHJcbiAgICAgIGF3YWl0IG5hdmlnYXRvci5jbGlwYm9hcmQud3JpdGVUZXh0KHRoaXMuc3RhdGUuY3NzQmFja2dyb3VuZEltYWdlKTtcclxuICAgICAgdGhpcy5zZXRTdGF0ZSh7IGNvcHlCdXR0b25UZXh0OiBcIkNvcGllZCFcIiB9KTtcclxuICAgIH0gY2F0Y2ggKGVycikge1xyXG4gICAgICB0aGlzLnNldFN0YXRlKHsgY29weUJ1dHRvblRleHQ6IFwiRmFpbGVkIHRvIGNvcHkhXCIgfSk7XHJcbiAgICB9XHJcbiAgICBpZiAodGhpcy5zdGF0ZS5jb3B5QnV0dG9uVGV4dCAhPT0gJ2NsaWNrIGhlcmUgdG8gY29weVwiJykge1xyXG4gICAgICBzZXRUaW1lb3V0KCgpID0+IHtcclxuICAgICAgICB0aGlzLnNldFN0YXRlKCgpID0+ICh7IGNvcHlCdXR0b25UZXh0OiBcImNsaWNrIGhlcmUgdG8gY29weVwiIH0pKTtcclxuICAgICAgfSwgNTAwMCk7XHJcbiAgICB9XHJcbiAgfTtcclxuICBoYW5kbGVGb2N1cyA9IChldmVudCkgPT4gZXZlbnQudGFyZ2V0LnNlbGVjdCgpO1xyXG5cclxuICBoYW5kbGVGaWxlSW5wdXQgPSAoZSkgPT4ge1xyXG4gICAgLy8gaGFuZGxlIHZhbGlkYXRpb25zXHJcbiAgICBjb25zdCBmaWxlID0gZS50YXJnZXQuZmlsZXNbMF07XHJcbiAgICB0aGlzLnNldFN0YXRlKHsgc2VsZWN0ZWRGaWxlOiBmaWxlIH0pO1xyXG4gICAgY29uc29sZS5sb2coZmlsZSk7XHJcbiAgICBpZiAoZmlsZS5zaXplID4gMjA0OClcclxuICAgICAgcmV0dXJuIGFsZXJ0KFwiZXJyb3I6IEZpbGUgdXBsb2FkIHNpemUgY2Fubm90IGV4Y2VlZCBtb3JlIHRoYW4gMk1CXCIpO1xyXG4gICAgZWxzZSBjb25zb2xlLmxvZyh0aGlzLnN0YXRlLnNlbGVjdGVkRmlsZSk7XHJcbiAgICBjb25zdCByZWFkZXIgPSBuZXcgRmlsZVJlYWRlcigpO1xyXG4gICAgcmVhZGVyLm9ubG9hZCA9IHRoaXMuaGFuZGxlRmlsZUxvYWQ7XHJcbiAgICByZWFkZXIucmVhZEFzVGV4dChmaWxlKTtcclxuICB9O1xyXG5cclxuICBoYW5kbGVGaWxlTG9hZCA9IChldmVudCkgPT4ge1xyXG4gICAgY29uc29sZS5sb2coZXZlbnQudGFyZ2V0LnJlc3VsdCk7XHJcbiAgICAvLyAgIGdldHRpbmcgdGhlIHN2ZyBmcm9tICB1cGxvYWRlZCBpbWFnZVxyXG4gICAgY29uc3QgZmlsZUNvbnRlbnQgPSBldmVudC50YXJnZXQucmVzdWx0O1xyXG4gICAgdGhpcy5zZXRTdGF0ZSh7IGZpbGVDb250ZW50OiBmaWxlQ29udGVudCwgaW5wdXRlZFN2ZzogZmlsZUNvbnRlbnQgfSwgKCkgPT5cclxuICAgICAgdGhpcy5oYW5kbGVTdmdDaGFuZ2VzKGZpbGVDb250ZW50KVxyXG4gICAgKTtcclxuICAgIC8vIHRoaXMucmVmcy50ZXN0LmlubmVySFRNTCA9IGZpbGVDb250ZW50O1xyXG4gICAgLy8gdGhpcy5oYW5kbGVTdmdDaGFuZ2VzO1xyXG4gICAgY29uc29sZS5sb2codGhpcy5zdGF0ZS5pbnB1dGVkU3ZnKTtcclxuICB9O1xyXG4gIGNoYW5nZUJhY2tncm91bmQgPSAoKSA9PiB7XHJcbiAgICBkb2N1bWVudC5nZXRFbGVtZW50c0J5VGFnTmFtZShcImJvZHlcIikuc3R5bGUuYmFja2dyb3VuZENvbG9yID0gXCJibHVlXCI7XHJcbiAgfTtcclxuICByZW5kZXIoKSB7XHJcbiAgICBjb25zdCB7XHJcbiAgICAgIGlucHV0ZWRTdmcsXHJcbiAgICAgIGNzc0JhY2tncm91bmRJbWFnZSxcclxuICAgICAgZGVjb2RlQWxsLFxyXG4gICAgICBiYWNrZ3JvdW5kSW1hZ2UsXHJcbiAgICAgIGNvcHlCdXR0b25UZXh0LFxyXG4gICAgICBmaWxlQ29udGVudCxcclxuICAgIH0gPSB0aGlzLnN0YXRlO1xyXG4gICAgcmV0dXJuIChcclxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJBcHAgY29udGFpbmVyXCI+XHJcbiAgICAgICAgPGRpdlxyXG4gICAgICAgICAgc3R5bGU9e3tcclxuICAgICAgICAgICAgaGVpZ2h0OiAyNSxcclxuICAgICAgICAgICAgd2lkdGg6IDI1LFxyXG4gICAgICAgICAgICBiYWNrZ3JvdW5kSW1hZ2U6IGByZWRgLFxyXG4gICAgICAgICAgICBiYWNrZ3JvdW5kUG9zaXRpb246IFwiY2VudGVyXCIsXHJcbiAgICAgICAgICAgIGJhY2tncm91bmRSZXBlYXQ6IFwibm8tcmVwZWF0XCIsXHJcbiAgICAgICAgICAgIGJhY2tncm91bmRDb2xvcjogXCJ3aGl0ZXNtb2tlXCIsXHJcbiAgICAgICAgICB9fVxyXG4gICAgICAgICAgb25DbGljaz17dGhpcy5jaGFuZ2VCYWNrZ3JvdW5kfVxyXG4gICAgICAgID48L2Rpdj5cclxuICAgICAgICB7LyogPGgzIGNvbnRlbnRFZGl0YWJsZT1cInRydWVcIj5TVkcgdG8gQkFDS0dST1VORCBJTUFHRTwvaDM+ICovfVxyXG4gICAgICAgIDxoMyBjbGFzc05hbWU9XCJ0ZXh0LWNlbnRlclwiPlxyXG4gICAgICAgICAgRW5jb2RlIHN2ZyBpbWFnZSB0byB1c2UgZm9yIENTUyBiYWNrZ3JvdW5kXHJcbiAgICAgICAgPC9oMz5cclxuICAgICAgICA8YnIgLz5cclxuXHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJcIj5cclxuICAgICAgICAgIDxsYWJlbCBodG1sRm9yPVwiZXhhbXBsZUZvcm1Db250cm9sRmlsZVwiPlxyXG4gICAgICAgICAgICBVcGxvYWQgeW91ciBzdmcgZmlsZSBvciBwYXN0ZSB0aGUgY29kZSBiZWxvd1xyXG4gICAgICAgICAgPC9sYWJlbD5cclxuICAgICAgICAgIDxpbnB1dFxyXG4gICAgICAgICAgICB0eXBlPVwiZmlsZVwiXHJcbiAgICAgICAgICAgIGFjY2VwdD1cIi5zdmdcIlxyXG4gICAgICAgICAgICAvLyB2YWx1ZT17c2VsZWN0ZWRGaWxlfVxyXG4gICAgICAgICAgICBvbkNoYW5nZT17dGhpcy5oYW5kbGVGaWxlSW5wdXR9XHJcbiAgICAgICAgICAgIG9uSW5wdXQ9e3RoaXMuaGFuZGxlU3ZnQ2hhbmdlfVxyXG4gICAgICAgICAgICBjbGFzc05hbWU9XCJmb3JtLWNvbnRyb2wtZmlsZVwiXHJcbiAgICAgICAgICAgIGlkPVwiZXhhbXBsZUZvcm1Db250cm9sRmlsZVwiXHJcbiAgICAgICAgICAvPlxyXG4gICAgICAgICAgey8qIDxwcmUgaWQ9XCJmaWxlQ29udGVudFwiPntmaWxlQ29udGVudH08L3ByZT4gKi99XHJcbiAgICAgICAgICB7LyogPGRpdiByZWY9XCJ0ZXN0XCI+e2ZpbGVDb250ZW50fTwvZGl2PiAqL31cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8aDU+c3ZnIGNvZGU6PC9oNT5cclxuICAgICAgICA8dGV4dGFyZWFcclxuICAgICAgICAgIGNsYXNzTmFtZT1cInctMTAwIHAtMiBmb3JtLWNvbnRyb2xcIlxyXG4gICAgICAgICAgdHlwZT1cInRleHRcIlxyXG4gICAgICAgICAgcm93cz1cIjEwXCJcclxuICAgICAgICAgIHZhbHVlPXtpbnB1dGVkU3ZnfVxyXG4gICAgICAgICAgb25DaGFuZ2U9e3RoaXMuaGFuZGxlU3ZnQ2hhbmdlfVxyXG4gICAgICAgICAgb25Gb2N1cz17dGhpcy5oYW5kbGVGb2N1c31cclxuICAgICAgICAgIHBsYWNlaG9sZGVyPVwiUGFzdGUgU1ZHIGhlcmVcIlxyXG4gICAgICAgIC8+XHJcblxyXG4gICAgICAgIDxiciAvPlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPXtgcG9zaXRpb24tcmVsYXRpdmUgZC1mbGV4IGZsZXgtY29sdW1uIGZsZXgtd3JhcGB9PlxyXG4gICAgICAgICAge2lucHV0ZWRTdmcgPyAoXHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtgcG9zaXRpb24tcmVsYXRpdmUgYH0+XHJcbiAgICAgICAgICAgICAgPGg1PkJhY2tncm91bmQgQ1NTOjwvaDU+XHJcbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e2Bwb3NpdGlvbi1yZWxhdGl2ZSAke3V0aWxTdHlsZXMudGV4dEFyZWFDb3B5fWB9PlxyXG4gICAgICAgICAgICAgICAgPGlucHV0XHJcbiAgICAgICAgICAgICAgICAgIHJlYWRPbmx5XHJcbiAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17YHctMTAwIGZvcm0tY29udHJvbGB9XHJcbiAgICAgICAgICAgICAgICAgIHR5cGU9XCJ0ZXh0XCJcclxuICAgICAgICAgICAgICAgICAgLy8gICByb3dzPVwiOVwiXHJcbiAgICAgICAgICAgICAgICAgIHZhbHVlPXtjc3NCYWNrZ3JvdW5kSW1hZ2V9XHJcbiAgICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiQ29weSBDU1MgYmFja2dyb3VuZyBpbWFnZSBoZXJlXCJcclxuICAgICAgICAgICAgICAgIC8+XHJcblxyXG4gICAgICAgICAgICAgICAge2Nzc0JhY2tncm91bmRJbWFnZSA/IChcclxuICAgICAgICAgICAgICAgICAgPGJ1dHRvblxyXG4gICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17YGJ0biBidG4tcHJpbWFyeSBwb3NpdGlvbi1hYnNvbHV0ZSAke3V0aWxTdHlsZXMuYnV0dG9ufWB9XHJcbiAgICAgICAgICAgICAgICAgICAgb25DbGljaz17dGhpcy5jb3B5VG9DbGlwQm9hcmR9XHJcbiAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICB7Y29weUJ1dHRvblRleHR9XHJcbiAgICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgKSA6IG51bGx9XHJcbiAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgKSA6IG51bGx9XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIlwiPlxyXG4gICAgICAgICAgICA8aDUgY2xhc3NOYW1lPXtgYH0+UHJldmlldzo8L2g1PlxyXG4gICAgICAgICAgICA8ZGl2XHJcbiAgICAgICAgICAgICAgY2xhc3NOYW1lPVwidy0xMDBcIlxyXG4gICAgICAgICAgICAgIHN0eWxlPXt7XHJcbiAgICAgICAgICAgICAgICBoZWlnaHQ6IDI1NCxcclxuICAgICAgICAgICAgICAgIC8vIHdpZHRoOiAyNTYsXHJcbiAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kSW1hZ2U6IGB1cmwoXCIke2JhY2tncm91bmRJbWFnZX1cIilgLFxyXG4gICAgICAgICAgICAgICAgYmFja2dyb3VuZFBvc2l0aW9uOiBcImNlbnRlclwiLFxyXG4gICAgICAgICAgICAgICAgYmFja2dyb3VuZFJlcGVhdDogXCJuby1yZXBlYXRcIixcclxuICAgICAgICAgICAgICAgIGJhY2tncm91bmRDb2xvcjogXCJ3aGl0ZXNtb2tlXCIsXHJcbiAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgIHtkZWNvZGVBbGx9XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgIDxiciAvPlxyXG4gICAgICA8L2Rpdj5cclxuICAgICk7XHJcbiAgfVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBBcHA7XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=