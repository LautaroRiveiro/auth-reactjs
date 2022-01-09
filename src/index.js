import 'bootstrap/dist/css/bootstrap.min.css'
import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter } from "react-router-dom"
import App from './App'
import { AuthContextProvider } from "./auth/AuthContext"
import './index.css'

// TODO: Mover a variable de entorno
const prod = true

ReactDOM.render(
  <AuthContextProvider>
    <BrowserRouter basename={prod ? "/auth-reactjs" : '/'}>
      <App />
    </BrowserRouter>
  </AuthContextProvider>,
  document.getElementById('root')
)
