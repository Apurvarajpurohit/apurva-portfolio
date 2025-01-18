import './Hero.css';
import resume from '../../assets/resume.pdf'

import AnchorLink from 'react-anchor-link-smooth-scroll';
const Hero = () => {
  return (
    <div id='home' className='hero'>
      <h1><span>I'm Apurva Raj Purohit,</span> frontend developer based in India.</h1>
      <p>With over four years of experience in crafting intuitive and efficient web applications, I specialize in leveraging React to transform innovative ideas into reality. My passion for coding and problem-solving drives me to create impactful and user-centric digital experiences. Beyond technical expertise, I prioritize collaboration, scalability, and performance to ensure every project exceeds expectations and delivers long-term value.</p>
      <div className="hero-action">
        <div className="hero-connect"><AnchorLink className='anchor-link' offset={50} href='#contact'>Connect with me</AnchorLink></div>
        <div className="hero-resume">
        <a
    href={resume} // Path to your resume file
    download="Resume.pdf" // Suggested file name for download
    style={{
      textDecoration: 'none',
      color: 'inherit',
    }}
  >
    My Resume
  </a>
        </div>
      </div>
    </div>
  )
}

export default Hero
