// Factory Method Pattern
// Easy
// Implement the Factory Method design pattern.

// The Factory Method is a creational design pattern that provides an interface for creating objects in a superclass but allows subclasses to alter the type of objects that will be created.

// You are given code that includes a few vehicles types and their respective factories. Complete the factory method implementation such that each factory returns the correct vehicle.

// Example:

// VehicleFactory carFactory = new CarFactory();
// VehicleFactory truckFactory = new TruckFactory();
// VehicleFactory bikeFactory = new BikeFactory();

// Vehicle myCar = carFactory.createVehicle();
// Vehicle myTruck = truckFactory.createVehicle();
// Vehicle myBike = bikeFactory.createVehicle();

// myCar.getType();   // "Car"
// myTruck.getType(); // "Truck"
// myBike.getType();  // "Bike"

class Vehicle {
    getType() {
        throw new Error('getType method must be overridden');
    }
}

class Car extends Vehicle {
    getType() {
        return 'Car';
    }
}

class Bike extends Vehicle {
    getType() {
        return 'Bike';
    }
}

class Truck extends Vehicle {
    getType() {
        return 'Truck';
    }
}

class VehicleFactory {
    createVehicle() {
        throw new Error('createVehicle method must be overridden');
    }
}

class CarFactory extends VehicleFactory {
    createVehicle() {
        return new Car();
    }
}

class BikeFactory extends VehicleFactory {
    createVehicle() {
        return new Bike();
    }
}

class TruckFactory extends VehicleFactory {
    createVehicle() {
        return new Truck();
    }
}

const carFactory = new CarFactory();
const truckFactory = new TruckFactory();
const bikeFactory = new BikeFactory();

const myCar = carFactory.createVehicle();
const myTruck = truckFactory.createVehicle();
const myBike = bikeFactory.createVehicle();

console.log(myCar.getType());   // "Car"
console.log(myTruck.getType()); // "Truck"
console.log(myBike.getType());  // "Bike"
