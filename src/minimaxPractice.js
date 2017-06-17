var emptyBoard = [null,null,null,
                  null,null,null,
                  null,null,null]

var tiedBoard = ["O","X","O",
                 "X","X","O",
                 "O","O","X"]

var xWinsBoard = ["X","X","X",
                  null,null,null,
                  null,null,null]

var nearWinForComputer = [null,"X","O",
                          "X","X","O",
                          "O","O",null]

var nearWinForPlayer = ["O","X","O",
                        "X",null,"O",
                        "O","X","X"]
var player = "X"
var computer = "O"

function calculateWinner(board) {
  const lines = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];
  for (let i = 0; i < lines.length; i++) {
    const [a, b, c] = lines[i];
    if (board[a] && board[a] === board[b] && board[a] === board[c]) {
      return board[a];
    }
  }
  return false;
}

function calculateTie(board){
  if(calculateWinner(board) ==="no winner"){
    for (var i = 0; i < board.length; i++){
      if (!board[i]){
        return "unfinished board"
      } else {
        return "players tied"
      }
    }
  }
  return "there is a winner, run calculateWinner"
}


function minimaxVal(board){

for (var i = 0; i < board.length; i++){
    var boardRepresentation = board.slice()
    if (boardRepresentation[i] === null){boardRepresentation[i] = computer}
    if (calculateWinner(boardRepresentation))
    {board[i] = computer
      return board}
    }


for (var j = 0; j < board.length; j++){
    var boardRepresentation = board.slice()
              if(boardRepresentation[j] === null){boardRepresentation[j] = player}
              if (calculateWinner(boardRepresentation))
              {board[j] = computer
                return board}
              }


if (board[4] === null){board[4] = computer}
else if (board[0] === null){board[0] = computer}
else if (board[2] === null){board[2] = computer}
else if (board[6] === null){board[6] = computer}
else if (board[8] === null){board[8] = computer}
return board


      }



console.log(minimaxVal(emptyBoard))
