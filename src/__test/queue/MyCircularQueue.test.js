import MyCircularQueue from '../../queue/MyCircularQueue'

test("data", () => {
    let size = 3;
    let circularQueue = new MyCircularQueue(size);
    circularQueue.enQueue(1);
    circularQueue.enQueue(2);
    circularQueue.enQueue(3);
    circularQueue.deQueue();
    circularQueue.enQueue(4);
    expect(circularQueue.data).toEqual([4, 2, 3])
})

test("data", () => {
    let size = 3;
    let circularQueue = new MyCircularQueue(size);
    circularQueue.enQueue(1);
    expect(circularQueue.data).toEqual([1])
    circularQueue.deQueue();
    expect(circularQueue.data).toEqual([1])
    circularQueue.enQueue(3);
    expect(circularQueue.data).toEqual([3])
})

test('deQueue true', () => {
    let size = 3;
    let circularQueue = new MyCircularQueue(size);
    circularQueue.enQueue(1);
    circularQueue.enQueue(2);
    let result = circularQueue.deQueue();
    expect(result).toBe(true);
})

test('deQueue false', () => {
    let size = 3;
    let circularQueue = new MyCircularQueue(size);
    circularQueue.enQueue(1);
    circularQueue.enQueue(2);
    circularQueue.deQueue();
    circularQueue.deQueue();
    expect(circularQueue.isEmpty()).toBe(true);
    let result = circularQueue.deQueue();
    expect(result).toBe(false);
})

test('front rear full', () => {
    let size = 3;
    let circularQueue = new MyCircularQueue(size);
    circularQueue.enQueue(1);
    circularQueue.enQueue(2);
    circularQueue.enQueue(3);
    expect(circularQueue.isFull()).toBe(true);
    circularQueue.deQueue();
    circularQueue.enQueue(4);
    expect(circularQueue.isFull()).toBe(true);
    expect(circularQueue.Front()).toBe(2);
    expect(circularQueue.Rear()).toBe(4);
})

test('front rear -1', () => {
    let size = 3;
    let circularQueue = new MyCircularQueue(size);
    circularQueue.enQueue(1);
    circularQueue.enQueue(2);
    circularQueue.enQueue(3);
    circularQueue.deQueue();
    circularQueue.deQueue();
    circularQueue.deQueue();
    expect(circularQueue.isEmpty()).toBe(true);
    expect(circularQueue.Front()).toBe(-1);
    expect(circularQueue.Rear()).toBe(-1);
})
