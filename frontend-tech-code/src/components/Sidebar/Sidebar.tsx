import { NavLink } from 'react-router-dom'
import { Container } from './styles'

const Sidebar = () => {
  return (
    <Container>
      <nav>
        <ul>
          <li>
            <NavLink to="/">
              <span>Listar Produtos</span>
            </NavLink>
          </li>
          <li>
            <NavLink to="pizzas">
              <span>Cadastro</span>
            </NavLink>
          </li>
          <li>
            <NavLink to="drinks">
              <span>Modificar Produto</span>
            </NavLink>
          </li>
          <li>
            <NavLink to="ice-creams">
              <span>Remover Produto</span>
            </NavLink>
          </li>
        </ul>
      </nav>
    </Container>
  )
}

export default Sidebar