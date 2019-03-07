class MyCircularQueue {

    constructor(k) {
        this.size = k;
        this.head = -1;
        this.tail = -1;
        this.data = [];
    }

    enQueue = (i) => {
        if (this.isFull())
            return false;
        if (this.isEmpty())
            this.head = 0;
        this.tail = (this.tail + 1) % this.size;
        this.data[this.tail] = i;
        return true;
    }

    deQueue = () => {
        if (this.isEmpty())
            return false;
        if (this.head === this.tail) {
            this.head = -1;
            this.tail = -1;
            return true;
        }
        this.head = (this.head + 1) % this.size;
        return true;
    }

    Front = () => {
        if (this.isEmpty()) {
            return -1;
        }
        return this.data[this.head];
    }

    Rear = () => {
        if (this.isEmpty()) {
            return -1;
        }
        return this.data[this.tail];
    }

    isEmpty = () => {
        return this.head === -1;
    }

    isFull = () => {
        return ((this.tail + 1) % this.size) == this.head
    }
}

export default MyCircularQueue;
