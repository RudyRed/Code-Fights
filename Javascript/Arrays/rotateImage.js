// Note: Try to solve this task in-place (with O(1) additional memory), since this
// \is what you'll be asked to do during an interview.
//
// You are given an n x n 2D matrix that represents an image. Rotate the image by
// 90 degrees (clockwise).
//
// Example
//
// For
//
// a = [[1, 2, 3],
//      [4, 5, 6],
//      [7, 8, 9]]
// the output should be
//
// rotateImage(a) =
//     [[7, 4, 1],
//      [8, 5, 2],
//      [9, 6, 3]]
// Input/Output
//
// [execution time limit] 4 seconds (js)
//
// [input] array.array.integer a
//
// Guaranteed constraints:
// 1 ≤ a.length ≤ 100,
// a[i].length = a.length,
// 1 ≤ a[i][j] ≤ 104.
//
// [output] array.array.integer

function rotateImage(a) {
  if (a.length === 1) return a;

  let levelsDeep = Math.floor(a.length/2);

  for (let level = 0; level < levelsDeep; level++) {
    let end = a.length - 1 - level;
    let iterate = a.length - level * 2 - 1;
    for (let i = 0; i < iterate; i++) {
      let pendingInsert = a[level][level + i];
      let placeholder = a[level + i][end];
      a[level + i][end] = pendingInsert;
      pendingInsert = placeholder;

      placeholder = a[end][end - i];
      a[end][end - i] = pendingInsert;
      pendingInsert = placeholder;

      placeholder = a[end - i][level];
      a[end - i][level] = pendingInsert;
      pendingInsert = placeholder;

      a[level][level + i] = pendingInsert;
    }
  }
  return a;
};
