const enough = (cap, on, wait) => (wait + on <= cap) ? 0 : on + wait - cap

console.log(enough(20, 5, 5))