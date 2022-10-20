/******** К/Р ********/
const hello = () => {
    let message = 'Привет, JavaScript!';
    return message;
}

let text = hello();
alert(text);


const cubeOfNumber = (num) => console.log(num * num * num);

cubeOfNumber(5);


const getName = (userName = 'гость') => {
    let str = `Привет ${userName}`;
}

let name = 'Василий';
getName(name);


const getDoubleNumbers = arr => {
    let newArray = [];
    for(let i = 0; i < arr.length; i++){
        newArray.push(arr[i] * 2);
    }

    return newArray;
}

let result = getDoubleNumbers([1, 2, 3]);
console.log(result);


/******** Д/З ********/
const myFunc = (arraySize, value) => {
    let number = [];
    for(let i = 0; i < arraySize; i++){
        number.push(arraySize[i] = value);
    }

    return number;
}

let result = myFunc('a', 3);
console.log(result);

const reverse = (array) => {
    let d = [];
    for(let i = array.length - 1; i >= 0; i--){
        d.push(x[i]);
    }

    return d;
}

let result2 = data([1, 2, 3]);
console.log(result2);