import React from 'react'
import './footer.css'
import {BsFacebook} from 'react-icons/bs'
import {BsInstagram} from 'react-icons/bs'
import {BsLinkedin} from 'react-icons/bs'

const Footer = () => {
  return (
    <footer>
      {/* <ul className="permalinks">
        <li><a href="#">Home</a></li>
        <li><a href="#about">About</a></li>
        <li><a href="#experiance">Experience</a></li>
        <li><a href="#services">Service</a></li>
        <li><a href="#portfolio">Portfolio</a></li>
        <li><a href="#contacts">Contacts</a></li>
      </ul> */}

      <div className="footer__socials">
        <a href="https://facebook.com"><BsFacebook/></a>
        <a href="https://instagram.com"><BsInstagram/></a>
        <a href="https://linkedin.com"><BsLinkedin/></a>
      </div>

      <div className="footer__copyright">
        <small>&copy; Amulike Kennedy.  All rights reserved.</small>
      </div>

    </footer>
  )
}

export default Footer