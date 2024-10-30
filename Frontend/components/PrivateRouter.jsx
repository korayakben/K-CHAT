import React, { useContext } from 'react'
import { Navigate } from 'react-router-dom';
import { Context } from '../src/App';

function PrivateRouter({ children }) {

    const [isAuthenticated, setIsAuthenticated] = useContext(Context);

  return (
    isAuthenticated ? children : <Navigate to="/login"/>
  )
}

export default PrivateRouter