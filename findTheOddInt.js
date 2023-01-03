function findOdd(A) {
    for (let a of A) {
        if (A.filter(x => x === a).length % 2 != 0) {
            return a
        }
    } 
}

console.log(findOdd([1,2,2,3,3,3,4,3,3,3,2,2,1]))
