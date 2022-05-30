import React, { useState } from 'react'

function Footer() {
  const [showCode, setShowCode] = useState(false)

  const footerLinks = ["Audio et sous-titres", "Audiodescription", "Centre d'aide", "Cartes cadeaux", "Presse", "Relations Investisseurs", "Recrutement", "Conditions d'utilisation", "Confidentialité", "Informations légales", "Préférences de cookies", "Mentions légales", "Nous contacter"]

  return (
    <footer>
      <div className="container">
        <div className="social-links">
          <a href="https://www.facebook.com/netflixfrance" target='_blank' rel="noopener norefferer noreferrer">
            <i className="fa-brands fa-facebook-f"></i>
          </a>
          <a href="https://www.instagram.com/NetflixFR" target='_blank' rel="noopener norefferer noreferrer">
            <i className="fa-brands fa-instagram"></i>
          </a>
          <a href="https://twitter.com/NetflixFR" target='_blank' rel="noopener norefferer noreferrer">
            <i className="fa-brands fa-twitter"></i>
          </a>
          <a href="https://www.youtube.com/user/netflixfrance" target='_blank' rel="noopener norefferer noreferrer">
            <i className="fa-brands fa-youtube"></i>
          </a>

        </div>
        <ul className="footer-links">
          {
            footerLinks.map((link, index) => {
              return (
                <li key={index}>
                  <a href="#">{link}</a>
                </li>
              )
            })
          }
        </ul>
        <button onClick={() => setShowCode(!showCode)}>
          {
            showCode ? (
              <span>42</span>
              ) : (
                <span>Code de service</span>
                )
              }
        </button>
        <p className='copyright'>GLG - 2022. All rights reserved.</p>
      </div>
    </footer>
  )
}

export default Footer