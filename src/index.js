import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

//This deals with each Square.
function Square(props){
  return (
    <button className="square" onClick={props.onClick}>
      {props.value}
    </button>
  )
}
//This deals with the Board.
class Board extends React.Component {
constructor(){
    super();
    this.state = {
      squares: Array(9).fill(null),
      player: "",
      computer: ""
    }
  }

handleClick(i){
  var squares = this.state.squares.slice();
  if (calculateWinner(squares) || squares[i]){
    console.log(this.state)
    return;
  }
  // //The above short-circuits the method if the position in the array
  // is already filled with something other than null.
  squares[i] = this.state.player

  this.setState({
    squares: determineAIMove(squares, this.state.computer, this.state.player),
  })}


renderSquare(i) {
    return (
        <Square
              value={this.state.squares[i]}
              onClick={() => this.handleClick(i)}
        />
    );
  }

setPlayerX() {this.setState({player: "X", computer: "O"})}
setPlayerO() {this.setState({player: "O", computer: "X"})}


render() {
if (this.state.player === ""){

  return(
      <span className="selectPlayer">
        <button
          className="setPlayerButton"
          id="X"
          onClick={this.setPlayerX.bind(this)}>X
        </button> or <button
            className="setPlayerButton"
            onClick={this.setPlayerO.bind(this)}>O</button>
      </span>
  );
// //the this keyword refers to whatever calls the function, and without the
// .bind(this), what's calling it is the button; that's why I was getting errors
// about it not being the case that null or undefined has the setPlayer method. The
// solution is to add .bind(this), which ensures, in this case, that the context
// is the board and not the button that calls setPlayer.
} else {
    const winner = calculateWinner(this.state.squares);
    let status;
    if (winner) {
       var status = 'Winner: ' + winner;
    } else if (calculateTie(this.state.squares)){var status = "Draw"} else {
       var status = 'Next player: ' + (this.state.player);
    }
    //Having const before status made it so that Next Player: X/O wouldn't
    // show up becayse const can't be re-declared.
    return (
      <div>
        <div className="board-row">
          {this.renderSquare(0)}
          {this.renderSquare(1)}
          {this.renderSquare(2)}
        </div>
        <div className="board-row">
          {this.renderSquare(3)}
          {this.renderSquare(4)}
          {this.renderSquare(5)}
        </div>
        <div className="board-row">
          {this.renderSquare(6)}
          {this.renderSquare(7)}
          {this.renderSquare(8)}
        </div>
        <div className="status">{status}</div>
      </div>
    );
  }
  }
}

class Game extends React.Component {
  render() {
    return (
      <div className="game">
        <div className="game-board">
          <Board />
        </div>
      </div>

    );
  }
}

function calculateWinner(squares) {
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
    if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
      return squares[a];
    }
  }
  return null;
}

function calculateTie(board){
  if (!board.includes(null)){return true}
}

function determineAIMove(board, computer, player){

for (var i = 0; i < board.length; i++){
    var boardRepresentation = board.slice(0)
    if (boardRepresentation[i] === null){boardRepresentation[i] = computer}
    if (calculateWinner(boardRepresentation))
    {board[i] = computer
      return board}
    }

for (var j = 0; j < board.length; j++){
    var boardRepresentation = board.slice(0)
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


ReactDOM.render(
  <Game />,
  document.getElementById('root')
);
