// chrome.storage.local.get("bwActivated").then((result) => {
//     if (result && result.bwActivated) {
//         document.documentElement.style.filter = 'grayscale(100%)';
//     }
// });

// chrome.runtime.onMessage.addListener(function (request, sender, sendResponse) {
//     if (request.action === 'convert') {
//         document.documentElement.style.filter = 'grayscale(100%)';
//         sendResponse({ message: 'Website converted to black and white.' });
//         chrome.storage.local.set({ "bwActivated": true });
//     } else if (request.action === 'reset') {
//         document.documentElement.style.filter = 'none';
//         sendResponse({ message: 'Website reset to original colors.' });
//         chrome.storage.local.set({ "bwActivated": false });
//     }
// });

// let tab = chrome.tabs.query({ active: true, currentWindow: true });

// chrome.storage.local.onChanged.addListener(async (tab) => {
    
//     chrome.storage.local.get("bwActivated").then((result) => {
//         if (result && result.bwActivated) {
//             chrome.scripting.insertCSS({
//                 target: {
//                     tabId: tab.id,
//                 },
//                 files: ["test.css"],
//             });
//         }
//         else {
//             chrome.scripting.removeCSS({
//                 target: {
//                     tabId: tab.id,
//                 },
//                 files: ["test.css"],
//             });
//         }
//     });
// })