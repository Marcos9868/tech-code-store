import Footer from '../../components/Footer/Footer'
import Header from '../../components/Header/Header'
import Layout from '../../components/Layout/Layout'
import MenuBar from '../../components/MenuBar/MenuBar'
import { Container } from './styles'

const Home = () => {
  return (
    <Container>
      <Header />
      <MenuBar />
      <Layout />
      <Footer />
    </Container>
  )
}

export default Home