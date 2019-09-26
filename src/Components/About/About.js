import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import Typing from 'react-typing-animation'

class About extends Component {
    render() {
        return (
            <div className='welcome_wrapper'>
                <div className='buisness_card'>
                    <Typing>
                        <p>
                            <h2 className='skinny'><span className='name'>Majd Tarbin</span></h2>
                            Full-Stack Software Developer.
                            </p>
                            <p>
                            I'm a full-stack software developer from Damascus, Syria. I have about 5 years of experience with programming and 3 years of professional experience.
                            <p>phone:<span className='link'>251-513-2053    </span>
                            email:<span className='link'>majdtarbin@outlook.com</span></p>
                    </p>
                    </Typing>

                </div>
            </div>
        )
    }
}

export default About;
