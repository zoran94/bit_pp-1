function Car(model) {

    this.model = model;
    this.driver = null;
    this.passengers = [];
    this.speed = 0;
    this.engineRunning = false;

    this.addDriver = function (dr) {
        this.driver = dr;
    }

    this.addPassenger = function (pass) {
        this.passengers[this.passengers.length] = pass;
        this.printInfo();
    }

    this.setSpeed = function (spd) {
        this.speed = spd;
        console.log("Speed is " + spd);
    }

    this.startEngine = function () {
        if (!this.driver) {
            console.log("There is no driver in the car!!!");
            return;
        }

        this.engineRunning = true;
        console.log("Engine started");

    }

    this.turnOffEngine = function () {
        if (this.speed === 0) {
            this.engineRunning = false;
        } else {
            return;
        }

        console.log("Engine turned off!!");
        this.printInfo();
    }

    this.printInfo = function () {
        var passengerStr = "";
        for (var i = 0; i < this.passengers.length; i++) {
            passengerStr += this.passengers[i].name + ", ";
        }
        console.log("Driver is: " + this.driver.name + "\nPassengers: " + passengerStr);
        console.log("--------------------------------");
    }

}

function Person(name, id, license) {
    this.name = name;
    this.id = id;
    this.driverLicense = license;
}


var nenad = new Person("Nenad", 1501, true);
var aleksandar = new Person("Aleksandar", 2210, true);
var sapke = new Person("Sapke", 4589, false);

var car = new Car("fiat marea");

car.addDriver(nenad);
car.startEngine();
car.addPassenger(aleksandar);
car.addPassenger(sapke);
car.setSpeed(120);
car.setSpeed(0);
car.turnOffEngine();

console.log(car);





