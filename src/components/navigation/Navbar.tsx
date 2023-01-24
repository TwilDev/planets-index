import { Link } from 'react-router-dom'
// import { PlanetForm } from '../../context/GlobalContext'

// interface Planet {
//   planet: string,
//   setPlanet: (planet: PlanetForm) => void,
// }

// const Navbar = (props: Planet) => {
const Navbar = () => {
  return (
    <nav className="flex items-center justify-center">
      <Link to="/mercury">Mercury</Link>
      <Link to="/venus">Venus</Link>
      <Link to="/earth">Earth</Link>
      <Link to="/mars">Mars</Link>
      <Link to="/jupiter">Jupiter</Link>
      <Link to="/saturn">Saturn</Link>
      <Link to="/uranus">Uranus</Link>
      <Link to="/neptune">Neptune</Link>
    </nav>
  )
}

export default Navbar