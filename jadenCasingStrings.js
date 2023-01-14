String.prototype.toJadenCase = function () {
    return this.split(" ").map(e => e[0].toUpperCase() + e.substring(1,)).join(" ")
};

var str = "How can mirrors be real if our eyes aren't real";
console.log(str.toJadenCase())