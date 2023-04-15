import React from 'react'
import Button from '../components/Button'
import logo from '../assets/LOGO.png'
import { useNavigate, Navigate } from 'react-router-dom'
import axios from 'axios'
import { useContext } from 'react'
import { UserContext } from '../UserContext'

const SignIn = ({isAdmin,setIsAdmin,isLoggedin,setIsLoggedin}) => {
    const navigate = useNavigate();
    const [email, setEmail] = React.useState('');
    const [password, setPassword] = React.useState('');
    const {setUser} = useContext(UserContext)

    const handleLoginSubmit = async (e) => {
        e.preventDefault();
        try{
            const {data} = await axios.post("http://localhost:5000/api/login", {email,password},{withCredentials:true})
            console.log(data)
            if(data.isAdmin){
                setIsAdmin(true);
            }
            setUser(data);
            setIsLoggedin(true);
            alert("Logon Successful");
        }catch(e){
            setIsLoggedin(false);
            alert("Logon Failed");
        }
    }

    if(isLoggedin && isAdmin ){
        return <Navigate to="/admin" />
    }else if( isLoggedin ){
        return <Navigate to="/home" />
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
            {/* FORM GOES HERE */}
            <form className='pt-12  scale-[0.8] sm:scale-[1] flex flex-col items-center' onSubmit={handleLoginSubmit}>
                <div className='flex flex-col'>
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

            <div className='flex flex-col gap-4 items-center mt-28'>
                <Button text='SIGN IN' />
                <p className='font-extrabold text-[25px]'>New User? <span 
                onClick={
                    () => {navigate('/register')}
                }
                className='text-[#E23636]'>Register Here</span></p>
            </div>

            </form>
        </div>
    </div>
  )
}

export default SignIn