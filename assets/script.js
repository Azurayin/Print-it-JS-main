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

// déclaration des constante pour selectionner les elements necessaire
const banner = document.getElementById("banner");
const bannerParagraphe = banner.querySelector("p");
const dot = banner.getElementsByClassName("dot");
const dotAll = banner.querySelectorAll(".dot");

// déclaration de la variable qui va permettre d'exploiter les elements de l'array "slides"
var slideIndex = 0;


// fonction quand on click sur la fleche gauche
function changeBannerLeft() {
	
	if (slideIndex <= 0) {
		slideIndex = slides.length - 1;	
	} else {
		slideIndex--;
	}
	changeBanner();
}


// fonction quand on click sur la fleche droite
function changeBannerRight() {
	if (slideIndex >= slides.length - 1) {
		slideIndex = 0;
	} else {
		slideIndex++;
	}
	changeBanner();
}


function changeBanner() {
	let bannerImg = document.getElementsByClassName("banner-img")[0];
	// changement de la src de l'image par le contenu de l'array slides selon son index
	bannerImg.src="./assets/images/slideshow/"+slides[slideIndex].image;
	//changement du paragraphe accompagnant l'image de la slide
	bannerParagraphe.innerHTML = slides[slideIndex].tagLine;
	
	// enleve la class "dot_selected" au premier element qui contient la class "dot_selected"
	document.querySelector(".dot_selected").classList.remove("dot_selected");

	// ajout de la class "dot_selected" au bulletpoint actuel
	dot[slideIndex].classList.add("dot_selected");
}


// variable qui selectionne la fleche gauche par le nom de class
let arrowLeft = document.querySelector('.arrow_left');
// eventlistener au click qui fait appel a la fonction changeBannerLeft
arrowLeft.addEventListener("click", changeBannerLeft); 


let arrowRight = document.querySelector('.arrow_right');
arrowRight.addEventListener("click", changeBannerRight);


// fonction test
function logToto(){console.log("Toto");}


// variable qui selectionne la class dots
let selectDots = document.querySelector(".dots");


// permet de load ma fonction au chargement de la page
window.addEventListener("load",createDivDot);


// fonction qui creer une div pour chaque element de la const slides
function createDivDot() {
	for (let i = 0; i < slides.length; i++) {
		let newDivDot = document.createElement("div");
		// attribut les nouvelles div a la variable selectDots(qui selectionne la class dots)
		selectDots.appendChild(newDivDot);
		// attribut la class "dot" a chaque nouvelle div
		newDivDot.className = "dot"	;
		// permet de mettre la class dot_selected a la premiere div créer
		if (i == 0) {
			newDivDot.classList.add("dot_selected")
		}	
	}
}

