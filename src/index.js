/* eslint-disable */
import React from 'react'
import ReactDOM from 'react-dom'
import 'normalize.css'
import 'reset-css'
import Layout from './components/Layout'
import reportWebVitals from './services/reportWebVitals'
import ThemeStylesProvider from './providers/ThemeStyles'
import CustomProvider from './providers/Custom'

ReactDOM.render(
  <React.StrictMode>
    <CustomProvider>
      <ThemeStylesProvider>
        <Layout />
      </ThemeStylesProvider>
    </CustomProvider>
  </React.StrictMode>,
  document.getElementById('root')
)

reportWebVitals()
