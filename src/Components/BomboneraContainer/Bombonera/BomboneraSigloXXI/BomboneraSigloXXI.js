import React from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import "../../BomboneraContainer.css";
import BOMBONERA1 from "../../../../Imagenes/NUEVABOMBONERA-1.webp"
import BOMBONERA2 from "../../../../Imagenes/NUEVABOMBONERA-2.png"
import BOMBONERA3 from "../../../../Imagenes/NUEVABOMBONERA-3.jpg"
import BOMBONERA4 from "../../../../Imagenes/NUEVABOMBONERA-4.jpg"
import BOMBONERA5 from "../../../../Imagenes/NUEVABOMBONERA-5.jpg"

function BomboneraSigloXXI() {
    return(
        <div>
            <h1 className="titulo">BOMBONERA SIGLO XXI</h1>
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
                La propuesta de Ibarra para resolver el problema que capacidad no incluye a la actual Bombonera, aunque no será demolida: la contemplan para albergar una suerte de Fan Fest los días de partido para aquellos que quedaron afuera del partido y, además, para que jueguen como locales categorías juveniles y el primer equipo femenino.
                La idea simbólica es, además, que cada vez que Boca sea local jugar a dos estadios completos, ya que en la vieja Bombonera se podrá ver en pantallas el encuentro disputado a poco más de 200 metros, dónde hoy se emplaza Casa Amarilla.
            </p>
            <h2 className="titulo">Capacidad</h2>
            <p className="descripcion">
                El proyecto contempla un estadio con capacidad para 105.369 espectadores, distribuidos en 52.481 plateas, tribunas populares para 49.673 personas y palcos, con capacidad para cuatro y ocho ocupantes, que totalizarán 3.484 simpatizantes.
            </p>
            <h2 className="titulo">Financiacion</h2>
            <p className="descripcion">
                Contempla 20 cabinas de para transmisiones de TV y radio y la promesa de wifi de última generación. El costo de este estadio pregonado como "mundialista " tendrá un "costo aproximado" de 390 millones de dólares.
                Ese monto estará financiado con distintas herramientas, una de ellas la preventa de los palcos, abonos y plateas, además del espacio en el estacionamiento, por periodos de cinco a seis años. Otro de los ingresos llegará del nombre comercial que tendrá: una marca asociada al club durante el término de un contrato. El resto de los acuerdos comerciales también están contabilizados como ingresos para la etapa de construcción.
            </p>
            <h2 className="titulo">Construcción</h2>
            <p className="descripcion">
                Si gana Ibarra, entonces, luego deberá presentar la documentación en las dependencias del Gobierno de la Ciudad y esperar que se trate la aprobación de la rezonificación urbana en la Legislatura, ya que el proyecto involucra la desaparición de algunas calles del barrio.
                Ese trámite que demanda unos ocho meses, según la estimación del candidato. Una vez completo ese paso, la construcción demandará tres años. De este modo, si se encadena la serie de sucesos detallados, la nueva Bombonera estaría lista para la finalización del hipotético mandato de Ibarra.
            </p>
        </div>
    )
}

export default BomboneraSigloXXI;