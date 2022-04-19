// generates/comprises the 5 letter "wordle"

async function getWordle(){
    const response = await fetch('/assets/wordle-answers-alphabetical.txt')
    const parsedWords = await response.text()
    const wordList = parsedWords.split('\n')
    let x = Math.floor(Math.random() * wordList.length);
    return wordle = wordList[x]    
}

// changes the tile being typed in based on amount of keys pressed

let currentTile = '.tile1 p';
let count = 0;
let i = 0;
const comparisonTiles = [5, 10, 15, 20, 25, 30];

function addToCounter(){
    if(count < comparisonTiles[i]){
        currentTile = '.tile' + (count + 1) + ' p'
        count++
        console.log(count)
    }
}

function removeFromCounter(){
    if (count > i * 5){
        document.querySelector(currentTile).textContent = " "
        count--
        currentTile = '.tile' + count + ' p'
        console.log(count)
    }
}

function enterCounter(){
    if (count %5 === 0){
        i++
    } else {
        console.log('Not enough characters!')
    }
    console.log(count)
}
// creating the keyboard logic

function createKey(keyclass, character){
    key = document.querySelector(keyclass)
    key.addEventListener('click', () => { 
        addToCounter()
        document.querySelector(currentTile).textContent = character
    })
}

function keyboardEvent(){
    document.addEventListener('keydown', (e) => {
        if (`${e.code}`.match(/Key[A-Z]/)){
            addToCounter()
            document.querySelector(currentTile).textContent =`${e.key}`.toUpperCase()
        } else if (`${e.code}` === 'Backspace'){
            removeFromCounter()
        } else if (`${e.code}` === 'Enter'){
            enterCounter()
        } else {
            console.log('That key does not exist')
        }
    })
}

// creating the delete button

let deleteButton = document.querySelector('.delete')
deleteButton.addEventListener('click', () => { 
    removeFromCounter()
})

// creating the enter button

let enterButton = document.querySelector('.enter')
enterButton.addEventListener('click', () => {
    enterCounter()
})

// invoking the keyboard functions

keyboardEvent()
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

// changing the color of the tiles based on the "wordle"

async function compareWordle(){
    let wordle = await getWordle()
    
}