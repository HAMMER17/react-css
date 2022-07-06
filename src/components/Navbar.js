import React from 'react'
import { Link } from 'react-router-dom'
import './Navbar.css'
import Sidebar from './Sidebar'

function Navbar({ theme }) {
  const [sidebar, setSidebar] = React.useState(false)
  const showSidebar = () => setSidebar(!sidebar)

  const [time, setTime] = React.useState()
  React.useEffect(() => {
    setInterval(() => {
      const data = new Date()
      setTime(data.toLocaleTimeString())
    }, 1000)
  })
  return (
    <>
      <div className='navbar'>
        <Link to={'#'} className='menu-bar'>
          <i className="bi bi-hand-index" onClick={showSidebar}></i>
        </Link>
        <h2 className='time'>{time}</h2>
        <button id='theme' onClick={theme}>theme</button>
      </div>
      <nav className={sidebar ? 'nav-menu active' : 'nav-menu'}>
        <ul className='nav-menu-item' onClick={showSidebar}>
          <li className='navbar-toggle'>
            <Link to={'#'} className='menu-bar'>
              <i className="bi bi-x-square" ></i>
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
