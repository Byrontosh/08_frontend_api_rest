import logo from './logo.svg';
import './App.css';
import React, { useContext } from 'react';
import { AuthContext } from '../../contexts/auth/AuthContext';
import { useNavigate } from 'react-router-dom';

export const App = () => {
  const { logout } = useContext(AuthContext);
  const navigate = useNavigate();

  const onLogout = () => {
    navigate('/login', { replace: true })
    logout()
  };

  return (
    <div className="App">
      <header className="App-header">
        <h1>Prison System Portal</h1>
        <img src={logo} className="App-logo" alt="logo" />
        <button type="button" onClick={onLogout}>Logout</button>
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}
