import React, { useState } from 'react';
import { Link } from 'react-router-dom'

export default function Form() {
    const [user, setUser] = useState("");
    const [password, setpassword] = useState("");
    const [err, setErr] = useState(false);
    const [perr, setPerr] = useState(false);
    // var inputEmail = document.getElementById("email");
    // var inputpass = document.getElementById("password");
        var item;
        var Password;

    function store() {
        localStorage.setItem("usermail", item)
        localStorage.setItem("userpassword", Password)
    }

    function handleSubmit(e) {
        e.preventDefault();
    }

    function handleChange(e) {
        item = e.target.value;
    }
    function passwordChange(e) {
         Password = e.target.value;
    }



    return (
        <div>
            <div className='container'>
                <div className='box'>
                    <form onSubmit={handleSubmit}>
                        <div className="form-group">
                            <label htmlFor="exampleInputEmail1">Email address</label>
                            <input type="email" className="form-control" id="email" placeholder="Email" onChange={handleChange} />
                            {err ? <span style={{ color: "red" }}>Invalid</span> : ""}
                        </div>
                        <div className="form-group">
                            <label htmlFor="exampleInputPassword1">Password</label>
                            <input type="password" className="form-control" id="password" placeholder="Password" onChange={passwordChange} />
                            {perr ? <span style={{ color: "red" }}>Invalid</span> : ""}
                        </div>
                        <div className="form-group">
                            <label htmlFor="exampleInputPassword1">Confirm Password</label>
                            <input type="password" className="form-control" id="cpassword" placeholder="Confirm Password" />
                        </div>
                        <button type="submit" className="btn btn-default" onClick={store}>Submit</button>
                        <span className='logged' style={{ background: 'blue', cursor: 'pointer', padding: '8px 20px', marginLeft: '15px', borderRadius: '5px' }}>
                            <Link to="/Login" style={{ color: '#fff', textDecoration: 'none' }}>LOG IN</Link>
                        </span>
                    </form>
                </div>
            </div>
        </div>
    )
}
