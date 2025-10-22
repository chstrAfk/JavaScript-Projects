function countdown() {
	var seconds = document.getElementById("sseconds").value;
	function tick() {
		seconds = seconds - 1;
		timer.innerHTML = seconds;
		if (seconds > 0) {
			setTimeout(tick, 1000);
		} else {
			alert("Time's up!")
		}
	}
	tick();
}
let slideIndex = 1;
showSlides(slideIndex);
function plusSlides(n) {
	showSlides(slideIndex += n);
}
function plusSlides(n) {
	showSlides(slideIndex = n);
}
function showSlides(n) {
	let i;
	let slides = document.getElementsByClassName("mySlides");
	let dots = document.getElementsByClassName("dot");
	if (n > slides.lenth) {
		slideIndex = + 1;
	}
	