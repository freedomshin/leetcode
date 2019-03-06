class Queue {
    data = [];
    p_start = 0;

    enQueue = (i) => {
        this.data.push(i);
        return true;
    }

    deQueue = () => {
        if (this.isEmpty())
            return false;
        ++this.p_start;
        return true;
    }

    front = () => {
        return this.data[this.p_start];
    }

    isEmpty = () => {
        return this.p_start >= this.data.length
    }
}

export default Queue;
