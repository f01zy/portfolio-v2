"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
exports.id = "vendor-chunks/unist-util-visit";
exports.ids = ["vendor-chunks/unist-util-visit"];
exports.modules = {

/***/ "(ssr)/./node_modules/unist-util-visit/lib/index.js":
/*!****************************************************!*\
  !*** ./node_modules/unist-util-visit/lib/index.js ***!
  \****************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   CONTINUE: () => (/* reexport safe */ unist_util_visit_parents__WEBPACK_IMPORTED_MODULE_0__.CONTINUE),\n/* harmony export */   EXIT: () => (/* reexport safe */ unist_util_visit_parents__WEBPACK_IMPORTED_MODULE_0__.EXIT),\n/* harmony export */   SKIP: () => (/* reexport safe */ unist_util_visit_parents__WEBPACK_IMPORTED_MODULE_0__.SKIP),\n/* harmony export */   visit: () => (/* binding */ visit)\n/* harmony export */ });\n/* harmony import */ var unist_util_visit_parents__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! unist-util-visit-parents */ \"(ssr)/./node_modules/unist-util-visit-parents/lib/index.js\");\n/**\n * @typedef {import('unist').Node} UnistNode\n * @typedef {import('unist').Parent} UnistParent\n * @typedef {import('unist-util-visit-parents').VisitorResult} VisitorResult\n */ /**\n * @typedef {Exclude<import('unist-util-is').Test, undefined> | undefined} Test\n *   Test from `unist-util-is`.\n *\n *   Note: we have remove and add `undefined`, because otherwise when generating\n *   automatic `.d.ts` files, TS tries to flatten paths from a local perspective,\n *   which doesn’t work when publishing on npm.\n */ // To do: use types from `unist-util-visit-parents` when it’s released.\n/**\n * @typedef {(\n *   Fn extends (value: any) => value is infer Thing\n *   ? Thing\n *   : Fallback\n * )} Predicate\n *   Get the value of a type guard `Fn`.\n * @template Fn\n *   Value; typically function that is a type guard (such as `(x): x is Y`).\n * @template Fallback\n *   Value to yield if `Fn` is not a type guard.\n */ /**\n * @typedef {(\n *   Check extends null | undefined // No test.\n *   ? Value\n *   : Value extends {type: Check} // String (type) test.\n *   ? Value\n *   : Value extends Check // Partial test.\n *   ? Value\n *   : Check extends Function // Function test.\n *   ? Predicate<Check, Value> extends Value\n *     ? Predicate<Check, Value>\n *     : never\n *   : never // Some other test?\n * )} MatchesOne\n *   Check whether a node matches a primitive check in the type system.\n * @template Value\n *   Value; typically unist `Node`.\n * @template Check\n *   Value; typically `unist-util-is`-compatible test, but not arrays.\n */ /**\n * @typedef {(\n *   Check extends Array<any>\n *   ? MatchesOne<Value, Check[keyof Check]>\n *   : MatchesOne<Value, Check>\n * )} Matches\n *   Check whether a node matches a check in the type system.\n * @template Value\n *   Value; typically unist `Node`.\n * @template Check\n *   Value; typically `unist-util-is`-compatible test.\n */ /**\n * @typedef {0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10} Uint\n *   Number; capped reasonably.\n */ /**\n * @typedef {I extends 0 ? 1 : I extends 1 ? 2 : I extends 2 ? 3 : I extends 3 ? 4 : I extends 4 ? 5 : I extends 5 ? 6 : I extends 6 ? 7 : I extends 7 ? 8 : I extends 8 ? 9 : 10} Increment\n *   Increment a number in the type system.\n * @template {Uint} [I=0]\n *   Index.\n */ /**\n * @typedef {(\n *   Node extends UnistParent\n *   ? Node extends {children: Array<infer Children>}\n *     ? Child extends Children ? Node : never\n *     : never\n *   : never\n * )} InternalParent\n *   Collect nodes that can be parents of `Child`.\n * @template {UnistNode} Node\n *   All node types in a tree.\n * @template {UnistNode} Child\n *   Node to search for.\n */ /**\n * @typedef {InternalParent<InclusiveDescendant<Tree>, Child>} Parent\n *   Collect nodes in `Tree` that can be parents of `Child`.\n * @template {UnistNode} Tree\n *   All node types in a tree.\n * @template {UnistNode} Child\n *   Node to search for.\n */ /**\n * @typedef {(\n *   Depth extends Max\n *   ? never\n *   :\n *     | InternalParent<Node, Child>\n *     | InternalAncestor<Node, InternalParent<Node, Child>, Max, Increment<Depth>>\n * )} InternalAncestor\n *   Collect nodes in `Tree` that can be ancestors of `Child`.\n * @template {UnistNode} Node\n *   All node types in a tree.\n * @template {UnistNode} Child\n *   Node to search for.\n * @template {Uint} [Max=10]\n *   Max; searches up to this depth.\n * @template {Uint} [Depth=0]\n *   Current depth.\n */ /**\n * @typedef {(\n *   Tree extends UnistParent\n *     ? Depth extends Max\n *       ? Tree\n *       : Tree | InclusiveDescendant<Tree['children'][number], Max, Increment<Depth>>\n *     : Tree\n * )} InclusiveDescendant\n *   Collect all (inclusive) descendants of `Tree`.\n *\n *   > 👉 **Note**: for performance reasons, this seems to be the fastest way to\n *   > recurse without actually running into an infinite loop, which the\n *   > previous version did.\n *   >\n *   > Practically, a max of `2` is typically enough assuming a `Root` is\n *   > passed, but it doesn’t improve performance.\n *   > It gets higher with `List > ListItem > Table > TableRow > TableCell`.\n *   > Using up to `10` doesn’t hurt or help either.\n * @template {UnistNode} Tree\n *   Tree type.\n * @template {Uint} [Max=10]\n *   Max; searches up to this depth.\n * @template {Uint} [Depth=0]\n *   Current depth.\n */ /**\n * @callback Visitor\n *   Handle a node (matching `test`, if given).\n *\n *   Visitors are free to transform `node`.\n *   They can also transform `parent`.\n *\n *   Replacing `node` itself, if `SKIP` is not returned, still causes its\n *   descendants to be walked (which is a bug).\n *\n *   When adding or removing previous siblings of `node` (or next siblings, in\n *   case of reverse), the `Visitor` should return a new `Index` to specify the\n *   sibling to traverse after `node` is traversed.\n *   Adding or removing next siblings of `node` (or previous siblings, in case\n *   of reverse) is handled as expected without needing to return a new `Index`.\n *\n *   Removing the children property of `parent` still results in them being\n *   traversed.\n * @param {Visited} node\n *   Found node.\n * @param {Visited extends UnistNode ? number | undefined : never} index\n *   Index of `node` in `parent`.\n * @param {Ancestor extends UnistParent ? Ancestor | undefined : never} parent\n *   Parent of `node`.\n * @returns {VisitorResult}\n *   What to do next.\n *\n *   An `Index` is treated as a tuple of `[CONTINUE, Index]`.\n *   An `Action` is treated as a tuple of `[Action]`.\n *\n *   Passing a tuple back only makes sense if the `Action` is `SKIP`.\n *   When the `Action` is `EXIT`, that action can be returned.\n *   When the `Action` is `CONTINUE`, `Index` can be returned.\n * @template {UnistNode} [Visited=UnistNode]\n *   Visited node type.\n * @template {UnistParent} [Ancestor=UnistParent]\n *   Ancestor type.\n */ /**\n * @typedef {Visitor<Visited, Parent<Ancestor, Visited>>} BuildVisitorFromMatch\n *   Build a typed `Visitor` function from a node and all possible parents.\n *\n *   It will infer which values are passed as `node` and which as `parent`.\n * @template {UnistNode} Visited\n *   Node type.\n * @template {UnistParent} Ancestor\n *   Parent type.\n */ /**\n * @typedef {(\n *   BuildVisitorFromMatch<\n *     Matches<Descendant, Check>,\n *     Extract<Descendant, UnistParent>\n *   >\n * )} BuildVisitorFromDescendants\n *   Build a typed `Visitor` function from a list of descendants and a test.\n *\n *   It will infer which values are passed as `node` and which as `parent`.\n * @template {UnistNode} Descendant\n *   Node type.\n * @template {Test} Check\n *   Test type.\n */ /**\n * @typedef {(\n *   BuildVisitorFromDescendants<\n *     InclusiveDescendant<Tree>,\n *     Check\n *   >\n * )} BuildVisitor\n *   Build a typed `Visitor` function from a tree and a test.\n *\n *   It will infer which values are passed as `node` and which as `parent`.\n * @template {UnistNode} [Tree=UnistNode]\n *   Node type.\n * @template {Test} [Check=Test]\n *   Test type.\n */ \n\n/**\n * Visit nodes.\n *\n * This algorithm performs *depth-first* *tree traversal* in *preorder*\n * (**NLR**) or if `reverse` is given, in *reverse preorder* (**NRL**).\n *\n * You can choose for which nodes `visitor` is called by passing a `test`.\n * For complex tests, you should test yourself in `visitor`, as it will be\n * faster and will have improved type information.\n *\n * Walking the tree is an intensive task.\n * Make use of the return values of the visitor when possible.\n * Instead of walking a tree multiple times, walk it once, use `unist-util-is`\n * to check if a node matches, and then perform different operations.\n *\n * You can change the tree.\n * See `Visitor` for more info.\n *\n * @overload\n * @param {Tree} tree\n * @param {Check} check\n * @param {BuildVisitor<Tree, Check>} visitor\n * @param {boolean | null | undefined} [reverse]\n * @returns {undefined}\n *\n * @overload\n * @param {Tree} tree\n * @param {BuildVisitor<Tree>} visitor\n * @param {boolean | null | undefined} [reverse]\n * @returns {undefined}\n *\n * @param {UnistNode} tree\n *   Tree to traverse.\n * @param {Visitor | Test} testOrVisitor\n *   `unist-util-is`-compatible test (optional, omit to pass a visitor).\n * @param {Visitor | boolean | null | undefined} [visitorOrReverse]\n *   Handle each node (when test is omitted, pass `reverse`).\n * @param {boolean | null | undefined} [maybeReverse=false]\n *   Traverse in reverse preorder (NRL) instead of the default preorder (NLR).\n * @returns {undefined}\n *   Nothing.\n *\n * @template {UnistNode} Tree\n *   Node type.\n * @template {Test} Check\n *   `unist-util-is`-compatible test.\n */ function visit(tree, testOrVisitor, visitorOrReverse, maybeReverse) {\n    /** @type {boolean | null | undefined} */ let reverse;\n    /** @type {Test} */ let test;\n    /** @type {Visitor} */ let visitor;\n    if (typeof testOrVisitor === \"function\" && typeof visitorOrReverse !== \"function\") {\n        test = undefined;\n        visitor = testOrVisitor;\n        reverse = visitorOrReverse;\n    } else {\n        // @ts-expect-error: assume the overload with test was given.\n        test = testOrVisitor;\n        // @ts-expect-error: assume the overload with test was given.\n        visitor = visitorOrReverse;\n        reverse = maybeReverse;\n    }\n    (0,unist_util_visit_parents__WEBPACK_IMPORTED_MODULE_0__.visitParents)(tree, test, overload, reverse);\n    /**\n   * @param {UnistNode} node\n   * @param {Array<UnistParent>} parents\n   */ function overload(node, parents) {\n        const parent = parents[parents.length - 1];\n        const index = parent ? parent.children.indexOf(node) : undefined;\n        return visitor(node, index, parent);\n    }\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHNzcikvLi9ub2RlX21vZHVsZXMvdW5pc3QtdXRpbC12aXNpdC9saWIvaW5kZXguanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7QUFBQTs7OztDQUlDLEdBRUQ7Ozs7Ozs7Q0FPQyxHQUVELHVFQUF1RTtBQUV2RTs7Ozs7Ozs7Ozs7Q0FXQyxHQUVEOzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0NBbUJDLEdBRUQ7Ozs7Ozs7Ozs7O0NBV0MsR0FFRDs7O0NBR0MsR0FFRDs7Ozs7Q0FLQyxHQUVEOzs7Ozs7Ozs7Ozs7O0NBYUMsR0FFRDs7Ozs7OztDQU9DLEdBRUQ7Ozs7Ozs7Ozs7Ozs7Ozs7O0NBaUJDLEdBRUQ7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztDQXdCQyxHQUVEOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0NBcUNDLEdBRUQ7Ozs7Ozs7OztDQVNDLEdBRUQ7Ozs7Ozs7Ozs7Ozs7O0NBY0MsR0FFRDs7Ozs7Ozs7Ozs7Ozs7Q0FjQyxHQUVvRDtBQUVRO0FBRTdEOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0NBOENDLEdBQ00sU0FBU0ksTUFBTUMsSUFBSSxFQUFFQyxhQUFhLEVBQUVDLGdCQUFnQixFQUFFQyxZQUFZO0lBQ3ZFLHVDQUF1QyxHQUN2QyxJQUFJQztJQUNKLGlCQUFpQixHQUNqQixJQUFJQztJQUNKLG9CQUFvQixHQUNwQixJQUFJQztJQUVKLElBQ0UsT0FBT0wsa0JBQWtCLGNBQ3pCLE9BQU9DLHFCQUFxQixZQUM1QjtRQUNBRyxPQUFPRTtRQUNQRCxVQUFVTDtRQUNWRyxVQUFVRjtJQUNaLE9BQU87UUFDTCw2REFBNkQ7UUFDN0RHLE9BQU9KO1FBQ1AsNkRBQTZEO1FBQzdESyxVQUFVSjtRQUNWRSxVQUFVRDtJQUNaO0lBRUFSLHNFQUFZQSxDQUFDSyxNQUFNSyxNQUFNRyxVQUFVSjtJQUVuQzs7O0dBR0MsR0FDRCxTQUFTSSxTQUFTQyxJQUFJLEVBQUVDLE9BQU87UUFDN0IsTUFBTUMsU0FBU0QsT0FBTyxDQUFDQSxRQUFRRSxNQUFNLEdBQUcsRUFBRTtRQUMxQyxNQUFNQyxRQUFRRixTQUFTQSxPQUFPRyxRQUFRLENBQUNDLE9BQU8sQ0FBQ04sUUFBUUY7UUFDdkQsT0FBT0QsUUFBUUcsTUFBTUksT0FBT0Y7SUFDOUI7QUFDRiIsInNvdXJjZXMiOlsid2VicGFjazovL3BvcnRmb2xpby12Mi8uL25vZGVfbW9kdWxlcy91bmlzdC11dGlsLXZpc2l0L2xpYi9pbmRleC5qcz84YjIxIl0sInNvdXJjZXNDb250ZW50IjpbIi8qKlxuICogQHR5cGVkZWYge2ltcG9ydCgndW5pc3QnKS5Ob2RlfSBVbmlzdE5vZGVcbiAqIEB0eXBlZGVmIHtpbXBvcnQoJ3VuaXN0JykuUGFyZW50fSBVbmlzdFBhcmVudFxuICogQHR5cGVkZWYge2ltcG9ydCgndW5pc3QtdXRpbC12aXNpdC1wYXJlbnRzJykuVmlzaXRvclJlc3VsdH0gVmlzaXRvclJlc3VsdFxuICovXG5cbi8qKlxuICogQHR5cGVkZWYge0V4Y2x1ZGU8aW1wb3J0KCd1bmlzdC11dGlsLWlzJykuVGVzdCwgdW5kZWZpbmVkPiB8IHVuZGVmaW5lZH0gVGVzdFxuICogICBUZXN0IGZyb20gYHVuaXN0LXV0aWwtaXNgLlxuICpcbiAqICAgTm90ZTogd2UgaGF2ZSByZW1vdmUgYW5kIGFkZCBgdW5kZWZpbmVkYCwgYmVjYXVzZSBvdGhlcndpc2Ugd2hlbiBnZW5lcmF0aW5nXG4gKiAgIGF1dG9tYXRpYyBgLmQudHNgIGZpbGVzLCBUUyB0cmllcyB0byBmbGF0dGVuIHBhdGhzIGZyb20gYSBsb2NhbCBwZXJzcGVjdGl2ZSxcbiAqICAgd2hpY2ggZG9lc27igJl0IHdvcmsgd2hlbiBwdWJsaXNoaW5nIG9uIG5wbS5cbiAqL1xuXG4vLyBUbyBkbzogdXNlIHR5cGVzIGZyb20gYHVuaXN0LXV0aWwtdmlzaXQtcGFyZW50c2Agd2hlbiBpdOKAmXMgcmVsZWFzZWQuXG5cbi8qKlxuICogQHR5cGVkZWYgeyhcbiAqICAgRm4gZXh0ZW5kcyAodmFsdWU6IGFueSkgPT4gdmFsdWUgaXMgaW5mZXIgVGhpbmdcbiAqICAgPyBUaGluZ1xuICogICA6IEZhbGxiYWNrXG4gKiApfSBQcmVkaWNhdGVcbiAqICAgR2V0IHRoZSB2YWx1ZSBvZiBhIHR5cGUgZ3VhcmQgYEZuYC5cbiAqIEB0ZW1wbGF0ZSBGblxuICogICBWYWx1ZTsgdHlwaWNhbGx5IGZ1bmN0aW9uIHRoYXQgaXMgYSB0eXBlIGd1YXJkIChzdWNoIGFzIGAoeCk6IHggaXMgWWApLlxuICogQHRlbXBsYXRlIEZhbGxiYWNrXG4gKiAgIFZhbHVlIHRvIHlpZWxkIGlmIGBGbmAgaXMgbm90IGEgdHlwZSBndWFyZC5cbiAqL1xuXG4vKipcbiAqIEB0eXBlZGVmIHsoXG4gKiAgIENoZWNrIGV4dGVuZHMgbnVsbCB8IHVuZGVmaW5lZCAvLyBObyB0ZXN0LlxuICogICA/IFZhbHVlXG4gKiAgIDogVmFsdWUgZXh0ZW5kcyB7dHlwZTogQ2hlY2t9IC8vIFN0cmluZyAodHlwZSkgdGVzdC5cbiAqICAgPyBWYWx1ZVxuICogICA6IFZhbHVlIGV4dGVuZHMgQ2hlY2sgLy8gUGFydGlhbCB0ZXN0LlxuICogICA/IFZhbHVlXG4gKiAgIDogQ2hlY2sgZXh0ZW5kcyBGdW5jdGlvbiAvLyBGdW5jdGlvbiB0ZXN0LlxuICogICA/IFByZWRpY2F0ZTxDaGVjaywgVmFsdWU+IGV4dGVuZHMgVmFsdWVcbiAqICAgICA/IFByZWRpY2F0ZTxDaGVjaywgVmFsdWU+XG4gKiAgICAgOiBuZXZlclxuICogICA6IG5ldmVyIC8vIFNvbWUgb3RoZXIgdGVzdD9cbiAqICl9IE1hdGNoZXNPbmVcbiAqICAgQ2hlY2sgd2hldGhlciBhIG5vZGUgbWF0Y2hlcyBhIHByaW1pdGl2ZSBjaGVjayBpbiB0aGUgdHlwZSBzeXN0ZW0uXG4gKiBAdGVtcGxhdGUgVmFsdWVcbiAqICAgVmFsdWU7IHR5cGljYWxseSB1bmlzdCBgTm9kZWAuXG4gKiBAdGVtcGxhdGUgQ2hlY2tcbiAqICAgVmFsdWU7IHR5cGljYWxseSBgdW5pc3QtdXRpbC1pc2AtY29tcGF0aWJsZSB0ZXN0LCBidXQgbm90IGFycmF5cy5cbiAqL1xuXG4vKipcbiAqIEB0eXBlZGVmIHsoXG4gKiAgIENoZWNrIGV4dGVuZHMgQXJyYXk8YW55PlxuICogICA/IE1hdGNoZXNPbmU8VmFsdWUsIENoZWNrW2tleW9mIENoZWNrXT5cbiAqICAgOiBNYXRjaGVzT25lPFZhbHVlLCBDaGVjaz5cbiAqICl9IE1hdGNoZXNcbiAqICAgQ2hlY2sgd2hldGhlciBhIG5vZGUgbWF0Y2hlcyBhIGNoZWNrIGluIHRoZSB0eXBlIHN5c3RlbS5cbiAqIEB0ZW1wbGF0ZSBWYWx1ZVxuICogICBWYWx1ZTsgdHlwaWNhbGx5IHVuaXN0IGBOb2RlYC5cbiAqIEB0ZW1wbGF0ZSBDaGVja1xuICogICBWYWx1ZTsgdHlwaWNhbGx5IGB1bmlzdC11dGlsLWlzYC1jb21wYXRpYmxlIHRlc3QuXG4gKi9cblxuLyoqXG4gKiBAdHlwZWRlZiB7MCB8IDEgfCAyIHwgMyB8IDQgfCA1IHwgNiB8IDcgfCA4IHwgOSB8IDEwfSBVaW50XG4gKiAgIE51bWJlcjsgY2FwcGVkIHJlYXNvbmFibHkuXG4gKi9cblxuLyoqXG4gKiBAdHlwZWRlZiB7SSBleHRlbmRzIDAgPyAxIDogSSBleHRlbmRzIDEgPyAyIDogSSBleHRlbmRzIDIgPyAzIDogSSBleHRlbmRzIDMgPyA0IDogSSBleHRlbmRzIDQgPyA1IDogSSBleHRlbmRzIDUgPyA2IDogSSBleHRlbmRzIDYgPyA3IDogSSBleHRlbmRzIDcgPyA4IDogSSBleHRlbmRzIDggPyA5IDogMTB9IEluY3JlbWVudFxuICogICBJbmNyZW1lbnQgYSBudW1iZXIgaW4gdGhlIHR5cGUgc3lzdGVtLlxuICogQHRlbXBsYXRlIHtVaW50fSBbST0wXVxuICogICBJbmRleC5cbiAqL1xuXG4vKipcbiAqIEB0eXBlZGVmIHsoXG4gKiAgIE5vZGUgZXh0ZW5kcyBVbmlzdFBhcmVudFxuICogICA/IE5vZGUgZXh0ZW5kcyB7Y2hpbGRyZW46IEFycmF5PGluZmVyIENoaWxkcmVuPn1cbiAqICAgICA/IENoaWxkIGV4dGVuZHMgQ2hpbGRyZW4gPyBOb2RlIDogbmV2ZXJcbiAqICAgICA6IG5ldmVyXG4gKiAgIDogbmV2ZXJcbiAqICl9IEludGVybmFsUGFyZW50XG4gKiAgIENvbGxlY3Qgbm9kZXMgdGhhdCBjYW4gYmUgcGFyZW50cyBvZiBgQ2hpbGRgLlxuICogQHRlbXBsYXRlIHtVbmlzdE5vZGV9IE5vZGVcbiAqICAgQWxsIG5vZGUgdHlwZXMgaW4gYSB0cmVlLlxuICogQHRlbXBsYXRlIHtVbmlzdE5vZGV9IENoaWxkXG4gKiAgIE5vZGUgdG8gc2VhcmNoIGZvci5cbiAqL1xuXG4vKipcbiAqIEB0eXBlZGVmIHtJbnRlcm5hbFBhcmVudDxJbmNsdXNpdmVEZXNjZW5kYW50PFRyZWU+LCBDaGlsZD59IFBhcmVudFxuICogICBDb2xsZWN0IG5vZGVzIGluIGBUcmVlYCB0aGF0IGNhbiBiZSBwYXJlbnRzIG9mIGBDaGlsZGAuXG4gKiBAdGVtcGxhdGUge1VuaXN0Tm9kZX0gVHJlZVxuICogICBBbGwgbm9kZSB0eXBlcyBpbiBhIHRyZWUuXG4gKiBAdGVtcGxhdGUge1VuaXN0Tm9kZX0gQ2hpbGRcbiAqICAgTm9kZSB0byBzZWFyY2ggZm9yLlxuICovXG5cbi8qKlxuICogQHR5cGVkZWYgeyhcbiAqICAgRGVwdGggZXh0ZW5kcyBNYXhcbiAqICAgPyBuZXZlclxuICogICA6XG4gKiAgICAgfCBJbnRlcm5hbFBhcmVudDxOb2RlLCBDaGlsZD5cbiAqICAgICB8IEludGVybmFsQW5jZXN0b3I8Tm9kZSwgSW50ZXJuYWxQYXJlbnQ8Tm9kZSwgQ2hpbGQ+LCBNYXgsIEluY3JlbWVudDxEZXB0aD4+XG4gKiApfSBJbnRlcm5hbEFuY2VzdG9yXG4gKiAgIENvbGxlY3Qgbm9kZXMgaW4gYFRyZWVgIHRoYXQgY2FuIGJlIGFuY2VzdG9ycyBvZiBgQ2hpbGRgLlxuICogQHRlbXBsYXRlIHtVbmlzdE5vZGV9IE5vZGVcbiAqICAgQWxsIG5vZGUgdHlwZXMgaW4gYSB0cmVlLlxuICogQHRlbXBsYXRlIHtVbmlzdE5vZGV9IENoaWxkXG4gKiAgIE5vZGUgdG8gc2VhcmNoIGZvci5cbiAqIEB0ZW1wbGF0ZSB7VWludH0gW01heD0xMF1cbiAqICAgTWF4OyBzZWFyY2hlcyB1cCB0byB0aGlzIGRlcHRoLlxuICogQHRlbXBsYXRlIHtVaW50fSBbRGVwdGg9MF1cbiAqICAgQ3VycmVudCBkZXB0aC5cbiAqL1xuXG4vKipcbiAqIEB0eXBlZGVmIHsoXG4gKiAgIFRyZWUgZXh0ZW5kcyBVbmlzdFBhcmVudFxuICogICAgID8gRGVwdGggZXh0ZW5kcyBNYXhcbiAqICAgICAgID8gVHJlZVxuICogICAgICAgOiBUcmVlIHwgSW5jbHVzaXZlRGVzY2VuZGFudDxUcmVlWydjaGlsZHJlbiddW251bWJlcl0sIE1heCwgSW5jcmVtZW50PERlcHRoPj5cbiAqICAgICA6IFRyZWVcbiAqICl9IEluY2x1c2l2ZURlc2NlbmRhbnRcbiAqICAgQ29sbGVjdCBhbGwgKGluY2x1c2l2ZSkgZGVzY2VuZGFudHMgb2YgYFRyZWVgLlxuICpcbiAqICAgPiDwn5GJICoqTm90ZSoqOiBmb3IgcGVyZm9ybWFuY2UgcmVhc29ucywgdGhpcyBzZWVtcyB0byBiZSB0aGUgZmFzdGVzdCB3YXkgdG9cbiAqICAgPiByZWN1cnNlIHdpdGhvdXQgYWN0dWFsbHkgcnVubmluZyBpbnRvIGFuIGluZmluaXRlIGxvb3AsIHdoaWNoIHRoZVxuICogICA+IHByZXZpb3VzIHZlcnNpb24gZGlkLlxuICogICA+XG4gKiAgID4gUHJhY3RpY2FsbHksIGEgbWF4IG9mIGAyYCBpcyB0eXBpY2FsbHkgZW5vdWdoIGFzc3VtaW5nIGEgYFJvb3RgIGlzXG4gKiAgID4gcGFzc2VkLCBidXQgaXQgZG9lc27igJl0IGltcHJvdmUgcGVyZm9ybWFuY2UuXG4gKiAgID4gSXQgZ2V0cyBoaWdoZXIgd2l0aCBgTGlzdCA+IExpc3RJdGVtID4gVGFibGUgPiBUYWJsZVJvdyA+IFRhYmxlQ2VsbGAuXG4gKiAgID4gVXNpbmcgdXAgdG8gYDEwYCBkb2VzbuKAmXQgaHVydCBvciBoZWxwIGVpdGhlci5cbiAqIEB0ZW1wbGF0ZSB7VW5pc3ROb2RlfSBUcmVlXG4gKiAgIFRyZWUgdHlwZS5cbiAqIEB0ZW1wbGF0ZSB7VWludH0gW01heD0xMF1cbiAqICAgTWF4OyBzZWFyY2hlcyB1cCB0byB0aGlzIGRlcHRoLlxuICogQHRlbXBsYXRlIHtVaW50fSBbRGVwdGg9MF1cbiAqICAgQ3VycmVudCBkZXB0aC5cbiAqL1xuXG4vKipcbiAqIEBjYWxsYmFjayBWaXNpdG9yXG4gKiAgIEhhbmRsZSBhIG5vZGUgKG1hdGNoaW5nIGB0ZXN0YCwgaWYgZ2l2ZW4pLlxuICpcbiAqICAgVmlzaXRvcnMgYXJlIGZyZWUgdG8gdHJhbnNmb3JtIGBub2RlYC5cbiAqICAgVGhleSBjYW4gYWxzbyB0cmFuc2Zvcm0gYHBhcmVudGAuXG4gKlxuICogICBSZXBsYWNpbmcgYG5vZGVgIGl0c2VsZiwgaWYgYFNLSVBgIGlzIG5vdCByZXR1cm5lZCwgc3RpbGwgY2F1c2VzIGl0c1xuICogICBkZXNjZW5kYW50cyB0byBiZSB3YWxrZWQgKHdoaWNoIGlzIGEgYnVnKS5cbiAqXG4gKiAgIFdoZW4gYWRkaW5nIG9yIHJlbW92aW5nIHByZXZpb3VzIHNpYmxpbmdzIG9mIGBub2RlYCAob3IgbmV4dCBzaWJsaW5ncywgaW5cbiAqICAgY2FzZSBvZiByZXZlcnNlKSwgdGhlIGBWaXNpdG9yYCBzaG91bGQgcmV0dXJuIGEgbmV3IGBJbmRleGAgdG8gc3BlY2lmeSB0aGVcbiAqICAgc2libGluZyB0byB0cmF2ZXJzZSBhZnRlciBgbm9kZWAgaXMgdHJhdmVyc2VkLlxuICogICBBZGRpbmcgb3IgcmVtb3ZpbmcgbmV4dCBzaWJsaW5ncyBvZiBgbm9kZWAgKG9yIHByZXZpb3VzIHNpYmxpbmdzLCBpbiBjYXNlXG4gKiAgIG9mIHJldmVyc2UpIGlzIGhhbmRsZWQgYXMgZXhwZWN0ZWQgd2l0aG91dCBuZWVkaW5nIHRvIHJldHVybiBhIG5ldyBgSW5kZXhgLlxuICpcbiAqICAgUmVtb3ZpbmcgdGhlIGNoaWxkcmVuIHByb3BlcnR5IG9mIGBwYXJlbnRgIHN0aWxsIHJlc3VsdHMgaW4gdGhlbSBiZWluZ1xuICogICB0cmF2ZXJzZWQuXG4gKiBAcGFyYW0ge1Zpc2l0ZWR9IG5vZGVcbiAqICAgRm91bmQgbm9kZS5cbiAqIEBwYXJhbSB7VmlzaXRlZCBleHRlbmRzIFVuaXN0Tm9kZSA/IG51bWJlciB8IHVuZGVmaW5lZCA6IG5ldmVyfSBpbmRleFxuICogICBJbmRleCBvZiBgbm9kZWAgaW4gYHBhcmVudGAuXG4gKiBAcGFyYW0ge0FuY2VzdG9yIGV4dGVuZHMgVW5pc3RQYXJlbnQgPyBBbmNlc3RvciB8IHVuZGVmaW5lZCA6IG5ldmVyfSBwYXJlbnRcbiAqICAgUGFyZW50IG9mIGBub2RlYC5cbiAqIEByZXR1cm5zIHtWaXNpdG9yUmVzdWx0fVxuICogICBXaGF0IHRvIGRvIG5leHQuXG4gKlxuICogICBBbiBgSW5kZXhgIGlzIHRyZWF0ZWQgYXMgYSB0dXBsZSBvZiBgW0NPTlRJTlVFLCBJbmRleF1gLlxuICogICBBbiBgQWN0aW9uYCBpcyB0cmVhdGVkIGFzIGEgdHVwbGUgb2YgYFtBY3Rpb25dYC5cbiAqXG4gKiAgIFBhc3NpbmcgYSB0dXBsZSBiYWNrIG9ubHkgbWFrZXMgc2Vuc2UgaWYgdGhlIGBBY3Rpb25gIGlzIGBTS0lQYC5cbiAqICAgV2hlbiB0aGUgYEFjdGlvbmAgaXMgYEVYSVRgLCB0aGF0IGFjdGlvbiBjYW4gYmUgcmV0dXJuZWQuXG4gKiAgIFdoZW4gdGhlIGBBY3Rpb25gIGlzIGBDT05USU5VRWAsIGBJbmRleGAgY2FuIGJlIHJldHVybmVkLlxuICogQHRlbXBsYXRlIHtVbmlzdE5vZGV9IFtWaXNpdGVkPVVuaXN0Tm9kZV1cbiAqICAgVmlzaXRlZCBub2RlIHR5cGUuXG4gKiBAdGVtcGxhdGUge1VuaXN0UGFyZW50fSBbQW5jZXN0b3I9VW5pc3RQYXJlbnRdXG4gKiAgIEFuY2VzdG9yIHR5cGUuXG4gKi9cblxuLyoqXG4gKiBAdHlwZWRlZiB7VmlzaXRvcjxWaXNpdGVkLCBQYXJlbnQ8QW5jZXN0b3IsIFZpc2l0ZWQ+Pn0gQnVpbGRWaXNpdG9yRnJvbU1hdGNoXG4gKiAgIEJ1aWxkIGEgdHlwZWQgYFZpc2l0b3JgIGZ1bmN0aW9uIGZyb20gYSBub2RlIGFuZCBhbGwgcG9zc2libGUgcGFyZW50cy5cbiAqXG4gKiAgIEl0IHdpbGwgaW5mZXIgd2hpY2ggdmFsdWVzIGFyZSBwYXNzZWQgYXMgYG5vZGVgIGFuZCB3aGljaCBhcyBgcGFyZW50YC5cbiAqIEB0ZW1wbGF0ZSB7VW5pc3ROb2RlfSBWaXNpdGVkXG4gKiAgIE5vZGUgdHlwZS5cbiAqIEB0ZW1wbGF0ZSB7VW5pc3RQYXJlbnR9IEFuY2VzdG9yXG4gKiAgIFBhcmVudCB0eXBlLlxuICovXG5cbi8qKlxuICogQHR5cGVkZWYgeyhcbiAqICAgQnVpbGRWaXNpdG9yRnJvbU1hdGNoPFxuICogICAgIE1hdGNoZXM8RGVzY2VuZGFudCwgQ2hlY2s+LFxuICogICAgIEV4dHJhY3Q8RGVzY2VuZGFudCwgVW5pc3RQYXJlbnQ+XG4gKiAgID5cbiAqICl9IEJ1aWxkVmlzaXRvckZyb21EZXNjZW5kYW50c1xuICogICBCdWlsZCBhIHR5cGVkIGBWaXNpdG9yYCBmdW5jdGlvbiBmcm9tIGEgbGlzdCBvZiBkZXNjZW5kYW50cyBhbmQgYSB0ZXN0LlxuICpcbiAqICAgSXQgd2lsbCBpbmZlciB3aGljaCB2YWx1ZXMgYXJlIHBhc3NlZCBhcyBgbm9kZWAgYW5kIHdoaWNoIGFzIGBwYXJlbnRgLlxuICogQHRlbXBsYXRlIHtVbmlzdE5vZGV9IERlc2NlbmRhbnRcbiAqICAgTm9kZSB0eXBlLlxuICogQHRlbXBsYXRlIHtUZXN0fSBDaGVja1xuICogICBUZXN0IHR5cGUuXG4gKi9cblxuLyoqXG4gKiBAdHlwZWRlZiB7KFxuICogICBCdWlsZFZpc2l0b3JGcm9tRGVzY2VuZGFudHM8XG4gKiAgICAgSW5jbHVzaXZlRGVzY2VuZGFudDxUcmVlPixcbiAqICAgICBDaGVja1xuICogICA+XG4gKiApfSBCdWlsZFZpc2l0b3JcbiAqICAgQnVpbGQgYSB0eXBlZCBgVmlzaXRvcmAgZnVuY3Rpb24gZnJvbSBhIHRyZWUgYW5kIGEgdGVzdC5cbiAqXG4gKiAgIEl0IHdpbGwgaW5mZXIgd2hpY2ggdmFsdWVzIGFyZSBwYXNzZWQgYXMgYG5vZGVgIGFuZCB3aGljaCBhcyBgcGFyZW50YC5cbiAqIEB0ZW1wbGF0ZSB7VW5pc3ROb2RlfSBbVHJlZT1VbmlzdE5vZGVdXG4gKiAgIE5vZGUgdHlwZS5cbiAqIEB0ZW1wbGF0ZSB7VGVzdH0gW0NoZWNrPVRlc3RdXG4gKiAgIFRlc3QgdHlwZS5cbiAqL1xuXG5pbXBvcnQge3Zpc2l0UGFyZW50c30gZnJvbSAndW5pc3QtdXRpbC12aXNpdC1wYXJlbnRzJ1xuXG5leHBvcnQge0NPTlRJTlVFLCBFWElULCBTS0lQfSBmcm9tICd1bmlzdC11dGlsLXZpc2l0LXBhcmVudHMnXG5cbi8qKlxuICogVmlzaXQgbm9kZXMuXG4gKlxuICogVGhpcyBhbGdvcml0aG0gcGVyZm9ybXMgKmRlcHRoLWZpcnN0KiAqdHJlZSB0cmF2ZXJzYWwqIGluICpwcmVvcmRlcipcbiAqICgqKk5MUioqKSBvciBpZiBgcmV2ZXJzZWAgaXMgZ2l2ZW4sIGluICpyZXZlcnNlIHByZW9yZGVyKiAoKipOUkwqKikuXG4gKlxuICogWW91IGNhbiBjaG9vc2UgZm9yIHdoaWNoIG5vZGVzIGB2aXNpdG9yYCBpcyBjYWxsZWQgYnkgcGFzc2luZyBhIGB0ZXN0YC5cbiAqIEZvciBjb21wbGV4IHRlc3RzLCB5b3Ugc2hvdWxkIHRlc3QgeW91cnNlbGYgaW4gYHZpc2l0b3JgLCBhcyBpdCB3aWxsIGJlXG4gKiBmYXN0ZXIgYW5kIHdpbGwgaGF2ZSBpbXByb3ZlZCB0eXBlIGluZm9ybWF0aW9uLlxuICpcbiAqIFdhbGtpbmcgdGhlIHRyZWUgaXMgYW4gaW50ZW5zaXZlIHRhc2suXG4gKiBNYWtlIHVzZSBvZiB0aGUgcmV0dXJuIHZhbHVlcyBvZiB0aGUgdmlzaXRvciB3aGVuIHBvc3NpYmxlLlxuICogSW5zdGVhZCBvZiB3YWxraW5nIGEgdHJlZSBtdWx0aXBsZSB0aW1lcywgd2FsayBpdCBvbmNlLCB1c2UgYHVuaXN0LXV0aWwtaXNgXG4gKiB0byBjaGVjayBpZiBhIG5vZGUgbWF0Y2hlcywgYW5kIHRoZW4gcGVyZm9ybSBkaWZmZXJlbnQgb3BlcmF0aW9ucy5cbiAqXG4gKiBZb3UgY2FuIGNoYW5nZSB0aGUgdHJlZS5cbiAqIFNlZSBgVmlzaXRvcmAgZm9yIG1vcmUgaW5mby5cbiAqXG4gKiBAb3ZlcmxvYWRcbiAqIEBwYXJhbSB7VHJlZX0gdHJlZVxuICogQHBhcmFtIHtDaGVja30gY2hlY2tcbiAqIEBwYXJhbSB7QnVpbGRWaXNpdG9yPFRyZWUsIENoZWNrPn0gdmlzaXRvclxuICogQHBhcmFtIHtib29sZWFuIHwgbnVsbCB8IHVuZGVmaW5lZH0gW3JldmVyc2VdXG4gKiBAcmV0dXJucyB7dW5kZWZpbmVkfVxuICpcbiAqIEBvdmVybG9hZFxuICogQHBhcmFtIHtUcmVlfSB0cmVlXG4gKiBAcGFyYW0ge0J1aWxkVmlzaXRvcjxUcmVlPn0gdmlzaXRvclxuICogQHBhcmFtIHtib29sZWFuIHwgbnVsbCB8IHVuZGVmaW5lZH0gW3JldmVyc2VdXG4gKiBAcmV0dXJucyB7dW5kZWZpbmVkfVxuICpcbiAqIEBwYXJhbSB7VW5pc3ROb2RlfSB0cmVlXG4gKiAgIFRyZWUgdG8gdHJhdmVyc2UuXG4gKiBAcGFyYW0ge1Zpc2l0b3IgfCBUZXN0fSB0ZXN0T3JWaXNpdG9yXG4gKiAgIGB1bmlzdC11dGlsLWlzYC1jb21wYXRpYmxlIHRlc3QgKG9wdGlvbmFsLCBvbWl0IHRvIHBhc3MgYSB2aXNpdG9yKS5cbiAqIEBwYXJhbSB7VmlzaXRvciB8IGJvb2xlYW4gfCBudWxsIHwgdW5kZWZpbmVkfSBbdmlzaXRvck9yUmV2ZXJzZV1cbiAqICAgSGFuZGxlIGVhY2ggbm9kZSAod2hlbiB0ZXN0IGlzIG9taXR0ZWQsIHBhc3MgYHJldmVyc2VgKS5cbiAqIEBwYXJhbSB7Ym9vbGVhbiB8IG51bGwgfCB1bmRlZmluZWR9IFttYXliZVJldmVyc2U9ZmFsc2VdXG4gKiAgIFRyYXZlcnNlIGluIHJldmVyc2UgcHJlb3JkZXIgKE5STCkgaW5zdGVhZCBvZiB0aGUgZGVmYXVsdCBwcmVvcmRlciAoTkxSKS5cbiAqIEByZXR1cm5zIHt1bmRlZmluZWR9XG4gKiAgIE5vdGhpbmcuXG4gKlxuICogQHRlbXBsYXRlIHtVbmlzdE5vZGV9IFRyZWVcbiAqICAgTm9kZSB0eXBlLlxuICogQHRlbXBsYXRlIHtUZXN0fSBDaGVja1xuICogICBgdW5pc3QtdXRpbC1pc2AtY29tcGF0aWJsZSB0ZXN0LlxuICovXG5leHBvcnQgZnVuY3Rpb24gdmlzaXQodHJlZSwgdGVzdE9yVmlzaXRvciwgdmlzaXRvck9yUmV2ZXJzZSwgbWF5YmVSZXZlcnNlKSB7XG4gIC8qKiBAdHlwZSB7Ym9vbGVhbiB8IG51bGwgfCB1bmRlZmluZWR9ICovXG4gIGxldCByZXZlcnNlXG4gIC8qKiBAdHlwZSB7VGVzdH0gKi9cbiAgbGV0IHRlc3RcbiAgLyoqIEB0eXBlIHtWaXNpdG9yfSAqL1xuICBsZXQgdmlzaXRvclxuXG4gIGlmIChcbiAgICB0eXBlb2YgdGVzdE9yVmlzaXRvciA9PT0gJ2Z1bmN0aW9uJyAmJlxuICAgIHR5cGVvZiB2aXNpdG9yT3JSZXZlcnNlICE9PSAnZnVuY3Rpb24nXG4gICkge1xuICAgIHRlc3QgPSB1bmRlZmluZWRcbiAgICB2aXNpdG9yID0gdGVzdE9yVmlzaXRvclxuICAgIHJldmVyc2UgPSB2aXNpdG9yT3JSZXZlcnNlXG4gIH0gZWxzZSB7XG4gICAgLy8gQHRzLWV4cGVjdC1lcnJvcjogYXNzdW1lIHRoZSBvdmVybG9hZCB3aXRoIHRlc3Qgd2FzIGdpdmVuLlxuICAgIHRlc3QgPSB0ZXN0T3JWaXNpdG9yXG4gICAgLy8gQHRzLWV4cGVjdC1lcnJvcjogYXNzdW1lIHRoZSBvdmVybG9hZCB3aXRoIHRlc3Qgd2FzIGdpdmVuLlxuICAgIHZpc2l0b3IgPSB2aXNpdG9yT3JSZXZlcnNlXG4gICAgcmV2ZXJzZSA9IG1heWJlUmV2ZXJzZVxuICB9XG5cbiAgdmlzaXRQYXJlbnRzKHRyZWUsIHRlc3QsIG92ZXJsb2FkLCByZXZlcnNlKVxuXG4gIC8qKlxuICAgKiBAcGFyYW0ge1VuaXN0Tm9kZX0gbm9kZVxuICAgKiBAcGFyYW0ge0FycmF5PFVuaXN0UGFyZW50Pn0gcGFyZW50c1xuICAgKi9cbiAgZnVuY3Rpb24gb3ZlcmxvYWQobm9kZSwgcGFyZW50cykge1xuICAgIGNvbnN0IHBhcmVudCA9IHBhcmVudHNbcGFyZW50cy5sZW5ndGggLSAxXVxuICAgIGNvbnN0IGluZGV4ID0gcGFyZW50ID8gcGFyZW50LmNoaWxkcmVuLmluZGV4T2Yobm9kZSkgOiB1bmRlZmluZWRcbiAgICByZXR1cm4gdmlzaXRvcihub2RlLCBpbmRleCwgcGFyZW50KVxuICB9XG59XG4iXSwibmFtZXMiOlsidmlzaXRQYXJlbnRzIiwiQ09OVElOVUUiLCJFWElUIiwiU0tJUCIsInZpc2l0IiwidHJlZSIsInRlc3RPclZpc2l0b3IiLCJ2aXNpdG9yT3JSZXZlcnNlIiwibWF5YmVSZXZlcnNlIiwicmV2ZXJzZSIsInRlc3QiLCJ2aXNpdG9yIiwidW5kZWZpbmVkIiwib3ZlcmxvYWQiLCJub2RlIiwicGFyZW50cyIsInBhcmVudCIsImxlbmd0aCIsImluZGV4IiwiY2hpbGRyZW4iLCJpbmRleE9mIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(ssr)/./node_modules/unist-util-visit/lib/index.js\n");

/***/ })

};
;