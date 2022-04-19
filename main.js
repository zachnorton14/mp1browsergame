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

// changes the tile being typed in based on amount of keys pressed

let currentTile = '.tile1 p'
let count = 0

function addToCounter(){
    if(count <= 4){
        count++
        currentTile = '.tile' + count + ' p'
        console.log(count)
    }
}

function removeFromCounter(){
    if(count <= 5) {
        count --
        currentTile = '.tile' + count + ' p'
        console.log(count)
    }
}

// creating the keyboard logic

function createKey(keyclass, character){
    key = document.querySelector(keyclass)
    key.addEventListener('click', () => { 
        addToCounter()
        document.querySelector(currentTile).textContent = character
    })
}

// creating the delete button

let deleteButton = document.querySelector('.delete');
deleteButton.addEventListener('click', () => { 
    document.querySelector(currentTile).textContent = " "
    removeFromCounter()
})

//invoking the keyboard functions

createKey('.a', 'A')
createKey('.b', 'B')
createKey('.c', 'C')
createKey('.d', 'D')
createKey('.e', 'E')
createKey('.f', 'F')
createKey('.g', 'G')
createKey('.h', 'H')
createKey('.i', 'I')
createKey('.j', 'J')
createKey('.k', 'K')
createKey('.l', 'L')
createKey('.m', 'M')
createKey('.n', 'N')
createKey('.o', 'O')
createKey('.p', 'P')
createKey('.q', 'Q')
createKey('.r', 'R')
createKey('.s', 'S')
createKey('.t', 'T')
createKey('.u', 'U')
createKey('.v', 'V')
createKey('.w', 'W')
createKey('.x', 'X')
createKey('.y', 'Y')
createKey('.z', 'Z')
