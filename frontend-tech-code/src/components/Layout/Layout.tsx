import { Box, Container } from './styles'
import { FiPlus } from 'react-icons/fi';
import { currencyFormat } from '../../helpers/currency';
import { useEffect, useState } from 'react';
// import axios from 'axios';
// import IProducts from '../../interfaces/IProducts';

const Layout = () => {
  // const [ products, setProducts ] = useState<IProducts[]>([]);

  // async function getAllProducts() {
  //   await axios
  //     .get('http://localhost:4000/api/products')
  //     .then((response) => setProducts(response.data))
  //     .catch((err) => console.log(err))
  // }

  // useEffect(() => {
  //   getAllProducts();
  // }, []);

  const products = [
    {
      id: 1,
      name: 'Placa de Vídeo GeForce GTX 1650',
      image: 'https://img.terabyteshop.com.br/produto/p/placa-de-video-gigabyte-geforce-gtx-1650-d6-oc-4gb-gddr6-128bit-gv-n1656oc-4gd_96626.png',
      description: 'GeForce GTX 1650 GDDR6 6GB',
      price: 959,
    },
    {
      id: 2,
      name: 'Monitor Dell 19 Polegadas',
      image: 'https://images-americanas.b2w.io/produtos/7040395115/imagens/monitor-dell-19-5-hd-vga-de-pol-e2020h-dp/7040395123_1_large.jpg',
      description: 'Monitor Dell HDMI 19 Polegadas',
      price: 1600,
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
      name: 'Monitor Pc Top 19 Polegadas',
      image: 'https://images-americanas.b2w.io/produtos/5829198426/imagens/monitor-pctop-led-19-hd-hdmi-vga-60hz-5ms-preto-mlp190hdmi/5829198426_1_large.jpg',
      description: 'Monitor PC Top 19 Polegadas HDMI Led',
      price: 364.33,
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