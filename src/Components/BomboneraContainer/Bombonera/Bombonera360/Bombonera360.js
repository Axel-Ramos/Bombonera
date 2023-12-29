import React from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import "../../BomboneraContainer.css";
import BOMBONERA1 from "../../../../Imagenes/BOMBONERA360-1"
import BOMBONERA2 from "../../../../Imagenes/BOMBONERA360-2.jpg"
import BOMBONERA3 from "../../../../Imagenes/BOMBONERA360-3.jpg"
import BOMBONERA4 from "../../../../Imagenes/BOMBONERA360-4.jpg"
import BOMBONERA5 from "../../../../Imagenes/BOMBONERA360-5.webp"

const Bombonera360=() =>{
    return(
        <div>
            <h1 className="titulo">BOMBONERA 360</h1>
            <div className="contenedor">
                <Carousel className="estadio">
                    <div>
                        <img src={BOMBONERA1} alt="Foto Estadio"/>
                    </div>
                    <div>
                        <img src={BOMBONERA2} alt="Foto Estadio"/>
                    </div>
                    <div>
                        <img src={BOMBONERA3} alt="Foto Estadio"/>
                    </div>
                    <div>
                        <img src={BOMBONERA4} alt="Foto Estadio"/>
                    </div>
                    <div>
                        <img src={BOMBONERA5} alt="Foto Estadio"/>
                    </div>
                </Carousel>
            </div> 
            <p className="descripcion">
                La Bombonera 360° es el proyecto impulsado por el oficialismo y el principal impulsor es Jorge Amor Ameal.
                La Bombonera 360° busca cerrar definitivamente el estadio con una cuarta tribuna derribando los actuales palcos y plateas preferenciales. Así, el club ganaría casi 30 mil lugares para los socios en el estadio, siendo así para 80 mil espectadores. Para que este proyecto prospere, habría que comprar 129 propiedades entre las que se encuentran vecinos que no dan el brazo a torcer y ocupantes sin papeles.
            </p>
        </div>
    )
};

export default Bombonera360;