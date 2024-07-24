import React from 'react'
import './experiance.css'
import { GrLinkPrevious, GrLinkNext } from "react-icons/gr";
import data from '../../data/data';
const Experiance = () => {
  return (
    <div className='exp'>
        <div className='p1' >
            <div className='text-cnt'>
                <h3>{data.experiance.name}</h3>
                <h1>{data.experiance.title}<span className='dif'>{data.experiance.diff}</span></h1>
                <p>{data.experiance.p}</p>
                <div className='btn-cnt' >
                    <a className='btn-pr' >{data.experiance.btn}</a>
                </div>
            </div>

            
        </div>
        <div className='p2' >
            <div className='controle' >
                {data.experiance.proj.map((index)=>{
                    return(
                        <div key={index} className='index' ></div>
                    )
                    

                })}
                
                
                <div className='fl' >
                    <GrLinkPrevious className='pr' />
                    <GrLinkNext className='nx' />
                </div>
                

            </div>
            {data.experiance.proj.map((item,index)=>{
                return(
                <div className='img-cnt'>
                    <img src={item.img} />
                </div>
                
            )})}

        </div>
    </div>
  )
}

export default Experiance