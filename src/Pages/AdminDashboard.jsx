import React from 'react'
import axios from 'axios'
import blankAvatar from '../assets/blank-avatar.png'
import { useContext } from 'react'
import { UserContext } from '../UserContext'

const AdminDashboard = () => {
    const [users, setUsers] = React.useState([])
    const {user} = useContext(UserContext)
    const email = user.email

    React.useEffect(() => {
        axios.post("http://localhost:5000/api/admin/userlist", { email })
        .then((res) => {
            setUsers(res.data)
        })
    }, [])

  return (
    <div className='flex flex-col items-center'>
        <h1 className='font-black text-[35px]'>Admin Dashboard</h1>
        <table>
            <thead>
                <tr className='border'>
                    <th>Name</th>
                    <th>Email</th>
                    <th>Score</th>
                    <th>Avatar</th>
                </tr>
            </thead>
            <tbody  className='border'>
                {users.map((user) => (
                    <tr key={user._id}>
                        <td>{user.name}</td>
                        <td>{user.email}</td>
                        <td>{user.overallGameData.score}</td>
                        <td className='flex flex-col items-center p-2'><img src={user.avatar !== "" ? user.avatar : blankAvatar} width="80px" height="80px"/></td>
                    </tr>
                ))}
            </tbody>
        </table>
    </div>
  )
}

export default AdminDashboard