class UsersRepository {
    constructor() {

    }

    getAllUsers() {
        const apiURL = "http://localhost:3000/users";

        const usersList = [];

        const xmlHttp = new XMLHttpRequest();

        xmlHttp.onreadystatechange = function () {
            if (this.readyState == XMLHttpRequest.DONE && this.status == 200) {
                const users = JSON.parse(this.responseText);

                for (let index = 0; index < users.length; index++) {

                    usersList.push(users[index]);
                }
            }
        }

        xmlHttp.open("GET", apiURL);
        xmlHttp.send();

        return usersList;
    }

    saveUser(userData) {
        const apiURL = "http://localhost:3000/users";

        const newUser = {
            username: userData.getUsername(),
            password: userData.getPassword(),
            firstName: userData.getFirstName(),
            lastName: userData.getLastName(),
            email: userData.getEmail(),
            description: userData.getDescription(),
            isAdmin: userData.getIsAdmin()
        }

        const xmlHttp = new XMLHttpRequest();

        xmlHttp.onreadystatechange = function () {
            if (this.readyState == XMLHttpRequest.DONE && this.status == 201) {
                console.log(this.responseText);
            }
        }

        xmlHttp.open("POST", `${apiURL}`, true);

        xmlHttp.setRequestHeader('Content-type', 'application/json');

        xmlHttp.send(JSON.stringify(newUser));
    }

    updateUser(userData, id) {
        const apiURL = "http://localhost:3000/users";

        const newUser = {
            username: userData.getUsername(),
            password: userData.getPassword(),
            firstName: userData.getFirstName(),
            lastName: userData.getLastName(),
            email: userData.getEmail(),
            description: userData.getDescription(),
            isAdmin: userData.getIsAdmin()
        }

        const xmlHttp = new XMLHttpRequest();

        xmlHttp.onreadystatechange = function () {
            if (this.readyState == XMLHttpRequest.DONE && this.status == 200) {
                console.log(this.responseText);
            }
        }

        xmlHttp.open("PUT", `${apiURL}/${id}`, true);

        xmlHttp.setRequestHeader('Content-type', 'application/json');

        xmlHttp.send(JSON.stringify(newUser));
    }

    saveResult(resultData) {
        const apiURL = "http://localhost:3000/results";

        const newResult = {
            userID: resultData.getUserId(),
            category: resultData.getCategory(),
            difficulty: resultData.getDifficulty(),
            language: resultData.getLanguage(),
            date: resultData.getDate(),
            score: resultData.getScore()
        }

        const xmlHttp = new XMLHttpRequest();

        xmlHttp.onreadystatechange = function () {
            if (this.readyState == XMLHttpRequest.DONE && this.status == 201) {
                console.log(this.responseText);
            }
        }

        xmlHttp.open("POST", `${apiURL}`, true);

        xmlHttp.setRequestHeader('Content-type', 'application/json');

        xmlHttp.send(JSON.stringify(newResult));
    }

    getResultByUserId(id) {
        const apiURL = "http://localhost:3000/results";

        const resultsList = [];

        const xmlHttp = new XMLHttpRequest();

        xmlHttp.onreadystatechange = function () {
            if (this.readyState == XMLHttpRequest.DONE && this.status == 200) {
                const results = JSON.parse(this.responseText);

                for (let index = 0; index < results.length; index++) {

                    if (results[index].userID === id) {
                        resultsList.push(results[index]);
                    }
                }
            }
        }

        xmlHttp.open("GET", apiURL);
        xmlHttp.send();

        return resultsList;
    }

    saveUserMessage(messageData) {
        const apiURL = "http://localhost:3000/messages";

        const newMessage = {
            userID: messageData.getUserId(),
            firstName: messageData.getFirstName(),
            lastName: messageData.getLastName(),
            email: messageData.getEmail(),
            message: messageData.getMessage()
        }

        const xmlHttp = new XMLHttpRequest();

        xmlHttp.onreadystatechange = function () {
            if (this.readyState == XMLHttpRequest.DONE && this.status == 201) {
                console.log(this.responseText);
            }
        }

        xmlHttp.open("POST", `${apiURL}`, true);

        xmlHttp.setRequestHeader('Content-type', 'application/json');

        xmlHttp.send(JSON.stringify(newMessage));
    }
}


class QuestionsRepository {
    constructor() {

    }

    getAllQuestionsEn() {
        const apiURL = "  http://localhost:3000/questions";

        const questionList = [];

        const xmlHttp = new XMLHttpRequest();

        xmlHttp.onreadystatechange = function () {
            if (this.readyState == XMLHttpRequest.DONE && this.status == 200) {
                const questions = JSON.parse(this.responseText);

                for (let index = 0; index < questions.length; index++) {

                    questionList.push(questions[index]);
                }
            }
        }

        xmlHttp.open("GET", apiURL);
        xmlHttp.send();

        return questionList;
    }

    getTest(category, difficulty, language) {
        const apiURL = "  http://localhost:3000/questions";

        const questionList = [];

        const xmlHttp = new XMLHttpRequest();

        xmlHttp.onreadystatechange = function () {
            if (this.readyState == XMLHttpRequest.DONE && this.status == 200) {
                const questions = JSON.parse(this.responseText);

                for (let index = 0; index < questions.length; index++) {

                    if(questions[index].category === category && questions[index].difficulty === difficulty && questions[index].language === language) {
                        questionList.push(questions[index]);
                    }
                }
            }
        }

        xmlHttp.open("GET", apiURL);
        xmlHttp.send();

        return questionList;
    }

