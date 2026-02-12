"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(() => {
var exports = {};
exports.id = "app/api/admin/settings/route";
exports.ids = ["app/api/admin/settings/route"];
exports.modules = {

/***/ "@prisma/client":
/*!*********************************!*\
  !*** external "@prisma/client" ***!
  \*********************************/
/***/ ((module) => {

module.exports = require("@prisma/client");

/***/ }),

/***/ "bcrypt":
/*!*************************!*\
  !*** external "bcrypt" ***!
  \*************************/
/***/ ((module) => {

module.exports = require("bcrypt");

/***/ }),

/***/ "../../client/components/action-async-storage.external":
/*!*******************************************************************************!*\
  !*** external "next/dist/client/components/action-async-storage.external.js" ***!
  \*******************************************************************************/
/***/ ((module) => {

module.exports = require("next/dist/client/components/action-async-storage.external.js");

/***/ }),

/***/ "../../client/components/request-async-storage.external":
/*!********************************************************************************!*\
  !*** external "next/dist/client/components/request-async-storage.external.js" ***!
  \********************************************************************************/
/***/ ((module) => {

module.exports = require("next/dist/client/components/request-async-storage.external.js");

/***/ }),

/***/ "../../client/components/static-generation-async-storage.external":
/*!******************************************************************************************!*\
  !*** external "next/dist/client/components/static-generation-async-storage.external.js" ***!
  \******************************************************************************************/
/***/ ((module) => {

module.exports = require("next/dist/client/components/static-generation-async-storage.external.js");

/***/ }),

/***/ "next/dist/compiled/next-server/app-page.runtime.dev.js":
/*!*************************************************************************!*\
  !*** external "next/dist/compiled/next-server/app-page.runtime.dev.js" ***!
  \*************************************************************************/
/***/ ((module) => {

module.exports = require("next/dist/compiled/next-server/app-page.runtime.dev.js");

/***/ }),

/***/ "next/dist/compiled/next-server/app-route.runtime.dev.js":
/*!**************************************************************************!*\
  !*** external "next/dist/compiled/next-server/app-route.runtime.dev.js" ***!
  \**************************************************************************/
/***/ ((module) => {

module.exports = require("next/dist/compiled/next-server/app-route.runtime.dev.js");

/***/ }),

/***/ "assert":
/*!*************************!*\
  !*** external "assert" ***!
  \*************************/
/***/ ((module) => {

module.exports = require("assert");

/***/ }),

/***/ "buffer":
/*!*************************!*\
  !*** external "buffer" ***!
  \*************************/
/***/ ((module) => {

module.exports = require("buffer");

/***/ }),

/***/ "crypto":
/*!*************************!*\
  !*** external "crypto" ***!
  \*************************/
/***/ ((module) => {

module.exports = require("crypto");

/***/ }),

/***/ "events":
/*!*************************!*\
  !*** external "events" ***!
  \*************************/
/***/ ((module) => {

module.exports = require("events");

/***/ }),

/***/ "http":
/*!***********************!*\
  !*** external "http" ***!
  \***********************/
/***/ ((module) => {

module.exports = require("http");

/***/ }),

/***/ "https":
/*!************************!*\
  !*** external "https" ***!
  \************************/
/***/ ((module) => {

module.exports = require("https");

/***/ }),

/***/ "querystring":
/*!******************************!*\
  !*** external "querystring" ***!
  \******************************/
/***/ ((module) => {

module.exports = require("querystring");

/***/ }),

/***/ "url":
/*!**********************!*\
  !*** external "url" ***!
  \**********************/
/***/ ((module) => {

module.exports = require("url");

/***/ }),

/***/ "util":
/*!***********************!*\
  !*** external "util" ***!
  \***********************/
/***/ ((module) => {

module.exports = require("util");

/***/ }),

/***/ "zlib":
/*!***********************!*\
  !*** external "zlib" ***!
  \***********************/
/***/ ((module) => {

module.exports = require("zlib");

/***/ }),

/***/ "(rsc)/./node_modules/next/dist/build/webpack/loaders/next-app-loader.js?name=app%2Fapi%2Fadmin%2Fsettings%2Froute&page=%2Fapi%2Fadmin%2Fsettings%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Fadmin%2Fsettings%2Froute.ts&appDir=%2FUsers%2Fvikalp%2FWebPage%2FCreatorFarm-Phase6-Razorpay_2%2Fapp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=%2FUsers%2Fvikalp%2FWebPage%2FCreatorFarm-Phase6-Razorpay_2&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D!":
/*!**************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/next/dist/build/webpack/loaders/next-app-loader.js?name=app%2Fapi%2Fadmin%2Fsettings%2Froute&page=%2Fapi%2Fadmin%2Fsettings%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Fadmin%2Fsettings%2Froute.ts&appDir=%2FUsers%2Fvikalp%2FWebPage%2FCreatorFarm-Phase6-Razorpay_2%2Fapp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=%2FUsers%2Fvikalp%2FWebPage%2FCreatorFarm-Phase6-Razorpay_2&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D! ***!
  \**************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   originalPathname: () => (/* binding */ originalPathname),\n/* harmony export */   patchFetch: () => (/* binding */ patchFetch),\n/* harmony export */   requestAsyncStorage: () => (/* binding */ requestAsyncStorage),\n/* harmony export */   routeModule: () => (/* binding */ routeModule),\n/* harmony export */   serverHooks: () => (/* binding */ serverHooks),\n/* harmony export */   staticGenerationAsyncStorage: () => (/* binding */ staticGenerationAsyncStorage)\n/* harmony export */ });\n/* harmony import */ var next_dist_server_future_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next/dist/server/future/route-modules/app-route/module.compiled */ \"(rsc)/./node_modules/next/dist/server/future/route-modules/app-route/module.compiled.js\");\n/* harmony import */ var next_dist_server_future_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_dist_server_future_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_dist_server_future_route_kind__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/dist/server/future/route-kind */ \"(rsc)/./node_modules/next/dist/server/future/route-kind.js\");\n/* harmony import */ var next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/dist/server/lib/patch-fetch */ \"(rsc)/./node_modules/next/dist/server/lib/patch-fetch.js\");\n/* harmony import */ var next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _Users_vikalp_WebPage_CreatorFarm_Phase6_Razorpay_2_app_api_admin_settings_route_ts__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app/api/admin/settings/route.ts */ \"(rsc)/./app/api/admin/settings/route.ts\");\n\n\n\n\n// We inject the nextConfigOutput here so that we can use them in the route\n// module.\nconst nextConfigOutput = \"\"\nconst routeModule = new next_dist_server_future_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0__.AppRouteRouteModule({\n    definition: {\n        kind: next_dist_server_future_route_kind__WEBPACK_IMPORTED_MODULE_1__.RouteKind.APP_ROUTE,\n        page: \"/api/admin/settings/route\",\n        pathname: \"/api/admin/settings\",\n        filename: \"route\",\n        bundlePath: \"app/api/admin/settings/route\"\n    },\n    resolvedPagePath: \"/Users/vikalp/WebPage/CreatorFarm-Phase6-Razorpay_2/app/api/admin/settings/route.ts\",\n    nextConfigOutput,\n    userland: _Users_vikalp_WebPage_CreatorFarm_Phase6_Razorpay_2_app_api_admin_settings_route_ts__WEBPACK_IMPORTED_MODULE_3__\n});\n// Pull out the exports that we need to expose from the module. This should\n// be eliminated when we've moved the other routes to the new format. These\n// are used to hook into the route.\nconst { requestAsyncStorage, staticGenerationAsyncStorage, serverHooks } = routeModule;\nconst originalPathname = \"/api/admin/settings/route\";\nfunction patchFetch() {\n    return (0,next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2__.patchFetch)({\n        serverHooks,\n        staticGenerationAsyncStorage\n    });\n}\n\n\n//# sourceMappingURL=app-route.js.map//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2J1aWxkL3dlYnBhY2svbG9hZGVycy9uZXh0LWFwcC1sb2FkZXIuanM/bmFtZT1hcHAlMkZhcGklMkZhZG1pbiUyRnNldHRpbmdzJTJGcm91dGUmcGFnZT0lMkZhcGklMkZhZG1pbiUyRnNldHRpbmdzJTJGcm91dGUmYXBwUGF0aHM9JnBhZ2VQYXRoPXByaXZhdGUtbmV4dC1hcHAtZGlyJTJGYXBpJTJGYWRtaW4lMkZzZXR0aW5ncyUyRnJvdXRlLnRzJmFwcERpcj0lMkZVc2VycyUyRnZpa2FscCUyRldlYlBhZ2UlMkZDcmVhdG9yRmFybS1QaGFzZTYtUmF6b3JwYXlfMiUyRmFwcCZwYWdlRXh0ZW5zaW9ucz10c3gmcGFnZUV4dGVuc2lvbnM9dHMmcGFnZUV4dGVuc2lvbnM9anN4JnBhZ2VFeHRlbnNpb25zPWpzJnJvb3REaXI9JTJGVXNlcnMlMkZ2aWthbHAlMkZXZWJQYWdlJTJGQ3JlYXRvckZhcm0tUGhhc2U2LVJhem9ycGF5XzImaXNEZXY9dHJ1ZSZ0c2NvbmZpZ1BhdGg9dHNjb25maWcuanNvbiZiYXNlUGF0aD0mYXNzZXRQcmVmaXg9Jm5leHRDb25maWdPdXRwdXQ9JnByZWZlcnJlZFJlZ2lvbj0mbWlkZGxld2FyZUNvbmZpZz1lMzAlM0QhIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7OztBQUFzRztBQUN2QztBQUNjO0FBQ21DO0FBQ2hIO0FBQ0E7QUFDQTtBQUNBLHdCQUF3QixnSEFBbUI7QUFDM0M7QUFDQSxjQUFjLHlFQUFTO0FBQ3ZCO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQSxZQUFZO0FBQ1osQ0FBQztBQUNEO0FBQ0E7QUFDQTtBQUNBLFFBQVEsaUVBQWlFO0FBQ3pFO0FBQ0E7QUFDQSxXQUFXLDRFQUFXO0FBQ3RCO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDdUg7O0FBRXZIIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vY3JlYXRvcmZhcm0tcGhhc2U2LXJhem9ycGF5Lz9kNzJmIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEFwcFJvdXRlUm91dGVNb2R1bGUgfSBmcm9tIFwibmV4dC9kaXN0L3NlcnZlci9mdXR1cmUvcm91dGUtbW9kdWxlcy9hcHAtcm91dGUvbW9kdWxlLmNvbXBpbGVkXCI7XG5pbXBvcnQgeyBSb3V0ZUtpbmQgfSBmcm9tIFwibmV4dC9kaXN0L3NlcnZlci9mdXR1cmUvcm91dGUta2luZFwiO1xuaW1wb3J0IHsgcGF0Y2hGZXRjaCBhcyBfcGF0Y2hGZXRjaCB9IGZyb20gXCJuZXh0L2Rpc3Qvc2VydmVyL2xpYi9wYXRjaC1mZXRjaFwiO1xuaW1wb3J0ICogYXMgdXNlcmxhbmQgZnJvbSBcIi9Vc2Vycy92aWthbHAvV2ViUGFnZS9DcmVhdG9yRmFybS1QaGFzZTYtUmF6b3JwYXlfMi9hcHAvYXBpL2FkbWluL3NldHRpbmdzL3JvdXRlLnRzXCI7XG4vLyBXZSBpbmplY3QgdGhlIG5leHRDb25maWdPdXRwdXQgaGVyZSBzbyB0aGF0IHdlIGNhbiB1c2UgdGhlbSBpbiB0aGUgcm91dGVcbi8vIG1vZHVsZS5cbmNvbnN0IG5leHRDb25maWdPdXRwdXQgPSBcIlwiXG5jb25zdCByb3V0ZU1vZHVsZSA9IG5ldyBBcHBSb3V0ZVJvdXRlTW9kdWxlKHtcbiAgICBkZWZpbml0aW9uOiB7XG4gICAgICAgIGtpbmQ6IFJvdXRlS2luZC5BUFBfUk9VVEUsXG4gICAgICAgIHBhZ2U6IFwiL2FwaS9hZG1pbi9zZXR0aW5ncy9yb3V0ZVwiLFxuICAgICAgICBwYXRobmFtZTogXCIvYXBpL2FkbWluL3NldHRpbmdzXCIsXG4gICAgICAgIGZpbGVuYW1lOiBcInJvdXRlXCIsXG4gICAgICAgIGJ1bmRsZVBhdGg6IFwiYXBwL2FwaS9hZG1pbi9zZXR0aW5ncy9yb3V0ZVwiXG4gICAgfSxcbiAgICByZXNvbHZlZFBhZ2VQYXRoOiBcIi9Vc2Vycy92aWthbHAvV2ViUGFnZS9DcmVhdG9yRmFybS1QaGFzZTYtUmF6b3JwYXlfMi9hcHAvYXBpL2FkbWluL3NldHRpbmdzL3JvdXRlLnRzXCIsXG4gICAgbmV4dENvbmZpZ091dHB1dCxcbiAgICB1c2VybGFuZFxufSk7XG4vLyBQdWxsIG91dCB0aGUgZXhwb3J0cyB0aGF0IHdlIG5lZWQgdG8gZXhwb3NlIGZyb20gdGhlIG1vZHVsZS4gVGhpcyBzaG91bGRcbi8vIGJlIGVsaW1pbmF0ZWQgd2hlbiB3ZSd2ZSBtb3ZlZCB0aGUgb3RoZXIgcm91dGVzIHRvIHRoZSBuZXcgZm9ybWF0LiBUaGVzZVxuLy8gYXJlIHVzZWQgdG8gaG9vayBpbnRvIHRoZSByb3V0ZS5cbmNvbnN0IHsgcmVxdWVzdEFzeW5jU3RvcmFnZSwgc3RhdGljR2VuZXJhdGlvbkFzeW5jU3RvcmFnZSwgc2VydmVySG9va3MgfSA9IHJvdXRlTW9kdWxlO1xuY29uc3Qgb3JpZ2luYWxQYXRobmFtZSA9IFwiL2FwaS9hZG1pbi9zZXR0aW5ncy9yb3V0ZVwiO1xuZnVuY3Rpb24gcGF0Y2hGZXRjaCgpIHtcbiAgICByZXR1cm4gX3BhdGNoRmV0Y2goe1xuICAgICAgICBzZXJ2ZXJIb29rcyxcbiAgICAgICAgc3RhdGljR2VuZXJhdGlvbkFzeW5jU3RvcmFnZVxuICAgIH0pO1xufVxuZXhwb3J0IHsgcm91dGVNb2R1bGUsIHJlcXVlc3RBc3luY1N0b3JhZ2UsIHN0YXRpY0dlbmVyYXRpb25Bc3luY1N0b3JhZ2UsIHNlcnZlckhvb2tzLCBvcmlnaW5hbFBhdGhuYW1lLCBwYXRjaEZldGNoLCAgfTtcblxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9YXBwLXJvdXRlLmpzLm1hcCJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(rsc)/./node_modules/next/dist/build/webpack/loaders/next-app-loader.js?name=app%2Fapi%2Fadmin%2Fsettings%2Froute&page=%2Fapi%2Fadmin%2Fsettings%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Fadmin%2Fsettings%2Froute.ts&appDir=%2FUsers%2Fvikalp%2FWebPage%2FCreatorFarm-Phase6-Razorpay_2%2Fapp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=%2FUsers%2Fvikalp%2FWebPage%2FCreatorFarm-Phase6-Razorpay_2&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D!\n");

