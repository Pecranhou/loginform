function validate() {
    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;
    if (username == "tesaa@jobers.fr" && password =="tesaa2022")
    {
        window.location="maintenance.html";
    }
    else{
        alert("Mot de passe ou login incorrect")
    }

}