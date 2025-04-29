import * as React from 'react'
import { Scene, Storyboard } from 'utopia-api'
import { App } from '../src/app'
import { Playground } from '../src/playground'

export var storyboard = (
  <Storyboard>
    <Scene
      id='playground-scene'
      commentId='playground-scene'
      style={{
        width: 700,
        height: 759,
        position: 'absolute',
        left: 212,
        top: 128,
      }}
      data-label='Playground'
    >
      <Playground style={{}} />
    </Scene>
    <Scene
      id='app-scene'
      commentId='app-scene'
      style={{
        width: 1000,
        height: 1133,
        position: 'absolute',
        left: 1036,
        top: 128,
      }}
      data-label='My App'
    >
      <App style={{}} />
    </Scene>
    <Scene
      id='app-scene'
      commentId='69d8bccda9198e70f8ffd7c4c46554ea'
      style={{
        width: 400,
        height: 1133,
        position: 'absolute',
        left: 2200,
        top: 128,
      }}
      data-label='My App'
      className='h-[394px] left-[2608px] top-[108px]'
    >
      <App style={{}} />
    </Scene>
  </Storyboard>
)
