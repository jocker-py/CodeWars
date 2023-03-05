/*
link:https://www.codewars.com/kata/56242b89689c35449b000059/train/javascript

A grid is a perfect starting point for many
games (Chess, battleships, Candy Crush!).
Making a digital chessboard I think is an
interesting way of visualising how loops
can work together.
Your task is to write a function that takes
two integers rows and columns and returns
a chessboard pattern as a two dimensional
array.
So chessBoard(6,4) should return an array
like this:

[
    ["O","X","O","X"],
    ["X","O","X","O"],
    ["O","X","O","X"],
    ["X","O","X","O"],
    ["O","X","O","X"],
    ["X","O","X","O"]
]
And chessBoard(3,7) should return this:

[
    ["O","X","O","X","O","X","O"],
    ["X","O","X","O","X","O","X"],
    ["O","X","O","X","O","X","O"]
]
The white spaces should be represented by an: 'O'

and the black an: 'X'

The first row should always start with a white space 'O'
*/


function chessBoard(rows, cols) {
// your code goes here
  const board = new Array(rows);
  for(let row = 0; row < rows; row++) {
    let arr = [];
    for(let col = 0; col < cols; col++) {
      (col + row) % 2 === 0 ? arr.push('O') : arr.push('X')
    }
    board[row] = [...arr];
    arr.length = 0;
  }
  return board;
}

console.log(chessBoard(7, 6));
/*
[
  [ 'O', 'X', 'O', 'X', 'O', 'X' ],
  [ 'X', 'O', 'X', 'O', 'X', 'O' ],
  [ 'O', 'X', 'O', 'X', 'O', 'X' ],
  [ 'X', 'O', 'X', 'O', 'X', 'O' ],
  [ 'O', 'X', 'O', 'X', 'O', 'X' ],
  [ 'X', 'O', 'X', 'O', 'X', 'O' ],
  [ 'O', 'X', 'O', 'X', 'O', 'X' ]
]

* */