import {  useState, useEffect } from 'react'
// import Brightness2Icon from '@material-ui/icons/Brightness2'
// import WbSunnyRoundedIcon from '@material-ui/icons/WbSunnyRounded'
import MenuIcon from '@material-ui/icons/Menu'
import CloseIcon from '@material-ui/icons/Close'
// import { ThemeContext } from '../../contexts/theme'
import { projects, skills, contact } from '../../portfolio'
import './Navbar.css'

const Navbar = ({ setActiveComponent, activeComponent }) => {
  // const [{ themeName, toggleTheme }] = useContext(ThemeContext)
  const [showNavList, setShowNavList] = useState(false)
  
  // Close menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (showNavList && !event.target.closest('.nav') && !event.target.closest('.nav__list')) {
        setShowNavList(false);
      }
    };

    if (showNavList) {
      document.addEventListener('click', handleClickOutside);
    }
    
    return () => {
      document.removeEventListener('click', handleClickOutside);
    };
  }, [showNavList]);
  
  const toggleNavList = () => setShowNavList(!showNavList)
  
  // Close menu handler - to be used by multiple elements
  const closeMenu = () => {
    setShowNavList(false);
  }
  
  // Modified click handler for nav items
  const handleNavClick = (e, componentName) => {
    e.preventDefault() // Prevent default anchor behavior
    setActiveComponent(componentName) // Set the active component
    closeMenu() // Close mobile menu after selection
  }
  
  // Close menu when ESC key is pressed
  useEffect(() => {
    const handleEscKey = (event) => {
      if (event.key === 'Escape') {
        closeMenu();
      }
    };
    
    window.addEventListener('keydown', handleEscKey);
    return () => {
      window.removeEventListener('keydown', handleEscKey);
    };
  }, []);

  return (
    <>
      {/* Background overlay - now with keyboard accessibility */}
      {showNavList && (
        <div 
          role="button"
          tabIndex={0}
          className="nav-overlay show"
          onClick={closeMenu}
          onKeyDown={(e) => {
            if (e.key === 'Enter' || e.key === ' ') {
              closeMenu();
            }
          }}
          aria-label="Close menu"
        />
      )}
      
      <nav className='center nav'>
        <ul
          className={`nav__list ${showNavList ? 'show' : ''}`}
        >
          <li className='nav__list-item'>
            <a
              href='#about'
              onClick={(e) => handleNavClick(e, 'about')}
              className={`link link--nav ${activeComponent === 'about' ? 'active' : ''}`}
            >
              About
            </a>
          </li>

          
          <li className='nav__list-item'>
            <a
              href='#experience'
              onClick={(e) => handleNavClick(e, 'experience')}
              className={`link link--nav ${activeComponent === 'experience' ? 'active' : ''}`}
            >
              Experience
            </a>
          </li>
          
          {projects.length ? (
            <li className='nav__list-item'>
              <a
                href='#projects'
                onClick={(e) => handleNavClick(e, 'projects')}
                className={`link link--nav ${activeComponent === 'projects' ? 'active' : ''}`}
              >
                Projects
              </a>
            </li>
          ) : null}
          
          {skills.length ? (
            <li className='nav__list-item'>
              <a
                href='#skills'
                onClick={(e) => handleNavClick(e, 'skills')}
                className={`link link--nav ${activeComponent === 'skills' ? 'active' : ''}`}
              >
                Skills
              </a>
            </li>
          ) : null}
          
          {contact.email ? (
            <li className='nav__list-item'>
              <a
                href='#contact'
                onClick={(e) => handleNavClick(e, 'contact')}
                className={`link link--nav ${activeComponent === 'contact' ? 'active' : ''}`}
              >
                Contact
              </a>
            </li>
          ) : null}
        </ul>
        
        {/* <button
          type='button'
          onClick={toggleTheme}
          className='btn btn--icon nav__theme'
          aria-label='toggle theme'
        >
          {themeName === 'dark' ? <WbSunnyRoundedIcon /> : <Brightness2Icon />}
        </button> */}
        
        <button
          type='button'
          onClick={toggleNavList}
          className='btn btn--icon nav__hamburger'
          aria-label='toggle navigation'
        >
          {showNavList ? <CloseIcon /> : <MenuIcon />}
        </button>
      </nav>
    </>
  )
}

export default Navbar