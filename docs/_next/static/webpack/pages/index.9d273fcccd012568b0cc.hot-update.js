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

  var changeBackground = function changeBackground() {
    // document.getElementsByTagName("body").style.backgroundColor = "blue";
    console.log("hi");
    setIsLight(!isLight);
  };

  useEffect(function () {
    (function () {
      localStorage.setItem("bgLightTheme", !isLight);
    });
  });
  return __jsx(_components_layout__WEBPACK_IMPORTED_MODULE_4__["default"], {
    home: true,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 21,
      columnNumber: 5
    }
  }, __jsx("div", {
    style: {
      height: 25,
      width: 25,
      cursor: "pointer",
      position: "absolute",
      backgroundColor: "".concat(isLight ? "black" : "white")
    },
    onClick: changeBackground,
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default.a.dynamic([["2338821322", [isLight ? "white" : "black", isLight ? "black" : "white"]]]) + " " + "changeBackground",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 22,
      columnNumber: 7
    }
  }), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default.a, {
    id: "2338821322",
    dynamic: [isLight ? "white" : "black", isLight ? "black" : "white"],
    __self: this
  }, "body{background:".concat(isLight ? "white" : "black", ";color:").concat(isLight ? "black" : "white", ";}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkQ6XFxEZXNrdG9wXFx1cmxlbmNvZGVyXFxwYWdlc1xcaW5kZXguanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBaUN5QixBQUdtRCx3Q0FDTCxtQ0FDckMiLCJmaWxlIjoiRDpcXERlc2t0b3BcXHVybGVuY29kZXJcXHBhZ2VzXFxpbmRleC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBIZWFkIGZyb20gXCJuZXh0L2hlYWRcIjtcbmltcG9ydCBMYXlvdXQsIHsgc2l0ZVRpdGxlIH0gZnJvbSBcIi4uL2NvbXBvbmVudHMvbGF5b3V0XCI7XG5pbXBvcnQgdXRpbFN0eWxlcyBmcm9tIFwiLi4vc3R5bGVzL3V0aWxzLm1vZHVsZS5jc3NcIjtcbmltcG9ydCB7IHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgQ29udGVudCBmcm9tIFwiLi4vY29tcG9uZW50cy9jb250ZW50XCI7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEhvbWUoe30pIHtcbiAgY29uc3QgW2lzTGlnaHQsIHNldElzTGlnaHRdID0gdXNlU3RhdGUodHJ1ZSk7XG5cbiAgY29uc3QgY2hhbmdlQmFja2dyb3VuZCA9ICgpID0+IHtcbiAgICAvLyBkb2N1bWVudC5nZXRFbGVtZW50c0J5VGFnTmFtZShcImJvZHlcIikuc3R5bGUuYmFja2dyb3VuZENvbG9yID0gXCJibHVlXCI7XG4gICAgY29uc29sZS5sb2coXCJoaVwiKTtcbiAgICBzZXRJc0xpZ2h0KCFpc0xpZ2h0KTtcbiAgfTtcbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICAoKSA9PiB7XG4gICAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbShcImJnTGlnaHRUaGVtZVwiLCAhaXNMaWdodCk7XG4gICAgfTtcbiAgfSk7XG4gIHJldHVybiAoXG4gICAgPExheW91dCBob21lPlxuICAgICAgPGRpdlxuICAgICAgICBjbGFzc05hbWU9XCJjaGFuZ2VCYWNrZ3JvdW5kXCJcbiAgICAgICAgc3R5bGU9e3tcbiAgICAgICAgICBoZWlnaHQ6IDI1LFxuICAgICAgICAgIHdpZHRoOiAyNSxcbiAgICAgICAgICBjdXJzb3I6IFwicG9pbnRlclwiLFxuICAgICAgICAgIHBvc2l0aW9uOiBcImFic29sdXRlXCIsXG4gICAgICAgICAgYmFja2dyb3VuZENvbG9yOiBgJHtpc0xpZ2h0ID8gXCJibGFja1wiIDogXCJ3aGl0ZVwifWAsXG4gICAgICAgIH19XG4gICAgICAgIG9uQ2xpY2s9e2NoYW5nZUJhY2tncm91bmR9XG4gICAgICA+PC9kaXY+XG5cbiAgICAgIDxzdHlsZSBqc3ggZ2xvYmFsPntgXG4gICAgICAgIGJvZHkge1xuICAgICAgICAgIGJhY2tncm91bmQ6ICR7aXNMaWdodCA/IFwid2hpdGVcIiA6IFwiYmxhY2tcIn07XG4gICAgICAgICAgY29sb3I6ICR7aXNMaWdodCA/IFwiYmxhY2tcIiA6IFwid2hpdGVcIn07XG4gICAgICAgIH1cbiAgICAgIGB9PC9zdHlsZT5cblxuICAgICAgPEhlYWQ+XG4gICAgICAgIDx0aXRsZT57c2l0ZVRpdGxlfTwvdGl0bGU+XG4gICAgICA8L0hlYWQ+XG4gICAgICA8c2VjdGlvbiBjbGFzc05hbWU9e2Ake3V0aWxTdHlsZXMuaGVhZGluZ01kfSAke3V0aWxTdHlsZXMucGFkZGluZzFweH1gfT5cbiAgICAgICAgPENvbnRlbnQgY2hhbmdlQmFja2dyb3VuZD17Y2hhbmdlQmFja2dyb3VuZH0gaXNMaWdodCAvPlxuICAgICAgPC9zZWN0aW9uPlxuICAgIDwvTGF5b3V0PlxuICApO1xufVxuIl19 */\n/*@ sourceURL=D:\\\\Desktop\\\\urlencoder\\\\pages\\\\index.js */")), __jsx(next_head__WEBPACK_IMPORTED_MODULE_3___default.a, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 41,
      columnNumber: 7
    }
  }, __jsx("title", {
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default.a.dynamic([["2338821322", [isLight ? "white" : "black", isLight ? "black" : "white"]]]),
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 42,
      columnNumber: 9
    }
  }, _components_layout__WEBPACK_IMPORTED_MODULE_4__["siteTitle"])), __jsx("section", {
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default.a.dynamic([["2338821322", [isLight ? "white" : "black", isLight ? "black" : "white"]]]) + " " + "".concat(_styles_utils_module_css__WEBPACK_IMPORTED_MODULE_5___default.a.headingMd, " ").concat(_styles_utils_module_css__WEBPACK_IMPORTED_MODULE_5___default.a.padding1px),
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 44,
      columnNumber: 7
    }
  }, __jsx(_components_content__WEBPACK_IMPORTED_MODULE_6__["default"], {
    changeBackground: changeBackground,
    isLight: true,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 45,
      columnNumber: 9
    }
  })));
}

