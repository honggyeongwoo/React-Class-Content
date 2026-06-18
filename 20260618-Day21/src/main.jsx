import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'

import App2 from './app2.jsx'
import Posts from './Posts.jsx'
import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Posts />
  </StrictMode>,
)
