chrome.action.onClicked.addListener(function(tab) {
    chrome.scripting.executeScript({
        target: {tabId: tab.id},
        files: ["content_scripts/fjerner.js"]
    }).catch(function(error){console.log(error)});
});