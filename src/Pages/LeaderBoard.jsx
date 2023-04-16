import React from 'react'
import axios from 'axios'
import blankAvatar from '../assets/blank-avatar.png'
import { useNavigate } from 'react-router-dom'
import Button from '../components/Button'
import { API_URL } from '../constants'

const LeaderBoard = () => {
    const [users, setUsers] = React.useState([])
    const navigate = useNavigate()
    React.useEffect(() => {
        axios.get(`${API_URL}/api/leaderboard` , { withCredentials: true })
        .then((res) => {
            setUsers(res.data)
        }).catch((err) => {
            console.log(err)
        })
    }, [])

  return (
    <div className='bg-black flex flex-col items-center'>
        <Button text={"Back to home"} onClick={() => {navigate("/home")}} />
        <h1 className='font-black text-[40px] p-4'>LeaderBoard</h1>
        <table>
            <thead>
                <tr className='border'>
                    <th>Avatar</th>
                    <th>Name</th>
                    <th>Score</th>
                </tr>
            </thead>
            <tbody  className='border'>
                {users.map((user) => (
                    <tr key={user._id}>
                        <td className='flex flex-col items-center p-2'><img src={user.avatar !== "" ? user.avatar : blankAvatar} width="80px" height="80px"/></td>
                        <td>{user.name}</td>
                        <td>{user.overallGameData.score}</td>
                    </tr>
                ))}
            </tbody>
        </table>
    </div>
  )
}

export default LeaderBoard