import React, { useState } from 'react';
import { loginApi } from '../api/videoService';
import Login from '../components/Login';

const LoginPage = ({ onLoginSuccess }) => {
  const [loginEmail, setLoginEmail] = useState('');
  const [loginPassword, setLoginPassword] = useState('');
  const [loginError, setLoginError] = useState('');
  const [loginLoading, setLoginLoading] = useState(false);

  const handleLogin = async (e) => {
    e.preventDefault();
    if (!loginEmail.trim() || !loginPassword.trim()) {
      setLoginError('Please enter both email and password');
      return;
    }
    setLoginLoading(true);
    setLoginError('');
    try {
      const data = await loginApi(loginEmail, loginPassword);
      if (data.success) {
        onLoginSuccess(data.token);
      } else {
        setLoginError(data.message || 'Invalid credentials');
      }
    } catch (err) {
      setLoginError('Server not reachable. Make sure backend is running.');
    }
    setLoginLoading(false);
  };

  return (
    <Login 
      handleLogin={handleLogin}
      loginEmail={loginEmail}
      setLoginEmail={setLoginEmail}
      loginPassword={loginPassword}
      setLoginPassword={setLoginPassword}
      loginError={loginError}
      loginLoading={loginLoading}
    />
  );
};

export default LoginPage;
