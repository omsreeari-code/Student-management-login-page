function login() {

    // Get username and password
    let username = document.getElementById("username").value;
    let password = document.getElementById("password").value;

    // Check login credentials
    if (username === "admin" && password === "1234") {
        alert("Login Successful!");
        window.location.href = "dashboard.html";
    } else {
        document.getElementById("error").innerHTML =
            "Invalid Username or Password!";
    }

}