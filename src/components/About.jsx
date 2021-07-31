import React from 'react'
import Social from './Social'

const About = () => {
    return (
        <div className="About">
            <div className="About-container">
                <div className="About-avatar">
                    <figure>
                        <img src="/" alt="/"/>
                    </figure>
                </div>
                <div className="About-name">
                    <h3>Angel Merlin Solis</h3>
                </div>
                <div className="About-profession">
                    <p>Front-End Developer</p>
                </div>
                <div className="About-desc">
                    <p>La vida es como un programa, crashea se bugea pero esta guay</p>
                </div>
                <div className="About-location">
                    <p>México, Ciudad de México</p>
                </div>
                <div className="About-social">
                    <Social/>
                </div>
            </div>
            
        </div>
    )
}

export default About
