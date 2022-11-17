import React from "react";
import  "./blog.css";
import { Link } from "react-router-dom";
import Foto from "../../../assets/hori.png";
import img1 from "../../../../public/Imgs11/foto8.jpg";
import img2 from "../../../../public/Imgs11/foto2.jpg";
import img3 from "../../../../public/Imgs11/foto1.jpg";
import img4 from "../../../../public/Imgs11/foto3.jpg";
import img5 from "../../../../public/Imgs11/foto7.jpg";
import img6 from "../../../../public/Imgs11/foto9.jpg";
import HouseIcon from '@mui/icons-material/House';
import InstagramIcon from '@mui/icons-material/Instagram';
import Navbar  from "../../../components/navbar/Navbar";

const Blog10= () => {
  return (
    <div>
      <>
        <Link to="/">
          <Navbar/> 
        </Link>
      </>
      <div className="container-desc">
          <h2>Excelente oportunidad para inversion.</h2>
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
             <h1>Inversion<span className="barra__subtitulo">/USD</span></h1>
             <a href="mailto:catalanmilton826@gmail.com">
                <h2>Consultános</h2>
              </a>
            </div>
          </div>
           <div className="container-100">
            <div id="descripcion">
              <span>Este edificio esta proyectado para Abril del 2023 y cuenta con excelentes terminaciones una muy buena oportunidad de inversion para alquiler turistico por su proximidad a los lugares mas visitados en el centro de la ciudad.</span>
            </div>
            <div id="columna1">
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3050.6861394594193!2d-71.30228838488271!3d-40.12699747766595!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x96110c126d9136dd%3A0xdbda8f5fb50c19c1!2sCj%C3%B3n.%20de%20Gingins%2013%2C%20Q8370%20San%20Martin%20de%20los%20Andes%2C%20Neuqu%C3%A9n!5e0!3m2!1ses!2sar!4v1659624676364!5m2!1ses!2sar" width="885" height="500"allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
            </div>
            <div id="columna2">
              <form className="form">
                <h2 className="form__title"> Inversion/USD</h2>
                <HouseIcon className="icon"/><span className="text__1"> Departamento de 63 mts2/ 2 habitaciones/estacionamiento / a dos cuadras del centro/ Inversion.</span>
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
export default Blog10;
