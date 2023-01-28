import React, { useRef } from "react";
import emailjs from '@emailjs/browser';

const ContactForm = () => {
    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm('service_5gkhqh9', 'template_x4i69tt', form.current, '15mWG15ly1oJ2dymK')
        .then((result) => {
            console.log(result.text);
        }, (error) => {
            console.log(error.text);
        });
        e.target.reset();
    };

  return (
    <div id="contact" className="lg:grid lg:grid-cols-2 lg:mx-auto lg:w-2/3 bg-c2/80 border-2 border-c1 lg:m-10 rounded-2xl">
        <div>
            <p className="text-white font-bold text-2xl py-14 text-center p-2">
                Please fill out the form and a member of our team will be in touch with you shortly.
            </p>
            <p className="text-white font-bold text-lg py-14 text-center p-2">Or you could use<br/>Mobile phone: <b className="text-c1">+37129624577</b><br/>Email: <a href="mailto:janis.ruduks157@gmail.com" className="text-c1">janis.ruduks157@gmail.com</a></p>
        </div>
        <div>
            <form ref={form} onSubmit={sendEmail} className="p-6 rounded-lg shadow-md">
                <label className="block text-white font-bold mb-2">Name</label>
                <input className="border-4 border-c1 p-2 w-full rounded-lg" type="text" name="user_name" />
                <label className="block text-white font-bold mb-2">Email</label>
                <input className="border-4 border-c1 p-2 w-full rounded-lg" type="email" name="user_email" />
                <label className="block text-white font-bold mb-2">Message</label>
                <textarea className="border-4 border-c1 p-2 w-full rounded-lg" name="message" />
                <input className="bg-c1 text-white py-2 px-4 m-1 rounded-lg hover:bg-c0" type="submit" value="Send" />
            </form>
        </div>
    </div>
  );
};

export default ContactForm;