const userName = document.getElementById("userName");
const userMail = document.getElementById("userMail");
const btn = document.getElementById("btnSend");
const divFans = document.getElementById("divFans")

// ---------------------------------------- Francesc

const formulario = document.getElementById("formulario");
const inputs = document.querySelectorAll("#formulario input");

const expresiones = {
	userName: /^[a-zA-Z0-9\_\-]{4,16}$/, // Letras, numeros, guion y guion_bajo
	userMail: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
	password: /^.{4,12}$/, // 4 a 12 digitos.
}

const campos = {
	userName: false,
	userMail: false,
	password: false,
}

const validarFormulario = (e) => {
	switch (e.target.name) {
		case "userName":
			validarCampo(expresiones.userName, e.target, "userName");
		break;
        case "userMail":
            validarCampo(expresiones.userMail, e.target, "userMail");
        break;
		case "password":
			validarCampo(expresiones.password, e.target, "password");
			validarPassword2();
		break;
		case "password2":
			validarPassword2();
		break;
	}
}

const validarCampo = (expresion, input, campo) => {
	if(expresion.test(input.value)){
		document.getElementById(`grupo__${campo}`).classList.remove("formulario__grupo-incorrecto");
		document.getElementById(`grupo__${campo}`).classList.add("formulario__grupo-correcto");
		document.querySelector(`#grupo__${campo} i`).classList.add("fa-check-circle");
		document.querySelector(`#grupo__${campo} i`).classList.remove("fa-times-circle");
		document.querySelector(`#grupo__${campo} .formulario__input-error`).classList.remove("formulario__input-error-activo");
		campos[campo] = true;
	} else {
		document.getElementById(`grupo__${campo}`).classList.add("formulario__grupo-incorrecto");
		document.getElementById(`grupo__${campo}`).classList.remove("formulario__grupo-correcto");
		document.querySelector(`#grupo__${campo} i`).classList.add("fa-times-circle");
		document.querySelector(`#grupo__${campo} i`).classList.remove("fa-check-circle");
		document.querySelector(`#grupo__${campo} .formulario__input-error`).classList.add("formulario__input-error-activo");
		campos[campo] = false;
	}
}

const validarPassword2 = () => {
	const inputPassword1 = document.getElementById("password");
	const inputPassword2 = document.getElementById("password2");

	if(inputPassword1.value !== inputPassword2.value){
		document.getElementById(`grupo__password2`).classList.add('formulario__grupo-incorrecto');
		document.getElementById(`grupo__password2`).classList.remove('formulario__grupo-correcto');
		document.querySelector(`#grupo__password2 i`).classList.add('fa-times-circle');
		document.querySelector(`#grupo__password2 i`).classList.remove('fa-check-circle');
		document.querySelector(`#grupo__password2 .formulario__input-error`).classList.add('formulario__input-error-activo');
		campos["password"] = false;
	} else {
		document.getElementById(`grupo__password2`).classList.remove('formulario__grupo-incorrecto');
		document.getElementById(`grupo__password2`).classList.add('formulario__grupo-correcto');
		document.querySelector(`#grupo__password2 i`).classList.remove('fa-times-circle');
		document.querySelector(`#grupo__password2 i`).classList.add('fa-check-circle');
		document.querySelector(`#grupo__password2 .formulario__input-error`).classList.remove('formulario__input-error-activo');
		campos["password"] = true;
	}
}

inputs.forEach((input) => {
	input.addEventListener("keyup", validarFormulario);
	input.addEventListener("blur", validarFormulario);
});

formulario.addEventListener("submit", (e) => {
	e.preventDefault();
});
	const terminos = document.getElementById("terminos");
	if(campos.userName && campos.userMail && campos.password && terminos.checked ){
		formulario.reset();

		document.getElementById('formulario__mensaje-exito').classList.add('formulario__mensaje-exito-activo');
		setTimeout(() => {
			document.getElementById('formulario__mensaje-exito').classList.remove('formulario__mensaje-exito-activo');
		}, 3000);
		window.location.href = "/fans.html"; 3000;

		document.querySelectorAll('.formulario__grupo-correcto').forEach((icono) => {
			icono.classList.remove('formulario__grupo-correcto');
		});
	} else {
		document.getElementById('formulario__mensaje').classList.add('formulario__mensaje-activo');
	}


// --------------------------------------


// ------------------------------------- Álvaro

const arrayUsers = JSON.parse(localStorage.getItem("localStorageUsers")) || [];

const avatarProfile = () => {
    const arrAvatarProfile = ['avatar_1.png', 'avatar_2.png']
    let num = Math.floor( Math.random()*arrAvatarProfile.length)
    let img = `./assets/avatar_pics/${arrAvatarProfile[num]}`
    console.log(img)
    return img
};
const showUsers = () => {
    arrayUsers.forEach(user => {
        divFans.innerHTML += `
        <div class="col">
            <div class="card rounded-4 shadow-sm">
                <img src="${avatarProfile()}" class="card-img-top" alt="...">
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



