import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { createBrowserRouter,RouterProvider } from 'react-router-dom'
import Home from './components/Home.jsx'
import About from './components/About.jsx'
import Blog from './components/Blog.jsx'
import Contact from './components/Contact.jsx'
import NotFound from './components/NotFound.jsx'


const router = createBrowserRouter([
{
path: "/",
element: <Home />,
errorElement: <NotFound />,
},
{
  path: "home",
  element: <Home />,
  },
{
  path: "/about",
  element: <About />,
  },
  {
    path: "/blog",
    element: <Blog />,
    },
    {
      path: "/contact",
      element: <Contact />,
      },
      {
        path: "*",
        element: <NotFound />,
        }
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router}  />
  </StrictMode>,
)
