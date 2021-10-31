var quiz = document.getElementById('quiz');
var results = document.getElementById('results');
var startBtn = document.getElementById('start')
var submitBtn = document.getElementById('submit-btn');
var startBtn = document.getElementById('start');
var card = document.getElementById('question-card');
var questionTitle = document.getElementById('questionCardTitle');
var questions = document.getElementById('question-card---questions');
var score = 0;
var count = 0;
var quizQuestions = {
        question1: "Commonly used data types DO NOT include:",
        answers1: [
             "strings",
             "booleans",
             "alerts",
             "numbers"
        ],
        correctAnswer1: "2",
    
        question2: "The condition in an if / else statement is enclosed within _______.",
        answers2: [
             "quotes",
             "curly brackets",
             "parentheses",
             "square brackets"
        ],
        correctAnswer2: "1",
    
        question3: "Arrays in JavaScript can be used to store _______.",
        answers3: [
             "numbers and strings",
             "other arrays",
             "booleans",
             "all of the above"
        ],
        correctAnswer3: "3",
    
        question4: "String values must be enclosed within _______ when being assigned to variables.",
        answers4: [
             "commas",
             "curly brackets",
             "quotes",
             "parentheses"
        ],
        correctAnswer4: "2",

        question5: "A very useful tool used during development and debugging for printing content to the debugger is:",
        answers5: [
             "JavaScript",
             "terminal / bash",
             "for loops",
             "console.log"
        ],
        correctAnswer5: "3"
}; 

// // quiz
// function createButtons(array) {
//     for (var i = 0; i < array.length; i++) {
//         var button = document.createElement("button");
//         button.textContent = quizQuestions[count].answers[i]
//         button.onclick = function() {
//             /*var currentQuestion = quizQuestions[currentQuestionIndex];
//             var currentQuestionIndex = 0;
//             var finalQuestionIndex = quizQuestions.length;*/
//             // clear buttons
//             button.remove();
//             // if correct then move on to next question without penalty
//             for (var j = 0; j < quizQuestions.answers.length; j++) {
//                 if (quizQuestions[i].correctAnswer == quizQuestions[i].answers[j]) {
//                     timerCount++;
//                 } 
            
            
//             // else subtract 10 seconds from timer and then move on to next question
//             if (quizQuestions) {
//                 timerCount--;
//             }
//             // if count is greater than length of quizQuestions array then end quiz
//             if (count > quizQuestions.length) {
//                 endQuiz()
//             }
//             console.log(count);
//             nextQuestion()
//         }
//         questions.appendChild(button)
//     }
// }

function question1() {
    questions.innerHTML = ""
    card.style.display = "block";
    questionTitle.innerHTML = quizQuestions.question1
    var question1Answer1 = document.createElement("button")
    var question1Answer2 = document.createElement("button")
    var question1Answer3 = document.createElement("button")
    var question1Answer4 = document.createElement("button")
    question1Answer1.innerHTML = quizQuestions.answers1[0]
    question1Answer2.innerHTML = quizQuestions.answers1[1]
    question1Answer3.innerHTML = quizQuestions.answers1[2]
    question1Answer4.innerHTML = quizQuestions.answers1[3]

    questions.appendChild(question1Answer1)
    questions.appendChild(question1Answer2)
    questions.appendChild(question1Answer3)
    questions.appendChild(question1Answer4)

    var button = document.createElement("button");
    button.textContent = quizQuestions.answers1;
    button.onclick = function() {
        // clear buttons
        button.remove();
        // if correct then move on to next question without penalty
        if (quizQuestions.answers1 == question1Answer3) {
                timerCount++;
            } 
        // else subtract 10 seconds from timer and then move on to next question
        if (quizQuestions.answers1 !== question1Answer3) {
            timerCount--;
        }
        return
    };

    question1Answer1.addEventListener('click', question2);
    question1Answer2.addEventListener('click', question2);
    question1Answer3.addEventListener('click', question2);
    question1Answer4.addEventListener('click', question2);
}

function question2() {
    questions.innerHTML = ""
    card.style.display = "block";
    console.log(quizQuestions.question2)
    questionTitle.innerHTML = quizQuestions.question2
    var question2Answer1 = document.createElement("button")
    var question2Answer2 = document.createElement("button")
    var question2Answer3 = document.createElement("button")
    var question2Answer4 = document.createElement("button")
    question2Answer1.innerHTML = quizQuestions.answers2[0]
    question2Answer2.innerHTML = quizQuestions.answers2[1]
    question2Answer3.innerHTML = quizQuestions.answers2[2]
    question2Answer4.innerHTML = quizQuestions.answers2[3]

    questions.appendChild(question2Answer1)
    questions.appendChild(question2Answer2)
    questions.appendChild(question2Answer3)
    questions.appendChild(question2Answer4)

    var button = document.createElement("button");
    button.textContent = quizQuestions.answers2;
    button.onclick = function() {
        // clear buttons
        button.remove();
        // if correct then move on to next question without penalty
        if (quizQuestions.answers2 == question2Answer2) {
                timerCount++;
            } 
        // else subtract 10 seconds from timer and then move on to next question
        if (quizQuestions.answers2 !== question2Answer2) {
            timerCount--;
        }
        return
    };

    question2Answer1.addEventListener('click', question3);
    question2Answer2.addEventListener('click', question3);
    question2Answer3.addEventListener('click', question3);
    question2Answer4.addEventListener('click', question3);
}

