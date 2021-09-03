import React, { useState, useEffect } from 'react'
import Loading from './Loading'
import Races from './Races'

const url = 'http://localhost:8000/api/races'

function App() {

  const[loading, setLoading] = useState(true)
  const[races, setRaces] = useState([])

  const removeRace = (id) => {
    const newRace = races.filter((race) => race.id !== id)
    setRaces(newRace)
  }

  const fetchRaces = async () => {
    setLoading(true)
    try {
      const response = await fetch(url)
      const races = await response.json()
      setLoading(false)
      setRaces(races)
    } catch(error) {
      setLoading(false)
      console.log(error)
    }

  }

  useEffect(()=> {
      fetchRaces()
  }, [])
  
  if(loading) {
    return (
      <main>
        <Loading />
      </main>
    )
  }
  if(races.length === 0) {
    return (
      <main>
        <div className='title'>
          <h2>no races left</h2>
          <button className='btn' onClick={fetchRaces}>refresh</button>
        </div>
      </main>
    )
  }  
  return (
    <main>
      <Races races={races} removeRacePassing1={removeRace} />
    </main>
  )  
}

export default App;