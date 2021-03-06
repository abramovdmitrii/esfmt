/**
 *  {
 *      type: 'ImportSpecifier',
 *      local: {
 *          type: 'Identifier',
 *          name: 'b'
 *      },
 *      imported: {
 *          type: 'Identifier',
 *          name: 'b'
 *      }
 *  } {
 *      type: 'ImportSpecifier',
 *      local: {
 *          type: 'Identifier',
 *          name: 'd'
 *      },
 *      imported: {
 *          type: 'Identifier',
 *          name: 'c'
 *      }
 *  }
 */

export function format(node, context, recur) {
    if (node.local.name === node.imported.name) {
        recur(node.local);
    } else {
        recur(node.imported);
        context.write(' as ');
        recur(node.local);
    }
}
