// Business Logic
function takeNumber(userNum) {
  let numberArray = [];
  const countTo = parseInt(userNum);

  if(countTo <= 100) {
    for (let index = 0; index <= countTo; index += 1) {
      numberArray.push(index);
    }
  }
  return numberArray;
}

function arrayReplace(arr) {
  let newArray = []
  newArray = arr;
  const arrOfStr = newArray.map(num => {
    return String(num);
  });

  const arrReplace = arrOfStr.map(element => {
    if (element === element.includes('1')) {
      element = 'Beep!'
    } else if (element === '2') {
      element = 'Boop!';
    } else if (element === '3') {
      element = `Won't you be my neighbor?`;
    }
    return String(element);
  });
  console.log(arrReplace);
 
  return arrReplace.toString();
}

// UI Logic
$(document).ready(function() {
  $('#numberForm').submit(function(event) {
    event.preventDefault();
    let inputNumber = $('#numberInput').val();
    let inputArray = takeNumber(inputNumber);

   
    $('#output').show().html(arrayReplace(inputArray)); 
  });
});

