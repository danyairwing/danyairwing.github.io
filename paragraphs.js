var paragraphs = {
  0: {
    "title":"INFO",

    "content":`
    HELLO AND WELCOME TO MY WEBSITE. <br> I'M A 14 YEAR OLD ARTIST FROM BELARUS, I DO MUSIC AND GAME DEVELOPMENT. <br>
    THIS WEBSITE CONTAINS ALL INFORMATION THAT YOU NEED.

    `
  },
  1: {
    "title":"CONTACT AND PORTFOLIO",

    "content":`
    CONTACT LINKS: <br> <br>
    MAIL:     <a href="mailto:danya.irwing@gmail.com"> DANYA.IRWING@GMAIL.COM </a> <br>
    TELEGRAM: <a href="https://t.me/ziggomatic17"> @ZIGGOMATIC17 </a> <br>
    DISCORD:  @DANYAIRWING <br>
    <br>
    PORTFOLIO LINKS: <br> <br>
    TWITTER:  <a href="https://twitter.com/@danyairwing"> @DANYAIRWING </a> <br>
    ROBLOX:   <a href="https://www.roblox.com/users/382383327/profile"> IRW_ING </a> <br>
    SOUNDCLOUD:   <a href="https://soundcloud.com/danyairwing"> HEXADECIMALBLISS </a> <br>
    BANDCAMP:   <a href="https://irwing.bandcamp.com"> HEXADECIMALBLISS </a> <br>

    `
  },

  "length":2
}

var paragraphs_divs = {}

function loadParagraphs() {
  var text_div = document.getElementsByClassName("paragraph-text")[0];
  var paragraph_div = document.getElementsByClassName("paragraph")[0];
  var main_div = document.getElementsByClassName("main")[0];
  var exit_button = paragraph_div.children[0];
  var paragraph_example_button = document.getElementsByClassName("button-example")[0];

  exit_button.onclick = function() {
    paragraph_div.style.opacity = "0";
    paragraph_div.style.visibility = "hidden";
    main_div.style.filter = "blur(0px)";
  }


  for (var index=0;index<paragraphs.length;index++) {
    let paragraph = paragraphs[index];

    let button = paragraph_example_button.cloneNode(true);
    paragraph_example_button.parentElement.appendChild(button);
    button.id = index;

    button.innerHTML = paragraph["title"];

    button.onclick = function(click) {
      let paragraph = paragraphs[click.target.id];
      text_div.innerHTML = paragraph["content"];
      paragraph_div.style.visibility = "visible";
      paragraph_div.style.opacity = "1";
      main_div.style.filter = "blur(10px)";
    }


  }
  paragraph_example_button.remove();
}
