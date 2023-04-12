import Person from "./person"
import Contacts from "./contacts";

let persona1:Person = new Person("Yaniel", 32, "la Habana, Cuba");
let persona2:Person = new Person("Alejandra", 39, "Cazalegas,Toledo");

let contactos:Contacts = new Contacts();
contactos.people = [persona1, persona2];
contactos.printCalendar();