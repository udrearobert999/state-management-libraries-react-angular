import NavBar from '@/components/navbar'
import { Outlet } from 'react-router-dom'

const Layout = () => {
  return (
    <main>
      <NavBar />
      <Outlet />
    </main>
  )
}

export default Layout
