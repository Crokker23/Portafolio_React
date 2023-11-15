import "./assets/Navegador.css"
function Navegador() {
    return (
        <nav class="navegador">
           
                <ul className="nav">
                    <a className="nav-bar" href="Home"> <b>Inicio</b></a>
                    <a className="nav-bar" href="#Sobre-mi"> <b> Sobre mi</b></a>
                    <a className="nav-bar" href="#Conocimientos"> <b>Conocimientos</b> </a>
                    <a className="nav-bar" href="#Experiencia"> <b>Experiencia</b></a>
                    <a className="nav-bar" href="#Contacto"> <b>Contacto</b> </a>
                </ul>

           

        </nav>
    )
}
export default Navegador;