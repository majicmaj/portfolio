import React, { Component } from 'react'
import './Nav.css'

class Nav extends Component {
    render() {
        return (
            <div className='topnav_wrapper'>
                <nav className='topnav'>
                    <nav className='left'>
                        <p className='logo'>majd tarbin</p>
                    </nav>
                    <nav className='right'>
                        <p className='link'>projects</p>
                        <p className='link'>about</p>
                        <p className='link'>contact</p>
                    </nav>
                </nav>
            </div>
            
        )
    }
}

export default Nav;
