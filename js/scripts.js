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
  let roboArray = []
  newArray = arr;
  const arrayOfStr = newArray.map(num => {
    return String(num);
  });
  // const stringArray = arrayOfStr.toString();

  // const stringArrReplace = stringArray.replaceAll(/[1]/g, 'Beep!');
  // console.log(stringArrReplace);
  arrayOfStr.forEach(function(index) {
    if(arrayOfStr[index].includes(1) && arrayOfStr[index] > 0 ) {
      console.log('Beep!');
      arrayOfStr[index] = 'Beep!';
    } else if (arrayOfStr[index].includes(2) && arrayOfStr[index] > 0) {
      console.log('Boop!')
      arrayOfStr[index] = 'Boop!';
    } else if (arrayOfStr[index].includes(3) && arrayOfStr[index] > 0) {
      console.log(`Won't you be my neighbor?`);
      arrayOfStr[index] = `Won't you be my neighbor?`
    } 
    roboArray.push(arrayOfStr[index]);
  });
  console.log(roboArray);

  return roboArray.join(', ');
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

