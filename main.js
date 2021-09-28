import Car, { calcMilage } from './car.js';

let myCar = new Car('Mitsubishi', 100, 'Fahd');


console.log('Milage: ' + myCar.milage);
console.log('Brand: ' + myCar.brand);
console.log('Owner: ' + myCar.owner);
console.log('Predicted Milage: ' + calcMilage(myCar));