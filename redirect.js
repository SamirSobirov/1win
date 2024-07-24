// window.onload = function() {
//     window.location.href = "login.html";
// };


window.onload = function() {
    if (window.location.pathname !== "/login.html") {
        window.location.href = "login.html";
    }
};

document.addEventListener("DOMContentLoaded", function() {
    const loginButton = document.getElementById('loginButton');
    loginButton.addEventListener('click', function(event) {
        event.preventDefault(); // Предотвращает переход по ссылке
        // Здесь можно добавить проверку email и пароля
        history.pushState(null, null, "index.html");
    });
});