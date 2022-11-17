import React from 'react';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
// components
//import Logo from './Logo';
import OptionsTab from './OptionsTab';
import {
  flexBetweenCenter,
  dFlex,
  displayOnDesktop,
} from '../../themes/commonStyles';
import ProfileSettings from './ProfileSettings';
import MobileSearch from './MobileSearch';
import SearchBar from '../Home/SearchBar';

const Navbar= () => {
  return (
    <Box
      sx={{
        ...dFlex,
        minHeight: 70,
        borderBottom: '1px solid #000',
        backgroundColor: '#fff',
      }}
    >
      <Container maxWidth="xl">
        <Box
          sx={{
            ...flexBetweenCenter,
            minHeight: 10,
            px: 4,
          }}
        >
          <Box sx={displayOnDesktop}>
            <OptionsTab />
          </Box>
          <Box sx={displayOnDesktop}>
            <ProfileSettings />
          </Box>
          <Box sx={{ display: { xs: 'flex', md: 'none' } }}>
            <SearchBar/>
          </Box>
          <Box sx={{ display: { xs: 'flex', md: 'none' } }}>
            <MobileSearch />
          </Box>
        </Box>
      </Container>
    </Box>
  );
};

export default Navbar;