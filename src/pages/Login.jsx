import React, { useRef, useState } from 'react'
import wave from "../images/waving-hand.png"
import { AiFillEyeInvisible,AiFillEye } from 'react-icons/ai';
const Login = () => {
    const cards = useRef()
    const password_input = useRef()
    const backFlip = () => {
        cards.current.style.transform = 'rotateY(180deg)'
    }
    const faceFlip = () => {
        cards.current.style.transform = 'rotateY(0deg)'
    }
    const [eye,setEye] = useState(true)
    const [visible,setVisible] = useState(true)
    const [confirmvisible,setConfirmvisible] = useState(true)
    const hideshow = () => {
        setEye(!eye)
    }
  return (
    <div class="container">
        <div class="cards" ref={cards}>
            <div id="front" class="front" >
                    <div className="info">
                        <img class="waving-hand" src={wave} alt="" />
                        <h1>Login</h1>
                    </div>
                    <form >
                        <input type="text" placeholder='Enter your Username' />
                        <span/>
                        <div className="pwd">
                            <div className="password-span">
                                <input className='loginput' ref={password_input} type={eye ? "password" : "text"}  placeholder='Enter your password'/> 
                                <div className='icon' onClick={hideshow}>
                                    {eye ? <AiFillEye /> : <AiFillEyeInvisible/>}
                                </div>                              
                            </div>
                            <div className='underline'>
                            </div>
                        </div>
                        
                        
                    </form>
                   <div className="btn">
                        <button class = "login-btn">Sign In</button>
                        <button class="flip login-btn" onClick={backFlip} >SignUp</button>
                   </div>
               
            </div>
            <div class="back">
                    <div className="info-register">
                        <h1>Register</h1>
                    </div>
                    <form id='reg-form' >
                        <input type="text" placeholder='Enter your Username' />
                        <span/>
                        <input type="Email" placeholder='Enter your Email' />
                        <span/>
                        <input type="password" placeholder='Enter your password' />
                        <span/>
                        <input type="password" placeholder='Confirm your password' />
                        <span/>
                        
                    </form>
                   <div className="btn reg">
                        <button class = "reg-btn" onClick={faceFlip}>Sign In</button>
                        <button class="flip reg-btn" onClick={backFlip} >SignUp</button>
                   </div>
            </div>
        </div>
</div>
  )
}

export default Login
