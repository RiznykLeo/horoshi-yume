import React from 'react'

function Navbar() {
  return (
    <div
      className='grid grid-cols-3 items-center px-16 py-4
     bg-zinc-50 drop-shadow-md sticky top-0'
    >
      <h2 className='uppercase font-bold text-2xl'>Horoshi Yume</h2>
      <ul className='flex justify-center gap-4 flex-wrap uppercase'>
        <li>
          <a href=''>Bio</a>
        </li>
        <li>
          <a href=''>Gallery</a>
        </li>
        <li>
          <a href=''>Manga</a>
        </li>
      </ul>
      <div className='text-end '>
        <a
          className='px-4 py-2 bg-orange-500 text-white uppercase rounded'
          href=''
        >
          Contact
        </a>
      </div>
    </div>
  )
}

export default Navbar
