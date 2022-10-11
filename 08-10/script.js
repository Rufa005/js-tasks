let a = prompt('Столица Кыргызстана?');
if(a === 'Бишкек'){
    alert('Верно!');
} else{
    alert('Не знаете?');
}

let x= prompt('Кто пришел?');
if (x === null){
    alert('Вход отменен');
} else{
    alert('Я вас не знаю');
}
let y = prompt('Пароль?');
if(y === 'Чёрный Властелин'){
    alert('Добро пожаловать');
} else if(y === null){
    alert('Вход отменен');
} else{
    alert('Пароль неверный');
}