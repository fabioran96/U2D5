document.addEventListener('DOMContentLoaded', function() {
    let header = document.querySelector('header');
    let yellowBlock = document.getElementById('yellowBlock');
    let yellowBlockHeight = yellowBlock.offsetHeight;

    window.addEventListener('scroll', function() {
        if (window.scrollY > yellowBlockHeight) {
            header.classList.add('scrolled');
        } else {
            header.classList.remove('scrolled');
        }
    });
});
