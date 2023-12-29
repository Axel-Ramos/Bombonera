import React from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import "../../BomboneraContainer.css";
import BOMBONERA1 from "../../../../Imagenes/BOMBONERA.jpg"
import BOMBONERA2 from "../../../../Imagenes/BOMBONERA-2.jpg"
import BOMBONERA3 from "../../../../Imagenes/BOMBONERA-3.jpg"
import BOMBONERA4 from "../../../../Imagenes/BOMBONERA-4.jpg"
import BOMBONERA5 from "../../../../Imagenes/BOMBONERA-5.jpg"

function BomboneraActual() {
    return(
        <div>
            <h1 className="titulo">LA BOMBONERA</h1>
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
            <p className="descripcion">La Bombonera es el corazón de Boca Juniors, y uno de los estadios más famosos del mundo, gracias a la fiesta que se vive allí durante cada partido.  No es un espectáculo que se dé solo puertas adentro, sino que las calles del barrio empiezan a palpitar la emoción incluso horas antes de que comience.</p>
            <p className="descripcion">A esta altura, la cancha, que oficialmente se llama Alberto J. Armando, se convirtió en una especie de monumento del fútbol. Antes de llegar a esta construcción, inaugurada en 1940, el club era local en una con tribunas de madera. Tiene una estructura en forma de herradura, con tres bandejas superpuestas y un empinado ángulo de inclinación que lo asemeja a una caja de bombones, de ahí su nombre popular. </p>
            <p className="descripcion">Los pocos metros que separan el campo de juego de las tribunas permiten una gran proximidad entre los espectadores y los equipos, lo que hace que la experiencia de ir a ver un partido sea indescriptible.</p>
        </div>
    )
}

export default BomboneraActual;