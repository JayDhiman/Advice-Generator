const adviceIdElement = document.querySelector(".advice-id");
const adviceTextElement = document.querySelector(".advice-text");
const diceButton = document.querySelector(".dice-button");

async function fetchAdvice() {
  try {
    const response = await fetch("https://api.adviceslip.com/advice");
    const data = await response.json();
    const { id, advice } = data.slip;
    adviceIdElement.textContent = `Advice #${id}`;
    adviceTextElement.textContent = `"${advice}"`;
  } catch (error) {
    adviceTextElement.textContent = "Could not fetch advice. Try again!";
    console.error(error);
  }
}

diceButton.addEventListener("click", fetchAdvice);

// Fetch initial advice on page load
fetchAdvice();
