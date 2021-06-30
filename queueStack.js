/*
Design a class to implement a stack using only a single queue.
Your class, QueueStack, should support the following stack methods:
push() (adding an item),
pop() (removing an item),
peek() (returning the top value without removing it), and
empty() (whether or not the stack is empty).
*/

var Queue = function () {
  this.stack = []
  this.last = null
}

Queue.prototype.push = function (n) {
    console.log('this is the stack: ', this.stack)
  this.stack.push(n)
  this.last = n

}

Queue.prototype.pop = function () {
  var result = this.stack.pop()
  this.last = this.stack[this.stack.length - 1]
  return result;
}

Queue.prototype.peek = function () {
  return this.last
}

Queue.prototype.empty = function () {
  this.stack = []
  this.last = null
}

var test = new Queue()
test.push(1)
test.push(8)
test.push(3)
test.peek()


// difference between arrow functions and es5 function is the binding of 'this'