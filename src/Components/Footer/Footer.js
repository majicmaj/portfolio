import React, { Component } from 'react'
import './Footer.css'

class Footer extends Component {
    render() {

        let url = {
            linkedin: 'https://www.linkedin.com/in/majdtarbin/',
            github: 'https://github.com/majicmaj',
            email: 'mailto:majdtarbin@outlook.com',
            resume: 'https://docs.google.com/document/d/1m0uzW9fHm6e1qOGo-DAJ2WQbYwc_vr740OiTutpCwZQ/edit?usp=sharing'
        }
        return (
            <div className='footer_wrapper'>
                <footer className='footer'>
                    <div></div>
                    <div className='links'>
                        <p className='social'><a href={url.linkedin}>LinkedIn</a></p>
                        <p className='social'><a href={url.github}>Github</a></p>
                        <p className='social'><a href={url.email}>Email</a></p>
                        <p className='social'><a href={url.resume}>Resume</a></p>
                    </div>
                </footer>
            </div>
        )
    }
}

export default Footer;
