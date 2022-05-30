import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import requests from '../data/requests'
import QuickView from './QuickView'

function Banner() {

  const [movie, setMovie] = useState([])
  const [popup, setPopup] = useState(false)
  const [isLoading, setIsLoading] = useState(true)

  function handlePopup() {
    setPopup(!popup)
  }

  useEffect(() => {
    async function fetchData() {
      setIsLoading(true)
      const request = await axios.get(requests.fetchTrending)
      setMovie(
        request.data.results[
          Math.floor(Math.random() * request.data.results.length - 1)
        ]
      )
      setIsLoading(false)
    }
    fetchData();
  }, [])

  function truncateText(string, n) {
    return string?.substr(0, n - 1) + (string?.length > n ? '...' : '')
  }

  const bannerStyle = {
    backgroundImage: `url("https://image.tmdb.org/t/p/original/${movie?.backdrop_path}")`,
    backgroundSize: "cover",
    backgroundPosition: "center center",
  }

  console.log(movie);

  return (
    <header className='banner' style={bannerStyle}>
      {isLoading && movie.length > 0 ? (
        <div className='banner__loading'>Chargement des données...</div>
      ) : (
        <div>
          <div className="banner__content">
          <h1 className="banner__title">
            {movie?.title || movie?.original_title || movie?.name || movie?.original_name}
          </h1>
          <p className="banner__description">
            {truncateText(movie?.overview, 200) || 'Aucune description disponible'}
          </p>
          <div className="banner__buttons">
            <Link to={`/video/${movie?.id}`}>
              <button className="banner__button banner__button--play play-button">
                <i className="fas fa-play"></i>
                <span>Lecture</span>
              </button>
            </Link>
            <button className="banner__button banner__button--infos" onClick={handlePopup}>
              <i className="fas fa-circle-info"></i>
              <span>Plus d'infos</span>
            </button>
          </div>
        </div>
        {popup && <QuickView bannerStyle={bannerStyle} movie={movie} popup={handlePopup} />}
      </div>
      )}
    </header>
  )
}

export default Banner