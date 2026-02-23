// Design Dynamic Array (Resizable Array)
// Easy
// Design a Dynamic Array (aka a resizable array) class, such as an ArrayList in Java or a vector in C++.

// Your DynamicArray class should support the following operations:

// DynamicArray(int capacity) will initialize an empty array with a capacity of capacity, where capacity > 0.
// int get(int i) will return the element at index i. Assume that index i is valid.
// void set(int i, int n) will set the element at index i to n. Assume that index i is valid.
// void pushback(int n) will push the element n to the end of the array.
// int popback() will pop and return the element at the end of the array. Assume that the array is non-empty.
// void resize() will double the capacity of the array.
// int getSize() will return the number of elements in the array.
// int getCapacity() will return the capacity of the array.
// If we call void pushback(int n) but the array is full, we should resize the array first.

// Example 1:

// Input:
// ["Array", 1, "getSize", "getCapacity"]

// Output:
// [null, 0, 1]
// Example 2:

// Input:
// ["Array", 1, "pushback", 1, "getCapacity", "pushback", 2, "getCapacity"]

// Output:
// [null, null, 1, null, 2]
// Example 3:

// Input:
// ["Array", 1, "getSize", "getCapacity", "pushback", 1, "getSize", "getCapacity", "pushback", 2, "getSize", "getCapacity", "get", 1, "set", 1, 3, "get", 1, "popback", "getSize", "getCapacity"]

// Output:
// [null, 0, 1, null, 1, 1, null, 2, 2, 2, null, 3, 3, 1, 2]
// Note:

// The index i provided to get(int i) and set(int i) is guaranteed to be greater than or equal to 0 and less than the number of elements in the array.

//Solution
class DynamicArray {
    /**
     * @constructor
     * @param {number} capacity - Initial capacity of the array.
     */
    constructor(capacity) {
        this.capacity = capacity;
        this.length = 0;
        this.arr = new Array(this.capacity).fill(0);
    }

    /**
     * Get the value at the i-th index.
     * @param {number} i - The index to get the value from.
     * @returns {number} - The value at the i-th index.
     */
    get(i) {
        return this.arr[i];
    }

    /**
     * Set a value at the i-th index.
     * @param {number} i - The index to insert the value at.
     * @param {number} n - The value to insert.
     * @returns {void}
     */
    set(i, n) {
        this.arr[i] = n;
    }

    /**
     * Insert a value in the last position of the array.
     * @param {number} n - The value to insert.
     * @returns {void}
     */
    pushback(n) {
        if (this.length === this.capacity) {
            this.resize();
        }
        this.arr[this.length] = n;
        this.length++;
    }

    /**
     * Remove the last element in the array.
     * @returns {number}
     */
    popback() {
        if (this.length > 0) {
            // soft delete the last element
            this.length--;
        }
        return this.arr[this.length];
    }

    /**
     * Resize the array to double its current capacity.
     * @returns {void}
     */
    resize() {
        this.capacity *= 2;
        const newArr = new Array(this.capacity).fill(0);
        for (let i = 0; i < this.length; i++) {
            newArr[i] = this.arr[i];
        }
        this.arr = newArr;
    }

    /**
     * Get the current size of the array.
     * @returns {number} - The current size.
     */
    getSize() {
        return this.length;
    }

    /**
     * Get the current capacity of the array.
     * @returns {number} - The current capacity.
     */
    getCapacity() {
        return this.capacity;
    }
}
