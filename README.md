# Mr. Roboger's Neighborhood
Epicodus Week 3 - Independent Project

#### By _**Filmer Tolentino**_

#### _Epicodus Week 3 - Independent Project_

## Technologies Used

* _HTML_
* _CSS_
* _Bootstrap_
* _JS_
* _jQuery_
* _Github_

## Description/Goals

_Create a web application that takes a number from the user and returns a range of numbers from 0 to the user inputted number with the following substitutions made within the returned range:_


## Objectives

* Numbers that contain a 1: all digits are replaced (all digits) with "Beep!"
* For example, all digits of the number 109 would be replaced with "Beep!"
* Numbers that contain a 2: all digits are replaced (all digits) with "Boop!"
* For example, all digits of the number 2099 would be replaced with "Boop!"
* Numbers that contain a 3: all digits are replaced (all digits) with "Won't you be my neighbor?"
* For example, all digits of the number 32 would be replaced with "Won't you be my neighbor?"
* Additionally, you will need to:

* Solve this prompt using loop(s), array(s), and branching logic.
* Design the application so that a user should be able to enter a new number and see new results over and over again.
* Remember that you need to return a range of numbers from 0 to the user's inputter number. See the examples below that show sample inputs and outputs.
* Write tests for your application's business logic. See the section below that covers testing.

## Examples

### Example 1: If a user inputs a 5, the program should display a list of values starting with 0 to the user's inputted number, with the numbers 1, 2, and 3 substituted with the correct phrase.

* Input: 5
* Output: "0", "Beep!", "Boop", "Won't you be my neighbor?", 4, 5

### Example 2: If a user inputs a 13, the program should display a list of values starting with 0 to the user's inputted number, with the numbers 1, 2, 3, 10, 11, 12, 13 and 14 substituted with the correct phrase.

* Input: 14
* Output: "0", "Beep", "Boop", "Won't you be my neighbor?", 4, 5, 6, 7, 8, 9, "Beep!", "Beep!", "Boop", "Won't you be my neighbor?", "Beep!"

## Setup/Installation Requirements

* _git clone **repository link**, to your local machine._
* _requires an internet connection to run (Bootstrap and jQuery are using a CDN)_
* _open the index.html file in your browser, or run Go Live in VS Code to run the code on your local host._

## Known Bugs
N/A

## Specs

```
Description: takeNumber();

Test1: Take the input number, split it into an array, console.log() the array variable to confirm there is connection between UI logic and Business Logic.
Code:
function takeNumber(inputNum) {}
const inputNumArray = inputNum.split(" ");
takeNumber(5);
Expected Output: the user's number input, 5.

Test2: Take input number and return a range of numbers from 0 to the user inputted number
Code:
let result = [];
const countTo = parseInt(userNum);
for (let index = 0; index <= countTo; index += 1) {}
takeNumber(5);
Expected Output: 0,1,2,3,4,5

Test3: Numbers 1, 2, 3 are replaced with assigned string, console.log() each condition
Code:
if(index === 1)
else if (index === 2)
else if (index === 3) 
takeNumber(11);
Expected Output: 0,Beep!,Boop!,Won't you be my neighbor!,4,5,6,7,8,9,10,11


Description arrayReplace();
Test1: Create a new array variable and assign takeNumber function
Code:
let roboArray = takeNumber(5);
console.log(roboArray)
Expected Output: [0,1,2,3,4,5]

Test2: Function takes an array parameter as an argument, loops through the array length. Replaces number 1 with Beep!, 2 with Boop!, 3 with Won't you be my neighbor?
Code:
arrayReplace(arr);
arrayReplace(inputArray);
Expected Output: 0, Beep!, Boop!, Won't you be my neighbor?, 4, 5, 6

Test3: If a user inputs a 14, the program should display a list of values starting with 0 to the user's inputted number, with the numbers 1, 2, 3, 10, 11, 12, 13 and 14 substituted with the correct phrase.
Code:
arrayReplace(inputArray);
Expected Output: "0", "Beep", "Boop", "Won't you be my neighbor?", 4, 5, 6, 7, 8, 9, "Beep!", "Beep!", "Boop", "Won't you be my neighbor?", "Beep!"

Test4: Use regex to replace all 1's in the stringArray with 'Beep!'
Code:
const arrayOfStr = newArray.map();
const stringArray = arrayOfStr.toString();
const stringArrReplace = stringArray.replaceAll(/[1]/g, 'Beep!');
Expected Output: 11, 0,Beep!,2,3,4,5,6,7,8,9,Beep!0,Beep!Beep!


```

## License
* MIT

_If you run into any issues or have any concerns, feel free to [Contact me: filmer.tolentino@gmail.com](mailto:filmer.tolentino@gmail.com), or request to make any contributions to my code._ 

Copyright (c) _5/27/2022_ _Filmer Tolentino_