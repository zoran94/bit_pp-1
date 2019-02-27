
var example = [1, 1, 8, 9, 5, 3, 4, 5, 5, 5, 1, 1, 1, 1, 1, 5];

function mostFrequent(arr) {
    var elIndex = 0;
    var count = 0;
    var completeCount = 0;

    for (var i = 0; i < arr.length; i++) {
        for (var j = 0; j < arr.length; j++) {
            if (arr[i] === arr[j]) {
                count++;
            }
        }
        if (count > completeCount) {
            completeCount = count;
            elIndex = i;
        }
        count = 0;
    }

    return arr[elIndex];
}

console.log(mostFrequent(example));