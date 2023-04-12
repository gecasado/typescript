import Person from "./person"

let persona:Person = new Person("Federica",25,"Buenos aires, Argentina");
persona.printName();

let date:Date = new Date();
let currentYear:number = date.getFullYear();
console.log(`Edad: ${persona.age}, Año de nacimiento: ${persona.yearOfBirth(currentYear)}`);

console.log(persona.getAddress());
persona.setAddress("Madrid,España");
console.log(persona.getAddress());