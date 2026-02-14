// Design Singly Linked List
// Easy
// Design a Singly Linked List class.

// Your LinkedList class should support the following operations:

// LinkedList() will initialize an empty linked list.
// int get(int i) will return the value of the ith node (0-indexed). If the index is out of bounds, return -1.
// void insertHead(int val) will insert a node with val at the head of the list.
// void insertTail(int val) will insert a node with val at the tail of the list.
// bool remove(int i) will remove the ith node (0-indexed). If the index is out of bounds, return false, otherwise return true.
// int[] getValues() return an array of all the values in the linked list, ordered from head to tail.
// Example 1:

// Input: 
// ["insertHead", 1, "insertTail", 2, "insertHead", 0, "remove", 1, "getValues"]

// Output:
// [null, null, null, true, [0, 2]]
// Example 2:

// Input:
// ["insertHead", 1, "insertHead", 2, "get", 5]

// Output:
// [null, null, -1]
// Note:

// The index int i provided to get(int i) and remove(int i) is guaranteed to be greater than or equal to 0.

// Node class (each node stores a value and a next pointer)
class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

// LinkedList class
class LinkedList {
  constructor() {
    this.head = null; // start with empty list
  }

  // Get value at index i (0-based)
  get(i) {
    let current = this.head;
    let index = 0;

    while (current !== null) {
      if (index === i) {
        return current.val;
      }
      current = current.next;
      index++;
    }

    return -1; // if index is out of bounds
  }

  // Insert at the head
  insertHead(val) {
    let newNode = new Node(val);
    newNode.next = this.head;
    this.head = newNode;
  }

  // Insert at the tail
  insertTail(val) {
    let newNode = new Node(val);

    // If list is empty
    if (this.head === null) {
      this.head = newNode;
      return;
    }

    let current = this.head;

    while (current.next !== null) {
      current = current.next;
    }

    current.next = newNode;
  }

  // Remove node at index i
  remove(i) {
    if (this.head === null) return false;

    // If removing head
    if (i === 0) {
      this.head = this.head.next;
      return true;
    }

    let current = this.head;
    let index = 0;

    while (current !== null && current.next !== null) {
      if (index + 1 === i) {
        current.next = current.next.next;
        return true;
      }
      current = current.next;
      index++;
    }

    return false; // if index is out of bounds
  }

  // Return all values as array
  getValues() {
    let result = [];
    let current = this.head;

    while (current !== null) {
      result.push(current.val);
      current = current.next;
    }

    return result;
  }
}


let list = new LinkedList();

list.insertHead(1);
list.insertTail(2);
list.insertHead(0);
console.log(list.remove(1));   // true
console.log(list.getValues()); // [0, 2]
