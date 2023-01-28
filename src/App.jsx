import './index.css'
import React from 'react'
import { MdOutlineCoffeeMaker } from 'react-icons/md'
import { AiFillGithub  } from 'react-icons/ai'
import Logo from './assets/logo.png'

function App() {
  return (
    <nav className="bg-c1 flex items-center justify-center rounded-md m-5 font-mono lg:mx-auto lg:max-w-screen-sm lg:w-1/2 shadow-black shadow-lg">
      <div className="flex items-center justify-center">
        <a href='/'><img src={Logo} alt="Logo" className="h-24 mr-3" /></a>
      </div>
      <div className='mr-3 px-4 hidden sm:block'>
        <p>&mdash;</p>
      </div>
      <div className="flex">
        <a className="px-2 py-2 rounded-md  text-c0 hover:bg-white hover:text-c1 mr-3" href="#about">About us</a>
        <a className="px-2 py-2 rounded-md  text-c0 hover:bg-white hover:text-c1 mr-3" href="#contact">Contact</a>
        <a className="px-2 py-2 rounded-md  text-c0 hover:bg-white hover:text-c1 mr-3" href="#pricing">Pricing</a>
      </div>
      <div className='mr-3 px-4 hidden sm:block'>
        <p>&mdash;</p>
      </div>
      <div className="flex justify-end">
        <a href="#">
          <AiFillGithub size={25} className="text-c0 rounded-md hover:text-white mx-3 hidden lg:block" />
        </a>
        <a href="#">
          <MdOutlineCoffeeMaker size={25}  className="text-c0 rounded-md hover:text-white mx-3 hidden lg:block" />
        </a>
      </div>
    </nav>
  )
}

export default App;