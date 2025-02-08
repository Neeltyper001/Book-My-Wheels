import Header from '../components/header/Header'
import { Outlet } from 'react-router-dom'

const Base = () => {

  return (
    <>
        <Header/>
        <Outlet/>    
    </>
  )
}

export default Base