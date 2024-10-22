// Time Complexity : push, pop, peek, isEmpty O(1)
// Space Complexity : O(1) since we not creating any data structure in user facing functions.
// Did this code successfully run on Leetcode : No
// Any problem you faced while coding this : NO

class Stack {
  //  Please read sample.java file before starting.
  //  Kindly include Time and Space complexity at top of each file
  constructor() {
    //Initialize your constructor
    this.MAX = 10;
    this.top = -1;
    this.a = new Array(this.MAX);
  }

  isEmpty() {
    //Write your code here
    return this.top === -1;
  }

  push(x) {
    this.top += 1;
    this.a[this.top] = x;
  }

  pop() {
    //If empty return 0 and print " Stack Underflow"
    if (this.isEmpty()) {
      return 0;
    }
    let value = this.a[this.top];
    this.a[this.top] = null;
    this.top -= 1;
    return value;
  }

  peek() {
    //Write your code here
    if (this.isEmpty()) {
      return 0;
    }
    this.a[this.top];
  }
}

let s = new Stack();
s.push(10);
s.push(20);
s.push(30);
console.log(s.pop() + " Popped from stack");
