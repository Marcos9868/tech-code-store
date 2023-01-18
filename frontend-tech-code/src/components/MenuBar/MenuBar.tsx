import { NavLink } from 'react-router-dom'
import { Container } from './styles'

const MenuBar = () => {
  return (
    <Container>
      <nav>
        <ul>
          <li>
            <NavLink to="/storage/list">
              <span>Listar Produtos</span>
            </NavLink>
          </li>
          <li>
            <NavLink to="/storage/create">
              <span>Cadastro</span>
            </NavLink>
          </li>
          <li>
            <NavLink to="/storage/update">
              <span>Modificar Produto</span>
            </NavLink>
          </li>
          <li>
            <NavLink to="/storage/remove">
              <span>Remover Produto</span>
            </NavLink>
          </li>
        </ul>
      </nav>
    </Container>
  )
}

export default MenuBar;