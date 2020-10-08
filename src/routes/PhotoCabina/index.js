import React from "react";
import { Carousel } from "antd";
import img1 from "../../assets/images/fotos/photoCabina1.jpg"
import img2 from "../../assets/images/fotos/photoCabina2.jpeg"
import img3 from "../../assets/images/fotos/photoCabina3.jpeg"
import img4 from "../../assets/images/fotos/photoCabina4.jpeg"
import img5 from "../../assets/images/fotos/photoCabina5.jpeg"
const PhotoCabina = () => {
  return (
    <div>
      <div className="tituloServicio">
        <h1>MG Fotocabina</h1>
      </div>
      <div class="card">
        <div class="card-body descripcion">
          <h2>Fotobox</h2>
          <p>
            ● Te ofrecemos algo diferente y divertido, como souvenir para
            regalar en bautismos, cumpleaños, casamientos y todo tipo de evento.
          </p>
          <p>● Con el cotillón más divertido.</p>
          <p>
            ● Te personalizados el tema de la foto de acuerdo con la temática
            del evento.
          </p>
          <p>● Además te ofrecemos imanes de fotos.</p>

          <p>Más info comunicate con nosotros: ~ 3513224580 ~</p>
        </div>
      </div>
      
      <Carousel className="carrouselPhotos" effect="fade" autoplay={true}>
        <div>
          <img  src={img1}></img>
        </div>
        <div>
        <img  src={img2}></img>
        </div>
        <div>
        <img  src={img3}></img>
        </div>
        <div>
        <img  src={img4}></img>
        </div>
        <div>
        <img  src={img5}></img>
        </div>
      </Carousel>
      ,
    </div>
  );
};
export default PhotoCabina;
