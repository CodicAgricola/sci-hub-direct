let changeURL = document.getElementById("changeURL");
let inputID = document.getElementById("ID");
let regex = new RegExp('chrome://*');

document.addEventListener("keydown", async (event) => {
  let [tab] = await chrome.tabs.query({ active: true, currentWindow: true });
	if (!tab.url.match(regex) && event.key == 'Enter') {
		const ID = inputID.value;
		chrome.scripting.executeScript({
			target: { tabId: tab.id },
			function: updateURL,
			args: [ ID ],
		});
	}	
});

changeURL.addEventListener("click", async () => {
  let [tab] = await chrome.tabs.query({ active: true, currentWindow: true });
	if (!tab.url.match(regex)) {
		const ID = inputID.value;
		chrome.scripting.executeScript({
			target: { tabId: tab.id },
			function: updateURL,
			args: [ ID ],
		});
	}	
});

function updateURL(ID) {
	let url = "https://sci.bban.top/pdf/" + ID + ".pdf";
	window.location.replace(url);
}
