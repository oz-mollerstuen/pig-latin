let vowels = ["a","e", "i", "o", "u"];
let newStr = "";

if (vowels.indexOf(str[0]) > -1) {
  newStr = str + "way";
  return newStr;
} else {
  let firstMatch = str.match(/[aeio]/g);
  let vowel = str.indexOf(firstMatch[0]);
  newStr = str.substring(vowel) + str.substring(0, vowel) + "way"
  return newStr;
}

