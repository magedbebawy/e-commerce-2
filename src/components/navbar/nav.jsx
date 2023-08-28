import './nav.css';
import { BiSolidCart } from 'react-icons/bi';
import { GiHamburgerMenu } from 'react-icons/gi';
import { useState, useEffect } from 'react';

function Nav() {

    const [ expand, setExpand ] = useState(false);

    useEffect(() => {
        window.addEventListener('resize', () => setExpand(false));
    }, [])

    return(
        <div>
            <div className="navbar">
                <h1>My App</h1>
                <div className='nav-items'>
                    <ul>
                        <li className='links'><a href="/">Home</a></li>
                        <li className='links'><a href="/about">About</a></li>
                        <li className='links'><a href="/contact">Contact</a></li>
                        <li className='links'><a href="/profile">My Account</a></li>
                    </ul>
                    <div className='cart'>
                        <p className='item' id='count'>0</p>
                        <a className='item' id='cart' href="/cart"><BiSolidCart size={45}/></a>
                    </div>
                    <div onClick={() => setExpand(!expand)} className='ham-icon'><GiHamburgerMenu color='white' size={45}/></div>
                </div>
            </div>
            <div className={expand ? 'show-nav' : 'hide-nav'}>
                <ul>
                    <li className='links'><a href="/">Home</a></li>
                    <li className='links'><a href="/about">About</a></li>
                    <li className='links'><a href="/contact">Contact</a></li>
                    <li className='links'><a href="/profile">My Account</a></li>
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