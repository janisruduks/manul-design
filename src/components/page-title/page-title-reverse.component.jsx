import React from 'react'
import '../../index.css'


const RPageTitle = ({image, title, para, link}) => {
    return (
        <div className='lg:grid lg:grid-cols-2 bg-c2/80 lg:mx-auto lg:max-w-screen-lg lg:border-3 p-3 rounded-lg shadow-black shadow-lg'>
            <div className='col-span-1'>
                <h1 className='text-white text-5xl text-bold font-bold lg:p-3'>{title}</h1>
                <p className='text-white lg:text-lg p-2'>{para}</p>
                <a href={link} className='text-white bg-c1 p-2 float-right mx-5 rounded-lg hover:bg-white hover:text-c0 shadow-black shadow-lg'>Read more</a>
                <br/>
                <br/>
            </div>
            <div className='col-span-1'>
                <img src={image} alt='page title name' className='lg:p-14 sm:p-5' />
            </div>
        </div>
    );
};

export default RPageTitle;