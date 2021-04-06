import Header from "./Header"

const Footer = ({texto, saludar}) => {
    return (
        <footer>
            <h4>{texto}</h4>
            <button onClick={saludar}>Saludar</button>
        </footer>
    )
}

export default Footer