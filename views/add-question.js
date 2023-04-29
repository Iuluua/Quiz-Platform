const addQuestionButton = document.querySelector(".new-question-container button");

addQuestionButton.addEventListener("click", function() {
    const categorySelect = document.querySelector(".category-select");
    const categoryValue = categorySelect.value;

    const difficultySelect = document.querySelector(".difficulty-select");
    const difficultyValue = difficultySelect.value;

    const languageSelect = document.querySelector(".language-select");
    const languageValue = languageSelect.value;

    const questionInput = document.getElementById("question");
    const questionValue = questionInput.value;

    const correctAnswerInput = document.getElementById("correctAnswer");
    const correctAnswerValue = correctAnswerInput.value;
    
    const incorrectAnswerInput = document.getElementById("incorrectAnswers");
    const incorrectAnswersValue = incorrectAnswerInput.value;

    const newQuestion = new Question(
        categoryValue, 
        languageValue, 
        difficultyValue, 
        questionValue, 
        correctAnswerValue, 
        incorrectAnswersValue
    );

    const questionsRepository = new QuestionsRepository();

    questionsRepository.saveQuestion(newQuestion);

    const newQuestionContainer = document.querySelector(".new-question-container");
    newQuestionContainer.style.display = "none";

    const messageContainer = document.createElement("div");
    messageContainer.classList.add("message-container");

    const message = document.createElement("h1");
    message.innerText = "You've successfully created a new question!";

    messageContainer.appendChild(message);
    document.body.appendChild(messageContainer);
})