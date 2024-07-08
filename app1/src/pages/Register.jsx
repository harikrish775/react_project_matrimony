// src/Register.js
import React from 'react';
import './Register.css'

const Register = () => {
  return (
    <div className='container '>
      <br/>
      <h1>Register </h1>
      <form action="" method='post'>
      <div className='row'>
        <div className='col-md'>
          <p>Name</p>
          <input type="text" className=' form-control ' />
        </div>
        <div className='col-md'>
          <p>Gender</p>
          <input type="text" className=' form-control ' />
        </div>
        <div className='col-md'>
          <p>Height</p>
          <input type="text" className=' form-control ' />        
        </div>
      </div>
      <div className='row'>
        <div className='col-md'>
          <p>Email</p>
          <input type="email" className=' form-control ' />        
        </div>
        <div className='col-md'>
          <p>Mobile Number</p>
          <input type="text" className=' form-control ' />        
        </div>
        <div className='col-md'>
          <p>Religion</p>
          <select name="" id="" className=' form-control'>
            <option value="">Hindu</option>
            <option value="">Christian</option>
            <option value="">Muslim</option>
          </select>
        </div>
        <div className='col-md'>
          <p>Caste</p>
          <select name="" id="" className=' form-control'>
            <option value=""></option>            
          </select>
        </div>
      </div>
      <div className='row'>
        <div className='col-md'>
          <p>Designation</p>
          <input type="text" className=' form-control ' />
        </div>
        <div className='col-md'>
          <p>Place</p>
          <input type="text" className=' form-control ' />
        </div>
        <div className='col-md'>
          <p>District</p>
          <input type="text" className=' form-control ' />
        </div>
        <div className='col-md'>
          <p>Marriage Level</p>
          <select name="" id="" className=' form-control'>
            <option value="">Newly Married</option>        
            <option value="">ReMarriage</option>         
          </select>
        </div>
      </div>
      
      <div className='row'>
        
        <div className='col-md'>
          <p>Fathers Name</p>
          <input type="text" className=' form-control ' />
        </div>
        <div className='col-md'>
          <p>Fathers occupation</p>
          <input type="text" className=' form-control ' />
        </div>
        <div className='col-md'>
          <p>Mothers Name</p>
          <input type="text" className=' form-control ' />
        </div>
        <div className='col-md'>
          <p>Mother occupation</p>
          <input type="text" className=' form-control ' />
        </div>
      </div>
      <div className='row'>
        <div className='col-md'>
          <p>Sibling Name</p>
          <input type="text" className=' form-control ' />
        </div>
        <div className='col-md'>
          <p>Sibling Marriage Status</p>
          <select name="" id="" className=' form-control'>
            <option value=""></option>
            <option value="">Married</option>        
            <option value="">UnMarried</option>         
          </select>
        </div>
        <div className='col-md'>
          <p>Upload your picture. (min. 3)</p>
          <input type="file" className=' form-control ' accept='image' />
        </div>
      </div>
      
      <div className='row my-4 w-25 container'>
        <button type='button' className='btn btn-primary'>Register</button>
      </div>
      </form>


    </div>
  );
};

export default Register;
