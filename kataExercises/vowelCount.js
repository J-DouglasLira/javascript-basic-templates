function getCount(str) {
  myNewStr = str.split(""); // convertendo em um array; [d.o.u.g]
  var vowelsCount = 0;
  for (let i = 0; i < myNewStr.length; i++) {
    switch (myNewStr[i]) {
      case "a":
        vowelsCount += 1;
        break;
      case "e":
        vowelsCount += 1;
        break;
      case "i":
        vowelsCount += 1;
        break;
      case "o":
        vowelsCount += 1;
        break;
      case "u":
        vowelsCount += 1;
      default:
        vowelsCount = vowelsCount;
    }
  }
  return vowelsCount;
}

//console.log(getCount("douglas"));

// second solution

let str2 = "douglas";
function numbersOfVowels(str2) {
  var vowels = ["a", "e", "i", "o", "u"];
  let myNewArray = str2.split("");
  const callback = (currentString) =>
  vowels.includes(currentString)
  numbersOfVowels = myNewArray.filter(callback).length;
  return numbersOfVowels;
}


console.log(numbersOfVowels(str2));

