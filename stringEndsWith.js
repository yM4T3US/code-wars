const solution = (str, ending) => str.substring(str.length -(ending.length)) === ending ? true : false

console.log(solution("abc", "d"))