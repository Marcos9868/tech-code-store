import { Box, Button, Input } from '@chakra-ui/react';
import DButton from './Button/Button';

const Card = () => {
  return (
    <Box
      width='300px'
      height='200px'
      bg='#323232'
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
      <Input 
        type='email'
        placeholder='Digite seu email'
        border='none'
        outline='none'
        size='sm'
        variant='flushed'
        width='200px'
      />
      <Input
        type='password'
        placeholder='Digite sua senha'
        border='none'
        outline='none'
        size='sm'
        variant='flushed'
        width='200px'
      />
      <DButton />
    </Box>
  )
}

export default Card