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
          cursor: "fixed",
          position: "absolute",
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
      }, "body{background:".concat(isLight ? "white" : "black", ";color:").concat(isLight ? "black" : "white", ";}.form-control-file{background:").concat(isLight ? "white" : "black", ";color:").concat(isLight ? "black" : "white", ";width:-webkit-min-content;width:-moz-min-content;width:min-content;font-size:14px;}.form-control-file::-webkit-file-upload-button{color:").concat(isLight ? "white" : "black", ";background:").concat(isLight ? "black" : "white", ";}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkQ6XFxEZXNrdG9wXFx1cmxlbmNvZGVyXFxjb21wb25lbnRzXFxjb250ZW50LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQXFKNkIsQUFHdUQsQUFJQSxBQU1MLG1DQUNLLEtBVkwsQUFJQSxtQ0FIckMsQUFJb0IsQUFNcEIsbUVBTGlCLGVBQ2pCIiwiZmlsZSI6IkQ6XFxEZXNrdG9wXFx1cmxlbmNvZGVyXFxjb21wb25lbnRzXFxjb250ZW50LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IGN4IGZyb20gXCJjbGFzc25hbWVzXCI7XHJcbi8vIGltcG9ydCBnbG9iYWxTdHlsZXMgZnJvbSBcIi4uL3N0eWxlcy9ib290c3RyYXAubW9kdWxlLmNzc1wiO1xyXG5pbXBvcnQgdXRpbFN0eWxlcyBmcm9tIFwiLi4vc3R5bGVzL3V0aWxzLm1vZHVsZS5jc3NcIjtcclxuXHJcbmNsYXNzIENvbnRlbnQgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xyXG4gIGNvbnN0cnVjdG9yKCkge1xyXG4gICAgc3VwZXIoKTtcclxuICAgIHRoaXMuc3RhdGUgPSB7XHJcbiAgICAgIGlucHV0ZWRTdmc6IFwiXCIsXHJcbiAgICAgIC8vICc8c3ZnIHdpZHRoPVwiNTBcIiBoZWlnaHQ9XCI0NFwiIHZpZXdCb3g9XCIwIDAgNTAgNDRcIiBmaWxsPVwibm9uZVwiIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIj4gPHBhdGggZmlsbFJ1bGU9XCJldmVub2RkXCIgY2xpcFJ1bGU9XCJldmVub2RkXCIgZD1cIk0zMC4zMDY3IDEuMTI4NjlDMzEuOTY5NSAwLjQzNDc5IDMzLjc1MTggMC4wNzc2MzY3IDM1LjU1MTYgMC4wNzc2MzY3QzM3LjM1MTUgMC4wNzc2MzY3IDM5LjEzMzggMC40MzQ3OSA0MC43OTY2IDEuMTI4NjlDNDIuNDU5MSAxLjgyMjQ3IDQzLjk2OTYgMi44MzkyOCA0NS4yNDE4IDQuMTIxMDVDNDYuNTE0NSA1LjQwMjQgNDcuNTI0OCA2LjkyNDQgNDguMjEzNyA4LjU5ODc3QzQ4LjkwMjYgMTAuMjczNCA0OS4yNTczIDEyLjA2ODQgNDkuMjU3MyAxMy44ODEyQzQ5LjI1NzMgMTUuNjkzOSA0OC45MDI2IDE3LjQ4ODkgNDguMjEzNyAxOS4xNjM2QzQ3LjUyNDcgMjAuODM4MSA0Ni41MTUgMjIuMzU5NSA0NS4yNDIyIDIzLjY0MDlDNDUuMjQyMSAyMy42NDEgNDUuMjQyMyAyMy42NDA4IDQ1LjI0MjIgMjMuNjQwOUwyNi42MDc4IDQyLjQwODRDMjUuNzg0NiA0My4yMzc1IDI0LjQ0OTkgNDMuMjM3NSAyMy42MjY2IDQyLjQwODRMNC45OTIyMyAyMy42NDA5QzIuNDIyMTMgMjEuMDUyNSAwLjk3ODI3MSAxNy41NDE4IDAuOTc4MjcxIDEzLjg4MTJDMC45NzgyNzEgMTAuMjIwNSAyLjQyMjEzIDYuNzA5ODUgNC45OTIyMyA0LjEyMTRDNy41NjIzMiAxLjUzMjk1IDExLjA0ODEgMC4wNzg3NzIxIDE0LjY4MjggMC4wNzg3NzIxQzE4LjMxNzQgMC4wNzg3NzIxIDIxLjgwMzIgMS41MzI5NSAyNC4zNzMzIDQuMTIxNEwyNS4xMTcyIDQuODcwNkwyNS44NjA3IDQuMTIxNzVDMjUuODYwOSA0LjEyMTYzIDI1Ljg2MDYgNC4xMjE4NyAyNS44NjA3IDQuMTIxNzVDMjcuMTMzMSAyLjgzOTgyIDI4LjY0NDEgMS44MjI1MyAzMC4zMDY3IDEuMTI4NjlaTTM1LjU1MTYgNC4zMjM2OEMzNC4zMDU2IDQuMzIzNjggMzMuMDcxNyA0LjU3MDk0IDMxLjkyMDUgNS4wNTEzNEMzMC43Njk0IDUuNTMxNzMgMjkuNzIzNSA2LjIzNTg0IDI4Ljg0MjYgNy4xMjM0NUwyNi42MDc4IDkuMzc0MjFDMjUuNzg0NiAxMC4yMDMzIDI0LjQ0OTkgMTAuMjAzMyAyMy42MjY2IDkuMzc0MjFMMjEuMzkyMiA3LjEyMzgxQzE5LjYxMjggNS4zMzE2NCAxNy4xOTkzIDQuMzI0ODIgMTQuNjgyOCA0LjMyNDgyQzEyLjE2NjIgNC4zMjQ4MiA5Ljc1Mjc5IDUuMzMxNjQgNy45NzMzNCA3LjEyMzgxQzYuMTkzODkgOC45MTU5NyA1LjE5NDIgMTEuMzQ2NyA1LjE5NDIgMTMuODgxMkM1LjE5NDIgMTYuNDE1NyA2LjE5Mzg5IDE4Ljg0NjQgNy45NzMzNCAyMC42Mzg1TDI1LjExNzIgMzcuOTA0OEw0Mi4yNjExIDIwLjYzODVDNDMuMTQyNCAxOS43NTEzIDQzLjg0MTggMTguNjk3NiA0NC4zMTg4IDE3LjUzODJDNDQuNzk1OCAxNi4zNzg4IDQ1LjA0MTMgMTUuMTM2MSA0NS4wNDEzIDEzLjg4MTJDNDUuMDQxMyAxMi42MjYyIDQ0Ljc5NTggMTEuMzgzNSA0NC4zMTg4IDEwLjIyNDFDNDMuODQxOCA5LjA2NDczIDQzLjE0MjcgOC4wMTEzNSA0Mi4yNjE0IDcuMTI0MTZDNDEuMzgwNSA2LjIzNjU1IDQwLjMzMzkgNS41MzE3MyAzOS4xODI3IDUuMDUxMzRDMzguMDMxNiA0LjU3MDk0IDM2Ljc5NzcgNC4zMjM2OCAzNS41NTE2IDQuMzIzNjhaXCIgZmlsbD1cIiM2QzZCNkJcIi8+PC9zdmc+JyxcclxuICAgICAgY3NzQmFja2dyb3VuZEltYWdlOiBcIlwiLFxyXG4gICAgICBkZWNvZGVBbGw6IFwiXCIsXHJcbiAgICAgIGNvcHlTdWNjZXNzOiBcIlwiLFxyXG4gICAgICBiYWNrZ3JvdW5kSW1hZ2U6IFwiXCIsXHJcbiAgICAgIGNvcHlCdXR0b25UZXh0OiBcImNsaWNrIGhlcmUgdG8gY29weVwiLFxyXG4gICAgICBmaWxlQ29udGVudDogbnVsbCxcclxuICAgIH07XHJcbiAgfVxyXG5cclxuICBoYW5kbGVTdmdDaGFuZ2UgPSAoZSkgPT4ge1xyXG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgY29uc3QgdmFsdWUgPSBlLnRhcmdldC52YWx1ZTtcclxuICAgIHRoaXMuc2V0U3RhdGUoXHJcbiAgICAgIHtcclxuICAgICAgICBpbnB1dGVkU3ZnOiB2YWx1ZSxcclxuICAgICAgfSxcclxuICAgICAgKCkgPT4gdGhpcy5oYW5kbGVTdmdDaGFuZ2VzKHZhbHVlKVxyXG4gICAgKTtcclxuICB9O1xyXG4gIGhhbmRsZVN2Z0NoYW5nZXMgPSAodmFsdWUpID0+IHtcclxuICAgIGNvbnNvbGUubG9nKGBzdGF0ZTogJHt0aGlzLnN0YXRlLmlucHV0ZWRTdmd9LCB2YWx1ZTogJHt2YWx1ZX1gKTtcclxuICAgIC8vIGNvbnN0IGRlY29kZUFsbCA9IGRlY29kZVVSSUNvbXBvbmVudChlbmNvZGVBbGwpO1xyXG5cclxuICAgIGNvbnN0IHJlZ2V4ID1cclxuICAgICAgXCIoeG1sbnM9W1xcXFwnXFxcIl1odHRwcz86XFxcXC9cXFxcL3d3dy53My5vcmdcXFxcLzIwMDBcXFxcL3N2Z1tcXFxcJ1xcXCJdW15zXSlcIjtcclxuICAgIC8vIGNvbnNvbGUubG9nKHZhbHVlLm1hdGNoKHJlZ2V4KSk7XHJcblxyXG4gICAgaWYgKCF2YWx1ZS5tYXRjaChyZWdleCkpIHtcclxuICAgICAgLy9pZiBpbnB1dCBkbyBub3QgaGF2ZSB0aGUgeGxtbnNcclxuICAgICAgY29uc3QgeGxtbnMgPSBcIjxzdmcgeG1sbnM9J2h0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnJ1wiO1xyXG4gICAgICB2YWx1ZSA9IHZhbHVlLnJlcGxhY2UoLzxzdmcvZywgeGxtbnMpO1xyXG4gICAgfVxyXG4gICAgLy8gcmVwbGFjaW5nIGRvdWJsZSBxdW90ZXMgdG8gc2luZ2xlIHF1b3Rlc1xyXG4gICAgY29uc3QgcmVwbGFjZWRRdW90ZXMgPSB2YWx1ZVxyXG4gICAgICAucmVwbGFjZSgvW1xcclxcbiUjKCk8Pj9bXFxcXFxcXV5ge3x9XS9nLCBlbmNvZGVVUklDb21wb25lbnQpXHJcbiAgICAgIC5yZXBsYWNlKC9cIi9nLCBgJ2ApO1xyXG4gICAgY29uc3QgYmFja2dyb3VuZEltYWdlID0gYGRhdGE6aW1hZ2Uvc3ZnK3htbCwke3JlcGxhY2VkUXVvdGVzfWA7XHJcbiAgICBpZiAocmVwbGFjZWRRdW90ZXMpIHtcclxuICAgICAgdmFyIGNzc0JhY2tncm91bmRJbWFnZSA9IGBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXCJkYXRhOmltYWdlL3N2Zyt4bWwsJHtyZXBsYWNlZFF1b3Rlc31cIilgO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgdmFyIGNzc0JhY2tncm91bmRJbWFnZSA9IGBgO1xyXG4gICAgfVxyXG4gICAgY29uc29sZS5sb2coY3NzQmFja2dyb3VuZEltYWdlKTtcclxuICAgIHRoaXMuc2V0U3RhdGUoe1xyXG4gICAgICBjc3NCYWNrZ3JvdW5kSW1hZ2UsXHJcbiAgICAgIGJhY2tncm91bmRJbWFnZSxcclxuICAgIH0pO1xyXG4gIH07XHJcblxyXG4gIGNvcHlUb0NsaXBCb2FyZCA9IGFzeW5jICgpID0+IHtcclxuICAgIHRyeSB7XHJcbiAgICAgIGF3YWl0IG5hdmlnYXRvci5jbGlwYm9hcmQud3JpdGVUZXh0KHRoaXMuc3RhdGUuY3NzQmFja2dyb3VuZEltYWdlKTtcclxuICAgICAgdGhpcy5zZXRTdGF0ZSh7IGNvcHlCdXR0b25UZXh0OiBcIkNvcGllZCFcIiB9KTtcclxuICAgIH0gY2F0Y2ggKGVycikge1xyXG4gICAgICB0aGlzLnNldFN0YXRlKHsgY29weUJ1dHRvblRleHQ6IFwiRmFpbGVkIHRvIGNvcHkhXCIgfSk7XHJcbiAgICB9XHJcbiAgICBpZiAodGhpcy5zdGF0ZS5jb3B5QnV0dG9uVGV4dCAhPT0gJ2NsaWNrIGhlcmUgdG8gY29weVwiJykge1xyXG4gICAgICBzZXRUaW1lb3V0KCgpID0+IHtcclxuICAgICAgICB0aGlzLnNldFN0YXRlKCgpID0+ICh7IGNvcHlCdXR0b25UZXh0OiBcImNsaWNrIGhlcmUgdG8gY29weVwiIH0pKTtcclxuICAgICAgfSwgNTAwMCk7XHJcbiAgICB9XHJcbiAgfTtcclxuICBoYW5kbGVGb2N1cyA9IChldmVudCkgPT4gZXZlbnQudGFyZ2V0LnNlbGVjdCgpO1xyXG5cclxuICBoYW5kbGVGaWxlSW5wdXQgPSAoZSkgPT4ge1xyXG4gICAgLy8gaGFuZGxlIHZhbGlkYXRpb25zXHJcbiAgICBjb25zdCBmaWxlID0gZS50YXJnZXQuZmlsZXNbMF07XHJcbiAgICBpZiAoIWZpbGUpIHJldHVybjtcclxuICAgIHRoaXMuc2V0U3RhdGUoeyBzZWxlY3RlZEZpbGU6IGZpbGUgfSk7XHJcblxyXG4gICAgY29uc3QgcmVhZGVyID0gbmV3IEZpbGVSZWFkZXIoKTtcclxuICAgIHJlYWRlci5vbmxvYWQgPSB0aGlzLmhhbmRsZUZpbGVMb2FkO1xyXG4gICAgcmVhZGVyLnJlYWRBc1RleHQoZmlsZSk7XHJcbiAgfTtcclxuXHJcbiAgaGFuZGxlRmlsZUxvYWQgPSAoZXZlbnQpID0+IHtcclxuICAgIGNvbnNvbGUubG9nKGV2ZW50LnRhcmdldC5yZXN1bHQpO1xyXG4gICAgLy8gICBnZXR0aW5nIHRoZSBzdmcgZnJvbSAgdXBsb2FkZWQgaW1hZ2VcclxuICAgIGNvbnN0IGZpbGVDb250ZW50ID0gZXZlbnQudGFyZ2V0LnJlc3VsdDtcclxuICAgIHRoaXMuc2V0U3RhdGUoeyBmaWxlQ29udGVudDogZmlsZUNvbnRlbnQsIGlucHV0ZWRTdmc6IGZpbGVDb250ZW50IH0sICgpID0+XHJcbiAgICAgIHRoaXMuaGFuZGxlU3ZnQ2hhbmdlcyhmaWxlQ29udGVudClcclxuICAgICk7XHJcbiAgICAvLyB0aGlzLnJlZnMudGVzdC5pbm5lckhUTUwgPSBmaWxlQ29udGVudDtcclxuICAgIC8vIHRoaXMuaGFuZGxlU3ZnQ2hhbmdlcztcclxuICAgIGNvbnNvbGUubG9nKHRoaXMuc3RhdGUuaW5wdXRlZFN2Zyk7XHJcbiAgfTtcclxuXHJcbiAgcmVuZGVyKCkge1xyXG4gICAgY29uc3Qge1xyXG4gICAgICBpbnB1dGVkU3ZnLFxyXG4gICAgICBjc3NCYWNrZ3JvdW5kSW1hZ2UsXHJcbiAgICAgIGRlY29kZUFsbCxcclxuICAgICAgYmFja2dyb3VuZEltYWdlLFxyXG4gICAgICBjb3B5QnV0dG9uVGV4dCxcclxuICAgICAgZmlsZUNvbnRlbnQsXHJcbiAgICB9ID0gdGhpcy5zdGF0ZTtcclxuICAgIGNvbnN0IHsgaXNMaWdodCwgc2V0SXNMaWdodCB9ID0gdGhpcy5wcm9wcztcclxuICAgIC8vIGNvbnNvbGUubG9nKHRoaXMucHJvcHMpO1xyXG4gICAgcmV0dXJuIChcclxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJBcHAgY29udGFpbmVyXCI+XHJcbiAgICAgICAgey8qIDxoMyBjb250ZW50RWRpdGFibGU9XCJ0cnVlXCI+U1ZHIHRvIEJBQ0tHUk9VTkQgSU1BR0U8L2gzPiAqL31cclxuICAgICAgICA8ZGl2XHJcbiAgICAgICAgICBjbGFzc05hbWU9XCJjaGFuZ2VCYWNrZ3JvdW5kXCJcclxuICAgICAgICAgIHN0eWxlPXt7XHJcbiAgICAgICAgICAgIHdpZHRoOiA1MCxcclxuICAgICAgICAgICAgaGVpZ2h0OiA1MCxcclxuICAgICAgICAgICAgYm9yZGVyUmFkaXVzOiAxNSxcclxuICAgICAgICAgICAgdG9wOiBcIjEyXCIsXHJcbiAgICAgICAgICAgIGxlZnQ6IFwiMTJcIixcclxuICAgICAgICAgICAgY3Vyc29yOiBcImZpeGVkXCIsXHJcbiAgICAgICAgICAgIHBvc2l0aW9uOiBcImFic29sdXRlXCIsXHJcbiAgICAgICAgICAgIGRpc3BsYXk6IFwiZmxleFwiLFxyXG4gICAgICAgICAgICBhbGlnbkl0ZW1zOiBcImNlbnRlclwiLFxyXG4gICAgICAgICAgICBmb250U2l6ZTogYDEuNXJlbWAsXHJcbiAgICAgICAgICAgIGp1c3RpZnlDb250ZW50OiBcImNlbnRlclwiLFxyXG4gICAgICAgICAgICBiYWNrZ3JvdW5kQ29sb3I6IGAke2lzTGlnaHQgPyBcImJsYWNrXCIgOiBcIndoaXRlXCJ9YCxcclxuICAgICAgICAgIH19XHJcbiAgICAgICAgICBvbkNsaWNrPXsoKSA9PiBzZXRJc0xpZ2h0KCFpc0xpZ2h0KX1cclxuICAgICAgICA+XHJcbiAgICAgICAgICB7aXNMaWdodCA/IFwi8J+Mm1wiIDogXCLwn4yeXCJ9XHJcbiAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgIDxoMyBjbGFzc05hbWU9XCJ0ZXh0LWNlbnRlclwiPlxyXG4gICAgICAgICAgRW5jb2RlIHN2ZyBpbWFnZSB0byB1c2UgZm9yIENTUyBiYWNrZ3JvdW5kXHJcbiAgICAgICAgPC9oMz5cclxuICAgICAgICA8YnIgLz5cclxuXHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJcIj5cclxuICAgICAgICAgIDxsYWJlbCBodG1sRm9yPVwiZXhhbXBsZUZvcm1Db250cm9sRmlsZVwiPlxyXG4gICAgICAgICAgICBVcGxvYWQgeW91ciBzdmcgZmlsZSBvciBwYXN0ZSB0aGUgY29kZSBiZWxvd1xyXG4gICAgICAgICAgPC9sYWJlbD5cclxuICAgICAgICAgIDxpbnB1dFxyXG4gICAgICAgICAgICB0eXBlPVwiZmlsZVwiXHJcbiAgICAgICAgICAgIGFjY2VwdD1cIi5zdmdcIlxyXG4gICAgICAgICAgICAvLyB2YWx1ZT17c2VsZWN0ZWRGaWxlfVxyXG4gICAgICAgICAgICBvbkNoYW5nZT17dGhpcy5oYW5kbGVGaWxlSW5wdXR9XHJcbiAgICAgICAgICAgIGNsYXNzTmFtZT17YCR7dXRpbFN0eWxlc1tcImZvcm0tY29udHJvbC1maWxlXCJdfSBmb3JtLWNvbnRyb2wtZmlsZWB9XHJcbiAgICAgICAgICAgIGlkPVwiZXhhbXBsZUZvcm1Db250cm9sRmlsZVwiXHJcbiAgICAgICAgICAvPlxyXG4gICAgICAgICAgPHN0eWxlIGpzeCBnbG9iYWw+e2BcclxuICAgICAgICAgICAgYm9keSB7XHJcbiAgICAgICAgICAgICAgYmFja2dyb3VuZDogJHtpc0xpZ2h0ID8gXCJ3aGl0ZVwiIDogXCJibGFja1wifTtcclxuICAgICAgICAgICAgICBjb2xvcjogJHtpc0xpZ2h0ID8gXCJibGFja1wiIDogXCJ3aGl0ZVwifTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAuZm9ybS1jb250cm9sLWZpbGUge1xyXG4gICAgICAgICAgICAgIGJhY2tncm91bmQ6ICR7aXNMaWdodCA/IFwid2hpdGVcIiA6IFwiYmxhY2tcIn07XHJcbiAgICAgICAgICAgICAgY29sb3I6ICR7aXNMaWdodCA/IFwiYmxhY2tcIiA6IFwid2hpdGVcIn07XHJcbiAgICAgICAgICAgICAgd2lkdGg6IG1pbi1jb250ZW50O1xyXG4gICAgICAgICAgICAgIGZvbnQtc2l6ZTogMTRweDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAuZm9ybS1jb250cm9sLWZpbGU6Oi13ZWJraXQtZmlsZS11cGxvYWQtYnV0dG9uIHtcclxuICAgICAgICAgICAgICBjb2xvcjogJHtpc0xpZ2h0ID8gXCJ3aGl0ZVwiIDogXCJibGFja1wifTtcclxuICAgICAgICAgICAgICBiYWNrZ3JvdW5kOiAke2lzTGlnaHQgPyBcImJsYWNrXCIgOiBcIndoaXRlXCJ9O1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICBgfTwvc3R5bGU+XHJcbiAgICAgICAgICB7LyogPHByZSBpZD1cImZpbGVDb250ZW50XCI+e2ZpbGVDb250ZW50fTwvcHJlPiAqL31cclxuICAgICAgICAgIHsvKiA8ZGl2IHJlZj1cInRlc3RcIj57ZmlsZUNvbnRlbnR9PC9kaXY+ICovfVxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDxoNT5zdmcgY29kZTo8L2g1PlxyXG4gICAgICAgIDx0ZXh0YXJlYVxyXG4gICAgICAgICAgY2xhc3NOYW1lPVwidy0xMDAgcC0yIGZvcm0tY29udHJvbFwiXHJcbiAgICAgICAgICB0eXBlPVwidGV4dFwiXHJcbiAgICAgICAgICByb3dzPVwiMTBcIlxyXG4gICAgICAgICAgdmFsdWU9e2lucHV0ZWRTdmd9XHJcbiAgICAgICAgICBvbkNoYW5nZT17dGhpcy5oYW5kbGVTdmdDaGFuZ2V9XHJcbiAgICAgICAgICBvbkZvY3VzPXt0aGlzLmhhbmRsZUZvY3VzfVxyXG4gICAgICAgICAgcGxhY2Vob2xkZXI9XCJQYXN0ZSBTVkcgaGVyZVwiXHJcbiAgICAgICAgLz5cclxuXHJcbiAgICAgICAgPGJyIC8+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9e2Bwb3NpdGlvbi1yZWxhdGl2ZSBkLWZsZXggZmxleC1jb2x1bW4gZmxleC13cmFwYH0+XHJcbiAgICAgICAgICB7aW5wdXRlZFN2ZyA/IChcclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e2Bwb3NpdGlvbi1yZWxhdGl2ZSBgfT5cclxuICAgICAgICAgICAgICA8aDU+QmFja2dyb3VuZCBDU1M6PC9oNT5cclxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17YHBvc2l0aW9uLXJlbGF0aXZlICR7dXRpbFN0eWxlcy50ZXh0QXJlYUNvcHl9YH0+XHJcbiAgICAgICAgICAgICAgICA8aW5wdXRcclxuICAgICAgICAgICAgICAgICAgcmVhZE9ubHlcclxuICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtgdy0xMDAgZm9ybS1jb250cm9sYH1cclxuICAgICAgICAgICAgICAgICAgdHlwZT1cInRleHRcIlxyXG4gICAgICAgICAgICAgICAgICAvLyAgIHJvd3M9XCI5XCJcclxuICAgICAgICAgICAgICAgICAgdmFsdWU9e2Nzc0JhY2tncm91bmRJbWFnZX1cclxuICAgICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJDb3B5IENTUyBiYWNrZ3JvdW5nIGltYWdlIGhlcmVcIlxyXG4gICAgICAgICAgICAgICAgLz5cclxuXHJcbiAgICAgICAgICAgICAgICB7Y3NzQmFja2dyb3VuZEltYWdlID8gKFxyXG4gICAgICAgICAgICAgICAgICA8YnV0dG9uXHJcbiAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtgYnRuIGJ0bi1wcmltYXJ5IHBvc2l0aW9uLWFic29sdXRlICR7dXRpbFN0eWxlcy5idXR0b259YH1cclxuICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXt0aGlzLmNvcHlUb0NsaXBCb2FyZH1cclxuICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgIHtjb3B5QnV0dG9uVGV4dH1cclxuICAgICAgICAgICAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgICAgICAgICApIDogbnVsbH1cclxuICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICApIDogbnVsbH1cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiXCI+XHJcbiAgICAgICAgICAgIDxoNSBjbGFzc05hbWU9e2BgfT5QcmV2aWV3OjwvaDU+XHJcbiAgICAgICAgICAgIDxkaXZcclxuICAgICAgICAgICAgICBjbGFzc05hbWU9XCJ3LTEwMFwiXHJcbiAgICAgICAgICAgICAgc3R5bGU9e3tcclxuICAgICAgICAgICAgICAgIGhlaWdodDogMjU0LFxyXG4gICAgICAgICAgICAgICAgLy8gd2lkdGg6IDI1NixcclxuICAgICAgICAgICAgICAgIGJhY2tncm91bmRJbWFnZTogYHVybChcIiR7YmFja2dyb3VuZEltYWdlfVwiKWAsXHJcbiAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kUG9zaXRpb246IFwiY2VudGVyXCIsXHJcbiAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kUmVwZWF0OiBcIm5vLXJlcGVhdFwiLFxyXG4gICAgICAgICAgICAgICAgYmFja2dyb3VuZENvbG9yOiBcIndoaXRlc21va2VcIixcclxuICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAge2RlY29kZUFsbH1cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgPGJyIC8+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgKTtcclxuICB9XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IENvbnRlbnQ7XHJcbiJdfQ== */\n/*@ sourceURL=D:\\\\Desktop\\\\urlencoder\\\\components\\\\content.js */"))), __jsx("h5", {
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

/***/ }),

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Home; });
/* harmony import */ var _babel_runtime_helpers_esm_objectDestructuringEmpty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/objectDestructuringEmpty */ "./node_modules/@babel/runtime/helpers/esm/objectDestructuringEmpty.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/head */ "./node_modules/next/dist/next-server/lib/head.js");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _components_layout__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/layout */ "./components/layout.js");
/* harmony import */ var _styles_utils_module_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../styles/utils.module.css */ "./styles/utils.module.css");
/* harmony import */ var _styles_utils_module_css__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_styles_utils_module_css__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _components_content__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../components/content */ "./components/content.js");


