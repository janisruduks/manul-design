import React from 'react'
import max from '../../assets/max.gif'

const Pricing = () => {
  return (
    <div id='pricing' className='lg:mx-auto lg:max-w-screen-lg relative h-90'>
      <div className='hidden sm:block'>
        <img src={max} alt="space background" className="-z-10 absolute top-0 left-0 animation-move-bg duration-30s ease-in-out"/>
      </div>
      <div className='lg:p-10 z-2'>
        <h1 className='text-center h-32 lg:text-7xl text-6xl text-transparent font-bold lg:px-32 bg-clip-text bg-gradient-to-r from-c1 to-c1 uppercase'>
          Pricing</h1>
      </div>
      <div className='grid lg:grid-cols-3 grid-cols-1 gap-10 lg:gap-0 ml-6 lg:ml-0'>
        <div className='col-span-1 text-slate-200 bg-black/30 hover:bg-c1/80 hover:transition-all backdrop-blur-lg w-80 border-2 border-c1 rounded-xl p-2 text-3xl'>
          <h1 className='font-extrabold text-center'>🥉<br/>Basic Package</h1>
          <hr className='my-3'></hr>
          <ul className=''>
            <li className='text-base font-bold'>- Website creation and design</li>
            <li className='text-base font-bold'>- Responsive design for all devices</li>
            <li className='text-base font-bold'>- Content management system</li>
            <li className='text-base font-bold'>- Basic On-Page SEO</li>
            <li className='text-base font-bold'>- 1 month of free maintenance</li>
            <hr className='my-3'></hr>
          </ul>
          <div className='text-center lg:mt-20 p-2'>
            <a className='font-bold text-2xl text-white hover:text-white hover:border-white border-2 border-c1 rounded-xl p-2'>
              $1000 - $2000</a>
          </div>
        </div>
        <div className='col-span-1 text-slate-200 bg-black/30 hover:bg-c1/80 hover:transition-all backdrop-blur-lg w-80 border-2 border-c1 rounded-xl p-2 text-3xl'>
          <h1 className='font-extrabold text-center text-white'>🥈<br/>Branding Package</h1>
          <hr className='my-3'></hr>
          <ul className=''>
            <li className='text-base font-bold'>- Website creation and design</li>
            <li className='text-base font-bold'>- Logo design and branding</li>
            <li className='text-base font-bold'>- Overall company image creation or rebranding</li>
            <li className='text-base font-bold'>- Content management system</li>
            <li className='text-base font-bold'>- Basic On-Page SEO</li>
            <li className='text-base font-bold'>- 3 month of free maintenance</li>
            <hr className='my-3'></hr>
          </ul>
          <div className='text-center lg:mt-9 p-2'>
            <a className='font-bold text-2xl text-white hover:text-white hover:border-white border-2 border-c1 rounded-xl p-2'>
              $3000 - $5000</a>
          </div>
        </div>
        <div className='col-span-1 text-slate-200 bg-black/30 hover:bg-c1/80 hover:transition-all backdrop-blur-lg w-80 border-2 border-c1 rounded-xl p-2 text-3xl'>
          <h1 className='font-extrabold text-center text-white'>🥇<br/>Marketing Package</h1>
          <hr className='my-3'></hr>
          <ul className=''>
            <li className='text-base font-bold'>- Website creation and design</li>
            <li className='text-base font-bold'>- Overall company image creation or rebranding</li>
            <li className='text-base font-bold'>- Content management system</li>
            <li className='text-base font-bold'>- Basic On-Page SEO</li>
            <li className='text-base font-bold'>- Social Media Marketing</li>
            <li className='text-base font-bold'>- Advertisements creation</li>
            <li className='text-base font-bold'>- 6 month of free maintenance</li>
            <hr className='my-3'></hr>
          </ul>
          <div className='text-center m-3 p-2'>
            <a className='font-bold text-2xl text-white hover:text-white hover:border-white border-2 border-c1 rounded-xl p-2'>$5000 - $8000</a>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Pricing;