import { useState } from 'react';
import { toast } from 'react-toastify';
import Navbar from '../component/Navbar';
import axios from 'axios';

function UserDetailsbyid() {
    const [userId, setUserId] = useState('');
    const [user, setUser] = useState(null);
    const [account, setAccount] = useState(null);

    const fetchUserAndAccountById = async () => {
        if (!userId) {
            toast.error('Please enter a valid User ID');
            return;
        }

        try {
            // Fetch User Details
            const userResponse = await axios.get(`http://localhost:8080/user/${userId}`);
            console.log('Fetched User:', userResponse.data);
            setUser(userResponse.data);

            // Fetch Account Details by User ID
            const accountResponse = await axios.get(`http://localhost:8080/accounts/user/${userId}`);
            console.log('Fetched Account:', accountResponse.data);
            setAccount(accountResponse.data);
        } catch (error) {
            toast.error('User or Account not found');
            console.error('Error:', error);
            setUser(null);
            setAccount(null);
        }
    }; // end of fetchUserAndAccountById

    const DeactivateUser = async () => {
        try {
            const response = await axios.put(`http://localhost:8080/accounts/deactivate/${userId}`);
            console.log(response.data);
            toast.warn('Account Deactivated Successfully');
        } catch (error) {
            toast.error('Error Deactivating User');
        }
    };
    const ReactivateUser = async () => {
        try {
            const response = await axios.put(`http://localhost:8080/accounts/reactivate/${userId}`);
            console.log(response.data);
            toast.success('Account Activated Successfully');
        } catch (error) {
            toast.error('Error Deactivating User');
        }
    };

    return (
        <div>
            <Navbar />
            <div className="container d-flex justify-content-center align-items-center" style={{ minHeight: "80vh" }}>
                <div className="container">
                    <div className="row">
                        {/* Search form section */}
                        <div className="col-12 d-flex justify-content-center mb-4">
                            <div className="card shadow-lg" style={{ width: "400px", marginTop: "100px" }}>
                                <div className="card-body p-4">
                                    <h2 className="text-center mb-4">Find User & Account</h2>
                                    <div className="mb-3">
                                        <input
                                            type="number"
                                            className="form-control mb-3"
                                            placeholder="Enter User ID"
                                            value={userId}
                                            onChange={(e) => setUserId(e.target.value)}
                                        />
                                        <button 
                                            className="btn btn-primary w-100" 
                                            onClick={fetchUserAndAccountById}
                                        >
                                            Find Details
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* User Details Table */}
                        <div className="col-12 mt-4">
                            {user && (
                                <div className="card">
                                    <div className="card-body">
                                        <h4 className="text-center">User Details</h4>
                                        <div className="table-responsive">
                                            <table className="table table-bordered mb-0 w-100">
                                                <thead className="table-light">
                                                    <tr>
                                                        <th>ID</th>
                                                        <th>First Name</th>
                                                        <th>Last Name</th>
                                                        <th>Email</th>
                                                    </tr>
                                                </thead>
                                                <tbody>
                                                    <tr>
                                                        <td>{user.id}</td>
                                                        <td>{user.firstName}</td>
                                                        <td>{user.lastName}</td>
                                                        <td>{user.email}</td>
                                                    </tr>
                                                </tbody>
                                            </table>
                                        </div>
                                    </div>
                                </div>
                            )}
                        </div>

                        {/* Account Details Table */}
                        <div className="col-12 mt-4">
                            {account && (
                                <div className="card">
                                    <div className="card-body">
                                        <h4 className="text-center">Account Details</h4>
                                        <div className="table-responsive">
                                            <table className="table table-bordered mb-0 w-100">
                                                <thead className="table-light">
                                                    <tr>
                                                        <th>Account Number</th>
                                                        <th>Account Type</th>
                                                        <th>Balance</th>
                                                        <th>Is Active</th>
                                                        <th>Created At</th>
                                                    </tr>
                                                </thead>
                                                <tbody>
                                                    <tr>
                                                        <td>{account.accountNumber}</td>
                                                        <td>{account.accountType}</td>
                                                        <td>{account.balance}</td>
                                                        <td>{account.isActive ? 'Yes' : 'No'}</td>
                                                        <td>{new Date(account.createdAt).toLocaleString()}</td>
                                                        <td> 
                                                            <button 
                                                                onClick={DeactivateUser}
                                                                type="button" 
                                                                className="btn btn-danger">
                                                                Deactivate 
                                                            </button>
                                                        </td>
                                                        <td> 
                                                            <button 
                                                                onClick={ReactivateUser}
                                                                type="button" 
                                                                className="btn btn-success">
                                                                Reactivate 
                                                            </button>
                                                        </td>
                                                    </tr>
                                                </tbody>
                                            </table>
                                        </div>
                                    </div>
                                </div>
                            )}
                        </div>

                    </div>
                </div>
            </div>
        </div>
    );
}

export default UserDetailsbyid;
