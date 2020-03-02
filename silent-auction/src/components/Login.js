import React, {useState} from 'react';

function Login(props) {

  const [user, setUser] = useState({
    username:"",
    email:"",
  })

  const handleChanges = f => {
    setUser({...user, [f.target.name] : f.target.value})
  }
  const submitForm = form => {
    form.preventDefault();
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
