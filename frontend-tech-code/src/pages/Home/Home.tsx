import Footer from '../../components/Footer/Footer'
import Header from '../../components/Header/Header'
import Layout from '../../components/Layout/Layout'
import { Container } from './styles'

const Home = () => {
  return (
    <Container>
      <Header />
      <Layout />
      <Footer />
    </Container>
  )
}

export default Home