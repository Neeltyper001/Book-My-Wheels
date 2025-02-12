import Footer from '../components/footer/Footer.jsx'
import Header from '../components/header/Header'
import { Outlet } from 'react-router-dom'

const Base = () => {

  return (
    <>
        <Header/>
        <Outlet/>  
        <Footer />  
    </>
  )
}

export default Base