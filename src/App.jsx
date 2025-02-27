

import React from 'react'
import {createBrowserRouter,RouterProvider} from 'react-router-dom'

import Login from './page/Login'
import Browse from './page/Browse'
import NotFound from './components/NotFound'

import AuthProvider  from './context/AuthProvider'

const router = createBrowserRouter([
  {
    path:'/',
    element : <Login/>
  },
  {
    path:'/browse',
    element : <Browse/>
  },
  {
    path:'*',
    element : <NotFound/>
  }
]);



const App = () => {
  return (
    <AuthProvider> 
      <RouterProvider router={router} />
    </AuthProvider>
  )
};

export default App;
