import React from 'react'
import './About.css'
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from 'react-router-dom'

const About = () => {
    return (

       <div className="container">
        <h1>ABOUT</h1>
        <p> lorem ipsum dolor sit amet, consectetur adipiscing elit.
        </p>
        <p> lorem ipsum dolor sit amet, consectetur adipiscing elit.
        </p>
        <div className="circle-container">
        <div className='rounded-circle bg-black circle'>
          <Link to={'https://www.linkedin.com/in/dani-rizky/'}>
            <FontAwesomeIcon fontSize={'30px'} color='white' icon={faLinkedin} />
          </Link>
        </div>
        <div className='rounded-circle bg-black circle'>
          <Link to={'https://github.com/danirizkyzaelani'}>
            <FontAwesomeIcon fontSize={'30px'} color='white' icon={faGithub} />
          </Link>
        </div>
       </div>
       </div>

    )
}

export default About