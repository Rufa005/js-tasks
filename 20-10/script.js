const prices = [-5,  10,  5, 55,  -1, 22,  -4 , 36, -45];
const elems = prices.filter(function (item) {
    return item < 0;
})

console.log(elems);


const numberFormat = (a, b) => {
    let number = a > b ? 1 : -1;
    return a === b ? 0 : number;
}

let result = numberFormat(15,15);
console.log(result);