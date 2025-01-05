import {  NavLink, Outlet } from "react-router-dom"

const HostLayout = () => {
  return (
      <div className="my-8 w-[90%] mx-auto">
           <ul className="flex gap-4 text-Text2 text-lg">
                <li>
                    <NavLink end className={({isActive})=>isActive?'font-bold underline text-Text':'hover:font-bold hover:underline'} to="/host">Dashboard</NavLink>
                </li>
                <li>
                    <NavLink className={({isActive})=>isActive?'font-bold underline text-Text':'hover:font-bold hover:underline'} to="/host/income">Income</NavLink>
                </li>
                <li>
                    <NavLink className={({isActive})=>isActive?'font-bold underline text-Text':'hover:font-bold hover:underline'} to="/host/vans">Vans</NavLink>
                </li>
                <li>
                    <NavLink className={({isActive})=>isActive?'font-bold underline text-Text':'hover:font-bold hover:underline'} to="/host/reviews">Reviews</NavLink>
                </li>
          </ul>
          <Outlet />
    </div>
  )
}

export default HostLayout