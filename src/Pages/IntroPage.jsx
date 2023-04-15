import React from 'react'
import { useNavigate } from 'react-router-dom'
import Button from '../components/Button'

const IntroPage = () => {

    const navigate = useNavigate()
  return (
    <div className='bg-black p-4'>
        <h1>Game Intro Page</h1>
        <Button text={"NEXT"} onClick={() => {navigate("/game")}} />
    </div>
  )
}

export default IntroPage