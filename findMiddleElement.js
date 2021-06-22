/*
This question is asked by Amazon. Given a non-empty linked list, return the middle node of the list. If the linked list contains an even number of elements, return the node closer to the end.
Ex: Given the following linked lists...

1->2->3->null, return 2
1->2->3->4->null, return 3
1->null, return 1
*/

// i - linked list head
// o - number, value of middle element
// c - O(n)
// e - list is even
// e - list contains only two nodes
// e - list contains only one node


// iterate through linked list and keep track of nodes in a counter
// if counter is even, iterate up to half of counter plus one
// if odd, iterate over half of counter rounded up


ß

var middleNode = function (head) {
  var double = true
  var current = head
  var half = head

  if (!head) {
    return null;
  }

  if (head.next === null) {
    return head;
  }

  while (current && current.next) {
    double = toggleDouble(double);
    current = current.next
    if (double) {
      half = half.next
    }
  }

  if (!double) {
    half = half.next
  }

  return half


};

var toggleDouble = (bool) => {
  if (bool) { return false }
  return true
}