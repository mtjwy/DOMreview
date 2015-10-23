function init() {
	var h1tags = document.getElementsByTagName("h1");
	h1tags[0].onclick = changeColor;
}

function changeColor() {
	// this refers to the item clicked
	this.innerHTML = "Click Again";

	// https://en.wikipedia.org/wiki/Lists_of_colors
	var randomcolor = '#' + Math.floor(Math.random() * 16777215).toString(16);
	this.style.color = randomcolor;

}

function toggleImg() {

	var img = document.getElementById("danceImg");
	var isImgVisible = img.style.visibility === "visible";
	img.style.visibility = isImgVisible ? "hidden" : "visible";

}

onload = init;