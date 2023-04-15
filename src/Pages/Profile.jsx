import React from 'react'
import { useContext } from 'react'
import { UserContext } from '../UserContext'
import blankAvatar from '../assets/blank-avatar.png'

const Profile = () => {
  const {user} = useContext(UserContext)
  return (
    <div className='bg-black'>
        <img src={user.avatar !== "" ? user.avatar : blankAvatar} width="80px" height="80px"/>
        Welcome {user.name} !<br/>
        High Score : {user.overallGameData.score}<br/>
        Email: {user.email}
    </div>
  )
}

export default Profile