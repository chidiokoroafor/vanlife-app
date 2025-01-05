import { Link, NavLink } from 'react-router-dom'

const Header = () => {
  return (
     <header className="py-8">
        <nav className="w-[90%] mx-auto flex justify-between">
            <Link to={"/"} className="font-bold text-3xl text-Text">#VANLIFE</Link>
            <ul className="flex gap-8 text-Text2 text-lg">
                <li>
                    <NavLink className={({isActive})=>isActive?'font-bold underline text-Text':'hover:font-bold hover:underline'} to="host">Host</NavLink>
                </li>
                <li>
                    <NavLink className={({isActive})=>isActive?'font-bold underline text-Text':'hover:font-bold hover:underline'} to="about">About</NavLink>
                </li>
                <li>
                    <NavLink className={({isActive})=>isActive?'font-bold underline text-Text':'hover:font-bold hover:underline'} to="vans">Vans</NavLink>
                </li>
            </ul>
        </nav>
        </header>
  )
}

export default Header