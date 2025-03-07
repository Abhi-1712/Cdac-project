import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import Navbar from '../component/Navbar';

function ManagerLogin() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleLogin = () => {
    toast.info('Logging in as Manager...');
    // Add your login logic here
    navigate('/manager-dashboard'); // Redirect to Manager Dashboard after login
  };

  return (

    <div>
      <Navbar/>
      
      <div className="row justify-content-center">
        <div className="col-md-4">
          
            <div className='card'>
              <div className='card-body'>
                <h3 className='text-center mb-4'>Manager-Login</h3>
               <label htmlFor="email">Email</label>
              <input
              type="email"
              className="form-control"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div className="mb-4">
            <label htmlFor="password">Password</label>
            <input
              type="password"
              className="form-control"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
          <div className="mb-2">
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
    </div>
  );
}

export default ManagerLogin;