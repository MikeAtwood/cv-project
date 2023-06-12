import React, { Component } from 'react';
import '../index.css'
import General from './General';
import Education from './Education';
import Experience from './Experience';

class Form extends Component {
    render() {
        return (
            <div className='form'>
                <General />
                <hr className='section-line' />
                <Education />
                <hr className='section-line' />
                <Experience />
            </div>
        )
    }
}

export default Form