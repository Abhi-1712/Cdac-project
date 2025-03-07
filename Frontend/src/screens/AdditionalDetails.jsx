import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';

function AdditionalDetails() {
  const navigate = useNavigate();

  return (
    <div>
      <h2 className='header'>Additional Details</h2>
      <div className='mb-3'>
        <button 
          onClick={() => {
            toast.info('Saving additional details...');
            // Add your save logic here
            navigate('/user-dashboard'); // Redirect to User Dashboard
          }} 
          className='btn btn-success w-100'
        >
          Save and Continue
        </button>
      </div>
    </div>
  );
}

export default AdditionalDetails;