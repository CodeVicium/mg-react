import React from "react";
import { Carousel } from "antd";
import img1 from "../../assets/images/fotos/photo1.jpg";
import img2 from "../../assets/images/fotos/photo2.jpeg";
import img3 from "../../assets/images/fotos/photo3.jpeg";
import img4 from "../../assets/images/fotos/photo4.jpeg";
import img5 from "../../assets/images/fotos/photo5.jpeg";
const Photo = () => {
  return (
    <div>
      <div className="tituloServicio">
        <h1>MG Foto y Filmación</h1>
      </div>
      <div className="card ">
        <div className="card-body descripcion">
          <div>
            Los recuerdos son valiosos y la fotografía captura un instante de tu
            vida para siempre. Contactanos y haremos que tu noche soñada perdure
            en el tiempo
          </div>
        </div>
      </div>
      <Carousel className="carrouselPhotos" effect="fade" autoplay={true}>
        <div>
          <img src={img1}></img>
        </div>
        <div>
          <img src={img2}></img>
        </div>
        <div>
          <img src={img3}></img>
        </div>
        <div>
          <img src={img4}></img>
        </div>
        <div>
          <img src={img5}></img>
        </div>
      </Carousel>
    </div>
  );
};
export default Photo;
