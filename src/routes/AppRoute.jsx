import { createBrowserRouter, Route } from 'react-router-dom'
import { createRoutesFromElements } from 'react-router-dom'
import { RouterProvider } from 'react-router-dom'
import Base from '../layouts/Base'
import Landing from '../pages/landing/Landing'
import About from '../pages/about/About.jsx'
import Contact from '../pages/contact/Contact'
import PageNotFound from '../pages/NotFound/PageNotFound.jsx'


const AppRoute = () => {

    const router = createBrowserRouter(createRoutesFromElements(
        <>
            <Route path="/" element={<Base />} > 
              <Route index element={<Landing />} />
              <Route path='about' element={<About />} />
              <Route path='contact' element={<Contact />} />        
            </Route> 
            <Route path="*" element={<PageNotFound />} />
        </>
    ))
  return (
    <RouterProvider router={router} />
  )
}

export default AppRoute