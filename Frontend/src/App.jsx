import React, { createContext, useState, useEffect } from 'react';
import { Route, Routes } from 'react-router-dom';
import Home from '../pages/Home';
import Register from '../pages/Authentication/Register';
import Login from '../pages/Authentication/Login';
import NoPageFound from '../pages/NoPageFound';
import ResetPass from '../pages/Authentication/ResetPass';
import ChatPage from '../pages/Profile/ChatPage';
import Profile from '../pages/Profile/Profile';
import StoriesPage from '../pages/Profile/StoriesPage';
import Settings from '../pages/Settings/Settings';
import PrivSec from '../pages/Settings/PrivSec';
import TermsnPolicies from '../pages/Settings/TermsnPolicies';
import PersonalInfo from '../pages/Settings/PersonalInfo';
import ContactPage from '../pages/Settings/ContactPage';
import ExplorePage from '../pages/Explore/ExplorePage';
import PrivateRouter from '../components/PrivateRouter';
import FriendProfile from '../pages/FriendProfile/FriendProfile';
import NotificationPage from '../pages/Profile/NotificationPage';
import { userList } from './listsUsed/usersList';
import Cookies from 'js-cookie';

// Context APIs for Authentication
export const Context = createContext();
export const loginContext = createContext();
export const ChatContext = createContext();

function App() {

  const [formData, setFormData] = useState({
    name: '',
    surname: '',
    username:'',
    email: '',
    password: '',
    passwordRepeat: '',
    gender: '',
    country: ''
  });

  const [loginForm, setLoginForm] = useState({
    email: "",
    password: ""
  });

  const [userBarForm, setUserBarForm] = useState({
    img: userList[0].img,
    name: userList[0].name
  });

  const [isAuthenticated, setIsAuthenticated] = useState(
    Cookies.get('authCookie') === 'true'
  );

  useEffect(() => {
    Cookies.set('authCookie', isAuthenticated, { expires: 7 });
  }, [isAuthenticated]);

  return (
    <ChatContext.Provider value={[userBarForm, setUserBarForm]}>
        <loginContext.Provider value={[loginForm, setLoginForm]}>
          <Context.Provider value={[isAuthenticated, setIsAuthenticated, formData, setFormData]}>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/home" element={<Home />} />
              <Route path="/register" element={<Register />} />
              <Route path="/login" element={<Login />} />
              <Route path="/resetpass" element={<ResetPass />} />
              <Route path="/chat" element={<PrivateRouter><ChatPage /></PrivateRouter>} />
              <Route path="/profile" element={<PrivateRouter><Profile /></PrivateRouter>} />
              <Route path="/stories" element={<PrivateRouter><StoriesPage /></PrivateRouter>} />
              <Route path="/settings" element={<PrivateRouter><Settings /></PrivateRouter>} />
              <Route path="/settings/privacy" element={<PrivateRouter><PrivSec /></PrivateRouter>} />
              <Route path="/settings/termspolicies" element={<PrivateRouter><TermsnPolicies /></PrivateRouter>} />
              <Route path="/settings/personal-info" element={<PrivateRouter><PersonalInfo /></PrivateRouter>} />
              <Route path="/settings/helpnsupport" element={<PrivateRouter><ContactPage /></PrivateRouter>} />
              <Route path="/explore" element={<PrivateRouter><ExplorePage /></PrivateRouter>} />
              <Route path="/profiles" element={<PrivateRouter><FriendProfile /></PrivateRouter>}/>
              <Route path="/notifications" element={<PrivateRouter><NotificationPage/></PrivateRouter>}/>
              <Route path="*" element={<NoPageFound />} />
            </Routes>
      </Context.Provider>
      </loginContext.Provider>
    </ChatContext.Provider>
  );
}

export default App;
