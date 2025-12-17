const questions = [
  {
    question: "What is the capital of France?",
    options: ["Paris", "London", "Berlin", "Madrid"],
    answer: "Paris",
  },
  {
    question: "Who wrote 'Romeo and Juliet'?",
    options: ["Shakespeare", "Dickens", "Hemingway", "Austen"],
    answer: "Shakespeare",
  },
  {
    question: "What is the largest planet in our solar system?",
    options: ["Earth", "Jupiter", "Saturn", "Mars"],
    answer: "Jupiter",
  },
  {
    question: "Who discovered gravity?",
    options: ["Isaac Newton", "Albert Einstein", "Galileo", "Marie Curie"],
    answer: "Isaac Newton",
  },
  {
    question: "What is the chemical symbol for water?",
    options: ["H2O", "CO2", "O2", "N2"],
    answer: "H2O",
  },
];

let currentQuestionIndex = 0;
let score = 0;

const questionElement = document.getElementById("question");
const optionsContainer = document.getElementById("options-container");
const scoreDisplay = document.getElementById("score");
const nextButton = document.getElementById("next-button");

function loadQuestion() {
  const currentQuestion = questions[currentQuestionIndex];
  questionElement.textContent = currentQuestion.question;

  optionsContainer.innerHTML = "";
  currentQuestion.options.forEach(option => {
    const button = document.createElement("button");
    button.textContent = option;
    button.onclick = () => checkAnswer(option);
    optionsContainer.appendChild(button);
  });
}

function checkAnswer(selectedOption) {
  const correctAnswer = questions[currentQuestionIndex].answer;
  if (selectedOption === correctAnswer) {
    score++;
    alert("Correct!");
  } else {
    alert(`Wrong! The correct answer was ${correctAnswer}.`);
  }

  scoreDisplay.textContent = `Score: ${score}`;

  // Move to the next question
  currentQuestionIndex++;
  if (currentQuestionIndex < questions.length) {
    loadQuestion();
  } else {
    alert("Game over! Final score: " + score);
  }
}

nextButton.onclick = loadQuestion;

// Start the quiz by loading the first question
loadQuestion();
