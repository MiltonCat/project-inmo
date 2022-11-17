import React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
// react icons
import { flexCenter } from '../../themes/commonStyles';
import Icons from '../../assets/hori.png'

const Logo = () => {
  return (
    <Box sx={flexCenter}>
      <img src={Icons} width="170" height="50" />
      <Typography
        sx={{
          ml: 1,
          color: (theme) => theme.palette.secondary.main,
          fontSize: '20px',
          fontWeight: 'bold',
        }}
        component="h3"
      >
      </Typography>
    </Box>
  );
};

export default Logo;