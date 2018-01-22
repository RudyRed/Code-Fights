// You're given 2 huge integers represented by linked lists. Each linked list
// element is a number from 0 to 9999 that represents a number with exactly 4 digits.
// The represented number might have leading zeros. Your task is to add up these
// huge integers and return the result in the same format.
//
// Example
//
// For a = [9876, 5432, 1999] and b = [1, 8001], the output should be
// addTwoHugeNumbers(a, b) = [9876, 5434, 0].
//
// Explanation: 987654321999 + 18001 = 987654340000.
//
// For a = [123, 4, 5] and b = [100, 100, 100], the output should be
// addTwoHugeNumbers(a, b) = [223, 104, 105].
//
// Explanation: 12300040005 + 10001000100 = 22301040105.
//
// Input/Output
//
// [execution time limit] 4 seconds (js)
//
// [input] linkedlist.integer a
//
// The first number, without its leading zeros.
//
// Guaranteed constraints:
// 0 ≤ a size ≤ 104,
// 0 ≤ element value ≤ 9999.
//
// [input] linkedlist.integer b
//
// The second number, without its leading zeros.
//
// Guaranteed constraints:
// 0 ≤ b size ≤ 104,
// 0 ≤ element value ≤ 9999.
//
// [output] linkedlist.integer
//
// The result of adding a and b together, returned without leading zeros in the same format.

// Definition for singly-linked list:
// function ListNode(x) {
//   this.value = x;
//   this.next = null;
// }
//
function addTwoHugeNumbers(a, b) {
  let prev = null;
  let curr = a;
  let countA = 0;

  while (curr) {
    let placeholder = curr.next;
    curr.next = prev;
    prev = curr;
    curr = placeholder;
    countA++;
  }
  a = prev;

  prev = null;
  curr = b;
  let countB = 0

  while (curr) {
    let placeholder = curr.next;
    curr.next = prev;
    prev = curr;
    curr = placeholder;
    countB++;
  }
  b = prev;

  let main = countA >= countB ? a : b;
  let otherTree = countA >= countB ? b : a;
  let carryFlag = false;

  while (main) {
    let newNum = main.value + (carryFlag ? 1 : 0);
    carryFlag = false;
    if (otherTree) {
      newNum += otherTree.value;
      otherTree = otherTree.next;
    }

    if (newNum >= 10000) {
      carryFlag = true;
      newNum -= 10000;
    }

    main.value = newNum;

    if (!main.next && carryFlag) {
      main.next = new ListNode(1);
      break;
    }

    main = main.next;
  }

  prev = null;
  curr = countA >= countB ? a : b;

  while (curr) {
    let placeholder = curr.next;
    curr.next = prev;
    prev = curr;
    curr = placeholder;
  }

  return prev;
};

// function ListNode(x) {
//   this.value = x;
//   this.next = null;
// };
//
// let l = [5432, 1999];
// let listA = new ListNode(9876);
// let currentNode = listA;
// for (let num of l) {
//   currentNode.next = new ListNode(num);
//   currentNode = currentNode.next;
// }
//
// l = [8001];
// listB = new ListNode(1);
// currentNode = listB;
// for (let num of l) {
//   currentNode.next = new ListNode(num);
//   currentNode = currentNode.next;
// }
//
// console.log(addTwoHugeNumbers(listA, listB));
