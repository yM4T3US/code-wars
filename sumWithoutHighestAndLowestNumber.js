function sumArray(array) {
    if (array === null || array === []) {
        return 0
    } else {
        var array = array.sort(function(a, b) {return a-b})
        array.shift()
        array.pop()
        return array.reduce((accumulator, currentValue) => accumulator + currentValue, 0);
    }
}

console.log(sumArray([2]))