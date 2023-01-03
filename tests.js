let str = "camelCasingBall"
let arr = []
let str2 = ""
for (let i in str) {
    if (str[i] === str[i].toUpperCase()) {
        arr.push(i)
    }
}
for (let j = 0; j < arr.length + 1; j++) {
    if (j == 0) {
        str2 += str.substring(0, arr[j])
    } else {
        str2 += " " + str.substring(arr[j -1], arr[j])
    }
}
console.log(str2)