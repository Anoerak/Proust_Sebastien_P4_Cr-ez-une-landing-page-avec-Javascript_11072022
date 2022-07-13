// DOM Elements
	/// "Je m'inscris" button
	const modalBtn = document.querySelectorAll(".modal-btn");

	/// Modal
	const modalContent = document.getElementById("content");
	const modalBg = document.querySelector(".bground");
	const closeModalBtn = document.getElementById("close");

	/// Form
	const form = document.getElementById("save_the_date_form");
	const formData = document.querySelectorAll(".formData");
	const submitBtn = document.getElementById("submit");
	
	/// Greeting Modal
	const greetingsModal = document.getElementById("modal-greetings");
	const closeGreetingsModalBtn = document.getElementById("greetings-btn");

	/// Validation of the form
	const firstNameInput = document.getElementById("first");
	const lastNameInput = document.getElementById("last");
	const emailInput = document.getElementById("email");
	const emailRegex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
	const birthdateInput = document.getElementById("birthdate");
	const birthdateRegex = /^(19[0-9][0-9]|20[01][0-9]|2020|2021|2022)[\/\-](0?[1-9]|1[012])[\/\-](0?[1-9]|[12][0-9]|3[01])$/
	const tournamentNbInput = document.getElementById("quantity");
	const tournamentRegex = /^[0-9]{1,2}$/;
	const inputRegex = /^[a-zA-Z éèôâàîêëï-]{2,}$/;

	/// Alert for Location Missing
	const locationInput = document.getElementsByName('location');
	const locationAlert = document.querySelector(".location-alert");

	/// Delay for Animations
	const delay = 490;



// Actions:
	/// Modal
		//// Launch Modal Event
		modalBtn.forEach((btn) => btn.addEventListener("click", launchModal));

		//// Check if CGU is Checked
		checkCGU();
		document.getElementById("checkbox1").addEventListener("click", checkCGU);

		//// Close Modal Event
		closeModalBtn.onclick = function () {
			closeAndClearLocalStorage();
		};
		window.onclick = function(e) {
			if (e.target == modalBg) {
			closeAndClearLocalStorage();
			}
		}
		closeGreetingsModalBtn.onclick = function () {
			closeAndClearLocalStorage();
		};

		////Error Messages when User Input is Incorrect
		firstNameInput.addEventListener("input", function () {
			if (inputRegex.test(firstNameInput.value) != true) {
			firstNameInput.style.border = "outset";
			firstNameInput.style.borderColor = "red";
			firstNameInput.style.borderWidth = "3px";
			document.getElementsByClassName("firstError")[0].style.display = "block";
			document.getElementsByClassName("firstError")[0].textContent = "2 lettres minimum, pas de chiffres ou caractères spéciaux.";
			} else {
				firstNameInput.style.borderColor = "transparent";
			document.getElementsByClassName("firstError")[0].style.display = "none";

			}
		});
		lastNameInput.addEventListener("input", function () {
			if (inputRegex.test(lastNameInput.value) != true) {
			lastNameInput.style.border = "outset";
			lastNameInput.style.borderColor = "red";
			lastNameInput.style.borderWidth = "3px";
			document.getElementsByClassName("lastError")[0].style.display = "block";
			document.getElementsByClassName("lastError")[0].textContent = "2 lettres minimum, pas de chiffres ou caractères spéciaux.";
			} else {
			lastNameInput.style.borderColor = "transparent";
			document.getElementsByClassName("lastError")[0].style.display = "none";
			}
		});
		emailInput.addEventListener("input", function () {
			if (emailRegex.test(emailInput.value) != true) {
			emailInput.style.border = "outset";
			emailInput.style.borderColor = "red";
			emailInput.style.borderWidth = "3px";
			document.getElementsByClassName("emailError")[0].style.display = "block";
			document.getElementsByClassName("emailError")[0].textContent = "Email invalide.";
			} else {
			emailInput.style.borderColor = "transparent";
			document.getElementsByClassName("emailError")[0].style.display = "none";
			}
		});
		birthdateInput.addEventListener("input", function () {
			if (birthdateRegex.test(birthdateInput.value) != true) {
			birthdateInput.style.border = "outset";
			birthdateInput.style.borderColor = "red";
			birthdateInput.style.borderWidth = "3px";
			document.getElementsByClassName("birthdateError")[0].style.display = "block";
			document.getElementsByClassName("birthdateError")[0].textContent = "Date invalide. Vérifier l'année saisie.";
			} else {
			birthdateInput.style.borderColor = "transparent";
			document.getElementsByClassName("birthdateError")[0].style.display = "none";
			}
		});
		tournamentNbInput.addEventListener("input", function () {
			if (tournamentRegex.test(tournamentNbInput.value) != true) {
			tournamentNbInput.style.border = "outset";
			tournamentNbInput.style.borderColor = "red";
			tournamentNbInput.style.borderWidth = "3px";
			document.getElementsByClassName("tournamentError")[0].style.display = "block";
			document.getElementsByClassName("tournamentError")[0].textContent = "Nombre de Tournoi invalide.";
			} else {
			tournamentNbInput.style.borderColor = "transparent";
			document.getElementsByClassName("tournamentError")[0].style.display = "none";
			}
		});
		for (let i = 0; i < locationInput.length; i++) {
			locationInput[i].addEventListener("click", function() {
			if (getLocation() === undefined) {
				locationAlert.style.borderColor = "red";
				locationAlert.style.borderWidth = "2px";
				locationAlert.style.borderStyle = "solid";
				locationAlert.style.borderRadius = "7px";
				locationAlert.style.padding = "0 5px 10px 0";
				document.getElementsByClassName("locationError")[0].style.display = "block";
				document.getElementsByClassName("locationError")[0].textContent = "Veuillez choisir une ville.";
			} else {
				locationAlert.style.borderStyle = "none";
				locationAlert.style.padding = "0";
				document.getElementsByClassName("locationError")[0].style.display = "none";
			}
			})
		};


