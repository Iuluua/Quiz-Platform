function generateQuestions() {
    const adminPageContainer = document.querySelector(".admin-page-container");

    const categorySelect = document.querySelector(".category-select");
    const categoryValue = categorySelect.value;

    const difficultySelect = document.querySelector(".difficulty-select");
    const difficultyValue = difficultySelect.value;

    const languageSelect = document.querySelector(".language-select");
    const languageValue = languageSelect.value;


    const questionsRepository = new QuestionsRepository();

    const test = questionsRepository.getTest(categoryValue, difficultyValue, languageValue);

    setTimeout(function() {
        for(let i = 0; i < test.length; i++) {
            const questionCard = document.createElement("div");
            questionCard.classList.add("question-card");

            const questionDataContainer = document.createElement("div");
            questionDataContainer.classList.add("card");
            questionDataContainer.classList.add("question-data-container");

            const questionText = document.createElement("p");
            questionText.innerText = `Question:\n\n${test[i].question}`;

            questionDataContainer.appendChild(questionText);

            const questionOptionsContainer = document.createElement("div");
            questionOptionsContainer.classList.add("question-options-container");

            const editButton = document.createElement("button");
            editButton.classList.add("btn");
            editButton.classList.add("btn-outline-warning");
            editButton.innerText = "Edit";

            questionOptionsContainer.appendChild(editButton);

            editButton.addEventListener("click", function() {
                localStorage.setItem("questionID", test[i].id);
                localStorage.setItem("questionCategory", test[i].category);
                localStorage.setItem("questionLanguage", test[i].language);
                localStorage.setItem("questionDifficulty", test[i].difficulty);
                localStorage.setItem("question", test[i].question);
                localStorage.setItem("correctAnswer", test[i].correct_answer);
                localStorage.setItem("incorrecAnswers", test[i].incorrect_answers);

                location.href = "../templates/edit.html";
            })

            const deleteButton = document.createElement("button");
            deleteButton.classList.add("btn");
            deleteButton.classList.add("btn-outline-danger");
            deleteButton.innerText = "Delete";

            questionOptionsContainer.appendChild(deleteButton);

            deleteButton.addEventListener("click", function() {
                questionsRepository.deleteQuestion(test[i].id);
                questionCard.remove();
            })

            questionCard.appendChild(questionDataContainer);
            questionCard.appendChild(questionOptionsContainer);
            adminPageContainer.appendChild(questionCard);

            if (themeSwitch.checked) {
                setDarkTheme(navBar, footer, buttons, inputs, formSelect);
            }
        }
    }, 100);
}

function addQuestion() {
    location.href = "../templates/add-question.html";
}