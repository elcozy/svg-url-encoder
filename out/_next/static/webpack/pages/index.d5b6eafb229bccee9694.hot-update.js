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
      width: 50,
      height: 50,
      borderRadius: 10,
      cursor: "pointer",
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
  }, "body{background:".concat(isLight ? "white" : "black", ";color:").concat(isLight ? "black" : "white", ";}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkQ6XFxEZXNrdG9wXFx1cmxlbmNvZGVyXFxwYWdlc1xcaW5kZXguanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBeUN5QixBQUdtRCx3Q0FDTCxtQ0FDckMiLCJmaWxlIjoiRDpcXERlc2t0b3BcXHVybGVuY29kZXJcXHBhZ2VzXFxpbmRleC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBIZWFkIGZyb20gXCJuZXh0L2hlYWRcIjtcbmltcG9ydCBMYXlvdXQsIHsgc2l0ZVRpdGxlIH0gZnJvbSBcIi4uL2NvbXBvbmVudHMvbGF5b3V0XCI7XG5pbXBvcnQgdXRpbFN0eWxlcyBmcm9tIFwiLi4vc3R5bGVzL3V0aWxzLm1vZHVsZS5jc3NcIjtcbmltcG9ydCB7IHVzZVN0YXRlLCB1c2VFZmZlY3QgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCBDb250ZW50IGZyb20gXCIuLi9jb21wb25lbnRzL2NvbnRlbnRcIjtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gSG9tZSh7fSkge1xuICBjb25zdCBbaXNMaWdodCwgc2V0SXNMaWdodF0gPSB1c2VTdGF0ZSh0cnVlKTtcblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGNvbnN0IGJnR2V0TGlnaHQgPSBsb2NhbFN0b3JhZ2UuZ2V0SXRlbShcImJnTGlnaHRUaGVtZVwiKTtcbiAgICBzZXRJc0xpZ2h0KGJnR2V0TGlnaHQgPT09IFwidHJ1ZVwiKTtcbiAgICBjb25zb2xlLmxvZyhiZ0dldExpZ2h0LCBpc0xpZ2h0KTtcbiAgfSwgW10pO1xuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oXCJiZ0xpZ2h0VGhlbWVcIiwgaXNMaWdodCk7XG4gIH0sIFtpc0xpZ2h0XSk7XG4gIGNvbnNvbGUubG9nKGlzTGlnaHQpO1xuXG4gIHJldHVybiAoXG4gICAgPExheW91dCBob21lPlxuICAgICAgPGRpdlxuICAgICAgICBjbGFzc05hbWU9XCJjaGFuZ2VCYWNrZ3JvdW5kXCJcbiAgICAgICAgc3R5bGU9e3tcbiAgICAgICAgICB3aWR0aDogNTAsXG4gICAgICAgICAgaGVpZ2h0OiA1MCxcbiAgICAgICAgICBib3JkZXJSYWRpdXM6IDEwLFxuICAgICAgICAgIGN1cnNvcjogXCJwb2ludGVyXCIsXG4gICAgICAgICAgcG9zaXRpb246IFwiYWJzb2x1dGVcIixcbiAgICAgICAgICBkaXNwbGF5OiBcImZsZXhcIixcbiAgICAgICAgICBhbGlnbkl0ZW1zOiBcImNlbnRlclwiLFxuICAgICAgICAgIGZvbnRTaXplOiBgMS41cmVtYCxcbiAgICAgICAgICBqdXN0aWZ5Q29udGVudDogXCJjZW50ZXJcIixcbiAgICAgICAgICBiYWNrZ3JvdW5kQ29sb3I6IGAke2lzTGlnaHQgPyBcImJsYWNrXCIgOiBcIndoaXRlXCJ9YCxcbiAgICAgICAgfX1cbiAgICAgICAgb25DbGljaz17KCkgPT4gc2V0SXNMaWdodCghaXNMaWdodCl9XG4gICAgICA+XG4gICAgICAgIHtpc0xpZ2h0ID8gXCLwn4ybXCIgOiBcIvCfjJ5cIn1cbiAgICAgIDwvZGl2PlxuXG4gICAgICA8c3R5bGUganN4IGdsb2JhbD57YFxuICAgICAgICBib2R5IHtcbiAgICAgICAgICBiYWNrZ3JvdW5kOiAke2lzTGlnaHQgPyBcIndoaXRlXCIgOiBcImJsYWNrXCJ9O1xuICAgICAgICAgIGNvbG9yOiAke2lzTGlnaHQgPyBcImJsYWNrXCIgOiBcIndoaXRlXCJ9O1xuICAgICAgICB9XG4gICAgICBgfTwvc3R5bGU+XG5cbiAgICAgIDxIZWFkPlxuICAgICAgICA8dGl0bGU+e3NpdGVUaXRsZX08L3RpdGxlPlxuICAgICAgPC9IZWFkPlxuICAgICAgPENvbnRlbnQgaXNMaWdodD17aXNMaWdodH0gLz5cbiAgICA8L0xheW91dD5cbiAgKTtcbn1cbiJdfQ== */\n/*@ sourceURL=D:\\\\Desktop\\\\urlencoder\\\\pages\\\\index.js */")), __jsx(next_head__WEBPACK_IMPORTED_MODULE_3___default.a, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 49,
      columnNumber: 7
    }
  }, __jsx("title", {
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default.a.dynamic([["2338821322", [isLight ? "white" : "black", isLight ? "black" : "white"]]]),
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 50,
      columnNumber: 9
    }
  }, _components_layout__WEBPACK_IMPORTED_MODULE_4__["siteTitle"])), __jsx(_components_content__WEBPACK_IMPORTED_MODULE_6__["default"], {
    isLight: isLight,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 52,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvaW5kZXguanMiXSwibmFtZXMiOlsiSG9tZSIsInVzZVN0YXRlIiwiaXNMaWdodCIsInNldElzTGlnaHQiLCJ1c2VFZmZlY3QiLCJiZ0dldExpZ2h0IiwibG9jYWxTdG9yYWdlIiwiZ2V0SXRlbSIsImNvbnNvbGUiLCJsb2ciLCJzZXRJdGVtIiwid2lkdGgiLCJoZWlnaHQiLCJib3JkZXJSYWRpdXMiLCJjdXJzb3IiLCJwb3NpdGlvbiIsImRpc3BsYXkiLCJhbGlnbkl0ZW1zIiwiZm9udFNpemUiLCJqdXN0aWZ5Q29udGVudCIsImJhY2tncm91bmRDb2xvciIsInNpdGVUaXRsZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFZSxTQUFTQSxJQUFULE9BQWtCO0FBQUE7O0FBQUE7O0FBQUEsa0JBQ0RDLHNEQUFRLENBQUMsSUFBRCxDQURQO0FBQUEsTUFDeEJDLE9BRHdCO0FBQUEsTUFDZkMsVUFEZTs7QUFHL0JDLHlEQUFTLENBQUMsWUFBTTtBQUNkLFFBQU1DLFVBQVUsR0FBR0MsWUFBWSxDQUFDQyxPQUFiLENBQXFCLGNBQXJCLENBQW5CO0FBQ0FKLGNBQVUsQ0FBQ0UsVUFBVSxLQUFLLE1BQWhCLENBQVY7QUFDQUcsV0FBTyxDQUFDQyxHQUFSLENBQVlKLFVBQVosRUFBd0JILE9BQXhCO0FBQ0QsR0FKUSxFQUlOLEVBSk0sQ0FBVDtBQU1BRSx5REFBUyxDQUFDLFlBQU07QUFDZEUsZ0JBQVksQ0FBQ0ksT0FBYixDQUFxQixjQUFyQixFQUFxQ1IsT0FBckM7QUFDRCxHQUZRLEVBRU4sQ0FBQ0EsT0FBRCxDQUZNLENBQVQ7QUFHQU0sU0FBTyxDQUFDQyxHQUFSLENBQVlQLE9BQVo7QUFFQSxTQUNFLE1BQUMsMERBQUQ7QUFBUSxRQUFJLE1BQVo7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFO0FBRUUsU0FBSyxFQUFFO0FBQ0xTLFdBQUssRUFBRSxFQURGO0FBRUxDLFlBQU0sRUFBRSxFQUZIO0FBR0xDLGtCQUFZLEVBQUUsRUFIVDtBQUlMQyxZQUFNLEVBQUUsU0FKSDtBQUtMQyxjQUFRLEVBQUUsVUFMTDtBQU1MQyxhQUFPLEVBQUUsTUFOSjtBQU9MQyxnQkFBVSxFQUFFLFFBUFA7QUFRTEMsY0FBUSxVQVJIO0FBU0xDLG9CQUFjLEVBQUUsUUFUWDtBQVVMQyxxQkFBZSxZQUFLbEIsT0FBTyxHQUFHLE9BQUgsR0FBYSxPQUF6QjtBQVZWLEtBRlQ7QUFjRSxXQUFPLEVBQUU7QUFBQSxhQUFNQyxVQUFVLENBQUMsQ0FBQ0QsT0FBRixDQUFoQjtBQUFBLEtBZFg7QUFBQSxnR0FxQmtCQSxPQUFPLEdBQUcsT0FBSCxHQUFhLE9BckJ0QyxFQXNCYUEsT0FBTyxHQUFHLE9BQUgsR0FBYSxPQXRCakMsYUFDWSxrQkFEWjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBZ0JHQSxPQUFPLEdBQUcsSUFBSCxHQUFVLElBaEJwQixDQURGO0FBQUE7QUFBQSxjQXNCb0JBLE9BQU8sR0FBRyxPQUFILEdBQWEsT0F0QnhDLEVBdUJlQSxPQUFPLEdBQUcsT0FBSCxHQUFhLE9BdkJuQztBQUFBO0FBQUEsK0JBc0JvQkEsT0FBTyxHQUFHLE9BQUgsR0FBYSxPQXRCeEMsb0JBdUJlQSxPQUFPLEdBQUcsT0FBSCxHQUFhLE9BdkJuQyxzM0VBMkJFLE1BQUMsZ0RBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFO0FBQUEsZ0dBTmdCQSxPQUFPLEdBQUcsT0FBSCxHQUFhLE9BTXBDLEVBTFdBLE9BQU8sR0FBRyxPQUFILEdBQWEsT0FLL0I7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUFRbUIsNERBQVIsQ0FERixDQTNCRixFQThCRSxNQUFDLDJEQUFEO0FBQVMsV0FBTyxFQUFFbkIsT0FBbEI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQTlCRixDQURGO0FBa0NEOztHQWhEdUJGLEk7O0tBQUFBLEkiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvaW5kZXguZDViNmVhZmIyMjliY2NlZTk2OTQuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBIZWFkIGZyb20gXCJuZXh0L2hlYWRcIjtcbmltcG9ydCBMYXlvdXQsIHsgc2l0ZVRpdGxlIH0gZnJvbSBcIi4uL2NvbXBvbmVudHMvbGF5b3V0XCI7XG5pbXBvcnQgdXRpbFN0eWxlcyBmcm9tIFwiLi4vc3R5bGVzL3V0aWxzLm1vZHVsZS5jc3NcIjtcbmltcG9ydCB7IHVzZVN0YXRlLCB1c2VFZmZlY3QgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCBDb250ZW50IGZyb20gXCIuLi9jb21wb25lbnRzL2NvbnRlbnRcIjtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gSG9tZSh7fSkge1xuICBjb25zdCBbaXNMaWdodCwgc2V0SXNMaWdodF0gPSB1c2VTdGF0ZSh0cnVlKTtcblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGNvbnN0IGJnR2V0TGlnaHQgPSBsb2NhbFN0b3JhZ2UuZ2V0SXRlbShcImJnTGlnaHRUaGVtZVwiKTtcbiAgICBzZXRJc0xpZ2h0KGJnR2V0TGlnaHQgPT09IFwidHJ1ZVwiKTtcbiAgICBjb25zb2xlLmxvZyhiZ0dldExpZ2h0LCBpc0xpZ2h0KTtcbiAgfSwgW10pO1xuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oXCJiZ0xpZ2h0VGhlbWVcIiwgaXNMaWdodCk7XG4gIH0sIFtpc0xpZ2h0XSk7XG4gIGNvbnNvbGUubG9nKGlzTGlnaHQpO1xuXG4gIHJldHVybiAoXG4gICAgPExheW91dCBob21lPlxuICAgICAgPGRpdlxuICAgICAgICBjbGFzc05hbWU9XCJjaGFuZ2VCYWNrZ3JvdW5kXCJcbiAgICAgICAgc3R5bGU9e3tcbiAgICAgICAgICB3aWR0aDogNTAsXG4gICAgICAgICAgaGVpZ2h0OiA1MCxcbiAgICAgICAgICBib3JkZXJSYWRpdXM6IDEwLFxuICAgICAgICAgIGN1cnNvcjogXCJwb2ludGVyXCIsXG4gICAgICAgICAgcG9zaXRpb246IFwiYWJzb2x1dGVcIixcbiAgICAgICAgICBkaXNwbGF5OiBcImZsZXhcIixcbiAgICAgICAgICBhbGlnbkl0ZW1zOiBcImNlbnRlclwiLFxuICAgICAgICAgIGZvbnRTaXplOiBgMS41cmVtYCxcbiAgICAgICAgICBqdXN0aWZ5Q29udGVudDogXCJjZW50ZXJcIixcbiAgICAgICAgICBiYWNrZ3JvdW5kQ29sb3I6IGAke2lzTGlnaHQgPyBcImJsYWNrXCIgOiBcIndoaXRlXCJ9YCxcbiAgICAgICAgfX1cbiAgICAgICAgb25DbGljaz17KCkgPT4gc2V0SXNMaWdodCghaXNMaWdodCl9XG4gICAgICA+XG4gICAgICAgIHtpc0xpZ2h0ID8gXCLwn4ybXCIgOiBcIvCfjJ5cIn1cbiAgICAgIDwvZGl2PlxuXG4gICAgICA8c3R5bGUganN4IGdsb2JhbD57YFxuICAgICAgICBib2R5IHtcbiAgICAgICAgICBiYWNrZ3JvdW5kOiAke2lzTGlnaHQgPyBcIndoaXRlXCIgOiBcImJsYWNrXCJ9O1xuICAgICAgICAgIGNvbG9yOiAke2lzTGlnaHQgPyBcImJsYWNrXCIgOiBcIndoaXRlXCJ9O1xuICAgICAgICB9XG4gICAgICBgfTwvc3R5bGU+XG5cbiAgICAgIDxIZWFkPlxuICAgICAgICA8dGl0bGU+e3NpdGVUaXRsZX08L3RpdGxlPlxuICAgICAgPC9IZWFkPlxuICAgICAgPENvbnRlbnQgaXNMaWdodD17aXNMaWdodH0gLz5cbiAgICA8L0xheW91dD5cbiAgKTtcbn1cbiJdLCJzb3VyY2VSb290IjoiIn0=