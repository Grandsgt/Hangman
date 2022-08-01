const alpha = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K',
 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z']

 let customWords = [];
 let countries = ['england', 'wales', 'scotland'];
 let historic = ['hastings', 'ceasar', 'shogunate'];
 let fantasy = ['legolas', 'alpharius', 'sigmar'];
 let coding = ['test', 'java', 'multiverse'];
 let words = ['test', 'java', 'multiverse'];
 let word = [];
 let tl = 0;
 let answer = [];
 let guesses = 5;
 let difficulty = 'easy';

 const submission = document.getElementById('sub');
 submission.addEventListener('click', makeArr);

 const geo1 = document.getElementById('geo');
 geo1.addEventListener('click', geoGenre);

 const hist1 = document.getElementById('history');
 hist1.addEventListener('click', histGenre);

 const fan1 = document.getElementById('fantasy');
fan1.addEventListener('click', fanGenre);

const code1 = document.getElementById('coding');
code1.addEventListener('click', codeGenre);

function geoGenre() {
    words = countries;
    return updateWord();
}

function histGenre() {
    words = historic;
    return updateWord();
}

function fanGenre() {
    words = fantasy;
    return updateWord();
}

function codeGenre() {
    words = coding;
    return updateWord();
}


 const nav = document.querySelector('.navigation');
 const navToggle = document.querySelector('.nav-toggle');
 navToggle.addEventListener('click', (e) => {
     const visibility = nav.getAttribute('data-visible');
     if (visibility === 'false') {
         nav.setAttribute('data-visible', 'true');
         navToggle.setAttribute('aria-expanded', 'true');
 }   else nav.setAttribute('data-visible', 'false');
         navToggle.setAttribute('aria-expanded', 'false');
});
 

function newGame() {
    guesses = 10;
    for (i = 0; i < alpha.length; i++) {
        const myBtn = document.createElement('button');
        const insert = document.getElementById('alphabet');
        myBtn.setAttribute('id', 'btn-'+ alpha[i]);
        myBtn.setAttribute('class', 'alpha-btn');
        myBtn.innerText = alpha[i];
        myBtn.addEventListener('click',(e) => {
            checker(e.target.innerText);
            console.log(e.target.innerText);
          }); 
        insert.appendChild(myBtn);
    } 
    return setWord();
 }
function setWord() {
    answer = [];
    word = words[Math.floor(Math.random() * words.length)];
    word = word.toUpperCase().split('');
    tl = word.length;
    for (i = 0; i < word.length; i++) {
        if (/^[A-Za-z]*$/.test(word[i])){
            answer.push('_');
        } else if (word[i] === ' ') {
            answer.push('/')
            tl--;
        } else { answer.push(word[i]);
            tl--;
        }
        const letterDisplay = document.createElement('p');
        const insert = document.getElementById('game');
        letterDisplay.setAttribute('name', 'displayChar');
        letterDisplay.setAttribute('id', 'block-'+i);
        letterDisplay.setAttribute('class', 'character');
        letterDisplay.innerText = answer[i];
        insert.appendChild(letterDisplay);
    }
}

function makeArr() {
    words = document.getElementById('customWord').value.split(" ");
    console.log(customWords);
    return words + updateWord();
}

