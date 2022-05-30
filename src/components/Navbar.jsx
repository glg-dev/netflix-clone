import React, { useEffect, useState } from 'react'
import Search from './Search'

function Navbar() {

  const [navBlack, setNavBlack] = useState(false)
  const [isExpanded, setIsExpanded] = useState(false)

  const navTransition = () => {
    window.scrollY > 100 ? setNavBlack(true) : setNavBlack(false)
  }

  useState(() => {
    window.addEventListener('scroll', navTransition)
    return () => window.removeEventListener('scroll', navTransition)
  })

  return (
    <div className={`navbar ${navBlack ? "navbar--black" : ""}`}>
      <img src="./img/logo.png" className='navbar__logo' alt="Netflix" />
      <button className="navbar__burger" onClick={() => setIsExpanded(!isExpanded)}>
        Parcourir
        <i className={`fas fa-sort-down ${isExpanded ? "up" : ""}`}></i>
      </button>
      <nav className={`navbar__links ${isExpanded ? " show" : ""}`}>
        <a href="/" className="navbar__link navActive">Accueil</a>
        <a href="#" className="navbar__link">Séries</a>
        <a href="#" className="navbar__link">Films</a>
        <a href="#" className="navbar__link">Nouveautés les plus regardées</a>
        <a href="/" className="navbar__link">Ma liste</a>
      </nav>
      <div className="navbar__actions">
        <Search />
        <a href="#" className="navbar__action">DIRECT</a>
        <a href="#" className="navbar__action">
          <i className="fa-solid fa-bell"></i>
        </a>
        <a href="#" className="navbar__action">
          <img src="./img/avatar.png" alt="Avatar" className='navbar__avatar' />
        </a>

      </div>
    </div>
  )
}

export default Navbar