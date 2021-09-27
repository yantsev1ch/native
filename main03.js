// "Событие' -> event
// Ищет обработчик -> функция (обработчик, слушатель, коллбэк, подписчик)
// Генерирует объект, со сведениями о произошедшем событии -> event, ev, e
// Вызывает обработчик с объектом в качестве параметра

const sml = document.getElementById("small")
const mdm = document.getElementById("medium")
const big = document.getElementById("big")

const onClickHandler = (e) => {
    e.stopPropagation()
    if (e.target.tagName === 'BUTTON'){
        console.log(e.target.name)
    }
}

sml.onclick = onClickHandler
mdm.onclick = (e) => {
    e.stopPropagation()
    alert('mdm')
}
big.onclick = (e) => alert('big')

/*
sml.addEventListener('click', onClickHandler)
sml.removeEventListener('click', onClickHandler)*/

// e.target -> элемент, который сгенерировал событие (первый получил клик)
// e.currentTarget -> элемент, который вызвал обработчик в процессе всплытия

const a = document.getElementById('anchor')
a.addEventListener('click', (e) => {
    e.preventDefault() // отменить стандартное поведение элемента
    alert(e.target.id)
})