const binarySearch: <T>(array: T[], target: T, eval_function: (item:T, target:T) => -1 | 0 | 1) => number | null = (array, target, eval_function) => {
    let lowest = 0
    let highest = array.length - 1
    let middle = -1
    let eval_result: -1 | 0 | 1 
    while (lowest <= highest){
        middle = Math.floor((lowest + highest) / 2);
        if (middle !== undefined) {
            eval_result = eval_function(array[middle]!, target);
        }else{
            return null
        }

        if (eval_result === 1){
            highest = middle - 1
        }else if(eval_result === 0){
            return middle
        }else{
            lowest = middle + 1
        }
    }
    return null
}

export default binarySearch