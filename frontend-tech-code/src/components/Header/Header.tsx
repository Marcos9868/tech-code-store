import { Container } from './styles';
import logoImg from '../../assets/tech-code-final.png';

const Header = () => {
  return (
    <Container>
      <img src={logoImg}/>
      <button>Estoque</button>
    </Container>
  )
}

export default Header