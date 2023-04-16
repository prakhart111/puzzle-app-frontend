import React from 'react'
import { useNavigate } from 'react-router-dom'
import Button from '../components/Button'
import nick from '../assets/nick.png'

const IntroPage = () => {
    const height = window.innerHeight;
    const navigate = useNavigate()
  return (
    <div className='intro-page bg-black flex flex-col items-center justify-center'>
          <div className="relative border question-box sm:pl-20 sm:pt-8 p-3 mb-12">
            <p className='text-[15px] sm:text-[20px] font-bold'>
            I’m glad you’re back!<br/>
            Myself Nickolas.<br/>
            <br/>
            Morgan, Tony’s daughter has been kidnapped. <br/>
            We need to rescue her as soon as possible. <br/>
            <br/>
            For this you need to collect super-powers. <br/>
            <br/>
            Before Captain died, he linked all super powers<br/>
            to soft skills, so that only good and smart people <br/>
            have access to super powers.<br/>
            Bcz, with great powers, comes great responsibilty!<br/>
            </p>
            <img src={nick} alt="nick" className="absolute -bottom-12 -left-12 sm:-bottom-20 sm:-left-20 w-[150px] h-[150px] sm:w-[200px] sm:h-[200px]"/>
        </div>
        <Button text={"NEXT"} onClick={() => {navigate("/game")}} />
    </div>
  )
}

export default IntroPage