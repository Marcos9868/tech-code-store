import { Container } from './styles';
import logoImg from '../../assets/tech-code-final.png';

const Header = () => {
  return (
    <Container>
      <img src={logoImg}/>
      <button><a href='/storage'>Estoque</a></button>
    </Container>
  )
}

export default Header