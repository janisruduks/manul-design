import React from 'react'

import Logo from '../../assets/logo-white.png'

import { MdOutlineCoffeeMaker } from 'react-icons/md'
import { AiFillGithub  } from 'react-icons/ai'

const Footer = () => {
  return (
    <footer className="bg-c0/20 lg:flex items-center justify-center rounded-md mt-10 m-2 font-mono lg:mx-auto lg:max-w-screen-sm lg:w-1/2 block">
      <div className="flex items-center justify-center">
        <a href='/'><img src={Logo} alt="Logo" className="h-20 mr-3" /></a>
      </div>
      <div className='mr-3 px-4 hidden sm:block text-white'>
        <p>&mdash;</p>
      </div>
      <div className="flex">
        <a href='https://janisruduks.space' className="px-2 py-2 rounded-md text-white text-center hover:bg-white hover:text-c1 text-xs lg:text-sm">
          © 2023 | Designed with ❤️ by Jānis Ruduks
        </a>
      </div>
      <div className='mr-3 px-4 hidden sm:block text-white'>
        <p>&mdash;</p>
      </div>
      <div className="flex justify-end">
        <a href="#">
          <AiFillGithub size={20} className="text-white rounded-md hover:text-c0 hover:bg-white mx-3 hidden lg:block" />
        </a>
        <a href="#">
          <MdOutlineCoffeeMaker size={20}  className="text-white rounded-md hover:text-c0 hover:bg-white mx-3 hidden lg:block" />
        </a>
      </div>
    </footer>

  )
}

export default Footer;
