import { Button } from '@chakra-ui/react'

const DButton = () => {
  return (
    <Button
      loadingText='Loading'
      colorScheme='darkmagenta'
      variant='outline'
      spinnerPlacement='start'
      _hover={{ bg: '#f2f2f2', color: 'black'}}
    >
      Entrar
    </Button>
  )
}

export default DButton