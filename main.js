const userName = document.getElementById("userName");
const userMail = document.getElementById("userMail");
const pass1 = document.getElementById("inputPass")
const pass2 = document.getElementById("inputPass2")
const btn = document.getElementById("btnSend");
const divFans = document.getElementById("divFans")



// ------------------------------------- Álvaro

const arrayUsers = JSON.parse(localStorage.getItem("localStorageUsers")) || [];

let showUsers = () => {
    const dataFans = JSON.parse(localStorage.getItem("localStorageUsers"));
    //dataFans.forEach(user => divFans.innerHTML += `Datos: ${user.name}`)
    for (let i = 0; i < dataFans.length; i++) {
        const lista =
            `<ul>
                <li> ${dataFans[i].name}  </li>
                <li> ${dataFans[i].mail} </li>
            </ul>`;
        divFans.innerHTML += lista;
    }
    
};


const saveUsers = (e) => {   
    e.preventDefault();

    const userRandom = {name: userName.value, mail: userMail.value};
    arrayUsers.push(userRandom);
    
    localStorage.setItem("localStorageUsers", JSON.stringify(arrayUsers));
    showUsers()
};

btn?.addEventListener("click", saveUsers);

showUsers()


// ---------------------------------------- Francesc



// -----------------------------------------

