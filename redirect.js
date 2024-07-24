window.onload = function() {
    if (window.location.pathname !== "/login.html") {
        window.location.href = "login.html";
    }
    onload()
};

document.addEventListener("DOMContentLoaded", function() {
    const loginButton = document.getElementById('loginButton');
    if (loginButton) {
        loginButton.addEventListener('click', function(event) {
            event.preventDefault(); // Предотвращает переход по ссылке
            window.location.href = "index.html";
        });
    }
});
