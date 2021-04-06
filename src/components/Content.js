import Amigo from "./Amigo"

const Content = ({amigos}) => {
    
    return (
        <div className="homeContent">
            {amigos.map(amigo => {
                const fotoAMostrar = require(`../assets/${amigo.foto}`)
                return <Amigo key={amigo.id} amigo={amigo} fotoAMostrar={fotoAMostrar} />
            })}
        </div>
    )
}

export default Content