_s(Home, "yd3g3DyUX1eSUS6zNQby5u9pRG4=");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvaW5kZXguanMiXSwibmFtZXMiOlsiSG9tZSIsInVzZVN0YXRlIiwiaXNMaWdodCIsInNldElzTGlnaHQiLCJjaGFuZ2VCYWNrZ3JvdW5kIiwiY29uc29sZSIsImxvZyIsInVzZUVmZmVjdCIsImxvY2FsU3RvcmFnZSIsInNldEl0ZW0iLCJoZWlnaHQiLCJ3aWR0aCIsImN1cnNvciIsInBvc2l0aW9uIiwiYmFja2dyb3VuZENvbG9yIiwic2l0ZVRpdGxlIiwidXRpbFN0eWxlcyIsImhlYWRpbmdNZCIsInBhZGRpbmcxcHgiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRWUsU0FBU0EsSUFBVCxPQUFrQjtBQUFBOztBQUFBOztBQUFBLGtCQUNEQyxzREFBUSxDQUFDLElBQUQsQ0FEUDtBQUFBLE1BQ3hCQyxPQUR3QjtBQUFBLE1BQ2ZDLFVBRGU7O0FBRy9CLE1BQU1DLGdCQUFnQixHQUFHLFNBQW5CQSxnQkFBbUIsR0FBTTtBQUM3QjtBQUNBQyxXQUFPLENBQUNDLEdBQVIsQ0FBWSxJQUFaO0FBQ0FILGNBQVUsQ0FBQyxDQUFDRCxPQUFGLENBQVY7QUFDRCxHQUpEOztBQUtBSyxXQUFTLENBQUMsWUFBTTtBQUNkLGlCQUFNO0FBQ0pDLGtCQUFZLENBQUNDLE9BQWIsQ0FBcUIsY0FBckIsRUFBcUMsQ0FBQ1AsT0FBdEM7QUFDRCxLQUZEO0FBR0QsR0FKUSxDQUFUO0FBS0EsU0FDRSxNQUFDLDBEQUFEO0FBQVEsUUFBSSxNQUFaO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRTtBQUVFLFNBQUssRUFBRTtBQUNMUSxZQUFNLEVBQUUsRUFESDtBQUVMQyxXQUFLLEVBQUUsRUFGRjtBQUdMQyxZQUFNLEVBQUUsU0FISDtBQUlMQyxjQUFRLEVBQUUsVUFKTDtBQUtMQyxxQkFBZSxZQUFLWixPQUFPLEdBQUcsT0FBSCxHQUFhLE9BQXpCO0FBTFYsS0FGVDtBQVNFLFdBQU8sRUFBRUUsZ0JBVFg7QUFBQSxnR0Fja0JGLE9BQU8sR0FBRyxPQUFILEdBQWEsT0FkdEMsRUFlYUEsT0FBTyxHQUFHLE9BQUgsR0FBYSxPQWZqQyxhQUNZLGtCQURaO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFERjtBQUFBO0FBQUEsY0Flb0JBLE9BQU8sR0FBRyxPQUFILEdBQWEsT0FmeEMsRUFnQmVBLE9BQU8sR0FBRyxPQUFILEdBQWEsT0FoQm5DO0FBQUE7QUFBQSwrQkFlb0JBLE9BQU8sR0FBRyxPQUFILEdBQWEsT0FmeEMsb0JBZ0JlQSxPQUFPLEdBQUcsT0FBSCxHQUFhLE9BaEJuQyw4c0VBb0JFLE1BQUMsZ0RBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFO0FBQUEsZ0dBTmdCQSxPQUFPLEdBQUcsT0FBSCxHQUFhLE9BTXBDLEVBTFdBLE9BQU8sR0FBRyxPQUFILEdBQWEsT0FLL0I7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUFRYSw0REFBUixDQURGLENBcEJGLEVBdUJFO0FBQUEsZ0dBUmtCYixPQUFPLEdBQUcsT0FBSCxHQUFhLE9BUXRDLEVBUGFBLE9BQU8sR0FBRyxPQUFILEdBQWEsT0FPakMsdUJBQXVCYywrREFBVSxDQUFDQyxTQUFsQyxjQUErQ0QsK0RBQVUsQ0FBQ0UsVUFBMUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFLE1BQUMsMkRBQUQ7QUFBUyxvQkFBZ0IsRUFBRWQsZ0JBQTNCO0FBQTZDLFdBQU8sTUFBcEQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQURGLENBdkJGLENBREY7QUE2QkQ7O0dBMUN1QkosSTs7S0FBQUEsSSIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9pbmRleC45ZDI3M2ZjY2NkMDEyNTY4YjBjYy5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IEhlYWQgZnJvbSBcIm5leHQvaGVhZFwiO1xuaW1wb3J0IExheW91dCwgeyBzaXRlVGl0bGUgfSBmcm9tIFwiLi4vY29tcG9uZW50cy9sYXlvdXRcIjtcbmltcG9ydCB1dGlsU3R5bGVzIGZyb20gXCIuLi9zdHlsZXMvdXRpbHMubW9kdWxlLmNzc1wiO1xuaW1wb3J0IHsgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCBDb250ZW50IGZyb20gXCIuLi9jb21wb25lbnRzL2NvbnRlbnRcIjtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gSG9tZSh7fSkge1xuICBjb25zdCBbaXNMaWdodCwgc2V0SXNMaWdodF0gPSB1c2VTdGF0ZSh0cnVlKTtcblxuICBjb25zdCBjaGFuZ2VCYWNrZ3JvdW5kID0gKCkgPT4ge1xuICAgIC8vIGRvY3VtZW50LmdldEVsZW1lbnRzQnlUYWdOYW1lKFwiYm9keVwiKS5zdHlsZS5iYWNrZ3JvdW5kQ29sb3IgPSBcImJsdWVcIjtcbiAgICBjb25zb2xlLmxvZyhcImhpXCIpO1xuICAgIHNldElzTGlnaHQoIWlzTGlnaHQpO1xuICB9O1xuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgICgpID0+IHtcbiAgICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKFwiYmdMaWdodFRoZW1lXCIsICFpc0xpZ2h0KTtcbiAgICB9O1xuICB9KTtcbiAgcmV0dXJuIChcbiAgICA8TGF5b3V0IGhvbWU+XG4gICAgICA8ZGl2XG4gICAgICAgIGNsYXNzTmFtZT1cImNoYW5nZUJhY2tncm91bmRcIlxuICAgICAgICBzdHlsZT17e1xuICAgICAgICAgIGhlaWdodDogMjUsXG4gICAgICAgICAgd2lkdGg6IDI1LFxuICAgICAgICAgIGN1cnNvcjogXCJwb2ludGVyXCIsXG4gICAgICAgICAgcG9zaXRpb246IFwiYWJzb2x1dGVcIixcbiAgICAgICAgICBiYWNrZ3JvdW5kQ29sb3I6IGAke2lzTGlnaHQgPyBcImJsYWNrXCIgOiBcIndoaXRlXCJ9YCxcbiAgICAgICAgfX1cbiAgICAgICAgb25DbGljaz17Y2hhbmdlQmFja2dyb3VuZH1cbiAgICAgID48L2Rpdj5cblxuICAgICAgPHN0eWxlIGpzeCBnbG9iYWw+e2BcbiAgICAgICAgYm9keSB7XG4gICAgICAgICAgYmFja2dyb3VuZDogJHtpc0xpZ2h0ID8gXCJ3aGl0ZVwiIDogXCJibGFja1wifTtcbiAgICAgICAgICBjb2xvcjogJHtpc0xpZ2h0ID8gXCJibGFja1wiIDogXCJ3aGl0ZVwifTtcbiAgICAgICAgfVxuICAgICAgYH08L3N0eWxlPlxuXG4gICAgICA8SGVhZD5cbiAgICAgICAgPHRpdGxlPntzaXRlVGl0bGV9PC90aXRsZT5cbiAgICAgIDwvSGVhZD5cbiAgICAgIDxzZWN0aW9uIGNsYXNzTmFtZT17YCR7dXRpbFN0eWxlcy5oZWFkaW5nTWR9ICR7dXRpbFN0eWxlcy5wYWRkaW5nMXB4fWB9PlxuICAgICAgICA8Q29udGVudCBjaGFuZ2VCYWNrZ3JvdW5kPXtjaGFuZ2VCYWNrZ3JvdW5kfSBpc0xpZ2h0IC8+XG4gICAgICA8L3NlY3Rpb24+XG4gICAgPC9MYXlvdXQ+XG4gICk7XG59XG4iXSwic291cmNlUm9vdCI6IiJ9