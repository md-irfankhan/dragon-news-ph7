import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { createBrowserRouter, Navigate } from 'react-router'
import Layout from './Layout.jsx'
import { RouterProvider } from 'react-router/dom'
import Home from './components/Home/Home.jsx'
import News from './components/News/News.jsx'
import AuthLayout from './pages/AuthLayout.jsx'
import Login from './components/Login/Login.jsx'
import SignUp from './components/SignUp/SignUp.jsx'
import AuthProvider from './AuthProvider/AuthProvider.jsx'

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home></Home>,
    children: [
      {
        path: "",
        element: <Navigate to={'/category/01'}></Navigate>
      },

      {
        path: '/category/:id',
        loader: ({ params }) => fetch(`https://openapi.programming-hero.com/api/news/category/${params.id}`),
        element: <News></News>
      }
    ]
  }, {
    path: '/auth',
    element: <AuthLayout></AuthLayout>,
    children: [
      {
        path: '/auth/login',
        element: <Login></Login>
      },
      {
        path: '/auth/signup',
        element: <SignUp></SignUp>
      }
    ]
  }
])
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <AuthProvider>
      <RouterProvider router={router}>
        <Layout></Layout>
      </RouterProvider>
    </AuthProvider>




  </StrictMode>,
)
