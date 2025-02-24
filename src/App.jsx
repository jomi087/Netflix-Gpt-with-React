import React from 'react'
import {createBrowserRouter,RouterProvider} from 'react-router-dom'
import Login from './page/Login'
import Browse from './page/Browse'


const Router = createBrowserRouter([
  {
    path:'/',
    element : <Login/>
  },
  {
    path:'/browse',
    element : <Browse/>
  }
]);

const App = () => {
  return (
    <>
      <RouterProvider router={Router}/>
    </>
  )
}

export default App
