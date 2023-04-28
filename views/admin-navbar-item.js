const isAdmin = localStorage.getItem("currentUserAdminStatus");

if (isAdmin === "true") {
    const navBarUl = document.querySelector(".navbar .container-fluid .navbar-collapse .navbar-nav");

    const adminNavBarLi = document.createElement("li");
    adminNavBarLi.classList.add("nav-item");

    const adminNavBarLink = document.createElement("a");
    adminNavBarLink.classList.add("nav-link");
    adminNavBarLink.setAttribute("href", "#");
    adminNavBarLink.innerText = "Admin";

    adminNavBarLi.appendChild(adminNavBarLink);
    navBarUl.appendChild(adminNavBarLi);
}

