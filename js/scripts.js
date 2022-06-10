// Business Logic
function takeNumber(inputNum) {
  const inputNumArray = inputNum.split(" ");
  console.log(inputNumArray);
  return inputNumArray;
}


// UI Logic
$(document).ready(function() {
  $('#numberForm').submit(function(event) {
    event.preventDefault();
    let inputNumber = $('#numberInput').val();

    $('#output').show().text(takeNumber(inputNumber));
  });
});