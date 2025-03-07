import { useState, useEffect } from 'react';
import { toast } from 'react-toastify';
import Navbar from '../component/Navbar';
import axios from 'axios';

function CustomerInformation() {
    const [customers, setcustomers] = useState([]);

    const fetchcustomers = async () => {
        try {
            const response = await axios.get('http://localhost:8080/user/view');
            console.log(response.data);
            setcustomers(response.data);
        } catch (error) { 
            toast.error('Error fetching customers');
            console.error(error);
        }
    };

    useEffect(() => {
        fetchcustomers();
    }, [100]);

    return (
        <div>
            <Navbar />
            <div classname = 'container fluid'>
            <div className="row justify-content-center">
                <h2 className="text-center">Customer Information</h2>
                <div className="col-md-4">
                    <table className="table table-bordered">
                        <thead className="thead-dark">
                            <tr>
                                <th>First Name</th>
                                <th>Last Name</th>
                                <th>Email</th>
                                <th>Date of Birth</th>
                            </tr>
                        </thead>
                        <tbody>
                            {customers.map((customer, index) => (
                                <tr key={index}>
                                    <td>{customer.firstName}</td>
                                    <td>{customer.lastName}</td>
                                    <td>{customer.email}</td>
                                    <td>{customer.dateOfBirth}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>    
                </div>
            </div>
            </div>
        </div>
    );
}

export default CustomerInformation;