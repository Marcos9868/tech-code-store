import React from 'react'
import { FiPlus } from 'react-icons/fi'
import { currencyFormat } from '../../helpers/currency'
import IProductsProps from '../../interfaces/IProductsProps'
import { Box } from './styles'

const Products = ({ products }: IProductsProps) => {
  return (
    <Box>
      {!products.length
        ? <p>Loading...</p>
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
  )
}

export default Products