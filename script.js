const btn = document.querySelectorAll("[data-target]");
const modalbox = document.querySelector(".modal");
const main = document.querySelector("main");
const img = document.querySelector(".img");
const titleel = document.getElementById("title");
const authorel = document.getElementById("author");
const pageel = document.getElementById("pages");
const modalForm = document.getElementById("form");
var toBeCreated = false;
var attri 
var toBeremoved
let myLibrary = [];
// The book class
function Book(title, author, pages) {
	this.title = title;
	this.author = author;
	this.pages = pages;
}
Book.prototype.read = false;
// add book to library
function addBookToLibrary(e) {
	e.preventDefault();
	let titleValue = titleel.value;
	let authorValue = authorel.value;
	let pageValue = pageel.value;
	let currentBook = new Book(titleValue, authorValue, pageValue);
	myLibrary.push(currentBook);
	displayCard(myLibrary, main);
	titleel.value = "";
	authorel.value = "";
	pageel.value = "";
	modalForm.style.display = "none";
}
function displayCard(library, container) {
	main.innerHTML = "";
	library.forEach((book, i) => {
		const card = `<div class="card" data-index = ${i}>
						<span class="del button delete"></span>
						<img src="images/cardimg.svg">
						<h4 class="title">${book.title}</h4>
						<p class="author">${book.author}</p>
						<p class="noofpages">${book.pages}</p>
						<button class="unread readstatus">Unread</button>
					</div>`;
		const element = document.createElement("div");
		element.innerHTML = card;
		container.append(element.firstChild);
	});
	toBeCreated = true;
}
function toggleRead() {
	// const readstatus = document.querySelectorAll(".readstatus")
	// console.log(readstatus)
	// readstatus.forEach(readStat => {
	// 	readStat.addEventListener("click", function clicked(){
	// 	console.log("clicked")
	// })})
	// var clicked = false
	if (!toBeCreated) {
		toBeCreated = true;
		const readstatus = document.querySelectorAll(".readstatus");
		readstatus.forEach((readstatuses) => {
			readstatuses.addEventListener("click", function toogleClick() {
				console.log("worked");
				readstatuses.innerHtml = "Read";
			});
		});
	}
}
function runtoggle() {
	if (toBeCreated) {
		toggleRead();
		console.log("working");
	}
}

function changeReadStatus(e) {
	if (e.target.classList.contains("readstatus")) {
		// console.log("working")
		toggleRead();
	}
}
// Modal drop
const modal = function () {
	img.style.display = "none";
	modalbox.style.display = "flex";
};
// Delete book
function delFromLibrary(e) {
	if (e.target.classList.contains("delete")) {
		toBeremoved = e.target.parentNode;
		console.log(toBeremoved);
		const dataDex = document.querySelectorAll("[data-index]");
		dataDex.forEach((dataDexed, attriindex) => {
			const id  = dataDexed.getAttribute("data-index")
			attri = attriindex
		})
		console.log(attri)
	}
}
function delDiv(e) {
	if (e.target.classList.contains("delete")) {
		var li = e.target.parentNode;
		if (li.classList.contains("delete")) {
			var mainli = li.parentNode;
			main.removeChild(mainli);
		}
		main.removeChild(li);
	}
}
// Deleting from the library array
modalForm.addEventListener("submit", addBookToLibrary);
btn.forEach((btns) => btns.addEventListener("click", modal));
main.addEventListener("click", delFromLibrary);
main.addEventListener("click", delDiv);
main.addEventListener("click", changeReadStatus);
function visibilityOn() {
	modalForm.style.display = "none";
}
main.addEventListener("click", visibilityOn);
