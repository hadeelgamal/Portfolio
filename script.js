function openMenu() {
	document.getElementById("nav").style.visibility = "visible";
	document.getElementById("nav").style.opacity = 1;
	document.getElementById("menu_open").style.display = "none";
	document.getElementById("menu_close").style.display = "block";
}

function closeMenu() {
	document.getElementById("nav").style.visibility = "hidden";
	document.getElementById("nav").style.opacity = 0;
	document.getElementById("menu_open").style.display = "block";
	document.getElementById("menu_close").style.display = "none";
}
