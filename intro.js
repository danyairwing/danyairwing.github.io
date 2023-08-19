
const intro_letter_delay = 0.2;

function LoadIntro() {
  var intro_div = document.getElementsByClassName("intro")[0];

  for (var index=0;index<intro_div.children.length;index++) {
    var letter = intro_div.children[index];
    var delay = (index/5).toString() + "s";
    letter.style.animation="spin 4s linear infinite";
    letter.style.animationDelay = delay;
    letter.style.transitionDelay = delay;
    letter.style.color = "white";
  }

}
