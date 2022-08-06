import React from 'react';
import './contact.css';

import { MdOutlineEmail } from 'react-icons/md';
import { RiMessengerLine } from 'react-icons/ri';
import { BsWhatsapp } from 'react-icons/bs';

// Importing E-mailJs for emails.....
import  { useRef } from 'react';
import emailjs from 'emailjs-com';


function contact() {

  const form = useRef();
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_3gbovy6', 'template_j520hve', form.current, 'Pru5g57UFIGwiJ2jt')
      //  document.getElementById('form').reset();
      // e.target.reset()
      alert("Your message is sent")
  };


  return (
    <section id="contact">
      <h5> Get In Touch </h5>
      <h2> Contact Me </h2>

      <div className="container contact__container">
        <div className="contact__options">
          {/* Start Of Contact Option */}
          <article className="contact__option">
            <MdOutlineEmail className='contact__option-icon' />
            <h4>Email</h4>
            <h5>hello@gmail.com</h5>
            <a href="mailto:hello@gmail.com" rel="noopener noreferrer">Send a message</a>
          </article>

          <article className="contact__option">
            <RiMessengerLine className='contact__option-icon' />
            <h4>Messenger</h4>
            <h5>myfacebook </h5>
            <a href="https://m.me/facebook.com" target='_blank' rel="noopener noreferrer">Send a message</a>
          </article>

          <article className="contact__option">
            <BsWhatsapp className='contact__option-icon' />
            <h4>WhatsApp</h4>
            <h5>+1 1234567890</h5>
            <a href="https://api.whatsapp.com/send?phone=+1234567890" target='_blank' rel="noopener noreferrer">Send a message</a>
          </article>
        </div>
        {/* End Of Contact Options */}

        {/* Start of Contact From  */}
        <form ref={form} onClick={sendEmail}>
          <input type="text" name='name' placeholder='Your Full Name' required />
          <input type="email" name="email" placeholder='Your E-mail' required />
          <textarea name="message"  cols="30" rows="10" placeholder='Your Message' required></textarea>
          <button type='submit' className='btn btn-primary'>Submit</button>
        </form>
        {/* End Of Contact Form */}
      </div>
    </section>
  )
}

export default contact