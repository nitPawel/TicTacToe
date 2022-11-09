
const PLAYER1 = 'O'
const PLAYER2 = 'X'
let round = 1

const boxes = [...document.querySelectorAll('.box')]
boxes.forEach(box => box.addEventListener('click', pick))

function pick(event) {
 
	const turn = round % 2 === 0 ? PLAYER2 : PLAYER1
    console.log(turn);
	event.target.textContent =turn
	round++
}
