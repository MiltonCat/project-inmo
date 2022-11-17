import React from 'react';
import Paper from '@mui/material/Paper';
import InputBase from '@mui/material/InputBase';
import IconButton from '@mui/material/IconButton';
import { FaSearch } from 'react-icons/fa';
import { VscSettings } from 'react-icons/vsc';
import Lineas from '../../assets/lineas-feed.png';
import './MobileSearch.css';

const MobileSearch = () => {
  return (
    <div className='line'>
      <img src={Lineas} alt="lineas" />
    </div>
  );
};

export default MobileSearch;