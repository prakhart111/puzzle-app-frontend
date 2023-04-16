import React from 'react'
import { useContext } from 'react'
import { UserContext } from '../UserContext'
import blankAvatar from '../assets/blank-avatar.png'
import { useNavigate } from 'react-router-dom'
import Button from '../components/Button'

const Profile = () => {
  const {user} = useContext(UserContext)
  const navigate = useNavigate()
  return (
    <div className='bg-black text-[20px]'>
        <Button text={"Back to home"} onClick={() => {navigate("/home")}} />

        <div>
            <h1 className='font-black text-[40px] p-4'>Profile</h1>
            <div className="flex border w-fit min-w-[250px] p-4">
                <img src={user.avatar !== "" ? user.avatar : blankAvatar} width="100px" height="100px"/>
                <p className="flex flex-col justify-center items-center gap-4 font-black text-[25px]">
                   Hey {user.name} !
                </p>
            </div>

            <div className='w-[250px] flex items-center justify-center align-center bg-[#FFFFFF30] p-2 border'> 
                <div className="flex flex-col justify-center font-semibold text-[22px] text-center">
                    <p>HIGH SCORE</p>
                    <p>{user.overallGameData.score}</p>
                </div>
            </div>

        </div>

        {/* <img src={user.avatar !== "" ? user.avatar : blankAvatar} width="80px" height="80px"/>
        Welcome {user.name} !<br/>
        High Score : {user.overallGameData.score}<br/>
        Email: {user.email} */}
    </div>
  )
}

export default Profile