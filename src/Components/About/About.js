import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import Typing from 'react-typing-animation'

class About extends Component {
    render() {
        return (
            <div className='welcome_wrapper'>
                <div className='buisness_card'>
                        <div>
                            <h2 className='skinny'><span className='name'>Majd Tarbin</span></h2>
                            <p>Full-Stack Software Developer.</p>
                        </div>
                    <p className='mission'>As a software developer, the dedication to the human factor is the most important aspect of the results I deliver. I want my work to serve human welfare while innovatively tackling the challenging problems that come with my mission.</p>
                    <p>phone:<span className='link'>251-513-2053    </span></p>
                    <p>email:<span className='link'>majdtarbin@outlook.com</span></p>

                </div>
            </div>
        )
    }
}

export default About;
