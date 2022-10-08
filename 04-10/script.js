let num = 10;
num ++;
num ++;
num --;
console.log(num);

let num1 = 47;
num1 += 7;
num1 -= 18;
num1 *= 10;
num1 /= 15;
alert(num1);

let num2 = 1;
num2 += 12;
num2 -= 14;
num2 *= 5;
num2 /= 7;
num2 ++;
num2 --;
alert(num2);

const user_name = 'Maks';
const user_age = 38;
const result = user_name === 'Maks' && user_age > 22;
console.log (result); //true

const user_auto = 'KIA';
const user_salary = 500;
const result1 = user_auto === 'KIA' && user_salary < 500;
console.log (result1); //false

const user_cofee = 'Vanilla';
const user_years = 20;
const result2 = user_cofee === 'Boristo' && user_years > 10;
console.log (result2); //false

const user_gta = 'samp';
const user_fps = 60;
const result3 = user_gta === 'vice-city' && user_fps > 60;
console.log (result3); //false

const user_salary1 = 75;
const user_drink = 'fanta';
const result4 = user_salary1 > 75 || user_drink === 'fanta';
console.log (result4); //true

const user_age1 = 16;
const user_name1 = 'Rufat';
const result5 = user_age1 > 15 || user_name1 === 'Imran';
console.log (result5); //true

const user_kitchen = 'eastern';
const user_cafe = 'ZOR';
const result6= user_kitchen !== 'eastern' || user_cafe === 'ZOR';
console.log (result6); //true

const user_course = 'Megacom';
const user_course1 = 'Ogogo';
const result7 = user_course !== 'Megacom' || user_course1 === 'Ogogo';
console.log (result7); //false