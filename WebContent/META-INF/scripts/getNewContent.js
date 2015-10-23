function getNewContent() {
	var request = getHTTPObject();
	
	if (request) {
		alert('start');	
		request.open("GET", "response.txt", true);// where the request be sent
												// to
		request.onreadystatechange = function() {// what to do when receive
												// response
			/*
			 * readyState property value: 
			 * • 0for uninitialized 
			 * • 1for loading 
			 * • 2for loaded 
			 * • 3for interactive 
			 * • 4for complete
			 */
			if (request.readyState == 4) {
				
				var para = document.createElement("p");
				var txt = document.createTextNode(request.responseText);
				para.appendChild(txt);
				document.getElementById('new').appendChild(para);
			}
		};
		request.send(null);// start the ajax process
	} else {
		alert('Sorry, your browser doesn\'t support XMLHttpRequest');
	}
}
addOnLoadEvent(getNewContent);