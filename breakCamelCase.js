function solution(string) {
    let arr = []
    let str2 = ""
    for (let i in string) {
        if (string[i] === string[i].toUpperCase()) {
            arr.push(i)
        }
    }
    for (let j = 0; j < arr.length + 1; j++) {
        if (j == 0) {
            str2 += string.substring(0, arr[j])
        } else {
            str2 += " " + string.substring(arr[j -1], arr[j])
        }
    }
    return str2
}

console.log(solution(""))