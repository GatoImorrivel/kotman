import React from 'react'
import ReactDOM from 'react-dom'
import reportWebVitals from './reportWebVitals'

import { BrowserRouter, Routes, Route, HashRouter } from 'react-router-dom'
import { App } from './App'
import { ManagingRoute } from './routes/ManagingRoute'
import { LoginRoute } from './routes/LoginRoute'

ReactDOM.render(
  <HashRouter>
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="/login" element={<LoginRoute />} />
      <Route path="/managing" element={<ManagingRoute />} />
    </Routes>
  </HashRouter>,
  document.getElementById('root')
)
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals()
