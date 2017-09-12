function binarySearch (array, target) {
    if (target > array[array.length - 1] || target < array[0])
        return -1

    let min = 0
    let max = array.length - 1

    while (max >= min) {
        let guess = Math.floor((max + min) / 2)

        if (array[guess] === target)
            return target

        if (array[guess] > target)
            max = guess + 1

        if (array[guess] < target)
            min = guess - 1
        
    }

    return -1
}

const array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20]
const target1 = 24
const target2 = 18
console.log(`find ${target1} in array, result: ${binarySearch(array, target1)}`)
console.log(`find ${target2} in array, result: ${binarySearch(array, target2)}`)