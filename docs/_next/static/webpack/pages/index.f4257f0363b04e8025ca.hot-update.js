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
    localStorage.setItem("bgLightTheme", isLight);
  };

  Object(react__WEBPACK_IMPORTED_MODULE_2__["useEffect"])(function () {
    var bgGetLight = localStorage.getItem("bgLightTheme");
    setIsLight(bgGetLight);
  }, []);
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
      lineNumber: 23,
      columnNumber: 7
    }
  }), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default.a, {
    id: "2338821322",
    dynamic: [isLight ? "white" : "black", isLight ? "black" : "white"],
    __self: this
  }, "body{background:".concat(isLight ? "white" : "black", ";color:").concat(isLight ? "black" : "white", ";}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkQ6XFxEZXNrdG9wXFx1cmxlbmNvZGVyXFxwYWdlc1xcaW5kZXguanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBa0N5QixBQUdtRCx3Q0FDTCxtQ0FDckMiLCJmaWxlIjoiRDpcXERlc2t0b3BcXHVybGVuY29kZXJcXHBhZ2VzXFxpbmRleC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBIZWFkIGZyb20gXCJuZXh0L2hlYWRcIjtcbmltcG9ydCBMYXlvdXQsIHsgc2l0ZVRpdGxlIH0gZnJvbSBcIi4uL2NvbXBvbmVudHMvbGF5b3V0XCI7XG5pbXBvcnQgdXRpbFN0eWxlcyBmcm9tIFwiLi4vc3R5bGVzL3V0aWxzLm1vZHVsZS5jc3NcIjtcbmltcG9ydCB7IHVzZVN0YXRlLCB1c2VFZmZlY3QgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCBDb250ZW50IGZyb20gXCIuLi9jb21wb25lbnRzL2NvbnRlbnRcIjtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gSG9tZSh7fSkge1xuICBjb25zdCBbaXNMaWdodCwgc2V0SXNMaWdodF0gPSB1c2VTdGF0ZSh0cnVlKTtcblxuICBjb25zdCBjaGFuZ2VCYWNrZ3JvdW5kID0gKCkgPT4ge1xuICAgIC8vIGRvY3VtZW50LmdldEVsZW1lbnRzQnlUYWdOYW1lKFwiYm9keVwiKS5zdHlsZS5iYWNrZ3JvdW5kQ29sb3IgPSBcImJsdWVcIjtcbiAgICBjb25zb2xlLmxvZyhcImhpXCIpO1xuICAgIHNldElzTGlnaHQoIWlzTGlnaHQpO1xuICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKFwiYmdMaWdodFRoZW1lXCIsIGlzTGlnaHQpO1xuICB9O1xuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgY29uc3QgYmdHZXRMaWdodCA9IGxvY2FsU3RvcmFnZS5nZXRJdGVtKFwiYmdMaWdodFRoZW1lXCIpO1xuICAgIHNldElzTGlnaHQoYmdHZXRMaWdodCk7XG4gIH0sIFtdKTtcbiAgcmV0dXJuIChcbiAgICA8TGF5b3V0IGhvbWU+XG4gICAgICA8ZGl2XG4gICAgICAgIGNsYXNzTmFtZT1cImNoYW5nZUJhY2tncm91bmRcIlxuICAgICAgICBzdHlsZT17e1xuICAgICAgICAgIGhlaWdodDogMjUsXG4gICAgICAgICAgd2lkdGg6IDI1LFxuICAgICAgICAgIGN1cnNvcjogXCJwb2ludGVyXCIsXG4gICAgICAgICAgcG9zaXRpb246IFwiYWJzb2x1dGVcIixcbiAgICAgICAgICBiYWNrZ3JvdW5kQ29sb3I6IGAke2lzTGlnaHQgPyBcImJsYWNrXCIgOiBcIndoaXRlXCJ9YCxcbiAgICAgICAgfX1cbiAgICAgICAgb25DbGljaz17Y2hhbmdlQmFja2dyb3VuZH1cbiAgICAgID48L2Rpdj5cblxuICAgICAgPHN0eWxlIGpzeCBnbG9iYWw+e2BcbiAgICAgICAgYm9keSB7XG4gICAgICAgICAgYmFja2dyb3VuZDogJHtpc0xpZ2h0ID8gXCJ3aGl0ZVwiIDogXCJibGFja1wifTtcbiAgICAgICAgICBjb2xvcjogJHtpc0xpZ2h0ID8gXCJibGFja1wiIDogXCJ3aGl0ZVwifTtcbiAgICAgICAgfVxuICAgICAgYH08L3N0eWxlPlxuXG4gICAgICA8SGVhZD5cbiAgICAgICAgPHRpdGxlPntzaXRlVGl0bGV9PC90aXRsZT5cbiAgICAgIDwvSGVhZD5cbiAgICAgIDxzZWN0aW9uIGNsYXNzTmFtZT17YCR7dXRpbFN0eWxlcy5oZWFkaW5nTWR9ICR7dXRpbFN0eWxlcy5wYWRkaW5nMXB4fWB9PlxuICAgICAgICA8Q29udGVudCBjaGFuZ2VCYWNrZ3JvdW5kPXtjaGFuZ2VCYWNrZ3JvdW5kfSBpc0xpZ2h0IC8+XG4gICAgICA8L3NlY3Rpb24+XG4gICAgPC9MYXlvdXQ+XG4gICk7XG59XG4iXX0= */\n/*@ sourceURL=D:\\\\Desktop\\\\urlencoder\\\\pages\\\\index.js */")), __jsx(next_head__WEBPACK_IMPORTED_MODULE_3___default.a, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 42,
      columnNumber: 7
    }
  }, __jsx("title", {
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default.a.dynamic([["2338821322", [isLight ? "white" : "black", isLight ? "black" : "white"]]]),
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 43,
      columnNumber: 9
    }
  }, _components_layout__WEBPACK_IMPORTED_MODULE_4__["siteTitle"])), __jsx("section", {
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default.a.dynamic([["2338821322", [isLight ? "white" : "black", isLight ? "black" : "white"]]]) + " " + "".concat(_styles_utils_module_css__WEBPACK_IMPORTED_MODULE_5___default.a.headingMd, " ").concat(_styles_utils_module_css__WEBPACK_IMPORTED_MODULE_5___default.a.padding1px),
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 45,
      columnNumber: 7
    }
  }, __jsx(_components_content__WEBPACK_IMPORTED_MODULE_6__["default"], {
    changeBackground: changeBackground,
    isLight: true,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 46,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvaW5kZXguanMiXSwibmFtZXMiOlsiSG9tZSIsInVzZVN0YXRlIiwiaXNMaWdodCIsInNldElzTGlnaHQiLCJjaGFuZ2VCYWNrZ3JvdW5kIiwiY29uc29sZSIsImxvZyIsImxvY2FsU3RvcmFnZSIsInNldEl0ZW0iLCJ1c2VFZmZlY3QiLCJiZ0dldExpZ2h0IiwiZ2V0SXRlbSIsImhlaWdodCIsIndpZHRoIiwiY3Vyc29yIiwicG9zaXRpb24iLCJiYWNrZ3JvdW5kQ29sb3IiLCJzaXRlVGl0bGUiLCJ1dGlsU3R5bGVzIiwiaGVhZGluZ01kIiwicGFkZGluZzFweCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFZSxTQUFTQSxJQUFULE9BQWtCO0FBQUE7O0FBQUE7O0FBQUEsa0JBQ0RDLHNEQUFRLENBQUMsSUFBRCxDQURQO0FBQUEsTUFDeEJDLE9BRHdCO0FBQUEsTUFDZkMsVUFEZTs7QUFHL0IsTUFBTUMsZ0JBQWdCLEdBQUcsU0FBbkJBLGdCQUFtQixHQUFNO0FBQzdCO0FBQ0FDLFdBQU8sQ0FBQ0MsR0FBUixDQUFZLElBQVo7QUFDQUgsY0FBVSxDQUFDLENBQUNELE9BQUYsQ0FBVjtBQUNBSyxnQkFBWSxDQUFDQyxPQUFiLENBQXFCLGNBQXJCLEVBQXFDTixPQUFyQztBQUNELEdBTEQ7O0FBT0FPLHlEQUFTLENBQUMsWUFBTTtBQUNkLFFBQU1DLFVBQVUsR0FBR0gsWUFBWSxDQUFDSSxPQUFiLENBQXFCLGNBQXJCLENBQW5CO0FBQ0FSLGNBQVUsQ0FBQ08sVUFBRCxDQUFWO0FBQ0QsR0FIUSxFQUdOLEVBSE0sQ0FBVDtBQUlBLFNBQ0UsTUFBQywwREFBRDtBQUFRLFFBQUksTUFBWjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0U7QUFFRSxTQUFLLEVBQUU7QUFDTEUsWUFBTSxFQUFFLEVBREg7QUFFTEMsV0FBSyxFQUFFLEVBRkY7QUFHTEMsWUFBTSxFQUFFLFNBSEg7QUFJTEMsY0FBUSxFQUFFLFVBSkw7QUFLTEMscUJBQWUsWUFBS2QsT0FBTyxHQUFHLE9BQUgsR0FBYSxPQUF6QjtBQUxWLEtBRlQ7QUFTRSxXQUFPLEVBQUVFLGdCQVRYO0FBQUEsZ0dBY2tCRixPQUFPLEdBQUcsT0FBSCxHQUFhLE9BZHRDLEVBZWFBLE9BQU8sR0FBRyxPQUFILEdBQWEsT0FmakMsYUFDWSxrQkFEWjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBREY7QUFBQTtBQUFBLGNBZW9CQSxPQUFPLEdBQUcsT0FBSCxHQUFhLE9BZnhDLEVBZ0JlQSxPQUFPLEdBQUcsT0FBSCxHQUFhLE9BaEJuQztBQUFBO0FBQUEsK0JBZW9CQSxPQUFPLEdBQUcsT0FBSCxHQUFhLE9BZnhDLG9CQWdCZUEsT0FBTyxHQUFHLE9BQUgsR0FBYSxPQWhCbkMsazBFQW9CRSxNQUFDLGdEQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRTtBQUFBLGdHQU5nQkEsT0FBTyxHQUFHLE9BQUgsR0FBYSxPQU1wQyxFQUxXQSxPQUFPLEdBQUcsT0FBSCxHQUFhLE9BSy9CO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FBUWUsNERBQVIsQ0FERixDQXBCRixFQXVCRTtBQUFBLGdHQVJrQmYsT0FBTyxHQUFHLE9BQUgsR0FBYSxPQVF0QyxFQVBhQSxPQUFPLEdBQUcsT0FBSCxHQUFhLE9BT2pDLHVCQUF1QmdCLCtEQUFVLENBQUNDLFNBQWxDLGNBQStDRCwrREFBVSxDQUFDRSxVQUExRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0UsTUFBQywyREFBRDtBQUFTLG9CQUFnQixFQUFFaEIsZ0JBQTNCO0FBQTZDLFdBQU8sTUFBcEQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQURGLENBdkJGLENBREY7QUE2QkQ7O0dBM0N1QkosSTs7S0FBQUEsSSIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9pbmRleC5mNDI1N2YwMzYzYjA0ZTgwMjVjYS5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IEhlYWQgZnJvbSBcIm5leHQvaGVhZFwiO1xuaW1wb3J0IExheW91dCwgeyBzaXRlVGl0bGUgfSBmcm9tIFwiLi4vY29tcG9uZW50cy9sYXlvdXRcIjtcbmltcG9ydCB1dGlsU3R5bGVzIGZyb20gXCIuLi9zdHlsZXMvdXRpbHMubW9kdWxlLmNzc1wiO1xuaW1wb3J0IHsgdXNlU3RhdGUsIHVzZUVmZmVjdCB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IENvbnRlbnQgZnJvbSBcIi4uL2NvbXBvbmVudHMvY29udGVudFwiO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBIb21lKHt9KSB7XG4gIGNvbnN0IFtpc0xpZ2h0LCBzZXRJc0xpZ2h0XSA9IHVzZVN0YXRlKHRydWUpO1xuXG4gIGNvbnN0IGNoYW5nZUJhY2tncm91bmQgPSAoKSA9PiB7XG4gICAgLy8gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeVRhZ05hbWUoXCJib2R5XCIpLnN0eWxlLmJhY2tncm91bmRDb2xvciA9IFwiYmx1ZVwiO1xuICAgIGNvbnNvbGUubG9nKFwiaGlcIik7XG4gICAgc2V0SXNMaWdodCghaXNMaWdodCk7XG4gICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oXCJiZ0xpZ2h0VGhlbWVcIiwgaXNMaWdodCk7XG4gIH07XG5cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBjb25zdCBiZ0dldExpZ2h0ID0gbG9jYWxTdG9yYWdlLmdldEl0ZW0oXCJiZ0xpZ2h0VGhlbWVcIik7XG4gICAgc2V0SXNMaWdodChiZ0dldExpZ2h0KTtcbiAgfSwgW10pO1xuICByZXR1cm4gKFxuICAgIDxMYXlvdXQgaG9tZT5cbiAgICAgIDxkaXZcbiAgICAgICAgY2xhc3NOYW1lPVwiY2hhbmdlQmFja2dyb3VuZFwiXG4gICAgICAgIHN0eWxlPXt7XG4gICAgICAgICAgaGVpZ2h0OiAyNSxcbiAgICAgICAgICB3aWR0aDogMjUsXG4gICAgICAgICAgY3Vyc29yOiBcInBvaW50ZXJcIixcbiAgICAgICAgICBwb3NpdGlvbjogXCJhYnNvbHV0ZVwiLFxuICAgICAgICAgIGJhY2tncm91bmRDb2xvcjogYCR7aXNMaWdodCA/IFwiYmxhY2tcIiA6IFwid2hpdGVcIn1gLFxuICAgICAgICB9fVxuICAgICAgICBvbkNsaWNrPXtjaGFuZ2VCYWNrZ3JvdW5kfVxuICAgICAgPjwvZGl2PlxuXG4gICAgICA8c3R5bGUganN4IGdsb2JhbD57YFxuICAgICAgICBib2R5IHtcbiAgICAgICAgICBiYWNrZ3JvdW5kOiAke2lzTGlnaHQgPyBcIndoaXRlXCIgOiBcImJsYWNrXCJ9O1xuICAgICAgICAgIGNvbG9yOiAke2lzTGlnaHQgPyBcImJsYWNrXCIgOiBcIndoaXRlXCJ9O1xuICAgICAgICB9XG4gICAgICBgfTwvc3R5bGU+XG5cbiAgICAgIDxIZWFkPlxuICAgICAgICA8dGl0bGU+e3NpdGVUaXRsZX08L3RpdGxlPlxuICAgICAgPC9IZWFkPlxuICAgICAgPHNlY3Rpb24gY2xhc3NOYW1lPXtgJHt1dGlsU3R5bGVzLmhlYWRpbmdNZH0gJHt1dGlsU3R5bGVzLnBhZGRpbmcxcHh9YH0+XG4gICAgICAgIDxDb250ZW50IGNoYW5nZUJhY2tncm91bmQ9e2NoYW5nZUJhY2tncm91bmR9IGlzTGlnaHQgLz5cbiAgICAgIDwvc2VjdGlvbj5cbiAgICA8L0xheW91dD5cbiAgKTtcbn1cbiJdLCJzb3VyY2VSb290IjoiIn0=