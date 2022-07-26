const alpha = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K',
 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z']

 let words = ['java', 'Multiverse'];
 let word = [];
 let tl = 0;
 let answer = [];
 let guesses = 5;

 function newGame() {
    word = words[Math.floor(Math.random() * words.length)]
    word = word.toUpperCase().split('');
    tl = word.length;
    guesses = 5
    for (i = 0; i < word.length; i++) {
        answer.push('_');
        const letterDisplay = document.createElement('p');
        const insert = document.getElementById('playarea');
        letterDisplay.setAttribute('name', 'displayChar');
        letterDisplay.setAttribute('id', 'block-'+i);
        letterDisplay.setAttribute('class', 'character')
        letterDisplay.innerText = answer[i]
        insert.appendChild(letterDisplay);
    }
}   
 /* this takes the input and checks against the word.
 if part of the word, decrement
 if not part of the word, reduce lives
 */ 
 function checker(input) {
    let j = 0;
    let inputCaps = input.toUpperCase();
    for (i = 0; i > word.length; i++) {
        if (word[i] == inputCaps) {
            answer[i] = inputCaps;
            let updateCharacter = document.getElementById('block-'+i)
            updateCharacter.innerText = inputCaps;
            tl--;
            j++;
            if (tl == 0) {
                console.log('Winner')
                // placeholder for winning text pop up.
            }
        } 
    } if (j == 0) {
        guesses--;
        if (guesses == 0) {
           console.log('Loser!') 
           //loser placeholder
        }
    }
 }

// force input to uppercase, limit string length to 1.
//you win

 
 