import React from 'react'
import { useParams } from 'react-router'
import { NavLink } from 'react-router-dom';

function Video() {

  let { id } = useParams()
  console.log(id);

  return (
    <div className='video'>
      <img src="../img/netflix-logo.png" alt="Netflix" />
      Impossible de charger la vidéo {id}.
      <NavLink to='/'>Retour à l'accueil</NavLink>
    </div>
  )
}

export default Video