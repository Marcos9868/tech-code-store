import Card from '../../components/Card/Card'
import logoImg from '../../assets/tech-code-final.png';
import { Container } from './styles';

const Login = () => {
  return (
    <Container>
      <img src={logoImg}/>
      <Card />
    </Container>
  )
}

export default Login;