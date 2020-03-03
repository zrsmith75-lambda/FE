import React, {useState} from 'react';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import FormLabel from '@material-ui/core/FormLabel';
function Signup() {

  const [user, setUser] = useState({
    username:"",
    password:"",
    user_type:""
  })
  console.log(user)

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
          <input id="username" type="text" name="username" onChange={handleChanges} required></input>
          <label htmlFor="password">Password</label>
          <input id="password" type="password" name="password" onChange={handleChanges} required></input>                    
          <FormControl component="fieldset">
            <FormLabel component="legend">User type</FormLabel>
            <RadioGroup aria-label="user_type" className="radio-options-wrapper" name="user_type" value={user.user_type} onChange={handleChanges} required>
              <FormControlLabel value="seller" control={<Radio />} label="Seller"/>
              <FormControlLabel value="bidder" control={<Radio />} label="Bidder" />
            </RadioGroup>
          </FormControl>
          <button type="submit">Sign up</button>
        </form>
    </div>
  );
}

export default Signup;
