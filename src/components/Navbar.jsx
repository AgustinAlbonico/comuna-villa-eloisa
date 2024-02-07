import { useState } from 'react'
import Logo from '../assets/logo.png'
import MobileNavbar from './MobileNavbar'
import { navbarData } from '../assets/data'
import clsx from 'clsx'

import { IoMdArrowDropdown } from 'react-icons/io'
import { CgMenuRight, CgClose } from 'react-icons/cg'
import { Link } from 'react-router-dom'
import { Slide, Bounce, Fade } from 'react-awesome-reveal'
import { useLocation } from 'react-router-dom'
import HeaderTitle from './HeaderTitle'

const Navbar = () => {
  const [mobileNavbarOpen, setMobileNavbarOpen] = useState(false)

  const location = useLocation()

  return (
    <>
      <div className='block h-[80px]'>
        <div className='fixed bg-primary w-[100vw] flex flex-col items-center justify-center z-50'>
          <div className='w-[90%] xl:w-[80%] py-2 flex justify-between items-center container'>
            {/* Logo */}

            <Bounce duration={600}>
              <a href='/' className='min-w-[75px] group block relative'>
                <img
                  src={Logo}
                  alt='Logo'
                  className='h-16 p-1 group-hover:opacity-70 transition-all duration-300'
                />
              </a>
            </Bounce>

            {/* Menu items */}

            <Slide direction='right' duration={300}>
              <div className='hidden lg:flex lg:justify-center lg:items-center lg:flex-nowrap md:text-sm xl:justify-end text-white font-primary font-light z-40'>
                {navbarData.map((item) =>
                  !item.outside && !item.children ? (
                    <Link
                      key={item.name}
                      to={item.path}
                      className={clsx(
                        'lg:p-[4px] xxl:p-[8px] hover:bg-primaryHover hover:text-textHover hover:transition-all duration-500 group text-base z-40',
                        location.pathname === item.path &&
                          'bg-primaryHover text-textHover'
                      )}
                    >
                      <span className='uppercase flex items-center gap-x-1 tracking-tighter text-nowrap text-[0.90rem] xl:text-base'>
                        {item.name}
                      </span>
                    </Link>
                  ) : !item.outside && item.children ? (
                    <span
                      key={item.name}
                      className={clsx(
                        'lg:p-[4px] xxl:p-[8px] hover:bg-primaryHover hover:text-textHover hover:transition-all duration-500 text-base group cursor-pointer block',
                        location.pathname === item.path &&
                          'bg-primaryHover text-textHover'
                      )}
                    >
                      <span className='uppercase flex items-center gap-x-1 tracking-tighter text-nowrap text-[0.90rem] xl:text-base z-40'>
                        {item.name}
                        {item.children && (
                          <span className='group-hover:rotate-180 transition-all duration-300'>
                            <IoMdArrowDropdown height={24} width={24} />
                          </span>
                        )}

                        {/* DropdownMenuItem */}

                        <div className='w-fit h-fit bg-primary border-secondary border-2 rounded-md group-hover:text-white top-8 xxl:top-10 absolute hidden group-hover:lg:block group-hover:transition-all ease-in duration-1000'>
                          <div className='w-full block h-full p-[2px]'>
                            <span className='absolute left-4 -top-[0.55rem] bg-primary w-4 h-4 border-l-2 border-t-2 border-secondary rotate-45 z-[30]' />
                            <div className='flex flex-col items-start justify-normal p-2 gap-2 w-full z-40'>
                              {item.children.map((child) => (
                                <div
                                  key={child.name}
                                  className='hover:bg-primaryHover hover:text-textHover p-2 w-full z-40 text-sm tracking-tight'
                                >
                                  <span className='mr-2 font-bold'>-</span>
                                  <Link
                                    to={child.path}
                                    className=' h-full w-full'
                                  >
                                    {child.name}
                                  </Link>
                                </div>
                              ))}
                            </div>
                          </div>
                        </div>
                      </span>
                    </span>
                  ) : (
                    <a
                      key={item.name}
                      href={item.path}
                      className='lg:p-[4px] xxl:p-[8px] hover:bg-primaryHover hover:text-textHover hover:transition-opacity delay-75 group text-base'
                    >
                      <span className='uppercase flex items-center gap-x-2 tracking-tighter text-nowrap text-[0.90rem] xl:text-base'>
                        {item.name}
                        <img
                          src={item?.icon}
                          alt={`${item.name} Icon`}
                          className='invert w-5 h-5'
                        />
                      </span>
                    </a>
                  )
                )}
              </div>
            </Slide>

            {/* MobileMenuIcon */}

            <div
              className='block lg:hidden p-3 cursor-pointer transition-all duration-500 opacity-85'
              onClick={() => setMobileNavbarOpen(!mobileNavbarOpen)}
            >
              <Slide direction='right' duration={300}>
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
              </Slide>
            </div>
          </div>

          {/* Mobile Menu */}

          {mobileNavbarOpen && (
            <MobileNavbar
              navbarData={navbarData}
              setMobileNavbarOpen={setMobileNavbarOpen}
              mobileNavbarOpen={mobileNavbarOpen}
            />
          )}
        </div>
      </div>
      {/* Header Title */}

      <div className='w-full z-20'>
        <HeaderTitle title={location.pathname} />
      </div>
    </>
  )
}

export default Navbar
