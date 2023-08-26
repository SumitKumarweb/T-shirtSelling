import './Navbar.css';
import burgger from './hamBurrgerIcon.svg';
import profileIcon from './user-regular.svg'
function Navbar() {
    return (
        <nav>
            <div className="burrgerIcon-wrapper">
                <img src={burgger} alt="" className='none' />
                <h1>T-shirt Selling</h1>
            </div>
            <div className="navItems">
                <div className="navItem">Home</div>
                <div className="navItem">T-shirt</div>
                <div className="navItem">Blog</div>
                <div className="navItem">About Us</div>
                <div className="navItem">Contact Us</div>
            </div>
            <button>
                <img src={profileIcon} alt="" />
                <span>Login</span>
            </button>
        </nav>
    )
}

export default Navbar;