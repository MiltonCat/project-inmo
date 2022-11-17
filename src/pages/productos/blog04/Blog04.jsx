import React from "react";
import  "./blog.css";
import { Link } from "react-router-dom";
import Foto from "../../../assets/hori.png";
import img1 from "../../../../public/Imgs4/foto16.jpeg";
import img2 from "../../../../public/Imgs4/foto1.jpeg";
import img3 from "../../../../public/Imgs4/foto2.jpeg";
import img4 from "../../../../public/Imgs4/foto3.jpeg";
import img5 from "../../../../public/Imgs4/foto4.jpeg";
import img6 from "../../../../public/Imgs4/foto5.jpeg";
import HouseIcon from '@mui/icons-material/House';
import InstagramIcon from '@mui/icons-material/Instagram';
import Navbar  from "../../../components/navbar/Navbar";



const Blog04= () => {
  return (
    <div>
      <>
        <Link to="/">
          <Navbar/>
        </Link>
      </>
      <div className="container-desc">
          <h2>Departamento de 2 habitaciones.</h2>
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
             <h1>$145.000<span className="barra__subtitulo">/USD</span></h1>
             <a href="mailto:catalanmilton826@gmail.com">
                <h2>Consultános</h2>
              </a>
            </div>
          </div>
           <div className="container-100">
            <div id="descripcion">
              <span>Esta hermosa propiedad tiene una excelente ubicación a 2 cuadras de la avenida San martin, esta zona cuenta con colegios, supermercados y correos en sus alrededores zona muy tranquila, el departamento cuenta con 2 habitaciones con una hermosa cocina y un living comedor amplio , 1 baño y con dos habitaciones con placard y mucha luz, una hermosa vista al cerro Curruhuinca </span>
            </div>
            <div id="columna1">
            <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d3049.4768748186802!2d-71.353152!3d-40.153935!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x96110e75da0fbcfb%3A0x12c4ec1a10b966e9!2sRudecindo%20Roca%20756%2C%20Q8370%20San%20Martin%20de%20los%20Andes%2C%20Neuqu%C3%A9n!5e0!3m2!1ses-419!2sar!4v1666792536764!5m2!1ses-419!2sar" width="885" height="500" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
            </div>
            <div id="columna2">
              <form className="form">
                <h2 className="form__title"> $145.000 /USD</h2>
                <HouseIcon className="icon"/><span className="text__1">Departamento de 45mt2 / 2 dormitorios / Excelente ubicación /con cochera</span>
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
export default Blog04;
