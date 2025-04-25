import * as React from 'react'
import '../public/globals.css'
import { FlexCol } from './utils'

export var App = () => {
  return (
    <FlexCol
      style={{
        width: '100%',
        height: '100%',
        background: 'white',
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      <FlexCol className='gap-4 p-[1rem_3rem_1rem_3rem]'>
        <img
          src='https://github.com/concrete-utopia/utopia/blob/master/editor/resources/editor/pyramid_fullsize@2x.png?raw=true'
          alt='Utopia logo'
          className='w-[162px] h-[210px] border-8 rounded-[38px] overflow-hidden mb-4'
        />
        <button className='mt-4 px-6 py-2 bg-purple-600 text-white rounded shadow hover:bg-green-700 transition-colors'>
          Tailwind Button
        </button>
        <button className='mt-8 px-6 py-2 bg-black text-red-400 rounded-full border-2 border-red-600 uppercase tracking-wide font-semibold transform transition duration-300 hover:-translate-y-1 hover:scale-105 hover:bg-gray-800 focus:outline-none focus:ring-4 focus:ring-red-600 focus:ring-opacity-50 animate-pulse'>
          Tailwind Ninja Button
        </button>
      </FlexCol>
      {/* Simple Tailwind button */}
    </FlexCol>
  )
}
