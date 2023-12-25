"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
exports.id = "vendor-chunks/trim-lines";
exports.ids = ["vendor-chunks/trim-lines"];
exports.modules = {

/***/ "(ssr)/./node_modules/trim-lines/index.js":
/*!******************************************!*\
  !*** ./node_modules/trim-lines/index.js ***!
  \******************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   trimLines: () => (/* binding */ trimLines)\n/* harmony export */ });\nconst tab = 9 /* `\\t` */ ;\nconst space = 32 /* ` ` */ ;\n/**\n * Remove initial and final spaces and tabs at the line breaks in `value`.\n * Does not trim initial and final spaces and tabs of the value itself.\n *\n * @param {string} value\n *   Value to trim.\n * @returns {string}\n *   Trimmed value.\n */ function trimLines(value) {\n    const source = String(value);\n    const search = /\\r?\\n|\\r/g;\n    let match = search.exec(source);\n    let last = 0;\n    /** @type {Array<string>} */ const lines = [];\n    while(match){\n        lines.push(trimLine(source.slice(last, match.index), last > 0, true), match[0]);\n        last = match.index + match[0].length;\n        match = search.exec(source);\n    }\n    lines.push(trimLine(source.slice(last), last > 0, false));\n    return lines.join(\"\");\n}\n/**\n * @param {string} value\n *   Line to trim.\n * @param {boolean} start\n *   Whether to trim the start of the line.\n * @param {boolean} end\n *   Whether to trim the end of the line.\n * @returns {string}\n *   Trimmed line.\n */ function trimLine(value, start, end) {\n    let startIndex = 0;\n    let endIndex = value.length;\n    if (start) {\n        let code = value.codePointAt(startIndex);\n        while(code === tab || code === space){\n            startIndex++;\n            code = value.codePointAt(startIndex);\n        }\n    }\n    if (end) {\n        let code = value.codePointAt(endIndex - 1);\n        while(code === tab || code === space){\n            endIndex--;\n            code = value.codePointAt(endIndex - 1);\n        }\n    }\n    return endIndex > startIndex ? value.slice(startIndex, endIndex) : \"\";\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHNzcikvLi9ub2RlX21vZHVsZXMvdHJpbS1saW5lcy9pbmRleC5qcyIsIm1hcHBpbmdzIjoiOzs7O0FBQUEsTUFBTUEsTUFBTSxFQUFFLFFBQVE7QUFDdEIsTUFBTUMsUUFBUSxHQUFHLE9BQU87QUFFeEI7Ozs7Ozs7O0NBUUMsR0FDTSxTQUFTQyxVQUFVQyxLQUFLO0lBQzdCLE1BQU1DLFNBQVNDLE9BQU9GO0lBQ3RCLE1BQU1HLFNBQVM7SUFDZixJQUFJQyxRQUFRRCxPQUFPRSxJQUFJLENBQUNKO0lBQ3hCLElBQUlLLE9BQU87SUFDWCwwQkFBMEIsR0FDMUIsTUFBTUMsUUFBUSxFQUFFO0lBRWhCLE1BQU9ILE1BQU87UUFDWkcsTUFBTUMsSUFBSSxDQUNSQyxTQUFTUixPQUFPUyxLQUFLLENBQUNKLE1BQU1GLE1BQU1PLEtBQUssR0FBR0wsT0FBTyxHQUFHLE9BQ3BERixLQUFLLENBQUMsRUFBRTtRQUdWRSxPQUFPRixNQUFNTyxLQUFLLEdBQUdQLEtBQUssQ0FBQyxFQUFFLENBQUNRLE1BQU07UUFDcENSLFFBQVFELE9BQU9FLElBQUksQ0FBQ0o7SUFDdEI7SUFFQU0sTUFBTUMsSUFBSSxDQUFDQyxTQUFTUixPQUFPUyxLQUFLLENBQUNKLE9BQU9BLE9BQU8sR0FBRztJQUVsRCxPQUFPQyxNQUFNTSxJQUFJLENBQUM7QUFDcEI7QUFFQTs7Ozs7Ozs7O0NBU0MsR0FDRCxTQUFTSixTQUFTVCxLQUFLLEVBQUVjLEtBQUssRUFBRUMsR0FBRztJQUNqQyxJQUFJQyxhQUFhO0lBQ2pCLElBQUlDLFdBQVdqQixNQUFNWSxNQUFNO0lBRTNCLElBQUlFLE9BQU87UUFDVCxJQUFJSSxPQUFPbEIsTUFBTW1CLFdBQVcsQ0FBQ0g7UUFFN0IsTUFBT0UsU0FBU3JCLE9BQU9xQixTQUFTcEIsTUFBTztZQUNyQ2tCO1lBQ0FFLE9BQU9sQixNQUFNbUIsV0FBVyxDQUFDSDtRQUMzQjtJQUNGO0lBRUEsSUFBSUQsS0FBSztRQUNQLElBQUlHLE9BQU9sQixNQUFNbUIsV0FBVyxDQUFDRixXQUFXO1FBRXhDLE1BQU9DLFNBQVNyQixPQUFPcUIsU0FBU3BCLE1BQU87WUFDckNtQjtZQUNBQyxPQUFPbEIsTUFBTW1CLFdBQVcsQ0FBQ0YsV0FBVztRQUN0QztJQUNGO0lBRUEsT0FBT0EsV0FBV0QsYUFBYWhCLE1BQU1VLEtBQUssQ0FBQ00sWUFBWUMsWUFBWTtBQUNyRSIsInNvdXJjZXMiOlsid2VicGFjazovL3BvcnRmb2xpby12Mi8uL25vZGVfbW9kdWxlcy90cmltLWxpbmVzL2luZGV4LmpzPzg5YjIiXSwic291cmNlc0NvbnRlbnQiOlsiY29uc3QgdGFiID0gOSAvKiBgXFx0YCAqL1xuY29uc3Qgc3BhY2UgPSAzMiAvKiBgIGAgKi9cblxuLyoqXG4gKiBSZW1vdmUgaW5pdGlhbCBhbmQgZmluYWwgc3BhY2VzIGFuZCB0YWJzIGF0IHRoZSBsaW5lIGJyZWFrcyBpbiBgdmFsdWVgLlxuICogRG9lcyBub3QgdHJpbSBpbml0aWFsIGFuZCBmaW5hbCBzcGFjZXMgYW5kIHRhYnMgb2YgdGhlIHZhbHVlIGl0c2VsZi5cbiAqXG4gKiBAcGFyYW0ge3N0cmluZ30gdmFsdWVcbiAqICAgVmFsdWUgdG8gdHJpbS5cbiAqIEByZXR1cm5zIHtzdHJpbmd9XG4gKiAgIFRyaW1tZWQgdmFsdWUuXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiB0cmltTGluZXModmFsdWUpIHtcbiAgY29uc3Qgc291cmNlID0gU3RyaW5nKHZhbHVlKVxuICBjb25zdCBzZWFyY2ggPSAvXFxyP1xcbnxcXHIvZ1xuICBsZXQgbWF0Y2ggPSBzZWFyY2guZXhlYyhzb3VyY2UpXG4gIGxldCBsYXN0ID0gMFxuICAvKiogQHR5cGUge0FycmF5PHN0cmluZz59ICovXG4gIGNvbnN0IGxpbmVzID0gW11cblxuICB3aGlsZSAobWF0Y2gpIHtcbiAgICBsaW5lcy5wdXNoKFxuICAgICAgdHJpbUxpbmUoc291cmNlLnNsaWNlKGxhc3QsIG1hdGNoLmluZGV4KSwgbGFzdCA+IDAsIHRydWUpLFxuICAgICAgbWF0Y2hbMF1cbiAgICApXG5cbiAgICBsYXN0ID0gbWF0Y2guaW5kZXggKyBtYXRjaFswXS5sZW5ndGhcbiAgICBtYXRjaCA9IHNlYXJjaC5leGVjKHNvdXJjZSlcbiAgfVxuXG4gIGxpbmVzLnB1c2godHJpbUxpbmUoc291cmNlLnNsaWNlKGxhc3QpLCBsYXN0ID4gMCwgZmFsc2UpKVxuXG4gIHJldHVybiBsaW5lcy5qb2luKCcnKVxufVxuXG4vKipcbiAqIEBwYXJhbSB7c3RyaW5nfSB2YWx1ZVxuICogICBMaW5lIHRvIHRyaW0uXG4gKiBAcGFyYW0ge2Jvb2xlYW59IHN0YXJ0XG4gKiAgIFdoZXRoZXIgdG8gdHJpbSB0aGUgc3RhcnQgb2YgdGhlIGxpbmUuXG4gKiBAcGFyYW0ge2Jvb2xlYW59IGVuZFxuICogICBXaGV0aGVyIHRvIHRyaW0gdGhlIGVuZCBvZiB0aGUgbGluZS5cbiAqIEByZXR1cm5zIHtzdHJpbmd9XG4gKiAgIFRyaW1tZWQgbGluZS5cbiAqL1xuZnVuY3Rpb24gdHJpbUxpbmUodmFsdWUsIHN0YXJ0LCBlbmQpIHtcbiAgbGV0IHN0YXJ0SW5kZXggPSAwXG4gIGxldCBlbmRJbmRleCA9IHZhbHVlLmxlbmd0aFxuXG4gIGlmIChzdGFydCkge1xuICAgIGxldCBjb2RlID0gdmFsdWUuY29kZVBvaW50QXQoc3RhcnRJbmRleClcblxuICAgIHdoaWxlIChjb2RlID09PSB0YWIgfHwgY29kZSA9PT0gc3BhY2UpIHtcbiAgICAgIHN0YXJ0SW5kZXgrK1xuICAgICAgY29kZSA9IHZhbHVlLmNvZGVQb2ludEF0KHN0YXJ0SW5kZXgpXG4gICAgfVxuICB9XG5cbiAgaWYgKGVuZCkge1xuICAgIGxldCBjb2RlID0gdmFsdWUuY29kZVBvaW50QXQoZW5kSW5kZXggLSAxKVxuXG4gICAgd2hpbGUgKGNvZGUgPT09IHRhYiB8fCBjb2RlID09PSBzcGFjZSkge1xuICAgICAgZW5kSW5kZXgtLVxuICAgICAgY29kZSA9IHZhbHVlLmNvZGVQb2ludEF0KGVuZEluZGV4IC0gMSlcbiAgICB9XG4gIH1cblxuICByZXR1cm4gZW5kSW5kZXggPiBzdGFydEluZGV4ID8gdmFsdWUuc2xpY2Uoc3RhcnRJbmRleCwgZW5kSW5kZXgpIDogJydcbn1cbiJdLCJuYW1lcyI6WyJ0YWIiLCJzcGFjZSIsInRyaW1MaW5lcyIsInZhbHVlIiwic291cmNlIiwiU3RyaW5nIiwic2VhcmNoIiwibWF0Y2giLCJleGVjIiwibGFzdCIsImxpbmVzIiwicHVzaCIsInRyaW1MaW5lIiwic2xpY2UiLCJpbmRleCIsImxlbmd0aCIsImpvaW4iLCJzdGFydCIsImVuZCIsInN0YXJ0SW5kZXgiLCJlbmRJbmRleCIsImNvZGUiLCJjb2RlUG9pbnRBdCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(ssr)/./node_modules/trim-lines/index.js\n");

/***/ })

};
;