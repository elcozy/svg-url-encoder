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
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! styled-jsx/style */ "./node_modules/styled-jsx/style.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! classnames */ "./node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var _styles_utils_module_css__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../styles/utils.module.css */ "./styles/utils.module.css");
/* harmony import */ var _styles_utils_module_css__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(_styles_utils_module_css__WEBPACK_IMPORTED_MODULE_12__);









var _jsxFileName = "D:\\Desktop\\urlencoder\\components\\content.js";


var __jsx = react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement;

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = Object(_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_7__["default"])(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = Object(_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_7__["default"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return Object(_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_6__["default"])(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

 // import globalStyles from "../styles/bootstrap.module.css";



var Content = /*#__PURE__*/function (_React$Component) {
  Object(_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_5__["default"])(Content, _React$Component);

  var _super = _createSuper(Content);

  function Content() {
    var _this;

    Object(_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_2__["default"])(this, Content);

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

  Object(_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_3__["default"])(Content, [{
    key: "render",
    value: function render() {
      var _this$state = this.state,
          inputedSvg = _this$state.inputedSvg,
          cssBackgroundImage = _this$state.cssBackgroundImage,
          decodeAll = _this$state.decodeAll,
          backgroundImage = _this$state.backgroundImage,
          copyButtonText = _this$state.copyButtonText,
          fileContent = _this$state.fileContent;
      var _this$props = this.props,
          isLight = _this$props.isLight,
          setIsLight = _this$props.setIsLight; // console.log(this.props);

      return __jsx("div", {
        className: "App container",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 110,
          columnNumber: 7
        }
      }, __jsx("div", {
        className: "changeBackground",
        style: {
          width: 50,
          height: 50,
          borderRadius: 15,
          top: "12",
          left: "12",
          cursor: "pointer",
          position: "fixed",
          display: "flex",
          alignItems: "center",
          fontSize: "1.5rem",
          justifyContent: "center",
          backgroundColor: "".concat(isLight ? "black" : "white")
        },
        onClick: function onClick() {
          return setIsLight(!isLight);
        },
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 112,
          columnNumber: 9
        }
      }, isLight ? "🌛" : "🌞"), __jsx("h3", {
        className: "text-center",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 133,
          columnNumber: 9
        }
      }, "Encode svg image to use for CSS background"), __jsx("br", {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 136,
          columnNumber: 9
        }
      }), __jsx("div", {
        className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_9___default.a.dynamic([["3920127302", [isLight ? "white" : "black", isLight ? "black" : "white", isLight ? "white" : "black", isLight ? "black" : "white", isLight ? "white" : "black", isLight ? "black" : "white"]]]) + " " + "",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 138,
          columnNumber: 9
        }
      }, __jsx("label", {
        htmlFor: "exampleFormControlFile",
        className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_9___default.a.dynamic([["3920127302", [isLight ? "white" : "black", isLight ? "black" : "white", isLight ? "white" : "black", isLight ? "black" : "white", isLight ? "white" : "black", isLight ? "black" : "white"]]]),
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 139,
          columnNumber: 11
        }
      }, "Upload your svg file or paste the code below"), __jsx("input", {
        type: "file",
        accept: ".svg" // value={selectedFile}
        ,
        onChange: this.handleFileInput,
        id: "exampleFormControlFile",
        className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_9___default.a.dynamic([["3920127302", [isLight ? "white" : "black", isLight ? "black" : "white", isLight ? "white" : "black", isLight ? "black" : "white", isLight ? "white" : "black", isLight ? "black" : "white"]]]) + " " + "".concat(_styles_utils_module_css__WEBPACK_IMPORTED_MODULE_12___default.a["form-control-file"], " form-control-file"),
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 142,
          columnNumber: 11
        }
      }), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_9___default.a, {
        id: "3920127302",
        dynamic: [isLight ? "white" : "black", isLight ? "black" : "white", isLight ? "white" : "black", isLight ? "black" : "white", isLight ? "white" : "black", isLight ? "black" : "white"],
        __self: this
      }, "body{background:".concat(isLight ? "white" : "black", ";color:").concat(isLight ? "black" : "white", ";}.form-control-file{background:").concat(isLight ? "white" : "black", ";color:").concat(isLight ? "black" : "white", ";width:-webkit-min-content;width:-moz-min-content;width:min-content;font-size:14px;}.form-control-file::-webkit-file-upload-button{color:").concat(isLight ? "white" : "black", ";background:").concat(isLight ? "black" : "white", ";}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkQ6XFxEZXNrdG9wXFx1cmxlbmNvZGVyXFxjb21wb25lbnRzXFxjb250ZW50LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQXFKNkIsQUFHdUQsQUFJQSxBQU1MLG1DQUNLLEtBVkwsQUFJQSxtQ0FIckMsQUFJb0IsQUFNcEIsbUVBTGlCLGVBQ2pCIiwiZmlsZSI6IkQ6XFxEZXNrdG9wXFx1cmxlbmNvZGVyXFxjb21wb25lbnRzXFxjb250ZW50LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IGN4IGZyb20gXCJjbGFzc25hbWVzXCI7XHJcbi8vIGltcG9ydCBnbG9iYWxTdHlsZXMgZnJvbSBcIi4uL3N0eWxlcy9ib290c3RyYXAubW9kdWxlLmNzc1wiO1xyXG5pbXBvcnQgdXRpbFN0eWxlcyBmcm9tIFwiLi4vc3R5bGVzL3V0aWxzLm1vZHVsZS5jc3NcIjtcclxuXHJcbmNsYXNzIENvbnRlbnQgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xyXG4gIGNvbnN0cnVjdG9yKCkge1xyXG4gICAgc3VwZXIoKTtcclxuICAgIHRoaXMuc3RhdGUgPSB7XHJcbiAgICAgIGlucHV0ZWRTdmc6IFwiXCIsXHJcbiAgICAgIC8vICc8c3ZnIHdpZHRoPVwiNTBcIiBoZWlnaHQ9XCI0NFwiIHZpZXdCb3g9XCIwIDAgNTAgNDRcIiBmaWxsPVwibm9uZVwiIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIj4gPHBhdGggZmlsbFJ1bGU9XCJldmVub2RkXCIgY2xpcFJ1bGU9XCJldmVub2RkXCIgZD1cIk0zMC4zMDY3IDEuMTI4NjlDMzEuOTY5NSAwLjQzNDc5IDMzLjc1MTggMC4wNzc2MzY3IDM1LjU1MTYgMC4wNzc2MzY3QzM3LjM1MTUgMC4wNzc2MzY3IDM5LjEzMzggMC40MzQ3OSA0MC43OTY2IDEuMTI4NjlDNDIuNDU5MSAxLjgyMjQ3IDQzLjk2OTYgMi44MzkyOCA0NS4yNDE4IDQuMTIxMDVDNDYuNTE0NSA1LjQwMjQgNDcuNTI0OCA2LjkyNDQgNDguMjEzNyA4LjU5ODc3QzQ4LjkwMjYgMTAuMjczNCA0OS4yNTczIDEyLjA2ODQgNDkuMjU3MyAxMy44ODEyQzQ5LjI1NzMgMTUuNjkzOSA0OC45MDI2IDE3LjQ4ODkgNDguMjEzNyAxOS4xNjM2QzQ3LjUyNDcgMjAuODM4MSA0Ni41MTUgMjIuMzU5NSA0NS4yNDIyIDIzLjY0MDlDNDUuMjQyMSAyMy42NDEgNDUuMjQyMyAyMy42NDA4IDQ1LjI0MjIgMjMuNjQwOUwyNi42MDc4IDQyLjQwODRDMjUuNzg0NiA0My4yMzc1IDI0LjQ0OTkgNDMuMjM3NSAyMy42MjY2IDQyLjQwODRMNC45OTIyMyAyMy42NDA5QzIuNDIyMTMgMjEuMDUyNSAwLjk3ODI3MSAxNy41NDE4IDAuOTc4MjcxIDEzLjg4MTJDMC45NzgyNzEgMTAuMjIwNSAyLjQyMjEzIDYuNzA5ODUgNC45OTIyMyA0LjEyMTRDNy41NjIzMiAxLjUzMjk1IDExLjA0ODEgMC4wNzg3NzIxIDE0LjY4MjggMC4wNzg3NzIxQzE4LjMxNzQgMC4wNzg3NzIxIDIxLjgwMzIgMS41MzI5NSAyNC4zNzMzIDQuMTIxNEwyNS4xMTcyIDQuODcwNkwyNS44NjA3IDQuMTIxNzVDMjUuODYwOSA0LjEyMTYzIDI1Ljg2MDYgNC4xMjE4NyAyNS44NjA3IDQuMTIxNzVDMjcuMTMzMSAyLjgzOTgyIDI4LjY0NDEgMS44MjI1MyAzMC4zMDY3IDEuMTI4NjlaTTM1LjU1MTYgNC4zMjM2OEMzNC4zMDU2IDQuMzIzNjggMzMuMDcxNyA0LjU3MDk0IDMxLjkyMDUgNS4wNTEzNEMzMC43Njk0IDUuNTMxNzMgMjkuNzIzNSA2LjIzNTg0IDI4Ljg0MjYgNy4xMjM0NUwyNi42MDc4IDkuMzc0MjFDMjUuNzg0NiAxMC4yMDMzIDI0LjQ0OTkgMTAuMjAzMyAyMy42MjY2IDkuMzc0MjFMMjEuMzkyMiA3LjEyMzgxQzE5LjYxMjggNS4zMzE2NCAxNy4xOTkzIDQuMzI0ODIgMTQuNjgyOCA0LjMyNDgyQzEyLjE2NjIgNC4zMjQ4MiA5Ljc1Mjc5IDUuMzMxNjQgNy45NzMzNCA3LjEyMzgxQzYuMTkzODkgOC45MTU5NyA1LjE5NDIgMTEuMzQ2NyA1LjE5NDIgMTMuODgxMkM1LjE5NDIgMTYuNDE1NyA2LjE5Mzg5IDE4Ljg0NjQgNy45NzMzNCAyMC42Mzg1TDI1LjExNzIgMzcuOTA0OEw0Mi4yNjExIDIwLjYzODVDNDMuMTQyNCAxOS43NTEzIDQzLjg0MTggMTguNjk3NiA0NC4zMTg4IDE3LjUzODJDNDQuNzk1OCAxNi4zNzg4IDQ1LjA0MTMgMTUuMTM2MSA0NS4wNDEzIDEzLjg4MTJDNDUuMDQxMyAxMi42MjYyIDQ0Ljc5NTggMTEuMzgzNSA0NC4zMTg4IDEwLjIyNDFDNDMuODQxOCA5LjA2NDczIDQzLjE0MjcgOC4wMTEzNSA0Mi4yNjE0IDcuMTI0MTZDNDEuMzgwNSA2LjIzNjU1IDQwLjMzMzkgNS41MzE3MyAzOS4xODI3IDUuMDUxMzRDMzguMDMxNiA0LjU3MDk0IDM2Ljc5NzcgNC4zMjM2OCAzNS41NTE2IDQuMzIzNjhaXCIgZmlsbD1cIiM2QzZCNkJcIi8+PC9zdmc+JyxcclxuICAgICAgY3NzQmFja2dyb3VuZEltYWdlOiBcIlwiLFxyXG4gICAgICBkZWNvZGVBbGw6IFwiXCIsXHJcbiAgICAgIGNvcHlTdWNjZXNzOiBcIlwiLFxyXG4gICAgICBiYWNrZ3JvdW5kSW1hZ2U6IFwiXCIsXHJcbiAgICAgIGNvcHlCdXR0b25UZXh0OiBcImNsaWNrIGhlcmUgdG8gY29weVwiLFxyXG4gICAgICBmaWxlQ29udGVudDogbnVsbCxcclxuICAgIH07XHJcbiAgfVxyXG5cclxuICBoYW5kbGVTdmdDaGFuZ2UgPSAoZSkgPT4ge1xyXG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgY29uc3QgdmFsdWUgPSBlLnRhcmdldC52YWx1ZTtcclxuICAgIHRoaXMuc2V0U3RhdGUoXHJcbiAgICAgIHtcclxuICAgICAgICBpbnB1dGVkU3ZnOiB2YWx1ZSxcclxuICAgICAgfSxcclxuICAgICAgKCkgPT4gdGhpcy5oYW5kbGVTdmdDaGFuZ2VzKHZhbHVlKVxyXG4gICAgKTtcclxuICB9O1xyXG4gIGhhbmRsZVN2Z0NoYW5nZXMgPSAodmFsdWUpID0+IHtcclxuICAgIGNvbnNvbGUubG9nKGBzdGF0ZTogJHt0aGlzLnN0YXRlLmlucHV0ZWRTdmd9LCB2YWx1ZTogJHt2YWx1ZX1gKTtcclxuICAgIC8vIGNvbnN0IGRlY29kZUFsbCA9IGRlY29kZVVSSUNvbXBvbmVudChlbmNvZGVBbGwpO1xyXG5cclxuICAgIGNvbnN0IHJlZ2V4ID1cclxuICAgICAgXCIoeG1sbnM9W1xcXFwnXFxcIl1odHRwcz86XFxcXC9cXFxcL3d3dy53My5vcmdcXFxcLzIwMDBcXFxcL3N2Z1tcXFxcJ1xcXCJdW15zXSlcIjtcclxuICAgIC8vIGNvbnNvbGUubG9nKHZhbHVlLm1hdGNoKHJlZ2V4KSk7XHJcblxyXG4gICAgaWYgKCF2YWx1ZS5tYXRjaChyZWdleCkpIHtcclxuICAgICAgLy9pZiBpbnB1dCBkbyBub3QgaGF2ZSB0aGUgeGxtbnNcclxuICAgICAgY29uc3QgeGxtbnMgPSBcIjxzdmcgeG1sbnM9J2h0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnJ1wiO1xyXG4gICAgICB2YWx1ZSA9IHZhbHVlLnJlcGxhY2UoLzxzdmcvZywgeGxtbnMpO1xyXG4gICAgfVxyXG4gICAgLy8gcmVwbGFjaW5nIGRvdWJsZSBxdW90ZXMgdG8gc2luZ2xlIHF1b3Rlc1xyXG4gICAgY29uc3QgcmVwbGFjZWRRdW90ZXMgPSB2YWx1ZVxyXG4gICAgICAucmVwbGFjZSgvW1xcclxcbiUjKCk8Pj9bXFxcXFxcXV5ge3x9XS9nLCBlbmNvZGVVUklDb21wb25lbnQpXHJcbiAgICAgIC5yZXBsYWNlKC9cIi9nLCBgJ2ApO1xyXG4gICAgY29uc3QgYmFja2dyb3VuZEltYWdlID0gYGRhdGE6aW1hZ2Uvc3ZnK3htbCwke3JlcGxhY2VkUXVvdGVzfWA7XHJcbiAgICBpZiAocmVwbGFjZWRRdW90ZXMpIHtcclxuICAgICAgdmFyIGNzc0JhY2tncm91bmRJbWFnZSA9IGBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXCJkYXRhOmltYWdlL3N2Zyt4bWwsJHtyZXBsYWNlZFF1b3Rlc31cIilgO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgdmFyIGNzc0JhY2tncm91bmRJbWFnZSA9IGBgO1xyXG4gICAgfVxyXG4gICAgY29uc29sZS5sb2coY3NzQmFja2dyb3VuZEltYWdlKTtcclxuICAgIHRoaXMuc2V0U3RhdGUoe1xyXG4gICAgICBjc3NCYWNrZ3JvdW5kSW1hZ2UsXHJcbiAgICAgIGJhY2tncm91bmRJbWFnZSxcclxuICAgIH0pO1xyXG4gIH07XHJcblxyXG4gIGNvcHlUb0NsaXBCb2FyZCA9IGFzeW5jICgpID0+IHtcclxuICAgIHRyeSB7XHJcbiAgICAgIGF3YWl0IG5hdmlnYXRvci5jbGlwYm9hcmQud3JpdGVUZXh0KHRoaXMuc3RhdGUuY3NzQmFja2dyb3VuZEltYWdlKTtcclxuICAgICAgdGhpcy5zZXRTdGF0ZSh7IGNvcHlCdXR0b25UZXh0OiBcIkNvcGllZCFcIiB9KTtcclxuICAgIH0gY2F0Y2ggKGVycikge1xyXG4gICAgICB0aGlzLnNldFN0YXRlKHsgY29weUJ1dHRvblRleHQ6IFwiRmFpbGVkIHRvIGNvcHkhXCIgfSk7XHJcbiAgICB9XHJcbiAgICBpZiAodGhpcy5zdGF0ZS5jb3B5QnV0dG9uVGV4dCAhPT0gJ2NsaWNrIGhlcmUgdG8gY29weVwiJykge1xyXG4gICAgICBzZXRUaW1lb3V0KCgpID0+IHtcclxuICAgICAgICB0aGlzLnNldFN0YXRlKCgpID0+ICh7IGNvcHlCdXR0b25UZXh0OiBcImNsaWNrIGhlcmUgdG8gY29weVwiIH0pKTtcclxuICAgICAgfSwgNTAwMCk7XHJcbiAgICB9XHJcbiAgfTtcclxuICBoYW5kbGVGb2N1cyA9IChldmVudCkgPT4gZXZlbnQudGFyZ2V0LnNlbGVjdCgpO1xyXG5cclxuICBoYW5kbGVGaWxlSW5wdXQgPSAoZSkgPT4ge1xyXG4gICAgLy8gaGFuZGxlIHZhbGlkYXRpb25zXHJcbiAgICBjb25zdCBmaWxlID0gZS50YXJnZXQuZmlsZXNbMF07XHJcbiAgICBpZiAoIWZpbGUpIHJldHVybjtcclxuICAgIHRoaXMuc2V0U3RhdGUoeyBzZWxlY3RlZEZpbGU6IGZpbGUgfSk7XHJcblxyXG4gICAgY29uc3QgcmVhZGVyID0gbmV3IEZpbGVSZWFkZXIoKTtcclxuICAgIHJlYWRlci5vbmxvYWQgPSB0aGlzLmhhbmRsZUZpbGVMb2FkO1xyXG4gICAgcmVhZGVyLnJlYWRBc1RleHQoZmlsZSk7XHJcbiAgfTtcclxuXHJcbiAgaGFuZGxlRmlsZUxvYWQgPSAoZXZlbnQpID0+IHtcclxuICAgIGNvbnNvbGUubG9nKGV2ZW50LnRhcmdldC5yZXN1bHQpO1xyXG4gICAgLy8gICBnZXR0aW5nIHRoZSBzdmcgZnJvbSAgdXBsb2FkZWQgaW1hZ2VcclxuICAgIGNvbnN0IGZpbGVDb250ZW50ID0gZXZlbnQudGFyZ2V0LnJlc3VsdDtcclxuICAgIHRoaXMuc2V0U3RhdGUoeyBmaWxlQ29udGVudDogZmlsZUNvbnRlbnQsIGlucHV0ZWRTdmc6IGZpbGVDb250ZW50IH0sICgpID0+XHJcbiAgICAgIHRoaXMuaGFuZGxlU3ZnQ2hhbmdlcyhmaWxlQ29udGVudClcclxuICAgICk7XHJcbiAgICAvLyB0aGlzLnJlZnMudGVzdC5pbm5lckhUTUwgPSBmaWxlQ29udGVudDtcclxuICAgIC8vIHRoaXMuaGFuZGxlU3ZnQ2hhbmdlcztcclxuICAgIGNvbnNvbGUubG9nKHRoaXMuc3RhdGUuaW5wdXRlZFN2Zyk7XHJcbiAgfTtcclxuXHJcbiAgcmVuZGVyKCkge1xyXG4gICAgY29uc3Qge1xyXG4gICAgICBpbnB1dGVkU3ZnLFxyXG4gICAgICBjc3NCYWNrZ3JvdW5kSW1hZ2UsXHJcbiAgICAgIGRlY29kZUFsbCxcclxuICAgICAgYmFja2dyb3VuZEltYWdlLFxyXG4gICAgICBjb3B5QnV0dG9uVGV4dCxcclxuICAgICAgZmlsZUNvbnRlbnQsXHJcbiAgICB9ID0gdGhpcy5zdGF0ZTtcclxuICAgIGNvbnN0IHsgaXNMaWdodCwgc2V0SXNMaWdodCB9ID0gdGhpcy5wcm9wcztcclxuICAgIC8vIGNvbnNvbGUubG9nKHRoaXMucHJvcHMpO1xyXG4gICAgcmV0dXJuIChcclxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJBcHAgY29udGFpbmVyXCI+XHJcbiAgICAgICAgey8qIDxoMyBjb250ZW50RWRpdGFibGU9XCJ0cnVlXCI+U1ZHIHRvIEJBQ0tHUk9VTkQgSU1BR0U8L2gzPiAqL31cclxuICAgICAgICA8ZGl2XHJcbiAgICAgICAgICBjbGFzc05hbWU9XCJjaGFuZ2VCYWNrZ3JvdW5kXCJcclxuICAgICAgICAgIHN0eWxlPXt7XHJcbiAgICAgICAgICAgIHdpZHRoOiA1MCxcclxuICAgICAgICAgICAgaGVpZ2h0OiA1MCxcclxuICAgICAgICAgICAgYm9yZGVyUmFkaXVzOiAxNSxcclxuICAgICAgICAgICAgdG9wOiBcIjEyXCIsXHJcbiAgICAgICAgICAgIGxlZnQ6IFwiMTJcIixcclxuICAgICAgICAgICAgY3Vyc29yOiBcInBvaW50ZXJcIixcclxuICAgICAgICAgICAgcG9zaXRpb246IFwiZml4ZWRcIixcclxuICAgICAgICAgICAgZGlzcGxheTogXCJmbGV4XCIsXHJcbiAgICAgICAgICAgIGFsaWduSXRlbXM6IFwiY2VudGVyXCIsXHJcbiAgICAgICAgICAgIGZvbnRTaXplOiBgMS41cmVtYCxcclxuICAgICAgICAgICAganVzdGlmeUNvbnRlbnQ6IFwiY2VudGVyXCIsXHJcbiAgICAgICAgICAgIGJhY2tncm91bmRDb2xvcjogYCR7aXNMaWdodCA/IFwiYmxhY2tcIiA6IFwid2hpdGVcIn1gLFxyXG4gICAgICAgICAgfX1cclxuICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHNldElzTGlnaHQoIWlzTGlnaHQpfVxyXG4gICAgICAgID5cclxuICAgICAgICAgIHtpc0xpZ2h0ID8gXCLwn4ybXCIgOiBcIvCfjJ5cIn1cclxuICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgPGgzIGNsYXNzTmFtZT1cInRleHQtY2VudGVyXCI+XHJcbiAgICAgICAgICBFbmNvZGUgc3ZnIGltYWdlIHRvIHVzZSBmb3IgQ1NTIGJhY2tncm91bmRcclxuICAgICAgICA8L2gzPlxyXG4gICAgICAgIDxiciAvPlxyXG5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIlwiPlxyXG4gICAgICAgICAgPGxhYmVsIGh0bWxGb3I9XCJleGFtcGxlRm9ybUNvbnRyb2xGaWxlXCI+XHJcbiAgICAgICAgICAgIFVwbG9hZCB5b3VyIHN2ZyBmaWxlIG9yIHBhc3RlIHRoZSBjb2RlIGJlbG93XHJcbiAgICAgICAgICA8L2xhYmVsPlxyXG4gICAgICAgICAgPGlucHV0XHJcbiAgICAgICAgICAgIHR5cGU9XCJmaWxlXCJcclxuICAgICAgICAgICAgYWNjZXB0PVwiLnN2Z1wiXHJcbiAgICAgICAgICAgIC8vIHZhbHVlPXtzZWxlY3RlZEZpbGV9XHJcbiAgICAgICAgICAgIG9uQ2hhbmdlPXt0aGlzLmhhbmRsZUZpbGVJbnB1dH1cclxuICAgICAgICAgICAgY2xhc3NOYW1lPXtgJHt1dGlsU3R5bGVzW1wiZm9ybS1jb250cm9sLWZpbGVcIl19IGZvcm0tY29udHJvbC1maWxlYH1cclxuICAgICAgICAgICAgaWQ9XCJleGFtcGxlRm9ybUNvbnRyb2xGaWxlXCJcclxuICAgICAgICAgIC8+XHJcbiAgICAgICAgICA8c3R5bGUganN4IGdsb2JhbD57YFxyXG4gICAgICAgICAgICBib2R5IHtcclxuICAgICAgICAgICAgICBiYWNrZ3JvdW5kOiAke2lzTGlnaHQgPyBcIndoaXRlXCIgOiBcImJsYWNrXCJ9O1xyXG4gICAgICAgICAgICAgIGNvbG9yOiAke2lzTGlnaHQgPyBcImJsYWNrXCIgOiBcIndoaXRlXCJ9O1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIC5mb3JtLWNvbnRyb2wtZmlsZSB7XHJcbiAgICAgICAgICAgICAgYmFja2dyb3VuZDogJHtpc0xpZ2h0ID8gXCJ3aGl0ZVwiIDogXCJibGFja1wifTtcclxuICAgICAgICAgICAgICBjb2xvcjogJHtpc0xpZ2h0ID8gXCJibGFja1wiIDogXCJ3aGl0ZVwifTtcclxuICAgICAgICAgICAgICB3aWR0aDogbWluLWNvbnRlbnQ7XHJcbiAgICAgICAgICAgICAgZm9udC1zaXplOiAxNHB4O1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIC5mb3JtLWNvbnRyb2wtZmlsZTo6LXdlYmtpdC1maWxlLXVwbG9hZC1idXR0b24ge1xyXG4gICAgICAgICAgICAgIGNvbG9yOiAke2lzTGlnaHQgPyBcIndoaXRlXCIgOiBcImJsYWNrXCJ9O1xyXG4gICAgICAgICAgICAgIGJhY2tncm91bmQ6ICR7aXNMaWdodCA/IFwiYmxhY2tcIiA6IFwid2hpdGVcIn07XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgIGB9PC9zdHlsZT5cclxuICAgICAgICAgIHsvKiA8cHJlIGlkPVwiZmlsZUNvbnRlbnRcIj57ZmlsZUNvbnRlbnR9PC9wcmU+ICovfVxyXG4gICAgICAgICAgey8qIDxkaXYgcmVmPVwidGVzdFwiPntmaWxlQ29udGVudH08L2Rpdj4gKi99XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPGg1PnN2ZyBjb2RlOjwvaDU+XHJcbiAgICAgICAgPHRleHRhcmVhXHJcbiAgICAgICAgICBjbGFzc05hbWU9XCJ3LTEwMCBwLTIgZm9ybS1jb250cm9sXCJcclxuICAgICAgICAgIHR5cGU9XCJ0ZXh0XCJcclxuICAgICAgICAgIHJvd3M9XCIxMFwiXHJcbiAgICAgICAgICB2YWx1ZT17aW5wdXRlZFN2Z31cclxuICAgICAgICAgIG9uQ2hhbmdlPXt0aGlzLmhhbmRsZVN2Z0NoYW5nZX1cclxuICAgICAgICAgIG9uRm9jdXM9e3RoaXMuaGFuZGxlRm9jdXN9XHJcbiAgICAgICAgICBwbGFjZWhvbGRlcj1cIlBhc3RlIFNWRyBoZXJlXCJcclxuICAgICAgICAvPlxyXG5cclxuICAgICAgICA8YnIgLz5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT17YHBvc2l0aW9uLXJlbGF0aXZlIGQtZmxleCBmbGV4LWNvbHVtbiBmbGV4LXdyYXBgfT5cclxuICAgICAgICAgIHtpbnB1dGVkU3ZnID8gKFxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17YHBvc2l0aW9uLXJlbGF0aXZlIGB9PlxyXG4gICAgICAgICAgICAgIDxoNT5CYWNrZ3JvdW5kIENTUzo8L2g1PlxyXG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtgcG9zaXRpb24tcmVsYXRpdmUgJHt1dGlsU3R5bGVzLnRleHRBcmVhQ29weX1gfT5cclxuICAgICAgICAgICAgICAgIDxpbnB1dFxyXG4gICAgICAgICAgICAgICAgICByZWFkT25seVxyXG4gICAgICAgICAgICAgICAgICBjbGFzc05hbWU9e2B3LTEwMCBmb3JtLWNvbnRyb2xgfVxyXG4gICAgICAgICAgICAgICAgICB0eXBlPVwidGV4dFwiXHJcbiAgICAgICAgICAgICAgICAgIC8vICAgcm93cz1cIjlcIlxyXG4gICAgICAgICAgICAgICAgICB2YWx1ZT17Y3NzQmFja2dyb3VuZEltYWdlfVxyXG4gICAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cIkNvcHkgQ1NTIGJhY2tncm91bmcgaW1hZ2UgaGVyZVwiXHJcbiAgICAgICAgICAgICAgICAvPlxyXG5cclxuICAgICAgICAgICAgICAgIHtjc3NCYWNrZ3JvdW5kSW1hZ2UgPyAoXHJcbiAgICAgICAgICAgICAgICAgIDxidXR0b25cclxuICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9e2BidG4gYnRuLXByaW1hcnkgcG9zaXRpb24tYWJzb2x1dGUgJHt1dGlsU3R5bGVzLmJ1dHRvbn1gfVxyXG4gICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9e3RoaXMuY29weVRvQ2xpcEJvYXJkfVxyXG4gICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAge2NvcHlCdXR0b25UZXh0fVxyXG4gICAgICAgICAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICAgICAgICAgICkgOiBudWxsfVxyXG4gICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICkgOiBudWxsfVxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJcIj5cclxuICAgICAgICAgICAgPGg1IGNsYXNzTmFtZT17YGB9PlByZXZpZXc6PC9oNT5cclxuICAgICAgICAgICAgPGRpdlxyXG4gICAgICAgICAgICAgIGNsYXNzTmFtZT1cInctMTAwXCJcclxuICAgICAgICAgICAgICBzdHlsZT17e1xyXG4gICAgICAgICAgICAgICAgaGVpZ2h0OiAyNTQsXHJcbiAgICAgICAgICAgICAgICAvLyB3aWR0aDogMjU2LFxyXG4gICAgICAgICAgICAgICAgYmFja2dyb3VuZEltYWdlOiBgdXJsKFwiJHtiYWNrZ3JvdW5kSW1hZ2V9XCIpYCxcclxuICAgICAgICAgICAgICAgIGJhY2tncm91bmRQb3NpdGlvbjogXCJjZW50ZXJcIixcclxuICAgICAgICAgICAgICAgIGJhY2tncm91bmRSZXBlYXQ6IFwibm8tcmVwZWF0XCIsXHJcbiAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kQ29sb3I6IFwid2hpdGVzbW9rZVwiLFxyXG4gICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICB7ZGVjb2RlQWxsfVxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICA8YnIgLz5cclxuICAgICAgPC9kaXY+XHJcbiAgICApO1xyXG4gIH1cclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgQ29udGVudDtcclxuIl19 */\n/*@ sourceURL=D:\\\\Desktop\\\\urlencoder\\\\components\\\\content.js */"))), __jsx("h5", {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 169,
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
          lineNumber: 170,
          columnNumber: 9
        }
      }), __jsx("br", {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 180,
          columnNumber: 9
        }
      }), __jsx("div", {
        className: "position-relative d-flex flex-column flex-wrap",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 181,
          columnNumber: 9
        }
      }, inputedSvg ? __jsx("div", {
        className: "position-relative ",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 183,
          columnNumber: 13
        }
      }, __jsx("h5", {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 184,
          columnNumber: 15
        }
      }, "Background CSS:"), __jsx("div", {
        className: "position-relative ".concat(_styles_utils_module_css__WEBPACK_IMPORTED_MODULE_12___default.a.textAreaCopy),
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 185,
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
          lineNumber: 186,
          columnNumber: 17
        }
      }), cssBackgroundImage ? __jsx("button", {
        className: "btn btn-primary position-absolute ".concat(_styles_utils_module_css__WEBPACK_IMPORTED_MODULE_12___default.a.button),
        onClick: this.copyToClipBoard,
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 196,
          columnNumber: 19
        }
      }, copyButtonText) : null)) : null, __jsx("div", {
        className: "",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 206,
          columnNumber: 11
        }
      }, __jsx("h5", {
        className: "",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 207,
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
          lineNumber: 208,
          columnNumber: 13
        }
      }, decodeAll))), __jsx("br", {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 224,
          columnNumber: 9
        }
      }));
    }
  }]);

  return Content;
}(react__WEBPACK_IMPORTED_MODULE_10___default.a.Component);

