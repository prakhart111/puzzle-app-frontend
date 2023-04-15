import React from 'react'
import { useNavigate } from 'react-router-dom'
import Button from '../../components/Button'

const GameWon = ({setStop}) => {
    const navigate = useNavigate();
    setStop(true);
  return (
    <div>
        <h1>
            You have won the game.
        </h1>
        <Button text={"Back to home"} onClick={() => {navigate("/home")}} />
    </div>
  )
}

export default GameWon