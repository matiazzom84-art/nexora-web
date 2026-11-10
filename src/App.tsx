import Footer from './components/Footer'
import Navbar from './components/Navbar'
import About from './sections/About'
import Benefits from './sections/Benefits'
import Contact from './sections/Contact'
import Faq from './sections/Faq'
import Hero from './sections/Hero'
import Portfolio from './sections/Portfolio'
import Process from './sections/Process'
import Services from './sections/Services'

function App() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Services />
        <Benefits />
        <Portfolio />
        <About />
        <Process />
        <Faq />
        <Contact />
      </main>
      <Footer />
    </>
  )
}

export default App