import React from "react";
import  "./blog.css";
import { Link } from "react-router-dom";
import Foto from "../../../assets/hori.png";
import img1 from "../../../../public/Imgs3/miciu.jpeg";
import img2 from "../../../../public/Imgs3/miciu2.jpeg";
import img3 from "../../../../public/Imgs3/miciu3.jpeg";
import img4 from "../../../../public/Imgs3/miciu4.jpeg";
import img5 from "../../../../public/Imgs3/miciu.jpeg";
import img6 from "../../../../public/Imgs3/miciu19.jpeg";
import HouseIcon from '@mui/icons-material/House';
import InstagramIcon from '@mui/icons-material/Instagram';
import Navbar  from "../../../components/navbar/Navbar";


const Blog03= () => {
  return (
      <>
        <Link to="/">
          <Navbar/>
        </Link>
      <div className="container-desc">
          <h2>Casa de 4 habitaciones con quincho</h2>
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
             <h1>$330.000<span className="barra__subtitulo">/USD</span></h1>
             <a href="mailto:catalanmilton826@gmail.com">
                <h2>Consultános</h2>
              </a>
            </div>
          </div>
           <div className="container-100">
            <div id="descripcion">
              <span>Ubicada en calle Miciu 534, entre Buenos Aires y Los tordos ( calle cortada sin salida ) PH, lote 325 m2 Casa 150m2 con 4 habitaciones, lavadero, cocina, comedor, living en desnivel, hab PB, baño completo PB, y 3 hab PA, baño completo con ducha e hidromasaje de 1.90 x 090 PA Calefacción por piso radiante, con boiler ACS de 200 Lts. Aberturas PVC con DVH laminado en su totalidad. Galpón/quincho de 42 m2 Escritura, subdivisión, al dia.</span>
            </div>
            <div id="columna1">
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3050.470812058166!2d-71.30129028255615!3d-40.13179519999999!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x96110c0fdf1d57a5%3A0x48166f3041222159!2sGeorg%20Miciu%20343%2C%20San%20Martin%20de%20los%20Andes%2C%20Neuqu%C3%A9n!5e0!3m2!1ses!2sar!4v1659623280359!5m2!1ses!2sar" width="885" height="500" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
            </div>
            <div id="columna2">
              <form className="form">
                <h2 className="form__title"> $330.000 /USD</h2>
                <HouseIcon className="icon"/><span className="text__1">Lote de 325mt2 / construcción de 150mt2 / 4 dormitorios / Galpon/Quincho 42 mt2/ Escritura, subdivisión al dia</span>
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
          </>
  );
};
export default Blog03;
