var cars = [{categories:'sedan', 
			price: 40,
			available: true,
			availQty:7},
			{categories:'SUV', 
			price: 50,
			available: true,
			availQty:9},
			{categories:'Sports', 
			price: 60,
			available: true,
			availQty:1}];

function addCars(category, price, availability, quantity){
    this.category = category;
    this.price = price;
    this.availability = availability;
    this.quantity = quantity;
    cars.push({category, price, availability, quantity});
}

function getCars(car){
    return car.categories == prompt('eneter category:', '');

};

console.log(cars.find(getCars));
