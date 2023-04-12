import { Book } from "./book";

export class Library{
    private books: Book[];
    private address: string;
    private manager: string;

    constructor(books:Book[], address:string, manager:string){
        this.books = books;
        this.address = address;
        this.manager = manager;
    }

    getAddress():string{
        return this.address;
    }

    setAddress(address:string){
        this.address = address;
    }

    getManager():string{
        return this.manager;
    }

    setManager(manager:string){
        this.manager = manager;
    }

    toString():string{
        let bookList:string = ``;
        for (let i:number = 0; i < this.books.length; i++) {
            bookList += `\nBook${i+1}:\n${this.books[i].toString()}\n`
        }
        return bookList;
    }

    getNumberOfBooks():number{
        return this.books.length;
    }

    findByAuthor(author:string):Book[]{
        return this.books.filter(book => book.getAuthor() == author);
    }
}