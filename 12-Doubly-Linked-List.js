class Node {
    constructor(val) {
        this.val = val;
        this.next = null;
        this.prev = null;
    }
}

class DoublyLinkedList {
    constructor() {
        this.length = 0;
        this.head = null;
        this.tail = null;
    }

    push(val) {
        let newNode = new Node(val);
        if(!this.head) {
            this.head = newNode;
            this.tail = newNode;
        } else {
            this.tail.next = newNode;
            newNode.prev = this.tail;
            this.tail = newNode;
        }
        this.length++;
        return this;
    }

    pop() {
        if (this.length === 0) return undefined;
        let remNode = this.tail;
        if (this.length === 1) {
            this.head = null;
            this.tail = null;
        } else {
            this.tail = this.tail.prev;
            this.tail.next = null;
            remNode.prev = null;
        } ;
        this.length--;
        return remNode;
    }

    shift() {
        if(!this.head) return undefined;
        let remNode = this.head
        if (this.length === 1) {
            this.head = null;
            this.tails = null;
        } else {
            this.head = this.head.next;
            this.head.prev = null;
            remNode.prev = null;
        }
        this.length--;
        return remNode;
    }

    unshift(val) {
        if (!this.head) return this.push(val);
        let newNode = new Node(val);
        newNode.next = this.head;
        this.head.prev = newNode;
        this.head = newNode;
        this.length++;
        return this;
    }

    get(index) {
        if (index < 0 || index >= this.length) return null;
        let current;
        if( index <= Math.floor(this.length/2)) {
            let counter = 0;
            current = this.head;
            while (counter !== index) {
                current = current.next;
                counter++; 
            }
            return current;
        } else {
            let counter = this.length - 1;
            current = this.tail;
            while (counter !== index) {
                current = current.prev;
                counter--; 
            }
            return current;
        }
    }

    set(index, val) {
        let reqNode = this.get(index);
        if (reqNode) {
            reqNode.val = val;
            return true;
        }
        return false;
    }

    insert(index, val) {
        if (index > this.length || index < 0) return false;
        if (index === 0) return !!this.unshift(val);
        if (index === this.length) return !!this.pop(val);
        let newNode = new Node(val);
        let prevNode = this.get(index - 1);
        prevNode.next.prev = newNode;
        newNode.next = prevNode.next;
        prevNode.next = newNode;
        newNode.prev = prevNode;
        this.length++;
        return true;
    }

    remove(index) {
        if (index >= this.length || index < 0) return false;
        if (index === 0) return !!this.shift();
        if (index === this.length - 1) return !!this.push();
        let remNode = this.get(index);
        remNode.prev.next = remNode.next;
        remNode.next.prev = remNode.prev;
        remNode.prev = null;
        remNode.next = null;
        this.length--;
        return remNode;
    }
}

let list = new DoublyLinkedList();
list.push('Hello');
list.push('World');
list.push('Aryan');
list.push('Deora ');
list.push('Quick');
list.push('Brown');
list.push('Fox');
list.push('Lazy');
list.push('Dog');
