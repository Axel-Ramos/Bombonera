import React from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import "../../BomboneraContainer.css";
import BOMBONERA1 from "../../../../Imagenes/BOMBONERAISLA-1.webp"
import BOMBONERA2 from "../../../../Imagenes/BOMBONERAISLA-2.jpg"
import BOMBONERA3 from "../../../../Imagenes/BOMBONERAISLA-3.jpg"
import BOMBONERA4 from "../../../../Imagenes/BOMBONERAISLA-4.jpg"
import BOMBONERA5 from "../../../../Imagenes/BOMBONERAISLA-5.jpg"


function BomboneraNueva() {
    return(
        <div>
            <h1 className="titulo">BOMBONERA NUEVA</h1>
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
    <h2 className="titulo">Ubicacion y Acceso</h2>
    <p className="descripcion">
        La Nueva Bombonera estará ubicada en lo que se conoce popularmente como Isla Demarchi. Es importante aclarar que no se trata de una isla, sino que es un predio de 12 hectáreas a la que se puede acceder por tierra y está a unas pocas cuadras de la Ciudad Deportiva de La Boca, lugar donde quiso también emplazar un estadio el expresidente Alberto J. Armando.
        La Isla Demarchi tiene actualmente dos calles por donde se puede acceder al predio de 12 hectáreas. No obstante, el proyecto de La Nueva Bombonera contempla la construcción de 3 puentes peatonales.
        Serán puentes retráctiles, esto significa que serán puentes móviles como la mayoría de los existentes en esa zona. En los días que haya un partido estarán habilitados para el acceso peatonal de los socios. El procedimiento es similar al que ocurre actualmente en la Bombonera con el tren de carga lindero al estadio, que interrumpe su recorrido en los horarios en los que Boca juega de local.
    </p>
    <h2 className="titulo">Financiacion y Construccion</h2>
    <p className="descripcion">
        El precio final de la obra aún no está establecido porque depende de muchos factores, pero sí existe un monto aproximado para la construcción de un estadio del tamaño y comodidades de la Nueva Bombonera: 400 millones de dólares.
        El proyecto de Jorge Reale plantea que la construcción debería financiarse por múltiples vías, principalmente la venta anticipada de los nuevos abonos y palcos y la comercialización de un sponsoreo del estadio.
        Un estadio de las dimensiones descriptas podría construirse en un plazo de 3 a 4 años.
    </p>
    </div>
    )
}
export default BomboneraNueva;