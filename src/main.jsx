import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { createBrowserRouter, Navigate } from 'react-router'
import Layout from './Layout.jsx'
import { RouterProvider } from 'react-router/dom'
import Home from './components/Home/Home.jsx'
import News from './components/News/News.jsx'
const router = createBrowserRouter([
  {
    path: "/",
    element: <Home></Home>,
    children: [
      {
        path:"",
        element:<Navigate to={'/category/01'}></Navigate>
      },
     
      {
        path:'/category/:id',
        loader:({params})=>fetch(`https://openapi.programming-hero.com/api/news/category/${params.id}`),
        element:<News></News>
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
