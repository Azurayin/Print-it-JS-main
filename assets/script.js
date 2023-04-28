const slides = [
	{
		"image":"slide1.jpg",
		"tagLine":"Impressions tous formats <span>en boutique et en ligne</span>"
	},
	{
		"image":"slide2.jpg",
		"tagLine":"Tirages haute définition grand format <span>pour vos bureaux et events</span>"
	},
	{
		"image":"slide3.jpg",
		"tagLine":"Grand choix de couleurs <span>de CMJN aux pantones</span>"
	},
	{
		"image":"slide4.png",
		"tagLine":"Autocollants <span>avec découpe laser sur mesure</span>"
	}
];


const banner = document.getElementById("banner");
var bannerParagraphe = banner.querySelector("p");
var dot = banner.getElementsByClassName("dot")

var slideIndex = 0;

function changeBannerLeft() {
	let bannerImg = document.getElementsByClassName("banner-img")[0];
	if (slideIndex == 0) {

		slideIndex = 3;
	 } else {
		slideIndex--;
	 }
	 bannerImg.src="./assets/images/slideshow/"+slides[slideIndex].image;
	let bannerTxt = bannerParagraphe[0];
	bannerParagraphe.innerHTML = slides[slideIndex].tagLine;

	
	dot[slideIndex].classList.add("dot_selected");
	dot[slideIndex + 1].classList.remove("dot_selected");

	if (dot[slideIndex] = 3) {
		dot[0].classList.remove("dot_selected");
	}
	
}

function changeBannerRight() {
	let bannerImg = document.getElementsByClassName("banner-img")[0];
	if (slideIndex == 3) {
		slideIndex = 0;
	 } else {
		slideIndex++;
	 }
	 bannerImg.src="./assets/images/slideshow/"+slides[slideIndex].image;

	let bannerTxt = bannerParagraphe[0];
	bannerParagraphe.innerHTML = slides[slideIndex].tagLine;
}



let arrowLeft = document.querySelector('.arrow_left');
arrowLeft.addEventListener("click", changeBannerLeft); 

let arrowRight = document.querySelector('.arrow_right');
arrowRight.addEventListener("click", changeBannerRight);

function logToto(){console.log("Toto");}


// function create a div
// function addDiv() {
// 	const newDiv = document.createElement("div");
	
// 	newDiv.classList.add("dot");}


// variable qui selectionne la class dots
let selectDots = document.querySelector(".dots");
window.addEventListener("load",createDivDot);


// fonction qui creer une div pour chaque element de la const slides
function createDivDot() {
	for (let i = 0; i < slides.length; i++) {
		let newDivDot = document.createElement("div");
		// attribut les nouvelles div a la variable selectDots(qui selectionne la class dots)
		selectDots.appendChild(newDivDot);
		// attribut la class "dot" a chaque nouvelle div
		newDivDot.className = "dot"	;
		if (i == 0) {
			newDivDot.classList.add("dot_selected");
		}	
	}
}
