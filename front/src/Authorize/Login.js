import React,{ useState } from 'react'
import { useNavigate } from 'react-router-dom';

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
    //request API here...
    const usersFilter = { 'email': account.email, 'password': account.password }
    fetch('http://localhost:3001/user/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(usersFilter),
    }).then(response => {
      if(response.ok) {
        console.log('success');
        navigate('/home');
      } else {
        console.log('error');
      }
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