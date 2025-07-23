import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
// Change the import to your new global stylesheet
import './assets/styles/main.css' 

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)