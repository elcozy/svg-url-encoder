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
      height: 25,
      width: 25,
      cursor: "pointer",
      position: "absolute",
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
  }, "\u263C"), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default.a, {
    id: "2338821322",
    dynamic: [isLight ? "white" : "black", isLight ? "black" : "white"],
    __self: this
  }, "body{background:".concat(isLight ? "white" : "black", ";color:").concat(isLight ? "black" : "white", ";}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkQ6XFxEZXNrdG9wXFx1cmxlbmNvZGVyXFxwYWdlc1xcaW5kZXguanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBb0N5QixBQUdtRCx3Q0FDTCxtQ0FDckMiLCJmaWxlIjoiRDpcXERlc2t0b3BcXHVybGVuY29kZXJcXHBhZ2VzXFxpbmRleC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBIZWFkIGZyb20gXCJuZXh0L2hlYWRcIjtcbmltcG9ydCBMYXlvdXQsIHsgc2l0ZVRpdGxlIH0gZnJvbSBcIi4uL2NvbXBvbmVudHMvbGF5b3V0XCI7XG5pbXBvcnQgdXRpbFN0eWxlcyBmcm9tIFwiLi4vc3R5bGVzL3V0aWxzLm1vZHVsZS5jc3NcIjtcbmltcG9ydCB7IHVzZVN0YXRlLCB1c2VFZmZlY3QgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCBDb250ZW50IGZyb20gXCIuLi9jb21wb25lbnRzL2NvbnRlbnRcIjtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gSG9tZSh7fSkge1xuICBjb25zdCBbaXNMaWdodCwgc2V0SXNMaWdodF0gPSB1c2VTdGF0ZSh0cnVlKTtcblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGNvbnN0IGJnR2V0TGlnaHQgPSBsb2NhbFN0b3JhZ2UuZ2V0SXRlbShcImJnTGlnaHRUaGVtZVwiKTtcbiAgICBzZXRJc0xpZ2h0KGJnR2V0TGlnaHQgPT09IFwidHJ1ZVwiKTtcbiAgICBjb25zb2xlLmxvZyhiZ0dldExpZ2h0LCBpc0xpZ2h0KTtcbiAgfSwgW10pO1xuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oXCJiZ0xpZ2h0VGhlbWVcIiwgaXNMaWdodCk7XG4gIH0sIFtpc0xpZ2h0XSk7XG4gIGNvbnNvbGUubG9nKGlzTGlnaHQpO1xuXG4gIHJldHVybiAoXG4gICAgPExheW91dCBob21lPlxuICAgICAgPGRpdlxuICAgICAgICBjbGFzc05hbWU9XCJjaGFuZ2VCYWNrZ3JvdW5kXCJcbiAgICAgICAgc3R5bGU9e3tcbiAgICAgICAgICBoZWlnaHQ6IDI1LFxuICAgICAgICAgIHdpZHRoOiAyNSxcbiAgICAgICAgICBjdXJzb3I6IFwicG9pbnRlclwiLFxuICAgICAgICAgIHBvc2l0aW9uOiBcImFic29sdXRlXCIsXG4gICAgICAgICAgYmFja2dyb3VuZENvbG9yOiBgJHtpc0xpZ2h0ID8gXCJibGFja1wiIDogXCJ3aGl0ZVwifWAsXG4gICAgICAgIH19XG4gICAgICAgIG9uQ2xpY2s9eygpID0+IHNldElzTGlnaHQoIWlzTGlnaHQpfVxuICAgICAgPlxuICAgICAgICAmIzk3ODg7XG4gICAgICA8L2Rpdj5cblxuICAgICAgPHN0eWxlIGpzeCBnbG9iYWw+e2BcbiAgICAgICAgYm9keSB7XG4gICAgICAgICAgYmFja2dyb3VuZDogJHtpc0xpZ2h0ID8gXCJ3aGl0ZVwiIDogXCJibGFja1wifTtcbiAgICAgICAgICBjb2xvcjogJHtpc0xpZ2h0ID8gXCJibGFja1wiIDogXCJ3aGl0ZVwifTtcbiAgICAgICAgfVxuICAgICAgYH08L3N0eWxlPlxuXG4gICAgICA8SGVhZD5cbiAgICAgICAgPHRpdGxlPntzaXRlVGl0bGV9PC90aXRsZT5cbiAgICAgIDwvSGVhZD5cbiAgICAgIDxDb250ZW50IGlzTGlnaHQ9e2lzTGlnaHR9IC8+XG4gICAgPC9MYXlvdXQ+XG4gICk7XG59XG4iXX0= */\n/*@ sourceURL=D:\\\\Desktop\\\\urlencoder\\\\pages\\\\index.js */")), __jsx(next_head__WEBPACK_IMPORTED_MODULE_3___default.a, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 44,
      columnNumber: 7
    }
  }, __jsx("title", {
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default.a.dynamic([["2338821322", [isLight ? "white" : "black", isLight ? "black" : "white"]]]),
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 45,
      columnNumber: 9
    }
  }, _components_layout__WEBPACK_IMPORTED_MODULE_4__["siteTitle"])), __jsx(_components_content__WEBPACK_IMPORTED_MODULE_6__["default"], {
    isLight: isLight,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 47,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvaW5kZXguanMiXSwibmFtZXMiOlsiSG9tZSIsInVzZVN0YXRlIiwiaXNMaWdodCIsInNldElzTGlnaHQiLCJ1c2VFZmZlY3QiLCJiZ0dldExpZ2h0IiwibG9jYWxTdG9yYWdlIiwiZ2V0SXRlbSIsImNvbnNvbGUiLCJsb2ciLCJzZXRJdGVtIiwiaGVpZ2h0Iiwid2lkdGgiLCJjdXJzb3IiLCJwb3NpdGlvbiIsImJhY2tncm91bmRDb2xvciIsInNpdGVUaXRsZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFZSxTQUFTQSxJQUFULE9BQWtCO0FBQUE7O0FBQUE7O0FBQUEsa0JBQ0RDLHNEQUFRLENBQUMsSUFBRCxDQURQO0FBQUEsTUFDeEJDLE9BRHdCO0FBQUEsTUFDZkMsVUFEZTs7QUFHL0JDLHlEQUFTLENBQUMsWUFBTTtBQUNkLFFBQU1DLFVBQVUsR0FBR0MsWUFBWSxDQUFDQyxPQUFiLENBQXFCLGNBQXJCLENBQW5CO0FBQ0FKLGNBQVUsQ0FBQ0UsVUFBVSxLQUFLLE1BQWhCLENBQVY7QUFDQUcsV0FBTyxDQUFDQyxHQUFSLENBQVlKLFVBQVosRUFBd0JILE9BQXhCO0FBQ0QsR0FKUSxFQUlOLEVBSk0sQ0FBVDtBQU1BRSx5REFBUyxDQUFDLFlBQU07QUFDZEUsZ0JBQVksQ0FBQ0ksT0FBYixDQUFxQixjQUFyQixFQUFxQ1IsT0FBckM7QUFDRCxHQUZRLEVBRU4sQ0FBQ0EsT0FBRCxDQUZNLENBQVQ7QUFHQU0sU0FBTyxDQUFDQyxHQUFSLENBQVlQLE9BQVo7QUFFQSxTQUNFLE1BQUMsMERBQUQ7QUFBUSxRQUFJLE1BQVo7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFO0FBRUUsU0FBSyxFQUFFO0FBQ0xTLFlBQU0sRUFBRSxFQURIO0FBRUxDLFdBQUssRUFBRSxFQUZGO0FBR0xDLFlBQU0sRUFBRSxTQUhIO0FBSUxDLGNBQVEsRUFBRSxVQUpMO0FBS0xDLHFCQUFlLFlBQUtiLE9BQU8sR0FBRyxPQUFILEdBQWEsT0FBekI7QUFMVixLQUZUO0FBU0UsV0FBTyxFQUFFO0FBQUEsYUFBTUMsVUFBVSxDQUFDLENBQUNELE9BQUYsQ0FBaEI7QUFBQSxLQVRYO0FBQUEsZ0dBZ0JrQkEsT0FBTyxHQUFHLE9BQUgsR0FBYSxPQWhCdEMsRUFpQmFBLE9BQU8sR0FBRyxPQUFILEdBQWEsT0FqQmpDLGFBQ1ksa0JBRFo7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQURGO0FBQUE7QUFBQSxjQWlCb0JBLE9BQU8sR0FBRyxPQUFILEdBQWEsT0FqQnhDLEVBa0JlQSxPQUFPLEdBQUcsT0FBSCxHQUFhLE9BbEJuQztBQUFBO0FBQUEsK0JBaUJvQkEsT0FBTyxHQUFHLE9BQUgsR0FBYSxPQWpCeEMsb0JBa0JlQSxPQUFPLEdBQUcsT0FBSCxHQUFhLE9BbEJuQywwbkVBc0JFLE1BQUMsZ0RBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFO0FBQUEsZ0dBTmdCQSxPQUFPLEdBQUcsT0FBSCxHQUFhLE9BTXBDLEVBTFdBLE9BQU8sR0FBRyxPQUFILEdBQWEsT0FLL0I7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUFRYyw0REFBUixDQURGLENBdEJGLEVBeUJFLE1BQUMsMkRBQUQ7QUFBUyxXQUFPLEVBQUVkLE9BQWxCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUF6QkYsQ0FERjtBQTZCRDs7R0EzQ3VCRixJOztLQUFBQSxJIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL2luZGV4LmQxNjk5YjFmMTdkMTNmNzZlY2Q1LmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgSGVhZCBmcm9tIFwibmV4dC9oZWFkXCI7XG5pbXBvcnQgTGF5b3V0LCB7IHNpdGVUaXRsZSB9IGZyb20gXCIuLi9jb21wb25lbnRzL2xheW91dFwiO1xuaW1wb3J0IHV0aWxTdHlsZXMgZnJvbSBcIi4uL3N0eWxlcy91dGlscy5tb2R1bGUuY3NzXCI7XG5pbXBvcnQgeyB1c2VTdGF0ZSwgdXNlRWZmZWN0IH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgQ29udGVudCBmcm9tIFwiLi4vY29tcG9uZW50cy9jb250ZW50XCI7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEhvbWUoe30pIHtcbiAgY29uc3QgW2lzTGlnaHQsIHNldElzTGlnaHRdID0gdXNlU3RhdGUodHJ1ZSk7XG5cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBjb25zdCBiZ0dldExpZ2h0ID0gbG9jYWxTdG9yYWdlLmdldEl0ZW0oXCJiZ0xpZ2h0VGhlbWVcIik7XG4gICAgc2V0SXNMaWdodChiZ0dldExpZ2h0ID09PSBcInRydWVcIik7XG4gICAgY29uc29sZS5sb2coYmdHZXRMaWdodCwgaXNMaWdodCk7XG4gIH0sIFtdKTtcblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKFwiYmdMaWdodFRoZW1lXCIsIGlzTGlnaHQpO1xuICB9LCBbaXNMaWdodF0pO1xuICBjb25zb2xlLmxvZyhpc0xpZ2h0KTtcblxuICByZXR1cm4gKFxuICAgIDxMYXlvdXQgaG9tZT5cbiAgICAgIDxkaXZcbiAgICAgICAgY2xhc3NOYW1lPVwiY2hhbmdlQmFja2dyb3VuZFwiXG4gICAgICAgIHN0eWxlPXt7XG4gICAgICAgICAgaGVpZ2h0OiAyNSxcbiAgICAgICAgICB3aWR0aDogMjUsXG4gICAgICAgICAgY3Vyc29yOiBcInBvaW50ZXJcIixcbiAgICAgICAgICBwb3NpdGlvbjogXCJhYnNvbHV0ZVwiLFxuICAgICAgICAgIGJhY2tncm91bmRDb2xvcjogYCR7aXNMaWdodCA/IFwiYmxhY2tcIiA6IFwid2hpdGVcIn1gLFxuICAgICAgICB9fVxuICAgICAgICBvbkNsaWNrPXsoKSA9PiBzZXRJc0xpZ2h0KCFpc0xpZ2h0KX1cbiAgICAgID5cbiAgICAgICAgJiM5Nzg4O1xuICAgICAgPC9kaXY+XG5cbiAgICAgIDxzdHlsZSBqc3ggZ2xvYmFsPntgXG4gICAgICAgIGJvZHkge1xuICAgICAgICAgIGJhY2tncm91bmQ6ICR7aXNMaWdodCA/IFwid2hpdGVcIiA6IFwiYmxhY2tcIn07XG4gICAgICAgICAgY29sb3I6ICR7aXNMaWdodCA/IFwiYmxhY2tcIiA6IFwid2hpdGVcIn07XG4gICAgICAgIH1cbiAgICAgIGB9PC9zdHlsZT5cblxuICAgICAgPEhlYWQ+XG4gICAgICAgIDx0aXRsZT57c2l0ZVRpdGxlfTwvdGl0bGU+XG4gICAgICA8L0hlYWQ+XG4gICAgICA8Q29udGVudCBpc0xpZ2h0PXtpc0xpZ2h0fSAvPlxuICAgIDwvTGF5b3V0PlxuICApO1xufVxuIl0sInNvdXJjZVJvb3QiOiIifQ==