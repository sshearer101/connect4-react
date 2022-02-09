import { useState } from 'react'
import { Row } from './Row'
// import * as gameStyles from '../styles/Home.module.css'

const gameReducer = (state, action) => { return state}

const initialGameState = {
  player1: 1,
  player2: 2,
  currentPlayer: 1,
  board: [
    [null, null, null, null, null, null, null],
    [null, null, null, null, null, null, null],
    [null, null, null, null, null, null, null],
    [null, null, null, null, null, null, null],
    [null, null, null, null, null, null, null],
    [null, null, null, null, null, null, null],
  ],
  gameOver: false,
  message: '',
}

export const Connect4 = () => {
  const [gameState, setGameState] = useState({
    gameReducer,
    initialGameState
  })


  const play = (c) => {}

  return (
    <>
      {/* <Button
        colorScheme="purple"
        className={gameStyles.button}
      >
        New Game
      </Button> */}


      <table>
        <tbody>
          {gameState.board.map((row, i) => (

            <Row key={i} row={row} play={play} />
          ))}
        </tbody>
      </table>

      {/* <Text>{gameState.message}</Text> */}
    </>
  )
}