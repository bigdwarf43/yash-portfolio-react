import { header } from '../../portfolio'
import Navbar from '../Navbar/Navbar'
import './Header.css'

const Header = ({ setActiveComponent, activeComponent }) => {
  const { homepage, title } = header

  const handleTitleClick = (e) => {
    if (!homepage) {
      e.preventDefault()
      setActiveComponent('about')
    }
  }

  return (
    <header className="header">
      <div className="header__content">
        <h3>
          {homepage ? (
            <a href={homepage} className="link">
              {title}
            </a>
          ) : (
            <a href="#about" onClick={handleTitleClick} className="link">
              {title}
            </a>
          )}
        </h3>
        <Navbar
          setActiveComponent={setActiveComponent}
          activeComponent={activeComponent}
        />
      </div>
    </header>
  )
}

export default Header
