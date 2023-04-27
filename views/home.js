function generateTest() {
    const pageContainer = document.querySelector(".page-container");

    const categorySelect = document.querySelector(".category-select");
    const categoryValue = categorySelect.value;

    const difficultySelect = document.querySelector(".difficulty-select");
    const difficultyValue = difficultySelect.value;

    const languageSelect = document.querySelector(".language-select");
    const languageValue = languageSelect.value;


    const usersRepository = new UsersRepository();

    const questionsRepository = new QuestionsRepository();

    const test = questionsRepository.getTest(categoryValue, difficultyValue, languageValue);



    setTimeout(() => {
        const quizContainer = document.createElement("div");
        quizContainer.classList.add("quiz-container");

        let correctAnswersList = [];

        for (i = 0; i < test.length; i++) {
            //get a list of all the correct answers
            correctAnswersList.push(test[i].correct_answer);

            //display the question in a container to the user
            const questionContainer = document.createElement("div");

            const questionText = document.createElement("p");
            questionText.innerText = test[i].question;
            questionContainer.appendChild(questionText);



            //get the answers and process them in order to be of random order
            let answersList = test[i].incorrect_answers;
            answersList.push(test[i].correct_answer);

            const answersListLength = answersList.length;

            let randomAnswersList = [];

            for (let index = 0; index < answersListLength; index++) {
                const randomElementIndex = Math.floor(Math.random() * answersList.length);
                const randomElement = answersList[randomElementIndex];

                randomAnswersList.push(randomElement);

                answersList.splice(randomElementIndex, 1);
            }

            console.log(randomAnswersList);

            //display the randomAnswersList to the user
            const answersContainer = document.createElement("form");
            answersContainer.classList.add("answers-container");

            const nameAtrribute = Math.random().toString(36).substring(2, 7);

            for (let j = 0; j < randomAnswersList.length; j++) {
                const singleAnswerContainer = document.createElement("div");

                const answerInput = document.createElement("input");
                answerInput.setAttribute("type", "radio");
                answerInput.setAttribute("name", nameAtrribute);
                answerInput.setAttribute("id", randomAnswersList[j]);
                answerInput.setAttribute("value", randomAnswersList[j]);
                singleAnswerContainer.appendChild(answerInput);

                const answerLabel = document.createElement("label");
                answerLabel.setAttribute("for", randomAnswersList[j]);
                answerLabel.innerText = randomAnswersList[j];
                singleAnswerContainer.appendChild(answerLabel);

                answersContainer.appendChild(singleAnswerContainer);
            }

            questionContainer.appendChild(answersContainer);

            quizContainer.appendChild(questionContainer);

            pageContainer.appendChild(quizContainer);
        }

        //add a submit button and do the logic regarding it + score
        const submitButton = document.createElement("button");
        submitButton.innerText = "Submit Answers";
        submitButton.classList.add("btn");
        submitButton.classList.add("btn-outline-secondary");

        pageContainer.appendChild(submitButton);

        submitButton.addEventListener("click", function () {

            let score = 0;

            const quizContainerChildNodes = quizContainer.childNodes;

            for (let i = 0; i < quizContainerChildNodes.length; i++) {

                const questionContainerNodes = quizContainerChildNodes[i].childNodes;
                const answersContainer = questionContainerNodes.item(1);

                for (let j = 0; j < answersContainer.length; j++) {

                    if (answersContainer[j].checked) {
                        console.log(`Your answer was: ${answersContainer[j].value}`);
                        if (answersContainer[j].value === correctAnswersList[i]) {
                            console.log(`The correct answer was: ${correctAnswersList[i]}`);
                            console.log("correct");
                            score += 10;
                        } else {
                            console.log(`The correct answer was: ${correctAnswersList[i]}`);
                            console.log("incorrect");
                        }
                    }

                }
            }

            console.log(score);

            const dropdownContainer = document.querySelector(".page-container");
            dropdownContainer.style.display = "none";

            quizContainer.style.display = "none";

            submitButton.style.display = "none";


            const scoreContainer = document.createElement("div");
            scoreContainer.classList.add("score-container");

            const scoreText = document.createElement("h2");
            scoreText.innerText = `Congratulations! You've completed the Quiz! \n You scored ${score} out of 100 points.`;

            scoreContainer.appendChild(scoreText);
            document.body.appendChild(scoreContainer);

            const userId = localStorage.getItem("currentUserID");

            const date = new Date();

            let day = date.getDate();
            let month = date.getMonth() + 1;
            let year = date.getFullYear();

            const todaysDate = `${day}/${month}/${year}`;

            const result = new Result(
                userId,
                categoryValue,
                difficultyValue,
                languageValue,
                todaysDate,
                score
            );

            usersRepository.saveResult(result);

        })

        console.log(correctAnswersList);

    }, 500);//sa nu uiti sa schimbi la final aici cu mai putin pentru performance
}