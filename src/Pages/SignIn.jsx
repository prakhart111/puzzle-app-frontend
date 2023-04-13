import React from 'react'
import Button from '../components/Button'
import logo from '../assets/LOGO.png'
const SignIn = () => {
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
            {/* FORM GOES HERE */}
            <form className='pt-12'>
                <div className='flex flex-col'>
                    <label className='font-extrabold text-[25px]'>EMAIL</label>
                    <input className='bg-[#FFFFFF] color-black font-black px-4 min-w-[280px] min-h-[62px] text-[25px]' type='text' />
                </div>
                <div className='flex flex-col mt-4'>
                    <label className='font-extrabold text-[25px]'>PASSWORD</label>
                    <input className='bg-[#FFFFFF] color-black font-black px-4 min-w-[280px] min-h-[62px] text-[25px]' type='password' />
                </div>
            </form>


            <div className='absolute flex flex-col gap-4 items-center bottom-40'>
            <Button text='SIGN IN' />
            <p className='font-extrabold text-[25px]'>New User? <span className='text-[#E23636]'>Register Here</span></p>
            </div>
        </div>
    </div>
  )
}

export default SignIn