import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import './Nav.css'

class Nav extends Component {
    render() {
        return (
            <div className='topnav_wrapper'>
                <nav className='topnav'>
                    <nav className='left'>
                        <Link to='/'>
                            <p className='logo'>majd tarbin</p>
                        </Link>
                    </nav>
                    <nav className='right'>
                        <Link to='/projects'>
                            <p className='link'>projects</p>
                        </Link>

                        <Link to='/about'>
                            <p className='link'>about</p>
                        </Link>

                        <Link to='/contact'>
                            <p className='link'>contact</p>
                        </Link>
                    </nav>
                </nav>
            </div>

        )
    }
}

export default Nav;
