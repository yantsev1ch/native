// bubble sort

const array = [33, 0, 45, 778, 10, 3, 94,]

for (let j = 0; j < array.length -1; j++) {
    for (let i = 0; i < array.length - 1 - j; i++) {
        if (array[i] > array[i + 1]) {
            // let temp = array[i + 1]
            // array[i + 1] = array[i]
            // array[i] = temp
            [array[i + 1], array[i]] = [array[i], array[i + 1]]
        }
    }
}

console.log(array)

//Array.sort()

const names = ['Bob', 'Alex', 'Helge', 'Dimon', 'Viktor']


const numbers = [100, 99, 2000, 1, -100, 98]

// const compFn = (a, b) => a < b ? -10 : 100
const compFn = (a, b) => a - b
console.log(numbers.sort(compFn))

const words = (a, b) => a.length - b.length
console.log(names.sort(words))