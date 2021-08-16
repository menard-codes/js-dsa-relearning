
class LinkedNode {
    constructor(data, next=null) {
        this._data = data;
        this._next = next;
    }

    get data() {
        return this._data;
    }

    get next() {
        return this._next;
    }

    set data(newData) {
        this._data = newData;
    }

    set next(newNext) {
        this._next = newNext
    }
}

class LinkedList {
    constructor(node=null) {
        this._head = node;
    }
    
    get head() {
        return this._head;
    }
    
    get size() {
        let curr = this._head;
        let count = 0;
        while (curr !== null) {
            count++;
            curr = curr.next;
        }
        return count;
    }

    set head(newNode) {
        this._head = newNode;
    }

    addNode(data, position) {
        /**
         * Adds node to the current linked list at a specific
         * position.
         * 
         * @param {*} data - Any data to be stored in the array
         * @param {number} position - Position to insert the data
         * @returns {null}
         */
        let curr = this._head;
        for (let i=0; i < position-2; i++) {
            if (curr || curr.next) {
                curr = curr.next;
            }
            break;
        }
        const newNode = new LinkedNode(data);
        if (position > 1) {
            newNode.next = curr.next;
            curr.next = newNode;
        } else {
            newNode.next = curr;
            this.head = newNode;
        }
    }
}

function convertArrayToLinkedList(arr) {
    if (arr.length === 0) return null;

    const linkedList = new LinkedList();
    arr.forEach(elem => {
        const newNode = new LinkedNode(elem);
        newNode.next = linkedList.head;
        linkedList.head = newNode;
    })
    return linkedList;
}

function reverseLinkedList(linkedList) {
    if (linkedList === null || linkedList.head === null) return null;
    else if (linkedList.head.next === null) return linkedList;

    let prev = null;
    let curr = linkedList.head;
    let next = curr.next;
    while (true) {
        curr.next = prev;
        prev = curr;
        curr = next;
        if (curr === null) {
            break;
        }
        next = curr.next;
    }
    linkedList.head = prev
}

const myArray = [1, 2, 4, 5];

const myLinkedList = convertArrayToLinkedList(myArray);
myLinkedList.addNode(3, 3);
myLinkedList.addNode(6, 1);
reverseLinkedList(myLinkedList);
