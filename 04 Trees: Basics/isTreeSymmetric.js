// Given a binary tree t, determine whether it is symmetric around its center, i.e. each side mirrors the other.
//
// Example
//
// For
//
// t = {
//     "value": 1,
//     "left": {
//         "value": 2,
//         "left": {
//             "value": 3,
//             "left": null,
//             "right": null
//         },
//         "right": {
//             "value": 4,
//             "left": null,
//             "right": null
//         }
//     },
//     "right": {
//         "value": 2,
//         "left": {
//             "value": 4,
//             "left": null,
//             "right": null
//         },
//         "right": {
//             "value": 3,
//             "left": null,
//             "right": null
//         }
//     }
// }
// the output should be isTreeSymmetric(t) = true.
//
// Here's what the tree in this example looks like:
//
//     1
//    / \
//   2   2
//  / \ / \
// 3  4 4  3
// As you can see, it is symmetric.
//
// For
//
// t = {
//     "value": 1,
//     "left": {
//         "value": 2,
//         "left": null,
//         "right": {
//             "value": 3,
//             "left": null,
//             "right": null
//         }
//     },
//     "right": {
//         "value": 2,
//         "left": null,
//         "right": {
//             "value": 3,
//             "left": null,
//             "right": null
//         }
//     }
// }
// the output should be isTreeSymmetric(t) = false.
//
// Here's what the tree in this example looks like:
//
//     1
//    / \
//   2   2
//    \   \
//    3    3
// As you can see, it is not symmetric.
//
// Input/Output
//
// [execution time limit] 4 seconds (js)
//
// [input] tree.integer t
//
// A binary tree of integers.
//
// Guaranteed constraints:
// 0 ≤ tree size < 5 · 104,
// -1000 ≤ node value ≤ 1000.
//
// [output] boolean
//
// Return true if t is symmetric and false otherwise.
//
// Definition for binary tree:
// function Tree(x) {
//   this.value = x;
//   this.left = null;
//   this.right = null;
// }
const testTrees = function (l, r) {
  if (!l && !r) return true;

  if (!l || !r || l.value !== r.value) return false;

  return testTrees(l.left, r.right) && testTrees(l.right, r.left);
};

const isTreeSymmetric = (t) => testTrees(t, t);

// console.log(isTreeSymmetric({
//     "value": 1,
//     "left": {
//         "value": 2,
//         "left": {
//             "value": 3,
//             "left": null,
//             "right": null
//         },
//         "right": {
//             "value": 4,
//             "left": null,
//             "right": null
//         }
//     },
//     "right": {
//         "value": 2,
//         "left": {
//             "value": 4,
//             "left": null,
//             "right": null
//         },
//         "right": {
//             "value": 3,
//             "left": null,
//             "right": null
//         }
//     }
// }), 'shouldbe true');
//
// console.log(isTreeSymmetric({
//     "value": 1,
//     "left": {
//         "value": 2,
//         "left": null,
//         "right": {
//             "value": 3,
//             "left": null,
//             "right": null
//         }
//     },
//     "right": {
//         "value": 2,
//         "left": null,
//         "right": {
//             "value": 3,
//             "left": null,
//             "right": null
//         }
//     }
// }), 'shouldbe false')
