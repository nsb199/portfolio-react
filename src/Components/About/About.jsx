import React from 'react'
import './About.css'
import theme_pattern from '../../assets/theme_pattern.svg'
import profile_img from '../../assets/about_profile.svg'


const About = () => {
    return(
        <div id='about' className='about'>
            <div className="about-title">
                <h1>About me</h1>
                <img src={theme_pattern} alt="" />
            </div>
            <div className="about-sections">
            <div className="about-left">
                <img src={profile_img} alt="" />

            </div>
            <div className="about-right">
                <div className="about-para">
                    <p>Hi, I'm Neeraj, a passionate frontend developer dedicated to crafting beautiful and functional user experiences.</p>
                    <p>With a keen eye for design and a deep understanding of the latest web technologies, I create responsive and intuitive interfaces that bring ideas to life.</p>
                </div>
                <div className="about-skills">
                    <div className="about-skill">
                        <p>HTML & CSS</p><hr style={{width: "80%"}} />
                    </div>
                    <div className="about-skill">
                        <p>React JS</p><hr style={{width: "60%"}} />
                    </div>
                    <div className="about-skill">
                        <p>JavaScript</p><hr style={{width: "70%"}} />
                    </div>
                </div>
            </div>
            </div>
            <div className="about-achievements">
                <div className="about-achievement">
                    <h1>2+</h1>
                    <p>YEARS OF EXPERIENCE</p>

                </div>
                <hr />
                <div className="about-achievement">
                    <h1>70+</h1>
                    <p>PROJECTS COMPLETED</p>

                </div>

            </div>
        </div>
    )
}

export default About