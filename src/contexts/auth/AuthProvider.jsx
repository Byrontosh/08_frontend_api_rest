import React, { useReducer } from 'react';

import { AuthContext } from './AuthContext';
import { authReducer } from './authReducer';
import { types } from './types';


export const AuthProvider = ({ children }) => 
{
    // https://tutorial.tips/double-exclamation-mark-not-not-operator-in-javascript/
    const initialization = () => {
        const user = JSON.parse(localStorage.getItem('user'))
        return {
            logged: !!user,
            user: user,
        }
    }

    // Uso del useReducer
    const [authState, dispatch] = useReducer(authReducer,{}, initialization)


    const login = async (user, token) => 
    {
        const action = { type: types.login, payload: user }
        localStorage.setItem('user', JSON.stringify(user));
        localStorage.setItem('token', token);
        dispatch(action);
    }

    const logout = () => 
    {
        localStorage.removeItem('user');
        localStorage.removeItem('token');
        const action = { type: types.logout }
        dispatch(action)
    }

    
    return (
        <AuthContext.Provider value={{
            ...authState,
            login: login,
            logout: logout,

        }}>
            {children}
        </AuthContext.Provider>
    );
}
