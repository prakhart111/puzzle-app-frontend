import React from 'react'
import Button from '../components/Button'
import logo from '../assets/LOGO.png'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'
import AvatarSelector from '../components/AvatarSelector'
import { API_URL } from '../constants'

const Register = () => {
    const navigate = useNavigate();
    const [name, setName] = React.useState('')
    const [email, setEmail] = React.useState('')
    const [password, setPassword] = React.useState('')
    const [avatar, setSelected] = React.useState("https://api.dicebear.com/6.x/adventurer/svg?seed=Missy");

    const handleRegisterSubmit = async (e) => {
        e.preventDefault();
        try{
            const {data} = await axios.post(`${API_URL}/api/register`, {name,email,password,avatar})
            console.log(data);
            alert("Registration Successful, \nYou can now login");
            navigate('/signin');
        }catch(e){
            alert("Registration Failed");
        }
    }
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
            <div className='max-w-screen min-w-[50vw]'>
                <AvatarSelector selected={avatar} setSelected={setSelected} />
            </div>
            {/* FORM GOES HERE */}
            <form className='pt-12 scale-[0.8] sm:scale-[1] flex flex-col items-center' onSubmit={handleRegisterSubmit}>
                <div className='flex flex-col'>
                    <label className='font-extrabold text-[25px]'>NAME</label>
                    <input 
                    onChange={
                        (e) => {setName(e.target.value)}
                    }
                    className='bg-[#FFFFFF] text-black font-black px-4 min-w-[280px] min-h-[62px] text-[25px]' type='text' />
                </div>
                <div className='flex flex-col mt-4'>
                    <label className='font-extrabold text-[25px]'>EMAIL</label>
                    <input 
                    onChange={
                        (e) => {setEmail(e.target.value)}
                    }
                    className='bg-[#FFFFFF] text-black font-black px-4 min-w-[280px] min-h-[62px] text-[25px]' type='text' />
                </div>
                <div className='flex flex-col mt-4'>
                    <label className='font-extrabold text-[25px]'>PASSWORD</label>
                    <input 
                    onChange={
                        (e) => {setPassword(e.target.value)}
                    }
                    className='bg-[#FFFFFF] text-black font-black px-4 min-w-[280px] min-h-[62px] text-[25px]' type='password' />
                </div>

            <div className=' flex flex-col gap-4 items-center mt-20'>
                <Button text='REGISTER' />
                <p className='font-extrabold text-[25px]'>Existing User? <span 
                onClick={
                    () => {navigate('/signin')}
                }
                className='text-[#E23636]'>SignIn Here</span></p>
            </div>

            </form>


        </div>
    </div>
  )
}

export default Register