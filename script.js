console.log("script.js connected!");

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
      console.log(selectedAnswers);
    });
  });
});

function displayResult() {
  const results = {
    steak: 0,
    pizza: 0,
    tacos: 0
  };

  for (let question in selectedAnswers) {
    const answer = selectedAnswers[question];
    results[answer]++;
  }

  let finalResult = "";
  let finalMessage = "";

  if (results.steak >= results.pizza && results.steak >= results.tacos) {
    finalResult = "Steak";
    finalMessage = "You are Steak 🥩 — bold, classic, and dependable.";
  } else if (results.pizza >= results.steak && results.pizza >= results.tacos) {
    finalResult = "Pizza";
    finalMessage = "You are Pizza 🍕 — relaxed, fun, and everybody likes you.";
  } else {
    finalResult = "Tacos";
    finalMessage = "You are Tacos 🌮 — energetic, exciting, and full of flavor.";
  }

  const resultContainer = document.getElementById("result-container");
  resultContainer.innerHTML = `
    <h2>Your Result: ${finalResult}</h2>
    <p>${finalMessage}</p>
  `;
}

document.getElementById("show-result-btn").addEventListener("click", displayResult);// final commit
