import { Outlet } from 'react-router-dom'

import NavBar from '../navbar/NavBar'

const MainLayout = () => {
  return (
    <div className='main-layout-container'>
      <NavBar />
      <Outlet />
    </div>
  )
}

export default MainLayout