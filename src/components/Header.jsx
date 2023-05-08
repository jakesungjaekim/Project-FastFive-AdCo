import React from 'react'


export const MenuIcon = () => (

  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-6 h-6 xl:hidden">
    <path stroke-linecap="round" stroke-linejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
  </svg>
);

const Header = () => {
  return (
      <div className='flex items-center justify-between p-4 border border-zinc-200'>
        <img src="assets/images/image-logo.svg" alt="logo" />
        <MenuIcon />
      </div>
  )
}

export default Header
