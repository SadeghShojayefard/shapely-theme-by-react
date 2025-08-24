import './Projects.css';


import React from 'react'

export default function Projects() {
    return (
        <div className='projects-body-style'>
            <div className='projects-title'>
                <p className='Projects-title-firstLine'>
                    Our Latest Projects
                </p>
                <p className='Projects-title-SecondLine'>
                    Here is our latest projects. You'll love them!
                </p>
                <div className='paralex-Button-Section'>
                </div>
            </div>
            <div className='project-sample'>
                <img src="./Projects/1.jpg" />
                <img src="./Projects/2.jpg" />

                <img src="./Projects/3.jpg" />
                <img src="./Projects/4.jpg" />

                <img src="./Projects/5.jpg" />
                <img src="./Projects/6.jpg" />
                <img src="./Projects/7.jpg" />
                <img src="./Projects/8.jpg" />
                <img src="./Projects/9.jpg" />
                <img src="./Projects/10.jpg" />
                <div className='empty-space'></div>
                <div className='empty-space'></div>
            </div>
        </div>
    )
}
