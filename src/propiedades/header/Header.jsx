import { Link } from "react-router-dom";
import "./header.css";
import Foto from "./../../assets/hori.png";
import Iso from "./../../assets/iso1.png";
import { useNavigate } from "react-router-dom";
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';

const Header = () => {
   const navigate = useNavigate()
   const handleClick = () => {
    navigate('/')
  }
  return (
  <div className="header">
        <button onClick={handleClick}>
           <img src={Foto} className="imagen" />
          </button>
        <div className="header__icon">
        </div>
        <div className="header__title"> 
       <Link to="/Sale">
       Vendé tu propiedad
         <img src={Iso} alt="icon" className="icono"/>
       </Link> 
        </div>
  </div>
  );
};

export default Header;