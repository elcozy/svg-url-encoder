webpackHotUpdate_N_E("pages/index",{

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
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-jsx/style */ "./node_modules/styled-jsx/style.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/head */ "./node_modules/next/dist/next-server/lib/head.js");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _components_layout__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/layout */ "./components/layout.js");
/* harmony import */ var _styles_utils_module_css__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../styles/utils.module.css */ "./styles/utils.module.css");
/* harmony import */ var _styles_utils_module_css__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_styles_utils_module_css__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _components_content__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../components/content */ "./components/content.js");


var _jsxFileName = "D:\\Desktop\\urlencoder\\pages\\index.js",
    _s = $RefreshSig$();



var __jsx = react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement;





function Home(_ref) {
  _s();

  Object(_babel_runtime_helpers_esm_objectDestructuringEmpty__WEBPACK_IMPORTED_MODULE_0__["default"])(_ref);

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])(true),
      isLight = _useState[0],
      setIsLight = _useState[1];

  Object(react__WEBPACK_IMPORTED_MODULE_2__["useEffect"])(function () {
    var bgGetLight = localStorage.getItem("bgLightTheme");
    setIsLight(bgGetLight === "true");
    console.log(bgGetLight, isLight);
  }, []);
  Object(react__WEBPACK_IMPORTED_MODULE_2__["useEffect"])(function () {
    localStorage.setItem("bgLightTheme", isLight);
  }, [isLight]);
  console.log(isLight);
  return __jsx(_components_layout__WEBPACK_IMPORTED_MODULE_4__["default"], {
    home: true,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 22,
      columnNumber: 5
    }
  }, __jsx("div", {
    style: {
      width: 35,
      borderRadius: 10,
      cursor: "pointer",
      position: "absolute",
      color: "".concat(isLight ? "white" : "yellow"),
      textAlign: "center",
      backgroundColor: "".concat(isLight ? "black" : "white")
    },
    onClick: function onClick() {
      return setIsLight(!isLight);
    },
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default.a.dynamic([["2338821322", [isLight ? "white" : "black", isLight ? "black" : "white"]]]) + " " + "changeBackground",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 23,
      columnNumber: 7
    }
  }, isLight ? "🌛" : "🌞"), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default.a, {
    id: "2338821322",
    dynamic: [isLight ? "white" : "black", isLight ? "black" : "white"],
    __self: this
  }, "body{background:".concat(isLight ? "white" : "black", ";color:").concat(isLight ? "black" : "white", ";}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkQ6XFxEZXNrdG9wXFx1cmxlbmNvZGVyXFxwYWdlc1xcaW5kZXguanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBc0N5QixBQUdtRCx3Q0FDTCxtQ0FDckMiLCJmaWxlIjoiRDpcXERlc2t0b3BcXHVybGVuY29kZXJcXHBhZ2VzXFxpbmRleC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBIZWFkIGZyb20gXCJuZXh0L2hlYWRcIjtcbmltcG9ydCBMYXlvdXQsIHsgc2l0ZVRpdGxlIH0gZnJvbSBcIi4uL2NvbXBvbmVudHMvbGF5b3V0XCI7XG5pbXBvcnQgdXRpbFN0eWxlcyBmcm9tIFwiLi4vc3R5bGVzL3V0aWxzLm1vZHVsZS5jc3NcIjtcbmltcG9ydCB7IHVzZVN0YXRlLCB1c2VFZmZlY3QgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCBDb250ZW50IGZyb20gXCIuLi9jb21wb25lbnRzL2NvbnRlbnRcIjtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gSG9tZSh7fSkge1xuICBjb25zdCBbaXNMaWdodCwgc2V0SXNMaWdodF0gPSB1c2VTdGF0ZSh0cnVlKTtcblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGNvbnN0IGJnR2V0TGlnaHQgPSBsb2NhbFN0b3JhZ2UuZ2V0SXRlbShcImJnTGlnaHRUaGVtZVwiKTtcbiAgICBzZXRJc0xpZ2h0KGJnR2V0TGlnaHQgPT09IFwidHJ1ZVwiKTtcbiAgICBjb25zb2xlLmxvZyhiZ0dldExpZ2h0LCBpc0xpZ2h0KTtcbiAgfSwgW10pO1xuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oXCJiZ0xpZ2h0VGhlbWVcIiwgaXNMaWdodCk7XG4gIH0sIFtpc0xpZ2h0XSk7XG4gIGNvbnNvbGUubG9nKGlzTGlnaHQpO1xuXG4gIHJldHVybiAoXG4gICAgPExheW91dCBob21lPlxuICAgICAgPGRpdlxuICAgICAgICBjbGFzc05hbWU9XCJjaGFuZ2VCYWNrZ3JvdW5kXCJcbiAgICAgICAgc3R5bGU9e3tcbiAgICAgICAgICB3aWR0aDogMzUsXG4gICAgICAgICAgYm9yZGVyUmFkaXVzOiAxMCxcbiAgICAgICAgICBjdXJzb3I6IFwicG9pbnRlclwiLFxuICAgICAgICAgIHBvc2l0aW9uOiBcImFic29sdXRlXCIsXG4gICAgICAgICAgY29sb3I6IGAke2lzTGlnaHQgPyBcIndoaXRlXCIgOiBcInllbGxvd1wifWAsXG4gICAgICAgICAgdGV4dEFsaWduOiBcImNlbnRlclwiLFxuICAgICAgICAgIGJhY2tncm91bmRDb2xvcjogYCR7aXNMaWdodCA/IFwiYmxhY2tcIiA6IFwid2hpdGVcIn1gLFxuICAgICAgICB9fVxuICAgICAgICBvbkNsaWNrPXsoKSA9PiBzZXRJc0xpZ2h0KCFpc0xpZ2h0KX1cbiAgICAgID5cbiAgICAgICAge2lzTGlnaHQgPyBcIvCfjJtcIiA6IFwi8J+MnlwifVxuICAgICAgPC9kaXY+XG5cbiAgICAgIDxzdHlsZSBqc3ggZ2xvYmFsPntgXG4gICAgICAgIGJvZHkge1xuICAgICAgICAgIGJhY2tncm91bmQ6ICR7aXNMaWdodCA/IFwid2hpdGVcIiA6IFwiYmxhY2tcIn07XG4gICAgICAgICAgY29sb3I6ICR7aXNMaWdodCA/IFwiYmxhY2tcIiA6IFwid2hpdGVcIn07XG4gICAgICAgIH1cbiAgICAgIGB9PC9zdHlsZT5cblxuICAgICAgPEhlYWQ+XG4gICAgICAgIDx0aXRsZT57c2l0ZVRpdGxlfTwvdGl0bGU+XG4gICAgICA8L0hlYWQ+XG4gICAgICA8Q29udGVudCBpc0xpZ2h0PXtpc0xpZ2h0fSAvPlxuICAgIDwvTGF5b3V0PlxuICApO1xufVxuIl19 */\n/*@ sourceURL=D:\\\\Desktop\\\\urlencoder\\\\pages\\\\index.js */")), __jsx(next_head__WEBPACK_IMPORTED_MODULE_3___default.a, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 46,
      columnNumber: 7
    }
  }, __jsx("title", {
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default.a.dynamic([["2338821322", [isLight ? "white" : "black", isLight ? "black" : "white"]]]),
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 47,
      columnNumber: 9
    }
  }, _components_layout__WEBPACK_IMPORTED_MODULE_4__["siteTitle"])), __jsx(_components_content__WEBPACK_IMPORTED_MODULE_6__["default"], {
    isLight: isLight,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 49,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvaW5kZXguanMiXSwibmFtZXMiOlsiSG9tZSIsInVzZVN0YXRlIiwiaXNMaWdodCIsInNldElzTGlnaHQiLCJ1c2VFZmZlY3QiLCJiZ0dldExpZ2h0IiwibG9jYWxTdG9yYWdlIiwiZ2V0SXRlbSIsImNvbnNvbGUiLCJsb2ciLCJzZXRJdGVtIiwid2lkdGgiLCJib3JkZXJSYWRpdXMiLCJjdXJzb3IiLCJwb3NpdGlvbiIsImNvbG9yIiwidGV4dEFsaWduIiwiYmFja2dyb3VuZENvbG9yIiwic2l0ZVRpdGxlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVlLFNBQVNBLElBQVQsT0FBa0I7QUFBQTs7QUFBQTs7QUFBQSxrQkFDREMsc0RBQVEsQ0FBQyxJQUFELENBRFA7QUFBQSxNQUN4QkMsT0FEd0I7QUFBQSxNQUNmQyxVQURlOztBQUcvQkMseURBQVMsQ0FBQyxZQUFNO0FBQ2QsUUFBTUMsVUFBVSxHQUFHQyxZQUFZLENBQUNDLE9BQWIsQ0FBcUIsY0FBckIsQ0FBbkI7QUFDQUosY0FBVSxDQUFDRSxVQUFVLEtBQUssTUFBaEIsQ0FBVjtBQUNBRyxXQUFPLENBQUNDLEdBQVIsQ0FBWUosVUFBWixFQUF3QkgsT0FBeEI7QUFDRCxHQUpRLEVBSU4sRUFKTSxDQUFUO0FBTUFFLHlEQUFTLENBQUMsWUFBTTtBQUNkRSxnQkFBWSxDQUFDSSxPQUFiLENBQXFCLGNBQXJCLEVBQXFDUixPQUFyQztBQUNELEdBRlEsRUFFTixDQUFDQSxPQUFELENBRk0sQ0FBVDtBQUdBTSxTQUFPLENBQUNDLEdBQVIsQ0FBWVAsT0FBWjtBQUVBLFNBQ0UsTUFBQywwREFBRDtBQUFRLFFBQUksTUFBWjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0U7QUFFRSxTQUFLLEVBQUU7QUFDTFMsV0FBSyxFQUFFLEVBREY7QUFFTEMsa0JBQVksRUFBRSxFQUZUO0FBR0xDLFlBQU0sRUFBRSxTQUhIO0FBSUxDLGNBQVEsRUFBRSxVQUpMO0FBS0xDLFdBQUssWUFBS2IsT0FBTyxHQUFHLE9BQUgsR0FBYSxRQUF6QixDQUxBO0FBTUxjLGVBQVMsRUFBRSxRQU5OO0FBT0xDLHFCQUFlLFlBQUtmLE9BQU8sR0FBRyxPQUFILEdBQWEsT0FBekI7QUFQVixLQUZUO0FBV0UsV0FBTyxFQUFFO0FBQUEsYUFBTUMsVUFBVSxDQUFDLENBQUNELE9BQUYsQ0FBaEI7QUFBQSxLQVhYO0FBQUEsZ0dBa0JrQkEsT0FBTyxHQUFHLE9BQUgsR0FBYSxPQWxCdEMsRUFtQmFBLE9BQU8sR0FBRyxPQUFILEdBQWEsT0FuQmpDLGFBQ1ksa0JBRFo7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQWFHQSxPQUFPLEdBQUcsSUFBSCxHQUFVLElBYnBCLENBREY7QUFBQTtBQUFBLGNBbUJvQkEsT0FBTyxHQUFHLE9BQUgsR0FBYSxPQW5CeEMsRUFvQmVBLE9BQU8sR0FBRyxPQUFILEdBQWEsT0FwQm5DO0FBQUE7QUFBQSwrQkFtQm9CQSxPQUFPLEdBQUcsT0FBSCxHQUFhLE9BbkJ4QyxvQkFvQmVBLE9BQU8sR0FBRyxPQUFILEdBQWEsT0FwQm5DLDB4RUF3QkUsTUFBQyxnREFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0U7QUFBQSxnR0FOZ0JBLE9BQU8sR0FBRyxPQUFILEdBQWEsT0FNcEMsRUFMV0EsT0FBTyxHQUFHLE9BQUgsR0FBYSxPQUsvQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQVFnQiw0REFBUixDQURGLENBeEJGLEVBMkJFLE1BQUMsMkRBQUQ7QUFBUyxXQUFPLEVBQUVoQixPQUFsQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBM0JGLENBREY7QUErQkQ7O0dBN0N1QkYsSTs7S0FBQUEsSSIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9pbmRleC5mMWMzNTgwZjFmMDE3NTY4OTY0Yy5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IEhlYWQgZnJvbSBcIm5leHQvaGVhZFwiO1xuaW1wb3J0IExheW91dCwgeyBzaXRlVGl0bGUgfSBmcm9tIFwiLi4vY29tcG9uZW50cy9sYXlvdXRcIjtcbmltcG9ydCB1dGlsU3R5bGVzIGZyb20gXCIuLi9zdHlsZXMvdXRpbHMubW9kdWxlLmNzc1wiO1xuaW1wb3J0IHsgdXNlU3RhdGUsIHVzZUVmZmVjdCB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IENvbnRlbnQgZnJvbSBcIi4uL2NvbXBvbmVudHMvY29udGVudFwiO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBIb21lKHt9KSB7XG4gIGNvbnN0IFtpc0xpZ2h0LCBzZXRJc0xpZ2h0XSA9IHVzZVN0YXRlKHRydWUpO1xuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgY29uc3QgYmdHZXRMaWdodCA9IGxvY2FsU3RvcmFnZS5nZXRJdGVtKFwiYmdMaWdodFRoZW1lXCIpO1xuICAgIHNldElzTGlnaHQoYmdHZXRMaWdodCA9PT0gXCJ0cnVlXCIpO1xuICAgIGNvbnNvbGUubG9nKGJnR2V0TGlnaHQsIGlzTGlnaHQpO1xuICB9LCBbXSk7XG5cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbShcImJnTGlnaHRUaGVtZVwiLCBpc0xpZ2h0KTtcbiAgfSwgW2lzTGlnaHRdKTtcbiAgY29uc29sZS5sb2coaXNMaWdodCk7XG5cbiAgcmV0dXJuIChcbiAgICA8TGF5b3V0IGhvbWU+XG4gICAgICA8ZGl2XG4gICAgICAgIGNsYXNzTmFtZT1cImNoYW5nZUJhY2tncm91bmRcIlxuICAgICAgICBzdHlsZT17e1xuICAgICAgICAgIHdpZHRoOiAzNSxcbiAgICAgICAgICBib3JkZXJSYWRpdXM6IDEwLFxuICAgICAgICAgIGN1cnNvcjogXCJwb2ludGVyXCIsXG4gICAgICAgICAgcG9zaXRpb246IFwiYWJzb2x1dGVcIixcbiAgICAgICAgICBjb2xvcjogYCR7aXNMaWdodCA/IFwid2hpdGVcIiA6IFwieWVsbG93XCJ9YCxcbiAgICAgICAgICB0ZXh0QWxpZ246IFwiY2VudGVyXCIsXG4gICAgICAgICAgYmFja2dyb3VuZENvbG9yOiBgJHtpc0xpZ2h0ID8gXCJibGFja1wiIDogXCJ3aGl0ZVwifWAsXG4gICAgICAgIH19XG4gICAgICAgIG9uQ2xpY2s9eygpID0+IHNldElzTGlnaHQoIWlzTGlnaHQpfVxuICAgICAgPlxuICAgICAgICB7aXNMaWdodCA/IFwi8J+Mm1wiIDogXCLwn4yeXCJ9XG4gICAgICA8L2Rpdj5cblxuICAgICAgPHN0eWxlIGpzeCBnbG9iYWw+e2BcbiAgICAgICAgYm9keSB7XG4gICAgICAgICAgYmFja2dyb3VuZDogJHtpc0xpZ2h0ID8gXCJ3aGl0ZVwiIDogXCJibGFja1wifTtcbiAgICAgICAgICBjb2xvcjogJHtpc0xpZ2h0ID8gXCJibGFja1wiIDogXCJ3aGl0ZVwifTtcbiAgICAgICAgfVxuICAgICAgYH08L3N0eWxlPlxuXG4gICAgICA8SGVhZD5cbiAgICAgICAgPHRpdGxlPntzaXRlVGl0bGV9PC90aXRsZT5cbiAgICAgIDwvSGVhZD5cbiAgICAgIDxDb250ZW50IGlzTGlnaHQ9e2lzTGlnaHR9IC8+XG4gICAgPC9MYXlvdXQ+XG4gICk7XG59XG4iXSwic291cmNlUm9vdCI6IiJ9