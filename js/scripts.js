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

// function arrayReplace(arr, old_value, new_value ) {
//   let newArray = [];
//   console.log(roboArray);
//   roboArray.forEach(function(index) {
//     if(index == '1') {
//       console.log('Beep!');
//     } else if (index === 2) {
//       console.log('Boop!')
//     } else if (index === 3) {
//       console.log(`Won't you be my neighbor!`);
//     } else {
//      console.log(index);
//     }
//     return newArray.push(index);
//   });
// }

function arrayReplace(arr) {
  for(let i = 0; i <arr.length; i++) {
    if (arr[i] === 1) {
      arr[i] = 'Beep!';
    } else if (arr[i] === 2) {
      arr[i] = 'Boop!';
    } else if (arr[i] === 3) {
      arr[i] = `Won't you be my neighbor?`;
    }
  }
  return arr.toString();
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

