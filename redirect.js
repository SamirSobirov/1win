window.onload = function() {
    // Проверяем, на какой странице мы находимся при первой загрузке
    if (window.location.pathname !== "/login.html" && window.location.pathname !== "/index.html") {
        window.location.href = "login.html";
    }
};

// Устанавливаем обработчик события при загрузке DOM
document.addEventListener("DOMContentLoaded", function() {
    const loginButton = document.getElementById('loginButton');
    if (loginButton) {
        loginButton.addEventListener('click', function(event) {
            event.preventDefault(); // Предотвращает переход по ссылке

            // Переход на index.html, но только если мы на странице login.html
            if (window.location.pathname === "/login.html") {
                window.location.href = "index.html";
            }
        });
    }
});
