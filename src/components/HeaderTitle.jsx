/* eslint-disable react/prop-types */
import { useState, useEffect } from 'react'
import { Fade } from 'react-awesome-reveal'
import clsx from 'clsx'

const HeaderTitle = ({ title }) => {
  const [visible, setVisible] = useState(true)

  useEffect(() => {
    window.addEventListener('scroll', () => {
      if (window.scrollY > 50) setVisible(false)
      else setVisible(true)
    })
  })

  return (
    <div className={clsx(!visible && 'hidden')}>
      <Fade duration={1200} triggerOnce={false}>
        <div className='absolute bg-lightBlue w-full flex items-center z-30'>
          <div className='text-white text-[20px] font-bold uppercase w-[100%] md:w-[80%] m-auto py-1 px-4 sm:px-8 md:px-12 lg:px-20 flex justify-center md:block'>
            {title === '/'
              ? 'Inicio'
              : title.charAt(0) === '/' && title.substring(1)}
          </div>
        </div>
      </Fade>
    </div>
  )
}

export default HeaderTitle