var _jsxFileName = "D:\\Desktop\\urlencoder\\pages\\index.js",
    _s = $RefreshSig$();


var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;





function Home(_ref) {
  _s();

  Object(_babel_runtime_helpers_esm_objectDestructuringEmpty__WEBPACK_IMPORTED_MODULE_0__["default"])(_ref);

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(true),
      isLight = _useState[0],
      setIsLight = _useState[1];

  Object(react__WEBPACK_IMPORTED_MODULE_1__["useEffect"])(function () {
    var bgGetLight = localStorage.getItem("bgLightTheme");
    setIsLight(bgGetLight === "true");
    console.log(bgGetLight, isLight);
  }, []);
  Object(react__WEBPACK_IMPORTED_MODULE_1__["useEffect"])(function () {
    localStorage.setItem("bgLightTheme", isLight);
  }, [isLight]);
  console.log(isLight);
  return __jsx(_components_layout__WEBPACK_IMPORTED_MODULE_3__["default"], {
    home: true,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 22,
      columnNumber: 5
    }
  }, __jsx(next_head__WEBPACK_IMPORTED_MODULE_2___default.a, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 23,
      columnNumber: 7
    }
  }, __jsx("title", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 24,
      columnNumber: 9
    }
  }, _components_layout__WEBPACK_IMPORTED_MODULE_3__["siteTitle"])), __jsx(_components_content__WEBPACK_IMPORTED_MODULE_5__["default"], {
    isLight: isLight,
    setIsLight: setIsLight,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 26,
      columnNumber: 7
    }
  }));
}

