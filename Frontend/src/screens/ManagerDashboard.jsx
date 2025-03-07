import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import Navbar from '../component/Navbar';

function ManagerDashboard (){
    const navigate = useNavigate();

    return(
        <div>
            <Navbar/>
            <div className='row justify-content-center'>
                <h3 className='text-center  text-white'style={{ marginTop: '150px' }}>Welcome Manager</h3>
                <div className="col-lg-4 col-md-6 col-sm-12 mb-4">
                    <div className="card shadow-lg border-0">
                        <div className="card-body text-center">
                            <h5 className="card-title">add user</h5>
                            <p className="card-text">Access your account to manage banking services.</p>
                            <button 
                                onClick={() => {
                                    toast.info('add user');
                                    navigate('/personal-details');
                                }} 
                                className='btn btn-custom btn-primary'>
                                Add user 
                            </button>
                        </div>
                    </div>
                </div>

                <div className="col-lg-4 col-md-6 col-sm-12 mb-4">
                    <div className="card shadow-lg border-0">
                        <div className="card-body text-center">
                            <h5 className="card-title">Find User</h5>
                            <p className="card-text">make sure u have the id or email of the user .</p>
                            <button 
                                onClick={() => {
                                    toast.info('Customer search page...');
                                    navigate('/UserDetailsbyId');
                                }} 
                                className='btn btn-custom btn-secondary'>
                                user Details
                            </button>
                        </div>
                    </div>
                </div>

                <div className="col-lg-4 col-md-6 col-sm-12 mb-4">
                    <div className="card shadow-lg border-2">
                        <div className="card-body text-center">
                            <h5 className="card-title"> List of customers </h5>
                            <p className="card-text">All the active customer of the bank.</p>
                            <button 
                                onClick={() => {
                                    toast.info('Genrating customer list ');
                                    navigate('/customer-information');
                                }} 
                                className='btn btn-custom btn-tertiary'>
                                Register Now
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    );
}
export default ManagerDashboard;