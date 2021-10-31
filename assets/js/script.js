var quiz = document.getElementById('quiz');
var results = document.getElementById('results');
var submitBtn = document.getElementById('submit-btn');
var timerBtn = document.getElementById('timerCount');
var card = document.getElementById('question-card');
var questionTitle = document.getElementById('question-card--title');
var questions = document.getElementById('question-card---questions');
var score = 0;
var count = 0;
var quizQuestions = [
    {
        question: "Commonly used data types DO NOT include:",
        answers: [
             "strings",
             "booleans",
             "alerts",
             "numbers"
        ],
        correctAnswer: "2"
    },
    {
        question: "The condition in an if / else statement is enclosed within _______.",
        answers: [
             "quotes",
             "curly brackets",
             "parentheses",
             "square brackets"
        ],
        correctAnswer: "1"
    },
    {
        question: "Arrays in JavaScript can be used to store _______.",
        answers: [
             "numbers and strings",
             "other arrays",
             "booleans",
             "all of the above"
        ],
        correctAnswer: "3"
    },
    {
        question: "String values must be enclosed within _______ when being assigned to variables.",
        answers: [
             "commas",
             "curly brackets",
             "quotes",
             "parentheses"
        ],
        correctAnswer: "2"
    },
    {
        question: "A very useful tool used during development and debugging for printing content to the debugger is:",
        answers: [
             "JavaScript",
             "terminal / bash",
             "for loops",
             "console.log"
        ],
        correctAnswer: "3"
    }
]; 

// quiz
function createButtons(array) {
    for (var i = 0; i < array.length; i++) {
        var button = document.createElement("button");
        button.textContent = quizQuestions[count].answers[i]
        button.onclick = function() {
            /*var currentQuestion = quizQuestions[currentQuestionIndex];
            var currentQuestionIndex = 0;
            var finalQuestionIndex = quizQuestions.length;*/
            // clear buttons
            button.remove();
            // if correct then move on to next question without penalty
            for (var j = 0; j < quizQuestions.answers.length; j++) {
                if (quizQuestions[i].correctAnswer == quizQuestions[i].answers[j]) {
                    timerCount++;
                } 
            }
            
            // else subtract 10 seconds from timer and then move on to next question
            if (quizQuestions) {
                timerCount--;
            }
            // if count is greater than length of quizQuestions array then end quiz
            if (count > quizQuestions.length) {
                endQuiz()
            }
            console.log(count);
            nextQuestion()
        }
        questions.appendChild(button)
    }
}

function nextQuestion () {
    card.style.display = "block";
    questionTitle.innerHTML = quizQuestions[count].question;
    createButtons(quizQuestions[count].answers)

}

function endQuiz() {
    card.style.display = "none";
}

// results function
function showResults () {
    console.log("let's see the results!");
    quiz.style.display = "none";
    nextQuestion()

}

// timer function
function timer () {
    var timerCount = 100;
    var timerInterval = setInterval(function() {
        document.getElementById('timerCount').innerHTML=timerCount;
        timerCount--;
        if (timerCount === 0) {
            clearInterval(interval);
            alert("You're out of time!");
        }
    }, 1000);
}

nextQuestion();

// show results when you click on submit
timerBtn.addEventListener('click', timer);

