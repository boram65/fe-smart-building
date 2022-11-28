"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Home; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _components_roomStat__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/roomStat */ \"./components/roomStat.js\");\n/* harmony import */ var _components_detailStat__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/detailStat */ \"./components/detailStat.js\");\n/* harmony import */ var recharts__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! recharts */ \"./node_modules/recharts/es6/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);\n\nvar _s = $RefreshSig$();\n\n\n\n\nfunction Home() {\n    _s();\n    const [ready, setReady] = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(false);\n    const [data, setData] = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)([]);\n    const [choice, setChoice] = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(0);\n    const dataChart = [\n        {\n            name: \"Page A\",\n            uv: 400,\n            pv: 2400,\n            amt: 2400\n        }\n    ];\n    const detailData = (Rnum)=>{\n        setChoice(Rnum);\n    };\n    const getAPI = ()=>{\n        fetch(\"api/test\").then((response)=>response.json()).then((json)=>{\n            setData([]);\n            for(let i = 0; i < json.co2.length; i++){\n                let temp = {\n                    co2: json.co2[i].co2,\n                    hum: json.hum[i].hum,\n                    lit: json.lit[i].lit,\n                    pir: json.pir[i].pir,\n                    tem: json.tem[i].tem,\n                    room: json.co2[i].room,\n                    cTime: json.co2[i].createTime\n                };\n                setData((data)=>[\n                        ...data,\n                        temp\n                    ]);\n            }\n        }).then(()=>{\n            setReady(true);\n        });\n    };\n    (0,react__WEBPACK_IMPORTED_MODULE_3__.useEffect)(()=>{\n        const timer = setInterval(()=>{\n            getAPI();\n        }, 5000);\n    }, []);\n    return ready !== true ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        children: \"로딩중\"\n    }, void 0, false, {\n        fileName: \"/Users/choidowon/Desktop/fe-samet_building/fe-smart-building/pages/index.js\",\n        lineNumber: 46,\n        columnNumber: 5\n    }, this) : /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"flex flex-row w-screen h-full\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"bg-gradient-to-t from-violet-300 to-indigo-300 h-[100vh] w-[40vw]\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"h-[50vh] bg-gray-200\",\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(recharts__WEBPACK_IMPORTED_MODULE_4__.BarChart, {\n                            width: 600,\n                            height: 300,\n                            data: data,\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(recharts__WEBPACK_IMPORTED_MODULE_4__.XAxis, {\n                                    dataKey: \"name\",\n                                    stroke: \"#8884d8\"\n                                }, void 0, false, {\n                                    fileName: \"/Users/choidowon/Desktop/fe-samet_building/fe-smart-building/pages/index.js\",\n                                    lineNumber: 52,\n                                    columnNumber: 13\n                                }, this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(recharts__WEBPACK_IMPORTED_MODULE_4__.YAxis, {}, void 0, false, {\n                                    fileName: \"/Users/choidowon/Desktop/fe-samet_building/fe-smart-building/pages/index.js\",\n                                    lineNumber: 53,\n                                    columnNumber: 13\n                                }, this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(recharts__WEBPACK_IMPORTED_MODULE_4__.Tooltip, {}, void 0, false, {\n                                    fileName: \"/Users/choidowon/Desktop/fe-samet_building/fe-smart-building/pages/index.js\",\n                                    lineNumber: 54,\n                                    columnNumber: 13\n                                }, this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(recharts__WEBPACK_IMPORTED_MODULE_4__.CartesianGrid, {\n                                    stroke: \"#ccc\",\n                                    strokeDasharray: \"5 5\"\n                                }, void 0, false, {\n                                    fileName: \"/Users/choidowon/Desktop/fe-samet_building/fe-smart-building/pages/index.js\",\n                                    lineNumber: 55,\n                                    columnNumber: 13\n                                }, this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(recharts__WEBPACK_IMPORTED_MODULE_4__.Bar, {\n                                    dataKey: \"uv\",\n                                    fill: \"#8884d8\",\n                                    barSize: 30\n                                }, void 0, false, {\n                                    fileName: \"/Users/choidowon/Desktop/fe-samet_building/fe-smart-building/pages/index.js\",\n                                    lineNumber: 56,\n                                    columnNumber: 13\n                                }, this)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"/Users/choidowon/Desktop/fe-samet_building/fe-smart-building/pages/index.js\",\n                            lineNumber: 51,\n                            columnNumber: 11\n                        }, this)\n                    }, void 0, false, {\n                        fileName: \"/Users/choidowon/Desktop/fe-samet_building/fe-smart-building/pages/index.js\",\n                        lineNumber: 50,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"h-[50vh] bg-blue-200\",\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_detailStat__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                            data: data[choice]\n                        }, void 0, false, {\n                            fileName: \"/Users/choidowon/Desktop/fe-samet_building/fe-smart-building/pages/index.js\",\n                            lineNumber: 60,\n                            columnNumber: 11\n                        }, this)\n                    }, void 0, false, {\n                        fileName: \"/Users/choidowon/Desktop/fe-samet_building/fe-smart-building/pages/index.js\",\n                        lineNumber: 59,\n                        columnNumber: 9\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/choidowon/Desktop/fe-samet_building/fe-smart-building/pages/index.js\",\n                lineNumber: 49,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"bg-gradient-to-b from-violet-300 bg-indigo-300 h-[100vh] w-[60vw] flex flex-wrap justify-start overflow-auto\",\n                children: data.map((e, idx)=>{\n                    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_roomStat__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {\n                        data: e,\n                        Rnum: idx,\n                        detailData: detailData\n                    }, idx, false, {\n                        fileName: \"/Users/choidowon/Desktop/fe-samet_building/fe-smart-building/pages/index.js\",\n                        lineNumber: 66,\n                        columnNumber: 13\n                    }, this);\n                })\n            }, void 0, false, {\n                fileName: \"/Users/choidowon/Desktop/fe-samet_building/fe-smart-building/pages/index.js\",\n                lineNumber: 63,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/choidowon/Desktop/fe-samet_building/fe-smart-building/pages/index.js\",\n        lineNumber: 48,\n        columnNumber: 5\n    }, this);\n}\n_s(Home, \"gLz3fS9PiEUk9vm39tPTfMpxQcM=\");\n_c = Home;\nvar _c;\n$RefreshReg$(_c, \"Home\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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dUIzQztLQUFBQSIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9wYWdlcy9pbmRleC5qcz9iZWU3Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSb29tU3RhdCBmcm9tIFwiLi4vY29tcG9uZW50cy9yb29tU3RhdFwiO1xuaW1wb3J0IERldGFpbFN0YXQgZnJvbSBcIi4uL2NvbXBvbmVudHMvZGV0YWlsU3RhdFwiO1xuaW1wb3J0IHsgQmFyQ2hhcnQsIEJhciwgWEF4aXMsIFlBeGlzLCBUb29sdGlwLCBDYXJ0ZXNpYW5HcmlkIH0gZnJvbSBcInJlY2hhcnRzXCI7XG5pbXBvcnQgeyB1c2VFZmZlY3QsIHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEhvbWUoKSB7XG4gIGNvbnN0IFtyZWFkeSwgc2V0UmVhZHldID0gdXNlU3RhdGUoZmFsc2UpO1xuICBjb25zdCBbZGF0YSwgc2V0RGF0YV0gPSB1c2VTdGF0ZShbXSk7XG4gIGNvbnN0IFtjaG9pY2UsIHNldENob2ljZV0gPSB1c2VTdGF0ZSgwKTtcbiAgY29uc3QgZGF0YUNoYXJ0ID0gW3sgbmFtZTogXCJQYWdlIEFcIiwgdXY6IDQwMCwgcHY6IDI0MDAsIGFtdDogMjQwMCB9XTtcblxuICBjb25zdCBkZXRhaWxEYXRhID0gUm51bSA9PiB7XG4gICAgc2V0Q2hvaWNlKFJudW0pO1xuICB9O1xuXG4gIGNvbnN0IGdldEFQSSA9ICgpID0+IHtcbiAgICBmZXRjaChcImFwaS90ZXN0XCIpXG4gICAgICAudGhlbihyZXNwb25zZSA9PiByZXNwb25zZS5qc29uKCkpXG4gICAgICAudGhlbihqc29uID0+IHtcbiAgICAgICAgc2V0RGF0YShbXSk7XG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwganNvbi5jbzIubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICBsZXQgdGVtcCA9IHtcbiAgICAgICAgICAgIGNvMjoganNvbi5jbzJbaV0uY28yLFxuICAgICAgICAgICAgaHVtOiBqc29uLmh1bVtpXS5odW0sXG4gICAgICAgICAgICBsaXQ6IGpzb24ubGl0W2ldLmxpdCxcbiAgICAgICAgICAgIHBpcjoganNvbi5waXJbaV0ucGlyLFxuICAgICAgICAgICAgdGVtOiBqc29uLnRlbVtpXS50ZW0sXG4gICAgICAgICAgICByb29tOiBqc29uLmNvMltpXS5yb29tLFxuICAgICAgICAgICAgY1RpbWU6IGpzb24uY28yW2ldLmNyZWF0ZVRpbWUsXG4gICAgICAgICAgfTtcbiAgICAgICAgICBzZXREYXRhKGRhdGEgPT4gWy4uLmRhdGEsIHRlbXBdKTtcbiAgICAgICAgfVxuICAgICAgfSlcbiAgICAgIC50aGVuKCgpID0+IHtcbiAgICAgICAgc2V0UmVhZHkodHJ1ZSk7XG4gICAgICB9KTtcbiAgfTtcblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGNvbnN0IHRpbWVyID0gc2V0SW50ZXJ2YWwoKCkgPT4ge1xuICAgICAgZ2V0QVBJKCk7XG4gICAgfSwgNTAwMCk7XG4gIH0sIFtdKTtcblxuICByZXR1cm4gcmVhZHkgIT09IHRydWUgPyAoXG4gICAgPGRpdj7roZzrlKnspJE8L2Rpdj5cbiAgKSA6IChcbiAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggZmxleC1yb3cgdy1zY3JlZW4gaC1mdWxsXCI+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImJnLWdyYWRpZW50LXRvLXQgZnJvbS12aW9sZXQtMzAwIHRvLWluZGlnby0zMDAgaC1bMTAwdmhdIHctWzQwdnddXCI+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaC1bNTB2aF0gYmctZ3JheS0yMDBcIj5cbiAgICAgICAgICA8QmFyQ2hhcnQgd2lkdGg9ezYwMH0gaGVpZ2h0PXszMDB9IGRhdGE9e2RhdGF9PlxuICAgICAgICAgICAgPFhBeGlzIGRhdGFLZXk9XCJuYW1lXCIgc3Ryb2tlPVwiIzg4ODRkOFwiIC8+XG4gICAgICAgICAgICA8WUF4aXMgLz5cbiAgICAgICAgICAgIDxUb29sdGlwIC8+XG4gICAgICAgICAgICA8Q2FydGVzaWFuR3JpZCBzdHJva2U9XCIjY2NjXCIgc3Ryb2tlRGFzaGFycmF5PVwiNSA1XCIgLz5cbiAgICAgICAgICAgIDxCYXIgZGF0YUtleT1cInV2XCIgZmlsbD1cIiM4ODg0ZDhcIiBiYXJTaXplPXszMH0gLz5cbiAgICAgICAgICA8L0JhckNoYXJ0PlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJoLVs1MHZoXSBiZy1ibHVlLTIwMFwiPlxuICAgICAgICAgIDxEZXRhaWxTdGF0IGRhdGE9e2RhdGFbY2hvaWNlXX0gLz5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2Rpdj5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYmctZ3JhZGllbnQtdG8tYiBmcm9tLXZpb2xldC0zMDAgYmctaW5kaWdvLTMwMCAgaC1bMTAwdmhdIHctWzYwdnddIGZsZXggZmxleC13cmFwIGp1c3RpZnktc3RhcnQgb3ZlcmZsb3ctYXV0b1wiPlxuICAgICAgICB7ZGF0YS5tYXAoKGUsIGlkeCkgPT4ge1xuICAgICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICA8Um9vbVN0YXQgZGF0YT17ZX0gUm51bT17aWR4fSBkZXRhaWxEYXRhPXtkZXRhaWxEYXRhfSBrZXk9e2lkeH0gLz5cbiAgICAgICAgICApO1xuICAgICAgICB9KX1cbiAgICAgIDwvZGl2PlxuICAgIDwvZGl2PlxuICApO1xufVxuIl0sIm5hbWVzIjpbIlJvb21TdGF0IiwiRGV0YWlsU3RhdCIsIkJhckNoYXJ0IiwiQmFyIiwiWEF4aXMiLCJZQXhpcyIsIlRvb2x0aXAiLCJDYXJ0ZXNpYW5HcmlkIiwidXNlRWZmZWN0IiwidXNlU3RhdGUiLCJIb21lIiwicmVhZHkiLCJzZXRSZWFkeSIsImRhdGEiLCJzZXREYXRhIiwiY2hvaWNlIiwic2V0Q2hvaWNlIiwiZGF0YUNoYXJ0IiwibmFtZSIsInV2IiwicHYiLCJhbXQiLCJkZXRhaWxEYXRhIiwiUm51bSIsImdldEFQSSIsImZldGNoIiwidGhlbiIsInJlc3BvbnNlIiwianNvbiIsImkiLCJjbzIiLCJsZW5ndGgiLCJ0ZW1wIiwiaHVtIiwibGl0IiwicGlyIiwidGVtIiwicm9vbSIsImNUaW1lIiwiY3JlYXRlVGltZSIsInRpbWVyIiwic2V0SW50ZXJ2YWwiLCJkaXYiLCJjbGFzc05hbWUiLCJ3aWR0aCIsImhlaWdodCIsImRhdGFLZXkiLCJzdHJva2UiLCJzdHJva2VEYXNoYXJyYXkiLCJmaWxsIiwiYmFyU2l6ZSIsIm1hcCIsImUiLCJpZHgiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/index.js\n"));

/***/ })

});