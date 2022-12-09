import React from 'react'
import { AiFillInstagram, AiFillTwitterSquare, SiPixiv } from 'react-icons/all'

function Footer() {
  return (
    <div className='absolute bottom-0 w-full'>
      <div className='px-16 py-4 bg-zinc-800 text-white flex flex-col justify-center items-center'>
        <h3 className='uppercase text-lg py-8'>Horoshi Yume</h3>

        <p className='pb-8 w-1/3 text-center'>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci
          amet atque doloremque dolorum, esse magni nam possimus praesentium
          tenetur vitae. Autem commodi delectus ea molestiae non obcaecati odit
          quod quos.
        </p>

        <ul className='flex gap-4 justify-center'>
          <li
            className='flex justify-center items-center p-2
           rounded-full border-2'
          >
            <a href='' className='text-2xl'>
              <AiFillTwitterSquare />
            </a>
          </li>
          <li
            className='flex justify-center items-center p-2
           rounded-full border-2'
          >
            <a href='' className='text-2xl'>
              <AiFillInstagram />
            </a>
          </li>
          <li
            className='flex justify-center items-center p-2
           rounded-full border-2'
          >
            <a href='' className='text-2xl'>
              <SiPixiv />
            </a>
          </li>
        </ul>
      </div>

      <div className='flex items-center justify-between px-16 py-4 bg-zinc-900 text-white'>
        <p>Copyright ©2022 Horoshiyume</p>

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
      </div>
    </div>
  )
}

export default Footer
