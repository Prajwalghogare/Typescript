// Main class
class Vehicle {
    Type(): void {
      console.log("Car");
    }
  }
    
  // Inherites from Vehicle
  class Car extends Vehicle {
    Brand(): void {
      console.log("BMW");
    }
  }
    
  class carModel extends Car {
    Model(): void {
      console.log("M4");
    }
  }
    
  // Object creation
  let obj = new carModel();
  obj.Type();
  obj.Brand();
  obj.Model();