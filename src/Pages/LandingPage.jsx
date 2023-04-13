import React from 'react'
import Button from '../components/Button'
import logo from '../assets/LOGO.png'
import { useNavigate } from 'react-router-dom'
import { useContext } from 'react'
import { UserContext } from '../UserContext'
import axios from 'axios'

const LandingPage = ({setIsLoggedin, setIsAdmin}) => {
    const navigate = useNavigate();
    const {setUser} = useContext(UserContext)

//Auto Login
  React.useEffect(() => {
    axios.get("http://localhost:5000/api/autologin", {withCredentials:true})
    .then((res) => {
      if(res.data){
        console.log(res.data);
        setIsLoggedin(true)
        setUser(res.data)
        if(res.data.isAdmin){
          setIsAdmin(true)
          navigate("/admin")
        }else{
          navigate("/home")
        }
      }
      console.log("Auto Login Success");
    }).catch((err) => {
      console.log(err)
    })
  }, [])

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
            <p className='font-extrabold text-[25px] text-center'>The Most Intriguing Puzzle Game</p>
            <div className='absolute flex flex-col gap-4 items-center bottom-40'>
            <Button text='PLAY NOW' onClick={
                () => navigate('/signin')
            }/>
            <p className='font-extrabold text-[25px]'>New User? <span 
            onClick={
                () => {navigate('/register')}
            }
            className='text-[#E23636]'>Register Here</span></p>
            </div>
        </div>
    </div>
  )
}

export default LandingPage