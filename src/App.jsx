import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Router from './components/Router'

import gsap from 'gsap-trial'
import { ScrollTrigger } from 'gsap-trial/ScrollTrigger'
import { ScrollSmoother } from 'gsap-trial/ScrollSmoother'
import { useGSAP } from '@gsap/react'
import WhatsappButton from './components/WhatsappButton/WhatsappButton'

gsap.registerPlugin(ScrollTrigger, ScrollSmoother, useGSAP)

function App() {
  return (
    <div className='font-primary'>
      <Navbar />
      <Router />
      <WhatsappButton/>
      <Footer />
    </div>
  )
}

export default App
