How to implement minimax
	How to represent future states of board?
		Make a copy of the boardstate
	How to check future moves?
		Recursive function

What is the min/max player(s)?
	Importance of difference?



As computer:
1) Make a representation of the board.
2) Check if the first empty slot produces a win, loss, draw, or none
3) If none, check whether the next empty slot produces a win, loss, draw
	or none.
4) Repeat for the rest of the empty slots, assigning scores to each slot:
	the wins get the highest score, draws the second highest, and
	losses the lowest.
5) Fill the slot with the highest score, or if there are several with
	the same score, fill the first available slot


Include: check for win, tie, and whether the move is valid.
MiniMax works recursively! I think this is how it looks ahead.
How to look ahead to the player's move?



Need to sort out how to get minimax.js to talk to the other files.


Would be nice: one component for setPlayer



Different perspective