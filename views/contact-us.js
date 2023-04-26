function submitMessage() {
    const usersRepository = new UsersRepository();

    const firstNameInput = document.getElementById("firstName");
    const lastNameInput = document.getElementById("lastName");
    const emailInput = document.getElementById("email");
    const messageInput = document.getElementById("message");

    const userId = localStorage.getItem("currentUserID");

    usersRepository.saveUserMessage(userId, firstNameInput.value, lastNameInput.value, emailInput.value, messageInput.value);

    const contactForm = document.querySelector(".form-container form");
    contactForm.style.display = "none";

    const successMessage = document.createElement("h2");
    successMessage.classList.add("success-message");
    successMessage.innerText = "You've successfully added a new message!"

    const formContainer = document.querySelector(".form-container");
    formContainer.appendChild(successMessage);

}