import React, {useState} from 'react';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import FormLabel from '@material-ui/core/FormLabel';
function Signup(props) {

  const [user, setUser] = useState({
    username:"",
    email:"",
    password:"",
    type:""
  })

  const handleChanges = f => {
    setUser({...user, [f.target.name] : f.target.value});
  }
  const submitForm = form => {
    form.preventDefault();
  }
  return (
    <div className="form-wrapper">
        <form onSubmit={submitForm}>
          <label htmlFor="name">Username</label>
          <input id="username" type="text" name="username" onChange={handleChanges} required minlength="4"></input>
          <label htmlFor="password">Password</label>
          <input id="password" type="password" name="password" onChange={handleChanges} required minlength="4"></input>                    
          <FormControl component="fieldset">
            <FormLabel component="legend">User type</FormLabel>
            <RadioGroup aria-label="type" className="radio-options-wrapper" name="type" value={user.type} onChange={handleChanges} required>
              <FormControlLabel value="auctioned" control={<Radio/>} label="Auctioner"/>
              <FormControlLabel value="bidder" control={<Radio/>} label="Bidder" />
            </RadioGroup>
          </FormControl>
          <button type="submit">Sign up</button>
        </form>
    </div>
  );
}

export default Signup;
