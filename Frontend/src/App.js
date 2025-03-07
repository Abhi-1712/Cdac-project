import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Services from './screens/Services.jsx';



// Auth Pages

import HomePage from './screens/HomePage.jsx';
import Login from './screens/Login.jsx';
import PersonalDetails from './screens/PersonalDetails.jsx';
import AdditionalDetails from './screens/AdditionalDetails';
import ManagerLogin from './screens/Managerlogin.jsx';
import '../src/styles/Layout.css';
import ManagerDashboard from './screens/ManagerDashboard.jsx';
import CustomerInformation from './screens/CustomerInformation.jsx';
import UserDetailsbyid from './screens/UserDetailsbyid.jsx';
import UserDashboard from './screens/UserDashboard.jsx';
import TransferMoney from './screens/TransferMoney.jsx';
function App() {
  return (
    <div className="app">
        <div className="content">
      <ToastContainer />
      <Routes>

        {/* Authentication Routes */}
        <Route path='/' element={< HomePage/>} />
        <Route path='login' element={<Login />} />
        <Route path='Services' element={<Services />} />
   
        <Route path='user-dashboard' element={<UserDashboard />} />
        <Route path='manager-dashboard' element={<ManagerDashboard />} />
        <Route path='manager-login' element={<ManagerLogin />} />
        <Route path='personal-details' element={<PersonalDetails />} />
        <Route path='additional-details' element={<AdditionalDetails />}/>
        <Route path='TransferMoney'element={<TransferMoney/>}/>
        <Route path='customer-information' element={<CustomerInformation />} />
        <Route path='UserDetailsbyid' element={<UserDetailsbyid />} />
      </Routes>
      </div>
      </div>
  
  );
}

export default App;