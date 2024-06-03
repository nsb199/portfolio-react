import React from 'react'
import './Hero.css'
import profile_img from '../../assets/profile_img.svg'

const Hero = () => {
    return(
        <div id='home' className='hero'>
        <img src={profile_img} alt="" />
        <h1><span>I'm Neeraj Singh,</span> frontend developer based in India.</h1>
        <p>A frontend developer passionate about creating beautiful and functional user experiences. I specialize in crafting intuitive interfaces with the latest web technologies.</p>
        <div className="hero-action">
            <div className="hero-connect">
               <a className='anchor-link' href="#contact"> Connect with me</a>

            </div>

        </div>
        </div>

    )
}

export default Hero