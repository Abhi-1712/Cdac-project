import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import Navbar from '../component/Navbar';

function UserDashboard() {
  const navigate = useNavigate();

  const TransferMoney = () => {
    toast.info('Redirecting to Create Account...');
    navigate('/TransferMoney');
  };

  const handleViewAccount = () => {
    toast.info('Redirecting to View Account...');
    navigate('/view-account');
  };

  const handleViewTransactions = () => {
    toast.info('Redirecting to Transactions...');
    navigate('/transactions');
  };

  return (
    <div>
      <Navbar />
      <div className="container d-flex justify-content-center align-items-center" style={{ minHeight: "80vh" }}>
        <div className="card shadow-lg" style={{ width: "400px" }}>
          <div className="card-body">
            <h3 className="card-title text-center mb-4">User Dashboard</h3>
            <div className="d-grid gap-3">
              <button 
                className="btn btn-primary btn-lg"
                onClick={TransferMoney} 
              >
                Transfer Money
              </button>
              <button 
                className="btn btn-success btn-lg"
                onClick={handleViewAccount}
              >
                View Account
              </button>
              <button 
                className="btn btn-info btn-lg text-white"
                onClick={handleViewTransactions}
              >
                View Transactions
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default UserDashboard;