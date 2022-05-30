import React from 'react'
import { Link } from 'react-router-dom'


function QuickView({ bannerStyle, movie, popup }) {
  return (
    <div className='quickView'>
      <div className="quickView__banner" style={bannerStyle}>
        <div className="quickView__content">
          <h3 className="quickView__title">{movie?.title}</h3>
          <Link to={`/video/${movie?.id}`}>
            <button className="play-button">
              <i className="fas fa-play"></i>
              <span>Lecture</span>
            </button>
          </Link>

          <h4 className='release'>Date de sortie: {movie?.release_date || movie?.first_air_date}</h4>
          <h4>Type: {movie?.media_type === "tv" ? "Série" : "Film" }</h4>
          <p className='description'>Synopsis : {movie?.overview}</p>
          <p className="vote-average">Note : {movie?.vote_average} / 10</p>
        </div>
        <button className="quickView__close" onClick={popup}>
          <i className="fa-regular fa-circle-xmark"></i>
        </button>
      </div>
    </div>
  )
}

export default QuickView