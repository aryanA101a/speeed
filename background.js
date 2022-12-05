chrome.tabs.onUpdated.addListener((tabId, changeInfo, tab) => {
  if (tab.url && tab.url.includes("youtube.com/watch")) {
    if (changeInfo.status === "complete") {
      chrome.commands.onCommand.addListener((command) => {
        chrome.tabs.sendMessage(tabId, { command: command });
      });
    }
  }
});
