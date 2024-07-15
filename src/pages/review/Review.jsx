import React from 'react'
import './review.css'
import { GrLinkPrevious, GrLinkNext } from "react-icons/gr";
import { IoStar } from "react-icons/io5";
const Review = () => {
  return (
    <div className='review' >
        <div className='p0'>
        
        
        <div className='p1' >
            <div className='text-cnt'>
                <h3>Review</h3>
                <h1>Why Hire me for next<span className='dif'>Project</span></h1>

            </div>
            
        </div>
        <div className='fl' >
                    <GrLinkPrevious className='pr' />
                    <GrLinkNext className='nx' />
                </div>
        </div>

        <div className='comments'>
            <div className='comment'>
                <div className='starts' >
                <IoStar className='star' />
                <IoStar className='star' />
                <IoStar className='star' />
                <IoStar className='star' />
                <IoStar className='star' />
                </div>
                <div className='p' >
                    <p>xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx</p>
                </div>
                <div className='p3' >
                    <div className='img-cnt' >
                        <img src='img/p1.png' />
                    </div>
                    <div className='txt' >
                    <span>name</span><br></br>
                    <small>xxxxxxxxxxxxxxxxx</small>
                    </div>
                    
                </div>
            </div>

            <div className='comment'>
                <div className='starts' >
                <IoStar className='star' />
                <IoStar className='star' />
                <IoStar className='star' />
                <IoStar className='star' />
                <IoStar className='star' />
                </div>
                <div className='p' >
                    <p>xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx</p>
                </div>
                <div className='p3' >
                    <div className='img-cnt' >
                        <img src='img/p1.png' />
                    </div>
                    <div className='txt' >
                    <span>name</span><br></br>
                    <small>xxxxxxxxxxxxxxxxx</small>
                    </div>
                    
                </div>
                
            </div>

            <div className='comment'>
                <div className='starts' >
                <IoStar className='star' />
                <IoStar className='star' />
                <IoStar className='star' />
                <IoStar className='star' />
                <IoStar className='star' />
                </div>
                <div className='p' >
                    <p>xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx</p>
                </div>
                <div className='p3' >
                    <div className='img-cnt' >
                        <img src='img/p1.png' />
                    </div>
                    <div className='txt' >
                    <span>name</span><br></br>
                    <small>xxxxxxxxxxxxxxxxx</small>
                    </div>
                    
                </div>
            </div>

        </div>

        
    </div>
  )
}

export default Review