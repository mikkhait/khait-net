document.addEventListener('DOMContentLoaded', () => {
    var el = document.getElementById('slow');
    unfade(el);
})

function unfade(el) {
    let op = 0.01; // initial opacity
    el.style.display = 'none';

    let timer = setInterval(() => {
        el.style.display = 'inline';
        if (op >= 1) {
            clearInterval(timer);
        }
        el.style.opacity = op;
        el.style.filter = 'alpha(opacity=' + op * 100 + ')';
        op += op * 0.1;
    }, 50);
}