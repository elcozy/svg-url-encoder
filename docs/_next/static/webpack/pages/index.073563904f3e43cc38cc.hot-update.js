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
        var addXlmns = value.replace(/<svg/g, xlmns);
        console.log(addXlmns);
        var encodeAll = addXlmns.replace(/[\r\n%#()<>?[\\\]^`{|}]/g, encodeURIComponent);
      }

      var replacedQuotes = encodeAll.replace(/"/g, "'");
      var backgroundImage = "data:image/svg+xml,".concat(replacedQuotes);

      if (replacedQuotes) {
        var cssBackgroundImage = "background-image: url(\"data:image/svg+xml,".concat(replacedQuotes, "\")");
      } else {
        var cssBackgroundImage = "";
      }

      console.log(cssBackgroundImage);

      _this.setState({
        inputedSvg: value,
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
      if (file.size > 2048) alert("error: File upload size cannot exceed more than 2MB");else console.log(_this.state.selectedFile);
      var reader = new FileReader();
      reader.onload = _this.handleFileLoad;
      reader.readAsText(file);
    });

    Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_8__["default"])(Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__["default"])(_this), "handleFileLoad", function (event) {
      console.log(event);
      console.log(event.target.result);
      var fileContent = event.target.result;

      _this.setState({
        fileContent: fileContent
      }); // document.getElementById("fileContent").innerHTML = event.target.result;

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
          lineNumber: 108,
          columnNumber: 7
        }
      }, __jsx("h3", {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 109,
          columnNumber: 9
        }
      }, "SVG to BACKGROUND IMAGE"), __jsx("br", {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 110,
          columnNumber: 9
        }
      }), __jsx("h5", {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 111,
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
          lineNumber: 112,
          columnNumber: 9
        }
      }), __jsx("div", {
        "class": "form-group",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 121,
          columnNumber: 9
        }
      }, __jsx("label", {
        "for": "exampleFormControlFile",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 122,
          columnNumber: 11
        }
      }, "Choose file"), __jsx("input", {
        type: "file",
        accept: ".svg" // value={selectedFile}
        ,
        onChange: this.handleFileInput,
        className: "form-control-file",
        id: "exampleFormControlFile",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 123,
          columnNumber: 11
        }
      }), __jsx("pre", {
        id: "fileContent",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 131,
          columnNumber: 11
        }
      }, fileContent), __jsx("img", {
        src: fileContent,
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 132,
          columnNumber: 11
        }
      })), __jsx("br", {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 134,
          columnNumber: 9
        }
      }), __jsx("div", {
        className: "position-relative d-flex flex-column flex-wrap",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 135,
          columnNumber: 9
        }
      }, inputedSvg ? __jsx("div", {
        className: "position-relative ",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 137,
          columnNumber: 13
        }
      }, __jsx("h5", {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 138,
          columnNumber: 15
        }
      }, "Background CSS:"), __jsx("div", {
        className: "position-relative ".concat(_styles_utils_module_css__WEBPACK_IMPORTED_MODULE_11___default.a.textAreaCopy),
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 139,
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
          lineNumber: 140,
          columnNumber: 17
        }
      }), cssBackgroundImage ? __jsx("button", {
        className: "btn btn-primary position-absolute ".concat(_styles_utils_module_css__WEBPACK_IMPORTED_MODULE_11___default.a.button),
        onClick: this.copyToClipBoard,
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 150,
          columnNumber: 19
        }
      }, copyButtonText) : null)) : null, __jsx("div", {
        className: "",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 160,
          columnNumber: 11
        }
      }, __jsx("h5", {
        className: "text-danger text-center",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 161,
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
          lineNumber: 162,
          columnNumber: 13
        }
      }, decodeAll))), __jsx("br", {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 178,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9jb250ZW50LmpzIl0sIm5hbWVzIjpbIkFwcCIsImUiLCJwcmV2ZW50RGVmYXVsdCIsInZhbHVlIiwidGFyZ2V0IiwiY29uc29sZSIsImxvZyIsInJlZ2V4IiwibWF0Y2giLCJlbmNvZGVBbGwiLCJyZXBsYWNlIiwiZW5jb2RlVVJJQ29tcG9uZW50IiwieGxtbnMiLCJhZGRYbG1ucyIsInJlcGxhY2VkUXVvdGVzIiwiYmFja2dyb3VuZEltYWdlIiwiY3NzQmFja2dyb3VuZEltYWdlIiwic2V0U3RhdGUiLCJpbnB1dGVkU3ZnIiwibmF2aWdhdG9yIiwiY2xpcGJvYXJkIiwid3JpdGVUZXh0Iiwic3RhdGUiLCJjb3B5QnV0dG9uVGV4dCIsInNldFRpbWVvdXQiLCJldmVudCIsInNlbGVjdCIsImZpbGUiLCJmaWxlcyIsInNlbGVjdGVkRmlsZSIsInNpemUiLCJhbGVydCIsInJlYWRlciIsIkZpbGVSZWFkZXIiLCJvbmxvYWQiLCJoYW5kbGVGaWxlTG9hZCIsInJlYWRBc1RleHQiLCJyZXN1bHQiLCJmaWxlQ29udGVudCIsImRlY29kZUFsbCIsImNvcHlTdWNjZXNzIiwiaGFuZGxlU3ZnQ2hhbmdlIiwiaGFuZGxlRm9jdXMiLCJoYW5kbGVGaWxlSW5wdXQiLCJ1dGlsU3R5bGVzIiwidGV4dEFyZWFDb3B5IiwiYnV0dG9uIiwiY29weVRvQ2xpcEJvYXJkIiwiaGVpZ2h0IiwiYmFja2dyb3VuZFBvc2l0aW9uIiwiYmFja2dyb3VuZFJlcGVhdCIsImJhY2tncm91bmRDb2xvciIsIlJlYWN0IiwiQ29tcG9uZW50Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztDQUNBOztBQUNBOztJQUVNQSxHOzs7OztBQUNKLGlCQUFjO0FBQUE7O0FBQUE7O0FBQ1o7O0FBRFksME5BY0ksVUFBQ0MsQ0FBRCxFQUFPO0FBQ3ZCQSxPQUFDLENBQUNDLGNBQUY7QUFDQSxVQUFN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LENBREY7QUEwRUQ7Ozs7RUFoTGVhLDRDQUFLLENBQUNDLFM7O0FBbUxUckQsa0VBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvaW5kZXguMDczNTYzOTA0ZjNlNDNjYzM4Y2MuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBjeCBmcm9tIFwiY2xhc3NuYW1lc1wiO1xyXG4vLyBpbXBvcnQgZ2xvYmFsU3R5bGVzIGZyb20gXCIuLi9zdHlsZXMvYm9vdHN0cmFwLm1vZHVsZS5jc3NcIjtcclxuaW1wb3J0IHV0aWxTdHlsZXMgZnJvbSBcIi4uL3N0eWxlcy91dGlscy5tb2R1bGUuY3NzXCI7XHJcblxyXG5jbGFzcyBBcHAgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xyXG4gIGNvbnN0cnVjdG9yKCkge1xyXG4gICAgc3VwZXIoKTtcclxuICAgIHRoaXMuc3RhdGUgPSB7XHJcbiAgICAgIGlucHV0ZWRTdmc6IFwiXCIsXHJcbiAgICAgIC8vICc8c3ZnIHdpZHRoPVwiNTBcIiBoZWlnaHQ9XCI0NFwiIHZpZXdCb3g9XCIwIDAgNTAgNDRcIiBmaWxsPVwibm9uZVwiIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIj4gPHBhdGggZmlsbFJ1bGU9XCJldmVub2RkXCIgY2xpcFJ1bGU9XCJldmVub2RkXCIgZD1cIk0zMC4zMDY3IDEuMTI4NjlDMzEuOTY5NSAwLjQzNDc5IDMzLjc1MTggMC4wNzc2MzY3IDM1LjU1MTYgMC4wNzc2MzY3QzM3LjM1MTUgMC4wNzc2MzY3IDM5LjEzMzggMC40MzQ3OSA0MC43OTY2IDEuMTI4NjlDNDIuNDU5MSAxLjgyMjQ3IDQzLjk2OTYgMi44MzkyOCA0NS4yNDE4IDQuMTIxMDVDNDYuNTE0NSA1LjQwMjQgNDcuNTI0OCA2LjkyNDQgNDguMjEzNyA4LjU5ODc3QzQ4LjkwMjYgMTAuMjczNCA0OS4yNTczIDEyLjA2ODQgNDkuMjU3MyAxMy44ODEyQzQ5LjI1NzMgMTUuNjkzOSA0OC45MDI2IDE3LjQ4ODkgNDguMjEzNyAxOS4xNjM2QzQ3LjUyNDcgMjAuODM4MSA0Ni41MTUgMjIuMzU5NSA0NS4yNDIyIDIzLjY0MDlDNDUuMjQyMSAyMy42NDEgNDUuMjQyMyAyMy42NDA4IDQ1LjI0MjIgMjMuNjQwOUwyNi42MDc4IDQyLjQwODRDMjUuNzg0NiA0My4yMzc1IDI0LjQ0OTkgNDMuMjM3NSAyMy42MjY2IDQyLjQwODRMNC45OTIyMyAyMy42NDA5QzIuNDIyMTMgMjEuMDUyNSAwLjk3ODI3MSAxNy41NDE4IDAuOTc4MjcxIDEzLjg4MTJDMC45NzgyNzEgMTAuMjIwNSAyLjQyMjEzIDYuNzA5ODUgNC45OTIyMyA0LjEyMTRDNy41NjIzMiAxLjUzMjk1IDExLjA0ODEgMC4wNzg3NzIxIDE0LjY4MjggMC4wNzg3NzIxQzE4LjMxNzQgMC4wNzg3NzIxIDIxLjgwMzIgMS41MzI5NSAyNC4zNzMzIDQuMTIxNEwyNS4xMTcyIDQuODcwNkwyNS44NjA3IDQuMTIxNzVDMjUuODYwOSA0LjEyMTYzIDI1Ljg2MDYgNC4xMjE4NyAyNS44NjA3IDQuMTIxNzVDMjcuMTMzMSAyLjgzOTgyIDI4LjY0NDEgMS44MjI1MyAzMC4zMDY3IDEuMTI4NjlaTTM1LjU1MTYgNC4zMjM2OEMzNC4zMDU2IDQuMzIzNjggMzMuMDcxNyA0LjU3MDk0IDMxLjkyMDUgNS4wNTEzNEMzMC43Njk0IDUuNTMxNzMgMjkuNzIzNSA2LjIzNTg0IDI4Ljg0MjYgNy4xMjM0NUwyNi42MDc4IDkuMzc0MjFDMjUuNzg0NiAxMC4yMDMzIDI0LjQ0OTkgMTAuMjAzMyAyMy42MjY2IDkuMzc0MjFMMjEuMzkyMiA3LjEyMzgxQzE5LjYxMjggNS4zMzE2NCAxNy4xOTkzIDQuMzI0ODIgMTQuNjgyOCA0LjMyNDgyQzEyLjE2NjIgNC4zMjQ4MiA5Ljc1Mjc5IDUuMzMxNjQgNy45NzMzNCA3LjEyMzgxQzYuMTkzODkgOC45MTU5NyA1LjE5NDIgMTEuMzQ2NyA1LjE5NDIgMTMuODgxMkM1LjE5NDIgMTYuNDE1NyA2LjE5Mzg5IDE4Ljg0NjQgNy45NzMzNCAyMC42Mzg1TDI1LjExNzIgMzcuOTA0OEw0Mi4yNjExIDIwLjYzODVDNDMuMTQyNCAxOS43NTEzIDQzLjg0MTggMTguNjk3NiA0NC4zMTg4IDE3LjUzODJDNDQuNzk1OCAxNi4zNzg4IDQ1LjA0MTMgMTUuMTM2MSA0NS4wNDEzIDEzLjg4MTJDNDUuMDQxMyAxMi42MjYyIDQ0Ljc5NTggMTEuMzgzNSA0NC4zMTg4IDEwLjIyNDFDNDMuODQxOCA5LjA2NDczIDQzLjE0MjcgOC4wMTEzNSA0Mi4yNjE0IDcuMTI0MTZDNDEuMzgwNSA2LjIzNjU1IDQwLjMzMzkgNS41MzE3MyAzOS4xODI3IDUuMDUxMzRDMzguMDMxNiA0LjU3MDk0IDM2Ljc5NzcgNC4zMjM2OCAzNS41NTE2IDQuMzIzNjhaXCIgZmlsbD1cIiM2QzZCNkJcIi8+PC9zdmc+JyxcclxuICAgICAgY3NzQmFja2dyb3VuZEltYWdlOiBcIlwiLFxyXG4gICAgICBkZWNvZGVBbGw6IFwiXCIsXHJcbiAgICAgIGNvcHlTdWNjZXNzOiBcIlwiLFxyXG4gICAgICBiYWNrZ3JvdW5kSW1hZ2U6IFwiXCIsXHJcbiAgICAgIHNlbGVjdGVkRmlsZTogbnVsbCxcclxuICAgICAgY29weUJ1dHRvblRleHQ6IFwiY2xpY2sgaGVyZSB0byBjb3B5XCIsXHJcbiAgICAgIGZpbGVDb250ZW50OiBudWxsLFxyXG4gICAgfTtcclxuICB9XHJcbiAgaGFuZGxlU3ZnQ2hhbmdlID0gKGUpID0+IHtcclxuICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuICAgIGNvbnN0IHZhbHVlID0gZS50YXJnZXQudmFsdWU7XHJcbiAgICBjb25zb2xlLmxvZyh2YWx1ZSk7IC8vIG1ha2Ugc3VyZSB5b3UgYXJlIHJlY2VpdmluZyB0aGUgdGhlIHZhbHVlXHJcblxyXG4gICAgLy8gY29uc3QgZGVjb2RlQWxsID0gZGVjb2RlVVJJQ29tcG9uZW50KGVuY29kZUFsbCk7XHJcbiAgICBjb25zdCByZWdleCA9XHJcbiAgICAgIFwiKHhtbG5zPVtcXFxcJ1xcXCJdaHR0cHM/OlxcXFwvXFxcXC93d3cudzMub3JnXFxcXC8yMDAwXFxcXC9zdmdbXFxcXCdcXFwiXVtec10pXCI7XHJcbiAgICBjb25zb2xlLmxvZyh2YWx1ZS5tYXRjaChyZWdleCkpO1xyXG5cclxuICAgIGlmICh2YWx1ZS5tYXRjaChyZWdleCkpIHtcclxuICAgICAgY29uc29sZS5sb2coXCJ0aGUgaW5wdXQgY29udGFpbnMgeGxtbnNcIik7XHJcbiAgICAgIHZhciBlbmNvZGVBbGwgPSB2YWx1ZS5yZXBsYWNlKFxyXG4gICAgICAgIC9bXFxyXFxuJSMoKTw+P1tcXFxcXFxdXmB7fH1dL2csXHJcbiAgICAgICAgZW5jb2RlVVJJQ29tcG9uZW50XHJcbiAgICAgICk7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICBjb25zb2xlLmxvZyhcInRoZSBpbnB1dCBkbyBub3QgY29udGFpbiB4bG1uc1wiKTtcclxuICAgICAgY29uc3QgeGxtbnMgPSBcIjxzdmcgeG1sbnM9J2h0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnJ1wiO1xyXG4gICAgICBjb25zdCBhZGRYbG1ucyA9IHZhbHVlLnJlcGxhY2UoLzxzdmcvZywgeGxtbnMpO1xyXG4gICAgICBjb25zb2xlLmxvZyhhZGRYbG1ucyk7XHJcbiAgICAgIHZhciBlbmNvZGVBbGwgPSBhZGRYbG1ucy5yZXBsYWNlKFxyXG4gICAgICAgIC9bXFxyXFxuJSMoKTw+P1tcXFxcXFxdXmB7fH1dL2csXHJcbiAgICAgICAgZW5jb2RlVVJJQ29tcG9uZW50XHJcbiAgICAgICk7XHJcbiAgICB9XHJcbiAgICBjb25zdCByZXBsYWNlZFF1b3RlcyA9IGVuY29kZUFsbC5yZXBsYWNlKC9cIi9nLCBgJ2ApO1xyXG5cclxuICAgIGNvbnN0IGJhY2tncm91bmRJbWFnZSA9IGBkYXRhOmltYWdlL3N2Zyt4bWwsJHtyZXBsYWNlZFF1b3Rlc31gO1xyXG4gICAgaWYgKHJlcGxhY2VkUXVvdGVzKSB7XHJcbiAgICAgIHZhciBjc3NCYWNrZ3JvdW5kSW1hZ2UgPSBgYmFja2dyb3VuZC1pbWFnZTogdXJsKFwiZGF0YTppbWFnZS9zdmcreG1sLCR7cmVwbGFjZWRRdW90ZXN9XCIpYDtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIHZhciBjc3NCYWNrZ3JvdW5kSW1hZ2UgPSBgYDtcclxuICAgIH1cclxuICAgIGNvbnNvbGUubG9nKGNzc0JhY2tncm91bmRJbWFnZSk7XHJcbiAgICB0aGlzLnNldFN0YXRlKHtcclxuICAgICAgaW5wdXRlZFN2ZzogdmFsdWUsXHJcbiAgICAgIGNzc0JhY2tncm91bmRJbWFnZSxcclxuICAgICAgYmFja2dyb3VuZEltYWdlLFxyXG4gICAgfSk7XHJcbiAgfTtcclxuXHJcbiAgY29weVRvQ2xpcEJvYXJkID0gYXN5bmMgKCkgPT4ge1xyXG4gICAgdHJ5IHtcclxuICAgICAgYXdhaXQgbmF2aWdhdG9yLmNsaXBib2FyZC53cml0ZVRleHQodGhpcy5zdGF0ZS5jc3NCYWNrZ3JvdW5kSW1hZ2UpO1xyXG4gICAgICB0aGlzLnNldFN0YXRlKHsgY29weUJ1dHRvblRleHQ6IFwiQ29waWVkIVwiIH0pO1xyXG4gICAgfSBjYXRjaCAoZXJyKSB7XHJcbiAgICAgIHRoaXMuc2V0U3RhdGUoeyBjb3B5QnV0dG9uVGV4dDogXCJGYWlsZWQgdG8gY29weSFcIiB9KTtcclxuICAgIH1cclxuICAgIGlmICh0aGlzLnN0YXRlLmNvcHlCdXR0b25UZXh0ICE9PSAnY2xpY2sgaGVyZSB0byBjb3B5XCInKSB7XHJcbiAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xyXG4gICAgICAgIHRoaXMuc2V0U3RhdGUoKCkgPT4gKHsgY29weUJ1dHRvblRleHQ6IFwiY2xpY2sgaGVyZSB0byBjb3B5XCIgfSkpO1xyXG4gICAgICB9LCA1MDAwKTtcclxuICAgIH1cclxuICB9O1xyXG4gIGhhbmRsZUZvY3VzID0gKGV2ZW50KSA9PiBldmVudC50YXJnZXQuc2VsZWN0KCk7XHJcbiAgaGFuZGxlRmlsZUlucHV0ID0gKGUpID0+IHtcclxuICAgIC8vIGhhbmRsZSB2YWxpZGF0aW9uc1xyXG4gICAgY29uc3QgZmlsZSA9IGUudGFyZ2V0LmZpbGVzWzBdO1xyXG4gICAgdGhpcy5zZXRTdGF0ZSh7IHNlbGVjdGVkRmlsZTogZmlsZSB9KTtcclxuICAgIGNvbnNvbGUubG9nKGZpbGUpO1xyXG4gICAgaWYgKGZpbGUuc2l6ZSA+IDIwNDgpXHJcbiAgICAgIGFsZXJ0KFwiZXJyb3I6IEZpbGUgdXBsb2FkIHNpemUgY2Fubm90IGV4Y2VlZCBtb3JlIHRoYW4gMk1CXCIpO1xyXG4gICAgZWxzZSBjb25zb2xlLmxvZyh0aGlzLnN0YXRlLnNlbGVjdGVkRmlsZSk7XHJcbiAgICBjb25zdCByZWFkZXIgPSBuZXcgRmlsZVJlYWRlcigpO1xyXG4gICAgcmVhZGVyLm9ubG9hZCA9IHRoaXMuaGFuZGxlRmlsZUxvYWQ7XHJcbiAgICByZWFkZXIucmVhZEFzVGV4dChmaWxlKTtcclxuICB9O1xyXG5cclxuICBoYW5kbGVGaWxlTG9hZCA9IChldmVudCkgPT4ge1xyXG4gICAgY29uc29sZS5sb2coZXZlbnQpO1xyXG4gICAgY29uc29sZS5sb2coZXZlbnQudGFyZ2V0LnJlc3VsdCk7XHJcbiAgICBjb25zdCBmaWxlQ29udGVudCA9IGV2ZW50LnRhcmdldC5yZXN1bHQ7XHJcbiAgICB0aGlzLnNldFN0YXRlKHsgZmlsZUNvbnRlbnQ6IGZpbGVDb250ZW50IH0pO1xyXG5cclxuICAgIC8vIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiZmlsZUNvbnRlbnRcIikuaW5uZXJIVE1MID0gZXZlbnQudGFyZ2V0LnJlc3VsdDtcclxuICB9O1xyXG4gIHJlbmRlcigpIHtcclxuICAgIGNvbnN0IHtcclxuICAgICAgaW5wdXRlZFN2ZyxcclxuICAgICAgY3NzQmFja2dyb3VuZEltYWdlLFxyXG4gICAgICBkZWNvZGVBbGwsXHJcbiAgICAgIGJhY2tncm91bmRJbWFnZSxcclxuICAgICAgY29weUJ1dHRvblRleHQsXHJcbiAgICAgIHNlbGVjdGVkRmlsZSxcclxuICAgICAgZmlsZUNvbnRlbnQsXHJcbiAgICB9ID0gdGhpcy5zdGF0ZTtcclxuICAgIHJldHVybiAoXHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiQXBwIGNvbnRhaW5lclwiPlxyXG4gICAgICAgIDxoMz5TVkcgdG8gQkFDS0dST1VORCBJTUFHRTwvaDM+XHJcbiAgICAgICAgPGJyIC8+XHJcbiAgICAgICAgPGg1PlNWRzo8L2g1PlxyXG4gICAgICAgIDx0ZXh0YXJlYVxyXG4gICAgICAgICAgY2xhc3NOYW1lPVwidy0xMDAgcC0yXCJcclxuICAgICAgICAgIHR5cGU9XCJ0ZXh0XCJcclxuICAgICAgICAgIHJvd3M9XCIxMFwiXHJcbiAgICAgICAgICBkZWZhdWx0VmFsdWU9e2lucHV0ZWRTdmd9XHJcbiAgICAgICAgICBvbklucHV0PXt0aGlzLmhhbmRsZVN2Z0NoYW5nZX1cclxuICAgICAgICAgIG9uRm9jdXM9e3RoaXMuaGFuZGxlRm9jdXN9XHJcbiAgICAgICAgICBwbGFjZWhvbGRlcj1cIlBhc3RlIFNWRyBoZXJlXCJcclxuICAgICAgICAvPlxyXG4gICAgICAgIDxkaXYgY2xhc3M9XCJmb3JtLWdyb3VwXCI+XHJcbiAgICAgICAgICA8bGFiZWwgZm9yPVwiZXhhbXBsZUZvcm1Db250cm9sRmlsZVwiPkNob29zZSBmaWxlPC9sYWJlbD5cclxuICAgICAgICAgIDxpbnB1dFxyXG4gICAgICAgICAgICB0eXBlPVwiZmlsZVwiXHJcbiAgICAgICAgICAgIGFjY2VwdD1cIi5zdmdcIlxyXG4gICAgICAgICAgICAvLyB2YWx1ZT17c2VsZWN0ZWRGaWxlfVxyXG4gICAgICAgICAgICBvbkNoYW5nZT17dGhpcy5oYW5kbGVGaWxlSW5wdXR9XHJcbiAgICAgICAgICAgIGNsYXNzTmFtZT1cImZvcm0tY29udHJvbC1maWxlXCJcclxuICAgICAgICAgICAgaWQ9XCJleGFtcGxlRm9ybUNvbnRyb2xGaWxlXCJcclxuICAgICAgICAgIC8+XHJcbiAgICAgICAgICA8cHJlIGlkPVwiZmlsZUNvbnRlbnRcIj57ZmlsZUNvbnRlbnR9PC9wcmU+XHJcbiAgICAgICAgICA8aW1nIHNyYz17ZmlsZUNvbnRlbnR9IC8+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPGJyIC8+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9e2Bwb3NpdGlvbi1yZWxhdGl2ZSBkLWZsZXggZmxleC1jb2x1bW4gZmxleC13cmFwYH0+XHJcbiAgICAgICAgICB7aW5wdXRlZFN2ZyA/IChcclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e2Bwb3NpdGlvbi1yZWxhdGl2ZSBgfT5cclxuICAgICAgICAgICAgICA8aDU+QmFja2dyb3VuZCBDU1M6PC9oNT5cclxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17YHBvc2l0aW9uLXJlbGF0aXZlICR7dXRpbFN0eWxlcy50ZXh0QXJlYUNvcHl9YH0+XHJcbiAgICAgICAgICAgICAgICA8aW5wdXRcclxuICAgICAgICAgICAgICAgICAgcmVhZE9ubHlcclxuICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtgdy0xMDBgfVxyXG4gICAgICAgICAgICAgICAgICB0eXBlPVwidGV4dFwiXHJcbiAgICAgICAgICAgICAgICAgIC8vICAgcm93cz1cIjlcIlxyXG4gICAgICAgICAgICAgICAgICBkZWZhdWx0VmFsdWU9e2Nzc0JhY2tncm91bmRJbWFnZX1cclxuICAgICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJDb3B5IENTUyBiYWNrZ3JvdW5nIGltYWdlIGhlcmVcIlxyXG4gICAgICAgICAgICAgICAgLz5cclxuXHJcbiAgICAgICAgICAgICAgICB7Y3NzQmFja2dyb3VuZEltYWdlID8gKFxyXG4gICAgICAgICAgICAgICAgICA8YnV0dG9uXHJcbiAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtgYnRuIGJ0bi1wcmltYXJ5IHBvc2l0aW9uLWFic29sdXRlICR7dXRpbFN0eWxlcy5idXR0b259YH1cclxuICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXt0aGlzLmNvcHlUb0NsaXBCb2FyZH1cclxuICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgIHtjb3B5QnV0dG9uVGV4dH1cclxuICAgICAgICAgICAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgICAgICAgICApIDogbnVsbH1cclxuICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICApIDogbnVsbH1cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiXCI+XHJcbiAgICAgICAgICAgIDxoNSBjbGFzc05hbWU9e2B0ZXh0LWRhbmdlciB0ZXh0LWNlbnRlcmB9PlByZXZpZXc6PC9oNT5cclxuICAgICAgICAgICAgPGRpdlxyXG4gICAgICAgICAgICAgIGNsYXNzTmFtZT1cInctMTAwXCJcclxuICAgICAgICAgICAgICBzdHlsZT17e1xyXG4gICAgICAgICAgICAgICAgaGVpZ2h0OiAyNTQsXHJcbiAgICAgICAgICAgICAgICAvLyB3aWR0aDogMjU2LFxyXG4gICAgICAgICAgICAgICAgYmFja2dyb3VuZEltYWdlOiBgdXJsKFwiJHtiYWNrZ3JvdW5kSW1hZ2V9XCIpYCxcclxuICAgICAgICAgICAgICAgIGJhY2tncm91bmRQb3NpdGlvbjogXCJjZW50ZXJcIixcclxuICAgICAgICAgICAgICAgIGJhY2tncm91bmRSZXBlYXQ6IFwibm8tcmVwZWF0XCIsXHJcbiAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kQ29sb3I6IFwiYmxhbmNoZWRhbG1vbmRcIixcclxuICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAge2RlY29kZUFsbH1cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgPGJyIC8+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgKTtcclxuICB9XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IEFwcDtcclxuIl0sInNvdXJjZVJvb3QiOiIifQ==