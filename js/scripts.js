// Business Logic
function countTo(userNum) {
  let countToArray = [];
  const userInput = parseInt(userNum);

  if (userInput <= 100) {
    for (let index = 0; index <= userInput; index += 1) {
      countToArray.push(index);
    }
  }
  return countToArray;
}

function arrayReplace(arr) {
  let newArray = [];
  let roboArray = [];
  newArray = arr;
  const arrayOfStr = newArray.map((num) => {
    return String(num);
  });
  arrayOfStr.forEach(function (index) {
    if (arrayOfStr[index].includes(3)) {
      arrayOfStr[index] = `Won't you be my neighbor?`;
    } else if (arrayOfStr[index].includes(2)) {
      arrayOfStr[index] = "Boop!";
    } else if (arrayOfStr[index].includes(1)) {
      arrayOfStr[index] = `Beep!`;
    }
    roboArray.push(arrayOfStr[index]);
  });

  return roboArray.join(", ");
}

// UI Logic
$(document).ready(function () {
  $("#numberForm").submit(function (event) {
    event.preventDefault();
    let inputNumber = $("#numberInput").val();
    let inputArray = countTo(inputNumber);

    $("#output").show().html(arrayReplace(inputArray));
  });
});
