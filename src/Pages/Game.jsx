import React, { useState } from 'react'
import Level0 from './Levels/Level0'
import { Navigate } from 'react-router-dom'
import NegativeScore from './Levels/NegativeScore'
import GameWon from './Levels/GameWon'
import Timer from '../components/Timer'
import { useLocation } from 'react-router-dom'

const Game = () => {
    const [level, setLevel] = useState(0)
    const [score, setScore] = useState(0)
    const [gameStartTime, setGameStartTime] = useState(0)
    const [stop, setStop] = useState(false)

    const location = useLocation()


    React.useEffect( () => {
        if (location.state) {
            setLevel(location.state.level)
            setScore(location.state.score)
            setGameStartTime(location.state.time)
        }
    }, [location.state])


  return (
    <div>
        <p>Level {level}</p> <br />
        <p>Score : {score}</p><br />
        <Timer gameStartTime={gameStartTime} stop={stop}/>

       {(level < 5 && score>=0) ? <Level0 level={level} setLevel={setLevel} score={score} setScore={setScore} gameStartTime={gameStartTime} /> :
        (score<0) ? <NegativeScore setStop={setStop} /> : 
        (level === 5) ? <GameWon setStop={setStop} /> : <>Reload the game.</>
       }
    </div>
  )
}

export default Game