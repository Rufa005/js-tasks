const myYears = () => {
    let yourDate = parseFloat(prompt('Ваш год рождения?'));
    let thisYear = parseFloat(prompt('Введите нынешний (текущий) год!'));
    alert(`Вам ${thisYear - yourDate} лет`)
}

myYears();