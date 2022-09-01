
import cardsDataBrown from './brown/index.js';
import cardsDataBlue from './blue/index.js';
import cardsDataGreen from './green/index.js';
import ancientsData from '../ancients.js';
import difficulties from '../difficulties.js';

const ancientsContainer = document.querySelector('.ancients-container')
const ansientItems = ancientsContainer.querySelectorAll('.ancient-item')

const stageFirstGreen = document.querySelector('.stage-first > .stage-set > .green')
const stageFirstBrown = document.querySelector('.stage-first > .stage-set > .brown')
const stageFirstblue = document.querySelector('.stage-first > .stage-set > .blue')

const stageSecondGreen = document.querySelector('.stage-second > .stage-set > .green')
const stageSecondBrown = document.querySelector('.stage-second > .stage-set > .brown')
const stageSecondblue = document.querySelector('.stage-second > .stage-set > .blue')

const stageThirdGreen = document.querySelector('.stage-third > .stage-set > .green')
const stageThirdBrown = document.querySelector('.stage-third > .stage-set > .brown')
const stageThirdblue = document.querySelector('.stage-third > .stage-set > .blue')

const stageOneTitle = document.querySelector('.stage-first > .stage-title')
const stageTwoTitle = document.querySelector('.stage-second > .stage-title')
const stageThirdTitle = document.querySelector('.stage-third > .stage-title')

const levelButton = document.querySelectorAll('.level-item')
const difficultyContainer = document.querySelector('.dificulty-container-inner')
const deckContainer = document.querySelector('.deck-container-inner')

const deck = document.querySelector('.deck')
const card = document.querySelector('.card')

let numberAncient
let green = cardsDataGreen.slice()
let brown = cardsDataBrown.slice()
let blue = cardsDataBlue.slice()
let board

function getRandomNum(x) {
  return (Math.round(Math.random() * x))
}

function getDeck() {
  let countstageFirstGreen = ancientsData[numberAncient].firstStage.greenCards
  let countstageFirstBrown = ancientsData[numberAncient].firstStage.brownCards
  let countstageFirstblue = ancientsData[numberAncient].firstStage.blueCards

  let setStageOne = []
  let setStageTwo = []
  let setStageThree = []
  for (let i = 0; i < countstageFirstGreen; i++) {
    setStageOne.push(green.splice(getRandomNum((green.length - 1)), 1))
  }
  for (let i = 0; i < countstageFirstBrown; i++) {
    setStageOne.push(brown.splice(getRandomNum((brown.length - 1)), 1))
  }
  for (let i = 0; i < countstageFirstblue; i++) {
    setStageOne.push(blue.splice(getRandomNum((blue.length - 1)), 1))
  }

  let countstageSecondGreen = ancientsData[numberAncient].secondStage.greenCards
  let countstageSecondBrown = ancientsData[numberAncient].secondStage.brownCards
  let countstageSecondblue = ancientsData[numberAncient].secondStage.blueCards
  for (let i = 0; i < countstageSecondGreen; i++) {
    setStageTwo.push(green.splice(getRandomNum((green.length - 1)), 1))
  }
  for (let i = 0; i < countstageSecondBrown; i++) {
    setStageTwo.push(brown.splice(getRandomNum((brown.length - 1)), 1))
  }
  for (let i = 0; i < countstageSecondblue; i++) {
    setStageTwo.push(blue.splice(getRandomNum((blue.length - 1)), 1))
  }

  let countstageThirdGreen = ancientsData[numberAncient].thirdStage.greenCards
  let countstageThirdBrown = ancientsData[numberAncient].thirdStage.brownCards
  let countstageThirdblue = ancientsData[numberAncient].thirdStage.blueCards
  for (let i = 0; i < countstageThirdGreen; i++) {
    setStageThree.push(green.splice(getRandomNum((green.length - 1)), 1))
  }
  for (let i = 0; i < countstageThirdBrown; i++) {
    setStageThree.push(brown.splice(getRandomNum((brown.length - 1)), 1))
  }
  for (let i = 0; i < countstageThirdblue; i++) {
    setStageThree.push(blue.splice(getRandomNum((blue.length - 1)), 1))
  }

  function click() {
    card.classList.add('active')
    let x
    if (setStageOne.length > 0) {
      x = setStageOne.splice(getRandomNum((setStageOne.length - 1)), 1)
      card.style.backgroundImage = `url(${x[0][0].cardFace})`
      stageOneTitle.classList.add('stage-active')
      if (x[0][0].color == 'green') {
        stageFirstGreen.textContent = stageFirstGreen.textContent - 1
      } else if (x[0][0].color == 'brown') {
        stageFirstBrown.textContent = stageFirstBrown.textContent - 1
      } else if (x[0][0].color == 'blue') {
        stageFirstblue.textContent = stageFirstblue.textContent - 1
      }
    } else if (setStageTwo.length > 0) {
      x = setStageTwo.splice(getRandomNum((setStageTwo.length - 1)), 1)
      card.style.backgroundImage = `url(${x[0][0].cardFace})`
      stageTwoTitle.classList.add('stage-active')
      if (x[0][0].color == 'green') {
        stageSecondGreen.textContent = stageSecondGreen.textContent - 1
      } else if (x[0][0].color == 'brown') {
        stageSecondBrown.textContent = stageSecondBrown.textContent - 1
      } else if (x[0][0].color == 'blue') {
        stageSecondblue.textContent = stageSecondblue.textContent - 1
      }
    } else if (setStageThree.length > 0) {
      x = setStageThree.splice(getRandomNum((setStageThree.length - 1)), 1)
      card.style.backgroundImage = `url(${x[0][0].cardFace})`
      stageThirdTitle.classList.add('stage-active')
      if (x[0][0].color == 'green') {
        stageThirdGreen.textContent = stageThirdGreen.textContent - 1
      } else if (x[0][0].color == 'brown') {
        stageThirdBrown.textContent = stageThirdBrown.textContent - 1
      } else if (x[0][0].color == 'blue') {
        stageThirdblue.textContent = stageThirdblue.textContent - 1
      }
    } else {
      card.classList.remove('active')
      deckContainer.classList.remove('visible')
      difficultyContainer.classList.remove('visible')
      alert('Card ended! Pleace, choose new ancient!!')
    }
    ancientsContainer.addEventListener('click', ()=>{
      deck.removeEventListener('click', click, false)
      stageOneTitle.classList.remove('stage-active')
      stageTwoTitle.classList.remove('stage-active')
      stageThirdTitle.classList.remove('stage-active')
    })
  }
  deck.addEventListener('click', click, false)
}

