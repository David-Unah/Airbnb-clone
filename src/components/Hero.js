import React from 'react'
/* import heroImages from '../images/Group77.png' */

const Hero = () => {
  return (
    <div className='hero-container'>
        <img src="./images/Group77.png"
             alt='hero images'
             className='heroImages'
        />
        <div>
            <h1>Online Experiences</h1>
            <p className='oe-p'>Join unique interactive Experiences led by <span>one-of-a-kind host-all-without-leaving</span><span>home</span></p>
        </div>
    </div>
  )
}

export default Hero