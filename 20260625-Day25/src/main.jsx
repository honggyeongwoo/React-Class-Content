import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
// import './index.css'
// import App from './App.jsx'
// import UseStateTest from './UseStateTest.jsx'
// import UseStateTest2 from './UseStateTest2.jsx'
// import AdminPage from './pages/AdminPage.jsx'
// import ContrlTest from './ContrlTest.jsx'
// import ControlTest2 from './ControlTest2.jsx'
// import StartPage from './pages/balanceGame/StartPage.jsx'
// import BalanceMain from './pages/balanceGame/BalanceMain.jsx'

import Ex1 from './pages/ex/Ex1.jsx'
import Ex2 from './pages/ex/Ex2.jsx'


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Ex2 />
  </StrictMode>,
)
