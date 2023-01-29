import React, { Component } from 'react'
import Navbar from './Navbar'
import Home from './Home'
import Footer from './Footer'
import { Route } from 'react-router-dom'


export default class App extends Component {
    render() {
        return (
            <div>
                <Navbar />
                <Route path='/' element={<Header/>}></Route>
                <Route path='/' element={<Movies/>}></Route>
                <Route path='/' element={<NotFound/>}></Route>
                <Footer/>
            </div>
        )
    }
}
