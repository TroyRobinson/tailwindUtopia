import * as React from 'react'
import '../public/globals.css'
import { FlexCol } from './utils'
import { useState } from 'react'

const menuData = [
  { label: 'Home', href: '#' },
  { label: 'Dogs', href: '#' },
  { label: 'Contact', href: '#' },
]

export var App = () => {
  const [menuOpen, setMenuOpen] = useState(false)
  return (
    <div className='bg-white'>
      <nav className='flex justify-between items-center py-4 px-6 border-b border-gray-200'>
        <div className='text-lg font-bold'>Logo</div>
        <button
          className='md:hidden flex flex-col justify-center w-8 h-8 bg-gray-100 hover:bg-gray-200 rounded relative z-20'
          onClick={() => setMenuOpen(true)}
          aria-label='Open menu'
        >
          <span className='block w-6 h-0.5 mx-auto bg-gray-600 mb-1' />
          <span className='block w-6 h-0.5 mx-auto bg-gray-600 mb-1' />
          <span className='block w-6 h-0.5 mx-auto bg-gray-600' />
        </button>
        <ul className='hidden md:flex items-center gap-x-6'>
          {menuData.map((item, idx) => (
            <li key={idx}>
              <a
                href={item.href}
                className='text-sm font-medium text-gray-600 hover:text-gray-900'
              >
                {item.label}
              </a>
            </li>
          ))}
        </ul>
      </nav>
      {menuOpen && (
        <div className='fixed inset-0 bg-black bg-opacity-40 flex items-center justify-center z-40'>
          <div
            className='absolute inset-0'
            onClick={() => setMenuOpen(false)}
          ></div>
          <div className='relative z-50 bg-white w-11/12 max-w-sm rounded-lg shadow-lg p-6 flex flex-col'>
            <button
              className='self-end mb-4 text-gray-700 hover:text-gray-900'
              onClick={() => setMenuOpen(false)}
              aria-label='Close menu'
            >
              <svg viewBox='0 0 20 20' className='w-6 h-6'>
                <path
                  d='M6 6l8 8M14 6l-8 8'
                  stroke='currentColor'
                  strokeWidth='2'
                  strokeLinecap='round'
                />
              </svg>
            </button>
            <ul className='flex flex-col gap-y-4'>
              {menuData.map((item, idx) => (
                <li key={idx}>
                  <a
                    href={item.href}
                    className='text-lg font-medium text-gray-700 hover:text-indigo-600'
                    onClick={() => setMenuOpen(false)}
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      )}
      <div className='relative isolate px-6 pt-14 lg:px-8 left-0 top-0'>
        <div className='mx-auto max-w-2xl py-32 sm:py-48 lg:py-56'>
          <div className='hidden sm:mb-8 sm:flex sm:justify-center'>
            <div className='relative rounded-full px-3 py-1 text-sm leading-6 text-gray-600 ring-1 ring-gray-900/10 hover:ring-gray-900/20'>
              Announcing our next round of funding.{' '}
              <a
                href='#'
                className='font-semibold text-indigo-600'
              >
                <span
                  className='absolute inset-0'
                  aria-hidden='true'
                />
                Read more{' '}
                <span aria-hidden='true'>&rarr;</span>
              </a>
            </div>
          </div>
          <div className='text-center'>
            <h1 className='text-balance text-5xl font-semibold tracking-tight text-gray-900 sm:text-7xl'>
              Data to enrich your online business
            </h1>
            <p className='mt-8 text-pretty text-lg font-medium text-gray-500 sm:text-xl leading-8'>
              Anim aute id magna aliqua ad ad non deserunt
              sunt. Qui irure qui lorem cupidatat commodo.
              Elit sunt amet fugiat veniam occaecat.
            </p>
            <div className='mt-10 flex items-center justify-center gap-x-6'>
              <a
                href='#'
                className='rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600'
              >
                Get started
              </a>
              <a
                href='#'
                className='text-sm font-semibold leading-6 text-gray-900'
              >
                Learn more <span aria-hidden='true'>→</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
