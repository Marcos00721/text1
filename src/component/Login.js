import React from 'react'

export default function Login() {

    function Log(){
        var x = localStorage.getItem("usermail");
        var y = localStorage.getItem("userpassword");
        var a = document.getElementById("uname").value;
        var b = document.getElementById("psw").value;
        // console.log(a, b)
        if(x==a){
            if(y==b){
                window.location.href = 'https://www.google.com';
            }else{
                alert("WRONG Detail!!!")
            }
        }
    }
   

    return (
        <div className='container'>
            <div className='Login'>
                <div className='Login_head'>
                    <marquee direction="right"><h1 id='heading_head'>Welcome to Login page</h1></marquee>
                </div>
                <div className='row'>
                    <div className='col-lg-6'>
                        <div className='box'>
                            <div className='Email_input' style={{margin: '10px 0px'}}>
                                <label>Email</label><br />
                                <input id='uname' type="email" placeholder='Enter your Email' style={{borderRadius: '2px',borderTop: '0px',borderLeft: '0px',borderRight: '0px'}} />
                            </div>
                            <div className='Pass_input'>
                                <label>Password</label><br />
                                <input id='psw' type="Password" placeholder='Enter your Password' style={{borderRadius: '5px',borderTop: '0px',borderLeft: '0px',borderRight: '0px'}}/>
                            </div>
                            <div className='but' style={{margin: '10px 0px'}}>
                                <button onClick={Log} style={{borderRadius: '5px',background: 'black', color: 'white'}}>Login</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
