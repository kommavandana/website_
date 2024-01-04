const questions = [
    {
        question: "What is your age ?",
        choices: ["20", "23", "24", "21"],
        correctAnswer: "B"
    },
    {
        question: "Which planet is known as the Red Planet?",
        choices: ["Mars", "Earth", "Venus"],
        correctAnswer: "A"
    },
    {
        question: "What is the capital of France?",
        choices: ["London", "Berlin", "Paris"],
        correctAnswer: "C"
    }
];

let currentQuestion = 0;
let score = 0;

const questionContainer = document.getElementById("question-container");
const questionElement = document.getElementById("question");
const choicesElement = document.getElementById("choices");
const resultContainer = document.getElementById("result-container");
const resultElement = document.getElementById("result");
const nextButton = document.getElementById("next-button");

function showQuestion() {
    const question = questions[currentQuestion];
    questionElement.textContent = `Question ${currentQuestion + 1}: ${question.question}`;

    choicesElement.innerHTML = "";
    question.choices.forEach((choice, index) => {
        const choiceItem = document.createElement("li");
        choiceItem.innerHTML = `<input type="radio" name="choice" value="${String.fromCharCode(65 + index)}">${String.fromCharCode(65 + index)}) ${choice}`;
        choicesElement.appendChild(choiceItem);
    });
}

function checkAnswer() {
    const selectedChoice = document.querySelector('input[name="choice"]:checked');

    if (!selectedChoice) {
        return;
    }

    const userAnswer = selectedChoice.value;
    if (userAnswer === questions[currentQuestion].correctAnswer) {
        score++;
    }

    currentQuestion++;

    if (currentQuestion < questions.length) {
        showQuestion();
    } else {
        showResult();
    }
}

function showResult() {
    questionContainer.style.display = "none";
    resultContainer.style.display = "block";
    resultElement.textContent = `You got ${score} out of ${questions.length} questions correct!`;
}

nextButton.addEventListener("click", checkAnswer);
showQuestion();




















