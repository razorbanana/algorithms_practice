import Queue from "./Queue.ts";
import LinkedListQueue from "./LinkedListQueue.ts";
import measureTime from "../util/timer.ts";

const basicArray0 = []
const basicArray = [1,2]
const basicArray2 = [...Array(100).keys()]
const basicArray3 = [...Array(1000).keys()]
const basicArray4 = [...Array(10000).keys()]
const basicArray5 = [...Array(100000).keys()]

const testArrayQueuePrint = (enqueueArray: number[], dequeueTimes: number) => {
    
    console.log("Queue with array:")
    const queue = Queue()

    enqueueArray.forEach(item => {
        queue.enqueue(item)
        console.log(queue.get())
    })
    for (let i = 0; i<dequeueTimes; i++){
        queue.dequeue()
        console.log(queue.get())
    }

}

const testArrayQueue = (enqueueArray: number[], dequeueTimes: number) => {
    
    const queue = Queue()

    enqueueArray.forEach(item => {
        queue.enqueue(item)
    })
    for (let i = 0; i<dequeueTimes; i++){
        queue.dequeue()
    }
}

const testListQueuePrint = (enqueueArray: number[], dequeueTimes: number) => {
    
    console.log("Queue with linked list:")
    const queue = LinkedListQueue()
    queue.print()

    enqueueArray.forEach(item => {
        queue.enqueue(item)
        queue.print()
    })
    for (let i = 0; i<dequeueTimes; i++){
        queue.dequeue()
        queue.print()
    }
}

const testListQueue = (enqueueArray: number[], dequeueTimes: number) => {

    const queue = LinkedListQueue()
    
    enqueueArray.forEach(item => {
        queue.enqueue(item)
    })
    for (let i = 0; i<dequeueTimes; i++){
        queue.dequeue()
    }
}

testArrayQueuePrint(basicArray, 2)
testListQueuePrint(basicArray, 2)

console.log("Testing time:")

measureTime(() => {testArrayQueue(basicArray, basicArray.length)}, "array queue, basic array is 2 items", 1000)
measureTime(() => {testListQueue(basicArray, basicArray.length)}, "list queue, basic array is 2 items", 1000)

measureTime(() => {testArrayQueue(basicArray2, basicArray2.length)}, "array queue, basic array is 100 items", 1000)
measureTime(() => {testListQueue(basicArray2, basicArray2.length)}, "list queue, basic array is 100 items", 1000)

measureTime(() => {testArrayQueue(basicArray3, basicArray3.length)}, "array queue, basic array is 1000 items", 1000)
measureTime(() => {testListQueue(basicArray3, basicArray3.length)}, "list queue, basic array is 1000 items", 1000)

measureTime(() => {testArrayQueue(basicArray4, basicArray4.length)}, "array queue, basic array is 10000 items", 1000)
measureTime(() => {testListQueue(basicArray4, basicArray4.length)}, "list queue, basic array is 10000 items", 1000)

measureTime(() => {testArrayQueue(basicArray5, basicArray5.length)}, "array queue, basic array is 100000 items", 1000)
measureTime(() => {testListQueue(basicArray5, basicArray5.length)}, "list queue, basic array is 100000 items", 1000)