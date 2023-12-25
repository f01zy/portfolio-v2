"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
exports.id = "vendor-chunks/react-markdown";
exports.ids = ["vendor-chunks/react-markdown"];
exports.modules = {

/***/ "(ssr)/./node_modules/react-markdown/lib/index.js":
/*!**************************************************!*\
  !*** ./node_modules/react-markdown/lib/index.js ***!
  \**************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   Markdown: () => (/* binding */ Markdown),\n/* harmony export */   defaultUrlTransform: () => (/* binding */ defaultUrlTransform)\n/* harmony export */ });\n/* harmony import */ var devlop__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! devlop */ \"(ssr)/./node_modules/devlop/lib/development.js\");\n/* harmony import */ var hast_util_to_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! hast-util-to-jsx-runtime */ \"(ssr)/./node_modules/hast-util-to-jsx-runtime/lib/index.js\");\n/* harmony import */ var html_url_attributes__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! html-url-attributes */ \"(ssr)/./node_modules/html-url-attributes/lib/index.js\");\n/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-runtime */ \"(ssr)/./node_modules/next/dist/server/future/route-modules/app-page/vendored/ssr/react-jsx-runtime.js\");\n/* harmony import */ var remark_parse__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! remark-parse */ \"(ssr)/./node_modules/remark-parse/lib/index.js\");\n/* harmony import */ var remark_rehype__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! remark-rehype */ \"(ssr)/./node_modules/remark-rehype/lib/index.js\");\n/* harmony import */ var unified__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! unified */ \"(ssr)/./node_modules/unified/lib/index.js\");\n/* harmony import */ var unist_util_visit__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! unist-util-visit */ \"(ssr)/./node_modules/unist-util-visit/lib/index.js\");\n/* harmony import */ var vfile__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! vfile */ \"(ssr)/./node_modules/vfile/lib/index.js\");\n// Register `Raw` in tree:\n/// <reference types=\"mdast-util-to-hast\" />\n/**\n * @typedef {import('hast').Element} Element\n * @typedef {import('hast').ElementContent} ElementContent\n * @typedef {import('hast').Nodes} Nodes\n * @typedef {import('hast').Parents} Parents\n * @typedef {import('hast').Root} Root\n * @typedef {import('hast-util-to-jsx-runtime').Components} JsxRuntimeComponents\n * @typedef {import('remark-rehype').Options} RemarkRehypeOptions\n * @typedef {import('unist-util-visit').BuildVisitor<Root>} Visitor\n * @typedef {import('unified').PluggableList} PluggableList\n */ /**\n * @callback AllowElement\n *   Filter elements.\n * @param {Readonly<Element>} element\n *   Element to check.\n * @param {number} index\n *   Index of `element` in `parent`.\n * @param {Readonly<Parents> | undefined} parent\n *   Parent of `element`.\n * @returns {boolean | null | undefined}\n *   Whether to allow `element` (default: `false`).\n *\n * @typedef {Partial<JsxRuntimeComponents>} Components\n *   Map tag names to components.\n *\n * @typedef Deprecation\n *   Deprecation.\n * @property {string} from\n *   Old field.\n * @property {string} id\n *   ID in readme.\n * @property {keyof Options} [to]\n *   New field.\n *\n * @typedef Options\n *   Configuration.\n * @property {AllowElement | null | undefined} [allowElement]\n *   Filter elements (optional);\n *   `allowedElements` / `disallowedElements` is used first.\n * @property {ReadonlyArray<string> | null | undefined} [allowedElements]\n *   Tag names to allow (default: all tag names);\n *   cannot combine w/ `disallowedElements`.\n * @property {string | null | undefined} [children]\n *   Markdown.\n * @property {string | null | undefined} [className]\n *   Wrap in a `div` with this class name.\n * @property {Components | null | undefined} [components]\n *   Map tag names to components.\n * @property {ReadonlyArray<string> | null | undefined} [disallowedElements]\n *   Tag names to disallow (default: `[]`);\n *   cannot combine w/ `allowedElements`.\n * @property {PluggableList | null | undefined} [rehypePlugins]\n *   List of rehype plugins to use.\n * @property {PluggableList | null | undefined} [remarkPlugins]\n *   List of remark plugins to use.\n * @property {Readonly<RemarkRehypeOptions> | null | undefined} [remarkRehypeOptions]\n *   Options to pass through to `remark-rehype`.\n * @property {boolean | null | undefined} [skipHtml=false]\n *   Ignore HTML in markdown completely (default: `false`).\n * @property {boolean | null | undefined} [unwrapDisallowed=false]\n *   Extract (unwrap) what’s in disallowed elements (default: `false`);\n *   normally when say `strong` is not allowed, it and it’s children are dropped,\n *   with `unwrapDisallowed` the element itself is replaced by its children.\n * @property {UrlTransform | null | undefined} [urlTransform]\n *   Change URLs (default: `defaultUrlTransform`)\n *\n * @callback UrlTransform\n *   Transform all URLs.\n * @param {string} url\n *   URL.\n * @param {string} key\n *   Property name (example: `'href'`).\n * @param {Readonly<Element>} node\n *   Node.\n * @returns {string | null | undefined}\n *   Transformed URL (optional).\n */ \n\n\n// @ts-expect-error: untyped.\n\n\n\n\n\n\nconst changelog = \"https://github.com/remarkjs/react-markdown/blob/main/changelog.md\";\n/** @type {PluggableList} */ const emptyPlugins = [];\n/** @type {Readonly<RemarkRehypeOptions>} */ const emptyRemarkRehypeOptions = {\n    allowDangerousHtml: true\n};\nconst safeProtocol = /^(https?|ircs?|mailto|xmpp)$/i;\n// Mutable because we `delete` any time it’s used and a message is sent.\n/** @type {ReadonlyArray<Readonly<Deprecation>>} */ const deprecations = [\n    {\n        from: \"astPlugins\",\n        id: \"remove-buggy-html-in-markdown-parser\"\n    },\n    {\n        from: \"allowDangerousHtml\",\n        id: \"remove-buggy-html-in-markdown-parser\"\n    },\n    {\n        from: \"allowNode\",\n        id: \"replace-allownode-allowedtypes-and-disallowedtypes\",\n        to: \"allowElement\"\n    },\n    {\n        from: \"allowedTypes\",\n        id: \"replace-allownode-allowedtypes-and-disallowedtypes\",\n        to: \"allowedElements\"\n    },\n    {\n        from: \"disallowedTypes\",\n        id: \"replace-allownode-allowedtypes-and-disallowedtypes\",\n        to: \"disallowedElements\"\n    },\n    {\n        from: \"escapeHtml\",\n        id: \"remove-buggy-html-in-markdown-parser\"\n    },\n    {\n        from: \"includeElementIndex\",\n        id: \"#remove-includeelementindex\"\n    },\n    {\n        from: \"includeNodeIndex\",\n        id: \"change-includenodeindex-to-includeelementindex\"\n    },\n    {\n        from: \"linkTarget\",\n        id: \"remove-linktarget\"\n    },\n    {\n        from: \"plugins\",\n        id: \"change-plugins-to-remarkplugins\",\n        to: \"remarkPlugins\"\n    },\n    {\n        from: \"rawSourcePos\",\n        id: \"#remove-rawsourcepos\"\n    },\n    {\n        from: \"renderers\",\n        id: \"change-renderers-to-components\",\n        to: \"components\"\n    },\n    {\n        from: \"source\",\n        id: \"change-source-to-children\",\n        to: \"children\"\n    },\n    {\n        from: \"sourcePos\",\n        id: \"#remove-sourcepos\"\n    },\n    {\n        from: \"transformImageUri\",\n        id: \"#add-urltransform\",\n        to: \"urlTransform\"\n    },\n    {\n        from: \"transformLinkUri\",\n        id: \"#add-urltransform\",\n        to: \"urlTransform\"\n    }\n];\n/**\n * Component to render markdown.\n *\n * @param {Readonly<Options>} options\n *   Props.\n * @returns {JSX.Element}\n *   React element.\n */ function Markdown(options) {\n    const allowedElements = options.allowedElements;\n    const allowElement = options.allowElement;\n    const children = options.children || \"\";\n    const className = options.className;\n    const components = options.components;\n    const disallowedElements = options.disallowedElements;\n    const rehypePlugins = options.rehypePlugins || emptyPlugins;\n    const remarkPlugins = options.remarkPlugins || emptyPlugins;\n    const remarkRehypeOptions = options.remarkRehypeOptions ? {\n        ...options.remarkRehypeOptions,\n        ...emptyRemarkRehypeOptions\n    } : emptyRemarkRehypeOptions;\n    const skipHtml = options.skipHtml;\n    const unwrapDisallowed = options.unwrapDisallowed;\n    const urlTransform = options.urlTransform || defaultUrlTransform;\n    const processor = (0,unified__WEBPACK_IMPORTED_MODULE_1__.unified)().use(remark_parse__WEBPACK_IMPORTED_MODULE_2__[\"default\"]).use(remarkPlugins).use(remark_rehype__WEBPACK_IMPORTED_MODULE_3__[\"default\"], remarkRehypeOptions).use(rehypePlugins);\n    const file = new vfile__WEBPACK_IMPORTED_MODULE_4__.VFile();\n    if (typeof children === \"string\") {\n        file.value = children;\n    } else {\n        (0,devlop__WEBPACK_IMPORTED_MODULE_5__.unreachable)(\"Unexpected value `\" + children + \"` for `children` prop, expected `string`\");\n    }\n    if (allowedElements && disallowedElements) {\n        (0,devlop__WEBPACK_IMPORTED_MODULE_5__.unreachable)(\"Unexpected combined `allowedElements` and `disallowedElements`, expected one or the other\");\n    }\n    for (const deprecation of deprecations){\n        if (Object.hasOwn(options, deprecation.from)) {\n            (0,devlop__WEBPACK_IMPORTED_MODULE_5__.unreachable)(\"Unexpected `\" + deprecation.from + \"` prop, \" + (deprecation.to ? \"use `\" + deprecation.to + \"` instead\" : \"remove it\") + \" (see <\" + changelog + \"#\" + deprecation.id + \"> for more info)\");\n        }\n    }\n    const mdastTree = processor.parse(file);\n    /** @type {Nodes} */ let hastTree = processor.runSync(mdastTree, file);\n    // Wrap in `div` if there’s a class name.\n    if (className) {\n        hastTree = {\n            type: \"element\",\n            tagName: \"div\",\n            properties: {\n                className\n            },\n            // Assume no doctypes.\n            children: /** @type {Array<ElementContent>} */ hastTree.type === \"root\" ? hastTree.children : [\n                hastTree\n            ]\n        };\n    }\n    (0,unist_util_visit__WEBPACK_IMPORTED_MODULE_6__.visit)(hastTree, transform);\n    return (0,hast_util_to_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.toJsxRuntime)(hastTree, {\n        Fragment: react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment,\n        components,\n        ignoreInvalidStyle: true,\n        jsx: react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx,\n        jsxs: react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs,\n        passKeys: true,\n        passNode: true\n    });\n    /** @type {Visitor} */ function transform(node, index, parent) {\n        if (node.type === \"raw\" && parent && typeof index === \"number\") {\n            if (skipHtml) {\n                parent.children.splice(index, 1);\n            } else {\n                parent.children[index] = {\n                    type: \"text\",\n                    value: node.value\n                };\n            }\n            return index;\n        }\n        if (node.type === \"element\") {\n            /** @type {string} */ let key;\n            for(key in html_url_attributes__WEBPACK_IMPORTED_MODULE_8__.urlAttributes){\n                if (Object.hasOwn(html_url_attributes__WEBPACK_IMPORTED_MODULE_8__.urlAttributes, key) && Object.hasOwn(node.properties, key)) {\n                    const value = node.properties[key];\n                    const test = html_url_attributes__WEBPACK_IMPORTED_MODULE_8__.urlAttributes[key];\n                    if (test === null || test.includes(node.tagName)) {\n                        node.properties[key] = urlTransform(String(value || \"\"), key, node);\n                    }\n                }\n            }\n        }\n        if (node.type === \"element\") {\n            let remove = allowedElements ? !allowedElements.includes(node.tagName) : disallowedElements ? disallowedElements.includes(node.tagName) : false;\n            if (!remove && allowElement && typeof index === \"number\") {\n                remove = !allowElement(node, index, parent);\n            }\n            if (remove && parent && typeof index === \"number\") {\n                if (unwrapDisallowed && node.children) {\n                    parent.children.splice(index, 1, ...node.children);\n                } else {\n                    parent.children.splice(index, 1);\n                }\n                return index;\n            }\n        }\n    }\n}\n/**\n * Make a URL safe.\n *\n * @satisfies {UrlTransform}\n * @param {string} value\n *   URL.\n * @returns {string}\n *   Safe URL.\n */ function defaultUrlTransform(value) {\n    // Same as:\n    // <https://github.com/micromark/micromark/blob/929275e/packages/micromark-util-sanitize-uri/dev/index.js#L34>\n    // But without the `encode` part.\n    const colon = value.indexOf(\":\");\n    const questionMark = value.indexOf(\"?\");\n    const numberSign = value.indexOf(\"#\");\n    const slash = value.indexOf(\"/\");\n    if (// If there is no protocol, it’s relative.\n    colon < 0 || // If the first colon is after a `?`, `#`, or `/`, it’s not a protocol.\n    slash > -1 && colon > slash || questionMark > -1 && colon > questionMark || numberSign > -1 && colon > numberSign || // It is a protocol, it should be allowed.\n    safeProtocol.test(value.slice(0, colon))) {\n        return value;\n    }\n    return \"\";\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHNzcikvLi9ub2RlX21vZHVsZXMvcmVhY3QtbWFya2Rvd24vbGliL2luZGV4LmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7O0FBQUEsMEJBQTBCO0FBQzFCLDRDQUE0QztBQUU1Qzs7Ozs7Ozs7OztDQVVDLEdBRUQ7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztDQWtFQyxHQUVpQztBQUNtQjtBQUNKO0FBQ2pELDZCQUE2QjtBQUN3QjtBQUNmO0FBQ0U7QUFDVDtBQUNPO0FBQ1g7QUFFM0IsTUFBTVcsWUFDSjtBQUVGLDBCQUEwQixHQUMxQixNQUFNQyxlQUFlLEVBQUU7QUFDdkIsMENBQTBDLEdBQzFDLE1BQU1DLDJCQUEyQjtJQUFDQyxvQkFBb0I7QUFBSTtBQUMxRCxNQUFNQyxlQUFlO0FBRXJCLHdFQUF3RTtBQUN4RSxpREFBaUQsR0FDakQsTUFBTUMsZUFBZTtJQUNuQjtRQUFDQyxNQUFNO1FBQWNDLElBQUk7SUFBc0M7SUFDL0Q7UUFBQ0QsTUFBTTtRQUFzQkMsSUFBSTtJQUFzQztJQUN2RTtRQUNFRCxNQUFNO1FBQ05DLElBQUk7UUFDSkMsSUFBSTtJQUNOO0lBQ0E7UUFDRUYsTUFBTTtRQUNOQyxJQUFJO1FBQ0pDLElBQUk7SUFDTjtJQUNBO1FBQ0VGLE1BQU07UUFDTkMsSUFBSTtRQUNKQyxJQUFJO0lBQ047SUFDQTtRQUFDRixNQUFNO1FBQWNDLElBQUk7SUFBc0M7SUFDL0Q7UUFBQ0QsTUFBTTtRQUF1QkMsSUFBSTtJQUE2QjtJQUMvRDtRQUNFRCxNQUFNO1FBQ05DLElBQUk7SUFDTjtJQUNBO1FBQUNELE1BQU07UUFBY0MsSUFBSTtJQUFtQjtJQUM1QztRQUFDRCxNQUFNO1FBQVdDLElBQUk7UUFBbUNDLElBQUk7SUFBZTtJQUM1RTtRQUFDRixNQUFNO1FBQWdCQyxJQUFJO0lBQXNCO0lBQ2pEO1FBQUNELE1BQU07UUFBYUMsSUFBSTtRQUFrQ0MsSUFBSTtJQUFZO0lB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TUFBTSxDQUFDRixPQUFPLE1BQU1ELEtBQUs3QixRQUFRO2dCQUNuRCxPQUFPO29CQUNMK0IsT0FBTy9CLFFBQVEsQ0FBQ2dDLE1BQU0sQ0FBQ0YsT0FBTztnQkFDaEM7Z0JBRUEsT0FBT0E7WUFDVDtRQUNGO0lBQ0Y7QUFDRjtBQUVBOzs7Ozs7OztDQVFDLEdBQ00sU0FBU3BCLG9CQUFvQkksS0FBSztJQUN2QyxXQUFXO0lBQ1gsOEdBQThHO0lBQzlHLGlDQUFpQztJQUNqQyxNQUFNd0IsUUFBUXhCLE1BQU15QixPQUFPLENBQUM7SUFDNUIsTUFBTUMsZUFBZTFCLE1BQU15QixPQUFPLENBQUM7SUFDbkMsTUFBTUUsYUFBYTNCLE1BQU15QixPQUFPLENBQUM7SUFDakMsTUFBTUcsUUFBUTVCLE1BQU15QixPQUFPLENBQUM7SUFFNUIsSUFDRSwwQ0FBMEM7SUFDMUNELFFBQVEsS0FDUix1RUFBdUU7SUFDdEVJLFFBQVEsQ0FBQyxLQUFLSixRQUFRSSxTQUN0QkYsZUFBZSxDQUFDLEtBQUtGLFFBQVFFLGdCQUM3QkMsYUFBYSxDQUFDLEtBQUtILFFBQVFHLGNBQzVCLDBDQUEwQztJQUMxQ2xELGFBQWEyQyxJQUFJLENBQUNwQixNQUFNNkIsS0FBSyxDQUFDLEdBQUdMLFNBQ2pDO1FBQ0EsT0FBT3hCO0lBQ1Q7SUFFQSxPQUFPO0FBQ1QiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9wb3J0Zm9saW8tdjIvLi9ub2RlX21vZHVsZXMvcmVhY3QtbWFya2Rvd24vbGliL2luZGV4LmpzPzIyM2MiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gUmVnaXN0ZXIgYFJhd2AgaW4gdHJlZTpcbi8vLyA8cmVmZXJlbmNlIHR5cGVzPVwibWRhc3QtdXRpbC10by1oYXN0XCIgLz5cblxuLyoqXG4gKiBAdHlwZWRlZiB7aW1wb3J0KCdoYXN0JykuRWxlbWVudH0gRWxlbWVudFxuICogQHR5cGVkZWYge2ltcG9ydCgnaGFzdCcpLkVsZW1lbnRDb250ZW50fSBFbGVtZW50Q29udGVudFxuICogQHR5cGVkZWYge2ltcG9ydCgnaGFzdCcpLk5vZGVzfSBOb2Rlc1xuICogQHR5cGVkZWYge2ltcG9ydCgnaGFzdCcpLlBhcmVudHN9IFBhcmVudHNcbiAqIEB0eXBlZGVmIHtpbXBvcnQoJ2hhc3QnKS5Sb290fSBSb290XG4gKiBAdHlwZWRlZiB7aW1wb3J0KCdoYXN0LXV0aWwtdG8tanN4LXJ1bnRpbWUnKS5Db21wb25lbnRzfSBKc3hSdW50aW1lQ29tcG9uZW50c1xuICogQHR5cGVkZWYge2ltcG9ydCgncmVtYXJrLXJlaHlwZScpLk9wdGlvbnN9IFJlbWFya1JlaHlwZU9wdGlvbnNcbiAqIEB0eXBlZGVmIHtpbXBvcnQoJ3VuaXN0LXV0aWwtdmlzaXQnKS5CdWlsZFZpc2l0b3I8Um9vdD59IFZpc2l0b3JcbiAqIEB0eXBlZGVmIHtpbXBvcnQoJ3VuaWZpZWQnKS5QbHVnZ2FibGVMaXN0fSBQbHVnZ2FibGVMaXN0XG4gKi9cblxuLyoqXG4gKiBAY2FsbGJhY2sgQWxsb3dFbGVtZW50XG4gKiAgIEZpbHRlciBlbGVtZW50cy5cbiAqIEBwYXJhbSB7UmVhZG9ubHk8RWxlbWVudD59IGVsZW1lbnRcbiAqICAgRWxlbWVudCB0byBjaGVjay5cbiAqIEBwYXJhbSB7bnVtYmVyfSBpbmRleFxuICogICBJbmRleCBvZiBgZWxlbWVudGAgaW4gYHBhcmVudGAuXG4gKiBAcGFyYW0ge1JlYWRvbmx5PFBhcmVudHM+IHwgdW5kZWZpbmVkfSBwYXJlbnRcbiAqICAgUGFyZW50IG9mIGBlbGVtZW50YC5cbiAqIEByZXR1cm5zIHtib29sZWFuIHwgbnVsbCB8IHVuZGVmaW5lZH1cbiAqICAgV2hldGhlciB0byBhbGxvdyBgZWxlbWVudGAgKGRlZmF1bHQ6IGBmYWxzZWApLlxuICpcbiAqIEB0eXBlZGVmIHtQYXJ0aWFsPEpzeFJ1bnRpbWVDb21wb25lbnRzPn0gQ29tcG9uZW50c1xuICogICBNYXAgdGFnIG5hbWVzIHRvIGNvbXBvbmVudHMuXG4gKlxuICogQHR5cGVkZWYgRGVwcmVjYXRpb25cbiAqICAgRGVwcmVjYXRpb24uXG4gKiBAcHJvcGVydHkge3N0cmluZ30gZnJvbVxuICogICBPbGQgZmllbGQuXG4gKiBAcHJvcGVydHkge3N0cmluZ30gaWRcbiAqICAgSUQgaW4gcmVhZG1lLlxuICogQHByb3BlcnR5IHtrZXlvZiBPcHRpb25zfSBbdG9dXG4gKiAgIE5ldyBmaWVsZC5cbiAqXG4gKiBAdHlwZWRlZiBPcHRpb25zXG4gKiAgIENvbmZpZ3VyYXRpb24uXG4gKiBAcHJvcGVydHkge0FsbG93RWxlbWVudCB8IG51bGwgfCB1bmRlZmluZWR9IFthbGxvd0VsZW1lbnRdXG4gKiAgIEZpbHRlciBlbGVtZW50cyAob3B0aW9uYWwpO1xuICogICBgYWxsb3dlZEVsZW1lbnRzYCAvIGBkaXNhbGxvd2VkRWxlbWVudHNgIGlzIHVzZWQgZmlyc3QuXG4gKiBAcHJvcGVydHkge1JlYWRvbmx5QXJyYXk8c3RyaW5nPiB8IG51bGwgfCB1bmRlZmluZWR9IFthbGxvd2VkRWxlbWVudHNdXG4gKiAgIFRhZyBuYW1lcyB0byBhbGxvdyAoZGVmYXVsdDogYWxsIHRhZyBuYW1lcyk7XG4gKiAgIGNhbm5vdCBjb21iaW5lIHcvIGBkaXNhbGxvd2VkRWxlbWVudHNgLlxuICogQHByb3BlcnR5IHtzdHJpbmcgfCBudWxsIHwgdW5kZWZpbmVkfSBbY2hpbGRyZW5dXG4gKiAgIE1hcmtkb3duLlxuICogQHByb3BlcnR5IHtzdHJpbmcgfCBudWxsIHwgdW5kZWZpbmVkfSBbY2xhc3NOYW1lXVxuICogICBXcmFwIGluIGEgYGRpdmAgd2l0aCB0aGlzIGNsYXNzIG5hbWUuXG4gKiBAcHJvcGVydHkge0NvbXBvbmVudHMgfCBudWxsIHwgdW5kZWZpbmVkfSBbY29tcG9uZW50c11cbiAqICAgTWFwIHRhZyBuYW1lcyB0byBjb21wb25lbnRzLlxuICogQHByb3BlcnR5IHtSZWFkb25seUFycmF5PHN0cmluZz4gfCBudWxsIHwgdW5kZWZpbmVkfSBbZGlzYWxsb3dlZEVsZW1lbnRzXVxuICogICBUYWcgbmFtZXMgdG8gZGlzYWxsb3cgKGRlZmF1bHQ6IGBbXWApO1xuICogICBjYW5ub3QgY29tYmluZSB3LyBgYWxsb3dlZEVsZW1lbnRzYC5cbiAqIEBwcm9wZXJ0eSB7UGx1Z2dhYmxlTGlzdCB8IG51bGwgfCB1bmRlZmluZWR9IFtyZWh5cGVQbHVnaW5zXVxuICogICBMaXN0IG9mIHJlaHlwZSBwbHVnaW5zIHRvIHVzZS5cbiAqIEBwcm9wZXJ0eSB7UGx1Z2dhYmxlTGlzdCB8IG51bGwgfCB1bmRlZmluZWR9IFtyZW1hcmtQbHVnaW5zXVxuICogICBMaXN0IG9mIHJlbWFyayBwbHVnaW5zIHRvIHVzZS5cbiAqIEBwcm9wZXJ0eSB7UmVhZG9ubHk8UmVtYXJrUmVoeXBlT3B0aW9ucz4gfCBudWxsIHwgdW5kZWZpbmVkfSBbcmVtYXJrUmVoeXBlT3B0aW9uc11cbiAqICAgT3B0aW9ucyB0byBwYXNzIHRocm91Z2ggdG8gYHJlbWFyay1yZWh5cGVgLlxuICogQHByb3BlcnR5IHtib29sZWFuIHwgbnVsbCB8IHVuZGVmaW5lZH0gW3NraXBIdG1sPWZhbHNlXVxuICogICBJZ25vcmUgSFRNTCBpbiBtYXJrZG93biBjb21wbGV0ZWx5IChkZWZhdWx0OiBgZmFsc2VgKS5cbiAqIEBwcm9wZXJ0eSB7Ym9vbGVhbiB8IG51bGwgfCB1bmRlZmluZWR9IFt1bndyYXBEaXNhbGxvd2VkPWZhbHNlXVxuICogICBFeHRyYWN0ICh1bndyYXApIHdoYXTigJlzIGluIGRpc2FsbG93ZWQgZWxlbWVudHMgKGRlZmF1bHQ6IGBmYWxzZWApO1xuICogICBub3JtYWxseSB3aGVuIHNheSBgc3Ryb25nYCBpcyBub3QgYWxsb3dlZCwgaXQgYW5kIGl04oCZcyBjaGlsZHJlbiBhcmUgZHJvcHBlZCxcbiAqICAgd2l0aCBgdW53cmFwRGlzYWxsb3dlZGAgdGhlIGVsZW1lbnQgaXRzZWxmIGlzIHJlcGxhY2VkIGJ5IGl0cyBjaGlsZHJlbi5cbiAqIEBwcm9wZXJ0eSB7VXJsVHJhbnNmb3JtIHwgbnVsbCB8IHVuZGVmaW5lZH0gW3VybFRyYW5zZm9ybV1cbiAqICAgQ2hhbmdlIFVSTHMgKGRlZmF1bHQ6IGBkZWZhdWx0VXJsVHJhbnNmb3JtYClcbiAqXG4gKiBAY2FsbGJhY2sgVXJsVHJhbnNmb3JtXG4gKiAgIFRyYW5zZm9ybSBhbGwgVVJMcy5cbiAqIEBwYXJhbSB7c3RyaW5nfSB1cmxcbiAqICAgVVJMLlxuICogQHBhcmFtIHtzdHJpbmd9IGtleVxuICogICBQcm9wZXJ0eSBuYW1lIChleGFtcGxlOiBgJ2hyZWYnYCkuXG4gKiBAcGFyYW0ge1JlYWRvbmx5PEVsZW1lbnQ+fSBub2RlXG4gKiAgIE5vZGUuXG4gKiBAcmV0dXJucyB7c3RyaW5nIHwgbnVsbCB8IHVuZGVmaW5lZH1cbiAqICAgVHJhbnNmb3JtZWQgVVJMIChvcHRpb25hbCkuXG4gKi9cblxuaW1wb3J0IHt1bnJlYWNoYWJsZX0gZnJvbSAnZGV2bG9wJ1xuaW1wb3J0IHt0b0pzeFJ1bnRpbWV9IGZyb20gJ2hhc3QtdXRpbC10by1qc3gtcnVudGltZSdcbmltcG9ydCB7dXJsQXR0cmlidXRlc30gZnJvbSAnaHRtbC11cmwtYXR0cmlidXRlcydcbi8vIEB0cy1leHBlY3QtZXJyb3I6IHVudHlwZWQuXG5pbXBvcnQge0ZyYWdtZW50LCBqc3gsIGpzeHN9IGZyb20gJ3JlYWN0L2pzeC1ydW50aW1lJ1xuaW1wb3J0IHJlbWFya1BhcnNlIGZyb20gJ3JlbWFyay1wYXJzZSdcbmltcG9ydCByZW1hcmtSZWh5cGUgZnJvbSAncmVtYXJrLXJlaHlwZSdcbmltcG9ydCB7dW5pZmllZH0gZnJvbSAndW5pZmllZCdcbmltcG9ydCB7dmlzaXR9IGZyb20gJ3VuaXN0LXV0aWwtdmlzaXQnXG5pbXBvcnQge1ZGaWxlfSBmcm9tICd2ZmlsZSdcblxuY29uc3QgY2hhbmdlbG9nID1cbiAgJ2h0dHBzOi8vZ2l0aHViLmNvbS9yZW1hcmtqcy9yZWFjdC1tYXJrZG93bi9ibG9iL21haW4vY2hhbmdlbG9nLm1kJ1xuXG4vKiogQHR5cGUge1BsdWdnYWJsZUxpc3R9ICovXG5jb25zdCBlbXB0eVBsdWdpbnMgPSBbXVxuLyoqIEB0eXBlIHtSZWFkb25seTxSZW1hcmtSZWh5cGVPcHRpb25zPn0gKi9cbmNvbnN0IGVtcHR5UmVtYXJrUmVoeXBlT3B0aW9ucyA9IHthbGxvd0Rhbmdlcm91c0h0bWw6IHRydWV9XG5jb25zdCBzYWZlUHJvdG9jb2wgPSAvXihodHRwcz98aXJjcz98bWFpbHRvfHhtcHApJC9pXG5cbi8vIE11dGFibGUgYmVjYXVzZSB3ZSBgZGVsZXRlYCBhbnkgdGltZSBpdOKAmXMgdXNlZCBhbmQgYSBtZXNzYWdlIGlzIHNlbnQuXG4vKiogQHR5cGUge1JlYWRvbmx5QXJyYXk8UmVhZG9ubHk8RGVwcmVjYXRpb24+Pn0gKi9cbmNvbnN0IGRlcHJlY2F0aW9ucyA9IFtcbiAge2Zyb206ICdhc3RQbHVnaW5zJywgaWQ6ICdyZW1vdmUtYnVnZ3ktaHRtbC1pbi1tYXJrZG93bi1wYXJzZXInfSxcbiAge2Zyb206ICdhbGxvd0Rhbmdlcm91c0h0bWwnLCBpZDogJ3JlbW92ZS1idWdneS1odG1sLWluLW1hcmtkb3duLXBhcnNlcid9LFxuICB7XG4gICAgZnJvbTogJ2FsbG93Tm9kZScsXG4gICAgaWQ6ICdyZXBsYWNlLWFsbG93bm9kZS1hbGxvd2VkdHlwZXMtYW5kLWRpc2FsbG93ZWR0eXBlcycsXG4gICAgdG86ICdhbGxvd0VsZW1lbnQnXG4gIH0sXG4gIHtcbiAgICBmcm9tOiAnYWxsb3dlZFR5cGVzJyxcbiAgICBpZDogJ3JlcGxhY2UtYWxsb3dub2RlLWFsbG93ZWR0eXBlcy1hbmQtZGlzYWxsb3dlZHR5cGVzJyxcbiAgICB0bzogJ2FsbG93ZWRFbGVtZW50cydcbiAgfSxcbiAge1xuICAgIGZyb206ICdkaXNhbGxvd2VkVHlwZXMnLFxuICAgIGlkOiAncmVwbGFjZS1hbGxvd25vZGUtYWxsb3dlZHR5cGVzLWFuZC1kaXNhbGxvd2VkdHlwZXMnLFxuICAgIHRvOiAnZGlzYWxsb3dlZEVsZW1lbnRzJ1xuICB9LFxuICB7ZnJvbTogJ2VzY2FwZUh0bWwnLCBpZDogJ3JlbW92ZS1idWdneS1odG1sLWluLW1hcmtkb3duLXBhcnNlcid9LFxuICB7ZnJvbTogJ2luY2x1ZGVFbGVtZW50SW5kZXgnLCBpZDogJyNyZW1vdmUtaW5jbHVkZWVsZW1lbnRpbmRleCd9LFxuICB7XG4gICAgZnJvbTogJ2luY2x1ZGVOb2RlSW5kZXgnLFxuICAgIGlkOiAnY2hhbmdlLWluY2x1ZGVub2RlaW5kZXgtdG8taW5jbHVkZWVsZW1lbnRpbmRleCdcbiAgfSxcbiAge2Zyb206ICdsaW5rVGFyZ2V0JywgaWQ6ICdyZW1vdmUtbGlua3RhcmdldCd9LFxuICB7ZnJvbTogJ3BsdWdpbnMnLCBpZDogJ2NoYW5nZS1wbHVnaW5zLXRvLXJlbWFya3BsdWdpbnMnLCB0bzogJ3JlbWFya1BsdWdpbnMnfSxcbiAge2Zyb206ICdyYXdTb3VyY2VQb3MnLCBpZDogJyNyZW1vdmUtcmF3c291cmNlcG9zJ30sXG4gIHtmcm9tOiAncmVuZGVyZXJzJywgaWQ6ICdjaGFuZ2UtcmVuZGVyZXJzLXRvLWNvbXBvbmVudHMnLCB0bzogJ2NvbXBvbmVudHMnfSxcbiAge2Zyb206ICdzb3VyY2UnLCBpZDogJ2NoYW5nZS1zb3VyY2UtdG8tY2hpbGRyZW4nLCB0bzogJ2NoaWxkcmVuJ30sXG4gIHtmcm9tOiAnc291cmNlUG9zJywgaWQ6ICcjcmVtb3ZlLXNvdXJjZXBvcyd9LFxuICB7ZnJvbTogJ3RyYW5zZm9ybUltYWdlVXJpJywgaWQ6ICcjYWRkLXVybHRyYW5zZm9ybScsIHRvOiAndXJsVHJhbnNmb3JtJ30sXG4gIHtmcm9tOiAndHJhbnNmb3JtTGlua1VyaScsIGlkOiAnI2FkZC11cmx0cmFuc2Zvcm0nLCB0bzogJ3VybFRyYW5zZm9ybSd9XG5dXG5cbi8qKlxuICogQ29tcG9uZW50IHRvIHJlbmRlciBtYXJrZG93bi5cbiAqXG4gKiBAcGFyYW0ge1JlYWRvbmx5PE9wdGlvbnM+fSBvcHRpb25zXG4gKiAgIFByb3BzLlxuICogQHJldHVybnMge0pTWC5FbGVtZW50fVxuICogICBSZWFjdCBlbGVtZW50LlxuICovXG5leHBvcnQgZnVuY3Rpb24gTWFya2Rvd24ob3B0aW9ucykge1xuICBjb25zdCBhbGxvd2VkRWxlbWVudHMgPSBvcHRpb25zLmFsbG93ZWRFbGVtZW50c1xuICBjb25zdCBhbGxvd0VsZW1lbnQgPSBvcHRpb25zLmFsbG93RWxlbWVudFxuICBjb25zdCBjaGlsZHJlbiA9IG9wdGlvbnMuY2hpbGRyZW4gfHwgJydcbiAgY29uc3QgY2xhc3NOYW1lID0gb3B0aW9ucy5jbGFzc05hbWVcbiAgY29uc3QgY29tcG9uZW50cyA9IG9wdGlvbnMuY29tcG9uZW50c1xuICBjb25zdCBkaXNhbGxvd2VkRWxlbWVudHMgPSBvcHRpb25zLmRpc2FsbG93ZWRFbGVtZW50c1xuICBjb25zdCByZWh5cGVQbHVnaW5zID0gb3B0aW9ucy5yZWh5cGVQbHVnaW5zIHx8IGVtcHR5UGx1Z2luc1xuICBjb25zdCByZW1hcmtQbHVnaW5zID0gb3B0aW9ucy5yZW1hcmtQbHVnaW5zIHx8IGVtcHR5UGx1Z2luc1xuICBjb25zdCByZW1hcmtSZWh5cGVPcHRpb25zID0gb3B0aW9ucy5yZW1hcmtSZWh5cGVPcHRpb25zXG4gICAgPyB7Li4ub3B0aW9ucy5yZW1hcmtSZWh5cGVPcHRpb25zLCAuLi5lbXB0eVJlbWFya1JlaHlwZU9wdGlvbnN9XG4gICAgOiBlbXB0eVJlbWFya1JlaHlwZU9wdGlvbnNcbiAgY29uc3Qgc2tpcEh0bWwgPSBvcHRpb25zLnNraXBIdG1sXG4gIGNvbnN0IHVud3JhcERpc2FsbG93ZWQgPSBvcHRpb25zLnVud3JhcERpc2FsbG93ZWRcbiAgY29uc3QgdXJsVHJhbnNmb3JtID0gb3B0aW9ucy51cmxUcmFuc2Zvcm0gfHwgZGVmYXVsdFVybFRyYW5zZm9ybVxuXG4gIGNvbnN0IHByb2Nlc3NvciA9IHVuaWZpZWQoKVxuICAgIC51c2UocmVtYXJrUGFyc2UpXG4gICAgLnVzZShyZW1hcmtQbHVnaW5zKVxuICAgIC51c2UocmVtYXJrUmVoeXBlLCByZW1hcmtSZWh5cGVPcHRpb25zKVxuICAgIC51c2UocmVoeXBlUGx1Z2lucylcblxuICBjb25zdCBmaWxlID0gbmV3IFZGaWxlKClcblxuICBpZiAodHlwZW9mIGNoaWxkcmVuID09PSAnc3RyaW5nJykge1xuICAgIGZpbGUudmFsdWUgPSBjaGlsZHJlblxuICB9IGVsc2Uge1xuICAgIHVucmVhY2hhYmxlKFxuICAgICAgJ1VuZXhwZWN0ZWQgdmFsdWUgYCcgK1xuICAgICAgICBjaGlsZHJlbiArXG4gICAgICAgICdgIGZvciBgY2hpbGRyZW5gIHByb3AsIGV4cGVjdGVkIGBzdHJpbmdgJ1xuICAgIClcbiAgfVxuXG4gIGlmIChhbGxvd2VkRWxlbWVudHMgJiYgZGlzYWxsb3dlZEVsZW1lbnRzKSB7XG4gICAgdW5yZWFjaGFibGUoXG4gICAgICAnVW5leHBlY3RlZCBjb21iaW5lZCBgYWxsb3dlZEVsZW1lbnRzYCBhbmQgYGRpc2FsbG93ZWRFbGVtZW50c2AsIGV4cGVjdGVkIG9uZSBvciB0aGUgb3RoZXInXG4gICAgKVxuICB9XG5cbiAgZm9yIChjb25zdCBkZXByZWNhdGlvbiBvZiBkZXByZWNhdGlvbnMpIHtcbiAgICBpZiAoT2JqZWN0Lmhhc093bihvcHRpb25zLCBkZXByZWNhdGlvbi5mcm9tKSkge1xuICAgICAgdW5yZWFjaGFibGUoXG4gICAgICAgICdVbmV4cGVjdGVkIGAnICtcbiAgICAgICAgICBkZXByZWNhdGlvbi5mcm9tICtcbiAgICAgICAgICAnYCBwcm9wLCAnICtcbiAgICAgICAgICAoZGVwcmVjYXRpb24udG9cbiAgICAgICAgICAgID8gJ3VzZSBgJyArIGRlcHJlY2F0aW9uLnRvICsgJ2AgaW5zdGVhZCdcbiAgICAgICAgICAgIDogJ3JlbW92ZSBpdCcpICtcbiAgICAgICAgICAnIChzZWUgPCcgK1xuICAgICAgICAgIGNoYW5nZWxvZyArXG4gICAgICAgICAgJyMnICtcbiAgICAgICAgICBkZXByZWNhdGlvbi5pZCArXG4gICAgICAgICAgJz4gZm9yIG1vcmUgaW5mbyknXG4gICAgICApXG4gICAgfVxuICB9XG5cbiAgY29uc3QgbWRhc3RUcmVlID0gcHJvY2Vzc29yLnBhcnNlKGZpbGUpXG4gIC8qKiBAdHlwZSB7Tm9kZXN9ICovXG4gIGxldCBoYXN0VHJlZSA9IHByb2Nlc3Nvci5ydW5TeW5jKG1kYXN0VHJlZSwgZmlsZSlcblxuICAvLyBXcmFwIGluIGBkaXZgIGlmIHRoZXJl4oCZcyBhIGNsYXNzIG5hbWUuXG4gIGlmIChjbGFzc05hbWUpIHtcbiAgICBoYXN0VHJlZSA9IHtcbiAgICAgIHR5cGU6ICdlbGVtZW50JyxcbiAgICAgIHRhZ05hbWU6ICdkaXYnLFxuICAgICAgcHJvcGVydGllczoge2NsYXNzTmFtZX0sXG4gICAgICAvLyBBc3N1bWUgbm8gZG9jdHlwZXMuXG4gICAgICBjaGlsZHJlbjogLyoqIEB0eXBlIHtBcnJheTxFbGVtZW50Q29udGVudD59ICovIChcbiAgICAgICAgaGFzdFRyZWUudHlwZSA9PT0gJ3Jvb3QnID8gaGFzdFRyZWUuY2hpbGRyZW4gOiBbaGFzdFRyZWVdXG4gICAgICApXG4gICAgfVxuICB9XG5cbiAgdmlzaXQoaGFzdFRyZWUsIHRyYW5zZm9ybSlcblxuICByZXR1cm4gdG9Kc3hSdW50aW1lKGhhc3RUcmVlLCB7XG4gICAgRnJhZ21lbnQsXG4gICAgY29tcG9uZW50cyxcbiAgICBpZ25vcmVJbnZhbGlkU3R5bGU6IHRydWUsXG4gICAganN4LFxuICAgIGpzeHMsXG4gICAgcGFzc0tleXM6IHRydWUsXG4gICAgcGFzc05vZGU6IHRydWVcbiAgfSlcblxuICAvKiogQHR5cGUge1Zpc2l0b3J9ICovXG4gIGZ1bmN0aW9uIHRyYW5zZm9ybShub2RlLCBpbmRleCwgcGFyZW50KSB7XG4gICAgaWYgKG5vZGUudHlwZSA9PT0gJ3JhdycgJiYgcGFyZW50ICYmIHR5cGVvZiBpbmRleCA9PT0gJ251bWJlcicpIHtcbiAgICAgIGlmIChza2lwSHRtbCkge1xuICAgICAgICBwYXJlbnQuY2hpbGRyZW4uc3BsaWNlKGluZGV4LCAxKVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgcGFyZW50LmNoaWxkcmVuW2luZGV4XSA9IHt0eXBlOiAndGV4dCcsIHZhbHVlOiBub2RlLnZhbHVlfVxuICAgICAgfVxuXG4gICAgICByZXR1cm4gaW5kZXhcbiAgICB9XG5cbiAgICBpZiAobm9kZS50eXBlID09PSAnZWxlbWVudCcpIHtcbiAgICAgIC8qKiBAdHlwZSB7c3RyaW5nfSAqL1xuICAgICAgbGV0IGtleVxuXG4gICAgICBmb3IgKGtleSBpbiB1cmxBdHRyaWJ1dGVzKSB7XG4gICAgICAgIGlmIChcbiAgICAgICAgICBPYmplY3QuaGFzT3duKHVybEF0dHJpYnV0ZXMsIGtleSkgJiZcbiAgICAgICAgICBPYmplY3QuaGFzT3duKG5vZGUucHJvcGVydGllcywga2V5KVxuICAgICAgICApIHtcbiAgICAgICAgICBjb25zdCB2YWx1ZSA9IG5vZGUucHJvcGVydGllc1trZXldXG4gICAgICAgICAgY29uc3QgdGVzdCA9IHVybEF0dHJpYnV0ZXNba2V5XVxuICAgICAgICAgIGlmICh0ZXN0ID09PSBudWxsIHx8IHRlc3QuaW5jbHVkZXMobm9kZS50YWdOYW1lKSkge1xuICAgICAgICAgICAgbm9kZS5wcm9wZXJ0aWVzW2tleV0gPSB1cmxUcmFuc2Zvcm0oU3RyaW5nKHZhbHVlIHx8ICcnKSwga2V5LCBub2RlKVxuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIGlmIChub2RlLnR5cGUgPT09ICdlbGVtZW50Jykge1xuICAgICAgbGV0IHJlbW92ZSA9IGFsbG93ZWRFbGVtZW50c1xuICAgICAgICA/ICFhbGxvd2VkRWxlbWVudHMuaW5jbHVkZXMobm9kZS50YWdOYW1lKVxuICAgICAgICA6IGRpc2FsbG93ZWRFbGVtZW50c1xuICAgICAgICA/IGRpc2FsbG93ZWRFbGVtZW50cy5pbmNsdWRlcyhub2RlLnRhZ05hbWUpXG4gICAgICAgIDogZmFsc2VcblxuICAgICAgaWYgKCFyZW1vdmUgJiYgYWxsb3dFbGVtZW50ICYmIHR5cGVvZiBpbmRleCA9PT0gJ251bWJlcicpIHtcbiAgICAgICAgcmVtb3ZlID0gIWFsbG93RWxlbWVudChub2RlLCBpbmRleCwgcGFyZW50KVxuICAgICAgfVxuXG4gICAgICBpZiAocmVtb3ZlICYmIHBhcmVudCAmJiB0eXBlb2YgaW5kZXggPT09ICdudW1iZXInKSB7XG4gICAgICAgIGlmICh1bndyYXBEaXNhbGxvd2VkICYmIG5vZGUuY2hpbGRyZW4pIHtcbiAgICAgICAgICBwYXJlbnQuY2hpbGRyZW4uc3BsaWNlKGluZGV4LCAxLCAuLi5ub2RlLmNoaWxkcmVuKVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHBhcmVudC5jaGlsZHJlbi5zcGxpY2UoaW5kZXgsIDEpXG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gaW5kZXhcbiAgICAgIH1cbiAgICB9XG4gIH1cbn1cblxuLyoqXG4gKiBNYWtlIGEgVVJMIHNhZmUuXG4gKlxuICogQHNhdGlzZmllcyB7VXJsVHJhbnNmb3JtfVxuICogQHBhcmFtIHtzdHJpbmd9IHZhbHVlXG4gKiAgIFVSTC5cbiAqIEByZXR1cm5zIHtzdHJpbmd9XG4gKiAgIFNhZmUgVVJMLlxuICovXG5leHBvcnQgZnVuY3Rpb24gZGVmYXVsdFVybFRyYW5zZm9ybSh2YWx1ZSkge1xuICAvLyBTYW1lIGFzOlxuICAvLyA8aHR0cHM6Ly9naXRodWIuY29tL21pY3JvbWFyay9taWNyb21hcmsvYmxvYi85MjkyNzVlL3BhY2thZ2VzL21pY3JvbWFyay11dGlsLXNhbml0aXplLXVyaS9kZXYvaW5kZXguanMjTDM0PlxuICAvLyBCdXQgd2l0aG91dCB0aGUgYGVuY29kZWAgcGFydC5cbiAgY29uc3QgY29sb24gPSB2YWx1ZS5pbmRleE9mKCc6JylcbiAgY29uc3QgcXVlc3Rpb25NYXJrID0gdmFsdWUuaW5kZXhPZignPycpXG4gIGNvbnN0IG51bWJlclNpZ24gPSB2YWx1ZS5pbmRleE9mKCcjJylcbiAgY29uc3Qgc2xhc2ggPSB2YWx1ZS5pbmRleE9mKCcvJylcblxuICBpZiAoXG4gICAgLy8gSWYgdGhlcmUgaXMgbm8gcHJvdG9jb2wsIGl04oCZcyByZWxhdGl2ZS5cbiAgICBjb2xvbiA8IDAgfHxcbiAgICAvLyBJZiB0aGUgZmlyc3QgY29sb24gaXMgYWZ0ZXIgYSBgP2AsIGAjYCwgb3IgYC9gLCBpdOKAmXMgbm90IGEgcHJvdG9jb2wuXG4gICAgKHNsYXNoID4gLTEgJiYgY29sb24gPiBzbGFzaCkgfHxcbiAgICAocXVlc3Rpb25NYXJrID4gLTEgJiYgY29sb24gPiBxdWVzdGlvbk1hcmspIHx8XG4gICAgKG51bWJlclNpZ24gPiAtMSAmJiBjb2xvbiA+IG51bWJlclNpZ24pIHx8XG4gICAgLy8gSXQgaXMgYSBwcm90b2NvbCwgaXQgc2hvdWxkIGJlIGFsbG93ZWQuXG4gICAgc2FmZVByb3RvY29sLnRlc3QodmFsdWUuc2xpY2UoMCwgY29sb24pKVxuICApIHtcbiAgICByZXR1cm4gdmFsdWVcbiAgfVxuXG4gIHJldHVybiAnJ1xufVxuIl0sIm5hbWVzIjpbInVucmVhY2hhYmxlIiwidG9Kc3hSdW50aW1lIiwidXJsQXR0cmlidXRlcyIsIkZyYWdtZW50IiwianN4IiwianN4cyIsInJlbWFya1BhcnNlIiwicmVtYXJrUmVoeXBlIiwidW5pZmllZCIsInZpc2l0IiwiVkZpbGUiLCJjaGFuZ2Vsb2ciLCJlbXB0eVBsdWdpbnMiLCJlbXB0eVJlbWFya1JlaHlwZU9wdGlvbnMiLCJhbGxvd0Rhbmdlcm91c0h0bWwiLCJzYWZlUHJvdG9jb2wiLCJkZXByZWNhdGlvbnMiLCJmcm9tIiwiaWQiLCJ0byIsIk1hcmtkb3duIiwib3B0aW9ucyIsImFsbG93ZWRFbGVtZW50cyIsImFsbG93RWxlbWVudCIsImNoaWxkcmVuIiwiY2xhc3NOYW1lIiwiY29tcG9uZW50cyIsImRpc2FsbG93ZWRFbGVtZW50cyIsInJlaHlwZVBsdWdpbnMiLCJyZW1hcmtQbHVnaW5zIiwicmVtYXJrUmVoeXBlT3B0aW9ucyIsInNraXBIdG1sIiwidW53cmFwRGlzYWxsb3dlZCIsInVybFRyYW5zZm9ybSIsImRlZmF1bHRVcmxUcmFuc2Zvcm0iLCJwcm9jZXNzb3IiLCJ1c2UiLCJmaWxlIiwidmFsdWUiLCJkZXByZWNhdGlvbiIsIk9iamVjdCIsImhhc093biIsIm1kYXN0VHJlZSIsInBhcnNlIiwiaGFzdFRyZWUiLCJydW5TeW5jIiwidHlwZSIsInRhZ05hbWUiLCJwcm9wZXJ0aWVzIiwidHJhbnNmb3JtIiwiaWdub3JlSW52YWxpZFN0eWxlIiwicGFzc0tleXMiLCJwYXNzTm9kZSIsIm5vZGUiLCJpbmRleCIsInBhcmVudCIsInNwbGljZSIsImtleSIsInRlc3QiLCJpbmNsdWRlcyIsIlN0cmluZyIsInJlbW92ZSIsImNvbG9uIiwiaW5kZXhPZiIsInF1ZXN0aW9uTWFyayIsIm51bWJlclNpZ24iLCJzbGFzaCIsInNsaWNlIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(ssr)/./node_modules/react-markdown/lib/index.js\n");

/***/ })

};
;