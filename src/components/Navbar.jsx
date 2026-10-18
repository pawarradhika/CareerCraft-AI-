import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import logo from '../assets/logo.svg'

const Navbar = () => {
  const user ={ name: 'Radhika' }

  
const navigate = useNavigate()

const logoutUser = () => {
  navigate('/')
}

  return (
    <div className="shadow bg-white">
    <nav className="flex items-center justify-between  nax-w-7xl mx-auto px-4 py-3.5 text-slate-800 transition-all">
      <Link to='/'>
      <img src={logo} alt="logo" className="h-11 w-auto ml-25" />
      </Link>
      <div className="flex items-center gap-4 text-sm">
        <p>Hi, {user?.name}</p>
        <button onClick={logoutUser} className='bg-white hover:bg=slate-50 border border-gray-300 px-7 py-1.5 rounded-full active:scale-95 transition-all'>Logout</button>
      </div>
    </nav>
    </div>
  )
}


export default Navbar
