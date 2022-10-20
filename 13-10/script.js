let numbers = [1, 2, 5, 6, 88, 5];
let result = 0;
for(let i = 0; i < numbers.length; i++){
    result += numbers[i];
}
console.log(result);

let num = [1, 3, 5, 7, 9, 11, 13, 8, 6, 4];
let result1 = 0;
for(let i = 0; i < num.length; i++){
    result1 += num[i] * 2;
}
console.log(result1);

let a = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20];
let new_a = [];
for(let i = 0; i < a.length; i++){
    if(!(a[i] % 2)){
        new_a.push(a[i]);
    }
}
console.log(new_a);