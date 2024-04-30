import { Map } from '@components/Map/Map'
import { Panel } from '@components/Panel/Panel'
import React, { type JSX } from 'react'
import './styles/index.scss'

function App (): JSX.Element {
  return (
    <>
      <Panel />
      <Map />
    </>
  )
}

export default App
