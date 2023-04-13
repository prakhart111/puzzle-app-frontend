import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import axios from 'axios'
import LandingPage from './Pages/LandingPage'
import SignIn from './Pages/SignIn'
import Register from './Pages/Register'

axios.defaults.baseURL = 'http://localhost:5000/api'

function App() {


  return (
    <div className="text-extrabold text-white bg-gray-400">
      {/* <LandingPage /> */}
      {/* <SignIn /> */}
      <Register />

    </div>
  )
}

export default App
