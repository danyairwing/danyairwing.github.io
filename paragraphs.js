var paragraphs = {
  0: {
    "title":"INFO",

    "content":`
    I'M A 16 YEARS OLD ARTIST FROM BELARUS, VITEBSK. I MAKE MUSIC AND ARTWORK.
    CURRENTLY WORKING UNDER THE ALIAS OF "instrumentalist" (PREVIOSLY KNOWN AS HEXADECIMALBLISS), I ALSO SCORE GAME SOUNDTRACKS.
    MOST OF MY WORK IS AVAILIBLE ON MY <a href="https://irwing.bandcamp.com">BANDCAMP</a>, ALL OF MY MUSIC IS FREE. 
    <br>
    THIS WEBSITE IS A HUB FOR INFORMATION ABOUT MYSELF, ALSO CONTAINING A GALLERY OF ARTWORKS.
    <br>
    IF YOU'RE INTERESTED IN RECENT NEWS, CHECK OUT MY <a href="https://t.me/hexbliss">TELEGRAM CHANNEL</a>.
    <br>
    OTHER LINKS INCLUDE:<br>
    <a href="https://youtube.com/@DanyaIrwing"> YOUTUBE </a> <br>
    <a href="https://soundcloud.com/exposedmachine"> SOUNDCLOUD </a> <br>
    <a href="https://soundcloud.com/danyairwing"> SOUNDCLOUD ALT ACCOUNT </a> <br>
    <br>
    ALSO, SOME RELEASES ARE AVAILABLE ON STREAMING SERVICES. SIMPLY SEARCH FOR THE ALIAS. <3

    `
  },
  1: {
    "title":"CONTACT",

    "content":`
    MAIL:     <a href="mailto:danya.irwing@gmail.com"> DANYA.IRWING@GMAIL.COM </a> <br>
    TELEGRAM: <a href="https://t.me/ziggomatic17"> @ZIGGOMATIC17 </a> <br>
    DISCORD:  @DANYAIRWING <br>
    I <u>DO</u> TAKE COMMISSIONS! REACH OUT TO ME IF YOU FEEL LIKE.</br>
    ALBEIT, STILL INTERESTED IN OTHER OFFERS - PERHAPS A COLLABORATION, EVEN PERFORMING LIVE, ETC.
    `
  },
  2: {
    "title":"GALLERY",

    "content":`
    IF YOU'RE INTERESTED IN RECENT ARTWORK, CHECK OUT MY <a href="https://t.me/hexbliss">TELEGRAM CHANNEL</a>.
    <img src="src/zimaposter.png"> </img>
    <video src="src/zimateasing1.mp4" type="video/mp4" controls> </video>
    <video src="src/zimateasing2.mp4" type="video/mp4" controls> </video>
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
        img.style.filter = "pixelate 1s ease-in-out";

      }

    }


  }
  paragraph_example_button.remove();
}
