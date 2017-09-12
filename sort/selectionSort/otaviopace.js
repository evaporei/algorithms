function selection_sort (array) {
    const sortedArray = Object.assign([], array)

    for (let i = 0; i < sortedArray.length; i++) {
        for (let j = 0; j < sortedArray.length - i; j++) {
            if (sortedArray[j] > sortedArray[j + 1]) {
                const tempVariable = sortedArray[j]
                sortedArray[j] = sortedArray[j + 1]
                sortedArray[j + 1] = tempVariable
            }
        }
    }

    return sortedArray
}

const array = [3, 2, 9, 7, 24, 11]

const sortedArray = selection_sort(array)

console.log('array', array)
console.log('sortedArray', sortedArray)