function question3() {
    questions.innerHTML = ""
    card.style.display = "block";
    console.log(quizQuestions.question3)
    questionTitle.innerHTML = quizQuestions.question3
    var question3Answer1 = document.createElement("button")
    var question3Answer2 = document.createElement("button")
    var question3Answer3 = document.createElement("button")
    var question3Answer4 = document.createElement("button")
    question3Answer1.innerHTML = quizQuestions.answers3[0]
    question3Answer2.innerHTML = quizQuestions.answers3[1]
    question3Answer3.innerHTML = quizQuestions.answers3[2]
    question3Answer4.innerHTML = quizQuestions.answers3[3]

    questions.appendChild(question3Answer1)
    questions.appendChild(question3Answer2)
    questions.appendChild(question3Answer3)
    questions.appendChild(question3Answer4)

    var button = document.createElement("button");
    button.textContent = quizQuestions.answers3;
    button.onclick = function() {
        // clear buttons
        button.remove();
        // if correct then move on to next question without penalty
        if (quizQuestions.answers3 == question3Answer4) {
                timerCount++;
            } 
        // else subtract 10 seconds from timer and then move on to next question
        if (quizQuestions.answers3 !== question3Answer4) {
            timerCount--;
        }
        return
    };

    question3Answer1.addEventListener('click', question4);
    question3Answer2.addEventListener('click', question4);
    question3Answer3.addEventListener('click', question4);
    question3Answer4.addEventListener('click', question4);
}

function question4() {
    questions.innerHTML = ""
    card.style.display = "block";
    console.log(quizQuestions.question4)
    questionTitle.innerHTML = quizQuestions.question4
    var question4Answer1 = document.createElement("button")
    var question4Answer2 = document.createElement("button")
    var question4Answer3 = document.createElement("button")
    var question4Answer4 = document.createElement("button")
    question4Answer1.innerHTML = quizQuestions.answers4[0]
    question4Answer2.innerHTML = quizQuestions.answers4[1]
    question4Answer3.innerHTML = quizQuestions.answers4[2]
    question4Answer4.innerHTML = quizQuestions.answers4[3]

    questions.appendChild(question4Answer1)
    questions.appendChild(question4Answer2)
    questions.appendChild(question4Answer3)
    questions.appendChild(question4Answer4)

    var button = document.createElement("button");
    button.textContent = quizQuestions.answers4;
    button.onclick = function() {
        // clear buttons
        button.remove();
        // if correct then move on to next question without penalty
        if (quizQuestions.answers4 == question4Answer3) {
                timerCount++;
            } 
        // else subtract 10 seconds from timer and then move on to next question
        if (quizQuestions.answers4 !== question4Answer3) {
            timerCount--;
        }
        return
    };

    question4Answer1.addEventListener('click', question5);
    question4Answer2.addEventListener('click', question5);
    question4Answer3.addEventListener('click', question5);
    question4Answer4.addEventListener('click', question5);
   
}

function question5() {
    questions.innerHTML = ""
    card.style.display = "block";
    console.log(quizQuestions.question5)
    questionTitle.innerHTML = quizQuestions.question5
    var question5Answer1 = document.createElement("button")
    var question5Answer2 = document.createElement("button")
    var question5Answer3 = document.createElement("button")
    var question5Answer4 = document.createElement("button")
    question5Answer1.innerHTML = quizQuestions.answers5[0]
    question5Answer2.innerHTML = quizQuestions.answers5[1]
    question5Answer3.innerHTML = quizQuestions.answers5[2]
    question5Answer4.innerHTML = quizQuestions.answers5[3]

    questions.appendChild(question5Answer1)
    questions.appendChild(question5Answer2)
    questions.appendChild(question5Answer3)
    questions.appendChild(question5Answer4)

    var button = document.createElement("button");
    button.textContent = quizQuestions.answers5;
    button.onclick = function() {
        // clear buttons
        button.remove();
        // if correct then move on to next question without penalty
        if (quizQuestions.answers5 == question5Answer4) {
                timerCount++;
            } 
        // else subtract 10 seconds from timer and then move on to next question
        if (quizQuestions.answers5 !== question5Answer4) {
            timerCount--;
        }
        return
    };

    question5Answer1.addEventListener('click', showResults);
    question5Answer2.addEventListener('click', showResults);
    question5Answer3.addEventListener('click', showResults);
    question5Answer4.addEventListener('click', showResults);
}

// function endQuiz() {
//     card.style.display = "none";
//     submitBtn.addEventListener('click', showResults)
// }

// results function
function showResults() {
    console.log("let's see the results!");
    quiz.style.display = "none";


}

// timer function
function timer() {
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

function startQuiz() {
    quiz.style.display = "none";
    question1();
}

startBtn.addEventListener('click', timer);
startBtn.addEventListener('click', startQuiz);

