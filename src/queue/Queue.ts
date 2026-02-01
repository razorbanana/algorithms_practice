
const Queue = <T>(basicArray:T[]=[], cleanup:number=50) => {
    const arr: T[] = [...basicArray]
    let head = 0

    const enqueue: (item: T)=>void = (item) => {
        arr.push(item)
    }

    const dequeue: ()=> T | undefined = () => {
        if (head >= arr.length) return undefined;
        const value = arr[head++]
        if (cleanup && head >= cleanup){
            arr.splice(0, head)
            head = 0
        }
        return value
    }

    const get: ()=>T[] = () => {
        return arr.slice(head)
    }

    return {
        arr,
        enqueue,
        dequeue,
        get
    }
}

export default Queue