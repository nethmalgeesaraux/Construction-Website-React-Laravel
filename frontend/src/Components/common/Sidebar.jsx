import { useContext } from 'react'
import { AuthContext } from '../backend/context/Auth';

const Sidebar = () => {

    const { logout } = useContext(AuthContext)

    return (
        <div className='card shadow border-0 admin-sidebar-card'>
            <div className='card-body sidebar'>
                <h4 className='sidebar-title'>Sidebar</h4>

                <ul className='sidebar-nav'>
                    <li><a href="#" className='sidebar-link'>Dashboard</a></li>
                    <li><a href="#" className='sidebar-link'>Services</a></li>
                    <li><a href="#" className='sidebar-link'>Projects</a></li>
                    <li><a href="#" className='sidebar-link'>Articles</a></li>
                </ul>

                <button onClick={logout} className='btn sidebar-logout-btn mt-3'>
                    Logout
                </button>
            </div>
        </div>
    )
}

export default Sidebar
