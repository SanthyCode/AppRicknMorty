import axios from 'axios'
import { useEffect } from 'react'
import { useState } from 'react'
import './App.css'
import CardResidents from './assets/components/CardResidents'
import LocationInfo from './assets/components/LocationInfo'

function App() {

  const [location, setLocation] = useState()
  const [search, setSearch] = useState('')


  useEffect(() => {
    let randomLocation
    if (search === '') {
      randomLocation = Math.ceil(Math.random() * (126 - 1) + 1)
    } else {
      randomLocation = search
    }

    const URL = (`https://rickandmortyapi.com/api/location/${randomLocation}`)

    axios.get(URL)
      .then(res => setLocation(res.data))
      .catch(err => console.log(err))
  }, [search])

console.log(location)

  const submit = e => {
    e.preventDefault()
    setSearch(e.target.search.value)
  }

  return (
    <div className="App">
      <img src={'https://static.posters.cz/image/hp/66133.jpg'} alt="" />
      <h1>Rick and Morty Wiki</h1>
      <form onSubmit={submit} className='form'>
        <input id='search' type="text" placeholder='enter a digit between 1 - 126' />
        <button>Search</button>
      </form>
      <LocationInfo location={location} />
      <h2>Residents</h2>
      <div className='card'>
        {
          location?.residents.map(url => (
            <CardResidents
              key={url}
              url={url}
            />
          ))
        }
      </div>
    </div>
  )
}

export default App
