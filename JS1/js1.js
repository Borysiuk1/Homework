function logIn () {
    var userName = prompt('Enter your username');

    if (userName == 'Admin' || userName == 'admin') {
        var password = prompt('Enter your password');
        if (password == 'Dark owner'){
            alert('Welcome!');
        } else {
            alert('The password is incorrect');
        }
    } else if (!userName) {
        alert('Enter is delayed');
    } else {
        alert("I don't know you");
    }
}

