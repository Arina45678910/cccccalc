// Получить коллекцию кнопок 
// получить поле ввода

// Создать переменную для записи выражения
/*let exp = '';

// Перебрать коллекцию кнопок
for (let key of keys) {
    // Обработка событий каждой кнопки
    // В переменную exp передаем текстовое содержимое каждой кнопки
    exp = exp + key.textContent;
    // содержимое переменной exp выводим в input
}

//ОБРАБОТКА КНОПОК

// Объявить переменную (например exp), в которую будем передавать выражение из инпута, и присвоить ей значение ""

// Перебрать через цикл for of все кнопки, навешивая на каждую из них обработчик клика:
// В функции обработчике к значению в переменной exp прибавить текстовое содержимое кнопки на которую кликнули
// В поле инпут передать переменную exp

Перебор кнопок в цикле {
    кнопка.Обработчик клика(
        записать в переменную exp текстовое содержимое кнопки
        передаем в инпут значение переменной exp
    )
}

// ОБРАБОТКА ЗНАКА =
// Навесить обработчик события кликов на кнопку "="
// В функции обработчик используя функцию eval выполнить строку кода которая содержится в переменной exp
// Вывести результат в инпут
// В переменную exp записать значение ""

// Аналогичо выполнить обработку кнопки "C"
*/
let input = document.querySelector('#display');
let key = document.querySelector('.key')
let keyboard = document.querySelectorAll('.key')
let calc = document.querySelector('#calc');
let result = document.querySelector('#result');
let reset = document.querySelector('#reset');

let exp = '';

for (let key of keyboard) {
    key.addEventListener('click', function () {
        exp = exp + key.textContent;
        input.value = exp;
        console.log(input);
    })
}
result.addEventListener('click', (evt) => {
    exp = eval(display.value);
    display.value = exp;
    exp = ''
})


reset.addEventListener('click', (evt) => {
    evt.preventDefault();
    exp = '';
    display.value = '0'
})