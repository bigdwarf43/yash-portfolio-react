import { useContext, useState } from 'react'
import { ThemeContext } from './contexts/theme'
import Header from './components/Header/Header'
import About from './components/About/About'
import Projects from './components/Projects/Projects'
import Skills from './components/Skills/Skills'
import ScrollToTop from './components/ScrollToTop/ScrollToTop'
import Contact from './components/Contact/Contact'
import Footer from './components/Footer/Footer'
import Game from './components/Game/Game'
import TimelineExperience from './components/Experience/Experience'
import './App.css'

const App = () => {
  const [{ themeName }] = useContext(ThemeContext)
  const [activeComponent, setActiveComponent] = useState('about') // Default open component

  // Function to set active component - we'll pass this to Navbar
  const handleSetActiveComponent = (componentName) => {
    setActiveComponent(componentName)
  }

  return (
    <div id='top' className={`${themeName} app`}>
      <Header setActiveComponent={handleSetActiveComponent} activeComponent={activeComponent} />
      <main className="main-content">
        <div className={`drawer-component ${activeComponent === 'about' ? 'active' : ''}`}>
          <About />
          <TimelineExperience />


          <Projects />

        </div>
        <div className={`drawer-component ${activeComponent === 'game' ? 'active' : ''}`}>
          <Game />
        </div>
        {/* <div className={`drawer-component ${activeComponent === 'experience' ? 'active' : ''}`}>
          <TimelineExperience />
        </div> */}
        {/* <div className={`drawer-component ${activeComponent === 'projects' ? 'active' : ''}`}>
          <Projects />
        </div> */}
        <div className={`drawer-component ${activeComponent === 'skills' ? 'active' : ''}`}>
          <Skills />
        </div>
        <div className={`drawer-component ${activeComponent === 'contact' ? 'active' : ''}`}>
          <Contact />
        </div>
      </main>
      <ScrollToTop />
      <Footer />
    </div>
  )
}

export default App