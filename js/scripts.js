// Business Logic
function takeNumber(userNum) {
  let result = [];
  const countTo = parseInt(userNum);

  if(countTo > 0) {
    for (let index = 0; index <= countTo; index += 1) {
      result.push(index)
    }
  }
  // const inputNumArray = userNum.split(" ");
  return result.toString();
}


// UI Logic
$(document).ready(function() {
  $('#numberForm').submit(function(event) {
    event.preventDefault();
    let inputNumber = $('#numberInput').val();

    $('#output').show().text(takeNumber(inputNumber));
  });
});