import axios from 'axios'
import React, { useEffect, useState } from 'react'
import requests from '../data/requests'
import { Link } from 'react-router-dom'

function Search() {

  const [display, setDisplay] = useState(false)
  const [inputValue, setInputValue] = useState('')
  const [results, setResults] = useState([])


  async function handleChange(e) {
    setInputValue(e.target.value)
    if (inputValue.length > 0) {
      const request = await axios.get(requests.searchMovies + inputValue)
      setResults(request.data.results)
    } else {
      setResults([])
    }
    console.log(results);
  }

  function handleReset() {
    setInputValue('')
    setResults([])
    setDisplay(false)
  }

  return (
    <div className='search'>
      <form action="">
        <i className="fas fa-magnifying-glass" onClick={() => setDisplay(!display)}></i>
        <div className={`input-container ${display ? "displayed" : "hidden"} `}>
          <input type="text" placeholder="Entrez le titre d'un film" onChange={(e) => handleChange(e)} />
          <i className="fa-regular fa-circle-xmark" onClick={handleReset}></i>
        </div>
            
      </form>
      <div className="container">
        {
          results.length > 0 && (
            <div className='search__results'>
              {
                results.map(movie => (
                  <div key={movie?.id} className="movie-container">
                    <Link to={`/video/${movie?.id}`}>
                      <div className="img-container">
                        <img 
                          src={`https://image.tmdb.org/t/p/original/${movie?.poster_path}`}
                          className='row__image' 
                          alt={movie?.title || movie?.original_title || movie?.name || movie?.original_name} 
                          />
                      </div>
                    </Link>
                    <h3>{movie?.title}</h3>
                  </div>
                ))
              }

            </div>
          )
        }
      </div>

    </div>
  )
}

export default Search