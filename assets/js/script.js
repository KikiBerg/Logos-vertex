const lettersDisplay = document.querySelector('.letters-display');
const chancesText = document.querySelector('.chances-text b');
const alphabetDiv = document.querySelector('.alphabet');
const gamePopup = document.querySelector('.game-pop-up');

let presentWord, occuringLetters = [], wrongChancesCount = 0;
const maxChances = 5;

const getRandomWord = () => {
    //Select random word and clue from wordList
    const { word, clue } = wordList [Math.floor(Math.random() * wordList.length )];
    presentWord = word;
    console.log(word);
    document.querySelector('.clue-text b').innerText = clue;
    lettersDisplay.innerHTML = word.split('').map(()=>`<li class="letters"></li>`).join('');
} 


const gameOver = (isWin) => {
    //Pop up window when winning or failing
    setTimeout(() => {
        const popupText = isWin ? `Awesome, you identified the word:` : `The right word was:`;
        gamePopup.querySelector('img').src = `assets/images/${isWin ? 'win' : 'tryagain'}.jpg`;
        gamePopup.querySelector('h4').innerText = isWin ? 'Excellent!' : 'Try again!';
        gamePopup.querySelector('p').innerHTML = `${popupText} <b>${presentWord}</b>`;
        gamePopup.classList.add('display');
    }, 300);
}



//Initialise the game
const initGame = (button, chosenLetter) => {
    //Check if the chosen letter occurs in the word
    if(presentWord.includes(chosenLetter)) {
        //Show the correct chosen letters
        [...presentWord].forEach((letter, index) =>{
            if(letter === chosenLetter) {
                occuringLetters.push(letter);
                lettersDisplay.querySelectorAll('li')[index].innerText = letter;
                lettersDisplay.querySelectorAll('li')[index].classList.add('chosen');
            }

        })
    } else {
        //Update chances-used text when choosing a letter that does not occur in the word
        wrongChancesCount++;
    }
    
    button.disabled = true; //disable an already chosen letter from being chosen again
    chancesText.innerText = `${wrongChancesCount} / ${maxChances}`;
    
    //Call the end of the game when failing or winning
    if(wrongChancesCount === maxChances) return gameOver(false);
    if(occuringLetters.length === presentWord.length) return gameOver(true);

}

//Create the alphabet buttons and add eventListeners
for (let i = 97; i < 123; i++){
    const button = document.createElement('button');
    button.innerText = String.fromCharCode(i);
    alphabetDiv.appendChild(button);
    button.addEventListener('click', e => initGame(e.target, String.fromCharCode(i)));
    
}

getRandomWord ();