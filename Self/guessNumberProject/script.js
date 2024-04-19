const randomNum = Math.round(Math.random() * 100 + 1);

const userInput = document.querySelector(".userInput")
const result = document.querySelector(".result")
const submitBtn = document.querySelector(".submitBtn")
const prevGuess = document.querySelector(".prevGuess span")
const remainingGuess = document.querySelector(".remainingGuess span")

submitBtn.addEventListener("click", function (e) {
    e.preventDefault()
    game()
})

// -----------------Game Logic------------------->
let isOver = false
let lives = 10
let prevArr = []

function invalidInput(num) {
    num = Number.parseInt(num)
    if (num === '' || isNaN(num) || num < 1 || num > 100) return 1
    else return 0
}

function checkAns(num) {
    if (num > randomNum) return 1
    if (num < randomNum) return -1
    return 0
}

function render(msg) {
    result.innerText = msg
    prevGuess.innerText = prevArr
    remainingGuess.innerText = lives
}

function game() {
    if (isOver) return

    if (lives > 0) {
        let num = userInput.value
        if (invalidInput(num)) {
            render("Please Input Valid Number!")
            return
        }

        let message = ""
        let output = checkAns(num)
        if (output == -1) message = "Too Low"
        else if (output == 1) message = "Too High"
        else message = "Congrats You Won!!!"

        lives--
        prevArr.push(num)
        render(message)

        if (output == 0) isOver = true
    }
    else {
        render(`Out Of Lives :(\nThe number was: ${randomNum}`)
        isOver = true
    }
}