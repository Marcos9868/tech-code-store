import Card from '../../components/Card/Card'
import logoImg from '../../assets/tech-code-final.png';
import { Container } from './styles';
import { Input } from '@chakra-ui/react';
import DButton from '../../components/Card/Button/Button';

const Login = () => {
  return (
    <Container>
      <img src={logoImg} />
      <Card>
        <Input
          type='email'
          placeholder='Digite seu email'
          border='none'
          outline='none'
          size='sm'
          variant='flushed'
          width='200px'
        />
        <Input
          type='password'
          placeholder='Digite sua senha'
          border='none'
          outline='none'
          size='sm'
          variant='flushed'
          width='200px'
        />
        <DButton>Entrar</DButton>
      </Card>
    </Container>
  )
}

export default Login;