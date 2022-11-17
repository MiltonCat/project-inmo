import React from 'react';
import './styles.css';
import Link from '@mui/material/Link';

const ListItem = ({
  item: { coverSrc, title, price, deliveryFee, serviceTime, rating, href },
}) => (
  <div className='listItem-wrap'>
    <img src={coverSrc} alt='' />
    <header>
      <h4>{title}</h4>
      <span>🌟{rating}</span>
    </header>
    <footer>
      <p>
        <b>{serviceTime}</b> <span>{deliveryFee}</span>
      </p>
      <p>
        <b>${price}</b>
      </p>
      <Link backgroundColor="black" borderRadius="10px" color="black"><a href={href}>¡Vamos!</a></Link>
      
    </footer>
  </div>
);

export default ListItem;