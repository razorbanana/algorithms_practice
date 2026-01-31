import quickSort from "./QuickSort.ts";

const targetArray = [5, 12, 5, 90, 3, 22, 64, 18, 3, 47]

const compareFunction1: (x1: number, x2: number) => boolean = (x1,x2) => {
    if (x1 > x2) {
        return true
    }
    return false
}

const compareFunction2: (x1: number, x2: number) => boolean = (x1,x2) => {
    if (x1 < x2) {
        return true
    }
    return false
}

console.log("compare 1")
console.log(quickSort(targetArray, compareFunction1))
console.log("compare 2")
console.log(quickSort(targetArray, compareFunction2))