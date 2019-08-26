import React, { Component } from 'react'
import SingleProject from './SingleProject/SingleProject'
import './Projects.css'
import projectOne from '../../Media/Projects/rocketball.png'
import projectTwo from '../../Media/Projects/lolbuilder.png'

class Footer extends Component {
    render() {
        return (
            <div className='projects_wrapper'>
                <SingleProject
                    img={projectTwo}
                    title='League of Legends Team Builder'
                    description='
                    a React full-stack application based on data from datadragon that allows you to create teams and compare the stats of different compositions.
                    '
                    url='https://lolbuilder.netlify.com'
                    repo='https://github.com/majicmaj/lol-builder'
                />
                <SingleProject
                    img={projectOne}
                    title='Rocket Ball'
                    description='
                    A Javascript browser 2D jet-engine cars soccer game with a giant ball using Matter.js
                    '
                    url='https://majicmaj.github.io/'
                    repo='https://github.com/majicmaj/rocketball'
                />
            </div>
        )
    }
}

export default Footer;
