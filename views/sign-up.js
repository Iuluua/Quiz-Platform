const usersRepository = new UsersRepository();
function addNewUser() {
    const username = document.querySelector('.username-input').value;
    const password = document.querySelector('.password-input').value;
    const firstName = document.querySelector('.firstname-input').value;
    const lastName = document.querySelector('.lastname-input').value;
    const email = document.querySelector('.email-input').value;
    const isAdmin = false;

    const newUser = new User(username, password, firstName, lastName, email, isAdmin);

    usersRepository.saveUser(newUser);
    location.href="user-created-successfully.html";
}