import React from 'react'
import img from '../../assets/intro.jpg'


const Intro = () => {
  return (
    <div className='text-center font-bold text-white lg:px-56 p-3'>
        <div>
            <p className='text-2xl'>
                Welcome to <strong className='text-c1'>Manul Design</strong>, where we specialize in designing and developing websites that turn visitors into customers. Our team of experts understand the importance of creating a website that not only looks great, but also functions seamlessly and effectively communicates your brand's message.
            </p>
        </div>
        <br/>
        <div className='lg:grid lg:grid-cols-2 lg:p-0 p-2 gap-10'>
            <div className='col-span-1'>
                <img src={img} className='rounded-3xl shadow-2xl shadow-black'/>
            </div>
            <div className='text-xl col-span-1 lg:my-5 p-5 bg-c2/80 rounded-2xl border-4 border-c1'>
                <br/>
                <p>
                    We believe that a website is more than just a collection of pages and images, it's a powerful tool that can help you grow your business. That's why we take a strategic approach to website design and development, ensuring that every aspect of your website is tailored to your specific needs and goals.
                </p>
                <br/>
                <p>
                    Our team of designers and developers work closely with each client to understand their unique requirements and craft a custom solution that exceeds expectations. From basic website design to more advanced features like e-commerce and marketing, we offer a wide range of services to help your business succeed online.
                </p>
            </div>
        </div>
        <br/>
        <br/>
    </div>
  )
}

export default Intro