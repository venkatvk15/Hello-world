// register.js
function registerUser() {
    var username = $('#username').val();
    var password = $('#password').val();

    $.ajax({
        url: 'php/register.php',
        type: 'POST',
        data: {
            username: username,
            password: password
        },
        success: function(response) {
            if (response.success) {
                alert('Registration successful!');
                window.location.href = 'login.html';
            } else {
                alert('Registration failed: ' + response.message);
            }
        }
    });
}
