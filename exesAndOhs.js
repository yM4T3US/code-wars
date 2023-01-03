function XO(str) {
    str = str.toUpperCase();
    let qtdX = 0;
    let qtdY = 0;
    if (str.length == 0) {
        return true;
    }

    if (str.includes("X") && str.includes("O")) {
        for (let i = 0; i < str.length; i++) {
            if (str.charAt(i) == "X") {
                qtdX += 1;
            } else if (str.charAt(i) == "O") {
                qtdY += 1;
            }
        }
        if (qtdX == qtdY) {
            return true;
        } else {
            return false;
        }
    } 
    return false;
}


console.log(XO('xo'))
console.log(XO("xxOo"))
console.log(XO("xxxm"))
console.log(XO("Oo"))
console.log(XO("ooom"))
console.log(XO(""))