/***/ }),

/***/ "(rsc)/./app/api/admin/settings/route.ts":
/*!*****************************************!*\
  !*** ./app/api/admin/settings/route.ts ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   GET: () => (/* binding */ GET),\n/* harmony export */   POST: () => (/* binding */ POST)\n/* harmony export */ });\n/* harmony import */ var next_server__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next/server */ \"(rsc)/./node_modules/next/dist/api/server.js\");\n/* harmony import */ var _lib_prisma__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/lib/prisma */ \"(rsc)/./app/lib/prisma.ts\");\n/* harmony import */ var next_auth__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next-auth */ \"(rsc)/./node_modules/next-auth/index.js\");\n/* harmony import */ var next_auth__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_auth__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _lib_authOptions__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/lib/authOptions */ \"(rsc)/./app/lib/authOptions.ts\");\n\n\n\n\nfunction isAdminEmail(email) {\n    const admin = (process.env.ADMIN_EMAIL ?? \"\").toLowerCase().trim();\n    return !!admin && (email ?? \"\").toLowerCase().trim() === admin;\n}\nasync function GET() {\n    const session = await (0,next_auth__WEBPACK_IMPORTED_MODULE_2__.getServerSession)(_lib_authOptions__WEBPACK_IMPORTED_MODULE_3__.authOptions);\n    if (!isAdminEmail(session?.user?.email)) {\n        return next_server__WEBPACK_IMPORTED_MODULE_0__.NextResponse.json({\n            error: \"Forbidden\"\n        }, {\n            status: 403\n        });\n    }\n    const settings = await _lib_prisma__WEBPACK_IMPORTED_MODULE_1__.prisma.tierSettings.upsert({\n        where: {\n            id: \"singleton\"\n        },\n        create: {\n            id: \"singleton\"\n        },\n        update: {},\n        select: {\n            basicPrice: true,\n            proPrice: true,\n            currency: true,\n            razorpayBasicPlanId: true,\n            razorpayProPlanId: true\n        }\n    });\n    return next_server__WEBPACK_IMPORTED_MODULE_0__.NextResponse.json(settings);\n}\nasync function POST(req) {\n    const session = await (0,next_auth__WEBPACK_IMPORTED_MODULE_2__.getServerSession)(_lib_authOptions__WEBPACK_IMPORTED_MODULE_3__.authOptions);\n    if (!isAdminEmail(session?.user?.email)) {\n        return next_server__WEBPACK_IMPORTED_MODULE_0__.NextResponse.json({\n            error: \"Forbidden\"\n        }, {\n            status: 403\n        });\n    }\n    const body = await req.json();\n    const basicPrice = Number(body.basicPrice ?? 999);\n    const proPrice = Number(body.proPrice ?? 1999);\n    const currency = String(body.currency ?? \"INR\").toUpperCase();\n    const razorpayBasicPlanId = String(body.razorpayBasicPlanId ?? \"\").trim();\n    const razorpayProPlanId = String(body.razorpayProPlanId ?? \"\").trim();\n    const updated = await _lib_prisma__WEBPACK_IMPORTED_MODULE_1__.prisma.tierSettings.upsert({\n        where: {\n            id: \"singleton\"\n        },\n        create: {\n            id: \"singleton\",\n            basicPrice,\n            proPrice,\n            currency,\n            razorpayBasicPlanId: razorpayBasicPlanId || null,\n            razorpayProPlanId: razorpayProPlanId || null\n        },\n        update: {\n            basicPrice,\n            proPrice,\n            currency,\n            razorpayBasicPlanId: razorpayBasicPlanId || null,\n            razorpayProPlanId: razorpayProPlanId || null\n        },\n        select: {\n            basicPrice: true,\n            proPrice: true,\n            currency: true,\n            razorpayBasicPlanId: true,\n            razorpayProPlanId: true\n        }\n    });\n    return next_server__WEBPACK_IMPORTED_MODULE_0__.NextResponse.json(updated);\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9hcHAvYXBpL2FkbWluL3NldHRpbmdzL3JvdXRlLnRzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBMkM7QUFDTDtBQUNPO0FBQ0c7QUFFaEQsU0FBU0ksYUFBYUMsS0FBcUI7SUFDekMsTUFBTUMsUUFBUSxDQUFDQyxRQUFRQyxHQUFHLENBQUNDLFdBQVcsSUFBSSxFQUFDLEVBQUdDLFdBQVcsR0FBR0MsSUFBSTtJQUNoRSxPQUFPLENBQUMsQ0FBQ0wsU0FBUyxDQUFDRCxTQUFTLEVBQUMsRUFBR0ssV0FBVyxHQUFHQyxJQUFJLE9BQU9MO0FBQzNEO0FBRU8sZUFBZU07SUFDcEIsTUFBTUMsVUFBVSxNQUFNWCwyREFBZ0JBLENBQUNDLHlEQUFXQTtJQUNsRCxJQUFJLENBQUNDLGFBQWFTLFNBQVNDLE1BQU1ULFFBQVE7UUFDdkMsT0FBT0wscURBQVlBLENBQUNlLElBQUksQ0FBQztZQUFFQyxPQUFPO1FBQVksR0FBRztZQUFFQyxRQUFRO1FBQUk7SUFDakU7SUFFQSxNQUFNQyxXQUFXLE1BQU1qQiwrQ0FBTUEsQ0FBQ2tCLFlBQVksQ0FBQ0MsTUFBTSxDQUFDO1FBQ2hEQyxPQUFPO1lBQUVDLElBQUk7UUFBWTtRQUN6QkMsUUFBUTtZQUFFRCxJQUFJO1FBQVk7UUFDMUJFLFFBQVEsQ0FBQztRQUNUQyxRQUFRO1lBQ05DLFlBQVk7WUFDWkMsVUFBVTtZQUNWQyxVQUFVO1lBQ1ZDLHFCQUFxQjtZQUNyQkMsbUJBQW1CO1FBQ3JCO0lBQ0Y7SUFFQSxPQUFPOUIscURBQVlBLENBQUNlLElBQUksQ0FBQ0c7QUFDM0I7QUFFTyxlQUFlYSxLQUFLQyxHQUFZO0lBQ3JDLE1BQU1uQixVQUFVLE1BQU1YLDJEQUFnQkEsQ0FBQ0MseURBQVdBO0lBQ2xELElBQUksQ0FBQ0MsYUFBYVMsU0FBU0MsTUFBTVQsUUFBUTtRQUN2QyxPQUFPTCxxREFBWUEsQ0FBQ2UsSUFBSSxDQUFDO1lBQUVDLE9BQU87UUFBWSxHQUFHO1lBQUVDLFFBQVE7UUFBSTtJQUNqRTtJQUVBLE1BQU1nQixPQUFPLE1BQU1ELElBQUlqQixJQUFJO0lBRTNCLE1BQU1XLGFBQWFRLE9BQU9ELEtBQUtQLFVBQVUsSUFBSTtJQUM3QyxNQUFNQyxXQUFXTyxPQUFPRCxLQUFLTixRQUFRLElBQUk7SUFDekMsTUFBTUMsV0FBV08sT0FBT0YsS0FBS0wsUUFBUSxJQUFJLE9BQU9RLFdBQVc7SUFFM0QsTUFBTVAsc0JBQXNCTSxPQUFPRixLQUFLSixtQkFBbUIsSUFBSSxJQUFJbEIsSUFBSTtJQUN2RSxNQUFNbUIsb0JBQW9CSyxPQUFPRixLQUFLSCxpQkFBaUIsSUFBSSxJQUFJbkIsSUFBSTtJQUVuRSxNQUFNMEIsVUFBVSxNQUFNcEMsK0NBQU1BLENBQUNrQixZQUFZLENBQUNDLE1BQU0sQ0FBQztRQUMvQ0MsT0FBTztZQUFFQyxJQUFJO1FBQVk7UUFDekJDLFFBQVE7WUFDTkQsSUFBSTtZQUNKSTtZQUNBQztZQUNBQztZQUNBQyxxQkFBcUJBLHVCQUF1QjtZQUM1Q0MsbUJBQW1CQSxxQkFBcUI7UUFDMUM7UUFDQU4sUUFBUTtZQUNORTtZQUNBQztZQUNBQztZQUNBQyxxQkFBcUJBLHVCQUF1QjtZQUM1Q0MsbUJBQW1CQSxxQkFBcUI7UUFDMUM7UUFDQUwsUUFBUTtZQUNOQyxZQUFZO1lBQ1pDLFVBQVU7WUFDVkMsVUFBVTtZQUNWQyxxQkFBcUI7WUFDckJDLG1CQUFtQjtRQUNyQjtJQUNGO0lBRUEsT0FBTzlCLHFEQUFZQSxDQUFDZSxJQUFJLENBQUNzQjtBQUMzQiIsInNvdXJjZXMiOlsid2VicGFjazovL2NyZWF0b3JmYXJtLXBoYXNlNi1yYXpvcnBheS8uL2FwcC9hcGkvYWRtaW4vc2V0dGluZ3Mvcm91dGUudHM/ZDhiYiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBOZXh0UmVzcG9uc2UgfSBmcm9tIFwibmV4dC9zZXJ2ZXJcIjtcbmltcG9ydCB7IHByaXNtYSB9IGZyb20gXCJAL2xpYi9wcmlzbWFcIjtcbmltcG9ydCB7IGdldFNlcnZlclNlc3Npb24gfSBmcm9tIFwibmV4dC1hdXRoXCI7XG5pbXBvcnQgeyBhdXRoT3B0aW9ucyB9IGZyb20gXCJAL2xpYi9hdXRoT3B0aW9uc1wiO1xuXG5mdW5jdGlvbiBpc0FkbWluRW1haWwoZW1haWw/OiBzdHJpbmcgfCBudWxsKSB7XG4gIGNvbnN0IGFkbWluID0gKHByb2Nlc3MuZW52LkFETUlOX0VNQUlMID8/IFwiXCIpLnRvTG93ZXJDYXNlKCkudHJpbSgpO1xuICByZXR1cm4gISFhZG1pbiAmJiAoZW1haWwgPz8gXCJcIikudG9Mb3dlckNhc2UoKS50cmltKCkgPT09IGFkbWluO1xufVxuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gR0VUKCkge1xuICBjb25zdCBzZXNzaW9uID0gYXdhaXQgZ2V0U2VydmVyU2Vzc2lvbihhdXRoT3B0aW9ucyk7XG4gIGlmICghaXNBZG1pbkVtYWlsKHNlc3Npb24/LnVzZXI/LmVtYWlsKSkge1xuICAgIHJldHVybiBOZXh0UmVzcG9uc2UuanNvbih7IGVycm9yOiBcIkZvcmJpZGRlblwiIH0sIHsgc3RhdHVzOiA0MDMgfSk7XG4gIH1cblxuICBjb25zdCBzZXR0aW5ncyA9IGF3YWl0IHByaXNtYS50aWVyU2V0dGluZ3MudXBzZXJ0KHtcbiAgICB3aGVyZTogeyBpZDogXCJzaW5nbGV0b25cIiB9LFxuICAgIGNyZWF0ZTogeyBpZDogXCJzaW5nbGV0b25cIiB9LFxuICAgIHVwZGF0ZToge30sXG4gICAgc2VsZWN0OiB7XG4gICAgICBiYXNpY1ByaWNlOiB0cnVlLFxuICAgICAgcHJvUHJpY2U6IHRydWUsXG4gICAgICBjdXJyZW5jeTogdHJ1ZSxcbiAgICAgIHJhem9ycGF5QmFzaWNQbGFuSWQ6IHRydWUsXG4gICAgICByYXpvcnBheVByb1BsYW5JZDogdHJ1ZVxuICAgIH1cbiAgfSk7XG5cbiAgcmV0dXJuIE5leHRSZXNwb25zZS5qc29uKHNldHRpbmdzKTtcbn1cblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIFBPU1QocmVxOiBSZXF1ZXN0KSB7XG4gIGNvbnN0IHNlc3Npb24gPSBhd2FpdCBnZXRTZXJ2ZXJTZXNzaW9uKGF1dGhPcHRpb25zKTtcbiAgaWYgKCFpc0FkbWluRW1haWwoc2Vzc2lvbj8udXNlcj8uZW1haWwpKSB7XG4gICAgcmV0dXJuIE5leHRSZXNwb25zZS5qc29uKHsgZXJyb3I6IFwiRm9yYmlkZGVuXCIgfSwgeyBzdGF0dXM6IDQwMyB9KTtcbiAgfVxuXG4gIGNvbnN0IGJvZHkgPSBhd2FpdCByZXEuanNvbigpO1xuXG4gIGNvbnN0IGJhc2ljUHJpY2UgPSBOdW1iZXIoYm9keS5iYXNpY1ByaWNlID8/IDk5OSk7XG4gIGNvbnN0IHByb1ByaWNlID0gTnVtYmVyKGJvZHkucHJvUHJpY2UgPz8gMTk5OSk7XG4gIGNvbnN0IGN1cnJlbmN5ID0gU3RyaW5nKGJvZHkuY3VycmVuY3kgPz8gXCJJTlJcIikudG9VcHBlckNhc2UoKTtcblxuICBjb25zdCByYXpvcnBheUJhc2ljUGxhbklkID0gU3RyaW5nKGJvZHkucmF6b3JwYXlCYXNpY1BsYW5JZCA/PyBcIlwiKS50cmltKCk7XG4gIGNvbnN0IHJhem9ycGF5UHJvUGxhbklkID0gU3RyaW5nKGJvZHkucmF6b3JwYXlQcm9QbGFuSWQgPz8gXCJcIikudHJpbSgpO1xuXG4gIGNvbnN0IHVwZGF0ZWQgPSBhd2FpdCBwcmlzbWEudGllclNldHRpbmdzLnVwc2VydCh7XG4gICAgd2hlcmU6IHsgaWQ6IFwic2luZ2xldG9uXCIgfSxcbiAgICBjcmVhdGU6IHtcbiAgICAgIGlkOiBcInNpbmdsZXRvblwiLFxuICAgICAgYmFzaWNQcmljZSxcbiAgICAgIHByb1ByaWNlLFxuICAgICAgY3VycmVuY3ksXG4gICAgICByYXpvcnBheUJhc2ljUGxhbklkOiByYXpvcnBheUJhc2ljUGxhbklkIHx8IG51bGwsXG4gICAgICByYXpvcnBheVByb1BsYW5JZDogcmF6b3JwYXlQcm9QbGFuSWQgfHwgbnVsbFxuICAgIH0sXG4gICAgdXBkYXRlOiB7XG4gICAgICBiYXNpY1ByaWNlLFxuICAgICAgcHJvUHJpY2UsXG4gICAgICBjdXJyZW5jeSxcbiAgICAgIHJhem9ycGF5QmFzaWNQbGFuSWQ6IHJhem9ycGF5QmFzaWNQbGFuSWQgfHwgbnVsbCxcbiAgICAgIHJhem9ycGF5UHJvUGxhbklkOiByYXpvcnBheVByb1BsYW5JZCB8fCBudWxsXG4gICAgfSxcbiAgICBzZWxlY3Q6IHtcbiAgICAgIGJhc2ljUHJpY2U6IHRydWUsXG4gICAgICBwcm9QcmljZTogdHJ1ZSxcbiAgICAgIGN1cnJlbmN5OiB0cnVlLFxuICAgICAgcmF6b3JwYXlCYXNpY1BsYW5JZDogdHJ1ZSxcbiAgICAgIHJhem9ycGF5UHJvUGxhbklkOiB0cnVlXG4gICAgfVxuICB9KTtcblxuICByZXR1cm4gTmV4dFJlc3BvbnNlLmpzb24odXBkYXRlZCk7XG59XG4iXSwibmFtZXMiOlsiTmV4dFJlc3BvbnNlIiwicHJpc21hIiwiZ2V0U2VydmVyU2Vzc2lvbiIsImF1dGhPcHRpb25zIiwiaXNBZG1pbkVtYWlsIiwiZW1haWwiLCJhZG1pbiIsInByb2Nlc3MiLCJlbnYiLCJBRE1JTl9FTUFJTCIsInRvTG93ZXJDYXNlIiwidHJpbSIsIkdFVCIsInNlc3Npb24iLCJ1c2VyIiwianNvbiIsImVycm9yIiwic3RhdHVzIiwic2V0dGluZ3MiLCJ0aWVyU2V0dGluZ3MiLCJ1cHNlcnQiLCJ3aGVyZSIsImlkIiwiY3JlYXRlIiwidXBkYXRlIiwic2VsZWN0IiwiYmFzaWNQcmljZSIsInByb1ByaWNlIiwiY3VycmVuY3kiLCJyYXpvcnBheUJhc2ljUGxhbklkIiwicmF6b3JwYXlQcm9QbGFuSWQiLCJQT1NUIiwicmVxIiwiYm9keSIsIk51bWJlciIsIlN0cmluZyIsInRvVXBwZXJDYXNlIiwidXBkYXRlZCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(rsc)/./app/api/admin/settings/route.ts\n");

