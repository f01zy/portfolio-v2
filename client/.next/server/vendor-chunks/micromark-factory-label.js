"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
exports.id = "vendor-chunks/micromark-factory-label";
exports.ids = ["vendor-chunks/micromark-factory-label"];
exports.modules = {

/***/ "(ssr)/./node_modules/micromark-factory-label/dev/index.js":
/*!***********************************************************!*\
  !*** ./node_modules/micromark-factory-label/dev/index.js ***!
  \***********************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   factoryLabel: () => (/* binding */ factoryLabel)\n/* harmony export */ });\n/* harmony import */ var micromark_util_character__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! micromark-util-character */ \"(ssr)/./node_modules/micromark-util-character/dev/index.js\");\n/* harmony import */ var micromark_util_symbol__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! micromark-util-symbol */ \"(ssr)/./node_modules/micromark-util-symbol/lib/codes.js\");\n/* harmony import */ var micromark_util_symbol__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! micromark-util-symbol */ \"(ssr)/./node_modules/micromark-util-symbol/lib/constants.js\");\n/* harmony import */ var micromark_util_symbol__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! micromark-util-symbol */ \"(ssr)/./node_modules/micromark-util-symbol/lib/types.js\");\n/* harmony import */ var devlop__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! devlop */ \"(ssr)/./node_modules/devlop/lib/development.js\");\n/**\n * @typedef {import('micromark-util-types').Effects} Effects\n * @typedef {import('micromark-util-types').State} State\n * @typedef {import('micromark-util-types').TokenizeContext} TokenizeContext\n * @typedef {import('micromark-util-types').TokenType} TokenType\n */ \n\n\n/**\n * Parse labels.\n *\n * > 👉 **Note**: labels in markdown are capped at 999 characters in the string.\n *\n * ###### Examples\n *\n * ```markdown\n * [a]\n * [a\n * b]\n * [a\\]b]\n * ```\n *\n * @this {TokenizeContext}\n *   Tokenize context.\n * @param {Effects} effects\n *   Context.\n * @param {State} ok\n *   State switched to when successful.\n * @param {State} nok\n *   State switched to when unsuccessful.\n * @param {TokenType} type\n *   Type of the whole label (`[a]`).\n * @param {TokenType} markerType\n *   Type for the markers (`[` and `]`).\n * @param {TokenType} stringType\n *   Type for the identifier (`a`).\n * @returns {State}\n *   Start state.\n */ // eslint-disable-next-line max-params\nfunction factoryLabel(effects, ok, nok, type, markerType, stringType) {\n    const self = this;\n    let size = 0;\n    /** @type {boolean} */ let seen;\n    return start;\n    /**\n   * Start of label.\n   *\n   * ```markdown\n   * > | [a]\n   *     ^\n   * ```\n   *\n   * @type {State}\n   */ function start(code) {\n        (0,devlop__WEBPACK_IMPORTED_MODULE_0__.ok)(code === micromark_util_symbol__WEBPACK_IMPORTED_MODULE_1__.codes.leftSquareBracket, \"expected `[`\");\n        effects.enter(type);\n        effects.enter(markerType);\n        effects.consume(code);\n        effects.exit(markerType);\n        effects.enter(stringType);\n        return atBreak;\n    }\n    /**\n   * In label, at something, before something else.\n   *\n   * ```markdown\n   * > | [a]\n   *      ^\n   * ```\n   *\n   * @type {State}\n   */ function atBreak(code) {\n        if (size > micromark_util_symbol__WEBPACK_IMPORTED_MODULE_2__.constants.linkReferenceSizeMax || code === micromark_util_symbol__WEBPACK_IMPORTED_MODULE_1__.codes.eof || code === micromark_util_symbol__WEBPACK_IMPORTED_MODULE_1__.codes.leftSquareBracket || code === micromark_util_symbol__WEBPACK_IMPORTED_MODULE_1__.codes.rightSquareBracket && !seen || // To do: remove in the future once we’ve switched from\n        // `micromark-extension-footnote` to `micromark-extension-gfm-footnote`,\n        // which doesn’t need this.\n        // Hidden footnotes hook.\n        /* c8 ignore next 3 */ code === micromark_util_symbol__WEBPACK_IMPORTED_MODULE_1__.codes.caret && !size && \"_hiddenFootnoteSupport\" in self.parser.constructs) {\n            return nok(code);\n        }\n        if (code === micromark_util_symbol__WEBPACK_IMPORTED_MODULE_1__.codes.rightSquareBracket) {\n            effects.exit(stringType);\n            effects.enter(markerType);\n            effects.consume(code);\n            effects.exit(markerType);\n            effects.exit(type);\n            return ok;\n        }\n        // To do: indent? Link chunks and EOLs together?\n        if ((0,micromark_util_character__WEBPACK_IMPORTED_MODULE_3__.markdownLineEnding)(code)) {\n            effects.enter(micromark_util_symbol__WEBPACK_IMPORTED_MODULE_4__.types.lineEnding);\n            effects.consume(code);\n            effects.exit(micromark_util_symbol__WEBPACK_IMPORTED_MODULE_4__.types.lineEnding);\n            return atBreak;\n        }\n        effects.enter(micromark_util_symbol__WEBPACK_IMPORTED_MODULE_4__.types.chunkString, {\n            contentType: micromark_util_symbol__WEBPACK_IMPORTED_MODULE_2__.constants.contentTypeString\n        });\n        return labelInside(code);\n    }\n    /**\n   * In label, in text.\n   *\n   * ```markdown\n   * > | [a]\n   *      ^\n   * ```\n   *\n   * @type {State}\n   */ function labelInside(code) {\n        if (code === micromark_util_symbol__WEBPACK_IMPORTED_MODULE_1__.codes.eof || code === micromark_util_symbol__WEBPACK_IMPORTED_MODULE_1__.codes.leftSquareBracket || code === micromark_util_symbol__WEBPACK_IMPORTED_MODULE_1__.codes.rightSquareBracket || (0,micromark_util_character__WEBPACK_IMPORTED_MODULE_3__.markdownLineEnding)(code) || size++ > micromark_util_symbol__WEBPACK_IMPORTED_MODULE_2__.constants.linkReferenceSizeMax) {\n            effects.exit(micromark_util_symbol__WEBPACK_IMPORTED_MODULE_4__.types.chunkString);\n            return atBreak(code);\n        }\n        effects.consume(code);\n        if (!seen) seen = !(0,micromark_util_character__WEBPACK_IMPORTED_MODULE_3__.markdownSpace)(code);\n        return code === micromark_util_symbol__WEBPACK_IMPORTED_MODULE_1__.codes.backslash ? labelEscape : labelInside;\n    }\n    /**\n   * After `\\`, at a special character.\n   *\n   * ```markdown\n   * > | [a\\*a]\n   *        ^\n   * ```\n   *\n   * @type {State}\n   */ function labelEscape(code) {\n        if (code === micromark_util_symbol__WEBPACK_IMPORTED_MODULE_1__.codes.leftSquareBracket || code === micromark_util_symbol__WEBPACK_IMPORTED_MODULE_1__.codes.backslash || code === micromark_util_symbol__WEBPACK_IMPORTED_MODULE_1__.codes.rightSquareBracket) {\n            effects.consume(code);\n            size++;\n            return labelInside;\n        }\n        return labelInside(code);\n    }\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHNzcikvLi9ub2RlX21vZHVsZXMvbWljcm9tYXJrLWZhY3RvcnktbGFiZWwvZGV2L2luZGV4LmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUFBOzs7OztDQUtDLEdBRXlFO0FBQ2I7QUFDMUI7QUFFbkM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztDQThCQyxHQUNELHNDQUFzQztBQUMvQixTQUFTTyxhQUFhQyxPQUFPLEVBQUVILEVBQUUsRUFBRUksR0FBRyxFQUFFQyxJQUFJLEVBQUVDLFVBQVUsRUFBRUMsVUFBVTtJQUN6RSxNQUFNQyxPQUFPLElBQUk7SUFDakIsSUFBSUMsT0FBTztJQUNYLG9CQUFvQixHQUNwQixJQUFJQztJQUVKLE9BQU9DO0lBRVA7Ozs7Ozs7OztHQVNDLEdBQ0QsU0FBU0EsTUFBTUMsSUFBSTtRQUNqQlgsMENBQU1BLENBQUNXLFNBQVNmLHdEQUFLQSxDQUFDZ0IsaUJBQWlCLEVBQUU7UUFDekNWLFFBQVFXLEtBQUssQ0FBQ1Q7UUFDZEYsUUFBUVcsS0FBSyxDQUFDUjtRQUNkSCxRQUFRWSxPQUFPLENBQUNIO1FBQ2hCVCxRQUFRYSxJQUFJLENBQUNWO1FBQ2JILFFBQVFXLEtBQUssQ0FBQ1A7UUFDZCxPQUFPVTtJQUNUO0lBRUE7Ozs7Ozs7OztHQVNDLEdBQ0QsU0FBU0EsUUFBUUwsSUFBSTtRQUNuQixJQUNFSCxPQUFPWCw0REFBU0EsQ0FBQ29CLG9CQUFvQixJQUNyQ04sU0FBU2Ysd0RBQUtBLENBQUNzQixHQUFHLElBQ2xCUCxTQUFTZix3REFBS0EsQ0FBQ2dCLGlCQUFpQixJQUMvQkQsU0FBU2Ysd0RBQUtBLENBQUN1QixrQkFBa0IsSUFBSSxDQUFDVixRQUN2Qyx1REFBdUQ7UUFDdkQsd0VBQXdFO1FBQ3hFLDJCQUEyQjtRQUMzQix5QkFBeUI7UUFDekIsb0JBQW9CLEdBQ25CRSxTQUFTZix3REFBS0EsQ0FBQ3dCLEtBQUssSUFDbkIsQ0FBQ1osUUFDRCw0QkFBNEJELEtBQUtjLE1BQU0sQ0FBQ0MsVUFBVSxFQUNwRDtZQUNBLE9BQU9uQixJQUFJUTtRQUNiO1FBRUEsSUFBSUEsU0FBU2Ysd0RBQUtBLENBQUN1QixrQkFBa0IsRUFBRTtZQUNyQ2pCLFFBQVFhLElBQUksQ0FBQ1Q7WUFDYkosUUFBUVcsS0FBSyxDQUFDUjtZQUNkSCxRQUFRWSxPQUFPLENBQUNIO1lBQ2hCVCxRQUFRYSxJQUFJLENBQUNWO1lBQ2JILFFBQVFhLElBQUksQ0FBQ1g7WUFDYixPQUFPTDtRQUNUO1FBRUEsZ0RBQWdEO1FBQ2hELElBQUlMLDRFQUFrQkEsQ0FBQ2lCLE9BQU87WUFDNUJULFFBQVFXLEtBQUssQ0FBQ2Ysd0RBQUtBLENBQUN5QixVQUFVO1lBQzlCckIsUUFBUVksT0FBTyxDQUFDSDtZQUNoQlQsUUFBUWEsSUFBSSxDQUFDakIsd0RBQUtBLENBQUN5QixVQUFVO1lBQzdCLE9BQU9QO1FBQ1Q7UUFFQWQsUUFBUVcsS0FBSyxDQUFDZix3REFBS0EsQ0FBQzBCLFdBQVcsRUFBRTtZQUFDQyxhQUFhNUIsNERBQVNBLENBQUM2QixpQkFBaUI7UUFBQTtRQUMxRSxPQUFPQyxZQUFZaEI7SUFDckI7SUFFQTs7Ozs7Ozs7O0dBU0MsR0FDRCxTQUFTZ0IsWUFBWWhCLElBQUk7UUFDdkIsSUFDRUEsU0FBU2Ysd0RBQUtBLENBQUNzQixHQUFHLElBQ2xCUCxTQUFTZix3REFBS0EsQ0FBQ2dCLGlCQUFpQixJQUNoQ0QsU0FBU2Ysd0RBQUtBLENBQUN1QixrQkFBa0IsSUFDakN6Qiw0RUFBa0JBLENBQUNpQixTQUNuQkgsU0FBU1gsNERBQVNBLENBQUNvQixvQkFBb0IsRUFDdkM7WUFDQWYsUUFBUWEsSUFBSSxDQUFDakIsd0RBQUtBLENBQUMwQixXQUFXO1lBQzlCLE9BQU9SLFFBQVFMO1FBQ2pCO1FBRUFULFFBQVFZLE9BQU8sQ0FBQ0g7UUFDaEIsSUFBSSxDQUFDRixNQUFNQSxPQUFPLENBQUNkLHVFQUFhQSxDQUFDZ0I7UUFDakMsT0FBT0EsU0FBU2Ysd0RBQUtBLENBQUNnQyxTQUFTLEdBQUdDLGNBQWNGO0lBQ2xEO0lBRUE7Ozs7Ozs7OztHQVNDLEdBQ0QsU0FBU0UsWUFBWWxCLElBQUk7UUFDdkIsSUFDRUEsU0FBU2Ysd0RBQUtBLENBQUNnQixpQkFBaUIsSUFDaENELFNBQVNmLHdEQUFLQSxDQUFDZ0MsU0FBUyxJQUN4QmpCLFNBQVNmLHdEQUFLQSxDQUFDdUIsa0JBQWtCLEVBQ2pDO1lBQ0FqQixRQUFRWSxPQUFPLENBQUNIO1lBQ2hCSDtZQUNBLE9BQU9tQjtRQUNUO1FBRUEsT0FBT0EsWUFBWWhCO0lBQ3JCO0FBQ0YiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9wb3J0Zm9saW8tdjIvLi9ub2RlX21vZHVsZXMvbWljcm9tYXJrLWZhY3RvcnktbGFiZWwvZGV2L2luZGV4LmpzPzljYjEiXSwic291cmNlc0NvbnRlbnQiOlsiLyoqXG4gKiBAdHlwZWRlZiB7aW1wb3J0KCdtaWNyb21hcmstdXRpbC10eXBlcycpLkVmZmVjdHN9IEVmZmVjdHNcbiAqIEB0eXBlZGVmIHtpbXBvcnQoJ21pY3JvbWFyay11dGlsLXR5cGVzJykuU3RhdGV9IFN0YXRlXG4gKiBAdHlwZWRlZiB7aW1wb3J0KCdtaWNyb21hcmstdXRpbC10eXBlcycpLlRva2VuaXplQ29udGV4dH0gVG9rZW5pemVDb250ZXh0XG4gKiBAdHlwZWRlZiB7aW1wb3J0KCdtaWNyb21hcmstdXRpbC10eXBlcycpLlRva2VuVHlwZX0gVG9rZW5UeXBlXG4gKi9cblxuaW1wb3J0IHttYXJrZG93bkxpbmVFbmRpbmcsIG1hcmtkb3duU3BhY2V9IGZyb20gJ21pY3JvbWFyay11dGlsLWNoYXJhY3RlcidcbmltcG9ydCB7Y29kZXMsIGNvbnN0YW50cywgdHlwZXN9IGZyb20gJ21pY3JvbWFyay11dGlsLXN5bWJvbCdcbmltcG9ydCB7b2sgYXMgYXNzZXJ0fSBmcm9tICdkZXZsb3AnXG5cbi8qKlxuICogUGFyc2UgbGFiZWxzLlxuICpcbiAqID4g8J+RiSAqKk5vdGUqKjogbGFiZWxzIGluIG1hcmtkb3duIGFyZSBjYXBwZWQgYXQgOTk5IGNoYXJhY3RlcnMgaW4gdGhlIHN0cmluZy5cbiAqXG4gKiAjIyMjIyMgRXhhbXBsZXNcbiAqXG4gKiBgYGBtYXJrZG93blxuICogW2FdXG4gKiBbYVxuICogYl1cbiAqIFthXFxdYl1cbiAqIGBgYFxuICpcbiAqIEB0aGlzIHtUb2tlbml6ZUNvbnRleHR9XG4gKiAgIFRva2VuaXplIGNvbnRleHQuXG4gKiBAcGFyYW0ge0VmZmVjdHN9IGVmZmVjdHNcbiAqICAgQ29udGV4dC5cbiAqIEBwYXJhbSB7U3RhdGV9IG9rXG4gKiAgIFN0YXRlIHN3aXRjaGVkIHRvIHdoZW4gc3VjY2Vzc2Z1bC5cbiAqIEBwYXJhbSB7U3RhdGV9IG5va1xuICogICBTdGF0ZSBzd2l0Y2hlZCB0byB3aGVuIHVuc3VjY2Vzc2Z1bC5cbiAqIEBwYXJhbSB7VG9rZW5UeXBlfSB0eXBlXG4gKiAgIFR5cGUgb2YgdGhlIHdob2xlIGxhYmVsIChgW2FdYCkuXG4gKiBAcGFyYW0ge1Rva2VuVHlwZX0gbWFya2VyVHlwZVxuICogICBUeXBlIGZvciB0aGUgbWFya2VycyAoYFtgIGFuZCBgXWApLlxuICogQHBhcmFtIHtUb2tlblR5cGV9IHN0cmluZ1R5cGVcbiAqICAgVHlwZSBmb3IgdGhlIGlkZW50aWZpZXIgKGBhYCkuXG4gKiBAcmV0dXJucyB7U3RhdGV9XG4gKiAgIFN0YXJ0IHN0YXRlLlxuICovXG4vLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbWF4LXBhcmFtc1xuZXhwb3J0IGZ1bmN0aW9uIGZhY3RvcnlMYWJlbChlZmZlY3RzLCBvaywgbm9rLCB0eXBlLCBtYXJrZXJUeXBlLCBzdHJpbmdUeXBlKSB7XG4gIGNvbnN0IHNlbGYgPSB0aGlzXG4gIGxldCBzaXplID0gMFxuICAvKiogQHR5cGUge2Jvb2xlYW59ICovXG4gIGxldCBzZWVuXG5cbiAgcmV0dXJuIHN0YXJ0XG5cbiAgLyoqXG4gICAqIFN0YXJ0IG9mIGxhYmVsLlxuICAgKlxuICAgKiBgYGBtYXJrZG93blxuICAgKiA+IHwgW2FdXG4gICAqICAgICBeXG4gICAqIGBgYFxuICAgKlxuICAgKiBAdHlwZSB7U3RhdGV9XG4gICAqL1xuICBmdW5jdGlvbiBzdGFydChjb2RlKSB7XG4gICAgYXNzZXJ0KGNvZGUgPT09IGNvZGVzLmxlZnRTcXVhcmVCcmFja2V0LCAnZXhwZWN0ZWQgYFtgJylcbiAgICBlZmZlY3RzLmVudGVyKHR5cGUpXG4gICAgZWZmZWN0cy5lbnRlcihtYXJrZXJUeXBlKVxuICAgIGVmZmVjdHMuY29uc3VtZShjb2RlKVxuICAgIGVmZmVjdHMuZXhpdChtYXJrZXJUeXBlKVxuICAgIGVmZmVjdHMuZW50ZXIoc3RyaW5nVHlwZSlcbiAgICByZXR1cm4gYXRCcmVha1xuICB9XG5cbiAgLyoqXG4gICAqIEluIGxhYmVsLCBhdCBzb21ldGhpbmcsIGJlZm9yZSBzb21ldGhpbmcgZWxzZS5cbiAgICpcbiAgICogYGBgbWFya2Rvd25cbiAgICogPiB8IFthXVxuICAgKiAgICAgIF5cbiAgICogYGBgXG4gICAqXG4gICAqIEB0eXBlIHtTdGF0ZX1cbiAgICovXG4gIGZ1bmN0aW9uIGF0QnJlYWsoY29kZSkge1xuICAgIGlmIChcbiAgICAgIHNpemUgPiBjb25zdGFudHMubGlua1JlZmVyZW5jZVNpemVNYXggfHxcbiAgICAgIGNvZGUgPT09IGNvZGVzLmVvZiB8fFxuICAgICAgY29kZSA9PT0gY29kZXMubGVmdFNxdWFyZUJyYWNrZXQgfHxcbiAgICAgIChjb2RlID09PSBjb2Rlcy5yaWdodFNxdWFyZUJyYWNrZXQgJiYgIXNlZW4pIHx8XG4gICAgICAvLyBUbyBkbzogcmVtb3ZlIGluIHRoZSBmdXR1cmUgb25jZSB3ZeKAmXZlIHN3aXRjaGVkIGZyb21cbiAgICAgIC8vIGBtaWNyb21hcmstZXh0ZW5zaW9uLWZvb3Rub3RlYCB0byBgbWljcm9tYXJrLWV4dGVuc2lvbi1nZm0tZm9vdG5vdGVgLFxuICAgICAgLy8gd2hpY2ggZG9lc27igJl0IG5lZWQgdGhpcy5cbiAgICAgIC8vIEhpZGRlbiBmb290bm90ZXMgaG9vay5cbiAgICAgIC8qIGM4IGlnbm9yZSBuZXh0IDMgKi9cbiAgICAgIChjb2RlID09PSBjb2Rlcy5jYXJldCAmJlxuICAgICAgICAhc2l6ZSAmJlxuICAgICAgICAnX2hpZGRlbkZvb3Rub3RlU3VwcG9ydCcgaW4gc2VsZi5wYXJzZXIuY29uc3RydWN0cylcbiAgICApIHtcbiAgICAgIHJldHVybiBub2soY29kZSlcbiAgICB9XG5cbiAgICBpZiAoY29kZSA9PT0gY29kZXMucmlnaHRTcXVhcmVCcmFja2V0KSB7XG4gICAgICBlZmZlY3RzLmV4aXQoc3RyaW5nVHlwZSlcbiAgICAgIGVmZmVjdHMuZW50ZXIobWFya2VyVHlwZSlcbiAgICAgIGVmZmVjdHMuY29uc3VtZShjb2RlKVxuICAgICAgZWZmZWN0cy5leGl0KG1hcmtlclR5cGUpXG4gICAgICBlZmZlY3RzLmV4aXQodHlwZSlcbiAgICAgIHJldHVybiBva1xuICAgIH1cblxuICAgIC8vIFRvIGRvOiBpbmRlbnQ/IExpbmsgY2h1bmtzIGFuZCBFT0xzIHRvZ2V0aGVyP1xuICAgIGlmIChtYXJrZG93bkxpbmVFbmRpbmcoY29kZSkpIHtcbiAgICAgIGVmZmVjdHMuZW50ZXIodHlwZXMubGluZUVuZGluZylcbiAgICAgIGVmZmVjdHMuY29uc3VtZShjb2RlKVxuICAgICAgZWZmZWN0cy5leGl0KHR5cGVzLmxpbmVFbmRpbmcpXG4gICAgICByZXR1cm4gYXRCcmVha1xuICAgIH1cblxuICAgIGVmZmVjdHMuZW50ZXIodHlwZXMuY2h1bmtTdHJpbmcsIHtjb250ZW50VHlwZTogY29uc3RhbnRzLmNvbnRlbnRUeXBlU3RyaW5nfSlcbiAgICByZXR1cm4gbGFiZWxJbnNpZGUoY29kZSlcbiAgfVxuXG4gIC8qKlxuICAgKiBJbiBsYWJlbCwgaW4gdGV4dC5cbiAgICpcbiAgICogYGBgbWFya2Rvd25cbiAgICogPiB8IFthXVxuICAgKiAgICAgIF5cbiAgICogYGBgXG4gICAqXG4gICAqIEB0eXBlIHtTdGF0ZX1cbiAgICovXG4gIGZ1bmN0aW9uIGxhYmVsSW5zaWRlKGNvZGUpIHtcbiAgICBpZiAoXG4gICAgICBjb2RlID09PSBjb2Rlcy5lb2YgfHxcbiAgICAgIGNvZGUgPT09IGNvZGVzLmxlZnRTcXVhcmVCcmFja2V0IHx8XG4gICAgICBjb2RlID09PSBjb2Rlcy5yaWdodFNxdWFyZUJyYWNrZXQgfHxcbiAgICAgIG1hcmtkb3duTGluZUVuZGluZyhjb2RlKSB8fFxuICAgICAgc2l6ZSsrID4gY29uc3RhbnRzLmxpbmtSZWZlcmVuY2VTaXplTWF4XG4gICAgKSB7XG4gICAgICBlZmZlY3RzLmV4aXQodHlwZXMuY2h1bmtTdHJpbmcpXG4gICAgICByZXR1cm4gYXRCcmVhayhjb2RlKVxuICAgIH1cblxuICAgIGVmZmVjdHMuY29uc3VtZShjb2RlKVxuICAgIGlmICghc2Vlbikgc2VlbiA9ICFtYXJrZG93blNwYWNlKGNvZGUpXG4gICAgcmV0dXJuIGNvZGUgPT09IGNvZGVzLmJhY2tzbGFzaCA/IGxhYmVsRXNjYXBlIDogbGFiZWxJbnNpZGVcbiAgfVxuXG4gIC8qKlxuICAgKiBBZnRlciBgXFxgLCBhdCBhIHNwZWNpYWwgY2hhcmFjdGVyLlxuICAgKlxuICAgKiBgYGBtYXJrZG93blxuICAgKiA+IHwgW2FcXCphXVxuICAgKiAgICAgICAgXlxuICAgKiBgYGBcbiAgICpcbiAgICogQHR5cGUge1N0YXRlfVxuICAgKi9cbiAgZnVuY3Rpb24gbGFiZWxFc2NhcGUoY29kZSkge1xuICAgIGlmIChcbiAgICAgIGNvZGUgPT09IGNvZGVzLmxlZnRTcXVhcmVCcmFja2V0IHx8XG4gICAgICBjb2RlID09PSBjb2Rlcy5iYWNrc2xhc2ggfHxcbiAgICAgIGNvZGUgPT09IGNvZGVzLnJpZ2h0U3F1YXJlQnJhY2tldFxuICAgICkge1xuICAgICAgZWZmZWN0cy5jb25zdW1lKGNvZGUpXG4gICAgICBzaXplKytcbiAgICAgIHJldHVybiBsYWJlbEluc2lkZVxuICAgIH1cblxuICAgIHJldHVybiBsYWJlbEluc2lkZShjb2RlKVxuICB9XG59XG4iXSwibmFtZXMiOlsibWFya2Rvd25MaW5lRW5kaW5nIiwibWFya2Rvd25TcGFjZSIsImNvZGVzIiwiY29uc3RhbnRzIiwidHlwZXMiLCJvayIsImFzc2VydCIsImZhY3RvcnlMYWJlbCIsImVmZmVjdHMiLCJub2siLCJ0eXBlIiwibWFya2VyVHlwZSIsInN0cmluZ1R5cGUiLCJzZWxmIiwic2l6ZSIsInNlZW4iLCJzdGFydCIsImNvZGUiLCJsZWZ0U3F1YXJlQnJhY2tldCIsImVudGVyIiwiY29uc3VtZSIsImV4aXQiLCJhdEJyZWFrIiwibGlua1JlZmVyZW5jZVNpemVNYXgiLCJlb2YiLCJyaWdodFNxdWFyZUJyYWNrZXQiLCJjYXJldCIsInBhcnNlciIsImNvbnN0cnVjdHMiLCJsaW5lRW5kaW5nIiwiY2h1bmtTdHJpbmciLCJjb250ZW50VHlwZSIsImNvbnRlbnRUeXBlU3RyaW5nIiwibGFiZWxJbnNpZGUiLCJiYWNrc2xhc2giLCJsYWJlbEVzY2FwZSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(ssr)/./node_modules/micromark-factory-label/dev/index.js\n");

/***/ })

};
;