import React from 'react'
import { Link } from 'react-router-dom'
import './Navbar.css'
import Sidebar from './Sidebar'

function Navbar() {
  const [sidebar, setSidebar] = React.useState(false)
  const showSidebar = () => setSidebar(!sidebar)
  return (
    <>
      <div className='navbar'>
        <Link to={'#'} className='menu-bar'>
          <i class="bi bi-hand-index" onClick={showSidebar}></i>
        </Link>
      </div>
      <nav className={sidebar ? 'nav-menu active' : 'nav-menu'}>
        <ul className='nav-menu-item' onClick={showSidebar}>
          <li className='navbar-toggle'>
            <Link to={'#'} className='menu-bar'>
              <i class="bi bi-x-square" ></i>
            </Link>
          </li>
          {Sidebar.map((elem, index) => {
            return (
              <li key={index} className={elem.cName}>
                <Link to={elem.path}>{elem.icon}
                  <span>{elem.title}</span>
                </Link>
              </li>
            )
          })}
        </ul>
      </nav>
    </>
  )
}

export default Navbar
