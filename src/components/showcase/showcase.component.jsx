import React from 'react'
import Logo1 from '../../assets/logo-s-1.png'
import Logo2 from '../../assets/logo-s-2.png'
import Logo3 from '../../assets/logo-s-3.png'

const Showcase = () => {
  return (
    <div className='mx-auto max-w-screen-lg py-10'>
      <h1 className='uppercase text-center h-32 text-6xl lg:text-6xl text-transparent font-bold lg:px-32 bg-clip-text bg-gradient-to-r from-c1 to-gold'>
        Showcase</h1>
      <br/>
      <p className='text-white font-extrabold p-3 text-1xl'>
        - Some of the projects made
      </p>
      <div className='grid lg:grid-cols-3 gap-5 border-4 border-c1 p-3'>
        <div className='col-span-1 hover:hue-rotate-60'>
          <img className='shadow-xl shadow-black' src={Logo1} />
        </div>
        <div className='col-span-1 hover:hue-rotate-60'>
          <img className='shadow-xl shadow-black' src={Logo2} />
        </div>
        <div className='col-span-1 hover:hue-rotate-60'>
          <img src={Logo3} />
        </div>
      </div>
    </div>
  )
}

export default Showcase;