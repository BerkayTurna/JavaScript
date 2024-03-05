function handleClick() {
  let buttonHtml = this.innerHTML;

  switch (buttonHtml) {
    case "w":
      const audioElement1 = new Audio("./sounds/tom-1.mp3");
      audioElement1.play();
      break;
    case "a":
      const audioElement2 = new Audio("./sounds/tom-2.mp3");
      audioElement2.play();
      break;
    case "s":
      const audioElement3 = new Audio("./sounds/tom-3.mp3");
      audioElement3.play();
      break;
    case "d":
      const audioElement4 = new Audio("./sounds/tom-4.mp3");
      audioElement4.play();
      break;
    case "j":
      const audioElement5 = new Audio("./sounds/snare.mp3");
      audioElement5.play();
      break;
    case "k":
      const audioElement6 = new Audio("./sounds/crash.mp3");
      audioElement6.play();
      break;
    case "l":
      const audioElement7 = new Audio("./sounds/kick-bass.mp3");
      audioElement7.play();
      break;
  }
};

const numberOfButtons = document.querySelectorAll(".drum").length;

for (let i = 0; i < numberOfButtons; i++) {
  document.querySelectorAll("button")[i].addEventListener("click", handleClick);
}
