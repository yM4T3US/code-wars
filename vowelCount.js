function getCount(str) {
    let array = ["A", "E", "I", "O", "U"]
    str = str.toUpperCase();
    let vowels = 0;
    for (let i = 0; i < str.length; i++) {
      if (array.includes(str.charAt(i))) {
        vowels += 1;
      }
    }
    return vowels;
  }

  console.log(getCount("abracadabra"))