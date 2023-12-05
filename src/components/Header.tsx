import React from 'react'
import { Link } from 'react-router-dom'
import { DATABASE_TRACKS_ROUTE, LIKED_TRACKS_ROUTE } from '../const/routes'

function Header() {
  return (
    <header className='header'>
        <div className="header__logo">
          Ghost Trends  
        </div>
        <nav className="header__links">
            <Link to={DATABASE_TRACKS_ROUTE} className='header__links-database'>Tracks Database</Link>
            <Link to={LIKED_TRACKS_ROUTE} className='header__links-liked'>Liked Tracks</Link>
        </nav>
    </header>
  )
}

export default Header