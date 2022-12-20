async function getCurrentTab() {
  let queryOptions = { active: true, lastFocusedWindow: true };
  let [tab] = await chrome.tabs.query(queryOptions);
  return tab;
}

chrome.commands.onCommand.addListener(async (command) => {
  var tab = await getCurrentTab();
  if (
    tab.url &&
    tab.url.includes("youtube.com/watch") &&
    tab.status == "complete"
  ) {
    chrome.tabs.sendMessage(tab.id, { command: command });
  }
});
