import React,{ useState } from 'react'
import { useNavigate } from 'react-router-dom';
import '../App.css'
import axios from 'axios';

function Login() {
  let navigate = useNavigate();
  const [account, setAccount] = useState({
    email:"",
    password:"",
  })

  const handleChange = (event) => {
    setAccount({
      ...account,
      [event.target.name]: event.target.value,
    })
  };

  const handleSubmit = (event) => {
    const usersFilter = { 'email': account.email, 'password': account.password }
    axios.post('http://localhost:3001/user/login', usersFilter).then(response => {
      console.log(response.data);
      sessionStorage.setItem('user_id', response.data._id);
      navigate('/home');
    })
    event.preventDefault();
  };

  return (
    <React.Fragment>
        <div className='center'>
          <a href='/'>
            <button className='closebtn'>✖</button>
          </a>
          <h1>Login</h1>
          <form>
            <div className='txt_field'>
              <input 
              type='text' 
              name='email'
              value={account.email}
              onChange={handleChange}
              required/>
              <label>email</label>
            </div>

            <div className='txt_field'>
              <input 
              type='password'
              name='password'
              value={account.password}
              onChange={handleChange}
              required/>
              <label>Password</label>
            </div>
            <button type='submit' onClick={handleSubmit}>Login</button>
            <a href='/auth' className='pass'>Forgot Password?</a>
            <div className='signup'>
              Don't have a account?<a href="/signup"> Sign up</a>
            </div>
          </form>
        </div>
    </React.Fragment>
  )
}

export default Login