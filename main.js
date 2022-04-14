// generates/comprises the 5 letter "wordle"

async function getWordle(){
    const response = await fetch('/assets/wordle-answers-alphabetical.txt')
    const parsedWords = await response.text()
    const wordList = parsedWords.split('\n')
    let x = Math.floor(Math.random() * wordList.length);
    return wordle = wordList[x]    
}

console.log(wordle)







// gets the users first input
// async function getGuess(){
//     await window.prompt('Input a 5 letter word as your guess')
// }

// getGuess()