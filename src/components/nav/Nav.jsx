import React, { useState } from 'react'
import './nav.css'
import {AiOutlineHome, AiOutlineUser} from 'react-icons/ai'
import {BiBook, BiMessageRoundedEdit} from 'react-icons/bi'
import {RiServiceLine} from 'react-icons/ri'

const Nav = () => { 

  // Hook
  const [activeNav, setActiveNav] = useState('#');

  return (
    <nav> 
      <a href="#services" className={activeNav === '#services' ? 'active' : '' } onClick={() => setActiveNav('#services') }><RiServiceLine/></a>
      <a href="#about" className={activeNav === '#about' ? 'active' : '' } onClick={() => setActiveNav('#about') }><AiOutlineUser/></a>
      <a href="#" className={activeNav === '#' ? 'active' : '' } onClick={() => setActiveNav('#') } ><AiOutlineHome/></a>
      <a href="#experience" className={activeNav === '#experience' ? 'active' : '' } onClick={() => setActiveNav('#experience') }><BiBook/></a>
      <a href="#contact" className={activeNav === '#contact' ? 'active' : '' } onClick={() => setActiveNav('#contact') }><BiMessageRoundedEdit/></a>
    </nav>
  )
}

export default Nav