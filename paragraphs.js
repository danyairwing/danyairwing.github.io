var paragraphs = {
  0: {
    "title":"INFO",

    "content":`
    <img src="src/photo.png" style="height: 15vmax;">
    <br>
    I'M A 15 YEAR OLD ARTIST FROM BELARUS, VITEBSK.

    <br>
    I WAS INFLUENCED BY DIFFERENT FORUMS, WEBSITES, VIDEOS, SPECIFICALLY IN ENGLISH.
    <br>
    I MAKE MUSIC AND ARTWORK.
    <br>
    <img src="src/cds.png" style="height: 25vmax;">



    `
  },
  1: {
    "title":"CONTACT",

    "content":`
    MAIL:     <a href="mailto:danya.irwing@gmail.com"> DANYA.IRWING@GMAIL.COM </a> <br>
    TELEGRAM: <a href="https://t.me/ziggomatic17"> @ZIGGOMATIC17 </a> <br>
    DISCORD:  @DANYAIRWING <br>


    `
  },
  2: {
    "title":"PORTFOLIO",

    "content":`
    MUSIC: <br> <br>
    <iframe style="border: 0; width: 55vmin; height: 55vmin;" src="https://bandcamp.com/EmbeddedPlayer/album=3587701148/size=large/bgcol=ffffff/linkcol=0687f5/minimal=true/transparent=true/" seamless><a href="https://irwing.bandcamp.com/album/dysmorphia">Дисморфия (Dysmorphia) by hexadecimalbliss</a></iframe>
    <iframe style="border: 0; width: 55vmin; height: 55vmin;" src="https://bandcamp.com/EmbeddedPlayer/album=526273803/size=large/bgcol=ffffff/linkcol=0687f5/minimal=true/transparent=true/" seamless><a href="https://irwing.bandcamp.com/album/worship-power">WORSHIP POWER by hexadecimalbliss</a></iframe>



    <br> <br>
    GAME DEVELOPMENT: <br> <br>
    <a href="https://www.roblox.com/groups/16040305/Pearl-Division"> PEARL DEVISION (ROBLOX) </a> <br>
    <a href="https://www.roblox.com/groups/6219314/Anarchy-Development-Studio"> ANARCHY DEVELOPMENT (ROBLOX) </a> <br>
    OTHER PLATFORMS SOON
    <br>

    <img src="src/keyboard.png" style="height: 25vmax;">


    `
  },

  "length":3
}

/*
<br>
PORTFOLIO LINKS: <br> <br>
TWITTER:  <a href="https://twitter.com/@danyairwing"> @DANYAIRWING </a> <br>
ROBLOX:   <a href="https://www.roblox.com/users/382383327/profile"> IRW_ING </a> <br>
SOUNDCLOUD:   <a href="https://soundcloud.com/danyairwing"> HEXADECIMALBLISS </a> <br>
BANDCAMP:   <a href="https://irwing.bandcamp.com"> HEXADECIMALBLISS </a> <br>
*/
var paragraphs_divs = {}

function loadParagraphs() {
  var text_div = document.getElementsByClassName("paragraph-text")[0];
  var paragraph_div = document.getElementsByClassName("paragraph")[0];
  var main_div = document.getElementsByClassName("main")[0];
  var exit_button = paragraph_div.children[1];
  var paragraph_example_button = document.getElementsByClassName("button-example")[1];

  exit_button.onclick = function() {
    paragraph_div.style.opacity = "0";
    paragraph_div.style.visibility = "hidden";
    main_div.style.filter = "blur(0px) hue-rotate(0deg)";




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
      main_div.style.filter = "blur(2px) hue-rotate(180deg)";

      var imgs = document.getElementsByClassName("paragraph-text")[0].children;

      for (var index=0; index<imgs.length; index++) {
        console.log("IMG");
        var img = imgs[index];
        img.style.animation = "pixelate 1s ease-in-out";

      }

    }


  }
  paragraph_example_button.remove();
}
