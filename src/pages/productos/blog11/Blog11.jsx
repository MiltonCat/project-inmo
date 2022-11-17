import React from "react";
import  "../blog.css";
import { Link } from "react-router-dom";
import Foto from "../../../assets/hori.png";
import img1 from "../../../../public/Imgs12/foto8.jpeg";
import img2 from "../../../../public/Imgs12/foto2.jpeg";
import img3 from "../../../../public/Imgs12/foto1.jpeg";
import img4 from "../../../../public/Imgs12/foto3.jpeg";
import img5 from "../../../../public/Imgs12/foto7.jpeg";
import img6 from "../../../../public/Imgs12/foto9.jpeg";
import HouseIcon from '@mui/icons-material/House';
import InstagramIcon from '@mui/icons-material/Instagram';
import Navbar  from "../../../components/navbar/Navbar";


import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import {dataSlider} from "./data.js";
//import Detail from "./Detail";

const Blog11= () => {
  const settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 1
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };
  return (
    <div>
    <>
      <Link to="/">
        <Navbar/>
      </Link>
    </>
    <div className="container-desc">
        <h2>Hermosa casa en barrio Belwell.</h2>
      <div className="container-img">
      <div className="box-img">
        <a href="#">
        <figure>
              <img src={img1} alt="foto1" />
          </figure>
        </a>
        </div>
        <div className="box-img">
          <a href="#">
          <figure>
              <img src={img2}alt="foto" />
          </figure>
          </a>
        </div>
        <div className="box-img">
          <a href="#">
          <figure>
              <img src={img3}alt="foto" />
          </figure>
          </a>
        </div>
        <div className="box-img">
          <a href="#">
          <figure>
              <img src={img4}alt="foto" />
          </figure>
          </a>
        </div>
        <div className="box-img">
        <a href="#">
        <figure>
              <img src={img5}alt="foto"/>
          </figure>
        </a>
        </div>
        <div className="box-img">
        <a href="#">
        <figure>
              <img src={img6}alt="foto"/>
          </figure>
        </a>
        </div>
        </div>
        </div>
        <div className="barra">
          <div className="barra__left">
             <ul className="barra__list">
              <Link to="/casa">
              <img src={Foto} alt="icon" />
              </Link>
            </ul>
          </div>
          <div className="barra__right">   
           <h1>$140.000<span className="barra__subtitulo">/USD</span></h1>
           <a href="mailto:catalanmilton826@gmail.com">
              <h2>Consultános</h2>
            </a>
          </div>
        </div>
         <div className="container-100">
          <div id="descripcion">
            <span>Sobre la calle Goñi a 3,5 cuadras de la ruta 40, principal Ruta de acceso a San Martín de los Andes, a 2 cuadras del Callejón de Bello; y a media cuadra de la Plaza y el Centro Vecinal "El Molino" en el Barrio residencial La Cascada, se encuentra el Complejo Del Valle Patagonia II. Construcción tradicional de primerísima calidad y excelentes detalles de terminación.</span>
          </div>
          <div id="columna1">
          <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3050.316525345705!2d-71.29899228488243!3d-40.1352325781619!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x96110c1011467457%3A0x57e6b0cec4409502!2sLuis%20Go%C3%B1i%2C%20San%20Martin%20de%20los%20Andes%2C%20Neuqu%C3%A9n!5e0!3m2!1ses!2sar!4v1656885709429!5m2!1ses!2sar" width="885" height="500" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
          </div>
          <div id="columna2">
            <form className="form">
              <h2 className="form__title"> $140.000 /USD</h2>
              <HouseIcon className="icon"/><span className="text__1"> Departamento en complejo/ 2 habitaciones y un playroom /estacionamiento / a estrenar.</span>
              <div className="form__contacto">
                <a href="mailto:catalanmilton@gmail.com"><p className="contact">Consultanos!!</p></a>
              </div>
              <div className="texto">Todas las propiedades estan revisadas y sus fotos e información son reales.
              </div>
              <a href="https://www.instagram.com/catalan_propiedades/">
                <InstagramIcon className="icon1"/>
                  <span className="text__2"> Seguinos en Instagram</span>
                  </a>
            </form>
          </div>
          </div>
           </div>
  );
};
export default Blog11;
