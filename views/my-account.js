const userId = localStorage.getItem("currentUserID");
const username = localStorage.getItem("currentUserUsername");
const userPassword = localStorage.getItem("currentUserPassword");
const firstName = localStorage.getItem("currentUserFirstName");
const lastName = localStorage.getItem("currentUserLastName");
const email = localStorage.getItem("currentUserEmail");
const userDescription = localStorage.getItem("currentUserDescription");
const isUserAdmin = localStorage.getItem("currentUserAdminStatus");


const userGreeting = document.querySelector(".user-data-container h1");
userGreeting.innerText = `Welcome Back, ${firstName} ${lastName}!`;


const firstNameInput = document.getElementById("firstName");
firstNameInput.setAttribute("value", `${firstName}`);

const lastNameInput = document.getElementById("lastName");
lastNameInput.setAttribute("value", `${lastName}`);

const usernameInput = document.getElementById("username");
usernameInput.setAttribute("value", `${username}`);

const emailInput = document.getElementById("email");
emailInput.setAttribute("value", `${email}`);

const descriptionInput = document.getElementById("description");
descriptionInput.innerText = `${userDescription}`;

const inputPassword1 = document.getElementById("inputPassword1");
const inputPassword2 = document.getElementById("inputPassword2");


const usersRepository = new UsersRepository();

const submitButton = document.querySelector(".user-data-container button");

submitButton.addEventListener("click", function () {
    let password = "";
    let description = "";

    if (inputPassword1.value !== inputPassword2.value ||
        (inputPassword1.value === null || inputPassword2.value === null) ||
        (inputPassword1.value === "" || inputPassword2.value === "")) {

        password = userPassword;

    } else if (inputPassword1.value === inputPassword2.value) {

        password = inputPassword1.value;
    }

    if (descriptionInput.value === null || descriptionInput.value === "") {

        description = userDescription;

    } else {

        description = descriptionInput.value;
    }

    const updatedUser = new User(
        usernameInput.value,
        password,
        firstNameInput.value,
        lastNameInput.value,
        emailInput.value,
        description,
        isUserAdmin
    );

    usersRepository.updateUser(updatedUser, userId);

    localStorage.setItem("currentUserUsername", usernameInput.value);
    localStorage.setItem("currentUserPassword", password);
    localStorage.setItem("currentUserFirstName", firstNameInput.value);
    localStorage.setItem("currentUserLastName", lastNameInput.value);
    localStorage.setItem("currentUserEmail", emailInput.value);
    localStorage.setItem("currentUserDescription", description);

    location.reload();
})


const logoutButton = document.querySelector(".logout-button-container button");

logoutButton.addEventListener("click", function () {

    localStorage.removeItem("currentUserID");
    localStorage.removeItem("currentUserUsername");
    localStorage.removeItem("currentUserPassword");
    localStorage.removeItem("currentUserFirstName");
    localStorage.removeItem("currentUserLastName");
    localStorage.removeItem("currentUserEmail");
    localStorage.removeItem("currentUserDescription");
    localStorage.removeItem("currentUserAdminStatus");

    localStorage.removeItem("themeCheckBox");

    location.href = "login.html";
})