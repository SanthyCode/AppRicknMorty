import React from 'react'
import useFetch from '../../hooks/useFetch'

const CardResidents = ({ url }) => {

  const card = useFetch(url)
  return (
    <div>
      <div className='card-icon'>
      <header>
        <img src={card?.image} alt="card?.image" />
        <div className='circle'>
          <p className='status'>{card?.status == 'Alive' ? `🟢 ${card?.status} `: 
          `🔴 ${card?.status}`}</p>
        </div>
      </header>
      <div>
        <h2>{card?.name}</h2>
        <hr />
        <ul>
          <li><span>Species: </span>{card?.species  == 'unknown' ? 'Desconocido' : card?.species}</li>
          <li><span>Origin: </span>{card?.origin.name == 'unknown' ? 'Desconocido' : card?.origin.name  == 'unknown' ? 'Desconocido' : card?.origin.name}</li>
          <li><span>Episodes: </span>{card?.episode.length  == 'unknown' ? 'Desconocido' : card?.episode.length}</li>
        </ul>
      </div>
      </div>
    </div>
  )
}

export default CardResidents