/***/ }),

/***/ "(rsc)/./app/lib/authOptions.ts":
/*!********************************!*\
  !*** ./app/lib/authOptions.ts ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   authOptions: () => (/* binding */ authOptions)\n/* harmony export */ });\n/* harmony import */ var next_auth_providers_credentials__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next-auth/providers/credentials */ \"(rsc)/./node_modules/next-auth/providers/credentials.js\");\n/* harmony import */ var bcrypt__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! bcrypt */ \"bcrypt\");\n/* harmony import */ var bcrypt__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(bcrypt__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _lib_prisma__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/lib/prisma */ \"(rsc)/./app/lib/prisma.ts\");\n\n\n\n/**\n * Admin login:\n *   use ADMIN_EMAIL + ADMIN_PASSWORD from .env\n *\n * Customer login:\n *   users created via /signup (hashed passwords)\n */ const authOptions = {\n    session: {\n        strategy: \"jwt\"\n    },\n    providers: [\n        (0,next_auth_providers_credentials__WEBPACK_IMPORTED_MODULE_0__[\"default\"])({\n            name: \"Credentials\",\n            credentials: {\n                email: {\n                    label: \"Email\",\n                    type: \"email\"\n                },\n                password: {\n                    label: \"Password\",\n                    type: \"password\"\n                }\n            },\n            async authorize (creds) {\n                const email = (creds?.email ?? \"\").toLowerCase().trim();\n                const password = String(creds?.password ?? \"\");\n                if (!email || !password) return null;\n                const adminEmail = (process.env.ADMIN_EMAIL ?? \"\").toLowerCase().trim();\n                const adminPassword = String(process.env.ADMIN_PASSWORD ?? \"\");\n                // 1) ADMIN LOGIN\n                if (adminEmail && adminPassword && email === adminEmail) {\n                    if (password !== adminPassword) return null;\n                    const admin = await _lib_prisma__WEBPACK_IMPORTED_MODULE_2__.prisma.user.upsert({\n                        where: {\n                            email\n                        },\n                        create: {\n                            email,\n                            name: \"Admin\",\n                            role: \"ADMIN\"\n                        },\n                        update: {\n                            role: \"ADMIN\"\n                        },\n                        select: {\n                            id: true,\n                            email: true,\n                            name: true,\n                            role: true,\n                            tier: true\n                        }\n                    });\n                    return {\n                        id: admin.id,\n                        email: admin.email,\n                        name: admin.name ?? \"Admin\"\n                    };\n                }\n                // 2) CUSTOMER LOGIN\n                const user = await _lib_prisma__WEBPACK_IMPORTED_MODULE_2__.prisma.user.findUnique({\n                    where: {\n                        email\n                    },\n                    select: {\n                        id: true,\n                        email: true,\n                        name: true,\n                        password: true,\n                        role: true,\n                        tier: true\n                    }\n                });\n                if (!user?.password) return null;\n                const ok = await bcrypt__WEBPACK_IMPORTED_MODULE_1___default().compare(password, user.password);\n                if (!ok) return null;\n                return {\n                    id: user.id,\n                    email: user.email,\n                    name: user.name ?? \"User\"\n                };\n            }\n        })\n    ],\n    pages: {\n        signIn: \"/signin\"\n    },\n    callbacks: {\n        async jwt ({ token }) {\n            if (token?.email) {\n                const dbUser = await _lib_prisma__WEBPACK_IMPORTED_MODULE_2__.prisma.user.findUnique({\n                    where: {\n                        email: String(token.email)\n                    },\n                    select: {\n                        tier: true,\n                        id: true,\n                        role: true\n                    }\n                });\n                token.tier = dbUser?.tier ?? \"NONE\";\n                token.uid = dbUser?.id;\n                token.role = dbUser?.role ?? \"USER\";\n            }\n            return token;\n        },\n        async session ({ session, token }) {\n            session.tier = token.tier ?? \"NONE\";\n            session.uid = token.uid;\n            session.role = token.role ?? \"USER\";\n            return session;\n        }\n    }\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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VjtnQkFDNUJTLE1BQWNaLElBQUksR0FBR2EsUUFBUWIsUUFBUTtZQUN4QztZQUNBLE9BQU9ZO1FBQ1Q7UUFFQSxNQUFNckMsU0FBUSxFQUFFQSxPQUFPLEVBQUVxQyxLQUFLLEVBQUU7WUFDN0JyQyxRQUFnQjZCLElBQUksR0FBRyxNQUFlQSxJQUFJLElBQUk7WUFDOUM3QixRQUFnQnVDLEdBQUcsR0FBRyxNQUFlQSxHQUFHO1lBQ3hDdkMsUUFBZ0J5QixJQUFJLEdBQUcsTUFBZUEsSUFBSSxJQUFJO1lBQy9DLE9BQU96QjtRQUNUO0lBQ0Y7QUFDRixFQUFFIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vY3JlYXRvcmZhcm0tcGhhc2U2LXJhem9ycGF5Ly4vYXBwL2xpYi9hdXRoT3B0aW9ucy50cz9iNzVhIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB0eXBlIHsgTmV4dEF1dGhPcHRpb25zIH0gZnJvbSBcIm5leHQtYXV0aFwiO1xuaW1wb3J0IENyZWRlbnRpYWxzUHJvdmlkZXIgZnJvbSBcIm5leHQtYXV0aC9wcm92aWRlcnMvY3JlZGVudGlhbHNcIjtcbmltcG9ydCBiY3J5cHQgZnJvbSBcImJjcnlwdFwiO1xuaW1wb3J0IHsgcHJpc21hIH0gZnJvbSBcIkAvbGliL3ByaXNtYVwiO1xuXG4vKipcbiAqIEFkbWluIGxvZ2luOlxuICogICB1c2UgQURNSU5fRU1BSUwgKyBBRE1JTl9QQVNTV09SRCBmcm9tIC5lbnZcbiAqXG4gKiBDdXN0b21lciBsb2dpbjpcbiAqICAgdXNlcnMgY3JlYXRlZCB2aWEgL3NpZ251cCAoaGFzaGVkIHBhc3N3b3JkcylcbiAqL1xuZXhwb3J0IGNvbnN0IGF1dGhPcHRpb25zOiBOZXh0QXV0aE9wdGlvbnMgPSB7XG4gIHNlc3Npb246IHsgc3RyYXRlZ3k6IFwiand0XCIgfSxcblxuICBwcm92aWRlcnM6IFtcbiAgICBDcmVkZW50aWFsc1Byb3ZpZGVyKHtcbiAgICAgIG5hbWU6IFwiQ3JlZGVudGlhbHNcIixcbiAgICAgIGNyZWRlbnRpYWxzOiB7XG4gICAgICAgIGVtYWlsOiB7IGxhYmVsOiBcIkVtYWlsXCIsIHR5cGU6IFwiZW1haWxcIiB9LFxuICAgICAgICBwYXNzd29yZDogeyBsYWJlbDogXCJQYXNzd29yZFwiLCB0eXBlOiBcInBhc3N3b3JkXCIgfSxcbiAgICAgIH0sXG5cbiAgICAgIGFzeW5jIGF1dGhvcml6ZShjcmVkcykge1xuICAgICAgICBjb25zdCBlbWFpbCA9IChjcmVkcz8uZW1haWwgPz8gXCJcIikudG9Mb3dlckNhc2UoKS50cmltKCk7XG4gICAgICAgIGNvbnN0IHBhc3N3b3JkID0gU3RyaW5nKGNyZWRzPy5wYXNzd29yZCA/PyBcIlwiKTtcblxuICAgICAgICBpZiAoIWVtYWlsIHx8ICFwYXNzd29yZCkgcmV0dXJuIG51bGw7XG5cbiAgICAgICAgY29uc3QgYWRtaW5FbWFpbCA9IChwcm9jZXNzLmVudi5BRE1JTl9FTUFJTCA/PyBcIlwiKS50b0xvd2VyQ2FzZSgpLnRyaW0oKTtcbiAgICAgICAgY29uc3QgYWRtaW5QYXNzd29yZCA9IFN0cmluZyhwcm9jZXNzLmVudi5BRE1JTl9QQVNTV09SRCA/PyBcIlwiKTtcblxuICAgICAgICAvLyAxKSBBRE1JTiBMT0dJTlxuICAgICAgICBpZiAoYWRtaW5FbWFpbCAmJiBhZG1pblBhc3N3b3JkICYmIGVtYWlsID09PSBhZG1pbkVtYWlsKSB7XG4gICAgICAgICAgaWYgKHBhc3N3b3JkICE9PSBhZG1pblBhc3N3b3JkKSByZXR1cm4gbnVsbDtcblxuICAgICAgICAgIGNvbnN0IGFkbWluID0gYXdhaXQgcHJpc21hLnVzZXIudXBzZXJ0KHtcbiAgICAgICAgICAgIHdoZXJlOiB7IGVtYWlsIH0sXG4gICAgICAgICAgICBjcmVhdGU6IHsgZW1haWwsIG5hbWU6IFwiQWRtaW5cIiwgcm9sZTogXCJBRE1JTlwiIH0sXG4gICAgICAgICAgICB1cGRhdGU6IHsgcm9sZTogXCJBRE1JTlwiIH0sXG4gICAgICAgICAgICBzZWxlY3Q6IHsgaWQ6IHRydWUsIGVtYWlsOiB0cnVlLCBuYW1lOiB0cnVlLCByb2xlOiB0cnVlLCB0aWVyOiB0cnVlIH0sXG4gICAgICAgICAgfSk7XG5cbiAgICAgICAgICByZXR1cm4geyBpZDogYWRtaW4uaWQsIGVtYWlsOiBhZG1pbi5lbWFpbCEsIG5hbWU6IGFkbWluLm5hbWUgPz8gXCJBZG1pblwiIH07XG4gICAgICAgIH1cblxuICAgICAgICAvLyAyKSBDVVNUT01FUiBMT0dJTlxuICAgICAgICBjb25zdCB1c2VyID0gYXdhaXQgcHJpc21hLnVzZXIuZmluZFVuaXF1ZSh7XG4gICAgICAgICAgd2hlcmU6IHsgZW1haWwgfSxcbiAgICAgICAgICBzZWxlY3Q6IHsgaWQ6IHRydWUsIGVtYWlsOiB0cnVlLCBuYW1lOiB0cnVlLCBwYXNzd29yZDogdHJ1ZSwgcm9sZTogdHJ1ZSwgdGllcjogdHJ1ZSB9LFxuICAgICAgICB9KTtcblxuICAgICAgICBpZiAoIXVzZXI/LnBhc3N3b3JkKSByZXR1cm4gbnVsbDtcblxuICAgICAgICBjb25zdCBvayA9IGF3YWl0IGJjcnlwdC5jb21wYXJlKHBhc3N3b3JkLCB1c2VyLnBhc3N3b3JkKTtcbiAgICAgICAgaWYgKCFvaykgcmV0dXJuIG51bGw7XG5cbiAgICAgICAgcmV0dXJuIHsgaWQ6IHVzZXIuaWQsIGVtYWlsOiB1c2VyLmVtYWlsISwgbmFtZTogdXNlci5uYW1lID8/IFwiVXNlclwiIH07XG4gICAgICB9LFxuICAgIH0pLFxuICBdLFxuXG4gIHBhZ2VzOiB7IHNpZ25JbjogXCIvc2lnbmluXCIgfSxcblxuICBjYWxsYmFja3M6IHtcbiAgICBhc3luYyBqd3QoeyB0b2tlbiB9KSB7XG4gICAgICBpZiAodG9rZW4/LmVtYWlsKSB7XG4gICAgICAgIGNvbnN0IGRiVXNlciA9IGF3YWl0IHByaXNtYS51c2VyLmZpbmRVbmlxdWUoe1xuICAgICAgICAgIHdoZXJlOiB7IGVtYWlsOiBTdHJpbmcodG9rZW4uZW1haWwpIH0sXG4gICAgICAgICAgc2VsZWN0OiB7IHRpZXI6IHRydWUsIGlkOiB0cnVlLCByb2xlOiB0cnVlIH0sXG4gICAgICAgIH0pO1xuICAgICAgICAodG9rZW4gYXMgYW55KS50aWVyID0gZGJVc2VyPy50aWVyID8/IFwiTk9ORVwiO1xuICAgICAgICAodG9rZW4gYXMgYW55KS51aWQgPSBkYlVzZXI/LmlkO1xuICAgICAgICAodG9rZW4gYXMgYW55KS5yb2xlID0gZGJVc2VyPy5yb2xlID8/IFwiVVNFUlwiO1xuICAgICAgfVxuICAgICAgcmV0dXJuIHRva2VuO1xuICAgIH0sXG5cbiAgICBhc3luYyBzZXNzaW9uKHsgc2Vzc2lvbiwgdG9rZW4gfSkge1xuICAgICAgKHNlc3Npb24gYXMgYW55KS50aWVyID0gKHRva2VuIGFzIGFueSkudGllciA/PyBcIk5PTkVcIjtcbiAgICAgIChzZXNzaW9uIGFzIGFueSkudWlkID0gKHRva2VuIGFzIGFueSkudWlkO1xuICAgICAgKHNlc3Npb24gYXMgYW55KS5yb2xlID0gKHRva2VuIGFzIGFueSkucm9sZSA/PyBcIlVTRVJcIjtcbiAgICAgIHJldHVybiBzZXNzaW9uO1xuICAgIH0sXG4gIH0sXG59O1xuIl0sIm5hbWVzIjpbIkNyZWRlbnRpYWxzUHJvdmlkZXIiLCJiY3J5cHQiLCJwcmlzbWEiLCJhdXRoT3B0aW9ucyIsInNlc3Npb24iLCJzdHJhdGVneSIsInByb3ZpZGVycyIsIm5hbWUiLCJjcmVkZW50aWFscyIsImVtYWlsIiwibGFiZWwiLCJ0eXBlIiwicGFzc3dvcmQiLCJhdXRob3JpemUiLCJjcmVkcyIsInRvTG93ZXJDYXNlIiwidHJpbSIsIlN0cmluZyIsImFkbWluRW1haWwiLCJwcm9jZXNzIiwiZW52IiwiQURNSU5fRU1BSUwiLCJhZG1pblBhc3N3b3JkIiwiQURNSU5fUEFTU1dPUkQiLCJhZG1pbiIsInVzZXIiLCJ1cHNlcnQiLCJ3aGVyZSIsImNyZWF0ZSIsInJvbGUiLCJ1cGRhdGUiLCJzZWxlY3QiLCJpZCIsInRpZXIiLCJmaW5kVW5pcXVlIiwib2siLCJjb21wYXJlIiwicGFnZXMiLCJzaWduSW4iLCJjYWxsYmFja3MiLCJqd3QiLCJ0b2tlbiIsImRiVXNlciIsInVpZCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(rsc)/./app/lib/authOptions.ts\n");

