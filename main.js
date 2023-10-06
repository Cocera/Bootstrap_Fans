const userName = document.getElementById("userName");
const userMail = document.getElementById("userMail");
const btn = document.getElementById("btnSend");
const cardFans = document.getElementById("cardFans")




// ------------------------------------- Álvaro
const arrayUsers = [];

const showUsers = () => {
    const dataFans = JSON.parse(localStorage.getItem("localStorageUsers"));
    dataFans.forEach(fan => cardFans.innerHTML += `Datos: ${fan.name}`)
}

const saveUsers = (e) => {
    e.preventDefault();

    const userRandom = {name: userName.value, mail: userMail.value};
    arrayUsers.push(userRandom);
    
    localStorage.setItem("localStorageUsers", JSON.stringify(arrayUsers));

    
};

btn.addEventListener("click", saveUsers);



// ---------------------------------------- Francesc



// -----------------------------------------

