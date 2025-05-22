import { useState } from 'react'
import './App.css'
import './index.css'
import Navbar from '../components/Navvbar'
import Explore from '../components/Explore'
import About from '../components/About'
import Projects from '../components/Projects'
import Testimonial from '../components/Testimonial'
import Contact from '../components/Contact'
import Footer from '../components/Footer'
import "../node_modules/bootstrap/dist/css/bootstrap.min.css"

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="absolute top-0 z-[-2] bg-neutral-950 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(120,119,198,0.3),rgba(255,255,255,0))]">

<Navbar/>
<Explore/>
<About/>
<Projects/>
<Testimonial/>
<Contact/>
<Footer/>

    </div>
  )
}

export default App
