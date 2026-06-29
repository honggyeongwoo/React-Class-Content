import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import './index2.css'
import App from './App.jsx'
import UseStateTest from './ex/UseStateTest.jsx'
import DarkMode from './ex/DarkMode.jsx'
import LikeMode from './ex/LikeMode.jsx'
import PasswordMode from './ex/PasswordMode.jsx'
import ClassNameTest from './ex/ClassNameTest.jsx'
import BgChange from './ex/BgChange.jsx'
import Lab1 from './Hnads-on-lab/Lab1.jsx'
import UseStateInput from './ex/UseStateInput.jsx'
import TextCount from './ex/TextCount.jsx'
import SearchArray from './ex/SearchArray.jsx'
import CartList from './ex/CartList.jsx'
import MovieList from './ex/MovieList.jsx'
import FriendList from './ex/FriendList.jsx'
import UseObjectTest from './UseObjectTest.jsx'
import UseObjectList from './UseObjectList.jsx'
import GameCharList from './GameCharList.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <GameCharList />
  </StrictMode>,
)
