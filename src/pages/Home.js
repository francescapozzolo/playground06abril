import React from 'react'
import Content from '../components/Content'
import Footer from '../components/Footer'
import Header from '../components/Header'

export default class Home extends React.Component {
    render() {
        return (
            <div className="homeContainer">
                <Header />
                <Content />
                <Footer />
            </div>
        )
    }
}