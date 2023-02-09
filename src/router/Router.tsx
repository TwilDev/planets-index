import {  useRoutes } from 'react-router-dom'
import { Error404 } from '../pages/404';
import { Dashboard } from '../pages/Dashboard';
import { Planet } from '../pages/Planet';
const RouterWrappper = () => {

  const planetRoutes = useRoutes([
    {
      path: "/planets-index",
      element: <Dashboard />,
    },
    { path: "/mercury", element: <Planet /> },
    { path: "/venus", element: <Planet /> },
    { path: "/earth", element: <Planet /> },
    { path: "/mars", element: <Planet /> },
    { path: "/jupiter", element: <Planet /> },
    { path: "/saturn", element: <Planet /> },
    { path: "/uranus", element: <Planet /> },
    { path: "/neptune", element: <Planet /> },
    { path: "*", element: <Error404 /> }
  ])

  return planetRoutes
}

export default RouterWrappper