import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
// import App from './App.jsx'
import HotTopic from '../src/pages/HotTopic'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <HotTopic />
  </StrictMode>,
)
