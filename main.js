// generates/comprises the 5 letter "wordle"

async function getWordle(){
    const response = await fetch('/assets/wordle-answers-alphabetical.txt')
    const parsedWords = await response.text()
    const wordList = parsedWords.split('\n')
    let x = Math.floor(Math.random() * wordList.length);
    return wordle = wordList[x]    
}

let wordle = getWordle()

console.log(wordle)

// getting the user's input 

let tile1 = document.querySelector('.tile1')
tile1.addEventListener('keydown')
