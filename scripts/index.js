const board = document.getElementById("board")
const startButton = document.getElementById("createGame")

const newGame = new MineSweeper()


startButton.addEventListener("click", () => {
    newGame.init();
    newGame.printBoard(board)
})