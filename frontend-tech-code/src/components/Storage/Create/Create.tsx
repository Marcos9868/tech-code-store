import { Box, Input } from '@chakra-ui/react'
import DButton from '../../Card/Button/Button'
import Card from '../../Card/Card'
import { Container } from './styles'

const Create = () => {
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
        <Input
          type='text'
          placeholder='Link da imagem do produto'
          border='none'
          outline='none'
          size='sm'
          variant='flushed'
          width='200px'
        />
        <Input
          type='text'
          placeholder='Descrição do Produto(opcional)'
          border='none'
          outline='none'
          size='sm'
          variant='flushed'
          width='200px'
        />
        <Input
          type='text'
          placeholder='Preço do Produto'
          border='none'
          outline='none'
          size='sm'
          variant='flushed'
          width='200px'
        />
        <Input
          type='text'
          placeholder='Quantidade'
          border='none'
          outline='none'
          size='sm'
          variant='flushed'
          width='200px'
        />
        <DButton>Cadastrar Produto</DButton>
      </Card>
    </Container>
  )
}

export default Create