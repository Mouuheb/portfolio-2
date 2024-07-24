import React from 'react'
import './review.css'
import { GrLinkPrevious, GrLinkNext } from "react-icons/gr";
import { IoStar } from "react-icons/io5";
import data from '../../data/data';
const Review = () => {
  return (
    <>
    <div className='review' >
        <div className='p0'>
        
        
        <div className='p1' >
            <div className='text-cnt'>
                <h3>{data.rev.name}</h3>
                <h1>{data.rev.title}<span className='dif'>{data.rev.diff}</span></h1>

            </div>
            
        </div>
        <div className='fl' >
                    <GrLinkPrevious className='pr' />
                    <GrLinkNext className='nx' />
                </div>
        </div>

        <div className='comments'>
            {data.rev.revs.map((item,index)=>{
                return(
                    <div className='comment'>
                <div className='starts' >
                <IoStar className='star' />
                <IoStar className='star' />
                <IoStar className='star' />
                <IoStar className='star' />
                <IoStar className='star' />
                </div>
                <div className='p' >
                    <p>{item.txt}</p>
                </div>
                <div className='p3' >
                    <div className='img-cnt' >
                        <img src={item.img} />
                    </div>
                    <div className='txt' >
                    <span>{item.p}</span><br></br>
                    <small>{item.pro}</small>
                    </div>
                    
                </div>
            </div>

                )
            })}
            
        </div>

        
    </div>
    <div>
        <img src={data.bg3} />
        {/* <div> */}
            <img className='bg3-exp' src={data.bg2} />

        
        
    </div>
    </>
  )
}

export default Review