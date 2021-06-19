/*
This question is asked by Google. Given a linked list and a value, remove all nodes containing the provided value, and return the resulting list.

Ex: Given the following linked lists and values...

1->2->3->null, value = 3, return 1->2->null
8->1->1->4->12->null, value = 1, return 8->4->12->null
7->12->2->9->null, value = 7, return 12->2->9->null
*/

// iterate through linked list with 2 pointers

// when you find the target
// set the previous pointer's next value to current.next, thereby removing the node.
