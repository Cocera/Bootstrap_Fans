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
	const usuario = { nombre, correo };
	localStorage.setItem(correo, JSON.stringify(usuario));

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

// Cargar usuarios al cargar la página
function loadUsers() {
	const userCards = document.getElementById('userCards');
	userCards.innerHTML = '';
	const avatarImages = [
        '/assets/avatar_pics/avatar_1.png',
        '/assets/avatar_pics/avatar_2.png',
    ];
    for (let i = 0; i < localStorage.length; i++) {
        const key = localStorage.key(i);
        const usuario = JSON.parse(localStorage.getItem(key));
        const randomAvatar = avatarImages[Math.floor(Math.random() * avatarImages.length)];

        const cardHtml = `
            <div class="col-md-4 mb-3">
                <div class="card">
                    <img src="${randomAvatar}" class="card-img-top" alt="Avatar">
                    <div class="card-body">
                        <h5 class="card-title">${usuario.nombre}</h5>
                        <p class="card-text">${usuario.correo}</p>
                    </div>
                </div>
            </div>
        `;
        userCards.insertAdjacentHTML('beforeend', cardHtml);
    }
}

// Cargar usuarios al cargar la página
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
