const findSmallestIndex: <T>(targetArray: T[], compareFunction: (x1: T, x2: T) => boolean) => number = (targetArray, compareFunction) => {
    let prioritizedItemIndex = 0
    for (let i = 0; i < targetArray.length; i++){
        if (targetArray[i] === undefined){
            return -1
        }
        if (compareFunction(targetArray[i]!, targetArray[prioritizedItemIndex]!)){
            prioritizedItemIndex = i
        }
    }
    return prioritizedItemIndex
}

const SelectionSort: <T>(targetArray: T[], compareFunction: (x1: T, x2: T) => boolean) => T[] = (targetArray, compareFunction) => {
    const newArray = []
    const copiedTargetArray = [...targetArray]
    let prioritizedItemIndex = 0
    for (let i = 0; i < targetArray.length; i++){
        prioritizedItemIndex = findSmallestIndex(copiedTargetArray, compareFunction)
        if (prioritizedItemIndex === -1) {
            throw new Error("smallest index is not found, some error has happended")
        }
        newArray.push(copiedTargetArray[prioritizedItemIndex]!)
        copiedTargetArray.splice(prioritizedItemIndex,1)
    }

    return newArray
}

export default SelectionSort