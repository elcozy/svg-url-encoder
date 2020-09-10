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

      var encodeAll = undefined;

      if (value.match(regex)) {
        //if input have the xlmns
        encodeAll = value.replace(/[\r\n%#()<>?[\\\]^`{|}]/g, encodeURIComponent);
      } else {
        //if input do not have the xlmns
        var xlmns = "<svg xmlns='http://www.w3.org/2000/svg'";
        encodeAll = value.replace(/<svg/g, xlmns).replace(/[\r\n%#()<>?[\\\]^`{|}]/g, encodeURIComponent);
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
      if (file.size > 200048) return alert("error: File upload size cannot exceed more than 2MB");else console.log(_this.state.selectedFile);
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
          lineNumber: 119,
          columnNumber: 7
        }
      }, __jsx("h3", {
        className: "text-center",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 121,
          columnNumber: 9
        }
      }, "Encode svg image to use for CSS background"), __jsx("br", {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 124,
          columnNumber: 9
        }
      }), __jsx("div", {
        className: "",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 126,
          columnNumber: 9
        }
      }, __jsx("label", {
        htmlFor: "exampleFormControlFile",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 127,
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
          lineNumber: 130,
          columnNumber: 11
        }
      })), __jsx("h5", {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 142,
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
          lineNumber: 143,
          columnNumber: 9
        }
      }), __jsx("br", {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 153,
          columnNumber: 9
        }
      }), __jsx("div", {
        className: "position-relative d-flex flex-column flex-wrap",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 154,
          columnNumber: 9
        }
      }, inputedSvg ? __jsx("div", {
        className: "position-relative ",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 156,
          columnNumber: 13
        }
      }, __jsx("h5", {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 157,
          columnNumber: 15
        }
      }, "Background CSS:"), __jsx("div", {
        className: "position-relative ".concat(_styles_utils_module_css__WEBPACK_IMPORTED_MODULE_11___default.a.textAreaCopy),
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 158,
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
          lineNumber: 159,
          columnNumber: 17
        }
      }), cssBackgroundImage ? __jsx("button", {
        className: "btn btn-primary position-absolute ".concat(_styles_utils_module_css__WEBPACK_IMPORTED_MODULE_11___default.a.button),
        onClick: this.copyToClipBoard,
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 169,
          columnNumber: 19
        }
      }, copyButtonText) : null)) : null, __jsx("div", {
        className: "",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 179,
          columnNumber: 11
        }
      }, __jsx("h5", {
        className: "",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 180,
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
          lineNumber: 181,
          columnNumber: 13
        }
      }, decodeAll))), __jsx("br", {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 197,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9jb250ZW50LmpzIl0sIm5hbWVzIjpbIkFwcCIsImUiLCJwcmV2ZW50RGVmYXVsdCIsInZhbHVlIiwidGFyZ2V0Iiwic2V0U3RhdGUiLCJpbnB1dGVkU3ZnIiwiaGFuZGxlU3ZnQ2hhbmdlcyIsImNvbnNvbGUiLCJsb2ciLCJzdGF0ZSIsInJlZ2V4IiwiZW5jb2RlQWxsIiwidW5kZWZpbmVkIiwibWF0Y2giLCJyZXBsYWNlIiwiZW5jb2RlVVJJQ29tcG9uZW50IiwieGxtbnMiLCJyZXBsYWNlZFF1b3RlcyIsImJhY2tncm91bmRJbWFnZSIsImNzc0JhY2tncm91bmRJbWFnZSIsIm5hdmlnYXRvciIsImNsaXBib2FyZCIsIndyaXRlVGV4dCIsImNvcHlCdXR0b25UZXh0Iiwic2V0VGltZW91dCIsImV2ZW50Iiwic2VsZWN0IiwiZmlsZSIsImZpbGVzIiwic2VsZWN0ZWRGaWxlIiwic2l6ZSIsImFsZXJ0IiwicmVhZGVyIiwiRmlsZVJlYWRlciIsIm9ubG9hZCIsImhhbmRsZUZpbGVMb2FkIiwicmVhZEFzVGV4dCIsInJlc3VsdCIsImZpbGVDb250ZW50IiwiZGVjb2RlQWxsIiwiY29weVN1Y2Nlc3MiLCJoYW5kbGVGaWxlSW5wdXQiLCJoYW5kbGVTdmdDaGFuZ2UiLCJoYW5kbGVGb2N1cyIsInV0aWxTdHlsZXMiLCJ0ZXh0QXJlYUNvcHkiLCJidXR0b24iLCJjb3B5VG9DbGlwQm9hcmQiLCJoZWlnaHQiLCJiYWNrZ3JvdW5kUG9zaXRpb24iLCJiYWNrZ3JvdW5kUmVwZWF0IiwiYmFja2dyb3VuZENvbG9yIiwiUmVhY3QiLCJDb21wb25lbnQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0NBQ0E7O0FBQ0E7O0lBRU1BLEc7Ozs7O0FBQ0osaUJBQWM7QUFBQTs7QUFBQTs7QUFDWjs7QUFEWSwwTkFrQkksVUFBQ0MsQ0FBRCxFQUFPO0FBQ3ZCQSxPQUFD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LEVBQUU7QUFOWixTQUZUO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsU0FXR1osU0FYSCxDQUZGLENBekJGLENBbkNGLEVBOEVFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsUUE5RUYsQ0FERjtBQWtGRDs7OztFQW5NZWEsNENBQUssQ0FBQ0MsUzs7QUFzTVR0RCxrRUFBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9pbmRleC45OTkxOWZjZGI4ZGNjMjk3OTkyOS5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IGN4IGZyb20gXCJjbGFzc25hbWVzXCI7XHJcbi8vIGltcG9ydCBnbG9iYWxTdHlsZXMgZnJvbSBcIi4uL3N0eWxlcy9ib290c3RyYXAubW9kdWxlLmNzc1wiO1xyXG5pbXBvcnQgdXRpbFN0eWxlcyBmcm9tIFwiLi4vc3R5bGVzL3V0aWxzLm1vZHVsZS5jc3NcIjtcclxuXHJcbmNsYXNzIEFwcCBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XHJcbiAgY29uc3RydWN0b3IoKSB7XHJcbiAgICBzdXBlcigpO1xyXG4gICAgdGhpcy5zdGF0ZSA9IHtcclxuICAgICAgaW5wdXRlZFN2ZzogXCJcIixcclxuICAgICAgLy8gJzxzdmcgd2lkdGg9XCI1MFwiIGhlaWdodD1cIjQ0XCIgdmlld0JveD1cIjAgMCA1MCA0NFwiIGZpbGw9XCJub25lXCIgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiPiA8cGF0aCBmaWxsUnVsZT1cImV2ZW5vZGRcIiBjbGlwUnVsZT1cImV2ZW5vZGRcIiBkPVwiTTMwLjMwNjcgMS4xMjg2OUMzMS45Njk1IDAuNDM0NzkgMzMuNzUxOCAwLjA3NzYzNjcgMzUuNTUxNiAwLjA3NzYzNjdDMzcuMzUxNSAwLjA3NzYzNjcgMzkuMTMzOCAwLjQzNDc5IDQwLjc5NjYgMS4xMjg2OUM0Mi40NTkxIDEuODIyNDcgNDMuOTY5NiAyLjgzOTI4IDQ1LjI0MTggNC4xMjEwNUM0Ni41MTQ1IDUuNDAyNCA0Ny41MjQ4IDYuOTI0NCA0OC4yMTM3IDguNTk4NzdDNDguOTAyNiAxMC4yNzM0IDQ5LjI1NzMgMTIuMDY4NCA0OS4yNTczIDEzLjg4MTJDNDkuMjU3MyAxNS42OTM5IDQ4LjkwMjYgMTcuNDg4OSA0OC4yMTM3IDE5LjE2MzZDNDcuNTI0NyAyMC44MzgxIDQ2LjUxNSAyMi4zNTk1IDQ1LjI0MjIgMjMuNjQwOUM0NS4yNDIxIDIzLjY0MSA0NS4yNDIzIDIzLjY0MDggNDUuMjQyMiAyMy42NDA5TDI2LjYwNzggNDIuNDA4NEMyNS43ODQ2IDQzLjIzNzUgMjQuNDQ5OSA0My4yMzc1IDIzLjYyNjYgNDIuNDA4NEw0Ljk5MjIzIDIzLjY0MDlDMi40MjIxMyAyMS4wNTI1IDAuOTc4MjcxIDE3LjU0MTggMC45NzgyNzEgMTMuODgxMkMwLjk3ODI3MSAxMC4yMjA1IDIuNDIyMTMgNi43MDk4NSA0Ljk5MjIzIDQuMTIxNEM3LjU2MjMyIDEuNTMyOTUgMTEuMDQ4MSAwLjA3ODc3MjEgMTQuNjgyOCAwLjA3ODc3MjFDMTguMzE3NCAwLjA3ODc3MjEgMjEuODAzMiAxLjUzMjk1IDI0LjM3MzMgNC4xMjE0TDI1LjExNzIgNC44NzA2TDI1Ljg2MDcgNC4xMjE3NUMyNS44NjA5IDQuMTIxNjMgMjUuODYwNiA0LjEyMTg3IDI1Ljg2MDcgNC4xMjE3NUMyNy4xMzMxIDIuODM5ODIgMjguNjQ0MSAxLjgyMjUzIDMwLjMwNjcgMS4xMjg2OVpNMzUuNTUxNiA0LjMyMzY4QzM0LjMwNTYgNC4zMjM2OCAzMy4wNzE3IDQuNTcwOTQgMzEuOTIwNSA1LjA1MTM0QzMwLjc2OTQgNS41MzE3MyAyOS43MjM1IDYuMjM1ODQgMjguODQyNiA3LjEyMzQ1TDI2LjYwNzggOS4zNzQyMUMyNS43ODQ2IDEwLjIwMzMgMjQuNDQ5OSAxMC4yMDMzIDIzLjYyNjYgOS4zNzQyMUwyMS4zOTIyIDcuMTIzODFDMTkuNjEyOCA1LjMzMTY0IDE3LjE5OTMgNC4zMjQ4MiAxNC42ODI4IDQuMzI0ODJDMTIuMTY2MiA0LjMyNDgyIDkuNzUyNzkgNS4zMzE2NCA3Ljk3MzM0IDcuMTIzODFDNi4xOTM4OSA4LjkxNTk3IDUuMTk0MiAxMS4zNDY3IDUuMTk0MiAxMy44ODEyQzUuMTk0MiAxNi40MTU3IDYuMTkzODkgMTguODQ2NCA3Ljk3MzM0IDIwLjYzODVMMjUuMTE3MiAzNy45MDQ4TDQyLjI2MTEgMjAuNjM4NUM0My4xNDI0IDE5Ljc1MTMgNDMuODQxOCAxOC42OTc2IDQ0LjMxODggMTcuNTM4MkM0NC43OTU4IDE2LjM3ODggNDUuMDQxMyAxNS4xMzYxIDQ1LjA0MTMgMTMuODgxMkM0NS4wNDEzIDEyLjYyNjIgNDQuNzk1OCAxMS4zODM1IDQ0LjMxODggMTAuMjI0MUM0My44NDE4IDkuMDY0NzMgNDMuMTQyNyA4LjAxMTM1IDQyLjI2MTQgNy4xMjQxNkM0MS4zODA1IDYuMjM2NTUgNDAuMzMzOSA1LjUzMTczIDM5LjE4MjcgNS4wNTEzNEMzOC4wMzE2IDQuNTcwOTQgMzYuNzk3NyA0LjMyMzY4IDM1LjU1MTYgNC4zMjM2OFpcIiBmaWxsPVwiIzZDNkI2QlwiLz48L3N2Zz4nLFxyXG4gICAgICBjc3NCYWNrZ3JvdW5kSW1hZ2U6IFwiXCIsXHJcbiAgICAgIGRlY29kZUFsbDogXCJcIixcclxuICAgICAgY29weVN1Y2Nlc3M6IFwiXCIsXHJcbiAgICAgIGJhY2tncm91bmRJbWFnZTogXCJcIixcclxuICAgICAgY29weUJ1dHRvblRleHQ6IFwiY2xpY2sgaGVyZSB0byBjb3B5XCIsXHJcbiAgICAgIGZpbGVDb250ZW50OiBudWxsLFxyXG4gICAgfTtcclxuICB9XHJcbiAgY29tcG9uZW50RGlkVXBkYXRlKCkge1xyXG4gICAgLy8gdGhpcy5oYW5kbGVTdmdDaGFuZ2U7XHJcbiAgICBjb25zb2xlLmxvZyhcInVwZGF0ZWRcIik7XHJcbiAgfVxyXG5cclxuICBoYW5kbGVTdmdDaGFuZ2UgPSAoZSkgPT4ge1xyXG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgY29uc3QgdmFsdWUgPSBlLnRhcmdldC52YWx1ZTtcclxuICAgIHRoaXMuc2V0U3RhdGUoXHJcbiAgICAgIHtcclxuICAgICAgICBpbnB1dGVkU3ZnOiB2YWx1ZSxcclxuICAgICAgfSxcclxuICAgICAgKCkgPT4gdGhpcy5oYW5kbGVTdmdDaGFuZ2VzKHZhbHVlKVxyXG4gICAgKTtcclxuICB9O1xyXG4gIGhhbmRsZVN2Z0NoYW5nZXMgPSAodmFsdWUpID0+IHtcclxuICAgIGNvbnNvbGUubG9nKGBzdGF0ZTogJHt0aGlzLnN0YXRlLmlucHV0ZWRTdmd9LCB2YWx1ZTogJHt2YWx1ZX1gKTtcclxuICAgIC8vIGNvbnN0IGRlY29kZUFsbCA9IGRlY29kZVVSSUNvbXBvbmVudChlbmNvZGVBbGwpO1xyXG5cclxuICAgIGNvbnN0IHJlZ2V4ID1cclxuICAgICAgXCIoeG1sbnM9W1xcXFwnXFxcIl1odHRwcz86XFxcXC9cXFxcL3d3dy53My5vcmdcXFxcLzIwMDBcXFxcL3N2Z1tcXFxcJ1xcXCJdW15zXSlcIjtcclxuICAgIC8vIGNvbnNvbGUubG9nKHZhbHVlLm1hdGNoKHJlZ2V4KSk7XHJcbiAgICBsZXQgZW5jb2RlQWxsID0gdW5kZWZpbmVkO1xyXG5cclxuICAgIGlmICh2YWx1ZS5tYXRjaChyZWdleCkpIHtcclxuICAgICAgLy9pZiBpbnB1dCBoYXZlIHRoZSB4bG1uc1xyXG4gICAgICBlbmNvZGVBbGwgPSB2YWx1ZS5yZXBsYWNlKC9bXFxyXFxuJSMoKTw+P1tcXFxcXFxdXmB7fH1dL2csIGVuY29kZVVSSUNvbXBvbmVudCk7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICAvL2lmIGlucHV0IGRvIG5vdCBoYXZlIHRoZSB4bG1uc1xyXG4gICAgICBjb25zdCB4bG1ucyA9IFwiPHN2ZyB4bWxucz0naHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmcnXCI7XHJcbiAgICAgIGVuY29kZUFsbCA9IHZhbHVlXHJcbiAgICAgICAgLnJlcGxhY2UoLzxzdmcvZywgeGxtbnMpXHJcbiAgICAgICAgLnJlcGxhY2UoL1tcXHJcXG4lIygpPD4/W1xcXFxcXF1eYHt8fV0vZywgZW5jb2RlVVJJQ29tcG9uZW50KTtcclxuICAgIH1cclxuICAgIC8vIHJlcGxhY2luZyBkb3VibGUgcXVvdGVzIHRvIHNpbmdsZSBxdW90ZXNcclxuICAgIGNvbnN0IHJlcGxhY2VkUXVvdGVzID0gZW5jb2RlQWxsLnJlcGxhY2UoL1wiL2csIGAnYCk7XHJcbiAgICBjb25zb2xlLmxvZyh2YWx1ZSk7XHJcbiAgICBjb25zdCBiYWNrZ3JvdW5kSW1hZ2UgPSBgZGF0YTppbWFnZS9zdmcreG1sLCR7cmVwbGFjZWRRdW90ZXN9YDtcclxuICAgIGlmIChyZXBsYWNlZFF1b3Rlcykge1xyXG4gICAgICB2YXIgY3NzQmFja2dyb3VuZEltYWdlID0gYGJhY2tncm91bmQtaW1hZ2U6IHVybChcImRhdGE6aW1hZ2Uvc3ZnK3htbCwke3JlcGxhY2VkUXVvdGVzfVwiKWA7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICB2YXIgY3NzQmFja2dyb3VuZEltYWdlID0gYGA7XHJcbiAgICB9XHJcbiAgICBjb25zb2xlLmxvZyhjc3NCYWNrZ3JvdW5kSW1hZ2UpO1xyXG4gICAgdGhpcy5zZXRTdGF0ZSh7XHJcbiAgICAgIGNzc0JhY2tncm91bmRJbWFnZSxcclxuICAgICAgYmFja2dyb3VuZEltYWdlLFxyXG4gICAgfSk7XHJcbiAgfTtcclxuXHJcbiAgY29weVRvQ2xpcEJvYXJkID0gYXN5bmMgKCkgPT4ge1xyXG4gICAgdHJ5IHtcclxuICAgICAgYXdhaXQgbmF2aWdhdG9yLmNsaXBib2FyZC53cml0ZVRleHQodGhpcy5zdGF0ZS5jc3NCYWNrZ3JvdW5kSW1hZ2UpO1xyXG4gICAgICB0aGlzLnNldFN0YXRlKHsgY29weUJ1dHRvblRleHQ6IFwiQ29waWVkIVwiIH0pO1xyXG4gICAgfSBjYXRjaCAoZXJyKSB7XHJcbiAgICAgIHRoaXMuc2V0U3RhdGUoeyBjb3B5QnV0dG9uVGV4dDogXCJGYWlsZWQgdG8gY29weSFcIiB9KTtcclxuICAgIH1cclxuICAgIGlmICh0aGlzLnN0YXRlLmNvcHlCdXR0b25UZXh0ICE9PSAnY2xpY2sgaGVyZSB0byBjb3B5XCInKSB7XHJcbiAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xyXG4gICAgICAgIHRoaXMuc2V0U3RhdGUoKCkgPT4gKHsgY29weUJ1dHRvblRleHQ6IFwiY2xpY2sgaGVyZSB0byBjb3B5XCIgfSkpO1xyXG4gICAgICB9LCA1MDAwKTtcclxuICAgIH1cclxuICB9O1xyXG4gIGhhbmRsZUZvY3VzID0gKGV2ZW50KSA9PiBldmVudC50YXJnZXQuc2VsZWN0KCk7XHJcblxyXG4gIGhhbmRsZUZpbGVJbnB1dCA9IChlKSA9PiB7XHJcbiAgICAvLyBoYW5kbGUgdmFsaWRhdGlvbnNcclxuICAgIGNvbnN0IGZpbGUgPSBlLnRhcmdldC5maWxlc1swXTtcclxuICAgIHRoaXMuc2V0U3RhdGUoeyBzZWxlY3RlZEZpbGU6IGZpbGUgfSk7XHJcbiAgICBjb25zb2xlLmxvZyhmaWxlKTtcclxuICAgIGlmIChmaWxlLnNpemUgPiAyMDAwNDgpXHJcbiAgICAgIHJldHVybiBhbGVydChcImVycm9yOiBGaWxlIHVwbG9hZCBzaXplIGNhbm5vdCBleGNlZWQgbW9yZSB0aGFuIDJNQlwiKTtcclxuICAgIGVsc2UgY29uc29sZS5sb2codGhpcy5zdGF0ZS5zZWxlY3RlZEZpbGUpO1xyXG4gICAgY29uc3QgcmVhZGVyID0gbmV3IEZpbGVSZWFkZXIoKTtcclxuICAgIHJlYWRlci5vbmxvYWQgPSB0aGlzLmhhbmRsZUZpbGVMb2FkO1xyXG4gICAgcmVhZGVyLnJlYWRBc1RleHQoZmlsZSk7XHJcbiAgfTtcclxuXHJcbiAgaGFuZGxlRmlsZUxvYWQgPSAoZXZlbnQpID0+IHtcclxuICAgIGNvbnNvbGUubG9nKGV2ZW50LnRhcmdldC5yZXN1bHQpO1xyXG4gICAgLy8gICBnZXR0aW5nIHRoZSBzdmcgZnJvbSAgdXBsb2FkZWQgaW1hZ2VcclxuICAgIGNvbnN0IGZpbGVDb250ZW50ID0gZXZlbnQudGFyZ2V0LnJlc3VsdDtcclxuICAgIHRoaXMuc2V0U3RhdGUoeyBmaWxlQ29udGVudDogZmlsZUNvbnRlbnQsIGlucHV0ZWRTdmc6IGZpbGVDb250ZW50IH0sICgpID0+XHJcbiAgICAgIHRoaXMuaGFuZGxlU3ZnQ2hhbmdlcyhmaWxlQ29udGVudClcclxuICAgICk7XHJcbiAgICAvLyB0aGlzLnJlZnMudGVzdC5pbm5lckhUTUwgPSBmaWxlQ29udGVudDtcclxuICAgIC8vIHRoaXMuaGFuZGxlU3ZnQ2hhbmdlcztcclxuICAgIGNvbnNvbGUubG9nKHRoaXMuc3RhdGUuaW5wdXRlZFN2Zyk7XHJcbiAgfTtcclxuXHJcbiAgcmVuZGVyKCkge1xyXG4gICAgY29uc3Qge1xyXG4gICAgICBpbnB1dGVkU3ZnLFxyXG4gICAgICBjc3NCYWNrZ3JvdW5kSW1hZ2UsXHJcbiAgICAgIGRlY29kZUFsbCxcclxuICAgICAgYmFja2dyb3VuZEltYWdlLFxyXG4gICAgICBjb3B5QnV0dG9uVGV4dCxcclxuICAgICAgZmlsZUNvbnRlbnQsXHJcbiAgICB9ID0gdGhpcy5zdGF0ZTtcclxuICAgIHJldHVybiAoXHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiQXBwIGNvbnRhaW5lclwiPlxyXG4gICAgICAgIHsvKiA8aDMgY29udGVudEVkaXRhYmxlPVwidHJ1ZVwiPlNWRyB0byBCQUNLR1JPVU5EIElNQUdFPC9oMz4gKi99XHJcbiAgICAgICAgPGgzIGNsYXNzTmFtZT1cInRleHQtY2VudGVyXCI+XHJcbiAgICAgICAgICBFbmNvZGUgc3ZnIGltYWdlIHRvIHVzZSBmb3IgQ1NTIGJhY2tncm91bmRcclxuICAgICAgICA8L2gzPlxyXG4gICAgICAgIDxiciAvPlxyXG5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIlwiPlxyXG4gICAgICAgICAgPGxhYmVsIGh0bWxGb3I9XCJleGFtcGxlRm9ybUNvbnRyb2xGaWxlXCI+XHJcbiAgICAgICAgICAgIFVwbG9hZCB5b3VyIHN2ZyBmaWxlIG9yIHBhc3RlIHRoZSBjb2RlIGJlbG93XHJcbiAgICAgICAgICA8L2xhYmVsPlxyXG4gICAgICAgICAgPGlucHV0XHJcbiAgICAgICAgICAgIHR5cGU9XCJmaWxlXCJcclxuICAgICAgICAgICAgYWNjZXB0PVwiLnN2Z1wiXHJcbiAgICAgICAgICAgIC8vIHZhbHVlPXtzZWxlY3RlZEZpbGV9XHJcbiAgICAgICAgICAgIG9uQ2hhbmdlPXt0aGlzLmhhbmRsZUZpbGVJbnB1dH1cclxuICAgICAgICAgICAgb25JbnB1dD17dGhpcy5oYW5kbGVTdmdDaGFuZ2V9XHJcbiAgICAgICAgICAgIGNsYXNzTmFtZT1cImZvcm0tY29udHJvbC1maWxlXCJcclxuICAgICAgICAgICAgaWQ9XCJleGFtcGxlRm9ybUNvbnRyb2xGaWxlXCJcclxuICAgICAgICAgIC8+XHJcbiAgICAgICAgICB7LyogPHByZSBpZD1cImZpbGVDb250ZW50XCI+e2ZpbGVDb250ZW50fTwvcHJlPiAqL31cclxuICAgICAgICAgIHsvKiA8ZGl2IHJlZj1cInRlc3RcIj57ZmlsZUNvbnRlbnR9PC9kaXY+ICovfVxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDxoNT5zdmcgY29kZTo8L2g1PlxyXG4gICAgICAgIDx0ZXh0YXJlYVxyXG4gICAgICAgICAgY2xhc3NOYW1lPVwidy0xMDAgcC0yIGZvcm0tY29udHJvbFwiXHJcbiAgICAgICAgICB0eXBlPVwidGV4dFwiXHJcbiAgICAgICAgICByb3dzPVwiMTBcIlxyXG4gICAgICAgICAgdmFsdWU9e2lucHV0ZWRTdmd9XHJcbiAgICAgICAgICBvbkNoYW5nZT17dGhpcy5oYW5kbGVTdmdDaGFuZ2V9XHJcbiAgICAgICAgICBvbkZvY3VzPXt0aGlzLmhhbmRsZUZvY3VzfVxyXG4gICAgICAgICAgcGxhY2Vob2xkZXI9XCJQYXN0ZSBTVkcgaGVyZVwiXHJcbiAgICAgICAgLz5cclxuXHJcbiAgICAgICAgPGJyIC8+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9e2Bwb3NpdGlvbi1yZWxhdGl2ZSBkLWZsZXggZmxleC1jb2x1bW4gZmxleC13cmFwYH0+XHJcbiAgICAgICAgICB7aW5wdXRlZFN2ZyA/IChcclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e2Bwb3NpdGlvbi1yZWxhdGl2ZSBgfT5cclxuICAgICAgICAgICAgICA8aDU+QmFja2dyb3VuZCBDU1M6PC9oNT5cclxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17YHBvc2l0aW9uLXJlbGF0aXZlICR7dXRpbFN0eWxlcy50ZXh0QXJlYUNvcHl9YH0+XHJcbiAgICAgICAgICAgICAgICA8aW5wdXRcclxuICAgICAgICAgICAgICAgICAgcmVhZE9ubHlcclxuICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtgdy0xMDAgZm9ybS1jb250cm9sYH1cclxuICAgICAgICAgICAgICAgICAgdHlwZT1cInRleHRcIlxyXG4gICAgICAgICAgICAgICAgICAvLyAgIHJvd3M9XCI5XCJcclxuICAgICAgICAgICAgICAgICAgdmFsdWU9e2Nzc0JhY2tncm91bmRJbWFnZX1cclxuICAgICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJDb3B5IENTUyBiYWNrZ3JvdW5nIGltYWdlIGhlcmVcIlxyXG4gICAgICAgICAgICAgICAgLz5cclxuXHJcbiAgICAgICAgICAgICAgICB7Y3NzQmFja2dyb3VuZEltYWdlID8gKFxyXG4gICAgICAgICAgICAgICAgICA8YnV0dG9uXHJcbiAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtgYnRuIGJ0bi1wcmltYXJ5IHBvc2l0aW9uLWFic29sdXRlICR7dXRpbFN0eWxlcy5idXR0b259YH1cclxuICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXt0aGlzLmNvcHlUb0NsaXBCb2FyZH1cclxuICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgIHtjb3B5QnV0dG9uVGV4dH1cclxuICAgICAgICAgICAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgICAgICAgICApIDogbnVsbH1cclxuICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICApIDogbnVsbH1cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiXCI+XHJcbiAgICAgICAgICAgIDxoNSBjbGFzc05hbWU9e2BgfT5QcmV2aWV3OjwvaDU+XHJcbiAgICAgICAgICAgIDxkaXZcclxuICAgICAgICAgICAgICBjbGFzc05hbWU9XCJ3LTEwMFwiXHJcbiAgICAgICAgICAgICAgc3R5bGU9e3tcclxuICAgICAgICAgICAgICAgIGhlaWdodDogMjU0LFxyXG4gICAgICAgICAgICAgICAgLy8gd2lkdGg6IDI1NixcclxuICAgICAgICAgICAgICAgIGJhY2tncm91bmRJbWFnZTogYHVybChcIiR7YmFja2dyb3VuZEltYWdlfVwiKWAsXHJcbiAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kUG9zaXRpb246IFwiY2VudGVyXCIsXHJcbiAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kUmVwZWF0OiBcIm5vLXJlcGVhdFwiLFxyXG4gICAgICAgICAgICAgICAgYmFja2dyb3VuZENvbG9yOiBcIndoaXRlc21va2VcIixcclxuICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAge2RlY29kZUFsbH1cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgPGJyIC8+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgKTtcclxuICB9XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IEFwcDtcclxuIl0sInNvdXJjZVJvb3QiOiIifQ==