import React from 'react'
import './experiance.css'
import { GrLinkPrevious, GrLinkNext } from "react-icons/gr";
const Experiance = () => {
  return (
    <div className='exp'>
        <div className='p1' >
            <div className='text-cnt'>
                <h3>Experiance</h3>
                <h1>My creative Work Latest<span className='dif'>Project</span></h1>
                <p>xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx</p>
                <div className='btn-cnt' >
                    <a className='btn-pr' >Show more</a>
                </div>
            </div>

            
        </div>
        <div className='p2' >
            <div className='controle' >
                <div className='index' ></div>
                <div className='index' ></div>
                <div className='index' ></div>
                <div className='fl' >
                    <GrLinkPrevious className='pr' />
                    <GrLinkNext className='nx' />
                </div>
                

            </div>
            <div className='img-cnt'>
                <img src='img/p2.jfif' />
            </div>
            <div className='img-cnt'>
                <img src='img/p2.jfif' />
            </div>
            <div className='img-cnt'>
                <img src='img/p2.jfif' />
            </div>

        </div>
    </div>
  )
}

export default Experiance