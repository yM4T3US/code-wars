const zeroFuel = (distanceToPump, mpg, fuelLeft) => (fuelLeft * mpg >= distanceToPump) ? true : false;

console.log(zeroFuel(100, 50, 1))