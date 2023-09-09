import './nav.css';
import { BiSolidCart } from 'react-icons/bi';
import { GiHamburgerMenu } from 'react-icons/gi';
import { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom'; // Import the Link component

function Nav() {

    const signedIn = useSelector(state => state.signedIn);
    const [ expand, setExpand ] = useState(false);

    useEffect(() => {
        const handleResize = () => setExpand(false);
        window.addEventListener('resize', handleResize);
        
        // Cleanup listener on component unmount
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    return (
        <div>
            <div className="navbar">
                <h1>My App</h1>
                <div className='nav-items'>
                    <ul>
                        <li className='links'><Link to="/">Home</Link></li>
                        <li className='links'><Link to="/about">About</Link></li>
                        <li className='links'><Link to="/contact">Contact</Link></li>
                        {
                            signedIn ? 
                            <li className='links'><Link to="/profile">My Account</Link></li> :
                            <li className='links'><Link to="/signin">SignIn</Link></li> 
                        }
                    </ul>
                    <div className='cart'>
                        <p className='item' id='count'>0</p>
                        <Link className='item' id='cart' to="/cart"><BiSolidCart size={45}/></Link>
                    </div>
                    <div onClick={() => setExpand(!expand)} className='ham-icon'><GiHamburgerMenu color='white' size={45}/></div>
                </div>
            </div>
            <div className={expand ? 'show-nav' : 'hide-nav'}>
                <ul>
                    <li className='links'><Link to="/">Home</Link></li>
                    <li className='links'><Link to="/about">About</Link></li>
                    <li className='links'><Link to="/contact">Contact</Link></li>
                    <li className='links'><Link to="/profile">My Account</Link></li>
                </ul>
            </div>
            <div className='selling-items'>
                <p>Best Selling items</p>
                <p>New items</p>
            </div>
        </div>
    );
};

export default Nav;
