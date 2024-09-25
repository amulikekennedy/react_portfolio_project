import React from 'react'
import './services.css'
import {BiCheck} from 'react-icons/bi'

const Services = () => {
  return (
    <section id='services'>
      <h5>What I offer</h5>
      <h2>Services</h2>

      <div className="container services__container">
        <article className="service">
          <div className="service__head">
            <h3>Software Developement</h3>
          </div>
          <ul className="service__list">
            <li>
              <BiCheck className='service__list-icon' />
              <p>Custom IOS and Android Apps Developement.</p>
            </li>
            <li>
              <BiCheck className='service__list-icon' />
              <p>Web and Desktop Apps Development.</p>
            </li>
            <li>
              <BiCheck className='service__list-icon' />
              <p>UI/UX design.</p>
            </li>
            <li>
              <BiCheck className='service__list-icon' />
              <p>Consulting & Prototyping.</p>
            </li>
            <li>
              <BiCheck className='service__list-icon' />
              <p>Application Maintanance & Support.</p>
            </li>
          </ul>
        </  article>
        <article className="service">
          <div className="service__head">
            <h3>Maintainance & Security</h3>
          </div>
          <ul className="service__list">
            <li>
              <BiCheck className='service__list-icon' />
              <p>Hardware installations, maintenance and repairs.</p>
            </li>
            <li>
              <BiCheck className='service__list-icon' />
              <p>Providing Online and On-site Support.</p>
            </li>
            <li>
              <BiCheck className='service__list-icon' />
              <p>Building firewalls.</p>
            </li>
            <li>
              <BiCheck className='service__list-icon' />
              <p>Installing anti-virus software.</p>
            </li>
            <li>
              <BiCheck className='service__list-icon' />
              <p>Installing virtual private networks (VPNs).</p>
            </li>
          </ul>
        </article>
      </div>
    </section>
  )
}

export default Services