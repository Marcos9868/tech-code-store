import { NavLink } from 'react-router-dom'
import { Container } from './styles'

const MenuBar = () => {
  return (
    <Container>
      <nav>
        <ul>
          <li>
            <NavLink to="/">
              <span>Home</span>
            </NavLink>
          </li>
          <li>
            <NavLink to="/video">
              <span>Vídeo</span>
            </NavLink>
          </li>
          <li>
            <NavLink to="/monitors">
              <span>Monitores</span>
            </NavLink>
          </li>
          <li>
            <NavLink to="/keyboard-mouse">
              <span>Mouse/Teclado</span>
            </NavLink>
          </li>
          <li>
            <NavLink to="/headsets">
              <span>Headsets</span>
            </NavLink>
          </li>
        </ul>
      </nav>
    </Container>
  )
}

export default MenuBar;