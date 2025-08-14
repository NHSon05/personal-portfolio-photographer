import './App.css'
import Taskbar from './components/Taskbar.jsx'
import { HeadingTitle, Button, SocialMedia } from './components/Component.jsx'
import AnimatedBackground from './components/Background.jsx'
import WelcomeScreen from './Pages/WelcomeScreen.jsx'
import Info from './Pages/Info.jsx'
import About from './Pages/About.jsx'
import Portfolio from './Pages/Portfolio.jsx'
import Services from './Pages/Services.jsx'
import Contact from './Pages/Contact.jsx'
// Services Item


function Section() {
  return (
    // container
    <div>
        <Taskbar/>
        <WelcomeScreen/>
        <AnimatedBackground/>
        {/* <Info/> */}
        <About/>
        <Portfolio/>
        <Services/>
        <Contact/>
    </div>
  )
}

export default Section
