const lettersDisplay = document.querySelector('.letters-display');
const alphabetDiv = document.querySelector('.alphabet');

const getRandomWord = () => {
    //Select random word and clue from wordList
    const { word, clue } = wordList [Math.floor(Math.random() * wordList.length )];
    console.log(word);
    document.querySelector('.clue-text b').innerText = clue;
    lettersDisplay.innerHTML = word.split('').map(()=>`<li class="letters"></li>`).join('');

} 

//Create the alphabet buttons
for (let i = 97; i < 123; i++){
    const button = document.createElement('button');
    button.innerText = String.fromCharCode(i);
    alphabetDiv.appendChild(button);
    
}

getRandomWord ();