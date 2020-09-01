(window.document.onload = function() { 
    let hamburger = document.querySelector('.hamburger input[type=checkbox]');
    let hidden_menu = document.querySelector('.hidden-menu');
    hamburger.addEventListener('change', function() {
        if(hamburger.checked) {
            hidden_menu.classList.toggle("active");
        } else {
            hidden_menu.classList.toggle("active");
        }
    });
})();