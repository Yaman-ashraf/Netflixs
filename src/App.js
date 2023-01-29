import React, { Component } from 'react'
import { Route, Routes } from 'react-router-dom'
import Footer from './Components/Footer/Footer'
import Header from './Components/Header/Header'
import Movies from './Components/Movies/Movies'
import Navbar from './Components/Navbar/Navbar'
import NotFound from './Components/NotFound/NotFound'

export default class App extends Component {
    render() {
        return (
            <div>
                <Navbar />

                <Routes>
                <Route path='/' element={<Header/>}></Route>
                <Route path='/movies' element={<Movies/>}></Route>
                <Route path='*' element={<NotFound/>}></Route>
                </Routes>
                
                <Footer/>
            </div>
        )
    }
}
