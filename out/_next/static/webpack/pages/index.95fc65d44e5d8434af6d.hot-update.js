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
      var obj = document.getElementById("svg-object");
      obj.data = URL.createObjectURL(files[0]);

      obj.onload = function (e) {
        URL.revokeObjectURL(obj.data);
        var path = obj.contentDocument.getElementsByTagName("path")[0];
        console.log(path);
      };
    });

    _this.state = {
      inputedSvg: "",
      // '<svg width="50" height="44" viewBox="0 0 50 44" fill="none" xmlns="http://www.w3.org/2000/svg"> <path fillRule="evenodd" clipRule="evenodd" d="M30.3067 1.12869C31.9695 0.43479 33.7518 0.0776367 35.5516 0.0776367C37.3515 0.0776367 39.1338 0.43479 40.7966 1.12869C42.4591 1.82247 43.9696 2.83928 45.2418 4.12105C46.5145 5.4024 47.5248 6.9244 48.2137 8.59877C48.9026 10.2734 49.2573 12.0684 49.2573 13.8812C49.2573 15.6939 48.9026 17.4889 48.2137 19.1636C47.5247 20.8381 46.515 22.3595 45.2422 23.6409C45.2421 23.641 45.2423 23.6408 45.2422 23.6409L26.6078 42.4084C25.7846 43.2375 24.4499 43.2375 23.6266 42.4084L4.99223 23.6409C2.42213 21.0525 0.978271 17.5418 0.978271 13.8812C0.978271 10.2205 2.42213 6.70985 4.99223 4.1214C7.56232 1.53295 11.0481 0.0787721 14.6828 0.0787721C18.3174 0.0787721 21.8032 1.53295 24.3733 4.1214L25.1172 4.8706L25.8607 4.12175C25.8609 4.12163 25.8606 4.12187 25.8607 4.12175C27.1331 2.83982 28.6441 1.82253 30.3067 1.12869ZM35.5516 4.32368C34.3056 4.32368 33.0717 4.57094 31.9205 5.05134C30.7694 5.53173 29.7235 6.23584 28.8426 7.12345L26.6078 9.37421C25.7846 10.2033 24.4499 10.2033 23.6266 9.37421L21.3922 7.12381C19.6128 5.33164 17.1993 4.32482 14.6828 4.32482C12.1662 4.32482 9.75279 5.33164 7.97334 7.12381C6.19389 8.91597 5.1942 11.3467 5.1942 13.8812C5.1942 16.4157 6.19389 18.8464 7.97334 20.6385L25.1172 37.9048L42.2611 20.6385C43.1424 19.7513 43.8418 18.6976 44.3188 17.5382C44.7958 16.3788 45.0413 15.1361 45.0413 13.8812C45.0413 12.6262 44.7958 11.3835 44.3188 10.2241C43.8418 9.06473 43.1427 8.01135 42.2614 7.12416C41.3805 6.23655 40.3339 5.53173 39.1827 5.05134C38.0316 4.57094 36.7977 4.32368 35.5516 4.32368Z" fill="#6C6B6B"/></svg>',
      cssBackgroundImage: "",
      decodeAll: "",
      copySuccess: "",
      backgroundImage: "",
      selectedFile: null,
      copyButtonText: "click here to copy"
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
          selectedFile = _this$state.selectedFile;
      return __jsx("div", {
        className: "App container",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 101,
          columnNumber: 7
        }
      }, __jsx("h3", {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 102,
          columnNumber: 9
        }
      }, "SVG to BACKGROUND IMAGE"), __jsx("br", {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 103,
          columnNumber: 9
        }
      }), __jsx("h5", {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 104,
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
          lineNumber: 105,
          columnNumber: 9
        }
      }), __jsx("div", {
        "class": "form-group",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 114,
          columnNumber: 9
        }
      }, __jsx("label", {
        "for": "exampleFormControlFile",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 115,
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
          lineNumber: 116,
          columnNumber: 11
        }
      }), __jsx("img", {
        src: selectedFile,
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 124,
          columnNumber: 11
        }
      })), __jsx("br", {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 126,
          columnNumber: 9
        }
      }), __jsx("div", {
        className: "position-relative d-flex flex-column flex-wrap",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 127,
          columnNumber: 9
        }
      }, inputedSvg ? __jsx("div", {
        className: "position-relative ",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 129,
          columnNumber: 13
        }
      }, __jsx("h5", {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 130,
          columnNumber: 15
        }
      }, "Background CSS:"), __jsx("div", {
        className: "position-relative ".concat(_styles_utils_module_css__WEBPACK_IMPORTED_MODULE_11___default.a.textAreaCopy),
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 131,
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
          lineNumber: 132,
          columnNumber: 17
        }
      }), cssBackgroundImage ? __jsx("button", {
        className: "btn btn-primary position-absolute ".concat(_styles_utils_module_css__WEBPACK_IMPORTED_MODULE_11___default.a.button),
        onClick: this.copyToClipBoard,
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 142,
          columnNumber: 19
        }
      }, copyButtonText) : null)) : null, __jsx("div", {
        className: "",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 152,
          columnNumber: 11
        }
      }, __jsx("h5", {
        className: "text-danger text-center",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 153,
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
          lineNumber: 154,
          columnNumber: 13
        }
      }, decodeAll))), __jsx("br", {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 170,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9jb250ZW50LmpzIl0sIm5hbWVzIjpbIkFwcCIsImUiLCJwcmV2ZW50RGVmYXVsdCIsInZhbHVlIiwidGFyZ2V0IiwiY29uc29sZSIsImxvZyIsInJlZ2V4IiwibWF0Y2giLCJlbmNvZGVBbGwiLCJyZXBsYWNlIiwiZW5jb2RlVVJJQ29tcG9uZW50IiwieGxtbnMiLCJhZGRYbG1ucyIsInJlcGxhY2VkUXVvdGVzIiwiYmFja2dyb3VuZEltYWdlIiwiY3NzQmFja2dyb3VuZEltYWdlIiwic2V0U3RhdGUiLCJpbnB1dGVkU3ZnIiwibmF2aWdhdG9yIiwiY2xpcGJvYXJkIiwid3JpdGVUZXh0Iiwic3RhdGUiLCJjb3B5QnV0dG9uVGV4dCIsInNldFRpbWVvdXQiLCJldmVudCIsInNlbGVjdCIsImZpbGUiLCJmaWxlcyIsInNlbGVjdGVkRmlsZSIsInNpemUiLCJhbGVydCIsIm9iaiIsImRvY3VtZW50IiwiZ2V0RWxlbWVudEJ5SWQiLCJkYXRhIiwiVVJMIiwiY3JlYXRlT2JqZWN0VVJMIiwib25sb2FkIiwicmV2b2tlT2JqZWN0VVJMIiwicGF0aCIsImNvbnRlbnREb2N1bWVudCIsImdldEVsZW1lbnRzQnlUYWdOYW1lIiwiZGVjb2RlQWxsIiwiY29weVN1Y2Nlc3MiLCJoYW5kbGVTdmdDaGFuZ2UiLCJoYW5kbGVGb2N1cyIsImhhbmRsZUZpbGVJbnB1dCIsInV0aWxTdHlsZXMiLCJ0ZXh0QXJlYUNvcHkiLCJidXR0b24iLCJjb3B5VG9DbGlwQm9hcmQiLCJoZWlnaHQiLCJiYWNrZ3JvdW5kUG9zaXRpb24iLCJiYWNrZ3JvdW5kUmVwZWF0IiwiYmFja2dyb3VuZENvbG9yIiwiUmVhY3QiLCJDb21wb25lbnQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0NBQ0E7O0FBQ0E7O0lBRU1BLEc7Ozs7O0FBQ0osaUJBQWM7QUFBQTs7QUFBQTs7QUFDWjs7QUFE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NWZjNjVkNDRlNWQ4NDM0YWY2ZC5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IGN4IGZyb20gXCJjbGFzc25hbWVzXCI7XHJcbi8vIGltcG9ydCBnbG9iYWxTdHlsZXMgZnJvbSBcIi4uL3N0eWxlcy9ib290c3RyYXAubW9kdWxlLmNzc1wiO1xyXG5pbXBvcnQgdXRpbFN0eWxlcyBmcm9tIFwiLi4vc3R5bGVzL3V0aWxzLm1vZHVsZS5jc3NcIjtcclxuXHJcbmNsYXNzIEFwcCBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XHJcbiAgY29uc3RydWN0b3IoKSB7XHJcbiAgICBzdXBlcigpO1xyXG4gICAgdGhpcy5zdGF0ZSA9IHtcclxuICAgICAgaW5wdXRlZFN2ZzogXCJcIixcclxuICAgICAgLy8gJzxzdmcgd2lkdGg9XCI1MFwiIGhlaWdodD1cIjQ0XCIgdmlld0JveD1cIjAgMCA1MCA0NFwiIGZpbGw9XCJub25lXCIgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiPiA8cGF0aCBmaWxsUnVsZT1cImV2ZW5vZGRcIiBjbGlwUnVsZT1cImV2ZW5vZGRcIiBkPVwiTTMwLjMwNjcgMS4xMjg2OUMzMS45Njk1IDAuNDM0NzkgMzMuNzUxOCAwLjA3NzYzNjcgMzUuNTUxNiAwLjA3NzYzNjdDMzcuMzUxNSAwLjA3NzYzNjcgMzkuMTMzOCAwLjQzNDc5IDQwLjc5NjYgMS4xMjg2OUM0Mi40NTkxIDEuODIyNDcgNDMuOTY5NiAyLjgzOTI4IDQ1LjI0MTggNC4xMjEwNUM0Ni41MTQ1IDUuNDAyNCA0Ny41MjQ4IDYuOTI0NCA0OC4yMTM3IDguNTk4NzdDNDguOTAyNiAxMC4yNzM0IDQ5LjI1NzMgMTIuMDY4NCA0OS4yNTczIDEzLjg4MTJDNDkuMjU3MyAxNS42OTM5IDQ4LjkwMjYgMTcuNDg4OSA0OC4yMTM3IDE5LjE2MzZDNDcuNTI0NyAyMC44MzgxIDQ2LjUxNSAyMi4zNTk1IDQ1LjI0MjIgMjMuNjQwOUM0NS4yNDIxIDIzLjY0MSA0NS4yNDIzIDIzLjY0MDggNDUuMjQyMiAyMy42NDA5TDI2LjYwNzggNDIuNDA4NEMyNS43ODQ2IDQzLjIzNzUgMjQuNDQ5OSA0My4yMzc1IDIzLjYyNjYgNDIuNDA4NEw0Ljk5MjIzIDIzLjY0MDlDMi40MjIxMyAyMS4wNTI1IDAuOTc4MjcxIDE3LjU0MTggMC45NzgyNzEgMTMuODgxMkMwLjk3ODI3MSAxMC4yMjA1IDIuNDIyMTMgNi43MDk4NSA0Ljk5MjIzIDQuMTIxNEM3LjU2MjMyIDEuNTMyOTUgMTEuMDQ4MSAwLjA3ODc3MjEgMTQuNjgyOCAwLjA3ODc3MjFDMTguMzE3NCAwLjA3ODc3MjEgMjEuODAzMiAxLjUzMjk1IDI0LjM3MzMgNC4xMjE0TDI1LjExNzIgNC44NzA2TDI1Ljg2MDcgNC4xMjE3NUMyNS44NjA5IDQuMTIxNjMgMjUuODYwNiA0LjEyMTg3IDI1Ljg2MDcgNC4xMjE3NUMyNy4xMzMxIDIuODM5ODIgMjguNjQ0MSAxLjgyMjUzIDMwLjMwNjcgMS4xMjg2OVpNMzUuNTUxNiA0LjMyMzY4QzM0LjMwNTYgNC4zMjM2OCAzMy4wNzE3IDQuNTcwOTQgMzEuOTIwNSA1LjA1MTM0QzMwLjc2OTQgNS41MzE3MyAyOS43MjM1IDYuMjM1ODQgMjguODQyNiA3LjEyMzQ1TDI2LjYwNzggOS4zNzQyMUMyNS43ODQ2IDEwLjIwMzMgMjQuNDQ5OSAxMC4yMDMzIDIzLjYyNjYgOS4zNzQyMUwyMS4zOTIyIDcuMTIzODFDMTkuNjEyOCA1LjMzMTY0IDE3LjE5OTMgNC4zMjQ4MiAxNC42ODI4IDQuMzI0ODJDMTIuMTY2MiA0LjMyNDgyIDkuNzUyNzkgNS4zMzE2NCA3Ljk3MzM0IDcuMTIzODFDNi4xOTM4OSA4LjkxNTk3IDUuMTk0MiAxMS4zNDY3IDUuMTk0MiAxMy44ODEyQzUuMTk0MiAxNi40MTU3IDYuMTkzODkgMTguODQ2NCA3Ljk3MzM0IDIwLjYzODVMMjUuMTE3MiAzNy45MDQ4TDQyLjI2MTEgMjAuNjM4NUM0My4xNDI0IDE5Ljc1MTMgNDMuODQxOCAxOC42OTc2IDQ0LjMxODggMTcuNTM4MkM0NC43OTU4IDE2LjM3ODggNDUuMDQxMyAxNS4xMzYxIDQ1LjA0MTMgMTMuODgxMkM0NS4wNDEzIDEyLjYyNjIgNDQuNzk1OCAxMS4zODM1IDQ0LjMxODggMTAuMjI0MUM0My44NDE4IDkuMDY0NzMgNDMuMTQyNyA4LjAxMTM1IDQyLjI2MTQgNy4xMjQxNkM0MS4zODA1IDYuMjM2NTUgNDAuMzMzOSA1LjUzMTczIDM5LjE4MjcgNS4wNTEzNEMzOC4wMzE2IDQuNTcwOTQgMzYuNzk3NyA0LjMyMzY4IDM1LjU1MTYgNC4zMjM2OFpcIiBmaWxsPVwiIzZDNkI2QlwiLz48L3N2Zz4nLFxyXG4gICAgICBjc3NCYWNrZ3JvdW5kSW1hZ2U6IFwiXCIsXHJcbiAgICAgIGRlY29kZUFsbDogXCJcIixcclxuICAgICAgY29weVN1Y2Nlc3M6IFwiXCIsXHJcbiAgICAgIGJhY2tncm91bmRJbWFnZTogXCJcIixcclxuICAgICAgc2VsZWN0ZWRGaWxlOiBudWxsLFxyXG4gICAgICBjb3B5QnV0dG9uVGV4dDogXCJjbGljayBoZXJlIHRvIGNvcHlcIixcclxuICAgIH07XHJcbiAgfVxyXG4gIGhhbmRsZVN2Z0NoYW5nZSA9IChlKSA9PiB7XHJcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICBjb25zdCB2YWx1ZSA9IGUudGFyZ2V0LnZhbHVlO1xyXG4gICAgY29uc29sZS5sb2codmFsdWUpOyAvLyBtYWtlIHN1cmUgeW91IGFyZSByZWNlaXZpbmcgdGhlIHRoZSB2YWx1ZVxyXG5cclxuICAgIC8vIGNvbnN0IGRlY29kZUFsbCA9IGRlY29kZVVSSUNvbXBvbmVudChlbmNvZGVBbGwpO1xyXG4gICAgY29uc3QgcmVnZXggPVxyXG4gICAgICBcIih4bWxucz1bXFxcXCdcXFwiXWh0dHBzPzpcXFxcL1xcXFwvd3d3LnczLm9yZ1xcXFwvMjAwMFxcXFwvc3ZnW1xcXFwnXFxcIl1bXnNdKVwiO1xyXG4gICAgY29uc29sZS5sb2codmFsdWUubWF0Y2gocmVnZXgpKTtcclxuXHJcbiAgICBpZiAodmFsdWUubWF0Y2gocmVnZXgpKSB7XHJcbiAgICAgIGNvbnNvbGUubG9nKFwidGhlIGlucHV0IGNvbnRhaW5zIHhsbW5zXCIpO1xyXG4gICAgICB2YXIgZW5jb2RlQWxsID0gdmFsdWUucmVwbGFjZShcclxuICAgICAgICAvW1xcclxcbiUjKCk8Pj9bXFxcXFxcXV5ge3x9XS9nLFxyXG4gICAgICAgIGVuY29kZVVSSUNvbXBvbmVudFxyXG4gICAgICApO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgY29uc29sZS5sb2coXCJ0aGUgaW5wdXQgZG8gbm90IGNvbnRhaW4geGxtbnNcIik7XHJcbiAgICAgIGNvbnN0IHhsbW5zID0gXCI8c3ZnIHhtbG5zPSdodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZydcIjtcclxuICAgICAgY29uc3QgYWRkWGxtbnMgPSB2YWx1ZS5yZXBsYWNlKC88c3ZnL2csIHhsbW5zKTtcclxuICAgICAgY29uc29sZS5sb2coYWRkWGxtbnMpO1xyXG4gICAgICB2YXIgZW5jb2RlQWxsID0gYWRkWGxtbnMucmVwbGFjZShcclxuICAgICAgICAvW1xcclxcbiUjKCk8Pj9bXFxcXFxcXV5ge3x9XS9nLFxyXG4gICAgICAgIGVuY29kZVVSSUNvbXBvbmVudFxyXG4gICAgICApO1xyXG4gICAgfVxyXG4gICAgY29uc3QgcmVwbGFjZWRRdW90ZXMgPSBlbmNvZGVBbGwucmVwbGFjZSgvXCIvZywgYCdgKTtcclxuXHJcbiAgICBjb25zdCBiYWNrZ3JvdW5kSW1hZ2UgPSBgZGF0YTppbWFnZS9zdmcreG1sLCR7cmVwbGFjZWRRdW90ZXN9YDtcclxuICAgIGlmIChyZXBsYWNlZFF1b3Rlcykge1xyXG4gICAgICB2YXIgY3NzQmFja2dyb3VuZEltYWdlID0gYGJhY2tncm91bmQtaW1hZ2U6IHVybChcImRhdGE6aW1hZ2Uvc3ZnK3htbCwke3JlcGxhY2VkUXVvdGVzfVwiKWA7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICB2YXIgY3NzQmFja2dyb3VuZEltYWdlID0gYGA7XHJcbiAgICB9XHJcbiAgICBjb25zb2xlLmxvZyhjc3NCYWNrZ3JvdW5kSW1hZ2UpO1xyXG4gICAgdGhpcy5zZXRTdGF0ZSh7XHJcbiAgICAgIGlucHV0ZWRTdmc6IHZhbHVlLFxyXG4gICAgICBjc3NCYWNrZ3JvdW5kSW1hZ2UsXHJcbiAgICAgIGJhY2tncm91bmRJbWFnZSxcclxuICAgIH0pO1xyXG4gIH07XHJcblxyXG4gIGNvcHlUb0NsaXBCb2FyZCA9IGFzeW5jICgpID0+IHtcclxuICAgIHRyeSB7XHJcbiAgICAgIGF3YWl0IG5hdmlnYXRvci5jbGlwYm9hcmQud3JpdGVUZXh0KHRoaXMuc3RhdGUuY3NzQmFja2dyb3VuZEltYWdlKTtcclxuICAgICAgdGhpcy5zZXRTdGF0ZSh7IGNvcHlCdXR0b25UZXh0OiBcIkNvcGllZCFcIiB9KTtcclxuICAgIH0gY2F0Y2ggKGVycikge1xyXG4gICAgICB0aGlzLnNldFN0YXRlKHsgY29weUJ1dHRvblRleHQ6IFwiRmFpbGVkIHRvIGNvcHkhXCIgfSk7XHJcbiAgICB9XHJcbiAgICBpZiAodGhpcy5zdGF0ZS5jb3B5QnV0dG9uVGV4dCAhPT0gJ2NsaWNrIGhlcmUgdG8gY29weVwiJykge1xyXG4gICAgICBzZXRUaW1lb3V0KCgpID0+IHtcclxuICAgICAgICB0aGlzLnNldFN0YXRlKCgpID0+ICh7IGNvcHlCdXR0b25UZXh0OiBcImNsaWNrIGhlcmUgdG8gY29weVwiIH0pKTtcclxuICAgICAgfSwgNTAwMCk7XHJcbiAgICB9XHJcbiAgfTtcclxuICBoYW5kbGVGb2N1cyA9IChldmVudCkgPT4gZXZlbnQudGFyZ2V0LnNlbGVjdCgpO1xyXG4gIGhhbmRsZUZpbGVJbnB1dCA9IChlKSA9PiB7XHJcbiAgICAvLyBoYW5kbGUgdmFsaWRhdGlvbnNcclxuICAgIGNvbnN0IGZpbGUgPSBlLnRhcmdldC5maWxlc1swXTtcclxuICAgIHRoaXMuc2V0U3RhdGUoeyBzZWxlY3RlZEZpbGU6IGZpbGUgfSk7XHJcbiAgICBjb25zb2xlLmxvZyhmaWxlKTtcclxuICAgIGlmIChmaWxlLnNpemUgPiAyMDQ4KVxyXG4gICAgICBhbGVydChcImVycm9yOiBGaWxlIHVwbG9hZCBzaXplIGNhbm5vdCBleGNlZWQgbW9yZSB0aGFuIDJNQlwiKTtcclxuICAgIGVsc2UgY29uc29sZS5sb2codGhpcy5zdGF0ZS5zZWxlY3RlZEZpbGUpO1xyXG4gICAgdmFyIG9iaiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwic3ZnLW9iamVjdFwiKTtcclxuICAgIG9iai5kYXRhID0gVVJMLmNyZWF0ZU9iamVjdFVSTChmaWxlc1swXSk7XHJcbiAgICBvYmoub25sb2FkID0gKGUpID0+IHtcclxuICAgICAgVVJMLnJldm9rZU9iamVjdFVSTChvYmouZGF0YSk7XHJcbiAgICAgIHZhciBwYXRoID0gb2JqLmNvbnRlbnREb2N1bWVudC5nZXRFbGVtZW50c0J5VGFnTmFtZShcInBhdGhcIilbMF07XHJcbiAgICAgIGNvbnNvbGUubG9nKHBhdGgpO1xyXG4gICAgfTtcclxuICB9O1xyXG4gIHJlbmRlcigpIHtcclxuICAgIGNvbnN0IHtcclxuICAgICAgaW5wdXRlZFN2ZyxcclxuICAgICAgY3NzQmFja2dyb3VuZEltYWdlLFxyXG4gICAgICBkZWNvZGVBbGwsXHJcbiAgICAgIGJhY2tncm91bmRJbWFnZSxcclxuICAgICAgY29weUJ1dHRvblRleHQsXHJcbiAgICAgIHNlbGVjdGVkRmlsZSxcclxuICAgIH0gPSB0aGlzLnN0YXRlO1xyXG4gICAgcmV0dXJuIChcclxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJBcHAgY29udGFpbmVyXCI+XHJcbiAgICAgICAgPGgzPlNWRyB0byBCQUNLR1JPVU5EIElNQUdFPC9oMz5cclxuICAgICAgICA8YnIgLz5cclxuICAgICAgICA8aDU+U1ZHOjwvaDU+XHJcbiAgICAgICAgPHRleHRhcmVhXHJcbiAgICAgICAgICBjbGFzc05hbWU9XCJ3LTEwMCBwLTJcIlxyXG4gICAgICAgICAgdHlwZT1cInRleHRcIlxyXG4gICAgICAgICAgcm93cz1cIjEwXCJcclxuICAgICAgICAgIGRlZmF1bHRWYWx1ZT17aW5wdXRlZFN2Z31cclxuICAgICAgICAgIG9uSW5wdXQ9e3RoaXMuaGFuZGxlU3ZnQ2hhbmdlfVxyXG4gICAgICAgICAgb25Gb2N1cz17dGhpcy5oYW5kbGVGb2N1c31cclxuICAgICAgICAgIHBsYWNlaG9sZGVyPVwiUGFzdGUgU1ZHIGhlcmVcIlxyXG4gICAgICAgIC8+XHJcbiAgICAgICAgPGRpdiBjbGFzcz1cImZvcm0tZ3JvdXBcIj5cclxuICAgICAgICAgIDxsYWJlbCBmb3I9XCJleGFtcGxlRm9ybUNvbnRyb2xGaWxlXCI+Q2hvb3NlIGZpbGU8L2xhYmVsPlxyXG4gICAgICAgICAgPGlucHV0XHJcbiAgICAgICAgICAgIHR5cGU9XCJmaWxlXCJcclxuICAgICAgICAgICAgYWNjZXB0PVwiLnN2Z1wiXHJcbiAgICAgICAgICAgIC8vIHZhbHVlPXtzZWxlY3RlZEZpbGV9XHJcbiAgICAgICAgICAgIG9uQ2hhbmdlPXt0aGlzLmhhbmRsZUZpbGVJbnB1dH1cclxuICAgICAgICAgICAgY2xhc3NOYW1lPVwiZm9ybS1jb250cm9sLWZpbGVcIlxyXG4gICAgICAgICAgICBpZD1cImV4YW1wbGVGb3JtQ29udHJvbEZpbGVcIlxyXG4gICAgICAgICAgLz5cclxuICAgICAgICAgIDxpbWcgc3JjPXtzZWxlY3RlZEZpbGV9IC8+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPGJyIC8+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9e2Bwb3NpdGlvbi1yZWxhdGl2ZSBkLWZsZXggZmxleC1jb2x1bW4gZmxleC13cmFwYH0+XHJcbiAgICAgICAgICB7aW5wdXRlZFN2ZyA/IChcclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e2Bwb3NpdGlvbi1yZWxhdGl2ZSBgfT5cclxuICAgICAgICAgICAgICA8aDU+QmFja2dyb3VuZCBDU1M6PC9oNT5cclxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17YHBvc2l0aW9uLXJlbGF0aXZlICR7dXRpbFN0eWxlcy50ZXh0QXJlYUNvcHl9YH0+XHJcbiAgICAgICAgICAgICAgICA8aW5wdXRcclxuICAgICAgICAgICAgICAgICAgcmVhZE9ubHlcclxuICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtgdy0xMDBgfVxyXG4gICAgICAgICAgICAgICAgICB0eXBlPVwidGV4dFwiXHJcbiAgICAgICAgICAgICAgICAgIC8vICAgcm93cz1cIjlcIlxyXG4gICAgICAgICAgICAgICAgICBkZWZhdWx0VmFsdWU9e2Nzc0JhY2tncm91bmRJbWFnZX1cclxuICAgICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJDb3B5IENTUyBiYWNrZ3JvdW5nIGltYWdlIGhlcmVcIlxyXG4gICAgICAgICAgICAgICAgLz5cclxuXHJcbiAgICAgICAgICAgICAgICB7Y3NzQmFja2dyb3VuZEltYWdlID8gKFxyXG4gICAgICAgICAgICAgICAgICA8YnV0dG9uXHJcbiAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtgYnRuIGJ0bi1wcmltYXJ5IHBvc2l0aW9uLWFic29sdXRlICR7dXRpbFN0eWxlcy5idXR0b259YH1cclxuICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXt0aGlzLmNvcHlUb0NsaXBCb2FyZH1cclxuICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgIHtjb3B5QnV0dG9uVGV4dH1cclxuICAgICAgICAgICAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgICAgICAgICApIDogbnVsbH1cclxuICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICApIDogbnVsbH1cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiXCI+XHJcbiAgICAgICAgICAgIDxoNSBjbGFzc05hbWU9e2B0ZXh0LWRhbmdlciB0ZXh0LWNlbnRlcmB9PlByZXZpZXc6PC9oNT5cclxuICAgICAgICAgICAgPGRpdlxyXG4gICAgICAgICAgICAgIGNsYXNzTmFtZT1cInctMTAwXCJcclxuICAgICAgICAgICAgICBzdHlsZT17e1xyXG4gICAgICAgICAgICAgICAgaGVpZ2h0OiAyNTQsXHJcbiAgICAgICAgICAgICAgICAvLyB3aWR0aDogMjU2LFxyXG4gICAgICAgICAgICAgICAgYmFja2dyb3VuZEltYWdlOiBgdXJsKFwiJHtiYWNrZ3JvdW5kSW1hZ2V9XCIpYCxcclxuICAgICAgICAgICAgICAgIGJhY2tncm91bmRQb3NpdGlvbjogXCJjZW50ZXJcIixcclxuICAgICAgICAgICAgICAgIGJhY2tncm91bmRSZXBlYXQ6IFwibm8tcmVwZWF0XCIsXHJcbiAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kQ29sb3I6IFwiYmxhbmNoZWRhbG1vbmRcIixcclxuICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAge2RlY29kZUFsbH1cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgPGJyIC8+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgKTtcclxuICB9XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IEFwcDtcclxuIl0sInNvdXJjZVJvb3QiOiIifQ==