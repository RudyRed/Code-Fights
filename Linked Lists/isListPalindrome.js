// Note: Try to solve this task in O(n) time using O(1) additional space, where n
// is the number of elements in l, since this is what you'll be asked to do during
// an interview.
//
// Given a singly linked list of integers, determine whether or not it's a palindrome.
//
// Example
//
// For l = [0, 1, 0], the output should be
// isListPalindrome(l) = true;
// For l = [1, 2, 2, 3], the output should be
// isListPalindrome(l) = false.
// Input/Output
//
// [execution time limit] 4 seconds (js)
//
// [input] linkedlist.integer l
//
// A singly linked list of integers.
//
// Guaranteed constraints:
// 0 ≤ list size ≤ 5 · 105,
// -109 ≤ element value ≤ 109.
//
// [output] boolean
//
// Return true if l is a palindrome, otherwise return false.
//
// Definition for singly-linked list:
// function ListNode(x) {
//   this.value = x;
//   this.next = null;
// }

function isListPalindrome(l) {
  if (!l) return true;

  let slow = l;
  let fast = l;

  while (fast && fast.next) {
    slow = slow.next;
    fast = fast.next.next;
  }

  let reversed = null;

  while (slow) {
    let placeholder = slow.next;
    slow.next = reversed;
    reversed = slow;
    slow = placeholder;
  }

  while (reversed && l) {
    if (reversed.value !== l.value) return false;
    reversed = reversed.next;
    l = l.next;
  }

  return true;
};

// function ListNode(x) {
//   this.value = x;
//   this.next = null;
// };
//
// let l = [1];
// let list = new ListNode(3);
// let currentNode = list;
// for (let num of l) {
//   currentNode.next = new ListNode(num);
//   currentNode = currentNode.next;
// }
//
// console.log(isListPalindrome(list));
//
// l = [2, 2, 1];
// list = new ListNode(1);
// currentNode = list;
// for (let num of l) {
//   currentNode.next = new ListNode(num);
//   currentNode = currentNode.next;
// }
//
// console.log(isListPalindrome(list));
