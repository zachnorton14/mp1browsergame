
let wordle;
let wordList;

window.onload = () => {
    wordle = getWordle()
    console.log(wordle)
    wordList = getWordList()
    console.log(wordList)
}

// generates/comprises the 5 letter "wordle"

async function getWordle(){
    const response = await fetch('/assets/wordle-answers-alphabetical.txt')
    const parsedWords = await response.text()
    const wordList = parsedWords.split('\n')
    let x = Math.floor(Math.random() * wordList.length);
    return wordle = wordList[x]    
}

// pulls the word list from the assets

async function getWordList(){
    const response = await fetch('/assets/wordle-answers-alphabetical.txt')
    const parsedWords = await response.text()
    return wordList = parsedWords.split('\n')
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
            enterFunction()
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
    enterFunction()
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

/* gathering the tiles based on the count, when enter is pressed, and changing the 
color of the tiles based on the "wordle" */

function enterFunction(){
        
    // creating a row object that exists only when a whole guess has been inputted

    row = {
        tile1: {
            location: document.querySelector('.tile' + (count - 4)),
            text: document.querySelector('.tile' + (count - 4) + ' p').textContent.toLowerCase()
        },
        tile2: {
            location: document.querySelector('.tile' + (count - 3)),
            text: document.querySelector('.tile' + (count - 3) + ' p').textContent.toLowerCase()
        },
        tile3: {
            location: document.querySelector('.tile' + (count - 2)),
            text: document.querySelector('.tile' + (count - 2) + ' p').textContent.toLowerCase()
        },
        tile4: {
            location: document.querySelector('.tile' + (count - 1)),
            text: document.querySelector('.tile' + (count - 1) + ' p').textContent.toLowerCase()
        },
        tile5: {
            location: document.querySelector('.tile' + count),
            text: document.querySelector('.tile' + count + ' p').textContent.toLowerCase()
        }
    }

    let userGuess = row.tile1.text + row.tile2.text + row.tile3.text + row.tile4.text + row.tile5.text

    if(wordList.indexOf(userGuess) > 0){
        enterCounter()

        function scanTileText(text, location, tilenum){
            tileLocation = location
            if (wordle.match(text)){
                if(wordle[tilenum] === text){
                    tileLocation.style.backgroundColor = '#538d4e'
                    tileLocation.style.borderColor= '#538d4e'
                    document.querySelector('.' + text).style.backgroundColor = '#538d4e'
                } else {
                    tileLocation.style.backgroundColor = '#b59f3b'
                    tileLocation.style.borderColor = '#b59f3b'
                    document.querySelector('.' + text).style.backgroundColor = '#b59f3b'
                }
            } else {
                tileLocation.style.backgroundColor = '#3a3a3c'
                document.querySelector('.' + text).style.backgroundColor = '#3a3a3c'
            }
            if (wordle === userGuess){
                document.querySelector('.h1').textContent = 'You Win'
                count = 31
            }
            if (count === 30){
                if(wordle != userGuess)
                document.querySelector('.h1').textContent = 'You Lose'
                count = 31
            }

        }

        scanTileText(row.tile1.text, row.tile1.location, 0)
        scanTileText(row.tile2.text, row.tile2.location, 1)
        scanTileText(row.tile3.text, row.tile3.location, 2)
        scanTileText(row.tile4.text, row.tile4.location, 3)
        scanTileText(row.tile5.text, row.tile5.location, 4)

        } else {
            row.tile1.location.style.backgroundColor = '#b53b3b'
            row.tile1.location.style.borderColor = '#b53b3b'
            row.tile2.location.style.backgroundColor = '#b53b3b'
            row.tile2.location.style.borderColor = '#b53b3b'
            row.tile3.location.style.backgroundColor = '#b53b3b'
            row.tile3.location.style.borderColor = '#b53b3b'
            row.tile4.location.style.backgroundColor = '#b53b3b'
            row.tile4.location.style.borderColor = '#b53b3b'
            row.tile5.location.style.backgroundColor = '#b53b3b'
            row.tile5.location.style.borderColor = '#b53b3b'
            setTimeout(() => {
                row.tile1.location.style.backgroundColor = '#121213'
                row.tile1.location.style.borderColor = '#3a3a3c'
                row.tile2.location.style.backgroundColor = '#121213'
                row.tile2.location.style.borderColor = '#3a3a3c'
                row.tile3.location.style.backgroundColor = '#121213'
                row.tile3.location.style.borderColor = '#3a3a3c'
                row.tile4.location.style.backgroundColor = '#121213'
                row.tile4.location.style.borderColor = '#3a3a3c'
                row.tile5.location.style.backgroundColor = '#121213'
                row.tile5.location.style.borderColor = '#3a3a3c'
        }, 50)
    }

}