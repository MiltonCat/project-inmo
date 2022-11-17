import React from "react";
import "./brand.css";
import { blog03,blog12,blog11} from "./imports";
import Card from "../../propiedades/card/Card";
import Card1 from "../../propiedades/card/Card1";
import Card2 from "../../propiedades/card/Card2";

const Brand = () => {
  return (
    <div className="brand">
      <div className="brand__container">
      <span class="_expepa">Inspiración para tu próxima propiedad</span>
      </div>
      <div className="home__section">
        <Card
          src={blog03}
          a
          href="/Blog03"
          title="Hermosa Casa 4 habitaciones"
          description="Excelente oportunidad"
          price="Usd 300.000"
        />
        <Card1
          src={blog12}
          a
          href="/Blog12"
          title="Excelente inversión"
          description="Lote en Alihuen alto."
          price="Usd 80.000"
        />
        <Card2
          src={blog11}
          a
          href="/Blog11"
          title="Hermosa Cabaña en Villa Cascada"
          description="Hermosa Cabaña en Villa Cascada"
           price="Usd 140.000"
          //nota="VENDIDO"
        />
      </div>
    </div>
  );
};

export default Brand;
