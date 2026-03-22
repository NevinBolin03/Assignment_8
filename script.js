console.log("script.js connected!");

const selectedAnswers = {};

const questionBlocks = document.querySelectorAll(".question-block");

questionBlocks.forEach((block) => {
  const questionId = block.dataset.question;
  const buttons = block.querySelectorAll(".answer-btn");

  buttons.forEach((button) => {
    button.addEventListener("click", () => {
      buttons.forEach((btn) => {
        btn.classList.remove("selected");
      });

      button.classList.add("selected");
      selectedAnswers[questionId] = button.dataset.answer;

      console.log("Saved answers:", selectedAnswers);
    });
  });
});

function displayResult() {
  const totals = {
    steak: 0,
    pizza: 0,
    tacos: 0
  };

  for (const question in selectedAnswers) {
    const answer = selectedAnswers[question];
    totals[answer]++;
  }

  let resultText = "";

  if (totals.steak >= totals.pizza && totals.steak >= totals.tacos) {
    resultText = "You are STEAK 🥩";
  } else if (totals.pizza >= totals.steak && totals.pizza >= totals.tacos) {
    resultText = "You are PIZZA 🍕";
  } else {
    resultText = "You are TACOS 🌮";
  }

  document.getElementById("result").textContent = resultText;
}

document.getElementById("result-btn").addEventListener("click", displayResult);