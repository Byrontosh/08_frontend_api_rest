import logo from './logo.svg';
import './App.css';
import React, { useContext } from 'react';
import { AuthContext } from '../../contexts/auth/AuthContext';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';


export const App = () => 
{
  const navigate = useNavigate();

  const { user, logout } = useContext(AuthContext);
  const tokenUser = localStorage.getItem('token')

  const config = {
    headers: { Authorization: `${tokenUser}` }
  }; 
  const onLogout = async (e) => {
    e.preventDefault();
    try {
        const response = await axios.post(
            'http://localhost:8000/api/v1/logout',
            { headers: { 'accept': 'application/json' } },
            config
        )
        logout()
        navigate('/login')       
    } catch (error) {
        console.log(error.response.data.message, 'error');
    }
}

  return (
    <div className="App">
      <header className="App-header">
        <h1>Prison System</h1>
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Bienvenido - {user.username}
        </p>
        <button style={{backgroundColor:"red", padding:"5px", borderRadius:"10px"}} onClick={onLogout}>Logout</button>
      </header>
    </div>
  );
}
