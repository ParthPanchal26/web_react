import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom'
import Home from './Components/Home/Home.jsx'
import About from './Components/About/About.jsx'
import Contact from './Components/Contact-us/Contact.jsx'
import Layout from './Layout.jsx'
import User from './Components/User/User.jsx'
import Github, { gitHubInfoLoader } from './Components/Github/Github.jsx'


const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<Layout />}>
      <Route path='/web_react/' element={<Home />} />
      <Route path='/web_react/about' element={<About />} />
      <Route path='/web_react/contact' element={<Contact />} />
      <Route path='/web_react/user/:id' element={<User />} />
      <Route loader={gitHubInfoLoader} path='/web_react/github' element={<Github />} />
    </Route>
  )
)

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
     <RouterProvider router={router} />   
  </React.StrictMode>,
)
