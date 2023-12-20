document.addEventListener('DOMContentLoaded', function() {
    var titles = document.querySelectorAll('.paper-title');
    var abstracts = document.querySelectorAll('.paper-abstract-short');

    MathJax.Hub.Queue(["Typeset", MathJax.Hub, titles]);
    MathJax.Hub.Queue(["Typeset", MathJax.Hub, abstracts]);
});