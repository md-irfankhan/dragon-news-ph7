import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { createBrowserRouter } from 'react-router'
import Layout from './Layout.jsx'
import { RouterProvider } from 'react-router/dom'
import Home from './components/Home/Home.jsx'
const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout></Layout>,
    children: [
      {
        path:'/',
        element:<Home></Home>
      }
    ]
  }
])
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router}>
      <Layout></Layout>
    </RouterProvider> 

  </StrictMode>,
)
