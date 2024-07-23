import React from 'react'
import './nav-cmp.css'
import data from '../../data/data'


const Navcmp = () => {
  return (
    <div className='navcmp'>
        <div className='p1'>
            <h1>{data.name}</h1>
            <div className='p2'>
              {
                data.pageLink.map((item,index)=>{
                  return(
                    <a href={item.path} key={index} >{item.name}</a>

                  )
                })
              }

                
            </div>
            {data.navBtn.vzbl && <div className='btn'>
                <a href={data.navBtn.path} >{data.navBtn.btnText}</a>
            </div>}
            

        </div>

    </div>
  )
}

export default Navcmp