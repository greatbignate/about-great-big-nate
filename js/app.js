'use strict';

// Get user's name
var userName = prompt('New site who dis?');
console.log ('User was prompted to provide a user name and gave ' +userName+ '.');

// Explain question sequence
alert('What is up ' +userName+ '. Check it out, I am gonna ask you some questions. You better answer with yes or no. You can answer y / n style if you are lazy.');

// First question
var answerOne = prompt('Is Nate Great?').toLowerCase();
if (answerOne === 'y' || answerOne === 'yes') {
    alert ('Durn tootin!');
} else {
    alert ('SHUT YO MOUTH FOOL!');
}
console.log ('User was asked whether Nate is great and provided ' +answerOne+ ' as a response.');

// Second Question
var answerTwo = prompt('Is Nate Big?').toLowerCase();
if (answerTwo === 'y' || answerTwo === 'yes') {
    alert ('Yup');
} else {
    alert ('You are wrong. Nate is 6ft 3in and 235lbs. He is a pretty big dude.');
}
console.log ('User was asked whether Nate is big and provided ' +answerTwo+ ' as a response.');

// Third Question
var answerThree = prompt('Is Nate very Nate-y?').toLowerCase();
if (answerThree === 'y' || answerThree === 'yes') {
    alert ('Correcto Mundo!');
} else {
    alert ('Nate is the Natiest Nate to have ever Nated. What exactly is your problem?');
}
console.log ('User was asked whether Nate is Nate-y and provided ' +answerThree+ ' as a response.');

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
var answerFive = prompt('Do we need a fifth question?').toLowerCase();
var safetyNumber = 0
console.log ('User was asked whether we needed a fifth question and answered with ' +answerFive);
while (answerFive != 'y' && answerFive != 'yes' && answerFive != 'n' && answerFive != 'no' && answerFive != 'nope') {
    safetyNumber ++;
    if (safetyNumber<10){
    alert ('Come on, ' + userName + ', this is a simple Yes-or-No question! Try again.');
    answerFive = prompt('Do we need a fifth question?').toLowerCase();
    console.log('User did not input answer in Y/N format. This has happened ' +safetyNumber+ ' times.');
    } else {
        alert ('Whatever.');
        answerFive = 'n';
    }}
if (answerFive === 'y' || answerFive === 'yes') {
    alert ('I guess we did. Moving on...');
} else if (answerFive === 'n' || answerFive === 'no' || answerFive === 'nope'){
    alert ('Well, we had a fifth question anyway. Moving on...');
}

// Sixth Question
for (var tries = 0; tries <5; tries++) {
    var pushUpGuess = random(1,10);
    console.log(pushUpGuess);
    answerSix = prompt('How many single-handed pushups can Nate do with his left arm on a given day?');
    if (pushUpGuess == answerSix){
        alert ('Wow! Great guess! Not even Nate knows the answer to that question!');
        console.log('User was prompted to guess a random number which was ' +pushUpGuess+ ' in this case. User guessed the number after ' +tries+ ' tries.')
        break
    } else {
        var triesLeft = 5-tries;
        alert ('Good guess! Unfortunately, no one knows the answer to that question. Not even Nate! Try again!');
        alert ('You have ' +triesLeft+ ' tries left.')
        console.log('User failed to guess a random number which was ' +pushUpGuess+ ' in this case. User has' +triesLeft+ 'attempt remaining.');
    }
}

// Final alerts
alert ('Now look at the webpage to see how you did on the quiz!');
alert ('The questions were a quiz by the way.');
