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
    <div>
        Hey {user.name} !
        <Button text={"Visit Your Profile"} onClick={() => {navigate("/profile")}} />
        <Button text={"Leaderboard"} onClick={() => {navigate("/leaderboard")}} />
        <Button text={"Logout"} onClick={logout} />

    </div>
  )
}

export default Home