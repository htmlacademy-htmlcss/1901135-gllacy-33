/* Написать функцию, которая принимает два числа и возращает результат их умножения */

let mul = (x, y) => {
    return x * y;
}

console.log(mul(5, 3));

/* Написать функцию, которой передаем, имя, фамилия и возраст, и получаем строку "Привет Иван Петров с возрастом 17 лет" (только здесь данные, которые были переданы в функцию) */

let offer = (name, sname, age) => {
    let agWord = age - (Math.floor(age / 10)) * 10;
    if ((agWord >= 5 || agWord < 1) || (age >= 11 && age <= 14)) {
        return 'Привет ' + name + ' ' + sname + ' с возрастом ' + age + ' лет.';
    } else if (agWord === 1) {
        return 'Привет ' + name + ' ' + sname + ' с возрастом ' + age + ' год.';
    } else {
        return 'Привет ' + name + ' ' + sname + ' с возрастом ' + age + ' года.';
    }
}

console.log(offer('Николай', 'Сысоев', 32));

/* Написать функцию, которая принимает пол человека ('M','F') в виде строки, результат функции возвращает строку "Ваш пол мужской" (или женский) или же "Ваш пол не опеределен" */

let gend = (e) => {
    if (e.toLowerCase() === 'm') {
        return 'Ваш пол мужской';
    } else if (e.toLowerCase() === 'f') {
        return 'Ваш пол женский';
    } else {
        return 'Ваш пол не опеределен';
    }
}

console.log(gend('M'));

/* Сделайте функцию, которая принимает параметром число от 1 до 7, а возвращает день недели на русском языке. */

let week = ['Понедельник', 'Вторник', 'Среда', 'Четверг', 'Пятница', 'Суббота', 'Воскресенье'];

let wDay = (d) => {
    return week[d - 1];
}

console.log(wDay(4));

/* Написать функцию, которая принимает строку (в этом тексте 3-5 предложений), верните каждое первое слово в каждом предложении, через запятую. */

let fWord = (text) => {

    let firstWordsArr = [];
    let firstWords = '';
    let offerArr = text.split('. ');

    for (let i = 0; i < offerArr.length; i++) {

        let wordArr = offerArr[i].split(' ');
        firstWordsArr.push(wordArr[0]);
        let buk = firstWordsArr[i].split('');

        if (buk[buk.length - 1] === ',') {
            firstWords = firstWords + firstWordsArr[i] + ' ';
        } else {
            firstWords = firstWords + firstWordsArr[i] + ', ';
        }

    }
    return firstWords;
}


console.log(fWord('привет мир. что за задание. интересно как это сделать. ничего не понятно'));

/* Написать функцию, которой передаем имя, и она возраващает приветствие в зависимости от времени суток (Доброе утро\день\вечер\ночи Иван) */

var time = new Date().getHours();

let hello = (name) => {

    if (time >= 4 && time < 9) {
        return 'Доброе утро ' + name;
    } else if (time >= 9 && time < 18) {
        return 'Добрый день ' + name;
    } else if (time >= 18 && time < 23.9) {
        return 'Добрый вечер ' + name;
    } else {
        return 'Доброй ночи ' + name;
    }
}

console.log(hello('Николай'));

/* Вывести числа от 1 до 100 в столбец. К каждой цифре подписать состояние возраста (1-17 ребенок, 18-30 - молодой, 30-55 - зрелый, от 55 - старый). Например. 33 - зрелый */

let age = () => {
    for (let i = 1; i <= 100; i++) {
        if (i <= 17) {
            console.log(i + ' ребенок');
        } else if (i > 17 && i <= 30) {
            console.log(i + ' молодой');
        } else if (i > 30 && i <= 55) {
            console.log(i + ' зрелый');
        } else {
            console.log(i + ' старый');
        }
    }
}

//console.log(age());

/* Создай новую функцию, в которую передаешь имя и возраст человека и получаешь сообщение (Иван имеет возраст 44 и он зрелый). А также вызови внутри своей функции, функцию из прошлого задания */

let ageTable = (name, age) => {
    let period = '';
    if (age <= 17) {
        period = ' ребенок';
    } else if (age > 17 && age <= 30) {
        period = ' молодой';
    } else if (age > 30 && age <= 55) {
        period = ' зрелый';
    } else {
        period = ' старый';
    }
    return name + ' имеет возраст ' + age + ' и он'+ period;
}

console.log(ageTable('Николай', 32));

/* Сделай функцию, которая принимает массив любых целых чисел, которая возращает истинну, если все элементы четные, если бы хотя бы один элемент не четный, то false. */

let numbers = (arr) => {
    let notEven = [];
    for (let i = 0; i < arr.length; i++) {
        if (arr[i]%2 !== 0) {
            notEven.push(arr[i]);
        }
    }
    if (notEven.length===0) {
        console.log('true');
    } else {
        console.log('false');
    } 
}

let mass = [2,8,6,8,14,12,15];

numbers(mass)

/* Сделай функцию, которая принимает массив любых целых чисел, которая возращает истинну, если хотя бы один элемент нечетный, если все четные, то false. */ 

let numbersOdd = (arr) => {
    let notEven = [];
    for (let i = 0; i < arr.length; i++) {
        if (arr[i]%2 !== 0) {
            notEven.push(arr[i]);
        }
    }
    if (notEven.length===0) {
        return 'false';
    } else {
        return 'true';
    } 
}

console.log(numbersOdd(mass));

/* Сделай функцию, которая принимает массив любых целых чисел, которая возращает новый массив, где все элементы кратны пяти. ([1,2,5,12,15,21] вернет [5,15]) */

let devisible = (arr, num) => {
    let dNumber = [];
    
    for (let i = 0; i < arr.length; i++) {
       if (arr[i]%num === 0) {
            dNumber.push(arr[i]);
        }
    }
    return dNumber
}

console.log(devisible([1,2,5,12,15,21] ,5));

/* Написать функцию, которая принимает массив чисел, например [1,2,3,4,5] и функция возращает среднее арифметическое, (округлить результат до десятых) */

let arithmetic = (arr) => {
    let sum = 0;
    for (let i = 0; i < arr.length; i++) {
        sum += arr[i];
    }
    let arithmeticMean =  parseFloat((sum/arr.length).toFixed(1));

    return arithmeticMean;
}

console.log(arithmetic([1,2,3,4,5] )); 

/* Написать функцию, которая принимает массив чисел, например [1,2,3,4,5], и переносит первый элемент массива в конец (например можно засунуть первый элемент в конец, затем удалить первый элемент), попробуй несколькими способами сделать, если догадаешься */

let replace = (arr) => {
    arr.push(arr[0]);
    arr.splice(0,1);
    return arr;
}

console.log(replace([1,2,3,4,5]));