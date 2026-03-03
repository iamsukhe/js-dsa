class MinPriorityQueue {
    constructor(compareFunction) {
        // The flat array that represents our complete binary tree
        this.heap = [];
        // Default to a simple numeric comparison if no function is provided
        this.compare = compareFunction || ((a, b) => a < b);
    }

    // --- Public Methods ---

    size() {
        return this.heap.length;
    }

    isEmpty() {
        return this.size() === 0;
    }

    // View the smallest element without removing it
    peek() {
        return this.isEmpty() ? null : this.heap[0];
    }

    // Add a new element to the queue
    enqueue(value) {
        this.heap.push(value); // Step 1: Add to the end of the array
        this._bubbleUp(this.size() - 1); // Step 2: Fix the heap property
    }

    // Remove and return the smallest element
    dequeue() {
        if (this.isEmpty()) return null;
        if (this.size() === 1) return this.heap.pop();

        const smallest = this.heap[0];

        // Step 1: Move the very last element to the root (index 0)
        this.heap[0] = this.heap.pop();

        // Step 2: Fix the heap property by bubbling down
        this._bubbleDown(0);

        return smallest;
    }

    // --- Internal Helper Methods ---

    _bubbleUp(index) {
        while (index > 0) {
            // Formula to find the parent node's index
            const parentIndex = Math.floor((index - 1) / 2);

            // If the current item is smaller than its parent, swap them
            if (this.compare(this.heap[index], this.heap[parentIndex])) {
                this._swap(index, parentIndex);
                index = parentIndex; // Move up the tree
            } else {
                // If it's not smaller, it's in the right place
                break;
            }
        }
    }

    _bubbleDown(index) {
        const length = this.size();

        while (true) {
            // Formulas to find the children indices
            let leftChildIndex = 2 * index + 1;
            let rightChildIndex = 2 * index + 2;
            let smallestIndex = index;

            // Check if the left child exists and is smaller than the current node
            if (leftChildIndex < length && this.compare(this.heap[leftChildIndex], this.heap[smallestIndex])) {
                smallestIndex = leftChildIndex;
            }

            // Check if the right child exists and is smaller than the smallest so far
            if (rightChildIndex < length && this.compare(this.heap[rightChildIndex], this.heap[smallestIndex])) {
                smallestIndex = rightChildIndex;
            }

            // If the smallest is still the current node, we are done
            if (smallestIndex !== index) {
                this._swap(index, smallestIndex);
                index = smallestIndex; // Move down the tree
            } else {
                break;
            }
        }
    }

    _swap(i, j) {
        [this.heap[i], this.heap[j]] = [this.heap[j], this.heap[i]];
    }
}