import React from 'react'

const ScoreBoard = ({score,time,avatar}) => {
  return (
    <div className='score-board absolute flex flex-row sm:flex-col gap-4 m-4'>
            <div className='w-[200px] flex items-center justify-center align-center bg-[#FFFFFF30] p-2 border'>
                <img src={avatar} alt="avatar" className="-ml-4 w-[100px] h-[100px]"/>
                <div className="flex flex-col justify-center font-semibold text-[22px]">
                    <p>SCORE</p>
                    <p>{score}</p>
                </div>
            </div>

            <div className='w-[200px] flex items-center justify-center align-center bg-[#FFFFFF30] border'>
                <div className="flex flex-col justify-center font-semibold text-[22px] text-center p-2">
                    <p>TIME</p>
                    <p>{time}</p>
                </div>
            </div>
    </div>
  )
}

export default ScoreBoard