    saveQuestion(questionData) {
        const apiURL = "http://localhost:3000/questions";

        const newQuestion = {
            category: questionData.getCategory(),
            language: questionData.getLanguage(),
            difficulty: questionData.getDifficulty(),
            question: questionData.getQuestion(),
            correct_answer: questionData.getCorrectAnswer(),
            incorrect_answers: questionData.getIncorrectAnswers()
        }

        const xmlHttp = new XMLHttpRequest();

        xmlHttp.onreadystatechange = function () {
            if (this.readyState == XMLHttpRequest.DONE && this.status == 201) {
                console.log(this.responseText);
            }
        }

        xmlHttp.open("POST", `${apiURL}`, true);

        xmlHttp.setRequestHeader('Content-type', 'application/json');

        xmlHttp.send(JSON.stringify(newQuestion));
    }

    updateQuestion(questionData, id) {
        const apiURL = "http://localhost:3000/questions";

        const updatedQuestion = {
            category: questionData.getCategory(),
            language: questionData.getLanguage(),
            difficulty: questionData.getDifficulty(),
            question: questionData.getQuestion(),
            correct_answer: questionData.getCorrectAnswer(),
            incorrect_answers: questionData.getIncorrectAnswers()
        }

        const xmlHttp = new XMLHttpRequest();

        xmlHttp.onreadystatechange = function () {
            if (this.readyState == XMLHttpRequest.DONE && this.status == 200) {
                console.log(this.responseText);
            }
        }

        xmlHttp.open("PUT", `${apiURL}/${id}`, true);

        xmlHttp.setRequestHeader('Content-type', 'application/json');

        xmlHttp.send(JSON.stringify(updatedQuestion));
    }

    deleteQuestion(id) {
        const apiURL = "http://localhost:3000/questions";

        const xmlHttp = new XMLHttpRequest();

        xmlHttp.onreadystatechange = function () {
            if (this.readyState == XMLHttpRequest.DONE && this.status == 200) {
                console.log(this.responseText);
            }
        }

        xmlHttp.open("DELETE", `${apiURL}/${id}`, true);

        xmlHttp.send();
    }
}

class User {
    #username;
    #password;
    #firstName;
    #lastName;
    #email;
    #description;
    #isAdmin;

    constructor(username, password, firstName, lastName, email, description, isAdmin) {
        this.#username = username;
        this.#password = password;
        this.#firstName = firstName;
        this.#lastName = lastName;
        this.#email = email;
        this.#description = description;
        this.#isAdmin = isAdmin;
    }

    getUserFullName() {
        return `${this.#firstName} - ${this.#lastName}`;
    }

    getUsername() {
        return `${this.#username}`;
    }

    getPassword() {
        return `${this.#password}`;
    }

    getFirstName() {
        return `${this.#firstName}`;
    }

    getLastName() {
        return `${this.#lastName}`;
    }

    getEmail() {
        return `${this.#email}`;
    }

    getDescription() {
        return `${this.#description}`;
    }

    getIsAdmin() {
        return `${this.#isAdmin}`;
    }
}

class Question {
    #category;
    #language;
    #difficulty;
    #question;
    #correctAnswer;
    #incorrectAnswers;

    constructor(category, language, difficulty, question, correctAnswer, incorrectAnswers) {
        this.#category = category;
        this.#language = language;
        this.#difficulty = difficulty;
        this.#question = question;
        this.#correctAnswer = correctAnswer;
        this.#incorrectAnswers = incorrectAnswers;
    }

    getCategory() {
        return `${this.#category}`;
    }

    getLanguage() {
        return `${this.#language}`;
    }

    getDifficulty() {
        return `${this.#difficulty}`;
    }

    getQuestion() {
        return `${this.#question}`;
    }

    getCorrectAnswer() {
        return `${this.#correctAnswer}`;
    }

    getIncorrectAnswers() {
        return `${this.#incorrectAnswers}`;
    }
}

class Result {
    #userID;
    #category;
    #difficulty;
    #language;
    #date;
    #score;

    constructor(userID, category, difficulty, language, date, score) {
        this.#userID = userID;
        this.#category = category;
        this.#difficulty = difficulty;
        this.#language = language;
        this.#date = date;
        this.#score = score;
    }

    getUserId() {
        return `${this.#userID}`;
    }

    getCategory() {
        return `${this.#category}`;
    }

    getDifficulty() {
        return `${this.#difficulty}`;
    }

    getLanguage() {
        return `${this.#language}`;
    }

    getDate() {
        return `${this.#date}`;
    }

    getScore() {
        return `${this.#score}`;
    }
}

class Message {
    #userID;
    #firstName;
    #lastName;
    #email;
    #message;

    constructor(userID, firstName, lastName, email, message) {
        this.#userID = userID;
        this.#firstName = firstName;
        this.#lastName = lastName;
        this.#email = email;
        this.#message = message;
    }

    getUserId() {
        return `${this.#userID}`;
    }

    getFirstName() {
        return `${this.#firstName}`;
    }

    getLastName() {
        return `${this.#lastName}`;
    }

    getEmail() {
        return `${this.#email}`;
    }

    getMessage() {
        return `${this.#message}`;
    }
}