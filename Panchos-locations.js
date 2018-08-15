var mobileBtn = document.querySelector(".mobile-btn");
var menu = document.querySelector(".menu");
var closeBtn = document.querySelector(".close");
var overlay = document.querySelector('.overlay');


mobileBtn.addEventListener("click", function() {
	menu.className += ' open';
	overlay.className += ' open';

	var banner = document.querySelector('.banner');
	banner.style.display ="none";

	var container = document.querySelector('.container');
	container.style.display ="none";

	var footer = document.querySelector('footer');
	footer.style.display = "none";
})


window.addEventListener('click', function(event) {
	if(event.target === overlay) {
	window.open("Panchos-locations.html", "_self");
}
})