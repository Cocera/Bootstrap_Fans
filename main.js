const arrayUsers = JSON.parse(localStorage.getItem("users")) || [];

const avatarImg = () => {
    const arrAvatarImg = ['avatar_1.png', 'avatar_2.png', 'avatar_3.png', 'avatar_4.png']
    let num = Math.floor( Math.random()*arrAvatarImg.length)
    let img = `./assets/avatar_pics/${arrAvatarImg[num]}`
    return img
};

function crearUsuario() {
	const nombre = document.getElementById('nombre').value;
	const correo = document.getElementById('correo').value;
	const password = document.getElementById('password').value;
	const confirmPassword = document.getElementById('confirmPassword').value;

// Validaciones
	if (!nombre || !correo || !password || !confirmPassword) {
		showAlert("Por favor, complete todos los campos.", "danger");
		return;
	}

	if (!isValidEmail(correo)) {
		showAlert("Por favor, ingrese un correo electrónico válido.", "danger");
		return;
	}

	if (password !== confirmPassword) {
		showAlert("Las contraseñas no coinciden.", "danger");
		return;
	}

	if (password.length < 6) {
		showAlert("La contraseña debe tener al menos 6 caracteres.", "danger");
		return;
	}

// Guardar usuario en localStorage
	const usuario = {name:nombre, mail:correo, img:avatarImg()};
    arrayUsers.push(usuario);
	localStorage.setItem("users", JSON.stringify(arrayUsers));

// Mostrar mensaje de éxito y redirigir
	showAlert("Usuario creado correctamente.", "success");
	setTimeout(function () {
		document.getElementById('userForm').reset();
		window.location.href = "/fans.html";
	}, 3000);
}

// Validación de correo electrónico
function isValidEmail(email) {
	const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
	return emailRegex.test(email);
}

// Mostrar alerta
function showAlert(message, type) {
	const alert = document.getElementById('successAlert');
	alert.textContent = message;
	alert.className = `alert alert-${type}`;
	alert.style.display = 'block';
	setTimeout(function () {
		alert.style.display = 'none';
	}, 3000);
}


const loadUsers = () => {
	const fanCards = document.getElementById("fanCards");
    arrayUsers.forEach(user => {
        fanCards.innerHTML += `
        <div class="col">
            <div class="card shadow-sm">
                <img src="${user.img}" class="card-img-top" alt="...">
                <div class="card-body">
                    <h5 class="card-title">${user.name}</h5>
                    <p class="card-text">Mail: ${user.mail}</p>
                </div>
            </div>
        </div>`;
    });
};

loadUsers();

//Get the button
let mybutton = document.getElementById("btn-back-to-top");


window.onscroll = function () {
  scrollFunction();
};

function scrollFunction() {
  if (
    document.body.scrollTop > 20 ||
    document.documentElement.scrollTop > 20
  ) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}


mybutton.addEventListener("click", backToTop);

function backToTop() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}
