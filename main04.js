const todoListID_1 = '34hf-86kf'
const todoListID_2 = '34hc-86kd'
const todoListID_3 = '34hh-86kd'

const todoList = [
    {
        id: todoListID_1,
        title: 'What to learn',
        filter: 'all',
    },
    {
        id: todoListID_2,
        title: 'What to buy',
        filter: 'all',
    },
    {
        id: todoListID_2,
        title: 'What to buy',
        filter: 'all',
    }
]

const tasks = {
    [todoListID_1]: [ //'1'
        {name: 'HTML', isDone: true},
        {name: 'CSS', isDone: true},
        {name: 'JS', isDone: false},
    ],
    [todoListID_2]: [ //'2'
        {name: 'Beer', isDone: false},
        {name: 'Fish', isDone: false},
        {name: 'Meat', isDone: false},
    ],
    [todoListID_3]: [],
}

const numbers = [23, 45, 35, 78, 56, 98]

const value = numbers.reduce((acc, el) => {
    acc = acc + el
    return acc
}) / numbers.length
console.log(value)

const max = numbers.reduce((acc, el) => acc > el ? acc : el)
console.log(max)

let students = [
    {
        name: "Bob",
        age: 22,
        isMarried: true,
        scores: 85
    },
    {
        name: "Alex",
        age: 21,
        isMarried: true,
        scores: 89
    },
    {
        name: "Nick",
        age: 20,
        isMarried: false,
        scores: 120
    }, {
        name: "John",
        age: 19,
        isMarried: false,
        scores: 100
    }
];

console.log(
    students.reduce((acc, el) => {
        return acc + el.scores
    }, 0)
)

console.log(students.reduce((acc, el) => {
    if (el.scores >= 100){
        acc.push(el)
    }
    return acc
}, []))

console.log(students.reduce((acc, el) => {
    return {...el}
}, []))

students.map (el => {
    if (el.name === 'Bob'){
        return {...el, isMarried: false}
    }
    return el
})