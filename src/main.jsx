import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import Home from './components/page/Home'
import About from './components/page/About'
import Help from './components/page/Help'
import { createBrowserRouter, RouterProvider } from "react-router-dom";

const routes = [
  {
    path: '/',
    element: <App />,
    children: [
      {
        path: '/',
        element: <Home />
      },
      {
        path: '/Sentmail',
        element: <About />
      },
      {
        path: '/Drafts',
        element: <Help />
      }
    ]
  },
];

const router = createBrowserRouter(routes)

createRoot(document.getElementById('root')).render(
  <RouterProvider router={router} />
)
