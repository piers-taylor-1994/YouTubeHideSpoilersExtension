chrome.storage.local.get("bwActivated").then((result) => {
    if (result && result.bwActivated) {
        document.documentElement.style.filter = 'grayscale(100%)';
    }
});

chrome.runtime.onMessage.addListener(function (request, sender, sendResponse) {
    if (request.action === 'convert') {
        document.documentElement.style.filter = 'grayscale(100%)';
        sendResponse({ message: 'Website converted to black and white.' });
        chrome.storage.local.set({ "bwActivated": true });
    } else if (request.action === 'reset') {
        document.documentElement.style.filter = 'none';
        sendResponse({ message: 'Website reset to original colors.' });
        chrome.storage.local.set({ "bwActivated": false });
    }
});