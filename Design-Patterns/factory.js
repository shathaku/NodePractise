function Bike(name) {
  this.name = name;
}

function Car(name) {
  this.name = name;
}

function Truck(name) {
  this.name = name;
}

function VehicleFactory() {
  this.createVehicle = function (type, name) {
    let vehicle;
    switch (type) {
      case 'Bike':
        vehicle = new Bike(name);
        break;
      case 'Car':
        vehicle = new Car(name);
        break;
      case 'Truck':
        vehicle = new Truck(name);
        break;
      default:
        break;
    }a
    vehicle.printDetails = function() {
      console.log(`I am a ${type} named ${this.name}`)
    }
    return vehicle;
  }
};
const vehicleArr = []
const v = new VehicleFactory();
vehicleArr.push(v.createVehicle('Car', 'Nexon'));
vehicleArr.push(v.createVehicle('Bike', 'Bullet'));
vehicleArr.push(v.createVehicle('Truck', 'Shaktiman'));

vehicleArr.forEach(v => v.printDetails())
