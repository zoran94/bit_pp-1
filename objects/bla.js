function createProgram(a, b) {
    var output = {
        name: a,
        repository: b,
        printRep: function () {
            console.log(this.repository);
        },
    }
    return output;
}

var sumProgram = createProgram("BIT", "Igor");

sumProgram.printRep();