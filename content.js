// Logs the  first external link on the page
chrome.runtime.onMessage.addListener(
	function(request, sender, sendResponse) {
		if(request.message === "clicked_browser_action") {
			var firstHref = $("a[href^='http']").eq(0).attr("href");

      console.log(firstHref);

      // This line sends url to background.js
      chrome.runtime.sendMessage({"message": "open_new_tab", "url": firstHref});
		}
	}
);
