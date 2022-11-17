import React from "react";
import  "./blog.css";
import { Link } from "react-router-dom";
import Foto from "../../../assets/hori.png";
import img1 from "../../../../public/Imgs13/foto8.jpeg";
import img2 from "../../../../public/Imgs13/foto2.jpeg";
import img3 from "../../../../public/Imgs13/foto1.jpeg";
import img4 from "../../../../public/Imgs13/foto3.jpeg";
import img5 from "../../../../public/Imgs13/foto7.jpeg";
import img6 from "../../../../public/Imgs13/foto9.jpeg";
import HouseIcon from '@mui/icons-material/House';
import InstagramIcon from '@mui/icons-material/Instagram';
import Navbar  from "../../../components/navbar/Navbar";


const Blog12= () => {
  return (
    <div>
      <>
        <Link to="/">
          <Navbar/>
        </Link>
      </>
      <div className="container-desc">
          <h2>Excelente Lote Alihuen Alto, San Martin de los andes.</h2>
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
             <h1>$80.000<span className="barra__subtitulo">/USD</span></h1>
             <a href="mailto:catalanmilton826@gmail.com">
                <h2>Consultános</h2>
              </a>
            </div>
          </div>
           <div className="container-100">
            <div id="descripcion">
              <span>Este lote cuenta con 845 mts2 es excelente para inversion ya que es uno de los pocos lotes con esta caracteristica, superficie plana en un 80%, que lo hace único en esta zona.</span>
            </div>
            <div id="columna1">
            <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d6101.127006553127!2d-71.321572!3d-40.12973!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x96110c3833d46fd7%3A0x1cd29b7cf0d9dba2!2sC.%20P.%C2%BA%20del%20Encuentro%2C%20San%20Martin%20de%20los%20Andes%2C%20Neuqu%C3%A9n!5e0!3m2!1ses!2sar!4v1655911250588!5m2!1ses!2sar" width="885" height="500" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
            </div>
            <div id="columna2">
              <form className="form">
                <h2 className="form__title"> $80.000 /USD</h2>
                <HouseIcon className="icon"/><span className="text__1"> Lote de 845 mts2/ 80% plano / Lote en excelentes condiciones.</span>
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
export default Blog12;
