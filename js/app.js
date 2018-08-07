'use strict';

// Get user's name
var userName = prompt('New site who dis?');
console.log ('User was prompted to provide a user name and gave ' +userName+ '.');

// Explain question sequence
alert('What is up ' +userName+ '. Check it out, I am gonna ask you some questions. You better answer with yes or no. You can answer y / n style if you are lazy.');

// First question
var answerOne = prompt('Is Nate Great?').toLowerCase();
if (answerOne === 'y' || answerOne === 'yes') {
    alert ('yeah...');
} else {
    alert ('SHUT YO MOUTH FOOL!');
}
console.log ('User was asked whether Nate is great and provided ' +answerOne+ ' as a response.');

// Second Question
var answerTwo = prompt('Is Nate Big?').toLowerCase();
if (answerTwo === 'y' || answerTwo === 'yes') {
    alert ('Yup');
} else {
    alert ('SHUT YO MOUTH FOOL!');
}
console.log ('User was asked whether Nate is big and provided ' +answerTwo+ ' as a response.');

// Third Question
var answerThree = prompt('Is Nate very Nate-y?').toLowerCase();
if (answerThree === 'y' || answerThree === 'yes') {
    alert ('Correcto Mundo!');
} else {
    alert ('SHUT YO MOUTH FOOL!');
}
console.log ('User was asked whether Nate is Nate-y and provided ' +answerThree+ ' as a response.');

// Fourth Question, but I don't feel like renaming all my variables, so I'm calling this Third point first question.

var answerThreePointOne = prompt('Is my favorite color Blue?').toLowerCase();
if (answerThreePointOne === 'y' || answerThreePointOne === 'yes') {
    alert ('BLUE is correct!!');
} else {
    alert ('No! The correct answer is that BLUE is my favorite color!');
}
console.log ('User was asked about my favorite color and provided ' +answerThreePointOne+ 'as a response.');

// Fourth Question
var answerFour = prompt('Does Nate have cats or dogs? Yes, I know this is not a yes / no question. It is still binary. Just answer. Cats or Dogs.').toLowerCase();
if (answerFour === 'c' || answerFour === 'cat' || answerFour === 'cats') {
    alert ('That is right!');
} else if (answerFour === 'd' || answerFour === 'dog' || answerFour === 'dogs') {
    alert ('No, sorry, we have CATS not DOGS...');
} else {
    alert ('How hard was it to guess "CATS" or "DOGS?"');
}
console.log ('User was asked a different binary question this time. User provided ' +answerFour+ ' as a response between a binary choice of "CATS" or "DOGS" and was confirmed correct or incorrect or mocked accordingly.');

// Fifth Question
var answerFive = prompt('Okay, ' +userName+ ', last question. Which word is cooler to say -- "YES" or "NO?"').toLowerCase();
if (answerFive === 'y' || answerFive === 'yes') {
    alert ('NOOOOOOOOOO!!!');
} else {
    alert ('YEEEESSSSSS!!!');
}
console.log ('User was asked whether they preferred to answer with "YES" or "NO" and given an extreme, opposite response to their input of ' +answerFive+ '.');

// Final alerts
alert ('Now look at the webpage to see how you did on the quiz!');
alert ('The questions were a quiz by the way.');
