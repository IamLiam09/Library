// The book class
class Book {
	constructor(title, author, pages) {
		this.title = title;
		this.author = author;
		this.pages = pages;
	}
}
const btn = document.querySelectorAll("[data-target]");
const modalbox = document.querySelector(".modal");
const main = document.querySelector("main");
const img = document.querySelector(".img");
const titleel = document.getElementById("title");
const authorel = document.getElementById("author");
const pageel = document.getElementById("pages");
const modalForm = document.getElementById("form");
const login = document.getElementById("login");
const body = document.querySelector("body");
const signUp = document.getElementById("signup");
var attri;
var toBeremoved;
let myLibrary = [];
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
	e.innerText = txt == "Unread" ? "Read" : "Unread";
	const data_index = document.querySelectorAll("[data-index]");
	let index_value;
	data_index.forEach((data, indx) => {
		index_value = indx;
	});
	changeRead(myLibrary, index_value);
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
function changeRead(arr, index) {
	if (arr[index].read === false) {
		arr[index].read = true;
	} else {
		arr[index].read = false;
	}
}
// login
const logindiv = () => {
	const display = () => {
		img.style.display = "none";
		const addon = document.createElement("form");
		addon.className = "logindiv";
		addon.innerHTML = `<h1>login</h1>
							<div class="inbox">
								<input type="email" class="email" id="email" required />
								<label for="email" class="emaillabel">Email</label>
							</div>
							<div class="inbox">
								<input type="password" class="Password" id="password" required />
								<label for="password" class="password">Password</label>
								</div>
							<button class="submit">login</button>`;
		body.appendChild(addon);
	};
	const getValue = () => {
		const emailValueInput = document.getElementById("email");
		const passwordValueInput = document.getElementById("password");
		let emailValue = emailValueInput.value;
		let passwordValue = passwordValueInput.value;
		return { emailValue, passwordValue };
	};
	const userBooks = (username) => {
		const user = document.querySelector(".user");
		let going = user.firstElementChild;
		let goingnext = user.lastElementChild;
		user.removeChild(going);
		user.removeChild(goingnext);
		user.innerHTML = username.emailValue;
		const toRemove = document.querySelector(".logindiv");
		body.removeChild(toRemove);
	};

	return { display, getValue, userBooks };
};
const signupdiv = () => {
	const display = () => {
		img.style.display = "none";
		const addon = document.createElement("form");
		addon.className = "signupdiv";
		addon.innerHTML = `
						<h1>Sign up</h1>
						<div class="inbox">
							<input type="text" class="firstname" id="firstname" required />
							<label for="firstname" class="emaillabel">Firstname</label>
						</div>
						<div class="inbox">
							<input type="text" class="lastname" id="lastname" required />
							<label for="lastname" class="lastname">lastname</label>
						</div>
						<div class="inbox">
							<input type="email" class="email" id="email" required />
							<label for="email" class="email">email</label>
						</div>
						<div class="inbox">
							<input type="password" class="password" id="password" required />
							<label for="password" class="password">password</label>
						</div>
						<div class="inbox">
							<input type="password" class="confirm password" id="confirm password" required />
							<label for="confirm password" class="password">Confirm Password</label>
						</div>
					<button class ="submitS">Sign up</button>
					`;
		body.appendChild(addon);
	};
	const getValue = () => {
		const emailValueInput = document.getElementById("email");
		const passwordValueInput = document.getElementById("password");
		let emailValue = emailValueInput.value;
		let passwordValue = passwordValueInput.value;
		return { emailValue, passwordValue };
	};
	const userBooks = (username) => {
		const user = document.querySelector(".user");
		let going = user.firstElementChild;
		let goingnext = user.lastElementChild;
		user.removeChild(going);
		user.removeChild(goingnext);
		user.innerHTML = username.emailValue;
		const toRemoveSecond = document.querySelector(".signupdiv");
		body.removeChild(toRemoveSecond);
	};

	return { display, getValue, userBooks };
};
const intia = logindiv();
const done = intia.display;
const intiasignup = signupdiv();
const donesignup = intiasignup.display;
// EventListeners
btn.forEach((btns) => btns.addEventListener("click", modal));
modalForm.addEventListener("submit", addBookToLibrary);
main.addEventListener("click", delFromLibrary);
main.addEventListener("click", delDiv);
login.addEventListener("click", done);
signUp.addEventListener("click", donesignup);
body.addEventListener("click", (e) => {
	if (e.target.classList.contains("submit")) {
		const show = logindiv();
		show.userBooks(show.getValue());
	}
	if (e.target.classList.contains("submitS")) {
		const show = signupdiv();
		show.userBooks(show.getValue());
	}
});
