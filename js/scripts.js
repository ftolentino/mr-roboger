// Business Logic
function countTo(userNum) {
  let countToArray = [];
  const userInput = parseInt(userNum);

  if(userInput <= 100) {
    for (let index = 0; index <= userInput; index += 1) {
      countToArray.push(index);
    }
  }
  return countToArray;
}

function arrayReplace(arr) {
  let newArray = []
  newArray = arr;
  const arrayOfStr = newArray.map(num => {
    return String(num);
  });
  const stringArray = arrayOfStr.toString();

  const stringArrReplace = stringArray.replaceAll(/[1]/g, 'Beep!');
  console.log(stringArrReplace);
  return stringArrReplace;
}

// UI Logic
$(document).ready(function() {
  $('#numberForm').submit(function(event) {
    event.preventDefault();
    let inputNumber = $('#numberInput').val();
    let inputArray = countTo(inputNumber);

   
    $('#output').show().html(arrayReplace(inputArray)); 
  });
});

