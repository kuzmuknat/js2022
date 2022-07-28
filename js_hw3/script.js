//- Є змінна х, якій ви надаєте довільне числове значення.
//    Якщо змінна x не дорівнює нулю, виведіть 'Вірно', інакше виведіть 'Невірно'. Перевірте  скрипт при a, що дорівнює 1, 0, -3
let x = +prompt('Введіть число');

if(x === 0){
    document.write('<div><h1>Невірно</h1></div>');
}
else{
    document.write('<div><h1>Вірно</h1></div>');
}

//- Дано змінну time яка рівна числу від 0 до 59. Потрібно написати код, який перевірить, до якої четверті години попадає число
//(в першу, другу, третю или четверту частину години).
let time = +prompt('Введіть час');

if(time >= 0 && time < 15){
    document.write('<div><h1>Перша чверть</h1></div>');
}
else if(time >= 15 && time < 30){
    document.write('<div><h1>Друга чверть</h1></div>');
}
else if(time >= 30 && time < 45){
    document.write('<div><h1>Третя чверть</h1></div>');
}
else if(time >= 45 && time < 60){
    document.write('<div><h1>Четверта чверть</h1></div>');
}
else{
    document.write('<div><h1>Невірнне число</h1></div>');
}

//- У змінній day дано якесь число від 1 до 31. Потрібно визначити, у яку половину(декаду) місяця потрапляє це число (у першу, другу чи третю).
let day = +prompt('Введіть число місяця');

if(day >= 1 && day < 11){
    document.write('<div><h1>Перша декада</h1></div>');
}
else if(day >= 11 && day < 21){
    document.write('<div><h1>Друга декада</h1></div>');
}
else if(day >= 21 && day < 32){
    document.write('<div><h1>Третя декада</h1></div>');
}
else{
    document.write('<div><h1>Невірнне число</h1></div>');
}

//- Скласти розклад на тиждень за домопоги switch. Користувач вводить порядковий номер дня тижня і на екрані відображається інфа що заплановано на цей день (можна замість плану на день, назву дня англійською).
let dayOfWeek = +prompt('Введіть порядковий номер дня тижня');

switch (dayOfWeek) {
    case 1:
        document.write('<div><h1>Monday</h1></div>');
        break;
    case 2:
        document.write('<div><h1>Tuesday</h1></div>');
        break;
    case 3:
        document.write('<div><h1>Wednesday</h1></div>');
        break;
    case 4:
        document.write('<div><h1>Thursday</h1></div>');
        break;
    case 5:
        document.write('<div><h1>Friday</h1></div>');
        break;
    case 6:
        document.write('<div><h1>Saturday</h1></div>');
        break;
    case 7:
        document.write('<div><h1>Sunday</h1></div>');
        break;
    default:
        document.write('<div><h1>Wrong day number</h1></div>');
}
//   - Користувач вводить або має два числа.
//       Потрібно знайти та вивести максимальне число з тих двох .
//      Також потрібно врахувати коли введені рівні числа.
let num1 = +prompt('Input first number');
let num2 = +prompt('Input second number');

if(num1 === num2) {
    document.write('<div><h1>Numbers are equal</h1></div>');
}
else{
    if(num1 > num2){
        document.write('<div><h1>Max number is:'+num1+'</h1></div>');
    }
    else{
        document.write('<div><h1>Max number is:'+num2+'</h1></div>');
    }
}


//    - є змінна х, яка може прийняти будь-яке значення (стрінг, число, undefined, null  і тд включно). Напишіть код який,
//        за допомоги  оператора || буде присвоювати змінній х значення "default"  якщо значення змінної х являється falsy (хибноподыбне, тобто кастується до false)

x = prompt('Input something') || 'default';
document.write('<div><h1>'+x+'</h1></div>');
