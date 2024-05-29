import { useState } from 'react'
import './CSS/LoginSignup.css'

const LoginSignup = () => {

  const [action, setAction] = useState("Login")

  return (
    <div className="loginsingup">
    <div className="loginsignup-container">
      <h1>{action}</h1>
      <div className="loginsignup-fields">
        <input className={action=== "Login" ? "hide" : "loginsignup-fields" } type="text" placeholder="Your Name"/>
        <input type="email" placeholder="Email Address"/>
        <input type="password" placeholder="Password" />
      </div>
      <button>{action=== "Login" ?  "Login" : "Sign Up"}</button>
      <p className="loginsignup-login">
  {action === "Login" ? (
    <>
      Dont have an account? 
      <span onClick={() => setAction("Sign Up")}> Sign up</span>
    </>
  ) : (
    <>
      Already have an account? 
      <span onClick={() => setAction("Login")}> Login here</span>
    </>
  )}
</p>

     <div className="loginsignup-agree">
        <input type="checkbox" name="" id="" />
        <p>By continuing, i agree to the terms of use & privacy policy</p>
      </div>

    </div>
      
    </div>
  )
}

export default LoginSignup
