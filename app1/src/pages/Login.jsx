// src/Login.js
import React from 'react';
import './Login.css';
import { Link } from 'react-router-dom';


const Login = () => {
  return (
    <div className="logpage">
      <br />
        <h3 >Login  </h3><br />
      <div className='container w-25 logcard'>
        <label htmlFor="">Username :</label>
        <input type="text" className='form-control' /> <br />
        <label htmlFor="" >Password :</label> 
        <input type="password" className='form-control' />
        <small>Dont have an account? <Link to="/register" >Register.</Link> </small>
      </div>      
    </div>
  );
};

export default Login;
