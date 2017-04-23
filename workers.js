postMessage('Wlasnie pracuje');
onmessage=function (oEvent) {
	switch (oEvent.data) {
		case 'start':
			console.log('Wslano wiadmosc start')
			for(var i=0;i<200000;i++){
				for(var x=0;x<20000;x++){
					console.log(i*x);
				}
			}
			break;
		case 'stop':
			console.log('Wyslano wiadomosc stop')
			break;
	}
}