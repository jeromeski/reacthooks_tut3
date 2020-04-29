import React, { useState } from 'react';

const Login = () => {

  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [user, setUser] = useState(null)

  const handleSubmit = (evt) => {
    evt.preventDefault();
    const userData = {
      username,
      password
    }
    setUser(JSON.stringify(userData));
    setUsername("");
    setPassword("");
  }

  return (
    <div
      stle={{
        textAlign: 'center'
      }}
    >
      <h2>Login</h2>
        <form 
          onSubmit={handleSubmit}
        >
          <label>username</label>
          <input 
            type="text" 
            placeholder="Username"
            onChange={(evt) => setUsername(evt.target.value)}
            value={username}
          />
          <label>password</label>
          <input 
            type="password" 
            placeholder="Password"
            onChange={(evt) => setPassword(evt.target.value)}
            value={password}
          />
          <button>submit</button>
        </form>
        { user ? user : null}
    </div>
  );
};

export default Login;