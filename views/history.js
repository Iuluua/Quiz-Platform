const usersRepository = new UsersRepository();

const userId = localStorage.getItem("currentUserID");
const isChecked = localStorage.getItem("themeCheckBox");

const results = usersRepository.getResultByUserId(userId);

setTimeout(() => {
    console.log(results);

    const historyDataContainer = document.querySelector(".history-data-container");

    let quizNumber = results.length;

    for (let i = results.length - 1; i >= 0; i--) {

        const resultCard = document.createElement("div");
        resultCard.classList.add("card");

        const resultCardHeader = document.createElement("div");
        resultCardHeader.classList.add("card-header");
        resultCardHeader.innerText = `Quiz ${quizNumber} - ${results[i].date}`;

        quizNumber--;

        resultCard.appendChild(resultCardHeader);

        const resultUl = document.createElement("ul");
        resultUl.classList.add("list-group");
        resultUl.classList.add("list-group-flush");

        let resultKeys = Object.keys(results[i]);

        resultKeys.forEach((key) => {

            if (key !== "userID" && key !== "id" && key !== "date") {
                let value = results[i][key];

                if (value === "en") {
                    value = "English";
                } else if(value === "ro") {
                    value = "Romanian";
                }

                if (key === "score") {
                    value = `${results[i][key]} points`;
                }

                const resultLi = document.createElement("li");
                resultLi.classList.add("list-group-item");
                resultLi.innerText = `${key.charAt(0).toUpperCase() + key.slice(1)} - ${value.charAt(0).toUpperCase() + value.slice(1)}`;

                resultUl.appendChild(resultLi);
            }

        })

        resultCard.appendChild(resultUl);
        historyDataContainer.appendChild(resultCard);

        if (themeSwitch.checked) {
            setDarkTheme(navBar, footer, buttons, inputs, formSelect);
        }
    }

}, 100);//sa nu uiti sa schimbi la final aici cu mai putin pentru performance