/***/ }),

/***/ "(rsc)/./app/lib/prisma.ts":
/*!***************************!*\
  !*** ./app/lib/prisma.ts ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   prisma: () => (/* binding */ prisma)\n/* harmony export */ });\n/* harmony import */ var _prisma_client__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @prisma/client */ \"@prisma/client\");\n/* harmony import */ var _prisma_client__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_prisma_client__WEBPACK_IMPORTED_MODULE_0__);\n\nconst globalForPrisma = globalThis;\nconst prisma = globalForPrisma.prisma ?? new _prisma_client__WEBPACK_IMPORTED_MODULE_0__.PrismaClient({\n    log: [\n        \"error\"\n    ]\n});\nif (true) globalForPrisma.prisma = prisma;\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9hcHAvbGliL3ByaXNtYS50cyIsIm1hcHBpbmdzIjoiOzs7Ozs7QUFBOEM7QUFFOUMsTUFBTUMsa0JBQWtCQztBQUVqQixNQUFNQyxTQUNYRixnQkFBZ0JFLE1BQU0sSUFDdEIsSUFBSUgsd0RBQVlBLENBQUM7SUFDZkksS0FBSztRQUFDO0tBQVE7QUFDaEIsR0FBRztBQUVMLElBQUlDLElBQXFDLEVBQUVKLGdCQUFnQkUsTUFBTSxHQUFHQSIsInNvdXJjZXMiOlsid2VicGFjazovL2NyZWF0b3JmYXJtLXBoYXNlNi1yYXpvcnBheS8uL2FwcC9saWIvcHJpc21hLnRzPzUxOWIiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgUHJpc21hQ2xpZW50IH0gZnJvbSBcIkBwcmlzbWEvY2xpZW50XCI7XG5cbmNvbnN0IGdsb2JhbEZvclByaXNtYSA9IGdsb2JhbFRoaXMgYXMgdW5rbm93biBhcyB7IHByaXNtYT86IFByaXNtYUNsaWVudCB9O1xuXG5leHBvcnQgY29uc3QgcHJpc21hID1cbiAgZ2xvYmFsRm9yUHJpc21hLnByaXNtYSA/P1xuICBuZXcgUHJpc21hQ2xpZW50KHtcbiAgICBsb2c6IFtcImVycm9yXCJdLFxuICB9KTtcblxuaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSBcInByb2R1Y3Rpb25cIikgZ2xvYmFsRm9yUHJpc21hLnByaXNtYSA9IHByaXNtYTtcbiJdLCJuYW1lcyI6WyJQcmlzbWFDbGllbnQiLCJnbG9iYWxGb3JQcmlzbWEiLCJnbG9iYWxUaGlzIiwicHJpc21hIiwibG9nIiwicHJvY2VzcyJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(rsc)/./app/lib/prisma.ts\n");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, ["vendor-chunks/next","vendor-chunks/next-auth","vendor-chunks/@babel","vendor-chunks/jose","vendor-chunks/openid-client","vendor-chunks/oauth","vendor-chunks/object-hash","vendor-chunks/preact","vendor-chunks/uuid","vendor-chunks/yallist","vendor-chunks/preact-render-to-string","vendor-chunks/lru-cache","vendor-chunks/cookie","vendor-chunks/oidc-token-hash","vendor-chunks/@panva"], () => (__webpack_exec__("(rsc)/./node_modules/next/dist/build/webpack/loaders/next-app-loader.js?name=app%2Fapi%2Fadmin%2Fsettings%2Froute&page=%2Fapi%2Fadmin%2Fsettings%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Fadmin%2Fsettings%2Froute.ts&appDir=%2FUsers%2Fvikalp%2FWebPage%2FCreatorFarm-Phase6-Razorpay_2%2Fapp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=%2FUsers%2Fvikalp%2FWebPage%2FCreatorFarm-Phase6-Razorpay_2&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D!")));
module.exports = __webpack_exports__;

})();