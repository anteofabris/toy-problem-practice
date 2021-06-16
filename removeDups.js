


// if linked list is empty or contains only one node
  // return null
// set the current node to the head node
// while current is not null (i.e. as long as there is another node in the list)
  // set var runner to current
  // while runner.next is not null
    // if runner.next.data is the same as current.data
      // set runner.next to runner.next.next
      // decrease length by 1
    // else, set runner to runner.next
  // set current to current.next