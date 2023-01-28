import React from 'react'

const PContent = () =>  {
  return (
    <article id='about' className='max-w-prose lg:mx-auto lg:max-w-screen-lg p-3 rounded-lg'>
        <div className=''>
            <p className='text-white text-xl text-center font-extrabold'>
            We specialize in creating visually stunning and user-friendly websites that help businesses succeed online. Our team of experienced designers and developers work closely with each client to understand their unique needs and goals, and craft a custom solution that exceeds expectations.
            </p>
        </div>
        <div className='text-white'>
            <br/>
            <p className='p-3 text-xl font-extrabold text-white underline'>Our core services include:</p>
            <br/>
            <ul>
                <li className='px-12 lg:py-3 text-slate-200 font-bold'>- Web Design: We create visually appealing and responsive websites that look great on any device. Our designers are experts in creating clean, modern layouts that effectively communicate your brand's message.</li>
                <li className='px-12 py-3 text-slate-200 font-bold'>- Web Development: We develop custom websites that are tailored to your specific business needs. We use the latest technologies and best practices to ensure that your website is fast, secure, and easy to use.</li>
                <li className='px-12 py-3 text-slate-200 font-bold'>- Search Engine Optimization (SEO): We ensure that your website is optimized for search engines, so that it can be easily found by your target audience. We use a variety of techniques to improve your website's visibility and ranking in search engine results pages.</li>
                <li className='px-12 py-3 text-slate-200 font-bold'>- Website Maintenance: We offer ongoing maintenance and support to keep your website running smoothly. We monitor your site for any potential issues and make updates as necessary to keep it up-to-date and secure.</li>
                <li className='px-12 py-3 text-slate-200 font-bold'>- E-commerce: We can help you to create an online store that is easy to use and provides a great shopping experience for your customers.</li>
            </ul>
        </div>
    </article>
  )
}

export default PContent;
