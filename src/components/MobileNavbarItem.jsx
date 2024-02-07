/* eslint-disable react/prop-types */
import { useState } from 'react'
import { Link } from 'react-router-dom'
import { IoMdArrowDropdown } from 'react-icons/io'
import { useLocation } from 'react-router-dom';

import clsx from 'clsx'

const MobileNavbarItem = ({ setMobileNavbarOpen, item }) => {
  const [displayMore, setDisplayMore] = useState(false);

  const location = useLocation()
 
  return (
    <>
      <div
        key={item.name}
        className={clsx('my-2 tracking-wide font-medium text-xl flex items-center w-full gap-x-2', location.pathname == item.path && 'bg-primaryHover text-textHover rounded-sm')}
      >
        <span className='font-normal p-1'>- </span>
        {!item.outside && !item.children ? (
          <Link
            to={item.path}
            className='w-full'
            onClick={() => setMobileNavbarOpen(false)}
          >
            <span className='uppercase tracking-tighter text-nowrap text-[0.90rem] flex items-center gap-x-1'>
              {item.name}
            </span>
          </Link>
        ) : !item.children ? (
          <a
              href={item.path}
              className=''
              onClick={() => setMobileNavbarOpen(false)}
            >
              <span className='uppercase tracking-tighter text-nowrap text-[0.90rem] w-full flex items-center gap-x-2'>
                {item.name}
                <img
                  src={item?.icon}
                  alt={`${item.name} Icon`}
                  className='invert w-6 h-6'
                />
              </span>
          </a>
        ) : (
          <span
            className='uppercase tracking-tighter text-nowrap text-[0.90rem] w-full flex items-center gap-x-1 cursor-pointer'
            onClick={() => setDisplayMore(!displayMore)}
          >
            {item.name}
            <span className='group-hover:rotate-180 transition-all duration-300'>
              <IoMdArrowDropdown height={24} width={24} />
            </span>
          </span>
        )}
      </div>

      

      {displayMore &&
        item.children.map((child) => (
          <div
            key={child.name}
            className={clsx('my-2 ml-6 tracking-tight font-normal text-xl flex w-full gap-x-2', location.pathname === child.path && 'bg-primaryHover text-textHover pl-2 rounded-sm')}
          >
            <span className='font-normal'>- </span>
            <Link
              to={child.path}
              className='w-full '
              onClick={() => setMobileNavbarOpen(false)}
            >
              <span className='uppercase tracking-tighter text-nowrap text-[0.90rem] flex items-center gap-x-1'>
                {child.name}
              </span>
            </Link>
          </div>
        ))}
    </>
  )
}

export default MobileNavbarItem
