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