function displayTraker() {
  levelButton.forEach((item, index) => {
    item.addEventListener('click', (e) => {

      levelButton.forEach((item, index) => {
        item.classList.remove('level-item-active')
      })

      if (e.target) {
        e.target.classList.add('level-item-active')
      }

    })
  })

  ansientItems.forEach((item, index) => {

    function fuck() {
      difficultyContainer.classList.add('visible')
      card.classList.remove('active')

      ansientItems.forEach((item, index) => {
        item.classList.remove('ancient-item-active')
      })

      item.classList.add('ancient-item-active')

      board = [
        [ancientsData[index].firstStage.greenCards, ancientsData[index].firstStage.brownCards, ancientsData[index].firstStage.blueCards],
        [ancientsData[index].secondStage.greenCards, ancientsData[index].secondStage.brownCards, ancientsData[index].secondStage.blueCards],
        [ancientsData[index].thirdStage.greenCards, ancientsData[index].thirdStage.brownCards, ancientsData[index].thirdStage.blueCards],
      ]

      stageFirstGreen.textContent = board[0][0]
      stageFirstBrown.textContent = board[0][1]
      stageFirstblue.textContent = board[0][2]

      stageSecondGreen.textContent = board[1][0]
      stageSecondBrown.textContent = board[1][1]
      stageSecondblue.textContent = board[1][2]

      stageThirdGreen.textContent = board[2][0]
      stageThirdBrown.textContent = board[2][1]
      stageThirdblue.textContent = board[2][2]

      numberAncient = index
      levelButton.forEach((item) => {
        item.addEventListener('click', changeDificulties)
      })
    }
    item.addEventListener('click', fuck, false)
  })
}


function changeDificulties(e) {
    deckContainer.classList.add('visible')
    green = cardsDataGreen.slice()
    brown = cardsDataBrown.slice()
    blue = cardsDataBlue.slice()

  if (e.target.id == 'middle'){
    green = cardsDataGreen.slice()
    brown = cardsDataBrown.slice()
    blue = cardsDataBlue.slice()
    console.log(green)
    console.log(e.target.id)
  } else if (e.target.id == 'easy'){
    green = green.filter(function(a) {return a.difficulty !== 'hard'})
    brown = brown.filter(function(a) {return a.difficulty !== 'hard'})
    blue = blue.filter(function(a) {return a.difficulty !== 'hard'})
    console.log(green)
    console.log(e.target.id)
  } else if (e.target.id == 'hard'){
    green = green.filter(function(a) {return a.difficulty !== 'easy'})
    brown = brown.filter(function(a) {return a.difficulty !== 'easy'})
    blue = blue.filter(function(a) {return a.difficulty !== 'easy'})
    console.log(green)
    console.log(e.target.id)
  }
  displayTraker()
  getDeck()
}


displayTraker()





