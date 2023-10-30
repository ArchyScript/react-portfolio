import React from 'react'
import ReactDOM from 'react-dom'
import './css/styles.css'
import App from './App'
import reportWebVitals from './reportWebVitals'
import { BrowserRouter } from 'react-router-dom'
import { ThemeProvider } from './context/ContextProvider';

// const root = ReactDOM.createRoot(document.getElementById('root'))
ReactDOM.render(
  <BrowserRouter>
    <ThemeProvider>
      <App />
    </ThemeProvider>
  </BrowserRouter>,
  document.getElementById('root'),
)
reportWebVitals()
