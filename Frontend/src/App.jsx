import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from '../pages/Home'
import Register from '../pages/Authentication/Register'
import Login from '../pages/Authentication/Login'
import NoPageFound from '../pages/NoPageFound'
import ResetPass from '../pages/Authentication/ResetPass'
import ChatPage from '../pages/ChatPage'
import Profile from '../pages/Profile/Profile'
import StoriesPage from '../pages/Profile/StoriesPage'
import Settings from '../pages/Settings/Settings'
import PrivSec from '../pages/Settings/PrivSec'
import TermsnPolicies from '../pages/Settings/TermsnPolicies'
import PersonalInfo from '../pages/Settings/PersonalInfo'
import ContactPage from '../pages/Settings/ContactPage'
import ExplorePage from '../pages/Explore/ExplorePage'

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/home" element={<Home/>}/>
      <Route path="/register" element={<Register/>}/>
      <Route path="/login" element={<Login/>}/>
      <Route path="/resetpass" element={<ResetPass/>}/>
      <Route path="/chat" element={<ChatPage/>}/>
      <Route path="/profile" element={<Profile/>}/>
      <Route path="/stories" element={<StoriesPage/>}/>
      <Route path="/settings" element={<Settings/>}/>
      <Route path="/settings/privacy" element={<PrivSec/>}/>
      <Route path="/settings/termspolicies" element={<TermsnPolicies/>}/>
      <Route path="/settings/personal-info" element={<PersonalInfo/>}/>
      <Route path="/settings/helpnsupport" element={<ContactPage/>}/>
      <Route path="/explore" element={<ExplorePage/>}/>
      <Route path="*" element={<NoPageFound/>}/>
    </Routes>
  )
}

export default App