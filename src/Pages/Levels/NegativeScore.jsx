import React from 'react'
import { useNavigate } from 'react-router-dom'
import Button from '../../components/Button'

const NegativeScore = ({setStop}) => {
    const navigate = useNavigate();
    setStop(true);
  return (
    <div>
        <h1>
            You have lost the game. Your score is negative.
            <Button text={"Back to home"} onClick={() => {navigate("/home")}} />
        </h1>
    </div>
  )
}

export default NegativeScore