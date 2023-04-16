import React, { startTransition, useState } from 'react'
import Level0 from './Levels/Level0'
import NegativeScore from './Levels/NegativeScore'
import GameWon from './Levels/GameWon'
import { useLocation } from 'react-router-dom'
import { useContext } from 'react'
import { TimeContext } from '../TimeContext'
import { UserContext } from '../UserContext'
import ScoreBoard from '../components/ScoreBoard'

const Game = () => {

    const [level, setLevel] = useState(0)
    const [score, setScore] = useState(0)
    const [gameStartTime, setGameStartTime] = useState(0)
    const [stop, setStop] = useState(false)
    // const [time, setTime2] = useState(0)
    const location = useLocation()

    // time context
  const {time,setTime} = useContext(TimeContext)
    
//user context
const {user,setUser} = useContext(UserContext)

React.useEffect(() => {
    if(user.prevGameData.level && location.state){
        setLevel(user.prevGameData.level)
        setScore(user.prevGameData.score)
    }
}, [user])

    React.useEffect( () => {
        if (location.state) {
            setLevel(location.state.level)
            setScore(location.state.score)
            setGameStartTime(location.state.time)
        }
    }, [location.state])

    React.useEffect(() => {
        const timer = setTimeout(() => {
            if (!stop)
                setTime(time + 1);
        }, 1000);
        return () => clearTimeout(timer);
    }, [time]);


  return (
    <div className='bg-black game-page'>

       <ScoreBoard score={score} avatar={user.avatar} time={time+gameStartTime} />   
        <div className='w-full h-full flex flex-col justify-center'>
                {(level < 6 && score>=0) ? <Level0 level={level} setLevel={setLevel} score={score} setScore={setScore} gameStartTime={gameStartTime} /> :
                (score<0) ? <NegativeScore time={time+gameStartTime} setStop={setStop} /> : 
                (level === 6) ? <GameWon setStop={setStop} /> : <>Reload the game.</>
            }
        </div>

    </div>
  )
}

export default Game