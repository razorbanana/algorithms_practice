

const measureTime = (targetFunction: () => void, label: string, times:number) => {
    const start = Date.now()
    for (let i = 0; i < times; i++){
        targetFunction()
    }
    const ms = Date.now() - start
    console.log(`Time for ${label} is ${ms/1000}`)
}

export default measureTime