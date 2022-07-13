let myLibrary = [];
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
// Modal drop
const modal = function () {
	modalbox.style.display = "flex";
	img.style.display = "none";
	section.style.display = "none";
	console.log("yes");
};
const update = function (myLibrary) {
	for (lib of myLibrary) {
		section.innerHTML = "tovisit";
	}
};
const addcard = function () {};
const btn = document.querySelectorAll("[data-target]");
const modalbox = document.querySelector(".modal");
const img = document.querySelector(".img");
const title = document.getElementById("title");
const author = document.getElementById("author");
const page = document.getElementById("pages");
const section = document.getElementById("section");
const loginForm = document.getElementById("form");
loginForm.addEventListener("submit", handleSubmit);

function handleSubmit(e) {
	e.preventDefault();
	const formData = new FormData(e.target);
	const formProps = Object.fromEntries(formData);
}
// $('#form').serializeArray().reduce(function(obj, item) {
//     obj[item.name] = item.value;
//     return obj;
// }, {});
// add an event listener for when the button is clicked it make the modal pop up
btn.forEach((btns) => btns.addEventListener("click", modal));
// let caset = new Book("main", "sort", 98, "read")
// let casets = new Book("case", "sort", 98, "read")
// let casett = new Book("java", "sort", 98, "read")
// let casete = new Book("manga", "sort", 98, "read")
// addBookToLibrary(caset)
// addBookToLibrary(casets)
// addBookToLibrary(casett)
// addBookToLibrary(casete)
// console.log(myLibrary)
