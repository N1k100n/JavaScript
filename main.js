
console.clear();

// Интересный факт, переменные в js можно писать на разных языках //
var переменная = 2;
var 多变的 = 2;
var عامل = переменная + 多变的;
console.log(عامل); // 4
console.log("\n");


/* 
    2. Напишите функцию sort_min, которая сортирует список случайных чисел, например: [-3, 7, 0, 3, 9]
    и возвращает список, отсортированный по убыванию 
 */
function sort_min(arr) {

    // Можно в принципе и так написать
    // arr.sort((a, b) => b - a);

    // Или так
    // arr.sort();
    // arr.reverse();

    // Сортировка пузырьком
    for (let i = 0; i < arr.length; i++) {
        for (let j = 0; j < arr.length; j++) {
            if (arr[i] > arr[j]) {
                let elem = arr[i];
                arr[i] = arr[j];
                arr[j] = elem;
            }
        }
    }

    return arr;
}
var arr = [-14, 71, 0, 13, 49, 1, -51, 64, 9];
console.log(sort_min(arr));
console.log("\n");


/*
    3. Создайте класс Box с автоматически присваивающимся атрибутом postcode (номер
    отправления). postcode можете ввести любым способом. Переопределите у него метод __repr__,
    чтобы он выводил экземпляр класса в виде id#123.
*/
class Box {
    static count = 0;
    postcode = 0;

    constructor() {
        ++Box.count;
        this.postcode = Box.count;
    }
    __repr__() {
        return "id#" + this.postcode;
    }
}
// Создаем экземпляры класса
let a = new Box();
let b = new Box();
let c = new Box();

// Выведем экземпляр и его "Штрих-код"
console.log(a);
console.log(a.__repr__());

console.log(b);
console.log(b.__repr__());

console.log(c);
console.log(c.__repr__());


// Ещё интересная фича, выводимому тексту в консоль можно менять размер, цвет, шрифт и т.д. В nodeJS это не работает(
// Эту команду в инете нашёл:
console.log('%c JavaScript!!', 'font-weight: bold; font-size: 50px;color: red; text-shadow: 3px 3px 0 rgb(217,31,38) , 6px 6px 0 rgb(226,91,14) , 9px 9px 0 rgb(245,221,8) , 12px 12px 0 rgb(5,148,68) , 15px 15px 0 rgb(2,135,206) , 18px 18px 0 rgb(4,77,145) , 21px 21px 0 rgb(42,21,113)');
