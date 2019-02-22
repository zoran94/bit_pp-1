function isPalindrome(str) {
    for (var i = 0, j = str.length - 1; i < j; i++, j--) {
        if (str[i] === " ") {
            j++;
        } else if (str[j] === " ") {
            i--;
        } else if (str[i] !== str[j]) {
            return false;
        }
    }
    return true;
}

console.log(isPalindrome("ana voli radovana"));