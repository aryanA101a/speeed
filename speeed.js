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
  return true;
});
