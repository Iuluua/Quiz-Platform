const questionId = localStorage.getItem("questionID");
console.log(questionId);

const questionCategory = localStorage.getItem("questionCategory");
console.log(questionCategory);

const questionLanguage = localStorage.getItem("questionLanguage");
console.log(questionLanguage);

const questionDifficulty = localStorage.getItem("questionDifficulty");
console.log(questionDifficulty);

const question = localStorage.getItem("question");
console.log(question);

const correctAnswer = localStorage.getItem("correctAnswer");
console.log(correctAnswer);

const incorrectAnswers = localStorage.getItem("incorrecAnswers");
console.log(incorrectAnswers);

const questionInput = document.getElementById("question");
questionInput.value = question;

const correctAnswerInput = document.getElementById("correctAnswer");
correctAnswerInput.value = correctAnswer;

const incorrectAnswersInput = document.getElementById("incorrectAnswers");
incorrectAnswersInput.value = incorrectAnswers;

const updateButton = document.querySelector(".question-data-container button");

updateButton.addEventListener("click", function() {
    const questionsRepository = new QuestionsRepository();

    const updatedQuestion = new Question(
        questionCategory,
        questionLanguage,
        questionDifficulty,
        questionInput.value,
        correctAnswerInput.value,
        incorrectAnswersInput.value
    );

    questionsRepository.updateQuestion(updatedQuestion, questionId);

    localStorage.removeItem("questionID");
    localStorage.removeItem("questionCategory");
    localStorage.removeItem("questionLanguage");
    localStorage.removeItem("questionDifficulty");
    localStorage.removeItem("question");
    localStorage.removeItem("correctAnswer");
    localStorage.removeItem("incorrecAnswers");

    const questionDataContainer = document.querySelector(".question-data-container");
    questionDataContainer.style.display = "none";

    const successMessageContainer = document.createElement("div");
    successMessageContainer.classList.add("success-message-container");

    const successMessage = document.createElement("h1");
    successMessage.innerText = "You've successfully updated the question!";

    successMessageContainer.appendChild(successMessage);
    document.body.appendChild(successMessageContainer);
})