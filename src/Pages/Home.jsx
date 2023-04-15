import React from 'react'
import { useContext } from 'react'
import { UserContext } from '../UserContext'
import { useNavigate } from 'react-router-dom'
import Button from '../components/Button'
import axios from 'axios'

const Home = () => {
  const {user,setUser} = useContext(UserContext)
  const navigate = useNavigate();
  async function logout() {
    await axios.post('http://localhost:5000/api/logout', {}, { withCredentials: true });
    setUser(null);
    navigate("/");
  }



  return (
    <div className='bg-black'>
      <div className="flex sm:flex-row flex-col align-center justify-center items-center gap-4">
        <p className='text-[25px] font-black w-full text-center sm:min-w-[200px]'> Hey {user.name} !</p>
        <Button text={"Visit Your Profile"} onClick={() => {navigate("/profile")}} />
        <Button text={"Leaderboard"} onClick={() => {navigate("/leaderboard")}} />
        <Button text={"Logout"} onClick={logout} />
      </div>
        
      <div className="flex flex-col items-center justify-center align-center p-24 gap-8">
        <Button text={"Start New Game"} onClick={() => {navigate("/game-intro")}} />
        <Button text={"Resume Prev Game"} onClick={() => {navigate("/game",{
          state: {
            level: user?.prevGameData?.level || 0,
            score: user?.prevGameData?.score || 0,
            time: user?.prevGameData?.time || 0,
          }
        })}} />
      </div>
    </div>
  )
}

export default Home