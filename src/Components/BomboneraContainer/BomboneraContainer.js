import React from "react";
import {Link} from "react-router-dom"
import BOMBONERA from "../../Imagenes/BOMBONERA.jpg"
import NUEVABOMBONERA from "../../Imagenes/NUEVABOMBONERA-5.jpg"
import BOMBONERAISLA from "../../Imagenes/BOMBONERAISLA-2.jpg"
import BOMBONERA360 from "../../Imagenes/BOMBONERA360-3.jpg"
import PROYECTOESLOVENO from "../../Imagenes/ESLOVENO-3.jpg"
import "./BomboneraContainer.css";


function BomboneraContainer() {
    return(
        <section>
            <article class="estadio-izq">
                <h1 class="titulo">La Bombonera</h1>
                <div class="card">
                    <p className="texto">El Estadio Alberto J. Armando, popularmente conocido como La Bombonera, es un estadio de fútbol perteneciente al Club Atlético Boca Juniors, ubicado en el barrio de La Boca en la ciudad de Buenos Aires, Argentina. Actualmente cuenta con una capacidad para 60.000 personas.</p>
                    <img src={BOMBONERA} alt="Foto Bombonera" class="imagen"></img>
                </div>
                <Link to="/LaBombonera" className="links"><buttom class="boton-mas">VER MAS</buttom></Link>
            </article>
            <article class="estadio-der">
                <h1 class="titulo">Bombonera SigloXX</h1>
                <div class="card">
                    <img src={NUEVABOMBONERA} alt="Foto Bombonera" class="imagen"></img>
                    <p className="texto">Andrés Ibarra, uno de los candidatos de la oposición, al proyecto de una nueva Bombonera. Este nuevo modelo de estadio tiene una particularidad: propone construir una nueva cancha, en el predio de Casa Amarilla, donde anteriormente se entrenaba el equipo profesional y donde hoy practica y juega el equipo femenino. Y con una capacidad para 105 mil personas.</p>
                </div>
                <Link to="/BomboneraSigloXXI" className="links"><buttom class="boton-mas">VER MAS</buttom></Link>
            </article>
            <article class="estadio-izq">
                <h1 class="titulo">Nueva Bombonera</h1>
                <div class="card">
                    <p className="texto">Jorge Reale cree en cambio que llegó el momento de hacer una nueva Bombonera que retome el proyecto de Alberto J. Armando, cerca de donde estaba la vieja Ciudad Deportiva. En la Isla Demarchi, a poco más de un kilómetro de la actual Bombonera, dentro del barrio con una capacida para 112.000 espectadores</p>
                    <img src={BOMBONERAISLA} alt="Foto Bombonera" class="imagen"></img>
                </div>
                <Link to="/NuevaBombonera" className="links"><buttom class="boton-mas">VER MAS</buttom></Link>
            </article>
            <article class="estadio-der">
                <h1 class="titulo">Bombonera 360</h1>
                <div class="card">
                    <img src={BOMBONERA360} alt="Foto Bombonera" class="imagen"></img>
                    <p className="texto">Jorge Amor Ameal insiste con el relanzamiento del proyecto Bombonera 360. Es un proyecto ambicioso que busca cerrar definitivamente el estadio con una cuarta tribuna derribando los actuales palcos y plateas preferenciales. Eso elevaría el aforo a unos 80.000 espectadores</p>
                </div>
                <Link to="/Bombonera360" className="links"><buttom class="boton-mas">VER MAS</buttom></Link>
            </article>
            <article class="estadio-izq">
                <h1 class="titulo">Proyecto Eslovano Plus</h1>
                <div class="card">
                    <p className="texto">Presentado y patentado por Fabián Fiori, asoma el Proyecto Esloveno Plus. Por un lado, la inclinación, para lograr una simetría con su sector opuesto (el de las plateas actuales). Por otro, una mayor capacidad, que llevaría el aforo a unas 80.000 localidades. Y en tercer lugar, la solución a un problema clave: el proyecto implica la compra sólo de los frentistas de Del Valle Iberlucea y de la segunda línea de propiedades.</p>
                    <img src={PROYECTOESLOVENO} alt="Foto Bombonera" class="imagen"></img>
                </div>
                <Link to="/ProyectoEsloveno" className="links"><buttom class="boton-mas">VER MAS</buttom></Link>
            </article>
        </section>
    )
}

export default BomboneraContainer;