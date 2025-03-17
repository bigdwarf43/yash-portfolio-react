
import Navbar from '../Navbar/Navbar'
import './Header.css'

const Header = ({ setActiveComponent, activeComponent }) => {


  return (
    <header className="header">
      <div className="header__content">
        <Navbar
          setActiveComponent={setActiveComponent}
          activeComponent={activeComponent}
        />
      </div>
    </header>
  )
}

export default Header
