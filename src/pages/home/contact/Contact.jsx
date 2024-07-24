import React from 'react'
import './contact.css'
import { CiMail } from "react-icons/ci";
const Contact = () => {
  return (
    <div className='contact'>
        <div className='p1' >
            <div className='text-cnt'>
                <h3>Contact</h3>
                <h1>Let’s Discuss Your <span className='dif'>Project</span></h1>
                <p>
                Let’s make something new, different and more meaningful or make thing more visual or conceptual
                </p>
            </div>
            <div className='p2'>
                <div className='contact-so' >

                    <div className='item' >
                        <div className='icon-contact' >
                        <CiMail className='icon-con' />
                        </div>
                        <div className='cnt' >
                            <div className='txt1' ><small>xxxx</small></div>
                            <div className='txt2' ><p>xxxxxxx</p></div>
                        </div>
                    </div>

                    <div className='item' >
                        <div className='icon-contact' >
                        <CiMail className='icon-con' />
                        </div>
                        <div className='cnt' >
                            <div className='txt1' ><small>xxxx</small></div>
                            <div className='txt2' ><p>xxxxxxx</p></div>
                        </div>
                    </div>

                    <div className='item' >
                        <div className='icon-contact' >
                        <CiMail className='icon-con' />
                        </div>
                        <div className='cnt' >
                            <div className='txt1' ><small>xxxx</small></div>
                            <div className='txt2' ><p>xxxxxxx</p></div>
                        </div>
                    </div>



                </div>
                <div className='message' >
                    <div className='row' >
                        <input placeholder='Name' />

                        <input placeholder='Name' />

                    </div>
                    <div className='row' >
                    <input placeholder='Name' />
                    <input placeholder='Name' />

                    </div>
                    <input placeholder='Name' className='text-area' />
                    <button>Send message</button>

                </div>
            </div>
            
        </div>
        
    </div>
  )
}

export default Contact