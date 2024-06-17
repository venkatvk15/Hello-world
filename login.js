// login.js
function loginUser() {
    var username = $('#username').val();
    var password = $('#password').val();

    $.ajax({
        url: 'php/login.php',
        type: 'POST',
        data: {
            username: username,
            password: password
        },
        success: function(response) {
            if (response.success) {
                localStorage.setItem('sessionToken', response.token);
                window.location.href = 'profile.html';
            } else {
                alert('Login failed: ' + response.message);
            }
        }
    });
}
