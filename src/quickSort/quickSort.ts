const quickSort: <T>(targetArray: T[], compareFunction: (x1: T, x2: T) => boolean) => T[] = (targetArray, compareFunction) => {
    if (targetArray.length < 2){
        return targetArray
    }
    let pivot = targetArray.shift()!
    const lesserItems = targetArray.filter(item => compareFunction(pivot, item))
    const largerItems = targetArray.filter(item => !compareFunction(pivot, item))
    return quickSort(lesserItems, compareFunction).concat(pivot).concat(quickSort(largerItems, compareFunction))
}

export default quickSort