import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'

import cat from './assets/cat.webp'

import App from './App'
import PageTitle from './components/page-title/page-title.component'
import RPageTitle from './components/page-title/page-title-reverse.component'

import img from './assets/page-title.jpg'
import img2 from './assets/responsive.png'

import Welcome from './components/welcome/welcome.component'
import PContent from './components/content/p-content.component'
import Pricing from './components/pricing/pricing.component'
import Showcase from './components/showcase/showcase.component'
import Intro from './components/intro/intro.component'
import ContactForm from './components/contact/contact.component'
import FooterClass from './components/footer/footer.component'
import BackToTopButton from './components/arrow/arrow.component'
const t = "How we do it"
const t2 = "Responsive web"
const p = "We understand that your website is often the first point of contact between your business and potential customers, which is why we take a holistic approach to design, ensuring that every element works together to create a seamless user experience. From initial concept to final launch, we work closely with you to ensure that your website not only looks great, but also effectively communicates your message and drives conversions."
const p2 = "Responsive web design is a design approach that aims to make websites look and function well on all devices, including desktop computers, laptops, tablets, and smartphones. The goal of responsive web design is to create a seamless user experience across all devices, ensuring that users can access and interact with a website in the same way, regardless of the device they are using."

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BackToTopButton />
    <App />
    <Welcome />
    <br/>
    <Intro />
    <br/>
    <Showcase />
    <br/>
    <Pricing />
    <br/>
    <ContactForm />
    <br/>
    <PContent />
    <br/>
    <PageTitle title={t2} image={img2} para={p2}/>
    <br/>
    <RPageTitle title={t} image={img} para={p}/>
    <FooterClass />
  </React.StrictMode>,
)
