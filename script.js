const btn = document.querySelectorAll("[data-target]");
const modalbox = document.querySelector(".modal");
const main = document.querySelector("main");
const img = document.querySelector(".img");
const titleel = document.getElementById("title");
const authorel = document.getElementById("author");
const pageel = document.getElementById("pages");
const modalForm = document.getElementById("form");
var attri;
var toBeremoved;
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
// Toogle read function
function toggle(e) {
	let txt = e.innerText;
	e.innerText = txt == 'Unread' ? 'Read' : 'Unread';
	const data_index = document.querySelectorAll("[data-index]")
	let index_value
	data_index.forEach((data, indx) => {
		index_value = indx
	})
	changeRead(myLibrary, index_value)
}
// Display card
function displayCard(library, container) {
	main.innerHTML = "";
	library.forEach((book, i) => {
		const card = `<div class="card" data-index = ${i}>
						<span class="del button delete"></span>
						<img src="images/cardimg.svg">
						<h4 class="title">${book.title}</h4>
						<p class="author">${book.author}</p>
						<p class="noofpages">${book.pages}</p>
						<button class="unread readstatus" onclick="toggle(this)")>Unread</button>
					</div>`;
		const element = document.createElement("div");
		element.innerHTML = card;
		container.append(element.firstChild);
	});
}
// Modal drop
const modal = function () {
	img.style.display = "none";
	modalbox.style.display = "flex";
};
// Delete book
function delFromLibrary(e) {
	if (e.target.classList.contains("delete")) {
		const dataDex = document.querySelectorAll("[data-index]");
		dataDex.forEach((dataDexed, attriindex) => {
			attri = attriindex;
		});
		myLibrary.splice(attri, 1);
	}
}
// Delete the div of the deleted object
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
// Change the read status from the library
function changeRead(arr, index){
	if(arr[index].read === false){
		arr[index].read = true
	}else{
		arr[index].read = false
	}
}
// EventListeners
btn.forEach((btns) => btns.addEventListener("click", modal));
modalForm.addEventListener("submit", addBookToLibrary);
main.addEventListener("click", delFromLibrary);
main.addEventListener("click", delDiv);

