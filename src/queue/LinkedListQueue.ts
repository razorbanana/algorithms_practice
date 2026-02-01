import LinkedList from "../linkedList/LinkedList.ts"

const LinkedListQueue = <T>(basicArray:T[]=[]) => {
    const list = LinkedList(basicArray)

    const enqueue: (item: T)=>void = (item) => {
        list.push(item)
    }

    const dequeue: ()=> T | null = () => {
        return list.removeHead()
    }

    const print = () => {
        list.print()
    }

    return {
        enqueue,
        dequeue,
        print
    }
}

export default LinkedListQueue