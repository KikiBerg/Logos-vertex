const alphabetDiv = document.querySelector('.alphabet');

const getRandomWord = () => {
    
} 

//Create the alphabet buttons
for (let i = 97; i < 123; i++){
    const button = document.createElement('button');
    button.innerText = String.fromCharCode(i);
    alphabetDiv.appendChild(button);
    
}