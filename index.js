window.addEventListener("load", () => {
  let sounds = document.querySelectorAll(".sound");
  let pads = document.querySelectorAll(".pads div");
  let visual = document.querySelector(".visual");
  let colors = [
    "#60d394",
    "#d36061",
    "#c060d4",
    "#d3d161",
    "#606bd4",
    "#60c2d4"
  ];

  pads.forEach((pad, index) => {
    pad.addEventListener("click", function() {
      sounds[index].currentTime = 0;
      sounds[index].play();
      createBubble(index);
    });
  });

  const createBubble = index => {
    //Create bubbles
    const bubble = document.createElement("div");
    visual.appendChild(bubble);
    bubble.style.backgroundColor = colors[index];
    bubble.style.animation = `jump 1s ease`;
    bubble.addEventListener("animationend", function() {
      visual.removeChild(this);
    });
  };
});
