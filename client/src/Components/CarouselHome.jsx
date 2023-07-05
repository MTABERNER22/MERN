import { Carousel } from "react-bootstrap";
import "./Components.css"

function CarouselHome(){
    return (
        <div className="cajaCarousel"  >
        <Carousel>
          <Carousel.Item  className="carousel">
            <img
              className="d-block w-100 "
              src="https://res.cloudinary.com/dmbvwreei/image/upload/v1687060804/proyectoApi/iphone-xr-colores-1300x650_sttlfo.webp"
              alt="First slide"
            />
            <Carousel.Caption className="captionUno">
              <h2  style={{fontFamily:'montserrat'}} >Bienvenido a TechnoHouse</h2>
              <p>Encuentra aquí nuestras mejores ofertas</p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item className="carousel">
            <img
              className="d-block w-100"
              src="https://res.cloudinary.com/dmbvwreei/image/upload/v1687060665/proyectoApi/mockup-image-blank-white-screen-cell-phone-women-hand-holding-texting-using-mobile-on-desk-at-home-office-free-photo_k25vot.jpg"
              alt="Second slide"
            />
    
            <Carousel.Caption className="">
              <h3  style={{fontFamily:'montserrat'}} >Servicio Técnico</h3>
              <p>Acerca tu equipo a nuestro local</p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item className="carousel">
            <img
              className="d-block w-100"
             
              src="https://res.cloudinary.com/dmbvwreei/image/upload/v1687059997/proyectoApi/78FZf46dq_1256x620__1_1_seulqb.webp"
              alt="Third slide"
            />
    
            <Carousel.Caption>
              <h1  style={{ color: 'orange'}} > <b>Super Oferta 2x1 !</b> </h1>
              <p>
                Comprando tu Samsug Galaxy A053 te llevas otro de regalo!
              </p>
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>
        </div>
      );
}

export default CarouselHome;