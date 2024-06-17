// profile.js
$(document).ready(function() {
    var token = localStorage.getItem('sessionToken');
    if (!token) {
        window.location.href = 'login.html';
    }

    $.ajax({
        url: 'php/profile.php',
        type: 'POST',
        data: { token: token },
        success: function(response) {
            if (response.success) {
                $('#age').val(response.data.age);
                $('#dob').val(response.data.dob);
                $('#contact').val(response.data.contact);
            } else {
                alert('Failed to load profile: ' + response.message);
                window.location.href = 'login.html';
            }
        }
    });
});

function updateProfile() {
    var token = localStorage.getItem('sessionToken');
    var age = $('#age').val();
    var dob = $('#dob').val();
    var contact = $('#contact').val();

    $.ajax({
        url: 'php/profile.php',
        type: 'POST',
        data: {
            token: token,
            age: age,
            dob: dob,
            contact: contact
        },
        success: function(response) {
            if (response.success) {
                alert('Profile updated successfully!');
            } else {
                alert('Profile update failed: ' + response.message);
            }
        }
    });
}
