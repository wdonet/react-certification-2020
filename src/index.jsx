import React from 'react'
import ReactDOM from 'react-dom'
import 'normalize.css'
import 'reset-css'
import ThemeStyle from './styles/global/Theme'
import BaselineStyle from './styles/global/Baseline'
import LayoutStyle from './styles/global/Layout'
import Layout from './components/Layout'
import reportWebVitals from './utils/reportWebVitals'
import Themes from './config/themes'

ReactDOM.render(
  <React.StrictMode>
    <ThemeStyle theme={Themes.colorfull} />
    <BaselineStyle />
    <LayoutStyle />
    <Layout>example</Layout>
  </React.StrictMode>,
  document.getElementById('root')
)

reportWebVitals(console.log)
