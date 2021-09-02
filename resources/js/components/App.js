import React, { useState, useEffect } from 'react'
import Loading from './Loading'
import Races from './Races'

const url = 'http://localhost:8000/api/races'

function App() {

  const[loading, setLoading] = useState(true)
  const[races, setRaces] = useState([])

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
    return (
      <main>
        <Races races={races} />
      </main>
    )  
}

export default App;