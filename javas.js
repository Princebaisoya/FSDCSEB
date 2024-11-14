// javas.js
const quizData = [
    {
        question: "What is the capital of France?",
        options: ["Paris", "New Delhi", "Berlin", "None of these"],
        correct: 0
    },
    {
        question: "Which of the folowing is the biggest Continent?",
        options: ["Africa", "America", "Asia", "None of these"],
        correct: 2
    },
    {
        question: "What is the Capital of Rajasthan?",
        options: ["Patna", "Jaipur", "New Delhi", "None of these"],
        correct: 1
    },
    {
        question: "Which is the longest river of the world?",
        options: ["Ganga", "Amazon", "Nile", "None of these"],
        correct: 2
    },
    {
        question: "What is UN used for?",
        options: ["United Nationals", "United Kingdom", "United Nations", "None of these"],
        correct: 2
    }
    // Add more questions as needed
];

let currentQuestion = 0;
let score = 0;
const userAnswers = new Array(quizData.length).fill(null);

const questionEl = document.getElementById('question');
const optionsForm = document.getElementById('options-form');
const nextBtn = document.getElementById('nextBtn');
const prevBtn = document.getElementById('prevBtn');
const resultEl = document.getElementById('result');
const quizEl = document.getElementById('quiz');
const scoreEl = document.getElementById('score');
const totalEl = document.getElementById('total');
const messageEl = document.getElementById('message');
const restartBtn = document.getElementById('restartBtn');

function loadQuestion(index) {
    const current = quizData[index];
    questionEl.textContent = current.question;
    current.options.forEach((option, i) => {
        document.getElementById(`label${i}`).textContent = option;
        document.getElementById(`option${i + 1}`).checked = userAnswers[index] === i;
    });
    prevBtn.disabled = index === 0;
    if(index === quizData.length -1){
        nextBtn.textContent = 'Submit';
    } else {
        nextBtn.textContent = 'Next';
    }
}
//function to show the marks

function showResult() {
    quizEl.classList.add('hidden');
    resultEl.classList.remove('hidden');
    score = userAnswers.reduce((acc, answer, index) => {
        return acc + (answer === quizData[index].correct ? 10 : 0);
    }, 0);
    const totalScore = quizData.length * 10;
    scoreEl.textContent = score;
    totalEl.textContent = totalScore;
    const percentage = (score / totalScore) * 100;
    if(percentage >= 70){
        messageEl.textContent = "Congratulations! You passed the quiz.";
    } else {
        messageEl.textContent = "Sorry, you failed the quiz. Better luck next time!";
    }
}

function restartQuiz(){
    currentQuestion = 0;
    score = 0;
    userAnswers.fill(null);
    resultEl.classList.add('hidden');
    quizEl.classList.remove('hidden');
    loadQuestion(currentQuestion);
}

nextBtn.addEventListener('click', () => {
    const selected = document.querySelector('input[name="option"]:checked');
    if(selected){
        userAnswers[currentQuestion] = parseInt(selected.value);
    }
    if(userAnswers[currentQuestion] === null){
        alert("Please select an answer before proceeding.");
        return;
    }
    if(currentQuestion < quizData.length -1){
        currentQuestion++;
        loadQuestion(currentQuestion);
    } else {
        showResult();
    }
});

prevBtn.addEventListener('click', () => {
    if(currentQuestion > 0){
        currentQuestion--;
        loadQuestion(currentQuestion);
    }
});

restartBtn.addEventListener('click', restartQuiz);

// Initialize quiz
loadQuestion(currentQuestion);
