import React, { useRef } from 'react'
import wave from "../images/waving-hand.png"
import hide from "../images/hide.png"
const Login = () => {
    const cards = useRef()
    const password_input = useRef()
    const show_pwd = useRef()
    const hide_pwd = useRef()
    const backFlip = () => {
        cards.current.style.transform = 'rotateY(180deg)'
    }
    const faceFlip = () => {
        cards.current.style.transform = 'rotateY(0deg)'
    }
    const showPassword = () => {
       if( password_input.current.type == 'password'){
            show_pwd.current.style.display = 'none' 
            hide_pwd.current.style.display = 'block'
            password_input.current.type = 'text'
       }
    }
    const hidePassword = () => {
        if( password_input.current.type == 'text'){
            hide_pwd.current.style.display = 'none' 
            show_pwd.current.style.display = 'block'
            password_input.current.type = 'password'
       } 
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
                                <input ref={password_input} type="password"  placeholder='Enter your password'/>
                                <span/>
                            </div>
                            <img ref={show_pwd} onClick={showPassword} class = "show" src={require("../images/show.png")} alt="" />
                            <img src={hide} ref={hide_pwd} onClick={hidePassword} class = "hide" alt="" />
                        </div>
                        
                        
                    </form>
                   <div className="btn">
                        <button class = "login-btn">Sign In</button>
                        <button class="flip login-btn" onClick={backFlip} >SignUp</button>
                   </div>
               
            </div>
            <div class="back">
                    <div className="info-register">
                        {/* <img class="waving-hand" src={wave} alt="" /> */}
                        <h1>Register</h1>
                    </div>
                    <form id='reg-form' >
                        <input type="text" placeholder='Enter your Username' />
                        <span/>
                        <input type="Email" placeholder='Enter your Email' />
                        <span/>
                        <input type="password"  placeholder='Enter your password'/>
                        <span/>
                        <input type="password"  placeholder='Confirm your password'/>
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
