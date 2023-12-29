import {Link} from "react-router-dom";
import Boca from "../../Imagenes/BOCA.jpg"
import Betsson from "../../Imagenes/BETSSON.jpg"
import Adidas from "../../Imagenes/ADIDAS.jpg"
import "./Navbar.css";

function Navbar() {
    return(
        <header>
            <nav>
                <section class="boca">
                    <div class="boca">
                    <Link to="/" className="links"><img src={Boca} alt="Logo Boca" className="fotos"></img></Link>
                    </div>
                    <div>
                        <img src={Betsson} alt="Logo Betsson" className="fotos-sponsor"></img>
                        <img src={Adidas} alt="Logo Adidas" className="fotos-sponsor"></img>
                    </div>
                    
                </section>
                <section class="proyectos">
                    <Link to="/LaBombonera" className="links"><p>La Bombonera</p></Link>
                    <Link to="/BomboneraSigloXXI" className="links"><p>Bombonera SigloXXI</p></Link>
                    <Link to="/NuevaBombonera" className="links"><p>Nueva Bombonera</p></Link>
                    <Link to="/Bombonera360" className="links"><p>Bombonera 360</p></Link>
                    <Link to="/ProyectoEsloveno" className="links"><p>Proyecto Esloveno</p></Link>   
                </section>
            </nav>
        </header>
    )
}

export default Navbar;