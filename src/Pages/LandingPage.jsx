import React from 'react'
import Button from '../components/Button'
import logo from '../assets/LOGO.png'
const LandingPage = () => {
  return (
    <div className='landing-page p-4 pt-12 flex flex-col items-center'>
        <div className='flex flex-col items-center gap-4' >
            <div className='logo-cont flex flex-row items-center gap-4'>
                <img src={logo} width="150px" height="150px" />
                <div className='title flex flex-col font-extrabold text-[35px]'>
                    <h1>Rescue</h1>
                    <h1>Morgan</h1>
                </div>
            </div>
            <p className='font-extrabold text-[25px]'>The Most Intriguing Puzzle Game</p>
            <div className='absolute flex flex-col gap-4 items-center bottom-40'>
            <Button text='PLAY NOW' />
            <p className='font-extrabold text-[25px]'>New User? <span className='text-[#E23636]'>Register Here</span></p>
            </div>
        </div>
    </div>
  )
}

export default LandingPage