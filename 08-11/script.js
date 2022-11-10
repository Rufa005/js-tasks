const btn_danger = document.querySelector('#notification-danger-btn');

const showNotification = (options) => {
    const notification = document.createElement('#modal-notification');
    const htmlContent = notification.innerHTML;
    const h1 = '<h1>Заголовок документа</h1>';
    notification.innerHTML = h1;

    setTimeout(() => {
        notification.classList.remove(options.className);
    }, 1500)
}

/*const showNotification = (options) => {
    const notification = document.querySelector('#notification-danger-btn');
    const div = '<div>Текст</div>';
    notification.outerHTML = div;
    notification.innerHTML = div;

    setTimeout(() => {
        notification.classList.remove(options.className);
    }, 1500)
}*/

/*const showNotification = (options) => {
    const notification = document.querySelector('#notification-danger-btn');
    notification.innerText = '<div>Текст</div>';

    setTimeout(() => {
        notification.classList.remove(options.className);
    }, 1500)
}*/

/*const showNotification = (options) => {
    const notification = document.querySelector('#notification-danger-btn');
    notification.textContent = 'hello programmers';

    setTimeout(() => {
        notification.classList.remove(options.className);
    }, 1500)
}*/

btn_danger.addEventListener('click', showNotification);