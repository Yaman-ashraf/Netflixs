import React, { Component } from 'react';
import style from './Movies.module.css'

class Movie extends Component {
    render() {
        // نستقبل العناصر من موفيز
        let { img, name } = this.props.movie;
        return (
            <div className=' col-md-3 col-sm-12'>
                <img className='w-100' src={`assets/imgs/${img}`} alt={name} />
                <h3 className={`${style.movName} text-center py-3`}>{name}</h3>
            </div>
        );
    }
}

export default Movie;
