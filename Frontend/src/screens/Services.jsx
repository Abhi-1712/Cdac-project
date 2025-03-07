import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';

function Services() {

  const navigate = useNavigate();

  
  return (
    <div>
        
      <h2 className='header'> user Services</h2>
      <div className='mb-3'>

      <button 
              onClick={() => {
                toast.info('Funds transfer');
                navigate('/login');
              }} 
              className='btn btn-primary w-100 mb-3'
            >
              funds transfer
            </button>

            <button 
              onClick={() => {
                toast.info('EMAIL-ALERT');
                navigate('/login');
              }} 
              className='btn btn-primary w-100 mb-3'
            >
              Email-Alert
            </button>

            
            <button 
              onClick={() => {
                toast.info('cheque book');
                navigate('/login');
              }} 
              className='btn btn-primary w-100 mb-3'
            >
              Cheque book
            </button>

            
            <button 
              onClick={() => {
                toast.info('E-Statment');
                navigate('/login');
              }} 
              className='btn btn-primary w-100 mb-3'
            >
              E-statement
            </button>
      
      </div>
    </div>
  );
}
export default Services;

