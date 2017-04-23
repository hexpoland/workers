var myworker=new Worker('workers.js');
myworker.onmessage=function (oEvent) {
	console.log("Worker said:"+ oEvent.data)
}


myworker.postMessage('start')
// myworker.postMessage('h3x');

