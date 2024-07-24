import React from 'react'
import './home.css'
import { FaInstagram,FaXTwitter,FaLinkedinIn } from "react-icons/fa6";
import data from '../../data/data';


const Home = () => {
  return (
    <div className='home' >
        <div className='p1' >
            <div className='text-cnt'>
                <h3>Welcome</h3>
                <h1>I Have <span className='dif'>Creative Design</span> Experience</h1>
                <p>{data.header.p}</p>
                <div className='btn-cnt' >
                    <a className='btn-pr' href={data.header.prBtn.path} >{data.header.prBtn.txt}</a>
                    <a className='btn' href={data.header.btn.path} >{data.header.btn.txt}</a>
                </div>
            </div>
            
        </div>
        <div className='p2' >
            
            {/* <div className='color-cnt' ></div> */}
            {/* <div className='border' ></div> */}
            <div className='img-cnt'>
                <img src={data.header.img} />
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