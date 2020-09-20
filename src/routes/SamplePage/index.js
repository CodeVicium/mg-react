import React from "react";
import Logo from "../../assets/images/newLogoChange.pi9f4___";
const SamplePage = () => {
  return (
    <div>
          <nav id="menu" class="navbar navbar-expand-lg navbar-ligth bg-light fixed-top nav">
         <a class="navbar-brand pl-5" href="#"><img id="logo" class="imgLogoCont" src={Logo} alt="logo" /></a>
         <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"><i class="fas fa-bars"></i></span>
         </button>

         <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav mr-auto">

               <li class="nav-item active">
                  <a class="nav-link" href="#home">
                     Inicio
                     <span class="sr-only">(current)</span>
                  </a>
               </li>
               <li class="nav-item">
                  <a class="nav-link" href="#services">Servicios</a>
               </li>
               <li class="nav-item">
                  <a class="nav-link" href="#contact">Contacto</a>
               </li>
            </ul>
         </div>
      </nav>
      <section style={{display: "flex"}}>
         <div class="row">
            <div class="col-12 col-sm-6">
               <div id="home">
               </div>
            </div>
            <div class="col-12 col-sm-6">
               <div class="card discriptionHome">
                  <h1 class="card-title titleMg">MgEventos</h1>
                  <div class="card-body history">
                     <p>Una empresa familiar con mas de 10años de experiencia profesional</p>
                     <p>Siempre realizando nuestro trabajo con la mayor devocion para que tu noche sea perfecta</p>
                     <p>Todo lo que necesitas para volver esa noche en especial para voz y todos tus invitados</p>
                  </div>
               </div>
            </div>
         </div>
      </section>
      
      <section id="services">
        <div class="row serviceCont">
           <div class="col-12" style={{paddingBottom: "1.8rem"}}>
              <div class="card services fotoCabina">
                 <div class="card-header" style={{fontWeight: "800"}}>
                  ♡☆ M.G Fotocabina☆♡
                 </div>
                 <div class="card-body backwithcolor">           
                      <p>
                         Fotobox
                      </p>
                   <p>
                      ● Te ofrecemos algo diferente y divertido, como souvenir para regalar en bautismos, cumpleaños, casamientos y todo tipo de evento.
                   </p>
                   <p>
                      ● Con el cotillón más divertido.
                   </p>
                   <p>
                      ● Te personalizados el tema de la foto de acuerdo con la temática del evento.
                   </p>
                   <p>
                      ● Cd con las fotos.
                   </p>
                   <p>
                      ● Además te ofrecemos imanes de fotos.
                   </p>
   
                    <p>
                       Más info comunicate con nosotros: 
                         ~ 3513224580 ~
                    </p>
                 
                 </div>

              </div>
           </div>
           <div class="col-12" style={{paddingTop: "1.8rem"}}>
              <div class="card services foto-filmacion">
                 <div class="card-header">
                  Foto y Filmación
                 </div>
                 <div class="card-body" style={{padding: "unset"}}>
                    <div class="backwithcolor" style={{height: "100%"}}>
                       
                        Los recuerdos son valiosos y la fotografía captura un instante de tu vida para siempre.
                        Contactanos y haremos que tu noche soñada perdure en el tiempo

                    </div>
                 </div>
              </div>
           </div>
      
        </div>
      </section>
      {/* <section id="contact">
            <form method="POST" action="/contactForm" class="contactForm" id="contact-form">
               <span class="titleContact">Formulario de contacto</span>
               <div class="form-group" style="margin-top: 1.5rem;">
                  <label for="name">Nombre y Apellido</label>
                  <input name="name" type="text" class="form-control" id="name" aria-describedby="nameHelp">
                </div>
               <div class="form-group">
                  <label for="email">Correo electronico</label>
                  <input name="email" type="email" class="form-control" id="email" aria-describedby="emailHelp">
                </div>
               <div class="form-group">
                  <label for="contact_number">Numero de contacto</label>
                  <input type="text" name="contact_number" class="form-control" id="contactNumber" aria-describedby="contactNumber">
                </div>
               <div class="form-group">
                  <label for="">Mensaje</label>
                  <textarea name="message" class="form-control" id="message" aria-describedby="msjHelp"></textarea>
                </div>
               <input  type="submit" class="btn btn-primary float-right mr-3|" value="Enviar">
           </form>
      </section> */}
      <div class="social-bar">
         <a href="https://www.facebook.com/MGeventos-sonido-iluminaci%C3%B3n-cabina-foograficas-506903259649106/" class="fab fa-facebook-f" target="_blank"></a>
         <a href="https://instagram.com/joseluismachado4?igshid=146k2nhozihwk" class="fab fa-instagram" target="_blank"></a>
         <a href="https://wa.link/sucbda" class="fab fa-whatsapp" target="_blank"></a>
      </div>
    </div>
  );
};

export default SamplePage;
