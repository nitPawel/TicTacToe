const PLAYER1 = 'O'
const PLAYER2 = 'X'
let round = 1

const boxes = [...document.querySelectorAll('.box')]
boxes.forEach(box => box.addEventListener('click', pick))

const board = [
	['', '', ''],
	['', '', ''],
	['', '', ''],
]

const combinations = [
	[0, 1, 2],
	[3, 4, 5],
	[6, 7, 8],
	[0, 3, 6],
	[1, 4, 7],
	[2, 5, 8],
	[0, 4, 6],
	[2, 4, 6],
]

function pick(event) {
	const { row, column } = event.target.dataset
	const turn = round % 2 === 0 ? PLAYER2 : PLAYER1
	if (board[row][column] !== '') return
	// console.log(turn)
	event.target.textContent = turn
	board[row][column] = turn
	round++

	console.log(check())
}

function check() {
	const result = board.reduce((total, row) => total.concat(row))
	let winner = null
	let moves = {
		O: [],
		X: [],
	}
	result.forEach((field, index) => (moves[field] ? moves[field].push(index) : null))
	// console.log(moves);
	combinations.forEach(combination => {
		if (combination.every(index => moves[PLAYER1].indexOf(index) > -1)) {
			winner = 'Winner: Player 1'
		}
		if (combination.every(index => moves[PLAYER2].indexOf(index) > -1)) {
			winner = 'Winner: Player 2'
		}
	})
	return winner
}
