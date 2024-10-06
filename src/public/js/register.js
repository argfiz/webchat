const login = document.querySelector(".btn_discord");

login.addEventListener("click", () => {

    const user = document.querySelector(".input_discord").value;

    if (user != "") {
        
        document.cookie = `username=${user}`;
        document.location.href = "/";

    }
    else {
        alert("¡Escribe un nombre de usuario!");
    }

});