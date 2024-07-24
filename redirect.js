
$(document).ready(function() {
    $('#loginButton').click(function() {
        var email = $('input[type="email"]').val();
        var password = $('input[type="password"]').val();

        
        if (email === 'admin' && password === 'admin') {
            window.location.href = "./index.html";
        } else {
            alert('Неправильный логин или пароль. Попробуйте снова.');
        }
    });
});

