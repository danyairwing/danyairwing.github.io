
const intro_letter_delay = 0.7;

function LoadIntro() {
  var intro_div = document.getElementsByClassName("intro")[0];

  for (var index=0;index<intro_div.children.length;index++) {
    var letter = intro_div.children[index];
    var delay = ((index * intro_letter_delay)/2).toString() + "s";
    letter.style.animation="spin 4s linear infinite, transparency_switch 1s linear";
    letter.style.animationDelay = delay;
    letter.style.transitionDelay = delay;
  }

}
