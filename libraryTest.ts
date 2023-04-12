import { Book } from "./book";
import { Library } from "./library";

let libro1:Book = new Book("QUIÉRETE MUCHO, MARICÓN", 530, "9788416306916", "GABRIEL J. MARTIN", "ROCA EDITORIAL DE LIBROS");
let libro2:Book = new Book("Harry Potter y el prisionero de Azkaban", 435, "978-8478885190", "J.k. Rowling", "Salamandra");

let arrayLibros:Book[] = [libro1, libro2];

let libreria:Library = new Library(arrayLibros, "Madrid", "Manuela Soler");

console.log(libreria.toString());