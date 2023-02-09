import { createContext } from 'react';

export interface PlanetFormat { [index: number]: { name: string, mainImageId: string } }

export const planetData: {name: string, mainImageId: string }[] = [
  {
    name: 'mercury',
    mainImageId: 'PIA11245'
  },
  {
    name: 'venus',
    mainImageId: 'PIA00123'
  },
  {
    name: 'earth',
    mainImageId: 'PIA00123'
  },
  {
    name: 'mars',
    mainImageId: ''
  },
]

export const GlobalPlanetContext = createContext(planetData)
