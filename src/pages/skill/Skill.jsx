import React from 'react'
import './skill.css'
import { IoDiamondOutline } from "react-icons/io5";
const Skill = () => {
  return (
    <div className='skill'>
        <div className='p1' >
            <div className='text-cnt'>
                <h3>Skill</h3>
                <h1>Why Hire me for next<span className='dif'>Project</span></h1>
                <p>xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx</p>
                <div className='btn-cnt' >
                    <a className='btn-pr' >hire me</a>
                </div>
            </div>
            
        </div>
        <div className='p2'>
            <div className='cnt'>
                <IoDiamondOutline className='icon' />
                <h3>xxxxx</h3>
                <p>xxxxxxxxxxxxxxx</p>
            </div>
            <div className='cnt'>
                <IoDiamondOutline className='icon' />
                <h3>xxxxx</h3>
                <p>xxxxxxxxxxxxxxx</p>
            </div>

        </div>
        <div className='p3'>
        <div className='cnt'>
                <IoDiamondOutline className='icon' />
                <h3>xxxxx</h3>
                <p>xxxxxxxxxxxxxxx</p>
            </div>

        </div>
    </div>
  )
}

export default Skill