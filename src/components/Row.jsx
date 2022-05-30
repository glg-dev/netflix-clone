import axios from 'axios'
import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'


function Row({ title, fetchUrl, isPoster }) {

  const [movies, setMovies] = useState([])
  const [showInfos, setShowInfos] = useState(false)

  useEffect(() => {
    async function fetchData() {
      const request = await axios.get(fetchUrl)
      setMovies(request.data.results)
    }
    fetchData();
  }, [])

  return (
    <div className='row'>
      <h2 className="row__title">{title}</h2>
      <div className="row__images">
        {
          movies.map(movie => (
            <div key={movie?.id}>
              <Link to={`/video/${movie?.id}`}>
                <div className="img-container" onMouseEnter={() => setShowInfos(true)} onMouseLeave={() => setShowInfos(false)}>
                  <img 
                    src={ isPoster? `https://image.tmdb.org/t/p/original/${movie?.poster_path}` : `https://image.tmdb.org/t/p/original/${movie?.backdrop_path}`}
                    className='row__image' 
                    alt={movie?.title || movie?.original_title || movie?.name || movie?.original_name} 
                  />
                </div>
              </Link>
              <h3>{movie?.title}</h3>
              {/* {
                showInfos && (
                  <div className="row__info">
                    <h4 className='release'>Date de sortie: {movie?.release_date || movie?.first_air_date}</h4>
                    <h4>Type: {movie?.media_type === "tv" ? "Série" : "Film" }</h4>
                    <p className='description'>Synopsis : {movie?.overview}</p>
                    <p className="vote-average">Note : {movie?.vote_average} / 10</p>
                  </div>
                )
              } */}
            </div>
          ))
        }
      </div>
    </div>
  )
}

export default Row