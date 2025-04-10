import { Outlet } from 'react-router'
import { Navbar } from '../components/App/Navbar/Navbar'
import { usePageTitle } from '../hooks/usePageTitle'

export const RootLayout = () => {
  usePageTitle()

  return (
    <>
      <Navbar />
      <Outlet />
    </>
  )
}
