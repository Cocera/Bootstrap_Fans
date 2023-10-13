const arrayUsers = JSON.parse(localStorage.getItem("users")) || [];
const btnSend = document.getElementById("btnSend");

const createUser = () => {
	const nombre = document.getElementById('nombre').value;
	const correo = document.getElementById('correo').value;
	const password = document.getElementById('password').value;
	const confirmPassword = document.getElementById('confirmPassword').value;

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

	const avatarImg = () => {
		const arrAvatarImg = ['avatar_1.png', 'avatar_2.png', 'avatar_3.png', 'avatar_4.png']
		let num = Math.floor( Math.random()*arrAvatarImg.length)
		let img = `./assets/avatar_pics/${arrAvatarImg[num]}`
		return img
	};

	const usuario = {name:nombre, mail:correo, img:avatarImg()};
    arrayUsers.push(usuario);
	localStorage.setItem("users", JSON.stringify(arrayUsers));

	showAlert("Usuario creado correctamente.", "success");
	setTimeout(() => {
		window.location.href = "./fans.html";
		document.getElementById('userForm').reset();
	}, 3000);

	loadUsers();
};

const isValidEmail = email => {
	const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
	return emailRegex.test(email);
};

const showAlert = (message, type) => {
	const alert = document.getElementById('successAlert');
	alert.textContent = message;
	alert.className = `alert alert-${type}`;
	alert.style.display = 'block';
	setTimeout(() => {
		alert.style.display = 'none';
	}, 3000);
};

const loadUsers = () => {
	const fanCards = document.getElementById("fanCards");
    arrayUsers.forEach(user => {
        fanCards.innerHTML += `
        <div class="col">
            <div class="card shadow-sm rounded-4 p-2">
                <img src="${user.img}" class="card-img-top rounded-4 shadow-sm" alt="...">
                <div class="card-body">
                    <h4 class="card-title">${user.name}</h4>
                    <p class="card-text">${user.mail}</p>
                </div>
            </div>
        </div>`;
    });
};

btnSend?.addEventListener("click", createUser);

loadUsers();
