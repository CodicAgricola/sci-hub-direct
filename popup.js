let changeURL = document.getElementById("changeURL");
let inputID = document.getElementById("ID");
let regex = new RegExp('chrome://*');

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
