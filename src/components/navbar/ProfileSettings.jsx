import React from 'react';
import Box from '@mui/material/Box';
import Link from '@mui/material/Link';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
// react icons
import { BsGlobe } from 'react-icons/bs';
import { AiOutlineMenu } from 'react-icons/ai';
import { FaRegUserCircle } from 'react-icons/fa';
import { flexCenter } from '../../themes/commonStyles';



const ProfileSettings = () => {
  return (
    <Box sx={flexCenter}>
      <Link href="/Contacto">Contactanos</Link>
      <Stack>
        <Button>
          <BsGlobe size={24} />
        </Button>
      
      </Stack>
    </Box>
  );
};

export default ProfileSettings;