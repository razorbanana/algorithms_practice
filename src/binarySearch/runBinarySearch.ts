import BinarySearch from "./binarySearch.ts"

const eval_function: (item:number, target:number) => -1 | 0 | 1 = (item, target) => {
    if (item > target){
        return 1
    }else if (item < target){
        return -1
    }else{
        return 0
    }
}

const array = [1,2,5,6,7,8]
const targets = [1,2,8,9]
const results: Array<number|null> = []


targets.forEach(target => {
    results.push(BinarySearch<number>(array, target, eval_function))
})

results.map(result => console.log(result))