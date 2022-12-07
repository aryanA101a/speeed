const div=addSnackbar();

var video = document.getElementsByTagName("video")[0];
chrome.runtime.onMessage.addListener((message, sender, response) => {
  const { command } = message;

  if (command == "increase_speeed") {
    video.playbackRate += 0.25;
    console.log(video.playbackRate);
  } else if (command == "decrease_speeed" && video.playbackRate != 0) {
    video.playbackRate -= 0.25;
    console.log(video.playbackRate);
  }
  div.innerHTML = video.playbackRate.toString();
  showSnackbar();
  return true;
});

function showSnackbar() {
  var x = document.getElementById("snackbar");
  x.className = "show";
  setTimeout(function () {
    x.className = x.className.replace("show", "");
  }, 1000);
}

function addSnackbar() {
  const div = document.createElement("div");
  const att = document.createAttribute("id");
  div.setAttribute("id", "snackbar");
  document.body.appendChild(div);

  const style = document.createElement("style");
  style.innerHTML = `#snackbar {
  visibility: hidden;
  min-width: 100px;
  margin-left: -125px;
  background-color: #333;
  color: #fff;
  text-align: center;
  border-radius: 12.5px;
  padding: 16px;
  position: fixed;
  z-index: 1;
  left: 50%;
  bottom: 30px;
  font-size: 17px;
 
  
}

#snackbar.show {
  visibility: visible;
  
  
}

`;
  document.head.appendChild(style);

  return div;
}
