import React, { Component } from 'react'
import style from './footer.module.css'
export default class Footer extends Component {
    render() {
        return (
            <footer className={`${style.footer} bg-dark`}>
                <p className='text-white text-center py-3 m-0'>
                    Copyright &copy; 2023 by Netflix.
                </p>
            </footer>
        )
    }
}
