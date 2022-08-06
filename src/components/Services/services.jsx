import React from 'react';
import './services.css';
import { BiCheck } from 'react-icons/bi';

function services() {
  return (
    <section id="services">
      <h5>What I Offer</h5>
      <h2>Services</h2>

      <div className="container services__container">
        {/* Start of UI/UX Design */}
        <article className="service">
          <div className="service__head">
            <h3>UI/UX Design </h3>
          </div>

          <ul className="service__list">
            <li>
              <BiCheck className='service__list-icon' />
              <p>Lorem ipsum dolor sit amet.</p>
            </li>
            <li>
              <BiCheck className='service__list-icon' />
              <p>Lorem ipsum dolor sit amet.</p>
            </li>
            <li>
              <BiCheck className='service__list-icon' />
              <p>Lorem ipsum dolor sit amet.</p>
            </li>
            <li>
              <BiCheck className='service__list-icon' />
              <p>Lorem ipsum dolor sit amet.</p>
            </li>
            <li>
              <BiCheck className='service__list-icon' />
              <p>Lorem ipsum dolor sit amet.</p>
            </li>
          </ul>
        </article>
        {/* End Of UI/UX Design */}

         {/* Start of Web Development */}
         <article className="service">
          <div className="service__head">
            <h3> WEB Development </h3>
          </div>

          <ul className="service__list">
            <li>
              <BiCheck className='service__list-icon' />
              <p>Lorem ipsum dolor sit amet.</p>
            </li>
            <li>
              <BiCheck className='service__list-icon' />
              <p>Lorem ipsum dolor sit amet.</p>
            </li>
            <li>
              <BiCheck className='service__list-icon' />
              <p>Lorem ipsum dolor sit amet.</p>
            </li>
            <li>
              <BiCheck className='service__list-icon' />
              <p>Lorem ipsum dolor sit amet.</p>
            </li>
            <li>
              <BiCheck className='service__list-icon' />
              <p>Lorem ipsum dolor sit amet.</p>
            </li>
            <li>
              <BiCheck className='service__list-icon' />
              <p>Lorem ipsum dolor sit amet.</p>
            </li>
            <li>
              <BiCheck className='service__list-icon' />
              <p>Lorem ipsum dolor sit amet.</p>
            </li>
            <li>
              <BiCheck className='service__list-icon' />
              <p>Lorem ipsum dolor sit amet.</p>
            </li>
            <li>
              <BiCheck className='service__list-icon' />
              <p>Lorem ipsum dolor sit amet.</p>
            </li>
          </ul>
        </article>
        {/* End Of Web Development */}

         {/* Start of APP Development */}
         <article className="service">
          <div className="service__head">
            <h3> APP Development </h3>
          </div>

          <ul className="service__list">
            <li>
              <BiCheck className='service__list-icon' />
              <p>Lorem ipsum dolor sit amet.</p>
            </li>
            <li>
              <BiCheck className='service__list-icon' />
              <p>Lorem ipsum dolor sit amet.</p>
            </li>
            <li>
              <BiCheck className='service__list-icon' />
              <p>Lorem ipsum dolor sit amet.</p>
            </li>
            <li>
              <BiCheck className='service__list-icon' />
              <p>Lorem ipsum dolor sit amet.</p>
            </li>
            <li>
              <BiCheck className='service__list-icon' />
              <p>Lorem ipsum dolor sit amet.</p>
            </li>
          </ul>
        </article>
        {/* End Of APP Development */}
      </div>
    </section>
  )
}

export default services