import { Button } from '@chakra-ui/react'

const DButton = ({ children }: any) => {
  return (
    <Button
      loadingText='Loading'
      colorScheme='darkmagenta'
      variant='outline'
      spinnerPlacement='start'
      _hover={{ bg: '#f2f2f2', color: 'black'}}
    >
      { children }
    </Button>
  )
}

export default DButton