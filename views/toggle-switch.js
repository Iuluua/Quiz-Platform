const themeSwitch = document.querySelector(".switch-container .switch input");

const navBar = document.querySelector(".navbar");
const footer = document.querySelector(".fixed-bottom");
const buttons = document.querySelectorAll(".btn");
const inputs = document.querySelectorAll(".form-control");
const formSelect = document.querySelectorAll(".form-select");
console.log(formSelect);

const checked = localStorage.getItem("themeCheckBox");

if (checked) {
    themeSwitch.setAttribute("checked", "true");
}

if (themeSwitch.checked) {
    setDarkTheme(navBar, footer, buttons, inputs, formSelect);
}


themeSwitch.addEventListener("click", function () {
    console.log(themeSwitch.checked);

    if (themeSwitch.checked) {
        localStorage.setItem("themeCheckBox", true);

        setDarkTheme(navBar, footer, buttons, inputs, formSelect);

    } else {
        localStorage.removeItem("themeCheckBox");

        setLightTheme(navBar, footer, buttons, inputs, formSelect);
    }
})

function setDarkTheme(navBar, footer, buttons, inputs, formSelect) {
    //add a dark theme for the background
    document.body.style.backgroundColor = "rgb(35, 39, 45)";

    //add a dark theme for the writing
    document.body.style.color = "white"

    //add a dark theme for the navbar
    navBar.classList.remove("navbar-light");
    navBar.classList.remove("bg-light");
    navBar.classList.add("navbar-dark");
    navBar.classList.add("bg-dark");

    //add a dark theme for the footer
    footer.classList.remove("navbar-light");
    footer.classList.remove("bg-light");
    footer.classList.add("navbar-dark");
    footer.classList.add("bg-dark");

    //add a dark theme for the buttons
    for (let i = 0; i < buttons.length; i++) {
        buttons[i].classList.remove("btn-outline-secondary");
        buttons[i].classList.add("btn-outline-dark");
    }

    //add a dark theme for the inputs
    for (let i = 0; i < inputs.length; i++) {
        inputs[i].classList.add("form-control-dark");
    }

    //add a dark theme for the select form
    for (let i = 0; i < formSelect.length; i++) {
        formSelect[i].classList.add("form-select-dark");
    }

    //add a dark theme for the card headers
    setTimeout(() => {
        const cardHeaders = document.querySelectorAll(".card-header");
        console.log(cardHeaders);
        for (let i = 0; i < cardHeaders.length; i++) {
            cardHeaders[i].classList.add("card-header-dark");
        }

        const listGroups = document.querySelectorAll(".list-group");
        for(let i = 0; i < listGroups.length; i++) {
            const listItems = listGroups[i].childNodes;
            
            for(j = 0; j < listItems.length; j++) {
                listItems[j].classList.add("list-item-dark");
            }
        }
    });
}

function setLightTheme(navBar, footer, buttons, inputs, formSelect) {
    //add a light theme for the background
    document.body.style.backgroundColor = "white";

    //add a light theme for the writing
    document.body.style.color = "black";

    //add a light theme for the navbar
    navBar.classList.remove("navbar-dark");
    navBar.classList.remove("bg-dark");
    navBar.classList.add("navbar-light");
    navBar.classList.add("bg-light");

    //add a light theme for the footer
    footer.classList.remove("navbar-dark");
    footer.classList.remove("bg-dark");
    footer.classList.add("navbar-light");
    footer.classList.add("bg-light");

    //add a light theme for the buttons
    for (let i = 0; i < buttons.length; i++) {
        buttons[i].classList.remove("btn-outline-dark");
        buttons[i].classList.add("btn-outline-secondary");
    }

    //add a light theme for the inputs
    for (let i = 0; i < inputs.length; i++) {
        inputs[i].classList.remove("form-control-dark");
    }

    //add a light theme for the select form
    for (let i = 0; i < formSelect.length; i++) {
        formSelect[i].classList.remove("form-select-dark");
    }

    //add a light theme for the card headers
    setTimeout(() => {
        const cardHeaders = document.querySelectorAll(".card-header");
        console.log(cardHeaders);
        for(let i = 0; i < cardHeaders.length; i++) {
            cardHeaders[i].classList.remove("card-header-dark");
        }

        const listGroups = document.querySelectorAll(".list-group");
        for(let i = 0; i < listGroups.length; i++) {
            const listItems = listGroups[i].childNodes;
            
            for(j = 0; j < listItems.length; j++) {
                listItems[j].classList.remove("list-item-dark");
            }
        }
    });
}