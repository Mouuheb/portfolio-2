import React from 'react'
import './stat.css'
import data from '../../data/data'

const Stat = () => {
  return (
    <>
    <div className='stat' >
            {data.stat.map((item,index)=>{
                return(
                    <>
                        {index==0? null :<hr/>}
                        <div className='cnt' key={index} >
                            <h1>{item.num}</h1>
                            <p>{item.p}</p>
                        </div>
                    </>
                )
            })}
            
    </div>
    <div className='bg-stat'>
        <img src={data.bg2} />
    </div>
    </>
  )
}

export default Stat