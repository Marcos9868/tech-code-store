import { Input } from '@chakra-ui/react'
import React from 'react'
import DButton from '../../Card/Button/Button'
import Card from '../../Card/Card'
import { Container } from './styles'

const Remove = () => {
  return (
    <Container>
      <Card>
        <Input
          type='text'
          placeholder='Nome do produto'
          border='none'
          outline='none'
          size='sm'
          variant='flushed'
          width='200px'
        />
        <DButton>Remover Produto</DButton>
      </Card>
    </Container>
  )
}

export default Remove