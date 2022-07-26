//- Створити масив, наповнити його 10 елементами будь-якого типу, вивести кожен елемент в консоль
let arr = [21.5, 'street', 5, true, 'yellow', {name: 'Nataliia', age: 30}, 7, false, typeof ('black'), 'user'];
console.log(arr[0]);
console.log(arr[1]);
console.log(arr[2]);
console.log(arr[3]);
console.log(arr[4]);
console.log(arr[5]);
console.log(arr[6]);
console.log(arr[7]);
console.log(arr[8]);
console.log(arr[9]);

//- Створити 3 об'єкти які описують книги. Поля об'єкту : title ,pageCount, genre.
let book1 = {
    title: 'JS for kids',
    pageCount: 34,
    genre: 'learning'
};
let book2 = {
    title: 'True detective',
    pageCount: 207,
    genre: 'detective'
};
let book3 = {
    title: 'Stranger things',
    pageCount: 301,
    genre: ['horror', 'fantasy']
};
console.log(book1);
console.log(book2);
console.log(book3);

//- Створити 3 об'єкти які описують книги. Поля об'єкту : title ,pageCount, genre, authors. Поле "автори" - масив. Кожен автор має поля name,age
let book01 = {
    title: 'JS for kids',
    pageCount: 34,
    genre: 'learning',
    authors: [
        {name: 'author1', age: 22},
        {name: 'author2', age: 98},
        {name: 'author3', age: 43}
   ]
};
let book02 = {
    title: 'True detective',
    pageCount: 207,
    genre: 'detective',
    authors: [
        {name: 'author4', age: 48},
        {name: 'author5', age: 22},
        {name: 'author6', age: 31}
    ]
};
let book03 = {
    title: 'Stranger things',
    pageCount: 301,
    genre: ['horror', 'fantasy'],
    authors: [
        {name: 'author7', age: 76}
    ]
};
console.log(book01);
console.log(book02);
console.log(book03);

//- Створити масив з 10 об'єктами які описують сутніть "користувач". Поля: name, username,password. Вивести в консоль пароль кожного користувача

let users = [
    {name: 'user1', username: 'user1@gmail.com', password: '!User1'},
    {name: 'user2', username: 'user2@gmail.com', password: '!User2'},
    {name: 'user3', username: 'user3@gmail.com', password: '!User3'},
    {name: 'user4', username: 'user4@gmail.com', password: '!User4'},
    {name: 'user5', username: 'user5@gmail.com', password: '!User5'},
    {name: 'user6', username: 'user6@gmail.com', password: '!User6'},
    {name: 'user7', username: 'user7@gmail.com', password: '!User7'},
    {name: 'user8', username: 'user8@gmail.com', password: '!User8'},
    {name: 'user9', username: 'user9@gmail.com', password: '!User9'},
    {name: 'user10', username: 'user10@gmail.com', password: '!User10'}
];

console.log(users[0].password);
console.log(users[1].password);
console.log(users[2].password);
console.log(users[3].password);
console.log(users[4].password);
console.log(users[5]['password']);
console.log(users[6]['password']);
console.log(users[7]['password']);
console.log(users[8]['password']);
console.log(users[9]['password']);