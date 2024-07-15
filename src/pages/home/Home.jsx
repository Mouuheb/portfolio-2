import React from 'react'
import './home.css'
import { FaInstagram,FaXTwitter,FaLinkedinIn } from "react-icons/fa6";


const Home = () => {
  return (
    <div className='home' >
        <div className='p1' >
            <div className='text-cnt'>
                <h3>Welcome</h3>
                <h1>I Have <span className='dif'>Creative Design</span> Experience</h1>
                <p>xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx</p>
                <div className='btn-cnt' >
                    <a className='btn-pr' >contact me</a>
                    <a className='btn' >Download CV</a>
                </div>
            </div>
            
        </div>
        <div className='p2' >
            
            <div className='color-cnt' ></div>
            <div className='border' ></div>
            <div className='img-cnt'>
                <img src='img/p1.png' />
            </div>

        </div>
        {/* <div className='p3' >
            <div className='icon-cnt' >
                <div className='p containner'>
                    <p>follow me on</p>
                </div>
                
                
                <hr/>
                <FaInstagram/>
                <br/>
                <FaLinkedinIn/>
                <br/>
                <FaXTwitter/>

            </div>

        </div> */}
    </div>
  )
}

export default Home