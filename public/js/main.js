document.addEventListener('DOMContentLoaded', () => {
    var el = document.getElementById('slow');
    unfade(el);
})

function unfade(el) {
    let op = 0;
    el.style.display = 'none';
    el.style.opacity = op;
    el.style.filter = `alpha(opacity=${op * 100})`;

    const intervalDuration = 50;
    el.style.display = 'inline';
    let timer = setInterval(() => {
        if (op >= 1) {
            clearInterval(timer);
        }
        op += op * 0.1;
        el.style.opacity = op;
        el.style.filter = `alpha(opacity=${op * 100})`;
    }, intervalDuration);
}