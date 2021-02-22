let formInput = document.querySelector("#inputData");

function Car(licence, maker, model, price, color) {
  this.licence = licence;
  this.maker = maker;
  this.model = model;
  this.price = price;
  this.color = color;
  this.discount = function () {
    if (this.discount >= 20000) {
        this.discount = 0.75 * this.price;
    } else if (price <= 5000) {
        this.discount = 0.9 * this.price;
    } else {
        this.discount = 0.85 * this.price;
    }
}
this.discount();
}

let cars = [];

const newCar = () => {
  event.preventDefault();
  let licence = document.getElementById("licence").value;
  let maker = document.getElementById("maker").value;
  let model = document.getElementById("model").value;
  let price = document.getElementById("price").value;
  let color = document.getElementById("color").value;


  let addCar = new Car(licence, maker, model, price, color);
  cars.push(addCar);
  console.table(cars);
  formInput.reset();
};


const search = () => {
  event.preventDefault();
  let licence = document.getElementById("licenceSearch").value;
  let text = document.querySelector("p");
  let found = false;

  if (cars.length == 0) {
    text.textContent = "Add at least one car first";
  } else {
      
    cars.forEach((element) => {

      if (element.licence == licence) {
          
        text.textContent =
          "The car with licence plate " +
          element.licence +
          " is " +
          element.maker +
          " " +
          element.model + "." + " You can buy it for discounted price " + element.discount + " €.";
          found = true;
      } else {
        return false;
      }
        
    });
    if (found == false) {
        text.textContent = "There is no car with that licence plate";
    }
  }
  formInput.reset();
};
