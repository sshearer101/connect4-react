import React, { useState, useEffect, useRef } from "react";
 
//useRef is a hook that allows you to create reference to DOM element, return mutable object

const boardSettings = {
  rows: 8,
  columns: 10,
  dropAnimationRate: 50,
  flashAnimationRate: 600,
  colors: {
    empty: "#AAAAAA",
    p1: "#BB2222",
    p2: "#2222BB"
  }
};

//Rows and Columns
//Colors are css

const winTypes = {
  vertical: 0,
  horizontal: 1,
  forwardsDiagonal: 2,
  backwardsDiagonal: 3
};




export default function Connect4(){
  const [board, setBoard] = useState(createBoard());

//Setting state to board, which calls createBoard function 

  const [currentPlayer, setCurrentPlayer] = useState(getFirstPlayerTurn());

  //Setting who goes first in a new game, and calls that function

  const [win, setWin] = useState(null);

  //setting initial win state to null

  const [flashTimer, setFlashTimer] = useState(null);
  const [dropping, setDropping] = useState(false);
  const domBoard = useRef(null);


  function getIndex(row, column) {
    const index = row * boardSettings.columns + column;
    if (index > boardSettings.rows * boardSettings.columns) return null;
    return index;
  }

//puts in rows and columns based on parameters that when multiplied by column, creates index values
//based on input, returns random index for each box < 80 (maybe...)

  function createBoard() {
    return new Array(boardSettings.rows * boardSettings.columns).fill(
      boardSettings.colors.empty
    );
  }

  //returning array of board based on rows columns and corresponding colors

  function getRowAndColumn(index) {
    if (index > boardSettings.rows * boardSettings.columns) return null;
    const row = Math.floor(index / boardSettings.columns);
    const column = Math.floor(index % boardSettings.columns);
    return {
      row,
      column
    };
  }

  //if index is more than 80, returns null
  //returns index value of square nearest to 0 when game is won


  function getFirstPlayerTurn() {
    return boardSettings.colors.p1;
  }
  //first player to go is player 1 (red)

  function restartGame() {
    setCurrentPlayer(getFirstPlayerTurn());
    setWin(null);
    setBoard(createBoard());
  }

  //when game is restarted, the current player (in state), is the first player to go(calling that function)
  //When game is restarted, no winner
  //When game is restarted, sets board to the new empty array



  function getDomBoardCell(index) {
    if (!domBoard.current) return;
    const board = domBoard.current;
    const blocks = board.querySelectorAll(".board-block");
    return blocks[index];
  }

//If domBoard doesn't exist, return null
//If domBoard does exist:
  //set board to domBoard
  //set blocks to all the board tiles that have ".board-block" associated with it (80 tiles)
  //blocks[index] gives index value for each block since blocks calls all blocks

  return(
    <div>
    </div>
  )
}