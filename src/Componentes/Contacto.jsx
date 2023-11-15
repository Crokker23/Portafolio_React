import "./assets/Contacto.css"


function Contacto() {
    return (


       
            <div className='fundacio'>
                <form className="formulario" id="Contacto" netlify >
                    <div>
                        <label htmlFor="nombre"> <strong>Nombre:</strong></label>
                        <input type="text" id="nombre" name="nombre" />
                    </div>
                    <br />
                    <div>
                        <label htmlFor="correo"><strong>Correo:</strong></label>
                        <input type="email" id="correo" name="correo" />
                    </div>
                    <br />
                    <div>
                        <label htmlFor="telefono"><strong>Número Telefónico:</strong></label>
                        <input type="num" id="telefono" name="telefono" />
                    </div>
                    <br />
                    <div>
                        <label htmlFor="asunto"><strong>Asunto:</strong></label>
                        <input type="text" id="asunto" name="asunto" />
                    </div>
                    <br />
                    <input type="submit" value="Enviar" />
                </form>
            </div>





       


    )
}
export default Contacto
