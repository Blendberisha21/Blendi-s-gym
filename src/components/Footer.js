import React from 'react'
import { Box,Stack,Typography } from '@mui/material'
import Logo from '../assets/images/Logo-1.png';

const Footer = () => {
  return (
    <Box my="20px" bgcolor="#fff3f4 ">
      <Stack gap="40px" alignItems='center' px="40px" pt="24px">
     <img src={Logo} alt="logo" width="100px" height="110px"/>
     <Typography variant='h5' pb="40px" mt="10px">
     Sweat, Smile and Repeat
     </Typography>
      </Stack>
    </Box>
  )
}

export default Footer