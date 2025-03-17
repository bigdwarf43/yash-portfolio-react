import GitHubIcon from '@material-ui/icons/GitHub'
import LinkedInIcon from '@material-ui/icons/LinkedIn'
import { about } from '../../portfolio'
import './About.css'

const About = () => {
  const { name, role, description, resume, social } = about
  return (
    <div>
      <div className='about about-column flex-container'>
        <div className="profile-image-container">
          <div className='game-container'>
            <img src='assets/pfp/dwarf.jpg' alt='' className="profile-image"/>
          </div>
        </div>
        <div className="about-content">
          {name && (
            <h2>
              <span className='about__name'>{name}</span>
              {role && <h2 className='about__role'>A {role}</h2>}
              <p className='about__desc'>{description && description}</p>
            </h2>
          )}
          
          <div className='about about__contact'>
            {resume && (
              <a href={resume} className='resume-link'>
                <span type='button' className='btn--outline'>
                  Resume
                </span>
              </a>
            )}
          </div>
          
          <div className="social-links-container">
            {social && (
              <>
                {social.github && (
                  <a
                    href={social.github}
                    aria-label='github'
                    className='link link--icon'
                  >
                    <GitHubIcon />
                  </a>
                )}
                {social.linkedin && (
                  <a
                    href={social.linkedin}
                    aria-label='linkedin'
                    className='link link--icon'
                  >
                    <LinkedInIcon />
                  </a>
                )}
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}

export default About