import { useContext, useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import { GlobalPlanetContext } from '../context/GlobalContext';
import axios from 'axios';

export const Planet = () => {

  const planetData = useContext(GlobalPlanetContext)
  let planetPath = useLocation().pathname.slice(1)
  const [planet, setNewPlanet] = useState({ name: '', image: '', imageCollection: []})

  useEffect(() => {
    // const image = getPlanetData(planetPath)

    const getPlanetData = async (planetName: string) => {
      
      let planetDetails = planetData.find(el => el.name === planetName)
      let mainImage = await axios.get(`https://images-api.nasa.gov/asset/${planetDetails?.mainImageId}`).then((res) => {
        return res.data.collection.items[0].href
      })
      console.log(mainImage)
      let newPlanet = {...planet}
      newPlanet.name = planetPath
      newPlanet.image = mainImage ? mainImage : ''
      setNewPlanet(newPlanet)
    }

    getPlanetData(planetPath)    
  }, [planetPath])
  

  return (
    <div>
      <h1 className="capitalize">{planet.name}</h1>
      <img src={planet?.image} alt="Planet" />
    </div>
    
  )
}