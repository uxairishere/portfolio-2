
  var mySong = document.getElementById("mySong");
  var ico = document.getElementById("icon");
  ico.onclick = function() {

    if (mySong.paused) {
      mySong.play();
      ico.src = "images/crownPause.png";
    } else {
      mySong.pause();
      ico.src = "images/crownStart.png";
    }
  }
