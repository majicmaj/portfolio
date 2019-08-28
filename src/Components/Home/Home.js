import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import Typing from 'react-typing-animation'

class Home extends Component {
    render() {
        return (
            <div className='welcome_wrapper'>
                <Typing className='typing'>
                    <h1 className='welcome'>
                        Hello! My name is <span className='name'>Majd Tarbin</span>.
                        I'm a full-stack software developer.
                    </h1>
                    <h2 className='project_ad'>
                        Take a look at my <Link to='/projects' className='redbox'>projects</Link>
                    </h2>
                </Typing>

            </div>
        )
    }
}

export default Home;
