import React, { useState } from 'react';

const initialState = {
  username: '',
  email: '',
  password: '',
}

const Register = () => {
  const[form, setForm] = useState(initialState)
  const[user, setUser] = useState(null)

  const handleOnChange = evt => {
    setForm({
      ...form, [evt.target.name] : evt.target.value 
    })
    
  }

  const handleOnSubmit = evt => {
    evt.preventDefault();
    setUser(form)
    setForm(initialState)
  }

  return (
    <div>
      <h2>Register</h2>
      <form onSubmit={handleOnSubmit}>
        <label>username</label>
        <input
          type='text'
          placeholder='Username'
          name='username'
          onChange={handleOnChange}
          value={form.username}

        />
        <label>email</label>
        <input
          type='email'
          placeholder='Email'
          name='email'
          onChange={handleOnChange}
          value={form.email}
  
        />
        <label>password</label>
        <input
          type='password'
          placeholder='Password'
          name='password'
          onChange={handleOnChange}
          value={form.password}

        />
        <button>submit</button>
      </form>
      {user && JSON.stringify(user,null, 2)}
    </div>
  );
};

export default Register;
