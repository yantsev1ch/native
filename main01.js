//CRUD

//Массивы и объекты
const student = { //#1
    name: "Bob",
    age: 30,
    friends: ["Alex", "Donald"], // #a12
    fn: () => "hey!"
}

const studentPlus = student //#1
studentPlus.name = "John"
console.log(student)

/*const keys = Object.keys(student)
console.log(keys)

const copyStudent = {} //создание нового объекта #2
for (let i = 0; i < keys.length; i++){
    copyStudent[keys[i]] = student[keys[i]]
}*/

const copyStudent = {...student} // #3 (...-спрэд оператор)
console.log(copyStudent)

const num = [1, 2, 3]
const copyNum = [...num]

student.friends.push("Nick")
console.log(student)
console.log(copyStudent)

const deepCopyStudent = {
    ...student,
    friends: [...student.friends], //#a25
    fn: () => "hey!"
}

deepCopyStudent.friends.push("Ann")
console.log(deepCopyStudent)
console.log(student)


// map
const students = [
    {
        name: "Bob",
        age: 22,
        isMarried: true,
        scores: 120
    },
    {
        name: "Alex",
        age: 21,
        isMarried: true,
        scores: 85
    },
    {
        name: "Nick",
        age: 20,
        isMarried: false,
        scores: 89
    },
    {
        name: "John",
        age: 19,
        isMarried: false,
        scores: 100
    }
]

// const getStudentName = (st) => st.name
function getStudentName(st, i) {
    return `Student ${i}: ${st.name}, ${st.age} years old.`
}
const names = students.map(getStudentName) //getStudentName - callback функция
console.log(names)
