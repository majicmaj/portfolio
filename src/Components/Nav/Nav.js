import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import './Nav.css'

class Nav extends Component {
    constructor() {
        super()
        this.state = {
            active: 0
        }
    }
    handleDevMode = () => {
        console.log('chica')
        console.log(this.state.active)
        let input = document.getElementById("console")
        if (this.state.active === 'inactive') {
            input.classList.add('active')
            this.setState({ active: 'active' })
        }
        else {
            input.classList.remove('active')
            this.setState({ active: 'inactive' })
        }
    }
    render() {
        return (
            <div className='topnav_wrapper'>
                <nav className='topnav'>
                    <nav className='left'>
                        <Link to='/' onClick={this.handleDevMode}>
                            <p className='logo'>majdtarbin@portfolio:</p>
                        </Link>
                        <input className='console' id='console'/>
                    </nav>
                    <nav className='right'>
                        <Link to='/'>
                            <p className='link'>home</p>
                        </Link>
                        <Link to='/projects'>
                            <p className='link'>projects</p>
                        </Link>

                        <Link to='/about'>
                            <p className='link'>about</p>
                        </Link>
                    </nav>
                </nav>
            </div>

        )
    }
}

export default Nav;
