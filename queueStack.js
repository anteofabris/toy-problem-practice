/*
Design a class to implement a stack using only a single queue.
Your class, QueueStack, should support the following stack methods:
push() (adding an item),
pop() (removing an item),
peek() (returning the top value without removing it), and
empty() (whether or not the stack is empty).
*/

class Queue {
  this.stack = []
  this.last = null
}

Queue.prototype.push = (n) => {
  this.stack.push(n)
  this.last = n

}

Queue.prototype.pop = () => {
  var result = this.stack.pop()
  this.last = this.stack[this.stack.length - 1]
  return result;
}

Queue.prototype.peek = () => {
  return this.last
}

Queue.prototype.empty = () => {
  this.stack = []
  this.last = null
}