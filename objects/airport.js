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
        var cat = '';
        if (this.category === 'e') {
            cat = 'economy';
        } else if (this.category === 'b') {
            cat = 'business';
        }
        return this.number + ", " + cat;
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
    this.numOfBusPassengers = 0;

    this.addPassenger = function (pass) {
        var numArr = [];

        for (var i = 0; i < this.listOfPassengers.length; i++) {
            var element = this.listOfPassengers[i];
            numArr.push(element.seat.number);
        }

        if (this.listOfPassengers.length > 100) {
            return console.log('There are no free seats!');
        } else if (numArr.indexOf(pass.seat.number) > -1) {
            return console.log('Seat is already taken');
        } else {
            this.listOfPassengers.push(pass);
        }

        if (pass.seat.category === 'b') {
            this.numOfBusPassengers++;
        }
    };

    this.getData = function () {
        var vowels = 'aeiou';
        var a = this.relation;
        var splitted = a.split(' - ');
        var word1 = splitted[0];
        var word2 = splitted[1];
        var firstLetterStWord = splitted[0][0];
        var firstLetterNdWord = splitted[1][0];
        var secondLetterStWord = '';
        var secondLetterNdWord = '';
        var output = '';

        for (var i = word1.length - 1; i >= 0; i--) {
            var letter = word1[i];
            if (vowels.indexOf(letter) === -1) {
                secondLetterStWord = letter.toUpperCase();
                break;
            }
        }

        for (var i = word2.length - 1; i >= 0; i--) {
            var letter = word2[i];
            if (vowels.indexOf(letter) === -1) {
                secondLetterNdWord = letter.toUpperCase();
                break;
            }
        }

        output = firstLetterStWord + secondLetterStWord + " - " + firstLetterNdWord + secondLetterNdWord;

        var firstLine = this.date.getDate() + "." + (this.date.getMonth() + 1) + "." + this.date.getFullYear() + ", " + output;
        var otherLines = '';

        for (var i = 0; i < this.listOfPassengers.length; i++) {
            var element = this.listOfPassengers[i];
            otherLines += "\t\t\t\t" + element.getData() + "\n";
        }

        return firstLine + "\n" + otherLines;
    }
}

function Airport() {
    this.name = 'Nikola Tesla';
    this.listOfFlights = [];
    this.totalPassengers = 0;
    this.totalBusinessPassengers = 0;

    this.addFlight = function (flight) {
        this.listOfFlights.push(flight);
        this.totalPassengers += flight.listOfPassengers.length;
        this.totalBusinessPassengers += flight.numOfBusPassengers;
    }

    this.getData = function () {
        var firstLine = 'Airport: ' + this.name + ", total passengers: " + this.totalPassengers + ', total business passengers: ' + this.totalBusinessPassengers;
        var otherLines = '';

        for (var i = 0; i < this.listOfFlights.length; i++) {
            var element = this.listOfFlights[i];
            otherLines += '\t' + element.getData();
        }
        return firstLine + "\n" + otherLines;
    }
}

// ----------------------- Program starts here! -----------------------------------

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



