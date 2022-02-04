document.addEventListener('DOMContentLoaded', replaceURL, false);

function replaceURL() {
	try {
		location.replace(document.getElementById("pdf").src);
	} catch (e) {
		console.log("enter DOI");
	}
}
