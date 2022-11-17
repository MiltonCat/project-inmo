import React from "react";
import milton from "../../assets/Milton.jpeg";
import "./header.css";
import Fondo from "../../assets/imgFondo.jpeg";
import icono from "../../assets/iso1.png";
import Link from '@mui/material/Link';
import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookIcon from '@mui/icons-material/Facebook';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';




const Header = () => { 
  return( 
    <div className="gpt3__header section__padding" id="home">
    <div className="gpt3__header-content">
     <div className="gpt3__header-image">
      <div className="container__fondo">
        <div className="sidebar">
         <div className="profile-card">
          <img src={milton} alt="foto"/>
          <h5>Milton Catalan</h5>
          <ul className="redes">
            <li><Link href="https://www.instagram.com/catalan_propiedades/" target="_blank" rel="noopener noreferrer"><InstagramIcon/><span className="icons"> Siguenos en Instagram</span> </Link></li>

            <li><Link href="https://www.facebook.com/profile.php?id=100077645447671" target="_blank" rel="noopener noreferrer"><FacebookIcon/><span className="icons"> Siguenos en Facebook</span></Link></li>

            <li><Link href="https://api.whatsapp.com/send?phone=5492944301470&text=Hola, ¿te puedo ayudar?" target="_blank" rel="noopener noreferrer"><WhatsAppIcon/><span className="icons"> Siguenos en WhatsApp</span></Link></li>
          </ul>
         </div>
        </div>
        <div className="main">
         <div className="tasks">
          <div className="card__task">
            <div className="content">
              <div className="left">
              <img src={icono} alt="foto"/>
              </div>
              <div className="right">
                <img src={Fondo} alt="foto"/>
              </div>
            </div>
          </div>
         </div>
        </div>  
        </div>
    </div>
  </div>
  </div>
)
};

export default Header;
