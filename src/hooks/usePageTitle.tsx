import { useEffect } from 'react'
import { useLocation } from 'react-router'

export const usePageTitle = () => {
  const location = useLocation()

  useEffect(() => {
    console.log('Path: ', location.pathname)
    if (location.pathname == '/') {
      document.title = 'Home'
    } else {
      const titleIndex = location.pathname.lastIndexOf('/') + 1
      const titleRaw = location.pathname.slice(titleIndex)
      const titleStartLetter = titleRaw.slice(0, 1).toUpperCase()
      const title = titleStartLetter + titleRaw.slice(1)
      document.title = title
    }
  }, [location])
}
