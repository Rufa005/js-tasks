function showHello(message = 'hello') {
    alert(message);
}

showHello('Привет, JavaScript!');


function cube(a = 18) {
    document.write(a * a * a);
}

console.log(cube);


function getName(name = 'Василий') {
    alert(name);
}

getName('Привет, Василий');
getName('Привет, гость');


function x(double) {
    let x = [];
    for(let i = 0; i < double.length; i++){
        x.push(double[i] * 2);
    }

    return console.log(x);
}

x([1, 2, 3, 5]);