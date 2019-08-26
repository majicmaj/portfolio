import React, { Component } from 'react'
import './Footer.css'

class Footer extends Component {
    render() {
        return (
            <div className='footer_wrapper'>
                <footer className='footer'>
                    <div></div>
                    <div className='links'>
                        <p className='social'>LinkedIn</p>
                        <p className='social'>Github</p>
                        <p className='social'>Email</p>
                    </div>
                </footer>
            </div>
        )
    }
}

export default Footer;
