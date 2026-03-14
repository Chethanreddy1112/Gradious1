// import 
import './Login.css'
import { useState } from "react";

function Login({setIsLogin}){
    const[email,setEmail]=useState("")
    const[password,setPassword]=useState("")
    const[hidden,setHidden]=useState(false)
    const handlingLogin=()=>{
        if (email!=="" && password!==""){
            setIsLogin(true);
        }else{
            alert("Invalid Login Details");
        }
    }
    const passHandle=()=>{
        // if(password!==""){
        //     setHidden(true)
        // }
        setHidden(!hidden)
    }
    return(
        <div className="Login-container">
            <div className="Login-Box">
                <h2>Email</h2>
                <input placeholder="Enter You Mail" type="email" onChange={(e) => setEmail(e.target.value)}/>
                <h2>Password</h2>
                <input placeholder="Enter the password" type={hidden?"text":"password"} onChange={(e) => setPassword(e.target.value)}  />
                <span className="passHandle" onClick={passHandle}>{hidden?"👁️":"⌣"}</span>
                <br></br>
                <div className="log-btn">
                    <button className='l-btn' onClick={handlingLogin}>Enter</button>
                </div>
            </div>
        </div>
    );
}

export default Login;