import React from "react";
import { Carousel } from "antd";
import img1 from "../../assets/images/fotos/photoCabina1.jpg"
import img2 from "../../assets/images/fotos/photoCabina2.jpeg"
import img3 from "../../assets/images/fotos/photoCabina3.jpeg"
import img4 from "../../assets/images/fotos/photoCabina4.jpeg"
import img5 from "../../assets/images/fotos/photoCabina5.jpeg"
const contentStyle = {
  width: "800px",
  height: '600px',
  color: '#fff',
  lineHeight: '160px',
  textAlign: 'center',
  background: '#364d79',
};
const PhotoCabina = () => {
  const onChange = (a)=>{
    console.log(a,"a");
  }
  return (
    <div>
      <div className="tituloServicio">
        <h1>M.G Fotocabina</h1>
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
          <p>● Cd con las fotos.</p>
          <p>● Además te ofrecemos imanes de fotos.</p>

          <p>Más info comunicate con nosotros: ~ 3513224580 ~</p>
        </div>
      </div>
      
      <Carousel className="carrouselPhotos" effect="fade" autoplay={true}>
        <div>
          <img style={contentStyle} src={img1}></img>
        </div>
        <div>
        <img style={contentStyle} src={img2}></img>
        </div>
        <div>
        <img style={contentStyle} src={img3}></img>
        </div>
        <div>
        <img style={contentStyle} src={img4}></img>
        </div>
        <div>
        <img style={contentStyle} src={img5}></img>
        </div>
      </Carousel>
      ,
    </div>
  );
};
export default PhotoCabina;
