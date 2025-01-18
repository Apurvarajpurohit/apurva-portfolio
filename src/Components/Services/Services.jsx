import './Services.css';
import theme_pattern from '../../assets/theme_pattern.svg';
import skill1 from '../../assets/skills/react.png';
import skill2 from '../../assets/skills/redux.svg';
import skill3 from '../../assets/skills/react-native.svg';
import skill4 from '../../assets/skills/nextjs.svg';
import skill5 from '../../assets/skills/typescript.svg';
import skill6 from '../../assets/skills/material-ui.svg';
import skill7 from '../../assets/skills/html.svg';
import skill8 from '../../assets/skills/css.svg';
import skill9 from '../../assets/skills/tailwind-css.svg';
import skill10 from '../../assets/skills/bootstrap.svg';
import skill11 from '../../assets/skills/aws.svg';
import skill13 from '../../assets/skills/javascript.svg';
import skill14 from '../../assets/skills/typescript.svg';
import skill12 from '../../assets/skills/git.svg';
import Tooltip from './Tooltip.jsx';  // Import Tooltip component

const skills = [
  { src: skill1, alt: 'React', width: 240, height: 100, title: 'React.js' },
  { src: skill2, alt: 'Redux', width: 240, height: 100, title: 'Redux' },
  { src: skill3, alt: 'React Native', width: 240, height: 100, title: 'React Native' },
  { src: skill4, alt: 'Next.js', width: 240, height: 100, title: 'Next.js' },
  { src: skill5, alt: 'Typescript', width: 240, height: 100, title: 'TypeScript' },
  { src: skill7, alt: 'HTML', width: 240, height: 100, title: 'HTML' },
  { src: skill8, alt: 'CSS', width: 240, height: 100, title: 'CSS' },
  { src: skill13, alt: 'Javascript', width: 240, height: 100, style: { paddingBottom: '20px' }, title: 'JavaScript' },
  { src: skill10, alt: 'Bootstrap', width: 240, height: 80, style: { marginTop: '20px' }, title: 'Bootstrap' },
  { src: skill9, alt: 'Tailwind', width: 240, height: 80, title: 'Tailwind CSS' },
  { src: skill12, alt: 'GitHub', width: 240, height: 120, title: 'GitHub' },
  { src: skill6, alt: 'Material UI', width: 200, height: 80, title: 'Material UI' },
];

const Services = () => {
  return (
    <div id='services' className='services'>
      <div className="title-box">
        <h1>My Skills</h1>
        <img src={theme_pattern} alt="Theme Pattern" />
      </div>
      <div className="services-container">
        {skills.map((skill, index) => (
          <Tooltip key={index} title={skill.title}>
            <img
              src={skill.src}
              alt={skill.alt}
              width={skill.width}
              height={skill.height}
              style={skill.style}
            />
          </Tooltip>
        ))}
      </div>
    </div>
  );
};

export default Services;
