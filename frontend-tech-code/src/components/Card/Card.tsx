import { Box } from '@chakra-ui/react';

const Card = ({ children }: any) => {
  return (
    <Box
      width='350px'
      maxHeight='330px'
      bg='#181818'
      borderRadius='25px'
      padding='25px'
      display='flex'
      flexDirection='column'
      alignItems='center'
      justifyContent='center'
      color='#f5f5f5'
      gap='15px'
      boxShadow='3px 3px 10px 3px black'
    >
      { children }
    </Box>
  )
}

export default Card