import React from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import "../../BomboneraContainer.css";
import BOMBONERA1 from "../../../../Imagenes/ESLOVENO-1"
import BOMBONERA2 from "../../../../Imagenes/ESLOVENO-2.jpg"
import BOMBONERA3 from "../../../../Imagenes/ESLOVENO-3.jpg"
import BOMBONERA4 from "../../../../Imagenes/ESLOVENO-4.jpg"
import BOMBONERA5 from "../../../../Imagenes/ESLOVENO-5.jpg"

function ProyectoEsloveno() {
    return(
        <div>
            <h1 className="titulo">PROYECTO ESLOVENO</h1>
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
                La propuesta llamada por su creador, Fabián Fiori, como el "Proyecto Esloveno". Este pretende sumar 23 mil localidades a La Bombonera, llevando en total a 77.000 el aforo total del estadio, solamente 3 mil menos que lo que pretende el de 360°.            Además, se realizaría en un lapso de 15 meses.
            </p>
            <p className="descripcion">
                Cabe destacar que otra diferencia además de la pequeña variación en el aforo es que con el Esloveno, Boca no tendría que adquirir las dos manzanas aledañas al estadio sino que solamente las dos primeras líneas de terrenos lindantes a la calle Dr. del Valle de Iberlucea y se correría unos metros la calle en sí. Este proyecto es el que aceptan los vecinos y lo impulsan, incluso mostrándose dispuestos a vender sus domicilios si se concreta la reforma de La Bombonera con la propuesta eslovena.
            </p>
        </div>
    )
}

export default ProyectoEsloveno;