/* eslint-disable react/prop-types */
import { Slide } from 'react-awesome-reveal'
import MobileNavbarItem from './MobileNavbarItem'

const MobileNavbar = ({ navbarData, setMobileNavbarOpen }) => {
  return (
    <>
      <div className='w-full z-10'>
        <Slide direction='left' duration={500}>
          <div className='w-[90%] h-fit mx-auto bg-primary z-40 text-white lg:hidden pb-3'>
            <p className='w-[90%] bg-secondary h-[2px] mx-auto my-[0.75rem] rounded-full'></p>
            <div className='mx-auto w-[90%]'>
              {navbarData.map((item) => (
                <MobileNavbarItem
                  navbarData={navbarData}
                  setMobileNavbarOpen={setMobileNavbarOpen}
                  item={item}
                  key={item.name}
                />
              ))}
            </div>
          </div>
        </Slide>
      </div>
    </>
  )
}

export default MobileNavbar
