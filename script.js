function Book(title, author, pages, read){
    this.title = title
    this.author = author
    this.pages = pages
    this.read = read
    this.info = function(){
        return `The ${this.title} by ${this.author}, ${this.pages} pages, ${this.read}`
    }
}
const base = new Book("charlie", "R.R", 14, "yes")
console.log(base.info())