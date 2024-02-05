// const test = () => {
//     chrome.storage.local.get("bwActivated").then((result) => {
//         if (result && result.bwActivated) {
//             document.documentElement.style.filter = 'grayscale(100%)';
//         }
//     });
// }

document.addEventListener('DOMContentLoaded', function () {
    var convertButton = document.getElementById('convertButton');
    var resetButton = document.getElementById('resetButton');
    // let tab = chrome.tabs.query({ active: true, currentWindow: true });

    convertButton.addEventListener('click', function () {
        chrome.storage.local.set({ "bwActivated": true });
        chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
            let file = tabs[0].url.includes("m.youtube") ? ["mobile.css"] : ["desktop.css"];
            chrome.scripting.insertCSS({
                target: {
                    tabId: tabs[0].id,
                },
                files: file,
            });
        });
    });

    resetButton.addEventListener('click', function () {
        chrome.storage.local.set({ "bwActivated": false });
        chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
            let file = tabs[0].url.includes("m.youtube") ? ["mobile.css"] : ["desktop.css"];
            chrome.scripting.removeCSS({
                target: {
                    tabId: tabs[0].id,
                },
                files: file,
            });
        });
    });

    // chrome.storage.local.addEventListener(() => {

    // })
});