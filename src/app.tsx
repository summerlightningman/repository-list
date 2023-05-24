import {FC, useEffect} from 'react'
import './app.scss'
import {Outlet, useLocation, useNavigate} from "react-router-dom";

const App: FC = () => {
  const { pathname } = useLocation()
  const navigate = useNavigate()

  useEffect(() => {
    if (pathname === '/') navigate('/search')
  }, [pathname, navigate])

  return <main className="main">
    <Outlet/>
  </main>
}

export default App
