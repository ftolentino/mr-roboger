// Business Logic
function takeNumber(userNum) {
  let result = [];
  const countTo = parseInt(userNum);

  if(countTo > 0) {
    for (let index = 0; index <= countTo; index += 1) {
      if(index === 1) {
        console.log('Beep!');
      } else if (index === 2) {
        console.log('Boop!')
      } else if (index === 3) {
        console.log(`Won't you be my neighbor!`);
      } else console.log(index);
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

    $('#output').show().html(takeNumber(inputNumber)); 
  });
});