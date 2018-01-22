// Note: Your solution should have O(l1.length + l2.length) time complexity, since
// this is what you will be asked to accomplish in an interview.
//
// Given two singly linked lists sorted in non-decreasing order, your task is to
// merge them. In other words, return a singly linked list, also sorted in
// non-decreasing order, that contains the elements from both original lists.
//
// Example
//
// For l1 = [1, 2, 3] and l2 = [4, 5, 6], the output should be
// mergeTwoLinkedLists(l1, l2) = [1, 2, 3, 4, 5, 6];
// For l1 = [1, 1, 2, 4] and l2 = [0, 3, 5], the output should be
// mergeTwoLinkedLists(l1, l2) = [0, 1, 1, 2, 3, 4, 5].
// Input/Output
//
// [execution time limit] 4 seconds (js)
//
// [input] linkedlist.integer l1
//
// A singly linked list of integers.
//
// Guaranteed constraints:
// 0 ≤ list size ≤ 104,
// -109 ≤ element value ≤ 109.
//
// [input] linkedlist.integer l2
//
// A singly linked list of integers.
//
// Guaranteed constraints:
// 0 ≤ list size ≤ 104,
// -109 ≤ element value ≤ 109.
//
// [output] linkedlist.integer
//
// A list that contains elements from both l1 and l2, sorted in non-decreasing order.
// Definition for singly-linked list:
// function ListNode(x) {
//   this.value = x;
//   this.next = null;
// }

function mergeTwoLinkedLists(l1, l2) {
  let output = new ListNode('.next is head');
  let curr = output;

  while (l1 || l2) {
    if (!l2 || l1 && l1.value <= l2.value) {
      curr.next = l1;
      l1 = l1.next;
    } else {
      curr.next = l2;
      l2 = l2.next;
    }
    curr = curr.next;
  }

  return output.next;
};

// function ListNode(x) {
//   this.value = x;
//   this.next = null;
// };
//
// let l = [0, 3, 5];
// let listA = new ListNode(0);
// let currentNode = listA;
// for (let num of l) {
//   currentNode.next = new ListNode(num);
//   currentNode = currentNode.next;
// }
//
// l = [1, 1, 2, 4];
// listB = new ListNode(1);
// currentNode = listB;
// for (let num of l) {
//   currentNode.next = new ListNode(num);
//   currentNode = currentNode.next;
// }
//
// console.log(mergeTwoLinkedLists(listA, listB));