//Functions:
	///Animation for Opening and Closing of Modal
		//// Responsive NavBar
		function editNav() {
			var x = document.getElementById("myTopnav");
			if (x.className === "topnav") {
				x.className += " responsive";
			} else {
				x.className = "topnav";
			}
		}

		//// Launch Modal Form
		function launchModal() {
			animateModal1();
			modalBg.style.display = "block";
		}

		function animateModal1() {
			if (modalContent.classList.contains("content_reverse")) {
				modalContent.classList.remove("content_reverse");
				modalContent.classList.add("content");
			} else if (modalContent.classList.contains("content")) {
				modalContent.classList.remove("content");
				modalContent.classList.add("content");
			} else {
				modalContent.classList.add("content");
			}
		}

		function animateModal2() {
			if (modalContent.classList.contains("content")) {
				modalContent.classList.remove("content");
				modalContent.classList.add("content_reverse");
			} else if (modalContent.classList.contains("content_reverse")) {
				modalContent.classList.remove("content_reverse");
				modalContent.classList.add("content_reverse");
			} else {
				modalContent.classList.add("content_reverse");
			}
		}

		function closeAndClearLocalStorage() {
			animateModal2();
			localStorage.clear();
			setTimeout(function () {
			greetingsModal.style.display = "none";
			form.style.display = "block";
			modalBg.style.display = "none";
			form.reset();
			}, delay);
		}

		////CGU Checking
		function checkCGU() {
			if (document.getElementById('checkbox1').checked) {  
			submitBtn.disabled = false;
			} else {
			submitBtn.disabled = true;
			}
		};

		////Get the Location Selected by the User
		function getLocation() {
			var x = document.getElementsByName('location');
			for(let i = 0; i < x.length; i++) {
			if(x[i].checked === true) {
				var locationChoice = x[i].value;
				return locationChoice;
			}
			}
		}

		////Submission of the Form Functions
		function regexValidation()  {
			if (inputRegex.test(firstNameInput.value) != true) {
			firstNameInput.style.borderColor = "red";
			firstNameInput.style.borderWidth = "3px";
			document.getElementsByClassName("firstError")[0].style.display = "block";
			document.getElementsByClassName("firstError")[0].textContent = "2 lettres minimum, pas de chiffres ou caractères spéciaux.";
			return false;
			} else if (inputRegex.test(lastNameInput.value) != true) {
			lastNameInput.style.borderColor = "red";
			lastNameInput.style.borderWidth = "3px";
			document.getElementsByClassName("lastError")[0].style.display = "block";
			document.getElementsByClassName("lastError")[0].textContent = "2 lettres minimum, pas de chiffres ou caractères spéciaux.";
			return false;
			} else if (emailRegex.test(emailInput.value) != true) {
			emailInput.style.borderColor = "red";
			emailInput.style.borderWidth = "3px";
			document.getElementsByClassName("emailError")[0].style.display = "block";
			document.getElementsByClassName("emailError")[0].textContent = "Email invalide.";
			return false;
			} else if (birthdateRegex.test(birthdateInput.value) != true) {
			birthdateInput.style.borderColor = "red";
			birthdateInput.style.borderWidth = "3px";
			document.getElementsByClassName("birthdateError")[0].style.display = "block";
			document.getElementsByClassName("birthdateError")[0].textContent = "Date invalide. Vérifiez l'année saisie.";
			return false;
			} else if (tournamentRegex.test(tournamentNbInput.value) != true) {
			tournamentNbInput.style.borderColor = "red";
			tournamentNbInput.style.borderWidth = "3px";
			document.getElementsByClassName("tournamentError")[0].style.display = "block";
			document.getElementsByClassName("tournamentError")[0].textContent = "Nombre de Tournoi invalide.";
			return false;
			} else if (getLocation() === undefined) {
			locationAlert.style.borderColor = "red";
			locationAlert.style.borderWidth = "2px";
			locationAlert.style.borderStyle = "solid";
			locationAlert.style.borderRadius = "7px";
			locationAlert.style.padding = "0 5px 10px 0";
			document.getElementsByClassName("locationError")[0].style.display = "block";
			document.getElementsByClassName("locationError")[0].textContent = "Veuillez choisir une ville.";
			return false;
			} else {
			firstNameInput.style.borderStyle = "none";
			document.getElementsByClassName("firstError")[0].style.display = "none";
			lastNameInput.style.borderStyle = "none";
			document.getElementsByClassName("lastError")[0].style.display = "none";
			emailInput.style.borderStyle = "none";
			document.getElementsByClassName("emailError")[0].style.display = "none";
			birthdateInput.style.borderStyle = "none";
			document.getElementsByClassName("birthdateError")[0].style.display = "none";
			tournamentNbInput.style.borderStyle = "none";
			document.getElementsByClassName("tournamentError")[0].style.display = "none";
			locationAlert.style.borderStyle = "none";
			locationAlert.style.padding = "0";
			document.getElementsByClassName("locationError")[0].style.display = "none";
			return true;
			}
		}
		function storeUserData() {
			localStorage.setItem("firstName", firstNameInput.value);
			localStorage.setItem("lastName", lastNameInput.value);
			localStorage.setItem("email", emailInput.value);
			localStorage.setItem("birthdate", birthdateInput.value);
			localStorage.setItem("tournamentNb", tournamentNbInput.value);
			localStorage.setItem("locationChoice", getLocation());
			if(document.getElementById('checkbox2').checked === true) {
			localStorage.setItem("inscription Newsletter", "true");
			} else {
			localStorage.setItem("inscription Newsletter", "false");
			}
		}
		function validate() {
			if (regexValidation() === true) {
			storeUserData();
			document.getElementById("registered_user_name").textContent = localStorage.getItem("firstName") + " " + localStorage.getItem("lastName");
			document.getElementById("chosen_location").textContent = localStorage.getItem("locationChoice");
			if(localStorage.getItem("inscription Newsletter") === "true") {
				document.getElementById("greetings-message").style.display = "block";
				} else {
				document.getElementById("greetings-message").style.display = "none";
				};
			form.style.display = "none";
			greetingsModal.style.display = "flex";
			return false;
			} else {
			return false;
			}
		}
