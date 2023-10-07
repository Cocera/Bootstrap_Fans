const userName = document.getElementById("userName");
const userMail = document.getElementById("userMail");
const pass1 = document.getElementById("inputPass")
const pass2 = document.getElementById("inputPass2")
const btn = document.getElementById("btnSend");
const divFans = document.getElementById("divFans")



// ------------------------------------- Álvaro

const arrayUsers = JSON.parse(localStorage.getItem("localStorageUsers")) || [];

const showUsers = () => {
    arrayUsers.forEach(user => {
        divFans.innerHTML += `
        <div class="col">
            <div class="card rounded-4 shadow-sm">
                <img src="{none}" class="card-img-top" alt="...">
                <div class="card-body">
                    <h5 class="card-title">${user.name}</h5>
                    <p class="card-text">Mail: ${user.mail}</p>
                </div>
            </div>
        </div>`;
    });
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

