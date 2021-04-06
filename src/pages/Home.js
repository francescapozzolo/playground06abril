import React from 'react'
import Content from '../components/Content'
import Footer from '../components/Footer'
import Header from '../components/Header'

export default class Home extends React.Component {
    render() {
        var titulo = "Cualquier cosa"
        var textoFooter = "Hola yo soy el footer de tu página"
        var saludar = () => {
            alert("Hola!")
        }
        return (
            <div className="homeContainer">
                <Header tit={titulo} valor={5} />
                <Content />                
                <Footer texto={textoFooter} saludar={saludar} />
            </div>
        )
    }
}