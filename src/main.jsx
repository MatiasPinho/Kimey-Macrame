import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { UseContextProvider } from '../useContextHelper.jsx'
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
  <UseContextProvider>      
    <App/>
    </UseContextProvider>
  </React.StrictMode>,
)
