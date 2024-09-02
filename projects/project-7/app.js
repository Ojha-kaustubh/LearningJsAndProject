const quizData = [
    {
        question: "What is the capital of France?",
        options: ["Berlin", "Madrid", "Paris", "Lisbon"],
        answer: "Paris",
    },
    {
        question: "Which planet is known as the Red Planet?",
        options: ["Earth", "Venus", "Mars", "Jupiter"],
        answer: "Mars",
    },
    {
        question: "Who wrote 'Hamlet'?",
        options: ["Charles Dickens", "Jane Austen", "William Shakespeare", "Mark Twain"],
        answer: "William Shakespeare",
    },
];

let currentQuestionIndex = 0;
let score = 0;

const questionElement = document.getElementById('question');
const optionsElement = document.getElementById('options');
const nextButton = document.getElementById('next-btn');
const resultContainer = document.getElementById('result');
const scoreElement = document.getElementById('score');
const restartButton = document.getElementById('restart-btn');
const quizContainer = document.getElementById('quiz');

function loadQuestion() {
    resetState();
    const currentQuestion = quizData[currentQuestionIndex];
    questionElement.innerText = currentQuestion.question;
    
    currentQuestion.options.forEach(option => {
        const button = document.createElement('div');
        button.innerText = option;
        button.classList.add('option');
        button.addEventListener('click', () => selectOption(option));
        optionsElement.appendChild(button);
    });
}

function resetState() {
    nextButton.disabled = true;
    optionsElement.innerHTML = ''; // Clear previous options
}

function selectOption(selectedOption) {
    const currentQuestion = quizData[currentQuestionIndex];
    
    if (selectedOption === currentQuestion.answer) {
        score++;
        highlightCorrectOption(selectedOption);
    } else {
        highlightIncorrectOption(selectedOption, currentQuestion.answer);
    }
    
    nextButton.disabled = false;
}

function highlightCorrectOption(option) {
    const correctOption = [...optionsElement.children].find(el => el.innerText === option);
    if (correctOption) {
        correctOption.classList.add('correct');
    }
}

function highlightIncorrectOption(selectedOption, correctOption) {
    const selectedEl = [...optionsElement.children].find(el => el.innerText === selectedOption);
    const correctEl = [...optionsElement.children].find(el => el.innerText === correctOption);
    
    if (selectedEl) {
        selectedEl.classList.add('incorrect');
    }
    if (correctEl) {
        correctEl.classList.add('correct');
    }
}

nextButton.addEventListener('click', () => {
    currentQuestionIndex++;
    if (currentQuestionIndex < quizData.length) {
        loadQuestion();
    } else {
        showResult();
    }
});

function showResult() {
    quizContainer.classList.add('hidden');
    resultContainer.classList.remove('hidden');
    scoreElement.innerText = `${score} / ${quizData.length}`;
}

restartButton.addEventListener('click', () => {
    currentQuestionIndex = 0;
    score = 0;
    resultContainer.classList.add('hidden');
    quizContainer.classList.remove('hidden');
    loadQuestion();
});

// Initialize the quiz
loadQuestion();
