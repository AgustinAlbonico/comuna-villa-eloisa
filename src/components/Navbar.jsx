import { useState } from 'react'
import Logo from '../assets/logo.png'
import { IoMdArrowDropdown } from 'react-icons/io'
import { CgMenuRight, CgClose } from 'react-icons/cg'
import MobileNavbar from './MobileNavbar'

const navbarData = [
  { name: 'Inicio', path: '/' },
  {
    name: 'Nuestro pueblo',
    children: [
      { name: 'Nuestro pueblo', path: '/nosotros' },
      { name: 'En el mundo', path: '/nosotros/world' },
      { name: 'Nuestras fotos', path: '/nosotros/pictures' },
    ],
  },
  {
    name: 'Servicios',
    children: [
      { name: 'Servicios', path: '/servicios' },
      { name: 'Licencias de conducir', path: '/servicios#licencias' },
      { name: 'Tasas comunales', path: '/servicios#tasas' },
      { name: 'Nuestras fotos', path: '/servicios#vencimientos' },
    ],
  },
  { name: 'Gobierno', path: '/gobierno' },
  { name: 'Contacto', path: '/contacto' },
  { name: 'Noticias', path: '/noticias' },
  { name: 'Ordenanzas', path: '/ordenanzas' },
  { name: 'Cancha de padel', path: '/reservar' },
]

const Navbar = () => {
  const [mobileNavbarOpen, setMobileNavbarOpen] = useState(false)

  return (
    <>
      <div className='fixed bg-primary w-[100vw] py-5 flex justify-center z-50'>
        <div className='w-[90%] xl:w-[80%] flex justify-between items-center container'>
          {/* Logo */}

          <a href='/' className='min-w-[75px] group block relative'>
            <img
              src={Logo}
              alt='Logo'
              className='h-16 p-1 group-hover:opacity-70 transition-all duration-300'
            />
          </a>

          {/* Menu items */}

          <div className='hidden lg:flex lg:justify-center lg:items-center lg:flex-nowrap md:text-sm xl:justify-end text-white font-primary font-light'>
            {navbarData.map((item) => (
              <a
                key={item.name}
                href={item.path}
                className='lg:p-[4px] xxl:p-[8px] hover:bg-primaryHover hover:text-textHover hover:transition-opacity delay-75 group text-base'
              >
                <span className='uppercase flex items-center gap-x-1 tracking-tighter text-nowrap text-[0.90rem] xl:text-base'>
                  {item.name}
                  {item.children && (
                    <span className='group-hover:rotate-180 transition-all duration-300'>
                      <IoMdArrowDropdown height={24} width={24} />
                    </span>
                  )}
                </span>
              </a>
            ))}
          </div>

          {/* MobileMenuIcon */}

          <div
            className='block lg:hidden p-3 cursor-pointer transition-all duration-500 opacity-85'
            onClick={() => setMobileNavbarOpen(!mobileNavbarOpen)}
          >
            {!mobileNavbarOpen ? (
              <CgMenuRight
                color='white'
                size={35}
                className='transition-all duration-300'
              />
            ) : (
              <CgClose
                color='white'
                size={30}
                className='transition-all duration-300'
              />
            )}
          </div>
        </div>
      </div>
      {mobileNavbarOpen && <MobileNavbar navbarData={navbarData} />}
    </>
  )
}

export default Navbar
