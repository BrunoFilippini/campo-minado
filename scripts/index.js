const newGame = new MineSweeper()

const board = document.getElementById("board")
const startButton = document.getElementById("createGame")



startButton.addEventListener("click", () => {
    board.innerHTML = "";
    newGame.init();
    newGame.printBoard(board)

    console.log()
})