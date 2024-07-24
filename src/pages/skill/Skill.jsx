import React from 'react'
import './skill.css'
import { IoDiamondOutline } from "react-icons/io5";
import data from '../../data/data';
const Skill = () => {
  return (
    <>
    <div className='skill'>
        <div className='p1' >
            <div className='text-cnt'>
                <h3>{data.skill.name}</h3>
                <h1>{data.skill.title}<span className='dif'>{data.skill.diff}</span></h1>
                <p>{data.skill.p}</p>
                <div className='btn-cnt' >
                    <a className='btn-pr' >{data.skill.btn}</a>
                </div>
            </div>
            
        </div>
        <div className='p2'>
            <div className='cnt'>
                <IoDiamondOutline className='icon' />
                <h3>{data.skill.itemStat[0].txt}</h3>
                <p>{data.skill.itemStat[0].p}</p>
            </div>
            <div className='cnt'>
                <IoDiamondOutline className='icon' />
                <h3>{data.skill.itemStat[0].txt}</h3>
                <p>{data.skill.itemStat[0].p}</p>
            </div>

        </div>
        <div className='p3'>
        <div className='cnt'>
                <IoDiamondOutline className='icon' />
                <h3>{data.skill.itemStat[0].txt}</h3>
                <p>{data.skill.itemStat[0].p}</p>
            </div>

        </div>

        
    </div>
    <div className='skill-bg' >
        <img src={data.bg2} />
    </div>
    </>
  )
}

export default Skill