const randomNumber = Math.floor(Math.random() * 100) + 1;

function checkGuess() {
  const guess = parseInt(document.getElementById("guessField").value);
  const message = document.getElementById("message");
  
  if (guess === randomNumber) {
    message.textContent = "Yeeey. You done it!";
    message.style.color = "green";
  } else if (guess > randomNumber) {
    message.textContent = "Try a lower number!";
    message.style.color = "blue";
    message.style.border = "2px solid black";
  } else {
    message.textContent = "Try a higher number!";
    message.style.color = "red";
  }
  console.log(randomNumber);
}