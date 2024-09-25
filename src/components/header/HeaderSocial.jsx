import React from 'react'
import {BsInstagram,BsFacebook,BsGithub} from 'react-icons/bs'

const HeaderSocial = () => {
  return (
    <div className='header__socials'>
        <a href="https://www.instagram.com/amulikekennedy/" target='_blank'><BsInstagram/></a>
        <a href="https://www.facebook.com/amulike.kennedy" target='_blank'><BsFacebook/></a>
        <a href="https://github.com/amulikekennedy/" target='_blank'><BsGithub/></a>
    </div>
  )
}

export default HeaderSocial