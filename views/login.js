function login() {
    const username = document.querySelector('.username-input').value;
    const password = document.querySelector('.password-input').value;

    const usersRepository = new UsersRepository();
    const users = usersRepository.getAllUsers();

    let currentUser;

    const timeout = setTimeout(() => {

        for(let i = 0; i < users.length; i++) {
            if(username === users[i].username && password === users[i].password) {
                currentUser = users[i];

                localStorage.setItem("currentUserID", currentUser.id);
                localStorage.setItem("currentUserUsername", currentUser.username);
                localStorage.setItem("currentUserPassword", currentUser.password);
                localStorage.setItem("currentUserFirstName", currentUser.firstName);
                localStorage.setItem("currentUserLastName", currentUser.lastName);
                localStorage.setItem("currentUserEmail", currentUser.email);
                localStorage.setItem("currentUserDescription", currentUser.description);
                localStorage.setItem("currentUserAdminStatus", currentUser.isAdmin);

                location.href="home.html";
            }
        }

    }, 100);
}