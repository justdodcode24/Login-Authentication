document.getElementById("loginForm").addEventListener("submit", function(event) {
    event.preventDefault();
    
    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;

    if (username === "goutam" && password === "goutam123") {
        alert("Login successful!");
        window.location.href = "///C:/Users/Goutam/Goutam-Hegde-FlowCV-Resume-20240227%20(1).pdf"; 
    } else {
        document.getElementById("errorMessage").innerText = "Invalid username or password";
    }
});
