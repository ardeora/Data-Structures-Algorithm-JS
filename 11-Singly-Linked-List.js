class Node {
    constructor(val) {
        this.val = val;
        this.next = null;
    }
}

class SinglyLinkedList {
    constructor() {
        this.head = null;
        this.tail = null;
        this.length = 0;
    }

    push(val) {
        let node = new Node(val);
        if (!this.head) {
            this.head = node;
            this.tail = node;
        } else {
            this.tail.next = node;
            this.tail = node;
        }
        this.length++;
        return this;
    }

    pop() {
        if (!this.head) {
            return undefined;
        }
        let current = this.head;
        let newTail = current;

        while(current.next) {
            newTail = current;
            current = current.next;
        }
        this.tail = newTail;
        this.tail.next = null;
        this.length--;
        if(this.length === 0) {
            this.head = null;
            this.tail = null
        }
        return current;
    }

    shift() {
        if (!this.head) return undefined;
        let val = this.head;
        this.head = this.head.next;
        this.length--;
        if(this.length === 0) this.tail = null;
        return val;
    }

    unshift(val) {
        let newNode = new Node(val);
        if (!this.head) {
            this.head = newNode;
            this.tail = newNode;
        } else {
            newNode.next = this.head;
            this.head = newNode;
        }
        this.length++;   
    }

    get(index) {
        if (index < 0 || index >= this.length) return null;
        let counter = 0;
        let val = this.head;
        while (counter != index) {
            val = val.next;
            counter++;
        }
        return val;
    }

    set(val, index) {
        let reqNode = this.get(index);
        if (!nextNode) return false;
        reqNode.val = val;
        return true;
    }

    insert(val, index) {
        if (index < 0 || index > this.length) return false;
        if (index === this.length) {
            this.push(val);
            return true;
        } 
        if (index === 0) {
            this.unshift(val);
            return true;
        } 
        let preNode = this.get(index - 1);
        let newNode = new Node(val);
        newNode.next = preNode.next;
        preNode.next = preNode;
        this.length++;
        return true;
    }

    remove(index) {
        if (index < 0 || index >= this.length) return undefined;
        if (index === this.length - 1) return this.pop();
        if (index === 0) return this.shift();

        let preNode = this.get(index - 1);
        let remNode = preNode.next;
        preNode.next = preNode.next.next;
        this.length--;
        return remNode;
    }

    reverse() {
        let node = this.head;
        this.head = this.tail;
        this.tail = node;
        let next;
        let prev = null;

        for (let i = 0; i < this.length; i++) {
            next = node.next;
            node.next = prev;
            prev = node; 
            node = next;
        }
        return this;
    }
}

let list = new SinglyLinkedList();
list.push('Hello');
list.push('World');
list.push('Aryan');
list.push('Deora');
