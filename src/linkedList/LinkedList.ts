type Node<T> = {
    getValue: () => T,
    updateNext: (newPointer: Node<T> | null) => void,
    getNext: () => Node<T> | null
}

const Node = <T>(value: T) => {

    let next: Node<T> | null = null 

    const getValue = () => {
        return value
    }

    const updateNext = (newNext: Node<T> | null) => {
        next = newNext
    }   

    const getNext = () => {
        return next
    }

    return {
        getValue,
        updateNext,
        getNext
    }
}

const LinkedList = <T>(initArray: T[] = []) => {
    let head: Node<T> | null = null
    let tail: Node<T> | null = null

    const push = (value: T) => {
        let node = Node(value)
        if (head === null){
            head = node
            tail = head
        }else{
            tail?.updateNext(node)
            tail = node
        }
    }

    initArray.forEach(item => push(item))

    const removeHead = () => {
        if (head !== null){
            const value = head.getValue()
            head = head.getNext()
            return value
        }
        return null
    }

    const print = (node: Node<T> | null = head) => {
        if (node !== null){
            console.log(`value: ${node.getValue()}`)
            print(node.getNext())
        }else{
            console.log("")
        }
    }

    return {
        push,
        removeHead,
        print
    }
}

export default LinkedList