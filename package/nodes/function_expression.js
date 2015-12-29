/**
 *  {
 *      type: 'FunctionExpression',
 *      id: { type: 'Identifier', name: 'fn' },
 *      params: [{
 *          type: 'Identifier',
 *          name: 'a'
 *      }],
 *      body: {
 *          type: 'BlockStatement',
 *          body: [
 *              [Object]
 *          ]
 *      },
 *      generator: false,
 *      expression: false
 *  }
 */'use strict';Object.defineProperty(exports, '__esModule', { value: true });exports.format = format;var _list = require(

'../list');

/**
 * @param {Boolean} noFunctionKeyword if set to true, then `function` will not be printed.
 *  in class definitions the `constructor` is defined in the class itself, and the function
 *  declaration is expected to be just `() {}`
 *
 *      class A {
 *          constructor() {
 *          }
 *      }
 */
function format(node, context, recur) {var _ref = arguments.length <= 3 || arguments[3] === undefined ? {} : arguments[3];var noFunctionKeyword = _ref.noFunctionKeyword;
    if (!noFunctionKeyword) {
        context.write('function');}


    if (node.id) {
        context.write(' ');
        recur(node.id);}


    var rollback = context.transaction();

    (0, _list.long)(node.params, context, recur, '()');

    if (context.overflown()) {
        rollback();
        (0, _list.short)(node.params, context, recur, '()');}


    context.write(' ');
    recur(node.body);}