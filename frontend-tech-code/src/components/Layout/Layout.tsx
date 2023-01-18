import { Box, Container } from './styles'
import { FiPlus } from 'react-icons/fi';
import { currencyFormat } from '../../helpers/currency';

const Layout = () => {
  const products = [
    {
      id: 1,
      name: 'Placa de Vídeo GeForce GTX 1650',
      image: 'https://img.terabyteshop.com.br/produto/p/placa-de-video-gigabyte-geforce-gtx-1650-d6-oc-4gb-gddr6-128bit-gv-n1656oc-4gd_96626.png',
      description: '',
      price: 959,
    },
    {
      id: 2,
      name: 'GeForce GTX 770 Ti',
      image: '',
      description: '',
      price: 500,
    },
    {
      id: 3,
      name: 'Placa Mãe AM4',
      image: 'https://img.terabyteshop.com.br/produto/p/placa-mae-gigabyte-b450m-gaming-ddr4-am4_71253.jpg',
      description: '',
      price: 639.9,
    },
    {
      id: 4,
      name: 'GeForce GTX 770 Ti',
      image: '',
      description: '',
      price: 500,
    },
    {
      id: 5,
      name: 'GeForce GTX 770 Ti',
      image: '',
      description: '',
      price: 500,
    },
    {
      id: 6,
      name: 'GeForce GTX 770 Ti',
      image: '',
      description: '',
      price: 500,
    },
  ];

  return (
    <Container>
      <Box>
        {!products.length
          ? [1, 2, 3, 4].map((n) => <p>Loading...</p>)
          : products.map((product) => (
            <div key={product.id} className='product'>
              <h2>{product.name}</h2>
              <img src={product.image} alt={product.image} />
              <p>{product.description}</p>
              <div>
                <strong>{currencyFormat(product.price)}</strong>
                <button type='button'>
                  <FiPlus />
                </button>
              </div>
            </div>
          ))}
      </Box>
    </Container>
  )
}

export default Layout