function updateWord(){
    const cleanerList = document.querySelectorAll('.character');
    cleanerList.forEach(character => {character.remove()});
    return setWord();
}
 function checker(input) {
    let j = 0;
    let inputCaps = input.toUpperCase();
    for (i = 0; i < word.length; i++) {
        if (word[i] == inputCaps) {
            answer[i] = inputCaps;
            let updateCharacter = document.getElementById('block-'+i);
            updateCharacter.innerText = inputCaps;
            tl--;
            j++;
            if (tl == 0) {
                console.log('Winner');
                for (i = 0; i < alpha.length; i++) {
                    document.getElementById('btn-' + alpha[i]).disabled = true;
                }
                
                // placeholder for winning text pop up.
            }
        } 
    } if (j == 0) {
        guesses--;
        if(difficulty == 'easy') {
            if(guesses == 9) {
                stage1();
            }
            if(guesses == 8) {
                stage2();
            }
            if(guesses == 7) {
                stage3();
            }
            if(guesses == 6) {
                stage4();
            }
            if(guesses == 5) {
                stage5();
            }
            if(guesses == 4) {
                stage6();
            }
            if(guesses == 3) {
                stage7();
            }
            if(guesses == 2) {
                stage8();
            }
            if(guesses == 1) {
                stage9();
            }
            if(guesses == 0) {
                stage10();

                console.log('Loser!');
            }
        } else if (difficulty == 'normal') {
            if(guesses == 4) {
                stage1();
                stage2();
            }
            if(guesses == 3) {
                stage3();
                stage4();
            }
            if(guesses == 2) {
                stage5();
                stage6();
            }
            if(guesses == 1) {
                stage7();
                stage10();
            }
            if(guesses == 0) {
                stage8();
                stage9();
                console.log('Loser!')
            }
        } else if (difficulty == 'hard') {
            if (guesses == 1) {
                stage1();
                stage2();
                stage3();
                stage4();
                stage5();
            }
            if (guesses == 0) {
                stage6();
                stage7();
                stage8();
                stage9();
                stage10();
                console.log('Loser!')
                
            }
        }
    }
    document.getElementById('btn-' + input).disabled = true;
 }

 const ez = document.getElementById('easy');
 ez.addEventListener('click', setEasy);
 function setEasy(){
    difficulty = 'easy';
    console.log('Easy');
    return reseter();
 }
 
 const norm = document.getElementById('normal');
 norm.addEventListener('click', setNormal);
 function setNormal(){
    difficulty = 'normal';
    console.log('Normal');
    return reseter();
 }

 const hrd = document.getElementById('hard');
 hrd.addEventListener('click', setHard);
 function setHard(){
    difficulty = 'hard';
    console.log('Hard');
    return reseter();
 }

 const regm = document.getElementById('reset');
 regm.addEventListener('click', reseter);

 function reseter(){
    const canvas = document.getElementById('gallows');
    const context = canvas.getContext('2d');
    context.clearRect(0, 0, canvas.width, canvas.height);
    for (i = 0; i < alpha.length; i++) {
        document.getElementById('btn-' + alpha[i]).disabled = false;
        if (difficulty === 'easy') {
            guesses = 10;
        } else if (difficulty === 'normal') {
            guesses = 5;
        } else {guesses = 2;}
    } updateWord();
 }

 /* to do list:
 graphic displays eg( win/lose pop ups etc..)*/


 // drawing on canvas code below
 function stage1() {
    let canvas = document.getElementById('gallows');
    let context = canvas.getContext('2d');
    context.beginPath();
    context.moveTo(20, 140);
    context.lineTo(180, 140);
    context.strokeStyle = '#ffffff';
    context.lineWidth = 3;
    context.stroke();
    console.log('gallow-base')
 }
 function stage2() {
    let canvas = document.getElementById('gallows');
    let context = canvas.getContext('2d');
    context.beginPath();
    context.moveTo(20, 140);
    context.lineTo(20, 30);
    context.strokeStyle = '#ffffff';
    context.lineWidth = 3;
    context.stroke();
    console.log('gallow-pole')
 }
 function stage3() {
    let canvas = document.getElementById('gallows');
    let context = canvas.getContext('2d');
    context.beginPath();
    context.moveTo(20, 30);
    context.lineTo(100, 30);
    context.strokeStyle = '#ffffff';
    context.lineWidth = 3;
    context.stroke();
    console.log('gallow-top')
 }
 function stage4() {
    let canvas = document.getElementById('gallows');
    let context = canvas.getContext('2d');
    context.beginPath();
    context.moveTo(50, 30);
    context.lineTo(20, 50);
    context.strokeStyle = '#ffffff';
    context.lineWidth = 3;
    context.stroke();
    console.log('gallow-support')
 }
 function stage5() {
    let canvas = document.getElementById('gallows');
    let context = canvas.getContext('2d');
    context.beginPath();
    context.moveTo(100, 30);
    context.lineTo(100, 40);
    context.strokeStyle = '#ffffff';
    context.stroke();
    console.log('rope')
 }
 function stage6() {
    let canvas = document.getElementById('gallows');
    let context = canvas.getContext('2d');
    context.beginPath();
    context.arc(100, 50, 10, 0, 2 * Math.PI);
    context.strokeStyle = '#ffffff';
    context.lineWidth = 3;
    context.stroke();
    console.log('head')
 }
 function stage7() {
    let canvas = document.getElementById('gallows');
    let context = canvas.getContext('2d');
    context.beginPath();
    context.moveTo(100, 60);
    context.lineTo(100, 100);
    context.strokeStyle = '#ffffff';
    context.lineWidth = 3;
    context.stroke();
    console.log('body-main')
 }
 function stage8() {
    let canvas = document.getElementById('gallows');
    let context = canvas.getContext('2d');
    context.beginPath();
    context.moveTo(100, 100);
    context.lineTo(90, 130);
    context.strokeStyle = '#ffffff';
    context.lineWidth = 3;
    context.stroke();
    console.log('leg1')
 }
 function stage9() {
    let canvas = document.getElementById('gallows');
    let context = canvas.getContext('2d');
    context.beginPath();
    context.moveTo(100, 100);
    context.lineTo(110, 130);
    context.strokeStyle = '#ffffff';
    context.lineWidth = 3;
    context.stroke();
    console.log('leg2')
 }
 function stage10() {
    let canvas = document.getElementById('gallows');
    let context = canvas.getContext('2d');
    context.beginPath();
    context.moveTo(70, 70);
    context.lineTo(130, 70);
    context.strokeStyle = '#ffffff';
    context.lineWidth = 3;
    context.stroke();
    console.log('arms')
    for (i = 0; i < alpha.length; i++) {
        document.getElementById('btn-' + alpha[i]).disabled = true;
    }
 }

 

 /* lives counter. 
 display difficulty.
 expand answers array.
 stop inputs after loss or win.
 test.
 */