const userId = localStorage.getItem("currentUserID");
console.log(userId);

const username = localStorage.getItem("currentUserUsername");
console.log(username);

const userPassword = localStorage.getItem("currentUserPassword");
console.log(userPassword);

const firstName = localStorage.getItem("currentUserFirstName");
console.log(firstName);

const lastName = localStorage.getItem("currentUserLastName");
console.log(lastName);

const email = localStorage.getItem("currentUserEmail");
console.log(email);

const userDescription = localStorage.getItem("currentUserDescription");
console.log(userDescription);



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
descriptionInput.setAttribute("placeholder", `${userDescription}`);

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

    usersRepository.updateUser(
        usernameInput.value,
        password,
        firstNameInput.value,
        lastNameInput.value,
        emailInput.value,
        description, //trebuie facuta o verificare in cazul in care nu exita numic in value
        userId
    );

    localStorage.setItem("currentUserUsername", usernameInput.value);
    localStorage.setItem("currentUserPassword", password);
    localStorage.setItem("currentUserFirstName", firstNameInput.value);
    localStorage.setItem("currentUserLastName", lastNameInput.value);
    localStorage.setItem("currentUserEmail", emailInput.value);
    localStorage.setItem("currentUserDescription", description);

    location.reload();
})


//la finalul acestei pagini trebuie sa exite un button de log out care odata apasat
//redirectioneaza userul la pagina de login si goleste local storage ul
