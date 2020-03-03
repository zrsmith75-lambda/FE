import React, {useState} from 'react';
import {axiosWithAuth} from '../utils/axiosWithAuth'
import {useHistory} from 'react-router-dom'

function Login() {

  const [user, setUser] = useState({
    username:"",
    email:"",
  })

  const history = useHistory()

  const handleChanges = f => {
    setUser({...user, [f.target.name] : f.target.value})
  }

  const submitForm = form => {
    form.preventDefault();
    axiosWithAuth().post('/api/auth/login', user)
    .then(res => {
      window.localStorage.setItem('token', res.data.token)
      history.push('')
    })
    .catch(err => {
      console.log(err)
    })
  }

  return (
    <div className="form-wrapper">
      <form onSubmit={submitForm}>
        <label htmlFor="name">Username</label>
        <input id="username" type="text" name="username" onChange={handleChanges} required></input>
        <label htmlFor="password">Password</label>
        <input id="password" type="password" name="password" onChange={handleChanges} required></input>           
        <button type="submit">Log in</button>
      </form>
    </div>
  );
}

export default Login;
