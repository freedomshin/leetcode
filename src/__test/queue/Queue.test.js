import Queue from '../../queue/Queue'


test('data', () => {
    let queue = new Queue();
    queue.enQueue(1);
    queue.enQueue(2);
    queue.enQueue(3);
    queue.enQueue(4);
    expect(queue.data).toEqual([1, 2, 3, 4]);
})

test('p_start', () => {
    let queue = new Queue();
    queue.enQueue(1);
    queue.enQueue(2);
    queue.deQueue();
    expect(queue.p_start).toBe(1);
})

test('deQueue true', () => {
    let queue = new Queue();
    queue.enQueue(1);
    queue.enQueue(2);
    let result = queue.deQueue();
    expect(result).toBe(true);
})

test('deQueue false', () => {
    let queue = new Queue();
    queue.enQueue(1);
    queue.enQueue(2);
    queue.deQueue();
    queue.deQueue();
    let result = queue.deQueue();
    expect(result).toBe(false);
})

test('front', () => {
    let queue = new Queue();
    queue.enQueue(1);
    queue.enQueue(2);
    queue.deQueue();
    expect(queue.front()).toBe(2);
})

test('front undefined', () => {
    let queue = new Queue();
    queue.enQueue(1);
    queue.enQueue(2);
    queue.deQueue();
    queue.deQueue();
    expect(queue.front()).toEqual(undefined);
})

test('isEmpty true', () => {
    let queue = new Queue();
    queue.enQueue(1);
    queue.enQueue(2);
    queue.deQueue();
    queue.deQueue();
    expect(queue.isEmpty()).toBe(true);
})

test('isEmpty false', () => {
    let queue = new Queue();
    queue.enQueue(1);
    queue.enQueue(2);
    queue.deQueue();
    expect(queue.isEmpty()).toBe(false);
})
