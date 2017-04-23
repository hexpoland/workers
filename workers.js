postMessage('Wlasnie pracuje');
onmessage=function (oEvent) {
	postMessage("Hi "+oEvent.data);
}