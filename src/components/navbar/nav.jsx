import { BiSolidCart } from 'react-icons/bi';
import './nav.css';
import { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

function Nav() {
    const signedIn = useSelector(state => state.signedIn);
    const userType = useSelector(state => state.userType)
    const [expand, setExpand] = useState(false);

    useEffect(() => {
        const handleResize = () => setExpand(false);
        window.addEventListener('resize', handleResize);
        
        // Cleanup listener on component unmount
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    return (
        <div>
            <nav className="navbar navbar-expand-lg navbar-modern">
                <Link className="navbar-brand" to="/">Exodus Retail</Link>
                
                <button className="navbar-toggler" type="button" onClick={() => setExpand(!expand)}>
                    <span className="navbar-toggler-icon"></span>
                </button>
                
                <div className={`collapse navbar-collapse ${expand ? 'show' : ''}`}>
                    <ul className="navbar-nav ml-auto">
                        <li className="nav-item">
                            <Link className="nav-link" to="/">Home</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/about">About</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/contact">Contact</Link>
                        </li>
                        {
                            signedIn ?
                            <li className="nav-item">
                                <Link className="nav-link" to="/profile">My Account</Link>
                            </li> :
                            <li className="nav-item">
                                <Link className="nav-link" to="/signin">SignIn</Link>
                            </li>
                        }
                        {
                            userType === 'admin' ?
                            <li className="nav-item">
                                <Link className="nav-link" to="/addproduct">Add product</Link>
                            </li> : ''
                        }
                        <li className="nav-item">
                            <Link className="nav-link" to="/cart">
                                <BiSolidCart size={30} className="mr-2" /> (0)
                            </Link>
                        </li>
                    </ul>
                </div>
            </nav>

            <div className="container mt-4 container-modern">
                <div className="row">
                    <div className="col-6 col-modern">
                        <p>Best Selling items</p>
                    </div>
                    <div className="col-6 col-modern">
                        <p>New items</p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Nav;