_s(Home, "uPq3Y/8NX6IeeniBAn0B4xrFkdE=");

_c = Home;

var _c;

$RefreshReg$(_c, "Home");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9jb250ZW50LmpzIiwid2VicGFjazovL19OX0UvLi9wYWdlcy9pbmRleC5qcyJdLCJuYW1lcyI6WyJDb250ZW50IiwiZSIsInByZXZlbnREZWZhdWx0IiwidmFsdWUiLCJ0YXJnZXQiLCJzZXRTdGF0ZSIsImlucHV0ZWRTdmciLCJoYW5kbGVTdmdDaGFuZ2VzIiwiY29uc29sZSIsImxvZyIsInN0YXRlIiwicmVnZXgiLCJtYXRjaCIsInhsbW5zIiwicmVwbGFjZSIsInJlcGxhY2VkUXVvdGVzIiwiZW5jb2RlVVJJQ29tcG9uZW50IiwiYmFja2dyb3VuZEltYWdlIiwiY3NzQmFja2dyb3VuZEltYWdlIiwibmF2aWdhdG9yIiwiY2xpcGJvYXJkIiwid3JpdGVUZXh0IiwiY29weUJ1dHRvblRleHQiLCJzZXRUaW1lb3V0IiwiZXZlbnQiLCJzZWxlY3QiLCJmaWxlIiwiZmlsZXMiLCJzZWxlY3RlZEZpbGUiLCJyZWFkZXIiLCJGaWxlUmVhZGVyIiwib25sb2FkIiwiaGFuZGxlRmlsZUxvYWQiLCJyZWFkQXNUZXh0IiwicmVzdWx0IiwiZmlsZUNvbnRlbnQiLCJkZWNvZGVBbGwiLCJjb3B5U3VjY2VzcyIsInByb3BzIiwiaXNMaWdodCIsInNldElzTGlnaHQiLCJ3aWR0aCIsImhlaWdodCIsImJvcmRlclJhZGl1cyIsInRvcCIsImxlZnQiLCJjdXJzb3IiLCJwb3NpdGlvbiIsImRpc3BsYXkiLCJhbGlnbkl0ZW1zIiwiZm9udFNpemUiLCJqdXN0aWZ5Q29udGVudCIsImJhY2tncm91bmRDb2xvciIsImhhbmRsZUZpbGVJbnB1dCIsInV0aWxTdHlsZXMiLCJoYW5kbGVTdmdDaGFuZ2UiLCJoYW5kbGVGb2N1cyIsInRleHRBcmVhQ29weSIsImJ1dHRvbiIsImNvcHlUb0NsaXBCb2FyZCIsImJhY2tncm91bmRQb3NpdGlvbiIsImJhY2tncm91bmRSZXBlYXQiLCJSZWFjdCIsIkNvbXBvbmVudCIsIkhvbWUiLCJ1c2VTdGF0ZSIsInVzZUVmZmVjdCIsImJnR2V0TGlnaHQiLCJsb2NhbFN0b3JhZ2UiLCJnZXRJdGVtIiwic2V0SXRlbSIsInNpdGVUaXRsZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Q0FDQTs7QUFDQTs7SUFFTUEsTzs7Ozs7QUFDSixxQkFBYztBQUFBOztBQUFBOztBQUNaOztBQURZLDBOQWNJLFVBQUNDLENBQUQsRUFBTztBQUN2QkEsT0FBQyxDQUFDQyxjQUFGO0FBQ0EsVUFBTUMsS0FBSyxHQUFHRixDQUFDLENBQUNHLE1BQUYsQ0FBU0QsS0FBdkI7O0FBQ0EsWUFBS0UsUUFBTCxDQUNFO0FBQ0VDLGtCQUFVLEVBQUVIO0FBRGQsT0FERixFQUlFO0FBQUEsZUFBTSxNQUFLSSxnQkFBTCxDQUFzQkosS0FBdEIsQ0FBTjtBQUFBLE9BSkY7QUFNRCxLQXZCYTs7QUFBQSwyTkF3QkssVUFBQ0EsS0FBRCxFQUFXO0FBQzVCSyxhQUFPLENBQUNDLEdBQVIsa0JBQXNCLE1BQUtDLEtBQUwsQ0FBV0osVUFBakMsc0JBQXVESCxLQUF2RCxHQUQ0QixDQUU1Qjs7QUFFQSxVQUFNUSxLQUFLLEdBQ1QsZ0VBREYsQ0FKNEIsQ0FNNUI7O0FBRUEsVUFBSSxDQUFDUixLQUFLLENBQUNTLEtBQU4sQ0FBWUQsS0FBWixDQUFMLEVBQXlCO0FBQ3ZCO0FBQ0EsWUFBTUUsS0FBSyxHQUFHLHlDQUFkO0FBQ0FWLGFBQUssR0FBR0EsS0FBSyxDQUFDVyxPQUFOLENBQWMsT0FBZCxFQUF1QkQsS0FBdkIsQ0FBUjtBQUNELE9BWjJCLENBYTVCOzs7QUFDQSxVQUFNRSxjQUFjLEdBQUdaLEtBQUssQ0FDekJXLE9BRG9CLENBQ1osMEJBRFksRUFDZ0JFLGtCQURoQixFQUVwQkYsT0FGb0IsQ0FFWixJQUZZLE1BQXZCO0FBR0EsVUFBTUcsZUFBZSxnQ0FBeUJGLGNBQXpCLENBQXJCOztBQUNBLFVBQUlBLGNBQUosRUFBb0I7QUFDbEIsWUFBSUcsa0JBQWtCLHdEQUFn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QjtBQUFBOztBQUFBOztBQUFBLGtCQUNEQyxzREFBUSxDQUFDLElBQUQsQ0FEUDtBQUFBLE1BQ3hCMUIsT0FEd0I7QUFBQSxNQUNmQyxVQURlOztBQUcvQjBCLHlEQUFTLENBQUMsWUFBTTtBQUNkLFFBQU1DLFVBQVUsR0FBR0MsWUFBWSxDQUFDQyxPQUFiLENBQXFCLGNBQXJCLENBQW5CO0FBQ0E3QixjQUFVLENBQUMyQixVQUFVLEtBQUssTUFBaEIsQ0FBVjtBQUNBM0QsV0FBTyxDQUFDQyxHQUFSLENBQVkwRCxVQUFaLEVBQXdCNUIsT0FBeEI7QUFDRCxHQUpRLEVBSU4sRUFKTSxDQUFUO0FBTUEyQix5REFBUyxDQUFDLFlBQU07QUFDZEUsZ0JBQVksQ0FBQ0UsT0FBYixDQUFxQixjQUFyQixFQUFxQy9CLE9BQXJDO0FBQ0QsR0FGUSxFQUVOLENBQUNBLE9BQUQsQ0FGTSxDQUFUO0FBR0EvQixTQUFPLENBQUNDLEdBQVIsQ0FBWThCLE9BQVo7QUFFQSxTQUNFLE1BQUMsMERBQUQ7QUFBUSxRQUFJLE1BQVo7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFLE1BQUMsZ0RBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FBUWdDLDREQUFSLENBREYsQ0FERixFQUlFLE1BQUMsMkRBQUQ7QUFBUyxXQUFPLEVBQUVoQyxPQUFsQjtBQUEyQixjQUFVLEVBQUVDLFVBQXZDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFKRixDQURGO0FBUUQ7O0dBdEJ1QndCLEk7O0tBQUFBLEkiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvaW5kZXguYzE4NGRlYjcyYWMxY2YwZWVhOWEuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBjeCBmcm9tIFwiY2xhc3NuYW1lc1wiO1xyXG4vLyBpbXBvcnQgZ2xvYmFsU3R5bGVzIGZyb20gXCIuLi9zdHlsZXMvYm9vdHN0cmFwLm1vZHVsZS5jc3NcIjtcclxuaW1wb3J0IHV0aWxTdHlsZXMgZnJvbSBcIi4uL3N0eWxlcy91dGlscy5tb2R1bGUuY3NzXCI7XHJcblxyXG5jbGFzcyBDb250ZW50IGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcclxuICBjb25zdHJ1Y3RvcigpIHtcclxuICAgIHN1cGVyKCk7XHJcbiAgICB0aGlzLnN0YXRlID0ge1xyXG4gICAgICBpbnB1dGVkU3ZnOiBcIlwiLFxyXG4gICAgICAvLyAnPHN2ZyB3aWR0aD1cIjUwXCIgaGVpZ2h0PVwiNDRcIiB2aWV3Qm94PVwiMCAwIDUwIDQ0XCIgZmlsbD1cIm5vbmVcIiB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCI+IDxwYXRoIGZpbGxSdWxlPVwiZXZlbm9kZFwiIGNsaXBSdWxlPVwiZXZlbm9kZFwiIGQ9XCJNMzAuMzA2NyAxLjEyODY5QzMxLjk2OTUgMC40MzQ3OSAzMy43NTE4IDAuMDc3NjM2NyAzNS41NTE2IDAuMDc3NjM2N0MzNy4zNTE1IDAuMDc3NjM2NyAzOS4xMzM4IDAuNDM0NzkgNDAuNzk2NiAxLjEyODY5QzQyLjQ1OTEgMS44MjI0NyA0My45Njk2IDIuODM5MjggNDUuMjQxOCA0LjEyMTA1QzQ2LjUxNDUgNS40MDI0IDQ3LjUyNDggNi45MjQ0IDQ4LjIxMzcgOC41OTg3N0M0OC45MDI2IDEwLjI3MzQgNDkuMjU3MyAxMi4wNjg0IDQ5LjI1NzMgMTMuODgxMkM0OS4yNTczIDE1LjY5MzkgNDguOTAyNiAxNy40ODg5IDQ4LjIxMzcgMTkuMTYzNkM0Ny41MjQ3IDIwLjgzODEgNDYuNTE1IDIyLjM1OTUgNDUuMjQyMiAyMy42NDA5QzQ1LjI0MjEgMjMuNjQxIDQ1LjI0MjMgMjMuNjQwOCA0NS4yNDIyIDIzLjY0MDlMMjYuNjA3OCA0Mi40MDg0QzI1Ljc4NDYgNDMuMjM3NSAyNC40NDk5IDQzLjIzNzUgMjMuNjI2NiA0Mi40MDg0TDQuOTkyMjMgMjMuNjQwOUMyLjQyMjEzIDIxLjA1MjUgMC45NzgyNzEgMTcuNTQxOCAwLjk3ODI3MSAxMy44ODEyQzAuOTc4MjcxIDEwLjIyMDUgMi40MjIxMyA2LjcwOTg1IDQuOTkyMjMgNC4xMjE0QzcuNTYyMzIgMS41MzI5NSAxMS4wNDgxIDAuMDc4NzcyMSAxNC42ODI4IDAuMDc4NzcyMUMxOC4zMTc0IDAuMDc4NzcyMSAyMS44MDMyIDEuNTMyOTUgMjQuMzczMyA0LjEyMTRMMjUuMTE3MiA0Ljg3MDZMMjUuODYwNyA0LjEyMTc1QzI1Ljg2MDkgNC4xMjE2MyAyNS44NjA2IDQuMTIxODcgMjUuODYwNyA0LjEyMTc1QzI3LjEzMzEgMi44Mzk4MiAyOC42NDQxIDEuODIyNTMgMzAuMzA2NyAxLjEyODY5Wk0zNS41NTE2IDQuMzIzNjhDMzQuMzA1NiA0LjMyMzY4IDMzLjA3MTcgNC41NzA5NCAzMS45MjA1IDUuMDUxMzRDMzAuNzY5NCA1LjUzMTczIDI5LjcyMzUgNi4yMzU4NCAyOC44NDI2IDcuMTIzNDVMMjYuNjA3OCA5LjM3NDIxQzI1Ljc4NDYgMTAuMjAzMyAyNC40NDk5IDEwLjIwMzMgMjMuNjI2NiA5LjM3NDIxTDIxLjM5MjIgNy4xMjM4MUMxOS42MTI4IDUuMzMxNjQgMTcuMTk5MyA0LjMyNDgyIDE0LjY4MjggNC4zMjQ4MkMxMi4xNjYyIDQuMzI0ODIgOS43NTI3OSA1LjMzMTY0IDcuOTczMzQgNy4xMjM4MUM2LjE5Mzg5IDguOTE1OTcgNS4xOTQyIDExLjM0NjcgNS4xOTQyIDEzLjg4MTJDNS4xOTQyIDE2LjQxNTcgNi4xOTM4OSAxOC44NDY0IDcuOTczMzQgMjAuNjM4NUwyNS4xMTcyIDM3LjkwNDhMNDIuMjYxMSAyMC42Mzg1QzQzLjE0MjQgMTkuNzUxMyA0My44NDE4IDE4LjY5NzYgNDQuMzE4OCAxNy41MzgyQzQ0Ljc5NTggMTYuMzc4OCA0NS4wNDEzIDE1LjEzNjEgNDUuMDQxMyAxMy44ODEyQzQ1LjA0MTMgMTIuNjI2MiA0NC43OTU4IDExLjM4MzUgNDQuMzE4OCAxMC4yMjQxQzQzLjg0MTggOS4wNjQ3MyA0My4xNDI3IDguMDExMzUgNDIuMjYxNCA3LjEyNDE2QzQxLjM4MDUgNi4yMzY1NSA0MC4zMzM5IDUuNTMxNzMgMzkuMTgyNyA1LjA1MTM0QzM4LjAzMTYgNC41NzA5NCAzNi43OTc3IDQuMzIzNjggMzUuNTUxNiA0LjMyMzY4WlwiIGZpbGw9XCIjNkM2QjZCXCIvPjwvc3ZnPicsXHJcbiAgICAgIGNzc0JhY2tncm91bmRJbWFnZTogXCJcIixcclxuICAgICAgZGVjb2RlQWxsOiBcIlwiLFxyXG4gICAgICBjb3B5U3VjY2VzczogXCJcIixcclxuICAgICAgYmFja2dyb3VuZEltYWdlOiBcIlwiLFxyXG4gICAgICBjb3B5QnV0dG9uVGV4dDogXCJjbGljayBoZXJlIHRvIGNvcHlcIixcclxuICAgICAgZmlsZUNvbnRlbnQ6IG51bGwsXHJcbiAgICB9O1xyXG4gIH1cclxuXHJcbiAgaGFuZGxlU3ZnQ2hhbmdlID0gKGUpID0+IHtcclxuICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuICAgIGNvbnN0IHZhbHVlID0gZS50YXJnZXQudmFsdWU7XHJcbiAgICB0aGlzLnNldFN0YXRlKFxyXG4gICAgICB7XHJcbiAgICAgICAgaW5wdXRlZFN2ZzogdmFsdWUsXHJcbiAgICAgIH0sXHJcbiAgICAgICgpID0+IHRoaXMuaGFuZGxlU3ZnQ2hhbmdlcyh2YWx1ZSlcclxuICAgICk7XHJcbiAgfTtcclxuICBoYW5kbGVTdmdDaGFuZ2VzID0gKHZhbHVlKSA9PiB7XHJcbiAgICBjb25zb2xlLmxvZyhgc3RhdGU6ICR7dGhpcy5zdGF0ZS5pbnB1dGVkU3ZnfSwgdmFsdWU6ICR7dmFsdWV9YCk7XHJcbiAgICAvLyBjb25zdCBkZWNvZGVBbGwgPSBkZWNvZGVVUklDb21wb25lbnQoZW5jb2RlQWxsKTtcclxuXHJcbiAgICBjb25zdCByZWdleCA9XHJcbiAgICAgIFwiKHhtbG5zPVtcXFxcJ1xcXCJdaHR0cHM/OlxcXFwvXFxcXC93d3cudzMub3JnXFxcXC8yMDAwXFxcXC9zdmdbXFxcXCdcXFwiXVtec10pXCI7XHJcbiAgICAvLyBjb25zb2xlLmxvZyh2YWx1ZS5tYXRjaChyZWdleCkpO1xyXG5cclxuICAgIGlmICghdmFsdWUubWF0Y2gocmVnZXgpKSB7XHJcbiAgICAgIC8vaWYgaW5wdXQgZG8gbm90IGhhdmUgdGhlIHhsbW5zXHJcbiAgICAgIGNvbnN0IHhsbW5zID0gXCI8c3ZnIHhtbG5zPSdodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZydcIjtcclxuICAgICAgdmFsdWUgPSB2YWx1ZS5yZXBsYWNlKC88c3ZnL2csIHhsbW5zKTtcclxuICAgIH1cclxuICAgIC8vIHJlcGxhY2luZyBkb3VibGUgcXVvdGVzIHRvIHNpbmdsZSBxdW90ZXNcclxuICAgIGNvbnN0IHJlcGxhY2VkUXVvdGVzID0gdmFsdWVcclxuICAgICAgLnJlcGxhY2UoL1tcXHJcXG4lIygpPD4/W1xcXFxcXF1eYHt8fV0vZywgZW5jb2RlVVJJQ29tcG9uZW50KVxyXG4gICAgICAucmVwbGFjZSgvXCIvZywgYCdgKTtcclxuICAgIGNvbnN0IGJhY2tncm91bmRJbWFnZSA9IGBkYXRhOmltYWdlL3N2Zyt4bWwsJHtyZXBsYWNlZFF1b3Rlc31gO1xyXG4gICAgaWYgKHJlcGxhY2VkUXVvdGVzKSB7XHJcbiAgICAgIHZhciBjc3NCYWNrZ3JvdW5kSW1hZ2UgPSBgYmFja2dyb3VuZC1pbWFnZTogdXJsKFwiZGF0YTppbWFnZS9zdmcreG1sLCR7cmVwbGFjZWRRdW90ZXN9XCIpYDtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIHZhciBjc3NCYWNrZ3JvdW5kSW1hZ2UgPSBgYDtcclxuICAgIH1cclxuICAgIGNvbnNvbGUubG9nKGNzc0JhY2tncm91bmRJbWFnZSk7XHJcbiAgICB0aGlzLnNldFN0YXRlKHtcclxuICAgICAgY3NzQmFja2dyb3VuZEltYWdlLFxyXG4gICAgICBiYWNrZ3JvdW5kSW1hZ2UsXHJcbiAgICB9KTtcclxuICB9O1xyXG5cclxuICBjb3B5VG9DbGlwQm9hcmQgPSBhc3luYyAoKSA9PiB7XHJcbiAgICB0cnkge1xyXG4gICAgICBhd2FpdCBuYXZpZ2F0b3IuY2xpcGJvYXJkLndyaXRlVGV4dCh0aGlzLnN0YXRlLmNzc0JhY2tncm91bmRJbWFnZSk7XHJcbiAgICAgIHRoaXMuc2V0U3RhdGUoeyBjb3B5QnV0dG9uVGV4dDogXCJDb3BpZWQhXCIgfSk7XHJcbiAgICB9IGNhdGNoIChlcnIpIHtcclxuICAgICAgdGhpcy5zZXRTdGF0ZSh7IGNvcHlCdXR0b25UZXh0OiBcIkZhaWxlZCB0byBjb3B5IVwiIH0pO1xyXG4gICAgfVxyXG4gICAgaWYgKHRoaXMuc3RhdGUuY29weUJ1dHRvblRleHQgIT09ICdjbGljayBoZXJlIHRvIGNvcHlcIicpIHtcclxuICAgICAgc2V0VGltZW91dCgoKSA9PiB7XHJcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSgoKSA9PiAoeyBjb3B5QnV0dG9uVGV4dDogXCJjbGljayBoZXJlIHRvIGNvcHlcIiB9KSk7XHJcbiAgICAgIH0sIDUwMDApO1xyXG4gICAgfVxyXG4gIH07XHJcbiAgaGFuZGxlRm9jdXMgPSAoZXZlbnQpID0+IGV2ZW50LnRhcmdldC5zZWxlY3QoKTtcclxuXHJcbiAgaGFuZGxlRmlsZUlucHV0ID0gKGUpID0+IHtcclxuICAgIC8vIGhhbmRsZSB2YWxpZGF0aW9uc1xyXG4gICAgY29uc3QgZmlsZSA9IGUudGFyZ2V0LmZpbGVzWzBdO1xyXG4gICAgaWYgKCFmaWxlKSByZXR1cm47XHJcbiAgICB0aGlzLnNldFN0YXRlKHsgc2VsZWN0ZWRGaWxlOiBmaWxlIH0pO1xyXG5cclxuICAgIGNvbnN0IHJlYWRlciA9IG5ldyBGaWxlUmVhZGVyKCk7XHJcbiAgICByZWFkZXIub25sb2FkID0gdGhpcy5oYW5kbGVGaWxlTG9hZDtcclxuICAgIHJlYWRlci5yZWFkQXNUZXh0KGZpbGUpO1xyXG4gIH07XHJcblxyXG4gIGhhbmRsZUZpbGVMb2FkID0gKGV2ZW50KSA9PiB7XHJcbiAgICBjb25zb2xlLmxvZyhldmVudC50YXJnZXQucmVzdWx0KTtcclxuICAgIC8vICAgZ2V0dGluZyB0aGUgc3ZnIGZyb20gIHVwbG9hZGVkIGltYWdlXHJcbiAgICBjb25zdCBmaWxlQ29udGVudCA9IGV2ZW50LnRhcmdldC5yZXN1bHQ7XHJcbiAgICB0aGlzLnNldFN0YXRlKHsgZmlsZUNvbnRlbnQ6IGZpbGVDb250ZW50LCBpbnB1dGVkU3ZnOiBmaWxlQ29udGVudCB9LCAoKSA9PlxyXG4gICAgICB0aGlzLmhhbmRsZVN2Z0NoYW5nZXMoZmlsZUNvbnRlbnQpXHJcbiAgICApO1xyXG4gICAgLy8gdGhpcy5yZWZzLnRlc3QuaW5uZXJIVE1MID0gZmlsZUNvbnRlbnQ7XHJcbiAgICAvLyB0aGlzLmhhbmRsZVN2Z0NoYW5nZXM7XHJcbiAgICBjb25zb2xlLmxvZyh0aGlzLnN0YXRlLmlucHV0ZWRTdmcpO1xyXG4gIH07XHJcblxyXG4gIHJlbmRlcigpIHtcclxuICAgIGNvbnN0IHtcclxuICAgICAgaW5wdXRlZFN2ZyxcclxuICAgICAgY3NzQmFja2dyb3VuZEltYWdlLFxyXG4gICAgICBkZWNvZGVBbGwsXHJcbiAgICAgIGJhY2tncm91bmRJbWFnZSxcclxuICAgICAgY29weUJ1dHRvblRleHQsXHJcbiAgICAgIGZpbGVDb250ZW50LFxyXG4gICAgfSA9IHRoaXMuc3RhdGU7XHJcbiAgICBjb25zdCB7IGlzTGlnaHQsIHNldElzTGlnaHQgfSA9IHRoaXMucHJvcHM7XHJcbiAgICAvLyBjb25zb2xlLmxvZyh0aGlzLnByb3BzKTtcclxuICAgIHJldHVybiAoXHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiQXBwIGNvbnRhaW5lclwiPlxyXG4gICAgICAgIHsvKiA8aDMgY29udGVudEVkaXRhYmxlPVwidHJ1ZVwiPlNWRyB0byBCQUNLR1JPVU5EIElNQUdFPC9oMz4gKi99XHJcbiAgICAgICAgPGRpdlxyXG4gICAgICAgICAgY2xhc3NOYW1lPVwiY2hhbmdlQmFja2dyb3VuZFwiXHJcbiAgICAgICAgICBzdHlsZT17e1xyXG4gICAgICAgICAgICB3aWR0aDogNTAsXHJcbiAgICAgICAgICAgIGhlaWdodDogNTAsXHJcbiAgICAgICAgICAgIGJvcmRlclJhZGl1czogMTUsXHJcbiAgICAgICAgICAgIHRvcDogXCIxMlwiLFxyXG4gICAgICAgICAgICBsZWZ0OiBcIjEyXCIsXHJcbiAgICAgICAgICAgIGN1cnNvcjogXCJmaXhlZFwiLFxyXG4gICAgICAgICAgICBwb3NpdGlvbjogXCJhYnNvbHV0ZVwiLFxyXG4gICAgICAgICAgICBkaXNwbGF5OiBcImZsZXhcIixcclxuICAgICAgICAgICAgYWxpZ25JdGVtczogXCJjZW50ZXJcIixcclxuICAgICAgICAgICAgZm9udFNpemU6IGAxLjVyZW1gLFxyXG4gICAgICAgICAgICBqdXN0aWZ5Q29udGVudDogXCJjZW50ZXJcIixcclxuICAgICAgICAgICAgYmFja2dyb3VuZENvbG9yOiBgJHtpc0xpZ2h0ID8gXCJibGFja1wiIDogXCJ3aGl0ZVwifWAsXHJcbiAgICAgICAgICB9fVxyXG4gICAgICAgICAgb25DbGljaz17KCkgPT4gc2V0SXNMaWdodCghaXNMaWdodCl9XHJcbiAgICAgICAgPlxyXG4gICAgICAgICAge2lzTGlnaHQgPyBcIvCfjJtcIiA6IFwi8J+MnlwifVxyXG4gICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICA8aDMgY2xhc3NOYW1lPVwidGV4dC1jZW50ZXJcIj5cclxuICAgICAgICAgIEVuY29kZSBzdmcgaW1hZ2UgdG8gdXNlIGZvciBDU1MgYmFja2dyb3VuZFxyXG4gICAgICAgIDwvaDM+XHJcbiAgICAgICAgPGJyIC8+XHJcblxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiXCI+XHJcbiAgICAgICAgICA8bGFiZWwgaHRtbEZvcj1cImV4YW1wbGVGb3JtQ29udHJvbEZpbGVcIj5cclxuICAgICAgICAgICAgVXBsb2FkIHlvdXIgc3ZnIGZpbGUgb3IgcGFzdGUgdGhlIGNvZGUgYmVsb3dcclxuICAgICAgICAgIDwvbGFiZWw+XHJcbiAgICAgICAgICA8aW5wdXRcclxuICAgICAgICAgICAgdHlwZT1cImZpbGVcIlxyXG4gICAgICAgICAgICBhY2NlcHQ9XCIuc3ZnXCJcclxuICAgICAgICAgICAgLy8gdmFsdWU9e3NlbGVjdGVkRmlsZX1cclxuICAgICAgICAgICAgb25DaGFuZ2U9e3RoaXMuaGFuZGxlRmlsZUlucHV0fVxyXG4gICAgICAgICAgICBjbGFzc05hbWU9e2Ake3V0aWxTdHlsZXNbXCJmb3JtLWNvbnRyb2wtZmlsZVwiXX0gZm9ybS1jb250cm9sLWZpbGVgfVxyXG4gICAgICAgICAgICBpZD1cImV4YW1wbGVGb3JtQ29udHJvbEZpbGVcIlxyXG4gICAgICAgICAgLz5cclxuICAgICAgICAgIDxzdHlsZSBqc3ggZ2xvYmFsPntgXHJcbiAgICAgICAgICAgIGJvZHkge1xyXG4gICAgICAgICAgICAgIGJhY2tncm91bmQ6ICR7aXNMaWdodCA/IFwid2hpdGVcIiA6IFwiYmxhY2tcIn07XHJcbiAgICAgICAgICAgICAgY29sb3I6ICR7aXNMaWdodCA/IFwiYmxhY2tcIiA6IFwid2hpdGVcIn07XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgLmZvcm0tY29udHJvbC1maWxlIHtcclxuICAgICAgICAgICAgICBiYWNrZ3JvdW5kOiAke2lzTGlnaHQgPyBcIndoaXRlXCIgOiBcImJsYWNrXCJ9O1xyXG4gICAgICAgICAgICAgIGNvbG9yOiAke2lzTGlnaHQgPyBcImJsYWNrXCIgOiBcIndoaXRlXCJ9O1xyXG4gICAgICAgICAgICAgIHdpZHRoOiBtaW4tY29udGVudDtcclxuICAgICAgICAgICAgICBmb250LXNpemU6IDE0cHg7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgLmZvcm0tY29udHJvbC1maWxlOjotd2Via2l0LWZpbGUtdXBsb2FkLWJ1dHRvbiB7XHJcbiAgICAgICAgICAgICAgY29sb3I6ICR7aXNMaWdodCA/IFwid2hpdGVcIiA6IFwiYmxhY2tcIn07XHJcbiAgICAgICAgICAgICAgYmFja2dyb3VuZDogJHtpc0xpZ2h0ID8gXCJibGFja1wiIDogXCJ3aGl0ZVwifTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgYH08L3N0eWxlPlxyXG4gICAgICAgICAgey8qIDxwcmUgaWQ9XCJmaWxlQ29udGVudFwiPntmaWxlQ29udGVudH08L3ByZT4gKi99XHJcbiAgICAgICAgICB7LyogPGRpdiByZWY9XCJ0ZXN0XCI+e2ZpbGVDb250ZW50fTwvZGl2PiAqL31cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8aDU+c3ZnIGNvZGU6PC9oNT5cclxuICAgICAgICA8dGV4dGFyZWFcclxuICAgICAgICAgIGNsYXNzTmFtZT1cInctMTAwIHAtMiBmb3JtLWNvbnRyb2xcIlxyXG4gICAgICAgICAgdHlwZT1cInRleHRcIlxyXG4gICAgICAgICAgcm93cz1cIjEwXCJcclxuICAgICAgICAgIHZhbHVlPXtpbnB1dGVkU3ZnfVxyXG4gICAgICAgICAgb25DaGFuZ2U9e3RoaXMuaGFuZGxlU3ZnQ2hhbmdlfVxyXG4gICAgICAgICAgb25Gb2N1cz17dGhpcy5oYW5kbGVGb2N1c31cclxuICAgICAgICAgIHBsYWNlaG9sZGVyPVwiUGFzdGUgU1ZHIGhlcmVcIlxyXG4gICAgICAgIC8+XHJcblxyXG4gICAgICAgIDxiciAvPlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPXtgcG9zaXRpb24tcmVsYXRpdmUgZC1mbGV4IGZsZXgtY29sdW1uIGZsZXgtd3JhcGB9PlxyXG4gICAgICAgICAge2lucHV0ZWRTdmcgPyAoXHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtgcG9zaXRpb24tcmVsYXRpdmUgYH0+XHJcbiAgICAgICAgICAgICAgPGg1PkJhY2tncm91bmQgQ1NTOjwvaDU+XHJcbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e2Bwb3NpdGlvbi1yZWxhdGl2ZSAke3V0aWxTdHlsZXMudGV4dEFyZWFDb3B5fWB9PlxyXG4gICAgICAgICAgICAgICAgPGlucHV0XHJcbiAgICAgICAgICAgICAgICAgIHJlYWRPbmx5XHJcbiAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17YHctMTAwIGZvcm0tY29udHJvbGB9XHJcbiAgICAgICAgICAgICAgICAgIHR5cGU9XCJ0ZXh0XCJcclxuICAgICAgICAgICAgICAgICAgLy8gICByb3dzPVwiOVwiXHJcbiAgICAgICAgICAgICAgICAgIHZhbHVlPXtjc3NCYWNrZ3JvdW5kSW1hZ2V9XHJcbiAgICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiQ29weSBDU1MgYmFja2dyb3VuZyBpbWFnZSBoZXJlXCJcclxuICAgICAgICAgICAgICAgIC8+XHJcblxyXG4gICAgICAgICAgICAgICAge2Nzc0JhY2tncm91bmRJbWFnZSA/IChcclxuICAgICAgICAgICAgICAgICAgPGJ1dHRvblxyXG4gICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17YGJ0biBidG4tcHJpbWFyeSBwb3NpdGlvbi1hYnNvbHV0ZSAke3V0aWxTdHlsZXMuYnV0dG9ufWB9XHJcbiAgICAgICAgICAgICAgICAgICAgb25DbGljaz17dGhpcy5jb3B5VG9DbGlwQm9hcmR9XHJcbiAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICB7Y29weUJ1dHRvblRleHR9XHJcbiAgICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgKSA6IG51bGx9XHJcbiAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgKSA6IG51bGx9XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIlwiPlxyXG4gICAgICAgICAgICA8aDUgY2xhc3NOYW1lPXtgYH0+UHJldmlldzo8L2g1PlxyXG4gICAgICAgICAgICA8ZGl2XHJcbiAgICAgICAgICAgICAgY2xhc3NOYW1lPVwidy0xMDBcIlxyXG4gICAgICAgICAgICAgIHN0eWxlPXt7XHJcbiAgICAgICAgICAgICAgICBoZWlnaHQ6IDI1NCxcclxuICAgICAgICAgICAgICAgIC8vIHdpZHRoOiAyNTYsXHJcbiAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kSW1hZ2U6IGB1cmwoXCIke2JhY2tncm91bmRJbWFnZX1cIilgLFxyXG4gICAgICAgICAgICAgICAgYmFja2dyb3VuZFBvc2l0aW9uOiBcImNlbnRlclwiLFxyXG4gICAgICAgICAgICAgICAgYmFja2dyb3VuZFJlcGVhdDogXCJuby1yZXBlYXRcIixcclxuICAgICAgICAgICAgICAgIGJhY2tncm91bmRDb2xvcjogXCJ3aGl0ZXNtb2tlXCIsXHJcbiAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgIHtkZWNvZGVBbGx9XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgIDxiciAvPlxyXG4gICAgICA8L2Rpdj5cclxuICAgICk7XHJcbiAgfVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBDb250ZW50O1xyXG4iLCJpbXBvcnQgSGVhZCBmcm9tIFwibmV4dC9oZWFkXCI7XG5pbXBvcnQgTGF5b3V0LCB7IHNpdGVUaXRsZSB9IGZyb20gXCIuLi9jb21wb25lbnRzL2xheW91dFwiO1xuaW1wb3J0IHV0aWxTdHlsZXMgZnJvbSBcIi4uL3N0eWxlcy91dGlscy5tb2R1bGUuY3NzXCI7XG5pbXBvcnQgeyB1c2VTdGF0ZSwgdXNlRWZmZWN0IH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgQ29udGVudCBmcm9tIFwiLi4vY29tcG9uZW50cy9jb250ZW50XCI7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEhvbWUoe30pIHtcbiAgY29uc3QgW2lzTGlnaHQsIHNldElzTGlnaHRdID0gdXNlU3RhdGUodHJ1ZSk7XG5cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBjb25zdCBiZ0dldExpZ2h0ID0gbG9jYWxTdG9yYWdlLmdldEl0ZW0oXCJiZ0xpZ2h0VGhlbWVcIik7XG4gICAgc2V0SXNMaWdodChiZ0dldExpZ2h0ID09PSBcInRydWVcIik7XG4gICAgY29uc29sZS5sb2coYmdHZXRMaWdodCwgaXNMaWdodCk7XG4gIH0sIFtdKTtcblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKFwiYmdMaWdodFRoZW1lXCIsIGlzTGlnaHQpO1xuICB9LCBbaXNMaWdodF0pO1xuICBjb25zb2xlLmxvZyhpc0xpZ2h0KTtcblxuICByZXR1cm4gKFxuICAgIDxMYXlvdXQgaG9tZT5cbiAgICAgIDxIZWFkPlxuICAgICAgICA8dGl0bGU+e3NpdGVUaXRsZX08L3RpdGxlPlxuICAgICAgPC9IZWFkPlxuICAgICAgPENvbnRlbnQgaXNMaWdodD17aXNMaWdodH0gc2V0SXNMaWdodD17c2V0SXNMaWdodH0gLz5cbiAgICA8L0xheW91dD5cbiAgKTtcbn1cbiJdLCJzb3VyY2VSb290IjoiIn0=