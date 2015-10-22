

function showPic(pic) {
	if (!document.getElementById("placeholder")) return false;
	var source = pic.getAttribute("href");
	var placeholder = document.getElementById("placeholder");
	if (placeholder.nodeName != "IMG") return false;
	placeholder.setAttribute("src", source);
	if (document.getElementById("description")) {
		var description = document.getElementById("description");
		if (description.firstChild.nodeType == 3) {
			var text = pic.getAttribute("Title") ? pic.getAttribute("Title") : "";
			description.firstChild.nodeValue = text;
		}
	}
	return true;
}

function countBodyChildren() {
	var body_element = document.getElementsByTagName('body')[0];
	//alert(body_element.childNodes.length);
	alert(body_element.nodeType);
}

/*
 * Creating Markup Element on the Fly.
 * This is to separate the structure and the behavior entirely.
 */
function preparePlaceholder() {
	if (!document.createElement) return false;
	if (!document.createTextNode) return false;
	if (!document.getElementById) return false;
	if (!document.getElementById("image_list")) return false;
	
	var placeholder = document.createElement("img");
	placeholder.setAttribute("id", "placeholder");
	placeholder.setAttribute("src", "");
	placeholder.setAttribute("alt", "");
	
	var description = document.createElement("p");
	description.setAttribute("id", "description");
	var desctext = document.createTextNode("");
	description.appendChild(desctext);
	
	var imageList = document.getElementById("image_list");
	insertAfter(placeholder, imageList);
	insertAfter(description, placeholder);
}


function prepareGallery() {
	if (!document.getElementById || !document.getElementsByTagName) {
		return false;
	}
	var gallery = document.getElementById("image_list");
	if (!gallery) {
		return false;
	}
	var links = gallery.getElementsByTagName("a");
	for (var i = 0; i < links.length; i++) {
		links[i].onclick = function() {
			return showPic(this) ? false : true;	
		}
	}
}

function insertAfter(newElement, targetElement) {
	var parent = targetElement.parentNode;
	if (parent.lastChild == targetElement) {
		parent.appendChild(newElement);
	} else {
		parent.insertBefore(newElement, targetElement.nextSibling);
	}
}
function addOnLoadEvent(func) {
	var oldonload = window.onload;
	if (typeof window.onload != 'function') {
		window.onload = func;
	} else {
		window.onload = function() {
			oldonload();
			func();
		}
	}
}

addOnLoadEvent(prepareGallery);
addOnLoadEvent(preparePlaceholder);
