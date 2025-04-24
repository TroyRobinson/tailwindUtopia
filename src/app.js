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
      <img
        src='https://github.com/concrete-utopia/utopia/blob/master/editor/resources/editor/pyramid_fullsize@2x.png?raw=true'
        alt='Utopia logo'
        style={{
          width: 357,
          height: 453,
        }}
      ></img>
      <button className="mt-8 px-6 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition-colors">
        Click Me
      </button>
      {/* Simple Tailwind button */}
      <button className="mt-4 px-6 py-2 bg-green-600 text-white rounded shadow hover:bg-green-700 transition-colors">
        Tailwind Button
      </button>
    </FlexCol>
  )
}
