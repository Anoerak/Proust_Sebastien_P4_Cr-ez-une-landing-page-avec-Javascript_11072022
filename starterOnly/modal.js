function editNav() {
	var x = document.getElementById("myTopnav");
	if (x.className === "topnav") {
		x.className += " responsive";
	} else {
		x.className = "topnav";
	}
}

// DOM Elements
const modalbg = document.querySelector(".bground");
const modalBtn = document.querySelectorAll(".modal-btn");
const formData = document.querySelectorAll(".formData");
const closeModalBtn = document.querySelector(".close");


//Actions:
	/// launch modal event
	modalBtn.forEach((btn) => btn.addEventListener("click", launchModal));

	/// launch modal form
	function launchModal() {
		modalbg.style.display = "block";
	}

	/// close modal event
	closeModalBtn.addEventListener("click", closeModal);


//Functions:
	///Animation for Opening and Closing the modal
	function closeAndClearLocalStorage() {
		  greetingsModal.style.display = "none";
		  form.style.display = "block";
		  modalbg.style.display = "none";
	  }




