import React from 'react'
import ReactDOM from 'react-dom'
import 'normalize.css'
import 'reset-css'
import Layout from './components/Layout'
import reportWebVitals from './services/reportWebVitals'
import ThemeStylesProvider from './providers/ThemeStyles'

ReactDOM.render(
  <React.StrictMode>
    <ThemeStylesProvider>
      <Layout>This is a long text</Layout>
    </ThemeStylesProvider>
  </React.StrictMode>,
  document.getElementById('root')
)

reportWebVitals()
