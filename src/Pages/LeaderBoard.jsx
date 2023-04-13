import React from 'react'
import axios from 'axios'
import blankAvatar from '../assets/blank-avatar.png'

const LeaderBoard = () => {
    const [users, setUsers] = React.useState([])

    React.useEffect(() => {
        axios.get("http://localhost:5000/api/leaderboard" , { withCredentials: true })
        .then((res) => {
            setUsers(res.data)
        }).catch((err) => {
            console.log(err)
        })
    }, [])

  return (
    <div className='flex flex-col items-center'>
        <h1 className='font-black text-[35px]'>LeaderBoard</h1>
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