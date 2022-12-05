chrome.runtime.onMessage.addListener((message, sender, response) => {
  const { command } = message;
  

  if (command == "increase_speeed") {
    document.getElementsByTagName("video")[0].playbackRate += 0.25;
    console.log(document.getElementsByTagName("video")[0].playbackRate);
  } else if (command == "decrease_speeed") {
    document.getElementsByTagName("video")[0].playbackRate -= 0.25;
    console.log(document.getElementsByTagName("video")[0].playbackRate);
  }
});
