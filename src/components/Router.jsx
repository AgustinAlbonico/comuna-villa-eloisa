import { Route, Routes, useLocation } from 'react-router-dom'

import Home from '../pages/Home'
import Nosotros from '../pages/Nosotros'
import Servicios from '../pages/Servicios'
import Gobierno from '../pages/Gobierno'
import Contacto from '../pages/Contacto'
import Noticias from '../pages/Noticias'
import Ordernanzas from '../pages/Ordenanzas'

import { ScrollSmoother } from 'gsap-trial/ScrollSmoother'
import { useGSAP } from '@gsap/react'

export default function Router() {
  const location = useLocation()

  useGSAP(() => {
    ScrollSmoother.create({
      smooth: 1,
      effects: true,
      smoothTouch: 1,
    })
  }, [location])

  return (
    <div id='smooth-wrapper'>
      <div id='smooth-content'>
        <Routes>
          <Route path='/'>
            <Route index={true} path='/' element={<Home />} />
            <Route path='/nosotros' element={<Nosotros />} />
            <Route path='/servicios' element={<Servicios />} />
            <Route path='/gobierno' element={<Gobierno />} />
            <Route path='/contacto' element={<Contacto />} />
            <Route path='/noticias' element={<Noticias />} />
            <Route path='/ordenanzas' element={<Ordernanzas />} />
          </Route>
        </Routes>
      </div>
    </div>
  )
}
