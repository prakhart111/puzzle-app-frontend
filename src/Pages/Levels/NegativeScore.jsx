import React from 'react'
import { useNavigate } from 'react-router-dom'
import Button from '../../components/Button'

const NegativeScore = ({time,setStop}) => {
    const navigate = useNavigate();
    setStop(true);
  return (
    <div className='absolute lost-1'>
        <div>
            <h1 className='text-[35px] font-black p-8'>You have lost the game.<br/> Your score is negative.</h1>
            <h1 className='m-8 text-[25px] font-black p-4 border-2 w-fit bg-[#FFFFFF20]'>Time<br/> {time} seconds</h1>
            <div className='absolute bottom-20 right-20'>
            <Button text={"Back to home"} onClick={() => {navigate("/home")}} />
            </div>
        </div>
    </div>
  )
}

export default NegativeScore