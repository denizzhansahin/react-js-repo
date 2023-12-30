import React from 'react'
import { useState } from 'react'
import './playBtn.css'
import Modal from './Modal'

function PlayBtn({movie}) {
  const [modal,setModal] = useState(false);
  const toggModal = () => {
    setModal(!modal)
  }
  return (
    <>
    <div className={`trailer d-flex align-items-center justify-content-center ${movie.active ? 'active': undefined}`}>
    <a href='#' className='playBtn' onClick={toggModal}>
      <ion-icon name="play-outline"></ion-icon>
    </a>
    <p>Watch Trailer</p>
  </div>
  {movie.active && (<Modal movie={movie} status={modal} toggModal={toggModal}/>)}
    </>
  )
}

export default PlayBtn