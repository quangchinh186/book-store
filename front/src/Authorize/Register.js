import React, {useState} from 'react'
import { useNavigate } from 'react-router-dom';

function Signup() {
  let navigate = useNavigate()
  const [account, setAccount] = useState({
    fullname:"",
    password:"",
    email:""
  })

  const [passwdRepeat, setPasswdRepeat] = useState("")

  const handleChange = (event) => {
    setAccount({
      ...account,
      [event.target.name]: event.target.value,
    })
  };

  const handleSubmit = (event) => {
    if (account.password !== passwdRepeat) {
      window.alert("Different passwords!!!")
    } else {
      console.log(account)
      fetch('http://localhost:3001/user/createUser', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(account),
      }).then(response => {
        if(response.ok) {
          console.log('success');
          navigate('/login');
        } else {
          console.log('error');
        }
      })
      }
      event.preventDefault();
  };

  return (
    <React.Fragment>
      <div className='center'>
        <a href='/'>
          <button className='closebtn'>✖</button>
        </a>
        <h1>Sign up</h1>
        <form className='signup'>

          <div className='txt_field'>
            <input 
              type='text' 
              name='fullname'
              value={account.fullname}
              onChange={handleChange}
              required/>
            <label>Fullname</label>
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

          <div className='txt_field'>
            <input
              type='password'
              name='passwdRepeat'
              value={passwdRepeat}
              onChange={(event) => {
                setPasswdRepeat(event.target.value)
              }}
              required
            />
            <label>Retype password</label>
          </div>

          <div className='txt_field'>
            <input 
              type='text'
              name='email'
              value={account.email}
              onChange={handleChange}
              required/>
            <label>Email</label>
          </div>

          <button className='regist' type='submit' onClick={handleSubmit}>Sign Up</button>
          <div className='signup'>
            Already have an account?<a href="/login"> Login</a>
          </div>
        </form>
      </div>
    </React.Fragment>
  )
}

export default Signup