import { Outlet } from "react-router-dom"
import Header from "./Header"
import Footer from "./Footer"

const Layout = () => {
  return (
      <div className="w-full min-h-screen bg-primary relative pb-16">
          <Header />
          <Outlet />
          <Footer />
    </div>
  )
}

export default Layout