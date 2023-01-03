function digitize(n) {
    let a = n.toString().split("")
    let d = a.length;
    let c = d - 1;
    for (let b = 0; b < Math.trunc(a.length / 2); b++) {
        let aux = parseInt(a[c])
        a[c] = parseInt(a[b])
        a[b] = aux
        c = c - 1;
        }
    return a;
}
    
  

  console.log(digitize(1234))