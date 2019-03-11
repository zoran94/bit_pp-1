'use strict'

function Person(name, surname) {
    this.name = name;
    this.surname = surname;

    this.getData = function () {
        return this.name + " " + this.surname;
    }
}

function Seat(number, category) {
    var randomNum = Math.floor(Math.random() * 91 + 10);

    this.number = number || randomNum;
    this.category = category || 'e';

    this.getData = function () {
        return this.number + ", " + this.category.toUpperCase();
    }

}

function Passenger(person, seat) {
    this.person = person;
    this.seat = seat;

    this.getData = function () {
        return this.seat.getData() + ", " + this.person.getData();
    }
}

function Flight(relation, date) {
    this.relation = relation;
    this.date = new Date(date);
    this.listOfPassengers = [];

    this.addPassenger = function (pass) {
        this.listOfPassengers.push(pass);
    };

    this.getData = function () {
        var firstLine = this.date.getDate() + "." + (this.date.getMonth() + 1) + "." + this.date.getFullYear() + ", " + this.relation;
        var otherLines = '';

        for (var i = 0; i < this.listOfPassengers.length; i++) {
            var element = this.listOfPassengers[i];
            otherLines += "\t\t\t\t" + element.getData() + "\n";
        }

        return firstLine + "\n" + otherLines;
    }

    // this.getData1 = function () {
    //     var splited = this.relation.split(' - ');

    //     var word1 = splited[0].charAt(0).toUpperCase() + splited[0].charAt(splited[0].length - 1).toUpperCase();
    //     var word2 = splited[1].charAt(0).toUpperCase() + splited[1].charAt(splited[1].length - 1).toUpperCase();
    //     var completeWord = word1 + " - " + word2;

    //     var firstLine = this.date.getDate() + "." + (this.date.getMonth() + 1) + "." + this.date.getFullYear() + ", " + completeWord;
    //     var otherLines = '';

    //     for (var i = 0; i < this.listOfPassengers.length; i++) {
    //         var element = this.listOfPassengers[i];
    //         otherLines += "\t\t\t\t" + element.getData() + "\n";
    //     }

    //     return firstLine + "\n" + otherLines;
    // }
}

function Airport() {
    this.name = 'Nikola Tesla';
    this.listOfFlights = [];
    this.totalPassengers = 0;

    this.addFlight = function (flight) {
        this.listOfFlights.push(flight);
        this.totalPassengers += flight.listOfPassengers.length;
    }

    this.getData = function () {
        var firstLine = 'Airport: ' + this.name + ", total passengers: " + this.totalPassengers;
        var otherLines = '';

        for (var i = 0; i < this.listOfFlights.length; i++) {
            var element = this.listOfFlights[i];
            otherLines += '\t' + element.getData();
        }
        return firstLine + "\n" + otherLines;
    }
}



var main = (function () {

    function createFlight(relation, date) {
        return new Flight(relation, date);
    }

    function createPassenger(firstName, lastName, seatNumber, category) {
        var person1 = new Person(firstName, lastName);
        var seat1 = new Seat(seatNumber, category);

        return new Passenger(person1, seat1);
    }


    var nikolaTesla = new Airport();

    var belgradeNy = createFlight('Belgrade - New York', 'Oct 25 2017');
    var barcelonaBg = createFlight('Barcelona - Belgrade', 'Nov 11 2017');

    var john = createPassenger('John', 'Snow', 1, 'b');
    var cersei = createPassenger('Cersei', 'Lannister', 2, 'b');
    var daenerys = createPassenger('Daenerys', 'Targaryen', 14);
    var tyrion = createPassenger('Tyrion', 'Lannister');

    belgradeNy.addPassenger(john);
    belgradeNy.addPassenger(cersei);

    barcelonaBg.addPassenger(daenerys);
    barcelonaBg.addPassenger(tyrion);

    nikolaTesla.addFlight(belgradeNy);
    nikolaTesla.addFlight(barcelonaBg);

    console.log(nikolaTesla.getData());
})();