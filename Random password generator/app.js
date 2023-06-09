//  here i have declare all my datasets of keyboard

const upperSet = "ABCDEFGHIJKLMNOPQRSTUVWXZY";
const lowerSet = "abcdefghijklmnopqrstuvwxyz";
const numberSet = "1234567890";
const symbolSet = "~!@#$%^&*()_+<>,.?/:;'{}[]|";

/// here is all my all selector which contains data set
const passBox = document.getElementById("pass-box");
const totalChar = document.getElementById("total-char");
const upperInput = document.getElementById("upper-case");
const lowerInput = document.getElementById("lower-case");
const numberInput = document.getElementById("numbers");
const symbolInput = document.getElementById("symbols");


/// here is a function which takes a random number from data set
const getRandomData = (dataSet) => {
  return dataSet[Math.floor(Math.random() * dataSet.length)];
};



// here a function which generates a complete password for us
const generatePassword = (password = "") => {
  if (upperInput.checked) {
    password = password + getRandomData(upperSet);
  }
  if (lowerInput.checked) {
    password = password + getRandomData(lowerSet);
  }
  if (numberInput.checked) {
    password = password + getRandomData(numberSet);
  }
  if (symbolInput.checked) {
    password = password + getRandomData(symbolSet);
  }

  if (password.length < totalChar.value) {
    return generatePassword(password);
}

passBox.innerText = truncateString(password, totalChar.value);

};



/////////// button 

document.getElementById("btn").addEventListener("click", function () {
  generatePassword();
});


function truncateString(str, num) {
    if (str.length > num) {
        let subStr = str.substring(0, num);
        return subStr;
    } else {
        return str;
    }
}