import React from 'react'
import Content from '../components/Content'
import Footer from '../components/Footer'
import Header from '../components/Header'

export default class Home extends React.Component {
    saludar() {
        alert("Hola")
    }

    render() {
        var titulo = "Cualquier cosa"
        var textoFooter = "Hola yo soy el footer de tu página"
        
        const amigos = [
            {id: 1, nombre: 'Susana', foto: 'susana.jpg'},
            {id: 2, nombre: 'Mirtha', foto: 'mirtha.jpg'},
            {id: 3, nombre: 'Charly', foto: 'charly.jpg'},
            {id: 4, nombre: 'Spinetta', foto: 'flaco.jpg'}
        ]
        return (
            <div className="homeContainer">
                <Header tit={titulo} valor={5} />
                <Content amigos={amigos} />                
                <Footer texto={textoFooter} saludar={this.saludar} />
            </div>
        )
    }
}