const name = document.getElementById("userName");
const email = document.getElementById("userMail");
const pass1 = document.getElementById("inputPass")
const pass2 = document.getElementById("inputPass2")
const btn = document.getElementById("btnSend");
const cardFans = document.getElementById("cardFans")




// ------------------------------------- Álvaro
const arrayUsers = [];

function saveUsers(e) {
    e.preventDefault();

    const userRandom = {name: name.value, mail: email.value};
    arrayUsers.push(userRandom);
    
    localStorage.setItem("arrayUsers", JSON.stringify(arrayUsers));
    
    /*
    let dataUsers = JSON.parse(localStorage.getItem("arrayUsers"));

    userInfoP.innerHTML = "";

    for (let i=0; i<dataUsers.length; i++) {
        userInfoP.innerHTML += `${i+1}. El usuario es ${dataUsers[i].name}, con mail ${dataUsers[i].mail} y su comentario: ${dataUsers[i].message}<br>`;
        */

    const dataFans = JSON.parse(localStorage.getItem("arrayUsers"));
    dataFans.forEach((fan) => cardFans.innerHTML = fan.name);
    
};

btn.addEventListener("click", asasaveUsers) //cambiar boton

// ---------------------------------------- Francesc



// -----------------------------------------

