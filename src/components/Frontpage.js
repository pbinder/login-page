import React, { useState } from 'react';
import './Frontpage.css';
import groupImage from '../assets/group.png'; 
import vector from '../assets/Vector.svg'

function Frontpage() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const handleLogin = () => {
    if (username === 'test@luxpmsoft.com' && password === 'test1234!') {
      alert('Login successful');
      window.location.href = '/blank-page';
    } else {
      setErrorMessage('The provided password is wrong');
    }
  };

  const handlePasswordInput = (e) => {
    const newPassword = e.target.value;
    // Regular expression to check for the required combination of characters.
    const passwordRegex =/^[a-zA-Z0-9!@#$%^&*()_+\-=[\]{};':"\\|,.<>/?]*$/;
    
    if (passwordRegex.test(newPassword) || newPassword === '') {
      setPassword(newPassword);
      setErrorMessage('');
    } else {
      setErrorMessage('Wrong combination');
    }
  };


  return (
    <div className="appContainer">
      <div className="form">
        <img src={groupImage} alt="" className="groupIcon" />
        <input
          className="username"
          placeholder="USERNAME"
          type="text"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          />
        <input 
          className="password"
          placeholder='PASSWORD'
          type="password"
          value={password}
          onChange={handlePasswordInput}
        />
        {errorMessage && <p className="error">{errorMessage}</p>}
        <button className="loginButton" onClick={handleLogin}>Login</button>
        <span className='forgotPassword'> Forgot password?</span>
      </div>
      <img className='vector' src={vector} alt="Vector" />
      <div className='ellipse3'></div>
      <div className='ellipse2'></div>
      <div className='ellipse1'></div>
    </div>
  );
}

export default Frontpage;
