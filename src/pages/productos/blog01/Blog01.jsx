import React from "react";
import  "./blog.css";
import { Link } from "react-router-dom";
import Foto from "../../../assets/hori.png";
import img1 from "../../../../public/Imgs1/foto1.jpeg";
import img2 from "../../../../public/Imgs1/foto2.jpeg";
import img3 from "../../../../public/Imgs1/foto3.jpeg";
import img4 from "../../../../public/Imgs1/foto4.jpeg";
import img5 from "../../../../public/Imgs1/foto5.jpeg";
import img6 from "../../../../public/Imgs1/foto6.jpeg";
import HouseIcon from '@mui/icons-material/House';
import InstagramIcon from '@mui/icons-material/Instagram';
import Navbar  from "../../../components/navbar/Navbar";


const Blog01= () => {
  return (
   <> 
      <Link to="/">
          <Navbar/>
        </Link>
      <div className="container-desc">
          <h2>Excelente oportunidad, Casa en Barrio Caleuche</h2>
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
             <h1>$120.000<span className="barra__subtitulo">/USD</span></h1>
             <a href="mailto:catalanmilton826@gmail.com">
                <h2>Consultános</h2>
              </a>
            </div>
          </div>
           <div className="container-100">
            <div id="descripcion">
              <span>Esta hermosa propiedad esta a 6 km. de la ciudad de San martin de los andes, cuenta con gas por red, luz, agua de vertiente y lecho nitrificante. Zona de bosques y con un terreno con relleno, la propiedad esta construida en madera de la zona y cerco vivo en la entrada. Para llegar al barrio Caleuche hay que seguir la ruta 62 camino a Lolog, es asfaltado hasta el barrio, y cerca de este tambien se puede acceder a Laguna Rosales, hermosa zona de caminatas.</span>
            </div>
            <div id="columna1">
            <iframe src="https://www.google.com/maps/embed?pb=!1m19!1m8!1m3!1d6102.840180050847!2d-71.3113742!3d-40.1106407!3m2!1i1024!2i768!4f13.1!4m8!3e6!4m0!4m5!1s0x96110d573217712b%3A0xc5dcb6913dc6542!2sEl%20maquinista%20P.%C2%BA%20de%20los%20M%C3%BAsicos%20Neuqu%C3%A9n!3m2!1d-40.1106407!2d-71.3113742!5e0!3m2!1ses!2sbr!4v1666789182997!5m2!1ses!2sbr" width="855" height="450" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
            </div>
            <div id="columna2">
              <form className="form">
                <h2 className="form__title"> $120.000 /USD</h2>
                <HouseIcon className="icon"/><span className="text__1">Lote de 600mt2 / construcción de 100mt2 / 3 dormitorios / 1 baño</span>
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
export default Blog01;

