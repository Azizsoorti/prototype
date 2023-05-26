function Person(name, nicNumber, fatherName, address) {
  this.name = name;
  this.nicNumber = nicNumber;
  this.fatherName = fatherName;
  this.address = address;
}


Person.prototype.nationality = "Pakistani";
Person.prototype.about = function() {
  return `Name: ${this.name}
NIC Number: ${this.nicNumber}
Father's Name: ${this.fatherName}
Address: ${this.address}
Nationality: ${this.nationality}` ;
};

const person1 = new Person("Aziz", "4240112234567", "Raheem", "Baldiah Town Karachi");
const person2 = new Person("Jameel", "4240243210987", "Aqeel", "Gulshan E Iqbal");
const person3 = new Person("Asif", "4240190123456", "Wasif", "Korangi");
const person4 = new Person("Abbas", "4240187654321", "jamal", "Nazma Abad");
const person5 = new Person("Labeeb", "4240110987654", "Habib", "Tariq Road");

console.log(person1.about());
console.log(person2.about());
console.log(person3.about());
console.log(person4.about());
console.log(person5.about());


