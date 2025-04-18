const questions = [
  {
    question: "What’s the primary macronutrient for muscle growth?",
    answers: ["Carbs", "Fats", "Proteins", "Vitamins"],
    correct: 2
  },
  {
    question: "How many days a week should you train for optimal growth?",
    answers: ["1", "2", "3–5", "7"],
    correct: 2
  },
  {
    question: "Which exercise targets your chest muscles?",
    answers: ["Squats", "Push-ups", "Deadlifts", "Pull-ups"],
    correct: 1
  },
  {
    question: "What’s most important for fat loss?",
    answers: ["Cardio", "Supplements", "Calorie deficit", "Protein shakes"],
    correct: 2
  },
  {
    question: "Best time to stretch muscles?",
    answers: ["Before warm-up", "After workout", "During lifting", "Never"],
    correct: 1
  }
];

let currentQuestion = 0;
let score = 0;

const questionEl = document.getElementById("question");
const answerBtns = document.querySelectorAll(".answer-btn");
const resultEl = document.getElementById("result");
const nextBtn = document.getElementById("next-btn");
const restartBtn = document.getElementById("restart-btn");

function loadQuestion() {
  const q = questions[currentQuestion];
  questionEl.textContent = q.question;
  answerBtns.forEach((btn, i) => {
    btn.textContent = q.answers[i];
    btn.disabled = false;
    btn.style.backgroundColor = "#f9f9f9";
    btn.style.color = "#333";
  });
  resultEl.textContent = "";
  nextBtn.style.display = "none";
}

function checkAnswer(selected) {
  const correct = questions[currentQuestion].correct;
  answerBtns.forEach(btn => btn.disabled = true);

  if (selected === correct) {
    resultEl.textContent = "✅ Correct!";
    resultEl.style.color = "green";
    score++;
    answerBtns[selected].style.backgroundColor = "green";
    answerBtns[selected].style.color = "white";
  } else {
    resultEl.textContent = `❌ Wrong! Correct answer: ${questions[currentQuestion].answers[correct]}`;
    resultEl.style.color = "red";
    answerBtns[selected].style.backgroundColor = "red";
    answerBtns[selected].style.color = "white";
    answerBtns[correct].style.backgroundColor = "green";
    answerBtns[correct].style.color = "white";
  }

  nextBtn.style.display = "inline-block";
}

function nextQuestion() {
  currentQuestion++;
  if (currentQuestion < questions.length) {
    loadQuestion();
  } else {
    showFinalScore();
  }
}

function showFinalScore() {
  questionEl.textContent = `🎉 You scored ${score} out of ${questions.length}!`;
  answerBtns.forEach(btn => btn.style.display = "none");
  resultEl.textContent = "";
  nextBtn.style.display = "none";
  restartBtn.style.display = "inline-block";
}

function restartQuiz() {
  currentQuestion = 0;
  score = 0;
  answerBtns.forEach(btn => btn.style.display = "block");
  restartBtn.style.display = "none";
  loadQuestion();
}

loadQuestion();
