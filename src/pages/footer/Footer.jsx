import React from 'react'
import './footer.css'
import { FaInstagram } from "react-icons/fa6";
const Footer = () => {
  return (
    <div className='footer'>
        <hr/>
        <div className='p1'>
            <p>xxxxx</p>
            <p>xxxxx</p>
            <div className='p2'>
                <a><FaInstagram className='icn' /></a>
                <a><FaInstagram className='icn' /></a>
                <a><FaInstagram className='icn' /></a>
            </div>

        </div>

    </div>
  )
}

export default Footer