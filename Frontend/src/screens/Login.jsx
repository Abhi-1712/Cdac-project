import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import Navbar from '../component/Navbar';
import axios from 'axios';

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleLogin = async () => {
    toast.info('Logging in...');
    try {
      const response = await axios.post('http://localhost:8080/user/login', {
        email,
        password,
      });

      // Assuming the response contains user data
      if (response.status === 200) {
        toast.success('Login successful!');
        // Optionally, you can store user data or token in local storage
        localStorage.setItem('user', JSON.stringify(response.data));
        navigate('/user-dashboard'); // Redirect to User Dashboard after login
      }
    } catch (error) {
      // Handle error response
      if (error.response) {
        // Server responded with a status other than 200 range
        toast.error(error.response.data.message || 'Invalid credentials');
      } else {
        // Network error or other issues
        toast.error('An error occurred. Please try again later.');
      }
    }
  };

  return (
    <div>
      <Navbar />
      <div className="row justify-content-center">
        <div className="col-md-4">
          <div className='card'>
            <div className='card-body'>
              <h3 className='text-center mb-4'>User  Login</h3>
              <label htmlFor="email">Email</label>
              <input
                type="email"
                className="form-control form-control-sm"
                id="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div className="mb-4">
              <label htmlFor="password">Password</label>
              <input
                type="password"
                className="form-control form-control-sm"
                id="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
            <button 
              onClick={handleLogin} 
              className="btn btn-primary w-100"
            >
              Login
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;