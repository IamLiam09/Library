const btn = document.querySelectorAll("[data-target]");
const modalbox = document.querySelector(".modal");
const main = document.querySelector("main");
const img = document.querySelector(".img");
const titleel = document.getElementById("title");
const authorel = document.getElementById("author");
const pageel = document.getElementById("pages");
const modalForm = document.getElementById("form");
const card = document.querySelector(".card");
const sumbitButton = document.querySelector("#sumbitButton");
var para1;
var para2;
var para3;
var titleValue
var authorValue
var pagesValue
let initial = true;
let secondphase = false;
let myLibrary = [];
// The book class
function Book(title, author, pages, read) {
	this.title = title;
	this.author = author;
	this.pages = pages;
	this.read = read;
	this.info = function () {
		return `The ${this.title} by ${this.author}, ${this.pages} pages, ${this.read}`;
	};
}
function addBookToLibrary(abook) {
	myLibrary.push(abook);
}

// const intialphase = () => {
// 	initial = false;
// };
let came = () => {
	myLibrary.forEach((lib) => {
		para1 = lib.title;
		para2 = lib.author;
		para3 = lib.pages;
	});
};
// Modal drop
const modal = function () {
	img.style.display = "none";
	modalbox.style.display = "flex";
};	
let librarycard = (paraTitle, paraAuthor, paraPages) => {
	const carddiv = document.createElement("div");
	const cardImg = document.createElement("img");
	const titleWord = document.createElement("h4");
	const authorname = document.createElement("p");
	const noofpages = document.createElement("p");
	carddiv.className = "card";
	cardImg.src = "cardimg.svg";
	titleWord.className = "title";
	authorname.className = "author";
	noofpages.className = "noofpages";
	titleWord.textContent = paraTitle;
	authorname.textContent = paraAuthor;
	noofpages.textContent = paraPages;
	carddiv.append(cardImg);
	carddiv.append(titleWord);
	carddiv.append(authorname);
	carddiv.append(noofpages);
	return carddiv;
};
// getting details from library
// const fromlibrary = myLibrary =>{
// 	myLibrary.forEach(lib => {
// 		return `${lib.title} ${lib.author} ${lib.pages}`
// 	})
// }
// update display
const update = function () {
	appendCard(e)
	var dispBook = new Book(titleValue, authorValue, pagesValue)
	addBookToLibrary(dispBook);
	came();
	main.append(librarycard(para1, para2, para3));
};
function appendCard(e) {
	e.preventDefault();
	titleValue = titleel.value;
	authorValue = authorel.value;
	pagesValue = pageel.value;
	titleel.value = "";
	authorel.value = "";
	pageel.value = "";
	modalForm.style.display = "none"
}
modalForm.addEventListener("submit", update);
// sumbitButton.addEventListener("click", clearForm);
// add an event listener for when the button is clicked it make the modal pop up
btn.forEach((btns) => btns.addEventListener("click", modal));
// let caset = new Book("main", "sort", 98, "read");
// let casets = new Book("case", "sort", 98, "read");
// let casett = new Book("java", "sort", 98, "read");
// let casete = new Book("manga", "sort", 98, "read");
// addBookToLibrary(caset);
// addBookToLibrary(casets);
// addBookToLibrary(casett);
// addBookToLibrary(casete);
// console.log(myLibrary);
// Making the card element

// main.append(myLibrary[0])
// main.append(myLibrary[1])
// librarycard();
// librarycard();


// came()
// main.append(librarycard(para1, para2, para3));
// console.log(came);
