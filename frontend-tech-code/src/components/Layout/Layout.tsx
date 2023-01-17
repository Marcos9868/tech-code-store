import { Box, Container } from './styles'
import { FiPlus } from 'react-icons/fi';
import { currencyFormat } from '../../helpers/currency';

const Layout = () => {
  const products = [
    {
      id: 1,
      name: 'GeForce GTX 770 Ti',
      image: '',
      description: '',
      price: 500,
    },
    {
      id: 1,
      name: 'GeForce GTX 770 Ti',
      image: '',
      description: '',
      price: 500,
    },
    {
      id: 1,
      name: 'GeForce GTX 770 Ti',
      image: '',
      description: '',
      price: 500,
    },
    {
      id: 1,
      name: 'GeForce GTX 770 Ti',
      image: '',
      description: '',
      price: 500,
    },
    {
      id: 1,
      name: 'GeForce GTX 770 Ti',
      image: '',
      description: '',
      price: 500,
    },
    {
      id: 1,
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