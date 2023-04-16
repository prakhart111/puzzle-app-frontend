import React from 'react'
import { useNavigate } from 'react-router-dom'
import Button from '../../components/Button'
import nick from '../../assets/nick.png'

const GameWon = ({setStop}) => {
    const navigate = useNavigate();
    setStop(true);
  return (
    // <div className='landing-page'>
    //     <h1>
    //         You have won the game.
    //     </h1>
    //     <Button text={"Back to home"} onClick={() => {navigate("/home")}} />
    // </div>
    <div className='landing-page bg-black flex flex-col items-center justify-center'>
    <div className="relative border question-box sm:pl-20 sm:pt-8 p-3 mb-12">
      <p className='text-[15px] sm:text-[20px] font-bold'>
      <span className='text-[35px]'>YOU RESCUED MORGAN !</span><br/><br/>

      Congratulations on the Victory.<br/>
      You’re a great human being.<br/><br/>

      If you loved this app, reach out <br/>
      to the developer and say...<br/><br />

      <span className='text-[25px]'>“I love you 3000”</span>
      </p>
      <img src={nick} alt="nick" className="absolute -bottom-12 -left-12 sm:-bottom-20 sm:-left-20 w-[150px] h-[150px] sm:w-[200px] sm:h-[200px]"/>

  <div className='flex social-icons gap-8 justify-end m-8'>
      <a href="https://www.linkedin.com/in/prakhar-tandon-581107201/" target="_blank" rel="noreferrer">
        <img src="https://img.icons8.com/ios-filled/50/000000/linkedin.png" alt="linkedin" className="w-8 h-8" />
      </a>
      <a href="https://www.instagram.com/prakhar.tandon_/" target="_blank" rel="noreferrer">
        <img src="https://img.icons8.com/ios-filled/50/000000/instagram-new.png" alt="instagram" className="w-8 h-8" />
      </a>
      <a href="https://twitter.com/PrakharTandon29" target="_blank" rel="noreferrer">
        <img src="https://img.icons8.com/ios-filled/50/000000/twitter.png" alt="twitter" className="w-8 h-8" />
      </a>
  </div>
  </div>

  <Button text={"Back to Home"} onClick={() => {navigate("/home")}} />
</div>
  )
}

export default GameWon