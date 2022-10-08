let x = 7;
if(x === 7){
    alert('Верно');
} else{
    alert('Неверно');
}

let a = 1;
let b = 3;
if(a <= 1){
    alert('Равно 1');
} else if(b >= 3){
    alert('Равно 3');
} else{
    alert('2');
}

let time = 10;
if (time >= 0 && time <= 14) {
    alert('В первую четверть.');
} else if(time >= 15 && time <= 30) {
    alert('Во вторую четверть.');
} else if(time >= 31 && time <= 45) {
    alert('В третью четверть.');
} else if(time >= 46 && time <= 59){
    alert('В четвертую четверть.');
} else{
    alert("Значение не попадает в диапазон от 0 до 59")
}