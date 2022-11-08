const mainBtn = document.querySelector('#main_btn');

const elem = () => {
    const block = document.querySelector('#block');
    const danger = document.createElement('li');
    danger.classList.add('main_danger');
    danger.innerText = `Пункт`;
    block.append(danger);
}

mainBtn.addEventListener('click', elem);