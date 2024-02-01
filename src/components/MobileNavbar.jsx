import React from 'react'

const MobileNavbar = ({ navbarData }) => {
  return (
    <>
      <div className='absolute inset-0 h-[50vh] w-full bg-black z-40 transition-all duration-500 delay-500'>
        {navbarData.map((item) => (
          <p>{item.data}</p>
        ))}
      </div>
    </>
  )
}

export default MobileNavbar
