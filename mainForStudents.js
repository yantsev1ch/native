const students = [
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
        scores: 90,
    },
    {
        name: "Nick",
        age: 20,
        isMarried: false,
        scores: 120
    },
    {
        name: "John",
        age: 19,
        isMarried: false,
        scores: 100
    },
    {
        name: "Helen",
        age: 20,
        isMarried: false,
        scores: 110
    },
    {
        name: "Ann",
        age: 20,
        isMarried: false,
        scores: 105
    },
];

const user = {
    name: "Bob",
    age: 23,
    friends: ["Alex", "Nick", "John"]
}

//1. Создайте поверхностную копию объекта user
let copyUser = {...user}

//Проверка:
console.log(user === copyUser) //false
console.log(user.friends===copyUser.friends) //true

//2. Полная (глубокая) копия объекта user
let deepCopyUser = {
    ...user,
    friends: [...user.friends]
}

//Проверка:
console.log(user === deepCopyUser) //false
console.log(user.friends === deepCopyUser.friends) //false

//3. Поверхностная копия массива students
let copyStudents = [...students]

//Проверка:
console.log(students === copyStudents) //false
console.log(students[0] === copyStudents[0]) //true

//4*. Полная (глубокая) копия массива students (map)
let deepCopyStudents = students.map(s => ({...s}))

//Проверка:
console.log(students === copyStudents) //false
console.log(students[0] === copyStudents[0]) //false

// NB!!! Далее все преобразования выполняем не модифицируя исходный массив students
// Вывод результатов - в консоль

//5. Отсортируйте deepCopyStudents по алфавиту (sort)

let sortByName = [...deepCopyStudents].sort((a, b) => a.name < b.name ? -1 : 1)
console.log(sortByName);

//5a. Отсортируйте deepCopyStudents по успеваемости(лучший идёт первым)(sort)
let sortByScores = deepCopyStudents.sort((a, b) => a.scores > b.scores ? -1 : 1)
console.log(sortByScores);

//6. Сформируйте массив студентов, у которых 100 и более баллов (filter)
let  bestStudents = deepCopyStudents.filter(s => s.scores >= 100)
console.log(bestStudents)

//6a. Получите массив ("вырежьте") из трёх лучших студентов из массива deepCopyStudents (splice)
//https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Global_Objects/Array/splice

let topStudents = deepCopyStudents.splice(0, 3)
console.log(topStudents)
console.log(deepCopyStudents)

//6b. Объедините массивы deepCopyStudents и topStudents так,
// чтоб сохранился порядок сортировки (spread-оператор)
let newDeepCopyStudents = [...deepCopyStudents, ...topStudents]
console.log(newDeepCopyStudents)

//7. Сформируйте массив холостых студентов (filter)
let notMarriedStudents = deepCopyStudents.filter(s => s.isMarried === false)
console.log(notMarriedStudents)

//8. Сформируйте массив имён студентов (map)
let studentsNames = deepCopyStudents.map(s => s.name)
console.log(studentsNames)

//8a. Сформируйте строку из имён студентов, разделённых
// - пробелом (join)
// - запятой (join)
let nameWithSpace = studentsNames.join(' ')
console.log(nameWithSpace)
let namesWithComma = studentsNames.join(', ')
console.log(namesWithComma)

//9. Добавьте всем студентам свойство "isStudent" со значением true (map)
let trueStudents = deepCopyStudents.map(s => ({...s, isStudent: true}))
console.log(trueStudents)

//10. Nick женился. Выполните выполните соответствующие преобразование массива students (map)
let studentsWithMarriedNick = deepCopyStudents.map(s => s.name === 'Nick' ? ({...s, isMarried: true}) : s)
console.log(studentsWithMarriedNick)

//11. Найдите студента по имени Ann (find)
let ann = deepCopyStudents.find(s => s.name === 'Ann')
console.log(ann)

//12. Найдите студента с самым высоким баллом (reduce)
let bestStudent = deepCopyStudents.reduce((acc, i) => acc.scores > i.scores ? acc : i)
console.log(bestStudent)

//13. Найдите сумму баллов всех студентов (reduce)
let scoresSum = deepCopyStudents.reduce((acc, i) => acc += i.scores, 0)
console.log(scoresSum)

// 14.Напишите функцию addFriends, которая принимает параметром массив students
// и добавляет в каждому студенту свойство "friends",
// значением которого является массив имён всех остальных студентов из массива students,
// за исключением собственного имени студента. Т.е. в друзьях у Боба Боба быть не должно.
const addFriends = (students) => {
    students.map(student => ({ ...student, friends: studentsNames.filter(nameFriends => student.name !== nameFriends)}));
}
console.log(addFriends(students));











