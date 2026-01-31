import Queue from "./Queue.ts";

const basicArray = [1,2]
const queue = Queue(basicArray, 3)

console.log(queue.get())
queue.enqueue(3)
console.log(queue.get())
queue.dequeue()
console.log(queue.get())
queue.enqueue(4)
queue.enqueue(5)
queue.enqueue(6)
queue.dequeue()
queue.dequeue()
queue.dequeue()
console.log(queue.arr)
console.log(queue.get())