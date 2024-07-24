window.onload = function() {
    if (!localStorage.getItem('redirected')) {

        localStorage.setItem('redirected', 'true');
        window.location.href = "login.html";
    }


    const loginButton = document.getElementById('loginButton');
    if (loginButton) {
        loginButton.addEventListener('click', function(event) {
            event.preventDefault(); 
            window.location.href = "index.html";
        });
    }
};

