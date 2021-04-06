
const Amigo = ({amigo: {id, nombre, foto}, fotoAMostrar}) => {
    return (
        <div className="cajaAmigo">
            <h1>{nombre}</h1>
            <img src={fotoAMostrar.default} />    
            <div className="portaFoto" style={{
                backgroundImage: `url(${fotoAMostrar.default})`
            }}></div>
        </div>
    )
}

export default Amigo
