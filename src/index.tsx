import { YMaps } from '@pbe/react-yandex-maps'
import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'

const root = ReactDOM.createRoot(
  // eslint-disable-next-line
  document.getElementById('root')!
)
root.render(
  <React.StrictMode>
    <YMaps>
      <App />
    </YMaps>
  </React.StrictMode>
)
