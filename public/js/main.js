document.addEventListener('DOMContentLoaded', function (event) {
    var el = document.getElementById('slow');
    unfade(el);
})

function unfade(el) {
    var op = 0.01; // initial opacity
    el.style.display = 'inline';
    var timer = setInterval(function () {
        if (op >= 1) {
            clearInterval(timer);
        }
        el.style.opacity = op;
        el.style.filter = 'alpha(opacity=' + op * 100 + ')';
        op += op * 0.1;

    }, 350);
}