/*
This question is asked by Facebook. Given a linked list and a value n, remove the nth to last node and return the resulting list.

Ex: Given the following linked lists...

1->2->3->null, n = 1, return 1->2->null
1->2->3->null, n = 2, return 1->3->null
1->2->3->null, n = 3, return 2->3->null
*/

var removeNthToLast = (head, n) => {
  var current = head
  var counter = 0
  while (current.next !== null) {
    current = current.next
    counter++
  }

  counter = counter - n

  current = head
  while (counter > 0) {
    current = current.next
    counter --
  }



}

// start at head aka set current to head
  // while next node is not null
    // keep going aka set current to current.next
    // increment counter

// set counter to ocunter - n
// start at head again aka set current to head
  // while counter is not 0
    // keep going aka set current to head
    // decrement counter
// delete current