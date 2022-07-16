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
var titleValue;
var authorValue;
var pagesValue;
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
// add book to library
function addBookToLibrary(abook) {
	myLibrary.push(abook);
}
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
// The card creation
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
// The update display function
const update = () => {
	var dispBook = new Book(titleValue, authorValue, pagesValue);
	addBookToLibrary(dispBook);
	came();
	main.append(librarycard(para1, para2, para3));
	appendCard();
};
function appendCard(e) {
	e.preventDefault();
	titleValue = titleel.value;
	authorValue = authorel.value;
	pagesValue = pageel.value;
	titleel.value = "";
	authorel.value = "";
	pageel.value = "";
	modalForm.style.display = "none";
	update()
}
modalForm.addEventListener("submit", appendCard);
btn.forEach((btns) => btns.addEventListener("click", modal));

