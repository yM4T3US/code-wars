function isIsogram(str){
  str = str.toUpperCase();
  console.log(str);
  for (let i = 0; i < str.length; i++) {
    let newString = str.replace(str.charAt(i), "");
    if (newString.includes(str.charAt(i))) {
      return false;
    }
  }
  return true;
}

console.log(isIsogram("moOse"))