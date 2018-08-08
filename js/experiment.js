// Seventh Question

// Initial variables set
var answerSeven = [];
var faveMovies = ['shane','casablanca','the godfather','godfather','thegodfather','star wars','starwars','pulp fiction','pulpfiction'];
var triesLeft = 5;
var movGuess = prompt('Guess my top five movies! What is your first guess? You have -6- tries remaining!').toLowerCase();
var hits = 0;

// They get 6 guesses
while (triesLeft>=0) {

    answerSeven.push(movGuess); //Answer Seven will ultimately be an array of thier 6 guesses.
    i=0;
    
    // This while loop should compare the current movGuess try to each of the faveMovie entries.
    for (var i=0 ; i < 9 ; i++) {
        if (movGuess === faveMovies[i]){
            alert('Wow! Great guess!'); // Acknowledges a correct guess    
            hits++; // Tallies number of correct guesses
        }
    }
    // Now that the current movGuess has been compared to the possible answers, we need to move on to the next guess.    
    var movGuess = prompt('What is your next guess? You have ' +hits+ ' correct guesses and ' +triesLeft+ ' attempts remaining!').toLowerCase();
    triesLeft--;
}

alert ('Recap: My favorite movies are: Shane, Casablanca, The Godfather, Star Wars, and Pulp Fiction! You guessed ' +answerSeven+ '. Good guessing!');