import React, { Component } from 'react'
import './Footer.css'
import Linkedin from '../../Media/Social Media/linkedin.svg'
import Github from '../../Media/Social Media/github.svg'

class Footer extends Component {
    render() {
        return (
            <div className='footer_wrapper'>
                <footer className='footer'>
                    <div></div>
                    <div className='links'>
                        <p className='social'>Linked in</p>
                        <p className='social'>Github</p>
                    </div>
                </footer>
            </div>
        )
    }
}

export default Footer;
