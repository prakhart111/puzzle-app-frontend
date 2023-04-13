import { useState,useEffect } from 'react'
import {Route, Routes,Navigate} from "react-router-dom";
import './App.css'
import axios from 'axios'
import LandingPage from './Pages/LandingPage'
import SignIn from './Pages/SignIn'
import Register from './Pages/Register'
import { UserContextProvider } from './UserContext';
import Home from './Pages/Home';
import Profile from './Pages/Profile';
import AdminDashboard from './Pages/AdminDashboard';
import LeaderBoard from './Pages/LeaderBoard';

function App() {

  const [isLoggedin, setIsLoggedin] = useState(false)
  const [isAdmin, setIsAdmin] = useState(false)


  return (
    <div className="text-extrabold text-white bg-gray-400">
      <UserContextProvider>
      <Routes>
            <Route path="/" element={<LandingPage isAdmin={isAdmin} setIsAdmin={setIsAdmin} isLoggedin={isLoggedin} setIsLoggedin={setIsLoggedin}/>} />
            <Route path="/signin" element={<SignIn isAdmin={isAdmin} setIsAdmin={setIsAdmin} isLoggedin={isLoggedin} setIsLoggedin={setIsLoggedin}/>} />
            <Route path="/register" element={<Register />} />
            {
              (isLoggedin && !isAdmin) ?
              [
                <Route key={"home"} path="/home" element={<Home />} />,
                <Route key={"profile"} path="/profile" element={<Profile />} />,
                <Route key={"leaderboard"} path="/leaderboard" element={<LeaderBoard />} />,
              ]
              :null
            }
            {
              (isLoggedin && isAdmin) ?
              [
                <Route key={"admin"} path="/admin" element={<AdminDashboard />} />,
              ]
              :null
            }
            <Route path="*" element={<Navigate replace to={"/"} /> } />
      </Routes>
      </UserContextProvider>
    </div>
  )
}

export default App
