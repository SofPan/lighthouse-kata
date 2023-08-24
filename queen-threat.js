const generateBoard = (white, black) => {
	const board = [];
	// create an 8 x 8 "board" full of zeroes
	for (let i = 0; i < 8; i++) {
		board.push([]);
		for (let j = 0; j < 8; j++) {
			board[i].push(0);
		}
	}
	// increment the x/y coordinate for each queen respectively
	board[white[0]][white[1]]++;
	board[black[0]][black[1]]++;
	return board;
};

const queenThreat = (board) => {
	/*
    If the positions of the 1s are horizontally, vertically 
    or diagonally aligned, return true
  */
	let row1 = [];
	let row2 = [];
	for (const row of board) {
		if (row.includes(1)) {
			if (row1.length === 0) {
				row1 = row;
			} else {
				row2 = row;
			}
		}
	}
	/*
    if both 1's appear on the same row, row 2 will be empty
    therefore return true because the queens can attack (horizontal)
  */
	if (row2.length === 0) {
		return true;
	}
	/*
    if both 1's have the same index in their respective rows,
    return true because the queens can attack (vertical)
  */
	if (row1.indexOf(1) === row2.indexOf(1)) {
		return true;
	}
  
  /*
    For diagonal checks, iterate over smallest possible area
    and decrement instead of incrementing the loop.
  */ 
  for (let i = row1.indexOf(1); i > 0; i--){
    for (let j = board.indexOf(row2); j > 0; j--){
      /*
        if pos of queen1 - j === pos of queen 2, return true
      */
      if (row1.indexOf(1) - j === row2.indexOf(1)){
        return true;
      }
    }
  }
	return false;
};

/*
  First Test should return true
*/ 

// let whiteQueen = [0, 5];
// let blackQueen = [5, 0];
// let generatedBoard = generateBoard(whiteQueen, blackQueen);
// console.log(generatedBoard);
// console.log(queenThreat(generatedBoard));

/*
  Second Test should return false
*/ 
// let whiteQueen = [0, 0];
// let blackQueen = [5, 7];
// let generatedBoard = generateBoard(whiteQueen, blackQueen);
// console.log(generatedBoard);
// console.log(queenThreat(generatedBoard));
