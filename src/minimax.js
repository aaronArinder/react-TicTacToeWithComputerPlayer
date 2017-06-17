var gameBoard = [
  'o', ' ', ' ',
  ' ', 'x', 'x',
  'x', ' ', ' '
]
var maxPlayer = "x";
var minPlayer = 'o';

//Test for winner
function winner(board, player){
  if (
        (board[0] === player && board[1] === player && board[2] === player) ||
        (board[3] === player && board[4] === player && board[5] === player) ||
        (board[6] === player && board[7] === player && board[8] === player) ||
        (board[0] === player && board[3] === player && board[6] === player) ||
        (board[1] === player && board[4] === player && board[7] === player) ||
        (board[2] === player && board[5] === player && board[8] === player) ||
        (board[0] === player && board[4] === player && board[8] === player) ||
        (board[2] === player && board[4] === player && board[6] === player)
        ) {
        return true;
    } else {
        return false;
    }
}
//Test for Tie Game
function tie(board) {
  var moves = board.join('').replace(/ /g, '');
  if (moves.length === 9) {
    return true;
  }
  return false;
}


//Create a new version of the board to manipulate as a node on the tree
function copyBoard(board) {
  //This returns a new copy of the Board and ensures that you're only
  //manipulating the copies and not the primary board.
  return board.slice(0);
}

//Determine if a move is valid and return the new board state
function validMove(move, player, board){
  var newBoard = copyBoard(board);
  if(newBoard[move] === ' '){
    newBoard[move] = player;
    return newBoard;
  } else
    return null;
}

//This is the main AI function which selects the first position that
//provides a winning result (or tie if no win possible)

function findAiMove(board) {
  var bestMoveScore = 100;
  let move = null;
  //Test Every Possible Move if the game is not already over.
  if(winner(board, 'x') || winner(board, 'o' || tie(board))) {
    return null;
  }

  for(var i = 0; i < board.length; i++){
    let newBoard = validMove(i, minPlayer, board);
    //If validMove returned a valid game board
    if(newBoard) {
      var moveScore = maxScore(newBoard);
      if (moveScore < bestMoveScore) {
        bestMoveScore = moveScore;
        move = i;
      }
    }
  }
  return move;
}

function minScore(board) {
  if (winner(board, 'x')) {
    return 10;
  } else if (winner(board, 'o')) {
    return -10;
  } else if (tie(board)) {
    return 0;
  } else {
    var bestMoveValue = 100;
    let move = 0;
    for (var i = 0; i < board.length; i++) {
      var newBoard = validMove(i, minPlayer, board);
      if (newBoard) {
        var predictedMoveValue = maxScore(newBoard);
        if (predictedMoveValue < bestMoveValue) {
          bestMoveValue = predictedMoveValue;
          move = i;
        }
      }
    }
    //console.log("Best Move Value(minScore):", bestMoveValue);
    return bestMoveValue;
  }
}

function maxScore(board) {
   if(winner(board, 'x')) {
    return 10;
  } else if(winner(board, 'o')) {
    return -10;
  } else if(tie(board)) {
    return 0;
  } else {
    var bestMoveValue = -100;
    let move = 0;
    for (var i = 0; i < board.length; i++) {
      var newBoard = validMove(i, maxPlayer, board);
      if (newBoard) {
        var predictedMoveValue = minScore(newBoard);
        if (predictedMoveValue > bestMoveValue) {
          bestMoveValue = predictedMoveValue;
          move = i;
        }
      }
    }
    return bestMoveValue;
  }
}

console.log(findAiMove(gameBoard))