/* harmony default export */ __webpack_exports__["default"] = (Content);

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9jb250ZW50LmpzIl0sIm5hbWVzIjpbIkNvbnRlbnQiLCJlIiwicHJldmVudERlZmF1bHQiLCJ2YWx1ZSIsInRhcmdldCIsInNldFN0YXRlIiwiaW5wdXRlZFN2ZyIsImhhbmRsZVN2Z0NoYW5nZXMiLCJjb25zb2xlIiwibG9nIiwic3RhdGUiLCJyZWdleCIsIm1hdGNoIiwieGxtbnMiLCJyZXBsYWNlIiwicmVwbGFjZWRRdW90ZXMiLCJlbmNvZGVVUklDb21wb25lbnQiLCJiYWNrZ3JvdW5kSW1hZ2UiLCJjc3NCYWNrZ3JvdW5kSW1hZ2UiLCJuYXZpZ2F0b3IiLCJjbGlwYm9hcmQiLCJ3cml0ZVRleHQiLCJjb3B5QnV0dG9uVGV4dCIsInNldFRpbWVvdXQiLCJldmVudCIsInNlbGVjdCIsImZpbGUiLCJmaWxlcyIsInNlbGVjdGVkRmlsZSIsInJlYWRlciIsIkZpbGVSZWFkZXIiLCJvbmxvYWQiLCJoYW5kbGVGaWxlTG9hZCIsInJlYWRBc1RleHQiLCJyZXN1bHQiLCJmaWxlQ29udGVudCIsImRlY29kZUFsbCIsImNvcHlTdWNjZXNzIiwicHJvcHMiLCJpc0xpZ2h0Iiwic2V0SXNMaWdodCIsIndpZHRoIiwiaGVpZ2h0IiwiYm9yZGVyUmFkaXVzIiwidG9wIiwibGVmdCIsImN1cnNvciIsInBvc2l0aW9uIiwiZGlzcGxheSIsImFsaWduSXRlbXMiLCJmb250U2l6ZSIsImp1c3RpZnlDb250ZW50IiwiYmFja2dyb3VuZENvbG9yIiwiaGFuZGxlRmlsZUlucHV0IiwidXRpbFN0eWxlcyIsImhhbmRsZVN2Z0NoYW5nZSIsImhhbmRsZUZvY3VzIiwidGV4dEFyZWFDb3B5IiwiYnV0dG9uIiwiY29weVRvQ2xpcEJvYXJkIiwiYmFja2dyb3VuZFBvc2l0aW9uIiwiYmFja2dyb3VuZFJlcGVhdCIsIlJlYWN0IiwiQ29tcG9uZW50Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztDQUNBOztBQUNBOztJQUVNQSxPOzs7OztBQUNKLHFCQUFjO0FBQUE7O0FBQUE7O0FBQ1o7O0FBRFksME5BY0ksVUFBQ0MsQ0FBRCxFQUFPO0FBQ3ZCQSxPQUFDLENBQUNDLGNBQUY7QUFDQSxVQUFNQyxLQUFLLEdBQUdGLENBQUMsQ0FBQ0csTUFBRixDQUFTRCxLQUF2Qjs7QUFDQSxZQUFLRSxRQUFMLENBQ0U7QUFDRUMsa0JBQVUsRUFBRUg7QUFEZCxPQURGLEVBSUU7QUFBQSxlQUFNLE1BQUtJLGdCQUFMLENBQXNCSixLQUF0QixDQUFOO0FBQUEsT0FKRjtBQU1ELEtBdkJhOztBQUFBLDJOQXdCSyxVQUFDQSxLQUFELEVBQVc7QUFDNUJLLGFBQU8sQ0FBQ0MsR0FBUixrQkFBc0IsTUFBS0MsS0FBTCxDQUFXSixVQUFqQyxzQkFBdURILEtBQXZELEdBRDRCLENBRTVCOztBQUVBLFVBQU1RLEtBQUssR0FDVCxnRUFERixDQUo0QixDQU01Qjs7QUFFQSxVQUFJLENBQUNSLEtBQUssQ0FBQ1MsS0FBTixDQUFZRCxLQUFaLENBQUwsRUFBeUI7QUFDdkI7QUFDQSxZQUFNRSxLQUFLLEdBQUcseUNBQWQ7QUFDQVYsYUFBSyxHQUFHQSxLQUFLLENBQUNXLE9BQU4sQ0FBYyxPQUFkLEVBQXVCRCxLQUF2QixDQUFSO0FBQ0QsT0FaMkIsQ0FhNUI7OztBQUNBLFVBQU1FLGNBQWMsR0FBR1osS0FBSyxDQUN6QlcsT0FEb0IsQ0FDWiwwQkFEWSxFQUNnQkUsa0JBRGhCLEVBRXBCRixPQUZvQixDQUVaLElBRlksTUFBdkI7QUFHQSxVQUFNRyxlQUFlLGdDQUF5QkYsY0FBekIsQ0FBckI7O0FBQ0EsVUFBSUEsY0FBSixFQUFvQjtBQUNsQixZQUFJRyxrQkFBa0Isd0RBQWdESCxjQUFoRCxRQUF0QjtBQUNELE9BRkQsTUFFTztBQUNMLFlBQUlHLGtCQUFrQixLQUF0QjtBQUNEOztBQUNEVixhQUFPLENBQUNDLEdBQVIsQ0FBWVMsa0JBQVo7O0FBQ0EsWUFBS2IsUUFBTCxDQUFjO0FBQ1phLDBCQUFrQixFQUFsQkEsa0JBRFk7QUFFWkQsdUJBQWUsRUFBZkE7QUFGWSxPQUFkO0FBSUQsS0FwRGE7O0FBQUEsd1pBc0RJO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEscUJBRVJFLFNBQVMsQ0FBQ0MsU0FBVixDQUFvQkMsU0FBcEIsQ0FBOEIsTUFBS1gsS0FBTCxDQUFXUSxrQkFBekMsQ0FGUTs7QUFBQTtBQUdkLG9CQUFLYixRQUFMLENBQWM7QUFBRWlCLDhCQUFjLEVBQUU7QUFBbEIsZUFBZDs7QUFIYztBQUFBOztBQUFBO0FBQUE7QUFBQTs7QUFLZCxvQkFBS2pCLFFBQUwsQ0FBYztBQUFFaUIsOEJBQWMsRUFBRTtBQUFsQixlQUFkOztBQUxjO0FBT2hCLGtCQUFJLE1BQUtaLEtBQUwsQ0FBV1ksY0FBWCxLQUE4QixxQkFBbEMsRUFBeUQ7QUFDdkRDLDBCQUFVLENBQUMsWUFBTTtBQUNmLHdCQUFLbEIsUUFBTCxDQUFjO0FBQUEsMkJBQU87QUFBRWlCLG9DQUFjLEVBQUU7QUFBbEIscUJBQVA7QUFBQSxtQkFBZDtBQUNELGlCQUZTLEVBRVAsSUFGTyxDQUFWO0FBR0Q7O0FBWGU7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0F0REo7O0FBQUEsc05BbUVBLFVBQUNFLEtBQUQ7QUFBQSxhQUFXQSxLQUFLLENBQUNwQixNQUFOLENBQWFxQixNQUFiLEVBQVg7QUFBQSxLQW5FQTs7QUFBQSwwTkFxRUksVUFBQ3hCLENBQUQsRUFBTztBQUN2QjtBQUNBLFVBQU15QixJQUFJLEdBQUd6QixDQUFDLENBQUNHLE1BQUYsQ0FBU3VCLEtBQVQsQ0FBZSxDQUFmLENBQWI7QUFDQSxVQUFJLENBQUNELElBQUwsRUFBVzs7QUFDWCxZQUFLckIsUUFBTCxDQUFjO0FBQUV1QixvQkFBWSxFQUFFRjtBQUFoQixPQUFkOztBQUVBLFVBQU1HLE1BQU0sR0FBRyxJQUFJQyxVQUFKLEVBQWY7QUFDQUQsWUFBTSxDQUFDRSxNQUFQLEdBQWdCLE1BQUtDLGNBQXJCO0FBQ0FILFlBQU0sQ0FBQ0ksVUFBUCxDQUFrQlAsSUFBbEI7QUFDRCxLQTlFYTs7QUFBQSx5TkFnRkcsVUFBQ0YsS0FBRCxFQUFXO0FBQzFCaEIsYUFBTyxDQUFDQyxHQUFSLENBQVllLEtBQUssQ0FBQ3BCLE1BQU4sQ0FBYThCLE1BQXpCLEVBRDBCLENBRTFCOztBQUNBLFVBQU1DLFdBQVcsR0FBR1gsS0FBSyxDQUFDcEIsTUFBTixDQUFhOEIsTUFBakM7O0FBQ0EsWUFBSzdCLFFBQUwsQ0FBYztBQUFFOEIsbUJBQVcsRUFBRUEsV0FBZjtBQUE0QjdCLGtCQUFVLEVBQUU2QjtBQUF4QyxPQUFkLEVBQXFFO0FBQUEsZUFDbkUsTUFBSzVCLGdCQUFMLENBQXNCNEIsV0FBdEIsQ0FEbUU7QUFBQSxPQUFyRSxFQUowQixDQU8xQjtBQUNBOzs7QUFDQTNCLGFBQU8sQ0FBQ0MsR0FBUixDQUFZLE1BQUtDLEtBQUwsQ0FBV0osVUFBdkI7QUFDRCxLQTFGYTs7QUFFWixVQUFLSSxLQUFMLEdBQWE7QUFDWEosZ0JBQVUsRUFBRSxFQUREO0FBRVg7QUFDQVksd0JBQWtCLEVBQUUsRUFIVDtBQUlYa0IsZUFBUyxFQUFFLEVBSkE7QUFLWEMsaUJBQVcsRUFBRSxFQUxGO0FBTVhwQixxQkFBZSxFQUFFLEVBTk47QUFPWEssb0JBQWMsRUFBRSxvQkFQTDtBQVFYYSxpQkFBVyxFQUFFO0FBUkYsS0FBYjtBQUZZO0FBWWI7Ozs7NkJBZ0ZRO0FBQUEsd0JBUUgsS0FBS3pCLEtBUkY7QUFBQSxVQUVMSixVQUZLLGVBRUxBLFVBRks7QUFBQSxVQUdMWSxrQkFISyxlQUdMQSxrQkFISztBQUFBLFVBSUxrQixTQUpLLGVBSUxBLFNBSks7QUFBQSxVQUtMbkIsZUFMSyxlQUtMQSxlQUxLO0FBQUEsVUFNTEssY0FOSyxlQU1MQSxjQU5LO0FBQUEsVUFPTGEsV0FQSyxlQU9MQSxXQVBLO0FBQUEsd0JBU3lCLEtBQUtHLEtBVDlCO0FBQUEsVUFTQ0MsT0FURCxlQVNDQSxPQVREO0FBQUEsVUFTVUMsVUFUVixlQVNVQSxVQVRWLEVBVVA7O0FBQ0EsYUFDRTtBQUFLLGlCQUFTLEVBQUMsZUFBZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFNBRUU7QUFDRSxpQkFBUyxFQUFDLGtCQURaO0FBRUUsYUFBSyxFQUFFO0FBQ0xDLGVBQUssRUFBRSxFQURGO0FBRUxDLGdCQUFNLEVBQUUsRUFGSDtBQUdMQyxzQkFBWSxFQUFFLEVBSFQ7QUFJTEMsYUFBRyxFQUFFLElBSkE7QUFLTEMsY0FBSSxFQUFFLElBTEQ7QUFNTEMsZ0JBQU0sRUFBRSxTQU5IO0FBT0xDLGtCQUFRLEVBQUUsT0FQTDtBQVFMQyxpQkFBTyxFQUFFLE1BUko7QUFTTEMsb0JBQVUsRUFBRSxRQVRQO0FBVUxDLGtCQUFRLFVBVkg7QUFXTEMsd0JBQWMsRUFBRSxRQVhYO0FBWUxDLHlCQUFlLFlBQUtiLE9BQU8sR0FBRyxPQUFILEdBQWEsT0FBekI7QUFaVixTQUZUO0FBZ0JFLGVBQU8sRUFBRTtBQUFBLGlCQUFNQyxVQUFVLENBQUMsQ0FBQ0QsT0FBRixDQUFoQjtBQUFBLFNBaEJYO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsU0FrQkdBLE9BQU8sR0FBRyxJQUFILEdBQVUsSUFsQnBCLENBRkYsRUF1QkU7QUFBSSxpQkFBUyxFQUFDLGFBQWQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxzREF2QkYsRUEwQkU7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxRQTFCRixFQTRCRTtBQUFBLG9HQWNvQkEsT0FBTyxHQUFHLE9BQUgsR0FBYSxPQWR4QyxFQWVlQSxPQUFPLEdBQUcsT0FBSCxHQUFhLE9BZm5DLEVBa0JvQkEsT0FBTyxHQUFHLE9BQUgsR0FBYSxPQWxCeEMsRUFtQmVBLE9BQU8sR0FBRyxPQUFILEdBQWEsT0FuQm5DLEVBd0JlQSxPQUFPLEdBQUcsT0FBSCxHQUFhLE9BeEJuQyxFQXlCb0JBLE9BQU8sR0FBRyxPQUFILEdBQWEsT0F6QnhDLGFBQWUsRUFBZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFNBQ0U7QUFBTyxlQUFPLEVBQUMsd0JBQWY7QUFBQSxvR0Fha0JBLE9BQU8sR0FBRyxPQUFILEdBQWEsT0FidEMsRUFjYUEsT0FBTyxHQUFHLE9BQUgsR0FBYSxPQWRqQyxFQWlCa0JBLE9BQU8sR0FBRyxPQUFILEdBQWEsT0FqQnRDLEVBa0JhQSxPQUFPLEdBQUcsT0FBSCxHQUFhLE9BbEJqQyxFQXVCYUEsT0FBTyxHQUFHLE9BQUgsR0FBYSxPQXZCakMsRUF3QmtCQSxPQUFPLEdBQUcsT0FBSCxHQUFhLE9BeEJ0QztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHdEQURGLEVBSUU7QUFDRSxZQUFJLEVBQUMsTUFEUDtBQUVFLGNBQU0sRUFBQyxNQUZULENBR0U7QUFIRjtBQUlFLGdCQUFRLEVBQUUsS0FBS2MsZUFKakI7QUFNRSxVQUFFLEVBQUMsd0JBTkw7QUFBQSxvR0FVa0JkLE9BQU8sR0FBRyxPQUFILEdBQWEsT0FWdEMsRUFXYUEsT0FBTyxHQUFHLE9BQUgsR0FBYSxPQVhqQyxFQWNrQkEsT0FBTyxHQUFHLE9BQUgsR0FBYSxPQWR0QyxFQWVhQSxPQUFPLEdBQUcsT0FBSCxHQUFhLE9BZmpDLEVBb0JhQSxPQUFPLEdBQUcsT0FBSCxHQUFhLE9BcEJqQyxFQXFCa0JBLE9BQU8sR0FBRyxPQUFILEdBQWEsT0FyQnRDLHVCQUtnQmUsZ0VBQVUsQ0FBQyxtQkFBRCxDQUwxQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFFBSkY7QUFBQTtBQUFBLGtCQWNvQmYsT0FBTyxHQUFHLE9BQUgsR0FBYSxPQWR4QyxFQWVlQSxPQUFPLEdBQUcsT0FBSCxHQUFhLE9BZm5DLEVBa0JvQkEsT0FBTyxHQUFHLE9BQUgsR0FBYSxPQWxCeEMsRUFtQmVBLE9BQU8sR0FBRyxPQUFILEdBQWEsT0FuQm5DLEVBd0JlQSxPQUFPLEdBQUcsT0FBSCxHQUFhLE9BeEJuQyxFQXlCb0JBLE9BQU8sR0FBRyxPQUFILEdBQWEsT0F6QnhDO0FBQUE7QUFBQSxtQ0Fjb0JBLE9BQU8sR0FBRyxPQUFILEdBQWEsT0FkeEMsb0JBZWVBLE9BQU8sR0FBRyxPQUFILEdBQWEsT0FmbkMsNkNBa0JvQkEsT0FBTyxHQUFHLE9BQUgsR0FBYSxPQWxCeEMsb0JBbUJlQSxPQUFPLEdBQUcsT0FBSCxHQUFhLE9BbkJuQyxzSkF3QmVBLE9BQU8sR0FBRyxPQUFILEdBQWEsT0F4Qm5DLHlCQXlCb0JBLE9BQU8sR0FBRyxPQUFILEdBQWEsT0F6QnhDLGd4WkE1QkYsRUEyREU7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxxQkEzREYsRUE0REU7QUFDRSxpQkFBUyxFQUFDLHdCQURaO0FBRUUsWUFBSSxFQUFDLE1BRlA7QUFHRSxZQUFJLEVBQUMsSUFIUDtBQUlFLGFBQUssRUFBRWpDLFVBSlQ7QUFLRSxnQkFBUSxFQUFFLEtBQUtpRCxlQUxqQjtBQU1FLGVBQU8sRUFBRSxLQUFLQyxXQU5oQjtBQU9FLG1CQUFXLEVBQUMsZ0JBUGQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxRQTVERixFQXNFRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFFBdEVGLEVBdUVFO0FBQUssaUJBQVMsa0RBQWQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxTQUNHbEQsVUFBVSxHQUNUO0FBQUssaUJBQVMsc0JBQWQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxTQUNFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsMkJBREYsRUFFRTtBQUFLLGlCQUFTLDhCQUF1QmdELGdFQUFVLENBQUNHLFlBQWxDLENBQWQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxTQUNFO0FBQ0UsZ0JBQVEsTUFEVjtBQUVFLGlCQUFTLHNCQUZYO0FBR0UsWUFBSSxFQUFDLE1BSFAsQ0FJRTtBQUpGO0FBS0UsYUFBSyxFQUFFdkMsa0JBTFQ7QUFNRSxtQkFBVyxFQUFDLGdDQU5kO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsUUFERixFQVVHQSxrQkFBa0IsR0FDakI7QUFDRSxpQkFBUyw4Q0FBdUNvQyxnRUFBVSxDQUFDSSxNQUFsRCxDQURYO0FBRUUsZUFBTyxFQUFFLEtBQUtDLGVBRmhCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsU0FJR3JDLGNBSkgsQ0FEaUIsR0FPZixJQWpCTixDQUZGLENBRFMsR0F1QlAsSUF4Qk4sRUF5QkU7QUFBSyxpQkFBUyxFQUFDLEVBQWY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxTQUNFO0FBQUksaUJBQVMsSUFBYjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLG9CQURGLEVBRUU7QUFDRSxpQkFBUyxFQUFDLE9BRFo7QUFFRSxhQUFLLEVBQUU7QUFDTG9CLGdCQUFNLEVBQUUsR0FESDtBQUVMO0FBQ0F6Qix5QkFBZSxrQkFBVUEsZUFBVixRQUhWO0FBSUwyQyw0QkFBa0IsRUFBRSxRQUpmO0FBS0xDLDBCQUFnQixFQUFFLFdBTGI7QUFNTFQseUJBQWUsRUFBRTtBQU5aLFNBRlQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxTQVdHaEIsU0FYSCxDQUZGLENBekJGLENBdkVGLEVBa0hFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsUUFsSEYsQ0FERjtBQXNIRDs7OztFQTlObUIwQiw2Q0FBSyxDQUFDQyxTOztBQWlPYi9ELHNFQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL2luZGV4LjZmMjViMmE5NGEwZGRlMmJhNjE1LmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgY3ggZnJvbSBcImNsYXNzbmFtZXNcIjtcclxuLy8gaW1wb3J0IGdsb2JhbFN0eWxlcyBmcm9tIFwiLi4vc3R5bGVzL2Jvb3RzdHJhcC5tb2R1bGUuY3NzXCI7XHJcbmltcG9ydCB1dGlsU3R5bGVzIGZyb20gXCIuLi9zdHlsZXMvdXRpbHMubW9kdWxlLmNzc1wiO1xyXG5cclxuY2xhc3MgQ29udGVudCBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XHJcbiAgY29uc3RydWN0b3IoKSB7XHJcbiAgICBzdXBlcigpO1xyXG4gICAgdGhpcy5zdGF0ZSA9IHtcclxuICAgICAgaW5wdXRlZFN2ZzogXCJcIixcclxuICAgICAgLy8gJzxzdmcgd2lkdGg9XCI1MFwiIGhlaWdodD1cIjQ0XCIgdmlld0JveD1cIjAgMCA1MCA0NFwiIGZpbGw9XCJub25lXCIgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiPiA8cGF0aCBmaWxsUnVsZT1cImV2ZW5vZGRcIiBjbGlwUnVsZT1cImV2ZW5vZGRcIiBkPVwiTTMwLjMwNjcgMS4xMjg2OUMzMS45Njk1IDAuNDM0NzkgMzMuNzUxOCAwLjA3NzYzNjcgMzUuNTUxNiAwLjA3NzYzNjdDMzcuMzUxNSAwLjA3NzYzNjcgMzkuMTMzOCAwLjQzNDc5IDQwLjc5NjYgMS4xMjg2OUM0Mi40NTkxIDEuODIyNDcgNDMuOTY5NiAyLjgzOTI4IDQ1LjI0MTggNC4xMjEwNUM0Ni41MTQ1IDUuNDAyNCA0Ny41MjQ4IDYuOTI0NCA0OC4yMTM3IDguNTk4NzdDNDguOTAyNiAxMC4yNzM0IDQ5LjI1NzMgMTIuMDY4NCA0OS4yNTczIDEzLjg4MTJDNDkuMjU3MyAxNS42OTM5IDQ4LjkwMjYgMTcuNDg4OSA0OC4yMTM3IDE5LjE2MzZDNDcuNTI0NyAyMC44MzgxIDQ2LjUxNSAyMi4zNTk1IDQ1LjI0MjIgMjMuNjQwOUM0NS4yNDIxIDIzLjY0MSA0NS4yNDIzIDIzLjY0MDggNDUuMjQyMiAyMy42NDA5TDI2LjYwNzggNDIuNDA4NEMyNS43ODQ2IDQzLjIzNzUgMjQuNDQ5OSA0My4yMzc1IDIzLjYyNjYgNDIuNDA4NEw0Ljk5MjIzIDIzLjY0MDlDMi40MjIxMyAyMS4wNTI1IDAuOTc4MjcxIDE3LjU0MTggMC45NzgyNzEgMTMuODgxMkMwLjk3ODI3MSAxMC4yMjA1IDIuNDIyMTMgNi43MDk4NSA0Ljk5MjIzIDQuMTIxNEM3LjU2MjMyIDEuNTMyOTUgMTEuMDQ4MSAwLjA3ODc3MjEgMTQuNjgyOCAwLjA3ODc3MjFDMTguMzE3NCAwLjA3ODc3MjEgMjEuODAzMiAxLjUzMjk1IDI0LjM3MzMgNC4xMjE0TDI1LjExNzIgNC44NzA2TDI1Ljg2MDcgNC4xMjE3NUMyNS44NjA5IDQuMTIxNjMgMjUuODYwNiA0LjEyMTg3IDI1Ljg2MDcgNC4xMjE3NUMyNy4xMzMxIDIuODM5ODIgMjguNjQ0MSAxLjgyMjUzIDMwLjMwNjcgMS4xMjg2OVpNMzUuNTUxNiA0LjMyMzY4QzM0LjMwNTYgNC4zMjM2OCAzMy4wNzE3IDQuNTcwOTQgMzEuOTIwNSA1LjA1MTM0QzMwLjc2OTQgNS41MzE3MyAyOS43MjM1IDYuMjM1ODQgMjguODQyNiA3LjEyMzQ1TDI2LjYwNzggOS4zNzQyMUMyNS43ODQ2IDEwLjIwMzMgMjQuNDQ5OSAxMC4yMDMzIDIzLjYyNjYgOS4zNzQyMUwyMS4zOTIyIDcuMTIzODFDMTkuNjEyOCA1LjMzMTY0IDE3LjE5OTMgNC4zMjQ4MiAxNC42ODI4IDQuMzI0ODJDMTIuMTY2MiA0LjMyNDgyIDkuNzUyNzkgNS4zMzE2NCA3Ljk3MzM0IDcuMTIzODFDNi4xOTM4OSA4LjkxNTk3IDUuMTk0MiAxMS4zNDY3IDUuMTk0MiAxMy44ODEyQzUuMTk0MiAxNi40MTU3IDYuMTkzODkgMTguODQ2NCA3Ljk3MzM0IDIwLjYzODVMMjUuMTE3MiAzNy45MDQ4TDQyLjI2MTEgMjAuNjM4NUM0My4xNDI0IDE5Ljc1MTMgNDMuODQxOCAxOC42OTc2IDQ0LjMxODggMTcuNTM4MkM0NC43OTU4IDE2LjM3ODggNDUuMDQxMyAxNS4xMzYxIDQ1LjA0MTMgMTMuODgxMkM0NS4wNDEzIDEyLjYyNjIgNDQuNzk1OCAxMS4zODM1IDQ0LjMxODggMTAuMjI0MUM0My44NDE4IDkuMDY0NzMgNDMuMTQyNyA4LjAxMTM1IDQyLjI2MTQgNy4xMjQxNkM0MS4zODA1IDYuMjM2NTUgNDAuMzMzOSA1LjUzMTczIDM5LjE4MjcgNS4wNTEzNEMzOC4wMzE2IDQuNTcwOTQgMzYuNzk3NyA0LjMyMzY4IDM1LjU1MTYgNC4zMjM2OFpcIiBmaWxsPVwiIzZDNkI2QlwiLz48L3N2Zz4nLFxyXG4gICAgICBjc3NCYWNrZ3JvdW5kSW1hZ2U6IFwiXCIsXHJcbiAgICAgIGRlY29kZUFsbDogXCJcIixcclxuICAgICAgY29weVN1Y2Nlc3M6IFwiXCIsXHJcbiAgICAgIGJhY2tncm91bmRJbWFnZTogXCJcIixcclxuICAgICAgY29weUJ1dHRvblRleHQ6IFwiY2xpY2sgaGVyZSB0byBjb3B5XCIsXHJcbiAgICAgIGZpbGVDb250ZW50OiBudWxsLFxyXG4gICAgfTtcclxuICB9XHJcblxyXG4gIGhhbmRsZVN2Z0NoYW5nZSA9IChlKSA9PiB7XHJcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICBjb25zdCB2YWx1ZSA9IGUudGFyZ2V0LnZhbHVlO1xyXG4gICAgdGhpcy5zZXRTdGF0ZShcclxuICAgICAge1xyXG4gICAgICAgIGlucHV0ZWRTdmc6IHZhbHVlLFxyXG4gICAgICB9LFxyXG4gICAgICAoKSA9PiB0aGlzLmhhbmRsZVN2Z0NoYW5nZXModmFsdWUpXHJcbiAgICApO1xyXG4gIH07XHJcbiAgaGFuZGxlU3ZnQ2hhbmdlcyA9ICh2YWx1ZSkgPT4ge1xyXG4gICAgY29uc29sZS5sb2coYHN0YXRlOiAke3RoaXMuc3RhdGUuaW5wdXRlZFN2Z30sIHZhbHVlOiAke3ZhbHVlfWApO1xyXG4gICAgLy8gY29uc3QgZGVjb2RlQWxsID0gZGVjb2RlVVJJQ29tcG9uZW50KGVuY29kZUFsbCk7XHJcblxyXG4gICAgY29uc3QgcmVnZXggPVxyXG4gICAgICBcIih4bWxucz1bXFxcXCdcXFwiXWh0dHBzPzpcXFxcL1xcXFwvd3d3LnczLm9yZ1xcXFwvMjAwMFxcXFwvc3ZnW1xcXFwnXFxcIl1bXnNdKVwiO1xyXG4gICAgLy8gY29uc29sZS5sb2codmFsdWUubWF0Y2gocmVnZXgpKTtcclxuXHJcbiAgICBpZiAoIXZhbHVlLm1hdGNoKHJlZ2V4KSkge1xyXG4gICAgICAvL2lmIGlucHV0IGRvIG5vdCBoYXZlIHRoZSB4bG1uc1xyXG4gICAgICBjb25zdCB4bG1ucyA9IFwiPHN2ZyB4bWxucz0naHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmcnXCI7XHJcbiAgICAgIHZhbHVlID0gdmFsdWUucmVwbGFjZSgvPHN2Zy9nLCB4bG1ucyk7XHJcbiAgICB9XHJcbiAgICAvLyByZXBsYWNpbmcgZG91YmxlIHF1b3RlcyB0byBzaW5nbGUgcXVvdGVzXHJcbiAgICBjb25zdCByZXBsYWNlZFF1b3RlcyA9IHZhbHVlXHJcbiAgICAgIC5yZXBsYWNlKC9bXFxyXFxuJSMoKTw+P1tcXFxcXFxdXmB7fH1dL2csIGVuY29kZVVSSUNvbXBvbmVudClcclxuICAgICAgLnJlcGxhY2UoL1wiL2csIGAnYCk7XHJcbiAgICBjb25zdCBiYWNrZ3JvdW5kSW1hZ2UgPSBgZGF0YTppbWFnZS9zdmcreG1sLCR7cmVwbGFjZWRRdW90ZXN9YDtcclxuICAgIGlmIChyZXBsYWNlZFF1b3Rlcykge1xyXG4gICAgICB2YXIgY3NzQmFja2dyb3VuZEltYWdlID0gYGJhY2tncm91bmQtaW1hZ2U6IHVybChcImRhdGE6aW1hZ2Uvc3ZnK3htbCwke3JlcGxhY2VkUXVvdGVzfVwiKWA7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICB2YXIgY3NzQmFja2dyb3VuZEltYWdlID0gYGA7XHJcbiAgICB9XHJcbiAgICBjb25zb2xlLmxvZyhjc3NCYWNrZ3JvdW5kSW1hZ2UpO1xyXG4gICAgdGhpcy5zZXRTdGF0ZSh7XHJcbiAgICAgIGNzc0JhY2tncm91bmRJbWFnZSxcclxuICAgICAgYmFja2dyb3VuZEltYWdlLFxyXG4gICAgfSk7XHJcbiAgfTtcclxuXHJcbiAgY29weVRvQ2xpcEJvYXJkID0gYXN5bmMgKCkgPT4ge1xyXG4gICAgdHJ5IHtcclxuICAgICAgYXdhaXQgbmF2aWdhdG9yLmNsaXBib2FyZC53cml0ZVRleHQodGhpcy5zdGF0ZS5jc3NCYWNrZ3JvdW5kSW1hZ2UpO1xyXG4gICAgICB0aGlzLnNldFN0YXRlKHsgY29weUJ1dHRvblRleHQ6IFwiQ29waWVkIVwiIH0pO1xyXG4gICAgfSBjYXRjaCAoZXJyKSB7XHJcbiAgICAgIHRoaXMuc2V0U3RhdGUoeyBjb3B5QnV0dG9uVGV4dDogXCJGYWlsZWQgdG8gY29weSFcIiB9KTtcclxuICAgIH1cclxuICAgIGlmICh0aGlzLnN0YXRlLmNvcHlCdXR0b25UZXh0ICE9PSAnY2xpY2sgaGVyZSB0byBjb3B5XCInKSB7XHJcbiAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xyXG4gICAgICAgIHRoaXMuc2V0U3RhdGUoKCkgPT4gKHsgY29weUJ1dHRvblRleHQ6IFwiY2xpY2sgaGVyZSB0byBjb3B5XCIgfSkpO1xyXG4gICAgICB9LCA1MDAwKTtcclxuICAgIH1cclxuICB9O1xyXG4gIGhhbmRsZUZvY3VzID0gKGV2ZW50KSA9PiBldmVudC50YXJnZXQuc2VsZWN0KCk7XHJcblxyXG4gIGhhbmRsZUZpbGVJbnB1dCA9IChlKSA9PiB7XHJcbiAgICAvLyBoYW5kbGUgdmFsaWRhdGlvbnNcclxuICAgIGNvbnN0IGZpbGUgPSBlLnRhcmdldC5maWxlc1swXTtcclxuICAgIGlmICghZmlsZSkgcmV0dXJuO1xyXG4gICAgdGhpcy5zZXRTdGF0ZSh7IHNlbGVjdGVkRmlsZTogZmlsZSB9KTtcclxuXHJcbiAgICBjb25zdCByZWFkZXIgPSBuZXcgRmlsZVJlYWRlcigpO1xyXG4gICAgcmVhZGVyLm9ubG9hZCA9IHRoaXMuaGFuZGxlRmlsZUxvYWQ7XHJcbiAgICByZWFkZXIucmVhZEFzVGV4dChmaWxlKTtcclxuICB9O1xyXG5cclxuICBoYW5kbGVGaWxlTG9hZCA9IChldmVudCkgPT4ge1xyXG4gICAgY29uc29sZS5sb2coZXZlbnQudGFyZ2V0LnJlc3VsdCk7XHJcbiAgICAvLyAgIGdldHRpbmcgdGhlIHN2ZyBmcm9tICB1cGxvYWRlZCBpbWFnZVxyXG4gICAgY29uc3QgZmlsZUNvbnRlbnQgPSBldmVudC50YXJnZXQucmVzdWx0O1xyXG4gICAgdGhpcy5zZXRTdGF0ZSh7IGZpbGVDb250ZW50OiBmaWxlQ29udGVudCwgaW5wdXRlZFN2ZzogZmlsZUNvbnRlbnQgfSwgKCkgPT5cclxuICAgICAgdGhpcy5oYW5kbGVTdmdDaGFuZ2VzKGZpbGVDb250ZW50KVxyXG4gICAgKTtcclxuICAgIC8vIHRoaXMucmVmcy50ZXN0LmlubmVySFRNTCA9IGZpbGVDb250ZW50O1xyXG4gICAgLy8gdGhpcy5oYW5kbGVTdmdDaGFuZ2VzO1xyXG4gICAgY29uc29sZS5sb2codGhpcy5zdGF0ZS5pbnB1dGVkU3ZnKTtcclxuICB9O1xyXG5cclxuICByZW5kZXIoKSB7XHJcbiAgICBjb25zdCB7XHJcbiAgICAgIGlucHV0ZWRTdmcsXHJcbiAgICAgIGNzc0JhY2tncm91bmRJbWFnZSxcclxuICAgICAgZGVjb2RlQWxsLFxyXG4gICAgICBiYWNrZ3JvdW5kSW1hZ2UsXHJcbiAgICAgIGNvcHlCdXR0b25UZXh0LFxyXG4gICAgICBmaWxlQ29udGVudCxcclxuICAgIH0gPSB0aGlzLnN0YXRlO1xyXG4gICAgY29uc3QgeyBpc0xpZ2h0LCBzZXRJc0xpZ2h0IH0gPSB0aGlzLnByb3BzO1xyXG4gICAgLy8gY29uc29sZS5sb2codGhpcy5wcm9wcyk7XHJcbiAgICByZXR1cm4gKFxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cIkFwcCBjb250YWluZXJcIj5cclxuICAgICAgICB7LyogPGgzIGNvbnRlbnRFZGl0YWJsZT1cInRydWVcIj5TVkcgdG8gQkFDS0dST1VORCBJTUFHRTwvaDM+ICovfVxyXG4gICAgICAgIDxkaXZcclxuICAgICAgICAgIGNsYXNzTmFtZT1cImNoYW5nZUJhY2tncm91bmRcIlxyXG4gICAgICAgICAgc3R5bGU9e3tcclxuICAgICAgICAgICAgd2lkdGg6IDUwLFxyXG4gICAgICAgICAgICBoZWlnaHQ6IDUwLFxyXG4gICAgICAgICAgICBib3JkZXJSYWRpdXM6IDE1LFxyXG4gICAgICAgICAgICB0b3A6IFwiMTJcIixcclxuICAgICAgICAgICAgbGVmdDogXCIxMlwiLFxyXG4gICAgICAgICAgICBjdXJzb3I6IFwicG9pbnRlclwiLFxyXG4gICAgICAgICAgICBwb3NpdGlvbjogXCJmaXhlZFwiLFxyXG4gICAgICAgICAgICBkaXNwbGF5OiBcImZsZXhcIixcclxuICAgICAgICAgICAgYWxpZ25JdGVtczogXCJjZW50ZXJcIixcclxuICAgICAgICAgICAgZm9udFNpemU6IGAxLjVyZW1gLFxyXG4gICAgICAgICAgICBqdXN0aWZ5Q29udGVudDogXCJjZW50ZXJcIixcclxuICAgICAgICAgICAgYmFja2dyb3VuZENvbG9yOiBgJHtpc0xpZ2h0ID8gXCJibGFja1wiIDogXCJ3aGl0ZVwifWAsXHJcbiAgICAgICAgICB9fVxyXG4gICAgICAgICAgb25DbGljaz17KCkgPT4gc2V0SXNMaWdodCghaXNMaWdodCl9XHJcbiAgICAgICAgPlxyXG4gICAgICAgICAge2lzTGlnaHQgPyBcIvCfjJtcIiA6IFwi8J+MnlwifVxyXG4gICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICA8aDMgY2xhc3NOYW1lPVwidGV4dC1jZW50ZXJcIj5cclxuICAgICAgICAgIEVuY29kZSBzdmcgaW1hZ2UgdG8gdXNlIGZvciBDU1MgYmFja2dyb3VuZFxyXG4gICAgICAgIDwvaDM+XHJcbiAgICAgICAgPGJyIC8+XHJcblxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiXCI+XHJcbiAgICAgICAgICA8bGFiZWwgaHRtbEZvcj1cImV4YW1wbGVGb3JtQ29udHJvbEZpbGVcIj5cclxuICAgICAgICAgICAgVXBsb2FkIHlvdXIgc3ZnIGZpbGUgb3IgcGFzdGUgdGhlIGNvZGUgYmVsb3dcclxuICAgICAgICAgIDwvbGFiZWw+XHJcbiAgICAgICAgICA8aW5wdXRcclxuICAgICAgICAgICAgdHlwZT1cImZpbGVcIlxyXG4gICAgICAgICAgICBhY2NlcHQ9XCIuc3ZnXCJcclxuICAgICAgICAgICAgLy8gdmFsdWU9e3NlbGVjdGVkRmlsZX1cclxuICAgICAgICAgICAgb25DaGFuZ2U9e3RoaXMuaGFuZGxlRmlsZUlucHV0fVxyXG4gICAgICAgICAgICBjbGFzc05hbWU9e2Ake3V0aWxTdHlsZXNbXCJmb3JtLWNvbnRyb2wtZmlsZVwiXX0gZm9ybS1jb250cm9sLWZpbGVgfVxyXG4gICAgICAgICAgICBpZD1cImV4YW1wbGVGb3JtQ29udHJvbEZpbGVcIlxyXG4gICAgICAgICAgLz5cclxuICAgICAgICAgIDxzdHlsZSBqc3ggZ2xvYmFsPntgXHJcbiAgICAgICAgICAgIGJvZHkge1xyXG4gICAgICAgICAgICAgIGJhY2tncm91bmQ6ICR7aXNMaWdodCA/IFwid2hpdGVcIiA6IFwiYmxhY2tcIn07XHJcbiAgICAgICAgICAgICAgY29sb3I6ICR7aXNMaWdodCA/IFwiYmxhY2tcIiA6IFwid2hpdGVcIn07XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgLmZvcm0tY29udHJvbC1maWxlIHtcclxuICAgICAgICAgICAgICBiYWNrZ3JvdW5kOiAke2lzTGlnaHQgPyBcIndoaXRlXCIgOiBcImJsYWNrXCJ9O1xyXG4gICAgICAgICAgICAgIGNvbG9yOiAke2lzTGlnaHQgPyBcImJsYWNrXCIgOiBcIndoaXRlXCJ9O1xyXG4gICAgICAgICAgICAgIHdpZHRoOiBtaW4tY29udGVudDtcclxuICAgICAgICAgICAgICBmb250LXNpemU6IDE0cHg7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgLmZvcm0tY29udHJvbC1maWxlOjotd2Via2l0LWZpbGUtdXBsb2FkLWJ1dHRvbiB7XHJcbiAgICAgICAgICAgICAgY29sb3I6ICR7aXNMaWdodCA/IFwid2hpdGVcIiA6IFwiYmxhY2tcIn07XHJcbiAgICAgICAgICAgICAgYmFja2dyb3VuZDogJHtpc0xpZ2h0ID8gXCJibGFja1wiIDogXCJ3aGl0ZVwifTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgYH08L3N0eWxlPlxyXG4gICAgICAgICAgey8qIDxwcmUgaWQ9XCJmaWxlQ29udGVudFwiPntmaWxlQ29udGVudH08L3ByZT4gKi99XHJcbiAgICAgICAgICB7LyogPGRpdiByZWY9XCJ0ZXN0XCI+e2ZpbGVDb250ZW50fTwvZGl2PiAqL31cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8aDU+c3ZnIGNvZGU6PC9oNT5cclxuICAgICAgICA8dGV4dGFyZWFcclxuICAgICAgICAgIGNsYXNzTmFtZT1cInctMTAwIHAtMiBmb3JtLWNvbnRyb2xcIlxyXG4gICAgICAgICAgdHlwZT1cInRleHRcIlxyXG4gICAgICAgICAgcm93cz1cIjEwXCJcclxuICAgICAgICAgIHZhbHVlPXtpbnB1dGVkU3ZnfVxyXG4gICAgICAgICAgb25DaGFuZ2U9e3RoaXMuaGFuZGxlU3ZnQ2hhbmdlfVxyXG4gICAgICAgICAgb25Gb2N1cz17dGhpcy5oYW5kbGVGb2N1c31cclxuICAgICAgICAgIHBsYWNlaG9sZGVyPVwiUGFzdGUgU1ZHIGhlcmVcIlxyXG4gICAgICAgIC8+XHJcblxyXG4gICAgICAgIDxiciAvPlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPXtgcG9zaXRpb24tcmVsYXRpdmUgZC1mbGV4IGZsZXgtY29sdW1uIGZsZXgtd3JhcGB9PlxyXG4gICAgICAgICAge2lucHV0ZWRTdmcgPyAoXHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtgcG9zaXRpb24tcmVsYXRpdmUgYH0+XHJcbiAgICAgICAgICAgICAgPGg1PkJhY2tncm91bmQgQ1NTOjwvaDU+XHJcbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e2Bwb3NpdGlvbi1yZWxhdGl2ZSAke3V0aWxTdHlsZXMudGV4dEFyZWFDb3B5fWB9PlxyXG4gICAgICAgICAgICAgICAgPGlucHV0XHJcbiAgICAgICAgICAgICAgICAgIHJlYWRPbmx5XHJcbiAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17YHctMTAwIGZvcm0tY29udHJvbGB9XHJcbiAgICAgICAgICAgICAgICAgIHR5cGU9XCJ0ZXh0XCJcclxuICAgICAgICAgICAgICAgICAgLy8gICByb3dzPVwiOVwiXHJcbiAgICAgICAgICAgICAgICAgIHZhbHVlPXtjc3NCYWNrZ3JvdW5kSW1hZ2V9XHJcbiAgICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiQ29weSBDU1MgYmFja2dyb3VuZyBpbWFnZSBoZXJlXCJcclxuICAgICAgICAgICAgICAgIC8+XHJcblxyXG4gICAgICAgICAgICAgICAge2Nzc0JhY2tncm91bmRJbWFnZSA/IChcclxuICAgICAgICAgICAgICAgICAgPGJ1dHRvblxyXG4gICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17YGJ0biBidG4tcHJpbWFyeSBwb3NpdGlvbi1hYnNvbHV0ZSAke3V0aWxTdHlsZXMuYnV0dG9ufWB9XHJcbiAgICAgICAgICAgICAgICAgICAgb25DbGljaz17dGhpcy5jb3B5VG9DbGlwQm9hcmR9XHJcbiAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICB7Y29weUJ1dHRvblRleHR9XHJcbiAgICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgKSA6IG51bGx9XHJcbiAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgKSA6IG51bGx9XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIlwiPlxyXG4gICAgICAgICAgICA8aDUgY2xhc3NOYW1lPXtgYH0+UHJldmlldzo8L2g1PlxyXG4gICAgICAgICAgICA8ZGl2XHJcbiAgICAgICAgICAgICAgY2xhc3NOYW1lPVwidy0xMDBcIlxyXG4gICAgICAgICAgICAgIHN0eWxlPXt7XHJcbiAgICAgICAgICAgICAgICBoZWlnaHQ6IDI1NCxcclxuICAgICAgICAgICAgICAgIC8vIHdpZHRoOiAyNTYsXHJcbiAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kSW1hZ2U6IGB1cmwoXCIke2JhY2tncm91bmRJbWFnZX1cIilgLFxyXG4gICAgICAgICAgICAgICAgYmFja2dyb3VuZFBvc2l0aW9uOiBcImNlbnRlclwiLFxyXG4gICAgICAgICAgICAgICAgYmFja2dyb3VuZFJlcGVhdDogXCJuby1yZXBlYXRcIixcclxuICAgICAgICAgICAgICAgIGJhY2tncm91bmRDb2xvcjogXCJ3aGl0ZXNtb2tlXCIsXHJcbiAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgIHtkZWNvZGVBbGx9XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgIDxiciAvPlxyXG4gICAgICA8L2Rpdj5cclxuICAgICk7XHJcbiAgfVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBDb250ZW50O1xyXG4iXSwic291cmNlUm9vdCI6IiJ9