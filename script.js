const audio = new Audio("pop-39222.mp3");
const buttons = document.querySelectorAll("button");
const a = document.querySelectorAll("a");

buttons.forEach(button => {
  button.addEventListener("click", () => {
    audio.play();
  });
});


a.forEach(a => {
    a.addEventListener("click", () => {
      audio.play();
      
    });
  });