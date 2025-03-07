import { Link, useNavigate } from 'react-router-dom'

function Navbar() {
  // get navigate function
  const navigate = useNavigate()

  const onLogout = () => {
    // cleat the session storage
    sessionStorage.removeItem('name')
    sessionStorage.removeItem('token')
    sessionStorage.removeItem('email')
    sessionStorage.removeItem('phone')

    // go to login screen
    navigate('/login')
  }

  return (
    <nav className='navbar navbar-expand-lg bg-transparent' data-bs-theme='dark' style={{ position: 'absolute', top: 0, left: 0, width: '100%' }}>
      <div className='container-fluid'>
        <a className='navbar-brand' href='#'>
          Banking System Saving Acoount
        </a>
        <button
          className='navbar-toggler'
          type='button'
          data-bs-toggle='collapse'
          data-bs-target='#navbarNav'
          aria-controls='navbarNav'
          aria-expanded='false'
          aria-label='Toggle navigation'
        >
          <span className='navbar-toggler-icon'></span>
        </button>
        <div className='collapse navbar-collapse' id='navbarNav'>
          <ul className='navbar-nav'>
            <li className='nav-item'>
              <Link className='nav-link' aria-current='page' to='/'>
                Home
              </Link>
            </li>
            <li className='nav-item'>
              <Link className='nav-link' aria-current='page' to=''>
                UserDashboard 
              </Link>
            </li>
            <li className='nav-item'>
              <Link className='nav-link' to=''>
                Addition information
              </Link>
            </li>
            <li className='nav-item'>
              <Link className='nav-link' to=''>
                
              </Link>
            </li>
            <li className='nav-item'>
              <Link className='nav-link' to=''>
                
              </Link>
            </li>
            <li className='nav-item'>
              <button onClick={onLogout} className='nav-link'>
                Logout
              </button>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  )
}

export default Navbar
