
$(document).ready(function() {
    $('#loginButton').click(function() {
        var email = $('input[type="email"]').val();
        var password = $('input[type="password"]').val();

        // Проверяем, если введены логин и пароль "admin"
        if (email === 'admin' && password === 'admin') {
            // Если верно, перенаправляем на index.html
            window.location.href = "./index.html";
        } else {
            alert('Неправильный логин или пароль. Попробуйте снова.');
        }
    });
});

