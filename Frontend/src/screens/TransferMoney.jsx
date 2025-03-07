import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import Navbar from '../component/Navbar';
import axios from 'axios';

function TransferMoney() {
  const navigate = useNavigate();
  const [sourceAccountId, setSourceAccountId] = useState('');
  const [destinationAccountId, setDestinationAccountId] = useState('');
  const [amount, setAmount] = useState('');

  const handleTransfer = async (e) => {
    e.preventDefault();
    
    // Validate input
    if (!sourceAccountId || !destinationAccountId || !amount) {
      toast.error('Please fill in all fields');
      return;
    }

    // Prepare the transfer data
    const transferData = {
      sourceAccountId: sourceAccountId,
      destinationAccountId: destinationAccountId,
      amount: parseFloat(amount),
    };

    try {
      const response = await axios.post('http://localhost:8080/transfer/transaction', transferData, {
        headers: {
          'Content-Type': 'application/json',
        },
      });

      if (response.status === 200) {
        toast.success('Transfer successful!');
        navigate('/UserDashboard'); // Redirect to transactions page after successful transfer
      }
    } catch (error) {
      toast.error(error.response?.data?.message || 'An error occurred during the transfer');
    }
  };

  return (
    <div>
      <Navbar />
      <div className="container d-flex justify-content-center align-items-center" style={{ minHeight: "80vh" }}>
        <div className="card shadow-lg" style={{ width: "400px" }}>
          <div className="card-body">
            <h3 className="card-title text-center mb-4">Transfer Money</h3>
            <form onSubmit={handleTransfer}>
              <div className="mb-3">
                <label htmlFor="sourceAccountId" className="form-label">Source Account ID</label>
                <input
                  type="text"
                  className="form-control"
                  id="sourceAccountId"
                  value={sourceAccountId}
                  onChange={(e) => setSourceAccountId(e.target.value)}
                  required
                />
              </div>
              <div className="mb-3">
                <label htmlFor="destinationAccountId" className="form-label">Destination Account ID</label>
                <input
                  type="text"
                  className="form-control"
                  id="destinationAccountId"
                  value={destinationAccountId}
                  onChange={(e) => setDestinationAccountId(e.target.value)}
                  required
                />
              </div>
              <div className="mb-3">
                <label htmlFor="amount" className="form-label">Amount</label>
                <input
                  type="number"
                  className="form-control"
                  id="amount"
                  value={amount}
                  onChange={(e) => setAmount(e.target.value)}
                  required
                />
              </div>
              <button type="submit" className="btn btn-primary btn-lg w-100">Transfer</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default TransferMoney;