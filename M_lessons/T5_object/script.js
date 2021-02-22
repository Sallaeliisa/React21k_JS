let text = document.querySelector("p");

let car = {
    type: "Audi",
    year: 2000,
    owner: "Salla",
    city: "Vantaa",
    calcAge: function() {
        this.age = 2021 - this.year;
        return this.age;
    } 
}

console.log(car);
console.log(car.city);
car.color = "red";
console.log(car);
delete car.city;
console.log(car);

text.textContent = car.city;

car.calcAge();

function Person(first, last, age, eye) {
    this.FirstName = first;
    this.lastName = last;
    this.age = age;
    this.eyeColor = eye;
}

let me = new Person("Salla", "Vuorikko", 32, "blue");
console.log(me);

let taimi = new Person("Taimi", "Vuorikko", 6, "brown");
console.log(taimi);